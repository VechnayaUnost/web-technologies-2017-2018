"use strict";

const cont = document.getElementById('content');
const uname = document.getElementById('uname');

function PressEnter(your_text, your_event) {
    if(your_text != "" && your_event.keyCode == 13)
        search();
}

function getInfo(uName) {
    const url = 'https://api.github.com/users/' + uName;
    return request(url);
}

function request(url) {
    return fetch(url)
        .then(response =>{
            if (response.status >= 200 && response.status < 400)
                return response.json();
            else createError();
        })
}

function createError() {
    const err = document.createElement('h1');
    err.innerText=`User with login ${uname.value} does not exist`;
    cont.appendChild(err);
    err.id = 'err';
}

function create(element) {
    return document.createElement(element);
}

function add(container, element) {
    if (element.innerText!=="")
        return container.appendChild(element);
}

function appText(name, content) {
    if(!content)
        return name.innerText==null;
    name.innerText=content;
}

function appImg(name, content) {
    name.src=content;
}

function appLink(name, content) {
    if(!content)
        return name.innerText==null;
    name.innerText=content;
}

function clear(nameId) {
    if (document.getElementById(nameId))
        cont.removeChild(document.getElementById(nameId));
}

function createDiv(user) {
    uname.value = "";
    clear('info');
    const container = document.createElement('div');
    cont.appendChild(container);
    container.id = 'info';

    let avatar = create('img');
    let name = create('h1');
    let login = create('h2');
    let bio = create('h3');
    let company = create('h3');
    let location = create('h4');
    let email = create('a');
    let blog = create('a');
    let fragment = document.createDocumentFragment();

    appImg(avatar, user.avatar_url);
    appText(name, user.name);
    appText(login, user.login);
    appText(bio, user.bio);
    appText(company, user.company);
    appText(location, user.location);
    appLink(email, user.email);
    appLink(blog, user.blog);

    fragment.appendChild(avatar);
    add(fragment, name);
    add(fragment, login);
    add(fragment, bio);
    add(fragment, company);
    add(fragment, location);
    add(fragment, email);
    add(fragment, blog);
    add(container, fragment);
}

function search() {
    clear('err');
    getInfo(uname.value)
        .then((user) =>
            createDiv(user)
        )
        .catch((response) => console.log(`Error with status: ${response.status}`));
}