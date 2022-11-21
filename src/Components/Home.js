import React, { Component } from "react";
import "./carousel.css";// requires a loader
import "./styles.css"; 
import { Carousel } from 'react-responsive-carousel';
//import  PaytmButton  from '../Components/paytmButton';

class Home extends Component {
  

    state = {

    }

    
    render() {
      
        return (
            <div >
                      <Carousel autoPlay = {true} interval = {3000} infiniteLoop = {true} showThumbs={false}>
                <div>
                <img src={require('./images/unsplash1.jpg')} alt="first 1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require('./images/unsplash2.jpg')} alt="mid 2"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require('./images/unsplash3.jpg')} alt="last 3" />
                    <p className="legend">Legend 3</p>
                </div>
                
            </Carousel>
            
            

            <div className="container" style={{padding: 10 }}>
            <h1>The Children's Hospital Trust</h1>
            <h2>-----------------------------------</h2>

            <h4 > A hospital dedicated entirely to children – especially children predominantly from impoverished communities throughout 
            South Africa and Africa – is critically important. So important, that it needs a champion to make sure that it’s able to keep doing the
             phenomenal work it does.</h4>
            <h5>The Children’s Hospital Trust is an independent non-profit organization established in 1994 to raise funds to support specific projects and programmes to 
            help advance child healthcare through the Red Cross War Memorial Children’s Hospital – the first stand-alone tertiary hospital, exclusively for children, in sub-Saharan Africa. 
            The Trust raises funds for the upgrade and expansion of the Hospital’s buildings, the purchase of state-of-the-art medical equipment, new medical treatment projects and funds the training 
            of medical professionals across Africa – ensuring that the Hospital 
            not only retains its world-class stature, but is able to continue providing life-changing and life-saving care for children.</h5>
            <h5>The Trust relies on donations in order to fund these needs. When you donate to the Trust, 100% of your donation goes towards funding projects that change children’s lives 
            (and the lives of the people who love them). 
            The operational costs of the Trust are funded from an endowment, so your generous contributions are never used to cover administration costs.</h5>


             <div className='col '>
                            <button type="button" className="btn">Donate</button>

                            
                            </div>
                            <div style={{position:"relative", top:50}}>
                            <iframe width="760" height="415"  src="https://www.youtube.com/embed/UtEJZTU6aS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                </div>
                            
            </div>

         
            </div>
        )
    }

}

export default Home;