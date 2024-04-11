document.addEventListener("DOMContentLoaded", function() {
    const firstSign = document.querySelector(".firstsign");
    const secondsign = document.querySelector(".secondsign");
    const thirdsign = document.querySelector(".thirdsign");
    const fourthsign = document.querySelector(".fourthsign");
    const headbackcol = document.querySelector('.myHeader');
    let isbackwhite = true;

    const DayandNight = document.getElementById("DayandNight");
    DayandNight.addEventListener("click", function(event) {
        event.preventDefault();
        if (isbackwhite) {
            document.body.style.backgroundColor = '#000000';
            headbackcol.style.backgroundColor = '#000000';
            document.querySelector('.secondletter').style.color = '#ffffff';
            document.querySelector('.firstlink').style.color = '#ffffff';
            document.querySelector('.secondlink').style.color = '#ffffff';
            document.querySelector('.thirdlink').style.color = '#ffffff';
            firstSign.style.textShadow = "0px 0px 6px white";
            secondsign.style.textShadow = "0px 0px 6px white";
            thirdsign.style.textShadow = "0px 0px 6px white";
            fourthsign.style.textShadow = "0px 0px 6px white";
            isbackwhite = false;
        } else {
            document.body.style.backgroundColor = '#ffffff';
            headbackcol.style.backgroundColor = '#ffebcd';
            document.querySelector('.secondletter').style.color = '#000000';
            document.querySelector('.firstlink').style.color = '#000000';
            document.querySelector('.secondlink').style.color = '#000000';
            document.querySelector('.thirdlink').style.color = '#000000';
            firstSign.style.textShadow = "0px 0px 6px blueviolet";
            secondsign.style.textShadow = "0px 0px 6px blueviolet";
            thirdsign.style.textShadow = "0px 0px 6px blueviolet";
            fourthsign.style.textShadow = "0px 0px 6px blueviolet";
            isbackwhite = true;
        }
    });
});
