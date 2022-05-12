// import React, { useState, useEffect } from 'react'
// import MaterialTable from 'material-table'
import '../../style/Contact.css'
// import { Link } from 'react-router-dom'



function CreatePlayer() {
let apiBaseURL  = "http://15.207.171.247:5000"
    //   const [data, setData] = useState([])

    //   const columns = [
    //     { title: 'Sl No.', field: "transaction_id" },
    //     { title: 'Transaction Id', field: "txn_id" },
    //     { title: "User Id", field: "user_id" },
    //     { title: "Transaction Amount", field: "txn_amount" },
    //     { title: "Transaction Date", field: "txn_date" },
    //     { title: "Status", field: "status" }
    //   ]

    //   useEffect(() => {
    //     fetch("/api/transaction")
    //       .then((response) => response.json())
    //       .then(json => setData(json))
    //   }, [])

    return (
        <div className="content-wrapper">

            <div>

                <div className="container contact-form">
                    <div className="contact-image">
                        {/* <i className="fa-solid fa-user-tie fa-3x" /> */}
                    </div>
                    <form method="post">
                        <h3>Create player</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="txtName" className="form-control" placeholder="Username*" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtPhone" className="form-control" placeholder="Name *" />
                                </div>
                                {/* <div className="form-group">
                                    <select className="form-control" placeholder="Type*">
                                        <option>Type</option>
                                        <option>TN</option>
                                    </select>
                                </div> */}
                                {/* <div className="form-group">
                                    <input type="number" name="txtPhone" className="form-control" placeholder="Revenue Percentage *" />
                                </div> */}
                                <div className="form-group">
                                    <input type="submit" name="btnSubmit" className="btnContact" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="txtPhone" className="form-control" placeholder="Password *" />
                                </div>
                                <div className="form-group">
                                    <select className="form-control" placeholder="Username*">
                                        <option>Distribution</option>
                                        <option>Bakend data</option>

                                    </select>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    )
}
export default CreatePlayer
