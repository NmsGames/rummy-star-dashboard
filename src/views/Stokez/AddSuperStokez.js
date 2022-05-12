import React, { useState, useEffect } from "react";
import "../../style/Contact.css";
import { Link } from "react-router-dom"
import axios from "axios"; 
import { authToken } from "../../authToken";
import Swal from "sweetalert2";

function AddSuperStokez() {
  let apiBaseURL  = "http://localhost:5000"
  const [values, setValues] = useState({
    stokezname : "",
    password: "",
    revenueper:0,
    parent: 1,
    type:"TN",
    username:"",
    
  });
  const [StokezData, setStokezData] = useState([]);
  const [AdminData, setAdminData] = useState([]);

  //get Agents
  const getStokez = async () => {
    await axios
      .get(`${apiBaseURL}/api/users/getStokez`)
      .then(function (response) {
        if (response.data.status === 200) {
          console.log(response.data, "data");
          setStokezData(response.data.data);
        }
      })
      .catch(function (error) {
        // history.push("/login")
      });
  };
  const getAdmin = async () => {
    await axios
      .get(`${apiBaseURL}/api/users/admindata`)
      .then(function (response) {
        if (response.data.status === 200) {
          console.log(response.data, "data");
          setAdminData(response.data.data);
        }
      })
      .catch(function (error) {
        // history.push("/login")
      });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log( values)
    const { stokezname,revenueper,type ,password,parent,username,} = values;
    const data = {
     name: stokezname ,revenue:revenueper,type:type,password:password,parent:parent,username:username,
    };
    await fetch(`${apiBaseURL}/api/users/createStokez`, {
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
          getStokez();
          setValues({
            stokezname : "",
            password: "",
            revenueper:0,
            parent: 1,
            type:"TN",
            username:"",
           
          });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        else if (data.status === 304) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops...",
            text: data.message,
          });
     
         }
        
        
        else {
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
    getStokez();
    getAdmin();
  }, []);



  return (
    <div>


<div className="row">
        <div className="col-md-8">
          <div className="card card-outline card-info">
            <div className="card-header">
              <div class="row mx-md-n5">
                <div class="col px-md-5"> 
                    <h3 className="card-title">
                      <i className="fa-solid fa-user-tie fa-2x" /> Create
                      Stokez
                    </h3> 
                </div>
                <div class="col px-md-5">  
                    <h3 className="card-title "> 
                    <Link to="/StokezList" className="nav-link"> 
                        View Stokez - {StokezData.length} 
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
                    Stokez Name
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="stokezname"
                      value={values.stokezname}
                      onChange={handleChange("stokezname")}
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
                            value={values.parent}
                            onChange={()=>{handleChange("parent")
                            }}
                            className=" form-control " >
{AdminData.map((e,index)=>{
 return( <option value={e.admin_id} key={index}>
  {e.name}
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
                        <button className=" btn-primary form-control">
                          Submit
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
  )
}

export default AddSuperStokez