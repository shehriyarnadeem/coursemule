import React from "react";
import Link from "next/link";


const content = [
  // { name: "Categories", link: "/blogs", key: 1 },
  { name: "All Courses", link: "/courses", key: 4 },
];

function NavMenu({open}) {
  return (
    <div className={open ? "justify-between w-full md:flex md:w-[50%]  md:order-1":"hidden justify-between w-full md:flex md:w-[50%]  mt-[20px] md:order-1"}>
      <ul className="flex flex-col mb-3 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <Link href={`/allCourses`}>
              <li
                className="text-lg cursor-pointer font-poppins font-bold  "
              >
               <span className=" dark:text-dark text-light text-xl mb-4 dark:hover:text-white hover:text-blue-600">All Courses</span>
              </li>
            </Link>
      </ul>
    </div>
  );
}

export default NavMenu;
