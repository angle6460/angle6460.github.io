import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <Nav/>
            <main id="main" tabIndex={-1}>
                <Hero/>
                <Projects/>
                <Experience/>
            </main>
            <Footer/>
        </>
    )
}
