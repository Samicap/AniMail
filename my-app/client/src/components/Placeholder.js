export default function Placeholder({ childId }) {
  console.log(childId);

  return (
    <div>
      <h1>Message sent!</h1>
      <p>childId: {childId}</p>
    </div>
  );
}
