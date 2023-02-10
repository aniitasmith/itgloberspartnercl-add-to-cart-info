import React from "react";
import { useOrderForm } from "vtex.order-manager/OrderForm"
import { useCssHandles } from 'vtex.css-handles'

const Totalizers = () => {
  const CSS_HANDLES = [
    "container__totalizer",
    "items_total",
    "items_totalizer"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()
  return (
    <div className={handles["container__totalizer"]}>
        <p className={handles["items_total"]}>tenemos {items.length} items en tu compra</p>
        <p className={handles["items_totalizer"]}> Total: ${totalizers[0]?.value/100} </p>
    </div>
  )
}
export default Totalizers;
