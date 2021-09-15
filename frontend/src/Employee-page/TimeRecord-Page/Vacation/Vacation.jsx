import React , {Component} from 'react';
import './Vacation.css';

class NewVacationPage extends Component{

    constructor(props){
        super(props);
        
    }


    render(){

        var vacation = {
            startDate: "",
            endDate: "",
            startingAt: "",
            endingAt: "",
            
        };
    

        function handleChangeStartDate(date){
            vacation.startDate = date;
    
        }
        
        function handleChangeEndDate(date){
            vacation.endDate = date;
    
        }

        function handleChangeStartingAt(starting){
            vacation.startingAt = starting;
    
        }
        function handleChangeEndingAt(ending){
            vacation.endingAt = ending;
    
        }
    
        

        function save(event){

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(vacation)
            };
     
           console.log(requestOptions.body);
            
           var timeRecords = [];
           const postURL = "http://localhost:8082/timeRecord/vacation";
           fetch(postURL, requestOptions)
                .then((res) => {
                
                    return res.json()
                }).then(json => 
                    console.log(json)
                );            
        
            document.getElementById("V-TI-StartDate").value = " ";
            document.getElementById("V-TI-EndDate").value = " ";
            document.getElementById("V-TI-StartingAt").value = " ";
            document.getElementById("V-TI-EndingAt").value = " ";

        }




        return (

            <div id="V-body">
                    <header id="V-header ">
                        <a href="http://localhost:3000/">
                        <img id="V-haegertime-logo" src="/images/Haegerrtime-logo.PNG"  /><br/>
                        </a>
                        <ul id ="V-ul">
                            <li><a href="http://localhost:3000/Employee/start">Start</a></li>
                            <li><a href="http://localhost:3000/Employee/Me">Me</a></li>
                            <li><a href="http://localhost:3000/Employee/TimeRecord/Menu">TimeRecord</a></li>
                        </ul>
    
                    </header>
    
                    <main id="V-main">
                        <div>
                            <table id="V-table">
                            startDate;
    

                                <tr>
                                    <td><label className="V-label">StartDate  </label></td>
                                    <td className="V-td-input"><input type="text" id="V-TI-StartDate" 
                                        onChange={(e) =>handleChangeStartDate(e.target.value)}
                                    />  </td>
                                </tr>

                                <tr>
                                    <td><label className="V-label">EndDate  </label></td>
                                    <td className="NR-td-input"><input type="text" id="V-TI-EndDate"  
                                        onChange={(e) =>handleChangeEndDate(e.target.value)}
                                    /></td>
                                </tr>

                                <tr>
                                    <td><label className="V-label">StartingAt(in Hour)  </label></td>
                                    <td className="NR-td-input"><input type="text" id="V-TI-StartingAt"
                                        onChange={(e) =>handleChangeStartingAt(e.target.value)}
                                    /></td>
                                </tr>

                                <tr>
                                    <td><label className="V-label">EndingAt  </label></td>
                                    <td className="V-td-input"><input type="text" id="V-TI-EndingAt" 
                                        onChange={(e) =>handleChangeEndingAt(e.target.value)}
                                    /></td>
                                </tr>
                                
                            </table>

                            <input type="button" id="V-Vacation" onClick={ () => {save()}} value=" Save"/>
                            
                           
                        </div>
    
                    </main>
    
                    <footer>
    
                    </footer>
                </div>
        );

    }
    
};

export default NewVacationPage;