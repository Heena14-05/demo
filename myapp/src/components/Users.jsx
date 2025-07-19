import React, {useState } from "react";

export default function Users() {
    let [data, setData] =useState ([]);

    const handleSubmit= () => {
        fetch("https;//jsonplaceholder.typicode.com/todos")
        .then((res)=> res.json())
        .then((result)=> {
            console.log(result);
            let users = result = {} ? []: [result];
            setData(users);
        })
        .catch((err)=> console.log(err));
    };
    //console.log(data);
    return (
        <div>
            <h1>this is users</h1>
            {data.length >0 ? (
                <div>
                    <ul>
                        <li key={data[0].id}>
                            {""}
                            {data[0].title}
                        </li>
                    </ul>
                </div>
            ): (
                <div> there is no user</div>
            )}
            <button onClick={handleSubmit}> Fetch Data</button>
        </div>
    );
}