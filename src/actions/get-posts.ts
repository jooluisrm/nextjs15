"use server"

import { Post } from "@/types/Posts";

export const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await res.json();
    
    return posts;
}