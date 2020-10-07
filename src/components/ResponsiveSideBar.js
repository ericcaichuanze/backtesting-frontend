import React from 'react';

export const ResponsiveSideBar = () => {
    return (
        <React.Fragment>
            <div className="sideNavBar float-left">
                <p className="side-nav-item text-left pl-1">
                    <button className="btn "><i className="fa fa-home" title="Summary"/><a id="sideNavBarItem" className="text-secondary" href="/summary"><span className="nav-menu-text pl-2">Summary</span></a></button>
                </p>
                <p className="side-nav-item text-left pl-1">
                    <button className="btn"><i className="fa fa-history" title="Back Testing"/><a id="sideNavBarItem" className="text-secondary" href="/backtesting"><span className="nav-menu-text pl-2">Back Testing</span></a></button>
                </p>
                <p  className="side-nav-item text-left pl-1">
                    <button className="btn"><i className="fa fa-code" title="Algo Trading"/><a id="sideNavBarItem" className="text-secondary" href="/algo"><span className="nav-menu-text pl-2">Algo Trading</span></a></button>
                </p>
                <p  className="side-nav-item text-left pl-1">
                    <button className="btn"><i className="fa fa-bell" title="Alerts"/><a id="sideNavBarItem" className="text-secondary" href="#"><span className="nav-menu-text pl-2">Alerts</span></a></button>
                </p>
                <p  className="side-nav-item text-left pl-1">
                    <button className="btn"><i className="fa fa-users" title="Community"/><a id="sideNavBarItem" className="text-secondary" href="#"><span className="nav-menu-text pl-2">Community</span></a></button>
                </p>
            </div>
            <nav className="backup-sideNavBar navbar-dark">
                <button  id= "sideBarToggler" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sideNavBarToggler" aria-controls="sideNavBarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="sideNavBarToggler">
                    <div className="mr-auto"></div>
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link pl-3 sm-menu-text" href="/summary">Summary</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pl-3 sm-menu-text" href="/backtesting">Back Testing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pl-3 sm-menu-text" href="/algo">Algo Trading</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pl-3 sm-menu-text" href="#">Alerts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pl-3 sm-menu-text" href="#">Community</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
        
    )
}