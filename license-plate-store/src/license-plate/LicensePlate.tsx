
const buttonClicked = () => {
  alert("Plate added to cart");
}

export function LicensePlate(props: any) {

    const { plate, buttonText } = props;

    return (
      <>
        <h2>{plate.title}</h2>
        <img src={plate.picture} className="img-fluid" />
        <p>{plate.description}</p>
        <div>
          <h2 className="float-left">${plate.price}</h2>
          <button className="btn btn-primary float-right" role="button" onClick={buttonClicked}>
            {buttonText}
          </button>
        </div>
      </>
    );
} 