let arrivalInput = document.querySelector(".arrival_date");
let returnInput = document.querySelector(".return_date");

arrivalInput.addEventListener("focus", function () {
    this.type = "date";  // Change to date when clicked
    this.showPicker();   // Open calendar (if supported)
});

arrivalInput.addEventListener("blur", function () {
    this.type = "text";  // Change back to text when focus is lost
});


// return
returnInput.addEventListener("focus", function () {
    this.type = "date";  // Change to date when clicked
    this.showPicker();   // Open calendar (if supported)
});

returnInput.addEventListener("blur", function () {
    this.type = "text";  // Change back to text when focus is lost
});