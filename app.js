function PressEnter(your_text, your_event) {
    if(your_text != "" && your_event.keyCode == 13)
        search();
}

function search() {
    "use strict";
    fetch(`https://api.github.com/users/${document.getElementById('uname').value}`)
        .then(response =>
        {
            if (document.getElementById('err')) {
                document.getElementById('content').removeChild(document.getElementById('err'));
            }
            if (response.status >= 200 && response.status < 400)
                return response.json();
            else {
                const err = document.createElement('h1');
                err.innerText=`User with login ${document.getElementById('uname').value} does not exist`;
                document.getElementById('content').appendChild(err);
                err.id = 'err';
             }
        })
        .then((user) => {
            document.getElementById('uname').value = "";
            const cont = document.getElementById('content');
            if (document.getElementById('info')) {
                cont.removeChild(document.getElementById('info'));
            }
            const container = document.createElement('div');
            cont.appendChild(container);
            container.id = 'info';
            let elements = [document.createElement('img'), document.createElement('h1'),
                document.createElement('h2'), document.createElement('h3'), document.createElement('h3'),
                document.createElement('h4'), document.createElement('a'), document.createElement('a')];
            elements[0].src = user["avatar_url"];
            elements[1].innerText = user["name"];
            elements[2].innerText = user["login"];
            elements[3].innerText = user["bio"];
            elements[4].innerText = user["company"];
            elements[5].innerText = user["location"];
            elements[6].innerText = user["email"];
            elements[7].innerText = user["blog"];
            //console.log(container.childNodes);
            for(let m = 1; m < elements.length; m++){
                if(elements[m].innerText === ""){
                    elements.splice(m, 1);
                    m--;
                }
            }
           if (container.childNodes) {
               elements.map((item) => {
                   container.appendChild(item);
               });
           }
            else{
               while (container.firstChild)
                   container.removeChild(container.firstChild);
               elements.map((item) => {
                   container.appendChild(item);
               });
           }
        })
        .catch((response) => console.log(`Error with status: ${response.status}`));
}