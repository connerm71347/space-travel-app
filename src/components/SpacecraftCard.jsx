import { Link } from "react-router-dom";

const SpacecraftCard = ({ craft, onDestroy }) => {
  return (
    <div className="spacecraft-card">
      <img
        src={
          craft.pictureUrl ||
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b9d3924-f6b5-4b74-8db6-8d11c761fcfc/djd7l1a-9db7a46f-5adc-4c98-b2c9-dc5ffbd43c3e.jpg/v1/fill/w_1192,h_670,q_75,strp/spaceship_by_rafagantner_djd7l1a-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjcwIiwicGF0aCI6IlwvZlwvOWI5ZDM5MjQtZjZiNS00Yjc0LThkYjYtOGQxMWM3NjFmY2ZjXC9kamQ3bDFhLTlkYjdhNDZmLTVhZGMtNGM5OC1iMmM5LWRjNWZmYmQ0M2MzZS5qcGciLCJ3aWR0aCI6Ijw9MTE5MiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.13b0Xb4bdM7GE6xCUoBKn8n7xZe9pZVbnQC44cP459o"
        }
        alt={craft.name}
        className="spacecraft-img"
      />
      <div className="spacecraft-card-body">
        <button onClick={() => onDestroy(craft.id)} className="destroy-button">
          💥 Destroy
        </button>

        <h2>{craft.name}</h2>
        <Link to={`/spacecraft/${craft.id}`} className="view-link">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SpacecraftCard;
