const Login = () => {
    return(
        <div className="page-login">
            <form action="" className="box">
                <div className="form-intro">
                    <span className="form-title">Login</span>
                    <span className="form-description">Login to manage prescriptions.</span>
                </div>
                <input type="email" placeholder="Email" className="form-input" />
                <input type="password" placeholder="Password" className="form-input" />
                <button type="submit" className="form-button">Login</button>
            </form>
        </div>
    )
}

export default Login;