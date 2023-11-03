import React from 'react'
const dashboard=React.lazy(()=>import('../component/dashboard/Dahsboard'))
const performance=React.lazy(()=>import('../component/performance/Performance'))
const profile=React.lazy(()=>import('../component/profile/Profile'))


const appRoute=[
    {
        to:"/dashboard",
        element:dashboard,
        value:true
    },
    {
        to:"/performance",
        element:performance,
        value:false
    },
    {
        to:"/profile",
        element:profile,
        value:false
    }
]

export default appRoute