
import { Link } from "react-router-dom";
import pic from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const SignUp = () => {

    const {signUp} =useContext(AuthContext)

    const handleSignUP = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        signUp(email,password)
        .then(res => {
            console.log(res.user);
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
                    <form onSubmit={handleSignUP} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Sign UP</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                        </div>
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
                            <button type="submit" className="btn btn-warning">Register</button>
                        </div>
                    </form>

                    <p className="p-4">Already have an account? <Link className="text-warning font-bold" to='/login'>Login</Link> </p>

                </div>
            </div>
        </div>
    );
};

export default SignUp;