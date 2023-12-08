import { PizzaData } from "./Data";
import AllList from "./AllList";

export default function Main() {
  const forPizza = PizzaData;
  // const forPizza = [];
  const pizzaLength = forPizza.length;
  return (
    <main className="main">
      <h2>OUR MENU</h2>
      {pizzaLength > 0 ? (
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
      ) : (
        <p>We&#39;re still working on menu. Please come back later🙁☹️</p>
      )}
      {pizzaLength > 0 ? <AllList /> : <></>}
    </main>
  );
}
