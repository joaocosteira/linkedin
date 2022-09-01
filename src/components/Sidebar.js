import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Sidebar.css"

const RecentItem = ({topic}) => (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
)

const Sidebar = () => {

    const user = useSelector(selectUser);
    
    const topics = ['reactjs','programming','softwareengineering','design','developer'];

    console.log(user.profileUrl);

    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="/cover.jpeg" alt="sidevar cover"/>
                <Avatar src={user?.photoUrl} className="sidebar__avatar">
                    {user?.displayName[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
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