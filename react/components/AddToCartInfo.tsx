import React from "react"
import ButtonGroup from "./ButtonGroup"
import ProductGroup from "./ProductGroup"
import Totalizers from "./Totalizers"
import { useOrderForm } from "vtex.order-manager/OrderForm"

const AddToCartInfo = () => {

  const { orderForm: { items } } = useOrderForm()

  return(
    <div>
      {
        items.map((item: any, index: number) => {
          console.log( item)
          return (
            <ProductGroup index={index} item={item}/>
          )
        })
      }
      <Totalizers/>
      <ButtonGroup/>
    </div>
  )
}
  export default AddToCartInfo;
