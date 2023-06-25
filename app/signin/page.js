"use client";

import Form, { Form2, Form3 } from "@/components/Form";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import styles from "../../styles/sell.module.css";

const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const user = Cookies.get("user");
  const userObject = user ? JSON.parse(user) : null;

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  if (userObject?.user?.email) {
    router.push("/");
  }
  const onChangeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post("/api/user/sign-in", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        try {
          if (response) {
            console.log(response, "No Response");
            Cookies.set("user", JSON.stringify(response.data));
            setLoading(false);
            toast("Login successfully✔️");

            setData({
              email: "",
              password: "",
            });
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
        } finally {
          setLoading(false);
        }
      });
  };
  return (
    <main className={styles.main}>
      <div className={styles.mainBody}>
        <div className={styles.form}>
          <Form3
            loading={loading}
            styling={styles}
            onSubmit={onSubmit}
            onChangeData={onChangeData}
          />
        </div>
      </div>
    </main>
  );
};

export default SignUp;
