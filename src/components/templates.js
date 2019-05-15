export const PROPS = [
    {
        title:"node",
        type:"document node",
        required:"true",
        default:"null",
        desc:"accepts a document node to which the portal will be mounted"
    },
    {
        title:"trigger",
        type:"node",
        required:"false",
        default:"null",
        desc:"accepts a document node on click of which the Portal Modal will be opened"
    },
    {
        title:"size",
        type:"string",
        required:"false",
        default:"medium",
        desc:"accepts one of the three values -> tiny,medium,large"
    },
    {
        title:"defaultOpen",
        type:"boolean",
        required:"false",
        default:"false",
        desc:"Opens the Portal Modal by Default on Component Mount"
    },
    {
        title:"onOpen",
        type:"function",
        required:"false",
        default:"null",
        desc:"accepts a callback function to be called after the Portal Modal is opened"
    },
    {
        title:"onClose",
        type:"function",
        required:"false",
        default:"null",
        desc:"accepts a callback function to be called after the Portal Modal is closed"
    },
    {
        title:"closeOnEsc",
        type:"boolean",
        default:"false",
        required:"false",
        desc:"Closes the modal on Esc Press"
    },
    {
        title:"closeOnOuterClick",
        type:"boolean",
        default:"false",
        required:"false",
        desc:"Closes the modal on user click outside the Modal content"
    },
    {
        title:"closeAfter",
        type:"number",
        default:"null",
        required:"false",
        desc:"accepts number value in ms. If exists closes the Modal after the specified duration"
    }
]