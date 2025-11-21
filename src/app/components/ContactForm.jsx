'use client'
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ButtonLaid from "./button";

const ContactForm = ({align='H', ...props}) => {

    
    const servicesOptions = ['Commercial Vehicle Wrapping', 'Commercial Vehicle Lettering', 'Custom Car Wraps', 'Commercial Printing', 'Apparel', 'Stationery Printing']

    let formClass = false;
    const form = useRef();
    const phone = useRef();
    const [loading, setLoading] = useState(false);
    const statusRef = useRef(null);
    const pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    const [token, setToken] = useState("");
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

    const setTokenFunc = (getToken) => {
      setToken(getToken);
    };

    const handleChange = (phoneRef) => {
        const input = phoneRef.current;
        // Clear any old status
        input.setCustomValidity('');
      };

    const handleSubmit = (event, formRef, phoneRef, statusRef) => {
        event.preventDefault();

        const input = phoneRef.current;
        setLoading(true); // Mostrar loader

    // Clear any old status
    input.setCustomValidity('');

    // Check for invalid state(s)
    if (!pattern.test(input.value)) {
      input.setCustomValidity('Please enter a valid phone number');
      input.reportValidity();
    } else {
      input.setCustomValidity('');
      // Proceed with form submission if needed
      emailjs
      .sendForm('service_iyjzik5', 'template_Invisual', formRef.current, {
        publicKey: '25bO-dCc3QTCgWjyH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          formRef.current.reset();
          formClass = true;
          statusRef.current.innerHTML = "Submition sent succesfully"
          setLoading(false); // Ocultar loader
        },
        (error) => {
          setRefreshReCaptcha(!refreshReCaptcha);
          console.log('FAILED...', error.text);
          formClass = false;
          statusRef.current.innerHTML = "There was an error. Please try again or call us!"
          setLoading(false); // Ocultar loader
        },
      );
    }
}

  return (
    <>
      <div className="">
                  {loading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
                      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                  )}
                  <div className="lg:w-full">
                      <form className="pt-3 custom-form" ref={form} onSubmit={(e) => handleSubmit(e, form, phone, statusRef)} id="contact-form" >
                      <div className={`grid  ${align === 'V' ? "lg:grid-cols-6 gap-4" : "lg:grid-cols-2 gap-8"}`}>
                      <div className="col-span-2 lg:col-span-1">
                              <input  type="text" 
                                  className={`form-control p-2 w-full  ${align === "V" ? "h-[30px] bg-[#1A1A1A]" : "h-[40px] bg-[#ffffff4d]"}`} 
                                  id="name"  
                                  placeholder="Name"
                                  name="name"
                                  required
                                  />
                      </div>
                      <div className="col-span-2 lg:col-span-1">
                              <input type="text"
                              className={`form-control p-2 w-full ${align === "V" ? "h-[30px] bg-[#1A1A1A]" : "h-[40px] bg-[#ffffff4d]"}`}
                              id="phone"
                              aria-describedby="emailHelp" 
                              placeholder="Phone"
                              name="phone"
                              ref={phone}
                              onChange={() => handleChange(phone)}
                              required
                              />
                      </div>
                      <div className="col-span-2 lg:col-span-1">
                              <input type="email" 
                              className={`form-control p-2 w-full ${align === "V" ? "h-[30px] bg-[#1A1A1A]" : "h-[40px] bg-[#ffffff4d]"}`}
                              id="email" 
                              placeholder="Email"
                              name="email"
                              required/>
                      </div>
                      <div className="col-span-2 lg:col-span-1">
                              <label htmlFor="service"></label>
                              <select 
                              name="service"
                              id="service"
                              className={`form-control  p-2 w-full  ${align === "V" ? "h-[30px] bg-[#1A1A1A]" : "h-[40px] bg-[#ffffff4d]"}`}>
                                   <option value="" disabled defaultValue={''}>Choose a service</option>
                                  {servicesOptions.map((data, index) => (
                                      <option key={index} value={data} label={data} className="bg-[#1d1d1d]">{data}</option>
                                  ))}
                              </select>
                      </div>
                      <div className={`col-span-2 ${align === "V" ? "lg:hidden" : ""}`}>
                              <textarea rows="3" 
                              type="" 
                              className={`form-control p-2 w-full bg-[#ffffff4d]`}
                              id="comment" 
                              placeholder="Tell us about your business!"
                              name="comment"/>
                      </div>
                      <div className={`col-span content-center ${align === 'V' ? "lg:col-span-2 justify-center" : ""}`} >
                        <div className="flex gap-2">
                            <div className=" text-center">
                            <ButtonLaid buttonText={'SEND'} width={120} height={30} type="submit" formId="contact-form"/>
                            </div>
                            <div className="">
                            <ButtonLaid buttonText={'ADD IMAGE'} width={140} height={30} type="file" formId="contact-form"/>
                            </div>
                        </div>
                        <p ref={statusRef} className={formClass ? "text-green-600 mb-0" : "text-red-700 mb-0"} ></p>
                      </div>
                      </div>
                      </form> 
                  </div>
      
              </div>
    </>
  )
};

export default ContactForm;
