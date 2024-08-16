//=============================================================================
// VisuStella MZ - Battle System CTB - Charge Turn Battle
// VisuMZ_2_BattleSystemCTB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemCTB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemCTB = VisuMZ.BattleSystemCTB || {};
VisuMZ.BattleSystemCTB.version = 1.23;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.23] [BattleSystemCTB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_CTB_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin creates a Charge Turn Battle (CTB) system using RPG Maker MZ's
 * TPB as a base. CTB functions by calculating the speed of every battler and
 * balancing them relative to one another. When it's a battler's turn, the
 * battler will either choose an action to perform immediately or charge it
 * for later depending if the skill requires charging.
 * 
 * This is a battle system where agility plays an important factor in the
 * progress of battle where higher agility values give battlers more advantage
 * and additional turns over lower agility values, which give battlers less
 * advantage and less turns.
 * 
 * A turn order display will appear to compensate for the removal of gauges.
 * The turn order display will show a preview of what the turn order could
 * possibly be like. This turn order display is variable and can be changed
 * due to player and enemy influence by using different action speeds, effects
 * provided by this plugin that alter the turn order, and more!
 * 
 * *NOTE* To use this battle system, you will need the updated version of
 * VisuStella's Core Engine. Go into its Plugin Parameters and change the
 * "Battle System" plugin parameter to "ctb".
 *
 * Features include all (but not limited to) the following:
 * 
 * * Full control over the TPB integrated mechanics converted for CTB such as
 *   speed, calculations, etc.
 * * No more waiting for gauges to show up! In fact, you won't even see the
 *   TPB gauge in-game.
 * * A turn order display that previews a potential lineup for how the
 *   participating battlers in battle will play out.
 * * Notetags that give skills and items access to manipulating a battler's
 *   CTB speed.
 * * Notetags that give skills and items access to directly manipulate a target
 *   batter's position on the Turn Order display.
 * * These mechanics are separate from ATB and TPB itself, so you can still use
 *   either battle system without affecting both of them.
 * * Through the Core Engine, you can switch in and out of CTB for a different
 *   battle system.
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
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 * 
 * *NOTE* To use this battle system, you will need the updated version of
 * VisuStella's Core Engine. Go into its Plugin Parameters and change the
 * "Battle System" plugin parameter to "ctb".
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
 * Turn Order Display
 * 
 * Despite the fact that the Battle System CTB plugin uses RPG Maker MZ's TPB
 * as a base, it does not have any gauges to depict the time it takes for a
 * battler's turn to appear. Instead, a turn order display appears on the
 * screen (you pick where it can appear: top, bottom, left, or right) and shows
 * a possible preview of the battler turn order.
 * 
 * This is only a preview of what can happen because lots of different things
 * can influence the position and ordering of the turn order display, ranging
 * from skill/item speeds, notetag effects, changes in AGI, etc. What is seen
 * on the turn order display is the most likely possibility instead of the
 * exact order to occur due to the external influences.
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
 * However, this isn't the case with RPG Maker MZ's TPB. By changing it to CTB,
 * skills and items with positive speed values will have an impact on how full
 * their CTB Speed will be in the following turn. A value of 2000 will put the
 * turn at 50% ready, 1000 will put the gauge at 25% ready, 500 will put it at
 * 12.5% ready, and so on. Notetags can also be used to influence this.
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
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === General CTB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 * 
 * ---
 * 
 * <CTB Help>
 *  description
 *  description
 * </CTB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under CTB.
 * - This is primarily used if the skill behaves differently in CTB versus any
 *   other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to CTB.
 *
 * ---
 * 
 * === CTB Turn Order Display-Related Notetags ===
 * 
 * These notetags affect the CTB Turn Order Display
 * 
 * ---
 *
 * <CTB Turn Order Icon: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the battler to a specific icon.
 * - Replace 'x' with the icon index to be used.
 * 
 * ---
 *
 * <CTB Turn Order Face: filename, index>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the enemy to a specific face.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Replace 'index' with the index of the face. Index values start at 0.
 * - Example: <CTB Turn Order Face: Monster, 1>
 * 
 * ---
 * 
 * === CTB Speed Manipulation-Related Notetags ===
 * 
 * These notetags are used for CTB Speed manipulation purposes.
 * 
 * ---
 *
 * <CTB Set Order: x>
 *
 * - Used for: Skill, Item Notetags
 * - Sets the target's CTB Turn Order position to exactly x.
 * - Replace 'x' with a number value depicting the exact position of the turn
 *   order position. 0 is the currently active battler and cannot be used.
 *   1 is closest to taking a turn. Higher numbers are further away.
 * - This does not affect the currently active battler.
 *
 * ---
 *
 * <CTB Change Order: +x>
 * <CTB Change Order: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Sets the target's CTB Turn Order position by x slots.
 * - Replace 'x' with a number value indicating the increase or decrease.
 *   Negative values decrease the turns needed to wait while positive values
 *   increase the turns needed.
 * - This does not affect the currently active battler.
 *
 * ---
 *
 * <CTB After Speed: x%>
 *
 * - Used for: Skill, Item Notetags
 * - After using the skill/item, the user's CTB Speed will be set to x%.
 * - Replace 'x' with a percentile value representing the amount you want the
 *   CTB Speed to reset to after the skill/item's usage.
 * 
 * ---
 * 
 * <CTB Charge Speed: x%>
 * <CTB Charge Speed: +x%>
 * <CTB Charge Speed: -x%>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is in a charging state, change the target's speed amount to
 *   x% or by x% (if using the +/- variants).
 * - Replace 'x' with a percentile value representing the amount of the CTB
 *   Speed you wish to alter it to/by.
 * - This only affects targets who are in a charging state.
 * 
 * ---
 * 
 * <CTB Cast Speed: x%>
 * <CTB Cast Speed: +x%>
 * <CTB Cast Speed: -x%>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is in a casting state, change the target's speed amount to
 *   x% or by x% (if using the +/- variants).
 * - Replace 'x' with a percentile value representing the amount of the CTB
 *   Speed you wish to alter it to/by.
 * - This only affects targets who are in a casting state.
 * 
 * ---
 * 
 * === JavaScript Notetags: CTB Speed Manipulation ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * give more control over conditional CTB Speed Manipulation.
 * 
 * ---
 * 
 * <JS CTB Order>
 *  code
 *  code
 *  order = code;
 * </JS CTB Order>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine where to set the target's
 *   order on the CTB Turn Order Display to.
 * - The 'order' variable represents the final position on the Turn Order
 *   Display to place the target.
 * - The 'position' variable represents the target's current position on the
 *   Turn Order Display.
 * - This does not affect the currently active battler.
 * 
 * ---
 * 
 * <JS CTB Charge Speed>
 *  code
 *  code
 *  rate = code;
 * </JS CTB Charge Speed>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   CTB Speed to if the target is in a charging state.
 * - The 'rate' variable represents rate value the CTB Speed will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to the target's current CTB Speed rate
 *   if the target is in a charging state.
 * 
 * ---
 * 
 * <JS CTB Cast Speed>
 *  code
 *  code
 *  rate = code;
 * </JS CTB Cast Speed>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   CTB Speed to if the target is in a casting state.
 * - The 'rate' variable represents rate value the CTB Speed will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to the target's current CTB Speed rate
 *   if the target is in a casting state.
 * 
 * ---
 * 
 * <JS CTB After Speed>
 *  code
 *  code
 *  rate = code;
 * </JS CTB After Speed>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   CTB Speed to after performing this skill/item action.
 * - The 'rate' variable represents rate value the CTB Speed will change to
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
 * Actor: Change CTB Turn Order Icon
 * - Changes the icons used for the specific actor(s) on the CTB Turn Order.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 * 
 * Actor: Change CTB Turn Order Face
 * - Changes the faces used for the specific actor(s) on the CTB Turn Order.
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
 * Actor: Clear CTB Turn Order Graphic
 * - Clears the CTB Turn Order graphics for the actor(s).
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
 * Enemy: Change CTB Turn Order Icon
 * - Changes the icons used for the specific enemy(ies) on the CTB Turn Order.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Enemy: Change CTB Turn Order Face
 * - Changes the faces used for the specific enemy(ies) on the CTB Turn Order.
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
 * Enemy: Clear CTB Turn Order Graphic
 * - Clears the CTB Turn Order graphics for the enemy(ies).
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
 * System: CTB Turn Order Visibility
 * - Determine the visibility of the CTB Turn Order Display.
 * 
 *   Visibility:
 *   - Changes the visibility of the CTB Turn Order Display.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Mechanics settings used for Battle System CTB. The majority of these are
 * JavaScript-based and will require knowledge of JavaScript to fully utilize
 * the plugin parameters.
 *
 * ---
 *
 * General
 * 
 *   Device Friendly:
 *   - Make the calculations more device friendly?
 *   - Or make it for desktop at full strength?
 * 
 *   Escape Fail Penalty:
 *   - Gauge penalty if an escape attempt fails.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: Initial Speed:
 *   - JavaScript code to determine how much speed to give each battler at the
 *     start of battle.
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
 * Plugin Parameters: Order Change Effects Settings
 * ============================================================================
 * 
 * Whenever the turn order a battler is changed by a CTB Order notetag, play
 * these effects on the target battler. These effects do not play if the order
 * was changed due to speed changes and only through the specific notetags.
 *
 * ---
 *
 * Delay Turn Order > Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 *   - Occurs when the turn order is delayed.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 *   - Occurs when the turn order is delayed.
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *   - Occurs when the turn order is delayed.
 *
 * ---
 *
 * Delay Turn Order > Popups
 * 
 *   Text:
 *   - Text displayed upon the effect activating.
 *   - Occurs when the turn order is delayed.
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
 * Rush Turn Order > Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 *   - Occurs when the turn order is rushed.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 *   - Occurs when the turn order is rushed.
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *   - Occurs when the turn order is rushed.
 *
 * ---
 *
 * Rush Turn Order > Popups
 * 
 *   Text:
 *   - Text displayed upon the effect activating.
 *   - Occurs when the turn order is rushed.
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
 * ============================================================================
 * Plugin Parameters: Turn Order Display Settings
 * ============================================================================
 *
 * Turn Order Display settings used for Battle System CTB. These adjust how the
 * visible turn order appears in-game.
 *
 * ---
 *
 * General
 * 
 *   Display Position:
 *   - Select where the Turn Order will appear on the screen.
 * 
 *     Offset X:
 *     - How much to offset the X coordinate by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset the Y coordinate by.
 *     - Negative: up. Positive: down.
 * 
 *   Reposition for Help?:
 *   - If the display position is at the top, reposition the display when the
 *     help window is open?
 * 
 *   Reposition Log?:
 *   - If the display position is at the top, reposition the Battle Log Window
 *     to be lower?
 * 
 *   Forward Direction:
 *   - Decide on the direction of the Turn Order.
 *   - Settings may vary depending on position.
 *   - Left to Right / Down to Up
 *   - Right to Left / Up to Down
 * 
 *   Subject Distance:
 *   - How far do you want the currently active battler to distance itself from
 *     the rest of the Turn Order?
 * 
 *   Screen Buffer:
 *   - What distance do you want the display to be away from the edge of the
 *     screen by?
 *
 * ---
 *
 * Reposition For Help
 * 
 *   Repostion X By:
 *   Repostion Y By:
 *   - Reposition the display's coordinates by this much when the Help Window
 *     is visible.
 *
 * ---
 *
 * Slots
 * 
 *   Total Horizontal:
 *   - How many slots do you want to display for top and bottom Turn Order
 *     Display positions?
 * 
 *   Total Vertical:
 *   - How many slots do you want to display for left and right Turn Order
 *     Display positions?
 * 
 *   Length:
 *   - How many pixels long should the slots be on the Turn Order display?
 * 
 *   Thin:
 *   - How many pixels thin should the slots be on the Turn Order display?
 * 
 *   Update Frames:
 *   - How many frames should it take for the slots to update their
 *     positions by?
 *
 * ---
 *
 * Slot Border
 * 
 *   Show Border?:
 *   - Show borders for the slot sprites?
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
 * Slot Sprites
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
 * Slot Letter
 * 
 *   Show Enemy Letter?:
 *   - Show the enemy's letter on the slot sprite?
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
 * Slot Background
 * 
 *   Show Background?:
 *   - Show the background on the slot sprite?
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
 * Version 1.23: July 18, 2024
 * * Bug Fixes!
 * ** Fixed a softlock that is caused from surprise attacks involving 100% CTB
 *    After Speed. Fix made by Olivia.
 * 
 * Version 1.22: July 13, 2023
 * * Bug Fixes!
 * ** Fixed turn order gauge sprite swapping bug for battlers with similar AGI
 *    values. Fix made by Olivia.
 * 
 * Version 1.21: December 15, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.20: August 18, 2022
 * * Bug Fixes!
 * ** Fixed bugs that caused the CTB Turn Order faces and icons to not change
 *    properly for actors and enemies. Fix made by Olivia.
 * 
 * Version 1.19: July 7, 2022
 * * Compatibility Update!
 * ** Plugin is now updated to support larger than 8 troop sizes.
 * 
 * Version 1.18: June 2, 2022
 * * Bug Fixes!
 * ** Notetag effect for <CTB After Speed: x%> should now be working properly.
 *    Fix made by Olivia.
 * ** Notetag effect for <JS CTB After Speed> should now be working properly.
 *    Fix made by Olivia.
 * 
 * Version 1.17: May 2, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.16: April 28, 2022
 * * Feature Update!
 * ** Added update for CTB-specific idle time to allow a more consistent turn
 *    end processing for actors and enemies with higher than normal AGI values.
 *    Update made by Olivia.
 * 
 * Version 1.15: April 21, 2022
 * * Bug Fixes!
 * ** The endless softlock has been fixed! Much thanks to AndyL for providing a
 *    project that can easily replicate it! Fix made by Yanfly.
 * * Feature Update!
 * ** Slightly more accurate turn order forecasting. However, there is only so
 *    much I can do due to JavaScript's "accuracy" with decimal values. Update
 *    made by Yanfly.
 * 
 * Version 1.14: March 31, 2022
 * * Feature Update!
 * ** Updated anti-softlock check at 180 frames (3 seconds) to automatically
 *    clear any battle states to see if they're the cause of the hangup.
 * ** Updated anti-softlock check at 300 frames (5 seconds) to automatically
 *    clear all states to see if they're the cause of the hangup.
 * ** Updated anti-softlock check at 600 frames (10 seconds) to automatically
 *    abort the battle to salvage the game from freezing.
 * 
 * Version 1.13: March 3, 2022
 * * Feature Update!
 * ** Reserved common events for non-action sequence skills now function
 *    separately from one another when used by a battler with Action Times+.
 *    Update made by Olivia.
 * 
 * Version 1.12: February 17, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: October 28, 2021
 * * Bug Fixes!
 * ** Turn Order display will no longer appear at differing X and Y positions
 *    when using specific battle layouts. Update made by Olivia.
 * 
 * Version 1.10: June 18, 2021
 * * Bug Fixes!
 * ** Fixed turn order icon reappearing for a dying battler. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated with new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu!
 * *** Plugin Parameters > Mechanics > General > Device Friendly
 * **** Make the calculations more device friendly? Or make it for desktop at
 *      full strength?
 * 
 * Version 1.09: June 11, 2021
 * * Bug Fixes!
 * ** Plugin Command: "Enemy: Change CTB Turn Order Face" should now properly
 *    change to the correct face index. Fix made by Arisu.
 * 
 * Version 1.08: April 23, 2021
 * * Feature Update!
 * ** When using 100% for After Speed notetag, no other battler is able to
 *    interrupt the action. Update made by Olivia.
 * 
 * Version 1.07: March 19, 2021
 * * Feature Update!
 * ** Turn Order Window calculations slightly tweaked for times when the window
 *    layer is bigger than it should be. Update made by Olivia.
 * 
 * Version 1.06: January 22, 2021
 * * Feature Update!
 * ** A different kind of end battle check is now made to determine hiding the
 *    turn order display. Update made by Olivia.
 * ** Added in a built-in anti-softlock check.
 * 
 * Version 1.05: January 1, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.04: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.03: November 1, 2020
 * * Documentation Update!
 * ** Help file updated with new features.
 * * Optimization Update!
 * ** Uses less resources for turn order display.
 * * New Features!
 * ** New Plugin Command by Irina!
 * *** Actor: Change CTB Turn Order Face
 * **** Changes the faces used for the specific actor(s) on the CTB Turn Order.
 * 
 * Version 1.02: October 25, 2020
 * * Bug Fixes!
 * ** Turn Order icons no longer stay invisible after rotating out completely.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated with new features.
 * * Feature Update!
 * ** <CTB Turn Order Face: filename, index> notetag now works with actors.
 *    Update made by Irina.
 * 
 * Version 1.01: October 18, 2020
 * * Bug Fixes!
 * ** Action times + should no longer freeze the game. Fix made by Yanfly.
 * ** Actors and enemies without actions will no longer softlock the game.
 *    Fix made by Yanfly.
 * ** Auto-battle during CTB should no longer lock the game! Fix by Yanfly.
 * ** Enemies without any actions should no longer cause endless loops.
 *    Fix made by Yanfly.
 * ** SV_Actor graphics on the Turn Order display are now centered.
 *    Fix made by Yanfly.
 *
 * Version 1.00 Official Release: October 19, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CtbTurnOrderActorIcon
 * @text Actor: Change CTB Turn Order Icon
 * @desc Changes the icons used for the specific actor(s) on the CTB Turn Order.
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
 * @command CtbTurnOrderActorFace
 * @text Actor: Change CTB Turn Order Face
 * @desc Changes the faces used for the specific actor(s) on the CTB Turn Order.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Actor1
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CtbTurnOrderClearActorGraphic
 * @text Actor: Clear CTB Turn Order Graphic
 * @desc Clears the CTB Turn Order graphics for the actor(s).
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
 * @command CtbTurnOrderEnemyIcon
 * @text Enemy: Change CTB Turn Order Icon
 * @desc Changes the icons used for the specific enemy(ies) on the CTB Turn Order.
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
 * @command CtbTurnOrderEnemyFace
 * @text Enemy: Change CTB Turn Order Face
 * @desc Changes the faces used for the specific enemy(ies) on the CTB Turn Order.
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
 * @command CtbTurnOrderClearEnemyGraphic
 * @text Enemy: Clear CTB Turn Order Graphic
 * @desc Clears the CTB Turn Order graphics for the enemy(ies).
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
 * @command SystemTurnOrderVisibility
 * @text System: CTB Turn Order Visibility
 * @desc Determine the visibility of the CTB Turn Order Display.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the CTB Turn Order Display.
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
 * @param BattleSystemCTB
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
 * @desc Mechanics settings used for Battle System CTB.
 * @default {"General":"","EscapeFailPenalty:num":"-1.00","JavaScript":"","InitialGaugeJS:str":"Math.random() * 0.50","TpbSpeedCalcJS:func":"\"// Declare Constants\\nconst user = this;\\n\\n// Process Calculation\\nlet speed = Math.sqrt(user.agi) + 1;\\n\\n// Return Value\\nreturn speed;\"","TpbBaseSpeedCalcJS:func":"\"// Declare Constants\\nconst user = this;\\nconst baseAgility = user.paramBasePlus(6);\\n\\n// Process Calculation\\nlet speed = Math.sqrt(baseAgility) + 1;\\n\\n// Return Value\\nreturn speed;\"","BattlerRelativeSpeedJS:func":"\"// Declare Constants\\nconst user = this;\\nconst speed = user.tpbSpeed()\\nconst partyBaseSpeed = $gameParty.tpbBaseSpeed();\\n\\n// Process Calculation\\nlet relativeSpeed = speed / partyBaseSpeed;\\n\\n// Return Value\\nreturn relativeSpeed;\"","TpbAccelerationJS:func":"\"// Declare Constants\\nconst user = this;\\nconst speed = user.tpbRelativeSpeed();\\nconst referenceTime = $gameParty.tpbReferenceTime();\\n\\n// Process Calculation\\nlet acceleration = speed / referenceTime;\\n\\n// Return Value\\nreturn acceleration;\"","TpbCastTimeJS:func":"\"// Declare Constants\\nconst user = this;\\nconst actions = user._actions.filter(action => action.isValid());\\nconst items = actions.map(action => action.item());\\nconst delay = items.reduce((r, item) => r + Math.max(0, -item.speed), 0);\\n\\n// Process Calculation\\nlet time = Math.sqrt(delay) / user.tpbSpeed();\\n\\n// Return Value\\nreturn time;\""}
 *
 * @param Effect:struct
 * @text Order Change Effects
 * @type struct<Effect>
 * @desc Effects to play when the Turn Order is changed in CTB.
 * @default {"Delay":"","DelayAnimation":"","DelayAnimationID:num":"54","DelayMirror:eval":"false","DelayMute:eval":"false","DelayPopups":"","DelayPopupText:str":"DELAY","DelayTextColor:str":"25","DelayFlashColor:eval":"[255, 0, 0, 160]","DelayFlashDuration:num":"60","Rush":"","RushAnimation":"","RushAnimationID:num":"51","RushMirror:eval":"false","RushMute:eval":"false","RushPopups":"","RushPopupText:str":"RUSH","RushTextColor:str":"24","RushFlashColor:eval":"[0, 255, 0, 160]","RushFlashDuration:num":"60"}
 *
 * @param TurnOrder:struct
 * @text Turn Order Display
 * @type struct<TurnOrder>
 * @desc Turn Order Display settings used for Battle System CTB.
 * @default {"General":"","DisplayPosition:str":"top","DisplayOffsetX:num":"0","DisplayOffsetY:num":"0","RepositionTopForHelp:eval":"true","RepositionLogWindow:eval":"true","OrderDirection:eval":"true","SubjectDistance:num":"8","ScreenBuffer:num":"20","Reposition":"","RepositionTopHelpX:num":"0","RepositionTopHelpY:num":"96","Slots":"","TotalHorzSprites:num":"16","TotalVertSprites:num":"10","SpriteLength:num":"72","SpriteThin:num":"36","UpdateFrames:num":"24","Border":"","ShowMarkerBorder:eval":"true","BorderActor":"","ActorBorderColor:str":"4","ActorSystemBorder:str":"","BorderEnemy":"","EnemyBorderColor:str":"2","EnemySystemBorder:str":"","BorderThickness:num":"2","Sprite":"","ActorSprite":"","ActorBattlerType:str":"face","ActorBattlerIcon:num":"84","EnemySprite":"","EnemyBattlerType:str":"enemy","EnemyBattlerFaceName:str":"Monster","EnemyBattlerFaceIndex:num":"1","EnemyBattlerIcon:num":"298","EnemyBattlerMatchHue:eval":"true","Letter":"","EnemyBattlerDrawLetter:eval":"true","EnemyBattlerFontFace:str":"","EnemyBattlerFontSize:num":"16","Background":"","ShowMarkerBg:eval":"true","BackgroundActor":"","ActorBgColor1:str":"19","ActorBgColor2:str":"9","ActorSystemBg:str":"","BackgroundEnemy":"","EnemyBgColor1:str":"19","EnemyBgColor2:str":"18","EnemySystemBg:str":""}
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
 * @param DeviceFriendly:eval
 * @text Device Friendly
 * @parent General
 * @type boolean
 * @on Device Friendly
 * @off For Desktops
 * @desc Make the calculations more device friendly?
 * Or make it for desktop at full strength?
 * @default false
 * 
 * @param EscapeFailPenalty:num
 * @text Escape Fail Penalty
 * @parent General
 * @desc Gauge penalty if an escape attempt fails.
 * @default -1.00
 *
 * @param JavaScript
 *
 * @param InitialGaugeJS:str
 * @text JS: Initial Speed
 * @parent JavaScript
 * @desc JavaScript code to determine how much speed to give
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
 * Effect Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Effect:
 *
 * @param Delay
 * @text Delay Turn Order
 * 
 * @param DelayAnimation
 * @text Animation
 * @parent Delay
 *
 * @param DelayAnimationID:num
 * @text Animation ID
 * @parent DelayAnimation
 * @type animation
 * @desc Play this animation when the effect activates.
 * Occurs when the turn order is delayed.
 * @default 54
 *
 * @param DelayMirror:eval
 * @text Mirror Animation
 * @parent DelayAnimation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * Occurs when the turn order is delayed.
 * @default false
 *
 * @param DelayMute:eval
 * @text Mute Animation
 * @parent DelayAnimation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * Occurs when the turn order is delayed.
 * @default false
 *
 * @param DelayPopups
 * @text Popups
 * @parent Delay
 *
 * @param DelayPopupText:str
 * @text Text
 * @parent DelayPopups
 * @desc Text displayed upon the effect activating.
 * Occurs when the turn order is delayed.
 * @default DELAY
 *
 * @param DelayTextColor:str
 * @text Text Color
 * @parent DelayPopups
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 25
 *
 * @param DelayFlashColor:eval
 * @text Flash Color
 * @parent DelayPopups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @param DelayFlashDuration:num
 * @text Flash Duration
 * @parent DelayPopups
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @param Rush
 * @text Rush Turn Order
 * 
 * @param RushAnimation
 * @text Animation
 * @parent Rush
 *
 * @param RushAnimationID:num
 * @text Animation ID
 * @parent RushAnimation
 * @type animation
 * @desc Play this animation when the effect activates.
 * Occurs when the turn order is rushed.
 * @default 51
 *
 * @param RushMirror:eval
 * @text Mirror Animation
 * @parent RushAnimation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * Occurs when the turn order is rushed.
 * @default false
 *
 * @param RushMute:eval
 * @text Mute Animation
 * @parent RushAnimation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * Occurs when the turn order is rushed.
 * @default false
 *
 * @param RushPopups
 * @text Popups
 * @parent Rush
 *
 * @param RushPopupText:str
 * @text Text
 * @parent RushPopups
 * @desc Text displayed upon the effect activating.
 * Occurs when the turn order is rushed.
 * @default RUSH
 *
 * @param RushTextColor:str
 * @text Text Color
 * @parent RushPopups
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param RushFlashColor:eval
 * @text Flash Color
 * @parent RushPopups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [0, 255, 0, 160]
 * 
 * @param RushFlashDuration:num
 * @text Flash Duration
 * @parent RushPopups
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 */
/* ----------------------------------------------------------------------------
 * Turn Order Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TurnOrder:
 *
 * @param General
 *
 * @param DisplayPosition:str
 * @text Display Position
 * @parent General
 * @type select
 * @option top
 * @option bottom
 * @option left
 * @option right
 * @desc Select where the Turn Order will appear on the screen.
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
 * display when the help window is open?
 * @default true
 *
 * @param RepositionLogWindow:eval
 * @text Reposition Log?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * Battle Log Window to be lower?
 * @default true
 *
 * @param OrderDirection:eval
 * @text Forward Direction
 * @parent General
 * @type boolean
 * @on Left to Right / Down to Up
 * @off Right to Left / Up to Down
 * @desc Decide on the direction of the Turn Order.
 * Settings may vary depending on position.
 * @default true
 *
 * @param SubjectDistance:num
 * @text Subject Distance
 * @parent General
 * @type number
 * @desc How far do you want the currently active battler to
 * distance itself from the rest of the Turn Order?
 * @default 8
 *
 * @param ScreenBuffer:num
 * @text Screen Buffer
 * @parent General
 * @type number
 * @desc What distance do you want the display to be away
 * from the edge of the screen by?
 * @default 20
 * 
 * @param Reposition
 * @text Reposition For Help
 *
 * @param RepositionTopHelpX:num
 * @text Repostion X By
 * @parent Reposition
 * @desc Reposition the display's X coordinates by this much when
 * the Help Window is visible.
 * @default 0
 *
 * @param RepositionTopHelpY:num
 * @text Repostion Y By
 * @parent Reposition
 * @desc Reposition the display's Y coordinates by this much when
 * the Help Window is visible.
 * @default 96
 * 
 * @param Slots
 *
 * @param TotalHorzSprites:num
 * @text Total Horizontal
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many slots do you want to display for top and
 * bottom Turn Order Display positions?
 * @default 16
 *
 * @param TotalVertSprites:num
 * @text Total Vertical
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many slots do you want to display for left and
 * right Turn Order Display positions?
 * @default 10
 *
 * @param SpriteLength:num
 * @text Length
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels long should the slots be on the
 * Turn Order display?
 * @default 72
 *
 * @param SpriteThin:num
 * @text Thin
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels thin should the slots be on the
 * Turn Order display?
 * @default 36
 *
 * @param UpdateFrames:num
 * @text Update Frames
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many frames should it take for the slots to
 * update their positions by?
 * @default 24
 *
 * @param Border
 * @text Slot Border
 *
 * @param ShowMarkerBorder:eval
 * @text Show Border?
 * @parent Border
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show borders for the slot sprites?
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
 * @text Slot Sprites
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
 * @text Slot Letter
 *
 * @param EnemyBattlerDrawLetter:eval
 * @text Show Enemy Letter?
 * @parent Letter
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the enemy's letter on the slot sprite?
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
 * @text Slot Background
 *
 * @param ShowMarkerBg:eval
 * @text Show Background?
 * @parent Background
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the background on the slot sprite?
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
 * @default 19
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
 * @default 19
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
 */
//=============================================================================

const _0x34aa07=_0x1817;(function(_0xca26d5,_0x5d72ab){const _0x3ee665=_0x1817,_0x2eb3d0=_0xca26d5();while(!![]){try{const _0x1a57e8=parseInt(_0x3ee665(0x1a6))/0x1+-parseInt(_0x3ee665(0x155))/0x2+parseInt(_0x3ee665(0x20a))/0x3+-parseInt(_0x3ee665(0x1f1))/0x4*(-parseInt(_0x3ee665(0x222))/0x5)+-parseInt(_0x3ee665(0x17b))/0x6*(parseInt(_0x3ee665(0x24e))/0x7)+parseInt(_0x3ee665(0x23f))/0x8+parseInt(_0x3ee665(0x109))/0x9*(-parseInt(_0x3ee665(0xdf))/0xa);if(_0x1a57e8===_0x5d72ab)break;else _0x2eb3d0['push'](_0x2eb3d0['shift']());}catch(_0x2b58ee){_0x2eb3d0['push'](_0x2eb3d0['shift']());}}}(_0x4f08,0x70ffc));function _0x1817(_0x563357,_0x584fee){const _0x4f0899=_0x4f08();return _0x1817=function(_0x18178f,_0x263ba5){_0x18178f=_0x18178f-0xc1;let _0x5d5b6c=_0x4f0899[_0x18178f];return _0x5d5b6c;},_0x1817(_0x563357,_0x584fee);}var label=_0x34aa07(0x209),tier=tier||0x0,dependencies=['VisuMZ_0_CoreEngine','VisuMZ_1_BattleCore'],pluginData=$plugins[_0x34aa07(0x12e)](function(_0xc56049){const _0x32c2b4=_0x34aa07;return _0xc56049[_0x32c2b4(0x262)]&&_0xc56049['description'][_0x32c2b4(0xd6)]('['+label+']');})[0x0];VisuMZ[label][_0x34aa07(0x242)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x34aa07(0x1dc)]=function(_0xf0e23e,_0x3a441a){const _0x4227ac=_0x34aa07;for(const _0x3ed3bd in _0x3a441a){if(_0x3ed3bd[_0x4227ac(0x1de)](/(.*):(.*)/i)){const _0x46b09f=String(RegExp['$1']),_0x197376=String(RegExp['$2'])[_0x4227ac(0x203)]()['trim']();let _0x120ea6,_0x79c53e,_0x4f166a;switch(_0x197376){case'NUM':_0x120ea6=_0x3a441a[_0x3ed3bd]!==''?Number(_0x3a441a[_0x3ed3bd]):0x0;break;case'ARRAYNUM':_0x79c53e=_0x3a441a[_0x3ed3bd]!==''?JSON[_0x4227ac(0x22c)](_0x3a441a[_0x3ed3bd]):[],_0x120ea6=_0x79c53e[_0x4227ac(0x175)](_0x59c4bc=>Number(_0x59c4bc));break;case'EVAL':_0x120ea6=_0x3a441a[_0x3ed3bd]!==''?eval(_0x3a441a[_0x3ed3bd]):null;break;case _0x4227ac(0x16e):_0x79c53e=_0x3a441a[_0x3ed3bd]!==''?JSON[_0x4227ac(0x22c)](_0x3a441a[_0x3ed3bd]):[],_0x120ea6=_0x79c53e[_0x4227ac(0x175)](_0x2e8fcd=>eval(_0x2e8fcd));break;case _0x4227ac(0x134):_0x120ea6=_0x3a441a[_0x3ed3bd]!==''?JSON['parse'](_0x3a441a[_0x3ed3bd]):'';break;case'ARRAYJSON':_0x79c53e=_0x3a441a[_0x3ed3bd]!==''?JSON[_0x4227ac(0x22c)](_0x3a441a[_0x3ed3bd]):[],_0x120ea6=_0x79c53e['map'](_0x196f8b=>JSON['parse'](_0x196f8b));break;case _0x4227ac(0x1b6):_0x120ea6=_0x3a441a[_0x3ed3bd]!==''?new Function(JSON[_0x4227ac(0x22c)](_0x3a441a[_0x3ed3bd])):new Function(_0x4227ac(0xe8));break;case'ARRAYFUNC':_0x79c53e=_0x3a441a[_0x3ed3bd]!==''?JSON[_0x4227ac(0x22c)](_0x3a441a[_0x3ed3bd]):[],_0x120ea6=_0x79c53e[_0x4227ac(0x175)](_0x5b7c24=>new Function(JSON[_0x4227ac(0x22c)](_0x5b7c24)));break;case _0x4227ac(0x1f8):_0x120ea6=_0x3a441a[_0x3ed3bd]!==''?String(_0x3a441a[_0x3ed3bd]):'';break;case _0x4227ac(0xdd):_0x79c53e=_0x3a441a[_0x3ed3bd]!==''?JSON[_0x4227ac(0x22c)](_0x3a441a[_0x3ed3bd]):[],_0x120ea6=_0x79c53e[_0x4227ac(0x175)](_0x48296c=>String(_0x48296c));break;case _0x4227ac(0x1c6):_0x4f166a=_0x3a441a[_0x3ed3bd]!==''?JSON['parse'](_0x3a441a[_0x3ed3bd]):{},_0x120ea6=VisuMZ[_0x4227ac(0x1dc)]({},_0x4f166a);break;case _0x4227ac(0xc2):_0x79c53e=_0x3a441a[_0x3ed3bd]!==''?JSON[_0x4227ac(0x22c)](_0x3a441a[_0x3ed3bd]):[],_0x120ea6=_0x79c53e[_0x4227ac(0x175)](_0x2d0696=>VisuMZ[_0x4227ac(0x1dc)]({},JSON['parse'](_0x2d0696)));break;default:continue;}_0xf0e23e[_0x46b09f]=_0x120ea6;}}return _0xf0e23e;},(_0x15da55=>{const _0x59b43c=_0x34aa07,_0xcc5a32=_0x15da55[_0x59b43c(0x1b0)];for(const _0x50c944 of dependencies){if(!Imported[_0x50c944]){alert(_0x59b43c(0x139)['format'](_0xcc5a32,_0x50c944)),SceneManager[_0x59b43c(0x182)]();break;}}const _0x3a35ed=_0x15da55['description'];if(_0x3a35ed['match'](/\[Version[ ](.*?)\]/i)){const _0x49d411=Number(RegExp['$1']);_0x49d411!==VisuMZ[label]['version']&&(alert(_0x59b43c(0xc3)[_0x59b43c(0x17e)](_0xcc5a32,_0x49d411)),SceneManager[_0x59b43c(0x182)]());}if(_0x3a35ed[_0x59b43c(0x1de)](/\[Tier[ ](\d+)\]/i)){const _0x5767a1=Number(RegExp['$1']);_0x5767a1<tier?(alert(_0x59b43c(0x11b)[_0x59b43c(0x17e)](_0xcc5a32,_0x5767a1,tier)),SceneManager['exit']()):tier=Math['max'](_0x5767a1,tier);}VisuMZ[_0x59b43c(0x1dc)](VisuMZ[label][_0x59b43c(0x242)],_0x15da55['parameters']);})(pluginData),PluginManager[_0x34aa07(0x1f6)](pluginData[_0x34aa07(0x1b0)],_0x34aa07(0x19f),_0xb315d3=>{const _0x1209b0=_0x34aa07;VisuMZ[_0x1209b0(0x1dc)](_0xb315d3,_0xb315d3);const _0x13228f=_0xb315d3[_0x1209b0(0x266)],_0x12f6d6=_0xb315d3[_0x1209b0(0x278)];for(const _0x475990 of _0x13228f){const _0x5d3bf9=$gameActors[_0x1209b0(0x21d)](_0x475990);if(!_0x5d3bf9)continue;_0x5d3bf9['_ctbTurnOrderGraphicType']=_0x1209b0(0x107),_0x5d3bf9[_0x1209b0(0x24d)]=_0x12f6d6;}}),PluginManager['registerCommand'](pluginData[_0x34aa07(0x1b0)],_0x34aa07(0x141),_0x3bb2ed=>{const _0x4707a3=_0x34aa07;VisuMZ['ConvertParams'](_0x3bb2ed,_0x3bb2ed);const _0x5a2898=_0x3bb2ed[_0x4707a3(0x266)],_0x2871dc=_0x3bb2ed[_0x4707a3(0x251)],_0x436e06=_0x3bb2ed[_0x4707a3(0x20c)];for(const _0x284dd5 of _0x5a2898){const _0x3272b6=$gameActors['actor'](_0x284dd5);if(!_0x3272b6)continue;_0x3272b6[_0x4707a3(0x235)]='face',_0x3272b6[_0x4707a3(0x12a)]=_0x2871dc,_0x3272b6[_0x4707a3(0xc6)]=_0x436e06;}}),PluginManager[_0x34aa07(0x1f6)](pluginData[_0x34aa07(0x1b0)],'CtbTurnOrderClearActorGraphic',_0x18cd3a=>{const _0x138ca1=_0x34aa07;VisuMZ[_0x138ca1(0x1dc)](_0x18cd3a,_0x18cd3a);const _0x17a18d=_0x18cd3a['Actors'];for(const _0x2d11f4 of _0x17a18d){const _0x252add=$gameActors[_0x138ca1(0x21d)](_0x2d11f4);if(!_0x252add)continue;_0x252add['clearTurnOrderCTBGraphics']();}}),PluginManager[_0x34aa07(0x1f6)](pluginData['name'],'CtbTurnOrderEnemyIcon',_0x5c98dc=>{const _0x347bd0=_0x34aa07;VisuMZ[_0x347bd0(0x1dc)](_0x5c98dc,_0x5c98dc);const _0x22b19e=_0x5c98dc[_0x347bd0(0x22e)],_0x1c1984=_0x5c98dc[_0x347bd0(0x278)];for(const _0x40685b of _0x22b19e){const _0x2bd9aa=$gameTroop['members']()[_0x40685b];if(!_0x2bd9aa)continue;_0x2bd9aa[_0x347bd0(0x235)]=_0x347bd0(0x107),_0x2bd9aa['_ctbTurnOrderIconIndex']=_0x1c1984;}}),PluginManager[_0x34aa07(0x1f6)](pluginData['name'],_0x34aa07(0x18a),_0x43f544=>{const _0x5b3aa7=_0x34aa07;VisuMZ[_0x5b3aa7(0x1dc)](_0x43f544,_0x43f544);const _0x107b4d=_0x43f544[_0x5b3aa7(0x22e)],_0x513d7b=_0x43f544[_0x5b3aa7(0x251)],_0x3138a5=_0x43f544[_0x5b3aa7(0x20c)];for(const _0x21ab74 of _0x107b4d){const _0x1eb4bb=$gameTroop[_0x5b3aa7(0x17f)]()[_0x21ab74];if(!_0x1eb4bb)continue;_0x1eb4bb[_0x5b3aa7(0x235)]=_0x5b3aa7(0xe0),_0x1eb4bb[_0x5b3aa7(0x12a)]=_0x513d7b,_0x1eb4bb[_0x5b3aa7(0xc6)]=_0x3138a5;}}),PluginManager['registerCommand'](pluginData[_0x34aa07(0x1b0)],_0x34aa07(0xf2),_0x1d98ec=>{const _0x5a90f4=_0x34aa07;VisuMZ[_0x5a90f4(0x1dc)](_0x1d98ec,_0x1d98ec);const _0x2405eb=_0x1d98ec[_0x5a90f4(0x22e)];for(const _0x3a8dba of _0x2405eb){const _0x54d5e7=$gameTroop[_0x5a90f4(0x17f)]()[_0x3a8dba];if(!_0x54d5e7)continue;_0x54d5e7[_0x5a90f4(0x22f)]();}}),PluginManager[_0x34aa07(0x1f6)](pluginData[_0x34aa07(0x1b0)],_0x34aa07(0x120),_0x154447=>{const _0x742d60=_0x34aa07;VisuMZ[_0x742d60(0x1dc)](_0x154447,_0x154447);const _0x8e2e16=_0x154447[_0x742d60(0x13d)];$gameSystem[_0x742d60(0xeb)](_0x8e2e16);}),VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x16d)]=Scene_Boot[_0x34aa07(0x21a)][_0x34aa07(0x126)],Scene_Boot[_0x34aa07(0x21a)][_0x34aa07(0x126)]=function(){const _0x35799f=_0x34aa07;this[_0x35799f(0x1b5)](),VisuMZ[_0x35799f(0x209)][_0x35799f(0x16d)][_0x35799f(0x1cb)](this),this[_0x35799f(0x193)]();},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0xfb)]={},Scene_Boot[_0x34aa07(0x21a)][_0x34aa07(0x1b5)]=function(){const _0x278941=_0x34aa07,_0x2946d1=VisuMZ[_0x278941(0x209)][_0x278941(0xfb)],_0x1404c2='<JS\x20%2\x20%1\x20%3>\x5cs*([\x5cs\x5cS]*)\x5cs*<\x5c/JS\x20%2\x20%1\x20%3>',_0x3bc155=['Charge','Cast','After'];for(const _0x1b782c of _0x3bc155){const _0x5e108d=_0x1404c2[_0x278941(0x17e)](_0x1b782c['toUpperCase']()[_0x278941(0x200)](),_0x278941(0x265),_0x278941(0x144)),_0x3a1c4f=new RegExp(_0x5e108d,'i');VisuMZ[_0x278941(0x209)][_0x278941(0xfb)][_0x1b782c]=_0x3a1c4f;}VisuMZ[_0x278941(0x209)]['RegExp'][_0x278941(0x26c)]=/<JS (?:CTB) (?:ORDER|DELAY|RUSH|SHIFT)>\s*([\s\S]*)\s*<\/JS (?:CTB) (?:ORDER|DELAY|RUSH|SHIFT)>/i;},Scene_Boot[_0x34aa07(0x21a)][_0x34aa07(0x193)]=function(){const _0x5459ad=_0x34aa07;if(VisuMZ[_0x5459ad(0x236)])return;const _0x48a13b=$dataSkills[_0x5459ad(0x16c)]($dataItems);for(const _0x386de6 of _0x48a13b){if(!_0x386de6)continue;VisuMZ[_0x5459ad(0x209)]['Parse_Notetags_CreateJS'](_0x386de6);}},VisuMZ['BattleSystemCTB']['ParseSkillNotetags']=VisuMZ['ParseSkillNotetags'],VisuMZ[_0x34aa07(0x117)]=function(_0x589bfd){const _0x1c5f3d=_0x34aa07;VisuMZ[_0x1c5f3d(0x209)][_0x1c5f3d(0x117)]['call'](this,_0x589bfd),VisuMZ['BattleSystemCTB'][_0x1c5f3d(0x11a)](_0x589bfd);},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x1eb)]=VisuMZ[_0x34aa07(0x1eb)],VisuMZ[_0x34aa07(0x1eb)]=function(_0x3e3bdb){const _0x154da2=_0x34aa07;VisuMZ[_0x154da2(0x209)]['ParseItemNotetags'][_0x154da2(0x1cb)](this,_0x3e3bdb),VisuMZ[_0x154da2(0x209)][_0x154da2(0x11a)](_0x3e3bdb);},VisuMZ['BattleSystemCTB'][_0x34aa07(0x11a)]=function(_0x1d5346){const _0x170461=_0x34aa07,_0x4785dd=[_0x170461(0x1d7),_0x170461(0x14f),'After'];for(const _0x3f3dee of _0x4785dd){VisuMZ[_0x170461(0x209)][_0x170461(0x108)](_0x1d5346,_0x3f3dee);}VisuMZ[_0x170461(0x209)][_0x170461(0x137)](_0x1d5346,'Order');},VisuMZ[_0x34aa07(0x209)]['JS']={},VisuMZ[_0x34aa07(0x209)]['createRateJS']=function(_0xb3777a,_0x3eaca3){const _0x4766ee=_0x34aa07,_0x24c807=_0xb3777a[_0x4766ee(0xf8)];if(_0x24c807[_0x4766ee(0x1de)](VisuMZ[_0x4766ee(0x209)][_0x4766ee(0xfb)][_0x3eaca3])){const _0x4d89f2=String(RegExp['$1']),_0x1a72cd='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20keyType\x20=\x20\x27%2\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20rate\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(keyType\x20===\x20\x27Charge\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20target._tpbChargeTime;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20if\x20(keyType\x20===\x20\x27Cast\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20target._tpbCastTime\x20/\x20Math.max(target.tpbRequiredCastTime(),\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20originalValue\x20=\x20rate;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20NaN\x20Check\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(isNaN(rate)){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27NaN\x20rate\x20created\x20by\x20%2\x27.format(\x27\x27,obj.name));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27Restoring\x20rate\x20to\x20%2\x27.format(\x27\x27,originalValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20originalValue;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Value\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20rate;\x0a\x20\x20\x20\x20\x20\x20\x20\x20'['format'](_0x4d89f2,_0x3eaca3),_0x151ee1=VisuMZ[_0x4766ee(0x209)][_0x4766ee(0x1f4)](_0xb3777a,_0x3eaca3);VisuMZ['BattleSystemCTB']['JS'][_0x151ee1]=new Function(_0x1a72cd);}},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x137)]=function(_0x253fa8,_0x3b6ead){const _0x3bd66a=_0x34aa07,_0xe6da73=_0x253fa8[_0x3bd66a(0xf8)];if(_0xe6da73[_0x3bd66a(0x1de)](VisuMZ[_0x3bd66a(0x209)][_0x3bd66a(0xfb)][_0x3bd66a(0x26c)])){const _0xc729f9=String(RegExp['$1']),_0x377648=_0x3bd66a(0x184)[_0x3bd66a(0x17e)](_0xc729f9,_0x3b6ead),_0x1eb94e=VisuMZ[_0x3bd66a(0x209)]['createKeyJS'](_0x253fa8,_0x3b6ead);VisuMZ[_0x3bd66a(0x209)]['JS'][_0x1eb94e]=new Function(_0x377648);}},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x1f4)]=function(_0x80105d,_0x47eb52){const _0x590a93=_0x34aa07;if(VisuMZ['createKeyJS'])return VisuMZ[_0x590a93(0x1f4)](_0x80105d,_0x47eb52);let _0x1db475='';if($dataActors[_0x590a93(0xd6)](_0x80105d))_0x1db475='Actor-%1-%2'['format'](_0x80105d['id'],_0x47eb52);if($dataClasses[_0x590a93(0xd6)](_0x80105d))_0x1db475='Class-%1-%2'[_0x590a93(0x17e)](_0x80105d['id'],_0x47eb52);if($dataSkills['includes'](_0x80105d))_0x1db475=_0x590a93(0x154)['format'](_0x80105d['id'],_0x47eb52);if($dataItems[_0x590a93(0xd6)](_0x80105d))_0x1db475=_0x590a93(0x146)[_0x590a93(0x17e)](_0x80105d['id'],_0x47eb52);if($dataWeapons[_0x590a93(0xd6)](_0x80105d))_0x1db475=_0x590a93(0x179)[_0x590a93(0x17e)](_0x80105d['id'],_0x47eb52);if($dataArmors['includes'](_0x80105d))_0x1db475='Armor-%1-%2'[_0x590a93(0x17e)](_0x80105d['id'],_0x47eb52);if($dataEnemies['includes'](_0x80105d))_0x1db475=_0x590a93(0x212)[_0x590a93(0x17e)](_0x80105d['id'],_0x47eb52);if($dataStates['includes'](_0x80105d))_0x1db475='State-%1-%2'[_0x590a93(0x17e)](_0x80105d['id'],_0x47eb52);return _0x1db475;},ImageManager[_0x34aa07(0x1f2)]=ImageManager[_0x34aa07(0x1f2)]||0x9,ImageManager[_0x34aa07(0x104)]=ImageManager['svActorVertCells']||0x6,VisuMZ['BattleSystemCTB'][_0x34aa07(0x26b)]=BattleManager['battleSys'],BattleManager[_0x34aa07(0x1ca)]=function(){const _0x6163c4=_0x34aa07;if(this[_0x6163c4(0x230)]())return _0x6163c4(0x195);return VisuMZ[_0x6163c4(0x209)][_0x6163c4(0x26b)][_0x6163c4(0x1cb)](this);},BattleManager[_0x34aa07(0x230)]=function(){const _0x46c7b1=_0x34aa07;return $gameSystem[_0x46c7b1(0xf3)]()===_0x46c7b1(0x195);},VisuMZ[_0x34aa07(0x209)]['BattleManager_isTpb']=BattleManager[_0x34aa07(0x1b2)],BattleManager[_0x34aa07(0x1b2)]=function(){const _0x589458=_0x34aa07;if(this[_0x589458(0x230)]())return!![];return VisuMZ[_0x589458(0x209)][_0x589458(0x1d2)][_0x589458(0x1cb)](this);},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x1b3)]=BattleManager[_0x34aa07(0x20d)],BattleManager[_0x34aa07(0x20d)]=function(){const _0x8fb317=_0x34aa07;if(this['isCTB']())return![];return VisuMZ[_0x8fb317(0x209)][_0x8fb317(0x1b3)][_0x8fb317(0x1cb)](this);},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x248)]=BattleManager['updateTurn'],BattleManager['updateTurn']=function(_0x29c4d9){const _0x117438=_0x34aa07;this['isCTB']()?this['updateTurnCTB'](_0x29c4d9):VisuMZ[_0x117438(0x209)]['BattleManager_updateTurn']['call'](this,_0x29c4d9);},BattleManager[_0x34aa07(0x10a)]=function(_0x190676){const _0x23d715=_0x34aa07;return VisuMZ[_0x23d715(0x209)][_0x23d715(0x248)][_0x23d715(0x1cb)](this,_0x190676);},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x1ce)]=BattleManager[_0x34aa07(0x25d)],BattleManager['processTurn']=function(){const _0x1a5a18=_0x34aa07;this['isCTB']()?this[_0x1a5a18(0x260)]():VisuMZ[_0x1a5a18(0x209)][_0x1a5a18(0x1ce)][_0x1a5a18(0x1cb)](this);},BattleManager[_0x34aa07(0x260)]=function(){const _0x297e54=_0x34aa07,_0x13e093=this['_subject'],_0x416397=_0x13e093[_0x297e54(0x136)]();_0x416397?(_0x416397[_0x297e54(0x15b)](),_0x416397[_0x297e54(0x21f)]()&&this[_0x297e54(0x116)](),_0x13e093[_0x297e54(0xd1)]()):(_0x13e093[_0x297e54(0x1ea)](0x0),this[_0x297e54(0x1d1)](),this[_0x297e54(0x1af)]=null);},BattleManager['isAnyBattlerReadyCTB']=function(){const _0x10bbc6=_0x34aa07;if(this[_0x10bbc6(0x1af)])return!![];if(this[_0x10bbc6(0x17a)]!==_0x10bbc6(0xcc))return!![];if(this[_0x10bbc6(0x1e7)])return![];const _0x4b2f6c=this[_0x10bbc6(0x25f)]()['filter'](_0x5f4b90=>_0x5f4b90&&_0x5f4b90[_0x10bbc6(0x159)]());return _0x4b2f6c[_0x10bbc6(0x244)](_0x34e1da=>_0x34e1da[_0x10bbc6(0x1fc)]());},Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x1fc)]=function(){const _0x16581a=_0x34aa07;if(this[_0x16581a(0x15e)]())return!![];if(this[_0x16581a(0x166)]())return!![];if(this[_0x16581a(0x1b7)]())return!![];return![];},BattleManager[_0x34aa07(0x162)]=function(){const _0x2615a5=_0x34aa07;let _0x475b67=VisuMZ['BattleSystemCTB']['Settings'][_0x2615a5(0x254)][_0x2615a5(0xed)]?0x1e:0xa;this[_0x2615a5(0x1c2)]()&&this[_0x2615a5(0x228)]()?(this[_0x2615a5(0x163)]=this['_anti_CTB_SoftlockCount']||0x0,this[_0x2615a5(0x163)]++,this[_0x2615a5(0x163)]>=_0x475b67&&this[_0x2615a5(0x1cc)]()):this['_anti_CTB_SoftlockCount']=0x0;},BattleManager[_0x34aa07(0x228)]=function(){const _0x59d9f9=_0x34aa07;if(this[_0x59d9f9(0x1af)])return![];if(this[_0x59d9f9(0x17a)]!==_0x59d9f9(0xcc))return![];if(this[_0x59d9f9(0x130)]())return![];return!![];},BattleManager['processCtbAntiSoftlock']=function(){const _0x49e889=_0x34aa07;$gameTemp['isPlaytest']()&&this[_0x49e889(0x163)]>=0x14&&console[_0x49e889(0x217)]('Anti-CTB\x20Softlock\x20Count:',this[_0x49e889(0x163)]);this[_0x49e889(0x1af)]=null,this['_phase']=_0x49e889(0xcc),this[_0x49e889(0x180)]=![],this[_0x49e889(0x13c)]=!![];for(const _0x1d58d6 of this[_0x49e889(0x25f)]()){if(!_0x1d58d6)continue;if(_0x1d58d6[_0x49e889(0x223)]()){_0x1d58d6[_0x49e889(0x1be)]('undecided'),_0x1d58d6[_0x49e889(0x152)]=_0x49e889(0x1c5);const _0x1a6f27=_0x1d58d6[_0x49e889(0x127)],_0x8735ea=_0x1d58d6[_0x49e889(0x13e)]||0x0;_0x1d58d6[_0x49e889(0x189)](![]),_0x1d58d6[_0x49e889(0x127)]=_0x1a6f27,_0x1d58d6[_0x49e889(0x13e)]=Math[_0x49e889(0x229)](_0x8735ea,0.99),_0x1d58d6[_0x49e889(0x21e)]();}}this['_anti_CTB_SoftlockCount']===0xb4&&($gameParty[_0x49e889(0x1b4)](),$gameParty[_0x49e889(0x1b4)][_0x49e889(0x1cb)]($gameTroop));if(this[_0x49e889(0x163)]===0x12c)for(const _0x30f316 of this[_0x49e889(0x25f)]()){if(!_0x30f316)continue;if(_0x30f316['isDead']())continue;_0x30f316[_0x49e889(0x16b)]();}this['_anti_CTB_SoftlockCount']>=0x258&&(BattleManager[_0x49e889(0x206)](),$gameTemp[_0x49e889(0x275)]()&&console['log'](_0x49e889(0x125)));},VisuMZ['BattleSystemCTB']['BattleManager_updateAllTpbBattlers']=BattleManager[_0x34aa07(0x23b)],BattleManager['updateAllTpbBattlers']=function(){const _0x1fb8ed=_0x34aa07;this[_0x1fb8ed(0x230)]()?this[_0x1fb8ed(0x196)]():VisuMZ['BattleSystemCTB'][_0x1fb8ed(0x225)][_0x1fb8ed(0x1cb)](this);},BattleManager[_0x34aa07(0x196)]=function(){const _0x3867df=_0x34aa07;if(this[_0x3867df(0x10c)][_0x3867df(0xc5)]>0x0)return;const _0x2025c4=this[_0x3867df(0x25f)]();_0x2025c4[_0x3867df(0x142)]((_0x2cb09d,_0x197d48)=>{const _0x3f06b8=_0x3867df;return _0x2cb09d[_0x3f06b8(0x173)](0x1)-_0x197d48[_0x3f06b8(0x173)](0x1);});for(const _0x45429a of _0x2025c4){if(this[_0x3867df(0x10c)][_0x3867df(0xc5)]>0x0)return;this[_0x3867df(0x1c4)](_0x45429a);}},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x148)]=BattleManager[_0x34aa07(0x112)],BattleManager['startBattle']=function(){const _0x41062e=_0x34aa07;VisuMZ[_0x41062e(0x209)]['BattleManager_startBattle'][_0x41062e(0x1cb)](this),this['updateTurnOrderCTB'](!![]);},VisuMZ['BattleSystemCTB'][_0x34aa07(0x1d4)]=BattleManager['endAction'],BattleManager[_0x34aa07(0x1d1)]=function(){const _0xb5883d=_0x34aa07;this['preEndActionCTB'](),VisuMZ[_0xb5883d(0x209)]['BattleManager_endAction'][_0xb5883d(0x1cb)](this),this[_0xb5883d(0x1ad)]();},BattleManager['preEndActionCTB']=function(){const _0xb68f03=_0x34aa07;if(!this[_0xb68f03(0x230)]())return;this[_0xb68f03(0x1af)]&&this[_0xb68f03(0x1af)]['numActions']()<=0x0&&(this['rotateCTBSprites'](),this[_0xb68f03(0x1af)][_0xb68f03(0x1be)](_0xb68f03(0x23a))),BattleManager[_0xb68f03(0x10b)]=0x0;},BattleManager[_0x34aa07(0x1ad)]=function(){const _0x12f244=_0x34aa07;if(!this[_0x12f244(0x230)]())return;if(this['_subject']&&$gameTemp['isCommonEventReserved']()){this[_0x12f244(0x1af)][_0x12f244(0x152)]=_0x12f244(0x145),this[_0x12f244(0x1af)]['_actionState']=_0x12f244(0x1c9);return;}this[_0x12f244(0x232)](),this[_0x12f244(0x1af)]&&this[_0x12f244(0x25d)]();},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0xe7)]=BattleManager['startActorInput'],BattleManager[_0x34aa07(0x194)]=function(){const _0x5f3793=_0x34aa07;this[_0x5f3793(0x232)](),VisuMZ[_0x5f3793(0x209)]['BattleManager_startActorInput'][_0x5f3793(0x1cb)](this);},BattleManager[_0x34aa07(0x232)]=function(_0x2c3563){const _0x28bf98=_0x34aa07;if(!this['isCTB']())return;const _0x32e527=SceneManager[_0x28bf98(0xf1)][_0x28bf98(0x199)];if(!_0x32e527)return;_0x32e527[_0x28bf98(0x1da)](_0x2c3563);},BattleManager[_0x34aa07(0x218)]=function(){const _0x53972e=_0x34aa07;if(!this['isCTB']())return;const _0x494e98=SceneManager[_0x53972e(0xf1)][_0x53972e(0x199)];if(!_0x494e98)return;_0x494e98[_0x53972e(0x198)](this['_subject']);},BattleManager[_0x34aa07(0xe9)]=function(){const _0x159767=_0x34aa07,_0x52e8b4=this[_0x159767(0x25f)]()[_0x159767(0x175)](_0x3e559b=>String([_0x3e559b[_0x159767(0x1b0)](),_0x159767(0x26f)+_0x3e559b[_0x159767(0x173)](0x1)]));console['log'](_0x52e8b4);},VisuMZ[_0x34aa07(0x209)]['BattleManager_updateTpb']=BattleManager[_0x34aa07(0x21e)],BattleManager[_0x34aa07(0x21e)]=function(){const _0x2b8e1e=_0x34aa07;this[_0x2b8e1e(0x230)]()?this[_0x2b8e1e(0x20f)]():VisuMZ[_0x2b8e1e(0x209)][_0x2b8e1e(0x274)][_0x2b8e1e(0x1cb)](this);},BattleManager[_0x34aa07(0x20f)]=function(){const _0x455fbf=_0x34aa07,_0x5ccaf9=this[_0x455fbf(0x25f)]();_0x5ccaf9[_0x455fbf(0x142)]((_0x1e602e,_0x15f1b0)=>{const _0x482afc=_0x455fbf;return _0x1e602e[_0x482afc(0x173)](0x1)-_0x15f1b0['ctbTicksToGoal'](0x1);});for(const _0x40b602 of _0x5ccaf9){_0x40b602[_0x455fbf(0x21e)]();}this['updateAllTpbBattlers'](),this['checkTpbTurnEnd']();},VisuMZ['BattleSystemCTB']['BattleManager_updateTpbInput']=BattleManager['updateTpbInput'],BattleManager[_0x34aa07(0xdb)]=function(){const _0x2cb96f=_0x34aa07;if(this[_0x2cb96f(0x230)]()){const _0x402f71=this[_0x2cb96f(0x25f)]()[_0x2cb96f(0x12e)](_0x5cbc75=>_0x5cbc75[_0x2cb96f(0x15e)]());_0x402f71[_0x2cb96f(0x142)]((_0x1c6f1d,_0x17eeb2)=>{const _0x49c946=_0x2cb96f;return _0x1c6f1d[_0x49c946(0x173)](0x1)-_0x17eeb2['ctbTicksToGoal'](0x1);});if(_0x402f71[_0x2cb96f(0xc5)]>0x0&&!_0x402f71[0x0][_0x2cb96f(0x211)]())return;}VisuMZ[_0x2cb96f(0x209)][_0x2cb96f(0x188)][_0x2cb96f(0x1cb)](this);},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x1e5)]=Game_System[_0x34aa07(0x21a)][_0x34aa07(0x1e2)],Game_System[_0x34aa07(0x21a)][_0x34aa07(0x1e2)]=function(){const _0x40c049=_0x34aa07;VisuMZ[_0x40c049(0x209)]['Game_System_initialize']['call'](this),this['initBattleSystemCTB']();},Game_System[_0x34aa07(0x21a)][_0x34aa07(0xce)]=function(){const _0x52c644=_0x34aa07;this[_0x52c644(0x1aa)]=!![];},Game_System['prototype']['isBattleSystemCTBTurnOrderVisible']=function(){const _0x3d43ea=_0x34aa07;return this[_0x3d43ea(0x1aa)]===undefined&&this[_0x3d43ea(0xce)](),this[_0x3d43ea(0x1aa)];},Game_System['prototype']['setBattleSystemCTBTurnOrderVisible']=function(_0x1d916f){const _0x32e9b0=_0x34aa07;this[_0x32e9b0(0x1aa)]===undefined&&this[_0x32e9b0(0xce)](),this[_0x32e9b0(0x1aa)]=_0x1d916f;},VisuMZ[_0x34aa07(0x209)]['Game_Action_applyItemUserEffect']=Game_Action['prototype'][_0x34aa07(0x167)],Game_Action[_0x34aa07(0x21a)][_0x34aa07(0x167)]=function(_0x208937){const _0x43bc3c=_0x34aa07;VisuMZ[_0x43bc3c(0x209)]['Game_Action_applyItemUserEffect']['call'](this,_0x208937),this[_0x43bc3c(0x279)](_0x208937);},Game_Action[_0x34aa07(0x21a)]['applyBattleSystemCTBUserEffect']=function(_0x34b7ab){const _0x51cdf2=_0x34aa07;if(!SceneManager['isSceneBattle']())return;if(!BattleManager[_0x51cdf2(0x230)]())return;if(this['item']())this[_0x51cdf2(0x111)](_0x34b7ab);},Game_Action['prototype']['applyItemBattleSystemCTBUserEffect']=function(_0x55f83e){const _0x166e5b=_0x34aa07,_0x79de35=this['item']()['note'];if(_0x55f83e['isCtbChargingState']()){const _0x4a913b=VisuMZ[_0x166e5b(0x209)][_0x166e5b(0x1f4)](this[_0x166e5b(0x214)](),_0x166e5b(0x1d7));if(VisuMZ[_0x166e5b(0x209)]['JS'][_0x4a913b]){const _0x2acf30=VisuMZ[_0x166e5b(0x209)]['JS'][_0x4a913b][_0x166e5b(0x1cb)](this,this['subject'](),_0x55f83e);_0x55f83e[_0x166e5b(0xf0)](_0x2acf30);}_0x79de35[_0x166e5b(0x1de)](/<(?:CTB) CHARGE (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&_0x55f83e[_0x166e5b(0xf0)](Number(RegExp['$1'])*0.01),_0x79de35[_0x166e5b(0x1de)](/<(?:CTB) CHARGE (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i)&&_0x55f83e[_0x166e5b(0x132)](Number(RegExp['$1'])*0.01);}else{if(_0x55f83e[_0x166e5b(0x261)]()){const _0x5581de=VisuMZ[_0x166e5b(0x209)][_0x166e5b(0x1f4)](this[_0x166e5b(0x214)](),'Cast');if(VisuMZ['BattleSystemCTB']['JS'][_0x5581de]){const _0x5b3b1d=VisuMZ[_0x166e5b(0x209)]['JS'][_0x5581de][_0x166e5b(0x1cb)](this,this[_0x166e5b(0x1d3)](),_0x55f83e);_0x55f83e[_0x166e5b(0xc8)](_0x5b3b1d);}_0x79de35[_0x166e5b(0x1de)](/<(?:CTB) CAST (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&_0x55f83e[_0x166e5b(0xc8)](Number(RegExp['$1'])*0.01),_0x79de35[_0x166e5b(0x1de)](/<(?:CTB) CAST (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i)&&_0x55f83e['changeCtbCastTime'](Number(RegExp['$1'])*0.01);}}const _0x495371=VisuMZ[_0x166e5b(0x209)][_0x166e5b(0x1f4)](this['item'](),'Order');if(VisuMZ[_0x166e5b(0x209)]['JS'][_0x495371]){const _0x243bad=VisuMZ[_0x166e5b(0x209)]['JS'][_0x495371][_0x166e5b(0x1cb)](this,this[_0x166e5b(0x1d3)](),_0x55f83e);_0x55f83e[_0x166e5b(0x118)](_0x243bad);}_0x79de35[_0x166e5b(0x1de)](/<(?:CTB) (?:SET|MAKE|EXACT) ORDER:[ ](\d+)>/i)&&_0x55f83e[_0x166e5b(0x118)](Number(RegExp['$1'])),_0x79de35[_0x166e5b(0x1de)](/<(?:CTB) (?:CHANGE|DELAY|RUSH|SHIFT) ORDER:[ ]([\+\-]\d+)>/i)&&_0x55f83e[_0x166e5b(0x25e)](Number(RegExp['$1']));},VisuMZ[_0x34aa07(0x209)]['Game_Action_applyGlobal']=Game_Action[_0x34aa07(0x21a)][_0x34aa07(0xf7)],Game_Action[_0x34aa07(0x21a)][_0x34aa07(0xf7)]=function(){const _0x545de2=_0x34aa07;VisuMZ['BattleSystemCTB']['Game_Action_applyGlobal']['call'](this),this[_0x545de2(0x133)]();},Game_Action[_0x34aa07(0x21a)][_0x34aa07(0x133)]=function(){const _0xa5b3be=_0x34aa07;if(!this['item']())return;if(!BattleManager[_0xa5b3be(0x230)]())return;const _0x105714=this[_0xa5b3be(0x214)]()[_0xa5b3be(0xf8)];let _0x8c257c=0x0;this[_0xa5b3be(0x1b8)]&&(_0x8c257c=this[_0xa5b3be(0x1d3)]()[_0xa5b3be(0x13e)]);const _0x4489e2=VisuMZ[_0xa5b3be(0x209)]['createKeyJS'](this[_0xa5b3be(0x214)](),_0xa5b3be(0x1fe));VisuMZ[_0xa5b3be(0x209)]['JS'][_0x4489e2]&&(_0x8c257c=VisuMZ['BattleSystemCTB']['JS'][_0x4489e2][_0xa5b3be(0x1cb)](this,this[_0xa5b3be(0x1d3)](),this['subject']()));let _0x59c2d0=this[_0xa5b3be(0x214)]()[_0xa5b3be(0x1bb)]>0x0?this['item']()[_0xa5b3be(0x1bb)]:0x0;if(this[_0xa5b3be(0x191)]())_0x59c2d0+=this['subject']()[_0xa5b3be(0x100)]();_0x8c257c+=(_0x59c2d0/0xfa0)[_0xa5b3be(0x13a)](0x0,0x1);_0x105714['match'](/<(?:CTB) AFTER (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&(_0x8c257c=Number(RegExp['$1'])*0.01);const _0x196ada=this['subject']()['traitObjects']()[_0xa5b3be(0x16c)](this[_0xa5b3be(0x1d3)]()[_0xa5b3be(0x224)]()),_0x134d21=/<(?:CTB) AFTER (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i,_0x5d2827=_0x196ada[_0xa5b3be(0x175)](_0x265582=>_0x265582&&_0x265582[_0xa5b3be(0xf8)][_0xa5b3be(0x1de)](_0x134d21)?Number(RegExp['$1'])*0.01:0x0);_0x8c257c=_0x5d2827[_0xa5b3be(0x128)]((_0x2a7377,_0x3adf4d)=>_0x2a7377+_0x3adf4d,_0x8c257c),this[_0xa5b3be(0x1d3)]()[_0xa5b3be(0x1ea)](_0x8c257c);},Game_BattlerBase[_0x34aa07(0x21a)][_0x34aa07(0xf0)]=function(_0x53b623){this['_tpbChargeTime']=_0x53b623;},Game_BattlerBase[_0x34aa07(0x21a)]['changeCtbChargeTime']=function(_0x1a2999){const _0xa2c5ee=_0x34aa07;this['setCtbChargeTime'](this[_0xa2c5ee(0x13e)]+_0x1a2999);},Game_BattlerBase['prototype'][_0x34aa07(0xc8)]=function(_0x36391d){const _0xff3969=_0x34aa07,_0x2fb2fa=this[_0xff3969(0x121)]();this[_0xff3969(0x11c)]=_0x2fb2fa*_0x36391d;},Game_BattlerBase[_0x34aa07(0x21a)][_0x34aa07(0x1e6)]=function(_0x718ed7){const _0x123d58=_0x34aa07,_0x25e24d=this[_0x123d58(0x121)](),_0xf0deb0=_0x25e24d*_0x718ed7;this[_0x123d58(0x11c)]=this[_0x123d58(0x11c)]+_0xf0deb0;},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x114)]=Game_BattlerBase[_0x34aa07(0x21a)][_0x34aa07(0x1e0)],Game_BattlerBase[_0x34aa07(0x21a)]['appear']=function(){const _0x4f02a2=_0x34aa07;VisuMZ[_0x4f02a2(0x209)]['Game_BattlerBase_appear'][_0x4f02a2(0x1cb)](this),BattleManager['updateTurnOrderCTB']();},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x101)]=Game_BattlerBase[_0x34aa07(0x21a)][_0x34aa07(0x1ae)],Game_BattlerBase[_0x34aa07(0x21a)]['hide']=function(){const _0x64f007=_0x34aa07;VisuMZ['BattleSystemCTB'][_0x64f007(0x101)]['call'](this),BattleManager[_0x64f007(0x232)]();},Game_BattlerBase['prototype'][_0x34aa07(0x22f)]=function(){const _0x37647e=_0x34aa07;delete this['_ctbTurnOrderGraphicType'],delete this[_0x37647e(0x12a)],delete this['_ctbTurnOrderFaceIndex'],delete this['_ctbTurnOrderIconIndex'];},Game_BattlerBase[_0x34aa07(0x21a)][_0x34aa07(0x10d)]=function(){const _0x565526=_0x34aa07;return this['_ctbTurnOrderGraphicType']===undefined&&(this['_ctbTurnOrderGraphicType']=this[_0x565526(0x119)]()),this['_ctbTurnOrderGraphicType'];},Game_BattlerBase[_0x34aa07(0x21a)]['createTurnOrderCTBGraphicType']=function(){const _0x168e1a=_0x34aa07;return Window_CTB_TurnOrder[_0x168e1a(0x242)]['EnemyBattlerType'];},Game_BattlerBase[_0x34aa07(0x21a)][_0x34aa07(0x1c1)]=function(){const _0x882bd8=_0x34aa07;return this[_0x882bd8(0x12a)]===undefined&&(this[_0x882bd8(0x12a)]=this[_0x882bd8(0x271)]()),this[_0x882bd8(0x12a)];},Game_BattlerBase['prototype'][_0x34aa07(0x271)]=function(){const _0x2f2968=_0x34aa07;return Window_CTB_TurnOrder[_0x2f2968(0x242)][_0x2f2968(0xc7)];},Game_BattlerBase[_0x34aa07(0x21a)][_0x34aa07(0x19c)]=function(){const _0x46e356=_0x34aa07;return this[_0x46e356(0xc6)]===undefined&&(this['_ctbTurnOrderFaceIndex']=this[_0x46e356(0x247)]()),this['_ctbTurnOrderFaceIndex'];},Game_BattlerBase[_0x34aa07(0x21a)][_0x34aa07(0x247)]=function(){const _0x2e8786=_0x34aa07;return Window_CTB_TurnOrder['Settings'][_0x2e8786(0x208)];},Game_BattlerBase[_0x34aa07(0x21a)][_0x34aa07(0x129)]=function(){const _0x4a5350=_0x34aa07;return this[_0x4a5350(0x24d)]===undefined&&(this[_0x4a5350(0x24d)]=this[_0x4a5350(0x25a)]()),this[_0x4a5350(0x24d)];},Game_BattlerBase['prototype'][_0x34aa07(0x25a)]=function(){const _0x2ce88c=_0x34aa07;return Window_CTB_TurnOrder[_0x2ce88c(0x242)]['EnemyBattlerIcon'];},Game_BattlerBase[_0x34aa07(0x21a)]['setCTBGraphicIconIndex']=function(_0x1a7096){const _0x1c4178=_0x34aa07;this[_0x1c4178(0x24d)]=_0x1a7096;},Game_BattlerBase['prototype'][_0x34aa07(0x173)]=function(_0x4b1333,_0x4e94e6){const _0x10f954=_0x34aa07;if(this[_0x10f954(0x1ac)]())return Number[_0x10f954(0xfa)];if(!this['isAppeared']())return Number[_0x10f954(0xfa)];const _0x549b60=0x1;_0x4b1333*=_0x549b60;if(_0x4b1333===_0x549b60&&!_0x4e94e6){if(this===BattleManager[_0x10f954(0x1af)])return Number[_0x10f954(0x1cf)]/0xa;if(this===BattleManager['actor']())return Number[_0x10f954(0x1cf)]/0xa;if(BattleManager['_actionBattlers']&&BattleManager['_actionBattlers'][_0x10f954(0xd6)](this)){let _0x4c76bc=Number[_0x10f954(0x1cf)]/0x1388;return _0x4c76bc+=BattleManager['_actionBattlers'][_0x10f954(0x13b)](this)*0x5,_0x4c76bc;}if(this[_0x10f954(0x152)]==='casting'&&this[_0x10f954(0x136)]()&&this[_0x10f954(0x136)]()[_0x10f954(0x214)]()&&this[_0x10f954(0x136)]()[_0x10f954(0x214)]()[_0x10f954(0x1bb)]<0x0)return(this[_0x10f954(0x121)]()*_0x549b60-this[_0x10f954(0x11c)])/this[_0x10f954(0x19d)]();}return _0x4b1333-=this[_0x10f954(0x21c)]()*_0x549b60,this[_0x10f954(0x152)]===_0x10f954(0x1cd)&&this[_0x10f954(0x136)]()&&this[_0x10f954(0x136)]()[_0x10f954(0x214)]()&&this[_0x10f954(0x136)]()[_0x10f954(0x214)]()['speed']<0x0&&(_0x4b1333+=this[_0x10f954(0x121)]()*_0x549b60-this[_0x10f954(0x11c)]),_0x4b1333/=this[_0x10f954(0x19d)]()*_0x549b60,_0x4b1333||0x0;},Game_BattlerBase[_0x34aa07(0x21a)]['ctbTicksToGoalAddedCastTime']=function(){const _0x27956f=_0x34aa07;return this[_0x27956f(0x152)]===_0x27956f(0x1cd)?(this[_0x27956f(0x121)]()-this['_tpbCastTime'])/this[_0x27956f(0x19d)]():0x0;},VisuMZ['BattleSystemCTB'][_0x34aa07(0x149)]=Game_Battler['prototype'][_0x34aa07(0xdc)],Game_Battler['prototype']['initTpbChargeTime']=function(_0x36fd87){const _0x170aae=_0x34aa07;BattleManager[_0x170aae(0x230)]()?this[_0x170aae(0x270)](_0x36fd87):VisuMZ['BattleSystemCTB'][_0x170aae(0x149)][_0x170aae(0x1cb)](this,_0x36fd87);},Game_Battler['prototype'][_0x34aa07(0x270)]=function(_0x47e58c){const _0x39bda7=_0x34aa07,_0x4ee0d2=VisuMZ['BattleSystemCTB'][_0x39bda7(0x242)][_0x39bda7(0x254)];let _0x5e1161=this[_0x39bda7(0x1e3)]()*eval(_0x4ee0d2['InitialGaugeJS']);const _0x5db840=this[_0x39bda7(0x123)]()[_0x39bda7(0x16c)](this[_0x39bda7(0x224)]()),_0x4f9918=/<(?:CTB) (?:BATTLE START|START) (?:GAUGE|TIME|SPEED): ([\+\-]\d+)([%％])>/i,_0x5f30ed=_0x5db840[_0x39bda7(0x175)](_0x4d3f71=>_0x4d3f71&&_0x4d3f71[_0x39bda7(0xf8)][_0x39bda7(0x1de)](_0x4f9918)?Number(RegExp['$1'])*0.01:0x0);_0x5e1161=_0x5f30ed[_0x39bda7(0x128)]((_0x4abaa7,_0x1473bc)=>_0x4abaa7+_0x1473bc,_0x5e1161),this[_0x39bda7(0x152)]=_0x39bda7(0x1c5),this[_0x39bda7(0x13e)]=(_0x47e58c?0x1:_0x5e1161)['clamp'](0x0,0x1),this['isRestricted']()&&(this['_tpbChargeTime']=0x0);},Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x150)]=function(){const _0x508691=_0x34aa07;return this[_0x508691(0x152)]===_0x508691(0x1c5);},Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x261)]=function(){const _0x1e3e83=_0x34aa07;return this['_tpbState']===_0x1e3e83(0x1cd)&&this['currentAction']()&&this['currentAction']()[_0x1e3e83(0x214)]()&&this[_0x1e3e83(0x136)]()['item']()[_0x1e3e83(0x1bb)]<0x0;},Game_BattlerBase[_0x34aa07(0x21a)][_0x34aa07(0x17d)]=function(){const _0xf5cea6=_0x34aa07;return this['isCtbCastingState']()?this[_0xf5cea6(0x11c)]/this[_0xf5cea6(0x121)]():0x0;},Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x243)]=function(){return!this['canMove']();},Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x1ea)]=function(_0x1a3347){const _0x507c61=_0x34aa07;this[_0x507c61(0x267)]=_0x1a3347,_0x1a3347>=0x1&&(BattleManager['_actionBattlers']=[]);},VisuMZ['BattleSystemCTB'][_0x34aa07(0x11d)]=Game_Battler['prototype'][_0x34aa07(0x1e9)],Game_Battler['prototype'][_0x34aa07(0x1e9)]=function(){const _0x35fc9e=_0x34aa07;BattleManager[_0x35fc9e(0x230)]()?this[_0x35fc9e(0x172)]():VisuMZ[_0x35fc9e(0x209)][_0x35fc9e(0x11d)]['call'](this);},Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x172)]=function(){const _0x55eaf3=_0x34aa07;!this[_0x55eaf3(0xcf)]()&&(this[_0x55eaf3(0x14d)]+=this[_0x55eaf3(0x19d)]());},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x227)]=Game_Battler['prototype'][_0x34aa07(0x166)],Game_Battler['prototype'][_0x34aa07(0x166)]=function(){const _0x2c6856=_0x34aa07;if(!VisuMZ[_0x2c6856(0x209)][_0x2c6856(0x227)]['call'](this))return![];if(BattleManager[_0x2c6856(0x230)]()){if(BattleManager[_0x2c6856(0x10c)]['includes'](this))return!![];return BattleManager[_0x2c6856(0x10c)][_0x2c6856(0xc5)]<=0x0;}else return!![];},VisuMZ[_0x34aa07(0x209)]['Game_Battler_onRestrict']=Game_Battler['prototype'][_0x34aa07(0x257)],Game_Battler[_0x34aa07(0x21a)]['onRestrict']=function(){const _0x158dd1=_0x34aa07;this[_0x158dd1(0x110)]=BattleManager['isCTB'](),VisuMZ['BattleSystemCTB'][_0x158dd1(0xda)][_0x158dd1(0x1cb)](this),this[_0x158dd1(0x110)]=undefined;},VisuMZ['BattleSystemCTB'][_0x34aa07(0x15a)]=Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x23c)],Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x23c)]=function(){const _0x5799ec=_0x34aa07;BattleManager[_0x5799ec(0x230)]()?this['clearTpbChargeTimeCTB']():VisuMZ[_0x5799ec(0x209)][_0x5799ec(0x15a)][_0x5799ec(0x1cb)](this);},Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x25c)]=function(){const _0x5990ee=_0x34aa07;if(this[_0x5990ee(0x110)])return;this['_tpbState']='charging',this[_0x5990ee(0x13e)]-=0x1,this[_0x5990ee(0x13e)]+=this[_0x5990ee(0x267)]||0x0;},VisuMZ[_0x34aa07(0x209)]['Game_Battler_applyTpbPenalty']=Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x113)],Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x113)]=function(){const _0x3a00d7=_0x34aa07;BattleManager[_0x3a00d7(0x230)]()?this[_0x3a00d7(0x1a1)]():VisuMZ['BattleSystemCTB'][_0x3a00d7(0x165)][_0x3a00d7(0x1cb)](this);},Game_Battler['prototype'][_0x34aa07(0x1a1)]=function(){const _0x434a21=_0x34aa07;this['_tpbState']=_0x434a21(0x1c5),this['_tpbChargeTime']+=VisuMZ[_0x434a21(0x209)][_0x434a21(0x242)][_0x434a21(0x254)][_0x434a21(0x258)]||0x0;},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x1f9)]=Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x26a)],Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x26a)]=function(){const _0x59a674=_0x34aa07;return BattleManager[_0x59a674(0x230)]()?VisuMZ['BattleSystemCTB']['Settings'][_0x59a674(0x254)][_0x59a674(0x22a)]['call'](this,this):VisuMZ[_0x59a674(0x209)]['Game_Battler_tpbSpeed'][_0x59a674(0x1cb)](this);},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x18c)]=Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x252)],Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x252)]=function(){const _0x234c03=_0x34aa07;return BattleManager[_0x234c03(0x230)]()?VisuMZ[_0x234c03(0x209)][_0x234c03(0x242)][_0x234c03(0x254)][_0x234c03(0x192)][_0x234c03(0x1cb)](this,this):VisuMZ[_0x234c03(0x209)][_0x234c03(0x18c)][_0x234c03(0x1cb)](this);},VisuMZ['BattleSystemCTB'][_0x34aa07(0x255)]=Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x1e3)],Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x1e3)]=function(){const _0x28cbdc=_0x34aa07;return BattleManager['isCTB']()?VisuMZ[_0x28cbdc(0x209)]['Settings']['Mechanics'][_0x28cbdc(0x140)]['call'](this,this):VisuMZ['BattleSystemCTB'][_0x28cbdc(0x255)]['call'](this);},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x157)]=Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x19d)],Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x19d)]=function(){const _0x216e59=_0x34aa07;if(BattleManager[_0x216e59(0x230)]()){let _0x4ee8c3=VisuMZ[_0x216e59(0x209)][_0x216e59(0x242)]['Mechanics'][_0x216e59(0x20e)][_0x216e59(0x1cb)](this,this);const _0x4f99dc=0x0;return _0x4ee8c3+_0x4f99dc;}else return VisuMZ[_0x216e59(0x209)][_0x216e59(0x157)][_0x216e59(0x1cb)](this);},VisuMZ[_0x34aa07(0x209)]['Game_Battler_tpbRequiredCastTime']=Game_Battler[_0x34aa07(0x21a)]['tpbRequiredCastTime'],Game_Battler[_0x34aa07(0x21a)]['tpbRequiredCastTime']=function(){const _0xdfd061=_0x34aa07;return BattleManager['isCTB']()?VisuMZ[_0xdfd061(0x209)][_0xdfd061(0x242)][_0xdfd061(0x254)][_0xdfd061(0xe4)][_0xdfd061(0x1cb)](this,this):VisuMZ[_0xdfd061(0x209)][_0xdfd061(0x21b)][_0xdfd061(0x1cb)](this);},Game_Battler['prototype'][_0x34aa07(0x12c)]=function(){const _0x3d37a5=_0x34aa07,_0x401e61=SceneManager[_0x3d37a5(0xf1)][_0x3d37a5(0x199)];if(!_0x401e61)return-0x1;const _0x12986b=_0x401e61[_0x3d37a5(0xf6)];if(!_0x12986b)return-0x1;const _0x3ecda6=_0x12986b[_0x3d37a5(0x124)](_0x4496a2=>_0x4496a2['battler']()===this);return _0x12986b[_0x3d37a5(0x13b)](_0x3ecda6);},Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x25e)]=function(_0x385b48){const _0x183a57=_0x34aa07;if(!BattleManager[_0x183a57(0x230)]())return;if(!SceneManager[_0x183a57(0x1d8)]())return;if(this===BattleManager[_0x183a57(0x21d)]())return;if(this===BattleManager['_subject'])return;const _0x2d5e9d=this['getCurrentTurnOrderPositionCTB']();if(_0x2d5e9d<0x0)return;this[_0x183a57(0x118)](_0x2d5e9d+_0x385b48);},Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x118)]=function(_0x178dfe){const _0x38c6bb=_0x34aa07;if(!BattleManager[_0x38c6bb(0x230)]())return;if(!SceneManager[_0x38c6bb(0x1d8)]())return;if(this===BattleManager[_0x38c6bb(0x21d)]())return;if(this===BattleManager[_0x38c6bb(0x1af)])return;_0x178dfe=Math[_0x38c6bb(0x1ab)](_0x178dfe,0x1),this[_0x38c6bb(0x1c0)](_0x178dfe);},Game_Battler[_0x34aa07(0x21a)]['processTurnOrderChangeCTB']=function(_0x20d324){const _0x164178=_0x34aa07;if(!BattleManager[_0x164178(0x230)]())return;if(!SceneManager['isSceneBattle']())return;if(this===BattleManager[_0x164178(0x21d)]())return;if(this===BattleManager['_subject'])return;const _0x4a6493=SceneManager[_0x164178(0xf1)][_0x164178(0x199)];if(!_0x4a6493)return;const _0x54bf4e=_0x4a6493['_turnOrderContainer'];if(!_0x54bf4e)return;const _0x5e6ea3=this[_0x164178(0x12c)]();_0x5e6ea3!==_0x20d324&&this[_0x164178(0x147)](_0x20d324-_0x5e6ea3);let _0xeedbbf=_0x20d324,_0x4162ef=_0x20d324;_0x5e6ea3>_0x20d324?_0xeedbbf-=0x1:_0x4162ef+=0x1;const _0x29e116=_0x54bf4e[_0xeedbbf][_0x164178(0x1ec)](!![]),_0xa018bf=_0x54bf4e[_0x4162ef]['ticksLeft'](!![]),_0xfd2754=(_0x29e116+_0xa018bf)/0x2;let _0x266362=_0xfd2754*this[_0x164178(0x19d)]();if(this['_tpbState']==='charging')this['_tpbChargeTime']=0x1-_0x266362;else this[_0x164178(0x152)]===_0x164178(0x1cd)&&(this[_0x164178(0x11c)]=this[_0x164178(0x121)]()-_0x266362);BattleManager[_0x164178(0x10c)]=[],BattleManager['updateTurnOrderCTB']();},Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x147)]=function(_0x4a17fa){const _0x441980=_0x34aa07,_0x14f5f4=VisuMZ[_0x441980(0x209)][_0x441980(0x242)][_0x441980(0xe6)],_0x48dfd8=_0x4a17fa>0x0?'Delay':_0x441980(0x1e4);if(_0x14f5f4[_0x441980(0x216)[_0x441980(0x17e)](_0x48dfd8)]){const _0x2a7d70=_0x14f5f4[_0x441980(0x216)[_0x441980(0x17e)](_0x48dfd8)],_0x4f32da=_0x14f5f4[_0x441980(0x201)['format'](_0x48dfd8)],_0x529d60=_0x14f5f4['%1Mute'[_0x441980(0x17e)](_0x48dfd8)];$gameTemp['requestFauxAnimation']([this],_0x2a7d70,_0x4f32da,_0x529d60);}if(this[_0x441980(0x269)]()&&_0x14f5f4[_0x441980(0xd5)[_0x441980(0x17e)](_0x48dfd8)]['length']>0x0){const _0x53f839=_0x14f5f4[_0x441980(0xd5)['format'](_0x48dfd8)],_0x327d15={'textColor':ColorManager[_0x441980(0xf9)](_0x14f5f4['%1TextColor'[_0x441980(0x17e)](_0x48dfd8)]),'flashColor':_0x14f5f4['%1FlashColor'['format'](_0x48dfd8)],'flashDuration':_0x14f5f4[_0x441980(0xef)[_0x441980(0x17e)](_0x48dfd8)]};this['setupTextPopup'](_0x53f839,_0x327d15);}},VisuMZ['BattleSystemCTB'][_0x34aa07(0x105)]=Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x21e)],Game_Battler[_0x34aa07(0x21a)]['updateTpb']=function(){const _0x29d3b3=_0x34aa07;if(BattleManager['ctbHasInstantActionAfter'](this)){BattleManager[_0x29d3b3(0x10b)]=BattleManager[_0x29d3b3(0x10b)]||0x0,BattleManager[_0x29d3b3(0x10b)]++;if(BattleManager['_antiCtbSoftlockInstantActionAfter']<0x3c)return;}VisuMZ[_0x29d3b3(0x209)][_0x29d3b3(0x105)][_0x29d3b3(0x1cb)](this);},BattleManager[_0x34aa07(0x1a8)]=function(_0x4cd049){const _0x8fc363=_0x34aa07;return BattleManager[_0x8fc363(0x25f)]()[_0x8fc363(0x12e)](_0x6443e5=>_0x6443e5!==_0x4cd049)[_0x8fc363(0x244)](_0x294b12=>_0x294b12['isAlive']()&&_0x294b12[_0x8fc363(0xcf)]()&&_0x294b12['_ctbAfterSpeed']>=0x1);},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x221)]=Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x253)],Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x253)]=function(){const _0x40f41a=_0x34aa07;BattleManager[_0x40f41a(0x230)]()?this[_0x40f41a(0x1f5)]():VisuMZ[_0x40f41a(0x209)]['Game_Battler_updateTpbChargeTime'][_0x40f41a(0x1cb)](this);},Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x1f5)]=function(){const _0x396dee=_0x34aa07;this[_0x396dee(0x152)]===_0x396dee(0x1c5)&&(this[_0x396dee(0x13e)]+=this[_0x396dee(0x19d)](),this['_tpbChargeTime']>=0x1&&this[_0x396dee(0x268)]());},VisuMZ['BattleSystemCTB']['Game_Battler_updateTpbCastTime']=Game_Battler['prototype'][_0x34aa07(0xcd)],Game_Battler['prototype'][_0x34aa07(0xcd)]=function(){const _0x513d95=_0x34aa07;BattleManager[_0x513d95(0x230)]()?this[_0x513d95(0x277)]():VisuMZ['BattleSystemCTB'][_0x513d95(0x151)][_0x513d95(0x1cb)](this);},Game_Battler[_0x34aa07(0x21a)][_0x34aa07(0x277)]=function(){const _0x58020b=_0x34aa07;this[_0x58020b(0x152)]==='casting'&&(this[_0x58020b(0x11c)]+=this['tpbAcceleration'](),this[_0x58020b(0x11c)]>=this['tpbRequiredCastTime']()&&(this[_0x58020b(0x152)]=_0x58020b(0x145)));},Game_Actor['prototype'][_0x34aa07(0x119)]=function(){const _0x2a7509=_0x34aa07,_0x2bef45=this['actor']()['note'];if(_0x2bef45[_0x2a7509(0x1de)](/<CTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return'face';else{if(_0x2bef45[_0x2a7509(0x1de)](/<CTB TURN ORDER ICON:[ ](\d+)>/i))return _0x2a7509(0x107);}return Window_CTB_TurnOrder['Settings'][_0x2a7509(0xe3)];},Game_Actor['prototype']['createTurnOrderCTBGraphicFaceName']=function(){const _0x5eac90=_0x34aa07,_0x26dd07=this[_0x5eac90(0x21d)]()[_0x5eac90(0xf8)];if(_0x26dd07[_0x5eac90(0x1de)](/<CTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return this[_0x5eac90(0x1fa)]();},Game_Actor[_0x34aa07(0x21a)][_0x34aa07(0x247)]=function(){const _0x4418ea=_0x34aa07,_0x20fa62=this[_0x4418ea(0x21d)]()[_0x4418ea(0xf8)];if(_0x20fa62['match'](/<CTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return this[_0x4418ea(0x1dd)]();},Game_Actor[_0x34aa07(0x21a)][_0x34aa07(0x25a)]=function(){const _0x218269=_0x34aa07,_0x225ecc=this[_0x218269(0x21d)]()[_0x218269(0xf8)];if(_0x225ecc[_0x218269(0x1de)](/<CTB TURN ORDER ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Window_CTB_TurnOrder[_0x218269(0x242)][_0x218269(0xe5)];},Game_Enemy[_0x34aa07(0x21a)]['createTurnOrderCTBGraphicType']=function(){const _0x285cb4=_0x34aa07,_0x5bb175=this['enemy']()[_0x285cb4(0xf8)];if(_0x5bb175[_0x285cb4(0x1de)](/<CTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return _0x285cb4(0xe0);else{if(_0x5bb175[_0x285cb4(0x1de)](/<CTB TURN ORDER ICON:[ ](\d+)>/i))return _0x285cb4(0x107);}return Window_CTB_TurnOrder[_0x285cb4(0x242)]['EnemyBattlerType'];},Game_Enemy[_0x34aa07(0x21a)]['createTurnOrderCTBGraphicFaceName']=function(){const _0x1e3128=_0x34aa07,_0x46581a=this[_0x1e3128(0x176)]()[_0x1e3128(0xf8)];if(_0x46581a[_0x1e3128(0x1de)](/<CTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return Window_CTB_TurnOrder[_0x1e3128(0x242)][_0x1e3128(0xc7)];},Game_Enemy[_0x34aa07(0x21a)][_0x34aa07(0x247)]=function(){const _0x2a20e1=_0x34aa07,_0x408eeb=this[_0x2a20e1(0x176)]()['note'];if(_0x408eeb[_0x2a20e1(0x1de)](/<CTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return Window_CTB_TurnOrder['Settings'][_0x2a20e1(0x208)];},Game_Enemy[_0x34aa07(0x21a)][_0x34aa07(0x25a)]=function(){const _0xcfdf7f=_0x34aa07,_0x1b74f8=this[_0xcfdf7f(0x176)]()[_0xcfdf7f(0xf8)];if(_0x1b74f8[_0xcfdf7f(0x1de)](/<CTB TURN ORDER ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Window_CTB_TurnOrder['Settings'][_0xcfdf7f(0x174)];},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x22b)]=Scene_Battle[_0x34aa07(0x21a)][_0x34aa07(0x213)],Scene_Battle[_0x34aa07(0x21a)][_0x34aa07(0x213)]=function(){const _0x38828b=_0x34aa07;VisuMZ[_0x38828b(0x209)][_0x38828b(0x22b)][_0x38828b(0x1cb)](this),this[_0x38828b(0x272)]();},Scene_Battle[_0x34aa07(0x21a)][_0x34aa07(0x272)]=function(){const _0x368d2f=_0x34aa07;if(!BattleManager[_0x368d2f(0x230)]())return;this[_0x368d2f(0x199)]=new Window_CTB_TurnOrder();const _0x447bea=this[_0x368d2f(0x276)](this[_0x368d2f(0x160)]);this[_0x368d2f(0x24c)](this['_ctbTurnOrderWindow'],_0x447bea),this[_0x368d2f(0x12b)](),BattleManager[_0x368d2f(0x232)](!![]);},Scene_Battle['prototype'][_0x34aa07(0x12b)]=function(){const _0x5462b1=_0x34aa07,_0x2417a3=Window_CTB_TurnOrder[_0x5462b1(0x242)];if(_0x2417a3[_0x5462b1(0x202)]!=='top')return;if(!_0x2417a3[_0x5462b1(0x1ed)])return;if(!this['_logWindow'])return;const _0x5b030f=this[_0x5462b1(0x199)]['y']-Math[_0x5462b1(0xde)]((Graphics['height']-Graphics[_0x5462b1(0x250)])/0x2),_0x32e297=_0x5b030f+this[_0x5462b1(0x199)][_0x5462b1(0x18f)];this[_0x5462b1(0x138)]['y']=_0x32e297+_0x2417a3['ScreenBuffer'];};function Sprite_CTB_TurnOrder_Battler(){const _0x50bfb6=_0x34aa07;this[_0x50bfb6(0x1e2)](...arguments);}Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)]=Object[_0x34aa07(0x241)](Sprite_Clickable['prototype']),Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0xec)]=Sprite_CTB_TurnOrder_Battler,Sprite_CTB_TurnOrder_Battler['prototype'][_0x34aa07(0x1e2)]=function(_0x234106,_0x346f85,_0x30d1fa){const _0x2cec71=_0x34aa07;this['initMembers'](_0x234106,_0x346f85,_0x30d1fa),Sprite_Clickable[_0x2cec71(0x21a)][_0x2cec71(0x1e2)][_0x2cec71(0x1cb)](this),this[_0x2cec71(0x161)]();},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x256)]=function(_0x44253a,_0x4a8a1c,_0x40cdd3){const _0x252876=_0x34aa07;this[_0x252876(0x14c)]=_0x44253a,this[_0x252876(0x1a7)]=_0x4a8a1c,this[_0x252876(0x24f)]=_0x40cdd3;const _0x29eeaf=Window_CTB_TurnOrder['Settings'],_0x26b78a=this[_0x252876(0x10e)](),_0x49568d=this['defaultPosition']();this[_0x252876(0x1bf)]=0x0,this[_0x252876(0x25b)]=_0x26b78a?_0x29eeaf['SpriteThin']*_0x49568d:0x0,this[_0x252876(0x1d9)]=_0x26b78a?0x0:_0x29eeaf[_0x252876(0x1c8)]*_0x49568d,this[_0x252876(0x164)]=0x0,this[_0x252876(0x26d)]=0xff,this[_0x252876(0x22d)]=!![],this[_0x252876(0x1a0)]=!![];},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x161)]=function(){const _0x5566f5=_0x34aa07;this[_0x5566f5(0x131)](),this['createBackgroundSprite'](),this[_0x5566f5(0x226)](),this[_0x5566f5(0x181)](),this[_0x5566f5(0x20b)]();},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x131)]=function(){const _0x48d201=_0x34aa07;this['x']=this[_0x48d201(0x25b)],this['y']=this[_0x48d201(0x1d9)];},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x10e)]=function(){const _0x2b7d73=_0x34aa07,_0xee4e64=Window_CTB_TurnOrder[_0x2b7d73(0x242)],_0x36ea06=[_0x2b7d73(0xc1),_0x2b7d73(0x1a2)][_0x2b7d73(0xd6)](_0xee4e64[_0x2b7d73(0x202)]);return _0x36ea06;},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)]['bitmapWidth']=function(){const _0x415046=_0x34aa07,_0x52cda0=Window_CTB_TurnOrder['Settings'];return this['isHorz']()?_0x52cda0[_0x415046(0x1c8)]:_0x52cda0[_0x415046(0x168)];},Sprite_CTB_TurnOrder_Battler['prototype'][_0x34aa07(0x246)]=function(){const _0x5ec293=_0x34aa07,_0x18def6=Window_CTB_TurnOrder[_0x5ec293(0x242)];return this[_0x5ec293(0x10e)]()?_0x18def6[_0x5ec293(0x168)]:_0x18def6[_0x5ec293(0x1c8)];},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x240)]=function(){const _0x28c571=_0x34aa07;this[_0x28c571(0x210)]=new Bitmap(0x48,0x24);const _0x156052=this['battler']()?this[_0x28c571(0x269)]()['name']():_0x28c571(0x1a4)[_0x28c571(0x17e)](this['_unit'],this[_0x28c571(0x1a7)],this['_dupe']);this['bitmap']['drawText'](_0x156052,0x0,0x0,0x48,0x24,'center');},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0xf5)]=function(){const _0x3c98d2=_0x34aa07;if(!Window_CTB_TurnOrder['Settings'][_0x3c98d2(0x1ff)])return;const _0x21fff6=Window_CTB_TurnOrder[_0x3c98d2(0x242)],_0x435da4=this[_0x3c98d2(0x14c)]===$gameParty?_0x3c98d2(0x11f):'Enemy',_0x59f41c=_0x3c98d2(0x24b)[_0x3c98d2(0x17e)](_0x435da4),_0x3ece05=new Sprite();_0x3ece05[_0x3c98d2(0x1fb)]['x']=this[_0x3c98d2(0x1fb)]['x'],_0x3ece05['anchor']['y']=this[_0x3c98d2(0x1fb)]['y'];if(_0x21fff6[_0x59f41c])_0x3ece05[_0x3c98d2(0x210)]=ImageManager['loadSystem'](_0x21fff6[_0x59f41c]);else{const _0x3de2de=this[_0x3c98d2(0x231)](),_0x31e7eb=this[_0x3c98d2(0x246)]();_0x3ece05['bitmap']=new Bitmap(_0x3de2de,_0x31e7eb);const _0x20b192=ColorManager[_0x3c98d2(0xf9)](_0x21fff6[_0x3c98d2(0x1ba)[_0x3c98d2(0x17e)](_0x435da4)]),_0x19c510=ColorManager[_0x3c98d2(0xf9)](_0x21fff6[_0x3c98d2(0xd2)['format'](_0x435da4)]);_0x3ece05[_0x3c98d2(0x210)][_0x3c98d2(0xee)](0x0,0x0,_0x3de2de,_0x31e7eb,_0x20b192,_0x19c510,!![]);}this[_0x3c98d2(0x197)]=_0x3ece05,this[_0x3c98d2(0x190)](this[_0x3c98d2(0x197)]),this[_0x3c98d2(0x249)]=this[_0x3c98d2(0x197)][_0x3c98d2(0x249)],this[_0x3c98d2(0x18f)]=this[_0x3c98d2(0x197)][_0x3c98d2(0x18f)];},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x226)]=function(){const _0x39aea7=_0x34aa07,_0x5a4785=new Sprite();_0x5a4785[_0x39aea7(0x1fb)]['x']=this[_0x39aea7(0x1fb)]['x'],_0x5a4785[_0x39aea7(0x1fb)]['y']=this[_0x39aea7(0x1fb)]['y'],this[_0x39aea7(0x264)]=_0x5a4785,this[_0x39aea7(0x190)](this[_0x39aea7(0x264)]),this[_0x39aea7(0x143)]();},Sprite_CTB_TurnOrder_Battler['prototype'][_0x34aa07(0x181)]=function(){const _0x150818=_0x34aa07;if(!Window_CTB_TurnOrder[_0x150818(0x242)][_0x150818(0x16f)])return;const _0x250e82=Window_CTB_TurnOrder[_0x150818(0x242)],_0x5dc482=this['_unit']===$gameParty?_0x150818(0x11f):_0x150818(0x19e),_0x578b8f='%1SystemBorder'[_0x150818(0x17e)](_0x5dc482),_0x3e2efe=new Sprite();_0x3e2efe[_0x150818(0x1fb)]['x']=this[_0x150818(0x1fb)]['x'],_0x3e2efe[_0x150818(0x1fb)]['y']=this['anchor']['y'];if(_0x250e82[_0x578b8f])_0x3e2efe[_0x150818(0x210)]=ImageManager['loadSystem'](_0x250e82[_0x578b8f]);else{let _0x56af66=this[_0x150818(0x231)](),_0x3a2725=this[_0x150818(0x246)](),_0x92d664=_0x250e82['BorderThickness'];_0x3e2efe['bitmap']=new Bitmap(_0x56af66,_0x3a2725);const _0x22e80d=_0x150818(0x156),_0x4bb28b=ColorManager['getColor'](_0x250e82[_0x150818(0x153)[_0x150818(0x17e)](_0x5dc482)]);_0x3e2efe[_0x150818(0x210)][_0x150818(0x1ee)](0x0,0x0,_0x56af66,_0x3a2725,_0x22e80d),_0x56af66-=0x2,_0x3a2725-=0x2,_0x3e2efe[_0x150818(0x210)][_0x150818(0x1ee)](0x1,0x1,_0x56af66,_0x3a2725,_0x4bb28b),_0x56af66-=_0x92d664*0x2,_0x3a2725-=_0x92d664*0x2,_0x3e2efe[_0x150818(0x210)][_0x150818(0x1ee)](0x1+_0x92d664,0x1+_0x92d664,_0x56af66,_0x3a2725,_0x22e80d),_0x56af66-=0x2,_0x3a2725-=0x2,_0x92d664+=0x1,_0x3e2efe['bitmap'][_0x150818(0x177)](0x1+_0x92d664,0x1+_0x92d664,_0x56af66,_0x3a2725);}this[_0x150818(0x197)]=_0x3e2efe,this[_0x150818(0x190)](this[_0x150818(0x197)]);},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x20b)]=function(){const _0x376a43=_0x34aa07,_0x4680fc=Window_CTB_TurnOrder[_0x376a43(0x242)];if(!_0x4680fc[_0x376a43(0x245)])return;if(this['_unit']===$gameParty)return;const _0xda13e4=this[_0x376a43(0x231)](),_0x2d288b=this['bitmapHeight'](),_0x37c2b6=new Sprite();_0x37c2b6[_0x376a43(0x1fb)]['x']=this[_0x376a43(0x1fb)]['x'],_0x37c2b6['anchor']['y']=this['anchor']['y'],_0x37c2b6['bitmap']=new Bitmap(_0xda13e4,_0x2d288b),this['_letterSprite']=_0x37c2b6,this['addChild'](this[_0x376a43(0xff)]);},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x269)]=function(){const _0x5dd0ae=_0x34aa07;return this[_0x5dd0ae(0x14c)]?this[_0x5dd0ae(0x14c)][_0x5dd0ae(0x17f)]()[this[_0x5dd0ae(0x1a7)]]:null;},Sprite_CTB_TurnOrder_Battler['prototype'][_0x34aa07(0x1ec)]=function(_0x47e0a3){const _0x578961=_0x34aa07,_0x2b9adb=this[_0x578961(0x269)]();if(!_0x2b9adb)return Number[_0x578961(0xfa)];const _0x1a34a7=0x1*(this[_0x578961(0x24f)]+0x1);return _0x2b9adb[_0x578961(0x173)](_0x1a34a7,_0x47e0a3);},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0xd9)]=function(){const _0x5cf0ee=_0x34aa07;Sprite_Clickable['prototype']['update'][_0x5cf0ee(0x1cb)](this),this[_0x5cf0ee(0x205)](),this[_0x5cf0ee(0xd4)](),this[_0x5cf0ee(0x14b)](),this[_0x5cf0ee(0x14e)](),this[_0x5cf0ee(0x102)](),this[_0x5cf0ee(0x26e)](),this[_0x5cf0ee(0x185)](),this[_0x5cf0ee(0x1d5)]();},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x205)]=function(){const _0x54b2cf=_0x34aa07,_0x3e185b=this['containerPosition']();if(this['_position']===_0x3e185b)return;this[_0x54b2cf(0x18d)]=_0x3e185b;const _0x161202=Window_CTB_TurnOrder[_0x54b2cf(0x242)],_0x409307=this[_0x54b2cf(0x10e)](),_0x321a0=_0x161202[_0x54b2cf(0x12d)],_0x579d99=_0x161202[_0x54b2cf(0x106)],_0x43a906=SceneManager[_0x54b2cf(0xf1)]['_ctbTurnOrderWindow'];if(!_0x43a906)return;this[_0x54b2cf(0x1bf)]=_0x161202[_0x54b2cf(0x1fd)],this['_positionTargetX']=_0x409307?_0x161202['SpriteThin']*_0x3e185b:0x0,this[_0x54b2cf(0x1d9)]=_0x409307?0x0:_0x161202[_0x54b2cf(0x1c8)]*_0x3e185b,_0x3e185b>0x0&&(this[_0x54b2cf(0x25b)]+=_0x409307?_0x579d99:0x0,this['_positionTargetY']+=_0x409307?0x0:_0x579d99),_0x321a0?this[_0x54b2cf(0x25b)]=_0x409307?_0x43a906['width']-this[_0x54b2cf(0x25b)]-_0x161202[_0x54b2cf(0x1c8)]:0x0:this[_0x54b2cf(0x1d9)]=_0x409307?0x0:_0x43a906[_0x54b2cf(0x18f)]-this[_0x54b2cf(0x1d9)]-_0x161202['SpriteThin'];},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0xd4)]=function(){const _0x11c93c=_0x34aa07;if(this[_0x11c93c(0x164)]>0x0)return;if(this[_0x11c93c(0x1bf)]>0x0){const _0x3874a7=this['_positionDuration'];this['x']=(this['x']*(_0x3874a7-0x1)+this['_positionTargetX'])/_0x3874a7,this['y']=(this['y']*(_0x3874a7-0x1)+this[_0x11c93c(0x1d9)])/_0x3874a7,this['_positionDuration']--;}this[_0x11c93c(0x1bf)]<=0x0&&this[_0x11c93c(0x22d)]&&(this['x']=this['_positionTargetX'],this['y']=this[_0x11c93c(0x1d9)],this[_0x11c93c(0x233)]<=0x0&&!this[_0x11c93c(0x1b1)]&&this['startFade'](0xff));},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x204)]=function(){return Window_CTB_TurnOrder['Settings']['TotalHorzSprites']*0x14;},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0xfc)]=function(){const _0x261a92=_0x34aa07;return SceneManager['_scene'][_0x261a92(0x199)];},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)]['containerPosition']=function(){const _0xf5271e=_0x34aa07;if(!this[_0xf5271e(0xfc)]())return this['defaultPosition']();const _0x33206f=this[_0xf5271e(0xfc)]()['_turnOrderContainer'];return _0x33206f[_0xf5271e(0x13b)](this);},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x158)]=function(){const _0xcc5f50=_0x34aa07,_0x3aec32=Window_CTB_TurnOrder[_0xcc5f50(0x242)],_0x50592d=this[_0xcc5f50(0x10e)](),_0x16b002=_0x50592d?_0x3aec32[_0xcc5f50(0x1f7)]:_0x3aec32['TotalVertSprites'];this[_0xcc5f50(0x24f)]-=0x1,this['_dupe']<0x0&&(this[_0xcc5f50(0x24f)]=_0x16b002-0x1,this[_0xcc5f50(0x1bc)](0x0));},Sprite_CTB_TurnOrder_Battler['prototype']['startFade']=function(_0x4034e8){const _0x296045=_0x34aa07,_0x49102c=Window_CTB_TurnOrder[_0x296045(0x242)];this[_0x296045(0x164)]=_0x49102c[_0x296045(0x1fd)],this[_0x296045(0x26d)]=_0x4034e8;},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x14b)]=function(){const _0x21100b=_0x34aa07,_0xe9fe8=this[_0x21100b(0x269)]();if(!_0xe9fe8)return;if(this[_0x21100b(0x22d)]===_0xe9fe8[_0x21100b(0x223)]()&&this[_0x21100b(0x1a0)]===_0xe9fe8['isAppeared']())return;this[_0x21100b(0x22d)]=_0xe9fe8[_0x21100b(0x223)](),this[_0x21100b(0x1a0)]=_0xe9fe8[_0x21100b(0x159)]();let _0x422b9f=this[_0x21100b(0x22d)]&&this[_0x21100b(0x1a0)]?0xff:0x0;this[_0x21100b(0x1bc)](_0x422b9f);},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x14e)]=function(){const _0x46d8b6=_0x34aa07;if(this[_0x46d8b6(0x164)]>0x0){const _0x50abb1=this['_fadeDuration'];this['opacity']=(this['opacity']*(_0x50abb1-0x1)+this[_0x46d8b6(0x26d)])/_0x50abb1,this['_fadeDuration']--,this[_0x46d8b6(0x164)]<=0x0&&(this[_0x46d8b6(0x205)](),this[_0x46d8b6(0x1bf)]=0x0,this[_0x46d8b6(0xd4)](),this[_0x46d8b6(0x233)]=this['_fadeTarget']);}if(this['_isBattleOver'])return;BattleManager[_0x46d8b6(0x17a)]===_0x46d8b6(0x15d)&&(this[_0x46d8b6(0x1b1)]=!![],this[_0x46d8b6(0x1bc)](0x0));},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x102)]=function(){const _0x424e91=_0x34aa07,_0x5053e6=this[_0x424e91(0x269)]();if(!_0x5053e6)return;const _0x56335f=Window_CTB_TurnOrder[_0x424e91(0x242)],_0x5d4f13=this['_unit']===$gameParty?'Actor':'Enemy';let _0x5e01fc=_0x5053e6['TurnOrderCTBGraphicType']();if(_0x5053e6[_0x424e91(0x211)]()&&_0x5e01fc==='enemy')_0x5e01fc='face';else _0x5053e6[_0x424e91(0x1f3)]()&&_0x5e01fc===_0x424e91(0x115)&&(_0x5e01fc='enemy');if(this[_0x424e91(0xd3)]!==_0x5e01fc)return this[_0x424e91(0x143)]();switch(this[_0x424e91(0xd3)]){case _0x424e91(0xe0):if(this[_0x424e91(0x1c3)]!==_0x5053e6[_0x424e91(0x1c1)]())return this['processUpdateGraphic']();if(this[_0x424e91(0x234)]!==_0x5053e6[_0x424e91(0x19c)]())return this['processUpdateGraphic']();break;case _0x424e91(0x107):if(this['_graphicIconIndex']!==_0x5053e6[_0x424e91(0x129)]())return this[_0x424e91(0x143)]();break;case _0x424e91(0x176):if(_0x5053e6[_0x424e91(0xd0)]()){if(this[_0x424e91(0x24a)]!==_0x5053e6['svBattlerName']())return this['processUpdateGraphic']();}else{if(this[_0x424e91(0x1a5)]!==_0x5053e6['battlerName']())return this['processUpdateGraphic']();}break;case _0x424e91(0x115):if(_0x5053e6['isActor']()){if(this[_0x424e91(0x24a)]!==_0x5053e6[_0x424e91(0x1ef)]())return this[_0x424e91(0x143)]();}else{if(this[_0x424e91(0x1a5)]!==_0x5053e6[_0x424e91(0x1ef)]())return this[_0x424e91(0x143)]();}break;}},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x143)]=function(){const _0x1254e8=_0x34aa07,_0x5a9469=this[_0x1254e8(0x269)]();if(!_0x5a9469)return;this[_0x1254e8(0xd3)]=_0x5a9469[_0x1254e8(0x10d)]();if(_0x5a9469[_0x1254e8(0x211)]()&&this[_0x1254e8(0xd3)]==='enemy')this[_0x1254e8(0xd3)]=_0x1254e8(0xe0);else _0x5a9469['isEnemy']()&&this['_graphicType']==='svactor'&&(this['_graphicType']=_0x1254e8(0x176));let _0x463169;switch(this[_0x1254e8(0xd3)]){case _0x1254e8(0xe0):this[_0x1254e8(0x1c3)]=_0x5a9469['TurnOrderCTBGraphicFaceName'](),this[_0x1254e8(0x234)]=_0x5a9469[_0x1254e8(0x19c)](),_0x463169=ImageManager[_0x1254e8(0xe1)](this[_0x1254e8(0x1c3)]),_0x463169[_0x1254e8(0x171)](this['changeFaceGraphicBitmap']['bind'](this,_0x463169));break;case _0x1254e8(0x107):this[_0x1254e8(0x1a3)]=_0x5a9469[_0x1254e8(0x25a)](),_0x463169=ImageManager['loadSystem']('IconSet'),_0x463169[_0x1254e8(0x171)](this[_0x1254e8(0x10f)][_0x1254e8(0x220)](this,_0x463169));break;case _0x1254e8(0x176):if(_0x5a9469[_0x1254e8(0xd0)]())this['_graphicSv']=_0x5a9469['svBattlerName'](),_0x463169=ImageManager['loadSvActor'](this[_0x1254e8(0x24a)]),_0x463169[_0x1254e8(0x171)](this['changeSvActorGraphicBitmap'][_0x1254e8(0x220)](this,_0x463169));else $gameSystem['isSideView']()?(this[_0x1254e8(0x1a5)]=_0x5a9469[_0x1254e8(0x1ef)](),_0x463169=ImageManager['loadSvEnemy'](this[_0x1254e8(0x1a5)]),_0x463169[_0x1254e8(0x171)](this[_0x1254e8(0x187)][_0x1254e8(0x220)](this,_0x463169))):(this['_graphicEnemy']=_0x5a9469[_0x1254e8(0x1ef)](),_0x463169=ImageManager[_0x1254e8(0x13f)](this['_graphicEnemy']),_0x463169[_0x1254e8(0x171)](this[_0x1254e8(0x187)]['bind'](this,_0x463169)));break;case _0x1254e8(0x115):this[_0x1254e8(0x24a)]=_0x5a9469[_0x1254e8(0x1ef)](),_0x463169=ImageManager[_0x1254e8(0x1bd)](this[_0x1254e8(0x24a)]),_0x463169[_0x1254e8(0x171)](this[_0x1254e8(0x1d0)][_0x1254e8(0x220)](this,_0x463169));break;}},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0xc9)]=function(_0x2cddbb){const _0x17edbf=_0x34aa07,_0xe749c6=this[_0x17edbf(0x234)],_0x3542e7=this[_0x17edbf(0x231)](),_0x2546c1=this[_0x17edbf(0x246)](),_0x1eebae=Math['max'](_0x3542e7,_0x2546c1);this[_0x17edbf(0x264)][_0x17edbf(0x210)]=new Bitmap(_0x3542e7,_0x2546c1);const _0x16bb4c=this[_0x17edbf(0x264)][_0x17edbf(0x210)],_0x5d5460=ImageManager['faceWidth'],_0x4596ea=ImageManager[_0x17edbf(0x1e8)],_0x4ade6e=_0x1eebae/Math['max'](_0x5d5460,_0x4596ea),_0x48c6ae=ImageManager[_0x17edbf(0x273)],_0x4c1dfa=ImageManager['faceHeight'],_0x527a52=_0xe749c6%0x4*_0x5d5460+(_0x5d5460-_0x48c6ae)/0x2,_0x4c4448=Math[_0x17edbf(0x18e)](_0xe749c6/0x4)*_0x4596ea+(_0x4596ea-_0x4c1dfa)/0x2,_0x23d4a4=(_0x3542e7-_0x5d5460*_0x4ade6e)/0x2,_0x2e191e=(_0x2546c1-_0x4596ea*_0x4ade6e)/0x2;_0x16bb4c[_0x17edbf(0xfd)](_0x2cddbb,_0x527a52,_0x4c4448,_0x48c6ae,_0x4c1dfa,_0x23d4a4,_0x2e191e,_0x1eebae,_0x1eebae);},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x10f)]=function(_0x244bfc){const _0x4bfc53=_0x34aa07,_0x238bac=this[_0x4bfc53(0x1a3)],_0x52979b=this[_0x4bfc53(0x231)](),_0x1e4304=this[_0x4bfc53(0x246)]();this[_0x4bfc53(0x264)][_0x4bfc53(0x210)]=new Bitmap(_0x52979b,_0x1e4304);const _0xad5b2a=this[_0x4bfc53(0x264)][_0x4bfc53(0x210)],_0x439585=ImageManager[_0x4bfc53(0x1d6)],_0x3fea0d=ImageManager[_0x4bfc53(0x259)],_0x3b7bd3=Math[_0x4bfc53(0x229)](_0x439585,_0x3fea0d,_0x52979b,_0x1e4304),_0x24101b=_0x238bac%0x10*_0x439585,_0xd09ea8=Math[_0x4bfc53(0x18e)](_0x238bac/0x10)*_0x3fea0d,_0x346e62=Math[_0x4bfc53(0x18e)](Math['max'](_0x52979b-_0x3b7bd3,0x0)/0x2),_0x2f344a=Math[_0x4bfc53(0x18e)](Math[_0x4bfc53(0x1ab)](_0x1e4304-_0x3b7bd3,0x0)/0x2);_0xad5b2a['blt'](_0x244bfc,_0x24101b,_0xd09ea8,_0x439585,_0x3fea0d,_0x346e62,_0x2f344a,_0x3b7bd3,_0x3b7bd3);},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x1d0)]=function(_0x46765d){const _0x127bcf=_0x34aa07,_0x16f6d7=this[_0x127bcf(0x231)](),_0x5b4c29=this[_0x127bcf(0x246)](),_0x5849ea=Math[_0x127bcf(0x229)](_0x16f6d7,_0x5b4c29);this[_0x127bcf(0x264)]['bitmap']=new Bitmap(_0x16f6d7,_0x5b4c29);const _0x2a1fbf=this[_0x127bcf(0x264)]['bitmap'],_0x338efb=this[_0x127bcf(0x24a)][_0x127bcf(0x1de)](/\$/i),_0x252df4=_0x338efb?0x1:ImageManager[_0x127bcf(0x1f2)],_0x1e4bf2=_0x338efb?0x1:ImageManager[_0x127bcf(0x104)],_0x594d4e=_0x46765d[_0x127bcf(0x249)]/_0x252df4,_0x210bb8=_0x46765d['height']/_0x1e4bf2,_0x23f550=Math[_0x127bcf(0x229)](0x1,_0x5849ea/_0x594d4e,_0x5849ea/_0x210bb8),_0x4c67b4=_0x594d4e*_0x23f550,_0x828127=_0x210bb8*_0x23f550,_0x40a45c=Math[_0x127bcf(0xde)]((_0x16f6d7-_0x4c67b4)/0x2),_0x18719e=Math[_0x127bcf(0xde)]((_0x5b4c29-_0x828127)/0x2);_0x2a1fbf[_0x127bcf(0xfd)](_0x46765d,0x0,0x0,_0x594d4e,_0x210bb8,_0x40a45c,_0x18719e,_0x4c67b4,_0x828127);},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x187)]=function(_0xf60995){const _0x455a34=_0x34aa07,_0x25b4fd=Window_CTB_TurnOrder[_0x455a34(0x242)],_0x148120=this[_0x455a34(0x231)](),_0x5494a1=this['bitmapHeight'](),_0xbcc811=Math[_0x455a34(0x229)](_0x148120,_0x5494a1);this[_0x455a34(0x264)][_0x455a34(0x210)]=new Bitmap(_0x148120,_0x5494a1);const _0x44a8f2=this[_0x455a34(0x264)][_0x455a34(0x210)],_0x242597=Math['min'](0x1,_0xbcc811/_0xf60995['width'],_0xbcc811/_0xf60995['height']),_0x3c0a87=_0xf60995[_0x455a34(0x249)]*_0x242597,_0x3479d6=_0xf60995[_0x455a34(0x18f)]*_0x242597,_0x1a95e7=Math[_0x455a34(0xde)]((_0x148120-_0x3c0a87)/0x2),_0x38f705=Math[_0x455a34(0xde)]((_0x5494a1-_0x3479d6)/0x2);_0x44a8f2[_0x455a34(0xfd)](_0xf60995,0x0,0x0,_0xf60995['width'],_0xf60995[_0x455a34(0x18f)],_0x1a95e7,_0x38f705,_0x3c0a87,_0x3479d6);},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x26e)]=function(){const _0x5d7af2=_0x34aa07,_0x2f71ec=this[_0x5d7af2(0x269)]();if(!_0x2f71ec)return;if(!_0x2f71ec[_0x5d7af2(0x1f3)]())return;if(this[_0x5d7af2(0x183)]===_0x2f71ec[_0x5d7af2(0x186)]())return;this[_0x5d7af2(0x183)]=_0x2f71ec['battlerHue'](),this[_0x5d7af2(0x264)][_0x5d7af2(0xd7)](_0x2f71ec[_0x5d7af2(0xd0)]()?0x0:this[_0x5d7af2(0x183)]);},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x185)]=function(){const _0x41b0b5=_0x34aa07;if(!this[_0x41b0b5(0xff)])return;const _0x2865bb=this[_0x41b0b5(0x269)]();if(!_0x2865bb)return;if(this[_0x41b0b5(0x122)]===_0x2865bb[_0x41b0b5(0x122)]&&this[_0x41b0b5(0x15f)]===_0x2865bb[_0x41b0b5(0x15f)])return;this[_0x41b0b5(0x122)]=_0x2865bb[_0x41b0b5(0x122)],this[_0x41b0b5(0x15f)]=_0x2865bb[_0x41b0b5(0x15f)];const _0x27a41e=Window_CTB_TurnOrder[_0x41b0b5(0x242)],_0x17d60d=this[_0x41b0b5(0x10e)](),_0x6d3987=this[_0x41b0b5(0x231)](),_0x243a94=this[_0x41b0b5(0x246)](),_0x47ad64=this[_0x41b0b5(0xff)][_0x41b0b5(0x210)];_0x47ad64[_0x41b0b5(0xca)]();if(!this[_0x41b0b5(0x15f)])return;_0x47ad64['fontFace']=_0x27a41e[_0x41b0b5(0x1e1)]||$gameSystem['mainFontFace'](),_0x47ad64['fontSize']=_0x27a41e['EnemyBattlerFontSize']||0x10,_0x17d60d?_0x47ad64[_0x41b0b5(0x1f0)](this['_letter'][_0x41b0b5(0x200)](),0x0,_0x243a94/0x2,_0x6d3987,_0x243a94/0x2,_0x41b0b5(0x215)):_0x47ad64[_0x41b0b5(0x1f0)](this['_letter']['trim'](),0x0,0x2,_0x6d3987-0x8,_0x243a94-0x4,'right');},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)][_0x34aa07(0x1d5)]=function(){const _0x24eb3b=_0x34aa07,_0x1316ee=this['battler']();if(!_0x1316ee)return;const _0x571455=_0x1316ee['battler']();if(!_0x571455)return;const _0x2d0f4e=_0x571455[_0x24eb3b(0x170)]();if(!_0x2d0f4e)return;this['setBlendColor'](_0x2d0f4e[_0x24eb3b(0xc4)]);},Sprite_CTB_TurnOrder_Battler[_0x34aa07(0x21a)]['getStateTooltipBattler']=function(){return this['battler']();},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x219)]=Window_Help[_0x34aa07(0x21a)][_0x34aa07(0x1b9)],Window_Help[_0x34aa07(0x21a)]['setItem']=function(_0x1d3fb3){const _0x52699d=_0x34aa07;BattleManager['isCTB']()&&_0x1d3fb3&&_0x1d3fb3['note']&&_0x1d3fb3['note']['match'](/<(?:CTB) HELP>\s*([\s\S]*)\s*<\/(?:CTB) HELP>/i)?this[_0x52699d(0x135)](String(RegExp['$1'])):VisuMZ[_0x52699d(0x209)][_0x52699d(0x219)][_0x52699d(0x1cb)](this,_0x1d3fb3);},VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x17c)]=Window_StatusBase['prototype'][_0x34aa07(0x15c)],Window_StatusBase[_0x34aa07(0x21a)][_0x34aa07(0x15c)]=function(_0x1a8c7b,_0x44a0ea,_0x3bc76d,_0x5800d0){const _0x3e4212=_0x34aa07;if(BattleManager['isCTB']()&&_0x44a0ea===_0x3e4212(0x178))return;VisuMZ['BattleSystemCTB'][_0x3e4212(0x17c)][_0x3e4212(0x1cb)](this,_0x1a8c7b,_0x44a0ea,_0x3bc76d,_0x5800d0);};function Window_CTB_TurnOrder(){const _0x37480e=_0x34aa07;this[_0x37480e(0x1e2)](...arguments);}function _0x4f08(){const _0x5c1ae5=['%1\x20%2\x20%3','_graphicEnemy','76632btYQIA','_index','ctbHasInstantActionAfter','selectNextCommand','_ctbTurnOrderVisible','max','isDead','postEndActionCTB','hide','_subject','name','_isBattleOver','isTpb','BattleManager_isActiveTpb','removeBattleStates','process_VisuMZ_BattleSystemCTB_CreateRegExp','FUNC','isActing','_forcing','setItem','%1BgColor1','speed','startFade','loadSvActor','setActionState','_positionDuration','processTurnOrderChangeCTB','TurnOrderCTBGraphicFaceName','isAnyBattlerReadyCTB','_graphicFaceName','updateTpbBattler','charging','STRUCT','_helpWindow','SpriteThin','acting','battleSys','call','processCtbAntiSoftlock','casting','BattleManager_processTurn','MIN_SAFE_INTEGER','changeSvActorGraphicBitmap','endAction','BattleManager_isTpb','subject','BattleManager_endAction','updateSelectionEffect','iconWidth','Charge','isSceneBattle','_positionTargetY','updateTurnOrder','RepositionTopHelpX','ConvertParams','faceIndex','match','TotalVertSprites','appear','EnemyBattlerFontFace','initialize','tpbRelativeSpeed','Rush','Game_System_initialize','changeCtbCastTime','_autoBattle','faceHeight','updateTpbIdleTime','setCtbAfterSpeed','ParseItemNotetags','ticksLeft','RepositionLogWindow','fillRect','battlerName','drawText','12rdgGkB','svActorHorzCells','isEnemy','createKeyJS','updateTpbChargeTimeCTB','registerCommand','TotalHorzSprites','STR','Game_Battler_tpbSpeed','faceName','anchor','isPassCTB','UpdateFrames','After','ShowMarkerBg','trim','%1Mirror','DisplayPosition','toUpperCase','defaultPosition','checkPosition','processAbort','_ogWindowLayerY','EnemyBattlerFaceIndex','BattleSystemCTB','1026246aOzyqU','createLetterSprite','FaceIndex','isActiveTpb','TpbAccelerationJS','updateTpbCtb','bitmap','isActor','Enemy-%1-%2','createAllWindows','item','center','%1AnimationID','log','rotateCTBSprites','Window_Help_setItem','prototype','Game_Battler_tpbRequiredCastTime','tpbChargeTime','actor','updateTpb','isValid','bind','Game_Battler_updateTpbChargeTime','1454565xLTnJe','isAlive','skills','BattleManager_updateAllTpbBattlers','createGraphicSprite','Game_Battler_isTpbReady','otherCtbChecksPassed','min','TpbSpeedCalcJS','Scene_Battle_createAllWindows','parse','_isAlive','Enemies','clearTurnOrderCTBGraphics','isCTB','bitmapWidth','updateTurnOrderCTB','opacity','_graphicFaceIndex','_ctbTurnOrderGraphicType','ParseAllNotetags','TurnOrder','visible','updateVisibility','undecided','updateAllTpbBattlers','clearTpbChargeTime','windowRect','maxBattleMembers','6045080lfWgnf','createTestBitmap','create','Settings','ctbStopped','some','EnemyBattlerDrawLetter','bitmapHeight','createTurnOrderCTBGraphicFaceIndex','BattleManager_updateTurn','width','_graphicSv','%1SystemBg','addChildAt','_ctbTurnOrderIconIndex','368858tuiCaW','_dupe','boxHeight','FaceName','tpbBaseSpeed','updateTpbChargeTime','Mechanics','Game_Battler_tpbRelativeSpeed','initMembers','onRestrict','EscapeFailPenalty','iconHeight','createTurnOrderCTBGraphicIconIndex','_positionTargetX','clearTpbChargeTimeCTB','processTurn','changeTurnOrderByCTB','allBattleMembers','processTurnCTB','isCtbCastingState','status','RepositionTopForHelp','_graphicSprite','(?:CTB)','Actors','_ctbAfterSpeed','onTpbCharged','battler','tpbSpeed','BattleManager_battleSys','OrderJS','_fadeTarget','updateGraphicHue','Ticks\x20to\x20Goal:\x20','initTpbChargeTimeCTB','createTurnOrderCTBGraphicFaceName','createCTBTurnOrderWindow','faceWidth','BattleManager_updateTpb','isPlaytest','getChildIndex','updateTpbCastTimeCTB','IconIndex','applyBattleSystemCTBUserEffect','top','ARRAYSTRUCT','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','_blendColor','length','_ctbTurnOrderFaceIndex','EnemyBattlerFaceName','setCtbCastTime','changeFaceGraphicBitmap','clear','compareBattlerSprites','turn','updateTpbCastTime','initBattleSystemCTB','canMove','hasSvBattler','removeCurrentAction','%1BgColor2','_graphicType','updatePosition','%1PopupText','includes','setHue','createBattlerSprites','update','Game_Battler_onRestrict','updateTpbInput','initTpbChargeTime','ARRAYSTR','round','4978590xvADje','face','loadFace','_homeY','ActorBattlerType','TpbCastTimeJS','ActorBattlerIcon','Effect','BattleManager_startActorInput','return\x200','logCtbData','ScreenBuffer','setBattleSystemCTBTurnOrderVisible','constructor','DeviceFriendly','gradientFillRect','%1FlashDuration','setCtbChargeTime','_scene','CtbTurnOrderClearEnemyGraphic','getBattleSystem','_statusWindow','createBackgroundSprite','_turnOrderContainer','applyGlobal','note','getColor','MAX_SAFE_INTEGER','RegExp','containerWindow','blt','_ogWindowLayerX','_letterSprite','attackSpeed','Game_BattlerBase_hide','updateGraphic','DisplayOffsetX','svActorVertCells','Game_Battler_updateTpb','SubjectDistance','icon','createRateJS','18RZmcmq','updateTurnCTB','_antiCtbSoftlockInstantActionAfter','_actionBattlers','TurnOrderCTBGraphicType','isHorz','changeIconGraphicBitmap','_onRestrictBypassCtbReset','applyItemBattleSystemCTBUserEffect','startBattle','applyTpbPenalty','Game_BattlerBase_appear','svactor','startAction','ParseSkillNotetags','setTurnOrderCTB','createTurnOrderCTBGraphicType','Parse_Notetags_CreateJS','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_tpbCastTime','Game_Battler_updateTpbIdleTime','left','Actor','SystemTurnOrderVisibility','tpbRequiredCastTime','_letter','traitObjects','find','Aborting\x20Battle.\x20Softlock\x20cannot\x20be\x20fixed.','onDatabaseLoaded','_tpbTurnCount','reduce','TurnOrderCTBGraphicIconIndex','_ctbTurnOrderFaceName','repositionLogWindowCTB','getCurrentTurnOrderPositionCTB','OrderDirection','filter','right','isInputting','createInitialPositions','changeCtbChargeTime','applyGlobalBattleSystemCTBEffects','JSON','setText','currentAction','createOrderJS','_logWindow','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','clamp','indexOf','_debutCTB','Visible','_tpbChargeTime','loadEnemy','BattlerRelativeSpeedJS','CtbTurnOrderActorFace','sort','processUpdateGraphic','(?:GAUGE|TIME|SPEED)','ready','Item-%1-%2','onCtbOrderChange','BattleManager_startBattle','Game_Battler_initTpbChargeTime','push','checkOpacity','_unit','_tpbIdleTime','updateOpacity','Cast','isCtbChargingState','Game_Battler_updateTpbCastTime','_tpbState','%1BorderColor','Skill-%1-%2','439336FOpuPN','#000000','Game_Battler_tpbAcceleration','rotateDupeNumber','isAppeared','Game_Battler_clearTpbChargeTime','prepare','placeGauge','battleEnd','isTpbCharged','_plural','_windowLayer','createChildren','checkCtbAntiSoftlock','_anti_CTB_SoftlockCount','_fadeDuration','Game_Battler_applyTpbPenalty','isTpbReady','applyItemUserEffect','SpriteLength','Scene_Battle_selectNextCommand','_turnOrderInnerSprite','clearStates','concat','Scene_Boot_onDatabaseLoaded','ARRAYEVAL','ShowMarkerBorder','mainSprite','addLoadListener','updateTpbIdleTimeCTB','ctbTicksToGoal','EnemyBattlerIcon','map','enemy','clearRect','time','Weapon-%1-%2','_phase','42NNJcIV','Window_StatusBase_placeGauge','getCtbCastTimeRate','format','members','_inputting','createBorderSprite','exit','_graphicHue','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20keyType\x20=\x20\x27%2\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20position\x20=\x20target.getCurrentTurnOrderPositionCTB();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20order\x20=\x20position;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20NaN\x20Check\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(isNaN(order)){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27NaN\x20rate\x20created\x20by\x20%2\x27.format(\x27\x27,obj.name));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27Restoring\x20rate\x20to\x20%2\x27.format(\x27\x27,originalValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20order\x20=\x20position;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Value\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20order;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','updateLetter','battlerHue','changeEnemyGraphicBitmap','BattleManager_updateTpbInput','onBattleStart','CtbTurnOrderEnemyFace','_homeX','Game_Battler_tpbBaseSpeed','_position','floor','height','addChild','isAttack','TpbBaseSpeedCalcJS','process_VisuMZ_BattleSystemCTB_JS_Notetags','startActorInput','CTB','updateAllTpbBattlersCTB','_backgroundSprite','rotateCTBSprite','_ctbTurnOrderWindow','updateBattleContainerOrder','ceil','TurnOrderCTBGraphicFaceIndex','tpbAcceleration','Enemy','CtbTurnOrderActorIcon','_isAppeared','applyCTBPenalty','bottom','_graphicIconIndex'];_0x4f08=function(){return _0x5c1ae5;};return _0x4f08();}Window_CTB_TurnOrder[_0x34aa07(0x21a)]=Object['create'](Window_Base[_0x34aa07(0x21a)]),Window_CTB_TurnOrder['prototype'][_0x34aa07(0xec)]=Window_CTB_TurnOrder,Window_CTB_TurnOrder[_0x34aa07(0x242)]=VisuMZ[_0x34aa07(0x209)][_0x34aa07(0x242)][_0x34aa07(0x237)],Window_CTB_TurnOrder[_0x34aa07(0x21a)][_0x34aa07(0x1e2)]=function(){const _0x1945c4=_0x34aa07,_0x3a8ec9=this['windowRect']();this[_0x1945c4(0x18b)]=_0x3a8ec9['x'],this[_0x1945c4(0xe2)]=_0x3a8ec9['y'],Window_Base[_0x1945c4(0x21a)][_0x1945c4(0x1e2)]['call'](this,_0x3a8ec9),this[_0x1945c4(0xd8)](),this[_0x1945c4(0x239)](),this[_0x1945c4(0x233)]=0x0;},Window_CTB_TurnOrder['prototype'][_0x34aa07(0x23d)]=function(){const _0x23c103=_0x34aa07,_0x6a3ebb=Window_CTB_TurnOrder['Settings'],_0x9424c1=SceneManager[_0x23c103(0xf1)][_0x23c103(0xf4)]['height'],_0x586eb3=SceneManager[_0x23c103(0xf1)][_0x23c103(0x1c7)][_0x23c103(0x18f)],_0x477531=_0x6a3ebb['SubjectDistance'];let _0x242165=0x0,_0x3cb53a=0x0,_0x3bafdd=0x0,_0x1d6dd0=0x0;switch(_0x6a3ebb[_0x23c103(0x202)]){case _0x23c103(0xc1):_0x242165=_0x6a3ebb[_0x23c103(0x1c8)]*_0x6a3ebb[_0x23c103(0x1f7)]+_0x477531,_0x3cb53a=_0x6a3ebb['SpriteLength'],_0x3bafdd=Math[_0x23c103(0x19b)]((Graphics[_0x23c103(0x249)]-_0x242165)/0x2),_0x1d6dd0=_0x6a3ebb['ScreenBuffer'];break;case'bottom':_0x242165=_0x6a3ebb[_0x23c103(0x1c8)]*_0x6a3ebb['TotalHorzSprites']+_0x477531,_0x3cb53a=_0x6a3ebb[_0x23c103(0x168)],_0x3bafdd=Math['ceil']((Graphics[_0x23c103(0x249)]-_0x242165)/0x2),_0x1d6dd0=Graphics[_0x23c103(0x18f)]-_0x9424c1-_0x3cb53a-_0x6a3ebb[_0x23c103(0xea)];break;case _0x23c103(0x11e):_0x242165=_0x6a3ebb['SpriteLength'],_0x3cb53a=_0x6a3ebb[_0x23c103(0x1c8)]*_0x6a3ebb[_0x23c103(0x1df)]+_0x477531,_0x3bafdd=_0x6a3ebb['ScreenBuffer'],_0x1d6dd0=Math[_0x23c103(0x19b)]((Graphics[_0x23c103(0x18f)]-_0x9424c1+_0x586eb3-_0x3cb53a)/0x2);break;case _0x23c103(0x12f):_0x242165=_0x6a3ebb[_0x23c103(0x168)],_0x3cb53a=_0x6a3ebb[_0x23c103(0x1c8)]*_0x6a3ebb[_0x23c103(0x1df)]+_0x477531,_0x3bafdd=Graphics[_0x23c103(0x249)]-_0x242165-_0x6a3ebb[_0x23c103(0xea)],_0x1d6dd0=Math[_0x23c103(0x19b)]((Graphics[_0x23c103(0x18f)]-_0x9424c1+_0x586eb3-_0x3cb53a)/0x2);break;}return _0x3bafdd+=_0x6a3ebb[_0x23c103(0x103)],_0x1d6dd0+=_0x6a3ebb['DisplayOffsetY'],new Rectangle(_0x3bafdd,_0x1d6dd0,_0x242165,_0x3cb53a);},Window_CTB_TurnOrder['prototype']['updatePadding']=function(){this['padding']=0x0;},Window_CTB_TurnOrder['prototype'][_0x34aa07(0x10e)]=function(){const _0x4cc4cd=_0x34aa07,_0xdff23e=Window_CTB_TurnOrder[_0x4cc4cd(0x242)],_0x5d2b99=['top','bottom'][_0x4cc4cd(0xd6)](_0xdff23e[_0x4cc4cd(0x202)]);return _0x5d2b99;},Window_CTB_TurnOrder[_0x34aa07(0x21a)][_0x34aa07(0xd8)]=function(){const _0x45a306=_0x34aa07,_0x3c4ed4=Window_CTB_TurnOrder[_0x45a306(0x242)],_0x1c3ea0=this[_0x45a306(0x10e)](),_0xba6b05=_0x1c3ea0?_0x3c4ed4[_0x45a306(0x1f7)]:_0x3c4ed4['TotalVertSprites'];this[_0x45a306(0x16a)]=new Sprite(),this['addInnerChild'](this[_0x45a306(0x16a)]),this[_0x45a306(0xf6)]=[];for(let _0x123911=0x0;_0x123911<$gameParty[_0x45a306(0x23e)]();_0x123911++){for(let _0x415023=0x0;_0x415023<_0xba6b05;_0x415023++){const _0x101c41=new Sprite_CTB_TurnOrder_Battler($gameParty,_0x123911,_0x415023);this['_turnOrderInnerSprite'][_0x45a306(0x190)](_0x101c41),this[_0x45a306(0xf6)][_0x45a306(0x14a)](_0x101c41);}}for(let _0x36830f=0x0;_0x36830f<$gameTroop['members']()[_0x45a306(0xc5)];_0x36830f++){for(let _0x19c4de=0x0;_0x19c4de<_0xba6b05;_0x19c4de++){const _0x11f745=new Sprite_CTB_TurnOrder_Battler($gameTroop,_0x36830f,_0x19c4de);this[_0x45a306(0x16a)][_0x45a306(0x190)](_0x11f745),this[_0x45a306(0xf6)][_0x45a306(0x14a)](_0x11f745);}}},Window_CTB_TurnOrder[_0x34aa07(0x21a)][_0x34aa07(0xd9)]=function(){const _0x1459ea=_0x34aa07;Window_Base[_0x1459ea(0x21a)][_0x1459ea(0xd9)][_0x1459ea(0x1cb)](this),this['updatePosition'](),this['updateVisibility']();},Window_CTB_TurnOrder[_0x34aa07(0x21a)]['updatePosition']=function(){const _0x2821dd=_0x34aa07,_0x2c8091=Window_CTB_TurnOrder[_0x2821dd(0x242)];if(_0x2c8091[_0x2821dd(0x202)]!==_0x2821dd(0xc1))return;if(!_0x2c8091[_0x2821dd(0x263)])return;const _0x25f1c2=SceneManager[_0x2821dd(0xf1)][_0x2821dd(0x1c7)];if(!_0x25f1c2)return;_0x25f1c2['visible']?(this['x']=this[_0x2821dd(0x18b)]+(_0x2c8091[_0x2821dd(0x1db)]||0x0),this['y']=this[_0x2821dd(0xe2)]+(_0x2c8091['RepositionTopHelpY']||0x0)):(this['x']=this[_0x2821dd(0x18b)],this['y']=this[_0x2821dd(0xe2)]);const _0x3b30d5=SceneManager[_0x2821dd(0xf1)][_0x2821dd(0x160)];Window_CTB_TurnOrder[_0x2821dd(0xfe)]===undefined&&(Window_CTB_TurnOrder['_ogWindowLayerX']=Math[_0x2821dd(0xde)]((Graphics[_0x2821dd(0x249)]-Math[_0x2821dd(0x229)](Graphics['boxWidth'],_0x3b30d5[_0x2821dd(0x249)]))/0x2),Window_CTB_TurnOrder[_0x2821dd(0x207)]=Math[_0x2821dd(0xde)]((Graphics[_0x2821dd(0x18f)]-Math[_0x2821dd(0x229)](Graphics[_0x2821dd(0x250)],_0x3b30d5[_0x2821dd(0x18f)]))/0x2)),this['x']+=_0x3b30d5['x']-Window_CTB_TurnOrder['_ogWindowLayerX'],this['y']+=_0x3b30d5['y']-Window_CTB_TurnOrder[_0x2821dd(0x207)];},Window_CTB_TurnOrder[_0x34aa07(0x21a)][_0x34aa07(0x19a)]=function(){const _0x4f411c=_0x34aa07;if(!this[_0x4f411c(0x16a)])return;const _0x26c6db=this[_0x4f411c(0x16a)]['children'];if(!_0x26c6db)return;_0x26c6db[_0x4f411c(0x142)](this[_0x4f411c(0xcb)][_0x4f411c(0x220)](this));},Window_CTB_TurnOrder[_0x34aa07(0x21a)][_0x34aa07(0xcb)]=function(_0x29e3bf,_0x5049ec){const _0x4376c6=_0x34aa07,_0x54b86d=this[_0x4376c6(0x10e)](),_0x4aeda5=Window_CTB_TurnOrder['Settings'][_0x4376c6(0x12d)];if(_0x54b86d&&!_0x4aeda5)return _0x29e3bf['x']-_0x5049ec['x'];else{if(_0x54b86d&&_0x4aeda5)return _0x5049ec['x']-_0x29e3bf['x'];else{if(!_0x54b86d&&_0x4aeda5)return _0x29e3bf['y']-_0x5049ec['y'];else{if(!_0x54b86d&&!_0x4aeda5)return _0x5049ec['y']-_0x29e3bf['y'];}}}},Window_CTB_TurnOrder[_0x34aa07(0x21a)][_0x34aa07(0x239)]=function(){const _0x1ebcd3=_0x34aa07;this[_0x1ebcd3(0x238)]=$gameSystem['isBattleSystemCTBTurnOrderVisible']();},Window_CTB_TurnOrder[_0x34aa07(0x21a)][_0x34aa07(0x1da)]=function(_0x1e5fe1){const _0x19756c=_0x34aa07;this[_0x19756c(0x19a)](),this[_0x19756c(0xf6)][_0x19756c(0x142)]((_0xdf68d2,_0x3cc7e1)=>{const _0x16d585=_0x19756c;return _0xdf68d2[_0x16d585(0x1ec)]()-_0x3cc7e1['ticksLeft']();});![]&&console['log'](this[_0x19756c(0xf6)][_0x19756c(0x12e)](_0x4449fd=>_0x4449fd[_0x19756c(0x269)]())['map'](_0x19d117=>_0x19d117['battler']()[_0x19756c(0x1b0)]()+':\x20'+_0x19d117[_0x19756c(0x1ec)]()));if(!_0x1e5fe1)return;for(const _0x20cdfd of this[_0x19756c(0xf6)]){if(!_0x20cdfd)continue;_0x20cdfd['update'](),_0x20cdfd[_0x19756c(0x1bf)]=0x0;}},VisuMZ['BattleSystemCTB'][_0x34aa07(0x169)]=Scene_Battle[_0x34aa07(0x21a)]['selectNextCommand'],Scene_Battle[_0x34aa07(0x21a)][_0x34aa07(0x1a9)]=function(){const _0x1aeeca=_0x34aa07;VisuMZ[_0x1aeeca(0x209)]['Scene_Battle_selectNextCommand']['call'](this),BattleManager[_0x1aeeca(0x232)]();},Window_CTB_TurnOrder[_0x34aa07(0x21a)][_0x34aa07(0x198)]=function(_0x188234){const _0x54e071=_0x34aa07;for(const _0x2fa3bf of this[_0x54e071(0xf6)]){if(!_0x2fa3bf)continue;if(_0x2fa3bf[_0x54e071(0x269)]()!==_0x188234)continue;_0x2fa3bf[_0x54e071(0x158)]();}};