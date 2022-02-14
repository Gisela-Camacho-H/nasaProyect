// ./src/components/Layout/index.js

import React from 'react';

import { Outlet, Link } from 'react-router-dom'
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor} from '@fortawesome/free-solid-svg-icons'
import { faUserAstronaut} from '@fortawesome/free-solid-svg-icons'
import { faRocket} from '@fortawesome/free-solid-svg-icons'

export default function Layout() {


	return (
		<>
		<header>
		<div className="header">
            <div className="logo">
                <img className="logoimg" src={logo}/>
            </div>
            <div className="nav">
			<nav className="navbar">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/photos">Photos</Link></li>
					<li><Link to="/mars">Mars</Link></li>
					<li><Link to="/solarsystem">Solar System</Link></li>
					<li><Link to="/blog">Blog</Link></li>
					<li><Link to="/game">Game</Link></li>
					<li><Link to="/login">Sign In</Link></li>
					<li><Link to="/signup">Sign Up</Link></li>
				</ul>
			</nav>
            </div>
    </div>
	</header>
	<Outlet />
	<footer>
        <div id="footer">
            <div>
                <br/><p><FontAwesomeIcon className="fas" icon={faUserAstronaut} /></p><br/>
                <h3>Astronauts</h3>
            </div>
            <div>
                <br/><p><FontAwesomeIcon className="fas" icon={faMeteor} /></p>
                <br/><h3>Meteors</h3>
            </div>
            <div>
                <br/><p><FontAwesomeIcon className="fas" icon={faRocket} /></p><br/>
                <h3>Rocket</h3>
            </div>
        </div>
        <br/>
        <p class="copy">Copyright ©Gisela Camacho 2021 Nasa Project </p>
    </footer>
	</>
	)
}