import React, { useState, useEffect } from "react";
import "../../style/Contact.css";
import axios from "axios";
import Swal from "sweetalert2";

function AddNewPlayer() {
  let apiBaseURL = "http://15.207.171.247:5000";
  const sessionData = JSON.parse(sessionStorage.getItem("token"));
  const [values, setValues] = useState({
    distributor_id: "",
    password: "",
    username: "",
    percentage: "",
    passcode: "",
  });

  const [destriData, setDestriData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { distributor_id, percentage, username, password, passcode } = values;
    const user = {
      password,
      distributor_id,
      user_id:username,
      percentage,
      pin: passcode,
    };
    await axios({
      method: "post",
      url: `${apiBaseURL}/api/users/createUser`,
      data: user,
      headers: { Authorization: `Bearer ${sessionData.token}` },
    })
      .then(function (response) {
        if (response.data.status === 200) {
          setValues({
            distributor_id: "",
            password: "",
            username: "",
            percentage: "",
            passcode: "",
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
      .get(`${apiBaseURL}/api/users/agents`)
      .then(function (response) {
        if (response.data.status === 200) { 
          setDestriData(response.data.data); 
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
  }, []);

  return (
    <div className="content-wrapper">
      <div className="row ml-2 mr-2">
        <div className="col-md-8">
          <div className="card card-outline card-info">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fa-solid fa-user-tie fa-2x" /> Add New Player
              </h3>
            </div>
            <div className="card-body">
              <form method="post" onSubmit={handleSubmit}>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    Select Distributor
                  </label>
                  <div className="col-sm-9">
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
                          <option value={item.distributor_id} key={index}>
                            {item.username}
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
                      name="username"
                      value={values.username}
                      onChange={handleChange("username")}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    Percentage
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="inputfield form-control"
                      name="percentage"
                      value={values.percentage}
                      onChange={handleChange("percentage")}
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
                        <button className=" btn-primary form-control">
                          Reset
                        </button>
                      </div>
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
    </div>
  );
}
export default AddNewPlayer;
