const baseURL = 'https://ckx-movies-api.herokuapp.com/'

async function displayMovies() {
    let response = await axios.get(baseURL + 'movies');
    console.log(response.data);
    // document.querySelector('#results').innerHTML = ''
    for (let movie of response.data) {
        let html = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <ul>
              <li>Plot: ${movie.plot}</li>
          </ul>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        `;
        document.querySelector("#results").innerHTML += html;
    }
}
displayMovies();

function addOptions(selectElement, options) {
  for (let o of options) {
    let html = `<option value='${o.id}'>${o.name}</option>`;
    selectElement.innerHTML += html;
  }
}

let categorySelect = document.querySelector("#genre");
addOptions(categorySelect, genres);
let tagSelect=document.querySelector('#tag');
addOptions(tagSelect,tags)

function addMovie(){
    document.querySelector('#add-btn').addEventListener('click', async function(){
        let title=document.querySelector('#title').value
        let plot=document.querySelector('#plot').value
        


        // let tagId=document.querySelector('#tag').value
        // let selectedTags=tags[tagId-1]

        let payload={
            title:title,
            plot:plot,
            // genre:selectedGenre,
            // tag:selectedTags,
        }

        try{
            let response=await axios.post(baseURL + 'movie/create', payload);
            console.log(response)
        }
        catch (e){
            alert('Failed to add movie');
            console.log(e);
        }
    })
}
addMovie()
