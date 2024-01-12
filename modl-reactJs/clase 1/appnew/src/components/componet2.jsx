import React from "react";

const Componet2 = ({ date = new Date("1990,5,12") }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const age = calculateAge(date);

  // si es una arrow funcition tiene que ir encima de donde se use!
  function calculateAge(birthDay) {
    const now = new Date();
    const diferencia = now - birthDay;
    // Convertimos la diferencia a años
    const years = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
    
    return years;
  }

  return (
    <div>
      <p>
        Naci el {date.toLocaleDateString("es-ES", options)}, tengo {age} años.
      </p>
    </div>
  );
};

export default Componet2;
