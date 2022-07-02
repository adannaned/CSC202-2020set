import React from 'react';
import pic from "./images/pauu.jpg";
import './App.css';
import Student from './components/ca2/students';
import HelloWorld8 from './components/HelloWorld8';
import Studentform from './components/ca2/studentsform';
const App: React.FC = () => {
    return (
        <div className="Container">
          <div className="Column1">
            <img src={pic} alt = "PAU"  />
          <HelloWorld8 />
          </div>
          <div className="Column2">
          <Studentform />
          </div>
          <div className="Column3">
            <Student />
          </div>
        </div>
        );
}
export default App;