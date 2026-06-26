import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    navigate("/success", {
      state: form,
    });
  };

  return (
    <form onSubmit={submit}>
      <input name="name" placeholder="Name" onChange={handleChange} />

      <br />

      <input name="email" placeholder="Email" onChange={handleChange} />

      <br />

      <input name="mobile" placeholder="Mobile" onChange={handleChange} />

      <br />

      <button>Submit</button>
    </form>
  );
}

export default BookingForm;
