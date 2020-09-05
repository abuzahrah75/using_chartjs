import React from 'react';
import './App.css';

//my charts
import Myline from './components/newcharts/myline'
import Mybar from './components/newcharts/mybar'
import Mypie from './components/newcharts/mypie'
import HorizontalBar from './components/newcharts/horizontalbar'
import Myradar from './components/newcharts/myradar'
import MyPolar from './components/newcharts/polar'
import Mybubble from './components/newcharts/bubble'

// importing the graphs components
// import DoughnutExample from './doughnut';
// import DynamicDoughnutExample from './dynamic-doughnut';


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
      <Mybar />
      <Mypie />
      <HorizontalBar />
      <Myradar />
      <MyPolar />
      <Mybubble />
    </div>
  );
}

export default App;
