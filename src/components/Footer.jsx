import { useState } from "react";
import { useEffect } from "react";
import OrderBtn from "./OrderBtn";
import TimeText from "./TimeText";
import { PizzaData } from "./Data";

export default function Footer() {
  const forPizza = PizzaData;
  // const forPizza = [];
  const pizzaLength = forPizza.length;

  const [date, setDate] = useState(new Date());

  const tick = () => {
    console.log("Clock");
    setDate(new Date());
  };

  // const currentDate = date;

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    console.log("USE EFFECT");

    return () => {
      console.log("Clock Stopped");
      clearInterval(interval);
    };
  }, []);

  // Format the time without AM/PM
  const formattedTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    // hour12: false,
  });

  const opening = 0;
  const closing = 23;
  const hour = date.getHours();
  const isOpen = hour >= opening && hour <= closing;

  return pizzaLength > 0 ? (
    <footer className="footer">
      <div className="text-order">
        <TimeText isOpen={isOpen} formattedTime={formattedTime} />
        {isOpen ? <OrderBtn btnText="Order" /> : ""}
      </div>
    </footer>
  ) : (
    <></>
  );
}
