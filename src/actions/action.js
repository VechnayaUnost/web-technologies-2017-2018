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