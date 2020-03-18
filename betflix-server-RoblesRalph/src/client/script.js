const getMovieList = () => {
    // TODO: Call the API here

    var content = `
    <div w3-include-html="content.html"></div>
    `;

    return content.inneHTML;
    return [

        {"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"Toy Story","type":"movie","genres":["Adventure","Animated"],"videos":[{"title":"ToyStory1995","filename":"ToyStory1995.mp4"}]},
        {"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"A Bug's Life","type":"movie","genres":["Adventure","Animated"],"videos":[{"title":"ABugsLife1998","filename":"ABugsLife1998.mp4"}]},
        {"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"Toy Story 2","type":"movie","genres":["Adventure","Animated"],"videos":[{"title":"ToyStory21999","filename":"ToyStory21999.mp4"}]},
        {"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"Monsters, Inc.","type":"movie","genres":["Comedy","Animated"],"videos":[{"title":"MonstersInc2001","filename":"MonstersInc2001.mp4"}]},
        {"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"Finding Nemo","type":"movie","genres":["Adventure","Animated"],"videos":[{"title":"FindingNemo2003","filename":"FindingNemo2003.mp4"}]}
    ]
}

const movies = getMovieList()
const movieListElement = document.querySelector("#movie-list")

const moviesElements = movies.map(movie => {
    const text = movie.title
    const listItem = document.createElement('div')
    listItem.classList.add("movie-container")
    listItem.textContent = text

    return listItem
})

movieListElement.append(...moviesElements)