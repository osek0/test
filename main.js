const url = "http://www.omdbapi.com/?apikey=";
const key = "f63ccd1d&t=";

const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");
/*const renderResponse = (resp) =>
{
    if(!resp)
    {
        console.log(resp.status);
    }
    const title = resp.Title;
    const plot = resp.Plot;
    const year = resp.Released;
    const poster = resp.Poster;
    film.innerHTML = `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${poster}/100px180/" alt="Film image">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${year}</h6>
    <p class="card-text">${plot}</p>
  </div>
</div>`;
return;
}*/
class Movie 
{
    constructor(resp) 
    {
        this._resp = resp;
        this._film = document.querySelector("#film");
    }
    renderResponse(resp) 
    {
        if (!resp) 
        {
            console.log(resp.status);
        }
        const title = resp.Title;
        const plot = resp.Plot;
        const year = resp.Released;
        const poster = resp.Poster;
        this._film.innerHTML += `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${poster}/100px180/" alt="Film image">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${year}</h6>
        <p class="card-text">${plot}</p>
        </div>
        </div>`;
        return;
    }
}
const getSuggestions = () =>
{
    const wordQuery = inputField.value;
    const endpoint = url + key + wordQuery;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        const r = new Movie(xhr.response);
        r.renderResponse(xhr.response);
        };
    };
xhr.open('GET', endpoint);
xhr.send();
}
const displaySuggestions = (event) => {
  event.preventDefault();
  getSuggestions();
}
submit.addEventListener("click", displaySuggestions);
