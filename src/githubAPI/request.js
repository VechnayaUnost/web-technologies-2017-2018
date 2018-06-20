const url = 'https://api.github.com/users/';

export default function request(uName) {
    return fetch(url+uName)
        .then(res => res.json());
}
