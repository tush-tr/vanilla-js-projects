function givemeEms(pixels){
    var basevalue = 16;
    function domath(){
        return pixels/basevalue;
    }
    return domath;
}

var smallsize = givemeEms(12);
var mediumsize = givemeEms(18);
var bigsize = givemeEms(24);
var extralarge = givemeEms(32);
console.log(smallsize);
console.log(mediumsize);
console.log(bigsize);
console.log(extralarge);
