import React from 'react'
import Simple from "../layout/simple"
import PaymentForm from "../components/PaymentForm"
import UserData from "../assets/json/generated.json"
import SearchResults from "../components/SearchResults"


const Payment = (props) => {
    console.log(UserData[0].username)
    return (
        <Simple>
             <PaymentForm papercolor="blue"/>

        </Simple>
    )
}

export default Payment
