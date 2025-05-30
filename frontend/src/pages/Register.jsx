import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'; 

function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    function registerhandle(e) {
        e.preventDefault()
        axios.post("http://localhost:8080/user/register", { username, email, password })
            .then((res) => {
                console.log(res)
                setUsername("")
                setEmail("")
                setPassword("")
                if (res.data.success) {
                    navigate("/login");
                    toast.success(res.data.message)
                }
            }).catch((err) => {
                console.log("err", err)
            })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 offset-4 mt-5">
                    <form onSubmit={registerhandle}>
                        <h4 className='text-center'><b>Signup On Nova Threads</b></h4>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Email address</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Password </label>
                            <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className="mt-4 d-flex justify-content-evenly">
                            <a className="btn-link" href='/login'>Already a user</a>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn btn-primary" >Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
