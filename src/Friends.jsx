import { use } from 'react';
import Friend from './Friend';

export default function Friends({ friendsPromise }) {
  // unwrap the promise; `use` will suspend the component until it resolves.
  const friends = use(friendsPromise);

  return (
    <div className="card">
      <p>from friends component</p>
      {friends.map(friend => (
        <Friend key={friend.id} singleFriend={friend} />
      ))}
    </div>
  );
}