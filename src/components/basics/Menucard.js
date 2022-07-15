import React from "react";

export const Menucard = ({ menuData }) => {
return (
    <>
    <section className="main-card--cointainer">
    {menuData.map((currEle) => {
        const {id, name, category, description, price, image} = currEle;  //destructuring
        return (
        <div className="card-container" key={currEle.id}>
            <div className="card">

            <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author subtle">{category}</span>
                <h2 className="card-title"> {name}</h2>
                <span className="card-discription subtle">
                {description}
                </span>
                <div className="card-read"> {price}</div>
            </div>
            <img src={image} alt="" />
            <span className="card-tag subtle">Order Now</span>
            </div>
        </div>
        );
    })}
    </section>
    </>
);
};
