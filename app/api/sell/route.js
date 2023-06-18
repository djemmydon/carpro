
 

import { mailOptions, transporter } from "../../../utils/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  state: "State",
  city: "City",
  address: "Address",
  date: "Date",
  time: "Time",
};

// const generateEmailContent = (data) => {
//     const stringData = Object.entries(data).reduce(
//       (str, [key, val]) =>
//         (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
//       ""
//     );
//     const htmlData = Object.entries(data).reduce((str, [key, val]) => {
//       return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
//     }, "");
  
//     return {
//       text: stringData,
//       html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Contact Message</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
//     };
//   };

// const handler = async (req, res) => {
//   if (req.method === "POST") {
//     const data = req.body;
//     if (!data || !data.name || !data.email || !data.subject || !data.message) {
//       return res.status(400).send({ message: "Bad request" });
//     }

//     try {
//       await transporter.sendMail({
//         ...mailOptions,
//         ...generateEmailContent(data),
//         subject: data.subject,
//       });

//       return res.status(200).json({ success: true });
//     } catch (err) {
//       console.log(err);
//       return res.status(400).json({ message: err.message });
//     }
//   }
//   return res.status(400).json({ message: "Bad request" });
// };
// export default handler;

export const POST = async (req, res) => {
  const  data = await req.json();
    // if (!data || !data.name || !data.email || !data.date || !data.address || !data.city || !data.state  || !data.phone) {
    //     return new Response("Invalid input", {
    //         status: 400,
    //       });
    //     }
      
  try {

      await transporter.sendMail({
          ...mailOptions,
        subject: "Hurray🎉 You have a new Inspection",
        html: `
        <html>
    
        
        <!-- CSS Code: Place this code in the document's head (between the 'head' tags) -->
        <style>
        table.GeneratedTable {
          width: 100%;
          background-color: #ffffff;
          border-collapse: collapse;
          border-width: 2px;
          border-color: #ffcc00;
          border-style: solid;
          color: #000000;
        }
        
        table.GeneratedTable td, table.GeneratedTable th {
          border-width: 2px;
          border-color: #ffcc00;
          border-style: solid;
          padding: 3px;
        }
        
        table.GeneratedTable thead {
          background-color: #ffcc00;
        }
        </style>
        
        <!-- HTML Code: Place this code in the document's body (between the 'body' tags) where the table should appear -->
        <table class="GeneratedTable">
          <thead>
            <tr>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>${data.name}</td>

            </tr>
            <tr>
            <td>${data.email}</td>

            </tr>
            <tr>
            <td>${data.phone}</td>

            </tr>
            <tr>
            <td>${data.address}</td>
            
            </tr>
            <tr>
            <td>${data.date}</td>
           
            </tr>

            <tr>
            <td>${data.time}</td>
            </tr>
            <tr>
           
            <td>${data.city}</td>
            </tr>
            <tr>
            <td>${data.state}</td>
            </tr>
          </tbody>
        </table>
        <!-- Codes by Quackit.com -->
        
        

        </html>
        `,
          
      })
    
  console.log(data)

    return new Response("Donee", {
      status: 201,
    });
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
};
