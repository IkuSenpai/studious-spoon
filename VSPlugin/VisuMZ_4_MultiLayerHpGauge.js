//=============================================================================
// VisuStella MZ - Multi-Layer HP Gauge
// VisuMZ_4_MultiLayerHpGauge.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_MultiLayerHpGauge = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MultiLayerHpGauge = VisuMZ.MultiLayerHpGauge || {};
VisuMZ.MultiLayerHpGauge.version = 1.04;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.04] [MultiLayerHpGauge]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Multi-Layer_HP_Gauge_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Want to give certain enemies some more significance than others? Like giving
 * them a giant Multi-Layer HP Gauge spread across the top of the screen in a
 * super imposing type of fashion? This plugin will do just that! Multi-Layer
 * HP Gauges can contain upwards of 10 layers while displaying all of their
 * states in a spread out fashion. Your players will know this enemy is a boss
 * that means business.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Designate which database enemies will have their HP Gauges put on display
 *   at the top of the screen to indicate their importance.
 * * These HP gauges can have multiple layers of health bars to make for a
 *   better representation of how tanky they are.
 * * Control the colors associated with each HP Gauge layer to allow for better
 *   distinctions on how close the player is to defeating the enemy.
 * * Up to a total of 10 different HP Gauge Layers can be used with different
 *   color settings for each layer.
 * * Adds states to be displayed in wide form in order to display more than
 *   the current style of rotating states.
 * * Lots of extra features with other VisuStella plugins if they are installed
 *   together with this plugin.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
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
 * Battle Log Position Shift
 * 
 * The Battle Log is usually displayed at the top of the screen. This plugin
 * will shift the Battle Log down by a specified amount depending on the number
 * of Multi-Layer HP Gauges are displayed on screen at a time. You can adjust
 * the amount the shift occurs. If you want to disable this, change the shift
 * amount to 0.
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
 * VisuMZ_3_StateTooltips
 *
 * If VisuStella MZ's State Tooltips plugin is installed, players can also view
 * state tooltips when hovering the mouse over the respective Multi-Layer HP
 * Gauge sheets.
 *
 * ---
 *
 * VisuMZ_3_VisualGaugeStyles
 *
 * If VisuStella MZ's Visual Gauge Styles plugin is installed, you can apply
 * gauge styles to the Multi-Layer HP Gauges for this plugin.
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
 * VisuMZ_1_BattleCore
 * 
 * To reduce redundancy, there are options to remove the HP Gauges if an enemy
 * already has a dedicated Multi-Layer HP Gauge shown at the top of the screen.
 * Likewise, the same is done for state icons.
 * 
 * If you don't want these UI elements removed, you can disable this change by
 * altering the respective Plugin Parameters.
 * 
 * ---
 * 
 * VisuMZ's Battle Systems
 * 
 * Since the position of the Multi-Layer HP Gauge will most likely overlap with
 * any turn order or action count UI elements at the top of the screen, this
 * plugin provides the option to offset them via how many Multi-Layer HP Gauge
 * rows are present.
 * 
 * ---
 * 
 * VisuMZ_4_BreakShields
 * 
 * As Break Shields can be displayed in part with the state icons, the reduced
 * redundancy Plugin Parameters allow the UI elements to be removed as to not
 * clutter upt he screen too much.
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
 * === Enemy-Related Notetags ===
 * 
 * ---
 *
 * <Show Multi-Layer HP Gauge>
 * <Hide Multi-Layer HP Gauge>
 *
 * - Used for: Enemy Notetags
 * - Determines if the enemy will have the Multi-Layer HP Gauge visible or not
 *   and bypasses the default setting found in the Plugin Parameters.
 * - Keep in mind that using any of the other notetags found below will also
 *   prompt the Multi-Layer HP Gauge to 'Show'. This makes the 'Show' notetag a
 *   bit redundant but it is there for those who want extra clarity in their
 *   note boxes.
 *
 * ---
 *
 * <Multi-Layer HP Gauge Persist>
 * <Multi-Layer HP Gauge Temporal>
 *
 * - Used for: Enemy Notetags
 * - Determines if the Multi-Layer HP Gauge is persistant or temporal and will
 *   bypass the default settings found in the Plugin Parameters.
 * - When 'Persist' is used, the Multi-Layer HP Gauge will stay visible even
 *   after the enemy tied to it has died in combat.
 * - When 'Temporal' is used, the Multi-Layer HP Gauge will vanish after the
 *   enemy tied to it has died in combat, although it will reappear if it is
 *   revived later.
 * - Also sets the visibility of the Multi-Layer HP Gauge to 'Show'.
 *
 * ---
 *
 * <Multi-Layer HP Gauge Layers: x>
 *
 * - Used for: Enemy Notetags
 * - Sets the total number of layers used for the enemy as 'x' layers.
 * - Replace 'x' with a number representing a number between 1 and 10 as the
 *   total number of layers used.
 * - Also sets the visibility of the Multi-Layer HP Gauge to 'Show'.
 *
 * ---
 *
 * <Multi-Layer HP Gauge Face: filename, index>
 * <Multi-Layer HP Gauge Graphic: filename, index>
 * <Multi-Layer HP Gauge Face Graphic: filename, index>
 *
 * - Used for: Enemy Notetags
 * - Changes the graphic used by the enemy to this face graphic.
 * - Replace 'filename' with the name of the image file to pick from the game
 *   project's /img/faces/ folder.
 *   - Filenames are case sensitive.
 *   - Leave out the filename extension from the notetag.
 * - Replace 'index' with a number representing the face graphic cell used.
 *   - Index values start at 0.
 * - The notetag variants do the same thing. Which you choose to use is
 *   entirely up to personal preference.
 * - Also sets the visibility of the Multi-Layer HP Gauge to 'Show'.
 *
 * ---
 *
 * <Multi-Layer HP Gauge BgColor: color1>
 * <Multi-Layer HP Gauge BG Color: color1>
 * <Multi-Layer HP Gauge Background Color: color1>
 * 
 * <Multi-Layer HP Gauge BgColor: color1, color2>
 * <Multi-Layer HP Gauge BG Color: color1, color2>
 * <Multi-Layer HP Gauge Background Color: color1, color2>
 *
 * - Used for: Enemy Notetags
 * - Adjusts the background color(s) used for the enemy graphic.
 * - Replace 'color1' and/or 'color2' with either a number from 0 to 31
 *   representing the text color or in the format of '#rrggbb' to custom pick a
 *   hex color.
 * - If two colors are used, a vertical gradient will form.
 * - The notetag variants do the same thing. Which you choose to use is
 *   entirely up to personal preference.
 * - Also sets the visibility of the Multi-Layer HP Gauge to 'Show'.
 * 
 * EXAMPLES:
 * 
 *   <Multi-Layer HP Gauge BgColor: 2>
 *   <Multi-Layer HP Gauge BgColor: #ff0000>
 *   <Multi-Layer HP Gauge BgColor: 2, 18>
 *   <Multi-Layer HP Gauge BgColor: #ff0000, #000000>
 *
 * ---
 *
 * <Multi-Layer HP Gauge Border Color: color>
 *
 * - Used for: Enemy Notetags
 * - Adjusts the border color used for the enemy graphic.
 * - Replace 'color' with either a number from 0 to 31 representing the text
 *   color or in the format of '#rrggbb' to custom pick a hex color.
 * - Also sets the visibility of the Multi-Layer HP Gauge to 'Show'.
 * 
 * EXAMPLES:
 * 
 *   <Multi-Layer HP Gauge Border Color: 2>
 *   <Multi-Layer HP Gauge Border Color: #ff0000>
 *
 * ---
 *
 * <Multi-Layer HP Gauge Border Size: x>
 * <Multi-Layer HP Gauge Border Thick: x>
 * <Multi-Layer HP Gauge Border Thickness: x>
 *
 * - Used for: Enemy Notetags
 * - Determines the thickness of the color section of the border.
 * - Replace 'x' with a number representing how thick the color section of the
 *   border is in pixels.
 * - The notetag variants do the same thing. Which you choose to use is
 *   entirely up to personal preference.
 * - Also sets the visibility of the Multi-Layer HP Gauge to 'Show'.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * Adjust the general settings for the Multi-Layer HP Gauge.
 *
 * ---
 *
 * Screen
 * 
 *   Max Width:
 *   - What is the max screen area that is taken up by Multi-Layer HP Gauges?
 * 
 *   Gauges Per Row:
 *   - How many gauges are displayed per row?
 *   - When the quantity exceeds this number, start a new row.
 * 
 *   Row Spacing:
 *   - How many pixels are used inbetween rows to space out the stacked
 *     Multi-Layer HP Gauges?
 * 
 *   Mid-Battle Fade Speed:
 *   - How fast should the gauges fade out mid-battle?
 *   - Lower numbers are slower. Higher numbers are faster.
 * 
 *   End Battle Fade Speed:
 *   - How fast should the gauges fade out on ending battle?
 *   - Lower numbers are slower. Higher numbers are faster.
 *
 * ---
 *
 * Properties
 * 
 *   Buffer X:
 *   - What is the minimum pixel distance between individual parts?
 * 
 *   Enable State Tooltips:
 *   - Enables state tooltips when hovered over?
 *   - Requires VisuMZ_3_StateTooltips!
 * 
 *   Graphic Size:
 *   - What is the standard pixel size for the enemy graphic?
 *   - This value is also used to adjust individual part positions.
 * 
 *   Reposition for Help?:
 *   - Reposition the gauges when the Help Window is open?
 * 
 *     Reposition Y:
 *     - How many pixels to offset the gauge reposition?
 *     - Negative: up. Positive: down.
 * 
 *   Update Frequency:
 *   - How many frames of wait should there be before updating the individual
 *     Multi-Layer HP Gauges?
 *
 * ---
 *
 * Offset
 * 
 *   Offset X:
 *   - How many pixels to offset the whole gauge's X?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - How many pixels to offset the whole gauge's Y?
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Battle Log
 * 
 *   Reposition Window?:
 *   - Repositions the battle log window to make room for the
 *     Multi-Layer HP Gauge?
 * 
 *   Per Row Offset Y:
 *   - Offset Battle Log's Y by this amount per row?
 *   - Negative: up. Positive: down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Default Settings
 * ============================================================================
 *
 * These are the default values used for this plugin. These settings can be
 * individually changed via notetags.
 *
 * ---
 *
 * General
 * 
 *   Show Gauge?:
 *   - Show Multi-Layer HP Gauges for each enemy by default?
 * 
 *   Persistant Gauges?:
 *   - Are Multi-Layer HP Gauges persistant by default?
 *   - Persistant means they remain after the enemy dies.
 * 
 *   Default Layers:
 *   - How many layers are used by default when an enemy has a
 *     Multi-Layer HP Gauge in effect?
 *
 * ---
 *
 * Graphic
 * 
 *   Background Color 1:
 *   Background Color 2:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Border Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Border Thickness:
 *   - What is the thickness of the colored band for the enemy
 *     graphic's border?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Enemy Graphic Settings
 * ============================================================================
 *
 * Adjust the settings for the Enemy Graphic part of the Multi-Layer HP Gauge.
 *
 * ---
 *
 * General
 * 
 *   Show Enemy Graphic?:
 *   - Show the "Graphic" part of the Multi-Layer HP Gauge?
 *   - This displays the enemy graphic.
 * 
 *   Show Enemy Letter?:
 *   - Show the enemy's letter on the graphic?
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
 * ============================================================================
 * Plugin Parameters: Gauge Settings
 * ============================================================================
 *
 * Adjust the settings for the HP Gauge part of the Multi-Layer HP Gauge.
 *
 * ---
 *
 * General
 * 
 *   Show Gauge?:
 *   - Show the "Gauge" part of the Multi-Layer HP Gauge?
 *   - I mean, why wouldn't you?
 *   - That's why you got this plugin.
 * 
 *   Gauge Height:
 *   - What is the height of the gauge in pixels?
 *   - Minimum: 1. Maximum: 32.
 * 
 *   Style Name:
 *   - Select the gauge style to use for the gauge.
 *   - Requires VisuMZ_3_VisualGaugeStyles!
 *
 * ---
 *
 * Vocabulary
 * 
 *   Value Format:
 *   - Text format used for the gauge value text.
 *   - %1 - Current Value, %2 - Max Value, %3 - Percentage
 * 
 *   Decimal Places:
 *   - How many decimal places should the percent digits go if they're used
 *     for the value?
 * 
 * ---
 *
 * Offset
 * 
 *   Offset X:
 *   - How many pixels to offset the gauge part's X?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - How many pixels to offset the gauge part's Y?
 *   - Negative: up. Positive: down.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Layer Color Settings
 * ============================================================================
 *
 * Adjust what colors are used for each gauge layer.
 * 
 * Layer 1 uses default HP Gauge Colors.
 *
 * ---
 *
 * Layer 2-10 Sets
 * 
 *   Color 1:
 *   Color 2:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: States Settings
 * ============================================================================
 *
 * Adjust the settings for the states part of the Multi-Layer HP Gauge.
 *
 * ---
 *
 * General
 * 
 *   Show States?:
 *   - Show the "States" part of the Multi-Layer HP Gauge?
 *   - If off, hides all states, buffs, and Break Shields.
 * 
 *   Show Break Shields?:
 *   - Add Break Shields to the list of visible objects?
 *   - Requires VisuMZ_4_BreakShields!
 *
 * ---
 *
 * Offset
 * 
 *   Offset X:
 *   - How many pixels to offset the states part's X?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - How many pixels to offset the states part's Y?
 *   - Negative: up. Positive: down.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Compatibility Settings
 * ============================================================================
 *
 * Adjust compatibility settings with other plugins.
 *
 * ---
 *
 * Battler-Related > Reduced Redundancy
 * 
 *   Break Shields:
 *   - Removes enemy battler Break Shields if redundant.
 *   - Requires VisuMZ_4_BreakShields!
 * 
 *   HP Gauge:
 *   - Removes enemy battler HP Gauges if redundant.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   State Icons:
 *   - Removes enemy battler state icons if redundant.
 *
 * ---
 *
 * Battle Data Offset > Battle Systems
 * 
 *   Each Row Offset Y:
 *   - Offset Y position by this for each row.
 *   - Negative: up. Positive: down.
 * 
 *   Closed Help Offset Y:
 *   - Offset Y position when help window is closed.
 *   - Negative: up. Positive: down.
 * 
 *   Open Help Offset Y:
 *   - Offset Y position when help window is open.
 *   - Negative: up. Positive: down.
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
 * Version 1.04: September 14, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.03: July 13, 2023
 * * Bug Fixes!
 * ** Fixed an incompatibility with Visual State Effects that would prevent the
 *    state overlays on enemies from appearing. Fix made by Irina.
 * 
 * Version 1.02: May 18, 2023
 * * Bug Fixes!
 * ** When an enemy transforms into another with a Multi-Layer HP Gauge, it
 *    will be updated and shown. Fix made by Olivia.
 * 
 * Version 1.01: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause a crash if the VisuMZ Core Engine wasn't
 *    installed. Fix made by Olivia.
 * 
 * Version 1.00 Official Release Date: April 7, 2023
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param MultiLayerHpGauge
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc Adjust the general settings for the Multi-Layer HP Gauge.
 * @default {"Screen":"","maxWidth:num":"816","perRow:num":"4","rowSpacing:num":"4","endBattleFadeSpeed:num":"24","Properties":"","bufferX:num":"4","stateTooltipsEnable:eval":"true","faceSize:num":"64","midFadeSpeed:num":"16","repositionForHelp:eval":"true","repositionHelpY:num":"+108","checkFrequency:num":"20","Offset":"","offsetX:num":"+0","offsetY:num":"+0","Window_BattleLog":"","repositionBattleLog:eval":"true","battleLogPerRowOffsetY:num":"+64"}
 *
 * @param Defaults:struct
 * @text Default Settings
 * @type struct<Defaults>
 * @desc These are the default values used for this plugin.
 * These settings can be individually changed via notetags.
 * @default {"General":"","showDefault:eval":"false","persist:eval":"true","defaultLayers:num":"1","Graphic":"","bgColor1:str":"19","bgColor2:str":"18","borderColor:str":"2","borderthickness:num":"2"}
 * 
 * @param Parts
 * @text Multi-Layer HP Gauge Parts
 * 
 * @param Graphic:struct
 * @text Enemy Graphic Settings
 * @parent Parts
 * @type struct<Graphic>
 * @desc Adjust the settings for the Enemy Graphic part of the
 * Multi-Layer HP Gauge.
 * @default {"show:eval":"true","drawLetter:eval":"true","letterFontName:str":"","letterFontSize:num":"16"}
 *
 * @param Gauge:struct
 * @text Gauge Settings
 * @parent Parts
 * @type struct<Gauge>
 * @desc Adjust the settings for the HP Gauge part of the
 * Multi-Layer HP Gauge.
 * @default {"General":"","show:eval":"true","gaugeHeight:num":"24","styleName:str":"Lean","Vocab":"","valueFmt:str":"%3%","valuePercentDigits:num":"2","Offset":"","offsetX:num":"+0","offsetY:num":"+4"}
 *
 * @param LayerColors:struct
 * @text Layer Color Settings
 * @parent Gauge:struct
 * @type struct<LayerColors>
 * @desc Adjust what colors are used for each gauge layer.
 * Layer 1 uses default HP Gauge Colors.
 * @default {"Layer2":"","layer2_color1:str":"#fff200","layer2_color2:str":"#fff799","Layer3":"","layer3_color1:str":"#39b54a","layer3_color2:str":"#7cc576","Layer4":"","layer4_color1:str":"#00a99d","layer4_color2:str":"#7accc8","Layer5":"","layer5_color1:str":"#00aeef","layer5_color2:str":"#6dcff6","Layer6":"","layer6_color1:str":"#0054a6","layer6_color2:str":"#8393ca","Layer7":"","layer7_color1:str":"#2e3192","layer7_color2:str":"#605ca8","Layer8":"","layer8_color1:str":"#662d91","layer8_color2:str":"#a186be","Layer9":"","layer9_color1:str":"#f06eaa","layer9_color2:str":"#ffdeec","Layer10":"","layer10_color1:str":"#ed1c24","layer10_color2:str":"#f26c4f"}
 *
 * @param States:struct
 * @text States Settings
 * @parent Parts
 * @type struct<States>
 * @desc Adjust the settings for the states part of the
 * Multi-Layer HP Gauge.
 * @default {"General":"","show:eval":"true","breakShields:eval":"true","Offset":"","offsetX:num":"+0","offsetY:num":"+28"}
 *
 * @param Compatibility:struct
 * @text Compatibility Settings
 * @type struct<Compatibility>
 * @desc Adjust compatibility settings with other plugins.
 * @default {"Battler":"","ReduceRed":"","reduceRedundantBreakShield:eval":"true","reduceRedundantHpGauge:eval":"true","reduceRedundantStateIcon:eval":"true","GaugeOffset":"","BattleSysAtb":"","atbEachRowOffsetY:num":"+64","atbNormalOffsetY:num":"+24","atbHelpOffsetY:num":"+12","BattleSysBtb":"","btbEachRowOffsetY:num":"+64","btbNormalOffsetY:num":"+0","btbHelpOffsetY:num":"+12","BattleSysCtb":"","ctbEachRowOffsetY:num":"+64","ctbNormalOffsetY:num":"+0","ctbHelpOffsetY:num":"+12","BattleSysEtb":"","etbEachRowOffsetY:num":"+64","etbNormalOffsetY:num":"+0","etbHelpOffsetY:num":"-56","BattleSysFtb":"","ftbEachRowOffsetY:num":"+64","ftbNormalOffsetY:num":"+0","ftbHelpOffsetY:num":"-56","BattleSysOtb":"","otbEachRowOffsetY:num":"+64","otbNormalOffsetY:num":"-6","otbHelpOffsetY:num":"-12","BattleSysPtb":"","ptbEachRowOffsetY:num":"+64","ptbNormalOffsetY:num":"+0","ptbHelpOffsetY:num":"-56","BattleSysStb":"","stbEachRowOffsetY:num":"+64","stbNormalOffsetY:num":"+0","stbHelpOffsetY:num":"+12"}
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
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param Screen
 *
 * @param maxWidth:num
 * @text Max Width
 * @parent Screen
 * @min 1
 * @desc What is the max screen area that is taken up by Multi-Layer HP Gauges?
 * @default 816
 *
 * @param perRow:num
 * @text Gauges Per Row
 * @parent Screen
 * @min 1
 * @desc How many gauges are displayed per row?
 * When the quantity exceeds this number, start a new row.
 * @default 4
 *
 * @param rowSpacing:num
 * @text Row Spacing
 * @parent Screen
 * @min 0
 * @desc How many pixels are used inbetween rows to space out
 * the stacked Multi-Layer HP Gauges?
 * @default 4
 *
 * @param midFadeSpeed:num
 * @text Mid-Battle Fade Speed
 * @parent Screen
 * @min 1
 * @desc How fast should the gauges fade out mid-battle?
 * Lower numbers are slower. Higher numbers are faster.
 * @default 16
 *
 * @param endBattleFadeSpeed:num
 * @text End Battle Fade Speed
 * @parent Screen
 * @min 1
 * @desc How fast should the gauges fade out on ending battle?
 * Lower numbers are slower. Higher numbers are faster.
 * @default 24
 *
 * @param Properties
 *
 * @param bufferX:num
 * @text Buffer X
 * @parent Properties
 * @min 0
 * @desc What is the minimum pixel distance between individual parts?
 * @default 4
 *
 * @param stateTooltipsEnable:eval
 * @text Enable State Tooltips
 * @parent Properties
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables state tooltips when hovered over?
 * Requires VisuMZ_3_StateTooltips!
 * @default true
 *
 * @param faceSize:num
 * @text Graphic Size
 * @parent Properties
 * @min 1
 * @desc What is the standard pixel size for the enemy graphic?
 * This value is also used to adjust individual part positions.
 * @default 64
 *
 * @param repositionForHelp:eval
 * @text Reposition for Help?
 * @parent Properties
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc Reposition the gauges when the Help Window is open?
 * @default true
 *
 * @param repositionHelpY:num
 * @text Reposition Y
 * @parent repositionForHelp:eval
 * @desc How many pixels to offset the gauge reposition?
 * Negative: up. Positive: down.
 * @default +108
 *
 * @param checkFrequency:num
 * @text Update Frequency
 * @parent Properties
 * @min 1
 * @desc How many frames of wait should there be before updating
 * the individual Multi-Layer HP Gauges?
 * @default 20
 * 
 * @param Offset
 *
 * @param offsetX:num
 * @text Offset X
 * @parent Offset
 * @desc How many pixels to offset the whole gauge's X?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param offsetY:num
 * @text Offset Y
 * @parent Offset
 * @desc How many pixels to offset the whole gauge's Y?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Window_BattleLog
 * @text Battle Log
 *
 * @param repositionBattleLog:eval
 * @text Reposition Window?
 * @parent Window_BattleLog
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Repositions the battle log window to make room for
 * the Multi-Layer HP Gauge?
 * @default true
 *
 * @param battleLogPerRowOffsetY:num
 * @text Per Row Offset Y
 * @parent Window_BattleLog
 * @desc Offset Battle Log's Y by this amount per row?
 * Negative: up. Positive: down.
 * @default +64
 *
 */
/* ----------------------------------------------------------------------------
 * Defaults Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Defaults:
 * 
 * @param General
 *
 * @param showDefault:eval
 * @text Show Gauge?
 * @parent General
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show Multi-Layer HP Gauges for each enemy by default?
 * @default false
 *
 * @param persist:eval
 * @text Persistant Gauges?
 * @parent General
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Are Multi-Layer HP Gauges persistant by default?
 * Persistant means they remain after the enemy dies.
 * @default true
 *
 * @param defaultLayers:num
 * @text Default Layers
 * @parent General
 * @type number
 * @min 1
 * @max 10
 * @desc How many layers are used by default when an enemy has
 * a Multi-Layer HP Gauge in effect?
 * @default 1
 * 
 * @param Graphic
 *
 * @param bgColor1:str
 * @text Background Color 1
 * @parent Graphic
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param bgColor2:str
 * @text Background Color 2
 * @parent Graphic
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param borderColor:str
 * @text Border Color
 * @parent Graphic
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param borderthickness:num
 * @text Border Thickness
 * @parent Graphic
 * @type number
 * @min 1
 * @desc What is the thickness of the colored band for the enemy
 * graphic's border?
 * @default 2
 *
 */
/* ----------------------------------------------------------------------------
 * Graphic Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Graphic:
 *
 * @param show:eval
 * @text Show Enemy Graphic?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the "Graphic" part of the Multi-Layer HP Gauge?
 * This displays the enemy graphic.
 * @default true
 *
 * @param drawLetter:eval
 * @text Show Enemy Letter?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the enemy's letter on the graphic?
 * @default true
 *
 * @param letterFontName:str
 * @text Font Name
 * @parent drawLetter:eval
 * @desc The font name used for the text of the Letter.
 * Leave empty to use the default game's font.
 * @default 
 *
 * @param letterFontSize:num
 * @text Font Size
 * @parent drawLetter:eval
 * @min 1
 * @desc The font size used for the text of the Letter.
 * @default 16
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
 * @param show:eval
 * @text Show Gauge?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the "Gauge" part of the Multi-Layer HP Gauge?
 * I mean, why wouldn't you? That's why you got this plugin.
 * @default true
 *
 * @param gaugeHeight:num
 * @text Gauge Height
 * @parent General
 * @type number
 * @min 1
 * @max 32
 * @desc What is the height of the gauge in pixels?
 * Minimum: 1. Maximum: 32.
 * @default 24
 * 
 * @param styleName:str
 * @text Style Name
 * @parent General
 * @type select
 * @option -
 * @option Normal
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the gauge.
 * Requires VisuMZ_3_VisualGaugeStyles!
 * @default Lean
 *
 * @param Vocab
 * @text Vocabulary
 *
 * @param valueFmt:str
 * @text Value Format
 * @parent Vocab
 * @desc Text format used for the gauge value text.
 * %1 - Current Value, %2 - Max Value, %3 - Percentage
 * @default %3%
 *
 * @param valuePercentDigits:num
 * @text Decimal Places
 * @parent Vocab
 * @type number
 * @desc How many decimal places should the percent digits
 * go if they're used for the value?
 * @default 2
 * 
 * @param Offset
 *
 * @param offsetX:num
 * @text Offset X
 * @parent Offset
 * @desc How many pixels to offset the gauge part's X?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param offsetY:num
 * @text Offset Y
 * @parent Offset
 * @desc How many pixels to offset the gauge part's Y?
 * Negative: up. Positive: down.
 * @default +4
 *
 */
/* ----------------------------------------------------------------------------
 * States Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~States:
 *
 * @param General
 *
 * @param show:eval
 * @text Show States?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the "States" part of the Multi-Layer HP Gauge?
 * If off, hides all states, buffs, and Break Shields.
 * @default true
 *
 * @param breakShields:eval
 * @text Show Break Shields?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add Break Shields to the list of visible objects?
 * Requires VisuMZ_4_BreakShields!
 * @default true
 * 
 * @param Offset
 *
 * @param offsetX:num
 * @text Offset X
 * @parent Offset
 * @desc How many pixels to offset the states part's X?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param offsetY:num
 * @text Offset Y
 * @parent Offset
 * @desc How many pixels to offset the states part's Y?
 * Negative: up. Positive: down.
 * @default +28
 *
 */
/* ----------------------------------------------------------------------------
 * Layer Colors Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LayerColors:
 *
 * @param Layer2
 * @text Layer 2 Set
 *
 * @param layer2_color1:str
 * @text Color 1
 * @parent Layer2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #fff200
 *
 * @param layer2_color2:str
 * @text Color 2
 * @parent Layer2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #fff799
 *
 * @param Layer3
 * @text Layer 3 Set
 *
 * @param layer3_color1:str
 * @text Color 1
 * @parent Layer3
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #39b54a
 *
 * @param layer3_color2:str
 * @text Color 2
 * @parent Layer3
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #7cc576
 *
 * @param Layer4
 * @text Layer 4 Set
 *
 * @param layer4_color1:str
 * @text Color 1
 * @parent Layer4
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #00a99d
 *
 * @param layer4_color2:str
 * @text Color 2
 * @parent Layer4
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #7accc8
 *
 * @param Layer5
 * @text Layer 5 Set
 *
 * @param layer5_color1:str
 * @text Color 1
 * @parent Layer5
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #00aeef
 *
 * @param layer5_color2:str
 * @text Color 2
 * @parent Layer5
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #6dcff6
 *
 * @param Layer6
 * @text Layer 6 Set
 *
 * @param layer6_color1:str
 * @text Color 1
 * @parent Layer6
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #0054a6
 *
 * @param layer6_color2:str
 * @text Color 2
 * @parent Layer6
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #8393ca
 *
 * @param Layer7
 * @text Layer 7 Set
 *
 * @param layer7_color1:str
 * @text Color 1
 * @parent Layer7
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #2e3192
 *
 * @param layer7_color2:str
 * @text Color 2
 * @parent Layer7
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #605ca8
 *
 * @param Layer8
 * @text Layer 8 Set
 *
 * @param layer8_color1:str
 * @text Color 1
 * @parent Layer8
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #662d91
 *
 * @param layer8_color2:str
 * @text Color 2
 * @parent Layer8
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #a186be
 *
 * @param Layer9
 * @text Layer 9 Set
 *
 * @param layer9_color1:str
 * @text Color 1
 * @parent Layer9
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #f06eaa
 *
 * @param layer9_color2:str
 * @text Color 2
 * @parent Layer9
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffdeec
 *
 * @param Layer10
 * @text Layer 10 Set
 *
 * @param layer10_color1:str
 * @text Color 1
 * @parent Layer10
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ed1c24
 *
 * @param layer10_color2:str
 * @text Color 2
 * @parent Layer10
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #f26c4f
 *
 */
/* ----------------------------------------------------------------------------
 * Compatibility Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Compatibility:
 *
 * @param Battler
 * @text Battler-Related
 * 
 * @param ReduceRed
 * @text Reduced Redundancy
 * @parent Battler
 *
 * @param reduceRedundantBreakShield:eval
 * @text Break Shields
 * @parent ReduceRed
 * @type boolean
 * @on Reduce
 * @off Keep
 * @desc Removes enemy battler Break Shields if redundant.
 * Requires VisuMZ_4_BreakShields!
 * @default true
 *
 * @param reduceRedundantHpGauge:eval
 * @text HP Gauge
 * @parent ReduceRed
 * @type boolean
 * @on Reduce
 * @off Keep
 * @desc Removes enemy battler HP Gauges if redundant.
 * Requires VisuMZ_1_BattleCore!
 * @default true
 *
 * @param reduceRedundantStateIcon:eval
 * @text State Icons
 * @parent ReduceRed
 * @type boolean
 * @on Reduce
 * @off Keep
 * @desc Removes enemy battler state icons if redundant.
 * @default true
 * 
 * @param BattleDataOffset
 * @text Battle Data Offset
 *
 * @param BattleSysAtb
 * @text Battle System - ATB
 * @parent BattleDataOffset
 *
 * @param atbEachRowOffsetY:num
 * @text Each Row Offset Y
 * @parent BattleSysAtb
 * @desc Offset Y position by this for each row.
 * Negative: up. Positive: down.
 * @default +64
 *
 * @param atbNormalOffsetY:num
 * @text Closed Help Offset Y
 * @parent BattleSysAtb
 * @desc Offset Y position when help window is closed.
 * Negative: up. Positive: down.
 * @default +24
 *
 * @param atbHelpOffsetY:num
 * @text Open Help Offset Y
 * @parent BattleSysAtb
 * @desc Offset Y position when help window is open.
 * Negative: up. Positive: down.
 * @default +12
 *
 * @param BattleSysBtb
 * @text Battle System - BTB
 * @parent GaugeOffset
 *
 * @param btbEachRowOffsetY:num
 * @text Each Row Offset Y
 * @parent BattleSysBtb
 * @desc Offset Y position by this for each row.
 * Negative: up. Positive: down.
 * @default +64
 *
 * @param btbNormalOffsetY:num
 * @text Closed Help Offset Y
 * @parent BattleSysBtb
 * @desc Offset Y position when help window is closed.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param btbHelpOffsetY:num
 * @text Open Help Offset Y
 * @parent BattleSysBtb
 * @desc Offset Y position when help window is open.
 * Negative: up. Positive: down.
 * @default +12
 *
 * @param BattleSysCtb
 * @text Battle System - CTB
 * @parent GaugeOffset
 *
 * @param ctbEachRowOffsetY:num
 * @text Each Row Offset Y
 * @parent BattleSysCtb
 * @desc Offset Y position by this for each row.
 * Negative: up. Positive: down.
 * @default +64
 *
 * @param ctbNormalOffsetY:num
 * @text Closed Help Offset Y
 * @parent BattleSysCtb
 * @desc Offset Y position when help window is closed.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param ctbHelpOffsetY:num
 * @text Open Help Offset Y
 * @parent BattleSysCtb
 * @desc Offset Y position when help window is open.
 * Negative: up. Positive: down.
 * @default +12
 *
 * @param BattleSysEtb
 * @text Battle System - ETB
 * @parent GaugeOffset
 *
 * @param etbEachRowOffsetY:num
 * @text Each Row Offset Y
 * @parent BattleSysEtb
 * @desc Offset Y position by this for each row.
 * Negative: up. Positive: down.
 * @default +64
 *
 * @param etbNormalOffsetY:num
 * @text Closed Help Offset Y
 * @parent BattleSysEtb
 * @desc Offset Y position when help window is closed.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param etbHelpOffsetY:num
 * @text Open Help Offset Y
 * @parent BattleSysEtb
 * @desc Offset Y position when help window is open.
 * Negative: up. Positive: down.
 * @default -56
 *
 * @param BattleSysFtb
 * @text Battle System - FTB
 * @parent GaugeOffset
 *
 * @param ftbEachRowOffsetY:num
 * @text Each Row Offset Y
 * @parent BattleSysFtb
 * @desc Offset Y position by this for each row.
 * Negative: up. Positive: down.
 * @default +64
 *
 * @param ftbNormalOffsetY:num
 * @text Closed Help Offset Y
 * @parent BattleSysFtb
 * @desc Offset Y position when help window is closed.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param ftbHelpOffsetY:num
 * @text Open Help Offset Y
 * @parent BattleSysFtb
 * @desc Offset Y position when help window is open.
 * Negative: up. Positive: down.
 * @default -56
 *
 * @param BattleSysOtb
 * @text Battle System - OTB
 * @parent GaugeOffset
 *
 * @param otbEachRowOffsetY:num
 * @text Each Row Offset Y
 * @parent BattleSysOtb
 * @desc Offset Y position by this for each row.
 * Negative: up. Positive: down.
 * @default +64
 *
 * @param otbNormalOffsetY:num
 * @text Closed Help Offset Y
 * @parent BattleSysOtb
 * @desc Offset Y position when help window is closed.
 * Negative: up. Positive: down.
 * @default -6
 *
 * @param otbHelpOffsetY:num
 * @text Open Help Offset Y
 * @parent BattleSysOtb
 * @desc Offset Y position when help window is open.
 * Negative: up. Positive: down.
 * @default -12
 *
 * @param BattleSysPtb
 * @text Battle System - PTB
 * @parent GaugeOffset
 *
 * @param ptbEachRowOffsetY:num
 * @text Each Row Offset Y
 * @parent BattleSysPtb
 * @desc Offset Y position by this for each row.
 * Negative: up. Positive: down.
 * @default +64
 *
 * @param ptbNormalOffsetY:num
 * @text Closed Help Offset Y
 * @parent BattleSysPtb
 * @desc Offset Y position when help window is closed.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param ptbHelpOffsetY:num
 * @text Open Help Offset Y
 * @parent BattleSysPtb
 * @desc Offset Y position when help window is open.
 * Negative: up. Positive: down.
 * @default -56
 *
 * @param BattleSysStb
 * @text Battle System - STB
 * @parent GaugeOffset
 *
 * @param stbEachRowOffsetY:num
 * @text Each Row Offset Y
 * @parent BattleSysStb
 * @desc Offset Y position by this for each row.
 * Negative: up. Positive: down.
 * @default +64
 *
 * @param stbNormalOffsetY:num
 * @text Closed Help Offset Y
 * @parent BattleSysStb
 * @desc Offset Y position when help window is closed.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param stbHelpOffsetY:num
 * @text Open Help Offset Y
 * @parent BattleSysStb
 * @desc Offset Y position when help window is open.
 * Negative: up. Positive: down.
 * @default +12
 *
 */
//=============================================================================

const _0x384a4b=_0x39d0;(function(_0xcdbf0f,_0x1ffc20){const _0xa5400c=_0x39d0,_0x1ebd60=_0xcdbf0f();while(!![]){try{const _0x4ebc4e=parseInt(_0xa5400c(0x241))/0x1*(-parseInt(_0xa5400c(0x281))/0x2)+-parseInt(_0xa5400c(0x111))/0x3+-parseInt(_0xa5400c(0x190))/0x4+-parseInt(_0xa5400c(0x1c0))/0x5+-parseInt(_0xa5400c(0x220))/0x6*(parseInt(_0xa5400c(0x2ac))/0x7)+-parseInt(_0xa5400c(0x22b))/0x8*(-parseInt(_0xa5400c(0x1c4))/0x9)+-parseInt(_0xa5400c(0x2dc))/0xa*(-parseInt(_0xa5400c(0x168))/0xb);if(_0x4ebc4e===_0x1ffc20)break;else _0x1ebd60['push'](_0x1ebd60['shift']());}catch(_0x2d34c4){_0x1ebd60['push'](_0x1ebd60['shift']());}}}(_0x323b,0x6981f));var label=_0x384a4b(0x19a),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x384a4b(0x21f)](function(_0xee696b){const _0x1c92b9=_0x384a4b;return _0xee696b['status']&&_0xee696b['description'][_0x1c92b9(0x2f1)]('['+label+']');})[0x0];VisuMZ[label][_0x384a4b(0x2b5)]=VisuMZ[label][_0x384a4b(0x2b5)]||{},VisuMZ[_0x384a4b(0x14a)]=function(_0x418b72,_0x536138){const _0x5d02c1=_0x384a4b;for(const _0x232e41 in _0x536138){if(_0x232e41['match'](/(.*):(.*)/i)){const _0x594dcd=String(RegExp['$1']),_0x209f86=String(RegExp['$2'])[_0x5d02c1(0x124)]()[_0x5d02c1(0x231)]();let _0x21f3ce,_0xff609e,_0x34a279;switch(_0x209f86){case'NUM':_0x21f3ce=_0x536138[_0x232e41]!==''?Number(_0x536138[_0x232e41]):0x0;break;case'ARRAYNUM':_0xff609e=_0x536138[_0x232e41]!==''?JSON['parse'](_0x536138[_0x232e41]):[],_0x21f3ce=_0xff609e[_0x5d02c1(0x108)](_0x15d775=>Number(_0x15d775));break;case _0x5d02c1(0x297):_0x21f3ce=_0x536138[_0x232e41]!==''?eval(_0x536138[_0x232e41]):null;break;case _0x5d02c1(0x28d):_0xff609e=_0x536138[_0x232e41]!==''?JSON['parse'](_0x536138[_0x232e41]):[],_0x21f3ce=_0xff609e[_0x5d02c1(0x108)](_0x327536=>eval(_0x327536));break;case _0x5d02c1(0x1fb):_0x21f3ce=_0x536138[_0x232e41]!==''?JSON[_0x5d02c1(0x1ac)](_0x536138[_0x232e41]):'';break;case _0x5d02c1(0x198):_0xff609e=_0x536138[_0x232e41]!==''?JSON[_0x5d02c1(0x1ac)](_0x536138[_0x232e41]):[],_0x21f3ce=_0xff609e[_0x5d02c1(0x108)](_0x1d607f=>JSON[_0x5d02c1(0x1ac)](_0x1d607f));break;case _0x5d02c1(0x24e):_0x21f3ce=_0x536138[_0x232e41]!==''?new Function(JSON[_0x5d02c1(0x1ac)](_0x536138[_0x232e41])):new Function(_0x5d02c1(0x28f));break;case'ARRAYFUNC':_0xff609e=_0x536138[_0x232e41]!==''?JSON[_0x5d02c1(0x1ac)](_0x536138[_0x232e41]):[],_0x21f3ce=_0xff609e[_0x5d02c1(0x108)](_0x2872c3=>new Function(JSON[_0x5d02c1(0x1ac)](_0x2872c3)));break;case _0x5d02c1(0x201):_0x21f3ce=_0x536138[_0x232e41]!==''?String(_0x536138[_0x232e41]):'';break;case _0x5d02c1(0x100):_0xff609e=_0x536138[_0x232e41]!==''?JSON[_0x5d02c1(0x1ac)](_0x536138[_0x232e41]):[],_0x21f3ce=_0xff609e['map'](_0x2b9017=>String(_0x2b9017));break;case'STRUCT':_0x34a279=_0x536138[_0x232e41]!==''?JSON[_0x5d02c1(0x1ac)](_0x536138[_0x232e41]):{},_0x21f3ce=VisuMZ[_0x5d02c1(0x14a)]({},_0x34a279);break;case _0x5d02c1(0x1ed):_0xff609e=_0x536138[_0x232e41]!==''?JSON['parse'](_0x536138[_0x232e41]):[],_0x21f3ce=_0xff609e['map'](_0xb507d0=>VisuMZ[_0x5d02c1(0x14a)]({},JSON[_0x5d02c1(0x1ac)](_0xb507d0)));break;default:continue;}_0x418b72[_0x594dcd]=_0x21f3ce;}}return _0x418b72;},(_0x5d43de=>{const _0x31d7f0=_0x384a4b,_0x105c46=_0x5d43de[_0x31d7f0(0x136)];for(const _0x582e20 of dependencies){if(_0x31d7f0(0x11e)!==_0x31d7f0(0x11e))return this['processReplacement']();else{if(!Imported[_0x582e20]){alert(_0x31d7f0(0x2ca)[_0x31d7f0(0x1a8)](_0x105c46,_0x582e20)),SceneManager[_0x31d7f0(0x293)]();break;}}}const _0x44b4a5=_0x5d43de[_0x31d7f0(0x120)];if(_0x44b4a5[_0x31d7f0(0x163)](/\[Version[ ](.*?)\]/i)){const _0x3fa779=Number(RegExp['$1']);_0x3fa779!==VisuMZ[label][_0x31d7f0(0x1fa)]&&(alert(_0x31d7f0(0x12c)[_0x31d7f0(0x1a8)](_0x105c46,_0x3fa779)),SceneManager['exit']());}if(_0x44b4a5[_0x31d7f0(0x163)](/\[Tier[ ](\d+)\]/i)){const _0x32b76c=Number(RegExp['$1']);_0x32b76c<tier?(alert(_0x31d7f0(0x175)[_0x31d7f0(0x1a8)](_0x105c46,_0x32b76c,tier)),SceneManager[_0x31d7f0(0x293)]()):tier=Math[_0x31d7f0(0x162)](_0x32b76c,tier);}VisuMZ[_0x31d7f0(0x14a)](VisuMZ[label][_0x31d7f0(0x2b5)],_0x5d43de[_0x31d7f0(0x2bf)]);})(pluginData),VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x1de)]={'showMultiLayerGauge':/<SHOW MULTI(?:|-| )LAYER (?:HP |)GAUGE>/i,'hideMultiLayerGauge':/<HIDE MULTI(?:|-| )LAYER (?:HP |)GAUGE>/i,'persistMultiLayerGauge':/<MULTI(?:|-| )LAYER (?:HP |)GAUGE (?:PERSIST|PERSISTANT)>/i,'temporalMultiLayerGauge':/<MULTI(?:|-| )LAYER (?:HP |)GAUGE (?:TEMP|TEMPORAL|TEMPORARY)>/i,'layers':/<MULTI(?:|-| )LAYER (?:HP |)GAUGE LAYERS:[ ](\d+)>/i,'faceGraphic':/<MULTI(?:|-| )LAYER (?:HP |)GAUGE (?:FACE|GRAPHIC|FACE GRAPHIC):[ ](.*),[ ]*(\d+)>/i,'bgColor':/<MULTI(?:|-| )LAYER (?:HP |)GAUGE (?:BG|BG |BACKGROUND )COLOR:[ ](.*)>/i,'borderColor':/<MULTI(?:|-| )LAYER (?:HP |)GAUGE BORDER COLOR:[ ](.*)>/i,'borderThick':/<MULTI(?:|-| )LAYER (?:HP |)GAUGE BORDER (?:THICK|THICKNESS|SIZE):[ ](\d+)>/i},ImageManager[_0x384a4b(0x2e3)]=ImageManager['svActorHorzCells']||0x9,ImageManager['svActorVertCells']=ImageManager[_0x384a4b(0x2d8)]||0x6,TextManager['MULTI_LAYER_HP_GAUGE']={'valueFmt':VisuMZ[_0x384a4b(0x19a)]['Settings']['Gauge']['valueFmt']??'%3%','valuePercentDigits':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x13f)][_0x384a4b(0x204)]??0x2},ColorManager[_0x384a4b(0x2e6)]={'color1':{'layer2':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)][_0x384a4b(0x267)]['layer2_color1']??_0x384a4b(0x208),'layer3':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x267)][_0x384a4b(0x294)]??_0x384a4b(0x29e),'layer4':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x267)][_0x384a4b(0x185)]??_0x384a4b(0x1a3),'layer5':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x267)][_0x384a4b(0x286)]??_0x384a4b(0x1ff),'layer6':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)]['LayerColors'][_0x384a4b(0x192)]??_0x384a4b(0x117),'layer7':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x267)][_0x384a4b(0x128)]??_0x384a4b(0x29c),'layer8':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)]['LayerColors'][_0x384a4b(0x24b)]??'#662d91','layer9':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)][_0x384a4b(0x267)][_0x384a4b(0x18d)]??'#f06eaa','layer10':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x267)][_0x384a4b(0x14e)]??_0x384a4b(0x24f)},'color2':{'layer2':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)]['LayerColors'][_0x384a4b(0x1f0)]??_0x384a4b(0x2cb),'layer3':VisuMZ['MultiLayerHpGauge']['Settings']['LayerColors'][_0x384a4b(0x1a6)]??_0x384a4b(0x1ce),'layer4':VisuMZ[_0x384a4b(0x19a)]['Settings'][_0x384a4b(0x267)][_0x384a4b(0x113)]??_0x384a4b(0x27e),'layer5':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)]['LayerColors'][_0x384a4b(0x2e5)]??'#6dcff6','layer6':VisuMZ[_0x384a4b(0x19a)]['Settings']['LayerColors'][_0x384a4b(0x2d1)]??_0x384a4b(0x225),'layer7':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x267)][_0x384a4b(0x28b)]??_0x384a4b(0x104),'layer8':VisuMZ['MultiLayerHpGauge']['Settings'][_0x384a4b(0x267)][_0x384a4b(0x23f)]??_0x384a4b(0x2ad),'layer9':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x267)][_0x384a4b(0x227)]??_0x384a4b(0x1e5),'layer10':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x267)][_0x384a4b(0x191)]??_0x384a4b(0x2cf)}},ColorManager[_0x384a4b(0x269)]=function(_0x4a5551){const _0xe499b1=_0x384a4b;return _0x4a5551=String(_0x4a5551),_0x4a5551[_0xe499b1(0x163)](/#(.*)/i)?_0xe499b1(0x205)['format'](String(RegExp['$1'])):this[_0xe499b1(0x169)](Number(_0x4a5551));},ColorManager[_0x384a4b(0x290)]=function(_0x3bc562){const _0x23e412=_0x384a4b;if(_0x3bc562<0x1){if('NtSto'!==_0x23e412(0x110))return this[_0x23e412(0x213)]();else this[_0x23e412(0x26b)]=!![];}else{if(_0x3bc562===0x1)return this[_0x23e412(0x235)]();else{if('ZpkRD'!=='gpvgH'){const _0x243625='layer%1'[_0x23e412(0x1a8)](_0x3bc562[_0x23e412(0x1c9)](0x2,0xa)),_0x20d45e=ColorManager[_0x23e412(0x2e6)][_0x23e412(0x254)][_0x243625];return this['getColor'](_0x20d45e);}else{if(_0x199b7a)_0x4944e8[_0x23e412(0x14c)]=!![];}}}},ColorManager[_0x384a4b(0x1d5)]=function(_0x21a131){const _0x1d527d=_0x384a4b;if(_0x21a131<0x1)return this[_0x1d527d(0x213)]();else{if(_0x21a131===0x1){if(_0x1d527d(0x2d0)!==_0x1d527d(0x1b1))return this[_0x1d527d(0x24d)]();else{if(this[_0x1d527d(0x27c)]<0x0)return _0x1915b9[_0x1d527d(0x275)]*0xa;const _0x4b9346=_0x45a58e['SETTINGS'],_0x4d9ab6=_0x1ff3a2[_0x1d527d(0x2d2)](this[_0x1d527d(0x27c)]/_0x1e502b['MULTI_LAYER_HP_GAUGE'][_0x1d527d(0x15c)]);let _0x19020c=_0x4d9ab6*(0x4+_0x4b9346[_0x1d527d(0x103)]);return _0x19020c+=_0x3e9a4e[_0x1d527d(0x10b)][_0x1d527d(0x274)]['y'],_0x19020c;}}else{if(_0x1d527d(0x258)===_0x1d527d(0x245))this[_0x1d527d(0x224)]=!![];else{const _0x27414d=_0x1d527d(0x15b)[_0x1d527d(0x1a8)](_0x21a131[_0x1d527d(0x1c9)](0x2,0xa)),_0x1e0315=ColorManager['MULTI_LAYER_HP_GAUGE'][_0x1d527d(0x2e9)][_0x27414d];return this[_0x1d527d(0x269)](_0x1e0315);}}}},VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2aa)]=BattleManager[_0x384a4b(0x176)],BattleManager[_0x384a4b(0x176)]=function(){const _0x2bf6a9=_0x384a4b;VisuMZ[_0x2bf6a9(0x19a)][_0x2bf6a9(0x2aa)][_0x2bf6a9(0x20b)](this),!$gameTroop[_0x2bf6a9(0x250)]()&&$gameTroop[_0x2bf6a9(0x15e)]();},VisuMZ[_0x384a4b(0x19a)]['Game_BattlerBase_revive']=Game_BattlerBase[_0x384a4b(0x2fd)][_0x384a4b(0x283)],Game_BattlerBase[_0x384a4b(0x2fd)][_0x384a4b(0x283)]=function(){const _0x400595=_0x384a4b;VisuMZ[_0x400595(0x19a)][_0x400595(0x285)][_0x400595(0x20b)](this);if(this['isEnemy']())$gameTroop['clearMultiLayerHpGaugeMembers']();},VisuMZ[_0x384a4b(0x19a)]['Game_BattlerBase_appear']=Game_BattlerBase[_0x384a4b(0x2fd)][_0x384a4b(0x21c)],Game_BattlerBase[_0x384a4b(0x2fd)]['appear']=function(){const _0x7743ca=_0x384a4b;VisuMZ['MultiLayerHpGauge'][_0x7743ca(0x1df)]['call'](this);if(this[_0x7743ca(0x214)]())$gameTroop[_0x7743ca(0x15e)]();},Game_Enemy[_0x384a4b(0x2e6)]={'showDefault':VisuMZ[_0x384a4b(0x19a)]['Settings'][_0x384a4b(0x10f)][_0x384a4b(0x1c2)]??![],'persist':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x10f)][_0x384a4b(0x1f8)]??!![],'defaultLayers':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x10f)][_0x384a4b(0x13e)]??0x1,'bgColor1':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)][_0x384a4b(0x10f)][_0x384a4b(0x1e3)]??0x13,'bgColor2':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)][_0x384a4b(0x10f)][_0x384a4b(0x216)]??0x12,'borderColor':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)]['Defaults']['borderColor']??0x2,'borderthickness':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x10f)]['borderthickness']??0x2},Game_Enemy[_0x384a4b(0x2fd)][_0x384a4b(0x240)]=function(){const _0x3e1c72=_0x384a4b;if(!this[_0x3e1c72(0x1e0)]())return![];return this['isAppeared']()&&this['meetsMultiLayerGaugeLifeState']()&&this[_0x3e1c72(0x10c)]();},Game_Enemy[_0x384a4b(0x2fd)][_0x384a4b(0x10c)]=function(){const _0x161de7=_0x384a4b;if(this[_0x161de7(0x26b)]!==undefined)return this[_0x161de7(0x26b)];this[_0x161de7(0x26b)]=Game_Enemy[_0x161de7(0x2e6)]['showDefault'];const _0x26c75e=VisuMZ[_0x161de7(0x19a)][_0x161de7(0x1de)],_0x1661f4=this[_0x161de7(0x1e0)]()['note']||'';if(_0x1661f4['match'](_0x26c75e[_0x161de7(0x251)])){if('HLoSF'!==_0x161de7(0x156))this['_canShowMultiLayerHpGauge']=!![];else{const _0x15b391=this[_0x161de7(0x1d8)]();this[_0x161de7(0x133)]=_0x15b391;const _0x343959=_0x2a4509[_0x161de7(0x10b)][_0x161de7(0x103)];this[_0x161de7(0x1d7)]?(this[_0x161de7(0x1d7)]['clear'](),this[_0x161de7(0x1d7)][_0x161de7(0x1e7)](_0x15b391,_0x343959),this[_0x161de7(0x2a1)]=_0x15b391,this[_0x161de7(0x275)]=_0x343959,this[_0x161de7(0x1c1)](),this[_0x161de7(0x2df)]()):this[_0x161de7(0x1d7)]=new _0x483dab(_0x15b391,_0x343959),this[_0x161de7(0x27c)]=_0x18a231;}}else{if(_0x1661f4['match'](_0x26c75e[_0x161de7(0x2f8)])){if(_0x161de7(0x252)!==_0x161de7(0x1b6))this[_0x161de7(0x26b)]=!![];else{_0x8dbf42['MultiLayerHpGauge']['Window_OTB_TurnOrder_updatePosition']['call'](this);if(_0x2c51e6[_0x161de7(0x2b5)][_0x161de7(0x1d3)]!==_0x161de7(0x2c7))return;const _0x2f505a=_0xc3a78c[_0x161de7(0x222)]();if(_0x2f505a<=0x0)return;const _0x4c8053=_0x2b432b['MultiLayerHpGauge']['Compatibility'][_0x161de7(0x2b6)],_0x3aee04=_0x4c8053[_0x161de7(0x11f)];let _0x3d040e=_0x3aee04*_0x2f505a;const _0x531624=_0x48e3c9[_0x161de7(0x13d)][_0x161de7(0x1a9)];_0x531624&&_0x531624[_0x161de7(0x172)]&&_0x421178['Settings'][_0x161de7(0x247)]?_0x3d040e+=_0x4c8053[_0x161de7(0x219)]:_0x3d040e+=_0x4c8053['normalOffsetY'],this['y']+=_0x3d040e;}}else{if(_0x1661f4[_0x161de7(0x163)](_0x26c75e[_0x161de7(0x27a)]))this['_canShowMultiLayerHpGauge']=!![];else{if(_0x1661f4[_0x161de7(0x163)](_0x26c75e[_0x161de7(0x147)]))_0x161de7(0x2b4)===_0x161de7(0x2c0)?this[_0x161de7(0x26b)]=!![]:this[_0x161de7(0x26b)]=!![];else{if(_0x1661f4[_0x161de7(0x163)](_0x26c75e[_0x161de7(0x196)]))this[_0x161de7(0x26b)]=!![];else{if(_0x1661f4[_0x161de7(0x163)](_0x26c75e[_0x161de7(0x1cb)])){if(_0x161de7(0x188)!==_0x161de7(0x188)){const _0x9fc17d=this[_0x161de7(0x23c)][_0x161de7(0x16b)][_0x161de7(0x21f)](_0xfe653=>_0xfe653[_0x161de7(0x14c)]&&_0xfe653['opacity']<=0x0);for(const _0x31fc89 of _0x9fc17d){this['_multiLayerHpGaugeContainer'][_0x161de7(0x2de)](_0x31fc89),_0x31fc89[_0x161de7(0x272)]();}}else this['_canShowMultiLayerHpGauge']=!![];}else{if(_0x1661f4[_0x161de7(0x163)](_0x26c75e[_0x161de7(0x2bc)]))this[_0x161de7(0x26b)]=!![];else{if(_0x1661f4[_0x161de7(0x163)](_0x26c75e[_0x161de7(0x144)]))_0x161de7(0x1c3)==='lSVft'?this[_0x161de7(0x26b)]=!![]:(this[_0x161de7(0x1f6)](),this[_0x161de7(0x289)]());else _0x1661f4[_0x161de7(0x163)](_0x26c75e[_0x161de7(0x118)])&&(_0x161de7(0x2a7)===_0x161de7(0x239)?this[_0x161de7(0x26b)]=!![]:this['_canShowMultiLayerHpGauge']=![]);}}}}}}}return this[_0x161de7(0x26b)];},VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x1e9)]=Game_Enemy['prototype'][_0x384a4b(0x20d)],Game_Enemy[_0x384a4b(0x2fd)]['transform']=function(_0x6b470f){const _0xee6728=_0x384a4b;VisuMZ[_0xee6728(0x19a)][_0xee6728(0x1e9)]['call'](this,_0x6b470f),this[_0xee6728(0x26b)]=undefined,this[_0xee6728(0x10c)](),$gameTroop[_0xee6728(0x15e)]();},Game_Enemy[_0x384a4b(0x2fd)]['meetsMultiLayerGaugeLifeState']=function(){const _0x2316d5=_0x384a4b;return this[_0x2316d5(0x202)]()?!![]:_0x2316d5(0x1eb)==='TnCJh'?_0x4a2f04[_0x2316d5(0x2fd)][_0x2316d5(0x14f)]['call'](this):!this['isDead']();},Game_Enemy[_0x384a4b(0x2fd)][_0x384a4b(0x202)]=function(){const _0x134264=_0x384a4b,_0x5d41d6=VisuMZ['MultiLayerHpGauge']['RegExp'],_0x37e170=this[_0x134264(0x1e0)]()[_0x134264(0x261)]||'';if(_0x37e170['match'](_0x5d41d6['persistMultiLayerGauge']))return!![];else{if(_0x37e170[_0x134264(0x163)](_0x5d41d6[_0x134264(0x27a)]))return![];}return Game_Enemy['MULTI_LAYER_HP_GAUGE'][_0x134264(0x1f8)];},Game_Enemy['prototype'][_0x384a4b(0x1f2)]=function(){const _0x5e87a8=_0x384a4b;if(this[_0x5e87a8(0x24a)]!==undefined)return this[_0x5e87a8(0x24a)];this['_multiLayerHpGaugeBgColorData']={'bgColor1':Game_Enemy['MULTI_LAYER_HP_GAUGE'][_0x5e87a8(0x1e3)],'bgColor2':Game_Enemy[_0x5e87a8(0x2e6)]['bgColor2']};const _0x2f3285=VisuMZ[_0x5e87a8(0x19a)]['RegExp'],_0x5e5ba4=this[_0x5e87a8(0x1e0)]()[_0x5e87a8(0x261)]||'';if(_0x5e5ba4['match'](_0x2f3285[_0x5e87a8(0x196)])){const _0x133ed4=String(RegExp['$1'])[_0x5e87a8(0x141)](',')[_0x5e87a8(0x108)](_0x3c33a7=>_0x3c33a7['trim']());this[_0x5e87a8(0x24a)][_0x5e87a8(0x1e3)]=_0x133ed4[0x0],this[_0x5e87a8(0x24a)][_0x5e87a8(0x216)]=_0x133ed4[0x1]||_0x133ed4[0x0];}return this[_0x5e87a8(0x24a)];},Game_Enemy['prototype'][_0x384a4b(0x11a)]=function(){const _0x5f29db=_0x384a4b;this[_0x5f29db(0x24a)]=undefined,this[_0x5f29db(0x1f2)]();},Game_Enemy[_0x384a4b(0x2fd)][_0x384a4b(0x1b3)]=function(){const _0x1f08a1=_0x384a4b;return this[_0x1f08a1(0x1f2)]()[_0x1f08a1(0x1e3)];},Game_Enemy['prototype'][_0x384a4b(0x206)]=function(){const _0x4de3b0=_0x384a4b;return this[_0x4de3b0(0x1f2)]()[_0x4de3b0(0x216)];},Game_Enemy[_0x384a4b(0x2fd)][_0x384a4b(0x2c9)]=function(){const _0x40efac=_0x384a4b;if(this[_0x40efac(0x29b)]!==undefined)return this[_0x40efac(0x29b)];this[_0x40efac(0x29b)]={'color':Game_Enemy['MULTI_LAYER_HP_GAUGE'][_0x40efac(0x1cb)],'thick':Game_Enemy[_0x40efac(0x2e6)][_0x40efac(0x116)]};const _0x2b0952=VisuMZ[_0x40efac(0x19a)][_0x40efac(0x1de)],_0x41655f=this['enemy']()['note']||'';return _0x41655f[_0x40efac(0x163)](_0x2b0952[_0x40efac(0x1cb)])&&(this[_0x40efac(0x29b)][_0x40efac(0x26f)]=String(RegExp['$1'])[_0x40efac(0x231)]()),_0x41655f[_0x40efac(0x163)](_0x2b0952['borderThick'])&&(_0x40efac(0x1f3)===_0x40efac(0x1f3)?this[_0x40efac(0x29b)][_0x40efac(0x295)]=Math['max'](Number(RegExp['$1']),0x1):this[_0x40efac(0x26b)]=!![]),this[_0x40efac(0x29b)];},Game_Enemy[_0x384a4b(0x2fd)][_0x384a4b(0x11a)]=function(){const _0x1e8d52=_0x384a4b;this[_0x1e8d52(0x29b)]=undefined,this[_0x1e8d52(0x2c9)]();},Game_Enemy['prototype']['getMultiLayerHpGaugeBorderColor']=function(){const _0x2d4fce=_0x384a4b;return this['getMultiLayerHpGaugeBorderData']()[_0x2d4fce(0x26f)];},Game_Enemy[_0x384a4b(0x2fd)][_0x384a4b(0x22e)]=function(){const _0x123177=_0x384a4b;return this[_0x123177(0x2c9)]()['thick'];},Game_Enemy[_0x384a4b(0x2fd)]['getMultiLayerHpGaugeGraphicType']=function(){const _0x15fc09=_0x384a4b;if(this[_0x15fc09(0x296)]()!=='')return'face';else{if(Imported[_0x15fc09(0x12f)]&&this[_0x15fc09(0x25c)]())return _0x15fc09(0x2fe);else return $gameSystem[_0x15fc09(0x284)]()?_0x15fc09(0x148)!==_0x15fc09(0x1ec)?_0x15fc09(0x28e):0x0:_0x15fc09(0x263)===_0x15fc09(0x1f1)?this[_0x15fc09(0x24a)]:_0x15fc09(0x1e0);}},Game_Enemy[_0x384a4b(0x2fd)][_0x384a4b(0x2c3)]=function(){const _0x405cb5=_0x384a4b;if(this[_0x405cb5(0x107)]!==undefined){if(_0x405cb5(0x1a0)!==_0x405cb5(0x2a4))return this[_0x405cb5(0x107)];else{const _0x3fa8d6=this[_0x405cb5(0x2d6)]['innerWidth'];this[_0x405cb5(0x2d6)][_0x405cb5(0x2ba)](this['_battler'],0x0,0x0,_0x3fa8d6);}}this[_0x405cb5(0x107)]={'name':'','index':0x0};const _0x27d320=VisuMZ[_0x405cb5(0x19a)][_0x405cb5(0x1de)],_0x150a06=this['enemy']()['note']||'';return _0x150a06[_0x405cb5(0x163)](_0x27d320[_0x405cb5(0x147)])&&(this['_multiLayerHpGaugeFaceGraphicData']={'name':String(RegExp['$1'])[_0x405cb5(0x231)](),'index':Math[_0x405cb5(0x162)](Number(RegExp['$2']),0x0)}),this[_0x405cb5(0x107)];},Game_Enemy[_0x384a4b(0x2fd)]['updateMultiLayerHpGaugeFaceGraphicData']=function(){const _0x5d0d50=_0x384a4b;this[_0x5d0d50(0x107)]=undefined,this[_0x5d0d50(0x2c3)]();},Game_Enemy['prototype'][_0x384a4b(0x296)]=function(){const _0x10957f=_0x384a4b;return this[_0x10957f(0x2c3)]()[_0x10957f(0x136)];},Game_Enemy['prototype']['getMultiLayerHpGaugeFaceIndex']=function(){const _0x512c61=_0x384a4b;return this[_0x512c61(0x2c3)]()[_0x512c61(0x142)];},Game_Enemy[_0x384a4b(0x2fd)][_0x384a4b(0x229)]=function(){const _0x4f68bc=_0x384a4b;if(this[_0x4f68bc(0x279)]!==undefined){if(_0x4f68bc(0x10e)===_0x4f68bc(0x10e))return this[_0x4f68bc(0x279)];else{if(!_0x50346a['MULTI_LAYER_HP_GAUGE'][_0x4f68bc(0x137)])return;if(this[_0x4f68bc(0x1e2)]===_0x390c6e)return;let _0x8a3538=this['_multiLayerHpGaugePositionY'];const _0xb4142d=_0x26a552[_0x4f68bc(0x222)]();_0xb4142d>0x0&&(_0x8a3538+=_0x28bdc2['MULTI_LAYER_HP_GAUGE'][_0x4f68bc(0x1ba)]*_0xb4142d),this['y']=_0x8a3538;}}this['_multiLayerHpGaugeTotalLayers']=Game_Enemy[_0x4f68bc(0x2e6)][_0x4f68bc(0x13e)];const _0x5977e9=VisuMZ[_0x4f68bc(0x19a)][_0x4f68bc(0x1de)],_0x47f74b=this[_0x4f68bc(0x1e0)]()[_0x4f68bc(0x261)]||'';return _0x47f74b[_0x4f68bc(0x163)](_0x5977e9[_0x4f68bc(0x144)])&&('gqHgy'===_0x4f68bc(0x29d)?_0x26c46e+=_0x2a1361['normalOffsetY']:this[_0x4f68bc(0x279)]=Number(RegExp['$1'])[_0x4f68bc(0x1c9)](0x1,0xa)),this[_0x4f68bc(0x279)];},Game_Enemy['prototype'][_0x384a4b(0x28c)]=function(){const _0x3eee4e=_0x384a4b,_0x31f645=this[_0x3eee4e(0x229)]();if(_0x31f645<=0x1)return 0x1;const _0x3a7155=this['mhp']/_0x31f645;let _0x208e56=this['hp']/_0x3a7155;return _0x208e56%0x1===0x0?_0x208e56+=0x1:_0x208e56=Math[_0x3eee4e(0x1aa)](_0x208e56),_0x208e56;},VisuMZ['MultiLayerHpGauge']['Game_Troop_setup']=Game_Troop[_0x384a4b(0x2fd)][_0x384a4b(0x16d)],Game_Troop[_0x384a4b(0x2fd)][_0x384a4b(0x16d)]=function(_0x4f13be){const _0x53cedb=_0x384a4b;VisuMZ[_0x53cedb(0x19a)]['Game_Troop_setup'][_0x53cedb(0x20b)](this,_0x4f13be),this[_0x53cedb(0x15e)]();},Game_Troop[_0x384a4b(0x2fd)][_0x384a4b(0x1e6)]=function(){const _0x13ec33=_0x384a4b;if(this[_0x13ec33(0x232)]!==undefined)return this[_0x13ec33(0x232)];return this[_0x13ec33(0x232)]=this[_0x13ec33(0x1da)]()[_0x13ec33(0x21f)](_0x24501e=>_0x24501e&&_0x24501e[_0x13ec33(0x240)]()),this['_cache_visibleMultiLayerHpGaugeMembers'];},Game_Troop[_0x384a4b(0x2fd)][_0x384a4b(0x15e)]=function(){const _0x494b80=_0x384a4b;this['_cache_visibleMultiLayerHpGaugeMembers']=undefined,this[_0x494b80(0x1e6)]();},Game_Troop[_0x384a4b(0x2fd)][_0x384a4b(0x1f5)]=function(){const _0x51fabb=_0x384a4b;return this[_0x51fabb(0x1e6)]()[_0x51fabb(0x181)];},Game_Troop['prototype'][_0x384a4b(0x1e8)]=function(){const _0x3554e8=_0x384a4b;return Math[_0x3554e8(0x162)](this['totalVisibleMultiLayerHpGauges'](),0x1);},Game_Troop[_0x384a4b(0x2fd)][_0x384a4b(0x222)]=function(){const _0x3e6d41=_0x384a4b,_0x49dd4a=this[_0x3e6d41(0x1f5)](),_0x3c2e9e=Scene_Battle[_0x3e6d41(0x2e6)][_0x3e6d41(0x15c)];return Math[_0x3e6d41(0x1aa)](_0x49dd4a/_0x3c2e9e);},Scene_Battle[_0x384a4b(0x2e6)]={'maxWidth':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)]['General'][_0x384a4b(0x125)]??0x330,'perRow':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x22d)][_0x384a4b(0x15c)]??0x4,'rowSpacing':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)][_0x384a4b(0x22d)][_0x384a4b(0x26d)]??0x4,'fadeSpeed':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)][_0x384a4b(0x22d)][_0x384a4b(0x16a)]??0x18},VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x1cd)]=Scene_Battle[_0x384a4b(0x2fd)]['createAllWindows'],Scene_Battle[_0x384a4b(0x2fd)][_0x384a4b(0x268)]=function(){const _0x4af773=_0x384a4b;this[_0x4af773(0x24c)](),VisuMZ[_0x4af773(0x19a)]['Scene_Battle_createAllWindows'][_0x4af773(0x20b)](this);},Scene_Battle['prototype'][_0x384a4b(0x24c)]=function(){const _0x525e4a=_0x384a4b;this[_0x525e4a(0x1f6)](),this[_0x525e4a(0x289)]();},Scene_Battle[_0x384a4b(0x2fd)]['createMultiLayerHpGaugeContainer']=function(){const _0x2478d6=_0x384a4b;this[_0x2478d6(0x23c)]=new Sprite(),this['addWindow'](this['_multiLayerHpGaugeContainer']);const _0x5c853d=Scene_Battle[_0x2478d6(0x2e6)][_0x2478d6(0x125)],_0x5469c9=Math[_0x2478d6(0x2d2)]((Graphics[_0x2478d6(0x29f)]-_0x5c853d)/0x2);this[_0x2478d6(0x23c)]['x']=_0x5469c9;},Scene_Battle[_0x384a4b(0x2fd)]['createMultiLayerHpGaugeSprites']=function(){const _0x9de712=_0x384a4b,_0x196ee6=$gameTroop[_0x9de712(0x1da)]();for(const _0x33a0e1 of _0x196ee6){if(_0x9de712(0x238)===_0x9de712(0x1ee))_0x3d3dff=_0x5baeee[_0x9de712(0x248)](_0x2580d1);else{if(!_0x33a0e1)continue;this[_0x9de712(0x17d)](_0x33a0e1);}}},Scene_Battle[_0x384a4b(0x2fd)][_0x384a4b(0x17d)]=function(_0x274f81){const _0xac96f2=_0x384a4b,_0x5daf3e=new Sprite_MultiLayerHpContainer(_0x274f81);this[_0xac96f2(0x23c)][_0xac96f2(0xff)](_0x5daf3e);},VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x19f)]=Scene_Battle[_0x384a4b(0x2fd)][_0x384a4b(0x230)],Scene_Battle[_0x384a4b(0x2fd)][_0x384a4b(0x230)]=function(){const _0x361b2a=_0x384a4b;VisuMZ[_0x361b2a(0x19a)][_0x361b2a(0x19f)]['call'](this),this[_0x361b2a(0x2ec)]();},Scene_Battle[_0x384a4b(0x2fd)][_0x384a4b(0x2ec)]=function(){const _0x5bdfc4=_0x384a4b;this['updateMultiLayerHpGaugeContainerEndBattle'](),this[_0x5bdfc4(0x262)]();},Scene_Battle[_0x384a4b(0x2fd)]['updateMultiLayerHpGaugeContainerEndBattle']=function(){const _0x16042b=_0x384a4b;(BattleManager['_phase']==='battleEnd'||BattleManager[_0x16042b(0x12b)])&&this[_0x16042b(0x23c)]&&(this['_multiLayerHpGaugeContainer'][_0x16042b(0x105)]-=Scene_Battle[_0x16042b(0x2e6)][_0x16042b(0x244)]);},Scene_Battle[_0x384a4b(0x2fd)][_0x384a4b(0x262)]=function(){const _0x187848=_0x384a4b,_0x206fa9=this[_0x187848(0x23c)][_0x187848(0x16b)][_0x187848(0x21f)](_0x296366=>_0x296366[_0x187848(0x14c)]&&_0x296366['opacity']<=0x0);for(const _0x56d0e9 of _0x206fa9){this['_multiLayerHpGaugeContainer']['removeChild'](_0x56d0e9),_0x56d0e9[_0x187848(0x272)]();}},VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2c6)]=Scene_Battle[_0x384a4b(0x2fd)][_0x384a4b(0x193)],Scene_Battle[_0x384a4b(0x2fd)][_0x384a4b(0x193)]=function(){const _0x3ffa69=_0x384a4b;VisuMZ['MultiLayerHpGauge'][_0x3ffa69(0x2c6)][_0x3ffa69(0x20b)](this);if(this[_0x3ffa69(0x26a)])this[_0x3ffa69(0x26a)][_0x3ffa69(0x26e)]();};function Sprite_MultiLayerHpContainer(){this['initialize'](...arguments);}Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)]=Object[_0x384a4b(0x2a9)](Sprite_Clickable['prototype']),Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)]['constructor']=Sprite_MultiLayerHpContainer,Sprite_MultiLayerHpContainer[_0x384a4b(0x10b)]={'bufferX':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)]['General'][_0x384a4b(0x145)]??0x4,'checkFrequency':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x22d)][_0x384a4b(0x2ee)]??0x14,'faceSize':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x22d)][_0x384a4b(0x103)]??0x40,'fadeSpeed':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x22d)][_0x384a4b(0x2bd)]??0x10,'repositionForHelp':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x22d)]['repositionForHelp']??!![],'repositionHelpY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x22d)][_0x384a4b(0x194)]??0x6c,'stateTooltipsEnable':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x22d)][_0x384a4b(0x215)]??!![],'offset':{'x':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)][_0x384a4b(0x22d)][_0x384a4b(0x265)]??0x0,'y':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x22d)][_0x384a4b(0x143)]??0x0}},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)][_0x384a4b(0x18e)]=function(_0x109a6e){const _0x41325a=_0x384a4b;this[_0x41325a(0x171)]=_0x109a6e,Sprite_Clickable[_0x41325a(0x2fd)][_0x41325a(0x18e)][_0x41325a(0x20b)](this),this[_0x41325a(0x105)]=0x0,this[_0x41325a(0x1ae)](),this['createBattlerGaugeSprite'](),this[_0x41325a(0x1cf)](),this[_0x41325a(0x2f4)]();},Sprite_MultiLayerHpContainer['prototype'][_0x384a4b(0x1ae)]=function(){const _0x10ae97=_0x384a4b;if(!Sprite_MultiLayerHpFace[_0x10ae97(0x10b)][_0x10ae97(0x2b7)])return;const _0x5119a6=new Sprite_MultiLayerHpFace(this[_0x10ae97(0x171)]);this[_0x10ae97(0xff)](_0x5119a6),this[_0x10ae97(0x165)]=_0x5119a6;},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)][_0x384a4b(0x103)]=function(){const _0x3d431c=_0x384a4b;if(Sprite_MultiLayerHpFace[_0x3d431c(0x10b)]['show']){if(_0x3d431c(0x174)==='riEhs')return Sprite_MultiLayerHpContainer[_0x3d431c(0x10b)][_0x3d431c(0x103)];else{const _0x105688=_0x3d431c(0x15b)[_0x3d431c(0x1a8)](_0x443057[_0x3d431c(0x1c9)](0x2,0xa)),_0x4a2aae=_0x52fc67[_0x3d431c(0x2e6)][_0x3d431c(0x254)][_0x105688];return this['getColor'](_0x4a2aae);}}else{if('cYjuQ'!==_0x3d431c(0x2c2))return 0x0;else _0x46b724['MultiLayerHpGauge']['Game_Battler_onTurnEnd'][_0x3d431c(0x20b)](this),this['requestMultiLayerHpGaugeStateUpdate']();}},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)][_0x384a4b(0x1b4)]=function(){const _0x87f6ac=_0x384a4b;if(!Sprite_MultiLayerHpGauge['SETTINGS'][_0x87f6ac(0x2b7)])return;const _0x296c24=new Sprite_MultiLayerHpGauge(this[_0x87f6ac(0x171)]);this[_0x87f6ac(0xff)](_0x296c24),this[_0x87f6ac(0x2ed)]=_0x296c24;const _0x524451=this['faceSize'](),_0x32c365=Sprite_MultiLayerHpContainer[_0x87f6ac(0x10b)]['bufferX'],_0x32a6d5=Sprite_MultiLayerHpGauge[_0x87f6ac(0x10b)]['offset'];_0x296c24['x']=_0x524451,_0x296c24['x']+=_0x32c365,_0x296c24['x']+=_0x32a6d5['x'],_0x296c24['y']=0x0,_0x296c24['y']+=_0x32a6d5['y'],_0x296c24[_0x87f6ac(0x16d)](this[_0x87f6ac(0x171)],'hp'),this[_0x87f6ac(0x1c1)]();},Sprite_MultiLayerHpContainer['prototype'][_0x384a4b(0x1dc)]=function(){const _0x45873a=_0x384a4b,_0x314815=this['faceSize'](),_0x3d45cf=Sprite_MultiLayerHpContainer[_0x45873a(0x10b)][_0x45873a(0x145)],_0x17639c=Scene_Battle[_0x45873a(0x2e6)][_0x45873a(0x125)],_0x294881=Math[_0x45873a(0x1b2)]($gameTroop['totalVisibleMultiLayerHpGaugeCount'](),Scene_Battle[_0x45873a(0x2e6)]['perRow']);return Math['ceil'](_0x17639c/_0x294881)-_0x3d45cf*0x2-_0x314815;},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)]['updateGaugeWidth']=function(){const _0x5959c5=_0x384a4b;if(!this[_0x5959c5(0x2ed)])return;const _0x19f270=this['calcBitmapWidth']();this[_0x5959c5(0x2ed)]['setWidth'](_0x19f270);},Sprite_MultiLayerHpContainer['prototype'][_0x384a4b(0x1cf)]=function(){const _0x49fb8e=_0x384a4b;if(!Sprite_MultiLayerHpStates['SETTINGS'][_0x49fb8e(0x2b7)])return;const _0x101eba=new Sprite_MultiLayerHpStates(this[_0x49fb8e(0x171)]);this['addChild'](_0x101eba),this[_0x49fb8e(0x178)]=_0x101eba;const _0x5a1675=this[_0x49fb8e(0x103)](),_0x24eecb=Sprite_MultiLayerHpContainer['SETTINGS'][_0x49fb8e(0x145)],_0x2d17ef=Sprite_MultiLayerHpStates['SETTINGS'][_0x49fb8e(0x274)];_0x101eba['x']=_0x5a1675,_0x101eba['x']+=_0x24eecb,_0x101eba['x']+=_0x2d17ef['x'],_0x101eba['y']=0x0,_0x101eba['y']+=_0x2d17ef['y'],this[_0x49fb8e(0x2df)]();},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)]['updateStatesWidth']=function(){const _0x1265b0=_0x384a4b;if(!this['_statesSprite'])return;const _0x3d7a32=this[_0x1265b0(0x1dc)]();this[_0x1265b0(0x178)][_0x1265b0(0x20a)](_0x3d7a32);},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)][_0x384a4b(0x2f4)]=function(){const _0x189656=_0x384a4b;this[_0x189656(0x233)]!==$gameTroop[_0x189656(0x1e8)]()&&(this['setTotalGauges'](),this[_0x189656(0x2eb)]()),this[_0x189656(0x27c)]!==$gameTroop[_0x189656(0x1e6)]()[_0x189656(0x1dd)](this[_0x189656(0x171)])&&(this[_0x189656(0x183)](),this['updatePositionX']()),this[_0x189656(0x2c5)]=!![];},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)][_0x384a4b(0x2d5)]=function(){const _0x226e00=_0x384a4b;this['_lastTotalVisibleGauges']=$gameTroop[_0x226e00(0x1e8)]();},Sprite_MultiLayerHpContainer['prototype'][_0x384a4b(0x1d8)]=function(){const _0x203d78=_0x384a4b,_0x52f9fb=Scene_Battle[_0x203d78(0x2e6)][_0x203d78(0x125)],_0x284eb3=Math[_0x203d78(0x1b2)](this[_0x203d78(0x233)],Scene_Battle[_0x203d78(0x2e6)][_0x203d78(0x15c)]);return Math[_0x203d78(0x2d2)](_0x52f9fb/_0x284eb3);},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)]['setBitmapSize']=function(){const _0x27b51b=_0x384a4b,_0xe54843=this[_0x27b51b(0x1d8)]();this[_0x27b51b(0x133)]=_0xe54843;const _0x5910d0=Sprite_MultiLayerHpContainer['SETTINGS']['faceSize'];if(this[_0x27b51b(0x1d7)]){if(_0x27b51b(0x21b)!=='VmSyp')return _0x34ab8d[_0x27b51b(0x1bd)]();else this[_0x27b51b(0x1d7)]['clear'](),this[_0x27b51b(0x1d7)][_0x27b51b(0x1e7)](_0xe54843,_0x5910d0),this[_0x27b51b(0x2a1)]=_0xe54843,this[_0x27b51b(0x275)]=_0x5910d0,this['updateGaugeWidth'](),this['updateStatesWidth']();}else'pLWpW'!==_0x27b51b(0x1af)?this[_0x27b51b(0x1d7)]=new Bitmap(_0xe54843,_0x5910d0):this[_0x27b51b(0x27c)]=_0x1173fb[_0x27b51b(0x1e6)]()[_0x27b51b(0x1dd)](this[_0x27b51b(0x171)]);this[_0x27b51b(0x27c)]=undefined;},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)][_0x384a4b(0x183)]=function(){const _0x174321=_0x384a4b;this[_0x174321(0x27c)]=$gameTroop[_0x174321(0x1e6)]()[_0x174321(0x1dd)](this[_0x174321(0x171)]);},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)][_0x384a4b(0x230)]=function(){const _0x412454=_0x384a4b;Sprite_Clickable[_0x412454(0x2fd)][_0x412454(0x230)][_0x412454(0x20b)](this);if(!this[_0x412454(0x171)])return;Graphics['frameCount']%Sprite_MultiLayerHpContainer[_0x412454(0x10b)][_0x412454(0x2ee)]===0x0&&this[_0x412454(0x1d1)](),this[_0x412454(0x151)](),this['updateOpacity'](),this[_0x412454(0x20e)]();},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)][_0x384a4b(0x167)]=function(){const _0x1a226a=_0x384a4b;if(this[_0x1a226a(0x27c)]<0x0){if('cdmQI'===_0x1a226a(0x149))return Graphics[_0x1a226a(0x2a1)]*0xa;else this[_0x1a226a(0x1d7)][_0x1a226a(0x1e7)](_0x2cf86d,_0x42280a),this[_0x1a226a(0x2a1)]=_0x1760d1,this[_0x1a226a(0x275)]=_0x4fbde8;}const _0x74ba15=Scene_Battle[_0x1a226a(0x2e6)][_0x1a226a(0x125)],_0x583f8a=Math['min'](this[_0x1a226a(0x233)],Scene_Battle['MULTI_LAYER_HP_GAUGE']['perRow']),_0x3e92ae=Math[_0x1a226a(0x1aa)](_0x74ba15/_0x583f8a),_0x1ec2a4=this[_0x1a226a(0x27c)]%Scene_Battle[_0x1a226a(0x2e6)][_0x1a226a(0x15c)];let _0x333cbf=_0x3e92ae*_0x1ec2a4;return _0x333cbf+=Sprite_MultiLayerHpContainer[_0x1a226a(0x10b)][_0x1a226a(0x274)]['x'],_0x333cbf;},Sprite_MultiLayerHpContainer['prototype'][_0x384a4b(0x1a1)]=function(){const _0x3313b5=_0x384a4b;if(this[_0x3313b5(0x14c)])return;if(this['_lastIndex']===undefined)return;if(this['_lastIndex']<0x0)return this['x']=Graphics['width']*0xa;const _0x4be5a6=this[_0x3313b5(0x167)]();this['_lastPositionX']=_0x4be5a6,this['x']=_0x4be5a6;},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)][_0x384a4b(0x242)]=function(){const _0x55ff03=_0x384a4b;if(this[_0x55ff03(0x27c)]<0x0){if(_0x55ff03(0x200)!==_0x55ff03(0x200)){if(!this[_0x55ff03(0x178)])return;const _0x268f59=this[_0x55ff03(0x1dc)]();this[_0x55ff03(0x178)][_0x55ff03(0x20a)](_0x268f59);}else return Graphics[_0x55ff03(0x275)]*0xa;}const _0x52a8d7=Sprite_MultiLayerHpContainer[_0x55ff03(0x10b)],_0x42a47f=Math['floor'](this[_0x55ff03(0x27c)]/Scene_Battle[_0x55ff03(0x2e6)][_0x55ff03(0x15c)]);let _0x1b3259=_0x42a47f*(0x4+_0x52a8d7['faceSize']);return _0x1b3259+=Sprite_MultiLayerHpContainer['SETTINGS'][_0x55ff03(0x274)]['y'],_0x1b3259;},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)][_0x384a4b(0x151)]=function(){const _0x399f17=_0x384a4b;if(this[_0x399f17(0x14c)])return;if(this[_0x399f17(0x27c)]===undefined)return;if(this[_0x399f17(0x27c)]<0x0)return this['y']=Graphics[_0x399f17(0x275)]*0xa;const _0x5af120=Sprite_MultiLayerHpContainer['SETTINGS'];let _0x4087b1=this[_0x399f17(0x242)]();this[_0x399f17(0x2ae)]=_0x4087b1;const _0x49d5de=SceneManager['_scene']['_helpWindow'];_0x49d5de&&_0x49d5de[_0x399f17(0x172)]&&_0x5af120[_0x399f17(0x154)]&&(_0x4087b1+=_0x5af120[_0x399f17(0x194)]),this['y']=_0x4087b1;},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)][_0x384a4b(0x299)]=function(){const _0x58cfee=_0x384a4b,_0x28e97f=Sprite_MultiLayerHpContainer[_0x58cfee(0x10b)][_0x58cfee(0x244)];this[_0x58cfee(0x105)]+=this[_0x58cfee(0x14c)]?-_0x28e97f:_0x28e97f;},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)][_0x384a4b(0x20e)]=function(){const _0x21e794=_0x384a4b;if(!this[_0x21e794(0x171)])return;const _0x1aae7e=SceneManager['_scene']['_spriteset'];if(!_0x1aae7e)return;const _0x3ad368=_0x1aae7e[_0x21e794(0x1ca)](this['_battler']);if(!_0x3ad368)return;const _0x25de0f=_0x3ad368[_0x21e794(0x228)]();if(!_0x25de0f)return;this[_0x21e794(0x2da)](_0x25de0f['_blendColor']);},Sprite_MultiLayerHpContainer['prototype'][_0x384a4b(0x1d1)]=function(){const _0x49da3c=_0x384a4b;if(!this[_0x49da3c(0x2c5)])return;if(this[_0x49da3c(0x233)]!==$gameTroop[_0x49da3c(0x1e8)]()){this['setTotalGauges']();if(this['_lastWidth']!==this[_0x49da3c(0x1d8)]())return this[_0x49da3c(0x1a4)]();}if(this[_0x49da3c(0x27c)]!==$gameTroop[_0x49da3c(0x1e6)]()[_0x49da3c(0x1dd)](this[_0x49da3c(0x171)])){if(_0x49da3c(0x29a)!=='mNCQU'){_0x4db577['MultiLayerHpGauge'][_0x49da3c(0x150)][_0x49da3c(0x20b)](this);if(_0x1139d2[_0x49da3c(0x2b5)][_0x49da3c(0x1d3)]!==_0x49da3c(0x2c7))return;const _0x59dfda=_0x242e3b[_0x49da3c(0x222)]();if(_0x59dfda<=0x0)return;const _0x52a19c=_0x320f85[_0x49da3c(0x19a)]['Compatibility'][_0x49da3c(0x25d)],_0x495741=_0x52a19c[_0x49da3c(0x11f)];let _0x5cb839=_0x495741*_0x59dfda;const _0x10e9b5=_0x419e24[_0x49da3c(0x13d)][_0x49da3c(0x1a9)];_0x10e9b5&&_0x10e9b5[_0x49da3c(0x172)]&&_0x1017f3[_0x49da3c(0x2b5)][_0x49da3c(0x247)]?_0x5cb839+=_0x52a19c[_0x49da3c(0x219)]:_0x5cb839+=_0x52a19c['normalOffsetY'],this['y']+=_0x5cb839;}else{this[_0x49da3c(0x183)]();if(this[_0x49da3c(0x157)]!==this[_0x49da3c(0x167)]()||this['_lastPositionY']!==this['calcPositionY']())return this[_0x49da3c(0x1a4)]();}}},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)][_0x384a4b(0x1a4)]=function(){const _0x32c735=_0x384a4b;this['_hold']=!![];for(const _0x2a35d2 of this[_0x32c735(0x16b)]){if(_0x2a35d2)_0x2a35d2['_hold']=!![];}const _0x6a673c=SceneManager[_0x32c735(0x13d)];if(_0x6a673c)_0x6a673c[_0x32c735(0x17d)](this[_0x32c735(0x171)]);},Sprite_MultiLayerHpContainer[_0x384a4b(0x2fd)][_0x384a4b(0x2e1)]=function(){const _0x448667=_0x384a4b;if(this[_0x448667(0x14c)])return null;if(!Sprite_MultiLayerHpContainer['SETTINGS'][_0x448667(0x215)])return null;return this[_0x448667(0x171)];};function Sprite_MultiLayerHpFace(){const _0x1e67c2=_0x384a4b;this[_0x1e67c2(0x18e)](...arguments);}Sprite_MultiLayerHpFace[_0x384a4b(0x2fd)]=Object[_0x384a4b(0x2a9)](Sprite[_0x384a4b(0x2fd)]),Sprite_MultiLayerHpFace[_0x384a4b(0x2fd)][_0x384a4b(0x17b)]=Sprite_MultiLayerHpFace,Sprite_MultiLayerHpFace[_0x384a4b(0x10b)]={'show':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x1fe)][_0x384a4b(0x2b7)]??!![],'drawLetter':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)][_0x384a4b(0x1fe)][_0x384a4b(0x20c)]??!![],'letterFontName':VisuMZ[_0x384a4b(0x19a)]['Settings'][_0x384a4b(0x1fe)][_0x384a4b(0x2b8)]??'','letterFontSize':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)][_0x384a4b(0x1fe)][_0x384a4b(0x2d7)]??0x10},Sprite_MultiLayerHpFace[_0x384a4b(0x2fd)][_0x384a4b(0x18e)]=function(_0x2b6cdb){const _0x203d25=_0x384a4b;this['_battler']=_0x2b6cdb,Sprite[_0x203d25(0x2fd)]['initialize']['call'](this),this['createBgSprite'](),this[_0x203d25(0x287)](),this['createBorderSprite'](),this['createLetterSprite']();},Sprite_MultiLayerHpFace[_0x384a4b(0x2fd)][_0x384a4b(0x25a)]=function(){const _0xeac7b2=_0x384a4b,_0x1db672=Sprite_MultiLayerHpContainer[_0xeac7b2(0x10b)][_0xeac7b2(0x103)];this[_0xeac7b2(0x210)]=new Sprite(),this[_0xeac7b2(0xff)](this[_0xeac7b2(0x210)]),this['_bgSprite'][_0xeac7b2(0x1d7)]=new Bitmap(_0x1db672,_0x1db672),this[_0xeac7b2(0x153)]();},Sprite_MultiLayerHpFace[_0x384a4b(0x2fd)]['createGraphicSprite']=function(){const _0x25fbb0=_0x384a4b,_0x299455=Sprite_MultiLayerHpContainer[_0x25fbb0(0x10b)][_0x25fbb0(0x103)];this[_0x25fbb0(0x1d0)]=new Sprite(),this[_0x25fbb0(0xff)](this[_0x25fbb0(0x1d0)]),this[_0x25fbb0(0x1d0)][_0x25fbb0(0x1d7)]=new Bitmap(_0x299455,_0x299455),this['prepareGraphic']();},Sprite_MultiLayerHpFace[_0x384a4b(0x2fd)][_0x384a4b(0x2cc)]=function(){const _0x3e4326=_0x384a4b,_0x28e09a=Sprite_MultiLayerHpContainer[_0x3e4326(0x10b)][_0x3e4326(0x103)];this[_0x3e4326(0x139)]=new Sprite(),this[_0x3e4326(0xff)](this['_borderSprite']),this['_borderSprite'][_0x3e4326(0x1d7)]=new Bitmap(_0x28e09a,_0x28e09a),this[_0x3e4326(0x249)]();},Sprite_MultiLayerHpFace[_0x384a4b(0x2fd)][_0x384a4b(0x155)]=function(){const _0x533a45=_0x384a4b;if(!Sprite_MultiLayerHpFace[_0x533a45(0x10b)]['drawLetter'])return;const _0x603386=Sprite_MultiLayerHpContainer['SETTINGS'][_0x533a45(0x103)];this[_0x533a45(0x2f5)]=new Sprite(),this['addChild'](this[_0x533a45(0x2f5)]),this['_letterSprite'][_0x533a45(0x1d7)]=new Bitmap(_0x603386,_0x603386),this[_0x533a45(0x266)]();},Sprite_MultiLayerHpFace[_0x384a4b(0x2fd)][_0x384a4b(0x153)]=function(){const _0x5a631f=_0x384a4b,_0x25034b=this[_0x5a631f(0x210)][_0x5a631f(0x1d7)],_0xaa39cc=ColorManager[_0x5a631f(0x269)](this[_0x5a631f(0x171)]['getMultiLayerHpGaugeBgColor1']()),_0x52e2e0=ColorManager[_0x5a631f(0x269)](this[_0x5a631f(0x171)][_0x5a631f(0x206)]()),_0x19ac86=Sprite_MultiLayerHpContainer[_0x5a631f(0x10b)][_0x5a631f(0x103)];_0x25034b[_0x5a631f(0x278)](),_0x25034b[_0x5a631f(0x256)](0x0,0x0,_0x19ac86,_0x19ac86,_0xaa39cc,_0x52e2e0,!![]),_0x25034b['strokeRect'](0x0,0x0,_0x19ac86,_0x19ac86,_0xaa39cc);},Sprite_MultiLayerHpFace[_0x384a4b(0x2fd)][_0x384a4b(0x249)]=function(){const _0x59165a=_0x384a4b,_0x17ee99=this[_0x59165a(0x139)][_0x59165a(0x1d7)],_0xc7e781=_0x59165a(0x164),_0x308d21=ColorManager[_0x59165a(0x269)](this[_0x59165a(0x171)][_0x59165a(0x2f9)]()),_0x41d4e4=this['_battler'][_0x59165a(0x22e)](),_0x3ea98b=Sprite_MultiLayerHpContainer['SETTINGS'][_0x59165a(0x103)];let _0x516a5d=0x0;_0x17ee99[_0x59165a(0x278)](),_0x17ee99[_0x59165a(0x2a2)](_0x516a5d,_0x516a5d,_0x3ea98b-_0x516a5d*0x2,_0x3ea98b-_0x516a5d*0x2,_0xc7e781),_0x516a5d+=0x1,_0x17ee99['fillRect'](_0x516a5d,_0x516a5d,_0x3ea98b-_0x516a5d*0x2,_0x3ea98b-_0x516a5d*0x2,_0x308d21),_0x516a5d+=_0x41d4e4,_0x17ee99[_0x59165a(0x2a2)](_0x516a5d,_0x516a5d,_0x3ea98b-_0x516a5d*0x2,_0x3ea98b-_0x516a5d*0x2,_0xc7e781),_0x516a5d+=0x1,_0x17ee99[_0x59165a(0x170)](_0x516a5d,_0x516a5d,_0x3ea98b-_0x516a5d*0x2,_0x3ea98b-_0x516a5d*0x2);},Sprite_MultiLayerHpFace[_0x384a4b(0x2fd)][_0x384a4b(0x23b)]=function(){const _0x2c6583=_0x384a4b;if(!this[_0x2c6583(0x2f5)])return;const _0x183666=this[_0x2c6583(0x2f5)][_0x2c6583(0x1d7)],_0x5b46a8=this[_0x2c6583(0x2a5)];if(!_0x5b46a8)return;const _0x4b6069=Sprite_MultiLayerHpFace[_0x2c6583(0x10b)],_0x374d36=Sprite_MultiLayerHpContainer[_0x2c6583(0x10b)][_0x2c6583(0x103)];_0x183666['clear']();if(!this['_lastPlural'])return;_0x183666[_0x2c6583(0x23d)]=_0x4b6069['letterFontName']||$gameSystem['mainFontFace'](),_0x183666[_0x2c6583(0x27d)]=_0x4b6069[_0x2c6583(0x2d7)]||0x10,_0x183666['drawText'](_0x5b46a8[_0x2c6583(0x231)](),0x0,_0x374d36/0x2,_0x374d36*0x7/0x8,_0x374d36/0x2,_0x2c6583(0x2f2));},Sprite_MultiLayerHpFace[_0x384a4b(0x2fd)][_0x384a4b(0x2c4)]=function(){const _0x2c7ab2=_0x384a4b;this[_0x2c7ab2(0x2ce)]=this[_0x2c7ab2(0x171)][_0x2c7ab2(0x19d)]();let _0x479119;switch(this[_0x2c7ab2(0x2ce)]){case _0x2c7ab2(0x236):this[_0x2c7ab2(0x23a)]=this[_0x2c7ab2(0x171)][_0x2c7ab2(0x296)](),this[_0x2c7ab2(0x22f)]=this[_0x2c7ab2(0x171)][_0x2c7ab2(0x138)](),_0x479119=ImageManager[_0x2c7ab2(0x2d3)](this[_0x2c7ab2(0x23a)]),_0x479119[_0x2c7ab2(0x19b)](this['changeFaceGraphic'][_0x2c7ab2(0x23e)](this,_0x479119));break;case'svactor':this[_0x2c7ab2(0x10a)]=this[_0x2c7ab2(0x171)]['svBattlerName'](),_0x479119=ImageManager[_0x2c7ab2(0x255)](this['_graphicSv']),_0x479119[_0x2c7ab2(0x19b)](this[_0x2c7ab2(0x17a)]['bind'](this,_0x479119));break;case'svenemy':this[_0x2c7ab2(0x1fc)]=this[_0x2c7ab2(0x171)]['battlerName'](),_0x479119=ImageManager[_0x2c7ab2(0x16e)](this['_graphicEnemy']),_0x479119['addLoadListener'](this[_0x2c7ab2(0x2d9)]['bind'](this,_0x479119));break;case _0x2c7ab2(0x1e0):this['_graphicEnemy']=this[_0x2c7ab2(0x171)][_0x2c7ab2(0x161)](),_0x479119=ImageManager[_0x2c7ab2(0x127)](this[_0x2c7ab2(0x1fc)]),_0x479119['addLoadListener'](this[_0x2c7ab2(0x2d9)][_0x2c7ab2(0x23e)](this,_0x479119));break;}},Sprite_MultiLayerHpFace[_0x384a4b(0x2fd)]['changeFaceGraphic']=function(_0x3d6a30){const _0x16a6a0=_0x384a4b,_0x844662=this[_0x16a6a0(0x1d0)][_0x16a6a0(0x1d7)],_0x2a1c06=this['_battler'][_0x16a6a0(0x138)]()||0x0,_0x33188f=Sprite_MultiLayerHpContainer[_0x16a6a0(0x10b)][_0x16a6a0(0x103)],_0x24a894=_0x33188f,_0x174da0=_0x33188f,_0x40774e=ImageManager['faceWidth'],_0x3e3fda=ImageManager[_0x16a6a0(0x203)],_0x67cd92=_0x33188f/Math['max'](_0x40774e,_0x3e3fda),_0x116314=ImageManager[_0x16a6a0(0x130)],_0x381751=ImageManager[_0x16a6a0(0x203)],_0x3a66ee=_0x2a1c06%0x4*_0x40774e+(_0x40774e-_0x116314)/0x2,_0x593774=Math[_0x16a6a0(0x2d2)](_0x2a1c06/0x4)*_0x3e3fda+(_0x3e3fda-_0x381751)/0x2,_0x32b018=(_0x24a894-_0x40774e*_0x67cd92)/0x2,_0x4143a8=(_0x174da0-_0x3e3fda*_0x67cd92)/0x2;_0x844662[_0x16a6a0(0x278)](),_0x844662[_0x16a6a0(0x18a)](_0x3d6a30,_0x3a66ee,_0x593774,_0x116314,_0x381751,_0x32b018,_0x4143a8,_0x33188f,_0x33188f);},Sprite_MultiLayerHpFace[_0x384a4b(0x2fd)][_0x384a4b(0x17a)]=function(_0x1eabbf){const _0x2598c8=_0x384a4b,_0x4b776c=this[_0x2598c8(0x1d0)][_0x2598c8(0x1d7)],_0xf79921=Sprite_MultiLayerHpContainer['SETTINGS'][_0x2598c8(0x103)],_0x5e7ddc=_0xf79921,_0x48fecf=_0xf79921,_0x1ebbdf=this[_0x2598c8(0x10a)]['match'](/\$/i),_0x598082=_0x1ebbdf?0x1:ImageManager[_0x2598c8(0x2e3)],_0x4a4f1e=_0x1ebbdf?0x1:ImageManager[_0x2598c8(0x2d8)],_0x124ab4=_0x1eabbf['width']/_0x598082,_0x541847=_0x1eabbf['height']/_0x4a4f1e,_0x5de2fa=Math['min'](0x1,_0xf79921/_0x124ab4,_0xf79921/_0x541847),_0x52f800=_0x124ab4*_0x5de2fa,_0x3c7a74=_0x541847*_0x5de2fa,_0x4be6d3=Math[_0x2598c8(0x106)]((_0x5e7ddc-_0x52f800)/0x2),_0x5eb0c3=Math[_0x2598c8(0x106)]((_0x48fecf-_0x3c7a74)/0x2);_0x4b776c[_0x2598c8(0x278)](),_0x4b776c[_0x2598c8(0x18a)](_0x1eabbf,0x0,0x0,_0x124ab4,_0x541847,_0x4be6d3,_0x5eb0c3,_0x52f800,_0x3c7a74);},Sprite_MultiLayerHpFace[_0x384a4b(0x2fd)][_0x384a4b(0x2d9)]=function(_0xe94192){const _0x419dfd=_0x384a4b,_0x1ad681=this[_0x419dfd(0x1d0)]['bitmap'],_0x416065=Sprite_MultiLayerHpContainer[_0x419dfd(0x10b)]['faceSize'],_0xa99c06=_0x416065,_0x5a5eb4=_0x416065,_0x1a83c4=Math['min'](0x1,_0x416065/_0xe94192['width'],_0x416065/_0xe94192[_0x419dfd(0x275)]),_0x56747d=_0xe94192[_0x419dfd(0x2a1)]*_0x1a83c4,_0x3bfa42=_0xe94192['height']*_0x1a83c4,_0x5be512=Math[_0x419dfd(0x106)]((_0xa99c06-_0x56747d)/0x2),_0x337ba0=Math[_0x419dfd(0x106)]((_0x5a5eb4-_0x3bfa42)/0x2);_0x1ad681['clear'](),_0x1ad681[_0x419dfd(0x18a)](_0xe94192,0x0,0x0,_0xe94192['width'],_0xe94192['height'],_0x5be512,_0x337ba0,_0x56747d,_0x3bfa42);},Sprite_MultiLayerHpFace[_0x384a4b(0x2fd)][_0x384a4b(0x230)]=function(){const _0x330dc3=_0x384a4b;Sprite['prototype'][_0x330dc3(0x230)][_0x330dc3(0x20b)](this);if(!this[_0x330dc3(0x171)])return;if(!this[_0x330dc3(0x171)][_0x330dc3(0x240)]())return;if(this[_0x330dc3(0x14c)])return;this[_0x330dc3(0x226)](),this[_0x330dc3(0x1f9)](),this[_0x330dc3(0x266)]();},Sprite_MultiLayerHpFace['prototype'][_0x384a4b(0x226)]=function(){const _0x46d333=_0x384a4b;if(!this['_battler'])return;if(!this['_graphicSprite'])return;if(this[_0x46d333(0x2ce)]!==this['_battler'][_0x46d333(0x19d)]()){if(_0x46d333(0x1fd)!==_0x46d333(0x1fd)){let _0x177c01=this[_0x46d333(0x1b0)]();return _0x5b6fcc[_0x46d333(0x2e2)]&&this['useDigitGrouping']()&&(_0x177c01=_0x53fe73[_0x46d333(0x248)](_0x177c01)),_0x177c01;}else return this[_0x46d333(0x2c4)]();}switch(this[_0x46d333(0x2ce)]){case _0x46d333(0x236):this[_0x46d333(0x23a)]!==this[_0x46d333(0x171)][_0x46d333(0x296)]()&&this[_0x46d333(0x2c4)]();this['_graphicFaceIndex']!==this[_0x46d333(0x171)]['getMultiLayerHpGaugeFaceIndex']()&&this['prepareGraphic']();break;case _0x46d333(0x2fe):this[_0x46d333(0x10a)]!==this[_0x46d333(0x171)]['svBattlerName']()&&this[_0x46d333(0x2c4)]();break;case _0x46d333(0x28e):case _0x46d333(0x1e0):this['_graphicEnemy']!==this['_battler'][_0x46d333(0x161)]()&&this[_0x46d333(0x2c4)]();break;}},Sprite_MultiLayerHpFace['prototype'][_0x384a4b(0x1f9)]=function(){const _0x4e81ea=_0x384a4b;if(!this['_battler'])return;if(!this[_0x4e81ea(0x1d0)])return;if(this[_0x4e81ea(0x1cc)]===this[_0x4e81ea(0x171)][_0x4e81ea(0x2a0)]())return;this[_0x4e81ea(0x1cc)]=this[_0x4e81ea(0x171)][_0x4e81ea(0x2a0)](),Imported[_0x4e81ea(0x12f)]&&this[_0x4e81ea(0x171)]['hasSvBattler']()&&(this['_graphicHue']=0x0),this[_0x4e81ea(0x1d0)]['setHue'](this['_graphicHue']);},Sprite_MultiLayerHpFace[_0x384a4b(0x2fd)][_0x384a4b(0x266)]=function(){const _0x440a42=_0x384a4b;if(!this[_0x440a42(0x171)])return;if(!this[_0x440a42(0x2f5)])return;if(this['_lastLetter']===this[_0x440a42(0x171)][_0x440a42(0x2fc)]&&this[_0x440a42(0x2a3)]===this[_0x440a42(0x171)][_0x440a42(0x22c)])return;this['_lastLetter']=this['_battler'][_0x440a42(0x2fc)],this[_0x440a42(0x2a3)]=this[_0x440a42(0x171)]['_plural'],this['drawLetterSprite']();};function Sprite_MultiLayerHpGauge(){this['initialize'](...arguments);}Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)]=Object['create'](Sprite_Gauge[_0x384a4b(0x2fd)]),Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)][_0x384a4b(0x17b)]=Sprite_MultiLayerHpGauge,Sprite_MultiLayerHpGauge[_0x384a4b(0x10b)]={'show':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x13f)][_0x384a4b(0x2b7)]??!![],'bitmapHeight':0x20,'gaugeHeight':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)]['Gauge']['gaugeHeight']??0x18,'styleName':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x13f)]['styleName']??_0x384a4b(0x21e),'offset':{'x':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x13f)][_0x384a4b(0x265)]??0x0,'y':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)]['Gauge'][_0x384a4b(0x143)]??0x4}},Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)][_0x384a4b(0x18e)]=function(){const _0x28521f=_0x384a4b;Sprite_Gauge[_0x28521f(0x2fd)][_0x28521f(0x18e)][_0x28521f(0x20b)](this);},Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)][_0x384a4b(0x20a)]=function(_0x8944e4){const _0x894029=_0x384a4b;this[_0x894029(0x273)]=_0x8944e4,this['createBitmap'](),this[_0x894029(0x171)]&&(_0x894029(0x1bc)!=='WXKCR'?(this[_0x894029(0x273)]=_0xd0b567,this[_0x894029(0x122)](),this[_0x894029(0x171)]&&(this[_0x894029(0x189)]=-0x1,this[_0x894029(0x1ef)]=-0x1,this[_0x894029(0x2f7)]())):(this[_0x894029(0x189)]=-0x1,this[_0x894029(0x1ef)]=-0x1,this[_0x894029(0x2f7)]()));},Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)]['createBitmap']=function(){const _0x1af59a=_0x384a4b,_0x3ce87b=this[_0x1af59a(0x16c)](),_0x3067ea=this[_0x1af59a(0x288)]();this['bitmap']?(this[_0x1af59a(0x1d7)][_0x1af59a(0x1e7)](_0x3ce87b,_0x3067ea),this[_0x1af59a(0x2a1)]=_0x3ce87b,this['height']=_0x3067ea):this[_0x1af59a(0x1d7)]=new Bitmap(_0x3ce87b,_0x3067ea);},Sprite_MultiLayerHpGauge['prototype'][_0x384a4b(0x288)]=function(){const _0xe9cf13=_0x384a4b;return Sprite_MultiLayerHpGauge[_0xe9cf13(0x10b)][_0xe9cf13(0x288)];},Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)][_0x384a4b(0x14d)]=function(){const _0x11f43c=_0x384a4b;return Sprite_MultiLayerHpGauge['SETTINGS'][_0x11f43c(0x14d)];},Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)][_0x384a4b(0x16c)]=function(){const _0x4c39d5=_0x384a4b;return this[_0x4c39d5(0x273)]||0x80;},Sprite_MultiLayerHpGauge['prototype'][_0x384a4b(0x27b)]=function(){const _0x4e1d07=_0x384a4b;let _0x4f0c49=this[_0x4e1d07(0x1b0)]();if(Imported['VisuMZ_0_CoreEngine']&&this[_0x4e1d07(0x12d)]()){if(_0x4e1d07(0x12e)!=='FKxVH')return'#%1'[_0x4e1d07(0x1a8)](_0x5df56c(_0x271653['$1']));else _0x4f0c49=VisuMZ[_0x4e1d07(0x248)](_0x4f0c49);}return _0x4f0c49;},Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)][_0x384a4b(0x211)]=function(){return 0x0;},Sprite_MultiLayerHpGauge['prototype']['label']=function(){const _0x615c8d=_0x384a4b;return this[_0x615c8d(0x171)]?this[_0x615c8d(0x171)][_0x615c8d(0x136)]():TextManager[_0x615c8d(0x1c8)];},Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)][_0x384a4b(0x2e0)]=function(){return 0x0;},Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)][_0x384a4b(0x2ef)]=function(){const _0x226216=_0x384a4b;return ColorManager[_0x226216(0x1bd)]();},Sprite_MultiLayerHpGauge['prototype'][_0x384a4b(0x2b9)]=function(){return this['valueOutlineColor']();},Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)][_0x384a4b(0x223)]=function(){const _0x455b0a=_0x384a4b;return this[_0x455b0a(0x11d)]();},Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)]['updateBitmap']=function(){const _0x15ef24=_0x384a4b;if(!this[_0x15ef24(0x171)])return;if(!this[_0x15ef24(0x171)][_0x15ef24(0x240)]())return;if(this['_hold'])return;Sprite_Gauge[_0x15ef24(0x2fd)][_0x15ef24(0x2f7)]['call'](this);},Sprite_MultiLayerHpGauge['prototype'][_0x384a4b(0x2af)]=function(){const _0x5b8970=_0x384a4b;this[_0x5b8970(0x13a)](),this[_0x5b8970(0x114)](),this[_0x5b8970(0x21a)](),Imported[_0x5b8970(0x1f7)]&&VisuMZ['VisualGaugeStyles'][_0x5b8970(0x1a2)]();},Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)][_0x384a4b(0x114)]=function(){const _0xc5d003=_0x384a4b,_0x45f1bd=this['currentValue'](),_0x55307f=this['currentMaxValue'](),_0x57fb55=TextManager[_0xc5d003(0x2e6)][_0xc5d003(0x112)],_0x3a746d=TextManager[_0xc5d003(0x2e6)][_0xc5d003(0x204)],_0xa17381=(_0x45f1bd/_0x55307f*0x64)[_0xc5d003(0x1b5)](_0x3a746d),_0x49e204=Imported['VisuMZ_0_CoreEngine']&&this[_0xc5d003(0x12d)](),_0x5d7317=_0x49e204?VisuMZ['GroupDigits'](_0x45f1bd):_0x45f1bd,_0x47a685=_0x49e204?VisuMZ[_0xc5d003(0x248)](_0x55307f):_0x55307f,_0x30aabf=_0x57fb55['format'](_0x5d7317,_0x47a685,_0xa17381),_0x59cb18=this[_0xc5d003(0x16c)](),_0x32e427=this[_0xc5d003(0x276)]?this['textHeight']():this[_0xc5d003(0x288)](),_0x581ee2=_0x59cb18-0x2,_0x59b341=_0x32e427;this[_0xc5d003(0x264)](),this[_0xc5d003(0x1d7)][_0xc5d003(0x169)]=ColorManager['normalColor'](),this[_0xc5d003(0x1d7)]['drawText'](_0x30aabf,0x0,0x0,_0x581ee2,_0x59b341,_0xc5d003(0x2f2)),this[_0xc5d003(0x234)]=this[_0xc5d003(0x1d7)][_0xc5d003(0x1d9)](_0x30aabf);if(Imported[_0xc5d003(0x1f7)]){if(_0xc5d003(0x1b7)!==_0xc5d003(0x1b7)){if(!this[_0xc5d003(0x2ed)])return;const _0x5caa1d=this[_0xc5d003(0x1dc)]();this[_0xc5d003(0x2ed)][_0xc5d003(0x20a)](_0x5caa1d);}else VisuMZ[_0xc5d003(0x146)][_0xc5d003(0x1a2)]();}},Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)]['drawLabel']=function(){const _0x5b9c4e=_0x384a4b,_0x566356=this[_0x5b9c4e(0x186)](),_0x1a3572=this[_0x5b9c4e(0x1d7)]['measureTextWidth'](_0x566356);if(_0x1a3572+this['_textWidth']+0x28>this[_0x5b9c4e(0x1d7)][_0x5b9c4e(0x2a1)])return;const _0x21178c=this[_0x5b9c4e(0x16c)](),_0x443c6f=this[_0x5b9c4e(0x276)]?this[_0x5b9c4e(0x276)]():this['bitmapHeight'](),_0xccda18=0x4,_0x45a3fc=0x0,_0x78a75c=_0x21178c,_0xda26f=_0x443c6f;this[_0x5b9c4e(0x291)](),this[_0x5b9c4e(0x1d7)][_0x5b9c4e(0x2f3)]=0xff,this[_0x5b9c4e(0x1d7)][_0x5b9c4e(0x13c)](_0x566356,_0xccda18,_0x45a3fc,_0x78a75c,_0xda26f,'left'),Imported[_0x5b9c4e(0x1f7)]&&VisuMZ[_0x5b9c4e(0x146)][_0x5b9c4e(0x1a2)]();},Sprite_MultiLayerHpGauge['prototype'][_0x384a4b(0x13a)]=function(){const _0x4a7f0a=_0x384a4b,_0xe97ed7=this[_0x4a7f0a(0x171)]['currentMultiLayerHpGaugeLayer'](),_0x2a5979=this['bitmapWidth'](),_0x2468bd=this['textHeight']?this[_0x4a7f0a(0x276)]():this[_0x4a7f0a(0x288)](),_0x327a15=this[_0x4a7f0a(0x14d)](),_0x333e48=0x0,_0x3e86a8=_0x2468bd-_0x327a15,_0x474c8e=_0x2a5979-_0x333e48,_0x238569=_0x327a15;this[_0x4a7f0a(0x1d7)]['clear'](),this['drawFullGauge'](_0xe97ed7,_0x333e48,_0x3e86a8,_0x474c8e,_0x238569);},Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)]['gaugeRate']=function(){const _0x5e8e10=_0x384a4b,_0x5cc019=this[_0x5e8e10(0x171)][_0x5e8e10(0x229)]();if(_0x5cc019<=0x1)return this[_0x5e8e10(0x171)][_0x5e8e10(0x2ea)]();const _0x28b893=this[_0x5e8e10(0x171)]['mhp']/_0x5cc019,_0x1b81d8=Math['floor'](this['_battler']['hp']/_0x28b893),_0x4ab04a=this[_0x5e8e10(0x171)]['hp']-_0x28b893*_0x1b81d8;return _0x4ab04a/_0x28b893;},Sprite_MultiLayerHpGauge['prototype'][_0x384a4b(0x280)]=function(_0x568d51,_0x42af07,_0x54f055,_0x26e6f7,_0x22294f){const _0x505c8a=_0x384a4b;if(Imported[_0x505c8a(0x1f7)]){this['drawFullVisualStyleGauge'](_0x568d51,_0x42af07,_0x54f055,_0x26e6f7,_0x22294f);return;}const _0x14b919=this[_0x505c8a(0x213)]();this[_0x505c8a(0x1d7)]['fillRect'](_0x42af07,_0x54f055,_0x26e6f7,_0x22294f,_0x14b919),_0x42af07+=0x1,_0x54f055+=0x1,_0x26e6f7-=0x2,_0x22294f-=0x2;const _0x3d48ab=this[_0x505c8a(0x195)]();if(_0x568d51>0x1&&_0x3d48ab<0x1){const _0x1471d6=ColorManager[_0x505c8a(0x290)](_0x568d51-0x1),_0x2db070=ColorManager[_0x505c8a(0x1d5)](_0x568d51-0x1);this[_0x505c8a(0x1d7)][_0x505c8a(0x256)](_0x42af07,_0x54f055,_0x26e6f7,_0x22294f,_0x1471d6,_0x2db070);}const _0x5f02ea=Math[_0x505c8a(0x2d2)](_0x26e6f7*_0x3d48ab);if(_0x568d51>0x1){if(_0x505c8a(0x1e4)===_0x505c8a(0x1e4))this[_0x505c8a(0x1d7)][_0x505c8a(0x2a2)](_0x42af07,_0x54f055,_0x5f02ea+0x1,_0x22294f,_0x14b919);else{if(_0x343416<0x1)return this[_0x505c8a(0x213)]();else{if(_0x48df18===0x1)return this[_0x505c8a(0x24d)]();else{const _0x516f6f=_0x505c8a(0x15b)[_0x505c8a(0x1a8)](_0x8a9f91['clamp'](0x2,0xa)),_0x31e322=_0x45d579['MULTI_LAYER_HP_GAUGE'][_0x505c8a(0x2e9)][_0x516f6f];return this[_0x505c8a(0x269)](_0x31e322);}}}}const _0x56bfa0=ColorManager['getMultiLayerHpGaugeColor1'](_0x568d51),_0x4291e5=ColorManager[_0x505c8a(0x1d5)](_0x568d51);this[_0x505c8a(0x1d7)][_0x505c8a(0x256)](_0x42af07,_0x54f055,_0x5f02ea,_0x22294f,_0x56bfa0,_0x4291e5);},Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)][_0x384a4b(0x1ea)]=function(){const _0xc2c60e=_0x384a4b,_0x2a3d72=this[_0xc2c60e(0x171)][_0xc2c60e(0x229)]();return this[_0xc2c60e(0x171)][_0xc2c60e(0x2dd)]/Math[_0xc2c60e(0x162)](0x1,_0x2a3d72);},Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)][_0x384a4b(0x1a5)]=function(_0x8af869,_0x19b73e,_0x28714b,_0x844c54,_0x1124a3){const _0x5eb864=_0x384a4b,_0x3a486c=this[_0x5eb864(0x28a)]();VisuMZ[_0x5eb864(0x146)][_0x5eb864(0x270)]=this['maxHpSegmentAmount']();const _0x4ec58e=VisuMZ['VisualGaugeStyles']['GetPolygonStyle'](_0x3a486c,_0x19b73e,_0x28714b,_0x844c54,_0x1124a3,0x1,!![]),_0x410bcd=this[_0x5eb864(0x213)]();this[_0x5eb864(0x1d7)][_0x5eb864(0x1db)](_0x4ec58e,_0x410bcd);const _0x391b69=this[_0x5eb864(0x195)]();if(_0x8af869>0x1&&_0x391b69<0x1){if('Htztn'===_0x5eb864(0x2b2)){const _0x55f104=ColorManager['getMultiLayerHpGaugeColor1'](_0x8af869-0x1),_0x213704=ColorManager[_0x5eb864(0x1d5)](_0x8af869-0x1),_0x298028=VisuMZ[_0x5eb864(0x146)]['GetPolygonStyle'](_0x3a486c,_0x19b73e,_0x28714b,_0x844c54,_0x1124a3,0x1,![]),_0x3a2b12=this[_0x5eb864(0x1d7)][_0x5eb864(0x101)]['createLinearGradient'](_0x19b73e,_0x28714b,_0x19b73e+_0x844c54,_0x28714b);this[_0x5eb864(0x1d7)][_0x5eb864(0x218)](_0x298028,_0x55f104,_0x213704,_0x3a2b12);}else{if(!this[_0x5eb864(0x2f5)])return;const _0x515328=this[_0x5eb864(0x2f5)][_0x5eb864(0x1d7)],_0x12a871=this[_0x5eb864(0x2a5)];if(!_0x12a871)return;const _0x572114=_0x24ae87['SETTINGS'],_0x1d70af=_0x2fd0c9[_0x5eb864(0x10b)][_0x5eb864(0x103)];_0x515328[_0x5eb864(0x278)]();if(!this[_0x5eb864(0x2a3)])return;_0x515328['fontFace']=_0x572114[_0x5eb864(0x2b8)]||_0x1589c8['mainFontFace'](),_0x515328['fontSize']=_0x572114[_0x5eb864(0x2d7)]||0x10,_0x515328[_0x5eb864(0x13c)](_0x12a871[_0x5eb864(0x231)](),0x0,_0x1d70af/0x2,_0x1d70af*0x7/0x8,_0x1d70af/0x2,'right');}}const _0x32e13c=ColorManager[_0x5eb864(0x290)](_0x8af869),_0x31b4a3=ColorManager[_0x5eb864(0x1d5)](_0x8af869),_0x15525c=this['bitmap']['_context'][_0x5eb864(0x2db)](_0x19b73e,_0x28714b,_0x19b73e+_0x844c54,_0x28714b),_0xd64691=VisuMZ[_0x5eb864(0x146)]['GetPolygonStyle'](_0x3a486c,_0x19b73e,_0x28714b,_0x844c54,_0x1124a3,_0x391b69,![]);this['bitmap']['drawVisualStyleGaugeFront'](_0xd64691,_0x32e13c,_0x31b4a3,_0x15525c,_0x410bcd);},Sprite_MultiLayerHpGauge[_0x384a4b(0x2fd)]['getStyleName']=function(){const _0x49aaea=_0x384a4b;return Sprite_MultiLayerHpGauge[_0x49aaea(0x10b)][_0x49aaea(0x28a)];};function Sprite_MultiLayerHpStates(){const _0x1cdb26=_0x384a4b;this[_0x1cdb26(0x18e)](...arguments);}Sprite_MultiLayerHpStates[_0x384a4b(0x2fd)]=Object[_0x384a4b(0x2a9)](Sprite[_0x384a4b(0x2fd)]),Sprite_MultiLayerHpStates['prototype'][_0x384a4b(0x17b)]=Sprite_MultiLayerHpStates,Sprite_MultiLayerHpStates['SETTINGS']={'show':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)][_0x384a4b(0x2c1)]['show']??!![],'breakShields':VisuMZ[_0x384a4b(0x19a)]['Settings'][_0x384a4b(0x2c1)][_0x384a4b(0x11b)]??!![],'offset':{'x':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)]['States'][_0x384a4b(0x265)]??0x0,'y':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)][_0x384a4b(0x2c1)][_0x384a4b(0x143)]??0x1c}},Sprite_MultiLayerHpStates[_0x384a4b(0x2fd)][_0x384a4b(0x18e)]=function(_0x1a6f89){const _0x1bf41a=_0x384a4b;this[_0x1bf41a(0x171)]=_0x1a6f89,Sprite[_0x1bf41a(0x2fd)][_0x1bf41a(0x18e)][_0x1bf41a(0x20b)](this),this[_0x1bf41a(0x2a8)](),this[_0x1bf41a(0x122)](),this[_0x1bf41a(0x171)][_0x1bf41a(0x209)]();},Sprite_MultiLayerHpStates['prototype'][_0x384a4b(0x2a8)]=function(){const _0x5e6e5a=_0x384a4b,_0x52c238={'x':0x0,'y':0x0,'width':Graphics[_0x5e6e5a(0x2a1)],'height':SceneManager[_0x5e6e5a(0x13d)][_0x5e6e5a(0x140)](0x1,![])};this[_0x5e6e5a(0x2d6)]=new Window_MultiLayerHpGaugeStatusBase(_0x52c238);},Sprite_MultiLayerHpStates[_0x384a4b(0x2fd)][_0x384a4b(0x122)]=function(){const _0x5b5d22=_0x384a4b,_0x2bd225=Graphics['width'],_0x1f8e9d=ImageManager[_0x5b5d22(0x19c)];this[_0x5b5d22(0x1d7)]=new Bitmap(_0x2bd225,_0x1f8e9d);},Sprite_MultiLayerHpStates['prototype']['setWidth']=function(_0xf27cc2){const _0x45ffcf=_0x384a4b;this[_0x45ffcf(0x246)](0x0,0x0,_0xf27cc2,ImageManager[_0x45ffcf(0x19c)]),this[_0x45ffcf(0x2a1)]=_0xf27cc2,this[_0x45ffcf(0x12a)]=_0xf27cc2;},Sprite_MultiLayerHpStates[_0x384a4b(0x2fd)][_0x384a4b(0x230)]=function(){const _0x535ec9=_0x384a4b;Sprite['prototype'][_0x535ec9(0x230)][_0x535ec9(0x20b)](this);if(!this[_0x535ec9(0x171)])return;if(!this[_0x535ec9(0x171)][_0x535ec9(0x240)]())return;if(this['_hold'])return;this[_0x535ec9(0x10d)](),this[_0x535ec9(0x187)]();},Sprite_MultiLayerHpStates[_0x384a4b(0x2fd)]['checkUpdateRequests']=function(){const _0x28fb07=_0x384a4b;this[_0x28fb07(0x171)][_0x28fb07(0x224)]&&(_0x28fb07(0x17f)!==_0x28fb07(0x17f)?_0x120e35[_0x28fb07(0x2fd)]['initialize'][_0x28fb07(0x20b)](this,_0x2ccb11):(this['_battler'][_0x28fb07(0x224)]=undefined,this[_0x28fb07(0x123)]()));},Sprite_MultiLayerHpStates['prototype']['updateBreakShieldIcon']=function(){const _0x3e1dba=_0x384a4b;if(!this[_0x3e1dba(0x2b1)])return;const _0x3addac=Game_Battler[_0x3e1dba(0x2ab)];if(_0x3addac<=0x0)return;this[_0x3e1dba(0x171)][_0x3e1dba(0x2cd)](_0x3addac)?this[_0x3e1dba(0x2b1)][_0x3e1dba(0x105)]=0x0:this[_0x3e1dba(0x2b1)][_0x3e1dba(0x105)]=0xff;},Game_BattlerBase[_0x384a4b(0x2fd)][_0x384a4b(0x209)]=function(){},Game_Enemy[_0x384a4b(0x2fd)][_0x384a4b(0x209)]=function(){const _0x503c69=_0x384a4b;if(this[_0x503c69(0x240)]()){if(_0x503c69(0x22a)===_0x503c69(0x22a))this[_0x503c69(0x224)]=!![];else{const _0x526ae1=this[_0x503c69(0x103)](),_0xd0c9c2=_0x2c36a1[_0x503c69(0x10b)][_0x503c69(0x145)],_0x3b7ae5=_0x3d0742[_0x503c69(0x2e6)][_0x503c69(0x125)],_0x455f04=_0x473528[_0x503c69(0x1b2)](_0x1aac83[_0x503c69(0x1e8)](),_0x267c79['MULTI_LAYER_HP_GAUGE'][_0x503c69(0x15c)]);return _0x238c23[_0x503c69(0x1aa)](_0x3b7ae5/_0x455f04)-_0xd0c9c2*0x2-_0x526ae1;}}},VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x11c)]=Game_BattlerBase[_0x384a4b(0x2fd)][_0x384a4b(0x2be)],Game_BattlerBase['prototype'][_0x384a4b(0x2be)]=function(){const _0x3efa00=_0x384a4b;VisuMZ[_0x3efa00(0x19a)][_0x3efa00(0x11c)]['call'](this),this[_0x3efa00(0x209)]();},VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2fa)]=Game_Battler[_0x384a4b(0x2fd)]['onBattleStart'],Game_Battler[_0x384a4b(0x2fd)]['onBattleStart']=function(_0x40bee7){const _0x261b69=_0x384a4b;VisuMZ[_0x261b69(0x19a)][_0x261b69(0x2fa)][_0x261b69(0x20b)](this,_0x40bee7),this[_0x261b69(0x209)]();},VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2a6)]=Game_Battler[_0x384a4b(0x2fd)][_0x384a4b(0x292)],Game_Battler[_0x384a4b(0x2fd)][_0x384a4b(0x292)]=function(_0x4f6485){const _0x5b6109=_0x384a4b;VisuMZ['MultiLayerHpGauge']['Game_Battler_addState'][_0x5b6109(0x20b)](this,_0x4f6485),this[_0x5b6109(0x209)]();},VisuMZ[_0x384a4b(0x19a)]['Game_Battler_removeState']=Game_Battler[_0x384a4b(0x2fd)]['removeState'],Game_Battler['prototype'][_0x384a4b(0x27f)]=function(_0x501efc){const _0x2aa048=_0x384a4b;VisuMZ[_0x2aa048(0x19a)][_0x2aa048(0x260)][_0x2aa048(0x20b)](this,_0x501efc),this['requestMultiLayerHpGaugeStateUpdate']();},VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x1c5)]=Game_BattlerBase[_0x384a4b(0x2fd)][_0x384a4b(0x217)],Game_BattlerBase[_0x384a4b(0x2fd)][_0x384a4b(0x217)]=function(){const _0x44e9c0=_0x384a4b;VisuMZ[_0x44e9c0(0x19a)]['Game_BattlerBase_clearStates']['call'](this),this['requestMultiLayerHpGaugeStateUpdate']();},VisuMZ[_0x384a4b(0x19a)]['Game_Battler_onTurnEnd']=Game_Battler[_0x384a4b(0x2fd)][_0x384a4b(0x1e1)],Game_Battler[_0x384a4b(0x2fd)][_0x384a4b(0x1e1)]=function(){const _0x1fc3e0=_0x384a4b;VisuMZ[_0x1fc3e0(0x19a)]['Game_Battler_onTurnEnd'][_0x1fc3e0(0x20b)](this),this[_0x1fc3e0(0x209)]();},Sprite_MultiLayerHpStates[_0x384a4b(0x2fd)]['refresh']=function(){const _0x56f5e7=_0x384a4b;this[_0x56f5e7(0x2d4)](),this[_0x56f5e7(0x173)](),this[_0x56f5e7(0x1bf)](),this[_0x56f5e7(0x1f4)]();},Sprite_MultiLayerHpStates[_0x384a4b(0x2fd)]['clearBitmaps']=function(){const _0x3f0695=_0x384a4b;this[_0x3f0695(0x1d7)][_0x3f0695(0x278)](),this['_dummyWindow'][_0x3f0695(0x1ad)][_0x3f0695(0x278)]();},Sprite_MultiLayerHpStates[_0x384a4b(0x2fd)]['drawStateIcons']=function(){const _0x51d2be=_0x384a4b,_0x1ee119=this[_0x51d2be(0x2d6)][_0x51d2be(0x1b8)];this[_0x51d2be(0x2d6)][_0x51d2be(0x2ba)](this[_0x51d2be(0x171)],0x0,0x0,_0x1ee119);},Sprite_MultiLayerHpStates[_0x384a4b(0x2fd)][_0x384a4b(0x1bf)]=function(){const _0x18d779=_0x384a4b;if(!this[_0x18d779(0x171)])return;if(!Imported[_0x18d779(0x257)])return;if(!Game_Battler[_0x18d779(0x159)])return;if(!Sprite_MultiLayerHpStates[_0x18d779(0x10b)]['breakShields'])return;if(this['_breakShieldSprite'])return;this[_0x18d779(0x2b1)]=new Sprite_BreakShieldIcon(),this[_0x18d779(0xff)](this[_0x18d779(0x2b1)]),this[_0x18d779(0x2b1)][_0x18d779(0x16d)](this['_battler'],![]),this[_0x18d779(0x2b1)][_0x18d779(0x126)](ImageManager[_0x18d779(0x2bb)]/0x2,ImageManager[_0x18d779(0x19c)]/0x2+0x2),this[_0x18d779(0x2b1)][_0x18d779(0x2b7)]();},Sprite_MultiLayerHpStates['prototype'][_0x384a4b(0x1f4)]=function(){const _0x1f9b01=_0x384a4b;this[_0x1f9b01(0x1d7)]=this[_0x1f9b01(0x2d6)]['contents'];if(this[_0x1f9b01(0x12a)]){const _0x5d8c2f=Math[_0x1f9b01(0x2d2)](this[_0x1f9b01(0x12a)]/ImageManager[_0x1f9b01(0x2bb)])*ImageManager[_0x1f9b01(0x2bb)];this[_0x1f9b01(0x246)](0x0,0x0,_0x5d8c2f,this[_0x1f9b01(0x1d7)][_0x1f9b01(0x275)]);}},Window_BattleLog[_0x384a4b(0x2e6)]={'reposition':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)]['General']['repositionBattleLog']??!![],'perRowOffsetY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x22d)][_0x384a4b(0x16f)]??0x40},Window_BattleLog['prototype'][_0x384a4b(0x26e)]=function(){this['_multiLayerHpGaugePositionY']=this['y'];},VisuMZ[_0x384a4b(0x19a)]['Window_BattleLog_update']=Window_BattleLog[_0x384a4b(0x2fd)][_0x384a4b(0x230)],Window_BattleLog[_0x384a4b(0x2fd)][_0x384a4b(0x230)]=function(){const _0x4d69a1=_0x384a4b;VisuMZ[_0x4d69a1(0x19a)][_0x4d69a1(0x132)]['call'](this),this[_0x4d69a1(0x17c)]();},Window_BattleLog['prototype'][_0x384a4b(0x17c)]=function(){const _0x14ab20=_0x384a4b;if(!Window_BattleLog[_0x14ab20(0x2e6)][_0x14ab20(0x137)])return;if(this[_0x14ab20(0x1e2)]===undefined)return;let _0x58180f=this[_0x14ab20(0x1e2)];const _0x2967e6=$gameTroop['totalVisibleMultiLayerHpGaugeRows']();_0x2967e6>0x0&&(_0x58180f+=Window_BattleLog[_0x14ab20(0x2e6)]['perRowOffsetY']*_0x2967e6),this['y']=_0x58180f;};function Window_MultiLayerHpGaugeStatusBase(){const _0x45a6f1=_0x384a4b;this[_0x45a6f1(0x18e)](...arguments);}Window_MultiLayerHpGaugeStatusBase['prototype']=Object[_0x384a4b(0x2a9)](Window_StatusBase[_0x384a4b(0x2fd)]),Window_MultiLayerHpGaugeStatusBase[_0x384a4b(0x2fd)][_0x384a4b(0x17b)]=Window_MultiLayerHpGaugeStatusBase,Window_MultiLayerHpGaugeStatusBase['prototype'][_0x384a4b(0x18e)]=function(_0x497973){const _0x23e7a7=_0x384a4b;Window_StatusBase[_0x23e7a7(0x2fd)][_0x23e7a7(0x18e)][_0x23e7a7(0x20b)](this,_0x497973);},Window_MultiLayerHpGaugeStatusBase[_0x384a4b(0x2fd)][_0x384a4b(0x14f)]=function(){const _0xdd1361=_0x384a4b;return Window_Scrollable[_0xdd1361(0x2fd)][_0xdd1361(0x14f)][_0xdd1361(0x20b)](this);},Window_MultiLayerHpGaugeStatusBase[_0x384a4b(0x2fd)][_0x384a4b(0x135)]=function(_0x36982c){const _0x49e59e=_0x384a4b;if(!Sprite_MultiLayerHpStates['SETTINGS'][_0x49e59e(0x11b)])return![];if(!Game_Battler[_0x49e59e(0x159)])return![];const _0x1cf318=Game_Battler[_0x49e59e(0x2ab)];if(_0x36982c[_0x49e59e(0x2cd)](_0x1cf318)&&$dataStates[_0x1cf318][_0x49e59e(0x18c)]>0x0)return![];if(_0x36982c[_0x49e59e(0x1d2)]()&&$dataStates[_0x36982c['deathStateId']()]['iconIndex']>0x0)return![];return!![];},Window_MultiLayerHpGaugeStatusBase['prototype']['placeBreakShieldIcon']=function(_0x4cf281,_0x1d3d68,_0x3373f1){},VisuMZ[_0x384a4b(0x19a)]['Compatibility']={'battler':{'reduceRedundancy':{'hpGauge':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x20f)][_0x384a4b(0x1c6)]??!![],'stateIcon':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x20f)]['reduceRedundantStateIcon']??!![],'breakShields':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x20f)][_0x384a4b(0x179)]??!![]}},'atb':{'eachRowOffsetY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x20f)][_0x384a4b(0x18f)]??+0x40,'normalOffsetY':VisuMZ[_0x384a4b(0x19a)]['Settings'][_0x384a4b(0x20f)]['atbNormalOffsetY']??+0x18,'helpOffsetY':VisuMZ[_0x384a4b(0x19a)]['Settings'][_0x384a4b(0x20f)][_0x384a4b(0x25f)]??+0xc},'btb':{'eachRowOffsetY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x20f)][_0x384a4b(0x134)]??+0x40,'normalOffsetY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x20f)][_0x384a4b(0x277)]??+0x0,'helpOffsetY':VisuMZ[_0x384a4b(0x19a)]['Settings'][_0x384a4b(0x20f)][_0x384a4b(0x2b0)]??+0xc},'ctb':{'eachRowOffsetY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)]['Compatibility'][_0x384a4b(0x115)]??+0x40,'normalOffsetY':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)][_0x384a4b(0x20f)][_0x384a4b(0x1bb)]??+0x0,'helpOffsetY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)]['Compatibility'][_0x384a4b(0x207)]??+0xc},'etb':{'eachRowOffsetY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x20f)]['etbEachRowOffsetY']??+0x40,'normalOffsetY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x20f)]['etbNormalOffsetY']??+0x0,'helpOffsetY':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)][_0x384a4b(0x20f)][_0x384a4b(0x18b)]??-0x38},'ftb':{'eachRowOffsetY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)]['Compatibility']['ftbEachRowOffsetY']??+0x40,'normalOffsetY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x20f)][_0x384a4b(0x121)]??+0x0,'helpOffsetY':VisuMZ[_0x384a4b(0x19a)]['Settings'][_0x384a4b(0x20f)][_0x384a4b(0x282)]??-0x38},'otb':{'eachRowOffsetY':VisuMZ['MultiLayerHpGauge']['Settings']['Compatibility']['otbEachRowOffsetY']??+0x40,'normalOffsetY':VisuMZ['MultiLayerHpGauge']['Settings'][_0x384a4b(0x20f)][_0x384a4b(0x1c7)]??-0x6,'helpOffsetY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x20f)][_0x384a4b(0x271)]??-0xc},'ptb':{'eachRowOffsetY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x20f)]['ptbEachRowOffsetY']??+0x40,'normalOffsetY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x20f)][_0x384a4b(0x221)]??+0x0,'helpOffsetY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x20f)][_0x384a4b(0x2e7)]??-0x38},'stb':{'eachRowOffsetY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)]['Compatibility']['stbEachRowOffsetY']??+0x40,'normalOffsetY':VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x2b5)][_0x384a4b(0x20f)][_0x384a4b(0x1d6)]??+0x0,'helpOffsetY':VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2b5)][_0x384a4b(0x20f)]['stbHelpOffsetY']??+0xc}},VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x14b)]=Sprite_Battler[_0x384a4b(0x2fd)][_0x384a4b(0x119)],Sprite_Battler[_0x384a4b(0x2fd)][_0x384a4b(0x119)]=function(){const _0x506eaa=_0x384a4b;if(this[_0x506eaa(0x171)]&&this[_0x506eaa(0x171)][_0x506eaa(0x214)]()){if(_0x506eaa(0x131)==='Skkxg'){const _0x5eaad1=VisuMZ[_0x506eaa(0x19a)][_0x506eaa(0x20f)][_0x506eaa(0x25b)][_0x506eaa(0x17e)];if(this[_0x506eaa(0x171)][_0x506eaa(0x240)]()&&_0x5eaad1[_0x506eaa(0x253)]&&Sprite_MultiLayerHpGauge[_0x506eaa(0x10b)]['show']){if(_0x506eaa(0x166)!==_0x506eaa(0x166)){if(this[_0x506eaa(0x14c)])return null;if(!_0xbf2fa1[_0x506eaa(0x10b)][_0x506eaa(0x215)])return null;return this['_battler'];}else return![];}}else this[_0x506eaa(0x2c4)]();}return VisuMZ['MultiLayerHpGauge'][_0x506eaa(0x14b)][_0x506eaa(0x20b)](this);},VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2e8)]=Sprite_Enemy[_0x384a4b(0x2fd)][_0x384a4b(0x2f0)],Sprite_Enemy['prototype'][_0x384a4b(0x2f0)]=function(){const _0x2d4b2f=_0x384a4b;VisuMZ[_0x2d4b2f(0x19a)]['Sprite_Enemy_updateStateSprite'][_0x2d4b2f(0x20b)](this),this['_battler']&&this[_0x2d4b2f(0x2e4)]&&(_0x2d4b2f(0x212)!==_0x2d4b2f(0x212)?this['_canShowMultiLayerHpGauge']=!![]:this['shouldHideMultiLayerStatesIcon']()&&(this[_0x2d4b2f(0x2e4)]['y']=Graphics[_0x2d4b2f(0x275)]*0xa));},Sprite_Enemy[_0x384a4b(0x2fd)]['shouldHideMultiLayerStatesIcon']=function(){const _0x1be3f1=_0x384a4b;if(this[_0x1be3f1(0x171)]&&!this[_0x1be3f1(0x171)][_0x1be3f1(0x240)]()){if('wZVOQ'===_0x1be3f1(0x1ab))return![];else this[_0x1be3f1(0x29b)][_0x1be3f1(0x26f)]=_0x38401c(_0x377d7b['$1'])['trim']();}const _0x5753af=VisuMZ[_0x1be3f1(0x19a)][_0x1be3f1(0x20f)][_0x1be3f1(0x25b)][_0x1be3f1(0x17e)];if(_0x5753af[_0x1be3f1(0x158)]&&Sprite_MultiLayerHpStates[_0x1be3f1(0x10b)]['show'])return!![];return![];},VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x102)]=Sprite_Battler[_0x384a4b(0x2fd)][_0x384a4b(0x2f6)],Sprite_Battler[_0x384a4b(0x2fd)][_0x384a4b(0x2f6)]=function(){const _0x31d497=_0x384a4b;VisuMZ[_0x31d497(0x19a)][_0x31d497(0x102)][_0x31d497(0x20b)](this);if(this[_0x31d497(0x171)]&&this[_0x31d497(0x171)][_0x31d497(0x214)]()&&this[_0x31d497(0x1d4)]){const _0x2c340c=VisuMZ['VisualStateEffects'][_0x31d497(0x2b5)][_0x31d497(0x22d)],_0x20af33=this[_0x31d497(0x1d4)];_0x20af33[_0x31d497(0x172)]=_0x2c340c[_0x31d497(0x177)],this[_0x31d497(0x182)]&&(this[_0x31d497(0x182)][_0x31d497(0x1d4)][_0x31d497(0x172)]=![]),!this['_battler']['hasSvBattler']()&&(_0x31d497(0x184)!==_0x31d497(0x184)?(_0x51b8e6[_0x31d497(0x19a)][_0x31d497(0x1e9)]['call'](this,_0x53ddea),this['_canShowMultiLayerHpGauge']=_0x15862e,this[_0x31d497(0x10c)](),_0x2942ca['clearMultiLayerHpGaugeMembers']()):_0x20af33['y']=-this[_0x31d497(0x275)]+_0x20af33['height']-ImageManager[_0x31d497(0x19c)]);}};function _0x39d0(_0x19f897,_0x17206d){const _0x323b9e=_0x323b();return _0x39d0=function(_0x39d0d7,_0x261a3e){_0x39d0d7=_0x39d0d7-0xff;let _0x23ffbd=_0x323b9e[_0x39d0d7];return _0x23ffbd;},_0x39d0(_0x19f897,_0x17206d);}Imported[_0x384a4b(0x199)]&&(VisuMZ[_0x384a4b(0x19a)]['Sprite_FieldGaugeATB_updatePosition']=Sprite_FieldGaugeATB['prototype']['updatePosition'],Sprite_FieldGaugeATB['prototype']['updatePosition']=function(){const _0x260d70=_0x384a4b;VisuMZ[_0x260d70(0x19a)][_0x260d70(0x150)][_0x260d70(0x20b)](this);if(Sprite_FieldGaugeATB[_0x260d70(0x2b5)][_0x260d70(0x1d3)]!==_0x260d70(0x2c7))return;const _0x57504b=$gameTroop[_0x260d70(0x222)]();if(_0x57504b<=0x0)return;const _0x314134=VisuMZ['MultiLayerHpGauge']['Compatibility'][_0x260d70(0x25d)],_0x478b5f=_0x314134['eachRowOffsetY'];let _0x1a9a44=_0x478b5f*_0x57504b;const _0x36964f=SceneManager[_0x260d70(0x13d)][_0x260d70(0x1a9)];_0x36964f&&_0x36964f[_0x260d70(0x172)]&&Sprite_FieldGaugeATB[_0x260d70(0x2b5)][_0x260d70(0x247)]?_0x1a9a44+=_0x314134[_0x260d70(0x219)]:_0x1a9a44+=_0x314134[_0x260d70(0x25e)],this['y']+=_0x1a9a44;});function _0x323b(){const _0x3c9afc=['offsetX','updateLetterSprite','LayerColors','createAllWindows','getColor','_logWindow','_canShowMultiLayerHpGauge','VisuMZ_2_BattleSystemSTB','rowSpacing','registerMultiLayerHpGaugePositionY','color','_maxValueSegment','otbHelpOffsetY','destroy','_bitmapWidth','offset','height','textHeight','btbNormalOffsetY','clear','_multiLayerHpGaugeTotalLayers','temporalMultiLayerGauge','currentDisplayedValue','_lastIndex','fontSize','#7accc8','removeState','drawFullGauge','51274xlWGDF','ftbHelpOffsetY','revive','isSideView','Game_BattlerBase_revive','layer5_color1','createGraphicSprite','bitmapHeight','createMultiLayerHpGaugeSprites','styleName','layer7_color2','currentMultiLayerHpGaugeLayer','ARRAYEVAL','svenemy','return\x200','getMultiLayerHpGaugeColor1','setupLabelFont','addState','exit','layer3_color1','thick','getMultiLayerHpGaugeFaceName','EVAL','Window_ETB_TurnOrder_updatePosition','updateOpacity','mNCQU','_multiLayerHpGaugeBorderData','#2e3192','OjSza','#39b54a','boxWidth','battlerHue','width','fillRect','_lastPlural','aTdgb','_lastLetter','Game_Battler_addState','Fgthd','createDrawWindow','create','BattleManager_endAction','BREAK_SHIELDS_STUN_STATE','5646361RtMikc','#a186be','_lastPositionY','redraw','btbHelpOffsetY','_breakShieldSprite','Htztn','VisuMZ_2_BattleSystemETB','ymZPJ','Settings','otb','show','letterFontName','labelOutlineColor','drawActorIcons','iconWidth','borderThick','midFadeSpeed','updateStateTurns','parameters','PCcVX','States','VrHGb','getMultiLayerHpGaugeFaceGraphicData','prepareGraphic','_finishChecks','Scene_Battle_createDisplayObjects','top','Window_FTB_TurnOrder_updatePosition','getMultiLayerHpGaugeBorderData','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','#fff799','createBorderSprite','isStateAffected','_graphicType','#f26c4f','kUvaj','layer6_color2','floor','loadFace','clearBitmaps','setTotalGauges','_dummyWindow','letterFontSize','svActorVertCells','changeEnemyGraphic','setBlendColor','createLinearGradient','31827830FpkXzh','mhp','removeChild','updateStatesWidth','labelY','getStateTooltipBattler','VisuMZ_0_CoreEngine','svActorHorzCells','_stateIconSprite','layer5_color2','MULTI_LAYER_HP_GAUGE','ptbHelpOffsetY','Sprite_Enemy_updateStateSprite','color2','hpRate','setBitmapSize','updateMultiLayerHpGaugeContainer','_gaugeSprite','checkFrequency','labelColor','updateStateSprite','includes','right','paintOpacity','finishChecks','_letterSprite','updateVisualStateEffectsOverlay','updateBitmap','persistMultiLayerGauge','getMultiLayerHpGaugeBorderColor','Game_Battler_onBattleStart','BottomPosition','_letter','prototype','svactor','addChild','ARRAYSTR','_context','Sprite_Battler_updateVisualStateEffectsOverlay','faceSize','#605ca8','opacity','round','_multiLayerHpGaugeFaceGraphicData','map','ptb','_graphicSv','SETTINGS','canShowMultiLayerHpGauge','checkUpdateRequests','rNpgE','Defaults','uulfj','1919235fLQkya','valueFmt','layer4_color2','drawValue','ctbEachRowOffsetY','borderthickness','#0054a6','hideMultiLayerGauge','isVisualHpGaugeDisplayed','updateMultiLayerHpGaugeBorderData','breakShields','Game_BattlerBase_updateStateTurns','valueOutlineWidth','UTXem','eachRowOffsetY','description','ftbNormalOffsetY','createBitmap','refresh','toUpperCase','maxWidth','move','loadEnemy','layer7_color1','VisuMZ_2_BattleSystemPTB','_frameWidth','_victoryPhase','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','useDigitGrouping','FKxVH','VisuMZ_1_BattleCore','faceWidth','Skkxg','Window_BattleLog_update','_lastWidth','btbEachRowOffsetY','shouldDisplayBreakShields','name','reposition','getMultiLayerHpGaugeFaceIndex','_borderSprite','drawGauge','Window_BTB_TurnOrder_updatePosition','drawText','_scene','defaultLayers','Gauge','calcWindowHeight','split','index','offsetY','layers','bufferX','VisualGaugeStyles','faceGraphic','RJTHB','cdmQI','ConvertParams','Sprite_Battler_isVisualHpGaugeDisplayed','_hold','gaugeHeight','layer10_color1','itemHeight','Sprite_FieldGaugeATB_updatePosition','updatePositionY','Window_CTB_TurnOrder_updatePosition','drawBgSprite','repositionForHelp','createLetterSprite','AnuRw','_lastPositionX','stateIcon','BREAK_SHIELDS_ENEMIES','Window_OTB_TurnOrder_updatePosition','layer%1','perRow','updatePosition','clearMultiLayerHpGaugeMembers','VisuMZ_2_BattleSystemFTB','FtfMY','battlerName','max','match','#000000','_graphicsSprite','teVmh','calcPositionX','11Fcshgs','textColor','endBattleFadeSpeed','children','bitmapWidth','setup','loadSvEnemy','battleLogPerRowOffsetY','clearRect','_battler','visible','drawStateIcons','riEhs','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','endAction','EnemyOverlay','_statesSprite','reduceRedundantBreakShield','changeSvActorGraphic','constructor','updateMultiLyerHpGaugePositionY','addMultiLayerHpGaugeSprite','reduceRedundancy','dTcER','GyHeV','length','_svBattlerSprite','setIndexData','PGBLE','layer4_color1','label','updateBreakShieldIcon','AxkZL','_targetValue','blt','etbHelpOffsetY','iconIndex','layer9_color1','initialize','atbEachRowOffsetY','466536FvBvMy','layer10_color2','layer6_color1','createDisplayObjects','repositionHelpY','gaugeRate','bgColor','btb','ARRAYJSON','VisuMZ_2_BattleSystemATB','MultiLayerHpGauge','addLoadListener','iconHeight','getMultiLayerHpGaugeGraphicType','stb','Scene_Battle_update','ZoTfl','updatePositionX','ClearTextOffset','#00a99d','processReplacement','drawFullVisualStyleGauge','layer3_color2','LhlEu','format','_helpWindow','ceil','wZVOQ','parse','contents','createBattlerGraphicSprite','gRNfZ','currentValue','IqISP','min','getMultiLayerHpGaugeBgColor1','createBattlerGaugeSprite','toFixed','MZgOu','baPTm','innerWidth','etb','perRowOffsetY','ctbNormalOffsetY','WXKCR','normalColor','VisuMZ_2_BattleSystemBTB','addBreakShieldIcon','2558595qmQEoD','updateGaugeWidth','showDefault','lSVft','162tUmJOG','Game_BattlerBase_clearStates','reduceRedundantHpGauge','otbNormalOffsetY','hpA','clamp','findTargetSprite','borderColor','_graphicHue','Scene_Battle_createAllWindows','#7cc576','createBattlerGaugeStates','_graphicSprite','checkNeedReplacement','isDead','DisplayPosition','_stateSprite','getMultiLayerHpGaugeColor2','stbNormalOffsetY','bitmap','calcWidth','measureTextWidth','members','drawVisualStyleGaugeBack','calcBitmapWidth','indexOf','RegExp','Game_BattlerBase_appear','enemy','onTurnEnd','_multiLayerHpGaugePositionY','bgColor1','BWLwk','#ffdeec','visibleMultiLayerHpGaugeMembers','resize','totalVisibleMultiLayerHpGaugeCount','Game_Enemy_transform','maxHpSegmentAmount','KZmin','mmXzF','ARRAYSTRUCT','aOoEi','_targetMaxValue','layer2_color2','IwYfb','getMultiLayerHpGaugeBgColorData','fjnYv','applyNewBitmap','totalVisibleMultiLayerHpGauges','createMultiLayerHpGaugeContainer','VisuMZ_3_VisualGaugeStyles','persist','updateGraphicHue','version','JSON','_graphicEnemy','PUhBz','Graphic','#00aeef','eGdKA','STR','isMultiLayerGaugeLifeStatePersistant','faceHeight','valuePercentDigits','#%1','getMultiLayerHpGaugeBgColor2','ctbHelpOffsetY','#fff200','requestMultiLayerHpGaugeStateUpdate','setWidth','call','drawLetter','transform','updateSelectionEffect','Compatibility','_bgSprite','gaugeX','AGcUy','gaugeBackColor','isEnemy','stateTooltipsEnable','bgColor2','clearStates','drawVisualStyleGaugeFront','helpOffsetY','drawLabel','VmSyp','appear','Window_PTB_TurnOrder_updatePosition','quad','filter','6RFeJwn','ptbNormalOffsetY','totalVisibleMultiLayerHpGaugeRows','labelOutlineWidth','_requestMultiLayerHpGaugeStateUpdate','#8393ca','updateGraphic','layer9_color2','mainSprite','getMultiLayerHpGaugeTotalLayers','pIfiD','75608QXxilG','_plural','General','getMultiLayerHpGaugeBorderThickness','_graphicFaceIndex','update','trim','_cache_visibleMultiLayerHpGaugeMembers','_lastTotalVisibleGauges','_textWidth','hpGaugeColor1','face','ypSgn','JusBx','qafUP','_graphicFaceName','drawLetterSprite','_multiLayerHpGaugeContainer','fontFace','bind','layer8_color2','showMultiLayerHpGauge','33GpLWiU','calcPositionY','Window_STB_TurnOrder_updatePosition','fadeSpeed','cZhnP','setFrame','RepositionTopForHelp','GroupDigits','drawBorderSprite','_multiLayerHpGaugeBgColorData','layer8_color1','createMultiLayerHpGauges','hpGaugeColor2','FUNC','#ed1c24','isAllDead','showMultiLayerGauge','lFROE','hpGauge','color1','loadSvActor','gradientFillRect','VisuMZ_4_BreakShields','UhYtb','VisuMZ_2_BattleSystemCTB','createBgSprite','battler','hasSvBattler','atb','normalOffsetY','atbHelpOffsetY','Game_Battler_removeState','note','updateMultiLayerHpGaugeContainerRemoval','XKUdR','setupValueFont'];_0x323b=function(){return _0x3c9afc;};return _0x323b();};Imported[_0x384a4b(0x1be)]&&(VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x13b)]=Window_BTB_TurnOrder[_0x384a4b(0x2fd)]['updatePosition'],Window_BTB_TurnOrder[_0x384a4b(0x2fd)][_0x384a4b(0x15d)]=function(){const _0x1057e8=_0x384a4b;VisuMZ[_0x1057e8(0x19a)]['Window_BTB_TurnOrder_updatePosition']['call'](this);if(Window_BTB_TurnOrder[_0x1057e8(0x2b5)][_0x1057e8(0x1d3)]!==_0x1057e8(0x2c7))return;const _0x43baa1=$gameTroop[_0x1057e8(0x222)]();if(_0x43baa1<=0x0)return;const _0x1dc8ce=VisuMZ[_0x1057e8(0x19a)]['Compatibility'][_0x1057e8(0x197)],_0x37c00c=_0x1dc8ce[_0x1057e8(0x11f)];let _0x5e3429=_0x37c00c*_0x43baa1;const _0x4113db=SceneManager[_0x1057e8(0x13d)][_0x1057e8(0x1a9)];_0x4113db&&_0x4113db[_0x1057e8(0x172)]&&Window_BTB_TurnOrder[_0x1057e8(0x2b5)][_0x1057e8(0x247)]?_0x5e3429+=_0x1dc8ce[_0x1057e8(0x219)]:_0x5e3429+=_0x1dc8ce[_0x1057e8(0x25e)],this['y']+=_0x5e3429;});;Imported[_0x384a4b(0x259)]&&(VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x152)]=Window_CTB_TurnOrder['prototype'][_0x384a4b(0x15d)],Window_CTB_TurnOrder[_0x384a4b(0x2fd)][_0x384a4b(0x15d)]=function(){const _0x474bb4=_0x384a4b;VisuMZ[_0x474bb4(0x19a)][_0x474bb4(0x152)]['call'](this);if(Window_CTB_TurnOrder[_0x474bb4(0x2b5)]['DisplayPosition']!=='top')return;const _0x5bf837=$gameTroop[_0x474bb4(0x222)]();if(_0x5bf837<=0x0)return;const _0x2797ec=VisuMZ['MultiLayerHpGauge'][_0x474bb4(0x20f)]['ctb'],_0x5eb8e5=_0x2797ec[_0x474bb4(0x11f)];let _0x2d3e34=_0x5eb8e5*_0x5bf837;const _0x36bb01=SceneManager[_0x474bb4(0x13d)][_0x474bb4(0x1a9)];if(_0x36bb01&&_0x36bb01[_0x474bb4(0x172)]&&Window_CTB_TurnOrder['Settings'][_0x474bb4(0x247)]){if(_0x474bb4(0x160)!==_0x474bb4(0x160)){const _0x35d296=this[_0x474bb4(0x139)][_0x474bb4(0x1d7)],_0x2d3a18='#000000',_0x127865=_0x26391c[_0x474bb4(0x269)](this[_0x474bb4(0x171)][_0x474bb4(0x2f9)]()),_0x73e732=this['_battler'][_0x474bb4(0x22e)](),_0x43df4d=_0x33e288[_0x474bb4(0x10b)][_0x474bb4(0x103)];let _0x22c94f=0x0;_0x35d296[_0x474bb4(0x278)](),_0x35d296['fillRect'](_0x22c94f,_0x22c94f,_0x43df4d-_0x22c94f*0x2,_0x43df4d-_0x22c94f*0x2,_0x2d3a18),_0x22c94f+=0x1,_0x35d296[_0x474bb4(0x2a2)](_0x22c94f,_0x22c94f,_0x43df4d-_0x22c94f*0x2,_0x43df4d-_0x22c94f*0x2,_0x127865),_0x22c94f+=_0x73e732,_0x35d296[_0x474bb4(0x2a2)](_0x22c94f,_0x22c94f,_0x43df4d-_0x22c94f*0x2,_0x43df4d-_0x22c94f*0x2,_0x2d3a18),_0x22c94f+=0x1,_0x35d296['clearRect'](_0x22c94f,_0x22c94f,_0x43df4d-_0x22c94f*0x2,_0x43df4d-_0x22c94f*0x2);}else _0x2d3e34+=_0x2797ec[_0x474bb4(0x219)];}else'LnDLc'!==_0x474bb4(0x180)?_0x2d3e34+=_0x2797ec['normalOffsetY']:(_0x7ac68c(_0x474bb4(0x12c)[_0x474bb4(0x1a8)](_0x59ead4,_0x15b995)),_0x295d04[_0x474bb4(0x293)]());this['y']+=_0x2d3e34;});;Imported[_0x384a4b(0x2b3)]&&(VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x298)]=Window_ETB_ActionCount[_0x384a4b(0x2fd)][_0x384a4b(0x15d)],Window_ETB_ActionCount['prototype'][_0x384a4b(0x15d)]=function(){const _0x810efe=_0x384a4b;VisuMZ['MultiLayerHpGauge'][_0x810efe(0x298)][_0x810efe(0x20b)](this);if(Window_ETB_ActionCount['Settings'][_0x810efe(0x2fb)])return;const _0x3d2c65=$gameTroop[_0x810efe(0x222)]();if(_0x3d2c65<=0x0)return;const _0x4abb40=VisuMZ['MultiLayerHpGauge'][_0x810efe(0x20f)][_0x810efe(0x1b9)],_0x3321bc=_0x4abb40[_0x810efe(0x11f)];let _0x4dfec0=_0x3321bc*_0x3d2c65;const _0x2f2c92=SceneManager[_0x810efe(0x13d)][_0x810efe(0x1a9)];_0x2f2c92&&_0x2f2c92[_0x810efe(0x172)]&&Window_ETB_ActionCount['Settings'][_0x810efe(0x247)]?_0x4dfec0+=_0x4abb40['helpOffsetY']:_0x4dfec0+=_0x4abb40[_0x810efe(0x25e)],this['y']+=_0x4dfec0;});;Imported[_0x384a4b(0x15f)]&&(VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x2c8)]=Window_FTB_ActionCount['prototype']['updatePosition'],Window_FTB_ActionCount[_0x384a4b(0x2fd)]['updatePosition']=function(){const _0x35c8d8=_0x384a4b;VisuMZ[_0x35c8d8(0x19a)][_0x35c8d8(0x2c8)]['call'](this);if(Window_FTB_ActionCount[_0x35c8d8(0x2b5)]['BottomPosition'])return;const _0x5535b7=$gameTroop['totalVisibleMultiLayerHpGaugeRows']();if(_0x5535b7<=0x0)return;const _0x392e7c=VisuMZ['MultiLayerHpGauge'][_0x35c8d8(0x20f)]['ftb'],_0x303029=_0x392e7c[_0x35c8d8(0x11f)];let _0x288e3e=_0x303029*_0x5535b7;const _0x12bf66=SceneManager[_0x35c8d8(0x13d)][_0x35c8d8(0x1a9)];if(_0x12bf66&&_0x12bf66['visible']&&Window_FTB_ActionCount[_0x35c8d8(0x2b5)]['RepositionTopForHelp']){if(_0x35c8d8(0x237)!=='NTAjG')_0x288e3e+=_0x392e7c[_0x35c8d8(0x219)];else return this[_0x35c8d8(0x213)]();}else{if('dncUA'==='dncUA')_0x288e3e+=_0x392e7c[_0x35c8d8(0x25e)];else{if(!this[_0x35c8d8(0x171)])return;if(!this['_letterSprite'])return;if(this[_0x35c8d8(0x2a5)]===this[_0x35c8d8(0x171)][_0x35c8d8(0x2fc)]&&this[_0x35c8d8(0x2a3)]===this[_0x35c8d8(0x171)][_0x35c8d8(0x22c)])return;this[_0x35c8d8(0x2a5)]=this['_battler'][_0x35c8d8(0x2fc)],this['_lastPlural']=this[_0x35c8d8(0x171)][_0x35c8d8(0x22c)],this[_0x35c8d8(0x23b)]();}}this['y']+=_0x288e3e;});;Imported['VisuMZ_2_BattleSystemOTB']&&(VisuMZ['MultiLayerHpGauge'][_0x384a4b(0x15a)]=Window_OTB_TurnOrder[_0x384a4b(0x2fd)][_0x384a4b(0x15d)],Window_OTB_TurnOrder['prototype'][_0x384a4b(0x15d)]=function(){const _0x1f9128=_0x384a4b;VisuMZ[_0x1f9128(0x19a)][_0x1f9128(0x15a)][_0x1f9128(0x20b)](this);if(Window_OTB_TurnOrder[_0x1f9128(0x2b5)][_0x1f9128(0x1d3)]!==_0x1f9128(0x2c7))return;const _0x578a0b=$gameTroop[_0x1f9128(0x222)]();if(_0x578a0b<=0x0)return;const _0x4ef9a7=VisuMZ[_0x1f9128(0x19a)]['Compatibility']['otb'],_0x19bc56=_0x4ef9a7[_0x1f9128(0x11f)];let _0x5bae1d=_0x19bc56*_0x578a0b;const _0x4b2f1b=SceneManager[_0x1f9128(0x13d)][_0x1f9128(0x1a9)];_0x4b2f1b&&_0x4b2f1b[_0x1f9128(0x172)]&&Window_OTB_TurnOrder[_0x1f9128(0x2b5)][_0x1f9128(0x247)]?_0x5bae1d+=_0x4ef9a7[_0x1f9128(0x219)]:_0x5bae1d+=_0x4ef9a7['normalOffsetY'],this['y']+=_0x5bae1d;});;Imported[_0x384a4b(0x129)]&&(VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x21d)]=Window_PTB_ActionCount[_0x384a4b(0x2fd)][_0x384a4b(0x15d)],Window_PTB_ActionCount[_0x384a4b(0x2fd)]['updatePosition']=function(){const _0x2bf318=_0x384a4b;VisuMZ[_0x2bf318(0x19a)]['Window_PTB_TurnOrder_updatePosition'][_0x2bf318(0x20b)](this);if(Window_PTB_ActionCount[_0x2bf318(0x2b5)]['BottomPosition'])return;const _0x1c97ae=$gameTroop[_0x2bf318(0x222)]();if(_0x1c97ae<=0x0)return;const _0x129a38=VisuMZ[_0x2bf318(0x19a)][_0x2bf318(0x20f)][_0x2bf318(0x109)],_0x311b27=_0x129a38['eachRowOffsetY'];let _0x15c820=_0x311b27*_0x1c97ae;const _0x111057=SceneManager[_0x2bf318(0x13d)][_0x2bf318(0x1a9)];_0x111057&&_0x111057[_0x2bf318(0x172)]&&Window_PTB_ActionCount[_0x2bf318(0x2b5)][_0x2bf318(0x247)]?_0x2bf318(0x1a7)!==_0x2bf318(0x1a7)?this[_0x2bf318(0x29b)][_0x2bf318(0x295)]=_0xb8d9a9[_0x2bf318(0x162)](_0x589819(_0x4583ce['$1']),0x1):_0x15c820+=_0x129a38[_0x2bf318(0x219)]:_0x15c820+=_0x129a38[_0x2bf318(0x25e)],this['y']+=_0x15c820;});;Imported[_0x384a4b(0x26c)]&&(VisuMZ[_0x384a4b(0x19a)][_0x384a4b(0x243)]=Window_STB_TurnOrder[_0x384a4b(0x2fd)]['updatePosition'],Window_STB_TurnOrder[_0x384a4b(0x2fd)]['updatePosition']=function(){const _0x22d25c=_0x384a4b;VisuMZ['MultiLayerHpGauge'][_0x22d25c(0x243)][_0x22d25c(0x20b)](this);if(Window_STB_TurnOrder['Settings'][_0x22d25c(0x1d3)]!==_0x22d25c(0x2c7))return;const _0x470a27=$gameTroop['totalVisibleMultiLayerHpGaugeRows']();if(_0x470a27<=0x0)return;const _0x632434=VisuMZ[_0x22d25c(0x19a)][_0x22d25c(0x20f)][_0x22d25c(0x19e)],_0x14a1b5=_0x632434[_0x22d25c(0x11f)];let _0x1cbb13=_0x14a1b5*_0x470a27;const _0x3a910f=SceneManager[_0x22d25c(0x13d)][_0x22d25c(0x1a9)];_0x3a910f&&_0x3a910f[_0x22d25c(0x172)]&&Window_STB_TurnOrder['Settings']['RepositionTopForHelp']?_0x1cbb13+=_0x632434[_0x22d25c(0x219)]:_0x1cbb13+=_0x632434['normalOffsetY'],this['y']+=_0x1cbb13;});;