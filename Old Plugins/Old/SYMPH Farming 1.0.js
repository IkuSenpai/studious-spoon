/*:
 * @target MZ
 * @plugindesc Basic Farming System plugin for RPG Maker MZ. Allows planting and growing crops.
 * @author Symphatic
 * @version 1.0
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
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * This plugin introduces a basic farming system to your RPG Maker MZ project.
 * Players can plant crops and water them to help them grow.
 * 
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 * - plantCrop: Plants a crop in a specific plot.
 * - waterCrop: Waters a planted crop to help it grow.
 * 
 * ============================================================================
 * Version History
 * ============================================================================
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
    const pluginName = "BasicFarmingSystem";
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
            watered: false
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

})();
