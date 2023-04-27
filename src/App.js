import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Modal from './Modal';
import DataTable from './Datatable';
import {Primary,Other_Medical,Mental_Health,Other,State} from './LocalData'
import Login from './Login';

const App = () => {
  const DefaultAPI = "";
  const ProviderSearchAPI = "http://localhost:8087/api/searchProvider";

//useState for fields to enable and disable.
const [GroupToggle, SetGroupToggle] = useState(false);
const [TaxIDToggle, SetTaxIDToggle] = useState(false);
const [LnameToggle, SetLnameToggle] = useState(false);
const [SearchForToggle, SetSearchForToggle] = useState(false);
const [FnameToggle, SetFnameToggle] = useState(true);

//useState for modal
const [ErrorMessage, SetErrorMessage] = useState("");
const [OpenModal, SetOpenModal] = useState(false);


//useState to read data from textfields.
  const [GroupName, SetGroupName] = useState("");
  const [Fname, SetFname] = useState("");
  const [Lname, SetLname] = useState("");
  const [TaxID, SetTaxID] = useState("");
  const [PrimaryCare, SetPrimaryCare] = useState("");
  const [OtherMedical, SetOtherMedical] = useState("");
  const [MentalHealth, SetMentalHealth] = useState("");
  const [Others, SetOthers] = useState("");
  const [SearchFor, SetSearchFor] = useState("");
  const [LocationCity, SetLocationCity] = useState("");
  const [LocationState, SetLocationState] = useState("WV");

  const [TableData, SetTableData] = useState([]);
  

const Payload = {};

var ServiceLine = null;

var log = {"orgName" : GroupName,
"firstName" : Fname,
"lastName" : Lname,
"TaxID" : TaxID,
"PrimaryCare" : PrimaryCare,
"OtherMedical" : OtherMedical,
"MentalHealth" : MentalHealth,
"Others" : Others,
"srvcLines" : ServiceLine,
"city" : LocationCity,
"states" : LocationState};

const errorString ="Invalid Search Criteria.  Valid searches are:\n" +
"\t\t\t\t\tRadial Search: Specialty + Search Radius + Zip\"\n" +
"\t\t\t\t\tRadial Search: Specialty + Search Radius + City + State\"\n" +
"\t\t\t\t\tName + City + State (specialty optional)\"\n" +
"\t\t\t\t\tName + State (specialty optional)\"\n" +
"\t\t\t\t\tProvider Tax Id + State)\n" +
"\t\t\t\t\tProvider Tax Id + City + State\"\n" +
"\t\t\t\t\tSpecialty + State (slow)\"\n" +
"\t\t\t\t\tSpecialty + City + State\"\n" +
"\t\t\t\t\tCity + State (slow)"



//useEffect
useEffect(() =>{
LoadDefaultData(DefaultAPI);
},[]);

useEffect(() =>{
},[]);

const LoadDefaultData = async(url) =>{
try{
  //const result = await axios.post(url,ProviderPostData);
//result.data;
}catch (error){
  console.log(error);
}
}


//Generates Body of the response all fields that doesnot have empty values are added to body
const Backend_Payload_Data = () =>{

    if (GroupName !==''){
      Payload["orgName"] = GroupName;  //adding new key values to empty object Payload
    }
    if(Lname !==''){
      Payload["lastName"] = Lname;
    }
    if(Fname !==''){
      Payload["firstName"] = Fname;
    }
    if(TaxID !==''){
      Payload["provSrvcUnitTaxId"] = TaxID;
    }
    if(ServiceLine !== [""]){
      Payload["srvcLines"] = ServiceLine;
    }
    if(LocationState !==''){
      Payload["states"] = LocationState;
    }


}


//Making backend call using this function and axios library is used
const BackendDataCall = async(url) =>{
  try{
    
    Backend_Payload_Data();
    const result = await axios.post(url,Payload);
    console.log(result);
    SetTableData(result.data);  //Setting values to tabledata hook which is later sent to datatable component
  
  }catch (error){
    console.log(error);
  }
  finally{
    GlobalClear();  //weather search happens or not all fields are cleared 
  }
  }
  

// function to check if correct cobination of fields is used to search 
 const ValidateCriteria = () =>{
  if(GroupName.length >0 && LocationState.length>0){
    return true;
  }
  else if(Lname.length >0 && LocationState.length>0){
    return true;
  }
  else if((PrimaryCare.length>0 || OtherMedical.length>0 || MentalHealth.length>0 || Others.length>0) && LocationState.length>0){
     return true;
  }
  else if(TaxID.length>0 && LocationState.length>0){
     return true;
  }
   else{
     return false;
  }
}

// main function when find button is pressed all validations happens here and backend is called
const Find_Provider_Data = () => 
{
  var csType = '';
  var iNum = 0;
  var ICDisplayErrorBoxAndTest = 'W01565'; 
  const CheckValid = ValidateCriteria();
  ServiceLine = [PrimaryCare , OtherMedical , MentalHealth , Others];  //creating service line array to go in payload
  if(CheckValid)
  {
    console.log(CheckValid);   //if combinations of feilds are correct we are checking for length logic
    if (Lname.length > 0 && Lname.length < 2)
      {
        csType = 'Provider';
        iNum = 2;
      }
     else if(GroupName.length > 0 && GroupName.length < 3)
       {
         csType = 'Facility';
          iNum = 3;
        }
     else if(TaxID.length > 0 && TaxID.length < 3)
       {
         csType = 'Provider Tax Id';
         iNum = 4;
        }
      if(iNum > 0 && ICDisplayErrorBoxAndTest) //if the length of some fields are less this error pops
       {
          console.log("field error");
          //setting usestate hooks that are send to Modal component as props
          SetErrorMessage( "GrpHlth Warning "  + ICDisplayErrorBoxAndTest + " Name for " + csType + " Search must have " + iNum + " characters"); 
          SetOpenModal(true); 
          console.log(ErrorMessage);
          console.log(log);
        }
      else
      {
        console.log("calling backend " );
        console.log(log);
        BackendDataCall(ProviderSearchAPI); //calling backend function
      }
  }
  else
  {
    console.log("invalid search error");  //if the the correct combination of fields are not given this error pops
    console.log(log);
    SetErrorMessage(errorString);
    SetOpenModal(true);
    console.log(ErrorMessage);
  }
}



// functions to enable and disable fields based on criterias
const LnameSelect = (e) => {
  SetLname(e.target.value.toUpperCase());
  if(e.target.value.length >= 1){  //if lname field has any value disable all other fields except fname
    SetFnameToggle(false);
    SetGroupToggle(true);
    SetTaxIDToggle(true);
    SetSearchForToggle(true);
  }
  else
  {
    SetFnameToggle(!FnameToggle);
    SetGroupToggle(!GroupToggle);
    SetTaxIDToggle(!TaxIDToggle);
    SetSearchForToggle(!SearchForToggle);
  }
}

const GroupSelect = (e) => {
  SetGroupName(e.target.value.toUpperCase());
  if(e.target.value.length >= 1){
    SetLnameToggle(true);
    SetTaxIDToggle(true);
    SetSearchForToggle(true);
  }
  else
  {
    SetLnameToggle(!LnameToggle);
    SetTaxIDToggle(!TaxIDToggle);
    SetSearchForToggle(!SearchForToggle);
  }
}

const TaxIDSelect = (e) => {
  SetTaxID(e.target.value.toUpperCase());
  if(e.target.value.length >= 1){
    SetLnameToggle(true);
    SetGroupToggle(true);
  }
  else
  {
    SetLnameToggle(!LnameToggle);
    SetGroupToggle(!GroupToggle);
  }
}

//clears all fields and table and sets all fields to initial position
const GlobalAndTable_clear = () =>{
  GlobalClear();
  SetTableData([]);
}

//clear all fields and set them to initial position
const GlobalClear = () =>{
  SetLname("");
  SetGroupName("");
  SetFname("");
  SetTaxID("");
  SetLocationState("");
  SetLocationCity("");
  SetPrimaryCare("");
  SetOtherMedical("");
  SetMentalHealth("");
  SetOthers("");
  SetSearchFor("");
  SetGroupToggle(false);
  SetTaxIDToggle(false);
  SetLnameToggle(false);
  SetSearchForToggle(false);
  SetFnameToggle(true);
}

//clears all fields in address box
const ClearAddress = () =>{
  SetLocationState("");
  SetLocationCity("");
}


return (
    //main div container
    <div className='wrapper'>
      <Modal Visible={OpenModal} error={ErrorMessage} onClose={() => SetOpenModal(false)}></Modal>
      <div className='Top_Component'>
     <div className='All_Search'>
     <div className='Search_by_name'>
     <form className='Search_by_name_form'>
       <fieldset className='Search_by_name_fieldset'><legend>Search by Name</legend>
       <label>Facility/Group:</label>
       <input type='text' className='Seach_facility' id='Seach_facility' value={GroupName} disabled={GroupToggle} onChange={GroupSelect} autoFocus></input><br></br>
       <label>Soundex search(find similar)</label>
       <input type='checkbox' disabled={GroupToggle}></input><br></br>
       <label>Last Name</label>
       <input type='text' className='Seach_Lname' id='Seach_Lname' value={Lname} disabled={LnameToggle} onChange={LnameSelect}></input><br></br>
       <label>Soundex search</label>
       <input type='checkbox' disabled={LnameToggle}></input><br></br>
	   <label>First Name</label>
       <input type='text' className='Seach_Fname' id='Seach_Fname' value={Fname} disabled={FnameToggle} onChange={e => SetFname(e.target.value.toUpperCase())}></input><br></br>
       <label>Provider Tax ID</label>
       <input type='text' className='Seach_TaxID' id='Seach_TaxID' value={TaxID} disabled={TaxIDToggle} onChange={TaxIDSelect}></input><br></br>
       </fieldset>
     </form>
     </div>
	 
	 <div className='Search_for'>
     <fieldset className='Search_for_fieldset'><legend>Search for</legend>
       <input type='radio' className='search_for_all' id='All' name='search_for_' value='All' onChange={e => SetSearchFor(e.target.value)} disabled={SearchForToggle}></input>
       <label  >All</label>
       <input type='radio' className='search_for_Practioners' id='Practioners' name='search_for_' value='Practioners' onChange={e => SetSearchFor(e.target.value)} disabled={SearchForToggle}></input>
       <label >Practioners</label><br></br>
       <input type='radio' className='search_for_non-Practioners' id='Non-Practioners' name='search_for_' value='Non-Practioners' onChange={e => SetSearchFor(e.target.value)} disabled={SearchForToggle}></input>
       <label >Non-Practioners</label>
       </fieldset>
     </div>
     </div>
     
     
	 <div className='Service_line'>
     <fieldset className='Service_line_fieldset'><legend>Service Line</legend>
     <label>Primary Care Specialty</label>
       <select className='Service_line_Primary_Care' value={PrimaryCare} onChange={e => SetPrimaryCare(e.target.value)}>
         <option>{null}</option>{
           Primary.map((result) =>(
             <option value={result.Id}>{result.Value}</option>))}
         </select><br></br>
         <label>Other Medical Specialty</label>
       <select className='Service_line_Other_medical' value={OtherMedical} onChange={e => SetOtherMedical(e.target.value)}>
         <option>{null}</option>{
           Other_Medical.map((result) =>(
             <option value={result.Id}>{result.Value}</option>))}
         </select ><br></br>
         <label>Mental Health Service</label>
       <select className='Service_line_Mental_Health' value={MentalHealth} onChange={e => SetMentalHealth(e.target.value)}>
       <option>{null}</option>{
         Mental_Health.map((result) =>(
           <option value={result.Id}>{result.Value}</option>))}
         </select><br></br>
         <label>Other</label>
       <select className='Service_line_owner' value={Others} onChange={e => SetOthers(e.target.value)}>
       <option>{null}</option>{
           Other.map((result) =>(
             <option value={result.Id}>{result.Value}</option>))}
         </select><br></br>
         <label>Service Lines Selected</label><br></br>
         <div className='del_btn'>
         <textarea rows='5' clos='10' className='Service_line_selected'></textarea>
         <button className='Service_line_Delete'>Delete</button>
         </div>
       </fieldset>
     </div>
	 
	 <div className='Location'>
     <fieldset className='Location_fieldset'><legend>Location</legend>
     <label>Search Radius (in miles)</label>
     <input type='text' className='Location_Radius' id='Location_Radius' value='0' disabled={false}></input><br></br>
     <label>Street1</label>
     <input type='text' className='Location_Street1' id='Location_Street1' disabled={true}></input><br></br>
     <label>Street2</label>
     <input type='text' className='Location_Street2' id='Location_Street2' disabled={true}></input><br></br>
     <label>Zip Code</label>
     <input type='text' className='Location_ZipCode' id='Location_ZipCode' disabled={true}></input><br></br>
     <label>City</label>
     <input type='text' className='Location_City' id='Location_City' value={LocationCity} onChange={e => SetLocationCity(e.target.value.toUpperCase())} disabled={false}></input><br></br>
     <label>County</label>
     <input type='text' className='Location_County' id='Location_County' disabled={true}></input><br></br>
	 <label>State</label>
     <select className='Location_State' value={LocationState} onChange={e => SetLocationState(e.target.value)}>
         <option>{null}</option>{
           State.map((result) =>(
             <option value={result.Id}>{result.Value}</option>))}
         </select ><br></br>
         <button className='Location_use_Member'>Use Member's Address</button>
         <button className='LocationClear' onClick={ClearAddress}>Clear</button>
     </fieldset>
     </div>
     </div>


      <div className='Find_clr_btn'>
      <label>Rows to return</label>
       <select className='Rows_to_return'>
         <option>100</option>
         <option>250</option>
         <option>500</option>
         </select>  
     <button className='Btn_Find' onClick={Find_Provider_Data}>Find</button>
     <button className='Btn_Clear' onClick={GlobalAndTable_clear}>Clear</button>
     
      </div>
      <DataTable Tabledata={TableData}></DataTable>
     
     
    </div>

   );
  
 }
 export default App;