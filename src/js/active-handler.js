const activePage = window.location.pathname; // get current page path
const navLinks = document.querySelectorAll('nav#menu a'); // get all nav links

// loop through all nav links
navLinks.forEach(link => {
    if (link.href.includes('${activePage}')) { // check if nav link is the same as current page
        link.classList.add('active'); // add active class to current nav link
    }
});
