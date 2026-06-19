import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <Nav/>
            <main>
                <Hero/>
                <Projects/>
                <Experience/>
            </main>
            <Footer/>
        </>
    )
}
