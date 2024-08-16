//=============================================================================
// VisuStella MZ - Tile Grafter System
// VisuMZ_2_TileGrafterSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_TileGrafterSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.TileGrafterSystem = VisuMZ.TileGrafterSystem || {};
VisuMZ.TileGrafterSystem.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.01] [TileGrafterSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Tile_Grafter_System_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_EventsMoveCore
 * @orderAfter VisuMZ_1_EventsMoveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Ever wanted to insert tiles onto one map from another in-game? And have them
 * retain those changes? The Tile Grafter System allows for exactly that, so
 * that you can make HUB-like maps containing evolving architecture overtime
 * without the need to make lots of map variants. Take them exactly or by
 * certain tile layers only.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Tiles from one map can be inserted into another map via Plugin Commands in
 *   the form of tile grafting.
 * * These tiles can be inserted exactly or layer by layer depending on how you
 *   configure the Plugin Commands.
 * * Returning to maps with changed tiles will have their changes retained.
 * * Don't want these changes to be permanent? You can revert them or clean
 *   them up even.
 * * Grafting tiles can optionally work with autotiles as well.
 * * Insert shadows and even alter region IDs as well.
 * * If allowed, events from the source map can be grafted into the current map
 *   as preserved spawned events. Likewise, those spawned events can be removed
 *   when cleared or reverted.
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
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Map Tileset Data
 * 
 * Tile Grafting will change up the tile data found present in the current map.
 * As a result, $dataMap.data will have its values changed and adjusted
 * appropriately to reflect the new changes made. This means that map collision
 * and the like will be changed, too.
 * 
 * When grafting, the tiles that will be imported from the source map will be
 * changed to whatever the current map's tileset is. This means that you CANNOT
 * use a different tilemap on a source map and expect it to remain the same
 * when inserting into the current map. Instead, it will convert whatever tiles
 * are being used into the current map's tileset instead.
 * 
 * Upon leaving and returning to the map, the tile data will remain changed
 * until reverted by a Plugin Command.
 * 
 * *NOTE* When grafting from a source map for the first time, the game will
 * need to load said map. This may cause the game to wait a few frames before
 * continuing. Therefore, it's best to preload these source maps if possible
 * using the Plugin Commands.
 * 
 * ---
 * 
 * Autotiles
 * 
 * If you decide to graft using autotiles, autotiles will be applied slightly
 * differently than how they're done in the RPG Maker MZ editor in order to
 * preserve more of the game map. This is done INTENTIONALLY and is not a bug.
 * 
 * Autotiles will only affect their own tiles and not surrounding tiles that
 * aren't matching. In the editor, some road tiles will connect to one another
 * regardless if they're the same type. That does not happen here in order to
 * make more sense in the context of the game.
 * 
 * When grafting an autotile to a coordinate, it will affect matching autotile
 * types in the surrounding 8 tiles, too. This is to make sure that all of the
 * pieces will connect properly.
 * 
 * ---
 * 
 * Grafted Events
 * 
 * If you allow grafting the event layer (L7: Events), you can spawn any
 * matching events from the source map as long as the locations coincide. These
 * events will be spawned into the map as preserved spawns.
 * 
 * When importing, if there are any normal events already existing on the
 * grafting target location, they will be preserved in order to prevent a map
 * desynchronization. Keep this in mind as you prepare for spawning. On the
 * flip side, if there are any spawned events already existing on the target
 * location, they will be despawned.
 * 
 * If you want to make sure there are no events in the grafting target area
 * before applying the grafting, use the 
 * 
 * When using the Clear and Revert Plugin Commands, currently existing spawned
 * events (if the L7: Events layer is affected) will be removed from the target
 * location. Both Clear and Revert function the same for the L7: Events layer.
 * 
 * Clear and Revert will NOT remove any already existing normal events from the
 * target location in order to ensure the game map does not desync. However, it
 * will remove any spawned events that may have wandered into the area. Due to
 * this clearing process, the "Revert" function will NOT restore any spawned
 * events that may have been removed through grafting. Keep this in mind.
 * 
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_2_LightingEffects
 * 
 * The VisuStella MZ Lighting Effects plugin has "Anti-Light" and "Auto-Light"
 * functions tied to region IDs. If these regions match a grafted tile's region
 * then the map will fade out and fade back in to properly show the newly added
 * "Anti-Light" and "Auto-Light" effects.
 * 
 * ---
 * 
 * VisuMZ_4_VisualFogs
 * 
 * The VisuStella MZ Visual Fogs plugin has fogs that can be applied to only
 * certain regions on the map. If these regions match a grafted tile's region,
 * then the map will fade out and fade back in to properly show the fog being
 * applied to that region.
 * 
 * ---
 * 
 * VisuMZ_4_VisualParallaxes
 * 
 * The VisuStella MZ Visual Parallaxes plugin has water reflections that can be
 * applied to only certain regions on the map. If these regions match a grafted
 * tile's region, then the map will fade out and fade back in to properly show
 * the parallax reflection being applied to that region.
 * 
 * ---
 * 
 * VisuMZ_5_TileD
 * 
 * This plugin does not work with TileD.
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
 * === Graft Plugin Commands ===
 * 
 * ---
 *
 * Graft: Import Tiles Exactly
 * - Import and graft exact tiles from source map to current map.
 * - Must be used on the map scene!
 * 
 *   Source Map ID:
 *   - Insert the number of the map. Use 0 for current map.
 *   - You can use JavaScript code.
 * 
 *     Source X:
 *     - Insert source map's X location to start importing from.
 *     - You can use JavaScript code.
 * 
 *     Source Y:
 *     - Insert source map's Y location to start importing from.
 *     - You can use JavaScript code.
 * 
 *   Current Map:
 * 
 *     Target X:
 *     - Insert current map's X location to import to.
 *     - You can use JavaScript code.
 * 
 *     Target Y:
 *     - Insert current map's Y location to import to.
 *     - You can use JavaScript code.
 * 
 *     Width:
 *     - What is the width of the area to import?
 *     - You can use JavaScript code.
 * 
 *     Height:
 *     - What is the height of the area to import?
 *     - You can use JavaScript code.
 * 
 *   Import Layers:
 * 
 *     L1: Ground:
 *     - Utilize this layer? This is the ground layer.
 * 
 *     L2: Lower:
 *     - Utilize this layer? This is the lower layer.
 * 
 *     L3: Middle:
 *     - Utilize this layer? This is the middle layer.
 * 
 *     L4: Upper:
 *     - Utilize this layer? This is the upper layer.
 * 
 *     L5: Shadow:
 *     - Utilize this layer? This is the shadow layer.
 * 
 *     L6: Region:
 *     - Utilize this layer? This is the region layer.
 * 
 *     L7: Events:
 *     - Utilize this layer? This is the events layer.
 *     - Existing spawned events will be cleared before grafting.
 * 
 * ---
 * 
 * Graft: Import Tiles with Autotile
 * - Import and graft with autotiles from source map to current map.
 * - Must be used on the map scene!
 * 
 *   Source Map ID:
 *   - Insert the number of the map. Use 0 for current map.
 *   - You can use JavaScript code.
 * 
 *     Source X:
 *     - Insert source map's X location to start importing from.
 *     - You can use JavaScript code.
 * 
 *     Source Y:
 *     - Insert source map's Y location to start importing from.
 *     - You can use JavaScript code.
 * 
 *   Current Map:
 * 
 *     Target X:
 *     - Insert current map's X location to import to.
 *     - You can use JavaScript code.
 * 
 *     Target Y:
 *     - Insert current map's Y location to import to.
 *     - You can use JavaScript code.
 * 
 *     Width:
 *     - What is the width of the area to import?
 *     - You can use JavaScript code.
 * 
 *     Height:
 *     - What is the height of the area to import?
 *     - You can use JavaScript code.
 * 
 *   Import Layers:
 * 
 *     L1: Ground:
 *     - Utilize this layer? This is the ground layer.
 * 
 *     L2: Lower:
 *     - Utilize this layer? This is the lower layer.
 * 
 *     L3: Middle:
 *     - Utilize this layer? This is the middle layer.
 * 
 *     L4: Upper:
 *     - Utilize this layer? This is the upper layer.
 * 
 *     L5: Shadow:
 *     - Utilize this layer? This is the shadow layer.
 * 
 *     L6: Region:
 *     - Utilize this layer? This is the region layer.
 * 
 *     L7: Events:
 *     - Utilize this layer? This is the events layer.
 *     - Existing spawned events will be cleared before grafting.
 * 
 * ---
 * 
 * === Preload Plugin Commands ===
 * 
 * ---
 * 
 * Preload: Preload Source Map
 * - Preload a source map to use for grafting.
 * - Must be used on the map scene!
 * 
 *   Source Map ID:
 *   - Insert the number of the map.
 *   - You can use JavaScript code.
 * 
 * ---
 * 
 * === Restore Plugin Commands ===
 * 
 * ---
 * 
 * Restore: Clear Tiles for Map
 * - Clears tiles on current map to empty tiles.
 * - Must be used on the map scene!
 * 
 *   Current Map:
 * 
 *     Target X:
 *     - Insert current map's X location to start clearing.
 *     - You can use JavaScript code.
 * 
 *     Target Y:
 *     - Insert current map's Y location to start clearing.
 *     - You can use JavaScript code.
 * 
 *     Width:
 *     - What is the width of the area to clear?
 *     - You can use JavaScript code.
 * 
 *     Height:
 *     - What is the height of the area to clear?
 *     - You can use JavaScript code.
 * 
 *   Clear Layers:
 * 
 *     L1: Ground:
 *     - Utilize this layer? This is the ground layer.
 * 
 *     L2: Lower:
 *     - Utilize this layer? This is the lower layer.
 * 
 *     L3: Middle:
 *     - Utilize this layer? This is the middle layer.
 * 
 *     L4: Upper:
 *     - Utilize this layer? This is the upper layer.
 * 
 *     L5: Shadow:
 *     - Utilize this layer? This is the shadow layer.
 * 
 *     L6: Region:
 *     - Utilize this layer? This is the region layer.
 * 
 *     L7: Events:
 *     - Utilize this layer? This is the events layer.
 *     - Existing spawned events will be cleared.
 * 
 * ---
 * 
 * Restore: Revert Tiles for Map
 * - Revert tiles on current map to their original tiles.
 * - Must be used on the map scene!
 * 
 *   Current Map:
 * 
 *     Target X:
 *     - Insert current map's X location to start reverting.
 *     - You can use JavaScript code.
 * 
 *     Target Y:
 *     - Insert current map's Y location to start reverting.
 *     - You can use JavaScript code.
 * 
 *     Width:
 *     - What is the width of the area to revert?
 *     - You can use JavaScript code.
 * 
 *     Height:
 *     - What is the height of the area to revert?
 *     - You can use JavaScript code.
 * 
 *   Revert Layers:
 * 
 *     L1: Ground:
 *     - Utilize this layer? This is the ground layer.
 * 
 *     L2: Lower:
 *     - Utilize this layer? This is the lower layer.
 * 
 *     L3: Middle:
 *     - Utilize this layer? This is the middle layer.
 * 
 *     L4: Upper:
 *     - Utilize this layer? This is the upper layer.
 * 
 *     L5: Shadow:
 *     - Utilize this layer? This is the shadow layer.
 * 
 *     L6: Region:
 *     - Utilize this layer? This is the region layer.
 * 
 *     L7: Events:
 *     - Utilize this layer? This is the events layer.
 *     - Existing spawned events will be cleared.
 * 
 * ---
 * 
 * === Switch Plugin Commands ===
 * 
 * ---
 * 
 * Switches: Check for Events in Area
 * - Checks area for any events of various types.
 * - Must be used on the map scene!
 * 
 *   Switches
 * 
 *     ID for Normal Events:
 *     - This switch will turn ON if any normal events are found within the
 *       target area vicinity.
 *     - OFF otherwise.
 * 
 *     ID for Non-Graft Spawns:
 *     - This switch will turn ON if any non-grafted spawned events are found
 *       within the target area vicinity.
 *     - OFF otherwise.
 * 
 *     ID for Grafted Spawns:
 *     - This switch will turn ON if any grafted spawned events are found
 *       within the target area vicinity.
 *     - OFF otherwise.
 * 
 *   Target Checked Area
 * 
 *     Target X:
 *     - Insert current map's X location to check.
 *     - You can use JavaScript code.
 * 
 *     Target Y:
 *     - Insert current map's Y location to check.
 *     - You can use JavaScript code.
 * 
 *     Width:
 *     - What is the width of the area to check?
 *     - You can use JavaScript code.
 * 
 *     Height:
 *     - What is the height of the area to check?
 *     - You can use JavaScript code.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * There's a single Plugin Parameter that can be adjusted here.
 *
 * ---
 *
 * Parameters
 * 
 *   Nonmatch Tileset Warning:
 *   - Turn on warnings when using nonmatching tileset IDs.
 *   - This is because when grafting, the tiles that will be imported from the
 *     source map will be changed to whatever the current map's tileset is.
 *   - This means that you CANNOT use a different tilemap on a source map and
 *     expect it to remain the same when inserting into the current map.
 *   - Instead, it will convert whatever tiles are being used into the current
 *     map's tileset instead.
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
 * * Irina
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.01: February 15, 2024
 * * Bug Fixes!
 * ** Fixed a function clash with the Save Core. Fix made by Olivia.
 * 
 * Version 1.00 Official Release Date: February 23, 2024
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
 * @command GraftFromTargetMap
 * @text Graft: Import Tiles Exactly
 * @desc Import and graft exact tiles from source map to current map.
 * Must be used on the map scene!
 *
 * @arg sourceMapID:eval
 * @text Source Map ID
 * @desc Insert the number of the map. Use 0 for current map.
 * You can use JavaScript code.
 * @default 0
 *
 * @arg sourceX:eval
 * @text Source X
 * @parent sourceMapID:eval
 * @desc Insert source map's X location to start importing from.
 * You can use JavaScript code.
 * @default 0
 *
 * @arg sourceY:eval
 * @text Source Y
 * @parent sourceMapID:eval
 * @desc Insert source map's Y location to start importing from.
 * You can use JavaScript code.
 * @default 0
 * 
 * @arg Target
 * @text Current Map
 *
 * @arg targetX:eval
 * @text Target X
 * @parent Target
 * @desc Insert current map's X location to import to.
 * You can use JavaScript code.
 * @default 0
 *
 * @arg targetY:eval
 * @text Target Y
 * @parent Target
 * @desc Insert current map's Y location to import to.
 * You can use JavaScript code.
 * @default 0
 * 
 * @arg width:eval
 * @text Width
 * @parent Target
 * @desc What is the width of the area to import?
 * You can use JavaScript code.
 * @default 1
 *
 * @arg height:eval
 * @text Height
 * @parent Target
 * @desc What is the height of the area to import?
 * You can use JavaScript code.
 * @default 1
 * 
 * @arg Layers
 * @text Import Layers
 *
 * @arg layer0:eval
 * @text L1: Ground
 * @parent Layers
 * @type boolean
 * @on Import
 * @off Don't Import
 * @desc Utilize this layer? This is the ground layer.
 * @default true
 *
 * @arg layer1:eval
 * @text L2: Lower
 * @parent Layers
 * @type boolean
 * @on Import
 * @off Don't Import
 * @desc Utilize this layer? This is the lower layer.
 * @default true
 *
 * @arg layer2:eval
 * @text L3: Middle
 * @parent Layers
 * @type boolean
 * @on Import
 * @off Don't Import
 * @desc Utilize this layer? This is the middle layer.
 * @default true
 *
 * @arg layer3:eval
 * @text L4: Upper
 * @parent Layers
 * @type boolean
 * @on Import
 * @off Don't Import
 * @desc Utilize this layer? This is the upper layer.
 * @default true
 *
 * @arg layer4:eval
 * @text L5: Shadow
 * @parent Layers
 * @type boolean
 * @on Import
 * @off Don't Import
 * @desc Utilize this layer? This is the shadow layer.
 * @default true
 *
 * @arg layer5:eval
 * @text L6: Region
 * @parent Layers
 * @type boolean
 * @on Import
 * @off Don't Import
 * @desc Utilize this layer? This is the region layer.
 * @default true
 *
 * @arg layer6:eval
 * @text L7: Events
 * @parent Layers
 * @type boolean
 * @on Import
 * @off Don't Import
 * @desc Utilize this layer? This is the events layer.
 * Existing spawned events will be cleared before grafting.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GraftAutotile
 * @text Graft: Import Tiles with Autotile
 * @desc Import and graft with autotiles from source map to current map.
 * Must be used on the map scene!
 *
 * @arg sourceMapID:eval
 * @text Source Map ID
 * @desc Insert the number of the map. Use 0 for current map.
 * You can use JavaScript code.
 * @default 0
 *
 * @arg sourceX:eval
 * @text Source X
 * @parent sourceMapID:eval
 * @desc Insert source map's X location to start importing from.
 * You can use JavaScript code.
 * @default 0
 *
 * @arg sourceY:eval
 * @text Source Y
 * @parent sourceMapID:eval
 * @desc Insert source map's Y location to start importing from.
 * You can use JavaScript code.
 * @default 0
 * 
 * @arg Target
 * @text Current Map
 *
 * @arg targetX:eval
 * @text Target X
 * @parent Target
 * @desc Insert current map's X location to import to.
 * You can use JavaScript code.
 * @default 0
 *
 * @arg targetY:eval
 * @text Target Y
 * @parent Target
 * @desc Insert current map's Y location to import to.
 * You can use JavaScript code.
 * @default 0
 * 
 * @arg width:eval
 * @text Width
 * @parent Target
 * @desc What is the width of the area to import?
 * You can use JavaScript code.
 * @default 1
 *
 * @arg height:eval
 * @text Height
 * @parent Target
 * @desc What is the height of the area to import?
 * You can use JavaScript code.
 * @default 1
 * 
 * @arg Layers
 * @text Import Layers
 *
 * @arg layer0:eval
 * @text L1: Ground
 * @parent Layers
 * @type boolean
 * @on Import
 * @off Don't Import
 * @desc Utilize this layer? This is the ground layer.
 * @default true
 *
 * @arg layer1:eval
 * @text L2: Lower
 * @parent Layers
 * @type boolean
 * @on Import
 * @off Don't Import
 * @desc Utilize this layer? This is the lower layer.
 * @default true
 *
 * @arg layer2:eval
 * @text L3: Middle
 * @parent Layers
 * @type boolean
 * @on Import
 * @off Don't Import
 * @desc Utilize this layer? This is the middle layer.
 * @default true
 *
 * @arg layer3:eval
 * @text L4: Upper
 * @parent Layers
 * @type boolean
 * @on Import
 * @off Don't Import
 * @desc Utilize this layer? This is the upper layer.
 * @default true
 *
 * @arg layer4:eval
 * @text L5: Shadow
 * @parent Layers
 * @type boolean
 * @on Import
 * @off Don't Import
 * @desc Utilize this layer? This is the shadow layer.
 * @default true
 *
 * @arg layer5:eval
 * @text L6: Region
 * @parent Layers
 * @type boolean
 * @on Import
 * @off Don't Import
 * @desc Utilize this layer? This is the region layer.
 * @default true
 *
 * @arg layer6:eval
 * @text L7: Events
 * @parent Layers
 * @type boolean
 * @on Import
 * @off Don't Import
 * @desc Utilize this layer? This is the events layer.
 * Existing spawned events will be cleared before grafting.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Preload
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PreloadGraftMap
 * @text Preload: Preload Source Map
 * @desc Preload a source map to use for grafting.
 * Must be used on the map scene!
 *
 * @arg sourceMapID:eval
 * @text Source Map ID
 * @desc Insert the number of the map.
 * You can use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Restore
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GraftClearTiles
 * @text Restore: Clear Tiles for Map
 * @desc Clears tiles on current map to empty tiles.
 * Must be used on the map scene!
 *
 * @arg Target
 * @text Current Map
 *
 * @arg targetX:eval
 * @text Target X
 * @parent Target
 * @desc Insert current map's X location to start clearing.
 * You can use JavaScript code.
 * @default 0
 *
 * @arg targetY:eval
 * @text Target Y
 * @parent Target
 * @desc Insert current map's Y location to start clearing.
 * You can use JavaScript code.
 * @default 0
 * 
 * @arg width:eval
 * @text Width
 * @parent Target
 * @desc What is the width of the area to clear?
 * You can use JavaScript code.
 * @default 1
 *
 * @arg height:eval
 * @text Height
 * @parent Target
 * @desc What is the height of the area to clear?
 * You can use JavaScript code.
 * @default 1
 * 
 * @arg Layers
 * @text Clear Layers
 *
 * @arg layer0:eval
 * @text L1: Ground
 * @parent Layers
 * @type boolean
 * @on Clear
 * @off Don't Clear
 * @desc Utilize this layer? This is the ground layer.
 * @default true
 *
 * @arg layer1:eval
 * @text L2: Lower
 * @parent Layers
 * @type boolean
 * @on Clear
 * @off Don't Clear
 * @desc Utilize this layer? This is the lower layer.
 * @default true
 *
 * @arg layer2:eval
 * @text L3: Middle
 * @parent Layers
 * @type boolean
 * @on Clear
 * @off Don't Clear
 * @desc Utilize this layer? This is the middle layer.
 * @default true
 *
 * @arg layer3:eval
 * @text L4: Upper
 * @parent Layers
 * @type boolean
 * @on Clear
 * @off Don't Clear
 * @desc Utilize this layer? This is the upper layer.
 * @default true
 *
 * @arg layer4:eval
 * @text L5: Shadow
 * @parent Layers
 * @type boolean
 * @on Clear
 * @off Don't Clear
 * @desc Utilize this layer? This is the shadow layer.
 * @default true
 *
 * @arg layer5:eval
 * @text L6: Region
 * @parent Layers
 * @type boolean
 * @on Clear
 * @off Don't Clear
 * @desc Utilize this layer? This is the region layer.
 * @default true
 *
 * @arg layer6:eval
 * @text L7: Events
 * @parent Layers
 * @type boolean
 * @on Clear
 * @off Don't Clear
 * @desc Utilize this layer? This is the events layer.
 * Existing spawned events will be cleared.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GraftRevertTiles
 * @text Restore: Revert Tiles for Map
 * @desc Revert tiles on current map to their original tiles.
 * Must be used on the map scene!
 *
 * @arg Target
 * @text Current Map
 *
 * @arg targetX:eval
 * @text Target X
 * @parent Target
 * @desc Insert current map's X location to start reverting.
 * You can use JavaScript code.
 * @default 0
 *
 * @arg targetY:eval
 * @text Target Y
 * @parent Target
 * @desc Insert current map's Y location to start reverting.
 * You can use JavaScript code.
 * @default 0
 * 
 * @arg width:eval
 * @text Width
 * @parent Target
 * @desc What is the width of the area to revert?
 * You can use JavaScript code.
 * @default 1
 *
 * @arg height:eval
 * @text Height
 * @parent Target
 * @desc What is the height of the area to revert?
 * You can use JavaScript code.
 * @default 1
 * 
 * @arg Layers
 * @text Revert Layers
 *
 * @arg layer0:eval
 * @text L1: Ground
 * @parent Layers
 * @type boolean
 * @on Revert
 * @off Don't Revert
 * @desc Utilize this layer? This is the ground layer.
 * @default true
 *
 * @arg layer1:eval
 * @text L2: Lower
 * @parent Layers
 * @type boolean
 * @on Revert
 * @off Don't Revert
 * @desc Utilize this layer? This is the lower layer.
 * @default true
 *
 * @arg layer2:eval
 * @text L3: Middle
 * @parent Layers
 * @type boolean
 * @on Revert
 * @off Don't Revert
 * @desc Utilize this layer? This is the middle layer.
 * @default true
 *
 * @arg layer3:eval
 * @text L4: Upper
 * @parent Layers
 * @type boolean
 * @on Revert
 * @off Don't Revert
 * @desc Utilize this layer? This is the upper layer.
 * @default true
 *
 * @arg layer4:eval
 * @text L5: Shadow
 * @parent Layers
 * @type boolean
 * @on Revert
 * @off Don't Revert
 * @desc Utilize this layer? This is the shadow layer.
 * @default true
 *
 * @arg layer5:eval
 * @text L6: Region
 * @parent Layers
 * @type boolean
 * @on Revert
 * @off Don't Revert
 * @desc Utilize this layer? This is the region layer.
 * @default true
 *
 * @arg layer6:eval
 * @text L7: Events
 * @parent Layers
 * @type boolean
 * @on Revert
 * @off Don't Revert
 * @desc Utilize this layer? This is the events layer.
 * Existing spawned events will be cleared.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Switches
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchCheckEvents
 * @text Switches: Check for Events in Area
 * @desc Checks area for any events of various types.
 * Must be used on the map scene!
 * 
 * @arg Switches
 * 
 * @arg SwitchID_Normals:num
 * @text ID for Normal Events
 * @parent Switches
 * @type switch
 * @desc This switch will turn ON if any normal events are found
 * within the target area vicinity. OFF otherwise.
 * @default 1
 * 
 * @arg SwitchID_Spawns:num
 * @text ID for Non-Graft Spawns
 * @parent Switches
 * @type switch
 * @desc This switch will turn ON if any non-grafted spawned events
 * are found within the target area vicinity. OFF otherwise.
 * @default 2
 * 
 * @arg SwitchID_Graft:num
 * @text ID for Grafted Spawns
 * @parent Switches
 * @type switch
 * @desc This switch will turn ON if any grafted spawned events
 * are found within the target area vicinity. OFF otherwise.
 * @default 3
 *
 * @arg Target
 * @text Target Checked Area
 *
 * @arg targetX:eval
 * @text Target X
 * @parent Target
 * @desc Insert current map's X location to check.
 * You can use JavaScript code.
 * @default 0
 *
 * @arg targetY:eval
 * @text Target Y
 * @parent Target
 * @desc Insert current map's Y location to check.
 * You can use JavaScript code.
 * @default 0
 * 
 * @arg width:eval
 * @text Width
 * @parent Target
 * @desc What is the width of the area to check?
 * You can use JavaScript code.
 * @default 1
 *
 * @arg height:eval
 * @text Height
 * @parent Target
 * @desc What is the height of the area to check?
 * You can use JavaScript code.
 * @default 1
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
 * @param TileGrafterSystem
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Warning:eval
 * @text Nonmatch Tileset Warning
 * @type boolean
 * @on ON
 * @off OFF
 * @desc Turn on warnings when using nonmatching tileset IDs.
 * @default true
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
//=============================================================================

const _0x25ba4e=_0x57f6;function _0x57f6(_0x505ebe,_0x510f56){const _0x362387=_0x3623();return _0x57f6=function(_0x57f612,_0x4a2b29){_0x57f612=_0x57f612-0x67;let _0x20e999=_0x362387[_0x57f612];return _0x20e999;},_0x57f6(_0x505ebe,_0x510f56);}(function(_0x688bc5,_0x48a00c){const _0x359c5a=_0x57f6,_0x453bb3=_0x688bc5();while(!![]){try{const _0x2623bf=-parseInt(_0x359c5a(0x11c))/0x1*(-parseInt(_0x359c5a(0xa3))/0x2)+parseInt(_0x359c5a(0x120))/0x3*(-parseInt(_0x359c5a(0x142))/0x4)+-parseInt(_0x359c5a(0xc5))/0x5*(parseInt(_0x359c5a(0xf5))/0x6)+parseInt(_0x359c5a(0x70))/0x7+parseInt(_0x359c5a(0xff))/0x8*(parseInt(_0x359c5a(0xd7))/0x9)+-parseInt(_0x359c5a(0xbd))/0xa*(parseInt(_0x359c5a(0x71))/0xb)+-parseInt(_0x359c5a(0x14a))/0xc*(-parseInt(_0x359c5a(0xcf))/0xd);if(_0x2623bf===_0x48a00c)break;else _0x453bb3['push'](_0x453bb3['shift']());}catch(_0x3f7c05){_0x453bb3['push'](_0x453bb3['shift']());}}}(_0x3623,0xdcefb));var label=_0x25ba4e(0x11a),tier=tier||0x0,dependencies=[_0x25ba4e(0x156),_0x25ba4e(0x135)],pluginData=$plugins[_0x25ba4e(0x112)](function(_0x564adb){const _0x139129=_0x25ba4e;return _0x564adb['status']&&_0x564adb[_0x139129(0xdc)][_0x139129(0x131)]('['+label+']');})[0x0];VisuMZ[label][_0x25ba4e(0xc0)]=VisuMZ[label][_0x25ba4e(0xc0)]||{},VisuMZ[_0x25ba4e(0x113)]=function(_0x38ce7a,_0x414ba5){const _0x275863=_0x25ba4e;for(const _0x14abcc in _0x414ba5){if(_0x14abcc[_0x275863(0x157)](/(.*):(.*)/i)){const _0x2e44bb=String(RegExp['$1']),_0x2e584a=String(RegExp['$2'])[_0x275863(0x168)]()[_0x275863(0xc7)]();let _0xc420e2,_0x4d7baf,_0x497a56;switch(_0x2e584a){case _0x275863(0x16d):_0xc420e2=_0x414ba5[_0x14abcc]!==''?Number(_0x414ba5[_0x14abcc]):0x0;break;case _0x275863(0x153):_0x4d7baf=_0x414ba5[_0x14abcc]!==''?JSON[_0x275863(0xc6)](_0x414ba5[_0x14abcc]):[],_0xc420e2=_0x4d7baf[_0x275863(0xba)](_0x2d2250=>Number(_0x2d2250));break;case _0x275863(0xef):_0xc420e2=_0x414ba5[_0x14abcc]!==''?eval(_0x414ba5[_0x14abcc]):null;break;case _0x275863(0x8c):_0x4d7baf=_0x414ba5[_0x14abcc]!==''?JSON[_0x275863(0xc6)](_0x414ba5[_0x14abcc]):[],_0xc420e2=_0x4d7baf[_0x275863(0xba)](_0x59adc9=>eval(_0x59adc9));break;case _0x275863(0x84):_0xc420e2=_0x414ba5[_0x14abcc]!==''?JSON[_0x275863(0xc6)](_0x414ba5[_0x14abcc]):'';break;case _0x275863(0xb5):_0x4d7baf=_0x414ba5[_0x14abcc]!==''?JSON[_0x275863(0xc6)](_0x414ba5[_0x14abcc]):[],_0xc420e2=_0x4d7baf[_0x275863(0xba)](_0x550f11=>JSON['parse'](_0x550f11));break;case _0x275863(0xe3):_0xc420e2=_0x414ba5[_0x14abcc]!==''?new Function(JSON[_0x275863(0xc6)](_0x414ba5[_0x14abcc])):new Function(_0x275863(0x73));break;case _0x275863(0xfb):_0x4d7baf=_0x414ba5[_0x14abcc]!==''?JSON[_0x275863(0xc6)](_0x414ba5[_0x14abcc]):[],_0xc420e2=_0x4d7baf[_0x275863(0xba)](_0x2bd35b=>new Function(JSON[_0x275863(0xc6)](_0x2bd35b)));break;case _0x275863(0x13c):_0xc420e2=_0x414ba5[_0x14abcc]!==''?String(_0x414ba5[_0x14abcc]):'';break;case _0x275863(0x10b):_0x4d7baf=_0x414ba5[_0x14abcc]!==''?JSON['parse'](_0x414ba5[_0x14abcc]):[],_0xc420e2=_0x4d7baf[_0x275863(0xba)](_0x2012ef=>String(_0x2012ef));break;case _0x275863(0xf2):_0x497a56=_0x414ba5[_0x14abcc]!==''?JSON['parse'](_0x414ba5[_0x14abcc]):{},_0xc420e2=VisuMZ[_0x275863(0x113)]({},_0x497a56);break;case _0x275863(0x9d):_0x4d7baf=_0x414ba5[_0x14abcc]!==''?JSON[_0x275863(0xc6)](_0x414ba5[_0x14abcc]):[],_0xc420e2=_0x4d7baf['map'](_0x1be8fa=>VisuMZ[_0x275863(0x113)]({},JSON['parse'](_0x1be8fa)));break;default:continue;}_0x38ce7a[_0x2e44bb]=_0xc420e2;}}return _0x38ce7a;},(_0x2bd1a9=>{const _0x52aaee=_0x25ba4e,_0x2f1408=_0x2bd1a9[_0x52aaee(0x74)];for(const _0x494834 of dependencies){if(_0x52aaee(0xdd)!=='SKQxe'){if(!Imported[_0x494834]){alert(_0x52aaee(0xe5)[_0x52aaee(0xb3)](_0x2f1408,_0x494834)),SceneManager[_0x52aaee(0xa9)]();break;}}else{if(!this[_0x52aaee(0x117)]())return;const _0x277ba8=this['_scene'];if(!_0x277ba8)return;this['needsFullRefreshForGrafter']()?(_0x656e5['_scene'][_0x52aaee(0xf0)](),_0x419438[_0x52aaee(0x82)](_0x270d6a)):this[_0x52aaee(0x99)]();}}const _0x5d891e=_0x2bd1a9['description'];if(_0x5d891e[_0x52aaee(0x157)](/\[Version[ ](.*?)\]/i)){const _0x2aadc=Number(RegExp['$1']);_0x2aadc!==VisuMZ[label][_0x52aaee(0x165)]&&(_0x52aaee(0xb1)!==_0x52aaee(0xb1)?_0x4c9378['setWaitMode'](_0x52aaee(0xaf)):(alert(_0x52aaee(0xcc)[_0x52aaee(0xb3)](_0x2f1408,_0x2aadc)),SceneManager[_0x52aaee(0xa9)]()));}if(_0x5d891e[_0x52aaee(0x157)](/\[Tier[ ](\d+)\]/i)){if(_0x52aaee(0xf1)!==_0x52aaee(0xf1))_0x911615[_0x52aaee(0xb8)]=!![],this[_0x52aaee(0x167)](this[_0x52aaee(0x16c)](),![]);else{const _0x3b56fa=Number(RegExp['$1']);if(_0x3b56fa<tier){if(_0x52aaee(0xca)!==_0x52aaee(0x12d))alert(_0x52aaee(0x90)['format'](_0x2f1408,_0x3b56fa,tier)),SceneManager[_0x52aaee(0xa9)]();else{let _0x2b29ed=[];if(this['hasBorderAutotileTypeID'](_0x195866,_0x36dadc,_0x24ce78+0x1,_0x5b21d9))_0x2b29ed[_0x52aaee(0x82)](0x2);if(this['hasBorderAutotileTypeID'](_0x59d848,_0x3f4b06-0x1,_0x2ac230,_0x425f09))_0x2b29ed[_0x52aaee(0x82)](0x4);if(this[_0x52aaee(0x160)](_0x32497d,_0xd537ba+0x1,_0x27c27f,_0x4f6cb1))_0x2b29ed['push'](0x6);if(this[_0x52aaee(0x160)](_0x52b020,_0x4adc00,_0xd0f8-0x1,_0x458068))_0x2b29ed[_0x52aaee(0x82)](0x8);return _0x2b29ed;}}else tier=Math[_0x52aaee(0xbe)](_0x3b56fa,tier);}}VisuMZ['ConvertParams'](VisuMZ[label][_0x52aaee(0xc0)],_0x2bd1a9['parameters']);})(pluginData);function _0x3623(){const _0x33ccf4=['determineAutotileType','VisuMZ_2_RandomDungeonMaps','_tileGraftSourceMapIDs','graftAutotileXyz','floor','VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20','status','getMapGraftData','EVAL','startTileGraftFadeOut','WTKcq','STRUCT','PreloadGraftedMaps','mEfDJ','6272556EcPWym','smOpN','autotileType','registerNewGraftMap','bpadk','checkSpawnedEventsInArea','ARRAYFUNC','Graft\x20appearance\x20may\x20or\x20may\x20not\x20be\x20as\x20intended.\x20','calcWallGraftAutotileXyz','MSLdo','344SDqHFS','getSourceMapIDs','LightingEffects','VisuMZ_4_VisualFogs\x20needs\x20to\x20be\x20updated\x20','clearTileGraftingFromMap','padZero','Source\x20map\x20and\x20current\x20map\x20do\x20not\x20have\x20matching\x20','updateWaitMode','Scene_Map_createDisplayObjects','stringify','needsFadeIn','_grafterRefreshRegions','ARRAYSTR','mapId','Scene_Map_needsFadeIn','DfLpl','call','clearTileGraftXyz','_graftMapID','filter','ConvertParams','SwitchID_Spawns','getAutotileWallTypeIDAdjacentBorders','checkGraftedEventsInArea','isInstanceOfSceneMap','Warning','setupGraftTiles','TileGrafterSystem','performTileGraftingForEvent','68whZmhi','sourceMapID','grafted','data','1209qOrnxI','bEDFp','length','getTileDataIndex','CoreEngine','autotile','umWbZ','Scene_Boot_onDatabaseLoaded','PreloadedMaps','qOsgJ','loadSavedMapGraftData','goto','hasWallBorderAutotileTypeID','mLmZS','Tilemap_updateTransform','spread','PreloadGraftMap','includes','Zjije','Scene_Map_createSpriteset','VkBlF','VisuMZ_1_EventsMoveCore','VisualFogs','CheckNonmatchTilesetIDs','addRefreshRegionsForGraftTilemapRefresh','tilesetId','refreshGraftTilemapIfNeeded','Map%1.json','STR','BLxtx','_tileGraftDataMapID','VisuMZ_5_TileD','clearEventGraftXyz','cmoFH','14636LfofRj','GraftAutotile','_waitMode','isSpawnedEvent','WSBWN','onDatabaseLoaded','VisuMZ_4_VisualParallaxes','getAutotileTypeIDAdjacentBorders','12qhQIAM','initTileGrafterSystem','WcrfZ','adjustedTiles','_tilesetId','_eventSpawnData','width','BkMpD','Game_Interpreter_updateWaitMode','ARRAYNUM','updateGraftAutotileXyz','FGXGt','VisuMZ_0_CoreEngine','match','calcWaterfallGraftAutotileXyz','uTNfl','clone','SwitchCheckEvents','LDGWe','start','calcSpreadGraftAutotileXyz','CfBJz','hasBorderAutotileTypeID','isPlaytest','wxxzU','targetY','sJRGv','version','Tlrkv','startFadeOut','toUpperCase','setTileGraftXyz','prepareSpawnedEventAtXY','YIfse','fadeSpeed','NUM','GraftRevertTiles','feUCa','Game_Map_update','originalData','VisuMZ_2_LightingEffects','wall','SwitchID_Graft','registerCommand','loadDataFile','VisuMZ_2_TileGrafterSystem\x20does\x20not\x20work\x20with\x20VisuMZ_5_TileD.','7073423NJHNYs','5137zXYPDH','_tilemap','return\x200','name','VisuMZ_1_EventsMoveCore\x20needs\x20to\x20be\x20updated\x20','$graftMap','in\x20order\x20for\x20VisuMZ_2_TileGrafterSystem\x20to\x20work.','performTileGraftingForTile','KYEFE','some','sourceX','uIZMJ','revertTileGraftingFromMap','tileset\x20IDs\x20for\x20Tile\x20Grafter\x20System.\x20','isSpawnedGraftedEvent','despawnEventId','loadGraftMapData','push','height','JSON','CBFLc','Scene_Load_onLoadSuccess','performTileGraftingFromMap','HSgWh','preloadGraftMap','_graftTilemapRefreshRegions','getAutotileBaseTileID','ARRAYEVAL','YdJhd','bind','genJU','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','EventsMoveCore','CheckCompatibility','layers','create','_tileGraftDataRandom','_tileGraftingSettings','targetX','createSpriteset','performRefreshGraftedTilemap','VisualParallaxes','VisuMZ_4_VisualParallaxes\x20needs\x20to\x20be\x20updated\x20','GraftFromTargetMap','ARRAYSTRUCT','WowHA','calcGraftAutotileXyz','_needsGraftTilemapRefresh','onLoadSuccess','etrtk','9736IbpXPq','_scene','_spawnedEvents','needsFullRefreshForGrafter','checkNormalEventsInArea','_tileGraftingSettingsEventClear','exit','$preloadedMap_%1','refresh','prototype','KQLlx','VTETC','loadGraftMap','MZIKZ','qBlpT','isPreviousScene','format','qMJdo','ARRAYJSON','CfYXU','aJVuM','_haltTilemapRefresh','QHxJu','map','prepareGraftResetSceneEventClear','HEVFG','29530RoYfFL','max','zTaqd','Settings','XQshv','update','wait','requestGraftedTilemapRefresh','5MTmvFw','parse','trim','layer%1','setWaitMode','NKqhv','sourceY','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','GetAffectedLayers','rrNAL','24524539oJMyjB','preload_Map','random','tileId','createDisplayObjects','registerTileGraftingSettings','getLastPluginCommandInterpreter','waterfall','329859OeNEXT','eventId','oPylu','spawned','GraftClearTiles','description','RZWOd','addSourceMapID','eventsXy','revertTileGraftXyz','updateTransform','setValue','FUNC','performGraftResetSceneEventClear','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','getGraftTileIndex'];_0x3623=function(){return _0x33ccf4;};return _0x3623();}if(VisuMZ[_0x25ba4e(0x124)][_0x25ba4e(0x165)]<1.7){let text='';text+=_0x25ba4e(0xec),text+=_0x25ba4e(0x77),alert(text),SceneManager[_0x25ba4e(0xa9)]();}if(VisuMZ[_0x25ba4e(0x91)][_0x25ba4e(0x165)]<1.54){let text='';text+=_0x25ba4e(0x75),text+='in\x20order\x20for\x20VisuMZ_2_TileGrafterSystem\x20to\x20work.',alert(text),SceneManager[_0x25ba4e(0xa9)]();}VisuMZ[_0x25ba4e(0x11a)][_0x25ba4e(0xcd)]=function(_0x565ad8){const _0x1a5eb2=_0x25ba4e,_0x50a2d4=[];for(let _0x55c3e1=0x0;_0x55c3e1<=0x6;_0x55c3e1++){const _0x209d6a=_0x1a5eb2(0xc8)[_0x1a5eb2(0xb3)](_0x55c3e1);if(_0x565ad8[_0x209d6a])_0x50a2d4[_0x1a5eb2(0x82)](_0x55c3e1);}return _0x50a2d4;},PluginManager[_0x25ba4e(0x6d)](pluginData['name'],_0x25ba4e(0x9c),_0x268d56=>{const _0x2413de=_0x25ba4e;if(!SceneManager[_0x2413de(0x117)]())return;VisuMZ[_0x2413de(0x113)](_0x268d56,_0x268d56);const _0x410b8a={'sourceMapID':_0x268d56[_0x2413de(0x11d)]||$gameMap[_0x2413de(0x10c)](),'sourceX':Number(_0x268d56[_0x2413de(0x7b)]||0x0),'sourceY':Number(_0x268d56['sourceY']||0x0),'targetX':Number(_0x268d56[_0x2413de(0x97)]||0x0),'targetY':Number(_0x268d56['targetY']||0x0),'width':Number(_0x268d56['width']||0x0),'height':Number(_0x268d56['height']||0x0),'autotile':!!(_0x268d56[_0x2413de(0x125)]||![]),'layers':VisuMZ[_0x2413de(0x11a)][_0x2413de(0xcd)](_0x268d56)},_0x24d19b=$gameTemp['getLastPluginCommandInterpreter']();if(_0x24d19b){if('IffJq'!=='SHKVp'){$gameMap['registerTileGraftingSettings'](_0x410b8a);if($graftMap){$gameMap[_0x2413de(0x87)]();if(SceneManager[_0x2413de(0xa6)]())_0x24d19b[_0x2413de(0xc3)](0x1);}else _0x2413de(0xfe)===_0x2413de(0x67)?(this[_0x2413de(0x13a)](),_0x8679f6['TileGrafterSystem'][_0x2413de(0x68)][_0x2413de(0x10f)](this,_0x1951ed)):_0x24d19b[_0x2413de(0xc9)](_0x2413de(0xaf));}else _0x55b87a[_0x2413de(0x11f)][_0x45657e]=_0x308875,_0x422091[_0x3fbe05]=_0x2a2740;}}),PluginManager[_0x25ba4e(0x6d)](pluginData[_0x25ba4e(0x74)],_0x25ba4e(0x143),_0x17d7c8=>{const _0x40bd37=_0x25ba4e;if(!SceneManager['isInstanceOfSceneMap']())return;VisuMZ[_0x40bd37(0x113)](_0x17d7c8,_0x17d7c8);const _0x22468d={'sourceMapID':_0x17d7c8[_0x40bd37(0x11d)]||$gameMap[_0x40bd37(0x10c)](),'sourceX':Number(_0x17d7c8['sourceX']||0x0),'sourceY':Number(_0x17d7c8[_0x40bd37(0xcb)]||0x0),'targetX':Number(_0x17d7c8[_0x40bd37(0x97)]||0x0),'targetY':Number(_0x17d7c8['targetY']||0x0),'width':Number(_0x17d7c8['width']||0x0),'height':Number(_0x17d7c8[_0x40bd37(0x83)]||0x0),'autotile':!![],'layers':VisuMZ[_0x40bd37(0x11a)]['GetAffectedLayers'](_0x17d7c8)},_0xaf5cf3=$gameTemp[_0x40bd37(0xd5)]();if(_0xaf5cf3){if(_0x40bd37(0x129)!=='qOsgJ'){let _0x14e977='';_0x14e977+='VisuMZ_1_EventsMoveCore\x20needs\x20to\x20be\x20updated\x20',_0x14e977+='in\x20order\x20for\x20VisuMZ_2_TileGrafterSystem\x20to\x20work.',_0x18ef6d(_0x14e977),_0x585ba2[_0x40bd37(0xa9)]();}else{$gameMap['registerTileGraftingSettings'](_0x22468d);if($graftMap){$gameMap['performTileGraftingFromMap']();if(SceneManager[_0x40bd37(0xa6)]())_0xaf5cf3['wait'](0x1);}else{if(_0x40bd37(0x8d)===_0x40bd37(0xb0)){const _0x4b2838=_0x56b28f[_0x40bd37(0xdf)](_0x370aab,_0x580124);if(_0x4b2838['some'](_0x4b6910=>!!_0x4b6910&&_0x4b6910[_0x40bd37(0x145)]()&&!_0x4b6910[_0x40bd37(0x7f)]()))return!![];}else _0xaf5cf3[_0x40bd37(0xc9)]('loadGraftMap');}}}}),PluginManager[_0x25ba4e(0x6d)](pluginData['name'],_0x25ba4e(0x130),_0x38be70=>{const _0x42f947=_0x25ba4e;if(!SceneManager[_0x42f947(0x117)]())return;VisuMZ[_0x42f947(0x113)](_0x38be70,_0x38be70);const _0x2dc160=_0x38be70['sourceMapID']||$gameMap[_0x42f947(0x10c)]();if(!_0x2dc160)return;const _0x5221c0=$gameTemp['getLastPluginCommandInterpreter']();_0x5221c0&&($graftMap=null,$gameTemp[_0x42f947(0x111)]=_0x2dc160,DataManager[_0x42f947(0x81)](_0x2dc160),_0x5221c0[_0x42f947(0xc9)](_0x42f947(0x89)));}),PluginManager['registerCommand'](pluginData[_0x25ba4e(0x74)],_0x25ba4e(0xdb),_0x32d537=>{const _0x204577=_0x25ba4e;if(!SceneManager[_0x204577(0x117)]())return;VisuMZ[_0x204577(0x113)](_0x32d537,_0x32d537);const _0x99f348={'targetX':_0x32d537[_0x204577(0x97)]||0x0,'targetY':_0x32d537[_0x204577(0x163)]||0x0,'width':_0x32d537[_0x204577(0x150)]||0x0,'height':_0x32d537[_0x204577(0x83)]||0x0,'layers':VisuMZ[_0x204577(0x11a)][_0x204577(0xcd)](_0x32d537)};$gameMap[_0x204577(0x103)](_0x99f348);const _0x168a52=$gameTemp[_0x204577(0xd5)]();_0x168a52&&SceneManager[_0x204577(0xa6)]()&&_0x168a52[_0x204577(0xc3)](0x1);}),PluginManager[_0x25ba4e(0x6d)](pluginData[_0x25ba4e(0x74)],_0x25ba4e(0x16e),_0x39cf13=>{const _0x4d18d3=_0x25ba4e;if(!SceneManager[_0x4d18d3(0x117)]())return;VisuMZ[_0x4d18d3(0x113)](_0x39cf13,_0x39cf13);const _0x18f02b={'targetX':_0x39cf13[_0x4d18d3(0x97)]||0x0,'targetY':_0x39cf13[_0x4d18d3(0x163)]||0x0,'width':_0x39cf13[_0x4d18d3(0x150)]||0x0,'height':_0x39cf13[_0x4d18d3(0x83)]||0x0,'layers':VisuMZ[_0x4d18d3(0x11a)][_0x4d18d3(0xcd)](_0x39cf13)};$gameMap[_0x4d18d3(0x7d)](_0x18f02b);const _0x4f5963=$gameTemp[_0x4d18d3(0xd5)]();if(_0x4f5963&&SceneManager['needsFullRefreshForGrafter']()){if('mEwSH'!==_0x4d18d3(0x15c))_0x4f5963[_0x4d18d3(0xc3)](0x1);else{const _0x702f3c=_0x3cd904+_0x1ca2ba,_0x34b1c0=_0x2e5887+_0x456c33;for(let _0x350ee0=_0x310bfb;_0x350ee0<=_0x702f3c;_0x350ee0++){for(let _0x211daf=_0x293e8a;_0x211daf<=_0x34b1c0;_0x211daf++){const _0x62f2d6=_0x2a97fb[_0x4d18d3(0xdf)](_0x350ee0,_0x211daf);if(_0x62f2d6[_0x4d18d3(0x7a)](_0x7eb5fe=>!!_0x7eb5fe&&_0x7eb5fe[_0x4d18d3(0x7f)]()))return!![];}}return![];}}}),PluginManager[_0x25ba4e(0x6d)](pluginData['name'],_0x25ba4e(0x15b),_0x5ab98b=>{const _0x412000=_0x25ba4e;if(!SceneManager[_0x412000(0x117)]())return;VisuMZ[_0x412000(0x113)](_0x5ab98b,_0x5ab98b);const _0x289e2e=Number(_0x5ab98b[_0x412000(0x97)]||0x0),_0x2d3203=Number(_0x5ab98b[_0x412000(0x163)]||0x0),_0x35752d=Number(_0x5ab98b[_0x412000(0x150)]||0x0),_0x4df1b0=Number(_0x5ab98b[_0x412000(0x83)]||0x0),_0x222132={'normal':_0x5ab98b['SwitchID_Normals']||0x0,'spawned':_0x5ab98b[_0x412000(0x114)]||0x0,'grafted':_0x5ab98b[_0x412000(0x6c)]||0x0};_0x222132['normal']>0x0&&$gameSwitches[_0x412000(0xe2)](_0x222132['normal'],VisuMZ[_0x412000(0x11a)][_0x412000(0xa7)](_0x289e2e,_0x2d3203,_0x35752d,_0x4df1b0));if(_0x222132[_0x412000(0xda)]>0x0){if(_0x412000(0xb9)===_0x412000(0xb9))$gameSwitches['setValue'](_0x222132[_0x412000(0xda)],VisuMZ[_0x412000(0x11a)][_0x412000(0xfa)](_0x289e2e,_0x2d3203,_0x35752d,_0x4df1b0));else{const _0x400c7d=_0xd1bad9+_0x113b89,_0x222650=_0x25279d+_0x110e13;for(let _0x3bf776=_0x2d89e8;_0x3bf776<=_0x400c7d;_0x3bf776++){for(let _0x4c6ca8=_0x1c46e9;_0x4c6ca8<=_0x222650;_0x4c6ca8++){const _0x510f6b=_0x5984dc[_0x412000(0xdf)](_0x3bf776,_0x4c6ca8);if(_0x510f6b['some'](_0x20d8bb=>!!_0x20d8bb&&_0x20d8bb[_0x412000(0x145)]()&&!_0x20d8bb[_0x412000(0x7f)]()))return!![];}}return![];}}_0x222132['grafted']>0x0&&$gameSwitches[_0x412000(0xe2)](_0x222132[_0x412000(0x11e)],VisuMZ[_0x412000(0x11a)]['checkGraftedEventsInArea'](_0x289e2e,_0x2d3203,_0x35752d,_0x4df1b0));}),VisuMZ[_0x25ba4e(0x11a)][_0x25ba4e(0xa7)]=function(_0xfbea33,_0x15970f,_0x1c1a56,_0x90cd31){const _0x3af60d=_0x25ba4e,_0x125418=_0xfbea33+_0x1c1a56,_0xeac2b=_0x15970f+_0x90cd31;for(let _0x38f2f5=_0xfbea33;_0x38f2f5<=_0x125418;_0x38f2f5++){if(_0x3af60d(0xf9)===_0x3af60d(0xb7)){const _0x420cdf=this[_0x3af60d(0xa4)]['_spriteset'];if(!_0x420cdf)return;const _0x2495a7=_0x420cdf['_tilemap'];if(!_0x2495a7)return;_0x2495a7[_0x3af60d(0xab)]();}else for(let _0xb6e736=_0x15970f;_0xb6e736<=_0xeac2b;_0xb6e736++){if('FGXGt'===_0x3af60d(0x155)){const _0x104dbc=$gameMap[_0x3af60d(0xdf)](_0x38f2f5,_0xb6e736);if(_0x104dbc[_0x3af60d(0x7a)](_0x26ab9e=>!!_0x26ab9e&&!_0x26ab9e['isSpawnedEvent']()))return!![];}else{if(!_0x3549bf)return!![];_0x3c735b[_0x3af60d(0xf8)](),_0x1f8a5a[_0x3af60d(0x87)](),this[_0x3af60d(0x144)]='',this[_0x3af60d(0xc3)](0x1);}}}return![];},VisuMZ[_0x25ba4e(0x11a)][_0x25ba4e(0xfa)]=function(_0x13033e,_0x2bad4f,_0x20f01e,_0x528a66){const _0x34064e=_0x25ba4e,_0x43d850=_0x13033e+_0x20f01e,_0x3b47f1=_0x2bad4f+_0x528a66;for(let _0x1c9f0a=_0x13033e;_0x1c9f0a<=_0x43d850;_0x1c9f0a++){if(_0x34064e(0x126)===_0x34064e(0x126))for(let _0x376d84=_0x2bad4f;_0x376d84<=_0x3b47f1;_0x376d84++){const _0x4fb21c=$gameMap[_0x34064e(0xdf)](_0x1c9f0a,_0x376d84);if(_0x4fb21c['some'](_0x309524=>!!_0x309524&&_0x309524[_0x34064e(0x145)]()&&!_0x309524[_0x34064e(0x7f)]()))return!![];}else{let _0x37352a='';_0x37352a+=_0x34064e(0x105),_0x37352a+=_0x34064e(0x7e),_0x37352a+=_0x34064e(0xfc),_0x37978c(_0x37352a);}}return![];},VisuMZ[_0x25ba4e(0x11a)][_0x25ba4e(0x116)]=function(_0x538cfe,_0x13cc95,_0x3e0a01,_0x298532){const _0x452ed2=_0x25ba4e,_0x15b252=_0x538cfe+_0x3e0a01,_0x28cc3e=_0x13cc95+_0x298532;for(let _0x2bc9e0=_0x538cfe;_0x2bc9e0<=_0x15b252;_0x2bc9e0++){if(_0x452ed2(0xd9)===_0x452ed2(0x14c))for(let _0x5221ec=0x0;_0x5221ec<_0xaef5df;_0x5221ec++){for(let _0x581be1 of _0x48b9a5){if(_0x581be1<0x6)this[_0x452ed2(0x78)](_0x4b2c16,_0x5221ec,_0x581be1);if(_0x581be1===0x6)this[_0x452ed2(0x11b)](_0x582ee1,_0x5221ec);}}else for(let _0x4be3c8=_0x13cc95;_0x4be3c8<=_0x28cc3e;_0x4be3c8++){const _0x24f0c0=$gameMap[_0x452ed2(0xdf)](_0x2bc9e0,_0x4be3c8);if(_0x24f0c0[_0x452ed2(0x7a)](_0x49f9a7=>!!_0x49f9a7&&_0x49f9a7[_0x452ed2(0x7f)]()))return!![];}}return![];},VisuMZ[_0x25ba4e(0x11a)][_0x25ba4e(0x127)]=Scene_Boot[_0x25ba4e(0xac)][_0x25ba4e(0x147)],Scene_Boot[_0x25ba4e(0xac)][_0x25ba4e(0x147)]=function(){const _0x5903d3=_0x25ba4e;VisuMZ[_0x5903d3(0x11a)][_0x5903d3(0x127)][_0x5903d3(0x10f)](this),VisuMZ[_0x5903d3(0x11a)]['CheckCompatibility']();},VisuMZ[_0x25ba4e(0x11a)][_0x25ba4e(0x92)]=function(){const _0x4b5d12=_0x25ba4e;if(Imported[_0x4b5d12(0x6a)]&&VisuMZ[_0x4b5d12(0x101)][_0x4b5d12(0x165)]<1.06){let _0x2dac6b='';_0x2dac6b+='VisuMZ_2_LightingEffects\x20needs\x20to\x20be\x20updated\x20',_0x2dac6b+=_0x4b5d12(0x77),alert(_0x2dac6b),SceneManager['exit']();}if(Imported['VisuMZ_4_VisualFogs']&&VisuMZ[_0x4b5d12(0x136)][_0x4b5d12(0x165)]<1.1){let _0x298bf2='';_0x298bf2+=_0x4b5d12(0x102),_0x298bf2+=_0x4b5d12(0x77),alert(_0x298bf2),SceneManager[_0x4b5d12(0xa9)]();}if(Imported[_0x4b5d12(0x148)]&&VisuMZ[_0x4b5d12(0x9a)][_0x4b5d12(0x165)]<1.1){if(_0x4b5d12(0x146)===_0x4b5d12(0x146)){let _0x476176='';_0x476176+=_0x4b5d12(0x9b),_0x476176+=_0x4b5d12(0x77),alert(_0x476176),SceneManager[_0x4b5d12(0xa9)]();}else{const _0x403d47=_0x4a848f(_0x51f628['$1']);_0x403d47!==_0xc2c8b8[_0x22f945]['version']&&(_0x5e8438(_0x4b5d12(0xcc)[_0x4b5d12(0xb3)](_0x3b1ee4,_0x403d47)),_0x5979d5[_0x4b5d12(0xa9)]());}}if(Imported[_0x4b5d12(0x13f)]){let _0x236a6a='';_0x236a6a+=_0x4b5d12(0x6f),alert(_0x236a6a),SceneManager[_0x4b5d12(0xa9)]();}},$graftMap=null,$graftMaps={},DataManager['loadGraftMapData']=function(_0x33e205){const _0x132559=_0x25ba4e;$graftMap=null;if(_0x33e205<=0x0)return;if($graftMaps[_0x33e205])$graftMap=$graftMaps[_0x33e205];else{$gameTemp[_0x132559(0x111)]=_0x33e205;const _0x30f3e2=_0x132559(0x13b)[_0x132559(0xb3)](_0x33e205[_0x132559(0x104)](0x3));this[_0x132559(0x6e)]('$graftMap',_0x30f3e2);}},DataManager[_0x25ba4e(0xf8)]=function(){const _0x5d0c13=_0x25ba4e,_0x41378c=$gameTemp[_0x5d0c13(0x111)];$graftMaps[_0x41378c]=JSON[_0x5d0c13(0xc6)](JSON[_0x5d0c13(0x108)]($graftMap));},SceneManager['refreshGraftedTilemap']=function(){const _0x563969=_0x25ba4e;if(!this[_0x563969(0x117)]())return;const _0x4d5841=this[_0x563969(0xa4)];if(!_0x4d5841)return;if(this[_0x563969(0xa6)]()){if(_0x563969(0x16b)===_0x563969(0x16b))SceneManager[_0x563969(0xa4)]['startTileGraftFadeOut'](),SceneManager[_0x563969(0x82)](Scene_GrafterReset);else{const _0x1ab4f6=_0x100977,_0x948b6=_0x47f820*this[_0x563969(0x150)](),_0x5a4f4b=_0x2956ac*this[_0x563969(0x150)]()*this['height']();return _0x1ab4f6+_0x948b6+_0x5a4f4b;}}else this['performRefreshGraftedTilemap']();},SceneManager['needsFullRefreshForGrafter']=function(){const _0x583789=_0x25ba4e,_0x1b1a94=$gameMap[_0x583789(0x8a)]||[],_0x5c506e=this[_0x583789(0xa4)][_0x583789(0x10a)]||[];return _0x1b1a94['some'](_0x17b140=>_0x5c506e['includes'](_0x17b140));},SceneManager['performRefreshGraftedTilemap']=function(){const _0x2d17e0=_0x25ba4e,_0x1f288a=this[_0x2d17e0(0xa4)]['_spriteset'];if(!_0x1f288a)return;const _0x1ca917=_0x1f288a[_0x2d17e0(0x72)];if(!_0x1ca917)return;_0x1ca917['refresh']();},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0x123)]=function(_0x3bb1c2,_0x186bbf,_0x50f3b7){const _0x521d3b=_0x25ba4e,_0x43257c=_0x3bb1c2,_0x5b59b1=_0x186bbf*this[_0x521d3b(0x150)](),_0xaf6947=_0x50f3b7*this[_0x521d3b(0x150)]()*this['height']();return _0x43257c+_0x5b59b1+_0xaf6947;},VisuMZ[_0x25ba4e(0x11a)]['getGraftTileIndex']=function(_0x53679e,_0x3f5dfc,_0x4a98c5){const _0x4feeda=_0x25ba4e,_0x32a852=_0x53679e,_0x5af98d=_0x3f5dfc*$graftMap[_0x4feeda(0x150)],_0x277d4a=_0x4a98c5*$graftMap[_0x4feeda(0x150)]*$graftMap[_0x4feeda(0x83)];return _0x32a852+_0x5af98d+_0x277d4a;},VisuMZ[_0x25ba4e(0x11a)][_0x25ba4e(0x68)]=Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0xc2)],Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0xc2)]=function(_0x1637fd){const _0x5debbb=_0x25ba4e;this[_0x5debbb(0x13a)](),VisuMZ[_0x5debbb(0x11a)][_0x5debbb(0x68)][_0x5debbb(0x10f)](this,_0x1637fd);},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0xc4)]=function(){this['_needsGraftTilemapRefresh']=!![];},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0x138)]=function(_0x436c68,_0x11f593){const _0x12cbfe=_0x25ba4e;this[_0x12cbfe(0x8a)]=this[_0x12cbfe(0x8a)]||[];if(_0x436c68)this[_0x12cbfe(0x8a)][_0x12cbfe(0x82)](_0x436c68);if(_0x11f593)this[_0x12cbfe(0x8a)][_0x12cbfe(0x82)](_0x11f593);},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0x13a)]=function(){const _0xdaa5e0=_0x25ba4e;if(!this[_0xdaa5e0(0xa0)])return;SceneManager['refreshGraftedTilemap'](),this[_0xdaa5e0(0xa0)]=![],this[_0xdaa5e0(0x8a)]=[];},Game_Map['prototype'][_0x25ba4e(0x14b)]=function(){const _0x2083b2=_0x25ba4e;this[_0x2083b2(0x13e)]={},this[_0x2083b2(0x95)]={},this['_tileGraftSourceMapIDs']=[];},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0x119)]=function(){const _0x3ed6d1=_0x25ba4e;if(!$dataMap)return;const _0x57215a=this[_0x3ed6d1(0xee)]();this[_0x3ed6d1(0x12a)](_0x57215a);},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0xee)]=function(){const _0x5156e3=_0x25ba4e;if(this[_0x5156e3(0x13e)]===undefined)this['initTileGrafterSystem']();if(this[_0x5156e3(0x95)]===undefined)this[_0x5156e3(0x14b)]();const _0x289bc4=this[_0x5156e3(0x10c)]();if(Imported[_0x5156e3(0xe8)]&&typeof _0x289bc4==='string'){if(_0x289bc4===_0x5156e3(0xd1))return[];return this[_0x5156e3(0x95)][_0x289bc4]=this['_tileGraftDataRandom'][_0x289bc4]||[],this['_tileGraftDataRandom'][_0x289bc4];}else return this[_0x5156e3(0x13e)][_0x289bc4]=this[_0x5156e3(0x13e)][_0x289bc4]||[],this['_tileGraftDataMapID'][_0x289bc4];},Game_Map['prototype'][_0x25ba4e(0x12a)]=function(_0x5618d2){const _0x4b7e7b=_0x25ba4e,_0x5e5330=_0x5618d2['length'];$dataMap[_0x4b7e7b(0x69)]===undefined&&($dataMap['originalData']=$dataMap[_0x4b7e7b(0x11f)][_0x4b7e7b(0x15a)]());for(let _0x446e24=0x0;_0x446e24<_0x5e5330;_0x446e24++){if(_0x4b7e7b(0xce)===_0x4b7e7b(0x151)){const _0x1635d0=_0x296e56+_0x5badca,_0xe84bb0=_0x5e1534+_0x20453a;for(let _0x5cd176=_0x2ad7e2;_0x5cd176<=_0x1635d0;_0x5cd176++){for(let _0x305d2b=_0x3ce067;_0x305d2b<=_0xe84bb0;_0x305d2b++){const _0x50ce1c=_0x331fad[_0x4b7e7b(0xdf)](_0x5cd176,_0x305d2b);if(_0x50ce1c[_0x4b7e7b(0x7a)](_0x3464ea=>!!_0x3464ea&&!_0x3464ea[_0x4b7e7b(0x145)]()))return!![];}}return![];}else{const _0x2966a7=_0x5618d2[_0x446e24];if(_0x2966a7===null||_0x2966a7===undefined)continue;$dataMap[_0x4b7e7b(0x11f)][_0x446e24]=_0x2966a7;}}},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0x100)]=function(){const _0x51ca7a=_0x25ba4e;if(this['_tileGraftSourceMapIDs']===undefined)this['initTileGrafterSystem']();return this[_0x51ca7a(0xe9)];},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0xde)]=function(_0xe0c8b){const _0x4a56d9=_0x25ba4e,_0x3a802a=this['getSourceMapIDs']();if(_0x3a802a[_0x4a56d9(0x131)](_0xe0c8b))return;_0x3a802a[_0x4a56d9(0x82)](_0xe0c8b);},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0x169)]=function(_0x58b25c,_0x43ee0f,_0x10ffd2,_0x4819fd){const _0x2eea71=_0x25ba4e,_0x36e982=this[_0x2eea71(0xd2)](_0x43ee0f,_0x10ffd2,_0x4819fd),_0x1ee89b=this[_0x2eea71(0x123)](_0x43ee0f,_0x10ffd2,_0x4819fd),_0x38424c=this[_0x2eea71(0xee)]();if(_0x58b25c>=0x0){if('wxxzU'!==_0x2eea71(0x162)){if(_0x201072<0x6)this[_0x2eea71(0x169)](-0x1,_0xc72d8,_0x591d0d,_0x499155);if(_0x5ba0a0===0x6)this[_0x2eea71(0x110)](_0x12d894,_0x27b1d2,_0x42507e);}else $dataMap['data'][_0x1ee89b]=_0x58b25c,_0x38424c[_0x1ee89b]=_0x58b25c;}else $dataMap['data'][_0x1ee89b]=$dataMap[_0x2eea71(0x69)][_0x1ee89b],_0x38424c[_0x1ee89b]=undefined;this[_0x2eea71(0xc4)]();if(_0x4819fd===0x5){if(_0x2eea71(0x88)==='FoJzl')_0x42cca7=_0x53775a[_0x1ef3d7];else{const _0x2f4b3a=this[_0x2eea71(0xd2)](_0x43ee0f,_0x10ffd2,_0x4819fd);this[_0x2eea71(0x138)](_0x36e982,_0x2f4b3a);}}},Game_Map[_0x25ba4e(0xac)]['revertTileGraftXyz']=function(_0x5cc8e9,_0x4af800,_0x36eabc){const _0x5a60da=_0x25ba4e;if(_0x36eabc<0x6)this[_0x5a60da(0x169)](-0x1,_0x5cc8e9,_0x4af800,_0x36eabc);if(_0x36eabc===0x6)this['clearTileGraftXyz'](_0x5cc8e9,_0x4af800,_0x36eabc);},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0x110)]=function(_0x1947f3,_0x439799,_0x2ff885){const _0x444dd1=_0x25ba4e;if(_0x2ff885<0x6)this['setTileGraftXyz'](0x0,_0x1947f3,_0x439799,_0x2ff885);if(_0x2ff885===0x6)this[_0x444dd1(0x140)](_0x1947f3,_0x439799);},Game_Map['prototype'][_0x25ba4e(0x140)]=function(_0x44a498,_0x259a67){const _0x5aec9d=_0x25ba4e,_0x3ef9d3=this['eventsXy'](_0x44a498,_0x259a67)[_0x5aec9d(0x112)](_0x463efd=>_0x463efd&&_0x463efd[_0x5aec9d(0x145)]());if(_0x3ef9d3['length']<=0x0)return;for(const _0xcc267 of _0x3ef9d3){this[_0x5aec9d(0x80)](_0xcc267[_0x5aec9d(0xd8)]());}},Game_Map['prototype'][_0x25ba4e(0x8b)]=function(_0x54ca4c){const _0x389e82=_0x25ba4e,_0x202380=Math[_0x389e82(0xeb)]((_0x54ca4c-0x800)/0x30);return _0x202380*0x30+0x800;},Game_Map[_0x25ba4e(0xac)]['graftAutotileXyz']=function(_0x3ac4cd,_0x51acff,_0x42c706){const _0x1ce7fd=_0x25ba4e,_0x189136=this['autotileType'](_0x3ac4cd,_0x51acff,_0x42c706);if(_0x189136<0x0)return;for(let _0xde1dbf=-0x1;_0xde1dbf<=0x1;_0xde1dbf++){if(_0x1ce7fd(0x10e)!=='NRvKT'){if(_0xde1dbf+_0x3ac4cd<0x0)continue;if(_0xde1dbf+_0x3ac4cd>=this[_0x1ce7fd(0x150)]())continue;for(let _0x5ae320=-0x1;_0x5ae320<=0x1;_0x5ae320++){if(_0x5ae320+_0x51acff<0x0)continue;if(_0x5ae320+_0x51acff>=this[_0x1ce7fd(0x83)]())continue;const _0x1583b9=_0x3ac4cd+_0xde1dbf,_0x366f33=_0x51acff+_0x5ae320;if(this['autotileType'](_0x1583b9,_0x366f33,_0x42c706)!==_0x189136)continue;this[_0x1ce7fd(0x154)](_0x189136,_0x1583b9,_0x366f33,_0x42c706);}}else _0x3030c8[_0x1ce7fd(0xc3)](0x1);}},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0x154)]=function(_0x17270f,_0x4e8619,_0x4349ac,_0x53bad7){const _0x916c04=_0x25ba4e,_0x24fa88=[_0x4e8619,_0x4349ac,_0x53bad7];if(this[_0x916c04(0x96)][_0x916c04(0x14d)][_0x24fa88])return;this['_tileGraftingSettings'][_0x916c04(0x14d)][_0x24fa88]=!![];const _0x4c159b=VisuMZ['TileGrafterSystem'][_0x916c04(0xe7)](_0x17270f),_0x50b197=this[_0x916c04(0x9f)](_0x17270f,_0x4c159b,_0x4e8619,_0x4349ac,_0x53bad7);this['setTileGraftXyz'](_0x50b197,_0x4e8619,_0x4349ac,_0x53bad7);},VisuMZ['TileGrafterSystem']['determineAutotileType']=function(_0x2d269b){const _0x470501=_0x25ba4e;if([0x5,0x7,0xd,0xf]['includes'](_0x2d269b))return _0x470501(0xd6);const _0x1e8773=[0x38,0x48,0x58,0x68,0x78];for(const _0xf084c6 of _0x1e8773){if(_0x2d269b>=_0xf084c6&&_0x2d269b<_0xf084c6+0x8)return _0x470501(0x6b);}return _0x470501(0x12f);},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0x9f)]=function(_0x3f3d61,_0x5ce307,_0xa73469,_0xa9a03c,_0x3b5458){const _0x31aa9f=_0x25ba4e;let _0x9f7c49=_0x3f3d61*0x30+0x800;_0x5ce307===_0x31aa9f(0x12f)&&(_0x9f7c49=this['calcSpreadGraftAutotileXyz'](_0x9f7c49,_0x3f3d61,_0xa73469,_0xa9a03c,_0x3b5458));if(_0x5ce307===_0x31aa9f(0x6b)){if(_0x31aa9f(0xa2)!==_0x31aa9f(0x164))_0x9f7c49=this[_0x31aa9f(0xfd)](_0x9f7c49,_0x3f3d61,_0xa73469,_0xa9a03c,_0x3b5458);else{if(!_0x41ab95)return!![];_0x27e104[_0x31aa9f(0xf8)](),_0x5de22e=null,this[_0x31aa9f(0x144)]='';}}if(_0x5ce307===_0x31aa9f(0xd6)){if('CvPoV'!==_0x31aa9f(0x15f))_0x9f7c49=this[_0x31aa9f(0x158)](_0x9f7c49,_0x3f3d61,_0xa73469,_0xa9a03c,_0x3b5458);else{const _0x81deb5=_0x2dcfec[_0x31aa9f(0x97)]+_0x54d5b3,_0x20f61d=_0x4364fe[_0x31aa9f(0x163)]+_0x47088a;this[_0x31aa9f(0x110)](_0x81deb5,_0x20f61d,_0x2c4557);}}return _0x9f7c49;},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0x15e)]=function(_0x1bf6c8,_0x59cff8,_0x5b185e,_0x4001d2,_0x3af2e5){const _0x21ee0a=_0x25ba4e,_0x4d4a25=this['getAutotileTypeIDAdjacentBorders'](_0x59cff8,_0x5b185e,_0x4001d2,_0x3af2e5);if(_0x4d4a25[_0x21ee0a(0x122)]<=0x0){if(this[_0x21ee0a(0x160)](_0x59cff8,_0x5b185e-0x1,_0x4001d2-0x1,_0x3af2e5))_0x1bf6c8+=0x1;if(this[_0x21ee0a(0x160)](_0x59cff8,_0x5b185e+0x1,_0x4001d2-0x1,_0x3af2e5))_0x1bf6c8+=0x2;if(this[_0x21ee0a(0x160)](_0x59cff8,_0x5b185e+0x1,_0x4001d2+0x1,_0x3af2e5))_0x1bf6c8+=0x4;if(this['hasBorderAutotileTypeID'](_0x59cff8,_0x5b185e-0x1,_0x4001d2+0x1,_0x3af2e5))_0x1bf6c8+=0x8;}if(_0x4d4a25[_0x21ee0a(0x122)]===0x1){const _0x581be3=_0x4d4a25[0x0];if(_0x581be3===0x4){_0x1bf6c8+=0x10;if(this[_0x21ee0a(0x160)](_0x59cff8,_0x5b185e+0x1,_0x4001d2-0x1,_0x3af2e5))_0x1bf6c8+=0x1;if(this[_0x21ee0a(0x160)](_0x59cff8,_0x5b185e+0x1,_0x4001d2+0x1,_0x3af2e5))_0x1bf6c8+=0x2;}else{if(_0x581be3===0x8){_0x1bf6c8+=0x14;if(this[_0x21ee0a(0x160)](_0x59cff8,_0x5b185e+0x1,_0x4001d2+0x1,_0x3af2e5))_0x1bf6c8+=0x1;if(this[_0x21ee0a(0x160)](_0x59cff8,_0x5b185e-0x1,_0x4001d2+0x1,_0x3af2e5))_0x1bf6c8+=0x2;}else{if(_0x581be3===0x6){if(_0x21ee0a(0xc1)!==_0x21ee0a(0x132)){_0x1bf6c8+=0x18;if(this['hasBorderAutotileTypeID'](_0x59cff8,_0x5b185e-0x1,_0x4001d2-0x1,_0x3af2e5))_0x1bf6c8+=0x1;if(this[_0x21ee0a(0x160)](_0x59cff8,_0x5b185e-0x1,_0x4001d2+0x1,_0x3af2e5))_0x1bf6c8+=0x2;}else _0x351c68[_0x55eac9]?(_0x5dbf5b[_0x21ee0a(0x128)][_0x7675ea]=_0x12fb9d[_0x20d4b6],_0x587f21[_0x184eb4]=_0x3bb3d7):_0x413a48(this[_0x21ee0a(0xd0)][_0x21ee0a(0x8e)](this,_0xcd7cb7,_0xf51226),0x64);}else{if(_0x581be3===0x2){if('Zdnzv'!=='Zdnzv')_0x4d78af[_0x21ee0a(0x11f)][_0x50ff94]=_0x593601['originalData'][_0x56282c],_0x1c94b3[_0xc89b85]=_0x2f145e;else{_0x1bf6c8+=0x1c;if(this[_0x21ee0a(0x160)](_0x59cff8,_0x5b185e-0x1,_0x4001d2-0x1,_0x3af2e5))_0x1bf6c8+=0x1;if(this[_0x21ee0a(0x160)](_0x59cff8,_0x5b185e+0x1,_0x4001d2-0x1,_0x3af2e5))_0x1bf6c8+=0x2;}}}}}}if(_0x4d4a25[_0x21ee0a(0x122)]===0x2){if('eecqd'!==_0x21ee0a(0x79)){if(_0x4d4a25['includes'](0x4)&&_0x4d4a25['includes'](0x6))_0x1bf6c8+=0x20;else{if(_0x4d4a25[_0x21ee0a(0x131)](0x2)&&_0x4d4a25['includes'](0x8))_0x1bf6c8+=0x21;else{if(_0x4d4a25[_0x21ee0a(0x131)](0x4)&&_0x4d4a25[_0x21ee0a(0x131)](0x8)){_0x1bf6c8+=0x22;if(this['hasBorderAutotileTypeID'](_0x59cff8,_0x5b185e+0x1,_0x4001d2+0x1,_0x3af2e5))_0x1bf6c8+=0x1;}else{if(_0x4d4a25[_0x21ee0a(0x131)](0x6)&&_0x4d4a25[_0x21ee0a(0x131)](0x8)){_0x1bf6c8+=0x24;if(this['hasBorderAutotileTypeID'](_0x59cff8,_0x5b185e-0x1,_0x4001d2+0x1,_0x3af2e5))_0x1bf6c8+=0x1;}else{if(_0x4d4a25['includes'](0x2)&&_0x4d4a25[_0x21ee0a(0x131)](0x6)){if(_0x21ee0a(0xf6)===_0x21ee0a(0xf6)){_0x1bf6c8+=0x26;if(this['hasBorderAutotileTypeID'](_0x59cff8,_0x5b185e-0x1,_0x4001d2-0x1,_0x3af2e5))_0x1bf6c8+=0x1;}else _0x33252b=this[_0x21ee0a(0x158)](_0x3bc350,_0x4454ae,_0x543f6d,_0x5d7ffb,_0x3c79d3);}else{if(_0x4d4a25[_0x21ee0a(0x131)](0x2)&&_0x4d4a25[_0x21ee0a(0x131)](0x4)){if('twAwp'===_0x21ee0a(0xbc))for(let _0x227eb2=0x0;_0x227eb2<_0x4ca29b;_0x227eb2++){const _0x1cc974=_0x769bc7['targetX']+_0xa82c64,_0x158539=_0xb88cdf[_0x21ee0a(0x163)]+_0x227eb2;this['clearTileGraftXyz'](_0x1cc974,_0x158539,_0x432650);}else{_0x1bf6c8+=0x28;if(this['hasBorderAutotileTypeID'](_0x59cff8,_0x5b185e+0x1,_0x4001d2-0x1,_0x3af2e5))_0x1bf6c8+=0x1;}}}}}}}}else{this['_graftTilemapRefreshRegions']=this[_0x21ee0a(0x8a)]||[];if(_0x5a045c)this['_graftTilemapRefreshRegions']['push'](_0x5a7646);if(_0x22a13c)this[_0x21ee0a(0x8a)]['push'](_0x486c4e);}}if(_0x4d4a25[_0x21ee0a(0x122)]===0x3){if('VTETC'===_0x21ee0a(0xae)){if(!_0x4d4a25[_0x21ee0a(0x131)](0x2))_0x1bf6c8+=0x2a;else{if(!_0x4d4a25[_0x21ee0a(0x131)](0x6))'XtNUl'==='XtNUl'?_0x1bf6c8+=0x2b:(_0xf4cf11[_0x21ee0a(0x11a)][_0x21ee0a(0x86)]['call'](this),_0x395578[_0x21ee0a(0x11a)][_0x21ee0a(0xf3)]());else{if(!_0x4d4a25[_0x21ee0a(0x131)](0x8))_0x1bf6c8+=0x2c;else!_0x4d4a25['includes'](0x4)&&(_0x1bf6c8+=0x2d);}}}else{if(!_0x3a47f8[_0x21ee0a(0x11a)][_0x21ee0a(0xc0)]['Warning'])return;if(!_0x46910f[_0x21ee0a(0x161)]())return;if(!_0x14efd5)return;if(!_0x43c5d6)return;if(_0x302255['_tilesetId']!==_0x1cd85c[_0x21ee0a(0x139)]){let _0x3152a2='';_0x3152a2+=_0x21ee0a(0x105),_0x3152a2+=_0x21ee0a(0x7e),_0x3152a2+=_0x21ee0a(0xfc),_0xbfae79(_0x3152a2);}}}if(_0x4d4a25[_0x21ee0a(0x122)]===0x4){if(_0x21ee0a(0x166)===_0x21ee0a(0x9e))return _0x4aef06[_0x21ee0a(0xed)]&&_0x5b1bb7[_0x21ee0a(0xdc)][_0x21ee0a(0x131)]('['+_0x2debdc+']');else _0x1bf6c8+=0x2e;}return _0x1bf6c8;},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0xfd)]=function(_0x438c41,_0x4c54ef,_0x2b27f8,_0x3c8500,_0x36623e){const _0x5200bb=_0x25ba4e,_0x30aa8e=this[_0x5200bb(0x115)](_0x4c54ef,_0x2b27f8,_0x3c8500,_0x36623e);if(_0x30aa8e[_0x5200bb(0x131)](0x4))_0x438c41+=0x1;if(_0x30aa8e[_0x5200bb(0x131)](0x8))_0x438c41+=0x2;if(_0x30aa8e[_0x5200bb(0x131)](0x6))_0x438c41+=0x4;if(_0x30aa8e['includes'](0x2))_0x438c41+=0x8;return _0x438c41;},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0x158)]=function(_0x5b462d,_0x30ba82,_0x3e6274,_0x5a61d0,_0x1dfb97){const _0x1e3194=_0x25ba4e,_0x193477=this[_0x1e3194(0x149)](_0x30ba82,_0x3e6274,_0x5a61d0,_0x1dfb97);if(_0x193477[_0x1e3194(0x131)](0x4))_0x5b462d+=0x1;if(_0x193477[_0x1e3194(0x131)](0x6))_0x5b462d+=0x2;return _0x5b462d;},Game_Map['prototype'][_0x25ba4e(0x149)]=function(_0x2b2728,_0x57d037,_0xf3b8a6,_0x272fbc){const _0x184bfc=_0x25ba4e;let _0x176964=[];if(this[_0x184bfc(0x160)](_0x2b2728,_0x57d037,_0xf3b8a6+0x1,_0x272fbc))_0x176964[_0x184bfc(0x82)](0x2);if(this[_0x184bfc(0x160)](_0x2b2728,_0x57d037-0x1,_0xf3b8a6,_0x272fbc))_0x176964[_0x184bfc(0x82)](0x4);if(this['hasBorderAutotileTypeID'](_0x2b2728,_0x57d037+0x1,_0xf3b8a6,_0x272fbc))_0x176964[_0x184bfc(0x82)](0x6);if(this['hasBorderAutotileTypeID'](_0x2b2728,_0x57d037,_0xf3b8a6-0x1,_0x272fbc))_0x176964['push'](0x8);return _0x176964;},Game_Map['prototype']['hasBorderAutotileTypeID']=function(_0x1c0d63,_0x48cf0f,_0x3c0430,_0x154a07){const _0xb9674=_0x25ba4e;if(_0x48cf0f<0x0)return![];if(_0x48cf0f>=this['width']())return![];if(_0x3c0430<0x0)return![];if(_0x3c0430>=this[_0xb9674(0x83)]())return![];return this[_0xb9674(0xf7)](_0x48cf0f,_0x3c0430,_0x154a07)!==_0x1c0d63;},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0x115)]=function(_0x2c40a2,_0x4bc80a,_0x130f75,_0x419fc1){const _0x5d93ad=_0x25ba4e;let _0xaf8bc=[];if(this[_0x5d93ad(0x160)](_0x2c40a2,_0x4bc80a,_0x130f75+0x1,_0x419fc1))_0xaf8bc['push'](0x2);if(this[_0x5d93ad(0x160)](_0x2c40a2,_0x4bc80a,_0x130f75-0x1,_0x419fc1))_0xaf8bc['push'](0x8);if(this['hasWallBorderAutotileTypeID'](_0x2c40a2,_0x4bc80a,_0x4bc80a-0x1,_0x130f75,_0x419fc1))_0xaf8bc[_0x5d93ad(0x82)](0x4);if(this[_0x5d93ad(0x12c)](_0x2c40a2,_0x4bc80a,_0x4bc80a+0x1,_0x130f75,_0x419fc1))_0xaf8bc[_0x5d93ad(0x82)](0x6);return _0xaf8bc;},Game_Map['prototype'][_0x25ba4e(0x12c)]=function(_0x4cde1b,_0x509ca4,_0x5714f2,_0x500c54,_0x509b7c){const _0x548b50=_0x25ba4e;if(_0x5714f2<0x0)return![];if(_0x5714f2>=this[_0x548b50(0x150)]())return![];if(this[_0x548b50(0xf7)](_0x5714f2,_0x500c54,_0x509b7c)!==_0x4cde1b)return!![];let _0x539ae1=_0x500c54;for(;;){if(_0x548b50(0x7c)!=='hEQPq'){if(_0x539ae1+0x1>=this[_0x548b50(0x83)]())break;if(this[_0x548b50(0xf7)](_0x509ca4,_0x539ae1+0x1,_0x509b7c)!==_0x4cde1b)break;_0x539ae1+=0x1;}else{let _0x461a51=_0x31c029*0x30+0x800;return _0x1163e5===_0x548b50(0x12f)&&(_0x461a51=this['calcSpreadGraftAutotileXyz'](_0x461a51,_0x1a2a35,_0x8494df,_0x206a34,_0x187921)),_0x2c3cd2===_0x548b50(0x6b)&&(_0x461a51=this[_0x548b50(0xfd)](_0x461a51,_0x5c63e4,_0x247b22,_0x212553,_0x1337db)),_0x2c1664===_0x548b50(0xd6)&&(_0x461a51=this[_0x548b50(0x158)](_0x461a51,_0x1a6ad1,_0x3bc60e,_0x1e6441,_0x3cf06f)),_0x461a51;}}let _0x42dfd8=_0x500c54;for(;;){if(_0x548b50(0x141)!==_0x548b50(0x141)){_0x568405['_graftMapID']=_0xa8577;const _0x4b860f=_0x548b50(0x13b)[_0x548b50(0xb3)](_0x33f537[_0x548b50(0x104)](0x3));this['loadDataFile'](_0x548b50(0x76),_0x4b860f);}else{if(_0x42dfd8+0x1>=this['height']())break;if(this[_0x548b50(0xf7)](_0x5714f2,_0x42dfd8+0x1,_0x509b7c)!==_0x4cde1b)break;_0x42dfd8+=0x1;}}return _0x539ae1!==_0x42dfd8;},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0xd4)]=function(_0x1f36ed){const _0x5d11b4=_0x25ba4e;this[_0x5d11b4(0x96)]=JSON['parse'](JSON[_0x5d11b4(0x108)](_0x1f36ed)),$graftMap=null,DataManager[_0x5d11b4(0x81)](_0x1f36ed[_0x5d11b4(0x11d)]||this[_0x5d11b4(0x10c)]());},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0x87)]=function(){const _0x455a6e=_0x25ba4e;VisuMZ[_0x455a6e(0x11a)][_0x455a6e(0x137)]();const _0x3ddec0=this[_0x455a6e(0x96)][_0x455a6e(0x93)],_0xbd12f7=this[_0x455a6e(0x96)][_0x455a6e(0x150)],_0x30ccb7=this[_0x455a6e(0x96)]['height'];this[_0x455a6e(0xde)](this[_0x455a6e(0x96)][_0x455a6e(0x11d)]);for(let _0x5d8853=0x0;_0x5d8853<_0xbd12f7;_0x5d8853++){for(let _0x63b471=0x0;_0x63b471<_0x30ccb7;_0x63b471++){for(let _0x1f029f of _0x3ddec0){if(_0x1f029f<0x6)this[_0x455a6e(0x78)](_0x5d8853,_0x63b471,_0x1f029f);if(_0x1f029f===0x6)this['performTileGraftingForEvent'](_0x5d8853,_0x63b471);}}}if(this[_0x455a6e(0x96)][_0x455a6e(0x125)]){if('ZcRwn'!==_0x455a6e(0xb4)){this[_0x455a6e(0x96)]['adjustedTiles']={};for(let _0x1ad962=0x0;_0x1ad962<_0xbd12f7;_0x1ad962++){if('ezBsm'===_0x455a6e(0x159)){const _0xfe6db7=_0x455a6e(0xc8)[_0x455a6e(0xb3)](_0x53d89e);if(_0x3ebc28[_0xfe6db7])_0x48a30c[_0x455a6e(0x82)](_0x3c8291);}else for(let _0x4823da=0x0;_0x4823da<_0x30ccb7;_0x4823da++){if('genJU'===_0x455a6e(0x8f))for(let _0x268247 of _0x3ddec0){if('CBFLc'!==_0x455a6e(0x85))_0x1f6be4['setValue'](_0x1e9418[_0x455a6e(0xda)],_0x70ebd7[_0x455a6e(0x11a)]['checkSpawnedEventsInArea'](_0x3161b2,_0x51c3e9,_0x517780,_0x1e476c));else{if(_0x268247>=0x4)continue;const _0x265c86=this[_0x455a6e(0x96)]['targetX']+_0x1ad962,_0xb8ae97=this['_tileGraftingSettings'][_0x455a6e(0x163)]+_0x4823da;this[_0x455a6e(0xea)](_0x265c86,_0xb8ae97,_0x268247);}}else this[_0x455a6e(0xa0)]=!![];}}}else{if(_0x1b83c6>=_0x4f983b&&_0x49451c<_0x4df558+0x8)return'wall';}}$graftMap=null,this[_0x455a6e(0x96)]=undefined;},VisuMZ[_0x25ba4e(0x11a)][_0x25ba4e(0x137)]=function(){const _0x39c5da=_0x25ba4e;if(!VisuMZ[_0x39c5da(0x11a)][_0x39c5da(0xc0)][_0x39c5da(0x118)])return;if(!$gameTemp[_0x39c5da(0x161)]())return;if(!$gameMap)return;if(!$graftMap)return;if($gameMap[_0x39c5da(0x14e)]!==$graftMap['tilesetId']){if(_0x39c5da(0xad)===_0x39c5da(0xad)){let _0x54ab50='';_0x54ab50+='Source\x20map\x20and\x20current\x20map\x20do\x20not\x20have\x20matching\x20',_0x54ab50+='tileset\x20IDs\x20for\x20Tile\x20Grafter\x20System.\x20',_0x54ab50+=_0x39c5da(0xfc),alert(_0x54ab50);}else return _0x428d51['TileGrafterSystem'][_0x39c5da(0x10d)]['call'](this)||_0x333d32[_0x39c5da(0xb2)](_0x4a5c1b);}},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0x78)]=function(_0x3341d3,_0x48da72,_0x31a7dc){const _0x32d07f=_0x25ba4e,_0x2db516=this[_0x32d07f(0x96)][_0x32d07f(0x7b)]+_0x3341d3,_0x2a8764=this[_0x32d07f(0x96)][_0x32d07f(0xcb)]+_0x48da72,_0x31f68f=VisuMZ[_0x32d07f(0x11a)][_0x32d07f(0xe6)](_0x2db516,_0x2a8764,_0x31a7dc);let _0x4f7458=$graftMap[_0x32d07f(0x11f)][_0x31f68f]||0x0;_0x31a7dc<0x4&&this[_0x32d07f(0x96)][_0x32d07f(0x125)]&&(_0x4f7458=this[_0x32d07f(0x8b)](_0x4f7458));const _0x20b3f8=this['_tileGraftingSettings'][_0x32d07f(0x97)]+_0x3341d3,_0x3c7280=this['_tileGraftingSettings'][_0x32d07f(0x163)]+_0x48da72;this[_0x32d07f(0x169)](_0x4f7458,_0x20b3f8,_0x3c7280,_0x31a7dc);},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0x11b)]=function(_0x1d764e,_0x31f1c3){const _0x4f8499=_0x25ba4e,_0x1d2cc8=this[_0x4f8499(0x96)][_0x4f8499(0x97)]+_0x1d764e,_0xc24bc7=this['_tileGraftingSettings'][_0x4f8499(0x163)]+_0x31f1c3;this[_0x4f8499(0x140)](_0x1d2cc8,_0xc24bc7);const _0x4cb101=this[_0x4f8499(0x96)][_0x4f8499(0x7b)]+_0x1d764e,_0x30a897=this[_0x4f8499(0x96)][_0x4f8499(0xcb)]+_0x31f1c3,_0x48be10=$graftMap['events'][_0x4f8499(0x112)](_0x35c182=>!!_0x35c182&&_0x35c182['x']===_0x4cb101&&_0x35c182['y']===_0x30a897)||[];if(_0x48be10[_0x4f8499(0x122)]<=0x0)return;const _0x244c82=this[_0x4f8499(0x96)][_0x4f8499(0x11d)];!VisuMZ[_0x4f8499(0x128)][_0x244c82]&&(VisuMZ[_0x4f8499(0x128)][_0x244c82]=JSON[_0x4f8499(0xc6)](JSON['stringify']($graftMap))),data={'template':'','mapId':_0x244c82,'eventId':_0x48be10[0x0]['id'],'x':_0x1d2cc8,'y':_0xc24bc7,'spawnPreserved':!![],'spawnEventId':this[_0x4f8499(0xa5)][_0x4f8499(0x122)]+0x3e8,'grafted':!![]},$gameMap[_0x4f8499(0x16a)](data,![],![]);},Game_Event['prototype'][_0x25ba4e(0x7f)]=function(){const _0x11b944=_0x25ba4e;return this[_0x11b944(0x145)]()&&this[_0x11b944(0x14f)][_0x11b944(0x11e)];},Game_Map['prototype'][_0x25ba4e(0x103)]=function(_0x1e6ad2){const _0x4b1048=_0x25ba4e,_0x5eed5d=_0x1e6ad2[_0x4b1048(0x93)],_0x37b07a=_0x1e6ad2[_0x4b1048(0x150)],_0x2ca529=_0x1e6ad2[_0x4b1048(0x83)];for(let _0x1df12b=0x0;_0x1df12b<_0x37b07a;_0x1df12b++){if('HTKBB'!=='DqbuW')for(let _0x5ec606=0x0;_0x5ec606<_0x2ca529;_0x5ec606++){for(let _0x9b253e of _0x5eed5d){if(_0x9b253e===0x6&&SceneManager['needsFullRefreshForGrafter']()){this[_0x4b1048(0xbb)](_0x1e6ad2);continue;}const _0x3e39a5=_0x1e6ad2[_0x4b1048(0x97)]+_0x1df12b,_0x190145=_0x1e6ad2[_0x4b1048(0x163)]+_0x5ec606;this['clearTileGraftXyz'](_0x3e39a5,_0x190145,_0x9b253e);}}else{const _0x59656b=this[_0x4b1048(0xd2)](_0xb7119d,_0x198c36,_0x1ef96a);this[_0x4b1048(0x138)](_0x38bbb1,_0x59656b);}}},Game_Map[_0x25ba4e(0xac)]['revertTileGraftingFromMap']=function(_0x4245fe){const _0x4e45b3=_0x25ba4e,_0x223857=_0x4245fe[_0x4e45b3(0x93)],_0x4e968d=_0x4245fe['width'],_0x14d70b=_0x4245fe[_0x4e45b3(0x83)];for(let _0x3b7820=0x0;_0x3b7820<_0x4e968d;_0x3b7820++){for(let _0x3addb3=0x0;_0x3addb3<_0x14d70b;_0x3addb3++){if('VkBlF'===_0x4e45b3(0x134))for(let _0x44681d of _0x223857){if(_0x4e45b3(0x121)===_0x4e45b3(0x121)){if(_0x44681d===0x6&&SceneManager['needsFullRefreshForGrafter']()){this[_0x4e45b3(0xbb)](_0x4245fe);continue;}const _0x80189f=_0x4245fe[_0x4e45b3(0x97)]+_0x3b7820,_0x57de02=_0x4245fe[_0x4e45b3(0x163)]+_0x3addb3;this[_0x4e45b3(0xe0)](_0x80189f,_0x57de02,_0x44681d);}else{if(!_0x4e42d6[_0x4e45b3(0x117)]())return;_0x42dbaa[_0x4e45b3(0x113)](_0x2c9fcd,_0x5274c1);const _0x508e58={'sourceMapID':_0x44d0d8[_0x4e45b3(0x11d)]||_0x348440['mapId'](),'sourceX':_0x23a2db(_0x2abfdf[_0x4e45b3(0x7b)]||0x0),'sourceY':_0x6fab(_0x1a42d0[_0x4e45b3(0xcb)]||0x0),'targetX':_0x2d5e0e(_0x2088f6['targetX']||0x0),'targetY':_0x2cc574(_0x58f439['targetY']||0x0),'width':_0x20f0c8(_0x121c83[_0x4e45b3(0x150)]||0x0),'height':_0x17172e(_0x5a06ad[_0x4e45b3(0x83)]||0x0),'autotile':!!(_0x4864c2[_0x4e45b3(0x125)]||![]),'layers':_0x93304f['TileGrafterSystem'][_0x4e45b3(0xcd)](_0xcf7817)},_0x56328e=_0x4df33b[_0x4e45b3(0xd5)]();if(_0x56328e){_0x1e8765['registerTileGraftingSettings'](_0x508e58);if(_0x5794ad){_0x255d42[_0x4e45b3(0x87)]();if(_0xc524f3[_0x4e45b3(0xa6)]())_0x56328e[_0x4e45b3(0xc3)](0x1);}else _0x56328e['setWaitMode'](_0x4e45b3(0xaf));}}}else{if(_0x47d738<0x0)return![];if(_0x1b350e>=this['width']())return![];if(_0x5b5484<0x0)return![];if(_0x31679b>=this[_0x4e45b3(0x83)]())return![];return this[_0x4e45b3(0xf7)](_0x5b649d,_0x1a0477,_0x44eeca)!==_0x5d4d1f;}}}},Game_Map['prototype'][_0x25ba4e(0xbb)]=function(_0x1fbfcc){const _0x2605ef=_0x25ba4e;this[_0x2605ef(0xa8)]=JSON[_0x2605ef(0xc6)](JSON[_0x2605ef(0x108)](_0x1fbfcc));},Game_Map[_0x25ba4e(0xac)][_0x25ba4e(0xe4)]=function(){const _0x301d14=_0x25ba4e;if(!this[_0x301d14(0xa8)])return;const _0x3952d3=this[_0x301d14(0xa8)],_0x24b5ef=_0x3952d3[_0x301d14(0x150)],_0x29bb13=_0x3952d3[_0x301d14(0x83)],_0x279ea8=0x6;for(let _0x13f395=0x0;_0x13f395<_0x24b5ef;_0x13f395++){if('ynHuo'===_0x301d14(0xf4)){_0x27a5cd+=0x1c;if(this[_0x301d14(0x160)](_0x3df32f,_0x511fa4-0x1,_0x428fd4-0x1,_0x2cffa4))_0xf3f5fc+=0x1;if(this[_0x301d14(0x160)](_0x149daf,_0x1c5427+0x1,_0x3e7671-0x1,_0x1459c0))_0x41341e+=0x2;}else for(let _0x5f36d6=0x0;_0x5f36d6<_0x29bb13;_0x5f36d6++){const _0x14a88a=_0x3952d3[_0x301d14(0x97)]+_0x13f395,_0x5f3ab4=_0x3952d3[_0x301d14(0x163)]+_0x5f36d6;this['clearTileGraftXyz'](_0x14a88a,_0x5f3ab4,_0x279ea8);}}this[_0x301d14(0xa8)]=undefined;},VisuMZ[_0x25ba4e(0x11a)][_0x25ba4e(0x152)]=Game_Interpreter[_0x25ba4e(0xac)][_0x25ba4e(0x106)],Game_Interpreter[_0x25ba4e(0xac)]['updateWaitMode']=function(){const _0x1d5348=_0x25ba4e;if(this[_0x1d5348(0x144)]===_0x1d5348(0xaf)){if(_0x1d5348(0x13d)!==_0x1d5348(0x13d))_0x461f4a+=0x2b;else{if(!$graftMap)return!![];DataManager[_0x1d5348(0xf8)](),$gameMap['performTileGraftingFromMap'](),this[_0x1d5348(0x144)]='',this[_0x1d5348(0xc3)](0x1);}}if(this[_0x1d5348(0x144)]===_0x1d5348(0x89)){if(!$graftMap)return!![];DataManager[_0x1d5348(0xf8)](),$graftMap=null,this[_0x1d5348(0x144)]='';}return VisuMZ[_0x1d5348(0x11a)][_0x1d5348(0x152)][_0x1d5348(0x10f)](this);},VisuMZ['TileGrafterSystem'][_0x25ba4e(0x107)]=Scene_Map['prototype'][_0x25ba4e(0xd3)],Scene_Map[_0x25ba4e(0xac)][_0x25ba4e(0xd3)]=function(){const _0x5f59ca=_0x25ba4e;$gameMap[_0x5f59ca(0x119)](),VisuMZ['TileGrafterSystem'][_0x5f59ca(0x107)][_0x5f59ca(0x10f)](this);},VisuMZ[_0x25ba4e(0x11a)][_0x25ba4e(0x133)]=Scene_Map[_0x25ba4e(0xac)][_0x25ba4e(0x98)],Scene_Map['prototype'][_0x25ba4e(0x98)]=function(){const _0x3b210d=_0x25ba4e;this[_0x3b210d(0x10a)]=[],VisuMZ[_0x3b210d(0x11a)][_0x3b210d(0x133)][_0x3b210d(0x10f)](this);},VisuMZ[_0x25ba4e(0x11a)][_0x25ba4e(0x10d)]=Scene_Map['prototype'][_0x25ba4e(0x109)],Scene_Map[_0x25ba4e(0xac)][_0x25ba4e(0x109)]=function(){const _0x3909c8=_0x25ba4e;return VisuMZ[_0x3909c8(0x11a)][_0x3909c8(0x10d)][_0x3909c8(0x10f)](this)||SceneManager[_0x3909c8(0xb2)](Scene_GrafterReset);},Scene_Map[_0x25ba4e(0xac)][_0x25ba4e(0xf0)]=function(){const _0x29e99d=_0x25ba4e;$gameTemp[_0x29e99d(0xb8)]=!![],this[_0x29e99d(0x167)](this[_0x29e99d(0x16c)](),![]);},VisuMZ[_0x25ba4e(0x11a)]['Tilemap_updateTransform']=Tilemap[_0x25ba4e(0xac)]['updateTransform'],Tilemap[_0x25ba4e(0xac)][_0x25ba4e(0xe1)]=function(){const _0x3e3598=_0x25ba4e;if($gameTemp[_0x3e3598(0xb8)])return;VisuMZ['TileGrafterSystem'][_0x3e3598(0x12e)][_0x3e3598(0x10f)](this);},VisuMZ[_0x25ba4e(0x11a)]['Scene_Load_onLoadSuccess']=Scene_Load[_0x25ba4e(0xac)][_0x25ba4e(0xa1)],Scene_Load['prototype'][_0x25ba4e(0xa1)]=function(){const _0x31a3ed=_0x25ba4e;VisuMZ['TileGrafterSystem'][_0x31a3ed(0x86)][_0x31a3ed(0x10f)](this),VisuMZ['TileGrafterSystem'][_0x31a3ed(0xf3)]();},VisuMZ[_0x25ba4e(0x11a)]['PreloadGraftedMaps']=function(){const _0x50bb84=_0x25ba4e,_0xfb0dd2=$gameMap['getSourceMapIDs']();for(const _0x3f47a6 of _0xfb0dd2){if(_0x50bb84(0xbf)!==_0x50bb84(0xbf)){if(_0xb0f704<0x6)this[_0x50bb84(0x78)](_0x2b75ae,_0xeb6fbc,_0x507915);if(_0xf5373a===0x6)this['performTileGraftingForEvent'](_0x4cf3ae,_0xc03223);}else{if(VisuMZ['PreloadedMaps'][_0x3f47a6])continue;const _0x5b51c8=_0x50bb84(0x13b)['format'](_0x3f47a6['padZero'](0x3)),_0x4e1f55=_0x50bb84(0xaa)[_0x50bb84(0xb3)](_0x3f47a6);DataManager[_0x50bb84(0x6e)](_0x4e1f55,_0x5b51c8),setTimeout(this[_0x50bb84(0xd0)][_0x50bb84(0x8e)](this,_0x3f47a6,_0x4e1f55),0x64);}}},VisuMZ['TileGrafterSystem']['preload_Map']=function(_0x496b65,_0x13fd9f){const _0x494384=_0x25ba4e;if(window[_0x13fd9f])VisuMZ['PreloadedMaps'][_0x496b65]=window[_0x13fd9f],window[_0x13fd9f]=undefined;else{if('UvNWG'===_0x494384(0xb6)){let _0x382c02='';_0x382c02+=_0x494384(0x9b),_0x382c02+=_0x494384(0x77),_0x59514c(_0x382c02),_0x331ac4[_0x494384(0xa9)]();}else setTimeout(this[_0x494384(0xd0)][_0x494384(0x8e)](this,_0x496b65,_0x13fd9f),0x64);}};function Scene_GrafterReset(){this['initialize'](...arguments);}Scene_GrafterReset['prototype']=Object[_0x25ba4e(0x94)](Scene_Base[_0x25ba4e(0xac)]),Scene_GrafterReset[_0x25ba4e(0xac)]['constructor']=Scene_GrafterReset,Scene_GrafterReset['prototype'][_0x25ba4e(0x15d)]=function(){const _0x4224f6=_0x25ba4e;$gameTemp[_0x4224f6(0xb8)]=![],$gameMap[_0x4224f6(0xe4)](),SceneManager[_0x4224f6(0x12b)](Scene_Map);};