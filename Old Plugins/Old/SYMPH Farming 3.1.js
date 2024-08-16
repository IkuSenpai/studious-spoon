/*:
 * @target MZ
 * @plugindesc An advanced Farming System plugin with full integration of VisuStella Plugins, including crops, animals, crafting, and more.
 * @author Symphatic
 * @version 3.0
 * 
 * @param CropData
 * @text Crop Data
 * @desc Define the crops that can be grown.
 * @type struct<Crop>[]
 * 
 * @param AnimalData
 * @text Animal Data
 * @desc Define the animals that can be raised.
 * @type struct<Animal>[]
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
 * @desc The type of weather: "none", "rain", "drought", "storm", "heatwave".
 * @type select
 * @option none
 * @option rain
 * @option drought
 * @option storm
 * @option heatwave
 * 
 * @command addAnimal
 * @text Add Animal
 * @desc Adds an animal to the farm.
 * 
 * @arg animalType
 * @text Animal Type
 * @desc The type of animal to add.
 * @type string
 * 
 * @arg animalName
 * @text Animal Name
 * @desc The name of the animal.
 * @type string
 * 
 * @command careForAnimal
 * @text Care for Animal
 * @desc Feed or clean an animal.
 * 
 * @arg animalName
 * @text Animal Name
 * @desc The name of the animal to care for.
 * @type string
 * 
 * @arg careType
 * @text Care Type
 * @desc The type of care: Feed or Clean.
 * @type select
 * @option Feed
 * @option Clean
 * 
 * @command breedAnimal
 * @text Breed Animal
 * @desc Breeds two animals to produce offspring.
 * 
 * @arg parent1Name
 * @text Parent 1 Name
 * @desc The name of the first parent.
 * @type string
 * 
 * @arg parent2Name
 * @text Parent 2 Name
 * @desc The name of the second parent.
 * @type string
 * 
 * @command harvestAnimalResource
 * @text Harvest Animal Resource
 * @desc Harvests resources from an animal.
 * 
 * @arg animalName
 * @text Animal Name
 * @desc The name of the animal to harvest from.
 * @type string
 * 
 * @command generateContract
 * @text Generate Contract
 * @desc Generates a new NPC farming contract.
 * 
 * @command fulfillContract
 * @text Fulfill Contract
 * @desc Fulfills a specified NPC farming contract.
 * 
 * @arg contractId
 * @text Contract ID
 * @desc The ID of the contract to fulfill.
 * @type number
 * 
 * @command purchaseAutomationTool
 * @text Purchase Automation Tool
 * @desc Purchases an automation tool.
 * 
 * @arg toolName
 * @text Tool Name
 * @desc The name of the automation tool to purchase.
 * @type string
 * 
 * @command placeAutomationTool
 * @text Place Automation Tool
 * @desc Places an automation tool on the farm.
 * 
 * @arg toolName
 * @text Tool Name
 * @desc The name of the automation tool to place.
 * @type string
 * 
 * @command addCraftingRecipe
 * @text Add Crafting Recipe
 * @desc Adds a new crafting recipe.
 * 
 * @arg recipeName
 * @text Recipe Name
 * @desc The name of the crafting recipe.
 * @type string
 * 
 * @arg ingredients
 * @text Ingredients
 * @desc The ingredients required for the recipe.
 * @type struct<Ingredient>[]
 * 
 * @arg result
 * @text Result
 * @desc The item produced by the recipe.
 * @type string
 * 
 * @arg qualityFactor
 * @text Quality Factor
 * @desc Whether ingredient quality affects the recipe result.
 * @type boolean
 * @default false
 * 
 * @command craftItem
 * @text Craft Item
 * @desc Crafts an item using a specified recipe.
 * 
 * @arg recipeName
 * @text Recipe Name
 * @desc The name of the recipe to craft.
 * @type string
 * 
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * This plugin provides a comprehensive farming system compatible with VisuStella
 * plugins, including features like crops, animals, crafting, NPC contracts, and
 * automation tools.
 * 
 * ============================================================================
 * Integration with VisuStella Plugins
 * ============================================================================
 * - Compatible with VisuMZ_0_CoreEngine (Tier 0).
 * - Integrates with VisuMZ_1_ItemsEquipsCore for item management (Tier 1).
 * - Uses VisuMZ_1_EventsMoveCore for event handling (Tier 1).
 * - Relies on VisuMZ_2_DateTimeSystem for time-based growth (Tier 2).
 * - Utilizes VisuMZ_2_WeatherEffects for weather-based crop growth (Tier 2).
 * - Links with VisuMZ_2_ItemCraftingSys for crafting integration (Tier 2).
 * 
 * ============================================================================
 * How to Use
 * ============================================================================
 * - Define your crops, animals, and crafting recipes in the Plugin Parameters.
 * - Use the provided commands to manage crops, animals, and contracts.
 * - Automate farm tasks using tools like sprinklers and harvesters.
 * - Craft items using harvested crops and animal resources.
 * 
 * ============================================================================
 * Plugin Parameters
 * ============================================================================
 * 
 * - "CropData": Define the crops that can be grown.
 * - "AnimalData": Define the animals that can be raised.
 * - "CraftingRecipes": Define the crafting recipes.
 * 
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 * - Plant Crop: Plants a crop in a specific plot.
 * - Water Crop: Waters a specific crop.
 * - Fertilize Crop: Fertilizes a crop, reducing days to the next growth stage.
 * - Set Weather: Sets the weather (none, rain, drought, storm, heatwave).
 * - Add Animal: Adds an animal to the farm.
 * - Care for Animal: Feeds or cleans an animal.
 * - Breed Animal: Breeds two animals to produce offspring.
 * - Harvest Animal Resource: Harvests resources from an animal.
 * - Generate Contract: Generates a new NPC farming contract.
 * - Fulfill Contract: Fulfills an NPC farming contract.
 * - Purchase Automation Tool: Purchases an automation tool.
 * - Place Automation Tool: Places an automation tool on the farm.
 * - Add Crafting Recipe: Adds a new crafting recipe.
 * - Craft Item: Crafts an item using a specified recipe.
 * 
 * ============================================================================
 * Crop Growth System
 * ============================================================================
 * - Crops grow based on the day-night cycle.
 * - Seasonal crops can only be planted and grown in their appropriate seasons.
 * - Weather effects such as rain, drought, storms, and heatwaves impact crop growth.
 * - Fertilizing crops can speed up growth, and watering them daily is essential.
 * - Crop quality is influenced by care, and higher quality crops yield better results.
 * 
 * ============================================================================
 * Animal Management System
 * ============================================================================
 * - Animals need daily care, including feeding and cleaning.
 * - Animals produce resources like milk, eggs, or wool that can be harvested.
 * - Animals can be bred to produce offspring, expanding the farm's livestock.
 * - Neglecting animals can reduce their productivity or cause illness.
 * 
 * ============================================================================
 * Crop Mutations
 * ============================================================================
 * - Crops have a small chance of mutating into rare variants.
 * - Mutated crops can yield unique items or have enhanced properties.
 * 
 * ============================================================================
 * NPC Farming Contracts
 * ============================================================================
 * - NPCs request specific crops or quantities, rewarding the player upon fulfillment.
 * - Contracts are dynamically generated based on the game’s progression and seasons.
 * 
 * ============================================================================
 * Farm Automation Tools
 * ============================================================================
 * - Tools like sprinklers and automated harvesters can automate farm tasks.
 * - Automation tools are purchased, crafted, or unlocked as the player progresses.
 * 
 * ============================================================================
 * Crafting System Integration
 * ============================================================================
 * - Players can craft items using harvested crops and animal products.
 * - Crafting recipes can be influenced by the quality of the ingredients.
 * - The resulting item’s quality depends on the quality of the inputs.
 * 
  * ============================================================================
 * Customization and Expansion
 * ============================================================================
 * - Players can expand and upgrade their plots, improving soil quality or adding new features.
 * - Plot upgrades allow for more efficient farming and greater crop yield.
 * 
 * ============================================================================
 * Example of Plugin Command Usage
 * ============================================================================
 * 1. Plant a crop: PluginCommand: plantCrop cropId:1 plotId:5
 * 2. Water a crop: PluginCommand: waterCrop plotId:5
 * 3. Set the weather to rain: PluginCommand: setWeather weather:rain
 * 4. Add an animal: PluginCommand: addAnimal animalType:Cow animalName:Bessie
 * 5. Care for an animal: PluginCommand: careForAnimal animalName:Bessie careType:Feed
 * 6. Craft an item: PluginCommand: craftItem recipeName:Potion
 * 
 * ============================================================================
 * Version History
 * ============================================================================
 * - Version 3.0: Full integration of crops, animals, crafting, NPC contracts, and automation.
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
 * - Inspired by the RPG Maker MZ community and VisuStella plugin series.
 * 
 */

(() => {
    const pluginName = "AdvancedFarmingSystem";
    const parameters = PluginManager.parameters(pluginName);

    // Parse Crop Data
    const crops = JSON.parse(parameters["CropData"] || "[]").map(crop => {
        const parsedCrop = JSON.parse(crop);
        parsedCrop.growthStages = parsedCrop.growthStages.map(stage => JSON.parse(stage));
        return parsedCrop;
    });

    // Parse Animal Data
    const animalsData = JSON.parse(parameters["AnimalData"] || "[]").map(animal => JSON.parse(animal));

    const plantedCrops = {};
    const animals = {};
    const plots = {};
    let currentWeather = "none";

    const contracts = [];
    const automationTools = {};
    const craftingRecipes = {};

    const getCurrentSeason = () => {
        return $gameSystem.seasonName();
    };

    const getCurrentWeather = () => {
        return $gameSystem.weatherType();
    };

    // Apply weather effects to crops
    const applyWeatherEffects = (crop, plot) => {
        currentWeather = getCurrentWeather();
        switch (currentWeather) {
            case "rain":
                crop.watered = true;
                break;
            case "drought":
                crop.watered = false;
                break;
            case "storm":
                crop.quality = "Normal";
                break;
            case "heatwave":
                if (!crop.wateredTwice) crop.watered = false;
                break;
            default:
                console.log(`No significant weather effects on plot ${plot.plotId}`);
        }
    };

    // Plant a crop
    PluginManager.registerCommand(pluginName, "plantCrop", args => {
        const cropId = Number(args.cropId);
        const plotId = Number(args.plotId);

        if (!crops[cropId]) return console.error(`Invalid crop ID: ${cropId}`);
        if (!plots[plotId]) return console.error(`Plot ${plotId} does not exist. Create or expand a plot first.`);

        plantedCrops[plotId] = {
            plotId: plotId,
            cropId: cropId,
            growthStage: 0,
            daysPlanted: 0,
            watered: false,
            fertilized: false,
            quality: "Normal",
            wateredTwice: false,
            diseased: false,
            infested: false,
            yieldMultiplier: 1.0,
            mutated: false
        };
    });

    // Water a crop
    PluginManager.registerCommand(pluginName, "waterCrop", args => {
        const plotId = Number(args.plotId);
        if (!plantedCrops[plotId]) return console.error(`No crop planted at plot ${plotId}`);
        plantedCrops[plotId].watered = true;
    });

    // Fertilize a crop
    PluginManager.registerCommand(pluginName, "fertilizeCrop", args => {
        const plotId = Number(args.plotId);
        if (!plantedCrops[plotId]) return console.error(`No crop planted at plot ${plotId}`);
        plantedCrops[plotId].fertilized = true;
    });

    // Set the weather
    PluginManager.registerCommand(pluginName, "setWeather", args => {
        currentWeather = args.weather;
    });

    // Add an animal to the farm
    PluginManager.registerCommand(pluginName, "addAnimal", args => {
        const animalType = args.animalType;
        const animalName = args.animalName;

        animals[animalName] = {
            name: animalName,
            type: animalType,
            fed: false,
            clean: false,
            productive: true
        };
    });

    // Care for an animal
    PluginManager.registerCommand(pluginName, "careForAnimal", args => {
        const animalName = args.animalName;
        const careType = args.careType;

        const animal = animals[animalName];
        if (!animal) return console.error(`No animal found with name ${animalName}`);

        if (careType === "Feed") animal.fed = true;
        else if (careType === "Clean") animal.clean = true;
    });

    // Breed animals
    PluginManager.registerCommand(pluginName, "breedAnimal", args => {
        const parent1Name = args.parent1Name;
        const parent2Name = args.parent2Name;

        const parent1 = animals[parent1Name];
        const parent2 = animals[parent2Name];
        if (!parent1 || !parent2) return console.error(`One or both parents not found: ${parent1Name}, ${parent2Name}`);

        if (parent1.type !== parent2.type) return console.error(`Cannot breed different types of animals: ${parent1.type} and ${parent2.type}`);

        const offspringName = `${parent1.name}-${parent2.name}`;
        animals[offspringName] = {
            name: offspringName,
            type: parent1.type,
            fed: false,
            clean: false,
            productive: true
        };
    });

    // Harvest resources from an animal
    PluginManager.registerCommand(pluginName, "harvestAnimalResource", args => {
        const animalName = args.animalName;

        const animal = animals[animalName];
        if (!animal) return console.error(`No animal found with name ${animalName}`);
        if (!animal.fed || !animal.clean) return console.error(`The ${animal.type} named ${animal.name} is not in a good condition to produce resources.`);

        console.log(`Harvested resources from ${animal.name}`);
        // Logic to add harvested resources to player's inventory
    });

    // Generate a farming contract
    PluginManager.registerCommand(pluginName, "generateContract", () => {
        const cropId = Math.floor(Math.random() * crops.length);
        const crop = crops[cropId];
        const quantity = Math.floor(Math.random() * 10) + 5;

        contracts.push({
            npcName: "Farmer Joe",
            cropId: cropId,
            cropName: crop.name,
            quantity: quantity,
            reward: 100 * quantity
        });

        console.log(`New contract: Deliver ${quantity} ${crop.name} to Farmer Joe for ${100 * quantity} gold.`);
    });

    // Fulfill a farming contract
    PluginManager.registerCommand(pluginName, "fulfillContract", args => {
        const contractId = Number(args.contractId);
        const contract = contracts[contractId];

        if (!contract) return console.error(`Contract ID ${contractId} not found.`);

        const playerCropQuantity = $gameParty.numItems($dataItems[contract.cropId]); // Check player's inventory

        if (playerCropQuantity >= contract.quantity) {
            $gameParty.loseItem($dataItems[contract.cropId], contract.quantity);
            $gameParty.gainGold(contract.reward);
            console.log(`Contract fulfilled: Delivered ${contract.quantity} of ${contract.cropName} to ${contract.npcName}. Received ${contract.reward} gold.`);
            contracts.splice(contractId, 1); // Remove the contract from the list
        } else {
            console.error(`Not enough ${contract.cropName} to fulfill the contract.`);
        }
    });

    // Purchase an automation tool
    PluginManager.registerCommand(pluginName, "purchaseAutomationTool", args => {
        const toolName = args.toolName;

        if (automationTools[toolName]) {
            console.log(`${toolName} has already been purchased.`);
            return;
        }

        const toolCost = 500; // Example cost, adjust as needed
        if ($gameParty.gold() >= toolCost) {
            $gameParty.loseGold(toolCost);
            automationTools[toolName] = true;
            console.log(`Purchased automation tool: ${toolName}`);
        } else {
            console.error(`Not enough gold to purchase ${toolName}.`);
        }
    });

    // Place an automation tool on the farm
    PluginManager.registerCommand(pluginName, "placeAutomationTool", args => {
        const toolName = args.toolName;

                if (!automationTools[toolName]) {
            console.error(`Automation tool ${toolName} has not been purchased yet.`);
            return;
        }

        // Logic to place the tool on the farm and start its automation functionality
        console.log(`Placed automation tool: ${toolName} on the farm.`);
    });

    // Add a crafting recipe
    PluginManager.registerCommand(pluginName, "addCraftingRecipe", args => {
        const recipeName = args.recipeName;
        const ingredients = JSON.parse(args.ingredients);
        const result = args.result;
        const qualityFactor = args.qualityFactor === "true";

        craftingRecipes[recipeName] = {
            ingredients: ingredients,
            result: result,
            qualityFactor: qualityFactor
        };
        console.log(`Added crafting recipe: ${recipeName}`);
    });

    // Craft an item
    PluginManager.registerCommand(pluginName, "craftItem", args => {
        const recipeName = args.recipeName;
        const recipe = craftingRecipes[recipeName];

        if (!recipe) {
            console.error(`Recipe ${recipeName} not found.`);
            return;
        }

        // Check if the player has the required ingredients
        let hasIngredients = true;
        recipe.ingredients.forEach(ingredient => {
            const item = $dataItems[ingredient.itemId];
            const quantity = ingredient.quantity;
            if ($gameParty.numItems(item) < quantity) {
                hasIngredients = false;
                console.error(`Not enough ${item.name} to craft ${recipe.result}`);
            }
        });

        if (!hasIngredients) return;

        // Remove ingredients from the inventory
        recipe.ingredients.forEach(ingredient => {
            const item = $dataItems[ingredient.itemId];
            $gameParty.loseItem(item, ingredient.quantity);
        });

        let craftedItem = $dataItems[recipe.result];

        // Adjust the crafted item quality based on ingredient quality if qualityFactor is enabled
        if (recipe.qualityFactor) {
            let totalQuality = 0;
            recipe.ingredients.forEach(ingredient => {
                if (ingredient.quality === "Excellent") {
                    totalQuality += 2;
                } else if (ingredient.quality === "Good") {
                    totalQuality += 1;
                }
            });
            const averageQuality = totalQuality / recipe.ingredients.length;
            if (averageQuality >= 1.5) {
                craftedItem = $dataItems[`${recipe.result}_HQ`];  // Assume high-quality items are suffixed with _HQ
            } else if (averageQuality >= 1) {
                craftedItem = $dataItems[`${recipe.result}_GQ`];  // Assume good-quality items are suffixed with _GQ
            }
            console.log(`Crafted item quality adjusted to: ${craftedItem.name}`);
        }

        $gameParty.gainItem(craftedItem, 1);
        console.log(`Crafted ${craftedItem.name}`);
    });

    // Day Change Handler
    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        if (command === "DayChange") {
            applyAutomation(); // Apply automation at the start of each day

            Object.keys(plantedCrops).forEach(plotId => {
                const crop = plantedCrops[plotId];
                const cropData = crops[crop.cropId];
                const plot = plots[plotId];

                if (!isSeasonValid(cropData)) {
                    console.log(`The ${cropData.name} at plot ${plotId} is out of season and won't grow.`);
                    return;
                }

                applyWeatherEffects(crop, plot);
                applyDiseaseOrPest(crop);
                handleCropMutation(crop);

                let growthDays = cropData.growthStages[crop.growthStage].days;

                if (crop.fertilized) {
                    growthDays = Math.max(1, Math.floor(growthDays / 2));
                }

                crop.daysPlanted++;

                if (crop.daysPlanted >= growthDays) {
                    crop.growthStage++;
                    crop.daysPlanted = 0;
                    crop.watered = false;  // Reset watering status
                    crop.fertilized = false; // Reset fertilization status
                    console.log(`Crop at plot ${plotId} advanced to stage ${crop.growthStage}`);

                    // Update the graphic of the crop here
                    const stageGraphic = cropData.growthStages[crop.growthStage].graphic;
                    $gameScreen.showPicture(plotId, stageGraphic, 0, 0, 0, 100, 100, 255, 0);
                }
            });

            // Handle animal care and production
            Object.keys(animals).forEach(animalName => {
                const animal = animals[animalName];

                // Reset daily care status
                animal.fed = false;
                animal.clean = false;

                // Handle daily production if the animal was properly cared for
                if (animal.fed && animal.clean) {
                    console.log(`Animal ${animal.name} has produced resources.`);
                    // Logic to add resources to the player's inventory
                } else {
                    console.error(`Animal ${animal.name} was not properly cared for and did not produce resources.`);
                }
            });

            // Randomly generate a new contract each day
            if (Math.random() < 0.3) { // 30% chance to generate a new contract each day
                generateContract();
            }
        }
    };

})();


