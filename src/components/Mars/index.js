import React, {useEffect, useContext}  from 'react'
import NasaContext from '../../context/Nasa/NasaContext';

export default function Mars() {

    const ctxNasa = useContext(NasaContext)

    const {
        photoMars,
        getMarsPhotos
    } = ctxNasa

    useEffect(()=>{
        getMarsPhotos()
    },[])

	return (
		<>
        <br/><br/>
		<div className="titlePage">
            <h1>Picture of Mars</h1>
        </div>
			<br/>
        <div className="container1">

            {
                photoMars.map((elt) => {
                    return (
                        <div>
                            <br/>
                            <p className="dateMars">{elt.earth_date}</p>
                            <br/>
                            <figure>
                                <img className="photoMars" src={elt.img_src} alt="Nasa"/>
                            </figure>
                        </div>
                    )
                })
            }
          
           
           
        </div>
		</>
	)
}
//{ctxNasa.photoMars.photos[10].earth_date}
//{ctxNasa.photoMars.photos[10].img_src}