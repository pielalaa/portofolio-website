// import { useState } from "react";

// const Catalog = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   const websites = [
//     { id: "0", name: " Education Portfolio", image: "/images/portofolio/portofolio 3.png" },
//     { id: "1", name: "Literacy Portfolio", image: "/images/portofolio/portofolio 4.png" },
//     { id: "2", name: "Creative Design Portfolio", image: "/images/portofolio/portofolio 5.png" },
//     { id: "3", name: "Personal Portofolio", image: "/images/portofolio/portofolio choi.png" },
//   ];

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
//         <h2 className="text-2xl font-bold mb-4 text-black">Daftar Website Kami</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {websites.map((website) => (
//             <div key={website.id} className="border p-2 rounded-lg">
//               <img
//                 src={website.image}
//                 alt={website.name}
//                 className="w-full h-40 object-cover rounded-md"
//               />
//               <h3 className="text-lg font-semibold text-black mt-2">{website.name}</h3>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={onClose}
//           className="mt-4 bg-[#d8b4fe] text-white px-4 py-2 rounded hover:bg-[#c084fc]"
//         >
//           Tutup
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Catalog;