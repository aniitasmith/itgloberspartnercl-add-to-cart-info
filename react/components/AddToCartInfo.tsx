import React from "react"
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import ProductGroup from "./ProductGroup"
import Totalizer from "./Totalizers"
import ButtonGroup from "./ButtonGroup"

const AddToCartInfo = () => {
  const productInfo = useProduct();
  const { orderForm: {
      items,
      totalizers
  } } = useOrderForm()
  console.log("Este product tiene info:", productInfo)
  console.log("Info del la orden:", items, totalizers)
  return(
    <>
      <ProductGroup/>
      <Totalizer/>
      <ButtonGroup/>
    </>
  )
}

  export default AddToCartInfo;
