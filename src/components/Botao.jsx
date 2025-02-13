import { useState } from "react";
import { Gi3dGlasses } from "react-icons/gi";
import { GiAbbotMeeple } from "react-icons/gi";
import { GiBarbecue } from "react-icons/gi";
import { GiBatMask } from "react-icons/gi";
import { GiBasketballBall } from "react-icons/gi";
import { GiBoatFishing } from "react-icons/gi";
import { GiBookCover } from "react-icons/gi";
import { GiBiohazard } from "react-icons/gi";
import { GiBrokenHeart } from "react-icons/gi";
import { GiBurningSkull } from "react-icons/gi";



function Botao(){
    
    const [imagem,setImagem] = useState()
    const array = [<Gi3dGlasses />, <GiAbbotMeeple />,<GiBarbecue/>,<GiBatMask/>,<GiBasketballBall/>,<GiBoatFishing/>,<GiBookCover/>,<GiBiohazard/>,<GiBrokenHeart/>,<GiBurningSkull/>]
    const imagemAleatoria = array[Math.floor(Math.random() * array.length)];
    
    
    
  return (
    <div className='Botao'>
        <button onClick={() => setImagem(imagemAleatoria)}>Rolar imagem</button>
        <h1>{imagem}</h1>
    </div>
  )
}
export default Botao