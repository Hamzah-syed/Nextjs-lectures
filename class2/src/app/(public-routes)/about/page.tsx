'use client'
const Clicked = () =>{
    alert("Clicked")
}
const Page = () => {
    return (
        <>
            <h1>
                About
            </h1>
            <button onClick={Clicked}>Clink Me</button>
        </>
    )
}

export default Page