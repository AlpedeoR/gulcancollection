/**
 * GKCollection - Ürün Veritabanı
 * 
 * Bu dosya sitedeki tüm ürünlerin bilgilerini içerir.
 * Yeni bir ürün eklemek veya mevcut ürünü düzenlemek için bu dosyadaki listeyi güncellemeniz yeterlidir.
 */

const PRODUCTS_DATA = [
    // --- 1. ÇANTALAR (GERÇEK FOTOĞRAFLI MODELLER) ---
    {
        id: "simli-makrome-geometrik-omuz-cantasi",
        name: "Simli Makrome Geometrik Omuz Çantası",
        category: "cantalar",
        categoryLabel: "Çantalar",
        price: "1850 ₺",
        image: "images/canta-simli-geometrik-bej.jpg",
        images: [
            "images/canta-simli-geometrik-bej.jpg",
            "images/canta-simli-geometrik-bej-2.jpg",
            "images/canta-simli-geometrik-gri.jpg"
        ],
        shortDesc: "Tığ işi piramit kabartma dokulu, ışıltılı simli makrome omuz çantası.",
        description: "GK Collection imzalı bu özel model, el emeği tığ işi kabartma piramit tekniği ile simli makrome ipin göz alıcı ışıltısını bir araya getiriyor. Gold metal halkalarla güçlendirilmiş el örgüsü omuz askısı sayesinde gün boyu konforlu bir kullanım sağlar. Hakiki deri GK Collection logomuz ile tamamlanmıştır.",
        dimensions: "Genişlik: 24 cm | Yükseklik: 18 cm | Askı Boyu: 65 cm",
        material: "Özel Işıltılı Simli Makrome İpi, Gold Metal Halka Bağlantılar, Deri GK Etiket",
        productionTime: "2 - 3 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle ilmek ilmek dokuyorum.",
        colorNote: "Fotoğraflardaki Simli Şampanya/Bej ve Simli Füme/Gri renklerin yanı sıra gardırobunuza uygun dilediğiniz özel simli renkte de örülebilir.",
        colors: [
            { name: "Simli Şampanya / Bej", code: "#D4C4A8", image: "images/canta-simli-geometrik-bej.jpg" },
            { name: "Simli Füme / Gri", code: "#7A8288", image: "images/canta-simli-geometrik-gri.jpg" },
            { name: "Simli Gece Siyahı", code: "#1C1C1C" },
            { name: "Simli Kiremit", code: "#C87965" },
            { name: "Simli Zümrüt Yeşili", code: "#2D5A4C" }
        ],
        careInstructions: "Elde nazikçe ılık su ile yıkanmalıdır. Düz zeminde kurutunuz, çamaşır makinesinde sıkma yapmayınız.",
        badge: "Çok Satan"
    },
    {
        id: "tahta-sapli-pamuk-makrome-canta",
        name: "Tahta Saplı Doğal Pamuk Makrome Çanta",
        category: "cantalar",
        categoryLabel: "Çantalar",
        price: "1190 ₺",
        image: "images/canta-tahta-sapli-makrome.jpg",
        images: [
            "images/canta-tahta-sapli-makrome.jpg"
        ],
        shortDesc: "Doğal masif tahta kulplu, tok dokulu el örgüsü pamuk makrome el çantası.",
        description: "Doğallıktan ilham alan tasarımıyla kalın dokulu pamuk makrome iplik ve pürüzsüz doğal masif ahşap kulpun mükemmel uyumu. Tok duruşu ve geniş iç hacmiyle günlük kullanımda hem çok pratik hem de bohem bir şıklık sunar. Deri GK Collection logo detayıyla özel el işçiliği.",
        dimensions: "Genişlik (En): 25 cm | Yükseklik (Boy): 14 cm | Kulp Dahil: 24 cm",
        material: "%100 Pamuk Makrome İpi, Doğal Masif Ahşap Oval Kulp, Deri GK Etiket",
        productionTime: "1 hafta içinde kargoda (5 - 7 iş günü)",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle sağlam ve titiz bir işçilikle hazırlıyorum.",
        colorNote: "Doğal krem/ekru rengin haricinde dilediğiniz toprak ve pastel tonlarda da sipariş üzerine üretilebilir.",
        colors: [
            { name: "Doğal Ekru / Krem", code: "#EFE8DA", image: "images/canta-tahta-sapli-makrome.jpg" },
            { name: "Toprak / Karamel", code: "#9C6644" },
            { name: "Adaçayı Yeşili", code: "#8A9A86" },
            { name: "Kiremit Tonu", code: "#C87965" },
            { name: "Mat Siyah", code: "#2B2B2B" }
        ],
        careInstructions: "Nemli bir bezle silinerek temizlenmesi tavsiye edilir. Ahşap kulp kısmının uzun süre ıslak kalmamasına özen gösteriniz.",
        badge: "Yeni Model"
    },
    {
        id: "cizgili-puf-orgu-hobo-canta",
        name: "Çift Renk Çizgili Puf Örgü Hobo Çanta",
        category: "cantalar",
        categoryLabel: "Çantalar",
        price: "1500 ₺",
        image: "images/canta-cizgili-puf-kahve.jpg",
        images: [
            "images/canta-cizgili-puf-kahve.jpg",
            "images/canta-cizgili-puf-ekru.jpg"
        ],
        shortDesc: "Çift renkli çizgili, kabartmalı puf örgü dokulu geniş hacimli hobo omuz çantası.",
        description: "Geniş iç hacmi ve dökümlü salaş hobo formu ile gün boyu yanınızdan ayırmak istemeyeceğiniz bir tasarım. Çift renkli yatay çizgileri kabartan puf (popcorn) dikiş detayları çantaya zengin bir doku kazandırır. İç kısmındaki koruyucu kumaş astarı eşyalarınızı güvende tutar.",
        dimensions: "Genişlik: 36 cm | Yükseklik: 28 cm | Taban Derinliği: 10 cm",
        material: "Kalın Pamuk Kordon İplik, Kabartmalı Puf Dikişler, Kumaş İç Astar, Deri GK Etiket",
        productionTime: "3 - 5 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle sevgi ve özenle örüyorum.",
        colorNote: "Fotoğraflardaki Çikolata Kahve & Ekru ve Ekru & Çikolata Kahve kombinasyonlarının yanı sıra istediğiniz çift renk kombinasyonu yapılabilir.",
        colors: [
            { name: "Çikolata Kahve & Ekru Çizgili", code: "#5C4033", image: "images/canta-cizgili-puf-kahve.jpg" },
            { name: "Ekru & Çikolata Kahve Çizgili", code: "#EDE6D6", image: "images/canta-cizgili-puf-ekru.jpg" },
            { name: "Kiremit & Krem Çizgili", code: "#C87965" },
            { name: "Adaçayı Yeşili & Ekru Çizgili", code: "#8A9A86" },
            { name: "Antrasit & Taş Rengi Çizgili", code: "#2B2B2B" }
        ],
        careInstructions: "Elde ılık suda nazikçe yıkanabilir. Düz zeminde kurutunuz, çamaşır suyu kullanmayınız.",
        badge: "Geniş Hacim"
    },
    {
        id: "ahsap-boncuk-sapli-sepet-canta",
        name: "Ahşap Boncuk Saplı El Örgüsü Sepet Çanta",
        category: "cantalar",
        categoryLabel: "Çantalar",
        price: "1750 ₺",
        image: "images/canta-ahsap-boncuk-sepet.jpg",
        images: [
            "images/canta-ahsap-boncuk-sepet.jpg"
        ],
        shortDesc: "Siyah ahşap halka ve küre boncuk saplı, tok duruşlu şık sepet çanta.",
        description: "Geometrik ve asil bir duruş! Sık dokuma tekniğiyle örülmüş tok duruşlu sepet gövde, siyah cilalı ahşap halka ve boncuklardan oluşan el yapımı çift sap ile taçlandırılmıştır. Hem elde taşımaya hem de kolda duruşa uygun ergonomik yapısıyla davetlerde ve özel günlerde göz kamaştırır.",
        dimensions: "Genişlik: 28 cm | Yükseklik: 20 cm | Taban Genişliği: 9 cm",
        material: "Dayanıklı Sık İğne Makrome Örgü, Cilalı Siyah Ahşap Boncuklar ve Halkalar, Deri GK Etiket",
        productionTime: "3 - 4 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle tek tek boncukları dizerek hazırlıyorum.",
        colorNote: "Asil siyahın yanı sıra krem, acı kahve veya bordo renk seçenekleri mevcuttur.",
        colors: [
            { name: "Mat Asil Siyah", code: "#1C1C1C", image: "images/canta-ahsap-boncuk-sepet.jpg" },
            { name: "Acı Kahve / Moka", code: "#4A3728" },
            { name: "Doğal Ekru", code: "#F5F2EB" },
            { name: "Bordo / Vişne", code: "#6B2D35" },
            { name: "Haki Yeşili", code: "#556B2F" }
        ],
        careInstructions: "Nemli bir bezle silinerek temizlenmesi önerilir. Ahşap boncukların parlaklığını korumak için yoğun sudan uzak tutunuz.",
        badge: "Özel Tasarım"
    },
    {
        id: "fiyonk-detayli-fitilli-kol-cantasi",
        name: "Fiyonk Detaylı Fitilli El Örgüsü Kol Çantası",
        category: "cantalar",
        categoryLabel: "Çantalar",
        price: "1250 ₺",
        image: "images/canta-fiyonklu-fitilli.jpg",
        images: [
            "images/canta-fiyonklu-fitilli.jpg"
        ],
        shortDesc: "Fitilli dikey örgü dokulu, metal halkalı ve sevimli fiyonk detaylı kol çantası.",
        description: "Dikey fitilli örgü deseni, gümüş metal halkalarla bağlanan yumuşacık örgü askısı ve ön kısmındaki el yapımı çift katmanlı fiyonk detayıyla feminen ve neşeli bir stil sunar. İster spor ister klasik kombinlerle keyifle kullanabileceğiniz özel bir parça.",
        dimensions: "Genişlik: 26 cm | Yükseklik: 22 cm | Kol Askı Boyu: 55 cm",
        material: "Fitilli Pamuklu İplik, Gümüş Metal Halka Bağlantılar, Çift Renk El Örgüsü Fiyonk, Deri GK Etiket",
        productionTime: "3 - 5 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle özenle dikip örüyorum.",
        colorNote: "Gövde, askı ve fiyonk renklerinde dilediğiniz özel renk kombinasyonları yapılabilmektedir.",
        colors: [
            { name: "Antrasit (Fıstık Yeşili & Tarçın Fiyonk)", code: "#3A3532", image: "images/canta-fiyonklu-fitilli.jpg" },
            { name: "Krem & Pudra Pembe", code: "#F7F4EE" },
            { name: "Kiremit & Bej", code: "#C87965" },
            { name: "Adaçayı Yeşili & Ekru", code: "#8A9A86" },
            { name: "Gece Siyahı & Kırmızı", code: "#1E1E1E" }
        ],
        careInstructions: "Elde soğuk su ile çitilemeden yıkanabilir. Düz zeminde kurutunuz.",
        badge: "Özel Tasarım"
    },
    {
        id: "simli-geometrik-omuz-cantasi-gri",
        name: "Simli Geometrik Omuz Çantası (Füme Gri)",
        category: "cantalar",
        categoryLabel: "Çantalar",
        price: "1850 ₺",
        image: "images/canta-simli-geometrik-gri.jpg",
        images: [
            "images/canta-simli-geometrik-gri.jpg",
            "images/canta-simli-geometrik-bej.jpg"
        ],
        shortDesc: "Füme gri tonlarında, simli ışıltılı ve kabartma desenli tığ işi omuz çantası.",
        description: "Taş grisi ve fümenin dinginliğini simli makrome ipin zarafetiyle buluşturan model. Katmanlı tığ işi kabartma motifi çantaya üç boyutlu zengin bir görünüm kazandırır. Omuzda kaymayan örgü askısı ile gün boyu konfor sağlar.",
        dimensions: "Genişlik: 24 cm | Yükseklik: 18 cm | Askı Boyu: 65 cm",
        material: "Simli Füme Makrome İpi, Piramit Tığ İşi Kabartma, Metal Bağlantılar, Deri GK Etiket",
        productionTime: "2 - 3 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle tek tek ilmek atarak hazırlıyorum.",
        colorNote: "Füme grinin yanı sıra şampanya bej, kömür karası veya gece mavisi seçenekleri mevcuttur.",
        colors: [
            { name: "Simli Füme / Gri", code: "#7A8288", image: "images/canta-simli-geometrik-gri.jpg" },
            { name: "Simli Şampanya / Bej", code: "#D4C4A8", image: "images/canta-simli-geometrik-bej.jpg" },
            { name: "Kömür Karası", code: "#24201E" },
            { name: "Gece Mavisi", code: "#1D2D44" },
            { name: "Gül Kurusu", code: "#B5838D" }
        ],
        careInstructions: "Elde yıkama önerilir. Asarak değil, düz zeminde kurutunuz.",
        badge: "Trend Model"
    },

    // --- 2. CÜZDANLAR ---
    {
        id: "mini-makrome-kartlik-cuzdan",
        name: "Mini Makrome Kartlık & Bozuk Para Cüzdanı",
        category: "cuzdanlar",
        categoryLabel: "Cüzdanlar",
        price: "290 ₺",
        shortDesc: "Kompakt boyutlu, antik bronz kilitli el örgüsü mini cüzdan.",
        description: "Küçük çantalara kolayca sığabilen veya tek başına elde taşınabilecek tatlılıkta bir tasarım. Kartlarınızı, nakit paranızı ve küçük eşyalarınızı düzenli tutar. Antik bronz çıtçıtı ve özel dokusuyla el yapımının sıcaklığını hissettirir.",
        dimensions: "Genişlik: 12 cm | Yükseklik: 9 cm",
        material: "İnce Pamuk Makrome İpi, Antik Bronz Kilit, Kumaş Astar",
        productionTime: "2 - 3 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle sevgiyle yapıyorum.",
        colorNote: "Zengin renk kartelamızdan istediğiniz rengi seçebilirsiniz. Kişiye özel hediye için harika bir seçenektir.",
        colors: [
            { name: "Kiremit", code: "#C87965" },
            { name: "Kum Beji", code: "#EAE0D5" },
            { name: "Zümrüt Yeşili", code: "#2D5A4C" },
            { name: "Gül Kurusu", code: "#B5838D" },
            { name: "Kömür Grisi", code: "#3D3D3D" }
        ],
        careInstructions: "Nemli bir süngerle silinebilir.",
        badge: "Favori"
    },
    {
        id: "zarf-model-fermuarli-portfoy",
        name: "Zarf Model Fermuarlı Portföy Cüzdan",
        category: "cuzdanlar",
        categoryLabel: "Cüzdanlar",
        price: "420 ₺",
        shortDesc: "Telefon ve nakit bölmeli, bilek askılı el örgüsü portföy cüzdan.",
        description: "Telefonunuzu, anahtarlarınızı ve makyaj malzemelerinizi taşıyabileceğiniz pratik portföy cüzdan. Çıkarılabilir bilek askısı sayesinde hem cüzdan hem de mini el çantası olarak kullanılabilir.",
        dimensions: "Genişlik: 20 cm | Yükseklik: 12 cm",
        material: "%100 Pamuklu İplik, Yüksek Kalite Metal Fermuar, Çıkarılabilir Askı",
        productionTime: "2 - 4 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle özenle dikip örüyorum.",
        colorNote: "Farklı renk seçenekleri mevcut olup kişisel istekleriniz doğrultusunda renk kombinasyonları da yapılabilmektedir.",
        colors: [
            { name: "Karamel", code: "#A66E38" },
            { name: "Taş Rengi", code: "#D5CEA3" },
            { name: "Bordo", code: "#6B2D35" },
            { name: "Lacivert", code: "#1C3144" }
        ],
        careInstructions: "Elde nazikçe soğuk suda yıkanabilir. Sıkma yapmayınız.",
        badge: "Kullanışlı"
    },
    {
        id: "pusullu-bohem-cuzdan",
        name: "Püskül & Ahşap Boncuk Detaylı Cüzdan",
        category: "cuzdanlar",
        categoryLabel: "Cüzdanlar",
        price: "340 ₺",
        shortDesc: "Doğal ahşap boncuklar ve el yapımı püskülle süslenmiş bohem cüzdan.",
        description: "Bohem tarzı sevenler için hazırlanan bu modelde, ahşap boncuklar ve zarif püskül detayları el örgüsünün güzelliğini tamamlıyor. Hem pratik hem de göz alıcı bir tasarım.",
        dimensions: "Genişlik: 15 cm | Yükseklik: 10 cm",
        material: "Doğal Pamuk Kordon, Ahşap Boncuk, Metal Çıtçıt Kapama",
        productionTime: "2 - 3 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle üretiyorum.",
        colorNote: "Farklı renk alternatiflerimiz mevcuttur. Tercih ettiğiniz renk tonunda özel olarak örülür.",
        colors: [
            { name: "Ekru / Naturel", code: "#F7F4EE" },
            { name: "Kiremit Tonu", code: "#C87965" },
            { name: "Zeytin Yeşili", code: "#606C38" },
            { name: "Tarçın", code: "#9C4121" }
        ],
        careInstructions: "Ahşap boncukları ıslatmamaya özen göstererek nemli bezle siliniz.",
        badge: "El Emeği"
    },

    // --- 3. DİĞER (EV DEKORU & AKSESUAR) ---
    {
        id: "makrome-duvar-susu-bohem",
        name: "Bohem Makrome Duvar Dekoru",
        category: "diger",
        categoryLabel: "Diğer",
        price: "550 ₺",
        shortDesc: "Doğal ahşap dal üzerine dokunmuş, sıcak ve estetik duvar süsü.",
        description: "Doğadan özenle toplanıp zımparalanan ve koruyucu uygulanan kuru ağaç dalları üzerine el emeği ile işlenen bohem duvar makromesi. Salon, yatak odası, balkon veya ofislerinize huzur veren doğal bir dokunuş kazandırır.",
        dimensions: "Ahşap Dal Genişliği: 45 cm | Saçak Boyu: 65 cm",
        material: "Doğal Ahşap Dal, %100 Bükümlü Pamuk Makrome İpi",
        productionTime: "3 - 5 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle tek tek ilmek atarak hazırlıyorum.",
        colorNote: "Klasik doğal ekru rengin yanında yaprak detaylarında ve ara düğümlerde istediğiniz renk tonları uygulanabilir.",
        colors: [
            { name: "Klasik Doğal Ekru", code: "#FAF6EE" },
            { name: "Ekru & Kiremit Detaylı", code: "#DCA798" },
            { name: "Ekru & Adaçayı Yeşili", code: "#B5C99A" },
            { name: "Ekru & Hardal", code: "#E9C46A" }
        ],
        careInstructions: "Belirli aralıklarla saçak kısımlarını geniş dişli bir tarakla nazikçe tarayabilirsiniz.",
        badge: "Dekorasyon"
    },
    {
        id: "el-yapimi-makrome-anahtarlik",
        name: "Makrome Anahtarlık & Çanta Süsü (İkili Set)",
        category: "diger",
        categoryLabel: "Diğer",
        price: "180 ₺",
        shortDesc: "Gold klipsli, çantalarınıza ve anahtarlarınıza neşe katacak ikili set.",
        description: "Hem anahtarlarınızı kolayca bulmanızı sağlayan hem de çantalarınıza zarif bir süs katan el yapımı makrome anahtarlık seti. Sağlam gold metal döner klipsleri ve zarif düğümleriyle uzun ömürlü kullanım sağlar. Sevdikleriniz için harika ve anlamlı bir hediye seçeneğidir.",
        dimensions: "Uzunluk: 16 cm (klips dahil)",
        material: "Pamuk Makrome İpi, Paslanmaz Gold Metal Klips",
        productionTime: "1 - 2 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle sevgiyle yapıyorum.",
        colorNote: "Farklı renk seçenekleri mevcuttur. İkili sette dilerseniz iki farklı rengi kombinleyebilirsiniz.",
        colors: [
            { name: "Kiremit & Ekru", code: "#C87965" },
            { name: "Adaçayı & Pudra", code: "#8A9A86" },
            { name: "Hardal & Karamel", code: "#D4A373" },
            { name: "Siyah & Taş Rengi", code: "#3A3532" }
        ],
        careInstructions: "Püskül kısmını zaman zaman fırçalayarak düzeltebilirsiniz.",
        badge: "Hediye Önerisi"
    },
    {
        id: "orgu-bardak-altligi-seti",
        name: "Örgü Bardak & Kupa Altlığı Seti (4'lü)",
        category: "diger",
        categoryLabel: "Diğer",
        price: "240 ₺",
        shortDesc: "Püsküllü kenarları ve yumuşak dokusuyla sofralarınıza şıklık katan 4'lü set.",
        description: "Kahve ve çay keyiflerinize sıcaklık katacak 4 adet el örgüsü bardak altlığı seti. Sıcak kupaların masanızı zedelemesini önlerken estetik bir sofra düzeni yaratır. Özel bağlama ipi ile hediye paketi olarak gönderilir.",
        dimensions: "Çap: 13 cm (saçaklar dahil)",
        material: "%100 Kalın Pamuk Halat İplik",
        productionTime: "2 - 3 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle özenle sarıp dikiyorum.",
        colorNote: "Tek renk 4'lü set veya 4 farklı renkten oluşan karma set seçebilirsiniz.",
        colors: [
            { name: "Ekru / Krem", code: "#FAF6EE" },
            { name: "Kiremit Tonu", code: "#C87965" },
            { name: "Adaçayı Yeşili", code: "#8A9A86" },
            { name: "Karma Renkli (4 Farklı)", code: "#D4A373" }
        ],
        careInstructions: "Leke durumunda ılık su ve sabunla elde yıkayınız, düz zeminde kurutunuz.",
        badge: "Set Ürün"
    }
];
