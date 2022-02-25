// ./components/Auth/Signup.js

import React, { useState, useContext } from 'react'
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
			<div className="titlePage">
            <h1>Create an Account</h1>
        </div>
			<form onSubmit={(evt) => { handleSubmit(evt) }}>
			<br/>
            <div className="formCreate">
			<br/>
            <input type="text" name="name" id="name" value={form.name} onChange={ (evt) => { handleChange(evt) }} placeholder="User Name"/>
            <br/>
                <input type="text" name="lastname" id="lastname" value={form.lastname} onChange={ (evt) => { handleChange(evt) }}  placeholder="last Name"/>
            <br/>
                <input type="text" name="email" id="email" value={form.email} onChange={ (evt) => { handleChange(evt) }}  placeholder="E-mail"/>
            <br/>
                <input classNameName="password" type="password" name="password" id="password" value={form.password} onChange={ (evt) => { handleChange(evt) }}  placeholder="Password"/>
            <br/>
                <button className="register" type="submit">Create</button>
			</div>
			</form>
		</>

	)
}