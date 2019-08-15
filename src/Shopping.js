import React, { Component } from 'react';
import ShoppingItems from './ShoppingItems';


export default class Shopping extends Component {
    render() {
        return (
            <div className="row mx-auto">
                {this.props.items.map((item) =>
                    <ShoppingItems item={item} key={item.id} />
                )}
            </div>
        )
    }
}