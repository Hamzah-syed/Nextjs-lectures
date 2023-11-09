import Link from "next/link";

type IProps = {
    pageName: string,
    message?: string
}

export const Nav = (props: IProps) => {

    console.log(props.pageName)

    let isLoggedin = false;


    return (
        <div>
            <h1>{props.pageName}</h1>
            <Link href="/">Home</Link> <br />
            <Link href="/about">About</Link> <br />
            <Link href="/contact">Contact</Link> <br />
            {
                isLoggedin ?
                    <Link href="/dashboard">Dashboard</Link>
                    :
                    null
            }

        </div>
    )
}