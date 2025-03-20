import { useLocation } from "react-router-dom"

export default function() {
    const username = useLocation().state.name.toUpperCase();
    return(
        <>
           <h1>Hello {username}</h1>
        </>
    )
}