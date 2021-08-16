import React from 'react';
import styled from 'styled-components';

const ContainerPagina = styled.div`
display: flex;
justify-content: space-around;
margin-top: 50px;
flex-direction: row;
margin: 50px 20px 0px 20px;
align-items: center;
`

const ContainerImagem = styled.div`
width: 100%;
align-items: center;
justify-content: center;
display: flex;
`
const ContainerEnergy = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
border: solid 1px black;
width: 50%;
`

const ContainerBattle = styled.div`
align-items: center;
justify-content: center;
width: 100%;
display: flex;

`

const ContainerRounds = styled.div`
border: solid 1px black;
width: 100%;
`



export default class EnergyTracker extends React.Component {
    state = {
        partida: false,
        roundscont: 1,
        rounds: [{
            turno: 1,
            cartas: 6,
            energy: 3,
        }],
        inputEnergy: 0,
        inputCards: 0
    }

    onBattle = () => {
            const energy = this.state.inputEnergy;
            const cards = this.state.inputCards;
            const roundsVar = [...this.state.rounds];
            const resultadoEnergy = roundsVar[roundsVar.length-1].energy - energy + 2;
            const resultadoCards = roundsVar[roundsVar.length-1].cartas - cards + 3;
            roundsVar.push({
                turno: roundsVar[roundsVar.length-1].turno+1 ,
                cartas: resultadoCards, 
                energy: resultadoEnergy
            })
            return (
                this.setState({rounds: roundsVar,
                    inputEnergy: 0,
                    inputCards: 0
                })
            )

            

        /*
        let partida = true
        let roundsVar = [...this.state.rounds];
        while (partida===true){
        partida = window.confirm('Acabou a partida? OK: Continua / Cancel: Acabou')
        if (!partida) break;
            
        let energy = Number(prompt(`Quantas Energy gastou no Round ${roundsVar.length}?`))
           /* if (energy < 0) energy = Number(prompt(`Corrija o número`)) */
        /*let cartas = Number(prompt(`Quantas Cards gastou no Round ${roundsVar.length}?`))
        
        let resultadoEnergy = roundsVar[roundsVar.length-1].energy - energy + 2;
        let resultadoCards = roundsVar[roundsVar.length-1].cartas - cartas + 3;
        alert(`Usuário terá ${resultadoEnergy} de Energy e ${resultadoCards} de Cards no próximo round`)
        roundsVar.push({turno: roundsVar[roundsVar.length-1].turno+1 ,cartas: resultadoCards, energy: resultadoEnergy})
        console.log (roundsVar)}*/


    }

    onChangeEnergy = (event) => {
        this.setState({ inputEnergy: event.target.value })
    }

    onChangeCards = (event) => {
        this.setState({ inputCards: event.target.value })
    }


    render() {
        const arrayState = [...this.state.rounds]
        return (
            <ContainerPagina>

                <ContainerImagem>
                    <img src="https://storage.googleapis.com/axie-cdn/game/cards/base/bug-tail-08.png" alt="gravel-ant img" />
                </ContainerImagem>
                <ContainerRounds>
                    {arrayState.map((item, index) =>{
                        return (
                        <div key={index}>
                            <h3>Turno #{item.turno} </h3>
                            <p>Número de Energy: {item.energy}</p>
                            <p>Número de Cartas: {item.cartas}</p>
                        </div>)
                    })}
                </ContainerRounds>
                <ContainerBattle>
                    <ContainerEnergy>
                        <label>Energy</label>
                        <input type='text' placeholder="Número de Energies gasta" value={this.state.inputEnergy} onChange={this.onChangeEnergy} />
                        <label>Cards</label>
                        <input type='text' placeholder="Número de Cards gasta" value={this.state.inputCards} onChange={this.onChangeCards} />
                        <input type='submit' value='NEXT ROUND!' onClick={this.onBattle} />
                        <hr />
                    </ContainerEnergy>
                </ContainerBattle>
            </ContainerPagina>
        )
    }
}