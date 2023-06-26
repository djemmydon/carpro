"use client";

import Form, { Form2 } from "@/components/Form";
import validateForm from "@/utils/validateForm";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import styles from "../../styles/sell.module.css";

const SignUp = () => {
  const router = useRouter();

  const user = Cookies.get("user");
  const userObject = user ? JSON.parse(user) : null;
  const firstWord = user && userObject?.data.name.split(" ")[0];
  console.log(firstWord);

  const [data, setData] = useState({
    name: "",
    email: "",
    typeOf: "",
    phone: "",
    state: "",
    city: "",
    password: "",
  });

  const [error, setError] = useState({});
  if (userObject?.data?.email) {
    router.push("/");
  }

  const [loading, setLoading] = useState(false);

  const onChangeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (error) {
      setError(validateForm(data));
    } else {
      setLoading(true);

      await axios
        .post("/api/user/sign-up", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          try {
            if (response) {
              toast("Account Created successfully✔️");

              console.log(response, "No Response");
              Cookies.set("user", JSON.stringify(response.data));
              setLoading(false);
            }
          } catch (error) {
            console.log(error);
            setLoading(false);
          } finally {
            setLoading(false);
          }
        });
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.mainBody}>
        <div className={styles.form}>
          <Form2
            loading={loading}
            error={error}
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
