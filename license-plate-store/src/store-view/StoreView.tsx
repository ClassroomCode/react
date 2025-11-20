import { useState, useEffect } from "react";
import { Jumbotron } from "../jumbotron/Jumbotron";
import { LicensePlate } from "../license-plate/LicensePlate";
import { PromoBanner } from "../promo-banner/PromoBanner";
import { Spinner } from "../spinner/Spinner";
import type { LicensePlateData } from "../license-plate-data.type";

export function StoreView(props: any) {
  const [licensePlates, setPlates] = useState<LicensePlateData[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/data')
      .then(response => response.json())
      .then(data => setPlates(data));
  }, []);

  return(
    <>
      <Jumbotron title="Welcome to our store" description="Browse our collection of license plates below">
        
      </Jumbotron>
      <PromoBanner />
      <div className="container">
        { licensePlates.length > 0 ?
          <div className="row">
            {licensePlates.map((licensePlate) => (
              <div key={licensePlate._id} className="col-md-4 license-plate">
                <LicensePlate currency={props.currency} plate={licensePlate} buttonText="Add to cart" />
              </div>
            ))}
          </div>
          :
          <Spinner />
        }
      </div>
    </>
  );
}