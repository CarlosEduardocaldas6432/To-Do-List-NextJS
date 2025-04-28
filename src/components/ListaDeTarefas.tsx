import Tarefa from "@/data/model/Tarefa";
import tarefas from "@/data/constants/tarefas";
import Styles from "@/css/components/ListaDeTarefas.module.css";




export default function ListaDeTarefas (){

    function renderizarTarefa(tarefa:Tarefa){
        return(
            <div>
             <h2>{tarefa.titulo}</h2>   
             <h2>{tarefa.descricao}</h2>    
            </div>
        );
    }

    return (

        <ul>
            {tarefas.map((tarefa) => {
                return <li className={Styles.tarefa} key={tarefa.id}>{renderizarTarefa(tarefa)}</li>
            })
            }

        </ul>

    )
}