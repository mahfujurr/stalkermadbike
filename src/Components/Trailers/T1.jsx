import React from 'react';
import data from '../../Data/BikeData'

const T1 = ({ tCalculator, setT1, tBclasses, t1 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.Trailers01.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.Trailers01.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.Trailers01.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.Trailers01.PVP}</td>
                <td className={`${tBclasses}`}>{data.Trailers01.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.Trailers01.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setT1(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{tCalculator(t1, data.Trailers01).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.Trailers01.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.Trailers01.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.Trailers01.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.Trailers01.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.Trailers01.PDQ4}</td>
                <td className={`${tBclasses}`}>{data.Trailers01.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default T1;