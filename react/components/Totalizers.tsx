import React from "react";
import { useOrderForm } from "vtex.order-manager/OrderForm"

const Totalizers = () => {
  const { orderForm: {
    items,
    totalizers
} } = useOrderForm()

  return (
    <div>
        <p>tenemos {items.length} items en tu compra</p>
        <p> Total: ${totalizers[0]?.value/100} </p>
    </div>
  )
}

export default Totalizers;
