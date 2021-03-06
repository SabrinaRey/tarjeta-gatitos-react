import React from 'react';
import TarjetaDeGatos from './components/TarjetaDeGatos';
import './App.css';
import BarraNav from './components/BarraNav';
import Footer from './components/Footer';
import Article from './components/Article';
import Formulario from './components/Formulario';
import ContenedorDeTarjeta from './components/ContenedorDeTarjeta'
// import icono from './img/hamburguesa.png'


const gatos = [
  {
    name: "Rodolfo",
    shortDesc: "Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "https://animalrevista.com/wp-content/uploads/2016/07/gatas-calico-tricolor-animal-la-revista.jpg",
    color: ["atigrado", "blanco", "negro", "marron",],
    sexo: "masculino",
    disponible: false,
  },

  {
    name: "Muzzarella",
    shortDesc: "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "https://www.imagenesdegatos.net/wp-content/uploads/2015/12/gato-gris-ojos-naranja-3.jpg",
    color: ["blanco"],
    sexo: "femenino",
    disponible: true,
  },

  {
    name: "Artilugia",
    shortDesc: "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "https://image.freepik.com/foto-gratis/primer-plano-hermoso-gato-negro-blanco-marcas-sueno-cara-acostado-piso-concreto_44161-220.jpg",
    color: ["negro"],
    sexo: "femenino",
    disponible: false,
  },

  {
    name: "Wosito",
    shortDesc: "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqkcBuVxZdrxWFYiEhoR3SpIioYCMesijUKHfjh7pTz-ctaf5&s",
    color: ["blanco", "gris"],
    sexo: "masculino",
    disponible: true,
  },

  {
    name: "Calamardo",
    shortDesc: "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg",
    color: ["blanco", "negro", "naranja", "marron"],
    sexo: "masculino",
    disponible: false,

  },

]

function App() {
 

  return (
    <>
      <BarraNav />
      <article className="principal">
        <Article />
      </article>
      <section className="formulario">
        <Formulario />
      </section>
      <section className="tarjetas-principal">
      <ContenedorDeTarjeta gatos={gatos} />
      </section>
      <Footer />

    </>
  );
}

export default App;
