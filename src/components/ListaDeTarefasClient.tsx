// src/components/ListaDeTarefasClient.tsx
'use client';

import { trpc } from '@/utils/trpc';
import Tarefa from "@/data/model/Tarefa";
import styles from "@/css/listaDeTarefa/ListaDeTarefas.module.css";
import Image from "next/image";
import formataData from "@/utils/FormataData";
import Link from "next/link";
import { useState } from 'react';

interface Props {
  data: Tarefa[]
}

export default function ListaDeTarefasClient({data} : Props  ) {

  const [errorExcluir, setErrorExcluir] = useState(false);
  const [tarefas, setTarefas] = useState<Tarefa[]>(data);

  const utils = trpc.useUtils();
  
  
  const excluirTarefa = trpc.tarefa.excluir.useMutation({
    onSuccess: (_, variables) => {
      setTarefas(prev => prev.filter(t => t.id !== variables.id));
      utils.tarefa.listar.invalidate()},
    onError: (error) => {
      console.error("Erro ao excluir tarefa:", error);
      setErrorExcluir(true);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      
    },
  });


  
  function renderizarTarefa(tarefa: Tarefa) {

    return (
      <div>

        <div className={styles.tarefa_part_titulo}>
        <h2 className={styles.tarefa_titulo}>{tarefa.titulo}</h2>

        <div className={styles.div_botoes}>
          <button className={styles.botao_editar}><Link className={styles.link_adicionar} href={`/editar/${tarefa.id}`}>
          
            <Image width={30}  height={30} className={styles.imagem} src="/escreva.svg" alt="editar" />
          
          </Link>
          </button>
          <button className={styles.botao_excluir} onClick={() => excluirTarefa.mutate({ id: tarefa.id })}>
          <Image  width={30}  height={34} className={styles.imagem} src="/lixeira.svg" alt="Excluir" />
          </button>
        </div>
        </div>
        <div className={styles.div_info}>
        {tarefa.descricao && (<p className={styles.descricao}>
          <strong>Descrição:</strong> {tarefa.descricao}</p>)}

        <div className={styles.div_dados_criacao}>

          <p><strong>Data De Criação: </strong>{formataData(tarefa.dataCriacao)}</p>
          {tarefa.dataAtualizacao !== tarefa.dataCriacao && (
          <p><strong>Última Atualização: </strong> {formataData(tarefa.dataAtualizacao)}</p>)}

        </div>
        </div>


      </div>
    );
  }

  return (

    <div className={styles.div_lista_tarefas}>

      
    <h1 className={styles.titulo}>Lista de Tarefas</h1>

    {errorExcluir && (
        <div className={styles.error_excluir}>
         <p>ATENÇÃO: erro em excluir tarefa</p> 
        </div>
      )}

    <div className={styles.div_botao_principal}>
     <Link className={styles.link_adicionar} href="/adicionar"> <button className={styles.botao_principal_adicionar}>
       Adicionar Tarefa </button></Link> 
    </div>
    <ul className={styles.lista}>
      {tarefas.map(tarefa => (
        <li className={styles.tarefa} key={tarefa.id}>
          {renderizarTarefa(tarefa)}
        </li>
      ))}
    </ul>

    </div>
  );
}