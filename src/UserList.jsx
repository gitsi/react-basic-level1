import UserCard from "./UserCard";

export default function UserList({ users, promoteUser }) {
  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          promoteUser={promoteUser}
        />
      ))}
    </div>
  );
}
