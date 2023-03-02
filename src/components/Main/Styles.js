import styled from 'styled-components';

export const Content =
  styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;


export const Header =
  styled.div`
    display: inline-flex;
  `;

export const AddContainerInput =
  styled.input`
    margin: 5px;
    border-radius: 5px;
    border: 0px;
    padding: 5px;
  `;
