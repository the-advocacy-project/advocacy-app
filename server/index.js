const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());

app.post('/', (req, res) => {
    const {contact, consent, initialChecks, nutrition, hygiene, toilet, clothing, safety, environment, relationships, work, transport, responsibilities, eligibility, wellbeing, duty  } = req.body;
 
  
    
    const contactSection = Object.keys(contact).map((qs) => {
        
     return (
         `<div>
         <h3> ${contact[qs].question} : </h3>
        <p>${contact[qs].more} </p>
         </div>`
     )
    })
   
    const consentSection = Object.keys(consent).map((qs) => {
        return (
            `<div>
            <h3> ${consent[qs].question} : </h3>
           <p>${consent[qs].agree ? "Yes" : "No"} </p>
            </div>`
        )
       })

       const initialCheckSection = Object.keys(initialChecks).map((qs) => {
        return (
            `<div>
            <h3> ${initialChecks[qs].question} : </h3>
           <p>${initialChecks[qs].agree ? "Yes" : "No"} </p>
            </div>`
        )
       })

   
       const nutritionSection = Object.keys(nutrition).map((qs) => {
         
           if (qs === "more") {
            return (
                `<div>
                <p>${nutrition[qs].more}<p>
                </div>` 
            )
           } else {
            return (
                `<div>
                <h3> ${nutrition[qs].question} : </h3>
                <p>${nutrition[qs].agree ? "Yes" : "No"} </p>
                </div>` 
            )
           }
       })

       const hygieneSection = Object.keys(hygiene).map((qs) => {
       
        if (qs === "more") {
         return (
             `<div>
             <p>${hygiene[qs].more}<p>
             </div>` 
         )
        } else {
         return (
             `<div>
             <h3> ${hygiene[qs].question} : </h3>
             <p>${hygiene[qs].agree ? "Yes" : "No"} </p>
             </div>` 
         )
        }
    })

    const toiletSection = Object.keys(toilet).map((qs) => {
        
        if (qs === "more") {
         return (
             `<div>
             <p>${toilet[qs].more}<p>
             </div>` 
         )
        } else {
         return (
             `<div>
             <h3> ${toilet[qs].question} : </h3>
             <p>${toilet[qs].agree ? "Yes" : "No"} </p>
             </div>` 
         )
        }
    })


    const clothingSection = Object.keys(clothing).map((qs) => {
        
        if (qs === "more") {
         return (
             `<div>
             <p>${clothing[qs].more}<p>
             </div>` 
         )
        } else {
         return (
             `<div>
             <h3> ${clothing[qs].question} : </h3>
             <p>${clothing[qs].agree ? "Yes" : "No"} </p>
             </div>` 
         )
        }
    })
    
    const safetySection = Object.keys(safety).map((qs) => {

        if (qs === "more") {
         return (
             `<div>
             <p>${safety[qs].more}<p>
             </div>` 
         )
        } else {
         return (
             `<div>
             <h3> ${safety[qs].question} : </h3>
             <p>${safety[qs].agree ? "Yes" : "No"} </p>
             </div>` 
         )
        }
    })
      

    const environmentSection = Object.keys(environment).map((qs) => {

        if (qs === "more") {
         return (
             `<div>
             <p>${environment[qs].more}<p>
             </div>` 
         )
        } else {
         return (
             `<div>
             <h3> ${environment[qs].question} : </h3>
             <p>${environment[qs].agree ? "Yes" : "No"} </p>
             </div>` 
         )
        }
    })

    const workSection = Object.keys(work).map((qs) => {
    
        if (qs === "more") {
         return (
             `<div>
             <p>${work[qs].more}<p>
             </div>` 
         )
        } else {
         return (
             `<div>
             <h3> ${work[qs].question} : </h3>
             <p>${work[qs].agree ? "Yes" : "No"} </p>
             </div>` 
         )
        }
    })
    
    
    

    const relationshipsSection = Object.keys(relationships).map((qs) => {
       
        if (qs === "more") {
         return (
             `<div>
             <p>${relationships[qs].more}<p>
             </div>` 
         )
        } else {
         return (
             `<div>
             <h3> ${relationships[qs].question} : </h3>
             <p>${relationships[qs].agree ? "Yes" : "No"} </p>
             </div>` 
         )
        }
    })
    


     const transportSection = Object.keys(transport).map((qs) => {
      
        if (qs === "more") {
         return (
             `<div>
             <p>${transport[qs].more}<p>
             </div>` 
         )
        } else {
         return (
             `<div>
             <h3> ${transport[qs].question} : </h3>
             <p>${transport[qs].agree ? "Yes" : "No"} </p>
             </div>` 
         )
        }
    })

    const responsibilitiesSection = Object.keys(responsibilities).map((qs) => {
      
        if (qs === "more") {
         return (
             `<div>
             <p>${responsibilities[qs].more}<p>
             </div>` 
         )
        } else {
         return (
             `<div>
             <h3> ${responsibilities[qs].question} : </h3>
             <p>${responsibilities[qs].agree ? "Yes" : "No"} </p>
             </div>` 
         )
        }
    })

    const eligibilitySection = Object.keys(eligibility).map((qs) => {

        if (qs === "more") {
         return (
             `<div>
             <p>${eligibility[qs].more}<p>
             </div>` 
         )
        } else {
         return (
             `<div>
             <h3> ${eligibility[qs].question} : </h3>
             <p>${eligibility[qs].agree ? "Yes" : "No"} </p>
             </div>` 
         )
        }
    })

    const wellbeingSection = Object.keys(wellbeing).map((qs) => {
       
        if (qs === "more") {
         return (
             `<div>
             <p>${wellbeing[qs].more}<p>
             </div>` 
         )
        } else {
         return (
             `<div>
             <h3> ${wellbeing[qs].question} : </h3>
             <p>${wellbeing[qs].agree ? "Yes" : "No"} </p>
             </div>` 
         )
        }
    })
    
    const dutySection = Object.keys(duty).map((qs) => {
       
        if (qs === "more") {
         return (
             `<div>
             <p>${duty[qs].more}<p>
             </div>` 
         )
        } else {
         return (
             `<div>
             <h3> ${duty[qs].question} : </h3>
             <p>${duty[qs].agree ? "Yes" : "No"} </p>
             </div>` 
         )
        }
    })
    


  
   

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'theadvocacyfac@gmail.com',
            pass: '2password$'
        }
    });

    const mailList = [
        `${consent.consentToCouncil.agree ? "theadvocacyfac@gmail.com": null}`,
        `${consent.consentToAdvocacy.agree ? "jaggardk@gmail.com" : null}`,
        `${contact.email.more ? contact.email.more: null}`
      ];
      
      

    const mailOptions = {
        from: 'theadvocacyfac@gmail.com',
        to: `${mailList}`,
        subject: 'test',
        html: `
    







        <h2>Contact Information</h2>
        ${contactSection}
        initialChecks, nutrition, hygiene, toilet, clothing, safety, environment, relationships, work, transport, responsibilities, eligibility, wellbeing, duty
        <h2>Consent Information</h2>
        ${consentSection}

        <h2>Initial Checks</h2>
        ${initialCheckSection}

        <h2>Nutrition</h2>
        ${nutritionSection}

        <h2>Nutrition</h2>
        ${hygieneSection}
        
        <h2>Toilet</h2>
        ${toiletSection}

        <h2>Clothing</h2>
        ${clothingSection}

        <h2>Safety</h2>
        ${safetySection}

        <h2>Environment</h2>
        ${environmentSection}

        <h2>Relationships</h2>
        ${relationshipsSection}

        <h2>Work</h2>
        ${workSection}

        <h2>Transport</h2>
        ${transportSection}

        <h2>Responsibilities</h2>
        ${responsibilitiesSection}
        
        <h2>Eligibility</h2>
        ${eligibilitySection}
        
        <h2>Wellbeing</h2>
        ${wellbeingSection}

        <h2>Duty</h2>
        ${dutySection}


        `,
        replyTo: 'theadvocacyfac@gmail.com'
    };

    transporter.sendMail(mailOptions, function(err, res) {
        if (err) {
            console.error('there was an error: ', err);
        } else {
            console.log('here is the res: ', res);
        }
    });

    // res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
});


app.listen(3001, () => console.log('Listening on port 3001!'));
