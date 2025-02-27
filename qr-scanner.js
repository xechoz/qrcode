document.addEventListener('DOMContentLoaded', () => {
    const scanner = new QrScanner(
        document.getElementById('scanner'),
        result => {
            document.getElementById('scanResult').textContent = result;
            console.log('Decoded QR code:', result);
        },
        {
            highlightScanRegion: true,
            highlightCodeOutline: true,
        }
    );

    const startButton = document.getElementById('start-scanner');
    const stopButton = document.getElementById('stop-scanner');
    const flashButton = document.getElementById('toggle-flash');

    startButton.addEventListener('click', () => {
        scanner.start();
    });

    stopButton.addEventListener('click', () => {
        scanner.stop();
    });

    flashButton.addEventListener('click', () => {
        if (scanner.hasFlash()) {
            scanner.toggleFlash();
        } else {
            alert('No flash available on this device');
        }
    });

    // Cleanup when leaving the page
    window.addEventListener('beforeunload', () => {
        scanner.stop();
        scanner.destroy();
    });
});