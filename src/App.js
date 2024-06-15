import logo from './logo.svg';
import './App.css';
import {Testimonio} from './components/Testimonio.jsx'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Testimonios de los alumnos de Code-Camp</h1>
        <Testimonio 
          nombre = 'Pepe Toño'
          pais = 'Mexico'
          imagen = '2'
          cargo = 'Ingeniero en Powerapps'
          empresa  = 'CFE'
          testimonio = '"Hace unos meses, me encontraba abrumada con la cantidad de información y recursos que necesitaba para mis estudios de medicina. Un día, una amiga me recomendó HealthMate, una app web diseñada para estudiantes de salud. Decidí darle una oportunidad, y honestamente, ha sido una de las mejores decisiones que he tomado en mi vida académica."' />
        <Testimonio 
          nombre = 'Junior H Melendez'
          pais = 'Suiza'
          imagen = '1'
          cargo = 'Ingeniero en Minecraft'
          empresa  = 'Sigma'
          testimonio = '"Una de las características que más me ha gustado es el foro de discusión, donde puedo interactuar con otros estudiantes y profesionales de la salud. He recibido consejos valiosos y he podido aclarar muchas dudas gracias a la comunidad activa y colaborativa que utiliza la app."' />
        <Testimonio 
          nombre = 'Pancha Gonzalez'
          pais = 'Mexico'
          imagen = '3'
          cargo = 'Ingeniero en HTML'
          empresa  = 'Pixel Perfect'
          testimonio = '"En resumen, HealthMate ha transformado mi forma de estudiar y me ha brindado las herramientas necesarias para avanzar en mi carrera de medicina. La recomiendo a cualquier estudiante o profesional de la salud que busque un recurso confiable y completo para su desarrollo académico y profesional."' />
      </div>
    </div>
  );
}

export default App;
