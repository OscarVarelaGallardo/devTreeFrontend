export type IUser = {
    handle: string
    name: string
    email: string
}

export type IRegisterUser =
    Pick<IUser, 'handle' | 'name' | 'email'> &
    {
        password: string
        password_confirmation: string
    }

export type ILoginUser =
    Pick<IUser, 'email'> &
    {
        password: string
    }