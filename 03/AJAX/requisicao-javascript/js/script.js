// **** CONSUMINDO UMA API COM JavaScipt**** 
const app = document.getElementById('root'); //precisa de um elemento comum para criar outros elementos dentro dele. elemento de ligação entre o js e o html
const container = document.createElement('div');

app.appendChild(container);

//neW === uma nova instância. Quando coloca o *new* vc está instânciando um novo obj. fazendo uma nova conexão pura. Fazer ele ser reconhecido no script nquele momento.
//criamos apara utilizar as API. ELe é o nosso AJAX.Vai fazer a comunicação entre a API(obj JSON) e o app. Abrindo possibilidades de https.

let request = new XMLHttpRequest();

//*true* eu quero que retorne dados
//open('metodo', 'api', 'booliano')
request.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
//toda requisição vai retornar um status code.
//tudo que utiliza https gera um status code.


//preparando para saber qual é a execução do que vou fazer na conexão.
request.onload = function () {
    console.log(this.response);//só para verificar
    let photos = JSON.parse(this.response);//ele transforma em algo manipulável.
    console.log(photos);
    //request.status ==> status code.
    if(request.status >= 200 && request.status < 400){
        photos.forEach((photo) => {
            const conteudo = document.createElement('div');
            conteudo.setAttribute('class', "photo" + photo.id);

            const h2 = document.createElement('h2');
            h2.textContent = photo.title;

            const img = document.createElement('img');
            img.setAttribute('src', photo.url);

            container.appendChild(conteudo);
            container.appendChild(h2);
            container.appendChild(img);
        });
    }else{
        const errorMessage = document.createElement('img');
        errorMessage.setAttribute('src', 'https://http.cat/' + request.status);
        app.appendChild(errorMessage);
    }

}

request.send();//vai executar o que o onload "pediu".


