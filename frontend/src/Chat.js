import React,{useEffect,useState} from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert,SearchOutlined } from '@material-ui/icons';
import  InsertEmoticonIcon  from '@material-ui/icons/InsertEmoticon';
import  MicIcon  from '@material-ui/icons/Mic';

function Chat() {
    const [seed,setseed]=useState(" ");
    const [input,setinput]=useState("");
    useEffect(()=>{
        setseed(Math.floor(Math.random()*5000));
    },[]);

    
    const sendMessage = (e) => {
        e.preventDefault();
        
        console.log("you typed:",input);
        setinput("");
    }
    return (
        <div className="chat">
           <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} ></Avatar>
                <div className="chat__headerInfo">
                    <h3>Roomm name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <AttachFile></AttachFile>
                    </IconButton>
                    <IconButton>
                        <MoreVert></MoreVert>
                    </IconButton>
                    <IconButton>
                        <SearchOutlined></SearchOutlined>
                    </IconButton>
                </div>
           </div> 
           <div className="chat__body">
                <p className="chat__message chat__reciever"> <span className="chat__name">Yash Yadao</span> Hey Guys <span className="chat__timestamp">3:37</span></p>
           </div>
           <div className="chat__footer">
               <InsertEmoticonIcon></InsertEmoticonIcon> 
               <form>
                    <input value={input} onChange={(e) => setinput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button type="submit" onClick={sendMessage}> Send a Message</button>
                </form>
                <MicIcon></MicIcon>
           </div>
        </div>
    )
}

export default Chat
