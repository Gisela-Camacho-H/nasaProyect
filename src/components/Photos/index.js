import React, {useEffect, useContext} from 'react';
import NasaContext from '../../context/Nasa/NasaContext';


export default function Photos() {

    const ctxNasa = useContext(NasaContext)
    const {getPhotoDay} = ctxNasa
    useEffect(()=>{
        getPhotoDay()
    },[])
    console.log(ctxNasa)

    return (
        <>
        <br/>
        <div className="titlePage">
            <h1>Picture of the day</h1>
        </div>
            <br/>
        <div className="container">
            <div>
                <br/>
                <h3 id="title">{ctxNasa.photoDay.title}</h3>
                <p id="description">{ctxNasa.photoDay.explanation}</p>
                <p id="date">{ctxNasa.photoDay.date}</p>
            </div>
            <div><img className="imagePhotoDay" src={ctxNasa.photoDay.url} alt="Nasa"/></div>
        </div>
    </>
    );
}
