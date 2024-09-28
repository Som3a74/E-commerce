"use client"
import { useEffect, useState } from 'react';
import { useToken } from '../../../context/SaveToken';
import NoOrders from './NoOrders';
import OrderDetails from './OrderDetails';

export default function OrderContainer() {

  const { token, deCodedToken } = useToken()

  
  return (
    <section className=" my-10">
      {deCodedToken ?
        <OrderDetails deCodedToken={deCodedToken}/>
        : <NoOrders />
      }
    </section>

  )
}
