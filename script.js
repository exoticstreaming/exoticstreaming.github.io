const movies = [
    {
        name: 'Avatar',
        thumbnail: 'thumbnails/Avatar.jpg',
        streamIframe: '<IFRAME SRC="https://a.iptvforyou.fr?file=eyJrZXkiOiJmaWxtcy9BdmF0YXIxLzAxLm1wNCIsImV4cGlyZSI6MTY3NDU5Mzg3MjI2MSwiaXAiOiI0MS4yNDguMTQ4LjgwIn0=&auth=41df1bede78062d49c8d149e0ad4bb6b78204178a284df409c4c56fb699ea961" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }, {
        name: 'Avatar 2',
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
        streamIframe: '<IFRAME SRC="https://uqload.org/embed-wb7gbnwrzel4.html" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }, {
        name: 'Joker',
        thumbnail: 'thumbnails/joker.jpg',
        streamIframe: '<IFRAME SRC="https://a.iptvforyou.fr?file=eyJrZXkiOiJmaWxtcy9NYXJ2ZWwvSm9rZXIyMDE5LzAxLm1wNCIsImV4cGlyZSI6MTY3NDU5MzgxOTEwNywiaXAiOiI0MS4yNDguMTQ4LjgwIn0=&auth=d62eaa512164e43fa8eac146fcd5d4a8d1135415987cf0149c3e08b62f8d9b45" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }, {
        name: 'Troll',
        thumbnail: 'thumbnails/Troll.jpg',
        streamIframe: '<IFRAME SRC="https://a.iptvforyou.fr?file=eyJrZXkiOiJmaWxtcy9NYXJ2ZWwvU3BpZGVybWFuTm9XYXlIb21lLzAzLm1wNCIsImV4cGlyZSI6MTY3NDU5MzczMjg0NiwiaXAiOiI0MS4yNDguMTQ4LjgwIn0=&auth=f91e1831ce8f8d2ef81ba74574752186e782452ce39ec7ac11d17b421ba33a4c" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }, {
        name: 'Spider-Man No Way Home',
        thumbnail: 'thumbnails/Spidermannowayhome.jpg',
        streamIframe: '<IFRAME SRC="https://a.iptvforyou.fr?file=eyJrZXkiOiJmaWxtcy9NYXJ2ZWwvU3BpZGVybWFuTm9XYXlIb21lLzAzLm1wNCIsImV4cGlyZSI6MTY3NDU5MzczMjg0NiwiaXAiOiI0MS4yNDguMTQ4LjgwIn0=&auth=f91e1831ce8f8d2ef81ba74574752186e782452ce39ec7ac11d17b421ba33a4c" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }, {
        name: 'The Batman',
        thumbnail: 'thumbnails/Batman.jpg',
        streamIframe: '<IFRAME SRC="https://a.iptvforyou.fr?file=eyJrZXkiOiJmaWxtcy9NYXJ2ZWwvVGhlQmF0bWFuLzAxLm1wNCIsImV4cGlyZSI6MTY3NDU5MzY2MTUyNywiaXAiOiI0MS4yNDguMTQ4LjgwIn0=&auth=e03d1d1babecd44cfdb1a853971caa26894a277f28a1b3c45f68e85fae406fd3" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }, {
        name: 'Athena',
        thumbnail: 'thumbnails/Athena.jpg',
        streamIframe: '<IFRAME SRC="https://a.iptvforyou.fr?file=eyJrZXkiOiJmaWxtcy9BdGhlbmEyMDIyLzAxLm1wNCIsImV4cGlyZSI6MTY3NDU5MzM5NjU3MywiaXAiOiI0MS4yNDguMTQ4LjgwIn0=&auth=9e07d456626bf3f215c60dc470507cb0f7b3fbad3ab4be1359ce2435af8e5cbf" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }, {
        name: 'Teen Wolf',
        thumbnail: 'thumbnails/teenwolf.jpg',
        streamIframe: '<IFRAME SRC="https://filemoon.sx/e/fcd22wyclzkz?sub.info=https%3A%2F%2Fsoap2day.id%2Fajax%2Fepisode%2Fsubtitles%2F44ea41bb92e8390c445461c93b1e2915%3F" FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>'
    }
    
]

let moviesElement = document.querySelector('#movies')
movies.forEach(movie => {
    moviesElement.innerHTML += `<a href='streams/${movie.name.replace(/ /g, "-").toLowerCase()}.html' class="movie"><div  class="movieName">${movie.name}</div><img width="250" height="340"src="${movie.thumbnail}" alt=""></a>`
})