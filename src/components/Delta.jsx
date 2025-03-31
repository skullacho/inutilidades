import React, { useState} from 'react';
import './Delta.css'

function Delta(){
    const[a, setA] = useState('');
    const[b, setB] = useState('');
    const[c, setC] = useState('');
    const[delta, setDelta] = useState(null);

    const Calculo = () =>{
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        const numC = parseFloat(c);

        if(isNaN(numA) || isNaN(numB) || isNaN(numC)   ){
            setDelta('por favor insira numeros validos');
            return;
        }

        const res = (numB * numB) - 4 * numB * numC;
        setDelta(res);


    }

    return(
        <>
                <main>

                    <h1>Calculo do Delta</h1>
                    
                    <input type="text" />
                    
                    <input type="text" />
                    
                    <input type="text" />
                    
                    <button>Calcular</button>
                    
                    <h3></h3>
                
                </main>
        
        </>

    );
}
export default Delta;