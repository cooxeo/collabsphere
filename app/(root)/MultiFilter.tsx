// 'use client'
// import React, { useEffect, useState } from "react";
// import { items } from "@/constants/items";
// import "./styles.css";
// import styles from "./MultiFilter.module.css";
// import Link from "next/link";

// export default function MultiFilters() {
//   const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
//   const [filteredItems, setFilteredItems] = useState(items);

//   let filters = ["Mongo DB", "Python", "Next-Js", "MERN"];

//   const handleFilterButtonClick = (selectedCategory: string) => {
//     if (selectedFilters.includes(selectedCategory)) {
//       let filters = selectedFilters.filter((el) => el !== selectedCategory);
//       setSelectedFilters(filters);
//     } else {
//       setSelectedFilters([...selectedFilters, selectedCategory]);
//     }
//   };

//   useEffect(() => {
//     filterItems();
//   }, [selectedFilters]);

//   const filterItems = () => {
//     if (selectedFilters.length > 0) {
//       let tempItems = selectedFilters.map((selectedCategory) => {
//         let temp = items.filter((item) => item.category === selectedCategory);
//         return temp;
//       });
//       setFilteredItems(tempItems.flat());
//     } else {
//       setFilteredItems([...items]);
//     }
//   };

//   return (
//     <div>
//       <div className="buttons-container">
//         {filters.map((category, idx) => (
//           <button
//             onClick={() => handleFilterButtonClick(category)}
//             className={`button ${
//               selectedFilters.includes(category) ? "active" : ""
//             }`}
//             key={`filters-${idx}`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="items-container">
//         {filteredItems.map((item, idx) => (
//           <div key={`items-${idx}`} className="item">
//             <p className="py-4">{item.name}</p>
//             <p className="category py-2">{item.category}</p>
//             <div className="mt-2 mb-2">
//               <button className="bg-slate-600 p-1 w-full text-center rounded-sm">
//                 <Link href={item.route}>View Project</Link>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import Link from 'next/link';

const linkItems = [
  { name: 'Mongo DB', href: '/components/mongodb' },
  { name: 'React', href: '/components/react' },
  { name: 'Next.js', href: '/components/nextjs' },
  { name: 'Node.js', href: '/' },
  { name: 'Express', href: '/' },
  { name: 'Tailwind CSS', href: '/components/tailwind' },
  { name: 'JavaScript', href: '/' },
  { name: 'TypeScript', href: '/' },
  { name: 'GraphQL', href: '/' },
  { name: 'Firebase', href: '/' },
  { name: 'Docker', href: '/' },
  { name: 'Kubernetes', href: '/' },
  { name: 'AWS', href: '/' },
  { name: 'Azure', href: '/' },
  { name: 'Vue.js', href: '/' },
  { name: 'Svelte', href: '/' },
  { name: 'Django', href: '/' },
  { name: 'Flask', href: '/' },
  { name: 'Ruby on Rails', href: '/' },
  { name: 'Bootstrap', href: '/' },
];

const MultiFilter = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {linkItems.map((item, index) => (
        <div key={index} className="bg-[#234e76a7] p-4 text-center rounded-md">
          <Link href={item.href} className="text-[#6994b8f4]">
            {item.name}
          </Link>
        </div>
      ))}
    </section>
  );
};

export default MultiFilter;
