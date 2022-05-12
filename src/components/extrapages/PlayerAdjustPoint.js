import React, { useState, useEffect } from "react";
// import MaterialTable from 'material-table'
import "../../style/Contact.css";
import axios from "axios";
// import { apiBaseURL } from "../../config";
let apiBaseURL  = "http://15.207.171.247:5000"
function PlayerAdjustPoint() {
  const [values, setValues] = useState({
    distributor_id: "",
    password: "",
    user_id: "",
    username: "",
  });
  const [destriData, setDestriData] = useState([]);
  const [userData, setUserData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { distributor_id, username, password, user_id } = values;
    const user = { password, distributor_id, username, user_id };
    await axios
      .post(`${apiBaseURL}/api/users/createUser`, user)
      .then(function (response) {
        if (response.data.status === 200) {
          console.log("success", "req");
        }
      })
      .catch(function (error) {
        // history.push("/login")
      });
  };

  //get Agents
  const getAgents = async () => {
    await axios
      .get(`${apiBaseURL}/api/users/agents`)
      .then(function (response) {
        if (response.data.status === 200) {
          console.log(response.data, "data");
          setDestriData(response.data.data);
          console.log(destriData);
        }
      })
      .catch(function (error) {
        // history.push("/login")
      });
  };

  //get Players
  const getPlayers = async () => {
    await axios
      .get(`${apiBaseURL}/api/users/`)
      .then(function (response) {
        if (response.data.status === 200) {
          console.log(response.data, "data");
          setUserData(response.data.data);
          console.log(destriData);
        }
      })
      .catch(function (error) {
        // history.push("/login")
      });
  };
  //
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  useEffect(() => {
    getAgents();
    getPlayers();
  }, []);

  return (
    <div className="content-wrapper">
      <div className="row ml-2 mr-2">
        <div className="col-md-12">
          <div className="card card-outline card-info">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="card card-outline card-warning">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="fa-solid fa-arrow-right-arrow-left fa-1x" />{" "}
                        Players Adjust Points
                      </h3>
                    </div>
                    <div className="card-body">
                      <form method="post" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="username">Username *</label>
                              <select
                                name="user_id"
                                value={values.user_id}
                                onChange={handleChange("user_id")}
                                className="inputfield form-control"
                                placeholder="Username*"
                              >
                                <option value="">Select User</option>
                                {userData.map((item, index) => {
                                  return (
                                    <option value={item.user_id} key={index}>
                                      {item.username}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="points">
                                Amount To Transfer *
                              </label>
                              <input
                                type="tel"
                                value={values.password}
                                onChange={handleChange("points")}
                                name="points"
                                className="inputfield form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="username">Balance *</label>
                              <input
                                type="text"
                                disabled
                                name="balance"
                                value={values.balance}
                                onChange={handleChange("balance")}
                                className="inputfield form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label htmlFor="username">&nbsp;</label>
                              <button className="inputfield btn-warning form-control">
                                {" "}
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-outline card-warning">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="fa-solid fa-arrow-right-arrow-left fa-1x" />{" "}
                        Stockez/Agent Adjust Points
                      </h3>
                    </div>
                    <div className="card-body">
                      <form method="post" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="username">Username *</label>
                              <select
                                name="distributor_id"
                                value={values.distributor_id}
                                onChange={handleChange("distributor_id")}
                                className="inputfield form-control"
                                placeholder="Username*"
                              >
                                <option value="">Select User</option>
                                {destriData.map((item, index) => {
                                  return (
                                    <option
                                      value={item.distributor_id}
                                      key={index}
                                    >
                                      {item.username}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="username">
                                Amount To Transfer *
                              </label>
                              <input
                                type="tel"
                                value={values.dpoints}
                                onChange={handleChange("dpoints")}
                                name="dpoints"
                                className="inputfield form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="dbalance">Balance *</label>
                              <input
                                type="text"
                                disabled
                                name="dbalance"
                                value={values.dbalance}
                                onChange={handleChange("dbalance")}
                                className="inputfield form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="passcode">Balance *</label>
                              <input
                                type="text"
                                disabled
                                name="passcode"
                                value={values.passcode}
                                onChange={handleChange("passcode")}
                                className="inputfield form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label htmlFor="username">&nbsp;</label>
                              <button className="inputfield btn-warning form-control">
                                {" "}
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlayerAdjustPoint;
