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

const Movie = {
		{"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"Toy Story","type":"movie","genres":["Adventure","Animated"],"videos":[{"title":"ToyStory1995","filename":"ToyStory1995.mp4"}]},
        {"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"A Bug's Life","type":"movie","genres":["Adventure","Animated"],"videos":[{"title":"ABugsLife1998","filename":"ABugsLife1998.mp4"}]},
        {"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"Toy Story 2","type":"movie","genres":["Adventure","Animated"],"videos":[{"title":"ToyStory21999","filename":"ToyStory21999.mp4"}]},
        {"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"Monsters, Inc.","type":"movie","genres":["Comedy","Animated"],"videos":[{"title":"MonstersInc2001","filename":"MonstersInc2001.mp4"}]},
        {"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"Finding Nemo","type":"movie","genres":["Adventure","Animated"],"videos":[{"title":"FindingNemo2003","filename":"FindingNemo2003.mp4"}]}

        var MovieSchema  = new mongoose.Schema({name: String});

        MovieSchema.methods.speak = function ()
        {
        	var title = this.name;
        		? "Title: " + this.name
        		: "An Animated Movie";
        	console.log(title);
        }

        var Movies = mongoose.model('Movies', MovieSchema);

        var ToyStory = new Movies({name: 'ToyStory1995'});
        console.log(ToyStory.name);

        ToyStory.save(function (err, ToyStory1995) {
    		if (err) return console.error(err);
    		ToyStory.speak();
  		});

		var ABugsLife1998 = new Movies({name: 'ABugsLife1998'});
        console.log(ABugsLife1998.name);

        ABugsLife1998.save(function (err, ABugsLife1998) {
    		if (err) return console.error(err);
    		ABugsLife1998.speak();
  		});

		var ToyStory21999= new Movies({name: 'ToyStory21999'});
        console.log(ToyStory21999.name);

        ToyStory21999.save(function (err, ToyStory21999) {
    		if (err) return console.error(err);
    		ToyStory21999.speak();
  		});

		var MonstersInc2001 = new Movies({name: 'MonstersInc2001'});
        console.log(MonstersInc2001.name);

        MonstersInc2001.save(function (err, MonstersInc2001) {
    		if (err) return console.error(err);
    		MonstersInc2001.speak();
  		});

		var FindingNemo2003 = new Movies({name: 'FindingNemo2003'});
        console.log(FindingNemo2003.name);

        FindingNemo2003.save(function (err, FindingNemo2003) {
    		if (err) return console.error(err);
    		FindingNemo2003.speak();
  		});

        Movies.find(function (err, movieslist) {
  		if (err) return console.error(err);
  		console.log(movieslist);
		});
}

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