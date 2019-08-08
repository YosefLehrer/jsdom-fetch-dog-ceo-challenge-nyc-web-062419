let x;
let y;
document.addEventListener("DOMContentLoaded", () => {
    console.log('%c HI', 'color: firebrick')
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            renderPics(myJson);
        })
        
    function renderPics(myJson) {
        x = myJson
        let dogBlock = document.querySelector("#dog-image-container")
        myJson.message.forEach(picInstance => {
            let pic = document.createElement("img")
            pic.setAttribute("src", `${picInstance}`);
            pic.setAttribute("width", "304");
            pic.setAttribute("height", "228");
            pic.style.borderRadius = "50%"
            pic.style.padding = "1%"
            pic.setAttribute("border-radius", "50%");
            dogBlock.appendChild(pic);
            console.log(picInstance)
        })
    }
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            renderBreeds(myJson);
        })
    const dogList = document.querySelector("#dog-breeds")
    function renderBreeds(myJson) {
        y = myJson
        Object.keys(y.message).forEach(function(breed_instance) {
            let breed = document.createElement("li")
            breed.setAttribute("id", `${breed_instance}`)
            breed.innerText = `${breed_instance}`
            dogList.append(breed)
        })
    }
    dogList.addEventListener('click', function(e) {
        let found = dogList.childNodes
        change = found.forEach(function(listItem){
            if (listItem.id === e.target.id) {
                listItem.setAttribute("style", "color:red; border: 2px solid blue;")
            }
        })
    })
    
    const notAFilter = document.querySelector("#breed-dropdown")
    notAFilter.addEventListener("change", function(s) {

    })
    
});




