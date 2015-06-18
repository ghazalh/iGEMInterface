



//==========================================================================================================================================
//SMBL Data=================================================================================================================================
//==========================================================================================================================================
var data = [{  
              "species": "Escherichia coli",
              "strain": "MG1655",
              "id": "1",
              "genes": [],
              "metabolites": [{ 
                                "id": "10fthf_c", 
                                "name": "Formyltetrahydrofolate", 
                                "compartment": "c", 
                                "notes": {}, 
                                "_constraint_sense": "E",
                                "charge": -2,
                                "_bound": 0,
                                "formula": "C20H21N7O7", 
                                "annotation": {}
                              },
                              { 
                                "id": "12dgr120_c", 
                                "name": "1,2-Diacyl-sn-glycerol (didodecanoyl, n-C12:0)", 
                                "compartment": "c", 
                                "notes": {}, 
                                "_constraint_sense": "E",
                                "charge": -2,
                                "_bound": 0,
                                "formula": "C27H52O5", 
                                "annotation": {}
                              },
                              {
                                "id": "4crsol_c", 
                                "name": "p-Cresol", 
                                "compartment": "c", 
                                "notes": {}, 
                                "_constraint_sense": "E", 
                                "charge": 0,
                                "_bound": 0, 
                                "formula": "C7H8O",
                                "annotation": {}
                              },
                              {
                                "id": "5drib_c", 
                                "name": "5'-deoxyribose",
                                "compartment": "c",
                                "notes": {}, 
                                "_constraint_sense": "E",
                                "charge": 0, 
                                "_bound": 0.0, 
                                "formula": "C5H10O4", 
                                "annotation": {}
                              },
                              {
                                "id": "2agpg141_c", 
                                "name": "2-Acyl-sn-glycero-3-phosphoglycerol (n-C14:1)",
                                "compartment": "c",
                                "notes": {}, 
                                "_constraint_sense": "E", 
                                "charge": -1, 
                                "_bound": 0.0, 
                                "formula": "C20H38O9P1",
                                "annotation": {}
                              },
                              {
                                "id": "2agpg141_p", 
                                "name": "2-Acyl-sn-glycero-3-phosphoglycerol (n-C14:1)", 
                                "compartment": "p",
                                "notes": {}, 
                                "_constraint_sense": "E", 
                                "charge": -1, 
                                "_bound": 0.0,
                                "formula": "C20H38O9P1",
                                "annotation": {}
                              }, 
                              {
                                "id": "coa_c", 
                                "name": "Coenzyme A", 
                                "compartment": "c",
                                "notes": {}, 
                                "_constraint_sense": "E", 
                                "charge": -4, 
                                "_bound": 0.0,
                                "formula": "C21H32N7O16P3S", 
                                "annotation": {}
                              },
                              {
                                "id": "glu_DASH_L_c",
                                "name": "L-Glutamate",
                                "compartment": "c",
                                "notes": {}, 
                                "_constraint_sense": "E", 
                                "charge": -1, 
                                "_bound": 0.0, 
                                "formula": "C5H8NO4", 
                                "annotation": {}
                              },
                              {
                                "id": "accoa_c", 
                                "name": "Acetyl-CoA",
                                "compartment": "c", 
                                "notes": {}, 
                                "_constraint_sense": "E",
                                "charge": -4,
                                "_bound": 0.0,
                                "formula": "C23H34N7O17P3S", 
                                "annotation": {}
                              },
                              {
                                "id": "h_c", 
                                "name": "H+",
                                "compartment": "c", 
                                "notes": {}, 
                                "_constraint_sense": "E", 
                                "charge": 1,
                                "_bound": 0.0, 
                                "formula": "H",
                                "annotation": {}
                              },
                              {
                                "id": "1_acglu_c", 
                                "name": "N-Acetyl-L-glutamate",
                                "compartment": "c", 
                                "notes": {}, 
                                "_constraint_sense": "E", 
                                "charge": -2,
                                "_bound": 0.0, 
                                "formula": "C7H9NO5", 
                                "annotation": {}
                              }],
              "notes": [],
              "reactions": [{ 
                              "id": "DM_4CRSOL",
                              "metabolites": {"4crsol_c": -1}, 
                              "name": "Sink needed to allow p-Cresol to leave system", 
                              "upper_bound": 1000,
                              "notes": {},
                              "subsystem": "",
                              "variable_kind": "countinuous", 
                              "lower_bound": 0,
                              "gene_reaction_rule": "",
                              "objective_coefficient":0
                            },
                            { 
                              "id": "DM_5DRIB",
                              "metabolites": {"5drib_c": -1}, 
                              "name": "Sink needed to allow 5'-deoxyribose to leave system", 
                              "upper_bound": 1000,
                              "notes": {},
                              "subsystem": "",
                              "variable_kind": "countinuous", 
                              "lower_bound": 0,
                              "gene_reaction_rule": "",
                              "objective_coefficient": 0
                            },
                            {
                              "id": "2AGPG141tipp",
                              "metabolites": {"2agpg141_p": -1.0, "2agpg141_c": 1.0}, 
                              "name": "2-Acyl-sn-glycero-3-phosphoglycerol (n-C14:1) transporter via facilitated diffusion (periplasm)",
                              "upper_bound": 1000.0, 
                              "notes": {},
                              "subsystem": "Transport, Inner Membrane",
                              "variable_kind": "continuous",
                              "lower_bound": 0.0,
                              "gene_reaction_rule": "", 
                              "objective_coefficient": 0.0
                            },
                            {
                              "id": "ACGS",
                              "metabolites": {"coa_c": 1.0, "glu_DASH_L_c": -1.0, "accoa_c": -1.0, "h_c": 1.0, "1_acglu_c": 1.0}, 
                              "name": "N-acetylglutamate synthase", 
                              "upper_bound": 1000.0, 
                              "notes": {}, 
                              "subsystem": "Arginine and Proline Metabolism", "variable_kind": "continuous",
                              "lower_bound": 0.0, 
                              "gene_reaction_rule": "",
                              "objective_coefficient": 0.0
                            }]
           },
           {  
              "species": "Pseudomonas putida",
              "strain": "F1",
              "id": "2",
              "genes": [],
              "metabolites": [{ 
                                "id": "h_w", 
                                "name": "Hello World", 
                                "compartment": "c", 
                                "notes": {}, 
                                "_constraint_sense": "E",
                                "charge": -2,
                                "_bound": 0,
                                "formula": "HELLOWORLD", 
                                "annotation": {}
                              },
                              {
                                "id": "2_acglu_c", 
                                "name": "N-Acetyl-L-glutamate",
                                "compartment": "c", 
                                "notes": {}, 
                                "_constraint_sense": "E", 
                                "charge": -2,
                                "_bound": 0.0, 
                                "formula": "C7H9NO5", 
                                "annotation": {}
                              }],
              "notes": [],
              "reactions": [{
                              "id": "hello_world",
                              "metabolites": {"h_w": 3.0, "1_acglu_c": -1.0}, 
                              "name": "Hello world synthase", 
                              "upper_bound": 1000.0, 
                              "notes": {}, 
                              "subsystem": "",
                              "lower_bound": 0.0, 
                              "gene_reaction_rule": "",
                              "objective_coefficient": 0.0
                            }]
           }];

//==========================================================================================================================================
//Setting up the canvas=====================================================================================================================
//==========================================================================================================================================
var w = screen.width;
var h = screen.height;

console.log('working?');

//Palette
var palette = {
                "red": "#FF0000",
                "blue": "#3E87D1",
                "green": "#33CC33",
                "yellow": "#FFFF00",
                "scarlet": "#990033",
                "pink": "#FF99CC",
                "purple": "#990099",
                "black": "#000000",
                "white": "#FFFFFF",
                "gray": "#D2D2D2",
                "brown": "#663300",
                "orange": "#FF7519",
                "darkblue": "#354458",
                "skyblue": "#77c5f7",
                "salmon": "#eb7260",
                "aqua": "#eb7260",
                "beige": "#e9e0d6",
              };

var markers = [
                {id: "triangle", path: 'M 0,0 m -5,-5 L 5,0 L -5,5 Z', viewbox: '-5 -5 10 10' }
              ];

var zoom = d3.behavior.zoom()
             .scaleExtent([0.2, 20])
             .on("zoom", zoom);

var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .call(zoom)
            .on("dblclick.zoom", null);

svg.append("rect")
   .attr("width", w)
   .attr("height", h)
   .style("fill","transparent")
   .style("pointer-events", "all");

var network = svg.append("g")
                 .attr("class", "network");

var nodes = [];
//var nodesR=[];
var links = [];

var force = d3.layout.force()
              .nodes(nodes)
              .links(links)
              .charge(function(d){if(d.type == "m"){return -1000}else{return -500}})
              .linkStrength(2)
              .linkDistance(50)
              .size([w, h])
              .on("tick", tick);
              //.start();

/*
var forceR = d3.layout.force()
              .nodes(nodesR)
              .links(links)
              .charge(-1000)
              .linkStrength(2)
              .linkDistance(50)
              .size([w, h])
              .on("tick", tick);
              //.start();
*/
var drag = force.drag().on("dragstart", dragstart);
//var dragR = forceR.drag().on("dragstart", dragstart);

var link = network.append("g")
                  .attr("class", "links")
                  .selectAll("link");

var node = network.append("g")
                      .attr("class", "nodes")
                      .selectAll("node");
/*
var nodeR = network.append("g")
                    .attr("class", "nodesR")
                      .selectAll("nodeR");
*/
var marker = network.append("g")
                      .attr("class", "markers")
                      .selectAll(".marker")
                      .data(markers)
                      .enter()
                        .append('svg:marker')
                        .attr('id', function(d){ return d.id})
                        .attr('markerHeight', 5)
                        .attr('markerWidth', 5)
                        .attr('markerUnits', 'strokeWidth')
                        .attr('orient', 'auto')
                        .attr('refX', 13)
                        .attr('refY', 0)
                        .attr('fill', palette.salmon)
                        .attr('opacity', 0.9)
                        //.attr('fill',function(){(if reaction===false)return palette.labdarkblue; return palette.green;})
                        .attr('viewBox', function(d){ return d.viewbox })
                        .append('svg:path')
                        .attr('d', function(d){ return d.path });


//==========================================================================================================================================
//Adding Nodes and Links====================================================================================================================
/*var a = {id: "a", name: "A", selflink: false};
var b = {id: "b", name: "B", selflink: true}; 
var c = {id: "c", name: "C", selflink: false};
var d = {id: "d", name: "D", selflink: false};
var e = {id: "e", name: "E", selflink: false};*/


var check = [];

var tempLinks = [];
//making metabolite nodes
for (var j=0; j<data.length;j++){
  for (var i = 0; i<data[j].metabolites.length; i++){
    if(check.indexOf(data[j].metabolites[i].id != -1)){
      
      nodes.push ({ 
                    id: data[j].metabolites[i].id, 
                    name:data[j].metabolites[i].name, 
                    selflink: false, 
                    type: "m"
                  });
      check.push(data[j].metabolites[i].id);
    }
    
  }
};
//making reaction nodes
for (var j=0; j<data.length;j++){
  for (var i = 0; i<data[j].reactions.length; i++){
    if(check.indexOf(data[j].reactions[i].id != -1)){
      nodes.push ({id: data[j].reactions[i].id, name:data[j].reactions[i].name, selflink: false, type: "r"});
      check.push(data[j].reactions[i].id);
    }
    
    
    var m = Object.keys(data[j].reactions[i].metabolites);
    for (var k = 0; k<m.length; k++){
      if(data[j].reactions[i].metabolites[m[k]]>0){
        var s = data[j].reactions[i].id;
        var t = m[k];
      }else{
        var s = m[k];
        var t = data[j].reactions[i].id;
      }
      tempLinks.push({id: s+"-"+t, source: s, target: t});
    }
    
  }
};

var nodesMap = map(nodes);

for (var j=0; j<tempLinks.length;j++){
  var s = nodes[nodesMap[tempLinks[j].source]];
  var t = nodes[nodesMap[tempLinks[j].target]];
  links.push({id: s.id+"-"+t.id, source: s, target: t});
}

//links.concat(tempLinks);
function map(nodes){
  var ret = {};
  for (var j=0; j<nodes.length;j++){
    ret[nodes[j].id] = j;
  }
  return ret;
}


/*
for (var n=0; n<nodes.length;n++){
  for (var j=0; j<data.length;j++){
    for (var i=0; i<data[j].reactions.length; i++){
      for (var f=0; f<data[j].reactions[i].metabolites.length; f++){
        if (Object.keys(data[j].reactions[i].metabolites[f].toString()===nodes[n].name)
          {if (data[j].reactions[i].metabolites[f]<0){src=nodes[n].name;
            for (var p=0; p<nodesR.length;p++)
              {if (data[j].reactions[i].name===nodesR[p].name)
                  trgt=nodesR[p]}}
              if (data[j].reactions[i].metabolites[f]>0)
                  {trgt=nodes[n];
                  for (var p=0; p<nodesR.length;p++)
                  {if (data[j].reactions[i].name===nodesR[p].name)
                    src=nodesR[p]}}
var l=nodes.length;
 if (src===""){
   nodes.push({id: "random"+j, name: "random"+j, selflink:false});
   src=nodes[l];
 }
 if (trgt===""){
   nodes.push({id: "random"+j, name: "random"+j, selflink:false});
   trgt=nodes[l];
 }
 links.push({id:data[j].reactions[i].name, source:src, target:trgt});

  
}}}}}}
*/
/*nodes.push(a, b, c, d, e);
links.push({id: "a-b", source: a, target: b}, {id: "b-c", source: b, target: c}, {id: "c-b",source: c, target: b}, {id: "c-d", source: c, target: d}, {id: "b-b", source: b, target:b}, {id: "e-c", source: e, target: c});
*/
draw();


//==========================================================================================================================================
//Removing Nodes and Links==================================================================================================================

//UNCOMMENT THE CODE BELOW TO REMOVE DATA
                                                
/*
nodes.splice(0, 1); //Removes node a
links.splice(0, 1); //Removes link a-b
draw(); //After changing your nodes and links arrays, redraw the network
*/



//=========================================================================================================================================
//FUNCTIONS================================================================================================================================
//=========================================================================================================================================
function draw(){
  d3.selectAll("[class=node-selflink]").remove();
  d3.selectAll("[class=node-circle]").remove();
  d3.selectAll("[class=node-text]").remove();
  //d3.selectAll("[class=node-rxn]").remove();
  //d3.selectAll("[class=node-rxntxt]").remove();
  link = link.data(force.links(), function(d){ return d.source.id + "-" + d.target.id; })
  link.enter().insert("line")
              .attr("class", "link")
              .attr("id", function(d){return "id-"+d.id})
              .attr("stroke", palette.black)
              .attr("fill", "none")
              .attr("stroke-width", 2)
              .attr("marker-end", "url(#triangle)");
  
  link.exit().remove();
 /* 
  nodeR = nodeR.data(forceR.nodes(), function(d) { return d.id;});
  nodeR.enter().append("g")
              .attr("class", "node")
              .attr("id", function(d){return "id-"+d.id})
              .on("mouseout", nodeMouseout)
              .on('mouseover', nodeMouseover)
              .on("dblclick", dblclick)
              .call(dragR);
  */
  node = node.data(force.nodes(), function(d) { return d.id;});
  node.enter().append("g")
              .attr("class", "node")
              .attr("id", function(d){return "id-"+d.id})
              .on("mouseout", nodeMouseout)
              .on('mouseover', nodeMouseover)
              .on("dblclick", dblclick)
              .call(drag);

  //Create self edges
  node.append("circle")
      .attr("class", "node-selflink")
      .attr("cx", -12)
      .attr("cy", -16)
      .attr("r", 16)
      .attr("stroke", palette.black)
      .attr("stroke-width", function(d){if(d.selflink){return 2}else{return 0}})
      .attr("fill", "none");
  /*
  //Create rxn circle
  nodeR.append("circle")
      .attr("class", "node-rxn")
      .attr("r", 5)
      .attr("opacity", 1)
      .attr("fill", palette.salmon);
*/
  //Create circle shape for node
  node.append("circle")
      .attr("class", "node-circle")
      .attr("r", function(d){if(d.type == 'm'){return 10;}else{return 4}})
      .attr("stroke", palette.salmon)
      .attr("stroke-width", function(d){if(d.type == 'm'){return 1;}else{return 35}})
      .attr("stroke-opacity", function(d){if(d.type == 'm'){return "0.6";}else{return "0"}} )
      .style("opacity", function(d){if(d.type == 'm'){return "0.9";}else{return "0.6"}})
      .attr("fill", function(d){if(d.type =="m"){return palette.skyblue}else{return palette.salmon}});
  /*
  //Create text for rxn node 
  nodeR.append("text")
      .attr("class", "node-rxntxt")
      .text(function(d, i) { return d.name; })
      .attr("x", 0)
      .attr("y", -9)
      .attr("font-size","0em")
      .style("opacity", "0")
      .attr("text-anchor", "middle");
  */
  //Create text for node
  node.append("text")
      .attr("class", "node-text")
      .text(function(d, i) { return d.name; })
      .attr("x", 0)
      .attr("y", function(d){if(d.type == 'm'){return -18;}else{return -5}})
      .attr("font-family",  "Arial")
      .attr("fill", "#ff00ff")
      .style("opacity", function(d){if(d.type == 'm'){return "0.6";}else{return "0"}})
      .attr("font-size", function(d){if(d.type == 'm'){return "1.1em";}else{return "0em"}})
      .attr("text-anchor", "middle");
  node.exit().remove();
  //nodeR.exit().remove();
  //Starts force layout
  
  force.start();
  //forceR.start();  
  

  
 
  
}

function tick(){
  node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });
  
  //nodeR.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  
}

function zoom() {
  network.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}

function dblclick(d) {
  //Doubleclick to place forces on node
  d3.select(this).classed("fixed", d.fixed = false);
  force.start();
  //forceR.start();
}

function dragstart(d) {
  //Drag to fix node's position
  d3.event.sourceEvent.stopPropagation(); 
  d3.select(this).classed("fixed", d.fixed = true);
}

function nodeMouseover(d){
  d3.select(this).selectAll(".node-circle").transition()
    .duration(100)
        .attr('r', function(d){if(d.type == 'm'){return 14;}else{return 6}})
        .attr("stroke", palette.salmon)
        .attr("stroke-opacity", function(d){if(d.type == 'm'){return "1.0";}else{return "0"}} )
        .attr("stroke-width", function(d){if(d.type == 'm'){return 2;}else{return 40}})
        .style("opacity", 1);
        
  /*
  d3.select(this).selectAll(".node-rxn").transition()
    .duration(100)
        .attr('r', 6);  
  */
  d3.select(this).selectAll(".node-text").transition()
    .duration(100)
        .attr("x", 0)
        .attr("y", function(d){if(d.type == 'm'){return -24;}else{return -10}})
        .style("opacity", "1")
        .attr("font-size",function(d){if(d.type == 'm'){return "1.4em";}else{return "1.0em"}})
        .attr("text-anchor", "middle");
  /*
  d3.select(this).selectAll(".node-rxntxt").transition()
    .duration(100)
        .attr("x", 0)
        .attr("y", -11)
        .style("opacity", "1")
        .attr("fill", palette.beige)
        .attr("font-family",  "Arial")
        .attr("font-size","0.9em")
        .attr("text-anchor", "middle");
   */
}

function nodeMouseout(d){
  d3.select(this).selectAll(".node-circle").transition()
    .duration(function(d){if(d.type == 'm'){return 100;}else{return 800}})
        .attr('r', function(d){if(d.type == 'm'){return 10;}else{return 4}})
        .attr("stroke", palette.salmon)
        .attr("stroke-opacity", function(d){if(d.type == 'm'){return "0.6";}else{return "0"}} )
        .attr("stroke-width", function(d){if(d.type == 'm'){return 1;}else{return 35}})
        .style("opacity", function(d){if(d.type == 'm'){return "0.9";}else{return "0.6"}});
        
  /*
  d3.select(this).selectAll(".node-rxn").transition()
    .duration(100)
        .attr('r', 5);   
  */
  d3.select(this).selectAll(".node-text").transition()
    .duration(function(d){if(d.type == 'm'){return 100;}else{return 800}})
        .attr("x", 0)
        .attr("y", function(d){if(d.type == 'm'){return -18;}else{return -5}})
        .style("opacity", function(d){if(d.type == 'm'){return "0.6";}else{return "0"}})
        .attr("font-size", function(d){if(d.type == 'm'){return "1.1em";}else{return "0em"}})
        .attr("text-anchor", "middle");
  /*
  d3.select(this).selectAll(".node-rxntxt").transition()
    .duration(800)
        .attr("x", 0)
        .attr("y", -9)
        .attr("font-size","0em")
        .style("opacity", "0")
        .attr("text-anchor", "middle");
  */
}

