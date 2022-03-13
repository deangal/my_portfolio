import './menu.scss'

const Menu = ({ menuOpen,setMenuOpen }) => {
    return (
        <div className={'menu ' +(menuOpen && 'active' )}>
            <ul>
                {/* <li onClick={()=>setMenuOpen(false)}>
                </li> */}
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#protfolio">מה בוילה</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#work">תמונות</a>
                </li>
               
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">צרו קשר</a>
                </li>

            </ul>
        </div>
    );
};

export default Menu;