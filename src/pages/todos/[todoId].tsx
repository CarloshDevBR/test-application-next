import Link from "next/link";
interface Item {
    id: number;
    todo: {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
    }
}

export async function getStaticProps(context: any) {
    const {params} = context

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)

    const todo = await data.json()

    return {
        props: { todo }
    }
}
  
export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)

    const data = await res.json()

    const paths = data.map((todo: Item) => {
        return {
        params: { todoId: `${todo.id}` }
        }
    })

    return { paths, fallback: false }
}  

function Todo({ todo }: Item) {
    return (
        <>
            <Link href={`/todos`}>
                <a>Voltar</a>
            </Link>

            <h1>Exibindo o todoId: { todo.id }</h1>
            <p>Texto: { todo.title }</p>
            <p>comentario aqui...<Link href={`/todos/1/comments/` + todo.id}><a>ver mais</a></Link></p>
        </>
    )
}

export default Todo