import { receberDados } from "@/actions/receberDados";
import { Posts } from "@/components/posts";
import { PostsClient } from "@/components/posts-client";
import { Metadata } from "next";
import Link from "next/link";


const Page = () => {

    return (
        <div>
            <h1>Pagina inicial</h1>

            <form action={receberDados} className="text-black">
                <input type="text" name="name" placeholder="Digite seu nome"/>
                <input type="number" name="age" placeholder="Digite sua idade"/>
                <input className="text-white" type="submit" value={"Enviar"}/>
            </form>

            <Link href={"/tela1"}>Ir para tela 1</Link>
        </div>
    );
}


export default Page;