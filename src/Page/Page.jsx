

import Page2 from '../Page/Page2.jsx'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Profissional from '../Page/Profissional.jsx'
import Contato from './Contato.jsx';
import Habilidade from './Habilidade.jsx';

const Page = () => {
    return (
        <Router>
            <div className="Page">
                
                <Link to='/'>Home</Link>
                <Link to='/Page2'>Cursos e Certificados</Link>
                <Link to='/Profissional'>Experiência Profissional</Link>
                <Link to='/Habilidades'>Habilidades</Link>
                <Link to='/Contato'>Contato</Link>

                
                    
                    <Route path="/Page2" component={Page2} />
                    <Route path="/Profissional" component={Profissional} />
                    <Route path="/Habilidades" component={Habilidade} />
                    <Route path="/Contato" component={Contato} />
            </div>
        </Router>
    )

}

export default Page
