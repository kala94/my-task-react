import './App.css';
 import Fcomponent from './Fcomponent.js';
import Skilldetail from './Skilldetail.js';
import Count from './Count.js';
import Buttoncreate from './Buttoncreate'; 
import Effect from './Effect.js';
import Formchange from './Formchange';
import Searchfilter from './Searchfilter.js';
import Home from './Home.js';
import About from './About.js';
import Login from './Login.js';
import Dashboard from './Dashboard.js';
import Error from './Error.js';
import { Route, Routes } from 'react-router-dom';
import Crud from './Crud.js'; 
import Mounting from './Mounting'; 
import Createaccount from './Createaccount.js'; 
import Ccomponent from './Ccomponent.js';
function App() {
  const studet=[
    {
      name:"kala",
      age:20,
      dept:"B.SC(CS)"
    },
    {
      name:"Arul",
      age:22,
      dept:"B.SC(EC)"
    },
    {
      name:"kousalya",
      age:20,
      dept:"B.SC(IT)"
    }
   ]; 
   const employee=[
    {
      name:"Alex",
      skills:[
      {name:"ReactJS", type:"Frontend"},
      {name:"nodeJS", type:"Backend"}
     ]
    },
    {
      name:"Anna",
      skills:[
      {name:"Angular", type:"Frontend"},
      {name:"Python", type:"Backend"}
      ]
    }
   ]; 
   return (
    <div>
     <Fcomponent user={studet}/>
     <Ccomponent userdet={studet}/> 
     <Buttoncreate/>
     <Skilldetail employee={employee}/>
     <Count/>
     <Effect/>
     <Formchange/>
     <Searchfilter/>
     <Crud/>
     <Createaccount/>
     <Mounting/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='login' element={<Login/>}/>
       <Route path='dashboard' element={<Dashboard/>}/>
       <Route path='*' element={<Error/>}/>
     </Routes>
    </div>
  );
}

export default App;
