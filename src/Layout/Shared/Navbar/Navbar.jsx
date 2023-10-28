import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {
  const{user,signOutUser} = useContext(AuthContext);
  
  const handleSignOut = e =>{
    e.preventDefault();
    signOutUser()
    .then(()=>{
      alert('succeq')
    })
    .catch(err=>{
      alert(err.message)
    })
  }
  return (
    <div className="" id="navarro">
      <div className="navbar  bg-gray-300">
        <div className="flex-1 w-1/3">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>

        </div>
        <div className="w-1/3 ">

          <ul className="mx-auto flex gap-4" >
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "bg-blue-500" : isActive ? "border-b-2 border-blue-800 pb-2" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "bg-blue-500" : isActive ? "border-b-2 border-blue-800 pb-2" : ""
                }
              >
                login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/registration"
                className={({ isActive, isPending }) =>
                  isPending ? "bg-blue-500" : isActive ? "border-b-2 border-blue-800 pb-2" : ""
                }
              >
                Registration
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive, isPending }) =>
                  isPending ? "bg-blue-500" : isActive ? "border-b-2 border-blue-800 pb-2" : ""
                }
              >
                Products
              </NavLink>
            </li>
            {
              user ? <li>
              <NavLink
                to="/mycheckout"
                className={({ isActive, isPending }) =>
                  isPending ? "bg-blue-500" : isActive ? "border-b-2 border-blue-800 pb-2" : ""
                }
              >
                My Cart
              </NavLink>
            </li>
            : null
            }

            
          </ul>
        </div>

        <div className="flex-none order-12 w-1/3 flex justify-end pr-6">

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          
          
          {
            user  ?
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  {user?.displayName}
                  
                </a>
              </li>
              <li><a>Settings</a></li>
              {
                user ?
                <li><a onClick={handleSignOut}>Logout</a></li>
                :
                ''
              }
            </ul>
          </div> 
            : <div>no user</div>
          }



        </div>
      </div>
    </div>
  );
};

export default Navbar;