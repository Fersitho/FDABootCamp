import React from 'react';

const Componet1 = ({name = 'Pepe'}) => {
    return (
        <div>
            <p> Hola me llamo {name}</p>
        </div>
    );
}

export default Componet1;
