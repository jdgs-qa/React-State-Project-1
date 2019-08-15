import React from 'react';

function ShoppingItem(props) {
    return (
        <div className="col">
            <div className="card m-2">
                <img src={props.item.imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title text-center">{props.item.name}</h3>
                    <ul>
                        <li>{props.item.display}</li>
                        <li>{props.item.processor}</li>
                        <li>{props.item.ram}</li>
                        <li>{props.item.storage}</li>
                        <li>{props.item.graphics}</li>
                        <li>{props.item.feature1}</li>
                        <li>{props.item.feature2}</li>
                        <li>{props.item.ports}</li>
                    </ul>
                    <span>
                        <h3 className="text-center">{props.item.price}</h3>
                    </span>
                    <button className="btn btn-dark btn-block mt-4">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingItem;