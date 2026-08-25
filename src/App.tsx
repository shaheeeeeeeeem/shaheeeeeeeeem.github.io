import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="wrap">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
