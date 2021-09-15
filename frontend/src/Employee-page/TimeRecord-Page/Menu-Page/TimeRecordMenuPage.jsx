import React, {Component} from 'react';
import './TimeRecordMenuPage.css';


class Menu extends Component{


    constructor(props){
        super(props);
        this.state = {
            worktimes: [] 
        }

        
    }

    

    componentDidMount(){

        const worktimelist_URL = 'http://localhost:8082/timeRecord/of/1';

        window.fetch(worktimelist_URL)
            .then(res =>  res.json())
            .then(json => 
                this.setState({    //To set free
                    worktimes: json,
                })
                
            );
            
    }

    

    render(){

        var worktimeList = this.state.worktimes;

        function toNewRecordSeite(){
      
            window.location.href = "http://localhost:3000/Employee/TimeRecord/NewRecord";
        }

        


        function toDetailsPage2( worktime_Id ){

            var details2PageURL = "http://localhost:3000/Employee/TimeRecord/Details/" +  worktime_Id;
            window.location.href = details2PageURL;
        }
        /*
            <div id="Tm-header-div-empty" className="col-10"> </div>

            <div id="Tm-header-navBar" className="col-10">
                        
                    </div>
        */

        return(
            

            <div id="Tm-body">

                <div className="Tm-header">    
                    <a  href="http://localhost:3000/">
                        <img id="Tm-haegertime-logo" src="/images/HaegerTime-Logo.png"  /><br/>
                    </a>
                </div>

                <div id="Tm-NavBar">
                    <ul id ="Tm-ul">
                            <li><a href="http://localhost:3000/Employee/start">Start</a></li>
                            <li><a href="http://localhost:3000/Employee/Me">Me</a></li>
                            <li><a id="selected-a-Tags" href="http://localhost:3000/Employee/TimeRecord/Menu">TimeRecord</a></li>
                    </ul>
                </div>

                <div id="Tm-main">
                    
                    <table id="Tm-table">
                            <div className="title"><h2 >Meine Arbeitstunden</h2></div>
                            <tr>
                                <th className="Tm-Table-Column-th">Id-Worktime</th>
                                <th className="Tm-Table-Column-th">Date</th>
                                <th className="Tm-Table-Column-th">Type</th>
                                <th className="Tm-Table-Column-th"></th>
                            </tr>

                            {worktimeList.map(worktime =>(
                                
                                <tr>
                                    <td className="Tm-Table-Column">{worktime.id}</td>
                                    
                                    
                            
                                    <td className="Tm-Table-Column">{worktime.date} </td>
                                    <td className="Tm-Table-Column">{worktime.type}</td>

                                    
                                    <td className="Tm-Table-Column-button"><input type="button" className="Tm-details-button" id={worktime.id} onClick={() => toDetailsPage2(worktime.id)} value="Details"/></td>
                                </tr>
                
                            ))}

                            <div className="Tm-Table-row-Newbutton">
                                <input type="button" className="Tm-neu-button" onClick={toNewRecordSeite} value="Neu"/>
                            </div>
                        </table>
                        
                        
                    </div>

                <footer id="Tm-footer" >
                    <div id="Tm-foot1" className="col-6">
                            <h3><u>Kontakt</u></h3>
                            <p><img className="Tm-icone-Contact" src="/images/email-icone.png" />haeger-consulting@gmail.com</p>
                            <p ><img className="Tm-icone-Contact" src="/images/icone-tel.png" /> 0123456789</p>
                            <p><img className="Tm-icone-Contact" src="/images/adresse-icone.png" /> Straße  125</p>
                            <div><p>45786  Bonn</p></div>

                    
                    </div>

                    <div id="Tm-foot2" className="col-6">
                        <h3><u>Social Media</u></h3>
                        <p><a href="https://www.xing.com/profile/Ralf_Haeger/cv"><img className="Tm-icone" src="/images/xing-iconepng.png" /></a><br/></p>
                        <p><a href="https://fr.linkedin.com/"><img className="Tm-icone" src="/images/linkn-icon.png" /></a><br/></p>
                        <p>   </p>
                        <div><p></p></div>

                    </div>
                    
                </footer>
            </div>

        );
    }

}

export default Menu;