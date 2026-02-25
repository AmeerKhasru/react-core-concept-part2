
export default function Friend({ singleFriend }) {

    const { name, email, phone } = singleFriend;
    return (
        <div className="card" style={{ border: '1px solid #ccc', margin: '5px' }}>
            <p>Friend Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        
        </div>
    );
}