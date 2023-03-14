import React from 'react';
import data from '../../Data/BikeData'

const T3 = ({ tCalculator, setT3, tBclasses, t3 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.Trailers03.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.Trailers03.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.Trailers03.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.Trailers03.PVP}</td>
                <td className={`${tBclasses}`}>{data.Trailers03.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.Trailers03.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setT3(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{tCalculator(t3, data.Trailers03).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.Trailers03.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.Trailers03.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.Trailers03.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.Trailers03.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.Trailers03.PDQ4}</td>
                <td className={`${tBclasses}`}>{data.Trailers03.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default T3;