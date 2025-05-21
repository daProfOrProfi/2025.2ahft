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

function updateGame() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // let's handle the player
    player.dy += player.gravity;
    player.y += player.dy;

    if( player.y >=175 )
    {
        player.y = 25;
        player.dy = 0.0;
    }

    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y,player.width,player.height);

    requestAnimationFrame(updateGame);
}

updateGame();
