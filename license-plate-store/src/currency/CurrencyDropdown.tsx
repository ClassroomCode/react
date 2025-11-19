import { useState } from "react";

export function CurrencyDropdown() {

	let [showItems, setShowItems] = useState(false);
	let [currency, setCurrency] = useState("USD");

	return (
		<div className="btn-group margin10">
			<button type="button" onClick={() => setShowItems(true)}
				className="btn btn-info dropdown-toggle" data-toggle="dropdown">
				{currency}
			</button>
			<div className={showItems? "dropdown-menu show" : "dropdown-menu"}>
				<a className="dropdown-item" onClick={() => { setShowItems(false); setCurrency('USD');}}>
					USD ($)
				</a>
				<a className="dropdown-item" onClick={() => { setShowItems(false); setCurrency('EUR');}}>
					EUR (€)
				</a>
				<a className="dropdown-item" onClick={() => { setShowItems(false); setCurrency('GBP');}}>
					GBP (£)
				</a>
			</div>
		</div>
	);
};
