import ReactLoading from "react-loading"

const Loading = () => {
    return (
        <div className="container mx-auto flex justify-center items-center">
            <ReactLoading
                type="spin"
            />
        </div>
    )
}

export default Loading