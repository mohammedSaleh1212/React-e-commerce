import useCartCounterStore from "./cartCounterStore";

const SlideCart = () => {
    const {items} = useCartCounterStore()
    return (

        <div className="container">
          <ul className="list">
            {items.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      );
}

export default SlideCart