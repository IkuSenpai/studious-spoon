//=============================================================================
// VisuStella MZ - Furniture System
// VisuMZ_2_FurnitureSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_FurnitureSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.FurnitureSystem = VisuMZ.FurnitureSystem || {};
VisuMZ.FurnitureSystem.version = 1.09;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.09] [FurnitureSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Furniture_System_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_EventsMoveCore
 * @orderAfter VisuMZ_1_EventsMoveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Ever wanted to let your player decorate certain maps with furniture items?
 * Letting players let loose is a great way for players to turn a playthrough
 * into something that they can call their own and express themselves. This
 * plugin allows you to create furniture items that the player can place on
 * designated maps and create a place they feel at home.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Select which maps that players can decorate with furniture.
 * * Players can select special furniture items directly from the Item Menu to
 *   place onto these maps.
 * * Furniture pieces are events that are spawned and can have functionality!
 * * Template variations allow you to create furniture pieces that can rotate
 *   in different ways or provide different variations of a piece of furniture.
 * * Restrict certain furniture objects so that they can only be placed onto
 *   specific regions or terrain tags or forbid them from being placed there.
 * * Furniture pieces, once placed, can be moved again by the player by simply
 *   holding down the mouse button or through interactive Plugin Commands.
 * * Specialized notetags that prevent furniture pieces from being moved so
 *   that you can use them on unmovable objects, like crops!
 * * Run Common Events whenever furniture pieces are placed down to add special
 *   interactive effects.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_EventsMoveCore
 * * Pixi JS Filters*
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 * 
 * *Note* You can download the Pixi JS Filters plugin library from the below
 * URL or from the Action Sequence Impact product page. Install it as a
 * Tier 0 plugin.
 * 
 * *Note2* Pixi JS Filters perform differently on different machines/devices.
 * Please understand that this is outside of VisuStella's control.
 * 
 * URL: https://filters.pixijs.download/v3.1.0/pixi-filters.js
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Instructions - Quick Start
 * ============================================================================
 * 
 * Here are some instructions to get yourself started quickly on using the
 * Furniture System.
 * 
 * ---
 * 
 * Step 1: Creating a Furniture Storage Map
 * 
 * 1. Create a new map (or use an old one if you know what you're doing).
 * 2. On this map, create the furniture pieces that will be seen in the game.
 * 3. Record the Map ID and any Event ID(s) that you want to use.
 * 
 * ---
 * 
 * Step 2: Registering the Map and Events
 * 
 * 1. Open up VisuStella MZ's Events & Movement Core's Plugin Parameters.
 *    (VisuMZ_1_EventsMoveCore)
 * 2. Open up "Event Template Settings".
 * 3. Store the furniture map's Map ID into "Preloaded Maps".
 * 4. Create new Event Templates in "Event Template List" using the Map ID and
 *    any Event ID(s) that will be used as furniture.
 * 5. Write down any "Template names" that you want to use later.
 * 6. Close the Plugin Parameters and save everything.
 * 
 * ---
 * 
 * Step 3: Creating Furniture Items in the Database
 * 
 * 1. Open up the RPG Maker MZ Database Editor.
 * 2. Go to the Item's tab.
 * 3. Create a regular item. It doesn't need any specific function but give it
 *    a name, icon, and/or description.
 * 4. Add in the following notetag into the item's note box:
 *    <Furniture Template: name>
 * 5. Replace 'name' in the notetag with a name of the Event Template to refer
 *    to for a furniture event.
 * 6. You do NOT need to modify the "Occassion" setting as this will be
 *    automatically decided by the plugin.
 * 7. Create as many items this way as needed.
 * 8. Close the item database by clicking OK and save the game project.
 * 
 * ---
 * 
 * Step 4: Creating a Furniture-Allowed Map
 * 
 * 1. Create a new map where you want your player to be able to place
 *    furniture on any way they wish.
 * 2. Right click the map's name in the editor and go to the Map's Properties.
 * 3. Add the <Allow Furniture> notetag to the map's notebox.
 * 4. Alternatively, you can go to the Furniture System's Plugin Parameters,
 *    go to "Default Settings", and allow all maps to have furniture access by
 *    default unless they have the <No Furniture> notetag.
 * 5. Give your player a way to acquire some of the furniture database items.
 * 6. Save the game project.
 * 7. Let's test it out!
 * 
 * ---
 * 
 * Step 5: Play Testing
 * 
 * 1. As the player, acquire the database items for the Furniture pieces.
 * 2. Go to the map where you can place furniture.
 * 3. Open up the Main Menu and go to "Items".
 * 4. From there, select the furniture item and use it.
 * 5. The game should take you back to the map scene but this time, with an
 *    event in front of the player resembling the piece of furniture that can
 *    be placed on the map.
 * 6. Place the piece of furniture on the map using the arrow keys or mouse.
 * 7. Press Z or the Left Mouse Button to put down the piece of furniture.
 * 8. Press X or the Right Mouse Button to exit Furniture Mode.
 * 9. Alternatively, if you run out of furniture items to put down, the game
 *    will automatically exit you out of Furniture Mode.
 * 10. If you want to quickly move furniture events that have already been
 *     placed, left click and hold the mouse button on them for 1.5 seconds.
 * 
 * ---
 * 
 * Enjoy!
 * 
 * ---
 *
 * ============================================================================
 * Understanding Features
 * ============================================================================
 *
 * Here are the newest features added to RPG Maker MZ through this plugin.
 *
 * ---
 *
 * Furniture Mode
 * 
 * When furniture objects are being placed, the map scene will freeze up,
 * preventing the player and events from being able to move or open up the main
 * menu until Furniture Mode is finished.
 * 
 * Furniture Mode can only be entered on maps where furniture is enabled to be
 * placed on. This can be setup via the Plugin Parameters (so that they can all
 * be on or off by default) or by using the <Allow Furniture> or <No Furniture>
 * notetags inside of the map's note box.
 *
 * ---
 * 
 * Furniture Events
 * 
 * Furniture Events are spawned events that are made through VisuStella MZ's
 * Events & Movement Core. As such, the VisuMZ_1_EventsMoveCore plugin is
 * required for this plugin to run.
 * 
 * For those unfamiliar with Event Templates, please read through the Event &
 * Movement Core's helpfile for Event Templates. These templates need to be
 * stored within the designated "Preloaded Maps" and "Templates" list found in
 * the Event & Movement Core's Plugin Parameters.
 * 
 * As Furniture Events are also spawned items, they are also affected by any
 * Despawn effects that come from either Events & Movement Core or this
 * plugin's Plugin Commands.
 * 
 * ---
 * 
 * Furniture Items (Database Objects)
 * 
 * Furniture database objects are items. In fact, they can't be weapons or
 * armors or anything else. They have to be items. A furniture item will
 * require the <Furniture Template: name> notetag in it for it to be properly
 * registered as a furniture item.
 * 
 * Furniture items will automatically be unusable outside of the item scene,
 * meaning that you cannot use them in battle. When inside the item scene, the
 * furniture item will check to see if the current map is one that supports
 * furniture items.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Map-Related Notetags ===
 * 
 * ---
 *
 * <Allow Furniture>
 *
 * - Used for: Map Notetags
 * - Allows furniture objects to be placed on this map by the player.
 * - If this notetag is not present, the furniture-accessibility for the player
 *   is depending on the settings found in the Plugin Parameters.
 *
 * ---
 *
 * <No Furniture>
 *
 * - Used for: Map Notetags
 * - Prevents furniture objects from being placed on this map by the player.
 * - You can still spawn furniture objects onto the map via Plugin Command.
 * - If this notetag is not present, the furniture-accessibility for the player
 *   is depending on the settings found in the Plugin Parameters.
 *
 * ---
 * 
 * <Furniture Type: type>
 * <Furniture Types: type, type, type>
 * 
 * - Used for: Map Notetags
 * - Determines which furniture types are allowed on the map to be placed from
 *   the item menu.
 * - Furniture items with those any of matching furniture types are allowed to
 *   be placed on the map.
 *   - This does NOT affect the furniture types placed through the Plugin
 *     Commands or pre-existing pieces of furniture placed there.
 * - Replace 'type' with text categories explaining the type.
 * - All maps allow the 'any' furniture type.
 * - This will also provide the effect of the <Allow Furniture> notetag.
 * 
 *   Example:
 * 
 *   <Furniture Type: Outdoor>
 *   <Furniture Types: Outdoor, Lighting>
 * 
 * ---
 * 
 * === Furniture-Related Notetags ===
 * 
 * ---
 *
 * <Furniture Template: name>
 * <Furniture Templates: name, name, name>
 *
 * - Used for: Item Notetags
 * - Marks this item database object as a furniture piece of item.
 * - Replace 'name' with the name of a stored Event Template found within the
 *   Events and Movement Core's Plugin Parameters.
 *   - Insert multiple names if you want more variations associated with this
 *     furniture item.
 *   - These variations can be different rotations of the item or different
 *     colors of them, or maybe even both. The choice is yours.
 * - This notetag is absolutely needed in order to mark this database object as
 *   a piece of furniture item.
 *
 * ---
 * 
 * <Furniture Type: type>
 * <Furniture Types: type, type, type>
 * 
 * - Used for: Items Notetags
 * - Determines which furniture types this furniture item is considered to be
 *   when being placed by the player from the item menu.
 * - Furniture items can only be placed on maps that allow any of the matching
 *   furniture types.
 *   - This does NOT affect the furniture types placed through the Plugin
 *     Commands or pre-existing pieces of furniture placed there.
 * - Replace 'type' with text categories explaining the type.
 * - If no 'type' is used, this furniture item will default to the 'any' type.
 * 
 *   Example:
 * 
 *   <Furniture Type: Outdoor>
 *   <Furniture Types: Outdoor, Lighting>
 * 
 * ---
 *
 * <Furniture Allow Region: x>
 * <Furniture Allow Regions: x, x, x>
 *
 * - Used for: Item Notetags
 * - Dictates the regions that the player can ONLY place this piece of
 *   furniture on. In other words, you cannot place furniture on tiles without
 *   the region.
 * - This will bypass passability rules (so that you can use them for wall
 *   decorations).
 * - Replace 'x' with a number between 1 and 255 representing the Region ID
 *   associated with this notetag effect.
 *   - Insert multiple numbers to expand the regions that the furniture can
 *     be placed on.
 * - This notetag CANNOT be used together on the same object with the notetag:
 *   <Furniture Forbid Region: x> and variants.
 * - If this notetag is not used, then the Allowed Regions settings will
 *   default to whatever setting is found in this plugin's Plugin Parameters.
 *
 * ---
 *
 * <Furniture Forbid Region: x>
 * <Furniture Forbid Regions: x, x, x>
 *
 * - Used for: Item Notetags
 * - Dictates the regions that the player CANNOT place this piece of furniture
 *   on. In other words, you cannot place furniture on tiles with this region.
 * - Replace 'x' with a number between 1 and 255 representing the Region ID
 *   associated with this notetag effect.
 *   - Insert multiple numbers to expand the regions that the furniture cannot
 *     be placed on.
 * - This notetag CANNOT be used together on the same object with the notetag:
 *   <Furniture Allow Region: x> and variants.
 * - If this notetag is not used, then the Forbid Regions settings will
 *   default to whatever setting is found in this plugin's Plugin Parameters.
 *
 * ---
 *
 * <Furniture Allow Terrain Tag: x>
 * <Furniture Allow Terrain Tags: x, x, x>
 *
 * - Used for: Item Notetags
 * - Dictates the terrain tag tiles that the player can ONLY place this piece
 *   of furniture on. In other words, you cannot place furniture on tiles
 *   without the terrain tag.
 * - This will bypass passability rules (so that you can use them for wall
 *   decorations).
 * - Replace 'x' with a number between 1 and 7 representing the Terrain Tag
 *   associated with this notetag effect.
 *   - Insert multiple numbers to expand the tiles that the furniture can
 *     be placed on.
 * - This notetag CANNOT be used together on the same object with the notetag:
 *   <Furniture Allow Terrain Tag: x> and variants.
 * - If this notetag is not used, then the Allowed Terrain Tag settings will
 *   default to whatever setting is found in this plugin's Plugin Parameters.
 *
 * ---
 *
 * <Furniture Forbid Terrain Tag: x>
 * <Furniture Forbid Terrain Tags: x, x, x>
 *
 * - Used for: Item Notetags
 * - Dictates the terrain tag tiles that the player CANNOT place this piece of
 *   furniture on. In other words, you cannot place furniture on tiles with
 *   this terrain tag.
 * - Replace 'x' with a number between 1 and 7 representing the Terrain Tag
 *   associated with this notetag effect.
 *   - Insert multiple numbers to expand the tiles that the furniture cannot
 *     be placed on.
 * - This notetag CANNOT be used together on the same object with the notetag:
 *   <Furniture Forbid Terrain Tag: x> and variants.
 * - If this notetag is not used, then the Forbid Terrain Tag settings will
 *   default to whatever setting is found in this plugin's Plugin Parameters.
 *
 * ---
 *
 * <Furniture Check Event Collision>
 * <Furniture Allow Event Stacking>
 *
 * - Used for: Item Notetags
 * - Causes the furniture object to check for event collision or let the player
 *   stack events on a single tile infinitely.
 * - We recommend not using the "Allow" version. Best leave this notetag alone
 *   unless you absolutely know what you're doing with it.
 * - If either of these notetags are not used, then the default settings will
 *   be determined by the setting found in this plugin's Plugin Parameters.
 *
 * ---
 *
 * <Furniture Need Passability>
 * <Furniture Free Passability>
 *
 * - Used for: Item Notetags
 * - The "Need" notetag variant determines if the furniture object checks if
 *   the tile it's placed on must have passability in order to be valid.
 * - The "Free" notetag variant version does the opposite; it does not need any
 *   passability settings.
 * - This effect is ignored with the Allowed Region/Terrain Tag notetags.
 * - If either of these notetags are not used, then the default settings will
 *   be determined by the setting found in this plugin's Plugin Parameters.
 * - *NOTE!* The passability check does not work well with the A4 Tiles.
 *   Unfortunately, there is not much we can do about this because of the way
 *   RPG Maker MZ handles it. No matter how you mark them in the database, RPG
 *   Maker MZ will decide that they are passable. You have to work around this
 *   with Forbid Region notetags or Forbid Terrain Tag notetags.
 *
 * ---
 *
 * <Furniture Place Common Event: x>
 *
 * - Used for: Item Notetags
 * - Runs a Common Event when the furniture object is placed.
 * - Replace 'x' with a number representing the ID of the Common Event to run.
 * - If this notetag is not used, then the default settings for this effect
 *   will be determined by this plugin's Plugin Parameters.
 *
 * ---
 *
 * <Furniture Place Once>
 * <Furniture Place Until Empty>
 *
 * - Used for: Item Notetags
 * - Automatically exit "Furniture Mode" once a furniture object is placed or
 *   only exit after the items placing them have been emptied out (or until the
 *   player presses cancel).
 * - If this notetag is not used, then the default settings for this effect
 *   will be determined by this plugin's Plugin Parameters.
 *
 * ---
 *
 * <Furniture Prevent Cancel Exit>
 *
 * - Used for: Item Notetags
 * - For those weird times where you don't want the player to be able to cancel
 *   out of furniture mode when using this item.
 * - There is no Plugin Parameter default for this.
 *
 * ---
 * 
 * === JavaScript-Furniture Notetags ===
 * 
 * ---
 * 
 * <JS On Place Furniture>
 *  code
 *  code
 *  code
 * </JS On Place Furniture>
 * 
 * - Used for: Item Notetags
 * - When this furniture item is placed, run JavaScript 'code'.
 * - The 'item' variable will refer to this item.
 * - This JS code will run when the furniture item is placed down be it
 *   directly from the inventory or upon being moved and stamped down.
 * 
 * ---
 * 
 * <JS On Remove Furniture>
 *  code
 *  code
 *  code
 * </JS On Remove Furniture>
 * 
 * - Used for: Item Notetags
 * - When this furniture item is removed, run JavaScript 'code'.
 * - The 'item' variable will refer to this item.
 * - This JS code will run when the furniture item is removed after originally
 *   being placed down from an item.
 * - This code will also run at the start of a furniture item being moved.
 * 
 * ---
 * 
 * === Event-Related Notetags ===
 * 
 * ---
 *
 * <Furniture Not Movable>
 *
 * - Used for: Event Notetags
 * - NOTE! This does NOT work if you put it inside an event's comments.
 * - Prevents the furniture from being movable by either player interaction or
 *   Plugin Command.
 * - Use for things like crops.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Furniture Plugin Commands ===
 * 
 * ---
 *
 * Furniture: Add Player Placement
 * - Start furniture placement mode for a specific template type.
 * - Player determines the actual position.
 * - Cannot use this Plugin Command during Furniture Mode.
 *
 *   Furniture Item:
 *   - Which furniture item is used to be placed?
 *   - Non-furniture items won't work.
 *
 *   Generate Item?:
 *   - Generate an item for the player?
 *   - If the player does not have the furniture item in stock, this will not
 *     work.
 *
 * ---
 *
 * Furniture: Spawn At X, Y
 * - Spawns desired furniture at X, Y location on the current map.
 * - Cannot use this Plugin Command during Furniture Mode.
 *
 *   Furniture Item:
 *   - Which furniture item is used to be placed?
 *   - Non-furniture items won't work.
 *
 *   Template Index:
 *   - Which template index do you wish to use for the spawned furniture item?
 *   - Index starts at 0.
 * 
 *   Location:
 *
 *     X Coordinate:
 *     Y Coordinate:
 *     - Target X/Y coordinate to spawn at.
 *     - You may use JavaScript code.
 *
 *   Success Switch ID:
 *   - Target switch ID to record spawning success.
 *   - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 * 
 * === Event At X/Y Plugin Commands ===
 * 
 * ---
 *
 * Event At X/Y: Despawn Furniture
 * - Completely remove the furniture event at X/Y.
 * - Can use on either furniture or non-furniture.
 *
 *   X Coordinate:
 *   Y Coordinate:
 *   - Target X/Y coordinate to search for Furniture Event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event At X/Y: Move Furniture
 * - Move the furniture item event at X/Y.
 * - Use on a template event that can be spawned and moved.
 * - Cannot use this Plugin Command during Furniture Mode.
 *
 *   X Coordinate:
 *   Y Coordinate:
 *   - Target X/Y coordinate to search for Furniture Event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event At X/Y: Retrieve Furniture
 * - Retrieve the furniture at X/Y to Player's inventory.
 * - Use on a template event that can be spawned and moved.
 *
 *   X Coordinate:
 *   Y Coordinate:
 *   - Target X/Y coordinate to search for Furniture Event.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === This Event Plugin Commands ===
 * 
 * ---
 *
 * This Event: Despawn Furniture
 * - Completely remove this current furniture event.
 * - Can use on either furniture or non-furniture.
 *
 * ---
 *
 * This Event: Move Furniture
 * - Move this current furniture item.
 * - Use on a template event that can be spawned and moved.
 *
 * ---
 *
 * This Event: Retrieve Furniture
 * - Retrieve this current furniture to Player's inventory.
 * - Use on a template event that can be spawned and moved.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Default Settings
 * ============================================================================
 *
 * Default settings that are applied to maps and database objects unless
 * specified otherwise.
 *
 * ---
 *
 * Default Map Settings
 * 
 *   Allow Furniture Mode?:
 *   - Allow all maps the ability to put furniture on them by default?
 *   - If not, requires notetags.
 *
 * ---
 *
 * Default Item Settings
 * 
 *   Allowed Regions:
 *   - Furniture with this MUST be placed in these regions.
 *   - CANNOT be used with Forbid Regions.
 * 
 *   Forbid Regions:
 *   - Furniture CANNOT be placed in these regions.
 *   - CANNOT be used with Allowed Regions
 * 
 *   Allowed Terrain Tags:
 *   - Furniture with this MUST be placed in these tags.
 *   - CANNOT be used with Forbid Terrain Tags.
 * 
 *   Forbid Terrain Tags:
 *   - Furniture CANNOT be placed in these tags.
 *   - CANNOT be used with Allowed Terrain Tags.
 * 
 *   Placeable Priority:
 *   - Prioritize placeable furniture when sorting items in the item menu?
 *   - Placeable furniture will be sorted higher than non-placeable furniture.
 *
 * ---
 *
 * Default Check Settings
 * 
 *   Event Collision?:
 *   - Check event collision by default before placement?
 *   - Recommended to be enabled.
 * 
 *   Passability?:
 *   - Check passability by default before placement?
 *   - Recommended to be enabled.
 *
 * ---
 *
 * Default Misc Settings
 * 
 *   Common Event:
 *   - Run which Common Event by default after placing furniture?
 *   - Use 0 for no Common Event.
 * 
 *   End on Place?:
 *   - End Furniture Mode after placing 1 item?
 *   - Or end until items are empty or cancelled?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Filter Settings
 * ============================================================================
 *
 * Settings used for the filter effects found with this plugin.
 * 
 * The outline filter requires you to have Pixi JS Filters installed.
 * Otherwise, you will not see anything from it.
 *
 * ---
 *
 * Tone Filter
 * 
 *   Allowed Tone:
 *   - Tone when furniture is over a placeable tile.
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Forbidden Tone:
 *   - Tone when furniture is over a forbidden tile.
 *   - Format: [Red, Green, Blue, Gray]
 *
 * ---
 *
 * Outline Filter
 * 
 *   Thickness:
 *   - What outline thickness do you want for furniture cursor?
 *   - Requires Pixi JS Filters.
 * 
 *   Quality:
 *   - Quality level for the outline filter.
 *   - Requires Pixi JS Filters.
 * 
 *   Allowed Color:
 *   - System hex code color for allowed color.
 *   - Format: 0xRRGGBB
 *   - Requires Pixi JS Filters.
 * 
 *   Forbidden Color:
 *   - System hex code color for forbidden color.
 *   - Format: 0xRRGGBB
 *   - Requires Pixi JS Filters.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * Sound effect settings when interacting with furniture.
 *
 * ---
 *
 * Place Furniture
 * 
 *   Filename:
 *   - Filename of the sound effect played.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
 *
 * ---
 *
 * Move Furniture
 * 
 *   Filename:
 *   - Filename of the sound effect played.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Settings that adjust how Furniture Mode windows appear in-game and how
 * they behave.
 *
 * ---
 *
 * Mechanical Settings
 * 
 *   Hold Time:
 *   - How many frames must a furniture event be clicked and held before
 *     entering move furniture mode?
 *
 * ---
 *
 * Help Window Settings
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 * 
 *   Fade Target: Opacity:
 *   - What opacity value should this window fade to when the mouse cursor is
 *     over it?
 * 
 *   Column 1: Offset:
 *   Column 2: Offset
 *   - Offset the column 1/2 text by how many pixels?
 *   - Negative: Left; Positive: Right
 * 
 *   JS: Draw:
 *   - Code used to determine what is drawn inside this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Item Window Settings
 * 
 *   Fade Target: Opacity:
 *   - What opacity value should this window fade to when the mouse cursor is
 *     over it?
 * 
 *   JS: Draw:
 *   - Code used to determine what is drawn inside this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Cancel Button Settings
 * 
 *   JS: X Position:
 *   JS: Y Position:
 *   - Code used to determine the x/y coordinates for this button.
 *
 * ---
 *
 * Vocabulary Settings
 * 
 *   Position: Button(s):
 *   Variant: Button(s):
 *   Confirm: Button(s):
 *   Cancel: Button(s):
 *   - Buttons to use for this feature.
 *   - Text codes allowed.
 *   - Supports VisuMZ_1_MessageCore's dynamic button text codes:
 *     - ie: <OK Button>, <Cancel Button>, etc.
 * 
 *   Position: Action:
 *   Variant: Action:
 *   Confirm: Action:
 *   Cancel: Action:
 *   - Text used explaining this feature.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Arisu
 * * Olivia
 * * Irina
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.09: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug where the added hitboxes from Events and Movement Core
 *    were factored into event collision but not tile collision. Now, larger
 *    events should be able to factor in tile-based environmental collision.
 *    Fix made by Irina.
 * 
 * Version 1.08: February 15, 2024
 * * Compatibility Update!
 * ** Added compatibility with Message Core's <x Button> text codes to
 *    automatically update the Help Window's displayed button types when
 *    switching between keyboard and controller.
 * ** Be sure to update these parameters if you want them updating in-game.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Arisu:
 * *** Map Notetag: <Furniture Types: type, type, type>
 * **** Determines which furniture types are allowed on the map to be placed
 *      from the item menu.
 * **** Furniture items with those any of matching furniture types are allowed
 *      to be placed on the map.
 * **** This does NOT affect the furniture types placed through the Plugin
 *      Commands or pre-existing pieces of furniture placed there.
 * *** Item Notetag: <Furniture Types: type, type, type>
 * **** Determines which furniture types this furniture item is considered to
 *      be when being placed by the player from the item menu.
 * **** Furniture items can only be placed on maps that allow any of the
 *      matching furniture types.
 * **** This does NOT affect the furniture types placed through the Plugin
 *      Commands or pre-existing pieces of furniture placed there.
 * *** Item Notetags: <JS On Place Furniture>
 * *** Item Notetags: <JS On Remove Furniture>
 * **** JavaScript code that is ran whenever furniture is being placed down or
 *      removed. 'Remove' variant will also run at the start of being moved.
 * ** New Plugin Paramter added by Arisu:
 * *** Plugin Parameters > Default > Placeable Priority
 * **** Prioritize placeable furniture when sorting items in the item menu?
 * **** Placeable furniture will be sorted higher than non-placeable furniture.
 * 
 * Version 1.07: June 15, 2023
 * * Bug Fix!
 * ** Plugin should now be compatible with the more recent versions of the
 *    Events and Movement Core! Fix made by Olivia.
 * 
 * Version 1.06: June 30, 2022
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.05: June 23, 2022
 * * Bug Fixes!
 * ** Stacking hitboxes should no longer be a problem for manual player
 *    placement. Fix made by Arisu.
 * 
 * Version 1.04: February 24, 2022
 * * Compatibility Update
 * ** Hitbox support should now work better. Update made by Arisu.
 * 
 * Version 1.03: February 3, 2022
 * * Bug Fixes!
 * ** Local events should no longer trigger while in Furniture Mode.
 * ** Opacity dimming for the help window will now adjust accordingly when the
 *    sprite is placed on the far left.
 * ** Spelling error fixed with one of the default Plugin Parameters.
 *    Fix made by Arisu.
 * * Feature Updates!
 * ** Default values for Plugin Parameters have been changed to fit the 4:3
 *    ratio resolution sizes. Update made by Arisu.
 * 
 * Verison 1.02: January 20, 2022
 * * Bug Fixes!
 * ** Fixed a typo that caused an error to occur. Fix made by Irina.
 * 
 * Version 1.01: January 6, 2022
 * * Bug Fixes!
 * ** Fixed an error that would cause a crash upon item usage. Fix by Arisu.
 * 
 * Version 1.00 Official Release Date: February 7, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FurniturePlacement
 * @text Furniture: Add Player Placement
 * @desc Start furniture placement mode for a specific template type.
 * Player determines the actual position.
 *
 * @arg FurnitureItem:eval
 * @text Furniture Item
 * @type item
 * @desc Which furniture item is used to be placed?
 * Non-furniture items won't work.
 * @default 0
 *
 * @arg GenerateItem:eval
 * @text Generate Item?
 * @type boolean
 * @on Generate Item for Player
 * @off Do Not Generate
 * @desc Generate an item for the player? If the player does not
 * have the furniture item in stock, this will not work.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FurnitureSpawnAtXY
 * @text Furniture: Spawn At X, Y
 * @desc Spawns desired furniture at X, Y location on the current map.
 * Cannot use this Plugin Command during Furniture Mode.
 *
 * @arg FurnitureItem:eval
 * @text Furniture Item
 * @type item
 * @desc Which furniture item is used to be placed?
 * Non-furniture items won't work.
 * @default 0
 *
 * @arg TemplateIndex:eval
 * @text Template Index
 * @parent FurnitureItem:eval
 * @desc Which template index do you wish to use for the spawned
 * furniture item? Index starts at 0.
 * @default 0
 *
 * @arg Step2
 * @text Location
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target X coordinate to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Y coordinate to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_E
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TargetEventDespawnFurniture
 * @text Event At X/Y: Despawn Furniture
 * @desc Completely remove the furniture event at X/Y.
 * Can use on either furniture or non-furniture.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target X coordinate to search for Furniture Event.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Y coordinate to search for Furniture Event.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TargetEventMoveFurniture
 * @text Event At X/Y: Move Furniture
 * @desc Move the furniture item event at X/Y.
 * Use on a template event that can be spawned and moved.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target X coordinate to search for Furniture Event.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Y coordinate to search for Furniture Event.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TargetEventRetrieveFurniture
 * @text Event At X/Y: Retrieve Furniture
 * @desc Retrieve the furniture at X/Y to Player's inventory.
 * Use on a template event that can be spawned and moved.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target X coordinate to search for Furniture Event.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Y coordinate to search for Furniture Event.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_T
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ThisEventDespawnFurniture
 * @text This Event: Despawn Furniture
 * @desc Completely remove this current furniture event.
 * Can use on either furniture or non-furniture.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ThisEventMoveFurniture
 * @text This Event: Move Furniture
 * @desc Move this current furniture item.
 * Use on a template event that can be spawned and moved.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ThisEventRetrieveFurniture
 * @text This Event: Retrieve Furniture
 * @desc Retrieve this current furniture to Player's inventory.
 * Use on a template event that can be spawned and moved.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param FurnitureSystem
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Default:struct
 * @text Default Settings
 * @type struct<Default>
 * @desc Default settings that are applied to maps and database objects unless specified otherwise.
 * @default {"Maps":"","MapsAllowFurniture:eval":"true","Items":"","RegionsAllow:arraynum":"[]","RegionsForbid:arraynum":"[]","TerrainTagsAllow:arraynum":"[]","TerrainTagsForbid:arraynum":"[]","Checks":"","CheckEventCollision:eval":"true","CheckPassability:eval":"true","Misc":"","CommonEvent:num":"0","EndOnPlace:eval":"false"}
 *
 * @param Filter:struct
 * @text Filter Settings
 * @type struct<Filter>
 * @desc Settings used for the filter effects found with this plugin.
 * @default {"Tone":"","AllowTone:eval":"[0, 0, 0, 0]","ForbidTone:eval":"[255, -64, -64, 64]","Outline":"","OutlineThickness:num":"2","OutlineQuality:num":"0.1","OutlineAllowedColor:eval":"0x00ff00","OutlineForbidColor:eval":"0xff0000"}
 *
 * @param Sound:struct
 * @text Sound Settings
 * @type struct<Sound>
 * @desc Sound effect settings when interacting with furniture.
 * @default {"Place":"","PlaceName:str":"Equip1","PlaceVolume:num":"90","PlacePitch:num":"100","PlacePan:num":"0","Move":"","MoveName:str":"Equip2","MoveVolume:num":"90","MovePitch:num":"100","MovePan:num":"0"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Settings that adjust how Furniture Mode windows appear in-game and how they behave.
 * @default {"Mechanics":"","HoldTime:num":"90","HelpWindow":"","HelpWindow_BgType:num":"0","HelpWindow_FadeTarget:num":"128","HelpWindow_Col1_OffsetX:num":"+0","HelpWindow_Col2_OffsetX:num":"-48","HelpWindow_DrawJS:func":"\"// Declare Variables\\nlet x1 = Math.round(this.contents.width * 1/4);\\nx1 += Window_FurnitureHelp.OFFSET_COLUMN_1_X;\\nlet x2 = Math.round(this.contents.width * 3/4);\\nx2 += Window_FurnitureHelp.OFFSET_COLUMN_2_X;\\nconst bufferX = this.textWidth(' ');\\n\\n{ // Draw Position Text\\n    this.changePaintOpacity(true);\\n    const text1 = TextManager.FurnitureSystem.PositionButtons;\\n    const text2 = TextManager.FurnitureSystem.PositionText;\\n    const size1 = this.textSizeEx(text1).width;\\n    const size2 = this.textSizeEx(text2).width;\\n    const y = 0;\\n    this.drawTextEx(text1, x1 - size1 - bufferX, y, size1);\\n    this.drawTextEx(text2, x1 + bufferX, y, size2);\\n} // End Position Text\\n\\n{ // Draw Variant Text\\n    this.changePaintOpacity(this.isHasMultipleVariants());\\n    const text1 = TextManager.FurnitureSystem.VariantButtons;\\n    const text2 = TextManager.FurnitureSystem.VariantText;\\n    const size1 = this.textSizeEx(text1).width;\\n    const size2 = this.textSizeEx(text2).width;\\n    const y = this.lineHeight();\\n    this.drawTextEx(text1, x1 - size1 - bufferX, y, size1);\\n    this.drawTextEx(text2, x1 + bufferX, y, size2);\\n} // End Variant Text\\n\\n{ // Draw Confirm Text\\n    this.changePaintOpacity(true);\\n    const text1 = TextManager.FurnitureSystem.ConfirmButtons;\\n    const text2 = TextManager.FurnitureSystem.ConfirmText;\\n    const size1 = this.textSizeEx(text1).width;\\n    const size2 = this.textSizeEx(text2).width;\\n    const y = 0;\\n    this.drawTextEx(text1, x2 - size1 - bufferX, y, size1);\\n    this.drawTextEx(text2, x2 + bufferX, y, size2);\\n} // End Confirm Text\\n\\n{ // Draw Cancel Text\\n    this.changePaintOpacity(this.isCancelExitPrevented());\\n    const text1 = TextManager.FurnitureSystem.CancelButtons;\\n    const text2 = TextManager.FurnitureSystem.CancelText;\\n    const size1 = this.textSizeEx(text1).width;\\n    const size2 = this.textSizeEx(text2).width;\\n    const y = this.lineHeight();\\n    this.drawTextEx(text1, x2 - size1 - bufferX, y, size1);\\n    this.drawTextEx(text2, x2 + bufferX, y, size2);\\n} // End Cancel Text\"","HelpWindow_RectJS:func":"\"let ww = Graphics.width;\\nlet wh = this.calcWindowHeight(2, false);\\nlet wx = 0;\\nlet wy = Graphics.height - wh;\\nreturn new Rectangle(wx, wy, ww, wh);\"","ItemWindow":"","ItemWindow_FadeTarget:num":"128","ItemWindow_DrawJS:func":"\"// Declare Variables\\nconst color1 = ColorManager.dimColor1();\\nconst color2 = ColorManager.dimColor2();\\nconst halfX = Math.round(this.innerWidth / 2);\\nconst height = this.innerHeight;\\nthis.contents.fillRect(0, 0, halfX, height, color1);\\nthis.contents.gradientFillRect(0 + halfX, 0, halfX, height, color1, color2);\\n\\n// Draw Item\\n// With VisuMZ_1_ItemsEquipsCore\\nif (Imported.VisuMZ_1_ItemsEquipsCore) {\\n    const x = this.itemPadding();\\n    const y = 0;\\n    const w = this.innerWidth - (x * 16);\\n    this.drawItemNumber(this._item, x, y, x * 8);\\n    this.drawItemName(this._item, x * 10, y, w);\\n// Without VisuMZ_1_ItemsEquipsCore\\n} else {\\n    const x = this.itemPadding();\\n    const y = 0;\\n    const w = this.innerWidth - (x * 2);\\n    this.drawItemName(this._item, x, y, w);\\n    this.drawItemNumber(this._item, x, y, w - (x * 8));\\n}\"","ItemWindow_RectJS:func":"\"let ww = Math.max(Math.round(Graphics.width / 3), 408);\\nlet wh = this.calcWindowHeight(1, false);\\nlet wx = -$gameSystem.windowPadding();\\nlet wy = Math.round(Graphics.height * 1 / 6);\\nreturn new Rectangle(wx, wy, ww, wh);\"","CancelButton":"","CancelButtonXPositionJS:func":"\"// Declare Variables\\nconst button = arguments[0];\\n\\n// Return Value\\nreturn Graphics.width - button.width - 4;\"","CancelButtonYPositionJS:func":"\"// Declare Variables\\nconst button = arguments[0];\\n\\n// Return Value\\nreturn Math.round((Graphics.height - Graphics.boxHeight) / 2);\"","Vocab":"","PositionButtons:str":"Arrows/Mouse","PositionText:str":"Position","VariantButtons:str":"Q/W/Scroll Wheel","VariantText:str":"Swap Variants","ConfirmButtons:str":"Z/Enter/LMB","ConfirmText:str":"Place Object","CancelButtons:str":"X/ESC/RMB","CancelText:str":"Finish Placement"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Default Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Default:
 *
 * @param Maps
 * @text Default Map Settings
 *
 * @param MapsAllowFurniture:eval
 * @text Allow Furniture Mode?
 * @parent Maps
 * @type boolean
 * @on Allow By Default
 * @off Disallow By Default
 * @desc Allow all maps the ability to put furniture on them by
 * default? If not, requires notetags.
 * @default true
 *
 * @param Items
 * @text Default Item Settings
 *
 * @param RegionsAllow:arraynum
 * @text Allowed Regions
 * @parent Items
 * @type number[]
 * @min 0
 * @max 255
 * @desc Furniture with this MUST be placed in these regions.
 * CANNOT be used with Forbid Regions.
 * @default []
 *
 * @param RegionsForbid:arraynum
 * @text Forbid Regions
 * @parent Items
 * @type number[]
 * @min 0
 * @max 255
 * @desc Furniture CANNOT be placed in these regions.
 * CANNOT be used with Allowed Regions
 * @default []
 *
 * @param TerrainTagsAllow:arraynum
 * @text Allowed Terrain Tags
 * @parent Items
 * @type number[]
 * @min 0
 * @max 255
 * @desc Furniture with this MUST be placed in these tags.
 * CANNOT be used with Forbid Terrain Tags.
 * @default []
 *
 * @param TerrainTagsForbid:arraynum
 * @text Forbid Terrain Tags
 * @parent Items
 * @type number[]
 * @min 0
 * @max 255
 * @desc Furniture CANNOT be placed in these tags.
 * CANNOT be used with Allowed Terrain Tags.
 * @default []
 *
 * @param prioritizePlaceable:eval
 * @text Placeable Priority
 * @type boolean
 * @on Prioritize
 * @off Normal
 * @desc Prioritize placeable furniture when sorting items in the item menu?
 * @default true
 * 
 * @param Checks
 * @text Default Check Settings
 *
 * @param CheckEventCollision:eval
 * @text Event Collision?
 * @parent Checks
 * @type boolean
 * @on Check By Default
 * @off Don't Check By Default
 * @desc Check event collision by default before placement?
 * Recommended to be enabled.
 * @default true
 *
 * @param CheckPassability:eval
 * @text Passability?
 * @parent Checks
 * @type boolean
 * @on Check By Default
 * @off Don't Check By Default
 * @desc Check passability by default before placement?
 * Recommended to be enabled.
 * @default true
 * 
 * @param Misc
 * @text Default Misc Settings
 *
 * @param CommonEvent:num
 * @text Common Event
 * @parent Misc
 * @type common_event
 * @desc Run which Common Event by default after placing furniture?
 * Use 0 for no Common Event.
 * @default 0
 *
 * @param EndOnPlace:eval
 * @text End on Place?
 * @parent Misc
 * @type boolean
 * @on End After Placing 1
 * @off End Until Empty/Cancelled
 * @desc End Furniture Mode after placing 1 item?
 * Or end until items are empty or cancelled?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Filter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Filter:
 *
 * @param Tone
 * @text Tone Filter
 *
 * @param AllowTone:eval
 * @text Allowed Tone
 * @parent Tone
 * @desc Tone when furniture is over a placeable tile.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param ForbidTone:eval
 * @text Forbidden Tone
 * @parent Tone
 * @desc Tone when furniture is over a forbidden tile.
 * Format: [Red, Green, Blue, Gray]
 * @default [255, -64, -64, 64]
 *
 * @param Outline
 * @text Outline Filter
 *
 * @param OutlineThickness:num
 * @text Thickness
 * @parent Outline
 * @type number
 * @min 1
 * @desc What outline thickness do you want for furniture cursor?
 * Requires Pixi JS Filters.
 * @default 2
 *
 * @param OutlineQuality:num
 * @text Quality
 * @parent Outline
 * @desc Quality level for the outline filter.
 * Requires Pixi JS Filters.
 * @default 0.1
 *
 * @param OutlineAllowedColor:eval
 * @text Allowed Color
 * @parent Outline
 * @desc System hex code color for allowed color.
 * Format: 0xRRGGBB   Requires Pixi JS Filters.
 * @default 0x00ff00
 *
 * @param OutlineForbidColor:eval
 * @text Forbidden Color
 * @parent Outline
 * @desc System hex code color for forbidden color.
 * Format: 0xRRGGBB   Requires Pixi JS Filters.
 * @default 0xff0000
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param Place
 * @text Place Furniture
 *
 * @param PlaceName:str
 * @text Filename
 * @parent Place
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Equip1
 *
 * @param PlaceVolume:num
 * @text Volume
 * @parent Place
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param PlacePitch:num
 * @text Pitch
 * @parent Place
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param PlacePan:num
 * @text Pan
 * @parent Place
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Move
 * @text Move Furniture
 *
 * @param MoveName:str
 * @text Filename
 * @parent Move
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Equip2
 *
 * @param MoveVolume:num
 * @text Volume
 * @parent Move
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param MovePitch:num
 * @text Pitch
 * @parent Move
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param MovePan:num
 * @text Pan
 * @parent Move
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param Mechanics
 * @text Mechanical Settings
 *
 * @param HoldTime:num
 * @text Hold Time
 * @parent Mechanics
 * @type number
 * @min 1
 * @desc How many frames must a furniture event be clicked and held before entering move furniture mode?
 * @default 90
 *
 * @param HelpWindow
 * @text Help Window Settings
 *
 * @param HelpWindow_BgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 1
 *
 * @param HelpWindow_FadeTarget:num
 * @text Fade Target: Opacity
 * @parent HelpWindow
 * @type number
 * @min 1
 * @max 255
 * @desc What opacity value should this window fade to when the mouse cursor is over it?
 * @default 128
 *
 * @param HelpWindow_Col1_OffsetX:num
 * @text Column 1: Offset
 * @parent HelpWindow
 * @desc Offset the column 1 text by how many pixels?
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @param HelpWindow_Col2_OffsetX:num
 * @text Column 2: Offset
 * @parent HelpWindow
 * @desc Offset the column 2 text by how many pixels?
 * Negative: Left; Positive: Right
 * @default -48
 * 
 * @param HelpWindow_DrawJS:func
 * @text JS: Draw
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine what is drawn inside this window.
 * @default "// Declare Variables\nlet x1 = Math.round(this.contents.width * 1/4);\nx1 += Window_FurnitureHelp.OFFSET_COLUMN_1_X;\nlet x2 = Math.round(this.contents.width * 3/4);\nx2 += Window_FurnitureHelp.OFFSET_COLUMN_2_X;\nconst bufferX = this.textWidth(' ');\n\n{ // Draw Position Text\n    this.changePaintOpacity(true);\n    const text1 = TextManager.FurnitureSystem.PositionButtons;\n    const text2 = TextManager.FurnitureSystem.PositionText;\n    const size1 = this.textSizeEx(text1).width;\n    const size2 = this.textSizeEx(text2).width;\n    const y = 0;\n    this.drawTextEx(text1, x1 - size1 - bufferX, y, size1);\n    this.drawTextEx(text2, x1 + bufferX, y, size2);\n} // End Position Text\n\n{ // Draw Variant Text\n    this.changePaintOpacity(this.isHasMultipleVariants());\n    const text1 = TextManager.FurnitureSystem.VariantButtons;\n    const text2 = TextManager.FurnitureSystem.VariantText;\n    const size1 = this.textSizeEx(text1).width;\n    const size2 = this.textSizeEx(text2).width;\n    const y = this.lineHeight();\n    this.drawTextEx(text1, x1 - size1 - bufferX, y, size1);\n    this.drawTextEx(text2, x1 + bufferX, y, size2);\n} // End Variant Text\n\n{ // Draw Confirm Text\n    this.changePaintOpacity(true);\n    const text1 = TextManager.FurnitureSystem.ConfirmButtons;\n    const text2 = TextManager.FurnitureSystem.ConfirmText;\n    const size1 = this.textSizeEx(text1).width;\n    const size2 = this.textSizeEx(text2).width;\n    const y = 0;\n    this.drawTextEx(text1, x2 - size1 - bufferX, y, size1);\n    this.drawTextEx(text2, x2 + bufferX, y, size2);\n} // End Confirm Text\n\n{ // Draw Cancel Text\n    this.changePaintOpacity(this.isCancelExitPrevented());\n    const text1 = TextManager.FurnitureSystem.CancelButtons;\n    const text2 = TextManager.FurnitureSystem.CancelText;\n    const size1 = this.textSizeEx(text1).width;\n    const size2 = this.textSizeEx(text2).width;\n    const y = this.lineHeight();\n    this.drawTextEx(text1, x2 - size1 - bufferX, y, size1);\n    this.drawTextEx(text2, x2 + bufferX, y, size2);\n} // End Cancel Text"
 *
 * @param HelpWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "let ww = Graphics.width;\nlet wh = this.calcWindowHeight(2, false);\nlet wx = 0;\nlet wy = Graphics.height - wh;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ItemWindow
 * @text Item Window Settings
 *
 * @param ItemWindow_FadeTarget:num
 * @text Fade Target: Opacity
 * @parent ItemWindow
 * @type number
 * @min 1
 * @max 255
 * @desc What opacity value should this window fade to when the mouse cursor is over it?
 * @default 128
 * 
 * @param ItemWindow_DrawJS:func
 * @text JS: Draw
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine what is drawn inside this window.
 * @default "// Declare Variables\nconst color1 = ColorManager.dimColor1();\nconst color2 = ColorManager.dimColor2();\nconst halfX = Math.round(this.innerWidth / 2);\nconst height = this.innerHeight;\nthis.contents.fillRect(0, 0, halfX, height, color1);\nthis.contents.gradientFillRect(0 + halfX, 0, halfX, height, color1, color2);\n\n// Draw Item\n// With VisuMZ_1_ItemsEquipsCore\nif (Imported.VisuMZ_1_ItemsEquipsCore) {\n    const x = this.itemPadding();\n    const y = 0;\n    const w = this.innerWidth - (x * 16);\n    this.drawItemNumber(this._item, x, y, x * 8);\n    this.drawItemName(this._item, x * 10, y, w);\n// Without VisuMZ_1_ItemsEquipsCore\n} else {\n    const x = this.itemPadding();\n    const y = 0;\n    const w = this.innerWidth - (x * 2);\n    this.drawItemName(this._item, x, y, w);\n    this.drawItemNumber(this._item, x, y, w - (x * 8));\n}"
 *
 * @param ItemWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "let ww = Math.max(Math.round(Graphics.width / 3), 408);\nlet wh = this.calcWindowHeight(1, false);\nlet wx = -$gameSystem.windowPadding();\nlet wy = Math.round(Graphics.height * 1 / 6);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param CancelButton
 * @text Cancel Button Settings
 *
 * @param CancelButtonXPositionJS:func
 * @text JS: X Position
 * @parent CancelButton
 * @type note
 * @desc Code used to determine the x coordinate for this button.
 * @default "// Declare Variables\nconst button = arguments[0];\n\n// Return Value\nreturn Graphics.width - button.width - 4;"
 *
 * @param CancelButtonYPositionJS:func
 * @text JS: Y Position
 * @parent CancelButton
 * @type note
 * @desc Code used to determine the y coordinate for this button.
 * @default "// Declare Variables\nconst button = arguments[0];\n\n// Return Value\nreturn Math.round((Graphics.height - Graphics.boxHeight) / 2);"
 *
 * @param Vocab
 * @text Vocabulary Settings
 *
 * @param PositionButtons:str
 * @text Position: Button(s)
 * @parent Vocab
 * @desc Buttons to use for positioning furniture.
 * Text codes allowed.
 * @default <>/Mouse
 *
 * @param PositionText:str
 * @text Position: Action
 * @parent Vocab
 * @desc Text to use for positioning furniture.
 * Text codes allowed.
 * @default Position
 *
 * @param VariantButtons:str
 * @text Variant: Button(s)
 * @parent Vocab
 * @desc Buttons to use for changing variants.
 * Text codes allowed.
 * @default Q/W/Scroll Wheel
 *
 * @param VariantText:str
 * @text Variant: Action
 * @parent Vocab
 * @desc Text to use for changing variants.
 * Text codes allowed.
 * @default Swap Variants
 *
 * @param ConfirmButtons:str
 * @text Confirm: Button(s)
 * @parent Vocab
 * @desc Buttons to use for confirming location.
 * Text codes allowed.
 * @default Z/Enter/LMB
 *
 * @param ConfirmText:str
 * @text Confirm: Action
 * @parent Vocab
 * @desc Text to use for confirming location.
 * Text codes allowed.
 * @default Place Object
 *
 * @param CancelButtons:str
 * @text Cancel: Button(s)
 * @parent Vocab
 * @desc Buttons to use for confirming location.
 * Text codes allowed.
 * @default X/ESC/RMB
 *
 * @param CancelText:str
 * @text Cancel: Action
 * @parent Vocab
 * @desc Text to use for confirming location.
 * Text codes allowed.
 * @default Finish Placement
 *
 */
//=============================================================================

const _0x468fdb=_0x162b;(function(_0x200d7b,_0x561219){const _0x2b3d65=_0x162b,_0x3d2b06=_0x200d7b();while(!![]){try{const _0xb5688e=-parseInt(_0x2b3d65(0x1d4))/0x1*(parseInt(_0x2b3d65(0x137))/0x2)+-parseInt(_0x2b3d65(0x306))/0x3*(-parseInt(_0x2b3d65(0x130))/0x4)+parseInt(_0x2b3d65(0x1de))/0x5*(parseInt(_0x2b3d65(0x1c5))/0x6)+-parseInt(_0x2b3d65(0x1b4))/0x7*(parseInt(_0x2b3d65(0x288))/0x8)+-parseInt(_0x2b3d65(0x2e1))/0x9+-parseInt(_0x2b3d65(0x1ce))/0xa*(-parseInt(_0x2b3d65(0x274))/0xb)+-parseInt(_0x2b3d65(0x226))/0xc*(-parseInt(_0x2b3d65(0x270))/0xd);if(_0xb5688e===_0x561219)break;else _0x3d2b06['push'](_0x3d2b06['shift']());}catch(_0x5dd6d4){_0x3d2b06['push'](_0x3d2b06['shift']());}}}(_0x5e72,0x3ab53));var label=_0x468fdb(0x292),tier=tier||0x0,dependencies=[_0x468fdb(0x2bb)],pluginData=$plugins[_0x468fdb(0x180)](function(_0x12458e){const _0x3dae53=_0x468fdb;return _0x12458e['status']&&_0x12458e['description'][_0x3dae53(0x132)]('['+label+']');})[0x0];VisuMZ[label][_0x468fdb(0x146)]=VisuMZ[label][_0x468fdb(0x146)]||{},VisuMZ['ConvertParams']=function(_0x594e68,_0x3e83df){const _0xfb9dea=_0x468fdb;for(const _0x4f7207 in _0x3e83df){if(_0xfb9dea(0x1cc)===_0xfb9dea(0x1cc)){if(_0x4f7207[_0xfb9dea(0x10e)](/(.*):(.*)/i)){if('jQgxK'!==_0xfb9dea(0x1c1)){const _0x36dd60=String(RegExp['$1']),_0xb9ff78=String(RegExp['$2'])[_0xfb9dea(0x252)]()['trim']();let _0x3c04cc,_0x430687,_0x49f2e9;switch(_0xb9ff78){case _0xfb9dea(0x194):_0x3c04cc=_0x3e83df[_0x4f7207]!==''?Number(_0x3e83df[_0x4f7207]):0x0;break;case'ARRAYNUM':_0x430687=_0x3e83df[_0x4f7207]!==''?JSON[_0xfb9dea(0x13f)](_0x3e83df[_0x4f7207]):[],_0x3c04cc=_0x430687[_0xfb9dea(0x238)](_0xc5da4=>Number(_0xc5da4));break;case'EVAL':_0x3c04cc=_0x3e83df[_0x4f7207]!==''?eval(_0x3e83df[_0x4f7207]):null;break;case _0xfb9dea(0x188):_0x430687=_0x3e83df[_0x4f7207]!==''?JSON[_0xfb9dea(0x13f)](_0x3e83df[_0x4f7207]):[],_0x3c04cc=_0x430687['map'](_0x3a63fa=>eval(_0x3a63fa));break;case _0xfb9dea(0x2d0):_0x3c04cc=_0x3e83df[_0x4f7207]!==''?JSON['parse'](_0x3e83df[_0x4f7207]):'';break;case'ARRAYJSON':_0x430687=_0x3e83df[_0x4f7207]!==''?JSON[_0xfb9dea(0x13f)](_0x3e83df[_0x4f7207]):[],_0x3c04cc=_0x430687[_0xfb9dea(0x238)](_0x3e680a=>JSON[_0xfb9dea(0x13f)](_0x3e680a));break;case _0xfb9dea(0x1fa):_0x3c04cc=_0x3e83df[_0x4f7207]!==''?new Function(JSON[_0xfb9dea(0x13f)](_0x3e83df[_0x4f7207])):new Function('return\x200');break;case _0xfb9dea(0x294):_0x430687=_0x3e83df[_0x4f7207]!==''?JSON[_0xfb9dea(0x13f)](_0x3e83df[_0x4f7207]):[],_0x3c04cc=_0x430687['map'](_0x448500=>new Function(JSON[_0xfb9dea(0x13f)](_0x448500)));break;case _0xfb9dea(0x2d1):_0x3c04cc=_0x3e83df[_0x4f7207]!==''?String(_0x3e83df[_0x4f7207]):'';break;case _0xfb9dea(0x235):_0x430687=_0x3e83df[_0x4f7207]!==''?JSON[_0xfb9dea(0x13f)](_0x3e83df[_0x4f7207]):[],_0x3c04cc=_0x430687[_0xfb9dea(0x238)](_0x3df33a=>String(_0x3df33a));break;case _0xfb9dea(0x17c):_0x49f2e9=_0x3e83df[_0x4f7207]!==''?JSON['parse'](_0x3e83df[_0x4f7207]):{},_0x3c04cc=VisuMZ[_0xfb9dea(0x222)]({},_0x49f2e9);break;case _0xfb9dea(0x273):_0x430687=_0x3e83df[_0x4f7207]!==''?JSON[_0xfb9dea(0x13f)](_0x3e83df[_0x4f7207]):[],_0x3c04cc=_0x430687[_0xfb9dea(0x238)](_0x21f8e6=>VisuMZ[_0xfb9dea(0x222)]({},JSON[_0xfb9dea(0x13f)](_0x21f8e6)));break;default:continue;}_0x594e68[_0x36dd60]=_0x3c04cc;}else{const _0x5e95d0=_0x1c25d0['x'],_0x250a23=_0x2657aa['y'];_0x5f25b9[_0xfb9dea(0x265)](),_0x2ede8b[_0xfb9dea(0x265)](),_0x2bc1dc['_x']=_0x5e95d0,_0x2a42ea['_y']=_0x250a23;const _0x104e53=_0x7e8435['FurnitureSystem'][_0xfb9dea(0x2ca)](_0x5e95d0,_0x250a23);this['startMoveFurnitureMode'](_0x104e53);}}}else this['updateFurnitureModeInputScrollWheel'](),this[_0xfb9dea(0x28e)](),this[_0xfb9dea(0x13e)](),this[_0xfb9dea(0x2f1)]();}return _0x594e68;},(_0x458983=>{const _0x5d8d9f=_0x468fdb,_0x2aad1e=_0x458983[_0x5d8d9f(0x1af)];for(const _0xc3c49 of dependencies){if(!Imported[_0xc3c49]){if(_0x5d8d9f(0x1c6)!==_0x5d8d9f(0x1c6)){if(!_0x5217c3[_0x5d8d9f(0x115)](_0x5861f9))return[_0x5d8d9f(0x302)];this[_0x5d8d9f(0x1e7)]=this[_0x5d8d9f(0x1e7)]||{};if(this[_0x5d8d9f(0x1e7)][_0x433558['id']])return this[_0x5d8d9f(0x1e7)][_0xc0ccb0['id']];let _0x4476d2=[];const _0xd76024=_0x7d37f5[_0x5d8d9f(0x292)]['RegExp'],_0x56318c=_0x4cbc1c[_0x5d8d9f(0x1d8)];if(_0x56318c['match'](_0xd76024[_0x5d8d9f(0x2dc)])){const _0x16733c=_0x2f8e34(_0x8ad01['$1'])[_0x5d8d9f(0x29b)](',')[_0x5d8d9f(0x238)](_0x39a21c=>_0x39a21c[_0x5d8d9f(0x22e)]()[_0x5d8d9f(0x299)]());_0x4476d2=_0x16733c;}if(_0x4476d2[_0x5d8d9f(0x1b8)]<=0x0)_0x4476d2=[_0x5d8d9f(0x302)];return this[_0x5d8d9f(0x1e7)][_0x5cb620['id']]=_0x4476d2,this[_0x5d8d9f(0x1e7)][_0xcc114d['id']];}else{alert(_0x5d8d9f(0x190)[_0x5d8d9f(0x25d)](_0x2aad1e,_0xc3c49)),SceneManager[_0x5d8d9f(0x187)]();break;}}}const _0x28d0e8=_0x458983[_0x5d8d9f(0x253)];if(_0x28d0e8[_0x5d8d9f(0x10e)](/\[Version[ ](.*?)\]/i)){const _0x5d7f84=Number(RegExp['$1']);_0x5d7f84!==VisuMZ[label][_0x5d8d9f(0x16c)]&&(alert(_0x5d8d9f(0x150)[_0x5d8d9f(0x25d)](_0x2aad1e,_0x5d7f84)),SceneManager['exit']());}if(_0x28d0e8[_0x5d8d9f(0x10e)](/\[Tier[ ](\d+)\]/i)){const _0x581d4e=Number(RegExp['$1']);if(_0x581d4e<tier)alert(_0x5d8d9f(0x124)['format'](_0x2aad1e,_0x581d4e,tier)),SceneManager[_0x5d8d9f(0x187)]();else{if(_0x5d8d9f(0x227)!==_0x5d8d9f(0x122))tier=Math[_0x5d8d9f(0x2fb)](_0x581d4e,tier);else{let _0x457407=_0x33621c[_0x5d8d9f(0x292)][_0x5d8d9f(0x286)](_0x2db3c6),_0x52b649=_0x3d6bee[_0x5d8d9f(0x292)][_0x5d8d9f(0x128)](_0x2027d4);_0x457407=_0x469478[_0x5d8d9f(0x292)][_0x5d8d9f(0x1dc)](_0x457407),_0x44e3dd=_0x239c8a[_0x5d8d9f(0x119)](0x0,_0x457407[_0x5d8d9f(0x1b8)]-0x1),this['setupFurnitureData'](_0x457407,_0x52b649,!![]),this['setupFurnitureCursor'](_0x457407,_0x52b649),this[_0x5d8d9f(0x1a8)]=_0x516599,this['furnitureEventPosition']()['x']=_0x2791cf,this['furnitureEventPosition']()['y']=_0x1340e4;const _0x1a8be0=this[_0x5d8d9f(0x178)](!![]);return this[_0x5d8d9f(0x155)](),_0x1a8be0;}}}VisuMZ['ConvertParams'](VisuMZ[label][_0x5d8d9f(0x146)],_0x458983['parameters']);})(pluginData),PluginManager[_0x468fdb(0x24a)](pluginData[_0x468fdb(0x1af)],'FurniturePlacement',_0x2aa72c=>{const _0x2bac48=_0x468fdb;if(!SceneManager[_0x2bac48(0x101)]())return;if(!SceneManager[_0x2bac48(0x2c9)]())return;if($gameMap['isFurnitureSystemMode']())return;VisuMZ[_0x2bac48(0x222)](_0x2aa72c,_0x2aa72c);const _0x2c1f0f=_0x2aa72c[_0x2bac48(0x1b9)],_0x3ab62b=$dataItems[_0x2c1f0f];if(!DataManager['isFurnitureItem'](_0x3ab62b))return;const _0x19ecf5=_0x2aa72c[_0x2bac48(0x1b7)];if(_0x19ecf5){if(_0x2bac48(0x159)!==_0x2bac48(0x1cb))$gameParty[_0x2bac48(0x1d9)](_0x3ab62b,0x1);else{this['contents'][_0x2bac48(0x265)]();if(!this['_itemID'])return;this[_0x2bac48(0x2bd)]=_0xd2afe9[this['_itemID']];return _0x247970[_0x2bac48(0x292)][_0x2bac48(0x146)]['Window'][_0x2bac48(0x154)][_0x2bac48(0x110)](this);const _0x175e8f=_0x52256a['dimColor1'](),_0x5ab3c6=_0x2332fc[_0x2bac48(0x23f)](),_0x26997f=_0x5c3444[_0x2bac48(0x256)](this[_0x2bac48(0x1f8)]/0x2),_0x2b5c21=this[_0x2bac48(0x116)];this[_0x2bac48(0x165)][_0x2bac48(0x2ac)](0x0,0x0,_0x26997f,_0x2b5c21,_0x175e8f),this[_0x2bac48(0x165)]['gradientFillRect'](0x0+_0x26997f,0x0,_0x26997f,_0x2b5c21,_0x175e8f,_0x5ab3c6);if(_0x11cd20[_0x2bac48(0x162)]){const _0x4f44ac=this[_0x2bac48(0x169)](),_0x46eeeb=0x0,_0x4f819f=this[_0x2bac48(0x1f8)]-_0x4f44ac*0x10;this[_0x2bac48(0x164)](this['_item'],_0x4f44ac,_0x46eeeb,_0x4f44ac*0x8),this[_0x2bac48(0x2e5)](this[_0x2bac48(0x2bd)],_0x4f44ac*0xa,_0x46eeeb,_0x4f819f);}else{const _0x20d4f0=this[_0x2bac48(0x169)](),_0x2cf65b=0x0,_0xfe08ea=this['innerWidth']-_0x20d4f0*0x2;this[_0x2bac48(0x2e5)](this[_0x2bac48(0x2bd)],_0x20d4f0,_0x2cf65b,_0xfe08ea),this[_0x2bac48(0x164)](this[_0x2bac48(0x2bd)],_0x20d4f0,_0x2cf65b,_0xfe08ea-_0x20d4f0*0x8);}}}if($gameParty[_0x2bac48(0x1b0)](_0x3ab62b)<=0x0)return;$gameMap[_0x2bac48(0x20b)](_0x3ab62b);}),PluginManager[_0x468fdb(0x24a)](pluginData['name'],_0x468fdb(0x221),_0x273b40=>{const _0x143f31=_0x468fdb;if(!SceneManager[_0x143f31(0x101)]())return;if(!SceneManager[_0x143f31(0x2c9)]())return;if($gameMap[_0x143f31(0x281)]())return;VisuMZ[_0x143f31(0x222)](_0x273b40,_0x273b40);const _0x3a627d=_0x273b40[_0x143f31(0x1b9)],_0x45225f=$dataItems[_0x3a627d];if(!DataManager['isFurnitureItem'](_0x45225f))return;const _0x3604a6=_0x273b40[_0x143f31(0x123)],_0x4dc237=_0x273b40[_0x143f31(0x1c7)],_0x536222=_0x273b40[_0x143f31(0x2d8)],_0x56a1eb=$gameMap[_0x143f31(0x212)](_0x45225f,_0x3604a6,_0x4dc237,_0x536222),_0x56c427=_0x273b40[_0x143f31(0x30c)]||0x0;_0x56c427&&(_0x143f31(0x20d)===_0x143f31(0x20d)?$gameSwitches[_0x143f31(0x291)](_0x56c427,!!_0x56a1eb):this[_0x143f31(0x1e1)]=0x0);}),PluginManager[_0x468fdb(0x24a)](pluginData['name'],_0x468fdb(0x2fe),_0x2138c9=>{const _0x41a6f0=_0x468fdb;if(!SceneManager[_0x41a6f0(0x101)]())return;if(!SceneManager[_0x41a6f0(0x2c9)]())return;if($gameMap[_0x41a6f0(0x281)]())return;VisuMZ[_0x41a6f0(0x222)](_0x2138c9,_0x2138c9);const _0x40ee20=_0x2138c9[_0x41a6f0(0x1b9)],_0x36ce96=$dataItems[_0x40ee20];if(!DataManager['isFurnitureItem'](_0x36ce96))return;const _0x59f341=_0x2138c9[_0x41a6f0(0x123)],_0x468929=_0x2138c9[_0x41a6f0(0x1f4)],_0x28a732=$gameMap[_0x41a6f0(0x276)](_0x36ce96,_0x59f341,_0x468929),_0x5373ed=_0x2138c9['SuccessSwitchId']||0x0;_0x5373ed&&$gameSwitches[_0x41a6f0(0x291)](_0x5373ed,!!_0x28a732);}),PluginManager[_0x468fdb(0x24a)](pluginData['name'],_0x468fdb(0x1e9),_0x3da850=>{const _0x7a37ba=_0x468fdb;if(!SceneManager[_0x7a37ba(0x101)]())return;if(!SceneManager['canPlaceFurniture']())return;if($gameMap['isFurnitureSystemMode']())return;VisuMZ['ConvertParams'](_0x3da850,_0x3da850);const _0x28c440=_0x3da850[_0x7a37ba(0x1b9)],_0x44853b=$dataItems[_0x28c440];if(!DataManager[_0x7a37ba(0x115)](_0x44853b))return;const _0x39a6c5=_0x3da850[_0x7a37ba(0x123)],_0x54aef1=_0x3da850[_0x7a37ba(0x160)],_0x17c733=$gameMap[_0x7a37ba(0x2d3)](_0x44853b,_0x39a6c5,_0x54aef1),_0x18e389=_0x3da850[_0x7a37ba(0x30c)]||0x0;_0x18e389&&(_0x7a37ba(0x13a)!=='Eiovr'?$gameSwitches[_0x7a37ba(0x291)](_0x18e389,!!_0x17c733):this[_0x7a37ba(0x155)]());}),PluginManager[_0x468fdb(0x24a)](pluginData[_0x468fdb(0x1af)],_0x468fdb(0x26c),_0xae109=>{const _0x359d06=_0x468fdb;if(!SceneManager[_0x359d06(0x101)]())return;if(!SceneManager['canPlaceFurniture']())return;const _0x50ec24=_0xae109[_0x359d06(0x1c7)],_0x3613e9=_0xae109['PosY'],_0x5e25bf=$gameMap[_0x359d06(0x14f)](_0x50ec24,_0x3613e9);if(_0x5e25bf[_0x359d06(0x1b8)]<=0x0)return;const _0x128ce0=_0x5e25bf[0x0];if(!_0x128ce0)return;$gameMap[_0x359d06(0x15e)](_0x128ce0['eventId']());}),PluginManager[_0x468fdb(0x24a)](pluginData[_0x468fdb(0x1af)],_0x468fdb(0x2ae),_0x19319e=>{const _0x18acc2=_0x468fdb;if(!SceneManager['isSceneMap']())return;if(!SceneManager[_0x18acc2(0x2c9)]())return;if($gameMap['isFurnitureSystemMode']())return;const _0x46f3c5=_0x19319e[_0x18acc2(0x1c7)],_0x576bf0=_0x19319e[_0x18acc2(0x2d8)],_0x34b524=$gameMap[_0x18acc2(0x14f)](_0x46f3c5,_0x576bf0);if(_0x34b524['length']<=0x0)return;const _0x1e140f=_0x34b524[0x0];if(!_0x1e140f)return;if(!_0x1e140f[_0x18acc2(0x2ea)]())return;SceneManager[_0x18acc2(0x23a)]['startMoveFurnitureMode'](_0x1e140f);}),PluginManager[_0x468fdb(0x24a)](pluginData['name'],_0x468fdb(0x21f),_0x51d08b=>{const _0x40ac61=_0x468fdb;if(!SceneManager[_0x40ac61(0x101)]())return;if(!SceneManager[_0x40ac61(0x2c9)]())return;const _0x3cbd1f=_0x51d08b[_0x40ac61(0x1c7)],_0x58e140=_0x51d08b[_0x40ac61(0x2d8)],_0x4ac9cc=$gameMap['eventsXy'](_0x3cbd1f,_0x58e140);if(_0x4ac9cc[_0x40ac61(0x1b8)]<=0x0)return;const _0x2c137f=_0x4ac9cc[0x0];if(!_0x2c137f)return;if(!_0x2c137f['isSpawnedFurniture']())return;const _0x260adc=_0x2c137f[_0x40ac61(0x1a4)],_0x397d21=_0x260adc[_0x40ac61(0x112)],_0x2444da=$dataItems[_0x397d21];$gameMap[_0x40ac61(0x28b)](_0x2444da),_0x2444da&&_0x2444da[_0x40ac61(0x1ad)]&&(_0x40ac61(0x198)===_0x40ac61(0x198)?$gameParty[_0x40ac61(0x1d9)](_0x2444da,0x1):(this[_0x40ac61(0x1a7)](),this[_0x40ac61(0x203)]()?(_0x3d70f3[_0x40ac61(0x1ff)]['update']['call'](this),this[_0x40ac61(0x17e)]()):_0x4b7679[_0x40ac61(0x1ff)][_0x40ac61(0x19b)][_0x40ac61(0x110)](this),this[_0x40ac61(0x293)]())),$gameMap['despawnEventId'](_0x2c137f[_0x40ac61(0x102)]());}),PluginManager['registerCommand'](pluginData[_0x468fdb(0x1af)],_0x468fdb(0x2e4),_0x2d8dcb=>{const _0x689181=_0x468fdb;if(!SceneManager[_0x689181(0x101)]())return;if(!SceneManager['canPlaceFurniture']())return;const _0x1dfcfe=$gameTemp[_0x689181(0x21c)]();if(!_0x1dfcfe)return;const _0x42a049=$gameMap[_0x689181(0x1c9)](_0x1dfcfe[_0x689181(0x102)]());if(!_0x42a049)return;$gameMap[_0x689181(0x15e)](_0x42a049[_0x689181(0x102)]());}),PluginManager['registerCommand'](pluginData[_0x468fdb(0x1af)],_0x468fdb(0x2a8),_0x85e950=>{const _0x54e213=_0x468fdb;if(!SceneManager[_0x54e213(0x101)]())return;if(!SceneManager[_0x54e213(0x2c9)]())return;if($gameMap['isFurnitureSystemMode']())return;const _0xa07b1=$gameTemp[_0x54e213(0x21c)]();if(!_0xa07b1)return;const _0x101dea=$gameMap['event'](_0xa07b1[_0x54e213(0x102)]());if(!_0x101dea)return;if(!_0x101dea[_0x54e213(0x2ea)]())return;SceneManager[_0x54e213(0x23a)][_0x54e213(0x12c)](_0x101dea);}),PluginManager[_0x468fdb(0x24a)](pluginData[_0x468fdb(0x1af)],_0x468fdb(0x17a),_0x2c1603=>{const _0x1155a5=_0x468fdb;if(!SceneManager[_0x1155a5(0x101)]())return;if(!SceneManager[_0x1155a5(0x2c9)]())return;const _0x98e2ec=$gameTemp[_0x1155a5(0x21c)]();if(!_0x98e2ec)return;const _0x1a9b2b=$gameMap['event'](_0x98e2ec[_0x1155a5(0x102)]());if(!_0x1a9b2b)return;if(!_0x1a9b2b['isSpawnedFurniture']())return;const _0x4915ef=_0x1a9b2b[_0x1155a5(0x1a4)],_0x3c6cd2=_0x4915ef['OnPlaceConsumeItem'],_0x50ba5d=$dataItems[_0x3c6cd2];$gameMap['onRemoveFurnitureJS'](_0x50ba5d),_0x50ba5d&&_0x50ba5d[_0x1155a5(0x1ad)]&&$gameParty[_0x1155a5(0x1d9)](_0x50ba5d,0x1),$gameMap['despawnEventId'](_0x1a9b2b['eventId']());}),VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x236)]={'FurnitureTemplates':/<FURNITURE (?:TEMPLATE|TEMPLATES):[ ](.*)>/i,'FurnitureAllowRegions':/<FURNITURE (?:ALLOW|ALLOWED) (?:REGION|REGIONS):[ ](.*)>/i,'FurnitureForbidRegions':/<FURNITURE (?:FORBID|FORBIDDEN) (?:REGION|REGIONS):[ ](.*)>/i,'FurnitureAllowTerrainTags':/<FURNITURE (?:ALLOW|ALLOWED) TERRAIN (?:TAG|TAGS):[ ](.*)>/i,'FurnitureForbidTerrainTags':/<FURNITURE (?:FORBID|FORBIDDEN) TERRAIN (?:TAG|TAGS):[ ](.*)>/i,'FurnitureNeedPassability':/<FURNITURE NEED PASSABILITY>/i,'FurnitureFreePassability':/<FURNITURE FREE PASSABILITY>/i,'FurnitureNeedEventCollisionCheck':/<FURNITURE CHECK EVENT COLLISION>/i,'FurnitureFreeEventCollisionCheck':/<FURNITURE ALLOW EVENT STACKING>/i,'FurnitureOnPlaceCommonEvent':/<FURNITURE PLACE COMMON EVENT:[ ](\d+)>/i,'FurnitureOnPlaceEndOnce':/<FURNITURE PLACE ONCE>/i,'FurnitureOnPlaceEndless':/<FURNITURE PLACE UNTIL EMPTY>/i,'FurniturePreventCancelExit':/<FURNITURE PREVENT CANCEL EXIT>/i,'FurnitureType':/<FURNITURE TYPE(?:|S):[ ](.*)>/i,'JsOnPlace':/<JS ON PLACE FURNITURE>\s*([\s\S]*)\s*<\/JS ON PLACE FURNITURE>/i,'JsOnRemove':/<JS ON REMOVE FURNITURE>\s*([\s\S]*)\s*<\/JS ON REMOVE FURNITURE>/i,'FurnitureNotMovable':/<FURNITURE NOT MOVABLE>/i,'DisallowFurniture':/<NO FURNITURE>/i,'AllowFurniture':/<ALLOW FURNITURE>/i},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x27d)]=Scene_Boot[_0x468fdb(0x1ff)][_0x468fdb(0x1b1)],Scene_Boot[_0x468fdb(0x1ff)][_0x468fdb(0x1b1)]=function(){const _0xbc75e8=_0x468fdb;VisuMZ[_0xbc75e8(0x292)][_0xbc75e8(0x27d)][_0xbc75e8(0x110)](this),this[_0xbc75e8(0x22b)]();},Scene_Boot[_0x468fdb(0x1ff)][_0x468fdb(0x22b)]=function(){const _0x11833c=_0x468fdb;if(VisuMZ['ParseAllNotetags'])return;const _0x253726=VisuMZ[_0x11833c(0x292)][_0x11833c(0x236)],_0x22cb3a=$dataItems;for(const _0x105082 of _0x22cb3a){if(!_0x105082)continue;VisuMZ[_0x11833c(0x292)][_0x11833c(0x13d)](_0x105082,'OnPlaceFurniture',_0x253726[_0x11833c(0x1a9)]),VisuMZ[_0x11833c(0x292)][_0x11833c(0x13d)](_0x105082,_0x11833c(0x16e),_0x253726[_0x11833c(0x1f2)]);}},VisuMZ[_0x468fdb(0x292)]['ParseItemNotetags']=VisuMZ['ParseItemNotetags'],VisuMZ[_0x468fdb(0x2f6)]=function(_0x33c088){const _0x4d20f5=_0x468fdb;VisuMZ[_0x4d20f5(0x292)]['ParseItemNotetags'][_0x4d20f5(0x110)](this,_0x33c088);const _0x3d3c1a=VisuMZ[_0x4d20f5(0x292)][_0x4d20f5(0x236)];VisuMZ[_0x4d20f5(0x292)][_0x4d20f5(0x13d)](_0x33c088,_0x4d20f5(0x179),_0x3d3c1a[_0x4d20f5(0x1a9)]),VisuMZ[_0x4d20f5(0x292)]['createJS'](_0x33c088,_0x4d20f5(0x16e),_0x3d3c1a[_0x4d20f5(0x1f2)]);},VisuMZ['FurnitureSystem']['JS']={},VisuMZ['FurnitureSystem'][_0x468fdb(0x13d)]=function(_0x1764f9,_0x5cfaf2,_0x4d2d3b){const _0x3917cb=_0x468fdb,_0x54f4b0=_0x1764f9[_0x3917cb(0x1d8)];if(_0x54f4b0[_0x3917cb(0x10e)](_0x4d2d3b)){if(_0x3917cb(0x263)===_0x3917cb(0x263)){const _0x1d06b6=String(RegExp['$1']),_0x10df36=_0x3917cb(0x1ae)[_0x3917cb(0x25d)](_0x1d06b6),_0xcbdfa3=VisuMZ[_0x3917cb(0x292)]['createKeyJS'](_0x1764f9,_0x5cfaf2);VisuMZ['FurnitureSystem']['JS'][_0xcbdfa3]=new Function(_0x10df36);}else{const _0xe97c9d=_0x47d93e(_0x158df7['$1'])[_0x3917cb(0x29b)](',')['map'](_0x44ec8e=>_0x44ec8e[_0x3917cb(0x22e)]()[_0x3917cb(0x299)]());_0x4e9e05=_0x21b81b[_0x3917cb(0x183)](_0xe97c9d);}}},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x243)]=function(_0x2f23b9,_0x218afd){const _0x278170=_0x468fdb;if(VisuMZ[_0x278170(0x243)])return VisuMZ[_0x278170(0x243)](_0x2f23b9,_0x218afd);let _0x408cf6='';if($dataActors[_0x278170(0x132)](_0x2f23b9))_0x408cf6='Actor-%1-%2'[_0x278170(0x25d)](_0x2f23b9['id'],_0x218afd);if($dataClasses[_0x278170(0x132)](_0x2f23b9))_0x408cf6=_0x278170(0x148)[_0x278170(0x25d)](_0x2f23b9['id'],_0x218afd);if($dataSkills[_0x278170(0x132)](_0x2f23b9))_0x408cf6=_0x278170(0x22c)[_0x278170(0x25d)](_0x2f23b9['id'],_0x218afd);if($dataItems[_0x278170(0x132)](_0x2f23b9))_0x408cf6=_0x278170(0x11d)['format'](_0x2f23b9['id'],_0x218afd);if($dataWeapons['includes'](_0x2f23b9))_0x408cf6=_0x278170(0x1d2)[_0x278170(0x25d)](_0x2f23b9['id'],_0x218afd);if($dataArmors[_0x278170(0x132)](_0x2f23b9))_0x408cf6=_0x278170(0x2c1)[_0x278170(0x25d)](_0x2f23b9['id'],_0x218afd);if($dataEnemies[_0x278170(0x132)](_0x2f23b9))_0x408cf6=_0x278170(0x283)[_0x278170(0x25d)](_0x2f23b9['id'],_0x218afd);if($dataStates[_0x278170(0x132)](_0x2f23b9))_0x408cf6=_0x278170(0x2cb)['format'](_0x2f23b9['id'],_0x218afd);return _0x408cf6;},DataManager[_0x468fdb(0x115)]=function(_0x39ae67){const _0x1373df=_0x468fdb;if(!_0x39ae67)return![];if(!DataManager[_0x1373df(0x2a2)](_0x39ae67))return![];const _0x3a9418=VisuMZ[_0x1373df(0x292)][_0x1373df(0x236)],_0x251309=_0x39ae67[_0x1373df(0x1d8)];if(_0x251309[_0x1373df(0x10e)](_0x3a9418[_0x1373df(0x142)])){if(_0x1373df(0x1da)===_0x1373df(0x28f)){return _0x22fcf1[_0x1373df(0x292)][_0x1373df(0x146)][_0x1373df(0x2f0)]['HelpWindow_RectJS'][_0x1373df(0x110)](this);let _0x312f5f=_0x4c39e7[_0x1373df(0x262)],_0x439b39=this[_0x1373df(0x1db)](0x2,![]),_0x20defe=0x0,_0x1d076d=_0x3cb61d['height']-_0x439b39;return new _0x2b2852(_0x20defe,_0x1d076d,_0x312f5f,_0x439b39);}else return!![];}return![];},DataManager['getFurnitureTypes']=function(_0x588357){const _0x4f74d6=_0x468fdb;if(!DataManager[_0x4f74d6(0x115)](_0x588357))return[_0x4f74d6(0x302)];this[_0x4f74d6(0x1e7)]=this[_0x4f74d6(0x1e7)]||{};if(this[_0x4f74d6(0x1e7)][_0x588357['id']]){if(_0x4f74d6(0x2a9)===_0x4f74d6(0x2a9))return this[_0x4f74d6(0x1e7)][_0x588357['id']];else _0x215119['CheckEventCollision']=!![];}let _0x2c8fb0=[];const _0xa85540=VisuMZ[_0x4f74d6(0x292)][_0x4f74d6(0x236)],_0x22e1f1=_0x588357[_0x4f74d6(0x1d8)];if(_0x22e1f1[_0x4f74d6(0x10e)](_0xa85540[_0x4f74d6(0x2dc)])){if(_0x4f74d6(0x272)===_0x4f74d6(0x272)){const _0x17bf32=String(RegExp['$1'])[_0x4f74d6(0x29b)](',')['map'](_0x5c0807=>_0x5c0807[_0x4f74d6(0x22e)]()[_0x4f74d6(0x299)]());_0x2c8fb0=_0x17bf32;}else this['_interpreter'][_0x4f74d6(0x143)](_0x3fedcf[_0x4f74d6(0x261)],_0x44aa05);}if(_0x2c8fb0[_0x4f74d6(0x1b8)]<=0x0)_0x2c8fb0=['any'];return this[_0x4f74d6(0x1e7)][_0x588357['id']]=_0x2c8fb0,this[_0x4f74d6(0x1e7)][_0x588357['id']];},DataManager['getMapFurnitureTypes']=function(){const _0x487ce5=_0x468fdb;if(!$gameMap)return[_0x487ce5(0x302)];if(!$dataMap)return[_0x487ce5(0x302)];this[_0x487ce5(0x2ab)]=this[_0x487ce5(0x2ab)]||{};if(this[_0x487ce5(0x2ab)][$gameMap[_0x487ce5(0x2e2)]()])return this[_0x487ce5(0x2ab)][$gameMap[_0x487ce5(0x2e2)]()];let _0x304ff3=[_0x487ce5(0x302)];const _0x1367a6=VisuMZ['FurnitureSystem'][_0x487ce5(0x236)],_0x20cfb3=$dataMap[_0x487ce5(0x1d8)];if(_0x20cfb3['match'](_0x1367a6[_0x487ce5(0x2dc)])){const _0xb2353=String(RegExp['$1'])[_0x487ce5(0x29b)](',')[_0x487ce5(0x238)](_0x5c620b=>_0x5c620b[_0x487ce5(0x22e)]()['trim']());_0x304ff3=_0x304ff3['concat'](_0xb2353);}return this[_0x487ce5(0x2ab)][$gameMap[_0x487ce5(0x2e2)]()]=_0x304ff3,this['_cache_getMapFurnitureTypes'][$gameMap[_0x487ce5(0x2e2)]()];},SoundManager[_0x468fdb(0x2cf)]=function(){const _0x22ebec=_0x468fdb,_0x33b90e=VisuMZ[_0x22ebec(0x292)]['Settings']['Sound'],_0x105ed9=_0x22ebec(0x113),_0x5c2e2c={'name':_0x33b90e['%1Name'[_0x22ebec(0x25d)](_0x105ed9)],'volume':_0x33b90e[_0x22ebec(0x1f6)[_0x22ebec(0x25d)](_0x105ed9)],'pitch':_0x33b90e[_0x22ebec(0x106)['format'](_0x105ed9)],'pan':_0x33b90e[_0x22ebec(0x173)[_0x22ebec(0x25d)](_0x105ed9)]};AudioManager[_0x22ebec(0x191)](_0x5c2e2c);},SoundManager['playMoveFurnitureSound']=function(){const _0x256377=_0x468fdb,_0x2e787f=VisuMZ['FurnitureSystem']['Settings'][_0x256377(0x24c)],_0x20b613=_0x256377(0x2c5),_0x6d491={'name':_0x2e787f['%1Name'[_0x256377(0x25d)](_0x20b613)],'volume':_0x2e787f['%1Volume'['format'](_0x20b613)],'pitch':_0x2e787f['%1Pitch'[_0x256377(0x25d)](_0x20b613)],'pan':_0x2e787f['%1Pant'[_0x256377(0x25d)](_0x20b613)]};AudioManager[_0x256377(0x191)](_0x6d491);},TextManager[_0x468fdb(0x292)]={'PositionButtons':VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x146)][_0x468fdb(0x2f0)][_0x468fdb(0x230)],'VariantButtons':VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x146)][_0x468fdb(0x2f0)][_0x468fdb(0x1ab)],'ConfirmButtons':VisuMZ['FurnitureSystem']['Settings']['Window'][_0x468fdb(0x242)],'CancelButtons':VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x146)][_0x468fdb(0x2f0)][_0x468fdb(0x1b6)],'PositionText':VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x146)][_0x468fdb(0x2f0)][_0x468fdb(0x13c)],'VariantText':VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x146)]['Window'][_0x468fdb(0x12d)],'ConfirmText':VisuMZ[_0x468fdb(0x292)]['Settings']['Window'][_0x468fdb(0x206)],'CancelText':VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x146)][_0x468fdb(0x2f0)]['CancelText']},SceneManager[_0x468fdb(0x101)]=function(){const _0xeaf6a9=_0x468fdb;return this[_0xeaf6a9(0x23a)]&&this['_scene']['constructor']===Scene_Map;},SceneManager[_0x468fdb(0x2b5)]=function(){const _0x31609b=_0x468fdb;return this[_0x31609b(0x23a)]&&this[_0x31609b(0x23a)][_0x31609b(0x204)]===Scene_Item;},SceneManager[_0x468fdb(0x2c9)]=function(){const _0xac14a7=_0x468fdb;if($gameParty[_0xac14a7(0x1a5)]())return![];return $gameMap&&$gameMap[_0xac14a7(0x30b)]()&&(this[_0xac14a7(0x101)]()||this[_0xac14a7(0x2b5)]());},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x176)]=Game_Action[_0x468fdb(0x1ff)][_0x468fdb(0x1f3)],Game_Action['prototype']['isForFriend']=function(){const _0xae130c=_0x468fdb;if(DataManager[_0xae130c(0x115)](this[_0xae130c(0x1fe)]())&&SceneManager[_0xae130c(0x2c9)]()){if(_0xae130c(0x1d3)===_0xae130c(0x298))_0x5e75d7[_0xae130c(0x1ff)][_0xae130c(0x164)][_0xae130c(0x110)](this,_0x4c6be3,_0x443500,_0x12e18c,_0x21ab6f);else return![];}return VisuMZ[_0xae130c(0x292)][_0xae130c(0x176)][_0xae130c(0x110)](this);},Game_Map[_0x468fdb(0x2c3)]=VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x146)][_0x468fdb(0x14d)][_0x468fdb(0x2e7)],Game_Map[_0x468fdb(0x254)]=VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x146)][_0x468fdb(0x14d)][_0x468fdb(0x259)],Game_Map[_0x468fdb(0x1e0)]=VisuMZ['FurnitureSystem'][_0x468fdb(0x146)][_0x468fdb(0x14d)][_0x468fdb(0x26a)],Game_Map[_0x468fdb(0x239)]=VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x146)]['Default'][_0x468fdb(0x1d5)],Game_Map[_0x468fdb(0x1e4)]=VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x146)][_0x468fdb(0x14d)]['TerrainTagsForbid'],Game_Map[_0x468fdb(0x186)]=VisuMZ[_0x468fdb(0x292)]['Settings'][_0x468fdb(0x14d)][_0x468fdb(0x1f0)],Game_Map['DEFAULT_FURNITURE_CHECK_PASSABILITY']=VisuMZ['FurnitureSystem'][_0x468fdb(0x146)][_0x468fdb(0x14d)][_0x468fdb(0x1a2)],Game_Map[_0x468fdb(0x247)]=VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x146)][_0x468fdb(0x14d)][_0x468fdb(0x23c)],Game_Map[_0x468fdb(0x1c0)]=VisuMZ['FurnitureSystem'][_0x468fdb(0x146)][_0x468fdb(0x14d)][_0x468fdb(0x2b9)],Game_Map['prototype']['isAllowFurniture']=function(){const _0x5d4367=_0x468fdb;if($dataMap){const _0x2f397b=VisuMZ[_0x5d4367(0x292)][_0x5d4367(0x236)],_0x21e910=$dataMap[_0x5d4367(0x1d8)];if(_0x21e910[_0x5d4367(0x10e)](_0x2f397b[_0x5d4367(0x120)])){if(_0x5d4367(0x220)!=='QSxlx')return![];else{const _0x37040b=_0x515fd3[_0x5d4367(0x292)][_0x5d4367(0x236)],_0x18cd2e=_0x396a5f['note'];if(_0x18cd2e[_0x5d4367(0x10e)](_0x37040b[_0x5d4367(0x170)]))return![];}}else{if(_0x21e910[_0x5d4367(0x10e)](_0x2f397b['AllowFurniture'])){if(_0x5d4367(0x246)===_0x5d4367(0x246))return!![];else this['_furniture']=this['canRegisterFurnitureData'](),this[_0x5d4367(0x1a8)]=_0x1d059a[_0x5d4367(0x1a8)],this[_0x5d4367(0x105)]=_0x39c132[_0x5d4367(0x105)]['clone'](),this['_furnitureSystemSettings']=_0x4b80f2[_0x5d4367(0x2a0)](_0x2882d6[_0x5d4367(0x1a4)]);}else{if(_0x21e910[_0x5d4367(0x10e)](_0x2f397b[_0x5d4367(0x2dc)]))return!![];}}return Game_Map[_0x5d4367(0x2c3)];}else{if(_0x5d4367(0x14b)===_0x5d4367(0x14b))return![];else{const _0x1c88ef=this['furnitureSettings'](),_0x2075a6=this[_0x5d4367(0x29c)]();let _0x2faf82=_0x53a759-_0x2075a6[_0x5d4367(0x1f7)][_0x5d4367(0x2cd)],_0x595c3c=_0x1ce58a+_0x2075a6[_0x5d4367(0x1f7)][_0x5d4367(0x140)],_0x315f5b=_0x588405-_0x2075a6[_0x5d4367(0x1f7)]['up'],_0x32e333=_0x39f76c+_0x2075a6[_0x5d4367(0x1f7)]['down'];_0x1c88ef[_0x5d4367(0x15b)]=_0x1c88ef[_0x5d4367(0x15b)]||[];if(_0x1c88ef[_0x5d4367(0x15b)]['length']<=0x0)return![];for(let _0x44f1de=_0x2faf82;_0x44f1de<=_0x595c3c;_0x44f1de++){for(let _0x243475=_0x315f5b;_0x243475<=_0x32e333;_0x243475++){const _0x214597=this[_0x5d4367(0x196)](_0x44f1de,_0x243475);if(!_0x1c88ef['AllowTerrainTags'][_0x5d4367(0x132)](_0x214597))return![];}}return!![];}}},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x286)]=function(_0x4282e0){const _0x3832fc=_0x468fdb,_0x2cdbca=VisuMZ['FurnitureSystem'][_0x3832fc(0x236)],_0x2f3438=_0x4282e0['note'];let _0x5a235a=[];return _0x2f3438['match'](_0x2cdbca[_0x3832fc(0x142)])&&(_0x5a235a=RegExp['$1']['split'](',')[_0x3832fc(0x238)](_0x865150=>_0x865150[_0x3832fc(0x252)]()[_0x3832fc(0x299)]())),_0x5a235a=VisuMZ[_0x3832fc(0x292)][_0x3832fc(0x1dc)](_0x5a235a),_0x5a235a;},VisuMZ['FurnitureSystem']['extractFurnitureSettings']=function(_0x4b39ba){const _0x156048=_0x468fdb,_0x3af420=VisuMZ['FurnitureSystem'][_0x156048(0x236)],_0x4382e5=_0x4b39ba[_0x156048(0x1d8)];let _0x105da2={'AllowRegions':Game_Map[_0x156048(0x254)][_0x156048(0x185)](),'ForbidRegions':Game_Map[_0x156048(0x1e0)][_0x156048(0x185)](),'AllowTerrainTags':Game_Map[_0x156048(0x239)][_0x156048(0x185)](),'ForbidTerrainTags':Game_Map[_0x156048(0x1e4)][_0x156048(0x185)](),'CheckPassability':Game_Map[_0x156048(0x129)],'CheckEventCollision':Game_Map[_0x156048(0x186)],'OnPlaceCommonEventID':Game_Map[_0x156048(0x247)],'OnPlaceEndMode':Game_Map['DEFAULT_FURNITURE_END_MODE_ON_PLACE'],'OnPlaceConsumeItem':_0x4b39ba['id'],'PreventCancelExit':![]};_0x4382e5[_0x156048(0x10e)](_0x3af420[_0x156048(0x2a3)])&&('vkEJH'===_0x156048(0x2eb)?_0x7c45a3[_0x156048(0x1d9)](_0x6259b4,0x1):_0x105da2[_0x156048(0x2c7)]=RegExp['$1']['split'](',')[_0x156048(0x238)](_0x55648f=>Number(_0x55648f)[_0x156048(0x119)](0x1,0xff)));_0x4382e5[_0x156048(0x10e)](_0x3af420['FurnitureForbidRegions'])&&(_0x105da2[_0x156048(0x175)]=RegExp['$1'][_0x156048(0x29b)](',')['map'](_0x1946eb=>Number(_0x1946eb)[_0x156048(0x119)](0x1,0xff)));_0x4382e5[_0x156048(0x10e)](_0x3af420['FurnitureAllowTerrainTags'])&&(_0x156048(0x11a)!=='tKRdn'?_0x8fe8ed[_0x156048(0x292)]['Window_ItemList_drawItemNumber'][_0x156048(0x110)](this,_0x396e8b,_0x19df75,_0x18848f,_0x35af47):_0x105da2[_0x156048(0x15b)]=RegExp['$1']['split'](',')[_0x156048(0x238)](_0x18af5d=>Number(_0x18af5d)[_0x156048(0x119)](0x1,0xff)));_0x4382e5[_0x156048(0x10e)](_0x3af420[_0x156048(0x2ba)])&&(_0x105da2[_0x156048(0x1df)]=RegExp['$1'][_0x156048(0x29b)](',')[_0x156048(0x238)](_0x4b0392=>Number(_0x4b0392)[_0x156048(0x119)](0x1,0xff)));if(_0x4382e5['match'](_0x3af420[_0x156048(0x2d9)])){if(_0x156048(0x168)===_0x156048(0x168))_0x105da2[_0x156048(0x1a2)]=!![];else return this[_0x156048(0x2aa)](),![];}else _0x4382e5[_0x156048(0x10e)](_0x3af420['FurnitureFreePassability'])&&('GQdDk'===_0x156048(0x1ec)?_0x105da2['CheckPassability']=![]:_0x1ca30b[_0x156048(0x2c7)]=_0x11e97e['$1'][_0x156048(0x29b)](',')[_0x156048(0x238)](_0x1514e3=>_0x32fb07(_0x1514e3)[_0x156048(0x119)](0x1,0xff)));if(_0x4382e5[_0x156048(0x10e)](_0x3af420[_0x156048(0x199)]))_0x105da2['CheckEventCollision']=!![];else{if(_0x4382e5[_0x156048(0x10e)](_0x3af420['FurnitureFreeEventCollisionCheck'])){if(_0x156048(0x234)===_0x156048(0x202)){const _0x404e94=_0x25984b(_0x40f359['$1']);_0x404e94!==_0x4a519e[_0x2ab17e]['version']&&(_0x449f94(_0x156048(0x150)[_0x156048(0x25d)](_0x13f097,_0x404e94)),_0x597f28[_0x156048(0x187)]());}else _0x105da2[_0x156048(0x1f0)]=![];}}if(_0x4382e5['match'](_0x3af420[_0x156048(0x264)])){if('zetAz'===_0x156048(0x2b6))for(let _0x14c375=_0x305e49;_0x14c375<=_0xcaff50;_0x14c375++){const _0x45beaa=this[_0x156048(0x19f)](_0x2f2e5d,_0x14c375);if(!_0xb2582d['AllowRegions'][_0x156048(0x132)](_0x45beaa))return![];}else _0x105da2[_0x156048(0x134)]=Number(RegExp['$1']);}if(_0x4382e5[_0x156048(0x10e)](_0x3af420[_0x156048(0x2ad)]))_0x105da2[_0x156048(0x117)]=!![];else _0x4382e5[_0x156048(0x10e)](_0x3af420[_0x156048(0x18d)])&&(_0x105da2[_0x156048(0x117)]=![]);if(_0x4382e5[_0x156048(0x10e)](_0x3af420[_0x156048(0x2f7)])){if('eEVDM'!==_0x156048(0x282)){_0x105da2['PreventCancelExit']=!![];const _0x43c4e4=$dataItems[_0x105da2[_0x156048(0x112)]];if(!_0x105da2[_0x156048(0x117)]&&(!_0x43c4e4||!_0x43c4e4[_0x156048(0x1ad)])){_0x105da2[_0x156048(0x11e)]=![];if($gameTemp[_0x156048(0x1bd)]()){if(!$gameTemp[_0x156048(0x2b2)]){$gameTemp[_0x156048(0x2b2)]=!![];let _0x1e30df='This\x20furniture\x27s\x20settings\x20will\x20softlock\x20the\x20player.\x0aCancel\x20is\x20reenabled.';alert(_0x1e30df);}}}}else{const _0xac64e5=this['_furnitureSystemTemplateIndex'],_0x4f845f=this[_0x156048(0x105)]['length'];this[_0x156048(0x1a8)]+=_0x1acce9?0x1:-0x1;if(this[_0x156048(0x1a8)]<0x0)this[_0x156048(0x1a8)]=_0x4f845f-0x1;else this['_furnitureSystemTemplateIndex']>=_0x4f845f&&(this['_furnitureSystemTemplateIndex']=0x0);if(_0xac64e5!==this[_0x156048(0x1a8)]){_0x191efb[_0x156048(0x2f2)]();const _0xdca0e6=this['furnitureEventTemplateName']();this[_0x156048(0x29c)]()[_0x156048(0x1d0)](_0xdca0e6,!![]);}}}return _0x105da2;},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x1dc)]=function(_0x45cb5b){const _0x4a85f1=_0x468fdb;return _0x45cb5b[_0x4a85f1(0x180)](_0x169829=>!!VisuMZ[_0x4a85f1(0x305)][_0x169829]);},Game_Map[_0x468fdb(0x1ff)]['setupFurnitureData']=function(_0x545593,_0x287d29,_0xa9a57d){const _0x10e8cf=_0x468fdb;this['_furnitureSystemTemplateIndex']=$gameTemp[_0x10e8cf(0x1a8)]||0x0,this['_furnitureSystemTemplates']=_0x545593['clone'](),this[_0x10e8cf(0x1a4)]=JsonEx[_0x10e8cf(0x2a0)](_0x287d29),this[_0x10e8cf(0x2c2)]={'x':Math[_0x10e8cf(0x256)]($gamePlayer['x']),'y':Math['round']($gamePlayer['y']),'lastPosX':Math[_0x10e8cf(0x256)]($gamePlayer['x']),'lastPosY':Math[_0x10e8cf(0x256)]($gamePlayer['y']),'lastCursorX':TouchInput['x'],'lastCursorY':TouchInput['y']};if(_0xa9a57d){const _0x871baf=$gamePlayer[_0x10e8cf(0x217)]();if([0x7,0x4,0x1][_0x10e8cf(0x132)](_0x871baf))this[_0x10e8cf(0x2c2)]['x']-=0x1;if([0x9,0x6,0x3][_0x10e8cf(0x132)](_0x871baf))this['_furnitureSystemEventPosition']['x']+=0x1;if([0x7,0x8,0x9][_0x10e8cf(0x132)](_0x871baf))this['_furnitureSystemEventPosition']['y']-=0x1;if([0x1,0x2,0x3][_0x10e8cf(0x132)](_0x871baf))this['_furnitureSystemEventPosition']['y']+=0x1;this[_0x10e8cf(0x2c2)]['lastPosX']=this[_0x10e8cf(0x2c2)]['x'],this[_0x10e8cf(0x2c2)][_0x10e8cf(0x27c)]=this[_0x10e8cf(0x2c2)]['y'];}},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x2bf)]=function(_0x2daf28,_0x19ba52){const _0x10ad48=_0x468fdb,_0x20c017=$gameMap[_0x10ad48(0x21a)](),_0x10d2f3={'template':_0x2daf28[$gameMap[_0x10ad48(0x1a8)]],'mapId':_0x20c017['MapID'],'eventId':_0x20c017['EventID'],'x':$gameMap[_0x10ad48(0x2c2)]['x'],'y':$gameMap['_furnitureSystemEventPosition']['y'],'spawnPreserved':![],'spawnEventId':$gameMap['_spawnedEvents'][_0x10ad48(0x1b8)]+0x3e8};return _0x10d2f3;},Game_Map[_0x468fdb(0x1ff)]['setupFurnitureCursor']=function(_0xc6109f,_0x434f0a){const _0xe8a5b9=_0x468fdb,_0x174b77=VisuMZ['FurnitureSystem'][_0xe8a5b9(0x2bf)](_0xc6109f,_0x434f0a);$gameTemp[_0xe8a5b9(0x16f)]=_0x174b77,this[_0xe8a5b9(0x260)]=new Game_Event(_0x174b77[_0xe8a5b9(0x103)],_0x174b77[_0xe8a5b9(0x208)]),$gameTemp['_furnitureModeRegisterEvent']=!![],this[_0xe8a5b9(0x260)]['setupSpawn'](_0x174b77),$gameTemp[_0xe8a5b9(0x229)]=undefined,$gameTemp[_0xe8a5b9(0x16f)]=undefined,this[_0xe8a5b9(0x260)]['refresh']();},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x1e8)]=function(){const _0x2e29fa=_0x468fdb;SceneManager[_0x2e29fa(0x23a)][_0x2e29fa(0x209)]&&SceneManager[_0x2e29fa(0x23a)][_0x2e29fa(0x209)][_0x2e29fa(0x138)]&&SceneManager['_scene']['_spriteset'][_0x2e29fa(0x138)][_0x2e29fa(0x19b)]();const _0x338979=SceneManager[_0x2e29fa(0x23a)][_0x2e29fa(0x23e)];if(_0x338979)_0x338979[_0x2e29fa(0x211)]();VisuMZ[_0x2e29fa(0x292)][_0x2e29fa(0x1eb)]();},VisuMZ[_0x468fdb(0x292)]['RefreshFurnitureCursorBitmap']=function(){const _0x197455=_0x468fdb;if(SceneManager['_scene'][_0x197455(0x209)]){if(_0x197455(0x1a6)===_0x197455(0x1a6)){const _0x2c475e=SceneManager[_0x197455(0x23a)]['_spriteset'][_0x197455(0x138)];if(_0x2c475e)_0x2c475e[_0x197455(0x300)]();}else _0x5bfc94[_0x197455(0x1a2)]=!![];}},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x2f9)]=function(_0xaf1a31,_0x46709f){const _0x1c724d=_0x468fdb,_0x5e320f=$gameMap[_0x1c724d(0x14a)](),_0x198077=$gameMap[_0x1c724d(0x1c2)](),_0x404e76=VisuMZ[_0x1c724d(0x305)][_0x198077],_0x5a6268={'template':_0x198077,'mapId':_0x404e76[_0x1c724d(0x103)],'eventId':_0x404e76[_0x1c724d(0x208)],'x':_0xaf1a31,'y':_0x46709f,'spawnPreserved':!![],'spawnEventId':$gameMap[_0x1c724d(0x232)][_0x1c724d(0x1b8)]+0x3e8};let _0x27dc5c=_0x5e320f['CheckPassability'];if(_0x5e320f[_0x1c724d(0x2c7)][_0x1c724d(0x1b8)]>0x0||_0x5e320f['AllowTerrainTags']['length']>0x0){if(_0x1c724d(0x297)===_0x1c724d(0x297))_0x27dc5c=![];else{this[_0x1c724d(0x182)](this[_0x1c724d(0x29d)]());const _0x139cb1=_0x56b309['FurnitureSystem'][_0x1c724d(0x1ab)],_0x32926a=_0x358b4f[_0x1c724d(0x292)]['VariantText'],_0xba257f=this[_0x1c724d(0x2ff)](_0x139cb1)[_0x1c724d(0x262)],_0x171d7f=this['textSizeEx'](_0x32926a)[_0x1c724d(0x262)],_0x4558ba=this[_0x1c724d(0x2ce)]();this['drawTextEx'](_0x139cb1,_0x237a1b-_0xba257f-_0x59d07e,_0x4558ba,_0xba257f),this['drawTextEx'](_0x32926a,_0x4f5153+_0x3e1a3d,_0x4558ba,_0x171d7f);}}const _0x2e53af=$gameMap[_0x1c724d(0x1bc)](_0x5a6268,_0x5e320f[_0x1c724d(0x1f0)],_0x27dc5c),_0x4dd62a=$gameMap['lastSpawnedEvent']();return _0x4dd62a['registerFurnitureData'](),_0x2e53af;},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x281)]=function(){const _0x160cf7=_0x468fdb;return this[_0x160cf7(0x105)]&&this['_furnitureSystemTemplates'][_0x160cf7(0x1b8)]>0x0;},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x20b)]=function(_0x31990a){const _0x308f3f=_0x468fdb,_0x16260d=VisuMZ[_0x308f3f(0x292)][_0x308f3f(0x286)](_0x31990a),_0x18e51b=VisuMZ['FurnitureSystem']['extractFurnitureSettings'](_0x31990a);this[_0x308f3f(0x271)](_0x16260d,_0x18e51b);},Game_Map[_0x468fdb(0x1ff)]['startFurnitureSystemMode']=function(_0x507e6a,_0xfcb98e){const _0x4309b8=_0x468fdb;_0x507e6a=VisuMZ['FurnitureSystem']['PurgeNonTemplateData'](_0x507e6a);if(_0x507e6a[_0x4309b8(0x1b8)]<=0x0)return;this[_0x4309b8(0x1be)](_0x507e6a,_0xfcb98e,!![]),this[_0x4309b8(0x2cc)](_0x507e6a,_0xfcb98e),VisuMZ[_0x4309b8(0x292)][_0x4309b8(0x1e8)]();},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x155)]=function(){const _0x18a448=_0x468fdb;this[_0x18a448(0x1a8)]=undefined,this[_0x18a448(0x105)]=undefined,this[_0x18a448(0x1a4)]=undefined,this['_furnitureSystemEventPosition']=undefined,this['_furnitureSystemEvent']=undefined;},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x2e0)]=function(_0x8c74ba){const _0x3f318a=_0x468fdb;this[_0x3f318a(0x290)](_0x8c74ba);const _0x27a869=this[_0x3f318a(0x14a)]();if(_0x27a869[_0x3f318a(0x117)]){if(_0x3f318a(0x1ed)===_0x3f318a(0x29e))this[_0x3f318a(0x1bb)]=!![];else{this['endFurnitureSystemMode']();if(_0x27a869[_0x3f318a(0x112)]>0x0){const _0x4cd40a=$dataItems[_0x27a869[_0x3f318a(0x112)]];$gameParty[_0x3f318a(0x201)](_0x4cd40a);}}}else{if(_0x27a869[_0x3f318a(0x112)]>0x0){const _0x203939=$dataItems[_0x27a869[_0x3f318a(0x112)]];$gameParty[_0x3f318a(0x201)](_0x203939),$gameParty[_0x3f318a(0x1b0)](_0x203939)<=0x0?this[_0x3f318a(0x155)]():VisuMZ[_0x3f318a(0x292)][_0x3f318a(0x2c4)]();}}},Game_Map['prototype'][_0x468fdb(0x290)]=function(_0x41e673){const _0x51ab91=_0x468fdb;this[_0x51ab91(0x178)](_0x41e673),this['onPlaceFurnitureRunCommonEvent'](),this[_0x51ab91(0x2b8)]();},Game_Map[_0x468fdb(0x1ff)]['onPlaceFurnitureSpawnEvent']=function(_0x54ce07){const _0x1af76e=_0x468fdb,_0x5dae9c=this['getTargetFurnitureLocation'](_0x54ce07),_0x4766c1=_0x5dae9c['x'],_0x497b8a=_0x5dae9c['y'];return VisuMZ['FurnitureSystem'][_0x1af76e(0x2f9)](_0x4766c1,_0x497b8a);},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x2e9)]=function(){const _0x1d3e28=_0x468fdb,_0x46c148=this[_0x1d3e28(0x1a4)],_0x26f5c6=_0x46c148[_0x1d3e28(0x134)],_0x493d2c=$gameMap[_0x1d3e28(0x257)]()[_0x1d3e28(0x102)]();if(_0x26f5c6){if(_0x1d3e28(0x28d)!==_0x1d3e28(0x28d)){const _0x4ae94f=_0x2dd7a4[_0x1d3e28(0x21a)](),_0x52be57={'template':_0x44b130[_0x30b426[_0x1d3e28(0x1a8)]],'mapId':_0x4ae94f['MapID'],'eventId':_0x4ae94f['EventID'],'x':_0x48a53f[_0x1d3e28(0x2c2)]['x'],'y':_0x307314[_0x1d3e28(0x2c2)]['y'],'spawnPreserved':![],'spawnEventId':_0x367cf9['_spawnedEvents'][_0x1d3e28(0x1b8)]+0x3e8};return _0x52be57;}else{const _0x9ed61b=$dataCommonEvents[_0x26f5c6];if(_0x9ed61b){if(_0x46c148[_0x1d3e28(0x117)]){if('WYmmi'===_0x1d3e28(0x2d4)){const _0x427bfb=this[_0x1d3e28(0x19f)](_0x6efc80,_0xc79b6e);if(_0x5db3e4[_0x1d3e28(0x175)][_0x1d3e28(0x132)](_0x427bfb))return![];if(_0x55293f['AllowRegions'][_0x1d3e28(0x1b8)]>0x0){if(!_0xd01642[_0x1d3e28(0x2c7)][_0x1d3e28(0x132)](_0x427bfb))return![];}}else this[_0x1d3e28(0x118)]&&this[_0x1d3e28(0x118)]['isRunning']()?this[_0x1d3e28(0x118)][_0x1d3e28(0x143)](_0x9ed61b[_0x1d3e28(0x261)],_0x493d2c):($gameTemp[_0x1d3e28(0x2f4)](_0x26f5c6),this[_0x1d3e28(0x118)][_0x1d3e28(0x2ed)](),this['_interpreter'][_0x1d3e28(0x26e)]=_0x493d2c);}else{if(_0x1d3e28(0x12b)!=='QupvA')_0x79495d['reserveCommonEvent'](_0x51f3e9),this[_0x1d3e28(0x118)][_0x1d3e28(0x2ed)](),this[_0x1d3e28(0x118)][_0x1d3e28(0x26e)]=_0x2b67dd;else{SceneManager['_scene']['playOnceParallelInterpreter'](_0x26f5c6);const _0x24cf33=SceneManager[_0x1d3e28(0x23a)]['_onceParallelInterpreters'];if(_0x24cf33&&_0x24cf33[_0x1d3e28(0x1b8)]>0x0){if(_0x1d3e28(0x153)!==_0x1d3e28(0x2d5)){const _0x3191cf=_0x24cf33[_0x24cf33[_0x1d3e28(0x1b8)]-0x1];_0x3191cf[_0x1d3e28(0x26e)]=_0x493d2c;}else{if(!this[_0x1d3e28(0x19e)](_0x46d24e,_0x24f6b7))return![];if(this[_0x1d3e28(0x145)](_0x5e7efe,_0x290220))return!![];if(this[_0x1d3e28(0x136)](_0x4159cf,_0x417994))return!![];if(!this['checkPlaceFurnitureAtForbidRegion'](_0x2031bc,_0x1f018a))return![];if(!this[_0x1d3e28(0x193)](_0x31db23,_0xebc2c4))return![];if(!this[_0x1d3e28(0x218)](_0x572d67,_0x10aa32))return![];return!![];}}}}}}}},Game_Map[_0x468fdb(0x1ff)]['onPlaceFurnitureJS']=function(){const _0x195db5=_0x468fdb,_0x59e5ce=this['_furnitureSystemSettings'];if(!_0x59e5ce[_0x195db5(0x112)])return;const _0x51bda5=$dataItems[_0x59e5ce[_0x195db5(0x112)]];if(!_0x51bda5)return;const _0x56ac86=VisuMZ[_0x195db5(0x292)][_0x195db5(0x243)](_0x51bda5,_0x195db5(0x179));VisuMZ[_0x195db5(0x292)]['JS'][_0x56ac86]&&VisuMZ[_0x195db5(0x292)]['JS'][_0x56ac86][_0x195db5(0x110)](this,_0x51bda5);},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x28b)]=function(_0x25f153){const _0x55b7e0=_0x468fdb;if(!_0x25f153)return;const _0x4cb317=VisuMZ[_0x55b7e0(0x292)][_0x55b7e0(0x243)](_0x25f153,_0x55b7e0(0x16e));VisuMZ['FurnitureSystem']['JS'][_0x4cb317]&&VisuMZ[_0x55b7e0(0x292)]['JS'][_0x4cb317][_0x55b7e0(0x110)](this,_0x25f153);},VisuMZ[_0x468fdb(0x292)]['updateFurnitureItemWindowCount']=function(){const _0x214f65=_0x468fdb,_0x26c5e0=SceneManager[_0x214f65(0x23a)],_0x1ffc91=_0x26c5e0['_furnitureItemWindow'];_0x1ffc91&&_0x1ffc91[_0x214f65(0x211)]();},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x212)]=function(_0x3ab565,_0x5d1712,_0x242b57,_0x52b68e){const _0x106820=_0x468fdb;let _0x276d48=VisuMZ[_0x106820(0x292)][_0x106820(0x286)](_0x3ab565),_0x4b97ad=VisuMZ[_0x106820(0x292)][_0x106820(0x128)](_0x3ab565);_0x276d48=VisuMZ['FurnitureSystem'][_0x106820(0x1dc)](_0x276d48),_0x5d1712=_0x5d1712['clamp'](0x0,_0x276d48[_0x106820(0x1b8)]-0x1),this['setupFurnitureData'](_0x276d48,_0x4b97ad,!![]),this[_0x106820(0x2cc)](_0x276d48,_0x4b97ad),this[_0x106820(0x1a8)]=_0x5d1712,this['furnitureEventPosition']()['x']=_0x242b57,this['furnitureEventPosition']()['y']=_0x52b68e;const _0x4f7edb=this['onPlaceFurnitureSpawnEvent'](!![]);return this['endFurnitureSystemMode'](),_0x4f7edb;},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x276)]=function(_0x4d94b7,_0x6fc625,_0x320b2c){const _0x47fb52=_0x468fdb;let _0x3d2e6e=VisuMZ['FurnitureSystem']['extractFurnitureTemplates'](_0x4d94b7),_0x4bbaeb=VisuMZ[_0x47fb52(0x292)][_0x47fb52(0x128)](_0x4d94b7);_0x3d2e6e=VisuMZ['FurnitureSystem'][_0x47fb52(0x1dc)](_0x3d2e6e),_0x6fc625=_0x6fc625['clamp'](0x0,_0x3d2e6e['length']-0x1),this['setupFurnitureData'](_0x3d2e6e,_0x4bbaeb,!![]),this[_0x47fb52(0x2cc)](_0x3d2e6e,_0x4bbaeb),this[_0x47fb52(0x1a8)]=_0x6fc625,this[_0x47fb52(0x29c)]()[_0x47fb52(0x211)]();const _0x159120=this[_0x47fb52(0x29c)]()[_0x47fb52(0x1f7)],_0x398a56=VisuMZ[_0x47fb52(0x292)][_0x47fb52(0x2bf)](_0x3d2e6e,_0x4bbaeb),_0x3ebbd3=this[_0x47fb52(0x17d)](_0x320b2c,_0x398a56,_0x159120,_0x4bbaeb);if(_0x3ebbd3['length']<=0x0)return this[_0x47fb52(0x155)](),![];const _0x2b6f5c=_0x3ebbd3[Math[_0x47fb52(0x1dd)](_0x3ebbd3[_0x47fb52(0x1b8)])],_0x635d94=_0x2b6f5c[0x0]||0x0,_0x4440d4=_0x2b6f5c[0x1]||0x0;this['furnitureEventPosition']()['x']=_0x635d94,this['furnitureEventPosition']()['y']=_0x4440d4;const _0x2fd0b6=this['onPlaceFurnitureSpawnEvent'](!![]);return this[_0x47fb52(0x155)](),_0x2fd0b6;},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x17d)]=function(_0x4a7a4d,_0xe2239c,_0x3c7097,_0x5ea12e){const _0x4b6f9b=_0x468fdb,_0x272f8b=[],_0x4c9f64=this[_0x4b6f9b(0x262)](),_0x18174b=this[_0x4b6f9b(0x267)]();let _0x14c636=_0x5ea12e[_0x4b6f9b(0x1a2)];(_0x5ea12e[_0x4b6f9b(0x2c7)][_0x4b6f9b(0x1b8)]>0x0||_0x5ea12e[_0x4b6f9b(0x15b)][_0x4b6f9b(0x1b8)]>0x0)&&(_0x14c636=![]);const _0x3ee831=_0x3c7097[_0x4b6f9b(0x2cd)],_0x1b2f6b=_0x4c9f64-_0x3c7097[_0x4b6f9b(0x140)],_0x32f839=_0x3c7097['up'],_0x4b578a=_0x18174b-_0x3c7097['down'];for(let _0x84f3a7=_0x3ee831;_0x84f3a7<_0x1b2f6b;_0x84f3a7++){for(let _0x1770ff=_0x32f839;_0x1770ff<_0x4b578a;_0x1770ff++){if(!_0x4a7a4d[_0x4b6f9b(0x132)](this[_0x4b6f9b(0x19f)](_0x84f3a7,_0x1770ff)))continue;if(!this[_0x4b6f9b(0x241)](_0x84f3a7,_0x1770ff))continue;if(_0x5ea12e[_0x4b6f9b(0x1f0)]){if(this['checkExistingEntitiesAt'](_0x84f3a7,_0x1770ff))continue;if(!this[_0x4b6f9b(0x25e)](_0xe2239c,_0x84f3a7,_0x1770ff))continue;}if(_0x14c636){if(!this[_0x4b6f9b(0x167)](_0x84f3a7,_0x1770ff))continue;}_0x272f8b['push']([_0x84f3a7,_0x1770ff]);}}return _0x272f8b;},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x2d3)]=function(_0x3aeb14,_0x145c57,_0x46c978){const _0x527378=_0x468fdb;let _0x35ece7=VisuMZ[_0x527378(0x292)][_0x527378(0x286)](_0x3aeb14),_0x1ef898=VisuMZ[_0x527378(0x292)]['extractFurnitureSettings'](_0x3aeb14);_0x35ece7=VisuMZ[_0x527378(0x292)]['PurgeNonTemplateData'](_0x35ece7),_0x145c57=_0x145c57[_0x527378(0x119)](0x0,_0x35ece7[_0x527378(0x1b8)]-0x1),this['setupFurnitureData'](_0x35ece7,_0x1ef898,!![]),this[_0x527378(0x2cc)](_0x35ece7,_0x1ef898),this[_0x527378(0x1a8)]=_0x145c57,this['furnitureEvent']()['refresh']();const _0x709052=this[_0x527378(0x29c)]()['_addedHitbox'],_0x49f48a=VisuMZ[_0x527378(0x292)]['CreateSpawnData'](_0x35ece7,_0x1ef898),_0x3c2d16=this['getSpawnPointsWithTerrainTags'](_0x46c978,_0x49f48a,_0x709052,_0x1ef898);if(_0x3c2d16[_0x527378(0x1b8)]<=0x0)return this[_0x527378(0x155)](),![];const _0x3b2371=_0x3c2d16[Math['randomInt'](_0x3c2d16[_0x527378(0x1b8)])],_0xe76025=_0x3b2371[0x0]||0x0,_0x3709de=_0x3b2371[0x1]||0x0;this[_0x527378(0x17b)]()['x']=_0xe76025,this[_0x527378(0x17b)]()['y']=_0x3709de;const _0x9f840c=this[_0x527378(0x178)](!![]);return this['endFurnitureSystemMode'](),_0x9f840c;},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x258)]=function(_0xc16f37,_0x39b3b3,_0x17e687,_0x13bfe6){const _0x345f88=_0x468fdb,_0x51a89a=[],_0x3fa1b7=this[_0x345f88(0x262)](),_0x46f46d=this[_0x345f88(0x267)]();let _0x5f23df=_0x13bfe6['CheckPassability'];(_0x13bfe6[_0x345f88(0x2c7)][_0x345f88(0x1b8)]>0x0||_0x13bfe6[_0x345f88(0x15b)][_0x345f88(0x1b8)]>0x0)&&(_0x345f88(0x15a)===_0x345f88(0x15a)?_0x5f23df=![]:(this[_0x345f88(0x178)](_0x11262d),this[_0x345f88(0x2e9)](),this['onPlaceFurnitureJS']()));const _0x4e5bab=_0x17e687[_0x345f88(0x2cd)],_0x49f11c=_0x3fa1b7-_0x17e687[_0x345f88(0x140)],_0x45c53e=_0x17e687['up'],_0x451f8c=_0x46f46d-_0x17e687[_0x345f88(0x11c)];for(let _0x48d7bd=_0x4e5bab;_0x48d7bd<_0x49f11c;_0x48d7bd++){for(let _0x1dd5a5=_0x45c53e;_0x1dd5a5<_0x451f8c;_0x1dd5a5++){if(!_0xc16f37['includes'](this[_0x345f88(0x196)](_0x48d7bd,_0x1dd5a5)))continue;if(!this[_0x345f88(0x241)](_0x48d7bd,_0x1dd5a5))continue;if(_0x13bfe6[_0x345f88(0x1f0)]){if(this['checkExistingEntitiesAt'](_0x48d7bd,_0x1dd5a5))continue;if(!this[_0x345f88(0x25e)](_0x39b3b3,_0x48d7bd,_0x1dd5a5))continue;}if(_0x5f23df){if(!this[_0x345f88(0x167)](_0x48d7bd,_0x1dd5a5))continue;}_0x51a89a[_0x345f88(0x2e8)]([_0x48d7bd,_0x1dd5a5]);}}return _0x51a89a;},Game_Map[_0x468fdb(0x1ff)]['furnitureEventTemplateName']=function(){const _0x43192b=_0x468fdb;if(this[_0x43192b(0x1a8)]===undefined)return'';const _0x3726e4=this['_furnitureSystemTemplateIndex'];return this[_0x43192b(0x105)][_0x3726e4]||'';},Game_Map['prototype']['furnitureEventTemplateData']=function(){const _0x49a8fd=this['furnitureEventTemplateName']();return VisuMZ['EventTemplates'][_0x49a8fd]||null;},Game_Map['prototype'][_0x468fdb(0x29c)]=function(){const _0x5a5dba=_0x468fdb;return this[_0x5a5dba(0x260)]||null;},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x17b)]=function(){const _0x26a540=_0x468fdb;return this[_0x26a540(0x2c2)];},Game_Map['prototype'][_0x468fdb(0x14a)]=function(){return this['_furnitureSystemSettings']||{};},Game_Map['prototype'][_0x468fdb(0x1a3)]=function(){const _0x331263=_0x468fdb;this[_0x331263(0x25c)](),this[_0x331263(0x28e)](),this['updateFurnitureModeInputCancel'](),this[_0x331263(0x2f1)]();},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x25c)]=function(){const _0x134407=_0x468fdb,_0x17fe60=0x14;if(Input[_0x134407(0x27e)](_0x134407(0x1d7))||TouchInput[_0x134407(0x1ba)]<=-_0x17fe60)this['shiftFurnitureTemplateIndex'](![]);else(Input['isRepeated'](_0x134407(0x192))||TouchInput['wheelY']>=_0x17fe60)&&this[_0x134407(0x157)](!![]);},Game_Map[_0x468fdb(0x1ff)]['shiftFurnitureTemplateIndex']=function(_0x200d78){const _0x4a02f7=_0x468fdb,_0x19442c=this['_furnitureSystemTemplateIndex'],_0x4b67e9=this[_0x4a02f7(0x105)][_0x4a02f7(0x1b8)];this[_0x4a02f7(0x1a8)]+=_0x200d78?0x1:-0x1;if(this['_furnitureSystemTemplateIndex']<0x0)this['_furnitureSystemTemplateIndex']=_0x4b67e9-0x1;else this[_0x4a02f7(0x1a8)]>=_0x4b67e9&&(this[_0x4a02f7(0x1a8)]=0x0);if(_0x19442c!==this[_0x4a02f7(0x1a8)]){SoundManager[_0x4a02f7(0x2f2)]();const _0x571ed7=this[_0x4a02f7(0x1c2)]();this[_0x4a02f7(0x29c)]()['morphIntoTemplate'](_0x571ed7,!![]);}},Game_Map['prototype'][_0x468fdb(0x28e)]=function(){const _0x26bcbb=_0x468fdb,_0x303c9f=this[_0x26bcbb(0x17b)]();if(Input['dir4']!==0x0&&(_0x303c9f['lastCursorX']!==TouchInput['x']||_0x303c9f[_0x26bcbb(0x1aa)]!==TouchInput['y'])){if(_0x26bcbb(0x205)!=='YWNoZ'){if(_0x463530[_0x26bcbb(0x229)])return;_0x1af07a['FurnitureSystem'][_0x26bcbb(0x268)]['call'](this,_0x229ba4);}else _0x303c9f['x']=_0x303c9f[_0x26bcbb(0x1c8)]=$gameMap[_0x26bcbb(0x18e)](TouchInput['x'])['clamp'](0x0,this[_0x26bcbb(0x262)]()-0x1),_0x303c9f['y']=_0x303c9f['lastPosY']=$gameMap[_0x26bcbb(0x219)](TouchInput['y'])[_0x26bcbb(0x119)](0x0,this[_0x26bcbb(0x267)]()-0x1),_0x303c9f['lastCursorX']=TouchInput['x'],_0x303c9f[_0x26bcbb(0x1aa)]=TouchInput['y'];}if(Input[_0x26bcbb(0x27e)]('left')){if(_0x26bcbb(0x1e2)==='JXhGn')_0x303c9f['x']-=0x1;else{this[_0x26bcbb(0x155)]();if(_0x3f932b[_0x26bcbb(0x112)]>0x0){const _0x37756e=_0x2feb97[_0x376483[_0x26bcbb(0x112)]];_0xde45a[_0x26bcbb(0x201)](_0x37756e);}}}else{if(Input[_0x26bcbb(0x27e)](_0x26bcbb(0x140)))_0x303c9f['x']+=0x1;else{if(Input[_0x26bcbb(0x27e)]('up'))_0x303c9f['y']-=0x1;else{if(Input[_0x26bcbb(0x27e)](_0x26bcbb(0x11c))){if(_0x26bcbb(0x2a4)===_0x26bcbb(0x2a4))_0x303c9f['y']+=0x1;else return!![];}else{if(_0x26bcbb(0x163)!=='WJdlj')return;else{if(_0x2382c4&&_0x2f1d4d[_0x26bcbb(0x281)]())return this[_0x26bcbb(0x2aa)](),![];return _0x190557[_0x26bcbb(0x292)]['Scene_Map_isSceneChangeOk'][_0x26bcbb(0x110)](this);}}}}}const _0x5344e6=Math[_0x26bcbb(0x2fb)](0x0,Math['floor'](this[_0x26bcbb(0x26d)])),_0x548d8f=Math[_0x26bcbb(0x228)](this[_0x26bcbb(0x262)]()-0x1,Math[_0x26bcbb(0x2a6)](this[_0x26bcbb(0x26d)]+this['screenTileX']())),_0x563c07=Math[_0x26bcbb(0x2fb)](0x0,Math[_0x26bcbb(0x2a6)](this[_0x26bcbb(0x189)])),_0x2c0a45=Math[_0x26bcbb(0x228)](this['height']()-0x1,Math[_0x26bcbb(0x2a6)](this[_0x26bcbb(0x189)]+this[_0x26bcbb(0x144)]()-0x1));_0x303c9f['x']=_0x303c9f['x'][_0x26bcbb(0x119)](_0x5344e6,_0x548d8f),_0x303c9f['y']=_0x303c9f['y'][_0x26bcbb(0x119)](_0x563c07,_0x2c0a45);if(_0x303c9f[_0x26bcbb(0x1c8)]!==_0x303c9f['x']||_0x303c9f[_0x26bcbb(0x27c)]!==_0x303c9f['y']){if('ceFbf'!=='mQETT')SoundManager['playCursor'](),_0x303c9f[_0x26bcbb(0x1c8)]=_0x303c9f['x'],_0x303c9f[_0x26bcbb(0x27c)]=_0x303c9f['y'];else return _0x33781e[_0x26bcbb(0x2c9)]()&&this[_0x26bcbb(0x2af)](_0x49ca92);}},Game_Map['prototype'][_0x468fdb(0x13e)]=function(){const _0x104a50=_0x468fdb,_0x1b780c=this[_0x104a50(0x14a)]();if(_0x1b780c['PreventCancelExit'])return;(Input[_0x104a50(0x156)](_0x104a50(0x214))||TouchInput[_0x104a50(0x131)]())&&(SoundManager[_0x104a50(0x244)](),this['endFurnitureSystemMode'](),Input['clear'](),TouchInput['clear']());},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x2f1)]=function(){const _0x1e7101=_0x468fdb,_0x5a5c37=SceneManager[_0x1e7101(0x23a)][_0x1e7101(0x2f3)];if(_0x5a5c37&&_0x5a5c37['isBeingTouched']())return;if(Input[_0x1e7101(0x156)]('ok')||TouchInput['isReleased']()){const _0x5aec0c=Input[_0x1e7101(0x156)]('ok');if(this[_0x1e7101(0x2c9)](_0x5aec0c)){SoundManager[_0x1e7101(0x2cf)](),this['finishFurnitureSystemMode'](_0x5aec0c),Input['clear']();const _0x356d68=TouchInput['x'],_0x3d744b=TouchInput['y'];TouchInput[_0x1e7101(0x265)](),TouchInput['_x']=_0x356d68,TouchInput['_y']=_0x3d744b;}else _0x1e7101(0x223)!=='imdAk'?this['_outlineFilter'][_0x1e7101(0x1ee)]=_0x192ace['OUTLINE_FILTER_ALLOW_COLOR']:SoundManager[_0x1e7101(0x172)]();}},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x126)]=function(_0x153e82){const _0x41f361=_0x468fdb,_0x5d3c6a=this[_0x41f361(0x17b)]();let _0x31d07c=_0x5d3c6a['x'],_0xb8d908=_0x5d3c6a['y'];return _0x153e82?_0x41f361(0x133)!==_0x41f361(0x133)?this[_0x41f361(0x1a8)]=_0x57ded-0x1:(_0x31d07c=_0x5d3c6a['x'],_0xb8d908=_0x5d3c6a['y']):(_0x31d07c=$gameMap[_0x41f361(0x18e)](TouchInput['x'])[_0x41f361(0x119)](0x0,this[_0x41f361(0x262)]()-0x1),_0xb8d908=$gameMap[_0x41f361(0x219)](TouchInput['y'])[_0x41f361(0x119)](0x0,this['height']()-0x1),_0x5d3c6a['x']=_0x5d3c6a[_0x41f361(0x1c8)]=_0x31d07c,_0x5d3c6a['y']=_0x5d3c6a[_0x41f361(0x27c)]=_0xb8d908),{'x':_0x31d07c,'y':_0xb8d908};},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x2c9)]=function(_0x2c1daf){const _0x2a85b8=_0x468fdb,_0x1fef92=this[_0x2a85b8(0x126)](_0x2c1daf),_0x51e5ef=_0x1fef92['x'],_0x14bce2=_0x1fef92['y'];return this['canPlaceFurnitureAtLocation'](_0x51e5ef,_0x14bce2);},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x207)]=function(_0x1db816,_0x2e2b8e){const _0x4b11fa=_0x468fdb;if(!this[_0x4b11fa(0x19e)](_0x1db816,_0x2e2b8e))return![];if(this[_0x4b11fa(0x145)](_0x1db816,_0x2e2b8e))return!![];if(this[_0x4b11fa(0x136)](_0x1db816,_0x2e2b8e))return!![];if(!this['checkPlaceFurnitureAtForbidRegion'](_0x1db816,_0x2e2b8e))return![];if(!this[_0x4b11fa(0x193)](_0x1db816,_0x2e2b8e))return![];if(!this['checkPlaceFurniturePassability'](_0x1db816,_0x2e2b8e))return![];return!![];},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x145)]=function(_0x3069a1,_0x3373c6){const _0x404fc6=_0x468fdb,_0x9678b=this[_0x404fc6(0x14a)](),_0x340a61=this['furnitureEvent']();let _0x2511f7=_0x3069a1-_0x340a61[_0x404fc6(0x1f7)][_0x404fc6(0x2cd)],_0x34b0a2=_0x3069a1+_0x340a61['_addedHitbox']['right'],_0x30a248=_0x3373c6-_0x340a61[_0x404fc6(0x1f7)]['up'],_0x12cb9e=_0x3373c6+_0x340a61[_0x404fc6(0x1f7)]['down'];_0x9678b['AllowRegions']=_0x9678b[_0x404fc6(0x2c7)]||[];if(_0x9678b[_0x404fc6(0x2c7)][_0x404fc6(0x1b8)]<=0x0)return![];for(let _0x3dc167=_0x2511f7;_0x3dc167<=_0x34b0a2;_0x3dc167++){for(let _0x173961=_0x30a248;_0x173961<=_0x12cb9e;_0x173961++){const _0x2e4ae1=this['regionId'](_0x3dc167,_0x173961);if(!_0x9678b[_0x404fc6(0x2c7)][_0x404fc6(0x132)](_0x2e4ae1))return![];}}return!![];},Game_Map[_0x468fdb(0x1ff)]['checkPlaceFurnitureAtForbidRegion']=function(_0x53269a,_0xb80d30){const _0x400413=_0x468fdb,_0x34b985=this[_0x400413(0x14a)]();_0x34b985[_0x400413(0x2c7)]=_0x34b985[_0x400413(0x2c7)]||[],_0x34b985[_0x400413(0x175)]=_0x34b985[_0x400413(0x175)]||[];const _0x5dcb80=this[_0x400413(0x29c)]();let _0x11150a=_0x53269a-_0x5dcb80['_addedHitbox'][_0x400413(0x2cd)],_0x223044=_0x53269a+_0x5dcb80['_addedHitbox'][_0x400413(0x140)],_0x4cedde=_0xb80d30-_0x5dcb80['_addedHitbox']['up'],_0x1cccf1=_0xb80d30+_0x5dcb80['_addedHitbox'][_0x400413(0x11c)];for(let _0x8838f=_0x11150a;_0x8838f<=_0x223044;_0x8838f++){for(let _0x23fbe2=_0x4cedde;_0x23fbe2<=_0x1cccf1;_0x23fbe2++){const _0x1967c2=this[_0x400413(0x19f)](_0x8838f,_0x23fbe2);if(_0x34b985[_0x400413(0x175)]['includes'](_0x1967c2)){if(_0x400413(0x18b)===_0x400413(0x18b))return![];else _0x38014b['y']+=0x1;}if(_0x34b985['AllowRegions'][_0x400413(0x1b8)]>0x0){if(!_0x34b985[_0x400413(0x2c7)][_0x400413(0x132)](_0x1967c2)){if(_0x400413(0x139)!=='rrTnC')_0x27a187[_0x400413(0x15b)]=_0x246d80['$1'][_0x400413(0x29b)](',')[_0x400413(0x238)](_0x3a7bd7=>_0x50a89f(_0x3a7bd7)['clamp'](0x1,0xff));else return![];}}}}return!![];},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x136)]=function(_0x6e3a41,_0x494e12){const _0x45b2fb=_0x468fdb,_0x542775=this[_0x45b2fb(0x14a)](),_0x5bb661=this[_0x45b2fb(0x29c)]();let _0x2bba78=_0x6e3a41-_0x5bb661[_0x45b2fb(0x1f7)][_0x45b2fb(0x2cd)],_0x30ef58=_0x6e3a41+_0x5bb661[_0x45b2fb(0x1f7)][_0x45b2fb(0x140)],_0x16cd73=_0x494e12-_0x5bb661[_0x45b2fb(0x1f7)]['up'],_0x22ee12=_0x494e12+_0x5bb661[_0x45b2fb(0x1f7)]['down'];_0x542775['AllowTerrainTags']=_0x542775[_0x45b2fb(0x15b)]||[];if(_0x542775[_0x45b2fb(0x15b)][_0x45b2fb(0x1b8)]<=0x0)return![];for(let _0x38fc84=_0x2bba78;_0x38fc84<=_0x30ef58;_0x38fc84++){if(_0x45b2fb(0x18f)==='VMzYy'){this[_0x45b2fb(0x1cf)]=_0x58145e[_0x45b2fb(0x1c2)](),this[_0x45b2fb(0x296)](_0x1d1190[_0x45b2fb(0x29c)]());if(!this[_0x45b2fb(0x1cf)])this[_0x45b2fb(0x2b7)]=new _0x4a8520(0x1,0x1);}else for(let _0x200022=_0x16cd73;_0x200022<=_0x22ee12;_0x200022++){const _0x56561c=this['terrainTag'](_0x38fc84,_0x200022);if(!_0x542775['AllowTerrainTags'][_0x45b2fb(0x132)](_0x56561c))return![];}}return!![];},Game_Map['prototype']['checkPlaceFurnitureAtForbidTerrainTag']=function(_0x57b8bb,_0x4e649f){const _0x232aad=_0x468fdb,_0x4e0c89=this[_0x232aad(0x14a)]();_0x4e0c89[_0x232aad(0x15b)]=_0x4e0c89['AllowTerrainTags']||[],_0x4e0c89[_0x232aad(0x1df)]=_0x4e0c89[_0x232aad(0x1df)]||[];const _0x1b61b7=this[_0x232aad(0x29c)]();let _0x63ddbb=_0x57b8bb-_0x1b61b7['_addedHitbox'][_0x232aad(0x2cd)],_0x3d079d=_0x57b8bb+_0x1b61b7[_0x232aad(0x1f7)][_0x232aad(0x140)],_0x4f86d9=_0x4e649f-_0x1b61b7[_0x232aad(0x1f7)]['up'],_0x256d0e=_0x4e649f+_0x1b61b7[_0x232aad(0x1f7)][_0x232aad(0x11c)];for(let _0x2db9b3=_0x63ddbb;_0x2db9b3<=_0x3d079d;_0x2db9b3++){if('aMjIm'===_0x232aad(0x200)){const _0x2892f8=_0x5bcc2b['_scene']['_furnitureCancelButton'];if(_0x2892f8&&_0x2892f8[_0x232aad(0x18a)]())return;if(_0x1b077f[_0x232aad(0x156)]('ok')||_0x27c7f3['isReleased']()){const _0x12653b=_0x44a46a[_0x232aad(0x156)]('ok');if(this[_0x232aad(0x2c9)](_0x12653b)){_0x3e42fa['playPlaceFurnitureSound'](),this[_0x232aad(0x2e0)](_0x12653b),_0x3bd9a1[_0x232aad(0x265)]();const _0x3f6e5d=_0x39c870['x'],_0x3f819b=_0x1e40fe['y'];_0x37bb0f[_0x232aad(0x265)](),_0x56e031['_x']=_0x3f6e5d,_0x27aa86['_y']=_0x3f819b;}else _0xc9f003[_0x232aad(0x172)]();}}else for(let _0x342450=_0x4f86d9;_0x342450<=_0x256d0e;_0x342450++){if(_0x232aad(0x240)==='MSkAJ'){const _0x233152=_0x374683[_0x232aad(0x1d8)];if(_0x233152[_0x232aad(0x10e)](_0x2b5236)){const _0x42df23=_0x212b92(_0x1f9d93['$1']),_0x1e0cb2=_0x232aad(0x1ae)[_0x232aad(0x25d)](_0x42df23),_0x97b0ca=_0x570bac[_0x232aad(0x292)][_0x232aad(0x243)](_0x38520a,_0xa552ee);_0x5aa3c3['FurnitureSystem']['JS'][_0x97b0ca]=new _0xed8d2e(_0x1e0cb2);}}else{const _0x131064=this[_0x232aad(0x196)](_0x2db9b3,_0x342450);if(_0x4e0c89[_0x232aad(0x1df)][_0x232aad(0x132)](_0x131064)){if(_0x232aad(0x14c)!==_0x232aad(0x14c))_0x277eb9=_0x19a644[_0x232aad(0x2fb)](_0x2f447e,_0x5f2de5);else return![];}if(_0x4e0c89[_0x232aad(0x15b)][_0x232aad(0x1b8)]>0x0){if(!_0x4e0c89[_0x232aad(0x15b)]['includes'](_0x131064))return![];}}}}return!![];},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x218)]=function(_0x18445e,_0x3973b4){const _0x250f2f=_0x468fdb,_0x383b01=this[_0x250f2f(0x14a)]();if(_0x383b01[_0x250f2f(0x1a2)]){if(!this[_0x250f2f(0x24d)](_0x18445e,_0x3973b4))return![];}return!![];},Game_Map[_0x468fdb(0x1ff)][_0x468fdb(0x24d)]=function(_0x4b1688,_0x42422f){const _0x44d256=_0x468fdb,_0x785f1d=this[_0x44d256(0x29c)]();let _0xfcf6b7=_0x4b1688-_0x785f1d['_addedHitbox']['left'],_0x3ca865=_0x4b1688+_0x785f1d[_0x44d256(0x1f7)][_0x44d256(0x140)],_0x186738=_0x42422f-_0x785f1d[_0x44d256(0x1f7)]['up'],_0x4d6b2f=_0x42422f+_0x785f1d[_0x44d256(0x1f7)][_0x44d256(0x11c)];for(let _0x3666d8=_0xfcf6b7;_0x3666d8<=_0x3ca865;_0x3666d8++){for(let _0x41e255=_0x186738;_0x41e255<=_0x4d6b2f;_0x41e255++){if(!this[_0x44d256(0x167)](_0x3666d8,_0x41e255))return![];}}return!![];},Game_Map['prototype'][_0x468fdb(0x19e)]=function(_0x2e5da5,_0x5d7a86){const _0x330b56=_0x468fdb,_0x50b40b=this[_0x330b56(0x14a)]();if(_0x50b40b['CheckEventCollision']){if(_0x330b56(0x15f)!==_0x330b56(0x20e)){if(this[_0x330b56(0x309)](_0x2e5da5,_0x5d7a86))return![];const _0x4b673a=this[_0x330b56(0x1c2)](),_0x42176a=VisuMZ[_0x330b56(0x305)][_0x4b673a],_0x75c460={'template':_0x4b673a,'mapId':_0x42176a[_0x330b56(0x103)],'eventId':_0x42176a['EventID'],'x':_0x2e5da5,'y':_0x5d7a86,'spawnPreserved':!![],'spawnEventId':$gameMap['_spawnedEvents'][_0x330b56(0x1b8)]+0x3e8};if(!this['isSpawnHitboxCollisionOk'](_0x75c460,_0x2e5da5,_0x5d7a86))return![];}else{if(this[_0x330b56(0x204)][_0x330b56(0x1af)]!==_0x330b56(0x1e5)){if(_0x4d891b[_0x330b56(0x101)]()&&_0x4405b5&&_0x49e682[_0x330b56(0x281)]())return!![];}return _0x2eed78[_0x330b56(0x292)][_0x330b56(0x26f)][_0x330b56(0x110)](this);}}return!![];},VisuMZ[_0x468fdb(0x292)]['Game_CharacterBase_updateMove']=Game_CharacterBase[_0x468fdb(0x1ff)]['updateMove'],Game_CharacterBase[_0x468fdb(0x1ff)][_0x468fdb(0x225)]=function(){const _0x1ed04d=_0x468fdb;if($gameMap&&$gameMap[_0x1ed04d(0x281)]())return;VisuMZ[_0x1ed04d(0x292)]['Game_CharacterBase_updateMove'][_0x1ed04d(0x110)](this);},VisuMZ['FurnitureSystem'][_0x468fdb(0x171)]=Game_Player[_0x468fdb(0x1ff)][_0x468fdb(0x1f1)],Game_Player[_0x468fdb(0x1ff)][_0x468fdb(0x1f1)]=function(){const _0x11e686=_0x468fdb;if($gameMap&&$gameMap['isFurnitureSystemMode']()){if('EhpVs'!==_0x11e686(0x215)){$gameMap[_0x11e686(0x1a3)]();return;}else return!![];}VisuMZ[_0x11e686(0x292)][_0x11e686(0x171)]['call'](this);},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x301)]=Game_Player[_0x468fdb(0x1ff)][_0x468fdb(0x28c)],Game_Player['prototype']['canStartLocalEvents']=function(){const _0xc617be=_0x468fdb;if($gameMap&&$gameMap['isFurnitureSystemMode']())return![];return VisuMZ[_0xc617be(0x292)][_0xc617be(0x301)][_0xc617be(0x110)](this);},VisuMZ['FurnitureSystem'][_0x468fdb(0x21e)]=Game_Event[_0x468fdb(0x1ff)]['updateSelfMovement'],Game_Event[_0x468fdb(0x1ff)][_0x468fdb(0x30a)]=function(){const _0x2742c3=_0x468fdb;if($gameMap&&$gameMap[_0x2742c3(0x281)]())return;VisuMZ['FurnitureSystem'][_0x2742c3(0x21e)]['call'](this);},Game_Event[_0x468fdb(0x1ff)][_0x468fdb(0x308)]=function(){const _0x3065ee=_0x468fdb;this[_0x3065ee(0x255)]=this[_0x3065ee(0x277)](),this['_furnitureSystemTemplateIndex']=$gameMap[_0x3065ee(0x1a8)],this['_furnitureSystemTemplates']=$gameMap[_0x3065ee(0x105)][_0x3065ee(0x185)](),this[_0x3065ee(0x1a4)]=JsonEx[_0x3065ee(0x2a0)]($gameMap[_0x3065ee(0x1a4)]);},Game_Event['prototype'][_0x468fdb(0x277)]=function(){const _0x575cfa=_0x468fdb,_0x58597c=this[_0x575cfa(0x1c9)]();if(_0x58597c){const _0x21b439=VisuMZ['FurnitureSystem'][_0x575cfa(0x236)],_0x47b014=_0x58597c[_0x575cfa(0x1d8)];if(_0x47b014[_0x575cfa(0x10e)](_0x21b439['FurnitureNotMovable']))return![];}return!![];},Game_Event['prototype'][_0x468fdb(0x2ea)]=function(){return this['_furniture'];},VisuMZ[_0x468fdb(0x292)]['Game_Interpreter_updateWaitMode']=Game_Interpreter[_0x468fdb(0x1ff)]['updateWaitMode'],Game_Interpreter[_0x468fdb(0x1ff)][_0x468fdb(0x2a5)]=function(){const _0x42c76d=_0x468fdb;if(this[_0x42c76d(0x204)][_0x42c76d(0x1af)]!==_0x42c76d(0x1e5)){if(SceneManager[_0x42c76d(0x101)]()&&$gameMap&&$gameMap['isFurnitureSystemMode']()){if(_0x42c76d(0x1b2)===_0x42c76d(0x1b2))return!![];else{_0x35c13a[_0x42c76d(0x2cf)](),this['finishFurnitureSystemMode'](_0x42fa75),_0x10f88c[_0x42c76d(0x265)]();const _0x2716f2=_0x2f96cb['x'],_0x4f2a94=_0x441827['y'];_0x434570[_0x42c76d(0x265)](),_0x4d9129['_x']=_0x2716f2,_0x3a3086['_y']=_0x4f2a94;}}}return VisuMZ[_0x42c76d(0x292)][_0x42c76d(0x26f)][_0x42c76d(0x110)](this);},Scene_Map[_0x468fdb(0x1fb)]=VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x146)][_0x468fdb(0x2f0)][_0x468fdb(0x304)]||0x5a,VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x237)]=Scene_Map[_0x468fdb(0x1ff)]['start'],Scene_Map[_0x468fdb(0x1ff)][_0x468fdb(0x1a1)]=function(){const _0xba2029=_0x468fdb;VisuMZ[_0xba2029(0x292)]['Scene_Map_start'][_0xba2029(0x110)](this),$gameMap&&$gameMap[_0xba2029(0x281)]()&&('RZgCs'===_0xba2029(0x16d)?this[_0xba2029(0x184)](this['fadeSpeed'](),![]):_0x34b763[_0xba2029(0x172)]());},VisuMZ['FurnitureSystem'][_0x468fdb(0x29f)]=Scene_Map[_0x468fdb(0x1ff)]['isSceneChangeOk'],Scene_Map[_0x468fdb(0x1ff)][_0x468fdb(0x1c3)]=function(){const _0x26449a=_0x468fdb;if($gameMap&&$gameMap[_0x26449a(0x281)]())return this['updateOnceParallelInterpreters'](),![];return VisuMZ['FurnitureSystem'][_0x26449a(0x29f)][_0x26449a(0x110)](this);},VisuMZ['FurnitureSystem'][_0x468fdb(0x245)]=Scene_Map[_0x468fdb(0x1ff)]['onMapTouch'],Scene_Map['prototype']['onMapTouch']=function(){const _0x3a0922=_0x468fdb;if($gameMap&&$gameMap[_0x3a0922(0x281)]())return;VisuMZ[_0x3a0922(0x292)][_0x3a0922(0x245)][_0x3a0922(0x110)](this);},VisuMZ['FurnitureSystem']['Scene_Map_isMenuEnabled']=Scene_Map[_0x468fdb(0x1ff)][_0x468fdb(0x16b)],Scene_Map['prototype'][_0x468fdb(0x16b)]=function(){const _0xf9a6ec=_0x468fdb;if($gameMap&&$gameMap[_0xf9a6ec(0x281)]())return![];return VisuMZ['FurnitureSystem']['Scene_Map_isMenuEnabled'][_0xf9a6ec(0x110)](this);},VisuMZ['FurnitureSystem']['Scene_Map_createAllWindows']=Scene_Map[_0x468fdb(0x1ff)][_0x468fdb(0x1a0)],Scene_Map[_0x468fdb(0x1ff)][_0x468fdb(0x1a0)]=function(){const _0x16efd8=_0x468fdb;VisuMZ[_0x16efd8(0x292)]['Scene_Map_createAllWindows']['call'](this),this['createFurnitureSystemDisplayObjects']();},Scene_Map[_0x468fdb(0x1ff)]['createFurnitureSystemDisplayObjects']=function(){const _0x27fe50=_0x468fdb;this[_0x27fe50(0x1ca)](),this['createFurnitureItemWindow'](),this[_0x27fe50(0x10c)]();},Scene_Map[_0x468fdb(0x1ff)]['createFurnitureHelpWindow']=function(){const _0x416df7=_0x468fdb,_0x490b3e=this[_0x416df7(0x2be)]();this[_0x416df7(0x23e)]=new Window_FurnitureHelp(_0x490b3e),this[_0x416df7(0x303)](this['_furnitureHelpWindow']);},Scene_Map[_0x468fdb(0x1ff)][_0x468fdb(0x2be)]=function(){const _0x58368e=_0x468fdb;return VisuMZ[_0x58368e(0x292)]['Settings'][_0x58368e(0x2f0)][_0x58368e(0x19a)][_0x58368e(0x110)](this);let _0x411773=Graphics['width'],_0x128958=this['calcWindowHeight'](0x2,![]),_0x41cd4a=0x0,_0x35358b=Graphics['height']-_0x128958;return new Rectangle(_0x41cd4a,_0x35358b,_0x411773,_0x128958);},Scene_Map[_0x468fdb(0x1ff)][_0x468fdb(0x2b4)]=function(){const _0xe307e0=_0x468fdb,_0xe314fe=this['furnitureItemWindowRect']();this['_furnitureItemWindow']=new Window_FurnitureItem(_0xe314fe),this[_0xe307e0(0x303)](this[_0xe307e0(0x266)]);},Scene_Map[_0x468fdb(0x1ff)][_0x468fdb(0x2c6)]=function(){const _0x15d453=_0x468fdb;return VisuMZ[_0x15d453(0x292)][_0x15d453(0x146)][_0x15d453(0x2f0)][_0x15d453(0x15d)][_0x15d453(0x110)](this);let _0x1f5173=Math[_0x15d453(0x256)](Graphics['width']/0x3),_0x7392d=this[_0x15d453(0x1db)](0x1,![]),_0x48e88f=-$gameSystem[_0x15d453(0x20a)](),_0x449c8a=Math[_0x15d453(0x256)](Graphics[_0x15d453(0x267)]*0x1/0x6);return new Rectangle(_0x48e88f,_0x449c8a,_0x1f5173,_0x7392d);},Scene_Map[_0x468fdb(0x1ff)][_0x468fdb(0x10c)]=function(){const _0x1c7c42=_0x468fdb,_0x49e951=new Sprite_Button('cancel'),_0xb891fe=VisuMZ[_0x1c7c42(0x292)]['Settings']['Window'];_0x49e951['x']=_0xb891fe[_0x1c7c42(0x2d2)]['call'](this,_0x49e951),_0x49e951['y']=_0xb891fe[_0x1c7c42(0x23d)][_0x1c7c42(0x110)](this,_0x49e951),_0x49e951[_0x1c7c42(0x10b)]=![],_0x49e951['setFurnitureButton'](),this[_0x1c7c42(0x303)](_0x49e951),this[_0x1c7c42(0x2f3)]=_0x49e951;},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x26b)]=Scene_Map[_0x468fdb(0x1ff)][_0x468fdb(0x1ac)],Scene_Map[_0x468fdb(0x1ff)][_0x468fdb(0x1ac)]=function(){const _0x13bf8e=_0x468fdb;if($gameMap&&$gameMap[_0x13bf8e(0x281)]())return;if(this[_0x13bf8e(0x1e1)]>=0x1&&this[_0x13bf8e(0x24e)]()){if(TouchInput['isPressed']()&&this[_0x13bf8e(0x1e1)]>=Scene_Map[_0x13bf8e(0x1fb)]){if(_0x13bf8e(0x1f9)===_0x13bf8e(0x2f8)){if(_0x2db58c[_0x13bf8e(0x101)]()&&_0x1232e1&&_0x3dd9f2[_0x13bf8e(0x281)]())return!![];}else TouchInput[_0x13bf8e(0x1d6)]=!![],SoundManager[_0x13bf8e(0x121)](),this[_0x13bf8e(0x248)]();}else{if(TouchInput['isPressed']()){if(_0x13bf8e(0x287)==='Lqxna'){if(_0x1b8029&&_0x5f2b76['isFurnitureSystemMode']())return![];return _0x358357['FurnitureSystem'][_0x13bf8e(0x24f)][_0x13bf8e(0x110)](this);}else this[_0x13bf8e(0x1e1)]++;}else{if(TouchInput['isReleased']()&&this[_0x13bf8e(0x1e1)]<Scene_Map['FURNITURE_TOUCH_HOLD_TIME']){if(_0x13bf8e(0x17f)!==_0x13bf8e(0x17f)){const _0x15efce=this[_0x13bf8e(0x14a)](),_0x676f64=this[_0x13bf8e(0x29c)]();let _0x2665fb=_0x570137-_0x676f64['_addedHitbox'][_0x13bf8e(0x2cd)],_0x21a371=_0x344bdd+_0x676f64[_0x13bf8e(0x1f7)][_0x13bf8e(0x140)],_0x492525=_0x1ff6b3-_0x676f64[_0x13bf8e(0x1f7)]['up'],_0x2ccb26=_0x42a5dc+_0x676f64[_0x13bf8e(0x1f7)][_0x13bf8e(0x11c)];_0x15efce['AllowRegions']=_0x15efce[_0x13bf8e(0x2c7)]||[];if(_0x15efce[_0x13bf8e(0x2c7)][_0x13bf8e(0x1b8)]<=0x0)return![];for(let _0x48cffe=_0x2665fb;_0x48cffe<=_0x21a371;_0x48cffe++){for(let _0x222726=_0x492525;_0x222726<=_0x2ccb26;_0x222726++){const _0xd03b19=this['regionId'](_0x48cffe,_0x222726);if(!_0x15efce['AllowRegions'][_0x13bf8e(0x132)](_0xd03b19))return![];}}return!![];}else this[_0x13bf8e(0x2b0)]();}else{if(_0x13bf8e(0x181)!==_0x13bf8e(0x181)){const _0x1be90b=_0xa357cc(_0x5060c9['$1']),_0x3aff10=_0x13bf8e(0x1ae)[_0x13bf8e(0x25d)](_0x1be90b),_0x34b99b=_0x31418a[_0x13bf8e(0x292)][_0x13bf8e(0x243)](_0x25b0e9,_0x52d5a7);_0x567a2b[_0x13bf8e(0x292)]['JS'][_0x34b99b]=new _0x14a239(_0x3aff10);}else this['_touchCount']=0x0;}}}}else _0x13bf8e(0x135)!==_0x13bf8e(0x135)?this['_colorFilter'][_0x13bf8e(0x216)](_0x398032['COLORFILTER_FORBID_TONE']):(TouchInput['isTriggered']()&&this['_touchCount']===0x0&&this[_0x13bf8e(0x24e)]()&&this[_0x13bf8e(0x1e1)]++,VisuMZ[_0x13bf8e(0x292)]['Scene_Map_processMapTouch']['call'](this));},VisuMZ['FurnitureSystem'][_0x468fdb(0x1d1)]=TouchInput[_0x468fdb(0x2c0)],TouchInput[_0x468fdb(0x2c0)]=function(_0x14ab4c,_0x206bf2){const _0x1a14e9=_0x468fdb;if(TouchInput[_0x1a14e9(0x1d6)]){if(_0x1a14e9(0x2d7)===_0x1a14e9(0x2d7)){TouchInput[_0x1a14e9(0x1d6)]=![];return;}else return _0x454e6f['isFurnitureItem'](_0xbab0dd)?_0x5c210f[_0x1a14e9(0x2c9)]()&&this[_0x1a14e9(0x2af)](_0x2bd5e0):_0x2f2565[_0x1a14e9(0x292)][_0x1a14e9(0x21d)][_0x1a14e9(0x110)](this,_0x522b62);}VisuMZ[_0x1a14e9(0x292)][_0x1a14e9(0x1d1)][_0x1a14e9(0x110)](this,_0x14ab4c,_0x206bf2);},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x2ca)]=function(_0x266019,_0x489146){const _0x3800f8=_0x468fdb;if(_0x266019===undefined)_0x266019=TouchInput['x'];if(_0x489146===undefined)_0x489146=TouchInput['y'];return _0x266019=$gameMap[_0x3800f8(0x18e)](_0x266019),_0x489146=$gameMap[_0x3800f8(0x219)](_0x489146),this[_0x3800f8(0x10a)](_0x266019,_0x489146);},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x10a)]=function(_0x1f3e35,_0x11c998){const _0x4d5a1b=_0x468fdb,_0x401beb=$gameMap['eventsXy'](_0x1f3e35,_0x11c998);for(const _0x3b7978 of _0x401beb){if(!_0x3b7978)continue;if(_0x3b7978[_0x4d5a1b(0x213)])continue;if(_0x3b7978[_0x4d5a1b(0x2ea)]())return _0x3b7978;}return null;},Scene_Map[_0x468fdb(0x1ff)][_0x468fdb(0x24e)]=function(){const _0x5b3263=_0x468fdb;return!!VisuMZ['FurnitureSystem'][_0x5b3263(0x2ca)]();},Scene_Map[_0x468fdb(0x1ff)]['startMoveFurnitureModeByTouch']=function(){const _0x458107=_0x468fdb,_0x1d305b=TouchInput['x'],_0x321c70=TouchInput['y'];TouchInput[_0x458107(0x265)](),Input[_0x458107(0x265)](),TouchInput['_x']=_0x1d305b,TouchInput['_y']=_0x321c70;const _0x20070b=VisuMZ['FurnitureSystem'][_0x458107(0x2ca)](_0x1d305b,_0x321c70);this[_0x458107(0x12c)](_0x20070b);},Scene_Map[_0x468fdb(0x1ff)]['startMoveFurnitureMode']=function(_0x41076a){const _0x27c1e9=_0x468fdb,_0x49a3b1=_0x41076a['x'],_0x490a18=_0x41076a['y'],_0x184089=_0x41076a[_0x27c1e9(0x1a8)],_0x2aa205=_0x41076a[_0x27c1e9(0x105)][_0x27c1e9(0x185)](),_0x2b58e7=JsonEx[_0x27c1e9(0x2a0)](_0x41076a[_0x27c1e9(0x1a4)]);_0x2b58e7[_0x27c1e9(0x117)]=!![],_0x2b58e7['PreventCancelExit']=![];if(_0x2b58e7[_0x27c1e9(0x112)]>0x0){if('MDdNz'===_0x27c1e9(0x114)){const _0x57a198=$dataItems[_0x2b58e7[_0x27c1e9(0x112)]];if(_0x57a198['consumable'])$gameParty[_0x27c1e9(0x1d9)](_0x57a198,0x1);$gameMap[_0x27c1e9(0x28b)](_0x57a198);}else{if(!_0x2e5538[_0x27c1e9(0x101)]())return;if(!_0x2fc00f[_0x27c1e9(0x2c9)]())return;if(_0x2a9940['isFurnitureSystemMode']())return;_0x52ef89['ConvertParams'](_0x218f3b,_0x530ce8);const _0x222ba4=_0xaf6a7d['FurnitureItem'],_0x3903ec=_0x2191f4[_0x222ba4];if(!_0x1e9138[_0x27c1e9(0x115)](_0x3903ec))return;const _0x8e81f6=_0x13054e[_0x27c1e9(0x123)],_0x42ce76=_0x48db2a[_0x27c1e9(0x1c7)],_0x4e6147=_0x25d7f8['PosY'],_0x5a5dd5=_0x400d46[_0x27c1e9(0x212)](_0x3903ec,_0x8e81f6,_0x42ce76,_0x4e6147),_0x280481=_0x4fd6b8[_0x27c1e9(0x30c)]||0x0;_0x280481&&_0x2cba62[_0x27c1e9(0x291)](_0x280481,!!_0x5a5dd5);}}$gameMap[_0x27c1e9(0x15e)](_0x41076a[_0x27c1e9(0x102)]()),$gameTemp['_furnitureSystemTemplateIndex']=_0x184089,$gameMap['startFurnitureSystemMode'](_0x2aa205,_0x2b58e7),$gameMap[_0x27c1e9(0x1a8)]=_0x184089,$gameTemp['_furnitureSystemTemplateIndex']=undefined;const _0x3fc63c=$gameMap[_0x27c1e9(0x2c2)];_0x3fc63c['x']=_0x3fc63c[_0x27c1e9(0x1c8)]=_0x49a3b1,_0x3fc63c['y']=_0x3fc63c[_0x27c1e9(0x27c)]=_0x490a18,_0x3fc63c[_0x27c1e9(0x224)]=TouchInput['x'],_0x3fc63c[_0x27c1e9(0x1aa)]=TouchInput['y'],VisuMZ['FurnitureSystem'][_0x27c1e9(0x1eb)]();},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x11f)]=Scene_Item[_0x468fdb(0x1ff)][_0x468fdb(0x279)],Scene_Item[_0x468fdb(0x1ff)][_0x468fdb(0x279)]=function(){const _0x2f4f1f=_0x468fdb;if(this[_0x2f4f1f(0x2a7)]())this[_0x2f4f1f(0x1b5)]();else{if(_0x2f4f1f(0x231)!==_0x2f4f1f(0x231)){if(!_0x8da1b2)return![];if(!_0x5a4833[_0x2f4f1f(0x2a2)](_0xdc6e10))return![];const _0x48494e=_0x23d085['FurnitureSystem'][_0x2f4f1f(0x236)],_0x243050=_0x2ccd65[_0x2f4f1f(0x1d8)];if(_0x243050[_0x2f4f1f(0x10e)](_0x48494e[_0x2f4f1f(0x142)]))return!![];return![];}else VisuMZ[_0x2f4f1f(0x292)][_0x2f4f1f(0x11f)][_0x2f4f1f(0x110)](this);}},Scene_Item[_0x468fdb(0x1ff)]['checkFurniturePlacement']=function(){const _0x191cf8=_0x468fdb;return DataManager[_0x191cf8(0x115)](this[_0x191cf8(0x1fe)]())&&SceneManager['canPlaceFurniture']();},Scene_Item[_0x468fdb(0x1ff)][_0x468fdb(0x1b5)]=function(){const _0x222fb5=_0x468fdb;$gameMap[_0x222fb5(0x20b)](this[_0x222fb5(0x1fe)]()),this['startFadeOut'](this['fadeSpeed'](),![]),SceneManager[_0x222fb5(0x1e3)](Scene_Map);},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x25a)]=Scene_ItemBase[_0x468fdb(0x1ff)][_0x468fdb(0x12a)],Scene_ItemBase[_0x468fdb(0x1ff)]['activateItemWindow']=function(){const _0x585ef9=_0x468fdb;if($gameMap&&$gameMap['isFurnitureSystemMode']())return;VisuMZ['FurnitureSystem'][_0x585ef9(0x25a)][_0x585ef9(0x110)](this);},VisuMZ[_0x468fdb(0x292)]['Sprite_Button_initialize']=Sprite_Button[_0x468fdb(0x1ff)][_0x468fdb(0x210)],Sprite_Button[_0x468fdb(0x1ff)][_0x468fdb(0x210)]=function(_0x3e7212){const _0x11d5c0=_0x468fdb;VisuMZ[_0x11d5c0(0x292)]['Sprite_Button_initialize'][_0x11d5c0(0x110)](this,_0x3e7212),this[_0x11d5c0(0x1bb)]=![];},Sprite_Button[_0x468fdb(0x1ff)][_0x468fdb(0x2de)]=function(){const _0x14f676=_0x468fdb;this[_0x14f676(0x1bb)]=!![];},Sprite_Button['prototype'][_0x468fdb(0x2ec)]=function(){const _0x5b5451=_0x468fdb;return this[_0x5b5451(0x1bb)];},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x275)]=Sprite_Button[_0x468fdb(0x1ff)][_0x468fdb(0x19b)],Sprite_Button[_0x468fdb(0x1ff)][_0x468fdb(0x19b)]=function(){const _0x98fb86=_0x468fdb;VisuMZ[_0x98fb86(0x292)][_0x98fb86(0x275)][_0x98fb86(0x110)](this),this['updateFurnitureVisibility']();},Sprite_Button[_0x468fdb(0x1ff)][_0x468fdb(0x293)]=function(){const _0x414f21=_0x468fdb;if(!this[_0x414f21(0x2ec)]())return;$gameMap&&$gameMap[_0x414f21(0x281)]()?this['_buttonType']===_0x414f21(0x214)&&$gameMap[_0x414f21(0x14a)]()[_0x414f21(0x11e)]?this[_0x414f21(0x10b)]=![]:this[_0x414f21(0x10b)]=!![]:this[_0x414f21(0x10b)]=![];},VisuMZ['FurnitureSystem'][_0x468fdb(0x24f)]=Sprite_Character['prototype'][_0x468fdb(0x307)],Sprite_Character[_0x468fdb(0x1ff)][_0x468fdb(0x307)]=function(){const _0x3be5b2=_0x468fdb;if($gameMap&&$gameMap[_0x3be5b2(0x281)]())return![];return VisuMZ[_0x3be5b2(0x292)]['Sprite_Character_isAllowCharacterTilt'][_0x3be5b2(0x110)](this);};function Sprite_FurnitureCursor(){const _0x3a5119=_0x468fdb;this[_0x3a5119(0x210)](...arguments);}Sprite_FurnitureCursor[_0x468fdb(0x1ff)]=Object[_0x468fdb(0x16a)](Sprite_Character['prototype']),Sprite_FurnitureCursor[_0x468fdb(0x1ff)]['constructor']=Sprite_FurnitureCursor,Sprite_FurnitureCursor['OUTLINE_FILTER_THICKNESS']=VisuMZ[_0x468fdb(0x292)]['Settings']['Filter'][_0x468fdb(0x280)],Sprite_FurnitureCursor[_0x468fdb(0x21b)]=VisuMZ[_0x468fdb(0x292)]['Settings'][_0x468fdb(0x104)][_0x468fdb(0x22f)],Sprite_FurnitureCursor[_0x468fdb(0x295)]=VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x146)][_0x468fdb(0x104)][_0x468fdb(0x23b)],Sprite_FurnitureCursor[_0x468fdb(0x177)]=VisuMZ['FurnitureSystem'][_0x468fdb(0x146)][_0x468fdb(0x104)]['OutlineForbidColor'],Sprite_FurnitureCursor[_0x468fdb(0x2d6)]=VisuMZ['FurnitureSystem'][_0x468fdb(0x146)][_0x468fdb(0x104)]['AllowTone'][_0x468fdb(0x185)](),Sprite_FurnitureCursor[_0x468fdb(0x27b)]=VisuMZ[_0x468fdb(0x292)]['Settings'][_0x468fdb(0x104)]['ForbidTone'][_0x468fdb(0x185)](),Sprite_FurnitureCursor[_0x468fdb(0x1ff)][_0x468fdb(0x210)]=function(){const _0x2cbffc=_0x468fdb;this[_0x2cbffc(0x1cf)]='',this[_0x2cbffc(0x2bc)]=![],Sprite_Character['prototype'][_0x2cbffc(0x210)]['call'](this,null),this[_0x2cbffc(0x285)]();},Sprite_FurnitureCursor[_0x468fdb(0x1ff)]['checkTemplateChange']=function(){const _0x4e07b7=_0x468fdb;if(this[_0x4e07b7(0x1cf)]!==$gameMap[_0x4e07b7(0x1c2)]()){this[_0x4e07b7(0x1cf)]=$gameMap['furnitureEventTemplateName'](),this['setCharacter']($gameMap[_0x4e07b7(0x29c)]());if(!this[_0x4e07b7(0x1cf)])this[_0x4e07b7(0x2b7)]=new Bitmap(0x1,0x1);}},Sprite_FurnitureCursor['prototype'][_0x468fdb(0x203)]=function(){const _0x572834=_0x468fdb;return this[_0x572834(0x2fd)]!==null&&$gameMap&&$gameMap[_0x572834(0x281)]();},Sprite_FurnitureCursor[_0x468fdb(0x1ff)]['update']=function(){const _0x468251=_0x468fdb;this[_0x468251(0x1a7)]();if(this['allowUpdate']())Sprite_Character[_0x468251(0x1ff)][_0x468251(0x19b)][_0x468251(0x110)](this),this[_0x468251(0x17e)]();else{if('KyvQC'!==_0x468251(0x10f))Sprite[_0x468251(0x1ff)][_0x468251(0x19b)][_0x468251(0x110)](this);else{if(_0x5b2631[_0x468251(0x1d6)]){_0x3fcf88[_0x468251(0x1d6)]=![];return;}_0x40b750[_0x468251(0x292)][_0x468251(0x1d1)][_0x468251(0x110)](this,_0x1ed5f2,_0x4fe3a6);}}this[_0x468251(0x293)]();},Sprite_FurnitureCursor[_0x468fdb(0x1ff)][_0x468fdb(0x293)]=function(){const _0x442610=_0x468fdb;this[_0x442610(0x10b)]=this[_0x442610(0x203)]();},Sprite_FurnitureCursor[_0x468fdb(0x1ff)][_0x468fdb(0x250)]=function(){const _0x371604=_0x468fdb;this['updateMouseMode'](),this['z']=0xa;if(this[_0x371604(0x2bc)])_0x371604(0x11b)==='bDzIZ'?_0x16524c[_0x371604(0x291)](_0x2bc41e,!!_0x3ed8c7):(this['x']=$gameMap[_0x371604(0x18e)](TouchInput['x'])[_0x371604(0x119)](0x0,$gameMap['width']()-0x1),this['y']=$gameMap[_0x371604(0x219)](TouchInput['y'])[_0x371604(0x119)](0x0,$gameMap[_0x371604(0x267)]()-0x1));else{if('rvpcl'===_0x371604(0x20f))this['x']=$gameMap[_0x371604(0x17b)]()['x'],this['y']=$gameMap[_0x371604(0x17b)]()['y'];else return this[_0x371604(0x23a)]&&this[_0x371604(0x23a)][_0x371604(0x204)]===_0x18c565;}this['x']=this[_0x371604(0x147)](this['x']),this['y']=this[_0x371604(0x2ee)](this['y']);},Sprite_FurnitureCursor[_0x468fdb(0x1ff)]['converScreenPositionX']=function(_0x42e9ff){const _0x3adc59=_0x468fdb,_0x5ab3af=$gameMap[_0x3adc59(0x158)](),_0x249efc=$gameMap[_0x3adc59(0x2fc)](_0x42e9ff);return Math[_0x3adc59(0x2a6)](_0x249efc*_0x5ab3af+_0x5ab3af/0x2);},Sprite_FurnitureCursor[_0x468fdb(0x1ff)][_0x468fdb(0x2ee)]=function(_0x4b3c97){const _0x24efba=_0x468fdb,_0x157d48=$gameMap[_0x24efba(0x251)](),_0x19a03b=$gameMap['adjustY'](_0x4b3c97);return Math[_0x24efba(0x2a6)](_0x19a03b*_0x157d48+_0x157d48);},Sprite_FurnitureCursor[_0x468fdb(0x1ff)][_0x468fdb(0x2b3)]=function(){const _0x3a50aa=_0x468fdb,_0x230097=$gameMap[_0x3a50aa(0x17b)]();this[_0x3a50aa(0x2bc)]=_0x230097[_0x3a50aa(0x224)]!==TouchInput['x']||_0x230097['lastCursorY']!==TouchInput['y'];},Sprite_FurnitureCursor[_0x468fdb(0x1ff)][_0x468fdb(0x285)]=function(){const _0x2ba208=_0x468fdb;this[_0x2ba208(0x141)]=this[_0x2ba208(0x141)]||[],this[_0x2ba208(0x127)](),this[_0x2ba208(0x1f5)]();},Sprite_FurnitureCursor[_0x468fdb(0x1ff)][_0x468fdb(0x127)]=function(){const _0x56a7c2=_0x468fdb;if(!PIXI[_0x56a7c2(0x141)][_0x56a7c2(0x19c)])return;!this[_0x56a7c2(0x2da)]&&(this['_outlineFilter']=new PIXI['filters'][(_0x56a7c2(0x19c))](),this['filters'][_0x56a7c2(0x2e8)](this[_0x56a7c2(0x2da)])),this['_outlineFilter']['thickness']=Sprite_FurnitureCursor[_0x56a7c2(0x29a)],this['_outlineFilter'][_0x56a7c2(0x109)]=Sprite_FurnitureCursor['OUTLINE_FILTER_QUALITY'];},Sprite_FurnitureCursor['prototype'][_0x468fdb(0x1f5)]=function(){const _0x1852d5=_0x468fdb;this[_0x1852d5(0x161)]=new ColorFilter(),this[_0x1852d5(0x141)][_0x1852d5(0x2e8)](this[_0x1852d5(0x161)]);},Sprite_FurnitureCursor[_0x468fdb(0x1ff)][_0x468fdb(0x17e)]=function(){const _0x39c442=_0x468fdb;this[_0x39c442(0x151)](),this[_0x39c442(0x2e3)]();},Sprite_FurnitureCursor['prototype'][_0x468fdb(0x151)]=function(){const _0x1187d0=_0x468fdb;if(!this['_outlineFilter'])return;const _0x57cfce=$gameMap[_0x1187d0(0x2c9)](!this[_0x1187d0(0x2bc)]);_0x57cfce?this[_0x1187d0(0x2da)][_0x1187d0(0x1ee)]=Sprite_FurnitureCursor[_0x1187d0(0x295)]:this['_outlineFilter'][_0x1187d0(0x1ee)]=Sprite_FurnitureCursor['OUTLINE_FILTER_FORBID_COLOR'];},Sprite_FurnitureCursor[_0x468fdb(0x1ff)][_0x468fdb(0x2e3)]=function(){const _0x317e25=_0x468fdb,_0x2ea93b=$gameMap[_0x317e25(0x2c9)](!this[_0x317e25(0x2bc)]);_0x2ea93b?_0x317e25(0x25b)!==_0x317e25(0x25b)?(this[_0x317e25(0x28a)]=_0x31e2f0,this[_0x317e25(0x125)]=_0x33c89d,this[_0x317e25(0x22a)]=_0x5618b4,this[_0x317e25(0x249)]=_0x21303b,this[_0x317e25(0x2bc)]=![],this[_0x317e25(0x2c8)](),this[_0x317e25(0x19b)](),this['updatePosition']()):this[_0x317e25(0x161)][_0x317e25(0x216)](Sprite_FurnitureCursor[_0x317e25(0x2d6)]):this[_0x317e25(0x161)][_0x317e25(0x216)](Sprite_FurnitureCursor[_0x317e25(0x27b)]);},Sprite_FurnitureCursor[_0x468fdb(0x1ff)][_0x468fdb(0x300)]=function(){const _0x5593bb=_0x468fdb;this[_0x5593bb(0x28a)]=undefined,this['_tileId']=undefined,this[_0x5593bb(0x22a)]=undefined,this[_0x5593bb(0x249)]=undefined,this['_mouseMode']=![],this[_0x5593bb(0x2c8)](),this[_0x5593bb(0x19b)](),this[_0x5593bb(0x250)]();},Sprite_FurnitureCursor[_0x468fdb(0x1ff)][_0x468fdb(0x1bf)]=function(){const _0x50f35c=_0x468fdb;this['scale']['x']=this[_0x50f35c(0x2fd)]['_scaleX']??0x1,this['scale']['y']=this[_0x50f35c(0x2fd)][_0x50f35c(0x166)]??0x1;},VisuMZ[_0x468fdb(0x292)]['Spriteset_Map_createLowerLayer']=Spriteset_Map[_0x468fdb(0x1ff)][_0x468fdb(0x107)],Spriteset_Map[_0x468fdb(0x1ff)]['createLowerLayer']=function(){const _0x8a7d5a=_0x468fdb;VisuMZ[_0x8a7d5a(0x292)]['Spriteset_Map_createLowerLayer'][_0x8a7d5a(0x110)](this),this[_0x8a7d5a(0x2a1)]();},Spriteset_Map[_0x468fdb(0x1ff)]['createFurnitureSystemEventSprite']=function(){const _0x2ce1be=_0x468fdb;this[_0x2ce1be(0x138)]=new Sprite_FurnitureCursor(),this[_0x2ce1be(0x138)][_0x2ce1be(0x10b)]=![],this[_0x2ce1be(0x152)][_0x2ce1be(0x303)](this['_furnitureEventSprite']);},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x268)]=Spriteset_Map[_0x468fdb(0x1ff)][_0x468fdb(0x233)],Spriteset_Map['prototype'][_0x468fdb(0x233)]=function(_0x322f48){const _0x40cc35=_0x468fdb;if($gameTemp['_furnitureModeRegisterEvent'])return;VisuMZ['FurnitureSystem']['Spriteset_Map_createSpawnedEvent'][_0x40cc35(0x110)](this,_0x322f48);},VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x21d)]=Window_ItemList[_0x468fdb(0x1ff)][_0x468fdb(0x174)],Window_ItemList['prototype'][_0x468fdb(0x174)]=function(_0x2301e3){const _0x50de92=_0x468fdb;if(DataManager['isFurnitureItem'](_0x2301e3))return SceneManager['canPlaceFurniture']()&&this[_0x50de92(0x2af)](_0x2301e3);else{if('DOPvO'!==_0x50de92(0x1cd))_0x202b7c[_0x50de92(0x1df)]=_0x3e33ae['$1']['split'](',')[_0x50de92(0x238)](_0x47d79e=>_0x337ca6(_0x47d79e)[_0x50de92(0x119)](0x1,0xff));else return VisuMZ[_0x50de92(0x292)]['Window_ItemList_isEnabled'][_0x50de92(0x110)](this,_0x2301e3);}},Window_ItemList['prototype']['isFurnitureMapCompatible']=function(_0x13c115){const _0x121374=_0x468fdb,_0x5ce21c=DataManager[_0x121374(0x197)](_0x13c115),_0x22f940=DataManager['getMapFurnitureTypes']();return _0x5ce21c[_0x121374(0x12f)](_0xccb565=>_0x22f940[_0x121374(0x132)](_0xccb565));},VisuMZ['FurnitureSystem']['Window_ItemList_makeItemList']=Window_ItemList[_0x468fdb(0x1ff)][_0x468fdb(0x13b)],Window_ItemList[_0x468fdb(0x1ff)]['makeItemList']=function(){const _0x1a4597=_0x468fdb;VisuMZ[_0x1a4597(0x292)]['Window_ItemList_makeItemList'][_0x1a4597(0x110)](this),SceneManager[_0x1a4597(0x2b5)]()&&this[_0x1a4597(0x2e6)]();},Window_ItemList[_0x468fdb(0x1ff)][_0x468fdb(0x2e6)]=function(){const _0x1edaf0=_0x468fdb,_0x35f360=VisuMZ[_0x1edaf0(0x292)][_0x1edaf0(0x146)][_0x1edaf0(0x14d)],_0x324c16=_0x35f360['prioritizePlaceable']??!![];if(!_0x324c16)return;this[_0x1edaf0(0x10d)]=this[_0x1edaf0(0x10d)][_0x1edaf0(0x2fa)]((_0x2419e1,_0x38be43)=>{const _0x2535a7=_0x1edaf0;if(DataManager[_0x2535a7(0x115)](_0x2419e1)&&DataManager[_0x2535a7(0x115)](_0x38be43)){if(_0x2535a7(0x111)!==_0x2535a7(0x269)){if(this[_0x2535a7(0x174)](_0x2419e1)&&!this['isEnabled'](_0x38be43))return-0x1;if(this[_0x2535a7(0x174)](_0x38be43)&&!this['isEnabled'](_0x2419e1))return 0x1;}else _0x1bde33[_0x2535a7(0x1ff)][_0x2535a7(0x19b)][_0x2535a7(0x110)](this),this[_0x2535a7(0x1fc)](),this[_0x2535a7(0x2b1)](),this[_0x2535a7(0x289)]();}return 0x0;});};function Window_FurnitureHelp(){this['initialize'](...arguments);}function _0x162b(_0x54d4a2,_0xd03f43){const _0x5e7294=_0x5e72();return _0x162b=function(_0x162b42,_0x58866d){_0x162b42=_0x162b42-0x101;let _0x36f932=_0x5e7294[_0x162b42];return _0x36f932;},_0x162b(_0x54d4a2,_0xd03f43);}Window_FurnitureHelp[_0x468fdb(0x1ff)]=Object[_0x468fdb(0x16a)](Window_Base[_0x468fdb(0x1ff)]),Window_FurnitureHelp['prototype'][_0x468fdb(0x204)]=Window_FurnitureHelp,Window_FurnitureHelp[_0x468fdb(0x22d)]=VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x146)][_0x468fdb(0x2f0)][_0x468fdb(0x27f)],Window_FurnitureHelp[_0x468fdb(0x1e6)]=VisuMZ['FurnitureSystem'][_0x468fdb(0x146)]['Window']['HelpWindow_FadeTarget'],Window_FurnitureHelp[_0x468fdb(0x15c)]=VisuMZ[_0x468fdb(0x292)]['Settings'][_0x468fdb(0x2f0)][_0x468fdb(0x1ef)],Window_FurnitureHelp['OFFSET_COLUMN_2_X']=VisuMZ[_0x468fdb(0x292)]['Settings'][_0x468fdb(0x2f0)][_0x468fdb(0x2dd)],Window_FurnitureHelp['prototype'][_0x468fdb(0x210)]=function(_0x1adfef){const _0xee15f9=_0x468fdb;this['fullRect']=_0x1adfef,this[_0xee15f9(0x10d)]={},Window_Base[_0xee15f9(0x1ff)][_0xee15f9(0x210)][_0xee15f9(0x110)](this,_0x1adfef),this['setBackgroundType'](Window_FurnitureHelp['BG_TYPE']),this[_0xee15f9(0x211)](),this['hide']();},Window_FurnitureHelp['prototype'][_0x468fdb(0x211)]=function(){const _0x229bda=_0x468fdb;this['contents']['clear'](),this['resetFontSettings']();return VisuMZ['FurnitureSystem'][_0x229bda(0x146)][_0x229bda(0x2f0)]['HelpWindow_DrawJS'][_0x229bda(0x110)](this);let _0x37b225=Math[_0x229bda(0x256)](this[_0x229bda(0x165)]['width']*0x1/0x4);_0x37b225+=Window_FurnitureHelp[_0x229bda(0x15c)];let _0x18e196=Math[_0x229bda(0x256)](this['contents'][_0x229bda(0x262)]*0x3/0x4);_0x18e196+=Window_FurnitureHelp['OFFSET_COLUMN_2_X'];const _0x2dd2dd=this[_0x229bda(0x24b)]('\x20');{this[_0x229bda(0x182)](!![]);const _0x559435=TextManager[_0x229bda(0x292)][_0x229bda(0x230)],_0x11de0b=TextManager[_0x229bda(0x292)]['PositionText'],_0x33e15d=this[_0x229bda(0x2ff)](_0x559435)[_0x229bda(0x262)],_0x35e629=this[_0x229bda(0x2ff)](_0x11de0b)[_0x229bda(0x262)],_0x17a3b0=0x0;this['drawTextEx'](_0x559435,_0x37b225-_0x33e15d-_0x2dd2dd,_0x17a3b0,_0x33e15d),this[_0x229bda(0x149)](_0x11de0b,_0x37b225+_0x2dd2dd,_0x17a3b0,_0x35e629);}{if(_0x229bda(0x18c)===_0x229bda(0x1c4))return _0x456c0f[_0x229bda(0x105)]&&_0x186d7b[_0x229bda(0x105)][_0x229bda(0x1b8)]>0x1;else{this['changePaintOpacity'](this['isHasMultipleVariants']());const _0x3c2bcb=TextManager[_0x229bda(0x292)]['VariantButtons'],_0x431128=TextManager[_0x229bda(0x292)][_0x229bda(0x12d)],_0x3ad447=this[_0x229bda(0x2ff)](_0x3c2bcb)[_0x229bda(0x262)],_0x3fd47d=this['textSizeEx'](_0x431128)['width'],_0x504238=this['lineHeight']();this['drawTextEx'](_0x3c2bcb,_0x37b225-_0x3ad447-_0x2dd2dd,_0x504238,_0x3ad447),this['drawTextEx'](_0x431128,_0x37b225+_0x2dd2dd,_0x504238,_0x3fd47d);}}{this[_0x229bda(0x182)](!![]);const _0x527061=TextManager[_0x229bda(0x292)]['ConfirmButtons'],_0x36c097=TextManager[_0x229bda(0x292)]['ConfirmText'],_0x1904c6=this[_0x229bda(0x2ff)](_0x527061)[_0x229bda(0x262)],_0x47bd6f=this[_0x229bda(0x2ff)](_0x36c097)[_0x229bda(0x262)],_0xa32025=0x0;this['drawTextEx'](_0x527061,_0x18e196-_0x1904c6-_0x2dd2dd,_0xa32025,_0x1904c6),this[_0x229bda(0x149)](_0x36c097,_0x18e196+_0x2dd2dd,_0xa32025,_0x47bd6f);}{this['changePaintOpacity'](this[_0x229bda(0x108)]());const _0x5956ed=TextManager['FurnitureSystem']['CancelButtons'],_0x3ada50=TextManager[_0x229bda(0x292)][_0x229bda(0x278)],_0x5889e0=this[_0x229bda(0x2ff)](_0x5956ed)[_0x229bda(0x262)],_0x407281=this['textSizeEx'](_0x3ada50)[_0x229bda(0x262)],_0x1ba188=this['lineHeight']();this[_0x229bda(0x149)](_0x5956ed,_0x18e196-_0x5889e0-_0x2dd2dd,_0x1ba188,_0x5889e0),this[_0x229bda(0x149)](_0x3ada50,_0x18e196+_0x2dd2dd,_0x1ba188,_0x407281);}},Window_FurnitureHelp[_0x468fdb(0x1ff)][_0x468fdb(0x29d)]=function(){const _0x63549b=_0x468fdb;return $gameMap[_0x63549b(0x105)]&&$gameMap[_0x63549b(0x105)][_0x63549b(0x1b8)]>0x1;},Window_FurnitureHelp[_0x468fdb(0x1ff)][_0x468fdb(0x108)]=function(){const _0x52d657=_0x468fdb,_0x3bc460=$gameMap['furnitureSettings']();return!_0x3bc460[_0x52d657(0x11e)];},Window_FurnitureHelp[_0x468fdb(0x1ff)][_0x468fdb(0x19b)]=function(){const _0x3aea79=_0x468fdb;Window_Base['prototype'][_0x3aea79(0x19b)][_0x3aea79(0x110)](this),this[_0x3aea79(0x2b1)](),this[_0x3aea79(0x289)](),this[_0x3aea79(0x1fd)]();},Window_FurnitureHelp[_0x468fdb(0x1ff)]['updateVisibility']=function(){const _0x5b7af4=_0x468fdb;this['visible']=$gameMap[_0x5b7af4(0x281)]();},Window_FurnitureHelp[_0x468fdb(0x1ff)][_0x468fdb(0x289)]=function(){const _0x394c91=_0x468fdb,_0x4b0892=SceneManager[_0x394c91(0x23a)][_0x394c91(0x209)][_0x394c91(0x138)];if(!_0x4b0892)return;const _0x21e14d=SceneManager[_0x394c91(0x23a)][_0x394c91(0x209)][_0x394c91(0x152)],_0x11f65f=_0x21e14d['x'],_0x54ce60=_0x21e14d['y'],_0x414982=new Point(_0x4b0892['x']-_0x11f65f,_0x4b0892['y']-_0x54ce60),_0x4c1923=_0x414982['x']-_0x4b0892[_0x394c91(0x262)]/0x2>=this[_0x394c91(0x14e)]['x']&&_0x414982['x']+_0x4b0892['width']/0x2<=this['fullRect']['x']+this[_0x394c91(0x14e)]['width']&&_0x414982['y']>=this['fullRect']['y']&&_0x414982['y']-_0x4b0892[_0x394c91(0x267)]<=this[_0x394c91(0x14e)]['y']+this[_0x394c91(0x14e)]['height'],_0x729372=Window_FurnitureHelp[_0x394c91(0x22d)],_0x451274=_0x4c1923?Window_FurnitureHelp[_0x394c91(0x1e6)]:0xff;this[_0x394c91(0x20c)]=_0x451274;if(_0x729372===0x0)this['opacity']=_0x451274;if(_0x729372===0x1)this['_dimmerSprite'][_0x394c91(0x284)]=_0x451274;},Window_FurnitureHelp[_0x468fdb(0x1ff)][_0x468fdb(0x1fd)]=function(){const _0xd13bea=_0x468fdb,_0x3859d=SceneManager[_0xd13bea(0x23a)];for(let _0x45a26a=0x1;_0x45a26a<=0x5;_0x45a26a++){if(this[_0xd13bea(0x10d)]['key%1'['format'](_0x45a26a)]!==_0x3859d[_0xd13bea(0x2f5)[_0xd13bea(0x25d)](_0x45a26a)]()){if(_0xd13bea(0x2db)!==_0xd13bea(0x2ef))return this[_0xd13bea(0x211)]();else _0xbc0e1e[_0xd13bea(0x1d9)](_0x4be4f9,0x1);}if(this['_data'][_0xd13bea(0x1b3)['format'](_0x45a26a)]!==_0x3859d[_0xd13bea(0x25f)[_0xd13bea(0x25d)](_0x45a26a)]())return this['refresh']();}};function Window_FurnitureItem(){this['initialize'](...arguments);}function _0x5e72(){const _0x19f9d9=['extractFurnitureTemplates','RKaLi','166392RfvKdH','updateOpacity','_tilesetId','onRemoveFurnitureJS','canStartLocalEvents','kmpKE','updateFurnitureModeInputDirection','AGNNs','onPlaceFurniture','setValue','FurnitureSystem','updateFurnitureVisibility','ARRAYFUNC','OUTLINE_FILTER_ALLOW_COLOR','setCharacter','IgwHk','ptwFP','trim','OUTLINE_FILTER_THICKNESS','split','furnitureEvent','isHasMultipleVariants','fTirz','Scene_Map_isSceneChangeOk','makeDeepCopy','createFurnitureSystemEventSprite','isItem','FurnitureAllowRegions','jghxc','updateWaitMode','floor','checkFurniturePlacement','ThisEventMoveFurniture','MObFP','updateOnceParallelInterpreters','_cache_getMapFurnitureTypes','fillRect','FurnitureOnPlaceEndOnce','TargetEventMoveFurniture','isFurnitureMapCompatible','onMapTouch','updateVisibility','_furnitureModeAntiSoftlockAlert','updateMouseMode','createFurnitureItemWindow','isSceneItem','RTDRa','bitmap','onPlaceFurnitureJS','EndOnPlace','FurnitureForbidTerrainTags','VisuMZ_1_EventsMoveCore','_mouseMode','_item','furnitureHelpWindowRect','CreateSpawnData','_onRelease','Armor-%1-%2','_furnitureSystemEventPosition','DEFAULT_ALLOW_FURNITURE','updateFurnitureItemWindowCount','Move','furnitureItemWindowRect','AllowRegions','updateBitmap','canPlaceFurniture','GetFurnitureAtTouchedXy','State-%1-%2','setupFurnitureCursor','left','lineHeight','playPlaceFurnitureSound','JSON','STR','CancelButtonXPositionJS','devPlaceFurnitureAtTerrainTag','hrzZV','kulrO','COLORFILTER_ALLOW_TONE','hKvia','PosY','FurnitureNeedPassability','_outlineFilter','KxrSl','FurnitureType','HelpWindow_Col2_OffsetX','setFurnitureButton','dimColor1','finishFurnitureSystemMode','4139127upcUNq','mapId','updateColorFilter','ThisEventDespawnFurniture','drawItemName','sortFurnitureItems','MapsAllowFurniture','push','onPlaceFurnitureRunCommonEvent','isSpawnedFurniture','zUFCO','isFurnitureButton','setupReservedCommonEvent','converScreenPositionY','MRVoj','Window','updateFurnitureModeInputConfirm','playCursor','_furnitureCancelButton','reserveCommonEvent','buttonAssistKey%1','ParseItemNotetags','FurniturePreventCancelExit','zTfAZ','spawnFurnitureEventAtXy','sort','max','adjustX','_character','FurnitureSpawnAtRegion','textSizeEx','resetForNewFurnitureMode','Game_Player_canStartLocalEvents','any','addChild','HoldTime','EventTemplates','116442XCVVCt','isAllowCharacterTilt','registerFurnitureData','checkExistingEntitiesAt','updateSelfMovement','isAllowFurniture','SuccessSwitchId','isSceneMap','eventId','MapID','Filter','_furnitureSystemTemplates','%1Pitch','createLowerLayer','isCancelExitPrevented','quality','GetFurnitureAtXy','visible','createFurnitureCancelButton','_data','match','fOgZG','call','NAifo','OnPlaceConsumeItem','Place','MDdNz','isFurnitureItem','innerHeight','OnPlaceEndMode','_interpreter','clamp','tKRdn','RXeLs','down','Item-%1-%2','PreventCancelExit','Scene_Item_useItem','DisallowFurniture','playMoveFurnitureSound','nzWZW','TemplateIndex','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_tileId','getTargetFurnitureLocation','createOutlineFilter','extractFurnitureSettings','DEFAULT_FURNITURE_CHECK_PASSABILITY','activateItemWindow','QupvA','startMoveFurnitureMode','VariantText','_itemID','some','8VNyZhz','isCancelled','includes','ovpcr','OnPlaceCommonEventID','KtgCQ','checkPlaceFurnitureAtAlowTerrainTag','2PGzvsc','_furnitureEventSprite','rrTnC','UMzCA','makeItemList','PositionText','createJS','updateFurnitureModeInputCancel','parse','right','filters','FurnitureTemplates','setupChild','screenTileY','checkPlaceFurnitureAtAllowRegion','Settings','converScreenPositionX','Class-%1-%2','drawTextEx','furnitureSettings','UPoCd','OSVlg','Default','fullRect','eventsXy','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','updateOutlineFilter','_baseSprite','rqIEQ','ItemWindow_DrawJS','endFurnitureSystemMode','isTriggered','shiftFurnitureTemplateIndex','tileWidth','cWZoR','tsfpk','AllowTerrainTags','OFFSET_COLUMN_1_X','ItemWindow_RectJS','despawnEventId','FwSWI','TerrainTags','_colorFilter','VisuMZ_1_ItemsEquipsCore','wgQzx','drawItemNumber','contents','_scaleY','isPassableByAnyDirection','iEzwZ','itemPadding','create','isMenuEnabled','version','RZgCs','OnRemoveFurniture','_spawnData','FurnitureNotMovable','Game_Player_moveByInput','playBuzzer','%1Pant','isEnabled','ForbidRegions','Game_Action_isForFriend','OUTLINE_FILTER_FORBID_COLOR','onPlaceFurnitureSpawnEvent','OnPlaceFurniture','ThisEventRetrieveFurniture','furnitureEventPosition','STRUCT','getSpawnPointsInRegion','updateFilters','NVklX','filter','GjKSN','changePaintOpacity','concat','startFadeIn','clone','DEFAULT_FURNITURE_CHECK_EVENT_COLLISION','exit','ARRAYEVAL','_displayY','isBeingTouched','TiqJc','leBZV','FurnitureOnPlaceEndless','canvasToMapX','hyAih','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','playSe','pagedown','checkPlaceFurnitureAtForbidTerrainTag','NUM','ItemWindow_FadeTarget','terrainTag','getFurnitureTypes','fruaC','FurnitureNeedEventCollisionCheck','HelpWindow_RectJS','update','OutlineFilter','setBackgroundType','checkPlaceFurnitureCollision','regionId','createAllWindows','start','CheckPassability','updateFurnitureModeInput','_furnitureSystemSettings','inBattle','GSXGH','checkTemplateChange','_furnitureSystemTemplateIndex','JsOnPlace','lastCursorY','VariantButtons','processMapTouch','consumable','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20item\x20=\x20arguments[0];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20','name','numItems','onDatabaseLoaded','dMkxo','text%1','119gHVCIC','processPlaceFurniture','CancelButtons','GenerateItem','length','FurnitureItem','wheelY','_forFurnitureMode','prepareSpawnedEventAtXY','isPlaytest','setupFurnitureData','updateScaleBase','DEFAULT_FURNITURE_END_MODE_ON_PLACE','Xhuip','furnitureEventTemplateName','isSceneChangeOk','XVsnp','18bOeZxQ','bXqjL','PosX','lastPosX','event','createFurnitureHelpWindow','HkJXf','wJVAD','DOPvO','600940TexEIg','_lastTemplateName','morphIntoTemplate','TouchInput_onRelease','Weapon-%1-%2','GeYoz','155501dQfLBP','TerrainTagsAllow','_preventTouchReleaseOnce','pageup','note','gainItem','gqPoO','calcWindowHeight','PurgeNonTemplateData','randomInt','554905JKpIFr','ForbidTerrainTags','DEFAULT_FURNITURE_FORBID_REGIONS','_touchCount','JXhGn','goto','DEFAULT_FURNITURE_FORBID_TERRAIN_TAGS','Game_OnceParallelInterpreter','FADE_OPACITY_TARGET','_cache_getFurnitureTypes','RefreshFurnitureModeVisuals','FurnitureSpawnAtTerrainTag','ecPew','RefreshFurnitureCursorBitmap','GQdDk','RMoQy','color','HelpWindow_Col1_OffsetX','CheckEventCollision','moveByInput','JsOnRemove','isForFriend','Region','createColorFilter','%1Volume','_addedHitbox','innerWidth','bHVZd','FUNC','FURNITURE_TOUCH_HOLD_TIME','updateItemType','updateKeyText','item','prototype','ZcoLS','consumeItem','epNnZ','allowUpdate','constructor','YWNoZ','ConfirmText','canPlaceFurnitureAtLocation','EventID','_spriteset','windowPadding','prepareFurniturePlacementMode','contentsOpacity','IQpXJ','KpoNj','rvpcl','initialize','refresh','devPlaceFurnitureAtXY','_erased','cancel','VmlEN','setColorTone','direction','checkPlaceFurniturePassability','canvasToMapY','furnitureEventTemplateData','OUTLINE_FILTER_QUALITY','getLastPluginCommandInterpreter','Window_ItemList_isEnabled','Game_Event_updateSelfMovement','TargetEventRetrieveFurniture','sPUlm','FurnitureSpawnAtXY','ConvertParams','imdAk','lastCursorX','updateMove','732RkTEAd','hgYRu','min','_furnitureModeRegisterEvent','_characterName','process_VisuMZ_FurnitureSystem_JS','Skill-%1-%2','BG_TYPE','toLowerCase','OutlineQuality','PositionButtons','qiomL','_spawnedEvents','createSpawnedEvent','BsXls','ARRAYSTR','RegExp','Scene_Map_start','map','DEFAULT_FURNITURE_ALLOW_TERRAIN_TAGS','_scene','OutlineAllowedColor','CommonEvent','CancelButtonYPositionJS','_furnitureHelpWindow','dimColor2','VTPaS','isValid','ConfirmButtons','createKeyJS','playCancel','Scene_Map_onMapTouch','JpzrT','DEFAULT_FURNITURE_ON_PLACE_COMMON_EVENT','startMoveFurnitureModeByTouch','_characterIndex','registerCommand','textWidth','Sound','checkFurniturePassableAnyDirection','checkFurnitureAtTouchLocation','Sprite_Character_isAllowCharacterTilt','updatePosition','tileHeight','toUpperCase','description','DEFAULT_FURNITURE_ALLOW_REGIONS','_furniture','round','lastSpawnedEvent','getSpawnPointsWithTerrainTags','RegionsAllow','Scene_ItemBase_activateItemWindow','zXlpS','updateFurnitureModeInputScrollWheel','format','isSpawnHitboxCollisionOk','buttonAssistText%1','_furnitureSystemEvent','list','width','TfKLH','FurnitureOnPlaceCommonEvent','clear','_furnitureItemWindow','height','Spriteset_Map_createSpawnedEvent','IQEYx','RegionsForbid','Scene_Map_processMapTouch','TargetEventDespawnFurniture','_displayX','_eventId','Game_Interpreter_updateWaitMode','131833pYllzJ','startFurnitureSystemMode','GqVCb','ARRAYSTRUCT','33HFkNQg','Sprite_Button_update','devPlaceFurnitureAtRegion','canRegisterFurnitureData','CancelText','useItem','hide','COLORFILTER_FORBID_TONE','lastPosY','Scene_Boot_onDatabaseLoaded','isRepeated','HelpWindow_BgType','OutlineThickness','isFurnitureSystemMode','LTcOv','Enemy-%1-%2','opacity','createFilters'];_0x5e72=function(){return _0x19f9d9;};return _0x5e72();}Window_FurnitureItem[_0x468fdb(0x1ff)]=Object[_0x468fdb(0x16a)](Window_Base[_0x468fdb(0x1ff)]),Window_FurnitureItem[_0x468fdb(0x1ff)][_0x468fdb(0x204)]=Window_FurnitureItem,Window_FurnitureItem[_0x468fdb(0x1e6)]=VisuMZ[_0x468fdb(0x292)][_0x468fdb(0x146)][_0x468fdb(0x2f0)][_0x468fdb(0x195)],Window_FurnitureItem[_0x468fdb(0x1ff)][_0x468fdb(0x210)]=function(_0x3e513d){const _0x6d8727=_0x468fdb;this['fullRect']=_0x3e513d,this[_0x6d8727(0x12e)]=0x0,Window_Base[_0x6d8727(0x1ff)][_0x6d8727(0x210)][_0x6d8727(0x110)](this,_0x3e513d),this[_0x6d8727(0x19d)](0x2),this[_0x6d8727(0x27a)]();},Window_FurnitureItem[_0x468fdb(0x1ff)][_0x468fdb(0x211)]=function(){const _0xed60f4=_0x468fdb;this[_0xed60f4(0x165)][_0xed60f4(0x265)]();if(!this[_0xed60f4(0x12e)])return;this[_0xed60f4(0x2bd)]=$dataItems[this[_0xed60f4(0x12e)]];return VisuMZ[_0xed60f4(0x292)][_0xed60f4(0x146)]['Window'][_0xed60f4(0x154)][_0xed60f4(0x110)](this);const _0x2adaf1=ColorManager[_0xed60f4(0x2df)](),_0x2649b1=ColorManager['dimColor2'](),_0x16848c=Math['round'](this[_0xed60f4(0x1f8)]/0x2),_0x16c75a=this[_0xed60f4(0x116)];this[_0xed60f4(0x165)]['fillRect'](0x0,0x0,_0x16848c,_0x16c75a,_0x2adaf1),this[_0xed60f4(0x165)]['gradientFillRect'](0x0+_0x16848c,0x0,_0x16848c,_0x16c75a,_0x2adaf1,_0x2649b1);if(Imported[_0xed60f4(0x162)]){const _0x4967f9=this[_0xed60f4(0x169)](),_0x36a815=0x0,_0x59d4c6=this['innerWidth']-_0x4967f9*0x10;this[_0xed60f4(0x164)](this[_0xed60f4(0x2bd)],_0x4967f9,_0x36a815,_0x4967f9*0x8),this['drawItemName'](this[_0xed60f4(0x2bd)],_0x4967f9*0xa,_0x36a815,_0x59d4c6);}else{const _0x2acd59=this[_0xed60f4(0x169)](),_0x53ddcb=0x0,_0x11e8b3=this['innerWidth']-_0x2acd59*0x2;this[_0xed60f4(0x2e5)](this[_0xed60f4(0x2bd)],_0x2acd59,_0x53ddcb,_0x11e8b3),this[_0xed60f4(0x164)](this[_0xed60f4(0x2bd)],_0x2acd59,_0x53ddcb,_0x11e8b3-_0x2acd59*0x8);}},VisuMZ[_0x468fdb(0x292)]['Window_ItemList_drawItemNumber']=Window_ItemList[_0x468fdb(0x1ff)][_0x468fdb(0x164)],Window_FurnitureItem[_0x468fdb(0x1ff)][_0x468fdb(0x164)]=function(_0x86d76a,_0x3d8c78,_0x169547,_0x29c84f){const _0x4fe573=_0x468fdb;try{Window_ItemList[_0x4fe573(0x1ff)][_0x4fe573(0x164)][_0x4fe573(0x110)](this,_0x86d76a,_0x3d8c78,_0x169547,_0x29c84f);}catch(_0x599a10){VisuMZ[_0x4fe573(0x292)]['Window_ItemList_drawItemNumber'][_0x4fe573(0x110)](this,_0x86d76a,_0x3d8c78,_0x169547,_0x29c84f);}},Window_FurnitureItem[_0x468fdb(0x1ff)]['update']=function(){const _0x449155=_0x468fdb;Window_Base['prototype'][_0x449155(0x19b)][_0x449155(0x110)](this),this[_0x449155(0x1fc)](),this[_0x449155(0x2b1)](),this[_0x449155(0x289)]();},Window_FurnitureItem[_0x468fdb(0x1ff)]['updateItemType']=function(){const _0x2c5a6f=_0x468fdb;if($gameMap[_0x2c5a6f(0x281)]()){const _0x4d27e7=$gameMap[_0x2c5a6f(0x14a)]();if(this[_0x2c5a6f(0x12e)]!==_0x4d27e7[_0x2c5a6f(0x112)]){if(_0x2c5a6f(0x1ea)!=='qlxdY')this[_0x2c5a6f(0x12e)]=_0x4d27e7[_0x2c5a6f(0x112)],this[_0x2c5a6f(0x211)]();else return![];}}else this[_0x2c5a6f(0x12e)]&&(this[_0x2c5a6f(0x12e)]=0x0,this[_0x2c5a6f(0x211)]());},Window_FurnitureItem[_0x468fdb(0x1ff)]['needsNumber']=function(){return!![];},Window_FurnitureItem[_0x468fdb(0x1ff)]['updateVisibility']=function(){const _0x31c496=_0x468fdb;this[_0x31c496(0x10b)]=$gameMap['isFurnitureSystemMode']()&&this[_0x31c496(0x12e)];},Window_FurnitureItem['prototype']['updateOpacity']=function(){const _0x320e5b=_0x468fdb,_0x8eeef8=SceneManager['_scene']['_spriteset'][_0x320e5b(0x138)];if(!_0x8eeef8)return;const _0x351949=SceneManager['_scene'][_0x320e5b(0x209)][_0x320e5b(0x152)],_0x3bfa73=_0x351949['x'],_0x1c4257=_0x351949['y'],_0x36ea1a=new Point(_0x8eeef8['x']-_0x3bfa73,_0x8eeef8['y']-_0x1c4257),_0x1f58bb=_0x36ea1a['x']-_0x8eeef8[_0x320e5b(0x262)]/0x2>this[_0x320e5b(0x14e)]['x']&&_0x36ea1a['x']+_0x8eeef8['width']/0x2<=this[_0x320e5b(0x14e)]['x']+this[_0x320e5b(0x14e)][_0x320e5b(0x262)]&&_0x36ea1a['y']>this[_0x320e5b(0x14e)]['y']&&_0x36ea1a['y']-_0x8eeef8[_0x320e5b(0x267)]<=this['fullRect']['y']+this[_0x320e5b(0x14e)]['height'],_0x33fcf7=_0x1f58bb?Window_FurnitureItem[_0x320e5b(0x1e6)]:0xff;this[_0x320e5b(0x20c)]=_0x33fcf7;};