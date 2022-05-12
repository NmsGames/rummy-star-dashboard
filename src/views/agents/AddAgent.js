import React, { useState, useEffect } from "react";
import "../../style/Contact.css";
import { Link } from "react-router-dom"
import axios from "axios"; 
import { authToken } from "../../authToken";
import Swal from "sweetalert2";
function AddAgent() {
  let apiBaseURL  = "http://15.207.171.247:5000"
  const [values, setValues] = useState({
    agent_id: "",
    password: "",
    agentname: "",
    revenueper:0,
    parent: 1,
    type:"TN",
  });
  const [msg, setMsg] = useState("");
  const [destriData, setDestriData] = useState([]);
  const [Stokez, setStokez] = useState([]);

  //get Agents
  const getAgents = async () => {
    await axios
      .get(`${apiBaseURL}/api/users/getAgents`)
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
  const getStokez = async () => {
    await axios
      .get(`${apiBaseURL}/api/users/getStokez`)
      .then(function (response) {
        if (response.data.status === 200) {
          console.log(response.data, "data");
          setStokez(response.data.data);
        }
      })
      .catch(function (error) {
        // history.push("/login")
      });
  };
 



  const handleSubmit = async (e) => {
    e.preventDefault();
    const { agent_id, revenueper, agentname, password, parent,type } = values;
    const data = {
      username:agent_id ,
      password: password,
      name:agentname ,
      revenue:revenueper,
      parent: parent ,
      type:type,
  
    };
    await fetch(`${apiBaseURL}/api/users/createAgent`, {
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
            agent_id: "",
            password: "",
            agentname: "",
             revenueper:0,
            parent: 1,
              type:"TN",
            
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
    getStokez();

  }, []);
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <div className="card card-outline card-info">
            <div className="card-header">
              <div class="row mx-md-n5">
                <div class="col px-md-5"> 
                    <h3 className="card-title">
                      <i className="fa-solid fa-user-tie fa-2x" /> Create Agents
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
                    Agent ID
                  </label>

                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="agent_id"
                      value={values.agent_id}
                      onChange={handleChange("agent_id")}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    Agent Name
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="agentname"
                      value={values.agentname}
                      onChange={handleChange("agentname")}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                     Revenue Percent
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      name="revenueper"
                      value={values.revenueper}
                      onChange={handleChange("revenueper")}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-3 col-form-label"
                  >
                    Type
                  </label>
                  <div className="col-sm-9 ">
                  <select
                            name="type"
                            value={values.type}
                            onChange={()=>{handleChange("type")
                            }}
                            className=" form-control " >
                            <option value="TN">TN</option>
          </select>
                  </div>
                </div>
 
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-3 col-form-label"
                  >
                    
                    Parent
                  </label>
                  <div className="col-sm-9">
                  <select
                            name="parent"
                            onChange={handleChange("parent")
                            }
                            className=" form-control " >
{Stokez.map((e,index)=>{
 return( <option value={e.id} key={index}>
  {e.stokezname}
</option>
)
})
} </select>
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
    </>
  );
}
export default AddAgent;
