import React, { useContext } from 'react'
import { CartContext, DataContext,CountContext } from '../../Context'
import "./checkout.css"
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Brief = () => {
  const { cartList, cartPrice,removeList } = useContext(CartContext);
  const { order, orderid } = useContext(DataContext);
  const {resetCounters} = useContext(CountContext)
  const backtoproduct = useNavigate();
  const handleclick=()=>{
    removeList();
    resetCounters();
    backtoproduct(`/Productos`);

  }
  

  return (
    <>
         <div className='container-brief' >
         <h2>Gracias por Elegirnos {order.nombre} </h2>
          <Table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Importe</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((item) => (
                <tr key={item.id}>
                  <td>{item.item}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div>
          <h3>Total: ${cartPrice}</h3>
          
          <h3> Numero de Orden: {orderid}</h3>
          </div>
          <Button onClick={()=>handleclick()}>Finalizar</Button>
          </div>
    </>
  );
}
