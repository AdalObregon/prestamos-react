import React, { useState } from 'react';
import { calcularTotal } from '../helpers/form';

const Formulario = (props) => {
  const {
    cantidad,
    setCantidad,
    plazo,
    setPlazo,
    setTotal,
    setCargando,
  } = props; // Definir state

  const [error, setError] = useState(false);

  // Cuando el usuario hace submit
  const calcularPrestamo = (e) => {
    e.preventDefault();
    // Validar
    if (cantidad === 0 || plazo === '') {
      setError(true);
      return;
    }
    // Eliminar el error previo
    setError(false);

    // Habilitar el spinner
    setCargando(true);

    setTimeout(() => {
      // Realizar cotizacion
      const total = calcularTotal(cantidad, plazo);

      // Una vez calculado guardarTotal
      setTotal(total);

      // Deshabilitar el spinner
      setCargando(false);

    }, 3000);
  };

  return (
    <>
      <div className='mt-8'>
        <form onSubmit={calcularPrestamo}>
          <div>
            <label className='block mx-0 text-xl font-normal mb-4'>
              Cantidad de prestamo
            </label>
            <input
              type='number'
              className='mb-4 rounded-lg h-8 lg:w-1/4 px-5 outline-none appearance-none'
              placeholder='$ 3,000'
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            />
          </div>
          <div className=''>
            <label className='block text-xl font-normal mb-4 '>
              Plazos para Pagar
            </label>
            <select
              className='rounded-lg h-8 lg:w-1/4 w-2/4'
              onChange={(e) => setPlazo(parseInt(e.target.value))}
            >
              <option value=''>--Selecciona--</option>
              <option value='3'>3 Meses</option>
              <option value='6'>6 Meses</option>
              <option value='12'>12 Meses</option>
              <option value='24'>24 Meses</option>
              <option value='48'>48 Meses</option>
            </select>
          </div>
          <div className='my-4'>
            <button className='bg-blue-300 px-5 lg:w-1/4 h-10 rounded-lg md:text-2xl uppercase font-bold text-gray-700 text-xl w-2/4'>
              Cotizar
            </button>
          </div>
        </form>
        {error ? (
          <p className='mb-8 text-gray-700 bg-red-200 md:mx-60 mx-6 p-3 font-semibold rounded-lg'>
            Todos los campos son obligatorios
          </p>
        ) : null}
      </div>
    </>
  );
};

export default Formulario;
