import { Posts } from "@/components/posts";
import { PostsClient } from "@/components/posts-client";
import { Metadata } from "next";
import Link from "next/link";


const Page = () => {
    return (
        <div>
            <h1>Pagina inicial</h1>

            <PostsClient />

            <Link href={"/tela1"}>Ir para tela 1</Link>
        </div>
    );
}


export default Page;