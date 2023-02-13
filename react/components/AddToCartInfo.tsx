import React from "react"
import ButtonGroup from "./ButtonGroup"
import ProductGroup from "./ProductGroup"
import Totalizers from "./Totalizers"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import { useCssHandles } from 'vtex.css-handles'


const AddToCartInfo = () => {
  const CSS_HANDLES = [ "container__addToCartInfo"]
  const handles = useCssHandles(CSS_HANDLES)
  const urlLeft ="/"
  const urlRigth ="/checkout"

  const { orderForm: { items } } = useOrderForm()

  return(
    <div className={handles["container__addToCartInfo"]}>
      {
        items.map((item: any, index: number) => {
          console.log( item)
          return (
            <ProductGroup index={index} item={item}/>
          )
        })
      }
      <Totalizers/>
      <ButtonGroup urlLeft={urlLeft} urlRight={urlRigth}/>
    </div>
  )
}
  export default AddToCartInfo;
