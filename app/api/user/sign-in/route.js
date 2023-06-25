import bcrypt from "bcrypt";
import Cookies from "js-cookie";
import { createClient } from "next-sanity";
import jwt from "jsonwebtoken";

export const POST = async (req, res) => {
  const request = await req.json();

  const sanity = {
    projectId: process.env.NEXT_PUBLIC_APP_KEY,
    dataset: "production",
    token: process.env.NEXT_PUBLIC_APP_TOKEN,
  };

  const clients = createClient(sanity);

  try {
    const data = await clients.fetch(
      `*[_type == 'user' && email == $email] [0]  `,
      {
        email: request.email,
      }
    );

    if (!data) {
      return new Response(`user does not exist.`, {
        status: 400,
      });
    } else {
      const isMatch = await bcrypt.compare(request.password, data.password);

      if (!isMatch) {
        return new Response(`inValid credential.`, {
          status: 400,
        });
      } else {
        const token = jwt.sign({ id: data._id }, "thisishardestkeyever");
        delete data.password;

        Cookies.set("user", {
          name: data.name,
          email: data.email,
          phone: data.phone,
          token: token,
        });

        return new Response(JSON.stringify({ data, token }), {
          status: 200,
        });
      }
    }
  } catch (error) {
    return new Response(`${error} What is this`, {
      status: 500,
    });
  }
};
