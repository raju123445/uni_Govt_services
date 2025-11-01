import { getUserSession } from '../utils/auth';
import Banner from "./banner";
import Footer from "./footer";
import Navbar from "./navbar";
import Ser_cards from "./ser_cards";

const after_login = () => {
  const userSession = getUserSession();
  
  // Print userSession object to console
  console.log('Current User Session:', userSession);
  
  // Redirect to home if not logged in
  if (!userSession?.isLoggedIn) {
    window.location.href = '/';
    return null;
  }

  return (
    <>
      <div className="after-login-container">
        {/* <div className="p-4 bg-base-100 mt-20">
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(userSession, null, 2)}
          </pre>
        </div> */}
        
        <Navbar 
          isLoggedIn={true} 
          userData={userSession?.user}
        />
        <Banner />
        <Ser_cards isLoggedIn={true}/>
        <br></br>
        <Footer />
      </div>
    </>
  );
};

export default after_login;
