import React from 'react'

const Order = ({details}) => {
    return (
        <>
        <div className="Order">
            <h1>Thanks {details.name} for ordering with us.</h1>
            <p>Here are the  details</p>
            <div className="Order-pizza-size">
                <p>Name:
                <span>{details.name},</span>
                </p>
                <p>Size:
                <span>{details.size}</span>
                </p>
            </div>
            {details.toppings.length !== 0 
            ? <div>
                <p>Toppings:</p>
                {details.toppings.join(', ')}
              </div> 
            : <p>No Toppings Selected</p>}
            {details.special 
                ? <div>
                    <p>Special Instruction:
                    <span>{details.special}</span>
                    </p>
                </div>
                : <div><p>No special instruction specified.</p></div>
            }
        </div>
        </>
    )
}

export default Order;