let itemOne = document.getElementById('flex-item-one');
let itemTwo = document.getElementById('flex-item-two');
let itemThree = document.getElementById('flex-item-three');
//let numberOfCardsInTheGame = document.getElementById('count');
//let numberOfWinnings = document.getElementById('streak');
//numberOfWinnings.innerHTML = numberOfWins;
const listOfColors = ['Amaranth', 'Amber', 'Amethyst', 'Apricot', 'Aquamarine', 'Azure', 'Baby', 'blue', 'Beige', 'Brick', 'red', 'Black', 'Blue', 'Blue-green', 'Blue-violet', 'Blush', 'Bronze', 'Brown', 'Burgundy', 'Byzantium', 'Carmine', 'Cerise', 'Cerulean', 'Champagne', 'Chartreuse', 'green', 'Chocolate', 'Cobalt', 'blue', 'Coffee', 'Copper', 'Coral', 'Crimson', 'Cyan', 'Desert', 'sand', 'Electric', 'blue', 'Emerald', 'Erin', 'Gold', 'Gray', 'Green', 'Harlequin', 'Indigo', 'Ivory', 'Jade', 'Jungle', 'green', 'Lavender', 'Lemon', 'Lilac', 'Lime', 'Magenta', 'Magenta', 'rose', 'Maroon', 'Mauve', 'Navy', 'blue', 'Ochre', 'Olive', 'Orange', 'Orange-red', 'Orchid', 'Peach', 'Pear', 'Periwinkle', 'Persian', 'blue', 'Pink', 'Plum', 'Prussian', 'blue', 'Puce', 'Purple', 'Raspberry', 'Red', 'Red-violet', 'Rose', 'Ruby', 'Salmon', 'Sangria', 'Sapphire', 'Scarlet', 'Silver', 'Slate', 'gray', 'Spring', 'bud', 'Spring', 'green', 'Tan', 'Taupe', 'Teal', 'Turquoise', 'Ultramarine', 'Violet', 'Viridian', 'White', 'Yellow']
const titleText = document.getElementById('title').innerHTML;
let numberOfWins = 0;
let numberOfLosses = 0;
let numberOfWinsDiv = document.getElementById('wins');
let numberOfLossesDiv = document.getElementById('losses');




const randomWinningColor = () => {
    randomNumber = Math.floor(Math.random() * 100) 
    const winnningColor = listOfColors[randomNumber];
    return winnningColor;
}

const generateRandomNumber = () => {
    generatedRandomNumber = Math.floor(Math.random() * 100);
    return generatedRandomNumber;
}

const changeColorFunction = (item) => {
    item.style.backgroundColor = listOfColors[generateRandomNumber()];
}

const isClicked = (container) => {
    if (container.style.backgroundColor === 'wheat') {
        return false;
    }
    else {
        return true;
    }
}

itemOne.onclick = () => {
    if(!isClicked(itemOne)) {
        changeColorFunction(itemOne);
        //numberOfCards--;
        determineTheWinner();
        countTheRemainingCards();
    }
}

itemTwo.onclick = () => {
    if(!isClicked(itemTwo)) {
        changeColorFunction(itemTwo);
        //numberOfCards--;
        determineTheWinner();
    }
}

itemThree.onclick = () => {
    if(!isClicked(itemThree)) {
        changeColorFunction(itemThree);
        //numberOfCards--;
        determineTheWinner();
        //numberOfCardsInTheGame.innerHTML = numberOfCards;        
    }
}
let messageBox = document.getElementById('messageBox');
let newElement = document.createElement('h5');
newElement.innerHTML = 'Play Again?';
newElement.id = 'archorElement';
newElement.style.textDecoration = 'underline';
newElement.style.cursor = 'pointer';
const determineTheWinner = () => {
    if (isClicked(itemOne) && isClicked(itemTwo) && isClicked(itemThree)) {
        let computerChosenColor = randomWinningColor();
        if (computerChosenColor === itemOne.style.backgroundColor || computerChosenColor === itemTwo.style.backgroundColor || computerChosenColor === itemThree.style.backgroundColor) {
          messageBox.innerHTML = 'You win';
          messageBox.appendChild(newElement);
          numberOfWins++;
          numberOfWinsDiv.innerHTML = numberOfWins;

        }
        else {
            numberOfLosses = numberOfLosses + 1;
            numberOfLossesDiv.innerHTML = numberOfLosses;
            messageBox.innerHTML = `You lose! The Winning Color was ${computerChosenColor}`;
            
            messageBox.appendChild(newElement);
            messageBox.style.width = '150px';
            messageBox.style.fontSize = '12px';
            if (computerChosenColor === 'black') {
                messageBox.style.color = 'white';
                messageBox.style.backgroundColor = black;
            }
            else {
                messageBox.style.backgroundColor = computerChosenColor;
            }

            let archorElement = document.getElementById('archorElement');
            archorElement.onclick = () => {
                messageBox.removeChild(newElement);
                resetTheGame();
                messageBox.innerHTML = 'Good Luck!';
            }

            
        }
    }
}


const resetTheGame = () => {
 itemOne.style.backgroundColor = 'wheat';
 itemTwo.style.backgroundColor = 'wheat';
 itemThree.style.backgroundColor = 'wheat'; 
 //numberOfCards = 3; 
 messageBox.style.width = '90px';
 messageBox.style.backgroundColor = 'orange';
 messageBox.style.color = 'black';
 messageBox.style.fontSize = '16px';
}








