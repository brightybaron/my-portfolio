// NavFilter.jsx
import { useState } from "react";

function NavFilter() {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  const tabs = ["everything", "photos", "projects", "posts"];

  return (
    <>
      {tabs.map((tab, index) => (
        <button
          key={index}
          id={tab + "-tab"}
          className={`tab-button capitalize ${
            activeTab === index ? "text-gray-900" : " text-gray-400"
          }`}
          onClick={() => handleClick(index)}
          data-filter={tab === "everything" ? "*" : "." + tab}
        >
          {tab}
        </button>
      ))}
    </>
  );
}

export default NavFilter;
