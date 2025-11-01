import Banner from "../components/banner";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Ser_cards from "../components/ser_cards";
const home = () => {
  const isLoggedIn = localStorage.getItem("userSession") !== null;
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Banner />
      <Ser_cards />
      <br></br>
      <Footer />
    </>
  )
}

export default home
