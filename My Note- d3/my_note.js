d3.select("#new-note").on("submit", function(){
	d3.event.preventDefault();
	var input = d3.select("input");

	d3.select("#notes")
	.append("p")
	.classed("note", true)
	.text(input.property("value"));
	input.property("value","");
	setPreview("");
})

d3.select(".remove").on("click", function(){
	d3.event.preventDefault();
	d3.selectAll("p").remove();
})


var preview = d3.select(".preview");
var input = d3.select("input");

d3.select(".lucky").on("click", function(){
	d3.event.preventDefault();
	d3.selectAll("p").style("font-size", function(){
		return Math.random() * 40 + "px";
	})
})


input.on("input", function(){
	var note = d3.event.target.value;
	setPreview(note);
})

function setPreview(val){
	preview.text(val)
	.classed("hide", val === "");
}

