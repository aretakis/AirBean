import { Link } from "react-router-dom";
import "./cart.css";
import airbeanicon from "../assets/graphics/bag.svg";
import flowers_header from "../assets/graphics/graphics-header.svg";
import arrow_up from "../assets/graphics/arrow-up.svg";
import arrow_down from "../assets/graphics/arrow-down.svg";
import "../menu/menu.css";
import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "../actions/orderActions";
import { updateCartItem, removeCartItem } from "../actions/cartActions";

function Cart() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => {
		return state.cart.cart;
	});
	const totalPrice = useSelector((state) => {
		return state.cart.totalPrice;
	});

	const discount = useSelector((state) => {
		return state.cart.discount;
	});

	function totalItemsInCart(){ 
		const sum = cart.reduce((accumulator, object) => {
			return accumulator + object.count;
		  }, 0);
		return sum;
	}

	const changeCount = (action, item) => {
		if (action === "add") {
			dispatch(updateCartItem(item));
		}
		if (action === "remove") {
			dispatch(removeCartItem(item));
		}
	};

	const sendOrders = () => {
		let result = [];
		let url = "http://localhost:5000/api/beans";
		const header = {
			method: "POST",
			headers: {
				ACCEPT: "application/json",
				"Content-type": "application/json",
			},
			body: JSON.stringify(cart),
		};

		async function sendOrder() {
			const res = await fetch(url, header);
			result = await res.json();
			dispatch(addOrder(result));
		}
		sendOrder();
	};

	return (
		<section className="cart">
			<div className="header">
				<img className="image" src={flowers_header} />
			</div>
			<div className="ellipse">
			<div className="dot">{cart.length? totalItemsInCart() : ""}</div>
				<img src={airbeanicon} className="cart-icon" />
			</div>
			<div className="cart-overview">
				<p className="cart-title">Din beställning</p>
				{cart && cart.length ? (
					cart.map((cartItem) => (
						<div className="margin">
							<div className="cart-item-box">
								<span className="text-m">{cartItem.title}</span>
								<span className="product-count">
									<img
										src={arrow_up}
										onClick={() => changeCount("add", cartItem)}
									/>
									{cartItem.count}
									<img
										src={arrow_down}
										onClick={() => changeCount("remove", cartItem)}
									/>
								</span>
							</div>
							<span className="text-s">{cartItem.price + "  " +"kr"}</span>
						</div>
					))
				) : (
					<p className="empty-cart-text">Din varukorg är för närvarande tom</p>
				)}
				<span className="total-cost-text">
					<p className="text-m">
						Total <span>{totalPrice + " " - discount}</span>
						kr
					</p>
					{discount>0 && <p className="text-s">Rabatt: {discount} kr</p>}
					<span className="text-s">inkl moms + drönarleverans</span>
				</span>
				<span className="order-button" onClick={() => sendOrders()}>
					<Link className="order-button-link" to="/status">
						<p className="order-button-text">Take my money!</p>
					</Link>
				</span>
			</div>
		</section>
	);
}

export default Cart;
