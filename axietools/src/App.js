import React from 'react';
import styled from 'styled-components';
import EnergyTracker from './components/EnergyTracker'

const ContainerPagina = styled.div`
display: flex;
height: 200vh;
flex-direction: column;
margin: 0;
padding: 0;
box-sizing: border-box;
`

const ContainerHeader = styled.header`
display: flex;
justify-content: center;
width: 100%;
flex-direction: column;
min-height: 20px;
background-color: black;
color: white;
`

const BannerTitle = styled.div`
display: flex;
text-align: center;
align-items: center;
justify-content: center;
`

const ContainerMenu = styled.div`
background-image: linear-gradient(#209DF1, #20EDF1);
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
height: 100%;

p{
  border-right: 1px solid white;
  height: 100%;
  width: 100%;
  text-align: center;
}

`

const ContainerMain = styled.main`
background-image: linear-gradient(#F5D759, #2596be);
flex-grow:1;
`

const ContainerFooter = styled.footer`
display: flex;
`


export default class App extends React.Component {

  render() {
    return (
      <ContainerPagina>
        <ContainerHeader>
          <BannerTitle>
            <h1> Axie Tools</h1>
          </BannerTitle>
          <ContainerMenu>
            <p>Energy Tracker</p>
            <p>Card Tracker</p>
            <p>Winnings Tracker</p>
          </ContainerMenu>
        </ContainerHeader>
        <ContainerMain>
          <EnergyTracker/>
        </ContainerMain>
        <ContainerFooter>
          Oi sou um footer
        </ContainerFooter>

      </ContainerPagina>
    );
  }
}
