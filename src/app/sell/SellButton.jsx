'use client'
import React from 'react';

const SellButton =  ({productIndex}) => {

    const sellHandle = async () => {
        console.log("ID :" + productIndex)
        try {
          fetch(await `https://64c9d9cbb2980cec85c279c3.mockapi.io/all_products/${productIndex}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              product_active: true,
            }),
          }
        )
        alert("Sell successfully !!!");
        } catch (error) {
          console.error('Error:', error);
        }

    };

    return (
        <div>
            <button className="btn btn-success hover:bg-red-500 hover:text-white" onClick={sellHandle}>Sell Product</button>
        </div>
    );
};

export default SellButton;