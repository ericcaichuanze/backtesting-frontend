import React, { Component } from 'react';
import NavBar from './components/NavBar';
// import { Footer } from './components/Footer'
import { ResponsiveSideBar } from './components/ResponsiveSideBar'

class Summary extends Component{

    render (){
        return (
            <div>
                <NavBar />
                <div className="main">
                    <ResponsiveSideBar />
                    <div className="float-right actual-main row m-0 p-2">
                            <div className="col-lg-8 col-md-8 p-2 h-100">
                                <div className="shadow-sm bg-light w-100 p-4 mb-3 rounded-lg summary-search">
                                    search
                                </div>
                                <div className="shadow-sm bg-light w-100 p-4 rounded-lg summary-chart">
                                    line chart
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 p-2 h-100">
                                <div className="shadow-sm bg-light w-100 p-4 mb-3 rounded-lg summary-digits">
                                    digits
                                </div>
                                <div className="shadow-sm bg-light w-100 p-4 rounded-lg summary-portfolio">
                                    portfolio
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default Summary;