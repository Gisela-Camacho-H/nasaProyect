import React, {useState, useEffect, useContext}  from 'react'
import NasaContext from '../../context/Nasa/NasaContext';

export default function SolarSystem() {

    const ctxNasa = useContext(NasaContext)

    const {getSelectedPhotoDay} = ctxNasa

    const [selectedDate, setSelectedDate] = useState("")

    const handleChange = (evt) => {
        
        return setSelectedDate(evt.target.value)

    }

    const evaluateMedia = (url) => {

        if(url.includes("youtube")){
            return (
                <>
                    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="788.54" height="443" type="text/html" src={url}><div><small><a href="https://youtubeembedcode.com/es/">youtubeembedcode es</a></small></div><div><small><a href="https://xn--bstautlndskacasino-ltbg.se/">https://xn--bstautlndskacasino-ltbg.se/</a></small></div><div><small><a href="https://youtubeembedcode.com/pl/">https://youtubeembedcode.com/pl/</a></small></div><div><small><a href="https://bestonlineauspokies.com/">https://bestonlineauspokies.com/</a></small></div></iframe>
                </>
            )
        }

        return (
            <>
                <img className="imagePhotoDay" src={url} alt="Nasa"/>
            </>
        )

    }


    useEffect(()=>{
        
        getSelectedPhotoDay(selectedDate)

    },[selectedDate])




    const {
        title,
        explanation,
        date,
        url
    } = ctxNasa.selectedPhotoDay


	return (
		<>
			<div class="search">
            <br/><br/>
	        <div className="titlePage">
            <h1>Look for awesome pictures</h1>
            </div>
            <br/>
            <br/>
            <input 
                type="date" 
                name="selectedDate" 
                onChange={(e) => { handleChange(e) }}
            />
        </div>
        <div className="container">
            <div>
                <br/>
                <h3 id="title">{title}</h3>
                <p id="description">{explanation}</p>
                <p id="date">{date}</p>
            </div>
            <div>
                {
                    evaluateMedia(url)
                }
            </div>
        </div>
		</>

	)
}