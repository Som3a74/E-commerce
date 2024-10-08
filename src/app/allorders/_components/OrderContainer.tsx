"use client"
import { useToken } from '../../../context/SaveToken';
import NoOrders from './NoOrders';
import OrderDetails from './OrderDetails';

export default function OrderContainer() {

  const { deCodedToken } = useToken()
  
  return (
    <section className=" my-10">
      {deCodedToken ?
        <OrderDetails deCodedToken={deCodedToken}/>
        : <NoOrders />
      }
    </section>
  )
}
