import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [citizen_id, setCitizenId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  setError("");
  setSuccess("");
  // Use Vite env var when available, otherwise fall back to localhost for dev.
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
  console.log('Using API_URL:', API_URL);
  console.log('Sending login request for citizen_id:', citizen_id);

    try {
      const response = await axios.post(`${API_URL}/login`, {
        citizen_id,
        password, 
      });

      console.log('Server response:', response.data);

      if (response.data.success) {
        const userData = response.data.user;
        
        if (userData.citizen_id !== citizen_id) {
          console.error('Received incorrect user data from server');
          setError('Server returned incorrect user data');
          return;
        }

        localStorage.setItem('userSession', JSON.stringify({
          isLoggedIn: true,
          user: userData
        }));

        setSuccess("Login successful!");
        
        setTimeout(() => {
          window.location.href = "/after_login";
        }, 1000);
      } else {
        setError("Invalid Citizen ID or Password. If you haven't registered yet, please sign up first.");
      }
    } catch (err) {
      // Log the full error for debugging (network/CORS/other issues)
      console.error('Login request error:', err);

      // If server returned a structured message, show that; otherwise show a helpful message
      const serverMessage = err.response?.data?.message || err.response?.data;
      if (serverMessage === "User not found") {
        setError("This Citizen ID is not registered. Please check your ID or sign up for a new account.");
      } else if (serverMessage) {
        setError(String(serverMessage));
      } else if (err.message) {
        // This will include network errors and CORS errors
        setError(err.message);
      } else {
        setError("Network Error: could not reach the server. Please check your backend and CORS settings.");
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form onSubmit={handleLogin} method="post">
            <h3 className="font-bold text-3xl text-center">Login</h3>

            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}

            <p className="py-4">Your Citizen ID</p>
            <p className="text-sm text-gray-500 mb-2">
              (This is the ID generated during registration, not your email)
            </p>
            <input
              type="text"
              placeholder="Enter your Citizen ID (e.g., john1234)"
              className="border-1 rounded border-gray-300 p-2 w-full outline-none"
              value={citizen_id}
              onChange={(e) => setCitizenId(e.target.value)}
              required
            />

            <p className="py-4">Your Password</p>
            <input
              type="password"
              placeholder="Enter your Password"
              className="border-1 rounded border-gray-300 p-2 w-full outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="bg-blue-500 border-0 rounded text-white p-2 mt-4 w-full hover:bg-blue-600"
            >
              Login
            </button>

            <p className="mt-4">
              Not Registered Yet?{" "}
              <a href="/signup" className="text-blue-500">
                Register Here
              </a>
            </p>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Login;
