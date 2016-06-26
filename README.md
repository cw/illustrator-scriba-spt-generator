# Illustrator Scriba SPT Generator

This Illustrator script takes the active Illustrator document and generates an SPT file for import into [Scriba laser software](http://www.permanentmarking.com/).

Scriba requires AI files in Illustrator version 8 format. This script first exports the whole active Illustrator document as `part.ai` followed by each layer containing the word `zone`. The script then calculates motion block coordinates for each zone and adds the matching zone.AI.

## Installation

Copy the `Generate Scriba SPT.jsx` and `SCRIBA_SPT_TEMPLATE.json` files into one of the following directories:

* Windows: `C:\Program Files\Adobe\Adobe lllustrator [version]\Presets\[language]\Scripts\`
* Mac OS: `/Applications/Adobe lllustrator [version]/Presets/[language]/Scripts/`

Note: Make sure to restart Illustrator if you installed the script while the Application is running.

## Running the Script

After the script is installed, you can run it from `File > Scripts > Generate Scriba SPT`. If you haven't installed the script and want to run it as a one-off, select `File > Scripts > Other Script...` and select the `Generate Scriba SPT.jsx` file in the file chooser.

## Document Setup

1. Exports document as AI legacy version 8 
2. Layers named `zone`* are exported as AI legacy version 8 (zone1, zone2, zone3, ...)
