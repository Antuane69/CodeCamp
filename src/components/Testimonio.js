import React from 'react';

function Testimonio(){
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require('../img/1.jpeg')}
        alt='Foto de Empleado 1'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          Lupe Gonzalez en Irlanda
        </p>
        <p className='cargo-testimonio'>
          Ingeniero en Alimentos en Sigma
        </p>
        <p className='texto-testimonio'>
          "Hace unos meses, me encontraba abrumada con la cantidad de información y recursos que necesitaba para mis estudios de medicina. Un día, una amiga me recomendó HealthMate, una app web diseñada para estudiantes de salud. Decidí darle una oportunidad, y honestamente, ha sido una de las mejores decisiones que he tomado en mi vida académica".
        </p>
      </div>
    </div>
  );
}

export default Testimonio;