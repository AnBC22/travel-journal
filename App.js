import React from "react"
import data from "./data"
import Navbar from "./components/Navbar"
import Location from "./components/Location"

export default function App() {

    const places = data.map((place) => {
        return <Location
                    key={place.imageUrl}
                    {...place}
                />
    })
    
    return (
        <div>
            <Navbar />
            <main>
                {places}
            </main>
        </div>
    )
}
