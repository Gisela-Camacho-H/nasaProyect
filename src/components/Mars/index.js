import React, {useEffect, useContext}  from 'react'
import NasaContext from '../../context/Nasa/NasaContext';

export default function Mars() {

    const ctxNasa = useContext(NasaContext)
    const {getMarsPhotos} = ctxNasa
    useEffect(()=>{
        getMarsPhotos()
    },[])
    console.log(ctxNasa)


	return (
		<>
        <br/><br/>
		<div className="titlePage">
            <h1>Picture of Mars</h1>
        </div>
			<br/>
        <div className="container1">
            <div>
                <br/>
                <p className="dateMars">{ctxNasa.photoMars.photos[10].earth_date}</p>
                <br/>
                <div><img className="photoMars" src={ctxNasa.photoMars.photos[10].img_src} alt="Nasa"/></div>
            </div>
            <div>
                <br/>
                <p className="dateMars">{ctxNasa.photoMars.photos[0].earth_date}</p>
                <br/>
                <div><img className="photoMars"  src={ctxNasa.photoMars.photos[0].img_src}  alt="Nasa"/></div>
            </div>
            <div>
                <br/>
                <p className="dateMars">{ctxNasa.photoMars.photos[28].earth_date}</p>
                <br/>
                <div><img className="photoMars"  src={ctxNasa.photoMars.photos[28].img_src} alt="Nasa"/></div>
            </div>
        </div>
		</>
	)
}
//{ctxNasa.photoMars.photos[10].earth_date}
//{ctxNasa.photoMars.photos[10].img_src}