var app = angular.module('myApp', [ 'ngRoute' ]);

//Routing for Partial Views
app.config(function($routeProvider) {
	$routeProvider.when("/1", {
		templateUrl : "views/view1.html",
		controller : "view1Controller"
	}).when("/2", {
		templateUrl : "views/view2.html",
		controller : "view2Controller"
	})
});


//Directive used in Html
app
		.directive(
				'stepProgressBar',
				function($compile, $location, $compile) {
					return {
						restrict : 'EA',
						scope : {
							jsonarray : '=',
							theme : '@',
							showtooltip : '@'
						},
						compile : function(element, attrs) {

							return {

								post : function(scope, element, attrs) {
									progressBarThemeColor = "";
									badgeBackgroundColor = "#00adff"

									// ProgressBarColors

									switch (scope.theme) {
									case "blue":
										progressBarThemeColor = "";
										break;
									case "red":
										progressBarThemeColor = "progress-bar-danger";
										break;
									case "green":
										progressBarThemeColor = "progress-bar-success";
										break;
									case "yellow":
										progressBarThemeColor = "progress-bar-warning";
										break;
									case "lightblue":
										progressBarThemeColor = "progress-bar-info";
										break;
									default:

									}

									element
											.html("<div style=\"margin-right: 15px; margin-left: 15px;\"> <div style=\"position: absolute; z-index: -1\" ng-style=\"{'width':100-(100/jsonarray.length)+'%', 'left':(100/jsonarray.length)/2+'%'}\" class=\"progress\"> <div id=\"\" class=\"progress-bar "
													+ progressBarThemeColor
													+ " progress-bar-striped active\" role=\"progressbar\" style=\"width:25%\" ng-style=\"myStyle\"></div> </div> <div class=\"repeatWidth\" ng-repeat=\"item in jsonarray\" ng-style=\"{'width':100/jsonarray.length+'%','float':'left'}\"> <div class=\"text-center\"> <a href=\"{{item.href}}\" > <span id=\"Link{{item.id}}\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"{{item.text}}\"  >{{item.id}}  </span> </a> </div> </div> </div>");
									$compile(element.contents())(scope);

									if (scope.showtooltip == "true") {
										$(document)
												.ready(
														function() {
															$(element)
																	.find(
																			'[data-toggle="tooltip"]')
																	.tooltip();
														});
									}
									scope
											.$on(
													'$locationChangeSuccess',
													function(event) {
														var url = $location
																.url(), params = $location
																.search();
														console
																.log('changed url'
																		+ url)
														var index = 0;
														// BadgeColors

														switch (scope.theme) {
														case "blue":
															badgeBackgroundColor = "#00adff"
															break;
														case "red":
															badgeBackgroundColor = "#F44336"
															break;
														case "green":
															badgeBackgroundColor = "#214e26"
															break;
														case "yellow":
															badgeBackgroundColor = "#f48642";
															break;
														case "lightblue":
															badgeBackgroundColor = "#14b9ea"
															break;
														default:
														}

														linkStyle = "transition: all .2s ease-in-out; transform: scale(2); background-color:"
																+ badgeBackgroundColor
																+ ";box-shadow: 0px 0px 10px black;     border: 1px solid #00000087;";
														unlinkStyle = "transition: all .2s ease-in-out; transform: scale(1.2); background-color:"
																+ badgeBackgroundColor
																+ ";box-shadow: 0px 0px 10px black;     border: 1px solid #00000087;";
														for ( var i in scope.jsonarray) {

															if (url.substr(1) == scope.jsonarray[i].href
																	.substr(2)) {
																index = i;
																element[0]
																		.querySelector(
																				'#Link'
																						+ scope.jsonarray[i].id)
																		.setAttribute(
																				"style",
																				linkStyle);
															} else {
																element[0]
																		.querySelector(
																				'#Link'
																						+ scope.jsonarray[i].id)
																		.setAttribute(
																				"style",
																				unlinkStyle);
															}
														}
														index = parseInt(index);
														width = (index
																/ (scope.jsonarray.length - 1) * 100)
																+ "%";
														element[0]
																.querySelector('.progress-bar').style.width = width;
													});
								}
							}
						}
					}
				});


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
