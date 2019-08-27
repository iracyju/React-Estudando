import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente.jsx'
 import {CompA,CompB}from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiElementos';

//const elemento= document.getElementById('root')
//ReactDOM.render(<h1>ola react 2</h1>,elemento)
//const jsx=<h1>ola react 1</h1>
//ReactDOM.render(jsx,elemento)

/*-------PRIMEIRO COMPONENTE-------*/

/*const elemento= document.getElementById('root')
ReactDOM.render(
    <div>
        <PrimeiroComponente  valor="Bom dia!" />
    </div>

, elemento)
*/


/*----------SEGUNDO COMPONENTE--------------------*/
const elemento= document.getElementById('root')
ReactDOM.render(
    <div>
        <MultiElementos/>
        {/*<CompA valor="ola eu sou A"/>
        CompB valor="B na area"/>
*/}
    </div>

, elemento)
//ReactDOM.render(
//  <ul>
//    <li>1) Pedro</li>
// <li>2) Maria</li>
// <li>3) Ana</li>
//    </ul>

//, elemento)