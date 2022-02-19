import React from 'react'

export default function SolarSystem() {
	return (
		<>
			<br/>
			<div class="search">
            <h1>Look for awesome pictures</h1>
            <br/>
            <br/>
            <input type="date" id="dateDay" name="dateDay" onchange="sendApiRequest(event);"/>
            <p id="description"></p>
            <img id="spacePic" src="" alt=""/>
        </div>
        <div class="container">
            <div>
                <br/>
                <h3 id="title"></h3>
                <br/>
                <p id="description1"></p>
                <p id="date"></p>
            </div>
            <div id="photo"></div>
        </div>
		</>

	)
}