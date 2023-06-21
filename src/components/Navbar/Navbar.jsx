import './Navbar.css'
import React, { useState } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
	return (
		<>
			<header className={`navbar ${isVisible ? 'navbar_expand' : ''}`}>
				<h1 className='navbar_logo'>CINEFORUM</h1>
				<p>Seu forum de cinema</p>
				<div className={`navbar_items ${isVisible ? 'navbar_items_expand' : ''}`}>
					<p className='navbar_items_expand_btn'> TRENDING TOPICS</p>
					<p className='navbar_items_expand_btn'> RECENTES</p>
					<p className='navbar_items_expand_btn'> USUARIOS ONLINE</p>
					<p className='navbar_items_expand_btn'> GITHUB</p>
				</div>
				<button className='buttontext' onClick={toggleVisibility} >MENU</button>
			</header>
		</>
	)
}