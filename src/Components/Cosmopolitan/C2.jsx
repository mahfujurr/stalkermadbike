import React from 'react';
import data from '../../Data/BikeData'

const C2 = ({ cCalculator, setC2, tBclasses, c2 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike02.MODELE}</td>
                <td className={`${tBclasses}`}  >{data.CosmopolitanEBike02.COULEUR1}</td>
                <td className={`${tBclasses}`} >{data.CosmopolitanEBike02.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike02.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike02.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike02.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC2(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c2, data.CosmopolitanEBike02).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike02.COULEUR2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike02.EAN2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike02.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike02.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike02.COULEUR3}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike02.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike02.CAU3}</td>
            </tr>
       
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike02.COULEUR4}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike02.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike02.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C2;