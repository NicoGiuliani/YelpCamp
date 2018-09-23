const express = require("express");
const app = express();


app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("landing");
});

app.get("/campgrounds", function(req, res) {
	const campgrounds = [
		{name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f7c778a5ebbcb0_340.jpg"},
		{name: "Granite Hill", image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104496f7c778a5ebbcb0_340.jpg"},
		{name: "Mountain Goat's Rest", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104496f7c778a5ebbcb0_340.jpg"},
		{name: "The Falls", image: "https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg"},
		{name: "Beacon Hill", image: "https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg"},
		{name: "Bowl and Pitcher", image: "https://farm5.staticflickr.com/4423/37232133702_342e447ccb.jpg"},
		{name: "Garden Springs", image: "https://farm5.staticflickr.com/4100/4798314980_bc31231984.jpg"}
	];

	res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(7000, function() {
	console.log("it's connected");
});