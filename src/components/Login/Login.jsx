import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import { validate } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = () => {
    const message = validate(email.current.value, password.current.value);
    setError(message);
    if (message) return;
    if (!isLogin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/SA-en-20241008-TRIFECTA-perspective_1339416f-3caa-4b58-b88a-3ab696a48ba0_small.jpg"
          alt="netlfix bg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black p-12 absolute w-4/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-90"
      >
        <h1 className="font-bold text-3xl p-2">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        {!isLogin && (
          <input
            type="text"
            placeholder="Enter Name"
            className="p-2 m-2 w-full bg-slate-950 "
          />
        )}

        <input
          type="text"
          placeholder="Enter Email"
          className="p-2 m-2 w-full bg-slate-950 "
          ref={email}
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-2 m-2 w-full bg-slate-950 "
        />

        <button
          type="submit"
          className="bg-red-600 px-8 py-2 m-2 w-full hover:bg-red-700"
          onClick={() => {
            handleSubmit();
          }}
        >
          {isLogin ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-600 p-4 font-bold">{error}</p>
        <p className="p-2">
          {" "}
          {isLogin ? "Dont have account?" : "Already have account? "}
          <span
            className="text-red-700 cursor-pointer"
            onClick={() => {
              handleLogin();
            }}
          >
            {isLogin ? " Sign Up" : " Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
