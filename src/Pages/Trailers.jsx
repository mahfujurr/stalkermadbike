import React from 'react';
import data from '../Data/BikeData'
import { useState } from 'react'
import logoMadBike from '../assets/LOGO STALKER MAD BIKE - FULL COLOR.png'
import T1 from '../Components/Trailers/T1';
import T2 from '../Components/Trailers/T2';
import T3 from '../Components/Trailers/T3';
import T4 from '../Components/Trailers/T4';
import T5 from '../Components/Trailers/T5';
import T6 from '../Components/Trailers/T6';
import { useNavigate } from 'react-router-dom';

let tCalculator = (a, b) => {
    const tTotal = parseFloat(a < 10 ? (a * b.CAU1)
        : a >= 10 && a <= 50 ? (a * b.CAU2)
            : a >= 51 && a <= 100 ? (a * b.CAU3)
                : a > 100 ? (a * b.CAU4) : 0
    )
    return tTotal
}


const Trailers = () => {
    const navigate = useNavigate();
    const [t1, setT1] = useState(0)
    const [t2, setT2] = useState(0)
    const [t3, setT3] = useState(0)
    const [t4, setT4] = useState(0)
    const [t5, setT5] = useState(0)
    const [t6, setT6] = useState(0)

    const handlesent = (e) => {

        e.preventDefault();
        const form = e.target;
        const date = form.date.value;
        const chargedecompte = form.chargedecompte.value;
        const aInfo1 = form.aInfo1.value;
        const aInfo2 = form.aInfo2.value;
        const aInfo3 = form.aInfo3.value;
        const aInfo4 = form.aInfo4.value;
        const aInfo5 = form.aInfo5.value;
        const aInfo6 = form.aInfo6.value;
        const bInfo1 = form.bInfo1.value;
        const bInfo2 = form.bInfo2.value;
        const bInfo3 = form.bInfo3.value;
        const bInfo4 = form.bInfo4.value;
        const bInfo5 = form.bInfo5.value;
        const bInfo6 = form.bInfo6.value;

        const modele01 = data.Trailers01.MODELE
        const modele02 = data.Trailers02.MODELE
        const modele03 = data.Trailers03.MODELE
        const modele04 = data.Trailers04.MODELE
        const modele05 = data.Trailers05.MODELE
        const modele06 = data.Trailers06.MODELE
        const t1Price01 = tCalculator(t1, data.Trailers01).toFixed(2)
        const t1Price02 = tCalculator(t2, data.Trailers02).toFixed(2)
        const t1Price03 = tCalculator(t3, data.Trailers03).toFixed(2)
        const t1Price04 = tCalculator(t4, data.Trailers04).toFixed(2)
        const t1Price05 = tCalculator(t5, data.Trailers05).toFixed(2)
        const t1Price06 = tCalculator(t6, data.Trailers06).toFixed(2)

        const totalPriceWTax = (
            (tCalculator(t1, data.Trailers01)
                +
                tCalculator(t2, data.Trailers02)
                +
                tCalculator(t3, data.Trailers03)
                +
                tCalculator(t4, data.Trailers04)
                +
                tCalculator(t5, data.Trailers05)
                +
                tCalculator(t6, data.Trailers06)

            )
            * 1.2
        ).toFixed(2)
        const totalPrice = (
            tCalculator(t1, data.Trailers01)
            +
            tCalculator(t2, data.Trailers02)
            +
            tCalculator(t3, data.Trailers03)
            +
            tCalculator(t4, data.Trailers04)
            +
            tCalculator(t5, data.Trailers05)
            +
            tCalculator(t6, data.Trailers06)
        ).toFixed(2)
        const titlet1 = 'TRAILERS (REMORQUES POUR CYCLES)'
        const info = {
            t1,
            t2,
            t3,
            t4,
            t5,
            t6,
            date,
            chargedecompte,
            modele01,
            modele02,
            modele03,
            modele04,
            modele05,
            modele06,
            t1Price01,
            t1Price02,
            t1Price03,
            t1Price04,
            t1Price05,
            t1Price06,
            data,
            totalPriceWTax,
            totalPrice,
            aInfo1,
            aInfo2,
            aInfo3,
            aInfo4,
            aInfo5,
            aInfo6,
            bInfo1,
            bInfo2,
            bInfo3,
            bInfo4,
            bInfo5,
            bInfo6,
            titlet1



        }
        // console.log(t6);

        fetch(`https://stalker-mad-bi-ke-server.vercel.app/mailsent/640ee5e8d32bd03c32510455`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(info),
        })
            .then((res) => res.json())
            .then((data) => {



            });
            navigate('/thanks')


    }
    const w2bgOrange = 'w-5/6 outline-none text-center bg-orange-400 text-xs p-1 '
    const w1bgOrange = 'w-full outline-none text-center bg-orange-400 text-xs p-1'
    const tBclasses = 'border w-1/12 p-1 border-black mt-5'
    return (
        <form onSubmit={handlesent}>

            <div className='flex justify-center mx-5 my-3 min-w-[1200px]'>
                <div className='w-full lg:w-5/6 box all p-5'>

                    {/* header section start */}
                    <div className='w-full flex gap-10'>
                        {/* left side information start */}
                        <div className='w-1/2 text-base'>
                            <div className='w-full text-sm flex flex-col justify-center items-center'>
                                <img className='w-1/2' src={logoMadBike} alt="" />

                                <h1 className='mt-5'>GLOBAL WEB MARKET GROUP S.A.S		</h1>
                                <h1>STALKER MAD BIKE® MARQUE DÉPOSEE</h1>
                                <h1>Adresse: BELLECHASSE 36260 SAINT PIERRE DE JARDS</h1>
                                <h1>T.V.A: FR68 884 415787 00016</h1>
                                <a href='mailto:stalker.madbike@gmail.com'>stalker.madbike@gmail.com</a>

                            </div>
                            <h1 className='mt-5'>PREPARATION DE BON DE COMMANDE</h1>

                            <table className='border border-black w-2/3 text-sm'>
                                <thead>
                                    <tr className='border border-black text-center'>
                                        <td className='w-1/2 border border-black'>Date</td>
                                        <td className='bg-orange-400'><input className='w-full outline-none  text-center bg-orange-400 text-xs' type="date" name='date' required /></td>
                                    </tr>
                                    <tr className='border border-black text-center'>
                                        <td className='w-1/2 border border-black'>VALIDITE</td>
                                        <td className='w-1/2'>10 JOURS</td>
                                    </tr>
                                    <tr className='border border-black text-center'>
                                        <td className='w-1/2 border border-black'>CHARGE DE COMPTE</td>
                                        <td className='bg-orange-400'><input className='w-full outline-none text-center bg-orange-400 text-xs' type="text" name='chargedecompte' /></td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        {/* left side information end */}

                        {/* ======================= */}

                        {/* right side information start */}
                        <div className='w-1/2 text-sm text-center'>
                            <h1>ENVOYER LE FICHIER .XLS PAR EMAIL A VOTRE CHARGE DE COMPTE PROFESSIONNEL UNE FOIS COMPLETE </h1>

                            <div className='border border-black mt-3'>
                                <h1 className='border p-3 border-b-black'>"Conditions Générales de Vente &
                                    de Service Fournisseur en Annexe
                                    WWW.STALKERMADBIKES.COM"

                                </h1>
                                <h1 className='text-xs  p-3 border border-b-black'>
                                    Pays d’Origine des Productions du Fournisseur : CHINE / UNION EUROPÉENNE Port de Chargement : Selon Type de Freit Destination des Marchandises : France Conformité : CE, Matières Dangereuses UN38.1 Raison de la Demande : Commande Stock et Échantillonnage Magasin Professionnel, Vente aux Professionnels.


                                </h1>
                                <h1 className='text-xs  p-3'>
                                    Je confirme avoir pris connaissance des CGV&S et confirme les quantités et les tarifs ci-dessus en vue de l’établissement d’une facture de commande avec le fournisseur (envoyer copie de cette commande proforma à l’Account Manager.

                                </h1>
                            </div>


                            <div>
                                <h1 className='py-1 text-center border border-black mt-5 font-semibold bg-orange-400'>REMPLIR OU MODIFIER LES CASES EN ORANGE</h1>
                                <h1 className='text-xs mt-1'>Remise Spéciale**: Voir Conditions de Remises selon le Contrat Cadre Acheteur			</h1>
                                <h1 className='text-xs'>Remise Spéciale**: Voir Conditions de Remises selon le Contrat Cadre Acheteur			</h1>

                            </div>
                        </div>

                        {/* right side information start */}
                    </div>

                    {/* ========================== */}
                    <div className='w-full flex justify-between gap-5  mt-5 '>
                        <div className='w-3/4 h-fit flex'>

                            <table className='border border-black mt-1 text-sm w-1/2'>
                                <thead>
                                    <tr className='border border-black'>
                                        <th className='w-1/3 border border-black font-semibold'>NOM CLIENT LIVRAISON</th>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='aInfo1' required/></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Adresse Livraison</td>
                                        <td className='border border-black bg-orange-400'><textarea className={`${w1bgOrange}`} type="text" name='aInfo2' required /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Code Postal</td>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='aInfo3' /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Ville</td>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='aInfo4' /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Téléphone</td>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='aInfo5' required /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Email</td>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="email" name='aInfo6' required /></td>
                                    </tr>
                                </thead>
                            </table>

                            <table className='border border-black mt-1 text-sm w-1/2'>
                                <thead>
                                    <tr className='border border-black'>
                                        <th className='w-1/3 border border-black font-semibold'>NOM CLIENT - FACTURATION</th>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='bInfo1' /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Adresse Livraison</td>
                                        <td className='border border-black bg-orange-400'><textarea className={`${w1bgOrange}`} type="text" name='bInfo2' /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Code Postal</td>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='bInfo3' /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Ville</td>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='bInfo4' /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Téléphone</td>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='bInfo5' /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Email</td>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="email" name='bInfo6' /></td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        {/* left side of second section end */}

                        {/* Right side of second section start */}

                        <div className='w-1/4 flex flex-col justify-end items-end'>
                            <div className='border border-black mt-1 text-sm w-full'>

                                <div className='flex text-center border border-b-black'>
                                    <h1 className='w-1/2 border border-r-black'>TOTAL T.T.C</h1>
                                    <h1 className='w-1/2 outline-none text-center'>
                                        €{
                                            (
                                                (tCalculator(t1, data.Trailers01)
                                                    +
                                                    tCalculator(t2, data.Trailers02)
                                                    +
                                                    tCalculator(t3, data.Trailers03)
                                                    +
                                                    tCalculator(t4, data.Trailers04)
                                                    +
                                                    tCalculator(t5, data.Trailers05)
                                                    +
                                                    tCalculator(t6, data.Trailers06)

                                                )
                                                * 1.2
                                            ).toFixed(2)
                                        }
                                    </h1>
                                </div>
                                <div className='flex text-center border border-b-black'>
                                    <h1 className='w-1/2 border border-r-black'>T.V.A</h1>
                                    <h1 className='w-1/2 outline-none text-center'>20%</h1>
                                </div>
                                <div className='flex text-center border border-b-black'>
                                    <h1 className='w-1/2 border border-r-black'>Remise Centrale*</h1>
                                    <h1 className='w-1/2 outline-none text-center'></h1>
                                </div>
                                <div className='flex text-center border border-b-black'>
                                    <h1 className='w-1/2 border border-r-black'>Remise Spéciale**</h1>
                                    <h1 className='w-1/2 outline-none text-center'></h1>
                                </div>

                                <div className='flex text-center'>
                                    <h1 className='w-1/2 border border-r-black'>GRAND TOTAL H.T</h1>
                                    <h1 className='w-1/2 outline-none text-center'>
                                        €{
                                            (tCalculator(t1, data.Trailers01)
                                                +
                                                tCalculator(t2, data.Trailers02)
                                                +
                                                tCalculator(t3, data.Trailers03)
                                                +
                                                tCalculator(t4, data.Trailers04)
                                                +
                                                tCalculator(t5, data.Trailers05)
                                                +
                                                tCalculator(t6, data.Trailers06)

                                            ).toFixed(2)
                                        }
                                    </h1>
                                </div>
                            </div>
                            <button type='submit' className='bg-orange-400 p-1 text-center w-full font-bold'>Commandez maintenant!</button>
                        </div>
                    </div>
                    {/* Main section  */}
                    <div className=' mt-5'>
                        <h1 className='font-semibold text-center border border-t-black border-l-black border-r-black'>
                            TRAILERS (REMORQUES POUR CYCLES)
                        </h1>
                        {/* heading on main section  */}
                        <table className='border border-black w-full text-sm'>
                            <thead>
                                <tr>
                                    <th className={`${tBclasses} font-normal`}>MODELE</th>
                                    <th className={`${tBclasses} font-normal`}>COULEUR</th>
                                    <th className={`${tBclasses} font-normal`}>EAN</th>
                                    <th className={`${tBclasses} italic font-normal`}>Prix Vente Public Conseillé H.T (EUR)</th>
                                    <th className={`${tBclasses} font-normal`}>Paliers de Quantité</th>
                                    <th className={`${tBclasses} font-normal`}>Coût Achat Unitaire</th>
                                    <th className={`${tBclasses} font-bold`}>Quantité de Commande</th>
                                    <th className={`${tBclasses} font-bold`}>TOTAL ACHAT H.T(€) PAR MODÈLE</th>
                                </tr>
                            </thead>

                            <T1 setT1={setT1} t1={t1} tCalculator={tCalculator} tBclasses={tBclasses} />
                            <T2 setT2={setT2} t2={t2} tCalculator={tCalculator} tBclasses={tBclasses} />
                            <T3 setT3={setT3} t3={t3} tCalculator={tCalculator} tBclasses={tBclasses} />
                            <T4 setT4={setT4} t4={t4} tCalculator={tCalculator} tBclasses={tBclasses} />
                            <T5 setT5={setT5} t5={t5} tCalculator={tCalculator} tBclasses={tBclasses} />
                            <T6 setT6={setT6} t6={t6} tCalculator={tCalculator} tBclasses={tBclasses} />
                        </table>
                    </div>

                </div>
            </div>
        </form>
    );
};

export default Trailers;