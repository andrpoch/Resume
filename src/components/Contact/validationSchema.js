import * as Yup from 'yup';

const feedbackSchema = Yup.object().shape({
   name: Yup.string()
      .min(2, "Please enter more than 1 character")
      .max(25, "Please enter not more than 25 character")
      .required("This field is required"),
   email: Yup.string()
      .email('Please enter correct email')
      .matches(
         /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/,
         'Please enter correct email')
      .required('This field is required'),
   message: Yup.string()
      .max(100, 'No more than 100 characters')
      .required('This field is required'),
});
export default feedbackSchema;