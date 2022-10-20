import {render, screen} from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import ToDo from "./index";


describe('ToDo test', () => {
  let button, input;


  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<ToDo/>);

    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
});

 test("Varsayılan olarak verilen 3 nesne render edilmeli", () =>{
    const items = screen.getAllByText(/Item/i);

    expect(items.length).toEqual(3)

 });

 test("input ve button dokümanda bulunmalı", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
 });

 test("inputa string girilip butona basılınca listeye eklenmeli", () => {
    //inputu doldur
    const name = "Şeyma";
   userEvent.type(input, name);

   //butona tıkla
   userEvent.click(button);

   //assertion
   expect(screen.getByText(name)).toBeInTheDocument();
   
 });
})
