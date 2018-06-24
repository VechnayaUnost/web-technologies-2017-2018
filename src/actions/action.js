import API from '../githubAPI/request';

export const fetchSuccess = (text) => (dispatch) => {
    return API(text)
        .then( (user) =>{
            dispatch(
                {
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
                }
            )
        })
};

export const fetchSuccessRepos = (responce) => (dispatch) => {
    if (responce.length === 0) {
        console.log("EMPTY");
        return dispatch(
            {
                type: 'RESPONCE_SUCCESS_REPOS_EMPTY',
            }
        )
    }
    const imageAr = [];
    const loginAr = [];

    responce.map(obj => {
        imageAr.push(obj.html_url);
        loginAr.push(obj.name);
    });
    return dispatch(
        {
            type: 'RESPONCE_SUCCESS_REPOS',
            data: {
                image: imageAr,
                login: loginAr,
            }
        }
    )
};

export const fetchSuccessFollowers = (responce) => (dispatch) => {
    console.log(responce);
    if (responce.length === 0) {
        console.log("EMPTY");
        return dispatch(
            {
                type: 'RESPONCE_SUCCESS_FOLLIWERS_EMPTY',
            }
        )
    }
    const imageAr = [];
    const loginAr = [];
    responce.map(obj => {
        imageAr.push(obj.avatar_url);
        loginAr.push(obj.login);
    });

    return dispatch(
        {
            type: 'RESPONCE_SUCCESS_FOLLOWERS',
            data: {
                image: imageAr,
                login: loginAr,
            }
        }
    )
};