
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React ,{useState} from 'react';
import Alert from './Components/Alert';


import {
  BrowserRouter as Router,
  Switch,
  Route
  // link
} from "react-router-dom";


function App() {
  const [mode,setmode]=useState('light')

  const [alert, setalert] = useState(null)

const showalert =(message, type)=>{
           setalert({
             msg: message,
             type: type
           })
           setTimeout(() => {
             setalert(null);
           },3000);
  }

 const togglemode=()=>{
   if(mode==='light')
   {
   setmode('dark');
   document.body.style.backgroundColor='black';
     const showalert=('dark mode has been enabled','success');
    document.title='TextUtils-Dark mode';
    // FOR TITLE BLINKING
  //   setInterval(() => {
  //     document.title='TextUtils is amazing mode';
  //   }, 2000);
  //   setInterval(() => {
  //     document.title='install TextUtils now';
  //   }, 1500);
    }
   else {
     setmode('light');
     document.body.style.backgroundColor='white';
     const showalert=("light mode has been enabled","success");
     document.title='TextUtils-light mode';
   }

  }

  return (
    <>
    <Router>
<Navbar title="textUtils-Hasnain" mode={mode} togglemode={togglemode} about="About Us"/>
<Alert alert={alert}/>

<div className="container my-3">
<Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          
          <Route exact path="/">
          <TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode}/>
          
          </Route>
        </Switch>
        </div>
        </Router>

{/*<About/>*/}

      
    </>
  );
}

export default App;
