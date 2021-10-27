import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faJoomla } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return ( 
        <header>
            <div className="header-content">
                <div className="header-box">
                    <div className="input-box">
                        <input type="text" placeholder="Search"/>
                        <FontAwesomeIcon className="search" icon={ faSearch }/>
                    </div>
                    <span className="notifications">
                        <FontAwesomeIcon icon={ faBell }/>
                    </span>
                    <div className="logo-container">
                        <FontAwesomeIcon className="logo" icon={ faJoomla }/>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;