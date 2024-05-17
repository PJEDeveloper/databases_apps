//Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    //Select all <section> elements and store them in the sections constant
    const sections = document.querySelectorAll('section');
    //Select all anchor tags within list items in the navigation bar and store them in navLinks constant
    const navLinks = document.querySelectorAll('nav ul li a');
    
    //Add an event listener for the scroll event on the window object
    window.addEventListener('scroll', function() {
        //Initialize a variable current to keep of the current section in view
        let current = '';
        //Iterate over each section element
        sections.forEach(section => {
            //Get the distance from the top of the page to the top of the current section
            const sectionTop = section.offsetTop;
            //Check if the current scroll position is greater than or equal to the section's top position minus 60 pixels
            if (scrollY >= sectionTop - 60) {
                //If true, set current to ID of the current section
                current = section.getAttribute('id');
            }
        });

        //Iterate over each navigation link
        navLinks.forEach(link => {
            //Remove the active class from all navigation links
            link.classList.remove('active');
            //Check if href attribute of the link includes the current section's ID
            if(link.getAttribute('href').includes(current)) {
                //If true, add the active class to the link
                link.classList.add('active');
            }
        });
    });
});