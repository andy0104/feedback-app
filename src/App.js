function App() {
  const title = 'Blog Post';
  const body = 'This is my blog post!';
  const comments = [
    { id: 1, body: 'This is comment 1' },
    { id: 2, body: 'This is comment 2' },
    { id: 3, body: 'This is comment 3' }
  ]

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>
      <div className="comments">
        <ul>
          {
            comments.map((comment, index) => (<li key={index}>{comment.body}</li>))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;