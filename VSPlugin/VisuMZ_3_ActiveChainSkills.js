//=============================================================================
// VisuStella MZ - Active Chain Skills
// VisuMZ_3_ActiveChainSkills.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ActiveChainSkills = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ActiveChainSkills = VisuMZ.ActiveChainSkills || {};
VisuMZ.ActiveChainSkills.version = 1.06;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.06] [ActiveChainSkills]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Active_Chain_Skills_VisuStella_MZ
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
 * When a skill with any potential chain skill occurs, potentially chainable
 * skills will be listed on the side of the screen and if the player presses
 * the right button to trigger that chain skill, the actor's next action will
 * lead into the next chain skill. Chain skills can only be used by actors and
 * can be endlessly chained until either the actor runs out of skill cost
 * resources or until the actor performs a chained skill without any skills to
 * chain off of.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Register up to 9 different chain skills per skill, each bound to specific
 *   keyboard button inputs.
 * * Touch screen users are able to activate chain skills by simply tapping on
 *   the listed chain skill on the screen.
 * * Tooltips will display the skill's help description when hovering over the
 *   on-screen buttons.
 * * Chain skills are separated into three different types: available, learned,
 *   and forced chains.
 * * Some skills can be set up to be chain only, meaning they can only ever be
 *   accessed via chain skills.
 * * Confirmation visual and sound effects can be utilized to provide proper
 *   feedback to the player when chaining.
 * * Confirmation switches can be utilized by the game dev to determine if a
 *   player has queued up a skill chain to produce different effects.
 * * Plugin Parameters allow you, the game dev, to alter how the UI looks for
 *   the active chain segment, ranging from background to foreground elements.
 * * Custom images can be used to add more personal flare to the chaining UI.
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
 * Active Chain Skills
 * ============================================================================
 *
 * This section will explain what Active Chain Skills really are so that you
 * can prepare for how they will function. We recommend reading this section so
 * that you know what to do and how to handle them.
 *
 * ---
 *
 * Forced Actions
 * 
 * Players climbing through the web of Active Chain Skills are actually queuing
 * forced actions to occur immediately upon the completion of the current skill
 * in effect.
 * 
 * Therefore, if you make any effects through Custom Action Sequences of Common
 * Events that run after a skill takes place to run a different Forced Action,
 * then there will be conflict and the Active Chain Skills won't work properly.
 * 
 * Keep this in mind when using this plugin with Battle Systems like ATB, CTB,
 * or OTB where forced actions have unique properties. Look at the
 * "VisuStella MZ Compatibility" section below.
 *
 * ---
 *
 * Chain Skill Requirements
 * 
 * Chainable skills have requirements. These come in the form of skill costs.
 * Other things like skill cooldowns also matter, too. If an actor would be
 * normally unable to use the skill outside of an Active Chain Skill situation,
 * then that actor would also be unable to use that skill as an Active Chain
 * Skill, too.
 * 
 * The exception to this are the skills with the <Chain Skill> notetag, which
 * causes the skill to be unable to be used in normal circumstances and only
 * usable in the Active Chain Skill sequence provided that all other skill
 * requirements have been met.
 *
 * ---
 *
 * One Skill Per Chain
 * 
 * Even if there are 9 different skills that can be chained from the current
 * skill, only one of them can be picked. The player cannot pick two or more.
 * Just one. The reason for this is to keep the queuing process simple.
 * 
 * When a chain skill has been selected, the rest of the skills will semi-fade
 * out to indicate they're no longer accessible. Chain skills at this point are
 * then disabled until the next Active Chain Skill segment.
 *
 * ---
 * 
 * Chain Confirm Switch
 * 
 * There is a switch that automatically turns OFF at the start of each new
 * skill, and only turns on when an Active Chain Skill has been selected. This
 * can be used for extending the input window duration, binding positions, and
 * more uses.
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
 * VisuMZ_0_CoreEngine
 * 
 * If you have the VisuMZ Core Engine installed, this plugin gains access to
 * the confirmable animation effects that are played on top of the active actor
 * to provide the player feedback that a chain skill has been selected.
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
 * with it and therefore, Active Chain Skills cannot be used with the BTB
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
 * === Chain Skill-Related Notetags ===
 * 
 * ---
 *
 * <Chain Skill key: id>
 * <Chain Skill key: name>
 * 
 * <Available Chain Skill key: id>
 * <Available Chain Skill key: name>
 *
 * - Used for: Skill Notetags
 * - Adds a chainable skill to the specific 'key' when pressed. This variant
 *   requires the actor to either have learned the skill or have it temporarily
 *   accessible through traits.
 * - There are no differences between the <Chain Skill key: x> and the
 *   <Available Chain Skill key: x> notetags, it's a matter of preference of
 *   which you want to use.
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
 * - For 'id' variant: replace 'id' with the ID of the skill to chain using
 *   the marked key.
 * - For 'name' variant: replace 'name' with the name of the skill to chain
 *   using the marked key.
 * - Insert multiple copies of this notetag to bind different keys.
 * 
 * Examples:
 * 
 *   <Chain Skill up: Thunder I>
 *   <Chain Skill left: 107>
 *   <Available Chain Skill down: Fire I>
 *   <Available Chain Skill right: 123>
 *
 * ---
 *
 * <Learned Chain Skill key: id>
 * <Learned Chain Skill key: name>
 * 
 * <Known Chain Skill key: id>
 * <Known Chain Skill key: name>
 *
 * - Used for: Skill Notetags
 * - Adds a chainable skill to the specific 'key' when pressed. This variant
 *   requires the actor to have learned the skill in order to chain it
 *   regardless of whether or not the actor has temporary trait access.
 * - There are no differences between the <Learned Chain Skill key: x> and the
 *   <Known Chain Skill key: x> notetags, it's a matter of preference of
 *   which you want to use.
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
 * - For 'id' variant: replace 'id' with the ID of the skill to chain using
 *   the marked key.
 * - For 'name' variant: replace 'name' with the name of the skill to chain
 *   using the marked key.
 * - Insert multiple copies of this notetag to bind different keys.
 * 
 * Examples:
 * 
 *   <Learned Skill up: Thunder I>
 *   <Learned Skill left: 107>
 *   <Known Chain Skill down: Fire I>
 *   <Known Chain Skill right: 123>
 *
 * ---
 *
 * <Forced Chain Skill key: id>
 * <Forced Chain Skill key: name>
 * 
 * <Always Chain Skill key: id>
 * <Always Chain Skill key: name>
 *
 * - Used for: Skill Notetags
 * - Adds a chainable skill to the specific 'key' when pressed. This variant
 *   will always have the skill available for chaining.
 * - There are no differences between the <Forced Chain Skill key: x> and the
 *   <Always Chain Skill key: x> notetags, it's a matter of preference of
 *   which you want to use.
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
 * - For 'id' variant: replace 'id' with the ID of the skill to chain using
 *   the marked key.
 * - For 'name' variant: replace 'name' with the name of the skill to chain
 *   using the marked key.
 * - Insert multiple copies of this notetag to bind different keys.
 * 
 * Examples:
 * 
 *   <Forced Skill up: Thunder I>
 *   <Forced Skill left: 107>
 *   <Always Chain Skill down: Fire I>
 *   <Always Chain Skill right: 123>
 *
 * ---
 *
 * <Chain Only>
 *
 * - Used for: Skill Notetags
 * - Causes this skill to only become usable during an Active Chain Skill
 *   sequence as long as other costs and conditions have been met.
 *
 * ---
 * 
 * === Confirmation-Related Notetags ===
 * 
 * ---
 *
 * <Chain Confirm Animation: x>
 *
 * - Used for: Skill Notetags
 * - Changes the confirmation animation when chaining into this skill.
 * - Requires VisuMZ_0_CoreEngine!
 * - Replace 'x' with a number representing the ID of the animation to play
 *   when chaining into this skill.
 * - If this notetag is not used, play the animation found in the
 *   Plugin Parameters instead.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * This section is for the general settings related to this plugin.
 *
 * ---
 *
 * General
 * 
 *   Chain Confirm Switch:
 *   - What switch is turned on/off to detect if Active Chain Skills have
 *     been queued?
 *   - Leave empty to not use.
 * 
 *   Reduce Back & Forth?:
 *   - Reduce unnecessary back and forth motions inbetween Active Chain Skills?
 *   - This is to prevent your actor from stepping forward, performing a skill,
 *     then stepping back, then stepping forward, perform a skill, etc.
 *   - This will nullify any command that uses the stepForward and stepBackward
 *     functions until cleared.
 *
 * ---
 * 
 * ==== Uses for the Confirm Switch ====
 * 
 * ---
 * 
 * 1. Extend the Input Window Duration
 * 
 * Some of you may feel like the input window is too short. Well, if you did
 * little to change how long the skill lasts, then yes, it will be too short
 * due to how the Active Chain Skill input window is due to how long the skill
 * actually is.
 * 
 * What you will need to do is extend it by using Custom Action Sequences and
 * using Wait commands to pad the input time. A technique that we personally
 * recommend is adding a segment with this before the end (usually right before
 * the ACTSET: Finish Action bit):
 * 
 *   ◆If：Chain Confirm Switch is OFF
 *     ◆Wait：20 frames
 *     ◆
 *   ：End
 *   ◆If：Chain Confirm Switch is OFF
 *     ◆Wait：20 frames
 *     ◆
 *   ：End
 *   ◆If：Chain Confirm Switch is OFF
 *     ◆Wait：20 frames
 *     ◆
 *   ：End
 *   ◆If：Chain Confirm Switch is OFF
 *     ◆Wait：20 frames
 *     ◆
 *   ：End
 *   ◆If：Chain Confirm Switch is OFF
 *     ◆Wait：20 frames
 *     ◆
 *   ：End
 *   ◆If：Chain Confirm Switch is OFF
 *     ◆Wait：20 frames
 *     ◆
 *   ：End
 * 
 * What this does is give the skill an additional two seconds of time to input
 * a follow up chain skill but also cut the time short if the player has a
 * skill already queued up.
 * 
 * The reason why this is repeated is so that the player does not have to wait
 * the whole two second duration if the player has inputted the next action
 * during the final two seconds of the skill before ending.
 * 
 * We recommend putting this in a Common Event that can be referenced and used
 * across different Action Sequences as this is likely to be a common thing.
 * 
 * ---
 * 
 * 2. Tracking Chain Length
 * 
 * Another thing that you can stuff into a Common Event and put right before
 * the end of an Action Sequence involving Active Chain Skills is a variable
 * tracking the number of times the player has chained in a row with this actor
 * nonstop without breaking it.
 * 
 *   ◆If：Chain Confirm Switch is ON
 *     ◆Control Variables：#XXXX Chain Counter Variable += 1
 *     ◆
 *   ：Else
 *     ◆Control Variables：#XXXX Chain Counter Variable = 0
 *     ◆
 *   ：End
 * 
 * When the Chain Confirm Switch is set to be ON, then the variable's value
 * will go up by one. Otherwise, it will reset to 0. Since this is done at the
 * end of an Action Sequence, it will also properly reset when there is nothing
 * left to chain.
 * 
 * That said, you need to be wary when chaining into a skill without Active
 * Chain Skills and their Action Sequences and reset the Chain Counter Variable
 * there independently.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Chain Confirm Visual Settings
 * ============================================================================
 *
 * The settings for the Chain confirm visuals.
 *
 * ---
 *
 * Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *   - Requires VisuMZ_0_CoreEngine.
 *
 * ---
 *
 * Popups
 * 
 *   Text:
 *   - Text displayed upon the effect activating.
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
 * Plugin Parameters: Chain Confirm Sound Settings
 * ============================================================================
 *
 * The settings for the Chain confirm sound effect.
 *
 * ---
 *
 * Sound Effect
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
 * Determine where and how the UI visuals look while performing
 * Active Chain Skills.
 *
 * ---
 *
 * General
 * 
 *   Custom BG Image:
 *   - Do you want to use a custom background image?
 *   - Located in /img/system/ folder. Covers whole screen.
 * 
 *   Icon Smoothing?:
 *   - Smooth the display for icons?
 *   - Or pixelate them?
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
 *   - Code used to draw the skill data layer while
 *   - Active Chain Skill inputs are active.
 * 
 *   JS: Draw Background:
 *   - Code used to draw the background layer while
 *   - Active Chain Skill inputs are active.
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
 * Key Binds > Pressed
 * 
 *   Key Press Offset X:
 *   - Offset the x coordinate when the key is pressed.
 *   - Negative: left. Positive: right.
 * 
 *   Key Press Offset Y:
 *   - Offset the y coordinate when the key is pressed.
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
 * Settings for the Active Chain Skills Tooltips Window.
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
 * Version 1.06: April 18, 2023
 * * Compatibility Update!
 * ** Added better compatibility with Battle Grid System.
 * 
 * Version 1.05: July 13, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.04: June 15, 2023
 * * Compatibility Update!
 * ** Added compatibility with Options Core battle animation speeds to have the
 *    battle system function at regular speed until a chain is selected. Update
 *    made by Irina.
 * 
 * Version 1.03: September 22, 2022
 * * Feature Update!
 * ** Upon using "Home Reset" action sequences or if automatic action sequences
 *    are being used, upon the player character returning back to their home
 *    position, Active Chain Skill Buttons will be disabled if not already
 *    inputted for action. Update made by Irina.
 * 
 * Version 1.02: August 18, 2022
 * * Compatibility Update!
 * ** Better compatibility with VisuMZ Active Chain Skills.
 * ** Compatibility will be seen with VisuMZ_1_BattleCore version 1.69.
 * 
 * Version 1.01: July 28, 2022
 * * Bug Fixes!
 * ** Users without the VisuMZ Message Core will no longer get tooltip error
 *    messages when starting battle. Fix made by Irina.
 *
 * Version 1.00 Official Release Date: September 5, 2022
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
 * @param ActiveChainSkills
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ConfirmSwitch:num
 * @text Chain Confirm Switch
 * @type switch
 * @desc What switch is turned on/off to detect if Active Chain
 * Skills have been queued? Leave empty to not use.
 * @default 0
 *
 * @param ReduceBackForth:eval
 * @text Reduce Back & Forth?
 * @type boolean
 * @on Reduce
 * @off Allow
 * @desc Reduce unnecessary back and forth motions inbetween
 * Active Chain Skills?
 * @default true
 *
 * @param Effect:struct
 * @text Chain Confirm Visual
 * @type struct<Effect>
 * @desc The settings for the Chain confirm visuals.
 * @default {"Animation":"","AnimationID:num":"12","Mirror:eval":"false","Mute:eval":"true","Popups":"","PopupText:str":"CHAIN","TextColor:str":"0","FlashColor:eval":"[255, 255, 255, 160]","FlashDuration:num":"60"}
 *
 * @param Sound:struct
 * @text Chain Confirm Sound
 * @type struct<Sound>
 * @desc The settings for the Chain confirm sound effect.
 * @default {"name:str":"Skill3","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @param UI:struct
 * @text On-Screen UI Visuals
 * @type struct<UI>
 * @desc Determine where and how the UI visuals look while performing Active Chain Skills.
 * @default {"General":"","BackgroundImage:str":"","LargeIconSmoothing:eval":"false","OpacityDisable:num":"128","OpacityRate:num":"16","Scale:num":"0.50","contentDrawJS:func":"\"// Declare Constants\\nconst skill = arguments[0];\\nconst keyIcon = arguments[1];\\nconst costText = arguments[2];\\nconst bitmap = this.contents;\\nconst lineHeight = this.lineHeight();\\nconst iconIndex = skill.iconIndex;\\nconst iconSize = ImageManager.iconWidth * 2;\\n\\n// Draw Large Icon\\nconst hx = Math.ceil(bitmap.width / 2);\\nthis.drawActiveChainLargeIcon(iconIndex, hx, 0, iconSize);\\n\\n// Draw Keybind Icon\\nconst kx = hx - iconSize;\\nthis.drawActiveChainLargeIcon(keyIcon, kx, 0, iconSize);\\n\\n// Draw Rounded Rectangle\\nconst rx = 0;\\nconst ry = Math.round(iconSize + lineHeight * 0.25);\\nconst rw = bitmap.width;\\nconst rh = Math.round(lineHeight * 1.75);\\nconst radius = 20;\\nconst rcolor = ColorManager.dimColor1();\\nbitmap.fillRoundRect(rx, ry, rw, rh, radius, rcolor);\\n\\n// Draw Skill Name\\nconst name = skill.name;\\nconst ny = ry + ((costText.length > 0) ? 0 : Math.floor((rh - lineHeight) / 2));\\nthis.drawText(name, 0, ny, bitmap.width, 'center');\\n\\n// Draw Cost Text\\nconst cw = this.textSizeEx(costText).width;\\nconst cx = Math.floor((bitmap.width - cw) / 2);\\nconst cy = ry + Math.ceil(lineHeight * 0.75);\\nthis.drawTextEx(costText, cx, cy);\"","backgroundDrawJS:func":"\"// Declare Constants\\nconst bitmap = this;\\nconst width = bitmap.width / 4;\\nconst height = bitmap.height;\\nconst x = bitmap.width - width;\\nconst y = 0;\\nconst color1 = ColorManager.dimColor1();\\nconst color2 = ColorManager.dimColor2();\\n\\n// Draw Gradient Background\\nbitmap.gradientFillRect(x, y, width, height, color2, color1);\"","Keybinds":"","KeybindOffsets":"","KeybindUiOffsetX:num":"+0","KeybindUiOffsetY:num":"+0","Down":"","downKeyIcon:num":"0","downBackgroundImage:str":"","downRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst h = lines * Window_Base.prototype.lineHeight();\\nconst x = Graphics.width - Math.floor(uiWidth / 2);\\nconst y = Math.floor(Graphics.height / 2) + h + spacing;\\n\\n// Return Rectangle\\nconst rectWidth = Math.max(192, w);\\nreturn new Rectangle(x, y, rectWidth, h);\"","Left":"","leftKeyIcon:num":"0","leftBackgroundImage:str":"","leftRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst h = lines * Window_Base.prototype.lineHeight();\\nconst x = Graphics.width - Math.floor(uiWidth / 2) - w - spacing;\\nconst y = Math.floor(Graphics.height / 2);\\n\\n// Return Rectangle\\nconst rectWidth = Math.max(192, w);\\nreturn new Rectangle(x, y, rectWidth, h);\"","Right":"","rightKeyIcon:num":"0","rightBackgroundImage:str":"","rightRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst h = lines * Window_Base.prototype.lineHeight();\\nconst x = Graphics.width - Math.floor(uiWidth / 2) + w + spacing;\\nconst y = Math.floor(Graphics.height / 2);\\n\\n// Return Rectangle\\nconst rectWidth = Math.max(192, w);\\nreturn new Rectangle(x, y, rectWidth, h);\"","Up":"","upKeyIcon:num":"0","upBackgroundImage:str":"","upRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst h = lines * Window_Base.prototype.lineHeight();\\nconst x = Graphics.width - Math.floor(uiWidth / 2);\\nconst y = Math.floor(Graphics.height / 2) - h - spacing;\\n\\n// Return Rectangle\\nconst rectWidth = Math.max(192, w);\\nreturn new Rectangle(x, y, rectWidth, h);\"","Ok":"","okKeyIcon:num":"0","okBackgroundImage:str":"","okRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Graphics.width - Math.floor(uiWidth / 2) - w - spacing;\\nconst y = Math.floor(Graphics.height / 2) + h + spacing;\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","Cancel":"","cancelKeyIcon:num":"0","cancelBackgroundImage:str":"","cancelRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Graphics.width - Math.floor(uiWidth / 2) + w + spacing;\\nconst y = Math.floor(Graphics.height / 2) + h + spacing;\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","PageUp":"","pageupKeyIcon:num":"0","pageupBackgroundImage:str":"","pageupRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Graphics.width - Math.floor(uiWidth / 2) - w - spacing;\\nconst y = Math.floor(Graphics.height / 2) - h - spacing;\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","PageDown":"","pagedownKeyIcon:num":"0","pagedownBackgroundImage:str":"","pagedownRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Graphics.width - Math.floor(uiWidth / 2) + w + spacing;\\nconst y = Math.floor(Graphics.height / 2) - h - spacing;\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","Shift":"","shiftKeyIcon:num":"0","shiftBackgroundImage:str":"","shiftRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst h = lines * Window_Base.prototype.lineHeight();\\nconst x = Graphics.width - Math.floor(uiWidth / 2);\\nconst y = Math.floor(Graphics.height / 2);\\n\\n// Return Rectangle\\nconst rectWidth = Math.max(192, w);\\nreturn new Rectangle(x, y, rectWidth, h);\""}
 *
 * @param Tooltip:struct
 * @text UI Tooltip Settings
 * @type struct<Tooltip>
 * @desc Settings for the Active Chain Tooltips Window.
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
 * Effect Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Effect:
 *
 * @param Animation
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when the effect activates.
 * Requires VisuMZ_0_CoreEngine.
 * @default 12
 *
 * @param Mirror:eval
 * @text Mirror Animation
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param Mute:eval
 * @text Mute Animation
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default true
 *
 * @param Popups
 *
 * @param PopupText:str
 * @text Text
 * @parent Popups
 * @desc Text displayed upon the effect activating.
 * @default CHAIN
 *
 * @param TextColor:str
 * @text Text Color
 * @parent Popups
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 255, 255, 160]
 * 
 * @param FlashDuration:num
 * @text Flash Duration
 * @parent Popups
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param name:str
 * @text Filename
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Skill3
 *
 * @param volume:num
 * @text Volume
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param pitch:num
 * @text Pitch
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param pan:num
 * @text Pan
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
 * Active Chain Skill inputs are active.
 * @default "// Declare Constants\nconst skill = arguments[0];\nconst keyIcon = arguments[1];\nconst costText = arguments[2];\nconst bitmap = this.contents;\nconst lineHeight = this.lineHeight();\nconst iconIndex = skill.iconIndex;\nconst iconSize = ImageManager.iconWidth * 2;\n\n// Draw Large Icon\nconst hx = Math.ceil(bitmap.width / 2);\nthis.drawActiveChainLargeIcon(iconIndex, hx, 0, iconSize);\n\n// Draw Keybind Icon\nconst kx = hx - iconSize;\nthis.drawActiveChainLargeIcon(keyIcon, kx, 0, iconSize);\n\n// Draw Rounded Rectangle\nconst rx = 0;\nconst ry = Math.round(iconSize + lineHeight * 0.25);\nconst rw = bitmap.width;\nconst rh = Math.round(lineHeight * 1.75);\nconst radius = 20;\nconst rcolor = ColorManager.dimColor1();\nbitmap.fillRoundRect(rx, ry, rw, rh, radius, rcolor);\n\n// Draw Skill Name\nconst name = skill.name;\nconst ny = ry + ((costText.length > 0) ? 0 : Math.floor((rh - lineHeight) / 2));\nthis.drawText(name, 0, ny, bitmap.width, 'center');\n\n// Draw Cost Text\nconst cw = this.textSizeEx(costText).width;\nconst cx = Math.floor((bitmap.width - cw) / 2);\nconst cy = ry + Math.ceil(lineHeight * 0.75);\nthis.drawTextEx(costText, cx, cy);"
 *
 * @param backgroundDrawJS:func
 * @text JS: Draw Background
 * @parent General
 * @type note
 * @desc Code used to draw the background layer while
 * Active Chain Skill inputs are active.
 * @default "// Declare Constants\nconst bitmap = this;\nconst width = bitmap.width / 4;\nconst height = bitmap.height;\nconst x = bitmap.width - width;\nconst y = 0;\nconst color1 = ColorManager.dimColor1();\nconst color2 = ColorManager.dimColor2();\n\n// Draw Gradient Background\nbitmap.gradientFillRect(x, y, width, height, color2, color1);"
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst h = lines * Window_Base.prototype.lineHeight();\nconst x = Graphics.width - Math.floor(uiWidth / 2);\nconst y = Math.floor(Graphics.height / 2) + h + spacing;\n\n// Return Rectangle\nconst rectWidth = Math.max(192, w);\nreturn new Rectangle(x, y, rectWidth, h);"
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst h = lines * Window_Base.prototype.lineHeight();\nconst x = Graphics.width - Math.floor(uiWidth / 2) - w - spacing;\nconst y = Math.floor(Graphics.height / 2);\n\n// Return Rectangle\nconst rectWidth = Math.max(192, w);\nreturn new Rectangle(x, y, rectWidth, h);"
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst h = lines * Window_Base.prototype.lineHeight();\nconst x = Graphics.width - Math.floor(uiWidth / 2) + w + spacing;\nconst y = Math.floor(Graphics.height / 2);\n\n// Return Rectangle\nconst rectWidth = Math.max(192, w);\nreturn new Rectangle(x, y, rectWidth, h);"
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst h = lines * Window_Base.prototype.lineHeight();\nconst x = Graphics.width - Math.floor(uiWidth / 2);\nconst y = Math.floor(Graphics.height / 2) - h - spacing;\n\n// Return Rectangle\nconst rectWidth = Math.max(192, w);\nreturn new Rectangle(x, y, rectWidth, h);"
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Graphics.width - Math.floor(uiWidth / 2) - w - spacing;\nconst y = Math.floor(Graphics.height / 2) + h + spacing;\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Graphics.width - Math.floor(uiWidth / 2) + w + spacing;\nconst y = Math.floor(Graphics.height / 2) + h + spacing;\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Graphics.width - Math.floor(uiWidth / 2) - w - spacing;\nconst y = Math.floor(Graphics.height / 2) - h - spacing;\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Graphics.width - Math.floor(uiWidth / 2) + w + spacing;\nconst y = Math.floor(Graphics.height / 2) - h - spacing;\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst h = lines * Window_Base.prototype.lineHeight();\nconst x = Graphics.width - Math.floor(uiWidth / 2);\nconst y = Math.floor(Graphics.height / 2);\n\n// Return Rectangle\nconst rectWidth = Math.max(192, w);\nreturn new Rectangle(x, y, rectWidth, h);"
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

const _0x1f5981=_0x5538;(function(_0xd9ce10,_0x21a7fa){const _0x1f1149=_0x5538,_0x3f4c10=_0xd9ce10();while(!![]){try{const _0x17bf74=-parseInt(_0x1f1149(0x317))/0x1+parseInt(_0x1f1149(0x280))/0x2+-parseInt(_0x1f1149(0x2d6))/0x3+parseInt(_0x1f1149(0x306))/0x4*(-parseInt(_0x1f1149(0x279))/0x5)+-parseInt(_0x1f1149(0x1e4))/0x6*(parseInt(_0x1f1149(0x2cf))/0x7)+parseInt(_0x1f1149(0x2df))/0x8*(-parseInt(_0x1f1149(0x243))/0x9)+-parseInt(_0x1f1149(0x252))/0xa*(-parseInt(_0x1f1149(0x2a7))/0xb);if(_0x17bf74===_0x21a7fa)break;else _0x3f4c10['push'](_0x3f4c10['shift']());}catch(_0x55e586){_0x3f4c10['push'](_0x3f4c10['shift']());}}}(_0x31bb,0xbf801));function _0x31bb(){const _0x254e13=['windowPadding','match','Game_BattlerBase_meetsSkillConditions','loadSystem','createContents','Sound','ARRAYSTR','description','stepBack','max','PWfxZ','waitForMovement','hasActiveChainSkillsConflicts','opacityLevel','isRestricted','RegExp','anchor','version','toUpperCase','cqRtA','36PEDihe','yrSsO','scale','stepForward','Linear','IconSet','_targets','ForcedChainSkill','updateOpacity','%1RectJS','pageup','hide','_activeChainSkillsUiTooltipWindow','isSupportMessageKeywords','KeypressUiOffsetX','enabled','RfimV','checkActiveChainSkillIncompatibility','sAnBF','canUse','onPress','AutoSkillTriggers','createActiveChainSkillUiBackground','create','KeybindUiOffsetX','STRUCT','isBTB','resetFontSettings','performMoveToPoint','floor','resizeWindow','_dimensions','_action','toLowerCase','isBeingTouched','Game_Action_applyGlobal','createAllSkillCostText','_subject','CYcTP','setActiveChainSkill','push','createActiveChainSkillUiContainer','hasActiveChainSkillsKey','Sprite_Actor_stepBack','_hasActiveChainSkillsConflict','VisuMZ_0_CoreEngine','Settings','show','itemPadding','includes','OffsetX','evade','canPerformActiveChainSkills','canConcoctItems','isInputting','_actions','startAction','KEY_PRESS_OFFSET_Y','PopupText','refresh','prototype','left','ZFcxa','_targetBattlerKey','playActiveChainSkillsRegister','_bypassStepForward_ActiveChainSkill','ToibO','WindowSkin','visible','JSON','fillRect','save','AnimationID','setAutoBattleActiveChainSkill','_pressed','_bypassStepBackward_ActiveChainSkill','getInputButtonString','playSe','right','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','gEiRB','_scene','KeybindUiOffsetY','cTOFd','dQySD','%1BackgroundImage','BattleManager_startAction','Window_BattleLog_addMeleeReturnActionSet','getActiveChainSkillSelected','onMouseExit','createActiveChainSkillUiButtons','clear','contents','setPerformActionEnd','NUM','3825UJJRPL','VisuStella\x20MZ\x20Auto\x20Skill\x20Triggers\x20needs\x20to\x20be\x20updated!','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','updateActiveChainSkills','isLearnedSkill','endAction','createActiveChainSkillUiElements','fillStyle','ARRAYSTRUCT','addMeleeReturnActionSet','setupDescriptionText','ActiveChainSkills','trim','_key','applyGlobal','40lDOOet','_lastSkillID','hasSkill','performMoveToPointActiveChain','_hovered','applyActiveChainSkills','Scene_Battle_update','_activeChainSkillKeys','opacity','aliveMembers','VisuMZ_3_ItemThrowSkills','setupTextPopup','ACTIVE_CHAIN_REDUCE_BACK_FORTH','applyKeyAlternatives','length','MOUSE_OFFSET_Y','gesNb','_hoverState','Game_Battler_performActionEnd','_victoryPhase','test','isActor','FUNC','VisuMZ_3_ItemConcoctSkills','initialize','processActiveChainSkillKeyBinds','iconWidth','textSizeEx','volume','_context','onClick','performJump','IxRtH','_contentWindow','fill','parse','_skill','call','round','121270pILnqI','_battler','quadraticCurveTo','WFTbt','height','requestMotionActiveChain','cancel','442282iZGOuz','WINDOW_SKIN_OPACITY','Effect','_activeChainSkillButtons','Scene_Battle_createDisplayObjects','qxgjb','moveTo','ryokU','canThrowItems','lineTo','isReleased','Game_Battler_forceAction','clamp','Keys','clampPosition','xesvb','allowUpdateBattleAniSpeed','ConvertParams','meetsSkillConditions','LNXJb','getSkillIdWithName','createBackgroundSprite','isBusy','baseTextRect','oDFTK','isActiveChainSkillQueued','filter','_lastInputType','note','clearActiveChainConfirmSwitch','windowskin','VisuMZ_1_BattleCore','performJumpActiveChain','KEY_PRESS_OFFSET_X','willConflictActiveChainSkills','iconHeight','fillRoundRect','blt','createContentWindow','13020997fBTqCK','down','addChild','isWordWrapEnabled','isClickEnabled','YJOtI','getLastUsedGamepadType','BattleManager_endAction','updatePosition','JRjVv','LJjjS','hitTest','beginPath','WindowOpacity','TextColor','item','createActiveChainSkillsUiTooltipWindow','PMBAA','ConfirmSwitch','xWoHe','_lastActor','isTriggered','isActiveChainSkillsUiVisible','LearnedChainSkill','tmJQf','Window_BattleLog_performActionEnd','aKZZs','FlashDuration','context','activateActiveChainConfirmSwitch','update','map','applyInverse','wstnv','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_homeX','koZyN','lJeQd','setupText','callNextMethod','1638973RboaeH','Sprite_Actor_stepForward','Scene_Battle_allowUpdateBattleAniSpeed','exit','WINDOW_SCALE','meetsActiveChainSkillConditions','backOpacity','1175181qmicQw','getActiveChainSkillAnimation','EVAL','width','updateBitmap','constructor','drawTextEx','meetsUpdateBitmapConditions','ARRAYEVAL','5672xUegOt','ZLbti','MOUSE_OFFSET_X','restore','ENABLED','members','_requestRefresh','_text','aILrx','_homeY','ChainOnly','updateBackOpacity','BackgroundImage','OffsetY','name','clone','worldTransform','shift','mNxlL','bitmap','ZnGUG','WINDOW_SKIN_FILENAME','queueActiveChainSkill','return\x200','forceActionActiveChain','subject','setSkill','VYzqC','STR','createContentSprite','ARRAYNUM','BattleCore','fhJLF','IXAWo','tooltipWindow','onMouseEnter','battler','status','VisuMZ_3_AutoSkillTriggers','92wqsFgO','setActiveChainSkillSelected','isAutoBattle','format','iXMGD','VisuMZ_2_BattleSystemBTB','isSkill','ConfirmAnimation','AvailableChainSkill','createDisplayObjects','setValue','backgroundDrawJS','convertMessageKeywords','Scale','_activeChainSkillUiContainer','_pressedDuration','requestRefresh','1515936uDrblL','_activeChainSkillSelected','EvoMatrixSkills','pagedown','_contentSprite','canActiveChainSkill','getActiveChainSkillsKey','isAlive','performActionEnd','Tooltip','initMembers','_performActionEnd','contentDrawJS','updateActiveChainSkillsUiOpacity','_forceAction','clearActiveChainSkills','padding','hDqSH','randomInt','playActiveChainSkillEffects','imageSmoothingEnabled','mUBvK','processTouch'];_0x31bb=function(){return _0x254e13;};return _0x31bb();}function _0x5538(_0x2bf6be,_0x204dca){const _0x31bbcc=_0x31bb();return _0x5538=function(_0x55384a,_0x496891){_0x55384a=_0x55384a-0x1c5;let _0x4bc607=_0x31bbcc[_0x55384a];return _0x4bc607;},_0x5538(_0x2bf6be,_0x204dca);}var label=_0x1f5981(0x24e),tier=tier||0x0,dependencies=[_0x1f5981(0x29f),'VisuMZ_1_SkillsStatesCore'],pluginData=$plugins[_0x1f5981(0x29a)](function(_0x4b105c){const _0x2810ec=_0x1f5981;return _0x4b105c[_0x2810ec(0x304)]&&_0x4b105c[_0x2810ec(0x1d7)][_0x2810ec(0x215)]('['+label+']');})[0x0];VisuMZ[label][_0x1f5981(0x212)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x1f5981(0x291)]=function(_0x2e3645,_0x380e68){const _0x580191=_0x1f5981;for(const _0x11e849 in _0x380e68){if(_0x11e849[_0x580191(0x1d1)](/(.*):(.*)/i)){const _0x3ae894=String(RegExp['$1']),_0x2469e0=String(RegExp['$2'])[_0x580191(0x1e2)]()[_0x580191(0x24f)]();let _0x559892,_0x2b2027,_0x1db9da;switch(_0x2469e0){case _0x580191(0x242):_0x559892=_0x380e68[_0x11e849]!==''?Number(_0x380e68[_0x11e849]):0x0;break;case _0x580191(0x2fd):_0x2b2027=_0x380e68[_0x11e849]!==''?JSON['parse'](_0x380e68[_0x11e849]):[],_0x559892=_0x2b2027[_0x580191(0x2c6)](_0x46c1ce=>Number(_0x46c1ce));break;case _0x580191(0x2d8):_0x559892=_0x380e68[_0x11e849]!==''?eval(_0x380e68[_0x11e849]):null;break;case _0x580191(0x2de):_0x2b2027=_0x380e68[_0x11e849]!==''?JSON[_0x580191(0x275)](_0x380e68[_0x11e849]):[],_0x559892=_0x2b2027[_0x580191(0x2c6)](_0xe51850=>eval(_0xe51850));break;case _0x580191(0x229):_0x559892=_0x380e68[_0x11e849]!==''?JSON[_0x580191(0x275)](_0x380e68[_0x11e849]):'';break;case'ARRAYJSON':_0x2b2027=_0x380e68[_0x11e849]!==''?JSON[_0x580191(0x275)](_0x380e68[_0x11e849]):[],_0x559892=_0x2b2027[_0x580191(0x2c6)](_0x37647b=>JSON['parse'](_0x37647b));break;case _0x580191(0x268):_0x559892=_0x380e68[_0x11e849]!==''?new Function(JSON['parse'](_0x380e68[_0x11e849])):new Function(_0x580191(0x2f6));break;case'ARRAYFUNC':_0x2b2027=_0x380e68[_0x11e849]!==''?JSON[_0x580191(0x275)](_0x380e68[_0x11e849]):[],_0x559892=_0x2b2027[_0x580191(0x2c6)](_0x5c77fc=>new Function(JSON['parse'](_0x5c77fc)));break;case _0x580191(0x2fb):_0x559892=_0x380e68[_0x11e849]!==''?String(_0x380e68[_0x11e849]):'';break;case _0x580191(0x1d6):_0x2b2027=_0x380e68[_0x11e849]!==''?JSON[_0x580191(0x275)](_0x380e68[_0x11e849]):[],_0x559892=_0x2b2027[_0x580191(0x2c6)](_0x23bc7a=>String(_0x23bc7a));break;case _0x580191(0x1fd):_0x1db9da=_0x380e68[_0x11e849]!==''?JSON[_0x580191(0x275)](_0x380e68[_0x11e849]):{},_0x559892=VisuMZ['ConvertParams']({},_0x1db9da);break;case _0x580191(0x24b):_0x2b2027=_0x380e68[_0x11e849]!==''?JSON[_0x580191(0x275)](_0x380e68[_0x11e849]):[],_0x559892=_0x2b2027[_0x580191(0x2c6)](_0x5ccbe4=>VisuMZ[_0x580191(0x291)]({},JSON[_0x580191(0x275)](_0x5ccbe4)));break;default:continue;}_0x2e3645[_0x3ae894]=_0x559892;}}return _0x2e3645;},(_0x105461=>{const _0x2745c1=_0x1f5981,_0x4ec7d3=_0x105461[_0x2745c1(0x2ed)];for(const _0x253f9f of dependencies){if('IXAWo'!==_0x2745c1(0x300)){if(_0x53db8d[_0x2745c1(0x305)]&&_0x2af23c[_0x2745c1(0x1f9)]['version']<1.12){const _0x5de7df=_0x2745c1(0x244);_0xe133dc(_0x5de7df),_0x21bdad[_0x2745c1(0x2d2)]();}}else{if(!Imported[_0x253f9f]){if(_0x2745c1(0x298)!=='oDFTK'){_0x563fb2[_0x2745c1(0x220)][_0x2745c1(0x2c5)][_0x2745c1(0x277)](this),this[_0x2745c1(0x1ec)](),this[_0x2745c1(0x2af)]();if(this[_0x2745c1(0x2dd)]())this[_0x2745c1(0x2da)]();}else{alert(_0x2745c1(0x233)[_0x2745c1(0x309)](_0x4ec7d3,_0x253f9f)),SceneManager[_0x2745c1(0x2d2)]();break;}}}}const _0x260b7f=_0x105461[_0x2745c1(0x1d7)];if(_0x260b7f[_0x2745c1(0x1d1)](/\[Version[ ](.*?)\]/i)){const _0x26247b=Number(RegExp['$1']);_0x26247b!==VisuMZ[label][_0x2745c1(0x1e1)]&&(alert(_0x2745c1(0x245)[_0x2745c1(0x309)](_0x4ec7d3,_0x26247b)),SceneManager[_0x2745c1(0x2d2)]());}if(_0x260b7f[_0x2745c1(0x1d1)](/\[Tier[ ](\d+)\]/i)){const _0x1a5b4c=Number(RegExp['$1']);_0x1a5b4c<tier?'Opllm'===_0x2745c1(0x2f1)?(this[_0x2745c1(0x20d)](),this[_0x2745c1(0x1fa)](),this[_0x2745c1(0x23e)](),this[_0x2745c1(0x2b7)](),this[_0x2745c1(0x1f5)]()):(alert(_0x2745c1(0x2c9)[_0x2745c1(0x309)](_0x4ec7d3,_0x1a5b4c,tier)),SceneManager[_0x2745c1(0x2d2)]()):_0x2745c1(0x222)===_0x2745c1(0x222)?tier=Math[_0x2745c1(0x1d9)](_0x1a5b4c,tier):(_0x7b4de5[_0x2745c1(0x25e)]&&this[_0x2745c1(0x209)]&&this['_subject']['isActor']()&&(this[_0x2745c1(0x209)][_0x2745c1(0x225)]=this[_0x2745c1(0x209)]['_bypassStepBackward_ActiveChainSkill'],this[_0x2745c1(0x209)][_0x2745c1(0x22f)]=![]),_0x54e30e[_0x2745c1(0x24e)][_0x2745c1(0x2ae)][_0x2745c1(0x277)](this));}VisuMZ[_0x2745c1(0x291)](VisuMZ[label][_0x2745c1(0x212)],_0x105461['parameters']);})(pluginData),VisuMZ['ActiveChainSkills'][_0x1f5981(0x1df)]={'AvailableChainSkill':/<(?:AVAILABLE CHAIN|CHAIN) SKILL[ ](.*):[ ](.*)>/gi,'ForcedChainSkill':/<(?:ALWAYS|FORCE|FORCED) CHAIN SKILL[ ](.*):[ ](.*)>/gi,'LearnedChainSkill':/<(?:LEARNED|KNOWN) CHAIN SKILL[ ](.*):[ ](.*)>/gi,'ChainOnly':/<(?:ACTIVE CHAIN|CHAIN) ONLY>/i,'ConfirmAnimation':/<(?:CHAIN|ACTIVE CHAIN) CONFIRM (?:ANI|ANIMATION):[ ](\d+)>/i},VisuMZ['ActiveChainSkills'][_0x1f5981(0x28d)]=['down','left',_0x1f5981(0x232),'up','ok','cancel',_0x1f5981(0x1ee),'pagedown','shift'],VisuMZ[_0x1f5981(0x24e)][_0x1f5981(0x25f)]=function(_0x5bf8ae){const _0x549323=_0x1f5981;_0x5bf8ae=_0x5bf8ae[_0x549323(0x205)]()[_0x549323(0x24f)]();switch(_0x5bf8ae){case'2':return _0x549323(0x2a8);case'4':return _0x549323(0x221);case'6':return'right';case'8':return'up';case's':return _0x549323(0x2f0);case'z':return'ok';case'x':return _0x549323(0x27f);case'q':return _0x549323(0x1ee);case'w':return'pagedown';}return _0x5bf8ae;},DataManager['hasActiveChainSkillsConflicts']=function(_0x582344){const _0x4e453f=_0x1f5981;if(!_0x582344)return!![];if(!DataManager[_0x4e453f(0x30c)](_0x582344))return!![];this[_0x4e453f(0x210)]=this['_hasActiveChainSkillsConflict']||{};if(this[_0x4e453f(0x210)][_0x582344['id']])return this[_0x4e453f(0x210)][_0x582344['id']];const _0x75de7c=_0x582344[_0x4e453f(0x29c)]||'',_0x749e60=['InputComboSkills',_0x4e453f(0x319)];this['_hasActiveChainSkillsConflict'][_0x582344['id']]=![];for(const _0x52fa7e of _0x749e60){if(!VisuMZ[_0x52fa7e])continue;const _0x489ca4=VisuMZ[_0x52fa7e][_0x4e453f(0x1df)];for(const _0x2f4443 in _0x489ca4){if(_0x4e453f(0x2bf)!==_0x4e453f(0x27c)){if(_0x75de7c[_0x4e453f(0x1d1)](_0x489ca4[_0x2f4443])){this[_0x4e453f(0x210)][_0x582344['id']]=!![];break;}}else{const _0x799e07=_0x4e453f(0x244);_0x39c758(_0x799e07),_0x52162f[_0x4e453f(0x2d2)]();}}if(this[_0x4e453f(0x210)][_0x582344['id']])break;}return Imported[_0x4e453f(0x25c)]&&this[_0x4e453f(0x288)](_0x582344)&&(this[_0x4e453f(0x210)][_0x582344['id']]=!![]),Imported[_0x4e453f(0x269)]&&this[_0x4e453f(0x219)](_0x582344)&&(this[_0x4e453f(0x210)][_0x582344['id']]=!![]),Imported[_0x4e453f(0x269)]&&this['canConcoctItems'](_0x582344)&&(_0x4e453f(0x1ca)!==_0x4e453f(0x1ca)?this[_0x4e453f(0x271)](_0x1651d8,_0xc06fd,_0x49febb):this[_0x4e453f(0x210)][_0x582344['id']]=!![]),this[_0x4e453f(0x210)][_0x582344['id']];},DataManager[_0x1f5981(0x2d7)]=function(_0x49344c){const _0x13af2f=_0x1f5981,_0x2ca2bd=VisuMZ[_0x13af2f(0x24e)]['Settings'][_0x13af2f(0x282)]['AnimationID'];if(!_0x49344c)return _0x2ca2bd;const _0xc7f24c=VisuMZ['ActiveChainSkills'][_0x13af2f(0x1df)],_0xc9b403=_0x49344c[_0x13af2f(0x29c)]||'';if(_0xc9b403[_0x13af2f(0x1d1)](_0xc7f24c[_0x13af2f(0x30d)])){if(_0x13af2f(0x1ce)===_0x13af2f(0x1ce))return Number(RegExp['$1']);else this['callNextMethod']();}return _0x2ca2bd;},Bitmap[_0x1f5981(0x220)][_0x1f5981(0x2a4)]=function(_0x2ff26a,_0x35a01e,_0x129130,_0x3c9007,_0x4e9575,_0x1e678c){const _0x236a83=_0x1f5981,_0x860de4=_0x2ff26a+_0x129130,_0xb7a1e8=_0x35a01e+_0x3c9007,_0x1377fe=this['context'];_0x1377fe[_0x236a83(0x22b)](),_0x1377fe[_0x236a83(0x24a)]=_0x1e678c,_0x1377fe[_0x236a83(0x2b3)](),_0x1377fe[_0x236a83(0x286)](_0x2ff26a+_0x4e9575,_0x35a01e),_0x1377fe[_0x236a83(0x289)](_0x860de4-_0x4e9575,_0x35a01e),_0x1377fe[_0x236a83(0x27b)](_0x860de4,_0x35a01e,_0x860de4,_0x35a01e+_0x4e9575),_0x1377fe['lineTo'](_0x860de4,_0x35a01e+_0x3c9007-_0x4e9575),_0x1377fe['quadraticCurveTo'](_0x860de4,_0xb7a1e8,_0x860de4-_0x4e9575,_0xb7a1e8),_0x1377fe['lineTo'](_0x2ff26a+_0x4e9575,_0xb7a1e8),_0x1377fe[_0x236a83(0x27b)](_0x2ff26a,_0xb7a1e8,_0x2ff26a,_0xb7a1e8-_0x4e9575),_0x1377fe[_0x236a83(0x289)](_0x2ff26a,_0x35a01e+_0x4e9575),_0x1377fe[_0x236a83(0x27b)](_0x2ff26a,_0x35a01e,_0x2ff26a+_0x4e9575,_0x35a01e),_0x1377fe[_0x236a83(0x274)](),_0x1377fe[_0x236a83(0x2e2)](),this['_baseTexture'][_0x236a83(0x2c5)]();},SoundManager[_0x1f5981(0x224)]=function(){const _0x875bf6=_0x1f5981,_0x53a302=VisuMZ[_0x875bf6(0x24e)]['Settings'][_0x875bf6(0x1d5)],_0x3fc411={'name':_0x53a302['name'],'volume':_0x53a302[_0x875bf6(0x26e)],'pitch':_0x53a302['pitch'],'pan':_0x53a302['pan']};AudioManager[_0x875bf6(0x231)](_0x3fc411);},Game_Temp[_0x1f5981(0x220)][_0x1f5981(0x1c8)]=function(){const _0x2ea43b=_0x1f5981;this[_0x2ea43b(0x259)]=undefined,this[_0x2ea43b(0x318)]=undefined;},Game_Temp['prototype']['canActiveChainSkill']=function(){const _0x5796e4=_0x1f5981;if(!BattleManager[_0x5796e4(0x209)])return![];if(!BattleManager[_0x5796e4(0x209)][_0x5796e4(0x267)]())return![];if(!BattleManager[_0x5796e4(0x209)][_0x5796e4(0x31e)]())return![];if(BattleManager[_0x5796e4(0x209)][_0x5796e4(0x1de)]())return![];if(BattleManager[_0x5796e4(0x21a)]())return![];if(BattleManager[_0x5796e4(0x265)])return![];if($gameTroop[_0x5796e4(0x25b)]()['length']<=0x0)return![];if($gameMessage[_0x5796e4(0x296)]())return![];return this[_0x5796e4(0x259)]!==undefined;},Game_Temp[_0x1f5981(0x220)][_0x1f5981(0x20b)]=function(_0x2e3f1d,_0x312b5e){const _0x1a8780=_0x1f5981;if(_0x312b5e<=0x0)return;this[_0x1a8780(0x259)]=this[_0x1a8780(0x259)]||{},this[_0x1a8780(0x259)][_0x2e3f1d]=_0x312b5e,this[_0x1a8780(0x318)]=null;},Game_Temp[_0x1f5981(0x220)][_0x1f5981(0x31d)]=function(_0x43cf73){const _0xff8ddc=_0x1f5981;if(!this['_activeChainSkillKeys'])return null;return this[_0xff8ddc(0x259)][_0x43cf73];},Game_Temp[_0x1f5981(0x220)][_0x1f5981(0x20e)]=function(_0x152707){const _0x59a043=_0x1f5981;return!!this[_0x59a043(0x31d)](_0x152707);},Game_Temp[_0x1f5981(0x220)][_0x1f5981(0x307)]=function(_0x4bfd6e){this['_activeChainSkillSelected']=_0x4bfd6e['id'];},Game_Temp['prototype'][_0x1f5981(0x23c)]=function(){const _0x1fd145=_0x1f5981;return this[_0x1fd145(0x318)];},Game_Temp['prototype']['clearActiveChainConfirmSwitch']=function(){const _0x59d64e=_0x1f5981,_0x4aa8fa=VisuMZ[_0x59d64e(0x24e)][_0x59d64e(0x212)]['ConfirmSwitch'];if(_0x4aa8fa>0x0)$gameSwitches[_0x59d64e(0x310)](_0x4aa8fa,![]);},Game_Temp[_0x1f5981(0x220)][_0x1f5981(0x2c4)]=function(){const _0x1550a4=_0x1f5981,_0x4bb787=VisuMZ[_0x1550a4(0x24e)][_0x1550a4(0x212)][_0x1550a4(0x2b9)];if(_0x4bb787>0x0)$gameSwitches[_0x1550a4(0x310)](_0x4bb787,!![]);},VisuMZ[_0x1f5981(0x24e)][_0x1f5981(0x207)]=Game_Action[_0x1f5981(0x220)][_0x1f5981(0x251)],Game_Action[_0x1f5981(0x220)][_0x1f5981(0x251)]=function(){const _0x4c2b14=_0x1f5981;VisuMZ[_0x4c2b14(0x24e)][_0x4c2b14(0x207)][_0x4c2b14(0x277)](this),this['applyActiveChainSkills']();},Game_Action[_0x1f5981(0x220)][_0x1f5981(0x257)]=function(){const _0x3bdb57=_0x1f5981;$gameTemp[_0x3bdb57(0x1c8)](),$gameTemp[_0x3bdb57(0x29d)]();if(this[_0x3bdb57(0x2a2)]())return;this['processActiveChainSkillKeyBinds']('AvailableChainSkill'),this[_0x3bdb57(0x26b)](_0x3bdb57(0x1eb)),this[_0x3bdb57(0x26b)](_0x3bdb57(0x2be)),this[_0x3bdb57(0x2f8)]()[_0x3bdb57(0x308)]()&&this[_0x3bdb57(0x22d)]();},Game_Action[_0x1f5981(0x220)][_0x1f5981(0x2a2)]=function(){const _0x9415c1=_0x1f5981;if(!this[_0x9415c1(0x2b6)]())return!![];if(!this['isSkill']())return!![];if(!this[_0x9415c1(0x2f8)]())return!![];if(!this[_0x9415c1(0x2f8)]()['isActor']())return!![];if(DataManager[_0x9415c1(0x1dc)](this['item']()))return!![];if(Imported[_0x9415c1(0x30b)]&&BattleManager[_0x9415c1(0x1fe)]())return!![];return![];},Game_Action[_0x1f5981(0x220)]['processActiveChainSkillKeyBinds']=function(_0x2da6c3){const _0x57b78b=_0x1f5981,_0x459211=this[_0x57b78b(0x2f8)](),_0x20a6f8=VisuMZ['ActiveChainSkills'][_0x57b78b(0x28d)][_0x57b78b(0x2ee)](),_0x10e764=VisuMZ[_0x57b78b(0x24e)]['RegExp'],_0x5a7645=this['item']()[_0x57b78b(0x29c)]||'',_0x113eef=_0x5a7645[_0x57b78b(0x1d1)](_0x10e764[_0x2da6c3]);if(_0x113eef){if(_0x57b78b(0x238)===_0x57b78b(0x2cb))this[_0x57b78b(0x22e)]=![],this[_0x57b78b(0x256)]=![];else for(const _0xe6db4a of _0x113eef){_0xe6db4a[_0x57b78b(0x1d1)](_0x10e764[_0x2da6c3]);let _0x1ccd15=String(RegExp['$1'])[_0x57b78b(0x205)]()[_0x57b78b(0x24f)]();const _0x1b6e0a=String(RegExp['$2']);_0x1ccd15=VisuMZ[_0x57b78b(0x24e)][_0x57b78b(0x25f)](_0x1ccd15);if(!_0x20a6f8['includes'](_0x1ccd15))continue;const _0x4d8159=/^\d+$/[_0x57b78b(0x266)](_0x1b6e0a);let _0x153ebe=0x0;_0x4d8159?_0x57b78b(0x2c1)!==_0x57b78b(0x2c1)?_0x482755[_0x57b78b(0x209)][_0x57b78b(0x2f5)](_0x5d5ac4):_0x153ebe=Number(_0x1b6e0a):_0x153ebe=DataManager[_0x57b78b(0x294)](_0x1b6e0a);if(_0x153ebe<=0x0)continue;if(_0x2da6c3===_0x57b78b(0x30e)&&!_0x459211[_0x57b78b(0x254)](_0x153ebe))continue;if(_0x2da6c3==='LearnedChainSkill'&&!_0x459211[_0x57b78b(0x247)](_0x153ebe))continue;$gameTemp[_0x57b78b(0x20b)](_0x1ccd15,_0x153ebe);}}},Game_Action[_0x1f5981(0x220)]['setAutoBattleActiveChainSkill']=function(){const _0x16d135=_0x1f5981,_0x257ac8=VisuMZ[_0x16d135(0x24e)]['Keys'][_0x16d135(0x2ee)](),_0x2877c6=_0x257ac8[_0x16d135(0x2c6)](_0x32bdfa=>$gameTemp[_0x16d135(0x31d)](_0x32bdfa))['remove'](null)[_0x16d135(0x2c6)](_0x2efbb4=>$dataSkills[_0x2efbb4])[_0x16d135(0x29a)](_0x1c7802=>this[_0x16d135(0x2f8)]()[_0x16d135(0x1f7)](_0x1c7802));if(_0x2877c6[_0x16d135(0x260)]<=0x0)return;const _0x15c792=_0x2877c6[Math[_0x16d135(0x1cb)](_0x2877c6[_0x16d135(0x260)])];this['subject']()['queueActiveChainSkill'](_0x15c792);},VisuMZ[_0x1f5981(0x24e)][_0x1f5981(0x1d2)]=Game_BattlerBase[_0x1f5981(0x220)]['meetsSkillConditions'],Game_BattlerBase[_0x1f5981(0x220)][_0x1f5981(0x292)]=function(_0x2daeb6){const _0x477757=_0x1f5981;if(!this[_0x477757(0x2d4)](_0x2daeb6))return![];return VisuMZ[_0x477757(0x24e)]['Game_BattlerBase_meetsSkillConditions'][_0x477757(0x277)](this,_0x2daeb6);},Game_BattlerBase[_0x1f5981(0x220)][_0x1f5981(0x2d4)]=function(_0xebdb35){const _0x42ef86=_0x1f5981;if(!_0xebdb35)return![];const _0x128bbc=VisuMZ[_0x42ef86(0x24e)][_0x42ef86(0x1df)],_0x101184=_0xebdb35[_0x42ef86(0x29c)]||'';if(_0x101184[_0x42ef86(0x1d1)](_0x128bbc[_0x42ef86(0x2e9)])){if('GGuRT'==='GGuRT'){if(!this['isActor']())return![];if(!SceneManager['isSceneBattle']())return![];if(!$gameTemp[_0x42ef86(0x31c)]())return![];}else{const _0x37a5a5=_0x349c62[_0x42ef86(0x24e)]['Settings']['UI'],_0x189234=_0x37a5a5['%1BackgroundImage'[_0x42ef86(0x309)](this[_0x42ef86(0x250)])];if(!_0x189234)return;const _0x4bacfd=new _0x5f4902();this['addChild'](_0x4bacfd),_0x4bacfd[_0x42ef86(0x2f2)]=_0x3068f0[_0x42ef86(0x1d3)](_0x189234),_0x4bacfd[_0x42ef86(0x1e0)]['x']=0.5,_0x4bacfd[_0x42ef86(0x1e0)]['y']=0.5,_0x4bacfd[_0x42ef86(0x1e6)]['x']=0x1/(this[_0x42ef86(0x1e6)]['x']||0.01),_0x4bacfd[_0x42ef86(0x1e6)]['y']=0x1/(this[_0x42ef86(0x1e6)]['y']||0.01);}}return!![];},Game_Actor[_0x1f5981(0x220)][_0x1f5981(0x2f5)]=function(_0x4f3c18){const _0x3d914a=_0x1f5981;this['queueActiveChainSkillForceAction'](_0x4f3c18),this[_0x3d914a(0x1cc)](_0x4f3c18),$gameTemp[_0x3d914a(0x307)](_0x4f3c18),$gameTemp[_0x3d914a(0x2c4)](),Sprite_Actor[_0x3d914a(0x25e)]&&(_0x3d914a(0x272)===_0x3d914a(0x272)?(this[_0x3d914a(0x225)]=!![],this[_0x3d914a(0x22f)]=!![]):(this[_0x3d914a(0x225)]=!![],this[_0x3d914a(0x22f)]=!![])),SoundManager[_0x3d914a(0x224)]();},Game_Actor[_0x1f5981(0x220)]['queueActiveChainSkillForceAction']=function(_0x152177){const _0xc96d49=_0x1f5981,_0xf0092a=BattleManager[_0xc96d49(0x1ea)][0x0],_0x2dc106=$gameTroop[_0xc96d49(0x2e4)]()['indexOf'](_0xf0092a);this[_0xc96d49(0x2f7)](_0x152177['id'],_0x2dc106),BattleManager['forceAction'](this);},Game_Battler['prototype'][_0x1f5981(0x2f7)]=function(_0x2423c1,_0x3d2b12){const _0x36bc40=_0x1f5981;VisuMZ[_0x36bc40(0x2fe)]['Game_Battler_forceAction'][_0x36bc40(0x277)](this,_0x2423c1,_0x3d2b12);const _0x4554a5=BattleManager[_0x36bc40(0x204)],_0x5c458b=this[_0x36bc40(0x21b)][this[_0x36bc40(0x21b)][_0x36bc40(0x260)]-0x1];_0x5c458b[_0x36bc40(0x1c7)]=!![],_0x5c458b[_0x36bc40(0x223)]=_0x4554a5['_targetBattlerKey'];},Game_Actor[_0x1f5981(0x220)][_0x1f5981(0x1cc)]=function(_0x930783){const _0x919ab1=_0x1f5981,_0x18f4f4=VisuMZ[_0x919ab1(0x24e)][_0x919ab1(0x212)][_0x919ab1(0x282)];if(Imported['VisuMZ_0_CoreEngine']){if('DsskK'==='DsskK'){const _0x5c9ae9=[this],_0x407bb7=DataManager['getActiveChainSkillAnimation'](_0x930783),_0x495855=_0x18f4f4['Mirror'],_0x9de5d4=_0x18f4f4['Mute'];$gameTemp['requestFauxAnimation'](_0x5c9ae9,_0x407bb7,_0x495855,_0x9de5d4);}else{const _0x2dd4fd=_0x268282[_0x919ab1(0x24e)][_0x919ab1(0x28d)][_0x919ab1(0x2ee)](),_0x27e617=_0x2dd4fd[_0x919ab1(0x2c6)](_0x1d3ba5=>_0x42ec4f[_0x919ab1(0x31d)](_0x1d3ba5))['remove'](null)[_0x919ab1(0x2c6)](_0xf128d9=>_0xed8408[_0xf128d9])[_0x919ab1(0x29a)](_0x2ecc1a=>this[_0x919ab1(0x2f8)]()[_0x919ab1(0x1f7)](_0x2ecc1a));if(_0x27e617[_0x919ab1(0x260)]<=0x0)return;const _0x4e5111=_0x27e617[_0x1288bb[_0x919ab1(0x1cb)](_0x27e617['length'])];this[_0x919ab1(0x2f8)]()['queueActiveChainSkill'](_0x4e5111);}}if(_0x18f4f4[_0x919ab1(0x21e)]!==''){const _0x57f7b4={'textColor':_0x18f4f4[_0x919ab1(0x2b5)],'flashColor':_0x18f4f4['FlashColor'],'flashDuration':_0x18f4f4[_0x919ab1(0x2c2)]};this[_0x919ab1(0x25d)](_0x18f4f4['PopupText'],_0x57f7b4);}},VisuMZ[_0x1f5981(0x24e)][_0x1f5981(0x284)]=Scene_Battle[_0x1f5981(0x220)][_0x1f5981(0x30f)],Scene_Battle[_0x1f5981(0x220)][_0x1f5981(0x30f)]=function(){const _0x4a5d11=_0x1f5981;VisuMZ[_0x4a5d11(0x24e)][_0x4a5d11(0x284)][_0x4a5d11(0x277)](this),this[_0x4a5d11(0x249)]();},Scene_Battle[_0x1f5981(0x220)][_0x1f5981(0x249)]=function(){const _0x1951f3=_0x1f5981;this[_0x1951f3(0x20d)](),this[_0x1951f3(0x1fa)](),this[_0x1951f3(0x23e)](),this[_0x1951f3(0x2b7)](),this[_0x1951f3(0x1f5)]();},Scene_Battle[_0x1f5981(0x220)][_0x1f5981(0x20d)]=function(){const _0x2a0d22=_0x1f5981;this['_activeChainSkillUiContainer']=new Sprite(),this[_0x2a0d22(0x2a9)](this[_0x2a0d22(0x314)]),this[_0x2a0d22(0x314)]['opacity']=0x0;},Scene_Battle['prototype'][_0x1f5981(0x1fa)]=function(){const _0x37c745=_0x1f5981,_0x331e91=VisuMZ['ActiveChainSkills'][_0x37c745(0x212)]['UI'];if(_0x331e91[_0x37c745(0x311)]){const _0x4a4ffe=new Sprite();this['_activeChainSkillUiContainer'][_0x37c745(0x2a9)](_0x4a4ffe);const _0x23bacf=new Bitmap(Graphics['width'],Graphics[_0x37c745(0x27d)]);_0x4a4ffe[_0x37c745(0x2f2)]=_0x23bacf;const _0x16f399=_0x331e91[_0x37c745(0x311)];_0x16f399[_0x37c745(0x277)](_0x4a4ffe['bitmap']);}if(_0x331e91[_0x37c745(0x2eb)]!==''){if(_0x37c745(0x2b1)!=='LJjjS'){_0x5d0d28=_0x793ad8[_0x37c745(0x205)]()[_0x37c745(0x24f)]();switch(_0x45e14e){case'2':return'down';case'4':return _0x37c745(0x221);case'6':return'right';case'8':return'up';case's':return _0x37c745(0x2f0);case'z':return'ok';case'x':return _0x37c745(0x27f);case'q':return _0x37c745(0x1ee);case'w':return _0x37c745(0x31a);}return _0x154419;}else{const _0x509c7f=new Sprite();this['_activeChainSkillUiContainer'][_0x37c745(0x2a9)](_0x509c7f);const _0x575859=ImageManager['loadSystem'](_0x331e91[_0x37c745(0x2eb)]);_0x509c7f[_0x37c745(0x2f2)]=_0x575859;}}},Scene_Battle[_0x1f5981(0x220)]['createActiveChainSkillUiButtons']=function(){const _0x5e28d2=_0x1f5981;this[_0x5e28d2(0x283)]={};const _0x1ef71f=VisuMZ['ActiveChainSkills'][_0x5e28d2(0x28d)][_0x5e28d2(0x2ee)]();for(const _0x1c04dd of _0x1ef71f){const _0x5b2880=new Sprite_ActiveChainButton(_0x1c04dd);this['_activeChainSkillUiContainer'][_0x5e28d2(0x2a9)](_0x5b2880),this[_0x5e28d2(0x283)][_0x1c04dd]=_0x5b2880;}},Scene_Battle[_0x1f5981(0x220)][_0x1f5981(0x2b7)]=function(){const _0x55ba25=_0x1f5981;if(!Imported['VisuMZ_1_MessageCore'])return;if(!Window_ActiveChainSkillsTooltip[_0x55ba25(0x2e3)])return;this['_activeChainSkillsUiTooltipWindow']=new Window_ActiveChainSkillsTooltip(),this[_0x55ba25(0x2a9)](this[_0x55ba25(0x1f0)]);},Scene_Battle[_0x1f5981(0x220)][_0x1f5981(0x1f5)]=function(){const _0x3bf0f3=_0x1f5981;if(Imported[_0x3bf0f3(0x305)]&&VisuMZ[_0x3bf0f3(0x1f9)][_0x3bf0f3(0x1e1)]<1.12){if(_0x3bf0f3(0x1f6)==='sAnBF'){const _0x5adb1a=_0x3bf0f3(0x244);alert(_0x5adb1a),SceneManager['exit']();}else{const _0x23cbee=_0x2abc42+_0x23413b,_0x10901c=_0x26e35b+_0x40294,_0x339671=this[_0x3bf0f3(0x2c3)];_0x339671[_0x3bf0f3(0x22b)](),_0x339671[_0x3bf0f3(0x24a)]=_0x1b93eb,_0x339671[_0x3bf0f3(0x2b3)](),_0x339671[_0x3bf0f3(0x286)](_0x3ec81a+_0xd82cf8,_0x4d3bd0),_0x339671[_0x3bf0f3(0x289)](_0x23cbee-_0x11a5ac,_0x2d6005),_0x339671[_0x3bf0f3(0x27b)](_0x23cbee,_0xe3b20d,_0x23cbee,_0xf3c5d8+_0x3af50c),_0x339671[_0x3bf0f3(0x289)](_0x23cbee,_0x567cb1+_0x108d60-_0x1ea167),_0x339671['quadraticCurveTo'](_0x23cbee,_0x10901c,_0x23cbee-_0x54a2ad,_0x10901c),_0x339671[_0x3bf0f3(0x289)](_0x3a0cfe+_0x420aab,_0x10901c),_0x339671[_0x3bf0f3(0x27b)](_0x30008a,_0x10901c,_0x5d2eb4,_0x10901c-_0x44f7a6),_0x339671[_0x3bf0f3(0x289)](_0x483514,_0x51b406+_0x1a47ef),_0x339671[_0x3bf0f3(0x27b)](_0x5a9114,_0x4a8be9,_0x139e3f+_0x5d4652,_0xc34ed9),_0x339671['fill'](),_0x339671['restore'](),this['_baseTexture'][_0x3bf0f3(0x2c5)]();}}},VisuMZ[_0x1f5981(0x24e)][_0x1f5981(0x258)]=Scene_Battle[_0x1f5981(0x220)]['update'],Scene_Battle[_0x1f5981(0x220)]['update']=function(){const _0x1fdcdc=_0x1f5981;VisuMZ['ActiveChainSkills'][_0x1fdcdc(0x258)][_0x1fdcdc(0x277)](this);if(this[_0x1fdcdc(0x218)]())this['updateActiveChainSkills']();this['updateActiveChainSkillsUiOpacity']();},Scene_Battle[_0x1f5981(0x220)][_0x1f5981(0x218)]=function(){const _0x477e8c=_0x1f5981;if($gameTemp[_0x477e8c(0x322)])return![];return $gameTemp['canActiveChainSkill']()&&$gameTemp['getActiveChainSkillSelected']()===null;},Scene_Battle[_0x1f5981(0x220)][_0x1f5981(0x246)]=function(){const _0x1f9803=_0x1f5981,_0x4250d8=BattleManager[_0x1f9803(0x209)],_0x266ab4=VisuMZ['ActiveChainSkills'][_0x1f9803(0x28d)][_0x1f9803(0x2ee)]();for(const _0x5300b4 of _0x266ab4){if(_0x1f9803(0x28f)!=='kkVjH'){if(!$gameTemp[_0x1f9803(0x20e)](_0x5300b4))continue;const _0x33d4df=$dataSkills[$gameTemp[_0x1f9803(0x31d)](_0x5300b4)];if(!_0x33d4df)continue;if(!_0x4250d8[_0x1f9803(0x1f7)](_0x33d4df))continue;if(!Input[_0x1f9803(0x2bc)](_0x5300b4))continue;this[_0x1f9803(0x283)][_0x5300b4][_0x1f9803(0x315)]=0x4,_0x4250d8['queueActiveChainSkill'](_0x33d4df);break;}else{_0x380270[_0x1f9803(0x2fe)][_0x1f9803(0x28b)]['call'](this,_0x19b036,_0x155368);const _0x721112=_0x4b8131[_0x1f9803(0x204)],_0x1d4b6b=this[_0x1f9803(0x21b)][this['_actions'][_0x1f9803(0x260)]-0x1];_0x1d4b6b[_0x1f9803(0x1c7)]=!![],_0x1d4b6b[_0x1f9803(0x223)]=_0x721112[_0x1f9803(0x223)];}}},Scene_Battle[_0x1f5981(0x220)][_0x1f5981(0x2bd)]=function(){const _0xd6a7da=_0x1f5981;return $gameTemp[_0xd6a7da(0x31c)]()&&$gameTemp['_activeChainSkillSelected']!==undefined;},Scene_Battle[_0x1f5981(0x220)][_0x1f5981(0x1c6)]=function(){const _0x5a94bc=_0x1f5981,_0x55c5f7=VisuMZ[_0x5a94bc(0x24e)]['Settings']['UI'],_0x9cb80f=this['isActiveChainSkillsUiVisible']();if(this[_0x5a94bc(0x314)]){const _0x26c0e9=_0x55c5f7['OpacityRate']*(_0x9cb80f?0x1:-0x1);this[_0x5a94bc(0x314)][_0x5a94bc(0x25a)]+=_0x26c0e9;}},VisuMZ[_0x1f5981(0x24e)]['BattleManager_startAction']=BattleManager[_0x1f5981(0x21c)],BattleManager[_0x1f5981(0x21c)]=function(){const _0x5c6537=_0x1f5981;$gameTemp['_performActionEnd']=undefined,VisuMZ['ActiveChainSkills'][_0x5c6537(0x23a)][_0x5c6537(0x277)](this);},VisuMZ[_0x1f5981(0x24e)][_0x1f5981(0x264)]=Game_Battler[_0x1f5981(0x220)]['performActionEnd'],Game_Battler[_0x1f5981(0x220)]['performActionEnd']=function(){const _0x27c52e=_0x1f5981;$gameTemp['_performActionEnd']=!![],VisuMZ[_0x27c52e(0x24e)]['Game_Battler_performActionEnd'][_0x27c52e(0x277)](this);},VisuMZ[_0x1f5981(0x24e)][_0x1f5981(0x2c0)]=Window_BattleLog[_0x1f5981(0x220)][_0x1f5981(0x31f)],Window_BattleLog['prototype'][_0x1f5981(0x31f)]=function(_0x309081){const _0x6d7b90=_0x1f5981;$gameTemp[_0x6d7b90(0x322)]=!![],VisuMZ[_0x6d7b90(0x24e)][_0x6d7b90(0x2c0)]['call'](this,_0x309081);},VisuMZ[_0x1f5981(0x24e)][_0x1f5981(0x2d1)]=Scene_Battle[_0x1f5981(0x220)][_0x1f5981(0x290)],Scene_Battle[_0x1f5981(0x220)]['allowUpdateBattleAniSpeed']=function(){const _0x4c4601=_0x1f5981;if(this[_0x4c4601(0x218)]())return![];return VisuMZ[_0x4c4601(0x24e)][_0x4c4601(0x2d1)][_0x4c4601(0x277)](this);},Sprite_Actor[_0x1f5981(0x25e)]=VisuMZ['ActiveChainSkills'][_0x1f5981(0x212)]['ReduceBackForth']??!![],VisuMZ[_0x1f5981(0x24e)][_0x1f5981(0x2d0)]=Sprite_Actor[_0x1f5981(0x220)][_0x1f5981(0x1e7)],Sprite_Actor[_0x1f5981(0x220)][_0x1f5981(0x1e7)]=function(){const _0x4cb5fc=_0x1f5981;if(Sprite_Actor[_0x4cb5fc(0x25e)]&&this[_0x4cb5fc(0x27a)]){if(_0x4cb5fc(0x287)!=='ryokU')this[_0x4cb5fc(0x302)]();else{if(this[_0x4cb5fc(0x27a)][_0x4cb5fc(0x225)])return;}}VisuMZ['ActiveChainSkills'][_0x4cb5fc(0x2d0)][_0x4cb5fc(0x277)](this);},VisuMZ['ActiveChainSkills'][_0x1f5981(0x20f)]=Sprite_Actor['prototype'][_0x1f5981(0x1d8)],Sprite_Actor[_0x1f5981(0x220)]['stepBack']=function(){const _0x5e6a89=_0x1f5981;if(Sprite_Actor[_0x5e6a89(0x25e)]&&this[_0x5e6a89(0x27a)]){if(this[_0x5e6a89(0x27a)][_0x5e6a89(0x22f)]){if(_0x5e6a89(0x1f4)===_0x5e6a89(0x2e7))this[_0x5e6a89(0x200)](_0x49854b,_0x1e7eb2,_0x1ad70a,_0x2aaa81,_0x3de17b,_0x5411ae);else return;}}VisuMZ[_0x5e6a89(0x24e)]['Sprite_Actor_stepBack'][_0x5e6a89(0x277)](this);},VisuMZ['ActiveChainSkills'][_0x1f5981(0x2ae)]=BattleManager[_0x1f5981(0x248)],BattleManager[_0x1f5981(0x248)]=function(){const _0x1228bd=_0x1f5981;Sprite_Actor[_0x1228bd(0x25e)]&&this[_0x1228bd(0x209)]&&this[_0x1228bd(0x209)][_0x1228bd(0x267)]()&&(this['_subject'][_0x1228bd(0x225)]=this['_subject'][_0x1228bd(0x22f)],this[_0x1228bd(0x209)][_0x1228bd(0x22f)]=![]),VisuMZ['ActiveChainSkills'][_0x1228bd(0x2ae)]['call'](this);};function Sprite_ActiveChainButton(){const _0x47cac4=_0x1f5981;this[_0x47cac4(0x26a)](...arguments);}Sprite_ActiveChainButton[_0x1f5981(0x220)]=Object[_0x1f5981(0x1fb)](Sprite_Clickable[_0x1f5981(0x220)]),Sprite_ActiveChainButton[_0x1f5981(0x220)][_0x1f5981(0x2db)]=Sprite_ActiveChainButton,Sprite_ActiveChainButton['KEY_PRESS_OFFSET_X']=VisuMZ['ActiveChainSkills'][_0x1f5981(0x212)]['UI'][_0x1f5981(0x1f2)]??-0x4,Sprite_ActiveChainButton[_0x1f5981(0x21d)]=VisuMZ[_0x1f5981(0x24e)][_0x1f5981(0x212)]['UI']['KeypressUiOffsetY']??+0x4,Sprite_ActiveChainButton['prototype'][_0x1f5981(0x26a)]=function(_0xda8411){const _0x342c80=_0x1f5981;this['_key']=_0xda8411,Sprite_Clickable[_0x342c80(0x220)][_0x342c80(0x26a)][_0x342c80(0x277)](this),this[_0x342c80(0x321)](),this['debugFillRect'](),this[_0x342c80(0x295)](),this[_0x342c80(0x2fc)](),this[_0x342c80(0x2a6)]();},Sprite_ActiveChainButton[_0x1f5981(0x220)]['initMembers']=function(){const _0x3e6578=_0x1f5981,_0x3b039c=VisuMZ[_0x3e6578(0x24e)][_0x3e6578(0x212)]['UI'],_0x23cb08=_0x3e6578(0x1ed)[_0x3e6578(0x309)](this[_0x3e6578(0x250)]);_0x3b039c[_0x23cb08]?this[_0x3e6578(0x203)]=_0x3b039c[_0x23cb08]():_0x3e6578(0x262)==='gesNb'?this['_dimensions']=new Rectangle(0x0,0x0,0x0,0x0):this[_0x3e6578(0x21f)](),this['x']=this['_dimensions']['x']+(_0x3b039c['KeybindUiOffsetX']||0x0),this['y']=this['_dimensions']['y']+(_0x3b039c[_0x3e6578(0x236)]||0x0),this['anchor']['x']=0.5,this[_0x3e6578(0x1e0)]['y']=0.5,this[_0x3e6578(0x1e6)]['x']=_0x3b039c[_0x3e6578(0x313)],this[_0x3e6578(0x1e6)]['y']=_0x3b039c['Scale'],this[_0x3e6578(0x25a)]=0x0,this[_0x3e6578(0x2bb)]=null,this[_0x3e6578(0x253)]=null,this[_0x3e6578(0x29b)]=null;},Sprite_ActiveChainButton[_0x1f5981(0x220)]['debugFillRect']=function(){const _0x41f686=_0x1f5981,_0x4f8b2c=![],_0x4003d6=_0x4f8b2c?'red':ColorManager['dimColor2']();this['bitmap']=new Bitmap(this[_0x41f686(0x203)][_0x41f686(0x2d9)],this['_dimensions'][_0x41f686(0x27d)]),this[_0x41f686(0x2f2)][_0x41f686(0x22a)](0x0,0x0,this['bitmap'][_0x41f686(0x2d9)],this['bitmap']['height'],_0x4003d6);},Sprite_ActiveChainButton[_0x1f5981(0x220)][_0x1f5981(0x295)]=function(){const _0xdf6378=_0x1f5981,_0x12d4fe=VisuMZ[_0xdf6378(0x24e)][_0xdf6378(0x212)]['UI'],_0x87c6cf=_0x12d4fe[_0xdf6378(0x239)[_0xdf6378(0x309)](this[_0xdf6378(0x250)])];if(!_0x87c6cf)return;const _0x3c4ebd=new Sprite();this[_0xdf6378(0x2a9)](_0x3c4ebd),_0x3c4ebd[_0xdf6378(0x2f2)]=ImageManager[_0xdf6378(0x1d3)](_0x87c6cf),_0x3c4ebd[_0xdf6378(0x1e0)]['x']=0.5,_0x3c4ebd[_0xdf6378(0x1e0)]['y']=0.5,_0x3c4ebd[_0xdf6378(0x1e6)]['x']=0x1/(this[_0xdf6378(0x1e6)]['x']||0.01),_0x3c4ebd[_0xdf6378(0x1e6)]['y']=0x1/(this[_0xdf6378(0x1e6)]['y']||0.01);},Sprite_ActiveChainButton[_0x1f5981(0x220)][_0x1f5981(0x2fc)]=function(){const _0x58a2ee=_0x1f5981;this['_contentSprite']=new Sprite(),this[_0x58a2ee(0x2a9)](this[_0x58a2ee(0x31b)]),this[_0x58a2ee(0x31b)][_0x58a2ee(0x1e0)]['x']=0.5,this[_0x58a2ee(0x31b)][_0x58a2ee(0x1e0)]['y']=0.5;},Sprite_ActiveChainButton['prototype'][_0x1f5981(0x2a6)]=function(){const _0x253a10=_0x1f5981,_0x1771cc=$gameSystem[_0x253a10(0x1d0)](),_0xb2c7cf=this[_0x253a10(0x203)][_0x253a10(0x2d9)]+_0x1771cc*0x2,_0x1c2ad4=this[_0x253a10(0x203)][_0x253a10(0x27d)]+_0x1771cc*0x2,_0x525e12=new Rectangle(0x0,0x0,_0xb2c7cf,_0x1c2ad4);this['_contentWindow']=new Window_Base(_0x525e12);},Sprite_ActiveChainButton[_0x1f5981(0x220)][_0x1f5981(0x2c5)]=function(){const _0x4f827d=_0x1f5981;Sprite_Clickable[_0x4f827d(0x220)][_0x4f827d(0x2c5)]['call'](this),this['updateOpacity'](),this[_0x4f827d(0x2af)]();if(this[_0x4f827d(0x2dd)]())this[_0x4f827d(0x2da)]();},Sprite_ActiveChainButton['prototype'][_0x1f5981(0x1ec)]=function(){const _0x39a237=_0x1f5981;this['opacity']=this[_0x39a237(0x1dd)]();},Sprite_ActiveChainButton[_0x1f5981(0x220)][_0x1f5981(0x1dd)]=function(){const _0x48d4be=_0x1f5981;if(!$gameTemp[_0x48d4be(0x31c)]())return 0x0;if(!$gameTemp['hasActiveChainSkillsKey'](this[_0x48d4be(0x250)]))return 0x0;const _0x1d4747=VisuMZ[_0x48d4be(0x24e)]['Settings']['UI']['OpacityDisable'],_0x34cc8c=$gameTemp['getActiveChainSkillSelected'](),_0x3b97d1=$gameTemp[_0x48d4be(0x31d)](this[_0x48d4be(0x250)]);if(_0x34cc8c!==null&&_0x34cc8c!==_0x3b97d1)return _0x1d4747;if($gameTemp[_0x48d4be(0x322)]&&_0x34cc8c!==_0x3b97d1)return _0x1d4747;const _0x35929e=BattleManager[_0x48d4be(0x209)];if(!_0x35929e)return _0x1d4747;const _0x69b43e=$dataSkills[_0x3b97d1];if(!_0x35929e['canUse'](_0x69b43e))return _0x1d4747;return 0xff;},Sprite_ActiveChainButton[_0x1f5981(0x220)][_0x1f5981(0x2af)]=function(){const _0x4e4cc8=_0x1f5981,_0x5ada7b=VisuMZ[_0x4e4cc8(0x24e)][_0x4e4cc8(0x212)]['UI'];this['x']=this[_0x4e4cc8(0x203)]['x']+(_0x5ada7b[_0x4e4cc8(0x1fc)]||0x0),this['y']=this[_0x4e4cc8(0x203)]['y']+(_0x5ada7b['KeybindUiOffsetY']||0x0);this[_0x4e4cc8(0x22e)]&&(this[_0x4e4cc8(0x315)]=0x4);if(this[_0x4e4cc8(0x315)]-->0x0){if(_0x4e4cc8(0x2c8)!==_0x4e4cc8(0x2fa))this['x']+=Sprite_ActiveChainButton['KEY_PRESS_OFFSET_X'],this['y']+=Sprite_ActiveChainButton['KEY_PRESS_OFFSET_Y'];else return _0x5ab6e8(_0x57b845['$1']);}},Sprite_ActiveChainButton[_0x1f5981(0x220)][_0x1f5981(0x2da)]=function(){const _0x4bf4fd=_0x1f5981;this[_0x4bf4fd(0x2bb)]=BattleManager['_subject'],this[_0x4bf4fd(0x253)]=$gameTemp['getActiveChainSkillsKey'](this['_key']);if(Imported['VisuMZ_0_CoreEngine']&&Input[_0x4bf4fd(0x2ad)]){if(_0x4bf4fd(0x2ac)!==_0x4bf4fd(0x2ac))return _0x2cd591['canActiveChainSkill']()&&_0x463250[_0x4bf4fd(0x318)]!==_0x405386;else this[_0x4bf4fd(0x29b)]=Input[_0x4bf4fd(0x2ad)]();}this['refreshBitmap']();},Sprite_ActiveChainButton['prototype'][_0x1f5981(0x2dd)]=function(){const _0x3bdce6=_0x1f5981;if(this['_lastActor']!==BattleManager[_0x3bdce6(0x209)])return!![];if(this['_lastSkillID']!==$gameTemp['getActiveChainSkillsKey'](this[_0x3bdce6(0x250)]))return!![];if(Imported[_0x3bdce6(0x211)]&&Input[_0x3bdce6(0x2ad)]){if(this['_lastInputType']!==Input[_0x3bdce6(0x2ad)]())return!![];}return![];},Sprite_ActiveChainButton['prototype']['refreshBitmap']=function(){const _0x3b8b9b=_0x1f5981,_0x27da86=VisuMZ[_0x3b8b9b(0x24e)][_0x3b8b9b(0x212)]['UI'],_0x40a9a0=this[_0x3b8b9b(0x273)]['contents'],_0x295c8c=$dataSkills[this['_lastSkillID']];if(!_0x295c8c)return;if(!BattleManager['_subject'])return;_0x40a9a0[_0x3b8b9b(0x23f)](),this[_0x3b8b9b(0x273)][_0x3b8b9b(0x1ff)]();const _0xa1c32e=this['getButtonIcon'](),_0x3d0c84=BattleManager[_0x3b8b9b(0x209)],_0x5c2b5f=this[_0x3b8b9b(0x273)][_0x3b8b9b(0x208)](_0x3d0c84,_0x295c8c);_0x27da86[_0x3b8b9b(0x1c5)]['call'](this['_contentWindow'],_0x295c8c,_0xa1c32e,_0x5c2b5f),this['_contentSprite'][_0x3b8b9b(0x2f2)]=_0x40a9a0;},Sprite_ActiveChainButton[_0x1f5981(0x220)]['getButtonIcon']=function(){const _0x5f212b=_0x1f5981,_0x387688=VisuMZ[_0x5f212b(0x24e)][_0x5f212b(0x212)]['UI'],_0x275ee6='%1KeyIcon'[_0x5f212b(0x309)](this[_0x5f212b(0x250)]);if(_0x387688[_0x275ee6])return _0x387688[_0x275ee6];if(Imported[_0x5f212b(0x211)]){if('ZLbti'===_0x5f212b(0x2e0)){const _0x1899c3=TextManager[_0x5f212b(0x230)](this[_0x5f212b(0x250)]);if(_0x1899c3&&_0x1899c3['match'](/\\I\[(\d+)\]/i)){if(_0x5f212b(0x234)==='AGvdw'){const _0x5b1103=_0x4991fc[_0x5f212b(0x24e)]['Settings']['UI'];this['x']=this[_0x5f212b(0x203)]['x']+(_0x5b1103[_0x5f212b(0x1fc)]||0x0),this['y']=this[_0x5f212b(0x203)]['y']+(_0x5b1103['KeybindUiOffsetY']||0x0),this[_0x5f212b(0x22e)]&&(this[_0x5f212b(0x315)]=0x4),this[_0x5f212b(0x315)]-->0x0&&(this['x']+=_0x2874d8[_0x5f212b(0x2a1)],this['y']+=_0x54c3e9[_0x5f212b(0x21d)]);}else return Number(RegExp['$1']);}}else{const _0x2efe3e=_0x240db1[_0x5f212b(0x24e)]['Settings']['Effect'][_0x5f212b(0x22c)];if(!_0x4641be)return _0x2efe3e;const _0x46b5c2=_0x28dfb2['ActiveChainSkills'][_0x5f212b(0x1df)],_0x436258=_0x43bc42['note']||'';if(_0x436258['match'](_0x46b5c2['ConfirmAnimation']))return _0x4f41fa(_0x1868a9['$1']);return _0x2efe3e;}}return 0x0;},Sprite_ActiveChainButton[_0x1f5981(0x220)][_0x1f5981(0x270)]=function(){const _0x70e598=_0x1f5981;Sprite_Clickable[_0x70e598(0x220)][_0x70e598(0x270)][_0x70e598(0x277)](this);const _0x191737=$dataSkills[$gameTemp['getActiveChainSkillsKey'](this['_key'])];if(BattleManager[_0x70e598(0x209)]&&_0x191737){if(_0x70e598(0x2ba)===_0x70e598(0x1e3)){const _0x95774f=_0x160aaf['ActiveChainSkills'][_0x70e598(0x212)][_0x70e598(0x2b9)];if(_0x95774f>0x0)_0x1a7581[_0x70e598(0x310)](_0x95774f,![]);}else BattleManager[_0x70e598(0x209)][_0x70e598(0x2f5)](_0x191737);}const _0x5d68c6=this[_0x70e598(0x301)]();_0x5d68c6&&_0x5d68c6[_0x70e598(0x2f9)](null);},Sprite_ActiveChainButton[_0x1f5981(0x220)]['isClickEnabled']=function(){const _0x286d8f=_0x1f5981;if(this[_0x286d8f(0x25a)]<=0x0)return![];const _0x32fb1b=SceneManager[_0x286d8f(0x235)];if(!_0x32fb1b)return![];if(!_0x32fb1b[_0x286d8f(0x218)])return![];if(!_0x32fb1b['canPerformActiveChainSkills']())return![];if(!$gameTemp[_0x286d8f(0x20e)](this['_key']))return![];const _0x1f910e=$dataSkills[$gameTemp[_0x286d8f(0x31d)](this[_0x286d8f(0x250)])];if(!_0x1f910e)return![];if(!BattleManager['_subject'][_0x286d8f(0x1f7)](_0x1f910e))return![];return Sprite_Clickable[_0x286d8f(0x220)][_0x286d8f(0x2ab)][_0x286d8f(0x277)](this);},Sprite_ActiveChainButton[_0x1f5981(0x220)][_0x1f5981(0x301)]=function(){const _0x502074=_0x1f5981;return SceneManager['_scene'][_0x502074(0x1f0)];},Sprite_ActiveChainButton[_0x1f5981(0x220)][_0x1f5981(0x302)]=function(){const _0x56b888=_0x1f5981;Sprite_Clickable[_0x56b888(0x220)]['onMouseEnter'][_0x56b888(0x277)](this);const _0x109386=this[_0x56b888(0x301)]();if(!_0x109386)return;const _0x5a0fcc=SceneManager[_0x56b888(0x235)],_0x4db659=_0x5a0fcc&&_0x5a0fcc[_0x56b888(0x2bd)]?_0x5a0fcc[_0x56b888(0x2bd)]():![];if(_0x109386&&_0x4db659){if(_0x56b888(0x2b8)===_0x56b888(0x30a))_0x26103d[_0x56b888(0x24e)][_0x56b888(0x207)][_0x56b888(0x277)](this),this[_0x56b888(0x257)]();else{const _0x1a70d7=$dataSkills[this[_0x56b888(0x253)]];_0x109386[_0x56b888(0x2f9)](_0x1a70d7);}}},Sprite_ActiveChainButton[_0x1f5981(0x220)]['onMouseExit']=function(){const _0x2ddf0c=_0x1f5981;Sprite_Clickable['prototype'][_0x2ddf0c(0x23d)]['call'](this);const _0x4d5787=this[_0x2ddf0c(0x301)]();if(!_0x4d5787)return;const _0x4026ab=$dataSkills[this[_0x2ddf0c(0x253)]],_0x1fd5d5=SceneManager[_0x2ddf0c(0x235)],_0x288025=_0x1fd5d5&&_0x1fd5d5[_0x2ddf0c(0x2bd)]?_0x1fd5d5[_0x2ddf0c(0x2bd)]():![];(!_0x288025||_0x4d5787[_0x2ddf0c(0x276)]===_0x4026ab)&&_0x4d5787[_0x2ddf0c(0x2f9)](null);},Sprite_ActiveChainButton[_0x1f5981(0x220)][_0x1f5981(0x1cf)]=function(){const _0x4456ba=_0x1f5981,_0x14c452=this[_0x4456ba(0x263)];this[_0x4456ba(0x263)]=this[_0x4456ba(0x206)]();if(this[_0x4456ba(0x263)]!==_0x14c452){if(_0x4456ba(0x20a)===_0x4456ba(0x20a))this[_0x4456ba(0x263)]?_0x4456ba(0x1da)!==_0x4456ba(0x1da)?this[_0x4456ba(0x29e)]=_0x4fde15[_0x4456ba(0x1d3)](_0x8801a8[_0x4456ba(0x2f4)]):this[_0x4456ba(0x302)]():this[_0x4456ba(0x23d)]();else{_0x56c090[_0x4456ba(0x220)][_0x4456ba(0x270)]['call'](this);const _0x5c9832=_0x21b4d3[_0x13d82c['getActiveChainSkillsKey'](this['_key'])];_0x394e65['_subject']&&_0x5c9832&&_0x19e3c6['_subject'][_0x4456ba(0x2f5)](_0x5c9832);const _0x1455ba=this[_0x4456ba(0x301)]();_0x1455ba&&_0x1455ba[_0x4456ba(0x2f9)](null);}}this[_0x4456ba(0x2ab)]()?'nOVqI'!==_0x4456ba(0x237)?(this[_0x4456ba(0x206)]()?TouchInput[_0x4456ba(0x2bc)]()&&(this[_0x4456ba(0x22e)]=!![],this[_0x4456ba(0x1f8)]()):(this['_pressed']=![],this[_0x4456ba(0x256)]=![]),this['_pressed']&&TouchInput[_0x4456ba(0x28a)]()&&(this[_0x4456ba(0x22e)]=![],this[_0x4456ba(0x270)]())):_0x2056d4[_0x4456ba(0x2bc)]()&&(this[_0x4456ba(0x22e)]=!![],this[_0x4456ba(0x1f8)]()):'UhOfx'===_0x4456ba(0x226)?this[_0x4456ba(0x318)]=_0x39da0f['id']:(this[_0x4456ba(0x22e)]=![],this[_0x4456ba(0x256)]=![]);},Sprite_ActiveChainButton[_0x1f5981(0x220)][_0x1f5981(0x206)]=function(){const _0x57f154=_0x1f5981,_0x5936e4=new Point(TouchInput['x'],TouchInput['y']),_0x443c8c=this[_0x57f154(0x2ef)][_0x57f154(0x2c7)](_0x5936e4);return this[_0x57f154(0x2b2)](_0x443c8c['x'],_0x443c8c['y']);},Window_Base[_0x1f5981(0x220)]['drawActiveChainLargeIcon']=function(_0x530223,_0x197c72,_0x1b11e0,_0x5e8484){const _0x15f6f0=_0x1f5981,_0x223765=VisuMZ[_0x15f6f0(0x24e)][_0x15f6f0(0x212)]['UI'];_0x5e8484=_0x5e8484||0x20,_0x197c72-=Math[_0x15f6f0(0x278)](_0x5e8484/0x2);const _0x1d648d=ImageManager[_0x15f6f0(0x1d3)](_0x15f6f0(0x1e9)),_0x5b0734=ImageManager[_0x15f6f0(0x26c)],_0x2b3e88=ImageManager[_0x15f6f0(0x2a3)],_0x4683a8=_0x530223%0x10*_0x5b0734,_0x10cb2b=Math[_0x15f6f0(0x201)](_0x530223/0x10)*_0x2b3e88;this[_0x15f6f0(0x240)]['_context'][_0x15f6f0(0x1cd)]=_0x223765['LargeIconSmoothing'],this[_0x15f6f0(0x240)][_0x15f6f0(0x2a5)](_0x1d648d,_0x4683a8,_0x10cb2b,_0x5b0734,_0x2b3e88,_0x197c72,_0x1b11e0,_0x5e8484,_0x5e8484),this[_0x15f6f0(0x240)][_0x15f6f0(0x26f)][_0x15f6f0(0x1cd)]=!![];},VisuMZ[_0x1f5981(0x24e)]['Window_BattleLog_addMeleeReturnActionSet']=Window_BattleLog[_0x1f5981(0x220)][_0x1f5981(0x24c)],Window_BattleLog[_0x1f5981(0x220)][_0x1f5981(0x24c)]=function(_0x22c93b,_0x5cbcae,_0x223bf5,_0x234965){const _0x280529=_0x1f5981;Sprite_Actor[_0x280529(0x25e)]?this['addActiveChainMeleeReturnActionSet'](_0x22c93b,_0x5cbcae,_0x223bf5,_0x234965):VisuMZ[_0x280529(0x24e)][_0x280529(0x23b)][_0x280529(0x277)](this,_0x22c93b,_0x5cbcae,_0x223bf5,_0x234965);},Window_BattleLog[_0x1f5981(0x220)][_0x1f5981(0x24c)]=function(_0x19e0fc,_0x50bdff,_0x2db605,_0xc36bcb){const _0x3a0d4c=_0x1f5981;if(_0x50bdff){const _0x72aab7=_0x19e0fc[_0x3a0d4c(0x303)]();this[_0x3a0d4c(0x20c)]('setPerformActionEnd',!![]),this[_0x3a0d4c(0x20c)](_0x3a0d4c(0x2a0),[_0x19e0fc],_0x2db605,_0xc36bcb),this[_0x3a0d4c(0x20c)](_0x3a0d4c(0x255),_0x19e0fc,_0x72aab7[_0x3a0d4c(0x2ca)],_0x72aab7[_0x3a0d4c(0x2e8)],_0xc36bcb,![],_0x3a0d4c(0x1e8)),this[_0x3a0d4c(0x20c)](_0x3a0d4c(0x27e),[_0x19e0fc],_0x3a0d4c(0x217)),this['push']('waitForMovementActiveChain'),this['push'](_0x3a0d4c(0x27e),[_0x19e0fc],'walk');}},Window_BattleLog[_0x1f5981(0x220)][_0x1f5981(0x299)]=function(){const _0x226b16=$gameTemp['getActiveChainSkillSelected']();return _0x226b16!==null;},Window_BattleLog[_0x1f5981(0x220)][_0x1f5981(0x241)]=function(_0x2bf438){$gameTemp['_performActionEnd']=_0x2bf438;},Window_BattleLog['prototype'][_0x1f5981(0x2a0)]=function(_0x5a76a7,_0x4ded64,_0x55226a){const _0x32a0b9=_0x1f5981;this[_0x32a0b9(0x299)]()?this[_0x32a0b9(0x2ce)]():_0x32a0b9(0x2cc)==='lJeQd'?this[_0x32a0b9(0x271)](_0x5a76a7,_0x4ded64,_0x55226a):this[_0x32a0b9(0x2ce)]();},Window_BattleLog['prototype'][_0x1f5981(0x255)]=function(_0x529755,_0xda7fb4,_0x16c080,_0xad9c6c,_0x560ccf,_0x3ac985){const _0x1bdcb9=_0x1f5981;if(this[_0x1bdcb9(0x299)]()){if(_0x1bdcb9(0x2b0)!==_0x1bdcb9(0x2b0)){const _0x5a0e35=this['textSizeEx'](this['_text']);this[_0x1bdcb9(0x2d9)]=_0x5a0e35[_0x1bdcb9(0x2d9)]+(this[_0x1bdcb9(0x214)]()+this[_0x1bdcb9(0x1c9)])*0x2,this[_0x1bdcb9(0x27d)]=_0x5a0e35[_0x1bdcb9(0x27d)]+this['padding']*0x2,this['createContents'](),this[_0x1bdcb9(0x1ff)]();}else this['callNextMethod']();}else this[_0x1bdcb9(0x200)](_0x529755,_0xda7fb4,_0x16c080,_0xad9c6c,_0x560ccf,_0x3ac985);},Window_BattleLog[_0x1f5981(0x220)][_0x1f5981(0x27e)]=function(_0x3757b2,_0x23f849){const _0x5a0548=_0x1f5981;this[_0x5a0548(0x299)]()?this[_0x5a0548(0x2ce)]():this['requestMotion'](_0x3757b2,_0x23f849);},Window_BattleLog[_0x1f5981(0x220)]['waitForMovementActiveChain']=function(){const _0xf9e586=_0x1f5981;this[_0xf9e586(0x299)]()?this[_0xf9e586(0x2ce)]():_0xf9e586(0x285)===_0xf9e586(0x293)?this['setAutoBattleActiveChainSkill']():this[_0xf9e586(0x1db)]();};function Window_ActiveChainSkillsTooltip(){const _0x4f0b76=_0x1f5981;this[_0x4f0b76(0x26a)](...arguments);}Window_ActiveChainSkillsTooltip[_0x1f5981(0x220)]=Object[_0x1f5981(0x1fb)](Window_Base['prototype']),Window_ActiveChainSkillsTooltip[_0x1f5981(0x220)][_0x1f5981(0x2db)]=Window_ActiveChainSkillsTooltip,Window_ActiveChainSkillsTooltip['ENABLED']=VisuMZ['ActiveChainSkills'][_0x1f5981(0x212)][_0x1f5981(0x320)][_0x1f5981(0x1f3)]??!![],Window_ActiveChainSkillsTooltip['WINDOW_SCALE']=VisuMZ[_0x1f5981(0x24e)]['Settings']['Tooltip'][_0x1f5981(0x313)],Window_ActiveChainSkillsTooltip[_0x1f5981(0x2f4)]=VisuMZ[_0x1f5981(0x24e)][_0x1f5981(0x212)]['Tooltip'][_0x1f5981(0x227)],Window_ActiveChainSkillsTooltip[_0x1f5981(0x281)]=VisuMZ['ActiveChainSkills'][_0x1f5981(0x212)][_0x1f5981(0x320)][_0x1f5981(0x2b4)],Window_ActiveChainSkillsTooltip['MOUSE_OFFSET_X']=VisuMZ['ActiveChainSkills'][_0x1f5981(0x212)][_0x1f5981(0x320)][_0x1f5981(0x216)],Window_ActiveChainSkillsTooltip[_0x1f5981(0x261)]=VisuMZ['ActiveChainSkills']['Settings'][_0x1f5981(0x320)][_0x1f5981(0x2ec)],Window_ActiveChainSkillsTooltip[_0x1f5981(0x220)][_0x1f5981(0x26a)]=function(){const _0x17ff19=_0x1f5981,_0x3eefec=new Rectangle(0x0,0x0,Graphics['width'],Graphics[_0x17ff19(0x27d)]);Window_Base[_0x17ff19(0x220)][_0x17ff19(0x26a)][_0x17ff19(0x277)](this,_0x3eefec),this[_0x17ff19(0x1e6)]['x']=this[_0x17ff19(0x1e6)]['y']=Window_ActiveChainSkillsTooltip[_0x17ff19(0x2d3)],this[_0x17ff19(0x1ef)](),this['_skill']=null;},Window_ActiveChainSkillsTooltip['prototype']['loadWindowskin']=function(){const _0x43fd08=_0x1f5981;this['windowskin']=ImageManager[_0x43fd08(0x1d3)](Window_ActiveChainSkillsTooltip['WINDOW_SKIN_FILENAME']);},Window_ActiveChainSkillsTooltip[_0x1f5981(0x220)][_0x1f5981(0x2ea)]=function(){const _0x26d64c=_0x1f5981;this[_0x26d64c(0x2d5)]=Window_ActiveChainSkillsTooltip[_0x26d64c(0x281)];},Window_ActiveChainSkillsTooltip[_0x1f5981(0x220)][_0x1f5981(0x2f9)]=function(_0x1fc11a){const _0x275fb7=_0x1f5981;if(this[_0x275fb7(0x276)]===_0x1fc11a)return;this[_0x275fb7(0x276)]=_0x1fc11a,this[_0x275fb7(0x276)]&&this['_skill'][_0x275fb7(0x1d7)][_0x275fb7(0x24f)]()['length']>0x0?this[_0x275fb7(0x21f)]():_0x275fb7(0x1e5)===_0x275fb7(0x1e5)?this['hide']():this[_0x275fb7(0x1ef)]();},Window_ActiveChainSkillsTooltip['prototype'][_0x1f5981(0x21f)]=function(){const _0x2d7d4b=_0x1f5981;this['contents']['clear'](),this[_0x2d7d4b(0x2cd)]();if(this[_0x2d7d4b(0x2e6)]['length']>0x0){if(_0x2d7d4b(0x2f3)!==_0x2d7d4b(0x2ff)){this[_0x2d7d4b(0x202)]();const _0x864229=this[_0x2d7d4b(0x297)]();this[_0x2d7d4b(0x2dc)](this[_0x2d7d4b(0x2e6)],_0x864229['x'],_0x864229['y'],_0x864229['width']),this[_0x2d7d4b(0x213)]();}else{if(!this[_0x2d7d4b(0x2b6)]())return!![];if(!this[_0x2d7d4b(0x30c)]())return!![];if(!this[_0x2d7d4b(0x2f8)]())return!![];if(!this[_0x2d7d4b(0x2f8)]()['isActor']())return!![];if(_0x175ad3[_0x2d7d4b(0x1dc)](this[_0x2d7d4b(0x2b6)]()))return!![];if(_0x34b8c3['VisuMZ_2_BattleSystemBTB']&&_0x3b83e6['isBTB']())return!![];return![];}}else this['hide']();},Window_ActiveChainSkillsTooltip[_0x1f5981(0x220)][_0x1f5981(0x2aa)]=function(){return![];},Window_ActiveChainSkillsTooltip[_0x1f5981(0x220)][_0x1f5981(0x312)]=function(_0x5a11f6){return _0x5a11f6;},Window_ActiveChainSkillsTooltip[_0x1f5981(0x220)][_0x1f5981(0x1f1)]=function(){return![];},Window_ActiveChainSkillsTooltip['prototype'][_0x1f5981(0x2cd)]=function(){const _0x42ef99=_0x1f5981;this[_0x42ef99(0x2e6)]='';if(!this[_0x42ef99(0x276)])return;this[_0x42ef99(0x24d)](),this[_0x42ef99(0x2e6)]=this[_0x42ef99(0x2e6)][_0x42ef99(0x24f)]();},Window_ActiveChainSkillsTooltip[_0x1f5981(0x220)][_0x1f5981(0x24d)]=function(){const _0x1ebbb5=_0x1f5981;this[_0x1ebbb5(0x2e6)]=this['_skill']['description']||'';},Window_ActiveChainSkillsTooltip[_0x1f5981(0x220)][_0x1f5981(0x202)]=function(){const _0x40ac75=_0x1f5981,_0x2b62d2=this[_0x40ac75(0x26d)](this['_text']);this[_0x40ac75(0x2d9)]=_0x2b62d2[_0x40ac75(0x2d9)]+(this[_0x40ac75(0x214)]()+this[_0x40ac75(0x1c9)])*0x2,this['height']=_0x2b62d2[_0x40ac75(0x27d)]+this[_0x40ac75(0x1c9)]*0x2,this[_0x40ac75(0x1d4)](),this[_0x40ac75(0x1ff)]();},Window_ActiveChainSkillsTooltip[_0x1f5981(0x220)][_0x1f5981(0x2c5)]=function(){const _0x10c467=_0x1f5981;Window_Base['prototype']['update']['call'](this),this['_requestRefresh']&&(this[_0x10c467(0x2e5)]=![],this['refresh']()),this[_0x10c467(0x2af)](),this['updateOpacity']();},Window_ActiveChainSkillsTooltip[_0x1f5981(0x220)][_0x1f5981(0x316)]=function(){const _0x35c926=_0x1f5981;this[_0x35c926(0x2e5)]=!![];},Window_ActiveChainSkillsTooltip[_0x1f5981(0x220)][_0x1f5981(0x2af)]=function(){const _0x57cf95=_0x1f5981;if(!this[_0x57cf95(0x228)])return;this['x']=TouchInput['x']+Window_ActiveChainSkillsTooltip[_0x57cf95(0x2e1)],this['y']=TouchInput['y']+Window_ActiveChainSkillsTooltip[_0x57cf95(0x261)],this[_0x57cf95(0x28e)]();},Window_ActiveChainSkillsTooltip[_0x1f5981(0x220)]['clampPosition']=function(){const _0x511cfd=_0x1f5981,_0x3cee45=this[_0x511cfd(0x2d9)]*(Window_ActiveChainSkillsTooltip[_0x511cfd(0x2d3)]||0.01),_0xcc4b06=this[_0x511cfd(0x27d)]*(Window_ActiveChainSkillsTooltip[_0x511cfd(0x2d3)]||0.01);this['x']=Math[_0x511cfd(0x278)](this['x']['clamp'](0x0,Graphics[_0x511cfd(0x2d9)]-_0x3cee45)),this['y']=Math[_0x511cfd(0x278)](this['y'][_0x511cfd(0x28c)](0x0,Graphics[_0x511cfd(0x27d)]-_0xcc4b06));},Window_ActiveChainSkillsTooltip['prototype'][_0x1f5981(0x1ec)]=function(){const _0x327566=_0x1f5981;let _0x30ddba=0xff;if(TouchInput['x']<=0x0)_0x30ddba=0x0;if(TouchInput['x']>=Graphics[_0x327566(0x2d9)])_0x30ddba=0x0;if(TouchInput['y']<=0x0)_0x30ddba=0x0;if(TouchInput['y']>=Graphics['height'])_0x30ddba=0x0;this['opacity']=_0x30ddba;};