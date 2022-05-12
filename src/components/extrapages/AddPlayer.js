import React, { useState, useEffect } from "react";
import "../../style/Contact.css";
import axios from "axios";

function AddPlayer() {
  let apiBaseURL = "http://15.207.171.247:5000"; 
  const [values, setValues] = useState({
    distributor_id: "",
    password: "",
    user_id: "",
    username: "",
  });

  const [destriData, setDestriData] = useState([]);
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
      .catch(function (error) {});
  };

  //get Agents
  const getAgents = async () => {
    await axios
      .get(`${apiBaseURL}/api/users/agents`)
      .then(function (response) {
        if (response.data.status === 200) {
          setDestriData(response.data.data);
        }
      })
      .catch(function (error) {});
  };

  //
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  useEffect(() => {
    getAgents();
  }, []);

  return (
    <div className="content-wrapper">
      <div className="row ml-2 mr-2">
        <div className="col-md-12">
          <div className="card card-outline card-info">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fa-solid fa-user-tie fa-2x" /> Add Player
              </h3>
            </div>
            <div className="card-body">
              <form method="post" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="username">Username *</label>
                      <input
                        type="text"
                        value={values.user_id}
                        onChange={handleChange("user_id")}
                        name="user_id"
                        className="inputfield form-control"
                        placeholder="Enter Username"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="username">Password *</label>
                      <input
                        type="password"
                        value={values.password}
                        onChange={handleChange("password")}
                        name="password"
                        className="inputfield form-control"
                        placeholder="*******"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="username">Name *</label>
                      <input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange("username")}
                        className="inputfield form-control"
                        placeholder="Enter Username"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="username">Distributor *</label>
                      <select
                        name="distributor_id"
                        value={values.distributor_id}
                        onChange={handleChange("distributor_id")}
                        className="inputfield form-control"
                        placeholder="Username*"
                      >
                        <option value="">Select Agents</option>
                        {destriData.map((item, index) => {
                          return (
                            <option value={item.distributor_id} key={index}>
                              {item.username}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <button className="btn-primary"> CREATE</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddPlayer;
