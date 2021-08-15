import React from 'react';
import styled from 'styled-components';

const ContainerPagina = styled.div`
display: flex;
justify-content: center;
margin-top: 50px;
`


export default class EnergyTracker extends React.Component {
    state = {
        partida: false,
        roundscont: 1,
        rounds: [{
            turno : 1,
            cartas: 6,
            energy: 3,
        }],
        inputEnergy: ""
    }

    onBattle = () => {
    /*
        const end = "no"
        while (end !== "yes") {
            let roundsVar = [...this.state.rounds];
            return(
            <div>
                <h3>Round </h3>
                <label> Quantas energy o jovem gastou no Round #{roundsVar.length}?</label>
                <input type="text" onChange={this.onChangeEnergy} />
                <input type="submit" value="Partida Encerrada" onClick={this.end="yes"}/>
            </div>
            )
           
        }
        */

        let partida = true
        let roundsVar = [...this.state.rounds];
        while (partida===true){
        partida = window.confirm('Acabou a partida? OK: Continua / Cancel: Acabou')
        if (!partida) break;
            
        let energy = Number(prompt(`Quantas Energy gastou no Round ${roundsVar.length}?`))
           /* if (energy < 0) energy = Number(prompt(`Corrija o número`)) */
        let cartas = Number(prompt(`Quantas Cards gastou no Round ${roundsVar.length}?`))
        
        let resultadoEnergy = roundsVar[roundsVar.length-1].energy - energy + 2;
        let resultadoCards = roundsVar[roundsVar.length-1].cartas - cartas + 3;
        alert(`Usuário terá ${resultadoEnergy} de Energy e ${resultadoCards} de Cards no próximo round`)
        roundsVar.push({turno: roundsVar[roundsVar.length-1].turno+1 ,cartas: resultadoCards, energy: resultadoEnergy})
        console.log (roundsVar)}


    }

    onChangeEnergy = (event) => {
        this.setState({inputEnergy: event.target.value})
    }

    render() {

        return (
            <ContainerPagina>
                <input type='submit' value='Clique para começar uma nova partida' onClick={this.onBattle} />


            </ContainerPagina>
        )
    }
}