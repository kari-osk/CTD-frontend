import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Quote } from "./Quote"
import { store } from "../../app/store"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux";
import { QuoteButton } from "./quoteButton";
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { ReactElement } from "react";
import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../../features/quote/quoteSlice";



const mockSearch = jest.fn();

// beforeEach(() => {
//   render(
//     <Provider store={store}>
//       <Quote />
//     </Provider>
//   );
// })


describe("Quote", () => {
  describe("When render default state, in the form presents:", () => {
    it("sentence: Nenhuma citação encontrada.", async () => {
      render(
        <Provider store={store}>
          <Quote />
        </Provider>
      );
      expect(screen.getByText("Nenhuma citação encontrada.")).toBeInTheDocument();

    })

    it("placeholder: Digite o autor: Homer, Bart, Lisa, Maggie, Marge...", async () => {
      render(
        <Provider store={store}>
          <Quote />
        </Provider>
      );
      expect(screen.getAllByPlaceholderText("Digite o nome do personagem: Homer, Bart, Lisa, Maggie, Marge...")).not.toBeNull();
    })

    it("button: Obter citação aleatória", async () => {
      render(
        <Provider store={store}>
          <Quote />
        </Provider>
      );
      // screen.debug();
      expect(screen.getByText("Obter citação aleatória")).toBeInTheDocument();
    })

    it("button: Apagar", async () => {
      render(
        <Provider store={store}>
          <Quote />
        </Provider>
      );
      expect(screen.getByText("Apagar")).toBeInTheDocument();
    });
  });


  describe("Insert value in input", () => {
    it("allow to write the character name", async () => {
      render(
        <Provider store={store}>
          <Quote />
        </Provider>
      );
      const input = await screen.findByLabelText('personagem')
      userEvent.click(screen.getByRole("button", { name: /Obter citação/i }))
      fireEvent.change(input, { target: { value: 'lisa' } })
      expect(await screen.findByDisplayValue('lisa')).toBeInTheDocument();
    })

    it("validate type. If insert number, show message that number are not allowed", async () => {
      render(
        <Provider store={store}>
          <Quote />
        </Provider>
      );
      const input = await screen.findByLabelText('personagem')
      fireEvent.change(input, { target: { value: 123 } })
      expect(await screen.findByText("Números não são aceitos.")).toBeTruthy();
    })
  })


  describe("When button is clicked", () => {
    it("call function", async () => {
      render(
        <QuoteButton primaryButton={true} onClick={() => mockSearch()} />
      );
      const buttonText = screen.getByText("Obter citação aleatória");
      userEvent.click(buttonText);
      await waitFor(() => {
        expect(mockSearch).toBeCalled();
      })
    });

    it("clear input", async () => {
      render(
        <QuoteButton primaryButton={false} onClick={() => mockSearch()} />
      );
      const buttonText = screen.getByText("Apagar");
      userEvent.click(buttonText);
      await waitFor(() => {
        expect(mockSearch).toBeCalled();
      })
    })
  })


  // MSW Test----------------------------------------------------------------


  function renderWithReduxProvider(element: ReactElement) {
    const store = configureStore({
      reducer: {
        quote: quoteReducer,
      }
    });
    return render(element, {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
    });
  }

  describe("Quote component", () => {
    describe("When API call failed", () => {
      const server = setupServer(
        rest.get("https://thesimpsonsquoteapi.glitch.me/quotes", (req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({ error: 'Error' }),
          )
        })
      )
      beforeEach(() => {
        server.listen()
      });

      afterEach(() => {
        server.close()
        server.resetHandlers()
      });

      it('show error message', async () => {
        renderWithReduxProvider(<Quote />)

        const fetchCharacterQuote = await screen.findByText('Obter citação aleatória');
        await userEvent.click(fetchCharacterQuote)

        expect(await screen.findByText('Nenhuma citação encontrada.')).toBeInTheDocument()
      })
    })

    describe("When character name is invalid", () => {
      const server = setupServer(
        rest.get("https://thesimpsonsquoteapi.glitch.me/quotes", (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({ success: 'Success' }),
          )
        })
      )
      beforeEach(() => {
        server.listen()
      });

      afterEach(() => {
        server.close()
        server.resetHandlers()
      });

      it('show invalid name message', async () => {
        renderWithReduxProvider(<Quote />)

        const fetchCharacterQuote = await screen.findByText('Obter citação aleatória');
        await userEvent.click(fetchCharacterQuote)

        expect(await screen.findByText('Por favor, indique um nome válido.')).toBeInTheDocument()
      })
    })
  })

})

