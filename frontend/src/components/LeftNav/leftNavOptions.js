import React from "react";



const LeftNavOptions = [
    {
        title: "Dashboard",
        icon: <i></i>,
        link: "/",
        submenu:[ {
            title: "All Dashboard",
            icon: <i></i>,
            link: "/"
        },
        {
            title: "Project",
            icon: <i></i>,
            link: "/"
        },
        {
            title: "Task",
            icon: <i></i>,
            link: "/"
        },
    ]
    },
    
    {
        title: "Tickets",
        icon: <i></i>,
        link: "/settings"
    },
    {
        title: "Workspace",
        icon: <i></i>,
        link: "/profile"
    },
    {
        title: "Projects",
        icon: <i></i>,
        link: ""
    },
    {
        title: "Tasks",
        icon: <i></i>,
        link: ""
    },
    {
        title: "Reports",
        icon: <i></i>,
        link: ""
    },
    {
        title: "Admin",
        icon: <i></i>,
        link: ""
    }
]

export default LeftNavOptions;