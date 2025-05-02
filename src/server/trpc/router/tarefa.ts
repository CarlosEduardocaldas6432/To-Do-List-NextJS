import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { v4 as uuidv4 } from 'uuid';

export interface Tarefa {
  id: string;
  titulo: string;
  descricao?: string;
  dataCriacao: string;
  dataAtualizacao: string;
}

let tarefas: Tarefa[] = [];

export const tarefaRouter = router({
  listar: publicProcedure.query( async () => {
    return {tarefas} }),


    buscarPorId: publicProcedure
  .input(z.object({ id: z.string() }))
  .query( async ({ input }) => {
    const tarefa = tarefas.find(t => t.id === input.id);
    if (!tarefa){ throw new Error('Tarefa não encontrada')};
    return tarefa;
  }),

  criar: publicProcedure
    .input(z.object({
      titulo: z.string(),
      descricao: z.string().optional(),
    }))
    .mutation(({ input }) => {
      const novaTarefa: Tarefa = {
        id: uuidv4(),
        titulo: input.titulo,
        descricao: input.descricao,
        dataCriacao: new Date().toISOString(),
        dataAtualizacao: new Date().toISOString(),
      };
      tarefas.push(novaTarefa);
      return novaTarefa;
    }),

  atualizar: publicProcedure
    .input(z.object({
      id: z.string(),
      titulo: z.string(),
      descricao: z.string().optional(),
    }))
    .mutation(({ input }) => {
      const index = tarefas.findIndex(t => t.id === input.id);
      if (index === -1) throw new Error('Tarefa não encontrada');
      tarefas[index] = {
        ...tarefas[index],
        titulo: input.titulo,
        descricao: input.descricao,
        dataAtualizacao: new Date().toISOString(),
      };
      return tarefas[index];
    }),

  excluir: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input }) => {
      tarefas = tarefas.filter(t => t.id !== input.id);
      return { sucesso: true };
    }),
});
