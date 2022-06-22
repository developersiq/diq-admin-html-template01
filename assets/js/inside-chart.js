window.onload = function () { 
    // Line chart 015
    var chart015 = new CanvasJS.Chart("linechartContainer_015",
    {
      axisX:{
        gridThickness: 0,
        tickLength: 2,
        valueFormatString: "MMM",
        lineThickness:0.2,
      },
      axisY:{
        gridThickness: 0,
        tickLength: 2,
        valueFormatString: "0.#",
        lineThickness:0.2,
 
      },
      animationEnabled: true,
       data: [{        
        // yValueFormatString: "#,### Units",
        type: "splineArea",
        color:"#ff5528",
        markerType: "none",
        fillOpacity:0.3,
        
        dataPoints: [      
          { x: new Date(2000,0), y: 0 },
          { x: new Date(2000,2), y: -10 },
          { x: new Date(2000,3), y: 20 },
          { x: new Date(2000,4), y: -30 },
          { x: new Date(2000,5), y: 40 },
          { x: new Date(2000,6), y: -50 },
        ]
      }       
        
      ]
    });

    chart015.render();

    // Line chart 016
    var chart016 = new CanvasJS.Chart("linechartContainer_016",{
      animationEnabled: true,
      axisX:{
        gridThickness: 0,
        tickLength: 2,
        valueFormatString: "MMM",
        lineThickness:0.2,
      },
      axisY:{
        gridThickness: 0,
        tickLength: 2,
        valueFormatString: "0.#",
        lineThickness:0.2,
 
      },
      animationEnabled: true,
       data: [{        
        // yValueFormatString: "#,### Units",
        type: "splineArea",
        color:"#ff5528",
        markerType: "none",
        fillOpacity:0.3,
        
        dataPoints: [      
          { x: new Date(2000,0), y: 0 },
          { x: new Date(2000,2), y: 80 },
          { x: new Date(2000,3), y: 20 },
          { x: new Date(2000,4), y: 70 },
          { x: new Date(2000,5), y: 90 },
          { x: new Date(2000,6), y: 20 },
          { x: new Date(2000,7), y: 80 },
        ]
      }       
        
      ]
    });

    chart016.render();

    // Line chart 017
    var chart017 = new CanvasJS.Chart("linechartContainer_017",
    {
      axisX:{
        gridThickness: 0,
        tickLength: 2,
        valueFormatString: "MMM",
        lineThickness:0.2,
      },
      axisY:{
        gridThickness: 0,
        tickLength: 2,
        valueFormatString: "0.#",
        lineThickness:0.2,
 
      },
      animationEnabled: true,
       data: [{        
        // yValueFormatString: "#,### Units",
        type: "splineArea",
        color:"#ff5528",
        markerType: "none",
        fillOpacity:0.3,
        
        dataPoints: [      
          { x: new Date(2000,0), y: 0 },
          { x: new Date(2000,2), y: 4 },
          { x: new Date(2000,4), y: 7 },
          { x: new Date(2000,5), y: 10 },
          { x: new Date(2000,6), y: 20 },
          { x: new Date(2000,7), y: 40 },
        ]
      }       
        
      ]
    });

    chart017.render();
    
    // Line chart 018

    var chart018 = new CanvasJS.Chart("doughnutchartContainer_018", {
      animationEnabled: true,
      title:{
        // text: "Top Categories",
        // horizontalAlign: "left",
      },
      data: [{
        type: "doughnut",
        showInLegend: true,
        // startAngle: 60,
        // innerRadius: 60,
        // indexLabelFontSize: 17,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
              
          { y: 25, label: "Kids", name: "Kids", color:"#3b2231"},
          { y: 10, label: "Women", name: "Women", color:"#fff9f6" },
          { y: 30, label: "Men", name: "Men", color:"#fdd5c7" },
          { y: 12, label: "Furniture", name: "Furniture", color:"#ff5528" },
        ]
      }]
    });
    chart018.render();

    // Line chart 019

    var chart019 = new CanvasJS.Chart("chartContainer_019", {
      zoomEnabled: true,
      panEnabled: true,
      data: [
      {
        type: "column",
        color: "000",
        dataPoints: [
        { x: 1, y: 10 },
        { x: 2, y: 15 },
        { x: 3, y: 25 },
        { x: 4, y: 30 },
        { x: 5, y: 28 },
        { x: 6, y: 10 },
        { x: 7, y: 15 },
        { x: 8, y: 25 },
        { x: 9, y: 30 },
        { x: 10, y: 28 },
        { x: 11, y: 10 },
        { x: 12, y: 15 },
        { x: 13, y: 25 },
        { x: 14, y: 30 },
        { x: 15, y: 28 },
        { x: 16, y: 10 },
        { x: 17, y: 15 },
        { x: 20, y: 25 },
        { x: 21, y: 30 },
        { x: 25, y: 28 },
        { x: 26, y: 10 },
        { x: 27, y: 15 },
        { x: 28, y: 25 },
        { x: 30, y: 30 },
        { x: 40, y: 28 }
        ]
      }
      ]
    });

    chart019.render();

    // Line chart 020
    var chart020 = new CanvasJS.Chart("chartContainer_020",
    {
      animationEnabled: true, // change to false
      // title:{
      //   text: "Animation Enabled"
      // },
      data: [
      {
        type: "doughnut",
        showInLegend: true,
        // startAngle: 60,
        // innerRadius: 60,
        // indexLabelFontSize: 17,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
       dataPoints: [
        { x: 10, y: 289.42, label: "Last Week", name: "Last Week", color:"#3b2231" },
        { x: 20, y: 856.14, label: "Last Month", name: "Last Month", color:"#ff5528"},
        { x: 30, y: 987.25, label: "Last Year", name: "Last Year", color:"#fdd5c7"},
       ]
     }
     ]
   });

    chart020.render();
}