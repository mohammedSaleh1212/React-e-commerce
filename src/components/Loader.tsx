
const Loader = () => {
    return (

        <div className="loading-wrapper d-flex justify-content-center gap-2">

        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <p className='text-primary'>loading...</p>

        </div>
    )
}

export default Loader