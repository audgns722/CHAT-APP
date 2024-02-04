import { FcSearch } from "react-icons/fc";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-white-500 text-white">
        <FcSearch className="w-8 h-8 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

// import { FcSearch } from "react-icons/fc";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search…"
//         className="input input-bordered rounded-full"
//       />
//       <button type="submit" className="btn btn-circle bg-white-500 text-white">
//         <FcSearch className="w-8 h-8 outline-none" />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;
