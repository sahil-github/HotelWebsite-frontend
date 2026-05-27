import * as Yup from "yup";

const ContactValidationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid 10-digit phone number")
    .required("Phone is required"),
  email: Yup.string().email("Enter valid email").required("Email is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  comments: Yup.string().required("Comments are required"),
});
export default ContactValidationSchema;