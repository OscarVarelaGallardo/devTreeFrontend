import { Link } from "react-router"

const Register = () => {
  return (
    <>
    
      <nav>
        <Link to={"/auth/login"}>
          Inicia sesion
        </Link>
      </nav>
    </>
  )
}

export default Register