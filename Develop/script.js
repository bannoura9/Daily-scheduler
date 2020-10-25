// display current Date

$("#currentDay").text(moment().format('dddd, MMMM Do'));

//------------------
//Declare Variables, array with objects.
var schedule = [
   {
      time: "09:00 AM",
      des: "",
      bt: "Save",
   },
   {
      time: "10:00 AM",
      des: "",
      bt: "save",
   },
   {
      time: "11:00 AM",
      des: "",
      bt: "save",
   },
   {
      time: "12:00 PM",
      des: "",
      bt: "save",
   },
   {
      time: "01:00 PM",
      des: "",
      bt: "save",
   },
   {
      time: "02:00 PM",
      des: "",
      bt: "save",
   },
   {
      time: "03:00 PM",
      des: "",
      bt: "save",
   },
   {
      time: "04:00 PM",
      des: "",
      bt: "save",
   },
   {
      time: "05:00 PM",
      des: "",
      bt: "save",
   }
]

   // Targeting Time, Description and Button through classes
   var scheduleTimeDiv = $(".time-block");
   var scheduleDesDiv = $(".description");
   var scheduleSaveDiv = $(".saveBtn");

//  var value = $(this).siblings(scheduleTimeDiv).val()
//  var time = $(this).siblings(scheduleDesDiv).val() 
var currentHour = parseInt(moment().format('hh A'));

$.each(schedule, function (key, value) {
   // var dt = new Date();
   // var hours = dt.getHours() ; // gives the value in 24 hours format
   // hours = parseInt(hours)
   let temp = value.time[0]+value.time[1];
   temp = parseInt(temp)
   console.log(temp)
   // console.log(currentHour)

   var newRow = $("<div>")
   newRow.addClass("row")

   if (temp < currentHour) {
      newRow.append("<div class='hour col-md-2'>" + value.time + "</div>" + "<br>");
      newRow.append("<textarea class='past col-md-8'>" + value.des + "</textarea>");
      newRow.append("<div class='saveBtn col-md-2'>" + value.bt + "</div>" + "<br>");
      $(".container").append(newRow)
   }
   else if(temp === currentHour)  {
   newRow.append("<div class='hour col-md-2'>" + value.time + "</div>" + "<br>");
      newRow.append("<textarea class='present col-md-8'>" + value.des + "</textarea>");
      newRow.append("<div class='saveBtn col-md-2'>" + value.bt + "</div>" + "<br>");
      $(".container").append(newRow)
      
   }
   if(temp > currentHour)  {
      newRow.append("<div class='hour col-md-2'>" + value.time + "</div>" + "<br>");
      newRow.append("<textarea class='future col-md-8'>" + value.des + "</textarea>");
      newRow.append("<div class='saveBtn col-md-2'>" + value.bt + "</div>" + "<br>");
      $(".container").append(newRow)
   }
   var localDes = localStorage.getItem(value.time)
   $(this).find("textarea").val(localDes);
   console.log(currentHour)
});

$(".saveBtn").on("click", function(time, value) {
    var time = $(this).siblings(".hour").text();
   //  console.log(time)
    var des = $(this).siblings("textarea").val();
   localStorage.setItem(time, des);
});


