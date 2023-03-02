import styled from 'styled-components';

export const Input =
  styled.input`
    border-radius: 5px;
    border: 0px;
    margin-top: 20px;
  `;

export const ConfirmInput =
  styled.input`
    margin-top: 20px;
    border-radius: 5px;
    border: 0px;
    padding: 5px;
    margin-right: 5px;

    ${
      props => props.confirm ?
      `background-color: lightgreen;` :
      `background-color: lightcoral;`
    }
`;
