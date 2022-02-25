import React, {useEffect, useContext}  from 'react'
import NasaContext from '../../context/Nasa/NasaContext';

export default function SolarSystem() {

    const ctxNasa = useContext(NasaContext)
    const {getSelectedPhotoDay} = ctxNasa
    useEffect(()=>{
        getSelectedPhotoDay()
    },[])
    console.log(ctxNasa)
	return (
		<>
			<div class="search">
            <br/><br/>
	        <div className="titlePage">
            <h1>Look for awesome pictures</h1>
            </div>
            <br/>
            <br/>
            <input type="date" id="dateDay" name="dateDay" onchange="sendApiRequest(event);"/>
        </div>
        <div className="container">
            <div>
                <br/>
                <h3 id="title">{ctxNasa.selectedPhotoDay.title}</h3>
                <p id="description">{ctxNasa.selectedPhotoDay.explanation}</p>
                <p id="date">{ctxNasa.selectedPhotoDay.date}</p>
            </div>
            <div><img className="imagePhotoDay" src={ctxNasa.selectedPhotoDay.url} alt="Nasa"/></div>
        </div>
		</>

	)
}