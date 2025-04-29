import ListaDeTarefas from "@/components/ListaDeTarefasServer";
import styles from "../css/home/page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
     <section className={styles.quadro_avisos}>


     </section>

     <ListaDeTarefas/>
    </div>
  );
}
