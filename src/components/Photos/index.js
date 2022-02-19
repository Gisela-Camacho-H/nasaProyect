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
        <div className="picOfDay">
            <h1>Picture of the day</h1>
        </div>
            <br/>
        <div class="container">
            <div>
                <br/>
                <h3>{ctxNasa.photoDay.title}</h3>
                <p>{ctxNasa.photoDay.explanation}</p>
                <p>{ctxNasa.photoDay.date}</p>
            </div>
            <div><img src={ctxNasa.photoDay.url}/></div>
        </div>
    </>
    );
}
