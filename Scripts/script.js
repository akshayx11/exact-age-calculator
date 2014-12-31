/*Developed and Designed By: Akshay Kumar Gupta*
*Project forked from Exact Age Calculator by Hans Adrian from Codecademy.com*
*Css design suggested by Lea.verou.me*
*More apps available on http://www.funspellz.com *
 */

$(document).ready(function () {
    $("#calculate").click(function() {
        var mdate = $("#birth_date").val().toString();
        var yearThen = parseInt(mdate.substring(0, 4), 10);
        var monthThen = parseInt(mdate.substring(5, 7), 10);
        var dayThen = parseInt(mdate.substring(8, 10), 10);
        
         var mdate1 = $("#compare_date").val().toString();
        var yearNow = parseInt(mdate1.substring(0, 4), 10);
        var monthNow = parseInt(mdate1.substring(5, 7), 10);
        var dayNow = parseInt(mdate1.substring(8, 10), 10);
        
      if (isNaN(yearNow) || isNaN(monthNow) || isNaN(dayNow)) {
            var today = new Date();
        }
        else {
           var today = new Date(yearNow, monthNow-1, dayNow);
        }
        
        
        
        var birthday = new Date(yearThen, monthThen-1, dayThen);
        
        var differenceInMilisecond = today.valueOf() - birthday.valueOf();
        
        var year_age = Math.floor(differenceInMilisecond / 31536000000);
        var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
        
        if ((today.getMonth() === birthday.getMonth()) && (today.getDate() === birthday.getDate())) {
            alert("Wish You A Very Happy Birthday!!!");
        }
        
        var month_age = Math.floor(day_age/30);
        
        day_age = day_age % 30;
        
        if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
            $("#exact_age").text("Please enter correct birthday date.");
        }
        else {
            $("#exact_age").html("You are<br/><span id=\"age\">" + year_age + " years <br/>" + month_age + " months<br/> " + day_age + " days</span> old");
        }
    });
});
