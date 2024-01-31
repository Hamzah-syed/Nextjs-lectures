'use client';

import { onSubmit } from "./onSubmit";

const Page = () => {

    // const onSubmit = async (formData: FormData) => {
    //     'use server'
    //     let firstName = formData.get('firstName')
    //     console.log(firstName)

    // }

    return (
        <div>
            <form action={onSubmit}>
                <input type="text"
                    className="m-3 border p-4"
                    placeholder="firstName"
                    name="firstName"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-4">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Page;