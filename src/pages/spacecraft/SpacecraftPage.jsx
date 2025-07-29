import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import SpaceTravelApi from "../../services/SpaceTravelApi";
import ErrorMessage from "../../components/ErrorMessage";
import SpacecraftCard from "../../components/SpacecraftCard";

const Spacecrafts = () => {
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("Spacecrafts currently in state", spacecrafts);

  useEffect(() => {
    async function fetchSpaceCrafts() {
      setLoading(true);
      setError(null);
      try {
        const response = await SpaceTravelApi.getSpacecrafts();
        if (response.isError) {
          throw new Error("ughhh chewy wheres the ship?");
        }
        setSpacecrafts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchSpaceCrafts();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;

  function handleDelete(id) {
    SpaceTravelApi.destroySpacecraftById({ id })
      .then(() => {
        setSpacecrafts((prev) => prev.filter((craft) => craft.id !== id));
      })
      .catch((err) => {
        setError(<ErrorMessage />);
      });
  }
  return (
    <div className="spacecraft-page">
      {spacecrafts.map((craft) => (
        <SpacecraftCard key={craft.id} craft={craft} onDestroy={handleDelete} />
      ))}
    </div>
  );
};

export default Spacecrafts;
