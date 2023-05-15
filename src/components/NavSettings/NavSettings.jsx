import FavButton from "../FavButton/FavButton"
import NavButton from "../NavButton/NavButton"
import './NavSettings.css'

const NavSettings = () => {
  return (
    <div className="n-container">
      <NavButton symbol={<>&#11164;</>}></NavButton>
      <FavButton/>
      <NavButton symbol={<>&#11166;</>}></NavButton>
    </div>
  )
}

export default NavSettings