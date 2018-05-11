# stepProgressBar #directive
A Simple Unique StepProgressBar which works with Angular Views-Routes (URL)


Hello Mates,
This is my work of Step Progress Bar which works with Angular js Routes-Views.

Why this?
-
1. Lot of Custom Step Progress Bars there but No one is fullfilling actual Progress According to Views.
2. It works with angular routes-Views Links
3. Have 5 different themes and Appealing Colors

How this works?
- 
this is a Angular js directive which takes input from html as follows
1. jsonarray = Array of json of format stepProgressBarJsonArray in Controller manadatory.
2. theme = you can give any of 5 themes (lightblue,blue,red,green,yellow) optional.
3. showtooltip = true/false . it will give tooltip to a badge from json.text of stepProgressBarJsonArray optional.

Then you need to have directive linked with Angular app 

Voila!Thats it , it is working now.

It will automatically ready url and see which View is currently open and will active that badge and progress to that badge whose link in JsonArray is matched with url's view link.
-
You can see index.html and controller.js to have more clarity .



Controller
-
app.controller('myCtrl', function($scope) {
	
	//PROTOTYPE OF JSONArray input to directive
	
	$scope.stepProgressBarJsonArray = [ {
		"id" : "1", //will be displayed on the badge
		"href" : "#!1", //badge will open this view(route) href. Also it uses it to compare with current url for dynamcity of Step progress bar  
		"text" : "Link1" //this is tooltip text
	}, {
		"id" : "2",
		"href" : "#!2",
		"text" : "Link2"
	}, {
		"id" : "3",
		"href" : "#!3",
		"text" : "Link3"
	}, {
		"id" : "4",
		"href" : "#!4",
		"text" : "Link4"
	}, {
		"id" : "5",
		"href" : "#!hello",
		"text" : "hello"
	} ];

	
	
});




