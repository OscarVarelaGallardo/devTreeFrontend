import type { IRegisterUser } from "../types/IUser"
import type { ILoginUser } from '../types/IUser'
export const initialValuesRegister: IRegisterUser = {
    name: '',
    email: '',
    handle: '',
    password: '',
    password_confirmation: ''
}
export const initialValuesLogin: ILoginUser = {
    email: '',
    password: ''

}