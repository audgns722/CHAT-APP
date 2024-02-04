const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          } `}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
            className="checkbox border-black-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:black]"
          />
        </label>
      </div>

      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          } `}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
            className="checkbox border-black-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:black]"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

// const GenderCheckbox = () => {
//   return (
//     <div className="flex">
//       <div className="form-control">
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className="label-text">Male</span>
//           <input
//             type="checkbox"
//             className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
//           />
//         </label>
//       </div>

//       <div>
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className="label-text">Female</span>
//           <input
//             type="checkbox"
//             className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderCheckbox;
