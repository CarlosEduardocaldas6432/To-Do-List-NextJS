   'use client';
import { trpc } from '@/utils/trpc';
import Link from "next/link";
import styles from "../../css/form/page.module.css";
import React, { useState, FormEvent } from 'react';



export default function Adicionar(){
    const [titulo, setTitulo] = useState<string>('');    
    const [descricao, setDescricao] = useState<string>(''); 


    const { mutate } = trpc.tarefa.criar.useMutation({
      
      onSuccess: (data) => {
        console.log("Tarefa criada:", data);
      },
      onError: (error) => {
        console.error("Erro ao criar tarefa:", error);
      },
    });
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      try {


      const handleCriarTarefa = () => {
        mutate({ 
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
          <h2 className={styles.titulo}>Nova Tarefa</h2>
          
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
  