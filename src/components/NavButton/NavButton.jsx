import './NavButton.css';

// eslint-disable-next-line react/prop-types
const NavButton = ({symbol}) => {
  return (
    <div className="nav-button-container">
        <button className="nav-button">{symbol}</button>
    </div>
  )
}

export default NavButton