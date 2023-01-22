const movies = [
    {
        name: 'Avatar 2',
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
        streamIframe: '<IFRAME SRC="https://uqload.org/embed-wb7gbnwrzel4.html" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }, {
        name: 'Joker',
        thumbnail: '/thumbnails/joker.jpg',
        streamIframe: '<IFRAME SRC="https://uqload.org/embed-e36coucsd92j.html" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }
]

let moviesElement = document.querySelector('#movies')
movies.forEach(movie => {
    moviesElement.innerHTML += `<a href='/streams/${movie.name.replace(/ /g, "-").toLowerCase()}.html' class="movie"><div  class="movieName">${movie.name}</div><img width="250" height="340"src="${movie.thumbnail}" alt=""></a>`
})