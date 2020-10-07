import React, { Component } from 'react';

class Section1 extends Component {

    render(){
        return(
            <section className="section-1">
                <div className="jumbotron jumbotron-fluid" id="jumbotron-1">
                    <div className="container">
                        <h1 className="display-4">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <a className="btn btn-primary btn-lg" href="#" role="button">Sign Up</a>
                    </div>
                </div>
            </section>
        )
    }

};

export default Section1;