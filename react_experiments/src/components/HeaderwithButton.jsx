import { useState } from "react"
import Header from "./Header"

function HeaderwithButton() {
    const [title, setTitle] = useState("Aditya1")
    function updateTitle() {
        setTitle(Math.random())
    }
    return <>
            <button onClick={updateTitle}>Click me</button>
            <Header title={title} />
        </>
}
export default HeaderwithButton