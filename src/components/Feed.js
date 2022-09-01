import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import "./Feed.css";
import InputOption from './InputOption';
import Post from './Post';
import { useEffect, useState } from 'react';
import { collection, addDoc,orderBy, getDocs, serverTimestamp, query } from "firebase/firestore";
import { db } from '../firebase';

const Feed = () => {
    const [input,setInput] = useState('');
    const [posts,setPosts] = useState([]);

    useEffect(() =>{

        const getPostsFormFirebase = async () =>{
            const postsCollection = collection(db,'posts');
            //const postsSnapshot = await getDocs(postsCollection)
            //But I want them sorted...
            const postsSnapshot = await getDocs(query(postsCollection,orderBy('timestamp','desc')));
            const postsList = postsSnapshot.docs.map(doc => ({
                id : doc.id,
                data : doc.data()
            }));
            setPosts(postsList);
            return postsList;
        }

        getPostsFormFirebase();
    });

    const sendPost = async (e) =>{
        e.preventDefault();
        await addDoc(collection(db,'posts'),{
            name : "João Costeira",
            description : "this is a test",
            message : input,
            photoUrl : '',
            timestamp: serverTimestamp()
        })

        setInput('');

    }

    return(
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={ ({target}) => { setInput(target.value) }} type="text"/>
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
                {
                    posts.map(({ id , data : { name,description, message, photoUrl}}) =>(
                        <Post
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Feed;