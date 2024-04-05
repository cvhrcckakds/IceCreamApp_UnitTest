import { findAllByRole, findByRole, render, screen } from "@testing-library/react"
import Toppings from "."
import userEvent from "@testing-library/user-event";


test("Apiden gelen veriler için ekrana kartlar basılıyor mu?", async()=>{
    render(<Toppings/>)

   const images = await screen.findAllByAltText("sos-resim")
   expect(images.length).toBeGreaterThan(0)
});

test("Sosların ekleme ve çıkarma işlemi toplama etkisi", async()=> {

    const user = userEvent.setup()
    render(<Toppings/>)
    
    //toplam spanı al
    const total = screen.getByTestId("total")
    
    //tüm sosları çağır
    const toppings = await screen.findAllByRole ("checkbox")
    
    //1) sos ücreti 0 mı?
    expect(total.textContent).toBe("0")
    
    //2) soslardan birine tıkla
    await user.click(toppings[0]);

    //3) total 3'e eşit mi
    expect(total.textContent).toBe("3")

    //4) soslardan birine daha tıkla
    await user.click(toppings[2]);

    //5) total 6'ya eşit mi?
    expect(total.textContent).toBe("6")

    //6) daha önce tıklanan sosa tekrar tıkla
    await user.click(toppings[0]);

    //7) total 3'e eşit mi?
    expect(total.textContent).toBe("3")

    //8) daha önce tıklanan sosa tekrar tıkla
    await user.click(toppings[2]);

    //9) total 0'a eşit mi?
    expect(total.textContent).toBe("0")


})


