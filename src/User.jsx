import { use } from "react";

export default function User({ fetchUser }) {
    const user = use(fetchUser);

    return (
        <div className="card">
            {/* যেহেতু একটি ইউজার, তাই user.name বা অন্য প্রপার্টি দেখান */}
            <h3>User Name: {user.name}</h3>
            <p>Email: {user.email}</p>
        </div>
    );
}