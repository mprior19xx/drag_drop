(() => {
	// Select the elements that you want to work with
	let theButton = document.querySelector("#buttonHolder img");
	// window.addEventListener("load", changeHeaderText);

	// Functions go in the middle
	function changeHeaderText() {
		document.querySelector("h1").textContent="This was changed in Script";
		document.querySelector("p").textContent="Idk just google it bro";
	}

	// Event Handling goes at bottom
	theButton.addEventListener("click", changeHeaderText);

	// set up the puzzle pieces and boards
})();
