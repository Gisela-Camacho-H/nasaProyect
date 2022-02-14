import {useReducer} from 'react'
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import axiosClient from '../../config/axios'


const UserState = (props) => {

    const initialState = {
        currentUser:{
            name: "",
            lastname: "",
            email: ""
        },
        authStatus: false,
    }
    const [globalState, dispatch] = useReducer(UserReducer, initialState)

    const createUser = async(dataForm) => {

        const res = await axiosClient.post("/api/users/create", dataForm)

        console.log(res)
    } 

    return (
        <UserContext.Provider
        value={{
            currentUser: globalState.currentUser,
            authStatus: globalState.authStatus,
            createUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState