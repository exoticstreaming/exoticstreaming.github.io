const movies = [
    {
        name: 'Avatar',
        thumbnail: 'thumbnails/Avatar.jpg',
        streamIframe: '<IFRAME SRC="https://a.iptvforyou.fr?file=eyJrZXkiOiJmaWxtcy9BdmF0YXIxLzAxLm1wNCIsImV4cGlyZSI6MTY3NDQ3NDY3ODI1MSwiaXAiOiIxOTYuNzUuMjA5Ljc2In0=&auth=36158cb89041b943bf30960acad774a0015295b2e3b52e4999fd96d50aca5b11" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }, {
        name: 'Avatar 2',
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
        streamIframe: '<IFRAME SRC="https://uqload.org/embed-wb7gbnwrzel4.html" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }, {
        name: 'Joker',
        thumbnail: 'thumbnails/joker.jpg',
        streamIframe: '<IFRAME SRC="https://a.iptvforyou.fr?file=eyJrZXkiOiJmaWxtcy9NYXJ2ZWwvSm9rZXIyMDE5LzAxLm1wNCIsImV4cGlyZSI6MTY3NDQ3NDAwNDgzNSwiaXAiOiIxOTYuNzUuMjA5Ljc2In0=&auth=7277253903ccb60f25fc41d556cf766af25f0a7fc50b09e4b20ff827fd554a1b" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }, {
        name: 'Troll',
        thumbnail: 'thumbnails/Troll.jpg',
        streamIframe: '<IFRAME SRC="https://a.iptvforyou.fr/?file=eyJrZXkiOiJmaWxtcy9Ucm9sbC8wMS5tcDQiLCJleHBpcmUiOjE2NzQ0NzMxOTIyNzIsImlwIjoiMTk2Ljc1LjIwOS43NiJ9&auth=4e87a73398710ebba3e6148680d06c6041ec81d68d63a95e192ff5ef955103db" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }, {
        name: 'Spider-Man No Way Home',
        thumbnail: 'thumbnails/Spidermannowayhome.jpg',
        streamIframe: '<IFRAME SRC="https://a.iptvforyou.fr/?file=eyJrZXkiOiJmaWxtcy9Ucm9sbC8wMS5tcDQiLCJleHBpcmUiOjE2NzQ0NzMxOTIyNzIsImlwIjoiMTk2Ljc1LjIwOS43NiJ9&auth=4e87a73398710ebba3e6148680d06c6041ec81d68d63a95e192ff5ef955103db" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }, {
        name: 'The Batman',
        thumbnail: 'thumbnails/Batman.jpg',
        streamIframe: '<IFRAME SRC="https://a.iptvforyou.fr?file=eyJrZXkiOiJmaWxtcy9NYXJ2ZWwvVGhlQmF0bWFuLzAxLm1wNCIsImV4cGlyZSI6MTY3NDQ3NTU1NzYwNywiaXAiOiIxOTYuNzUuMjA5Ljc2In0=&auth=d115e17aed9de2dea1908fdabc9a61df09905fa9985d2aecd1c667c547019975" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }, {
        name: 'Athena',
        thumbnail: 'thumbnails/Athena.jpg',
        streamIframe: '<IFRAME SRC="https://a.iptvforyou.fr?file=eyJrZXkiOiJmaWxtcy9BdGhlbmEyMDIyLzAxLm1wNCIsImV4cGlyZSI6MTY3NDU5MzM5NjU3MywiaXAiOiI0MS4yNDguMTQ4LjgwIn0=&auth=9e07d456626bf3f215c60dc470507cb0f7b3fbad3ab4be1359ce2435af8e5cbf" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }
    
]

let moviesElement = document.querySelector('#movies')
movies.forEach(movie => {
    moviesElement.innerHTML += `<a href='streams/${movie.name.replace(/ /g, "-").toLowerCase()}.html' class="movie"><div  class="movieName">${movie.name}</div><img width="250" height="340"src="${movie.thumbnail}" alt=""></a>`
})