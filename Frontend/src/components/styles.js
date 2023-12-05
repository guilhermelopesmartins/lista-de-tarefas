import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
   height: 2.4rem;
   width: 12rem;
   background: #b9a3c4;
   color: white;
   padding: 0.5rem 1rem; 
   border-radius: 5px; 
   border: none;
   margin-bottom: 1rem;
   cursor: pointer;
   font-size: 12pt;
   font-weight: bold;
   margin-top: .5rem;
`;

export const H1 = styled.h1`
color:${(props) => props.gray ? '#636263' : '#b9a3c4'};
`;

export const Input = styled.input`
   height: 2rem;
   width: 25rem;
   margin-bottom: 1rem;
   border: 0px;
   background: #f0eded;
   font-size: 12pt;
   ${(props) => props.firstInput ? 'margin: 2rem 0rem 1rem 0rem;' : ''};

`;
export const Textarea = styled.textarea`
   width: 25rem;
   margin-bottom: 1rem;
   min-height:10rem;
   background: #f0eded;
   border: 0px;
   font-size: 12pt;


`;

export const Select = styled.select`
   height: 2.7rem;
  width: 25.8rem;
  margin: 2rem 0rem 1rem 0rem;
  border-color: #98aeae;
  border-radius: 0.4rem;
  background: #f0eded;
  border: 0px;
  font-size: 12pt;


`;

export const Option = styled.option`
   background: white;
`;

export const DivNotas = styled.div`
   display: block;
   margin:  3rem 3rem 3rem 40rem;
   width: 25.7rem;
   text-align: center;
`;

export const DivListaNotas = styled.div`
margin:  3rem 3rem 3rem 18rem;
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
margin:  3rem 3rem 3rem 40rem;
width: 25.7rem;
text-align: center;
`;

export const DivHeader = styled.div`
   display: flex;
   width: 100%;
   height: 4rem;
   background-color: #636263;
   color: white;
   padding: 0rem 0rem .8rem 1rem;
   align-items: center;
`;

export const DivButton = styled.div`
   display: flex;
   justify-content: ${(props)=> props.end ? 'end' : 'center'};
`;

export const Tag = styled.input`
   background: ${(props) => props.color};
   width: 5rem;
   height: 1.5rem;
   border-radius: .5rem;
   margin-right: 1rem;
   text-align: center;
   color: white;
   border: none;
   
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




