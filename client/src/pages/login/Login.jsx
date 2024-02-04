import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="flex flex-clo items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> M.Talk</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">User name</span>
            </label>
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              className="input input-bordered input-primary w-full max-w-xs"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className="input input-bordered input-primary w-full max-w-xs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block cursor-pointer"
          >
            아이디가 없으신가요?!
          </Link>
          <div>
            <button
              className="input input-bordered input-primary w-full max-w-xs"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// const Login = () => {
//     return (
//       <div className="flex flex-clo items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//             Login
//             <span className="text-blue-500"> M.Talk</span>
//           </h1>

//           <form>
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">User name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="닉네임을 입력해주세요"
//                 className="input input-bordered input-primary w-full max-w-xs"
//               />
//             </div>

//             <div>
//               <label className="label">
//                 <span className="text-base label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="비밀번호를 입력해주세요"
//                 className="input input-bordered input-primary w-full max-w-xs"
//               />
//             </div>
//             <a
//               to="/signup"
//               className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block cursor-pointer"
//             >
//               아이디가 없으신가요?!
//             </a>
//             <div>
//               <button className="btn btn-block btn-sm mt-2">Login</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };

//   export default Login;
