import Passwords from '../Passwords'
import './index.css'

const DisplayPassword = props => {
  const {
    passworddetails,
    handleDelete,
    togglePassword,
    showpassword,
    searchPassword,
    searchresult,
  } = props
  const showPassword = () => {
    togglePassword()
  }
  const searchPasswordDetaails = event => {
    searchPassword(event)
  }

  return (
    <div className="second-cont">
      <div className="s-cont1">
        <div className="s-para-cont">
          <h1 className="s-head">Your Passwords</h1>
          <p className="s-para">{passworddetails.length}</p>
        </div>
        <div className="s-input-cont">
          <div className="s-img-cont">
            <img
              className="search-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
            />
          </div>
          <input
            type="search"
            name="search"
            value={searchresult}
            onChange={searchPasswordDetaails}
          />
        </div>
      </div>
      <div className="checkbox-cont">
        <input
          className="checkbox"
          onChange={showPassword}
          type="checkbox"
          id="password"
        />
        <label className="label-text" htmlFor="password">
          Show Passwords
        </label>
      </div>

      {passworddetails.length >= 1 ? (
        <ul className="passlist-cont">
          {passworddetails.map(each => (
            <Passwords
              passworddetail={each}
              key={each.id}
              onDelete={handleDelete}
              showpassword={showpassword}
            />
          ))}
        </ul>
      ) : (
        <div className="nopass-cont">
          <img
            className="nopass-img"
            alt="no passwords"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          />
          <p className="nopass-text">No Passwords</p>
        </div>
      )}
    </div>
  )
}

export default DisplayPassword
