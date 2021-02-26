import * as yup from 'yup'

const formSchema = yup.object().shape({
    // REQUIRED INPUTS
    // Name
    name: yup.string()
    .required('A Name is required to submit order.')
    .min(2, 'Name must be at least 2 characters.'),
    // Size
    size: yup.string()
    .required('Please select a size.'),
    // CHECKBOXES - NOT REQUIRED
    pepperoni: yup.boolean(),
    mushroom: yup.boolean(),
    ham: yup.boolean(),
    olives: yup.boolean()
})

export default formSchema;