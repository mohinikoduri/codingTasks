export default function TotalPrice(prop) {
  return (
    <div>
      <h2 style={{ visibility: prop.visibility }}>
        Total Price {prop.totalPrice}
      </h2>
    </div>
  );
}
