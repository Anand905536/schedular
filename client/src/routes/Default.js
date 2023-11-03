import React, { useEffect } from 'react'
import appRoute from './Route'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import Wrong from './wrong404'

const Default = () => {
    const [state, setState] = useState("")
    const [element, setElement] = useState("")
    const [arr, setArr] = useState([])

    return (
        <>
            <Header />
            <Routes>
                {appRoute.map((route, idx) => {
                    return (
                        route.element && (
                            <Route
                                key={idx}
                                path={route.to}
                                element={<route.element />}
                            />
                        )
                    )
                })}
                 <Route path="*" element={<Wrong/>}/>
            </Routes>
            <Footer />
        </>
    )
}

export default Default