import React, { useState, useEffect } from "react";
// import '../../style/Contact.css'
import axios from "axios";
import Swal from "sweetalert2";
function ChangeUserPassword() {
  let apiBaseURL = "http://localhost:5000"; 
  const [values, setValues] = useState({
    user_id: "",
    password: "", 
    confirm_password:"",
  });
  const [value1, setValues1] = useState({
    user_id: "",
    password: "", 
    confirm_password:"",
  
  });
  const [userData, setUserData] = useState([]);
  const [destriData, setDestriData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {  user_id,
      
    password, 
    confirm_password,
  } = value1; 
    const user = { user_id,
      role_id:3,
      password, 
      confirm_password,}; 
    await axios
      .post(`${apiBaseURL}/api/users/resetPassword`, user)
      .then(function (response) {
        if (response.data.status === 200) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: response.data.message,
                showConfirmButton: true,
                timer: 1500,
              });
              setValues1({
                user_id: "",
               password: "",
                confirm_password: "", 
              })
        }else{
          if(response.data.status == 401) {
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
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Someting Went wrong!",
            showConfirmButton: true,
            timer: 1500,
          });
      });
  };
  const handleSubmit1= async (e) => {
    e.preventDefault();
    const { user_id,password, confirm_password } = values; 
    const user = { user_id,
      role_id:2,
      password, 
      confirm_password,}; 
  
    console.log(user)
    await axios
      .post(`${apiBaseURL}/api/users/resetPassword`, user)
      .then(function (response) {
        if (response.data.status === 200) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: response.data.message,
                showConfirmButton: true,
                timer: 1500,
              });
              setValues({
                user_id: "",
                password: "",
                confirm_password: "", 
              })
        }else{
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: response.data.message,
                showConfirmButton: true,
                timer: 1500,
              });
        }
      })
      .catch(function (error) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Someting Went wrong!",
            showConfirmButton: true,
            timer: 1500,
          });
      });
  };
//get Agents
const getUsers = async () => {
    await axios
      .get(`${apiBaseURL}/api/users/getPlayer`)
      .then(function (response) {
        if (response.data.status === 200) { 
          setUserData(response.data.data); 
        }
      })
      .catch(function (error) {
      
      });
  };
  //get Agents
  const getStokez = async () => {
    await axios
      .get(`${apiBaseURL}/api/users/getStokez`)
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
  //
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  const handleChange1 = (name) => (e) => {
    setValues1({ ...value1, [name]: e.target.value });
  };
  useEffect(() => {
    getStokez();
    getUsers();
  }, []);

  return (
      <div className="row">
        <div className="col-md-6">
          <div className="card card-outline card-info">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fa-solid fa-key nav-icon fa-2x" /> Reset Players
                Password
              </h3>
            </div>
            <div className="card-body">
              <form method="post" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="username">Username / Players*</label>
                      <select
                        name="user_id"
                        value={value1.user_id}
                        onChange={handleChange1("user_id")}
                        className="inputfield form-control"
                        placeholder="Username*"
                      >
                        <option value="">Select User</option>
                        {userData.map((item, index) => {
                          return (
                            <option value={item.username} key={index}>
                              {item.playername}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="username">New Password *</label>
                      <input
                        type="password"
                        value={value1.password}
                        onChange={handleChange1("password")}
                        name="password"
                        className="inputfield form-control"
                        placeholder="*******"
                      />
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="unewPassword">Confirm Password *</label>
                      <input
                        type="text"
                        name="unewPassword"
                        value={value1.confirm_password}
                        onChange={handleChange1("confirm_password")}
                        className="inputfield form-control"
                        placeholder="*******"
                      />
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                  
                  <div className="col-md-4 ">
                    <div className="form-group">
                      <button type='onSubmit'className="btn-primary form-control"> 
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-outline card-info">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fa-solid fa-key nav-icon fa-2x" />Reset Stokez
                Password
              </h3>
            </div>
            <div className="card-body">
              <form method="post" onSubmit={handleSubmit1}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="username">Username / Stokez *</label>
                      <select
                        name="user_id"
                        value={values.user_id}
                        onChange={handleChange("user_id")}
                        className="inputfield form-control"
                        placeholder="Username*"
                      >
                        <option value="">Select User</option>
                        {destriData.map((item, index) => {
                          return (
                            <option value={item.username} key={index}>
                              {item.stokezname}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="password">New Password *</label>
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
                  <div className="col-md-6"></div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="newPassword">Confirm Password *</label>
                      <input
                        type="text"
                        name="newPassword"
                        value={values.confirm_password}
                        onChange={handleChange("confirm_password")}
                        className="inputfield form-control"
                        placeholder="*******"
                      />
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                  <div className="col-md-4 ">
                    <div className="form-group">
                      <button type="onSubmit" className="btn-primary form-control"> 
                        Submit
                      </button>
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
export default ChangeUserPassword;
