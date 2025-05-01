import ListaDeTarefasClient from "@/components/ListaDeTarefasClient";
import { appRouter } from "@/server/trpc/router";
import { createCaller } from "@/utils/createCaller";



export default async function ListaDeTarefasServer() {


  const caller = createCaller(appRouter);
  const data = await caller.tarefa.listar();
  console.log(data);


  return (
    <section>
      <ListaDeTarefasClient data={data.tarefas} />
    </section>
  );
}