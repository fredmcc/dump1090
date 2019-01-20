// --------------------------------------------------------
//
// This file is to configure the configurable settings.
// Load this file before script.js file at gmap.html.
//
// --------------------------------------------------------

// -- Output Settings -------------------------------------
// Show metric values
Metric = false; // true or false

// -- Map settings ----------------------------------------
// The Latitude and Longitude in decimal format
//CONST_CENTERLAT = 50.098;
//CONST_CENTERLON = 8.26;
CONST_CENTERLAT = 42.69;
CONST_CENTERLON = -83.109;
// The google maps zoom level, 0 - 16, lower is further out
CONST_ZOOMLVL   = 8;

// -- Marker settings -------------------------------------
// The default marker color
MarkerColor	  = "rgb(127, 127, 127)";
SelectedColor = "rgb(225, 225, 225)";
StaleColor = "rgb(190, 190, 190)";

// -- Site Settings ---------------------------------------
SiteShow    = true; // true or false
// The Latitude and Longitude in decimal format
SiteLat     = 42.69;
SiteLon     = -83.109;
ShowRange   = false;

SiteCircles = true; // true or false (Only shown if SiteShow is true)
// In nautical miles or km (depending settings value 'Metric')
SiteCirclesDistances = new Array(10,20,30,40,50,60,70,80,90,100);

