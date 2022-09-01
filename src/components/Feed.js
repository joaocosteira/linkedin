import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import "./Feed.css";
import InputOption from './InputOption';
import Post from './Post';
import { useState } from 'react';

const Feed = () => {

    const [posts,setPosts] = useState([]);

    const sendPost=(e) =>{
        e.preventDefault();
    }

    
    return(
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOption
                        title='Photo'
                        Icon={ImageIcon}
                        color="#70B5F9"
                    />
                    <InputOption
                        title='Video'
                        Icon={SubscriptionsIcon}
                        color="#E7A33E"
                    />
                    <InputOption
                        title='Event'
                        Icon={EventNoteIcon}
                        color="#C0CBCD"
                    />
                    <InputOption
                        title='Write Article'
                        Icon={CalendarViewDayIcon}
                        color="#7FC15E"
                    />
                </div>
            </div>

            <div className='posts'>
                <Post
                    name="João Costeira"
                    description="This is a test"
                    message="Anim fugiat aliquip enim in minim quis reprehenderit reprehenderit deserunt elit. Voluptate nulla fugiat dolor ea sit sit consequat labore proident cillum magna mollit. Eiusmod enim minim voluptate exercitation anim magna do et cillum ullamco eu ut. Eiusmod eu ullamco ex tempor officia cupidatat aliqua ex nulla."

                />
            </div>
        </div>
    )
}

export default Feed;