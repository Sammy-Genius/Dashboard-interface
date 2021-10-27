import { faCloud, faCommentAlt, faPlus, faThLarge, faUserAlt, faUsersCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Aside = () => {
    return ( 
        <aside>
            <div className="interface-box">
                <h3 className="black">Interface</h3>
                <span className="box-sign">
                    <FontAwesomeIcon  icon={ faThLarge }/>
                </span>
            </div>
            <nav>
                <div className="dashboard-wrapper">
                    <div className="dashboard">
                        <span className="box-sign move-left">
                            <FontAwesomeIcon icon={ faThLarge }/>
                        </span>
                        <p className="this-text black">Dashboard</p>
                    </div>
                </div>
                <ul className="side-menu">
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon className="blue" icon={ faUserAlt }/></span>
                            <p>Profile</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon className="blue" icon={ faUsersCog }/></span>
                            <p>Settings</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon className="pink" icon={ faCloud }/></span>
                            <p>Cloud</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span className="message"><FontAwesomeIcon className="pink ms-icon" icon={ faCommentAlt }/></span>
                            <p>Message</p>
                        </a>
                    </li>
                </ul>
                <div className="add-box">
                    <div className="add-wrapper">
                        <span className="box-sign add movePlus-left">
                            <FontAwesomeIcon icon={ faPlus }/>
                        </span>
                        <p className="this-text">New item</p>
                    </div>
                    <p>Click '+' to create <br/> your new items.</p>
                </div>
            </nav>
        </aside>
     );
}
 
export default Aside;