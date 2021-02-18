export default function Placeholder({ childId }) {
  console.log(childId);

  return (
    <div>
      <h1>Placeholder</h1>
      <p>childId: {childId}</p>
    </div>
  );
}
