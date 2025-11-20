import saleIcon from '../assets/sale.png' 

const CURRENCIES: Record<string, string> = {EUR: "€", USD: "$", GBP: "£"};

const buttonClicked = () => {
  alert("Plate added to cart");
}

export function NoLicensePlates() {
  return <h2>No license plates</h2>
}

export function LicensePlate(props: any) {

    const { plate, buttonText } = props;

    return (
      <>
        <h2>{plate.title}{plate.onSale && <img src={saleIcon}/>}</h2>
        <img src={plate.picture} className="img-fluid" />
        <p>{plate.description}</p>
        <div>
          <h2 className="float-left">{CURRENCIES[props.currency]} {plate.price}</h2>
          <button className="btn btn-primary float-right" role="button" onClick={buttonClicked}>
            {buttonText}
          </button>
        </div>
      </>
    );
} 