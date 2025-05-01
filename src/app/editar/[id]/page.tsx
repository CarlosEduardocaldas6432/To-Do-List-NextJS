import FormEditarServer from "../../../components/editar/FormEditarServer"

export default async function Editar({
    params
  } : {
    params: Promise<{ id: string}>
  }) {

   
    const { id }  = await params;
    
    

    return (
        <div>
            <FormEditarServer props={id} /> 
        </div>
    );
}