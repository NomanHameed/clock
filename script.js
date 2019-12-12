

setInterval(clk, 1000);
var previous_Deg;
var isHourHand;
var lastHourDeg;
var lastMinuteDeg;
var seconds,minute,hours;
const hourHand = document.getElementById("hr");
const minuteHand = document.getElementById("min");
const secondHand = document.getElementById("sec");
const tpick = document.getElementById('clock')
start_clock = function () {
    es = Timepicker.getSeconds();
}
function clk() {

    cur_date = new Date();
    const cur_sec = cur_date.getSeconds() / 60;
    const cur_min = (cur_sec + cur_date.getMinutes()) / 60;
    const cur_hour = (cur_min + cur_date.getHours()) / 12
    set_it(hourHand, cur_hour);
    set_it(minuteHand, cur_min);
    set_it(secondHand, cur_sec);
}

function set_it(element, item) {
    element.style.setProperty('--rotat', item * 360);
}

clk();

hourHand.addEventListener('mousedown', function (e) {
    e.preventDefault();
    e.stopPropagation();
    isFiredByMouse=true;
    var el = e.target;
    isHourHand=e.target==hourHand;
    previous_Deg =getComputedStyle(el).getPropertyValue('--rotat');
    onPtrStart(e.pageX,e.pageY)
    console.log(previous_Deg)
})
hourHand.addEventListener('mousemove',function (e) {
    if(isDragging&&isFiredByMouse){
        e=e||window.event;
        e.preventDefault();
        onPtrMove(e.pageX,e.pageY)
    }
})
// function onPtrStart(x,y){
//     isDragging=true;
//     centerX=tpick.offsetLeft+hourHand.offsetLeft+10;
//     centerY=tpick.offsetTop+hourHand.offsetTop+70;
//     // let last=isHourHand?lastHourDeg:lastMinuteDeg,
//         deg=-Math.atan2(centerX-x,centerY-y)*180/Math.PI,
//     //     dif=Math.abs(deg-last);
//     // isReverseRotate=(160<dif&&dif<200)
// }