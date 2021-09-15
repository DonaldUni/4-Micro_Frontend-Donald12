import React from 'react';
import ReactDOM from 'react-dom';
import './EmployeeStartSeite.css';


class Start extends React.Component{

    render(){

        return(

            <div id="body">
                <header id="header ">
                    <a href="http://localhost:3000/">
                        <img id="Me-haegertime-logo" src="/images/Haegerrtime-logo.PNG"  /><br/>
                    </a>
                    <ul id="start-ul">
                        <li><a href="http://localhost:3000/Employee/start">Start</a></li>
                        <li><a href="http://localhost:3000/Employee/Me">Me</a></li>
                        <li><a href="http://localhost:3000/Employee/TimeRecord/Menu">TimeRecord</a></li>
                    </ul>

                </header>

                <main>
                    <img id="world" src="/images/world.jfif"  />

                </main>

                <footer>

                </footer>
            </div>

        );
    }
}

export default Start;