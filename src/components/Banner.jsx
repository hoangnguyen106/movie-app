const Banner = () => {
    return (
        <div className="w-full h-[700px] bg-banner bg-no-repeat bg-cover relative">
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30"></div>
            <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
                <div>
                    <p className="text-white bg-gradient-to-r from-red-600 to-white py-1 px-3">TV Shows</p>
                </div>
                <div>Image</div>
            </div>
        </div>
    )
}

export default Banner
