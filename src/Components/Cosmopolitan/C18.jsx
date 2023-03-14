import React from 'react';
import data from '../../Data/BikeData'

const C18 = ({ cCalculator, setC18, tBclasses, c18 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike018.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='2'>{data.CosmopolitanEBike018.COULEUR1}</td>
                <td className={`${tBclasses}`} >{data.CosmopolitanEBike018.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike018.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike018.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike018.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC18(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c18, data.CosmopolitanEBike018).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>

                <td className={`${tBclasses}`}>{data.CosmopolitanEBike018.EAN2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike018.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike018.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`} rowSpan='2'>{data.CosmopolitanEBike018.COULEUR2}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike018.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike018.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike018.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike018.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C18;