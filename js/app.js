function sendMessage() {   
    var username = document.querySelector("#username").value;
    var email = document.querySelector("#email").value;
    var subject = document.querySelector("#subject").value;
    var message = document.querySelector("#message").value;
    
    if (!username || !email || !subject || !message) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "All fields are required. Please fill in all fields."
        });
        return;
    }
    
    emailjs.init("hCk4bXxC54xO4aPU2");
    
    var serviceId = "service_ukl92cs";
    var templateId = "template_8ms7jhn";
    
    var params = {
        username: username,
        email: email,
        subject: subject,
        message: message
    };
    
    emailjs.send(serviceId, templateId, params)
        .then(res => {
            Swal.fire("Your message has been sent successfully!");
        })
        .catch(error => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "It was not possible to send the message."
            });
        });
}







let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};





let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });





    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);



    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
    
};





ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});




ScrollReveal().reveal('.home-content, .home-content p, .about-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content p, .about-img', { origin: 'left' });
