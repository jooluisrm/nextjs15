"use client"

type Props = {
    error: Error & { digest?: string },
    reset: () => void;
}

export default function Error({ error, reset }: Props) {

    const handleTryagain = () => {
        reset();
    }
    return (
        <div>
            <h2>Aconteceu algum erro</h2>
            <p>{error.message}</p>
            <button onClick={handleTryagain}>Tentar novamente</button>
        </div>
    );
}