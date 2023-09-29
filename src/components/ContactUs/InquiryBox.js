import React, {useState} from "react";
import "./Box.css"
import mailbox from "./mailbox";
export default function InquiryBox(){

        const [showCompany, setShowCompany] = useState(false);
      
        function handleCompanyChange(e) {
          setShowCompany(e.target.value === "yes");
        }
      
        const noDisplay = {
          width: "100%",
          display: showCompany ? "block" : "none"
        };

    
    return(
        <div>
            <h1>Can't reach us by Phone? Fill up the following Inquiry Form:</h1>
            
            <form id="inquiry-form">
            
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/><br />
            
            <label for="company">Are you emailing on behalf of a Company or an Organization?:</label>
            <select name="company" id="company" onChange={handleCompanyChange}>
                <option value="">Choose an option from the list...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select><br />
            <div id="companyname" style={noDisplay}>
                <label for="companyname">Name of Company/Organization:</label>
                <input type="text" name="companyname" required/><br />
            </div>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/><br />
            
            <label for="inquiries">Choose your type of Inquiry:</label>
            <select name="inquiries" id="inquiries">
                <option value="">Choose an option from the list...</option>
                <option value="Product Inquiry">Product Inquiry</option>
                <option value="Purchased Order">Purchased Order</option>
                <option value="Others">Others</option>
            </select><br />
            
            <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea><br /><br />
            
            <input type="submit" value="Submit" onClick={mailbox}/>
            
            </form>
</div>
    )
}
