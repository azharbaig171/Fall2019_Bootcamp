/* Add all the required libraries*/
mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
const util = require('util');
/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri);
var connection = mongoose.connection;

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({ code: 'LBW' }, function(err, listings) {
    if (err) throw err;
    console.log('Library West document: ');
    console.log(listings);
  });

};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.find({ code: 'CABL' }, function(err, listings) {
    if (err) throw err;
    console.log('Document to be deleted:');
    console.log(listings);
  });
  Listing.findOneAndDelete({ code: 'CABL' }, function(err,listings){
    if (err) throw err;
    console.log('Document sucessfully deleted!');
  });
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate({ address: '701 N Broadway, Sleepy Hollow, NY 10591, United States' }, { address: '1953 Museum Rd, Gainesville, FL 32603' }, function(err,listings){
    if (err) throw err;
    console.log('Updated the Phelps Laboratory Address');
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
  */
  Listing.find({}, function (err, listings) {
    if (err) throw err;
    console.log('All listings results: \n');
    console.log( util.inspect(listings, {maxArrayLength: null}));
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
