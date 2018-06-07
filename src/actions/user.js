import API from '../githubAPI/response';
import get from '../githubAPI/request';

export const fetchSuccess = () => (dispatch) => {
    const text = document.getElementById('inputText');
    get.search(text.value)
        .then( (result) =>{
            API.getSuccess(result, dispatch)
        })
        .catch((err) => {
            API.getError(err, dispatch);
        });
};