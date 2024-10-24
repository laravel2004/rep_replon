const PumpStatus = ({ pumpStatus, title }) => {
  return (
    <div className="text-center">
      <h2 className="font-semibold">{title}</h2>
      <p>{pumpStatus}</p>
    </div>
  );
}

export default PumpStatus;