import React from "react";
import { useCssHandles } from 'vtex.css-handles'

const ProductGroup = ({ item, index }: { item: any, index: number }) => {
  const CSS_HANDLES = [
    'container__products',
    'container__image',
    'image',
    'container__productsDetails',
    'paragraph__name',
    'paragraph__price',
    'paragraph__quantity'
  ]
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div key={index} className={handles["container__products"]}>
      <div className={handles["container__image"]}>
        <img src={item.imageUrls.at1x} className={handles["image"]} />
      </div>
      <div className={handles["container__productsDetails"]}>
        <p className={handles["paragraph__name"]}>{item.name}</p>
        <p className={handles["paragraph__price"]}>${item.price / 100}</p>
        <p className={handles["paragraph__quantity"]}>Cantidad: {item.quantity}</p>
      </div>
    </div>
  )
}

export default ProductGroup;
