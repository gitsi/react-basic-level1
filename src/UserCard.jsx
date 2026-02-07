export default function UserCard({ user, promoteUser }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: 10,
        marginBottom: 10
      }}
    >
      <h3>{user.name}</h3>
      <p>{user.role}</p>

      <button onClick={() => promoteUser(user.id)}>
        Promote
      </button>
    </div>
  );
}
