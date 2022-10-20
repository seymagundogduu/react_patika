import {render, screen} from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import Counter from "./index";


describe("Counter Tests" ,  () => {
    let increasebtn, decreasebtn, count;

    beforeEach(() => {
        console.log("her testen önce çalıştım");
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Counter/>);
    
        increasebtn = screen.getByText("Increase");
       decreasebtn = screen.getByText("Decrease");
       count = screen.getByText("0");
    });

    beforeAll(() => {   //tüm testlerden önce bir defa çalışır daha çalışmaz
    console.log("Bir defa çalışacağım ");
    });


    afterEach(() => {  //her testen sonra çalıştırmak isteyeceğimiz bir şeyler varsa onları çalıştırır
        console.log("her testen sonra çalışacağım");
    })

    afterAll(() => {    //tüm testlerden sonra bir defa çalışır daha çalışmaz
   console.log("Testlerden sonra çalıştım");
    })

    test('increase btn',() => {
        userEvent.click(increasebtn);
        expect(count).toHaveTextContent("1");
       } );
       
       test('decrease btn',() => {
          userEvent.click(decreasebtn);
           expect(count).toHaveTextContent("-1");
          } );
});


