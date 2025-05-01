'use client';
import { trpc } from '@/utils/trpc';
import styles from "../../css/form/page.module.css";
import React, { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import Tarefa from '@/data/model/Tarefa';

interface Props {
  tarefa: Tarefa;
}

export default  function FormEditarClient({tarefa} : Props)  {


  const data =  tarefa;

    const [titulo, setTitulo] = useState<string>("");    
    const [descricao, setDescricao] = useState<string>(""); 
    const [errorAtualiza, setErrorAtualiza] = useState(false);
    const [sucessoAtualiza, setSucessoAtualiza] = useState(false);


        const { mutate } = trpc.tarefa.atualizar.useMutation({
          
          onSuccess: (data) => {
            console.log("Tarefa Atualizada:", data);
            setErrorAtualiza(false);
            setSucessoAtualiza(false);
    
            setSucessoAtualiza(true);
          },
          onError: (error) => {
            console.error("Erro em Atualizar Tarefa:", error);

            setSucessoAtualiza(false);
            setErrorAtualiza(false);
    
            setErrorAtualiza(true);
          },
        });

    useEffect(() => {
      if (data) {
        setTitulo(data.titulo);
        setDescricao(data.descricao || '');
      }
    }, [data]);
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      try {

        const handleCriarTarefa = () => {
          mutate({ 
            id: tarefa.id,
            titulo: titulo, 
            descricao: descricao 
          });
        };
  
        handleCriarTarefa()

        setTitulo('');
        setDescricao('');
      } catch (error) {
        console.error('Erro ao enviar:', error);
      }
    };
  
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>

          
        {errorAtualiza && (
                  <div className={styles.error_excluir}>
                    <p>Erro em Atualizar Tarefa</p>
                  </div>
                )}


              {sucessoAtualiza && (
                  <div className={styles.sucesso_adicionar}>
                  <p>Tarefa Atualizada</p>  
                  </div>
                )}


          <h2 className={styles.titulo}>Editar</h2>
          
          <div className={styles.campo}>
            <label htmlFor="title">Título</label>
            <input
              id="title"
              type="text"
              value={titulo}
              onChange={e => setTitulo(e.target.value)}
              required
            />
          </div>
  
          <div className={styles.campo}>
            <label htmlFor="description">Descrição (Opcional)</label>
            <textarea
              id="description"
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
            />
          </div>
  
          <button className={styles.botao} type="submit">Enviar</button>

          <Link className={styles.links} href="/"> <button className={styles.voltar_home}> Voltar Para Home </button></Link>
        </form>
      </div>
    );
  };
  