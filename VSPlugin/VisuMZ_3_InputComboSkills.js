//=============================================================================
// VisuStella MZ - Input Combo Skills
// VisuMZ_3_InputComboSkills.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_InputComboSkills = true;

var VisuMZ = VisuMZ || {};
VisuMZ.InputComboSkills = VisuMZ.InputComboSkills || {};
VisuMZ.InputComboSkills.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.05] [InputComboSkills]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Input_Combo_Skills_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * When an Input Combo Skill is activated by an actor, a the potential input
 * attacks appears on the screen. The player then presses the various buttons
 * listed and attacks will occur in a combo fashion. If a particular attack
 * combination is met, a special attack will occur.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Register up to 9 different input skills per skill, each bound to specific
 *   keyboard button inputs.
 * * Touch screen users are able to activate input combo skills by simply
 *   tapping on the listed chain skill on the screen.
 * * Tooltips will display the skill's help description when hovering over the
 *   on-screen buttons.
 * * If a specific combination of button inputs are made, special combination
 *   skills will be added onto the combo queue.
 * * Special combo skills are separated into three different types: available,
 *   learned, and forced.
 * * Some skills can be set up to be input combo only, meaning they can only
 *   ever be accessed via Input Combo Skills.
 * * Confirmation sound effects can be utilized to provide proper feedback to
 *   the player when chaining.
 * * Switches can be used to determine if there are still skills left in the
 *   queue to combo with.
 * * Custom images can be used to add more personal flare to the combo UI.
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
 * * VisuMZ_1_BattleCore
 * * VisuMZ_1_SkillsStatesCore
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
 * Forced Actions
 * 
 * Input Combo Skills rely on Forced Actions to queue their next attacks after
 * the completion of their current skill in effect.
 * 
 * Therefore, if you make any effects through Custom Action Sequences of Common
 * Events that run after a skill takes place to run a different Forced Action,
 * then there will be conflict and the Input Combo Skills won't work properly.
 * 
 * Keep this in mind when using this plugin with Battle Systems like ATB, CTB,
 * or OTB where forced actions have unique properties. Look at the
 * "VisuStella MZ Compatibility" section below.
 *
 * ---
 *
 * Paid Up Front
 * 
 * The skills that you can input have requirements in the form of skill costs.
 * Other things like skill cooldowns also matter. However, upon selecting these
 * skills, the cost is paid up front even before they take effect.
 * 
 * What this means is that if you combo into a skill that would somehow reduce
 * the MP cost of all of the actor's skills, that wouldn't matter because the
 * costs of these skills still have to be paid up front. Now, the MP cost
 * reduction would take effect on a subsequent Input Combo Skill sequence, but
 * it will not take effect during the current one.
 * 
 * Because it's paid up front, any input skills found in the queue no longer
 * have to pay their costs when it becomes time to use that skill.
 * 
 * Special combinations are also exempt from costs as the cost is the input of
 * the combination itself.
 *
 * ---
 *
 * Input Needs Finishing
 * 
 * When the Input Combo Skill sequence starts up, it needs to finish before
 * going forward. Unlike the Yanfly Engine Ace version where it occurs
 * simultaneously, this version waits until the inputs are done to avoid any
 * potential conflicts.
 * 
 * If there are no Input Combo Skills that can be used, then the input sequence
 * will end prematurely.
 *
 * ---
 * 
 * Input Queue Switch
 * 
 * There is a switch that automatically turns ONE whenever there are at least
 * one input combo skill in queue and OFF when there are none. This can be used
 * for a variety of ways.
 * 
 * Read the "Plugin Parameters: General Settings" section for more information
 * on this important feature.
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
 * VisuMZ_1_MessageCore
 * 
 * If you are using the VisuStella MZ plugin library's Message Core plugin,
 * the UI Tooltip Plugin Parameters will be enabled and tooltips can be used
 * and will be visible when hovering the mouse cursor over the UI buttons.
 * The tooltip window will display the skill's description.
 * 
 * ---
 * 
 * VisuMZ_2_BattleSystemATB
 * 
 * VisuMZ_2_BattleSystemCTB
 * 
 * Due to how TPB works, forced actions will return the target battler back to
 * its current speed before usage. When used with Active Chain Skills, make
 * sure you use the ATB plugin's <ATB After Gauge: x%> and CTB plugin's
 * <CTB After Speed: x%> notetags to properly enforce TPB progress resets.
 * 
 * ---
 * 
 * VisuMZ_2_BattleSystemBTB
 * 
 * Due to how BTB focuses on queuing actions, this plugin heavily conflicts
 * with it and therefore, Input Combo Skills cannot be used with the BTB
 * battle system.
 * 
 * We recommend that you use another battle system with VisuStella MZ's Boost
 * Action plugin to produce similar results.
 * 
 * ---
 * 
 * VisuMZ_2_BattleSystemOTB
 * 
 * OTB handles forced actions slightly differently. It adds additional actions
 * towards the front of the action order list. Therefore, you'll see the
 * additions made and added towards the front instead. The forced action will
 * still take place and there are no additional measures needed to be done,
 * but this is a visual effect that may be noticeable to some.
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
 * === Input Combo Origin-Related Notetags ===
 * 
 * ---
 * 
 * <Combo Skill key: id>
 * <Combo Skill key: name>
 *
 * - Used for: Skill Notetags
 * - Declares this skill as an Input Combo origin skill. This notetag sets
 *   an input skill to the specific 'key' when pressed.
 *   - The input skills do not need to be learned or available through traits
 *     in order to be used.
 * - Replace 'key' with a string representing the key trigger you wish to bind
 *   this chain skill with.
 *   - 'down', 'left', 'right', 'up'
 *   - You can substitute the above for the NumPad values: 'down' with '2',
 *     'left' with '4', 'right' with '6', and 'up' with '8'
 *   - 'ok', 'cancel', 'pageup', 'pagedown', 'shift'
 *   - You can substitute the above for the Keyboard inputs: 'ok' with 'z',
 *     'cancel' with 'x', 'pageup' with 'q', 'pagedown' with 'w', and
 *     'shift' for 's'
 *   - Do not include the quotes.
 * - For 'id' variant: replace 'id' with the ID of the skill to combo using
 *   the marked key.
 * - For 'name' variant: replace 'name' with the name of the skill to combo
 *   using the marked key.
 * - Insert multiple copies of this notetag to bind different keys.
 * 
 * Examples:
 * 
 *   <Combo Skill Down: Leg Sweep>
 *   <Combo Skill Left: 107>
 *   <Input Combo Skill Right: Hook Punch>
 *   <Input Combo Skill Up: 123>
 *
 * ---
 * 
 * <Combo Max: x>
 * 
 * <Input Combo Max: x>
 * 
 * - Used for: Skill Notetags
 * - Sets a maximum combo count that this Input Combo origin skill can have.
 * - There are no differences between the two <Combo Max: x> and
 *   <Input Combo Max: x> notetags, it's a matter of preference of which you
 *   want to use.
 * - Replace 'x' with a number representing the max combo inputs you want to
 *   allow the player to input.
 * - If this notetag is not used, the combo max will default to the value found
 *   in the Plugin Parameters.
 * - The max combo will NOT include any special skills added through a specific
 *   sequence string, meaning that a special skill from a combo sequence can
 *   go past the designated combo max.
 * 
 * ---
 *
 * <Combo Start Animation: x>
 * 
 * <Input Combo Start Animation: x>
 *
 * - Used for: Skill Notetags
 * - Changes the animation played when initiating the Input Combo origin skill.
 * - Replace 'x' with a number representing the ID of the animation to play.
 * - If this notetag is not used, play the animation found in the
 *   Plugin Parameters instead.
 *
 * ---
 *
 * <Combo Special sequence: id>
 * <Combo Special sequence: name>
 * 
 * <Available Combo Special sequence: id>
 * <Available Combo Special sequence: name>
 *
 * - Used for: Skill Notetags
 * - If the player inputs a matching 'sequence', this Input Combo origin skill
 *   will add the target skill to the combo queue. This variant requires the
 *   actor to either have learned the target skill or have it temporarily
 *   accessible through traits.
 * - There are no differences between the <Combo Special sequence: id> and the
 *   <Available Combo Special sequence: id> notetags, it's a matter of
 *   preference of which you want to use.
 * - Replace 'sequence' with any of the below:
 *   - '2' for 'down'
 *   - '4' for 'left'
 *   - '6' for 'right'
 *   - '8' for 'up'
 *   - 'Z' for 'ok'
 *   - 'X' for 'cancel'
 *   - 'Q' for 'pageup'
 *   - 'W' for 'pagedown'
 *   - 'S' for 'shift'
 * - Insert multiple copies of this notetag to add more special combos.
 * 
 * Examples:
 * 
 *   <Combo Special 226Z: Hadoken>
 *   <Combo Special 4268: 360>
 *   <Available Combo Special QWQWQ: Dempsey Roll>
 *   <Available Combo Special ZXSQW: 123>
 *
 * ---
 *
 * <Learned Combo Special sequence: id>
 * <Learned Combo Special sequence: name>
 * 
 * <Known Combo Special sequence: id>
 * <Known Combo Special sequence: name>
 *
 * - Used for: Skill Notetags
 * - If the player inputs a matching 'sequence', this Input Combo origin skill
 *   will add the target skill to the combo queue. This variant requires the
 *   actor to have learned in order to special combo into it regardless of
 *   whether or not the actor has temporary trait access.
 * - There are no differences between the <Learned Combo Special sequence: id>
 *   and the <Known Combo Special sequence: id> notetags, it's a matter of
 *   preference of which you want to use.
 * - Replace 'sequence' with any of the below:
 *   - '2' for 'down'
 *   - '4' for 'left'
 *   - '6' for 'right'
 *   - '8' for 'up'
 *   - 'Z' for 'ok'
 *   - 'X' for 'cancel'
 *   - 'Q' for 'pageup'
 *   - 'W' for 'pagedown'
 *   - 'S' for 'shift'
 * - Insert multiple copies of this notetag to add more special combos.
 * 
 * Examples:
 * 
 *   <Learned Combo Special 226Z: Hadoken>
 *   <Learned Combo Special 4268: 360>
 *   <Known Combo Special QWQWQ: Dempsey Roll>
 *   <Known Combo Special ZXSQW: 123>
 *
 * ---
 *
 * <Always Combo Special sequence: id>
 * <Always Combo Special sequence: name>
 * 
 * <Forced Combo Special sequence: id>
 * <Forced Combo Special sequence: name>
 *
 * - Used for: Skill Notetags
 * - If the player inputs a matching 'sequence', this Input Combo origin skill
 *   will add the target skill to the combo queue. This variant will always
 *   allow the target skill to be used as a special combo skill.
 * - There are no differences between the <Always Combo Special sequence: id>
 *   and the <Forced Combo Special sequence: id> notetags, it's a matter of
 *   preference of which you want to use.
 * - Replace 'sequence' with any of the below:
 *   - '2' for 'down'
 *   - '4' for 'left'
 *   - '6' for 'right'
 *   - '8' for 'up'
 *   - 'Z' for 'ok'
 *   - 'X' for 'cancel'
 *   - 'Q' for 'pageup'
 *   - 'W' for 'pagedown'
 *   - 'S' for 'shift'
 * - Insert multiple copies of this notetag to add more special combos.
 * 
 * Examples:
 * 
 *   <Always Combo Special 226Z: Hadoken>
 *   <Always Combo Special 4268: 360>
 *   <Forced Combo Special QWQWQ: Dempsey Roll>
 *   <Forced Combo Special ZXSQW: 123>
 *
 * ---
 * 
 * === Input Combo Special Skill-Related Notetags ===
 * 
 * ---
 *
 * <Combo Only>
 * 
 * <Input Combo Only>
 *
 * - Used for: Skill Notetags
 * - Causes this skill to only become usable during an Input Combo sequence as
 *   a special combination skill.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings for this plugin.
 *
 * ---
 *
 * General
 * 
 *   Default Max Combo:
 *   - What is the default max combo when the <Input Combo Max: x> notetag
 *     isn't used?
 * 
 *   Input Queue Switch:
 *   - What switch is turned on/off to detect if Input Combo Skills has a
 *     skill queued up?
 *   - Leave empty to not use.
 * 
 *   Reduce Back & Forth?:
 *   - Reduce unnecessary back and forth motions inbetween Input Combo Skills?
 *   - This is to prevent your actor from stepping forward, performing a skill,
 *     then stepping back, then stepping forward, perform a skill, etc.
 *   - This will nullify any command that uses the stepForward and stepBackward
 *     functions until cleared.
 *
 * ---
 * 
 * ==== Uses for the Input Queue Switch ====
 * 
 * ---
 * 
 * 1. Speed Up Input Combos
 * 
 * If left to its own devices, the default Action Sequences for Input Combo
 * Skill queues may be a bit slow for some. By having the switch determining if
 * there is another skill queued afterwards, you can speed up the Action
 * Sequence by removing some of the wait times.
 * 
 * ---
 * 
 * 2. Tracking Combo Length
 * 
 * Another thing that you can stuff into a Common Event and put right before
 * the end of an Action Sequence involving Input Combo Skills is a variable
 * tracking the number of times the player has combo'd in a row with this actor
 * nonstop without breaking it.
 * 
 *   ◆If：Input Queue Switch is ON
 *     ◆Control Variables：#XXXX Chain Counter Variable += 1
 *     ◆
 *   ：Else
 *     ◆Control Variables：#XXXX Chain Counter Variable = 0
 *     ◆
 *   ：End
 * 
 * When the Input Queue Switch is set to be ON, then the variable's value
 * will go up by one. Otherwise, it will reset to 0. Since this is done at the
 * end of an Action Sequence, it will also properly reset when there is nothing
 * left to chain.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * These are the sound effects used for inputs and special combinations for
 * this plugin.
 *
 * ---
 *
 * Input Sound
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
 * Special Sound
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
 * Plugin Parameters: On-Screen UI Visuals Settings
 * ============================================================================
 *
 * Determine where and how the UI visuals look while performing Input
 * Combo Skills.
 *
 * ---
 *
 * General
 * 
 *   Custom BG Image:
 *   - Do you want to use a custom background image?
 *   - Located in /img/system/ folder.
 *   - Covers whole screen.
 * 
 *   Icon Smoothing?:
 *   - Smooth the display for icons?
 *   - Or pixelate them?
 * 
 *   Input Combo Text:
 *   - What text do you want displayed when starting an Input Combo sequence?
 * 
 *     Sequence Animation:
 *     - What animation should be played when starting the Input
 *       Combo sequence?
 * 
 *   Disabled Opacity:
 *   - What is the opacity level for disabled UI elements?
 * 
 *   Opacity Rate:
 *   - Fade in/out the background at what opacity rate?
 *   - Lower is slower. Higher is faster.
 * 
 *   Scale:
 *   - What is the scale of UI buttons?
 *   - 0.50 = 50%; 1.00 = 100%; 1.50 = 150%;
 * 
 *   JS: Draw Skill Data:
 *   - Code used to draw the skill data layer while Input Combo Skill inputs
 *     are active.
 * 
 *   JS: Draw Background:
 *   - Code used to draw the background layer while Input Combo Skill inputs
 *     are active.
 *
 * ---
 *
 * Queue List UI
 * 
 *   Custom BG Image:
 *   - Use a custom background image for Queue UI?
 *   - Located in /img/system/ folder.
 * 
 *   Visibility Frames:
 *   - How long does the Queue List stay visible for after the player
 *     finishes input?
 *   - 60 frames = 1 second.
 * 
 *   JS: Draw Content:
 *   - Code used to draw the list data while inputting skills.
 * 
 *     Draw Back Rectangle?:
 *     - Draw a rectangle in the back to make the contents easier to read?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this list UI element.
 *
 * ---
 *
 * Key Binds > Offsets
 * 
 *   Key Bind Offset X:
 *   - Offset the x coordinate all of key bind buttons.
 *   - Negative: left. Positive: right.
 * 
 *   Key Bind Offset Y:
 *   - Offset the y coordinate all of key bind buttons.
 *   - Negative: up. Positive: down.
 *
 * ---
 *
 * Key Bind > Down, Left, Right, Up
 * 
 * Key Bind > Ok, Cancel, PageUp, PageDown, Shift
 * 
 *   Key Icon:
 *   - What is the icon used to mark this key bind?
 *   - Takes priority over Core Engine's Button Assist.
 * 
 *   Custom BG Image:
 *   - Do you want to use a custom background image?
 *   - Located in /img/system/ folder.
 *   - Ignores scaling.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this button.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: UI Tooltip Settings
 * ============================================================================
 *
 * Settings for the Input Combo Skills Tooltips Window.
 * Requires VisuMZ_1_MessageCore!
 *
 * ---
 *
 * Settings
 * 
 *   Enabled?:
 *   - Are tooltips enabled?
 *   - Requires VisuMZ_1_MessageCore!
 *
 * ---
 *
 * Appearance
 * 
 *   Scale:
 *   - What scale size do you want for the tooltip?
 *   - Use 1.0 for normal size.
 * 
 *   Skin Filename:
 *   - What window skin do you want to use for the tooltip?
 * 
 *   Skin Opacity:
 *   - What opacity setting is used for the tooltip?
 *   - Use a number between 0 and 255.
 *
 * ---
 *
 * Offset
 * 
 *   Offset X:
 *   - Offset the tooltip X position from the mouse?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offset the tooltip Y position from the mouse?
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
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.05: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a bug where the Input Combo Queue Switch was turning off earlier
 *    than normal.
 * 
 * Version 1.04: July 13, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.03: June 15, 2023
 * * Bug Fixes!
 * ** Fixed an incompatibility with the Options Core battle animation speeds
 *    causing input timing to also become faster. Fix made by Irina.
 * 
 * Version 1.02: March 16, 2023
 * * Bug Fixes!
 * ** Input Queue Switch previously did not register usage with certain types
 *    of commands. It should now be working properly. Fix made by Irina.
 * * Feature Update!
 * ** Default Plugin Parameters are changed to have the queue list window be
 *    larger and have a minimum width of 360. This is so that at default
 *    816x624 resolution, there will be no icon cut offs. Update made by Irina.
 * 
 * Version 1.01: July 28, 2022
 * * Bug Fixes!
 * ** Users without the VisuMZ Message Core will no longer get tooltip error
 *    messages when starting battle. Fix made by Irina.
 * 
 * Version 1.00 Official Release Date: September 7, 2022
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
 * @param InputComboSkills
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param DefaultMaxCombo:num
 * @text Default Max Combo
 * @type number
 * @min 1
 * @desc What is the default max combo when the
 * <Input Combo Max: x> notetag isn't used?
 * @default 5
 *
 * @param QueueSwitchID:num
 * @text Input Queue Switch
 * @type switch
 * @desc What switch is turned on/off to detect if Input Combo
 * Skills has a skill queued up?
 * @default 0
 *
 * @param ReduceBackForth:eval
 * @text Reduce Back & Forth?
 * @type boolean
 * @on Reduce
 * @off Allow
 * @desc Reduce unnecessary back and forth motions inbetween
 * Input Combo Skills?
 * @default true
 *
 * @param Sound:struct
 * @text Sound Settings
 * @type struct<Sound>
 * @desc These are the sound effects used for inputs and special combinations for this plugin.
 * @default {"Input":"","inputName:str":"Skill2","inputVolume:num":"90","inputPitch:num":"100","inputPan:num":"0","Special":"","specialName:str":"Skill3","specialVolume:num":"90","specialPitch:num":"100","specialPan:num":"0"}
 *
 * @param UI:struct
 * @text On-Screen UI Visuals
 * @type struct<UI>
 * @desc Determine where and how the UI visuals look while performing Input Combo Skills.
 * @default {"General":"","BackgroundImage:str":"","LargeIconSmoothing:eval":"false","InputComboText:str":"Input Combo Sequence","InputComboAnimation:num":"49","OpacityDisable:num":"128","OpacityRate:num":"16","Scale:num":"0.50","contentDrawJS:func":"\"// Declare Constants\\nconst skill = arguments[0];\\nconst keyIcon = arguments[1];\\nconst costText = arguments[2];\\nconst bitmap = this.contents;\\nconst lineHeight = this.lineHeight();\\nconst iconIndex = skill.iconIndex;\\nconst iconSize = ImageManager.iconWidth * 2;\\n\\n// Draw Large Icon\\nconst hx = Math.ceil(bitmap.width / 2);\\nthis.drawInputComboLargeIcon(iconIndex, hx, 0, iconSize);\\n\\n// Draw Keybind Icon\\nconst kx = hx - iconSize;\\nthis.drawInputComboLargeIcon(keyIcon, kx, 0, iconSize);\\n\\n// Draw Rounded Rectangle\\nconst rx = 0;\\nconst ry = Math.round(iconSize + lineHeight * 0.25);\\nconst rw = bitmap.width;\\nconst rh = Math.round(lineHeight * 1.75);\\nconst radius = 20;\\nconst rcolor = ColorManager.dimColor1();\\nbitmap.fillRoundRect(rx, ry, rw, rh, radius, rcolor);\\n\\n// Draw Skill Name\\nconst name = skill.name;\\nconst ny = ry + ((costText.length > 0) ? 0 : Math.floor((rh - lineHeight) / 2));\\nthis.drawText(name, 0, ny, bitmap.width, 'center');\\n\\n// Draw Cost Text\\nconst cw = this.textSizeEx(costText).width;\\nconst cx = Math.floor((bitmap.width - cw) / 2);\\nconst cy = ry + Math.ceil(lineHeight * 0.75);\\nthis.drawTextEx(costText, cx, cy);\"","backgroundDrawJS:func":"\"// Declare Constants\\nconst bitmap = this;\\nconst width = bitmap.width;\\nconst height = Math.ceil(bitmap.height / 2);\\nconst x = 0;\\nconst y = bitmap.height - height;\\nconst color1 = ColorManager.dimColor1();\\nconst color2 = ColorManager.dimColor2();\\n\\n// Draw Gradient Background\\nconst vert = true;\\nbitmap.gradientFillRect(x, y, width, height, color2, color1, vert);\"","QueueUI":"","queueBackgroundImage:str":"","queueVisibilityFrames:num":"90","queueDrawJS:func":"\"// Declare Constants\\nconst skillList = arguments[0];\\nconst specialSkill = arguments[1];\\nconst maxCombo = arguments[2];\\nconst drawBackRect = arguments[3];\\nconst bitmap = this.contents;\\nconst lineHeight = this.lineHeight();\\nconst iconSize = ImageManager.iconWidth * 2;\\n\\n// Draw Background Rect\\nif (drawBackRect) {\\n    const radius = 20;\\n    const bgColor = ColorManager.dimColor1();\\n    bitmap.fillRoundRect(0, 0, bitmap.width, bitmap.height, radius, bgColor);\\n}\\n\\n// Draw Skill List\\nconst iw = maxCombo * iconSize;\\nconst ih = iconSize;\\nconst ix = Math.floor((bitmap.width - iw) / 2);\\nconst iy = Math.floor(lineHeight / 4);\\nlet dx = Math.floor(iconSize / 2);\\nfor (const skill of skillList) {\\n    const iconIndex = skill.iconIndex;\\n    this.drawInputComboLargeIcon(iconIndex, ix + dx, iy, iconSize);\\n    dx += iconSize;\\n}\\n\\n// Draw Special Skill\\nif (specialSkill) {\\n    const text = '\\\\\\\\I[%1]%2'.format(specialSkill.iconIndex, specialSkill.name);\\n    const textWidth = this.textSizeEx(text).width;\\n    const tx = Math.floor((bitmap.width - textWidth) / 2);\\n    const ty = iy + ih + Math.floor(lineHeight / 2);\\n    this.drawTextEx(text, tx, ty);\\n}\"","queueDrawBackRect:eval":"true","queueListRectJS:func":"\"// Declare Constants\\nconst iconHeight = ImageManager.iconHeight;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst padding = $gameSystem.windowPadding();\\n\\n// Calculate Dimensions\\nconst x = Math.round(Graphics.width / 2);\\nconst y = Math.round(Graphics.height / 2);\\nconst w = Math.max(Math.round(Graphics.width / 3), 360);\\nconst h = (iconHeight + lineHeight + padding) * 2;\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, w, h);\"","Keybinds":"","KeybindOffsets":"","KeybindUiOffsetX:num":"+0","KeybindUiOffsetY:num":"+0","KeybindPressed":"","KeypressUiOffsetX:num":"-4","KeypressUiOffsetY:num":"+4","Down":"","downKeyIcon:num":"0","downBackgroundImage:str":"","downRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Graphics.width - 48 - Math.floor(uiWidth / 2);\\nconst y = Math.floor(Graphics.height * 3 / 4) + Math.ceil(h / 2) + spacing;\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","Left":"","leftKeyIcon:num":"0","leftBackgroundImage:str":"","leftRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst h = lines * Window_Base.prototype.lineHeight();\\nconst x = Graphics.width - 48 - Math.floor(uiWidth / 2) - w - spacing;\\nconst y = Math.floor(Graphics.height * 3 / 4);\\n\\n// Return Rectangle\\nconst rectWidth = Math.max(192, w);\\nreturn new Rectangle(x, y, rectWidth, h);\"","Right":"","rightKeyIcon:num":"0","rightBackgroundImage:str":"","rightRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst h = lines * Window_Base.prototype.lineHeight();\\nconst x = Graphics.width - 48 - Math.floor(uiWidth / 2) + w + spacing;\\nconst y = Math.floor(Graphics.height * 3 / 4);\\n\\n// Return Rectangle\\nconst rectWidth = Math.max(192, w);\\nreturn new Rectangle(x, y, rectWidth, h);\"","Up":"","upKeyIcon:num":"0","upBackgroundImage:str":"","upRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Graphics.width - 48 - Math.floor(uiWidth / 2);\\nconst y = Math.floor(Graphics.height * 3 / 4) - Math.ceil(h / 2) - spacing;\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","Ok":"","okKeyIcon:num":"0","okBackgroundImage:str":"","okRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Math.floor(uiWidth / 2) + 48;\\nconst y = Math.floor(Graphics.height * 3 / 4);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","Cancel":"","cancelKeyIcon:num":"0","cancelBackgroundImage:str":"","cancelRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Math.floor(uiWidth / 2) + 48 + w + spacing;\\nconst y = Math.floor(Graphics.height * 3 / 4);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","PageUp":"","pageupKeyIcon:num":"0","pageupBackgroundImage:str":"","pageupRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Math.floor(uiWidth / 2) + 48 - Math.ceil((w + spacing) / 2);\\nconst y = Math.floor(Graphics.height * 3 / 4) - Math.ceil(h / 2) - spacing;\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","PageDown":"","pagedownKeyIcon:num":"0","pagedownBackgroundImage:str":"","pagedownRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Math.floor(uiWidth / 2) + 48 + Math.ceil((w + spacing) / 2);\\nconst y = Math.floor(Graphics.height * 3 / 4) - Math.ceil(h / 2) - spacing;\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","Shift":"","shiftKeyIcon:num":"0","shiftBackgroundImage:str":"","shiftRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Math.floor(uiWidth / 2) + 48 - w - spacing;\\nconst y = Math.floor(Graphics.height * 3 / 4);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\""}
 *
 * @param Tooltip:struct
 * @text UI Tooltip Settings
 * @type struct<Tooltip>
 * @desc Settings for the Input Combo Tooltips Window.
 * Requires VisuMZ_1_MessageCore!
 * @default {"enabled:eval":"true","Appearance":"","Scale:num":"0.6","WindowSkin:str":"Window","WindowOpacity:num":"240","Offset":"","OffsetX:num":"+0","OffsetY:num":"+0"}
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
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param Input
 * @text Input Sound
 *
 * @param inputName:str
 * @text Filename
 * @parent Input
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Skill2
 *
 * @param inputVolume:num
 * @text Volume
 * @parent Input
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param inputPitch:num
 * @text Pitch
 * @parent Input
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param inputPan:num
 * @text Pan
 * @parent Input
 * @desc Pan of the sound effect played.
 * @default 0
 * 
 * @param Special
 * @text Special Sound
 *
 * @param specialName:str
 * @text Filename
 * @parent Special
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Skill3
 *
 * @param specialVolume:num
 * @text Volume
 * @parent Special
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param specialPitch:num
 * @text Pitch
 * @parent Special
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param specialPan:num
 * @text Pan
 * @parent Special
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~UI:
 *
 * @param General
 *
 * @param BackgroundImage:str
 * @text Custom BG Image
 * @parent General
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Do you want to use a custom background image?
 * Located in /img/system/ folder. Covers whole screen.
 * @default 
 *
 * @param LargeIconSmoothing:eval
 * @text Icon Smoothing?
 * @parent General
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc Smooth the display for icons?
 * Or pixelate them?
 * @default false
 *
 * @param InputComboText:str
 * @text Input Combo Text
 * @parent General
 * @desc What text do you want displayed when starting an Input Combo sequence?
 * @default Input Combo Sequence
 *
 * @param InputComboAnimation:num
 * @text Sequence Animation
 * @parent InputComboText:str
 * @type animation
 * @desc What animation should be played when starting the Input Combo sequence?
 * @default 49
 *
 * @param OpacityDisable:num
 * @text Disabled Opacity
 * @parent General
 * @desc What is the opacity level for disabled UI elements?
 * @default 128
 *
 * @param OpacityRate:num
 * @text Opacity Rate
 * @parent General
 * @desc Fade in/out the background at what opacity rate?
 * Lower is slower. Higher is faster.
 * @default 16
 *
 * @param Scale:num
 * @text Scale
 * @parent General
 * @desc What is the scale of UI buttons?
 * 0.50 = 50%; 1.00 = 100%; 1.50 = 150%;
 * @default 0.50
 *
 * @param contentDrawJS:func
 * @text JS: Draw Skill Data
 * @parent General
 * @type note
 * @desc Code used to draw the skill data layer while
 * Input Combo Skill inputs are active.
 * @default "// Declare Constants\nconst skill = arguments[0];\nconst keyIcon = arguments[1];\nconst costText = arguments[2];\nconst bitmap = this.contents;\nconst lineHeight = this.lineHeight();\nconst iconIndex = skill.iconIndex;\nconst iconSize = ImageManager.iconWidth * 2;\n\n// Draw Large Icon\nconst hx = Math.ceil(bitmap.width / 2);\nthis.drawInputComboLargeIcon(iconIndex, hx, 0, iconSize);\n\n// Draw Keybind Icon\nconst kx = hx - iconSize;\nthis.drawInputComboLargeIcon(keyIcon, kx, 0, iconSize);\n\n// Draw Rounded Rectangle\nconst rx = 0;\nconst ry = Math.round(iconSize + lineHeight * 0.25);\nconst rw = bitmap.width;\nconst rh = Math.round(lineHeight * 1.75);\nconst radius = 20;\nconst rcolor = ColorManager.dimColor1();\nbitmap.fillRoundRect(rx, ry, rw, rh, radius, rcolor);\n\n// Draw Skill Name\nconst name = skill.name;\nconst ny = ry + ((costText.length > 0) ? 0 : Math.floor((rh - lineHeight) / 2));\nthis.drawText(name, 0, ny, bitmap.width, 'center');\n\n// Draw Cost Text\nconst cw = this.textSizeEx(costText).width;\nconst cx = Math.floor((bitmap.width - cw) / 2);\nconst cy = ry + Math.ceil(lineHeight * 0.75);\nthis.drawTextEx(costText, cx, cy);"
 *
 * @param backgroundDrawJS:func
 * @text JS: Draw Background
 * @parent General
 * @type note
 * @desc Code used to draw the background layer while
 * Input Combo Skill inputs are active.
 * @default "// Declare Constants\nconst bitmap = this;\nconst width = bitmap.width;\nconst height = Math.ceil(bitmap.height / 2);\nconst x = 0;\nconst y = bitmap.height - height;\nconst color1 = ColorManager.dimColor1();\nconst color2 = ColorManager.dimColor2();\n\n// Draw Gradient Background\nconst vert = true;\nbitmap.gradientFillRect(x, y, width, height, color2, color1, vert);"
 * 
 * @param QueueUI
 * @text Queue List UI
 * 
 * @param queueBackgroundImage:str
 * @text Custom BG Image
 * @parent QueueUI
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Use a custom background image for Queue UI?
 * Located in /img/system/ folder.
 * @default 
 *
 * @param queueVisibilityFrames:num
 * @text Visibility Frames
 * @parent QueueUI
 * @type number
 * @min 1
 * @desc How long does the Queue List stay visible for after
 * the player finishes input? 60 frames = 1 second.
 * @default 90
 *
 * @param queueDrawJS:func
 * @text JS: Draw Content
 * @parent QueueUI
 * @type note
 * @desc Code used to draw the list data while inputting skills.
 * @default "// Declare Constants\nconst skillList = arguments[0];\nconst specialSkill = arguments[1];\nconst maxCombo = arguments[2];\nconst drawBackRect = arguments[3];\nconst bitmap = this.contents;\nconst lineHeight = this.lineHeight();\nconst iconSize = ImageManager.iconWidth * 2;\n\n// Draw Background Rect\nif (drawBackRect) {\n    const radius = 20;\n    const bgColor = ColorManager.dimColor1();\n    bitmap.fillRoundRect(0, 0, bitmap.width, bitmap.height, radius, bgColor);\n}\n\n// Draw Skill List\nconst iw = maxCombo * iconSize;\nconst ih = iconSize;\nconst ix = Math.floor((bitmap.width - iw) / 2);\nconst iy = Math.floor(lineHeight / 4);\nlet dx = Math.floor(iconSize / 2);\nfor (const skill of skillList) {\n    const iconIndex = skill.iconIndex;\n    this.drawInputComboLargeIcon(iconIndex, ix + dx, iy, iconSize);\n    dx += iconSize;\n}\n\n// Draw Special Skill\nif (specialSkill) {\n    const text = '\\\\I[%1]%2'.format(specialSkill.iconIndex, specialSkill.name);\n    const textWidth = this.textSizeEx(text).width;\n    const tx = Math.floor((bitmap.width - textWidth) / 2);\n    const ty = iy + ih + Math.floor(lineHeight / 2);\n    this.drawTextEx(text, tx, ty);\n}"
 *
 * @param queueDrawBackRect:eval
 * @text Draw Back Rectangle?
 * @parent queueDrawJS:func
 * @type boolean
 * @on Draw Rectangle
 * @off Don't Draw
 * @desc Draw a rectangle in the back to make the contents easier to read?
 * @default true
 * 
 * @param queueListRectJS:func
 * @text JS: X, Y, W, H
 * @parent QueueUI
 * @type note
 * @desc Code used to determine the dimensions for this list UI element.
 * @default "// Declare Constants\nconst iconHeight = ImageManager.iconHeight;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst padding = $gameSystem.windowPadding();\n\n// Calculate Dimensions\nconst x = Math.round(Graphics.width / 2);\nconst y = Math.round(Graphics.height / 2);\nconst w = Math.max(Math.round(Graphics.width / 3), 360);\nconst h = (iconHeight + lineHeight + padding) * 2;\n\n// Return Rectangle\nreturn new Rectangle(x, y, w, h);"
 * 
 * @param Keybinds
 * @text Key Binds
 * 
 * @param KeybindOffsets
 * @text Offsets
 * @parent Keybinds
 *
 * @param KeybindUiOffsetX:num
 * @text Key Bind Offset X
 * @parent KeybindOffsets
 * @desc Offset the x coordinate all of key bind buttons.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param KeybindUiOffsetY:num
 * @text Key Bind Offset Y
 * @parent KeybindOffsets
 * @desc Offset the y coordinate all of key bind buttons.
 * Negative: up. Positive: down.
 * @default +0
 * 
 * @param KeybindPressed
 * @text Pressed
 * @parent Keybinds
 *
 * @param KeypressUiOffsetX:num
 * @text Key Press Offset X
 * @parent KeybindPressed
 * @desc Offset the x coordinate when the key is pressed.
 * Negative: left. Positive: right.
 * @default -4
 *
 * @param KeypressUiOffsetY:num
 * @text Key Press Offset Y
 * @parent KeybindPressed
 * @desc Offset the y coordinate when the key is pressed.
 * Negative: up. Positive: down.
 * @default +4
 * 
 * @param Down
 * @parent Keybinds
 *
 * @param downKeyIcon:num
 * @text Key Icon
 * @parent Down
 * @desc What is the icon used to mark this key bind?
 * Takes priority over Core Engine's Button Assist.
 * @default 0
 *
 * @param downBackgroundImage:str
 * @text Custom BG Image
 * @parent Down
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Do you want to use a custom background image?
 * Located in /img/system/ folder. Ignores scaling.
 * @default 
 * 
 * @param downRectJS:func
 * @text JS: X, Y, W, H
 * @parent Down
 * @type note
 * @desc Code used to determine the dimensions for this button.
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Graphics.width - 48 - Math.floor(uiWidth / 2);\nconst y = Math.floor(Graphics.height * 3 / 4) + Math.ceil(h / 2) + spacing;\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
 * 
 * @param Left
 * @parent Keybinds
 *
 * @param leftKeyIcon:num
 * @text Key Icon
 * @parent Left
 * @desc What is the icon used to mark this key bind?
 * Takes priority over Core Engine's Button Assist.
 * @default 0
 *
 * @param leftBackgroundImage:str
 * @text Custom BG Image
 * @parent Left
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Do you want to use a custom background image?
 * Located in /img/system/ folder. Ignores scaling.
 * @default 
 * 
 * @param leftRectJS:func
 * @text JS: X, Y, W, H
 * @parent Left
 * @type note
 * @desc Code used to determine the dimensions for this button.
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst h = lines * Window_Base.prototype.lineHeight();\nconst x = Graphics.width - 48 - Math.floor(uiWidth / 2) - w - spacing;\nconst y = Math.floor(Graphics.height * 3 / 4);\n\n// Return Rectangle\nconst rectWidth = Math.max(192, w);\nreturn new Rectangle(x, y, rectWidth, h);"
 * 
 * @param Right
 * @parent Keybinds
 *
 * @param rightKeyIcon:num
 * @text Key Icon
 * @parent Right
 * @desc What is the icon used to mark this key bind?
 * Takes priority over Core Engine's Button Assist.
 * @default 0
 *
 * @param rightBackgroundImage:str
 * @text Custom BG Image
 * @parent Right
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Do you want to use a custom background image?
 * Located in /img/system/ folder. Ignores scaling.
 * @default 
 * 
 * @param rightRectJS:func
 * @text JS: X, Y, W, H
 * @parent Right
 * @type note
 * @desc Code used to determine the dimensions for this button.
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst h = lines * Window_Base.prototype.lineHeight();\nconst x = Graphics.width - 48 - Math.floor(uiWidth / 2) + w + spacing;\nconst y = Math.floor(Graphics.height * 3 / 4);\n\n// Return Rectangle\nconst rectWidth = Math.max(192, w);\nreturn new Rectangle(x, y, rectWidth, h);"
 * 
 * @param Up
 * @parent Keybinds
 *
 * @param upKeyIcon:num
 * @text Key Icon
 * @parent Up
 * @desc What is the icon used to mark this key bind?
 * Takes priority over Core Engine's Button Assist.
 * @default 0
 *
 * @param upBackgroundImage:str
 * @text Custom BG Image
 * @parent Up
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Do you want to use a custom background image?
 * Located in /img/system/ folder. Ignores scaling.
 * @default 
 * 
 * @param upRectJS:func
 * @text JS: X, Y, W, H
 * @parent Up
 * @type note
 * @desc Code used to determine the dimensions for this button.
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Graphics.width - 48 - Math.floor(uiWidth / 2);\nconst y = Math.floor(Graphics.height * 3 / 4) - Math.ceil(h / 2) - spacing;\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
 * 
 * @param Ok
 * @parent Keybinds
 *
 * @param okKeyIcon:num
 * @text Key Icon
 * @parent Ok
 * @desc What is the icon used to mark this key bind?
 * Takes priority over Core Engine's Button Assist.
 * @default 0
 *
 * @param okBackgroundImage:str
 * @text Custom BG Image
 * @parent Ok
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Do you want to use a custom background image?
 * Located in /img/system/ folder. Ignores scaling.
 * @default 
 * 
 * @param okRectJS:func
 * @text JS: X, Y, W, H
 * @parent Ok
 * @type note
 * @desc Code used to determine the dimensions for this button.
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Math.floor(uiWidth / 2) + 48;\nconst y = Math.floor(Graphics.height * 3 / 4);\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
 * 
 * @param Cancel
 * @parent Keybinds
 *
 * @param cancelKeyIcon:num
 * @text Key Icon
 * @parent Cancel
 * @desc What is the icon used to mark this key bind?
 * Takes priority over Core Engine's Button Assist.
 * @default 0
 *
 * @param cancelBackgroundImage:str
 * @text Custom BG Image
 * @parent Cancel
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Do you want to use a custom background image?
 * Located in /img/system/ folder. Ignores scaling.
 * @default 
 * 
 * @param cancelRectJS:func
 * @text JS: X, Y, W, H
 * @parent Cancel
 * @type note
 * @desc Code used to determine the dimensions for this button.
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Math.floor(uiWidth / 2) + 48 + w + spacing;\nconst y = Math.floor(Graphics.height * 3 / 4);\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
 * 
 * @param PageUp
 * @parent Keybinds
 *
 * @param pageupKeyIcon:num
 * @text Key Icon
 * @parent PageUp
 * @desc What is the icon used to mark this key bind?
 * Takes priority over Core Engine's Button Assist.
 * @default 0
 *
 * @param pageupBackgroundImage:str
 * @text Custom BG Image
 * @parent PageUp
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Do you want to use a custom background image?
 * Located in /img/system/ folder. Ignores scaling.
 * @default 
 * 
 * @param pageupRectJS:func
 * @text JS: X, Y, W, H
 * @parent PageUp
 * @type note
 * @desc Code used to determine the dimensions for this button.
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Math.floor(uiWidth / 2) + 48 - Math.ceil((w + spacing) / 2);\nconst y = Math.floor(Graphics.height * 3 / 4) - Math.ceil(h / 2) - spacing;\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
 * 
 * @param PageDown
 * @parent Keybinds
 *
 * @param pagedownKeyIcon:num
 * @text Key Icon
 * @parent PageDown
 * @desc What is the icon used to mark this key bind?
 * Takes priority over Core Engine's Button Assist.
 * @default 0
 *
 * @param pagedownBackgroundImage:str
 * @text Custom BG Image
 * @parent PageDown
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Do you want to use a custom background image?
 * Located in /img/system/ folder. Ignores scaling.
 * @default 
 * 
 * @param pagedownRectJS:func
 * @text JS: X, Y, W, H
 * @parent PageDown
 * @type note
 * @desc Code used to determine the dimensions for this button.
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Math.floor(uiWidth / 2) + 48 + Math.ceil((w + spacing) / 2);\nconst y = Math.floor(Graphics.height * 3 / 4) - Math.ceil(h / 2) - spacing;\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
 * 
 * @param Shift
 * @parent Keybinds
 *
 * @param shiftKeyIcon:num
 * @text Key Icon
 * @parent Shift
 * @desc What is the icon used to mark this key bind?
 * Takes priority over Core Engine's Button Assist.
 * @default 0
 *
 * @param shiftBackgroundImage:str
 * @text Custom BG Image
 * @parent Shift
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Do you want to use a custom background image?
 * Located in /img/system/ folder. Ignores scaling.
 * @default 
 * 
 * @param shiftRectJS:func
 * @text JS: X, Y, W, H
 * @parent Shift
 * @type note
 * @desc Code used to determine the dimensions for this button.
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Math.floor(uiWidth / 2) + 48 - w - spacing;\nconst y = Math.floor(Graphics.height * 3 / 4);\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
 *
 */
/* ----------------------------------------------------------------------------
 * Tooltip Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Tooltip:
 *
 * @param enabled:eval
 * @text Enabled?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Are tooltips enabled?
 * Requires VisuMZ_1_MessageCore!
 * @default true
 *
 * @param Appearance
 *
 * @param Scale:num
 * @text Scale
 * @parent Appearance
 * @desc What scale size do you want for the tooltip?
 * Use 1.0 for normal size.
 * @default 0.6
 *
 * @param WindowSkin:str
 * @text Skin Filename
 * @parent Appearance
 * @type file
 * @dir img/system/
 * @desc What window skin do you want to use for the tooltip?
 * @default Window
 *
 * @param WindowOpacity:num
 * @text Skin Opacity
 * @parent Appearance
 * @type number
 * @min 0
 * @max 255
 * @desc What opacity setting is used for the tooltip?
 * Use a number between 0 and 255.
 * @default 240
 *
 * @param Offset
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent Offset
 * @desc Offset the tooltip X position from the mouse?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent Offset
 * @desc Offset the tooltip Y position from the mouse?
 * Negative: up. Positive: down.
 * @default +0
 *
 */
//=============================================================================

const _0x2f7310=_0x5824;(function(_0x22348a,_0x5be111){const _0x25fc32=_0x5824,_0x2d8ed8=_0x22348a();while(!![]){try{const _0x1264f9=-parseInt(_0x25fc32(0x202))/0x1*(-parseInt(_0x25fc32(0x20f))/0x2)+parseInt(_0x25fc32(0x22e))/0x3+parseInt(_0x25fc32(0x31e))/0x4+-parseInt(_0x25fc32(0x339))/0x5+parseInt(_0x25fc32(0x27c))/0x6*(-parseInt(_0x25fc32(0x1e6))/0x7)+-parseInt(_0x25fc32(0x32c))/0x8+parseInt(_0x25fc32(0x1ed))/0x9;if(_0x1264f9===_0x5be111)break;else _0x2d8ed8['push'](_0x2d8ed8['shift']());}catch(_0x225848){_0x2d8ed8['push'](_0x2d8ed8['shift']());}}}(_0x2ac2,0xc1c8e));var label='InputComboSkills',tier=tier||0x0,dependencies=[_0x2f7310(0x321),_0x2f7310(0x319)],pluginData=$plugins['filter'](function(_0x3267fe){const _0x264f83=_0x2f7310;return _0x3267fe[_0x264f83(0x1d2)]&&_0x3267fe['description'][_0x264f83(0x2e9)]('['+label+']');})[0x0];VisuMZ[label][_0x2f7310(0x322)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x2f7310(0x34a)]=function(_0x4740c4,_0x49cee1){const _0x4f31c7=_0x2f7310;for(const _0xd9d9bc in _0x49cee1){if(_0x4f31c7(0x21e)===_0x4f31c7(0x2d4)){const _0x34870f=_0x5071fb[_0x4f31c7(0x2b6)](this[_0x4f31c7(0x1f0)]);if(_0x34870f&&_0x34870f['match'](/\\I\[(\d+)\]/i))return _0x50124c(_0xea671a['$1']);}else{if(_0xd9d9bc[_0x4f31c7(0x2c1)](/(.*):(.*)/i)){if(_0x4f31c7(0x237)!==_0x4f31c7(0x237)){const _0x144eb3=_0x54ef1e[_0x4f31c7(0x34c)][_0x4f31c7(0x322)]['UI'],_0x5709a4=this['_contentWindow'][_0x4f31c7(0x2cf)];_0x5709a4[_0x4f31c7(0x281)](),this[_0x4f31c7(0x1fa)][_0x4f31c7(0x2c9)]();const _0x2df69a=this[_0x4f31c7(0x1f8)][_0x4f31c7(0x28d)](_0x57b658=>_0x21a143[_0x57b658])[_0x4f31c7(0x31f)](null)['remove'](_0x4a3c92),_0xcd34c9=_0x4d4b0b[this[_0x4f31c7(0x1d1)]];if(_0xcd34c9)_0x2df69a[_0x4f31c7(0x236)]();const _0x204cbf=this['_cacheComboMax'],_0x27daa7=_0x144eb3[_0x4f31c7(0x24f)];_0x4fe494['prototype'][_0x4f31c7(0x277)][_0x4f31c7(0x328)](this[_0x4f31c7(0x1fa)],_0x2df69a,_0xcd34c9,_0x204cbf,_0x27daa7),this[_0x4f31c7(0x1ea)][_0x4f31c7(0x22c)]=_0x5709a4;}else{const _0x85db4=String(RegExp['$1']),_0x32c06e=String(RegExp['$2'])['toUpperCase']()[_0x4f31c7(0x231)]();let _0x1fb9a2,_0x1a9bef,_0x32ff00;switch(_0x32c06e){case _0x4f31c7(0x1f5):_0x1fb9a2=_0x49cee1[_0xd9d9bc]!==''?Number(_0x49cee1[_0xd9d9bc]):0x0;break;case'ARRAYNUM':_0x1a9bef=_0x49cee1[_0xd9d9bc]!==''?JSON['parse'](_0x49cee1[_0xd9d9bc]):[],_0x1fb9a2=_0x1a9bef['map'](_0x462b3a=>Number(_0x462b3a));break;case'EVAL':_0x1fb9a2=_0x49cee1[_0xd9d9bc]!==''?eval(_0x49cee1[_0xd9d9bc]):null;break;case _0x4f31c7(0x26d):_0x1a9bef=_0x49cee1[_0xd9d9bc]!==''?JSON['parse'](_0x49cee1[_0xd9d9bc]):[],_0x1fb9a2=_0x1a9bef[_0x4f31c7(0x28d)](_0x31c60d=>eval(_0x31c60d));break;case _0x4f31c7(0x31d):_0x1fb9a2=_0x49cee1[_0xd9d9bc]!==''?JSON[_0x4f31c7(0x1d4)](_0x49cee1[_0xd9d9bc]):'';break;case _0x4f31c7(0x327):_0x1a9bef=_0x49cee1[_0xd9d9bc]!==''?JSON[_0x4f31c7(0x1d4)](_0x49cee1[_0xd9d9bc]):[],_0x1fb9a2=_0x1a9bef[_0x4f31c7(0x28d)](_0x40d657=>JSON['parse'](_0x40d657));break;case'FUNC':_0x1fb9a2=_0x49cee1[_0xd9d9bc]!==''?new Function(JSON['parse'](_0x49cee1[_0xd9d9bc])):new Function(_0x4f31c7(0x260));break;case _0x4f31c7(0x2da):_0x1a9bef=_0x49cee1[_0xd9d9bc]!==''?JSON[_0x4f31c7(0x1d4)](_0x49cee1[_0xd9d9bc]):[],_0x1fb9a2=_0x1a9bef[_0x4f31c7(0x28d)](_0x4aa248=>new Function(JSON['parse'](_0x4aa248)));break;case _0x4f31c7(0x2a5):_0x1fb9a2=_0x49cee1[_0xd9d9bc]!==''?String(_0x49cee1[_0xd9d9bc]):'';break;case _0x4f31c7(0x200):_0x1a9bef=_0x49cee1[_0xd9d9bc]!==''?JSON['parse'](_0x49cee1[_0xd9d9bc]):[],_0x1fb9a2=_0x1a9bef[_0x4f31c7(0x28d)](_0x3f4fae=>String(_0x3f4fae));break;case'STRUCT':_0x32ff00=_0x49cee1[_0xd9d9bc]!==''?JSON[_0x4f31c7(0x1d4)](_0x49cee1[_0xd9d9bc]):{},_0x1fb9a2=VisuMZ[_0x4f31c7(0x34a)]({},_0x32ff00);break;case'ARRAYSTRUCT':_0x1a9bef=_0x49cee1[_0xd9d9bc]!==''?JSON[_0x4f31c7(0x1d4)](_0x49cee1[_0xd9d9bc]):[],_0x1fb9a2=_0x1a9bef['map'](_0x64d900=>VisuMZ[_0x4f31c7(0x34a)]({},JSON[_0x4f31c7(0x1d4)](_0x64d900)));break;default:continue;}_0x4740c4[_0x85db4]=_0x1fb9a2;}}}}return _0x4740c4;},(_0x936234=>{const _0x556879=_0x2f7310,_0x2700f7=_0x936234[_0x556879(0x346)];for(const _0x22e153 of dependencies){if(!Imported[_0x22e153]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x556879(0x1dc)](_0x2700f7,_0x22e153)),SceneManager[_0x556879(0x219)]();break;}}const _0x396150=_0x936234[_0x556879(0x24b)];if(_0x396150[_0x556879(0x2c1)](/\[Version[ ](.*?)\]/i)){const _0x448fee=Number(RegExp['$1']);_0x448fee!==VisuMZ[label][_0x556879(0x2c5)]&&('WcZnu'==='WcZnu'?(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x556879(0x1dc)](_0x2700f7,_0x448fee)),SceneManager[_0x556879(0x219)]()):(_0x4a76f8[_0x556879(0x34c)][_0x556879(0x207)][_0x556879(0x328)](this),this[_0x556879(0x23d)]()));}if(_0x396150[_0x556879(0x2c1)](/\[Tier[ ](\d+)\]/i)){if(_0x556879(0x233)!=='eWoMQ'){if(!_0x497551[_0x556879(0x279)](this[_0x556879(0x1f0)]))return 0x0;const _0x48ddde=_0x14b86b[_0x556879(0x34c)][_0x556879(0x322)]['UI'][_0x556879(0x212)],_0x374724=_0x55daf4['getInputComboSkillsKey'](this['_key']);if(_0x374724===null)return _0x48ddde;const _0x13a5a9=_0x2ab693[_0x556879(0x34b)];if(!_0x13a5a9)return _0x48ddde;const _0x11f4aa=_0x1357bc[_0x374724];if(!_0x13a5a9[_0x556879(0x2b5)](_0x11f4aa))return _0x48ddde;return 0xff;}else{const _0x2cdbd6=Number(RegExp['$1']);if(_0x2cdbd6<tier)_0x556879(0x2ca)!==_0x556879(0x2ca)?_0x5c707b['queueInputComboSkillsFromKey'](this[_0x556879(0x1f0)]):(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x2700f7,_0x2cdbd6,tier)),SceneManager[_0x556879(0x219)]());else{if(_0x556879(0x298)===_0x556879(0x251)){if(_0x2bdf2e[_0x556879(0x23b)]&&_0x518b58['AutoSkillTriggers'][_0x556879(0x2c5)]<1.12){const _0x8962e6='VisuStella\x20MZ\x20Auto\x20Skill\x20Triggers\x20needs\x20to\x20be\x20updated!';_0x596e62(_0x8962e6),_0x66bac0[_0x556879(0x219)]();}}else tier=Math['max'](_0x2cdbd6,tier);}}}VisuMZ[_0x556879(0x34a)](VisuMZ[label]['Settings'],_0x936234[_0x556879(0x215)]);})(pluginData),VisuMZ['InputComboSkills'][_0x2f7310(0x1fd)]={'InputKey':/<(?:INPUT COMBO|COMBO) SKILL[ ](.*):[ ](.*)>/gi,'AvailableSpecial':/<(?:AVAILABLE INPUT COMBO|AVAILABLE COMBO|INPUT COMBO|COMBO) SPECIAL[ ](.*):[ ](.*)>/gi,'ForcedSpecial':/<(?:ALWAYS|FORCE|FORCED) (?:INPUT COMBO|COMBO) SPECIAL[ ](.*):[ ](.*)>/gi,'LearnedSpecial':/<(?:LEARNED|KNOWN) (?:INPUT COMBO|COMBO) SPECIAL[ ](.*):[ ](.*)>/gi,'ComboOnly':/<(?:INPUT COMBO|COMBO) ONLY>/i,'ComboMax':/<(?:INPUT COMBO|COMBO) MAX:[ ](\d+)>/i,'ComboStartAni':/<(?:INPUT COMBO|COMBO) START (?:ANI|ANIMATION):[ ](\d+)>/i},VisuMZ[_0x2f7310(0x34c)][_0x2f7310(0x223)]=VisuMZ['InputComboSkills'][_0x2f7310(0x322)][_0x2f7310(0x282)]||0x1,VisuMZ[_0x2f7310(0x34c)][_0x2f7310(0x25c)]=[_0x2f7310(0x211),_0x2f7310(0x30d),_0x2f7310(0x343),'up','ok','cancel',_0x2f7310(0x290),_0x2f7310(0x2ba),_0x2f7310(0x2d8)],VisuMZ[_0x2f7310(0x34c)]['applyKeyAlternatives']=function(_0x5ce6c2){const _0x4ecdcb=_0x2f7310;_0x5ce6c2=_0x5ce6c2[_0x4ecdcb(0x25e)]()[_0x4ecdcb(0x231)]();switch(_0x5ce6c2){case'2':return'down';case'4':return _0x4ecdcb(0x30d);case'6':return'right';case'8':return'up';case's':return _0x4ecdcb(0x2d8);case'z':return'ok';case'x':return'cancel';case'q':return _0x4ecdcb(0x290);case'w':return _0x4ecdcb(0x2ba);}return _0x5ce6c2;},DataManager[_0x2f7310(0x252)]=function(_0x171dd3){const _0x5d87e8=_0x2f7310;if(!_0x171dd3)return!![];if(!DataManager[_0x5d87e8(0x205)](_0x171dd3))return!![];this[_0x5d87e8(0x324)]=this[_0x5d87e8(0x324)]||{};if(this['_hasInputComboSkillsConflict'][_0x171dd3['id']])return this['_hasInputComboSkillsConflict'][_0x171dd3['id']];const _0x14c9cb=_0x171dd3[_0x5d87e8(0x314)]||'',_0x193ed6=[_0x5d87e8(0x2f7),_0x5d87e8(0x293)];this[_0x5d87e8(0x324)][_0x171dd3['id']]=![];for(const _0x467879 of _0x193ed6){if(!VisuMZ[_0x467879])continue;const _0xb20cfe=VisuMZ[_0x467879][_0x5d87e8(0x1fd)];for(const _0x59c9ed in _0xb20cfe){if(_0x14c9cb[_0x5d87e8(0x2c1)](_0xb20cfe[_0x59c9ed])){this[_0x5d87e8(0x324)][_0x171dd3['id']]=!![];break;}}if(this['_hasInputComboSkillsConflict'][_0x171dd3['id']])break;}if(Imported[_0x5d87e8(0x265)]&&this[_0x5d87e8(0x2a3)](_0x171dd3)){if(_0x5d87e8(0x29f)==='XnYrA'){this[_0x5d87e8(0x1f7)]=!![],_0x220d90['prepareInputComboSkills'](_0x4e3525,_0x37088b[_0x5d87e8(0x2dc)]());_0x13adc6[_0x5d87e8(0x253)][_0x5d87e8(0x1df)]>0x0&&this[_0x5d87e8(0x264)](_0x5d87e8(0x2b0),_0x292128[_0x5d87e8(0x253)]);this[_0x5d87e8(0x264)]('performActionStart',_0x28acbc,_0x1f89ce),this[_0x5d87e8(0x264)]('waitForMovement');const _0x2104ef=_0x12a249[_0x5d87e8(0x1ec)](_0x8e1007[_0x5d87e8(0x2dc)]());_0x2104ef>0x0&&this[_0x5d87e8(0x264)](_0x5d87e8(0x2e8),_0x36b18e,[_0x1b1c51],_0x2104ef);}else this[_0x5d87e8(0x324)][_0x171dd3['id']]=!![];}return Imported[_0x5d87e8(0x340)]&&this[_0x5d87e8(0x284)](_0x171dd3)&&(_0x5d87e8(0x1d8)==='vCFwv'?this[_0x5d87e8(0x1cc)]=_0xf284a:this[_0x5d87e8(0x324)][_0x171dd3['id']]=!![]),Imported['VisuMZ_3_ItemConcoctSkills']&&this['canConcoctItems'](_0x171dd3)&&(this[_0x5d87e8(0x324)][_0x171dd3['id']]=!![]),this[_0x5d87e8(0x324)][_0x171dd3['id']];},DataManager[_0x2f7310(0x280)]=function(_0x178219){const _0x19ee3f=_0x2f7310;if(!_0x178219)return![];if(!DataManager[_0x19ee3f(0x205)](_0x178219))return![];if(DataManager[_0x19ee3f(0x252)](_0x178219))return![];const _0x47f39e=VisuMZ[_0x19ee3f(0x34c)][_0x19ee3f(0x1fd)],_0x4189d7=_0x178219[_0x19ee3f(0x314)]||'';if(_0x4189d7['match'](_0x47f39e[_0x19ee3f(0x1e8)]))return!![];return![];},DataManager['getInputComboStartAnimation']=function(_0x44c2fc){const _0x3ae846=_0x2f7310;if(!_0x44c2fc)return Window_BattleLog[_0x3ae846(0x32f)];if(!DataManager['isSkill'](_0x44c2fc))return Window_BattleLog[_0x3ae846(0x32f)];const _0x543d01=VisuMZ[_0x3ae846(0x34c)][_0x3ae846(0x1fd)],_0x4738c5=_0x44c2fc[_0x3ae846(0x314)]||'';if(_0x4738c5[_0x3ae846(0x2c1)](_0x543d01[_0x3ae846(0x2c8)])){if(_0x3ae846(0x1fe)===_0x3ae846(0x1fe))return Number(RegExp['$1']);else{const _0x26a9dc=_0x245fd1[_0x1c3797[_0x3ae846(0x1d9)](_0x40cbf7[_0x3ae846(0x1df)])];_0x2497ee['queueInputComboSkillsFromKey'](_0x26a9dc),_0xd00ef2(this[_0x3ae846(0x2e6)][_0x3ae846(0x263)](this),0xc8);}}return Window_BattleLog[_0x3ae846(0x32f)];},DataManager[_0x2f7310(0x1d5)]=function(_0x1d530e){const _0x3f5461=_0x2f7310;if(!_0x1d530e)return VisuMZ[_0x3f5461(0x34c)]['INPUT_COMBO_DEFAULT_MAX'];if(!DataManager[_0x3f5461(0x205)](_0x1d530e))return VisuMZ[_0x3f5461(0x34c)]['INPUT_COMBO_DEFAULT_MAX'];this['_inputComboMax']=this[_0x3f5461(0x2bc)]||{};if(this[_0x3f5461(0x2bc)][_0x1d530e['id']])return this['_inputComboMax'][_0x1d530e['id']];const _0x5e59cd=VisuMZ['InputComboSkills']['RegExp'],_0x38d805=_0x1d530e[_0x3f5461(0x314)]||'';this[_0x3f5461(0x2bc)][_0x1d530e['id']]=VisuMZ[_0x3f5461(0x34c)][_0x3f5461(0x223)];if(_0x38d805[_0x3f5461(0x2c1)](_0x5e59cd[_0x3f5461(0x2b7)])){if(_0x3f5461(0x2a2)!==_0x3f5461(0x20e))this[_0x3f5461(0x2bc)][_0x1d530e['id']]=Math[_0x3f5461(0x330)](Number(RegExp['$1']),0x1);else{if(_0xa8de3b[_0x3f5461(0x22d)](this[_0x3f5461(0x1f8)])!==_0x2269c4[_0x3f5461(0x22d)](_0x856f65[_0x3f5461(0x273)]))return!![];if(this[_0x3f5461(0x1d1)]!==_0x207102[_0x3f5461(0x1d3)])return!![];if(this['_cacheComboMax']!==_0x42b3f5['_inputComboSkillMax'])return!![];}}return this[_0x3f5461(0x2bc)][_0x1d530e['id']];},Bitmap[_0x2f7310(0x23a)][_0x2f7310(0x1e4)]=function(_0x5ae53e,_0x46a113,_0x15bb7e,_0x3694aa,_0x3a51f7,_0x3afafb){const _0x2d5fbf=_0x2f7310,_0x28014e=_0x5ae53e+_0x15bb7e,_0x1b2d1d=_0x46a113+_0x3694aa,_0x5ba802=this['context'];_0x5ba802[_0x2d5fbf(0x2eb)](),_0x5ba802[_0x2d5fbf(0x21b)]=_0x3afafb,_0x5ba802[_0x2d5fbf(0x2c0)](),_0x5ba802[_0x2d5fbf(0x2cb)](_0x5ae53e+_0x3a51f7,_0x46a113),_0x5ba802[_0x2d5fbf(0x26e)](_0x28014e-_0x3a51f7,_0x46a113),_0x5ba802[_0x2d5fbf(0x30a)](_0x28014e,_0x46a113,_0x28014e,_0x46a113+_0x3a51f7),_0x5ba802[_0x2d5fbf(0x26e)](_0x28014e,_0x46a113+_0x3694aa-_0x3a51f7),_0x5ba802[_0x2d5fbf(0x30a)](_0x28014e,_0x1b2d1d,_0x28014e-_0x3a51f7,_0x1b2d1d),_0x5ba802[_0x2d5fbf(0x26e)](_0x5ae53e+_0x3a51f7,_0x1b2d1d),_0x5ba802['quadraticCurveTo'](_0x5ae53e,_0x1b2d1d,_0x5ae53e,_0x1b2d1d-_0x3a51f7),_0x5ba802[_0x2d5fbf(0x26e)](_0x5ae53e,_0x46a113+_0x3a51f7),_0x5ba802[_0x2d5fbf(0x30a)](_0x5ae53e,_0x46a113,_0x5ae53e+_0x3a51f7,_0x46a113),_0x5ba802['fill'](),_0x5ba802[_0x2d5fbf(0x308)](),this[_0x2d5fbf(0x32a)]['update']();},SoundManager['playInputComboSkillsSound']=function(_0x4a6626){const _0x1c907e=_0x2f7310,_0x4eb0b1=VisuMZ[_0x1c907e(0x34c)][_0x1c907e(0x322)][_0x1c907e(0x1e7)],_0x3e2ede={'name':_0x4eb0b1[_0x1c907e(0x1ee)['format'](_0x4a6626)]||'','volume':_0x4eb0b1[_0x1c907e(0x1dd)[_0x1c907e(0x1dc)](_0x4a6626)]||0x0,'pitch':_0x4eb0b1['%1Pitch'[_0x1c907e(0x1dc)](_0x4a6626)]||0x0,'pan':_0x4eb0b1[_0x1c907e(0x248)[_0x1c907e(0x1dc)](_0x4a6626)]||0x0};AudioManager['playSe'](_0x3e2ede);},VisuMZ[_0x2f7310(0x34c)][_0x2f7310(0x207)]=Game_Temp['prototype'][_0x2f7310(0x1cb)],Game_Temp['prototype'][_0x2f7310(0x1cb)]=function(){const _0x25e440=_0x2f7310;VisuMZ[_0x25e440(0x34c)][_0x25e440(0x207)]['call'](this),this[_0x25e440(0x23d)]();},Game_Temp['prototype'][_0x2f7310(0x23d)]=function(){const _0x11d874=_0x2f7310;this['_inputComboSkillUser']=null,this[_0x11d874(0x273)]=[],this[_0x11d874(0x337)]={},this[_0x11d874(0x2fb)]={},this[_0x11d874(0x210)]='',this[_0x11d874(0x1d3)]=0x0,this['_inputComboSkillMax']=0x0;},Game_Temp[_0x2f7310(0x23a)][_0x2f7310(0x348)]=function(_0x128b5d,_0x56f9af){const _0xeb77bf=_0x2f7310;this[_0xeb77bf(0x23d)](),this[_0xeb77bf(0x2de)](_0x128b5d),this[_0xeb77bf(0x303)](_0x56f9af),this[_0xeb77bf(0x2f4)](_0x56f9af,_0xeb77bf(0x345)),this[_0xeb77bf(0x2f4)](_0x56f9af,_0xeb77bf(0x25f)),this[_0xeb77bf(0x2f4)](_0x56f9af,_0xeb77bf(0x2be)),this[_0xeb77bf(0x28f)](_0x56f9af);},Game_Temp[_0x2f7310(0x23a)][_0x2f7310(0x2de)]=function(_0x3cf84e){this['_inputComboSkillUser']=_0x3cf84e;},Game_Temp[_0x2f7310(0x23a)][_0x2f7310(0x303)]=function(_0x345192){const _0x46e2b5=_0x2f7310,_0x528d8d=VisuMZ[_0x46e2b5(0x34c)][_0x46e2b5(0x1fd)],_0x2eecee=VisuMZ[_0x46e2b5(0x34c)][_0x46e2b5(0x25c)][_0x46e2b5(0x2af)](),_0x4fede1=_0x345192['note']||'',_0x46854a=_0x4fede1[_0x46e2b5(0x2c1)](_0x528d8d[_0x46e2b5(0x1e8)]);if(_0x46854a)for(const _0xb78941 of _0x46854a){_0xb78941[_0x46e2b5(0x2c1)](_0x528d8d[_0x46e2b5(0x1e8)]);let _0x276aef=String(RegExp['$1'])[_0x46e2b5(0x25e)]()['trim']();const _0x17967b=String(RegExp['$2']);_0x276aef=VisuMZ['InputComboSkills']['applyKeyAlternatives'](_0x276aef);if(!_0x2eecee['includes'](_0x276aef))continue;const _0x2825d4=/^\d+$/[_0x46e2b5(0x276)](_0x17967b);let _0x8440a9=0x0;if(_0x2825d4){if(_0x46e2b5(0x2db)===_0x46e2b5(0x2db))_0x8440a9=Number(_0x17967b);else{if(this[_0x46e2b5(0x331)][_0x46e2b5(0x206)])return;}}else _0x8440a9=DataManager[_0x46e2b5(0x22a)](_0x17967b);if(_0x8440a9<=0x0)continue;this[_0x46e2b5(0x337)][_0x276aef]=_0x8440a9;}},Game_Temp[_0x2f7310(0x23a)][_0x2f7310(0x2f4)]=function(_0x445c3,_0x35fcb7){const _0x5d0b2e=_0x2f7310,_0x203dee=VisuMZ[_0x5d0b2e(0x34c)][_0x5d0b2e(0x1fd)],_0x47a44f=_0x445c3['note']||'',_0x4a4850=this[_0x5d0b2e(0x1cc)],_0x3df69a=_0x47a44f['match'](_0x203dee[_0x35fcb7]);if(_0x3df69a)for(const _0x3332bd of _0x3df69a){if('XCPaj'==='XCPaj'){_0x3332bd[_0x5d0b2e(0x2c1)](_0x203dee[_0x35fcb7]);let _0x16a4a4=String(RegExp['$1'])[_0x5d0b2e(0x27a)]()['trim']();const _0x1c0a97=String(RegExp['$2']);_0x16a4a4=_0x16a4a4[_0x5d0b2e(0x297)](/D/gi,'2'),_0x16a4a4=_0x16a4a4[_0x5d0b2e(0x297)](/L/gi,'4'),_0x16a4a4=_0x16a4a4[_0x5d0b2e(0x297)](/R/gi,'6'),_0x16a4a4=_0x16a4a4[_0x5d0b2e(0x297)](/U/gi,'8');const _0x534ca2=/^\d+$/[_0x5d0b2e(0x276)](_0x1c0a97);let _0x403e01=0x0;if(_0x534ca2){if('bbJet'===_0x5d0b2e(0x329))_0x403e01=Number(_0x1c0a97);else{const _0x40b109=0x14,_0x41fe34=_0x153ee4['dimColor1']();_0x1c4d56[_0x5d0b2e(0x1e4)](0x0,0x0,_0x5de63f[_0x5d0b2e(0x1d6)],_0x5644c8[_0x5d0b2e(0x31b)],_0x40b109,_0x41fe34);}}else _0x403e01=DataManager[_0x5d0b2e(0x22a)](_0x1c0a97);if(_0x403e01<=0x0)continue;if(_0x35fcb7==='AvailableSpecial'&&!_0x4a4850[_0x5d0b2e(0x21f)](_0x403e01))continue;if(_0x35fcb7==='LearnedSpecial'&&!_0x4a4850[_0x5d0b2e(0x333)](_0x403e01))continue;this[_0x5d0b2e(0x2fb)][_0x16a4a4]=_0x403e01;}else{const _0x3e301a=_0xddc3f5['InputComboSkills'][_0x5d0b2e(0x322)]['UI'];if(_0x3e301a[_0x5d0b2e(0x249)]){const _0x3be16b=new _0xb62901();this[_0x5d0b2e(0x278)][_0x5d0b2e(0x2e5)](_0x3be16b);const _0x311447=new _0x25bebb(_0x2bff30[_0x5d0b2e(0x1d6)],_0x29e7e8[_0x5d0b2e(0x31b)]);_0x3be16b['bitmap']=_0x311447;const _0x2d821d=_0x3e301a[_0x5d0b2e(0x249)];_0x2d821d['call'](_0x3be16b[_0x5d0b2e(0x22c)]);}if(_0x3e301a['BackgroundImage']!==''){const _0x234025=new _0x291984();this[_0x5d0b2e(0x278)][_0x5d0b2e(0x2e5)](_0x234025);const _0x42a195=_0x1f668c[_0x5d0b2e(0x1ca)](_0x3e301a[_0x5d0b2e(0x2b1)]);_0x234025['bitmap']=_0x42a195;}}}},Game_Temp[_0x2f7310(0x23a)][_0x2f7310(0x28f)]=function(_0xe375c5){const _0x93f87a=_0x2f7310;this['_inputComboSkillMax']=DataManager[_0x93f87a(0x1d5)](_0xe375c5);},Game_Temp[_0x2f7310(0x23a)]['getInputComboSkillsUser']=function(){const _0xec63ea=_0x2f7310;return this[_0xec63ea(0x1cc)]||null;},Game_Temp[_0x2f7310(0x23a)][_0x2f7310(0x23e)]=function(_0x31859d){const _0x1f624b=_0x2f7310;if(!this[_0x1f624b(0x337)])return null;return this[_0x1f624b(0x337)][_0x31859d];},Game_Temp[_0x2f7310(0x23a)][_0x2f7310(0x279)]=function(_0x57a6d4){const _0x47caf0=_0x2f7310;return!!this[_0x47caf0(0x23e)](_0x57a6d4);},Game_Temp['prototype'][_0x2f7310(0x234)]=function(){const _0x719797=_0x2f7310;return(this['_inputComboSkillQueue']||[])[_0x719797(0x1df)]>0x0;},Game_Temp[_0x2f7310(0x23a)][_0x2f7310(0x235)]=function(_0x16f6bc){const _0x4d7c56=_0x2f7310;this[_0x4d7c56(0x21c)](_0x16f6bc),this[_0x4d7c56(0x2d9)](),this[_0x4d7c56(0x33f)](_0x16f6bc),this[_0x4d7c56(0x268)]()&&('FClkr'===_0x4d7c56(0x2fe)?(this[_0x4d7c56(0x23d)](),this['registerInputComboSkillsActor'](_0x579f99),this[_0x4d7c56(0x303)](_0x48dc51),this[_0x4d7c56(0x2f4)](_0x2920e2,_0x4d7c56(0x345)),this[_0x4d7c56(0x2f4)](_0x3c59e2,'ForcedSpecial'),this['registerInputComboSpecials'](_0x51ed5c,_0x4d7c56(0x2be)),this['registerInputComboSkillsMax'](_0x5e9072)):SceneManager[_0x4d7c56(0x23c)]['_logWindow']['endInputComboSkill']());},Game_Temp[_0x2f7310(0x23a)]['addToInputComboSkillsQueueFromKey']=function(_0x4da200){const _0x2e1af0=_0x2f7310,_0x1d8caf=$dataSkills[$gameTemp[_0x2e1af0(0x23e)](_0x4da200)];this[_0x2e1af0(0x273)]['push'](_0x1d8caf['id']);},Game_Temp['prototype']['payCostInputComboSkillQueueLatest']=function(){const _0x3b067f=_0x2f7310,_0x4def2b=this[_0x3b067f(0x326)](),_0x12d7f0=this[_0x3b067f(0x273)][this[_0x3b067f(0x273)][_0x3b067f(0x1df)]-0x1],_0x39dcfe=$dataSkills[_0x12d7f0];_0x4def2b['paySkillCost'](_0x39dcfe);},Game_Temp['prototype'][_0x2f7310(0x33f)]=function(_0x2c39f2){const _0x293b38=_0x2f7310;if(_0x2c39f2===_0x293b38(0x211))this['_inputComboSkillSpecialString']+='2';if(_0x2c39f2==='left')this['_inputComboSkillSpecialString']+='4';if(_0x2c39f2===_0x293b38(0x343))this[_0x293b38(0x210)]+='6';if(_0x2c39f2==='up')this[_0x293b38(0x210)]+='8';if(_0x2c39f2==='ok')this[_0x293b38(0x210)]+='Z';if(_0x2c39f2===_0x293b38(0x203))this['_inputComboSkillSpecialString']+='X';if(_0x2c39f2==='pageup')this[_0x293b38(0x210)]+='Q';if(_0x2c39f2===_0x293b38(0x2ba))this[_0x293b38(0x210)]+='W';if(_0x2c39f2==='shift')this[_0x293b38(0x210)]+='S';},Game_Temp['prototype'][_0x2f7310(0x268)]=function(){const _0x53ce23=_0x2f7310,_0x340b01=this[_0x53ce23(0x210)][_0x53ce23(0x27a)]()[_0x53ce23(0x231)]();if(this['_inputComboSkillSpecials'][_0x340b01]){const _0x3416ba=this[_0x53ce23(0x2fb)][_0x340b01];return this[_0x53ce23(0x273)][_0x53ce23(0x264)](_0x3416ba),SoundManager[_0x53ce23(0x29c)](_0x53ce23(0x2e1)),this['_inputComboSkillSpecialSkillID']=_0x3416ba,!![];}return SoundManager[_0x53ce23(0x29c)]('input'),this[_0x53ce23(0x273)]['length']>=this[_0x53ce23(0x25b)];},Game_Temp[_0x2f7310(0x23a)][_0x2f7310(0x283)]=function(){const _0x332644=_0x2f7310;this[_0x332644(0x1fb)]={'user':null,'skillID':-0x1};},Game_Temp[_0x2f7310(0x23a)][_0x2f7310(0x21a)]=function(_0x536c18,_0x38fc4e){const _0x34c030=_0x2f7310;if(this['_inputComboSkillCostBypass']===undefined)this[_0x34c030(0x283)]();this[_0x34c030(0x1fb)][_0x34c030(0x267)]=_0x536c18,this[_0x34c030(0x1fb)][_0x34c030(0x2a6)]=_0x38fc4e;},Game_Temp[_0x2f7310(0x23a)][_0x2f7310(0x20b)]=function(_0x3bea4e,_0x5376dc){const _0x51793e=_0x2f7310;if(this[_0x51793e(0x1fb)]===undefined)this[_0x51793e(0x283)]();return this[_0x51793e(0x1fb)][_0x51793e(0x267)]===_0x3bea4e&&this[_0x51793e(0x1fb)][_0x51793e(0x2a6)]===_0x5376dc;},VisuMZ['InputComboSkills'][_0x2f7310(0x2f5)]=Game_Battler[_0x2f7310(0x23a)]['useItem'],Game_Battler['prototype'][_0x2f7310(0x2a8)]=function(_0x3fadf0){const _0x3e8adb=_0x2f7310;$gameTemp[_0x3e8adb(0x20b)](this,_0x3fadf0?_0x3fadf0['id']:0x0)&&(DataManager[_0x3e8adb(0x286)]=!![]),VisuMZ['InputComboSkills'][_0x3e8adb(0x2f5)]['call'](this,_0x3fadf0),DataManager[_0x3e8adb(0x286)]=![];},VisuMZ['InputComboSkills'][_0x2f7310(0x2f6)]=DataManager['isSkill'],DataManager[_0x2f7310(0x205)]=function(_0x26b2d4){const _0x41c263=_0x2f7310;if(DataManager[_0x41c263(0x286)])return![];return VisuMZ[_0x41c263(0x34c)][_0x41c263(0x2f6)][_0x41c263(0x328)](this,_0x26b2d4);},Game_Temp[_0x2f7310(0x23a)]['noValidInputComboSkills']=function(){const _0xbadf2b=_0x2f7310,_0x15c473=BattleManager[_0xbadf2b(0x34b)];if(!_0x15c473)return!![];const _0x3fbe53=VisuMZ[_0xbadf2b(0x34c)]['Keys'][_0xbadf2b(0x2af)](),_0x4ea1a3=_0x3fbe53[_0xbadf2b(0x239)](_0x48c030=>this[_0xbadf2b(0x279)](_0x48c030))[_0xbadf2b(0x28d)](_0x4bb77c=>this['getInputComboSkillsKey'](_0x4bb77c))[_0xbadf2b(0x28d)](_0x2f9680=>$dataSkills[_0x2f9680])['filter'](_0xe4589a=>_0x15c473['canUse'](_0xe4589a));return _0x4ea1a3[_0xbadf2b(0x1df)]<=0x0;},Game_Switches[_0x2f7310(0x23a)][_0x2f7310(0x2df)]=function(_0x57edb7){const _0x4f7ebf=_0x2f7310,_0x5b1460=VisuMZ['InputComboSkills']['Settings'][_0x4f7ebf(0x30c)];if(_0x5b1460<=0x0)return;const _0xe3195e=$gameTemp[_0x4f7ebf(0x1cc)]===_0x57edb7&&$gameTemp[_0x4f7ebf(0x273)][_0x4f7ebf(0x1df)]>0x0;this[_0x4f7ebf(0x33a)](_0x5b1460,_0xe3195e);},VisuMZ[_0x2f7310(0x34c)][_0x2f7310(0x22b)]=Game_Action[_0x2f7310(0x23a)][_0x2f7310(0x2cd)],Game_Action['prototype']['applyGlobal']=function(){const _0x227f88=_0x2f7310;VisuMZ[_0x227f88(0x34c)][_0x227f88(0x22b)][_0x227f88(0x328)](this),$gameTemp['clearInputComboSkillCostBypass'](),this[_0x227f88(0x26b)]();},Game_Action[_0x2f7310(0x23a)][_0x2f7310(0x26b)]=function(){const _0x5c6d37=_0x2f7310;if(!$gameTemp[_0x5c6d37(0x234)]())return;if(this[_0x5c6d37(0x1e2)]()!==$gameTemp[_0x5c6d37(0x1cc)]){if(_0x5c6d37(0x1f4)===_0x5c6d37(0x242))_0x4e46b5(_0x5c6d37(0x2d5)[_0x5c6d37(0x1dc)](_0x359ba4,_0x1c1bdd)),_0x1d1681[_0x5c6d37(0x219)]();else{$gameTemp[_0x5c6d37(0x23d)]();return;}}this[_0x5c6d37(0x1e2)]()[_0x5c6d37(0x27b)]=!![];},VisuMZ[_0x2f7310(0x34c)]['Game_BattlerBase_meetsSkillConditions']=Game_BattlerBase[_0x2f7310(0x23a)][_0x2f7310(0x296)],Game_BattlerBase[_0x2f7310(0x23a)]['meetsSkillConditions']=function(_0x513d89){const _0x3b01dd=_0x2f7310;if(!this[_0x3b01dd(0x28c)](_0x513d89))return![];return VisuMZ[_0x3b01dd(0x34c)][_0x3b01dd(0x1db)][_0x3b01dd(0x328)](this,_0x513d89);},Game_BattlerBase[_0x2f7310(0x23a)][_0x2f7310(0x28c)]=function(_0x12abad){const _0x11dfbe=_0x2f7310;if(!_0x12abad)return![];const _0x45f249=VisuMZ[_0x11dfbe(0x34c)][_0x11dfbe(0x1fd)],_0x27774e=_0x12abad[_0x11dfbe(0x314)]||'';if(_0x27774e[_0x11dfbe(0x2c1)](_0x45f249[_0x11dfbe(0x2b2)])){if(_0x11dfbe(0x2e4)!==_0x11dfbe(0x2e4)){const _0x489ce0=new _0x2ea0d2();this[_0x11dfbe(0x278)][_0x11dfbe(0x2e5)](_0x489ce0);const _0x5bfdbe=_0x56472d[_0x11dfbe(0x1ca)](_0x1fd2f6[_0x11dfbe(0x2b1)]);_0x489ce0['bitmap']=_0x5bfdbe;}else{if(!this[_0x11dfbe(0x230)]())return![];if(!SceneManager[_0x11dfbe(0x240)]())return![];const _0x1fb3ca=SceneManager['_scene'][_0x11dfbe(0x1ff)];if(_0x1fb3ca&&!_0x1fb3ca[_0x11dfbe(0x1f7)])return![];return this['_checkInputComboOnlySkill'];}}return!![];},Game_Actor['prototype'][_0x2f7310(0x2cc)]=function(){const _0x258c25=_0x2f7310;if($gameTemp[_0x258c25(0x1cc)]!==this)return;$gameSwitches['updateInputComboSkillSwitch'](this),this[_0x258c25(0x27f)](),this['clearInputComboSkillQueue']();},Game_Actor[_0x2f7310(0x23a)]['forceActionInputComboSkill']=function(){const _0x2603e0=_0x2f7310;Sprite_Actor[_0x2603e0(0x2f3)]&&(this[_0x2603e0(0x2e2)]=$gameTemp['_inputComboSkillQueue'][_0x2603e0(0x1df)]>0x0);while($gameTemp['_inputComboSkillQueue']['length']>0x0){const _0x5a7381=$gameTemp[_0x2603e0(0x273)][_0x2603e0(0x2d8)](),_0x4b2703=$dataSkills[_0x5a7381];if(!_0x4b2703)continue;this[_0x2603e0(0x2c2)]=!![];if(!this[_0x2603e0(0x334)](_0x4b2703)){this[_0x2603e0(0x2c2)]=![];continue;}if(this[_0x2603e0(0x26a)](_0x4b2703['id']))continue;if(this['isSkillTypeSealed'](_0x4b2703[_0x2603e0(0x2d1)]))continue;const _0x5eaec5=BattleManager[_0x2603e0(0x2fd)][0x0],_0x3321c5=$gameTroop[_0x2603e0(0x28e)]()[_0x2603e0(0x208)](_0x5eaec5);this[_0x2603e0(0x221)](_0x5a7381,_0x3321c5),BattleManager[_0x2603e0(0x221)](this),$gameTemp[_0x2603e0(0x21a)](this,_0x4b2703['id']);Sprite_Actor['INPUT_COMBO_REDUCE_BACK_FORTH']&&(this[_0x2603e0(0x206)]=!![]);return;}if(Sprite_Actor[_0x2603e0(0x2f3)]){if(_0x2603e0(0x232)===_0x2603e0(0x272))return _0x10b364(_0x208b16['$1']);else this['_bypassStepBackward_InputComboSkill']=![];}},Game_Actor['prototype']['clearInputComboSkillQueue']=function(){const _0x4cb89e=_0x2f7310;if($gameTemp[_0x4cb89e(0x273)][_0x4cb89e(0x1df)]>=0x0)return;$gameTemp['clearInputComboSkills']();},Game_Actor[_0x2f7310(0x23a)][_0x2f7310(0x2d2)]=function(){const _0x16cbb6=_0x2f7310,_0x20e00a=Object['keys']($gameTemp['_inputComboSkillSpecials']);if(_0x20e00a[_0x16cbb6(0x1df)]>0x0){if(_0x16cbb6(0x2bb)!=='aNKml')this[_0x16cbb6(0x2ac)]=this['_skill']['description']||'';else{const _0x11a7fa=_0x20e00a[Math[_0x16cbb6(0x1d9)](_0x20e00a['length'])],_0x5eb906=VisuMZ['InputComboSkills'][_0x16cbb6(0x1d7)](_0x11a7fa);this[_0x16cbb6(0x29b)](_0x5eb906);}}else this[_0x16cbb6(0x2e6)]();},Game_Actor['prototype']['autoQueueRandomInputComboSkills']=function(){const _0x45f72c=_0x2f7310,_0x56555d=SceneManager[_0x45f72c(0x23c)]['_logWindow'];if(!_0x56555d[_0x45f72c(0x1f7)])return;const _0x26471d=VisuMZ[_0x45f72c(0x34c)][_0x45f72c(0x25c)][_0x45f72c(0x2af)](),_0x260fc4=_0x26471d[_0x45f72c(0x239)](_0x1b8414=>$gameTemp[_0x45f72c(0x279)](_0x1b8414))[_0x45f72c(0x239)](_0x1d5c02=>this['canUse']($dataSkills[$gameTemp[_0x45f72c(0x23e)](_0x1d5c02)]));if(_0x260fc4[_0x45f72c(0x1df)]>0x0){const _0xbb58d0=_0x260fc4[Math[_0x45f72c(0x1d9)](_0x260fc4[_0x45f72c(0x1df)])];$gameTemp[_0x45f72c(0x235)](_0xbb58d0),setTimeout(this[_0x45f72c(0x2e6)][_0x45f72c(0x263)](this),0xc8);}},Game_Actor['prototype'][_0x2f7310(0x29b)]=function(_0x1bdb70){const _0x37bc7f=_0x2f7310,_0x525ea1=SceneManager[_0x37bc7f(0x23c)][_0x37bc7f(0x1ff)];if(!_0x525ea1[_0x37bc7f(0x1f7)])return;const _0x588507=_0x1bdb70[_0x37bc7f(0x2d8)](),_0x249a3d=$dataSkills[$gameTemp['getInputComboSkillsKey'](_0x588507)];this[_0x37bc7f(0x2b5)](_0x249a3d)?($gameTemp[_0x37bc7f(0x235)](_0x588507),setTimeout(this[_0x37bc7f(0x29b)][_0x37bc7f(0x263)](this,_0x1bdb70),0xc8)):setTimeout(this['autoQueueRandomInputComboSkills'][_0x37bc7f(0x263)](this),0xc8);},VisuMZ['InputComboSkills'][_0x2f7310(0x1d7)]=function(_0x168319){const _0x97216e=_0x2f7310,_0x4ee958=[],_0x544ccd=_0x168319[_0x97216e(0x332)]('');for(const _0x30b472 of _0x544ccd){if(_0x30b472==='2')_0x4ee958[_0x97216e(0x264)](_0x97216e(0x211));if(_0x30b472==='4')_0x4ee958[_0x97216e(0x264)](_0x97216e(0x30d));if(_0x30b472==='6')_0x4ee958[_0x97216e(0x264)](_0x97216e(0x343));if(_0x30b472==='8')_0x4ee958[_0x97216e(0x264)]('up');if(_0x30b472==='Z')_0x4ee958[_0x97216e(0x264)]('ok');if(_0x30b472==='X')_0x4ee958[_0x97216e(0x264)](_0x97216e(0x203));if(_0x30b472==='Q')_0x4ee958[_0x97216e(0x264)](_0x97216e(0x290));if(_0x30b472==='W')_0x4ee958[_0x97216e(0x264)](_0x97216e(0x2ba));if(_0x30b472==='S')_0x4ee958[_0x97216e(0x264)](_0x97216e(0x2d8));}return _0x4ee958;},VisuMZ[_0x2f7310(0x34c)]['Scene_Battle_createDisplayObjects']=Scene_Battle[_0x2f7310(0x23a)][_0x2f7310(0x1d0)],Scene_Battle[_0x2f7310(0x23a)][_0x2f7310(0x1d0)]=function(){const _0x137b90=_0x2f7310;VisuMZ['InputComboSkills']['Scene_Battle_createDisplayObjects']['call'](this),this[_0x137b90(0x2a1)]();},Scene_Battle[_0x2f7310(0x23a)][_0x2f7310(0x2a1)]=function(){const _0x2bdde8=_0x2f7310;this['createInputComboSkillsUiContainer'](),this[_0x2bdde8(0x259)](),this[_0x2bdde8(0x245)](),this['createInputComboSkillsUiQueueList'](),this[_0x2bdde8(0x306)](),this[_0x2bdde8(0x261)]();},Scene_Battle[_0x2f7310(0x23a)][_0x2f7310(0x2d3)]=function(){const _0x411998=_0x2f7310;this['_inputComboSkillsUiContainer']=new Sprite(),this[_0x411998(0x2e5)](this[_0x411998(0x278)]),this[_0x411998(0x278)]['opacity']=0x0;},Scene_Battle['prototype'][_0x2f7310(0x259)]=function(){const _0x28490f=_0x2f7310,_0x3c5670=VisuMZ['InputComboSkills'][_0x28490f(0x322)]['UI'];if(_0x3c5670[_0x28490f(0x249)]){if('oBmlr'===_0x28490f(0x2f2))this[_0x28490f(0x225)]=![],this[_0x28490f(0x25a)]=![];else{const _0x4c9b51=new Sprite();this[_0x28490f(0x278)][_0x28490f(0x2e5)](_0x4c9b51);const _0x51312b=new Bitmap(Graphics['width'],Graphics[_0x28490f(0x31b)]);_0x4c9b51[_0x28490f(0x22c)]=_0x51312b;const _0x46fa60=_0x3c5670[_0x28490f(0x249)];_0x46fa60[_0x28490f(0x328)](_0x4c9b51[_0x28490f(0x22c)]);}}if(_0x3c5670[_0x28490f(0x2b1)]!==''){const _0x16a14a=new Sprite();this[_0x28490f(0x278)][_0x28490f(0x2e5)](_0x16a14a);const _0x1e3347=ImageManager[_0x28490f(0x1ca)](_0x3c5670[_0x28490f(0x2b1)]);_0x16a14a['bitmap']=_0x1e3347;}},Scene_Battle['prototype'][_0x2f7310(0x245)]=function(){const _0x22bfa3=_0x2f7310;this['_inputComboSkillButtons']={};const _0xb04d87=VisuMZ[_0x22bfa3(0x34c)][_0x22bfa3(0x25c)]['clone']();for(const _0x4e03ed of _0xb04d87){const _0x597038=new Sprite_InputComboButton(_0x4e03ed);this[_0x22bfa3(0x278)][_0x22bfa3(0x2e5)](_0x597038),this[_0x22bfa3(0x24e)][_0x4e03ed]=_0x597038;}},Scene_Battle[_0x2f7310(0x23a)][_0x2f7310(0x1e0)]=function(){const _0x9fde26=_0x2f7310;this[_0x9fde26(0x2a7)]=new Sprite_InputComboQueueList(),this['addChild'](this[_0x9fde26(0x2a7)]);},Scene_Battle[_0x2f7310(0x23a)]['createInputComboSkillsUiTooltipWindow']=function(){const _0x2ffa9e=_0x2f7310;if(!Imported[_0x2ffa9e(0x1e5)])return;if(!Window_InputComboSkillsTooltip[_0x2ffa9e(0x1f2)])return;this['_inputComboSkillsUiTooltipWindow']=new Window_InputComboSkillsTooltip(),this[_0x2ffa9e(0x2e5)](this[_0x2ffa9e(0x2e7)]);},Scene_Battle[_0x2f7310(0x23a)]['checkInputComboSkillsIncompatibility']=function(){const _0x5904fd=_0x2f7310;if(Imported['VisuMZ_3_AutoSkillTriggers']&&VisuMZ['AutoSkillTriggers'][_0x5904fd(0x2c5)]<1.12){if(_0x5904fd(0x1eb)!==_0x5904fd(0x1eb)){const _0x103470=this['width']*(_0x5a0718[_0x5904fd(0x30b)]||0.01),_0x3d64b4=this[_0x5904fd(0x31b)]*(_0x122db5[_0x5904fd(0x30b)]||0.01);this['x']=_0x1ab476[_0x5904fd(0x243)](this['x'][_0x5904fd(0x317)](0x0,_0x2867f6['width']-_0x103470)),this['y']=_0x55a287[_0x5904fd(0x243)](this['y'][_0x5904fd(0x317)](0x0,_0x79e469[_0x5904fd(0x31b)]-_0x3d64b4));}else{const _0x113bfd='VisuStella\x20MZ\x20Auto\x20Skill\x20Triggers\x20needs\x20to\x20be\x20updated!';alert(_0x113bfd),SceneManager[_0x5904fd(0x219)]();}}},VisuMZ[_0x2f7310(0x34c)][_0x2f7310(0x2d7)]=Scene_Battle['prototype'][_0x2f7310(0x307)],Scene_Battle[_0x2f7310(0x23a)][_0x2f7310(0x307)]=function(){const _0x1e1ffa=_0x2f7310;VisuMZ[_0x1e1ffa(0x34c)]['Scene_Battle_update'][_0x1e1ffa(0x328)](this);if(this[_0x1e1ffa(0x257)]())this[_0x1e1ffa(0x323)]();this['updateInputComboSkillsUiOpacity'](),this[_0x1e1ffa(0x2ee)]();},Scene_Battle[_0x2f7310(0x23a)]['updateInputComboSkills']=function(){const _0x3e430c=_0x2f7310;if($gameTemp[_0x3e430c(0x338)]()){this[_0x3e430c(0x1ff)][_0x3e430c(0x2c7)]();return;}const _0x51fb75=BattleManager[_0x3e430c(0x34b)],_0x27e0d1=VisuMZ[_0x3e430c(0x34c)]['Keys']['clone']();if(_0x51fb75[_0x3e430c(0x2bd)]())return;for(const _0x430cd5 of _0x27e0d1){if(!$gameTemp[_0x3e430c(0x279)](_0x430cd5))continue;const _0x463c54=$dataSkills[$gameTemp[_0x3e430c(0x23e)](_0x430cd5)];if(!_0x463c54)continue;if(!_0x51fb75[_0x3e430c(0x2b5)](_0x463c54))continue;if(!Input[_0x3e430c(0x2ef)](_0x430cd5))continue;this[_0x3e430c(0x24e)][_0x430cd5][_0x3e430c(0x295)]=0x4,$gameTemp[_0x3e430c(0x235)](_0x430cd5);break;}},Scene_Battle[_0x2f7310(0x23a)][_0x2f7310(0x257)]=function(){const _0x329d06=_0x2f7310;return this[_0x329d06(0x1ff)]&&this[_0x329d06(0x1ff)][_0x329d06(0x1f7)];},Scene_Battle['prototype']['updateInputComboSkillsUiOpacity']=function(){const _0x3f9043=_0x2f7310,_0x174e08=VisuMZ[_0x3f9043(0x34c)][_0x3f9043(0x322)]['UI'],_0x4e23c5=this[_0x3f9043(0x257)]();if(this[_0x3f9043(0x278)]){if(_0x3f9043(0x2ae)!==_0x3f9043(0x2ae)){const _0x1d2b91=_0x5e496e[_0x3f9043(0x34c)]['Settings'][_0x3f9043(0x1e7)],_0x3e153d={'name':_0x1d2b91[_0x3f9043(0x1ee)[_0x3f9043(0x1dc)](_0x1ae8d2)]||'','volume':_0x1d2b91['%1Volume'[_0x3f9043(0x1dc)](_0x26c061)]||0x0,'pitch':_0x1d2b91[_0x3f9043(0x2ad)[_0x3f9043(0x1dc)](_0x214f65)]||0x0,'pan':_0x1d2b91[_0x3f9043(0x248)[_0x3f9043(0x1dc)](_0x15b385)]||0x0};_0x34da1e[_0x3f9043(0x266)](_0x3e153d);}else{const _0xa9c0f8=_0x174e08[_0x3f9043(0x2aa)]*(_0x4e23c5?0x1:-0x1);this[_0x3f9043(0x278)]['opacity']+=_0xa9c0f8;}}},Scene_Battle[_0x2f7310(0x23a)]['updateInputComboSkillQueue']=function(){const _0x420355=_0x2f7310;if(!BattleManager[_0x420355(0x34b)])return;if(!BattleManager[_0x420355(0x34b)][_0x420355(0x230)]())return;if(!BattleManager[_0x420355(0x34b)][_0x420355(0x27b)])return;BattleManager[_0x420355(0x34b)][_0x420355(0x27b)]=undefined,BattleManager[_0x420355(0x34b)][_0x420355(0x2cc)]();},VisuMZ[_0x2f7310(0x34c)][_0x2f7310(0x216)]=Scene_Battle[_0x2f7310(0x23a)][_0x2f7310(0x22f)],Scene_Battle[_0x2f7310(0x23a)][_0x2f7310(0x22f)]=function(){const _0x248894=_0x2f7310;if(this[_0x248894(0x257)]())return![];return VisuMZ[_0x248894(0x34c)][_0x248894(0x216)][_0x248894(0x328)](this);},Sprite_Actor[_0x2f7310(0x2f3)]=VisuMZ[_0x2f7310(0x34c)][_0x2f7310(0x322)]['ReduceBackForth']??!![],VisuMZ['InputComboSkills'][_0x2f7310(0x255)]=Sprite_Actor[_0x2f7310(0x23a)][_0x2f7310(0x344)],Sprite_Actor[_0x2f7310(0x23a)][_0x2f7310(0x344)]=function(){const _0x7112de=_0x2f7310;if(Sprite_Actor[_0x7112de(0x2f3)]&&this[_0x7112de(0x331)]){if(this[_0x7112de(0x331)]['_bypassStepForward_InputComboSkill']){if(_0x7112de(0x2b8)===_0x7112de(0x2b8))return;else{if(!this[_0x7112de(0x28c)](_0x16c36c))return![];return _0x53a9f9['InputComboSkills'][_0x7112de(0x1db)]['call'](this,_0x59276a);}}}VisuMZ[_0x7112de(0x34c)][_0x7112de(0x255)]['call'](this);},VisuMZ[_0x2f7310(0x34c)]['Sprite_Actor_stepBack']=Sprite_Actor[_0x2f7310(0x23a)][_0x2f7310(0x250)],Sprite_Actor['prototype'][_0x2f7310(0x250)]=function(){const _0x1f1274=_0x2f7310;if(Sprite_Actor['INPUT_COMBO_REDUCE_BACK_FORTH']&&this[_0x1f1274(0x331)]){if('miqPY'!==_0x1f1274(0x1da)){if(this[_0x1f1274(0x331)][_0x1f1274(0x2e2)])return;}else return this[_0x1f1274(0x1ff)]&&this[_0x1f1274(0x1ff)][_0x1f1274(0x1f7)];}VisuMZ[_0x1f1274(0x34c)][_0x1f1274(0x1f9)][_0x1f1274(0x328)](this);},VisuMZ[_0x2f7310(0x34c)][_0x2f7310(0x32b)]=BattleManager[_0x2f7310(0x2b9)],BattleManager[_0x2f7310(0x2b9)]=function(){const _0x402e94=_0x2f7310;if(Sprite_Actor[_0x402e94(0x2f3)]&&this[_0x402e94(0x34b)]&&this[_0x402e94(0x34b)]['isActor']()){if(_0x402e94(0x24c)===_0x402e94(0x24c))this[_0x402e94(0x34b)][_0x402e94(0x206)]=this[_0x402e94(0x34b)]['_bypassStepBackward_InputComboSkill'],this[_0x402e94(0x34b)][_0x402e94(0x2e2)]=![];else{this[_0x402e94(0x2cf)][_0x402e94(0x281)](),this[_0x402e94(0x2ec)]();if(this[_0x402e94(0x2ac)][_0x402e94(0x1df)]>0x0){this['resizeWindow']();const _0x45c83c=this[_0x402e94(0x291)]();this[_0x402e94(0x271)](this[_0x402e94(0x2ac)],_0x45c83c['x'],_0x45c83c['y'],_0x45c83c[_0x402e94(0x1d6)]),this[_0x402e94(0x2ff)]();}else this[_0x402e94(0x2f8)]();}}const _0x4fb020=this[_0x402e94(0x34b)];VisuMZ[_0x402e94(0x34c)][_0x402e94(0x32b)][_0x402e94(0x328)](this),$gameSwitches[_0x402e94(0x2df)](_0x4fb020);};function Sprite_InputComboButton(){const _0x45c6d9=_0x2f7310;this[_0x45c6d9(0x1cb)](...arguments);}Sprite_InputComboButton[_0x2f7310(0x23a)]=Object[_0x2f7310(0x302)](Sprite_Clickable[_0x2f7310(0x23a)]),Sprite_InputComboButton['prototype']['constructor']=Sprite_InputComboButton,Sprite_InputComboButton['KEY_PRESS_OFFSET_X']=VisuMZ[_0x2f7310(0x34c)][_0x2f7310(0x322)]['UI'][_0x2f7310(0x2fa)]??-0x4,Sprite_InputComboButton[_0x2f7310(0x31a)]=VisuMZ[_0x2f7310(0x34c)][_0x2f7310(0x322)]['UI'][_0x2f7310(0x209)]??+0x4,Sprite_InputComboButton[_0x2f7310(0x23a)]['initialize']=function(_0x549035){const _0x4f75dd=_0x2f7310;this[_0x4f75dd(0x1f0)]=_0x549035,Sprite_Clickable['prototype'][_0x4f75dd(0x1cb)]['call'](this),this['initMembers'](),this[_0x4f75dd(0x20d)](),this[_0x4f75dd(0x30e)](),this[_0x4f75dd(0x2c4)](),this[_0x4f75dd(0x34f)]();},Sprite_InputComboButton[_0x2f7310(0x23a)][_0x2f7310(0x1de)]=function(){const _0x21d30b=_0x2f7310,_0x23c094=VisuMZ[_0x21d30b(0x34c)][_0x21d30b(0x322)]['UI'],_0x10722c=_0x21d30b(0x26f)[_0x21d30b(0x1dc)](this[_0x21d30b(0x1f0)]);_0x23c094[_0x10722c]?'fIYDz'!==_0x21d30b(0x288)?_0x3a6f64['_scene']['_logWindow'][_0x21d30b(0x2c7)]():this[_0x21d30b(0x33e)]=_0x23c094[_0x10722c]():_0x21d30b(0x227)===_0x21d30b(0x2c3)?(this['createInputComboSkillsUiContainer'](),this[_0x21d30b(0x259)](),this[_0x21d30b(0x245)](),this[_0x21d30b(0x1e0)](),this[_0x21d30b(0x306)](),this[_0x21d30b(0x261)]()):this[_0x21d30b(0x33e)]=new Rectangle(0x0,0x0,0x0,0x0),this['x']=this['_dimensions']['x']+(_0x23c094[_0x21d30b(0x201)]||0x0),this['y']=this[_0x21d30b(0x33e)]['y']+(_0x23c094[_0x21d30b(0x204)]||0x0),this[_0x21d30b(0x25d)]['x']=0.5,this[_0x21d30b(0x25d)]['y']=0.5,this[_0x21d30b(0x28a)]['x']=_0x23c094[_0x21d30b(0x28b)],this['scale']['y']=_0x23c094[_0x21d30b(0x28b)],this[_0x21d30b(0x304)]=0x0,this['_lastActor']=null,this['_lastSkillID']=null,this[_0x21d30b(0x313)]=null;},Sprite_InputComboButton[_0x2f7310(0x23a)][_0x2f7310(0x20d)]=function(){const _0x1ad549=_0x2f7310,_0x220e77=![],_0x5a46dd=_0x220e77?_0x1ad549(0x2dd):ColorManager[_0x1ad549(0x1e9)]();this[_0x1ad549(0x22c)]=new Bitmap(this['_dimensions'][_0x1ad549(0x1d6)],this[_0x1ad549(0x33e)]['height']),this['bitmap']['fillRect'](0x0,0x0,this[_0x1ad549(0x22c)]['width'],this[_0x1ad549(0x22c)][_0x1ad549(0x31b)],_0x5a46dd);},Sprite_InputComboButton[_0x2f7310(0x23a)][_0x2f7310(0x30e)]=function(){const _0x377661=_0x2f7310,_0x2d6e24=VisuMZ[_0x377661(0x34c)][_0x377661(0x322)]['UI'],_0x117cc7=_0x2d6e24['%1BackgroundImage'['format'](this[_0x377661(0x1f0)])];if(!_0x117cc7)return;const _0x404cbf=new Sprite();this[_0x377661(0x2e5)](_0x404cbf),_0x404cbf[_0x377661(0x22c)]=ImageManager['loadSystem'](_0x117cc7),_0x404cbf[_0x377661(0x25d)]['x']=0.5,_0x404cbf[_0x377661(0x25d)]['y']=0.5,_0x404cbf[_0x377661(0x28a)]['x']=0x1/(this[_0x377661(0x28a)]['x']||0.01),_0x404cbf[_0x377661(0x28a)]['y']=0x1/(this['scale']['y']||0.01);},Sprite_InputComboButton['prototype']['createContentSprite']=function(){const _0xac3d68=_0x2f7310;this[_0xac3d68(0x1ea)]=new Sprite(),this[_0xac3d68(0x2e5)](this[_0xac3d68(0x1ea)]),this['_contentSprite'][_0xac3d68(0x25d)]['x']=0.5,this[_0xac3d68(0x1ea)][_0xac3d68(0x25d)]['y']=0.5;},Sprite_InputComboButton[_0x2f7310(0x23a)][_0x2f7310(0x34f)]=function(){const _0x430b12=_0x2f7310,_0x1468cd=$gameSystem[_0x430b12(0x1f6)](),_0x9a7c66=this['_dimensions'][_0x430b12(0x1d6)]+_0x1468cd*0x2,_0x487a41=this[_0x430b12(0x33e)]['height']+_0x1468cd*0x2,_0x1faa31=new Rectangle(0x0,0x0,_0x9a7c66,_0x487a41);this[_0x430b12(0x1fa)]=new Window_Base(_0x1faa31);},Sprite_InputComboButton[_0x2f7310(0x23a)][_0x2f7310(0x307)]=function(){const _0xe44941=_0x2f7310;Sprite_Clickable[_0xe44941(0x23a)][_0xe44941(0x307)][_0xe44941(0x328)](this),this[_0xe44941(0x1e1)](),this[_0xe44941(0x34e)]();if(this[_0xe44941(0x287)]())this[_0xe44941(0x1cd)]();},Sprite_InputComboButton[_0x2f7310(0x23a)][_0x2f7310(0x1e1)]=function(){const _0x47120e=_0x2f7310;this[_0x47120e(0x304)]=this[_0x47120e(0x26c)]();},Sprite_InputComboButton[_0x2f7310(0x23a)][_0x2f7310(0x26c)]=function(){const _0x1ac771=_0x2f7310;if(!$gameTemp[_0x1ac771(0x279)](this['_key']))return 0x0;const _0x2de08e=VisuMZ[_0x1ac771(0x34c)][_0x1ac771(0x322)]['UI'][_0x1ac771(0x212)],_0x3e6905=$gameTemp[_0x1ac771(0x23e)](this[_0x1ac771(0x1f0)]);if(_0x3e6905===null)return _0x2de08e;const _0x411bc0=BattleManager[_0x1ac771(0x34b)];if(!_0x411bc0)return _0x2de08e;const _0x2b2e81=$dataSkills[_0x3e6905];if(!_0x411bc0[_0x1ac771(0x2b5)](_0x2b2e81))return _0x2de08e;return 0xff;},Sprite_InputComboButton[_0x2f7310(0x23a)][_0x2f7310(0x34e)]=function(){const _0x1f8b64=_0x2f7310,_0xa73df5=VisuMZ[_0x1f8b64(0x34c)][_0x1f8b64(0x322)]['UI'];this['x']=this[_0x1f8b64(0x33e)]['x']+(_0xa73df5[_0x1f8b64(0x201)]||0x0),this['y']=this[_0x1f8b64(0x33e)]['y']+(_0xa73df5[_0x1f8b64(0x204)]||0x0);this['_pressed']&&(this[_0x1f8b64(0x295)]=0x4);if(this['_pressedDuration']-->0x0){if('egRuM'===_0x1f8b64(0x217)){const _0x4dae37=_0x2c0b6e+_0x19a15e,_0x65d760=_0x1b97a4+_0x2eadd1,_0x39f73f=this[_0x1f8b64(0x342)];_0x39f73f[_0x1f8b64(0x2eb)](),_0x39f73f[_0x1f8b64(0x21b)]=_0x4e3696,_0x39f73f[_0x1f8b64(0x2c0)](),_0x39f73f[_0x1f8b64(0x2cb)](_0x3e980a+_0x432891,_0x521476),_0x39f73f[_0x1f8b64(0x26e)](_0x4dae37-_0x31fe29,_0x8063),_0x39f73f[_0x1f8b64(0x30a)](_0x4dae37,_0x16de4e,_0x4dae37,_0x22dfd9+_0x1574d6),_0x39f73f[_0x1f8b64(0x26e)](_0x4dae37,_0xaf105+_0x4fd655-_0xc32a6f),_0x39f73f[_0x1f8b64(0x30a)](_0x4dae37,_0x65d760,_0x4dae37-_0x41db2f,_0x65d760),_0x39f73f[_0x1f8b64(0x26e)](_0x39bd6c+_0xaff0fd,_0x65d760),_0x39f73f[_0x1f8b64(0x30a)](_0xddc8e,_0x65d760,_0x29d2d6,_0x65d760-_0x1f728b),_0x39f73f['lineTo'](_0x25fef4,_0x4d17df+_0x2aa907),_0x39f73f[_0x1f8b64(0x30a)](_0x5f361b,_0x10bc8c,_0x90b8eb+_0x49a480,_0x23392),_0x39f73f[_0x1f8b64(0x349)](),_0x39f73f[_0x1f8b64(0x308)](),this[_0x1f8b64(0x32a)]['update']();}else this['x']+=Sprite_InputComboButton[_0x1f8b64(0x2ab)],this['y']+=Sprite_InputComboButton[_0x1f8b64(0x31a)];}},Sprite_InputComboButton[_0x2f7310(0x23a)][_0x2f7310(0x1cd)]=function(){const _0x56bcf8=_0x2f7310;this['_lastActor']=BattleManager['_subject'],this['_lastSkillID']=$gameTemp[_0x56bcf8(0x23e)](this[_0x56bcf8(0x1f0)]),Imported[_0x56bcf8(0x318)]&&Input[_0x56bcf8(0x2c6)]&&(this[_0x56bcf8(0x313)]=Input[_0x56bcf8(0x2c6)]()),this[_0x56bcf8(0x292)]();},Sprite_InputComboButton[_0x2f7310(0x23a)][_0x2f7310(0x287)]=function(){const _0x3d3add=_0x2f7310;if(this[_0x3d3add(0x294)]!==BattleManager[_0x3d3add(0x34b)])return!![];if(this[_0x3d3add(0x2f9)]!==$gameTemp[_0x3d3add(0x23e)](this[_0x3d3add(0x1f0)]))return!![];if(Imported[_0x3d3add(0x318)]&&Input[_0x3d3add(0x2c6)]){if(this['_lastInputType']!==Input[_0x3d3add(0x2c6)]())return!![];}return![];},Sprite_InputComboButton[_0x2f7310(0x23a)][_0x2f7310(0x292)]=function(){const _0x4b8360=_0x2f7310,_0x22531f=VisuMZ[_0x4b8360(0x34c)][_0x4b8360(0x322)]['UI'],_0x38ae35=this[_0x4b8360(0x1fa)][_0x4b8360(0x2cf)],_0x34cf0d=$dataSkills[this[_0x4b8360(0x2f9)]];if(!_0x34cf0d)return;if(!BattleManager[_0x4b8360(0x34b)])return;_0x38ae35['clear'](),this[_0x4b8360(0x1fa)]['resetFontSettings']();const _0xa2408f=this[_0x4b8360(0x2ed)](),_0x3d8e7b=BattleManager['_subject'],_0x52f45e=this[_0x4b8360(0x1fa)][_0x4b8360(0x24d)](_0x3d8e7b,_0x34cf0d);_0x22531f[_0x4b8360(0x33c)]['call'](this['_contentWindow'],_0x34cf0d,_0xa2408f,_0x52f45e),this[_0x4b8360(0x1ea)][_0x4b8360(0x22c)]=_0x38ae35;},Sprite_InputComboButton[_0x2f7310(0x23a)][_0x2f7310(0x2ed)]=function(){const _0x54f6a4=_0x2f7310,_0x41a241=VisuMZ[_0x54f6a4(0x34c)][_0x54f6a4(0x322)]['UI'],_0x5d5c46='%1KeyIcon'[_0x54f6a4(0x1dc)](this['_key']);if(_0x41a241[_0x5d5c46])return _0x41a241[_0x5d5c46];if(Imported['VisuMZ_0_CoreEngine']){const _0x183ea8=TextManager[_0x54f6a4(0x2b6)](this[_0x54f6a4(0x1f0)]);if(_0x183ea8&&_0x183ea8[_0x54f6a4(0x2c1)](/\\I\[(\d+)\]/i))return Number(RegExp['$1']);}return 0x0;},Sprite_InputComboButton[_0x2f7310(0x23a)][_0x2f7310(0x20a)]=function(){const _0xb43741=_0x2f7310;Sprite_Clickable[_0xb43741(0x23a)][_0xb43741(0x20a)][_0xb43741(0x328)](this);const _0x55c7e3=$dataSkills[$gameTemp[_0xb43741(0x23e)](this['_key'])];BattleManager[_0xb43741(0x34b)]&&_0x55c7e3&&$gameTemp[_0xb43741(0x235)](this[_0xb43741(0x1f0)]);const _0x206e26=this[_0xb43741(0x2f0)]();if(_0x206e26){if(_0xb43741(0x275)==='FMGJO')return;else _0x206e26[_0xb43741(0x220)](null);}},Sprite_InputComboButton[_0x2f7310(0x23a)]['isClickEnabled']=function(){const _0x31490c=_0x2f7310;if(this['opacity']<=0x0)return![];const _0x27a36c=SceneManager[_0x31490c(0x23c)];if(!_0x27a36c)return![];if(!_0x27a36c[_0x31490c(0x257)])return![];if(!_0x27a36c[_0x31490c(0x257)]())return![];if(!$gameTemp[_0x31490c(0x279)](this[_0x31490c(0x1f0)]))return![];const _0x5f1740=$dataSkills[$gameTemp[_0x31490c(0x23e)](this['_key'])];if(!_0x5f1740)return![];if(!BattleManager[_0x31490c(0x34b)]['canUse'](_0x5f1740))return![];return Sprite_Clickable[_0x31490c(0x23a)]['isClickEnabled'][_0x31490c(0x328)](this);},Sprite_InputComboButton[_0x2f7310(0x23a)][_0x2f7310(0x2f0)]=function(){const _0x3f5945=_0x2f7310;return SceneManager['_scene'][_0x3f5945(0x2e7)];},Sprite_InputComboButton[_0x2f7310(0x23a)]['onMouseEnter']=function(){const _0xb4fa5f=_0x2f7310;Sprite_Clickable[_0xb4fa5f(0x23a)]['onMouseEnter'][_0xb4fa5f(0x328)](this);const _0x456cdc=this[_0xb4fa5f(0x2f0)]();if(!_0x456cdc)return;const _0x588af8=SceneManager[_0xb4fa5f(0x23c)],_0xc5c8c7=_0x588af8&&_0x588af8[_0xb4fa5f(0x257)]?_0x588af8['canPerformInputComboSkills']():![];if(_0x456cdc&&_0xc5c8c7){const _0xc05406=$dataSkills[this[_0xb4fa5f(0x2f9)]];_0x456cdc[_0xb4fa5f(0x220)](_0xc05406);}},Sprite_InputComboButton[_0x2f7310(0x23a)][_0x2f7310(0x27d)]=function(){const _0x273b6a=_0x2f7310;Sprite_Clickable['prototype'][_0x273b6a(0x27d)][_0x273b6a(0x328)](this);const _0x236977=this[_0x273b6a(0x2f0)]();if(!_0x236977)return;const _0x16c696=$dataSkills[this[_0x273b6a(0x2f9)]],_0x1ec386=SceneManager[_0x273b6a(0x23c)],_0x1b28a5=_0x1ec386&&_0x1ec386['canPerformInputComboSkills']?_0x1ec386[_0x273b6a(0x257)]():![];if(!_0x1b28a5||_0x236977&&_0x236977[_0x273b6a(0x312)]===_0x16c696){if(_0x273b6a(0x2bf)===_0x273b6a(0x309)){if(_0x46e4a0[_0x273b6a(0x273)]['length']>=0x0)return;_0x22d7d0[_0x273b6a(0x23d)]();}else _0x236977[_0x273b6a(0x220)](null);}},Sprite_InputComboButton['prototype']['processTouch']=function(){const _0x30467d=_0x2f7310,_0xff2cc8=this['_hoverState'];this['_hoverState']=this[_0x30467d(0x2f1)]();if(this[_0x30467d(0x214)]!==_0xff2cc8){if(_0x30467d(0x320)!==_0x30467d(0x320))return _0x5bca05['status']&&_0x3b0e7b['description'][_0x30467d(0x2e9)]('['+_0x3f8e0d+']');else this[_0x30467d(0x214)]?'AVgew'===_0x30467d(0x325)?this[_0x30467d(0x24a)]():(_0x531058[_0x30467d(0x34c)][_0x30467d(0x22b)]['call'](this),_0x1d63cf[_0x30467d(0x283)](),this['applyInputComboSkillQueue']()):this[_0x30467d(0x27d)]();}if(this['isClickEnabled']()){if(this[_0x30467d(0x2f1)]())TouchInput[_0x30467d(0x2ef)]()&&(this[_0x30467d(0x225)]=!![],this[_0x30467d(0x31c)]());else{if('cyJrL'!==_0x30467d(0x2a4))this['_pressed']=![],this[_0x30467d(0x25a)]=![];else{if(!_0x348827)return![];if(!_0x8547cc[_0x30467d(0x230)]())return![];if(_0x53567c[_0x30467d(0x1f1)]&&_0x2f07dd['isBTB']())return![];return _0x5411ac[_0x30467d(0x280)](_0x5bd3f7[_0x30467d(0x2dc)]());}}if(this[_0x30467d(0x225)]&&TouchInput[_0x30467d(0x33d)]()){if(_0x30467d(0x310)===_0x30467d(0x310))this[_0x30467d(0x225)]=![],this['onClick']();else{if(!_0x2e6a05)return _0x15f8ff[_0x30467d(0x32f)];if(!_0x381c04[_0x30467d(0x205)](_0x1620e6))return _0x2976cf[_0x30467d(0x32f)];const _0x55e7dc=_0x17c7e6[_0x30467d(0x34c)][_0x30467d(0x1fd)],_0x114217=_0x3c8d48[_0x30467d(0x314)]||'';if(_0x114217['match'](_0x55e7dc[_0x30467d(0x2c8)]))return _0x214803(_0x32ae30['$1']);return _0x52cddf['INPUT_COMBO_ANIMATION'];}}}else this[_0x30467d(0x225)]=![],this[_0x30467d(0x25a)]=![];},Sprite_InputComboButton[_0x2f7310(0x23a)]['isBeingTouched']=function(){const _0x41dff6=_0x2f7310,_0x2d6a9a=new Point(TouchInput['x'],TouchInput['y']),_0x5e136c=this['worldTransform'][_0x41dff6(0x32e)](_0x2d6a9a);return this[_0x41dff6(0x34d)](_0x5e136c['x'],_0x5e136c['y']);};function Sprite_InputComboQueueList(){const _0x3c81a3=_0x2f7310;this[_0x3c81a3(0x1cb)](...arguments);}Sprite_InputComboQueueList[_0x2f7310(0x23a)]=Object[_0x2f7310(0x302)](Sprite[_0x2f7310(0x23a)]),Sprite_InputComboQueueList[_0x2f7310(0x23a)][_0x2f7310(0x2a0)]=Sprite_InputComboQueueList,Sprite_InputComboQueueList[_0x2f7310(0x23a)]['initialize']=function(){const _0x2ee3f9=_0x2f7310;Sprite['prototype'][_0x2ee3f9(0x1cb)][_0x2ee3f9(0x328)](this),this[_0x2ee3f9(0x1de)](),this['createBackgroundSprite'](),this[_0x2ee3f9(0x2c4)](),this[_0x2ee3f9(0x34f)]();},Sprite_InputComboQueueList['prototype'][_0x2f7310(0x1de)]=function(){const _0x11b760=_0x2f7310;this[_0x11b760(0x33e)]=this['queueRectJS'](),this['x']=this[_0x11b760(0x33e)]['x'],this['y']=this[_0x11b760(0x33e)]['y'],this[_0x11b760(0x25d)]['x']=0.5,this[_0x11b760(0x25d)]['y']=0.5,this[_0x11b760(0x1f8)]=[],this['_cacheSpecialSkillID']=0x0,this[_0x11b760(0x244)]=0x0,this['_visibleFrameCount']=0x0,this[_0x11b760(0x304)]=0x0;},Sprite_InputComboQueueList[_0x2f7310(0x23a)][_0x2f7310(0x336)]=function(){const _0x261f0c=_0x2f7310,_0x29f3b5=VisuMZ[_0x261f0c(0x34c)][_0x261f0c(0x322)]['UI'];if(_0x29f3b5[_0x261f0c(0x258)]){if(_0x261f0c(0x228)===_0x261f0c(0x228))return _0x29f3b5['queueListRectJS']();else{const _0x43424f=this[_0x261f0c(0x210)][_0x261f0c(0x27a)]()[_0x261f0c(0x231)]();if(this[_0x261f0c(0x2fb)][_0x43424f]){const _0x4fe875=this['_inputComboSkillSpecials'][_0x43424f];return this['_inputComboSkillQueue']['push'](_0x4fe875),_0x3fbc1d[_0x261f0c(0x29c)](_0x261f0c(0x2e1)),this[_0x261f0c(0x1d3)]=_0x4fe875,!![];}return _0x1b0ea9['playInputComboSkillsSound'](_0x261f0c(0x2e3)),this[_0x261f0c(0x273)][_0x261f0c(0x1df)]>=this[_0x261f0c(0x25b)];}}else{const _0x568fe3=ImageManager['iconHeight'],_0x4ed164=Window_Base[_0x261f0c(0x23a)][_0x261f0c(0x311)](),_0x11d731=$gameSystem[_0x261f0c(0x1f6)](),_0x4d3db7=Math[_0x261f0c(0x243)](Graphics[_0x261f0c(0x1d6)]/0x2),_0x1acf27=Math[_0x261f0c(0x243)](Graphics['height']/0x2),_0x13947f=Math[_0x261f0c(0x330)](Math[_0x261f0c(0x243)](Graphics['width']/0x3),0x168),_0x2dabf2=(_0x568fe3+_0x4ed164+_0x11d731)*0x2;return new Rectangle(_0x4d3db7,_0x1acf27,_0x13947f,_0x2dabf2);}},Sprite_InputComboQueueList[_0x2f7310(0x23a)]['createBackgroundSprite']=function(){const _0x1e5da2=_0x2f7310,_0x45d392=VisuMZ[_0x1e5da2(0x34c)]['Settings']['UI'],_0x4eec93=_0x45d392[_0x1e5da2(0x289)]||'';if(!_0x4eec93)return;const _0x3599d2=new Sprite();this[_0x1e5da2(0x2e5)](_0x3599d2),_0x3599d2[_0x1e5da2(0x22c)]=ImageManager[_0x1e5da2(0x1ca)](_0x4eec93),_0x3599d2[_0x1e5da2(0x25d)]['x']=0.5,_0x3599d2[_0x1e5da2(0x25d)]['y']=0.5,_0x3599d2['scale']['x']=0x1/(this[_0x1e5da2(0x28a)]['x']||0.01),_0x3599d2['scale']['y']=0x1/(this[_0x1e5da2(0x28a)]['y']||0.01);},Sprite_InputComboQueueList[_0x2f7310(0x23a)]['createContentSprite']=function(){const _0x2d2cd5=_0x2f7310;this[_0x2d2cd5(0x1ea)]=new Sprite(),this[_0x2d2cd5(0x2e5)](this['_contentSprite']),this['_contentSprite'][_0x2d2cd5(0x25d)]['x']=0.5,this['_contentSprite'][_0x2d2cd5(0x25d)]['y']=0.5;},Sprite_InputComboQueueList[_0x2f7310(0x23a)][_0x2f7310(0x34f)]=function(){const _0x1f7977=_0x2f7310,_0x39c075=$gameSystem[_0x1f7977(0x1f6)](),_0x34b5af=this[_0x1f7977(0x33e)]['width']+_0x39c075*0x2,_0x4ce781=this['_dimensions'][_0x1f7977(0x31b)]+_0x39c075*0x2,_0x16c88b=new Rectangle(0x0,0x0,_0x34b5af,_0x4ce781);this[_0x1f7977(0x1fa)]=new Window_Base(_0x16c88b);},Sprite_InputComboQueueList[_0x2f7310(0x23a)][_0x2f7310(0x307)]=function(){const _0x6b75e9=_0x2f7310;Sprite[_0x6b75e9(0x23a)]['update'][_0x6b75e9(0x328)](this),this[_0x6b75e9(0x1e1)]();if(this[_0x6b75e9(0x287)]())this['updateBitmap']();},Sprite_InputComboQueueList[_0x2f7310(0x23a)]['updateOpacity']=function(){const _0x53715f=_0x2f7310,_0x4f63b5=VisuMZ[_0x53715f(0x34c)][_0x53715f(0x322)]['UI'][_0x53715f(0x2aa)];this[_0x53715f(0x304)]+=(this['isVisible']()?0x1:-0x1)*_0x4f63b5;},Sprite_InputComboQueueList[_0x2f7310(0x23a)][_0x2f7310(0x1cf)]=function(){const _0x64df66=_0x2f7310,_0x9d25c5=SceneManager[_0x64df66(0x23c)]['_logWindow'];return _0x9d25c5&&_0x9d25c5[_0x64df66(0x1f7)]&&(this[_0x64df66(0x224)]=0x3c),this[_0x64df66(0x224)]-->=0x0;},Sprite_InputComboQueueList['prototype']['updateBitmap']=function(){const _0x1e80b8=_0x2f7310;this['_cacheQueue']=$gameTemp[_0x1e80b8(0x273)][_0x1e80b8(0x2af)](),this[_0x1e80b8(0x1d1)]=$gameTemp['_inputComboSkillSpecialSkillID'],this[_0x1e80b8(0x244)]=$gameTemp[_0x1e80b8(0x25b)],this[_0x1e80b8(0x292)]();},Sprite_InputComboQueueList['prototype'][_0x2f7310(0x287)]=function(){const _0x2c81a9=_0x2f7310,_0x4752fb=SceneManager['_scene'][_0x2c81a9(0x1ff)];if(_0x4752fb&&_0x4752fb[_0x2c81a9(0x1f7)]){if('UJIso'===_0x2c81a9(0x1f3)){if(JSON[_0x2c81a9(0x22d)](this[_0x2c81a9(0x1f8)])!==JSON[_0x2c81a9(0x22d)]($gameTemp['_inputComboSkillQueue']))return!![];if(this[_0x2c81a9(0x1d1)]!==$gameTemp[_0x2c81a9(0x1d3)])return!![];if(this[_0x2c81a9(0x244)]!==$gameTemp[_0x2c81a9(0x25b)])return!![];}else{_0x12f983['prototype']['update'][_0x2c81a9(0x328)](this),this['updateOpacity'](),this[_0x2c81a9(0x34e)]();if(this[_0x2c81a9(0x287)]())this[_0x2c81a9(0x1cd)]();}}return![];},Sprite_InputComboQueueList['prototype'][_0x2f7310(0x292)]=function(){const _0xb99e8e=_0x2f7310,_0x44001f=VisuMZ[_0xb99e8e(0x34c)][_0xb99e8e(0x322)]['UI'],_0x3bf7c7=this['_contentWindow'][_0xb99e8e(0x2cf)];_0x3bf7c7[_0xb99e8e(0x281)](),this['_contentWindow'][_0xb99e8e(0x2c9)]();const _0x5e7376=this[_0xb99e8e(0x1f8)][_0xb99e8e(0x28d)](_0x4c102c=>$dataSkills[_0x4c102c])['remove'](null)[_0xb99e8e(0x31f)](undefined),_0x123e46=$dataSkills[this[_0xb99e8e(0x1d1)]];if(_0x123e46)_0x5e7376[_0xb99e8e(0x236)]();const _0x1bdaf9=this[_0xb99e8e(0x244)],_0x56d24b=_0x44001f[_0xb99e8e(0x24f)];Sprite_InputComboQueueList[_0xb99e8e(0x23a)][_0xb99e8e(0x277)][_0xb99e8e(0x328)](this[_0xb99e8e(0x1fa)],_0x5e7376,_0x123e46,_0x1bdaf9,_0x56d24b),this[_0xb99e8e(0x1ea)][_0xb99e8e(0x22c)]=_0x3bf7c7;},Sprite_InputComboQueueList[_0x2f7310(0x23a)][_0x2f7310(0x277)]=function(){const _0x372f1d=_0x2f7310,_0x190998=arguments[0x0],_0x27bd09=arguments[0x1],_0x586226=arguments[0x2],_0x4050b0=arguments[0x3],_0x4e07d1=this[_0x372f1d(0x2cf)],_0x3797e5=this[_0x372f1d(0x311)](),_0xa74645=ImageManager[_0x372f1d(0x2d6)]*0x2;if(_0x4050b0){const _0x1d1513=0x14,_0x4e3b42=ColorManager[_0x372f1d(0x274)]();_0x4e07d1['fillRoundRect'](0x0,0x0,_0x4e07d1[_0x372f1d(0x1d6)],_0x4e07d1[_0x372f1d(0x31b)],_0x1d1513,_0x4e3b42);}const _0x1f4cb5=_0x586226*_0xa74645,_0x1194d5=_0xa74645,_0x47456c=Math[_0x372f1d(0x262)]((_0x4e07d1[_0x372f1d(0x1d6)]-_0x1f4cb5)/0x2),_0xe1736e=Math[_0x372f1d(0x262)](_0x3797e5/0x4);let _0x426f4c=Math['floor'](_0xa74645/0x2);for(const _0x137be0 of _0x190998){const _0x1d9217=_0x137be0[_0x372f1d(0x269)];this[_0x372f1d(0x29e)](_0x1d9217,_0x47456c+_0x426f4c,_0xe1736e,_0xa74645),_0x426f4c+=_0xa74645;}if(_0x27bd09){const _0x36b24f=_0x372f1d(0x2a9)[_0x372f1d(0x1dc)](_0x27bd09['iconIndex'],_0x27bd09[_0x372f1d(0x346)]),_0x471577=this['textSizeEx'](_0x36b24f)[_0x372f1d(0x1d6)],_0x3aae07=Math[_0x372f1d(0x262)]((_0x4e07d1[_0x372f1d(0x1d6)]-_0x471577)/0x2),_0x56547f=_0xe1736e+_0x1194d5+Math[_0x372f1d(0x262)](_0x3797e5/0x2);this[_0x372f1d(0x271)](_0x36b24f,_0x3aae07,_0x56547f);}},Window_Base[_0x2f7310(0x23a)]['drawInputComboLargeIcon']=function(_0x5cd514,_0x566de9,_0x4602a5,_0x30a31d){const _0x403a68=_0x2f7310,_0x5e4fbb=VisuMZ[_0x403a68(0x34c)]['Settings']['UI'];_0x30a31d=_0x30a31d||0x20,_0x566de9-=Math['round'](_0x30a31d/0x2);const _0x49b660=ImageManager[_0x403a68(0x1ca)](_0x403a68(0x285)),_0x40f101=ImageManager[_0x403a68(0x2d6)],_0x25b672=ImageManager[_0x403a68(0x2ea)],_0x3b1e8c=_0x5cd514%0x10*_0x40f101,_0x571d84=Math[_0x403a68(0x262)](_0x5cd514/0x10)*_0x25b672;this[_0x403a68(0x2cf)]['_context'][_0x403a68(0x21d)]=_0x5e4fbb[_0x403a68(0x1e3)],this[_0x403a68(0x2cf)]['blt'](_0x49b660,_0x3b1e8c,_0x571d84,_0x40f101,_0x25b672,_0x566de9,_0x4602a5,_0x30a31d,_0x30a31d),this[_0x403a68(0x2cf)]['_context'][_0x403a68(0x21d)]=!![];},Window_BattleLog[_0x2f7310(0x253)]=VisuMZ[_0x2f7310(0x34c)]['Settings']['UI'][_0x2f7310(0x229)]||'',Window_BattleLog[_0x2f7310(0x32f)]=VisuMZ[_0x2f7310(0x34c)]['Settings']['UI']['InputComboAnimation']||0x0,VisuMZ['InputComboSkills']['Window_BattleLog_isBusy']=Window_BattleLog['prototype'][_0x2f7310(0x1fc)],Window_BattleLog[_0x2f7310(0x23a)][_0x2f7310(0x1fc)]=function(){const _0x52ce72=_0x2f7310;if(this[_0x52ce72(0x1f7)])return!![];return VisuMZ['InputComboSkills'][_0x52ce72(0x270)][_0x52ce72(0x328)](this);},VisuMZ[_0x2f7310(0x34c)]['Window_BattleLog_startAction']=Window_BattleLog[_0x2f7310(0x23a)][_0x2f7310(0x27e)],Window_BattleLog[_0x2f7310(0x23a)][_0x2f7310(0x27e)]=function(_0x542c46,_0x3d2441,_0x2441a2){const _0x254177=_0x2f7310;if(this[_0x254177(0x254)](_0x542c46,_0x3d2441)){this['startInputComboSkill'](_0x542c46,_0x3d2441);if(_0x542c46[_0x254177(0x2bd)]())_0x542c46[_0x254177(0x2d2)]();}else{if(_0x254177(0x347)===_0x254177(0x347))VisuMZ[_0x254177(0x34c)][_0x254177(0x32d)]['call'](this,_0x542c46,_0x3d2441,_0x2441a2);else{if(!_0x59941c[_0x254177(0x1e5)])return;if(!_0x3e7327[_0x254177(0x1f2)])return;this[_0x254177(0x2e7)]=new _0xf3778b(),this[_0x254177(0x2e5)](this[_0x254177(0x2e7)]);}}},Window_BattleLog['prototype'][_0x2f7310(0x254)]=function(_0x26e30c,_0x13c3f8){const _0x183f74=_0x2f7310;if(!_0x26e30c)return![];if(!_0x26e30c[_0x183f74(0x230)]())return![];if(Imported['VisuMZ_2_BattleSystemBTB']&&BattleManager[_0x183f74(0x238)]())return![];return DataManager[_0x183f74(0x280)](_0x13c3f8[_0x183f74(0x2dc)]());},Window_BattleLog['prototype'][_0x2f7310(0x2fc)]=function(_0x11c62a,_0x4a5cf2){const _0x1b9132=_0x2f7310;this['_inputComboSkillMode']=!![],$gameTemp['prepareInputComboSkills'](_0x11c62a,_0x4a5cf2[_0x1b9132(0x2dc)]());if(Window_BattleLog['INPUT_COMBO_TEXT'][_0x1b9132(0x1df)]>0x0){if('noHpk'===_0x1b9132(0x316))this[_0x1b9132(0x264)]('addText',Window_BattleLog['INPUT_COMBO_TEXT']);else{const _0x4c5e8d=_0x19c6b0['InputComboSkills'][_0x1b9132(0x322)]['UI'];_0x45b703=_0x4dac2a||0x20,_0x1b1eab-=_0x46147a[_0x1b9132(0x243)](_0xec4fe5/0x2);const _0x26e8c0=_0x264898['loadSystem'](_0x1b9132(0x285)),_0x2b0c9d=_0x598105[_0x1b9132(0x2d6)],_0x5359b4=_0x4cdeb9[_0x1b9132(0x2ea)],_0x406241=_0x2b90aa%0x10*_0x2b0c9d,_0x5f25d3=_0x1bf4cd[_0x1b9132(0x262)](_0x5bd4bd/0x10)*_0x5359b4;this[_0x1b9132(0x2cf)][_0x1b9132(0x315)][_0x1b9132(0x21d)]=_0x4c5e8d[_0x1b9132(0x1e3)],this[_0x1b9132(0x2cf)][_0x1b9132(0x241)](_0x26e8c0,_0x406241,_0x5f25d3,_0x2b0c9d,_0x5359b4,_0x276db4,_0x56b7f0,_0x564109,_0x2cf837),this[_0x1b9132(0x2cf)]['_context'][_0x1b9132(0x21d)]=!![];}}this['push'](_0x1b9132(0x1ef),_0x11c62a,_0x4a5cf2),this[_0x1b9132(0x264)](_0x1b9132(0x2b3));const _0x380439=DataManager[_0x1b9132(0x1ec)](_0x4a5cf2[_0x1b9132(0x2dc)]());_0x380439>0x0&&this['push'](_0x1b9132(0x2e8),_0x11c62a,[_0x11c62a],_0x380439);},Window_BattleLog[_0x2f7310(0x23a)][_0x2f7310(0x2c7)]=function(){const _0x5161fe=_0x2f7310,_0x111cbc=SceneManager[_0x5161fe(0x23c)][_0x5161fe(0x2a7)];if(_0x111cbc)_0x111cbc[_0x5161fe(0x307)]();this[_0x5161fe(0x1f7)]=![],this['clear']();const _0x9f7897=BattleManager[_0x5161fe(0x34b)],_0x2c23c5=BattleManager[_0x5161fe(0x1ce)],_0x220b12=BattleManager['_targets'];VisuMZ[_0x5161fe(0x34c)]['Window_BattleLog_startAction']['call'](this,_0x9f7897,_0x2c23c5,_0x220b12),_0x9f7897[_0x5161fe(0x2cc)]();};function _0x5824(_0x42fa6e,_0x1bd8bd){const _0x2ac2e4=_0x2ac2();return _0x5824=function(_0x582424,_0x520685){_0x582424=_0x582424-0x1ca;let _0x485d6f=_0x2ac2e4[_0x582424];return _0x485d6f;},_0x5824(_0x42fa6e,_0x1bd8bd);}function Window_InputComboSkillsTooltip(){const _0x7599de=_0x2f7310;this[_0x7599de(0x1cb)](...arguments);}Window_InputComboSkillsTooltip[_0x2f7310(0x23a)]=Object[_0x2f7310(0x302)](Window_Base[_0x2f7310(0x23a)]),Window_InputComboSkillsTooltip[_0x2f7310(0x23a)]['constructor']=Window_InputComboSkillsTooltip,Window_InputComboSkillsTooltip['ENABLED']=VisuMZ[_0x2f7310(0x34c)][_0x2f7310(0x322)][_0x2f7310(0x299)]['enabled']??!![],Window_InputComboSkillsTooltip[_0x2f7310(0x30b)]=VisuMZ[_0x2f7310(0x34c)][_0x2f7310(0x322)][_0x2f7310(0x299)][_0x2f7310(0x28b)],Window_InputComboSkillsTooltip['WINDOW_SKIN_FILENAME']=VisuMZ['InputComboSkills'][_0x2f7310(0x322)]['Tooltip']['WindowSkin'],Window_InputComboSkillsTooltip['WINDOW_SKIN_OPACITY']=VisuMZ[_0x2f7310(0x34c)][_0x2f7310(0x322)][_0x2f7310(0x299)][_0x2f7310(0x2d0)],Window_InputComboSkillsTooltip[_0x2f7310(0x247)]=VisuMZ[_0x2f7310(0x34c)][_0x2f7310(0x322)][_0x2f7310(0x299)][_0x2f7310(0x23f)],Window_InputComboSkillsTooltip[_0x2f7310(0x256)]=VisuMZ[_0x2f7310(0x34c)][_0x2f7310(0x322)][_0x2f7310(0x299)][_0x2f7310(0x218)],Window_InputComboSkillsTooltip[_0x2f7310(0x23a)][_0x2f7310(0x1cb)]=function(){const _0x3eb941=_0x2f7310,_0x255c9d=new Rectangle(0x0,0x0,Graphics[_0x3eb941(0x1d6)],Graphics[_0x3eb941(0x31b)]);Window_Base[_0x3eb941(0x23a)][_0x3eb941(0x1cb)][_0x3eb941(0x328)](this,_0x255c9d),this[_0x3eb941(0x28a)]['x']=this[_0x3eb941(0x28a)]['y']=Window_InputComboSkillsTooltip['WINDOW_SCALE'],this[_0x3eb941(0x2f8)](),this['_skill']=null;},Window_InputComboSkillsTooltip[_0x2f7310(0x23a)][_0x2f7310(0x222)]=function(){const _0x1c5490=_0x2f7310;this[_0x1c5490(0x335)]=ImageManager['loadSystem'](Window_InputComboSkillsTooltip['WINDOW_SKIN_FILENAME']);},Window_InputComboSkillsTooltip[_0x2f7310(0x23a)]['updateBackOpacity']=function(){const _0x4cede5=_0x2f7310;this[_0x4cede5(0x20c)]=Window_InputComboSkillsTooltip[_0x4cede5(0x350)];},Window_InputComboSkillsTooltip[_0x2f7310(0x23a)][_0x2f7310(0x220)]=function(_0x38738e){const _0x1318d7=_0x2f7310;if(this[_0x1318d7(0x312)]===_0x38738e)return;this[_0x1318d7(0x312)]=_0x38738e;if(this[_0x1318d7(0x312)]&&this[_0x1318d7(0x312)][_0x1318d7(0x24b)][_0x1318d7(0x231)]()[_0x1318d7(0x1df)]>0x0)this[_0x1318d7(0x2ce)]();else{if(_0x1318d7(0x226)===_0x1318d7(0x226))this[_0x1318d7(0x2f8)]();else{if(this[_0x1318d7(0x312)]===_0x436d13)return;this[_0x1318d7(0x312)]=_0x2c68d5,this[_0x1318d7(0x312)]&&this[_0x1318d7(0x312)][_0x1318d7(0x24b)][_0x1318d7(0x231)]()['length']>0x0?this[_0x1318d7(0x2ce)]():this['hide']();}}},Window_InputComboSkillsTooltip['prototype'][_0x2f7310(0x2ce)]=function(){const _0x506b31=_0x2f7310;this[_0x506b31(0x2cf)][_0x506b31(0x281)](),this[_0x506b31(0x2ec)]();if(this[_0x506b31(0x2ac)][_0x506b31(0x1df)]>0x0){if('zphSF'==='zphSF'){this[_0x506b31(0x301)]();const _0x22d88b=this[_0x506b31(0x291)]();this[_0x506b31(0x271)](this[_0x506b31(0x2ac)],_0x22d88b['x'],_0x22d88b['y'],_0x22d88b['width']),this['show']();}else return this[_0x506b31(0x1cc)]||null;}else this[_0x506b31(0x2f8)]();},Window_InputComboSkillsTooltip[_0x2f7310(0x23a)][_0x2f7310(0x33b)]=function(){return![];},Window_InputComboSkillsTooltip[_0x2f7310(0x23a)][_0x2f7310(0x30f)]=function(_0x25860e){return _0x25860e;},Window_InputComboSkillsTooltip[_0x2f7310(0x23a)][_0x2f7310(0x2e0)]=function(){return![];},Window_InputComboSkillsTooltip[_0x2f7310(0x23a)]['setupText']=function(){const _0x216b8f=_0x2f7310;this['_text']='';if(!this[_0x216b8f(0x312)])return;this['setupDescriptionText'](),this[_0x216b8f(0x2ac)]=this[_0x216b8f(0x2ac)][_0x216b8f(0x231)]();},Window_InputComboSkillsTooltip['prototype'][_0x2f7310(0x2b4)]=function(){const _0x273687=_0x2f7310;this[_0x273687(0x2ac)]=this[_0x273687(0x312)][_0x273687(0x24b)]||'';},Window_InputComboSkillsTooltip[_0x2f7310(0x23a)][_0x2f7310(0x301)]=function(){const _0x3c6fdb=_0x2f7310,_0x28561b=this['textSizeEx'](this[_0x3c6fdb(0x2ac)]);this[_0x3c6fdb(0x1d6)]=_0x28561b[_0x3c6fdb(0x1d6)]+(this[_0x3c6fdb(0x300)]()+this[_0x3c6fdb(0x29d)])*0x2,this[_0x3c6fdb(0x31b)]=_0x28561b[_0x3c6fdb(0x31b)]+this[_0x3c6fdb(0x29d)]*0x2,this[_0x3c6fdb(0x246)](),this[_0x3c6fdb(0x2c9)]();},Window_InputComboSkillsTooltip['prototype'][_0x2f7310(0x307)]=function(){const _0x513bb3=_0x2f7310;Window_Base[_0x513bb3(0x23a)][_0x513bb3(0x307)][_0x513bb3(0x328)](this),this[_0x513bb3(0x305)]&&(this[_0x513bb3(0x305)]=![],this['refresh']()),this[_0x513bb3(0x34e)](),this['updateOpacity']();},Window_InputComboSkillsTooltip[_0x2f7310(0x23a)][_0x2f7310(0x29a)]=function(){const _0x58fedc=_0x2f7310;this[_0x58fedc(0x305)]=!![];},Window_InputComboSkillsTooltip[_0x2f7310(0x23a)]['updatePosition']=function(){const _0x4c3766=_0x2f7310;if(!this[_0x4c3766(0x341)])return;this['x']=TouchInput['x']+Window_InputComboSkillsTooltip[_0x4c3766(0x247)],this['y']=TouchInput['y']+Window_InputComboSkillsTooltip[_0x4c3766(0x256)],this['clampPosition']();},Window_InputComboSkillsTooltip['prototype'][_0x2f7310(0x213)]=function(){const _0x28c32f=_0x2f7310,_0x2e47da=this[_0x28c32f(0x1d6)]*(Window_InputComboSkillsTooltip[_0x28c32f(0x30b)]||0.01),_0xe15289=this[_0x28c32f(0x31b)]*(Window_InputComboSkillsTooltip['WINDOW_SCALE']||0.01);this['x']=Math['round'](this['x']['clamp'](0x0,Graphics[_0x28c32f(0x1d6)]-_0x2e47da)),this['y']=Math[_0x28c32f(0x243)](this['y'][_0x28c32f(0x317)](0x0,Graphics[_0x28c32f(0x31b)]-_0xe15289));},Window_InputComboSkillsTooltip[_0x2f7310(0x23a)][_0x2f7310(0x1e1)]=function(){const _0xb0e2a3=_0x2f7310;let _0x4d9981=0xff;if(TouchInput['x']<=0x0)_0x4d9981=0x0;if(TouchInput['x']>=Graphics['width'])_0x4d9981=0x0;if(TouchInput['y']<=0x0)_0x4d9981=0x0;if(TouchInput['y']>=Graphics[_0xb0e2a3(0x31b)])_0x4d9981=0x0;this[_0xb0e2a3(0x304)]=_0x4d9981;};function _0x2ac2(){const _0x404cfd=['eWoMQ','hasInputComboQueue','queueInputComboSkillsFromKey','pop','ElkcW','isBTB','filter','prototype','VisuMZ_3_AutoSkillTriggers','_scene','clearInputComboSkills','getInputComboSkillsKey','OffsetX','isSceneBattle','blt','iiMdU','round','_cacheComboMax','createInputComboSkillsUiButtons','createContents','MOUSE_OFFSET_X','%1Pan','backgroundDrawJS','onMouseEnter','description','nVCdY','createAllSkillCostText','_inputComboSkillButtons','queueDrawBackRect','stepBack','nwHPX','hasInputComboSkillsConflicts','INPUT_COMBO_TEXT','canStartInputComboSkill','Sprite_Actor_stepForward','MOUSE_OFFSET_Y','canPerformInputComboSkills','queueListRectJS','createInputComboSkillsUiBackground','_hovered','_inputComboSkillMax','Keys','anchor','toLowerCase','ForcedSpecial','return\x200','checkInputComboSkillsIncompatibility','floor','bind','push','VisuMZ_3_ItemThrowSkills','playSe','user','checkForInputComboSkillsEnd','iconIndex','isSkillSealed','applyInputComboSkillQueue','opacityLevel','ARRAYEVAL','lineTo','%1RectJS','Window_BattleLog_isBusy','drawTextEx','EqeYT','_inputComboSkillQueue','dimColor1','yYLvh','test','drawContentJS','_inputComboSkillsUiContainer','hasInputComboSkillsKey','toUpperCase','_queueNextInputComboSkill','8979588FJaOzP','onMouseExit','startAction','forceActionInputComboSkill','isInputComboOriginSkill','clear','DefaultMaxCombo','clearInputComboSkillCostBypass','canConcoctItems','IconSet','_skillCostBypass','meetsUpdateBitmapConditions','fIYDz','queueBackgroundImage','scale','Scale','meetsInputComboSkillConditions','map','members','registerInputComboSkillsMax','pageup','baseTextRect','refreshBitmap','EvoMatrixSkills','_lastActor','_pressedDuration','meetsSkillConditions','replace','gnoQi','Tooltip','requestRefresh','autoQueueInputComboSpecial','playInputComboSkillsSound','padding','drawInputComboLargeIcon','AMgZc','constructor','createInputComboSkillsUiElements','SBhag','canThrowItems','Bniqh','STR','skillID','_inputComboSkillQueueListSprite','useItem','\x5cI[%1]%2','OpacityRate','KEY_PRESS_OFFSET_X','_text','%1Pitch','mZkGt','clone','addText','BackgroundImage','ComboOnly','waitForMovement','setupDescriptionText','canUse','getInputButtonString','ComboMax','sEqno','endAction','pagedown','aNKml','_inputComboMax','isAutoBattle','LearnedSpecial','MIxmR','beginPath','match','_checkInputComboOnlySkill','ldpQo','createContentSprite','version','getLastUsedGamepadType','endInputComboSkill','ComboStartAni','resetFontSettings','cQlgz','moveTo','queueNextInputComboSkill','applyGlobal','refresh','contents','WindowOpacity','stypeId','queueAutoBattleInputComboSkills','createInputComboSkillsUiContainer','KeJCX','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','iconWidth','Scene_Battle_update','shift','payCostInputComboSkillQueueLatest','ARRAYFUNC','lFyYW','item','red','registerInputComboSkillsActor','updateInputComboSkillSwitch','isSupportMessageKeywords','special','_bypassStepBackward_InputComboSkill','input','qbPNk','addChild','autoQueueRandomInputComboSkills','_inputComboSkillsUiTooltipWindow','showAnimation','includes','iconHeight','save','setupText','getButtonIcon','updateInputComboSkillQueue','isTriggered','tooltipWindow','isBeingTouched','Rlkzk','INPUT_COMBO_REDUCE_BACK_FORTH','registerInputComboSpecials','Game_Battler_useItem','DataManager_isSkill','ActiveChainSkills','hide','_lastSkillID','KeypressUiOffsetX','_inputComboSkillSpecials','startInputComboSkill','_targets','pPKcB','show','itemPadding','resizeWindow','create','registerInputComboSkills','opacity','_requestRefresh','createInputComboSkillsUiTooltipWindow','update','restore','xTxNN','quadraticCurveTo','WINDOW_SCALE','QueueSwitchID','left','createBackgroundSprite','convertMessageKeywords','kSCTO','lineHeight','_skill','_lastInputType','note','_context','noHpk','clamp','VisuMZ_0_CoreEngine','VisuMZ_1_SkillsStatesCore','KEY_PRESS_OFFSET_Y','height','onPress','JSON','712228QIptCx','remove','RnBgG','VisuMZ_1_BattleCore','Settings','updateInputComboSkills','_hasInputComboSkillsConflict','AVgew','getInputComboSkillsUser','ARRAYJSON','call','bbJet','_baseTexture','BattleManager_endAction','5009960rVVDHr','Window_BattleLog_startAction','applyInverse','INPUT_COMBO_ANIMATION','max','_battler','split','isLearnedSkill','meetsUsableItemConditions','windowskin','queueRectJS','_inputComboSkillKeys','noValidInputComboSkills','4049650ocKnrt','setValue','isWordWrapEnabled','contentDrawJS','isReleased','_dimensions','addToInputComboSkillsStringFromKey','VisuMZ_3_ItemConcoctSkills','visible','context','right','stepForward','AvailableSpecial','name','WQXNe','prepareInputComboSkills','fill','ConvertParams','_subject','InputComboSkills','hitTest','updatePosition','createContentWindow','WINDOW_SKIN_OPACITY','loadSystem','initialize','_inputComboSkillUser','updateBitmap','_action','isVisible','createDisplayObjects','_cacheSpecialSkillID','status','_inputComboSkillSpecialSkillID','parse','getInputComboMax','width','specialStringToKeys','UUazT','randomInt','TvZqP','Game_BattlerBase_meetsSkillConditions','format','%1Volume','initMembers','length','createInputComboSkillsUiQueueList','updateOpacity','subject','LargeIconSmoothing','fillRoundRect','VisuMZ_1_MessageCore','7uvrIEI','Sound','InputKey','dimColor2','_contentSprite','HBCNb','getInputComboStartAnimation','16845669oMGqGJ','%1Name','performActionStart','_key','VisuMZ_2_BattleSystemBTB','ENABLED','UJIso','bOwHi','NUM','windowPadding','_inputComboSkillMode','_cacheQueue','Sprite_Actor_stepBack','_contentWindow','_inputComboSkillCostBypass','isBusy','RegExp','OZZop','_logWindow','ARRAYSTR','KeybindUiOffsetX','887006WCnWOq','cancel','KeybindUiOffsetY','isSkill','_bypassStepForward_InputComboSkill','Game_Temp_initialize','indexOf','KeypressUiOffsetY','onClick','checkInputComboSkillCostBypass','backOpacity','debugFillRect','DDufU','2doBZii','_inputComboSkillSpecialString','down','OpacityDisable','clampPosition','_hoverState','parameters','Scene_Battle_allowUpdateBattleAniSpeed','svmzl','OffsetY','exit','registerInputComboSkillCostBypass','fillStyle','addToInputComboSkillsQueueFromKey','imageSmoothingEnabled','Xkpfw','hasSkill','setSkill','forceAction','loadWindowskin','INPUT_COMBO_DEFAULT_MAX','_visibleFrameCount','_pressed','GmFke','dfGQs','EplPp','InputComboText','getSkillIdWithName','Game_Action_applyGlobal','bitmap','stringify','2369133pcSiZv','allowUpdateBattleAniSpeed','isActor','trim','hzYDC'];_0x2ac2=function(){return _0x404cfd;};return _0x2ac2();}