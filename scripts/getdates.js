// script for dynamically outputting:
// - the copyright year (current year) in footer's first paragraph
// - the date document was last modified in second paragraph
//** Use the lastModified property of the document object to get this date/time dynamically.You do not need to alter the document.lastModified native format.
const  learnActList = document.getElementById('learnActList');
const currentYear = new Data().geyfullYear();
const currentYearElement = document.getElementById('currentYear');
currentYearElement.textContent = currentYear;
const lastModifiedElement = document.getElementById('lastModified');
