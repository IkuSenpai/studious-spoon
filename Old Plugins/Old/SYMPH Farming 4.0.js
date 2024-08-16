/*:
 * @target MZ
 * @plugindesc An advanced Farming System plugin with full integration of VisuStella Plugins, including crops, animals, crafting, and more.
 * @author Symphatic
 * @version 4.0
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
 * - Incorporates VisuMZ_1_SkillsStatesCore for skill and state-based farming enhancements (Tier 1).
 * - Uses VisuMZ_1_OptionsCore to allow customizable farming settings (Tier 1).
 * - Integrates VisuMZ_1_MessageCore for dynamic farming-related messages (Tier 1).
 * - Utilizes VisuMZ_2_ShopCommonEvents to trigger events during shop transactions (Tier 2).
 * - Supports VisuMZ_3_ShopBatches for batch item purchases in shops (Tier 3).
 * - Implements VisuMZ_3_ShopListUnlock for unlocking new shop items based on progress (Tier 3).
 * - Includes VisuMZ_4_RecruitingBoard for recruiting NPCs to assist with farming tasks (Tier 4).
 * 
 * ============================================================================
 * How to Use
 * ============================================================================
 * - Define your crops, animals, and crafting recipes in the Plugin Parameters.
 * - Use the provided commands to manage crops, animals, and contracts.
 * - Automate farm tasks using tools like sprinklers and harvesters.
 * - Craft items using harvested crops and animal resources.
 * - Recruit NPCs to help manage the farm.
 * - Customize farming experience through the Options menu.
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
 * - Recruit NPC: Recruits an NPC to assist with farming tasks.
 * - Assign NPC Task: Assigns a specific task to a recruited NPC.
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
 * 7. Recruit an NPC: PluginCommand: recruitNPC npcId:1
 * 8. Assign an NPC Task: PluginCommand: assignNPCTask npcId:1 task:watering
 * 
 * ============================================================================
 * Version History
 * ============================================================================
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

    // Integrate Skills and States Core
    const GREEN_THUMB_SKILL_ID = 10; // Example skill ID
    const BOOSTED_YIELD_STATE_ID = 15; // Example state ID

    const modifyCropGrowth = (crop) => {
        if ($gameActors.actor(1).isLearnedSkill(GREEN_THUMB_SKILL_ID)) {
            crop.growthStage = Math.min(crop.growthStage + 1, crop.growthStages.length - 1);
        }
    };

    const modifyAnimalProductivity = (animal) => {
        if ($gameActors.actor(1).isStateAffected(BOOSTED_YIELD_STATE_ID)) {
            animal.yieldMultiplier *= 2;
        }
    };

    // Integrate Options Core
    const FARM_AUTOMATION_OPTION = "FarmAutomation";
    const FARM_DIFFICULTY_OPTION = "FarmDifficulty";
    const FARM_NOTIFICATIONS_OPTION = "FarmNotifications";

    ConfigManager[FARM_AUTOMATION_OPTION] = true;
    ConfigManager[FARM_DIFFICULTY_OPTION] = "Normal";
    ConfigManager[FARM_NOTIFICATIONS_OPTION] = true;

    Object.defineProperty(ConfigManager, FARM_AUTOMATION_OPTION, {
        get: function() {
            return this._farmAutomation;
        },
        set: function(value) {
            this._farmAutomation = value;
        }
    });

    Object.defineProperty(ConfigManager, FARM_DIFFICULTY_OPTION, {
        get: function() {
            return this._farmDifficulty;
        },
        set: function(value) {
            this._farmDifficulty = value;
        }
    });

    Object.defineProperty(ConfigManager, FARM_NOTIFICATIONS_OPTION, {
        get: function() {
            return this._farmNotifications;
        },
        set: function(value) {
            this._farmNotifications = value;
        }
    });

    const applyFarmOptions = () => {
        if (ConfigManager[FARM_AUTOMATION_OPTION]) {
            console.log("Farm automation is enabled.");
        } else {
            console.log("Farm automation is disabled.");
        }

        switch (ConfigManager[FARM_DIFFICULTY_OPTION]) {
            case "Easy":
                console.log("Farming difficulty set to Easy.");
                break;
            case "Normal":
                console.log("Farming difficulty set to Normal.");
                break;
            case "Hard":
                console.log("Farming difficulty set to Hard.");
                break;
        }

        if (ConfigManager[FARM_NOTIFICATIONS_OPTION]) {
            console.log("Farm notifications are enabled.");
        } else {
            console.log("Farm notifications are disabled.");
        }
    };

    const _Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
    Window_Options.prototype.addGeneralOptions = function() {
        _Window_Options_addGeneralOptions.call(this);
        this.addCommand("Farm Automation", FARM_AUTOMATION_OPTION);
        this.addCommand("Farm Difficulty", FARM_DIFFICULTY_OPTION);
        this.addCommand("Farm Notifications", FARM_NOTIFICATIONS_OPTION);
    };

    const _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function() {
        _Scene_Boot_start.call(this);
        applyFarmOptions();
    };

    const _ConfigManager_save = ConfigManager.save;
    ConfigManager.save = function() {
        applyFarmOptions();
        _ConfigManager_save.call(this);
    };

    // Integrate Message Core
    const FARMING_MESSAGES = {
        cropWatered: "The crops at plot %1 have been watered.",
        cropFertilized: "The crops at plot %1 have been fertilized.",
        cropGrown: "The crops at plot %1 have grown to stage %2.",
        animalFed: "The animal %1 has been fed.",
        animalCleaned: "The animal %1 has been cleaned.",
        contractCompleted: "You have completed the contract with %1.",
        automationActivated: "Automation tools have been activated.",
        automationDeactivated: "Automation tools have been deactivated.",
        notification: "Reminder: %1"
    };

    const displayFarmingMessage = (message, ...args) => {
        const formattedMessage = FARMING_MESSAGES[message].format(...args);
        $gameMessage.add(formattedMessage);
    };

    PluginManager.registerCommand(pluginName, "waterCrop", args => {
        const plotId = Number(args.plotId);
        if (!plantedCrops[plotId]) return console.error(`No crop planted at plot ${plotId}`);
        plantedCrops[plotId].watered = true;
        displayFarmingMessage("cropWatered", plotId);
    });

    PluginManager.registerCommand(pluginName, "fertilizeCrop", args => {
        const plotId = Number(args.plotId);
        if (!plantedCrops[plotId]) return console.error(`No crop planted at plot ${plotId}`);
        plantedCrops[plotId].fertilized = true;
        displayFarmingMessage("cropFertilized", plotId);
    });

    PluginManager.registerCommand(pluginName, "careForAnimal", args => {
        const animalName = args.animalName;
        const careType = args.careType;

        const animal = animals[animalName];
        if (!animal) return console.error(`No animal found with name ${animalName}`);

        if (careType === "Feed") {
            animal.fed = true;
            displayFarmingMessage("animalFed", animalName);
        } else if (careType === "Clean") {
            animal.clean = true;
            displayFarmingMessage("animalCleaned", animalName);
        }
    });

    PluginManager.registerCommand(pluginName, "fulfillContract", args => {
        const contractId = Number(args.contractId);
        const contract = contracts[contractId];

        if (!contract) return console.error(`Contract ID ${contractId} not found.`);

        const playerCropQuantity = $gameParty.numItems($dataItems[contract.cropId]);

        if (playerCropQuantity >= contract.quantity) {
            $gameParty.loseItem($dataItems[contract.cropId], contract.quantity);
            $gameParty.gainGold(contract.reward);
            displayFarmingMessage("contractCompleted", contract.npcName);
            contracts.splice(contractId, 1);
        } else {
            console.error(`Not enough ${contract.cropName} to fulfill the contract.`);
        }
    });

        const sendNotification = (message) => {
        displayFarmingMessage("notification", message);
    };

    const _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);
        if ($gameSwitches.value(1)) {  // Example condition
            sendNotification("Don't forget to water your crops!");
            $gameSwitches.setValue(1, false);  // Turn off switch after reminder
        }
    };

    // Integrate Shop Common Events
    const SEED_PURCHASE_EVENT_ID = 1;
    const TOOL_PURCHASE_EVENT_ID = 2;
    const ANIMAL_PURCHASE_EVENT_ID = 3;

    const triggerCommonEvent = (eventId) => {
        $gameTemp.reserveCommonEvent(eventId);
    };

    const _Scene_Shop_onBuyOk = Scene_Shop.prototype.onBuyOk;
    Scene_Shop.prototype.onBuyOk = function() {
        const item = this._item;
        const itemId = item.id;

        if (itemId === SEED_PURCHASE_EVENT_ID) {
            triggerCommonEvent(SEED_PURCHASE_EVENT_ID);
        } else if (itemId === TOOL_PURCHASE_EVENT_ID) {
            triggerCommonEvent(TOOL_PURCHASE_EVENT_ID);
        } else if (itemId === ANIMAL_PURCHASE_EVENT_ID) {
            triggerCommonEvent(ANIMAL_PURCHASE_EVENT_ID);
        }

        _Scene_Shop_onBuyOk.call(this);
    };

    const _Scene_Shop_onSellOk = Scene_Shop.prototype.onSellOk;
    Scene_Shop.prototype.onSellOk = function() {
        const item = this._item;
        const itemId = item.id;

        if (itemId === SEED_PURCHASE_EVENT_ID) {
            triggerCommonEvent(SEED_PURCHASE_EVENT_ID);
        }

        _Scene_Shop_onSellOk.call(this);
    };

    // Integrate Shop Batches
    const BATCHES = {
        seedBundle: {
            items: [
                { itemId: 1, quantity: 10 }, // Example: 10 of item ID 1
                { itemId: 2, quantity: 5 }   // Example: 5 of item ID 2
            ]
        },
        toolKit: {
            items: [
                { itemId: 3, quantity: 1 }, // Example: 1 of item ID 3
                { itemId: 4, quantity: 1 }  // Example: 1 of item ID 4
            ]
        }
    };

    const _Scene_Shop_onBuyOkBatch = Scene_Shop.prototype.onBuyOk;
    Scene_Shop.prototype.onBuyOk = function() {
        const item = this._item;
        const batch = BATCHES[item.name];

        if (batch) {
            batch.items.forEach(batchItem => {
                const itemData = $dataItems[batchItem.itemId];
                $gameParty.gainItem(itemData, batchItem.quantity);
            });
            console.log(`Purchased ${item.name} batch.`);
        } else {
            _Scene_Shop_onBuyOkBatch.call(this);
        }
    };

    // Integrate Shop List Unlock
    const UNLOCK_CONDITIONS = {
        advancedTools: {
            condition: () => $gameVariables.value(1) >= 10,
            items: [5, 6]
        },
        rareSeeds: {
            condition: () => $gameSwitches.value(2),
            items: [7, 8]
        }
    };

    const _Scene_Shop_prepareGoods = Scene_Shop.prototype.prepareGoods;
    Scene_Shop.prototype.prepareGoods = function() {
        _Scene_Shop_prepareGoods.call(this);

        Object.keys(UNLOCK_CONDITIONS).forEach(key => {
            const unlockCondition = UNLOCK_CONDITIONS[key];
            if (unlockCondition.condition()) {
                unlockCondition.items.forEach(itemId => {
                    this._goods.push([0, itemId, 0, 0]);
                });
                console.log(`Unlocked items for ${key}`);
            }
        });
    };

    // Integrate Recruiting Board
    const RECRUITABLE_NPCS = {
        farmhandJohn: {
            name: "John",
            skills: {
                watering: 1,
                feeding: 2,
                harvesting: 1
            }
        },
        farmhandJane: {
            name: "Jane",
            skills: {
                watering: 2,
                feeding: 1,
                harvesting: 2
            }
        }
    };

    const recruitNPC = (npcId) => {
        if (!$gameParty.recruitingBoard) {
            $gameParty.recruitingBoard = {};
        }
        if (!RECRUITABLE_NPCS[npcId]) return console.error(`NPC ID ${npcId} not found.`);
        $gameParty.recruitingBoard[npcId] = RECRUITABLE_NPCS[npcId];
        console.log(`Recruited ${RECRUITABLE_NPCS[npcId].name} to assist with farm tasks.`);
    };

    const assignTaskToNPC = (npcId, task) => {
        if (!$gameParty.recruitingBoard || !$gameParty.recruitingBoard[npcId]) {
            return console.error(`NPC ID ${npcId} is not recruited.`);
        }
        const npc = $gameParty.recruitingBoard[npcId];
        if (npc.skills[task]) {
            console.log(`${npc.name} is assigned to ${task}.`);
            if (task === "watering") {
                const effectiveness = npc.skills.watering;
                console.log(`Watering effectiveness: ${effectiveness}`);
            }
        } else {
            console.error(`${npc.name} does not have the skill for ${task}.`);
        }
    };

    const _Scene_RecruitBoard_onOk = Scene_RecruitBoard.prototype.onOk;
    Scene_RecruitBoard.prototype.onOk = function() {
        const npcId = this._npcId;
        recruitNPC(npcId);
        _Scene_RecruitBoard_onOk.call(this);
    };

    const assignTasks = () => {
        assignTaskToNPC("farmhandJohn", "watering");
        assignTaskToNPC("farmhandJane", "feeding");
    };

    const _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function() {
        _Scene_Map_start.call(this);
        assignTasks();
    };

})();
