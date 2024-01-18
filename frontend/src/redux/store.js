import { createStore,combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { loadUnivReducer, loadUnivSingleReducer, registerUnivReducer,programLoadReducer } from './reducers/jobReducer';
import {
    allUserReducer,
    userApplyUnivReducer,
    userReducerLogout,
    userReducerProfile,
    userReducerSignIn,
    userReducerSignUp
} from './reducers/userReducer';
import { modeReducer } from './reducers/themeModeReducer';

//combine reducers
const reducer = combineReducers({
    loadUnivs: loadUnivReducer,
    signIn: userReducerSignIn,
    logOut: userReducerLogout,
    userProfile: userReducerProfile,
    singleUniv: loadUnivSingleReducer,
    userUnivApplication: userApplyUnivReducer,
    allUsers: allUserReducer,
    signUp: userReducerSignUp,
    mode: modeReducer,
    registerUniv: registerUnivReducer,
    programLoad: programLoadReducer
});


//initial state
let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : null
    },
    mode: {
        mode: "light"
    }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;