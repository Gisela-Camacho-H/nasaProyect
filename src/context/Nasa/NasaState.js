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
        photoMars: [

        ],
        selectedPhotoDay:{
            
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


    return (
        <NasaContext.Provider
        value={{
            photoDay: globalState.photoDay,
            getPhotoDay
        }}
        >
            {props.children}
        </NasaContext.Provider>
    )
}

export default NasaState