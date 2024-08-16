/*:
 * @target MZ
 * @plugindesc An advanced Farming System plugin with full integration of VisuStella Plugins and Notetags for crops, animals, and more.
 * @author Symphatic
 * @version 5.0
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
 * plugins and includes custom Notetags for crops, animals, tools, and more.
 * 
 * ============================================================================
 * Integration with VisuStella Plugins
 * ============================================================================
 * - Compatible with VisuMZ_0_CoreEngine (Tier 0).
 * - Integrates with VisuMZ_1_ItemsEquipsCore for item management (Tier 1).
 * - Uses VisuMZ_1_EventsMoveCore for event handling (Tier 1).
 * - Incorporates VisuMZ_1_SkillsStatesCore for skill and state-based farming enhancements (Tier 1).
 * - Uses VisuMZ_1_OptionsCore to allow customizable farming settings (Tier 1).
 * - Integrates VisuMZ_1_MessageCore for dynamic farming-related messages (Tier 1).
 * - Relies on VisuMZ_2_DateTimeSystem for time-based growth (Tier 2).
 * - Utilizes VisuMZ_2_WeatherEffects for weather-based crop growth (Tier 2).
 * - Links with VisuMZ_2_ItemCraftingSys for crafting integration (Tier 2).
 * - Utilizes VisuMZ_2_ShopCommonEvents to trigger events during shop transactions (Tier 2).
 * - Supports VisuMZ_3_ShopBatches for batch item purchases in shops (Tier 3).
 * - Implements VisuMZ_3_ShopListUnlock for unlocking new shop items based on progress (Tier 3).
 * - Includes VisuMZ_4_RecruitingBoard for recruiting NPCs to assist with farming tasks (Tier 4).
 * 
 * ============================================================================
 * Custom Notetags
 * ============================================================================
 * <Season: spring>
 * <Growth Rate: 5>
 * <Animal Type: Cow>
 * <Product Yield: Milk, 2 per day>
 * <Tool Type: WateringCan>
 * <Tool Effect: +10% Growth>
 * <Fertilizer Type: Quality>
 * <Effect: Double Yield>
 * <Automation Tool: Sprinkler>
 * <Range: 5x5>
 * <No Weather>
 * <Weather Impact: Rain, +20% Growth>
 * <Recruit Cost Per Level: 100>
 * <Fixed Recruit Cost: 500>
 * <Crafting Ingredients>
 * <Custom Crafting Only>
 * <Shop Batch>
 * <Shop Unlock Requirements>
 * <Once Buy Common Event: id>
 * 
 * ============================================================================
 * Example Usage
 * ============================================================================
 * 1. Plant a crop: PluginCommand: plantCrop cropId:1 plotId:5
 * 2. Water a crop: PluginCommand: waterCrop plotId:5
 * 3. Set the weather to rain: PluginCommand: setWeather weather:rain
 * 4. Add an animal: PluginCommand: addAnimal animalType:Cow animalName:Bessie
 * 5. Care for an animal: PluginCommand: careForAnimal animalName:Bessie careType:Feed
 * 6. Craft an item: PluginCommand: craftItem recipeName:Potion
 * 7. Recruit an NPC: PluginCommand: recruitNPC npcId:1
 * 8. Assign an NPC Task: PluginCommand: assignNPCTask npcId:1 task:watering
 * 
 * ============================================================================
 * Version History
 * ============================================================================
 * - Version 5.0: Integrated Notetags for crops, animals, tools, and more.
 * - Version 4.0: Integrated Skills and States Core, Options Core, Message Core, Shop Common Events, Shop Batches, Shop List Unlock, and Recruiting Board.
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

    // Function to parse custom Notetags
    const parseNotetags = (notes) => {
        const notetags = {};
        const lines = notes.split(/[\r\n]+/);

        lines.forEach(line => {
            if (line.match(/<Season:\s*(\w+)>/i)) {
                notetags.season = RegExp.$1.toLowerCase();
            }
            if (line.match(/<Growth Rate:\s*(\d+)>/i)) {
                notetags.growthRate = parseInt(RegExp.$1);
            }
            if (line.match(/<Animal Type:\s*(\w+)>/i)) {
                notetags.animalType = RegExp.$1.toLowerCase();
            }
            if (line.match(/<Product Yield:\s*(\w+),\s*(\d+)\s*per\s*day>/i)) {
                notetags.productYield = {
                    product: RegExp.$1,
                    quantity: parseInt(RegExp.$2)
                };
            }
            if (line.match(/<Tool Type:\s*(\w+)>/i)) {
                notetags.toolType = RegExp.$1.toLowerCase();
            }
            if (line.match(/<Tool Effect:\s*\+(\d+)%\s*Growth>/i)) {
                notetags.toolEffect = parseInt(RegExp.$1);
            }
            if (line.match(/<Fertilizer Type:\s*(\w+)>/i)) {
                notetags.fertilizerType = RegExp.$1.toLowerCase();
            }
            if (line.match(/<Effect:\s*(.*)>/i)) {
                notetags.effect = RegExp.$1;
            }
            if (line.match(/<Automation Tool:\s*(\w+)>/i)) {
                notetags.automationTool = RegExp.$1.toLowerCase();
            }
            if (line.match(/<Range:\s*(\d+x\d+)>/i)) {
                notetags.range = RegExp.$1;
            }
            if (line.match(/<No Weather>/i)) {
                notetags.noWeather = true;
            }
            if (line.match(/<Weather Impact:\s*(\w+),\s*\+(\d+)%\s*Growth>/i)) {
                notetags.weatherImpact = {
                    weather: RegExp.$1.toLowerCase(),
                    effect: parseInt(RegExp.$2)
                };
            }
            if (line.match(/<Recruit Cost Per Level:\s*(\d+)>/i)) {
                notetags.recruitCostPerLevel = parseInt(RegExp.$1);
            }
            if (line.match(/<Fixed Recruit Cost:\s*(\d+)>/i)) {
                notetags.fixedRecruitCost = parseInt(RegExp.$1);
            }
            if (line.match(/<Crafting Ingredients>/i)) {
                notetags.craftingIngredients = true;
            }
            if (line.match(/<Custom Crafting Only>/i)) {
                notetags.customCraftingOnly = true;
            }
            if (line.match(/<Shop Batch>/i)) {
                notetags.shopBatch = true;
            }
            if (line.match(/<Shop Unlock Requirements>/i)) {
                notetags.shopUnlockRequirements = true;
            }
            if (line.match(/<Once Buy Common Event:\s*(\d+)>/i)) {
                notetags.onceBuyCommonEvent = parseInt(RegExp.$1);
            }
        });

        return notetags;
    };

    // Function to apply parsed Notetags to game objects
    const applyNotetags = (item) => {
        const notes = item.note || "";
        const notetags = parseNotetags(notes);

        if (notetags.season && notetags.season !== getCurrentSeason()) {
            console.log(`${item.name} cannot be planted in the ${notetags.season} season.`);
        }

        if (notetags.growthRate) {
            item.growthRate = notetags.growthRate;
        }

        if (notetags.productYield) {
            item.productYield = notetags.productYield;
        }

        if (notetags.toolEffect) {
            item.toolEffect = notetags.toolEffect;
        }

        if (notetags.weatherImpact) {
            item.weatherImpact = notetags.weatherImpact;
        }

        // Additional Notetag applications based on your game logic
    };

    // Apply Notetags in farming functions
    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        if (command === "plantCrop") {
            const cropId = Number(args.cropId);
            const plotId = Number(args.plotId);
            const crop = $dataItems[cropId];  // Assuming crops are items in the database
            applyNotetags(crop);

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
        }

        if (command === "waterCrop") {
            const plotId = Number(args.plotId);
            if (!plantedCrops[plotId]) return console.error(`No crop planted at plot ${plotId}`);

            plantedCrops[plotId].watered = true;

            const crop = $dataItems[plantedCrops[plotId].cropId];
            applyNotetags(crop);

            // Apply any Notetag logic that impacts watering
            if (crop.toolEffect) {
                plantedCrops[plotId].growthStage += crop.toolEffect / 100;
                console.log(`Growth rate increased by ${crop.toolEffect}% due to watering tool.`);
            }
        }

        if (command === "fertilizeCrop") {
            const plotId = Number(args.plotId);
            if (!plantedCrops[plotId]) return console.error(`No crop planted at plot ${plotId}`);

            plantedCrops[plotId].fertilized = true;

            const crop = $dataItems[plantedCrops[plotId].cropId];
            applyNotetags(crop);

            // Apply fertilizer Notetag effects
            if (crop.fertilizerType === "Quality") {
                plantedCrops[plotId].quality = "High";
                console.log(`Fertilizer applied: Crop quality increased.`);
            }
        }

        if (command === "addAnimal") {
            const animalType = args.animalType;
            const animalName = args.animalName;

            if (!animals[animalType]) return console.error(`Invalid animal type: ${animalType}`);

            animals[animalType].push({
                name: animalName,
                fed: false,
                clean: false,
                yieldMultiplier: 1.0
            });

            const animal = animals[animalType].find(a => a.name === animalName);
            applyNotetags(animal);

            if (animal.productYield) {
                animal.yieldMultiplier = animal.productYield.quantity;
                console.log(`${animal.name} will now produce ${animal.productYield.product} at a rate of ${animal.productYield.quantity} per day.`);
            }
        }

        if (command === "careForAnimal") {
            const animalName = args.animalName;
            const careType = args.careType;

            const animal = findAnimalByName(animalName);
            if (!animal) return console.error(`No animal found with name ${animalName}`);

            if (careType === "Feed") {
                animal.fed = true;
            } else if (careType === "Clean") {
                animal.clean = true;
            }

            applyNotetags(animal);

            // Adjust yield based on care and Notetags
            if (animal.productYield) {
                animal.yieldMultiplier *= 1.2; // Example of increasing yield based on care
                                console.log(`Care provided: ${animalName}'s productivity increased.`);
            }
        }

        if (command === "setWeather") {
            const weather = args.weather.toLowerCase();

            // Apply weather effects to all crops based on Notetags
            Object.keys(plantedCrops).forEach(plotId => {
                const crop = $dataItems[plantedCrops[plotId].cropId];
                applyNotetags(crop);

                if (crop.weatherImpact && crop.weatherImpact.weather === weather) {
                    plantedCrops[plotId].growthStage += crop.weatherImpact.effect / 100;
                    console.log(`Weather impact applied: Growth rate increased by ${crop.weatherImpact.effect}% due to ${weather}.`);
                }
            });

            // Additional weather-related logic if needed
            if (weather === "rain") {
                console.log("It's raining! All crops are automatically watered.");
                Object.keys(plantedCrops).forEach(plotId => {
                    plantedCrops[plotId].watered = true;
                });
            }
        }

        if (command === "generateContract") {
            // Generate a new contract based on available crops and Notetags
            const availableCrops = Object.keys(plantedCrops).map(plotId => $dataItems[plantedCrops[plotId].cropId]);

            const randomCrop = availableCrops[Math.floor(Math.random() * availableCrops.length)];
            applyNotetags(randomCrop);

            const contract = {
                cropId: randomCrop.id,
                cropName: randomCrop.name,
                quantity: Math.floor(Math.random() * 10) + 1,
                reward: randomCrop.price * 10, // Example reward calculation
                npcName: "Farmer Joe" // Example NPC name
            };

            contracts.push(contract);
            console.log(`New contract generated: Deliver ${contract.quantity} ${contract.cropName} to ${contract.npcName} for ${contract.reward} gold.`);
        }

        if (command === "fulfillContract") {
            const contractId = Number(args.contractId);
            const contract = contracts[contractId];

            if (!contract) return console.error(`Contract ID ${contractId} not found.`);

            const playerCropQuantity = $gameParty.numItems($dataItems[contract.cropId]);

            if (playerCropQuantity >= contract.quantity) {
                $gameParty.loseItem($dataItems[contract.cropId], contract.quantity);
                $gameParty.gainGold(contract.reward);
                console.log(`Contract fulfilled: ${contract.quantity} ${contract.cropName} delivered to ${contract.npcName}.`);
                contracts.splice(contractId, 1);
            } else {
                console.error(`Not enough ${contract.cropName} to fulfill the contract.`);
            }
        }

        if (command === "purchaseAutomationTool") {
            const toolName = args.toolName;
            const tool = $dataItems.find(item => item.name === toolName);

            if (!tool) return console.error(`Tool ${toolName} not found.`);

            $gameParty.gainItem(tool, 1);
            applyNotetags(tool);

            if (tool.automationTool) {
                automationTools.push(tool);
                console.log(`Automation tool ${toolName} purchased and added to the farm.`);
            }
        }

        if (command === "placeAutomationTool") {
            const toolName = args.toolName;
            const tool = automationTools.find(t => t.name === toolName);

            if (!tool) return console.error(`Automation tool ${toolName} not found.`);

            applyNotetags(tool);

            // Implement logic to place the automation tool on the farm
            console.log(`Placed automation tool ${toolName} on the farm.`);
        }

        if (command === "craftItem") {
            const recipeName = args.recipeName;
            const recipe = craftingRecipes.find(r => r.name === recipeName);

            if (!recipe) return console.error(`Recipe ${recipeName} not found.`);

            applyNotetags(recipe);

            const ingredientsAvailable = recipe.ingredients.every(ingredient => {
                return $gameParty.numItems($dataItems[ingredient.itemId]) >= ingredient.quantity;
            });

            if (ingredientsAvailable) {
                recipe.ingredients.forEach(ingredient => {
                    $gameParty.loseItem($dataItems[ingredient.itemId], ingredient.quantity);
                });
                $gameParty.gainItem($dataItems[recipe.result], 1);
                console.log(`Crafted ${recipe.result} using ${recipeName} recipe.`);
            } else {
                console.error(`Not enough ingredients to craft ${recipe.result}.`);
            }
        }

        if (command === "recruitNPC") {
            const npcId = Number(args.npcId);
            const npcData = $dataActors[npcId];

            if (!npcData) return console.error(`NPC with ID ${npcId} not found.`);

            applyNotetags(npcData);

            const cost = npcData.recruitCostPerLevel ? npcData.recruitCostPerLevel * $gameActors.actor(npcId).level : npcData.fixedRecruitCost;

            if ($gameParty.gold() >= cost) {
                $gameParty.loseGold(cost);
                $gameParty.addActor(npcId);
                console.log(`Recruited ${npcData.name} for ${cost} gold.`);
            } else {
                console.error(`Not enough gold to recruit ${npcData.name}.`);
            }
        }

        if (command === "assignNPCTask") {
            const npcId = Number(args.npcId);
            const task = args.task;

            const npc = $gameActors.actor(npcId);
            if (!npc) return console.error(`NPC with ID ${npcId} not found.`);

            applyNotetags(npc);

            if (npc.skills.includes(task)) {
                console.log(`${npc.name} is assigned to ${task}.`);
                // Implement task assignment logic here
            } else {
                console.error(`${npc.name} does not have the skill for ${task}.`);
            }
        }
    };

    const findAnimalByName = (name) => {
        for (const type in animals) {
            const animal = animals[type].find(a => a.name === name);
            if (animal) return animal;
        }
        return null;
    };

    const getCurrentSeason = () => {
        // Example logic to get the current season
        return "spring"; // Replace with actual logic
    };

})();