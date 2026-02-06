import { useState } from "react";

function WeatherApp(){

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(""); 

    const API_KEY = "d801ffa33cde52695d5b9f9d96aa04c6";

    async function getWeather(){
        if(!city) return;

        setLoading(true);
        setError("");

        try{
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );

            if(!res.ok){
                throw new Error("City not Found");
            }

            const data = await res.json();
            setWeather(data);
            console.log(data);

        }catch(err){
            setError(err.message);
            setWeather(null);
        }

        setLoading(false);
    }

    return (
        <div style={styles.container}>

            <h2> Weather App </h2>
            {/* input */}
            <input type="text" placeholder="Enter the city name" value={city} onChange={(e)=>setCity(e.target.value)} style={styles.input}/>

            <button onClick={getWeather}>
                search
            </button>

            {/* loading */}

            {loading && <p>Loading ....</p>}

            {/* error*/}
            {error && (<p style={{color:"red"}}>{error}</p>)}

            {/* weather data */}

            {weather && (
                <div style={styles.card}>
                    <h3>
                        {weather.name},{" "}
                        {weather.sys.country}
                    </h3>
                    <h1>
                        {weather.main.temp}°C
                    </h1>

                    <p>
                        {weather.weather[0].description}
                    </p>

                    <p>
                        Humidity:{" "}
                        {weather.main.humidity}%
                    </p>
                    <p>
                        wind:{" "}
                        {weather.wind.speed} m/s
                    </p>
                </div>
            )}

        </div>
    );


}


const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
    },
    input: {
        padding: "10px",
        marginRight: "10px",
    },
    card: {
        marginTop: "20px",
        padding: "20px",
        background: "#f4f4f4",
        display: "inline-block",
    },
}

export default WeatherApp