import "./SneakerPanel.scss";
import React from "react";

const SneakerPanel = () => {
  const sortItems = ["Price", "Count"];
  const [active, setActive] = React.useState(false);
  const handleActive = () => {
    setActive((active) => !active);
  };

  return (
    <>
      <div className="panel-wrapper">
        <h2>All sneakers</h2>
        <div>
          <p onClick={() => handleActive()}>Sorted by:{123}</p>
          {active ?? (
            <div className="sort-list">
              <ul className>
                {sortItems.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default SneakerPanel;
