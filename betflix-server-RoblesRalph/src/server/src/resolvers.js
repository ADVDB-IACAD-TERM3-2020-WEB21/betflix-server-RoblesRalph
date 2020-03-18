// TODO: Import Mongoose here
// TODO: Connect to mongo here

// TODO: Replace `{}` with actual Movie model

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const Movie = {[
        {"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"Toy Story","type":"movie","genres":["Adventure","Animated"],"videos":[{"title":"ToyStory1995","filename":"ToyStory1995.mp4"}]},
        {"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"A Bug's Life","type":"movie","genres":["Adventure","Animated"],"videos":[{"title":"ABugsLife1998","filename":"ABugsLife1998.mp4"}]},
        {"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"Toy Story 2","type":"movie","genres":["Adventure","Animated"],"videos":[{"title":"ToyStory21999","filename":"ToyStory21999.mp4"}]},
        {"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"Monsters, Inc.","type":"movie","genres":["Comedy","Animated"],"videos":[{"title":"MonstersInc2001","filename":"MonstersInc2001.mp4"}]},
        {"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"Finding Nemo","type":"movie","genres":["Adventure","Animated"],"videos":[{"title":"FindingNemo2003","filename":"FindingNemo2003.mp4"}]}
    ]}

const getMovieList = async () => {
  return await Movie.find({})
}

const resolvers = {
    Query: {
      movies: async () =>  {
        const movieList = await getMovieList()
        return movieList
      }
    },
  };
  
export default resolvers;