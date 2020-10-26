import React, { useEffect, useState } from "react";
import "./App.css";
import { mapCovData, apiURL } from "./utils/mapData";

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(apiURL)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          // console.log(result.features.splice(0, 5));
          setItems(mapCovData(result.features.splice(0, 1)));
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
    const currentDate = new Date();
    return (
      <div className="App pg-width">
        <div className="pagehead">
          <h1 className="h2">COVID-19-ის სტატისტიკა საქართველოში</h1>
        </div>
        <div className="stat-container">
          <div className="metadata">
            ბოლო განახლება:{" "}
            <b>
              {currentDate.toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </b>
          </div>
          <br />
          <br />
          {items.map(item => (
            <div key={item.id} className="grid">
              <article className="class list emergency ">
                <div className="content mb-3">
                  <div className="h1 text-bold">{item.newCases}</div>
                  <div className="content text-bold">ახალი შემთხვევა</div>
                </div>
              </article>
              <article className="class list emergency ">
                <div className="content mb-3">
                  <div className="h1 text-bold">{item.deathToday}</div>
                  <div className="content text-bold">გარდაცვლილი</div>
                </div>
              </article>
              <article className="class list emergency ">
                <div className="content mb-3">
                  <div className="h1 text-bold">{item.cases}</div>
                  <div className="content text-bold">
                    სულ დადასტურებული შემთხვევა
                  </div>
                </div>
              </article>
              <article className="class list emergency ">
                <div className="content mb-3">
                  <div className="h1 text-bold">{item.death}</div>
                  <div className="content text-bold">სულ გარდაცვლილი</div>
                </div>
              </article>
            </div>
          ))}
        </div>
        <a href="https://www.who.int/countries/geo/">who.int/countries/geo/</a>
      </div>
    );
  }
}

export default App;
