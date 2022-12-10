import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Portfolio from "../components/Portfolio/Portfolio";
import Skill from "../components/Skill/Skill";
import Main from "../layout/Main";
 
export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/home',
                element : <Home></Home>
            },
            {
                path : '/about',
                element : <About></About>
            },
            {
                path : '/skill',
                element : <Skill></Skill>
            },
            {
                path : '/portfolio',
                element : <Portfolio></Portfolio>
            },
            {
                path : '/contact',
                element : <Contact></Contact>
            },
        ]
    }
])