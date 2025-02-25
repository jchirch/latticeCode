'use client';

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function NewAccountPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newUser = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create account");
      }
  
      const data = await response.json();
      console.log("Account created successfully:", data);
  
      console.log("Creating new user with:", { firstName, lastName, email, password });
      router.push("/dashboard")
    
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div
      className=" mainBackground
      flex flex-row
      outline-dashed
      w-screen h-screen 
      bg-[linear-gradient(45deg,_hsl(177,100%,50%)_0%,_hsl(177,99%,45%)_16%,_hsl(177,99%,39%)_25%,_hsl(177,99%,32%)_34%,_hsl(177,99%,22%)_48%,_hsl(0,0%,0%)_98%)]"
    >
      <div className="leftPage w-1/2 flex justify-start items-center">
        <h1 className="text-white font-playwrite text-8xl pl-12 mb-10 ">Lattice Code</h1> {/* hover:scale-150 duration-500 */}
      </div>
      <div className="rightPage w-1/2 flex justify-center items-center">
        <div
          className="loginContainer bg-black w-[60%] pt-8 pb-8 px-5 text-center rounded-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-teal-300"
        >
          <h1 className="text-white font-playwrite text-4xl p-5 mb-10 ">Create your account</h1>
          <form onSubmit={handleSubmit} className="">
            <div className="form-group">
              <label htmlFor="firstName" className="block text-left text-white font-medium">
                First Name
              </label>
              <input
                type="firstName"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
              >
              </input>
              <label htmlFor="lastName" className="block text-left text-white font-medium">
                Last Name
              </label>
              <input
                type="lastName"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
              >
              </input>
              <label htmlFor="email" className="block text-left text-white font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="block text-left text-white font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
              />
            </div>
            <button
            type="submit"
            className="w-full mt-3 bg-teal-500 text-white font-semibold py-2 rounded hover:bg-red-600 transition"
          >
            Create Account
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}