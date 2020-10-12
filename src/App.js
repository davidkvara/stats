import React, { useEffect, useState } from "react";
import { mapCovData } from "./utils/mapData";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(
      "https://services.arcgis.com/5T5nSi527N4F7luB/arcgis/rest/services/COVID_19_Historic_cases_by_country_pt_v7_view/FeatureServer/0/query?where=ISO_3_CODE%3D%27geo%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=date_epicrv%2CADM0_NAME%2CShort_Name_AR%2CShort_Name_ZH%2CShort_Name_RU%2CShort_Name_ES%2CShort_Name_FR%2CISO_3_CODE%2CNewCase%2CCaseLast7Days%2CCaseLast7DaysChange%2CCumCase%2CCumCasePop%2CNewDeath%2CDeathLast7Days%2CDeathLast7DaysChange%2CCumDeath%2CCumDeathPop%2CISO_2_CODE%2CWHO_REGION&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=4326&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=true&orderByFields=date_epicrv+desc&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token="
    )
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          // console.log(result.features.splice(0, 5));
          setItems(mapCovData(result.features.splice(0, 5)));
        },

        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    // console.log(items);
    return (
      <div className="App">
        <header className="App-header">
          <pre>{JSON.stringify(items, null, 2)}</pre>
        </header>
      </div>
    );
  }
}

export default App;
