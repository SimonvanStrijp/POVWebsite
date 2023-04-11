
setInterval(timechange, 60*1000);

timechange();


function timechange() {
    console.log("timechange");
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    var m = (Math.floor(minutes/15) * 15) % 60;
    if (m < 10) {
        m = "00";}


    $("#time-slot").html(hours + ":" + m);
}

