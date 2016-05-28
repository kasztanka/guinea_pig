
// ***** ROTATIONS ******

(function(k){for(var d,f,l=document.getElementsByTagName("head")[0].style,h=["transformProperty","WebkitTransform","OTransform","msTransform","MozTransform"],g=0;g<h.length;g++)void 0!==l[h[g]]&&(d=h[g]);d&&(f=d.replace(/[tT]ransform/,"TransformOrigin"),"T"==f[0]&&(f[0]="t"));eval('IE = "v"=="\v"');jQuery.fn.extend({rotate:function(a){if(0!==this.length&&"undefined"!=typeof a){"number"==typeof a&&(a={angle:a});for(var b=[],c=0,d=this.length;c<d;c++){var e=this.get(c);if(e.Wilq32&&e.Wilq32.PhotoEffect)e.Wilq32.PhotoEffect._handleRotation(a);
else{var f=k.extend(!0,{},a),e=(new Wilq32.PhotoEffect(e,f))._rootObj;b.push(k(e))}}return b}},getRotateAngle:function(){for(var a=[],b=0,c=this.length;b<c;b++){var d=this.get(b);d.Wilq32&&d.Wilq32.PhotoEffect&&(a[b]=d.Wilq32.PhotoEffect._angle)}return a},stopRotate:function(){for(var a=0,b=this.length;a<b;a++){var c=this.get(a);c.Wilq32&&c.Wilq32.PhotoEffect&&clearTimeout(c.Wilq32.PhotoEffect._timer)}}});Wilq32=window.Wilq32||{};Wilq32.PhotoEffect=function(){return d?function(a,b){a.Wilq32={PhotoEffect:this};
this._img=this._rootObj=this._eventObj=a;this._handleRotation(b)}:function(a,b){this._img=a;this._onLoadDelegate=[b];this._rootObj=document.createElement("span");this._rootObj.style.display="inline-block";this._rootObj.Wilq32={PhotoEffect:this};a.parentNode.insertBefore(this._rootObj,a);if(a.complete)this._Loader();else{var c=this;jQuery(this._img).bind("load",function(){c._Loader()})}}}();Wilq32.PhotoEffect.prototype={_setupParameters:function(a){this._parameters=this._parameters||{};"number"!==
typeof this._angle&&(this._angle=0);"number"===typeof a.angle&&(this._angle=a.angle);this._parameters.animateTo="number"===typeof a.animateTo?a.animateTo:this._angle;this._parameters.step=a.step||this._parameters.step||null;this._parameters.easing=a.easing||this._parameters.easing||this._defaultEasing;this._parameters.duration=a.duration||this._parameters.duration||1E3;this._parameters.callback=a.callback||this._parameters.callback||this._emptyFunction;this._parameters.center=a.center||this._parameters.center||
["50%","50%"];this._rotationCenterX="string"==typeof this._parameters.center[0]?parseInt(this._parameters.center[0],10)/100*this._imgWidth*this._aspectW:this._parameters.center[0];this._rotationCenterY="string"==typeof this._parameters.center[1]?parseInt(this._parameters.center[1],10)/100*this._imgHeight*this._aspectH:this._parameters.center[1];a.bind&&a.bind!=this._parameters.bind&&this._BindEvents(a.bind)},_emptyFunction:function(){},_defaultEasing:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-
1)+c},_handleRotation:function(a,b){d||this._img.complete||b?(this._setupParameters(a),this._angle==this._parameters.animateTo?this._rotate(this._angle):this._animateStart()):this._onLoadDelegate.push(a)},_BindEvents:function(a){if(a&&this._eventObj){if(this._parameters.bind){var b=this._parameters.bind,c;for(c in b)b.hasOwnProperty(c)&&jQuery(this._eventObj).unbind(c,b[c])}this._parameters.bind=a;for(c in a)a.hasOwnProperty(c)&&jQuery(this._eventObj).bind(c,a[c])}},_Loader:function(){return IE?function(){var a=
this._img.width,b=this._img.height;this._imgWidth=a;this._imgHeight=b;this._img.parentNode.removeChild(this._img);this._vimage=this.createVMLNode("image");this._vimage.src=this._img.src;this._vimage.style.height=b+"px";this._vimage.style.width=a+"px";this._vimage.style.position="absolute";this._vimage.style.top="0px";this._vimage.style.left="0px";this._aspectW=this._aspectH=1;this._container=this.createVMLNode("group");this._container.style.width=a;this._container.style.height=b;this._container.style.position=
"absolute";this._container.style.top="0px";this._container.style.left="0px";this._container.setAttribute("coordsize",a-1+","+(b-1));this._container.appendChild(this._vimage);this._rootObj.appendChild(this._container);this._rootObj.style.position="relative";this._rootObj.style.width=a+"px";this._rootObj.style.height=b+"px";this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;for(this._eventObj=this._rootObj;a=this._onLoadDelegate.shift();)this._handleRotation(a,
!0)}:function(){this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;this._imgWidth=this._img.naturalWidth;this._imgHeight=this._img.naturalHeight;var a=Math.sqrt(this._imgHeight*this._imgHeight+this._imgWidth*this._imgWidth);this._width=3*a;this._height=3*a;this._aspectW=this._img.offsetWidth/this._img.naturalWidth;this._aspectH=this._img.offsetHeight/this._img.naturalHeight;this._img.parentNode.removeChild(this._img);this._canvas=document.createElement("canvas");
this._canvas.setAttribute("width",this._width);this._canvas.style.position="relative";this._canvas.style.left=-this._img.height*this._aspectW+"px";this._canvas.style.top=-this._img.width*this._aspectH+"px";this._canvas.Wilq32=this._rootObj.Wilq32;this._rootObj.appendChild(this._canvas);this._rootObj.style.width=this._img.width*this._aspectW+"px";this._rootObj.style.height=this._img.height*this._aspectH+"px";this._eventObj=this._canvas;for(this._cnv=this._canvas.getContext("2d");a=this._onLoadDelegate.shift();)this._handleRotation(a,
!0)}}(),_animateStart:function(){this._timer&&clearTimeout(this._timer);this._animateStartTime=+new Date;this._animateStartAngle=this._angle;this._animate()},_animate:function(){var a=+new Date,b=a-this._animateStartTime>this._parameters.duration;if(b&&!this._parameters.animatedGif)clearTimeout(this._timer);else{if(this._canvas||this._vimage||this._img)a=this._parameters.easing(0,a-this._animateStartTime,this._animateStartAngle,this._parameters.animateTo-this._animateStartAngle,this._parameters.duration),
this._rotate(~~(10*a)/10);this._parameters.step&&this._parameters.step(this._angle);var c=this;this._timer=setTimeout(function(){c._animate.call(c)},10)}this._parameters.callback&&b&&(this._angle=this._parameters.animateTo,this._rotate(this._angle),this._parameters.callback.call(this._rootObj))},_rotate:function(){var a=Math.PI/180;return IE?function(a){this._angle=a;this._container.style.rotation=a%360+"deg";this._vimage.style.top=-(this._rotationCenterY-this._imgHeight/2)+"px";this._vimage.style.left=
-(this._rotationCenterX-this._imgWidth/2)+"px";this._container.style.top=this._rotationCenterY-this._imgHeight/2+"px";this._container.style.left=this._rotationCenterX-this._imgWidth/2+"px"}:d?function(a){this._angle=a;this._img.style[d]="rotate("+a%360+"deg)";this._img.style[f]=this._parameters.center.join(" ")}:function(b){this._angle=b;b=b%360*a;this._canvas.width=this._width;this._canvas.height=this._height;this._cnv.translate(this._imgWidth*this._aspectW,this._imgHeight*this._aspectH);this._cnv.translate(this._rotationCenterX,
this._rotationCenterY);this._cnv.rotate(b);this._cnv.translate(-this._rotationCenterX,-this._rotationCenterY);this._cnv.scale(this._aspectW,this._aspectH);this._cnv.drawImage(this._img,0,0)}}()};IE&&(Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{return!document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(a){return function(a){return document.createElement("<"+
a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}())})(jQuery);


//********************** GHOST MOVES **************************

function makeMove(ghostNumber) {
    var positionX, positionY, lenNeighbours, i, neighbours = [];
    GHOSTS[ghostNumber].moves[0] *= (-1);
    GHOSTS[ghostNumber].moves[1] *= (-1);
    positionX = (GHOSTS[ghostNumber].x - MAZE_START_WIDTH) / SCALE;
    positionY = (GHOSTS[ghostNumber].y - MAZE_START_HEIGHT) / SCALE;
    lenNeighbours = findNeighbours(neighbours, positionY, positionX, GHOSTS[ghostNumber].moves);
    switch (lenNeighbours) {
        case 0:
            break;
        case 1:
            for (i = 0; i < 2; i++) {
                if (GHOSTS[ghostNumber][0] != neighbours[i][0] || GHOSTS[ghostNumber][1] != neighbours[i][1]) {
                    GHOSTS[ghostNumber].moves[0] = neighbours[i][0];
                    GHOSTS[ghostNumber].moves[1] = neighbours[i][1];
                    break;
                }
            }
            break;
        default:
            var target, minDistance, minIndex, distance, newPositionY, newPositionX;
            target = [];
            minDistance = 1000;
            minIndex = 0;
            if (GHOSTS[ghostNumber].mode == 2 && !(GHOSTS[ghostNumber].hit)) {
                minIndex = Math.floor(Math.random() * lenNeighbours);
            }
            else {
                if (GHOSTS[ghostNumber].mode == 2) {
                    target[0] = (GHOSTS[ghostNumber].startY - MAZE_START_HEIGHT) / SCALE;
                    target[1] = (GHOSTS[ghostNumber].startX - MAZE_START_WIDTH) / SCALE;
                }
                else {
                    switch (ghostNumber) {
                        case 0:
                            targetRed(target, GHOSTS[ghostNumber]);
                            break;
                        case 1:
                            targetPink(target, GHOSTS[ghostNumber]);
                            break;
                        case 2:
                            targetBlue(target);
                            break;
                        case 3:
                            targetOrange(target, GHOSTS[ghostNumber], positionY, positionX);
                            break;
                    }
                }
                for (i = 0; i < lenNeighbours; i++) {
                    newPositionY = positionY + neighbours[i][0];
                    newPositionX = positionX + neighbours[i][1];
                    distance = Math.pow((newPositionY - target[0]), 2) + Math.pow((newPositionX - target[1]), 2);
                    if (distance < minDistance) {
                        minDistance = distance;
                        minIndex = i;
                    }
                }
            }
            GHOSTS[ghostNumber].moves[0] = neighbours[minIndex][0];
            GHOSTS[ghostNumber].moves[1] = neighbours[minIndex][1];
    }
}


function findNeighbours(neighbours, y, x, oldMove) {
    var i, j, lenNeighbours = 0;
    for (i = -1; i <= 1; i++) {
        for (j = -1; j <= 1; j++) {
            if ((!i || !j) && (i || j) && (j != oldMove[0] || i != oldMove[1])) {
                if (1 <= y + j && MAP.length - 1> y + j && 0 <= x + i && MAP[0].length > x + i) {
                    if (MAP[y + j][x + i] != 1) {
                        neighbours[lenNeighbours] = [];
                        neighbours[lenNeighbours][0] = j;
                        neighbours[lenNeighbours][1] = i;
                        lenNeighbours += 1;
                    }
                }
                if (x + i <= -1 || x + i >= MAP[0].length) {
                    neighbours[lenNeighbours] = [];
                    neighbours[lenNeighbours][0] = j;
                    neighbours[lenNeighbours][1] = i;
                    lenNeighbours += 1;
                }
            }
        }
    }
    return lenNeighbours;
}

function targetRed(target, ghost) {
    if (ghost.mode) {
        target[0] = 1;
        target[1] = 18;
    }
    else {
        target[0] = (PACMAN.y - MAZE_START_HEIGHT) / SCALE;
        target[1] = (PACMAN.x - MAZE_START_WIDTH) / SCALE;
    }
}

function targetPink(target, ghost) {
    if (ghost.mode) {
        target[0] = 1;
        target[1] = 1;
    }
    else {
        target[0] = (PACMAN.y - MAZE_START_HEIGHT) / SCALE + 4 * !(PACMAN.mode % 2) * Math.pow((-1), (PACMAN.mode > 1));
        target[1] = (PACMAN.x - MAZE_START_WIDTH) / SCALE + 4 * (PACMAN.mode % 2) * Math.pow((-1), (PACMAN.mode > 1));
    }
}

function targetBlue(target) {
    if (GHOSTS[2].mode) {
        target[0] = 20;
        target[1] = 1;
    }
    else {
        var pacmanY2 = (PACMAN.y - MAZE_START_HEIGHT) / SCALE + 2 * !(PACMAN.mode % 2) * Math.pow((-1), (PACMAN.mode > 1));
        var pacmanX2 = (PACMAN.x - MAZE_START_WIDTH) / SCALE + 2 * (PACMAN.mode % 2) * Math.pow((-1), (PACMAN.mode > 1));
        var redY = (GHOSTS[0].y - MAZE_START_HEIGHT) / SCALE;
        var redX = (GHOSTS[0].x - MAZE_START_WIDTH) / SCALE;
        target[0] = pacmanY2 + (pacmanY2 - redY);
        target[1] = pacmanX2 + (pacmanX2 - redX);
    }
}

function targetOrange(target, ghost, positionY, positionX) {
    if (ghost.mode) {
    target[0] = 20;
    target[1] = 18;
    }
    else {
        var pacmanX, pacmanY, distance;
        pacmanY = (PACMAN.y - MAZE_START_HEIGHT) / SCALE;
        pacmanX = (PACMAN.x - MAZE_START_WIDTH) / SCALE;
        distance = Math.sqrt(Math.pow((positionY - pacmanY), 2) + Math.pow((positionX - pacmanX), 2));
        if (distance >= 6) {
            target[0] = pacmanY;
            target[1] = pacmanX;
        }
        else {
            target[0] = 20;
            target[1] = 18;
        }
    }
}


//  **************** MAPS ************************************************************


var MAPS = [
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1],
        [1, 7, 1, 1, 1, 5, 1, 1, 5, 1, 5, 1, 1, 5, 1, 1, 1, 7, 1],
        [1, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 1],
        [1, 1, 1, 5, 1, 1, 5, 1, 5, 1, 5, 1, 5, 1, 1, 5, 1, 1, 1],
        [1, 5, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 5, 1],
        [1, 5, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 5, 1],
        [1, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 5, 5, 1],
        [1, 1, 5, 1, 5, 1, 5, 1, 4, 1, 1, 1, 5, 1, 5, 1, 5, 1, 1],
        [8, 5, 5, 5, 5, 1, 5, 1, 4, 4, 4, 1, 5, 1, 5, 5, 5, 5, 8],
        [1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1],
        [1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1],
        [1, 5, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 5, 1],
        [1, 5, 1, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 1, 5, 1],
        [1, 5, 1, 5, 1, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1, 5, 1, 5, 1],
        [1, 5, 5, 5, 5, 5, 5, 5, 5, 2, 5, 5, 5, 5, 5, 5, 5, 5, 1],
        [1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1],
        [1, 5, 5, 5, 5, 5, 1, 5, 5, 1, 5, 5, 1, 5, 5, 5, 5, 5, 1],
        [1, 7, 1, 1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1, 1, 7, 1],
        [1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1],
        [1, 7, 1, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 1, 7, 1],
        [1, 5, 5, 1, 5, 5, 5, 1, 5, 1, 5, 1, 5, 5, 5, 1, 5, 5, 1],
        [1, 1, 5, 1, 5, 1, 5, 1, 5, 5, 5, 1, 5, 1, 5, 1, 5, 1, 1],
        [0, 1, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 1, 0],
        [0, 1, 5, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 5, 1, 0],
        [0, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 0],
        [1, 1, 5, 1, 5, 1, 5, 1, 1, 1, 4, 1, 5, 1, 5, 1, 5, 1, 1],
        [8, 5, 5, 1, 5, 1, 5, 1, 4, 4, 4, 1, 5, 1, 5, 1, 5, 5, 8],
        [1, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1],
        [8, 5, 5, 1, 5, 1, 5, 5, 5, 5, 5, 5, 5, 1, 5, 1, 5, 5, 8],
        [1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1],
        [0, 1, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 1, 0],
        [1, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 5, 1, 1],
        [1, 5, 5, 1, 5, 5, 5, 5, 5, 2, 5, 5, 5, 5, 5, 1, 5, 5, 1],
        [1, 5, 1, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 1, 5, 1],
        [1, 5, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 5, 1],
        [1, 7, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 7, 1],
        [1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1],
		[1, 7, 1, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 1, 7, 1],
		[1, 5, 5, 5, 5, 5, 5, 1, 5, 1, 5, 1, 5, 5, 5, 5, 5, 5, 1],
		[1, 1, 5, 1, 1, 1, 5, 1, 5, 1, 5, 1, 5, 1, 1, 1, 5, 1, 1],
		[8, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 8],
		[1, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 5, 1, 1],
		[1, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 5, 5, 1],
		[1, 5, 1, 1, 1, 1, 5, 1, 4, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1],
		[1, 5, 5, 5, 5, 5, 5, 1, 4, 4, 4, 1, 5, 5, 5, 5, 5, 5, 1],
		[1, 5, 1, 5, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 5, 1, 5, 1],
		[1, 5, 1, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 1, 5, 5, 1, 5, 1],
		[1, 5, 1, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 1, 5, 1],
		[1, 5, 1, 5, 5, 5, 5, 1, 5, 1, 5, 1, 5, 5, 5, 5, 1, 5, 1],
		[1, 5, 1, 5, 1, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1, 5, 1, 5, 1],
		[1, 5, 5, 5, 5, 5, 5, 5, 5, 2, 5, 5, 5, 5, 5, 5, 5, 5, 1],
		[1, 7, 1, 5, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 5, 1, 7, 1],
		[1, 5, 1, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 1, 5, 1],
		[1, 5, 1, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 1, 5, 1],
		[1, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1],
		[1, 5, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 5, 1],
		[1, 7, 1, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 1, 7, 1],
		[1, 5, 1, 5, 1, 1, 5, 1, 5, 1, 5, 1, 5, 1, 1, 5, 1, 5, 1],
		[8, 5, 5, 5, 5, 1, 5, 1, 5, 5, 5, 1, 5, 1, 5, 5, 5, 5, 8],
		[1, 5, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 5, 1],
		[1, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 5, 5, 1],
		[1, 1, 5, 1, 5, 1, 5, 1, 4, 1, 1, 1, 5, 1, 5, 1, 5, 1, 1],
		[0, 1, 5, 5, 5, 1, 5, 1, 4, 4, 4, 1, 5, 1, 5, 5, 5, 1, 0],
		[0, 1, 5, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 5, 1, 0],
		[0, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 0],
		[1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1],
		[8, 5, 5, 1, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 1, 5, 5, 8],
		[1, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 5, 1, 1],
		[1, 5, 5, 5, 5, 1, 5, 5, 5, 2, 5, 5, 5, 1, 5, 5, 5, 5, 1],
		[1, 7, 1, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 1, 7, 1],
		[1, 5, 1, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 1, 5, 1],
		[1, 5, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 5, 1],
		[1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]/*,
    [
    ],
    [
    ],
    [
    ],
    [
    ],
    [
    ]*/
];
function randomMap(MAP) {
    var chosen, i, j;
    chosen = Math.floor(Math.random() * MAPS.length);
    for (j = 0; j < 21; j++) {
        MAP[j] = [];
        for (i = 0; i < 21; i++) {
            MAP[j][i] = MAPS[chosen][j][i];
        }
    }
}



//  **************** MAIN ************************************************************


var MADE, MOVING, PLAY, SCORE, TO_COLLECT, POWER_UP, LIVES, READY, TIMER_1, TIMER_2, PACMAN, CONTINUE_GAME, BOX, FIRST_GAME;
var MAP = []
var GHOST_IMAGES = ["red.png", "pink.png", "blue.png", "yellow.png", "scared.png"];
var GHOSTS = [];
var GAME_WIDTH = 700; 
var GAME_HEIGHT = 640;
var SCALE = 20;
var MAZE_WIDTH = 19;
var MAZE_HEIGHT = 21;
var MAZE_START_WIDTH = (GAME_WIDTH - MAZE_WIDTH * SCALE) / 2;
var MAZE_START_HEIGHT = (GAME_HEIGHT - MAZE_HEIGHT * SCALE) / 2;
var FPS = 50;
var KEYS = [false, false, false, false];
var DIRECTIONS = [false, false, false, false];
var POWER_UP_TIMES = [];
var POWER_UP_MODES = [];
var MODES_TIMES = [20, 7, 7];
var KILLED = 0;

function createEl(name, className) {
    var newEl = document.createElement(name);
    if (className) newEl.className = className;
    return newEl;
}

function clearEl(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function loadMenu() {
    clearEl(BOX);
    BOX.innerHTML = '<h3>PA<span class="yellow">C</span>MAN</h3><p id="playButton" onclick="loadMap()">Play game</p>';
    CONTINUE_GAME = false;
    FIRST_GAME = true;
}

$(function() {
    BOX = document.getElementById("game_container");
    loadMenu();
});

var PACMAN_IMG = createEl("img");
PACMAN_IMG.id = 'image';
PACMAN_IMG.src = STATIC_PATH_IMG + "pacman/pacman.png";
PACMAN_IMG.style.position = "absolute";
PACMAN_IMG.style.zIndex = 50;
PACMAN_IMG.style.height = SCALE + "px";
PACMAN_IMG.style.width = 'auto';

function Sprite(img, startX, startY, speed, mode, hit, modeStart) {
    this.img = img;
    this.x = startX;
    this.y = startY;
    this.speed = speed;
    this.startX = startX;
    this.startY = startY;
    this.mode = mode;
    this.hit = hit;
    this.moves = [0, 0];
    this.modeStart = modeStart;
}

PACMAN = new Sprite(PACMAN_IMG, MAZE_START_WIDTH + SCALE * 5, MAZE_START_HEIGHT + SCALE * 5, 0.125 * SCALE, 2);
PACMAN.img.style.left = PACMAN.x + "px";
PACMAN.img.style.top = PACMAN.y + "px";

function readyGo() {
    var infoBox = document.getElementById("info_box");
    if (READY == 4) {
        sign = createEl("p", "info");
        sign.id = "ready";
        sign.style.position = "absolute";
        sign.style.left = MAZE_START_WIDTH + 14.5 * SCALE + "px";
        infoBox.appendChild(sign);
    }
    READY -= 1;
    sign = document.getElementById("ready");
    if (!READY) {
        sign.innerHTML = "Ready? Go!";
        setTimeout(function() {
            infoBox.removeChild(sign);
            PLAY = true;
            }, 1000);
        setTimeout(ghostStart, 1000);
    }
    else {
        sign.innerHTML = "Ready? " + READY.toString();
        setTimeout(readyGo, 1000);
    }
}

function ghostStart() {
    if (GHOSTS[MOVING].mode == 2) {
        POWER_UP_TIMES[MOVING] = (new Date().getTime()) - GHOSTS[MOVING].modeStart;
    }
    else {
        GHOSTS[MOVING].modeStart = new Date().getTime();
    }
    MOVING += 1;
    if (MOVING < 4) TIMER_1 = setTimeout(ghostStart, 4000);
}

function changeScore() {
    var sign = document.getElementById("score");
    if (sign) sign.innerHTML = "Score: " + SCORE.toString();
}

function changeLives() {
    var sign = document.getElementById("lives");
    if (sign) {
        sign.innerHTML = "Lives: " + LIVES.toString();
    }
}

function changePowerUp() {
    var sign;
    infoBox = document.getElementById("info_box");
    if (POWER_UP == 8) {
        sign = createEl("p", "info");
        sign.id = "powerUp";
        sign.style.position = "absolute";
        sign.style.left = MAZE_START_WIDTH + 15.5 * SCALE + "px";
        infoBox.appendChild(sign);
    }
    POWER_UP -= 1;
    sign = document.getElementById("powerUp");
    if (sign) {
        if (!POWER_UP || KILLED == 4) {
            sign.innerHTML = "Watch out!";
            TIMER_2 = setTimeout(function() {infoBox.removeChild(sign)}, 1000);
        }
        else {
            sign.innerHTML = "Power-up: " + POWER_UP.toString() + "s";
            TIMER_2 = setTimeout(changePowerUp, 1000);
        }
    }
}

function ghostCollision(ghost) {
    if (PACMAN.x == ghost.x) {
        if ((PACMAN.y > ghost.y && PACMAN.y + 5 < ghost.y + SCALE) || (PACMAN.y + SCALE - 5 > ghost.y && PACMAN.y < ghost.y)) {
            return 1;
        }
    }
    else if (PACMAN.y == ghost.y) {
        if ((PACMAN.x > ghost.x && PACMAN.x + 5 < ghost.x + SCALE) || (PACMAN.x + SCALE - 5 > ghost.x && PACMAN.x < ghost.x)) {
            return 1;
        }
    }
    return 0;
}


function loadMap() {
    var table, point, coin, infoBox;
    clearEl(BOX);
    clearTimeout(TIMER_1);
    if (!CONTINUE_GAME) {
        SCORE = 0;
        LIVES = 3;
    }
    PLAY = false;
    READY = 4;
    MADE = 0;
    MOVING = 0;
    TO_COLLECT = 0;
    PACMAN.mode = 0;
    $("#image").rotate(PACMAN.mode * 90);
    falseAllExcept(DIRECTIONS, -1);
    falseAllExcept(KEYS, -1);
    table = createEl("table");
    table.id = 'game';
    table.style.width = MAZE_WIDTH * SCALE + "px";
    table.style.left = MAZE_START_WIDTH + "px";
    table.style.top = MAZE_START_HEIGHT + "px";
    randomMap(MAP);
    for (var i = 0; i < MAZE_HEIGHT; i++) {
        row = table.appendChild(createEl("tr"));
        row.style.height = SCALE + "px";
        for (var j = 0; j < MAZE_WIDTH; j++) {
            point = MAP[i][j];
            switch (point) {
                case 1:
                    row.appendChild(createEl("td", "wall"));
                    break;
                case 2:
                    PACMAN.startY = PACMAN.y = i * SCALE + MAZE_START_HEIGHT;
                    PACMAN.startX = PACMAN.x = j * SCALE + MAZE_START_WIDTH;
                    PACMAN.img.style.top = PACMAN.y + "px";
                    PACMAN.img.style.left = PACMAN.x + "px";
                    row.appendChild(createEl("td"));
                    break;
                case 4:
                    if (FIRST_GAME) {
                    img = createEl("img");
                    }
                    else img = GHOSTS[MADE].img;
                    img.src = STATIC_PATH_IMG + "pacman/" + GHOST_IMAGES[MADE];
                    img.style.left = j * SCALE + MAZE_START_WIDTH + "px";
                    img.style.top = i * SCALE + MAZE_START_HEIGHT + "px";
                    img.style.position = "absolute";
                    img.style.zIndex = 60;
                    img.style.height = SCALE + "px";
                    img.style.width = 'auto';
                    GHOSTS[MADE] = new Sprite(img, j * SCALE + MAZE_START_WIDTH, i * SCALE + MAZE_START_HEIGHT, 0.1 * SCALE, 1, 0);
                    row.appendChild(createEl("td", "block"));
                    BOX.appendChild(img);
                    MADE += 1;
                    break;
                case 8: 
                    if (j == 0) {
                        row.appendChild(createEl("td"));
                        teleport_1 = createEl("div", "teleport");
                        teleport_2 = createEl("div", "teleport");
                        teleport_1.style.left = MAZE_START_WIDTH - SCALE + "px"; 
                        teleport_2.style.left = MAZE_START_WIDTH + SCALE * MAZE_WIDTH + "px";
                        teleport_2.style.top = teleport_1.style.top = MAZE_START_HEIGHT + i * SCALE + "px";
                        teleport_2.style.height = teleport_1.style.height = SCALE + "px";
                        teleport_2.style.width = teleport_1.style.width = SCALE + "px";
                        BOX.appendChild(teleport_1);
                        BOX.appendChild(teleport_2);
                    }
                    break;
                case 5:
                    TO_COLLECT += 1;
                    coin = createEl("div", "circle coin");
                    coin.style.height = 0.25 * SCALE + "px";
                    coin.style.width = 0.25 * SCALE + "px";
                    td = createEl("td");
                    td.appendChild(coin);
                    row.appendChild(td);
                    break;
                case 7:
                    TO_COLLECT += 1;
                    coin = createEl("div", "circle power-up");
                    coin.style.height = 0.6 * SCALE + "px";
                    coin.style.width = 0.6 * SCALE + "px";
                    td = createEl("td");
                    td.appendChild(coin);
                    row.appendChild(td);
                    break;
                default: 
                    row.appendChild(createEl("td"));
            }
        }
    }
    infoBox = createEl("div");
    infoBox.id = "info_box";
    infoBox.style.position = "absolute";
    infoBox.style.top = MAZE_START_HEIGHT - 3.5 * SCALE + "px";
    infoBox.style.width = GAME_WIDTH + "px";
    sign = createEl("p", "info");
    sign.id = "lives";
    sign.style.position = "absolute";
    sign.style.left = MAZE_START_WIDTH + SCALE +  "px";
    sign.innerHTML = "Lives: " + LIVES.toString();
    infoBox.appendChild(sign);
    sign = createEl("p", "info");
    sign.id = "score";
    sign.style.position = "absolute";
    sign.style.left = MAZE_START_WIDTH + 6.5 * SCALE + "px";
    sign.innerHTML = "Score: " + SCORE.toString();
    infoBox.appendChild(sign);
    BOX.appendChild(infoBox);
    BOX.appendChild(table);
    BOX.appendChild(PACMAN.img);
    changeLives();
    changeScore();
    FIRST_GAME = false;
    CONTINUE_GAME = true;
    readyGo();
}

function noCollision(direction) {
    var changedX, changedY, first, second, values;
    changedY = PACMAN.y + PACMAN.speed * Math.pow((-1), (direction < 2)) * (direction % 2);
    changedX = PACMAN.x + PACMAN.speed * Math.pow((-1), (direction < 2)) * !(direction % 2);
    if (changedX < MAZE_START_WIDTH || changedX >= MAZE_START_WIDTH + SCALE * (MAZE_WIDTH - 1)) {
        if (!(direction % 2)){
            return 1;
        }
        else {
            return 0;
        }
    }
    values = [];
    values[0] = Math.floor((changedX - MAZE_START_WIDTH) / SCALE);
    values[1] = Math.floor((changedY - MAZE_START_HEIGHT) / SCALE);
    values[2] = Math.ceil((changedX - MAZE_START_WIDTH) / SCALE);
    values[3] = Math.ceil((changedY - MAZE_START_HEIGHT) / SCALE);
    if (direction % 2) {
        first = MAP[values[direction]][values[0]];
        second = MAP[values[direction]][values[2]];
    }
    else {
        first = MAP[values[1]][values[direction]];
        second = MAP[values[3]][values[direction]];
    }
    if (first == 1 || first == 4 || second == 1 || second == 4) {
        return 0;
    }
    else {
        return 1;
    }
}


function teleports(character) {
    if (character.x == MAZE_START_WIDTH - SCALE) {
        character.x = MAZE_START_WIDTH + SCALE * MAZE_WIDTH - character.speed;
    }
    else if (character.x == MAZE_START_WIDTH + SCALE * MAZE_WIDTH) {
        character.x = MAZE_START_WIDTH - SCALE + character.speed;
    }
}

function falseAllExcept (array, exception) {
    for (var i = 0; i < 4; i++) {
        array[i] = false;
    }
    if (exception != -1) {
        array[exception] = true;
    }
}

function handleKeys(event) {
    var keyNumber = event.keyCode;
    if (37 <= keyNumber && keyNumber <= 40) {
        falseAllExcept(KEYS, keyNumber - 37);
        event.preventDefault();
    }
}

function react() {
    if (PLAY) {
        var i, j, table, square, point, x, y, infoBox;
        for (i = 0; i < MADE; i++) {
            if (new Date().getTime() - GHOSTS[i].modeStart >= MODES_TIMES[GHOSTS[i].mode] * 1000) {
                if (GHOSTS[i].mode == 2 && !(GHOSTS[i].hit)) {
                    if (!((GHOSTS[i].x * 20 / SCALE) % 2) && !((GHOSTS[i].y * 20 / SCALE) % 2)) {
                        GHOSTS[i].modeStart = (new Date().getTime()) - POWER_UP_TIMES[i];
                        GHOSTS[i].mode = POWER_UP_MODES[i];
                        GHOSTS[i].speed = 0.1 * SCALE;
                        GHOSTS[i].img.src = STATIC_PATH_IMG + "pacman/" + GHOST_IMAGES[i];
                    }
                }
                else if (i < MOVING && GHOSTS[i].mode != 2) {
                    GHOSTS[i].modeStart = new Date().getTime();
                    GHOSTS[i].mode = (GHOSTS[i].mode + 1) % 2;
                }
            }
        }

        for (i = 0; i < 4; i++) {
            if (KEYS[i] && noCollision(i)) {
                falseAllExcept(DIRECTIONS, i);
            }
        }
        
        if (!(parseInt(PACMAN.y - MAZE_START_HEIGHT) % SCALE) && !(parseInt(PACMAN.x - MAZE_START_WIDTH) % SCALE)) {
            y = (PACMAN.y - MAZE_START_HEIGHT) / SCALE;
            x = (PACMAN.x - MAZE_START_WIDTH) / SCALE;
            point = MAP[y][x]
            if (point == 5) {
                MAP[y][x] = 0;
                SCORE += 10;
                changeScore();
                TO_COLLECT -= 1;
                table = document.getElementById("game");
                square = table.children[y].children[x];
                square.removeChild(square.firstChild);
            }
            else if (point == 7) {
                MAP[y][x] = 0;
                SCORE += 50;
                changeScore();
                TO_COLLECT -= 1;
                table = document.getElementById("game");
                square = table.children[y].children[x];
                square.removeChild(square.firstChild);
                KILLED = 0;
                for (i = 0; i < MADE; i++) {
                    if (!(GHOSTS[i].hit)) {
                        POWER_UP_MODES[i] = GHOSTS[i].mode % 2;
                        GHOSTS[i].mode = 2;
                        POWER_UP_TIMES[i] = (new Date().getTime()) - GHOSTS[i].modeStart;
                        GHOSTS[i].modeStart = new Date().getTime();
                        GHOSTS[i].moves[0] *= (-1);
                        GHOSTS[i].moves[1] *= (-1);
                        GHOSTS[i].speed = 0.05 * SCALE;
                        GHOSTS[i].img.src = STATIC_PATH_IMG + "pacman/" + GHOST_IMAGES[4];
                    }
                }
                sign = document.getElementById("powerUp");
                if (sign) {                    
                    BOX.removeChild(sign);
                    clearTimeout(TIMER_2);
                }
                POWER_UP = 8;
                changePowerUp();
            }
        }
        if (!TO_COLLECT) {
            SCORE += 2000;
            changeScore();
            CONTINUE_GAME = true;
            clearTimeout(TIMER_2);
            loadMap();
        }
        
        for (i = 0; i < MADE; i++) {
            if (ghostCollision(GHOSTS[i])) {
                if (GHOSTS[i].mode == 2) {
                    if (!(GHOSTS[i].hit)) {
                        SCORE += 200 * Math.pow(2, KILLED);
                        changeScore();
                        KILLED += 1;
                        GHOSTS[i].hit = 1;
                    }
                }
                else {
                    LIVES -= 1;
                    changeLives();
                    PACMAN.x = PACMAN.startX;
                    PACMAN.y = PACMAN.startY;
                    PACMAN.img.style.left = PACMAN.x + "px";
                    PACMAN.img.style.top = PACMAN.y + "px";
                    PACMAN.mode = 0;
                    $("#image").rotate(PACMAN.mode * 90);
                    MOVING = 0;
                    clearTimeout(TIMER_2);
                    sign = document.getElementById("powerUp");
                    infoBox = document.getElementById("info_box");
                    if (sign) {
                        POWER_UP = 0;
                        infoBox.removeChild(sign);
                    }
                    for (j = 0; j < MADE; j++) {
                        GHOSTS[j].x = GHOSTS[j].startX;
                        GHOSTS[j].y = GHOSTS[j].startY;
                        GHOSTS[j].img.style.left = GHOSTS[j].x + "px";
                        GHOSTS[j].img.style.top = GHOSTS[j].y + "px";
                        GHOSTS[j].img.src = STATIC_PATH_IMG + "pacman/" + GHOST_IMAGES[j];
                        GHOSTS[j].mode = 1;
                    }
                    PLAY = false;
                    if (LIVES) {
                        READY = 4;
                        clearTimeout(TIMER_1);
                        readyGo();
                        falseAllExcept(DIRECTIONS, -1);
                        falseAllExcept(KEYS, -1);
                    }
                    else {
                        loadMenu();
                        state = sendScore(SCORE);
                        BOX.innerHTML += '<p id="score_after">Your score: ' + SCORE.toString() + '</p>';
                        return;
                    }
                }
            }
        }
        
        for (i = 0; i < MADE; i++) {
            if (GHOSTS[i].hit && GHOSTS[i].x == GHOSTS[i].startX && GHOSTS[i].y == GHOSTS[i].startY) {
                GHOSTS[i].hit = 0;
                GHOSTS[i].modeStart = (new Date().getTime()) - POWER_UP_TIMES[i];
                GHOSTS[i].mode = POWER_UP_MODES[i];
                GHOSTS[i].speed = 0.1 * SCALE;
                GHOSTS[i].img.src = STATIC_PATH_IMG + "pacman/" + GHOST_IMAGES[i];
            }
        }
        
        teleports(PACMAN);
        for (i = 0; i < MOVING; i++) {
            teleports(GHOSTS[i]);
        }
        
        for (i = 0; i < 4; i++) {
            if (DIRECTIONS[i] && noCollision(i)) {
                PACMAN.mode = (i + 2) % 4 //0, 1, 2, 3 ->> 2, 3, 0, 1
                $("#image").rotate(PACMAN.mode * 90);
                PACMAN.x += PACMAN.speed * Math.pow((-1), (i < 2)) * !(i % 2);
                PACMAN.y += PACMAN.speed * Math.pow((-1), (i < 2)) * (i % 2);
                PACMAN.img.style.left = PACMAN.x + "px";
                PACMAN.img.style.top = PACMAN.y + "px";
            }
            else {
               DIRECTIONS[i] = false;
            }
        }
        for (i = 0; i < MOVING; i++) {
            if (!((GHOSTS[i].y - MAZE_START_HEIGHT) % SCALE) && !((GHOSTS[i].x - MAZE_START_WIDTH) % SCALE)) {
                if (GHOSTS[i].hit) {
                    GHOSTS[i].speed = 0.25 * SCALE;
                }
                makeMove(i);
            }
            GHOSTS[i].y += GHOSTS[i].speed * GHOSTS[i].moves[0];
            GHOSTS[i].x += GHOSTS[i].speed * GHOSTS[i].moves[1];
            GHOSTS[i].img.style.left = GHOSTS[i].x + "px";
            GHOSTS[i].img.style.top = GHOSTS[i].y + "px";
        }
    }
}

addEventListener("keydown", handleKeys);
setInterval(react, 1000 / FPS);