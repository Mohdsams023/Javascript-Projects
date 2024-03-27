let qrInput = document.getElementById('qr-input');
let qrBtn = document.getElementById('qr-btn');
let qrImg = document.getElementById('qr-img');
let downloadLink = document.getElementById('download-link');

qrBtn.addEventListener('click', () => {
    let inputValue = qrInput.value;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    downloadLink.href = qrImg.src;
    downloadLink.style.display = 'block'; // Show download button once QR code is generated
});