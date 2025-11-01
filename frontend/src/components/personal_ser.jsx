import Navbar from './navbar';
import SimpleSlider from './slide_banner';
const personal_ser = () => {
  const userSession = JSON.parse(localStorage.getItem('userSession'));
  if (!userSession?.isLoggedIn) {
    window.location.href = '/';
    return null;
  }
  return (
    <div>
     <Navbar isLoggedIn={true}/>
     <SimpleSlider />
    </div>
  )
}

export default personal_ser
