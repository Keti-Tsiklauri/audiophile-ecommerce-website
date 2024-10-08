import { useState, useRef } from "react";
import Order from "../components/Order";
import Navbar from "../components/Navbar";
import styles from "./checkout.module.css";
import Summary from "../components/Summary";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

export default function CheckOut() {
  const { check, setCheck } = useGlobalContext();
  const navigateback = useNavigate();
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    ZIPCode: "",
    City: "",
    Country: "",
    paymentMethod: "",
    eMoneyNumber: "",
    eMoneyPIN: "",
  });

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");

  // Refs for form fields
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const ZIPCodeRef = useRef<HTMLInputElement>(null);
  const CityRef = useRef<HTMLInputElement>(null);
  const CountryRef = useRef<HTMLInputElement>(null);
  const eMoneyNumberRef = useRef<HTMLInputElement>(null);
  const eMoneyPINRef = useRef<HTMLInputElement>(null);

  const handleGoBack = () => {
    navigateback(-1);
  };

  function handlePaymentChange(method: string) {
    setSelectedPaymentMethod(method);
  }

  function validateForm() {
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const phone = phoneRef.current?.value || "";
    const address = addressRef.current?.value || "";
    const ZIPCode = ZIPCodeRef.current?.value || "";
    const City = CityRef.current?.value || "";
    const Country = CountryRef.current?.value || "";
    const eMoneyNumber = eMoneyNumberRef.current?.value || "";
    const eMoneyPIN = eMoneyPINRef.current?.value || "";
    const paymentMethod = selectedPaymentMethod;

    let isValid = true;
    const newErrors: any = {};

    if (!name || name.length <= 2) {
      newErrors.name = "Name must be longer than two characters";
      isValid = false;
    }
    if (/\d/.test(name)) {
      newErrors.name = "Name must not contain numbers.";
      isValid = false;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email address.";
      isValid = false;
    }

    if (!phone || !/^\d+$/.test(phone)) {
      newErrors.phone = "Phone number must contain only numbers.";
      isValid = false;
    }

    if (!address) {
      newErrors.address = "Address is required.";
      isValid = false;
    }

    if (!ZIPCode) {
      newErrors.ZIPCode = "ZIP Code is required.";
      isValid = false;
    }

    if (!City) {
      newErrors.City = "City is required.";
      isValid = false;
    }

    if (!Country) {
      newErrors.Country = "Country is required.";
      isValid = false;
    }

    if (!paymentMethod) {
      newErrors.paymentMethod = "Payment method must be selected.";
      isValid = false;
    }

    if (paymentMethod === "e-Money") {
      if (!eMoneyNumber) {
        newErrors.eMoneyNumber = "e-Money Number is required.";
        isValid = false;
      }
      if (!eMoneyPIN) {
        newErrors.eMoneyPIN = "e-Money PIN is required.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleSummaryClick = () => {
    const isFormValid = validateForm();
    if (isFormValid) {
      setCheck?.(true); // Proceed with checkout
    } else {
      setCheck?.(false); // Stay on the current page if validation fails
    }
  };

  return (
    <div className={`${styles.di}`}>
      <div className={`${check ? styles.opacity : ""}`}>
        <Navbar />
        <p className={styles.go} onClick={handleGoBack}>
          Go Back
        </p>
      </div>
      <div className={styles.see}>
        <Order />
      </div>
      <div className={styles.main}>
        <div className={`${check ? styles.opacity : ""}`}>
          <div className={styles.container}>
            <p className={styles.check}>CHECKOUT</p>
            <p className={styles.title}>Billing Details</p>
            <div className={styles.container2}>
              <div className={styles.box}>
                <label
                  htmlFor="name"
                  className={errors.name ? styles.errorLabel : ""}
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Alexei Ward"
                  id="name"
                  ref={nameRef}
                  required
                  className={errors.name ? styles.errorInput : ""}
                />
                {errors.name && (
                  <p className={styles.errorText}>{errors.name}</p>
                )}
              </div>
              <div className={styles.box}>
                <label
                  htmlFor="email"
                  className={errors.email ? styles.errorLabel : ""}
                >
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="alexei@mail.com"
                  id="email"
                  ref={emailRef}
                  required
                  className={errors.email ? styles.errorInput : ""}
                />
                {errors.email && (
                  <p className={styles.errorText}>{errors.email}</p>
                )}
              </div>
            </div>
            <div className={`${styles.box} ${styles.phone}`}>
              <label
                htmlFor="phone"
                className={errors.phone ? styles.errorLabel : ""}
              >
                Phone Number
              </label>
              <input
                type="text"
                placeholder="+1 202-555-0136"
                id="phone"
                ref={phoneRef}
                required
                className={errors.phone ? styles.errorInput : ""}
              />
              {errors.phone && (
                <p className={styles.errorText}>{errors.phone}</p>
              )}
            </div>
            <p className={styles.title}>Shipping Info</p>
            <div className={styles.address}>
              <label
                htmlFor="address"
                className={errors.address ? styles.errorLabel : ""}
              >
                Address
              </label>
              <input
                type="text"
                placeholder="1137 Williams Avenue"
                id="address"
                ref={addressRef}
                required
                className={errors.address ? styles.errorInput : ""}
              />
              {errors.address && (
                <p className={styles.errorText}>{errors.address}</p>
              )}
            </div>
            <div className={styles.container2}>
              <div className={styles.box}>
                <label
                  htmlFor="ZIPCode"
                  className={errors.ZIPCode ? styles.errorLabel : ""}
                >
                  ZIP Code
                </label>
                <input
                  type="text"
                  placeholder="10001"
                  id="ZIPCode"
                  ref={ZIPCodeRef}
                  required
                  className={errors.ZIPCode ? styles.errorInput : ""}
                />
                {errors.ZIPCode && (
                  <p className={styles.errorText}>{errors.ZIPCode}</p>
                )}
              </div>
              <div className={styles.box}>
                <label
                  htmlFor="City"
                  className={errors.City ? styles.errorLabel : ""}
                >
                  City
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  id="City"
                  ref={CityRef}
                  required
                  className={errors.City ? styles.errorInput : ""}
                />
                {errors.City && (
                  <p className={styles.errorText}>{errors.City}</p>
                )}
              </div>
            </div>
            <div className={`${styles.box} ${styles.country}`}>
              <label
                htmlFor="Country"
                className={errors.Country ? styles.errorLabel : ""}
              >
                Country
              </label>
              <input
                required
                type="text"
                placeholder="United States"
                id="Country"
                ref={CountryRef}
                className={errors.Country ? styles.errorInput : ""}
              />
              {errors.Country && (
                <p className={styles.errorText}>{errors.Country}</p>
              )}
            </div>
            <p className={styles.title}>Payment Details</p>
            <div
              className={`${styles.pay} ${
                errors.paymentMethod ? styles.errorBorder : ""
              }`}
            >
              <div className={styles.payment}>
                <p className={styles.payp}>Payment Method</p>{" "}
                {errors.paymentMethod && (
                  <p className={styles.errorText}>{errors.paymentMethod}</p>
                )}
              </div>
              <div className={styles.div10}>
                <div
                  className={`${styles.div11} ${
                    selectedPaymentMethod === "e-Money" ? styles.selected : ""
                  }`}
                >
                  <input
                    type="radio"
                    id="e-money"
                    name="payment-method"
                    value="e-Money"
                    onChange={() => handlePaymentChange("e-Money")}
                    checked={selectedPaymentMethod === "e-Money"}
                  />
                  <label htmlFor="e-money">e-Money</label>
                </div>
                <div
                  className={`${styles.div11} ${
                    selectedPaymentMethod === "Cash on Delivery"
                      ? styles.selected
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    id="cash-on-delivery"
                    name="payment-method"
                    value="Cash on Delivery"
                    onChange={() => handlePaymentChange("Cash on Delivery")}
                    checked={selectedPaymentMethod === "Cash on Delivery"}
                  />
                  <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                </div>
              </div>
            </div>
            {selectedPaymentMethod === "e-Money" && (
              <div>
                <div className={styles.box}>
                  <label
                    htmlFor="eMoneyNumber"
                    className={errors.eMoneyNumber ? styles.errorLabel : ""}
                  >
                    e-Money Number
                  </label>
                  <input
                    type="text"
                    placeholder="123456789"
                    id="eMoneyNumber"
                    ref={eMoneyNumberRef}
                    className={errors.eMoneyNumber ? styles.errorInput : ""}
                  />
                  {errors.eMoneyNumber && (
                    <p className={styles.errorText}>{errors.eMoneyNumber}</p>
                  )}
                </div>
                <div className={styles.box}>
                  <label
                    htmlFor="eMoneyPIN"
                    className={errors.eMoneyPIN ? styles.errorLabel : ""}
                  >
                    e-Money PIN
                  </label>
                  <input
                    type="text"
                    placeholder="9876"
                    id="eMoneyPIN"
                    ref={eMoneyPINRef}
                    className={errors.eMoneyPIN ? styles.errorInput : ""}
                  />
                  {errors.eMoneyPIN && (
                    <p className={styles.errorText}>{errors.eMoneyPIN}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <Summary handleSummaryClick={handleSummaryClick} />
        </div>
      </div>
    </div>
  );
}
