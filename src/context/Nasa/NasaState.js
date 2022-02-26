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
        photoMars: [],
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

            let response = await axiosClient.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)

            dispatch({
                type: "GET_PHOTO_DAY", payload: response.data
            })
            
        }

    const getSelectedPhotoDay = async (date) => {
        
        let apiKey = process.env.REACT_APP_APIKEY
        
        let response = await axiosClient.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
        
        dispatch({
            type: "GET_SELECTED_PHOTO_DAY", payload: response.data
        })
        console.log(response)
    }

    const getMarsPhotos = async() => {
        
        let apiKey = process.env.REACT_APP_APIKEY
        
        let response = await axiosClient.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`);

        const arrMarsPhotos = response.data.photos.splice(0,3)        

        dispatch({
            type: "GET_MARS_PHOTOS", 
            payload: arrMarsPhotos
        })

    }


    return (
        <NasaContext.Provider
        value={{
            photoDay: globalState.photoDay,
            getPhotoDay,
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