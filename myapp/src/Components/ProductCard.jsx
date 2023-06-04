import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DelProducts, getProducts } from "../Redux/action";
import "./productcard.css"

const ProductCard = ({ item }) => {
    

const dispatch= useDispatch();

    const del = () => {
       dispatch(DelProducts(item.id))
       .then((r)=> dispatch(getProducts))
    }


    return (
        <div  className="box" key={item._id} >
            <div >{item.description}</div>
            <div  >{item.title}</div>
           
            <div>
                <div>
                    <button onClick={del}  className="danger">
                        Delete
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default ProductCard;
