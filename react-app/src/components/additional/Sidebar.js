import React from "react";
import "../../index.css"
import SideChats from "../additional/SideChats"
import { Avatar } from "@material-ui/core"
import { useSelector } from "react-redux"


function SideBar() {
const sessionUser = useSelector((state) => state?.session?.user);





    return (
        <div className="sidebar">
            <div className="topBar">
                <Avatar />
                <h2 className="avfont2">{sessionUser?.username}</h2>
            </div>
            <div className="sideSearch">
                <div className="searchBar">
                    <input placeholder="Search for a Chat..." type="text" />
                </div>
            </div>
            <div className="sideChats">
                <SideChats addNewChat />
                <SideChats />
                <SideChats />
                <SideChats />
                <SideChats />
                <SideChats />



            </div>

        </div>
    )



}

export default SideBar
