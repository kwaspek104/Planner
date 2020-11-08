$(document).ready(function () {
   
    $("#currentDay").text(moment().format("dddd, MMMM Do"))
   
    function setColor() {

        let currentTime = moment().hour();

        if ($(".btn").val() == currentTime) {
            $(".description").addClass("present");
        }

        else if ($(".btn").val() <= currentTime) {
            $(".description").addClass("past");
        }

        else if ($(".btn").val() >= currentTime) {
            $(".description").addClass("future");
        }
    }

    setColor()
    
    $(".saveBtn").on("click", function () {

        let userInput = $(this).siblings(".description").val()
        let userTime = $(this).siblings(".hour").attr("id")

        localStorage.setItem(userTime, userInput);
    });

    for (let i = 9; i < 18; i++) {
        $(`#hour-${i}`).siblings(".description").val(localStorage.getItem(`hour-${i}`))
    }


});
