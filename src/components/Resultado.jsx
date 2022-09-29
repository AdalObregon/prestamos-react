import React from 'react';

const Resultado = ({ total, plazo, cantidad }) => {
  return (
    <div className='mb-8 bg-lime-100 md:mx-64 mx-2 rounded-md py-6'>
      <h2 className='font-bold mb-2 md:text-xl'>Resumen</h2>
      <div className='text-left ml-3'>
          <p>
            La cantidad solicitada es: <span className='font-bold'> $ {(cantidad).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
          </p>
          <p>A pagar en: <span className='font-bold'>{plazo} Meses</span></p>
          <p>Su pago mensual es de: <span className='font-bold'> ${(total / plazo).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span></p>
          <p>Total a pagar: <span className='font-bold'>$ {(total).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span></p>
      </div>
    </div>
  );
};

export default Resultado;
