import React , { useEffect, useState }  from 'react';
import './DetailsPage.css';

function NotAvailableDetailsPage1() {

    //const [worktime, setWorktime] = useState({});
    const [id, setWorktimeId] = useState(0)
  const [project, setProject] = useState({});
  const [user, setUser] = useState({});
  const [workhour, setWorkhour] = useState(0);
  const [overtime,setOvertime]=useState(0);
  const [undertime,setUntertimed]=useState(0);
  const [period,setPeriod]=useState("");
  const [worktimeType,setWorktimetype]=useState("Unfinal");

  var worktime ;
  /*useEffect(() => {
    getInitialWorktime();
  })*/

  

  function getInitialWorktime() {

    let worktimeId = getworktimeId();

    let baseURL = "http://localhost:8082/API/Haegertime/users/getAllWorktimes/get/" + worktimeId;

    /*fetch(baseURL).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        //setWorktime(resp);
        /*console.log(resp);
        
        console.log(worktime);
        setWorktimeId(resp.id)
        console.log(id)
        //setProject(resp.project)
        /*setUser(resp[0].user)
        setWorkhour(resp[0].workhour)
        setOvertime(resp[0].overtime)
        setUntertimed(resp[0].undertime)
        setPeriod(resp[0].period)
        setWorktimetype(resp[0].worktimeType)
      })
    });*/

    fetch(baseURL).then((result) => {
        result.json().then((resp) => {
            setWorktimeId(resp.id);
          
          console.log(id);
        })
      });

    fetch(baseURL).then((result) => {
        result.json().then((resp) => {
            setProject(resp.project)
          
          console.log(project);
        })
      });

      fetch(baseURL).then((result) => {
        result.json().then((resp) => {
            setUser(resp.user)
          
          console.log(user);
        })
      });

      

      fetch(baseURL).then((result) => {
        result.json().then((resp) => {
            setWorkhour(resp.workhour)
          
          console.log(workhour);
        })
      });

      fetch(baseURL).then((result) => {
        result.json().then((resp) => {
            
            setOvertime(resp.overtime)
          
          console.log(overtime);
        })
      });

      fetch(baseURL).then((result) => {
        result.json().then((resp) => {
            setUntertimed(resp.undertime)
          
          console.log(undertime);
        })
      });

      fetch(baseURL).then((result) => {
        result.json().then((resp) => {
            setPeriod(resp.period)
          
          console.log(period);
        })
      });
      fetch(baseURL).then((result) => {
        result.json().then((resp) => {
            setWorktimetype(resp.worktimeType)
          
          console.log(worktimeType);
        })
      });

      worktime = {id, project, user, workhour, overtime, undertime, period, worktimeType};
      console.log(worktime);
      

  }
  let count = 0
  if(count == 0 ){
      getInitialWorktime();
      count = count + 1;
  }

    
   

    
    function handleChangeWorkhour(workhour){
        
        worktime.workhour = workhour;

    }
    function handleChangeOvertime(overtime){
        
        worktime.overtime= overtime;       

    }
    function handleChangeUntertime(untertime){
        worktime.untertime = untertime;

    }

    function handleChangePeriod(period){
        worktime.period= period;

    }
    function handleChangeWorktimtType(type){
        worktime.worktimeType= type;

    }

    function getworktimeId(){

        // take the id of the worktime
        let locationURL = window.location.pathname;
        let tmp = locationURL.indexOf("%20")
        var worktimeId_String = locationURL.substring(tmp + 3, locationURL.length);
        var worktimeId = parseInt(worktimeId_String);
        //alert(worktimeId)

        //the the worktime from the Backend
        worktimeId = 52;
        return  worktimeId
    }

    function getProject(projectId){
        //take Project FromBackend(projectId);
        const project_URL = 'http://localhost:8082/API/Haegertime/bookkeepers/Projects/get/'+ projectId;
        
        return window.fetch(project_URL)
        .then((result) => {
            result.json().then((resp) => {
                setProject(resp[0].project)
            })
        });
    }

    function getUser(){

         //takeUserFromBackend(userId);
         const user_URL = 'http://localhost:8082/API/Haegertime/users/get/1';
         
          window.fetch(user_URL)
         .then((result) => {
            result.json().then((resp) => {
                setUser(resp[0].user)
            })
        });
            
    }

    function updateWorktime(worktime_id){

        let updateURL = "http://localhost:8082/API/Haegertime/users//getAllWorktimes/get/" + worktime_id;

        const requestOptions = {
            method: 'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(worktime)
        };
 
       console.log(requestOptions.body);

        fetch(updateURL, requestOptions).then((result) => {
        result.json().then((resp) => {
            getInitialWorktime()
        })
        })
    }


        
        return(<div></div>);
        

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
                                        <input type="text" id="NR-TI-id"  value ={worktime.id}  /> </td>
                                </tr>
                                <tr>
                                    <td><label className="D-label">Project-Id  </label></td>
                                    <td className="NR-td-input">
                                    
                                        <input type="text" id="D-TI-ProjectId"  value={worktime.project.id}  
                                            

                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td><label className="D-label">User-Id  </label></td>
                                    <td className="D-td-input">
                                        <input type="text" id="NR-TI-UserId"  value={worktime.user.id}
                                            
                                        />  
                                    </td>
                                </tr>

                                <tr>
                                    <td><label className="D-label">Workhour  </label></td>
                                    <td className="D-td-input">
                                        <input type="text" id="NR-TI-Workhour" defaultValue={worktime.workhour}
                                            onChange={handleChangeWorkhour}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td><label className="D-label">Overtime  </label></td>
                                    <td className="D-td-input">
                                        <input type="text" id="NR-TI-Overtime" defaultValue={worktime.overtime}
                                            onChange={handleChangeOvertime}
                                            
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td><label className="D-label">Undertime  </label></td>
                                    <td className="D-td-input">
                                        <input type="text" id="NR-TI-Undertime" defaultValue={worktime.undertime}
                                            onChange={handleChangeUntertime}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td><label className="D-label">Period  </label></td>
                                    <td className="D-td-input">
                                        <input type="text" id="NR-TI-Period" defaultValue={worktime.period}
                                            onChange={handleChangePeriod}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td><label className="D-label">Worktimetyp  </label></td>
                                    <td className="D-td-input">
                                        <select id="D-TI-Worktimetyp" Name="Select"  defaultValue={worktime.worktimeType}
                                        onChange={handleChangeWorktimtType}>  
                                            <option>Unfinal</option>  
                                            <option>Final</option>   
                                        </select>  
                                    </td>
                                </tr>

                                
                            </table>
                            
                            <input type="button" id="D-updateButton"  value=" Update" onClick={()=>{save(project.id)}}/>
                            
                           
                        </div>
    
                    </main>
    
                    <footer>
    
                    </footer>
                </div>
        );
       
        
        function save(projectId){
        
                getProject(projectId);
                getUser();
        
                //make a new  post-request  and send it to the backend
                if(worktime.project != {} && worktime.user != {}){
                    
                    console.log("geschafft!");
                    updateWorktime();
                }else{
        
                    getProject();
                    getUser();
                    updateWorktime();  
                }
        
        }

    
};

export default NotAvailableDetailsPage1;