const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = {
    x: 50,
    y: 50,
    width:  25,
    height: 25,
    dy: 0,
    gravity: 0.4,
    jumpstrenght: -12
}

let obstacle = {
    x: 200,
    y: 160,
    width:  25,
    height: 40,
    speed: 4
}

addEventListener('keydown',function(event) {
    if(event.code === 'Space'){
        if( player.y > -player.jumpstrenght ){
            player.dy = player.jumpstrenght;
            player.y += player.dy;
        }else{

        };

    }
})

let score = 0;
let highscore = parseInt(localStorage.getItem('highscore')) || 0;

function updateScoreboard() {
    document.getElementById('scoreboard').textContent = `Punkte: ${score} | Highscore: ${highscore}`;
}

function updateGame() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // let's handle the player
    if( player.y < 175 ){
      player.dy += player.gravity;
      player.y += player.dy;
    }else{
        player.y = 175;
        player.dy = 0;
    }

    if( obstacle.x > 3 ){
        obstacle.x -= obstacle.speed;
    }else{
        // obstacle.x = canvas.width;
        obstacle.x = 400 + Math.random() * 200;
        // obstacle.speed = -3;
        // obstacle.x -= obstacle.speed;
        score += 1;
        updateScoreboard();
        if( obstacle.speed < 100 ){
            obstacle.speed += 0.5;
        }
    }

    if( player.x < obstacle.x + obstacle.width &&
        player.x + player.width > obstacle.x &&
        player.y < obstacle.y + obstacle.height &&
        player.y + player.height > obstacle.y
    ){
        alert('Game Over');
        obstacle.x = 400;
        score = 0;
        obstacle.speed = 3;
    }

    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y,player.width,player.height);

    ctx.fillStyle = 'blue';
    ctx.fillRect(obstacle.x, obstacle.y,obstacle.width,obstacle.height);

    requestAnimationFrame(updateGame);
}

updateGame();
