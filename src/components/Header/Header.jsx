import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out.");
        navigate("/");
      })
      .catch((error) => {
        // An error happened
        console.error("Error signing out:", error);
      });
  };
  console.log(user);
  return (
    <div className="absolute w-44 pl-5 mt-5 bg-gradient-to-b from-black z-10">
      <img src="/logo.png" alt="logo" />
      {user && (
        <button
          type="text"
          onClick={() => {
            handleSignOut();
          }}
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
