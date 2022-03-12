import { PhoneIcon, MailIcon } from "@heroicons/react/outline"

function Contact() {
    async function handleSubmit (e) {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if( !field.name ) return;
            formData[field.name] = field.value;
        });
        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(formData),
        })
        console.log(formData);
    }

    return (
        <section id="Contact us" className="mt-10 w-11/12 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
            <h1 className="text-3xl text-gray-700 font-extrabold">Contact Us</h1>
            <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-t-md md:rounded-l-md px-4 gap-y-5 py-4 md:p-4 bg-gray-700 text-yellow-50 flex flex-col justify-center items-start">
                    <h1 className="text-3xl font-bold pb-5">We'd love to hear from you...</h1>
                    <span className="flex"><PhoneIcon className="h-7 pr-4"/><a href="tel:7983069435">7983069435</a></span>
                    <span className="flex"><MailIcon className="h-7 pr-4"/><a href="mailto:Info@smartdaftar.com">Info@smartdaftar.com</a></span>
                    {/* <span className="flex"><ChatIcon className="h-7 pr-4"/>2-A/3, Kundan Mansion, Asaf Ali Rd,<br/> Delhi 110002</span> */}
                </div>
                <div className="bg-gray-200 lg:col-span-2 rounded-b-md md:rounded-r-md">
                    <form className="px-3 md:px-10 py-5" action="https://formsubmit.co/kamranmohd89@gmail.com" method="post" >
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            <div className="flex flex-col ">
                                <label className="font-bold text-gray-500 pb-2" htmlFor="name">NAME</label>
                                <input required className="bg-gray-200 border-b-2 border-gray-700 focus:outline-none" type="text" name="name"/>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold text-gray-500 pb-2" htmlFor="email">EMAIL</label>
                                <input required autoComplete="email" className="bg-gray-200 border-b-2 border-gray-700 focus:outline-none" type="email" name="email"/>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold text-gray-500 pb-2" htmlFor="phone">PHONE NO</label>
                                <input className="bg-gray-200 border-b-2 border-gray-700 focus:outline-none" type="tel" maxLength={10} required name="phone"/>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold text-gray-500 pb-2" htmlFor="location">PREFERRED LOCATION</label>
                                <input className="bg-gray-200 border-b-2 border-gray-700 focus:outline-none" type="text" name="location"/>
                            </div>
                        </div>
                        <div className="flex flex-col pt-4">
                            <label className="font-bold text-gray-500 pb-2" htmlFor="message">YOUR QUERY</label> 
                            <textarea className="bg-gray-200 border-b-2 border-gray-700 focus:outline-none" rows="3" name="message"/>
                        </div>
                        <div className="flex items-center justify-end pt-4">
                            <button className="border-2 border-gray-700 rounded-md py-2 px-4 font-semibold text-gray-700 hover:text-yellow-50 hover:bg-gray-700" type="submit">Send Message</button>
                            <input type="hidden" name="_next" value="https://smartdaftar.com"></input>
                            <input type="hidden" name="_captcha" value="false"></input>
                        </div>
                    </form>
                </div>
            </div>
            
        </section>
    )
}

export default Contact
