import React, { Component } from 'react';
import NavBar from './components/NavBar';
// import { Footer } from './components/Footer'
import { ResponsiveSideBar } from './components/ResponsiveSideBar'

class AlgoTrading extends Component{
    render (){
        return (
            <div>
                <NavBar />
                <div className="main">
                    <ResponsiveSideBar />
                    <div className="float-right actual-main row m-0 p-2">
                            <div className="col-lg-5 col-md-5 p-2 h-100">
                                <div className="shadow-sm bg-light w-100 p-4 mb-3 rounded-lg algo-strategy">
                                    select strategy 
                                </div>
                                <div className="shadow-sm bg-light w-100 p-4 mb-3 rounded-lg algo-parameter">
                                    parameters
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 p-2 h-100">
                                <div className="shadow-sm bg-light w-100 p-4 mb-3 rounded-lg algo-linechart">
                                    line chart
                                </div>
                                <div className="shadow-sm bg-light w-100 p-4 rounded-lg algo-submit">
                                    GO!/
                                </div>
                            </div>   
                    </div>
                </div>
            </div>
        )
    }
}

export default AlgoTrading;