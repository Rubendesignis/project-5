
let seed, mySize;
let angle_c;
let colors = [];

let colors1 = "173df6-a00360".split("-").map((a) => "#" + a);
let colors3 = "82d362-5967ca".split("-").map((a) => "#" + a);
let colors4 = "8c75ff-2788f5".split("-").map((a) => "#" + a);
let colors7 = "1b1b1b-f3f3f3".split("-").map((a) => "#" + a);
var color_setup;

function setup() {
	
	mySize = min(windowWidth, windowHeight);
	createCanvas(windowWidth, windowHeight);
	seed = int(random(1000));
	colorMode(HSB, 450, 250, 100, 250);
	background(0, 0, 95, 100);
	color_setup = random([colors1, colors3, colors4,colors7]);
	angle_c = 5;
}

function draw() {
  background(0)
	randomSeed(seed);
   
	translate(width / 2, height / 2);
	rotate(angle_c);
	colors[0] = random(color_setup);
	colors[1] = random(color_setup);
	colors[2] = random(color_setup);
	colors[3] = random(color_setup);
	colors[4] = random(color_setup);
	circleForm(0, 0, mySize / 5 * 4);
	angle_c += TAU / 3600;
}

function circleForm(x, y, d) {

	let branch = int(random(500, 1000));
	let ang = TAU / branch;
	let angles = [];
	for (let i = 0; i < branch; i++) {
		angles.push(ang * (i + iteration(0.1, 0.25)));
	}
	for (let i = 0; i < branch; i++) {
		let ang1 = angles[i];
		let ang2 = angles[(i + int(random(6))) % angles.length];
		let dd = d * iteration(0.1, 1);
		noFill();
		drawingContext.shadowColor = random(colors);
		drawingContext.shadowOffsetX = 1;
		drawingContext.shadowOffsetY = 1;
		drawingContext.shadowBlur = 0;
		stroke(random(colors));

		strokeWeight(random(2,5));
		arc(x, y, dd, dd, ang1, ang2);
	}

}

function iteration(s, e) {
	let t = random(10, 100);
	let v = random(0.01, 0.05);
	return map(sin(t + frameCount * v), -1, 1, s, e);
  
}