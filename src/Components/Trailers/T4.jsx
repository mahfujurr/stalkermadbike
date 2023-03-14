import React from 'react';
import data from '../../Data/BikeData'

const T4 = ({ tCalculator, setT4, tBclasses, t4 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.Trailers04.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.Trailers04.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.Trailers04.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.Trailers04.PVP}</td>
                <td className={`${tBclasses}`}>{data.Trailers04.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.Trailers04.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setT4(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{tCalculator(t4, data.Trailers04).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.Trailers04.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.Trailers04.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.Trailers04.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.Trailers04.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.Trailers04.PDQ4}</td>
                <td className={`${tBclasses}`}>{data.Trailers04.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default T4;