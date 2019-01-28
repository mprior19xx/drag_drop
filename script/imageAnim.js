(() => {
	// Variables First
	// 
	// set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	// Functions in the middle
	function createPuzzlePieces(pictureIndex){
		// Generate puzzle pieces for left hand box
		//debugger;
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`;
				
			piecesBoard.innerHTML += newPuzzlePiece;
		});

		puzzleBoard.style.backgroundImage = `url(images/backGround${pictureIndex}.jpg)`;
	}

	function resetPuzzlePieces() {
		// Swap all of the images when clicking on bottom buttons
		//Empty the thumbnail container
		piecesBoard.innerHTML = "";
		createPuzzlePieces(this.dataset.puzzleref);
	}

	// Event Handling at bottom
	puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces)); 
	
	createPuzzlePieces(0);
})();
