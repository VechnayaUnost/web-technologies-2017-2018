const url = 'https://api.github.com/users/';

function getInfo(uName) {
    const urlOfUser = url + uName;
    return request(urlOfUser);
}

function request(url) {
    return fetch(url)
        .then(response =>{
            if (response.status >= 200 && response.status < 400)
                return response.json();
            else throw new Error('ERROR!')
        })
}

function search(uName) {
    return getInfo(uName)
}

const get = {search};
export default get;