//getdates.js

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;


//set last date modified manually

const lastModifiedDate = 'April 29, 2024';
document.getElementById('lstModified').textContent = 'Last modified: ${lastModifiedDate}';