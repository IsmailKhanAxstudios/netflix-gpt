import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid } = user;
        dispatch(addUser({ email, uid }));
        // console.log(user, "Registered User");
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // return unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out.");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="w-full flex justify-between items-center bg-black">
      <div className="absolute w-44 pl-5 bg-gradient-to-b from-black z-10">
        <img src="/logo.png" alt="logo" />
      </div>

      {user && (
        <div className="ml-auto pr-5">
          <button
            className="text-white mt-2 px-4 py-2 bg-red-700 rounded-xl"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
