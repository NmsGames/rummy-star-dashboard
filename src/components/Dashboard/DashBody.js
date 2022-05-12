import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
function DashBody() {
  let apiBaseURL = "http://localhost:5000";
  let [dateTime, setDateTime] = useState();
  let [todayDate, settodayDate] = useState();
  const timer = setInterval(() => {
    let current = new Date();
    let date = moment(current).format("dddd DD MMMM,YYYY");
    const times = `${current.getHours()}:${
      current.getMinutes() + 1
    }:${current.getSeconds()}`;
    setDateTime(times);
    settodayDate(date);
  }, 1000);

  const [winngPoints, setwinngPoints] = useState({});
  const [userData, setuserData] = useState([]);
  const [destriData, setDestriData] = useState([]);
  //get Agents
  const getData = async () => {
      //Get users
    await axios
    .get(`${apiBaseURL}/api/users/`)
    .then(function (response) {
      if (response.data.status === 200) {
          setuserData(response.data.data);
      }
    })
    .catch(function (error) {});
    //Get AGents
    await axios
      .get(`${apiBaseURL}/api/users/agents`)
      .then(function (response) {
        if (response.data.status === 200) {
          setDestriData(response.data.data);
        }
      })
      .catch(function (error) {});

      //Get Points
      await axios
      .get(`${apiBaseURL}/api/games/winnigPoints`)
      .then(function (response) {
        if (response.data.status === 200) {
            setwinngPoints(response.data.data[0]);  
        }
      })
      .catch(function (error) {});
  };
  
 
  useEffect(() => {
    getData(); 
  }, []);
  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid"> 
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner text-center">
                    <div className="col-lg-12 col-12">
                      <p className="font-weight-bold text-dark">{todayDate} </p>
                      <h4>{dateTime}</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9 col-6">
                <div className="small-box bg-dark">
                  <div className="inner text-center">
                    <div className="row">
                      <div className="col-lg-2 col-2">
                      <h4>
                          {userData.length < 10
                            ? `0${userData.length}`
                            : userData.length}
                        </h4>
                        <Link
                          to="/PlayersList"
                          className="font-weight-bold text-primary"
                        >
                          Total Players
                        </Link>
                      </div>
                      <div className="col-lg-2 col-2">
                        <h4>
                          {destriData.length < 10
                            ? `0${destriData.length}`
                            : destriData.length}
                        </h4> 
                        <Link
                          to="/DistributorList"
                          className="font-weight-bold text-primary"
                        >
                          Total Admin
                        </Link>
                         
                      </div>
                      <div className="col-lg-2 col-2">
                        <p>05</p>
                        <p>Online Players</p>
                      </div>
                      <div className="col-lg-2 col-2">
                      <h4>
                          {winngPoints.avg_bets < 10
                            ? `0${winngPoints.avg_bets}`
                            : winngPoints.avg_bets}
                        </h4>
                        <p>Average Bet</p>
                      </div>
                      <div className="col-lg-2 col-2">
                      <h4>
                          {winngPoints.winning_points < 10
                            ? `0${winngPoints.winning_points}`
                            : winngPoints.winning_points}
                        </h4>
                        <p>Win Points</p>
                      </div>
                      <div className="col-lg-2 col-2">
                      <h4>
                          {winngPoints.play_points < 10
                            ? `0${winngPoints.play_points}`
                            : winngPoints.play_points}
                        </h4>
                        <p>Play Points</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.row */}
{/* 
            <div className="row my-4">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Today Last Login Admin </h3>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="example1"
                        className="table table-bordered table-striped"
                      >
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Last Login</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={5} className="text-center">
                              {" "}
                              No Record found.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* /.row (main row) */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </div>
  );
}
export default DashBody;
