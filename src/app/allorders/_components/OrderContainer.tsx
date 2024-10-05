"use client"
import { useToken } from '../../../context/SaveToken';
import NoOrders from './NoOrders';
import OrderDetails from './OrderDetails';

export default function OrderContainer() {

  const { deCodedToken } = useToken()
  console.log(deCodedToken)

  
  return (
    <section className=" my-10">
      {deCodedToken ?
        <OrderDetails deCodedToken={deCodedToken}/>
        : <NoOrders />
      }
    </section>

  )
}
