import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Container } from '../components/Container'

export default function Home() {
  return (
    <>
      <Container>
        <Nav />
        <div className="bg-background bg-no-repeat bg-cover fixed top-0 right-0 left-0 bottom-0 flex justify-center">
          <h1 className="tracking-wider text-8xl mx-auto my-auto text-white font-serif">
            YU UCHIMURA
          </h1>
        </div>
        {/* <Footer /> */}
      </Container>
    </>
  )
}
