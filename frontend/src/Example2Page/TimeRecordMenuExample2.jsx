import React, {Component} from 'react';
import './TimeRecordMenuExample2.css';


class MenuVersion2 extends Component{


    constructor(props){
        super(props);
        this.state = {
            worktimes: [] 
        }

        
    }

    

    componentDidMount(){

        const worktimelist_URL = 'http://localhost:8082/API/Haegertime/users/getAllMyWorktime/1';

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

        return(

            <body>

                <header id="Tm-header ">
                    <a href="http://localhost:3000/">
                    <img id="Tm-haegertime-logo" src="/images/Haegerrtime-logo.PNG"  /><br/>
                    </a>
                    <ul id ="Tm-ul">
                        <li><a href="http://localhost:3000/Employee/start">Start</a></li>
                        <li><a href="http://localhost:3000/Employee/Me">Me</a></li>
                        <li><a href="http://localhost:3000/Employee/TimeRecord/Menu">TimeRecord</a></li>
                    </ul>

                </header>

            <main>
                <div id="Tm-body">
                
                    <main id="Tm-main">
                    <div id="Tm-div-table">
                        <table id="Tm-table">
                            <tr>
                                <th>Id-Worktime</th>
                                <th>Project-Name</th>
                                <th>Number of Workhour</th>
                            </tr>

                            {worktimeList.map(worktime =>(
                                
                                <tr>
                                    <td >{worktime.id}</td>
                                    
                                    
                            
                                    <td>{worktime.project.name} </td>
                                    <td>{worktime.workhour}</td>

                                    
                                    <td><input type="button" className="Tm-details-button" id={worktime.id} onClick={() => toDetailsPage2(worktime.id)} value="Details"/></td>
                                </tr>
                                
                            ))}

                            
                        </table>
                        <input type="button" className="Tm-neu-button" onClick={toNewRecordSeite} value="Neu"/>
                        
                    </div>

                </main>

                <footer>

                </footer>
            </div>


            </main>

            <footer id ="H-footer">
            <div id="foot1">
              <h3> Contakt</h3>
              <p>haeger-consulting@gmail.com</p>
              <p>Tel: 0123456789</p>
              <p>Adresse: Straße  125</p>
              <p>         45786  Bonn</p>

            </div>
            <div id="foot2">

            </div>
          </footer>


            </body>
            

            
        );
    }

    /*function toDetailsSeite( worktime_Id ){
        //alert(worktime_Id);

        var detailsPageURL = "http://localhost:3000/Employee/TimeRecord/Details/ " +  worktime_Id;
        window.location.href = detailsPageURL;
    }

    function toTestSeite( worktime_Id ){
        //alert(worktime_Id);
        var details1PageURL = "http://localhost:3000/Employee/TimeRecord/Details1/ " +  worktime_Id;
        window.location.href = details1PageURL;

    }*/
}

export default MenuVersion2;