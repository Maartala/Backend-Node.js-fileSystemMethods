import fs from "fs";
// =========================================================
// Ändere den Textinhalt der Datei "blog1.txt".
// =========================================================

// Textinhalt für die neue Datei
const newText = 'Goodbye World!';

// Pfad zur neuen Datei
const filePath = './blog1.txt'

// Neue Datei erstellen und Textinhalt schreiben
fs.writeFile(filePath, newText, (err) => {
    if (err) {
        console.error('Fehler beim Schreiben der Datei:', err);
        return;
    }
    console.log('Datei "blog1.txt" erfolgreich aktualisiert.');
});


// =========================================================
// Erstelle eine neue Datei "blog2.txt" und trage dort einen beliebigen Text ein.
// =========================================================

// Textinhalt für die neue Datei
const newText2 = 'bla bla für blog2.txt';

// Pfad zur neuen Datei
const filePath2 = './blog2.txt';

// Neue Datei erstellen und Textinhalt schreiben
fs.writeFile(filePath2, newText2, (err) => {
    if (err) {
        console.error('Fehler beim Erstellen der Datei:', err);
        return;
    }
    console.log(('Datei "blog2.txt" erfolgreich erstellt und Text eingetragen'));
})


// =========================================================
// Erstelle einen neuen Ordner "assets".
// =========================================================

// Name des neuen Ordners
const folderName = './assets';

// Ordner erstellen
//  Rekursiv bedeutet, dass der Erstellungsprozess über mehrere Ebenen hinweg erfolgt. Wenn man beispielsweise einen neuen Ordner mit dem Pfad "pfad/zum/ordner" erstellen möchte, aber der Ordner "pfad" und/oder "pfad/zum" noch nicht existieren, wird die rekursive Option dafür sorgen, dass die übergeordneten Verzeichnisse automatisch erstellt werden.

fs.mkdir(folderName, { recursive: true }, (err) => {
    if (err) {
        console.error('Fehler beim Erstellen des Ordner: ', err);
        return;
    }
    console.log('Ordner "assets" erfolgreich erstellt');
})


// =========================================================
// Überprüfe, ob die Datei "delete.txt" bereits existiert.  (Conditional Statement)
// Falls ja, lösche diese. 
// Falls nein, erstelle diese.
// =========================================================

// Pfad zur Datei
const filePath3 = './delete.txt';

// Überprüfen, ob die Datei existiert
if (fs.existsSync(filePath3)) {
    // Datei löschen
    fs.unlink(filePath3, (err) => {
        if (err) {
            console.log('Fehler beim Löschen der Datei: ', err);
            return;
        }
        console.log('Datei "delete.txt" erfolgreich gelöscht. ');
    });
} else {
    // Datei erstellen
    fs.writeFile(filePath3, 'hey ho!!!', (err) => {
        if (err) {
            console.error('Fehler beim Erstellen der Datei:', err);
            return;
        }
        console.log('Datei "delete.txt" erfolgreich erstellt.');
    });
}

// =========================================================
// Erstelle eine Datei namens "Hello.txt" und trage dort einen beliebigen Text ein. 
// Benenne die Datei anschließend in "HelloWorld.txt" um.
// =========================================================

// 1. Erstelle die Datei "Hello.txt"

// Pfad zur Datei
const filePath4 = './Hello.txt';
const fileContent = 'HellloooooO';
// Datei erstellen und Text eintragen
fs.writeFile(filePath4, fileContent, (err) => {
    if (err) {
        console.error('Fehler beim Erstellen der Datei: ', err);
        return;
    }
    console.log('Datei "Hello.txt" erfolgreich erstellt');
});


// 2.Benenne die Datei in "HelloWorld.txt" um:

// Pfad zur ursprünglichen Datei
const oldFilePath = './Hello.txt';
// Pfad zur umbenannten Datei
const newFilePath = './HelloWorld.txt'

// Datei umbenennen
fs.rename(oldFilePath, newFilePath, (err) => {
    if (err) {
        console.error('Fehler beim Umnbennen der Datei: ', err);
        return;
    }
    console.log('Datei erfolgreich umbenannt in "HelloWorld.txt".')
});