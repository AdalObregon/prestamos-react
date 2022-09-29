import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/spinner/Spinner';
function App() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState('');
  const [total, setTotal] = useState(0);
  const [cargando, setCargando] = useState(false);

  let componente;

  if (cargando) {
    componente = <Spinner />;
  }else if (total === 0) {
    componente = <Mensaje />;
  } else {
    componente = <Resultado total={total} plazo={plazo} cantidad={cantidad} />;
  }
  return (
    <>
      <Header />
      <div className='flex flex-col h-fit md:w-2/4 w-4/5 mx-auto mt-24 bg-gray-200 text-center mb-2 rounded-xl'>
        <Formulario
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          total={total}
          setTotal={setTotal}
          setCargando={setCargando}
        />
        {componente}
      </div>
    </>
  );
}

export default App;
