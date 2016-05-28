
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

function makeMove(map, ghosts, pacman, ghostNumber, mazeStart) {
    var positionX, positionY, lenNeighbours, i, neighbours = [];
    ghosts[ghostNumber].moves[0] *= (-1);
    ghosts[ghostNumber].moves[1] *= (-1);
    positionX = (ghosts[ghostNumber].x - mazeStart) / scale;
    positionY = (ghosts[ghostNumber].y - mazeStart) / scale;
    lenNeighbours = findNeighbours(map, neighbours, positionY, positionX, ghosts[ghostNumber].moves);
    switch (lenNeighbours) {
        case 0:
            break;
        case 1:
            for (i = 0; i < 2; i++) {
                if (ghosts[ghostNumber][0] != neighbours[i][0] || ghosts[ghostNumber][1] != neighbours[i][1]) {
                    ghosts[ghostNumber].moves[0] = neighbours[i][0];
                    ghosts[ghostNumber].moves[1] = neighbours[i][1];
                    break;
                }
            }
            break;
        default:
            var target, minDistance, minIndex, distance, newPositionY, newPositionX;
            target = [];
            minDistance = 1000;
            minIndex = 0;
            if (ghosts[ghostNumber].mode == 2 && !(ghosts[ghostNumber].hit)) {
                minIndex = Math.floor(Math.random() * lenNeighbours);
            }
            else {
                if (ghosts[ghostNumber].mode == 2) {
                    target[0] = (ghosts[ghostNumber].startY - mazeStart) / scale;
                    target[1] = (ghosts[ghostNumber].startX - mazeStart) / scale;
                }
                else {
                    switch (ghostNumber) {
                        case 0:
                            targetRed(pacman, target, ghosts[ghostNumber], mazeStart);
                            break;
                        case 1:
                            targetPink(map, pacman, target, ghosts[ghostNumber], mazeStart);
                            break;
                        case 2:
                            targetBlue(map, pacman, target, ghosts, mazeStart);
                            break;
                        case 3:
                            targetOrange(map, pacman, target, ghosts[ghostNumber], positionY, positionX, mazeStart);
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
            ghosts[ghostNumber].moves[0] = neighbours[minIndex][0];
            ghosts[ghostNumber].moves[1] = neighbours[minIndex][1];
    }
}


function findNeighbours(map, neighbours, y, x, oldMove) {
    var i, j, lenNeighbours = 0;
    for (i = -1; i <= 1; i++) {
        for (j = -1; j <= 1; j++) {
            if ((!i || !j) && (i || j) && (j != oldMove[0] || i != oldMove[1])) {
                if (1 <= y + j && map.length - 1> y + j && 0 <= x + i && map[0].length > x + i) {
                    if (map[y + j][x + i] != 1) {
                        neighbours[lenNeighbours] = [];
                        neighbours[lenNeighbours][0] = j;
                        neighbours[lenNeighbours][1] = i;
                        lenNeighbours += 1;
                    }
                }
                if (x + i <= -1 || x + i >= map[0].length) {
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

function targetRed(pacman, target, ghost, mazeStart) {
    if (ghost.mode) {
        target[0] = 1;
        target[1] = 18;
    }
    else {
        target[0] = (pacman.y - mazeStart) / scale;
        target[1] = (pacman.x - mazeStart) / scale;
    }
}

function targetPink(map, pacman, target, ghost, mazeStart) {
    if (ghost.mode) {
        target[0] = 1;
        target[1] = 1;
    }
    else {
        target[0] = (pacman.y - mazeStart) / scale + 4 * !(pacman.mode % 2) * Math.pow((-1), (pacman.mode > 1));
        target[1] = (pacman.x - mazeStart) / scale + 4 * (pacman.mode % 2) * Math.pow((-1), (pacman.mode > 1));
    }
}

function targetBlue(map, pacman, target, ghosts, mazeStart) {
    if (ghosts[2].mode) {
        target[0] = 20;
        target[1] = 1;
    }
    else {
        var pacmanY2 = (pacman.y - mazeStart) / scale + 2 * !(pacman.mode % 2) * Math.pow((-1), (pacman.mode > 1));
        var pacmanX2 = (pacman.x - mazeStart) / scale + 2 * (pacman.mode % 2) * Math.pow((-1), (pacman.mode > 1));
        var redY = (ghosts[0].y - mazeStart) / scale;
        var redX = (ghosts[0].x - mazeStart) / scale;
        target[0] = pacmanY2 + (pacmanY2 - redY);
        target[1] = pacmanX2 + (pacmanX2 - redX);
    }
}

function targetOrange(map, pacman, target, ghost, positionY, positionX, mazeStart) {
    if (ghost.mode) {
    target[0] = 20;
    target[1] = 18;
    }
    else {
        var pacmanX, pacmanY, distance;
        pacmanY = (pacman.y - mazeStart) / scale;
        pacmanX = (pacman.x - mazeStart) / scale;
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


var numberOfMaps = 4;
var maps = [
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
function randomMap(map) {
    var chosen, i, j;
    chosen = Math.floor(Math.random() * numberOfMaps);
    for (j = 0; j < 21; j++) {
        map[j] = [];
        for (i = 0; i < 21; i++) {
            map[j][i] = maps[chosen][j][i];
        }
    }
}



//  **************** MAIN ************************************************************


var made, moving, play, score, coins, powerUp, lives, ready, timer, timer2, pacman, continueGame, box, firstGame;
var map = []
var ghostImages = ["red.png", "pink.png", "blue.png", "yellow.png", "scared.png"];
var ghosts = [];
var gameWidth = 700; 
var gameHeight = 640;
var scale = 20;
var mazeWidth = 19;
var mazeHeight = 21;
var mazeStart = (gameWidth - mazeHeight * scale) / 2;
var FPS = 50;
var key = [false, false, false, false];
var direction = [false, false, false, false];
var powerUpTimes = [];
var powerUpModes = [];
var modes = [20, 7, 7];
var killed = 0;

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
    clearEl(box);
    box.innerHTML = '<h3>PA<span class="yellow">C</span>MAN</h3><p id="playButton" onclick="loadMap()">Play game</p>';
    continueGame = false;
    firstGame = true;
}

$(function() {
    box = document.getElementById("game_container");
    loadMenu();
});

var pacmanImg = createEl("img");
pacmanImg.id = 'image';
pacmanImg.src = STATIC_PATH_IMG + "pacman/pacman.png";
pacmanImg.style.position = "absolute";
pacmanImg.style.zIndex = 50;
pacmanImg.style.height = scale + "px";
pacmanImg.style.width = 'auto';

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

pacman = new Sprite(pacmanImg, mazeStart + scale * 5, mazeStart + scale * 5, 0.125 * scale, 2);
pacman.img.style.left = pacman.x + "px";
pacman.img.style.top = pacman.y + "px";

function readyGo() {
    if (ready == 4) {
        sign = createEl("div", "button");
        sign.id = "ready";
        sign.style.left =  mazeStart + (mazeWidth + 1) * scale + "px", 
        sign.style.top = mazeStart - 3 * scale + "px";
        sign.style.position = "absolute";
        box.appendChild(sign);
    }
    ready -= 1;
    sign = document.getElementById("ready");
    if (!ready) {
        sign.innerHTML = "<p>Ready?</p><p>Go!</p>";
        setTimeout(function() {
            box.removeChild(sign);
            play = true;
            }, 1000);
        setTimeout(ghostStart, 1000);
    }
    else {
        sign.innerHTML = "<p>Ready?</p><p>" + ready.toString() + "</p>";
        setTimeout(readyGo, 1000);
    }
}

function ghostStart() {
    if (ghosts[moving].mode == 2) {
        powerUpTimes[moving] = (new Date().getTime()) - ghosts[moving].modeStart;
    }
    else {
        ghosts[moving].modeStart = new Date().getTime();
    }
    moving += 1;
    if (moving < 4) timer = setTimeout(ghostStart, 4000);
}

function changeScore() {
    var sign = document.getElementById("score");
    if (sign) sign.innerHTML = "<p>Score</p><p>" + score.toString() + "</p>";
}

function changeLives() {
    var sign = document.getElementById("lives");
    if (sign) {
        sign.innerHTML = "<p>Lives</p><p>" + lives.toString() + "</p>";
    }
}

function changePowerUp() {
    var sign;
    if (powerUp == 8) {
        sign = createEl("div", "button");
        sign.id = "powerUp";
        sign.style.left =  mazeStart + (mazeWidth + 1) * scale + "px", 
        sign.style.top = mazeStart + 12 * scale + "px";
        sign.style.position = "absolute";
        box.appendChild(sign);
    }
    powerUp -= 1;
    sign = document.getElementById("powerUp");
    if (sign) {
        if (!powerUp || killed == 4) {
            sign.innerHTML = "<p>Power-up</p><p>Watch out!</p>";
            setTimeout(function() {box.removeChild(sign)}, 1000);
        }
        else {
            sign.innerHTML = "<p>Power-up</p><p>" + powerUp.toString() + "</p>";
            timer2 = setTimeout(changePowerUp, 1000);
        }
    }
}

function ghostCollision(ghost, pacman) {
    if (pacman.x == ghost.x) {
        if ((pacman.y > ghost.y && pacman.y + 5 < ghost.y + scale) || (pacman.y + scale - 5 > ghost.y && pacman.y < ghost.y)) {
            return 1;
        }
    }
    else if (pacman.y == ghost.y) {
        if ((pacman.x > ghost.x && pacman.x + 5 < ghost.x + scale) || (pacman.x + scale - 5 > ghost.x && pacman.x < ghost.x)) {
            return 1;
        }
    }
    return 0;
}


function loadMap() {
    var startButton, table, point, coin;
    clearEl(box);
    clearTimeout(timer);
    if (!continueGame) {
        score = 0;
        lives = 3;
    }
    play = false;
    ready = 4;
    made = 0;
    moving = 0;
    coins = 0;
    falseAllExcept(direction, -1);
    falseAllExcept(key, -1);
    startButton = document.getElementById("gameButton");
    table = createEl("table");
    table.id = 'game';
    table.style.width = mazeWidth * scale + "px";
    table.style.left = mazeStart + "px";
    table.style.top = mazeStart + "px";
    randomMap(map);
    for (var i = 0; i < mazeHeight; i++) {
        row = table.appendChild(createEl("tr"));
        row.style.height = scale + "px";
        for (var j = 0; j < mazeWidth; j++) {
            point = map[i][j];
            switch (point) {
                case 1:
                    row.appendChild(createEl("td", "wall"));
                    break;
                case 2:
                    pacman.startY = pacman.y = i * scale + mazeStart;
                    pacman.startX = pacman.x = j * scale + mazeStart;
                    pacman.img.style.top = pacman.y + "px";
                    pacman.img.style.left = pacman.x + "px";
                    row.appendChild(createEl("td"));
                    break;
                case 4:
                    if (firstGame) {
                    img = createEl("img");
                    }
                    else img = ghosts[made].img;
                    img.src = STATIC_PATH_IMG + "pacman/" + ghostImages[made];
                    img.style.left = j * scale + mazeStart + "px";
                    img.style.top = i * scale + mazeStart + "px";
                    img.style.position = "absolute";
                    img.style.zIndex = 60;
                    img.style.height = scale + "px";
                    img.style.width = 'auto';
                    ghosts[made] = new Sprite(img, j * scale + mazeStart, i * scale + mazeStart, 0.1 * scale, 1, 0);
                    row.appendChild(createEl("td", "block"));
                    box.appendChild(img);
                    made += 1;
                    break;
                case 8: 
                    if (j == 0) {
                        row.appendChild(createEl("td"));
                        tele1 = createEl("div", "teleport");
                        tele2 = createEl("div", "teleport");
                        tele1.style.left = mazeStart - scale + "px"; 
                        tele2.style.left = mazeStart + scale * mazeWidth + "px";
                        tele2.style.top = tele1.style.top = mazeStart + i * scale + "px";
                        tele2.style.height = tele1.style.height = scale + "px";
                        tele2.style.width = tele1.style.width = scale + "px";
                        box.appendChild(tele1);
                        box.appendChild(tele2);
                    }
                    break;
                case 5:
                    coins += 1;
                    coin = createEl("div", "circle coin");
                    coin.style.height = 0.25 * scale + "px";
                    coin.style.width = 0.25 * scale + "px";
                    td = createEl("td");
                    td.appendChild(coin);
                    row.appendChild(td);
                    break;
                case 7:
                    coins += 1;
                    coin = createEl("div", "circle power-up");
                    coin.style.height = 0.6 * scale + "px";
                    coin.style.width = 0.6 * scale + "px";
                    td = createEl("td");
                    td.appendChild(coin);
                    row.appendChild(td);
                    break;
                default: 
                    row.appendChild(createEl("td"));
            }
        }
    }
    sign = createEl("div", "button");
    sign.id = "score";
    sign.innerHTML = "<p>Score</p><p>" + score.toString() + "</p>";
    sign.style.left =  mazeStart + (mazeWidth + 2) * scale - 5 + "px", 
    sign.style.top = mazeStart + 3 * scale + "px";
    sign.style.position = "absolute";
    box.appendChild(sign);
    sign = createEl("div", "button");
    sign.id = "lives";
    sign.innerHTML = "<p>Lives</p><p>" + lives.toString() + "</p>";
    sign.style.left =  mazeStart + (mazeWidth + 2) * scale + "px", 
    sign.style.top = mazeStart + 8 * scale + "px";
    sign.style.position = "absolute";
    box.appendChild(sign);
    box.appendChild(table);
    box.appendChild(pacman.img);
    changeLives();
    changeScore();
    firstGame = false;
    continueGame = true;
    readyGo();
}

function noCollision(map, pacman, direction) {
    var changedX, changedY, first, second, values;
    changedY = pacman.y + pacman.speed * Math.pow((-1), (direction < 2)) * (direction % 2);
    changedX = pacman.x + pacman.speed * Math.pow((-1), (direction < 2)) * !(direction % 2);
    if (changedX < mazeStart || changedX >= mazeStart + scale * (mazeWidth - 1)) {
        if (!(direction % 2)){
            return 1;
        }
        else {
            return 0;
        }
    }
    values = [];
    values[0] = Math.floor((changedX - mazeStart) / scale);
    values[1] = Math.floor((changedY - mazeStart) / scale);
    values[2] = Math.ceil((changedX - mazeStart) / scale);
    values[3] = Math.ceil((changedY - mazeStart) / scale);
    if (direction % 2) {
        first = map[values[direction]][values[0]];
        second = map[values[direction]][values[2]];
    }
    else {
        first = map[values[1]][values[direction]];
        second = map[values[3]][values[direction]];
    }
    if (first == 1 || first == 4 || second == 1 || second == 4) {
        return 0;
    }
    else {
        return 1;
    }
}


function teleports(character) {
    if (character.x == mazeStart - scale) {
        character.x = mazeStart + scale * mazeWidth - character.speed;
    }
    else if (character.x == mazeStart + scale * mazeWidth) {
        character.x = mazeStart - scale + character.speed;
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
        falseAllExcept(key, keyNumber - 37);
        event.preventDefault();
    }
}

function react() {
    if (play) {
        var i, j, table, square, point, x, y;
        for (i = 0; i < made; i++) {
            if (new Date().getTime() - ghosts[i].modeStart >= modes[ghosts[i].mode] * 1000) {
                if (ghosts[i].mode == 2 && !(ghosts[i].hit)) {
                    if (!((ghosts[i].x * 20 / scale) % 2) && !((ghosts[i].y * 20 / scale) % 2)) {
                        ghosts[i].modeStart = (new Date().getTime()) - powerUpTimes[i];
                        ghosts[i].mode = powerUpModes[i];
                        ghosts[i].speed = 0.1 * scale;
                        ghosts[i].img.src = STATIC_PATH_IMG + "pacman/" + ghostImages[i];
                    }
                }
                else if (i < moving && ghosts[i].mode != 2) {
                    ghosts[i].modeStart = new Date().getTime();
                    ghosts[i].mode = (ghosts[i].mode + 1) % 2;
                }
            }
        }

        for (i = 0; i < 4; i++) {
            if (key[i] && noCollision(map, pacman, i)) {
                falseAllExcept(direction, i);
            }
        }
        
        if (!(parseInt(pacman.y - mazeStart) % scale) && !(parseInt(pacman.x - mazeStart) % scale)) {
            y = (pacman.y - mazeStart) / scale;
            x = (pacman.x - mazeStart) / scale;
            point = map[y][x]
            if (point == 5) {
                map[y][x] = 0;
                score += 10;
                changeScore();
                coins -= 1;
                table = document.getElementById("game");
                square = table.children[y].children[x];
                square.removeChild(square.firstChild);
            }
            else if (point == 7) {
                map[y][x] = 0;
                powerUpTime = new Date().getTime();
                score += 50;
                changeScore();
                coins -= 1;
                table = document.getElementById("game");
                square = table.children[y].children[x];
                square.removeChild(square.firstChild);
                killed = 0;
                for (i = 0; i < made; i++) {
                    if (!(ghosts[i].hit)) {
                        powerUpModes[i] = ghosts[i].mode % 2;
                        ghosts[i].mode = 2;
                        powerUpTimes[i] = (new Date().getTime()) - ghosts[i].modeStart;
                        ghosts[i].modeStart = new Date().getTime();
                        ghosts[i].moves[0] *= (-1);
                        ghosts[i].moves[1] *= (-1);
                        ghosts[i].speed = 0.05 * scale;
                        ghosts[i].img.src = STATIC_PATH_IMG + "pacman/" + ghostImages[4];
                    }
                }
                if (powerUp) {
                    sign = document.getElementById("powerUp");
                    box.removeChild(sign);
                    clearTimeout(timer2);
                }
                powerUp = 8;
                changePowerUp();
            }
        }
        if (!coins) {
            continueGame = true;
            loadMap();
        }
        
        for (i = 0; i < made; i++) {
            if (ghostCollision(ghosts[i], pacman)) {
                if (ghosts[i].mode == 2) {
                    if (!(ghosts[i].hit)) {
                        score += 200 * Math.pow(2, killed);
                        changeScore();
                        killed += 1;
                        ghosts[i].hit = 1;
                    }
                }
                else {
                    lives -= 1;
                    changeLives();
                    pacman.x = pacman.startX;
                    pacman.y = pacman.startY;
                    pacman.img.style.left = pacman.x + "px";
                    pacman.img.style.top = pacman.y + "px";
                    pacman.mode = 0;
                    $("#image").rotate(pacman.mode * 90);
                    moving = 0;
                    if (powerUp) {
                        powerUp = 0;
                        sign = document.getElementById("powerUp");
                        if (sign) box.removeChild(sign);
                        clearTimeout(timer2);
                    }
                    for (j = 0; j < made; j++) {
                        ghosts[j].x = ghosts[j].startX;
                        ghosts[j].y = ghosts[j].startY;
                        ghosts[j].img.style.left = ghosts[j].x + "px";
                        ghosts[j].img.style.top = ghosts[j].y + "px";
                        ghosts[j].img.src = STATIC_PATH_IMG + "pacman/" + ghostImages[j];
                        ghosts[j].mode = 1;
                    }
                    if (lives) {
                        ready = 4;
                        play = false;
                        readyGo();
                        clearTimeout(timer);
                        falseAllExcept(direction, -1);
                        falseAllExcept(key, -1);
                    }
                    else {
                        play = false;
                        loadMenu();
                        state = sendScore(score);
                        box.innerHTML += '<p id="score_after">Your score: ' + score.toString() + '</p>';
                        return;
                    }
                }
            }
        }
        
        for (i = 0; i < made; i++) {
            if (ghosts[i].hit && ghosts[i].x == ghosts[i].startX && ghosts[i].y == ghosts[i].startY) {
                ghosts[i].hit = 0;
                ghosts[i].modeStart = (new Date().getTime()) - powerUpTimes[i];
                ghosts[i].mode = powerUpModes[i];
                ghosts[i].speed = 0.1 * scale;
                ghosts[i].img.src = STATIC_PATH_IMG + "pacman/" + ghostImages[i];
            }
        }
        
        teleports(pacman);
        for (i = 0; i < moving; i++) {
            teleports(ghosts[i]);
        }
        
        for (i = 0; i < 4; i++) {
            if (direction[i] && noCollision(map, pacman, i)) {
                pacman.mode = (i + 2) % 4 //0, 1, 2, 3 ->> 2, 3, 0, 1
                $("#image").rotate(pacman.mode * 90);
                pacman.x += pacman.speed * Math.pow((-1), (i < 2)) * !(i % 2);
                pacman.y += pacman.speed * Math.pow((-1), (i < 2)) * (i % 2);
                pacman.img.style.left = pacman.x + "px";
                pacman.img.style.top = pacman.y + "px";
            }
            else {
               direction[i] = false;
            }
        }
        for (i = 0; i < moving; i++) {
            if (!((ghosts[i].y - mazeStart) % scale) && !((ghosts[i].x - mazeStart) % scale)) {
                if (ghosts[i].hit) {
                    ghosts[i].speed = 0.25 * scale;
                }
                makeMove(map, ghosts, pacman, i, mazeStart);
            }
            ghosts[i].y += ghosts[i].speed * ghosts[i].moves[0];
            ghosts[i].x += ghosts[i].speed * ghosts[i].moves[1];
            ghosts[i].img.style.left = ghosts[i].x + "px";
            ghosts[i].img.style.top = ghosts[i].y + "px";
        }
    }
}

addEventListener("keydown", handleKeys);
setInterval(react, 1000 / FPS);