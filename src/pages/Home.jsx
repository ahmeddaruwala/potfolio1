import { Background } from "../components/Background"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
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
        <HeroSection />

        {/* Footer */}
    </div>
}