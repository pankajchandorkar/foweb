
import React from "react";
import { connect } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faSearch, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../styles/DropDown.scss";
{/* import {
    updateJobVehicleNo,
    updateJobCategory,
    updateJobDriver,
    updateJobConductor,
    updateJobStatus,
    updateEditTaskCategory,
    updateEditTaskType,
    updateEditTaskAsignee,
    updateEditTaskStatus,
    updateAddTaskCategory,
    updateAddTaskType,
    updateAddTaskAsignee,
    updateAddInvCategory,
    updateAddInvBrand,
    updateAddInvItem,
} from "../../redux/actionTypes.js"; */}



const DropDown = ({
    width,
    type,
    label,
    field,
    data,
    action,
    inputPlaceholder,
    searchPlaceholder,
    disabled,
    id,
    handelItemSelect,
    defaultValue
}) => {

    const defaultval = defaultValue != "" ? defaultValue : "";
    const listData = data ? data : ["one", "two"];
    const [showDrop, setShowDrop] = useState(false);
    const [focus, setFocus] = useState(false);
    const [blur, setBlur] = useState(true);
    const [list] = useState(listData);

    const [selectedItem, setSelectedItem] = useState(defaultval);
    const [searchInput, setSearchInput] = useState("");
    const [filteredLists, setFilteredLists] = useState([]);
    const dropRef = useRef(null);
    const searchInputRef = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropRef]);

    useEffect(() => {
        if (showDrop == true) {
            searchInputRef.current.focus();
        }
    }, [showDrop]);

    //for update selectedItem state value to defaultval from props
    useEffect(() => {
        setSelectedItem(defaultval);
    }, [defaultval]);

    useEffect(() => {
        if (searchInput !== "") {
            const filterData = list.filter((item) => {
                return Object.values(item)
                    .join("")
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
            });
            setFilteredLists(filterData);
        } else {
            setFilteredLists(list);
        }
    }, [searchInput])

    const handleClickOutside = (e) => {
        if (!(dropRef && dropRef.current && dropRef.current.contains(e.target))) {
            setShowDrop(false);
        }
    };

    const handleDrop = (e) => {
        setShowDrop(true);
        setSearchInput("");
    };

    const handleReset = (e) => {
        e.stopPropagation();
        setSelectedItem("");
        setInpVal("");
    }

    const handleDropItem = (e, el) => {
        e.stopPropagation();
        if (selectedItem !== el) {
            setSelectedItem(el);
            setInpVal(el);
        } else {
            setSelectedItem("");
            setInpVal("");
        }
        setShowDrop(false);

    };

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
    };

    const setInpVal = (val) => {
        if (handelItemSelect) {
            handelItemSelect(val);
        }
    };

    const labelTxyt =
        field === "compulsory" ? (
            <span>
                {label}
                <span style={{ color: "red", paddingLeft: "5px" }}>*</span>
            </span>
        ) : (
            label
        );
    return (
        <div
            className={`dropdown--wrapper ${disabled ? "disable" : ""}`}
            style={{ width: width }}
            ref={dropRef}
            onClick={handleDrop}
        >
            <input
                type="text"
                id={id}
                placeholder={inputPlaceholder}
                className={`inp--field ${disabled ? "disable" : ""}`}
                onFocus={() => {
                    setFocus(true);
                    setBlur(false);
                }}
                onBlur={() => {
                    setBlur(true);
                    setFocus(false);
                }}
                value={selectedItem}
                readOnly
            />
            {
                selectedItem !== "" &&
                <div className="times--icon" onClick={handleReset}>
                    <FontAwesomeIcon icon={faTimes} color={"#777"} />
                </div>
            }

            <div className="caret--icon">
                {showDrop ? (
                    <FontAwesomeIcon icon={faCaretUp} color={"#777"} />
                ) : (
                    <FontAwesomeIcon icon={faCaretDown} color={"#777"} />
                )}

            </div>
            <div className={`inp--label ${focus ? "active" : selectedItem && blur ? " filled" : ""}`}>
                {labelTxyt}
            </div>
            {showDrop && (
                <div className="drop--wrapper">
                    <div className="drop--search">
                        <input
                            type="text"
                            className="search"
                            placeholder={searchPlaceholder}
                            onChange={(e) => searchItems(e.target.value)}
                            ref={searchInputRef}
                        />
                        <div className="search--icon">
                            <FontAwesomeIcon icon={faSearch} color={"#777"} />
                        </div>
                    </div>
                    <div className="drop--content scroll">
                        {searchInput.length > 0 ? (
                            filteredLists.length > 0 ? (
                                filteredLists.map((el) => (
                                    <div
                                        key={el}
                                        className={`drop--item ${el === selectedItem ? "selected" : ""}`}
                                        onClick={(e) => handleDropItem(e, el)}
                                    >
                                        <div
                                            className={`search--checkbox ${el === selectedItem ? "checked" : ""
                                                }`}
                                        >
                                            {
                                                <span className="check">
                                                    <FontAwesomeIcon icon={faCheck} color={"#fff"} />
                                                </span>
                                            }
                                        </div>
                                        <div>{el}</div>
                                    </div>
                                ))
                            ) : (
                                <div className="not--found">No results found</div>
                            )
                        ) : (
                            list.map((el) => (
                                <div
                                    key={el}
                                    className={`drop--item ${el === selectedItem ? "selected" : ""
                                        }`}
                                    onClick={(e) => handleDropItem(e, el)}
                                >
                                    <div
                                        className={`search--checkbox ${el === selectedItem ? "checked" : ""
                                            }`}
                                    >
                                        {el === selectedItem && (
                                            <span className="check">
                                                <FontAwesomeIcon icon={faCheck} color={"#fff"} />
                                            </span>
                                        )}
                                    </div>
                                    <div>{el}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

{/* const mapStateToProps = (detail) => ({ detail });

const mapDispatchToProps = {
    updateJobVehicleNo,
    updateJobCategory,
    updateJobDriver,
    updateJobConductor,
    updateJobStatus,
    updateEditTaskCategory,
    updateEditTaskType,
    updateEditTaskAsignee,
    updateEditTaskStatus,
    updateAddTaskCategory,
    updateAddTaskType,
    updateAddTaskAsignee,
    updateAddInvCategory,
    updateAddInvBrand,
    updateAddInvItem,
};
export default connect(mapStateToProps, mapDispatchToProps)(DropDown); */}

export default DropDown;