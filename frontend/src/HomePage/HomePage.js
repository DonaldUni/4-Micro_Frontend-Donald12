import React from "react";
import './HomePage.css';

const HomePage =() =>{

  function toAdminPage(){
    window.location.href='http://localhost:3000/Admins';
  }

  function toEmployeePage(){

    window.location.href='http://localhost:3000/Employee/start';
  }


    return (
        <body id="Home2-Body">
          <header id="H-header">
              <div id="H-Logo">
                <img id="HaegerConsulting-Logo" src="../images/Haeger-Consulting-Logo.png" />

              </div>

          </header>


          <main id="H-main">
            <div id="H-Part">
              <div className="H-MainLeftPart">
                  <div id="H-Foto">
                    <img id="Ralf-Foto" height="250px" width="50%" src="../images/Ralf-image.256x256.jpg" />
                  </div>
              </div>

              <div  className="H-MainRigthPart">
                  <div id="H-div-title">
                    <h1> Haegertime</h1>

                  </div >

                  <div id="H-main-paragraph">
                    <p> 
                      <h3> Eine Anwendung für die Steuerung von Mitarbeitern und Arbeitzeiten.</h3>
                    </p>
                    
                  
                  </div>

                  <div id="H-bouton-functions">
                    <input type="button" id="button-Admin" onClick={toAdminPage}  value="Admin"/>
                    <input type="button" id="button-Employee" onClick={toEmployeePage} value="Employee"/>
      
                  </div>
              </div>

              <div id="H-MainLastPart"></div>
            
            </div>

          </main>

          <div id="H-div-LastPart"></div>
        </body>
      
        
      );

      /*<footer id="H/footer" >
                    <div id="H/foot1" className="col-6">
                            <h3><u>Kontakt</u></h3>
                            <p><img className="H/icone-Contact" src="/images/email-icone.png" />haeger-consulting@gmail.com</p>
                            <p ><img className="H/icone-Contact" src="/images/icone-tel.png" /> 0123456789</p>
                            <p><img className="H/icone-Contact" src="/images/adresse-icone.png" /> Straße  125</p>
                            <div><p>45786  Bonn</p></div>

                    
                    </div>

                    <div id="H/foot2" className="col-6">
                        <h3><u>Social Media</u></h3>
                        <p><a href="https://www.xing.com/profile/Ralf_Haeger/cv"><img className="H/icone" src="/images/xing-iconepng.png" /></a><br/></p>
                        <p><a href="https://fr.linkedin.com/"><img className="H/icone" src="/images/linkn-icon.png" /></a><br/></p>
                        <p>   </p>
                        <div><p></p></div>

                    </div>
                    
          </footer>
          */

}


   

export default HomePage;