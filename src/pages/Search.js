import React from 'react'
import Simple from "../layout/simple"
import SearchForm from "../components/SearchForm"
import UserData from "../assets/json/generated.json"
import SearchResults from "../components/SearchResults"


const Home = (props) => {
    console.log(UserData[0].username)
    return (
        <Simple>
             <SearchForm papercolor="blue"/>
<SearchResults users={UserData} />
        </Simple>
    )
}

export default Home
