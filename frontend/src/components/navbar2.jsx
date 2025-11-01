import { useEffect, useState } from "react";
import Login from "./login";

export default function Navbar({ isLoggedIn, userData }) {
  const [state, setState] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    localStorage.removeItem('userSession');
    window.location.href = '/';
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Clear previous highlights
    clearHighlights();

    if (query.length > 0) {
      // Find and highlight text in the document
      highlightText(query);
    }
  };

  // Function to clear previous highlights
  const clearHighlights = () => {
    const highlights = document.querySelectorAll('mark');
    highlights.forEach(highlight => {
      const parent = highlight.parentNode;
      parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
      parent.normalize();
    });
  };

  // Function to highlight matching text
  const highlightText = (query) => {
    const content = document.body;
    const walker = document.createTreeWalker(
      content,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    let node;
    while (node = walker.nextNode()) {
      const parent = node.parentNode;
      
      // Skip if parent is already a mark or if parent is a script/style tag
      if (parent.nodeName === 'MARK' || 
          parent.nodeName === 'SCRIPT' || 
          parent.nodeName === 'STYLE' ||
          parent.nodeName === 'INPUT' ||
          parent.nodeName === 'TEXTAREA') {
        continue;
      }

      const text = node.textContent;
      const regex = new RegExp(query, 'gi');
      
      if (regex.test(text)) {
        const markedText = text.replace(regex, match => `<mark class="bg-yellow-200">${match}</mark>`);
        const span = document.createElement('span');
        span.innerHTML = markedText;
        parent.replaceChild(span, node);
      }
    }
  };

  // Clear highlights when component unmounts
  useEffect(() => {
    return () => {
      clearHighlights();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setState(true);
      } else {
        setState(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <div>
    {isLoggedIn? 
     <div
     className={`navbar bg-base-100 shadow-sm max-w-screen-2xl container mx-0 md:px-17 px-4 fixed top-0 right-0 left-0 z-50 ${
       state ? "sticky-navbar shadow-md bg-base-300 duration-300 transition-all ease-in-out" : ""
     }`}
   >
     <div className="navbar-start">
       <div className="dropdown">
         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-5 w-5"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
           >
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
           </svg>
         </div>
         <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
           <li><a href="/">Home</a></li>
           <li>
             <a>Services</a>
             <ul className="p-2">
               <li><a href = "personal_ser">Personal Service</a></li>
               <li><a href = "govt_ser">Govt Service</a></li>
             </ul>
           </li>
           <li><a href="/contact">Contact</a></li>
         </ul>
       </div>
       <a className="btn btn-ghost text-xl md:ml-0 pl-0">Financial Management</a>
     </div>

     <div className="navbar-center hidden lg:flex">
       <ul className="menu menu-horizontal px-1">
         <li><a href="/">Home</a></li>
         <li>
           <details>
             <summary>Services</summary>
             <ul className="p-2">
               <li><a href = "personal_ser">Personal Service</a></li>
               <li><a href = "govt_ser">Govt Service</a></li>
             </ul>
           </details>
         </li>
         <li><a href="/contact">Contact</a></li>
       </ul>
     </div>

     <div className="navbar-end gap-2">
       <div className="form-control hidden md:block relative">
         <label className="input">
           <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
             <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
               <circle cx="11" cy="11" r="8"></circle>
               <path d="m21 21-4.3-4.3"></path>
             </g>
           </svg>
           <input 
             type="search" 
             className="grow" 
             placeholder="Search in page..." 
             value={searchQuery}
             onChange={handleSearch}
           />
         </label>
       </div>

       {isLoggedIn ? (
         <>
           <span className="mr-2">
             {userData?.citizen_id}
           </span>
           <a 
             className="bg-white h-9 text-black px-3 py-1.5 rounded-md hover:bg-blue-500 duration-300 cursor-pointer w-16 text-center"
             onClick={handleLogout}
           >
             Logout
           </a>
         </>
       ) : (
         <>
           <a 
             className="bg-white h-9 text-black px-3 py-1.5 rounded-md hover:bg-blue-500 duration-300 cursor-pointer w-16 text-center"
             onClick={() => document.getElementById("my_modal_2").showModal()}
           >
             Login
           </a>
           <Login />
         </>
       )}
     </div>
   </div> : <div>login first</div>}
   </div>
  );
}

