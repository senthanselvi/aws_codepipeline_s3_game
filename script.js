document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#game-board');
    const startButton = document.getElementById('start-game');
    const timerDisplay = document.getElementById('timer');
    const movesDisplay = document.getElementById('moves');
    const messageDisplay = document.getElementById('message');

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    const cardArray = [
        { name: 'card1', img: 'images/distracted.png' },
        { name: 'card1', img: 'images/distracted.png' },
        { name: 'card2', img: 'images/drake.png' },
        { name: 'card2', img: 'images/drake.png' },
        { name: 'card3', img: 'images/fine.png' },
        { name: 'card3', img: 'images/fine.png' },
        { name: 'card4', img: 'images/rollsafe.png' },
        { name: 'card4', img: 'images/rollsafe.png' },
        { name: 'card5', img: 'images/success.png' },
        { name: 'card5', img: 'images/success.png' },
    ];

    let moves = 0;
    const maxMoves = 15;
    let timeLeft = 60;
    let timer;
    let gameActive = false;

    function shuffle(array) {
        array.sort(() => 0.5 - Math.random());
    }

    function createBoard() {
        shuffle(cardArray);
        grid.innerHTML = '';
        cardsWon = [];
        cardsChosen = [];
        cardsChosenId = [];
        moves = 0;
        timeLeft = 60;
        gameActive = true;
        messageDisplay.textContent = '';

        movesDisplay.textContent = `Moves: 0 / ${maxMoves}`;
        timerDisplay.textContent = `Time Left: 60s`;

        clearInterval(timer);
        timer = setInterval(updateTimer, 1000);

        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard() {
        if (!gameActive) return;

        const cardId = this.getAttribute('data-id');
        if (!cardsChosenId.includes(cardId)) {
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);

            if (cardsChosen.length === 2) {
                moves++;
                movesDisplay.textContent = `Moves: ${moves} / ${maxMoves}`;
                setTimeout(checkForMatch, 500);
            }
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('#game-board img');
        const [firstId, secondId] = cardsChosenId;

        if (cardsChosen[0] === cardsChosen[1] && firstId !== secondId) {
            cards[firstId].style.visibility = 'hidden';
            cards[secondId].style.visibility = 'hidden';
            cards[firstId].removeEventListener('click', flipCard);
            cards[secondId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen[0]);
        } else {
            cards[firstId].setAttribute('src', 'images/blank.png');
            cards[secondId].setAttribute('src', 'images/blank.png');
        }

        cardsChosen = [];
        cardsChosenId = [];

        if (cardsWon.length === cardArray.length / 2) {
            endGame("🎉 Congratulations! You found all the pairs!");
        } else if (moves >= maxMoves) {
            endGame("❌ Move limit exceeded. Better luck next time!");
        }
    }

    function updateTimer() {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            endGame("⏳ Time's up! Better luck next time!");
        }
    }

    function endGame(message) {
        clearInterval(timer);
        gameActive = false;
        messageDisplay.textContent = message;
    }

    startButton.addEventListener('click', createBoard);
});
