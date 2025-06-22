import { About } from "../components/About"
import { Background } from "../components/Background"
import { Contact } from "../components/Contact"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { Projects } from "../components/Projects"
import { Skills } from "../components/Skills"
import { Theme } from "../components/Theme"

export const Home = () => {
    return <div>
        {/* Theme Toggle */}
        <Theme />

        {/* Background Effects */}
        <Background />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
        

        {/* Footer */}
    </div>
}