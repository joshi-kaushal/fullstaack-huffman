export default function Comments({ comments }: any) {
  return (
    <div>
      <h2>Comments</h2>

      {comments.length >= 1 &&
        comments.map((comment: any) => (
          <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
        ))}
    </div>
  );
}
