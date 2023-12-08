import List from "./List";
import { PizzaData } from "./Data";

export default function AllList() {
  const pizzaObj = PizzaData;
  return (
    <ul className="pizzas">
      {pizzaObj.map((obj) => (
        <List data={obj} key={obj.name} />
      ))}
    </ul>
  );
}
