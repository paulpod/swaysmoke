STX.Studies.studyLibrary=STX.extend(STX.Studies.studyLibrary,{
			"correl": {
				"name": "Correlation Coefficient",
				"range": "-1 to 1",
				"calculateFN":  STX.Studies.calculateCorrelationCoefficient,
				"edit": null
			},
			"PMO": {
				"name": "Price Momentum Oscillator",
				"calculateFN": STX.Studies.calculatePMO,
				"inputs": {"Field":"field","Smoothing Period":35,"Double Smoothing Period":20,"Signal Period":10},
				"outputs": {"PMO":"auto","PMOSignal":"#FF0000"},
				"parameters": {
					template:"studyOverZones",
					init:{studyOverZonesEnabled:true, studyOverBoughtValue:2.5, studyOverBoughtColor:"auto", studyOverSoldValue:-2.5, studyOverSoldColor:"auto"}
				}
			},
			"Rel Vol": {
				"name": "Relative Volatility",
				"range": "0 to 100",
				"calculateFN": STX.Studies.calculateRelativeVolatility,
				"inputs": {"Field":"field", "STD Period":10, "Smoothing Period":14},
				"outputs":{"Rel Vol":"auto"},
				"centerline": 50,
				"parameters": {
					template:"studyOverZones",
					init:{studyOverZonesEnabled:true, studyOverBoughtValue:70, studyOverBoughtColor:"auto", studyOverSoldValue:30, studyOverSoldColor:"auto"}
				}
			},
			"Awesome": {
				"name": "Awesome Oscillator",
				"seriesFN": STX.Studies.displayAwesomeOscillator,
				"calculateFN": STX.Studies.calculateAwesomeOscillator,
				"inputs": {},
				"outputs": {"Increasing Bar":"#00DD00", "Decreasing Bar":"#FF0000"}
			},
			"W MFI": {
				"name": "Market Facilitation Index",
				"seriesFN": STX.Studies.displayMFI,
				"calculateFN": STX.Studies.calculateMFI,
				"yAxis": {"ground":true},
				"range": "0 to max",
				"inputs": {},
				"outputs": {"Green":"#8bc176", "Fade":"#ab611f", "Fake":"#5f7cb8", "Squat":"#ffd0cf"}
			},
			"ATR Bands": {
				"name": "ATR Bands",
				"overlay": true,
				"seriesFN": STX.Studies.displayChannel,
				"calculateFN": STX.Studies.calculateATRBands,
				"inputs": {"Period":5, "Shift": 3, "Field":"field", "Channel Fill":true},
				"outputs": {"ATR Bands Top":"auto", "ATR Bands Bottom":"auto", "ATR Bands Channel":"auto"}
			},
			"STARC Bands": {
				"name": "STARC Bands",
				"overlay": true,
				"seriesFN": STX.Studies.displayChannel,
				"calculateFN": STX.Studies.calculateSTARCBands,
				"inputs": {"Period":15, "MA Period":5, "Multiplier": 1.33, "Channel Fill":true},
				"outputs": {"STARC Bands Top":"auto", "STARC Bands Median":"auto", "STARC Bands Bottom":"auto"}
			},
			"ATR Trailing Stop": {
				"name": "ATR Trailing Stops",
				"overlay": true,
				"seriesFN": STX.Studies.displayPSAR2,
				"calculateFN": STX.Studies.calculateATRStops,
				"inputs": {"Multiplier":3, "Period":21, "Plot Type":["points","squarewave"], "HighLow":false},
				"outputs": {"Buy Stops":"#FF0000", "Sell Stops":"#00FF00"}
			},
			"Boll %b": {
				"name": "Bollinger %b",
				"calculateFN": STX.Studies.calculateBollinger,
				"inputs": {"Field":"field", "Period":20, "Standard Deviations": 2, "Moving Average Type":"ma"},
				"outputs": {"%b":"auto"}
			},
			"Boll BW": {
				"name": "Bollinger Bandwidth",
				"calculateFN": STX.Studies.calculateBollinger,
				"inputs": {"Field":"field", "Period":20, "Standard Deviations": 2, "Moving Average Type":"ma"},
				"outputs": {"Bandwidth":"auto"}
			},
			"Donchian Width": {
				"name": "",
				"calculateFN": STX.Studies.calculateMaxHighMinLow,
				"inputs": {"High Period":20, "Low Period":20},
			},
			"Rel Vig": {
				"name": "Relative Vigor Index",
				"seriesFN": STX.Studies.displayHistogramWithSeries,
				"calculateFN": STX.Studies.calculateRelativeVigor,
				"inputs": {"Period":10},
				"outputs": {"Rel Vig":"auto", "RelVigSignal":"#FF0000", "Increasing Bar":"#00DD00", "Decreasing Bar":"#FF0000"}
			},
			"Elder Impulse": {
				"name": "Elder Impulse System",
				"calculateFN": STX.Studies.calculateElderImpulse,
				"seriesFN": STX.Studies.displayElderImpulse,
				"customRemoval": true,
				"underlay": true,
				"inputs": {},
				"outputs": {"Bullish":"#8BC176", "Bearish":"#DD3E39", "Neutral":"#5F7CB8"},
				"removeFN": function(stx, sd){
					stx.chart.customChart=null;
				}
			},
			"Pivot Points": {
				"name": "Pivot Points",
				"overlay": true,
				"seriesFN": STX.Studies.displayPivotPoints,
				"calculateFN": STX.Studies.calculatePivotPoints,
				"inputs": {"Type":["standard","fibonacci"],"Shading":false},
				"outputs":{"Pivot":"auto","Resistance 1":"rgb(184,44,11)","Support 1":"rgb(105,145,88)","Resistance 2":"rgb(227,100,96)","Support 2":"rgb(179,217,135)","Resistance 3":"rgb(255,208,207)","Support 3":"rgb(211,232,174)"},
				"parameters": {
					noSlopes: true,
					opacity: 0.2
				}
			},
			"Alligator": {
				"name": "Alligator",
			    "overlay": true,
				"seriesFN": STX.Studies.displayAlligator,
				"calculateFN": STX.Studies.calculateAlligator,
				"inputs":{"Jaw Period":13, "Jaw Offset":8, "Teeth Period":8, "Teeth Offset":5, "Lips Period":5, "Lips Offset":3, "Show Fractals":false},
				"outputs":{"Jaw":"#0000FF", "Teeth":"#FF0000", "Lips":"#00DD00"}

			},
			"Gator": {
				"name": "Gator Oscillator",
				"seriesFN": STX.Studies.displayGator,
				"calculateFN": STX.Studies.calculateAlligator,
				"inputs":{"Jaw Period":13, "Jaw Offset":8, "Teeth Period":8, "Teeth Offset":5, "Lips Period":5, "Lips Offset":3},
				"outputs": {"Increasing Bar":"#00DD00", "Decreasing Bar":"#FF0000"},
				"centerline": 0
			},
			"Ichimoku Clouds": {
				"name": "Ichimoku Clouds",
			    "overlay": true,
			    "range": "bypass",
			    "calculateFN": STX.Studies.calculateIchimoku,
			    "seriesFN": STX.Studies.displayIchimoku,
			    "inputs": {"Conversion Line Period":9, "Base Line Period": 26, "Leading Span B Period":52, "Lagging Span Period":26},
			    "outputs": {"Conversion Line":"#0000FF", "Base Line":"#FF0000", "Leading Span A":"#00FF00", "Leading Span B":"#FF0000", "Lagging Span":"#808000"}
			},
			"P Rel": {
				"name": "Price Relative",
			    "seriesFN": STX.Studies.displayPriceRelative,
			    "calculateFN": STX.Studies.calculatePriceRelative,
			    "inputs": {"Comparison Symbol":"SPY"}
			},
			"Ulcer": {
				"name": "Ulcer Index",
			    "calculateFN": STX.Studies.calculateUlcerIndex,
			    "inputs": {"Field":"field", "Period":14}
			},
			"Choppiness": {
				"name": "Choppiness Index",
			    "calculateFN": STX.Studies.calculateChoppiness,
			    "centerline": 50,
				"parameters": {
					template:"studyOverZones",
					init:{studyOverZonesEnabled:true, studyOverBoughtValue:61.8, studyOverBoughtColor:"auto", studyOverSoldValue:38.2, studyOverSoldColor:"auto"}
				}
			},
			"Disparity": {
				"name": "Disparity Index",
			    "calculateFN": STX.Studies.calculateDisparity,
			    "inputs": {"Field":"field", "Period":14, "Moving Average Type":"ma"}
			},
			"Rainbow MA": {
				"name": "Rainbow Moving Average",
				"overlay": true,
			    "calculateFN": STX.Studies.calculateRainbow,
			    "seriesFN": STX.Studies.displayRainbowMA,
			    "inputs": {"Field":"field", "Period":2, "Underlay": false},
				"outputs": {"SMA1":"#FF0000", "SMA2":"#FF7F00", "SMA3":"#FFFF00", "SMA4":"#7FFF00", "SMA5":"#00FF7F", "SMA6":"#00FFFF", "SMA7":"#007FFF", "SMA8":"#0000FF", "SMA9":"#7F00FF", "SMA10":"#FF00FF"}
			},
			"Rainbow Osc": {
				"name": "Rainbow Oscillator",
			    "calculateFN": STX.Studies.calculateRainbow,
			    "seriesFN": STX.Studies.displayRainbowOsc,
			    "inputs": {"Field":"field", "Period":2, "HHV/LLV Lookback":10},
				"outputs": {"Positive Bar":"#00DD00", "Negative Bar":"#FF0000"}
			},
			"Pring KST": {
				"name": "Pring's Know Sure Thing",
			    "calculateFN": STX.Studies.calculateKST,
			    "inputs": {"Field":"field", "Lightest Rate of Change Period":10, "Lightest SMA Period":10, "Light Rate of Change Period":15, "Light SMA Period":10, "Heavy Rate of Change Period":20, "Heavy SMA Period":10, "Heaviest Rate of Change Period":30, "Heaviest SMA Period":15, "Signal Period":9},
				"outputs": {"KST":"#00DD00", "KSTSignal":"#FF0000"}
			},
			"Pring Sp-K": {
				"name": "Pring's Special K",
			    "calculateFN": STX.Studies.calculateSpecialK,
			    "inputs": {"Field":"field", "Interval":["daily","weekly"]}
			},
			"Darvas": {
				"name": "Darvas Box",
				"underlay": true,
				"calculateFN": STX.Studies.calculateDarvas,
				"seriesFN": STX.Studies.displayDarvas,
				"inputs": {"All-Time High Lookback Period":100, "Exit Field":["close","high/low"], "Ghost Boxes":true, "Stop Levels": false, "Level Offset":0.01, "Price Minimum": 5, "Volume Spike":false, "Volume % of Avg":400},
				"outputs": {"Darvas":"#5F7CB8", "Ghost":"#699158", "Levels":"auto"},
				"customRemoval": true
			},
			"Supertrend": {
				"name": "Supertrend",
				"overlay": true,
				"seriesFN": STX.Studies.displaySupertrend,
				"calculateFN": STX.Studies.calculateSupertrend,
				"inputs": {"Period":7, "Multiplier": 3},
				"outputs": {"Uptrend":"#8cc176", "Downtrend":"#b82c0c"}
			},
			"vol profile": {
				"name": "Volume Profile",
				"overlay": true,
			    "seriesFN": STX.Studies.displayVolumeProfile,
			    "calculateFN": null,
			    "inputs": {},
			    "outputs": {"Bars Color":"#b64a96"},
				"customRemoval": true,
			    "parameters": {
			    	"displayBorder": true,  
			    	"displayVolume" : false, 
			    	"numberOfBars" : 30,
			    	"widthPercentage": 0.25
				}
			}
		});