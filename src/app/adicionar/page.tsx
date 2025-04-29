   'use client';
 
import styles from "../../css/components/form/page.module.css";
import React, { useState, FormEvent } from 'react';


export default function Adicionar(){
    const [title, setTitle] = useState<string>('');    
    const [description, setDescription] = useState<string>(''); 
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      try {
       // const payload = { title, ...(description && { description }) };
       // const response = await axios.post('/api/endpoint', payload);
       // console.log('Resposta da API:', response.data);
        setTitle('');
        setDescription('');
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
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
  
          <div className={styles.campo}>
            <label htmlFor="description">Descrição (Opcional)</label>
            <textarea
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
  
          <button className={styles.botao} type="submit">Enviar</button>
        </form>
      </div>
    );
  };
  