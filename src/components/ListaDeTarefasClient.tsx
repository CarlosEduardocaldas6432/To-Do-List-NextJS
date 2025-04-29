// src/components/ListaDeTarefasClient.tsx
'use client';

import { useState } from "react";
import Tarefa from "@/data/model/Tarefa";
import styles from "@/css/components/ListaDeTarefas.module.css";
import excluirTarefa from "@/modules/excluirTarefa";
import Image from "next/image";
import formataData from "@/modules/FormataData";
import Link from "next/link";

interface Props {
  tarefas: Tarefa[];
}

export default function ListaDeTarefasClient({ tarefas }: Props) {
  const [lista, setLista] = useState<Tarefa[]>(tarefas);

  function handleExcluir(tarefa: Tarefa) {
    excluirTarefa(tarefa);
    setLista(prev => prev.filter(t => t.id !== tarefa.id));
  }

  function renderizarTarefa(tarefa: Tarefa) {
    return (
      <div>

        <div className={styles.tarefa_part_titulo}>
        <h2 className={styles.tarefa_titulo}>{tarefa.titulo}</h2>

        <div className={styles.div_botoes}>
          <button className={styles.botao_editar} /* você pode implementar alterar aqui */>
            <Image width={30}  height={30} className={styles.imagem} src="/escreva.svg" alt="editar" />
          </button>
          <button className={styles.botao_excluir} onClick={() => handleExcluir(tarefa)}>
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
    <div className={styles.div_botao_principal}>
     <button className={styles.botao_principal_adicionar}><Link className={styles.link_adicionar} href="/adicionar">Adicionar Tarefa</Link>  </button>
    </div>
    <ul className={styles.lista}>
      {lista.map(tarefa => (
        <li className={styles.tarefa} key={tarefa.id}>
          {renderizarTarefa(tarefa)}
        </li>
      ))}
    </ul>

    </div>
  );
}