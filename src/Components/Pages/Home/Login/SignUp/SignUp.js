import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../../../firebase.init";
import LoadSpinner from "../LoadSpinner/LoadSpinner";

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();


    let errorMessages;

    if(user || gUser){
      console.log(user || gUser);
    }
  
    if(error || gError){
      errorMessages = <p className="text-red-500 text-xs">{error?.message || gError?.message}</p>
    }
  
  
    if(loading || gLoading){
        return <LoadSpinner></LoadSpinner>
    }

  const onSubmit = (data,event) => {
    console.log(data);
    if(data.password === data.confirm_password){
        createUserWithEmailAndPassword(data.email,data.password);
    }else{
        alert('password did not match');
    }
    
    event.target.reset();
  };

 

  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co/9G8dvFg/bannerbackground.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        paddingTop: "150px",
      }}
    >
      <div className="bg-slate-200 w-3/6 h-96 mx-auto flex px-6 items-center rounded-md">
        <div>
          <img
            className="rounded-md"
            width="550"
            src="https://i.ibb.co/CzjhYMN/6300830.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col ml-10">
          <h2 className="text-3xl mb-5 mt-2 font-bold">Sign Up</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Enter Email"
              className="mb-1 w-60 h-8 bg-slate-50 text-xs pl-2 rounded-md"
              {...register("email", { required: true })}
            />
            <p className="text-left text-red-800 ml-1 mt-0 pt-0">
              <small>
                {errors.email?.type === "required" && "email is required"}
              </small>
            </p>

            <input
              placeholder="Enter Password"
              className=" w-60 mb-1 pb-0 bg-slate-50 h-8 text-xs pl-2 rounded-md"
              type="password"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/,
              })}
            />
            <p className="text-left text-red-800 mt-0 pt-0">
              <small>
                {errors.password?.type === "required" && "password is required"}
              </small>
            </p>
            <p className="text-left text-red-800 mt-0 pt-0">
              <small>
                {errors.password?.type === "pattern" &&
                  "Minimum eight characters, at least one letter and one number"}
              </small>
            </p>

            <input
              placeholder="Confirm Password"
              className=" w-60 mb-3 pb-0 bg-slate-50 h-8 text-xs pl-2 rounded-md"
              type="password"
              {...register("confirm_password", {
                required: true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/,
              })}
            />

            {errorMessages}

            <input
              class="btn btn-dark btn-sm text-xs w-5/6 mx-auto mt-1"
              type="submit"
              value="Sign Up"
            />

            <div class="divider w-4/5 mx-auto">OR</div>
            <div>
              <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-dark btn-sm">
                <img
                  width="24"
                  src="https://i.ibb.co/h9DDdjT/google.png"
                  alt=""
                />
                <span className="pl-1 text-xs">Google Sign Up</span>
              </button>
            </div>
            <div className="mt-2">
              <p>
                <small>
                  Already have an account?{" "}
                  <span className="text-red-600">
                    <Link to="/login">Login</Link>
                  </span>
                </small>
              </p>
            </div>
          </form>

          {/* <input
            className="mb-2 w-60 h-8 bg-slate-50 text-xs pl-2 rounded-md"
            placeholder="Enter Your Email"
            type="email"
            name=""
            id=""
          />
          <input
            className=" w-60 bg-slate-50 h-8 text-xs pl-2 rounded-md"
            placeholder="Enter Your Password"
            type="password"
            name=""
            id=""
          />
          <p className="text-right mb-3"><small>Forgot Password? <span className="text-red-600"><Link to=''>Reset</Link></span></small></p>
          <button class="btn btn-dark btn-sm text-xs w-full mx-auto">Login</button>
          <div class="divider">OR</div>
          <div>
            <button class="btn btn-outline btn-dark btn-sm">
              <img
                width="24"
                src="https://i.ibb.co/h9DDdjT/google.png"
                alt=""
              />
              <span className="pl-1 text-xs">Google Login</span>
            </button>
          </div>
          <div className="mt-4">
            <p><small>Don't have an account? <span className="text-red-600"><Link to='/signup'>Create Account</Link></span></small></p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;