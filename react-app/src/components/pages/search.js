import React, {useState, useEffect} from "react";
import { useHistory, } from "react-router-dom";
import '../../index.css'

const Search = () => {
    let history = useHistory();


return (
    <div className="searchPage">
        <div className="SearchTopHalf">
            <div className="SearchTopLeft"></div>
            <div className="SearchTopRight"></div>
        </div>
        <div className="SearchBottomHalf">
            <div className="SearchLeftSection"></div>
            <div className="SearchMiddleSection"></div>
            <div className="SearchRightSection"></div>
        </div>
    </div>
)
}
export default Search
