/* eslint-disable react/prop-types */
// import logo from '../../images/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faX} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Header() {
    const [dropMenuStyle , setDropMenuStyle]= useState(true)
    
    // console.log(dropMenuStyle);
    
    function handelToggle() {
        setDropMenuStyle((e) => !e)
    }

    return (
        <div className="header">
            <div className="container">
                <Logo />
                <MenuList />
                <Button/>
                <div className="toggle-btn" onClick={handelToggle}>
                  {dropMenuStyle ? <FontAwesomeIcon icon={ faBars } /> : <FontAwesomeIcon icon={faX} />}  
                </div>
            </div>
            <div className='dropdown-menu'style={{ display: dropMenuStyle ? 'none' : 'block' }}>
                <ListItems className={'active'} name={'Home'} />
                <ListItems name={'Programs'} />
                <ListItems name={'Questions'} />
                <ListItems name={'Contact'} name2='' />
                <Button />
            </div>  
        </div>
    )
}

function Logo() {
    return(
        <div className="logo">
            <h1> <a href="">Gym<span>nastic</span></a></h1>
        </div>
    )
}
export function MenuList() {

    return(
        <ol className="list">
            <ListItems className={'active'} name={'Home'} />
            <ListItems name={'Programs'} />
            <ListItems name={'Questions'} />
            <ListItems name={'Contact'} />
        </ol>
    )
}

function ListItems({name,name2 , className}) {
    return(
        <li>
            <a href={`#${name}`} className={className}>{name}</a>
        </li>
    )
}

function Button() {
    return (
        <a href="#" className="action-btn">Get Started</a>  
    )
}