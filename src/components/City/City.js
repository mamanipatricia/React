import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';

import { useHistory } from 'react-router-dom';
const City = () => {
    let history = useHistory();
    const [listCities, setListCities] = useState([])

    const [cookies, setCookie] = useCookies(['MY_TOKEN']);

    useEffect(() => { //  esto se ejecuta una sola vez cuando el componente esa montado/renderizado ng onInit().
        console.log("I m a begginner")
        if (!hastoken()) {
            history.push('/login')
        } else {

            getCities()
        }
    }, [])

    const hastoken = () => {
        let myCookie = cookies['MY_TOKEN']
        return myCookie != '' && myCookie != null

    }

    const getCities = () => {

        axios.get("http://localhost:3000/city-tour/", {
            headers: {
                Authorization: `Bearer ${cookies['MY_TOKEN']}`
            }
        })
            .then(response => {
                const cities = response.data; // backend
                setListCities(cities)
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name Tour</th>
                        <th>Depart</th>
                        <th>Arrive</th>
                        <th>Available</th>
                        <th>Quantity</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listCities.map(city => {
                            return (
                                <tr>
                                    <td>{city.nameTour}</td>
                                    <td>{city.depart}</td>
                                    <td>{city.arrive}</td>
                                    <td>{city.quantity - city.filled}</td>
                                    <td>{city.quantity}</td>
                                    <td>{city.description}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>

    )
}
export default City