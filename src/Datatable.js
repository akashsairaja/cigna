import React from 'react';
import './Datatable.css';


const Datatable = ({Tabledata}) =>{
    return (
        <div className='OutputDisplay'>
        <div className="TableContent">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th className='fix'>Provider Name</th>
                <th>Group</th>
                <th>Network</th>
                <th>Provider #</th>
                <th>NPI</th>
                <th>Inpat/Outpat</th>
                <th>PCP</th>
                <th>Qualification</th>
                <th>Main Specialty</th>
				<th>Type</th>
                <th>Distance</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Clinical fax</th>
                <th>Discharge Fax</th>
                <th>Tax ID</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
            {/* <tr> */}
                {/* <td className='fix'>ANDREW</td>
                <td>Concent</td>
                <td>Network</td>
                <td>VG39R5WA</td>
                <td>NPI</td>
                <td>Inpat/Outpat</td>
                <td>PCP</td>
                <td>Medical Doctor</td>
				<td>Physical Therapy</td>
                <td>Practioner</td>
                <td>0</td>
                <td>PO BOX 9005 TX</td>
                <td>(032)-344-2344</td>
                <td>Clinical fax</td>
                <td>Discharge Fax</td>
                <td>234245</td>
                <td className='fix'>Male</td> */}
              {/* </tr> */}
              {Tabledata.map((Output) =>(
                <tr>
                  <td>{Output.provName}</td>
                  <td>{null}</td>
                  <td>{Output.networks}</td>
                  <td>{Output.providerId}</td>
                  <td>{Output.provNpi}</td>
                  <td>{Output.inPatient}</td>
                  <td>{Output.pcpFlag}</td>
                  <td>{Output.qualification}</td>
				  <td>{Output.speciality}</td>
                  <td>{Output.provType}</td>
                  <td>{Output.maxDistance}</td>
                  <td>{Output.street1}</td>
                  <td>{Output.phone}</td>
                  <td>{Output.clinicalFax}</td>
                  <td>{Output.dischargeFax}</td>
                  <td>{Output.provSrvcUnitTaxId}</td>
                  <td>{Output.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
       </div>
     </div>
       
)
}

 export default Datatable
 
// import React from 'react';
// import { MDBDataTable } from 'mdbreact';

// const Datatable = () => {
//   const data = {
//     columns: [
//       {
//         label: 'Name',
//         field: 'name',
//         sort: 'asc',
//         width: 150
//       },
//       {
//         label: 'Surname',
//         field: 'surname',
//         sort: 'asc',
//         width: 150
//       },
//       {
//         label: 'Position',
//         field: 'position',
//         sort: 'asc',
//         width: 270
//       },
//       {
//         label: 'Office',
//         field: 'office',
//         sort: 'asc',
//         width: 200
//       },
//       {
//         label: 'Age',
//         field: 'age',
//         sort: 'asc',
//         width: 100
//       },
//       {
//         label: 'Start date',
//         field: 'date',
//         sort: 'asc',
//         width: 150
//       },
//       {
//         label: 'Salary',
//         field: 'salary',
//         sort: 'asc',
//         width: 100
//       },
//       {
//         label: 'Extn.',
//         field: 'extn',
//         sort: 'asc',
//         width: 100
//       },
//       {
//         label: "E-mail",
//         field: 'email',
//         sort: 'asc',
//         width: 200
//       }
//     ],
//     rows: [
//       {
//         name: 'Tiger',
//         surname: 'Nixon',
//         position: 'System Architect',
//         office: 'Edinburgh',
//         age: '61',
//         date: '2011/04/25',
//         salary: '$320,800',
//         extn: 5421,
//         email: 't.nixon@datatables.net'
//       },
//       {
//         name: 'Garrett',
//         surname: 'Winters',
//         position: 'Accountant',
//         office: 'Tokyo',
//         age: '63',
//         date: '2011/07/25',
//         salary: '$170,750',
//         extn: 8422,
//         email: 'q.winters@datatables.net'
//       },
//       {
//         name: 'Ashton',
//         surname: 'Cox',
//         position: 'Junior Technical Author',
//         office: 'San Francisco',
//         age: '66',
//         date: '2009/01/12',
//         salary: '$86,000',
//         extn: 1562,
//         email: 'a.cox@datatables.net'
//       },
//       {
//         name: 'Cedric',
//         surname: 'Kelly',
//         position: 'Senior Javascript Developer',
//         office: 'Edinburgh',
//         age: '22',
//         date: '2012/03/29',
//         salary: '$433,060',
//         extn: 6224,
//         email: 'c.kelly@datatables.net'
//       },
//       {
//         name: 'Airi',
//         surname: 'Satou',
//         position: 'Accountant',
//         office: 'Tokyo',
//         age: '33',
//         date: '2008/11/28',
//         salary: '$162,700',
//         extn: 5407,
//         email: 'a.satou@datatables.net'
//       },
//       {
//         name: 'Brielle',
//         surname: 'Williamson',
//         position: 'Integration Specialist',
//         office: 'New York',
//         age: '61',
//         date: '2012/12/02',
//         salary: '$372,000',
//         extn: 4804,
//         email: 'b.williamson@datatables.net'
//       },
//     ]
//   };

//   return (
//     <MDBDataTable
//       scrollX
//       scrollY
//       maxHeight="300px"
//       striped
//       bordered
//       data={data}
//     />
//   );
// }

// export default Datatable;	