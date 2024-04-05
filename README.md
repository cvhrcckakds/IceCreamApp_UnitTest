# About Project
- This project is a simple ice cream selection application that shows the total price by triggering add and reset operations. The same applies for sauces. The confirm order button is not activated without clicking the checbox at the bottom. There is a warning text that activates after the button is activated. All features of the test were tested with unit test and successful results were obtained.

- Bu proje basit bir dondurma seçme uygulaması olup, ekleme sıfırlama işlemleri tetiklenerek toplam ücreti göstermektedir. Aynı işlemler soslar içinde geçerlidir. Altta bulunan checboxu tikleme işlemi gerçekleştirmeden siparişi onayla butonu aktifleşmemektedir. Buton aktifleştikten sonra aktifleşen bir uyarı metni bulunmaktadır. Testin tüm özellikleri unit test ile test edilmiş ve başarılı sonuçlar elde edilmiştir.

# Expect
- Element'lerin veya verinin beklenen özelliklere sahip olup olmadığını kontrol etmemize yarar

- Element / veri 'den beklentimizi belirtmemiz için bazı fonksiyonlar sunar: Matchers

# Matchers
- Elementler / diziler / fonksiyonlar üzerinde beklentimizi kontrol eder. Element beklentimze uygunsa testi geçer değilse hata verir.

https://jestjs.io/docs/using-matchers

https://github.com/testing-library/jest-dom

# Selector (Seçiciler)
- Render methodu ile sanal ortamda ekran bastığımız bileşnler içerisndeki elemenlları test etmek için çağırmamız gerekit. Bu işlemi seçici methodlar ile yaparız.

- Bu methodlar js'deki querySelector / getELementById ile aynı işlevi yapar

https://testing-library.com/docs/queries/byrole

# Roller
- Her html elemanın kendi rolu vardır

Örn: "a" etiketinin html rolü "link" tir

https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

# Kütüphanelerin Sürüm
- axios@^0.27.2 //güncel sürümlerde sıkıntı çıktığı için bu sürüm kullanılır.
- @testing-library/user-event@14.0
- json-server
- bootstrap

# Test Geliştirme Süreçleri

## TDD (Test Driven Development)
- Red to Green Test 
- Önce özelliğin/ bileşenlerin testi yazılır ardından bileşen/özellik kodlanır.
- testler yük gibi gelmez geliştirme sürecinin bir parçası olur.

## BDD (Behaviour Driven Development)
- Önce özellik/bileşen geliştirilir sonra testler yapılır.

# Kullanıcı Etkileşimi tetikleme
Unit test yazarken kulalnıcı etkileşimi tetiklemnin 2 yolu bulunuyor
## 1-FireEvent
- rtl içerisnde gelen olay tetikleme methodu
gerçek kullanıcıdan uzak tepkiler verdiği için artık yerini userEvente bırkamıştır
- tetiklenen olaylar gerçek bir insanın tepkimesinden çok daha hızlı bir şekilde gerçekleşir.
## 2-UserEvent
- bu yolu kullanmak için userEvent paketi indirlmeli
- fireEvent'in modern çözümü
-tetiklediğimiz olaylar gerçek kullanıncın yapıcağı gibi belirli bir gecikemeniin ardından gerçekleşir
- gecikme olduğu için async await kullanılır

# Project Gif:

<img src="./public/icecream.gif" ># IceCreamApp_UnitTest
