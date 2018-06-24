const userUrl = 'https://api.github.com/users/';
const reposUrl = 'https://api.github.com/search/repositories?q=';

export function sendRequestUser(uName) {
    return fetch(userUrl + uName)
        .then(res => res.json());
}

export function sendRequestFollowers(login) {
    return fetch(userUrl + login + "/followers")
        .then(res => res.json())
}

export function sendRequestRepos(login) {
    return fetch(userUrl + login + "/repos")
        .then(res => res.json())
}

export function searchRepositoriesRequest(searchText) {
    return fetch(reposUrl + searchText)
        .then(res => res.json())
} 

export function searchBestReposRequest(searchParam) {
    console.log('searchParam')
    console.log(searchParam)
    if (searchParam === 'trending') {
        return fetch('https://api.github.com/search/repositories?q=trending%3A%3E0&sort=stars&per_page=5&since=weekly')
            .then(res => res.json());
    }
    if (searchParam === 'popular') {
        return fetch('https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=5')
            .then(res => res.json());
    }
} 
