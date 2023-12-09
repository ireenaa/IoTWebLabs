import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
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

const Item = (props) => {
  let imageSrc;

  switch (props.name.toLowerCase()) {
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
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img src={imageSrc} alt="" /></Link>
        <h2 className='item-name'>{props.name}</h2>
        <p className='item-prices'>{props.price}$</p>

    </div>
  )
}

export default Item