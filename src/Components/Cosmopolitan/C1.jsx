import React from 'react';
import data from '../../Data/BikeData'

const C1 = ({ cCalculator, setC1, tBclasses, c1 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike01.MODELE}</td>
                <td className={`${tBclasses}`}  >{data.CosmopolitanEBike01.COULEUR1}</td>
                <td className={`${tBclasses}`} >{data.CosmopolitanEBike01.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike01.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike01.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike01.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC1(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c1, data.CosmopolitanEBike01).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike01.COULEUR2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike01.EAN2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike01.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike01.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike01.COULEUR3}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike01.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike01.CAU3}</td>
            </tr>
       
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike01.COULEUR4}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike01.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike01.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C1;