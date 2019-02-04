(() => {
	// Variables First
	// 
	// set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	let dropZones = document.querySelectorAll('.drop-zone');

	// Functions in the middle
	function createPuzzlePieces(pictureIndex){
		// Generate puzzle pieces for left hand box
		//debugger;
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img draggable id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`;
				
			piecesBoard.innerHTML += newPuzzlePiece;
		});

		puzzleBoard.style.backgroundImage = `url(images/backGround${pictureIndex}.jpg)`;

		initDrag();
	}

	// DRAG AND DROP
	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {img.addEventListener("dragstart", function(e) {
			// e.preventDefault();
			console.log('dragging,,,,');
			// refference img being dragged
			e.dataTransfer.setData("text/plain", this.id)
		});
	});
	}

	// DRAG OVER and DROP ZONE
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e){
			e.preventDefault();
			console.log("drag over complete");
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("you dropped me");

			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));
		});
	})

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
