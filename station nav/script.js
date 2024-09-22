// Page Navigation
const homePage = document.getElementById('home');
const bookingPage = document.getElementById('booking');
const ticketPage = document.getElementById('ticket');

document.getElementById('home-link').addEventListener('click', () => {
    showPage('home');
});

document.getElementById('book-link').addEventListener('click', () => {
    showPage('booking');
});

document.getElementById('back-to-home').addEventListener('click', () => {
    showPage('home');
});

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Form Handling and QR Code Generation
document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const travelClass = document.getElementById('class').value;

    // Display ticket details
    document.getElementById('ticket-source').innerText = source;
    document.getElementById('ticket-destination').innerText = destination;
    document.getElementById('ticket-date').innerText = date;
    document.getElementById('ticket-class').innerText = travelClass;

    // Generate QR Code
    const qrData = `Source: ${source}, Destination: ${destination}, Date: ${date}, Class: ${travelClass}`;
    document.getElementById('qrcode').innerHTML = '';
    new QRCode(document.getElementById('qrcode'), qrData);

    // Show ticket page
    showPage('ticket');
});
