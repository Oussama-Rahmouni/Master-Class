const author = document.getElementById('citation');
const quote = document.getElementById('quotee');



function GenererQuotes(){
    const apiUrl = 'https://api.meteo.io/$';
    
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data)=>{
        author.textContent = `${data.author}` ;
        quote.textContent = `${data.content}`;
    })
    .catch((e)=>{
        console.error('something wrong happend ',e)
        quote.textContent = 'this quote can t be loaded, something wrong happend';
        

    });

}

document.getElementById('Generer').addEventListener('click',GenererQuotes);