export default function Filter({ region, setRegion }) {
    const options = ["", "Africa", "America", "Asia", "Europe", "Oceania"];
    const defaultOption = "Filter by Region";

    return (
        <>
            <select
                className="light-mode-elements cursor-pointer appearance-none rounded border border-gray-100 p-3 shadow hover:bg-gray-100 focus:outline-none dark:border-gray-900 dark:bg-gray-800 dark:shadow-gray-950 hover:dark:bg-gray-950"
                value={region}
                onChange={(e) => {
                    setRegion(e.target.value);
                }}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option || defaultOption}
                    </option>
                ))}
            </select>
        </>
    );
}

// import React from "react";
// import Select from "react-select";

// export default function Filter({ region, setRegion }) {
//     const options = [
//         { value: "", label: "Filter by Region" },
//         { value: "Africa", label: "Africa" },
//         { value: "America", label: "America" },
//         { value: "Asia", label: "Asia" },
//         { value: "Europe", label: "Europe" },
//         { value: "Oceania", label: "Oceania" },
//     ];

//     return (
//         <Select
//             className=" w-44 rounded border border-gray-100 shadow "
//             value={options.find((option) => option.value === region)}
//             onChange={(selectedOption) => setRegion(selectedOption.value)}
//             options={options}
//         />
//     );
// }

// import React, { useState } from "react";

// export default function Filter({ region, setRegion }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const options = ["", "Africa", "America", "Asia", "Europe", "Oceania"];

//   const handleOptionClick = (value) => {
//     setRegion(value);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative w-44 cursor-pointer">
//       <div
//         className="light-mode-elements rounded border border-gray-100 p-3 shadow"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {region || "Filter by Region"}
//       </div>

//       {isOpen && (
//         <div className="light-mode-elements absolute w-full rounded border border-gray-100 p-3 shadow ">
//           {options.map((option, index) => (
//             <div
//               key={index}
//               className="dropdown-item pb-2 pt-2"
//               onClick={() => handleOptionClick(option)}
//             >
//               {option || "Filter by Region"}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
