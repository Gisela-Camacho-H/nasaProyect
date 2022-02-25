import {useReducer} from 'react'
import NasaContext from './NasaContext'
import NasaReducer from './NasaReducer'
import axiosClient from '../../config/axios'


const NasaState = (props) => {

    const initialState = {
        photoDay: {
            copyright: "", 
            date: "", 
            explanation: "", 
            hdurl: "", 
            media_type: "", 
            service_version: "", 
            title: "", 
            url: ""
        }, 
        photoMars: {
            earth_date: "", 
            img_src: "",
        },
        selectedPhotoDay:{
            date: "", 
            explanation: "", 
            hdurl: "", 
            media_type: "", 
            service_version: "", 
            title: "", 
            url: ""
        }
    }
    const [globalState, dispatch] = useReducer(NasaReducer, initialState)

    const getPhotoDay = async() => {
            let apiKey = process.env.REACT_APP_APIKEY
            let response = await axiosClient.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            dispatch({
                type: "GET_PHOTO_DAY", payload: response.data
            })
            console.log(response)
        }

    const getSelectedPhotoDay = async() => {
        let apiKey = process.env.REACT_APP_APIKEY
        //let date =process.SolarSystem.index.dateDay
        let response = await axiosClient.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2020-01-01`);
        dispatch({
            type: "GET_SELECTED_PHOTO_DAY", payload: response.data
        })
        console.log(response)
    }

    const getMarsPhotos = async() => {
        let apiKey = process.env.REACT_APP_APIKEY
        //let date =process.SolarSystem.index.dateDay
        let response = await axiosClient.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`);
        dispatch({
            type: "GET_MARS_PHOTOS", payload: response.data
        })
        console.log(response)
    }


    return (
        <NasaContext.Provider
        value={{
            photoDay: globalState.photoDay,
            getPhotoDay
        ,
            selectedPhotoDay: globalState.selectedPhotoDay, 
            getSelectedPhotoDay,

            photoMars: globalState.photoMars,
            getMarsPhotos
        }}
        >
            {props.children}
        </NasaContext.Provider>
    )
}

export default NasaState