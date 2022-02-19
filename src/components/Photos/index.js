import React from 'react';

export default function Photos() {
    async function sendApiRequest(){
        let Api_key = 'vSzasUGIBx0Y5AkvqtGmhvsdmqMfLnUeLjHMSf5u';
        let response = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${Api_key}`);
        console.log(response)
        let data = await response.json()
        console.log(data)
        return data
    }
    return (
        <>
        <br/>
        <div className="picOfDay">
            <h1>Picture of the day</h1>
        </div>
            <br/>
        <div class="container">
            <div>
                <br/>
                <h3>title</h3>
                <p>description</p>
                <p>date</p>
            </div>
            <div>Image</div>
        </div>
    </>
    );
}
