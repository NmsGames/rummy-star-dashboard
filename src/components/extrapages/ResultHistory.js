// import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import '../../style/Contact.css'
// import { Link } from 'react-router-dom'

let apiBaseURL  = "http://15.207.171.247:5000"

function ResultHistory() {

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
                        <i className="fa-solid fa-rectangle-history fa-3x" />
                    </div>
                    <form method="post">
                        <h3>
                            Result History
                        </h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="txtName" className="form-control" placeholder="Username*" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtPhone" className="form-control" placeholder="Amount To Adjust *" />
                                </div>
                                <div className="form-group">

                                    <button type="submit" name="btnSubmit" className="btnContact btn btn-lg btn-primary" >Save</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="number" name="txtPhone" className="form-control" disabled placeholder="Balance" />
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
                    <MaterialTable
                        title='Result History'
                    />
                </div>
            </div>
        </div>
    )
}
export default ResultHistory
