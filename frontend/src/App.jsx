// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// // import Contact from "./components/contact";
// import Home from "./home/home";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/contact" element={<Contact />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { Route, Routes } from "react-router-dom";
import After_login from "./components/after_login";
import Contact from "./components/contact";
import Govt_ser from "./components/govt_ser";
import Personal_ser from "./components/personal_ser";
import Signup from "./components/signup";
import Home from "./home/home";
function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/personal_ser" element={<Personal_ser />} />
      <Route path="/govt_ser" element={<Govt_ser />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/after_login" element={<After_login />} />
    </Routes>
    </div>
  );
}

export default App;

