import { Link } from "react-router"
import { useForm, } from "react-hook-form"
import type { IRegisterUser } from '../types/IUser'
import Error from "../components/Error";
import  { isAxiosError } from "axios";
import api from "../config/axios";
import { toast } from 'sonner'
import { initialValues } from "../helpers/initialValues";
const Register = () => {
  const { register,
    handleSubmit,
    watch,
    reset,
    formState: { errors } } = useForm({
      defaultValues: initialValues

    });

  const password = watch('password')

  const handleRegister = async (formData: IRegisterUser) => {
    try {
      const { data } = await api.post('/auth/register', formData)
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
    <>
      <nav>
        <h1 className="text-white font-bold text-2xl ">
          Crear Cuenta
        </h1>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="bg-white text-black px-5 py-20 rounded-lg space-y-10 mt-10"
        >
          <div className="grid grid-cols-1 space-y-3">
            <label htmlFor="name" className="text-2xl text-slate-500">Nombre</label>
            <input
              id="name"
              type="text"
              placeholder="Tu Nombre"
              className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
              {...register("name", {
                required: "El nombre es obligatorio"
              })}
            />
            {typeof errors.name?.message === 'string' && (
              <Error>
                {errors.name.message}
              </Error>
            )}
          </div>
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
            <label htmlFor="handle" className="text-2xl text-slate-500">Handle</label>
            <input
              id="handle"
              type="text"
              placeholder="Nombre de usuario: sin espacios"
              className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
              {...register("handle", {
                required: "El handle es obligatorio"
              })}
            />
            {typeof errors.handle?.message === 'string' && (
              <Error>
                {errors.handle.message}
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

          <div className="grid grid-cols-1 space-y-3">
            <label htmlFor="password_confirmation" className="text-2xl text-slate-500">Repetir Password</label>
            <input
              id="password"
              type="password"
              placeholder="Repetir Password"
              className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
              {...register("password_confirmation", {
                required: "El password confirmacion es obligatorio",
                validate: (value) => value == password || 'Los passwords no son iguales'
              })}
            />
            {typeof errors.password_confirmation?.message === 'string' && (
              <Error>
                {errors.password_confirmation.message}
              </Error>
            )}
          </div>

          <input
            type="submit"
            className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
            value='Crear Cuenta'
          />

          <Link to={"/auth/login"}
            className="text-black 
            justify-center
            flex
          ">
            Inicia sesion
          </Link>
        </form>

      </nav>
    </>
  )
}

export default Register