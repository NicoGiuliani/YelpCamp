const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let campgrounds = [
		{name: "The Falls", image: "https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg"},
		{name: "Beacon Hill", image: "https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg"},
		{name: "Bowl and Pitcher", image: "https://farm5.staticflickr.com/4423/37232133702_342e447ccb.jpg"},
		{name: "Garden Springs", image: "https://farm5.staticflickr.com/4100/4798314980_bc31231984.jpg"},
		{name: "The Falls", image: "https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg"},
		{name: "Beacon Hill", image: "https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg"},
		{name: "Bowl and Pitcher", image: "https://farm5.staticflickr.com/4423/37232133702_342e447ccb.jpg"},
		{name: "Garden Springs", image: "https://farm5.staticflickr.com/4100/4798314980_bc31231984.jpg"}
	];

app.get("/", function(req, res) {
	res.render("landing");
});

app.get("/campgrounds", function(req, res) {
	

	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
	const name = req.body.name;
	const image = req.body.image;
	const newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
	res.render("new");
});

app.listen(8000, function() {
	console.log("it's connected");
});