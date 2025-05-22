type ErrorProps = {
    //Permite string
    children: React.ReactNode
}

const Error = ({ children }: ErrorProps) => {
    return (
        <div className="bg-red-500 border rounded-md flex  justify-center p-2">
            <p className="text-white">{children}</p>
        </div>
    )
}

export default Error