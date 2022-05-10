import {Link} from "react-router-dom"
function LandingPageButton() {
    return <Link to="/" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                Login
            </span>
        </button>
    </Link>
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return <div style={style}>
        
        <div style={{"font-size": "96px"}}>
            Scrapmedia
        </div>
        
        <div style={{"font-size": "36px"}}>
        A recommendation system based on your social media activities.
        With Scrapmedia, you'll get better results!

        </div>
        <br />
        <LandingPageButton />
    </div>
}
function LandingFrame() {
    const style = {
        "background-image": `url("Images/imgonline-com-ua-Color-filter-VONA57QEJEc5.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}>
        <LandingFrameMessage />
    </div>
}
function HomePage() {
    return <div>
        <LandingFrame />
    </div>
}
export default HomePage