
window.onload = function () {
    // Line chart 01
    var chart01 = new CanvasJS.Chart("linechartContainer_01", {
      animationEnabled: true,
      data: [{
        yValueFormatString: "#,### Units",
        xValueFormatString: "YYYY",
        type: "spline",
        color:"#ff5528",
        dataPoints: [
          
          {x: new Date(2003, 0), y: 200},
          {x: new Date(2004, 0), y: 300},
          {x: new Date(2005, 0), y: 600},
          {x: new Date(2006, 0), y: 600},
          {x: new Date(2007, 0), y: 200},
          {x: new Date(2008, 0), y: 100},
          {x: new Date(2009, 0), y: 200},
          {x: new Date(2010, 0), y: 700},
        ]
      }]
    });
    chart01.render();

    // Line chart 02
    var chart02 = new CanvasJS.Chart("linechartContainer_02", {
      animationEnabled: true,
      data: [{
        yValueFormatString: "#,### Units",
        xValueFormatString: "YYYY",
        type: "spline",
        color:"#ff5528",
        dataPoints: [
          
          {x: new Date(2003, 0), y: 200},
          {x: new Date(2004, 0), y: 300},
          {x: new Date(2005, 0), y: 600},
          {x: new Date(2008, 0), y: 100},
          {x: new Date(2009, 0), y: 600},
          {x: new Date(2010, 0), y: 700},
        ]
      }]
    });
    chart02.render();

    // Line chart 03
    var chart03 = new CanvasJS.Chart("linechartContainer_03",{
      animationEnabled: true,
       data: [{        
        yValueFormatString: "#,### Units",
        xValueFormatString: "YYYY",
        type: "spline",
        color:"#ff5528",
        
        dataPoints: [
        { x: new Date(2012, 00, 1), y: 1352 },
        { x: new Date(2012, 01, 1), y: 1514 },
        { x: new Date(2012, 02, 1), y: 1321 },
        { x: new Date(2012, 03, 1), y: 1163 },
        { x: new Date(2012, 04, 1), y: 950 },       
        ]
      }       
        
      ]
    });

    chart03.render();

    //bar chart
    var chart04 = new CanvasJS.Chart("chartContainer_04",
    {
      theme: "light2",
      
      axisX: {
      },
      
      axisY: [
       {
         lineColor: "#4F81BC",
         tickColor: "#4F81BC",
         labelFontColor: "#4F81BC",
         titleFontColor: "#4F81BC",
         lineThickness: 2
      },
      {
         lineColor: "#C0504E",
         tickColor: "#C0504E",
         labelFontColor: "#C0504E",
         titleFontColor: "#C0504E",
         lineThickness: 2
      }
    ],
      
    data: [
      {
        type: "column",
        type: "column",  
        showInLegend: true,
        color:"#000",
        legendText: "Total Sale",
        dataPoints: [
          { x: 1, y: 6, label: "Feb" },
          { x: 2, y: 2, label: "Mar" },
          { x: 3, y: 5, label: "Apr" },
          { x: 4, y: 7, label: "Jun" },
          { x: 5, y: 1, label: "Jul" },
          { x: 6, y: 5, label: "Aug" },
          { x: 7, y: 4, label: "Sep" },
          { x: 8, y: 2, label: "Oct" },
          { x: 9, y: 2, label: "Nav" }
        ]
     },
     {
       type: "column",  
        showInLegend: true,
        color:"#ff5528",
        legendText: "Customers",
       axisYIndex: 1,
       dataPoints: [      
         { x: 1, y: 70 },
         { x: 2, y: 45 },
         { x: 3, y: 56 },
         { x: 4, y: 77 },
         { x: 5, y: 58 },
         { x: 6, y: 72 },
         { x: 7, y: 58 },
         { x: 8, y: 26 },
         { x: 9, y: 18 }
       ]
     },
      {
       type: "column",  
        showInLegend: true, 
        color:"#bdbaba",
        legendText: "Total Visitores",
       axisYIndex: 1,
       dataPoints: [      
         { x: 1, y: 70 },
         { x: 2, y: 45 },
         { x: 3, y: 56 },
         { x: 4, y: 77 },
         { x: 5, y: 58 },
         { x: 6, y: 72 },
         { x: 7, y: 58 },
         { x: 8, y: 26 },
         { x: 9, y: 18 }
       ]
     }
      
    ]
    
    });

    chart04.render();

     // Line chart 05
     var chart05 = new CanvasJS.Chart("linechartContainer_05",{
      animationEnabled: true,
       data: [{        
        yValueFormatString: "#,### Units",
        xValueFormatString: "YYYY",
        type: "spline",
        color:"#ff5528",
        
        dataPoints: [      
          { x: 1, y: 0 },
          { x: 2, y: 5 },
          { x: 3, y: 6 },
          { x: 4, y: 7 },
          { x: 5, y: 8 },
          
        ]
      }       
        
      ]
    });

    chart05.render();

    // Line chart 06
    var chart06 = new CanvasJS.Chart("linechartContainer_06",{
      animationEnabled: true,
       data: [{        
        yValueFormatString: "#,### Units",
        xValueFormatString: "YYYY",
        type: "spline",
        color:"#ff5528",
        
        dataPoints: [      
          { x: 1, y: 8 },
          { x: 2, y: 5 },
          { x: 3, y: 4 },
          { x: 4, y: 7 },
          { x: 5, y: 8 },
        ]
      }       
        
      ]
    });

    chart06.render();

    // Line chart 07
    var chart07 = new CanvasJS.Chart("linechartContainer_07",{
      animationEnabled: true,
       data: [{        
        yValueFormatString: "#,### Units",
        xValueFormatString: "YYYY",
        type: "spline",
        color:"#ff5528",
        
        dataPoints: [      
          { x: 1, y: 2 },
          { x: 2, y: 8 },
          { x: 3, y: 2 },
          { x: 4, y: 7 },
          { x: 5, y: 9 },
        ]
      }       
        
      ]
    });

    chart07.render();

    // Line chart 08
    var chart08 = new CanvasJS.Chart("linechartContainer_08",{
      animationEnabled: true,
       data: [{        
        yValueFormatString: "#,### Units",
        xValueFormatString: "YYYY",
        type: "spline",
        color:"#ff5528",
        
        dataPoints: [      
          { x: 1, y: 3 },
          { x: 2, y: 5 },
          { x: 3, y: 4 },
          { x: 4, y: 7 },
          { x: 5, y: 8 },
        ]
      }       
        
      ]
    });

    chart08.render();

    // Line chart 09
    var chart09 = new CanvasJS.Chart("linechartContainer_09",
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

    chart09.render();

    // Line chart 010
    var chart010 = new CanvasJS.Chart("linechartContainer_010",{
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

    chart010.render();

    // Line chart 011
    var chart011 = new CanvasJS.Chart("linechartContainer_011",
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

    chart011.render();
    
    // Line chart 012

    var chart012 = new CanvasJS.Chart("doughnutchartContainer_012", {
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
    chart012.render();

    // Line chart 013

    var chart013 = new CanvasJS.Chart("chartContainer_013", {
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

    chart013.render();

    // Line chart 014
    var chart014 = new CanvasJS.Chart("chartContainer_014",
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

    chart014.render();

      
  }
  