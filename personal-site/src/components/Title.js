import "./App.css";

const Title = ({ name, headshotImgSrc, }) => {
    return (
        <div className="bg-stone-800 w-1/2 flex justify-center rounded-3xl h-96 m-10 p-16 z-10 shadow-outline">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl font-bold underline text-gray-50 text-outline mb-8">
                    {name}
                </h1>
                <img src={headshotImgSrc} alt="headshot" className="text-sm max-h-36 max-w-36 rounded-full"></img>
            </div>
            <div>
                
            </div>


            
        </div>
    );
}

export default Title;