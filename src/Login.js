import './Login.css';
 import React,{ useState,useEffect } from 'react';
 import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";  
import axios from 'axios';



const Login = () =>{

const readEmployeeApi = "http://localhost:8087/api/readEmployee";
const readEmployeeScreenApi = "http://localhost:8087/api/readEmpScreenSecurityGrp";


const [UserName, SetUserName] = useState("");
const [Domain, SetDomain] = useState("");
const [Password, SetPassword] = useState("");

const [isCapsLockOn, setIsCapsLockOn] = useState(false);
const[EmpScreenData,SetEmpScreenData]=useState([]);
const[ReadEmployee,SetReadEmployee]=useState(null);



const Payload = {};
const ReadEmployee_Payload_Data = () =>{
  Payload["datUsername"]=UserName;
  Payload["datNodename"]="MTSORA";
}


  const Validation=()=>{
  if(UserName.length!==0 && Password.length !== 0)
  {
    if(isCapsLockOn){
      var elem = document.createElement("div");
      elem.innerHTML = "Invalid NT login password - domain controller rejected NT logon.<br><br> Check the Caps Lock key.";
      Swal.fire({
        title:"Cigna Health Management",
        html:elem,
        icon: "warning",
        })
    }
    else{ 
    ReadEmployeeApiCall(readEmployeeApi);
    if(ReadEmployee.data.datEmpId!==0){
    ReadEmployeeSrceenGrpApiCall(readEmployeeScreenApi);
     window.console.log(EmpScreenData.data);
     if(EmpScreenData.data.employeeScreens.length!==0){
      eventHandler()
     }else{
      var element = document.createElement("div");
      element.innerHTML = "GrpHlth Warning W00621 <br> <br> You do not have privilages to access any screens within the ICMS application.Login is denied";
       Swal.fire({
         title:"Cigna Health Management",
         html:element,
         icon: 'error',
  })
     } 
    }else{
      var sysAccess = document.createElement("div");
      sysAccess.innerHTML = "GrpHlth Error E00176<br>You are not in the employee table or you do not have a correct entry in the employee_sys_access table!.Login Failed"
      Swal.fire({
         title:"Cigna Health Management",
         html:sysAccess,
        icon: 'error',
  })
    }
    }
  }
  else{
  Swal.fire({
  title:"Cigna Health Management",
  text:"You must enter user id and password",
  icon:"warning",
  })

}
}

const navigate=useNavigate()
const eventHandler=()=>{navigate('/todo')}

const ScreenPayload = {};
const ReadEmployeeSrceenGrpApi_Payload_Data = (empId) =>{
  window.console.log(empId);
  ScreenPayload["datEmpId"]=empId;
}



const ReadEmployeeSrceenGrpApiCall = async(url) =>{
  try{
    ReadEmployeeSrceenGrpApi_Payload_Data();
    const result = await axios.post(url,ScreenPayload);
    SetEmpScreenData(result);
    console.log(result);  
  }catch (error){
    console.log(error);
  }
}

useEffect(() =>{
  ReadEmployeeApiCall(readEmployeeApi);
  return ()=>{};
  },[]);

  useEffect(() =>{
    ReadEmployeeSrceenGrpApiCall(readEmployeeScreenApi);
    return ()=>{};
    },[]);
  

const ReadEmployeeApiCall = async(url) =>{
  try{
    ReadEmployee_Payload_Data();
    const resultEmployee = await axios.post(url,Payload);
    SetReadEmployee(resultEmployee);
    console.log(ReadEmployee);
    ReadEmployeeSrceenGrpApi_Payload_Data(ReadEmployee.data.datEmpId); 
    console.log(ReadEmployee.data.datEmpId);
  }catch (error){
    console.log(error);
  }
}


const checkCapsLock  = (event) => {
  if (event.getModifierState('CapsLock')) {
    setIsCapsLockOn(true);
  } else {
    setIsCapsLockOn(false);
  }
};
  
    return(
      <div className='login-top'>
        <div className="health-Login">
        <div>Group Health ICMS Login</div>
        </div>
        <div className='color-code'>
        <div className="hc-login">
        <h2 className='hc-code'>HC ICMS</h2>
        </div>
        <div className='description'>
        <p>Group Health ICMS <br></br>Cigna Health Management Inc.<br></br>Copyright@2023
        </p>
        </div>
        <fieldset>
        <legend className="mts-login">MTS Login Information</legend>
         <div className="form-data">
       <div className="form-name">
       <label>Name:</label>
       <input
         type="name"
         className="form-control-name"
         value={UserName}
         onChange={e => SetUserName(e.target.value.toUpperCase())}
       />
     </div>
     <div className="form-domain">
       <label className="domain-style">Domain:</label>
       <input
         type="domain"
         className="form-control-domain"
         value={Domain}
         onChange={e => SetDomain(e.target.value.toUpperCase())}
       />
       </div>
       <div className="form-password">
       <label>Password:</label>
       <input
         type="password"
         className="form-control-password"
         value={Password}
         onChange={e => SetPassword(e.target.value.toUpperCase())}
         onKeyUp={checkCapsLock}
       />
     </div>
     <div className="form-application">
       <label>Application:</label>
       <select className="application-names" id="application-names">
    <option value="hcdev">HC ICMS Dev</option>
  <option value="hcprod">HC ICMS Prod</option>
  <option value="hcqa">Hc ICMS QA</option>
  <option value="hctrain">HC ICMS TRAIN</option>
</select>
     </div>
     <div className="form-mts">
       <label className='mts'>MTS:</label>
       <select className="mts-names" id="mts-names">
    <option value="rigatoni">HC Development Server</option>
  <option value="dave">Hc Prod Server</option>
  <option value="pumpernickel">HC Qa Server</option>
</select>
       </div>
       </div>
       </fieldset>
       <div className='button'>
         <div className='ok-button'> 
         <button onClick={Validation}>OK</button>
         </div>
         <div className='cancel-button'>
         <button>CANCEL</button>
         </div>   
     </div> 
     </div>
       </div> 
    )
}




export default Login