window.addEventListener("load", function() {

  alert ("An Audio will be played in the background. Get your headphones!");
	let bg = document.getElementById("map");

	let map = document.getElementById("map").contentDocument;

	let loc1 = map.getElementById("button");
	loc1.addEventListener('click', () => {
    console.log("Play-Video is clicked");
    window.open("Main.html");
	})

  let bg2 = document.getElementById("map2");

	let map2 = document.getElementById("map2").contentDocument;

	let loc2 = map.getElementById("button");
	loc2.addEventListener('click', () => {
    console.log("Play-Video is clicked");
    window.open("Main.html");
	})


})
