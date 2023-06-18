"use client"

import Form from "@/components/Form";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/sell.module.css";


const SellCar = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        address: "",
        date: "",
        time: "",
    })

    const [loading, setLoading] = useState(false)

    const onChangeData = (e) => {

        setData({...data, [e.target.name]:e.target.value})

    }

    const onSubmit =async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(data)
        await fetch("/api/sell",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
          }
        }).then((response) => {
            try {
                if (response.ok) {
                    console.log(response.data)
                    setLoading(false)
                }
            } catch (error) {
                console.log(error)
                setLoading(false)
            } finally {
                setLoading(false)
                
            }
        })
    }
    return (
        <main className={styles.main}>
            <div className={styles.mainBody}>
                <div  className={styles.text}>
                    <h2>Selling your car has never been easier and more reliable.</h2>
                    <p>Don't wait any longer when our extensive network of buyers and sellers is ready to find the ideal new owner for your car.</p>
                    <Image
            src="/images/car1.png"
            width={300}
            height={250}
          />

                </div>
                <div  className={styles.form}>
              <Form loading={loading} styling={styles} onSubmit={onSubmit} onChangeData={onChangeData} />
                    
                    
                </div>
                

            </div>

        </main>
    )
}

export default SellCar