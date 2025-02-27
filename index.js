function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code scanned = ${decodedText}`, decodedResult);
    document.getElementById('scanResult').textContent = decodedText;
}

function onScanError(errorMessage) {
    console.error(errorMessage);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", 
    { fps: 10, qrbox: 250 }
);
html5QrcodeScanner.render(onScanSuccess, onScanError);