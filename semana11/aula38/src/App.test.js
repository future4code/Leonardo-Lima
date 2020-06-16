import React from "react";
import { render, fireEvent, getByPlaceholderText } from "@testing-library/react";
import App from "./App";


describe('Renderizacao inicial', () => {

    test('Input na tela' , () => {

const {getByPlaceholderText} = render (<App />)

const input = getByPlaceholderText('Novo Post')

expect(input).toBeInTheDocument()
    })

test('Botao na tela', () => {

    const {getByText} = render (<App />)

const input = getByPlaceholderText('Novo Post')

expect(input).toBeInTheDocument()
})

})