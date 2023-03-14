import React from 'react';
import data from '../../Data/BikeData'

const C14 = ({ cCalculator, setC14, tBclasses, c14 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike014.MODELE}</td>
                <td className={`${tBclasses}`}  >{data.CosmopolitanEBike014.COULEUR1}</td>
                <td className={`${tBclasses}`} >{data.CosmopolitanEBike014.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike014.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike014.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike014.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC14(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c14, data.CosmopolitanEBike014).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike014.COULEUR2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike014.EAN2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike014.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike014.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike014.COULEUR3}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike014.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike014.CAU3}</td>
            </tr>
       
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike014.COULEUR4}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike014.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike014.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C14;