import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import ProjectsSection from './components/ProjectSection';
import GlobalStars from './components/GlobalStarts';

export default function Welcome() {
    
    return (
        <>

            {/* Contenedor global de estrellas */}
            <GlobalStars />
            
            <HeroSection/>
            <AboutMe/>
            <TechStack/>
            <ProjectsSection/>
        </>
    );
}

