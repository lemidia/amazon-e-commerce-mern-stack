import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../action/cartActions";

function ShippingAddressScreen(props) {
  const { shippingAddress } = useSelector((state) => state.cart);
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  // when a user do a sign out, user will redirect to the home screen from shipping screen
  if (!userInfo) {
    props.history.push("/signin");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push("/payment");
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping</h1>
        </div>
        <div className="">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            placeholder="Enter full name"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            placeholder="Enter address"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="">
          <label htmlFor="postal code">Postal Code</label>
          <input
            type="text"
            id="postal code"
            value={postalCode}
            placeholder="Enter postal code"
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>
        <div className="">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            value={country}
            placeholder="Enter country"
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div className="">
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default ShippingAddressScreen;