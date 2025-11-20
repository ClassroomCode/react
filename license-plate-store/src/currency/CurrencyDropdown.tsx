import { useState } from "react";
import type { Currency } from "../license-plate-data.type";

export interface CurrencyDropdownProps {
  currency: Currency;
  onCurrencyChange: (newCurrency: Currency) => void
}

export function CurrencyDropdown(props: CurrencyDropdownProps) {

	let [showItems, setShowItems] = useState(false);

	return (
		<div className="btn-group margin10">
			<button type="button" onClick={() => setShowItems(true)}
				className="btn btn-info dropdown-toggle" data-toggle="dropdown">
				{props.currency}
			</button>
			<div className={showItems? "dropdown-menu show" : "dropdown-menu"}>
				<a className="dropdown-item" onClick={() => { setShowItems(false); props.onCurrencyChange('USD');}}>
					USD ($)
				</a>
				<a className="dropdown-item" onClick={() => { setShowItems(false); props.onCurrencyChange('EUR');}}>
					EUR (€)
				</a>
				<a className="dropdown-item" onClick={() => { setShowItems(false); props.onCurrencyChange('GBP');}}>
					GBP (£)
				</a>
			</div>
		</div>
	);
};
