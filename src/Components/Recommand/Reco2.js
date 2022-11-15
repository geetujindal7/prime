import React, { useEffect, useState } from "react";
import styles from "../../../styles/Element.module.css";
import MouseHover from "../../Components/MouseHover";

function Reco2({ element, index }) {
  const [isHover, setisHover] = useState();

  const handleMouseOver = () => {
    setisHover(true);
  };

  const handleMouseOut = () => {
    setisHover(false);
  };
  return (
    <div
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
      key={index}
    >
      <ul>
        {index % 2 !== 0 && (
          <li>
            {isHover ? (
              <MouseHover id={element.id} />
            ) : (
              <img
                className={styles.image_container}
                src={element.image}
                alt=""
              />
            )}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Reco2;
