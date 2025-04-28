import ListaDeTarefas from "@/components/ListaDeTarefas";
import styles from "../css/home/page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
     <h1>Home</h1>

     <ListaDeTarefas/>
    </div>
  );
}
