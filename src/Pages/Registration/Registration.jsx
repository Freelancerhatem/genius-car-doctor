import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import auth from "../../firebase/firebase.config";
import { updateProfile } from "firebase/auth";


const Registration = () => {
    const {createUser,setUser} = useContext(AuthContext);
    const Navigate = useNavigate()
    const handleRegister =e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password= form.password.value;
        const name = form.name.value;
        const img = form.img.value;
        console.log({name,img})
        createUser(email,password)
        .then(()=>{

            updateProfile(auth.currentUser, {
                displayName: name, photoURL: img
              }).then(() => {
                setUser(auth.currentUser);
                Navigate('/login')
              }).catch((error) => {
                alert(error.message)
              });




            
            alert('usercreated')

        })
        .catch(error=>{
            alert(error.message)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-4">Login now!</h1>
                        <img src="https://shorturl.at/apvN4" className="" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" name="img" placeholder="img link" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
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
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Registration</button>
                                <div className="divider">OR</div>
                                <p>already have an account? <Link to='/login'>Signin</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;