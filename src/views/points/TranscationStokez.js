import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import moment from "moment"
import { Link } from 'react-router-dom'


function TransactionReport() {
  let apiBaseURL = "http://15.207.171.247:5000";
  const [data, setData] = useState([]); 
  const columns = [
    { title: "Serial No", field:"id" },
    { title: "UserName", field: "stokezname" },
    { title: "User ID", field: "username" },
    { title: "Balance", field: "point",filtering:true },
    {
      title: "Transaction Date",
      render: rowData => rowData.create_at?moment(rowData.create_at).format('YYYY-M-D h:mm:ss'):'Not login yet',
      filtering:true,
    }, 
  ];
  //get Agents
  const getReports = async () => {
    await axios({
      method: "GET",
      url: `${apiBaseURL}/api/users/pointsStokezHistory`,
      // data: user,
      // headers: {"Authorization" : `Bearer ${authToken}`}
    })
      .then(function (response) {
        if (response.data.status === 200) {
          setData(response.data.data);
        } else {
         
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getReports();
  }, []);

  return ( 
      <>
      <div className='borders'>
      <ul className="nav nav-tabs">
        
     <li className="nav-item">
           
           <Link className="nav-link " to="/viewpointStokez"> Stokez </Link>
</li>
        <li className="nav-item ml-3">
                       <Link className="nav-link" to="/viewpointAgent" >  Agent </Link>
        </li>
        <li className="nav-item ml-3">
         
           <Link className="nav-link " to="/viewpointPlayer"> Player </Link>
        </li>
       </ul>  
</div>

      
      <div className="card card-outline card-info">
      <MaterialTable
        title=" Stokez Points Transactions Report"
        data={data}
        columns={columns} 
      />
    </div> 
      </>
  );
}
export default TransactionReport;
