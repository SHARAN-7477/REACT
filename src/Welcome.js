import { Counter } from "./Counter";

function Welcome({ name, pic }) {
  return (
    <div>
      <img
        className="profile-pic"
        style={{ backgroundColor: "red", fontSize: "24px" }}
        src={pic}
        alt={name} />
      <h1>Hello {name} 🥳🥳</h1>
      <Counter />
    </div>
  );
}
