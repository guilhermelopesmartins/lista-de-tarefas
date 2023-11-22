import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
   height: 2rem;
   background: #14a47c;
   color: white;
   fontWeight: bold; 
   padding: 0.5rem 1rem; 
   borderRadius: 5px; 
   border: none;
   margin-bottom: 1rem;
   cursor: pointer;
`;

export const Input = styled.input`
   height: 2rem;
   width: 30rem;
   margin-bottom: 1rem;
   border-color: #98aeae
`;
export const Textarea = styled.textarea`
   width: 30rem;
   margin-bottom: 1rem;
   min-height:10rem
`;

export const Select = styled.select`
   height: 2.7rem;
  width: 30.8rem;
  margin-bottom: 1rem;
  border-color: #98aeae;
  border-radius: 0.4rem;
`;

export const Option = styled.option`
   background: white;
`;

export const DivNotas = styled.div`
   display: block;
   margin: 3rem;
   width: 30.4rem;
`;

export const DivListaNotas = styled.div`
   margin: 3rem;
   width: 80rem;
   height: 39rem;
`;

export const Row = styled.li`
   list-style-type: none;
   padding: 1rem;
   display: flex;
   justify-content: space-between;

   &:nth-child(odd) {
      background:#dedede;
   }
   &:nth-child(even) {
      background:#ffffff;
   }
`;

export const DivSecao = styled.div`
   display: block;
   margin: 3rem;
   width: 30.4rem;
`;

export const DivButton = styled.div`
   display: flex;
   justify-content: end;
`;

export const DivGeral = styled.div`
   display: flex;
`;

export const DivLogin = styled.div`
   padding: 4rem;
   border: 2px solid rgb(;,
       212, 212);
   border-radius: 15px;
`;

export const Title = styled.h1`
   margin-top: 0;
`;

export const Container = styled.div`
   display: flex;
   justify-content: center;
`;




