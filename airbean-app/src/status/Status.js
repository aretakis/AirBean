import "./status.css";
import drone from "../assets/graphics/drone.svg";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";

function Status() {
	const order = useSelector((state) => state.order.order);
	const dispatch = useDispatch();

	const emptyCartItems = () => {
		dispatch(emptyCart());
	}

	return order.length ? (
		<div className="status-page">
			<p className="status-message-order-number">
				Ordernummer {" " + order[0].orderNr}
			</p>
			<img src={drone} className="drone-img" alt="" />
			<p className="status-message">
				Din beställning <br />
				är på väg!
			</p>
			<p className="status-message-minutes">{order[0].eta + " "}minuter</p>
			<Link to="/menu" className="status-button" onClick={()=>emptyCartItems()}>
				Ok cool!
			</Link>
		</div>
	) : null;
}
export default Status;
