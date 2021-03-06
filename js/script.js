////////////////////////////////////////////////////////////// 
//////////////////////// Constants /////////////////////////// 
////////////////////////////////////////////////////////////// 

const pi2 = 2 * Math.PI
const pi1_2 = Math.PI / 2

const numData = 1440 // = 60 * 24 -> minutes per day
const dotRadius = 1 //in pixels

//Locations of visual elements based on the data
const averageBabies = 7.3
const maxBabies = 14.8
const minBabies = 4.8
const axisLocation = 10.5
const gridLineData = [6,9]
const outerCircleShadow = 12.5

//Colors
const colorsRed = ['#ffa500', '#fb9200', '#f58200', '#ee7000', '#e65e00', '#dd4c01', '#d13a01', '#c12e03', '#b02404', '#9f1905', '#8e1005', '#7d0603', '#6b0101']
const colorsBlue = ['#0d4982','#1d6092','#2c79a1','#3294a5','#1ab29d']

//////////////////////////////////////////////////////////////
//////////////////////// Create SVG //////////////////////////
//////////////////////////////////////////////////////////////

// const margin = {
//     left: 20,
//     top: 20,
//     right: 20,
//     bottom: 20,
// }
// const width = 1250
// const height = 900

// const svg

//////////////////////////////////////////////////////////////
////////////////////// Create scales /////////////////////////
//////////////////////////////////////////////////////////////

// const timeScale

// const birthScale

// const line

// const areaScale

////////////////////////////////////////////////////////////// 
///////////////////// Create SVG effects ///////////////////// 
//////////////////////////////////////////////////////////////

// const defs = svg.append("defs")

// const filter
//.attr("id", "shadow")

//Create background "chart-area" circle
//.attr("class", "chart-area")

//////////////////////////////////////////////////////////////
///////////////////////// Add title //////////////////////////
//////////////////////////////////////////////////////////////

//.attr("class", "title-top")

//.attr("class", "title-bottom")

//////////////////////////////////////////////////////////////
////////////////////// Draw time labels //////////////////////
//////////////////////////////////////////////////////////////

//Hour label data
// const times = ["midnight","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","noon","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm"]

// const timeLabels = svg.append("g").attr("class", "time-label-group")

// const pie

// const arc


//.attr("class", "time-axis")

//.attr("class", "time-axis-text")

//////////////////////////////////////////////////////////////
/////////////////////// Read in data /////////////////////////
//////////////////////////////////////////////////////////////

//data: data/SciAm_minute_per_day_2014.csv

    //////////////////////////////////////////////////////////////
    ///////////////////// Final data prep ////////////////////////
    //////////////////////////////////////////////////////////////

    // console.table(babyData[0])

    // babyData.forEach(d => {
    //     d.time = +d.time
    //     d.births = +d.births
    //     d.line = +d.line
    // })

    //////////////////////////////////////////////////////////////
    /////////////////////// Draw circles /////////////////////////
    //////////////////////////////////////////////////////////////

    // //When you know the radius and angle, you get back to x & y pixels by:
    // x = radius * cos(angle)
    // y = radius * sin(angle)

    //class: circle-group
    // const circles

    //.attr("class","circle")

    //////////////////////////////////////////////////////////////
    ////////////////////// Create clip paths /////////////////////
    //////////////////////////////////////////////////////////////

    // const clips = svg.append("g").attr("class", "clip-group")

    //.attr("id", "clip-area")

    //////////////////////////////////////////////////////////////
    ////////////////////// Draw LOESS line ///////////////////////
    //////////////////////////////////////////////////////////////

    // const loessLine

    //////////////////////////////////////////////////////////////
    //////////////////////// Draw areas //////////////////////////
    //////////////////////////////////////////////////////////////

    // const area = svg.append("g").attr("class", "area-group")
    // .attr("class", "area")

    //.attr("class", "color-circle-above")
    //.attr("r", (d,i) => birthScale(maxBabies) - (birthScale(maxBabies) - birthScale(averageBabies))/colorsRed.length * i)

    //.attr("class", "color-circle-below")
    //.attr("r", (d,i) => birthScale(averageBabies) - (birthScale(averageBabies) - birthScale(minBabies))/colorsBlue.length * i)

    //////////////////////////////////////////////////////////////
    ///////////////////// Draw gridlines /////////////////////////
    //////////////////////////////////////////////////////////////

    // const gridLines = svg.append("g").attr("class", "gridline-group")

    //.attr("class","axis-line")

    //.attr("class","axis-number")

    //////////////////////////////////////////////////////////////
    /////////////////////// Draw circles /////////////////////////
    //////////////////////////////////////////////////////////////

    // const circlesTop = svg.append("g").attr("class", "circle-group")
    //class: circle-top

    //////////////////////////////////////////////////////////////
    ///////////////////////// Draw lines /////////////////////////
    //////////////////////////////////////////////////////////////

    // const averageLine
    //.attr("class", "average-line")

    ////////////////////////////////////////////////////////////// 
    ///////////////////////// Annotations ////////////////////////
    ////////////////////////////////////////////////////////////// 

    // const annotations = svg.append("g").attr("class", "annotation-group")

    // const annotationData
    
    // const makeAnnotations

////////////////////////////////////////////////////////////// 
/////////////////////// Helper functions /////////////////////
////////////////////////////////////////////////////////////// 

// function arcPath(r) {
//     // //When you know the radius and angle, you get back to x & y pixels by:
//     // x = radius * cos(angle)
//     // y = radius * sin(angle)
//     let xStart = r * Math.cos(timeScale(0) - pi1_2)
//     let yStart = r * Math.sin(timeScale(0) - pi1_2)
//     let xEnd = r * Math.cos(timeScale(numData-1) - pi1_2)
//     let yEnd = r * Math.sin(timeScale(numData-1) - pi1_2)

//     //(0 1 1)

// }//function arcPath