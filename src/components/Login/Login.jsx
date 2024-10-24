import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import { validate } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { BG_IMG_URL } from "../../utils/constants";
const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

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
        <img src={BG_IMG_URL} alt="netlfix background" />
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
