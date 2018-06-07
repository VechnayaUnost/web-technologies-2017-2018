const getSuccess = (user, dispatch) => {
    dispatch({
        type: 'GET_SUCCESS',
        data: {
            userImg: user.avatar_url,
            userName: user.name,
            userLogin: user.login,
            userBio: user.bio,
            userCompany: user.company,
            userLocation: user.location,
            userEmail: user.email,
            userSocial: user.blog,

            followersUrl: user.followers_url,
            reposUrl: user.repos_url,
            organizationsUrl: user.organizations_url
        }
    })
};

const getError = (err, dispatch) => {
    if (err.message === 'GET_ERROR'){
        dispatch({
            type: 'GET_ERROR',
            isError: true,
            errName: '404 NOT FOUND'
        });
    }
    else{
        dispatch({
            type: 'SERVER_ERROR',
            isError: true,
            errName: 'There are some server errors'
        });
    }
};

const API = {
    getSuccess: getSuccess,
    getError: getError
};

export default API;