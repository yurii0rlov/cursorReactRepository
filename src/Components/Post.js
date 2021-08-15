import React from 'react';


const Post = (props) => {
    console.log(props.author.name);
    return(
        <section>
            <div className = "author">
                <img className = "avatar" src={props.author.photo}></img>
                <div className = "authorText">
                    <div className = "authorHeader">
                        <p className = "authorName">{props.author.name}</p>
                        <svg className = "verfied" width = '20' height = '20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs/><path fill="#1da1f2" d="M512 268a99 99 0 01-47 85v13c0 27-9 50-27 69a87 87 0 01-98 22c-8 16-19 30-35 40a86 86 0 01-49 15c-18 0-35-5-50-15a97 97 0 01-34-40c-10 4-21 6-33 6-25 0-47-9-65-28a96 96 0 01-27-82c-14-8-26-20-34-35-9-16-13-32-13-50 0-19 5-37 14-52s23-28 39-35A99 99 0 0174 77a88 88 0 0198-22c8-17 19-30 35-40a87 87 0 0199 0c14 10 26 23 34 40a87 87 0 0198 22c18 19 27 42 27 69 0 13-2 24-6 34 16 8 29 20 39 36 9 15 14 33 14 52zm-267 77l106-158c3-4 3-9 2-14s-3-9-7-11c-4-3-9-4-14-3s-9 3-12 7l-93 140-43-43c-4-3-8-5-13-5s-9 2-13 5c-4 4-5 8-5 13s1 10 5 13l59 59 3 2c3 3 7 4 10 4 7 0 12-3 15-9z"/></svg>
                        <p className = "nickname">{props.author.nickname} · </p>
                        <p className = "date">{props.date}</p>
                    </div>
                    <p className = "postText">
                     {props.content}   
            </p>
                </div>
                <svg className = 'downArrow' xmlns="http://www.w3.org/2000/svg" width = "15" height = "15" viewBox="0 0 330 330"><defs/><path d="M325.6 79.4a15 15 0 00-21.2 0L165 218.8 25.6 79.4a15 15 0 00-21.2 21.2l150 150a15 15 0 0021.2 0l150-150a15 15 0 000-21.2z"/></svg>
            </div>
            <img src = {props.image} className = "postImage"></img>
            <div className = "communityStats">
                <div className = "comments">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Group 870" width = "24" height = "24" viewBox="0 0 17.2 17.2"><defs/><path d="M10.5 0H6.8A6.8 6.8 0 000 6.8a6.5 6.5 0 006.5 6.5v3.3a.5.5 0 00.1.4.7.7 0 00.6.2.5.5 0 00.4-.1 84 84 0 007-4.8 7.2 7.2 0 002.6-5.5A6.8 6.8 0 0010.5 0zm3.3 11.3c-1 .8-4.3 2.9-6 4v-2.7a.6.6 0 00-.6-.7h-.4a5 5 0 01-5.5-5.1 5.4 5.4 0 015.5-5.5h3.5A5.4 5.4 0 0116 6.8a5.9 5.9 0 01-2.1 4.5z" data-name="Path 651"/></svg>
                <p>482</p>
                </div>
                <div className = "repost">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Group 871" width = "24" height = "24" viewBox="0 0 22.6 15.4"><defs/><path d="M22.5 10.6a.6.6 0 00-1 0l-2.2 2.3V3.3A3.3 3.3 0 0016 0H10a.6.6 0 00-.6.7.6.6 0 00.6.6H16a2 2 0 012 2V13l-2.3-2.3a.7.7 0 00-1 1l3.4 3.2a.5.5 0 00.4.2 1.3 1.3 0 00.4-.2l3.3-3.3c.5-.2.5-.6.3-.9z" data-name="Path 653"/><path d="M12.4 14H6.6a2 2 0 01-2-2V2.4l2.2 2.3a.5.5 0 00.4.1l.4-.1a.6.6 0 000-1L4.4.4a.6.6 0 00-.9 0L.2 3.7a.7.7 0 001 1l2.2-2.3V12a3.3 3.3 0 003.3 3.3h5.7a.6.6 0 00.7-.7.7.7 0 00-.7-.8z" data-name="Path 654"/></svg>
                    <p>146</p>
                </div>
                <div className = "likes">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Group 869" width = "24" height = "24" viewBox="0 0 17.8 16.6"><defs/><path d="M8.7 16.6C6.5 16.6 0 10.6 0 5a5 5 0 014.8-5 5.2 5.2 0 014 2.4A5 5 0 0113 0a5 5 0 014.8 5c-.3 5.6-6.8 11.4-9 11.6zm-4-15.3A3.7 3.7 0 001.1 5c0 5 6 10.1 7.4 10.2C10 15.2 16 10.1 16 5a3.7 3.7 0 00-3.4-3.7C10.3 1.3 9 3.8 9 4c-.2.5-1 .5-1.2 0a3.8 3.8 0 00-3.3-2.7z" data-name="Path 650"/></svg>
                    <p>887</p>
                </div>
                <div className = "share">
                <svg xmlns="http://www.w3.org/2000/svg" width = "24" height = "24" viewBox="0 0 512 512"><defs/><path d="M182.5 155.5l49.5-49.6V368a24 24 0 0048 0V106l49.5 49.5a24 24 0 1034-34L273 31a24 24 0 00-34 0l-90.5 90.5a24 24 0 1034 34z"/><path d="M464 232a24 24 0 00-24 24v184H72V256a24 24 0 00-48 0v192a40 40 0 0040 40h384a40 40 0 0040-40V256a24 24 0 00-24-24z"/></svg>
                </div>
            </div>
        </section>
    )
}



export default Post;