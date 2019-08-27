import React from 'react'
//SOLUÇAOE PARA RETORNAR MULTIPLOS ELEMENTOS A PARTIR DE UM COMPONENTE
//----------Solucao 01 mais usada----------
//export default props=>
//<div>
//<h1>Parte 1</h1>
//<h1>Parte 1</h1>
//</div>

/*-------------Soluçao 02--------------
export default props=>
<React.Fragment>
    <h1>Parte 1</h1>
    <h1>Parte 1</h1>
</React.Fragment>
*/

//--------soluçao 03--------------
export default props=>[
    <h1>Parte 1</h1>,
    <h1>Parte 1</h1>
]