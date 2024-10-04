import { Link } from 'react-router-dom'
import SocialSidebar from '../components/Social/SocialSidebar'

const Home = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center text-zinc-100">
      <SocialSidebar />
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="font-afacadflux text-4xl md:text-5xl italic">João Victor de Souza</h1>
        <h2 className="text-sm md:text-base">Desenvolvedor FullStack</h2>
        <div className="flex gap-2 m-6 text-center">
          <Link
            to={'/portifolio'}
            className="glow min-w-40 px-3 py-1 border border-blue-500 rounded-md"
          >
            Portifólio
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Home
