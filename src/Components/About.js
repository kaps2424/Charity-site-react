import React from "react";

 const myStyle={
        backgroundImage:`url(${require('./images/hands.jpg')})`,
                height:'40vh',
                marginTop:'0px',
                fontSize:'50px',
                width:'100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                display:'flex',
                backgroundAttachment: 'fixed'
    };

const About = () => {
   
    return (
        <div >
            <div style={myStyle}/>
           
            
            
        <img src={require('./images/borderart.jpg')} alt="About 1" style={{
         objectFit: "cover",
          height: "25px",
          width: "100%",
        }} />

        <div className="container">
        <form id="AboutButtons">
            <button>Approach</button>
            <button>History</button>
            <button>People</button>
            <button>Governance</button>
            <button>Resources</button>
        </form>
        <h3 style={{fontWeight:"bold"}}>Approach</h3>   
        <h5>The Children’s Hospital Trust core programmes are based throughout Cape Town’s township communities and beyond. The Children’s Hospital Trust work focuses on early childhood development, the well-being of older persons and after-school initiatives that keep children safe and off the streets. The organisation strives to be a conduit for community-led change.</h5> 
        <h5>The ground-up approach is rooted in activism and champions local knowledge and solutions. The Children’s Hospital Trust is an organisation made up of over 100 committed field workers, most of whom come from the same communities that they work to uplift. Together, we actively work towards a more just society where human rights can be fully realised.</h5>
        <h5>South Africa faces systemic social ills that one organisation alone cannot overcome. The Children’s Hospital Trust believes in the power of collaboration and regularly partners with other NGOs, community-based organisations, government departments and donors to pursue the common goal of human rights, human safety and security and dignity for all.</h5>
        </div>

        
        <img src={require('./images/borderart.jpg')} alt="About 12" style={{
         objectFit: "cover",
         marginTop:"60px",
          height: "25px",
          width: "100%",
          padding: "0",
          margin: "0"
        }} />
         <img src={require('./images/momandkidz.jpg')} alt="About 22" style={{
         objectFit: "cover",
          height: "400px",
          width: "100%",
          padding: "0",
          margin: "0"
        }} />
         <img src={require('./images/borderart.jpg')} alt="About 32" style={{
         objectFit: "cover",
          height: "25px",
          width: "100%",
          padding: "0",
          margin: "0"
        }} />
        
        <div className="container">

        <h3 style={{fontWeight:"bold"}}>History</h3>   
        <h5>In the early 1960s, Helen Lieberman and other courageous activists responded to the unjust conditions of South African Apartheid by setting up survival initiatives in the Western Cape. This led to a groundswell of similar initiatives being established in other parts of the country. Over the decades, this work expanded in many different fields, including early childhood development, disability care, foster homes, shelters, elderly care, economic empowerment, food security and youth development. In 1992, this organic growth and coordination of initiatives was formalised and Ikamva Labantu, meaning “Future of The People”, was launched as a non-governmental and non-profit organisation.</h5> 
        </div>

        <div className="container">
        <div className="rowOfPics">
            <div className="aboutHistoryImages">
            <img src={require('./images/crowd.jpg')} alt="gallery1" style={{float: 'left',
                    width: '50%',
                    borderRadius: '20px',
                    padding: '5px',}}/>
            </div>    
            <div className="aboutHistoryImages2">
            <img src={require('./images/save.png')} alt="gallery2" 
            style={{float: 'left',
                    width: '50%',
                    padding: '5px',
                    borderRadius: '20px',}} />
            </div>        
        </div>
        </div>



        </div>
    )
}

export default About