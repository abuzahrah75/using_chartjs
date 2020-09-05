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
import Mydoughnut from './components/newcharts/mydoughnut'
import MyDynamicDoughnut from './components/newcharts/myDynamicDoughnut';
import MyScatter from './components/newcharts/myScatter'
// import MyMixData from './components/newcharts/myMixedData'
import RandomizedDataLineExample from './components/newcharts/randonDataLine'

//failed charts needed review :
// bubble chart
// Scatter chart
// mix data chart



// importing the graphs components

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
      <Mydoughnut />
      <MyDynamicDoughnut />
      <MyScatter />
      {/* <MyMixData /> */}
      <RandomizedDataLineExample />
    </div>
  );
}

export default App;
