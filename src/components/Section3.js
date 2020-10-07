import React, { Component } from 'react';

class Section3 extends Component {

    render(){
        return(
            <section className="section-3 container">
                <div className="features text-center">
                    <h1>There are options</h1>
                    <p>Santa Ana de los Cuatro Ríos de Cuenca, commonly referred as Cuenca is the capital and largest city of the Azuay Province of Ecuador. Cuenca is located in the highlands of Ecuador at about 2,560 metres above sea level, with an urban population of approximately 329,928 and 661,685 inhabitants in the larger metropolitan </p>
                    <div className="cards">
                        <div className="d-flex flex-row justify-content-center flex-wrap">

                                <div className="card">
                                    <div className="embed-responsive embed-responsive-4by3">
                                        <img src="https://www.mercurynews.com/wp-content/uploads/2019/06/STC-L-YOSEMITE-XXXX.jpg" className="card-img-top img-fluid embed-responsive-item" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>   

                                <div className="card">
                                    <div className="embed-responsive embed-responsive-4by3">
                                        <img src="https://www.sciencealert.com/images/2019-11/processed/andes_glacier_1024.jpg" className="card-img-top img-fluid embed-responsive-item" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div> 

                                <div className="card">
                                    <div className="embed-responsive embed-responsive-4by3">
                                        <img src="https://www.sciencenewsforstudents.org/wp-content/uploads/2020/02/1030_glacier-1028x579.png" className="card-img-top img-fluid embed-responsive-item" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div> 
                                 

                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }

};

export default Section3;