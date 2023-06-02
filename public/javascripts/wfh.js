var wfh = function()
{
    var anchorDate = new Date("2023-06-01");
    var today = new Date();
    var timeDif = today.getTime() - anchorDate.getTime();
    var dayDif = Math.floor(timeDif / (1000 * 3600 * 24));
    var result;

    if((dayDif % 14) < 7) result = "Yes";
    else result = "No";

    document.getElementById("wfh").innerHTML = result;
};
wfh();