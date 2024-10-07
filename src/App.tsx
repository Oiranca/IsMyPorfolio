import { Navbar } from './components/Navbar/Navbar.tsx';
import { AboutMe } from './components/AboutMe/AboutMe.tsx';
import './App.css';
import { Experience } from './components/Experience/Experience.tsx';

function App() {
    return (
        <>
            <Navbar />
            <AboutMe />
            <Experience />
        </>
    );
}

export default App;
