import { fireEvent, render, screen } from "@testing-library/react"
import Form from "."
import userEvent from '@testing-library/user-event';

test ("Koşulların onaylanmasına gire buton akitifliği", async()=>{
    //user kurulumu yap
    const user = userEvent.setup()

    //test edilecek bileşeni ekrana bas
render(<Form />)

    //gerekli elemanları çağır
const checkBox = screen.getByRole("checkbox")
const button = screen.getByRole("button")
    //1)checkbox tiksizdir
expect(checkBox).not.toBeChecked()
    //2)buton inaktiftir
expect(button).toBeDisabled
    //3)checkboxa tıkla
await user.click(checkBox); //fireEvent çok hızlı olduğu için yanlış sonuçlara sbep olabilir bu nedenle useEvent kullanmak daha sağlıkklı
    //4)buton aktiftir
expect(button).toBeEnabled
    //5)checkbox'tan tiki kaldır
await user.click(checkBox)
    //6)buton inaktiftir
expect(button).toBeDisabled
})

test ("Onay butonu hover durumuna göre bildirim gözükmesi", async()=>{
    const user = userEvent.setup()

    render(<Form/>)
    
    const checkBox = screen.getByRole("checkbox")
    const button = screen.getByRole("button")
    const popup = screen.getByText("Size gerçekten", {exact : false}) //normalde getByText kullandığımızda yazının tamamını yamak gerek, fakat exact değerini true yaparsak gerek kalmaz
    //ya da : const popup = screen.getByText(/size gerçekten/i) şeklinde de tanımlayabiliriz ikinci yol olarak
    
    //1)checkbox tıkla
    await user.click(checkBox);

    //2)bildirim gözükmüyor mu?
    expect(popup).not.toBeVisible() //opacity>0 || display!==none || visibty ! ==hidden

    //3)mouse buton üzerine götür
    fireEvent.mouseEnter(button)

    //4)bildirim gözükmüyor mu?
  expect(popup).toBeVisible()

    //5)muose buton üzerine götür
    fireEvent.mouseLeave(button)

    //6)mouse butonun üzerinden çek
    expect(popup).not.toBeVisible();
})
