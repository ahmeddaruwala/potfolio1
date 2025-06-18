import { About } from "../components/About"
import { Background } from "../components/Background"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
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
        </main>
        

        {/* Footer */}
    </div>
}