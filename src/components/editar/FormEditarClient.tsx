'use client';
 
import styles from "../../css/form/page.module.css";
import React, { useState, FormEvent } from 'react';

type Props = {
    id: string
    titulo: string;
    descricao: string;
  };

export default function FormEditarClient({id,titulo, descricao} : Props){
    const [title, setTitle] = useState<string>(titulo);    
    const [description, setDescription] = useState<string>(descricao || ""); 

  
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
          <h2 className={styles.titulo}>Editar</h2>
          
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
  