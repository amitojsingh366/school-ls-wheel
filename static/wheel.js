const wheelColors = [
    "#ab47bc",
    "#ef5350",
    "#5c6bc0",
    "#7e57c2",
    "#42a5f5",
    "#00bcd4",
    "#009688",
    "#607d8b"
];
var padding = { top: 20, right: 40, bottom: 0, left: 0 },
    w = 500 - padding.left - padding.right,
    h = 500 - padding.top - padding.bottom,
    r = Math.min(w, h) / 2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [];



var data = [
    { "value": 1, "task": "Set goals and make them a reality" },
    { "value": 1, "task": "Pick up a new hobby" },
    { "value": 1, "task": "Help your parents" },
    { "value": 1, "task": "Learn how to make a new dish" },
    { "value": 1, "task": "Keep away from electroic gadgets for at least an hour" },
    { "value": 1, "task": "Improve your communication skills" },
    { "value": 1, "task": "Self Reflect" },
    { "value": 1, "task": "Explore your creative side" },
];


var svg = d3.select('#chart')
    .append("svg")
    .data([data])
    .attr("width", w + padding.left + padding.right)
    .attr("height", h + padding.top + padding.bottom);

var container = svg.append("g")
    .attr("class", "chartholder")
    .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");

var vis = container
    .append("g");

var pie = d3.layout.pie().sort(null).value(function(d) { return 1; });

var arc = d3.svg.arc().outerRadius(r);

var arcs = vis.selectAll("g.slice")
    .data(pie)
    .enter()
    .append("g")
    .attr("class", "slice");

arcs.append("path")
    .attr("fill", function(d, i) {
        return wheelColors[i];
    })
    .attr("d", function(d) { return arc(d); });

arcs.append("text").attr("transform", function(d) {
        d.innerRadius = 0;
        d.outerRadius = r;
        d.angle = (d.startAngle + d.endAngle) / 2;
        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
    })
    .attr("text-anchor", "end")
    .text(function(d, i) {
        return data[i].task;
    });

container.on("click", spin);


function spin(d) {

    container.on("click", null);



    var ps = 360 / data.length,
        rng = Math.floor((Math.random() * 1440) + 360);

    rotation = (Math.round(rng / ps) * ps);

    picked = Math.round(data.length - (rotation % 360) / ps);
    picked = picked >= data.length ? (picked % data.length) : picked;



    rotation += 90 - Math.round(ps / 2);

    vis.transition()
        .duration(3000)
        .attrTween("transform", rotTween)
        .each("end", function() {
            d3.select("#question h1")
                .text(data[picked].task);
            oldrotation = rotation;
            container.on("click", spin);
        });
}

svg.append("g")
    .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
    .append("path")
    .attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
    .style({ "fill": "white" });

container.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 60)
    .style({ "fill": "#2C2F33", "cursor": "pointer" });

container.append("text")
    .attr("x", 0)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .text("SPIN")
    .style({ "font-weight": "bold", "font-size": "30px", "fill": "white" });


function rotTween(to) {
    var i = d3.interpolate(oldrotation % 360, rotation);
    return function(t) {
        return "rotate(" + i(t) + ")";
    };
}


function getRandomNumbers() {
    var array = new Uint16Array(1000);

    if (window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function") {
        window.crypto.getRandomValues(array);
        console.log("works");
    } else {
        for (var i = 0; i < 1000; i++) {
            array[i] = Math.floor(Math.random() * 100000) + 1;
        }
    }

    return array;
}