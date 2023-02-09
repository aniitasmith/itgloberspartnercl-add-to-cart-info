import React from "react"
import ButtonGroup from "./ButtonGroup"
import ProductGroup from "./ProductGroup"
import Totalizers from "./Totalizers"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import { generateBlockClass } from "@vtex/css-handles"
import styles from "./styles.css"


const AddToCartInfo = ({blockClass} : { blockClass: string }) => {

  const container = generateBlockClass(styles.container, blockClass)

  const { orderForm: { items } } = useOrderForm()

  return(
    <div className={container}>
      {
        items.map((item: any, index: number) => {
          console.log( item)
          return (
            <ProductGroup index={index} item={item} blockClass={blockClass}/>
          )
        })
      }
      <Totalizers/>
      <ButtonGroup/>
    </div>
  )
}

  export default AddToCartInfo;
