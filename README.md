# Illustrator Scriba SPT Generator

This Illustrator script takes the active Illustrator document and generates an SPT file for import into [Scriba laser software](http://www.permanentmarking.com/).

## Installation

You don't _have_ to install the script to use it (more on that later), but installing the script is by far the best way to use it. All you need to do is copy the `Generate Scriba SPT.jsx` and `SCRIBA_SPT_TEMPLATE.json` files into one of the following directories:

* Windows: `C:\Program Files\Adobe\Adobe lllustrator [version]\Presets\[language]\Scripts\`
* Mac OS: `/Applications/Adobe lllustrator [version]/Presets/[language]/Scripts/`

Note: Make sure to restart Illustrator if you installed the script while the Application is running.

## Running the Script

Once the script is installed, you'll be able to run it by going to `File > Scripts > Generate Scriba SPT`. As mentioned, you don't need to install the script. If you want to run it as a one-off, select `File > Scripts > Other Script...` and select the `Generate Scriba SPT.jsx` file in the file chooser.

## Document Setup

1. Exports document as AI legacy version 8 
2. Layers named `zone`* are exported as AI legacy version 8
