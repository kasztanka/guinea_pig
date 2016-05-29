$(gra);
function gra () {

var LAYERS_QUANTITY = 8;
var COLUMNS_NUM = 6;
var BACKGROUND_IMG = "background.png";

var COLUMN = {
    width: 84,
    height: 404,
    speed: 2,
    img: "column.png"
};

var GAME = {
    width: 700,
    height: 640
};

var HERO = {
    width: 110,
    height: 120,
    jump: 10,
    gravity: 0.5,
    img: "hero.png",
    img_dead: "hero_dead.png"
};


var gameDiv = document.getElementById("game_container");

var gameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = GAME.width;
        this.canvas.height = GAME.height;
        this.context = this.canvas.getContext("2d");
        gameDiv.removeChild(gameDiv.firstChild);
        gameDiv.appendChild(this.canvas);
        
        this.wait_for_start = 1;
        this.paused = 1;
        this.menu = 1;
        this.interval = setInterval(updateGameArea, 20);
        this.keyup_function = function (e) {
            switch(e.keyCode) {
                case 32: // space
                    gameArea.myHero.speed = -HERO.jump;
                    break;
                case 27: // escape
                    gameArea.myHero.x -= 60;
                    gameArea.paused = 1;
                    break;
            }
        };
        this.mouseup_function = function (e) {
            if (gameArea.wait_for_start) {
                gameArea.wait_for_start = 0;
                startGame();
            }
            gameArea.myHero.speed = -HERO.jump;
            gameArea.paused = 0;
        };
        window.addEventListener('keyup', this.keyup_function);
        gameDiv.addEventListener('mouseup', this.mouseup_function);
    }
};

function startGame() {
    gameArea.score = 0;
    gameArea.context.fillStyle = "white";
    
    
    gameArea.myHero = new sprite(
        HERO.width, HERO.height, HERO.img,
        GAME.width / 2 - HERO.width / 2,
        GAME.height / 2 - HERO.height / 2);
    gameArea.myHero.speed = 0;

    gameArea.dead_player = new sprite(
        HERO.width, HERO.height, HERO.img_dead,
        0, 0);
    gameArea.dead_player.speed = 0;

    gameArea.columns_up = new Array();
    gameArea.columns_down = new Array();
    
    for (var i = 0; i < COLUMNS_NUM; i++) {
        create_two_columns(gameArea.columns_up, gameArea.columns_down, i);
    }
    
    gameArea.background = new sprite(
        GAME.width, GAME.height, BACKGROUND_IMG, 0, 0);
    
    drawBackground(gameArea.background);
    drawColumns(gameArea.columns_up, gameArea.columns_down);
    drawPlayer(gameArea.myHero);
}

function sprite(width, height, image, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.img = document.createElement("img");
    this.img.src = STATIC_PATH_IMG + 'jumping_adventure/images/' + image;
}

function create_two_columns(columns_up, columns_down, num) {
    var img_up = "up_" + COLUMN.img;
    var img_down = "down_" + COLUMN.img;
    var x;
    var y_center;
    var gap;
    
    if (num == 0) x = GAME.width;
    else x = columns_up[num - 1].x + 200 + Math.random() * 100;
    y_center = GAME.height / 2 - 100 + Math.random() * 200;
    gap = 2 * HERO.height + Math.random() * 100;
    
    new_up_column = new sprite(
        COLUMN.width, COLUMN.height, img_up,
        x, y_center - gap / 2 - COLUMN.height);
    new_up_column.not_visited = 1;
    new_up_column.check_collision = 0;
    
    new_down_column = new sprite(
        COLUMN.width, COLUMN.height, img_down,
        x, y_center + gap / 2);
                            
    columns_up.push(new_up_column);
    columns_down.push(new_down_column);
}

function update_two_columns(columns_up, columns_down, num) {
    columns_up[num].x -= COLUMN.speed;
    columns_down[num].x -= COLUMN.speed;
    columns_up[num].check_collision = 0;
    if (columns_up[num].x < GAME.width / 2 && columns_up[num].not_visited) {
        columns_up[num].not_visited = 0;
        gameArea.score += 1;
    }
    
    if (gameArea.myHero.x + HERO.width > columns_up[num].x &&
        gameArea.myHero.x < columns_up[num].x + COLUMN.width) {
        columns_up[num].check_collision = 1;
    }
    
    if (columns_up[num].x < -COLUMN.width) { // == not visible on the screen
        var new_x;
        var prev_num;
        var y_center;
        var gap;
        
        columns_up[num].not_visited = 1;
        prev_num = (num + COLUMNS_NUM- 1) % COLUMNS_NUM;
        new_x = columns_up[prev_num].x + 150 + Math.random() * 100;
        
        y_center = GAME.height / 2 - 100 + Math.random() * 200;
        gap = 2 * HERO.height + Math.random() * 100;
        
        columns_up[num].x = new_x;
        columns_up[num].y = y_center - gap / 2 - COLUMN.height;
        columns_down[num].x = new_x;
        columns_down[num].y = y_center + gap / 2;
    }
}

function updateHero(hero) {
    hero.speed += HERO.gravity;
    hero.y += hero.speed;
    if (hero.x < GAME.width / 2 - HERO.width / 2) {
        hero.x += 1;
    }
    else if (hero.x > GAME.width / 2 - HERO.width / 2) {
        hero.x -= 1;
    }
}

function drawBackground(background) {
    gameArea.context.drawImage(background.img, background.x, background.y);
}

function drawPlayer(player) {
    if (player.speed >= 0) {
        gameArea.context.drawImage(player.img, 0, 0, // where to start clipping
            player.width, player.height, // width and height of clipped image
            player.x, player.y, // where to draw
            player.width, player.height); // size of clipped image
    }
    else {
        gameArea.context.drawImage(player.img, player.width, 0,
            player.width, player.height,
            player.x, player.y,
            player.width, player.height);
    }
    //gameArea.context.drawImage(player.img, player.x, player.y);
}

function drawColumns(columns_up, columns_down) {
    for (var i = 0; i < columns_up.length; i++) {
        gameArea.context.drawImage(columns_up[i].img, columns_up[i].x, columns_up[i].y);
        gameArea.context.drawImage(columns_down[i].img, columns_down[i].x, columns_down[i].y);
    }
}

function drawScore(score) {
    gameArea.context.fillText(String(gameArea.score), GAME.width / 2 - 20, 150);
}

function didCollide(column_up, column_down, player) {
    if (column_up.y + column_up.height > player.y ||
        column_down.y < player.y + player.height) {
        return 1;
    }
    return 0;
}

function checkCollisions(columns_up, columns_down, player) {
    for (var i = 0; i < COLUMNS_NUM; i++) {
        if (columns_up[i].check_collision) {
            if (didCollide(columns_up[i], columns_down[i], player)) {
                gameArea.game_over = 1;
            }
        }
    }
    if (player.y <= 0 || player.y >= GAME.height - HERO.height) {
        gameArea.game_over = 1;
    }
    if (gameArea.game_over) {
        gameArea.dead_player.y = player.y;
        gameArea.dead_player.x = player.x;
        gameArea.wait_for_start = 1;
        window.removeEventListener('keyup', gameArea.keyup_function);
        gameDiv.removeEventListener('mouseup', gameArea.mouseup_function);
        var state = sendScore(gameArea.score);
    }
}

function endGameAnimation(player) {
    drawBackground(gameArea.background);
    drawColumns(gameArea.columns_up, gameArea.columns_down);
    drawPlayer(gameArea.dead_player);
    drawScore(gameArea.score);
    
    updateHero(gameArea.dead_player);
    if (gameArea.dead_player.y > GAME.height) {
        gameArea.menu = 1;
        gameArea.game_over = 0;
        gameArea.paused = 1;
        window.addEventListener('keyup', gameArea.keyup_function);
        gameDiv.addEventListener('mouseup', gameArea.mouseup_function);
    }
}
    

function updateGameArea() {
    if (gameArea.menu) {
        gameArea.menu = 0;
        drawBackground(gameArea.background);
        gameArea.context.font = "45px LooseySans";
        gameArea.context.fillText("Jumping Adventure!", 20, 100);
        gameArea.context.font = "25px LooseySans";
        gameArea.context.fillText("Press mouse button to start.", 20, 300);
        gameArea.context.font = "95px LooseySans";
    }
    else if (gameArea.game_over) {
        endGameAnimation(gameArea.myHero);
    }
    else if (!gameArea.paused) {
        gameFrame();
    }
    
}

function gameFrame() {
    for (var i = 0; i < COLUMNS_NUM; i++) {
            update_two_columns(gameArea.columns_up, gameArea.columns_down, i);
        }
    updateHero(gameArea.myHero);
    
    drawBackground(gameArea.background);
    drawPlayer(gameArea.myHero);
    drawColumns(gameArea.columns_up, gameArea.columns_down);
    drawScore(gameArea.score);
    checkCollisions(gameArea.columns_up, gameArea.columns_down, gameArea.myHero);
}

gameArea.start();
startGame();

}
