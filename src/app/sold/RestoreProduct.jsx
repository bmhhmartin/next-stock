'use client'
import React from 'react';

const RestoreProduct = ({productIndex}) => {

    const restoreHandle = async () => {
        try {
          fetch(await `https://64c9d9cbb2980cec85c279c3.mockapi.io/all_products/${productIndex}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              product_active: false,
            }),
          }
        )
        alert("Restore Successfully");
        } catch (error) {
          console.error('Error:', error);
        }

    };

    return (
        <div>
            <button className="btn btn-danger bg-red-500 text-white" onClick={restoreHandle}>Restore Product</button>
        </div>
    );
};

export default RestoreProduct;