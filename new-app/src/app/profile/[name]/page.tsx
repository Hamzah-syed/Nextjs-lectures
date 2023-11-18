// const names = ["okasha", "azfar", "bilal"]

export const generateStaticParams = () => {

    return [
        {
            name: "okasha"
        },
        {
            name: "bilal"
        },
        {
            name: "azfar"
        }
    ]

}


const Page = (props: any) => {

    return (
        <h1>
            {props.params.name} Profile
        </h1>
    )
}

export default Page

// Props structure
// const ob = {
//     params: { name: 'zia' },
// }

