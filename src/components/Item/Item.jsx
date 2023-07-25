import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./item.css";

function Item (props){
    const { title, img, price, description} = props;
    return (
    <div className="item-card">
    <div className="item-card_img">
        <img src={img} alt="imagen"></img>
    </div>
    <div className="item-card_header">
        <h1>{title}</h1>
    </div>   
    <div className="item-card_detail">
       <h4>${price}</h4>
       <small>{description}</small>
    </div>
      <Link to="/">
         <ButtonComponent colorFondo="grey">Ver Productos</ButtonComponent>
      </Link>     
    </div>
  );
}
export default Item;