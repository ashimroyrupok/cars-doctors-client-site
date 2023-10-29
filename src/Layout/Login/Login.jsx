import { Link, Navigate } from "react-router-dom";
import pic from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Login = () => {

    const {login} = useContext(AuthContext)


    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        
        login(email,password)
        .then(res => {
            console.log(res.user);
            if(res.user){
                <Navigate to="/"></Navigate>
            }
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 mr-5">
                    <img src={pic} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Login now!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-warning">Login</button>
                        </div>
                    </form>

                    <p className="p-4">New to Cars Doctor <Link className="text-warning font-bold" to='/signup'>Sign Up</Link> </p>

                </div>
            </div>
        </div>
    );
};

export default Login;