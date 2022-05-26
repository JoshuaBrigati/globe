import "./styles.css";
import Globe from "react-globe.gl";
import arcsData from "./data";
import places from "./places";
import { useRef, useState, useEffect } from "react";
export default function App() {
  const globeEl = useRef();

  return (
    <div className="App">
      <button
        onClick={() => {
          globeEl.current.pointOfView({ lat: 0, lng: -500 }, 20000);
          // globeEl.current.pointOfView({ lat: 0, lng: 170 }, 10000);
        }}
      >
        test
      </button>
      <Globe
        pointOfView
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        // edges
        arcsData={arcsData}
        arcColor={"color"}
        //arcDashLength={() => 0.5}
        arcDashGap={(d) => 1 - (d.stroke - 0.1)}
        arcDashAnimateTime={(d) => 5000}
        arcStroke={"stroke"}
        //arcCircularResolution={64}
        // arcLabel={() => "test"}
        // labels
        labelsData={places}
        labelLat={(d) => d.lat}
        labelLng={(d) => d.lng}
        labelText={(d) => d.name}
        labelSize={(d) => 0.5 + d.size}
        labelDotRadius={(d) => 0.5 + d.size}
        labelColor={() => "rgba(255, 165, 0, 0.75)"}
        labelResolution={2}
      />
    </div>
  );
}
