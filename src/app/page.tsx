'use client';

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function loginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Logging in with:", { email, password });
    router.push("/dashboard")
  }

  const navigateNewAccount = () => {
    router.push("/newaccount")
  }

  return (
    <div
      className=" 
      w-screen h-screen flex flex-col items-center justify-center
      bg-[linear-gradient(45deg,_hsl(177,100%,50%)_0%,_hsl(177,99%,45%)_16%,_hsl(177,99%,39%)_25%,_hsl(177,99%,32%)_34%,_hsl(177,99%,22%)_48%,_hsl(0,0%,0%)_98%)]"
    >
      <h1 className="text-white font-extrabold text-4xl p-5 mb-10 hover:scale-150 duration-500">Lattice Code</h1>

      <h1 className="text-white font-playwrite text-4xl p-5 mb-10 hover:scale-125 duration-300">Your learning should be as unique as you.</h1>
      <div
        className="loginContainer bg-black  w-[30%] pt-8 pb-8 px-5 text-center rounded-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-teal-300"
      >
        <h2 className="text-white text-2xl font-bold mb-4  hover:text-teal-400 transition">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
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
            className="w-full bg-teal-500 text-white font-semibold py-2 rounded hover:bg-red-600 transition"
          >
            Log In
          </button>
          </form>
          <h3 className="text-white text-2xl font-bold mb-4">or</h3>
          <button
            type="submit"
            onClick={navigateNewAccount}
            className="w-full bg-teal-500 text-white font-semibold py-2 rounded hover:bg-red-600 transition"
          >
            Create New Account
          </button>
      </div>
    </div>
  );
}


// teal to black bg gradient
// /* <div class="bg-gradient-to-br from-teal-400 via-teal-600 to-black"></div>
// <div class="bg-[linear-gradient(45deg,_hsl(177,100%,50%)_0%,_hsl(177,99%,45%)_16%,_hsl(177,99%,39%)_25%,_hsl(177,99%,32%)_34%,_hsl(177,99%,22%)_48%,_hsl(0,0%,0%)_98%)]"></div> */