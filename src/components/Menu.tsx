type MenuProps = {
    toggled: boolean;
    toggle: (isOpen: boolean) => void;
  };

const Menu: React.FC<MenuProps> = ({toggle}) => {
    const handleMenuClick = () => {
        toggle(false)
      }
      return (
        <div className='nav-menu'>
          <ul>
            <li className='cursor-pointer' onClick={() => handleMenuClick}>
                <a href='#' className="option-home">Home</a>
            </li>
            <li className='cursor-pointer' onClick={() => handleMenuClick}>
                <a href="#get-started" className="option-get-started">Get Started</a>
            </li>
          </ul>
        </div>
      )
}

export default Menu