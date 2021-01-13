import { NavLink } from "react-router-dom"

const Post = props => {
  const username = props.post.user.username
  return (
    <div className="card mx-auto my-5" style={{ width: "18rem" }}>
      <h5 className="card-header">{username ? username : "Anonymous"}</h5>
      <img src={props.post.post.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.post.post.title}</h5>
        <p className="card-text">{props.post.post.body}</p>
        <NavLink to="/" className="btn btn-primary">
          View Post
        </NavLink>
        {props.fromProfile ? (
          <NavLink to="/" className="btn btn-danger ml-2">
            Delete Post
          </NavLink>
        ) : null}
      </div>
    </div>
  )
}

export default Post
