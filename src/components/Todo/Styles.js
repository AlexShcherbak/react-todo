import styled from 'styled-components';

export const TodoContainer =
  styled.div`
    border-radius: 5px;
    background: darkgray;
    padding: 5px;
    margin-top: 5px;
    width: 600px;

    ${
      props => props.completed &&
      `text-decoration: line-through;
      color: darkgray;
      background-color: darkgreen;`
    }
  `;

export const TodoItem =
    styled.div`
      display: block;
    `;

export const TodoControls =
  styled.div`
    display: block;
    font-size: small;
    text-align: right;
`;

export const Btn =
    styled.input`
      border-radius: 5px;
    `;
