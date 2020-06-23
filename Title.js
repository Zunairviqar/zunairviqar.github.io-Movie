// let bg2 = document.getElementById("map2").style.display = "none";
window.addEventListener("load", function() {

  alert ("An Audio will be played in the background. Get your headphones!");
	let bg = document.getElementById("map");

	let map = document.getElementById("map").contentDocument;

	let loc1 = map.getElementById("button");
	loc1.addEventListener('click', () => {
    console.log("Play-Video is clicked");
    window.open("Movie.html");
	});

  function checkReady() {
    var svg = document.getElementById("map2").getSVGDocument();
    if (svg == null) {
        console.log("Im in for")
        setTimeout("checkReady()", 300);
    }
    else {
      console.log("Im in else")
      let map2 = document.getElementById("map2").contentDocument;

      let loc2 = map2.getElementById("button2");
      loc2.addEventListener('click', () => {
        console.log("Play-Video on Phone is clicked");
        window.open("Movie.html");
      });
    }
}




});
