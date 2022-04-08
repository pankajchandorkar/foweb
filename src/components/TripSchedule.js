import React from 'react'
import AminitiesSlider from "./AminitiesSlider";



const TripSchedule = () => {
    return (
        <div className="tripScheduleWrap">
            <div className="left-wrap">
                {/* row start*/}
                <div className="input-wrap">
                    <div className="col1 chartDate">
                        <div className="input-group">
                            <span className="group-span">Chart Date</span>
                            <input className="group-input" type="text" name="" id="input" placeholder="Chart Date" autoComplete='off' />
                            <button className="group-button">Load</button>
                        </div>
                    </div>
                    <div className="col2 startDate">
                        <div className="input-group">
                            <span className="group-span">Start Date</span>
                            <input className="group-input" type="text" name="" id="input" placeholder="Start Date" autoComplete='off' />
                        </div>
                    </div>
                    <div className="col3 endDate">
                        <div className="input-group">
                            <span className="group-span">End Date</span>
                            <input className="group-input" type="text" name="" id="input" placeholder="End Date" autoComplete='off' />
                        </div>
                    </div>
                </div>
                {/* row start*/}
                <div className="input-wrap">
                    <div className="col1">
                        <div className="input-group">
                            <span className="group-span">Chart Time</span>
                            <select className="group-select" id="tripSchTimeHr">
                                <option value="1">01</option>
                                <option value="2">02</option>
                                <option value="3">03</option>
                                <option value="4">04</option>
                                <option value="5">05</option>
                                <option value="6">06</option>
                                <option value="7">07</option>
                                <option value="8">08</option>
                                <option value="9">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <select className="group-select" id="tripSchTimeMin">
                                <option value="00">00</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                                <option value="51">51</option>
                                <option value="52">52</option>
                                <option value="53">53</option>
                                <option value="54">54</option>
                                <option value="55">55</option>
                                <option value="56">56</option>
                                <option value="57">57</option>
                                <option value="58">58</option>
                                <option value="59">59</option>
                            </select>
                            <select className="group-select" id="tripSchTimeHrForm">
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </div>
                    <div className="col2 code">
                        <div className="input-group">
                            <span className="group-span">Code</span>
                            <input className="group-input" type="text" name="" id="input" placeholder="Code" autoComplete='off' />
                        </div>
                    </div>
                    <div className="col3 suffix">
                        <div className="input-group">
                            <span className="group-span">Suffix</span>
                            <input className="group-input" type="text" name="" id="input" placeholder="Suffix" autoComplete='off' />
                        </div>
                    </div>
                </div>
                {/* row start*/}
                <div className="input-wrap">
                    <div className="col">
                        Runs:
                        <input className="tripSchRuns" type="radio" name="tripSchRuns" id="tripSchRuns-d" value="daily" />
                        <label htmlFor="tripSchRuns-d">Daily</label>
                        <input className="tripSchRuns" type="radio" name="tripSchRuns" id="tripSchRuns-a" value="alternative" />
                        <label htmlFor="tripSchRuns-a">Alternative</label>
                        <input className="tripSchRuns" type="radio" name="tripSchRuns" id="tripSchRuns-w" value="weekdays" />
                        <label htmlFor="tripSchRuns-w">Weekdays</label>
                        <div className="bkg-trip-week">

                            <input type="checkbox" class="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Mon" value="Mon" placeholder="name" />
                            <label htmlFor="tripSchWeekDay-Mon" className="lblClass-first">Mon</label>

                            <input type="checkbox" class="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Tue" value="Tue" placeholder="name" />
                            <label htmlFor="tripSchWeekDay-Tue">Tue</label>

                            <input type="checkbox" class="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Wed" value="Wed" placeholder="name" />
                            <label htmlFor="tripSchWeekDay-Wed">Wed</label>

                            <input type="checkbox" class="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Thu" value="Thu" placeholder="name" />
                            <label htmlFor="tripSchWeekDay-Thu">Thu</label>

                            <input type="checkbox" class="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Fri" value="Fri" placeholder="name" />
                            <label htmlFor="tripSchWeekDay-Fri">Fri</label>

                            <input type="checkbox" class="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Sat" value="Sat" placeholder="name" />
                            <label htmlFor="tripSchWeekDay-Sat">Sat</label>

                            <input type="checkbox" class="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Sun" value="Sun" placeholder="name" />
                            <label htmlFor="tripSchWeekDay-Sun" className="lblClass-last">Sun</label>
                        </div>
                    </div>
                </div>
                {/* row start*/}
                <div className="input-wrap">
                    <hr className="hr-line" />
                </div>
                <div className="input-wrap">
                    <div className="col">
                        <div className="chklbl-wrap">
                            <input type="checkbox" id="tripSchIsActive" class="tripSchProps" placeholder="name" />
                            <label htmlFor="tripSchIsActive">
                                Is Active
                            </label>
                        </div>
                        <div className="chklbl-wrap">
                            <input type="checkbox" id="tripSchNonRefundable" class="tripSchProps" />
                            <label htmlFor="tripSchNonRefundable">
                                Non-Refundable
                            </label>
                        </div>
                        <div className="chklbl-wrap">
                            <input type="checkbox" id="tripSchHasSTax" class="tripSchProps" placeholder="name" />
                            <label htmlFor="tripSchHasSTax">
                                Has GST
                            </label>
                        </div>
                        <div className="chklbl-wrap">
                            <input type="checkbox" id="tripSchAllowDynFareChange" class="tripSchProps" placeholder="name" />
                            <label htmlFor="tripSchAllowDynFareChange">
                                Allow Dynamic Fare Change
                            </label>
                        </div>
                        <div className="chklbl-wrap">
                            <input type="checkbox" id="tripSchAllowSeatEdit" class="tripSchProps" />
                            <label htmlFor="tripSchAllowSeatEdit">
                                Allow Online SeatEdit
                            </label>
                        </div>
                        <hr class="hrline" />
                        <div className="select-wrap">
                            <select id="idcoviddropdown" className="covidDropDown">
                                <option value="none">Disable Covid 19 Block</option>
                                <option value="static">Static</option>
                                <option value="dynamic">Dynamic</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="input-wrap">
                    <div className="col">
                        <div className="tripAminitiesWrap">
                            <AminitiesSlider/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-wrap">
                Chart Area
            </div>
        </div>
    )
}

export default TripSchedule