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
                <Avatar src={`https://avatars.dicebear.com/api/human/699.svg`} />
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




            </div>

        </div>
    )



}

export default SideBar
