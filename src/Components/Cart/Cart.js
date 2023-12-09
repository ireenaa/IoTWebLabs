import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import all_product from "../Assets/all_product";
import { incrementCount, decrementCount } from "./action";
import p1_img from '../Assets/audigt.png';
import p2_img from '../Assets/audiq8.png';
import p3_img from '../Assets/mers.png';
import p4_img from '../Assets/mers2.png';
import p5_img from '../Assets/po.png';
import p6_img from '../Assets/porsche1.png';
import p7_img from '../Assets/vovlvo.png';
import p8_img from '../Assets/audia5.png';
import p9_img from '../Assets/blue.png';
import p10_img from '../Assets/gold.png';
import p11_img from '../Assets/green.png';
import p12_img from '../Assets/orange.png';
import p13_img from '../Assets/image_2023-11-02_20-22-57.png';
import '../Cart/Cart.css'
import { deleteCar } from './action';

const getImageSource = (modelName) => {
    let imageSrc;
    switch (modelName.toLowerCase()) {
        case '':
            imageSrc = p4_img;
            break;
          case '':
            imageSrc = p5_img;
            break;
          case '911 carrera coupe':
            imageSrc = p6_img;
            break;
          case 'audi q8 e-tron':
            imageSrc = p2_img;
            break;
          case 'mercedes-benz e-class':
            imageSrc = p3_img;
            break;
          case 'audi rs e-tron gt':
            imageSrc = p1_img;
            break;
          case 'volvo':
            imageSrc = p7_img;
            break;
          case 'a5 sportback':
            imageSrc = p8_img;
            break;
          case 'mercedes-benz c-class':
            imageSrc = p9_img;
            break;
          case 'land rover range rover':
            imageSrc = p10_img;
            break;
          case 'panamera':
            imageSrc = p11_img;
            break;
          case 'macan t':
            imageSrc = p12_img;
            break;
          case 'land cruiser':
            imageSrc = p13_img;
            break;
          default:
            imageSrc = p1_img; 
        }
        return imageSrc; 
  };

const Cart = () => {
    const carArray = useSelector((state) => state.carList);
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();
    

    useEffect(() => {
        let totalPrice = 0;
        carArray.forEach((product) => {
            totalPrice += Math.round(product.price) * product.count;
        });
        setTotalPrice(totalPrice);
    }, [carArray]);

    const handleIncrement = (name) => {
        dispatch(incrementCount(name));
    };

    const handleDecrement = (name, count) => {
        if (count > 1) {
            dispatch(decrementCount(name));
        } else if (count === 1) {
            const confirmed = window.confirm("Are you sure you want to remove this car from your cart?");
            if (confirmed) {
                dispatch(deleteCar(name));
            }
        }
    };
   
    const handleDelete = (name) => {
        const confirmed = window.confirm(
            "Are you sure you want to remove this car from your cart?"
          );
          if (confirmed) {
            dispatch(deleteCar(name));
          }
    };


    const filteredCars = carArray.filter((product) => product.count > 0);

    return (
        <div className="cart-container">
    {filteredCars.map((product, index) => (
        <div className="cart-item" key={index}>
            <NavLink
                exact="true"
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "black" }}
                onClick={(e) => {
                    if (e.target.tagName === "BUTTON") {
                        e.preventDefault();
                    }
                }}
            >

                <img className="CarImage" src={getImageSource(product.name)} alt={product.name} />
            </NavLink>
            <div className="info">
            <h3 className="product-name">{product.name}</h3>
            <div className="product-controls">
            <button className="decrement-button" onClick={() => handleDecrement(product.name, product.count)}>-</button>

                <p className="product-count">{product.count}</p>
                <button className="increment-button" onClick={() => handleIncrement(product.name)}>+</button>
            </div>
            <h4 className="product-price">{product.price* product.count}$</h4>
            
            
            <button className="delete-button" onClick={() => handleDelete(product.name)}>
                        Delete
                    </button>
                    <hr />
            </div>
            
        </div>
    ))}

    {totalPrice > 0 && (
        <p className="total-price" style={{ fontSize: "2.2vw"}}>
            Total Price: {totalPrice}$
        </p>
    )}

    <button className="large-button">
        <NavLink to="/Catalog">BACK TO CATALOG</NavLink>
    </button>

</div>
    );
}

export default Cart;
const defaultState = {
    carList: [],
};

const findIndexByName = (arr, name) => {
    return arr.findIndex((item) => item.name === name);
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CAR":
            const foundIndex = findIndexByName(state.carList, action.payload.name);
            if (foundIndex === -1) {
                return { ...state, carList: [...state.carList, action.payload] };
            } else {
                const updatedCarArr = [...state.carList];
                updatedCarArr[foundIndex] = {
                    ...updatedCarArr[foundIndex],
                    count: updatedCarArr[foundIndex].count + 1,
                };
                return { ...state, carList: updatedCarArr };
            }

        case "INCREMENT_COUNT":
            return {
                ...state,
                carList: state.carList.map((product) => {
                    if (product.name === action.payload.name) {
                        return { ...product, count: product.count + 1 };
                    }
                    return product;
                }),
            };

        case "DECREMENT_COUNT":
            return {
                ...state,
                carList: state.carList.map((product) => {
                    if (product.name === action.payload.name && product.count > 0) {
                        return { ...product, count: product.count - 1 };
                    }
                    return product;
                }),
            };
            case "DELETE_CAR":
                const updatedCarList = state.carList.filter((product) => product.name !== action.payload.name);
                return { ...state, carList: updatedCarList };

        default:
            return state;
    }
};