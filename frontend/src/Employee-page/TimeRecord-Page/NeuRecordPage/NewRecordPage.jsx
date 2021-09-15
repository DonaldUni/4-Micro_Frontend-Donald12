import React , {Component} from 'react';
import './NewRecordPage.css';

class NewRecordPage extends Component{

    constructor(props){
        super(props);
        
    }


    render(){

        var worktime = {
            id: 0,
            user: { id:1 },
            date: "",
            starting: "",
            ending: "",
            hours: 0,
            type: "",
            finalized: false
        };
    

        function handleChangeDate(date){
            worktime.date = date;
    
        }
        function handleChangeStarting(starting){
            worktime.starting = starting;
    
        }
        function handleChangeEnding(ending){
            worktime.ending = ending;
    
        }
    
        function handleChangeWorktimtType(type){
            worktime.type = type;
    
        }

        function save(event){

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(worktime)
            };
     
           console.log(requestOptions.body);
    
           const createUnfinalWorktime_URL = "http://localhost:8082/timeRecord";
           fetch(createUnfinalWorktime_URL, requestOptions)
                .then(response =>  {
                    console.log(response);
                    alert("gespeichert");
                });
            
            var newWorktime = {
                    id: 0,
                    user: { id:1 },
                    date: "",
                    starting: "",
                    ending: "",
                    hours: 0,
                    type: "",
                    finalized: false
            };
            
            worktime = newWorktime;
            document.getElementById("NR-TI-Date").value = worktime.date;
            document.getElementById("NR-TI-Starting").value = worktime.starting;
            document.getElementById("NR-TI-Ending").value = worktime.ending;
        }




        return (

            <div id="NR-body">
                    <header id="NR-header ">
                        <a href="http://localhost:3000/">
                        <img id="NR-haegertime-logo" src="/images/Haegerrtime-logo.PNG"  /><br/>
                        </a>
                        <ul id ="NR-ul">
                            <li><a href="http://localhost:3000/Employee/start">Start</a></li>
                            <li><a href="http://localhost:3000/Employee/Me">Me</a></li>
                            <li><a href="http://localhost:3000/Employee/TimeRecord/Menu">TimeRecord</a></li>
                        </ul>
    
                    </header>
    
                    <main id="NR-main">
                        <div>
                            <table id="NR-table">
                                

                                <tr>
                                    <td><label className="NR-label">User-Id  </label></td>
                                    <td className="NR-td-input"><input type="text" id="NR-TI-UserId" value ="1"/>  </td>
                                </tr>

                                <tr>
                                    <td><label className="NR-label">Date  </label></td>
                                    <td className="NR-td-input"><input type="text" id="NR-TI-Date"  
                                        onChange={(e) =>handleChangeDate(e.target.value)}
                                    /></td>
                                </tr>

                                <tr>
                                    <td><label className="NR-label">Starting  </label></td>
                                    <td className="NR-td-input"><input type="text" id="NR-TI-Starting"
                                        onChange={(e) =>handleChangeStarting(e.target.value)}
                                    /></td>
                                </tr>

                                <tr>
                                    <td><label className="NR-label">Ending  </label></td>
                                    <td className="NR-td-input"><input type="text" id="NR-TI-Ending" 
                                        onChange={(e) =>handleChangeEnding(e.target.value)}
                                    /></td>
                                </tr>

                                <tr>
                                    <td><label className="NR-label">Type </label></td>
                                    <td className="NR-td-input">
                                        <select id="NR-TI-Worktimetyp" Name="Select" 
                                        onChange={(e) =>handleChangeWorktimtType(e.target.value)}>  
                                            <option>REGULAR_WORKTIME</option>  
                                            <option>OVERTIME</option> 
                                            <option>SICK</option>  
                                            <option>ON_VACATION</option>   
                                        </select>  
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className="NR-label">Finalized  </label></td>
                                    <td className="NR-td-input"><input type="text" id="NR-TI-Finalized" value ="false"/></td>
                                </tr>

                                
                            </table>

                            <input type="button" id="NR-newRecordButton" onClick={ () => {save()}} value=" Save"/>
                            
                           
                        </div>
    
                    </main>
    
                    <footer>
    
                    </footer>
                </div>
        );

    }
    
};

export default NewRecordPage;