import { useNavigate } from "react-router-dom";

export default function Login({ loginUser }) {

  const navigate = useNavigate();

  const handleLogin = () => {
    loginUser();
    navigate("/");
  };

  return (
    <div className="text-center p-10">

      <h2 className="text-3xl font-bold mb-4">Login</h2>

      <input className="border p-2 m-2" placeholder="Email" /><br/>
      <input className="border p-2 m-2" placeholder="Password" /><br/>

      <button 
        onClick={handleLogin}
        className="bg-green-500 text-white px-5 py-2 rounded"
      >
        Login
      </button>

    </div>
  );
}
