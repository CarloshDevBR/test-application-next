import Link from 'next/link';
import styles from '../../styles/todos.module.css';

interface Item {
  todos: {
    map(arg0: (e: any) => JSX.Element): import("react").ReactNode;
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
}

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await data.json()

    return {
      props: { todos }
    }
}

function Todo({ todos }: Item) {
  return (
    <>
      <h1>Tarefas</h1>
      <ul className={styles.todolist}>
        {
          todos.map((e) => (
            <li key={e.id}>{e.id} - {e.title} <Link href={`/todos/` + e.id}><a>Ver mais</a></Link></li>
          ))
        }
      </ul>
    </>
  )
}

export default Todo
