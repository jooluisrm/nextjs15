import { Post } from "@/types/Posts";

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await res.json();

    return Response.json({ posts });
}

export async function POST(request: Request) {
    
}