"use server"

export const onSubmit = async (formData: FormData) => {
    let firstName = formData.get('firstName')
    console.log(firstName)

}