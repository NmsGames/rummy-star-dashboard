import React, { useState, useEffect } from "react";
import "../../style/Contact.css";
import axios from "axios";
// import { apiBaseURL } from "../../config";
import MaterialTable from 'material-table'
import { Link } from 'react-router-dom'
// import { authToken } from "../../authToken";
function CardGame() {
  let apiBaseURL  = "http://localhost:5000"
 
  const [data, setData] = useState([])

  const columns = [
    { title: "Serial No", render: rowData => rowData.tableData.id + 1 },
      { title: 'Agent Name', field: "distributor_id" },
      { title: "Player Name", field: "player_id" },
      { title: "Bet Amount", field: "txn_amount" }, 
      { title: "Status", field: "status" }
  ]

  useEffect(() => {
    axios
    .get(`${apiBaseURL}/api/users/Game16CardsHistory`)
    .then(function (response) {
      if (response.data.status === 200) {
        console.log(response.data, "data");
        setData(response.data.data);
      }
    })
    .catch(function (error) {
      // history.push("/login")
    });
  }, [])

    const [countDown, setCountDown] = React.useState(0);
    const [runTimer, setRunTimer] = React.useState(false);
  
    React.useEffect(() => {
      let timerId;
  
      if (runTimer) {
        setCountDown(60 * 5);
        timerId = setInterval(() => {
          setCountDown((countDown) => countDown - 1);
        }, 1000);
      } else {
        clearInterval(timerId);
      }
  
      return () => clearInterval(timerId);
    }, [runTimer]);
  
    React.useEffect(() => {
      if (countDown < 0 && runTimer) {
        console.log("expired");
        setRunTimer(false);
        setCountDown(0);
      }
    }, [countDown, runTimer]);
  
    const togglerTimer = () => setRunTimer((t) => !t);
  
    const seconds = String(countDown % 60).padStart(2, 0);
    const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);
  return ( 
      <> 
        <div className="col-md-12"> 
          <div className="card card-outline card-info">
          <div className='borders'>
                <ul className="nav nav-tabs">
                  
               <li className="nav-item">
                     <span className="ml-3 badge bg-primary">112 </span> <span className="ml-3 badge bg-warning">00:59 </span>
                     <Link className="nav-link " to="/ShowCurrentBet"> Double Chance </Link>
  </li>
                  <li className="nav-item ml-3">
                     <span className="badge bg-primary">112 </span> <span className="ml-3 badge bg-warning">00:59 </span>
                     <Link className="nav-link" to="/JeetoJokerGame" >  Jeeto joker </Link>
                  </li>
                  <li className="nav-item ml-3">
                    <span className="badge bg-primary">112 </span> <span className=" ml-2 badge bg-warning">00:59 </span>
                     <Link className="nav-link " to="/16CardsGame"> 16 Cards  </Link>
                  </li>
                  <li className="nav-item ml-3">
                      <span className="badge bg-primary">112 </span> <span className="ml-3 badge bg-warning">00:59 </span>
                     <Link className="nav-link "to="/SpinWinGame" >Spin Win</Link>
                  </li>
              </ul>  
        </div>
            <div className="card-body">
              <div className="row">
                {/* First GAme */}
                <div className="col-md-3">
                  <div className="card card-outline card-warning">
                    <div className="d-flex">
                      <div className="p-2">
                        <h3 className="card-title"> 16 Card Game </h3>
                      </div>
                      <div className="ml-auto p-2">
                        <span className="p-2 badge bg-primary"> </span>
                      </div>
                    </div>
                   { /*number form */}
                      <form className="shadow-sm p-3">


                      <div className="row">
                        <div className="col-md-6"> Win</div>
                        </div>


                        <div className="row">
                          

                          <div className="col-md-2"><div className="form-check">

                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker1"
                            value="0"
                          />
                          <label className="form-check-label" for="jeetoJoker1">
                            0
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker2"
                            value="1"
                          />
                          <label className="form-check-label" for="jeetoJoker2">
                            1
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker3"
                            value="2"
                          />
                          <label className="form-check-label" for="jeetoJoker3">
                            2
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker4"
                            value="3"
                          />
                          <label className="form-check-label" for="jeetoJoker4">
                            3
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker5"
                            value="4"
                          />
                          <label className="form-check-label" for="jeetoJoker5">
                            4
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker6"
                            value="5"
                          />
                          <label className="form-check-label" for="jeetoJoker6">
                            5
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker7"
                            value="6"
                          />
                          <label className="form-check-label" for="jeetoJoker7">
                            6
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker8"
                            value="7"
                          />
                          <label className="form-check-label" for="jeetoJoker8">
                            7
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker9"
                            value="8"
                          />
                          <label className="form-check-label" for="jeetoJoker9">
                            8
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker10"
                            value="9"
                          />
                          <label className="form-check-label" for="jeetoJoker10">
                            9
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker10"
                            value="10"
                          />
                          <label className="form-check-label" for="jeetoJoker10">
                            10
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker10"
                            value="11"
                          />
                          <label className="form-check-label" for="jeetoJoker10">
                            11
                          </label>
                        </div>
                        

                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker10"
                            value="12"
                          />
                          <label className="form-check-label" for="jeetoJoker10">
                            12
                          </label>
                        </div>
                        
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker10"
                            value="13"
                          />
                          <label className="form-check-label" for="jeetoJoker10">
                            13
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker10"
                            value="14"
                          />
                          <label className="form-check-label" for="jeetoJoker10">
                            14
                          </label>
                        </div>
                        
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker10"
                            value="15"
                          />
                          <label className="form-check-label" for="jeetoJoker10">
                            15
                          </label>
                        </div>
                        










                            </div>


                          
                    
                              

                              
      

                        
                          
               
                          </div>
                      </form>
                    
                  </div>
                </div>
                {/* First End */}
                
                <div className="col-md-9">
               
                                    <MaterialTable
                                        title="Current Betting User List"
                                        data={data}
                                        columns={columns}
                                    />
                                </div>
                
              </div>
            </div>
          </div>
        </div>
        </>
  );
}
export default CardGame;
