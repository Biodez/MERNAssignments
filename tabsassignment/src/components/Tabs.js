import React, { useState } from 'react';
import FirstTab from './AllTabs/FIrstTab';
import SecondTab from './AllTabs/SecondTab';
import ThirdTab from './AllTabs/ThirdTab';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Tab1")

    const handleTab1 = () => {
        setActiveTab("Tab1");
    }

    const handleTab2 = () => {
        setActiveTab("Tab2");
    }

    const handleTab3 = () => {
        setActiveTab("Tab3");
    }

    return (
        <div className = "Tabs">
            <ul className = "nav">
                <li onClick={handleTab1} className = {activeTab === "Tab1" ? "active" : ""}>Tab 1</li>
                <li onClick={handleTab2} className = {activeTab === "Tab2" ? "active" : ""}>Tab 2</li>
                <li onClick={handleTab3} className = {activeTab === "Tab3" ? "active" : ""}>Tab 3</li>
            </ul>
            <div className = "outlet">
                {activeTab === "Tab1" ? <FirstTab /> : <SecondTab />}
                {activeTab === "Tab3" && <ThirdTab />}
            </div>
        </div>
    );
}
export default Tabs;