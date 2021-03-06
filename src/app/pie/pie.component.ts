import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    const SVG = d3.select("svg");
    let width = +SVG.attr("width"),
        height = +SVG.attr("height"),
        radius = Math.min(width, height) / 2,
        g = SVG.append("g").attr("transform", "translate(" + width/2 + "," +height/2+ ")");

        var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    let pie = d3.pie()
        .sort(null)
        .value(function(d) { return d.population; });

    let path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    let label = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    // console.log(""+__dirname)

    d3.csv("/assets/data.csv")
    .then((data)=>{
        console.log(data)
    })

    d3.csv("/assets/data.csv").then(function(d) {
        console.log(d)
      d.population = +d.population;
      return d;
    }).then( function(data) {
        console.log(typeof(data))
        // console.log(error)
    //   if (error) throw error;

      let arc = g.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
          .attr("class", "arc");

      arc.append("path")
          .attr("d", path)
          .attr("fill", function(d) { return color(d.data.age); });

      arc.append("text")
          .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
          .attr("dy", "0.35em")
          .text(function(d) { return d.data.age; });
    });
  }

}
