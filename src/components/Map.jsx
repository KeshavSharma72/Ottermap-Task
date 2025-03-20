import React, { useEffect, useState } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import 'ol/ol.css';
import { Draw, Modify } from 'ol/interaction';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { fromLonLat } from 'ol/proj';

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [drawInteraction, setDrawInteraction] = useState(null);
  const [isDrawingActive, setIsDrawingActive] = useState(false); // Track if drawing is active

  useEffect(() => {
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const mapObject = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
          }),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2,
      }),
    });

    // Create draw interaction for polygons
    const draw = new Draw({
      source: vectorSource,
      type: 'Polygon',
    });

    // Create and add modify interaction for editing polygons
    const modifyInteraction = new Modify({ source: vectorSource });
    mapObject.addInteraction(modifyInteraction);

    setMap(mapObject);
    setDrawInteraction(draw);

    return () => mapObject.setTarget(null);
  }, []);

  // Function to toggle drawing mode (Add/Remove Draw Interaction)
  const toggleDraw = () => {
    if (isDrawingActive) {
      map.removeInteraction(drawInteraction);
    } else {
      map.addInteraction(drawInteraction);
    }
    setIsDrawingActive(!isDrawingActive); // Toggle drawing state
  };

  // Function to delete all polygons
  const clearPolygons = () => {
    const vectorSource = map.getLayers().getArray()[1].getSource();
    vectorSource.clear(); // Clear all drawn features
  };

  return (
    <div>

      <div id="map" style={styles.map}></div>

      <div style={styles.controls}>
        <button onClick={toggleDraw}>
          {isDrawingActive ? 'Stop Drawing' : 'Draw Polygon'}
        </button>
        <button onClick={clearPolygons}>Clear Polygons</button>
      </div>
    </div>
  );
};

const styles = {
  map: {
    width: '100%',
    height: '600px',
    marginBottom: '20px',
  },
  controls: {
    textAlign: 'center',
  },
};

export default MapComponent;
