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

let tarefas: Tarefa[] = [    {
  id: "1a2b3c",
  titulo: "Revisar relatório financeiro",
  descricao: "Analisar as despesas do trimestre e identificar economias.",
  dataCriacao: "2025-04-01T09:00:00.000Z",
  dataAtualizacao: "2025-04-03T14:30:00.000Z"
},
{
  id: "4d5e6f",
  titulo: "Atualizar lista de contatos",
  descricao: "Adicionar novos clientes e remover inativos.",
  dataCriacao: "2025-04-02T10:15:00.000Z",
  dataAtualizacao: "2025-04-02T10:15:00.000Z"
}];

export const tarefaRouter = router({
  listar: publicProcedure.query( async () => {
    return {tarefas} }),

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
