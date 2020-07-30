import React,  {useContext} from 'react'
import { HogwartsContext } from '../HogwartsContext'
import { NavLink } from 'react-router-dom'

export default function Nav (){
    const { hogwartsData } = useContext(HogwartsContext);
  
    return (
        <nav className='row space-around'>
        <ul className='row nav'>
        <li>
            <NavLink
            to='/'
            exact
            className='nav-link'
            activeClassName='active'>
                Sorting Hat
            </NavLink>
        </li>
        <li>
            <NavLink
            to='/common-room'
            className='nav-link'
            activeClassName='active'>
                {hogwartsData.house} Common Room
            </NavLink>
        </li>
        </ul>
    </nav>
  )
}
