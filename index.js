const flatpickr = require("flatpickr");

// Initialize flatpickr on the date-picker input
flatpickr("#date-picker", {
  // add mindate of 14/01/2023
  minDate: "14/01/2023",
  // set dateformat
  dateFormat: "d/m/Y",
});
