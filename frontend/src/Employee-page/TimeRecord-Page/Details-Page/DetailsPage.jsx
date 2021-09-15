import React , {Component} from 'react';
import './DetailsPage.css';

class DetailsPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            worktime: {},
            user: {id:1},
            
        };


    }

    componentDidMount(){

        let worktimeId = this.getworktimeId();
            const baseURL = "http://localhost:8082/timeRecord/" + worktimeId;
    
            window.fetch(baseURL)
                .then(res =>  res.json())
                .then(json => {
                    this.setState({
                        worktime: json,
                        project: json.project,
                    })
                });

    }
    
    getworktimeId(){

        // take the id of the worktime
        let locationURL = window.location.pathname;
        let tmp = locationURL.indexOf("Details/")
        let worktimeId_String = locationURL.substring(tmp + 8 , locationURL.length);
        var worktimeId = parseInt(worktimeId_String);
        //alert(worktimeId_String)

        //the the worktime from the Backend
        return  worktimeId;
    }

    

    render(){

        console.log(this.state.worktime);
        
        //take initial Data from Database
        var worktime = this.state.worktime;
        worktime.user = this.state.user;
        //var updatable = false;

       //ChangeHandler
        /*function handleChangeProjectID(projectID){

            if(projectID == ""){
    
            }else{
                if(Number(projectID)){

                    worktime.project.id = projectID;
                    updatable = true;

                }else{
                    document.getElementById("D-TI-ProjectId").style.border = "1px solid red";
                    //window.alert("the project-ID must be a number!");
                    updatable = false;
                }
            }
            
    
        }*/
        function handleChangeDate(date){
            worktime.date = date;
    
        }
        function handleChangeStarting(starting){
            worktime.starting = starting;
    
        }
        function handleChangeEnding(ending){
            worktime.ending = ending;
    
        }
    
        function handleChangeFinalised(finalised){
            worktime.finalised = finalised;
    
        }
        function handleChangeWorktimtType(type){
            worktime.type = type;
    
        }

        //eventHandler
        function save(){

            doUpdateRequest();
        }

        function doUpdateRequest(){
            
            const requestOptions = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(worktime)
            };
     
           console.log(requestOptions.body);
    
           let updateURL = "http://localhost:8082/timeRecord/"+ worktime.id +"/update";
           fetch(updateURL, requestOptions)
                .then(response =>  
                    response.json()
                )
                .then(json => setUpdatedWorktime(json));
            
        }

        function setUpdatedWorktime(json){
            alert("The input has been updated!");
            var updatedWorktime = {};
            updatedWorktime = json;
            //console.log(updatedWorktime);
            worktime = updatedWorktime;

        }

        function finalise(){

            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(worktime)
            };
     
           console.log(requestOptions.body);
    
           let updateURL = "http://localhost:8082/timeRecord/"+ worktime.id +"/finalize";
           fetch(updateURL, requestOptions)
                .then(response =>  
                    response.json()
                )
                .then(json => setUpdatedWorktime(json));
            
                document.getElementById("NR-TI-Finalized").value = true;
        }

        /*function getProject(projectId){
            //takeProjectFromBackend(projectId);
            const project_URL = 'http://localhost:8082/API/Haegertime/bookkeepers/Projects/get/'+ projectId;
            
            return window.fetch(project_URL)
            .then(res =>  res.json())
            .then(json => setProject(json));
    
        }*/

       

        /*function setProject(project){
            worktime.project = project;
            console.log(worktime.project);
        }*/
       


        return (

            <div id="D-body">
                    <header id="D-header ">
                        <a href="http://localhost:3000/">
                        <img id="D-haegertime-logo" src="/images/Haegerrtime-logo.PNG"  /><br/>
                        </a>
                        <ul id ="D-ul">
                            <li><a href="http://localhost:3000/Employee/start">Start</a></li>
                            <li><a href="http://localhost:3000/Employee/Me">Me</a></li>
                            <li><a href="http://localhost:3000/Employee/TimeRecord/Menu">TimeRecord</a></li>
                        </ul>
    
                    </header>
    
                    <main id="D-main">
                        <div>
                            <table id="D-table">
                                
                                <tr>
                                    <td  > <label className="NR-label">Id  </label></td>
                                    <td className="D-td-input"><input type="text" id="NR-TI-id" Value={worktime.id} /> </td>
                                </tr>
                                

                                <tr>
                                    <td><label className="D-label">User-Id  </label></td>
                                    <td className="D-td-input"><input type="text" id="NR-TI-UserId" value={worktime.user.id}/>  </td>
                                </tr>

                                <tr>
                                    <td><label className="NR-label">Date  </label></td>
                                    <td className="D-td-input"><input type="text" id="NR-TI-Date" defaultValue={worktime.date} 
                                        onChange={(e) =>handleChangeDate(e.target.value)}
                                    /></td>
                                </tr>

                                <tr>
                                    <td><label className="NR-label">Starting  </label></td>
                                    <td className="D-td-input"><input type="text" id="NR-TI-Starting" defaultValue={worktime.starting}
                                        onChange={(e) =>handleChangeStarting(e.target.value)}
                                    /></td>
                                </tr>

                                <tr>
                                    <td><label className="D-label">Ending  </label></td>
                                    <td className="D-td-input"><input type="text" id="NR-TI-Ending" defaultValue={worktime.ending}
                                        onChange={(e) =>handleChangeEnding(e.target.value)}
                                    /></td>
                                </tr>

                            

                                <tr>
                                    <td><label className="D-label">Type  </label></td>
                                    <td className="D-td-input">
                                        <select id="D-TI-Worktimetyp" Name="Select" defaultValue={worktime.type} 
                                        onChange={(e) =>handleChangeWorktimtType(e.target.value)} >  
                                            <option>REGULAR_WORKTIME</option>  
                                            <option>OVERTIME</option> 
                                            <option>SICK</option>  
                                            <option>ON_VACATION</option>     
                                        </select>  
                                    </td>
                                </tr>

                                <tr>
                                    <td><label className="D-label">Finalized  </label></td>
                                    <td className="D-td-input"><input type="text" id="NR-TI-Finalized" value={worktime.finalized}
                            
                                    /></td>
                                </tr>

                                
                            </table>

                            <input type="button" id="D-updateButton" onClick={ () => {save()}} value=" Updtade"/>
                            <input type="button" id="D-finaliseButton" onClick={ () => {finalise()}} value="Finalise TimeRecord"/>
                            
                           
                        </div>
    
                    </main>
 
                    <footer>
    
                    </footer>
                </div>
        );
        
      /*
      function getUser(userId){

            //take User from Backend(userId);
            const user_URL = 'http://localhost:8082/API/Haegertime/users/get/' + userId;
            
             window.fetch(user_URL)
            .then(res =>  res.json())
            .then(json => setUser(json));   
       }
        function setUser(user){
            worktime.user = user;
            console.log(worktime.user.id);
        }*/
    }
    
};

export default DetailsPage;