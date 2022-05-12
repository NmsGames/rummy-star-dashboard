import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import '../../style/Contact.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
 
import axios from "axios";
import { apiBaseURL } from "../../config";
// import { authToken } from "../../authToken";
 
function PlayerHistory() {
    const [data, setData] = useState([]); 
    //get Agents
    const gameHistory = async () => {
      await axios
        .get(`${apiBaseURL}/api/users/getPlayerHistory`)
        .then(function (response) {
          if (response.data.status === 200) {
            console.log(response.data, "data");
            setData(response.data.data);
          }
        })
        .catch(function (error) {
          // history.push("/login")
        });
    };
   
 
    //get Agents
   
    const columns = [
            { title: "Serial No", field:"id"},
      { title: "Username",field:"username"  },
      { title: "Users ID", field: "user_id" },
      { title: "Game Name", field: "game_name" },
      { title: "Total Bet",field:"totalbet",},
      { title: "Total Won",field:"totalwon",},
      { title: "Ntp",field:"ntp"},
      { title: "Ntp Percent", field: "percent" },
      // { title: "Status", field: "status" }
    ];
  
    useEffect(() => {
      gameHistory();
      // fetch("/api/transaction")
      //     .then((response) => response.json())
      //     .then(json => setData(json))
    }, []);
    return (
       <>
        <div className="card card-outline card-info">
      <MaterialTable
        title="Players History"
        data={data}
        columns={columns}
        options={{ actionsColumnIndex: -1 }} 
      />
    </div>
       </>
    )
}
export default PlayerHistory
