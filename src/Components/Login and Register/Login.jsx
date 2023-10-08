import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../MyProvider/MyProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { loginUser } = useContext(DataContext);
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        setError('');

        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                toast('Logged in successfully')

                navigate(location?.state ? location.state : '/');

            })
            .catch(() => {
                setError('Invalid Email or Password')
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div>
                            {
                                error && <p className="text-red-500">{error}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
                <p className="mt-4 text-xl">New Here ? Please <span className="text-red-500"><Link to='/register'>Register</Link></span></p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;