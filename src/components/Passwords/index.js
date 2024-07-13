import './index.css'

const Passwords = props => {
  const {passworddetail, onDelete, showpassword} = props
  const {id, email, name, password, bgColor} = passworddetail
  const firstLetter = email[0].toUpperCase()
  const style = {backgroundColor: bgColor}
  const DeletePassword = () => {
    onDelete(id)
  }
  return (
    <li>
      <div className="f-p-c">
        <p className="firstLetter" style={style}>
          {firstLetter}
        </p>
        <div className="passworddetails-cont">
          <p className="email-para">{email}</p>
          <p className="name-para">{name}</p>
          {showpassword ? (
            <p className="pass-para">{password}</p>
          ) : (
            <img
              className="star-img"
              alt="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            />
          )}
        </div>
      </div>
      <div className="delete-cont">
        <button
          aria-label="Delete password"
          onClick={DeletePassword}
          className="delete-btn"
          data-testid="delete"
        >
          <img
            className="delete-img"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default Passwords
