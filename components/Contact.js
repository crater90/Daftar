import { useState } from "react"

import { PhoneIcon, MailIcon } from "@heroicons/react/outline"

import { db } from "../firebase"
import { addDoc, collection } from "firebase/firestore"

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik'

function Contact() {

    const initialState = {
        name: "",
        email: "",
        phone: "",
        location: "",
        query: ""
    };

    const [loading, setLoading] = useState(false);

    const submitSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('* This field is required'),
        email: Yup.string().email('Invalid email address').required('* This field is required'),
        phone: Yup.string().length(10, 'Invalid number').required('* This field is required'),
    });

    return (
        <section id="Contact us" className="mt-10 w-11/12 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
            <h1 className="text-3xl text-gray-700 font-extrabold">Contact Us</h1>
            <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-t-md md:rounded-l-md px-4 gap-y-5 py-4 md:p-4 bg-gray-700 text-yellow-50 flex flex-col justify-center items-start">
                    <h1 className="text-3xl font-bold pb-5">We'd love to hear from you...</h1>
                    <span className="flex"><PhoneIcon className="h-7 pr-4" /><a href="tel:7983069435">7983069435</a></span>
                    <span className="flex"><MailIcon className="h-7 pr-4" /><a href="mailto:Info@smartdaftar.com">Info@smartdaftar.com</a></span>
                    {/* <span className="flex"><ChatIcon className="h-7 pr-4"/>2-A/3, Kundan Mansion, Asaf Ali Rd,<br/> Delhi 110002</span> */}
                </div>
                <div className="bg-gray-200 lg:col-span-2 rounded-b-md md:rounded-r-md">
                    <Formik initialValues={initialState} validationSchema={submitSchema} onSubmit={async (values, { resetForm }) => {
                        const docRef = await addDoc(collection(db, "leads"), values);
                        setLoading(true);
                        const timeId = setTimeout(() => {
                            // After 3 seconds set the show value to false
                            resetForm();
                            setLoading(false);
                        }, 3000)

                        return () => {
                            clearTimeout(timeId)
                        }
                    }}>
                        {({ values, errors, touched }) => (
                            <Form className="px-3 md:px-10 py-5">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <div className="flex flex-col ">
                                        <label className="font-bold text-gray-500 pb-2" htmlFor="name">NAME</label>
                                        <Field className="bg-gray-200 border-b-2 border-gray-700 focus:outline-none" type="text" name="name" id="name" />
                                        {errors.name && touched.name ? (
                                            <p className="text-xs text-red-500">{errors.name}</p>
                                        ) : null}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="font-bold text-gray-500 pb-2" htmlFor="email">EMAIL</label>
                                        <Field className="bg-gray-200 border-b-2 border-gray-700 focus:outline-none" type="email" name="email" id="email" />
                                        {errors.email && touched.email ? (
                                            <p className="text-xs text-red-500">{errors.email}</p>
                                        ) : null}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="font-bold text-gray-500 pb-2" htmlFor="phone">PHONE NO</label>
                                        <Field className="bg-gray-200 border-b-2 border-gray-700 focus:outline-none" type="tel" required name="phone" id="phone" />
                                        {errors.phone && touched.phone ? (
                                            <p className="text-xs text-red-500">{errors.phone}</p>
                                        ) : null}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="font-bold text-gray-500 pb-2" htmlFor="location">PREFERRED LOCATION</label>
                                        <Field className="bg-gray-200 border-b-2 border-gray-700 focus:outline-none" type="text" name="location" id="location" />
                                    </div>
                                </div>
                                <div className="flex flex-col pt-4">
                                    <label className="font-bold text-gray-500 pb-2" htmlFor="query">YOUR QUERY</label>
                                    <Field as='textarea' rows={3} className="bg-gray-200 border-b-2 border-gray-700 focus:outline-none" name="query" id="query" />
                                </div>
                                <div className="flex items-center justify-end pt-4">
                                    <button className="border-2 border-gray-700 rounded-md py-2 px-4 font-semibold text-gray-700 hover:text-yellow-50 hover:bg-gray-700" type="submit">Send Message</button>
                                </div>
                                {
                                    loading &&
                                    <div className="flex flex-col pt-4 text-center">
                                        <p className="px-4 py-2 rounded-md bg-gray-700 text-white transition-opacity ease-in-out">Message Sent successfully!!</p>
                                    </div>
                                }
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default Contact
