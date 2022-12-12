import { render, screen } from "@testing-library/react"
import { Quote } from "./Quote"
import { store } from "../../app/store"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux";

const mock = jest.fn();

describe("Quote", () => {

  describe("when render default state", () => {
    it("show button: Obter citação aleatória", async () => {
      render(
        <Provider store={store}>
          <Quote />
        </Provider>
      );
      // screen.debug();
      expect(screen.getByText("Obter citação aleatória")).toBeInTheDocument();
    })

    it("show button: Apagar", async () => {
      render(
        <Provider store={store}>
          <Quote />
        </Provider>
      );
      expect(screen.getByText("Apagar")).toBeInTheDocument();
    })
  });



  // describe("when the button is clicked", () => {
  //   it("shows character quotes", async () => {
  //     render(
  //       <Provider store={store}>
  //         <Quote />
  //       </Provider>
  //     );
  //     userEvent.click(screen.getByText("Obter citação aleatória"))
  //     expect(mock).toHaveBeenCalled();
  //   })
  // })

})