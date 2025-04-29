import tarefas from "@/data/constants/tarefas";
import FormEditarClient from "./FormEditarClient";

export default async function FormEditarServer() {
  // Aqui poderia ser uma chamada a um banco de dados
  const id = 1;
  const tarefa = tarefas[id];

  return (
    <section>
      <FormEditarClient id={tarefa.id} titulo={tarefa.titulo}  descricao={tarefa.descricao || ""}/>
    </section>
  );
}