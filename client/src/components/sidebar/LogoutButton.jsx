import { MdOutlineLogout } from "react-icons/md";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <MdOutlineLogout
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;

// import { MdOutlineLogout } from "react-icons/md";

// const LogoutButton = () => {
//   return (
//     <div className="mt-auto">
//       <MdOutlineLogout className="w-6 h-6 text-white cursor-pointer" />
//     </div>
//   );
// };

// export default LogoutButton;
