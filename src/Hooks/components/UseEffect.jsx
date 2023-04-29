import React, { useEffect, useState } from 'react'    
import { errorStyle, evenStyle } from '../Style'
import { capital } from '../Utilities'
    
    export const UseEffect = () => {
        //array para el cambio de valor
        const [prices, setPrices] = useState({})

        //array para manejar errores
        const [error, setError] = useState([false, 'no hay error'])

        //cuando el componente se refreque y opere hacemos un useState loadin
        const [loading, setLoading] = useState(true)

        //useState crypto
        const [crypto, setCrypto] = useState('bitcoin')

        const url = (currency) => `https://api.coingecko.com/api/v3/simple/price?ids=${currency}&vs_currencies=ars%2Cusd`;

        //creamos un boton
        const btnHandleClick = (cryptocurrency) => {
            if(cryptocurrency === crypto) return;
            setCrypto(cryptocurrency)
            setLoading(true)
        }

        useEffect(() => {
            const getPrices = async () => {

                try {
                    if(loading){

                        let respuesta = await fetch(url(crypto));
                        let data = await respuesta.json()
                        // console.log(data);

                        if(!Reflect.has(data,crypto))
                            setError(true, 'No se obtuvo la crypto')

                        setPrices({ ...data[crypto] })
                    }
                    
                } catch (error) {
                    setError([true, 'Problemas con la URL']);
                }
                //con esto limitamos la carga
                finally{setLoading(false)}
            }
            setTimeout(() => {
                getPrices();
                
            }, 2000);
        }, [loading])
            // console.log(prices);

        return loading
            ? <div>Cargando...</div>
            : error[0]
                ?<div className={error[0] 
                        ? errorStyle 
                        : evenStyle}
                >
                    {error[1]}
                </div>
                : <div className={evenStyle}>
                    <div>
                        <h6>Criptomoneda 1 { capital(crypto) }</h6>
                        <h4>USD: {prices.usd} </h4>
                        <h3>ARS: {prices.ars} </h3>
                    </div>

                    <div className='btn-group'>
                        <button 
                            className='btn btn-warning'
                            onClick={() => btnHandleClick('bitcoin')}
                        >
                            Bitcoin
                        </button>
                        <button 
                            className='btn btn-primary'
                            onClick={() => btnHandleClick('ethereum')}
                        >
                            Ethereum
                        </button>

                    </div>
                </div>
        
}

