// import { client } from "@/utils/sanity";
import { mailOptions, transporter } from "@/utils/nodemailer";
import sanityClient from "@sanity/client";
import axios from "axios";
import bcrypt from "bcrypt";
import Cookies from "js-cookie";
import { createClient } from "next-sanity";

export const POST = async (req, res) => {
  const data = await req.json();

  const sanity = {
    projectId: process.env.NEXT_PUBLIC_APP_KEY,
    dataset: "production",
    token: process.env.NEXT_PUBLIC_APP_TOKEN,
  };
  

  const clients = createClient(sanity);

  try {
    const users = await clients.fetch(
      `*[_type == 'user' && email == $email] [0]  `,
      {
        email: data.email,
      }
    );

    if (users) {
      return new Response(`User Already Exist`, {
        status: 500,
      });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(data.password, salt);
    await clients.create({
      _type: "user",
      name: data.name,
      email: data.email,
      phone: data.phone,
      city: data.city,
      state: data.state,
      typeOf: data.typeOf,
      password: passwordHash,
    });

    await transporter.sendMail({
      ...mailOptions,
      subject:
        "Congratulations 🎉! A new agent has just signed up on your website",
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
 <body>
<div>
<p>Congratulations 🎉! A new ${data.phone} has just signed up on your website</p>
</div>

 <table class="GeneratedTable">
 <thead>
   <tr>
     <th>Information</th>
   </tr>
 </thead>
 <tbody>
   <tr>
   <td>Full Name: ${data.name}</td>

   </tr>
   <tr>
   <td>Email: ${data.email}</td>

   </tr>
   <tr>
   <td>Account Type: ${data.typeOf}</td>

   </tr>
   <tr>
   <td>Phone Number: ${data.phone}</td>

   </tr>
   <tr>
   <td>Address: ${data.address}</td>
   
   </tr>
 
   <tr>
  
   <td>City: ${data.city}</td>
   </tr>
   <tr>
   <td>State: ${data.state}</td>
   </tr>
 </tbody>
</table>   
 </body>
    <!-- Codes by Quackit.com -->
    
    

    </html>
    `,
    });

    Cookies.set("user", {
      name: data.name,
      email: data.email,
      phone: data.phone,
    });

    return new Response(JSON.stringify({data}), {
      status: 201,
    });
  } catch (error) {
    return new Response(`${error} What is this`, {
      status: 500,
    });
  }
};
