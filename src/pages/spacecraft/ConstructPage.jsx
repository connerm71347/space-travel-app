import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import SpaceTravelApi from "../../services/SpaceTravelApi";
import ErrorMessage from "../../components/ErrorMessage";

const Construct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    capacity: "",
    pictureUrl: "",
  });

  const [error, setError] = useState(null);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((f) => ({ ...f, [name]: value }));
    console.log("Form field changed:", name, value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    setError(null);

    try {
      const newCraft = await SpaceTravelApi.buildSpacecraft(formData);
      navigate("/spacecraft");
    } catch (err) {
      setError(<ErrorMessage />);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="build-form">
      <h2>Build Your Own Spaceship</h2>

      <label htmlFor="name">Name:</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="capacity">Capacity:</label>
      <input
        name="capacity"
        type="number"
        value={formData.capacity}
        onChange={handleChange}
        required
      />
      <label htmlFor="description">Description</label>
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label htmlFor="pictureUrl">Image URL (optional):</label>
      <input
        name="pictureUrl"
        value={formData.pictureUrl}
        onChange={handleChange}
      />

      <button type="submit">Launch Ship 🚀</button>

      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Construct;
