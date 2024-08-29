import { React, useState } from "react";
import './index.css'
import location from "../../assets/location.png"
import calendar from "../../assets/calendar.png"
import people from "../../assets/people.png"
import InputField from "../inputFields";

export default function MainSearchBar() {
    const handleInputChange = (newValue) => {
        console.log('Input value changed:', newValue);
    };

    const [activeButton, setActiveButton] = useState(1)
    return (
        <div className="mainSearchBar">
            <div className="selectors_section">
                {/* <button className={activeButton===0?"active":""} onClick={()=>{
                    setActiveButton(0);
                }}>
                    Hotel
                </button> */}
                <button className={activeButton===1?"active":""} onClick={()=>{
                    setActiveButton(1);
                }}>
                    Tours
                </button>
                <button className={activeButton===2?"active":""} onClick={()=>{
                    setActiveButton(2);
                }}>
                    Activity
                </button>
            </div>
            {activeButton === 0 ? <div className="search_bar_main">

                <div className="destination search_bar_main_1">
                    <img src={location} alt="" srcset="" />
                    <InputField
                        label="Destination"
                        placeholder="Where are you going?"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="check_in_out search_bar_main_1">
                    <img src={calendar} alt="" srcset="" />
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column" }}>
                        <label>
                            From - To
                        </label>
                        <div className="dateRange">
                            08/28/2024 - 08/28/2024
                        </div>
                    </div>
                </div>
                <div className="guests search_bar_main_1">
                    <img src={people} alt="" srcset="" />
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column" }}>
                        <label>
                            Guests
                        </label>
                        <div className="totalGuests">
                            1 Adult - 0 Children
                        </div>
                    </div>
                </div>
                <div className="advance search_bar_main_1">
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column" }}>
                        <label>
                            Advance
                        </label>
                        <div className="totalGuests">
                            More
                        </div>
                    </div>
                    <button>
                        Search
                    </button>
                </div>


            </div> :
                activeButton === 1 ?
                    <div className="search_bar_main">

                        <div className="destination search_bar_main_1">
                            <img src={location} alt="" srcset="" />
                            <InputField
                                label="Destination"
                                placeholder="Where are you going?"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="check_in_out from_to search_bar_main_1">
                            <img src={calendar} alt="" srcset="" />
                            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column" }}>
                            <label>
                            From - To
                        </label>
                        <div className="dateRange">
                            mm/dd/yyyy - mm/dd/yyyy
                        </div>
                            </div>
                        </div>
                        <div className="advance search_bar_main_1">
                            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column" }}>
                                <label>
                                    Advance
                                </label>
                                <div className="totalGuests">
                                    More
                                </div>
                            </div>
                            <button>
                                Search
                            </button>
                        </div>


                    </div>
                    : activeButton === 2 ? <div className="search_bar_main">

                        <div className="destination search_bar_main_1">
                            <img src={location} alt="" srcset="" />
                            <InputField
                                label="Destination"
                                placeholder="Where are you going?"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="check_in_out from_to search_bar_main_1">
                            <img src={calendar} alt="" srcset="" />
                            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column" }}>
                            <label>
                            From - To
                        </label>
                        <div className="dateRange">
                            mm/dd/yyyy - mm/dd/yyyy
                        </div>
                            </div>
                        </div>
                        <div className="advance search_bar_main_1">
                            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column" }}>
                                <label>
                                    Advance
                                </label>
                                <div className="totalGuests">
                                    More
                                </div>
                            </div>
                            <button>
                                Search
                            </button>
                        </div>


                    </div> : <></>}
        </div>
    )
}