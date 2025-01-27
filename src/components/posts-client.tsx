"use client"

import { Post } from "@/types/Posts";
import { useEffect, useState } from "react";

export const PostsClient = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loding, setLoading] = useState(false);


    const getPosts = async () => {
        setLoading(true);
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await res.json();
        setPosts(data);
        setLoading(false);
    }


    return (
        <>
            <button onClick={getPosts}>Carregar posts</button>
            <ul>
                {posts.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>

    );
}