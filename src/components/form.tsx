"use client"

import { receberDados } from "@/actions/receberDados";
import { useFormState, useFormStatus } from "react-dom";

const inicialState = {
    msg: ''
}

export const Form = () => {

    const [state, formAction] = useFormState(receberDados, inicialState);
    const { pending } = useFormStatus();

    return (
        <form action={formAction} className="text-black">
            <input type="text" name="name" placeholder="Digite seu nome" />
            <input type="number" name="age" placeholder="Digite sua idade" />
            <input className="text-white" type="submit" value={"Enviar"} disabled={pending}/>
            <p className="text-white">MSG: {state.msg}</p>
        </form>
    );
}