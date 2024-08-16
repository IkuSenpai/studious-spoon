//=============================================================================
// VisuStella MZ - Victory Aftermath
// VisuMZ_3_VictoryAftermath.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_VictoryAftermath = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VictoryAftermath = VisuMZ.VictoryAftermath || {};
VisuMZ.VictoryAftermath.version = 1.21;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.21] [VictoryAftermath]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Victory_Aftermath_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Victory Aftermath plugin consolidates the rewards granted upon finishing
 * a battle successfully into one screen (or more if there are level ups).
 * This helps reduce the amount of button presses needed to display similar
 * information by default. The level up screens will also display parameter
 * changes and new skills acquired in addition to victory quotes.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Consolidates EXP, Gold, and Items acquired through battle rewards into one
 *   battle screen.
 * * EXP gauges for currently active battle party will be displayed on the same
 *   screen to indicate progress.
 * * Upon leveling up, individual screens can be shown (optionally) to display
 *   parameter changes, new skills acquired, and level up quotes.
 * * Plugin Commands can be used to clear/add new quotes at any time.
 * * Plugin Commands can be used by bypass certain parts of the Victory
 *   Aftermath segments or the entire thing completely.
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
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
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
 * - The EXP gauge colors will match the color settings found in the Core
 * Engine's Plugin Parameters instead of defaulting to specific colors.
 *
 * - The continue message will display any changed input keys designated by
 * the Core Engine's Plugin Parameters.
 *
 * ---
 *
 * VisuMZ_1_MainMenuCore
 *
 * - Upon leveling up, the Menu Image will show up (optional) as a bust during
 * the quote segment.
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
 * <Level Up Quotes>
 *  text
 *  text
 *  text
 *  text
 *  <New Quote>
 *  text
 *  text
 *  text
 *  text
 *  <New Quote>
 *  text
 *  text
 *  text
 *  text
 * </Level Up Quotes>
 *
 * - Used for: Actor Notetags
 * - Description
 * - Replace 'text' with the text you'd want the actor to say when leveling up.
 * - The <New Quote> tag is used between the <Level Up Quotes> notetags to
 *   separate quotes.
 * - If an actor has multiple quotes (due to the <New Quote> notetag), then a
 *   random quote will be selected upon level up.
 * - If this notetag is not found inside an actor's notebox, a random level up
 *   quote will be selected from the Plugin Parameters => Level Up => Quotes =>
 *   Level Up Quotes plugin parameter.
 *
 * ---
 *
 * <New Skill Quotes>
 *  text
 *  text
 *  text
 *  text
 *  <New Quote>
 *  text
 *  text
 *  text
 *  text
 *  <New Quote>
 *  text
 *  text
 *  text
 *  text
 * </New Skill Quotes>
 *
 * - Used for: Actor Notetags
 * - Description
 * - Replace 'text' with the text you'd want the actor to say when leveling up
 *   in addition to learning a new skill upon leveling up.
 * - The <New Quote> tag is used between the <New Skill Quotes> notetags to
 *   separate quotes.
 * - If an actor has multiple quotes (due to the <New Quote> notetag), then a
 *   random quote will be selected upon level up and learning a new skill.
 * - If this notetag is not found inside an actor's notebox, a random new skill
 *   quote will be selected from the Plugin Parameters => Level Up => Quotes =>
 *   New Skill Quotes plugin parameter.
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
 * Actor: Add Level Up Quotes
 * - Add new entries target actor's level up quotes.
 *
 *   Actor ID:
 *   - Select ID of target actor to add quotes for.
 *
 *   New Quotes:
 *   - Add new entries to actor's level up quotes.
 *   - Text codes allowed. %1 - Actor's Name
 *
 * ---
 *
 * Actor: Add New Skill Quotes
 * - Add new entries target actor's new skill quotes.
 *
 *   Actor ID:
 *   - Select ID of target actor to add quotes for.
 *
 *   New Quotes:
 *   - Add new entries to actor's new skill quotes.
 *   - Text codes allowed. %1 - Actor's Name
 *
 * ---
 *
 * Actor: Clear Level Up Quotes
 * - Clear target actor's level up quotes.
 *
 *   Actor ID:
 *   - Select ID of target actor to clear quotes for.
 *
 * ---
 *
 * Actor: Clear New Skill Quotes
 * - Clear target actor's new skill quotes.
 *
 *   Actor ID:
 *   - Select ID of target actor to clear quotes for.
 *
 * ---
 * 
 * === Post-Battle Plugin Commands ===
 * 
 * ---
 * 
 * Post-Battle: Set Post-Battle BGM
 * - This determines what BGM to play after battle.
 * - Use only in battle!
 * 
 *   Filename:
 *   - Filename of the BGM played.
 * 
 *   Volume:
 *   - Volume of the BGM played.
 * 
 *   Pitch:
 *   - Pitch of the BGM played.
 * 
 *   Pan:
 *   - Pan of the BGM played.
 * 
 * ---
 * 
 * Post-Battle: Set Post-Battle BGS
 * - This determines what BGS to play after battle.
 * - Use only in battle!
 * 
 *   Filename:
 *   - Filename of the BGS played.
 * 
 *   Volume:
 *   - Volume of the BGS played.
 * 
 *   Pitch:
 *   - Pitch of the BGS played.
 * 
 *   Pan:
 *   - Pan of the BGS played.
 * 
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Bypass Victory Motion
 * - Bypass actors performing their victory motion?
 *
 *   Bypass?:
 *   - Bypass actors performing their victory motion?
 *
 * ---
 *
 * System: Bypass Victory Music
 * - Bypass playing the victory music?
 *
 *   Bypass?:
 *   - Bypass playing the victory music?
 *
 * ---
 *
 * System: Bypass Victory Phase
 * - Bypass the entire victory phase and all aspects about it?
 *
 *   Bypass?:
 *   - Bypass the entire victory phase and all aspects about it?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * The general settings Plugin Parameters control the overall settings found
 * within the main aspects of the Victory Aftermath sequence.
 *
 * ---
 *
 * General Settings
 * 
 *   Fade In Speed:
 *   - Fade in speed for the victory window.
 * 
 *   Hide Delay (MS):
 *   - Delay in milliseconds before hiding the UI Windows.
 * 
 *   Show Delay (MS):
 *   - Delay in milliseconds before showing the Victory Windows.
 * 
 *   Update Duration:
 *   - Duration in frames on updating actor EXP gauges.
 * 
 *   Auto Skip Auto Battle?:
 *   - Skip the Victory Aftermath sequence if the player has decided to use
 *     the party Auto Battle command?
 * 
 *   Mirror Contents?:
 *   - Mirror the positions of EXP, Gold, and Items?
 * 
 *   Show EXP Gauges?:
 *   - Show the EXP Gauges of the main party members for the first screen of
 *     the Victory Aftermath?
 *   - This is added for those with large parties and cannot fit everything
 *     into one screen for all party members and would prefer not showing any
 *     EXP Gauges at all instead.
 * 
 *   Drops Sorted By:
 *   - How are drops sorted by in the Victory Aftermath?
 *     - ID
 *     - Name
 *
 * ---
 * 
 * Color Settings
 * 
 *   Background Color 1:
 *   Background Color 2:
 *   Reward Strip 1:
 *   Reward Strip 2:
 *   Actor Strip:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 * 
 * ---
 * 
 * Collapse Effect
 * 
 *   Normal Collapse Wait?:
 *   - Wait for the normal collapse effect to finish?
 * 
 *   Boss Collapse Wait?:
 *   - Wait for the boss collapse effect to finish?
 * 
 * ---
 * 
 * Victory Music
 * 
 *   Victory BGM:
 *   - Background music to play during the victory sequence.
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
 * Plugin Parameters: Reward Strips Settings
 * ============================================================================
 *
 * Reward strip settings that appear in the first screen of the Victory
 * Aftermath. These are used to let you have control over what rewards are
 * displayed at the end of each battle and can be used to display custom data
 * from other plugins as well.
 *
 * ---
 *
 * Reward Strip
 * 
 *   Label:
 *   - This one doesn't have any use other than being a label to  quickly
 *     determine what this one is for.
 * 
 *   JS: Show:
 *   - Code used to determine if the reward strip is shown.
 * 
 *   JS: Text:
 *   - Code used to determine if the text displayed as the category.
 * 
 *   JS: Data:
 *   - Code used to determine what data should be displayed in the
 *     reward strip.
 *
 * ---
 * 
 * The default parameters for this will be updated from time to time as more
 * VisuStella MZ plugins are released to add in extra displayed resources that
 * the party can gain from battle.
 *
 * ============================================================================
 * Plugin Parameters: Level Up Settings
 * ============================================================================
 *
 * When actors level up, extra screens will be displayed in the Victory
 * Aftermath sequence. Alter these settings to best fit your game.
 *
 * ---
 *
 * General
 * 
 *   Enable?:
 *   - Enable the Level Up portion of the Victory Aftermath phase?
 * 
 *   Show Face?:
 *   - Show the actor's face?
 * 
 *   Show Param Change?:
 *   - Show an extra column for parameter value differences?
 * 
 *     Hide Level?:
 *     - Hide the level change in the parameter value differences?
 * 
 *   Shown Max Skills:
 *   - The maximum amount of skills that are displayed.
 *   - This is due to limited screen space.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Quotes
 * 
 *   Level Up Quotes:
 *   - A list of generic level up quotes for those who don't have the
 *     <Level Up Quote> notetags.
 *   - %1 - Actor Name
 * 
 *   New Skill Quotes:
 *   - A list of generic level up quotes for those who don't have the
 *     <New Skill Quote> notetags.
 *   - %1 - Actor Name
 *
 * ---
 *
 * VisuMZ_1_MainMenuCore
 * - The following Plugin Parameters require VisuMZ_1_MainMenuCore.
 * 
 *   Show Bust?:
 *   - Show the actor's menu image as a bust?
 * 
 *   Bust Position X:
 *   - Positon to center the actor's menu image bust.
 *   - You may use JavaScript code.
 * 
 *   Bust Position Y:
 *   - Positon to anchor the actor's menu image bust.
 *   - You may use JavaScript code.
 * 
 *   Bust Scale:
 *   - The amount to scale the actor's menu image bust.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * There's certain diction used in the Victory Aftermath plugin that's not set
 * anywhere else in the game. Change the settings to make it fit your game.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Continue Format:
 *   - Text format for continue message.
 *   - %1 - OK key, %2 - Cancel key
 * 
 *   OK Button:
 *   - Text used to represent the OK button.
 *   - If VisuMZ_0_CoreEngine is present, ignore this.
 * 
 *   Cancel Button:
 *   - Text used to represent the Cancel button.
 *   - If VisuMZ_0_CoreEngine is present, ignore this.
 * 
 *   Level Format:
 *   - Text format for actor level.
 *   - %1 - Level
 * 
 *   Level Up:
 *   - Text format for reaching a level up.
 * 
 *   Sound Effect:
 *   - Sound effect played when a level up occurs.
 * 
 *     Volume:
 *     - Volume of the sound effect played.
 * 
 *     Pitch:
 *     - Pitch of the sound effect played.
 * 
 *     Pan:
 *     - Pan of the sound effect played.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors
 *     from the Window Skin.
 * 
 *   New Skill Format:
 *   - Text format describing that a new skill has been learned.
 *   - %1 - Actor Name
 * 
 *   Reward Items:
 *   - Text displayed for items rewarded.
 * 
 *   Victory Title:
 *   - Text displayed at the top of the victory screen.
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
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.22: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia:
 * *** Parameters > General Settings > Color Settings > Background Color 1
 * *** Parameters > General Settings > Color Settings > Background Color 2
 * *** Parameters > General Settings > Color Settings > Reward Strip 1
 * *** Parameters > General Settings > Color Settings > Reward Strip 1
 * *** Parameters > General Settings > Color Settings > Actor Strip
 * **** Colors with a bit of alpha settings.
 * 
 * Version 1.21: June 13, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia:
 * *** Parameters > General > Drops Sorted By:
 * **** Set your drops to be sorted by ID or name.
 * 
 * Version 1.20: May 16, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Olivia:
 * *** Post-Battle: Set Post-Battle BGM
 * *** Post-Battle: Set Post-Battle BGS
 * **** This determines what BGM/BGM to play after battle.
 * **** Use only in battle!
 * **** Used to make bgm/bgs changes seamless.
 * 
 * Version 1.19: December 14, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * ** The default Plugin Parameter for "Reward Strips" have been updated to
 *    contain compatibility for a future plugin.
 * 
 * Version 1.18: May 18, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.17: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.16: January 6, 2022
 * * Bug Fixes!
 * ** Fixed incorrect level change display text. Fix made by Olivia.
 * 
 * Version 1.15: December 16, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.0 compatibility update!
 * *** Battle Core's post-battle common events should now load properly. This
 *     incompatibility is due to RPG Maker MZ 1.4.0's core scripts added in
 *     a common event queue clear. Update made by Olivia.
 * 
 * Version 1.14: December 9, 2021
 * * Feature Update!
 * ** Victory Aftermath gauges now automatically round to the nearest pixel
 *    rather than be on half pixels with specific resolutions. Update by Irina.
 * 
 * Version 1.13: September 23, 2021
 * * Bug Fixes!
 * ** Values for parameter differences should no longer be hidden or the same
 *    as the previous values. Fix made by Irina.
 * 
 * Version 1.12: August 27, 2021
 * * Bug Fixes!
 * ** X-Parameters and S-Parameters shown in the level up stat changes should
 *    now display the percentage signs properly. Fix made by Olivia.
 * 
 * Version 1.11: July 9, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.10: March 12, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia!
 * *** Plugin Parameters > General > Show EXP Gauges?
 * **** Show the EXP Gauges of the main party members for the first screen of
 *      the Victory Aftermath?
 * **** This is added for those with large parties and cannot fit everything
 *      into one screen for all party members and would prefer not showing any
 *      EXP Gauges at all instead.
 * 
 * Version 1.09: January 15, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu!
 * *** Plugin Parameters > Vocab > Level Up > Volume
 * *** Plugin Parameters > Vocab > Level Up > Pitch
 * *** Plugin Parameters > Vocab > Level Up > Pan
 * **** For the people who want more control over the level up sound effect.
 * 
 * Version 1.08: December 11, 2020
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Feature Updates!
 * ** The default Plugin Parameter for "Reward Strips" have been updated to
 *    contain compatibility for a future plugin.
 * 
 * Version 1.07: December 4, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Plugin Parameter added by Olivia:
 * ** Plugin Parameters > Level Up Settings > Hide Level?
 * *** Hide the level change in the parameter value differences when comparing
 *     the stat changes from the previous level to the next.
 * 
 * Version 1.06: November 29, 2020
 * * Bug Fixed!
 * ** The default reward strips Plugin Parameters data is now updated for the
 *    SP display costs to show the Skill Points data instead of Ability Points
 *    data. Fix made by Arisu.
 * 
 * Version 1.05: November 8, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New plugin parameter added by Arisu.
 * *** Plugin Parameters > Reward Strips
 * **** Reward strip settings that appear in the first screen of the Victory
 *      Aftermath. These are used to let you have control over what rewards are
 *      displayed at the end of each battle and can be used to display custom
 *      data from other plugins as well.
 * 
 * Version 1.04: October 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New plugin parameter added by Olivia.
 * *** Plugin Parameters > General > Mirror Contents?
 * **** Mirror the positions of EXP, Gold, and Items?
 * 
 * Version 1.03: October 18, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** BGM pitch plugin parameter is now uncapped.
 * * New Features!
 * ** New plugin parameters added by Yanfly.
 * *** Plugin Parameters > General > Collapse Effect > Normal Collapse Wait?
 * *** Plugin Parameters > General > Collapse Effect > Boss Collapse Wait?
 * **** These settings enable you to decide if you want the Victory Aftermath
 *      to wait until collapse effects are finished before continuing.
 * *** Plugin Parameters > General > Music > Volume
 * *** Plugin Parameters > General > Music > Pitch
 * *** Plugin Parameters > General > Music > Pan
 * **** Adjusts the volume, pitch, and pan of the victory music.
 * 
 * Version 1.02: September 13, 2020
 * * Feature Update!
 * ** Victory Aftermath windows now wait until all boss collapse effects are
 *    done before showing. Update added by Olivia.
 * * New Features!
 * ** New Plugin Parameter under General Settings: Auto Skip Auto Battle?
 * *** Skip the Victory Aftermath sequence if the player has decided to use the
 *     party Auto Battle command?
 * *** Feature added by Olivia
 * 
 * Version 1.01: September 6, 2020
 * * New Features!
 * ** New Plugin Parameters added in Level Up Settings for disabling
 *    the back rectangles and/or changing their colors.
 *
 * Version 1.00: August 26, 2020
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
 * @command ActorQuotesLevelUpAdd
 * @text Actor: Add Level Up Quotes
 * @desc Add new entries target actor's level up quotes.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select ID of target actor to add quotes for.
 * @default 1
 *
 * @arg NewQuotes:arrayjson
 * @text New Quotes
 * @type note[]
 * @desc Add new entries to actor's level up quotes.
 * Text codes allowed. %1 - Actor's Name
 * @default ["\"\\\\c[6]%1\\\\c[0]\\n\\\"Text\\\"\""]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorQuotesNewSkillAdd
 * @text Actor: Add New Skill Quotes
 * @desc Add new entries target actor's new skill quotes.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select ID of target actor to add quotes for.
 * @default 1
 *
 * @arg NewQuotes:arrayjson
 * @text New Quotes
 * @type note[]
 * @desc Add new entries to actor's new skill quotes.
 * Text codes allowed. %1 - Actor's Name
 * @default ["\"\\\\c[6]%1\\\\c[0]\\n\\\"Text\\\"\""]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorQuotesLevelUpClear
 * @text Actor: Clear Level Up Quotes
 * @desc Clear target actor's level up quotes.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select ID of target actor to clear quotes for.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorQuotesNewSkillClear
 * @text Actor: Clear New Skill Quotes
 * @desc Clear target actor's new skill quotes.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select ID of target actor to clear quotes for.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PostBattle
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PostBattleBgm
 * @text Post-Battle: Set Post-Battle BGM
 * @desc This determines what BGM to play after battle.
 * Use only in battle!
 *
 * @arg name:str
 * @text Filename
 * @type file
 * @dir audio/bgm/
 * @require 1
 * @desc Filename of the BGM played.
 * @default >>>ATTENTION<<<
 *
 * @arg volume:num
 * @text Volume
 * @type number
 * @max 100
 * @desc Volume of the BGM played.
 * @default 90
 *
 * @arg pitch:num
 * @text Pitch
 * @type number
 * @desc Pitch of the BGM played.
 * @default 100
 *
 * @arg pan:num
 * @text Pan
 * @desc Pan of the BGM played.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PostBattleBgs
 * @text Post-Battle: Set Post-Battle BGS
 * @desc This determines what BGS to play after battle.
 * Use only in battle!
 *
 * @arg name:str
 * @text Filename
 * @type file
 * @dir audio/bgs/
 * @require 1
 * @desc Filename of the BGS played.
 * @default >>>ATTENTION<<<
 *
 * @arg volume:num
 * @text Volume
 * @type number
 * @max 100
 * @desc Volume of the BGS played.
 * @default 90
 *
 * @arg pitch:num
 * @text Pitch
 * @type number
 * @desc Pitch of the BGS played.
 * @default 100
 *
 * @arg pan:num
 * @text Pan
 * @desc Pan of the BGS played.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemBypassVictoryMotion
 * @text System: Bypass Victory Motion
 * @desc Bypass actors performing their victory motion?
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypass actors performing their victory motion?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemBypassVictoryMusic
 * @text System: Bypass Victory Music
 * @desc Bypass playing the victory music?
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypass playing the victory music?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemBypassVictoryPhase
 * @text System: Bypass Victory Phase
 * @desc Bypass the entire victory phase and all aspects about it?
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypass the entire victory phase and all aspects about it?
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
 * @param VictoryAftermath
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
 * @desc General settings pertaining to the Victory Aftermath phase.
 * @default {"General":"","FadeInSpeed:num":"8","HideDelayMS:num":"1500","ShowDelayMS:num":"2000","UpdateDuration:num":"180","AutoBattleAutoSkip:eval":"true","MirrorContents:eval":"false","Collapse":"","WaitRegularCollapse:eval":"true","WaitBossCollapse:eval":"true","Music":"","Bgm:str":"Ship3","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @param Rewards:arraystruct
 * @text Reward Strips
 * @parent General:struct
 * @type struct<Rewards>[]
 * @desc Reward strip settings that appear in the first screen of the Victory Aftermath.
 * @default ["{\"Label\":\"EXP\",\"Show:func\":\"\\\"return true;\\\"\",\"Text:func\":\"\\\"return TextManager.exp;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.exp;\\\"\"}","{\"Label\":\"Gold\",\"Show:func\":\"\\\"return true;\\\"\",\"Text:func\":\"\\\"return TextManager.currencyUnit;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.gold;\\\"\"}","{\"Label\":\"AP (Skill Learn System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_SkillLearnSystem &&\\\\n    VisuMZ.SkillLearnSystem.Settings.AbilityPoints.ShowVictory;\\\"\",\"Text:func\":\"\\\"return TextManager.abilityPointsAbbr;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.abilityPoints;\\\"\"}","{\"Label\":\"CP (Class Change System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_ClassChangeSystem &&\\\\n    VisuMZ.ClassChangeSystem.Settings.ClassPoints.ShowVictory;\\\"\",\"Text:func\":\"\\\"return TextManager.classPointsAbbr;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.classPoints;\\\"\"}","{\"Label\":\"JP (Class Change System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_ClassChangeSystem &&\\\\n    VisuMZ.ClassChangeSystem.Settings.JobPoints.ShowVictory;\\\"\",\"Text:func\":\"\\\"return TextManager.jobPointsAbbr;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.jobPoints;\\\"\"}","{\"Label\":\"SP (Skill Learn System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_SkillLearnSystem &&\\\\n    VisuMZ.SkillLearnSystem.Settings.SkillPoints.ShowVictory;\\\"\",\"Text:func\":\"\\\"return TextManager.skillPointsAbbr;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.skillPoints;\\\"\"}","{\"Label\":\"Medal EXP (Equip Medal System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_EquipMedalSys &&\\\\n    VisuMZ.EquipMedalSys.Settings.General.ShowVictory &&\\\\n    BattleManager._rewards.equipMedalExp > 0;\\\"\",\"Text:func\":\"\\\"return TextManager.equipMedalExp;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.equipMedalExp;\\\"\"}"]
 *
 * @param LevelUp:struct
 * @text Level Up Settings
 * @type struct<LevelUp>
 * @desc Settings pertaining to the Level Up portion of the Victory Aftermath phase.
 * @default {"General":"","Enable:eval":"true","ShowFace:eval":"false","ShowParamDiff:eval":"true","HideLevelDiff:eval":"false","MaxSkills:num":"8","DelayBuffer:num":"200","DrawBackRect:eval":"true","BackRectColor:str":"19","Quotes":"","LevelUpQuotes:arrayjson":"[\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Alright! A level up!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Yes! I've leveled up!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Oh? I've leveled up!?\\\\n This is awesome!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Looks like I've become stronger!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"I feel like I'm getting used to battle.\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"The power! I can feel it!\\\\\\\"\\\"\"]","NewSkillQuotes:arrayjson":"[\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Looks like I've acquired a new skill!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"This new skill should come in handy.\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"It seems I've learned something new!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"I've acquired a new power!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"This should be useful for future battles.\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"I wonder what this new skill is like?\\\\\\\"\\\"\"]","MainMenuCore":"","ShowBust:eval":"true","BustPosX:str":"Graphics.width * 0.25","BustPosY:str":"Graphics.height","BustScale:num":"1.20"}
 *
 * @param Vocab:struct
 * @text Vocabulary
 * @type struct<Vocab>
 * @desc The vocabulary used for this plugin and related settings.
 * @default {"ContinueFmt:str":"Press %1 or %2 to continue","KeyOK:str":"OK","KeyCancel:str":"Cancel","LvFmt:str":"LV %1","LvUp:str":"LEVEL UP!","LvUpSfx:str":"Up4","LvUpVolume:num":"90","LvUpPitch:num":"100","LvUpPan:num":"0","LvUpColor:str":"17","NewSkill:str":"%1 has learned:","RewardItems:str":"Items Obtained","Victory:str":"Victory!"}
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
 * @param General
 * 
 * @param FadeInSpeed:num
 * @text Fade In Speed
 * @parent General
 * @desc Fade in speed for the victory window.
 * @default 8
 *
 * @param HideDelayMS:num
 * @text Hide Delay (MS)
 * @parent General
 * @desc Delay in milliseconds before hiding the UI Windows.
 * @default 1500
 *
 * @param ShowDelayMS:num
 * @text Show Delay (MS)
 * @parent General
 * @desc Delay in milliseconds before showing the Victory Windows.
 * @default 2000
 *
 * @param UpdateDuration:num
 * @text Update Duration
 * @parent General
 * @desc Duration in frames on updating actor EXP gauges.
 * @default 180
 *
 * @param AutoBattleAutoSkip:eval
 * @text Skip Auto Battle?
 * @parent General
 * @type boolean
 * @on Skip
 * @off Don't Skip
 * @desc Skip the Victory Aftermath sequence if the player has
 * decided to use the party Auto Battle command?
 * @default true
 *
 * @param MirrorContents:eval
 * @text Mirror Contents?
 * @parent General
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the positions of EXP, Gold, and Items?
 * @default false
 *
 * @param ShowExpGauges:eval
 * @text Show EXP Gauges?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the EXP Gauges of the main party members
 * for the first screen of the Victory Aftermath?
 * @default true
 *
 * @param DropsSortBy:str
 * @text Drops Sorted By
 * @parent General
 * @type select
 * @option ID
 * @option Name
 * @desc How are drops sorted by in the Victory Aftermath?
 * @default ID
 *
 * @param Colors
 * @text Color Settings
 *
 * @param bgColor1:str
 * @text Background Color 1
 * @parent Colors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.8)
 *
 * @param bgColor2:str
 * @text Background Color 2
 * @parent Colors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.4)
 *
 * @param rewardStrip1:str
 * @text Reward Strip 1
 * @parent Colors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1.0)
 *
 * @param rewardStrip2:str
 * @text Reward Strip 2
 * @parent Colors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.0)
 *
 * @param actorStrip1:str
 * @text Actor Strip
 * @parent Colors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1.0)
 * 
 * @param Collapse
 * @text Collapse Effect
 *
 * @param WaitRegularCollapse:eval
 * @text Normal Collapse Wait?
 * @parent Collapse
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for the normal collapse effect to finish?
 * @default true
 *
 * @param WaitBossCollapse:eval
 * @text Boss Collapse Wait?
 * @parent Collapse
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for the boss collapse effect to finish?
 * @default true
 * 
 * @param Music
 * @text Victory Music
 *
 * @param Bgm:str
 * @text Victory BGM
 * @parent Music
 * @type file
 * @dir audio/bgm/
 * @desc Background music to play during the victory sequence.
 * @default Ship3
 *
 * @param volume:num
 * @text Volume
 * @parent Music
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param pitch:num
 * @text Pitch
 * @parent Music
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param pan:num
 * @text Pan
 * @parent Music
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Rewards Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Rewards:
 *
 * @param Label
 * @desc This one doesn't have any use other than being a label to 
 * quickly determine what this one is for.
 * @default Untitled
 *
 * @param Show:func
 * @text JS: Show
 * @type note
 * @desc Code used to determine if the reward strip is shown.
 * @default "return true;"
 *
 * @param Text:func
 * @text JS: Text
 * @type note
 * @desc Code used to determine if the text displayed as the category.
 * @default "return 'Untitled';"
 *
 * @param Data:func
 * @text JS: Data
 * @type note
 * @desc Code used to determine what data should be displayed in the reward strip.
 * @default "return 0;"
 *
 */
/* ----------------------------------------------------------------------------
 * Level Up Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LevelUp:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the Level Up portion of the Victory Aftermath phase?
 * @default true
 *
 * @param ShowFace:eval
 * @text Show Face?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the actor's face?
 * @default false
 *
 * @param ShowParamDiff:eval
 * @text Show Param Change?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show an extra column for parameter value differences?
 * @default true
 *
 * @param HideLevelDiff:eval
 * @text Hide Level?
 * @parent ShowParamDiff:eval
 * @type boolean
 * @on Hide
 * @off Normal
 * @desc Hide the level change in the parameter value differences?
 * @default false
 *
 * @param MaxSkills:num
 * @text Shown Max Skills
 * @parent General
 * @desc The maximum amount of skills that are displayed.
 * This is due to limited screen space.
 * @default 8
 *
 * @param DelayBuffer:num
 * @text Delay Buffer
 * @parent General
 * @type number
 * @desc How many milliseconds to wait in between playing
 * each level up sound effect?
 * @default 200
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param Quotes
 *
 * @param LevelUpQuotes:arrayjson
 * @text Level Up Quotes
 * @parent Quotes
 * @type note[]
 * @desc A list of generic level up quotes for those who don't
 * have the <Level Up Quote> notetags. %1 - Actor Name
 * @default ["\"\\\\c[6]%1\\\\c[0]\\n\\\"Alright! A level up!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"Yes! I've leveled up!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"Oh? I've leveled up!?\\n This is awesome!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"Looks like I've become stronger!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"I feel like I'm getting used to battle.\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"The power! I can feel it!\\\"\""]
 *
 * @param NewSkillQuotes:arrayjson
 * @text New Skill Quotes
 * @parent Quotes
 * @type note[]
 * @desc A list of generic level up quotes for those who don't
 * have the <New Skill Quote> notetags. %1 - Actor Name
 * @default ["\"\\\\c[6]%1\\\\c[0]\\n\\\"Looks like I've acquired a new skill!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"This new skill should come in handy.\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"It seems I've learned something new!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"I've acquired a new power!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"This should be useful for future battles.\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"I wonder what this new skill is like?\\\"\""]
 *
 * @param MainMenuCore
 * @text VisuMZ_1_MainMenuCore
 *
 * @param ShowBust:eval
 * @text Show Bust?
 * @parent MainMenuCore
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the actor's menu image as a bust?
 * @default true
 *
 * @param BustPosX:str
 * @text Bust Position X
 * @parent MainMenuCore
 * @desc Positon to center the actor's menu image bust.
 * You may use JavaScript code.
 * @default Graphics.width * 0.25
 *
 * @param BustPosY:str
 * @text Bust Position Y
 * @parent MainMenuCore
 * @desc Positon to anchor the actor's menu image bust.
 * You may use JavaScript code.
 * @default Graphics.height
 *
 * @param BustScale:num
 * @text Bust Scale
 * @parent MainMenuCore
 * @desc The amount to scale the actor's menu image bust.
 * @default 1.20
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param ContinueFmt:str
 * @text Continue Format
 * @desc Text format for continue message.
 * %1 - OK key, %2 - Cancel key
 * @default Press %1 or %2 to continue
 *
 * @param KeyOK:str
 * @text OK Button
 * @parent ContinueFmt:str
 * @desc Text used to represent the OK button.
 * If VisuMZ_0_CoreEngine is present, ignore this.
 * @default OK
 *
 * @param KeyCancel:str
 * @text Cancel Button
 * @parent ContinueFmt:str
 * @desc Text used to represent the Cancel button.
 * If VisuMZ_0_CoreEngine is present, ignore this.
 * @default Cancel
 *
 * @param LvFmt:str
 * @text Level Format
 * @desc Text format for actor level.
 * %1 - Level
 * @default LV %1
 *
 * @param LvUp:str
 * @text Level Up
 * @desc Text format for reaching a level up.
 * @default LEVEL UP!
 *
 * @param LvUpSfx:str
 * @text Sound Effect
 * @parent LvUp:str
 * @type file
 * @dir audio/se/
 * @desc Sound effect played when a level up occurs.
 * @default Up4
 *
 * @param LvUpVolume:num
 * @text Volume
 * @parent LvUpSfx:str
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param LvUpPitch:num
 * @text Pitch
 * @parent LvUpSfx:str
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param LvUpPan:num
 * @text Pan
 * @parent LvUpSfx:str
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param LvUpColor:str
 * @text Text Color
 * @parent LvUp:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param NewSkill:str
 * @text New Skill Format
 * @desc Text format describing that a new skill has been learned.
 * %1 - Actor Name
 * @default %1 has learned:
 *
 * @param RewardItems:str
 * @text Reward Items
 * @desc Text displayed for items rewarded.
 * @default Items Obtained
 *
 * @param Victory:str
 * @text Victory Title
 * @desc Text displayed at the top of the victory screen.
 * @default Victory!
 *
 */
//=============================================================================

const _0x3cc4a7=_0x1aff;(function(_0x12efdc,_0x2c4daf){const _0x2b6e9a=_0x1aff,_0x22ab1a=_0x12efdc();while(!![]){try{const _0x10b976=-parseInt(_0x2b6e9a(0x23b))/0x1*(-parseInt(_0x2b6e9a(0x272))/0x2)+-parseInt(_0x2b6e9a(0x19d))/0x3*(-parseInt(_0x2b6e9a(0x274))/0x4)+-parseInt(_0x2b6e9a(0x1d7))/0x5+parseInt(_0x2b6e9a(0x1cf))/0x6*(parseInt(_0x2b6e9a(0x28b))/0x7)+-parseInt(_0x2b6e9a(0x213))/0x8+parseInt(_0x2b6e9a(0x2b1))/0x9+-parseInt(_0x2b6e9a(0x13f))/0xa*(parseInt(_0x2b6e9a(0x1c6))/0xb);if(_0x10b976===_0x2c4daf)break;else _0x22ab1a['push'](_0x22ab1a['shift']());}catch(_0x1527e8){_0x22ab1a['push'](_0x22ab1a['shift']());}}}(_0x1f2b,0x73cd3));var label=_0x3cc4a7(0x17a),tier=tier||0x0,dependencies=['VisuMZ_1_BattleCore'],pluginData=$plugins['filter'](function(_0x212945){const _0x1c1757=_0x3cc4a7;return _0x212945[_0x1c1757(0x231)]&&_0x212945[_0x1c1757(0x149)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x3cc4a7(0x171)]=VisuMZ[label]['Settings']||{},VisuMZ['ConvertParams']=function(_0x5ed78e,_0xc323a1){const _0xd64d39=_0x3cc4a7;for(const _0x48cc54 in _0xc323a1){if(_0x48cc54['match'](/(.*):(.*)/i)){const _0x34886b=String(RegExp['$1']),_0x199d84=String(RegExp['$2'])[_0xd64d39(0x29e)]()['trim']();let _0x2259b9,_0x272056,_0x45f50c;switch(_0x199d84){case _0xd64d39(0x22f):_0x2259b9=_0xc323a1[_0x48cc54]!==''?Number(_0xc323a1[_0x48cc54]):0x0;break;case'ARRAYNUM':_0x272056=_0xc323a1[_0x48cc54]!==''?JSON['parse'](_0xc323a1[_0x48cc54]):[],_0x2259b9=_0x272056['map'](_0x2f72f9=>Number(_0x2f72f9));break;case _0xd64d39(0xf6):_0x2259b9=_0xc323a1[_0x48cc54]!==''?eval(_0xc323a1[_0x48cc54]):null;break;case'ARRAYEVAL':_0x272056=_0xc323a1[_0x48cc54]!==''?JSON['parse'](_0xc323a1[_0x48cc54]):[],_0x2259b9=_0x272056[_0xd64d39(0x245)](_0x1a21e7=>eval(_0x1a21e7));break;case'JSON':_0x2259b9=_0xc323a1[_0x48cc54]!==''?JSON[_0xd64d39(0x295)](_0xc323a1[_0x48cc54]):'';break;case _0xd64d39(0xf9):_0x272056=_0xc323a1[_0x48cc54]!==''?JSON[_0xd64d39(0x295)](_0xc323a1[_0x48cc54]):[],_0x2259b9=_0x272056['map'](_0x46e86a=>JSON[_0xd64d39(0x295)](_0x46e86a));break;case _0xd64d39(0x19f):_0x2259b9=_0xc323a1[_0x48cc54]!==''?new Function(JSON[_0xd64d39(0x295)](_0xc323a1[_0x48cc54])):new Function('return\x200');break;case'ARRAYFUNC':_0x272056=_0xc323a1[_0x48cc54]!==''?JSON[_0xd64d39(0x295)](_0xc323a1[_0x48cc54]):[],_0x2259b9=_0x272056[_0xd64d39(0x245)](_0x31f801=>new Function(JSON[_0xd64d39(0x295)](_0x31f801)));break;case _0xd64d39(0x227):_0x2259b9=_0xc323a1[_0x48cc54]!==''?String(_0xc323a1[_0x48cc54]):'';break;case _0xd64d39(0x150):_0x272056=_0xc323a1[_0x48cc54]!==''?JSON[_0xd64d39(0x295)](_0xc323a1[_0x48cc54]):[],_0x2259b9=_0x272056[_0xd64d39(0x245)](_0x353fc3=>String(_0x353fc3));break;case _0xd64d39(0x10f):_0x45f50c=_0xc323a1[_0x48cc54]!==''?JSON['parse'](_0xc323a1[_0x48cc54]):{},_0x2259b9=VisuMZ[_0xd64d39(0x174)]({},_0x45f50c);break;case _0xd64d39(0x25f):_0x272056=_0xc323a1[_0x48cc54]!==''?JSON[_0xd64d39(0x295)](_0xc323a1[_0x48cc54]):[],_0x2259b9=_0x272056[_0xd64d39(0x245)](_0x26020f=>VisuMZ[_0xd64d39(0x174)]({},JSON['parse'](_0x26020f)));break;default:continue;}_0x5ed78e[_0x34886b]=_0x2259b9;}}return _0x5ed78e;},(_0x5a94e6=>{const _0x5b12f5=_0x3cc4a7,_0x2c6dee=_0x5a94e6[_0x5b12f5(0x112)];for(const _0x2d971f of dependencies){if(!Imported[_0x2d971f]){alert(_0x5b12f5(0x27b)[_0x5b12f5(0x1b3)](_0x2c6dee,_0x2d971f)),SceneManager['exit']();break;}}const _0xbd145c=_0x5a94e6[_0x5b12f5(0x149)];if(_0xbd145c[_0x5b12f5(0x25a)](/\[Version[ ](.*?)\]/i)){const _0x2132ec=Number(RegExp['$1']);_0x2132ec!==VisuMZ[label][_0x5b12f5(0x177)]&&(alert(_0x5b12f5(0x187)['format'](_0x2c6dee,_0x2132ec)),SceneManager[_0x5b12f5(0x12d)]());}if(_0xbd145c[_0x5b12f5(0x25a)](/\[Tier[ ](\d+)\]/i)){const _0x11d8fe=Number(RegExp['$1']);_0x11d8fe<tier?(alert(_0x5b12f5(0x170)['format'](_0x2c6dee,_0x11d8fe,tier)),SceneManager[_0x5b12f5(0x12d)]()):tier=Math[_0x5b12f5(0x12f)](_0x11d8fe,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x5b12f5(0x171)],_0x5a94e6[_0x5b12f5(0x1d2)]);})(pluginData),PluginManager[_0x3cc4a7(0x1d0)](pluginData[_0x3cc4a7(0x112)],_0x3cc4a7(0x1f0),_0x5c333c=>{const _0x56ab07=_0x3cc4a7;VisuMZ[_0x56ab07(0x174)](_0x5c333c,_0x5c333c);const _0x2dd59b=$gameActors[_0x56ab07(0x18d)](_0x5c333c[_0x56ab07(0x199)]),_0x4542ef=_0x5c333c[_0x56ab07(0x281)];if(_0x2dd59b)while(_0x4542ef[_0x56ab07(0xf7)]>0x0){_0x2dd59b[_0x56ab07(0x1f6)]()[_0x56ab07(0x283)](_0x4542ef[_0x56ab07(0x259)]());}}),PluginManager[_0x3cc4a7(0x1d0)](pluginData[_0x3cc4a7(0x112)],_0x3cc4a7(0x119),_0x435de2=>{const _0x1309a0=_0x3cc4a7;VisuMZ['ConvertParams'](_0x435de2,_0x435de2);const _0x1e8c5f=$gameActors[_0x1309a0(0x18d)](_0x435de2[_0x1309a0(0x199)]),_0x5103fc=_0x435de2[_0x1309a0(0x281)];if(_0x1e8c5f)while(_0x5103fc[_0x1309a0(0xf7)]>0x0){_0x1e8c5f[_0x1309a0(0x24f)]()[_0x1309a0(0x283)](_0x5103fc['shift']());}}),PluginManager[_0x3cc4a7(0x1d0)](pluginData[_0x3cc4a7(0x112)],_0x3cc4a7(0x1e4),_0x2de7dd=>{const _0x56fe71=_0x3cc4a7;VisuMZ['ConvertParams'](_0x2de7dd,_0x2de7dd);const _0x3e66ef=$gameActors[_0x56fe71(0x18d)](_0x2de7dd[_0x56fe71(0x199)]);if(_0x3e66ef)while(_0x3e66ef[_0x56fe71(0x1f6)]()[_0x56fe71(0xf7)]>0x0){_0x3e66ef[_0x56fe71(0x1f6)]()[_0x56fe71(0x259)]();}}),PluginManager[_0x3cc4a7(0x1d0)](pluginData[_0x3cc4a7(0x112)],'ActorQuotesNewSkillClear',_0x217746=>{const _0x2c9737=_0x3cc4a7;VisuMZ[_0x2c9737(0x174)](_0x217746,_0x217746);const _0x477762=$gameActors[_0x2c9737(0x18d)](_0x217746[_0x2c9737(0x199)]);if(_0x477762)while(_0x477762[_0x2c9737(0x24f)]()[_0x2c9737(0xf7)]>0x0){_0x477762[_0x2c9737(0x24f)]()[_0x2c9737(0x259)]();}}),PluginManager['registerCommand'](pluginData[_0x3cc4a7(0x112)],'PostBattleBgm',_0x35f638=>{const _0x3deee1=_0x3cc4a7;if(!$gameParty[_0x3deee1(0x189)]())return;VisuMZ[_0x3deee1(0x174)](_0x35f638,_0x35f638),BattleManager[_0x3deee1(0x114)]={'name':String(_0x35f638[_0x3deee1(0x112)]||''),'volume':Number(_0x35f638[_0x3deee1(0x212)]||0x0),'pitch':Number(_0x35f638[_0x3deee1(0x18e)]||0x0),'pan':Number(_0x35f638['pan']||0x0),'pos':0x0};}),PluginManager['registerCommand'](pluginData['name'],_0x3cc4a7(0x242),_0x4b3984=>{const _0x5c0f82=_0x3cc4a7;if(!$gameParty[_0x5c0f82(0x189)]())return;VisuMZ['ConvertParams'](_0x4b3984,_0x4b3984),BattleManager[_0x5c0f82(0x185)]={'name':String(_0x4b3984['name']||''),'volume':Number(_0x4b3984[_0x5c0f82(0x212)]||0x0),'pitch':Number(_0x4b3984[_0x5c0f82(0x18e)]||0x0),'pan':Number(_0x4b3984[_0x5c0f82(0x14e)]||0x0),'pos':0x0};}),PluginManager[_0x3cc4a7(0x1d0)](pluginData[_0x3cc4a7(0x112)],'SystemBypassVictoryMotion',_0x36d2cc=>{const _0x536b6c=_0x3cc4a7;VisuMZ[_0x536b6c(0x174)](_0x36d2cc,_0x36d2cc),$gameSystem[_0x536b6c(0x165)]()[_0x536b6c(0x11f)]=_0x36d2cc['Bypass'];}),PluginManager[_0x3cc4a7(0x1d0)](pluginData[_0x3cc4a7(0x112)],_0x3cc4a7(0x13a),_0x11cf05=>{const _0x3b1d59=_0x3cc4a7;VisuMZ[_0x3b1d59(0x174)](_0x11cf05,_0x11cf05),$gameSystem[_0x3b1d59(0x165)]()[_0x3b1d59(0x1cb)]=_0x11cf05[_0x3b1d59(0x19e)];}),PluginManager['registerCommand'](pluginData[_0x3cc4a7(0x112)],_0x3cc4a7(0x29f),_0xbe2147=>{const _0x417b6b=_0x3cc4a7;VisuMZ['ConvertParams'](_0xbe2147,_0xbe2147),$gameSystem['victoryAftermathSettings']()[_0x417b6b(0x2a2)]=_0xbe2147['Bypass'];}),TextManager[_0x3cc4a7(0x1e0)]=VisuMZ['VictoryAftermath'][_0x3cc4a7(0x171)][_0x3cc4a7(0x108)][_0x3cc4a7(0x2b3)],TextManager[_0x3cc4a7(0x1df)]=VisuMZ[_0x3cc4a7(0x17a)]['Settings'][_0x3cc4a7(0x108)]['KeyOK'],TextManager[_0x3cc4a7(0x1b9)]=VisuMZ['VictoryAftermath'][_0x3cc4a7(0x171)]['Vocab']['KeyCancel'],TextManager[_0x3cc4a7(0x2a1)]=VisuMZ['VictoryAftermath'][_0x3cc4a7(0x171)][_0x3cc4a7(0x108)][_0x3cc4a7(0x16c)],TextManager[_0x3cc4a7(0x234)]=VisuMZ['VictoryAftermath']['Settings'][_0x3cc4a7(0x108)][_0x3cc4a7(0x1dd)],TextManager[_0x3cc4a7(0x1f3)]=VisuMZ['VictoryAftermath'][_0x3cc4a7(0x171)][_0x3cc4a7(0x108)][_0x3cc4a7(0xf4)],TextManager['victoryDisplayTitle']=VisuMZ['VictoryAftermath']['Settings'][_0x3cc4a7(0x108)]['Victory'],TextManager[_0x3cc4a7(0x233)]=VisuMZ['VictoryAftermath'][_0x3cc4a7(0x171)][_0x3cc4a7(0x108)]['NewSkill'],TextManager[_0x3cc4a7(0x173)]=function(_0x265a8e){const _0x24267d=_0x3cc4a7,_0x348471=VisuMZ['VictoryAftermath'][_0x24267d(0x171)][_0x24267d(0x107)][_0x24267d(0x1f8)];if(!_0x265a8e)return _0x348471[Math[_0x24267d(0xfd)](_0x348471['length'])];if(!_0x265a8e['isActor']())return _0x348471[Math[_0x24267d(0xfd)](_0x348471[_0x24267d(0xf7)])];const _0xd5f743=_0x265a8e[_0x24267d(0x1f6)]();if(_0xd5f743[_0x24267d(0xf7)]>0x0)return _0xd5f743[Math[_0x24267d(0xfd)](_0xd5f743[_0x24267d(0xf7)])];return _0x348471[Math[_0x24267d(0xfd)](_0x348471[_0x24267d(0xf7)])];},TextManager[_0x3cc4a7(0x178)]=function(_0x5c88d6){const _0x21f104=_0x3cc4a7,_0x343801=VisuMZ[_0x21f104(0x17a)][_0x21f104(0x171)][_0x21f104(0x107)][_0x21f104(0x238)];if(!_0x5c88d6)return _0x343801[Math['randomInt'](_0x343801['length'])];if(!_0x5c88d6['isActor']())return _0x343801[Math['randomInt'](_0x343801['length'])];const _0x233140=_0x5c88d6[_0x21f104(0x24f)]();if(_0x233140['length']>0x0)return _0x233140[Math[_0x21f104(0xfd)](_0x233140[_0x21f104(0xf7)])];return _0x343801[Math[_0x21f104(0xfd)](_0x343801[_0x21f104(0xf7)])];},ColorManager['getColorDataFromPluginParameters']=function(_0x4f0b9f,_0x33ef15){const _0x3c7ea2=_0x3cc4a7;return _0x33ef15=String(_0x33ef15),this[_0x3c7ea2(0x20f)]=this[_0x3c7ea2(0x20f)]||{},_0x33ef15[_0x3c7ea2(0x25a)](/#(.*)/i)?this['_colorCache'][_0x4f0b9f]='#%1'[_0x3c7ea2(0x1b3)](String(RegExp['$1'])):this[_0x3c7ea2(0x20f)][_0x4f0b9f]=this['textColor'](Number(_0x33ef15)),this['_colorCache'][_0x4f0b9f];},ColorManager[_0x3cc4a7(0x21b)]=function(_0x5d401c){const _0x556e8d=_0x3cc4a7;return _0x5d401c=String(_0x5d401c),_0x5d401c[_0x556e8d(0x25a)](/#(.*)/i)?'#%1'[_0x556e8d(0x1b3)](String(RegExp['$1'])):this['textColor'](Number(_0x5d401c));},ColorManager[_0x3cc4a7(0x240)]=function(){const _0x7d3deb=_0x3cc4a7,_0x3f8d72='victory-level-up-color';this[_0x7d3deb(0x20f)]=this[_0x7d3deb(0x20f)]||{};if(this[_0x7d3deb(0x20f)][_0x3f8d72])return this[_0x7d3deb(0x20f)][_0x3f8d72];const _0x2dc01c=VisuMZ[_0x7d3deb(0x17a)][_0x7d3deb(0x171)][_0x7d3deb(0x108)]['LvUpColor'];return this[_0x7d3deb(0x103)](_0x3f8d72,_0x2dc01c);},SoundManager['playVictoryLevelUpSFX']=function(){const _0x40078e=_0x3cc4a7;if(this['_victoryLevelUpBuffer'])return;if(!this[_0x40078e(0x278)]){const _0x277d0a=VisuMZ['VictoryAftermath']['Settings']['Vocab'];this[_0x40078e(0x278)]={'name':_0x277d0a['LvUpSfx']||'','volume':_0x277d0a[_0x40078e(0x130)]??0x5a,'pitch':_0x277d0a[_0x40078e(0x17f)]??0x64,'pan':_0x277d0a[_0x40078e(0x15a)]??0x0};}this[_0x40078e(0x278)][_0x40078e(0x112)]!==''&&(AudioManager[_0x40078e(0x11d)](this['_victoryLevelUpSFX']),this[_0x40078e(0x186)]=!![],setTimeout(this[_0x40078e(0xf1)][_0x40078e(0x163)](this),0xc8));},SoundManager['removeVictoryLevelUpBuffer']=function(){this['_victoryLevelUpBuffer']=![];},SoundManager[_0x3cc4a7(0x160)]=function(){const _0x1a8b09=_0x3cc4a7;if(!this['_victoryBgm']){const _0x561329=VisuMZ[_0x1a8b09(0x17a)]['Settings'][_0x1a8b09(0x1a1)];if(_0x561329[_0x1a8b09(0x212)]===undefined)_0x561329[_0x1a8b09(0x212)]=0x5a;if(_0x561329['pitch']===undefined)_0x561329['pitch']=0x64;if(_0x561329[_0x1a8b09(0x14e)]===undefined)_0x561329[_0x1a8b09(0x14e)]=0x0;this['_victoryBgm']={'name':_0x561329[_0x1a8b09(0x132)]||'','volume':_0x561329[_0x1a8b09(0x212)]||0x0,'pitch':_0x561329[_0x1a8b09(0x18e)]||0x0,'pan':_0x561329[_0x1a8b09(0x14e)]||0x0};}this[_0x1a8b09(0x158)][_0x1a8b09(0x112)]!==''&&AudioManager[_0x1a8b09(0x1a5)](this[_0x1a8b09(0x158)]);},BattleManager[_0x3cc4a7(0x258)]=VisuMZ['VictoryAftermath'][_0x3cc4a7(0x171)][_0x3cc4a7(0x1a1)][_0x3cc4a7(0x23c)]||0x1,VisuMZ[_0x3cc4a7(0x17a)][_0x3cc4a7(0x141)]=BattleManager['initMembers'],BattleManager['initMembers']=function(){const _0x465c5c=_0x3cc4a7;VisuMZ[_0x465c5c(0x17a)][_0x465c5c(0x141)]['call'](this),this['_victoryPhase']=![],this[_0x465c5c(0x1b5)]=-0x1,this['_autoBattleVictorySkip']=![];},VisuMZ['VictoryAftermath'][_0x3cc4a7(0x18f)]=BattleManager[_0x3cc4a7(0x285)],BattleManager[_0x3cc4a7(0x285)]=function(){const _0x57365f=_0x3cc4a7;return this[_0x57365f(0x1bb)]()?!![]:VisuMZ[_0x57365f(0x17a)][_0x57365f(0x18f)][_0x57365f(0xf8)](this);},BattleManager['isVictoryPhase']=function(){const _0x1b5c91=_0x3cc4a7;return this[_0x1b5c91(0x151)]===_0x1b5c91(0x127)&&this['_victoryPhase'];},BattleManager[_0x3cc4a7(0x122)]=function(){const _0x449be7=_0x3cc4a7;this[_0x449be7(0x269)](_0x449be7(0x1a9)),this[_0x449be7(0x1c4)](),Imported[_0x449be7(0x253)]&&$gameParty[_0x449be7(0x11a)](_0x449be7(0x256));},BattleManager[_0x3cc4a7(0x1c4)]=function(){const _0x41caf2=_0x3cc4a7;this[_0x41caf2(0x1ed)](),this[_0x41caf2(0x17b)](),this['processVictoryAftermathRewards'](),this[_0x41caf2(0x262)]();},BattleManager[_0x3cc4a7(0x1ed)]=function(){const _0x5e7a09=_0x3cc4a7;$gameParty[_0x5e7a09(0x2ad)](),$gameParty['performVictory']();},BattleManager[_0x3cc4a7(0x17b)]=function(){const _0x446d5d=_0x3cc4a7;if(this['isBypassVictoryAftermathMusic']())return;this[_0x446d5d(0x131)](),SoundManager[_0x446d5d(0x160)]();},BattleManager[_0x3cc4a7(0x239)]=function(){const _0x2c295d=_0x3cc4a7;return $gameSystem[_0x2c295d(0x165)]()[_0x2c295d(0x1cb)]||$gameSystem[_0x2c295d(0x165)]()[_0x2c295d(0x2a2)];},BattleManager[_0x3cc4a7(0x267)]=function(){const _0x577e4a=_0x3cc4a7;this[_0x577e4a(0x1fd)](),this[_0x577e4a(0xff)](),this[_0x577e4a(0x16d)]();},BattleManager['makeTempActors']=function(){const _0x301859=_0x3cc4a7;this[_0x301859(0x211)]=$gameParty[_0x301859(0x1a6)]()[_0x301859(0x245)](_0xf91eaa=>_0xf91eaa['makeVictoryCopy']()),this[_0x301859(0x2a5)]=JsonEx['makeDeepCopy'](this[_0x301859(0x211)]);},BattleManager[_0x3cc4a7(0x262)]=function(){const _0x2d6f8e=_0x3cc4a7;this[_0x2d6f8e(0x129)](),this[_0x2d6f8e(0x1ae)](0x0),this['processPostBattleCommonEvents']('Victory'),this[_0x2d6f8e(0x143)]=!![],this[_0x2d6f8e(0x13e)]()?this['skipVictoryAftermathTransition']():this[_0x2d6f8e(0x1ac)]();},BattleManager[_0x3cc4a7(0x129)]=function(){const _0x349a62=_0x3cc4a7,_0x77dfb0=VisuMZ[_0x349a62(0x17a)]['Settings'][_0x349a62(0x1a1)];_0x77dfb0[_0x349a62(0x145)]===undefined&&(_0x77dfb0[_0x349a62(0x145)]=!![]),_0x77dfb0[_0x349a62(0x145)]===!![]&&(this[_0x349a62(0x1f4)]=this[_0x349a62(0x183)]);},BattleManager[_0x3cc4a7(0x13e)]=function(){const _0x179e64=_0x3cc4a7;if(this['_autoBattleVictorySkip'])return!![];return $gameSystem['victoryAftermathSettings']()[_0x179e64(0x2a2)];},BattleManager['skipVictoryAftermathTransition']=function(){const _0x176c95=_0x3cc4a7,_0x359ac0=VisuMZ[_0x176c95(0x17a)][_0x176c95(0x171)][_0x176c95(0x1a1)],_0x12b90b=SceneManager['_scene'];setTimeout(_0x12b90b[_0x176c95(0x15f)]['bind'](_0x12b90b),_0x359ac0[_0x176c95(0x207)]);},BattleManager[_0x3cc4a7(0x1ac)]=function(){const _0x22c953=_0x3cc4a7,_0x514b54=VisuMZ[_0x22c953(0x17a)][_0x22c953(0x171)][_0x22c953(0x1a1)],_0x31f072=SceneManager[_0x22c953(0x28f)];this[_0x22c953(0x2a3)]=this[_0x22c953(0x1b8)][_0x22c953(0x27d)]/(BattleManager[_0x22c953(0x258)]||0x1),Window_StatusBase[_0x22c953(0x1d1)][_0x22c953(0x26b)](),setTimeout(_0x31f072[_0x22c953(0x2b5)][_0x22c953(0x163)](_0x31f072),_0x514b54[_0x22c953(0x110)]),setTimeout(_0x31f072['createVictoryAftermathWindows'][_0x22c953(0x163)](_0x31f072),_0x514b54[_0x22c953(0x207)]);},BattleManager[_0x3cc4a7(0x1e7)]=function(){const _0x28b9f6=_0x3cc4a7;for(;;){this[_0x28b9f6(0x1b5)]++;if(this['_victoryActorIndex']>=$gameParty[_0x28b9f6(0x2b4)]())return null;const _0x13a203=$gameParty[_0x28b9f6(0x1a6)]()[this['_victoryActorIndex']],_0x2fd7cc=this[_0x28b9f6(0x2a5)][this[_0x28b9f6(0x1b5)]];if(_0x13a203[_0x28b9f6(0x17c)]!==_0x2fd7cc[_0x28b9f6(0x17c)])return _0x13a203;}return null;},VisuMZ[_0x3cc4a7(0x17a)][_0x3cc4a7(0x23d)]=Game_System[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x221)],Game_System[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x221)]=function(){const _0x517e74=_0x3cc4a7;VisuMZ[_0x517e74(0x17a)]['Game_System_initialize'][_0x517e74(0xf8)](this),this[_0x517e74(0x1be)]();},Game_System[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1be)]=function(){this['_victoryAftermathSettings']={'bypassVictoryMusic':![],'bypassVictoryPhase':![],'bypassVictoryMotion':![]};},Game_System[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x165)]=function(){const _0x426b1a=_0x3cc4a7;if(this[_0x426b1a(0x294)]===undefined)this[_0x426b1a(0x1be)]();return this['_victoryAftermathSettings'];},VisuMZ[_0x3cc4a7(0x17a)]['Game_Actor_setup']=Game_Actor['prototype'][_0x3cc4a7(0x1b1)],Game_Actor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1b1)]=function(_0x2cb57d){const _0x4817be=_0x3cc4a7;VisuMZ[_0x4817be(0x17a)][_0x4817be(0x133)][_0x4817be(0xf8)](this,_0x2cb57d),this[_0x4817be(0x201)]();},Game_Actor['prototype']['setupVictoryAftermathQuotes']=function(){const _0x5d3d51=_0x3cc4a7;this[_0x5d3d51(0x1e1)]=[],this[_0x5d3d51(0x2ac)]=[];const _0x439076=this['actor']()[_0x5d3d51(0x194)];_0x439076[_0x5d3d51(0x25a)](/<LEVEL UP (?:QUOTE|QUOTES)>\s*([\s\S]*)\s*<\/LEVEL UP (?:QUOTE|QUOTES)>/i)&&(this[_0x5d3d51(0x1e1)]=String(RegExp['$1'])[_0x5d3d51(0x1e6)](/<NEW QUOTE>[\r\n]+/i)),_0x439076[_0x5d3d51(0x25a)](/<NEW SKILL (?:QUOTE|QUOTES)>\s*([\s\S]*)\s*<\/NEW SKILL (?:QUOTE|QUOTES)>/i)&&(this[_0x5d3d51(0x2ac)]=String(RegExp['$1'])[_0x5d3d51(0x1e6)](/<NEW QUOTE>[\r\n]+/i));},Game_Actor['prototype'][_0x3cc4a7(0x1f6)]=function(){const _0x21ad3d=_0x3cc4a7;if(this[_0x21ad3d(0x1e1)]===undefined)this[_0x21ad3d(0x201)]();return this[_0x21ad3d(0x1e1)];},Game_Actor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x24f)]=function(){const _0xd262cb=_0x3cc4a7;if(this[_0xd262cb(0x2ac)]===undefined)this[_0xd262cb(0x201)]();return this[_0xd262cb(0x2ac)];},Game_Actor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x181)]=function(){const _0x56808c=_0x3cc4a7;if(this[_0x56808c(0x1ab)]())return 0x1;const _0x43c5d9=this[_0x56808c(0x1c2)]()-this[_0x56808c(0x24b)](),_0x555c6b=this[_0x56808c(0x236)]()-this[_0x56808c(0x24b)]();return(_0x555c6b/_0x43c5d9)[_0x56808c(0x1f2)](0x0,0x1);},VisuMZ[_0x3cc4a7(0x17a)]['Game_Actor_shouldDisplayLevelUp']=Game_Actor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x10b)],Game_Actor[_0x3cc4a7(0x1d1)]['shouldDisplayLevelUp']=function(){const _0x5aafab=_0x3cc4a7;return SceneManager[_0x5aafab(0x28e)]()?![]:VisuMZ[_0x5aafab(0x17a)][_0x5aafab(0x271)][_0x5aafab(0xf8)](this);},Game_Actor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x12a)]=function(){const _0x2e3c64=_0x3cc4a7,_0x1f1fd6=JsonEx[_0x2e3c64(0x243)](this);return _0x1f1fd6['_victoryAftermathCopy']=!![],_0x1f1fd6;},VisuMZ['VictoryAftermath']['Game_Actor_isBattleMember']=Game_Actor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x166)],Game_Actor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x166)]=function(){const _0x53b03a=_0x3cc4a7;return this[_0x53b03a(0x288)]?!![]:VisuMZ['VictoryAftermath'][_0x53b03a(0x27c)][_0x53b03a(0xf8)](this);},VisuMZ[_0x3cc4a7(0x17a)][_0x3cc4a7(0x100)]=Game_Actor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x197)],Game_Actor['prototype'][_0x3cc4a7(0x197)]=function(){const _0x24bbae=_0x3cc4a7;this[_0x24bbae(0x25d)]()?this[_0x24bbae(0x235)](_0x24bbae(0x2ae)):VisuMZ[_0x24bbae(0x17a)]['Game_Actor_performVictory'][_0x24bbae(0xf8)](this);},Game_Actor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x25d)]=function(){const _0x460757=_0x3cc4a7;return $gameSystem['victoryAftermathSettings']()[_0x460757(0x11f)]||$gameSystem['victoryAftermathSettings']()[_0x460757(0x2a2)];},Scene_Battle[_0x3cc4a7(0x1d1)]['hideWindowsForVictoryAftermath']=function(){const _0x56bf9c=_0x3cc4a7;if(this[_0x56bf9c(0x1e8)][_0x56bf9c(0x257)]())return setTimeout(this[_0x56bf9c(0x2b5)][_0x56bf9c(0x163)](this),0x7d0);if(!SceneManager[_0x56bf9c(0x28e)]())return;this['setVisibleUI'](![]),this[_0x56bf9c(0x286)](),this['hideSubInputWindows'](),this[_0x56bf9c(0x246)]['y']=Graphics[_0x56bf9c(0x24c)]*0xa;},Scene_Battle[_0x3cc4a7(0x1d1)]['createVictoryAftermathWindows']=function(){const _0x206478=_0x3cc4a7;if(this[_0x206478(0x1e8)]['isCollapsing']())return setTimeout(this[_0x206478(0x277)][_0x206478(0x163)](this),0x7d0);this[_0x206478(0x224)]=[],this['createVictorySteps'](),this[_0x206478(0x291)](),this['updateVictorySteps']();},Scene_Battle[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x263)]=function(){const _0x451d0b=_0x3cc4a7;this[_0x451d0b(0x222)]=[],this[_0x451d0b(0x15b)](),this['createVictoryStepLevelUps']();},Scene_Battle[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x15b)]=function(){const _0x2b65b8=_0x3cc4a7;this[_0x2b65b8(0x222)]['push']('rewards');},Scene_Battle['prototype']['createVictoryStepLevelUps']=function(){const _0x248a2f=_0x3cc4a7;if(!this['isVictoryLevelUpPhaseEnabled']())return;for(const _0x1a42af of $gameParty[_0x248a2f(0x1a6)]()){if(!_0x1a42af)continue;const _0x9bf5ad=BattleManager[_0x248a2f(0x211)][_0x1a42af[_0x248a2f(0x292)]()];_0x1a42af[_0x248a2f(0x17c)]>_0x9bf5ad[_0x248a2f(0x17c)]&&this[_0x248a2f(0x10d)](_0x1a42af);}},Scene_Battle[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x10d)]=function(_0x33a654){const _0xa460d3=_0x3cc4a7;Imported['VisuMZ_1_MainMenuCore']&&Window_VictoryLevelUp[_0xa460d3(0x282)]&&ImageManager[_0xa460d3(0x20e)](_0x33a654['getMenuImage']()),this[_0xa460d3(0x222)]['push']('levelups');},Scene_Battle[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x195)]=function(){const _0x23072d=_0x3cc4a7;return VisuMZ[_0x23072d(0x17a)]['Settings'][_0x23072d(0x107)][_0x23072d(0x2b6)];},Scene_Battle[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x203)]=function(){const _0x2010e3=_0x3cc4a7;this[_0x2010e3(0x206)]=this[_0x2010e3(0x222)][_0x2010e3(0x259)]()||'',this[_0x2010e3(0x1e9)]();},Scene_Battle[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1e9)]=function(){const _0x12ff65=_0x3cc4a7;switch(this[_0x12ff65(0x206)][_0x12ff65(0x289)]()[_0x12ff65(0x16e)]()){case _0x12ff65(0x255):this[_0x12ff65(0x1fb)](),this[_0x12ff65(0x155)][_0x12ff65(0x250)](BattleManager[_0x12ff65(0x258)]);break;case _0x12ff65(0x146):this[_0x12ff65(0x13b)](),this['setupVictoryLevelUpNextActor'](),this[_0x12ff65(0x155)][_0x12ff65(0x250)](0x0);break;default:this[_0x12ff65(0x15f)]();break;}this[_0x12ff65(0x1b2)](this[_0x12ff65(0x155)]);},Scene_Battle[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x115)]=function(){const _0x3617f7=_0x3cc4a7,_0x69e968=Window_Base[_0x3617f7(0x1d1)]['lineHeight'](),_0xe526aa=Math['round'](Graphics[_0x3617f7(0x1fe)]/0x2)-0x64,_0x2e47ab=Math[_0x3617f7(0x16b)](Graphics[_0x3617f7(0x24c)]-_0x69e968*1.25),_0xbfb24f=Math[_0x3617f7(0x16b)](Graphics[_0x3617f7(0x1fe)]/0x2),_0x1f40c4=_0x69e968;return new Rectangle(_0xe526aa,_0x2e47ab,_0xbfb24f,_0x1f40c4);},Scene_Battle['prototype'][_0x3cc4a7(0x1d9)]=function(){const _0x78cb46=_0x3cc4a7,_0x3381f3=0x0,_0xf3de44=0x0,_0x3c3a8e=Graphics[_0x78cb46(0x1fe)],_0x4281de=Graphics[_0x78cb46(0x24c)];return new Rectangle(_0x3381f3,_0xf3de44,_0x3c3a8e,_0x4281de);},Scene_Battle[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x291)]=function(){const _0x4d85a0=_0x3cc4a7;if(this[_0x4d85a0(0x155)])return;const _0x5c7079=this['victoryContinueMessageWindowRect'](),_0x19bfce=new Window_VictoryContinueMessage(_0x5c7079);this['addChild'](_0x19bfce),this[_0x4d85a0(0x224)][_0x4d85a0(0x283)](_0x19bfce),this[_0x4d85a0(0x155)]=_0x19bfce;},Scene_Battle[_0x3cc4a7(0x1d1)]['createVictoryRewardsWindow']=function(){const _0x58df5e=_0x3cc4a7;if(this['_victoryRewardsWindow'])return;const _0x14a1ab=this[_0x58df5e(0x1d9)](),_0x458ddc=new Window_VictoryRewards(_0x14a1ab);this[_0x58df5e(0x1b2)](_0x458ddc),this[_0x58df5e(0x224)]['push'](_0x458ddc),this[_0x58df5e(0x273)]=_0x458ddc;},Scene_Battle[_0x3cc4a7(0x1d1)]['createVictoryLevelUpWindow']=function(){const _0x3245ba=_0x3cc4a7;if(this[_0x3245ba(0x265)])return;const _0x4fb6a3=this[_0x3245ba(0x1d9)](),_0x100cc3=new Window_VictoryLevelUp(_0x4fb6a3);this['addChild'](_0x100cc3),this[_0x3245ba(0x224)][_0x3245ba(0x283)](_0x100cc3),this[_0x3245ba(0x265)]=_0x100cc3;},Scene_Battle[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x134)]=function(){const _0x26364d=_0x3cc4a7,_0x8ddae=BattleManager[_0x26364d(0x1e7)]();this[_0x26364d(0x265)][_0x26364d(0x24d)](_0x8ddae),Imported[_0x26364d(0x253)]&&_0x8ddae[_0x26364d(0x11a)](_0x26364d(0x1a4));},Scene_Battle['prototype']['finishVictoryPhase']=function(){const _0x76488f=_0x3cc4a7;BattleManager[_0x76488f(0x1ca)](),BattleManager[_0x76488f(0x143)]=![];};Imported[_0x3cc4a7(0x27a)]&&(VisuMZ[_0x3cc4a7(0x17a)][_0x3cc4a7(0x26d)]=Scene_Battle[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1d6)],Scene_Battle[_0x3cc4a7(0x1d1)]['allowUpdateBattleAniSpeed']=function(){const _0x58bacd=_0x3cc4a7;if(BattleManager[_0x58bacd(0x1bb)]())return![];return VisuMZ['VictoryAftermath'][_0x58bacd(0x26d)][_0x58bacd(0xf8)](this);});;Scene_Battle[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x26e)]=function(){const _0x2a7832=_0x3cc4a7;return this['_victoryContinueWindow']&&this[_0x2a7832(0x155)][_0x2a7832(0x215)]();},VisuMZ['VictoryAftermath'][_0x3cc4a7(0x168)]=Scene_Battle['prototype'][_0x3cc4a7(0x198)],Scene_Battle['prototype'][_0x3cc4a7(0x198)]=function(){const _0x256d4f=_0x3cc4a7;VisuMZ[_0x256d4f(0x17a)]['Scene_Battle_update'][_0x256d4f(0xf8)](this),this['updateVictoryPhase']();},Scene_Battle[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x22b)]=function(){const _0x34716c=_0x3cc4a7;if(!BattleManager[_0x34716c(0x1bb)]())return;if(!this[_0x34716c(0x26e)]())return;(Input['isRepeated']('ok')||Input['isRepeated'](_0x34716c(0x29d))||TouchInput[_0x34716c(0x204)]())&&(Input[_0x34716c(0x26f)](),TouchInput['clear'](),this[_0x34716c(0x203)]());},Sprite_Enemy['prototype'][_0x3cc4a7(0x257)]=function(){const _0x12f176=_0x3cc4a7,_0x45ed0c=VisuMZ[_0x12f176(0x17a)][_0x12f176(0x171)][_0x12f176(0x1a1)];if(this[_0x12f176(0x249)]===_0x12f176(0x232)){if(_0x45ed0c[_0x12f176(0x1de)]!==undefined)return _0x45ed0c[_0x12f176(0x1de)];}else{if(this['_effectType']===_0x12f176(0x25e)){if(_0x45ed0c[_0x12f176(0x22e)]!==undefined)return _0x45ed0c[_0x12f176(0x22e)];}}return[_0x12f176(0x232),_0x12f176(0x25e)][_0x12f176(0x15c)]();},Sprite_Battler[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x257)]=function(){return![];},Spriteset_Battle['prototype'][_0x3cc4a7(0x257)]=function(){const _0x5ba0c3=_0x3cc4a7;return this['battlerSprites']()[_0x5ba0c3(0x296)](_0x2b8f80=>_0x2b8f80[_0x5ba0c3(0x257)]());};function Sprite_VictoryGauge(){const _0x2df7a2=_0x3cc4a7;this[_0x2df7a2(0x221)](...arguments);}Sprite_VictoryGauge['prototype']=Object[_0x3cc4a7(0x244)](Sprite[_0x3cc4a7(0x1d1)]),Sprite_VictoryGauge[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1eb)]=Sprite_VictoryGauge,Sprite_VictoryGauge['prototype'][_0x3cc4a7(0x221)]=function(_0x36c76d,_0x4e13ee,_0x3e7706){const _0x3a86a3=_0x3cc4a7;this[_0x3a86a3(0x157)]=_0x36c76d,this[_0x3a86a3(0x299)]=_0x4e13ee,this['_fullWidth']=_0x3e7706,Sprite[_0x3a86a3(0x1d1)][_0x3a86a3(0x221)][_0x3a86a3(0xf8)](this),this[_0x3a86a3(0x117)](),this['createBitmap'](),this[_0x3a86a3(0x176)](),this[_0x3a86a3(0x279)]();},Sprite_VictoryGauge[_0x3cc4a7(0x1d1)]['initMembers']=function(){const _0x431d78=_0x3cc4a7;this[_0x431d78(0x29b)]=BattleManager[_0x431d78(0x258)],this['_currentlevel']=this[_0x431d78(0x18d)]()[_0x431d78(0x17c)],this[_0x431d78(0x172)]=![];},Sprite_VictoryGauge['prototype'][_0x3cc4a7(0x11b)]=function(){const _0x26a115=_0x3cc4a7;this[_0x26a115(0x192)]=new Bitmap(this[_0x26a115(0x1e3)],this['lineHeight']()*0x2);},Sprite_VictoryGauge[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1ef)]=function(){const _0x28b226=_0x3cc4a7;return Window_Base[_0x28b226(0x1d1)]['lineHeight']();},Sprite_VictoryGauge['prototype'][_0x3cc4a7(0x18d)]=function(){const _0x27d663=_0x3cc4a7;return BattleManager['_victoryTempActorsA'][this[_0x27d663(0x157)]];},Sprite_VictoryGauge[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x198)]=function(){const _0xd37b2b=_0x3cc4a7;Sprite[_0xd37b2b(0x1d1)]['update'][_0xd37b2b(0xf8)](this),this[_0xd37b2b(0x1c8)](),this[_0xd37b2b(0x279)]();},Sprite_VictoryGauge[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1c8)]=function(){const _0x4c3da6=_0x3cc4a7;if(this[_0x4c3da6(0x29b)]<=0x0)return;const _0x5d643d=this[_0x4c3da6(0x18d)]();this[_0x4c3da6(0x29b)]--;this[_0x4c3da6(0x2a7)]()&&(this[_0x4c3da6(0x29b)]=0x0);if(this['_duration']<=0x0){const _0x34305a=$gameActors[_0x4c3da6(0x18d)](_0x5d643d[_0x4c3da6(0x270)]);_0x5d643d[_0x4c3da6(0x23a)](_0x34305a[_0x4c3da6(0x236)](),![]);}else _0x5d643d[_0x4c3da6(0x135)](BattleManager[_0x4c3da6(0x2a3)]);this[_0x4c3da6(0x1ba)]!==_0x5d643d[_0x4c3da6(0x17c)]&&(this['_currentlevel']=_0x5d643d[_0x4c3da6(0x17c)],this['_showLevelUp']=!![],SoundManager[_0x4c3da6(0x287)]()),this[_0x4c3da6(0x176)]();},Game_Actor['prototype'][_0x3cc4a7(0x135)]=function(_0x670455){const _0x34aa5f=_0x3cc4a7,_0x14a716=this['currentExp']()+_0x670455*this[_0x34aa5f(0x1c5)]();this[_0x34aa5f(0x23a)](_0x14a716,this['shouldDisplayLevelUp']());},Sprite_VictoryGauge[_0x3cc4a7(0x1d1)]['isFastForwarded']=function(){const _0x5f0f77=_0x3cc4a7;return SceneManager[_0x5f0f77(0x28f)][_0x5f0f77(0x26e)]();},Sprite_VictoryGauge[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x279)]=function(){const _0xa3c305=_0x3cc4a7;this[_0xa3c305(0x205)]=this[_0xa3c305(0x299)][_0xa3c305(0x254)];},Sprite_VictoryGauge[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x176)]=function(){const _0x3771cb=_0x3cc4a7;this['bitmap'][_0x3771cb(0x26f)](),this['resetFontSettings'](),this[_0x3771cb(0xfe)](),this['drawActorLevel'](),this['drawActorAdditionalRewards'](),this[_0x3771cb(0x1a3)](),this[_0x3771cb(0xf3)]();},Sprite_VictoryGauge['prototype'][_0x3cc4a7(0x21c)]=function(){const _0x217837=_0x3cc4a7;this[_0x217837(0x192)][_0x217837(0x111)]=$gameSystem['mainFontFace'](),this[_0x217837(0x192)][_0x217837(0x251)]=$gameSystem['mainFontSize'](),this[_0x217837(0x192)][_0x217837(0x196)]=ColorManager[_0x217837(0x1ff)]();},Sprite_VictoryGauge[_0x3cc4a7(0x1d1)]['drawActorName']=function(){const _0x3cd569=_0x3cc4a7;this[_0x3cd569(0x21c)]();const _0x4a5a7c=this[_0x3cd569(0x1ef)](),_0x41fa10=Math[_0x3cd569(0x16b)](_0x4a5a7c/0x2),_0x20f5ea=0x0,_0x3ffe6a=this[_0x3cd569(0x192)][_0x3cd569(0x1fe)]-_0x4a5a7c,_0x18dbc0='left',_0x20b3c1=this[_0x3cd569(0x18d)]()[_0x3cd569(0x112)]();this[_0x3cd569(0x192)][_0x3cd569(0x218)](_0x20b3c1,_0x41fa10,_0x20f5ea,_0x3ffe6a,_0x4a5a7c,_0x18dbc0);},Sprite_VictoryGauge['prototype'][_0x3cc4a7(0x298)]=function(){const _0x362b5d=_0x3cc4a7;this['resetFontSettings']();const _0x393119=this[_0x362b5d(0x1ef)](),_0x4bae2c=Math['round'](_0x393119/0x2),_0x351ca4=0x0,_0x5afa9a=this['bitmap']['width']-_0x393119,_0x1eb825=this[_0x362b5d(0x14d)]()===''?_0x362b5d(0x182):'center',_0x5655d6=TextManager[_0x362b5d(0x2a1)][_0x362b5d(0x1b3)](this[_0x362b5d(0x18d)]()[_0x362b5d(0x17c)]);this['_showLevelUp']&&(this[_0x362b5d(0x192)][_0x362b5d(0x196)]=ColorManager[_0x362b5d(0x2ab)]()),this['bitmap']['drawText'](_0x5655d6,_0x4bae2c,_0x351ca4,_0x5afa9a,_0x393119,_0x1eb825);},Sprite_VictoryGauge[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x14d)]=function(){const _0x8f3d31=_0x3cc4a7,_0x1d4235=$gameParty[_0x8f3d31(0x175)]()[this[_0x8f3d31(0x157)]];if(!_0x1d4235)return'';if(Imported[_0x8f3d31(0x109)]&&VisuMZ[_0x8f3d31(0x101)][_0x8f3d31(0x171)][_0x8f3d31(0x210)][_0x8f3d31(0x120)])return VisuMZ['Template'][_0x8f3d31(0x171)][_0x8f3d31(0x210)][_0x8f3d31(0x237)][_0x8f3d31(0x1b3)](_0x1d4235[_0x8f3d31(0x260)](),TextManager[_0x8f3d31(0x1a8)],TextManager['jobPointsFull']);if(Imported[_0x8f3d31(0x23f)]){const _0x31a14b=VisuMZ[_0x8f3d31(0x190)]['Settings'];if(_0x31a14b[_0x8f3d31(0x248)][_0x8f3d31(0x120)])return _0x31a14b[_0x8f3d31(0x248)][_0x8f3d31(0x237)][_0x8f3d31(0x1b3)](_0x1d4235[_0x8f3d31(0x14f)](),TextManager[_0x8f3d31(0x202)],TextManager[_0x8f3d31(0x241)]);if(_0x31a14b[_0x8f3d31(0x210)]['AftermathActorDisplay'])return _0x31a14b['JobPoints'][_0x8f3d31(0x237)][_0x8f3d31(0x1b3)](_0x1d4235[_0x8f3d31(0x260)](),TextManager['jobPointsAbbr'],TextManager[_0x8f3d31(0x230)]);}if(Imported[_0x8f3d31(0x193)]){const _0x5db56f=VisuMZ['SkillLearnSystem'][_0x8f3d31(0x171)];if(_0x5db56f[_0x8f3d31(0x25c)][_0x8f3d31(0x120)])return _0x5db56f[_0x8f3d31(0x25c)][_0x8f3d31(0x237)][_0x8f3d31(0x1b3)](_0x1d4235[_0x8f3d31(0x1e2)](),TextManager[_0x8f3d31(0x26c)],TextManager[_0x8f3d31(0x191)]);if(_0x5db56f[_0x8f3d31(0x216)][_0x8f3d31(0x120)])return _0x5db56f[_0x8f3d31(0x216)][_0x8f3d31(0x237)][_0x8f3d31(0x1b3)](_0x1d4235['earnedSkillPoints'](),TextManager[_0x8f3d31(0x223)],TextManager['skillPointsFull']);}return'';},Sprite_VictoryGauge[_0x3cc4a7(0x1d1)]['drawActorAdditionalRewards']=function(){const _0x74a8c2=_0x3cc4a7;this['resetFontSettings']();const _0x75e8e1=this['lineHeight'](),_0xa57ad3=Math[_0x74a8c2(0x16b)](_0x75e8e1/0x2),_0x2f54c5=0x0,_0x14d1d6=this[_0x74a8c2(0x192)]['width']-_0x75e8e1,_0x51272a='right';let _0x283f33=this[_0x74a8c2(0x14d)]();this[_0x74a8c2(0x192)]['drawText'](_0x283f33,_0xa57ad3,_0x2f54c5,_0x14d1d6,_0x75e8e1,_0x51272a);},Sprite_VictoryGauge[_0x3cc4a7(0x1d1)]['drawExpGauge']=function(){const _0x1e3770=_0x3cc4a7,_0x51946f=this[_0x1e3770(0x1ef)](),_0x1462bb=this[_0x1e3770(0x192)][_0x1e3770(0x1fe)]-_0x51946f,_0x316487=Sprite_Gauge[_0x1e3770(0x1d1)][_0x1e3770(0x284)](),_0x57a61a=Math['round'](_0x51946f/0x2),_0x121639=_0x51946f*0x2-_0x316487-0x2,_0x47561f=Math[_0x1e3770(0x156)]((_0x1462bb-0x2)*this[_0x1e3770(0x18d)]()['expRate']()),_0x7878f=_0x316487-0x2,_0x14a5f1=this[_0x1e3770(0x161)](),_0x5ea27d=this[_0x1e3770(0x1b7)](),_0x5a34a0=this[_0x1e3770(0x27e)]();if(Imported[_0x1e3770(0x1a0)]){const _0x48e0d2=VisuMZ[_0x1e3770(0x14c)][_0x1e3770(0x171)]['battlerEXPStyle']??_0x1e3770(0x138);this[_0x1e3770(0x192)][_0x1e3770(0x11c)](_0x48e0d2,_0x57a61a,_0x121639,_0x1462bb,_0x316487,this[_0x1e3770(0x18d)]()[_0x1e3770(0x181)](),_0x14a5f1,_0x5ea27d,_0x5a34a0);}else this[_0x1e3770(0x192)][_0x1e3770(0x1cc)](_0x57a61a,_0x121639,_0x1462bb,_0x316487,_0x14a5f1),this[_0x1e3770(0x192)][_0x1e3770(0x1dc)](_0x57a61a+0x1,_0x121639+0x1,_0x47561f,_0x7878f,_0x5ea27d,_0x5a34a0);},Sprite_VictoryGauge[_0x3cc4a7(0x1d1)]['gaugeBackColor']=function(){return ColorManager['gaugeBackColor']();},Sprite_VictoryGauge[_0x3cc4a7(0x1d1)]['gaugeColor1']=function(){const _0x5d2b6e=_0x3cc4a7;return this['actor']()[_0x5d2b6e(0x1ab)]()?Imported[_0x5d2b6e(0x28a)]?ColorManager[_0x5d2b6e(0x19a)]():ColorManager['textColor'](0xe):Imported[_0x5d2b6e(0x28a)]?ColorManager[_0x5d2b6e(0x2aa)]():ColorManager['textColor'](0x1e);},Sprite_VictoryGauge['prototype'][_0x3cc4a7(0x27e)]=function(){const _0x3f31f7=_0x3cc4a7;return this[_0x3f31f7(0x18d)]()[_0x3f31f7(0x1ab)]()?Imported[_0x3f31f7(0x28a)]?ColorManager[_0x3f31f7(0x297)]():ColorManager[_0x3f31f7(0x196)](0x6):Imported[_0x3f31f7(0x28a)]?ColorManager['expGaugeColor2']():ColorManager['textColor'](0x1f);},Sprite_VictoryGauge[_0x3cc4a7(0x1d1)][_0x3cc4a7(0xf3)]=function(){const _0xca8573=_0x3cc4a7;this[_0xca8573(0x21c)]();const _0x47c3b4=this[_0xca8573(0x1ef)](),_0x2f299d=_0x47c3b4,_0x50b855=_0x47c3b4;let _0xc983af=this[_0xca8573(0x192)][_0xca8573(0x1fe)]-_0x47c3b4*0x2;const _0x2619b5=this['actor']();let _0x19e170=Math[_0xca8573(0x16b)](_0x2619b5[_0xca8573(0x236)]()-_0x2619b5[_0xca8573(0x24b)]()),_0x8ed931='/'+Math[_0xca8573(0x16b)](_0x2619b5[_0xca8573(0x1c2)]()-_0x2619b5['currentLevelExp']());Imported[_0xca8573(0x28a)]&&VisuMZ[_0xca8573(0x200)][_0xca8573(0x171)][_0xca8573(0x167)][_0xca8573(0x1bf)]&&(_0x19e170=VisuMZ[_0xca8573(0x18b)](_0x19e170),_0x8ed931=VisuMZ[_0xca8573(0x18b)](_0x8ed931));this['_showLevelUp']?(this['bitmap'][_0xca8573(0x196)]=ColorManager[_0xca8573(0x240)](),this['bitmap']['drawText'](TextManager[_0xca8573(0x234)],_0x2f299d,_0x50b855,_0xc983af,_0x47c3b4,_0xca8573(0x29a))):this[_0xca8573(0x192)][_0xca8573(0x218)](TextManager[_0xca8573(0x27d)],_0x2f299d,_0x50b855,_0xc983af,_0x47c3b4,_0xca8573(0x29a));this['resetFontSettings']();if(_0x2619b5[_0xca8573(0x1ab)]()){this[_0xca8573(0x192)][_0xca8573(0x218)](_0xca8573(0x1c1),_0x2f299d,_0x50b855,_0xc983af,_0x47c3b4,_0xca8573(0x182));return;}this[_0xca8573(0x192)][_0xca8573(0x251)]-=0x8,this[_0xca8573(0x192)][_0xca8573(0x196)]=ColorManager[_0xca8573(0x196)](0x8),this[_0xca8573(0x192)]['drawText'](_0x8ed931,_0x2f299d,_0x50b855,_0xc983af,_0x47c3b4,_0xca8573(0x182)),_0xc983af-=this['bitmap'][_0xca8573(0x209)](_0x8ed931),this['resetFontSettings'](),this['bitmap'][_0xca8573(0x218)](_0x19e170,_0x2f299d,_0x50b855,_0xc983af,_0x47c3b4,'right');};function Window_VictoryContinueMessage(){this['initialize'](...arguments);}Window_VictoryContinueMessage[_0x3cc4a7(0x1d1)]=Object[_0x3cc4a7(0x244)](Window_Base[_0x3cc4a7(0x1d1)]),Window_VictoryContinueMessage[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1eb)]=Window_VictoryContinueMessage,Window_VictoryContinueMessage[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x221)]=function(_0x367352){const _0x582ecb=_0x3cc4a7;Window_Base[_0x582ecb(0x1d1)][_0x582ecb(0x221)][_0x582ecb(0xf8)](this,_0x367352),this[_0x582ecb(0x20d)](0x2),this[_0x582ecb(0x176)]();},Window_VictoryContinueMessage[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x250)]=function(_0x355a3){const _0x42dddd=_0x3cc4a7;this[_0x42dddd(0x104)]=_0x355a3,this[_0x42dddd(0x254)]=0x0;},Window_VictoryContinueMessage[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1c9)]=function(){const _0x27f0a4=_0x3cc4a7;this[_0x27f0a4(0xfb)]=0x0;},Window_VictoryContinueMessage['prototype'][_0x3cc4a7(0x198)]=function(){const _0x54cdf2=_0x3cc4a7;Window_Base['prototype']['update'][_0x54cdf2(0xf8)](this),this[_0x54cdf2(0x290)]();},Window_VictoryContinueMessage[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x290)]=function(){const _0x289b88=_0x3cc4a7;this[_0x289b88(0x104)]>0x0&&this[_0x289b88(0x2a7)]()&&(this[_0x289b88(0x104)]=0x0,Input[_0x289b88(0x26f)](),TouchInput[_0x289b88(0x26f)]());if(this[_0x289b88(0x104)]-->0x0)return;this[_0x289b88(0x254)]+=Window_VictoryRewards[_0x289b88(0x121)];},Window_VictoryContinueMessage[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x2a7)]=function(){const _0x253b4d=_0x3cc4a7;return Input['isPressed']('ok')||Input[_0x253b4d(0x15e)](_0x253b4d(0x29d))||TouchInput[_0x253b4d(0x15e)]();},Window_VictoryContinueMessage['prototype'][_0x3cc4a7(0x176)]=function(){const _0x374da8=_0x3cc4a7;this[_0x374da8(0x1e5)][_0x374da8(0x26f)]();const _0x37a54c=TextManager[_0x374da8(0x1e0)];let _0x2f3eb1=TextManager[_0x374da8(0x1df)],_0x30b4ac=TextManager[_0x374da8(0x1b9)];Imported[_0x374da8(0x28a)]&&(_0x2f3eb1=TextManager[_0x374da8(0x1a2)]('ok'),_0x30b4ac=TextManager[_0x374da8(0x1a2)](_0x374da8(0x29d)));const _0x441e71=_0x37a54c[_0x374da8(0x1b3)](_0x2f3eb1,_0x30b4ac),_0x5b5162=this[_0x374da8(0x16a)](_0x441e71)[_0x374da8(0x1fe)],_0xfcd246=Math[_0x374da8(0x16b)]((this['innerWidth']-_0x5b5162)/0x2);this[_0x374da8(0x128)](_0x441e71,_0xfcd246,0x0,_0x5b5162);},Window_VictoryContinueMessage[_0x3cc4a7(0x1d1)]['isContinueReady']=function(){const _0x1772d6=_0x3cc4a7;return this[_0x1772d6(0x104)]<=0x0;};function Window_VictoryRewards(){this['initialize'](...arguments);}Window_VictoryRewards['_opacitySpeed']=VisuMZ[_0x3cc4a7(0x17a)][_0x3cc4a7(0x171)]['General'][_0x3cc4a7(0x276)],Window_VictoryRewards[_0x3cc4a7(0x1d1)]=Object['create'](Window_StatusBase[_0x3cc4a7(0x1d1)]),Window_VictoryRewards[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1eb)]=Window_VictoryRewards,Window_VictoryRewards['prototype'][_0x3cc4a7(0x221)]=function(_0x504d9a){const _0x250383=_0x3cc4a7;Window_StatusBase[_0x250383(0x1d1)][_0x250383(0x221)][_0x250383(0xf8)](this,_0x504d9a),this['setBackgroundType'](0x2),this[_0x250383(0x254)]=0x0,this['refresh']();},Window_VictoryRewards[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1c9)]=function(){const _0x42bbba=_0x3cc4a7;this[_0x42bbba(0xfb)]=0x0;},Window_VictoryRewards[_0x3cc4a7(0x1d1)]['update']=function(){const _0x79898e=_0x3cc4a7;Window_StatusBase[_0x79898e(0x1d1)][_0x79898e(0x198)]['call'](this),this['updateContentsOpacity']();},Window_VictoryRewards['prototype']['updateContentsOpacity']=function(){const _0x4fc194=_0x3cc4a7;SceneManager['_scene'][_0x4fc194(0x206)]===_0x4fc194(0x255)?this[_0x4fc194(0x254)]+=Window_VictoryRewards[_0x4fc194(0x121)]:this[_0x4fc194(0x254)]-=Window_VictoryRewards['_opacitySpeed'];},Window_VictoryRewards[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x2a8)]=function(){const _0x56e8d2=_0x3cc4a7;return VisuMZ[_0x56e8d2(0x17a)][_0x56e8d2(0x171)][_0x56e8d2(0x1a1)][_0x56e8d2(0x12c)];},Window_VictoryRewards[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x176)]=function(){const _0x49d2d2=_0x3cc4a7;Window_StatusBase['prototype'][_0x49d2d2(0x176)][_0x49d2d2(0xf8)](this),this[_0x49d2d2(0x1e5)][_0x49d2d2(0x26f)](),this[_0x49d2d2(0x21c)](),this[_0x49d2d2(0x1f5)](),this['drawRewards'](),this[_0x49d2d2(0x124)](),this[_0x49d2d2(0x162)](),this['drawPartyExpGauges']();},Window_VictoryRewards[_0x3cc4a7(0x142)]=VisuMZ[_0x3cc4a7(0x17a)][_0x3cc4a7(0x171)]['General'][_0x3cc4a7(0x1bc)]??_0x3cc4a7(0x102),Window_VictoryRewards[_0x3cc4a7(0x226)]=VisuMZ[_0x3cc4a7(0x17a)]['Settings'][_0x3cc4a7(0x1a1)][_0x3cc4a7(0x252)]??_0x3cc4a7(0x147),Window_VictoryRewards[_0x3cc4a7(0x1d1)]['drawBackgroundElements']=function(){const _0x1b4ad0=_0x3cc4a7,_0x1eca29=this[_0x1b4ad0(0x1ef)](),_0x501de8=0x0,_0x8b91d5=_0x1eca29*2.5,_0x222474=Window_VictoryRewards['BG_COLOR_1'],_0x472c19=Window_VictoryRewards['BG_COLOR_2'],_0xd58f98=ColorManager[_0x1b4ad0(0x1ff)]();this[_0x1b4ad0(0x1e5)]['gradientFillRect'](_0x501de8,_0x8b91d5,this[_0x1b4ad0(0x1fe)],this['height']-_0x8b91d5-_0x1eca29*1.5,_0x222474,_0x472c19),this['contents']['fillRect'](0x0,_0x8b91d5-0x1,this[_0x1b4ad0(0x1fe)],0x2,_0xd58f98),this[_0x1b4ad0(0x1e5)][_0x1b4ad0(0x1cc)](0x0,this[_0x1b4ad0(0x24c)]-_0x1eca29*1.5-0x1,this['width'],0x2,_0xd58f98);const _0x18f705=this[_0x1b4ad0(0x2a8)](),_0x5dfd8a=_0x18f705?Math[_0x1b4ad0(0x16b)](this['width']/0x2+0x28):0x64,_0xd2019b=_0x8b91d5-_0x1eca29*0.75,_0x2f00ac=TextManager['victoryDisplayTitle'];this[_0x1b4ad0(0x208)](),this[_0x1b4ad0(0x208)](),this[_0x1b4ad0(0x218)](_0x2f00ac,_0x5dfd8a,_0xd2019b,this['width']);},Window_VictoryRewards[_0x3cc4a7(0x293)]=VisuMZ[_0x3cc4a7(0x17a)]['Settings'][_0x3cc4a7(0x2a0)],Window_VictoryRewards[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1fa)]=function(){const _0x1b2341=_0x3cc4a7;this[_0x1b2341(0x21c)]();const _0x98c102=this['mirrorContents'](),_0x298b94=this[_0x1b2341(0x1ef)](),_0x29f05e=Math['floor'](_0x298b94/0x2),_0x1e0474=_0x98c102?Math[_0x1b2341(0x16b)](this[_0x1b2341(0x1fe)]/0x2+0x28):0x64,_0x32cc97=Math['round'](_0x298b94*3.5),_0x1e374a=Math['round'](this[_0x1b2341(0x1fe)]/0x2-0x8c),_0x26da24=_0x1e374a-_0x29f05e-0x50;let _0x59d155=_0x32cc97;for(const _0x43656b of Window_VictoryRewards[_0x1b2341(0x293)]){if(!_0x43656b[_0x1b2341(0x13d)]())continue;this['drawRewardStrip'](_0x1e0474,_0x59d155,_0x1e374a),this['changeTextColor'](ColorManager[_0x1b2341(0x1da)]()),this[_0x1b2341(0x218)](_0x43656b['Text'](),_0x1e0474+_0x29f05e,_0x59d155,_0x26da24),this[_0x1b2341(0x18a)](ColorManager[_0x1b2341(0x1ff)]());const _0x23f055=_0x43656b[_0x1b2341(0x15d)]();Imported[_0x1b2341(0x275)]&&_0x43656b[_0x1b2341(0x1ad)]()===TextManager[_0x1b2341(0x125)]?this['drawCurrencyValue'](_0x23f055,TextManager['currencyUnit'],_0x1e0474+_0x29f05e,_0x59d155,_0x26da24):this[_0x1b2341(0x218)](_0x23f055,_0x1e0474+_0x29f05e,_0x59d155,_0x26da24,_0x1b2341(0x182)),_0x59d155+=_0x298b94;}},Window_VictoryRewards[_0x3cc4a7(0x23e)]=VisuMZ[_0x3cc4a7(0x17a)][_0x3cc4a7(0x171)][_0x3cc4a7(0x1a1)][_0x3cc4a7(0x19b)]??_0x3cc4a7(0x20a),Window_VictoryRewards['REWARD_STRIP_COLOR_2']=VisuMZ[_0x3cc4a7(0x17a)][_0x3cc4a7(0x171)][_0x3cc4a7(0x1a1)]['rewardStrip2']??_0x3cc4a7(0x21a),Window_VictoryRewards['prototype']['drawRewardStrip']=function(_0x3557ad,_0x6e60a2,_0x3140e9){const _0x51ef2f=_0x3cc4a7,_0x1aeafa=this['lineHeight']()-0x2,_0x1503aa=Math[_0x51ef2f(0x156)](_0x1aeafa/0x2),_0x16867f=Window_VictoryRewards[_0x51ef2f(0x23e)],_0x525a47=Window_VictoryRewards[_0x51ef2f(0x169)],_0x2df042=0x50,_0x5f1c11=_0x3140e9-_0x1503aa-_0x2df042;!ImageManager[_0x51ef2f(0x113)]&&(ImageManager[_0x51ef2f(0x113)]=new Bitmap(_0x3140e9,_0x1aeafa),ImageManager[_0x51ef2f(0x113)][_0x51ef2f(0x24a)]=this[_0x51ef2f(0x1ec)](),ImageManager[_0x51ef2f(0x113)]['drawCircle'](_0x1503aa,_0x1503aa,_0x1503aa,_0x16867f),ImageManager[_0x51ef2f(0x113)][_0x51ef2f(0x1fc)](_0x1503aa,0x0,_0x1aeafa,_0x1aeafa),ImageManager[_0x51ef2f(0x113)][_0x51ef2f(0x1cc)](_0x1503aa,0x0,_0x5f1c11,_0x1aeafa,_0x16867f),ImageManager[_0x51ef2f(0x113)]['gradientFillRect'](_0x1503aa+_0x5f1c11,0x0,_0x2df042,_0x1aeafa,_0x16867f,_0x525a47)),this[_0x51ef2f(0x1e5)][_0x51ef2f(0x225)](ImageManager[_0x51ef2f(0x113)],0x0,0x0,_0x3140e9,_0x1aeafa,_0x3557ad,_0x6e60a2,_0x3140e9,_0x1aeafa);},Window_VictoryRewards[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x124)]=function(){const _0x529f02=_0x3cc4a7;this['resetFontSettings']();if(BattleManager[_0x529f02(0x1b8)][_0x529f02(0x123)][_0x529f02(0xf7)]<=0x0)return;const _0x4fd884=this['mirrorContents'](),_0x27ff7b=this[_0x529f02(0x1ef)](),_0x5349b5=_0x4fd884?0x8c:Math[_0x529f02(0x16b)](this[_0x529f02(0x1fe)]/0x2+0x28),_0x185004=Math['round'](_0x27ff7b*0x3),_0x49195e=Math[_0x529f02(0x16b)](this[_0x529f02(0x1fe)]/0x2-0x8c),_0x2b0352=TextManager[_0x529f02(0x1f3)],_0x470c39=ColorManager[_0x529f02(0x1ff)]();this['makeFontBigger'](),this[_0x529f02(0x218)](_0x2b0352,_0x5349b5,_0x185004,_0x49195e,_0x529f02(0x29a));const _0x5ee71b=_0x4fd884?0x64:Math['round'](this['width']/0x2),_0x3cef3c=_0x185004+_0x27ff7b*1.5,_0x3d2988=Math['round'](this[_0x529f02(0x1fe)]/0x2)-0x64;this[_0x529f02(0x1e5)][_0x529f02(0x1cc)](_0x5ee71b,_0x3cef3c,_0x3d2988,0x2,_0x470c39);},Window_VictoryRewards['prototype'][_0x3cc4a7(0x162)]=function(){const _0x2b1ebb=_0x3cc4a7,_0x4861ae=this['mirrorContents'](),_0x4fc02b=this[_0x2b1ebb(0x1ef)](),_0x4454c3=_0x4861ae?0x64:Math['round'](this[_0x2b1ebb(0x1fe)]/0x2+0x28),_0x2435bb=Math['round'](_0x4fc02b*0x5),_0x315c16=Math[_0x2b1ebb(0x16b)](this[_0x2b1ebb(0x1fe)]/0x2-0x8c),_0x36dbf8=this['height']-_0x2435bb-_0x4fc02b*0x2,_0x40efc1=new Rectangle(_0x4454c3,_0x2435bb,_0x315c16,_0x36dbf8);this[_0x2b1ebb(0x164)]=new Window_VictoryItem(_0x40efc1,this),this['addChild'](this['_itemGainWindow']);},Window_VictoryRewards['prototype'][_0x3cc4a7(0x1b6)]=function(){const _0x3640c1=_0x3cc4a7;this[_0x3640c1(0x21c)]();const _0x1517ec=this[_0x3640c1(0x2a8)](),_0x433562=this[_0x3640c1(0x1ef)](),_0x4a372d=$gameParty[_0x3640c1(0x2b4)](),_0x4a4423=_0x1517ec?Math['round'](this[_0x3640c1(0x1fe)]/0x2+0x28):0x64,_0x2fbd26=this[_0x3640c1(0x24c)]-1.5-_0x433562*0x2*(_0x4a372d+0x1),_0x3a36df=Math[_0x3640c1(0x16b)](this[_0x3640c1(0x1fe)]/0x2-0x8c);let _0x50b75b=Math['round'](_0x2fbd26);if(VisuMZ[_0x3640c1(0x17a)][_0x3640c1(0x171)]['General'][_0x3640c1(0x144)]??!![])for(let _0xa030c=0x0;_0xa030c<_0x4a372d;_0xa030c++){if(!$gameParty['members']()[_0xa030c])continue;this[_0x3640c1(0x2b0)](_0x4a4423,_0x50b75b,_0x3a36df),this['placeActorGauges'](_0xa030c,_0x4a4423,_0x50b75b,_0x3a36df),_0x50b75b+=_0x433562*0x2;}},Window_VictoryRewards[_0x3cc4a7(0x116)]=VisuMZ[_0x3cc4a7(0x17a)]['Settings'][_0x3cc4a7(0x1a1)][_0x3cc4a7(0x19b)]??_0x3cc4a7(0x20a),Window_VictoryRewards[_0x3cc4a7(0x1d1)]['drawActorNameStrip']=function(_0x512990,_0x54d71d,_0x46a7fa){const _0x4271d8=_0x3cc4a7,_0x35dd0b=this['lineHeight']()-0x2,_0x54a534=Math[_0x4271d8(0x156)](_0x35dd0b/0x2),_0x3db135=Window_VictoryRewards[_0x4271d8(0x116)],_0xd2ede6=_0x46a7fa-_0x35dd0b;!ImageManager[_0x4271d8(0x179)]&&(ImageManager[_0x4271d8(0x179)]=new Bitmap(_0x46a7fa,_0x35dd0b),ImageManager[_0x4271d8(0x179)][_0x4271d8(0x24a)]=this['translucentOpacity'](),ImageManager[_0x4271d8(0x179)][_0x4271d8(0x217)](_0x54a534,_0x54a534,_0x54a534,_0x3db135),ImageManager[_0x4271d8(0x179)][_0x4271d8(0x217)](_0x54a534+_0xd2ede6,_0x54a534,_0x54a534,_0x3db135),ImageManager[_0x4271d8(0x179)][_0x4271d8(0x1fc)](_0x54a534,0x0,_0xd2ede6,_0x35dd0b),ImageManager[_0x4271d8(0x179)][_0x4271d8(0x1cc)](_0x54a534,0x0,_0xd2ede6,_0x35dd0b,_0x3db135)),this[_0x4271d8(0x1e5)][_0x4271d8(0x225)](ImageManager['victoryNameBitmap'],0x0,0x0,_0x46a7fa,_0x35dd0b,_0x512990,_0x54d71d,_0x46a7fa,_0x35dd0b);},Window_VictoryRewards['prototype'][_0x3cc4a7(0x1d3)]=function(_0x32d521,_0xf37906,_0x4c816e,_0x138b9e){const _0x32b557=_0x3cc4a7,_0x41c947=_0x32b557(0x154)[_0x32b557(0x1b3)](_0x32d521),_0x2d3212=this['createGaugeSprite'](_0x41c947,_0x32d521,_0x138b9e);_0x2d3212['move'](_0xf37906,_0x4c816e),_0x2d3212[_0x32b557(0x1cd)]();},Window_VictoryRewards[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x228)]=function(_0x27d0d3,_0x141f2b,_0x269d77){const _0x4dfca1=this['_additionalSprites'];if(_0x4dfca1[_0x27d0d3])return _0x4dfca1[_0x27d0d3];else{const _0xfbfa91=new Sprite_VictoryGauge(_0x141f2b,this,_0x269d77);return _0x4dfca1[_0x27d0d3]=_0xfbfa91,this['addInnerChild'](_0xfbfa91),_0xfbfa91;}};function _0x1f2b(){const _0x4ad3c8=['exit','min','max','LvUpVolume','playVictoryMe','Bgm','Game_Actor_setup','setupVictoryLevelUpNextActor','gainTempExp','colSpacing','scale','arrow','_showFace','SystemBypassVictoryMusic','createVictoryLevelUpWindow','drawParamDiffValue','Show','isBypassVictoryAftermathPhase','2664310oMnNKX','afterActor','BattleManager_initMembers','BG_COLOR_1','_victoryPhase','ShowExpGauges','AutoBattleAutoSkip','levelups','rgba(0,\x200,\x200,\x200.4)','createSubWindow','description','anchor','DropsSortBy','VisualGaugeStyles','getAdditionalRewardsText','pan','earnedClassPoints','ARRAYSTR','_phase','x%1','isArmor','actor%1-gauge','_victoryContinueWindow','floor','_index','_victoryBgm','HideLevelDiff','LvUpPan','createVictoryStepRewards','includes','Data','isPressed','finishVictoryPhase','playVictoryBgm','gaugeBackColor','makeItemGainWindow','bind','_itemGainWindow','victoryAftermathSettings','isBattleMember','QoL','Scene_Battle_update','REWARD_STRIP_COLOR_2','textSizeEx','round','LvFmt','gainRewards','trim','param','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Settings','_showLevelUp','quoteLevelUp','ConvertParams','members','refresh','version','quoteLevelSkill','victoryNameBitmap','VictoryAftermath','processVictoryAftermathMusic','level','activate','drawItemNumber','LvUpPitch','ShowBust','expRate','right','_autoBattle','concat','_mapBgs','_victoryLevelUpBuffer','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','levelUp','inBattle','changeTextColor','GroupDigits','getQuoteText','actor','pitch','BattleManager_isBusy','ClassChangeSystem','abilityPointsFull','bitmap','VisuMZ_2_SkillLearnSystem','note','isVictoryLevelUpPhaseEnabled','textColor','performVictory','update','ActorID','maxLvGaugeColor1','rewardStrip1','BustPosX','1258266gINReL','Bypass','FUNC','VisuMZ_3_VisualGaugeStyles','General','getInputButtonString','drawExpGauge','BattleVictoryLevelUp','playBgm','battleMembers','paramValueByName','jobPointsAbbr','BattleVictoryJS','VisuMZ_1_MessageCore','isMaxLevel','processVictoryAftermathTransition','Text','endBattle','(+%1)','isShowNew','setup','addChild','format','drawActorFace','_victoryActorIndex','drawPartyExpGauges','gaugeColor1','_rewards','victoryKeyCancel','_currentlevel','isVictoryPhase','bgColor1','addChildToBack','initVictoryAftermath','DigitGroupingStandardText','drawLevelUpQuote','MAX\x20LEVEL','nextLevelExp','faceWidth','processVictoryAftermath','finalExpRate','11MFBxjz','MessageWidth','updateExpGain','updatePadding','replayBgmAndBgs','bypassVictoryMusic','fillRect','show','getQuoteWidth','852ZRWpVA','registerCommand','prototype','parameters','placeActorGauges','isItem','findNewSkills','allowUpdateBattleAniSpeed','1395155mYiXpg','select','victoryFullScreenWindowRect','systemColor','beforeActor','gradientFillRect','LvUp','WaitRegularCollapse','victoryKeyOk','victoryContinueFmt','_victoryAftermathLevelUpQuotes','earnedAbilityPoints','_fullWidth','ActorQuotesLevelUpClear','contents','split','nextVictoryLevelUpActor','_spriteset','processVictoryStep','drawNewLearnedSkills','constructor','translucentOpacity','processVictoryAftermathParty','getVictoryAftermathBackColor','lineHeight','ActorQuotesLevelUpAdd','drawParamChanges','clamp','victoryDisplayItem','_autoBattleVictorySkip','drawBackgroundElements','levelUpQuotes','drawLevelMessage','LevelUpQuotes','ItemScene','drawRewards','createVictoryRewardsWindow','clearRect','makeTempActors','width','normalColor','CoreEngine','setupVictoryAftermathQuotes','classPointsAbbr','updateVictorySteps','isRepeated','opacity','_victoryStep','ShowDelayMS','makeFontBigger','measureTextWidth','rgba(0,\x200,\x200,\x201)','paramchangeTextColor','BustPosY','setBackgroundType','loadPicture','_colorCache','JobPoints','_victoryTempActorsA','volume','4558528xHkIVp','MaxSkills','isContinueReady','SkillPoints','drawCircle','drawText','createActorSprite','rgba(0,\x200,\x200,\x200)','getColor','resetFontSettings','makeItemList','drawParamName','isEnabled','paramValueFontSize','initialize','_victorySteps','skillPointsAbbr','_victoryWindows','blt','BG_COLOR_2','STR','createGaugeSprite','_actor','itemPadding','updateVictoryPhase','isWeapon','ExtDisplayedParams','WaitBossCollapse','NUM','jobPointsFull','status','collapse','victoryNewSkillFmt','victoryDisplayLvUp','setActionState','currentExp','AftermathText','NewSkillQuotes','isBypassVictoryAftermathMusic','changeExp','1095fbDWQN','UpdateDuration','Game_System_initialize','REWARD_STRIP_COLOR_1','VisuMZ_2_ClassChangeSystem','victoryLevelUpColor','classPointsFull','PostBattleBgs','makeDeepCopy','create','map','_statusWindow','ShowFace','ClassPoints','_effectType','paintOpacity','currentLevelExp','height','setActor','center','newSkillQuotes','setDelayDuration','fontSize','bgColor2','VisuMZ_3_BattleVoices','contentsOpacity','rewards','BattleVictory','isCollapsing','_victoryUpdateDuration','shift','match','ItemsEquipsCore','AbilityPoints','isBypassVictoryAftermathMotion','bossCollapse','ARRAYSTRUCT','earnedJobPoints','sortItemList','prepareVictoryAftermathTransition','createVictorySteps','filter','_victoryLevelUpWindow','itemCount','processVictoryAftermathRewards','indexOf','processBattleCoreJS','BackRectColor','loadFaceImages','abilityPointsAbbr','Scene_Battle_allowUpdateBattleAniSpeed','isVictoryContinueReady','clear','_actorId','Game_Actor_shouldDisplayLevelUp','524ZUllKq','_victoryRewardsWindow','4PHWMGE','VisuMZ_3_VisualGoldDisplay','FadeInSpeed','createVictoryAftermathWindows','_victoryLevelUpSFX','updateOpacity','VisuMZ_1_OptionsCore','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Game_Actor_isBattleMember','exp','gaugeColor2','maxVisibleItems','BustScale','NewQuotes','_showBust','push','gaugeHeight','isBusy','closeCommandWindows','playVictoryLevelUpSFX','_victoryAftermathCopy','toLowerCase','VisuMZ_0_CoreEngine','2569sYlAjI','textWidth','drawParamBeforeValue','isSceneBattle','_scene','updateContentsOpacity','createVictoryContinueMessageWindow','index','_rewardSets','_victoryAftermathSettings','parse','some','maxLvGaugeColor2','drawActorLevel','_mainWindow','left','_duration','itemHeight','cancel','toUpperCase','SystemBypassVictoryPhase','Rewards','victoryDisplayLvFmt','bypassVictoryPhase','_tempActorExpGain','(%1)','_victoryTempActorsB','ShowParamDiff','isFastForwarded','mirrorContents','_data','expGaugeColor1','powerUpColor','_victoryAftermathNewSkillQuotes','removeBattleStates','done','pop','drawActorNameStrip','7480575kuUhMB','sort','ContinueFmt','maxBattleMembers','hideWindowsForVictoryAftermath','Enable','removeVictoryLevelUpBuffer','_subWindow','drawExpValues','RewardItems','_actorSprite','EVAL','length','call','ARRAYJSON','drawItemName','padding','drawItemDarkRect','randomInt','drawActorName','makeRewards','Game_Actor_performVictory','Template','rgba(0,\x200,\x200,\x200.8)','getColorDataFromPluginParameters','_delayDuration','SORT_TYPE','drawNewLearnedSkillsList','LevelUp','Vocab','VisuMZ_X_Template','ItemQuantityFmt','shouldDisplayLevelUp','localeCompare','onVictoryStepLevelUpMember','maxCols','STRUCT','HideDelayMS','fontFace','name','victoryRewardBitmap','_mapBgm','victoryContinueMessageWindowRect','ACTOR_STRIP_COLOR_1','initMembers','drawParamAfterValue','ActorQuotesNewSkillAdd','playBattleVoice','createBitmap','drawVisualStyleGauge','playSe','skills','bypassVictoryMotion','AftermathActorDisplay','_opacitySpeed','processVictory','items','drawItemGainTitle','currencyUnit','actorParams','battleEnd','drawTextEx','checkVictoryAftermathAutoBattleAutoSkip','makeVictoryCopy','_drawParamDiff','MirrorContents'];_0x1f2b=function(){return _0x4ad3c8;};return _0x1f2b();}function Window_VictoryItem(){this['initialize'](...arguments);}Window_VictoryItem[_0x3cc4a7(0x1d1)]=Object['create'](Window_ItemList[_0x3cc4a7(0x1d1)]),Window_VictoryItem['prototype'][_0x3cc4a7(0x1eb)]=Window_VictoryItem,Window_VictoryItem[_0x3cc4a7(0x105)]=VisuMZ['VictoryAftermath']['Settings'][_0x3cc4a7(0x1a1)][_0x3cc4a7(0x14b)]??'ID',Window_VictoryItem[_0x3cc4a7(0x1d1)]['initialize']=function(_0x3f77a4,_0x1e4918){const _0x504fda=_0x3cc4a7;this[_0x504fda(0x299)]=_0x1e4918,Window_ItemList['prototype'][_0x504fda(0x221)]['call'](this,_0x3f77a4),this[_0x504fda(0x20d)](0x2),this[_0x504fda(0x176)](),this['updateContentsOpacity'](),this[_0x504fda(0x2a9)][_0x504fda(0xf7)]>this[_0x504fda(0x27f)]()&&(this[_0x504fda(0x17d)](),this[_0x504fda(0x1d8)](0x0));},Window_VictoryItem[_0x3cc4a7(0x1d1)]['itemHeight']=function(){const _0x2bcd36=_0x3cc4a7;return Window_Base[_0x2bcd36(0x1d1)][_0x2bcd36(0x29c)]['call'](this);},Window_VictoryItem[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1c9)]=function(){this['padding']=0x0;},Window_VictoryItem[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x10e)]=function(){return 0x1;},Window_VictoryItem[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x136)]=function(){return 0x0;},Window_VictoryItem[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x198)]=function(){const _0xbea87c=_0x3cc4a7;Window_ItemList[_0xbea87c(0x1d1)][_0xbea87c(0x198)][_0xbea87c(0xf8)](this),this['updateContentsOpacity']();},Window_VictoryItem[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x290)]=function(){const _0x1e9e38=_0x3cc4a7;this['contentsOpacity']=this[_0x1e9e38(0x299)][_0x1e9e38(0x254)];},Window_VictoryItem[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x21d)]=function(){const _0x5e605a=_0x3cc4a7,_0x1c7f8f=BattleManager['_rewards'][_0x5e605a(0x123)];_0x1c7f8f[_0x5e605a(0x2b2)]((_0x150e5d,_0x596623)=>_0x150e5d['id']-_0x596623['id']);const _0x434401=_0x1c7f8f[_0x5e605a(0x264)](_0x41657c=>DataManager[_0x5e605a(0x1d4)](_0x41657c)),_0x17d412=_0x1c7f8f[_0x5e605a(0x264)](_0x241ced=>DataManager[_0x5e605a(0x22c)](_0x241ced)),_0x1087ba=_0x1c7f8f[_0x5e605a(0x264)](_0x1ef334=>DataManager[_0x5e605a(0x153)](_0x1ef334));this[_0x5e605a(0x2a9)]=_0x434401[_0x5e605a(0x184)](_0x17d412)['concat'](_0x1087ba),this['_data']=this[_0x5e605a(0x2a9)][_0x5e605a(0x264)]((_0x49992e,_0x3e8085,_0x5c342c)=>_0x5c342c[_0x5e605a(0x268)](_0x49992e)===_0x3e8085),this['sortItemList']();},Window_VictoryItem[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x261)]=function(){const _0x4fe4f8=_0x3cc4a7,_0x3982e3=Window_VictoryItem[_0x4fe4f8(0x105)][_0x4fe4f8(0x289)]()['trim']();if(_0x3982e3==='name'&&this[_0x4fe4f8(0x2a9)][_0x4fe4f8(0xf7)]>0x0)return this[_0x4fe4f8(0x2a9)][_0x4fe4f8(0x2b2)]((_0x50e851,_0x47f331)=>_0x50e851[_0x4fe4f8(0x112)][_0x4fe4f8(0x10c)](_0x47f331[_0x4fe4f8(0x112)]));},Window_VictoryItem['prototype'][_0x3cc4a7(0x21f)]=function(_0xef6bed){return!![];},Window_VictoryItem['prototype'][_0x3cc4a7(0x1b0)]=function(){return![];},Window_VictoryItem[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x266)]=function(_0x3e37d5){const _0x20e515=_0x3cc4a7;return BattleManager[_0x20e515(0x1b8)][_0x20e515(0x123)]['filter'](_0x3de69f=>_0x3de69f===_0x3e37d5)[_0x20e515(0xf7)];},Window_VictoryItem[_0x3cc4a7(0x1d1)]['drawItemBackground']=function(_0x3746aa){},Window_VictoryItem['prototype'][_0x3cc4a7(0x17e)]=function(_0x3bf2c8,_0x23769f,_0x292659,_0x2db886){const _0x1e2c1f=_0x3cc4a7;let _0x31d1bc=_0x1e2c1f(0x152);Imported['VisuMZ_1_ItemsEquipsCore']&&(_0x31d1bc=VisuMZ[_0x1e2c1f(0x25b)][_0x1e2c1f(0x171)][_0x1e2c1f(0x1f9)][_0x1e2c1f(0x10a)]);let _0x12305c=_0x31d1bc['format'](this[_0x1e2c1f(0x266)](_0x3bf2c8));this[_0x1e2c1f(0x218)](_0x12305c,_0x23769f,_0x292659,_0x2db886,'right');};function Window_VictoryLevelUp(){this['initialize'](...arguments);}Window_VictoryLevelUp[_0x3cc4a7(0x121)]=Window_VictoryRewards['_opacitySpeed'],Window_VictoryLevelUp[_0x3cc4a7(0x282)]=VisuMZ['VictoryAftermath'][_0x3cc4a7(0x171)][_0x3cc4a7(0x107)][_0x3cc4a7(0x180)],Window_VictoryLevelUp[_0x3cc4a7(0x1d1)]=Object[_0x3cc4a7(0x244)](Window_StatusBase[_0x3cc4a7(0x1d1)]),Window_VictoryLevelUp['prototype'][_0x3cc4a7(0x1eb)]=Window_VictoryLevelUp,Window_VictoryLevelUp[_0x3cc4a7(0x1d1)]['initialize']=function(_0x3783ba){const _0x4257ef=_0x3cc4a7;Window_StatusBase['prototype'][_0x4257ef(0x221)]['call'](this,_0x3783ba),this[_0x4257ef(0x20d)](0x2),this['contentsOpacity']=0x0,this['refresh'](),this[_0x4257ef(0x219)](),this[_0x4257ef(0x148)]();},Window_VictoryLevelUp['prototype']['updatePadding']=function(){this['padding']=0x0;},Window_VictoryLevelUp[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x198)]=function(){const _0x260fc=_0x3cc4a7;Window_StatusBase[_0x260fc(0x1d1)][_0x260fc(0x198)]['call'](this),this['updateContentsOpacity']();},Window_VictoryLevelUp[_0x3cc4a7(0x1d1)]['updateContentsOpacity']=function(){const _0xb23039=_0x3cc4a7;SceneManager[_0xb23039(0x28f)][_0xb23039(0x206)]==='levelups'?this[_0xb23039(0x254)]+=Window_VictoryLevelUp[_0xb23039(0x121)]:this[_0xb23039(0x254)]-=Window_VictoryLevelUp['_opacitySpeed'],this[_0xb23039(0xf5)]&&(this[_0xb23039(0xf5)]['opacity']=this[_0xb23039(0x254)]);},Window_VictoryLevelUp[_0x3cc4a7(0x1d1)]['refresh']=function(){const _0x364e0c=_0x3cc4a7;Window_StatusBase[_0x364e0c(0x1d1)][_0x364e0c(0x176)][_0x364e0c(0xf8)](this),this[_0x364e0c(0x1e5)][_0x364e0c(0x26f)](),this[_0x364e0c(0x21c)](),this[_0x364e0c(0x1f5)]();},Window_VictoryLevelUp[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1f5)]=function(){const _0x417b66=_0x3cc4a7,_0x567c92=this[_0x417b66(0x1ef)](),_0xd352be=Window_VictoryRewards[_0x417b66(0x142)],_0x5a23a9=Window_VictoryRewards['BG_COLOR_2'],_0x399d72=ColorManager[_0x417b66(0x1ff)](),_0x26d0cf=SceneManager[_0x417b66(0x28f)]['_victoryContinueWindow']['x'],_0x2e0bca=Math['round'](this[_0x417b66(0x1fe)]/0x2);this[_0x417b66(0x1e5)][_0x417b66(0x1dc)](_0x26d0cf,0x0,_0x2e0bca,this[_0x417b66(0x24c)],_0x5a23a9,_0xd352be,!![]),this[_0x417b66(0x1e5)]['fillRect'](_0x26d0cf-0x1,0x0,0x2,this[_0x417b66(0x24c)],_0x399d72),this['contents']['fillRect'](_0x26d0cf+_0x2e0bca-0x1,0x0,0x2,this['height'],_0x399d72);const _0x43f1a5=_0x567c92,_0x23a942=_0x567c92*0x1;this[_0x417b66(0x1e5)][_0x417b66(0x1dc)](0x0,_0x43f1a5,this[_0x417b66(0x1fe)],_0x23a942,_0xd352be,_0x5a23a9),this['contents'][_0x417b66(0x1cc)](0x0,_0x43f1a5-0x1,this[_0x417b66(0x1fe)],0x2,_0x399d72),this[_0x417b66(0x1e5)][_0x417b66(0x1cc)](0x0,_0x43f1a5+_0x23a942-0x1,this[_0x417b66(0x1fe)],0x2,_0x399d72);const _0x363d9b=this['height']-_0x567c92*5.5,_0x4b3381=_0x567c92*0x4;this['contents']['gradientFillRect'](0x0,_0x363d9b,this[_0x417b66(0x1fe)],_0x4b3381,_0xd352be,_0x5a23a9),this[_0x417b66(0x1e5)]['gradientFillRect'](0x0,_0x363d9b,this[_0x417b66(0x1fe)],_0x4b3381,_0x5a23a9,_0xd352be),this[_0x417b66(0x1e5)][_0x417b66(0x1cc)](0x0,_0x363d9b-0x2,this[_0x417b66(0x1fe)],0x2,_0x399d72),this[_0x417b66(0x1e5)][_0x417b66(0x1cc)](0x0,_0x363d9b+_0x4b3381,this[_0x417b66(0x1fe)],0x2,_0x399d72);},Window_VictoryLevelUp[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x219)]=function(){const _0x52708f=_0x3cc4a7,_0x494633=VisuMZ[_0x52708f(0x17a)]['Settings']['LevelUp'];this[_0x52708f(0xf5)]=new Sprite(),this[_0x52708f(0xf5)][_0x52708f(0x14a)]['x']=0.5,this[_0x52708f(0xf5)][_0x52708f(0x14a)]['y']=0x1,this[_0x52708f(0xf5)][_0x52708f(0x205)]=0x0,this[_0x52708f(0xf5)]['x']=Math['round'](eval(_0x494633[_0x52708f(0x19c)])),this[_0x52708f(0xf5)]['y']=Math[_0x52708f(0x16b)](eval(_0x494633[_0x52708f(0x20c)])),this['_actorSprite'][_0x52708f(0x137)]['x']=_0x494633[_0x52708f(0x280)],this['_actorSprite'][_0x52708f(0x137)]['y']=_0x494633[_0x52708f(0x280)],this[_0x52708f(0x1bd)](this[_0x52708f(0xf5)]);},Window_VictoryLevelUp[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x148)]=function(){const _0x17b79d=_0x3cc4a7,_0x6f8ab8=new Rectangle(0x0,0x0,this[_0x17b79d(0x1fe)],this[_0x17b79d(0x24c)]);this[_0x17b79d(0xf2)]=new Window_VictoryLevelUpActor(_0x6f8ab8,this),this['addChild'](this[_0x17b79d(0xf2)]);},Window_VictoryLevelUp[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x24d)]=function(_0x493f9d){const _0x5cafb2=_0x3cc4a7;Imported['VisuMZ_1_MainMenuCore']&&Window_VictoryLevelUp[_0x5cafb2(0x282)]&&(this[_0x5cafb2(0xf5)][_0x5cafb2(0x192)]=ImageManager[_0x5cafb2(0x20e)](_0x493f9d['getMenuImage']())),SoundManager[_0x5cafb2(0x287)](),this['_subWindow']['setActor'](_0x493f9d);};function Window_VictoryLevelUpActor(){this['initialize'](...arguments);}function _0x1aff(_0x20851f,_0x1726a4){const _0x1f2b08=_0x1f2b();return _0x1aff=function(_0x1aff1d,_0x16214b){_0x1aff1d=_0x1aff1d-0xf1;let _0x265e41=_0x1f2b08[_0x1aff1d];return _0x265e41;},_0x1aff(_0x20851f,_0x1726a4);}Window_VictoryLevelUpActor[_0x3cc4a7(0x121)]=Window_VictoryRewards[_0x3cc4a7(0x121)],Window_VictoryLevelUpActor['_drawParamDiff']=VisuMZ[_0x3cc4a7(0x17a)][_0x3cc4a7(0x171)]['LevelUp'][_0x3cc4a7(0x2a6)],Window_VictoryLevelUpActor['_showFace']=VisuMZ[_0x3cc4a7(0x17a)][_0x3cc4a7(0x171)][_0x3cc4a7(0x107)][_0x3cc4a7(0x247)],Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)]=Object[_0x3cc4a7(0x244)](Window_StatusBase[_0x3cc4a7(0x1d1)]),Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1eb)]=Window_VictoryLevelUpActor,Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x221)]=function(_0xc2bda,_0x7e18a){const _0x302f57=_0x3cc4a7;this[_0x302f57(0x299)]=_0x7e18a,Window_StatusBase[_0x302f57(0x1d1)]['initialize'][_0x302f57(0xf8)](this,_0xc2bda),this['setBackgroundType'](0x2),this[_0x302f57(0x254)]=0x0,this[_0x302f57(0x229)]=null,this['refresh']();},Window_VictoryLevelUpActor['prototype'][_0x3cc4a7(0x1c9)]=function(){const _0x44b821=_0x3cc4a7;this[_0x44b821(0xfb)]=0x0;},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)]['update']=function(){const _0xfa7e69=_0x3cc4a7;Window_StatusBase[_0xfa7e69(0x1d1)][_0xfa7e69(0x198)]['call'](this),this['updateContentsOpacity']();},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x290)]=function(){const _0x43c8c1=_0x3cc4a7;this[_0x43c8c1(0x254)]=this[_0x43c8c1(0x299)][_0x43c8c1(0x254)];},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x24d)]=function(_0x5a46ce){this['_actor']=_0x5a46ce,this['refresh']();},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1db)]=function(){const _0x2d933d=_0x3cc4a7,_0x2e2ad4=this[_0x2d933d(0x229)]['index']();return BattleManager[_0x2d933d(0x2a5)][_0x2e2ad4];},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x140)]=function(){const _0x51dc1e=_0x3cc4a7,_0x1173ca=this[_0x51dc1e(0x229)]['index']();return BattleManager['_victoryTempActorsA'][_0x1173ca];},Window_VictoryLevelUpActor['prototype'][_0x3cc4a7(0x176)]=function(){const _0x541397=_0x3cc4a7;Window_StatusBase['prototype'][_0x541397(0x176)]['call'](this),this['contents'][_0x541397(0x26f)](),this[_0x541397(0x21c)]();if(!this[_0x541397(0x229)])return;this[_0x541397(0x1f7)](),this[_0x541397(0x1f1)](),this[_0x541397(0x1ea)](),this[_0x541397(0x1c0)]();},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)]['drawLevelMessage']=function(){const _0x2df004=_0x3cc4a7,_0x3a2507=this[_0x2df004(0x1ef)](),_0x388e82=TextManager[_0x2df004(0x188)]['format'](this['_actor'][_0x2df004(0x112)](),TextManager['level'],this[_0x2df004(0x229)]['level']),_0x171d58=this['textSizeEx'](_0x388e82)[_0x2df004(0x1fe)],_0x3e9396=SceneManager[_0x2df004(0x28f)][_0x2df004(0x155)]['x']+Math[_0x2df004(0x16b)]((this[_0x2df004(0x1fe)]/0x2-_0x171d58)/0x2),_0x369a15=_0x3a2507;this[_0x2df004(0x128)](_0x388e82,_0x3e9396,_0x369a15,_0x171d58);},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0xfc)]=function(_0x3cd90b,_0x26e4cd,_0x212d16,_0x3f0f5d,_0x38eb08){const _0xdfcd06=_0x3cc4a7;if(VisuMZ['VictoryAftermath'][_0xdfcd06(0x171)][_0xdfcd06(0x107)]['DrawBackRect']===![])return;_0x38eb08=Math[_0xdfcd06(0x12f)](_0x38eb08||0x1,0x1);while(_0x38eb08--){_0x3f0f5d=_0x3f0f5d||this[_0xdfcd06(0x1ef)](),this[_0xdfcd06(0x1e5)][_0xdfcd06(0x24a)]=0xa0;const _0x491f76=ColorManager[_0xdfcd06(0x1ee)]();this[_0xdfcd06(0x1e5)][_0xdfcd06(0x1cc)](_0x3cd90b+0x1,_0x26e4cd+0x1,_0x212d16-0x2,_0x3f0f5d-0x2,_0x491f76),this[_0xdfcd06(0x1e5)][_0xdfcd06(0x24a)]=0xff;}},ColorManager[_0x3cc4a7(0x1ee)]=function(){const _0x3356c4=_0x3cc4a7,_0x247d4d=VisuMZ[_0x3356c4(0x17a)][_0x3356c4(0x171)][_0x3356c4(0x107)];let _0x58a8b0=_0x247d4d[_0x3356c4(0x26a)]!==undefined?_0x247d4d[_0x3356c4(0x26a)]:0x13;return ColorManager[_0x3356c4(0x21b)](_0x58a8b0);},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1f1)]=function(){const _0x444580=_0x3cc4a7,_0x2af008=this[_0x444580(0x1ef)](),_0x2f2329='→',_0x322180=this[_0x444580(0x126)](),_0x53aab8=_0x2af008*0x2,_0x5b016a=this[_0x444580(0x24c)]-_0x2af008*5.5,_0x19eca6=this[_0x444580(0x28c)](_0x2f2329)+this[_0x444580(0x22a)]()*0x2,_0x19aec8=Window_VictoryLevelUpActor['_drawParamDiff']?0x4:0x3,_0x5a8fb4=Math[_0x444580(0x16b)]((this['width']/0x2-_0x19eca6-this['itemPadding']()*0x2)/_0x19aec8),_0x459de6=_0x5b016a-_0x53aab8,_0x56a40a=VisuMZ['VictoryAftermath']['Settings'][_0x444580(0x107)][_0x444580(0x159)],_0x5f42c3=SceneManager[_0x444580(0x28f)][_0x444580(0x155)]['x']+this[_0x444580(0x22a)](),_0x5e2e5d=_0x5f42c3+_0x5a8fb4,_0x1ef1d3=_0x5e2e5d+_0x5a8fb4,_0xc88001=_0x1ef1d3+_0x19eca6,_0x2d04a0=_0xc88001+_0x5a8fb4;let _0x2b68a4=Math[_0x444580(0x16b)](_0x53aab8+(_0x459de6-(_0x322180[_0x444580(0xf7)]+(_0x56a40a?0x0:0x1))*_0x2af008)/0x2),_0xff7319=0x2;!_0x56a40a&&(this['resetFontSettings'](),VisuMZ['ItemsEquipsCore']&&(this[_0x444580(0x1e5)][_0x444580(0x251)]=Window_EquipStatus[_0x444580(0x1d1)]['paramValueFontSize']()),this['drawItemDarkRect'](_0x5f42c3,_0x2b68a4,_0x5a8fb4,_0x2af008,_0xff7319),this['drawParamName'](_0x444580(0x17c),_0x5f42c3,_0x2b68a4,_0x5a8fb4),this['drawItemDarkRect'](_0x5e2e5d,_0x2b68a4,_0x5a8fb4,_0x2af008,_0xff7319),this[_0x444580(0x28d)](_0x444580(0x17c),_0x5e2e5d,_0x2b68a4,_0x5a8fb4),this['drawItemDarkRect'](_0x1ef1d3,_0x2b68a4,_0x19eca6,_0x2af008,_0xff7319),this[_0x444580(0x18a)](ColorManager[_0x444580(0x1da)]()),this[_0x444580(0x218)](_0x2f2329,_0x1ef1d3,_0x2b68a4,_0x19eca6,_0x444580(0x24e)),this[_0x444580(0xfc)](_0xc88001,_0x2b68a4,_0x5a8fb4,_0x2af008,_0xff7319),this[_0x444580(0x118)]('level',_0xc88001,_0x2b68a4,_0x5a8fb4),Window_VictoryLevelUpActor[_0x444580(0x12b)]&&(this[_0x444580(0xfc)](_0x2d04a0,_0x2b68a4,_0x5a8fb4,_0x2af008,_0xff7319),this['drawParamDiffValue'](_0x444580(0x17c),_0x2d04a0,_0x2b68a4,_0x5a8fb4)),_0x2b68a4+=_0x2af008,_0xff7319=_0xff7319===0x2?0x1:0x2);for(const _0x26bb39 of _0x322180){this[_0x444580(0x21c)](),VisuMZ[_0x444580(0x25b)]&&(this[_0x444580(0x1e5)][_0x444580(0x251)]=Window_EquipStatus[_0x444580(0x1d1)][_0x444580(0x220)]()),this[_0x444580(0xfc)](_0x5f42c3,_0x2b68a4,_0x5a8fb4,_0x2af008,_0xff7319),this[_0x444580(0x21e)](_0x26bb39,_0x5f42c3,_0x2b68a4,_0x5a8fb4),this['drawItemDarkRect'](_0x5e2e5d,_0x2b68a4,_0x5a8fb4,_0x2af008,_0xff7319),this[_0x444580(0x28d)](_0x26bb39,_0x5e2e5d,_0x2b68a4,_0x5a8fb4),this[_0x444580(0xfc)](_0x1ef1d3,_0x2b68a4,_0x19eca6,_0x2af008,_0xff7319),this[_0x444580(0x18a)](ColorManager[_0x444580(0x1da)]()),this['drawText'](_0x2f2329,_0x1ef1d3,_0x2b68a4,_0x19eca6,_0x444580(0x24e)),this[_0x444580(0xfc)](_0xc88001,_0x2b68a4,_0x5a8fb4,_0x2af008,_0xff7319),this[_0x444580(0x118)](_0x26bb39,_0xc88001,_0x2b68a4,_0x5a8fb4),Window_VictoryLevelUpActor['_drawParamDiff']&&(this[_0x444580(0xfc)](_0x2d04a0,_0x2b68a4,_0x5a8fb4,_0x2af008,_0xff7319),this['drawParamDiffValue'](_0x26bb39,_0x2d04a0,_0x2b68a4,_0x5a8fb4)),_0x2b68a4+=_0x2af008,_0xff7319=_0xff7319===0x2?0x1:0x2;}},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x126)]=function(){const _0x246807=_0x3cc4a7;return Imported[_0x246807(0x28a)]?VisuMZ[_0x246807(0x200)][_0x246807(0x171)]['Param'][_0x246807(0x22d)]:[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x21e)]=function(_0x4ee982,_0x55faa2,_0x2a790d,_0x13cf7b){const _0x5ae576=_0x3cc4a7;this['changeTextColor'](ColorManager[_0x5ae576(0x1da)]());let _0x16418b='';_0x4ee982===_0x5ae576(0x17c)?_0x16418b=TextManager[_0x5ae576(0x17c)]:_0x16418b=TextManager['param'](_0x4ee982),this[_0x5ae576(0x218)](_0x16418b,_0x55faa2+this['itemPadding'](),_0x2a790d,_0x13cf7b-this[_0x5ae576(0x22a)]()*0x2);},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x28d)]=function(_0x317418,_0x2a2acb,_0x1d5dfc,_0x2a0f99){const _0x53e01a=_0x3cc4a7,_0x3c11aa=this[_0x53e01a(0x1db)]();let _0x1809c7='';_0x317418===_0x53e01a(0x17c)?_0x1809c7=_0x3c11aa[_0x53e01a(0x17c)]:_0x1809c7=Imported[_0x53e01a(0x28a)]?_0x3c11aa[_0x53e01a(0x1a7)](_0x317418,!![]):_0x3c11aa[_0x53e01a(0x16f)](_0x317418),this[_0x53e01a(0x18a)](ColorManager[_0x53e01a(0x1ff)]()),this[_0x53e01a(0x218)](_0x1809c7,_0x2a2acb+this[_0x53e01a(0x22a)](),_0x1d5dfc,_0x2a0f99-this[_0x53e01a(0x22a)]()*0x2,'right');},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x118)]=function(_0x397f68,_0x3acf7e,_0x31cdfc,_0x20d737){const _0x4fe78f=_0x3cc4a7,_0x380064=this[_0x4fe78f(0x1db)](),_0x37fe04=this[_0x4fe78f(0x229)];let _0x3077a0=0x0,_0x202dc3=0x0,_0x26dfdb='0';_0x397f68===_0x4fe78f(0x17c)?(_0x3077a0=_0x380064[_0x4fe78f(0x17c)],_0x202dc3=_0x37fe04[_0x4fe78f(0x17c)],_0x26dfdb=_0x202dc3):(_0x3077a0=Imported[_0x4fe78f(0x28a)]?_0x380064[_0x4fe78f(0x1a7)](_0x397f68,![]):_0x380064['param'](_0x397f68),_0x202dc3=Imported[_0x4fe78f(0x28a)]?_0x37fe04[_0x4fe78f(0x1a7)](_0x397f68,![]):_0x37fe04[_0x4fe78f(0x16f)](_0x397f68),_0x26dfdb=Imported[_0x4fe78f(0x28a)]?_0x37fe04['paramValueByName'](_0x397f68,!![]):_0x202dc3);const _0x18b429=_0x202dc3-_0x3077a0;this['changeTextColor'](ColorManager[_0x4fe78f(0x20b)](_0x18b429)),this[_0x4fe78f(0x218)](_0x26dfdb,_0x3acf7e+this[_0x4fe78f(0x22a)](),_0x31cdfc,_0x20d737-this[_0x4fe78f(0x22a)]()*0x2,_0x4fe78f(0x182));},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x13c)]=function(_0x5a1fed,_0x3c72cd,_0x2b6ab5,_0x191053){const _0x11a0d4=_0x3cc4a7,_0x1033d2=this[_0x11a0d4(0x1db)](),_0x27c405=this[_0x11a0d4(0x229)];let _0x1ed102=0x0,_0x2e9920=0x0;_0x5a1fed==='level'?(_0x1ed102=_0x1033d2[_0x11a0d4(0x17c)],_0x2e9920=_0x27c405[_0x11a0d4(0x17c)]):(_0x1ed102=Imported[_0x11a0d4(0x28a)]?_0x1033d2[_0x11a0d4(0x1a7)](_0x5a1fed,![]):_0x1033d2[_0x11a0d4(0x16f)](_0x5a1fed),_0x2e9920=Imported[_0x11a0d4(0x28a)]?_0x27c405['paramValueByName'](_0x5a1fed,![]):_0x27c405[_0x11a0d4(0x16f)](_0x5a1fed));const _0x4b4524=_0x2e9920-_0x1ed102;let _0x17e1ea=_0x4b4524;if(_0x1ed102%0x1!==0x0)_0x17e1ea=Math[_0x11a0d4(0x16b)](_0x4b4524*0x64)+'%';_0x4b4524!==0x0&&(this[_0x11a0d4(0x18a)](ColorManager['paramchangeTextColor'](_0x4b4524)),_0x17e1ea=(_0x4b4524>=0x0?_0x11a0d4(0x1af):_0x11a0d4(0x2a4))[_0x11a0d4(0x1b3)](_0x17e1ea),this[_0x11a0d4(0x218)](_0x17e1ea,_0x3c72cd+this[_0x11a0d4(0x22a)](),_0x2b6ab5,_0x191053-this[_0x11a0d4(0x22a)]()*0x2,_0x11a0d4(0x29a)));},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x1ea)]=function(){const _0x1fe4b8=_0x3cc4a7;this['resetFontSettings']();const _0x3c5fdc=this[_0x1fe4b8(0x1d5)]();if(_0x3c5fdc[_0x1fe4b8(0xf7)]<=0x0)return;const _0xd323a2=VisuMZ['VictoryAftermath'][_0x1fe4b8(0x171)][_0x1fe4b8(0x107)][_0x1fe4b8(0x214)];while(_0x3c5fdc[_0x1fe4b8(0xf7)]>_0xd323a2){_0x3c5fdc[_0x1fe4b8(0x2af)]();}this['drawNewLearnedSkillsBackground'](_0x3c5fdc),this[_0x1fe4b8(0x106)](_0x3c5fdc);},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)]['findNewSkills']=function(){const _0x17ad9f=_0x3cc4a7,_0x4e43f3=this[_0x17ad9f(0x1db)]()[_0x17ad9f(0x11e)]();return this[_0x17ad9f(0x229)]['findNewSkills'](_0x4e43f3);},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)]['drawNewLearnedSkillsBackground']=function(_0x3ff068){const _0x3fa4ef=_0x3cc4a7,_0x48425c=this[_0x3fa4ef(0x1ef)](),_0x18a063=Window_VictoryRewards[_0x3fa4ef(0x142)],_0x4fd4be=Window_VictoryRewards[_0x3fa4ef(0x226)],_0x5891e5=ColorManager[_0x3fa4ef(0x1ff)](),_0x5cd4f8=Math[_0x3fa4ef(0x16b)](this['width']/0x2)-0x64-_0x48425c*0x2,_0x12c721=(_0x3ff068[_0x3fa4ef(0xf7)]+0x1)*_0x48425c,_0x417fbd=_0x48425c,_0x3b4684=this[_0x3fa4ef(0x24c)]-_0x48425c*6.5-_0x12c721;this[_0x3fa4ef(0x1e5)]['fillRect'](_0x417fbd-0x2,_0x3b4684-0x2,_0x5cd4f8+0x4,_0x12c721+0x4,_0x5891e5),this['contents'][_0x3fa4ef(0x1fc)](_0x417fbd,_0x3b4684,_0x5cd4f8,_0x12c721),this['contents'][_0x3fa4ef(0x1dc)](_0x417fbd,_0x3b4684,_0x5cd4f8,_0x12c721,_0x18a063,_0x4fd4be);},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x106)]=function(_0x31a71){const _0x32d321=_0x3cc4a7,_0x9281c4=this[_0x32d321(0x1ef)](),_0x445490=Window_VictoryRewards[_0x32d321(0x142)],_0x2327f9=Window_VictoryRewards['BG_COLOR_2'],_0x2484d1=ColorManager[_0x32d321(0x1ff)](),_0x25c7e0=Math[_0x32d321(0x16b)](this[_0x32d321(0x1fe)]/0x2)-0x64-(_0x9281c4+this[_0x32d321(0x22a)]())*0x2,_0xfb1e7b=(_0x31a71[_0x32d321(0xf7)]+0x1)*_0x9281c4;let _0x155fdb=_0x9281c4+this['itemPadding'](),_0x22ee1e=this[_0x32d321(0x24c)]-_0x9281c4*6.5-_0xfb1e7b;const _0x3a68d0=TextManager[_0x32d321(0x233)][_0x32d321(0x1b3)](this[_0x32d321(0x229)][_0x32d321(0x112)]()),_0x12b2df=this[_0x32d321(0x16a)](_0x3a68d0)[_0x32d321(0x1fe)],_0x34a6f3=Math[_0x32d321(0x16b)](_0x155fdb+(_0x25c7e0-_0x12b2df)/0x2);this[_0x32d321(0x128)](_0x3a68d0,_0x34a6f3,_0x22ee1e,_0x12b2df),_0x22ee1e+=_0x9281c4,this[_0x32d321(0x1e5)][_0x32d321(0x1cc)](_0x155fdb,_0x22ee1e-0x1,_0x25c7e0,0x2,_0x2484d1);for(const _0xbb85e5 of _0x31a71){if(!_0xbb85e5)continue;this[_0x32d321(0x21c)](),this[_0x32d321(0xfa)](_0xbb85e5,_0x155fdb+this[_0x32d321(0x22a)](),_0x22ee1e,_0x25c7e0-this['itemPadding']()*0x2),_0x22ee1e+=_0x9281c4;}},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)]['drawLevelUpQuote']=function(){const _0x158e18=_0x3cc4a7,_0x3cad6f=this[_0x158e18(0x1ef)](),_0x216ff1=Window_VictoryLevelUpActor[_0x158e18(0x139)],_0x411276=this[_0x158e18(0x1ce)](),_0x26aaf4=_0x3cad6f*0x4,_0x1e5514=Math[_0x158e18(0x16b)]((this[_0x158e18(0x1fe)]-_0x411276)/0x2),_0x3f6741=_0x1e5514+(_0x216ff1?ImageManager[_0x158e18(0x1c3)]+0x14:0x0),_0x2ebc00=this[_0x158e18(0x24c)]-_0x3cad6f*5.5;let _0x199c1f=this[_0x158e18(0x18c)]();_0x216ff1&&this[_0x158e18(0x1b4)](this[_0x158e18(0x229)],_0x1e5514,_0x2ebc00,ImageManager[_0x158e18(0x1c3)],ImageManager['faceHeight']),this['drawTextEx'](_0x199c1f,_0x3f6741,_0x2ebc00,_0x411276-_0x3f6741);},Window_VictoryLevelUpActor['prototype'][_0x3cc4a7(0x1ce)]=function(){const _0x887f77=_0x3cc4a7;let _0xcdf825=Graphics['boxWidth'];return Imported[_0x887f77(0x1aa)]&&(_0xcdf825=Math[_0x887f77(0x12e)](_0xcdf825,VisuMZ['MessageCore']['Settings']['General'][_0x887f77(0x1c7)])),_0xcdf825-this[_0x887f77(0x22a)]()*0x2;},Window_VictoryLevelUpActor[_0x3cc4a7(0x1d1)][_0x3cc4a7(0x18c)]=function(){const _0x444aa5=_0x3cc4a7;return this[_0x444aa5(0x1d5)]()['length']>0x0?TextManager[_0x444aa5(0x178)](this[_0x444aa5(0x229)])[_0x444aa5(0x1b3)](this[_0x444aa5(0x229)]['name']()):TextManager['quoteLevelUp'](this[_0x444aa5(0x229)])[_0x444aa5(0x1b3)](this['_actor']['name']());};