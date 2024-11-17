import React from "react";
import FieldInput from "./ui/FieldInput";
import Link from "next/link";

const FormLogin = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <form method="POST" className="w-full max-w-md bg-white border border-gray-300 shadow-lg rounded-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Welcome Back</h1>
          <p className="text-gray-600">Please login to your account</p>
        </div>
        <FieldInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          className={"mb-5"}
         
        />
        <FieldInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          className={"mb-10"}

        />
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
          Login
        </button>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Dont have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
