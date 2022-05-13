import "./menu.css";
import flowers_header from "../assets/graphics/graphics-header.svg";
import flowers_footer from "../assets/graphics/graphics-footer.svg";
import airbeanicon from "../assets/graphics/bag.svg";
import plusicon from "../assets/graphics/add.svg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem, updateCartItem } from "../actions/cartActions";

function Menu() {
	const dispatch = useDispatch();
	const [menu, setMenu] = useState([]);
	const cart = useSelector((state) => state.cart.cart);

	useEffect(() => {
		async function getMenu() {
			const res = await fetch("http://localhost:5000/api/beans");
			const data = await res.json();
			setMenu(data.menu);
		}
		getMenu();
	}, []);

	const addItemToCart = (menuItem) => {
		const itemExist = cart.find((item) => item.id === menuItem.id);
		if (itemExist) {
			dispatch(updateCartItem(menuItem));
		} else {
			let newCartItem = { ...menuItem, count: 1 };
			dispatch(addCartItem(newCartItem));
		}
	};

	function totalItemsInCart(){ 
		const sum = cart.reduce((accumulator, object) => {
			return accumulator + object.count;
		  }, 0);
		return sum;
	}

	return (
		<section className="menu-page">
			<div className="header">
				<img className="image" src={flowers_header} />
			</div>
			<Link to="/cart">
				<div className="ellipse">
				{cart.length>0 && <div className="dot">{ totalItemsInCart()+""}</div>}

					<img src={airbeanicon} className="cart-icon" />
				</div>
			</Link>
			<div className="flex-item">
				<p className="menu-title">Meny</p>
				{menu !== undefined && menu.length
					? menu.map((menuItem) => (
							<div className="menu-flex">
								<div className="menu-item">
									<span
										className="ellipse-11"
										onClick={() => addItemToCart(menuItem)}
									>
										<img className="icon" src={plusicon} />
									</span>
									<span className="flex-item">
										<span className="flex-item">
											{menuItem.title}....... {menuItem.price}kr
										</span>
										<span className="flex-item menu-descr">
											{menuItem.desc}
										</span>
									</span>
								</div>
							</div>
					  ))
					: null}
			</div>
			<div className="footer">
				<img className="image" src={flowers_footer} />
			</div>
		</section>
	);
}
export default Menu;
