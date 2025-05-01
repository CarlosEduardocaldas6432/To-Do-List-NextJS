import FormEditarClient from "./FormEditarClient";
import { appRouter } from "@/server/trpc/router";
import { createCaller } from "@/utils/createCaller";

export default async function FormEditarServer({props}: {props: string}) {


  const caller = createCaller(appRouter);
  const data = await caller.tarefa.buscarPorId( {id:props} );

  return (
    
    <section>
      <FormEditarClient tarefa={data} />
    </section>
  );
}