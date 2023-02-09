import React from "react";
import { generateBlockClass } from "@vtex/css-handles"
import styles from "./styles.css"

const ProductGroup = ({item, index, blockClass}: {item: any, index: number, blockClass: string}) => {

const container__item = generateBlockClass(styles.container__item, blockClass)

  return (
    <div key={index} className={container__item}>
      <div>
        <img src={item.imageUrls.at1x}/>
      </div>
      <div>
        <p>{item.name}</p>
        <p>{item.price/100}</p>
        <p>Cantidad: {item.quantity}</p>
      </div>
    </div>
  )
}

export default ProductGroup;
