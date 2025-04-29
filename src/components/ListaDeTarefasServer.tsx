import ListaDeTarefasClient from "@/components/ListaDeTarefasClient";
import tarefas from "@/data/constants/tarefas";

export default async function ListaDeTarefasServer() {
  // Aqui poderia ser uma chamada a um banco de dados
  const lista = tarefas;

  return (
    <section>
      <ListaDeTarefasClient tarefas={lista} />
    </section>
  );
}