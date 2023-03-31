/* Ovdje sam naveo ugrađenu javascript funkciju window.onload
(koja ce obavljati neku funkciju nakon sto se stranica ucita),
unutar nje sam naveo funkciju koja sadrzi tri varijable 
prva varijabla pdfPodrucje dohvata dokument po ID-u a to je pdfPodrucje
tacnije div u kojem se nalazi citav dokument CV. 
Druga varijabla je btnPDF koja dohvata dokument takodje po ID-u
a to je dugme za preuzimanje dokumenta u obliku PDF-a.
Zatim u trecoj varijabli opt sam definisao opcije pdf dokumenta
kao sto su margine naziv fajla tokom preuzimanja, tip slike, kvalitet slike, orijentacija i tako dalje
nakon toga sam pozvao dugmic btnPDF i pozvao komandu da kada se klikne na njega
pozove externu skriptu i printa citatvo pdfPodrucje i primjeni vec definisane opcije
za dokument.  */

window.onload = function(){
    var pdfPodrucje = document.getElementById('pdfPodrucje');
    var btnPDF = document.getElementById('btnPDF');
    var opt = {
        margin:        [1, 0, 0, 0],
        filename:     'mojCV.pdf',
        image:        { type: 'png', quality: 0.6 },
        html2canvas:  { scale: 3, letterRendering: true},
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' }
      };
      btnPDF.onclick = () => {
        setTimeout(() => {
            html2pdf(pdfPodrucje, opt);
        }, 1000); // Kašnjenje od 1 sekunde
    }
    btnPDF.onclick= ()=> html2pdf(pdfPodrucje, opt);
}
/*Iz nekog razloga tokom preuzimanja pdf dokumenta ima neki bug 
i ne ucitava se slika probao sam mjenjanje formata jpeg, png, jpg
ali nije bilo uspjesno. Nakon toga sam našao riješenje da prebacim sliku u 
base64 format ali takva metoda je zahtjevala da u html dokument ubacim otprilike 
400 linija koda sto je bilo poprilicno neuredno pa sam od toga odustao ukoliko to 
bude problem mogu naknadno dodati takav format slike.*/

