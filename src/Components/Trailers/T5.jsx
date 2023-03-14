import React from 'react';
import data from '../../Data/BikeData'

const T5 = ({ tCalculator, setT5, tBclasses, t5 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.Trailers05.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.Trailers05.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.Trailers05.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.Trailers05.PVP}</td>
                <td className={`${tBclasses}`}>{data.Trailers05.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.Trailers05.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setT5(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{tCalculator(t5, data.Trailers05).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.Trailers05.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.Trailers05.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.Trailers05.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.Trailers05.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.Trailers05.PDQ4}</td>
                <td className={`${tBclasses}`}>{data.Trailers05.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default T5;