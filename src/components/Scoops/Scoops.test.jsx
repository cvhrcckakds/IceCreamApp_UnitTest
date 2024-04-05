import { getByRole, render, screen } from "@testing-library/react"
import Scoops from "."
import userEvent from "@testing-library/user-event"

/*
!Seçiciler >3 ana parçadan oluşur
?Method [All] BySeçici
* method > get | find | query
get> element başlangıçta DOM içerisinde varsa kullanılır | eleman bulamazsa fail döner
query> get ile benzer çalışır eleman bulamazsa | null döndürür test devam eder
find> elemenetin ne zaman ekrana basılacağı belli değlse (ascn) | promise döndürür bu yüzden ascn await kullanılır

not: eğer all kullanılırsa cevap dizi olarak döner
*/

test("API'den gelen veriler için ekrana kartlar basılır", async ()=>{
    render(<Scoops/>)

    //ekrana basılan resşmleri al
    const image = await screen.findAllByAltText("çeşit-resim")

    //gelen resimlerin sayısı 1den büyük mü?
    expect(image.length).toBeGreaterThanOrEqual(1);

})

test("Çeşit ekleme ve sıfırlama işleminin toplam fiyata etkisi", async ()=>{
    //user kurulumunu yap
    const user = userEvent.setup()
    //ekrana bileşeni bas
    render(<Scoops />)

    //ekleme ve sıfırlama butonları çağır
   const addButtons =   await screen.findAllByRole("button", {name: "Ekle"})
   const delButtons =   await screen.findAllByRole("button", {name: "Sıfırla"})

    //toplam spanı çağır
    const total = screen.getByTestId('total');


    //1) toplam fiyat 0'dır
    expect(total.textContent.trim()).toEqual('0');

    //2) Ekle tıkla
    await user.click(addButtons[0]); //yukarıda all olarak aldık ve bu dizi olarak döndürü

    //3) Toplam fiyatı 20 olur
    expect(total.textContent.trim()).toEqual("20");

    //4) Farklı bir çeşitten iki tane eklenir
    await user.dblClick(addButtons[2]);

    //5) toplam fiyat 60 olur
    expect(total.textContent.trim()).toEqual("60");

    //6) ekle tıklı olanlardan sıfırlaya tıkla
    await user.click(delButtons[0])

    //7) toplam fiyatı 40 olur
    expect(total.textContent.trim()).toEqual("40");

    //8) 2 tane ekleneni sıfırla
    await user.click(delButtons[2])

    //9) toplam fiyatı 0 olur
    expect(total.textContent.trim()).toEqual("0");
});