import modelInfo from "../model/portfolio.model.js"
import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config();

const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : process.env.EMAIL_USER,
        pass : process.env.EMAIL_PASSWORD,
    }
})



//Create new Records
export const createNewDetails = async (req,res) => {

    const createInformation = new modelInfo({
        name:req.body.name,
        email:req.body.email,
        subject :req.body.subject,
        description:req.body.description,
    })

    try {
         await createInformation.save();

        //mail option configre
        const mailOptions = {
            from : process.env.EMAIL_USER,
            replyTo: req.body.email,
            to : process.env.EMAIL_USER,
            subject :  req.body.subject,
            html : `
            
             <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2>Hey Vimal! New Inquiry Received</h2>
            <p><strong>Name:</strong> ${req.body.name}</p>
            <p><strong>Email:</strong> ${req.body.email}</p>
            <p><strong>Subject:</strong> ${req.body.subject}</p>
            <p><strong>Description:</strong></p>
            <p style="background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
                ${req.body.description}
            </p>
             <footer style="margin-top: 20px; font-size: 0.9em; color: #777; text-align: center;">
            <p>This email was sent from your portfolio contact form.</p>
            </footer>
        </div>

         `
        }

        //send email
        transporter.sendMail(mailOptions , (error,info) =>{
            if (error) {
                 res.status(500).json({
                    success : false,
                    message: "There was an error sending the email.",
                    error : error.message,
                })
            } 
            return res.status(201).json({
                success: true,
                message: "Your information has been sent successfully!",
            });
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message : "There An error occurred while creating information.",
            error : error.message,
        })
        
    }
}


//get new Records

export const getAllRecords = async(req,res) =>{
    try {
        const allData = await modelInfo.find();

        if(allData.length === 0){
            return res.status(404).json({
                success: false,
                message: "No information found.",

            });
        }
        console.log(allData);
        return res.status(200).json({
            success : true,
            message : "All Records Retrived Successfully",
            result : allData
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "There is an Error to Retrive All Information"
        })
    }
}