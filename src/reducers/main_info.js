const initialState = {
    userImg: '',
    userName: '',
    userLogin: '',
    userBio: '',
    userBlog: '',
    userCompany: '',
    userLocation: '',
    userEmail: '',
    userSocial: ''
};

const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SUCCESS':
            console.log(action);
            return Object.assign({}, state, action.data );
        default: {
            return state;
        }
    }
};

export default userInfo;