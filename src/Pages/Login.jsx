import React, { useState } from "react";
import { toast } from "react-toastify";

function Login() {
  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validateEmail = () => {
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
      );
      return false;
    }
    return true;
  };

  const validateConfirmPassword = () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    return true;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (currentState === "Sign Up") {
      const isEmailValid = validateEmail();
      const isPasswordValid = validatePassword();
      const isConfirmPassword = validateConfirmPassword();

      if (isEmailValid && isPasswordValid && isConfirmPassword) {
        toast.success("Sign-up successful!");
      }
    } else {
      const isEmailValid = validateEmail();
      const isPasswordValid = validatePassword();

      if (isEmailValid && isPasswordValid) {
        toast.success("Login successful!");
      }
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl prata-regular">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Sign Up" && (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      {currentState === "Sign Up" && (
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          required
        />
      )}
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        {currentState === "Login" && (
          <p className="cursor-pointer">Forgot your password?</p>
        )}
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
}

export default Login;
