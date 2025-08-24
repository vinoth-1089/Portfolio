import React from 'react'
import { useState, useEffect } from 'react'


const useFetch = () => {

    const [feed, setfeed] = useState([])
    const [profile,setprofile] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/Posts")
            .then(data => {
                if (!data.ok) {
                    throw new Error("Network Issues")
                }
                return data.json();
            })
            .then(data => setfeed(data))
            .catch(error => console.log(error))

    }, [])


    useFetch(()=>{
        fetch("http://localhost:3000/profile")
        .then((data)=>{
            return data.json();
        })
        .then(data=>setprofile(data))
        .catch(error=>console.log(error))
    })

    return ({feed,profile});

}
export default useFetch