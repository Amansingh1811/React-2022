import React from "react";

export const Navbar = ({ filteritem, navlist }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {
          navlist.map((currEle) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filteritem(currEle)}
              >
                {currEle}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
