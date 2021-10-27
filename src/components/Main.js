import { faSketch } from "@fortawesome/free-brands-svg-icons";
import { faBowlingBall, faChartLine, faCube, faEllipsisH, faEllipsisV, faHardHat, faSun, faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
    return ( 
        <main>
            <div className="wrapper">
                <div className="container-one">
                    <h1>Hello Sammy</h1>
                    <p>Have a nice day at work &#128521;</p>
                    <div className="this-container">
                        <div className="portfolio-box">
                            <div className="portfolio">
                                <span>Your Pro</span>
                                <span>Your Portfolio</span>
                            </div>
                            <div className="menu-btn">
                                <FontAwesomeIcon icon={ faEllipsisH }/>
                            </div>
                        </div>
                        <div className="image-box">  
                            <img src={ require('../assets/imageOne.png').default} alt="renew account"/>
                            <div className="renew">
                                <span className="undo"><FontAwesomeIcon icon={ faUndoAlt }/></span>
                                <div className="your-account">
                                    <h4>Renew your Pro Account</h4>
                                    <p><span>$99.00</span> for an additional year</p>
                                </div>
                                <span className="renew-btn">Renew Account</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="container-two">
                    <h4 className="text-style">Your earning</h4>
                    <div className="trends">
                        <div className="outer-box">
                            <div className="inner-box">
                                <FontAwesomeIcon className="cube" icon={ faCube }/>
                            </div>
                        </div>
                        <div className="amount">
                            <h3><sup>$</sup> 98.00</h3>
                            <div className="graphics-container">
                                <div className="graphics">
                                    <div className="line-one"></div>
                                    <span>Graphics</span>
                                </div>
                                <div className="graphics">
                                    <span className="line-two"></span>
                                    <span>Interface</span>
                                </div>
                            </div>
                        </div>
                        <div className="trend-box">
                            <div className="inner-trend">
                                <div className="inner-trend-circle1">
                                    <div className="inner-trend-circle2">
                                        <div className="circle"></div>
                                        <div className="circle"></div>
                                    </div>
                                </div>
                                <div className="trend-btn">
                                    <FontAwesomeIcon className="trend-btn-color" icon={ faEllipsisH }/>
                                </div>
                            </div>
                            <span className="chart-sign">
                                <FontAwesomeIcon className="chart-line" icon={ faChartLine }/>
                            </span>
                        </div>
                    </div>
                    <div className="month-box">
                        <div className="best-month">
                            <h4 className="text-style">Your Best Month</h4>
                            <div className="best-wrapper best-one">
                                <div className="this-img">
                                    <FontAwesomeIcon className="sun" icon={ faSun }/>
                                </div>
                                <div className="dollars">
                                    <h3>$24.89</h3>
                                    <h4 className="text-style">February</h4>
                                </div>
                                <div className="best-one-btn">
                                    <FontAwesomeIcon className="ellipse-v" icon={ faEllipsisV }/>
                                </div>
                            </div>
                        </div>
                        <div className="best-tool">
                            <h4 className="text-style">Your Best Tool</h4>
                            <div className="best-wrapper best-two">
                                <div className="this-img new-color">
                                    <FontAwesomeIcon className="tool" icon={ faSketch }/>
                                </div>
                                <div className="dollars dollars-two">
                                    <h3>$129.89</h3>
                                    <h4 className="text-style">Sketch App</h4>
                                </div>
                        </div>
                        </div>
                    </div>
                    <div className="item-wrapper">
                        <h4 className="text-style">Your top item</h4>
                        <div className="main-item-box">
                            <div className="product-container">
                                <h4 className="text-style left-space">Product</h4>
                                <h4 className="text-style move-right">Earning</h4>
                            </div>
                            <div className="product-container">
                                <div className="align">
                                    <div className="this-img ball-color">
                                        <FontAwesomeIcon className="ball" icon={ faBowlingBall }/>
                                    </div>
                                    <div>
                                        <h4>Thefox 6 Template</h4>
                                        <h3 className="text-style">Sketch App</h3>
                                    </div>
                                    <h5>+16.9%</h5>
                                </div>
                                <p className="move-right">$17.58</p>
                            </div>
                            <div className="product-container">
                                <div className="align align-two">
                                    <div className="this-img hhat-color">
                                        <FontAwesomeIcon className="fa-hhat" icon={ faHardHat }/>
                                    </div>
                                    <h4>Dashboard Interface</h4>
                                </div>
                                <p className="move-right">$19.63</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default Main;