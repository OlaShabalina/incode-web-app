import Button from '../../common/components/Button'

function LoginForm() {
  return (
    <div className="LoginForm">
      <h1>Login</h1>
      <div className="LoginContent">
        <form className="FormContent">
          <label htmlFor="username">Username</label>
          <input name="username" />
          <label htmlFor="password">Password</label>
          <input name="password" />
          <Button name="Login" />
          <div className="Links">
            <a href="#">Sign Up</a>
            <span> | </span>
            <a href="#">Forgot password</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm