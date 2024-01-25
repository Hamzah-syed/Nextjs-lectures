// sanity/pet.ts
export default {
    name: 'pet',
    type: 'document',
    title: 'Pet (This is for adding pets)',
    fields: [
        {
            name: "pname",
            type: "string",
            title: "Name of a Pet"
        },
        {
            name: "description",
            type: "text",
            title: "Description"
        },
    ]
}
