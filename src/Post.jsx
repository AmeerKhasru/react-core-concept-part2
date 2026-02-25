export default function Post({singlePost}) {
    const { title, body } = singlePost;
    return (
        <div className="card" style={{ border: '1px solid #ccc', margin: '5px' }}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
}   