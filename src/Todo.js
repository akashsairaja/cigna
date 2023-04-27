import React from 'react';
import './Todo.css'


const Todo = ({Tododata}) =>{
    return(
        <div className='todo-main'>
        <div className='todo-name'>
        <div>Managing Case of : Undavalli,Soumya</div>
        <div className='find-button'>
            <button>Find</button>
            </div>
        </div>
        <div className='todo-table'>
<table>
  <tr>
    <th>Prov state</th>
    <th>Prov state</th>
    <th>Provider</th>
    <th>CaseId</th>
    <th>Patient</th>
    <th>Pt State</th>
    <th>DOB</th>
    <th>Activity Descript</th>
    <th>Note</th>
    <th>Admit Date</th>
    <th>Tries</th>
    <th>Priority</th>
    <th>Case Type</th>
    <th>Contact Name</th>
    <th>Contact Day Phone</th>
    <th>Contact Zone</th>
    <th>Diary Date Nurse TZ </th>
    <th>Event Id</th>
    <th>Prov Clin Fax </th>
    <th>Prov Disc Fax</th>
  </tr>
  <tr>
    <td>Anom</td>
    <td>19</td>
    <td>Male</td>
  </tr>
</table>
</div>

</div>

    )
}

export default Todo