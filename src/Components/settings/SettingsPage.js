import React from 'react'

import { Sidenav, Nav, Dropdown } from "rsuite";
import { AiOutlineSearch } from "react-icons/ai";
import { IoFilterSharp } from "react-icons/io5";
import { Checkbox } from 'rsuite';
import "rsuite/dist/rsuite.min.css";
import Profileofsettings from './Profileofsettings';

import SideNav from './SideNav';
const SettingsPage = () => {
  return (
    <>
    <div>
      <div>
        <SideNav />
        {/* <Profileofsettings/> */}
        
      </div>
        <h1>
          Hello Srijan
        </h1>
    </div>
    
    </>
  )
}

export default SettingsPage