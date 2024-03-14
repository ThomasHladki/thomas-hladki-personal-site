import "./App.css";
import gitHubLogo from "../content/github.png";
import linkedinLogo from "../content/linkedin.png";
import emailLogo from "../content/email.png";



const Title = ({ name, headshotImgSrc, gitLink, linkedinLink, emailAddress}) => {
    return (
        <div className="bg-stone-800 w-1/2 flex flex-col justify-center rounded-3xl h-96 m-10 p-16 z-10 shadow-outline border-8 border-zinc-950">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl font-bold underline text-gray-50 text-outline mb-8">
                    {name}
                </h1>
                <img src={headshotImgSrc} alt="headshot" className="text-sm max-h-36 max-w-36 rounded-full"></img>
            </div>
            <div className="flex flex-auto">
                  <img src={gitHubLogo} className="h-auto w-auto max-h-10 max-w-10" alt=""></img>
                  <img src={linkedinLogo} className="h-auto w-auto max-h-10 max-w-10" alt=""></img>
                  <img src={emailLogo} className="h-auto w-auto max-h-10 max-w-10" alt=""></img>
            </div>


            
        </div>
    );
}

export default Title;