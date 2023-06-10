import Header from './components/Header'
import Footer from './components/Footer'
import Timer from './components/Timer'

export default function Home() {
  return (
    <main className="text-white flex min-h-screen flex-col items-center justify-center p-24 bg-[url('./assets/bg.jpg')] bg-cover">
      <Header />
      <Timer />
      <Footer />
    </main>
  )
}
