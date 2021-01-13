import Post from "./Post"

const Posts = props => {
  if (props.posts === null) return <h1>Loading...</h1>
  else if (props.posts.length === 0)
    return (
      <div className="container">
        <h2 className="mx-auto mt-5">There is no posts yet</h2>
      </div>
    )
  else
    return (
      <>
        {props.posts.map(post => {
          return (
            <Post
              key={post.post.id}
              post={post}
              fromProfile={props.fromProfile}
            />
          )
        })}
      </>
    )
}

export default Posts
