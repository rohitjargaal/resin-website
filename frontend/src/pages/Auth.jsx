import React, { useState } from 'react'

function Auth() {
    const [islogin, setIsLogin] = useState(true)
    return (
        <div className='container'>
            {islogin ? <>
                <div className="row">
                    <div className="col-4 offset-4 mt-5">
                        <form>
                            <h4 className='text-center'><b>Login On Nova Threads</b></h4>
                            <div className="mb-3">
                                <label className="form-label" >Email</label>
                                <input type="text" className="form-control" onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                            <div className="mt-4 d-flex justify-content-evenly">
                                <a

                                    className="btn-link"
                                    style={{ textDecoration: "none" }}
                                    onClick={() => { setIsLogin(false) }}
                                >
                                    Don't have account ? Create a Account
                                </a>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <button className="btn btn-danger">
                                    Log in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </> : <>
                <div className="row">
                    <div className="col-4 offset-4 mt-5">
                        <form>
                            <h4 className='text-center'><b>Signup On Nova Threads</b></h4>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control" onChange={(e) => { setUsername(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"> Email address</label>
                                <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"> Password </label>
                                <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} />
                            </div>

                            <div className="mt-4 d-flex justify-content-evenly">
                                <a className="btn-link" onClick={() => { setIsLogin(true) }} style={{ textDecoration: "none" }}>Already a user</a>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <button className="btn btn-danger">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default Auth
