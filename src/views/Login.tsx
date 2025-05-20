import { Link } from 'react-router'
const Login = () => {

  return (
    <div>
      <p>Login</p>
      <Link to={"/auth/register"}>
        No tienes cuenta? Crea una aqui
      </Link>
    </div>
  )
}

export default Login