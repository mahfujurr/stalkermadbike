import React from 'react';

const Thanks = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10 font-semibold'>
            <h1 className='w-1/2 text-center'>"Merci pour votre demande de commande. Les détails de votre commande ont été envoyés à notre équipe et vous serez bientôt contacté pour poursuivre votre commande avec nous !"</h1>
            <h1 className='w-1/3 mt-5 text-center'>"Une copie du reçu a été envoyée à votre adresse e-mail"</h1>
        
        </div>
    );
};

export default Thanks;