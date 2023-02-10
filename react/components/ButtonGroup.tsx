import React from "react"
import { useCssHandles } from 'vtex.css-handles'


const ButtonGroup = () => {
  const CSS_HANDLES = [
    'container_Buttons',
    'button1',
    'button2'
  ]
  const handles = useCssHandles(CSS_HANDLES)

  return (
  <div className={handles["container_Buttons"]}>
    <button className={handles["button1"]}>Seguir Comprando</button>
    <button className={handles["button2"]}>Ir checkout</button>
  </div>
  );
};

export default ButtonGroup;
