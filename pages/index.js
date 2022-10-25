import Link from 'next/link'

const Home = () => {
    return (
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Footer/Footer">Rodapé</Link>
          </li>
        </ul>
    )
}

export default Home