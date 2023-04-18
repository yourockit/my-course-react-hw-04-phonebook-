// import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as yup from "yup";
import { nanoid } from "nanoid";
import { useState } from "react";

export const ContactForm = ({onSubmit}) => {

const [name, setName] = useState('');
const [number, setNumber] = useState('');

const nameInputId = nanoid();
const numberInputId = nanoid();

const handleChange = e => {
const {name, value} = e.target;

switch (name) {
    case 'name':
        setName(value);
        break;

    case 'number':
        setNumber(value)
        break;

    default:
        break;
}
      };
    
const handleSubmit = e => {
    e.preventDefault();
const newContact = {
    id: nanoid(),
    name: name,
    number: number,
}

        onSubmit(newContact);
        reset();
};  
    
const reset = () => {
        setName('');
        setNumber('');
};
     
return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor={nameInputId}>
                Name
                <br />
                <input 
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                id={nameInputId}
                value={name} 
                onChange={handleChange}
                />
                <br />
            </label>
            <label htmlFor={numberInputId}>
                <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                id={numberInputId}
                value={number}
                onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Add contact</button>
        </form>
    </div>
)
};

//===============FORMIK & YUP===================//

// const schema = yup.object().shape({
//     name: yup.string().required(),
//     number: yup.number().required(),
// }) 

// const initialValues = {
//     name: '',
//     number: '',
// };

// export const ContactForm = ({onSubmit}) => {
  
// const handleSubmit = (values, {resetForm}) => {
//     const newContact = {
//         id: nanoid(),
//         name: values.name,
//         number: values.number,
//     }
//     onSubmit(newContact);
//     resetForm();
// };  
      
// return (
//     <Formik 
//     initialValues={initialValues}  
//     onSubmit={handleSubmit}
//     validationSchema={schema}
//     >
//         <Form>
//             <label>
//                 Name
//                 <br />
//                 <Field 
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//                 />
//                 <ErrorMessage name="name" />
//                 <br />
//             </label>
//             <label>
//                 <Field
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 />
//                 <ErrorMessage name="number" />
//             </label>
//             <br />
//             <button type="submit">Add contact</button>
//         </Form>
//     </Formik>
// )
// };
