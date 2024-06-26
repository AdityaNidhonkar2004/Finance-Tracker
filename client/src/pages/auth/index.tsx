import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export const Auth = () => {
  return (
    <div className="sign-in-container">
      <SignedOut>
        <h1 className=" text-xl mx-5  md:text-5xl font-bold my-5 mt-[-10%]"> Welcome to Your Own Personal Finance Tracker!</h1>
        <div className=" mx-16 ">
        <SignUpButton mode="modal" />
        <SignInButton mode="modal" />
        </div>
        
      </SignedOut>
      <SignedIn>
        <Navigate to="/dashboard" />
      </SignedIn>
    </div>
  );
};
