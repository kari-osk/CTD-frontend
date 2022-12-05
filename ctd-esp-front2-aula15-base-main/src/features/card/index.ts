import 'features/card/card.css';
import Card from './card.component';
import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid #d0d0d0;
`

export const Body = styled.div`
  padding: 10px;
  border: 1px solid #d0d0d0;
  border-top: 0;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export { Card };
