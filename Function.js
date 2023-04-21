import React from 'react';
import ReactDOM from 'react-dom';

import Corbalar from './Corbalar';
import Anayemek from './Anayemek'
import Icecek from './Icecek';
import Tatli from './Tatli';

export const goster = function goster(eleman) {

    const body = ReactDOM.createRoot(document.getElementById("body"));
    
    if (eleman === "Çorbalar") {
        body.render(
            <Corbalar/>
        )

    }

    if (eleman === "Anayemekler") {
        body.render(
            <Anayemek />
        )

    }

    if (eleman === "Tatlılar") {
        body.render(
            <Tatli />
        )
    }

    if (eleman === "İçecekler") {
        body.render(
            <Icecek />
        )

    }

}

export const sepeteEkle = function sepeteEkle(yemekAdi, yemekFiyati) {
    var sepet = JSON.parse(sessionStorage.getItem('sepet')) || {};
    // Eğer seçilen yemek sepette yoksa adeti 1 olarak eklendi
    if (!sepet[yemekAdi]) {
        sepet[yemekAdi] = { adet: 1, fiyat: yemekFiyati };
    } else {
        // Eğer seçilen yemek sepette varsa adeti bir arttırıldı
        sepet[yemekAdi].adet += 1;
    }
    // Güncellenmiş sepet tekrar session storage'a kaydedildi
    sessionStorage.setItem('sepet', JSON.stringify(sepet));
}


export const sepetiGoster = function sepetiGoster() {
    var sepet = JSON.parse(sessionStorage.getItem('sepet')) || {};
    var sepetListesi = document.getElementById('sepet-listesi');
    var toplamFiyat = 0;
    var bos = document.getElementById('bos');

    sepetListesi.innerHTML = '';
    for (var yemekAdi in sepet) {
        var urun = sepet[yemekAdi];
        var urunFiyati = urun.fiyat * urun.adet;
        toplamFiyat += urunFiyati;

        
        var li = document.createElement('li');

        li.className = 'py-2'
        li.innerHTML = `<i>${yemekAdi} - ${urun.adet} adet - ${urunFiyati} TL &nbsp;&nbsp;</i>`

       
        var silDugmesi = document.createElement('button');
        silDugmesi.innerHTML = 'X';
        silDugmesi.id = yemekAdi; 
        silDugmesi.urun = urun; // urun nesnesini silDugmesi'ne ekleme
        silDugmesi.onclick = function () {
            // "Sil" düğmesine tıklandığında, öğenin adetini bir azaltıldı
            this.urun.adet--;
            // Eğer öğenin adeti sıfırsa, öğeyi sepetten kaldır
            if (this.urun.adet === 0) {
                delete sepet[this.id];
            }
            sessionStorage.setItem('sepet', JSON.stringify(sepet));
            // Sepeti yeniden gösterin
            sepetiGoster();
        };
        // Bootstrap buton stillerini eklemek
        silDugmesi.className = 'btn btn-outline-danger py-1 px-3';
        li.appendChild(silDugmesi);

        sepetListesi.appendChild(li);
    }
    bos.innerHTML = '<i>Sepet:</i>'

    var toplamFiyatElementi = document.getElementById('toplam-fiyat');
    toplamFiyatElementi.innerHTML = `<i>Toplam Fiyat:</i> ${toplamFiyat} TL`;
}







