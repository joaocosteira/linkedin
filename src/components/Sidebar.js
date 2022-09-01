import { Avatar } from "@mui/material";
import "./Sidebar.css"

const RecentItem = ({topic}) => (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
)

const Sidebar = () => {

    
    const topics = ['reactjs','programming','softwareengineering','design','developer'];

    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="/cover.jpeg" alt="sidevar cover"/>
                <Avatar className="sidebar__avatar"/>
                <h2>João Costeira</h2>
                <h4>costeira@costeira.com</h4>
            </div>  
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">1,123</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">1,124</p>                    
                </div>
            </div>  

            <div className="sidebar__bottom">
                <p>Recent</p>
                {topics.map(topic => <RecentItem key={topic} topic={topic} />)}
            </div>
        </div>
    )
}

export default Sidebar;