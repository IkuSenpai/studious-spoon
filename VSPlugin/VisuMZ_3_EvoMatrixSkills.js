//=============================================================================
// VisuStella MZ - Evolution Matrix Skills
// VisuMZ_3_EvoMatrixSkills.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_EvoMatrixSkills = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EvoMatrixSkills = VisuMZ.EvoMatrixSkills || {};
VisuMZ.EvoMatrixSkills.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.05] [EvoMatrixSkills]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Evo_Matrix_Skills_VisuStella_MZ
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
 * When an Evolution Matrix Skill is activated by an actor, Evolution Matrix
 * options appear on the screen, allowing the player to select which evolutions
 * to steer the current skill towards while paying for upgrades along the way.
 * Once reaching the end of an evolution path or deciding to prematurely stop
 * a skill evolution, the actor will cast the finalized skill.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Register up to 8 different evolution matrices per skill, each bound to
 *   specific keyboard button inputs.
 * * Touch screen users are able to select the Evolution Matrix path by simply
 *   tapping on the listed skill on the screen.
 * * Tooltips will display the skill's help description when hovering over the
 *   on-screen buttons.
 * * Evolution Matrix skills can branch into other Evolution Matrix skills to
 *   create a network of evolutions for the player to navigate.
 * * Some skills can be set up to be Evolution Matrix only, meaning they can
 *   only ever be accessed via the Evolution Matrix system.
 * * Confirmation sound effects can be utilized to provide proper feedback to
 *   the player when chaining.
 * * Variables can be used to determine how many evolutions the player has
 *   selected with the Evolution Matrix.
 * * Custom images can be used to add more personal flare to the matrix UI.
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
 * Upgrade Costs are Instant
 * 
 * When evolving a skill, the cost to evolve is instantaneous, even if the
 * skill isn't going to be the final skill.
 * 
 * What this means is that if you start off with "Fire" that costs 5 MP, and
 * upgrade to "Fira" that costs 15 MP, then upgrade to "Firaga" that costs
 * 30 MP, then the total cost would be 50 MP (5 + 15 + 30).
 * 
 * Because the evolutions are instant, plan your skill costs ahead of time and
 * reduce the skills in the Evolution Matrix if needed.
 *
 * ---
 * 
 * Center Skills
 * 
 * When selecting a skill to evolve into, that skill becomes the "center skill"
 * and will always be accessible via the "OK" button or (by default) the "Z"
 * key. This is to make the Evolution Matrix as intuitive as possible.
 * 
 * Since the skills in the center have already been paid for upon evolving,
 * there is no additional cost for selecting the center skill.
 * 
 * ---
 *
 * Game_Action.prototype.applyGlobal
 * 
 * While the costs for evolutions are instant, there are some custom plugin
 * effects that occur during the "applyGlobal" function that will not happen
 * until the final skill has been selected. This means things like registering
 * common events, applying threat, and all the like will not occur until the
 * skill evolutions are finished.
 *
 * ---
 * 
 * Evolution Matrix Needs Finishing
 * 
 * When the Evolution Matrix Skill sequence starts up, it needs to finish
 * before going forward. If there are no skills that can be evolved, then the
 * Evolution Matrix will end prematurely.
 * 
 * ---
 *
 * Evolve Count Variable
 * 
 * The "Evolve Count Variable" that can be declared in the Plugin Parameters
 * will automatically set itself to 0 at the start and end of each action, only
 * increasing by 1 each time a skill evolution has been made through the
 * Evolution Matrix.
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
 * VisuMZ_3_SkillCooldowns
 * 
 * When using skills with cooldowns through the Evolution Skill Matrix, you
 * may have noticed that the cooldowns may seemingly have -1 less turn. The
 * reason is because the actor's skills may have gone through a cooldown update
 * before the next instance of the Evolution Skill Matrix appears. It is more
 * noticeable when using <Cooldown: 1> with 1 turn. Here's a step by step of
 * what's happening:
 * 
 *   1. Input phase occurs.
 *   2. Actor picks Matrix skill.
 *   3. Battle turn starts.
 *   4. Cooldown updates occur.
 *   5. Actor's Matrix activates and actor selects a skill with a cooldown.
 *   6. Cooldown is applied to the skill.
 *   7. Battle turn ends.
 *   8. Input phase occurs.
 *   9. Actor picks Matrix skill.
 *   10. Battle turn starts.
 *   11. Cooldown updates occur.
 *   12. Actor's Matrix activates and it appears the skill is usable again.
 * 
 * Normally, upon regular input for selecting skills normally, the actor does
 * not go through the second cooldown update so a skill with <Cooldown: 1> does
 * have its effect "immediately" reduced.
 * 
 * To remedy this, adjust the Plugin Parameter "Adjust Cooldowns" to alter how
 * many extra turns should be applied to cooldowns when used through the skill
 * matrix. We recommend +1.
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
 * === Evolution Matrix-Related Notetags ===
 * 
 * ---
 *
 * <Matrix Skill key: id>
 * <Matrix Skill key: name>
 * 
 * <Available Matrix Skill key: id>
 * <Available Matrix Skill key: name>
 *
 * - Used for: Skill Notetags
 * - Adds an evolution matrix to a skill when the specific 'key' is pressed.
 *   This variant requires the actor to either have learned the skill or have
 *   it temporarily accessible through traits.
 * - There are no differences between the <Matrix Skill key: id> and
 *   <Available Matrix Skill key: id> notetags, it's a matter of preference of
 *   which you want to use.
 * - Replace 'key' with a string representing the key trigger you wish to bind
 *   this chain skill with.
 *   - 'down', 'left', 'right', 'up'
 *   - You can substitute the above for the NumPad values: 'down' with '2',
 *     'left' with '4', 'right' with '6', and 'up' with '8'
 *   - 'cancel', 'pageup', 'pagedown', 'shift'
 *   - You can substitute the above for the Keyboard inputs: 'cancel' with 'x',
 *     'pageup' with 'q', 'pagedown' with 'w', and 'shift' for 's'
 *   - 'ok' and/or 'z' is not available since it's for the Center Skill.
 *   - Do not include the quotes.
 * - For 'id' variant: replace 'id' with the ID of the skill to evolve using
 *   the marked key.
 * - For 'name' variant: replace 'name' with the name of the skill to evolve
 *   using the marked key.
 * - Insert multiple copies of this notetag to bind different keys.
 * 
 * Examples:
 * 
 *   <Matrix Skill up: Fire II>
 *   <Matrix Skill left: 108>
 *   <Available Matrix Skill right: Fire III>
 *   <Available Matrix Skill down: 110>
 *
 * ---
 *
 * <Learned Matrix Skill key: id>
 * <Learned Matrix Skill key: name>
 * 
 * <Known Matrix Skill key: id>
 * <Known Matrix Skill key: name>
 *
 * - Used for: Skill Notetags
 * - Adds an evolution matrix to a skill when the specific 'key' is pressed.
 *   This variant requires the actor to have learned the skill in order to
 *   evolve to it regardless of whether or not the actor has temporary trait
 *   access to the skill.
 * - There are no differences between the <Learned Matrix Skill key: id> and
 *   <Known Matrix Skill key: id> notetags, it's a matter of preference of
 *   which you want to use.
 * - Replace 'key' with a string representing the key trigger you wish to bind
 *   this chain skill with.
 *   - 'down', 'left', 'right', 'up'
 *   - You can substitute the above for the NumPad values: 'down' with '2',
 *     'left' with '4', 'right' with '6', and 'up' with '8'
 *   - 'cancel', 'pageup', 'pagedown', 'shift'
 *   - You can substitute the above for the Keyboard inputs: 'cancel' with 'x',
 *     'pageup' with 'q', 'pagedown' with 'w', and 'shift' for 's'
 *   - 'ok' and/or 'z' is not available since it's for the Center Skill.
 *   - Do not include the quotes.
 * - For 'id' variant: replace 'id' with the ID of the skill to evolve using
 *   the marked key.
 * - For 'name' variant: replace 'name' with the name of the skill to evolve
 *   using the marked key.
 * - Insert multiple copies of this notetag to bind different keys.
 * 
 * Examples:
 * 
 *   <Learned Matrix Skill up: Fire II>
 *   <Learned Matrix Skill left: 108>
 *   <Known Matrix Skill right: Fire III>
 *   <Known Matrix Skill down: 110>
 *
 * ---
 *
 * <Always Matrix Skill key: id>
 * <Always Matrix Skill key: name>
 * 
 * <Forced Matrix Skill key: id>
 * <Forced Matrix Skill key: name>
 *
 * - Used for: Skill Notetags
 * - Adds an evolution matrix to a skill when the specific 'key' is pressed.
 *   This variant will always have the skill available for evolution.
 * - There are no differences between the <Always Matrix Skill key: id> and
 *   <Forced Matrix Skill key: id> notetags, it's a matter of preference of
 *   which you want to use.
 * - Replace 'key' with a string representing the key trigger you wish to bind
 *   this chain skill with.
 *   - 'down', 'left', 'right', 'up'
 *   - You can substitute the above for the NumPad values: 'down' with '2',
 *     'left' with '4', 'right' with '6', and 'up' with '8'
 *   - 'cancel', 'pageup', 'pagedown', 'shift'
 *   - You can substitute the above for the Keyboard inputs: 'cancel' with 'x',
 *     'pageup' with 'q', 'pagedown' with 'w', and 'shift' for 's'
 *   - 'ok' and/or 'z' is not available since it's for the Center Skill.
 *   - Do not include the quotes.
 * - For 'id' variant: replace 'id' with the ID of the skill to evolve using
 *   the marked key.
 * - For 'name' variant: replace 'name' with the name of the skill to evolve
 *   using the marked key.
 * - Insert multiple copies of this notetag to bind different keys.
 * 
 * Examples:
 * 
 *   <Always Matrix Skill up: Fire II>
 *   <Always Matrix Skill left: 108>
 *   <Forced Matrix Skill right: Fire III>
 *   <Forced Matrix Skill down: 110>
 *
 * ---
 * 
 * === Animation-Related Notetags ===
 * 
 * ---
 *
 * <Evo Matrix Animation: x>
 *
 * - Used for: Skill Notetags
 * - Changes the animation played when evolving into this skill or initially
 *   using it to create an Evolution Matrix.
 * - Requires VisuMZ_0_CoreEngine!
 * - Replace 'x' with a number representing the ID of the animation to play
 *   when selecting this skill in the Evolution Matrix.
 * - If this notetag is not used, play the animation found in the Plugin
 *   Parameters instead.
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
 *   Evolve Count Variable:
 *   - What variable is used to track the number of evolutions?
 *   - Leave empty to not use.
 *
 * ---
 * 
 * ==== Uses for the Evolve Count Variable ====
 * 
 * ---
 * 
 * 1. Added Damage
 * 
 * You can create some skills to perform more damage based on the number of
 * times the skill has evolved through the Evolution Matrix. This can be done
 * through the damage formula found in the skill's tab in the database with the
 * "v[x]" string (without the quotes and the 'x' replaced with a variable ID).
 * 
 * ---
 * 
 * 2. Additional Effects
 * 
 * When using Action Sequences inside the Common Events, you can have
 * additional effects take place through a Conditional Branch based off the
 * Evolve Count Variable.
 * 
 *   ◆If：Evo Matrix Count ≥ 3
 *     ◆Plugin Command：VisuMZ_1_BattleCore, MECH: Add Buff/Debuff
 *     ：              ：Targets = ["user"]
 *     ：              ：Buff Parameters = ["ATK"]
 *     ：              ：Debuff Parameters = []
 *     ：              ：Turns = 5
 *     ◆
 *   ：Else
 *     ◆Plugin Command：VisuMZ_1_BattleCore, MECH: Add Buff/Debuff
 *     ：              ：Targets = ["user"]
 *     ：              ：Buff Parameters = ["ATK"]
 *     ：              ：Debuff Parameters = []
 *     ：              ：Turns = 2
 *     ◆
 *   ：End
 * 
 * In the above example, if there has been more than three evolutions made for
 * the current skill through the Evolution Matrix, then the user will gain 5
 * turns worth of ATK buffs instead of just 2.
 * 
 * ---
 * 
 * ==== Compatibility ====
 * 
 * ---
 * 
 * Compatibility
 * 
 *   Adjust Cooldowns:
 *   - Adjust any newly applied cooldowns by this much when used through
 *     the matrix.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * These are the sound effects used for this plugin.
 *
 * ---
 *
 * Confirm Sound
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
 * Evolution Matrix Skills.
 *
 * ---
 *
 * General
 * 
 *   Custom BG Image:
 *   - Do you want to use a custom background image?
 *   - Located in /img/system/ folder. Covers whole screen.
 * 
 *   Evo Matrix Text:
 *   - What text do you want displayed when starting an Evolution Matrix
 *     sequence?
 * 
 *     Matrix Animation:
 *     - What animation should be played when evolving skills?
 *     - Requires VisuMZ_0_CoreEngine!
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
 * Movement
 * 
 *   Move Duration:
 *   - How many frames should it take to move the buttons into place?
 * 
 *   In Easing:
 *   Out Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine!
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
 *   Cost Text (OK only):
 *   - What text do you wish to display for this skill's cost?
 *   - Text codes allowed.
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
 * Settings for the Evolution Matrix Skills Tooltips Window.
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
 * * Arisu
 * * Irina
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.05: October 12, 2023
 * * Documentation Update:
 * ** Help file updated for new features.
 * ** Added "VisuMZ_3_SkillCooldowns" to "VisuStella MZ Compatibility" in help.
 * *** When using skills with cooldowns through the Evolution Skill Matrix, you
 *     may have noticed that the cooldowns may seemingly have -1 less turn. The
 *     reason is because the actor's skills may have gone through a cooldown
 *     update before the next instance of the Evolution Skill Matrix appears.
 *     It is more noticeable when using <Cooldown: 1> with 1 turn.
 * *** Normally, upon regular input for selecting skills normally, the actor
 *     does not go through the second cooldown update so a skill with
 *     <Cooldown: 1> does have its effect "immediately" reduced.
 * *** To remedy this, adjust the Plugin Parameter "Adjust Cooldowns" to alter
 *     how many extra turns should be applied to cooldowns when used through
 *     the skill matrix. We recommend +1.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Compatibility > Adjust Cooldowns:
 * **** Adjust any newly applied cooldowns by this much when used through the
 *      matrix.
 * 
 * Version 1.04: July 13, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.03: June 15, 2023
 * * Bug Fixes!
 * ** Fixed an incompatibility with the Options Core battle animation speeds
 *    causing matrix input to also become faster. Fix made by Irina.
 * 
 * Version 1.02: August 25, 2022
 * * Bug Fixes!
 * ** Fixed a bug that prevented the central skill from being used when not
 *    enough resources are available. Fix made by Olivia.
 * 
 * Version 1.01: July 28, 2022
 * * Bug Fixes!
 * ** Users without the VisuMZ Message Core will no longer get tooltip error
 *    messages when starting battle. Fix made by Irina.
 * 
 * Version 1.00 Official Release Date: September 9, 2022
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
 * @param EvoMatrixSkills
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param EvoVariable:num
 * @text Evolve Count Variable
 * @type variable
 * @desc What variable is used to track the number of evolutions?
 * Leave empty to not use.
 * @default 0
 *
 * @param Sound:struct
 * @text Evolve Confirm Sound
 * @type struct<Sound>
 * @desc The settings for the Evolve confirm sound effect.
 * @default {"name:str":"Skill3","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @param UI:struct
 * @text On-Screen UI Visuals
 * @type struct<UI>
 * @desc Determine where and how the UI visuals look while performing Evolution Matrix Skills.
 * @default {"General":"","BackgroundImage:str":"","EvoMatrixText:str":"Select Skill Evolution","EvoMatrixAnimation:num":"58","LargeIconSmoothing:eval":"false","OpacityDisable:num":"128","OpacityRate:num":"16","Scale:num":"0.50","contentDrawJS:func":"\"// Declare Constants\\nconst skill = arguments[0];\\nconst keyIcon = arguments[1];\\nconst costText = arguments[2];\\nconst bitmap = this.contents;\\nconst lineHeight = this.lineHeight();\\nconst iconIndex = skill.iconIndex;\\nconst iconSize = ImageManager.iconWidth * 2;\\n\\n// Draw Large Icon\\nconst hx = Math.ceil(bitmap.width / 2);\\nthis.drawEvoMatrixLargeIcon(iconIndex, hx, 0, iconSize);\\n\\n// Draw Keybind Icon\\nconst kx = hx - iconSize;\\nthis.drawEvoMatrixLargeIcon(keyIcon, kx, 0, iconSize);\\n\\n// Draw Rounded Rectangle\\nconst rx = 0;\\nconst ry = Math.round(iconSize + lineHeight * 0.25);\\nconst rw = bitmap.width;\\nconst rh = Math.round(lineHeight * 1.75);\\nconst radius = 20;\\nconst rcolor = ColorManager.dimColor1();\\nbitmap.fillRoundRect(rx, ry, rw, rh, radius, rcolor);\\n\\n// Draw Skill Name\\nconst name = skill.name;\\nconst ny = ry + ((costText.length > 0) ? 0 : Math.floor((rh - lineHeight) / 2));\\nthis.drawText(name, 0, ny, bitmap.width, 'center');\\n\\n// Draw Cost Text\\nconst cw = this.textSizeEx(costText).width;\\nconst cx = Math.floor((bitmap.width - cw) / 2);\\nconst cy = ry + Math.ceil(lineHeight * 0.75);\\nthis.drawTextEx(costText, cx, cy);\"","backgroundDrawJS:func":"\"// Declare Constants\\nconst bitmap = this;\\nconst width = bitmap.width / 2;\\nconst height = bitmap.height;\\nconst x1 = 0;\\nconst x2 = Math.floor(width);\\nconst y = 0;\\nconst color1 = ColorManager.dimColor1();\\nconst color2 = ColorManager.dimColor2();\\n\\n// Draw Gradient Background\\nbitmap.gradientFillRect(x1, y, Math.floor(width), height, color1, color2);\\nbitmap.gradientFillRect(x2, y, Math.ceil(width), height, color2, color1);\"","Movement":"","MoveDuration:num":"20","MoveInEasing:str":"OutSine","MoveOutEasing:str":"InSine","Keybinds":"","KeybindOffsets":"","KeybindUiOffsetX:num":"+0","KeybindUiOffsetY:num":"+0","KeybindPressed":"","KeypressUiOffsetX:num":"-4","KeypressUiOffsetY:num":"+4","Down":"","downKeyIcon:num":"0","downBackgroundImage:str":"","downRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Math.floor(Graphics.width / 2);\\nconst y = Math.floor(Graphics.height / 2) + Math.floor(Graphics.height / 4);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","Left":"","leftKeyIcon:num":"0","leftBackgroundImage:str":"","leftRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Math.floor(Graphics.width / 2) - Math.floor(Graphics.width / 4);\\nconst y = Math.floor(Graphics.height / 2);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","Right":"","rightKeyIcon:num":"0","rightBackgroundImage:str":"","rightRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Math.floor(Graphics.width / 2) + Math.floor(Graphics.width / 4);\\nconst y = Math.floor(Graphics.height / 2);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","Up":"","upKeyIcon:num":"0","upBackgroundImage:str":"","upRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Math.floor(Graphics.width / 2);\\nconst y = Math.floor(Graphics.height / 2) - Math.floor(Graphics.height / 4);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","Ok":"","okKeyIcon:num":"0","okBackgroundImage:str":"","okCostText:str":"\\C[17]DONE\\C[0]","okRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Math.floor(Graphics.width / 2);\\nconst y = Math.floor(Graphics.height / 2);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","Cancel":"","cancelKeyIcon:num":"0","cancelBackgroundImage:str":"","cancelRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Math.floor(Graphics.width / 2) + Math.floor(Graphics.width / 4);\\nconst y = Math.floor(Graphics.height / 2) + Math.floor(Graphics.height / 4);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","PageUp":"","pageupKeyIcon:num":"0","pageupBackgroundImage:str":"","pageupRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Math.floor(Graphics.width / 2) - Math.floor(Graphics.width / 4);\\nconst y = Math.floor(Graphics.height / 2) - Math.floor(Graphics.height / 4);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","PageDown":"","pagedownKeyIcon:num":"0","pagedownBackgroundImage:str":"","pagedownRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Math.floor(Graphics.width / 2) + Math.floor(Graphics.width / 4);\\nconst y = Math.floor(Graphics.height / 2) - Math.floor(Graphics.height / 4);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\"","Shift":"","shiftKeyIcon:num":"0","shiftBackgroundImage:str":"","shiftRectJS:func":"\"// Declare Constants\\nconst uiWidth = Math.floor(Graphics.width / 3);\\nconst spacing = 8;\\nconst lineHeight = Window_Base.prototype.lineHeight();\\nconst lines = 4;\\n\\n// Calculate Dimensions\\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\\nconst rectWidth = Math.max(192, w);\\nconst h = lines * lineHeight;\\nconst x = Math.floor(Graphics.width / 2) - Math.floor(Graphics.width / 4);\\nconst y = Math.floor(Graphics.height / 2) + Math.floor(Graphics.height / 4);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, rectWidth, h);\""}
 *
 * @param Tooltip:struct
 * @text UI Tooltip Settings
 * @type struct<Tooltip>
 * @desc Settings for the Evolution Matrix Tooltips Window.
 * Requires VisuMZ_1_MessageCore!
 * @default {"enabled:eval":"true","Appearance":"","Scale:num":"0.6","WindowSkin:str":"Window","WindowOpacity:num":"240","Offset":"","OffsetX:num":"+0","OffsetY:num":"+0"}
 * 
 * @param Compatibility
 *
 * @param CooldownAdjust:num
 * @text Adjust Cooldowns
 * @parent Compatibility
 * @desc Adjust any newly applied cooldowns by this much when used through the matrix.
 * @default +1
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
 * @param EvoMatrixText:str
 * @text Evo Matrix Text
 * @parent General
 * @desc What text do you want displayed when starting an Evolution Matrix sequence?
 * @default Select Skill Evolution
 *
 * @param EvoMatrixAnimation:num
 * @text Matrix Animation
 * @parent EvoMatrixText:str
 * @type animation
 * @desc What animation should be played when evolving skills?
 * Requires VisuMZ_0_CoreEngine!
 * @default 58
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
 * Input Combo Skill inputs are active.
 * @default "// Declare Constants\nconst skill = arguments[0];\nconst keyIcon = arguments[1];\nconst costText = arguments[2];\nconst bitmap = this.contents;\nconst lineHeight = this.lineHeight();\nconst iconIndex = skill.iconIndex;\nconst iconSize = ImageManager.iconWidth * 2;\n\n// Draw Large Icon\nconst hx = Math.ceil(bitmap.width / 2);\nthis.drawEvoMatrixLargeIcon(iconIndex, hx, 0, iconSize);\n\n// Draw Keybind Icon\nconst kx = hx - iconSize;\nthis.drawEvoMatrixLargeIcon(keyIcon, kx, 0, iconSize);\n\n// Draw Rounded Rectangle\nconst rx = 0;\nconst ry = Math.round(iconSize + lineHeight * 0.25);\nconst rw = bitmap.width;\nconst rh = Math.round(lineHeight * 1.75);\nconst radius = 20;\nconst rcolor = ColorManager.dimColor1();\nbitmap.fillRoundRect(rx, ry, rw, rh, radius, rcolor);\n\n// Draw Skill Name\nconst name = skill.name;\nconst ny = ry + ((costText.length > 0) ? 0 : Math.floor((rh - lineHeight) / 2));\nthis.drawText(name, 0, ny, bitmap.width, 'center');\n\n// Draw Cost Text\nconst cw = this.textSizeEx(costText).width;\nconst cx = Math.floor((bitmap.width - cw) / 2);\nconst cy = ry + Math.ceil(lineHeight * 0.75);\nthis.drawTextEx(costText, cx, cy);"
 *
 * @param backgroundDrawJS:func
 * @text JS: Draw Background
 * @parent General
 * @type note
 * @desc Code used to draw the background layer while
 * Input Combo Skill inputs are active.
 * @default "// Declare Constants\nconst bitmap = this;\nconst width = bitmap.width / 2;\nconst height = bitmap.height;\nconst x1 = 0;\nconst x2 = Math.floor(width);\nconst y = 0;\nconst color1 = ColorManager.dimColor1();\nconst color2 = ColorManager.dimColor2();\n\n// Draw Gradient Background\nbitmap.gradientFillRect(x1, y, Math.floor(width), height, color1, color2);\nbitmap.gradientFillRect(x2, y, Math.ceil(width), height, color2, color1);"
 *
 * @param Movement
 *
 * @param MoveDuration:num
 * @text Move Duration
 * @parent Movement
 * @type number
 * @min 1
 * @desc How many frames should it take to move the buttons into place?
 * @default 20
 *
 * @param MoveInEasing:str
 * @text In Easing
 * @parent Movement
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * Requires VisuMZ_0_CoreEngine!
 * @default OutSine
 *
 * @param MoveOutEasing:str
 * @text Out Easing
 * @parent Movement
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * Requires VisuMZ_0_CoreEngine!
 * @default InSine
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Math.floor(Graphics.width / 2);\nconst y = Math.floor(Graphics.height / 2) + Math.floor(Graphics.height / 4);\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Math.floor(Graphics.width / 2) - Math.floor(Graphics.width / 4);\nconst y = Math.floor(Graphics.height / 2);\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Math.floor(Graphics.width / 2) + Math.floor(Graphics.width / 4);\nconst y = Math.floor(Graphics.height / 2);\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Math.floor(Graphics.width / 2);\nconst y = Math.floor(Graphics.height / 2) - Math.floor(Graphics.height / 4);\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
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
 * @param okCostText:str
 * @text Cost Text
 * @parent Ok
 * @desc What text do you wish to display for this skill's cost?
 * Text codes allowed.
 * @default \C[17]DONE\C[0]
 * 
 * @param okRectJS:func
 * @text JS: X, Y, W, H
 * @parent Ok
 * @type note
 * @desc Code used to determine the dimensions for this button.
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Math.floor(Graphics.width / 2);\nconst y = Math.floor(Graphics.height / 2);\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Math.floor(Graphics.width / 2) + Math.floor(Graphics.width / 4);\nconst y = Math.floor(Graphics.height / 2) + Math.floor(Graphics.height / 4);\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Math.floor(Graphics.width / 2) - Math.floor(Graphics.width / 4);\nconst y = Math.floor(Graphics.height / 2) - Math.floor(Graphics.height / 4);\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Math.floor(Graphics.width / 2) + Math.floor(Graphics.width / 4);\nconst y = Math.floor(Graphics.height / 2) - Math.floor(Graphics.height / 4);\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
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
 * @default "// Declare Constants\nconst uiWidth = Math.floor(Graphics.width / 3);\nconst spacing = 8;\nconst lineHeight = Window_Base.prototype.lineHeight();\nconst lines = 4;\n\n// Calculate Dimensions\nconst w = Math.floor(uiWidth / 3) - (spacing * 2);\nconst rectWidth = Math.max(192, w);\nconst h = lines * lineHeight;\nconst x = Math.floor(Graphics.width / 2) - Math.floor(Graphics.width / 4);\nconst y = Math.floor(Graphics.height / 2) + Math.floor(Graphics.height / 4);\n\n// Return Rectangle\nreturn new Rectangle(x, y, rectWidth, h);"
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

const _0x3282e4=_0x42f7;(function(_0x21bbbe,_0x393d7f){const _0x99a4d2=_0x42f7,_0x50c64b=_0x21bbbe();while(!![]){try{const _0x1e8590=parseInt(_0x99a4d2(0x182))/0x1+parseInt(_0x99a4d2(0x1e3))/0x2*(parseInt(_0x99a4d2(0x184))/0x3)+parseInt(_0x99a4d2(0x242))/0x4*(parseInt(_0x99a4d2(0x1b6))/0x5)+parseInt(_0x99a4d2(0x122))/0x6+parseInt(_0x99a4d2(0x11d))/0x7+-parseInt(_0x99a4d2(0x106))/0x8+-parseInt(_0x99a4d2(0x201))/0x9;if(_0x1e8590===_0x393d7f)break;else _0x50c64b['push'](_0x50c64b['shift']());}catch(_0xefeef8){_0x50c64b['push'](_0x50c64b['shift']());}}}(_0x12ef,0x6f84f));var label='EvoMatrixSkills',tier=tier||0x0,dependencies=[_0x3282e4(0x1d0),_0x3282e4(0x18a)],pluginData=$plugins[_0x3282e4(0x22e)](function(_0x525cd1){const _0x287341=_0x3282e4;return _0x525cd1['status']&&_0x525cd1[_0x287341(0x232)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x3282e4(0x241)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x3282e4(0x23b)]=function(_0x4de6a6,_0x349e68){const _0x5f4cae=_0x3282e4;for(const _0x5f1025 in _0x349e68){if(_0x5f4cae(0x19a)!==_0x5f4cae(0x19a))return![];else{if(_0x5f1025[_0x5f4cae(0x170)](/(.*):(.*)/i)){const _0x4f1878=String(RegExp['$1']),_0x5084bd=String(RegExp['$2'])[_0x5f4cae(0x19f)]()[_0x5f4cae(0x1fd)]();let _0x5772a8,_0x25cc25,_0x78daf8;switch(_0x5084bd){case'NUM':_0x5772a8=_0x349e68[_0x5f1025]!==''?Number(_0x349e68[_0x5f1025]):0x0;break;case _0x5f4cae(0x18e):_0x25cc25=_0x349e68[_0x5f1025]!==''?JSON['parse'](_0x349e68[_0x5f1025]):[],_0x5772a8=_0x25cc25['map'](_0x2eb60a=>Number(_0x2eb60a));break;case'EVAL':_0x5772a8=_0x349e68[_0x5f1025]!==''?eval(_0x349e68[_0x5f1025]):null;break;case _0x5f4cae(0x1e5):_0x25cc25=_0x349e68[_0x5f1025]!==''?JSON[_0x5f4cae(0x1cc)](_0x349e68[_0x5f1025]):[],_0x5772a8=_0x25cc25[_0x5f4cae(0x137)](_0x231d67=>eval(_0x231d67));break;case _0x5f4cae(0x19e):_0x5772a8=_0x349e68[_0x5f1025]!==''?JSON[_0x5f4cae(0x1cc)](_0x349e68[_0x5f1025]):'';break;case _0x5f4cae(0x175):_0x25cc25=_0x349e68[_0x5f1025]!==''?JSON[_0x5f4cae(0x1cc)](_0x349e68[_0x5f1025]):[],_0x5772a8=_0x25cc25['map'](_0x6d8dba=>JSON[_0x5f4cae(0x1cc)](_0x6d8dba));break;case _0x5f4cae(0x12e):_0x5772a8=_0x349e68[_0x5f1025]!==''?new Function(JSON['parse'](_0x349e68[_0x5f1025])):new Function(_0x5f4cae(0x152));break;case _0x5f4cae(0x156):_0x25cc25=_0x349e68[_0x5f1025]!==''?JSON[_0x5f4cae(0x1cc)](_0x349e68[_0x5f1025]):[],_0x5772a8=_0x25cc25['map'](_0x9447fa=>new Function(JSON[_0x5f4cae(0x1cc)](_0x9447fa)));break;case _0x5f4cae(0x191):_0x5772a8=_0x349e68[_0x5f1025]!==''?String(_0x349e68[_0x5f1025]):'';break;case'ARRAYSTR':_0x25cc25=_0x349e68[_0x5f1025]!==''?JSON[_0x5f4cae(0x1cc)](_0x349e68[_0x5f1025]):[],_0x5772a8=_0x25cc25[_0x5f4cae(0x137)](_0x32b697=>String(_0x32b697));break;case _0x5f4cae(0x168):_0x78daf8=_0x349e68[_0x5f1025]!==''?JSON[_0x5f4cae(0x1cc)](_0x349e68[_0x5f1025]):{},_0x5772a8=VisuMZ[_0x5f4cae(0x23b)]({},_0x78daf8);break;case _0x5f4cae(0x1dc):_0x25cc25=_0x349e68[_0x5f1025]!==''?JSON[_0x5f4cae(0x1cc)](_0x349e68[_0x5f1025]):[],_0x5772a8=_0x25cc25['map'](_0x14bb29=>VisuMZ['ConvertParams']({},JSON[_0x5f4cae(0x1cc)](_0x14bb29)));break;default:continue;}_0x4de6a6[_0x4f1878]=_0x5772a8;}}}return _0x4de6a6;},(_0x48383c=>{const _0x4c53dc=_0x3282e4,_0x28a22b=_0x48383c[_0x4c53dc(0x1c9)];for(const _0xb6d253 of dependencies){if(_0x4c53dc(0x19b)===_0x4c53dc(0x1a5)){const _0x244127=new _0x474858();this[_0x4c53dc(0x206)][_0x4c53dc(0x177)](_0x244127);const _0x42e4a7=new _0x477551(_0x16ee6f['width'],_0x149d40[_0x4c53dc(0x1c3)]);_0x244127['bitmap']=_0x42e4a7;const _0x31a332=_0x29a07c[_0x4c53dc(0x13a)];_0x31a332[_0x4c53dc(0x252)](_0x244127[_0x4c53dc(0xfe)]);}else{if(!Imported[_0xb6d253]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x4c53dc(0x20e)](_0x28a22b,_0xb6d253)),SceneManager[_0x4c53dc(0x1ec)]();break;}}}const _0x2ba028=_0x48383c[_0x4c53dc(0x232)];if(_0x2ba028[_0x4c53dc(0x170)](/\[Version[ ](.*?)\]/i)){if('wtKMm'!=='Ffmtf'){const _0x1383d3=Number(RegExp['$1']);_0x1383d3!==VisuMZ[label][_0x4c53dc(0x237)]&&(alert(_0x4c53dc(0x220)[_0x4c53dc(0x20e)](_0x28a22b,_0x1383d3)),SceneManager[_0x4c53dc(0x1ec)]());}else{const _0xbed703=this['width']*(_0x7ba995['WINDOW_SCALE']||0.01),_0x349c3b=this[_0x4c53dc(0x1c3)]*(_0x2088fc['WINDOW_SCALE']||0.01);this['x']=_0x4c746a[_0x4c53dc(0x16e)](this['x']['clamp'](0x0,_0x56a6af[_0x4c53dc(0x20d)]-_0xbed703)),this['y']=_0x4f5eb3[_0x4c53dc(0x16e)](this['y'][_0x4c53dc(0x20a)](0x0,_0x200970[_0x4c53dc(0x1c3)]-_0x349c3b));}}if(_0x2ba028[_0x4c53dc(0x170)](/\[Tier[ ](\d+)\]/i)){const _0xcb4424=Number(RegExp['$1']);_0xcb4424<tier?'lZDuH'===_0x4c53dc(0x104)?this[_0x4c53dc(0x161)]=function(){}:(alert(_0x4c53dc(0x1a1)[_0x4c53dc(0x20e)](_0x28a22b,_0xcb4424,tier)),SceneManager['exit']()):_0x4c53dc(0x144)===_0x4c53dc(0x1db)?this[_0x4c53dc(0x1f7)]():tier=Math[_0x4c53dc(0x208)](_0xcb4424,tier);}VisuMZ[_0x4c53dc(0x23b)](VisuMZ[label]['Settings'],_0x48383c[_0x4c53dc(0x257)]);})(pluginData),VisuMZ[_0x3282e4(0x1a2)][_0x3282e4(0x100)]={'AvailableMatrix':/<(?:AVAILABLE EVO MATRIX|AVAILABLE MATRIX|EVO MATRIX|MATRIX) SKILL[ ](.*):[ ](.*)>/gi,'ForcedMatrix':/<(?:ALWAYS|FORCE|FORCED) (?:EVO MATRIX|MATRIX) SKILL[ ](.*):[ ](.*)>/gi,'LearnedMatrix':/<(?:LEARNED|KNOWN) (?:EVO MATRIX|MATRIX) SKILL[ ](.*):[ ](.*)>/gi,'MatrixOnly':/<(?:EVO MATRIX|MATRIX) ONLY>/i,'StartAni':/<(?:EVO MATRIX|MATRIX) (?:ANI|ANIMATION):[ ](\d+)>/i},VisuMZ[_0x3282e4(0x1a2)][_0x3282e4(0x109)]=[_0x3282e4(0x117),_0x3282e4(0x255),_0x3282e4(0x1e4),'up','ok',_0x3282e4(0x165),_0x3282e4(0x253),_0x3282e4(0x16a),_0x3282e4(0x1aa)],VisuMZ[_0x3282e4(0x1a2)][_0x3282e4(0x172)]=function(_0x4218a6){const _0x3ed105=_0x3282e4;_0x4218a6=_0x4218a6[_0x3ed105(0x130)]()['trim']();switch(_0x4218a6){case'2':return _0x3ed105(0x117);case'4':return _0x3ed105(0x255);case'6':return'right';case'8':return'up';case's':return'shift';case'z':return'ok';case'x':return'cancel';case'q':return _0x3ed105(0x253);case'w':return _0x3ed105(0x16a);}return _0x4218a6;},DataManager[_0x3282e4(0x1b7)]=function(_0x58a389){const _0x4d0fdd=_0x3282e4;if(!_0x58a389)return!![];if(!DataManager[_0x4d0fdd(0x228)](_0x58a389))return!![];this[_0x4d0fdd(0x213)]=this[_0x4d0fdd(0x213)]||{};if(this[_0x4d0fdd(0x213)][_0x58a389['id']])return this[_0x4d0fdd(0x213)][_0x58a389['id']];const _0x2de7bf=_0x58a389[_0x4d0fdd(0x1c2)]||'',_0x532a62=[_0x4d0fdd(0x239),_0x4d0fdd(0x157)];this[_0x4d0fdd(0x213)][_0x58a389['id']]=![];for(const _0x5d8f4d of _0x532a62){if(_0x4d0fdd(0x18f)==='klNet'){if(!VisuMZ[_0x5d8f4d])continue;const _0xd9cee9=VisuMZ[_0x5d8f4d][_0x4d0fdd(0x100)];for(const _0x57d0a8 in _0xd9cee9){if(_0x2de7bf[_0x4d0fdd(0x170)](_0xd9cee9[_0x57d0a8])){this['_hasEvoMatrixSkillsConflict'][_0x58a389['id']]=!![];break;}}if(this[_0x4d0fdd(0x213)][_0x58a389['id']])break;}else this['_text']=this['_skill'][_0x4d0fdd(0x232)]||'';}if(Imported[_0x4d0fdd(0x236)]&&this[_0x4d0fdd(0x25c)](_0x58a389)){if(_0x4d0fdd(0x1e2)!=='XttDQ'){this[_0x4d0fdd(0x112)]();return;}else this['_hasEvoMatrixSkillsConflict'][_0x58a389['id']]=!![];}if(Imported[_0x4d0fdd(0x126)]&&this['canConcoctItems'](_0x58a389)){if(_0x4d0fdd(0x162)!==_0x4d0fdd(0x1e7))this['_hasEvoMatrixSkillsConflict'][_0x58a389['id']]=!![];else return![];}return Imported[_0x4d0fdd(0x126)]&&this[_0x4d0fdd(0x196)](_0x58a389)&&(_0x4d0fdd(0x18d)===_0x4d0fdd(0x18d)?this[_0x4d0fdd(0x213)][_0x58a389['id']]=!![]:(_0x48592d[_0x4d0fdd(0x16f)](),this[_0x4d0fdd(0x200)](_0x5791cb,_0x1ad419))),this[_0x4d0fdd(0x213)][_0x58a389['id']];},DataManager['hasEvoMatrixSkillPath']=function(_0x56a8aa,_0x537884){const _0x256296=_0x3282e4;return this[_0x256296(0x17b)](_0x56a8aa,_0x537884)[_0x256296(0x131)]>0x0;},DataManager[_0x3282e4(0x17b)]=function(_0x3f32ea,_0x17182c){const _0x22cbb2=_0x3282e4;if(!_0x17182c)return[];if(!_0x3f32ea)return[];if(!DataManager[_0x22cbb2(0x228)](_0x17182c))return[];if(DataManager[_0x22cbb2(0x1b7)](_0x17182c))return[];const _0x4030bb=VisuMZ[_0x22cbb2(0x1a2)][_0x22cbb2(0x100)],_0xf65490=[_0x22cbb2(0x1bc),_0x22cbb2(0x113),_0x22cbb2(0x22d)],_0x42e50c=_0x17182c[_0x22cbb2(0x1c2)]||'',_0x419239=[];for(const _0x3bda59 of _0xf65490){if(_0x22cbb2(0x158)===_0x22cbb2(0x207))this['_hasEvoMatrixSkillsConflict'][_0x3d9671['id']]=!![];else{const _0x512699=_0x42e50c[_0x22cbb2(0x170)](_0x4030bb[_0x3bda59]);if(_0x512699){if(_0x22cbb2(0x14c)!=='AbVbP')for(const _0x129523 of _0x512699){if(_0x22cbb2(0x235)!==_0x22cbb2(0x235))return this['getEvoMatrixSkills'](_0x1b54c5,_0x2eefea)[_0x22cbb2(0x131)]>0x0;else{_0x129523[_0x22cbb2(0x170)](_0x4030bb[_0x3bda59]);const _0x4c6cd0=String(RegExp['$1'])[_0x22cbb2(0x19f)]()[_0x22cbb2(0x1fd)](),_0x1b66ee=String(RegExp['$2']);if(_0x4c6cd0==='OK'||_0x4c6cd0==='Z')continue;let _0x2bd5c8=0x0;const _0x52ff18=/^\d+$/[_0x22cbb2(0x107)](_0x1b66ee);_0x52ff18?_0x2bd5c8=Number(_0x1b66ee):_0x2bd5c8=DataManager[_0x22cbb2(0x125)](_0x1b66ee);if(_0x2bd5c8<=0x0)continue;if(_0x3bda59==='AvailableMatrix'&&!_0x3f32ea['hasSkill'](_0x2bd5c8))continue;if(_0x3bda59==='LearnedMatrix'&&!_0x3f32ea[_0x22cbb2(0x19d)](_0x2bd5c8))continue;const _0x47c0cd=$dataSkills[_0x2bd5c8];if(_0x47c0cd)_0x419239[_0x22cbb2(0x24d)](_0x47c0cd);}}else this['_evoMatrixSkillUser']=null;}}}return _0x419239;},DataManager['getEvoMatrixStartAnimation']=function(_0x2ad7c0){const _0x5a0bd0=_0x3282e4;if(!_0x2ad7c0)return Window_BattleLog[_0x5a0bd0(0x10a)];if(!DataManager[_0x5a0bd0(0x228)](_0x2ad7c0))return Window_BattleLog[_0x5a0bd0(0x10a)];const _0x3d7005=VisuMZ['EvoMatrixSkills'][_0x5a0bd0(0x100)],_0x9381ec=_0x2ad7c0[_0x5a0bd0(0x1c2)]||'';if(_0x9381ec[_0x5a0bd0(0x170)](_0x3d7005[_0x5a0bd0(0x1be)])){if(_0x5a0bd0(0x197)==='TwnKT'){const _0x3b9b67=new _0x1390c3(_0x1f3c7d['x'],_0x4a0537['y']),_0x5763c5=this[_0x5a0bd0(0x17a)]['applyInverse'](_0x3b9b67);return this[_0x5a0bd0(0x223)](_0x5763c5['x'],_0x5763c5['y']);}else return Number(RegExp['$1']);}return Window_BattleLog[_0x5a0bd0(0x10a)];},Bitmap[_0x3282e4(0x1c0)][_0x3282e4(0x169)]=function(_0x4bac0f,_0x30d162,_0x20d4b2,_0xf9d355,_0x479e5b,_0x4680f5){const _0x35bd14=_0x3282e4,_0x10c046=_0x4bac0f+_0x20d4b2,_0x16f20d=_0x30d162+_0xf9d355,_0x591225=this[_0x35bd14(0xf9)];_0x591225[_0x35bd14(0x23a)](),_0x591225['fillStyle']=_0x4680f5,_0x591225[_0x35bd14(0x108)](),_0x591225[_0x35bd14(0x229)](_0x4bac0f+_0x479e5b,_0x30d162),_0x591225[_0x35bd14(0x225)](_0x10c046-_0x479e5b,_0x30d162),_0x591225[_0x35bd14(0x179)](_0x10c046,_0x30d162,_0x10c046,_0x30d162+_0x479e5b),_0x591225['lineTo'](_0x10c046,_0x30d162+_0xf9d355-_0x479e5b),_0x591225['quadraticCurveTo'](_0x10c046,_0x16f20d,_0x10c046-_0x479e5b,_0x16f20d),_0x591225[_0x35bd14(0x225)](_0x4bac0f+_0x479e5b,_0x16f20d),_0x591225['quadraticCurveTo'](_0x4bac0f,_0x16f20d,_0x4bac0f,_0x16f20d-_0x479e5b),_0x591225['lineTo'](_0x4bac0f,_0x30d162+_0x479e5b),_0x591225[_0x35bd14(0x179)](_0x4bac0f,_0x30d162,_0x4bac0f+_0x479e5b,_0x30d162),_0x591225[_0x35bd14(0x1a8)](),_0x591225[_0x35bd14(0x254)](),this['_baseTexture'][_0x35bd14(0x127)]();},SoundManager[_0x3282e4(0x17d)]=function(){const _0x131f74=_0x3282e4,_0x2fff46=VisuMZ[_0x131f74(0x1a2)][_0x131f74(0x241)][_0x131f74(0x111)],_0x38062a={'name':_0x2fff46[_0x131f74(0x1c9)],'volume':_0x2fff46['volume'],'pitch':_0x2fff46['pitch'],'pan':_0x2fff46['pan']};AudioManager[_0x131f74(0x150)](_0x38062a);},VisuMZ[_0x3282e4(0x1a2)]['BattleManager_startAction']=BattleManager['startAction'],BattleManager[_0x3282e4(0x22b)]=function(){const _0x2efcbb=_0x3282e4;$gameVariables[_0x2efcbb(0x1fe)]();const _0x257284=DataManager['hasEvoMatrixSkillPath'](this[_0x2efcbb(0x1da)],this[_0x2efcbb(0x1da)][_0x2efcbb(0x24f)]()[_0x2efcbb(0x218)]());if(_0x257284){if(_0x2efcbb(0x1ef)===_0x2efcbb(0x1cf)){const _0x15d95e=this[_0x2efcbb(0xf8)](this[_0x2efcbb(0x1fa)]);this['width']=_0x15d95e[_0x2efcbb(0x20d)]+(this['itemPadding']()+this[_0x2efcbb(0x22c)])*0x2,this['height']=_0x15d95e[_0x2efcbb(0x1c3)]+this['padding']*0x2,this[_0x2efcbb(0x1c5)](),this[_0x2efcbb(0x1b9)]();}else this['_subject'][_0x2efcbb(0x24f)]()[_0x2efcbb(0x188)]();}VisuMZ['EvoMatrixSkills'][_0x2efcbb(0x160)]['call'](this),_0x257284&&this[_0x2efcbb(0x1da)]['currentAction']()[_0x2efcbb(0x256)]();},VisuMZ[_0x3282e4(0x1a2)][_0x3282e4(0x24e)]=BattleManager[_0x3282e4(0x15c)],BattleManager[_0x3282e4(0x15c)]=function(){const _0x234879=_0x3282e4;$gameVariables[_0x234879(0x1fe)](),VisuMZ[_0x234879(0x1a2)][_0x234879(0x24e)][_0x234879(0x252)](this);},VisuMZ[_0x3282e4(0x1a2)][_0x3282e4(0x259)]=Game_Temp[_0x3282e4(0x1c0)]['initialize'],Game_Temp[_0x3282e4(0x1c0)][_0x3282e4(0x176)]=function(){const _0x17e2d5=_0x3282e4;VisuMZ[_0x17e2d5(0x1a2)][_0x17e2d5(0x259)]['call'](this),this[_0x17e2d5(0x21c)]();},Game_Temp[_0x3282e4(0x1c0)][_0x3282e4(0x21c)]=function(){const _0x386fa9=_0x3282e4;this[_0x386fa9(0x1ea)]=null;},Game_Temp[_0x3282e4(0x1c0)][_0x3282e4(0x121)]=function(_0x1c984e,_0x53339b){const _0x210826=_0x3282e4;$gameVariables[_0x210826(0x1fe)](),this[_0x210826(0x200)](_0x1c984e,_0x53339b);},Game_Temp[_0x3282e4(0x1c0)][_0x3282e4(0x234)]=function(_0x87869c,_0x34a3fc){const _0x47bfdb=_0x3282e4;$gameVariables[_0x47bfdb(0x16f)](),this[_0x47bfdb(0x200)](_0x87869c,_0x34a3fc);},Game_Temp['prototype'][_0x3282e4(0x200)]=function(_0xc68c8b,_0xc26ee2){const _0x363e82=_0x3282e4;this[_0x363e82(0x21c)](),this[_0x363e82(0x12c)](_0xc68c8b),this[_0x363e82(0x212)](_0xc26ee2);if(Imported['VisuMZ_0_CoreEngine']){if(_0x363e82(0x1d1)===_0x363e82(0x1d1)){const _0x2b316c=DataManager[_0x363e82(0x10d)](_0xc26ee2);$gameTemp['requestFauxAnimation']([_0xc68c8b],_0x2b316c,![],![]);}else _0x4d3860['EvoMatrixSkills']['Scene_Battle_createDisplayObjects'][_0x363e82(0x252)](this),this[_0x363e82(0x189)]();}},Game_Temp[_0x3282e4(0x1c0)]['registerEvoMatrixSkillsActor']=function(_0x38dc5e){const _0x5dbda9=_0x3282e4;this[_0x5dbda9(0x1ea)]=_0x38dc5e,this[_0x5dbda9(0x12d)]={};},Game_Temp[_0x3282e4(0x1c0)][_0x3282e4(0x212)]=function(_0x3a7fff){const _0x30ddaa=_0x3282e4;this['_evoMatrixSkillKeys']={},this[_0x30ddaa(0x14b)](_0x3a7fff,_0x30ddaa(0x1bc)),this[_0x30ddaa(0x14b)](_0x3a7fff,_0x30ddaa(0x113)),this[_0x30ddaa(0x14b)](_0x3a7fff,_0x30ddaa(0x22d)),this['_evoMatrixSkillKeys']['ok']=_0x3a7fff['id'];},Game_Temp[_0x3282e4(0x1c0)]['registerEvoMatrixSkillsType']=function(_0x460076,_0x582ee3){const _0x460967=_0x3282e4,_0x56d75d=VisuMZ['EvoMatrixSkills'][_0x460967(0x100)],_0x1ade51=VisuMZ[_0x460967(0x1a2)][_0x460967(0x109)][_0x460967(0x1ca)](),_0x3790dd=_0x460076['note']||'',_0xcf0a10=this[_0x460967(0x1ea)],_0x633343=_0x3790dd[_0x460967(0x170)](_0x56d75d[_0x582ee3]);if(_0x633343)for(const _0x975deb of _0x633343){_0x975deb[_0x460967(0x170)](_0x56d75d[_0x582ee3]);let _0x37b8a0=String(RegExp['$1'])['toUpperCase']()[_0x460967(0x1fd)]();const _0x354674=String(RegExp['$2']);_0x37b8a0=VisuMZ[_0x460967(0x1a2)][_0x460967(0x172)](_0x37b8a0);if(!_0x1ade51[_0x460967(0x12b)](_0x37b8a0))continue;const _0x2ce941=/^\d+$/[_0x460967(0x107)](_0x354674);let _0x2971c0=0x0;_0x2ce941?_0x2971c0=Number(_0x354674):_0x2971c0=DataManager[_0x460967(0x125)](_0x354674);if(_0x2971c0<=0x0)continue;if(_0x582ee3===_0x460967(0x1bc)&&!_0xcf0a10[_0x460967(0x1ba)](_0x2971c0))continue;if(_0x582ee3==='LearnedMatrix'&&!_0xcf0a10['isLearnedSkill'](_0x2971c0))continue;this[_0x460967(0x12d)][_0x37b8a0]=_0x2971c0;}},Game_Temp[_0x3282e4(0x1c0)][_0x3282e4(0x13c)]=function(){const _0x7b4dee=_0x3282e4;return this[_0x7b4dee(0x1ea)]||null;},Game_Temp['prototype'][_0x3282e4(0x146)]=function(_0x42862e){const _0x252dcf=_0x3282e4;if(!this[_0x252dcf(0x12d)])return null;return this[_0x252dcf(0x12d)][_0x42862e];},Game_Temp['prototype'][_0x3282e4(0x16d)]=function(_0x530155){const _0xd078e9=_0x3282e4;return!!this[_0xd078e9(0x146)](_0x530155);},Game_Temp['prototype'][_0x3282e4(0x10e)]=function(){const _0x43364f=_0x3282e4,_0x12b0b8=BattleManager[_0x43364f(0x1da)],_0x2ebd2f=[],_0x4fbbb3=VisuMZ[_0x43364f(0x1a2)][_0x43364f(0x109)][_0x43364f(0x1ca)]();_0x4fbbb3[_0x43364f(0x13f)]('ok');for(const _0x3700fd of _0x4fbbb3){if(_0x43364f(0x1b8)===_0x43364f(0x10b)){if(!this[_0x43364f(0x21a)])return;this['x']=_0x10a49f['x']+_0x53668d['MOUSE_OFFSET_X'],this['y']=_0x4b80e0['y']+_0xbef80b[_0x43364f(0x209)],this['clampPosition']();}else{if(!this[_0x43364f(0x16d)](_0x3700fd))continue;const _0x523932=this[_0x43364f(0x146)](_0x3700fd),_0x25a0c0=$dataSkills[_0x523932];if(!_0x12b0b8[_0x43364f(0x140)](_0x25a0c0))continue;_0x2ebd2f[_0x43364f(0x24d)](_0x3700fd);}}return _0x2ebd2f[_0x43364f(0x131)]<=0x0&&(_0x43364f(0x1b1)!==_0x43364f(0x1b1)?this['_subject'][_0x43364f(0x24f)]()[_0x43364f(0x256)]():_0x2ebd2f['push']('ok')),_0x2ebd2f;},Game_Variables['EVO_MATRIX_TIMES_VARIABLE']=VisuMZ[_0x3282e4(0x1a2)][_0x3282e4(0x241)]['EvoVariable'],Game_Variables[_0x3282e4(0x1c0)][_0x3282e4(0x1fe)]=function(){const _0x11d5dc=_0x3282e4,_0x164d20=Game_Variables[_0x11d5dc(0x15f)];_0x164d20>0x0&&this['setValue'](_0x164d20,0x0);},Game_Variables[_0x3282e4(0x1c0)][_0x3282e4(0x16f)]=function(){const _0x5e8a42=_0x3282e4,_0x3d897a=Game_Variables[_0x5e8a42(0x15f)];if(_0x3d897a>0x0){if(_0x5e8a42(0x1ed)!==_0x5e8a42(0x12a)){const _0x346383=this[_0x5e8a42(0x21b)](_0x3d897a);this[_0x5e8a42(0x1c7)](_0x3d897a,_0x346383+0x1);}else this[_0x5e8a42(0x23d)](_0x40cac2,_0x2516ac);}},Game_Action[_0x3282e4(0x1c0)][_0x3282e4(0x188)]=function(){this['applyGlobal']=function(){};},Game_Action[_0x3282e4(0x1c0)][_0x3282e4(0x256)]=function(){const _0x2b6e9d=_0x3282e4;this[_0x2b6e9d(0x161)]=Game_Action[_0x2b6e9d(0x1c0)]['applyGlobal'];},VisuMZ[_0x3282e4(0x1a2)]['Game_BattlerBase_meetsSkillConditions']=Game_BattlerBase[_0x3282e4(0x1c0)][_0x3282e4(0x1b4)],Game_BattlerBase[_0x3282e4(0x1c0)][_0x3282e4(0x1b4)]=function(_0x55e3ff){const _0x4e5f62=_0x3282e4;if(!this[_0x4e5f62(0x118)](_0x55e3ff))return![];return VisuMZ[_0x4e5f62(0x1a2)][_0x4e5f62(0x154)][_0x4e5f62(0x252)](this,_0x55e3ff);},Game_BattlerBase[_0x3282e4(0x1c0)]['meetsEvoMatrixSkillConditions']=function(_0x5744db){const _0x5cf4c1=_0x3282e4;if(!_0x5744db)return![];const _0x5a52fd=VisuMZ[_0x5cf4c1(0x1a2)]['RegExp'],_0x1f0a3a=_0x5744db[_0x5cf4c1(0x1c2)]||'';if(_0x1f0a3a[_0x5cf4c1(0x170)](_0x5a52fd['MatrixOnly'])){if(!this[_0x5cf4c1(0x216)]())return![];if(!SceneManager[_0x5cf4c1(0x245)]())return![];const _0x380d71=SceneManager[_0x5cf4c1(0x11e)]['_logWindow'];if(_0x380d71&&!_0x380d71[_0x5cf4c1(0x1bf)])return![];}return!![];},Game_Actor[_0x3282e4(0x1c0)][_0x3282e4(0x186)]=function(_0x5b0708){const _0x1045ea=_0x3282e4;BattleManager[_0x1045ea(0x247)][_0x1045ea(0x151)](_0x5b0708['id']),BattleManager[_0x1045ea(0x145)]=BattleManager['_action']['makeTargets'](),this[_0x1045ea(0x219)](_0x5b0708),this[_0x1045ea(0x1d8)](_0x5b0708);},Game_Actor[_0x3282e4(0x1c0)][_0x3282e4(0x1d8)]=function(_0x1fa0bc){const _0x1bfa33=_0x3282e4;if(!Imported[_0x1bfa33(0x24c)])return;if(!DataManager[_0x1bfa33(0x228)](_0x1fa0bc))return;if(this[_0x1bfa33(0x202)](_0x1fa0bc['id'])<=0x0)return;const _0x7462b5=VisuMZ[_0x1bfa33(0x1a2)][_0x1bfa33(0x241)]['CooldownAdjust']||0x0;this[_0x1bfa33(0x1ab)](_0x1fa0bc['id'],_0x7462b5);},VisuMZ['EvoMatrixSkills'][_0x3282e4(0x1cb)]=Scene_Battle[_0x3282e4(0x1c0)]['createDisplayObjects'],Scene_Battle[_0x3282e4(0x1c0)][_0x3282e4(0x231)]=function(){const _0x57e83a=_0x3282e4;VisuMZ[_0x57e83a(0x1a2)][_0x57e83a(0x1cb)][_0x57e83a(0x252)](this),this[_0x57e83a(0x189)]();},Scene_Battle[_0x3282e4(0x1c0)]['createEvoMatrixSkillsUiElements']=function(){const _0x5d48ae=_0x3282e4;this[_0x5d48ae(0xff)](),this[_0x5d48ae(0x190)](),this[_0x5d48ae(0x192)](),this[_0x5d48ae(0x1fc)]();},Scene_Battle[_0x3282e4(0x1c0)]['createEvoMatrixSkillsUiContainer']=function(){const _0x5806ab=_0x3282e4;this[_0x5806ab(0x206)]=new Sprite(),this['addChild'](this[_0x5806ab(0x206)]),this[_0x5806ab(0x206)][_0x5806ab(0x246)]=0x0,this[_0x5806ab(0x18b)]=0x0;},Scene_Battle[_0x3282e4(0x1c0)]['createEvoMatrixSkillsUiBackground']=function(){const _0x1881af=_0x3282e4,_0x137ec1=VisuMZ[_0x1881af(0x1a2)][_0x1881af(0x241)]['UI'];if(_0x137ec1[_0x1881af(0x13a)]){if(_0x1881af(0x1dd)!==_0x1881af(0x23c)){const _0x303b0f=new Sprite();this['_evoMatrixSkillsUiContainer'][_0x1881af(0x177)](_0x303b0f);const _0x558cb4=new Bitmap(Graphics[_0x1881af(0x20d)],Graphics[_0x1881af(0x1c3)]);_0x303b0f['bitmap']=_0x558cb4;const _0x1558a2=_0x137ec1[_0x1881af(0x13a)];_0x1558a2[_0x1881af(0x252)](_0x303b0f[_0x1881af(0xfe)]);}else _0x3b4a96[_0x1881af(0x1fe)](),_0x324076['EvoMatrixSkills'][_0x1881af(0x24e)][_0x1881af(0x252)](this);}if(_0x137ec1['BackgroundImage']!==''){const _0x38433f=new Sprite();this[_0x1881af(0x206)][_0x1881af(0x177)](_0x38433f);const _0x1f8464=ImageManager[_0x1881af(0x1e8)](_0x137ec1[_0x1881af(0x211)]);_0x38433f['bitmap']=_0x1f8464;}},Scene_Battle[_0x3282e4(0x1c0)][_0x3282e4(0x192)]=function(){const _0x4a8b12=_0x3282e4;this[_0x4a8b12(0x1d2)]={};const _0x3d78f2=VisuMZ[_0x4a8b12(0x1a2)][_0x4a8b12(0x109)][_0x4a8b12(0x1ca)]();_0x3d78f2['remove']('ok'),_0x3d78f2[_0x4a8b12(0x24d)]('ok');for(const _0xd17ecd of _0x3d78f2){if(_0x4a8b12(0x163)!==_0x4a8b12(0x163))return _0x38ba6c(_0x525685['$1']);else{const _0x2421d4=new Sprite_EvoMatrixButton(_0xd17ecd);this[_0x4a8b12(0x206)]['addChild'](_0x2421d4),this[_0x4a8b12(0x1d2)][_0xd17ecd]=_0x2421d4;}}},Scene_Battle['prototype'][_0x3282e4(0x1fc)]=function(){const _0x50f634=_0x3282e4;if(!Imported[_0x50f634(0x1f5)])return;if(!Window_EvoMatrixSkillsTooltip['ENABLED'])return;this[_0x50f634(0x1bd)]=new Window_EvoMatrixSkillsTooltip(),this[_0x50f634(0x177)](this['_evoMatrixSkillsUiTooltipWindow']);},VisuMZ[_0x3282e4(0x1a2)][_0x3282e4(0x185)]=Scene_Battle[_0x3282e4(0x1c0)][_0x3282e4(0x127)],Scene_Battle[_0x3282e4(0x1c0)]['update']=function(){const _0x41d89c=_0x3282e4;VisuMZ[_0x41d89c(0x1a2)][_0x41d89c(0x185)][_0x41d89c(0x252)](this);if(this[_0x41d89c(0x1d5)]())this['updateEvoMatrixSkills']();this[_0x41d89c(0x139)]();},Scene_Battle[_0x3282e4(0x1c0)][_0x3282e4(0x234)]=function(){const _0x42120f=_0x3282e4,_0x3f7bc4=BattleManager[_0x42120f(0x1da)],_0xadb15f=VisuMZ[_0x42120f(0x1a2)]['Keys'][_0x42120f(0x1ca)]();if(this['_evoMatrixSkillsUiMoveDuration']-->0x0)return;if(_0x3f7bc4[_0x42120f(0x17e)]()){if(_0x42120f(0x23f)!==_0x42120f(0x1d3)){this[_0x42120f(0x112)]();return;}else{if(this[_0x42120f(0x141)]>0x0&&this[_0x42120f(0x11b)]!=='')return![];if(this[_0x42120f(0x11c)]!==_0x396025[_0x42120f(0x1da)])return!![];if(this['_lastSkillID']!==_0x8f91a8[_0x42120f(0x146)](this['_key']))return!![];if(_0x12ebc1[_0x42120f(0x20c)]&&_0x5452ce[_0x42120f(0x1e6)]){if(this[_0x42120f(0x142)]!==_0x134d18['getLastUsedGamepadType']())return!![];}return![];}}for(const _0x20bcac of _0xadb15f){if(!$gameTemp[_0x42120f(0x16d)](_0x20bcac))continue;const _0x145525=$dataSkills[$gameTemp['getEvoMatrixSkillsKey'](_0x20bcac)];if(!_0x145525)continue;if(_0x20bcac!=='ok'&&!_0x3f7bc4['canUse'](_0x145525))continue;if(!Input['isTriggered'](_0x20bcac))continue;this[_0x42120f(0x187)](_0x20bcac,_0x145525);break;}},Scene_Battle[_0x3282e4(0x1c0)]['canPerformEvoMatrixSkills']=function(){const _0x3d3480=_0x3282e4;return this[_0x3d3480(0x110)]&&this[_0x3d3480(0x110)][_0x3d3480(0x1bf)];},Scene_Battle[_0x3282e4(0x1c0)][_0x3282e4(0x139)]=function(){const _0x5992ea=_0x3282e4,_0x41288f=VisuMZ[_0x5992ea(0x1a2)][_0x5992ea(0x241)]['UI'],_0x57c15c=this[_0x5992ea(0x1d5)]();if(this['_evoMatrixSkillsUiContainer']){const _0x2b0b24=_0x41288f[_0x5992ea(0x1bb)]*(_0x57c15c?0x1:-0x1);this[_0x5992ea(0x206)][_0x5992ea(0x246)]+=_0x2b0b24;}},Scene_Battle[_0x3282e4(0x1c0)][_0x3282e4(0x187)]=function(_0x25ccb4,_0x5243ea){const _0x4e35ca=_0x3282e4;this[_0x4e35ca(0x1d2)][_0x25ccb4][_0x4e35ca(0x233)]=0x4,SoundManager[_0x4e35ca(0x17d)]();const _0x5dacef=BattleManager[_0x4e35ca(0x1da)];if(_0x25ccb4==='ok')this[_0x4e35ca(0x110)][_0x4e35ca(0x258)](),this[_0x4e35ca(0x21e)](_0x25ccb4);else _0x5dacef&&(_0x5dacef['updateEvoMatrixSkill'](_0x5243ea),DataManager[_0x4e35ca(0x1e1)](_0x5dacef,_0x5243ea)?(this[_0x4e35ca(0x243)](_0x25ccb4),$gameTemp['updateEvoMatrixSkills'](_0x5dacef,_0x5243ea)):_0x4e35ca(0x1d7)!=='gRsfn'?(this['_logWindow'][_0x4e35ca(0x258)](),this[_0x4e35ca(0x21e)](_0x25ccb4)):_0x4841c5=_0x1b0e3b(_0x19139a));},Scene_Battle[_0x3282e4(0x1c0)][_0x3282e4(0x112)]=function(){const _0x2eb191=_0x3282e4,_0x2eeb1e=$gameTemp[_0x2eb191(0x10e)](),_0x26466e=_0x2eeb1e[Math[_0x2eb191(0x1d9)](_0x2eeb1e[_0x2eb191(0x131)])],_0x604e39=$dataSkills[$gameTemp[_0x2eb191(0x146)](_0x26466e)];this[_0x2eb191(0x187)](_0x26466e,_0x604e39);},Scene_Battle[_0x3282e4(0x1c0)][_0x3282e4(0x16b)]=function(){const _0x1347f4=_0x3282e4;this[_0x1347f4(0x18b)]=Sprite_EvoMatrixButton[_0x1347f4(0x136)];const _0x10e244=VisuMZ[_0x1347f4(0x1a2)]['Keys'][_0x1347f4(0x1ca)]();for(const _0x37c1ba of _0x10e244){if(_0x1347f4(0x1a4)!==_0x1347f4(0x1a4))return _0x15b3ce(_0x229d74['$1']);else this[_0x1347f4(0x1d2)][_0x37c1ba]['moveFromCenter']();}},Scene_Battle[_0x3282e4(0x1c0)][_0x3282e4(0x243)]=function(_0x1361a1){const _0x41e836=_0x3282e4;this[_0x41e836(0x18b)]=Sprite_EvoMatrixButton[_0x41e836(0x136)],this[_0x41e836(0x18b)]*=0x2;const _0x22cd80=VisuMZ[_0x41e836(0x1a2)][_0x41e836(0x109)][_0x41e836(0x1ca)]();for(const _0x49f721 of _0x22cd80){_0x49f721===_0x1361a1?this[_0x41e836(0x1d2)][_0x49f721]['moveToCenter']():this['_evoMatrixSkillButtons'][_0x49f721][_0x41e836(0x1c1)]();}},Scene_Battle[_0x3282e4(0x1c0)][_0x3282e4(0x21e)]=function(_0x150887){const _0x213c1a=_0x3282e4;this['_evoMatrixSkillsUiMoveDuration']=Sprite_EvoMatrixButton[_0x213c1a(0x136)];const _0xf5ffd6=VisuMZ[_0x213c1a(0x1a2)][_0x213c1a(0x109)][_0x213c1a(0x1ca)]();for(const _0x4eacc3 of _0xf5ffd6){if(_0x4eacc3===_0x150887)continue;this[_0x213c1a(0x1d2)][_0x4eacc3][_0x213c1a(0x1f6)]();}},VisuMZ[_0x3282e4(0x1a2)][_0x3282e4(0x1ee)]=Scene_Battle['prototype'][_0x3282e4(0x1ac)],Scene_Battle[_0x3282e4(0x1c0)][_0x3282e4(0x1ac)]=function(){const _0x5caac4=_0x3282e4;if(this[_0x5caac4(0x1d5)]())return![];return VisuMZ[_0x5caac4(0x1a2)][_0x5caac4(0x1ee)]['call'](this);};function Sprite_EvoMatrixButton(){const _0x3d746c=_0x3282e4;this[_0x3d746c(0x176)](...arguments);}Sprite_EvoMatrixButton['prototype']=Object[_0x3282e4(0x244)](Sprite_Clickable[_0x3282e4(0x1c0)]),Sprite_EvoMatrixButton['prototype']['constructor']=Sprite_EvoMatrixButton,Sprite_EvoMatrixButton[_0x3282e4(0x199)]=VisuMZ['EvoMatrixSkills'][_0x3282e4(0x241)]['UI'][_0x3282e4(0x22f)]??_0x3282e4(0x123),Sprite_EvoMatrixButton[_0x3282e4(0x114)]=VisuMZ['EvoMatrixSkills'][_0x3282e4(0x241)]['UI']['KeypressUiOffsetX']??-0x4,Sprite_EvoMatrixButton[_0x3282e4(0x171)]=VisuMZ['EvoMatrixSkills'][_0x3282e4(0x241)]['UI']['KeypressUiOffsetY']??+0x4,Sprite_EvoMatrixButton[_0x3282e4(0x136)]=VisuMZ[_0x3282e4(0x1a2)]['Settings']['UI'][_0x3282e4(0x21f)]||0x1,Sprite_EvoMatrixButton[_0x3282e4(0x1ae)]=VisuMZ[_0x3282e4(0x1a2)]['Settings']['UI']['MoveInEasing']||'Linear',Sprite_EvoMatrixButton[_0x3282e4(0x180)]=VisuMZ[_0x3282e4(0x1a2)][_0x3282e4(0x241)]['UI'][_0x3282e4(0x1cd)]||_0x3282e4(0x14d),Sprite_EvoMatrixButton[_0x3282e4(0x1c0)][_0x3282e4(0x176)]=function(_0x4262b9){const _0x21040f=_0x3282e4;this['_key']=_0x4262b9,Sprite_Clickable['prototype'][_0x21040f(0x176)]['call'](this),this['initMembers'](),this[_0x21040f(0x1f4)](),this[_0x21040f(0x214)](),this[_0x21040f(0x13b)](),this[_0x21040f(0x195)]();},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)][_0x3282e4(0x183)]=function(){const _0x16ef50=_0x3282e4,_0x1abe11=VisuMZ[_0x16ef50(0x1a2)][_0x16ef50(0x241)]['UI'],_0x40b2f3=_0x16ef50(0x222)['format'](this[_0x16ef50(0x135)]);_0x1abe11[_0x40b2f3]?this[_0x16ef50(0x250)]=_0x1abe11[_0x40b2f3]():this['_dimensions']=new Rectangle(0x0,0x0,0x0,0x0),this[_0x16ef50(0x204)]=_0x1abe11['okRectJS'](),this['x']=this[_0x16ef50(0x250)]['x']+(_0x1abe11[_0x16ef50(0x15e)]||0x0),this['y']=this['_dimensions']['y']+(_0x1abe11[_0x16ef50(0x25e)]||0x0),this['anchor']['x']=0.5,this[_0x16ef50(0x227)]['y']=0.5,this['scale']['x']=_0x1abe11[_0x16ef50(0xfd)],this['scale']['y']=_0x1abe11['Scale'],this['opacity']=0x0,this[_0x16ef50(0x159)]=(this[_0x16ef50(0x250)]['x']-this[_0x16ef50(0x204)]['x'])*0x2+this[_0x16ef50(0x204)]['x'],this[_0x16ef50(0x155)]=(this[_0x16ef50(0x250)]['y']-this[_0x16ef50(0x204)]['y'])*0x2+this['_centerDimensions']['y'],this[_0x16ef50(0x159)]+=_0x1abe11[_0x16ef50(0x15e)]||0x0,this[_0x16ef50(0x155)]+=_0x1abe11['KeybindUiOffsetY']||0x0,this[_0x16ef50(0x141)]=0x0,this[_0x16ef50(0x249)]=0x0,this[_0x16ef50(0x226)]=this['x'],this[_0x16ef50(0x11f)]=this['y'],this['_moveEasingType']=_0x16ef50(0x14d),this['_moveOpacity']=0xff,this[_0x16ef50(0x129)]=0xff,this[_0x16ef50(0x11b)]='',this[_0x16ef50(0x11c)]=null,this[_0x16ef50(0x16c)]=null,this['_lastInputType']=null;},Sprite_EvoMatrixButton['prototype'][_0x3282e4(0x1f4)]=function(){const _0x25503a=_0x3282e4,_0x51322b=![],_0x174a0c=_0x51322b?_0x25503a(0x1f3):ColorManager['dimColor2']();this[_0x25503a(0xfe)]=new Bitmap(this[_0x25503a(0x250)][_0x25503a(0x20d)],this[_0x25503a(0x250)][_0x25503a(0x1c3)]),this['bitmap'][_0x25503a(0x1eb)](0x0,0x0,this[_0x25503a(0xfe)][_0x25503a(0x20d)],this[_0x25503a(0xfe)][_0x25503a(0x1c3)],_0x174a0c);},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)][_0x3282e4(0x214)]=function(){const _0x3e9746=_0x3282e4,_0x5a1431=VisuMZ[_0x3e9746(0x1a2)]['Settings']['UI'],_0x820669=_0x5a1431[_0x3e9746(0x102)['format'](this['_key'])];if(!_0x820669)return;const _0x2be04b=new Sprite();this[_0x3e9746(0x177)](_0x2be04b),_0x2be04b[_0x3e9746(0xfe)]=ImageManager['loadSystem'](_0x820669),_0x2be04b[_0x3e9746(0x227)]['x']=0.5,_0x2be04b[_0x3e9746(0x227)]['y']=0.5,_0x2be04b[_0x3e9746(0x1b5)]['x']=0x1/(this[_0x3e9746(0x1b5)]['x']||0.01),_0x2be04b[_0x3e9746(0x1b5)]['y']=0x1/(this[_0x3e9746(0x1b5)]['y']||0.01);},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)][_0x3282e4(0x13b)]=function(){const _0x23b610=_0x3282e4;this['_contentSprite']=new Sprite(),this['addChild'](this['_contentSprite']),this[_0x23b610(0x124)][_0x23b610(0x227)]['x']=0.5,this[_0x23b610(0x124)][_0x23b610(0x227)]['y']=0.5;},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)][_0x3282e4(0x195)]=function(){const _0x201ce4=_0x3282e4,_0x1e6eb1=$gameSystem['windowPadding'](),_0x246fbf=this[_0x201ce4(0x250)][_0x201ce4(0x20d)]+_0x1e6eb1*0x2,_0x17bce3=this[_0x201ce4(0x250)][_0x201ce4(0x1c3)]+_0x1e6eb1*0x2,_0x3f84ca=new Rectangle(0x0,0x0,_0x246fbf,_0x17bce3);this['_contentWindow']=new Window_Base(_0x3f84ca);},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)]['update']=function(){const _0x4a27a5=_0x3282e4;Sprite_Clickable['prototype']['update'][_0x4a27a5(0x252)](this),this['updateOpacity'](),this[_0x4a27a5(0x17f)](),this[_0x4a27a5(0x1b2)]();if(this[_0x4a27a5(0x1a6)]())this['updateBitmap']();},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)]['updateOpacity']=function(){const _0xf983a4=_0x3282e4;this['opacity']=Math['min'](this[_0xf983a4(0x1f2)],this['opacityLevel']());},Sprite_EvoMatrixButton['prototype']['opacityLevel']=function(){const _0x560c7e=_0x3282e4;if(this['_movementDuration']>0x0&&this[_0x560c7e(0x11b)]!=='')return this[_0x560c7e(0x246)];if(this[_0x560c7e(0x135)]==='ok')return 0xff;if(!$gameTemp['hasEvoMatrixSkillsKey'](this[_0x560c7e(0x135)]))return 0x0;const _0x2206f4=VisuMZ[_0x560c7e(0x1a2)][_0x560c7e(0x241)]['UI'][_0x560c7e(0x1d4)],_0x1d9343=$gameTemp['getEvoMatrixSkillsKey'](this['_key']);if(_0x1d9343===null)return _0x2206f4;const _0x6d9041=BattleManager[_0x560c7e(0x1da)];if(!_0x6d9041)return _0x2206f4;const _0x3cd8be=$dataSkills[_0x1d9343];if(!_0x6d9041[_0x560c7e(0x140)](_0x3cd8be))return _0x2206f4;return 0xff;},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)][_0x3282e4(0x17f)]=function(){const _0x506dfc=_0x3282e4;if(this[_0x506dfc(0x141)]>0x0)return;const _0x1caac4=VisuMZ[_0x506dfc(0x1a2)][_0x506dfc(0x241)]['UI'];this['x']=this[_0x506dfc(0x250)]['x']+(_0x1caac4[_0x506dfc(0x15e)]||0x0),this['y']=this[_0x506dfc(0x250)]['y']+(_0x1caac4[_0x506dfc(0x25e)]||0x0);if(this['_pressed']){if(_0x506dfc(0x1f0)!==_0x506dfc(0x1f0)){_0x23402a[_0x506dfc(0x1fe)]();const _0x496b7d=_0x5ccd2c[_0x506dfc(0x1e1)](this['_subject'],this['_subject'][_0x506dfc(0x24f)]()[_0x506dfc(0x218)]());_0x496b7d&&this[_0x506dfc(0x1da)][_0x506dfc(0x24f)]()[_0x506dfc(0x188)](),_0x1f27f0['EvoMatrixSkills'][_0x506dfc(0x160)][_0x506dfc(0x252)](this),_0x496b7d&&this['_subject'][_0x506dfc(0x24f)]()[_0x506dfc(0x256)]();}else this[_0x506dfc(0x233)]=0x4;}this[_0x506dfc(0x233)]-->0x0&&(this['x']+=Sprite_EvoMatrixButton['KEY_PRESS_OFFSET_X'],this['y']+=Sprite_EvoMatrixButton['KEY_PRESS_OFFSET_Y']);},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)]['updateMovement']=function(){const _0x3431b0=_0x3282e4;if(this['_movementDuration']<=0x0)return;const _0x36072d=this[_0x3431b0(0x141)],_0x460aa5=this[_0x3431b0(0x249)],_0x3cb84e=this['_moveEasingType'];this['x']=this[_0x3431b0(0x174)](this['x'],this['_moveTargetX'],_0x36072d,_0x460aa5,_0x3cb84e),this['y']=this['applyEasing'](this['y'],this['_moveTargetY'],_0x36072d,_0x460aa5,_0x3cb84e),this['_moveOpacity']=this[_0x3431b0(0x174)](this[_0x3431b0(0x1f2)],this['_moveOpacityTarget'],_0x36072d,_0x460aa5,_0x3cb84e),this[_0x3431b0(0x141)]--;if(this['_movementDuration']<=0x0){this['x']=this[_0x3431b0(0x226)],this['y']=this[_0x3431b0(0x11f)];if(this[_0x3431b0(0x11b)]!==''&&this[this[_0x3431b0(0x11b)]]){if(_0x3431b0(0x240)!==_0x3431b0(0x240))return![];else this[this['_moveFinishFunc']]();}}},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)][_0x3282e4(0x174)]=function(_0x128ba4,_0x5273b6,_0x396477,_0x18039d,_0x331b0a){const _0x5b3ce1=_0x3282e4,_0x5d4447=VisuMZ[_0x5b3ce1(0x1d6)]((_0x18039d-_0x396477)/_0x18039d,_0x331b0a||_0x5b3ce1(0x14d)),_0x47f650=VisuMZ[_0x5b3ce1(0x1d6)]((_0x18039d-_0x396477+0x1)/_0x18039d,_0x331b0a||'Linear'),_0x5aa575=(_0x128ba4-_0x5273b6*_0x5d4447)/(0x1-_0x5d4447);return _0x5aa575+(_0x5273b6-_0x5aa575)*_0x47f650;},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)][_0x3282e4(0x1a7)]=function(_0x33060b,_0x568d6c,_0x303553,_0x33f1bd,_0x10cd17){const _0x1031db=_0x3282e4;this['_movementDuration']=Sprite_EvoMatrixButton[_0x1031db(0x136)],this[_0x1031db(0x249)]=Sprite_EvoMatrixButton[_0x1031db(0x136)],this['_pressedDuration']=0x0,this[_0x1031db(0x226)]=_0x33060b,this[_0x1031db(0x11f)]=_0x568d6c,this[_0x1031db(0x129)]=_0x303553,this[_0x1031db(0x134)]=_0x33f1bd||_0x1031db(0x14d),this[_0x1031db(0x11b)]=_0x10cd17||'';},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)][_0x3282e4(0x1af)]=function(){const _0x227cb8=_0x3282e4,_0x39baf3=VisuMZ[_0x227cb8(0x1a2)][_0x227cb8(0x241)]['UI'];this['x']=this[_0x227cb8(0x204)]['x']+(_0x39baf3[_0x227cb8(0x15e)]||0x0),this['y']=this[_0x227cb8(0x204)]['y']+(_0x39baf3[_0x227cb8(0x25e)]||0x0),this[_0x227cb8(0x1f2)]=0x0,this[_0x227cb8(0x246)]=0x0;const _0x5a5784=this['_dimensions']['x']+(_0x39baf3[_0x227cb8(0x15e)]||0x0),_0x560b8e=this[_0x227cb8(0x250)]['y']+(_0x39baf3['KeybindUiOffsetY']||0x0),_0x5624ff=0xff,_0x51e676=_0x39baf3[_0x227cb8(0x1cd)]||_0x227cb8(0x14d);this[_0x227cb8(0x1a7)](_0x5a5784,_0x560b8e,_0x5624ff,_0x51e676);},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)]['moveToCenter']=function(){const _0x4b125c=_0x3282e4,_0xf7376f=VisuMZ[_0x4b125c(0x1a2)][_0x4b125c(0x241)]['UI'],_0x177b0c=this[_0x4b125c(0x204)]['x']+(_0xf7376f[_0x4b125c(0x15e)]||0x0),_0xbba87=this[_0x4b125c(0x204)]['y']+(_0xf7376f[_0x4b125c(0x25e)]||0x0),_0x4b5516=0xff,_0x5887b0=_0xf7376f['MoveInEasing']||_0x4b125c(0x14d),_0x4ab947=_0x4b125c(0x1af);this[_0x4b125c(0x1a7)](_0x177b0c,_0xbba87,_0x4b5516,_0x5887b0,_0x4ab947);},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)][_0x3282e4(0x1c1)]=function(){const _0x48d1d8=_0x3282e4,_0x2b96b1=VisuMZ[_0x48d1d8(0x1a2)][_0x48d1d8(0x241)]['UI'],_0x448339=this[_0x48d1d8(0x159)],_0x3d00ed=this['_outerY'],_0x2e8d55=0x0,_0x17b668=_0x2b96b1[_0x48d1d8(0x1a3)]||_0x48d1d8(0x14d),_0x19b2b5=this[_0x48d1d8(0x135)]==='ok'?'moveFromCenterOpaque':_0x48d1d8(0x1af);this[_0x48d1d8(0x1a7)](_0x448339,_0x3d00ed,_0x2e8d55,_0x17b668,_0x19b2b5);},Sprite_EvoMatrixButton['prototype']['moveFromCenterOpaque']=function(){const _0x1d954d=_0x3282e4;this[_0x1d954d(0x1af)](),this['_moveOpacity']=0xff,this['opacity']=0xff;},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)]['moveToOuterFin']=function(){const _0x19c009=_0x3282e4;this[_0x19c009(0x1c1)](),this['_moveFinishFunc']='';},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)][_0x3282e4(0xfb)]=function(){const _0x4d9de6=_0x3282e4;this['_lastActor']=BattleManager[_0x4d9de6(0x1da)],this[_0x4d9de6(0x16c)]=$gameTemp['getEvoMatrixSkillsKey'](this[_0x4d9de6(0x135)]);if(Imported[_0x4d9de6(0x20c)]&&Input[_0x4d9de6(0x1e6)]){if(_0x4d9de6(0x1b0)===_0x4d9de6(0x1b0))this['_lastInputType']=Input['getLastUsedGamepadType']();else{const _0x52d87f=this[_0x4d9de6(0x21b)](_0x1bc656);this[_0x4d9de6(0x1c7)](_0x570198,_0x52d87f+0x1);}}this['refreshBitmap']();},Sprite_EvoMatrixButton['prototype'][_0x3282e4(0x1a6)]=function(){const _0x1e8599=_0x3282e4;if(this[_0x1e8599(0x141)]>0x0&&this[_0x1e8599(0x11b)]!==''){if('Wbufy'==='Xgsxc')this[_0x1e8599(0x17c)]=![],this[_0x1e8599(0x251)]=![];else return![];}if(this[_0x1e8599(0x11c)]!==BattleManager[_0x1e8599(0x1da)])return!![];if(this[_0x1e8599(0x16c)]!==$gameTemp['getEvoMatrixSkillsKey'](this[_0x1e8599(0x135)]))return!![];if(Imported[_0x1e8599(0x20c)]&&Input['getLastUsedGamepadType']){if(_0x1e8599(0x11a)==='vgmKI')this['_requestRefresh']=!![];else{if(this[_0x1e8599(0x142)]!==Input['getLastUsedGamepadType']())return!![];}}return![];},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)][_0x3282e4(0x20f)]=function(){const _0xba3fa9=_0x3282e4,_0x1779b9=VisuMZ[_0xba3fa9(0x1a2)]['Settings']['UI'],_0x484e71=this[_0xba3fa9(0x1f9)][_0xba3fa9(0xfc)],_0x29ea5e=$dataSkills[this[_0xba3fa9(0x16c)]];if(!_0x29ea5e)return;if(!BattleManager['_subject'])return;_0x484e71[_0xba3fa9(0x1df)](),this[_0xba3fa9(0x1f9)][_0xba3fa9(0x1b9)]();const _0x3a103e=this[_0xba3fa9(0x120)](),_0x53e048=BattleManager[_0xba3fa9(0x1da)],_0x1b4d01=this['_key']==='ok'?Sprite_EvoMatrixButton['USE_SKILL_TEXT']:this[_0xba3fa9(0x1f9)]['createAllSkillCostText'](_0x53e048,_0x29ea5e);_0x1779b9[_0xba3fa9(0x101)][_0xba3fa9(0x252)](this['_contentWindow'],_0x29ea5e,_0x3a103e,_0x1b4d01),this[_0xba3fa9(0x124)][_0xba3fa9(0xfe)]=_0x484e71;},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)][_0x3282e4(0x120)]=function(){const _0x2fb670=_0x3282e4,_0x4277a2=VisuMZ['EvoMatrixSkills'][_0x2fb670(0x241)]['UI'],_0x5ac83f='%1KeyIcon'[_0x2fb670(0x20e)](this[_0x2fb670(0x135)]);if(_0x4277a2[_0x5ac83f])return _0x4277a2[_0x5ac83f];if(Imported[_0x2fb670(0x20c)]){const _0xf591d3=TextManager[_0x2fb670(0x1a0)](this[_0x2fb670(0x135)]);if(_0xf591d3&&_0xf591d3[_0x2fb670(0x170)](/\\I\[(\d+)\]/i))return Number(RegExp['$1']);}return 0x0;},Sprite_EvoMatrixButton['prototype'][_0x3282e4(0x23e)]=function(){const _0x36a3ef=_0x3282e4;Sprite_Clickable[_0x36a3ef(0x1c0)][_0x36a3ef(0x23e)]['call'](this);if(BattleManager['_subject']&&BattleManager[_0x36a3ef(0x1da)][_0x36a3ef(0x17e)]())return;const _0x4b0068=$dataSkills[$gameTemp[_0x36a3ef(0x146)](this[_0x36a3ef(0x135)])];if(BattleManager['_subject']&&_0x4b0068){const _0xab74da=SceneManager[_0x36a3ef(0x11e)];_0xab74da&&_0xab74da[_0x36a3ef(0x187)]&&(_0x36a3ef(0x198)!==_0x36a3ef(0x1e9)?_0xab74da[_0x36a3ef(0x187)](this[_0x36a3ef(0x135)],_0x4b0068):_0x187fba===_0xbc7298?this['_evoMatrixSkillButtons'][_0x1e8a24][_0x36a3ef(0x138)]():this[_0x36a3ef(0x1d2)][_0x3c7e97][_0x36a3ef(0x1c1)]());}const _0x59dda1=this[_0x36a3ef(0x1e0)]();_0x59dda1&&_0x59dda1[_0x36a3ef(0x151)](null);},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)]['isClickEnabled']=function(){const _0x13bd66=_0x3282e4;if(this[_0x13bd66(0x246)]<=0x0)return![];if(this[_0x13bd66(0x141)]>0x0)return![];const _0x461ec3=SceneManager[_0x13bd66(0x11e)];if(!_0x461ec3)return![];if(!_0x461ec3[_0x13bd66(0x1d5)])return![];if(!_0x461ec3['canPerformEvoMatrixSkills']())return![];if(this[_0x13bd66(0x135)]==='ok')return!![];if(!$gameTemp[_0x13bd66(0x16d)](this['_key']))return![];const _0x32c997=$dataSkills[$gameTemp[_0x13bd66(0x146)](this[_0x13bd66(0x135)])];if(!_0x32c997)return![];if(!BattleManager[_0x13bd66(0x1da)][_0x13bd66(0x140)](_0x32c997))return![];return Sprite_Clickable['prototype'][_0x13bd66(0x24b)][_0x13bd66(0x252)](this);},Sprite_EvoMatrixButton['prototype'][_0x3282e4(0x1e0)]=function(){const _0xb52da1=_0x3282e4;return SceneManager[_0xb52da1(0x11e)]['_evoMatrixSkillsUiTooltipWindow'];},Sprite_EvoMatrixButton['prototype'][_0x3282e4(0x10c)]=function(){const _0x1477ca=_0x3282e4;Sprite_Clickable[_0x1477ca(0x1c0)][_0x1477ca(0x10c)][_0x1477ca(0x252)](this);const _0x225e26=this[_0x1477ca(0x1e0)]();if(!_0x225e26)return;const _0x384e80=SceneManager[_0x1477ca(0x11e)],_0x43c510=_0x384e80&&_0x384e80[_0x1477ca(0x1d5)]?_0x384e80[_0x1477ca(0x1d5)]():![];if(_0x225e26&&_0x43c510){const _0x258eb7=$dataSkills[this['_lastSkillID']];_0x225e26[_0x1477ca(0x151)](_0x258eb7);}},Sprite_EvoMatrixButton['prototype'][_0x3282e4(0x203)]=function(){const _0x5aba00=_0x3282e4;Sprite_Clickable['prototype'][_0x5aba00(0x203)]['call'](this);const _0x24626a=this[_0x5aba00(0x1e0)]();if(!_0x24626a)return;const _0x61787b=$dataSkills[this['_lastSkillID']],_0x1c6268=SceneManager[_0x5aba00(0x11e)],_0x420080=_0x1c6268&&_0x1c6268[_0x5aba00(0x1d5)]?_0x1c6268[_0x5aba00(0x1d5)]():![];(!_0x420080||_0x24626a&&_0x24626a[_0x5aba00(0x143)]===_0x61787b)&&_0x24626a['setSkill'](null);},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)][_0x3282e4(0x14a)]=function(){const _0x1248c1=_0x3282e4,_0x4a2f1f=this[_0x1248c1(0x248)];this[_0x1248c1(0x248)]=this['isBeingTouched']();if(this[_0x1248c1(0x248)]!==_0x4a2f1f){if(_0x1248c1(0x25b)===_0x1248c1(0x153))this[_0x1248c1(0xff)](),this[_0x1248c1(0x190)](),this[_0x1248c1(0x192)](),this[_0x1248c1(0x1fc)]();else{if(this[_0x1248c1(0x248)])this['onMouseEnter']();else{if(_0x1248c1(0x224)===_0x1248c1(0x230)){const _0x201e4b=_0xe0fff6['EvoMatrixSkills']['Settings']['UI'],_0xc27f2b=this[_0x1248c1(0x1f9)][_0x1248c1(0xfc)],_0x4e54f6=_0x55fbc7[this[_0x1248c1(0x16c)]];if(!_0x4e54f6)return;if(!_0x5ad8e3[_0x1248c1(0x1da)])return;_0xc27f2b[_0x1248c1(0x1df)](),this[_0x1248c1(0x1f9)][_0x1248c1(0x1b9)]();const _0x214f95=this[_0x1248c1(0x120)](),_0x4496ca=_0xfe7598['_subject'],_0x1f95fa=this[_0x1248c1(0x135)]==='ok'?_0x36fc8d[_0x1248c1(0x199)]:this[_0x1248c1(0x1f9)][_0x1248c1(0x164)](_0x4496ca,_0x4e54f6);_0x201e4b[_0x1248c1(0x101)]['call'](this['_contentWindow'],_0x4e54f6,_0x214f95,_0x1f95fa),this['_contentSprite'][_0x1248c1(0xfe)]=_0xc27f2b;}else this[_0x1248c1(0x203)]();}}}if(this[_0x1248c1(0x24b)]()){if(_0x1248c1(0x1f1)!==_0x1248c1(0x1f1))this['initialize'](...arguments);else{this[_0x1248c1(0x1c4)]()?TouchInput[_0x1248c1(0x116)]()&&(_0x1248c1(0x18c)!==_0x1248c1(0x12f)?(this[_0x1248c1(0x17c)]=!![],this[_0x1248c1(0x210)]()):(this[_0x1248c1(0x12d)]={},this[_0x1248c1(0x14b)](_0xef485c,_0x1248c1(0x1bc)),this[_0x1248c1(0x14b)](_0x55e06f,_0x1248c1(0x113)),this['registerEvoMatrixSkillsType'](_0xbd52f,_0x1248c1(0x22d)),this[_0x1248c1(0x12d)]['ok']=_0x2597db['id'])):(this[_0x1248c1(0x17c)]=![],this[_0x1248c1(0x251)]=![]);if(this[_0x1248c1(0x17c)]&&TouchInput[_0x1248c1(0x103)]()){if('cPAyK'!=='cPAyK'){const _0x4696bb=_0x1741cb[_0x1248c1(0x1a2)][_0x1248c1(0x241)]['UI'],_0x52aa6a=this[_0x1248c1(0x204)]['x']+(_0x4696bb['KeybindUiOffsetX']||0x0),_0x2bf265=this[_0x1248c1(0x204)]['y']+(_0x4696bb[_0x1248c1(0x25e)]||0x0),_0x33dfbe=0xff,_0x20258c=_0x4696bb[_0x1248c1(0x1a3)]||_0x1248c1(0x14d),_0x2979e3=_0x1248c1(0x1af);this['startMove'](_0x52aa6a,_0x2bf265,_0x33dfbe,_0x20258c,_0x2979e3);}else this[_0x1248c1(0x17c)]=![],this[_0x1248c1(0x23e)]();}}}else this[_0x1248c1(0x17c)]=![],this['_hovered']=![];},Sprite_EvoMatrixButton[_0x3282e4(0x1c0)][_0x3282e4(0x1c4)]=function(){const _0x5aba7c=_0x3282e4,_0x5aa692=new Point(TouchInput['x'],TouchInput['y']),_0xb22f6a=this[_0x5aba7c(0x17a)][_0x5aba7c(0x178)](_0x5aa692);return this[_0x5aba7c(0x223)](_0xb22f6a['x'],_0xb22f6a['y']);},Window_Base['prototype'][_0x3282e4(0x1ad)]=function(_0x565863,_0x5a57aa,_0x2f4aca,_0x45cebe){const _0x431590=_0x3282e4,_0x3d6dbc=VisuMZ['EvoMatrixSkills']['Settings']['UI'];_0x45cebe=_0x45cebe||0x20,_0x5a57aa-=Math[_0x431590(0x16e)](_0x45cebe/0x2);const _0x11e958=ImageManager[_0x431590(0x1e8)](_0x431590(0x15d)),_0x84d4b2=ImageManager[_0x431590(0x15a)],_0xf83dab=ImageManager[_0x431590(0x1c6)],_0xc23b9d=_0x565863%0x10*_0x84d4b2,_0x113882=Math['floor'](_0x565863/0x10)*_0xf83dab;this[_0x431590(0xfc)][_0x431590(0x19c)]['imageSmoothingEnabled']=_0x3d6dbc[_0x431590(0x166)],this[_0x431590(0xfc)][_0x431590(0x1ff)](_0x11e958,_0xc23b9d,_0x113882,_0x84d4b2,_0xf83dab,_0x5a57aa,_0x2f4aca,_0x45cebe,_0x45cebe),this[_0x431590(0xfc)][_0x431590(0x19c)][_0x431590(0x1b3)]=!![];},Window_BattleLog[_0x3282e4(0x128)]=VisuMZ['EvoMatrixSkills'][_0x3282e4(0x241)]['UI'][_0x3282e4(0x147)]||'',Window_BattleLog['EVO_MATRIX_ANIMATION']=VisuMZ[_0x3282e4(0x1a2)]['Settings']['UI'][_0x3282e4(0x221)]||0x3a,VisuMZ[_0x3282e4(0x1a2)][_0x3282e4(0x1fb)]=Window_BattleLog[_0x3282e4(0x1c0)][_0x3282e4(0x25d)],Window_BattleLog[_0x3282e4(0x1c0)][_0x3282e4(0x25d)]=function(){const _0x51da54=_0x3282e4;if(this[_0x51da54(0x1bf)])return!![];return VisuMZ['EvoMatrixSkills'][_0x51da54(0x1fb)][_0x51da54(0x252)](this);},VisuMZ['EvoMatrixSkills'][_0x3282e4(0x13d)]=Window_BattleLog[_0x3282e4(0x1c0)][_0x3282e4(0x22b)],Window_BattleLog[_0x3282e4(0x1c0)][_0x3282e4(0x22b)]=function(_0x580d93,_0x4bc8f2,_0x590bcd){const _0x7d31ab=_0x3282e4;this['canStartEvoSkillMatrixSkill'](_0x580d93,_0x4bc8f2)?this[_0x7d31ab(0x23d)](_0x580d93,_0x4bc8f2):VisuMZ[_0x7d31ab(0x1a2)][_0x7d31ab(0x13d)][_0x7d31ab(0x252)](this,_0x580d93,_0x4bc8f2,_0x590bcd);},Window_BattleLog[_0x3282e4(0x1c0)][_0x3282e4(0x1de)]=function(_0x31f314,_0x49c900){const _0x222f5b=_0x3282e4;if(!_0x31f314)return![];if(!_0x31f314[_0x222f5b(0x216)]())return![];if(Imported['VisuMZ_2_BattleSystemBTB']&&BattleManager[_0x222f5b(0x20b)]())return![];return DataManager[_0x222f5b(0x1e1)](_0x31f314,_0x49c900[_0x222f5b(0x218)]());},Window_BattleLog[_0x3282e4(0x1c0)]['startEvoMatrixSkill']=function(_0x3db4c9,_0x21d436){const _0xb84f1c=_0x3282e4;this[_0xb84f1c(0x1bf)]=!![],$gameTemp[_0xb84f1c(0x121)](_0x3db4c9,_0x21d436[_0xb84f1c(0x218)]()),Window_BattleLog[_0xb84f1c(0x128)]['length']>0x0&&this[_0xb84f1c(0x24d)]('addText',Window_BattleLog['EVO_MATRIX_TEXT']),this[_0xb84f1c(0x24d)](_0xb84f1c(0x148),_0x3db4c9,_0x21d436),this[_0xb84f1c(0x24d)](_0xb84f1c(0x24a)),SceneManager[_0xb84f1c(0x11e)]['evoMatrixButtonsFromCenter']&&SceneManager[_0xb84f1c(0x11e)][_0xb84f1c(0x16b)]();},Window_BattleLog[_0x3282e4(0x1c0)][_0x3282e4(0x258)]=function(){const _0x52083f=_0x3282e4;this[_0x52083f(0x1bf)]=![],this[_0x52083f(0x1df)]();const _0x1825ab=BattleManager['_subject'],_0x2df956=BattleManager['_action'],_0x408844=BattleManager[_0x52083f(0x145)];VisuMZ[_0x52083f(0x1a2)][_0x52083f(0x13d)]['call'](this,_0x1825ab,_0x2df956,_0x408844),_0x2df956[_0x52083f(0x161)]();};function Window_EvoMatrixSkillsTooltip(){const _0x3f9df0=_0x3282e4;this[_0x3f9df0(0x176)](...arguments);}function _0x12ef(){const _0x454929=['quadraticCurveTo','worldTransform','getEvoMatrixSkills','_pressed','playEvoMatrixSkillsSound','isAutoBattle','updatePosition','MOVE_OUT_EASING','loadWindowskin','577907TbincQ','initMembers','2102649BzuWKv','Scene_Battle_update','updateEvoMatrixSkill','processEvoMatrixSkillsKey','removeApplyGlobalEvoMatrix','createEvoMatrixSkillsUiElements','VisuMZ_1_SkillsStatesCore','_evoMatrixSkillsUiMoveDuration','XReip','WCDhh','ARRAYNUM','klNet','createEvoMatrixSkillsUiBackground','STR','createEvoMatrixSkillsUiButtons','WindowSkin','_requestRefresh','createContentWindow','canConcoctItems','kpDFG','BhQBc','USE_SKILL_TEXT','Xftwk','yFRAl','_context','isLearnedSkill','JSON','toUpperCase','getInputButtonString','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','EvoMatrixSkills','MoveInEasing','mVzlf','VTpVH','meetsUpdateBitmapConditions','startMove','fill','itemPadding','shift','addCooldown','allowUpdateBattleAniSpeed','drawEvoMatrixLargeIcon','MOVE_IN_EASING','moveFromCenter','xcOaT','noVQQ','updateMovement','imageSmoothingEnabled','meetsSkillConditions','scale','5youyXT','hasEvoMatrixSkillsConflicts','yohFF','resetFontSettings','hasSkill','OpacityRate','AvailableMatrix','_evoMatrixSkillsUiTooltipWindow','StartAni','_evoMatrixSkillMode','prototype','moveToOuter','note','height','isBeingTouched','createContents','iconHeight','setValue','Tooltip','name','clone','Scene_Battle_createDisplayObjects','parse','MoveOutEasing','windowskin','XVIOS','VisuMZ_1_BattleCore','EylUJ','_evoMatrixSkillButtons','sJXsO','OpacityDisable','canPerformEvoMatrixSkills','ApplyEasing','BkmJi','adjustEvoMatrixSkillCooldown','randomInt','_subject','MJrsb','ARRAYSTRUCT','pQpGE','canStartEvoSkillMatrixSkill','clear','tooltipWindow','hasEvoMatrixSkillPath','XttDQ','2kxpJMV','right','ARRAYEVAL','getLastUsedGamepadType','Dffpy','loadSystem','XBeQl','_evoMatrixSkillUser','fillRect','exit','weNHm','Scene_Battle_allowUpdateBattleAniSpeed','iEQLZ','jANOo','lbvpV','_moveOpacity','red','debugFillRect','VisuMZ_1_MessageCore','moveToOuterFin','hide','WINDOW_SKIN_FILENAME','_contentWindow','_text','Window_BattleLog_isBusy','createEvoMatrixSkillsUiTooltipWindow','trim','clearEvoMatrixTimes','blt','registerEvoMatrixSkillBase','22165785HdtXzg','cooldown','onMouseExit','_centerDimensions','ENABLED','_evoMatrixSkillsUiContainer','ZsHVZ','max','MOUSE_OFFSET_Y','clamp','isBTB','VisuMZ_0_CoreEngine','width','format','refreshBitmap','onPress','BackgroundImage','registerEvoMatrixSkillsAll','_hasEvoMatrixSkillsConflict','createBackgroundSprite','updateOpacity','isActor','setupDescriptionText','item','useItem','visible','value','clearEvoMatrixSkills','WINDOW_SCALE','evoMatrixButtonsFinish','MoveDuration','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','EvoMatrixAnimation','%1RectJS','hitTest','TsudA','lineTo','_moveTargetX','anchor','isSkill','moveTo','setupText','startAction','padding','LearnedMatrix','filter','okCostText','SuCDk','createDisplayObjects','description','_pressedDuration','updateEvoMatrixSkills','VLoJN','VisuMZ_3_ItemThrowSkills','version','WINDOW_SKIN_OPACITY','ActiveChainSkills','save','ConvertParams','fxcyC','startEvoMatrixSkill','onClick','BlCFU','Jtxtj','Settings','2608568zVuXYH','evoMatrixButtonsBranch','create','isSceneBattle','opacity','_action','_hoverState','_movementWholeDuration','waitForMovement','isClickEnabled','VisuMZ_3_SkillCooldowns','push','BattleManager_endAction','currentAction','_dimensions','_hovered','call','pageup','restore','left','restoreApplyGlobalEvoMatrix','parameters','endEvoMatrixSkillMode','Game_Temp_initialize','baseTextRect','gYWdW','canThrowItems','isBusy','KeybindUiOffsetY','textSizeEx','context','convertMessageKeywords','updateBitmap','contents','Scale','bitmap','createEvoMatrixSkillsUiContainer','RegExp','contentDrawJS','%1BackgroundImage','isReleased','IvpDy','enabled','2394048SlYfRV','test','beginPath','Keys','EVO_MATRIX_ANIMATION','BEWTz','onMouseEnter','getEvoMatrixStartAnimation','getEvoMatrixAutoBattleKeys','FpgWv','_logWindow','Sound','updateEvoMatrixSkillAutoBattle','ForcedMatrix','KEY_PRESS_OFFSET_X','MOUSE_OFFSET_X','isTriggered','down','meetsEvoMatrixSkillConditions','OffsetX','qkKGD','_moveFinishFunc','_lastActor','3624950dnDbzs','_scene','_moveTargetY','getButtonIcon','prepareEvoMatrixSkills','4620732toNTTz','\x5cC[17]DONE\x5cC[0]','_contentSprite','getSkillIdWithName','VisuMZ_3_ItemConcoctSkills','update','EVO_MATRIX_TEXT','_moveOpacityTarget','jJevb','includes','registerEvoMatrixSkillsActor','_evoMatrixSkillKeys','FUNC','rrrfV','toLowerCase','length','isWordWrapEnabled','show','_moveEasingType','_key','MOVE_DURATION','map','moveToCenter','updateEvoMatrixSkillsUiOpacity','backgroundDrawJS','createContentSprite','getEvoMatrixSkillsUser','Window_BattleLog_startAction','clampPosition','remove','canUse','_movementDuration','_lastInputType','_skill','KhGFt','_targets','getEvoMatrixSkillsKey','EvoMatrixText','performActionStart','backOpacity','processTouch','registerEvoMatrixSkillsType','YXNNI','Linear','OffsetY','resizeWindow','playSe','setSkill','return\x200','bpgaS','Game_BattlerBase_meetsSkillConditions','_outerY','ARRAYFUNC','InputComboSkills','NNHJB','_outerX','iconWidth','constructor','endAction','IconSet','KeybindUiOffsetX','EVO_MATRIX_TIMES_VARIABLE','BattleManager_startAction','applyGlobal','vaLcz','FjTqA','createAllSkillCostText','cancel','LargeIconSmoothing','refresh','STRUCT','fillRoundRect','pagedown','evoMatrixButtonsFromCenter','_lastSkillID','hasEvoMatrixSkillsKey','round','updateEvoMatrixTimes','match','KEY_PRESS_OFFSET_Y','applyKeyAlternatives','updateBackOpacity','applyEasing','ARRAYJSON','initialize','addChild','applyInverse'];_0x12ef=function(){return _0x454929;};return _0x12ef();}function _0x42f7(_0x32e0eb,_0x4489d3){const _0x12ef02=_0x12ef();return _0x42f7=function(_0x42f7d0,_0x5aa37c){_0x42f7d0=_0x42f7d0-0xf8;let _0x2c5d81=_0x12ef02[_0x42f7d0];return _0x2c5d81;},_0x42f7(_0x32e0eb,_0x4489d3);}Window_EvoMatrixSkillsTooltip['prototype']=Object[_0x3282e4(0x244)](Window_Base['prototype']),Window_EvoMatrixSkillsTooltip[_0x3282e4(0x1c0)][_0x3282e4(0x15b)]=Window_EvoMatrixSkillsTooltip,Window_EvoMatrixSkillsTooltip[_0x3282e4(0x205)]=VisuMZ[_0x3282e4(0x1a2)]['Settings'][_0x3282e4(0x1c8)][_0x3282e4(0x105)]??!![],Window_EvoMatrixSkillsTooltip[_0x3282e4(0x21d)]=VisuMZ[_0x3282e4(0x1a2)][_0x3282e4(0x241)][_0x3282e4(0x1c8)][_0x3282e4(0xfd)],Window_EvoMatrixSkillsTooltip['WINDOW_SKIN_FILENAME']=VisuMZ[_0x3282e4(0x1a2)][_0x3282e4(0x241)]['Tooltip'][_0x3282e4(0x193)],Window_EvoMatrixSkillsTooltip[_0x3282e4(0x238)]=VisuMZ[_0x3282e4(0x1a2)][_0x3282e4(0x241)][_0x3282e4(0x1c8)]['WindowOpacity'],Window_EvoMatrixSkillsTooltip[_0x3282e4(0x115)]=VisuMZ[_0x3282e4(0x1a2)][_0x3282e4(0x241)]['Tooltip'][_0x3282e4(0x119)],Window_EvoMatrixSkillsTooltip['MOUSE_OFFSET_Y']=VisuMZ['EvoMatrixSkills'][_0x3282e4(0x241)][_0x3282e4(0x1c8)][_0x3282e4(0x14e)],Window_EvoMatrixSkillsTooltip['prototype'][_0x3282e4(0x176)]=function(){const _0x340cbe=_0x3282e4,_0x34d083=new Rectangle(0x0,0x0,Graphics['width'],Graphics[_0x340cbe(0x1c3)]);Window_Base[_0x340cbe(0x1c0)][_0x340cbe(0x176)][_0x340cbe(0x252)](this,_0x34d083),this[_0x340cbe(0x1b5)]['x']=this[_0x340cbe(0x1b5)]['y']=Window_EvoMatrixSkillsTooltip[_0x340cbe(0x21d)],this['hide'](),this[_0x340cbe(0x143)]=null;},Window_EvoMatrixSkillsTooltip[_0x3282e4(0x1c0)][_0x3282e4(0x181)]=function(){const _0x26f8ad=_0x3282e4;this[_0x26f8ad(0x1ce)]=ImageManager['loadSystem'](Window_EvoMatrixSkillsTooltip[_0x26f8ad(0x1f8)]);},Window_EvoMatrixSkillsTooltip['prototype'][_0x3282e4(0x173)]=function(){const _0xbc52be=_0x3282e4;this[_0xbc52be(0x149)]=Window_EvoMatrixSkillsTooltip[_0xbc52be(0x238)];},Window_EvoMatrixSkillsTooltip[_0x3282e4(0x1c0)][_0x3282e4(0x151)]=function(_0x9c5881){const _0x237c3e=_0x3282e4;if(this[_0x237c3e(0x143)]===_0x9c5881)return;this[_0x237c3e(0x143)]=_0x9c5881;if(this[_0x237c3e(0x143)]&&this[_0x237c3e(0x143)]['description'][_0x237c3e(0x1fd)]()[_0x237c3e(0x131)]>0x0){if('rIqhS'!==_0x237c3e(0x10f))this['refresh']();else{const _0x4bf35b=_0x5e8ff8[_0x237c3e(0x15f)];if(_0x4bf35b>0x0){const _0x1a14e2=this[_0x237c3e(0x21b)](_0x4bf35b);this[_0x237c3e(0x1c7)](_0x4bf35b,_0x1a14e2+0x1);}}}else this[_0x237c3e(0x1f7)]();},Window_EvoMatrixSkillsTooltip['prototype'][_0x3282e4(0x167)]=function(){const _0x4a0469=_0x3282e4;this[_0x4a0469(0xfc)][_0x4a0469(0x1df)](),this[_0x4a0469(0x22a)]();if(this[_0x4a0469(0x1fa)][_0x4a0469(0x131)]>0x0){this[_0x4a0469(0x14f)]();const _0x2fae91=this[_0x4a0469(0x25a)]();this['drawTextEx'](this[_0x4a0469(0x1fa)],_0x2fae91['x'],_0x2fae91['y'],_0x2fae91[_0x4a0469(0x20d)]),this[_0x4a0469(0x133)]();}else this[_0x4a0469(0x1f7)]();},Window_EvoMatrixSkillsTooltip[_0x3282e4(0x1c0)][_0x3282e4(0x132)]=function(){return![];},Window_EvoMatrixSkillsTooltip[_0x3282e4(0x1c0)][_0x3282e4(0xfa)]=function(_0x1bbd5d){return _0x1bbd5d;},Window_EvoMatrixSkillsTooltip[_0x3282e4(0x1c0)]['isSupportMessageKeywords']=function(){return![];},Window_EvoMatrixSkillsTooltip['prototype']['setupText']=function(){const _0x184584=_0x3282e4;this['_text']='';if(!this[_0x184584(0x143)])return;this[_0x184584(0x217)](),this[_0x184584(0x1fa)]=this[_0x184584(0x1fa)]['trim']();},Window_EvoMatrixSkillsTooltip[_0x3282e4(0x1c0)]['setupDescriptionText']=function(){const _0x1e0dae=_0x3282e4;this[_0x1e0dae(0x1fa)]=this[_0x1e0dae(0x143)][_0x1e0dae(0x232)]||'';},Window_EvoMatrixSkillsTooltip[_0x3282e4(0x1c0)]['resizeWindow']=function(){const _0x418c9a=_0x3282e4,_0x3098b7=this[_0x418c9a(0xf8)](this['_text']);this[_0x418c9a(0x20d)]=_0x3098b7['width']+(this[_0x418c9a(0x1a9)]()+this[_0x418c9a(0x22c)])*0x2,this[_0x418c9a(0x1c3)]=_0x3098b7[_0x418c9a(0x1c3)]+this[_0x418c9a(0x22c)]*0x2,this[_0x418c9a(0x1c5)](),this[_0x418c9a(0x1b9)]();},Window_EvoMatrixSkillsTooltip[_0x3282e4(0x1c0)][_0x3282e4(0x127)]=function(){const _0x10b95a=_0x3282e4;Window_Base[_0x10b95a(0x1c0)][_0x10b95a(0x127)][_0x10b95a(0x252)](this),this['_requestRefresh']&&(this[_0x10b95a(0x194)]=![],this[_0x10b95a(0x167)]()),this[_0x10b95a(0x17f)](),this[_0x10b95a(0x215)]();},Window_EvoMatrixSkillsTooltip[_0x3282e4(0x1c0)]['requestRefresh']=function(){this['_requestRefresh']=!![];},Window_EvoMatrixSkillsTooltip[_0x3282e4(0x1c0)]['updatePosition']=function(){const _0x481307=_0x3282e4;if(!this[_0x481307(0x21a)])return;this['x']=TouchInput['x']+Window_EvoMatrixSkillsTooltip[_0x481307(0x115)],this['y']=TouchInput['y']+Window_EvoMatrixSkillsTooltip[_0x481307(0x209)],this[_0x481307(0x13e)]();},Window_EvoMatrixSkillsTooltip['prototype'][_0x3282e4(0x13e)]=function(){const _0x53fb19=_0x3282e4,_0x4fc93a=this[_0x53fb19(0x20d)]*(Window_EvoMatrixSkillsTooltip[_0x53fb19(0x21d)]||0.01),_0x12cea0=this[_0x53fb19(0x1c3)]*(Window_EvoMatrixSkillsTooltip['WINDOW_SCALE']||0.01);this['x']=Math[_0x53fb19(0x16e)](this['x'][_0x53fb19(0x20a)](0x0,Graphics['width']-_0x4fc93a)),this['y']=Math[_0x53fb19(0x16e)](this['y'][_0x53fb19(0x20a)](0x0,Graphics[_0x53fb19(0x1c3)]-_0x12cea0));},Window_EvoMatrixSkillsTooltip[_0x3282e4(0x1c0)][_0x3282e4(0x215)]=function(){const _0x4ddc56=_0x3282e4;let _0x4b3f24=0xff;if(TouchInput['x']<=0x0)_0x4b3f24=0x0;if(TouchInput['x']>=Graphics['width'])_0x4b3f24=0x0;if(TouchInput['y']<=0x0)_0x4b3f24=0x0;if(TouchInput['y']>=Graphics[_0x4ddc56(0x1c3)])_0x4b3f24=0x0;this[_0x4ddc56(0x246)]=_0x4b3f24;};