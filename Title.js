window.addEventListener("load", function() {

	let bg = document.getElementById("map");
	// let sound = document.getElementById("soundwave");
	// let button = document.getElementById("button");
	let map = document.getElementById("map").contentDocument;

	let loc1 = map.getElementById("button");
	// let transcript1 = document.getElementById("dialogue1");
	loc1.addEventListener('click', () => {
		// bg.style.opacity = '0.1';
		// transcript1.style.display = 'inline';
		// button.style.display = 'inline';
		// sound.style.opacity = '0.7'
		// audioPlayer('road.mp3', bg, transcript1, button, sound);
    console.log("working");
	})
})
