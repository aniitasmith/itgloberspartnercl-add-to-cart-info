import React from "react"
import { useCssHandles } from 'vtex.css-handles'

const ButtonGroup = ({urlLeft, urlRight}: {urlLeft: string, urlRight: string}) => {
  const CSS_HANDLES = [
    'container_Buttons',
    'button1',
    'button2'
  ]
  const handles = useCssHandles(CSS_HANDLES)

  return (
  <div className={handles["container_Buttons"]}>
    <a href={urlLeft}>
      <button className={handles["button1"]} >Seguir Comprando</button>
    </a>
    <a href={urlRight}>
      <button className={handles["button2"]} >Ir checkout</button>
    </a>
  </div>
  );
};

export default ButtonGroup;
