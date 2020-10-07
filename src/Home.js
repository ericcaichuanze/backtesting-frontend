import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import { Footer } from './components/Footer'

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount(){
        fetch("/todo/api/v1.0/tasks")
        .then(res => res.json())
        .then(
          (result) => console.log(result)
        )
      }

    render(){
        return (
          <div>
            <NavBar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
          </div>
        ) 
      }

};

export default Home;