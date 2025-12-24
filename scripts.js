let currentHunt = -1;
let currentClueIndex = 0;
const hunts = [
    // Escape the House Hunt
    [
        { clue: "I show your face but I’m not a photo. I hang on walls and doors. Where am I?", answer: "mirror" },
        { clue: "I have pages but no homework. I’m quiet unless you drop me. I live where stories sleep.", answer: "bookshelf" },
        { clue: "I open wide but never talk. I keep food safe and cold. Don’t forget to close me!", answer: "fridge" },
        { clue: "I go round and round but never get dizzy. I clean but hate socks in pairs.", answer: "washing machine" },
        { clue: "I have hands but no arms. I never clap, but I’m always right on time.", answer: "clock" },
        { clue: "I hide your feet when you’re not home. I like pairs, but I’m often missing one.", answer: "shoe rack" },
        { clue: "I’m soft, I’m comfy, and I steal naps. People sit on me “just for a minute”.", answer: "couch" },
        { clue: "I light up the dark but disappear by day. Flip me on.", answer: "lamp" },
        { clue: "I’m full of secrets, but I don’t talk. You knock before opening me.", answer: "bedroom door" },
        { clue: "You cracked every lock! The final key is hidden where treasures are kept safe.", answer: "locked box" },
    ],
    // Fortnite IRL Hunt
    [
        { clue: "You’ve dropped in. First loot location: Where controllers go when the game is off.", answer: "gaming desk" },
        { clue: "Shields up! Find the place where drinks recharge HP.", answer: "fridge" },
        { clue: "Storm incoming 🌪️ Where do shoes hide when the storm hits outside?", answer: "entrance" },
        { clue: "You need mats. Wood, brick, metal… Find where tools live.", answer: "garage" },
        { clue: "Campfire deployed 🔥 Where the family gathers to chill.", answer: "lounge room" },
        { clue: "Inventory check. You can’t win without sleep.", answer: "bed" },
        { clue: "Chest nearby… I hear it. Where secrets are stored behind closed doors.", answer: "wardrobe" },
        { clue: "Reboot van activated ⚡ Where devices come back to life.", answer: "phone charger" },
        { clue: "High ground wins games. Go where you can see the whole room.", answer: "stairs" },
        { clue: "Final circle. Only one remains. Where battles are watched, not played.", answer: "tv" },
        { clue: "One last challenge… Look where snacks disappear during long sessions.", answer: "pantry" },
        { clue: "VICTORY ROYALE 🏆 Claim your reward where legends are made.", answer: "prize location" },
    ],
    // Hacker/System Breach Hunt
    [
        { clue: "SYSTEM ONLINE Begin at the device that controls all others.", answer: "router" },
        { clue: "AUTHENTICATION REQUIRED Find where passwords are written but never stored digitally.", answer: "notebook" },
        { clue: "DATA COLD STORAGE Files preserved at low temperature.", answer: "fridge" },
        { clue: "INPUT DEVICE DETECTED Where commands are typed, not spoken.", answer: "keyboard" },
        { clue: "PERIPHERAL FOUND One click can change everything.", answer: "mouse" },
        { clue: "POWER SOURCE Without this, the system fails.", answer: "power board" },
        { clue: "CACHE CLEARED Where clothes are reset to default state.", answer: "laundry" },
        { clue: "BACKUP LOCATION Where items are stored 'just in case'.", answer: "garage" },
        { clue: "DISPLAY OUTPUT Pixels form reality here.", answer: "monitor" },
        { clue: "SECURITY CHECKPOINT Entry requires permission.", answer: "door" },
        { clue: "ENCRYPTED STORAGE Locked, hidden, not obvious.", answer: "drawer" },
        { clue: "SYSTEM LOG Tracks everything that happens over time.", answer: "clock" },
        { clue: "USER PROFILE Where the operator rests.", answer: "bed" },
        { clue: "FINAL ACCESS NODE Only the admin reaches this point.", answer: "desk" },
        { clue: "ROOT ACCESS GRANTED ACCESS GRANTED SYSTEM BREACHED Retrieve payload from secure location.", answer: "final prize" },
    ]
];

// Add event listeners for button actions (Modify, Generate QR Code, Start Hunt)
document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('click', handleButtonAction);
});

function handleButtonAction(event) {
    const id = event.target.id;
    
    if (id.startsWith('start-')) {
        const hunt = id.split('-')[1];
        startHunt(hunt);
    }
    
    if (id.startsWith('generate-qr-')) {
        const hunt = id.split('-')[2];
        generateQRCode(hunt);
    }
    
    if (id.startsWith('modify-')) {
        const hunt = id.split('-')[1];
        modifyHunt(hunt);
    }
}

// Start Hunt Action
function startHunt(hunt) {
    // Start the hunt for the specified hunt (based on hunt id)
    alert(`Starting hunt: ${hunt}`);
}

// Generate QR Code Action
function generateQRCode(hunt) {
    // Generate QR code for the specified hunt's answers
    alert(`Generating QR code for hunt: ${hunt}`);
}

// Modify Hunt Action
function modifyHunt(hunt) {
    // Modify hunt for the specified hunt
    alert(`Modifying hunt: ${hunt}`);
}

// Generate PDF for the hunt with questions and QR codes
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const hunt = hunts[currentHunt];

    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;

    // Page 1: Title and Questions
    doc.setFontSize(16);
    doc.text("Scavenger Hunt: " + hunt[0].clue.split(" ")[0], 20, 20);

    let yPos = 30;
    hunt.forEach((item, index) => {
        doc.setFontSize(12);
        doc.text((index + 1) + ". " + item.clue, 20, yPos);
        yPos += 15; // Space between questions
    });

    doc.addPage();

    // Page 2: QR Codes
    const qrSize = 85; // 3" x 3" QR code
    const margin = 15;
    let xPos = margin;
    let yPosQr = margin;

    hunt.forEach((item, index) => {
        const qrCode = new QRCode(item.answer); // Generate the QR code
        const img = qrCode.createImgData(4); // 4x scale for better quality
        const imgData = 'data:image/png;base64,' + img.toString('base64'); // Base64 image data

        // Place QR Code on PDF
        if (xPos + qrSize > pageWidth - margin) {
            xPos = margin;
            yPosQr += qrSize + margin;  // Move to next row
        }

        doc.addImage(imgData, 'PNG', xPos, yPosQr, qrSize, qrSize);  // Add the QR code
        xPos += qrSize + margin;  // Move QR code position horizontally
    });

    // Save the PDF
    doc.save('scavenger-hunt.pdf');
}
