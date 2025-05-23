import { Link } from 'react-router'
import { useForm, } from "react-hook-form"
import Error from "../components/Error";
import { isAxiosError } from "axios";
import api from "../config/axios";
import { toast } from 'sonner'
import { initialValuesLogin } from '../helpers/initialValues';
import type { ILoginUser } from '../types/IUser';
const Login = () => {
  const { register,
    handleSubmit,
    reset,
    formState: { errors } } = useForm({
      defaultValues: initialValuesLogin
    });


  const handleRegister = async (formData: ILoginUser) => {
    try {
      const { data } = await api.post('/auth/login', formData)
      const { token } = data
      localStorage.setItem("token", token)
      toast.success(data.msg)
      reset()
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        const { msg } = error.response.data
        toast.error(msg)
      }
    }
  }
  return (
    <div>
      <h1 className="text-white font-bold text-2xl ">
        Iniciar sesión
      </h1>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="bg-white text-black px-5 py-20 rounded-lg space-y-10 mt-10"
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },

            })}
          />
          {typeof errors.email?.message === 'string' && (
            <Error>
              {errors.email.message}
            </Error>
          )}

        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password", {
              required: "El password es obligatorio",
              minLength: {
                value: 8,
                message: "El password debe tener al menos 8 caracteres"
              }
            })}
          />
          {typeof errors.password?.message === 'string' && (
            <Error>
              {errors.password.message}
            </Error>
          )}
        </div>
        <input
          type="submit"
          className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
          value='Crear Cuenta'
        />
      </form>
      <div className='flex'>
        No tienes cuenta?
        <Link to={"/auth/register"} className="underline">
          Crea una aqui
        </Link>
      </div>
    </div>
  )
}

export default Login