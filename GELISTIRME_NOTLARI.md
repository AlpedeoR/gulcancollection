# GKCollection Geliştirme Notları & Kullanım Kılavuzu

Bu belge, GKCollection web sitesine yapılan tüm geliştirmeleri, mimari kararları, eklenen dosyaları ve sitenin nasıl çalıştığını adım adım açıklamaktadır.

---

## 📌 1. Yapılan Genel Değişiklikler ve Mimari Özeti

| Dosya | Görevi ve Yapılan Değişiklikler |
| :--- | :--- |
| **`products.js`** | **Merkezi Ürün Veritabanı:** Tüm ürünlerin (Çantalar, Cüzdanlar, Diğer) isimleri, kategorileri, fiyatları, detaylı açıklamaları, renk seçenekleri, ölçüleri ve el emeği notlarının tutulduğu dosya. |
| **`main.js`** | **İnteraktif İş Mantığı:** Kategori filtreleme, ürün kartlarına tıklanınca detay sayfasına yönlendirme, URL parametresinden ürün verisini çekip detay sayfasını oluşturma, renk seçimi ve WhatsApp sipariş şablonu oluşturma. |
| **`index.html`** | **Ana Sayfa:** Karşılama alanı (Hero), Koleksiyon altındaki kategori butonları (Tümü, Çantalar, Cüzdanlar, Diğer), Hikayemiz bölümü ve yapılandırılmış İletişim alanı. |
| **`urun-detay.html`** | **Ürün Detay Sayfası:** Tıklanan ürünün açıldığı sayfa. Sayfa yolu (breadcrumbs), büyük ürün vitrini, özel el emeği garanti kutusu, renk seçici butonlar, sipariş butonları ve benzer ürünler önerisi. |
| **`style.css`** | **Tasarım & Responsive Stil:** Doğal krem (`#FDFBF7`), kiremit (`#C87965`) ve toprak tonlarıyla el emeği butik ruhunu yansıtan modern CSS kodları, mobil uyumlu hamburger menü ve ürün ızgarası. |

---

## 📂 2. Adım Adım Neden ve Nasıl Yapıldı?

### Adım 1: Merkezi Ürün Veritabanı Oluşturuldu (`products.js`)
* **Neden yapıldı?**  
  Her ürün için tek tek ayrı HTML dosyaları yazmak yerine, ürünleri tek bir merkezden yönetmek çok daha kolay ve profesyoneldir. Yeni bir ürün eklemek veya bir ürünün fiyatını/rengini değiştirmek istediğinizde sadece bu dosyadaki listeyi güncellemeniz yeterlidir.
* **Nasıl yapıldı?**  
  Ürünler 3 ana kategoride sınıflandırıldı:
  1. `cantalar` (Bohem Omuz Çantası, Burgu Baget Çanta, Hasır & Jüt Tote Çanta)
  2. `cuzdanlar` (Mini Makrome Kartlık, Zarf Model Portföy, Püsküllü Bohem Cüzdan)
  3. `diger` (Makrome Duvar Dekoru, Anahtarlık Seti, Örgü Bardak Altlığı Seti)  
  Her ürüne ait `colors` dizisi, `dimensions` (ölçüler), `material` (malzeme) ve özel el emeği notları tanımlandı.

---

### Adım 2: Koleksiyon ve Kategori Filtreleme Sistemi (`index.html` & `main.js`)
* **Neden yapıldı?**  
  İstediğiniz gibi ürünleri **Koleksiyon** çatısı altında **Çantalar**, **Cüzdanlar** ve **Diğer** şeklinde sınıflandırmak için.
* **Nasıl yapıldı?**  
  - `index.html` içerisine 4 adet filtre butonu eklendi: `Tüm Ürünler`, `👜 Çantalar`, `👛 Cüzdanlar`, `✨ Diğer Tasarımlar`.
  - `main.js` içerisindeki `initProductListing()` fonksiyonu, tıklanan kategori butonunu dinler (`data-category`).
  - Sayfa yenilenmeden, seçilen kategoriye ait ürünler anında ekranda listelenir.
  - Her ürün kartında kategorisi, adı, kısa açıklaması, mevcut renk noktacıkları, fiyatı ve "İncele" butonu yer alır.

---

### Adım 3: Ürün Detay Sayfası ve URL Yönlendirmesi (`urun-detay.html`)
* **Neden yapıldı?**  
  Ürün kartına tıklandığında ilgili ürünün tüm detaylarının, büyük görselinin, ölçülerinin ve sipariş seçeneklerinin yer aldığı bir sayfaya gidilmesi gerekiyordu.
* **Nasıl yapıldı?**  
  - Ürün kartına tıklandığında tarayıcı `urun-detay.html?id=urun-id-kodu` adresine yönlenir.
  - `main.js`, URL'deki `?id=...` parametresini okur (`new URLSearchParams`).
  - Veritabanından o ID'ye ait ürünü bulur ve sayfayı sıfırdan o ürüne göre giydirir.
  - Sayfa başlığı (title) ve sayfa yolu (breadcrumbs: *Ana Sayfa > Koleksiyon > Çantalar > Ürün Adı*) otomatik güncellenir.
  - Sayfanın en altında müşterinin sitede gezmeye devam etmesi için *"Koleksiyondan Diğer Seçenekler"* (benzer ürünler) gösterilir.

---

### Adım 4: "Her Ürün Sipariş Üzerine Yapılır" Vurgusu ve Renk Seçenekleri
* **Neden yapıldı?**  
  Özellikle belirttiğiniz: *"Her ürün sipariş üzerine yapılır, %100 Kendi ellerimle yapıyorum"* vurgusunu ve farklı renk seçeneklerinin olduğunu müşteriye en güven verici şekilde göstermek için.
* **Nasıl yapıldı?**  
  1. **El Emeği Vurgu Kutusu (`artisan-guarantee-box`):**  
     Ürün detay sayfasında fiyatın hemen altına göz alıcı, sıcak tonlu özel bir kutu eklendi:
     > ✨ **Özel Sipariş & El Emeği Güvencesi**  
     > *"Her ürün sipariş üzerine yapılır, %100 kendi ellerimle yapıyorum."*  
     > Seri üretim fabrikasyon ürünler yerine, doğrudan size özel, ilmek ilmek dokunmuş benzersiz bir tasarım teslim alırsınız.
  2. **İnteraktif Renk Seçici (`color-swatches`):**  
     Ürünün sahip olduğu renkler yuvarlak renk numuneleri ve isimleriyle listelendi. Müşteri bir renge tıkladığında:
     - Seçilen rengin ismi anında güncellenir.
     - Altındaki WhatsApp sipariş butonunun mesajına seçilen renk otomatik eklenir (Örn: *"Merhaba GKCollection! Bohem Makrome Omuz Çantası ürününüz hakkında bilgi almak istiyorum. Tercih ettiğim renk: Adaçayı Yeşili."*).
  3. **Özel Renk Notu:**  
     Renk kutusunun altına *"Farklı renk ve özel ebat talepleriniz mevcuttur. Dilediğiniz özel ton için sipariş verirken belirtebilirsiniz."* notu eklendi.

---

### Adım 5: Hikayemiz ve İletişim Hazırlığı (`index.html`)
* **Neden yapıldı?**  
  Web sitesinin eksik olan hikaye bölümünü tamamlamak, el yapımı markanın sıcaklığını aktarmak ve bir sonraki adımda yapacağımız iletişim bilgilerine zemin hazırlamak için.
* **Nasıl yapıldı?**  
  - `#hikayemiz` bölümü eklenerek atölye ruhu, doğal iplikler (pamuk & jüt) ve kişiye özel üretim süreci (3-5 iş günü) anlatıldı.
  - `#iletisim` alanında e-posta, Instagram ve WhatsApp için hazır şablonlar oluşturuldu.

---

## 🛠️ 3. Yeni Ürün Nasıl Eklenir veya Düzenlenir?

Yeni bir ürün eklemek veya var olan bir ürünü değiştirmek için sadece **`products.js`** dosyasını açmanız yeterlidir.

Örnek ürün şablonu:
```javascript
{
    id: "yeni-canta-modeli",               // Linkte görünecek benzersiz kod
    name: "Özel Tasarım Zincirli Çanta",    // Ürün adı
    category: "cantalar",                  // "cantalar", "cuzdanlar" veya "diger"
    categoryLabel: "Çantalar",             // Ekranda yazacak kategori adı
    price: "890 ₺",                        // Fiyat
    shortDesc: "Kısa tanıtım yazısı.",
    description: "Detaylı ürün açıklaması.",
    dimensions: "Genişlik: 26 cm | Yükseklik: 18 cm",
    material: "Doğal Pamuk Kordon İp",
    productionTime: "3 - 5 iş günü",
    artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle yapıyorum.",
    colorNote: "Farklı renk seçenekleri mevcuttur.",
    colors: [
        { name: "Ekru", code: "#F4EFE6" },
        { name: "Kiremit", code: "#C87965" },
        { name: "Siyah", code: "#2B2B2B" }
    ],
    careInstructions: "Nemli bezle temizleyiniz.",
    badge: "Yeni",                         // İsteğe bağlı etiket ("Çok Satan", "Yeni" vb.)
    image: "images/yeni-canta.jpg"         // Fotoğraf eklediğinizde buraya yolunu yazabilirsiniz
}
```

---

---

## 📞 4. İletişim Bilgileri Entegrasyonu (Adım Adım Açıklama)

İlettiğiniz iletişim bilgileri tüm siteye, ürün detay sayfalarına ve sipariş butonlarına entegre edildi:

* **Telefon & WhatsApp Hattı:** `0545 594 64 10`  
  * Uluslararası WhatsApp formatı: `905455946410`
  * Ürün detay sayfasındaki **"Sipariş Ver / WhatsApp'tan Yaz"** butonuna bağlandı. Müşteri butona bastığında seçtiği renk ve ürün adı otomatik olarak WhatsApp mesajına doldurulur.
  * Ana sayfada **"İletişim & Özel Sipariş Hattı"** başlığı altında öne çıkan yeşil WhatsApp iletişim kartı oluşturuldu.
  * Ekranın sağ alt köşesine her sayfada görünen **Sabit (Floating) WhatsApp Butonu** eklendi. Müşteri dilediği sayfadan tek tıkla WhatsApp'a geçip soru sorabilir.
* **Instagram Adresi:** `@gulcancollection`  
  * Doğrudan profil linki (`https://instagram.com/gulcancollection`) ile hem ürün detay sayfasına, hem ana sayfa iletişim kartlarına hem de alt bilgiye (footer) eklendi.
* **E-posta Adresi:** `alpkoz24@gmail.com`  
  * `mailto:alpkoz24@gmail.com` bağlantısıyla doğrudan e-posta programını açacak şekilde yerleştirildi.
* **Herhangi Bir Soru / İstek İçin WhatsApp Odaklı Yaklaşım:**  
  * "Whatsapp üzerinden ulaşabilirler herhangi bir soru istek için" talebiniz doğrultusunda WhatsApp, sitenin birincil iletişim kanalı haline getirildi. Soru sormak, renk danışmak ve özel sipariş vermek isteyen müşteriler için her yerde net yönlendirmeler yapıldı.

---

## 🎯 5. Sitedeki İletişim Bağlantılarını İleride Değiştirmek İsterseniz
* **`main.js` Dosyasındaki Ayar:**  
  Dosyanın en başında bulunan `SITE_CONFIG` objesi sayesinde numarayı veya kullanıcı adını tek bir yerden değiştirebilirsiniz:
  ```javascript
  const SITE_CONFIG = {
      phoneDisplay: "0545 594 64 10",
      phoneTel: "+905455946410",
      whatsappNumber: "905455946410",
      instagramHandle: "@gulcancollection",
      instagramUrl: "https://instagram.com/gulcancollection",
      email: "alpkoz24@gmail.com"
  };
  ```
* **HTML Dosyaları:**  
  `index.html` ve `urun-detay.html` içindeki footer ve iletişim kartları da bu değerlerle tam uyumlu çalışmaktadır.

---

## 🌐 6. Squarespace Domain (bygulcan.com) & GitHub Pages HTTPS (SSL) Kurulum Rehberi

Squarespace'ten aldığınız yeni alan adını (`bygulcan.com`) GitHub Pages projenize bağlamak ve güvenli bağlantı (**HTTPS - SSL**) sağlamak için izlenecek adımlar:

### A. Repoya Eklenen `CNAME` Dosyası
* Reponuzun kök dizinindeki `CNAME` dosyası `www.bygulcan.com` olarak güncellendi ve GitHub'a yüklendi.
* Bu dosya GitHub Pages'e hangi alan adına hizmet vereceğini bildirir (hem `bygulcan.com` hem de `www.bygulcan.com` olarak çalışır).

### B. Squarespace DNS Yönetiminde Eklenecek Kayıtlar (`bygulcan.com`)
Squarespace Domains kontrol panelinde (`domains.squarespace.com`) **bygulcan.com** alan adınızı seçip **"DNS Settings" (DNS Ayarları)** bölümüne gidin. Sayfada varsa varsayılan eski veya çakışan A / CNAME kayıtlarını silip şu kayıtları ekleyin:

1. **4 Adet GitHub IP Adresi (Kök Alan Adı `@` İçin A Kayıtları):**
   * **Host:** `@` | **Type:** `A` | **Data:** `185.199.108.153`
   * **Host:** `@` | **Type:** `A` | **Data:** `185.199.109.153`
   * **Host:** `@` | **Type:** `A` | **Data:** `185.199.110.153`
   * **Host:** `@` | **Type:** `A` | **Data:** `185.199.111.153`

2. **1 Adet CNAME Kaydı (`www` Alt Alan Adı İçin):**
   * **Host:** `www` | **Type:** `CNAME` | **Data:** `AlpedeoR.github.io.`

### C. GitHub Pages'te HTTPS'i Aktifleştirme
1. GitHub reponuza gidin: `https://github.com/AlpedeoR/gulcancollection` -> **Settings** -> **Pages**.
2. **Custom domain** alanında `www.bygulcan.com` yazısını doğrulayın (veya gerekiyorsa Save'e basın).
3. DNS kayıtları Squarespace tarafından dünyaya yayıldığında (genellikle 10-30 dakika içinde), GitHub otomatik olarak ücretsiz bir Let's Encrypt SSL sertifikası tanımlar ("DNS check successful" yazar).
4. Sertifika hazır olduğunda sayfadaki **"Enforce HTTPS"** kutucuğu aktif (tıklanabilir) hale gelir. Bu kutucuğu işaretleyin.
5. Artık sitenize `bygulcan.com` veya `www.bygulcan.com` üzerinden girildiğinde otomatik olarak güvenli `https://www.bygulcan.com` adresine yönlenir ve tarayıcıda kilit simgesi görünür.

---

## 👜 7. Gerçek Çanta Modelleri, Fotoğrafları ve Alternatif Renkler

Masaüstündeki çanta fotoğrafları ve bilgi notları baz alınarak gerçek ürünler siteye eklendi:

1. **Simli Makrome Geometrik Omuz Çantası (Bej & Füme Gri):**
   * Tığ işi kabartmalı piramit doku, gold metal halkalı örgü omuz askısı ve GK Collection deri etiket.
   * `images/canta-simli-geometrik-bej.jpg` ve `images/canta-simli-geometrik-gri.jpg`.
   * Simli Şampanya / Bej, Simli Füme / Gri, Gece Siyahı, Kiremit ve Zümrüt Yeşili renk seçenekleri.
   * Renk butonuna tıklandığında ana görsel ilgili renge otomatik geçiş yapar.
2. **Tahta Saplı Doğal Pamuk Makrome Çanta:**
   * Doğal masif ahşap kulp ve kalın pamuk makrome örgü.
   * `images/canta-tahta-sapli-makrome.jpg`.
   * En 25 cm, Boy 14 cm. 1 hafta içinde kargoda.
   * Doğal Ekru, Toprak Karamel, Adaçayı Yeşili, Kiremit ve Siyah renk seçenekleri.
3. **Çift Renk Çizgili Puf Örgü Hobo Çanta:**
   * Geniş hacimli, kabartmalı puf (popcorn) dikişli, kumaş astarlı hobo çanta.
   * `images/canta-cizgili-puf-kahve.jpg` ve `images/canta-cizgili-puf-ekru.jpg`.
   * Çikolata Kahve & Ekru ile Ekru & Çikolata Kahve çift renk seçenekleri ve özel ton kombinasyonları.
4. **Ahşap Boncuk Saplı El Örgüsü Sepet Çanta:**
   * Siyah cilalı ahşap halka ve küre boncuklu el yapımı sap, sık iğne tok örgü sepet form.
   * `images/canta-ahsap-boncuk-sepet.jpg`.
   * Mat Asil Siyah, Acı Kahve, Doğal Ekru, Bordo ve Haki Yeşili renk seçenekleri.
5. **Fiyonk Detaylı Fitilli El Örgüsü Kol Çantası:**
   * Fitilli dikey örgü dokusu, metal halkalı örgü askı ve çift renkli sevimli fiyonk broş.
   * `images/canta-fiyonklu-fitilli.jpg`.
   * Antrasit & Fıstık Yeşili & Tarçın, Krem & Pudra, Kiremit & Bej vb. renk kombinasyonları.
6. **Simli Geometrik Omuz Çantası (Füme Gri):**
   * `images/canta-simli-geometrik-gri.jpg`.
   * Taş grisi ve fümenin simli ışıltıyla buluştuğu popüler renk varyantı.

### 🖼️ Galeri ve Dinamik Renk-Fotoğraf Eşleşmesi
* Ürün detay sayfasında birden fazla açısı olan çantalar için küçük resim galerisi (thumbnails) eklendi.
* Müşteri renk seçeneklerinden bir renge (örneğin "Füme / Gri" veya "Ekru / Çikolata") tıkladığında çanta fotoğrafı anında o renge ait fotoğrafa dönüşmektedir.
* Ana sayfadaki "Hikayemiz" alanına tüm koleksiyonun bir arada yer aldığı stüdyo fotoğrafı (`images/canta-koleksiyon-grup.jpg`) yerleştirildi.

