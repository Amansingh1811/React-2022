import React from "react";
import Menu from "./menuApi";
import { Menucard } from "./Menucard";
import { Navbar } from "./Navbar";
import "./Restaurant.css";

const uniquelist = [...new Set(Menu.map((currEle) => {
    return currEle.category;
})
),
"All"
]
console.log(uniquelist);
const Restaurant = () => {
    // const myStyle = {color: "black"}
    const [menucard, setmenucard] = React.useState(Menu)
    const [navlist] = React.useState(uniquelist)

    const filteritem = (category) => {
        if(category==="All"){
            return setmenucard(Menu)
        }
        const updatedList = Menu.filter((currEle) => {
            return currEle.category === category
        })
        setmenucard(updatedList)
    }
    return (
        <>
            <Navbar filteritem = {filteritem} navlist = {navlist} />
            <Menucard menuData={menucard} />
            {/* props */}
        </>
    )
}

export default Restaurant;