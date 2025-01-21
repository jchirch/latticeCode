'use client';

// import './plasma.css'; // Import the styles

export default function loginPage() {
  return (
    <div
      className="pageWrapper bg-cover w-screen h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/latticebg.jpg')" }}
    >
      <h1 className="text-white font-extrabold text-4xl p-5 mb-10 hover:scale-150 duration-500">Lattice Code</h1>

      <h1 className="text-white font-extrabold text-4xl p-5 mb-10 hover:scale-125 duration-300">Your learning should be as unique as you are.</h1>
      <div
        className="loginContainer bg-black  w-[30%] pt-8 pb-8 px-5 text-center rounded-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-teal-300"
      >
        <h2 className="text-white text-2xl font-bold mb-4  hover:text-teal-400 transition">Welcome Back</h2>
        <form className="space-y-4">
          <div className="form-group">
            <label htmlFor="email" className="block text-left text-white font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
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
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-semibold py-2 rounded hover:bg-red-600 transition"
          >
            Log In
          </button>
          <h3 className="text-white text-2xl font-bold mb-4">or</h3>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-semibold py-2 rounded hover:bg-red-600 transition"
          >
            Create New Account
          </button>
        </form>
      </div>
    </div>
  );
}
