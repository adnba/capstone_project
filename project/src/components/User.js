const User = props => {
  if (props.user === null) return null
  const username = props.user.username
  return (
    <div
      className="card mb-3 text-center mx-auto mt-2"
      style={{ maxWidth: 540 }}
    >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={props.user.image} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{username ? username : "Anonymous"}</h5>
            <p className="card-text">
              <small className="text-muted">email: {props.user.email}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
