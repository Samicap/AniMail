import React from "react";
import { useState } from "react";
//import onClickOutside from "react-onclickoutside";

import "./customdropdown.css";

function CustomDropdown({ title, items = [], getAnimalSelected }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  CustomDropdown.handleClickOutside = () => setOpen(false);

  const handleOnClick = (item) => {
    console.log("item selected ", item.id);
    if (!selection.some((current) => current.id === item.id)) {
      setSelection([item]);
      getAnimalSelected(item.id);
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  };

  const isItemInSelection = (item) => {
    if (selection.find((current) => current.id === item.id)) {
      return true;
    }
    return false;
  };

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        {/* {console.log(selection.length)} */}
        {selection.length === 0 ? (
          <>
            <div className="dd-header__title">
              <p className="dd-header__title--bold">{title}</p>
            </div>
            {/* <div className="dd-action-header">
              <p>{open ? "Close" : "Open"}</p>
            </div> */}
          </>
        ) : (
          <>
            <div>
              <img
                src={selection[0].src}
                style={{ width: "50px", height: "auto" }}
              />
            </div>
            <div style={{ marginLeft: "0" }}>
              <p>{selection[0].name}</p>
            </div>
          </>
        )}

        {open && (
          <ul className="dd-list">
            {items.map((item) => (
              <li className="dd-list-item" key={item.id}>
                <button type="button" onClick={() => handleOnClick(item)}>
                  <img
                    src={item.src}
                    style={{ width: "50px", height: "auto" }}
                  />
                  <span
                    className={isItemInSelection(item) ? "selected" : undefined}
                  >
                    {" "}
                    {item.name}{" "}
                  </span>
                  {/* <span> {isItemInSelection(item) && "Selected"} </span> */}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => CustomDropdown.handleClickOutside,
};

export default onClickOutside(CustomDropdown, clickOutsideConfig);
