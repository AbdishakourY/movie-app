//javaScript

document.querySelector('#search').addEventListener("click", function () {
    alert("Button clicked");
    let userInput = document.querySelector(".search-box").value;

    fetch(`https://api.tvmaze.com/search/shows?q=${userInput}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // Assuming data is an array of shows
            // If not, adjust accordingly

            // Get the parent container for movie cards
            let moviesSection = document.querySelector('.movies-section');

            // Clear existing content in the moviesSection
            moviesSection.innerHTML = '';

            // Iterate through the data and create movie cards
            for (let i = 0; i < data.length; i++) {
                let show = data[i].show;

                // Create a new movie card div
                let newDiv = document.createElement('div');
                newDiv.className = 'movie-card';

                // Create movie image div and append to the movie card
                let movieImageDiv = document.createElement('div');
                movieImageDiv.className = 'movie-image';
                let image = document.createElement('img');
                image.src = show.image ? show.image.medium : 'placeholder-image-url'; // Use a placeholder if no image available
                image.alt = show.name;
                movieImageDiv.appendChild(image);

                // Create and append movie heading (title) to the movie card
                let movieHeading = document.createElement('h3');
                movieHeading.className = 'movie-heading';
                movieHeading.textContent = show.name;

                newDiv.appendChild(movieImageDiv);
                newDiv.appendChild(movieHeading);

                // Append the new movie card to the movies section
                moviesSection.appendChild(newDiv);
            }

            // Set background color and styles dynamically
            document.body.style.backgroundColor = '#f0f0f0'; // Set your desired background color
            moviesSection.style.display = 'flex';
            moviesSection.style.flexWrap = 'wrap';
            moviesSection.style.justifyContent = 'space-around';
            moviesSection.style.padding = '20px'; // Add padding as needed

            // Apply styles to each movie card
            let movieCards = document.querySelectorAll('.movie-card');
            movieCards.forEach(card => {
                card.style.width = '200px'; // Set a fixed width for each card, adjust as needed
                card.style.margin = '10px';
                card.style.padding = '15px';
                card.style.backgroundColor = '#fff'; // Set your desired background color for the cards
                card.style.border = '1px solid #ccc';
                card.style.boxSizing = 'border-box';
            });
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
});



// let shows = [{name:"Prison break"},{name:"Breaking Bad"},{name:"Suits"}]

// for(let i = 0;i< shows.length;i++){
//     console.log(shows[i].name)
//     //
    
    
// }