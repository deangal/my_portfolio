import { Contact, Work, Topbar, Protfolio, Intro, Menu} from './components'
import './app.scss'
import { useState } from 'react';

function App() {

  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <div className="sections">
    <Intro/>
    <Protfolio/>
    <Work/>
    <Contact/>
      </div>

    </div>
  );
}

export default App;
