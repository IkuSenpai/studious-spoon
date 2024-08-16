//=============================================================================
// VisuStella MZ - Frontview Battle UI
// VisuMZ_3_FrontviewBattleUI.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_FrontviewBattleUI = true;

var VisuMZ = VisuMZ || {};
VisuMZ.FrontviewBattleUI = VisuMZ.FrontviewBattleUI || {};
VisuMZ.FrontviewBattleUI.version = 1.11;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.11] [FrontviewBattleUI]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Frontview_Battle_UI_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The plugin creates a more dedicated frontview Battle UI for RPG Maker MZ.
 * Design elements are made to be more visible and elegant at the same time,
 * while utilizing various effects like minor flashes and shaking to depict
 * changes like damage, recovery, and more. The in-battle command windows are
 * slightly altered to give a better feel while also providing enough room for
 * battle portraits to be used.
 * 
 * *NOTE* To use this battle layout, you will need the updated version of
 * VisuStella's Battle Core. Go into its Plugin Parameters and change the
 * Battle Layout Settings > Battle Layout Style > plugin parameter to this
 * value: "Frontview Battle UI" or "frontview_ui".
 *
 * Features include all (but not limited to) the following:
 * 
 * * This plugin changes the UI for the RPG Maker MZ Sideview Battle System.
 * * The status UI elements appear at the bottom of the screen while providing
 *   portrait support from the side.
 * * Different portraits can be used for different types of skills or items.
 * * Lots of customization options to the adjust the status UI.
 * * The frontview UI can also be used on the map as a HUD.
 * * Despite this plugin being called "Frontview UI", it can also be used with
 *   sideview if the user decides to.
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
 * * VisuMZ_1_BattleCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
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
 * Window Properties
 * 
 * With how the battle layout works, many of the command windows used in the
 * battle system will have preset and hardcoded properties to them in order to
 * maintain a specific aesthetic. These include columns, padding, and scaling
 * types to name a few.
 * 
 * Therefore, any plugins that may alter these effects may not have any effect
 * at all provided that this plugin is in a higher tier than those modifying
 * it. This is an intended change to maintain the aesthetic and is not a bug.
 * 
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_1_ItemsEquipsCore
 *
 * Those using the Items and Equips Core plugin can have the Shop Status Window
 * be displayed during battle to show information regarding the skills/items
 * selected during input.
 *
 * ---
 *
 * VisuMZ_2_AggroControlSystem
 * VisuMZ_2_BattleSystemBTB
 * VisuMZ_3_BoostAction
 * VisuMZ_3_StateTooltips
 * VisuMZ_4_BreakShields
 *
 * There are features provided in this plugin for the above plugins. Their UI
 * elements can be shown with this plugin's status windows.
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
 * === Portrait-Related Notetags ===
 * 
 * ---
 * 
 * <Battle Portrait: filename>
 *
 * - Used for: Actor Notetag
 * - Sets the battle portrait image for the actor to 'filename'.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 * - This will override any menu images used for battle only.
 * 
 * ---
 *
 * <Frontview UI Portraits>
 *  key: filename
 *  key: filename
 *  key: filename
 * </Frontview UI Portraits>
 *
 * - Used for: Actor Notetags
 * - Allows varying portraits to be displayed when certain 'key' elements are
 *   selected or used.
 * - Replace 'key' with a setting from the following (without the quotes):
 *   - When performing actions (priority from top to bottom):
 *     - The exact name of the skill or item being used.
 *     - "Item" - When actor uses an item.
 *     - "Friendly" - When actor performs an action that targets allies.
 *     - "Certain Hit" - When actor uses an action that is Certain Hit type.
 *     - "Physical" - When actor uses an action that is Physical hit type.
 *     - "Magical" - When actor uses an action that is Magical hit type.
 *     - "Opponent" - When actor performs an action that targets enemies.
 *     - "Magic" - When actor performs a magic-type skill.
 *     - "Skill" - When actor performs a general skill.
 *     - "Normal" - Everything else.
 *     - "Default" - Everything else.
 *   - When choosing during input (priority from top to bottom):
 *     - The exact name of the skill or item being used.
 *     - The 'symbol' used for the command item.
 *       - "Attack", "Guard", "Skill", "Item", "Escape", "AutoBattle"
 *       - "Brave" - From VisuMZ_2_BattleSystemBTB
 *       - "Formation" - From VisuMZ_2_PartySystem
 *       - "WeaponSwap" - From VisuMZ_2_WeaponSwapSystem
 *       - "Boost" - From VisuMZ_3_BoostAction
 *       - "CombatLog" - From VisuMZ_4_CombatLog
 *     - "Normal" - Everything else.
 *     - "Default" - Everything else.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 *
 * ---
 * 
 * === Map-Related Notetags ===
 * 
 * ---
 *
 * <Show Frontview UI>
 * <Hide Frontview UI>
 *
 * - Used for: Map Notetags
 * - Show or hide the Frontview Battle UI when entering this specific map.
 * - The visibility can be changed via Plugin Command.
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
 * === Map UI Plugin Commands ===
 * 
 * ---
 *
 * Map UI: Text Popup (Actor)
 * - Creates a custom text popup on the Frontview UI on map scene.
 * - Targets specific actors.
 *
 *   Actor ID(s):
 *   - Select the ID(s) of the actor(s) you want to target.
 *
 *   Text:
 *   - What text do you wish to display?
 *
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 *
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * Map UI: Text Popup (Party)
 * - Creates a custom text popup on the Frontview UI on map scene.
 * - Targets party index. Index values start at 0.
 *
 *   Party Index(es):
 *   - Which party index to target?
 *   - Index values start at 0.
 *
 *   Text:
 *   - What text do you wish to display?
 *
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 *
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * Map UI: Variable Popup (Actor)
 * - Creates a custom text popup on the Frontview UI on map scene.
 * - Targets specific actors.
 *
 *   Actor ID(s):
 *   - Select the ID(s) of the actor(s) you want to target.
 *
 *   Variable ID:
 *   - Get data from which variable to display as a popup?
 *
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 *
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * Map UI: Variable Popup (Party)
 * - Creates a variable data popup on the Frontview UI on map scene.
 * - Targets party index. Index values start at 0.
 *
 *   Party Index(es):
 *   - Which party index to target?
 *   - Index values start at 0.
 *
 *   Variable ID:
 *   - Get data from which variable to display as a popup?
 *
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 *
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Map Frontview UI Visibility
 * - Sets the visibility of the Frontview UI on the map scene.
 * - Requires the battle layout to be Frontview UI.
 *
 *   Visible?:
 *   - Sets visibility of the Frontview UI on current map scene.
 *   - Requires the battle layout to be Frontview UI.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Status UI Settings Settings
 * ============================================================================
 *
 * Settings that alter the Status UI elements.
 *
 * ---
 *
 * Position
 * 
 *   Distance Buffer:
 *   - How many pixels of buffer range is there between status UI elements?
 * 
 *   Graphics Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   UI Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 *
 * ---
 *
 * Graphics > Background
 * 
 *   Show?:
 *   - This is the back image displayed for the graphics set.
 * 
 *   Filename:
 *   - If you don't want to use the pre-rendered background, pick a graphic
 *     from the /img/system/ folder.
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 * ---
 * 
 * Graphics > Face Graphic
 * 
 *   Show?:
 *   - This is the face image displayed for the graphics set.
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 * ---
 * 
 * Graphics > Face Mask
 * 
 *   Use?:
 *   - Use a mask for the face graphic?
 * 
 *   Filename:
 *   - If you don't want to use the pre-rendered face mask, pick a mask from
 *     the /img/system/ folder.
 * 
 *   Render:
 * 
 *     Distance Shift:
 *     - Determines the distance shift for the pre-rendered triangle.
 * 
 *     Color 1:
 *     Color 2:
 *     - Use #rrggbb for custom color.
 *     - Check your color here: https://htmlcolorcodes.com/
 * 
 *     Vertical Gradient:
 *     - Use a vertical gradient or a horizontal gradient?
 * 
 * ---
 * 
 * UI > Name
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > HP Gauge
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > MP Gauge
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > TP Gauge
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > TPG Gauge
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > State Icon
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 *
 * ---
 * 
 * UI > State Overlay
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 *
 * ---
 * 
 * UI > Aggro Gauge
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > Brave Points
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > Break Shields
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 *
 * ---
 * 
 * UI > Boost Points
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 *
 * Effects > Active Shift
 * 
 *   X Distance:
 *   - If an actor is the active battler, shift x value.
 *   - Negative: left. Positive: right.
 * 
 *     Shift Speed:
 *     - How many pixels should be shifted each frame?
 *     - 60 frames = 1 second.
 * 
 *   Y Distance:
 *   - If an actor is the active battler, shift y value.
 *   - Negative: up. Positive: down.
 * 
 *     Shift Speed:
 *     - How many pixels should be shifted each frame?
 *     - 60 frames = 1 second.
 * 
 * ---
 * 
 * Effects > Damage Shake
 * 
 *   Enable?:
 *   - Enable shake effects when taking HP damage?
 * 
 *   Duration:
 *   - How many frames should this effect last?
 *   - 60 frames = 1 second.
 * 
 * ---
 * 
 * Effects > Misc
 * 
 *   Opacity Speed:
 *   - How fast does fade in/out work?
 *   - Lower is slower. Higher is faster.
 * 
 *   Move Duration:
 *   - How many frames does it take to move?
 *   - 60 frames = 1 second.
 * 
 * ---
 * 
 * Tint Colors
 * 
 *   Tint Duration:
 *   - How many frames do damage tints last?
 *   - 60 frames = 1 second.
 * 
 *   Selected:
 *   Inputting:
 *   HP Damage:
 *   HP Healing:
 *   MP Damage:
 *   MP Healing:
 *   TP Damage:
 *   TP Healing:
 *   - Tint color used for specific conditions.
 *   - Format: [Red, Green, Blue, Alpha]
 * 
 * ---
 * 
 * Tone Colors
 * 
 *   Dead Tone:
 *   Dying Tone:
 *   - Tone color used for dead/dying actors.
 *   - Format: [Red, Green, Blue, Gray]
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Portrait Settings
 * ============================================================================
 *
 * Settings for in-battle portraits.
 *
 * ---
 *
 * Properties
 * 
 *   Flip Horizontally?:
 *   - Flip portraits horizontally?
 * 
 *   Horizontal Rate:
 *   - At what percentage of the screen should portraits show up?
 *   - 0.0 = Left, 0.5 = Center, 1.0 = Right.
 * 
 *   Portrait Scale:
 *   - At what scale are the portraits displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 *
 * Entrance Settings
 * 
 *   Enter Offset X:
 *   - How many pixels to offset the entrance point?
 *   - Negative: left. Positive: right.
 * 
 *   Enter Duration:
 *   - How many frames does it take to enter?
 *   - 60 frames = 1 second.
 *
 * ---
 *
 * Opacity Settings
 * 
 *   Action Fade Out:
 *   - How many frames to fade out portraits on action portraits?
 *   - 60 frames = 1 second. Use 0 to disable.
 * 
 *   Targeting Opacity:
 *   - What opacity should be used when targeting actors/enemies?
 *   - Use numbers from 0 to 255.
 * 
 *   Targeting Opacity:
 *   - How fast does fade in/out work?
 *   - Lower is slower. Higher is faster.
 *
 * ---
 *
 * Frontview Settings
 * 
 *   Show During Input?:
 *   - Show portraits during input phase?
 * 
 *   Show During Action?:
 *   - Show portraits during actions?
 * 
 *   Target Actor Fade?:
 *   - Fade when targeting actors?
 * 
 *   Target Enemy Fade?:
 *   - Fade when targeting enemies?
 *
 * ---
 *
 * Sideview Settings
 * 
 *   Show During Input?:
 *   - Show portraits during input phase?
 * 
 *   Show During Action?:
 *   - Show portraits during actions?
 * 
 *   Target Actor Fade?:
 *   - Fade when targeting actors?
 * 
 *   Target Enemy Fade?:
 *   - Fade when targeting enemies?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle Scene Settings
 * ============================================================================
 *
 * Settings for the battle scene.
 *
 * ---
 *
 * General
 * 
 *   Compact Width?:
 *   - Make the status area more compact or have it extend the full width of
 *     the screen?
 * 
 *   Command Help Window?:
 *   - Show the Help Window for Actor Command Window and Party Command Window?
 * 
 *   Edge Buffer:
 *   - How many pixels of buffer room should there be from the screen edge?
 * 
 *   Max Rows:
 *   - What is the maximum number of displayed rows for battle windows?
 * 
 *   Window Scale:
 *   - What scale should windows appear at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * 
 *   Show Cancel Button?:
 *   - Show/hide the cancel button in battle?
 * 
 *   Show Shop Status?:
 *   - Show/hide the shop status window in battle?
 *   - Requires VisuMZ_1_ItemsEquipsCore!
 *
 * ---
 *
 * Position
 * 
 *   Initial UI Position:
 *   - Determines the initial position of the status UI.
 * 
 *     Move Center?:
 *     - Move the status UI from the initial position to the center?
 * 
 *   Actor Command Window:
 *   Party Command Window:
 *   Item Window:
 *   Skill Window:
 *   - Determines the location of the specified window in battle.
 *
 * ---
 *
 * Animation Offset
 * 
 *   Offset X:
 *   - How many pixels to offset the x position?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - How many pixels to offset the y position?
 *   - Negative: up. Positive: down.
 *
 * ---
 *
 * Base Offset
 * 
 *   Offset X:
 *   - How many pixels to offset the x position?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - How many pixels to offset the y position?
 *   - Negative: up. Positive: down.
 *
 * ---
 *
 * Stack Offset
 * 
 *   Offset X:
 *   - How many pixels to offset the x position?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - How many pixels to offset the y position?
 *   - Negative: up. Positive: down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battler Offset Settings
 * ============================================================================
 *
 * Offsets the battler sprite positions when using Frontview Battle UI with
 * frontview ONLY. Does NOT apply to Sideview.
 *
 * ---
 *
 * Settings
 * 
 *   Perform Offset?:
 *   - Offsets the battler sprite positions when using Frontview Battle UI with
 *     frontview ONLY.
 *   - NOT applied for Sideview.
 * 
 *   Offset X:
 *   - How much to offset the sprite positions by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the sprite positions by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Map Scene Settings
 * ============================================================================
 *
 * Settings for the map scene.
 *
 * ---
 *
 * General
 * 
 *   Show UI on Map?:
 *   - Show the frontview UI on the map by default?
 *   - Does NOT work with other battle layouts.
 * 
 *   Compact Width?:
 *   - Make the status area more compact or have it extend the full width of
 *     the screen?
 *
 * ---
 *
 * Position
 * 
 *   Initial UI Position:
 *   - Determines the initial position of the status UI.
 *
 * ---
 *
 * Fading
 * 
 *   Close Minimum Opacity:
 *   - Minimum opacity when the player is too close to the status window on the
 *     map screen.
 *
 * ---
 * 
 * Scaling
 * 
 *   Scale Ratio:
 *   - What is the scaling for this UI on the map scene?
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
 * * Irina
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.11: July 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where on the map scene so that State Tooltips no longer
 *    appear if the Frontview Battle UI is not visible. Fix made by Olivia.
 * ** Fixed a bug where after turning off map visibility, State Tooltips didn't
 *    work properly in battle. Fix made by Olivia.
 * 
 * Version 1.10: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a problem where in frontview, actor sprites temporarily appear
 *    when being damaged with certain plugin combinations.
 * * Feature Update!
 * ** The process of entering battle from the map will no longer cause the
 *    Frontview UI on the map to enter and exit out of transparency. Update
 *    made by Arisu.
 * 
 * Version 1.09: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a crash that would occur if no face graphics are used. Fix made
 *    by Irina.
 * * Compatibility Update!
 * ** Added better compatibility with VisuMZ_3_AutoSkillTriggers.
 * ** Added better compatibility with VisuMZ_3_StateTooltips.
 * 
 * Version 1.08: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug where the Break Shield icon is not showing. Fix by Olivia.
 * ** Fixed a bug where the touch hit box did not take into account the
 *    graphical offsets. Fix made by Olivia.
 * 
 * Version 1.07: July 13, 2023
 * * Feature Update!
 * ** When used together with VisuMZ_4_MultiLayerHpGauge, any visible enemy HP
 *    gauges will push down windows on a higher stack like item windows, skill
 *    windows, etc. in order to not obscure each other. Update by Olivia.
 * 
 * Version 1.06: June 15, 2023
 * * Bug Fixes!
 * ** If enemies are to go before an actor in battle, the animation will not
 *    play in the correct position. This should now be fixed. Fix by Olivia.
 * 
 * Version 1.05: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a visual issue with long actor names being cut off on the last
 *    letter. Fix made by Arisu.
 * 
 * Version 1.04: January 19, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would crash if you only have VisuMZ_1_ItemsEquipsCore
 *    installed but not the VisuMZ_1_SkillsStatesCore.
 * ** Fade Out event command will now hide the Frontview Battle UI on the map
 *    scene. This will not happen during battle. Fix made by Irina.
 * ** Fixed a bug that prevented the face sprites from being clickable when it
 *    came to selecting an actor as a target for items and skills in frontview.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** "Extra Features" section updated for "VisuMZ_1_ItemsEquipsCore"
 * *** Changed to the following:
 * **** Those using the Items and Equips Core plugin can have the Shop Status
 *      Window be displayed during battle to show information regarding the
 *      items selected during input. If you want this to appear for skills,
 *      too, make sure you also have VisuMZ_1_SkillsStatesCore installed.
 * 
 * Version 1.03: December 15, 2022
 * * Bug Fixes!
 * ** TPB battle systems with less than max characters should no longer crash
 *    the game. Fix made by Irina.
 * * Compatibility Update!
 * ** Now works properly with Combat Log and doesn't cause an extra window to
 *    appear suddenly. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added by Olivia and sponsored by AndyL.
 * *** Plugin Parameters > Battler Offset Settings
 * **** Offsets the battler sprite positions when using Frontview Battle UI
 *      with frontview ONLY. Does NOT apply for Sideview.
 * *** Plugin Parameters > Map Scene Settings > Scale Ratio
 * **** What is the scaling for this UI on the map scene?
 * 
 * Version 1.02: November 24, 2022
 * * Bug Fixes!
 * ** During the map phase, active up shift no longer occurs. Fix by Irina.
 * 
 * Version 1.01: November 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Battle Scene Settings > Command Help Window?
 * **** Show the Help Window for Actor Command Window and Party Command Window?
 *
 * Version 1.00 Official Release Date: December 5, 2022
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
 * @command MapUICustomTextActor
 * @text Map UI: Text Popup (Actor)
 * @desc Creates a custom text popup on the Frontview UI on map scene.
 * Targets specific actors.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select the ID(s) of the actor(s) you want to target.
 * @default ["1"]
 * 
 * @arg Text:str
 * @text Text
 * @desc What text do you wish to display?
 * @default Text
 * 
 * @arg TextColor:str
 * @text Text Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 *
 * @arg FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @arg FlashDuration:num
 * @text Flash Duration
 * @parent FlashColor:eval
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapUICustomTextParty
 * @text Map UI: Text Popup (Party)
 * @desc Creates a custom text popup on the Frontview UI on map scene.
 * Targets party index. Index values start at 0.
 *
 * @arg Index:arraynum
 * @text Party Index(es)
 * @type number[]
 * @desc Which party index to target?
 * Index values start at 0.
 * @default ["0"]
 * 
 * @arg Text:str
 * @text Text
 * @desc What text do you wish to display?
 * @default Text
 * 
 * @arg TextColor:str
 * @text Text Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 *
 * @arg FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @arg FlashDuration:num
 * @text Flash Duration
 * @parent FlashColor:eval
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapUICustomVariableActor
 * @text Map UI: Variable Popup (Actor)
 * @desc Creates a variable data popup on the Frontview UI on map scene.
 * Targets specific actors.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select the ID(s) of the actor(s) you want to target.
 * @default ["1"]
 * 
 * @arg Variable:num
 * @text Variable ID
 * @type variable
 * @desc Get data from which variable to display as a popup?
 * @default 1
 * 
 * @arg TextColor:str
 * @text Text Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 *
 * @arg FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @arg FlashDuration:num
 * @text Flash Duration
 * @parent FlashColor:eval
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapUICustomVariableParty
 * @text Map UI: Variable Popup (Party)
 * @desc Creates a variable data popup on the Frontview UI on map scene.
 * Targets party index. Index values start at 0.
 *
 * @arg Index:arraynum
 * @text Party Index(es)
 * @type number[]
 * @desc Which party index to target?
 * Index values start at 0.
 * @default ["0"]
 * 
 * @arg Variable:num
 * @text Variable ID
 * @type variable
 * @desc Get data from which variable to display as a popup?
 * @default 1
 * 
 * @arg TextColor:str
 * @text Text Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 *
 * @arg FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @arg FlashDuration:num
 * @text Flash Duration
 * @parent FlashColor:eval
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemMapUiVisibility
 * @text System: Map Frontview UI Visibility
 * @desc Sets the visibility of the Frontview UI on current map scene.
 * Requires the battle layout to be Frontview UI.
 *
 * @arg Visible:eval
 * @text Visible?
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Sets visibility of the Frontview UI on current map scene.
 * Requires the battle layout to be Frontview UI.
 * @default true
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
 * @param FrontviewBattleUI
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param StatusUI:struct
 * @text Status UI Settings
 * @type struct<StatusUI>
 * @desc Settings that alter the Status UI elements.
 * @default {"Position":"","DistanceBuffer:num":"32","GraphicsOffset":"","GraphicsOffsetX:num":"+0","GraphicsOffsetY:num":"-128","UiOffset":"","UiOffsetX:num":"+0","UiOffsetY:num":"-128","Graphics":"","GraphicsBackground":"","GraphicsBackgroundShow:eval":"true","GraphicsBackgroundFilename:str":"","GraphicsBackgroundOffset":"","GraphicsBackgroundOffsetX:num":"+0","GraphicsBackgroundOffsetY:num":"+0","GraphicsFaceMaskFilename:str":"","GraphicsFace":"","GraphicsFaceShow:eval":"true","GraphicsFaceOffset":"","GraphicsFaceOffsetX:num":"+0","GraphicsFaceOffsetY:num":"+0","GraphicsFaceMask":"","GraphicsFaceMaskUse:eval":"true","GraphicsFaceMaskRender":"","GraphicsFaceMaskShift:num":"48","GraphicsFaceMaskColor1:str":"#00aeef","GraphicsFaceMaskColor2:str":"#000000","GraphicsFaceMaskVertGradient:eval":"true","UI":"","UI_Name":"","UI_Name_Show:eval":"true","UI_Name_Angle:num":"18","UI_Name_Offset":"","UI_Name_OffsetX:num":"-8","UI_Name_OffsetY:num":"-60","UI_Name_Scale:num":"0.80","UI_HpGauge":"","UI_HpGauge_Show:eval":"true","UI_HpGauge_Angle:num":"18","UI_HpGauge_Offset":"","UI_HpGauge_OffsetX:num":"-8","UI_HpGauge_OffsetY:num":"+48","UI_HpGauge_Scale:num":"0.80","UI_MpGauge":"","UI_MpGauge_Show:eval":"true","UI_MpGauge_Angle:num":"18","UI_MpGauge_Offset":"","UI_MpGauge_OffsetX:num":"-20","UI_MpGauge_OffsetY:num":"72","UI_MpGauge_Scale:num":"0.80","UI_TpGauge":"","UI_TpGauge_Show:eval":"true","UI_TpGauge_Angle:num":"18","UI_TpGauge_Offset":"","UI_TpGauge_OffsetX:num":"-32","UI_TpGauge_OffsetY:num":"+96","UI_TpGauge_Scale:num":"0.80","UI_TpbGauge":"","UI_TpbGauge_Show:eval":"true","UI_TpbGauge_Angle:num":"18","UI_TpbGauge_Offset":"","UI_TpbGauge_OffsetX:num":"-61","UI_TpbGauge_OffsetY:num":"-36","UI_TpbGauge_Scale:num":"0.80","UI_StatesIcon":"","UI_StatesIcon_Show:eval":"true","UI_StatesIcon_Offset":"","UI_StatesIcon_OffsetX:num":"-52","UI_StatesIcon_OffsetY:num":"92","UI_StatesOverlay":"","UI_StatesOverlay_Show:eval":"true","UI_StatesOverlay_Offset":"","UI_StatesOverlay_OffsetX:num":"+0","UI_StatesOverlay_OffsetY:num":"+0","UI_AggroGauge":"","UI_AggroGauge_Show:eval":"true","UI_AggroGauge_Angle:num":"72","UI_AggroGauge_Offset":"","UI_AggroGauge_OffsetX:num":"-88","UI_AggroGauge_OffsetY:num":"+60","UI_AggroGauge_Scale:num":"0.6","UI_BravePoints":"","UI_BravePoints_Show:eval":"true","UI_BravePoints_Offset":"","UI_BravePoints_OffsetX:num":"+72","UI_BravePoints_OffsetY:num":"-36","UI_BravePoints_Scale:num":"1.0","UI_BreakShields":"","UI_BreakShields_Show:eval":"true","UI_BreakShields_Offset":"","UI_BreakShields_OffsetX:num":"-52","UI_BreakShields_OffsetY:num":"+60","UI_BoostPoints":"","UI_BoostPoints_Show:eval":"true","UI_BoostPoints_Angle:num":"-45","UI_BoostPoints_Offset":"","UI_BoostPoints_OffsetX:num":"+24","UI_BoostPoints_OffsetY:num":"-45","UI_BoostPoints_Scale:num":"0.80","Effects":"","ActiveShift":"","ActiveShiftX:num":"+0","ActiveShiftXSpeed:num":"2","ActiveShiftY:num":"-24","ActiveShiftYSpeed:num":"2","DamageShake":"","DamageShakeEnabled:eval":"true","DamageShakeDuration:num":"24","OpacitySpeed:num":"16","MoveDuration:num":"24","TintColors":"","DamageDuration:num":"60","Selected:eval":"[255, 255, 255, 64]","Inputting:eval":"[0, 255, 255, 64]","HpDamage:eval":"[255, 0, 0, 128]","HpHealing:eval":"[0, 255, 128, 128]","MpDamage:eval":"[128, 0, 255, 128]","MpHealing:eval":"[0, 128, 255, 128]","TpDamage:eval":"[128, 255, 0, 32]","TpHealing:eval":"[0, 255, 0, 32]","ToneColors":"","DeadTone:eval":"[0, 0, 0, 255]","DyingTone:eval":"[0, -64, -64, 64]"}
 *
 * @param Portrait:struct
 * @text Portrait Settings
 * @type struct<Portrait>
 * @desc Settings for in-battle portraits.
 * @default {"Properties":"","HorzRate:num":"0.85","Scale:num":"1.0","Entrance":"","EnterOffset:num":"+64","EnterDuration:num":"20","Fade":"","ActionFadeOut:num":"20","TargetOpacity:num":"64","OpacitySpeed:num":"16","Frontview":"","HorzFlip:eval":"false","FrontviewInput:eval":"true","FrontviewSubject:eval":"true","FrontviewTargetActor:eval":"false","FrontviewTargetEnemy:eval":"true","Sideview":"","SideviewInput:eval":"true","SideviewSubject:eval":"false","SideviewTargetActor:eval":"true","SideviewTargetEnemy:eval":"false"}
 *
 * @param Battle:struct
 * @text Battle Scene Settings
 * @type struct<Battle>
 * @desc Settings for the battle scene.
 * @default {"General":"","CompactWidth:eval":"true","EdgeBuffer:num":"60","MaxRows:num":"8","WindowScale:num":"0.75","ShowCancelButton:eval":"false","ShowShopStatus:eval":"true","Position":"","InitialUiPosition:str":"right","MoveCenter:eval":"true","Window_ActorCommand:str":"left","Window_PartyCommand:str":"left","Window_ItemList_Pos:str":"left","Window_SkillList_Pos:str":"left","AniOffset":"","AniOffsetX:num":"+0","AniOffsetY:num":"+32","BaseOffset":"","BaseOffsetX:num":"+0","BaseOffsetY:num":"+18","StackOffset":"","StackOffsetX:num":"+16","StackOffsetY:num":"+16"}
 *
 * @param Battler:struct
 * @text Battler Offset Settings
 * @parent Battle:struct
 * @type struct<Battler>
 * @desc Settings for battler sprite offsets when using the Frontview Battle UI with frontview ONLY. NOT Sideview.
 * @default {"Enable:eval":"true","OffsetX:num":"+0","OffsetY:num":"-96"}
 *
 * @param Map:struct
 * @text Map Scene Settings
 * @type struct<Map>
 * @desc Settings for the map scene.
 * @default {"General":"","ShowUiOnMap:eval":"true","CompactWidth:eval":"true","Position":"","InitialUiPosition:str":"left","Fading":"","MinProxOpacity:num":"128","Scaling":"","Scale:num":"1.0"}
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
 * Status UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusUI:
 *
 * @param Position
 *
 * @param DistanceBuffer:num
 * @text Distance Buffer
 * @parent Position
 * @type number
 * @min 0
 * @desc How many pixels of buffer range is there between status UI elements?
 * @default 32
 *
 * @param GraphicsOffset
 * @text Graphics Offset
 * @parent Position
 *
 * @param GraphicsOffsetX:num
 * @text Offset X
 * @parent GraphicsOffset
 * @desc How many pixels to offset the graphics x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param GraphicsOffsetY:num
 * @text Offset Y
 * @parent GraphicsOffset
 * @desc How many pixels to offset the graphics y position?
 * Negative: up. Positive: down.
 * @default -128
 *
 * @param UiOffset
 * @text UI Offset
 * @parent Position
 *
 * @param UiOffsetX:num
 * @text Offset X
 * @parent UiOffset
 * @desc How many pixels to offset the UI x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param UiOffsetY:num
 * @text Offset Y
 * @parent UiOffset
 * @desc How many pixels to offset the UI y position?
 * Negative: up. Positive: down.
 * @default -128
 *
 * @param Graphics
 * @text Graphics
 *
 * @param GraphicsBackground
 * @text Background
 * @parent Graphics
 *
 * @param GraphicsBackgroundShow:eval
 * @text Show?
 * @parent GraphicsBackground
 * @type boolean
 * @on Show
 * @off Hide
 * @desc This is the back image displayed for the graphics set.
 * @default true
 *
 * @param GraphicsBackgroundFilename:str
 * @text Filename
 * @parent GraphicsBackground
 * @type file
 * @dir img/system/
 * @require 1
 * @desc If you don't want to use the pre-rendered background,
 * pick a graphic from the /img/system/ folder.
 * @default 
 *
 * @param GraphicsBackgroundOffset
 * @text Offset
 * @parent GraphicsBackground
 *
 * @param GraphicsBackgroundOffsetX:num
 * @text Offset X
 * @parent GraphicsBackgroundOffset
 * @desc How many pixels to offset the background x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param GraphicsBackgroundOffsetY:num
 * @text Offset Y
 * @parent GraphicsBackgroundOffset
 * @desc How many pixels to offset the background y position?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param GraphicsFace
 * @text Face Graphic
 * @parent Graphics
 *
 * @param GraphicsFaceShow:eval
 * @text Show?
 * @parent GraphicsFace
 * @type boolean
 * @on Show
 * @off Hide
 * @desc This is the face image displayed for the graphics set.
 * @default true
 *
 * @param GraphicsFaceOffset
 * @text Offset
 * @parent GraphicsFace
 *
 * @param GraphicsFaceOffsetX:num
 * @text Offset X
 * @parent GraphicsFaceOffset
 * @desc How many pixels to offset the face x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param GraphicsFaceOffsetY:num
 * @text Offset Y
 * @parent GraphicsFaceOffset
 * @desc How many pixels to offset the face y position?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param GraphicsFaceMask
 * @text Face Mask
 * @parent Graphics
 *
 * @param GraphicsFaceMaskUse:eval
 * @text Use?
 * @parent GraphicsFaceMask
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use a mask for the face graphic?
 * @default true
 *
 * @param GraphicsFaceMaskFilename:str
 * @text Filename
 * @parent GraphicsBackground
 * @type file
 * @dir img/system/
 * @require 1
 * @desc If you don't want to use the pre-rendered face mask,
 * pick a mask from the /img/system/ folder.
 * @default 
 *
 * @param GraphicsFaceMaskRender
 * @text Render
 * @parent GraphicsFaceMask
 *
 * @param GraphicsFaceMaskShift:num
 * @text Distance Shift
 * @parent GraphicsFaceMaskRender
 * @desc Determines the distance shift for the pre-rendered triangle.
 * @default 48
 *
 * @param GraphicsFaceMaskColor1:str
 * @text Color 1
 * @parent GraphicsFaceMaskRender
 * @desc Use #rrggbb for custom color.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #00aeef
 *
 * @param GraphicsFaceMaskColor2:str
 * @text Color 2
 * @parent GraphicsFaceMaskRender
 * @desc Use #rrggbb for custom color.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
 *
 * @param GraphicsFaceMaskVertGradient:eval
 * @text Vertical Gradient
 * @parent GraphicsFaceMaskRender
 * @type boolean
 * @on Vertical Gradient
 * @off Horizontal Gradient
 * @desc Use a vertical gradient or a horizontal gradient?
 * @default true
 *
 * @param UI
 * @text UI
 *
 * @param UI_Name
 * @text Name
 * @parent UI
 *
 * @param UI_Name_Show:eval
 * @text Show?
 * @parent UI_Name
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_Name_Angle:num
 * @text Angle
 * @parent UI_Name
 * @desc What angle should this element be displayed at?
 * @default 18
 *
 * @param UI_Name_Offset
 * @text Offset
 * @parent UI_Name
 *
 * @param UI_Name_OffsetX:num
 * @text Offset X
 * @parent UI_Name_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -8
 *
 * @param UI_Name_OffsetY:num
 * @text Offset Y
 * @parent UI_Name_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default -60
 *
 * @param UI_Name_Scale:num
 * @text Scale
 * @parent UI_Name
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 *
 * @param UI_HpGauge
 * @text HP Gauge
 * @parent UI
 *
 * @param UI_HpGauge_Show:eval
 * @text Show?
 * @parent UI_HpGauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_HpGauge_Angle:num
 * @text Angle
 * @parent UI_HpGauge
 * @desc What angle should this element be displayed at?
 * @default 18
 *
 * @param UI_HpGauge_Offset
 * @text Offset
 * @parent UI_HpGauge
 *
 * @param UI_HpGauge_OffsetX:num
 * @text Offset X
 * @parent UI_HpGauge_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -8
 *
 * @param UI_HpGauge_OffsetY:num
 * @text Offset Y
 * @parent UI_HpGauge_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +48
 *
 * @param UI_HpGauge_Scale:num
 * @text Scale
 * @parent UI_HpGauge
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 *
 * @param UI_MpGauge
 * @text MP Gauge
 * @parent UI
 *
 * @param UI_MpGauge_Show:eval
 * @text Show?
 * @parent UI_MpGauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_MpGauge_Angle:num
 * @text Angle
 * @parent UI_MpGauge
 * @desc What angle should this element be displayed at?
 * @default 18
 *
 * @param UI_MpGauge_Offset
 * @text Offset
 * @parent UI_MpGauge
 *
 * @param UI_MpGauge_OffsetX:num
 * @text Offset X
 * @parent UI_MpGauge_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -20
 *
 * @param UI_MpGauge_OffsetY:num
 * @text Offset Y
 * @parent UI_MpGauge_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default 72
 *
 * @param UI_MpGauge_Scale:num
 * @text Scale
 * @parent UI_MpGauge
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 *
 * @param UI_TpGauge
 * @text TP Gauge
 * @parent UI
 *
 * @param UI_TpGauge_Show:eval
 * @text Show?
 * @parent UI_TpGauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_TpGauge_Angle:num
 * @text Angle
 * @parent UI_TpGauge
 * @desc What angle should this element be displayed at?
 * @default 18
 *
 * @param UI_TpGauge_Offset
 * @text Offset
 * @parent UI_TpGauge
 *
 * @param UI_TpGauge_OffsetX:num
 * @text Offset X
 * @parent UI_TpGauge_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -32
 *
 * @param UI_TpGauge_OffsetY:num
 * @text Offset Y
 * @parent UI_TpGauge_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +96
 *
 * @param UI_TpGauge_Scale:num
 * @text Scale
 * @parent UI_TpGauge
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 *
 * @param UI_TpbGauge
 * @text TPB/ATB Gauge
 * @parent UI
 *
 * @param UI_TpbGauge_Show:eval
 * @text Show?
 * @parent UI_TpbGauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_TpbGauge_Angle:num
 * @text Angle
 * @parent UI_TpbGauge
 * @desc What angle should this element be displayed at?
 * @default 18
 *
 * @param UI_TpbGauge_Offset
 * @text Offset
 * @parent UI_TpbGauge
 *
 * @param UI_TpbGauge_OffsetX:num
 * @text Offset X
 * @parent UI_TpbGauge_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -61
 *
 * @param UI_TpbGauge_OffsetY:num
 * @text Offset Y
 * @parent UI_TpbGauge_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default -36
 *
 * @param UI_TpbGauge_Scale:num
 * @text Scale
 * @parent UI_TpbGauge
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 *
 * @param UI_StatesIcon
 * @text State Icon
 * @parent UI
 *
 * @param UI_StatesIcon_Show:eval
 * @text Show?
 * @parent UI_StatesIcon
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_StatesIcon_Offset
 * @text Offset
 * @parent UI_StatesIcon
 *
 * @param UI_StatesIcon_OffsetX:num
 * @text Offset X
 * @parent UI_StatesIcon_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -52
 *
 * @param UI_StatesIcon_OffsetY:num
 * @text Offset Y
 * @parent UI_StatesIcon_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default 92
 *
 * @param UI_StatesOverlay
 * @text State Overlay
 * @parent UI
 *
 * @param UI_StatesOverlay_Show:eval
 * @text Show?
 * @parent UI_StatesOverlay
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_StatesOverlay_Offset
 * @text Offset
 * @parent UI_StatesOverlay
 *
 * @param UI_StatesOverlay_OffsetX:num
 * @text Offset X
 * @parent UI_StatesOverlay_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param UI_StatesOverlay_OffsetY:num
 * @text Offset Y
 * @parent UI_StatesOverlay_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param UI_AggroGauge
 * @text Aggro Gauge
 * @parent UI
 *
 * @param UI_AggroGauge_Show:eval
 * @text Show?
 * @parent UI_AggroGauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_AggroGauge_Angle:num
 * @text Angle
 * @parent UI_AggroGauge
 * @desc What angle should this element be displayed at?
 * @default 72
 *
 * @param UI_AggroGauge_Offset
 * @text Offset
 * @parent UI_AggroGauge
 *
 * @param UI_AggroGauge_OffsetX:num
 * @text Offset X
 * @parent UI_AggroGauge_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -88
 *
 * @param UI_AggroGauge_OffsetY:num
 * @text Offset Y
 * @parent UI_AggroGauge_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +60
 *
 * @param UI_AggroGauge_Scale:num
 * @text Scale
 * @parent UI_AggroGauge
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.6
 *
 * @param UI_BravePoints
 * @text Brave Points
 * @parent UI
 *
 * @param UI_BravePoints_Show:eval
 * @text Show?
 * @parent UI_BravePoints
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_BravePoints_Offset
 * @text Offset
 * @parent UI_BravePoints
 *
 * @param UI_BravePoints_OffsetX:num
 * @text Offset X
 * @parent UI_BravePoints_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default +72
 *
 * @param UI_BravePoints_OffsetY:num
 * @text Offset Y
 * @parent UI_BravePoints_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default -36
 *
 * @param UI_BravePoints_Scale:num
 * @text Scale
 * @parent UI_BravePoints
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 1.0
 *
 * @param UI_BreakShields
 * @text Break Shields
 * @parent UI
 *
 * @param UI_BreakShields_Show:eval
 * @text Show?
 * @parent UI_BreakShields
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_BreakShields_Offset
 * @text Offset
 * @parent UI_BreakShields
 *
 * @param UI_BreakShields_OffsetX:num
 * @text Offset X
 * @parent UI_BreakShields_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -52
 *
 * @param UI_BreakShields_OffsetY:num
 * @text Offset Y
 * @parent UI_BreakShields_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +60
 *
 * @param UI_BoostPoints
 * @text Boost Points
 * @parent UI
 *
 * @param UI_BoostPoints_Show:eval
 * @text Show?
 * @parent UI_BoostPoints
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_BoostPoints_Angle:num
 * @text Angle
 * @parent UI_BoostPoints
 * @desc What angle should this element be displayed at?
 * @default -45
 *
 * @param UI_BoostPoints_Offset
 * @text Offset
 * @parent UI_BoostPoints
 *
 * @param UI_BoostPoints_OffsetX:num
 * @text Offset X
 * @parent UI_BoostPoints_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default +24
 *
 * @param UI_BoostPoints_OffsetY:num
 * @text Offset Y
 * @parent UI_BoostPoints_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default -45
 *
 * @param UI_BoostPoints_Scale:num
 * @text Scale
 * @parent UI_Scale
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 * 
 * @param Effects
 *
 * @param ActiveShift
 * @text Active Shift
 * @parent Effects
 *
 * @param ActiveShiftX:num
 * @text X Distance
 * @parent ActiveShift
 * @desc If an actor is the active battler, shift x value.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param ActiveShiftXSpeed:num
 * @text Shift Speed
 * @parent ActiveShiftX:num
 * @type number
 * @min 1
 * @desc How many pixels should be shifted each frame?
 * 60 frames = 1 second.
 * @default 2
 *
 * @param ActiveShiftY:num
 * @text Y Distance
 * @parent ActiveShift
 * @desc If an actor is the active battler, shift y value.
 * Negative: up. Positive: down.
 * @default -24
 *
 * @param ActiveShiftYSpeed:num
 * @text Shift Speed
 * @parent ActiveShiftY:num
 * @type number
 * @min 1
 * @desc How many pixels should be shifted each frame?
 * 60 frames = 1 second.
 * @default 2
 *
 * @param DamageShake
 * @text Damage Shake
 * @parent Effects
 *
 * @param DamageShakeEnabled:eval
 * @text Enable?
 * @parent DamageShake
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable shake effects when taking HP damage?
 * @default true
 *
 * @param DamageShakeDuration:num
 * @text Duration
 * @parent DamageShake
 * @type number
 * @min 1
 * @desc How many frames should this effect last?
 * 60 frames = 1 second.
 * @default 24
 *
 * @param OpacitySpeed:num
 * @text Opacity Speed
 * @parent Effects
 * @desc How fast does fade in/out work?
 * Lower is slower. Higher is faster.
 * @default 16
 *
 * @param MoveDuration:num
 * @text Move Duration
 * @parent Effects
 * @desc How many frames does it take to move?
 * 60 frames = 1 second.
 * @default 24
 * 
 * @param TintColors
 * @text Tint Colors
 *
 * @param DamageDuration:num
 * @text Tint Duration
 * @parent TintColors
 * @desc How many frames do damage tints last?
 * 60 frames = 1 second.
 * @default 60
 *
 * @param Selected:eval
 * @text Selected
 * @parent TintColors
 * @desc Tint color used for selected actors.
 * Format: [Red, Green, Blue, Alpha]
 * @default [255, 255, 255, 64]
 *
 * @param Inputting:eval
 * @text Inputting
 * @parent TintColors
 * @desc Tint color used for inputting actors.
 * Format: [Red, Green, Blue, Alpha]
 * @default [0, 255, 255, 64]
 *
 * @param HpDamage:eval
 * @text HP Damage
 * @parent TintColors
 * @desc Tint color used for HP Damage.
 * Format: [Red, Green, Blue, Alpha]
 * @default [255, 0, 0, 128]
 *
 * @param HpHealing:eval
 * @text HP Healing
 * @parent TintColors
 * @desc Tint color used for HP Healing.
 * Format: [Red, Green, Blue, Alpha]
 * @default [0, 255, 128, 128]
 *
 * @param MpDamage:eval
 * @text MP Damage
 * @parent TintColors
 * @desc Tint color used for MP Damage.
 * Format: [Red, Green, Blue, Alpha]
 * @default [128, 0, 255, 128]
 *
 * @param MpHealing:eval
 * @text MP Healing
 * @parent TintColors
 * @desc Tint color used for MP Healing.
 * Format: [Red, Green, Blue, Alpha]
 * @default [0, 128, 255, 128]
 *
 * @param TpDamage:eval
 * @text TP Damage
 * @parent TintColors
 * @desc Tint color used for TP Damage.
 * Format: [Red, Green, Blue, Alpha]
 * @default [128, 255, 0, 32]
 *
 * @param TpHealing:eval
 * @text TP Healing
 * @parent TintColors
 * @desc Tint color used for TP Healing.
 * Format: [Red, Green, Blue, Alpha]
 * @default [0, 255, 0, 32]
 * 
 * @param ToneColors
 * @text Tone Colors
 *
 * @param DeadTone:eval
 * @text Dead Tone
 * @parent ToneColors
 * @desc Tone color used for dead actors.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 255]
 *
 * @param DyingTone:eval
 * @text Dying Tone
 * @parent ToneColors
 * @desc Tone color used for dying actors.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, -64, -64, 64]
 *
 */
/* ----------------------------------------------------------------------------
 * Portrait Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Portrait:
 *
 * @param Properties
 *
 * @param HorzFlip:eval
 * @text Flip Horizontally?
 * @parent Frontview
 * @type boolean
 * @on Flip
 * @off Don't Flip
 * @desc Flip portraits horizontally?
 * @default false
 *
 * @param HorzRate:num
 * @text Horizontal Rate
 * @parent Properties
 * @desc At what percentage of the screen should portraits show up?
 * 0.0 = Left, 0.5 = Center, 1.0 = Right.
 * @default 0.85
 *
 * @param Scale:num
 * @text Portrait Scale
 * @parent Properties
 * @desc At what scale are the portraits displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 1.0
 *
 * @param Entrance
 * @text Entrance Settings
 *
 * @param EnterOffset:num
 * @text Enter Offset X
 * @parent Entrance
 * @desc How many pixels to offset the entrance point?
 * Negative: left. Positive: right.
 * @default +64
 *
 * @param EnterDuration:num
 * @text Enter Duration
 * @parent Entrance
 * @desc How many frames does it take to enter?
 * 60 frames = 1 second.
 * @default 20
 *
 * @param Fade
 * @text Opacity Settings
 *
 * @param ActionFadeOut:num
 * @text Action Fade Out
 * @parent Fade
 * @desc How many frames to fade out portraits on action portraits?
 * 60 frames = 1 second. Use 0 to disable.
 * @default 20
 *
 * @param TargetOpacity:num
 * @text Targeting Opacity
 * @parent Fade
 * @desc What opacity should be used when targeting actors/enemies?
 * Use numbers from 0 to 255.
 * @default 64
 *
 * @param OpacitySpeed:num
 * @text Targeting Opacity
 * @parent Fade
 * @desc How fast does fade in/out work?
 * Lower is slower. Higher is faster.
 * @default 16
 *
 * @param Frontview
 * @text Frontview Settings
 *
 * @param FrontviewInput:eval
 * @text Show During Input?
 * @parent Frontview
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show portraits during input phase?
 * @default true
 *
 * @param FrontviewSubject:eval
 * @text Show During Action?
 * @parent Frontview
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show portraits during actions?
 * @default true
 *
 * @param FrontviewTargetActor:eval
 * @text Target Actor Fade?
 * @parent Frontview
 * @type boolean
 * @on Fade
 * @off Don't Fade
 * @desc Fade when targeting actors?
 * @default false
 *
 * @param FrontviewTargetEnemy:eval
 * @text Target Enemy Fade?
 * @parent Frontview
 * @type boolean
 * @on Fade
 * @off Don't Fade
 * @desc Fade when targeting enemies?
 * @default true
 *
 * @param Sideview
 * @text Sideview Settings
 *
 * @param SideviewInput:eval
 * @text Show During Input?
 * @parent Sideview
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show portraits during input phase?
 * @default true
 *
 * @param SideviewSubject:eval
 * @text Show During Action?
 * @parent Sideview
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show portraits during actions?
 * @default false
 *
 * @param SideviewTargetActor:eval
 * @text Target Actor Fade?
 * @parent Sideview
 * @type boolean
 * @on Fade
 * @off Don't Fade
 * @desc Fade when targeting actors?
 * @default true
 *
 * @param SideviewTargetEnemy:eval
 * @text Target Enemy Fade?
 * @parent Sideview
 * @type boolean
 * @on Fade
 * @off Don't Fade
 * @desc Fade when targeting enemies?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Battle Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battle:
 *
 * @param General
 *
 * @param CompactWidth:eval
 * @text Compact Width?
 * @parent General
 * @type boolean
 * @on Compact
 * @off Full Width
 * @desc Make the status area more compact or have it extend the full width of the screen?
 * @default true
 *
 * @param CommandHelpWindow:eval
 * @text Command Help Window?
 * @parent General
 * @type boolean
 * @on Show Help Window
 * @off Hide Help Window
 * @desc Show the Help Window for Actor Command Window and Party Command Window?
 * @default false
 *
 * @param EdgeBuffer:num
 * @text Edge Buffer
 * @parent General
 * @type number
 * @desc How many pixels of buffer room should there be from the screen edge?
 * @default 60
 *
 * @param MaxRows:num
 * @text Max Rows
 * @parent General
 * @type number
 * @min 1
 * @desc What is the maximum number of displayed rows for battle windows?
 * @default 8
 *
 * @param WindowScale:num
 * @text Window Scale
 * @parent General
 * @desc What scale should windows appear at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.75
 *
 * @param ShowCancelButton:eval
 * @text Show Cancel Button?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show/hide the cancel button in battle?
 * @default false
 *
 * @param ShowShopStatus:eval
 * @text Show Shop Status?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show/hide the shop status window in battle?
 * Requires VisuMZ_1_ItemsEquipsCore!
 * @default true
 *
 * @param Position
 *
 * @param InitialUiPosition:str
 * @text Initial UI Position
 * @parent Position
 * @type select
 * @option left
 * @option center
 * @option right
 * @desc Determines the initial position of the status UI.
 * @default right
 *
 * @param MoveCenter:eval
 * @text Move Center?
 * @parent InitialUiPosition:str
 * @type boolean
 * @on Move
 * @off Stay
 * @desc Move the status UI from the initial position to the center?
 * @default true
 *
 * @param Window_ActorCommand:str
 * @text Actor Command Window
 * @parent Position
 * @type select
 * @option left
 * @option right
 * @desc Determines the location of the actor command window in battle.
 * @default left
 *
 * @param Window_PartyCommand:str
 * @text Party Command Window
 * @parent Position
 * @type select
 * @option left
 * @option right
 * @desc Determines the location of the party command window in battle.
 * @default left
 *
 * @param Window_ItemList_Pos:str
 * @text Item Window
 * @parent Position
 * @type select
 * @option left
 * @option right
 * @desc Determines the location of the item window in battle.
 * @default left
 *
 * @param Window_SkillList_Pos:str
 * @text Skill Window
 * @parent Position
 * @type select
 * @option left
 * @option right
 * @desc Determines the location of the skill window in battle.
 * @default left
 *
 * @param AniOffset
 * @text Animation Offset
 *
 * @param AniOffsetX:num
 * @text Offset X
 * @parent AniOffset
 * @desc How many pixels to offset the animation x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param AniOffsetY:num
 * @text Offset Y
 * @parent AniOffset
 * @desc How many pixels to offset the animation y position?
 * Negative: up. Positive: down.
 * @default +32
 *
 * @param BaseOffset
 * @text Base Offset
 *
 * @param BaseOffsetX:num
 * @text Offset X
 * @parent BaseOffset
 * @desc How many pixels to offset the base x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param BaseOffsetY:num
 * @text Offset Y
 * @parent BaseOffset
 * @desc How many pixels to offset the base y position?
 * Negative: up. Positive: down.
 * @default +18
 *
 * @param StackOffset
 * @text Stack Offset
 *
 * @param StackOffsetX:num
 * @text Offset X
 * @parent StackOffset
 * @desc How many pixels to offset the stack x position?
 * Negative: left. Positive: right.
 * @default +16
 *
 * @param StackOffsetY:num
 * @text Offset Y
 * @parent StackOffset
 * @desc How many pixels to offset the stack y position?
 * Negative: up. Positive: down.
 * @default +16
 *
 */
/* ----------------------------------------------------------------------------
 * Battler Offset Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battler:
 *
 * @param Enable:eval
 * @text Perform Offset?
 * @type boolean
 * @on Do Offset
 * @off Don't Offset
 * @desc Offsets the battler sprite positions when using Frontview Battle UI with frontview ONLY. NOT applied for Sideview.
 * @default true
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the sprite positions by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the sprite positions by?
 * Negative goes up. Positive goes down.
 * @default -96
 *
 */
/* ----------------------------------------------------------------------------
 * Map Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Map:
 *
 * @param General
 *
 * @param ShowUiOnMap:eval
 * @text Show UI on Map?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the frontview UI on the map by default?
 * Does NOT work with other battle layouts.
 * @default true
 *
 * @param CompactWidth:eval
 * @text Compact Width?
 * @parent General
 * @type boolean
 * @on Compact
 * @off Full Width
 * @desc Make the status area more compact or have it extend the full width of the screen?
 * @default true
 * 
 * @param Position
 *
 * @param InitialUiPosition:str
 * @text Initial UI Position
 * @parent Position
 * @type select
 * @option left
 * @option center
 * @option right
 * @desc Determines the initial position of the status UI.
 * @default left
 *
 * @param Fading
 *
 * @param MinProxOpacity:num
 * @text Close Minimum Opacity
 * @parent Fading
 * @type number
 * @min 0
 * @desc Minimum opacity when the player is too close to the
 * status window on the map screen.
 * @default 128
 *
 * @param Scaling
 *
 * @param Scale:num
 * @text Scale Ratio
 * @parent Scaling
 * @desc What is the scaling for this UI on the map scene?
 * @default 1.0
 *
 */
//=============================================================================

const _0x31b7e4=_0x5dad;(function(_0x506665,_0x43a7a3){const _0x180a1c=_0x5dad,_0x119a39=_0x506665();while(!![]){try{const _0x55b501=parseInt(_0x180a1c(0x2c0))/0x1*(-parseInt(_0x180a1c(0x1aa))/0x2)+-parseInt(_0x180a1c(0x1c3))/0x3+-parseInt(_0x180a1c(0x1ef))/0x4*(-parseInt(_0x180a1c(0x1a8))/0x5)+-parseInt(_0x180a1c(0x144))/0x6+-parseInt(_0x180a1c(0x2d1))/0x7+parseInt(_0x180a1c(0x10f))/0x8+parseInt(_0x180a1c(0x1b5))/0x9;if(_0x55b501===_0x43a7a3)break;else _0x119a39['push'](_0x119a39['shift']());}catch(_0x327fb6){_0x119a39['push'](_0x119a39['shift']());}}}(_0x9369,0x68c67));var label=_0x31b7e4(0x25a),tier=tier||0x0,dependencies=[_0x31b7e4(0x142),_0x31b7e4(0x70)],pluginData=$plugins[_0x31b7e4(0xf2)](function(_0x1998c1){const _0x4c7240=_0x31b7e4;return _0x1998c1[_0x4c7240(0x22e)]&&_0x1998c1[_0x4c7240(0x83)][_0x4c7240(0x2da)]('['+label+']');})[0x0];VisuMZ[label][_0x31b7e4(0x1e7)]=VisuMZ[label][_0x31b7e4(0x1e7)]||{},VisuMZ[_0x31b7e4(0x1a7)]=function(_0x315d6d,_0x5ab8dd){const _0x3b2e10=_0x31b7e4;for(const _0x256102 in _0x5ab8dd){if(_0x256102[_0x3b2e10(0x19a)](/(.*):(.*)/i)){const _0x71dd2e=String(RegExp['$1']),_0x4e540e=String(RegExp['$2'])[_0x3b2e10(0x1ae)]()[_0x3b2e10(0x97)]();let _0x3190c8,_0x6c91e8,_0x3efdaa;switch(_0x4e540e){case'NUM':_0x3190c8=_0x5ab8dd[_0x256102]!==''?Number(_0x5ab8dd[_0x256102]):0x0;break;case _0x3b2e10(0x192):_0x6c91e8=_0x5ab8dd[_0x256102]!==''?JSON[_0x3b2e10(0x7d)](_0x5ab8dd[_0x256102]):[],_0x3190c8=_0x6c91e8[_0x3b2e10(0x2bf)](_0x5067c3=>Number(_0x5067c3));break;case'EVAL':_0x3190c8=_0x5ab8dd[_0x256102]!==''?eval(_0x5ab8dd[_0x256102]):null;break;case _0x3b2e10(0xc1):_0x6c91e8=_0x5ab8dd[_0x256102]!==''?JSON[_0x3b2e10(0x7d)](_0x5ab8dd[_0x256102]):[],_0x3190c8=_0x6c91e8['map'](_0x54c955=>eval(_0x54c955));break;case'JSON':_0x3190c8=_0x5ab8dd[_0x256102]!==''?JSON['parse'](_0x5ab8dd[_0x256102]):'';break;case _0x3b2e10(0x310):_0x6c91e8=_0x5ab8dd[_0x256102]!==''?JSON['parse'](_0x5ab8dd[_0x256102]):[],_0x3190c8=_0x6c91e8[_0x3b2e10(0x2bf)](_0x1e924b=>JSON[_0x3b2e10(0x7d)](_0x1e924b));break;case _0x3b2e10(0x260):_0x3190c8=_0x5ab8dd[_0x256102]!==''?new Function(JSON[_0x3b2e10(0x7d)](_0x5ab8dd[_0x256102])):new Function(_0x3b2e10(0x109));break;case _0x3b2e10(0x30d):_0x6c91e8=_0x5ab8dd[_0x256102]!==''?JSON[_0x3b2e10(0x7d)](_0x5ab8dd[_0x256102]):[],_0x3190c8=_0x6c91e8[_0x3b2e10(0x2bf)](_0xe52f5c=>new Function(JSON[_0x3b2e10(0x7d)](_0xe52f5c)));break;case _0x3b2e10(0x28d):_0x3190c8=_0x5ab8dd[_0x256102]!==''?String(_0x5ab8dd[_0x256102]):'';break;case _0x3b2e10(0x2e5):_0x6c91e8=_0x5ab8dd[_0x256102]!==''?JSON[_0x3b2e10(0x7d)](_0x5ab8dd[_0x256102]):[],_0x3190c8=_0x6c91e8['map'](_0x3c23a6=>String(_0x3c23a6));break;case _0x3b2e10(0xf4):_0x3efdaa=_0x5ab8dd[_0x256102]!==''?JSON['parse'](_0x5ab8dd[_0x256102]):{},_0x3190c8=VisuMZ['ConvertParams']({},_0x3efdaa);break;case _0x3b2e10(0x266):_0x6c91e8=_0x5ab8dd[_0x256102]!==''?JSON[_0x3b2e10(0x7d)](_0x5ab8dd[_0x256102]):[],_0x3190c8=_0x6c91e8[_0x3b2e10(0x2bf)](_0x3ea1d0=>VisuMZ['ConvertParams']({},JSON['parse'](_0x3ea1d0)));break;default:continue;}_0x315d6d[_0x71dd2e]=_0x3190c8;}}return _0x315d6d;},(_0x4ea8ba=>{const _0x20b147=_0x31b7e4,_0x580d54=_0x4ea8ba[_0x20b147(0x230)];for(const _0x25f217 of dependencies){if(!Imported[_0x25f217]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x580d54,_0x25f217)),SceneManager['exit']();break;}}const _0x551474=_0x4ea8ba[_0x20b147(0x83)];if(_0x551474['match'](/\[Version[ ](.*?)\]/i)){const _0x5f1329=Number(RegExp['$1']);_0x5f1329!==VisuMZ[label][_0x20b147(0x156)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x20b147(0xaf)](_0x580d54,_0x5f1329)),SceneManager[_0x20b147(0x2db)]());}if(_0x551474['match'](/\[Tier[ ](\d+)\]/i)){const _0x55a02a=Number(RegExp['$1']);_0x55a02a<tier?(alert(_0x20b147(0x304)[_0x20b147(0xaf)](_0x580d54,_0x55a02a,tier)),SceneManager[_0x20b147(0x2db)]()):tier=Math['max'](_0x55a02a,tier);}VisuMZ[_0x20b147(0x1a7)](VisuMZ[label][_0x20b147(0x1e7)],_0x4ea8ba[_0x20b147(0x8f)]);})(pluginData);if(VisuMZ[_0x31b7e4(0x2d9)][_0x31b7e4(0x156)]<1.7){let text='';text+='VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20',text+=_0x31b7e4(0x245),alert(text),SceneManager['exit']();}if(VisuMZ[_0x31b7e4(0x20b)][_0x31b7e4(0x156)]<1.7){let text='';text+='VisuMZ_1_BattleCore\x20needs\x20to\x20be\x20updated\x20',text+=_0x31b7e4(0x245),alert(text),SceneManager[_0x31b7e4(0x2db)]();}function _0x9369(){const _0xef9d9f=['gradientFillRect','setHome','updateProperties','isGuard','bravePoints','ceil','Window_ItemList_maxCols','_maskBackground','ActiveShiftX','FlashDuration','onMouseEnterStateTooltips','Sprite_Name_outlineColor','FV_OPACITY_RATE','inputting','center','createItemWindow','FACE_MASK_RENDER','_finishInitMembers','UI_BoostPoints_OffsetY','createFrontviewBattleUiSprites','_action','_actorWindow','GRAPHICS_OFFSET','SV_FADE_SELECT','targetDamageOpacity','_lastBravePoints','stringify','shouldAdjustForFrontviewUiLayout','maxRows','DamageDuration','frontviewBattleUiItemRect','GraphicsFaceMaskShift','createMpGauge','MpDamage','Settings','Window_BattleSkill_show','initFrontviewBattleUiMapSettings','create','contents','adjustFrontviewUiPosition','_lastSubjectFilename','checkShakeContainer','5348WMCFKP','SideviewSubject','_backgroundSprite','setFrame','_subjectContainer','ENTER_DURATION','call','STATES','getBattlePortraitFilename','_bravePointsSprite','getFrontviewUiPortraitData','setupVisualStateEffectsPopup','_breakShieldSprite','Healing','hitTest','isPlaying','updateActiveContainer','isActor','createContainers','floor','GraphicsFaceMaskColor2','Scene_Map_createAllWindows','isForOpponent','createBravePoints','UI_TpGauge_OffsetY','_tpbGauge','opacity','UI_BreakShields_OffsetX','BattleCore','Window_Base_open','_frontviewBattleUiBackgroundRender','_lastMpValue','_faceGraphicIndex','isCTB','_customModified','currentFaceGraphicIndex','battleMembers','createFrontviewUiBattlePortraits','isAggroGaugeVisible','enemy','isInputting','ITEM','BOOST_POINTS','isBreakShieldIconVisible','Scene_Battle_updateStatusWindowPosition','_damageSprites','MoveCenter','refreshCursor','icon','MAP_CLOSE_PROXIMITY_OPACITY','_filename','active','isPhysical','customizeStatePopup','frontviewBattleUiFaceMaskRender','HpDamage','_lastActor','input','Window_SkillList_initialize','FrontviewInput','setActiveAutoFadeOut','BattleManager_startAction','registerCommand','status','updateUi','name','addChildAt','UI_StatesIcon_OffsetY','isSideView','_partyIndex','enabled','BattleManager_startTurn','updateToneFilter','#ffffff','createNewSprite','UI_BreakShields_Show','fadeOutSprites','drawBravePoints','boxWidth','NORMAL','getFrontviewUiBattleStatusWindow','Window_ActorCommand','_damageContainer','GraphicsBackgroundOffsetX','children','Scene_Battle_createItemWindow','in\x20order\x20for\x20VisuMZ_3_FrontviewBattleUI\x20to\x20work.','left','loadSystem','updateFaceSpriteFrame','GraphicsOffsetY','StartDamagePopup','updateStatusWindowPosition','createFrontviewUiShopStatusWindow','frontviewUiWidth','#000000','VisuMZ_3_VisualStateEffects','OpacitySpeed','select','Inputting','colSpacing','createUiContainer','HpHealing','canCreateFrontviewBattleUiSprites','UI_HpGauge_Show','State','note','FrontviewBattleUI','StartStatePopup','_activeAutoFadeOutDuration','index','UI_StatesOverlay_OffsetX','Battler','FUNC','padding','initMembersFrontviewUi','createBreakShieldIcon','TpHealing','addChild','ARRAYSTRUCT','_boostPointsSprite','createFaceSprite','UI_HpGauge_Scale','Window_ActorCommand_makeCommandList','remove','SideviewInput','ActorIDs','maxFrontviewUiRows','CompactWidth','currentSubjectActor','Window_PartyCommand_activate','max','isUsingFrontviewUiLayout','battleLayoutStyle','convertGaugeTypeSkillsStatesCore','%1PopupFmt','UI_AggroGauge_OffsetY','lineTo','updateTpbGauge','_lastInputFilenameCache','_bravePointsWindow','updateDamageSprites','UI_TpbGauge_Angle','Window_BattleStatus_drawItem','Variable','AniOffsetY','GraphicsFaceMaskVertGradient','compactWidth','ActiveShiftXSpeed','Window_Base_close','Width','lineWidth','frontviewUiPositionY','UI_MpGauge_OffsetY','color1','_lastBraveInputting','randomInt','Battle','STR','ACTIVE_SHIFT','VisuMZ_4_MultiLayerHpGauge','visible','_statusWindow','showFrontviewUiShopStatusWindow','isSceneBattle','drawItem','updateAttachmentSprites','HorzFlip','addFaceMaskFilter','brightness','Window_BattleStatus_refreshCursor','FV_MODE_PORTRAITS','duration','createStateOverlaySprite','UI_TpGauge_Scale','restore','optDisplayTp','actorId','_frontviewUiSprites','createSpriteLayers','isStateAffected','makeCommandList','OPACITY_RATE','isTpb','drawItemFrontviewBattleUi','createHpGauge','Window_ActorCommand_initialize','addWindow','DAMAGE_SHAKE','_hpGauge','StateTooltips','dataFrontviewUiLength','color2','Scene_Battle_createSpriteset','UI_StatesIcon_Show','BACKGROUND_OFFSET','Style','VisuMZ_2_BattleSystemBTB','UI_BravePoints_Scale','UI_OFFSET','currentInputActor','removeChild','isCertainHit','location','setup','ActiveShiftY','AniOffsetX','offset','map','5IxgVQi','_partyCommandWindow','bind','predictedBravePoints','createAggroGauge','updateStateIconSprite','DeadTone','Damage','setSwapLastInputSpriteMoment','faceWidth','createFvUiStateSprite','Window_ActorCommand_activate','_die_bypass_visualStateEffects','frameVisible','min','frontviewBattleUiBackgroundRender','_flashColor','4331068egGcZO','showHelpWindow','needsBravePointsUpdate','FV_FADE_OPACITY','createFilters','_faceContainer','UI_HpGauge_OffsetX','FRONTVIEW_BATTLE_UI_BATTLER_OFFSET_X','CoreEngine','includes','exit','isActorActive','dying','FACE_SHOW','initialPosition','_activeContainer','createBackgroundSprite','Window_BattleStatus_drawItemBackground','DistanceBuffer','maxCols','ARRAYSTR','Window_PartyCommand','isFrontviewBattleUiMapVisible','updateContainers','removeDamageSprite','battleUIOffsetY','addDamageSpriteFrontviewBattleUi','UI_Name_Show','PopupShiftY','isNextScene','_uiContainer','frontviewUiLocation','updateTpGauge','_startingPosition','onRemoveState','addFaceMaskSprite','loadFaceSpriteBitmap','_battleLayoutStyle','setFrontviewBattleUiMapVisible','BaseOffsetX','ACTIVE_AUTO_FADEOUT','FRIENDLY','HorzRate','openness','addDamageSprite','Sprite_Battler_updateVisibility','round','PopupDuration','UI_MpGauge_Angle','IconSet','AGGRO_GAUGE','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','NAME','globalAlpha','bitmap','UI_TpbGauge_OffsetX','setTouchState','activate','UI_BravePoints_OffsetY','addBravePointsWindow','ARRAYFUNC','value','startBlendFlash','ARRAYJSON','UI_AggroGauge_Show','Window_SkillList_colSpacing','BLEND_COLORS','drawActorBravePoints','addFaceSpriteBase','_context','frontviewBattleUiStatusWindowRect','BaseOffsetY','edgeBuffer','VisuMZ_1_ItemsEquipsCore','startMove','Map','maxBattleMembers','isVisualHpGaugeDisplayed','MatchTurnCountColor','Portrait','width','screenY','show','SPRITE_HORZ_FLIP','createTpGauge','adjustFrontviewUiWidth','loadFace','maxItems','singleSkill','getActorFrontviewUiPortrait','_shakeContainer','GraphicsBackgroundShow','TPB_GAUGE','FV_FADE_SELECT','close','_boostPointsSprite_battler','height','Window_ItemList_initialize','Game_System_initialize','Scene_Battle_statusWindowRect','_frontviewBattleUiFaceMaskRender','_parentWindow','UI_Name_Scale','NewPopupBottom','setupTextPopup','_inputContainer','updateActiveAutoFadeOut','onMouseEnter','Scene_Base_isWindowMaskingEnabled','createFvUiTextPopup','_skillWindow','TONE_COLORS','createStateIconSprite','SideviewTargetEnemy','FRONTVIEW_BATTLE_UI','zoomScale','VisuMZ_1_BattleCore','drawOutlinePolygon','_frontviewUiPortraitData','prototype','updateHpGauge','updateOpacity','onAddState','targetOpacity','moveTo','fillStyle','FRONTVIEW_BATTLE_UI_BATTLER_OFFSET_Y','PopupShiftX','UI_BoostPoints_Angle','parse','_faceMaskFilter','actorWindowRect','sortFvUiDamageSprites','subject','getCurrentInputKeys','description','MP_GAUGE','_graphicsContainer','UI_StatesIcon_OffsetX','addFaceMaskBackground','addLoadListener','getColor','UI_BravePoints_Show','GraphicsFaceOffsetX','loadBackgroundSpriteBitmap','filters','SKILL','parameters','canCreateFrontviewUiShopStatusWindow','find','FACE_OFFSET','Window_BattleStatus_maxCols','addNewSprite','pop','_duration','trim','Enable','_moveDuration','currentExt','MapUICustomTextActor','stateColor','updateSubjects','right','createBoostPointsGauge','isMapPositionConflictFrontviewUi','Window_BattleStatus_maxItems','_fadingOut','initFrontviewUiSettings','Window_SkillList_Pos','battler','addBackgroundSpriteBase','Game_Battler_gainHp','updateFilters','Window_PartyCommand_initialize','_actor','adjustFrontviewUiHeight','fadeOut','UI_Name_Angle','toLowerCase','format','updateAggroGauge','_tpGauge','UI_HpGauge_OffsetY','showShopStatus','item','UI_TpbGauge_Scale','_stateOverlaySprite','centerFrontviewUiSprite','outlineWidth','applyFaceMaskFilter','_frontviewBattlePortraits','SV_MODE_PORTRAITS','UI_BravePoints_OffsetX','hide','Window_BattleStatus_addDamageSprite','UI_TpbGauge_OffsetY','VisualStateEffects','ARRAYEVAL','contains','MapUICustomVariableParty','ENTER_FROM_OFFSET','flashDuration','MapUICustomTextParty','frontviewUiStack','FRONTVIEW_BATTLE_UI_MOVE_BATTLERS','UI_BreakShields_OffsetY','drawItemBackground','AggroControlSystem','ItemsEquipsCore','inBattle','commandHelpWindow','VisuMZ_2_BattleSystemCTB','updatePosition','initMembers','isBTB','_scene','FrontviewTargetActor','createBitmap','_cache_battleMembersSize','currentSymbol','createShakeContainer','OffsetX','updateStateOverlaySprite','isBravePointsVisible','OPPONENT','push','UI_BoostPoints_Scale','startingPositionX','_faceGraphicName','BREAK_SHIELDS','MAGICAL','statusWindowRect','createAllWindows','CommandHelpWindow','getStateTooltipBattler','Window_ItemList_makeItemList','update','SPRITE_SCALE','anchor','StatusUI','_battler','getCurrentSubjectKeys','startOpacity','outlineColor','_frontviewUiMapVisible','_itemWindow','filter','BattleLayout','STRUCT','flashColor','itemRect','_nameSprite','UI_TpGauge_Angle','isSceneMap','Game_Battler_onAddState','lineHeight','centerAllFrontViewBattleUiSprites','Sprite_Battler_setHome','Scale','Window_BattleSkill_hide','addBravePointsSprite','fittingHeight','bitmapWidth','updateShakeContainer','updateBravePoints','TextColor','TP_GAUGE','updateInputs','_lastHpValue','return\x200','frontviewShopStatusWindowRect','GraphicsFaceMaskUse','Scene_Battle_buttonAreaTop','DyingTone','random','234672MbTuZP','updateBoostPointsGauge','MapUICustomVariableActor','_lastPredictedBrave','frontview_ui','isBoostPointsGaugeVisible','canCreateFrontviewBattleUi','FlashColor','_frontviewUiBattleStatusWindow','isItem','DEFAULT','setBlendColor','Game_Battler_gainMp','_list','UI_Name_OffsetX','isMagicSkill','isPreviousSceneBattleTransitionable','PortraitData','UiOffsetX','initialFrontviewUiStatusPosition','frameCount','currentSubjectFilename','fill','updateFaceGraphic','BACKGROUND_SHOW','_flashDuration','fadeIn','ShowStatusGauge','gainMp','Selected','EnterDuration','redraw','ActiveShiftYSpeed','VisuMZ_3_BoostAction','_menuAggroType','_aggroGauge','HP_GAUGE','_stateIconSprite','createGraphics','_opacityTarget','createActiveContainer','DamageShakeDuration','Window_Selectable_itemRect','showCancelButton','Window_ItemList_Pos','clearDamagePopup','_opacityDuration','ActionFadeOut','onPress','#00aeef','dead','VisuMZ_0_CoreEngine','faceSize','691584pMsJiL','moveCenter','GraphicsFaceOffsetY','updateBlendColor','_currentActor','worldVisible','getFrontviewUiSprite','updateMpGauge','Erase','Text','baseOffset','_faceMaskSprite','BATTLE_LAYOUT','isSkill','InitialUiPosition','buttonAreaTop','FACE_MASK_USE','BRAVE_POINTS','version','startTurn','_data','currentFaceGraphicFilename','clearResult','Game_Map_setup','Window_PartyCommand_makeCommandList','scale','actor','isForFriend','createTpbGauge','_moveTargetX','GraphicsFaceShow','Window_BattleStatus_initialize','hideFrontviewUiShopStatusWindow','START_BUFFER_X','initFrontviewBattleUi','VisuMZ_2_AggroControlSystem','UI_TpGauge_Show','constructor','angle','RegExp','overlay','adjustForFrontviewUi','setColorTone','createContents','updateFrontviewBattleUiPositions','FACE_MASK_FILENAME','click','strokeStyle','_faceSprite','allowBoostAction','isWindowMaskingEnabled','VisuMZ_1_SkillsStatesCore','Game_Actor_battleUIOffsetY','UiOffsetY','stackOffset','updateDamageOpacity','_actorCommandWindow','calcWindowHeight','ShowMapBattleStatus','loadPicture','Window_BattleStatus_updatePadding','textColor','updatePadding','currentInputFilename','_shakeDuration','UI_TpbGauge_Show','Index','_activeAutoFadeOut','BACKGROUND_FILENAME','UI_StatesOverlay_Show','initialize','length','boxHeight','createFrontviewUiBattleStatusWindow','visualAtbGauge','setBackgroundType','clear','LOCATION_X','ARRAYNUM','updateVisibility','faceHeight','faceIndex','bitmapHeight','_lastInputFilename','stroke','Sprite_Battler_isVisualHpGaugeDisplayed','match','isSelected','isDead','_shopStatusWindow','Window_SkillList_maxCols','createSpriteset','targetPositionX','FrontviewTargetEnemy','createNameSprite','updateBreakShieldIcon','Window_ItemList_colSpacing','GraphicsBackgroundOffsetY','updateNameSprite','ConvertParams','1370oiRjEc','ShowUiOnMap','145502vaDnlS','damageDuration','TargetOpacity','UI_BoostPoints_OffsetX','toUpperCase','isTpbGaugeVisible','checkPosition','UI_AggroGauge_Angle','totalVisibleMultiLayerHpGauges','makeItemList','_lastTpValue','15483294qqiiCH','ShowCancelButton','open','rateY','setupIconTextPopup','setStatusWindow','Window_SkillList_makeItemList','Gauge','Window_BattleItem_hide','_enemyWindow','UI_HpGauge_Angle','startAction','MOVE_DURATION','_mpGauge','1767408EKUsOB','gainHp'];_0x9369=function(){return _0xef9d9f;};return _0x9369();}PluginManager[_0x31b7e4(0x22d)](pluginData[_0x31b7e4(0x230)],_0x31b7e4(0x9b),_0x3548bc=>{const _0x3461a5=_0x31b7e4;if(!SceneManager[_0x3461a5(0x273)]())return;VisuMZ[_0x3461a5(0x1a7)](_0x3548bc,_0x3548bc);const _0x44d966=_0x3548bc['ActorIDs'][_0x3461a5(0x2bf)](_0x9dc322=>$gameActors[_0x3461a5(0x15e)](Number(_0x9dc322))),_0x2f0598=_0x3548bc[_0x3461a5(0x14d)],_0x27b364={'textColor':ColorManager['getColor'](_0x3548bc[_0x3461a5(0x105)]),'flashColor':_0x3548bc[_0x3461a5(0x116)],'flashDuration':_0x3548bc[_0x3461a5(0x1ce)]};for(const _0x58e94c of _0x44d966){if(!_0x58e94c)continue;VisuMZ['FrontviewBattleUI'][_0x3461a5(0x339)](_0x58e94c,_0x2f0598,_0x27b364);}}),PluginManager[_0x31b7e4(0x22d)](pluginData['name'],_0x31b7e4(0xc6),_0x30c655=>{const _0x4345dd=_0x31b7e4;if(!SceneManager[_0x4345dd(0x273)]())return;VisuMZ[_0x4345dd(0x1a7)](_0x30c655,_0x30c655);const _0x23ecdb=_0x30c655[_0x4345dd(0x186)][_0x4345dd(0x2bf)](_0x275ad2=>$gameParty[_0x4345dd(0x213)]()[_0x275ad2]),_0x446086=_0x30c655[_0x4345dd(0x14d)],_0x72507d={'textColor':ColorManager[_0x4345dd(0x89)](_0x30c655[_0x4345dd(0x105)]),'flashColor':_0x30c655['FlashColor'],'flashDuration':_0x30c655['FlashDuration']};for(const _0x451487 of _0x23ecdb){if(!_0x451487)continue;VisuMZ[_0x4345dd(0x25a)][_0x4345dd(0x339)](_0x451487,_0x446086,_0x72507d);}}),PluginManager[_0x31b7e4(0x22d)](pluginData[_0x31b7e4(0x230)],_0x31b7e4(0x111),_0x311fe5=>{const _0x10f727=_0x31b7e4;if(!SceneManager['isUsingFrontviewUiLayout']())return;VisuMZ[_0x10f727(0x1a7)](_0x311fe5,_0x311fe5);const _0x380af5=_0x311fe5[_0x10f727(0x26d)][_0x10f727(0x2bf)](_0x29cf89=>$gameActors[_0x10f727(0x15e)](Number(_0x29cf89))),_0x1f24f6=String($gameVariables[_0x10f727(0x30e)](_0x311fe5[_0x10f727(0x27f)])),_0x3e6e90={'textColor':ColorManager['getColor'](_0x311fe5['TextColor']),'flashColor':_0x311fe5[_0x10f727(0x116)],'flashDuration':_0x311fe5[_0x10f727(0x1ce)]};for(const _0x348806 of _0x380af5){if(!_0x348806)continue;VisuMZ['FrontviewBattleUI'][_0x10f727(0x339)](_0x348806,_0x1f24f6,_0x3e6e90);}}),PluginManager[_0x31b7e4(0x22d)](pluginData[_0x31b7e4(0x230)],_0x31b7e4(0xc3),_0x197cdd=>{const _0x2572e4=_0x31b7e4;if(!SceneManager[_0x2572e4(0x273)]())return;VisuMZ[_0x2572e4(0x1a7)](_0x197cdd,_0x197cdd);const _0x1c7e7d=_0x197cdd[_0x2572e4(0x186)][_0x2572e4(0x2bf)](_0x51487d=>$gameParty[_0x2572e4(0x213)]()[_0x51487d]),_0x396a6c=String($gameVariables[_0x2572e4(0x30e)](_0x197cdd[_0x2572e4(0x27f)])),_0x2d5894={'textColor':ColorManager[_0x2572e4(0x89)](_0x197cdd[_0x2572e4(0x105)]),'flashColor':_0x197cdd[_0x2572e4(0x116)],'flashDuration':_0x197cdd[_0x2572e4(0x1ce)]};for(const _0x385045 of _0x1c7e7d){if(!_0x385045)continue;VisuMZ[_0x2572e4(0x25a)]['setupTextPopup'](_0x385045,_0x396a6c,_0x2d5894);}}),PluginManager[_0x31b7e4(0x22d)](pluginData[_0x31b7e4(0x230)],'SystemMapUiVisibility',_0x48b098=>{const _0x3076ee=_0x31b7e4;VisuMZ[_0x3076ee(0x1a7)](_0x48b098,_0x48b098);const _0x8166b3=_0x48b098['Visible'];$gameSystem[_0x3076ee(0x2f7)](_0x8166b3);}),VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x16b)]={'PortraitData':/<(?:FV|FRONTVIEW) UI (?:PORTRAIT|PORTRAITS|BUST|BUSTS)>\s*([\s\S]*)\s*<\/(?:FV|FRONTVIEW) UI (?:PORTRAIT|PORTRAITS|BUST|BUSTS)>/i,'PortraitLine':/(.*):[ ](.*)/i,'ShowMapBattleStatus':/<SHOW (?:FV|FRONTVIEW) UI>/i,'HideMapBattleStatus':/<HIDE (?:FV|FRONTVIEW) UI>/i},Bitmap[_0x31b7e4(0x73)][_0x31b7e4(0x71)]=function(_0x46fa24,_0x178294,_0x27dd6e,_0x2984db,_0x2a2153,_0x1970bc){const _0xd31c28=_0x31b7e4,_0x478032=this[_0xd31c28(0x316)];_0x478032['save'](),_0x478032['beginPath'](),_0x478032[_0xd31c28(0x78)](_0x46fa24[0x0],_0x46fa24[0x1]);for(var _0x3651db=0x2;_0x3651db<_0x46fa24[_0xd31c28(0x18b)];_0x3651db+=0x2){_0x478032['lineTo'](_0x46fa24[_0x3651db],_0x46fa24[_0x3651db+0x1]);}_0x478032[_0xd31c28(0x278)](_0x46fa24[0x0],_0x46fa24[0x1]),_0x478032[_0xd31c28(0x173)]=_0x178294,_0x478032[_0xd31c28(0x286)]=_0x2984db,_0x1970bc&&_0x478032[_0xd31c28(0x198)](),_0x478032[_0xd31c28(0x306)]=_0x2a2153,_0x478032[_0xd31c28(0x79)]=_0x27dd6e,_0x478032[_0xd31c28(0x125)](),_0x478032[_0xd31c28(0x306)]=0x1,_0x478032[_0xd31c28(0x29e)](),this['_baseTexture'][_0xd31c28(0xe8)]();},DataManager[_0x31b7e4(0x32a)]=function(_0x53e64b,_0x4dc286){const _0x4767c2=_0x31b7e4;if(!_0x53e64b)return'';if(!_0x53e64b[_0x4767c2(0x200)]())return'';if(!_0x4dc286)return'';const _0x4ca140=this[_0x4767c2(0x1f9)](_0x53e64b);for(const _0x3c0659 of _0x4dc286){const _0x243126=_0x3c0659['toUpperCase']()[_0x4767c2(0x97)]();if(_0x4ca140[_0x243126])return _0x4ca140[_0x243126];}return _0x53e64b[_0x4767c2(0x1f7)]()||'';},DataManager['getFrontviewUiPortraitData']=function(_0x1827ce){const _0x419d84=_0x31b7e4;if(!_0x1827ce)return{};const _0x4c4a2b=_0x1827ce[_0x419d84(0x2a0)]();this[_0x419d84(0x72)]=this[_0x419d84(0x72)]||{};if(this['_frontviewUiPortraitData'][_0x4c4a2b]!==undefined)return this[_0x419d84(0x72)][_0x4c4a2b];const _0x3f071a=_0x1827ce[_0x419d84(0x15e)]()[_0x419d84(0x259)]||'',_0x4cc3af=VisuMZ['FrontviewBattleUI'][_0x419d84(0x16b)],_0x3153d9=_0x4cc3af[_0x419d84(0x120)],_0x43d998=_0x4cc3af['PortraitLine'],_0x56cc70={};if(_0x3f071a[_0x419d84(0x19a)](_0x3153d9)){const _0x20979e=String(RegExp['$1'])['trim']()['split'](/[\r\n]+/);for(const _0x190d86 of _0x20979e){if(_0x190d86['match'](_0x43d998)){const _0x30994e=String(RegExp['$1'])['toUpperCase']()[_0x419d84(0x97)](),_0x2bc38e=String(RegExp['$2'])['trim']();_0x56cc70[_0x30994e]=_0x2bc38e;}}}return this['_frontviewUiPortraitData'][_0x4c4a2b]=_0x56cc70,this[_0x419d84(0x72)][_0x4c4a2b];},ImageManager[_0x31b7e4(0x2cf)]=function(){const _0x15c411=_0x31b7e4;if(this['_frontviewBattleUiBackgroundRender'])return this[_0x15c411(0x20d)];const _0x101188=ImageManager[_0x15c411(0x2c9)],_0x22144a=ImageManager[_0x15c411(0x194)],_0x366a51=0x1,_0x2b8b2c=new Bitmap(_0x101188,_0x22144a),_0x22f136=[_0x101188/0x2,_0x366a51,_0x366a51,_0x22144a/0x2,_0x101188/0x2,_0x22144a-_0x366a51,_0x101188+_0x366a51,_0x22144a/0x2],_0xd6d03e=_0x15c411(0x238),_0x3173af=ColorManager['dimColor1']();return _0x2b8b2c['drawOutlinePolygon'](_0x22f136,_0xd6d03e,_0x3173af,_0x366a51,0x1,!![]),_0x2b8b2c[_0x15c411(0x211)]=![],this['_frontviewBattleUiBackgroundRender']=_0x2b8b2c,this['_frontviewBattleUiBackgroundRender'];},ImageManager[_0x31b7e4(0x225)]=function(){const _0x9c7b5c=_0x31b7e4;if(this[_0x9c7b5c(0x335)])return this[_0x9c7b5c(0x335)];const _0x243bc5=ImageManager['faceWidth'],_0x228e97=ImageManager[_0x9c7b5c(0x194)],_0x330eff=0x0,_0x5e1c0c=Sprite_FvUiStatus[_0x9c7b5c(0x1d5)][_0x9c7b5c(0x2be)],_0xddf1d8=new Bitmap(_0x243bc5,_0x228e97),_0x55752f=[_0x5e1c0c,_0x330eff,_0x330eff,_0x228e97-_0x330eff,_0x243bc5-_0x330eff,_0x228e97-_0x5e1c0c],_0x386103='#ffffff',_0x3639e5=_0x9c7b5c(0x238);return _0xddf1d8[_0x9c7b5c(0x71)](_0x55752f,_0x386103,_0x3639e5,_0x330eff,0x1,!![]),_0xddf1d8[_0x9c7b5c(0x211)]=![],this['_frontviewBattleUiFaceMaskRender']=_0xddf1d8,this['_frontviewBattleUiFaceMaskRender'];},SceneManager[_0x31b7e4(0x293)]=function(){const _0x281f36=_0x31b7e4;return this[_0x281f36(0xd3)]&&this[_0x281f36(0xd3)][_0x281f36(0x169)]===Scene_Battle;},SceneManager[_0x31b7e4(0xf9)]=function(){const _0x27f420=_0x31b7e4;return this[_0x27f420(0xd3)]&&this[_0x27f420(0xd3)][_0x27f420(0x169)]===Scene_Map;},SceneManager['isUsingFrontviewUiLayout']=function(){const _0x17bc20=_0x31b7e4;return SceneManager[_0x17bc20(0xf9)]()&&VisuMZ['BattleCore'][_0x17bc20(0x1e7)]['BattleLayout']['Style'][_0x17bc20(0xae)]()[_0x17bc20(0x97)]()===VisuMZ[_0x17bc20(0x25a)][_0x17bc20(0x150)];},VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x150)]=_0x31b7e4(0x113),BattleManager[_0x31b7e4(0x273)]=function(){const _0x9be3fb=_0x31b7e4;return SceneManager[_0x9be3fb(0x293)]()&&SceneManager['_scene'][_0x9be3fb(0x274)]()===VisuMZ[_0x9be3fb(0x25a)]['BATTLE_LAYOUT'];},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x333)]=Game_System['prototype'][_0x31b7e4(0x18a)],Game_System[_0x31b7e4(0x73)]['initialize']=function(){const _0x2e5ae4=_0x31b7e4;VisuMZ[_0x2e5ae4(0x25a)]['Game_System_initialize'][_0x2e5ae4(0x1f5)](this),this['initFrontviewBattleUiMapSettings']();},Game_System['prototype']['initFrontviewBattleUiMapSettings']=function(){const _0x166e7c=_0x31b7e4;this['_frontviewUiMapVisible']=Window_FrontviewUiMapBattleStatus['FRONTVIEW_BATTLE_UI'][_0x166e7c(0x323)];},Game_System[_0x31b7e4(0x73)]['isFrontviewBattleUiMapVisible']=function(){const _0x21ca15=_0x31b7e4;if(this[_0x21ca15(0xf0)]===undefined)this[_0x21ca15(0x1e9)]();return this[_0x21ca15(0xf0)];},Game_System[_0x31b7e4(0x73)][_0x31b7e4(0x2f7)]=function(_0x3f7b16){const _0x250c4e=_0x31b7e4;if(this[_0x250c4e(0xf0)]===undefined)this[_0x250c4e(0x1e9)]();this['_frontviewUiMapVisible']=_0x3f7b16;},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x15b)]=Game_Map[_0x31b7e4(0x73)][_0x31b7e4(0x2bb)],Game_Map[_0x31b7e4(0x73)][_0x31b7e4(0x2bb)]=function(_0x81ed72){const _0x4cefd1=_0x31b7e4;VisuMZ['FrontviewBattleUI'][_0x4cefd1(0x15b)][_0x4cefd1(0x1f5)](this,_0x81ed72),this['setupFrontviewUiMapNotetags']();},Game_Map['prototype']['setupFrontviewUiMapNotetags']=function(){const _0x303367=_0x31b7e4,_0x4a56a8=VisuMZ[_0x303367(0x25a)][_0x303367(0x16b)],_0x2e2bca=$dataMap?$dataMap[_0x303367(0x259)]||'':'';if(_0x2e2bca['match'](_0x4a56a8[_0x303367(0x17e)]))$gameSystem['setFrontviewBattleUiMapVisible'](!![]);else{if(_0x2e2bca['match'](_0x4a56a8['HideMapBattleStatus']))$gameSystem['setFrontviewBattleUiMapVisible'](![]);else{const _0xa7dce3=Window_FrontviewUiMapBattleStatus[_0x303367(0x6e)][_0x303367(0x323)];$gameSystem['setFrontviewBattleUiMapVisible'](_0xa7dce3);}}},VisuMZ[_0x31b7e4(0x25a)]['Game_Battler_gainHp']=Game_Battler[_0x31b7e4(0x73)][_0x31b7e4(0x1c4)],Game_Battler[_0x31b7e4(0x73)]['gainHp']=function(_0x7caa25){const _0x3944fe=_0x31b7e4;VisuMZ[_0x3944fe(0x25a)][_0x3944fe(0xa7)][_0x3944fe(0x1f5)](this,_0x7caa25),this[_0x3944fe(0x200)]()&&SceneManager[_0x3944fe(0x273)]()&&VisuMZ[_0x3944fe(0x25a)][_0x3944fe(0x24a)](this);},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x11b)]=Game_Battler['prototype'][_0x31b7e4(0x12b)],Game_Battler['prototype'][_0x31b7e4(0x12b)]=function(_0x461b90){const _0x76a243=_0x31b7e4;VisuMZ[_0x76a243(0x25a)][_0x76a243(0x11b)][_0x76a243(0x1f5)](this,_0x461b90),this[_0x76a243(0x200)]()&&SceneManager[_0x76a243(0x273)]()&&VisuMZ['FrontviewBattleUI']['StartDamagePopup'](this);},VisuMZ['FrontviewBattleUI']['Game_Battler_onAddState']=Game_Battler[_0x31b7e4(0x73)][_0x31b7e4(0x76)],Game_Battler['prototype'][_0x31b7e4(0x76)]=function(_0x477516){const _0x2be29f=_0x31b7e4;VisuMZ[_0x2be29f(0x25a)][_0x2be29f(0xfa)][_0x2be29f(0x1f5)](this,_0x477516),VisuMZ['FrontviewBattleUI']['StartStatePopup'](this,_0x477516,!![]);},VisuMZ['FrontviewBattleUI']['Game_Battler_onRemoveState']=Game_Battler[_0x31b7e4(0x73)][_0x31b7e4(0x2f3)],Game_Battler['prototype'][_0x31b7e4(0x2f3)]=function(_0x3d4f0c){const _0x1e1297=_0x31b7e4;if(!this[_0x1e1297(0x2cc)])VisuMZ['FrontviewBattleUI'][_0x1e1297(0x25b)](this,_0x3d4f0c,![]);VisuMZ[_0x1e1297(0x25a)]['Game_Battler_onRemoveState'][_0x1e1297(0x1f5)](this,_0x3d4f0c);},Game_Player[_0x31b7e4(0x73)][_0x31b7e4(0xa0)]=function(){const _0x3baa8c=_0x31b7e4;if(SceneManager['isSceneMap']()&&SceneManager[_0x3baa8c(0x2ee)](Scene_Battle))return![];const _0x5d33ba=this[_0x3baa8c(0x322)]()*$gameScreen[_0x3baa8c(0x6f)](),_0x283ce3=SceneManager['_scene'];if(_0x283ce3){const _0x4af9c5=_0x283ce3[_0x3baa8c(0x117)];if(_0x4af9c5&&_0x5d33ba>=_0x4af9c5['y'])return!![];}return![];},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x204)]=Scene_Map['prototype'][_0x31b7e4(0xe4)],Scene_Map[_0x31b7e4(0x73)][_0x31b7e4(0xe4)]=function(){const _0x14bef4=_0x31b7e4;this[_0x14bef4(0x18d)](),VisuMZ[_0x14bef4(0x25a)]['Scene_Map_createAllWindows'][_0x14bef4(0x1f5)](this);},Scene_Map[_0x31b7e4(0x73)][_0x31b7e4(0x18d)]=function(){const _0x5464ad=_0x31b7e4;if(!Window_FrontviewUiMapBattleStatus[_0x5464ad(0x73)][_0x5464ad(0x115)]())return;const _0x4e9ccd=this[_0x5464ad(0x23f)]();this['_frontviewUiBattleStatusWindow']=new Window_FrontviewUiMapBattleStatus(_0x4e9ccd),this[_0x5464ad(0x2aa)](this[_0x5464ad(0x117)]);},Scene_Map[_0x31b7e4(0x73)][_0x31b7e4(0x23f)]=function(){const _0x5c0d1a=_0x31b7e4;let _0x1e0aa1=Graphics[_0x5c0d1a(0x321)];Window_FrontviewUiMapBattleStatus[_0x5c0d1a(0x6e)][_0x5c0d1a(0x282)]&&(_0x1e0aa1-=0x60*0x2,_0x1e0aa1<(ImageManager['faceWidth']+0x40)*$gameParty['maxBattleMembers']()&&(_0x1e0aa1=(ImageManager[_0x5c0d1a(0x2c9)]+0x40)*$gameParty[_0x5c0d1a(0x31d)]()));const _0x1f0232=ImageManager[_0x5c0d1a(0x194)]+Window_Base[_0x5c0d1a(0x73)]['lineHeight']()*0x2,_0x4ba7e0=Window_FrontviewUiMapBattleStatus['FRONTVIEW_BATTLE_UI'][_0x5c0d1a(0x15d)],_0x17da2b=Math[_0x5c0d1a(0x1ca)](_0x1e0aa1*0x1),_0x54b6b2=Math[_0x5c0d1a(0x1ca)](_0x1f0232*_0x4ba7e0),_0x3cd68c=(Graphics[_0x5c0d1a(0x23d)]-_0x17da2b)/0x2,_0x5ef6f8=Graphics[_0x5c0d1a(0x331)]-_0x54b6b2;return new Rectangle(_0x3cd68c,_0x5ef6f8,_0x1e0aa1,_0x1f0232);},VisuMZ[_0x31b7e4(0x25a)]['Scene_Base_isWindowMaskingEnabled']=Scene_Base['prototype'][_0x31b7e4(0x176)],Scene_Base[_0x31b7e4(0x73)]['isWindowMaskingEnabled']=function(){const _0x5002dd=_0x31b7e4;return BattleManager[_0x5002dd(0x273)]()?![]:VisuMZ['FrontviewBattleUI'][_0x5002dd(0x33d)][_0x5002dd(0x1f5)](this);},VisuMZ[_0x31b7e4(0x25a)]['Scene_Battle_buttonAreaTop']=Scene_Battle['prototype'][_0x31b7e4(0x153)],Scene_Battle[_0x31b7e4(0x73)][_0x31b7e4(0x153)]=function(){const _0x2da523=_0x31b7e4;return BattleManager[_0x2da523(0x273)]()?Window_Base[_0x2da523(0x6e)][_0x2da523(0x13a)]?Graphics['boxHeight']-this['_cancelButton'][_0x2da523(0x331)]:Graphics[_0x2da523(0x18c)]*0xa:VisuMZ[_0x2da523(0x25a)][_0x2da523(0x10c)][_0x2da523(0x1f5)](this);},VisuMZ[_0x31b7e4(0x25a)]['Scene_Battle_statusWindowRect']=Scene_Battle['prototype'][_0x31b7e4(0xe3)],Scene_Battle[_0x31b7e4(0x73)][_0x31b7e4(0xe3)]=function(){const _0x48ec07=_0x31b7e4;return BattleManager[_0x48ec07(0x273)]()?this[_0x48ec07(0x317)]():VisuMZ[_0x48ec07(0x25a)][_0x48ec07(0x334)][_0x48ec07(0x1f5)](this);},VisuMZ['FrontviewBattleUI']['Scene_Battle_actorWindowRect']=Scene_Battle[_0x31b7e4(0x73)]['actorWindowRect'],Scene_Battle[_0x31b7e4(0x73)][_0x31b7e4(0x7f)]=function(){const _0x42ec5b=_0x31b7e4,_0x4697a4=VisuMZ[_0x42ec5b(0x25a)]['Scene_Battle_actorWindowRect'][_0x42ec5b(0x1f5)](this);return BattleManager[_0x42ec5b(0x273)]()&&(_0x4697a4['y']=Graphics['height']*0xa,_0x4697a4[_0x42ec5b(0x331)]=0x0),_0x4697a4;},Scene_Battle[_0x31b7e4(0x73)][_0x31b7e4(0x317)]=function(){const _0x3b83c8=_0x31b7e4;let _0x32f6b4=Graphics[_0x3b83c8(0x321)];Window_BattleStatus[_0x3b83c8(0x6e)][_0x3b83c8(0x282)]&&(_0x32f6b4-=0x60*0x2,_0x32f6b4<(ImageManager[_0x3b83c8(0x2c9)]+0x40)*$gameParty[_0x3b83c8(0x31d)]()&&(_0x32f6b4=(ImageManager[_0x3b83c8(0x2c9)]+0x40)*$gameParty[_0x3b83c8(0x31d)]()));const _0x427d74=ImageManager[_0x3b83c8(0x194)]+Window_Base[_0x3b83c8(0x73)][_0x3b83c8(0xfb)]()*0x2,_0x144510=(Graphics[_0x3b83c8(0x23d)]-_0x32f6b4)/0x2,_0x870466=Graphics[_0x3b83c8(0x331)]-_0x427d74-this['_windowLayer']['y'];return new Rectangle(_0x144510,_0x870466,_0x32f6b4,_0x427d74);},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x21b)]=Scene_Battle['prototype'][_0x31b7e4(0x24b)],Scene_Battle[_0x31b7e4(0x73)][_0x31b7e4(0x24b)]=function(){const _0x2da18e=_0x31b7e4;BattleManager[_0x2da18e(0x273)]()?this[_0x2da18e(0x170)]():VisuMZ[_0x2da18e(0x25a)][_0x2da18e(0x21b)]['call'](this);},Scene_Battle['prototype']['updateFrontviewBattleUiPositions']=function(){const _0x38a39a=_0x31b7e4;this[_0x38a39a(0x1da)][_0x38a39a(0x222)]&&(this['_actorCommandWindow'][_0x38a39a(0x32f)](),this[_0x38a39a(0x33f)][_0x38a39a(0x32f)](),this[_0x38a39a(0xf1)]['close']());this[_0x38a39a(0x1be)][_0x38a39a(0x222)]&&(this['_actorCommandWindow']['close'](),this[_0x38a39a(0x33f)][_0x38a39a(0x32f)](),this[_0x38a39a(0xf1)]['close']());if(this[_0x38a39a(0x2c1)][_0x38a39a(0x222)])this[_0x38a39a(0x2c1)][_0x38a39a(0x1b7)]();else this[_0x38a39a(0x17c)]['active']&&(this['_actorCommandWindow'][_0x38a39a(0xaa)]&&this[_0x38a39a(0x17c)][_0x38a39a(0x1b7)]());this['_skillWindow'][_0x38a39a(0x222)]&&(this[_0x38a39a(0x17c)][_0x38a39a(0x1b7)](),this[_0x38a39a(0x33f)][_0x38a39a(0x1b7)]()),this[_0x38a39a(0xf1)][_0x38a39a(0x222)]&&(this[_0x38a39a(0x17c)][_0x38a39a(0x1b7)](),this['_itemWindow'][_0x38a39a(0x1b7)]());},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x244)]=Scene_Battle['prototype'][_0x31b7e4(0x1d4)],Scene_Battle[_0x31b7e4(0x73)][_0x31b7e4(0x1d4)]=function(){const _0x1c49ff=_0x31b7e4;VisuMZ['FrontviewBattleUI'][_0x1c49ff(0x244)][_0x1c49ff(0x1f5)](this),this[_0x1c49ff(0x24c)]();},Scene_Battle[_0x31b7e4(0x73)][_0x31b7e4(0x24c)]=function(){const _0x2178ff=_0x31b7e4;if(!this['canCreateFrontviewUiShopStatusWindow']())return;const _0x4b0e0d=this[_0x2178ff(0x10a)]();this['_shopStatusWindow']=new Window_ShopStatus(_0x4b0e0d),this['_shopStatusWindow'][_0x2178ff(0x262)](),this[_0x2178ff(0x2aa)](this[_0x2178ff(0x19d)]),this[_0x2178ff(0x19d)][_0x2178ff(0xbd)](),Imported[_0x2178ff(0x177)]&&this['_skillWindow'][_0x2178ff(0x1ba)](this[_0x2178ff(0x19d)]),this[_0x2178ff(0xf1)][_0x2178ff(0x1ba)](this[_0x2178ff(0x19d)]);},Scene_Battle[_0x31b7e4(0x73)][_0x31b7e4(0x90)]=function(){const _0x1b70d8=_0x31b7e4;if(!BattleManager[_0x1b70d8(0x273)]())return![];if(!Imported[_0x1b70d8(0x31a)])return![];return Window_Base['FRONTVIEW_BATTLE_UI'][_0x1b70d8(0xb3)];},Scene_Battle[_0x31b7e4(0x73)][_0x31b7e4(0x10a)]=function(){const _0x2583b1=_0x31b7e4,_0x5e57ca=Window_Base[_0x2583b1(0x6e)][_0x2583b1(0x1e1)],_0x40451d=VisuMZ[_0x2583b1(0xcc)]['Settings']['StatusWindow'][_0x2583b1(0x285)],_0x1c7e49=this[_0x2583b1(0x17d)](_0x5e57ca,!![]),_0x543a78=0x0,_0x83ea36=0x0;return new Rectangle(_0x543a78,_0x83ea36,_0x40451d,_0x1c7e49);},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x2b0)]=Scene_Battle['prototype'][_0x31b7e4(0x19f)],Scene_Battle[_0x31b7e4(0x73)][_0x31b7e4(0x19f)]=function(){const _0x3a0e52=_0x31b7e4;VisuMZ[_0x3a0e52(0x25a)][_0x3a0e52(0x2b0)]['call'](this),this[_0x3a0e52(0x214)]();},Scene_Battle['prototype']['createFrontviewUiBattlePortraits']=function(){const _0x2bae12=_0x31b7e4;if(!BattleManager['isUsingFrontviewUiLayout']())return;this[_0x2bae12(0xba)]=new Sprite_FvUiController(),this['addChild'](this[_0x2bae12(0xba)]);},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1d0)]=Sprite_Name[_0x31b7e4(0x73)]['outlineColor'],Sprite_Name[_0x31b7e4(0x73)][_0x31b7e4(0xef)]=function(){const _0x31e6f0=_0x31b7e4;return VisuMZ[_0x31e6f0(0x25a)][_0x31e6f0(0x1d0)][_0x31e6f0(0x1f5)](this);},VisuMZ[_0x31b7e4(0x25a)]['Sprite_Name_outlineWidth']=Sprite_Name[_0x31b7e4(0x73)][_0x31b7e4(0xb8)],Sprite_Name['prototype'][_0x31b7e4(0xb8)]=function(){const _0x2666a2=_0x31b7e4;if(BattleManager['isUsingFrontviewUiLayout']())return 0x4;return VisuMZ['FrontviewBattleUI']['Sprite_Name_outlineWidth'][_0x2666a2(0x1f5)](this);},Sprite_Name['prototype'][_0x31b7e4(0x12e)]=function(){const _0x389330=_0x31b7e4,_0x46c4c9=this[_0x389330(0x230)](),_0x489da7=this[_0x389330(0x102)](),_0xc1c102=this[_0x389330(0x196)]();this['setupFont'](),this[_0x389330(0x307)][_0x389330(0x190)](),this[_0x389330(0x307)]['drawTextTopAligned'](_0x46c4c9,0x4,0x0,_0x489da7-0xa,_0xc1c102,'left');},Sprite_Battler[_0x31b7e4(0xc8)]=VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0x25f)][_0x31b7e4(0x98)]??!![],Sprite_Battler[_0x31b7e4(0x2d8)]=VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x25f)][_0x31b7e4(0xd9)]??0x0,Sprite_Battler['FRONTVIEW_BATTLE_UI_BATTLER_OFFSET_Y']=VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x25f)]['OffsetY']??-0x80,VisuMZ[_0x31b7e4(0x25a)]['Sprite_Battler_setHome']=Sprite_Battler[_0x31b7e4(0x73)][_0x31b7e4(0x1c6)],Sprite_Battler['prototype'][_0x31b7e4(0x1c6)]=function(_0x3cf83d,_0x9795ec){const _0xb1875a=_0x31b7e4;this[_0xb1875a(0x1e0)]()&&(_0x3cf83d+=Sprite_Battler[_0xb1875a(0x2d8)],_0x9795ec+=Sprite_Battler[_0xb1875a(0x7a)]),VisuMZ[_0xb1875a(0x25a)][_0xb1875a(0xfd)]['call'](this,_0x3cf83d,_0x9795ec);},Sprite_Battler['prototype']['shouldAdjustForFrontviewUiLayout']=function(){if(!BattleManager['isUsingFrontviewUiLayout']())return![];if($gameSystem['isSideView']())return![];return Sprite_Battler['FRONTVIEW_BATTLE_UI_MOVE_BATTLERS'];},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x2fe)]=Sprite_Battler[_0x31b7e4(0x73)][_0x31b7e4(0x193)],Sprite_Battler['prototype'][_0x31b7e4(0x193)]=function(){const _0x598526=_0x31b7e4;VisuMZ[_0x598526(0x25a)][_0x598526(0x2fe)][_0x598526(0x1f5)](this),this[_0x598526(0x1e0)]()&&this[_0x598526(0xec)]&&this[_0x598526(0xec)][_0x598526(0x200)]()&&(this[_0x598526(0x209)]=0x0);};function Sprite_FvUiStatus(){this['initialize'](...arguments);}Sprite_FvUiStatus['prototype']=Object['create'](Sprite_Clickable[_0x31b7e4(0x73)]),Sprite_FvUiStatus[_0x31b7e4(0x73)]['constructor']=Sprite_FvUiStatus,Sprite_FvUiStatus[_0x31b7e4(0x165)]=VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x2e3)]??0x20,Sprite_FvUiStatus[_0x31b7e4(0x220)]=VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)]['Map']['MinProxOpacity']??0x80,Sprite_FvUiStatus[_0x31b7e4(0x28e)]={'x':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x1cd)]??0x0,'y':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x2bc)]??-0x18,'rateX':VisuMZ['FrontviewBattleUI']['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x283)]??0x2,'rateY':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x12f)]??0x2},Sprite_FvUiStatus['DAMAGE_SHAKE']={'enabled':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)]['StatusUI']['DamageShakeEnabled']??!![],'duration':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x138)]??0x18},Sprite_FvUiStatus[_0x31b7e4(0x1db)]={'x':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)]['GraphicsOffsetX']??0x0,'y':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x249)]??-0x80},Sprite_FvUiStatus[_0x31b7e4(0x2b6)]={'x':VisuMZ[_0x31b7e4(0x25a)]['Settings']['StatusUI'][_0x31b7e4(0x121)]??0x0,'y':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x179)]??-0x80},Sprite_FvUiStatus[_0x31b7e4(0x127)]=VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x32c)]??!![],(Sprite_FvUiStatus[_0x31b7e4(0x188)]=VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)]['GraphicsBackgroundFilename']??'',Sprite_FvUiStatus[_0x31b7e4(0x2b2)]={'x':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x242)]??0x0,'y':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)]['StatusUI'][_0x31b7e4(0x1a5)]??0x0}),Sprite_FvUiStatus[_0x31b7e4(0x2de)]=VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x162)]??!![],Sprite_FvUiStatus[_0x31b7e4(0x92)]={'x':VisuMZ['FrontviewBattleUI']['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x8b)]??0x0,'y':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x146)]??0x0},Sprite_FvUiStatus['FACE_MASK_USE']=VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x10b)]??!![],Sprite_FvUiStatus[_0x31b7e4(0x171)]=VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)]['StatusUI']['GraphicsFaceMaskFilename']??'',Sprite_FvUiStatus[_0x31b7e4(0x1d5)]={'offset':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x1e4)]??0x30,'color1':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0xeb)]['GraphicsFaceMaskColor1']??_0x31b7e4(0x140),'color2':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x203)]??_0x31b7e4(0x24e),'vertical':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)]['StatusUI'][_0x31b7e4(0x281)]??!![]},Sprite_FvUiStatus[_0x31b7e4(0x305)]={'show':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)]['StatusUI'][_0x31b7e4(0x2ec)]??!![],'angle':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0xad)]??0x12,'offset':{'x':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x11d)]??-0x8,'y':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)]['UI_Name_OffsetY']??-0x3c},'scale':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x337)]??0.8},Sprite_FvUiStatus[_0x31b7e4(0x133)]={'show':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)]['StatusUI'][_0x31b7e4(0x257)]??!![],'angle':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x1bf)]??0x12,'offset':{'x':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)]['StatusUI'][_0x31b7e4(0x2d7)]??-0x8,'y':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0xb2)]??0x30},'scale':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x269)]??0.8},Sprite_FvUiStatus[_0x31b7e4(0x84)]={'show':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)]['StatusUI']['UI_MpGauge_Show']??!![],'angle':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x301)]??0x12,'offset':{'x':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)]['StatusUI']['UI_MpGauge_OffsetX']??-0x14,'y':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x288)]??0x48},'scale':VisuMZ[_0x31b7e4(0x25a)]['Settings']['StatusUI']['UI_MpGauge_Scale']??0.8},Sprite_FvUiStatus[_0x31b7e4(0x106)]={'show':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x168)]??!![],'angle':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0xf8)]??0x12,'offset':{'x':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)]['UI_TpGauge_OffsetX']??-0x20,'y':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x207)]??0x60},'scale':VisuMZ['FrontviewBattleUI']['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x29d)]??0.8},Sprite_FvUiStatus[_0x31b7e4(0x32d)]={'show':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x185)]??!![],'angle':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x27d)]??0x12,'offset':{'x':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)]['StatusUI'][_0x31b7e4(0x308)]??-0x3d,'y':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)]['StatusUI'][_0x31b7e4(0xbf)]??-0x24},'scale':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0xb5)]??0.8},Sprite_FvUiStatus[_0x31b7e4(0x1f6)]={'overlay':{'show':VisuMZ[_0x31b7e4(0x25a)]['Settings']['StatusUI'][_0x31b7e4(0x189)]??!![],'offset':{'x':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x25e)]??0x0,'y':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)]['UI_StatesOverlay_OffsetY']??0x0}},'icon':{'show':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x2b1)]??!![],'offset':{'x':VisuMZ['FrontviewBattleUI']['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x86)]??-0x34,'y':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)]['StatusUI'][_0x31b7e4(0x232)]??0x5c}}},Sprite_FvUiStatus[_0x31b7e4(0x303)]={'show':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x311)]??!![],'angle':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)]['StatusUI'][_0x31b7e4(0x1b1)]??0x48,'offset':{'x':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)]['UI_AggroGauge_OffsetX']??-0x58,'y':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x277)]??0x3c},'scale':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)]['UI_AggroGauge_Scale']??0.6},Sprite_FvUiStatus[_0x31b7e4(0x155)]={'show':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x8a)]??!![],'offset':{'x':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0xbc)]??0x48,'y':VisuMZ[_0x31b7e4(0x25a)]['Settings']['StatusUI'][_0x31b7e4(0x30b)]??-0x24},'scale':VisuMZ[_0x31b7e4(0x25a)]['Settings']['StatusUI'][_0x31b7e4(0x2b5)]??0x1},Sprite_FvUiStatus[_0x31b7e4(0xe1)]={'show':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x23a)]??!![],'offset':{'x':VisuMZ['FrontviewBattleUI']['Settings']['StatusUI'][_0x31b7e4(0x20a)]??-0x34,'y':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0xc9)]??0x3c}},Sprite_FvUiStatus[_0x31b7e4(0x219)]={'show':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)]['UI_BoostPoints_Show']??!![],'angle':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x7c)]??-0x2d,'offset':{'x':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x1ad)]??0x18,'y':VisuMZ['FrontviewBattleUI']['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x1d7)]??-0x2d},'scale':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)]['StatusUI'][_0x31b7e4(0xde)]??0.8},Sprite_FvUiStatus[_0x31b7e4(0x2a5)]=VisuMZ['FrontviewBattleUI']['Settings'][_0x31b7e4(0xeb)]['OpacitySpeed']??0x10,Sprite_FvUiStatus[_0x31b7e4(0x1c1)]=VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0xeb)]['MoveDuration']??0x18,Sprite_FvUiStatus[_0x31b7e4(0x313)]={'selected':VisuMZ['FrontviewBattleUI']['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x12c)]??[0xff,0xff,0xff,0x40],'inputting':VisuMZ[_0x31b7e4(0x25a)]['Settings']['StatusUI'][_0x31b7e4(0x252)]??[0x0,0xff,0xff,0x40],'damageDuration':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)]['StatusUI'][_0x31b7e4(0x1e2)]??0x3c,'hpDamage':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x226)]??[0xff,0x0,0x0,0x80],'hpHealing':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x255)]??[0x0,0xff,0x80,0x80],'mpDamage':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)]['StatusUI'][_0x31b7e4(0x1e6)]??[0x80,0x0,0xff,0x80],'mpHealing':VisuMZ['FrontviewBattleUI']['Settings'][_0x31b7e4(0xeb)]['MpHealing']??[0x0,0x80,0xff,0x80],'tpDamage':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)]['TpDamage']??[0x80,0xff,0x0,0x20],'tpHealing':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x264)]??[0x0,0xff,0x0,0x20]},Sprite_FvUiStatus[_0x31b7e4(0x340)]={'dead':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0xeb)][_0x31b7e4(0x2c6)]??[0x0,0x0,0x0,0xff],'dying':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0xeb)][_0x31b7e4(0x10d)]??[0x0,-0x40,-0x40,0x40]},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x18a)]=function(_0x1269d9,_0x58458b,_0x137fe4){const _0xac5ecc=_0x31b7e4;this[_0xac5ecc(0x234)]=_0x1269d9,this[_0xac5ecc(0x2f2)]=_0x58458b,this['_parentWindow']=_0x137fe4,Sprite_Clickable[_0xac5ecc(0x73)][_0xac5ecc(0x18a)]['call'](this),this['initMembers'](),this[_0xac5ecc(0x2a2)](),this[_0xac5ecc(0x2d5)](),this[_0xac5ecc(0x75)](!![]),SceneManager[_0xac5ecc(0x293)]()&&SceneManager[_0xac5ecc(0x11f)]()&&this[_0xac5ecc(0x1b0)](!![]),this[_0xac5ecc(0xe8)]();},Sprite_FvUiStatus['prototype'][_0x31b7e4(0xd1)]=function(){const _0x171e81=_0x31b7e4;this['x']=this[_0x171e81(0xdf)](),this['y']=this[_0x171e81(0x336)][_0x171e81(0x331)],this[_0x171e81(0xea)]['x']=0.5,this[_0x171e81(0xea)]['y']=0x1,this[_0x171e81(0x128)]=0x0,this[_0x171e81(0x2d0)]=[0x0,0x0,0x0,0x0],this[_0x171e81(0x227)]=this[_0x171e81(0x15e)](),this['_lastHpValue']=this[_0x171e81(0x15e)]()?this[_0x171e81(0x15e)]()['hp']:0x0,this[_0x171e81(0x20e)]=this[_0x171e81(0x15e)]()?this[_0x171e81(0x15e)]()['mp']:0x0,this[_0x171e81(0x1b4)]=this['actor']()?this['actor']()['tp']:0x0,this['_shakeDuration']=0x0,this[_0x171e81(0x99)]=0x0;},Sprite_FvUiStatus['prototype'][_0x31b7e4(0xdf)]=function(){const _0x42b23c=_0x31b7e4,_0x36e1ea=Sprite_FvUiStatus[_0x42b23c(0x165)],_0x1bd6f9=_0x36e1ea+ImageManager[_0x42b23c(0x2c9)];switch(this[_0x42b23c(0x2f2)]){case _0x42b23c(0x246):return ImageManager['faceWidth']/0x2+_0x1bd6f9*this['_partyIndex']+_0x36e1ea;break;case _0x42b23c(0x9e):return this[_0x42b23c(0x336)][_0x42b23c(0x321)]-ImageManager[_0x42b23c(0x2c9)]/0x2-_0x1bd6f9*($gameParty[_0x42b23c(0x213)]()['length']-this['_partyIndex']-0x1)-_0x36e1ea;break;case _0x42b23c(0x1d3):const _0x19f8c5=this[_0x42b23c(0x234)]+0x1,_0x21b5b8=$gameParty['battleMembers']()[_0x42b23c(0x18b)]+0x1;return this[_0x42b23c(0x336)][_0x42b23c(0x321)]*_0x19f8c5/_0x21b5b8;break;}return 0x0;},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x15e)]=function(){const _0x3ab52c=_0x31b7e4;return $gameParty[_0x3ab52c(0x213)]()[this[_0x3ab52c(0x234)]];},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x2dc)]=function(){const _0x36f564=_0x31b7e4;if(!this[_0x36f564(0x15e)]())return![];if(!$gameParty[_0x36f564(0xcd)]())return![];return this[_0x36f564(0x15e)]()===BattleManager['_subject']||this[_0x36f564(0x15e)]()===BattleManager[_0x36f564(0x148)];},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x2a2)]=function(){const _0x2d7d49=_0x31b7e4;this[_0x2d7d49(0x201)](),this[_0x2d7d49(0x135)](),this['createUiSprites']();},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x201)]=function(){const _0x508d72=_0x31b7e4;this[_0x508d72(0xd8)](),this[_0x508d72(0x137)](),this['createGraphicsContainer'](),this[_0x508d72(0x254)]();},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x135)]=function(){const _0x5ba082=_0x31b7e4;this['createBackgroundSprite'](),this['createFaceSprite'](),this[_0x5ba082(0x29c)]();},Sprite_FvUiStatus[_0x31b7e4(0x73)]['createUiSprites']=function(){const _0x1d3aa4=_0x31b7e4;this[_0x1d3aa4(0x263)](),this[_0x1d3aa4(0x6c)](),this[_0x1d3aa4(0x2c4)](),this[_0x1d3aa4(0x160)](),this[_0x1d3aa4(0x1a2)](),this[_0x1d3aa4(0x9f)](),this[_0x1d3aa4(0x206)](),this[_0x1d3aa4(0x325)](),this[_0x1d3aa4(0x1e5)](),this['createHpGauge']();},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x2d5)]=function(){},Sprite_FvUiStatus[_0x31b7e4(0x73)]['update']=function(){const _0x135747=_0x31b7e4;Sprite_Clickable[_0x135747(0x73)][_0x135747(0xe8)]['call'](this),this[_0x135747(0x2e8)](),this['updateGraphics'](),this['updateUi'](),this[_0x135747(0x1c7)](),this[_0x135747(0xa8)]();},Sprite_FvUiStatus[_0x31b7e4(0x73)]['updateContainers']=function(){const _0x234c9c=_0x31b7e4;this[_0x234c9c(0x1ee)](),this[_0x234c9c(0x103)](),this['updateActiveContainer']();},Sprite_FvUiStatus[_0x31b7e4(0x73)]['updateGraphics']=function(){const _0x2de5fc=_0x31b7e4;this[_0x2de5fc(0x126)](),this['updateStateOverlaySprite']();},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x22f)]=function(){const _0x2bf227=_0x31b7e4;this['updateBreakShieldIcon'](),this['updateStateIconSprite'](),this[_0x2bf227(0xb0)](),this[_0x2bf227(0x279)](),this[_0x2bf227(0x1a6)](),this[_0x2bf227(0x110)](),this[_0x2bf227(0x104)](),this[_0x2bf227(0x2f1)](),this[_0x2bf227(0x14b)](),this['updateHpGauge']();},Sprite_FvUiStatus[_0x31b7e4(0x73)]['updateProperties']=function(){const _0x45f65f=_0x31b7e4;this['updateOpacity'](),this[_0x45f65f(0x1b0)](),this[_0x45f65f(0xd0)]();},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0xa8)]=function(){const _0x35fb0e=_0x31b7e4;this['updateBlendColor'](),this[_0x35fb0e(0x237)]();},Sprite_FvUiStatus[_0x31b7e4(0x73)]['createShakeContainer']=function(){const _0x16395e=_0x31b7e4;this[_0x16395e(0x32b)]=new Sprite(),this[_0x16395e(0x265)](this[_0x16395e(0x32b)]);},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x1ee)]=function(){const _0x2c53f0=_0x31b7e4;if(!Sprite_FvUiStatus[_0x2c53f0(0x2ab)]['enabled'])return;if(this[_0x2c53f0(0x15e)]()){this['_lastTpValue']!==this['actor']()['tp']&&(this['_lastActor']===this[_0x2c53f0(0x15e)]()&&this[_0x2c53f0(0x30f)]('tp',this['actor']()['tp']<this['_lastTpValue']),this[_0x2c53f0(0x1b4)]=this[_0x2c53f0(0x15e)]()['tp']);this[_0x2c53f0(0x20e)]!==this[_0x2c53f0(0x15e)]()['mp']&&(this[_0x2c53f0(0x227)]===this[_0x2c53f0(0x15e)]()&&this[_0x2c53f0(0x30f)]('mp',this[_0x2c53f0(0x15e)]()['mp']<this[_0x2c53f0(0x20e)]),this['_lastMpValue']=this[_0x2c53f0(0x15e)]()['mp']);if(this[_0x2c53f0(0x108)]!==this[_0x2c53f0(0x15e)]()['hp']){const _0x4143ca=this[_0x2c53f0(0x15e)]()['hp']<this[_0x2c53f0(0x108)]&&this[_0x2c53f0(0x227)]===this[_0x2c53f0(0x15e)]();this[_0x2c53f0(0x227)]===this[_0x2c53f0(0x15e)]()&&this['startBlendFlash']('hp',_0x4143ca),this[_0x2c53f0(0x108)]=this[_0x2c53f0(0x15e)]()['hp'],_0x4143ca&&(this[_0x2c53f0(0x184)]=Sprite_FvUiStatus['DAMAGE_SHAKE'][_0x2c53f0(0x29b)]);}this[_0x2c53f0(0x227)]=this[_0x2c53f0(0x15e)]();}else this[_0x2c53f0(0x108)]=0x0,this[_0x2c53f0(0x20e)]=0x0,this[_0x2c53f0(0x1b4)]=0x0,this[_0x2c53f0(0x227)]=null;},Sprite_FvUiStatus['prototype']['updateShakeContainer']=function(){const _0x2240b2=_0x31b7e4;if(!Sprite_FvUiStatus['DAMAGE_SHAKE'][_0x2240b2(0x235)])return;if(this[_0x2240b2(0x184)]<=0x0)return;this[_0x2240b2(0x32b)]['x']=Math[_0x2240b2(0x28b)](this['_shakeDuration'])*(Math['random']()<0.5?-0x1:0x1),this['_shakeContainer']['y']=Math[_0x2240b2(0x28b)](this['_shakeDuration'])*(Math[_0x2240b2(0x10e)]()<0.5?-0x1:0x1),this[_0x2240b2(0x184)]--;},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x137)]=function(){const _0x5c85b3=_0x31b7e4;this[_0x5c85b3(0x2e0)]=new Sprite(),this[_0x5c85b3(0x32b)][_0x5c85b3(0x265)](this[_0x5c85b3(0x2e0)]);},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x1ff)]=function(){const _0x25556c=_0x31b7e4;if(!this['_activeContainer'])return;const _0x3dadf4=this['isActorActive'](),_0x161223=_0x3dadf4?Sprite_FvUiStatus['ACTIVE_SHIFT']['x']:0x0,_0x5e3531=_0x3dadf4?Sprite_FvUiStatus[_0x25556c(0x28e)]['y']:0x0,_0x285928=Sprite_FvUiStatus['ACTIVE_SHIFT']['rateX'],_0x42a1a0=Sprite_FvUiStatus[_0x25556c(0x28e)][_0x25556c(0x1b8)];this[_0x25556c(0x2e0)]['x']<_0x161223&&(this[_0x25556c(0x2e0)]['x']=Math[_0x25556c(0x2ce)](this['_activeContainer']['x']+_0x285928,_0x161223)),this[_0x25556c(0x2e0)]['x']>_0x161223&&(this[_0x25556c(0x2e0)]['x']=Math[_0x25556c(0x272)](this[_0x25556c(0x2e0)]['x']-_0x285928,_0x161223)),this[_0x25556c(0x2e0)]['y']<_0x5e3531&&(this['_activeContainer']['y']=Math[_0x25556c(0x2ce)](this[_0x25556c(0x2e0)]['y']+_0x42a1a0,_0x5e3531)),this[_0x25556c(0x2e0)]['y']>_0x5e3531&&(this[_0x25556c(0x2e0)]['y']=Math[_0x25556c(0x272)](this['_activeContainer']['y']-_0x42a1a0,_0x5e3531));},Sprite_FvUiStatus[_0x31b7e4(0x73)]['createGraphicsContainer']=function(){const _0x28b5da=_0x31b7e4;this[_0x28b5da(0x85)]=new Sprite(),this['_activeContainer'][_0x28b5da(0x265)](this[_0x28b5da(0x85)]),this[_0x28b5da(0x85)]['x']=Sprite_FvUiStatus['GRAPHICS_OFFSET']['x'],this['_graphicsContainer']['y']=Sprite_FvUiStatus[_0x28b5da(0x1db)]['y'];},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x254)]=function(){const _0x36a7be=_0x31b7e4;this[_0x36a7be(0x2ef)]=new Sprite(),this[_0x36a7be(0x2e0)][_0x36a7be(0x265)](this['_uiContainer']),this[_0x36a7be(0x2ef)]['x']=Sprite_FvUiStatus[_0x36a7be(0x2b6)]['x'],this[_0x36a7be(0x2ef)]['y']=Sprite_FvUiStatus['UI_OFFSET']['y'];},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x2e1)]=function(){const _0x5387e2=_0x31b7e4;this[_0x5387e2(0xa6)](),this[_0x5387e2(0x8c)]();},Sprite_FvUiStatus[_0x31b7e4(0x73)]['addBackgroundSpriteBase']=function(){const _0x8d588c=_0x31b7e4,_0x10184e=new Sprite();this['_backgroundSprite']=_0x10184e,this[_0x8d588c(0x85)][_0x8d588c(0x265)](_0x10184e),_0x10184e[_0x8d588c(0xea)]['x']=0.5,_0x10184e[_0x8d588c(0xea)]['y']=0.5,_0x10184e['x']=Sprite_FvUiStatus[_0x8d588c(0x2b2)]['x'],_0x10184e['y']=Sprite_FvUiStatus[_0x8d588c(0x2b2)]['y'];},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x8c)]=function(){const _0x4d5cc3=_0x31b7e4;if(!Sprite_FvUiStatus[_0x4d5cc3(0x127)])return;const _0x27cee6=Sprite_FvUiStatus['BACKGROUND_FILENAME'];_0x27cee6!==''?this[_0x4d5cc3(0x1f1)]['bitmap']=ImageManager[_0x4d5cc3(0x247)](_0x27cee6):this['_backgroundSprite'][_0x4d5cc3(0x307)]=ImageManager['frontviewBattleUiBackgroundRender']();},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x268)]=function(){const _0x2b3202=_0x31b7e4;if(!Sprite_FvUiStatus[_0x2b3202(0x2de)])return;this[_0x2b3202(0x2d6)]=new Sprite_Clickable(),this[_0x2b3202(0x85)]['addChild'](this[_0x2b3202(0x2d6)]),this[_0x2b3202(0x315)](),this[_0x2b3202(0x2f4)](),this[_0x2b3202(0x2f5)]();},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x315)]=function(){const _0x12686a=_0x31b7e4,_0x159d47=new Sprite();this[_0x12686a(0x174)]=_0x159d47,_0x159d47['filters']=_0x159d47['filters']||[],this[_0x12686a(0x2d6)][_0x12686a(0x265)](_0x159d47),_0x159d47['anchor']['x']=0.5,_0x159d47[_0x12686a(0xea)]['y']=0.5,_0x159d47['x']=Sprite_FvUiStatus['FACE_OFFSET']['x'],_0x159d47['y']=Sprite_FvUiStatus[_0x12686a(0x92)]['y'];},Sprite_FvUiStatus['prototype'][_0x31b7e4(0x2f4)]=function(){const _0x5d7a66=_0x31b7e4;if(!Sprite_FvUiStatus[_0x5d7a66(0x154)])return;this[_0x5d7a66(0x87)](),this[_0x5d7a66(0x297)](),this['applyFaceMaskFilter']();},Sprite_FvUiStatus[_0x31b7e4(0x73)]['addFaceMaskBackground']=function(){const _0x52fd3c=_0x31b7e4,_0x203945=new Sprite();this[_0x52fd3c(0x1cc)]=_0x203945,_0x203945['filters']=_0x203945['filters']||[],this[_0x52fd3c(0x2d6)][_0x52fd3c(0x265)](_0x203945),this['_faceContainer'][_0x52fd3c(0x265)](this[_0x52fd3c(0x174)]),_0x203945[_0x52fd3c(0xea)]['x']=0.5,_0x203945[_0x52fd3c(0xea)]['y']=0.5,_0x203945['x']=Sprite_FvUiStatus['FACE_OFFSET']['x'],_0x203945['y']=Sprite_FvUiStatus[_0x52fd3c(0x92)]['y'];const _0x44f7c7=ImageManager[_0x52fd3c(0x2c9)],_0x349ed6=ImageManager['faceHeight'],_0x24093c=Sprite_FvUiStatus[_0x52fd3c(0x1d5)][_0x52fd3c(0x289)],_0x4e49e5=Sprite_FvUiStatus['FACE_MASK_RENDER'][_0x52fd3c(0x2af)],_0x455612=Sprite_FvUiStatus[_0x52fd3c(0x1d5)]['vertical'],_0x49f616=new Bitmap(_0x44f7c7,_0x349ed6);_0x49f616[_0x52fd3c(0x1c5)](0x0,0x0,_0x44f7c7,_0x349ed6,_0x24093c,_0x4e49e5,_0x455612),_0x203945[_0x52fd3c(0x307)]=_0x49f616;},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x297)]=function(){const _0x294061=_0x31b7e4,_0x7cff12=new Sprite();this['_faceMaskSprite']=_0x7cff12,this['_faceSprite'][_0x294061(0x265)](_0x7cff12),_0x7cff12['anchor']['x']=0.5,_0x7cff12[_0x294061(0xea)]['y']=0.5;const _0x2ec51f=Sprite_FvUiStatus[_0x294061(0x171)];_0x2ec51f!==''?this['_faceMaskSprite'][_0x294061(0x307)]=ImageManager[_0x294061(0x247)](Sprite_FvUiStatus[_0x294061(0x171)]):this[_0x294061(0x14f)][_0x294061(0x307)]=ImageManager[_0x294061(0x225)]();},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0xb9)]=function(){const _0x5a40f1=_0x31b7e4;this[_0x5a40f1(0x7e)]=new PIXI['SpriteMaskFilter'](this['_faceMaskSprite']),this[_0x5a40f1(0x174)]['filters'][_0x5a40f1(0xdd)](this['_faceMaskFilter']),this[_0x5a40f1(0x1cc)][_0x5a40f1(0x8d)][_0x5a40f1(0xdd)](this[_0x5a40f1(0x7e)]);},Sprite_FvUiStatus['prototype'][_0x31b7e4(0x2f5)]=function(){const _0x1ebe53=_0x31b7e4;if(!Sprite_FvUiStatus[_0x1ebe53(0x2de)])return;const _0x2883cc=this[_0x1ebe53(0x159)](),_0x170688=this[_0x1ebe53(0x212)]();this[_0x1ebe53(0xe0)]=_0x2883cc,this[_0x1ebe53(0x20f)]=_0x170688,this[_0x1ebe53(0xe0)]!==''?(this['_faceSprite'][_0x1ebe53(0x307)]=ImageManager[_0x1ebe53(0x327)](_0x2883cc),this[_0x1ebe53(0x248)]()):(this['_faceSprite'][_0x1ebe53(0x307)]=new Bitmap(0x1,0x1),this['_faceSprite'][_0x1ebe53(0x1f2)](0x0,0x0,0x0,0x0));},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x159)]=function(){const _0x4a0c98=_0x31b7e4;if(!this[_0x4a0c98(0x15e)]())return'';return this[_0x4a0c98(0x15e)]()['faceName']();},Sprite_FvUiStatus['prototype']['currentFaceGraphicIndex']=function(){const _0x446245=_0x31b7e4;if(!this[_0x446245(0x15e)]())return 0x0;return this['actor']()[_0x446245(0x195)]();},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x248)]=function(){const _0x4d9eb2=_0x31b7e4,_0x1f224b=this[_0x4d9eb2(0x20f)],_0x57807b=ImageManager[_0x4d9eb2(0x2c9)],_0x4aae01=ImageManager[_0x4d9eb2(0x194)],_0x3604a4=ImageManager[_0x4d9eb2(0x2c9)],_0x15f713=ImageManager[_0x4d9eb2(0x194)],_0x30ca28=Math[_0x4d9eb2(0x202)](_0x1f224b%0x4*_0x3604a4+(_0x57807b-_0x3604a4)/0x2),_0x5b1445=Math[_0x4d9eb2(0x202)](Math[_0x4d9eb2(0x202)](_0x1f224b/0x4)*_0x4aae01+(_0x4aae01-_0x15f713)/0x2);this[_0x4d9eb2(0x174)][_0x4d9eb2(0x1f2)](_0x30ca28,_0x5b1445,_0x57807b,_0x4aae01);},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x126)]=function(){const _0x37221c=_0x31b7e4;if(!this['_faceSprite'])return;if(!Sprite_FvUiStatus[_0x37221c(0x2de)])return;(this[_0x37221c(0xe0)]!==this[_0x37221c(0x159)]()||this['_faceGraphicIndex']!==this[_0x37221c(0x212)]())&&this['loadFaceSpriteBitmap']();},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x29c)]=function(){const _0x2b46bc=_0x31b7e4;if(!Sprite_FvUiStatus[_0x2b46bc(0x1f6)][_0x2b46bc(0x16c)][_0x2b46bc(0x323)])return;const _0xd9650b=new Sprite_StateOverlay();this['_stateOverlaySprite']=_0xd9650b,this[_0x2b46bc(0x85)]['addChild'](_0xd9650b),_0xd9650b['x']=Sprite_FvUiStatus['STATES']['overlay'][_0x2b46bc(0x2be)]['x'],_0xd9650b['y']=Sprite_FvUiStatus[_0x2b46bc(0x1f6)][_0x2b46bc(0x16c)][_0x2b46bc(0x2be)]['y'];},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0xda)]=function(){const _0x4d822d=_0x31b7e4;if(!this[_0x4d822d(0xb6)])return;if(this[_0x4d822d(0xb6)][_0x4d822d(0xec)]===this[_0x4d822d(0x15e)]())return;this[_0x4d822d(0xb6)][_0x4d822d(0x2bb)](this[_0x4d822d(0x15e)]());},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x263)]=function(){const _0x5c7e3c=_0x31b7e4;if(!this['isBreakShieldIconVisible']())return;const _0x51e532=new Sprite_BreakShieldIcon();this[_0x5c7e3c(0x1fb)]=_0x51e532,this[_0x5c7e3c(0x2ef)]['addChild'](_0x51e532),_0x51e532['x']=Sprite_FvUiStatus[_0x5c7e3c(0xe1)][_0x5c7e3c(0x2be)]['x'],_0x51e532['y']=Sprite_FvUiStatus[_0x5c7e3c(0xe1)][_0x5c7e3c(0x2be)]['y'];},Sprite_FvUiStatus['prototype'][_0x31b7e4(0x21a)]=function(){const _0x2e5642=_0x31b7e4;if(!Sprite_FvUiStatus[_0x2e5642(0xe1)][_0x2e5642(0x323)])return![];if(!SceneManager['isSceneBattle']())return![];if(!Imported['VisuMZ_4_BreakShields'])return![];return!![];},Sprite_FvUiStatus['prototype'][_0x31b7e4(0x1a3)]=function(){const _0x3448dd=_0x31b7e4;if(!this[_0x3448dd(0x1fb)])return;if(this[_0x3448dd(0x1fb)][_0x3448dd(0xec)]===this[_0x3448dd(0x15e)]())return;this[_0x3448dd(0x1fb)]['setup'](this[_0x3448dd(0x15e)](),![]);},Sprite_FvUiStatus['prototype'][_0x31b7e4(0x6c)]=function(){const _0x617e7=_0x31b7e4;if(!Sprite_FvUiStatus[_0x617e7(0x1f6)]['icon'][_0x617e7(0x323)])return;const _0x3eea16=new Sprite_StateIcon();this[_0x617e7(0x134)]=_0x3eea16,this[_0x617e7(0x2ef)]['addChild'](_0x3eea16),_0x3eea16['x']=Sprite_FvUiStatus[_0x617e7(0x1f6)]['icon'][_0x617e7(0x2be)]['x'],_0x3eea16['y']=Sprite_FvUiStatus[_0x617e7(0x1f6)][_0x617e7(0x21f)][_0x617e7(0x2be)]['y'];},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x2c5)]=function(){const _0x4352b2=_0x31b7e4;if(!this[_0x4352b2(0x134)])return;if(this[_0x4352b2(0x134)][_0x4352b2(0xec)]===this['actor']())return;this[_0x4352b2(0x134)][_0x4352b2(0x2bb)](this[_0x4352b2(0x15e)]());},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x2c4)]=function(){const _0x59f347=_0x31b7e4;if(!this[_0x59f347(0x215)]())return;const _0x1c479a=new Sprite_Gauge();this['_aggroGauge']=_0x1c479a,this['_uiContainer'][_0x59f347(0x265)](_0x1c479a),_0x1c479a['angle']=-Sprite_FvUiStatus[_0x59f347(0x303)][_0x59f347(0x16a)],_0x1c479a['x']=Sprite_FvUiStatus['AGGRO_GAUGE'][_0x59f347(0x2be)]['x'],_0x1c479a['y']=Sprite_FvUiStatus[_0x59f347(0x303)][_0x59f347(0x2be)]['y'],_0x1c479a['scale']['x']=Sprite_FvUiStatus[_0x59f347(0x303)][_0x59f347(0x15d)],_0x1c479a['scale']['y']=Sprite_FvUiStatus[_0x59f347(0x303)]['scale'];},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x215)]=function(){const _0x1af5cd=_0x31b7e4;if(!Sprite_FvUiStatus['AGGRO_GAUGE']['show'])return![];if(!SceneManager['isSceneBattle']())return![];if(!Imported[_0x1af5cd(0x167)])return![];return ConfigManager['aggroGauge']&&VisuMZ[_0x1af5cd(0xcb)]['Settings']['Aggro']['StatusGauge'];},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0xb0)]=function(){const _0x41c2c9=_0x31b7e4;if(!this[_0x41c2c9(0x132)])return;if(this[_0x41c2c9(0x132)][_0x41c2c9(0xec)]===this['actor']())return;this[_0x41c2c9(0x132)][_0x41c2c9(0x131)]=!![],this[_0x41c2c9(0x132)][_0x41c2c9(0x2bb)](this[_0x41c2c9(0x15e)](),'aggro');},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x160)]=function(){const _0x4a161f=_0x31b7e4;if(!this[_0x4a161f(0x1af)]())return;const _0x3eaf29=new Sprite_Gauge();this['_tpbGauge']=_0x3eaf29,this[_0x4a161f(0x2ef)][_0x4a161f(0x265)](_0x3eaf29),_0x3eaf29[_0x4a161f(0x16a)]=-Sprite_FvUiStatus[_0x4a161f(0x32d)][_0x4a161f(0x16a)],_0x3eaf29['x']=Sprite_FvUiStatus['TPB_GAUGE'][_0x4a161f(0x2be)]['x'],_0x3eaf29['y']=Sprite_FvUiStatus[_0x4a161f(0x32d)]['offset']['y'],_0x3eaf29[_0x4a161f(0x15d)]['x']=Sprite_FvUiStatus[_0x4a161f(0x32d)][_0x4a161f(0x15d)],_0x3eaf29['scale']['y']=Sprite_FvUiStatus['TPB_GAUGE'][_0x4a161f(0x15d)];},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x1af)]=function(){const _0x512db7=_0x31b7e4;if(!Sprite_FvUiStatus[_0x512db7(0x32d)][_0x512db7(0x323)])return![];if(!SceneManager[_0x512db7(0x293)]())return![];if(!BattleManager[_0x512db7(0x2a6)]())return![];if(Imported['VisuMZ_2_BattleSystemATB']){if(!VisuMZ['BattleSystemATB']['Settings'][_0x512db7(0x1bc)][_0x512db7(0x12a)])return![];if(!ConfigManager[_0x512db7(0x18e)])return![];}if(Imported[_0x512db7(0xcf)]&&BattleManager[_0x512db7(0x210)]())return![];return!![];},Sprite_FvUiStatus[_0x31b7e4(0x73)]['updateTpbGauge']=function(){const _0x4d31e5=_0x31b7e4;if(!this[_0x4d31e5(0x208)])return;if(this[_0x4d31e5(0x208)][_0x4d31e5(0xec)]===this[_0x4d31e5(0x15e)]())return;if(!this[_0x4d31e5(0x15e)]())return;this[_0x4d31e5(0x208)][_0x4d31e5(0x2bb)](this[_0x4d31e5(0x15e)](),'time');},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x1a2)]=function(){const _0x3f13fa=_0x31b7e4;if(!Sprite_FvUiStatus[_0x3f13fa(0x305)]['show'])return;const _0x3b7c20=new Sprite_Name();this[_0x3f13fa(0xf7)]=_0x3b7c20,this[_0x3f13fa(0x2ef)][_0x3f13fa(0x265)](_0x3b7c20),_0x3b7c20[_0x3f13fa(0xea)]['x']=0.5,_0x3b7c20[_0x3f13fa(0x16a)]=-Sprite_FvUiStatus[_0x3f13fa(0x305)]['angle'],_0x3b7c20['x']=Sprite_FvUiStatus['NAME'][_0x3f13fa(0x2be)]['x'],_0x3b7c20['y']=Sprite_FvUiStatus[_0x3f13fa(0x305)][_0x3f13fa(0x2be)]['y'],_0x3b7c20[_0x3f13fa(0x15d)]['x']=Sprite_FvUiStatus['NAME'][_0x3f13fa(0x15d)],_0x3b7c20[_0x3f13fa(0x15d)]['y']=Sprite_FvUiStatus[_0x3f13fa(0x305)][_0x3f13fa(0x15d)];},Sprite_FvUiStatus['prototype'][_0x31b7e4(0x1a6)]=function(){const _0x1ef9fd=_0x31b7e4;if(!this[_0x1ef9fd(0xf7)])return;if(this['_nameSprite']['_battler']===this['actor']())return;this[_0x1ef9fd(0xf7)][_0x1ef9fd(0x2bb)](this[_0x1ef9fd(0x15e)]());},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x9f)]=function(){const _0x18855b=_0x31b7e4;if(!this['isBoostPointsGaugeVisible']())return;const _0x14fd95=new Sprite_BoostContainer();this[_0x18855b(0x267)]=_0x14fd95,this[_0x18855b(0x2ef)][_0x18855b(0x265)](_0x14fd95),_0x14fd95[_0x18855b(0x16a)]=-Sprite_FvUiStatus[_0x18855b(0x219)][_0x18855b(0x16a)],_0x14fd95['x']=Sprite_FvUiStatus[_0x18855b(0x219)][_0x18855b(0x2be)]['x'],_0x14fd95['y']=Sprite_FvUiStatus['BOOST_POINTS'][_0x18855b(0x2be)]['y'],_0x14fd95['scale']['x']*=Sprite_FvUiStatus[_0x18855b(0x219)][_0x18855b(0x15d)],_0x14fd95['scale']['y']*=Sprite_FvUiStatus[_0x18855b(0x219)][_0x18855b(0x15d)];},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x114)]=function(){const _0x5582dd=_0x31b7e4;if(!Sprite_FvUiStatus[_0x5582dd(0x219)][_0x5582dd(0x323)])return![];if(!SceneManager['isSceneBattle']())return![];if(!Imported[_0x5582dd(0x130)])return![];return BattleManager[_0x5582dd(0x175)]();},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x110)]=function(){const _0x4f6b0f=_0x31b7e4;if(!this[_0x4f6b0f(0x267)])return;if(this[_0x4f6b0f(0x267)][_0x4f6b0f(0xec)]===this[_0x4f6b0f(0x15e)]())return;this[_0x4f6b0f(0x267)][_0x4f6b0f(0x2bb)](this['actor']()),this[_0x4f6b0f(0x330)]=this[_0x4f6b0f(0x15e)]();},Sprite_FvUiStatus['prototype'][_0x31b7e4(0x206)]=function(){const _0x22fde9=_0x31b7e4;if(!this[_0x22fde9(0xdb)]())return;this[_0x22fde9(0x100)](),this[_0x22fde9(0x30c)]();},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x100)]=function(){const _0x3f2d27=_0x31b7e4,_0x50945b=new Sprite();this['_bravePointsSprite']=_0x50945b,this['_uiContainer'][_0x3f2d27(0x265)](_0x50945b),_0x50945b[_0x3f2d27(0xea)]['x']=0.5,_0x50945b[_0x3f2d27(0xea)]['y']=0.5,_0x50945b['x']=Sprite_FvUiStatus['BRAVE_POINTS'][_0x3f2d27(0x2be)]['x'],_0x50945b['y']=Sprite_FvUiStatus[_0x3f2d27(0x155)][_0x3f2d27(0x2be)]['y'],_0x50945b[_0x3f2d27(0x15d)]['x']*=Sprite_FvUiStatus[_0x3f2d27(0x155)][_0x3f2d27(0x15d)],_0x50945b['scale']['y']*=Sprite_FvUiStatus[_0x3f2d27(0x155)][_0x3f2d27(0x15d)],_0x50945b['visible']=![];},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x30c)]=function(){const _0x2d71ef=_0x31b7e4,_0x277ca8=new Rectangle(0x0,0x0,ImageManager[_0x2d71ef(0x2c9)],Window_Base['prototype']['fittingHeight'](0x1));this[_0x2d71ef(0x27b)]=new Window_Base(_0x277ca8),this[_0x2d71ef(0x28a)]=undefined,this[_0x2d71ef(0x1de)]=-0x64,this[_0x2d71ef(0x112)]=-0x64;},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0xdb)]=function(){const _0x539c2d=_0x31b7e4;if(!Sprite_FvUiStatus['BRAVE_POINTS'][_0x539c2d(0x323)])return![];if(!SceneManager[_0x539c2d(0x293)]())return![];if(!Imported[_0x539c2d(0x2b4)])return![];return BattleManager[_0x539c2d(0xd2)]();},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x104)]=function(){const _0x5446c2=_0x31b7e4;if(!this['_bravePointsSprite'])return;if(this[_0x5446c2(0x15e)]())this[_0x5446c2(0x2d3)]()&&this[_0x5446c2(0x23c)](),this[_0x5446c2(0x1f8)][_0x5446c2(0x290)]=!![];else this['_lastBravePoints']!==0x0&&(this[_0x5446c2(0x1f8)][_0x5446c2(0x290)]=![],this['_lastBravePoints']=0x0);},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x2d3)]=function(){const _0x51615b=_0x31b7e4;if(this[_0x51615b(0x1de)]!==this[_0x51615b(0x15e)]()['bravePoints']())return!![];if(this[_0x51615b(0x112)]!==this[_0x51615b(0x15e)]()[_0x51615b(0x2c3)]())return!![];if(this[_0x51615b(0x28a)]!==BattleManager[_0x51615b(0x217)]())return!![];return![];},Sprite_FvUiStatus[_0x31b7e4(0x73)]['drawBravePoints']=function(){const _0x3056f3=_0x31b7e4;if(!this[_0x3056f3(0x27b)])return;this[_0x3056f3(0x1de)]=this[_0x3056f3(0x15e)]()[_0x3056f3(0x1c9)](),this[_0x3056f3(0x112)]=this[_0x3056f3(0x15e)]()[_0x3056f3(0x2c3)](),this[_0x3056f3(0x28a)]=BattleManager[_0x3056f3(0x217)]();const _0x1b7ce9=ImageManager['faceWidth'],_0x4c5afb=this[_0x3056f3(0x27b)][_0x3056f3(0xfb)]();this[_0x3056f3(0x27b)][_0x3056f3(0x1eb)][_0x3056f3(0x190)](),this[_0x3056f3(0x27b)][_0x3056f3(0x314)](this['actor'](),0x0,0x0,_0x1b7ce9,_0x4c5afb,_0x3056f3(0x246)),this[_0x3056f3(0x1f8)][_0x3056f3(0x307)]=this['_bravePointsWindow'][_0x3056f3(0x1eb)];},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x2a8)]=function(){const _0x33118d=_0x31b7e4;if(!Sprite_FvUiStatus[_0x33118d(0x133)][_0x33118d(0x323)])return;const _0x346fb8=new Sprite_Gauge();this['_hpGauge']=_0x346fb8,this[_0x33118d(0x2ef)][_0x33118d(0x265)](_0x346fb8),_0x346fb8['angle']=-Sprite_FvUiStatus['HP_GAUGE'][_0x33118d(0x16a)],_0x346fb8['x']=Sprite_FvUiStatus[_0x33118d(0x133)][_0x33118d(0x2be)]['x'],_0x346fb8['y']=Sprite_FvUiStatus[_0x33118d(0x133)]['offset']['y'],_0x346fb8[_0x33118d(0x15d)]['x']=Sprite_FvUiStatus[_0x33118d(0x133)][_0x33118d(0x15d)],_0x346fb8['scale']['y']=Sprite_FvUiStatus[_0x33118d(0x133)][_0x33118d(0x15d)];},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x74)]=function(){const _0x615ce=_0x31b7e4;if(!this['_hpGauge'])return;if(this[_0x615ce(0x2ac)][_0x615ce(0xec)]===this[_0x615ce(0x15e)]())return;let _0x2c05a7='hp';Imported[_0x615ce(0x177)]&&this[_0x615ce(0x15e)]()&&(_0x2c05a7=Window_StatusBase[_0x615ce(0x73)]['convertGaugeTypeSkillsStatesCore'](this[_0x615ce(0x15e)](),_0x2c05a7)),this['_hpGauge'][_0x615ce(0x2bb)](this[_0x615ce(0x15e)](),_0x2c05a7);},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x1e5)]=function(){const _0x14cda8=_0x31b7e4;if(!Sprite_FvUiStatus[_0x14cda8(0x84)][_0x14cda8(0x323)])return;const _0x50acc6=new Sprite_Gauge();this[_0x14cda8(0x1c2)]=_0x50acc6,this[_0x14cda8(0x2ef)][_0x14cda8(0x265)](_0x50acc6),_0x50acc6[_0x14cda8(0x16a)]=-Sprite_FvUiStatus[_0x14cda8(0x84)]['angle'],_0x50acc6['x']=Sprite_FvUiStatus['MP_GAUGE'][_0x14cda8(0x2be)]['x'],_0x50acc6['y']=Sprite_FvUiStatus[_0x14cda8(0x84)][_0x14cda8(0x2be)]['y'],_0x50acc6[_0x14cda8(0x15d)]['x']=Sprite_FvUiStatus[_0x14cda8(0x84)]['scale'],_0x50acc6[_0x14cda8(0x15d)]['y']=Sprite_FvUiStatus[_0x14cda8(0x84)]['scale'];},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x14b)]=function(){const _0x3c4343=_0x31b7e4;if(!this['_mpGauge'])return;if(this[_0x3c4343(0x1c2)][_0x3c4343(0xec)]===this[_0x3c4343(0x15e)]())return;let _0x3eb343='mp';Imported[_0x3c4343(0x177)]&&this['actor']()&&(_0x3eb343=Window_StatusBase['prototype'][_0x3c4343(0x275)](this['actor'](),_0x3eb343)),this[_0x3c4343(0x1c2)][_0x3c4343(0x2bb)](this['actor'](),_0x3eb343);},Sprite_FvUiStatus['prototype'][_0x31b7e4(0x325)]=function(){const _0x3a80f8=_0x31b7e4;if(!Sprite_FvUiStatus[_0x3a80f8(0x106)][_0x3a80f8(0x323)])return;if(!$dataSystem[_0x3a80f8(0x29f)])return;const _0x49a467=new Sprite_Gauge();this[_0x3a80f8(0xb1)]=_0x49a467,this[_0x3a80f8(0x2ef)][_0x3a80f8(0x265)](_0x49a467),_0x49a467[_0x3a80f8(0x16a)]=-Sprite_FvUiStatus['TP_GAUGE'][_0x3a80f8(0x16a)],_0x49a467['x']=Sprite_FvUiStatus[_0x3a80f8(0x106)][_0x3a80f8(0x2be)]['x'],_0x49a467['y']=Sprite_FvUiStatus['TP_GAUGE'][_0x3a80f8(0x2be)]['y'],_0x49a467[_0x3a80f8(0x15d)]['x']=Sprite_FvUiStatus['TP_GAUGE']['scale'],_0x49a467['scale']['y']=Sprite_FvUiStatus[_0x3a80f8(0x106)][_0x3a80f8(0x15d)];},Sprite_FvUiStatus[_0x31b7e4(0x73)]['updateTpGauge']=function(){const _0x39b23e=_0x31b7e4;if(!this[_0x39b23e(0xb1)])return;if(this['_tpGauge'][_0x39b23e(0xec)]===this[_0x39b23e(0x15e)]())return;let _0xf2ea01='tp';Imported[_0x39b23e(0x177)]&&this['actor']()&&(_0xf2ea01=Window_StatusBase['prototype'][_0x39b23e(0x275)](this[_0x39b23e(0x15e)](),_0xf2ea01)),this['_tpGauge'][_0x39b23e(0x2bb)](this[_0x39b23e(0x15e)](),_0xf2ea01);},Sprite_FvUiStatus['prototype'][_0x31b7e4(0x75)]=function(_0xa5caa){const _0x1c7e00=_0x31b7e4,_0x541f3c=this['targetOpacity']();if(_0xa5caa){this[_0x1c7e00(0x209)]=_0x541f3c;return;}else{const _0x4c1e54=Sprite_FvUiStatus[_0x1c7e00(0x2a5)];if(this[_0x1c7e00(0x209)]>_0x541f3c)this['opacity']=Math['max'](this['opacity']-_0x4c1e54,_0x541f3c);else this[_0x1c7e00(0x209)]<_0x541f3c&&(this['opacity']=Math[_0x1c7e00(0x2ce)](this['opacity']+_0x4c1e54,_0x541f3c));}},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x77)]=function(){const _0x164082=_0x31b7e4;if(!this[_0x164082(0x15e)]())return 0x0;if(SceneManager['isSceneMap']()){if($gameScreen[_0x164082(0x298)]()<0xff)return 0x0;if(!$gameSystem['isFrontviewBattleUiMapVisible']())return 0x0;if($gamePlayer[_0x164082(0xa0)]())return Sprite_FvUiStatus[_0x164082(0x220)];}if(this['actor']()[_0x164082(0x19c)]())return 0xff;return 0xff;},Sprite_FvUiStatus['prototype']['checkPosition']=function(_0x3d28b3){const _0x20fbbc=_0x31b7e4;if(this[_0x20fbbc(0xd6)]===$gameParty[_0x20fbbc(0x213)]()[_0x20fbbc(0x18b)])return;if(SceneManager[_0x20fbbc(0xf9)]())_0x3d28b3=!![];this[_0x20fbbc(0xd6)]=$gameParty[_0x20fbbc(0x213)]()[_0x20fbbc(0x18b)],this['_moveDuration']=_0x3d28b3?0x1:Sprite_FvUiStatus['MOVE_DURATION'];if(_0x3d28b3)this[_0x20fbbc(0xd0)]();},Sprite_FvUiStatus[_0x31b7e4(0x73)]['updatePosition']=function(){const _0x4df515=_0x31b7e4;if(this[_0x4df515(0x99)]<=0x0)return;const _0x3eaa7e=this['_moveDuration'],_0x5e0c25=this[_0x4df515(0x1a0)]();this['x']=(this['x']*(_0x3eaa7e-0x1)+_0x5e0c25)/_0x3eaa7e,this[_0x4df515(0x99)]--,this['_moveDuration']<=0x0&&(this['x']=_0x5e0c25);},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x1a0)]=function(){const _0x22ec77=_0x31b7e4;let _0x4c6733=0x0;const _0x5726fd=SceneManager[_0x22ec77(0x293)]()?Window_BattleStatus['FRONTVIEW_BATTLE_UI'][_0x22ec77(0x145)]:Window_FrontviewUiMapBattleStatus[_0x22ec77(0x6e)][_0x22ec77(0x145)];if(_0x5726fd){const _0x1c2148=this[_0x22ec77(0x234)]+0x1,_0x46303d=$gameParty[_0x22ec77(0x213)]()['length']+0x1;_0x4c6733=this['_parentWindow'][_0x22ec77(0x321)]*_0x1c2148/_0x46303d;}else _0x4c6733=this[_0x22ec77(0xdf)]();return Math[_0x22ec77(0x1ca)](_0x4c6733);},Sprite_FvUiStatus['prototype'][_0x31b7e4(0x147)]=function(){const _0x4ac162=_0x31b7e4;if(!this[_0x4ac162(0x15e)]())return;const _0x18b3f4=Sprite_FvUiStatus[_0x4ac162(0x313)],_0x2e1e8c=this[_0x4ac162(0x2d6)];if(!_0x2e1e8c)return;const _0x385f4d=Graphics[_0x4ac162(0x123)]%0x1e<0xf,_0xcec6cf=SceneManager[_0x4ac162(0xd3)][_0x4ac162(0x1da)]&&SceneManager[_0x4ac162(0xd3)][_0x4ac162(0x1da)][_0x4ac162(0x222)]||SceneManager[_0x4ac162(0xd3)][_0x4ac162(0x1be)]&&SceneManager[_0x4ac162(0xd3)]['_enemyWindow'][_0x4ac162(0x222)]||_0x385f4d;if(SceneManager[_0x4ac162(0x293)]()&&this[_0x4ac162(0x15e)]()[_0x4ac162(0x19b)]()&&_0x385f4d)_0x2e1e8c[_0x4ac162(0x11a)](_0x18b3f4['selected']);else{if(SceneManager[_0x4ac162(0x293)]()&&this[_0x4ac162(0x15e)]()===BattleManager[_0x4ac162(0x148)]&&_0xcec6cf)_0x2e1e8c[_0x4ac162(0x11a)](_0x18b3f4[_0x4ac162(0x1d2)]);else{if(this[_0x4ac162(0x128)]>0x0){const _0x1e1718=this[_0x4ac162(0x128)];this[_0x4ac162(0x2d0)][0x3]*=(_0x1e1718-0x1)/_0x1e1718,_0x2e1e8c[_0x4ac162(0x11a)](this[_0x4ac162(0x2d0)]);}else _0x2e1e8c[_0x4ac162(0x11a)]([0x0,0x0,0x0,0x0]);}}this[_0x4ac162(0x128)]--;},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x30f)]=function(_0x2dd673,_0x99f2a5){const _0x17f4aa=_0x31b7e4,_0x3a5714=Sprite_FvUiStatus[_0x17f4aa(0x313)],_0x15d28a='%1%2'['format'](_0x2dd673,_0x99f2a5?_0x17f4aa(0x2c7):_0x17f4aa(0x1fc)),_0x11eee7=_0x3a5714[_0x15d28a];if(_0x11eee7[0x3]===0x0)return;this['_flashColor']=JSON[_0x17f4aa(0x7d)](JSON[_0x17f4aa(0x1df)](_0x11eee7)),this[_0x17f4aa(0x128)]=_0x3a5714[_0x17f4aa(0x1ab)];},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x237)]=function(){const _0x453554=_0x31b7e4;if(!this['actor']())return;const _0x219374=Sprite_FvUiStatus[_0x453554(0x340)],_0x38409f=this['_faceContainer'];if(!_0x38409f)return;const _0x557460=Graphics['frameCount']%0x1e<0xf,_0xb87fac=SceneManager['_scene'][_0x453554(0x1da)]&&SceneManager[_0x453554(0xd3)][_0x453554(0x1da)][_0x453554(0x222)]||SceneManager[_0x453554(0xd3)][_0x453554(0x1be)]&&SceneManager['_scene'][_0x453554(0x1be)][_0x453554(0x222)]||_0x557460;if(SceneManager[_0x453554(0x293)]()&&this[_0x453554(0x15e)]()===BattleManager[_0x453554(0x148)]&&_0xb87fac)_0x38409f['setColorTone']([0x0,0x0,0x0,0x0]);else{if(this[_0x453554(0x15e)]()['isDead']())_0x38409f[_0x453554(0x16e)](_0x219374[_0x453554(0x141)]);else this[_0x453554(0x15e)]()['isDying']()?_0x38409f[_0x453554(0x16e)](_0x219374[_0x453554(0x2dd)]):_0x38409f['setColorTone']([0x0,0x0,0x0,0x0]);}},Sprite_FvUiStatus[_0x31b7e4(0x73)]['isClickEnabled']=function(){const _0x348cbf=_0x31b7e4;return this[_0x348cbf(0x149)];},Sprite_FvUiStatus['prototype'][_0x31b7e4(0x1fd)]=function(_0x875253,_0x217267){const _0x182591=_0x31b7e4,_0x5d5752=Sprite_FvUiStatus[_0x182591(0x1db)],_0x459307=new Rectangle(-this[_0x182591(0xea)]['x']*ImageManager['faceWidth']+_0x5d5752['x'],-this['anchor']['y']*ImageManager[_0x182591(0x194)]+_0x5d5752['y']/0x2,ImageManager['faceWidth'],ImageManager[_0x182591(0x194)]);return _0x459307[_0x182591(0xc2)](_0x875253,_0x217267);},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0x33c)]=function(){const _0x566fe9=_0x31b7e4;$gameTemp[_0x566fe9(0x309)](this[_0x566fe9(0x15e)](),_0x566fe9(0x251));if(Imported['VisuMZ_3_StateTooltips']){if(SceneManager[_0x566fe9(0xf9)]()&&!$gameSystem['isFrontviewBattleUiMapVisible']())return;if(VisuMZ[_0x566fe9(0x2ad)]['version']<1.06){let _0x443513='';_0x443513+='VisuMZ_3_StateTooltips\x20needs\x20to\x20be\x20updated\x20',_0x443513+=_0x566fe9(0x245),alert(_0x443513),SceneManager['exit']();}this[_0x566fe9(0x1cf)]();}},Sprite_FvUiStatus['prototype'][_0x31b7e4(0x13f)]=function(){const _0x33051c=_0x31b7e4;$gameTemp[_0x33051c(0x309)](this[_0x33051c(0x15e)](),_0x33051c(0x251));},Sprite_FvUiStatus[_0x31b7e4(0x73)]['onClick']=function(){const _0x5cab84=_0x31b7e4;$gameTemp[_0x5cab84(0x309)](this[_0x5cab84(0x15e)](),_0x5cab84(0x172));},Sprite_FvUiStatus[_0x31b7e4(0x73)][_0x31b7e4(0xe6)]=function(){const _0x40ff91=_0x31b7e4;return this[_0x40ff91(0x15e)]();};function Sprite_FvUiController(){const _0x505219=_0x31b7e4;this[_0x505219(0x18a)](...arguments);}Sprite_FvUiController[_0x31b7e4(0x73)]=Object[_0x31b7e4(0x1ea)](Sprite[_0x31b7e4(0x73)]),Sprite_FvUiController[_0x31b7e4(0x73)][_0x31b7e4(0x169)]=Sprite_FvUiController,Sprite_FvUiController[_0x31b7e4(0x191)]=VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x320)][_0x31b7e4(0x2fb)]??0.85,Sprite_FvUiController[_0x31b7e4(0x2d4)]=VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)]['Portrait'][_0x31b7e4(0x1ac)]??0x40,Sprite_FvUiController[_0x31b7e4(0x1d1)]=VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x320)][_0x31b7e4(0x250)]??0x10,Sprite_FvUiController[_0x31b7e4(0x29a)]={'input':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)][_0x31b7e4(0x320)][_0x31b7e4(0x22a)]??!![],'subject':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)][_0x31b7e4(0x320)]['FrontviewSubject']??!![]},Sprite_FvUiController[_0x31b7e4(0x32e)]={'actor':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0x320)][_0x31b7e4(0xd4)]??![],'enemy':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0x320)][_0x31b7e4(0x1a1)]??!![]},Sprite_FvUiController['SV_MODE_PORTRAITS']={'input':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0x320)][_0x31b7e4(0x26c)]??!![],'subject':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)][_0x31b7e4(0x320)][_0x31b7e4(0x1f0)]??![]},Sprite_FvUiController[_0x31b7e4(0x1dc)]={'actor':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x320)]['SideviewTargetActor']??!![],'enemy':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x320)][_0x31b7e4(0x6d)]??![]},Sprite_FvUiController[_0x31b7e4(0x73)][_0x31b7e4(0x18a)]=function(){const _0x4fbe55=_0x31b7e4;Sprite[_0x4fbe55(0x73)][_0x4fbe55(0x18a)][_0x4fbe55(0x1f5)](this),this['initMembers'](),this['createContainers']();},Sprite_FvUiController['prototype']['initMembers']=function(){const _0xf64454=_0x31b7e4;this['x']=Math['round'](Graphics['width']*Sprite_FvUiController[_0xf64454(0x191)]),this['y']=Graphics['height'],this[_0xf64454(0x1ed)]='',this['_lastInputFilename']='',this[_0xf64454(0x27a)]='';},Sprite_FvUiController[_0x31b7e4(0x73)][_0x31b7e4(0x201)]=function(){const _0x4f0828=_0x31b7e4;this[_0x4f0828(0x1f3)]=new Sprite(),this['addChild'](this['_subjectContainer']),this['_inputContainer']=new Sprite(),this[_0x4f0828(0x265)](this[_0x4f0828(0x33a)]);},Sprite_FvUiController[_0x31b7e4(0x73)][_0x31b7e4(0x239)]=function(_0x107b84){const _0x3427d7=_0x31b7e4;this[_0x3427d7(0x23b)](_0x107b84),this[_0x3427d7(0x94)](_0x107b84);},Sprite_FvUiController[_0x31b7e4(0x73)][_0x31b7e4(0x23b)]=function(_0x1d205c){const _0x241463=_0x31b7e4,_0x217e9f=_0x1d205c?this[_0x241463(0x1f3)]:this[_0x241463(0x33a)];if(!_0x217e9f)return;const _0x13e658=[];for(const _0x2a150a of _0x217e9f['children']){if(!_0x2a150a)continue;if(_0x2a150a[_0x241463(0xa2)]&&_0x2a150a[_0x241463(0x209)]<=0x0)_0x13e658[_0x241463(0xdd)](_0x2a150a);if(_0x2a150a['fadeOut'])_0x2a150a[_0x241463(0xac)]();}while(_0x13e658[_0x241463(0x18b)]>0x0){const _0x1d1d1b=_0x13e658[_0x241463(0x95)]();_0x217e9f[_0x241463(0x2b8)](_0x1d1d1b);}},Sprite_FvUiController[_0x31b7e4(0x73)]['addNewSprite']=function(_0x415977){const _0x162b72=_0x31b7e4,_0x4609da=$gameSystem['isSideView']()?Sprite_FvUiController[_0x162b72(0xbb)]:Sprite_FvUiController[_0x162b72(0x29a)];if(_0x415977&&!_0x4609da[_0x162b72(0x81)])return;if(!_0x415977&&!_0x4609da[_0x162b72(0x228)])return;const _0x578883=_0x415977?this['_subjectContainer']:this[_0x162b72(0x33a)];if(!_0x578883)return;const _0x27ffcd=_0x415977?this[_0x162b72(0x124)]():this['currentInputFilename']();if(_0x27ffcd==='')return;const _0x229da4=new Sprite_FvUiPortrait(_0x27ffcd);_0x578883[_0x162b72(0x265)](_0x229da4),_0x415977&&(_0x229da4[_0x162b72(0x22b)](),this[_0x162b72(0x124)]()===this[_0x162b72(0x27a)]&&this[_0x162b72(0x2c8)](_0x229da4));},Sprite_FvUiController[_0x31b7e4(0x73)][_0x31b7e4(0x2c8)]=function(_0x5f5a13){const _0x29ff75=_0x31b7e4;_0x5f5a13['x']=0x0;const _0x56869b=this[_0x29ff75(0x33a)][_0x29ff75(0x243)][0x0],_0x3edb70=_0x56869b?_0x56869b[_0x29ff75(0x209)]:0x0;_0x5f5a13[_0x29ff75(0x209)]=_0x3edb70,_0x56869b&&(_0x56869b['startOpacity'](0x0,0x1),_0x56869b['opacity']=0x0);},Sprite_FvUiController['prototype'][_0x31b7e4(0xe8)]=function(){const _0x40160c=_0x31b7e4;Sprite[_0x40160c(0x73)][_0x40160c(0xe8)][_0x40160c(0x1f5)](this),this[_0x40160c(0x9d)](),this['updateInputs'](),this['updateOpacity']();},Sprite_FvUiController['prototype']['updateSubjects']=function(){const _0x319176=_0x31b7e4;this[_0x319176(0x1ed)]!==this['currentSubjectFilename']()&&(this[_0x319176(0x1ed)]=this[_0x319176(0x124)](),this[_0x319176(0x239)](!![]));},Sprite_FvUiController[_0x31b7e4(0x73)][_0x31b7e4(0x270)]=function(){const _0x5051db=_0x31b7e4;if(BattleManager[_0x5051db(0x217)]()){if(!BattleManager[_0x5051db(0x2a6)]())return null;if(Imported[_0x5051db(0xcf)]&&BattleManager[_0x5051db(0x210)]())return null;}return BattleManager['_subject'];},Sprite_FvUiController[_0x31b7e4(0x73)][_0x31b7e4(0x124)]=function(){const _0xa7f969=_0x31b7e4,_0x40855d=this[_0xa7f969(0x270)](),_0x1e58c4=this[_0xa7f969(0xed)]();return DataManager[_0xa7f969(0x32a)](_0x40855d,_0x1e58c4);},Sprite_FvUiController[_0x31b7e4(0x73)][_0x31b7e4(0xed)]=function(){const _0x3f5e74=_0x31b7e4,_0x567565=[],_0xd6130f=this[_0x3f5e74(0x270)]();if(_0xd6130f&&BattleManager[_0x3f5e74(0x1d9)]){const _0x35d600=BattleManager[_0x3f5e74(0x1d9)];if(_0x35d600){if(_0x35d600[_0x3f5e74(0xb4)]())_0x567565['push'](_0x35d600[_0x3f5e74(0xb4)]()[_0x3f5e74(0x230)]);if(_0x35d600[_0x3f5e74(0x118)]())_0x567565[_0x3f5e74(0xdd)](_0x3f5e74(0x218));if(_0x35d600[_0x3f5e74(0x15f)]())_0x567565[_0x3f5e74(0xdd)](_0x3f5e74(0x2fa));if(_0x35d600[_0x3f5e74(0x2b9)]())_0x567565['push']('CERTAIN\x20HIT');if(_0x35d600[_0x3f5e74(0x223)]())_0x567565[_0x3f5e74(0xdd)]('PHYSICAL');if(_0x35d600['isMagical']())_0x567565['push'](_0x3f5e74(0xe2));if(_0x35d600[_0x3f5e74(0x205)]())_0x567565['push'](_0x3f5e74(0xdc));if(!_0x35d600['isAttack']()&&!_0x35d600[_0x3f5e74(0x1c8)]()){if(_0x35d600[_0x3f5e74(0x11e)]())_0x567565[_0x3f5e74(0xdd)]('MAGIC');if(_0x35d600[_0x3f5e74(0x151)]())_0x567565[_0x3f5e74(0xdd)](_0x3f5e74(0x8e));}}}return _0x567565[_0x3f5e74(0xdd)](_0x3f5e74(0x23e)),_0x567565[_0x3f5e74(0xdd)](_0x3f5e74(0x119)),_0x567565;},Sprite_FvUiController['prototype'][_0x31b7e4(0x107)]=function(){const _0x2de910=_0x31b7e4;this[_0x2de910(0x197)]!==this[_0x2de910(0x183)]()&&(this[_0x2de910(0x197)]=this['currentInputFilename'](),this[_0x2de910(0x197)]!==''&&(this[_0x2de910(0x27a)]=this[_0x2de910(0x197)]),this['createNewSprite'](![]));},Sprite_FvUiController[_0x31b7e4(0x73)][_0x31b7e4(0x2b7)]=function(){const _0x39c545=_0x31b7e4;return BattleManager[_0x39c545(0x148)];},Sprite_FvUiController['prototype'][_0x31b7e4(0x183)]=function(){const _0x17d378=_0x31b7e4,_0x46e5ff=this['currentInputActor'](),_0xa32c47=this[_0x17d378(0x82)]();return DataManager['getActorFrontviewUiPortrait'](_0x46e5ff,_0xa32c47);},Sprite_FvUiController[_0x31b7e4(0x73)][_0x31b7e4(0x82)]=function(){const _0x32afbe=_0x31b7e4,_0xc98bab=[],_0x3eebf5=this[_0x32afbe(0x2b7)]();if(_0x3eebf5){const _0x4f87f3=SceneManager[_0x32afbe(0xd3)];if(_0x4f87f3){const _0x1e6e6a=_0x4f87f3[_0x32afbe(0x17c)][_0x32afbe(0xd7)]();if(_0x1e6e6a!==''){if(_0x1e6e6a===_0x32afbe(0x329)){const _0xe40d2c=_0x4f87f3['_actorCommandWindow'][_0x32afbe(0x9a)](),_0xa3d2ad=$dataSkills[_0xe40d2c][_0x32afbe(0x230)];if(_0xa3d2ad)_0xc98bab[_0x32afbe(0xdd)](_0xa3d2ad);}else _0x1e6e6a&&_0xc98bab[_0x32afbe(0xdd)](_0x1e6e6a);}}}return _0xc98bab[_0x32afbe(0xdd)]('NORMAL'),_0xc98bab[_0x32afbe(0xdd)](_0x32afbe(0x119)),_0xc98bab;},Sprite_FvUiController[_0x31b7e4(0x73)][_0x31b7e4(0x75)]=function(){const _0x5e4274=_0x31b7e4,_0x1d0608=this[_0x5e4274(0x77)](),_0x2f4546=Sprite_FvUiController[_0x5e4274(0x1d1)],_0x34d6db=[this[_0x5e4274(0x33a)],this['_subjectContainer']];for(const _0x13ff1b of _0x34d6db){if(_0x13ff1b[_0x5e4274(0x209)]>_0x1d0608)_0x13ff1b['opacity']=Math[_0x5e4274(0x272)](_0x13ff1b[_0x5e4274(0x209)]-_0x2f4546,_0x1d0608);else _0x13ff1b['opacity']<_0x1d0608&&(_0x13ff1b[_0x5e4274(0x209)]=Math[_0x5e4274(0x2ce)](_0x13ff1b[_0x5e4274(0x209)]+_0x2f4546,_0x1d0608));}},Sprite_FvUiController[_0x31b7e4(0x73)][_0x31b7e4(0x77)]=function(){const _0x4f7716=_0x31b7e4,_0x384e36=$gameSystem['isSideView']()?Sprite_FvUiController['FV_FADE_SELECT']:Sprite_FvUiController['SV_FADE_SELECT'],_0x384420=SceneManager[_0x4f7716(0xd3)];if(!_0x384420)return;const _0x49aaf1=Sprite_FvUiController[_0x4f7716(0x2d4)];if(_0x384420['isGridWindowActive']&&_0x384420['isAnyGridWindowActive']())return 0x0;if(_0x384420[_0x4f7716(0x1da)]&&_0x384420[_0x4f7716(0x1da)][_0x4f7716(0x222)])return _0x384e36[_0x4f7716(0x15e)]?0xff:_0x49aaf1;else{if(_0x384420['_enemyWindow']&&_0x384420[_0x4f7716(0x1be)]['active'])return _0x384e36[_0x4f7716(0x216)]?0xff:_0x49aaf1;}return 0xff;};function Sprite_FvUiPortrait(){const _0xb4bf1a=_0x31b7e4;this[_0xb4bf1a(0x18a)](...arguments);}Sprite_FvUiPortrait['prototype']=Object[_0x31b7e4(0x1ea)](Sprite[_0x31b7e4(0x73)]),Sprite_FvUiPortrait[_0x31b7e4(0x73)][_0x31b7e4(0x169)]=Sprite_FvUiPortrait,Sprite_FvUiPortrait['ENTER_FROM_OFFSET']=VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)][_0x31b7e4(0x320)]['EnterOffset']??0x40,Sprite_FvUiPortrait[_0x31b7e4(0x1f4)]=VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0x320)][_0x31b7e4(0x12d)]??0x14,Sprite_FvUiPortrait[_0x31b7e4(0xe9)]=VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x320)]['Scale']??0x1,Sprite_FvUiPortrait[_0x31b7e4(0x324)]=VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x320)][_0x31b7e4(0x296)]??![],Sprite_FvUiPortrait[_0x31b7e4(0x2f9)]=VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x320)][_0x31b7e4(0x13e)]??0x3c,Sprite_FvUiPortrait['prototype'][_0x31b7e4(0x18a)]=function(_0x3defd1){const _0x3b53d4=_0x31b7e4;this[_0x3b53d4(0x221)]=_0x3defd1,Sprite['prototype'][_0x3b53d4(0x18a)][_0x3b53d4(0x1f5)](this),this[_0x3b53d4(0xd1)](),this['createBitmap']();},Sprite_FvUiPortrait[_0x31b7e4(0x73)][_0x31b7e4(0xd1)]=function(){const _0x1c8df1=_0x31b7e4;this[_0x1c8df1(0x1d6)]=!![],this['x']=Sprite_FvUiPortrait[_0x1c8df1(0xc4)],this['y']=0x0,this[_0x1c8df1(0x209)]=0x0,this[_0x1c8df1(0xea)]['x']=0.5,this['anchor']['y']=0x1,this[_0x1c8df1(0x15d)]['x']=Sprite_FvUiPortrait['SPRITE_SCALE'],this[_0x1c8df1(0x15d)]['y']=Sprite_FvUiPortrait['SPRITE_SCALE'],Sprite_FvUiPortrait['SPRITE_HORZ_FLIP']&&(this[_0x1c8df1(0x15d)]['x']*=-0x1),this[_0x1c8df1(0x187)]=![],this[_0x1c8df1(0x25c)]=0x0;},Sprite_FvUiPortrait[_0x31b7e4(0x73)][_0x31b7e4(0xd5)]=function(){const _0xbaad42=_0x31b7e4;this['bitmap']=ImageManager[_0xbaad42(0x17f)](this[_0xbaad42(0x221)]),this[_0xbaad42(0x307)][_0xbaad42(0x88)](this['fadeIn'][_0xbaad42(0x2c2)](this));},Sprite_FvUiPortrait[_0x31b7e4(0x73)][_0x31b7e4(0x129)]=function(){const _0x35b602=_0x31b7e4;if(this['_fadingIn'])return;this['_fadingIn']=!![];const _0x13a0ff=Sprite_FvUiPortrait[_0x35b602(0x1f4)];this['startMove'](0x0,_0x13a0ff),this[_0x35b602(0xee)](0xff,_0x13a0ff);},Sprite_FvUiPortrait['prototype'][_0x31b7e4(0xac)]=function(){const _0x3ae3c3=_0x31b7e4;if(this[_0x3ae3c3(0xa2)])return;this[_0x3ae3c3(0xa2)]=!![];const _0x3f3de4=Sprite_FvUiPortrait[_0x3ae3c3(0x1f4)];this[_0x3ae3c3(0x31b)](0x0,_0x3f3de4),this[_0x3ae3c3(0xee)](0x0,_0x3f3de4);},Sprite_FvUiPortrait['prototype'][_0x31b7e4(0x31b)]=function(_0x17c551,_0x3fb88c){const _0x217ac7=_0x31b7e4;this[_0x217ac7(0x161)]=_0x17c551,this[_0x217ac7(0x99)]=_0x3fb88c;},Sprite_FvUiPortrait[_0x31b7e4(0x73)][_0x31b7e4(0xee)]=function(_0xf4c57f,_0x305be8){const _0x283ec8=_0x31b7e4;this[_0x283ec8(0x136)]=_0xf4c57f,this[_0x283ec8(0x13d)]=_0x305be8;},Sprite_FvUiPortrait['prototype']['setActiveAutoFadeOut']=function(){const _0x4ee004=_0x31b7e4;if(Sprite_FvUiPortrait[_0x4ee004(0x2f9)]<=0x0)return;this[_0x4ee004(0x187)]=!![];},Sprite_FvUiPortrait['prototype']['setLastInputLocation']=function(_0x33c097){const _0x44534d=_0x31b7e4;this['x']=0x0,this[_0x44534d(0x209)]=_0x33c097;},Sprite_FvUiPortrait[_0x31b7e4(0x73)][_0x31b7e4(0xe8)]=function(){const _0x15dc60=_0x31b7e4;Sprite[_0x15dc60(0x73)][_0x15dc60(0xe8)][_0x15dc60(0x1f5)](this);if(!this[_0x15dc60(0x1d6)])return;this[_0x15dc60(0xd0)](),this[_0x15dc60(0x75)](),this[_0x15dc60(0x33b)]();},Sprite_FvUiPortrait[_0x31b7e4(0x73)]['updatePosition']=function(){const _0x46b28c=_0x31b7e4;if(!this['_moveDuration'])return;if(this[_0x46b28c(0x99)]<=0x0)return;const _0x5733e0=this['_moveDuration'];this['x']=(this['x']*(_0x5733e0-0x1)+this['_moveTargetX'])/_0x5733e0,this[_0x46b28c(0x99)]--,this[_0x46b28c(0x99)]<=0x0&&(this['x']=this[_0x46b28c(0x161)],this[_0x46b28c(0x187)]&&(this[_0x46b28c(0x25c)]=Sprite_FvUiPortrait['ACTIVE_AUTO_FADEOUT']));},Sprite_FvUiPortrait[_0x31b7e4(0x73)]['updateOpacity']=function(){const _0x31d449=_0x31b7e4;if(!this[_0x31d449(0x13d)])return;if(this[_0x31d449(0x13d)]<=0x0)return;const _0x5d6e7b=this[_0x31d449(0x13d)];this['opacity']=(this[_0x31d449(0x209)]*(_0x5d6e7b-0x1)+this[_0x31d449(0x136)])/_0x5d6e7b,this[_0x31d449(0x13d)]--,this[_0x31d449(0x13d)]<=0x0&&(this[_0x31d449(0x209)]=this[_0x31d449(0x136)]);},Sprite_FvUiPortrait[_0x31b7e4(0x73)][_0x31b7e4(0x33b)]=function(){const _0x76f065=_0x31b7e4;if(!this[_0x76f065(0x25c)])return;if(this[_0x76f065(0x25c)]<=0x0)return;this['_activeAutoFadeOutDuration']--,this[_0x76f065(0x25c)]<=0x0&&this['fadeOut']();},Window_Base['FRONTVIEW_BATTLE_UI']={'maxRows':VisuMZ['FrontviewBattleUI']['Settings']['Battle']['MaxRows']??0x8,'edgeBuffer':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0x28c)]['EdgeBuffer']??0x3c,'scale':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0x28c)]['WindowScale']??0.75,'baseOffset':{'x':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)]['Battle'][_0x31b7e4(0x2f8)]??0x0,'y':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x28c)][_0x31b7e4(0x318)]??0x12},'stackOffset':{'x':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x28c)]['StackOffsetX']??0x10,'y':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)]['Battle']['StackOffsetY']??0x10},'showCancelButton':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)][_0x31b7e4(0x28c)][_0x31b7e4(0x1b6)]??![],'showShopStatus':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x28c)]['ShowShopStatus']??!![]},Window_Base[_0x31b7e4(0x73)]['initMembersFrontviewUi']=function(){const _0xdddd0=_0x31b7e4;if(!this[_0xdddd0(0x273)]())return;this[_0xdddd0(0x15d)]['x']=Window_Base[_0xdddd0(0x6e)][_0xdddd0(0x15d)],this[_0xdddd0(0x15d)]['y']=Window_Base['FRONTVIEW_BATTLE_UI'][_0xdddd0(0x15d)];},Window_Base['prototype'][_0x31b7e4(0x273)]=function(){const _0xbb6437=_0x31b7e4;return BattleManager[_0xbb6437(0x273)]();},Window_Base[_0x31b7e4(0x73)][_0x31b7e4(0x16d)]=function(){const _0x59b18d=_0x31b7e4;this[_0x59b18d(0x326)](),this[_0x59b18d(0xab)](),this[_0x59b18d(0x1ec)]();},Window_Base[_0x31b7e4(0x73)][_0x31b7e4(0x326)]=function(){const _0x32ba62=_0x31b7e4;if(!this[_0x32ba62(0x273)]())return;const _0x4fde60=this[_0x32ba62(0x321)];this[_0x32ba62(0x321)]=this[_0x32ba62(0x24d)](),_0x4fde60!==this[_0x32ba62(0x321)]&&this[_0x32ba62(0x16f)]();},Window_Base['prototype']['frontviewUiWidth']=function(){const _0x2f9310=_0x31b7e4;return Math['max'](Math[_0x2f9310(0x1ca)](Graphics[_0x2f9310(0x321)]/0x3),0xf0);},Window_Base['prototype'][_0x31b7e4(0xab)]=function(){const _0x360fae=_0x31b7e4;if(!this['isUsingFrontviewUiLayout']())return;const _0x11e09f=this[_0x360fae(0x331)],_0x53db12=Math[_0x360fae(0x272)](this[_0x360fae(0x2ae)](),0x1),_0x29cab6=this['fittingHeight'](_0x53db12),_0x504a0d=this[_0x360fae(0x101)](this[_0x360fae(0x26e)]());this[_0x360fae(0x331)]=Math[_0x360fae(0x2ce)](_0x29cab6,_0x504a0d),_0x11e09f!==this[_0x360fae(0x331)]&&this['createContents']();},Window_Base['prototype']['dataFrontviewUiLength']=function(){const _0x5dafc9=_0x31b7e4;if(this['_data'])return this[_0x5dafc9(0x158)][_0x5dafc9(0x18b)];if(this[_0x5dafc9(0x11c)])return this[_0x5dafc9(0x11c)][_0x5dafc9(0x18b)];return 0x4;},Window_Base[_0x31b7e4(0x73)][_0x31b7e4(0x26e)]=function(){const _0x2a3aa3=_0x31b7e4;return Window_Base[_0x2a3aa3(0x6e)][_0x2a3aa3(0x1e1)];},Window_Base[_0x31b7e4(0x73)][_0x31b7e4(0x1ec)]=function(){const _0x53e73b=_0x31b7e4;if(!this['isUsingFrontviewUiLayout']())return;this['x']=Math[_0x53e73b(0x1ca)](this['frontviewUiPositionX']()),this['y']=Math[_0x53e73b(0x202)](this[_0x53e73b(0x287)]());},Window_Base[_0x31b7e4(0x73)][_0x31b7e4(0xc7)]=function(){return 0x0;},Window_Base['prototype'][_0x31b7e4(0x2f0)]=function(){const _0x24aa18=_0x31b7e4;return _0x24aa18(0x1d3);},Window_Base[_0x31b7e4(0x73)]['frontviewUiPositionX']=function(){const _0x3d3f4b=_0x31b7e4,_0x1d9628=this[_0x3d3f4b(0x2f0)](),_0x2857ef=this[_0x3d3f4b(0x321)]*this['scale']['x'],_0x5052ce=Window_Base[_0x3d3f4b(0x6e)][_0x3d3f4b(0x319)];let _0x3e4270=0x0;if(_0x1d9628===_0x3d3f4b(0x1d3))_0x3e4270=(Graphics[_0x3d3f4b(0x23d)]-_0x2857ef)/0x2,this['_statusWindow']&&(_0x3e4270-=Math[_0x3d3f4b(0x202)](this[_0x3d3f4b(0x291)]['width']*this['scale']['x']*0.5));else{if(_0x1d9628===_0x3d3f4b(0x9e))_0x3e4270=Graphics[_0x3d3f4b(0x23d)]-_0x2857ef-_0x5052ce,_0x3e4270-=this[_0x3d3f4b(0xc7)]()*Window_Base[_0x3d3f4b(0x6e)][_0x3d3f4b(0x17a)]['x'],this[_0x3d3f4b(0x291)]&&(_0x3e4270-=Math[_0x3d3f4b(0x202)](this['_statusWindow']['width']*this[_0x3d3f4b(0x15d)]['x']));else _0x1d9628===_0x3d3f4b(0x246)&&(_0x3e4270=_0x5052ce,_0x3e4270+=this['frontviewUiStack']()*Window_Base[_0x3d3f4b(0x6e)][_0x3d3f4b(0x17a)]['x']);}return _0x3e4270+=Window_Base[_0x3d3f4b(0x6e)]['baseOffset']['x'],_0x3e4270;},Window_Base[_0x31b7e4(0x73)]['frontviewUiPositionY']=function(){const _0x23ab97=_0x31b7e4;let _0x24a1b8=Graphics['height']-SceneManager[_0x23ab97(0xd3)][_0x23ab97(0x291)]['height'];const _0x5a27b7=this[_0x23ab97(0x101)](this[_0x23ab97(0x26e)]());return _0x24a1b8-=_0x5a27b7*this[_0x23ab97(0x15d)]['y'],_0x24a1b8/=0x2,_0x24a1b8+=this[_0x23ab97(0xc7)]()*Window_Base['FRONTVIEW_BATTLE_UI'][_0x23ab97(0x17a)]['y'],_0x24a1b8+=Window_Base[_0x23ab97(0x6e)][_0x23ab97(0x14e)]['y'],Imported[_0x23ab97(0x28f)]&&$gameTroop[_0x23ab97(0x1b2)]()>0x0&&(this[_0x23ab97(0xc7)]()>0x0&&(_0x24a1b8+=Math[_0x23ab97(0x2ff)](Sprite_MultiLayerHpContainer['SETTINGS'][_0x23ab97(0x143)]*0x2/0x3))),_0x24a1b8;},Window_Base[_0x31b7e4(0x73)][_0x31b7e4(0x292)]=function(){const _0x180a65=_0x31b7e4;if(!this['_statusWindow'])return;this[_0x180a65(0x291)][_0x180a65(0x323)](),this[_0x180a65(0x291)]['x']=Math['ceil'](this['x']+this[_0x180a65(0x321)]*this[_0x180a65(0x15d)]['x']),this[_0x180a65(0x291)]['y']=this['y'],this[_0x180a65(0x291)]['x']+this[_0x180a65(0x291)][_0x180a65(0x321)]*this[_0x180a65(0x15d)]['x']>Graphics[_0x180a65(0x23d)]&&(this['_statusWindow']['x']=Graphics[_0x180a65(0x23d)]-this[_0x180a65(0x291)][_0x180a65(0x321)]*this['scale']['x'],this[_0x180a65(0x291)]['y']+=Window_Base['FRONTVIEW_BATTLE_UI'][_0x180a65(0x17a)]['y']);},Window_Base[_0x31b7e4(0x73)]['hideFrontviewUiShopStatusWindow']=function(){const _0x2ea4a3=_0x31b7e4;if(!this[_0x2ea4a3(0x291)])return;this[_0x2ea4a3(0x291)]['hide']();},VisuMZ[_0x31b7e4(0x25a)]['Window_Base_open']=Window_Base[_0x31b7e4(0x73)][_0x31b7e4(0x1b7)],Window_Base['prototype'][_0x31b7e4(0x1b7)]=function(){const _0x39246c=_0x31b7e4;VisuMZ[_0x39246c(0x25a)][_0x39246c(0x20c)][_0x39246c(0x1f5)](this),this['_opening']&&BattleManager[_0x39246c(0x273)]()&&this[_0x39246c(0x291)]&&(this['_statusWindow'][_0x39246c(0x2fc)]=this[_0x39246c(0x2fc)],this[_0x39246c(0x291)]['open']());},VisuMZ[_0x31b7e4(0x25a)]['Window_Base_close']=Window_Base[_0x31b7e4(0x73)][_0x31b7e4(0x32f)],Window_Base['prototype'][_0x31b7e4(0x32f)]=function(){const _0x4e8d12=_0x31b7e4;VisuMZ['FrontviewBattleUI'][_0x4e8d12(0x284)][_0x4e8d12(0x1f5)](this),this['_closing']&&BattleManager[_0x4e8d12(0x273)]()&&this[_0x4e8d12(0x291)]&&(this[_0x4e8d12(0x291)][_0x4e8d12(0x2fc)]=this[_0x4e8d12(0x2fc)],this[_0x4e8d12(0x291)][_0x4e8d12(0x32f)]());},Window_ItemList['FRONTVIEW_BATTLE_UI']={'location':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x28c)][_0x31b7e4(0x13b)]??_0x31b7e4(0x246)},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x332)]=Window_ItemList[_0x31b7e4(0x73)][_0x31b7e4(0x18a)],Window_ItemList['prototype']['initialize']=function(_0x1ef1cb){const _0x5c6847=_0x31b7e4;VisuMZ[_0x5c6847(0x25a)][_0x5c6847(0x332)]['call'](this,_0x1ef1cb),this[_0x5c6847(0x262)]();},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1cb)]=Window_ItemList[_0x31b7e4(0x73)][_0x31b7e4(0x2e4)],Window_ItemList['prototype'][_0x31b7e4(0x2e4)]=function(){const _0x1bd184=_0x31b7e4;return this[_0x1bd184(0x273)]()?0x1:VisuMZ[_0x1bd184(0x25a)][_0x1bd184(0x1cb)][_0x1bd184(0x1f5)](this);},VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1a4)]=Window_ItemList[_0x31b7e4(0x73)][_0x31b7e4(0x253)],Window_ItemList['prototype'][_0x31b7e4(0x253)]=function(){const _0x501c2e=_0x31b7e4;return this[_0x501c2e(0x273)]()?0x0:VisuMZ[_0x501c2e(0x25a)][_0x501c2e(0x1a4)][_0x501c2e(0x1f5)](this);},Window_ItemList[_0x31b7e4(0x73)]['frontviewUiWidth']=function(){const _0x327e34=_0x31b7e4;return Math[_0x327e34(0x1ca)](Graphics[_0x327e34(0x321)]/0x2);},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0xe7)]=Window_ItemList['prototype'][_0x31b7e4(0x1b3)],Window_ItemList['prototype'][_0x31b7e4(0x1b3)]=function(){const _0x294382=_0x31b7e4;VisuMZ['FrontviewBattleUI'][_0x294382(0xe7)][_0x294382(0x1f5)](this),this[_0x294382(0x16d)]();},Window_ItemList[_0x31b7e4(0x73)]['frontviewUiLocation']=function(){const _0x46bf27=_0x31b7e4;return Window_ItemList[_0x46bf27(0x6e)][_0x46bf27(0x2ba)];},Window_ItemList['prototype'][_0x31b7e4(0xc7)]=function(){return 0x1;},Window_SkillList[_0x31b7e4(0x6e)]={'location':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)][_0x31b7e4(0x28c)][_0x31b7e4(0xa4)]??_0x31b7e4(0x246)},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x229)]=Window_SkillList[_0x31b7e4(0x73)][_0x31b7e4(0x18a)],Window_SkillList[_0x31b7e4(0x73)]['initialize']=function(_0x404ad3){const _0x59bbe8=_0x31b7e4;VisuMZ[_0x59bbe8(0x25a)][_0x59bbe8(0x229)][_0x59bbe8(0x1f5)](this,_0x404ad3),this[_0x59bbe8(0x262)]();},VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x19e)]=Window_SkillList['prototype'][_0x31b7e4(0x2e4)],Window_SkillList[_0x31b7e4(0x73)][_0x31b7e4(0x2e4)]=function(){const _0x2bf4c9=_0x31b7e4;return this['isUsingFrontviewUiLayout']()?0x1:VisuMZ[_0x2bf4c9(0x25a)][_0x2bf4c9(0x19e)][_0x2bf4c9(0x1f5)](this);},VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x312)]=Window_SkillList[_0x31b7e4(0x73)][_0x31b7e4(0x253)],Window_SkillList[_0x31b7e4(0x73)][_0x31b7e4(0x253)]=function(){const _0x3cb401=_0x31b7e4;return this['isUsingFrontviewUiLayout']()?0x0:VisuMZ[_0x3cb401(0x25a)]['Window_SkillList_colSpacing']['call'](this);},Window_SkillList['prototype'][_0x31b7e4(0x24d)]=function(){const _0x25a808=_0x31b7e4;return Math[_0x25a808(0x1ca)](Graphics[_0x25a808(0x321)]/0x2);},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1bb)]=Window_SkillList['prototype'][_0x31b7e4(0x1b3)],Window_SkillList[_0x31b7e4(0x73)]['makeItemList']=function(){const _0x27e901=_0x31b7e4;VisuMZ[_0x27e901(0x25a)][_0x27e901(0x1bb)][_0x27e901(0x1f5)](this),this[_0x27e901(0x16d)]();},Window_SkillList[_0x31b7e4(0x73)][_0x31b7e4(0x2f0)]=function(){const _0x41f287=_0x31b7e4;return Window_SkillList[_0x41f287(0x6e)][_0x41f287(0x2ba)];},Window_SkillList[_0x31b7e4(0x73)][_0x31b7e4(0xc7)]=function(){return 0x1;},VisuMZ['FrontviewBattleUI']['Window_BattleSkill_show']=Window_BattleSkill[_0x31b7e4(0x73)][_0x31b7e4(0x323)],Window_BattleSkill[_0x31b7e4(0x73)][_0x31b7e4(0x323)]=function(){const _0x2c119f=_0x31b7e4;VisuMZ[_0x2c119f(0x25a)][_0x2c119f(0x1e8)]['call'](this),this[_0x2c119f(0x292)]();},VisuMZ['FrontviewBattleUI'][_0x31b7e4(0xff)]=Window_BattleSkill[_0x31b7e4(0x73)][_0x31b7e4(0xbd)],Window_BattleSkill[_0x31b7e4(0x73)][_0x31b7e4(0xbd)]=function(){const _0xc9d9d8=_0x31b7e4;VisuMZ[_0xc9d9d8(0x25a)]['Window_BattleSkill_hide'][_0xc9d9d8(0x1f5)](this),this[_0xc9d9d8(0x164)]();},VisuMZ[_0x31b7e4(0x25a)]['Window_BattleItem_show']=Window_BattleItem['prototype'][_0x31b7e4(0x323)],Window_BattleItem[_0x31b7e4(0x73)][_0x31b7e4(0x323)]=function(){const _0x2b5550=_0x31b7e4;VisuMZ[_0x2b5550(0x25a)]['Window_BattleItem_show'][_0x2b5550(0x1f5)](this),this[_0x2b5550(0x292)]();},VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1bd)]=Window_BattleItem[_0x31b7e4(0x73)]['hide'],Window_BattleItem['prototype'][_0x31b7e4(0xbd)]=function(){const _0x27eb63=_0x31b7e4;VisuMZ[_0x27eb63(0x25a)][_0x27eb63(0x1bd)][_0x27eb63(0x1f5)](this),this[_0x27eb63(0x164)]();},Window_PartyCommand['FRONTVIEW_BATTLE_UI']={'location':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)]['Battle'][_0x31b7e4(0x2e6)]??'left'},VisuMZ['FrontviewBattleUI'][_0x31b7e4(0xa9)]=Window_PartyCommand[_0x31b7e4(0x73)][_0x31b7e4(0x18a)],Window_PartyCommand[_0x31b7e4(0x73)][_0x31b7e4(0x18a)]=function(_0x263057){const _0x38d4e2=_0x31b7e4;VisuMZ['FrontviewBattleUI'][_0x38d4e2(0xa9)][_0x38d4e2(0x1f5)](this,_0x263057),this['initMembersFrontviewUi']();},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x15c)]=Window_PartyCommand['prototype'][_0x31b7e4(0x2a4)],Window_PartyCommand['prototype']['makeCommandList']=function(){const _0x367a87=_0x31b7e4;VisuMZ['FrontviewBattleUI'][_0x367a87(0x15c)][_0x367a87(0x1f5)](this),this[_0x367a87(0x16d)]();},Window_PartyCommand[_0x31b7e4(0x73)][_0x31b7e4(0x2f0)]=function(){const _0x271b64=_0x31b7e4;return Window_PartyCommand[_0x271b64(0x6e)]['location'];},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x271)]=Window_PartyCommand[_0x31b7e4(0x73)][_0x31b7e4(0x30a)],Window_PartyCommand['prototype'][_0x31b7e4(0x30a)]=function(){const _0x48b397=_0x31b7e4;VisuMZ[_0x48b397(0x25a)][_0x48b397(0x271)][_0x48b397(0x1f5)](this),BattleManager[_0x48b397(0x273)]()&&Window_BattleStatus['FRONTVIEW_BATTLE_UI'][_0x48b397(0xce)]&&this[_0x48b397(0x2d2)]();},Window_ActorCommand['FRONTVIEW_BATTLE_UI']={'location':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x28c)][_0x31b7e4(0x240)]??_0x31b7e4(0x246)},VisuMZ['FrontviewBattleUI']['Window_ActorCommand_initialize']=Window_ActorCommand[_0x31b7e4(0x73)]['initialize'],Window_ActorCommand['prototype'][_0x31b7e4(0x18a)]=function(_0x308706){const _0x248afb=_0x31b7e4;VisuMZ[_0x248afb(0x25a)][_0x248afb(0x2a9)][_0x248afb(0x1f5)](this,_0x308706),this[_0x248afb(0x262)]();},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x26a)]=Window_ActorCommand[_0x31b7e4(0x73)][_0x31b7e4(0x2a4)],Window_ActorCommand[_0x31b7e4(0x73)][_0x31b7e4(0x2a4)]=function(){const _0x5c5254=_0x31b7e4;VisuMZ[_0x5c5254(0x25a)][_0x5c5254(0x26a)][_0x5c5254(0x1f5)](this),this['adjustForFrontviewUi']();},Window_ActorCommand[_0x31b7e4(0x73)]['frontviewUiLocation']=function(){const _0x3835c3=_0x31b7e4;return Window_ActorCommand['FRONTVIEW_BATTLE_UI'][_0x3835c3(0x2ba)];},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x2cb)]=Window_ActorCommand[_0x31b7e4(0x73)]['activate'],Window_ActorCommand[_0x31b7e4(0x73)][_0x31b7e4(0x30a)]=function(){const _0x492f92=_0x31b7e4;VisuMZ['FrontviewBattleUI']['Window_ActorCommand_activate']['call'](this),BattleManager[_0x492f92(0x273)]()&&Window_BattleStatus[_0x492f92(0x6e)][_0x492f92(0xce)]&&this[_0x492f92(0x2d2)]();},Window_BattleStatus[_0x31b7e4(0x6e)]={'animationOffset':{'x':VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x1e7)][_0x31b7e4(0x28c)][_0x31b7e4(0x2bd)]??0x0,'y':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x28c)][_0x31b7e4(0x280)]??0x20},'compactWidth':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)]['Battle'][_0x31b7e4(0x26f)]??!![],'commandHelpWindow':VisuMZ[_0x31b7e4(0x25a)]['Settings'][_0x31b7e4(0x28c)][_0x31b7e4(0xe5)]??![],'initialPosition':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x28c)][_0x31b7e4(0x152)]??'right','moveCenter':VisuMZ[_0x31b7e4(0x25a)]['Settings']['Battle'][_0x31b7e4(0x21d)]??!![]},VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x163)]=Window_BattleStatus[_0x31b7e4(0x73)]['initialize'],Window_BattleStatus['prototype']['initialize']=function(_0x150ac4){const _0x1bc1cc=_0x31b7e4;VisuMZ['FrontviewBattleUI']['Window_BattleStatus_initialize'][_0x1bc1cc(0x1f5)](this,_0x150ac4),this[_0x1bc1cc(0x115)]()&&(this[_0x1bc1cc(0x166)](),this[_0x1bc1cc(0x1d8)](),this[_0x1bc1cc(0xfc)]());},Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x115)]=function(){return BattleManager['isUsingFrontviewUiLayout']();},Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x166)]=function(){const _0x1d2e75=_0x31b7e4;this[_0x1d2e75(0x18f)](0x2),this[_0x1d2e75(0x2cd)]=![];},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x93)]=Window_BattleStatus['prototype'][_0x31b7e4(0x2e4)],Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x2e4)]=function(){const _0xe1a6ae=_0x31b7e4;return BattleManager[_0xe1a6ae(0x273)]()?$gameParty[_0xe1a6ae(0x213)]()[_0xe1a6ae(0x18b)]:VisuMZ['FrontviewBattleUI'][_0xe1a6ae(0x93)][_0xe1a6ae(0x1f5)](this);},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0xa1)]=Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x328)],Window_BattleStatus[_0x31b7e4(0x73)]['maxItems']=function(){const _0x4baec9=_0x31b7e4;return BattleManager[_0x4baec9(0x273)]()?$gameParty[_0x4baec9(0x213)]()['length']:VisuMZ[_0x4baec9(0x25a)][_0x4baec9(0xa1)]['call'](this);},VisuMZ['FrontviewBattleUI']['Window_BattleStatus_updatePadding']=Window_BattleStatus[_0x31b7e4(0x73)]['updatePadding'],Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x182)]=function(){const _0x4e646b=_0x31b7e4;BattleManager[_0x4e646b(0x273)]()?this[_0x4e646b(0x261)]=0x0:VisuMZ[_0x4e646b(0x25a)][_0x4e646b(0x180)][_0x4e646b(0x1f5)](this);},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x299)]=Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x21e)],Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x21e)]=function(){const _0x5c0082=_0x31b7e4;VisuMZ[_0x5c0082(0x25a)][_0x5c0082(0x299)][_0x5c0082(0x1f5)](this),BattleManager[_0x5c0082(0x273)]()&&this['setCursorRect'](0x0,0x0,0x0,0x0);},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x139)]=Window_Selectable[_0x31b7e4(0x73)][_0x31b7e4(0xf6)],Window_Selectable[_0x31b7e4(0x73)][_0x31b7e4(0xf6)]=function(_0x7d44f2){const _0x5f34de=_0x31b7e4;return this[_0x5f34de(0x169)]===Window_BattleStatus&&BattleManager[_0x5f34de(0x273)]()?this[_0x5f34de(0x1e3)](_0x7d44f2):VisuMZ[_0x5f34de(0x25a)][_0x5f34de(0x139)][_0x5f34de(0x1f5)](this,_0x7d44f2);},Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x1e3)]=function(_0x25faaf){const _0x11b1d9=_0x31b7e4;if(!this['_frontviewUiSprites'])return VisuMZ[_0x11b1d9(0x25a)][_0x11b1d9(0x139)][_0x11b1d9(0x1f5)](this,_0x25faaf);let _0x5975aa=Math[_0x11b1d9(0x2ce)](this[_0x11b1d9(0x321)]/this[_0x11b1d9(0x2e4)](),ImageManager['faceWidth']),_0x28a459=this[_0x11b1d9(0x331)];const _0xa6a0b3=$gameParty['maxBattleMembers']()-_0x25faaf-0x1;let _0xd005ea=Math['round'](this[_0x11b1d9(0x2a1)][_0xa6a0b3]['x']-_0x5975aa/0x2),_0x1d22c7=0x0;return new Rectangle(_0xd005ea,_0x1d22c7,_0x5975aa,_0x28a459);},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x2e2)]=Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0xca)],Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0xca)]=function(_0x1a08cc){const _0x15f7d0=_0x31b7e4;if(BattleManager[_0x15f7d0(0x273)]())return;VisuMZ[_0x15f7d0(0x25a)][_0x15f7d0(0x2e2)][_0x15f7d0(0x1f5)](this,_0x1a08cc);},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x27e)]=Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x294)],Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x294)]=function(_0xb03f90){const _0x5b5a48=_0x31b7e4;BattleManager[_0x5b5a48(0x273)]()?this[_0x5b5a48(0x2a7)](_0xb03f90):VisuMZ[_0x5b5a48(0x25a)][_0x5b5a48(0x27e)][_0x5b5a48(0x1f5)](this,_0xb03f90);},Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x2a7)]=function(_0x467c99){const _0x297bc0=_0x31b7e4;this[_0x297bc0(0xb7)](_0x467c99);},Window_BattleStatus['prototype'][_0x31b7e4(0xb7)]=function(_0xbfcff2){const _0x549a45=_0x31b7e4;if(!SceneManager[_0x549a45(0x293)]())return;if($gameSystem[_0x549a45(0x233)]())return;const _0x46d7c6=this[_0x549a45(0x15e)](_0xbfcff2);if(!_0x46d7c6)return;const _0x3ab508=_0x46d7c6[_0x549a45(0xa5)]();if(!_0x3ab508)return;const _0x8679ab=this[_0x549a45(0x14a)](_0xbfcff2);if(!_0x8679ab)return;let _0xb09843=_0x8679ab['x'],_0x562b1e=this[_0x549a45(0x331)]/0x2;_0xb09843+=Window_BattleStatus[_0x549a45(0x6e)]['animationOffset']['x'],_0x562b1e+=Window_BattleStatus[_0x549a45(0x6e)]['animationOffset']['y'],_0x3ab508[_0x549a45(0x1c6)](_0xb09843,_0x562b1e),this[_0x549a45(0x231)](_0x3ab508,0x1);if($gameSystem['isSideView']())_0x3ab508[_0x549a45(0x323)]();if(!$gameSystem[_0x549a45(0x233)]())_0x3ab508[_0x549a45(0xbd)]();if(this[_0x549a45(0x241)])this[_0x549a45(0x265)](this[_0x549a45(0x241)]);this['updateEffectsContainer'](),this[_0x549a45(0x295)]();},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0xbe)]=Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x2fd)],Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x2fd)]=function(_0x5c4934,_0x3f99bb){const _0x3fb7e3=_0x31b7e4;BattleManager['isUsingFrontviewUiLayout']()&&!$gameSystem['isSideView']()?this[_0x3fb7e3(0x2eb)](_0x5c4934,_0x3f99bb):VisuMZ[_0x3fb7e3(0x25a)][_0x3fb7e3(0xbe)]['call'](this,_0x5c4934,_0x3f99bb);},Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x2eb)]=function(_0x38faa5,_0x4d2d63){const _0x427f4d=_0x31b7e4;if(!this[_0x427f4d(0x241)])return;if(!_0x38faa5)return;if(!_0x4d2d63)return;const _0x4dbd5c=this[_0x427f4d(0xf6)](_0x4d2d63[_0x427f4d(0x25d)]()),_0x117dad=this[_0x427f4d(0x14a)](_0x4d2d63[_0x427f4d(0x25d)]());_0x4dbd5c['x']+=_0x4dbd5c[_0x427f4d(0x321)]/0x2+this[_0x427f4d(0x261)],_0x38faa5['x']=_0x117dad['x'],_0x38faa5['y']=_0x4dbd5c['y']+_0x4dbd5c['height']/0x2,this[_0x427f4d(0x241)][_0x427f4d(0x265)](_0x38faa5);},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x178)]=Game_Actor[_0x31b7e4(0x73)]['battleUIOffsetY'],Game_Actor[_0x31b7e4(0x73)][_0x31b7e4(0x2ea)]=function(){const _0x2d49c7=_0x31b7e4;if(BattleManager[_0x2d49c7(0x273)]()&&!$gameSystem[_0x2d49c7(0x233)]())return Graphics[_0x2d49c7(0x331)]*0xa;return VisuMZ[_0x2d49c7(0x25a)][_0x2d49c7(0x178)][_0x2d49c7(0x1f5)](this);},VisuMZ['FrontviewBattleUI'][_0x31b7e4(0x199)]=Sprite_Battler[_0x31b7e4(0x73)][_0x31b7e4(0x31e)],Sprite_Battler['prototype'][_0x31b7e4(0x31e)]=function(){const _0x19f6b9=_0x31b7e4;if(this[_0x19f6b9(0xec)]&&this[_0x19f6b9(0xec)][_0x19f6b9(0x200)]()&&BattleManager[_0x19f6b9(0x273)]()&&!$gameSystem[_0x19f6b9(0x233)]())return![];return VisuMZ[_0x19f6b9(0x25a)][_0x19f6b9(0x199)]['call'](this);},Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x1d8)]=function(){const _0x541cd4=_0x31b7e4;if(!this[_0x541cd4(0x256)]())return;this[_0x541cd4(0x2a1)]=[];let _0xe6ba5a=$gameParty['maxBattleMembers']();const _0x47ecfd=this[_0x541cd4(0x122)]();while(_0xe6ba5a-->0x0){const _0x397d11=new Sprite_FvUiStatus(_0xe6ba5a,_0x47ecfd,this);this[_0x541cd4(0x265)](_0x397d11),this[_0x541cd4(0x2a1)][_0x541cd4(0xdd)](_0x397d11);}},Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x256)]=function(){const _0xd01766=_0x31b7e4;return this[_0xd01766(0x169)]===Window_BattleStatus;},Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x122)]=function(){const _0x4403d4=_0x31b7e4;return Window_BattleStatus[_0x4403d4(0x6e)]['initialPosition'];},Window_BattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x14a)]=function(_0x4c26d2){const _0x131ba7=_0x31b7e4;if(!this[_0x131ba7(0x2a1)])return null;return this[_0x131ba7(0x2a1)][_0x131ba7(0x91)](_0x1992ea=>_0x1992ea[_0x131ba7(0x234)]===_0x4c26d2);},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x236)]=BattleManager['startTurn'],BattleManager[_0x31b7e4(0x157)]=function(){const _0x104f5b=_0x31b7e4;VisuMZ[_0x104f5b(0x25a)]['BattleManager_startTurn'][_0x104f5b(0x1f5)](this);if(BattleManager[_0x104f5b(0x273)]()){const _0x5db84a=SceneManager[_0x104f5b(0xd3)]['_statusWindow'];if(!_0x5db84a)return;_0x5db84a[_0x104f5b(0xfc)]();}},Window_BattleStatus['prototype']['centerAllFrontViewBattleUiSprites']=function(){const _0x483560=_0x31b7e4;if(!this[_0x483560(0x2a1)])return null;const _0x5df88d=this['_frontviewUiSprites'][_0x483560(0x18b)];for(let _0x14617a=0x0;_0x14617a<_0x5df88d;_0x14617a++){this[_0x483560(0xb7)](_0x14617a);}},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x22c)]=BattleManager[_0x31b7e4(0x1c0)],BattleManager[_0x31b7e4(0x1c0)]=function(){const _0x9aa030=_0x31b7e4;if(this['isUsingFrontviewUiLayout']()){const _0x317ef6=SceneManager[_0x9aa030(0xd3)][_0x9aa030(0x291)];_0x317ef6&&_0x317ef6[_0x9aa030(0xfc)]();}VisuMZ['FrontviewBattleUI']['BattleManager_startAction'][_0x9aa030(0x1f5)](this);};function Window_FrontviewUiMapBattleStatus(){const _0x587bba=_0x31b7e4;this[_0x587bba(0x18a)](...arguments);}function _0x5dad(_0x238bbb,_0x5d848d){const _0x93695d=_0x9369();return _0x5dad=function(_0x5dade2,_0x433948){_0x5dade2=_0x5dade2-0x6c;let _0x2e9e21=_0x93695d[_0x5dade2];return _0x2e9e21;},_0x5dad(_0x238bbb,_0x5d848d);}Window_FrontviewUiMapBattleStatus[_0x31b7e4(0x73)]=Object[_0x31b7e4(0x1ea)](Window_BattleStatus[_0x31b7e4(0x73)]),Window_FrontviewUiMapBattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x169)]=Window_FrontviewUiMapBattleStatus,Window_FrontviewUiMapBattleStatus[_0x31b7e4(0x6e)]={'show':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x31c)][_0x31b7e4(0x1a9)]??!![],'compactWidth':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x31c)][_0x31b7e4(0x26f)]??!![],'initialPosition':VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x1e7)][_0x31b7e4(0x31c)][_0x31b7e4(0x152)]??_0x31b7e4(0x246),'scale':VisuMZ['FrontviewBattleUI']['Settings'][_0x31b7e4(0x31c)][_0x31b7e4(0xfe)]??0x1,'moveCenter':![]},Window_FrontviewUiMapBattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x18a)]=function(_0x430d8c){const _0x286d52=_0x31b7e4,_0x3c5d16=Window_FrontviewUiMapBattleStatus[_0x286d52(0x6e)][_0x286d52(0x15d)];_0x430d8c['width']=Math['ceil'](_0x430d8c[_0x286d52(0x321)]/_0x3c5d16),Window_BattleStatus['prototype'][_0x286d52(0x18a)]['call'](this,_0x430d8c),this[_0x286d52(0xa3)](),this['scale']['x']=this[_0x286d52(0x15d)]['y']=Window_FrontviewUiMapBattleStatus[_0x286d52(0x6e)][_0x286d52(0x15d)];},Window_FrontviewUiMapBattleStatus['prototype'][_0x31b7e4(0xa3)]=function(){const _0x49c06b=_0x31b7e4;if(!this[_0x49c06b(0x115)]())return;this['openness']=0xff,this[_0x49c06b(0x21c)]={};},Window_FrontviewUiMapBattleStatus['prototype'][_0x31b7e4(0x115)]=function(){const _0x1d136a=_0x31b7e4;return SceneManager[_0x1d136a(0x273)]();},Window_FrontviewUiMapBattleStatus[_0x31b7e4(0x73)]['battleLayoutStyle']=function(){const _0x2d243a=_0x31b7e4;if(this[_0x2d243a(0x2f6)])return this[_0x2d243a(0x2f6)];return this[_0x2d243a(0x2f6)]=VisuMZ[_0x2d243a(0x20b)]['Settings'][_0x2d243a(0xf3)][_0x2d243a(0x2b3)][_0x2d243a(0xae)]()['trim'](),this[_0x2d243a(0x2f6)];},Window_FrontviewUiMapBattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x1d8)]=function(){const _0x2c2217=_0x31b7e4;Window_BattleStatus[_0x2c2217(0x73)]['createFrontviewBattleUiSprites'][_0x2c2217(0x1f5)](this),this[_0x2c2217(0x265)](this[_0x2c2217(0x241)]);},Window_FrontviewUiMapBattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x256)]=function(){const _0x1a6a6c=_0x31b7e4;return this[_0x1a6a6c(0x115)]();},Window_FrontviewUiMapBattleStatus['prototype'][_0x31b7e4(0x294)]=function(_0x432aee){},Window_FrontviewUiMapBattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0xca)]=function(_0x311b70){},Window_FrontviewUiMapBattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x122)]=function(){const _0x5072da=_0x31b7e4;return Window_FrontviewUiMapBattleStatus[_0x5072da(0x6e)][_0x5072da(0x2df)];},Window_FrontviewUiMapBattleStatus['prototype'][_0x31b7e4(0xe8)]=function(){const _0x26d13d=_0x31b7e4;Window_BattleStatus[_0x26d13d(0x73)][_0x26d13d(0xe8)][_0x26d13d(0x1f5)](this),this[_0x26d13d(0x27c)](),this[_0x26d13d(0x17b)]();},Window_FrontviewUiMapBattleStatus['prototype'][_0x31b7e4(0x27c)]=function(){const _0x26a7c6=_0x31b7e4;if(!SceneManager['isUsingFrontviewUiLayout']())return;if(!this[_0x26a7c6(0x21c)])return;const _0x25030d=[];for(const _0x45e372 in this[_0x26a7c6(0x21c)]){const _0x5e0844=this[_0x26a7c6(0x21c)][_0x45e372];if(_0x5e0844)for(const _0x114d12 of _0x5e0844){if(!_0x114d12)continue;!_0x114d12[_0x26a7c6(0x1fe)]()&&(_0x25030d[_0x26a7c6(0xdd)](_0x114d12),_0x5e0844[_0x26a7c6(0x26b)](_0x114d12));}}while(_0x25030d['length']>0x0){const _0x27450d=_0x25030d[_0x26a7c6(0x95)]();this[_0x26a7c6(0x2e9)](_0x27450d);}},Window_FrontviewUiMapBattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x17b)]=function(){const _0x4f63a0=_0x31b7e4;this[_0x4f63a0(0x241)]&&(this['_damageContainer']['opacity']=this[_0x4f63a0(0x1dd)]());},Window_FrontviewUiMapBattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x1dd)]=function(){const _0x315632=_0x31b7e4;if(!$gameSystem[_0x315632(0x2e7)]())return 0x0;if($gamePlayer[_0x315632(0xa0)]())return Sprite_FvUiStatus[_0x315632(0x220)];return 0xff;},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x24a)]=function(_0x1a249d){const _0x5d5d8a=_0x31b7e4;if(!SceneManager[_0x5d5d8a(0x273)]())return;if(!_0x1a249d)return;const _0x2ca1d0=SceneManager['_scene'];if(!_0x2ca1d0)return;if(!_0x2ca1d0[_0x5d5d8a(0x117)])return;if(SceneManager[_0x5d5d8a(0xf9)]()&&!$gameSystem[_0x5d5d8a(0x2e7)]())return;_0x2ca1d0[_0x5d5d8a(0x117)]['createFvUiDamageSprite'](_0x1a249d),_0x1a249d[_0x5d5d8a(0x15a)](),_0x1a249d[_0x5d5d8a(0x13c)]();},Window_FrontviewUiMapBattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x80)]=function(_0x365899,_0x47577c){const _0x15b3d2=_0x31b7e4,_0x584ab3=VisuMZ[_0x15b3d2(0x20b)][_0x15b3d2(0x1e7)][_0x15b3d2(0x2c7)];this[_0x15b3d2(0x21c)]=this['_damageSprites']||{},this[_0x15b3d2(0x21c)][_0x47577c['index']()]=this[_0x15b3d2(0x21c)][_0x47577c['index']()]||[];const _0x2823c5=this['_damageSprites'][_0x47577c[_0x15b3d2(0x25d)]()];if(_0x584ab3[_0x15b3d2(0x338)])for(const _0x147366 of _0x2823c5){_0x147366['x']+=_0x584ab3[_0x15b3d2(0x7b)],_0x147366['y']+=_0x584ab3['PopupShiftY'];}else{const _0x689d2d=_0x2823c5[_0x2823c5['length']-0x1];_0x689d2d&&(_0x365899['x']=_0x689d2d['x']+_0x584ab3[_0x15b3d2(0x7b)],_0x365899['y']=_0x689d2d['y']+_0x584ab3[_0x15b3d2(0x2ed)]);}_0x2823c5['push'](_0x365899);},Window_FrontviewUiMapBattleStatus['prototype']['createFvUiDamageSprite']=function(_0x2d05e5){const _0x3a8804=_0x31b7e4;if(!this[_0x3a8804(0x115)]())return;if(!_0x2d05e5)return;if(!$gameParty[_0x3a8804(0x213)]()['includes'](_0x2d05e5))return;const _0x11ac5d=VisuMZ[_0x3a8804(0x20b)][_0x3a8804(0x1e7)][_0x3a8804(0x2c7)],_0x527e43=new Sprite_Damage();_0x527e43[_0x3a8804(0x96)]=_0x11ac5d['PopupDuration'],this[_0x3a8804(0x80)](_0x527e43,_0x2d05e5),_0x527e43[_0x3a8804(0x2bb)](_0x2d05e5),_0x527e43['setupBattleCore'](_0x2d05e5),this[_0x3a8804(0x2eb)](_0x527e43,_0x2d05e5);},VisuMZ[_0x31b7e4(0x25a)][_0x31b7e4(0x25b)]=function(_0x19394e,_0x1b48ff,_0x138d10){const _0x3d9b49=_0x31b7e4;if(!Imported[_0x3d9b49(0x24f)])return;if(!SceneManager[_0x3d9b49(0x273)]())return;if(!_0x19394e)return;if(_0x1b48ff===_0x19394e['deathStateId']())return;if(_0x138d10&&!_0x19394e[_0x3d9b49(0x2a3)](_0x1b48ff))return;if(!_0x138d10&&_0x19394e[_0x3d9b49(0x2a3)](_0x1b48ff))return;const _0x10a438=VisuMZ[_0x3d9b49(0xc0)][_0x3d9b49(0x1e7)]['State'],_0x46930f=$dataStates[_0x1b48ff];if(!_0x46930f)return;_0x10a438['ShowPopups']&&!_0x46930f[_0x3d9b49(0x259)][_0x3d9b49(0x19a)](/<HIDE STATE POPUP>/i)&&this[_0x3d9b49(0x1fa)](_0x19394e,_0x1b48ff,_0x138d10);},VisuMZ[_0x31b7e4(0x25a)]['setupVisualStateEffectsPopup']=function(_0x4b0695,_0x3f42f0,_0x3bfc68){const _0x49b478=_0x31b7e4,_0x4c49e9=VisuMZ[_0x49b478(0xc0)]['Settings'][_0x49b478(0x258)],_0xc24d00=$dataStates[_0x3f42f0];if(!_0xc24d00)return;const _0x2f90d9=_0x3bfc68?'Add':_0x49b478(0x14c),_0x3ff1c7=_0xc24d00['iconIndex'];if(_0x3ff1c7<=0x0)return;const _0x348cf1=_0x4c49e9[_0x49b478(0x276)['format'](_0x2f90d9)];if(_0x348cf1[_0x49b478(0x18b)]<=0x0)return;let _0x71ca88=_0x348cf1[_0x49b478(0xaf)](_0xc24d00[_0x49b478(0x230)]);const _0x4a27b1={'textColor':_0x4c49e9[_0x49b478(0x105)]||0x0,'flashColor':_0x4c49e9[_0x49b478(0x116)]||[0x0,0x0,0x0,0x0],'flashDuration':_0x4c49e9[_0x49b478(0x1ce)]||0x0};_0x4c49e9[_0x49b478(0x31f)]&&(_0x4a27b1[_0x49b478(0x181)]=ColorManager[_0x49b478(0x9c)](_0xc24d00));VisuMZ[_0x49b478(0xc0)][_0x49b478(0x224)](_0xc24d00,_0x4a27b1);const _0x539270=ImageManager[_0x49b478(0x247)](_0x49b478(0x302));_0x539270[_0x49b478(0x88)](this[_0x49b478(0x1b9)][_0x49b478(0x2c2)](this,_0x4b0695,_0x3ff1c7,_0x71ca88,_0x4a27b1));},VisuMZ[_0x31b7e4(0x25a)]['setupIconTextPopup']=function(_0x6fd192,_0x4d40ab,_0x5d694b,_0x467f47){const _0x2545c1=_0x31b7e4,_0x13f20f=SceneManager[_0x2545c1(0xd3)];if(!_0x13f20f)return;if(!_0x13f20f[_0x2545c1(0x117)])return;_0x13f20f[_0x2545c1(0x117)][_0x2545c1(0x2ca)](_0x6fd192,_0x4d40ab,_0x5d694b,_0x467f47),_0x6fd192[_0x2545c1(0x15a)](),_0x6fd192[_0x2545c1(0x13c)]();},Window_FrontviewUiMapBattleStatus[_0x31b7e4(0x73)]['createFvUiStateSprite']=function(_0x2bd3ea,_0x234c76,_0x4d293d,_0xe11685){const _0x1d6089=_0x31b7e4;if(!this[_0x1d6089(0x115)]())return;if(!_0x2bd3ea)return;if(!$gameParty['battleMembers']()[_0x1d6089(0x2da)](_0x2bd3ea))return;const _0x262e67=VisuMZ[_0x1d6089(0x20b)]['Settings'][_0x1d6089(0x2c7)],_0x122e4d=new Sprite_Damage();_0x122e4d[_0x1d6089(0x96)]=_0x262e67['PopupDuration'],this[_0x1d6089(0x80)](_0x122e4d,_0x2bd3ea),_0x122e4d[_0x1d6089(0x1b9)](_0x234c76,_0x4d293d,_0xe11685),this[_0x1d6089(0x2eb)](_0x122e4d,_0x2bd3ea);},VisuMZ[_0x31b7e4(0x25a)]['setupTextPopup']=function(_0x277c9a,_0x4bd76f,_0x484faf){const _0x4ad59a=_0x31b7e4;if(!SceneManager['isUsingFrontviewUiLayout']())return;if(!_0x277c9a)return;_0x484faf=_0x484faf||{},_0x484faf['textColor']=_0x484faf[_0x4ad59a(0x181)]||'#ffffff',_0x484faf[_0x4ad59a(0xf5)]=_0x484faf[_0x4ad59a(0xf5)]||[0x0,0x0,0x0,0x0],_0x484faf[_0x4ad59a(0xc5)]=_0x484faf[_0x4ad59a(0xc5)]||0x0;const _0x477807=SceneManager['_scene'];if(!_0x477807)return;if(!_0x477807[_0x4ad59a(0x117)])return;_0x477807[_0x4ad59a(0x117)][_0x4ad59a(0x33e)](_0x277c9a,_0x4bd76f,_0x484faf);},Window_FrontviewUiMapBattleStatus[_0x31b7e4(0x73)][_0x31b7e4(0x33e)]=function(_0x5a6692,_0x4be500,_0xe724a7){const _0x288a7d=_0x31b7e4;if(!this[_0x288a7d(0x115)]())return;if(!_0x5a6692)return;if(!$gameParty[_0x288a7d(0x213)]()[_0x288a7d(0x2da)](_0x5a6692))return;const _0x353d48=VisuMZ[_0x288a7d(0x20b)][_0x288a7d(0x1e7)][_0x288a7d(0x2c7)],_0x1a44df=new Sprite_Damage();_0x1a44df['_duration']=_0x353d48[_0x288a7d(0x300)],this[_0x288a7d(0x80)](_0x1a44df,_0x5a6692),_0x1a44df['setupTextPopup'](_0x4be500,_0xe724a7),this[_0x288a7d(0x2eb)](_0x1a44df,_0x5a6692);};