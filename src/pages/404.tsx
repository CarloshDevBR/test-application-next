import Link from "next/link"

function NotFound() {
    return (
        <>
            <h1>404</h1>
            <p>A página não existe</p>
            <Link href="/"><a>Voltar pra home</a></Link>
        </>
    )
}

export default NotFound