import {Link} from "react-router-dom"


function LandingMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return <div style={style}>
        
        <div style={{"font-size": "97px"}}>
            Scrapmedia
        </div>
        
        <div style={{"font-size": "37px"}}>
        A recommendation system based on your social media activities.
        With Scrapmedia, you'll get better results!

        </div>
        <br />
        <LandingPageButton />
    </div>
}


function LandingPageButton() {
    return <Link to="/homepage" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                Login
            </span>
        </button>
    </Link>
}

function LandingPage() {
    const styleLandinPage = {
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-image": `url("Images/imgonline-com-ua-Color-filter-VONA57QEJEc5.jpg")`,
       
        position: "absolute",
       
        width: "100%",
        height: "100%"
    }
    return <div style={styleLandinPage}>
        <LandingMessage />
    </div>
}
function HomePage() {
    return <div>
        <LandingPage />
    </div>
}
export default HomePage