document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const adharNum = document.getElementById('Aadhar-num').value;
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const travelClass = document.getElementById('class').value;

    // Display ticket details
    document.getElementById('ticket-adhar-num').innerText = adharNum;
    document.getElementById('ticket-source').innerText = source;
    document.getElementById('ticket-destination').innerText = destination;
    document.getElementById('ticket-date').innerText = date;
    document.getElementById('ticket-class').innerText = travelClass;

    // Generate QR Code
    const qrData = `AdharNum: ${adharNum}, Source: ${source}, Destination: ${destination}, Date: ${date}, Class: ${travelClass}`;
    document.getElementById('qrcode').innerHTML = '';
    new QRCode(document.getElementById('qrcode'), qrData);

    // Show ticket page
    showPage('ticket');
});
document.getElementById('gen-ticket').addEventListener('click',()=>{
    document.getElementById('book').classList.add('hidden');
    document.querySelector('.active').classList.remove('hidden');
    document.querySelector('.inner-r-n-b').classList.remove('hidden');
})
document.querySelector('.set-h-w').addEventListener('click',()=>{
    document.getElementById('book').classList.remove('hidden');
    document.querySelector('.active').classList.add('hidden');
    document.querySelector('.inner-r-n-b').classList.add('hidden');
    window.location.reload();
})
