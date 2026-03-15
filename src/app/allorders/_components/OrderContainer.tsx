"use client"
import { useToken } from '../../../context/SaveToken';
import NoOrders from './NoOrders';
import OrderDetails from './OrderDetails';
import GeneralPageSkeleton from "@/components/skeletons/GeneralPageSkeleton";

export default function OrderContainer() {

  const { deCodedToken, Storetoken } = useToken()
  
  return (
    <section className=" my-10">
      {deCodedToken ? (
        <OrderDetails deCodedToken={deCodedToken}/>
      ) : Storetoken ? (
        <GeneralPageSkeleton />
      ) : (
        <NoOrders />
      )}
    </section>
  )
}
