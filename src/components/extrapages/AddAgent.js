import React, { useState, useEffect } from "react";
import "../../style/Contact.css";
import { Link } from "react-router-dom"
import axios from "axios"; 
import { authToken } from "../../authToken";
import Swal from "sweetalert2";
function AddAgent() {
  let apiBaseURL  = "http://15.207.171.247:5000"
  const [values, setValues] = useState({
    distributor_id: "",
    password: "",
    username: "",
    percentage: "",
    passcode: "",
  });
  const [msg, setMsg] = useState("");
  const [destriData, setDestriData] = useState([]);
  //get Agents
  const getAgents = async () => {
    await axios
      .get(`${apiBaseURL}/api/users/agents`)
      .then(function (response) {
        if (response.data.status === 200) {
          console.log(response.data, "data");
          setDestriData(response.data.data);
        }
      })
      .catch(function (error) {
        // history.push("/login")
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { distributor_id, percentage, username, password, passcode } = values;
    const data = {
      password,
      distributor_id,
      username,
      percentage,
      pin: passcode,
    };
    await fetch(`${apiBaseURL}/api/users/createDistrubutor`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          getAgents();
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
            title: "User created",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops...",
            text: data.message,
          });
        }
      })
      .catch((error) => {
        Swal.fire(`Something Went wrong!`, "error");
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
              <div class="row mx-md-n5">
                <div class="col px-md-5"> 
                    <h3 className="card-title">
                      <i className="fa-solid fa-user-tie fa-2x" /> Add
                      Distributors
                    </h3> 
                </div>
                <div class="col px-md-5">  
                    <h3 className="card-title "> 
                    <Link to="/DistributorList" className="nav-link"> 
                        View Agents - {destriData.length} 
                        </Link></h3>
                 </div>
              </div>
            </div>
            <div className="card-body">
              <form method="post" onSubmit={handleSubmit}>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    Distributor ID
                  </label>

                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="distributor_id"
                      value={values.distributor_id}
                      onChange={handleChange("distributor_id")}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    Distributor Name
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
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
                      className="form-control"
                      name="percentage"
                      value={values.percentage}
                      onChange={handleChange("percentage")}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    Pin (Passcode)
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="passcode"
                      value={values.passcode}
                      onChange={handleChange("passcode")}
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
                      className="form-control"
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
export default AddAgent;
