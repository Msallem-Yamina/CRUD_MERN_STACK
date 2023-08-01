import { userConstants } from "../Actions/constantes";

const initialState = {
    users : [],
    error : null,
    createdUser : {},
    msg : ''
}

export default function userReducer (state = initialState, action) {
    switch (action.type) {
      
      // Actions Get All Users
        case userConstants.GET_ALL_USERS_REQUEST:
          return {
            ...state,
          };
        case userConstants.GET_ALL_USERS_SUCCESS:
          return {
            ...state,
            users: action.payload.users,
          };
        case userConstants.GET_ALL_USERS_FAILURE:
          return {
            ...state,
            error: action.payload.error,
          };

          // Actions Add User
          case userConstants.ADD_USER_REQUEST:
            return {
              ...state
            };
            case userConstants.ADD_USER_SUCCESS:
              return {
                ...state,
                createdUser: action.payload.addUser,
              };
            case userConstants.ADD_USER_FAILURE:
              return {
                ...state,
                createdUser: action.payload.error,
              };

          // Actions Delete User
          case userConstants.DELETE_USER_REQUEST:
            return {
              ...state
            };
            case userConstants.DELETE_USER_SUCCESS:
              return {
                ...state,
                msg: action.payload.msg
              };
            case userConstants.ADD_USER_FAILURE:
              return {
                ...state,
                error: action.payload.error
              };
          // Update User
          case userConstants.EDIT_USER_REQUEST:
            return {
              ...state,
            };
          case userConstants.EDIT_USER_SUCCESS:
            return {
              ...state,
              msg: action.payload.msg,
            };
          case userConstants.EDIT_USER_FAILURE:
            return {
              ...state,
              error: action.payload.error,
            };
        default:
          return state;
      }
}

