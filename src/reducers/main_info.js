const initialState = {
    userImg: '',
    userName: '',
    userLogin: '',
    userBio: '',
    userCompany: '',
    userLocation: '',
    userEmail: '',
    userSocial: ''
};

const userInfo = (state = initialState, action) => {
    switch (action.type){
        case 'CHANGE_INPUT':
            return Object.assign({}, state, {inputValue: action.user});
        case 'ON_SUBMIT':
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};

export default userInfo;