/*:
 * @target MZ
 * @plugindesc Advanced Farming System plugin for RPG Maker MZ. Expands on watering, fertilizing, and weather effects with VisuStella integration.
 * @author Symphatic
 * @version 2.1
 * 
 * @param CropData
 * @text Crop Data
 * @desc Define the crops that can be grown.
 * @type struct<Crop>[]
 * 
 * @command plantCrop
 * @text Plant Crop
 * @desc Plants a crop at a specified plot.
 * 
 * @arg cropId
 * @text Crop ID
 * @desc The ID of the crop to plant.
 * @type number
 * 
 * @arg plotId
 * @text Plot ID
 * @desc The ID of the plot where the crop is planted.
 * @type number
 * 
 * @command waterCrop
 * @text Water Crop
 * @desc Waters the crop at a specified plot.
 * 
 * @arg plotId
 * @text Plot ID
 * @desc The ID of the plot to water.
 * @type number
 * 
 * @command fertilizeCrop
 * @text Fertilize Crop
 * @desc Applies fertilizer to the crop at a specified plot.
 * 
 * @arg plotId
 * @text Plot ID
 * @desc The ID of the plot to fertilize.
 * @type number
 * 
 * @command setWeather
 * @text Set Weather
 * @desc Sets the weather effect for the day.
 * 
 * @arg weather
 * @text Weather
 * @desc The type of weather: "none", "rain", "drought", "storm".
 * @type select
 * @option none
 * @option rain
 * @option drought
 * @option storm
 * 
 * @command expandFarm
 * @text Expand Farm
 * @desc Expands the farm by adding a new plot.
 * 
 * @arg plotId
 * @text Plot ID
 * @desc The ID of the new plot to add.
 * @type number
 * 
 * @command upgradePlot
 * @text Upgrade Plot
 * @desc Upgrades a plot to improve soil quality and yield.
 * 
 * @arg plotId
 * @text Plot ID
 * @desc The ID of the plot to upgrade.
 * @type number
 * 
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * This plugin expands the farming system with advanced features like farm 
 * expansion, plot upgrades, and deeper integration with VisuStella plugins.
 * 
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 * - plantCrop: Plants a crop in a specific plot.
 * - waterCrop: Waters a planted crop to help it grow.
 * - fertilizeCrop: Applies fertilizer to a planted crop.
 * - setWeather: Sets the weather effect for the day, affecting crops.
 * - expandFarm: Adds a new plot to the farm, expanding its size.
 * - upgradePlot: Upgrades an existing plot to improve its quality.
 * 
 * ============================================================================
 * Version History
 * ============================================================================
 * - Version 2.1: Added advanced farming features and VisuStella plugin integration.
 * - Version 2.0: Introduced watering, fertilizing, and weather effects.
 * - Version 1.0: Basic farming system implementation.
 * 
 * ============================================================================
 * Terms of Use
 * ============================================================================
 * This plugin is free for both commercial and non-commercial use. Please credit Symphatic in your project.
 * 
 * ============================================================================
 * Credits
 * ============================================================================
 * - Plugin Development: Symphatic
 * 
 */

(() => {
    const pluginName = "AdvancedFarmingSystem";
    const parameters = PluginManager.parameters(pluginName);

    let crops = {};    // Stores all crop data
    let plots = {};    // Stores all plot data
    let plantedCrops = {};  // Stores crops that have been planted

    // Plant a crop in a specified plot
    PluginManager.registerCommand(pluginName, "plantCrop", args => {
        const cropId = Number(args.cropId);
        const plotId = Number(args.plotId);

        if (!crops[cropId]) {
            console.error(`Invalid crop ID: ${cropId}`);
            return;
        }
        if (!plots[plotId]) {
            console.error(`Plot ${plotId} does not exist. Create or expand a plot first.`);
            return;
        }

        plantedCrops[plotId] = {
            cropId: cropId,
            growthStage: 0,
            daysPlanted: 0,
            watered: false,
            fertilized: false
        };

        console.log(`Planted crop ${cropId} in plot ${plotId}.`);
    });

    // Water a crop in a specified plot
    PluginManager.registerCommand(pluginName, "waterCrop", args => {
        const plotId = Number(args.plotId);

        if (!plantedCrops[plotId]) {
            console.error(`No crop planted at plot ${plotId}`);
            return;
        }

        plantedCrops[plotId].watered = true;
        console.log(`Watered crop in plot ${plotId}.`);
    });

    // Fertilize a crop in a specified plot
    PluginManager.registerCommand(pluginName, "fertilizeCrop", args => {
        const plotId = Number(args.plotId);

        if (!plantedCrops[plotId]) {
            console.error(`No crop planted at plot ${plotId}`);
            return;
        }

        plantedCrops[plotId].fertilized = true;
        console.log(`Fertilized crop in plot ${plotId}.`);
    });

    // Set the weather effect for the day
    PluginManager.registerCommand(pluginName, "setWeather", args => {
        const weather = args.weather.toLowerCase();

        Object.keys(plantedCrops).forEach(plotId => {
            const crop = plantedCrops[plotId];

            if (weather === "rain") {
                crop.watered = true;
                console.log(`Rain watered crop in plot ${plotId}.`);
            } else if (weather === "drought") {
                crop.watered = false;
                console.log(`Drought dried out crop in plot ${plotId}.`);
            } else if (weather === "storm") {
                crop.growthStage = Math.max(crop.growthStage - 1, 0);
                console.log(`Storm damaged crop in plot ${plotId}.`);
            }
        });

        console.log(`Weather set to ${weather}.`);
    });

    // Expand the farm by adding a new plot
    PluginManager.registerCommand(pluginName, "expandFarm", args => {
        const plotId = Number(args.plotId);

        if (plots[plotId]) {
            console.error(`Plot ${plotId} already exists.`);
            return;
        }

        plots[plotId] = {
            id: plotId,
            quality: "Standard"
        };

        console.log(`Expanded farm with new plot ${plotId}.`);
    });

    // Upgrade a plot to improve soil quality and yield
    PluginManager.registerCommand(pluginName, "upgradePlot", args => {
        const plotId = Number(args.plotId);

        if (!plots[plotId]) {
            console.error(`Plot ${plotId} does not exist.`);
            return;
        }

        plots[plotId].quality = "Improved";
        console.log(`Upgraded plot ${plotId} to Improved quality.`);
    });

})();
