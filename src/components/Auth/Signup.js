// ./components/Auth/Signup.js

import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/User/UserContext'

export default function Signup() {

	const ctx = useContext(UserContext)

	const { createUser } = ctx

	const [form, setForm] = useState({
		name: "",
		lastname: "",
		email: "",
		password: ""
	})


	const handleChange = (event) => {

		setForm({
			...form,
			[event.target.name]: event.target.value
		})

	}


	const handleSubmit = (event) => {

		event.preventDefault()

		createUser(form)

	}



	return (
		<>
			<br/>
			<h1>Create an Account</h1>
			<br/>
            <div className="formCreate">
			<br/>
            <input type="text" name="name" placeholder="User Name"/>
            <br/>
                <input type="text" name="lastname" placeholder="last Name"/>
            <br/>
                <input type="text" name="email" placeholder="E-mail"/>
            <br/>
                <input classNameName="password" type="password" name="password" placeholder="Password"/>
            <br/>
                <button className="register" type="submit">Create</button>
			</div>
		</>

	)
}