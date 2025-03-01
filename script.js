document.addEventListener('DOMContentLoaded', () => {

    const loadscrean = document.getElementById('load');
    const container = document.getElementById('container');
    container.style.display = 'none';
    let currentIndex = 0;

    window.onload = () => {
        setTimeout(() => {
            container.style.display = 'block';
            scrollToSection(currentIndex);
            setTimeout(() => {
                loadscrean.style.display = 'none';  // Scroll to the current section
            }, 1000);  // Delay for the duration of the fade-out animation
        }, 2000);  // Small delay before starting the fade-out animation
    };

    const dot1 = document.getElementById('dot1');
    const dot2 = document.getElementById('dot2');
    const dot3 = document.getElementById('dot3');
    const dot4 = document.getElementById('dot4');
    const dot5 = document.getElementById('dot5');
    const dot6 = document.getElementById('dot6');

    const section1 = document.getElementById('page1');
    const section2 = document.getElementById('page2');
    const section3 = document.getElementById('page3');
    const section4 = document.getElementById('page4');
    const section5 = document.getElementById('page5');
    const section6 = document.getElementById('page6');

    document.addEventListener("keydown", function(event) {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
            event.preventDefault();
        }
    });

    const sections = [section1, section2, section3, section4, section5, section6];
    const dots = [dot1, dot2, dot3, dot4, dot5, dot6];

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            if (currentIndex < dots.length - 1) {
                currentIndex++;
            }
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            if (currentIndex > 0) {
                currentIndex--;
            }
        }
        scaleDots();
        scrollToSection(currentIndex);
    });

    function scaleDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.style.transform = `scale(1.7)`;
                dot.style.backgroundColor = '#ffffff';
            } else {
                dot.style.transform = `scale(1) rotate(180deg)`;
                dot.style.backgroundColor = '#ff4e5d99';
            }
        });
    }

    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    }

    let currentPage = "";
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                currentPage = entry.target.id;
                currentIndex = sections.findIndex(section => section.id === currentPage);
                scaleDots();
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            scaleDots();
            scrollToSection(currentIndex);
        });
    });

    scaleDots();

    function page1() {
        currentIndex = 0;
        scrollToSection(0);
        scaleDots();
    }

    function page2() {
        currentIndex = 1;
        scrollToSection(1);
        scaleDots();
    }

    function page3() {
        currentIndex = 2;
        scrollToSection(2);
        scaleDots();
    }

    function page4() {
        currentIndex = 3;
        scrollToSection(3);
        scaleDots();
    }

    function page5() {
        currentIndex = 4;
        scrollToSection(4);
        scaleDots();
    }

    function page6() {
        currentIndex = 5;
        scrollToSection(5);
        scaleDots();
    }
	
});

function sendMessage() {
    const method = document.getElementById("method").value;
    const purpose = document.getElementById("purpose").value;
    const service = document.getElementById("service").value;
    let message = "";

    if (purpose === "request_service") {
        const details = document.getElementById("details").value.trim();
        if (!details) {
            alert("Please enter details for your service request.");
            return;
        }
        message = `Requesting Service: ${service}\nDetails: ${details}`;
    } else {
        message = `Inquiry about: ${service}`;
    }

    if (method === "gmail") {
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=manushasandesha@gmail.com&su=${encodeURIComponent("Service Request")}&body=${encodeURIComponent(message)}`;
        window.open(gmailURL, "_blank");
    } else if (method === "whatsapp") {
        const whatsappURL = `https://wa.me/94701389334?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    }
}

function toggleDetails() {
    const purpose = document.getElementById("purpose").value;
    const detailsField = document.getElementById("detailsField");
    detailsField.style.display = (purpose === "request_service") ? "block" : "none";
}

const info = document.getElementById("info");

info.addEventListener("click", () => {
    info.textContent = "This webpage design by MoA IT.";

    setTimeout(() => {
        info.textContent = "i";
    }, 5000);
});