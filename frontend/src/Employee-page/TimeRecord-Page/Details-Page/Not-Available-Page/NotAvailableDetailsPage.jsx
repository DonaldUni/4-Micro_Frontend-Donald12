import React , {Component} from 'react';
import './DetailsPage.css';

class NotAvailableDetailsPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            worktime: {} ,
            id: 0,
            project: {},
            user: {},
            workhour: 0,
            overtime: 0,
            undertime: 0,
            period: "",
            worktimeType: "Unfinal"
        }

        this.save = this.save.bind(this);
        this.handleChangeWorkhour = this.handleChangeWorkhour.bind(this);
        this.handleChangeOvertime = this.handleChangeOvertime.bind(this);
        this.handleChangeUntertime = this.handleChangeUntertime.bind(this);
        this.handleChangePeriod = this.handleChangePeriod.bind(this);
        this.handleChangeWorktimtType = this.handleChangeWorktimtType.bind(this);
        //this.handleChangeWorkhour = this.handleChange.bind(this);
    }

   

    componentDidMount(){

        let worktimeId = this.getworktimeId();

        let baseURL = "http://localhost:8082/API/Haegertime/users/getAllWorktimes/get/" + worktimeId;

        window.fetch(baseURL)
            .then((res) => {
                
                return res.json()
            })
            .then(json => {
                this.setState({
                    worktime: json,
                })
            });
    }

    
    handleChangeWorkhour(workhour){
        this.setState({
            workhour: workhour
        });

    }
    handleChangeOvertime(overtime){
        this.setState({
            overtime: overtime
        });

    }
    handleChangeUntertime(untertime){
        this.setState({
            untertime: untertime
        });

    }

    handleChangePeriod(period){
        this.setState({
            period: period
        });

    }
    handleChangeWorktimtType(type){
        this.setState({
            worktimeType: type
        });

    }

    getworktimeId(){

        // take the id of the worktime
        let locationURL = window.location.pathname;
        let tmp = locationURL.indexOf("%20")
        var worktimeId_String = locationURL.substring(tmp + 3, locationURL.length);
        var worktimeId = parseInt(worktimeId_String);
        //alert(worktimeId)

        //the the worktime from the Backend
        return  worktimeId
    }

    getProject(projectId){
        //takeProjectFromBackend(projectId);
        const project_URL = 'http://localhost:8082/API/Haegertime/bookkeepers/Projects/get/'+ projectId;
        
        return window.fetch(project_URL)
        .then(res =>  res.json())
        .then(json =>
            this.setState({    
                project: json,
            })
        );

    
    }

    getUser(){

         //take User from Backend(userId);
         const user_URL = 'http://localhost:8082/API/Haegertime/users/get/1';
         
          window.fetch(user_URL)
         .then(res =>  res.json())
         .then(json => 
            this.setState({    
                 user: json,
            })
         );
        
        
    }

    saveWorktime(){


        let inputedWorktime = {

            //id: this.state.id,
            id : this.getworktimeId(),
            project: this.state.project,
            user: this.state.user,
            workhour: this.state.workhour,
            overtime: this.state.overtime,
            undertime: this.state.undertime,
            period: this.state.period,
            worktimeType: this.state.worktimeType

        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputedWorktime)
        };
 
       console.log(requestOptions.body);

       const createUnfinalWorktime_URL = "http://localhost:8082/API/Haegertime/users/UnfinalWorktime";
       fetch(createUnfinalWorktime_URL, requestOptions)
            .then(response =>  {
                console.log(response);
                alert("gespeichert");
            });
              
    }

    /*showOk(){

        var savedMessage = <h3 id="showMessage">Record have been saved</h3>

        document.getElementById("NR-newRecordButton").innerHTML = savedMessage;
    }*/


    save(projectId){


        /*let projectId = document.getElementById("NR-TI-ProjectId").value;
        let userId = document.getElementById("NR-TI-UserId").value;

        this.setState({

        workhour: parseFloat(document.getElementById("NR-TI-Workhour").value),
        overtime: parseFloat(document.getElementById("NR-TI-Overtime").value),
        undertime: parseFloat(document.getElementById("NR-TI-Undertime").value),
        period : document.getElementById("NR-TI-Period").value,
        worktimeType: document.getElementById("NR-TI-Worktimetyp").options[document.getElementById('NR-TI-Worktimetyp').selectedIndex].text
    
        })*/
        //test 

        this.getProject(projectId);
        this.getUser();

        //make a new  post-request  and send it to the backend
        if(this.state.project != {} && this.state != {}){
            
            console.log("geschafft!");
            this.saveWorktime();
        }else{

            this.getProject();
            this.getUser();
            this.saveWorktime();  
        }

    }

    

    render(){

        var { worktime } = this.state.worktime;
        var worktimeId = this.getworktimeId();
        var projectId = 1;
        var userID = 1;

        /*var projectOfWorktime = worktime.project;
        //TODO later
        var userOfWorktime = worktime.user;*/
        //console.log(projectOfWorktime.);
        //console.log(user.id);
        //console.log(projectOfWorktime.id);
        //value ={worktime.project.id}
        //value ={worktime.user.id}

        var inputWorktime = {
            id: 0,
            project: {},
            user: {},
            workhour: 0,
            overtime: 0,
            undertime: 0,
            period: "",
            worktimeType: "Unfinal"
        }
        
        



        return (

            <div id="D-body">
                    <header id="D-header ">
                        <a href="http://localhost:3000/">
                        <img id="NR-haegertime-logo" src="/images/Haegerrtime-logo.PNG"  /><br/>
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
                                    <td  > <label className="D-label">Id  </label></td>
                                    <td className="D-td-input">
                                        <input type="text" id="NR-TI-id"  value ={worktimeId}  /> </td>
                                </tr>
                                <tr>
                                    <td><label className="D-label">Project-Id  </label></td>
                                    <td className="NR-td-input">
                                    
                                        <input type="text" id="D-TI-ProjectId"  value="1"  
                                            

                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td><label className="D-label">User-Id  </label></td>
                                    <td className="D-td-input">
                                        <input type="text" id="NR-TI-UserId"  value={userID} 
                                            
                                        />  
                                    </td>
                                </tr>

                                <tr>
                                    <td><label className="D-label">Workhour  </label></td>
                                    <td className="D-td-input">
                                        <input type="text" id="NR-TI-Workhour" defaultValue={inputWorktime.workhour}
                                            onChange={this.handleChangeWorkhour}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td><label className="D-label">Overtime  </label></td>
                                    <td className="D-td-input">
                                        <input type="text" id="NR-TI-Overtime" defaultValue={inputWorktime.overtime}
                                            onChange={this.handleChangeOvertime}
                                            
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td><label className="D-label">Undertime  </label></td>
                                    <td className="D-td-input">
                                        <input type="text" id="NR-TI-Undertime" defaultValue={inputWorktime.undertime}
                                            onChange={this.handleChangeUntertime}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td><label className="D-label">Period  </label></td>
                                    <td className="D-td-input">
                                        <input type="text" id="NR-TI-Period" defaultValue={inputWorktime.period}
                                            onChange={this.handleChangePeriod}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td><label className="D-label">Worktimetyp  </label></td>
                                    <td className="D-td-input">
                                        <select id="D-TI-Worktimetyp" Name="Select"  defaultValue={inputWorktime.worktimeType}
                                        onChange={this.handleChangeWorktimtType}>  
                                            <option>Unfinal</option>  
                                            <option>Final</option>   
                                        </select>  
                                    </td>
                                </tr>

                                
                            </table>
                            
                            <input type="button" id="D-updateButton" onClick={() => {this.save(projectId)}} value=" Update"/>
                            
                           
                        </div>
    
                    </main>
    
                    <footer>
    
                    </footer>
                </div>
        );

    }
    
};

export default NotAvailableDetailsPage;