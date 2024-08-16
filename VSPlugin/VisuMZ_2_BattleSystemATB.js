//=============================================================================
// VisuStella MZ - Battle System ATB - Active Turn Battle
// VisuMZ_2_BattleSystemATB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemATB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemATB = VisuMZ.BattleSystemATB || {};
VisuMZ.BattleSystemATB.version = 1.31;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.31] [BattleSystemATB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_ATB_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The RPG Maker MZ Time Progress Battle (TPB) system is only a few steps away
 * from the acclaimed Active Turn Battle (ATB) system. This plugin will grant
 * it the various features needed to turn it from TPB into ATB.
 * 
 * This plugin will grant control over how the various mechanics work, ranging
 * from penalties to calculations, to actions that can manipulate the ATB gauge
 * of battlers. Battlers that are in the middle of casting a spell can also be
 * interrupted with specific notetag traits.
 * 
 * ATB Gauges can also be displayed on enemies and/or allies, giving the player
 * full access to the current battle state. The ATB Gauges are also improved,
 * showing different colors for different states and showing a new gauge for
 * the casting state.
 * 
 * *NOTE* You will need to set the game project to run in either TPB mode,
 * Time Progress (Active) or Time Progress (Wait), for these new ATB effects
 * to work. You can find this setting in Database > System 1.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Full control over the TPB/ATB mechanics such as speed, calculations, etc.
 * * Notetags that give skills and items access to ATB Gauge manipulation, by
 *   altering how filled they are.
 * * Interrupts can be used on battlers in the middle of casting a skill.
 * * Visual ATB Gauges can be displayed over battlers' heads.
 * * ATB Gauges have extra coloring options added to them to let the player
 *   quickly know the current speed state of the ATB Gauge.
 * * A field-wide ATB Gauge that positions actor and enemy markers on it to
 *   show how far along actors and enemies are relative to each other's turns.
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
 * - VisuMZ_1_BattleCore
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
 * *NOTE* You will need to set the game project to run in either TPB mode,
 * Time Progress (Active) or Time Progress (Wait), for these new ATB effects
 * to work. You can find this setting in Database > System 1.
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
 * ATB Gauges
 * 
 * The gauges are now revamped to show different colors to depict the various
 * ATB states a battler can be in. These various states include the following:
 * 
 * - When a battler's speed is fully stopped.
 * - When a battler's speed is slower/faster past a specific rating.
 * - When a battler is ready for an action.
 * - When a battler is casting an action (those with negative speed values).
 * 
 * The colors used for these states can be found and altered in the Plugin
 * Parameters under Gauge Color Settings.
 *
 * ---
 * 
 * Skill & Item Speeds
 * 
 * With TPB, skills and items with negative speed values will cause the battler
 * to enter a "casting" state, meaning they have to wait extra time before the
 * action takes off. With this delayed action execution, one might assume that
 * if there is a positive speed value, the battler would require less time for
 * their next turn.
 * 
 * However, this isn't the case with RPG Maker MZ's TPB. By changing it to ATB,
 * skills and items with positive speed values will have an impact on how full
 * their ATB Gauges will be in the following turn. A value of 2000 will put the
 * gauge at 50% full, 1000 will put the gauge at 25% full, 500 will put it at
 * 12.5% full, and so on. Notetags can also be used to influence this.
 * 
 * ---
 * 
 * JS Calculation Mechanics
 * 
 * While the calculation mechanics aren't changed from their original RPG Maker
 * MZ formulas, the functions for them have been overwritten to allow you, the
 * game developer, to alter them as you see fit.
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
 * VisuMZ_0_CoreEngine
 *
 * - ATB Interrupts can have animations played when they trigger if the
 * VisuStella Core Engine is installed.
 *
 * ---
 * 
 * VisuMZ_1_OptionsCore
 * 
 * - Having the VisuStella Options Core available will allow you to adjust the
 * speed at which the ATB gauges fill up.
 * 
 * - The VisuStella Options Core also gives the player the option to toggle
 * between Active and Wait-based ATB.
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
 * === General ATB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 *
 * ---
 * 
 * <ATB Help>
 *  description
 *  description
 * </ATB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under TPB/ATB.
 * - This is primarily used if the skill behaves differently in TPB/ATB versus
 *   any other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to TPB/ATB.
 * 
 * ---
 *
 * <Hide ATB Gauge>
 *
 * - Used for: Enemy Notetags
 * - If you don't want an enemy to show their ATB Gauge, use this notetag.
 * 
 * ---
 * 
 * === ATB Field Gauge-Related Notetags ===
 * 
 * These notetags only work if the ATB Field Gauge is enabled.
 * 
 * ---
 *
 * <ATB Field Gauge Icon: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the marker graphic used for the battler to a specific icon.
 * - Replace 'x' with the icon index to be used.
 * 
 * ---
 *
 * <ATB Field Gauge Face: filename, index>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the marker graphic used for the enemy to a specific face.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Replace 'index' with the index of the face. Index values start at 0.
 * - Example: <ATB Field Gauge Face: Monster, 1>
 * 
 * ---
 * 
 * === ATB Gauge Manipulation-Related Notetags ===
 * 
 * These notetags are used for ATB Gauge manipulation purposes.
 * 
 * ---
 *
 * <ATB After Gauge: x%>
 *
 * - Used for: Skill, Item Notetags
 * - After using the skill/item, the user's ATB Gauge will be set to x%.
 * - Replace 'x' with a percentile value representing the amount you want the
 *   ATB Gauge to reset to after the skill/item's usage.
 * 
 * ---
 * 
 * <ATB Charge Gauge: x%>
 * <ATB Charge Gauge: +x%>
 * <ATB Charge Gauge: -x%>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is in a charging state, change the target's gauge amount to
 *   x% or by x% (if using the +/- variants).
 * - Replace 'x' with a percentile value representing the amount of the ATB
 *   Gauge you wish to alter it to/by.
 * - This only affects targets who are in a charging state.
 * 
 * ---
 * 
 * <ATB Cast Gauge: x%>
 * <ATB Cast Gauge: +x%>
 * <ATB Cast Gauge: -x%>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is in a casting state, change the target's gauge amount to
 *   x% or by x% (if using the +/- variants).
 * - Replace 'x' with a percentile value representing the amount of the ATB
 *   Gauge you wish to alter it to/by.
 * - This only affects targets who are in a casting state.
 * 
 * ---
 *
 * <ATB Interrupt>
 *
 * - Used for: Skill, Item Notetags
 * - If this skill/item hits a target who is in a casting state, interrupt that
 *   action to cancel it and reset the target's ATB Gauge to 0%.
 * 
 * ---
 *
 * <ATB Cannot Be Interrupted>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the skill/item immune to ATB Interruptions.
 * 
 * ---
 * 
 * <ATB Battle Start Gauge: +x%>
 * <ATB Battle Start Gauge: -x%>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Determine how much extra or less ATB Gauge the battler will start with if
 *   associated with one of these database objects.
 * - Replace 'x' with a percentile value determining how much extra or less ATB
 *   Gauge value the battler will start battle with.
 * - These values are additive when stacked.
 *
 * ---
 * 
 * <ATB After Gauge: +x%>
 * <ATB After Gauge: -x%>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - Determine how much influence there is on the ATB Gauge after finishing a
 *   skill/item. Increase or decrease the amount after each action.
 * - Replace 'x' with a percentile value determining how much influence there
 *   is on the ATB Gauge after the skill/item has finished performing.
 * - These values are additive when stacked.
 *
 * ---
 * 
 * === JavaScript Notetags: ATB Gauge Manipulation ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * give more control over conditional ATB Gauge Manipulation.
 * 
 * ---
 * 
 * <JS ATB Charge Gauge>
 *  code
 *  code
 *  rate = code;
 * </JS ATB Charge Gauge>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   ATB Gauge to if the target is in a charging state.
 * - The 'rate' variable represents rate value the ATB Gauge will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to the target's current ATB Gauge rate
 *   if the target is in a charging state.
 * 
 * ---
 * 
 * <JS ATB Cast Gauge>
 *  code
 *  code
 *  rate = code;
 * </JS ATB Cast Gauge>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   ATB Gauge to if the target is in a casting state.
 * - The 'rate' variable represents rate value the ATB Gauge will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to the target's current ATB Gauge rate
 *   if the target is in a casting state.
 * 
 * ---
 * 
 * <JS ATB After Gauge>
 *  code
 *  code
 *  rate = code;
 * </JS ATB After Gauge>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   ATB Gauge to after performing this skill/item action.
 * - The 'rate' variable represents rate value the ATB Gauge will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to 0.
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
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Field Gauge Icon
 * - Changes the icons used for the specific actor(s) on the ATB Field Gauge.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 * 
 * Actor: Change Field Gauge Face
 * - Changes the faces used for the specific actor(s) on the ATB Field Gauge.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   Face Name:
 *   - This is the filename for the target face graphic.
 * 
 *   Face Index:
 *   - This is the index for the target face graphic.
 * 
 * ---
 *
 * Actor: Clear Field Gauge Graphic
 * - Clears the ATB Field Gauge graphics for the actor(s).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Change Field Gauge Icon
 * - Changes the icons used for the specific enemy(ies) on the ATB Field Gauge.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Enemy: Change Field Gauge Face
 * - Changes the faces used for the specific enemy(ies) on the ATB Field Gauge.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Face Name:
 *   - This is the filename for the target face graphic.
 *
 *   Face Index:
 *   - This is the index for the target face graphic.
 *
 * ---
 *
 * Enemy: Clear Field Gauge Graphic
 * - Clears the ATB Field Gauge graphics for the enemy(ies).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 * 
 * System: ATB Field Gauge Visibility
 * - Determine the visibility of the ATB Field Gauge.
 * 
 *   Visibility:
 *   - Changes the visibility of the ATB Field Gauge.
 * 
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Mechanics settings used for Battle System ATB. The majority of these are
 * JavaScript-based and will require knowledge of JavaScript to fully utilize
 * the plugin parameters.
 *
 * ---
 *
 * Mechanics
 * 
 *   Escape Fail Penalty:
 *   - Gauge penalty if an escape attempt fails.
 * 
 *   Stuns Reset Gauge?:
 *   - Should stuns reset the ATB Gauge?
 * 
 *   JS: Initial Gauge:
 *   - JavaScript code to determine how much ATB gauge to give each battler at
 *     the start of battle.
 * 
 *   JS: Speed:
 *   - JavaScript code to determine how much speed a battler has.
 * 
 *   JS: Base Speed:
 *   - JavaScript code to determine how much base speed a battler has.
 * 
 *   JS: Relative Speed:
 *   - JavaScript code to determine what is the relative speed of a battler.
 * 
 *   JS: Acceleration:
 *   - JavaScript code to determine how much gauges accelerate by relative to
 *     reference time.
 * 
 *   JS: Cast Time:
 *   - JavaScript code to determine how much cast time is used for skills/items
 *     with negative speed modifiers.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Interrupt Settings
 * ============================================================================
 *
 * Interrupt settings used for Battle System ATB.
 *
 * ---
 *
 * Interrupt
 * 
 *   Animation ID:
 *   - Play this animation when a unit is interrupted.
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *     Mirror Animation:
 *     - Mirror the interrupt animation?
 *     - Requires VisuMZ_0_CoreEngine.
 * 
 *     Mute Animation:
 *     - Mute the interrupt animation?
 *     - Requires VisuMZ_0_CoreEngine.
 * 
 *   Text Popup:
 *   - Text used for popup when interrupts happen.
 *   - Leave empty for no popup.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *     Flash Color:
 *     - Adjust the popup's flash color.
 *     - Format: [red, green, blue, alpha]
 * 
 *     Flash Duration:
 *     - What is the frame duration of the flash effect?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Gauge Settings
 * ============================================================================
 *
 * General gauge settings used for ATB Gauges.
 *
 * ---
 *
 * General
 * 
 *   Anchor X:
 *   Anchor Y:
 *   - Where do you want the ATB Gauge sprite's anchor X/Y to be?
 *   - Use values between 0 and 1 to be safe.
 * 
 *   Scale:
 *   - How large/small do you want the ATB Gauge to be scaled?
 * 
 *   Offset X:
 *   Offset Y:
 *   - How many pixels to offset the ATB Gauge's X/Y by?
 *
 * ---
 *
 * AGI Gauge Rates
 * 
 *   Slow Rate:
 *   - How much should the AGI rate be at to be considered slow?
 * 
 *   Fast Rate:
 *   - How much should the AGI rate be at to be considered fast?
 *
 * ---
 *
 * Actors
 * 
 *   Show Sprite Gauges:
 *   - Show ATB Gauges over the actor sprites' heads?
 *   - Requires SV Actors to be visible.
 * 
 *   Show Status Gauges:
 *   - Show ATB Gauges in the status window?
 *   - Applies only to sideview.
 *
 * ---
 *
 * Enemies
 * 
 *   Show Sprite Gauges:
 *   - Show ATB Gauges over the enemy sprites' heads?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Field Gauge Settings
 * ============================================================================
 * 
 * The ATB Field Gauge is a large gauge placed on the screen with all of the
 * current battle's active participants shown on it. The participants are
 * represented by a marker. Each marker's position on the gauge indicates its
 * battler's ATB progress towards a turn.
 * 
 * In order for this feature to work, enable "Use Field Gauge?" in the
 * Plugin Parameters.
 *
 * ---
 *
 * General
 * 
 *   Use Field Gauge?:
 *   - This value must be set to true in order for the ATB Field Gauge
 *     to appear.
 *   - This needs to be on in order for this feature to work.
 * 
 *   Display Position:
 *   - Select where the Field Gauge will appear on the screen.
 *   - Top
 *   - Bottom
 *   - Left
 *   - Right
 * 
 *   Offset X:
 *   Offset Y:
 *   - How much to offset the X/Y coordinates by.
 * 
 *   Reposition for Help?:
 *   - If the display position is at the top, reposition the gauge when the
 *     help window is open?
 * 
 *   Forward Direction:
 *   - Decide on the direction of the Field Gauge.
 *   - Settings may vary depending on position.
 *   - Left to Right
 *   - Right to Left
 *   - Up to Down
 *   - Down to Up
 *
 * ---
 *
 * Field Gauge Settings
 * 
 *   Gauge Skin:
 *   - Optional. Select an image to place behind the gauge.
 *   - This will be centered on the Field Gauge's position.
 * 
 *   Show Gauge?:
 *   - Decide if you want the gauge to be shown.
 * 
 *   Horizontal Length:
 *   - The length of the Field Gauge if placed horizontally.
 * 
 *   Vertical Length:
 *   - The length of the Field Gauge if placed vertically.
 * 
 *   Thickness:
 *   - The thickness of the Field Gauge for either direction.
 * 
 *   Split Location:
 *   - Determine where the gauge should split.
 *   - Use 0.00 for the start. Use 1.00 for the end.
 *
 * ---
 *
 * Marker Sprites
 * 
 *   Actor Marker Side:
 *   - Which side do you want the actor markers to appear?
 * 
 *   Enemy Marker Side:
 *   - Which side do you want the enemy markers to appear?
 * 
 *   Marker Offset:
 *   - How many pixels do you want to offset the markers by?
 * 
 *   Marker Size:
 *   - How pixels wide and tall do you want the markers to be?
 * 
 *   Marker Speed:
 *   - How many pixels maximum can a marker travel in one frame?
 * 
 *   Opacity Rate:
 *   - If a marker has to change opacity, how fast should it change by?
 *
 * ---
 *
 * Marker Border
 * 
 *   Show Border?:
 *   - Show borders for the marker sprites?
 * 
 *   Border Thickness:
 *   - How many pixels thick should the colored portion of the border be?
 * 
 *   Actors
 *   Enemies
 * 
 *     Border Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *     Border Skin:
 *     - Optional. Place a skin on the actor/enemy borders instead of
 *       rendering them?
 *
 * ---
 *
 * Marker Sprites
 * 
 *   Actors
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the actor graphic.
 *     - Face Graphic - Show the actor's face.
 *     - Icon - Show a specified icon.
 *     - Sideview Actor - Show the actor's sideview battler.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for actors by default?
 * 
 *   Enemies
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the enemy graphic.
 *     - Face Graphic - Show a specified face graphic.
 *     - Icon - Show a specified icon.
 *     - Enemy - Show the enemy's graphic or sideview battler.
 * 
 *     Default Face Name:
 *     - Use this default face graphic if there is no specified face.
 * 
 *     Default Face Index:
 *     - Use this default face index if there is no specified index.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for enemies by default?
 * 
 *     Match Hue?:
 *     - Match the hue for enemy battlers?
 *     - Does not apply if there's a sideview battler.
 *
 * ---
 *
 * Marker Letter
 * 
 *   Show Enemy Letter?:
 *   - Show the enemy's letter on the marker sprite?
 * 
 *   Font Name:
 *   - The font name used for the text of the Letter.
 *   - Leave empty to use the default game's font.
 * 
 *   Font Size:
 *   - The font size used for the text of the Letter.
 *
 * ---
 *
 * Marker Background
 * 
 *   Show Background?:
 *   - Show the background on the marker sprite?
 * 
 *   Actors
 *   Enemies
 * 
 *     Background Color 1:
 *     Background Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *     Background Skin:
 *     - Optional. Use a skin for the actor background instead of
 *       rendering them?
 *
 * ---
 *
 * Marker Arrow
 * 
 *   Show Arrow?:
 *   - Show the arrow sprite pointing towards the Field Gauge?
 * 
 *   Arrow Skin:
 *   - Pick a window skin to draw arrows from.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gauge Color Settings
 * ============================================================================
 *
 * Gauge color settings used for ATB Gauges.
 *
 * ---
 *
 * Colors
 * 
 *   Default Color 1:
 *   Default Color 2:
 *   Full Color 1:
 *   Full Color 2:
 *   Cast Color 1:
 *   Cast Color 2:
 *   Fast Color 1:
 *   Fast Color 2:
 *   Slow Color 1:
 *   Slow Color 2:
 *   Stop Color 1:
 *   Stop Color 2:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Settings
 * ============================================================================
 *
 * Options settings used for Battle System ATB.
 *
 * ---
 *
 * Options
 * 
 *   Add Option?:
 *   - Add the 'Show ATB Gauges' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
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
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.31: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where sideview battlers would have misplaced ATB gauge
 *    positions. Fix made by Olivia.
 * 
 * Version 1.30: August 17, 2023
 * * Bug Fixes!
 * ** Fixed an error that would cause multi-actions under restrictions to
 *    desynchronize skill speeds and result in softlocks. Fix made by Olivia.
 * ** Fixed an error that would cause slow speeds to all equal one another.
 *    Fix made by Olivia.
 * 
 * Version 1.29: July 13, 2023
 * * Bug Fixes!
 * ** Fixed an error with casting times for battlers not working properly when
 *    the numeric values are too small. Fix made by Olivia.
 * 
 * Version 1.28: June 15, 2023
 * * Bug Fixes!
 * ** Crash should no longer occur for the end of ATB actions. Fix made
 *    by Olivia.
 * 
 * Version 1.27: May 18, 2023
 * * Bug Fixes!
 * ** Enemies no longer soft-lock themselves if they get stunned via a counter
 *    attack with an attack-state that applies stun. Fix made by Olivia.
 * 
 * Version 1.26: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused a clash when loaded together with certain
 *    combinations of plugins. Fix made by Olivia.
 * 
 * Version 1.25: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevented initial ATB Gauge settings and features from
 *    working properly. Fix made by Irina.
 * 
 * Version 1.24: December 15, 2022
 * * Bug Fixes!
 * ** The Battle Core's <JS Pre-Start Turn> and <JS Post-Start Turn> notetags
 *    were previously disabled by this plugin. They should now be working again
 *    without problems. Fix made by Olivia.
 * 
 * Version 1.23: November 10, 2022
 * * Bug Fixes!
 * ** ATB Gauges will now display for ANIMATED sideview enemies depending on
 *    the Show Enemy Gauge setting. Fix made by Olivia.
 * 
 * Version 1.22: September 29, 2022
 * * Bug Fixes!
 * ** After enemies recover from a stun, enemies no longer take an immediate
 *    action regardless of their time gauge state. Fix made by Olivia.
 * 
 * Version 1.21: August 25, 2022
 * * Bug Fixes!
 * ** Restricted enemies will no longer be action-locked after removing the
 *    restriction state. Fix made by Olivia.
 * 
 * Version 1.20: August 18, 2022
 * * Bug Fixes!
 * ** Fixed bugs that caused the ATB Field Gauge faces and icons to not change
 *    properly for actors and enemies. Fix made by Olivia.
 * 
 * Version 1.19: July 21, 2022
 * * Bug Fixes!
 * ** Battlers under a "Cannot Move" state will no longer reset their ATB gauge
 *    after their "turn" comes up to update it. Fix made by Olivia.
 * 
 * Version 1.18: June 2, 2022
 * * Bug Fixes!
 * ** Notetag effect for <ATB After Gauge: x%> should now be working properly.
 *    Fix made by Olivia.
 * ** Notetag effect for <JS ATB After Gauge> should now be working properly.
 *    Fix made by Olivia.
 * 
 * Version 1.17: February 17, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.16: August 13, 2021
 * * Bug Fixes!
 * ** Crash prevented with certain Plugin Parameter combinations enabled when
 *    the ATB Gauge is filled up. Fix made by Irina.
 * 
 * Version 1.15: July 23, 2021
 * * Bug Fixes!
 * ** When enemies appear out from a troop event, Visual ATB Gauges above their
 *    heads should now appear properly for SV Enemies, too. Fix made by Irina.
 * 
 * Version 1.14: July 16, 2021
 * * Bug Fixes!
 * ** When enemies appear out from a troop event, Visual ATB Gauges above their
 *    heads should now appear properly. Fix made by Olivia.
 * 
 * Version 1.13: May 21, 2021
 * * Bug Fixes!
 * ** When slip damage is allowed to kill, dying actors will have their TPB
 *    state reset to charging in order to prevent lock-ups. Fix by Olivia.
 * 
 * Version 1.12: May 7, 2021
 * * Feature Update!
 * ** Actions with 0 or positive speed will now act immediately without
 *    allowing a single gauge tick pass through. Update made by Olivia.
 * 
 * Version 1.11: April 16, 2021
 * * Bug Fixes!
 * ** ATB Gauge visibility is now properly updated across various events such
 *    as party removal and other obstruction effects. Fix made by Olivia.
 * 
 * Version 1.10: March 12, 2021
 * * Hot Fix!
 * ** Fixed calculation errors due to field gauge. Fix made by Olivia.
 * * Feature Update!
 * ** Slight change to the way calculations are made for the bottom aligned
 *    field gauge position. Update made by Olivia.
 * 
 * Version 1.09: January 1, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.08: November 22, 2020
 * * Feature Update!
 * ** ATB Interrupts will not clear all actions (including queued ones) for
 *    mechanical compatibility. Change made by Yanfly.
 * 
 * Version 1.07: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: November 1, 2020
 * * Documentation Update!
 * ** Help file updated with new features.
 * * New Features!
 * ** New Plugin Command by Irina!
 * *** Actor: Change Field Gauge Face
 * **** Changes the faces used for the specific actor(s) on the ATB
 *      Field Gauge.
 * 
 * Version 1.05: October 25, 2020
 * * Bug Fixes!
 * ** Plugin should now be compatible with older saves when changing to a save
 *    that didn't use a Field Gauge to one that does. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated with new features.
 * * Feature Update!
 * ** <ATB Field Gauge Face: filename, index> notetag now works with actors.
 *    Update made by Irina.
 *
 * Version 1.04: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.03: October 11, 2020
 * * Documentation Update
 * ** Help file updated with new features.
 * * Feature Update!
 * ** Enemy letters are no longer drawn on the Field Gauge unless there are
 *    multiple enemies of the same type. Added by Arisu.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and Yanfly.
 * *** Plugin Parameters > Field Gauge > Offset X and Y
 * **** How much to offset the X/Y coordinates of the Field Gauge by.
 * 
 * Version 1.02: October 4, 2020
 * * New Features!
 * ** New Plugin Command added "System: ATB Field Gauge Visibility" to let you
 *    show or hide the Field Gauge during battle. Added by Arisu.
 * 
 * Version 1.01: September 27, 2020
 * * Bug Fixes!
 * ** ATB Cast and Charge notetags no longer cause crashes. Fix made by Olivia.
 * * New Features!
 * ** New plugin parameter added by Olivia.
 * *** Plugin Parameters > Mechanics > Stuns Reset Gauge?
 * **** Should stuns reset the ATB Gauge?
 *
 * Version 1.00: September 21, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeActorIcon
 * @text Actor: Change Field Gauge Icon
 * @desc Changes the icons used for the specific actor(s) on the ATB Field Gauge.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 84
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeActorFace
 * @text Actor: Change Field Gauge Face
 * @desc Changes the faces used for the specific actor(s) on the ATB Field Gauge.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Actor1
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @parent EnemySprite
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeClearActorGraphic
 * @text Actor: Clear Field Gauge Graphic
 * @desc Clears the ATB Field Gauge graphics for the actor(s).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeEnemyIcon
 * @text Enemy: Change Field Gauge Icon
 * @desc Changes the icons used for the specific enemy(ies) on the ATB Field Gauge.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 298
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeEnemyFace
 * @text Enemy: Change Field Gauge Face
 * @desc Changes the faces used for the specific enemy(ies) on the ATB Field Gauge.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Monster
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @parent EnemySprite
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeClearEnemyGraphic
 * @text Enemy: Clear Field Gauge Graphic
 * @desc Clears the ATB Field Gauge graphics for the enemy(ies).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemFieldGaugeVisibility
 * @text System: ATB Field Gauge Visibility
 * @desc Determine the visibility of the ATB Field Gauge.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the ATB Field Gauge.
 * @default true
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
 * @param BattleSystemATB
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Mechanics settings used for Battle System ATB.
 * @default {"General":"","EscapeFailPenalty:num":"-1.00","StunsResetGauge:eval":"false","JavaScript":"","InitialGaugeJS:str":"Math.random() * 0.5","TpbSpeedCalcJS:func":"\"// Declare Constants\\nconst user = this;\\n\\n// Process Calculation\\nlet speed = Math.sqrt(user.agi) + 1;\\n\\n// Return Value\\nreturn speed;\"","TpbBaseSpeedCalcJS:func":"\"// Declare Constants\\nconst user = this;\\nconst baseAgility = user.paramBasePlus(6);\\n\\n// Process Calculation\\nlet speed = Math.sqrt(baseAgility) + 1;\\n\\n// Return Value\\nreturn speed;\"","BattlerRelativeSpeedJS:func":"\"// Declare Constants\\nconst user = this;\\nconst speed = user.tpbSpeed()\\nconst partyBaseSpeed = $gameParty.tpbBaseSpeed();\\n\\n// Process Calculation\\nlet relativeSpeed = speed / partyBaseSpeed;\\n\\n// Return Value\\nreturn relativeSpeed;\"","TpbAccelerationJS:func":"\"// Declare Constants\\nconst user = this;\\nconst speed = user.tpbRelativeSpeed();\\nconst referenceTime = $gameParty.tpbReferenceTime();\\n\\n// Process Calculation\\nlet acceleration = speed / referenceTime;\\n\\n// Return Value\\nreturn acceleration;\"","TpbCastTimeJS:func":"\"// Declare Constants\\nconst user = this;\\nconst actions = user._actions.filter(action => action.isValid());\\nconst items = actions.map(action => action.item());\\nconst delay = items.reduce((r, item) => r + Math.max(0, -item.speed), 0);\\n\\n// Process Calculation\\nlet time = Math.sqrt(delay) / user.tpbSpeed();\\n\\n// Return Value\\nreturn time;\""}
 *
 * @param Interrupt:struct
 * @text Interrupt Settings
 * @type struct<Interrupt>
 * @desc Interrupt settings used for Battle System ATB.
 * @default {"Interrupt":"","InterruptAnimationID:num":"11","InterruptMirror:eval":"false","InterruptMute:eval":"false","InterruptText:str":"INTERRUPTED!","InterruptTextColor:str":"0","InterruptFlashColor:eval":"[255, 0, 0, 160]","InterruptFlashDuration:num":"60"}
 *
 * @param Gauge:struct
 * @text General Gauge Settings
 * @type struct<Gauge>
 * @desc General gauge settings used for ATB Gauges.
 * @default {"General":"","AnchorX:num":"0.5","AnchorY:num":"1.0","Scale:num":"0.5","OffsetX:num":"0","OffsetY:num":"2","AGIGaugeRates":"","SlowRate:num":"0.60","FastRate:num":"1.40","Actors":"","ShowActorGauge:eval":"true","ShowStatusGauge:eval":"false","Enemies":"","ShowEnemyGauge:eval":"true"}
 *
 * @param FieldGauge:struct
 * @text Field Gauge Settings
 * @type struct<FieldGauge>
 * @desc Make a field-wide ATB gauge for all the battlers.
 * @default {"General":"","UseFieldGauge:eval":"false","DisplayPosition:str":"top","DisplayOffsetX:num":"0","DisplayOffsetY:num":"0","RepositionTopForHelp:eval":"true","GaugeDirection:eval":"true","Gauge":"","GaugeSystemSkin:str":"","DrawGauge:eval":"true","GaugeLengthHorz:num":"600","GaugeLengthVert:num":"400","GaugeThick:num":"16","GaugeSplit:num":"0.70","Reposition":"","RepositionTopHelpX:num":"0","RepositionTopHelpY:num":"48","Markers":"","ActorSide:eval":"true","EnemySide:eval":"false","MarkerOffset:num":"28","MarkerSize:num":"32","MarkerSpeed:num":"36","OpacityRate:num":"4","BorderThickness:num":"2","Border":"","ShowMarkerBorder:eval":"true","BorderActor":"","ActorBorderColor:str":"4","ActorSystemBorder:str":"","BorderEnemy":"","EnemyBorderColor:str":"2","EnemySystemBorder:str":"","Sprite":"","ActorSprite":"","ActorBattlerType:str":"face","ActorBattlerIcon:num":"84","EnemySprite":"","EnemyBattlerType:str":"enemy","EnemyBattlerFaceName:str":"Monster","EnemyBattlerFaceIndex:num":"1","EnemyBattlerIcon:num":"298","EnemyBattlerMatchHue:eval":"true","Letter":"","EnemyBattlerDrawLetter:eval":"true","EnemyBattlerFontFace:str":"","EnemyBattlerFontSize:num":"16","Background":"","ShowMarkerBg:eval":"true","BackgroundActor":"","ActorBgColor1:str":"1","ActorBgColor2:str":"9","ActorSystemBg:str":"","BackgroundEnemy":"","EnemyBgColor1:str":"10","EnemyBgColor2:str":"18","EnemySystemBg:str":"","Arrow":"","ShowMarkerArrow:eval":"true","MarkerArrowWindowSkin:str":"Window"}
 *
 * @param Color:struct
 * @text Gauge Color Settings
 * @type struct<Color>
 * @desc Gauge color settings used for ATB Gauges.
 * @default {"default1:str":"26","default2:str":"27","full1:str":"14","full2:str":"6","cast1:str":"2","cast2:str":"10","fast1:str":"27","fast2:str":"18","slow1:str":"22","slow2:str":"23","stop1:str":"7","stop2:str":"8"}
 *
 * @param Options:struct
 * @text Options Settings
 * @type struct<Options>
 * @desc Options settings used for Battle System ATB.
 * @default {"Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Show ATB Gauges"}
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
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param General
 * 
 * @param EscapeFailPenalty:num
 * @text Escape Fail Penalty
 * @parent General
 * @desc Gauge penalty if an escape attempt fails.
 * @default -1.00
 *
 * @param StunsResetGauge:eval
 * @text Stuns Reset Gauge?
 * @parent General
 * @type boolean
 * @on Reset Gauge
 * @off Don't Reset
 * @desc Should stuns reset the ATB Gauge?
 * @default false
 *
 * @param JavaScript
 *
 * @param InitialGaugeJS:str
 * @text JS: Initial Gauge
 * @parent JavaScript
 * @desc JavaScript code to determine how much ATB gauge to give
 * each battler at the start of battle.
 * @default Math.random() * 0.5
 *
 * @param TpbSpeedCalcJS:func
 * @text JS: Speed
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much speed a battler has.
 * @default "// Declare Constants\nconst user = this;\n\n// Process Calculation\nlet speed = Math.sqrt(user.agi) + 1;\n\n// Return Value\nreturn speed;"
 * 
 * @param TpbBaseSpeedCalcJS:func
 * @text JS: Base Speed
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much base speed a battler has.
 * @default "// Declare Constants\nconst user = this;\nconst baseAgility = user.paramBasePlus(6);\n\n// Process Calculation\nlet speed = Math.sqrt(baseAgility) + 1;\n\n// Return Value\nreturn speed;"
 * 
 * @param BattlerRelativeSpeedJS:func
 * @text JS: Relative Speed
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine what is the relative speed of a battler.
 * @default "// Declare Constants\nconst user = this;\nconst speed = user.tpbSpeed()\nconst partyBaseSpeed = $gameParty.tpbBaseSpeed();\n\n// Process Calculation\nlet relativeSpeed = speed / partyBaseSpeed;\n\n// Return Value\nreturn relativeSpeed;"
 * 
 * @param TpbAccelerationJS:func
 * @text JS: Acceleration
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much gauges accelerate by relative to reference time.
 * @default "// Declare Constants\nconst user = this;\nconst speed = user.tpbRelativeSpeed();\nconst referenceTime = $gameParty.tpbReferenceTime();\n\n// Process Calculation\nlet acceleration = speed / referenceTime;\n\n// Return Value\nreturn acceleration;"
 * 
 * @param TpbCastTimeJS:func
 * @text JS: Cast Time
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much cast time is used for skills/items with negative speed modifiers.
 * @default "// Declare Constants\nconst user = this;\nconst actions = user._actions.filter(action => action.isValid());\nconst items = actions.map(action => action.item());\nconst delay = items.reduce((r, item) => r + Math.max(0, -item.speed), 0);\n\n// Process Calculation\nlet time = Math.sqrt(delay) / user.tpbSpeed();\n\n// Return Value\nreturn time;"
 * 
 */
/* ----------------------------------------------------------------------------
 * Interrupt Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Interrupt:
 *
 * @param Interrupt
 *
 * @param InterruptAnimationID:num
 * @text Animation ID
 * @parent Interrupt
 * @type animation
 * @desc Play this animation when a unit is interrupted.
 * Requires VisuMZ_0_CoreEngine.
 * @default 11
 *
 * @param InterruptMirror:eval
 * @text Mirror Animation
 * @parent InterruptAnimationID:num
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the interrupt animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param InterruptMute:eval
 * @text Mute Animation
 * @parent InterruptAnimationID:num
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the interrupt animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param InterruptText:str
 * @text Text Popup
 * @parent Interrupt
 * @desc Text used for popup when interrupts happen.
 * Leave empty for no popup.
 * @default INTERRUPTED!
 *
 * @param InterruptTextColor:str
 * @text Text Color
 * @parent InterruptText:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param InterruptFlashColor:eval
 * @text Flash Color
 * @parent InterruptText:str
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @param InterruptFlashDuration:num
 * @text Flash Duration
 * @parent InterruptText:str
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 */
/* ----------------------------------------------------------------------------
 * Gauge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gauge:
 *
 * @param General
 *
 * @param AnchorX:num
 * @text Anchor X
 * @parent General
 * @desc Where do you want the ATB Gauge sprite's anchor X to be?
 * Use values between 0 and 1 to be safe.
 * @default 0.5
 *
 * @param AnchorY:num
 * @text Anchor Y
 * @parent General
 * @desc Where do you want the ATB Gauge sprite's anchor Y to be?
 * Use values between 0 and 1 to be safe.
 * @default 1.0
 *
 * @param Scale:num
 * @text Scale
 * @parent General
 * @desc How large/small do you want the ATB Gauge to be scaled?
 * @default 0.5
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent General
 * @desc How many pixels to offset the ATB Gauge's X by?
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent General
 * @desc How many pixels to offset the ATB Gauge's Y by?
 * @default 2
 *
 * @param AGIGaugeRates
 * @text AGI Gauge Rates
 *
 * @param SlowRate:num
 * @text Slow Rate
 * @parent AGIGaugeRates
 * @desc How much should the AGI rate be at to be considered slow?
 * @default 0.60
 *
 * @param FastRate:num
 * @text Fast Rate
 * @parent AGIGaugeRates
 * @desc How much should the AGI rate be at to be considered fast?
 * @default 1.40
 *
 * @param Actors
 *
 * @param ShowActorGauge:eval
 * @text Show Sprite Gauges
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show ATB Gauges over the actor sprites' heads?
 * Requires SV Actors to be visible.
 * @default true
 *
 * @param ShowStatusGauge:eval
 * @text Show Status Gauges
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show ATB Gauges in the status window?
 * Applies only to sideview.
 * @default false
 *
 * @param Enemies
 *
 * @param ShowEnemyGauge:eval
 * @text Show Sprite Gauges
 * @parent Enemies
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show ATB Gauges over the enemy sprites' heads?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Color:
 *
 * @param default1:str
 * @text Default Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param default2:str
 * @text Default Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param full1:str
 * @text Full Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 * @param full2:str
 * @text Full Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param cast1:str
 * @text Cast Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param cast2:str
 * @text Cast Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 10
 *
 * @param fast1:str
 * @text Fast Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param fast2:str
 * @text Fast Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param slow1:str
 * @text Slow Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 22
 *
 * @param slow2:str
 * @text Slow Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param stop1:str
 * @text Stop Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param stop2:str
 * @text Stop Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 8
 *
 */
/* ----------------------------------------------------------------------------
 * Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Show ATB Gauges' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Show ATB Gauges
 *
 */
/* ----------------------------------------------------------------------------
 * Field Gauge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~FieldGauge:
 *
 * @param General
 *
 * @param UseFieldGauge:eval
 * @text Use Field Gauge?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc This value must be set to true in order for the ATB Field Gauge to appear.
 * @default false
 *
 * @param DisplayPosition:str
 * @text Display Position
 * @parent General
 * @type select
 * @option top
 * @option bottom
 * @option left
 * @option right
 * @desc Select where the Field Gauge will appear on the screen.
 * @default top
 * 
 * @param DisplayOffsetX:num
 * @text Offset X
 * @parent DisplayPosition:str
 * @desc How much to offset the X coordinate by.
 * Negative: left. Positive: right.
 * @default 0
 * 
 * @param DisplayOffsetY:num
 * @text Offset Y
 * @parent DisplayPosition:str
 * @desc How much to offset the Y coordinate by.
 * Negative: up. Positive: down.
 * @default 0
 *
 * @param RepositionTopForHelp:eval
 * @text Reposition for Help?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * gauge when the help window is open?
 * @default true
 *
 * @param GaugeDirection:eval
 * @text Forward Direction
 * @parent General
 * @type boolean
 * @on Left to Right / Up to Down
 * @off Right to Left / Down to Up
 * @desc Decide on the direction of the Field Gauge.
 * Settings may vary depending on position.
 * @default true
 *
 * @param Gauge
 * @text Field Gauge Settings
 *
 * @param GaugeSystemSkin:str
 * @text Gauge Skin
 * @parent Gauge
 * @type file
 * @dir img/system/
 * @desc Optional. Select an image to place behind the gauge.
 * This will be centered on the Field Gauge's position.
 * @default 
 *
 * @param DrawGauge:eval
 * @text Show Gauge?
 * @parent Gauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Decide if you want the gauge to be shown.
 * @default true
 *
 * @param GaugeLengthHorz:num
 * @text Horizontal Length
 * @parent Gauge
 * @type number
 * @min 10
 * @desc The length of the Field Gauge if placed horizontally.
 * @default 600
 *
 * @param GaugeLengthVert:num
 * @text Vertical Length
 * @parent Gauge
 * @type number
 * @min 10
 * @desc The length of the Field Gauge if placed vertically.
 * @default 400
 *
 * @param GaugeThick:num
 * @text Thickness
 * @parent Gauge
 * @type number
 * @min 3
 * @desc The thickness of the Field Gauge for either direction.
 * @default 16
 *
 * @param GaugeSplit:num
 * @text Split Location
 * @parent Gauge
 * @desc Determine where the gauge should split.
 * Use 0.00 for the start. Use 1.00 for the end.
 * @default 0.70
 * 
 * @param Reposition
 * @text Reposition For Help
 *
 * @param RepositionTopHelpX:num
 * @text Repostion X By
 * @parent Reposition
 * @desc Reposition the gauge's X coordinates by this much when
 * the Help Window is visible.
 * @default 0
 *
 * @param RepositionTopHelpY:num
 * @text Repostion Y By
 * @parent Reposition
 * @desc Reposition the gauge's Y coordinates by this much when
 * the Help Window is visible.
 * @default 48
 *
 * @param Markers
 * @text Marker Sprites
 *
 * @param ActorSide:eval
 * @text Actor Marker Side
 * @parent Markers
 * @type boolean
 * @on Top / Right
 * @off Bottom / Left
 * @desc Which side do you want the actor markers to appear?
 * @default true
 *
 * @param EnemySide:eval
 * @text Enemy Marker Side
 * @parent Markers
 * @type boolean
 * @on Top / Right
 * @off Bottom / Left
 * @desc Which side do you want the enemy markers to appear?
 * @default false
 *
 * @param MarkerOffset:num
 * @text Marker Offset
 * @parent Markers
 * @desc How many pixels do you want to offset the markers by?
 * @default 28
 *
 * @param MarkerSize:num
 * @text Marker Size
 * @parent Markers
 * @type number
 * @min 10
 * @desc How pixels wide and tall do you want the markers to be?
 * @default 32
 *
 * @param MarkerSpeed:num
 * @text Marker Speed
 * @parent Markers
 * @type number
 * @min 1
 * @desc How many pixels maximum can a marker travel in one frame?
 * @default 36
 *
 * @param OpacityRate:num
 * @text Opacity Rate
 * @parent Markers
 * @type number
 * @min 1
 * @desc If a marker has to change opacity, how fast should it change by?
 * @default 4
 *
 * @param Border
 * @text Marker Border
 *
 * @param ShowMarkerBorder:eval
 * @text Show Border?
 * @parent Border
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show borders for the marker sprites?
 * @default true
 *
 * @param BorderThickness:num
 * @text Border Thickness
 * @parent Markers
 * @type number
 * @min 1
 * @desc How many pixels thick should the colored portion of the border be?
 * @default 2
 *
 * @param BorderActor
 * @text Actors
 * @parent Border
 *
 * @param ActorBorderColor:str
 * @text Border Color
 * @parent BorderActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 4
 *
 * @param ActorSystemBorder:str
 * @text Border Skin
 * @parent BorderActor
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the actor borders instead of rendering them?
 * @default 
 *
 * @param BorderEnemy
 * @text Enemies
 * @parent Border
 *
 * @param EnemyBorderColor:str
 * @text Border Color
 * @parent BorderEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param EnemySystemBorder:str
 * @text Border Skin
 * @parent BorderEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the enemy borders instead of rendering them?
 * @default 
 *
 * @param Sprite
 * @text Marker Sprites
 *
 * @param ActorSprite
 * @text Actors
 * @parent Sprite
 *
 * @param ActorBattlerType:str
 * @text Sprite Type
 * @parent ActorSprite
 * @type select
 * @option Face Graphic - Show the actor's face.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Sideview Actor - Show the actor's sideview battler.
 * @value svactor
 * @desc Select the type of sprite used for the actor graphic.
 * @default face
 *
 * @param ActorBattlerIcon:num
 * @text Default Icon
 * @parent ActorSprite
 * @desc Which icon do you want to use for actors by default?
 * @default 84
 *
 * @param EnemySprite
 * @text Enemies
 * @parent Sprite
 *
 * @param EnemyBattlerType:str
 * @text Sprite Type
 * @parent EnemySprite
 * @type select
 * @option Face Graphic - Show a specified face graphic.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Enemy - Show the enemy's graphic or sideview battler.
 * @value enemy
 * @desc Select the type of sprite used for the enemy graphic.
 * @default enemy
 *
 * @param EnemyBattlerFaceName:str
 * @text Default Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc Use this default face graphic if there is no specified face.
 * @default Monster
 *
 * @param EnemyBattlerFaceIndex:num
 * @text Default Face Index
 * @parent EnemySprite
 * @type number
 * @desc Use this default face index if there is no specified index.
 * @default 1
 *
 * @param EnemyBattlerIcon:num
 * @text Default Icon
 * @parent EnemySprite
 * @desc Which icon do you want to use for enemies by default?
 * @default 298
 *
 * @param EnemyBattlerMatchHue:eval
 * @text Match Hue?
 * @parent EnemySprite
 * @type boolean
 * @on Match
 * @off Don't Match
 * @desc Match the hue for enemy battlers?
 * Does not apply if there's a sideview battler.
 * @default true
 *
 * @param Letter
 * @text Marker Letter
 *
 * @param EnemyBattlerDrawLetter:eval
 * @text Show Enemy Letter?
 * @parent Letter
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the enemy's letter on the marker sprite?
 * @default true
 *
 * @param EnemyBattlerFontFace:str
 * @text Font Name
 * @parent Letter
 * @desc The font name used for the text of the Letter.
 * Leave empty to use the default game's font.
 * @default 
 *
 * @param EnemyBattlerFontSize:num
 * @text Font Size
 * @parent Letter
 * @min 1
 * @desc The font size used for the text of the Letter.
 * @default 16
 *
 * @param Background
 * @text Marker Background
 *
 * @param ShowMarkerBg:eval
 * @text Show Background?
 * @parent Background
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the background on the marker sprite?
 * @default true
 *
 * @param BackgroundActor
 * @text Actors
 * @parent Background
 *
 * @param ActorBgColor1:str
 * @text Background Color 1
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 1
 *
 * @param ActorBgColor2:str
 * @text Background Color 2
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 9
 *
 * @param ActorSystemBg:str
 * @text Background Skin
 * @parent BackgroundActor
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the actor background instead of rendering them?
 * @default 
 *
 * @param BackgroundEnemy
 * @text Enemies
 * @parent Background
 *
 * @param EnemyBgColor1:str
 * @text Background Color 1
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 10
 *
 * @param EnemyBgColor2:str
 * @text Background Color 2
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param EnemySystemBg:str
 * @text Background Skin
 * @parent BackgroundEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the enemy background instead of rendering them?
 * @default 
 *
 * @param Arrow
 * @text Marker Arrow
 *
 * @param ShowMarkerArrow:eval
 * @text Show Arrow?
 * @parent Arrow
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the arrow sprite pointing towards the Field Gauge?
 * @default true
 *
 * @param MarkerArrowWindowSkin:str
 * @text Arrow Skin
 * @parent Arrow
 * @type file
 * @dir img/system/
 * @desc Pick a window skin to draw arrows from.
 * @default Window
 *
 */
//=============================================================================

function _0x37ed(_0x597b0b,_0x2c4f34){const _0x27414c=_0x2741();return _0x37ed=function(_0x37ed1d,_0x2fb38d){_0x37ed1d=_0x37ed1d-0x195;let _0x11011e=_0x27414c[_0x37ed1d];return _0x11011e;},_0x37ed(_0x597b0b,_0x2c4f34);}const _0x31d373=_0x37ed;(function(_0x521ed1,_0x4c2080){const _0x28cf67=_0x37ed,_0x8abb00=_0x521ed1();while(!![]){try{const _0x567751=parseInt(_0x28cf67(0x201))/0x1*(-parseInt(_0x28cf67(0x1d3))/0x2)+-parseInt(_0x28cf67(0x2df))/0x3*(parseInt(_0x28cf67(0x253))/0x4)+-parseInt(_0x28cf67(0x347))/0x5*(parseInt(_0x28cf67(0x2ca))/0x6)+-parseInt(_0x28cf67(0x1a5))/0x7*(parseInt(_0x28cf67(0x19e))/0x8)+-parseInt(_0x28cf67(0x35e))/0x9*(-parseInt(_0x28cf67(0x258))/0xa)+-parseInt(_0x28cf67(0x202))/0xb*(-parseInt(_0x28cf67(0x195))/0xc)+parseInt(_0x28cf67(0x35b))/0xd;if(_0x567751===_0x4c2080)break;else _0x8abb00['push'](_0x8abb00['shift']());}catch(_0x30d2d6){_0x8abb00['push'](_0x8abb00['shift']());}}}(_0x2741,0x9690e));var label=_0x31d373(0x20c),tier=tier||0x0,dependencies=[_0x31d373(0x346)],pluginData=$plugins[_0x31d373(0x2c8)](function(_0x5f3d27){const _0x484804=_0x31d373;return _0x5f3d27['status']&&_0x5f3d27[_0x484804(0x220)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x31d373(0x20a)]=VisuMZ[label][_0x31d373(0x20a)]||{},VisuMZ[_0x31d373(0x24f)]=function(_0x252ee3,_0x22660d){const _0x548906=_0x31d373;for(const _0x3ce465 in _0x22660d){if(_0x3ce465[_0x548906(0x25b)](/(.*):(.*)/i)){const _0x1286c4=String(RegExp['$1']),_0x4805e9=String(RegExp['$2'])[_0x548906(0x264)]()[_0x548906(0x28f)]();let _0x52904b,_0x228ef9,_0x50f20a;switch(_0x4805e9){case _0x548906(0x310):_0x52904b=_0x22660d[_0x3ce465]!==''?Number(_0x22660d[_0x3ce465]):0x0;break;case'ARRAYNUM':_0x228ef9=_0x22660d[_0x3ce465]!==''?JSON[_0x548906(0x19d)](_0x22660d[_0x3ce465]):[],_0x52904b=_0x228ef9['map'](_0x135d9f=>Number(_0x135d9f));break;case _0x548906(0x1c3):_0x52904b=_0x22660d[_0x3ce465]!==''?eval(_0x22660d[_0x3ce465]):null;break;case _0x548906(0x2c5):_0x228ef9=_0x22660d[_0x3ce465]!==''?JSON[_0x548906(0x19d)](_0x22660d[_0x3ce465]):[],_0x52904b=_0x228ef9[_0x548906(0x375)](_0x3aa373=>eval(_0x3aa373));break;case _0x548906(0x2a2):_0x52904b=_0x22660d[_0x3ce465]!==''?JSON[_0x548906(0x19d)](_0x22660d[_0x3ce465]):'';break;case'ARRAYJSON':_0x228ef9=_0x22660d[_0x3ce465]!==''?JSON[_0x548906(0x19d)](_0x22660d[_0x3ce465]):[],_0x52904b=_0x228ef9['map'](_0x2b8e31=>JSON[_0x548906(0x19d)](_0x2b8e31));break;case _0x548906(0x1e1):_0x52904b=_0x22660d[_0x3ce465]!==''?new Function(JSON[_0x548906(0x19d)](_0x22660d[_0x3ce465])):new Function(_0x548906(0x271));break;case'ARRAYFUNC':_0x228ef9=_0x22660d[_0x3ce465]!==''?JSON[_0x548906(0x19d)](_0x22660d[_0x3ce465]):[],_0x52904b=_0x228ef9[_0x548906(0x375)](_0x5b541b=>new Function(JSON[_0x548906(0x19d)](_0x5b541b)));break;case'STR':_0x52904b=_0x22660d[_0x3ce465]!==''?String(_0x22660d[_0x3ce465]):'';break;case _0x548906(0x352):_0x228ef9=_0x22660d[_0x3ce465]!==''?JSON[_0x548906(0x19d)](_0x22660d[_0x3ce465]):[],_0x52904b=_0x228ef9[_0x548906(0x375)](_0x3e497e=>String(_0x3e497e));break;case'STRUCT':_0x50f20a=_0x22660d[_0x3ce465]!==''?JSON['parse'](_0x22660d[_0x3ce465]):{},_0x52904b=VisuMZ[_0x548906(0x24f)]({},_0x50f20a);break;case _0x548906(0x229):_0x228ef9=_0x22660d[_0x3ce465]!==''?JSON[_0x548906(0x19d)](_0x22660d[_0x3ce465]):[],_0x52904b=_0x228ef9[_0x548906(0x375)](_0x5ad46c=>VisuMZ[_0x548906(0x24f)]({},JSON['parse'](_0x5ad46c)));break;default:continue;}_0x252ee3[_0x1286c4]=_0x52904b;}}return _0x252ee3;},(_0x86053b=>{const _0x24044d=_0x31d373,_0x14a61b=_0x86053b['name'];for(const _0x221545 of dependencies){if(!Imported[_0x221545]){alert(_0x24044d(0x26e)[_0x24044d(0x24b)](_0x14a61b,_0x221545)),SceneManager[_0x24044d(0x342)]();break;}}const _0x357cf4=_0x86053b[_0x24044d(0x220)];if(_0x357cf4[_0x24044d(0x25b)](/\[Version[ ](.*?)\]/i)){const _0x4b8f19=Number(RegExp['$1']);_0x4b8f19!==VisuMZ[label]['version']&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x24044d(0x24b)](_0x14a61b,_0x4b8f19)),SceneManager['exit']());}if(_0x357cf4[_0x24044d(0x25b)](/\[Tier[ ](\d+)\]/i)){const _0x239a8e=Number(RegExp['$1']);_0x239a8e<tier?(alert(_0x24044d(0x338)[_0x24044d(0x24b)](_0x14a61b,_0x239a8e,tier)),SceneManager[_0x24044d(0x342)]()):tier=Math[_0x24044d(0x1c5)](_0x239a8e,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x24044d(0x20a)],_0x86053b[_0x24044d(0x2af)]);})(pluginData),PluginManager[_0x31d373(0x311)](pluginData[_0x31d373(0x2f4)],_0x31d373(0x2bb),_0x2be4af=>{const _0x2000e9=_0x31d373;VisuMZ[_0x2000e9(0x24f)](_0x2be4af,_0x2be4af);const _0x21993a=_0x2be4af['Actors'],_0x2d7fe3=_0x2be4af[_0x2000e9(0x2a1)];for(const _0x44d7f4 of _0x21993a){const _0x5555c3=$gameActors[_0x2000e9(0x290)](_0x44d7f4);if(!_0x5555c3)continue;_0x5555c3[_0x2000e9(0x24e)]=_0x2000e9(0x2c9),_0x5555c3['_fieldAtbGaugeIconIndex']=_0x2d7fe3;}}),PluginManager['registerCommand'](pluginData[_0x31d373(0x2f4)],'FieldGaugeActorFace',_0x3f3005=>{const _0x2faa6b=_0x31d373;VisuMZ['ConvertParams'](_0x3f3005,_0x3f3005);const _0xea3dd5=_0x3f3005[_0x2faa6b(0x2cc)],_0x123c75=_0x3f3005['FaceName'],_0x31528f=_0x3f3005[_0x2faa6b(0x2f2)];for(const _0x1239ec of _0xea3dd5){const _0x24f266=$gameActors[_0x2faa6b(0x290)](_0x1239ec);if(!_0x24f266)continue;_0x24f266[_0x2faa6b(0x24e)]=_0x2faa6b(0x2bf),_0x24f266[_0x2faa6b(0x1a2)]=_0x123c75,_0x24f266[_0x2faa6b(0x1d6)]=_0x31528f;}}),PluginManager[_0x31d373(0x311)](pluginData[_0x31d373(0x2f4)],'FieldGaugeClearActorGraphic',_0x84a29e=>{const _0x48d139=_0x31d373;VisuMZ[_0x48d139(0x24f)](_0x84a29e,_0x84a29e);const _0x2729c5=_0x84a29e[_0x48d139(0x2cc)];for(const _0x514327 of _0x2729c5){const _0x4cec46=$gameActors[_0x48d139(0x290)](_0x514327);if(!_0x4cec46)continue;_0x4cec46[_0x48d139(0x30b)]();}}),PluginManager[_0x31d373(0x311)](pluginData[_0x31d373(0x2f4)],'FieldGaugeEnemyIcon',_0x5d792e=>{const _0x3143b6=_0x31d373;VisuMZ[_0x3143b6(0x24f)](_0x5d792e,_0x5d792e);const _0x40ead1=_0x5d792e[_0x3143b6(0x19c)],_0x3c85a0=_0x5d792e[_0x3143b6(0x2a1)];for(const _0x10ebdd of _0x40ead1){const _0x7f5870=$gameTroop[_0x3143b6(0x298)]()[_0x10ebdd];if(!_0x7f5870)continue;_0x7f5870[_0x3143b6(0x24e)]=_0x3143b6(0x2c9),_0x7f5870[_0x3143b6(0x1d4)]=_0x3c85a0;}}),PluginManager[_0x31d373(0x311)](pluginData[_0x31d373(0x2f4)],_0x31d373(0x1f7),_0x339531=>{const _0x1372b3=_0x31d373;VisuMZ[_0x1372b3(0x24f)](_0x339531,_0x339531);const _0x582565=_0x339531[_0x1372b3(0x19c)],_0x596c1a=_0x339531[_0x1372b3(0x299)],_0x4028f2=_0x339531[_0x1372b3(0x2f2)];for(const _0x1226c9 of _0x582565){const _0x4c4861=$gameTroop['members']()[_0x1226c9];if(!_0x4c4861)continue;_0x4c4861[_0x1372b3(0x24e)]=_0x1372b3(0x2bf),_0x4c4861['_fieldAtbGaugeFaceName']=_0x596c1a,_0x4c4861['_fieldAtbGaugeFaceIndex']=_0x4028f2;}}),PluginManager['registerCommand'](pluginData[_0x31d373(0x2f4)],_0x31d373(0x362),_0x1d56d5=>{const _0x387f30=_0x31d373;VisuMZ[_0x387f30(0x24f)](_0x1d56d5,_0x1d56d5);const _0x1b744c=_0x1d56d5[_0x387f30(0x19c)];for(const _0x3bd42d of _0x1b744c){const _0x42a2d9=$gameTroop[_0x387f30(0x298)]()[_0x3bd42d];if(!_0x42a2d9)continue;_0x42a2d9['clearFieldAtbGraphics']();}}),PluginManager[_0x31d373(0x311)](pluginData[_0x31d373(0x2f4)],_0x31d373(0x1a0),_0x5d0aea=>{const _0x54da0a=_0x31d373;VisuMZ[_0x54da0a(0x24f)](_0x5d0aea,_0x5d0aea);const _0x50f950=_0x5d0aea[_0x54da0a(0x2f0)];$gameSystem[_0x54da0a(0x256)](_0x50f950);}),VisuMZ[_0x31d373(0x20c)][_0x31d373(0x2ac)]=Scene_Boot[_0x31d373(0x1fe)]['onDatabaseLoaded'],Scene_Boot[_0x31d373(0x1fe)][_0x31d373(0x2ef)]=function(){const _0x424b74=_0x31d373;this[_0x424b74(0x239)](),VisuMZ[_0x424b74(0x20c)][_0x424b74(0x2ac)]['call'](this),this[_0x424b74(0x2ee)]();},VisuMZ[_0x31d373(0x20c)]['RegExp']={},Scene_Boot[_0x31d373(0x1fe)][_0x31d373(0x239)]=function(){const _0x2ec45c=_0x31d373,_0x49fa60=VisuMZ['BattleCore']['RegExp'],_0x396658=_0x2ec45c(0x2b4),_0x201f0f=[_0x2ec45c(0x2e2),_0x2ec45c(0x1e5),_0x2ec45c(0x1c0)];for(const _0x36a0a5 of _0x201f0f){const _0x3f678e=_0x396658['format'](_0x36a0a5['toUpperCase']()[_0x2ec45c(0x28f)](),_0x2ec45c(0x1c9),'(?:GAUGE|TIME|SPEED)'),_0x2e577e=new RegExp(_0x3f678e,'i');VisuMZ[_0x2ec45c(0x20c)]['RegExp'][_0x36a0a5]=_0x2e577e;}},Scene_Boot['prototype'][_0x31d373(0x2ee)]=function(){const _0x5a5064=_0x31d373;if(VisuMZ[_0x5a5064(0x1b4)])return;const _0x40b27e=$dataSkills['concat']($dataItems);for(const _0x42c0f1 of _0x40b27e){if(!_0x42c0f1)continue;VisuMZ['BattleSystemATB'][_0x5a5064(0x361)](_0x42c0f1);}},VisuMZ[_0x31d373(0x20c)]['ParseSkillNotetags']=VisuMZ[_0x31d373(0x2cd)],VisuMZ[_0x31d373(0x2cd)]=function(_0x155be4){const _0x1c6448=_0x31d373;VisuMZ[_0x1c6448(0x20c)][_0x1c6448(0x2cd)][_0x1c6448(0x33c)](this,_0x155be4),VisuMZ[_0x1c6448(0x20c)][_0x1c6448(0x361)](_0x155be4);},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x330)]=VisuMZ[_0x31d373(0x330)],VisuMZ[_0x31d373(0x330)]=function(_0x512e7b){const _0x27b8fc=_0x31d373;VisuMZ[_0x27b8fc(0x20c)][_0x27b8fc(0x330)][_0x27b8fc(0x33c)](this,_0x512e7b),VisuMZ[_0x27b8fc(0x20c)][_0x27b8fc(0x361)](_0x512e7b);},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x361)]=function(_0x415ebc){const _0x283b25=_0x31d373,_0x3a1978=['Charge',_0x283b25(0x1e5),_0x283b25(0x1c0)];for(const _0x3f1dac of _0x3a1978){VisuMZ['BattleSystemATB'][_0x283b25(0x36e)](_0x415ebc,_0x3f1dac);}},VisuMZ[_0x31d373(0x20c)]['JS']={},VisuMZ['BattleSystemATB']['createJS']=function(_0x1f2e59,_0x484c61){const _0x2cf82d=_0x31d373,_0x5f0d66=_0x1f2e59[_0x2cf82d(0x20b)];if(_0x5f0d66[_0x2cf82d(0x25b)](VisuMZ[_0x2cf82d(0x20c)]['RegExp'][_0x484c61])){const _0x36effb=String(RegExp['$1']),_0x35151c=_0x2cf82d(0x2a4)[_0x2cf82d(0x24b)](_0x36effb,_0x484c61),_0x15336b=VisuMZ[_0x2cf82d(0x20c)][_0x2cf82d(0x228)](_0x1f2e59,_0x484c61);VisuMZ['BattleSystemATB']['JS'][_0x15336b]=new Function(_0x35151c);}},VisuMZ['BattleSystemATB']['createKeyJS']=function(_0x12be7d,_0x1fdf6f){const _0x2b5344=_0x31d373;if(VisuMZ['createKeyJS'])return VisuMZ[_0x2b5344(0x228)](_0x12be7d,_0x1fdf6f);let _0x155801='';if($dataActors[_0x2b5344(0x21f)](_0x12be7d))_0x155801=_0x2b5344(0x1f1)[_0x2b5344(0x24b)](_0x12be7d['id'],_0x1fdf6f);if($dataClasses[_0x2b5344(0x21f)](_0x12be7d))_0x155801='Class-%1-%2'[_0x2b5344(0x24b)](_0x12be7d['id'],_0x1fdf6f);if($dataSkills['includes'](_0x12be7d))_0x155801=_0x2b5344(0x242)[_0x2b5344(0x24b)](_0x12be7d['id'],_0x1fdf6f);if($dataItems[_0x2b5344(0x21f)](_0x12be7d))_0x155801='Item-%1-%2'[_0x2b5344(0x24b)](_0x12be7d['id'],_0x1fdf6f);if($dataWeapons[_0x2b5344(0x21f)](_0x12be7d))_0x155801='Weapon-%1-%2'[_0x2b5344(0x24b)](_0x12be7d['id'],_0x1fdf6f);if($dataArmors[_0x2b5344(0x21f)](_0x12be7d))_0x155801='Armor-%1-%2'[_0x2b5344(0x24b)](_0x12be7d['id'],_0x1fdf6f);if($dataEnemies[_0x2b5344(0x21f)](_0x12be7d))_0x155801=_0x2b5344(0x339)[_0x2b5344(0x24b)](_0x12be7d['id'],_0x1fdf6f);if($dataStates['includes'](_0x12be7d))_0x155801=_0x2b5344(0x233)[_0x2b5344(0x24b)](_0x12be7d['id'],_0x1fdf6f);return _0x155801;},ConfigManager[_0x31d373(0x355)]=!![],VisuMZ[_0x31d373(0x20c)][_0x31d373(0x289)]=ConfigManager['makeData'],ConfigManager[_0x31d373(0x25f)]=function(){const _0x4a3ebb=_0x31d373,_0x2fbcb0=VisuMZ[_0x4a3ebb(0x20c)]['ConfigManager_makeData']['call'](this);return _0x2fbcb0[_0x4a3ebb(0x355)]=this[_0x4a3ebb(0x355)],_0x2fbcb0;},VisuMZ['BattleSystemATB'][_0x31d373(0x1c8)]=ConfigManager[_0x31d373(0x34e)],ConfigManager[_0x31d373(0x34e)]=function(_0x1f3648){const _0x4b9200=_0x31d373;VisuMZ['BattleSystemATB'][_0x4b9200(0x1c8)][_0x4b9200(0x33c)](this,_0x1f3648),_0x4b9200(0x355)in _0x1f3648?this[_0x4b9200(0x355)]=_0x1f3648[_0x4b9200(0x355)]:this[_0x4b9200(0x355)]=!![];},ImageManager[_0x31d373(0x29e)]=ImageManager[_0x31d373(0x29e)]||0x9,ImageManager[_0x31d373(0x21b)]=ImageManager[_0x31d373(0x21b)]||0x6,TextManager[_0x31d373(0x355)]=VisuMZ['BattleSystemATB'][_0x31d373(0x20a)][_0x31d373(0x319)]['Name'],VisuMZ[_0x31d373(0x20c)][_0x31d373(0x1ee)]=ColorManager[_0x31d373(0x322)],ColorManager['loadWindowskin']=function(){const _0x345d71=_0x31d373;VisuMZ[_0x345d71(0x20c)][_0x345d71(0x1ee)][_0x345d71(0x33c)](this),this[_0x345d71(0x350)][_0x345d71(0x265)](this['setupBattleSystemATBColors'][_0x345d71(0x2ff)](this));},ColorManager[_0x31d373(0x257)]=function(_0x3ac073){const _0x29acfa=_0x31d373;return _0x3ac073=String(_0x3ac073),_0x3ac073[_0x29acfa(0x25b)](/#(.*)/i)?_0x29acfa(0x2b8)[_0x29acfa(0x24b)](String(RegExp['$1'])):this[_0x29acfa(0x1fc)](Number(_0x3ac073));},ColorManager[_0x31d373(0x32d)]=function(){const _0x53939f=_0x31d373,_0xbed9dd=[_0x53939f(0x211),_0x53939f(0x368),_0x53939f(0x29f),_0x53939f(0x249),_0x53939f(0x26a),_0x53939f(0x25c)],_0xc64546=VisuMZ[_0x53939f(0x20c)][_0x53939f(0x20a)]['Color'];this['_atbColors']={};for(const _0x18959c of _0xbed9dd){for(let _0x5a8962=0x1;_0x5a8962<=0x2;_0x5a8962++){const _0x18ce9d=_0x18959c+_0x5a8962;this[_0x53939f(0x222)][_0x18ce9d]=this[_0x53939f(0x257)](_0xc64546[_0x18ce9d]);}}},ColorManager[_0x31d373(0x33f)]=function(_0x565d5d){const _0xe535d9=_0x31d373;if(this[_0xe535d9(0x222)]===undefined)this[_0xe535d9(0x32d)]();return this[_0xe535d9(0x222)][_0x565d5d]||_0xe535d9(0x259);},SceneManager['isSceneBattle']=function(){const _0x5034f8=_0x31d373;return this[_0x5034f8(0x2d3)]&&this[_0x5034f8(0x2d3)][_0x5034f8(0x251)]===Scene_Battle;},BattleManager['isATB']=function(){const _0x4762c0=_0x31d373;if(Imported[_0x4762c0(0x1c1)]&&this[_0x4762c0(0x364)]())return![];return this[_0x4762c0(0x217)]();},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x1cc)]=BattleManager[_0x31d373(0x326)],BattleManager[_0x31d373(0x326)]=function(){const _0x2f0017=_0x31d373;if(!this[_0x2f0017(0x217)]())return![];else return ConfigManager&&ConfigManager[_0x2f0017(0x238)]!==undefined?ConfigManager[_0x2f0017(0x238)]:VisuMZ[_0x2f0017(0x20c)][_0x2f0017(0x1cc)]['call'](this);},VisuMZ[_0x31d373(0x20c)]['Game_System_initialize']=Game_System[_0x31d373(0x1fe)][_0x31d373(0x252)],Game_System['prototype'][_0x31d373(0x252)]=function(){const _0x521d47=_0x31d373;VisuMZ['BattleSystemATB'][_0x521d47(0x2d5)][_0x521d47(0x33c)](this),this[_0x521d47(0x2cf)]();},Game_System[_0x31d373(0x1fe)][_0x31d373(0x2cf)]=function(){this['_atbFieldGaugeVisible']=!![];},Game_System['prototype'][_0x31d373(0x203)]=function(){const _0x20650e=_0x31d373;return this['_atbFieldGaugeVisible']===undefined&&this[_0x20650e(0x2cf)](),this['_atbFieldGaugeVisible'];},Game_System[_0x31d373(0x1fe)][_0x31d373(0x256)]=function(_0x20f94a){const _0x51f908=_0x31d373;this['_atbFieldGaugeVisible']===undefined&&this[_0x51f908(0x2cf)](),this[_0x51f908(0x30c)]=_0x20f94a;},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x317)]=Game_Action[_0x31d373(0x1fe)][_0x31d373(0x1cd)],Game_Action[_0x31d373(0x1fe)][_0x31d373(0x1cd)]=function(_0x5a6abe){const _0x4ad5bc=_0x31d373;VisuMZ['BattleSystemATB'][_0x4ad5bc(0x317)][_0x4ad5bc(0x33c)](this,_0x5a6abe),this[_0x4ad5bc(0x22a)](_0x5a6abe);},Game_Action[_0x31d373(0x1fe)][_0x31d373(0x22a)]=function(_0x117359){const _0x3c69f7=_0x31d373;if(!SceneManager[_0x3c69f7(0x1de)]())return;if(!BattleManager['isATB']())return;if(this[_0x3c69f7(0x2ba)]())this['applyItemBattleSystemATBUserEffect'](_0x117359);},Game_Action[_0x31d373(0x1fe)][_0x31d373(0x2de)]=function(_0xd64d8){const _0x343388=_0x31d373,_0x3e1b94=this[_0x343388(0x2ba)]()[_0x343388(0x20b)];if(_0xd64d8['isAtbChargingState']()){const _0x5a0ee5=VisuMZ['BattleSystemATB'][_0x343388(0x228)](this[_0x343388(0x2ba)](),_0x343388(0x2e2));if(VisuMZ[_0x343388(0x20c)]['JS'][_0x5a0ee5]){const _0x2c8051=VisuMZ[_0x343388(0x20c)]['JS'][_0x5a0ee5][_0x343388(0x33c)](this,this[_0x343388(0x2fb)](),_0xd64d8);_0xd64d8[_0x343388(0x1c2)](_0x2c8051);}_0x3e1b94['match'](/<(?:ATB|TPB) CHARGE (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&_0xd64d8[_0x343388(0x1c2)](Number(RegExp['$1'])*0.01),_0x3e1b94[_0x343388(0x25b)](/<(?:ATB|TPB) CHARGE (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i)&&_0xd64d8[_0x343388(0x332)](Number(RegExp['$1'])*0.01);}else{if(_0xd64d8['isAtbCastingState']()){const _0x53a6b0=VisuMZ['BattleSystemATB']['createKeyJS'](this[_0x343388(0x2ba)](),_0x343388(0x1e5));if(VisuMZ[_0x343388(0x20c)]['JS'][_0x53a6b0]){const _0x56b865=VisuMZ[_0x343388(0x20c)]['JS'][_0x53a6b0][_0x343388(0x33c)](this,this['subject'](),_0xd64d8);_0xd64d8[_0x343388(0x24a)](_0x56b865);}_0x3e1b94[_0x343388(0x25b)](/<(?:ATB|TPB) CAST (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&_0xd64d8[_0x343388(0x24a)](Number(RegExp['$1'])*0.01),_0x3e1b94[_0x343388(0x25b)](/<(?:ATB|TPB) CAST (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i)&&_0xd64d8['changeAtbCastTime'](Number(RegExp['$1'])*0.01),_0x3e1b94[_0x343388(0x25b)](/<(?:ATB|TPB) INTERRUPT>/i)&&_0xd64d8['atbInterrupt']();}}},VisuMZ['BattleSystemATB'][_0x31d373(0x34c)]=Game_Action[_0x31d373(0x1fe)][_0x31d373(0x260)],Game_Action['prototype'][_0x31d373(0x260)]=function(){const _0x4fe4d=_0x31d373;VisuMZ[_0x4fe4d(0x20c)]['Game_Action_applyGlobal'][_0x4fe4d(0x33c)](this),this[_0x4fe4d(0x1ca)]();},Game_Action['prototype'][_0x31d373(0x1ca)]=function(){const _0x501b51=_0x31d373;if(!this['item']())return;if(!BattleManager[_0x501b51(0x30a)]())return;const _0x1d2804=this[_0x501b51(0x2ba)]()[_0x501b51(0x20b)];let _0x4ee204=0x0;this[_0x501b51(0x1ef)]&&(_0x4ee204=this[_0x501b51(0x2fb)]()[_0x501b51(0x21e)]);const _0x332491=VisuMZ[_0x501b51(0x20c)][_0x501b51(0x228)](this[_0x501b51(0x2ba)](),_0x501b51(0x1c0));VisuMZ[_0x501b51(0x20c)]['JS'][_0x332491]&&(_0x4ee204=VisuMZ[_0x501b51(0x20c)]['JS'][_0x332491][_0x501b51(0x33c)](this,this[_0x501b51(0x2fb)](),this[_0x501b51(0x2fb)]()));let _0x4823a1=this[_0x501b51(0x2ba)]()['speed']>0x0?this[_0x501b51(0x2ba)]()[_0x501b51(0x33e)]:0x0;if(this[_0x501b51(0x324)]())_0x4823a1+=this[_0x501b51(0x2fb)]()[_0x501b51(0x373)]();_0x4ee204+=(_0x4823a1/0xfa0)[_0x501b51(0x1a4)](0x0,0x1);this['item']()[_0x501b51(0x20b)][_0x501b51(0x25b)](/<(?:ATB|TPB) AFTER (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&(_0x4ee204=Number(RegExp['$1'])*0.01);const _0x43de1b=this[_0x501b51(0x2fb)]()['traitObjects']()['concat'](this[_0x501b51(0x2fb)]()[_0x501b51(0x294)]()),_0x265061=/<(?:ATB|TPB) AFTER (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i,_0x15e764=_0x43de1b[_0x501b51(0x375)](_0x3ed840=>_0x3ed840&&_0x3ed840[_0x501b51(0x20b)]['match'](_0x265061)?Number(RegExp['$1'])*0.01:0x0);_0x4ee204=_0x15e764[_0x501b51(0x314)]((_0x3277cd,_0x2f6c7d)=>_0x3277cd+_0x2f6c7d,_0x4ee204),this[_0x501b51(0x2ba)]()['note'][_0x501b51(0x25b)](/<(?:ATB|TPB) INSTANT>/i)&&(_0x4ee204=0xa),this[_0x501b51(0x2fb)]()[_0x501b51(0x2c6)](_0x4ee204);},Game_BattlerBase['prototype'][_0x31d373(0x1c2)]=function(_0x5be678){const _0x132fd9=_0x31d373;this[_0x132fd9(0x21e)]=_0x5be678[_0x132fd9(0x1a4)](0x0,0x1);},Game_BattlerBase['prototype'][_0x31d373(0x332)]=function(_0x5b7ba5){const _0x5aa6ef=_0x31d373;this[_0x5aa6ef(0x1c2)](this[_0x5aa6ef(0x21e)]+_0x5b7ba5);},Game_BattlerBase[_0x31d373(0x1fe)][_0x31d373(0x24a)]=function(_0x373317){const _0x5d68e0=_0x31d373,_0x22f16d=this[_0x5d68e0(0x278)]();this[_0x5d68e0(0x333)]=(_0x22f16d*_0x373317)[_0x5d68e0(0x1a4)](0x0,_0x22f16d);},Game_BattlerBase[_0x31d373(0x1fe)]['changeAtbCastTime']=function(_0x4a19ec){const _0xa85f23=_0x31d373,_0x275aef=this[_0xa85f23(0x278)](),_0x35a3d6=_0x275aef*_0x4a19ec;this[_0xa85f23(0x333)]=(this[_0xa85f23(0x333)]+_0x35a3d6)[_0xa85f23(0x1a4)](0x0,_0x275aef);},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x337)]=Game_BattlerBase['prototype']['die'],Game_BattlerBase[_0x31d373(0x1fe)][_0x31d373(0x369)]=function(){const _0x830607=_0x31d373;VisuMZ[_0x830607(0x20c)][_0x830607(0x337)][_0x830607(0x33c)](this),BattleManager[_0x830607(0x217)]()&&this[_0x830607(0x306)]();},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x2f7)]=Game_BattlerBase['prototype'][_0x31d373(0x28a)],Game_BattlerBase[_0x31d373(0x1fe)][_0x31d373(0x28a)]=function(){const _0x1b1744=_0x31d373;VisuMZ[_0x1b1744(0x20c)][_0x1b1744(0x2f7)][_0x1b1744(0x33c)](this),BattleManager['isTpb']()&&this[_0x1b1744(0x306)]();},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x344)]=Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x315)],Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x315)]=function(_0x4286a8){const _0x243791=_0x31d373;BattleManager[_0x243791(0x30a)]()?this['initTpbChargeTimeATB'](_0x4286a8):VisuMZ[_0x243791(0x20c)]['Game_Battler_initTpbChargeTime'][_0x243791(0x33c)](this,_0x4286a8);},Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x1b8)]=function(_0x30ac85){const _0x2de2f8=_0x31d373,_0x334d4d=VisuMZ[_0x2de2f8(0x20c)][_0x2de2f8(0x20a)][_0x2de2f8(0x2ce)];let _0x2ec2ab=this[_0x2de2f8(0x232)]()*eval(_0x334d4d['InitialGaugeJS']);const _0x1f1e63=this[_0x2de2f8(0x293)]()[_0x2de2f8(0x295)](this[_0x2de2f8(0x294)]()),_0x17ac52=/<(?:ATB|TPB) (?:BATTLE START|START) (?:GAUGE|TIME|SPEED): ([\+\-]\d+)([%％])>/i,_0x157bb3=_0x1f1e63[_0x2de2f8(0x375)](_0x5b9a2f=>_0x5b9a2f&&_0x5b9a2f[_0x2de2f8(0x20b)][_0x2de2f8(0x25b)](_0x17ac52)?Number(RegExp['$1'])*0.01:0x0);_0x2ec2ab=_0x157bb3[_0x2de2f8(0x314)]((_0x4ffadf,_0x4dd1f0)=>_0x4ffadf+_0x4dd1f0,_0x2ec2ab),this[_0x2de2f8(0x1a6)]=_0x2de2f8(0x1b2),this[_0x2de2f8(0x21e)]=(_0x30ac85?0x1:_0x2ec2ab)['clamp'](0x0,0x1),this['isRestricted']()&&(this['_tpbChargeTime']=0x0);},Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x1db)]=function(){const _0xdaeb01=_0x31d373;return this[_0xdaeb01(0x1a6)]===_0xdaeb01(0x1b2);},Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x31f)]=function(){const _0x2efb51=_0x31d373;return this['_tpbState']===_0x2efb51(0x2e4)&&this[_0x2efb51(0x2e8)]()&&this[_0x2efb51(0x2e8)]()[_0x2efb51(0x2ba)]()&&this[_0x2efb51(0x2e8)]()[_0x2efb51(0x2ba)]()[_0x2efb51(0x33e)]<0x0;},Game_BattlerBase[_0x31d373(0x1fe)][_0x31d373(0x1ae)]=function(){const _0x31d545=_0x31d373;return this[_0x31d545(0x31f)]()?this[_0x31d545(0x333)]/this[_0x31d545(0x278)]():0x0;},Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x1f5)]=function(){const _0x69f822=_0x31d373;return!this[_0x69f822(0x1f0)]();},Game_Battler[_0x31d373(0x1fe)]['setAtbAfterSpeed']=function(_0x1a62c9){const _0x55ab3f=_0x31d373;this[_0x55ab3f(0x212)]=_0x1a62c9;},VisuMZ['BattleSystemATB'][_0x31d373(0x199)]=BattleManager[_0x31d373(0x22f)],BattleManager[_0x31d373(0x22f)]=function(_0x57ff62){const _0x398fb4=_0x31d373;this[_0x398fb4(0x217)]()&&!_0x57ff62[_0x398fb4(0x1f0)]()&&(_0x57ff62[_0x398fb4(0x263)]=!![]),VisuMZ[_0x398fb4(0x20c)]['BattleManager_endBattlerActions'][_0x398fb4(0x33c)](this,_0x57ff62),_0x57ff62[_0x398fb4(0x1b9)]()&&this[_0x398fb4(0x217)]()&&!_0x57ff62['canMove']()&&(_0x57ff62['_onRestrictBypassAtbReset']=![]);},VisuMZ['BattleSystemATB'][_0x31d373(0x19a)]=Game_Battler[_0x31d373(0x1fe)]['clearTpbChargeTime'],Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x306)]=function(){const _0x33f657=_0x31d373;if(this[_0x33f657(0x263)])return;VisuMZ[_0x33f657(0x20c)][_0x33f657(0x19a)][_0x33f657(0x33c)](this),this[_0x33f657(0x21e)]+=this[_0x33f657(0x212)]||0x0;},Game_Battler[_0x31d373(0x1fe)]['atbInterrupt']=function(){const _0x367ec9=_0x31d373;if(!this[_0x367ec9(0x31f)]())return;if(!this['currentAction']())return;if(!this[_0x367ec9(0x2e8)]()['item']())return;if(this[_0x367ec9(0x2e8)]()[_0x367ec9(0x2ba)]()[_0x367ec9(0x20b)]['match'](/<(?:ATB|TPB) CANNOT (?:BE INTERRUPTED|INTERRUPT)>/i))return;this[_0x367ec9(0x359)](),this[_0x367ec9(0x306)](),this[_0x367ec9(0x333)]=0x0,this[_0x367ec9(0x1f9)]();},Game_Battler['prototype']['onAtbInterrupt']=function(){const _0x2b494b=_0x31d373,_0x57cccf=VisuMZ['BattleSystemATB'][_0x2b494b(0x20a)]['Interrupt'];if(Imported[_0x2b494b(0x328)]){const _0x4ae2de=_0x57cccf[_0x2b494b(0x23d)],_0x1b8606=_0x57cccf[_0x2b494b(0x340)],_0x308768=_0x57cccf[_0x2b494b(0x247)];$gameTemp[_0x2b494b(0x2d7)]([this],_0x4ae2de,_0x1b8606,_0x308768);}if(this[_0x2b494b(0x1c6)]()&&_0x57cccf[_0x2b494b(0x356)][_0x2b494b(0x1df)]>0x0){const _0x3aba0a=_0x57cccf[_0x2b494b(0x356)],_0x567284={'textColor':ColorManager[_0x2b494b(0x257)](_0x57cccf[_0x2b494b(0x223)]),'flashColor':_0x57cccf[_0x2b494b(0x207)],'flashDuration':_0x57cccf['InterruptFlashDuration']};this['setupTextPopup'](_0x3aba0a,_0x567284);}},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x2ea)]=Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x246)],Game_Battler['prototype']['startTpbCasting']=function(){const _0x5dd892=_0x31d373;VisuMZ[_0x5dd892(0x20c)][_0x5dd892(0x2ea)]['call'](this),BattleManager[_0x5dd892(0x30a)]()&&(this[_0x5dd892(0x333)]>=this[_0x5dd892(0x278)]()&&(this[_0x5dd892(0x1a6)]=_0x5dd892(0x288)));},VisuMZ['BattleSystemATB'][_0x31d373(0x243)]=Game_Unit['prototype'][_0x31d373(0x303)],Game_Unit[_0x31d373(0x1fe)]['updateTpb']=function(){const _0x2afa84=_0x31d373;if(BattleManager[_0x2afa84(0x30a)]()){if(BattleManager[_0x2afa84(0x312)]()['some'](_0x18f4bb=>_0x18f4bb&&_0x18f4bb[_0x2afa84(0x1ce)]()&&_0x18f4bb[_0x2afa84(0x304)]()&&_0x18f4bb[_0x2afa84(0x1a6)]===_0x2afa84(0x288)))return;}VisuMZ['BattleSystemATB']['Game_Unit_updateTpb'][_0x2afa84(0x33c)](this);},VisuMZ['BattleSystemATB'][_0x31d373(0x2b6)]=Game_Battler[_0x31d373(0x1fe)]['onRestrict'],Game_Battler[_0x31d373(0x1fe)]['onRestrict']=function(){const _0x38b3e1=_0x31d373;!VisuMZ[_0x38b3e1(0x20c)][_0x38b3e1(0x20a)][_0x38b3e1(0x2ce)][_0x38b3e1(0x1ba)]&&(this[_0x38b3e1(0x263)]=BattleManager[_0x38b3e1(0x30a)]()),VisuMZ['BattleSystemATB']['Game_Battler_onRestrict'][_0x38b3e1(0x33c)](this),BattleManager[_0x38b3e1(0x217)]()&&this['_tpbState']===_0x38b3e1(0x19b)&&this[_0x38b3e1(0x1b9)]()&&(this[_0x38b3e1(0x1d1)]=!![]),this['_onRestrictBypassAtbReset']=undefined;},VisuMZ[_0x31d373(0x20c)]['Game_Actor_clearActions']=Game_Actor[_0x31d373(0x1fe)][_0x31d373(0x359)],Game_Actor['prototype']['clearActions']=function(){const _0x16f789=_0x31d373;if(this[_0x16f789(0x263)]){if(!this[_0x16f789(0x31f)]())return;}VisuMZ[_0x16f789(0x20c)][_0x16f789(0x1fd)][_0x16f789(0x33c)](this);},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x320)]=Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x35d)],Game_Battler[_0x31d373(0x1fe)]['removeState']=function(_0x269dd4){const _0x1ef042=_0x31d373,_0x4daf06=!this[_0x1ef042(0x1f0)]()&&BattleManager[_0x1ef042(0x217)](),_0x4d7af1=this['isStateAffected'](_0x269dd4);VisuMZ[_0x1ef042(0x20c)][_0x1ef042(0x320)][_0x1ef042(0x33c)](this,_0x269dd4);if(this[_0x1ef042(0x1b9)]()&&_0x4d7af1&&!this[_0x1ef042(0x297)](_0x269dd4))_0x4daf06&&this[_0x1ef042(0x1f0)]()&&this['_needsAtbClear']&&(this[_0x1ef042(0x306)](),this[_0x1ef042(0x359)](),this[_0x1ef042(0x333)]=0x0),this[_0x1ef042(0x272)](_0x1ef042(0x216));else _0x4daf06&&this[_0x1ef042(0x1f0)]()&&this[_0x1ef042(0x205)]()<=0x0&&(this[_0x1ef042(0x31a)](),this[_0x1ef042(0x1a6)]=_0x1ef042(0x1b2),this[_0x1ef042(0x263)]=undefined);},Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x1d0)]=function(){const _0x1f6887=_0x31d373;this['processBattleCoreJS'](_0x1f6887(0x1dc)),this[_0x1f6887(0x210)]=![],this[_0x1f6887(0x327)]++,this[_0x1f6887(0x31c)]=0x0,this['canMakeTpbActionsAtStartTpbTurn']()&&this[_0x1f6887(0x36c)](),this[_0x1f6887(0x1d2)](_0x1f6887(0x2fe));},Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x2a9)]=function(){const _0x2f9f83=_0x31d373;if(this['numActions']()!==0x0)return![];if(BattleManager[_0x2f9f83(0x30a)]()){if(this[_0x2f9f83(0x1b9)]()){if(!this[_0x2f9f83(0x2e7)]())return![];}}return!![];},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x360)]=Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x2d0)],Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x2d0)]=function(){const _0x174b30=_0x31d373;BattleManager['isATB']()?this[_0x174b30(0x292)]():VisuMZ[_0x174b30(0x20c)]['Game_Battler_applyTpbPenalty']['call'](this);},Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x292)]=function(){const _0x2ba5c7=_0x31d373;this[_0x2ba5c7(0x1a6)]=_0x2ba5c7(0x1b2),this['_tpbChargeTime']+=VisuMZ[_0x2ba5c7(0x20c)][_0x2ba5c7(0x20a)][_0x2ba5c7(0x2ce)]['EscapeFailPenalty']||0x0;},VisuMZ['BattleSystemATB'][_0x31d373(0x2b2)]=Game_Battler['prototype'][_0x31d373(0x30e)],Game_Battler['prototype'][_0x31d373(0x30e)]=function(){const _0x5d6f33=_0x31d373;return BattleManager[_0x5d6f33(0x30a)]()?VisuMZ[_0x5d6f33(0x20c)][_0x5d6f33(0x20a)][_0x5d6f33(0x2ce)]['TpbSpeedCalcJS'][_0x5d6f33(0x33c)](this,this):VisuMZ['BattleSystemATB']['Game_Battler_tpbSpeed']['call'](this);},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x34d)]=Game_Battler['prototype'][_0x31d373(0x354)],Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x354)]=function(){const _0x1b3308=_0x31d373;return BattleManager[_0x1b3308(0x30a)]()?VisuMZ[_0x1b3308(0x20c)][_0x1b3308(0x20a)][_0x1b3308(0x2ce)][_0x1b3308(0x20f)][_0x1b3308(0x33c)](this,this):VisuMZ['BattleSystemATB'][_0x1b3308(0x34d)][_0x1b3308(0x33c)](this);},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x29a)]=Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x232)],Game_Battler[_0x31d373(0x1fe)]['tpbRelativeSpeed']=function(){const _0x441e13=_0x31d373;return BattleManager[_0x441e13(0x30a)]()?VisuMZ[_0x441e13(0x20c)][_0x441e13(0x20a)][_0x441e13(0x2ce)][_0x441e13(0x32c)][_0x441e13(0x33c)](this,this):VisuMZ[_0x441e13(0x20c)][_0x441e13(0x29a)][_0x441e13(0x33c)](this);},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x2b0)]=Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x27c)],Game_Battler['prototype'][_0x31d373(0x27c)]=function(){const _0x2e809d=_0x31d373;return BattleManager[_0x2e809d(0x30a)]()?this[_0x2e809d(0x358)]():VisuMZ['BattleSystemATB'][_0x2e809d(0x2b0)][_0x2e809d(0x33c)](this);},Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x358)]=function(){const _0x407c70=_0x31d373;let _0x2619b1=VisuMZ[_0x407c70(0x20c)][_0x407c70(0x20a)]['Mechanics'][_0x407c70(0x26f)][_0x407c70(0x33c)](this,this);if(ConfigManager&&ConfigManager[_0x407c70(0x269)]!==undefined){const _0x4d6bd0=ConfigManager[_0x407c70(0x269)]-0x3;if(_0x4d6bd0>0x0)return _0x2619b1*(_0x4d6bd0*0x2);else{if(_0x4d6bd0<0x0)return _0x2619b1*(0x1/(_0x4d6bd0*-0x2));}}return _0x2619b1;},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x28d)]=Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x278)],Game_Battler[_0x31d373(0x1fe)][_0x31d373(0x278)]=function(){const _0x1a8cb0=_0x31d373;if(BattleManager['isATB']()){const _0x204295=this[_0x1a8cb0(0x226)][_0x1a8cb0(0x375)](_0xa033b5=>_0xa033b5[_0x1a8cb0(0x2ba)]());for(const _0x5b48af of _0x204295){if(!_0x5b48af)continue;_0x5b48af[_0x1a8cb0(0x286)]=_0x5b48af[_0x1a8cb0(0x286)]??_0x5b48af['speed'];}let _0x4bae3c=VisuMZ[_0x1a8cb0(0x20c)][_0x1a8cb0(0x20a)][_0x1a8cb0(0x2ce)][_0x1a8cb0(0x274)][_0x1a8cb0(0x33c)](this,this);for(const _0x532dd6 of _0x204295){if(!_0x532dd6)continue;_0x532dd6[_0x1a8cb0(0x33e)]=_0x532dd6['_originalSpeed'];}return _0x4bae3c;}else return VisuMZ[_0x1a8cb0(0x20c)]['Game_Battler_tpbRequiredCastTime'][_0x1a8cb0(0x33c)](this);},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x2ab)]=Scene_Options[_0x31d373(0x1fe)][_0x31d373(0x1e9)],Scene_Options['prototype']['maxCommands']=function(){const _0x3c9ced=_0x31d373;let _0x890c33=VisuMZ['BattleSystemATB'][_0x3c9ced(0x2ab)][_0x3c9ced(0x33c)](this);const _0x631134=VisuMZ['BattleSystemATB'][_0x3c9ced(0x20a)];if(_0x631134['Options'][_0x3c9ced(0x33d)]&&_0x631134[_0x3c9ced(0x319)][_0x3c9ced(0x2e6)]&&BattleManager['isATB']())_0x890c33++;return _0x890c33;},Sprite_Battler[_0x31d373(0x1fe)]['createAtbGaugeSprite']=function(){const _0xf5d5c9=_0x31d373;if(!BattleManager[_0xf5d5c9(0x30a)]())return;if(!ConfigManager['visualAtbGauge'])return;const _0x23501e=VisuMZ['BattleSystemATB'][_0xf5d5c9(0x20a)]['Gauge'],_0x2c9dfe=new Sprite_Gauge();_0x2c9dfe[_0xf5d5c9(0x36f)]['x']=_0x23501e['AnchorX'],_0x2c9dfe[_0xf5d5c9(0x36f)]['y']=_0x23501e[_0xf5d5c9(0x325)],_0x2c9dfe[_0xf5d5c9(0x255)]['x']=_0x2c9dfe[_0xf5d5c9(0x255)]['y']=_0x23501e[_0xf5d5c9(0x244)],this[_0xf5d5c9(0x2e1)]=_0x2c9dfe,this['addChild'](this[_0xf5d5c9(0x2e1)]);},VisuMZ['BattleSystemATB']['Sprite_Battler_setBattler']=Sprite_Battler[_0x31d373(0x1fe)][_0x31d373(0x198)],Sprite_Battler[_0x31d373(0x1fe)][_0x31d373(0x198)]=function(_0x17b832){const _0x3d0074=_0x31d373;VisuMZ[_0x3d0074(0x20c)][_0x3d0074(0x2a7)][_0x3d0074(0x33c)](this,_0x17b832),this['setupAtbGaugeSprite'](_0x17b832),this[_0x3d0074(0x241)]();},Sprite_Battler[_0x31d373(0x1fe)][_0x31d373(0x24c)]=function(_0xe23a02){const _0x29e26d=_0x31d373;if(!_0xe23a02)return;if(!this[_0x29e26d(0x2e1)])return;if(_0xe23a02[_0x29e26d(0x323)]()){}else{if(_0xe23a02['isEnemy']()){if(this['constructor']===Sprite_Enemy&&_0xe23a02[_0x29e26d(0x245)]())return;if(this[_0x29e26d(0x251)]===Sprite_SvEnemy&&!_0xe23a02[_0x29e26d(0x245)]())return;}}this[_0x29e26d(0x2e1)][_0x29e26d(0x307)](_0xe23a02,_0x29e26d(0x23e));},Sprite_Battler[_0x31d373(0x1fe)]['updateAtbGaugeSpriteVisibility']=function(){const _0xa21917=_0x31d373;if(!this[_0xa21917(0x2e1)])return;const _0xf6e411=this[_0xa21917(0x351)]&&this[_0xa21917(0x351)][_0xa21917(0x304)]()&&!this['_battler'][_0xa21917(0x2c2)]();this['_atbGaugeSprite'][_0xa21917(0x1da)]=_0xf6e411,this[_0xa21917(0x363)]&&this['_svBattlerSprite'][_0xa21917(0x2e1)]&&(this[_0xa21917(0x363)][_0xa21917(0x2e1)]['visible']=_0xf6e411);},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x1ed)]=Sprite_Battler[_0x31d373(0x1fe)][_0x31d373(0x1aa)],Sprite_Battler['prototype'][_0x31d373(0x1aa)]=function(){const _0x282e73=_0x31d373;VisuMZ[_0x282e73(0x20c)][_0x282e73(0x1ed)]['call'](this),this['updateAtbGaugeSpritePosition']();},Sprite_Battler[_0x31d373(0x1fe)][_0x31d373(0x343)]=function(){const _0x30a2ee=_0x31d373;if(!this[_0x30a2ee(0x351)])return;if(!this['_atbGaugeSprite'])return;if(this[_0x30a2ee(0x351)]&&this[_0x30a2ee(0x351)]['isEnemy']()&&this[_0x30a2ee(0x351)][_0x30a2ee(0x245)]()){if(this[_0x30a2ee(0x251)]===Sprite_Enemy)return;}const _0x58d952=VisuMZ[_0x30a2ee(0x20c)][_0x30a2ee(0x20a)]['Gauge'],_0x8f6565=this['_atbGaugeSprite'];let _0x4bb00d=_0x58d952[_0x30a2ee(0x2aa)];this[_0x30a2ee(0x351)][_0x30a2ee(0x25a)]&&(_0x4bb00d+=this['_battler'][_0x30a2ee(0x25a)]());let _0x3858a1=_0x58d952[_0x30a2ee(0x34f)];this[_0x30a2ee(0x351)][_0x30a2ee(0x2be)]&&(_0x3858a1+=this[_0x30a2ee(0x351)]['battleUIOffsetY']());_0x8f6565['x']=_0x4bb00d;let _0x22ee99=this['height'];this[_0x30a2ee(0x351)]&&this['_battler']['isEnemy']()&&this[_0x30a2ee(0x351)]['hasSvBattler']()&&(_0x22ee99=this[_0x30a2ee(0x351)][_0x30a2ee(0x237)]()[_0x30a2ee(0x23c)]||0x1),_0x8f6565['y']=-_0x22ee99+_0x3858a1,this[_0x30a2ee(0x351)][_0x30a2ee(0x1b9)]()&&(this[_0x30a2ee(0x351)][_0x30a2ee(0x318)]()[_0x30a2ee(0x20b)][_0x30a2ee(0x25b)](/<HIDE (?:ATB|TPB) GAUGE>/i)&&(_0x8f6565[_0x30a2ee(0x1da)]=![])),this[_0x30a2ee(0x29d)]()&&(_0x8f6565['y']+=_0x8f6565['gaugeHeight']()*_0x58d952[_0x30a2ee(0x244)]-0x1),this[_0x30a2ee(0x255)]['x']<0x0&&(_0x8f6565['scale']['x']=-Math[_0x30a2ee(0x1ab)](_0x8f6565[_0x30a2ee(0x255)]['x']));},Sprite_Battler[_0x31d373(0x1fe)][_0x31d373(0x29d)]=function(){const _0x2b6803=_0x31d373;if(!Imported[_0x2b6803(0x2da)])return![];if(this['_battler']&&this[_0x2b6803(0x351)]['isEnemy']())return![];const _0x14a155=VisuMZ[_0x2b6803(0x21a)][_0x2b6803(0x20a)][_0x2b6803(0x22d)];if(!_0x14a155[_0x2b6803(0x1ec)])return![];if(!ConfigManager['aggroGauge'])return![];const _0x437ff9=VisuMZ[_0x2b6803(0x20c)][_0x2b6803(0x20a)][_0x2b6803(0x1b5)];return _0x14a155['Scale']===_0x437ff9[_0x2b6803(0x244)]&&_0x14a155[_0x2b6803(0x196)]===_0x437ff9[_0x2b6803(0x196)]&&_0x14a155['AnchorY']===_0x437ff9[_0x2b6803(0x325)]&&_0x14a155[_0x2b6803(0x2aa)]===_0x437ff9[_0x2b6803(0x2aa)]&&_0x14a155[_0x2b6803(0x34f)]===_0x437ff9['OffsetY']&&!![];},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x1e7)]=Sprite_Battler[_0x31d373(0x1fe)][_0x31d373(0x29b)],Sprite_Battler[_0x31d373(0x1fe)][_0x31d373(0x29b)]=function(){const _0x4386ac=_0x31d373;VisuMZ[_0x4386ac(0x20c)][_0x4386ac(0x1e7)][_0x4386ac(0x33c)](this),!this[_0x4386ac(0x351)]&&this[_0x4386ac(0x2e1)]&&(this[_0x4386ac(0x2e1)][_0x4386ac(0x1da)]=![],this['_svBattlerSprite']&&(this[_0x4386ac(0x363)][_0x4386ac(0x2e1)][_0x4386ac(0x1da)]=![]));},VisuMZ['BattleSystemATB'][_0x31d373(0x2f3)]=Sprite_Actor[_0x31d373(0x1fe)]['createStateSprite'],Sprite_Actor['prototype']['createStateSprite']=function(){const _0x2a4b72=_0x31d373;VisuMZ[_0x2a4b72(0x20c)]['Sprite_Actor_createStateSprite'][_0x2a4b72(0x33c)](this),this[_0x2a4b72(0x2f6)]()&&this[_0x2a4b72(0x374)]();},Sprite_Actor['prototype'][_0x31d373(0x2f6)]=function(){const _0x2d0154=_0x31d373;return VisuMZ[_0x2d0154(0x20c)]['Settings'][_0x2d0154(0x1b5)][_0x2d0154(0x2cb)];},Sprite_SvEnemy[_0x31d373(0x1fe)][_0x31d373(0x2f6)]=function(){const _0x59c59a=_0x31d373;return VisuMZ['BattleSystemATB'][_0x59c59a(0x20a)][_0x59c59a(0x1b5)][_0x59c59a(0x2a6)];},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x1dd)]=Sprite_Enemy[_0x31d373(0x1fe)][_0x31d373(0x2f1)],Sprite_Enemy[_0x31d373(0x1fe)][_0x31d373(0x2f1)]=function(){const _0x24c0ae=_0x31d373;VisuMZ[_0x24c0ae(0x20c)][_0x24c0ae(0x20a)][_0x24c0ae(0x1b5)]['ShowEnemyGauge']&&this[_0x24c0ae(0x374)](),VisuMZ['BattleSystemATB'][_0x24c0ae(0x1dd)]['call'](this);},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x2b1)]=Sprite_Enemy[_0x31d373(0x1fe)][_0x31d373(0x1e4)],Sprite_Enemy[_0x31d373(0x1fe)][_0x31d373(0x1e4)]=function(_0x23983c){const _0x4dbbdf=_0x31d373;VisuMZ[_0x4dbbdf(0x20c)][_0x4dbbdf(0x2b1)][_0x4dbbdf(0x33c)](this,_0x23983c),(_0x23983c===_0x4dbbdf(0x275)||_0x4dbbdf(0x313))&&this[_0x4dbbdf(0x241)]();},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x2e3)]=Game_BattlerBase[_0x31d373(0x1fe)][_0x31d373(0x275)],Game_BattlerBase[_0x31d373(0x1fe)][_0x31d373(0x275)]=function(){const _0x88c430=_0x31d373;VisuMZ[_0x88c430(0x20c)]['Game_BattlerBase_appear']['call'](this),this[_0x88c430(0x1b9)]()&&BattleManager['isATB']()&&this[_0x88c430(0x1c6)]()&&(this[_0x88c430(0x1c6)]()['_fnord']=!![],this[_0x88c430(0x1c6)]()[_0x88c430(0x241)]());},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x1fa)]=Sprite_Gauge['prototype']['gaugeColor1'],Sprite_Gauge[_0x31d373(0x1fe)][_0x31d373(0x353)]=function(){const _0x52b3cb=_0x31d373;if(this[_0x52b3cb(0x2ec)]===_0x52b3cb(0x23e))return this[_0x52b3cb(0x1f2)](0x1);return VisuMZ[_0x52b3cb(0x20c)]['Sprite_Gauge_gaugeColor1'][_0x52b3cb(0x33c)](this);},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x1bf)]=Sprite_Gauge['prototype'][_0x31d373(0x26b)],Sprite_Gauge['prototype'][_0x31d373(0x26b)]=function(){const _0x364170=_0x31d373;if(this[_0x364170(0x2ec)]===_0x364170(0x23e))return this[_0x364170(0x1f2)](0x2);return VisuMZ['BattleSystemATB'][_0x364170(0x1bf)][_0x364170(0x33c)](this);},Sprite_Gauge[_0x31d373(0x1fe)]['atbGaugeColor']=function(_0x50c44d){const _0xeedf53=_0x31d373;if(!this[_0xeedf53(0x351)])return ColorManager[_0xeedf53(0x33f)]('default%1'['format'](_0x50c44d));if(this['_battler'][_0xeedf53(0x1f5)]())return ColorManager[_0xeedf53(0x33f)](_0xeedf53(0x2d9)['format'](_0x50c44d));if(this[_0xeedf53(0x351)][_0xeedf53(0x31f)]())return ColorManager[_0xeedf53(0x33f)]('cast%1'['format'](_0x50c44d));if(this[_0xeedf53(0x279)]()>=0x1)return ColorManager['atbColor'](_0xeedf53(0x225)[_0xeedf53(0x24b)](_0x50c44d));const _0x234126=VisuMZ[_0xeedf53(0x20c)][_0xeedf53(0x20a)][_0xeedf53(0x1b5)],_0x103202=this['_battler']['paramRate'](0x6)*this[_0xeedf53(0x351)]['paramBuffRate'](0x6);if(_0x103202<=_0x234126[_0xeedf53(0x36d)])return ColorManager['atbColor'](_0xeedf53(0x372)[_0xeedf53(0x24b)](_0x50c44d));if(_0x103202>=_0x234126['FastRate'])return ColorManager[_0xeedf53(0x33f)](_0xeedf53(0x282)[_0xeedf53(0x24b)](_0x50c44d));return ColorManager[_0xeedf53(0x33f)]('default%1'[_0xeedf53(0x24b)](_0x50c44d));},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x1bb)]=Sprite_Gauge[_0x31d373(0x1fe)][_0x31d373(0x2bc)],Sprite_Gauge[_0x31d373(0x1fe)]['currentValue']=function(){const _0x3ddca6=_0x31d373;if(this[_0x3ddca6(0x351)]&&this['_statusType']==='time')return this[_0x3ddca6(0x32f)]();return VisuMZ[_0x3ddca6(0x20c)][_0x3ddca6(0x1bb)]['call'](this);},Sprite_Gauge['prototype'][_0x31d373(0x32f)]=function(){const _0x38d118=_0x31d373;return this[_0x38d118(0x351)][_0x38d118(0x31f)]()?Math[_0x38d118(0x1c5)](this[_0x38d118(0x351)][_0x38d118(0x333)],0x0):VisuMZ['BattleSystemATB'][_0x38d118(0x1bb)]['call'](this);},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x35a)]=Sprite_Gauge['prototype'][_0x31d373(0x35f)],Sprite_Gauge[_0x31d373(0x1fe)][_0x31d373(0x35f)]=function(){const _0x8d3b1b=_0x31d373;if(this[_0x8d3b1b(0x351)]&&this[_0x8d3b1b(0x2ec)]==='time')return this[_0x8d3b1b(0x1eb)]();return VisuMZ['BattleSystemATB'][_0x8d3b1b(0x35a)][_0x8d3b1b(0x33c)](this);},Sprite_Gauge[_0x31d373(0x1fe)][_0x31d373(0x1eb)]=function(){const _0x3e88e1=_0x31d373;return this['_battler'][_0x3e88e1(0x31f)]()?Math[_0x3e88e1(0x1c5)](this[_0x3e88e1(0x351)]['tpbRequiredCastTime'](),1e-9):VisuMZ[_0x3e88e1(0x20c)][_0x3e88e1(0x35a)][_0x3e88e1(0x33c)](this);},VisuMZ[_0x31d373(0x20c)]['Window_Help_setItem']=Window_Help[_0x31d373(0x1fe)]['setItem'],Window_Help[_0x31d373(0x1fe)][_0x31d373(0x280)]=function(_0x32f6d6){const _0x15f1b1=_0x31d373;BattleManager[_0x15f1b1(0x30a)]()&&_0x32f6d6&&_0x32f6d6[_0x15f1b1(0x20b)]&&_0x32f6d6[_0x15f1b1(0x20b)][_0x15f1b1(0x25b)](/<(?:ATB|TPB) HELP>\s*([\s\S]*)\s*<\/(?:ATB|TPB) HELP>/i)?this[_0x15f1b1(0x2c1)](String(RegExp['$1'])):VisuMZ[_0x15f1b1(0x20c)]['Window_Help_setItem'][_0x15f1b1(0x33c)](this,_0x32f6d6);},VisuMZ[_0x31d373(0x20c)]['Window_StatusBase_placeGauge']=Window_StatusBase[_0x31d373(0x1fe)][_0x31d373(0x19f)],Window_StatusBase['prototype']['placeGauge']=function(_0x1609df,_0x30a1c7,_0x4538ad,_0x511acd){const _0x5afb8d=_0x31d373;if(!this[_0x5afb8d(0x1a9)](_0x30a1c7))return;VisuMZ[_0x5afb8d(0x20c)]['Window_StatusBase_placeGauge'][_0x5afb8d(0x33c)](this,_0x1609df,_0x30a1c7,_0x4538ad,_0x511acd);},Window_StatusBase[_0x31d373(0x1fe)]['showVisualAtbGauge']=function(_0x15b549){const _0x462446=_0x31d373;if(_0x15b549!==_0x462446(0x23e))return!![];if(![_0x462446(0x371),_0x462446(0x200)][_0x462446(0x21f)](this[_0x462446(0x251)][_0x462446(0x2f4)]))return![];if(!BattleManager[_0x462446(0x30a)]())return![];if(!ConfigManager[_0x462446(0x355)])return![];return VisuMZ[_0x462446(0x20c)][_0x462446(0x20a)][_0x462446(0x1b5)]['ShowStatusGauge'];},VisuMZ[_0x31d373(0x20c)][_0x31d373(0x1ff)]=Window_Options[_0x31d373(0x1fe)][_0x31d373(0x2c4)],Window_Options[_0x31d373(0x1fe)][_0x31d373(0x2c4)]=function(){const _0x3d343d=_0x31d373;VisuMZ['BattleSystemATB']['Window_Options_addGeneralOptions'][_0x3d343d(0x33c)](this),this[_0x3d343d(0x2e9)]();},Window_Options['prototype'][_0x31d373(0x2e9)]=function(){const _0x8edfe=_0x31d373;if(!BattleManager[_0x8edfe(0x30a)]())return;VisuMZ['BattleSystemATB'][_0x8edfe(0x20a)]['Options']['AddOption']&&this['addBattleSystemATBShowGaugeCommand']();},Window_Options[_0x31d373(0x1fe)][_0x31d373(0x27e)]=function(){const _0x3b3c69=_0x31d373,_0x3a5db5=TextManager[_0x3b3c69(0x355)],_0xb02b6d=_0x3b3c69(0x355);this[_0x3b3c69(0x2d6)](_0x3a5db5,_0xb02b6d);},Game_BattlerBase['prototype'][_0x31d373(0x30b)]=function(){const _0x4a00af=_0x31d373;delete this[_0x4a00af(0x24e)],delete this[_0x4a00af(0x1a2)],delete this[_0x4a00af(0x1d6)],delete this[_0x4a00af(0x1d4)];},Game_BattlerBase[_0x31d373(0x1fe)][_0x31d373(0x273)]=function(){const _0x1d0f55=_0x31d373;return this['_fieldAtbGaugeGraphicType']===undefined&&(this['_fieldAtbGaugeGraphicType']=this[_0x1d0f55(0x1bd)]()),this[_0x1d0f55(0x24e)];},Game_BattlerBase['prototype']['createFieldAtbGraphicType']=function(){const _0x5b3fd3=_0x31d373;return Sprite_FieldGaugeATB[_0x5b3fd3(0x20a)][_0x5b3fd3(0x218)];},Game_BattlerBase[_0x31d373(0x1fe)][_0x31d373(0x2a0)]=function(){const _0x5a03e8=_0x31d373;return this['_fieldAtbGaugeFaceName']===undefined&&(this[_0x5a03e8(0x1a2)]=this[_0x5a03e8(0x2c3)]()),this[_0x5a03e8(0x1a2)];},Game_BattlerBase[_0x31d373(0x1fe)][_0x31d373(0x2c3)]=function(){const _0x2c133e=_0x31d373;return Sprite_FieldGaugeATB[_0x2c133e(0x20a)][_0x2c133e(0x345)];},Game_BattlerBase[_0x31d373(0x1fe)][_0x31d373(0x23f)]=function(){const _0x106f77=_0x31d373;return this[_0x106f77(0x1d6)]===undefined&&(this['_fieldAtbGaugeFaceIndex']=this[_0x106f77(0x2b3)]()),this[_0x106f77(0x1d6)];},Game_BattlerBase[_0x31d373(0x1fe)][_0x31d373(0x2b3)]=function(){return Sprite_FieldGaugeATB['Settings']['EnemyBattlerFaceIndex'];},Game_BattlerBase['prototype']['fieldAtbGraphicIconIndex']=function(){const _0x406142=_0x31d373;return this['_fieldAtbGaugeIconIndex']===undefined&&(this[_0x406142(0x1d4)]=this[_0x406142(0x1d9)]()),this['_fieldAtbGaugeIconIndex'];},Game_BattlerBase[_0x31d373(0x1fe)][_0x31d373(0x1d9)]=function(){const _0x3ae17=_0x31d373;return Sprite_FieldGaugeATB[_0x3ae17(0x20a)][_0x3ae17(0x34a)];},Game_BattlerBase[_0x31d373(0x1fe)][_0x31d373(0x2a8)]=function(_0x622b54){this['_fieldAtbGaugeIconIndex']=_0x622b54;},Game_Actor[_0x31d373(0x1fe)][_0x31d373(0x1bd)]=function(){const _0x15a4d1=_0x31d373,_0x19add8=this[_0x15a4d1(0x290)]()[_0x15a4d1(0x20b)];if(_0x19add8[_0x15a4d1(0x25b)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return'face';else{if(_0x19add8[_0x15a4d1(0x25b)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return _0x15a4d1(0x2c9);}return Sprite_FieldGaugeATB['Settings'][_0x15a4d1(0x1b3)];},Game_Actor[_0x31d373(0x1fe)][_0x31d373(0x2c3)]=function(){const _0x4d1949=_0x31d373,_0xab8879=this[_0x4d1949(0x290)]()['note'];if(_0xab8879['match'](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return this[_0x4d1949(0x23a)]();},Game_Actor[_0x31d373(0x1fe)][_0x31d373(0x2b3)]=function(){const _0x548d6a=_0x31d373,_0x3266a6=this[_0x548d6a(0x290)]()[_0x548d6a(0x20b)];if(_0x3266a6[_0x548d6a(0x25b)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return this[_0x548d6a(0x1ea)]();},Game_Actor[_0x31d373(0x1fe)][_0x31d373(0x1d9)]=function(){const _0x22394c=_0x31d373,_0x2125d0=this['actor']()[_0x22394c(0x20b)];if(_0x2125d0['match'](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Sprite_FieldGaugeATB[_0x22394c(0x20a)][_0x22394c(0x301)];},Game_Enemy[_0x31d373(0x1fe)][_0x31d373(0x1bd)]=function(){const _0x5d5563=_0x31d373,_0x89e1bf=this[_0x5d5563(0x318)]()[_0x5d5563(0x20b)];if(_0x89e1bf[_0x5d5563(0x25b)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return'face';else{if(_0x89e1bf[_0x5d5563(0x25b)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return _0x5d5563(0x2c9);}return Sprite_FieldGaugeATB[_0x5d5563(0x20a)][_0x5d5563(0x218)];},Game_Enemy[_0x31d373(0x1fe)]['createFieldAtbGraphicFaceName']=function(){const _0x322997=_0x31d373,_0xaebb08=this[_0x322997(0x318)]()[_0x322997(0x20b)];if(_0xaebb08['match'](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return Sprite_FieldGaugeATB[_0x322997(0x20a)]['EnemyBattlerFaceName'];},Game_Enemy[_0x31d373(0x1fe)]['createFieldAtbGraphicFaceIndex']=function(){const _0x3947c5=_0x31d373,_0x19b70d=this[_0x3947c5(0x318)]()['note'];if(_0x19b70d[_0x3947c5(0x25b)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return Sprite_FieldGaugeATB['Settings']['EnemyBattlerFaceIndex'];},Game_Enemy[_0x31d373(0x1fe)][_0x31d373(0x1d9)]=function(){const _0x2526f0=_0x31d373,_0x31cc7a=this[_0x2526f0(0x318)]()[_0x2526f0(0x20b)];if(_0x31cc7a[_0x2526f0(0x25b)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Sprite_FieldGaugeATB['Settings'][_0x2526f0(0x34a)];},VisuMZ['BattleSystemATB'][_0x31d373(0x1c4)]=Scene_Battle[_0x31d373(0x1fe)]['createAllWindows'],Scene_Battle[_0x31d373(0x1fe)][_0x31d373(0x357)]=function(){const _0x16e457=_0x31d373;this[_0x16e457(0x25e)](),VisuMZ[_0x16e457(0x20c)]['Scene_Battle_createAllWindows'][_0x16e457(0x33c)](this),this['createFieldGaugeSpriteATB']();},Scene_Battle[_0x31d373(0x1fe)][_0x31d373(0x25e)]=function(){const _0x11badf=_0x31d373;if(!BattleManager[_0x11badf(0x30a)]())return;if(!Sprite_FieldGaugeATB[_0x11badf(0x20a)][_0x11badf(0x285)])return;if(!ConfigManager[_0x11badf(0x355)])return;this[_0x11badf(0x215)]=new Window_Base(new Rectangle(0x0,0x0,0x0,0x0));const _0x3590a3=this[_0x11badf(0x2b5)](this['_windowLayer']);this['addChildAt'](this[_0x11badf(0x215)],_0x3590a3);},Scene_Battle[_0x31d373(0x1fe)][_0x31d373(0x204)]=function(){const _0x2a48ed=_0x31d373;if(!BattleManager[_0x2a48ed(0x30a)]())return;if(!Sprite_FieldGaugeATB[_0x2a48ed(0x20a)]['UseFieldGauge'])return;if(!ConfigManager[_0x2a48ed(0x355)])return;this[_0x2a48ed(0x2ed)]=new Sprite_FieldGaugeATB(),this[_0x2a48ed(0x215)][_0x2a48ed(0x1d7)](this['_fieldGaugeATB']);};function Sprite_FieldGaugeATB(){this['initialize'](...arguments);}Sprite_FieldGaugeATB['prototype']=Object[_0x31d373(0x248)](Sprite['prototype']),Sprite_FieldGaugeATB[_0x31d373(0x1fe)][_0x31d373(0x251)]=Sprite_FieldGaugeATB,Sprite_FieldGaugeATB[_0x31d373(0x20a)]=JsonEx['makeDeepCopy'](VisuMZ[_0x31d373(0x20c)][_0x31d373(0x20a)][_0x31d373(0x309)]),Sprite_FieldGaugeATB[_0x31d373(0x1fe)]['initialize']=function(){const _0x3c4cfc=_0x31d373;Sprite[_0x3c4cfc(0x1fe)][_0x3c4cfc(0x252)][_0x3c4cfc(0x33c)](this),this[_0x3c4cfc(0x2ad)](),this[_0x3c4cfc(0x221)](),this[_0x3c4cfc(0x36b)]();},Sprite_FieldGaugeATB[_0x31d373(0x1fe)][_0x31d373(0x2ad)]=function(){const _0xf574d1=_0x31d373;this[_0xf574d1(0x36f)]['x']=0.5,this[_0xf574d1(0x36f)]['y']=0.5;},Sprite_FieldGaugeATB[_0x31d373(0x1fe)][_0x31d373(0x276)]=function(){const _0x3b84dc=_0x31d373;if(this['_horz']!==undefined)return this[_0x3b84dc(0x2c7)];const _0x16d11e=Sprite_FieldGaugeATB[_0x3b84dc(0x20a)][_0x3b84dc(0x262)];return this[_0x3b84dc(0x2c7)]=['top','bottom'][_0x3b84dc(0x21f)](_0x16d11e),this[_0x3b84dc(0x2c7)];},Sprite_FieldGaugeATB[_0x31d373(0x1fe)][_0x31d373(0x221)]=function(){const _0x5eb7f8=_0x31d373,_0x2ed0c3=Sprite_FieldGaugeATB[_0x5eb7f8(0x20a)][_0x5eb7f8(0x262)][_0x5eb7f8(0x31d)]()[_0x5eb7f8(0x28f)](),_0x2094e7=Window_Base['prototype'][_0x5eb7f8(0x1e8)](),_0x54c320=SceneManager[_0x5eb7f8(0x2d3)]['_statusWindow']['height']+Math[_0x5eb7f8(0x32a)](_0x2094e7*0.5);this['_homeX']=0x0,this[_0x5eb7f8(0x316)]=0x0;switch(_0x2ed0c3){case _0x5eb7f8(0x224):this['_homeX']=Math[_0x5eb7f8(0x32a)](Graphics[_0x5eb7f8(0x1ad)]*0.5),this[_0x5eb7f8(0x316)]=0x60;break;case _0x5eb7f8(0x250):this[_0x5eb7f8(0x1e3)]=Math['round'](Graphics[_0x5eb7f8(0x1ad)]*0.5),this['_homeY']=Graphics[_0x5eb7f8(0x28b)]-_0x54c320;break;case _0x5eb7f8(0x2db):this[_0x5eb7f8(0x1e3)]=0x50,this[_0x5eb7f8(0x316)]=Math[_0x5eb7f8(0x32a)]((Graphics[_0x5eb7f8(0x28b)]-_0x54c320)/0x2);break;case _0x5eb7f8(0x334):this[_0x5eb7f8(0x1e3)]=Graphics[_0x5eb7f8(0x1ad)]-0x50,this[_0x5eb7f8(0x316)]=Math[_0x5eb7f8(0x32a)]((Graphics['boxHeight']-_0x54c320)/0x2);break;}this['_homeX']+=Sprite_FieldGaugeATB[_0x5eb7f8(0x20a)][_0x5eb7f8(0x1a1)]||0x0,this[_0x5eb7f8(0x316)]+=Sprite_FieldGaugeATB[_0x5eb7f8(0x20a)][_0x5eb7f8(0x2a3)]||0x0,this['x']=this[_0x5eb7f8(0x1e3)],this['y']=this[_0x5eb7f8(0x316)];},Sprite_FieldGaugeATB[_0x31d373(0x1fe)]['createChildren']=function(){const _0x5bdce7=_0x31d373;this[_0x5bdce7(0x27a)](),this[_0x5bdce7(0x2fc)](),this[_0x5bdce7(0x2fa)]();},Sprite_FieldGaugeATB['prototype'][_0x31d373(0x27a)]=function(){const _0x24890a=_0x31d373;this[_0x24890a(0x291)]=new Sprite(),this[_0x24890a(0x291)][_0x24890a(0x36f)]['x']=0.5,this['_skinSprite'][_0x24890a(0x36f)]['y']=0.5,this[_0x24890a(0x1d7)](this['_skinSprite']);const _0x4fb214=Sprite_FieldGaugeATB[_0x24890a(0x20a)]['GaugeSystemSkin'];if(_0x4fb214)this[_0x24890a(0x291)][_0x24890a(0x349)]=ImageManager['loadSystem'](_0x4fb214);},Sprite_FieldGaugeATB[_0x31d373(0x1fe)][_0x31d373(0x2fc)]=function(){const _0x15c1a4=_0x31d373;this['_gaugeSprite']=new Sprite(),this[_0x15c1a4(0x1d7)](this[_0x15c1a4(0x2c0)]),this['createGaugeBitmap']();},Sprite_FieldGaugeATB[_0x31d373(0x1fe)][_0x31d373(0x1b7)]=function(){const _0xf35ebd=_0x31d373,_0x4ca439=Sprite_FieldGaugeATB[_0xf35ebd(0x20a)],_0x1649db=this[_0xf35ebd(0x276)](),_0x25fbe9=_0x1649db?_0x4ca439['GaugeLengthHorz']:_0x4ca439[_0xf35ebd(0x270)],_0x3b524e=_0x1649db?_0x4ca439[_0xf35ebd(0x270)]:_0x4ca439[_0xf35ebd(0x284)];this['_gaugeSprite'][_0xf35ebd(0x349)]=new Bitmap(_0x25fbe9,_0x3b524e),this[_0xf35ebd(0x235)](),this['_gaugeSprite']['x']=Math[_0xf35ebd(0x1a3)](_0x25fbe9/-0x2),this['_gaugeSprite']['y']=Math[_0xf35ebd(0x1a3)](_0x3b524e/-0x2);},Sprite_FieldGaugeATB[_0x31d373(0x1fe)][_0x31d373(0x235)]=function(){const _0x548689=_0x31d373;if(!Sprite_FieldGaugeATB[_0x548689(0x20a)][_0x548689(0x2ae)])return;const _0xb0dbd5=Sprite_FieldGaugeATB['Settings'],_0x255f4b=this[_0x548689(0x2c0)][_0x548689(0x349)],_0x44e692=_0x255f4b[_0x548689(0x32e)],_0x29ddde=_0x255f4b[_0x548689(0x23c)],_0x163dba=ColorManager[_0x548689(0x308)](),_0x3e954c=ColorManager[_0x548689(0x29c)](),_0x14b0e1=ColorManager[_0x548689(0x254)](),_0x57a19f=ColorManager['atbColor'](_0x548689(0x2d2)),_0xcf4d14=ColorManager[_0x548689(0x33f)](_0x548689(0x214)),_0x5d319d=this[_0x548689(0x276)](),_0x401c33=_0xb0dbd5[_0x548689(0x2e5)],_0x241eb1=_0xb0dbd5['GaugeSplit']['clamp'](0x0,0x1),_0x59d1b6=Math[_0x548689(0x1a3)](((_0x5d319d?_0x44e692:_0x29ddde)-0x2)*_0x241eb1);_0x255f4b[_0x548689(0x24d)](0x0,0x0,_0x44e692,_0x29ddde,_0x163dba);let _0x536067=0x0,_0x17ee9d=0x0,_0x24be35=0x0,_0x17ac50=0x0;if(_0x5d319d&&_0x401c33)_0x536067=_0x59d1b6-0x1,_0x24be35=_0x44e692-0x3-_0x536067,_0x255f4b[_0x548689(0x2f5)](0x1,0x1,_0x536067,_0x29ddde-0x2,_0x3e954c,_0x14b0e1,![]),_0x255f4b[_0x548689(0x2f5)](0x2+_0x536067,0x1,_0x24be35,_0x29ddde-0x2,_0x57a19f,_0xcf4d14,![]);else{if(_0x5d319d&&!_0x401c33)_0x536067=_0x59d1b6-0x1,_0x24be35=_0x44e692-0x3-_0x536067,_0x255f4b[_0x548689(0x2f5)](0x2+_0x24be35,0x1,_0x536067,_0x29ddde-0x2,_0x3e954c,_0x14b0e1,![]),_0x255f4b[_0x548689(0x2f5)](0x1,0x1,_0x24be35,_0x29ddde-0x2,_0x57a19f,_0xcf4d14,![]);else{if(!_0x5d319d&&_0x401c33)_0x17ee9d=_0x59d1b6-0x1,_0x17ac50=_0x29ddde-0x3-_0x17ee9d,_0x255f4b['gradientFillRect'](0x1,0x1,_0x44e692-0x2,_0x17ee9d,_0x3e954c,_0x14b0e1,!![]),_0x255f4b[_0x548689(0x2f5)](0x1,0x2+_0x17ee9d,_0x44e692-0x2,_0x17ac50,_0x57a19f,_0xcf4d14,!![]);else!_0x5d319d&&!_0x401c33&&(_0x17ee9d=_0x59d1b6-0x1,_0x17ac50=_0x29ddde-0x3-_0x17ee9d,_0x255f4b[_0x548689(0x2f5)](0x1,0x2+_0x17ac50,_0x44e692-0x2,_0x17ee9d,_0x3e954c,_0x14b0e1,!![]),_0x255f4b[_0x548689(0x2f5)](0x1,0x1,_0x44e692-0x2,_0x17ac50,_0x57a19f,_0xcf4d14,!![]));}}},Sprite_FieldGaugeATB[_0x31d373(0x1fe)][_0x31d373(0x2fa)]=function(){const _0x363a17=_0x31d373;this[_0x363a17(0x25d)]&&this[_0x363a17(0x2c0)][_0x363a17(0x1be)](this['_battlerContainer']),this[_0x363a17(0x25d)]=new Sprite(),this[_0x363a17(0x2c0)][_0x363a17(0x1d7)](this[_0x363a17(0x25d)]),this[_0x363a17(0x370)]();},Sprite_FieldGaugeATB[_0x31d373(0x1fe)][_0x31d373(0x370)]=function(){const _0x12e766=_0x31d373;this[_0x12e766(0x2f9)](),this['createActorSprites']();},Sprite_FieldGaugeATB[_0x31d373(0x1fe)]['createEnemySprites']=function(){const _0x4e1710=_0x31d373,_0x282140=$gameTroop[_0x4e1710(0x298)](),_0x1e2b3a=_0x282140[_0x4e1710(0x1df)];for(let _0x26c9d0=0x0;_0x26c9d0<_0x1e2b3a;_0x26c9d0++){this[_0x4e1710(0x1ac)](_0x26c9d0,$gameTroop);}},Sprite_FieldGaugeATB[_0x31d373(0x1fe)][_0x31d373(0x2d8)]=function(){const _0x1b5d45=_0x31d373,_0x317b6e=$gameParty[_0x1b5d45(0x197)]();for(let _0x327d34=0x0;_0x327d34<_0x317b6e;_0x327d34++){this[_0x1b5d45(0x1ac)](_0x327d34,$gameParty);}},Sprite_FieldGaugeATB[_0x31d373(0x1fe)]['createBattlerSprite']=function(_0x436dc3,_0x532986){const _0x15c4d2=_0x31d373,_0x5c21e2=new Sprite_FieldMarkerATB(_0x436dc3,_0x532986,this['_gaugeSprite']);this[_0x15c4d2(0x25d)][_0x15c4d2(0x1d7)](_0x5c21e2);},Sprite_FieldGaugeATB[_0x31d373(0x1fe)][_0x31d373(0x29b)]=function(){const _0x1a3cd1=_0x31d373;Sprite[_0x1a3cd1(0x1fe)][_0x1a3cd1(0x29b)][_0x1a3cd1(0x33c)](this),this[_0x1a3cd1(0x2b9)](),this[_0x1a3cd1(0x230)](),this[_0x1a3cd1(0x2b7)]();},Sprite_FieldGaugeATB['prototype'][_0x31d373(0x2b9)]=function(){const _0x66d9f7=_0x31d373,_0x27cebf=Sprite_FieldGaugeATB[_0x66d9f7(0x20a)];if(_0x27cebf[_0x66d9f7(0x262)]!==_0x66d9f7(0x224))return;if(!_0x27cebf[_0x66d9f7(0x366)])return;const _0x56d38b=SceneManager[_0x66d9f7(0x2d3)][_0x66d9f7(0x1b6)];if(!_0x56d38b)return;_0x56d38b['visible']?(this['x']=this[_0x66d9f7(0x1e3)]+(_0x27cebf[_0x66d9f7(0x367)]||0x0),this['y']=this[_0x66d9f7(0x316)]+(_0x27cebf['RepositionTopHelpY']||0x0)):(this['x']=this[_0x66d9f7(0x1e3)],this['y']=this[_0x66d9f7(0x316)]);const _0x3b8b5e=SceneManager['_scene']['_windowLayer'];this['x']+=_0x3b8b5e['x'],this['y']+=_0x3b8b5e['y'];},Sprite_FieldGaugeATB[_0x31d373(0x1fe)][_0x31d373(0x230)]=function(){const _0x193cc6=_0x31d373;if(!this[_0x193cc6(0x25d)])return;const _0x1eaccd=this[_0x193cc6(0x25d)][_0x193cc6(0x231)];if(!_0x1eaccd)return;_0x1eaccd[_0x193cc6(0x1cf)](this[_0x193cc6(0x20e)][_0x193cc6(0x2ff)](this));},Sprite_FieldGaugeATB[_0x31d373(0x1fe)][_0x31d373(0x20e)]=function(_0x5434e5,_0x92af36){const _0x483d21=_0x31d373,_0x1e9839=this['isGaugeHorizontal'](),_0x1a58da=Sprite_FieldGaugeATB[_0x483d21(0x20a)][_0x483d21(0x2e5)];if(_0x1e9839&&_0x1a58da)return _0x5434e5['x']-_0x92af36['x'];else{if(_0x1e9839&&!_0x1a58da)return _0x92af36['x']-_0x5434e5['x'];else{if(!_0x1e9839&&_0x1a58da)return _0x5434e5['y']-_0x92af36['y'];else{if(!_0x1e9839&&!_0x1a58da)return _0x92af36['y']-_0x5434e5['y'];}}}},Sprite_FieldGaugeATB['prototype'][_0x31d373(0x2b7)]=function(){const _0x4330f5=_0x31d373;this['visible']=$gameSystem[_0x4330f5(0x203)]();};function Sprite_FieldMarkerATB(){const _0x58a97b=_0x31d373;this[_0x58a97b(0x252)](...arguments);}function _0x2741(){const _0x189c1c=['createFieldGaugeSkin','processUpdateGraphic','tpbAcceleration','%1BgColor2','addBattleSystemATBShowGaugeCommand','setupArrowSprite','setItem','EnemyBattlerDrawLetter','fast%1','_arrowSprite','GaugeLengthVert','UseFieldGauge','_originalSpeed','mainFontFace','ready','ConfigManager_makeData','revive','boxHeight','blt','Game_Battler_tpbRequiredCastTime','setFrame','trim','actor','_skinSprite','applyATBPenalty','traitObjects','skills','concat','svBattlerName','isStateAffected','members','FaceName','Game_Battler_tpbRelativeSpeed','update','ctGaugeColor1','checkAggroControlSystemOffsetYAdjustment','svActorHorzCells','cast','fieldAtbGraphicFaceName','IconIndex','JSON','DisplayOffsetY','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20keyType\x20=\x20\x27%2\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20rate\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(keyType\x20===\x20\x27Charge\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20target._tpbChargeTime;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20if\x20(keyType\x20===\x20\x27Cast\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20target._tpbCastTime\x20/\x20Math.max(target.tpbRequiredCastTime(),\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20originalValue\x20=\x20rate;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20NaN\x20Check\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(isNaN(rate)){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27NaN\x20rate\x20created\x20by\x20%2\x27.format(\x27\x27,obj.name));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27Restoring\x20rate\x20to\x20%2\x27.format(\x27\x27,originalValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20originalValue;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Value\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20rate;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','_subject','ShowEnemyGauge','Sprite_Battler_setBattler','setAtbGraphicIconIndex','canMakeTpbActionsAtStartTpbTurn','OffsetX','Scene_Options_maxCommands','Scene_Boot_onDatabaseLoaded','initMembers','DrawGauge','parameters','Game_Battler_tpbAcceleration','Sprite_Enemy_startEffect','Game_Battler_tpbSpeed','createFieldAtbGraphicFaceIndex','<JS\x20%2\x20%1\x20%3>\x5cs*([\x5cs\x5cS]*)\x5cs*<\x5c/JS\x20%2\x20%1\x20%3>','getChildIndex','Game_Battler_onRestrict','updateVisibility','#%1','updatePosition','item','FieldGaugeActorIcon','currentValue','changeIconGraphicBitmap','battleUIOffsetY','face','_gaugeSprite','setText','isHidden','createFieldAtbGraphicFaceName','addGeneralOptions','ARRAYEVAL','setAtbAfterSpeed','_horz','filter','icon','6hoqWGv','ShowActorGauge','Actors','ParseSkillNotetags','Mechanics','initBattleSystemATB','applyTpbPenalty','changeEnemyGraphicBitmap','cast1','_scene','iconWidth','Game_System_initialize','addCommand','requestFauxAnimation','createActorSprites','stop%1','VisuMZ_2_AggroControlSystem','left','faceHeight','createArrowSprite','applyItemBattleSystemATBUserEffect','12dlGBGd','_backgroundSprite','_atbGaugeSprite','Charge','Game_BattlerBase_appear','casting','GaugeDirection','AdjustRect','isTpbCharged','currentAction','addBattleSystemATBCommands','Game_Battler_startTpbCasting','ShowMarkerBg','_statusType','_fieldGaugeATB','process_VisuMZ_BattleSystemATB_JS_Notetags','onDatabaseLoaded','Visible','createStateIconSprite','FaceIndex','Sprite_Actor_createStateSprite','name','gradientFillRect','isShowAtbGauge','Game_BattlerBase_revive','EnemyBattlerFontFace','createEnemySprites','createBattlerContainer','subject','createGaugeSprite','loadSystem','PostStartTurnJS','bind','floor','ActorBattlerIcon','_graphicIconIndex','updateTpb','isAppeared','loadSvActor','clearTpbChargeTime','setup','gaugeBackColor','FieldGauge','isATB','clearFieldAtbGraphics','_atbFieldGaugeVisible','createBackgroundSprite','tpbSpeed','_letterSprite','NUM','registerCommand','allBattleMembers','disappear','reduce','initTpbChargeTime','_homeY','Game_Action_applyItemUserEffect','enemy','Options','makeActions','%1SystemBorder','_tpbIdleTime','toLowerCase','%1Side','isAtbCastingState','Game_Battler_removeState','Enemy','loadWindowskin','isActor','isAttack','AnchorY','isActiveTpb','_tpbTurnCount','VisuMZ_0_CoreEngine','targetPositionOnGauge','round','MarkerArrowWindowSkin','BattlerRelativeSpeedJS','setupBattleSystemATBColors','width','atbCurrentValue','ParseItemNotetags','updateSelectionEffect','changeAtbChargeTime','_tpbCastTime','right','_plural','_graphicEnemy','Game_BattlerBase_die','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Enemy-%1-%2','updatePositionOffset','min','call','AddOption','speed','atbColor','InterruptMirror','fieldAtbGraphicIconIndex','exit','updateAtbGaugeSpritePosition','Game_Battler_initTpbChargeTime','EnemyBattlerFaceName','VisuMZ_1_BattleCore','5888800ZDnJSk','opacity','bitmap','EnemyBattlerIcon','_graphicSv','Game_Action_applyGlobal','Game_Battler_tpbBaseSpeed','applyData','OffsetY','_windowskin','_battler','ARRAYSTR','gaugeColor1','tpbBaseSpeed','visualAtbGauge','InterruptText','createAllWindows','atbAcceleration','clearActions','Sprite_Gauge_currentMaxValue','38471316hOCIYE','_index','removeState','5354334ZrrPMw','currentMaxValue','Game_Battler_applyTpbPenalty','Parse_Notetags_CreateJS','FieldGaugeClearEnemyGraphic','_svBattlerSprite','isCTB','createGraphicSprite','RepositionTopForHelp','RepositionTopHelpX','full','die','loadEnemy','createChildren','makeTpbActions','SlowRate','createJS','anchor','createBattlerSprites','Window_BattleStatus','slow%1','attackSpeed','createAtbGaugeSprite','map','6736740MKoYGN','AnchorX','maxBattleMembers','setBattler','BattleManager_endBattlerActions','Game_Battler_clearTpbChargeTime','acting','Enemies','parse','4240XLLrrX','placeGauge','SystemFieldGaugeVisibility','DisplayOffsetX','_fieldAtbGaugeFaceName','ceil','clamp','8204DvBxCE','_tpbState','%1SystemBg','MarkerSize','showVisualAtbGauge','updateMain','abs','createBattlerSprite','boxWidth','getAtbCastTimeRate','Actor','battlerName','changeSvActorGraphicBitmap','charging','ActorBattlerType','ParseAllNotetags','Gauge','_helpWindow','createGaugeBitmap','initTpbChargeTimeATB','isEnemy','StunsResetGauge','Sprite_Gauge_currentValue','_graphicFaceName','createFieldAtbGraphicType','removeChild','Sprite_Gauge_gaugeColor2','After','VisuMZ_2_BattleSystemCTB','setAtbChargeTime','EVAL','Scene_Battle_createAllWindows','max','battler','getStateTooltipBattler','ConfigManager_applyData','(?:ATB|TPB)','applyGlobalBattleSystemATBEffects','OpacityRate','BattleManager_isActiveTpb','applyItemUserEffect','isAlive','sort','startTpbTurn','_needsAtbClear','processBattleCoreJS','1549094tjmIEx','_fieldAtbGaugeIconIndex','_graphicHue','_fieldAtbGaugeFaceIndex','addChild','_unit','createFieldAtbGraphicIconIndex','visible','isAtbChargingState','PreStartTurnJS','Sprite_Enemy_createStateIconSprite','isSceneBattle','length','%1BgColor1','FUNC','iconHeight','_homeX','startEffect','Cast','setHue','Sprite_Battler_update','lineHeight','maxCommands','faceIndex','atbCurrentMaxValue','VisibleGauge','Sprite_Battler_updateMain','ColorManager_loadWindowskin','_forcing','canMove','Actor-%1-%2','atbGaugeColor','MarkerOffset','BorderThickness','atbStopped','fontFace','FieldGaugeEnemyFace','ShowMarkerBorder','onAtbInterrupt','Sprite_Gauge_gaugeColor1','targetOpacity','textColor','Game_Actor_clearActions','prototype','Window_Options_addGeneralOptions','Window_SideviewUiBattleStatus','1mhWwdy','11tgAaSB','isBattleSystemATBFieldGaugeVisible','createFieldGaugeSpriteATB','numActions','mainSprite','InterruptFlashColor','faceWidth','_letter','Settings','note','BattleSystemATB','loadFace','compareBattlerSprites','TpbBaseSpeedCalcJS','_tpbTurnEnd','default','_atbAfterSpeed','createLetterSprite','cast2','_fieldGaugeATB_Container','undecided','isTpb','EnemyBattlerType','battlerHue','AggroControlSystem','svActorVertCells','battleMembers','clear','_tpbChargeTime','includes','description','setHomeLocation','_atbColors','InterruptTextColor','top','full%1','_actions','isSideView','createKeyJS','ARRAYSTRUCT','applyBattleSystemATBUserEffect','updatePositionOnGauge','%1BorderColor','Aggro','setBlendColor','endBattlerActions','updateBattleContainerOrder','children','tpbRelativeSpeed','State-%1-%2','isDead','drawGaugeBitmap','changeFaceGraphicBitmap','svBattlerData','atbActive','process_VisuMZ_BattleSystemATB_CreateRegExp','faceName','updateGraphicHue','height','InterruptAnimationID','time','fieldAtbGraphicFaceIndex','clearRect','updateAtbGaugeSpriteVisibility','Skill-%1-%2','Game_Unit_updateTpb','Scale','hasSvBattler','startTpbCasting','InterruptMute','create','fast','setAtbCastTime','format','setupAtbGaugeSprite','fillRect','_fieldAtbGaugeGraphicType','ConvertParams','bottom','constructor','initialize','925468PkVnKd','ctGaugeColor2','scale','setBattleSystemATBFieldGaugeVisible','getColor','10okDheT','#000000','battleUIOffsetX','match','stop','_battlerContainer','createFieldGaugeContainerATB','makeData','applyGlobal','EnemyBattlerFontSize','DisplayPosition','_onRestrictBypassAtbReset','toUpperCase','addLoadListener','_graphicSprite','updateGraphic','createBorderSprite','atbSpeed','slow','gaugeColor2','svactor','_graphicType','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','TpbAccelerationJS','GaugeThick','return\x200','setActionState','fieldAtbGraphicType','TpbCastTimeJS','appear','isGaugeHorizontal','_blendColor','tpbRequiredCastTime','gaugeRate'];_0x2741=function(){return _0x189c1c;};return _0x2741();}Sprite_FieldMarkerATB['prototype']=Object[_0x31d373(0x248)](Sprite_Clickable['prototype']),Sprite_FieldMarkerATB[_0x31d373(0x1fe)][_0x31d373(0x251)]=Sprite_FieldMarkerATB,Sprite_FieldMarkerATB[_0x31d373(0x1fe)]['initialize']=function(_0x390a37,_0x3818bc,_0x2b6896){const _0x38d58f=_0x31d373;this[_0x38d58f(0x35c)]=_0x390a37,this['_unit']=_0x3818bc,this[_0x38d58f(0x2c0)]=_0x2b6896,Sprite_Clickable[_0x38d58f(0x1fe)]['initialize'][_0x38d58f(0x33c)](this),this[_0x38d58f(0x2ad)](),this[_0x38d58f(0x36b)](),this[_0x38d58f(0x348)]=this[_0x38d58f(0x1fb)]();},Sprite_FieldMarkerATB['prototype'][_0x31d373(0x2ad)]=function(){const _0xe4cef5=_0x31d373;this['anchor']['x']=0.5,this[_0xe4cef5(0x36f)]['y']=0.5;},Sprite_FieldMarkerATB['prototype'][_0x31d373(0x36b)]=function(){const _0x3d94b2=_0x31d373;this['createBackgroundSprite'](),this[_0x3d94b2(0x365)](),this[_0x3d94b2(0x268)](),this[_0x3d94b2(0x213)](),this[_0x3d94b2(0x2dd)](),this['updatePositionOnGauge'](!![]);},Sprite_FieldMarkerATB[_0x31d373(0x1fe)][_0x31d373(0x30d)]=function(){const _0x1abcdd=_0x31d373;if(!Sprite_FieldGaugeATB[_0x1abcdd(0x20a)][_0x1abcdd(0x2eb)])return;const _0x8b3f2a=Sprite_FieldGaugeATB[_0x1abcdd(0x20a)],_0x3b1f9e=this[_0x1abcdd(0x1d8)]===$gameParty?'Actor':_0x1abcdd(0x321),_0x42fc54=_0x1abcdd(0x1a7)[_0x1abcdd(0x24b)](_0x3b1f9e),_0x2e32b6=new Sprite();_0x2e32b6[_0x1abcdd(0x36f)]['x']=this[_0x1abcdd(0x36f)]['x'],_0x2e32b6[_0x1abcdd(0x36f)]['y']=this[_0x1abcdd(0x36f)]['y'];if(_0x8b3f2a[_0x42fc54])_0x2e32b6[_0x1abcdd(0x349)]=ImageManager[_0x1abcdd(0x2fd)](_0x8b3f2a[_0x42fc54]);else{const _0x2b4ee6=_0x8b3f2a[_0x1abcdd(0x1a8)];_0x2e32b6[_0x1abcdd(0x349)]=new Bitmap(_0x2b4ee6,_0x2b4ee6);const _0x29b416=ColorManager[_0x1abcdd(0x257)](_0x8b3f2a[_0x1abcdd(0x1e0)['format'](_0x3b1f9e)]),_0x241f73=ColorManager[_0x1abcdd(0x257)](_0x8b3f2a[_0x1abcdd(0x27d)[_0x1abcdd(0x24b)](_0x3b1f9e)]);_0x2e32b6[_0x1abcdd(0x349)]['gradientFillRect'](0x0,0x0,_0x2b4ee6,_0x2b4ee6,_0x29b416,_0x241f73,!![]);}this[_0x1abcdd(0x2e0)]=_0x2e32b6,this[_0x1abcdd(0x1d7)](this['_backgroundSprite']),this[_0x1abcdd(0x32e)]=this[_0x1abcdd(0x2e0)][_0x1abcdd(0x32e)],this['height']=this[_0x1abcdd(0x2e0)]['height'];},Sprite_FieldMarkerATB[_0x31d373(0x1fe)]['createGraphicSprite']=function(){const _0x37b136=_0x31d373,_0x59ccb5=new Sprite();_0x59ccb5[_0x37b136(0x36f)]['x']=this[_0x37b136(0x36f)]['x'],_0x59ccb5[_0x37b136(0x36f)]['y']=this[_0x37b136(0x36f)]['y'],this['_graphicSprite']=_0x59ccb5,this[_0x37b136(0x1d7)](this['_graphicSprite']),this[_0x37b136(0x27b)]();},Sprite_FieldMarkerATB['prototype'][_0x31d373(0x268)]=function(){const _0x7bebd3=_0x31d373;if(!Sprite_FieldGaugeATB[_0x7bebd3(0x20a)][_0x7bebd3(0x1f8)])return;const _0x30f4df=Sprite_FieldGaugeATB[_0x7bebd3(0x20a)],_0x1ab3d5=this[_0x7bebd3(0x1d8)]===$gameParty?_0x7bebd3(0x1af):_0x7bebd3(0x321),_0xaa9e71=_0x7bebd3(0x31b)[_0x7bebd3(0x24b)](_0x1ab3d5),_0x1b0847=new Sprite();_0x1b0847['anchor']['x']=this[_0x7bebd3(0x36f)]['x'],_0x1b0847[_0x7bebd3(0x36f)]['y']=this[_0x7bebd3(0x36f)]['y'];if(_0x30f4df[_0xaa9e71])_0x1b0847['bitmap']=ImageManager[_0x7bebd3(0x2fd)](_0x30f4df[_0xaa9e71]);else{let _0x3b7cc5=_0x30f4df[_0x7bebd3(0x1a8)],_0x38d463=_0x30f4df[_0x7bebd3(0x1f4)];_0x1b0847['bitmap']=new Bitmap(_0x3b7cc5,_0x3b7cc5);const _0x3d2633=_0x7bebd3(0x259),_0x433812=ColorManager[_0x7bebd3(0x257)](_0x30f4df[_0x7bebd3(0x22c)[_0x7bebd3(0x24b)](_0x1ab3d5)]);_0x1b0847[_0x7bebd3(0x349)][_0x7bebd3(0x24d)](0x0,0x0,_0x3b7cc5,_0x3b7cc5,_0x3d2633),_0x3b7cc5-=0x2,_0x1b0847[_0x7bebd3(0x349)][_0x7bebd3(0x24d)](0x1,0x1,_0x3b7cc5,_0x3b7cc5,_0x433812),_0x3b7cc5-=_0x38d463*0x2,_0x1b0847['bitmap'][_0x7bebd3(0x24d)](0x1+_0x38d463,0x1+_0x38d463,_0x3b7cc5,_0x3b7cc5,_0x3d2633),_0x3b7cc5-=0x2,_0x38d463+=0x1,_0x1b0847[_0x7bebd3(0x349)][_0x7bebd3(0x240)](0x1+_0x38d463,0x1+_0x38d463,_0x3b7cc5,_0x3b7cc5);}this[_0x7bebd3(0x2e0)]=_0x1b0847,this[_0x7bebd3(0x1d7)](this[_0x7bebd3(0x2e0)]);},Sprite_FieldMarkerATB[_0x31d373(0x1fe)][_0x31d373(0x213)]=function(){const _0x26acac=_0x31d373,_0x31213c=Sprite_FieldGaugeATB['Settings'];if(!_0x31213c[_0x26acac(0x281)])return;if(this[_0x26acac(0x1d8)]===$gameParty)return;const _0x1a3eb2=_0x31213c[_0x26acac(0x1a8)],_0x52e80f=new Sprite();_0x52e80f[_0x26acac(0x36f)]['x']=this['anchor']['x'],_0x52e80f[_0x26acac(0x36f)]['y']=this[_0x26acac(0x36f)]['y'],_0x52e80f['bitmap']=new Bitmap(_0x1a3eb2,_0x1a3eb2),this[_0x26acac(0x30f)]=_0x52e80f,this['addChild'](this[_0x26acac(0x30f)]);},Sprite_FieldMarkerATB[_0x31d373(0x1fe)]['createArrowSprite']=function(){const _0x46c717=_0x31d373,_0x40f884=Sprite_FieldGaugeATB[_0x46c717(0x20a)];if(!_0x40f884['ShowMarkerArrow'])return;const _0x5ea936=new Sprite();_0x5ea936['anchor']['x']=this[_0x46c717(0x36f)]['x'],_0x5ea936[_0x46c717(0x36f)]['y']=this[_0x46c717(0x36f)]['y'],this[_0x46c717(0x27f)](_0x5ea936),this[_0x46c717(0x283)]=_0x5ea936,this[_0x46c717(0x1d7)](this[_0x46c717(0x283)]);},Sprite_FieldMarkerATB[_0x31d373(0x1fe)]['setupArrowSprite']=function(_0x385403){const _0x490fa6=_0x31d373,_0x45da52=Sprite_FieldGaugeATB['Settings'],_0x100f51=_0x45da52[_0x490fa6(0x1a8)],_0x245740=Math[_0x490fa6(0x32a)](_0x100f51/0x2),_0x55cf82=this[_0x490fa6(0x276)](),_0x4a4262=this[_0x490fa6(0x1d8)]===$gameParty?_0x490fa6(0x1af):_0x490fa6(0x321),_0x30b6b3=_0x45da52[_0x490fa6(0x31e)[_0x490fa6(0x24b)](_0x4a4262)];_0x385403[_0x490fa6(0x349)]=ImageManager['loadSystem'](_0x45da52[_0x490fa6(0x32b)]);const _0x5d1212=0x18,_0x4eb058=_0x5d1212/0x2,_0x48361a=0x60+_0x5d1212,_0x77c57e=0x0+_0x5d1212;if(_0x55cf82&&_0x30b6b3)_0x385403['setFrame'](_0x48361a+_0x4eb058,_0x77c57e+_0x4eb058+_0x5d1212,_0x5d1212,_0x4eb058),_0x385403['y']+=_0x245740,_0x385403[_0x490fa6(0x36f)]['y']=0x0;else{if(_0x55cf82&&!_0x30b6b3)_0x385403[_0x490fa6(0x28e)](_0x48361a+_0x4eb058,_0x77c57e,_0x5d1212,_0x4eb058),_0x385403['y']-=_0x245740,_0x385403[_0x490fa6(0x36f)]['y']=0x1;else{if(!_0x55cf82&&_0x30b6b3)_0x385403[_0x490fa6(0x28e)](_0x48361a,_0x77c57e+_0x4eb058,_0x4eb058,_0x5d1212),_0x385403['x']-=Math[_0x490fa6(0x1a3)](_0x245740*1.75),_0x385403['anchor']['x']=0x0;else!_0x55cf82&&!_0x30b6b3&&(_0x385403['setFrame'](_0x48361a+_0x5d1212+_0x4eb058,_0x77c57e+_0x4eb058,_0x4eb058,_0x5d1212),_0x385403['x']+=Math[_0x490fa6(0x1a3)](_0x245740*1.75),_0x385403[_0x490fa6(0x36f)]['x']=0x1);}}},Sprite_FieldMarkerATB['prototype'][_0x31d373(0x1c6)]=function(){const _0xba957b=_0x31d373;return this['_unit']===$gameParty?$gameParty[_0xba957b(0x21c)]()[this[_0xba957b(0x35c)]]:$gameTroop['members']()[this['_index']];},Sprite_FieldMarkerATB[_0x31d373(0x1fe)]['update']=function(){const _0x3b8356=_0x31d373;Sprite_Clickable['prototype'][_0x3b8356(0x29b)][_0x3b8356(0x33c)](this),this['updateOpacity'](),this[_0x3b8356(0x33a)](),this[_0x3b8356(0x22b)](),this[_0x3b8356(0x267)](),this[_0x3b8356(0x23b)](),this['updateLetter'](),this[_0x3b8356(0x331)]();},Sprite_FieldMarkerATB[_0x31d373(0x1fe)]['updateOpacity']=function(){const _0x28c3d7=_0x31d373,_0x22e3b8=this['targetOpacity'](),_0x4a066e=Sprite_FieldGaugeATB['Settings'][_0x28c3d7(0x1cb)];if(this['opacity']>_0x22e3b8)this['opacity']=Math['max'](_0x22e3b8,this[_0x28c3d7(0x348)]-_0x4a066e);else this['opacity']<_0x22e3b8&&(this['opacity']=Math[_0x28c3d7(0x33b)](_0x22e3b8,this['opacity']+_0x4a066e));},Sprite_FieldMarkerATB['prototype'][_0x31d373(0x1fb)]=function(){const _0x553e19=_0x31d373,_0x56c908=this['battler']();if(!_0x56c908)return 0x0;if(_0x56c908['isHidden']())return 0x0;if(_0x56c908[_0x553e19(0x234)]())return 0x0;return 0xff;},Sprite_FieldMarkerATB[_0x31d373(0x1fe)][_0x31d373(0x276)]=function(){const _0xa2b20=_0x31d373;if(this[_0xa2b20(0x2c7)]!==undefined)return this[_0xa2b20(0x2c7)];const _0x500627=Sprite_FieldGaugeATB['Settings']['DisplayPosition'];return this[_0xa2b20(0x2c7)]=['top','bottom'][_0xa2b20(0x21f)](_0x500627),this[_0xa2b20(0x2c7)];},Sprite_FieldMarkerATB[_0x31d373(0x1fe)][_0x31d373(0x33a)]=function(){const _0x24763d=_0x31d373,_0x3a6e59=Sprite_FieldGaugeATB['Settings'],_0x4300d9=this[_0x24763d(0x276)](),_0x12968b=this[_0x24763d(0x1d8)]===$gameParty?_0x24763d(0x1af):_0x24763d(0x321),_0x561e60=_0x3a6e59[_0x24763d(0x1f3)],_0x45467b=_0x3a6e59[_0x24763d(0x31e)[_0x24763d(0x24b)](_0x12968b)];_0x4300d9?(this['y']=_0x3a6e59[_0x24763d(0x270)]/0x2,this['y']+=_0x45467b?-_0x561e60:_0x561e60):(this['x']=_0x3a6e59['GaugeThick']/0x2,this['x']+=_0x45467b?_0x561e60:-_0x561e60);},Sprite_FieldMarkerATB[_0x31d373(0x1fe)]['updatePositionOnGauge']=function(_0x476be5){const _0x4c9cce=_0x31d373,_0x341ca6=this[_0x4c9cce(0x1c6)]();if(!_0x341ca6)return;const _0x26a534=Sprite_FieldGaugeATB[_0x4c9cce(0x20a)],_0x132fc9=this['isGaugeHorizontal'](),_0x17c470=this[_0x4c9cce(0x329)](),_0x4c4bf1=_0x476be5?Infinity:_0x26a534['MarkerSpeed'];if(_0x132fc9&&this['x']!==_0x17c470){if(this['x']>_0x17c470)this['x']=Math[_0x4c9cce(0x1c5)](_0x17c470,this['x']-_0x4c4bf1);if(this['x']<_0x17c470)this['x']=Math[_0x4c9cce(0x33b)](_0x17c470,this['x']+_0x4c4bf1);}else{if(!_0x132fc9&&this['x']!==_0x17c470){if(this['y']>_0x17c470)this['y']=Math[_0x4c9cce(0x1c5)](_0x17c470,this['y']-_0x4c4bf1);if(this['y']<_0x17c470)this['y']=Math[_0x4c9cce(0x33b)](_0x17c470,this['y']+_0x4c4bf1);}}},Sprite_FieldMarkerATB[_0x31d373(0x1fe)][_0x31d373(0x329)]=function(){const _0x57e85f=_0x31d373,_0x279f5c=Sprite_FieldGaugeATB['Settings'],_0x35f7e1=this['battler'](),_0x28dabc=this[_0x57e85f(0x276)](),_0x3c8089=this[_0x57e85f(0x2c0)][_0x57e85f(0x349)][_0x57e85f(0x32e)],_0x520804=this[_0x57e85f(0x2c0)][_0x57e85f(0x349)]['height'],_0x5aefa7=_0x279f5c['GaugeSplit']['clamp'](0x0,0x1),_0xa581af=_0x279f5c[_0x57e85f(0x2e5)];let _0x3b5492=_0x35f7e1['tpbChargeTime']()*_0x5aefa7;_0x3b5492+=(0x1-_0x5aefa7)*_0x35f7e1['getAtbCastTimeRate']();if(_0x35f7e1===BattleManager[_0x57e85f(0x2a5)])_0x3b5492=0x1;if(!_0xa581af)_0x3b5492=0x1-_0x3b5492;let _0xed0a41=0x0;if(_0x28dabc)_0xed0a41=_0x3b5492*_0x3c8089;else!_0x28dabc&&(_0xed0a41=_0x3b5492*_0x520804);return Math[_0x57e85f(0x32a)](_0xed0a41);},Sprite_FieldMarkerATB[_0x31d373(0x1fe)][_0x31d373(0x267)]=function(){const _0x3607bc=_0x31d373,_0x128241=this[_0x3607bc(0x1c6)]();if(!_0x128241)return;const _0x12eabc=Sprite_FieldGaugeATB[_0x3607bc(0x20a)],_0xd7f1b2=this[_0x3607bc(0x1d8)]===$gameParty?_0x3607bc(0x1af):_0x3607bc(0x321);let _0x16be64=_0x128241[_0x3607bc(0x273)]();if(_0x128241[_0x3607bc(0x323)]()&&_0x16be64===_0x3607bc(0x318))_0x16be64=_0x3607bc(0x2bf);else _0x128241['isEnemy']()&&_0x16be64===_0x3607bc(0x26c)&&(_0x16be64='enemy');if(this[_0x3607bc(0x26d)]!==_0x16be64)return this['processUpdateGraphic']();switch(this[_0x3607bc(0x26d)]){case _0x3607bc(0x2bf):if(this[_0x3607bc(0x1bc)]!==_0x128241[_0x3607bc(0x2a0)]())return this[_0x3607bc(0x27b)]();if(this['_graphicFaceIndex']!==_0x128241[_0x3607bc(0x23f)]())return this[_0x3607bc(0x27b)]();break;case _0x3607bc(0x2c9):if(this[_0x3607bc(0x302)]!==_0x128241[_0x3607bc(0x341)]())return this[_0x3607bc(0x27b)]();break;case'enemy':if(_0x128241[_0x3607bc(0x245)]()){if(this[_0x3607bc(0x34b)]!==_0x128241[_0x3607bc(0x296)]())return this[_0x3607bc(0x27b)]();}else{if(this[_0x3607bc(0x336)]!==_0x128241[_0x3607bc(0x1b0)]())return this['processUpdateGraphic']();}break;case _0x3607bc(0x26c):if(_0x128241[_0x3607bc(0x323)]()){if(this[_0x3607bc(0x34b)]!==_0x128241[_0x3607bc(0x1b0)]())return this[_0x3607bc(0x27b)]();}else{if(this[_0x3607bc(0x336)]!==_0x128241[_0x3607bc(0x1b0)]())return this[_0x3607bc(0x27b)]();}break;}},Sprite_FieldMarkerATB['prototype'][_0x31d373(0x27b)]=function(){const _0x439047=_0x31d373,_0x2a3ead=this[_0x439047(0x1c6)]();if(!_0x2a3ead)return;this[_0x439047(0x26d)]=_0x2a3ead[_0x439047(0x273)]();if(_0x2a3ead[_0x439047(0x323)]()&&this[_0x439047(0x26d)]==='enemy')this[_0x439047(0x26d)]=_0x439047(0x2bf);else _0x2a3ead['isEnemy']()&&this[_0x439047(0x26d)]===_0x439047(0x26c)&&(this[_0x439047(0x26d)]=_0x439047(0x318));let _0x7e86b2;switch(this['_graphicType']){case _0x439047(0x2bf):this['_graphicFaceName']=_0x2a3ead['fieldAtbGraphicFaceName'](),this['_graphicFaceIndex']=_0x2a3ead[_0x439047(0x23f)](),_0x7e86b2=ImageManager[_0x439047(0x20d)](this[_0x439047(0x1bc)]),_0x7e86b2['addLoadListener'](this['changeFaceGraphicBitmap'][_0x439047(0x2ff)](this,_0x7e86b2));break;case _0x439047(0x2c9):this[_0x439047(0x302)]=_0x2a3ead[_0x439047(0x341)](),_0x7e86b2=ImageManager[_0x439047(0x2fd)]('IconSet'),_0x7e86b2[_0x439047(0x265)](this[_0x439047(0x2bd)][_0x439047(0x2ff)](this,_0x7e86b2));break;case'enemy':if(_0x2a3ead[_0x439047(0x245)]())this[_0x439047(0x34b)]=_0x2a3ead[_0x439047(0x296)](),_0x7e86b2=ImageManager[_0x439047(0x305)](this[_0x439047(0x34b)]),_0x7e86b2['addLoadListener'](this[_0x439047(0x1b1)]['bind'](this,_0x7e86b2));else $gameSystem[_0x439047(0x227)]()?(this[_0x439047(0x336)]=_0x2a3ead['battlerName'](),_0x7e86b2=ImageManager['loadSvEnemy'](this['_graphicEnemy']),_0x7e86b2['addLoadListener'](this['changeEnemyGraphicBitmap']['bind'](this,_0x7e86b2))):(this['_graphicEnemy']=_0x2a3ead[_0x439047(0x1b0)](),_0x7e86b2=ImageManager[_0x439047(0x36a)](this[_0x439047(0x336)]),_0x7e86b2[_0x439047(0x265)](this[_0x439047(0x2d1)][_0x439047(0x2ff)](this,_0x7e86b2)));break;case _0x439047(0x26c):this['_graphicSv']=_0x2a3ead[_0x439047(0x1b0)](),_0x7e86b2=ImageManager[_0x439047(0x305)](this[_0x439047(0x34b)]),_0x7e86b2[_0x439047(0x265)](this[_0x439047(0x1b1)]['bind'](this,_0x7e86b2));break;}},Sprite_FieldMarkerATB[_0x31d373(0x1fe)][_0x31d373(0x236)]=function(_0x239a52){const _0x105c20=_0x31d373,_0x3f5e89=Sprite_FieldGaugeATB[_0x105c20(0x20a)],_0x19cf1c=_0x3f5e89[_0x105c20(0x1a8)],_0x1e2eb2=this['_graphicFaceIndex'];this[_0x105c20(0x266)]['bitmap']=new Bitmap(_0x19cf1c,_0x19cf1c);const _0x1e57ec=this['_graphicSprite'][_0x105c20(0x349)],_0x5865ec=ImageManager[_0x105c20(0x208)],_0x578fc1=ImageManager['faceHeight'],_0x50ba1a=ImageManager[_0x105c20(0x208)],_0x3d78a3=ImageManager[_0x105c20(0x2dc)],_0x1bf753=_0x1e2eb2%0x4*_0x5865ec+(_0x5865ec-_0x50ba1a)/0x2,_0x4185ea=Math[_0x105c20(0x300)](_0x1e2eb2/0x4)*_0x578fc1+(_0x578fc1-_0x3d78a3)/0x2;_0x1e57ec['blt'](_0x239a52,_0x1bf753,_0x4185ea,_0x50ba1a,_0x3d78a3,0x0,0x0,_0x19cf1c,_0x19cf1c);},Sprite_FieldMarkerATB[_0x31d373(0x1fe)][_0x31d373(0x2bd)]=function(_0x1e2c1d){const _0x15a5d4=_0x31d373,_0x58f1b3=Sprite_FieldGaugeATB['Settings'],_0x545b70=_0x58f1b3[_0x15a5d4(0x1a8)],_0x4cb8d4=this['_graphicIconIndex'];this[_0x15a5d4(0x266)]['bitmap']=new Bitmap(_0x545b70,_0x545b70);const _0x4b74aa=this['_graphicSprite'][_0x15a5d4(0x349)],_0x5bde47=ImageManager[_0x15a5d4(0x2d4)],_0x40b547=ImageManager[_0x15a5d4(0x1e2)],_0x5d746b=_0x4cb8d4%0x10*_0x5bde47,_0x41e5b5=Math['floor'](_0x4cb8d4/0x10)*_0x40b547;_0x4b74aa[_0x15a5d4(0x28c)](_0x1e2c1d,_0x5d746b,_0x41e5b5,_0x5bde47,_0x40b547,0x0,0x0,_0x545b70,_0x545b70);},Sprite_FieldMarkerATB[_0x31d373(0x1fe)][_0x31d373(0x1b1)]=function(_0x5807bb){const _0x38cc16=_0x31d373,_0x422d38=Sprite_FieldGaugeATB[_0x38cc16(0x20a)],_0x2a81e3=_0x422d38[_0x38cc16(0x1a8)];this[_0x38cc16(0x266)][_0x38cc16(0x349)]=new Bitmap(_0x2a81e3,_0x2a81e3);const _0x2f709c=this[_0x38cc16(0x266)][_0x38cc16(0x349)],_0x2ec9ee=this[_0x38cc16(0x34b)][_0x38cc16(0x25b)](/\$/i),_0xb33426=_0x2ec9ee?0x1:ImageManager[_0x38cc16(0x29e)],_0x78d11b=_0x2ec9ee?0x1:ImageManager[_0x38cc16(0x21b)],_0x57ec97=_0x5807bb[_0x38cc16(0x32e)]/_0xb33426,_0x3251ac=_0x5807bb[_0x38cc16(0x23c)]/_0x78d11b,_0xc9cdee=Math[_0x38cc16(0x33b)](0x1,_0x2a81e3/_0x57ec97,_0x2a81e3/_0x3251ac),_0x103a88=_0x57ec97*_0xc9cdee,_0x3c3ead=_0x3251ac*_0xc9cdee,_0x35a4e6=Math[_0x38cc16(0x32a)]((_0x2a81e3-_0x103a88)/0x2),_0x1748c2=Math[_0x38cc16(0x32a)]((_0x2a81e3-_0x3c3ead)/0x2);_0x2f709c[_0x38cc16(0x28c)](_0x5807bb,0x0,0x0,_0x57ec97,_0x3251ac,_0x35a4e6,_0x1748c2,_0x103a88,_0x3c3ead);},Sprite_FieldMarkerATB[_0x31d373(0x1fe)][_0x31d373(0x2d1)]=function(_0x384445){const _0x297e99=_0x31d373,_0x2d4e3f=Sprite_FieldGaugeATB['Settings'],_0x46a45a=_0x2d4e3f[_0x297e99(0x1a8)];this[_0x297e99(0x266)][_0x297e99(0x349)]=new Bitmap(_0x46a45a,_0x46a45a);const _0x4ff500=this['_graphicSprite']['bitmap'],_0x72f5f6=Math[_0x297e99(0x33b)](0x1,_0x46a45a/_0x384445[_0x297e99(0x32e)],_0x46a45a/_0x384445[_0x297e99(0x23c)]),_0x252493=_0x384445['width']*_0x72f5f6,_0x20edc6=_0x384445[_0x297e99(0x23c)]*_0x72f5f6,_0x3c90c6=Math[_0x297e99(0x32a)]((_0x46a45a-_0x252493)/0x2),_0x283c3c=Math[_0x297e99(0x32a)]((_0x46a45a-_0x20edc6)/0x2);_0x4ff500[_0x297e99(0x28c)](_0x384445,0x0,0x0,_0x384445[_0x297e99(0x32e)],_0x384445['height'],_0x3c90c6,_0x283c3c,_0x252493,_0x20edc6);},Sprite_FieldMarkerATB['prototype']['updateGraphicHue']=function(){const _0x58b38=_0x31d373,_0x499ebf=this['battler']();if(!_0x499ebf)return;if(!_0x499ebf[_0x58b38(0x1b9)]())return;if(this[_0x58b38(0x1d5)]===_0x499ebf[_0x58b38(0x219)]())return;this['_graphicHue']=_0x499ebf['battlerHue'](),this['_graphicSprite'][_0x58b38(0x1e6)](_0x499ebf[_0x58b38(0x245)]()?0x0:this['_graphicHue']);},Sprite_FieldMarkerATB[_0x31d373(0x1fe)]['updateLetter']=function(){const _0x23c4f7=_0x31d373;if(!this[_0x23c4f7(0x30f)])return;const _0x19beb7=this[_0x23c4f7(0x1c6)]();if(!_0x19beb7)return;if(this[_0x23c4f7(0x209)]===_0x19beb7[_0x23c4f7(0x209)]&&this['_plural']===_0x19beb7[_0x23c4f7(0x335)])return;this[_0x23c4f7(0x209)]=_0x19beb7[_0x23c4f7(0x209)],this[_0x23c4f7(0x335)]=_0x19beb7[_0x23c4f7(0x335)];const _0x11ad8d=Sprite_FieldGaugeATB[_0x23c4f7(0x20a)],_0x18a1c0=_0x11ad8d['MarkerSize'],_0x233e46=Math[_0x23c4f7(0x300)](_0x18a1c0/0x2),_0x182516=this['_letterSprite'][_0x23c4f7(0x349)];_0x182516[_0x23c4f7(0x21d)]();if(!this['_plural'])return;_0x182516[_0x23c4f7(0x1f6)]=_0x11ad8d[_0x23c4f7(0x2f8)]||$gameSystem[_0x23c4f7(0x287)](),_0x182516['fontSize']=_0x11ad8d[_0x23c4f7(0x261)]||0x10,_0x182516['drawText'](this['_letter'],0x2,_0x233e46,_0x18a1c0-0x4,_0x233e46-0x2,_0x23c4f7(0x334));},Sprite_FieldMarkerATB[_0x31d373(0x1fe)]['updateSelectionEffect']=function(){const _0x8a97d3=_0x31d373,_0xb4aa51=this['battler']();if(!_0xb4aa51)return;const _0x32eb77=_0xb4aa51[_0x8a97d3(0x1c6)]();if(!_0x32eb77)return;const _0x40f238=_0x32eb77[_0x8a97d3(0x206)]();if(!_0x40f238)return;this[_0x8a97d3(0x22e)](_0x40f238[_0x8a97d3(0x277)]);},Sprite_FieldMarkerATB['prototype'][_0x31d373(0x1c7)]=function(){const _0x5968db=_0x31d373;return this[_0x5968db(0x1c6)]();};