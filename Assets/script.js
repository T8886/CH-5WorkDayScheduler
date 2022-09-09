var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


setInterval(() => {
var currentHour = moment().hour()
if (currentHour > 17){
    $(`#task9,#task10, #task11, #task12, #task13, #task14, #task15, #task16, #task17`).removeClass("past").removeClass("present").removeClass("future");

    $(`#task9,#task10, #task11, #task12, #task13, #task14, #task15, #task16, #task17`).addClass("past");
} else if (currentHour == 17){
    $(`#task9,#task10, #task11, #task12, #task13, #task14, #task15, #task16, #task17`).removeClass("past").removeClass("present").removeClass("future");
    
    $(`#task9,#task10, #task11, #task12, #task13, #task14, #task15, #task16`).addClass("past");
    $(`#task17`).addClass("present");
} else if (currentHour == 16){
    $(`#task9,#task10, #task11, #task12, #task13, #task14, #task15, #task16, #task17`).removeClass("past").removeClass("present").removeClass("future");
    
    $(`#task9,#task10, #task11, #task12, #task13, #task14, #task15`).addClass("past");
    $(`#task16`).addClass("present");
    $(`#task17`).addClass("future");
}  else if (currentHour == 15){
    $(`#task9,#task10, #task11, #task12, #task13, #task14, #task15, #task16, #task17`).removeClass("past").removeClass("present").removeClass("future");
    
    $(`#task9,#task10, #task11, #task12, #task13, #task14`).addClass("past");
    $(`#task15`).addClass("present");
    $(`#task16, #task17`).addClass("future");
}   else if (currentHour == 14){
    $(`#task9,#task10, #task11, #task12, #task13, #task14, #task15, #task16, #task17`).removeClass("past").removeClass("present").removeClass("future");
    
    $(`#task9,#task10, #task11, #task12, #task13`).addClass("past");
    $(`#task14`).addClass("present");
    $(`#task15, #task16, #task17`).addClass("future");
}   else if (currentHour == 13){
    $(`#task9,#task10, #task11, #task12, #task13, #task14, #task15, #task16, #task17`).removeClass("past").removeClass("present").removeClass("future");
    
    $(`#task9,#task10, #task11, #task12`).addClass("past");
    $(`#task13`).addClass("present");
    $(`#task14, #task15, #task16, #task17`).addClass("future");
}   else if (currentHour == 12){
    $(`#task9,#task10, #task11, #task12, #task13, #task14, #task15, #task16, #task17`).removeClass("past").removeClass("present").removeClass("future");
    
    $(`#task9,#task10, #task11`).addClass("past");
    $(`#task12`).addClass("present");
    $(`#task13, #task14, #task15, #task16, #task17`).addClass("future");
}   else if (currentHour == 11){
    $(`#task9,#task10, #task11, #task12, #task13, #task14, #task15, #task16, #task17`).removeClass("past").removeClass("present").removeClass("future");
    
    $(`#task9,#task10`).addClass("past");
    $(`#task11`).addClass("present");
    $(`#task12, #task13, #task14, #task15, #task16, #task17`).addClass("future");
}   else if (currentHour == 10){
    $(`#task9,#task10, #task11, #task12, #task13, #task14, #task15, #task16, #task17`).removeClass("past").removeClass("present").removeClass("future");
    
    $(`#task9`).addClass("past");
    $(`#task10`).addClass("present");
    $(`#task11, #task12, #task13, #task14, #task15, #task16, #task17`).addClass("future");
}   else if (currentHour == 9){
    $(`#task9,#task10, #task11, #task12, #task13, #task14, #task15, #task16, #task17`).removeClass("past").removeClass("present").removeClass("future");
    
    $(`#task10`).addClass("present");
    $(`#task11, #task12, #task13, #task14, #task15, #task16, #task17`).addClass("future");
}                  



}, 1000);

// var saveButton = document.getElementById("save");
// saveButton.addEventListener("click", function(event) {
//     event.preventDefault();