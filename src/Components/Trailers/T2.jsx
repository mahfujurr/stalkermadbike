import React from 'react';
import data from '../../Data/BikeData'

const T2 = ({ tCalculator, setT2, tBclasses, t2 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.Trailers02.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.Trailers02.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.Trailers02.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.Trailers02.PVP}</td>
                <td className={`${tBclasses}`}>{data.Trailers02.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.Trailers02.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setT2(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{tCalculator(t2, data.Trailers02).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.Trailers02.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.Trailers02.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.Trailers02.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.Trailers02.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.Trailers02.PDQ4}</td>
                <td className={`${tBclasses}`}>{data.Trailers02.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default T2;