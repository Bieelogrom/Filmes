import styled, { css } from 'styled-components';

const Preto = "#000000"
const Vermelho = "#B5121B"
const Branco = "#FFFFFF";

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 15%;
    background: ${Preto};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    
`

export const TituloSite = styled.h1`
    font-size: 32px;
    letter-spacing: 3px;
    color: ${Branco};

    span{
        vertical-align: text-top;
        font-size: 8px;
        color: ${Branco};
    }
`   

export const OpcaoSite = styled.p`
    font-size: 22px;
    color: ${Branco};


`

export const DivDireita = styled.button`
    height: 100%;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0px 5px;

    &:hover{
        cursor: pointer;
        background: ${Vermelho};
    }
`

export const ListaFilmes = styled.main`
    width: 100%;
    height: auto;
    padding: 10px 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const CapaFilme = styled.div`
    width: 200px;
    height: 250px;
    background: black;
    border-radius: 20px;
    background: url(${props => props.capa});
    background-position: center;
    background-size: cover;
`
