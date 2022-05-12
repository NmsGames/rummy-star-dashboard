import React, { useState, useEffect } from "react";
import "../../style/Contact.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom"


function AddNewPlayer() {
  let apiBaseURL = "http://localhost:5000";
  const sessionData = JSON.parse(sessionStorage.getItem("token"));
  const [values, setValues] = useState({
    parent: "",
    password: "",
    username: "",
    playername:"",
    
    
  });

  const [destriData, setDestriData] = useState([]);
  const [PlayerData, setPlayerData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password,
      parent,
      username,
      playername,
 } = values;
    const userdata = {
            parent:parent,username:username,name:playername, password:password,
    
    };
    await axios({
      method: "post",
      url: `${apiBaseURL}/api/users/createPlayer`,
      data: userdata,
      headers: { Authorization: `Bearer ${sessionData.token}` },
    })
      .then(function (response) {
        if (response.data.status === 200) {
          setValues({
            parent: "",
            password: "",
            username: "",
            playername:"",
            
            
          });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title:`${response.data.message} !`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          if (response.data.status == 401) {
            sessionStorage.removeItem("token");
            window.location.reload();
          } else {
            Swal.fire({
              position: "top-end",
              icon: "warning",
              title: "Oops...",
              text:`${response.data.message} !`,
              showConfirmButton: false,
              timer: 1700,
            });
          }
        }
      })
      .catch(function (error) {
        Swal.fire(`Something went wrong!`, "error");
      });
  };

  //get Agents
  const getAgents = async () => {
    await axios
      .get(`${apiBaseURL}/api/users/AgentsData`)
      .then(function (response) {
        if (response.data.status === 200) { 
          setDestriData(response.data.data); 
        }
      })
      .catch(function (error) {
        Swal.fire(`Something went wrong!`, "error");
      });
  };
  const getPlayer = async () => {
    await axios
      .get(`${apiBaseURL}/api/users/getPlayer`)
      .then(function (response) {
        if (response.data.status === 200) { 
          setPlayerData(response.data.data); 
        }
      })
      .catch(function (error) {
        Swal.fire(`Something went wrong!`, "error");
      });
  };

  //

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  useEffect(() => {
    getAgents();
    getPlayer();
  }, []);

  return (
      <div className="row">
        <div className="col-md-8">
          <div className="card card-outline card-info">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fa-solid fa-user-tie fa-2x" /> Add New Player
              </h3>
              <div class="col px-md-5">  
                    <h3 className="card-title "> 
                    <Link to="/PlayersList" className="nav-link"> 
                        View Player - {PlayerData.length} 
                        </Link></h3>
                 </div>

            </div>
            <div className="card-body">
              <form method="post" onSubmit={handleSubmit}>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    Select Agent
                  </label>
                  <div className="col-sm-9">
                    <select
                      name="select _agent"
                      value={values.parent}
                      onChange={handleChange("parent")}
                      className="form-control"
                      placeholder="Username*"
                    >
                      <option value="">Select Agent</option>
                      {destriData.map((item, index) => {
                        return (
                          <option value={item.distributor_id} key={index}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    Player Name
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      required
                      className="inputfield form-control"
                      name="playername"
                      value={values.playername}
                      onChange={handleChange("playername")}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                     User Name
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      required
                      className="inputfield form-control"
                      name="username"
                      value={values.username}
                      onChange={handleChange("username")}
                    />
                  </div>
                </div>
           
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-3 col-form-label"
                  >
                    Enter Password
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange("password")}
                      className="inputfield form-control"
                      placeholder="***********"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-3 "></div>
                  <div className="col-sm-9">
                    <div className="form-group row">
                                            <div className="col-sm-3 ">
                        <button
                          type="onSubmit"
                          className="btn-success form-control"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
export default AddNewPlayer;
