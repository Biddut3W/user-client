import { Link } from "react-router-dom";


const Register = () => {
    const handleRegisterForm = e => {
        e.preventDefault();
        const userName = e.target.userName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(password, email, userName);
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegisterForm}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name="userName" placeholder="User Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <div className="m-5">
                            <h1>Have your account! <Link to={"/"}><button className="btn btn-sm">Login</button></Link></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;