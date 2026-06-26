import { useLocation } from "react-router-dom";

function Success() {
  const { state } = useLocation();

  const bookingId = Math.floor(Math.random() * 100000);

  return (
    <div>
      <h1>Seat Booked Successfully</h1>

      <h2>Booking ID : {bookingId}</h2>

      <p>Name : {state.name}</p>

      <p>Email : {state.email}</p>

      <p>Mobile : {state.mobile}</p>
    </div>
  );
}

export default Success;
