import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../Me-Page/MePage.css';


class MeElement extends Component{

    constructor(props){
        super(props);
        this.state = {
            users: {} ,
        }
    }

    componentDidMount(){

        window.fetch('http://localhost:8082/API/Haegertime/users/get/1')
            .then((res) => {
                
                return res.json()
            })
            .then(json => {
                this.setState({
                    users: json,
                })
            });
    }

    render(){

        var { users } = this.state;

        

        return(
            

            <div id="Me-body">
                <header id="Me-header ">
                    <a href="http://localhost:3000/">
                    <img id="Me-haegertime-logo" src="/images/Haegerrtime-logo.PNG"  /><br/>
                    </a>
                    <ul id ="Me-ul">
                        <li><a href="http://localhost:3000/Employee/start">Start</a></li>
                        <li><a href="http://localhost:3000/Employee/Me">Me</a></li>
                        <li><a href="http://localhost:3000/Employee/TimeRecord/Menu">TimeRecord</a></li>
                    </ul>

                </header>

                <main id="Me-main">
                    <div>
                        <form id="Me-form" action="">
                            <div>
                                <label className="Me-label">Lastname : </label>
                                <input type="text" id="Me-flname" value={users.firstname} /> 
                            </div>
                            

                            <div>
                                <label className="Me-label">Firstname : </label>
                                <input type="text" id="Me-ffname" value={users.lastname}/> 
                            </div>

                            <div>
                                <label className="Me-label">Personalnummer : </label>
                                <input type="text" id="Me-fpnummer" value={users.employeeNummer}/> 
                            </div>

                            <div>
                                <label className="Me-label">Email : </label>
                                <input type="text" id="Me-femail" value={users.email}/> 
                            </div>

                            <div>
                                <label className="Me-label">Power : </label>
                                <input type="text" id="Me-fpower" value={users.power}/> 
                            </div>

                            <div>
                                <label className="Me-label">Status : </label>
                                <input type="text" id="Me-fstatus" value={users.status}/> 
                            </div>

                            <div>
                                <label className="Me-label">Number of used Holidays : </label>
                                <input type="text" id=" fnumberofusedholidays" value={users.numberOfUsedHoliday}/> 
                            </div>

                            <div>
                                <label className="Me-label">Number of rest Holidays : </label>
                                <input type="text" id="Me-fnumberofrestholidays" value={users.numberOfRestHoliday}/> 
                            </div>

                            <div>
                                <label className="Me-label">Number of sick Holidays : </label>
                                <input type="text" id="Me-fnumberofsickholidays" value={users.numberOfSickDay}/> 
                            </div>

                            <div>
                                <label className="Me-label">Number of Holidays : </label>
                                <input type="text" id="Me-fnumberofholidays" value={users.numberOfHoliday}/> 
                            </div>
                            
                            
                        </form>
                    </div>

                </main>

                <footer>

                </footer>
            </div>

        );
    }
}

export default MeElement;