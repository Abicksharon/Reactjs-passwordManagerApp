import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import DisplayPassword from '../DisplayPassword'

class Addpassword extends Component {
  state = {
    formData: {id: '', email: '', name: '', password: '', bgColor: ''},
    passworddetails: [],
    showpassword: false,
    searchresult: '',
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }))
  }

  backgroundColor = () => {
    const colors = [
      '#7683cb',
      '#f59e0b',
      '#10b981',
      '#f97316',
      '#14b8a6',
      '#b91c1c',
      '#0ea5e9',
      '#64748b',
    ]
    const randomindex = Math.floor(Math.random() * colors.length)
    return colors[randomindex]
  }

  handleSubmit = event => {
    event.preventDefault()

    const {formData} = this.state
    const {email, name, password} = formData
    if (email.length > 0 && name.length > 0 && password.length > 0) {
      const newFormData = {
        ...formData,
        id: uuidv4(),
        bgColor: this.backgroundColor(),
      }

      this.setState(prevState => ({
        passworddetails: [...prevState.passworddetails, newFormData],
        formData: {id: '', email: '', name: '', password: ''},
      }))
    }
  }

  handleDelete = id => {
    const {passworddetails} = this.state
    const filteredDetails = passworddetails.filter(each => each.id !== id)
    this.setState({passworddetails: filteredDetails})
  }

  togglePassword = () => {
    this.setState(prevstate => ({
      showpassword: !prevstate.showpassword,
    }))
  }

  searchPassword = event => {
    const search = event.target.value

    this.setState({searchresult: search})
  }

  render() {
    const {formData, showpassword, passworddetails, searchresult} = this.state

    console.log(JSON.stringify(passworddetails))

    const filteredDetails = passworddetails.filter(each =>
      each.email.toLowerCase().includes(searchresult.toLowerCase()),
    )
    return (
      <div className="cont1">
        <div className="cont2">
          <img
            className="logo-img"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          />
          <div className="cont3">
            <form className="cont4" onSubmit={this.handleSubmit}>
              <h1 className="addpass-head">Add New Password</h1>
              <div className="input-container">
                <img
                  className="website-img"
                  alt="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                />

                <input
                  name="email"
                  value={formData.email}
                  type="input"
                  placeholder="Enter Website"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-container">
                <img
                  className="website-img"
                  alt="username"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                />

                <input
                  type="input"
                  name="name"
                  value={formData.name}
                  placeholder="Enter Username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-container">
                <img
                  className="website-img"
                  alt="password"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Enter Password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="btn-cont">
                <button type="submit" className="btn1">
                  Add
                </button>
              </div>
            </form>

            <img
              className="pass-manager-img portrait-display"
              alt="password manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            />
          </div>
          <DisplayPassword
            passworddetails={filteredDetails}
            handleDelete={this.handleDelete}
            togglePassword={this.togglePassword}
            showpassword={showpassword}
            searchPassword={this.searchPassword}
            searchresult={searchresult}
          />
        </div>
      </div>
    )
  }
}
export default Addpassword
