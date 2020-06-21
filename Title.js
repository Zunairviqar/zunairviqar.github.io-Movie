window.addEventListener("load", function() {

	let bg = document.getElementById("map");

	let map = document.getElementById("map").contentDocument;

	let loc1 = map.getElementById("button");
	loc1.addEventListener('click', () => {
    console.log("Play-Video is clicked");
    window.open("Main.html");
	})
})
