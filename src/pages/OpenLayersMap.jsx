import React, { useEffect, useState } from "react";
import Greet from "../components/Greet";
import Map from "../components/Map";

export default function ContainerComponent() {
  const [containerWidth, setContainerWidth] = useState(getContainerWidth());

  // Function to calculate the width based on screen size
  function getContainerWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1024) {
      // PC screen size (width > 1024px)
      return "60vw";
    } else {
      // Mobile screen size (width <= 1024px)
      return "80vw";
    }
  }

  useEffect(() => {
    // Update width on window resize
    function handleResize() {
      setContainerWidth(getContainerWidth());
    }

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="container" style={{ ...styles.container, width: containerWidth }}>
        <Greet />
        <Map />
      </div>
    </>
  );
}

const styles = {
  container: {
    margin: '0 auto', // Center align the container horizontally
  }
};
