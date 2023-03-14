import React from 'react';
import data from '../../Data/BikeData'

const C3 = ({ cCalculator, setC3, tBclasses, c3 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike03.MODELE}</td>
                <td className={`${tBclasses}`}  >{data.CosmopolitanEBike03.COULEUR1}</td>
                <td className={`${tBclasses}`} >{data.CosmopolitanEBike03.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike03.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike03.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike03.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC3(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c3, data.CosmopolitanEBike03).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike03.COULEUR2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike03.EAN2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike03.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike03.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike03.COULEUR3}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike03.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike03.CAU3}</td>
            </tr>
       
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike03.COULEUR4}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike03.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike03.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C3;