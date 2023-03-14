import React from 'react';
import data from '../../Data/BikeData'

const C12 = ({ cCalculator, setC12, tBclasses, c12 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike012.MODELE}</td>
                <td className={`${tBclasses}`}  >{data.CosmopolitanEBike012.COULEUR1}</td>
                <td className={`${tBclasses}`} >{data.CosmopolitanEBike012.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike012.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike012.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike012.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC12(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c12, data.CosmopolitanEBike012).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike012.COULEUR2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike012.EAN2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike012.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike012.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike012.COULEUR3}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike012.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike012.CAU3}</td>
            </tr>
       
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike012.COULEUR4}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike012.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike012.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C12;