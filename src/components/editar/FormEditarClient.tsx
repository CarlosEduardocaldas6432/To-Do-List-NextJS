'use client';
import { useParams } from 'next/navigation';
import { trpc } from '@/utils/trpc';
import styles from "../../css/form/page.module.css";
import React, { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';



export default  function FormEditarClient(){

  const params = useParams();
  const idParam = params.id;
  const id: string = Array.isArray(idParam) ? idParam[0] : idParam!;
  
  const {data} =  trpc.tarefa.buscarPorId.useQuery( {id:id} );

    const [titulo, setTitulo] = useState<string>("");    
    const [descricao, setDescricao] = useState<string>(""); 


        const { mutate } = trpc.tarefa.atualizar.useMutation({
          
          onSuccess: (data) => {
            console.log("Tarefa criada:", data);
          },
          onError: (error) => {
            console.error("Erro ao criar tarefa:", error);
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
            id: id,
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
  