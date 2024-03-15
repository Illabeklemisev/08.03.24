function getRandomNumber(size) {
    let num = Math.floor(Math.random() * size);
    return num;
}

function getDistance(event, target) {
    const diffX = event.offsetX - target.x;
    const diffY = event.offsetY - target.y;
    const dist = Math.sqrt((diffX * diffX) + (diffY* diffY));
 return dist;
}

function getDistanceHint (distance) {
    if (distance < 10) {
        return "Пече!";
    } else if (distance < 20) {
        return "Дуже гаряче";
    } else if (distance < 40) {
        return "Гаряче";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Дуже холодно";
    } else {
        return "Можна замерзнути!";
    }
}

const width = 450;
const height = 400;
let click = 0;

const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

const mapElement = document.getElementById("map");
const ctx = mapElement.getContext("2d");

mapElement.addEventListener("click", (event) => {
    click++; 
    // console.log(click);

    const rect = mapElement.getBoundingClientRect();

    let posX = event.clientX - rect.left;
    let posY = event.clientY - rect.top;

    ctx.fillStyle = "#00ff00";

    ctx.beginPath();

    ctx.arc(posX, posY, 5, 0, 2 * Math.PI);

    ctx.fill()

    const distance = getDistance(event, target);
    const distanceHint = getDistanceHint(distance);

    const distancElement = document.getElementById("distance");
    distancElement.textContent = distanceHint;

    if (distance < 8 ) {
        alert("Yoa are win!")
    }
});
    
