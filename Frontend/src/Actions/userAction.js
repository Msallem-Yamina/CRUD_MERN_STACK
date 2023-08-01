import axios from "axios";
import { userConstants } from "./constantes";

export const AllUsers = () =>{
    return async dispatch => {
        dispatch ({ type : userConstants.GET_ALL_USERS_REQUEST })
        
        try {
            const res = await axios.get('http://127.0.0.1:3000/user/allusers')
            if (res.status === 200){
                dispatch({ 
                    type : userConstants.GET_ALL_USERS_SUCCESS,
                    payload : { users : res.data }
                });
                
            }
        } catch (error) {
            dispatch({ 
                type : userConstants.GET_ALL_USERS_FAILURE,
                payload : { error : error.response }
            });
        }
    }
}

export const AddUser = (data) =>{
    return async dispatch => {
        dispatch ({ type : userConstants.ADD_USER_REQUEST })
        
        try {
            const res = await axios.post('http://127.0.0.1:3000/user/add', data)
            if (res.status === 200){
                dispatch({ 
                    type : userConstants.ADD_USER_SUCCESS,
                    payload : { userAdded : res.data }
                });
                
            }
        } catch (error) {
            dispatch({ 
                type : userConstants.ADD_USER_FAILURE,
                payload : { error : error.response }
            });
        }
    }
}

export const DeleteUser = (userId) =>{
    return async dispatch => {
        dispatch ({ type : userConstants.DELETE_USER_REQUEST })
        
        try {
            const res = await axios.delete(`http://127.0.0.1:3000/user/delete/${userId}`)
            if (res.status === 200){
                dispatch({ 
                    type : userConstants.DELETE_USER_SUCCESS,
                    payload : { message : res.data }
                });
                
            }
        } catch (error) {
            dispatch({ 
                type : userConstants.DELETE_USER_FAILURE,
                payload : { error : error.response }
            });
        }
    }
}

export const EditUser = (userId,data) =>{
    return async dispatch => {
        dispatch ({ type : userConstants.EDIT_USER_REQUEST })
        
        try {
            const res = await axios.put(`http://127.0.0.1:3000/user/${userId}/update`, data)
            if (res.status === 200){
                dispatch({ 
                    type : userConstants.EDIT_USER_SUCCESS,
                    payload : { message : res.data }
                });
                
            }
        } catch (error) {
            dispatch({ 
                type : userConstants.EDIT_USER_FAILURE,
                payload : { error : error.response }
            });
        }
    }
}