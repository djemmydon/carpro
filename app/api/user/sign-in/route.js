import bcrypt from "bcrypt";
import Cookies from "js-cookie";
import { createClient } from "next-sanity";
import jwt from "jsonwebtoken";

export const POST = async (req, res) => {
  const data = await req.json();

  const sanity = {
    projectId: process.env.NEXT_PUBLIC_APP_KEY,
    dataset: "production",
    token: process.env.NEXT_PUBLIC_APP_TOKEN,
  };

  const clients = createClient(sanity);

  try {
    const user = await clients.fetch(
      `*[_type == 'user' && email == $email] [0]  `,
      {
        email: data.email,
      }
    );

    if (!user) {
      return new Response(`user does not exist.`, {
        status: 400,
      });
    } else {
      const isMatch = await bcrypt.compare(data.password, user.password);

      if (!isMatch) {
        return new Response(`inValid credential.`, {
          status: 400,
        });
      } else {
        const token = jwt.sign({ id: user._id }, "thisishardestkeyever");
        delete user.password;

        Cookies.set("user", {
          name: user.name,
          email: user.email,
          phone: user.phone,
          token: token,
        });

        return new Response(JSON.stringify({ user, token }), {
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
