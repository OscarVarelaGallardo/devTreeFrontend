import { Outlet } from "react-router"
import { Toaster } from "sonner"

const AuthLayout = () => {
  return (
    <>
      <div className="bg-slate-800 min-h-screen" >
        <div className="max-w-lg mx-auto pt-10 px-5">
          <img src="/logo.svg" alt="logo" />

          <div className="py-10">
            <h1 className="text-white">
              <Outlet />
            </h1>
          </div>
          <Toaster />
        </div>
      </div>
    </>
  )
}

export default AuthLayout