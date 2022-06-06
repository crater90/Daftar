import { useState, useEffect } from "react";

import { db } from "../firebase"
import { addDoc, collection } from "firebase/firestore"

import { MailIcon, PhoneIcon } from "@heroicons/react/solid"

import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";

import toast from "react-hot-toast";

function CityPageForm({ triggerAnimate, city }) {

    const [shake, setShake] = useState(false);

    const initialState = {
        name: "",
        email: "",
        phone: "",
    };


    const submitSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('* This field is required'),
        email: Yup.string().email('Invalid email address').required('* This field is required'),
        phone: Yup.string().length(10, 'Invalid number').required('* This field is required'),
    });

    const animate = () => {
        setShake(true);
        setTimeout(() => setShake(false), 1000);
    }

    useEffect(() => {
        triggerAnimate.current = animate
    }, [])

    return (
        <div className="">
            <div className={`sticky top-20 py-4 px-6 bg-white font-Sora text-base border rounded-md  ${shake ? 'animate-shakeLeftRight border-slate-600 shadow-sm' : 'border-gray-200 drop-shadow-md'}`}>
                <h1 className="text-xl font-semibold capitalize">Interested in Office spaces in {city}</h1>
                <p>Leave your details below</p>
                <Formik
                    initialValues={initialState}
                    validationSchema={submitSchema}
                    onSubmit={async (values, { resetForm }) => {
                        try {
                            const docRef = await addDoc(collection(db, "leads"), values);
                            console.log('doc added -->', values);
                            toast.success('Success, We will get back to you soon');
                            resetForm();
                        } catch (error) {
                            toast.error('Something went wrong', error);
                        }
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="flex flex-col mt-2">
                                <label className="font-semibold text-gray-500" htmlFor="name">Name</label>
                                <Field className="p-1 border-2 rounded border-gray-200 focus:outline-none focus:border-gray-700" type="text" name="name" />
                                {errors.name && touched.name ? (
                                    <p className="text-xs text-red-500">{errors.name}</p>
                                ) : null}
                            </div>
                            <div className="flex flex-col mt-2 ">
                                <label className="font-semibold text-gray-500" htmlFor="phone">Mobile no</label>
                                <Field className="p-1 border-2 rounded border-gray-200 focus:outline-none focus:border-gray-700" type="tel" name="phone" />
                                {errors.phone && touched.phone ? (
                                    <p className="text-xs text-red-500">{errors.phone}</p>
                                ) : null}
                            </div>
                            <div className="flex flex-col mt-2 ">
                                <label className="font-semibold text-gray-500" htmlFor="name">Email</label>
                                <Field className="p-1 border-2 rounded border-gray-200 focus:outline-none focus:border-gray-700" type="email" name="email" />
                                {errors.email && touched.email ? (
                                    <p className="text-xs text-red-500">{errors.email}</p>
                                ) : null}
                            </div>
                            <button type="submit" className="mt-4 border-2 rounded w-full px-4 py-2 font-semibold hover:bg-gray-600 hover:border-gray-600 hover:text-white">Request a callback</button>
                            <div className="my-4 border-b"></div>

                            <div className="mt-4">
                                <p className="text-xl font-semibold my-2">Call our experts</p>
                                <span className="text-gray-600 cursor-pointer"><PhoneIcon className="h-5 w-5 inline mr-2" />7983069435</span>
                                <p className="text-gray-600 mt-2 cursor-pointer"><MailIcon className="h5 w-5 inline mr-2" />info@smartdaftar.com</p>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

        </div>
    )
}

export default CityPageForm