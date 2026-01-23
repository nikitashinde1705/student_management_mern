import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {logout} = useContext(AuthContext);

    return(
        <nav className='navbar navbar-light bg-light px-3'>

            <h3 className='navabar-brand'>Student Management</h3>

            <button onClick={logout} className='btn btn-danger'>Logout</button>

        </nav>
    )

}

export default Navbar;
