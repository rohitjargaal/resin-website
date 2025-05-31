import React, { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    function adminlogin(e) {
        e.preventDefault()
        axios.post("http://localhost:8080/admin/login", { email, password }, { withCredentials: true })
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    console.log(res.data.success)
                    toast.success(res.data.message)
                    navigate("/dashboard")
                }
            }).catch((err) => {
                toast.error(err.response.data.message)
            })
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-4 offset-4 mt-5">
                    <form onSubmit={adminlogin}>
                        <h4 className='text-center'><b>Login as Admin On Nova Threads</b></h4>
                        <div className="mb-3">
                            <label className="form-label" >Email</label>
                            <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn btn-primary">
                                Admin Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
