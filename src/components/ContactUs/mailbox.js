import React from "react";
import emailjs from "emailjs-com";

export default function mailbox(){
    const form = document.getElementById('inquiry-form');
    const date = new Date();
    const sent = date.getDate();
    const time = date.getTime();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const inquiryType = document.getElementById('inquiries').value;
    const message= document.getElementById('message').value;
    const companyName="";
    const haveCompany=document.getElementById('company').value;

    if (haveCompany == 'yes'){
        companyName = document.getElementById('companyName').value;
    }

    console.log('outside')

    //send email with the above information using EmailJS service
    emailjs.send("service_qj2zy4j","template_t9jjsx1", {
        from_name: name,
        reply_to: email,
        message_html: message,
        inquiry_type: inquiryType,
        date_sent: sent,
        time_sent: time,
        company_name: companyName
    })
    .then((res) => console.log(res));
}


// (response) => {
//     console.log("SUCCESS!", response.status, response.text);
//     alert("Your inquiry has been sent successfully. We'll get back to you shortly.");
//     form.reset(); // clear form fields
//   }, (error) => {
//     console.log("FAILED...", error);
//     alert("Oops! Something went wrong. Please try again later.");
// }