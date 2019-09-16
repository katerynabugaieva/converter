import * as React from 'react'
import './Header.css'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const Header = () => {
    return (
    <div className="header">
          <div className='title'>
            <MonetizationOnIcon/> 
            Currency Converter
          </div>
    </div>
    )
    }

    export default Header;