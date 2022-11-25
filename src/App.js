import React from 'react';
import './style.css';
//ips/array=radius
export default function App() {
  const Radii = [50, 100, 150, 200, 250, 300, 350];
  const colors = ['voilet', 'indigo', 'orange', 'red', 'green', 'pink', 'grey'];
  const indexArray = Radii.map((radi,index)=>index+1);
  

  console.log(Radii);
  return (
    <div>
      <h1>Concentric Rainbow!!</h1>
      <div className="parent">
        <div>{Radii[0]}</div>
        {Radii.sort((a, b) => b - a).map((radius, index) => {
          return (
            <div
              key={radius}
              className="concentricCircle flex-mid"
              style={{
                background: colors[index],
                width: radius / 2 + 'px',
                height: radius / 2 + 'px',
              }}
            >
              {
                
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}
