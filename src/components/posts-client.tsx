"use client"

import { getPosts } from "@/actions/get-posts";
import { Post } from "@/types/Posts";
import { useEffect, useState } from "react";

export const PostsClient = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loding, setLoading] = useState(false);


    const loadPosts = async () => {
        setLoading(true);
        const data = await getPosts();
        setPosts(data);
        setLoading(false);
    }


    return (
        <>
            <button onClick={loadPosts}>Carregar posts</button>
            <ul>
                {posts.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>

    );
}