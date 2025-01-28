const PostCard = ({ data }) => {
  const { title, content, image } = data;

  return (
    <div className="post-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default PostCard