import React, { useState, useEffect, useContext } from 'react';

import CommentContext from "../../context/Comment/CommentContext"

export default function Blog() {

	const ctxComments = useContext(CommentContext)

	const {
		comments,
		getAllComments,
		createComment
	} = ctxComments


	const [data, setData] = useState({
		title: "",
		description: ""
	})

	const [error, setError] = useState("")

	useEffect(() => {
		getAllComments()
	}, []) 


	const handleChange = (event) => {


		setData({
			...data,
			[event.target.name]: event.target.value
		})

	}

	const handleSubmit = (event) => {


		event.preventDefault()
		

		if(!data.title || !data.description ){

			return setError("Tienes campos vacíos.")

		}

		createComment(data)

		setData({
			title: "",
			description: ""
		})

		return setError("")

	}


    return (
		<>
		<br/>
		<h1>Sección de comentarios</h1>

<form id="commentForm" onSubmit={ (evt) => { handleSubmit(evt) } }>
	<br/>
	<div class="">
    <input type="text" name="title" id="title" className="titleBlog" placeholder="Title" 
	value={data.title}
	onChange={ (evt) => { handleChange(evt) } }/>
	<br/>
    <div><textarea rows="2" name="description" id="description" className="descriptionBlog" placeholder="Write a description..."
	value={data.description}
	onChange={ (evt) => { handleChange(evt) } }></textarea></div>
		<div class="">
			<button type="submit" id="createButton" className="createBlog">Create</button>
		</div>
	</div>
</form>
		

		{ error ? error : null }

		<br/>
		<br/>
		<hr/>
		<br/>
		<h2>Comments</h2>

		<ul>
			{
				comments.map((e, index) => {
					return (
						<li key={index}>
							<h3>{e.title}</h3>
							<p>{e.description}</p>
						</li>
					)
				})
			}
		</ul>

	</>
    )
}