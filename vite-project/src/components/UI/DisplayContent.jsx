export default function DisplayContent(props) {
  return (
    <>
      <div>
        <h1>FoodCategory</h1>
        <ul>
          {props.FoodArr.map((item) => {
            return (
              <li key={Math.random()}>
                `${item.price}-{item.category}-{item.name}`
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h1>SkinCare</h1>
        <ul>
          {props.SkinCareArr.map((item) => {
            return (
              <li key={Math.random()}>
                `${item.price}-{item.category}-{item.name}`
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h1>Electronics</h1>
        <ul>
          {props.ElectronicsArr.map((item) => {
            return (
              <li key={Math.random()}>
                `${item.price}-{item.category}-{item.name}`
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
