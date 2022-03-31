import imgIn from "../../assets/imagenes/in.png";
import imgBus from "../../assets/imagenes/bus.jpg";
import imgAju from "../../assets/imagenes/aju.png";
import img1 from "../../assets/imagenes/img_1.png";
import imgDesc from "../../assets/imagenes/descarga.png";
import img2 from "../../assets/imagenes/img_2.png";
import img3 from "../../assets/imagenes/img_3.png";
import "../../estilos.css";
export const UserPage = () => {
  var imagenes = [img1, img2, img3];
  var imagenVisible = 0;

  const cambiar = (event) => {
    imagenVisible++;
    if (imagenVisible >= imagenes.length) {
      imagenVisible = 0;
    }
    event.target.src = imagenes[imagenVisible];
    cargarSiguienteImagen();
  };

  const cargarSiguienteImagen = () => {
    if (imagenVisible + 1 < imagenes.length) {
      console.log(imagenVisible + 1);
      var imgTmp = new Image();
      imgTmp.src = imagenes[imagenVisible + 1];
    }
  };

  window.onload = () => {
    cargarSiguienteImagen();
  };

  return (
    <div class="Hoja">
      <div class="cabecera">
        QUIZ GAME
        <img class="cab" src={imgDesc} alt="" />
      </div>
      <br />
      <div class="cuerpo">
        <input class="te" type="text" value="Introduce un còdigo de juego" />
        <br />
        <button class="in">Únete al juego</button>
      </div>

      <div class="juegos">
        <img className="j" src={img1} onClick={cambiar} alt="imgs" />
      </div>
      <div class="final">
        <img class="f" src={imgIn} alt="imgs" />
        <img class="a" src={imgBus} alt="imgs" />
        <img class="b" src={imgAju} alt="imgs" />
      </div>
    </div>
  );
};
