import axios from 'axios';
import { useState } from 'react';
import Navbar from './navbar';

const Signup = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    aadhaar_number: '',
    pan_number: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Generate citizen_id based on name and random number for uniqueness
      const namePart = formData.full_name.toLowerCase().replace(/\s+/g, '').slice(0, 5);
      const randomPart = Math.floor(1000 + Math.random() * 9000);
      const citizen_id = `${namePart}${randomPart}`;

      const response = await axios.post('http://localhost:3000/api/users/register', {
        ...formData,
        citizen_id
      });

      if (response.data.success) {
        setSuccess(`Registration successful! Your Citizen ID is: ${citizen_id}. Please save this for login.`);
        // Clear form
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          aadhaar_number: '',
          pan_number: '',
          password: '',
        });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <>
    <Navbar />
      <div className="min-h-screen mt-20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-black rounded-2xl shadow-lg">
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit}>
              <h3 className="font-bold text-2xl sm:text-3xl text-center mb-6">Registration</h3>
              
              {error && <div className="text-red-500 text-center mb-4">{error}</div>}
              {success && <div className="text-green-500 text-center mb-4">{success}</div>}
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm sm:text-base mb-2">Name</p>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Enter your Full Name"
                    className="input input-bordered w-full text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <p className="text-sm sm:text-base mb-2">Email</p>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    className="input input-bordered w-full text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <p className="text-sm sm:text-base mb-2">Phone Number</p>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your Phone Number"
                    className="input input-bordered w-full text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <p className="text-sm sm:text-base mb-2">Aadhaar Number</p>
                  <input
                    type="text"
                    name="aadhaar_number"
                    value={formData.aadhaar_number}
                    onChange={handleChange}
                    placeholder="Enter your Aadhaar Number"
                    className="input input-bordered w-full text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <p className="text-sm sm:text-base mb-2">PAN Number</p>
                  <input
                    type="text"
                    name="pan_number"
                    value={formData.pan_number}
                    onChange={handleChange}
                    placeholder="Enter your PAN Number"
                    className="input input-bordered w-full text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <p className="text-sm sm:text-base mb-2">Your Password</p>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your Password"
                    className="input input-bordered w-full text-sm sm:text-base"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full text-sm sm:text-base mt-6">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
