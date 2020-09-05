import React from 'react';
import './App.css';

//my charts
import Myline from './components/newcharts/myline'
import Mybar from './components/newcharts/mybar'
import Mypie from './components/newcharts/mypie'
import HorizontalBar from './components/newcharts/horizontalbar'
import Myradar from './components/newcharts/myradar'
// importing the graphs components
// import DoughnutExample from './doughnut';
// import DynamicDoughnutExample from './dynamic-doughnut';
// import RadarExample from './radar';
// import PolarExample from './polar';
// import BubbleExample from './bubble';
// import ScatterExample from './scatter';
// import MixedDataExample from './mix';
// import RandomizedDataLineExample from './randomizedLine';
// import CrazyDataLineExample from './crazyLine';
// import LegendOptionsExample from './legend-options';
// import LegendHandlersExample from './legend-handlers';

function App() {
  return (
    <div className="App">
       <Myline />
      {/* <LineExample /> */}
      <Mybar />
      <Mypie />
      <HorizontalBar />
      <Myradar />
    </div>
  );
}

export default App;
