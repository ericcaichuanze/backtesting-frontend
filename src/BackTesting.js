import React, { Component } from 'react';
import NavBar from './components/NavBar';
// import { Footer } from './components/Footer'
import { ResponsiveSideBar } from './components/ResponsiveSideBar';
import { Line } from 'react-chartjs-2';
import qs from 'qs';
import $ from 'jquery';

class BackTesting extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            strategy:"",
            historicalTabActive:true,
            assetEvaluation:null,
            outperformDays:null,
            backtestLoading:false,
            historicalData:{},
            backtestData:{},
            ticker:"",
            tickerTyped:"",
            buy_ads_sell_acs:false,
            buy_ads_initialCash:"",
            buy_ads_timeSpan:"",
            buy_ads_startDate:"",
            buy_ads_endDate:"",
            buy_ads_droppingStreak:"",
            sell_acs_climbingStreak:""
        }
        this.handleSubmitTicker=this.handleSubmitTicker.bind(this);
        this.handleTickerChange=this.handleTickerChange.bind(this);
        this.handleSelectStrategy = this.handleSelectStrategy.bind(this);
        this.handleSelectSellStrategy = this.handleSelectSellStrategy.bind(this);
        this.handleChangeBuyAdsTimeSpan = this.handleChangeBuyAdsTimeSpan.bind(this);
        this.handleChangeBuyAdsStartDate = this.handleChangeBuyAdsStartDate.bind(this);
        this.handleChangeBuyAdsEndDate = this.handleChangeBuyAdsEndDate.bind(this);
        this.handleChangeBuyAdsInitialCash = this.handleChangeBuyAdsInitialCash.bind(this);
        this.handleChangeSellAcsClimbingStreak = this.handleChangeSellAcsClimbingStreak.bind(this);
        this.handleChangeBuyAdsDroppingStreak = this.handleChangeBuyAdsDroppingStreak.bind(this);
        this.handleSubmitAdsAcs = this.handleSubmitAdsAcs.bind(this);
    }

    handleSubmitTicker(event){
        event.preventDefault();
        this.setState({
            ticker:this.state.tickerTyped.toUpperCase(),
            historicalTabActive:true
        },()=>{
            console.log(this.state)
            this.props.history.push({
                pathname:"/backtesting",
                search:"?ticker="+this.state.ticker
            })
            window.location.reload();
        })
    }

    handleTickerChange(event){
        this.setState({
            tickerTyped:event.target.value
        },()=>{
            console.log(this.state)
        })
    }

    handleSelectStrategy(event){
        if(event.target.value==="buy-ads-sell-acs"){
            this.setState({buy_ads_sell_acs:true})
        }

    }

    handleChangeBuyAdsInitialCash(event){
        this.setState({buy_ads_initialCash:Number(event.target.value) })
    }

    handleChangeBuyAdsTimeSpan(event){
        this.setState({buy_ads_timeSpan:event.target.value===""?"":Number(event.target.value)})
    }

    handleChangeBuyAdsStartDate(event){
        this.setState({buy_ads_startDate:event.target.value})
    }

    handleChangeBuyAdsEndDate(event){
        this.setState({buy_ads_endDate:event.target.value})
    }

    
    handleChangeBuyAdsDroppingStreak(event){
        this.setState({buy_ads_droppingStreak:Number(event.target.value)})
    }

    handleSelectSellStrategy(event){
        if(event.target.value="sell-acs"){
            this.setState({sell_acs:true})
        }
    }

    handleChangeSellAcsClimbingStreak(event){
        this.setState({sell_acs_climbingStreak:Number(event.target.value)})
    }

    handleSubmitAdsAcs(){
        
        this.setState({strategy:"adsacs",
                        backtestLoading:true,
                        historicalTabActive:!this.state.historicalTabActive},()=>{
            fetch("https://stock-backtesting.herokuapp.com/api/v1/backtesting-results",{
            method:"POST",
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                strategy:"adsacs",
                buy_ads_droppingStreak:this.state.buy_ads_droppingStreak,
                buy_ads_startDate:this.state.buy_ads_startDate,
                buy_ads_endDate:this.state.buy_ads_endDate,
                buy_ads_initialCash:this.state.buy_ads_initialCash,
                buy_ads_timeSpan:this.state.buy_ads_timeSpan,
                sell_acs_climbingStreak:this.state.sell_acs_climbingStreak,
                ticker:this.state.ticker
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.setState({
            backtestData:{
                labels:data.date,
                datasets:[
                    {
                        label:'Asset worth with no action',
                        data:data.actualAsset,
                        borderColor:'rgba(166, 166, 166, 0.7)',
                        backgroundColor:'rgba(255, 99, 132, 0)',
                        pointBackgroundColor:'rgba(255, 99, 132, 0)',
                        pointBorderColor:'rgba(255, 99, 132, 0)',
                    },
                    {
                        label:'Asset worth with strategy',
                        data:data.testAsset,
                        borderColor:'rgba(153, 0, 51,0.7)',
                        backgroundColor:'rgba(255, 99, 132, 0)',
                        pointBackgroundColor:'rgba(255, 99, 132, 0)',
                        pointBorderColor:'rgba(255, 99, 132, 0)',
                    }
                ]
            },
            backtestLoading:false,
            historicalTabActive:false,
            assetEvaluation:data.resultEvaluation,
            outperformDays:data.outperformDays
        })})
        })
        
    }

    componentWillMount(){
        if(qs.parse(this.props.location.search)["?ticker"]!==undefined){
            this.setState({ticker:qs.parse(this.props.location.search)["?ticker"]})
        }
    }

    componentDidMount(){

        fetch("https://stock-backtesting.herokuapp.com/api/v1/100-day-price?ticker="+this.state.ticker)
        .then(res=>res.json())
        .then(data=>this.setState({
            historicalData:{
              labels: data.date,
              datasets:[
                {
                  label:'Adjusted Price',
                  data:data.result,
                  borderColor:'rgba(153, 0, 51,0.7)',
                  backgroundColor:'rgba(255, 99, 132, 0)',
                  pointBackgroundColor:'rgba(255, 99, 132, 0)',
                  pointBorderColor:'rgba(255, 99, 132, 0)',
                }
              ]
            }
          }))
    }


    render (){
        console.log(this.state)

        return (
            <div>
                <NavBar />
                <div className="main">
                    <ResponsiveSideBar />
                    <div className="float-right actual-main row m-0 p-2">
                        <div className="col-lg-5 col-md-5 p-2 h-100">
                            
                            <div className="shadow-sm bg-light w-100 p-4 mb-3 rounded-lg backtesting-toggle">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="tradeMode" id="day-trade" value="day-trade" />
                                    <label className="form-check-label" >Day Trade</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="tradeMode" id="day-trade" value="long-term" checked/>
                                    <label className="form-check-label">Long Term</label>
                                </div>
                                <form className="input-group input-group-sm mb-0 pt-4 pb-2">
                                    <input type="text" className="form-control" 
                                            value={this.state.tickerTyped} 
                                            onChange={this.handleTickerChange} 
                                            placeholder={this.state.ticker===""?"Type a ticker":this.state.ticker}
                                            required />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-info" 
                                                type="submit" 
                                                id="submit-ticker"
                                                onClick={this.handleSubmitTicker}>Use this stock</button>
                                    </div>
                                </form>
                            </div>
                            
                            <div className="shadow-sm bg-light w-100 px-3 py-4 mb-3 rounded-lg backtesting-strategy">
                                <h5 className="pt-0">Strategy</h5>
                                <h6 className="pt-0">Strategy selection</h6>
                                <select class="form-control form-control-sm my-3" onChange={this.handleSelectStrategy}>
                                    <option selected disabled>--Pick a strategy--</option>
                                    <option value="buy-ads-sell-acs" >Buy in after dropping streak and sell out after dropping streak</option>
                                </select>
                                <div style={this.state.buy_ads_sell_acs===false?{"display":"none"}:null} className="form-hidden row">

                                    <h6 className="pt-0 col-12 mb-0 py-1 mt-2">Strategy testing period</h6> 
                                    <div class="form-group col-6 m-0 pb-2 px-3 pt-0">
                                        <label class="col-form-label text-secondary small">Time span (trading days till today)</label>
                                        <div class="w-100">
                                            <input class="form-control form-control-sm" type="number" min="0" max="999" placeholder="(days)" 
                                                    disabled={this.state.buy_ads_startDate!==""||this.state.buy_ads_endDate!==""?true:false}
                                                    onChange={this.handleChangeBuyAdsTimeSpan} />
                                        </div>
                                    </div>
                                    <div class="form-group col-6 m-0 py-2 px-3"></div>
                                    {/* <div className="px-3 text-secondary col-12">
                                    -----------OR-----------
                                    </div> */}
                                    {/* <div class="form-group col-6 m-0 py-2 px-3">
                                        <label class="col-form-label text-secondary small pt-0">Start Date</label>
                                        <div class="w-100">
                                            <input class="form-control form-control-sm" type="date" placeholder="(days)"
                                                    disabled={this.state.buy_ads_timeSpan!==""?true:false}
                                                    onChange={this.handleChangeBuyAdsStartDate} />
                                        </div>
                                    </div>
                                    <div class="form-group col-6 m-0 py-2 px-3">
                                        <label class="col-form-label text-secondary small pt-0">End Date</label>
                                        <div class="w-100">
                                            <input class="form-control form-control-sm" type="date" placeholder="(days)"
                                                    disabled={this.state.buy_ads_timeSpan!==""?true:false}
                                                    onChange={this.handleChangeBuyAdsEndDate} />
                                        </div>
                                    </div> */}

                                    <h6 className="pt-0 col-12 mb-0 py-1 mt-2">Parameters</h6> 
                                    <div class="form-group col-6 m-0 px-3">
                                        <label class="col-form-label text-secondary small">Initial cash (USD)</label>
                                        <div class="w-100">
                                            <input class="form-control form-control-sm" type="number" min="0" placeholder="($)"
                                                    onChange={this.handleChangeBuyAdsInitialCash} />
                                        </div>
                                    </div>

                                    <h6 className="pt-0 col-12 mb-0 mt-2">When to buy</h6> 
                                    <div class="form-group col-6 m-0 py-1 px-3">
                                        <label class="col-form-label text-secondary small">Dropping streak</label>
                                        <div class="w-100">
                                            <input class="form-control form-control-sm" type="number" min="2" min="10" placeholder="(days)"
                                                    onChange={this.handleChangeBuyAdsDroppingStreak} />
                                        </div>
                                    </div>    
                                    
                                    <h6 className="m-0 py-2 px-3 w-100">When to sell</h6>
                                    <div class="form-group col-6 m-0 px-3">
                                        <label class="col-form-label text-secondary small">Climbing streak</label>
                                        <div class="w-100">
                                            <input class="form-control form-control-sm" type="number" min="2" min="10" placeholder="(days)"
                                                    onChange={this.handleChangeSellAcsClimbingStreak} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="button" className="btn btn-primary btn-sm btn-block mt-3 mb-1" onClick={this.handleSubmitAdsAcs} >
                                            <p className="font-weight-bold m-0" >Go!</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-7 col-md-7 p-2 h-100">

                            <div className="shadow-sm bg-light w-100 px-4 pt-4 pb-0 mb-3 rounded-lg chart-box">

                                <ul className="nav nav-pills row">
                                    <li className="nav-item col-4 mb-4">
                                        {this.state.historicalTabActive===true?<a className="nav-link active content-tab small font-weight-bold text-center line-chart-tab p-1" data-toggle="pill" href="#historical-stock-price">Historical Stock Price</a>:<a className="nav-link content-tab small font-weight-bold text-center line-chart-tab p-1" data-toggle="pill" href="#historical-stock-price">Historical Stock Price</a>}
                                        
                                    </li>
                                    <li className="nav-item col-4 mb-4">
                                        {this.state.historicalTabActive===true?<a className="nav-link content-tab small font-weight-bold text-center line-chart-tab p-1" data-toggle="pill" href="#asset-value-overtime" id="asset-value-button" >Asset Value Overtime</a>:<a className="nav-link content-tab small font-weight-bold text-center line-chart-tab p-1 active" data-toggle="pill" href="#asset-value-overtime" id="asset-value-button" >Asset Value Overtime</a>}
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="historical-stock-price" className={this.state.historicalTabActive===true?"tab-pane fade show active backtesting-linechart":"tab-pane fade backtesting-linechart"}>
                                        <h6 className="pt-0 pb-2">{"Historical market price of company (100 days): "+this.state.ticker}</h6>
                                        <div className="chartWrapper p-2">
                                            {this.state.historicalData.datasets===undefined?"please enter a ticker first":
                                            <Line 
                                                data={this.state.historicalData}
                                                options={{ 
                                                    maintainAspectRatio: false,
                                                    title:{
                                                        display:false,
                                                        text:"Company: "+this.state.ticker,
                                                        fontSize:15
                                                    },
                                                    legend:{
                                                        display:true,
                                                        position:'bottom'
                                                    },
                                                    scales: {
                                                        xAxes: [{
                                                            gridLines: {
                                                                drawOnChartArea: false,
                                                                display:false,
                                                                drawTicks:false
                                                            },
                                                            ticks:{
                                                                display:false
                                                            }
                                                        }],
                                                        yAxes: [{
                                                            gridLines: {
                                                                drawOnChartArea: false,
                                                                display:false
                                                            },
                                                            ticks: {
                                                                callback: function(value, index, values) {
                                                                    return '$' + value;
                                                                },
                                                                display:false
                                                            }
                                                        }]
                                                    }
                                                }}
                                            />}
                                        </div>
                                    </div>
                                    <div id="asset-value-overtime" className={this.state.historicalTabActive===true?"tab-pane fade backtesting-linechart":"tab-pane fade backtesting-linechart show active"}>
                                        <h6 className="pt-0 pb-2">{"Strategy backtesting"}</h6>
                                        <div className="chartWrapper p-2">
                                            {this.state.backtestData.datasets===undefined?"please enter a strategy first":
                                            <Line 
                                                data={this.state.backtestData}
                                                options={{ 
                                                    maintainAspectRatio: false,
                                                    title:{
                                                        display:false,
                                                        text:"Company: "+this.state.ticker,
                                                        fontSize:15
                                                    },
                                                    legend:{
                                                        display:true,
                                                        position:'bottom'
                                                    },
                                                    scales: {
                                                        xAxes: [{
                                                            gridLines: {
                                                                drawOnChartArea: false,
                                                                display:false,
                                                                drawTicks:false
                                                            },
                                                            ticks:{
                                                                display:false
                                                            }
                                                        }],
                                                        yAxes: [{
                                                            gridLines: {
                                                                drawOnChartArea: false,
                                                                display:false,
                                                                drawTicks:false
                                                            },
                                                            ticks: {
                                                                callback: function(value, index, values) {
                                                                    return '$' + value;
                                                                },
                                                                display:false
                                                            }
                                                        }]
                                                    }
                                                }}
                                            />}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>    
                            
                            <div className="shadow-sm bg-light w-100 p-4 rounded-lg backtesting-result">
                                <h5 className="pt-0 pb-2">Result Review</h5>
                                    {
                                        this.state.backtestData.datasets===undefined?"Select a strategy first":<p>For the period of time, you strategy's performance is <strong className="font-weight-bold">{parseFloat(this.state.assetEvaluation*100).toFixed(3)+"%" }</strong> different from the actual asset value, and in <strong className="font-weight-bold">{parseFloat(this.state.outperformDays*100).toFixed(3)+"%"}</strong>  of the selected period your asset was better than the taking no action</p>
                                    }
                                            
                                <div className="container-fluid text-right">
                                    
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        )
    }
}

export default BackTesting;