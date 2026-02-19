# ❤️ Açık Kalp Ameliyatı Hasta Eğitim Kitapçığı

Kalp ameliyatı geçirecek veya geçirmiş hastalara yönelik kapsamlı bir mobil eğitim uygulaması.

## 📱 Özellikler

- 📋 **8 ana kategori** (Genel Bilgiler, Ameliyat Öncesi, Ameliyathane, Yoğun Bakım, Servis Bakımı, Evde Bakım, Videolar, Kaynaklar)
- 🔊 **Sesli dinleme** – Expo Speech API ile Türkçe text-to-speech
- 🔤 **Yazı boyutu ayarı** – Küçük / Orta / Büyük seçenekleri
- 📱 **3 ekran navigasyonu** – Ana menü → Alt başlıklar → İçerik detayı
- 🎨 **Uygulama temasına uygun** mavi renk paleti

## 🚀 Kurulum & Çalıştırma

```bash
# 1. Projeyi kur
npx create-expo-app@latest kalp-egitim --template blank
cd kalp-egitim

# 2. Bu repodan dosyaları kopyala (App.js ve src/ klasörü)

# 3. Bağımlılıkları yükle
npx expo install @react-navigation/native @react-navigation/native-stack \
  expo-speech react-native-screens react-native-safe-area-context

# 4. Çalıştır
npx expo start
```

Ardından Expo Go uygulaması ile QR kodu tarat.

## 🛠 Kullanılan Teknolojiler

| Teknoloji | Amaç |
|-----------|------|
| React Native + Expo ~50 | Temel framework |
| @react-navigation/native-stack | Ekranlar arası geçiş |
| expo-speech | Türkçe sesli okuma |
| React Context API | Yazı boyutu state yönetimi |

## 📂 Proje Yapısı

```
kalp-egitim/
├── App.js                    # NavigationContainer + Stack
├── src/
│   ├── context/
│   │   └── FontSizeContext.js   # Global font size state
│   ├── data/
│   │   └── content.js           # Tüm kategori ve içerik verisi
│   └── screens/
│       ├── HomeScreen.js        # Ana menü
│       ├── SubCategoryScreen.js # Alt başlıklar
│       ├── DetailScreen.js      # İçerik + sesli okuma
│       └── SettingsScreen.js    # Yazı boyutu ayarı
```

## 🎯 Hedef Kullanıcı

Açık kalp ameliyatı geçirecek veya geçirmiş hastalar ve yakınları.

## 💡 Tasarım İlhamı

Uygulamanın görsel dili referans görseldeki uygulamadan alınmıştır:
- Açık mavi arka plan (`#b3e5fc`)
- Yuvarlak köşeli butonlar
- Sağ tarafta play/arrow ikonları
- Kırmızı accent renk başlıklarda
