db.movies.insert([{title: 'Fight Club', writer: 'Chuck Palahniuk', year: 1999, actors: ['Brad Pitt', 'Edward Norton']}, {title: 'Pulp Fiction', writer: 'Quentin Tarantino', year: 1994, actors: ['John Travolta', 'Uma Thurman']}, {title: 'Inglorious Basterds', writer: 'Quentin Tarantino', year: 2009, actors: ['Brad Pitt', 'Diane Kruger', 'Eli Roth']}, {title: 'The Hobbit: An Unexpected Journey', writer: 'J.R.R. Tolkein', year: 2012, franchise: 'The Hobbit'}, {title: 'The Hobbit: The Desolation of Smaug', writer: 'J.R.R. Tolkein', year: 2013, franchise: 'The Hobbit'}, {title: 'The Hobbit: The Battle of the Five Armies', writer: 'J.R.R. Tolkein', year: 2012, franchise: 'The Hobbit', synopsis: 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness'}, {title: 'Pee Wee Herman\'s Big Adventure'}, {title: 'Avatar'}]);

db.movies.getCollection("movies");
db.movies.getCollectionNames();
db.movies.find({writer: "Quentin Tarantino"});
db.movies.find({writer: "J.R.R. Tolkein"});
db.movies.find({actors: "Brad Pitt"});
db.movies.find({franchise: "The Hobbit"});
db.movies.find({ $and: [{year: {$gt: 1900}}, {year: {$lt: 2000}}]});
db.movies.find({ $or: [{year: {$lt: 2000}}, {year: {$gt: 2010}}]});
db.movies.remove({_id: ObjectId("56bd6da8124fd6d523d6b58c")});
//used update() to add synopsis (not existing) to this movie
db.movies.update(
  {title: "The Hobbit: An Unexpected Journey"},
  {$set:
    {synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}
  });
db.movies.update({title: "Pulp Fiction"}, {$set:{actor: "Samuel L. Jackson"}})
