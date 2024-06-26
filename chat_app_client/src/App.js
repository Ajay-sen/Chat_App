import React from "react";
import './App.css';
import MainContainer from "./components/MainContainer";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Users from "./components/Users";
import CreateGroups from "./components/CreateGroup"
import Groups from "./components/Users_Groups";
import ChatArea from "./components/ChatArea"
import {Route,Routes} from "react-router-dom";


function App(){
  return (
    <div className="App">
    
    {/* <MainContainer/> */}
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="app" element={<MainContainer/>}>
        <Route path="welcome" element={<Welcome/>}></Route>
        <Route path="chat/:_id" element={<ChatArea/>}></Route>
        <Route path="users" element={<Users/>}></Route>
        <Route path="groups" element={<Groups/>}></Route>
        <Route path="create-groups" element={<CreateGroups/>}></Route>
      </Route>
    </Routes>
    
    </div>
  );
}

export default App;