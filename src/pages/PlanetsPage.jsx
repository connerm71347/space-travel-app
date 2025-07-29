import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import SpaceTravelApi from "../services/SpaceTravelApi";

const defaultShipImageUrl =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b9d3924-f6b5-4b74-8db6-8d11c761fcfc/djd7l1a-9db7a46f-5adc-4c98-b2c9-dc5ffbd43c3e.jpg/v1/fill/w_1192,h_670,q_75,strp/spaceship_by_rafagantner_djd7l1a-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjcwIiwicGF0aCI6IlwvZlwvOWI5ZDM5MjQtZjZiNS00Yjc0LThkYjYtOGQxMWM3NjFmY2ZjXC9kamQ3bDFhLTlkYjdhNDZmLTVhZGMtNGM5OC1iMmM5LWRjNWZmYmQ0M2MzZS5qcGciLCJ3aWR0aCI6Ijw9MTE5MiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.13b0Xb4bdM7GE6xCUoBKn8n7xZe9pZVbnQC44cP459o";

const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSpacecraftId, setSelectedSpacecraftId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const [planetsRes, craftsRes] = await Promise.all([
          SpaceTravelApi.getPlanets(),
          SpaceTravelApi.getSpacecrafts(),
        ]);

        if (planetsRes.isError) throw new Error("Failed to load planets");
        if (craftsRes.isError) throw new Error("Failed to load spacecrafts");

        setPlanets(planetsRes.data);
        setSpacecrafts(craftsRes.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Group spacecrafts by their currentLocation (planet id)
  const spacecraftsByPlanet = planets.reduce((acc, planet) => {
    acc[planet.id] = spacecrafts.filter(
      (craft) => craft.currentLocation === planet.id
    );
    return acc;
  }, {});

  const handlePlanetClick = async (planetId) => {
    if (!selectedSpacecraftId) return;

    const selectedCraft = spacecrafts.find(
      (craft) => craft.id === selectedSpacecraftId
    );

    if (!selectedCraft) return;

    if (selectedCraft.currentLocation === planetId) {
      alert("Ship is already on this planet!");
      return;
    }

    try {
      await SpaceTravelApi.sendSpacecraftToPlanet({
        spacecraftId: selectedSpacecraftId,
        targetPlanetId: planetId,
      });

      // Update local state for UI update
      setSpacecrafts((prev) =>
        prev.map((craft) =>
          craft.id === selectedSpacecraftId
            ? { ...craft, currentLocation: planetId }
            : craft
        )
      );

      setSelectedSpacecraftId(null);
    } catch (err) {
      alert(err.message || "Failed to send spacecraft");
    }
  };

  if (loading) return <Loader />;
  if (error) return <p className="error">{error}</p>;

  return (
    <div
      className="planets-page"
      style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}
    >
      {planets.map((planet) => (
        <div
          key={planet.id}
          className="planet-card"
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            borderRadius: "8px",
            width: "250px",
          }}
        >
          <h2>{planet.name}</h2>
          <img
            src={planet.pictureUrl}
            alt={planet.name}
            className="planet-img"
            style={{
              width: "100%",
              cursor: selectedSpacecraftId ? "pointer" : "default",
              borderRadius: "8px",
            }}
            onClick={() => handlePlanetClick(planet.id)}
            title={
              selectedSpacecraftId ? "Click to send selected ship here" : ""
            }
          />
          <div
            className="spacecrafts-on-planet"
            style={{
              marginTop: "1rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              justifyContent: "center",
            }}
          >
            {spacecraftsByPlanet[planet.id]?.length ? (
              spacecraftsByPlanet[planet.id].map((craft) => (
                <img
                  key={craft.id}
                  src={craft.pictureUrl || defaultShipImageUrl}
                  alt={craft.name}
                  className={`spacecraft-img ${
                    selectedSpacecraftId === craft.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSpacecraftId(craft.id)}
                  style={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    cursor: "pointer",
                    border:
                      selectedSpacecraftId === craft.id
                        ? "3px solid blue"
                        : "2px solid transparent",
                    borderRadius: "8px",
                  }}
                  title={`Select ship: ${craft.name}`}
                />
              ))
            ) : (
              <p style={{ fontStyle: "italic" }}>No ships here</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanetsPage;
