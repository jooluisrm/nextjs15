import { getPosts } from "@/actions/get-posts";
import { Post } from "@/types/Posts";

export const Posts = async () => {

    const posts = await getPosts();

    return (
        <ul>
            {posts.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}