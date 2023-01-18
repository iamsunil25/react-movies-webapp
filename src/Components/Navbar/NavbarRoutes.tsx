import React from "react";


import { Link, Router, useLocation } from 'react-router-dom'
import routesObj from "../../utility/RoutesObj";

export function NavbarRoutes(pathname:any) {

	
  return <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
	{routesObj.map((item:any)=>{

return <li key={item.to}>
          <Link to={item.to} className={`block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white  dark:hover:bg-gray-700 md:dark:hover:bg-transparent ${pathname.pathname===item.to ? "md:text-blue-700":""}` }>{item.routeName}</Link>
        </li>
})
	}
      </ul>
	  
    </div>;
}
// 