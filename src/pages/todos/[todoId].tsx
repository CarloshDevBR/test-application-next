import Link from "next/link"

import { useRouter } from "next/router"

function Todo() {
    const router = useRouter()

    const todoId = router.query.todoId

    return (
        <>
            <Link href="/">
                <a>Voltar</a>
            </Link>

            <h1>Exibindo o todoId: { todoId }</h1>
            <p>comentario aqui...<Link href={`/todos/1/comments/1`}><a>ver mais</a></Link></p>
        </>
    )
}

export default Todo