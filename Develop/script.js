// display current Date
$("#currentDay").text(moment().format("dddd, MMMM Do"));
//Declare Variables
 var x = document.createElement('img');
   x.setAttribute('src', '../Assets/images/save.png');
   x.setAttribute("width", "50");
   x.setAttribute("height", "50");
   

var schedule = [
   {
      time: "09:00 AM",
      des: "",
   },
   {
      time: "10:00 AM",
      des: "",
   },
   {
      time: "11:00 AM",
      des: "",
   },
   {
      time: "12:00 PM",
      des: "",
   },
   {
      time: "13:00 PM",
      des: "",
   },
   {
      time: "14:00 PM",
      des: "",
   },
   {
      time: "15:00 PM",
      des: "",
   },
   {
      time: "16:00 PM",
      des: "",
   },
   {
      time: "17:00 PM",
      des: "",
   }
];
// Declare vars
var currentHour = parseInt(moment().format("HH:mm"));
// for loop for schedule array objects.
$.each(schedule, function (key, value) {
 

   let temp = value.time[0] + value.time[1];
   temp = parseInt(value.time.split(" ")[0]);
   // console.log("block hour", temp)
   var newRow = $("<div>")
   newRow.addClass("row");
   
   //if else statement to check if the it is in past, present or future. textarea will change color accordingly
   if (temp < currentHour) {
      newRow.append("<div class='hour col-md-2'>" + value.time + "</div>" + "<br/>");
      newRow.append("<textarea class='past col-md-8'>" + value.des + "</textarea>");
      var imgDiv = $("<div class='saveBtn col-md-2'></div><br/>");
      imgDiv.append(x);
      newRow.append(imgDiv);
      $(".container").append(newRow);
   }
   else if (temp === currentHour) {
      newRow.append("<div class='hour col-md-2'>" + value.time + "</div>" + "<br/>");
      newRow.append("<textarea class='present col-md-8'>" + value.des + "</textarea>");
      var imgDiv = $("<div class='saveBtn col-md-2'></div><br/>");
      imgDiv.append(x);
      newRow.append(imgDiv);
      $(".container").append(newRow);
   }
   else {
      newRow.append("<div class='hour col-md-2'>" + value.time + "</div>" + "<br/>");
      newRow.append("<textarea class='future col-md-8'>" + value.des + "</textarea>");
      var imgDiv = $("<div class='saveBtn col-md-2'></div><br/>");
      imgDiv.append(x);
      newRow.append(imgDiv);
      $(".container").append(newRow);
   }
});
//loop through all elements. to retrive local storage values and set it to the relevant textarea. 
$(".row").each(function () {
   //search the hour within the row 
   var timeStamp = $(this).find(".hour").text();
   var localDes = localStorage.getItem(timeStamp);
   
   //set it to the text area with the stored local storage values 
   $(this).find("textarea").val(localDes);
});
//On click on the Save button set value in local Storage with timestamp and Description for it. 
$(".saveBtn").on("click", function (time, value) {
   var time = $(this).siblings(".hour").text();
   var des = $(this).siblings("textarea").val();
   localStorage.setItem(time, des);
});
