import React from 'react'

export default function Signin() {
	return (
		<>
		<br/>
		<div className="titlePage">
            <h1>Sign In</h1>
        </div>
		<br/>
		<div className="formCreate1">
			<br/>
			<input className="input" type="text" name="email" placeholder="E-mail"/>
			<br/>
			<input className="input" type="password" name="password" placeholder="Password"/>
			<br/>
			<button className="login" type="submit">Sign In</button>
		</div>
		</>

	)
}