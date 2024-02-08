import React from "react";
import { FcTemplate } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";




const LeftNavOptions = [
    {
        title: "Dashboard",
        icon: <i></i>,
        link: "/",
        submenu:[ {
            title: "All Dashboard",
            icon: <FcTemplate />,
            link: "/"
        },
        {
            title: "Project",
            icon: <FcDocument />,
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