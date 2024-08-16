//=============================================================================
// VisuStella MZ - Bestiary
// VisuMZ_2_Bestiary.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_Bestiary = true;

var VisuMZ = VisuMZ || {};
VisuMZ.Bestiary = VisuMZ.Bestiary || {};
VisuMZ.Bestiary.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.05] [Bestiary]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Bestiary_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds a new scene accessible through (but not limited to) the
 * Main Menu, the Bestiary. The Bestiary is a monster book/encyclopedia that
 * will update as the player plays the game. When an enemy is defeated, the
 * player can view that enemy through the Bestiary to see the enemy's stats,
 * elemental resistances and weaknesses, skills, rewards, and more.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Access the Bestiary through the Main Menu or through Plugin Commands.
 * * Enemies will automatically populate the Bestiary as they are seen in
 *   battle and defeated.
 * * The player can access the full information of an enemy after defeating it.
 * * Full information found in the bestiary includes the basic stats, elemental
 *   weaknesses and resistances, skills, rewards (EXP, Gold, Drops, etc.), and
 *   any added Lore.
 * * If the VisuStella MZ Elements and Status Menu Core is added, Traits are
 *   also added to the Bestiary.
 * * The VisuStella MZ Enemy Levels plugin gives functionality to view enemy
 *   stats at different levels.
 * * The VisuStella MZ Extra Enemy Drops will show any and all additional drops
 *   including conditional drops.
 * * The VisuStella MZ Class Change Core and Skill Learn System will show any
 *   AP, CP, JP, and SP rewards, too.
 * * Selected skills found in the Bestiary will have a help window appear that
 *   will also list what the skill does.
 * * The game dev can add in custom lore to an enemy's entry through notetags.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
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
 * VisuMZ_1_ElementStatusCore
 * 
 * When this plugin is used together with VisuStella MZ's Elements and Status
 * Menu Core plugin, the "Traits" data page becomes available. It lets the
 * player adjust the trait properties for the enemy being viewed so that the
 * player can view the changes when different traits are applied.
 * 
 * Any elements listed in the Elements & Status Menu Core's Plugin Parameters
 * list for "Status Menu Settings" and "Excluded Elements" will also be
 * excluded in the Bestiary.
 * 
 * ---
 *
 * VisuMZ_3_EnemyLevels
 *
 * When used together in the same project as VisuStella MZ's Enemy Levels
 * plugin, new commands will appear under the "Basic" parameters window,
 * allowing the player to adjust the level of the currently viewed enemy in
 * order to see their parameters across different levels.
 *
 * ---
 *
 * VisuMZ_4_ExtraEnemyDrops
 *
 * When used together in the same project as VisuStella MZ's Extra Enemy Drops
 * plugin, extended drops will be listed as well as conditional drops (although
 * the conditional drops will not display how they are acquired).
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
 * When used together in the same project as VisuStella MZ's Core Engine, this
 * plugin will display the Extended Parameters dictated by the Core Engine. The
 * icons assigned by the Core Engine will also be utilized, too.
 * 
 * ---
 * 
 * VisuMZ_1_BattleCore
 * 
 * When used together in the same project as VisuStella MZ's Battle Core, the
 * notetags <Display Icon: x> and <Display Text: string> will be used on top of
 * displayed enemy skills to portray their displayed appearances.
 * 
 * ---
 * 
 * VisuMZ_1_ElementStatusCore
 * 
 * When used together in the same project as VisuStella MZ's Elements and
 * Status Menu Core, any excluded elements found in that plugin's Plugin
 * Parameters will also be used here to exclude certain elements, too.
 * 
 * ---
 * 
 * VisuMZ_2_ClassChangeSystem
 * 
 * When used together in the same project as VisuStella MZ's Class Change
 * System plugin, the CP and JP gains from enemies can be displayed under the
 * "Rewards" page as long as the rewards are intended to be shown in the
 * victory reward gains.
 * 
 * ---
 * 
 * VisuMZ_2_SkillLearnSystem
 * 
 * When used together in the same project as VisuStella MZ's Skill Learn System
 * plugin, the AP and SP gains from enemies can be displayed under the"Rewards"
 * page as long as the rewards are intended to be shown in the victory reward
 * gains.
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
 * === Bestiary-Related Notetags ===
 * 
 * ---
 *
 * <Bestiary Category: x>
 * <Bestiary Categories: x, x, x>
 *
 * - Used for: Enemy Notetags
 * - Displays this enemy in the Bestiary category(ies) 'x'.
 * - Replace 'x' with the ID Key of the category or categories found in the
 *   Plugin Parameters.
 * - If this notetag is not used, use the default category determined by the
 *   Plugin Parameters.
 *
 * ---
 * 
 * <Hide in Bestiary>
 * 
 * - Used for: Enemy Notetags
 * - Prevents this enemy from being listed in the Bestiary.
 * 
 * ---
 * 
 * <Bestiary Custom Picture: filename>
 * 
 * - Used for: Enemy Notetags
 * - Makes this enemy display a custom picture in the Bestiary instead of the
 *   battler graphic used in-game.
 * - Replace 'filename' with the name of the image file to pick from the game
 *   project's /img/pictures/ folder.
 *   - Filenames are case sensitive.
 *   - Leave out the filename extension from the notetag.
 * 
 * ---
 * 
 * <Bestiary Battleback 1: filename>
 * <Bestiary Battleback 2: filename>
 * 
 * - Used for: Enemy Notetags
 * - Makes this enemy display a custom battleback background in the Bestiary
 *   instead of the default graphic determined by the Plugin Parameters.
 * - Replace 'filename' with the name of the image file to pick from the game
 *   project's /img/battlebacks1/ and /img/battlebacks2/ folders.
 *   - Filenames are case sensitive.
 *   - Leave out the filename extension from the notetag.
 * - If these notetags are not used, use the default settings found in the
 *   Plugin Parameters instead.
 * 
 * ---
 *
 * <Bestiary Lore>
 *  text
 *  text
 *  text
 * </Bestiary Lore>
 *
 * - Used for: Enemy Notetags
 * - Inserts the written 'text' as the enemy's lore in the Bestiary.
 * - Replace 'text' with whatever you want as the enemy's lore.
 * - If this notetag is not used, then the text displayed will be the default
 *   settings found in the Plugin Parameters.
 * 
 * ---
 * 
 * <Hide Skill in Bestiary>
 * 
 * - Used for: Skill Notetags
 * - Prevents this skill from being listed in the Bestiary.
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
 * === Bestiary Plugin Commands ===
 * 
 * ---
 * 
 * Bestiary: Reveal Enemies
 * - Reveals bestiary information for target enemies without needing to defeat
 *   them.
 * - Must not be forcefully hidden.
 * 
 *   Enemy ID(s):
 *   - Reveals Bestiary information for target enemies.
 *   - Must not be forcefully hidden.
 * 
 * ---
 * 
 * === Debug Plugin Commands ===
 * 
 * ---
 *
 * Debug: Full Bestiary?
 * - For playtest only! Allows you to fully view Bestiary.
 * - Resets when the game client is closed.
 *
 *   Reveal?:
 *   - Fully reveals Bestiary for playtesting.
 *   - Resets when the game client is closed.
 *
 * ---
 * 
 * === Scene Plugin Commands ===
 * 
 * ---
 *
 * Scene: Open Bestiary
 * - Opens the Bestiary scene.
 * - Cannot be used in battle.
 * 
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 * 
 * System: Enable Bestiary in Menu?
 * - Enables/disables Bestiary menu inside the main menu.
 *
 *   Enable/Disable?:
 *   - Enables/disables Bestiary menu inside the main menu.
 *
 * ---
 *
 * System: Show Bestiary in Menu?
 * - Shows/hides Bestiary menu inside the main menu.
 *
 *   Show/Hide?:
 *   - Shows/hides Bestiary menu inside the main menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Enemy Categories List Settings
 * ============================================================================
 *
 * List of categories that are used for the bestiary.
 * 
 * By default, categories are hidden away until one enemy in that category has
 * been seen (not necessarily defeated). Once seen, the category is visible for
 * the player to browser through. This is to prevent spoilers based on the
 * category name (in case the game developer decides to name categories based
 * on regions for example).
 * 
 * The "Default Category", however, will always be visible to the player
 * regardless of whether or not an enemy has been seen inside of it. Therefore,
 * it's best to use the "Default Category" as a category for commonly seen
 * enemies in the game.
 *
 * ---
 *
 * Category
 * 
 *   ID Key:
 *   - This category's identification key.
 *   - Categories require unique keys for the plugin to differentiate them.
 *   - Used with <Bestiary Category: x> notetag.
 * 
 *   Title:
 *   - This category's title.
 *   - You may use text codes.
 *
 * ---
 *
 * Plugin Parameters
 * 
 *   Default Category:
 *   - Default enemy category when no notetag is used.
 * 
 *   Show All Categories?:
 *   - Show all categories or reveal them as more enemies are defeated?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Main Menu Settings
 * ============================================================================
 *
 * Set up the main menu defaults.
 *
 * ---
 *
 * Main Menu Settings
 * 
 *   Command Name:
 *   - Name of the 'Bestiary' option in the Main Menu.
 * 
 *   Show in Main Menu?:
 *   - Add the 'Bestiary' option to the Main Menu by default?
 * 
 *   Enable in Main Menu?:
 *   - Enable the 'Bestiary' option to the Main Menu by default?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_Bestiary.
 *
 * ---
 *
 * Background Settings
 * 
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 * 
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These settings let you adjust the text displayed for this plugin.
 *
 * ---
 *
 * Button Assist Window
 * 
 *   Collapse:
 *   - Text used to collapse a category.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Expand:
 *   - Text used to expand a category.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Scroll Fast:
 *   - Text used to scroll enemy lore quickly.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Scroll Slow:
 *   - Text used to scroll enemy lore slowly.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Switch Enemy:
 *   - Text used to switch an enemy.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   View:
 *   - Text used to view an enemy.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 * ---
 * 
 * Main Windows > List Window
 * 
 *   Category (Closed):
 *   Category (Opened):
 *   - Text format used for closed/open categories.
 *   - %1 - Category Name, %2 - Percent Complete
 * 
 *     Decimal Places:
 *     - Decimal places for completion percentages.
 * 
 *   Mask Character:
 *   - Text character used to mask unknown enemy names.
 *
 * ---
 * 
 * Main Windows > Name Window
 * 
 *   Category Text:
 *   - Text used when selecting an enemy.
 * 
 * ---
 * 
 * Main Windows > Sub Window
 * 
 *   Completion Rate:
 *   - Text used to announce completion rate.
 *   - %1 - Percentage, %2 - Defeated, %3 - Total
 * 
 *     Decimal Places:
 *     - Decimal places for completion percentage.
 * 
 *   Defeated:
 *   - Text used to announce defeated monsters.
 *   - %1 - Defeated Number
 * 
 *   Encountered:
 *   - Text used to announce encountered monsters.
 *   - %1 - Encountered Number
 *
 * ---
 *
 * Data Windows > Category Window
 * 
 *   Basic Text:
 *   Elements Text:
 *   Skills Text:
 *   Rewards Text:
 *   Traits Text:
 *   Lore Text:
 *   - Text used for this command.
 * 
 *     Icon:
 *     - Icon used for this command.
 * 
 * ---
 * 
 * Data Windows > Basic Window
 * 
 *   Level Up To Max:
 *   Level Up By One:
 *   Level Down By One:
 *   Level Down To Min:
 *   - Text used for leveling.
 *   - Text codes allowed.
 *   - Requires VisuMZ_3_EnemyLevels!
 *   - %1 - Level Name
 * 
 * ---
 * 
 * Data Windows > Elements Window
 * 
 *   Weak to Element:
 *   Neutral to Element:
 *   Resistant to Element:
 *   Immune to Element:
 *   Absorbs Element:
 *   - Text used with this elemental affinity.
 *   - Text codes allowed.
 * 
 * ---
 * 
 * Data Windows > Rewards Window
 * 
 *   Drop Rate 100%:
 *   Drop Rate >= 50%:
 *   Drop Rate >= 20%:
 *   Drop Rate >= 10%:
 *   Drop Rate < 10%:
 *   Conditional Rate:
 *   - Text used for this kind of drop rate.
 *   - Text codes allowed.
 * 
 * ---
 * 
 * Data Windows > Traits Window
 * 
 *   Category (Closed):
 *   Category (Opened):
 *   - Text format used for closed/open categories.
 *   - Text codes allowed.
 *   - %1 - Category Name
 * 
 *   Help Description:
 *   - Help description used for trait categories.
 *   - Text codes allowed.
 * 
 *   Null Help:
 *   - Help description used for no traits.
 *   - Text codes allowed.
 *
 * ---
 *
 * Data Windows > Lore Window
 * 
 *   Default Lore:
 *   - Text when no lore is found.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * These settings let you adjust the windows displayed for this plugin.
 *
 * ---
 *
 * Help Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Scale Window:
 *   - Scale the help window to fit with the enemy preview window?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Main Windows > Image Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Blur Strength:
 *   - What is the blur strength used for unknown enemies?
 * 
 *   Default Battleback 1:
 *   Default Battleback 2:
 *   - Default battleback 1 image used for enemies without
 *     <Bestiary Battleback 1: filename> and <Bestiary Battleback 2: filename>
 *     notetags.
 * 
 *   Padding:
 *   - What is the padding value used for this window?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Main Windows > List Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Delay MS:
 *   - How many milliseconds (MS) to delay the preview update?
 *   - This is to prevent lag spikes.
 * 
 *   Mask Unknown Enemies:
 *   - Apply a character mask to unknown enemies?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Main Windows > Name Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Main Windows > Sub Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Data Windows
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for all data windows.
 * 
 * ---
 * 
 * Data Windows > Category Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Category Order:
 *   - What order do you want the commands to appear in?
 * 
 *   Style:
 *   - How do you wish to draw commands for this window?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Data Windows > Basic Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Show Level Change:
 *   - Show level change commands?
 *   - Requires VisuMZ_3_EnemyLevels!
 * 
 * ---
 * 
 * Data Windows > Elements Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 * ---
 * 
 * Data Windows > Skills Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 * ---
 * 
 * Data Windows > Rewards Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Rewards Order:
 *   - What order do you want the rewards to appear in?
 * 
 *   Reward EXP Icon:
 *   - Icon used for EXP reward.
 * 
 *   Reward Gold Icon:
 *   - Icon used for Gold reward.
 * 
 * ---
 * 
 * Data Windows > Traits Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Show All Traits:
 *   - Show all traits? Including unused ones?
 *   - Requires VisuMZ_1_ElementStatusCore!
 *
 * ---
 *
 * Data Windows > Lore Window
 * 
 *   Auto Word Wrap?:
 *   - Automatically enable word wrap?
 *   - Requires VisuMZ_1_MessageCore!
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Font Size:
 *   - Font size used for Lore Window.
 * 
 *   Scrolling > Slow:
 * 
 *     Scroll Speed:
 *     - What speed will Up/Down scroll the window at?
 *     - Lower is slower. Higher is faster.
 * 
 *     Sound Frequency:
 *     - How frequent will Up/Down scrolling make sounds?
 *     - Lower is quicker. Higher is later.
 * 
 *   Scrolling > Fast:
 * 
 *     Scroll Speed:
 *     - What speed will Up/Down scroll the window at?
 *     - Lower is slower. Higher is faster.
 * 
 *     Sound Frequency:
 *     - How frequent will Up/Down scrolling make sounds?
 *     - Lower is quicker. Higher is later.
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
 * Version 1.05: February 15, 2024
 * * Bug Fixes!
 * ** Fixed a problem where enemies weren't showing up at all in the bestiary.
 *    Fix made by Olivia.
 * 
 * Version 1.04: January 18, 2024
 * * Bug Fixes!
 * ** Fixed a problem with the <Bestiary Custom Picture: filename> notetag
 *    causing a crash. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Olivia:
 * *** Bestiary: Reveal Enemies
 * **** Reveals bestiary information for target enemies without needing to
 *      defeat them. Must not be forcefully hidden.
 * ** New Plugin Parameter added by Olivia:
 * *** Categories > Show All Categories?
 * **** Show all categories or reveal them as more enemies are defeated?
 * 
 * Version 1.03: December 14, 2023
 * * Documentation Update!
 * ** Added clarity to the "Extra Features" section:
 * *** VisuMZ_1_ElementStatusCore
 * **** Any elements listed in the Elements & Status Menu Core's Plugin
 *      Parameters list for "Status Menu Settings" and "Excluded Elements" will
 *      also be excluded in the Bestiary.
 * 
 * Version 1.02: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevented the vocabulary for "Lower Level" from
 *    reflecting the changes found in the Plugin Parameters. Fix by Olivia.
 * 
 * Version 1.01: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that allowed players to scroll to unrevealed enemies. Fix
 *    made by Irina.
 * 
 * Version 1.00 Official Release Date: April 3, 2023
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
 * @command BestiaryRevealEnemies
 * @text Bestiary: Reveal Enemies
 * @desc Reveals bestiary information for target enemies without
 * needing to defeat them. Must not be forcefully hidden.
 *
 * @arg EnemyIDs:arraynum
 * @text Enemy ID(s)
 * @type enemy[]
 * @desc Reveals Bestiary information for target enemies.
 * Must not be forcefully hidden.
 * @default ["1","2","3","4"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Debug
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DebugFullBestiary
 * @text Debug: Full Bestiary?
 * @desc For playtest only! Allows you to fully view Bestiary.
 * Resets when the game client is closed.
 *
 * @arg Reveal:eval
 * @text Reveal?
 * @type boolean
 * @on Reveal
 * @off Normal
 * @desc Fully reveals Bestiary for playtesting.
 * Resets when the game client is closed.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Scene
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SceneOpenBestiary
 * @text Scene: Open Bestiary
 * @desc Opens the Bestiary scene.
 * Cannot be used in battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableBestiaryMenu
 * @text System: Enable Bestiary in Menu?
 * @desc Enables/disables Bestiary menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables Bestiary menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowBestiaryMenu
 * @text System: Show Bestiary in Menu?
 * @desc Shows/hides Bestiary menu inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Bestiary menu inside the main menu.
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
 * @param Bestiary
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Categories:arraystruct
 * @text Enemy Categories List
 * @type struct<Category>[]
 * @desc List of categories that are used for the bestiary.
 * @default ["{\"Key:str\":\"Common\",\"Title:str\":\"\\\\C[6]Common Monsters\"}","{\"Key:str\":\"Elite\",\"Title:str\":\"\\\\C[4]Elite Monsters\"}","{\"Key:str\":\"MiniBoss\",\"Title:str\":\"\\\\C[5]Mini-Bosses\"}","{\"Key:str\":\"Boss\",\"Title:str\":\"\\\\C[2]Bosses\"}"]
 *
 * @param DefaultCategory:str
 * @text Default Category
 * @parent Categories:arraystruct
 * @desc Default enemy category when no notetag is used.
 * @default Common
 *
 * @param ShowAllCategories:eval
 * @text Show All Categories?
 * @parent Categories:arraystruct
 * @type boolean
 * @on Show All
 * @off Reveal
 * @desc Show all categories or reveal them as more enemies are defeated?
 * @default false
 *
 * @param MainMenu:struct
 * @text Main Menu Settings
 * @type struct<MainMenu>
 * @desc Main Menu settings for Bestiary.
 * @default {"Name:str":"Bestiary","ShowMainMenu:eval":"true","EnableMainMenu:eval":"true"}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for Scene_Bestiary.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"ButtonAssist":"","buttonAssist_Collapse:str":"Collapse","buttonAssist_Expand:str":"Expand","buttonAssist_FastScroll:str":"Fast Scroll","buttonAssist_SlowScroll:str":"Scroll","buttonAssist_Switch:str":"Switch Monster","buttonAssist_View:str":"View","MainWindows":"","CategoryWindow":"","CategoryWindow_ClosedCategory:str":"+ %1 (%2%)","CategoryWindow_OpenCategory:str":"- %1 (%2%)","CategoryPercentFixedDigits:num":"2","CategoryWindow_MaskChar:str":"?","NameWindow":"","NameWindow_CategoryText:str":"Please select a monster to view.","SubWindow":"","SubWindow_Completion:str":"Bestiary Completion Rate: %1% (%2/%3 Monsters)","SubWindowCompleteFixedDigits:num":"2","SubWindow_Defeated:str":"Defeated: %1","SubWindow_Encountered:str":"Encountered: %1","DataWindows":"","DataCategoryWindow":"","BasicText:str":"Base","BasicIcon:str":"84","ElementsText:str":"Elements","ElementsIcon:str":"64","SkillsText:str":"Skills","SkillsIcon:str":"79","RewardsText:str":"Rewards","RewardsIcon:str":"87","TraitsText:str":"Properties","TraitsIcon:str":"83","LoreText:str":"Lore","LoreIcon:str":"80","BasicWindow":"","BasicWindow_LevelUpToMax:str":"\\I[73]Raise %1 Up to Maximum","BasicWindow_LevelUpByOne:str":"\\I[73]Raise %1 Up","BasicWindow_LevelDownByOne:str":"\\I[74]Lower %1 Down","BasicWindow_LevelDownToMin:str":"\\I[74]Lower %1 Down to Minimum","ElementsWindow":"","ElementsWindow_Weak:str":"\\C[24]Weak","ElementsWindow_Neutral:str":"\\C[0]Normal","ElementsWindow_Resist:str":"\\C[25]Resist","ElementsWindow_Immune:str":"\\C[7]Immune","ElementsWindow_Absorb:str":"\\C[27]Absorb","RewardsWindow":"","RewardsWindow_Chance100:str":"\\C[24]Guaranteed","RewardsWindow_Chance50:str":"\\C[21]Common","RewardsWindow_Chance20:str":"\\C[4]Uncommon","RewardsWindow_Chance10:str":"\\C[5]Rare","RewardsWindow_Chance0:str":"\\C[27]Super Rare","RewardsWindow_Conditional:str":"\\C[17]Conditional","TraitsWindow":"","TraitsWindow_ClosedCategory:str":"+ \\C[16]%1","TraitsWindow_OpenCategory:str":"- \\C[16]%1","TraitsWindow_CategoryHelpDesc:json":"\"This is the property type.\"","TraitsWindow_NullHelpDesc:json":"\"This monster has no special properties.\"","LoreWindow":"","LoreWindow_Default:json":"\"Little is known about this monster.\""}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you adjust the windows displayed for this plugin.
 * @default {"HelpWindow":"","HelpWindow_BgType:num":"0","HelpWindow_ScaleRatio:eval":"true","HelpWindow_RectJS:func":"\"const imgRect = this.imageWindowRect();\\nconst ratio = this.helpWindowRatio();\\n\\nconst ww = Graphics.boxWidth;\\nconst wh = this.calcWindowHeight(2, false);\\nconst wx = imgRect.x;\\nconst wy = imgRect.y + (this.isBottomHelpMode() ? (imgRect.height - (wh * ratio)) : 0);\\nreturn new Rectangle(wx, wy, ww, wh);\"","MainWindows":"","ImageWindow":"","ImageWindow_BgType:num":"0","ImageWindow_BlurStrength:num":"8","ImageWindow_Battleback1:str":"Grassland","ImageWindow_Battleback2:str":"Grassland","ImageWindow_Padding:num":"4","ImageWindow_RectJS:func":"\"const ww = Graphics.boxWidth - Math.ceil(Graphics.boxWidth * 4/10);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 2);\\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false);\\nreturn new Rectangle(wx, wy, ww, wh);\"","ListWindow":"","ListWindow_BgType:num":"0","ListWindowDelayMS:num":"240","ListWindow_MaskUnknown:eval":"true","ListWindow_RectJS:func":"\"const ww = Math.ceil(Graphics.boxWidth * 4/10);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 2);\\nconst wx = this.isRightInputMode() ? (Graphics.boxWidth - ww) : 0;\\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false);\\nreturn new Rectangle(wx, wy, ww, wh);\"","NameWindow":"","NameWindow_BgType:num":"0","NameWindow_RectJS:func":"\"const ww = Graphics.boxWidth;\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = 0;\\nconst wy = this.mainAreaTop();\\nreturn new Rectangle(wx, wy, ww, wh);\"","SubWindow":"","SubWindow_BgType:num":"0","SubWindow_RectJS:func":"\"const ww = Graphics.boxWidth;\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = 0;\\nconst wy = this.mainAreaBottom() - wh;\\nreturn new Rectangle(wx, wy, ww, wh);\"","DataWindows":"","DataWindow_RectJS:func":"\"const ww = this.listWindowRect().width;\\nconst wh = this.mainAreaHeight() - this.calcWindowHeight(1, true) - (this.calcWindowHeight(1, false) * 2);\\nconst wx = this.listWindowRect().x;\\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false) + this.calcWindowHeight(1, true);\\nreturn new Rectangle(wx, wy, ww, wh);\"","CategoryWindow":"","CategoryWindow_BgType:num":"0","CategoryWindow_CommandOrder:arraystr":"[\"basic\",\"elements\",\"skills\",\"rewards\",\"traits\",\"lore\"]","CategoryWindow_Style:str":"auto","DataCategoriesWindow_RectJS:func":"\"const ww = this.listWindowRect().width;\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = this.listWindowRect().x;\\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false);\\nreturn new Rectangle(wx, wy, ww, wh);\"","BasicWindow":"","BasicWindow_BgType:num":"0","BasicWindow_ShowLevelChange:eval":"true","ElementsWindow":"","ElementsWindow_BgType:num":"0","SkillsWindow":"","SkillsWindow_BgType:num":"0","RewardsWindow":"","RewardsWindow_BgType:num":"0","RewardsWindow_RewardsOrder:arraystr":"[\"exp\",\"ap\",\"cp\",\"jp\",\"sp\",\"gold\",\"items\"]","EXP_Icon:num":"87","Gold_Icon:num":"314","TraitsWindow":"","TraitsWindow_BgType:num":"0","TraitsWindow_ShowAllTraits:eval":"false","LoreWindow":"","LoreWindow_AutoWordWrap:eval":"false","LoreWindow_BgType:num":"0","LoreWindow_FontSize:num":"22","Scrolling":"","Slow":"","SlowScrollSpeed:num":"8","SlowSoundFreq:num":"8","Fast":"","FastScrollSpeed:num":"32","FastSoundFreq:num":"4"}
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
 * Category List Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param Key:str
 * @text ID Key
 * @desc This category's identification key. Categories require
 * unique keys for the plugin to differentiate them.
 * @default (Needs Key)
 *
 * @param Title:str
 * @text Title
 * @desc This category's title.
 * You may use text codes.
 * @default Untitled
 * 
 */
/* ----------------------------------------------------------------------------
 * MainMenu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param Name:str
 * @text Command Name
 * @parent Options
 * @desc Name of the 'Bestiary' option in the Main Menu.
 * @default Bestiary
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Bestiary' option to the Main Menu by default?
 * @default true
 *
 * @param EnableMainMenu:eval
 * @text Enable in Main Menu?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the 'Bestiary' option to the Main Menu by default?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @require 1
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @require 1
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssist_Collapse:str
 * @text Collapse
 * @parent ButtonAssist
 * @desc Text used to collapse a category.
 * Requires VisuMZ_0_CoreEngine!
 * @default Collapse
 *
 * @param buttonAssist_Expand:str
 * @text Expand
 * @parent ButtonAssist
 * @desc Text used to expand a category.
 * Requires VisuMZ_0_CoreEngine!
 * @default Expand
 *
 * @param buttonAssist_FastScroll:str
 * @text Scroll Fast
 * @parent ButtonAssist
 * @desc Text used to scroll enemy lore quickly.
 * Requires VisuMZ_0_CoreEngine!
 * @default Fast Scroll
 *
 * @param buttonAssist_SlowScroll:str
 * @text Scroll Slow
 * @parent ButtonAssist
 * @desc Text used to scroll enemy lore slowly.
 * Requires VisuMZ_0_CoreEngine!
 * @default Scroll
 *
 * @param buttonAssist_Switch:str
 * @text Switch Enemy
 * @parent ButtonAssist
 * @desc Text used to switch an enemy.
 * Requires VisuMZ_0_CoreEngine!
 * @default Switch Monster
 *
 * @param buttonAssist_View:str
 * @text View
 * @parent ButtonAssist
 * @desc Text used to view an enemy.
 * Requires VisuMZ_0_CoreEngine!
 * @default View
 *
 * @param MainWindows
 * @text Main Windows
 *
 * @param CategoryWindow
 * @text List Window
 * @parent MainWindows
 *
 * @param CategoryWindow_ClosedCategory:str
 * @text Category (Closed)
 * @parent CategoryWindow
 * @desc Text format used for closed categories.
 * %1 - Category Name, %2 - Percent Complete
 * @default + %1 (%2%)
 *
 * @param CategoryWindow_OpenCategory:str
 * @text Category (Opened)
 * @parent CategoryWindow
 * @desc Text format used for opened categories.
 * %1 - Category Name, %2 - Percent Complete
 * @default - %1 (%2%)
 *
 * @param CategoryPercentFixedDigits:num
 * @text Decimal Places
 * @parent CategoryWindow_OpenCategory:str
 * @type number
 * @desc Decimal places for completion percentages.
 * @default 2
 *
 * @param CategoryWindow_MaskChar:str
 * @text Mask Character
 * @parent CategoryWindow
 * @desc Text character used to mask unknown enemy names.
 * @default ?
 *
 * @param NameWindow
 * @text Name Window
 * @parent MainWindows
 *
 * @param NameWindow_CategoryText:str
 * @text Category Text
 * @parent NameWindow
 * @desc Text used when selecting an enemy.
 * @default Please select a monster to view.
 *
 * @param SubWindow
 * @text Sub Window
 * @parent MainWindows
 *
 * @param SubWindow_Completion:str
 * @text Completion Rate
 * @parent SubWindow
 * @desc Text used to announce completion rate.
 * %1 - Percentage, %2 - Defeated, %3 - Total
 * @default Bestiary Completion Rate: %1% (%2/%3 Monsters)
 *
 * @param SubWindowCompleteFixedDigits:num
 * @text Decimal Places
 * @parent SubWindow_Completion:str
 * @type number
 * @desc Decimal places for completion percentage.
 * @default 2
 *
 * @param SubWindow_Defeated:str
 * @text Defeated
 * @parent SubWindow
 * @desc Text used to announce defeated monsters.
 * %1 - Defeated Number
 * @default Defeated: %1
 *
 * @param SubWindow_Encountered:str
 * @text Encountered
 * @parent SubWindow
 * @desc Text used to announce encountered monsters.
 * %1 - Encountered Number
 * @default Encountered: %1
 *
 * @param DataWindows
 * @text Data Windows
 *
 * @param DataCategoryWindow
 * @text Category Window
 * @parent DataWindows
 *
 * @param BasicText:str
 * @text Basic Text
 * @parent DataCategoryWindow
 * @desc Text used for this command.
 * @default Base
 *
 * @param BasicIcon:str
 * @text Icon
 * @parent BasicText:str
 * @desc Icon used for this command.
 * @default 84
 *
 * @param ElementsText:str
 * @text Elements Text
 * @parent DataCategoryWindow
 * @desc Text used for this command.
 * @default Elements
 *
 * @param ElementsIcon:str
 * @text Icon
 * @parent ElementsText:str
 * @desc Icon used for this command.
 * @default 64
 *
 * @param SkillsText:str
 * @text Skills Text
 * @parent DataCategoryWindow
 * @desc Text used for this command.
 * @default Skills
 *
 * @param SkillsIcon:str
 * @text Icon
 * @parent SkillsText:str
 * @desc Icon used for this command.
 * @default 79
 *
 * @param RewardsText:str
 * @text Rewards Text
 * @parent DataCategoryWindow
 * @desc Text used for this command.
 * @default Rewards
 *
 * @param RewardsIcon:str
 * @text Icon
 * @parent RewardsText:str
 * @desc Icon used for this command.
 * @default 87
 *
 * @param TraitsText:str
 * @text Traits Text
 * @parent DataCategoryWindow
 * @desc Text used for this command.
 * @default Properties
 *
 * @param TraitsIcon:str
 * @text Icon
 * @parent TraitsText:str
 * @desc Icon used for this command.
 * @default 83
 *
 * @param LoreText:str
 * @text Lore Text
 * @parent DataCategoryWindow
 * @desc Text used for this command.
 * @default Lore
 *
 * @param LoreIcon:str
 * @text Icon
 * @parent LoreText:str
 * @desc Icon used for this command.
 * @default 80
 *
 * @param BasicWindow
 * @text Basic Window
 * @parent DataWindows
 *
 * @param BasicWindow_LevelUpToMax:str
 * @text Level Up To Max
 * @parent BasicWindow
 * @desc Text used for leveling to max. Text codes allowed.
 * Requires VisuMZ_3_EnemyLevels! %1 - Level Name
 * @default \I[73]Raise %1 Up to Maximum
 *
 * @param BasicWindow_LevelUpByOne:str
 * @text Level Up By One
 * @parent BasicWindow
 * @desc Text used for leveling by one. Text codes allowed.
 * Requires VisuMZ_3_EnemyLevels! %1 - Level Name
 * @default \I[73]Raise %1 Up
 *
 * @param BasicWindow_LevelDownByOne:str
 * @text Level Down By One
 * @parent BasicWindow
 * @desc Text used for deleveling by one. Text codes allowed.
 * Requires VisuMZ_3_EnemyLevels! %1 - Level Name
 * @default \I[74]Lower %1 Down
 *
 * @param BasicWindow_LevelDownToMin:str
 * @text Level Down To Min
 * @parent BasicWindow
 * @desc Text used for deleveling to min. Text codes allowed.
 * Requires VisuMZ_3_EnemyLevels! %1 - Level Name
 * @default \I[74]Lower %1 Down to Minimum
 *
 * @param ElementsWindow
 * @text Elements Window
 * @parent DataWindows
 *
 * @param ElementsWindow_Weak:str
 * @text Weak to Element
 * @parent ElementsWindow
 * @desc Text used when weak to element.
 * Text codes allowed.
 * @default \C[24]Weak
 *
 * @param ElementsWindow_Neutral:str
 * @text Neutral to Element
 * @parent ElementsWindow
 * @desc Text used when neutral to element.
 * Text codes allowed.
 * @default \C[0]Normal
 *
 * @param ElementsWindow_Resist:str
 * @text Resistant to Element
 * @parent ElementsWindow
 * @desc Text used when resistant to element.
 * Text codes allowed.
 * @default \C[25]Resist
 *
 * @param ElementsWindow_Immune:str
 * @text Immune to Element
 * @parent ElementsWindow
 * @desc Text used when immune to element.
 * Text codes allowed.
 * @default \C[7]Immune
 *
 * @param ElementsWindow_Absorb:str
 * @text Absorbs Element
 * @parent ElementsWindow
 * @desc Text used when absorbs element.
 * Text codes allowed.
 * @default \C[27]Absorb
 *
 * @param RewardsWindow
 * @text Rewards Window
 * @parent DataWindows
 *
 * @param RewardsWindow_Chance100:str
 * @text Drop Rate 100%
 * @parent RewardsWindow
 * @desc Text used for 100% drop rates.
 * Text codes allowed.
 * @default \C[24]Guaranteed
 *
 * @param RewardsWindow_Chance50:str
 * @text Drop Rate >= 50%
 * @parent RewardsWindow
 * @desc Text used for greater than 50% drop rates.
 * Text codes allowed.
 * @default \C[21]Common
 *
 * @param RewardsWindow_Chance20:str
 * @text Drop Rate >= 20%
 * @parent RewardsWindow
 * @desc Text used for greater than 20% drop rates.
 * Text codes allowed.
 * @default \C[4]Uncommon
 *
 * @param RewardsWindow_Chance10:str
 * @text Drop Rate >= 10%
 * @parent RewardsWindow
 * @desc Text used for greater than 10% drop rates.
 * Text codes allowed.
 * @default \C[5]Rare
 *
 * @param RewardsWindow_Chance0:str
 * @text Drop Rate < 10%
 * @parent RewardsWindow
 * @desc Text used for less than 10% drop rates.
 * Text codes allowed.
 * @default \C[27]Super Rare
 *
 * @param RewardsWindow_Conditional:str
 * @text Conditional Rate
 * @parent RewardsWindow
 * @desc Text used for conditional drop rates.
 * Requires VisuMZ_4_ExtraEnemyDrops! Text codes allowed.
 * @default \C[17]Conditional
 *
 * @param TraitsWindow
 * @text Traits Window
 * @parent DataWindows
 *
 * @param TraitsWindow_ClosedCategory:str
 * @text Category (Closed)
 * @parent TraitsWindow
 * @desc Text format used for closed categories.
 * Text codes allowed. %1 - Category Name
 * @default + \C[16]%1
 *
 * @param TraitsWindow_OpenCategory:str
 * @text Category (Opened)
 * @parent TraitsWindow
 * @desc Text format used for opened categories.
 * Text codes allowed. %1 - Category Name
 * @default - \C[16]%1
 *
 * @param TraitsWindow_CategoryHelpDesc:json
 * @text Help Description
 * @parent TraitsWindow_OpenCategory:str
 * @type note
 * @desc Help description used for trait categories.
 * Text codes allowed.
 * @default "This is the property type."
 *
 * @param TraitsWindow_NullHelpDesc:json
 * @text Null Help
 * @parent TraitsWindow
 * @type note
 * @desc Help description used for no traits.
 * Text codes allowed.
 * @default "This monster has no special properties."
 *
 * @param LoreWindow
 * @text Lore Window
 * @parent DataWindows
 *
 * @param LoreWindow_Default:json
 * @text Default Lore
 * @parent LoreWindow
 * @type note
 * @desc Text when no lore is found.
 * Text codes allowed.
 * @default "Little is known about this monster."
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param HelpWindow
 * @text Help Window
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
 * @default 0
 *
 * @param HelpWindow_ScaleRatio:eval
 * @text Scale Window
 * @parent HelpWindow
 * @type boolean
 * @on ON
 * @off OFF
 * @desc Scale the help window to fit with the enemy preview window?
 * @default true
 *
 * @param HelpWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth;\nconst wh = this.calcWindowHeight(2, false);\nconst wx = this.imageWindowRect().x;\nconst wy = this.imageWindowRect().y;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param MainWindows
 * @text Main Windows
 *
 * @param ImageWindow
 * @text Image Window
 * @parent MainWindows
 *
 * @param ImageWindow_BgType:num
 * @text Background Type
 * @parent ImageWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ImageWindow_BlurStrength:num
 * @text Blur Strength
 * @parent ImageWindow
 * @type number
 * @desc What is the blur strength used for unknown enemies?
 * @default 8
 *
 * @param ImageWindow_Battleback1:str
 * @text Default Battleback 1
 * @parent ImageWindow
 * @type file
 * @dir img/battlebacks1/
 * @require 1
 * @desc Default battleback 1 image used for enemies
 * without <Bestiary Battleback 1: filename> notetag.
 * @default Grassland
 *
 * @param ImageWindow_Battleback2:str
 * @text Default Battleback 2
 * @parent ImageWindow
 * @type file
 * @dir img/battlebacks2/
 * @require 1
 * @desc Default battleback 2 image used for enemies
 * without <Bestiary Battleback 2: filename> notetag.
 * @default Grassland
 *
 * @param ImageWindow_Padding:num
 * @text Padding
 * @parent ImageWindow
 * @type number
 * @desc What is the padding value used for this window?
 * @default 4
 *
 * @param ImageWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent ImageWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - Math.ceil(Graphics.boxWidth * 4/10);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 2);\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ListWindow
 * @text List Window
 * @parent MainWindows
 *
 * @param ListWindow_BgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListWindowDelayMS:num
 * @text Delay MS
 * @parent ListWindow
 * @type number
 * @min 1
 * @max 999
 * @desc How many milliseconds (MS) to delay the preview update?
 * This is to prevent lag spikes.
 * @default 240
 *
 * @param ListWindow_MaskUnknown:eval
 * @text Mask Unknown Enemies
 * @parent ListWindow
 * @type boolean
 * @on ON
 * @off OFF
 * @desc Apply a character mask to unknown enemies?
 * @default true
 *
 * @param ListWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.ceil(Graphics.boxWidth * 4/10);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 2);\nconst wx = this.isRightInputMode() ? (Graphics.boxWidth - ww) : 0;\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param NameWindow
 * @text Name Window
 * @parent MainWindows
 *
 * @param NameWindow_BgType:num
 * @text Background Type
 * @parent NameWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param NameWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent NameWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth;\nconst wh = this.calcWindowHeight(1, false);\nconst wx = 0;\nconst wy = this.mainAreaTop();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param SubWindow
 * @text Sub Window
 * @parent MainWindows
 *
 * @param SubWindow_BgType:num
 * @text Background Type
 * @parent SubWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SubWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent SubWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth;\nconst wh = this.calcWindowHeight(1, false);\nconst wx = 0;\nconst wy = this.mainAreaBottom() - wh;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param DataWindows
 * @text Data Window
 *
 * @param DataWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent DataWindows
 * @type note
 * @desc Code used to determine the dimensions for all data windows.
 * @default "const ww = this.listWindowRect().width;\nconst wh = this.mainAreaHeight() - this.calcWindowHeight(1, true) - (this.calcWindowHeight(1, false) * 2);\nconst wx = 0;\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false) + this.calcWindowHeight(1, true);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param CategoryWindow
 * @text Category Window
 * @parent DataWindows
 *
 * @param CategoryWindow_BgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryWindow_CommandOrder:arraystr
 * @text Command Order
 * @parent CategoryWindow
 * @type select[]
 * @option Basic - Basic parameter data
 * @value basic
 * @option Elements - Elemental resistances and weaknesses
 * @value elements
 * @option Skills - Usable skills in-battle
 * @value skills
 * @option Rewards - EXP, Gold, Drop Items
 * @value rewards
 * @option Traits - For VisuMZ_1_ElementStatusCore.js
 * @value traits
 * @option Lore - Background Information
 * @value lore
 * @desc What order do you want the commands to appear in?
 * @default ["basic","elements","skills","rewards","traits","lore"]
 *
 * @param CategoryWindow_Style:str
 * @text Style
 * @parent CategoryWindow
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands for this window?
 * @default auto
 *
 * @param DataCategoriesWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this.listWindowRect().width;\nconst wh = this.calcWindowHeight(1, true);\nconst wx = 0;\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param BasicWindow
 * @text Basic Window
 * @parent DataWindows
 *
 * @param BasicWindow_BgType:num
 * @text Background Type
 * @parent BasicWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param BasicWindow_ShowLevelChange:eval
 * @text Show Level Change
 * @parent BasicWindow
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show level change commands?
 * Requires VisuMZ_3_EnemyLevels!
 * @default true
 *
 * @param ElementsWindow
 * @text Elements Window
 * @parent DataWindows
 *
 * @param ElementsWindow_BgType:num
 * @text Background Type
 * @parent ElementsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SkillsWindow
 * @text Skills Window
 * @parent DataWindows
 *
 * @param SkillsWindow_BgType:num
 * @text Background Type
 * @parent SkillsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param RewardsWindow
 * @text Rewards Window
 * @parent DataWindows
 *
 * @param RewardsWindow_BgType:num
 * @text Background Type
 * @parent RewardsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param RewardsWindow_RewardsOrder:arraystr
 * @text Rewards Order
 * @parent RewardsWindow
 * @type select[]
 * @option EXP - Experience Points
 * @value exp
 * @option Gold - Gold Currency
 * @value gold
 * @option Drop Items - Enemy Drop Items
 * @value items
 * @option AP - For VisuMZ_2_SkillLearnSystem.js
 * @value ap
 * @option CP - For VisuMZ_2_ClassChangeSystem.js
 * @value cp
 * @option JP - For VisuMZ_2_ClassChangeSystem.js
 * @value jp
 * @option SP - For VisuMZ_2_SkillLearnSystem.js
 * @value sp
 * @desc What order do you want the rewards to appear in?
 * @default ["exp","ap","cp","jp","sp","gold","items"]
 *
 * @param EXP_Icon:num
 * @text Reward EXP Icon
 * @parent RewardsWindow
 * @desc Icon used for EXP reward.
 * @default 87
 *
 * @param Gold_Icon:num
 * @text Reward Gold Icon
 * @parent RewardsWindow
 * @desc Icon used for Gold reward.
 * @default 314
 *
 * @param TraitsWindow
 * @text Traits Window
 * @parent DataWindows
 *
 * @param TraitsWindow_BgType:num
 * @text Background Type
 * @parent TraitsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param TraitsWindow_ShowAllTraits:eval
 * @text Show All Traits
 * @parent TraitsWindow
 * @type boolean
 * @on Include Unused
 * @off Show Only Used
 * @desc Show all traits? Including unused ones?
 * Requires VisuMZ_1_ElementStatusCore!
 * @default false
 *
 * @param LoreWindow
 * @text Lore Window
 * @parent DataWindows
 *
 * @param LoreWindow_AutoWordWrap:eval
 * @text Auto Word Wrap?
 * @parent LoreWindow
 * @type boolean
 * @on Word Wrap
 * @off Normal
 * @desc Automatically enable word wrap?
 * Requires VisuMZ_1_MessageCore!
 * @default false
 *
 * @param LoreWindow_BgType:num
 * @text Background Type
 * @parent LoreWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param LoreWindow_FontSize:num
 * @text Font Size
 * @parent LoreWindow
 * @desc Font size used for Lore Window.
 * @default 22
 *
 * @param Scrolling
 * @parent LoreWindow
 *
 * @param Slow
 * @parent Scrolling
 *
 * @param SlowScrollSpeed:num
 * @text Scroll Speed
 * @parent Slow
 * @type number
 * @min 1
 * @desc What speed will Up/Down scroll the window at?
 * Lower is slower. Higher is faster.
 * @default 8
 *
 * @param SlowSoundFreq:num
 * @text Sound Frequency
 * @parent Slow
 * @type number
 * @min 1
 * @desc How frequent will Up/Down scrolling make sounds?
 * Lower is quicker. Higher is later.
 * @default 8
 *
 * @param Fast
 * @parent Scrolling
 *
 * @param FastScrollSpeed:num
 * @text Scroll Speed
 * @parent Fast
 * @type number
 * @min 1
 * @desc What speed will PageUp/PageDn scroll the window at?
 * Lower is slower. Higher is faster.
 * @default 32
 *
 * @param FastSoundFreq:num
 * @text Sound Frequency
 * @parent Fast
 * @type number
 * @min 1
 * @desc How frequent will PageUp/PageDn scrolling make sounds?
 * Lower is quicker. Higher is later.
 * @default 4
 *
 */
//=============================================================================

const _0x6ebe4=_0xf398;(function(_0x56bc3d,_0x42ef5c){const _0x39978d=_0xf398,_0x37c739=_0x56bc3d();while(!![]){try{const _0x49061c=parseInt(_0x39978d(0x1ec))/0x1+parseInt(_0x39978d(0xce))/0x2*(parseInt(_0x39978d(0x323))/0x3)+-parseInt(_0x39978d(0x28f))/0x4+parseInt(_0x39978d(0x269))/0x5*(parseInt(_0x39978d(0x3ba))/0x6)+-parseInt(_0x39978d(0xcd))/0x7*(parseInt(_0x39978d(0x18c))/0x8)+parseInt(_0x39978d(0x257))/0x9*(parseInt(_0x39978d(0x385))/0xa)+-parseInt(_0x39978d(0x176))/0xb*(-parseInt(_0x39978d(0x2aa))/0xc);if(_0x49061c===_0x42ef5c)break;else _0x37c739['push'](_0x37c739['shift']());}catch(_0x1228d9){_0x37c739['push'](_0x37c739['shift']());}}}(_0x435b,0xc549d));var label=_0x6ebe4(0x1b2),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x11a2e6){const _0x501aca=_0x6ebe4;return _0x11a2e6[_0x501aca(0x2d1)]&&_0x11a2e6['description']['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x6ebe4(0x37d)]||{},VisuMZ[_0x6ebe4(0x326)]=function(_0x36b09f,_0x1e2c8b){const _0x34efd8=_0x6ebe4;for(const _0xbfe7ab in _0x1e2c8b){if(_0xbfe7ab[_0x34efd8(0x390)](/(.*):(.*)/i)){const _0x418024=String(RegExp['$1']),_0x114e04=String(RegExp['$2'])[_0x34efd8(0x97)]()[_0x34efd8(0x2fc)]();let _0x96ae7d,_0x3ac36e,_0x507cba;switch(_0x114e04){case _0x34efd8(0x329):_0x96ae7d=_0x1e2c8b[_0xbfe7ab]!==''?Number(_0x1e2c8b[_0xbfe7ab]):0x0;break;case _0x34efd8(0x3de):_0x3ac36e=_0x1e2c8b[_0xbfe7ab]!==''?JSON[_0x34efd8(0x34c)](_0x1e2c8b[_0xbfe7ab]):[],_0x96ae7d=_0x3ac36e['map'](_0x5e1cc5=>Number(_0x5e1cc5));break;case _0x34efd8(0x394):_0x96ae7d=_0x1e2c8b[_0xbfe7ab]!==''?eval(_0x1e2c8b[_0xbfe7ab]):null;break;case _0x34efd8(0x25a):_0x3ac36e=_0x1e2c8b[_0xbfe7ab]!==''?JSON[_0x34efd8(0x34c)](_0x1e2c8b[_0xbfe7ab]):[],_0x96ae7d=_0x3ac36e[_0x34efd8(0x3a0)](_0x288584=>eval(_0x288584));break;case'JSON':_0x96ae7d=_0x1e2c8b[_0xbfe7ab]!==''?JSON[_0x34efd8(0x34c)](_0x1e2c8b[_0xbfe7ab]):'';break;case'ARRAYJSON':_0x3ac36e=_0x1e2c8b[_0xbfe7ab]!==''?JSON['parse'](_0x1e2c8b[_0xbfe7ab]):[],_0x96ae7d=_0x3ac36e['map'](_0x2f4027=>JSON[_0x34efd8(0x34c)](_0x2f4027));break;case'FUNC':_0x96ae7d=_0x1e2c8b[_0xbfe7ab]!==''?new Function(JSON[_0x34efd8(0x34c)](_0x1e2c8b[_0xbfe7ab])):new Function(_0x34efd8(0x161));break;case'ARRAYFUNC':_0x3ac36e=_0x1e2c8b[_0xbfe7ab]!==''?JSON[_0x34efd8(0x34c)](_0x1e2c8b[_0xbfe7ab]):[],_0x96ae7d=_0x3ac36e[_0x34efd8(0x3a0)](_0x4017d2=>new Function(JSON[_0x34efd8(0x34c)](_0x4017d2)));break;case _0x34efd8(0x38d):_0x96ae7d=_0x1e2c8b[_0xbfe7ab]!==''?String(_0x1e2c8b[_0xbfe7ab]):'';break;case _0x34efd8(0x226):_0x3ac36e=_0x1e2c8b[_0xbfe7ab]!==''?JSON['parse'](_0x1e2c8b[_0xbfe7ab]):[],_0x96ae7d=_0x3ac36e[_0x34efd8(0x3a0)](_0x36646f=>String(_0x36646f));break;case _0x34efd8(0x38c):_0x507cba=_0x1e2c8b[_0xbfe7ab]!==''?JSON[_0x34efd8(0x34c)](_0x1e2c8b[_0xbfe7ab]):{},_0x96ae7d=VisuMZ[_0x34efd8(0x326)]({},_0x507cba);break;case _0x34efd8(0x318):_0x3ac36e=_0x1e2c8b[_0xbfe7ab]!==''?JSON[_0x34efd8(0x34c)](_0x1e2c8b[_0xbfe7ab]):[],_0x96ae7d=_0x3ac36e[_0x34efd8(0x3a0)](_0x4490b4=>VisuMZ[_0x34efd8(0x326)]({},JSON[_0x34efd8(0x34c)](_0x4490b4)));break;default:continue;}_0x36b09f[_0x418024]=_0x96ae7d;}}return _0x36b09f;},(_0x331afd=>{const _0x1c9b33=_0x6ebe4,_0x319d59=_0x331afd[_0x1c9b33(0xbd)];for(const _0x1424e1 of dependencies){if(_0x1c9b33(0xf1)===_0x1c9b33(0x14f)){const _0x4caacf=_0x1bbd3b[_0x2c4df4];if(!_0x4caacf)return'';this[_0x1c9b33(0x2ea)]=this[_0x1c9b33(0x2ea)]||{};if(this[_0x1c9b33(0x2ea)][_0x3362f4]!==_0x593593)return this[_0x1c9b33(0x2ea)][_0x305ff0];this['_bestiaryEnemyCustomImageFilename'][_0x3af8d3]='';const _0x2ffb44=_0x35408b[_0x1c9b33(0x1b2)]['RegExp'],_0x5e1ea5=_0x4caacf[_0x1c9b33(0x243)]||'';return _0x5e1ea5[_0x1c9b33(0x390)](_0x2ffb44[_0x1c9b33(0x3c0)])&&(this[_0x1c9b33(0x2ea)][_0x13450b]=_0x217e38(_0x5a29cf['$1'])[_0x1c9b33(0x2fc)]()),this[_0x1c9b33(0x2ea)][_0x94d347];}else{if(!Imported[_0x1424e1]){if(_0x1c9b33(0xe8)!==_0x1c9b33(0xe8))_0x4cfc71[_0x1c9b33(0x256)](this[_0x1c9b33(0x33f)](),0x1);else{alert(_0x1c9b33(0x327)[_0x1c9b33(0x22e)](_0x319d59,_0x1424e1)),SceneManager[_0x1c9b33(0x30a)]();break;}}}}const _0x1decc0=_0x331afd[_0x1c9b33(0x207)];if(_0x1decc0[_0x1c9b33(0x390)](/\[Version[ ](.*?)\]/i)){const _0x5ced52=Number(RegExp['$1']);_0x5ced52!==VisuMZ[label][_0x1c9b33(0x367)]&&(_0x1c9b33(0xbc)===_0x1c9b33(0xbc)?(alert(_0x1c9b33(0x330)['format'](_0x319d59,_0x5ced52)),SceneManager[_0x1c9b33(0x30a)]()):this[_0x1c9b33(0x244)][_0x1c9b33(0x280)]());}if(_0x1decc0['match'](/\[Tier[ ](\d+)\]/i)){const _0x1cc851=Number(RegExp['$1']);_0x1cc851<tier?(alert(_0x1c9b33(0x31d)[_0x1c9b33(0x22e)](_0x319d59,_0x1cc851,tier)),SceneManager[_0x1c9b33(0x30a)]()):tier=Math[_0x1c9b33(0x264)](_0x1cc851,tier);}VisuMZ[_0x1c9b33(0x326)](VisuMZ[label][_0x1c9b33(0x37d)],_0x331afd[_0x1c9b33(0x169)]);})(pluginData),PluginManager[_0x6ebe4(0x3c2)](pluginData['name'],_0x6ebe4(0x388),_0x27ec42=>{const _0x6e14c2=_0x6ebe4;if(!$gameTemp[_0x6e14c2(0x3c1)]())return;VisuMZ[_0x6e14c2(0x326)](_0x27ec42,_0x27ec42);const _0x1e4902=_0x27ec42[_0x6e14c2(0x2f2)]||[];for(const _0x28e46e of _0x1e4902){$gameSystem[_0x6e14c2(0x2fd)](_0x28e46e);}}),PluginManager[_0x6ebe4(0x3c2)](pluginData[_0x6ebe4(0xbd)],_0x6ebe4(0x27b),_0x5767f4=>{const _0x4cc72a=_0x6ebe4;if(!$gameTemp['isPlaytest']())return;VisuMZ[_0x4cc72a(0x326)](_0x5767f4,_0x5767f4),$gameTemp[_0x4cc72a(0x286)](_0x5767f4[_0x4cc72a(0x3dd)]);}),PluginManager[_0x6ebe4(0x3c2)](pluginData[_0x6ebe4(0xbd)],_0x6ebe4(0x3b4),_0x2ed6b2=>{const _0x558941=_0x6ebe4;if($gameParty[_0x558941(0x17b)]())return;if(SceneManager[_0x558941(0x203)]())return;SceneManager[_0x558941(0xaf)](Scene_Bestiary);}),PluginManager[_0x6ebe4(0x3c2)](pluginData[_0x6ebe4(0xbd)],_0x6ebe4(0x378),_0xac8246=>{const _0x5ac8b2=_0x6ebe4;VisuMZ[_0x5ac8b2(0x326)](_0xac8246,_0xac8246),$gameSystem['setMainMenuBestiaryEnabled'](_0xac8246['Enable']);}),PluginManager[_0x6ebe4(0x3c2)](pluginData[_0x6ebe4(0xbd)],_0x6ebe4(0xa0),_0x27a3fd=>{const _0x25cbcf=_0x6ebe4;VisuMZ['ConvertParams'](_0x27a3fd,_0x27a3fd),$gameSystem[_0x25cbcf(0xbe)](_0x27a3fd[_0x25cbcf(0x2c7)]);}),VisuMZ[_0x6ebe4(0x1b2)]['RegExp']={'category':/<BESTIARY (?:CATEGORY|CATEGORIES):[ ](.*)>/i,'hideInBestiary':/<HIDE IN BESTIARY>/i,'customPicture':/<BESTIARY CUSTOM (?:IMAGE|PICTURE):[ ](.*)>/i,'battleback1':/<BESTIARY (?:BATTLEBACK|BACKGROUND) 1:[ ](.*)>/i,'battleback2':/<BESTIARY (?:BATTLEBACK|BACKGROUND) 2:[ ](.*)>/i,'lore':/<(?:BESTIARY |)LORE>\s*([\s\S]*)\s*<\/(?:BESTIARY |)LORE>/i,'hideSkill':/<HIDE SKILL IN BESTIARY>/i},VisuMZ['Bestiary'][_0x6ebe4(0x2ad)]=Scene_Boot[_0x6ebe4(0x219)][_0x6ebe4(0x382)],Scene_Boot[_0x6ebe4(0x219)][_0x6ebe4(0x382)]=function(){const _0x4705ee=_0x6ebe4;VisuMZ['Bestiary']['Scene_Boot_onDatabaseLoaded'][_0x4705ee(0x180)](this),this[_0x4705ee(0x25c)]();},Scene_Boot['prototype'][_0x6ebe4(0x25c)]=function(){const _0x382df9=_0x6ebe4;this[_0x382df9(0x352)]();},Scene_Boot[_0x6ebe4(0x219)]['process_VisuMZ_Bestiary_Categories']=function(){const _0x3b2253=_0x6ebe4;VisuMZ[_0x3b2253(0x1b2)][_0x3b2253(0x18e)]=[],VisuMZ[_0x3b2253(0x1b2)]['CategoryData']={};const _0x5d7861=VisuMZ[_0x3b2253(0x1b2)][_0x3b2253(0x37d)][_0x3b2253(0x377)];for(const _0x15785 of _0x5d7861){const _0x55b12f=(_0x15785['Key']||'')[_0x3b2253(0xf6)]()[_0x3b2253(0x2fc)]();if(_0x55b12f==='')continue;if(_0x55b12f==='(needs\x20key)')continue;VisuMZ[_0x3b2253(0x1b2)][_0x3b2253(0x18e)]['push'](_0x55b12f),VisuMZ[_0x3b2253(0x1b2)]['CategoryData'][_0x55b12f]=_0x15785;}},VisuMZ['Bestiary'][_0x6ebe4(0x2eb)]=Math['random'],Math[_0x6ebe4(0x16c)]=function(){const _0x22f4df=_0x6ebe4;if(this[_0x22f4df(0x218)])return 0.5;return VisuMZ['Bestiary'][_0x22f4df(0x2eb)]['apply'](this,arguments);},DataManager['enemyBestiaryCategories']=function(_0xc95ad6){const _0x375172=_0x6ebe4;if(!_0xc95ad6)return[];const _0x16c6a2=_0xc95ad6['id'];this[_0x375172(0x271)]=this[_0x375172(0x271)]||{};if(this[_0x375172(0x271)][_0x16c6a2]!==undefined)return this[_0x375172(0x271)][_0x16c6a2];this[_0x375172(0x271)][_0x16c6a2]=[];const _0x18bba5=VisuMZ[_0x375172(0x1b2)][_0x375172(0x1c7)],_0x1dd2fb=_0xc95ad6['note']||'';return _0x1dd2fb[_0x375172(0x390)](_0x18bba5[_0x375172(0x381)])&&(this[_0x375172(0x271)][_0x16c6a2]=RegExp['$1'][_0x375172(0x317)](',')[_0x375172(0x3a0)](_0x12d488=>_0x12d488[_0x375172(0xf6)]()[_0x375172(0x2fc)]())),this[_0x375172(0x271)][_0x16c6a2][_0x375172(0x115)]<=0x0&&(this[_0x375172(0x271)][_0x16c6a2]=[Game_Enemy[_0x375172(0x2b3)]['defaultCategory'][_0x375172(0xf6)]()[_0x375172(0x2fc)]()]),this[_0x375172(0x271)][_0x16c6a2];},DataManager[_0x6ebe4(0x3ce)]=function(_0x33b2be){const _0x64a498=_0x6ebe4;if(!_0x33b2be)return![];if(_0x33b2be[_0x64a498(0xbd)][_0x64a498(0x2fc)]()==='')return![];if(_0x33b2be[_0x64a498(0xbd)]['includes'](_0x64a498(0x36f)))return![];const _0x27350e=_0x33b2be['id'];this[_0x64a498(0x1e3)]=this[_0x64a498(0x1e3)]||{};if(this[_0x64a498(0x1e3)][_0x27350e]!==undefined){if(_0x64a498(0x23c)!==_0x64a498(0x23c))this[_0x64a498(0x13e)][_0x64a498(0x3bc)]();else return this[_0x64a498(0x1e3)][_0x27350e];}let _0x10e3ab=!![];const _0x3e5024=VisuMZ[_0x64a498(0x1b2)]['RegExp'],_0x26ff87=_0x33b2be[_0x64a498(0x243)]||'';if(_0x26ff87[_0x64a498(0x390)](_0x3e5024['hideInBestiary']))_0x10e3ab=![];else _0x26ff87[_0x64a498(0x390)](/<SWAP ENEMIES>\s*([\s\S]*)\s*<\/SWAP ENEMIES>/i)&&(_0x10e3ab=![]);return this[_0x64a498(0x1e3)][_0x27350e]=_0x10e3ab,this['_showEnemyInBestiary'][_0x27350e];},DataManager[_0x6ebe4(0x1e9)]=function(_0x32e1a9){const _0x411646=_0x6ebe4,_0x35ba5d=this[_0x411646(0x19f)](_0x32e1a9);return _0x35ba5d[_0x411646(0x3a0)](_0x34e42e=>$dataEnemies[_0x34e42e])[_0x411646(0x30e)](undefined)[_0x411646(0x30e)](null);},DataManager[_0x6ebe4(0x19f)]=function(_0x468f01){const _0x51e89a=_0x6ebe4;this[_0x51e89a(0x10b)]=this[_0x51e89a(0x10b)]||{};if(this['_categoryEnemyIDs'][_0x468f01]!==undefined){if(_0x51e89a(0x2f0)!=='XgKFw')_0x54bd7c=_0x1bee6c(_0x420f26['$1']);else return this[_0x51e89a(0x10b)][_0x468f01];}for(const _0x411e18 of VisuMZ[_0x51e89a(0x1b2)]['CategoryOrder']){if(_0x51e89a(0x361)!==_0x51e89a(0x361)){const _0x85a931={'Element':/<RANDOM ELEMENT>\s*([\s\S]*)\s*<\/RANDOM ELEMENT>/i,'SubElement':/<RANDOM SUBELEMENT>\s*([\s\S]*)\s*<\/RANDOM SUBELEMENT>/i,'Gender':/<RANDOM GENDER>\s*([\s\S]*)\s*<\/RANDOM GENDER>/i,'Race':/<RANDOM RACE>\s*([\s\S]*)\s*<\/RANDOM RACE>/i,'Nature':/<RANDOM NATURE>\s*([\s\S]*)\s*<\/RANDOM NATURE>/i,'Alignment':/<RANDOM ALIGNMENT>\s*([\s\S]*)\s*<\/RANDOM ALIGNMENT>/i,'Blessing':/<RANDOM BLESSING>\s*([\s\S]*)\s*<\/RANDOM BLESSING>/i,'Curse':/<RANDOM CURSE>\s*([\s\S]*)\s*<\/RANDOM CURSE>/i,'Zodiac':/<RANDOM ZODIAC>\s*([\s\S]*)\s*<\/RANDOM ZODIAC>/i,'Variant':/<RANDOM VARIANT>\s*([\s\S]*)\s*<\/RANDOM VARIANT>/i},_0xefd013=_0x85a931[_0x53c653];if(!_0xefd013)return;if(_0x572138['match'](_0xefd013)){const _0x56f4ef=_0x15dceb(_0x5b7edb['$1'])['split'](/[\r\n]+/)[_0x51e89a(0x30e)]('');for(const _0x32bc4b of _0x56f4ef){_0x32bc4b[_0x51e89a(0x390)](/(.*):[ ](.*)/i)&&_0x351255[_0x51e89a(0xaf)](_0x4eecc5['$1'][_0x51e89a(0x2fc)]());}}}else this['_categoryEnemyIDs'][_0x411e18]=[];}for(const _0x11a57f of $dataEnemies){if(!_0x11a57f)continue;if(!this['showEnemyInBestiary'](_0x11a57f))continue;const _0x27764c=this['enemyBestiaryCategories'](_0x11a57f);for(const _0x38285a of _0x27764c){if(_0x51e89a(0x199)==='JIKQh')this[_0x51e89a(0x10b)][_0x38285a]=this[_0x51e89a(0x10b)][_0x38285a]||[],this[_0x51e89a(0x10b)][_0x38285a][_0x51e89a(0xaf)](_0x11a57f['id']);else{const _0x26fa26=this['currentExt'](),_0x2d9250=_0x5a0e40['traitSet'](_0x26fa26[0x0],_0x26fa26[0x1]);this[_0x51e89a(0x13e)][_0x51e89a(0xb4)](_0x2d9250?_0x2d9250[_0x51e89a(0x2a0)]||'':'');}}}for(const _0x56cf18 in this[_0x51e89a(0x10b)]){this[_0x51e89a(0x10b)][_0x56cf18][_0x51e89a(0x1dd)]((_0x1832cf,_0x40c31b)=>_0x1832cf-_0x40c31b);}return this[_0x51e89a(0x10b)][_0x468f01];},DataManager[_0x6ebe4(0x376)]=function(){const _0x1cc759=_0x6ebe4;if(this['_bestiaryTotalEnemies']!==undefined)return this[_0x1cc759(0x254)];let _0x5aceef=[];for(const _0x384dee of VisuMZ[_0x1cc759(0x1b2)][_0x1cc759(0x18e)]){if(_0x1cc759(0x10e)===_0x1cc759(0x21f))this[_0x1cc759(0xdb)]=_0xa56fd0,this['refresh']();else{const _0x4c28e0=this['categoryEnemyIDs'](_0x384dee);_0x5aceef=_0x5aceef['concat'](_0x4c28e0);}}return this['_bestiaryTotalEnemies']=_0x5aceef[_0x1cc759(0x276)]((_0x41a0de,_0x1b356e,_0x1314c5)=>_0x1314c5['indexOf'](_0x41a0de)===_0x1b356e)[_0x1cc759(0x115)],this['_bestiaryTotalEnemies'];},ImageManager['svActorHorzCells']=ImageManager['svActorHorzCells']||0x9,ImageManager[_0x6ebe4(0x1ff)]=ImageManager[_0x6ebe4(0x1ff)]||0x6,ImageManager[_0x6ebe4(0x192)]=function(_0x33886c){const _0x3c5337=_0x6ebe4,_0x552f3b=this['bestiaryEnemyBattlebackData'](_0x33886c)[0x0];return _0x552f3b===''?new Bitmap(0x1,0x1):this[_0x3c5337(0x39d)](_0x552f3b);},ImageManager[_0x6ebe4(0x33e)]=function(_0x4bda75){const _0x2416c9=_0x6ebe4,_0x34d040=this['bestiaryEnemyBattlebackData'](_0x4bda75)[0x1];return _0x34d040===''?new Bitmap(0x1,0x1):this[_0x2416c9(0x333)](_0x34d040);},ImageManager[_0x6ebe4(0x114)]=function(_0x246935){const _0x526452=_0x6ebe4,_0x258c53=$dataEnemies[_0x246935];if(!_0x258c53)return['',''];this[_0x526452(0x2ee)]=this[_0x526452(0x2ee)]||{};if(this[_0x526452(0x2ee)][_0x246935]!==undefined){if(_0x526452(0x32c)===_0x526452(0x1c9)){const _0x59cb14=_0x158f72[_0x526452(0x328)],_0x4bc734=_0x59cb14[_0x526452(0x22e)](_0x14310c[_0x526452(0x148)]),_0x583912=_0x1e31ed[_0x526452(0x148)]>_0x4a7023[_0x526452(0x15b)]();this[_0x526452(0x202)](_0x4bc734,_0x526452(0x251),_0x583912);}else return this[_0x526452(0x2ee)][_0x246935];}this[_0x526452(0x2ee)][_0x246935]=['',''];const _0x417922=VisuMZ[_0x526452(0x1b2)][_0x526452(0x1c7)],_0x1f5140=_0x258c53[_0x526452(0x243)]||'';_0x1f5140[_0x526452(0x390)](_0x417922[_0x526452(0x1fe)])&&(this[_0x526452(0x2ee)][_0x246935][0x0]=String(RegExp['$1'])[_0x526452(0x2fc)]());_0x1f5140[_0x526452(0x390)](_0x417922[_0x526452(0x1e0)])&&(this['_bestiaryEnemyBattlebackData'][_0x246935][0x1]=String(RegExp['$1'])[_0x526452(0x2fc)]());if(this[_0x526452(0x2ee)][_0x246935][0x0]===''&&this['_bestiaryEnemyBattlebackData'][_0x246935][0x1]===''){if(_0x526452(0x31b)!==_0x526452(0x288))this[_0x526452(0x2ee)][_0x246935]=[Window_BestiaryEnemyImage[_0x526452(0xf7)][_0x526452(0x138)],Window_BestiaryEnemyImage[_0x526452(0xf7)][_0x526452(0x200)]];else{if(this['timesEnemyDefeated'](_0x36ca5b)>0x0)return!![];if(this['isEnemyRevealedByBestiary'](_0x27d981))return!![];return![];}}return this[_0x526452(0x2ee)][_0x246935];},ImageManager[_0x6ebe4(0x109)]=function(_0x5f87f8){const _0x5d21a0=_0x6ebe4,_0x1b066c=$dataEnemies[_0x5f87f8];if(!_0x1b066c)return'';this[_0x5d21a0(0x2ea)]=this['_bestiaryEnemyCustomImageFilename']||{};if(this[_0x5d21a0(0x2ea)][_0x5f87f8]!==undefined)return this['_bestiaryEnemyCustomImageFilename'][_0x5f87f8];this[_0x5d21a0(0x2ea)][_0x5f87f8]='';const _0xa50c66=VisuMZ[_0x5d21a0(0x1b2)]['RegExp'],_0x4f865a=_0x1b066c[_0x5d21a0(0x243)]||'';if(_0x4f865a[_0x5d21a0(0x390)](_0xa50c66[_0x5d21a0(0x3c0)])){if(_0x5d21a0(0xe7)!=='GpLOJ')this['_bestiaryEnemyCustomImageFilename'][_0x5f87f8]=String(RegExp['$1'])[_0x5d21a0(0x2fc)]();else{if(this[_0x5d21a0(0x34a)]&&this[_0x5d21a0(0x34a)][_0x5d21a0(0x126)]){if(this[_0x5d21a0(0x244)]&&this['_dataCategoriesWindow'][_0x5d21a0(0xa3)])return _0x401f78[_0x5d21a0(0x1b2)][_0x5d21a0(0x14d)][_0x5d21a0(0x270)];}else{if(this[_0x5d21a0(0x1c6)]&&this[_0x5d21a0(0x1c6)][_0x5d21a0(0xa3)])return _0x10b7c1[_0x5d21a0(0x1b2)][_0x5d21a0(0x14d)][_0x5d21a0(0x380)];}return _0x3495a[_0x5d21a0(0x219)][_0x5d21a0(0xc1)]['call'](this);}}return this['_bestiaryEnemyCustomImageFilename'][_0x5f87f8];},TextManager[_0x6ebe4(0x2cf)]=VisuMZ['Bestiary'][_0x6ebe4(0x37d)][_0x6ebe4(0x24c)]['Name'],TextManager[_0x6ebe4(0x1b2)]={'buttonAssist':{'view':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x3b9)]??'View','expand':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x372)]??_0x6ebe4(0x136),'collapse':VisuMZ['Bestiary']['Settings'][_0x6ebe4(0x174)]['buttonAssist_Collapse']??'Collapse','switch':VisuMZ['Bestiary'][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0xd7)]??'Switch\x20Monster','fastScrollLore':VisuMZ[_0x6ebe4(0x1b2)]['Settings'][_0x6ebe4(0x174)][_0x6ebe4(0xb1)]??_0x6ebe4(0x1dc),'slowScrollLore':VisuMZ['Bestiary'][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x2d6)]??_0x6ebe4(0x2b2)},'categoryWindow':{'maskChar':VisuMZ[_0x6ebe4(0x1b2)]['Settings']['Vocab'][_0x6ebe4(0x1bd)]??'?','openCategoriesFmt':VisuMZ['Bestiary'][_0x6ebe4(0x37d)][_0x6ebe4(0x174)]['CategoryWindow_OpenCategory']??_0x6ebe4(0x123),'closedCategoriesFmt':VisuMZ['Bestiary'][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x289)]??_0x6ebe4(0x2d0),'fixedPercentage':VisuMZ['Bestiary'][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x3c4)]??0x2},'nameWindow':{'category':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)]['NameWindow_CategoryText']??'Please\x20select\x20a\x20monster\x20to\x20view.'},'subWindow':{'defeatedFmt':VisuMZ[_0x6ebe4(0x1b2)]['Settings']['Vocab']['SubWindow_Defeated']??'Defeated:\x20%1','seenFmt':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)]['Vocab'][_0x6ebe4(0x16a)]??_0x6ebe4(0x230),'completionFmt':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x308)]??_0x6ebe4(0xa7),'fixedPercentage':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)]['SubWindowCompleteFixedDigits']??0x2},'basicWindow':{'levelUpToMax':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x35b)]??_0x6ebe4(0x124),'levelUp':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x1a1)]??_0x6ebe4(0x260),'levelDown':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x2bf)]??_0x6ebe4(0x368),'levelDownToMin':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x119)]??'\x5cI[74]Lower\x20%1\x20Down\x20to\x20Minimum'},'elementsWindow':{'weak':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x21e)]??_0x6ebe4(0x10a),'neutral':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)]['Vocab'][_0x6ebe4(0x146)]??_0x6ebe4(0x2e1),'resist':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x27f)]??_0x6ebe4(0x25d),'immune':VisuMZ['Bestiary'][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x1f6)]??_0x6ebe4(0x104),'absorb':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0xc4)]??'\x5cC[27]Absorb'},'rewardsWindow':{'chance100':VisuMZ['Bestiary'][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x354)]??_0x6ebe4(0x2a3),'chance50':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x107)]??_0x6ebe4(0x164),'chance20':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x27c)]??'\x5cC[4]Uncommon','chance10':VisuMZ[_0x6ebe4(0x1b2)]['Settings'][_0x6ebe4(0x174)][_0x6ebe4(0x391)]??_0x6ebe4(0x1cb),'chance0':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x37a)]??_0x6ebe4(0x102),'conditional':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x22f)]??_0x6ebe4(0x279)},'traitsWindow':{'openCategoriesFmt':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x9e)]??_0x6ebe4(0x1bb),'closedCategoriesFmt':VisuMZ['Bestiary'][_0x6ebe4(0x37d)]['Vocab']['TraitsWindow_ClosedCategory']??_0x6ebe4(0x3c6),'traitHelp':VisuMZ['Bestiary'][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x397)]??'This\x20is\x20the\x20property\x20type.','nullHelp':VisuMZ['Bestiary']['Settings'][_0x6ebe4(0x174)][_0x6ebe4(0x242)]??_0x6ebe4(0x2fa)},'loreWindow':{'defaultLoreFmt':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0xf4)]??_0x6ebe4(0x15c)}},TextManager[_0x6ebe4(0xcb)]=function(_0x658f49){const _0x54bdfd=_0x6ebe4;if(!_0x658f49)return'';const _0x3a2f1b=_0x658f49[_0x54bdfd(0x163)]()['id'];this[_0x54bdfd(0x152)]=this['_getBestiaryLore']||{};if(this[_0x54bdfd(0x152)][_0x3a2f1b]!==undefined)return this[_0x54bdfd(0x152)][_0x3a2f1b];this[_0x54bdfd(0x152)][_0x3a2f1b]=TextManager[_0x54bdfd(0x1b2)][_0x54bdfd(0x3c3)][_0x54bdfd(0x291)][_0x54bdfd(0x22e)](_0x658f49[_0x54bdfd(0x25b)]());const _0x27a756=VisuMZ[_0x54bdfd(0x1b2)][_0x54bdfd(0x1c7)],_0x124a8f=_0x658f49[_0x54bdfd(0x163)]()[_0x54bdfd(0x243)]||'';if(_0x124a8f[_0x54bdfd(0x390)](_0x27a756[_0x54bdfd(0x1d4)])){if(_0x54bdfd(0x3b3)!==_0x54bdfd(0x3b3)){const _0x200670=this[_0x54bdfd(0x19f)](_0x33442f);_0x4db87e=_0xf82e77[_0x54bdfd(0xf3)](_0x200670);}else this['_getBestiaryLore'][_0x3a2f1b]=String(RegExp['$1'])['trim']();}return this[_0x54bdfd(0x152)][_0x3a2f1b];},ColorManager['getColor']=function(_0x4027d9){const _0x14e959=_0x6ebe4;return _0x4027d9=String(_0x4027d9),_0x4027d9[_0x14e959(0x390)](/#(.*)/i)?'#%1'[_0x14e959(0x22e)](String(RegExp['$1'])):_0x14e959(0x19b)!==_0x14e959(0x1be)?this['textColor'](Number(_0x4027d9)):!![];},SceneManager[_0x6ebe4(0x203)]=function(){const _0x3627d8=_0x6ebe4;return this[_0x3627d8(0x168)]&&this['_scene'][_0x3627d8(0x34e)]===Scene_Battle;},Game_Temp['prototype'][_0x6ebe4(0x1c0)]=function(){const _0x416f87=_0x6ebe4;return this[_0x416f87(0x3c1)]()&&this['_debugViewBestiary'];},Game_Temp[_0x6ebe4(0x219)][_0x6ebe4(0x286)]=function(_0x16bcd2){this['_debugViewBestiary']=_0x16bcd2;},VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x33d)]=Game_System[_0x6ebe4(0x219)][_0x6ebe4(0x384)],Game_System[_0x6ebe4(0x219)][_0x6ebe4(0x384)]=function(){const _0x508d76=_0x6ebe4;VisuMZ['Bestiary']['Game_System_initialize']['call'](this),this[_0x508d76(0x266)](),this[_0x508d76(0x232)](),this['initBestiaryReveals']();},Game_System[_0x6ebe4(0x219)]['initBestiaryMainMenu']=function(){const _0x29eba1=_0x6ebe4;this['_Bestiary_MainMenu']={'shown':VisuMZ[_0x29eba1(0x1b2)][_0x29eba1(0x37d)][_0x29eba1(0x24c)]['ShowMainMenu'],'enabled':VisuMZ[_0x29eba1(0x1b2)][_0x29eba1(0x37d)][_0x29eba1(0x24c)][_0x29eba1(0x240)]};},Game_System[_0x6ebe4(0x219)][_0x6ebe4(0x3bd)]=function(){const _0x15b587=_0x6ebe4;if(this[_0x15b587(0x304)]===undefined)this[_0x15b587(0x266)]();return this[_0x15b587(0x304)]['shown'];},Game_System['prototype'][_0x6ebe4(0xbe)]=function(_0x169c0c){const _0x204efe=_0x6ebe4;if(this[_0x204efe(0x304)]===undefined)this[_0x204efe(0x266)]();this[_0x204efe(0x304)]['shown']=_0x169c0c;},Game_System[_0x6ebe4(0x219)][_0x6ebe4(0x2f3)]=function(){const _0x53d00f=_0x6ebe4;if(this[_0x53d00f(0x304)]===undefined)this[_0x53d00f(0x266)]();return this['_Bestiary_MainMenu'][_0x53d00f(0x1eb)];},Game_System[_0x6ebe4(0x219)]['setMainMenuBestiaryEnabled']=function(_0x978fc0){const _0x2b13e0=_0x6ebe4;if(this[_0x2b13e0(0x304)]===undefined)this['initBestiaryMainMenu']();this[_0x2b13e0(0x304)]['enabled']=_0x978fc0;},Game_System[_0x6ebe4(0x219)][_0x6ebe4(0x205)]=function(_0x3387f1){const _0x262d07=_0x6ebe4;return Imported[_0x262d07(0x274)]?_0x262d07(0x265)===_0x262d07(0x387)?![]:this[_0x262d07(0x177)]()[_0x262d07(0x2bb)](_0x3387f1):this[_0x262d07(0x223)](_0x3387f1)>0x0;},Game_System[_0x6ebe4(0x219)][_0x6ebe4(0x232)]=function(){const _0x4a09cd=_0x6ebe4;this[_0x4a09cd(0x1a4)]=this[_0x4a09cd(0x1a4)]||{},this[_0x4a09cd(0x247)]=this[_0x4a09cd(0x247)]||{};},Game_System[_0x6ebe4(0x219)][_0x6ebe4(0x223)]=function(_0x1a6299){const _0x53b9de=_0x6ebe4;if(this[_0x53b9de(0x1a4)]===undefined)this[_0x53b9de(0x232)]();return this[_0x53b9de(0x1a4)][_0x1a6299]=this[_0x53b9de(0x1a4)][_0x1a6299]||0x0,this[_0x53b9de(0x1a4)][_0x1a6299];},Game_System[_0x6ebe4(0x219)][_0x6ebe4(0x256)]=function(_0x4f6be9,_0x41b82e){const _0x21e763=_0x6ebe4;if(this[_0x21e763(0x1a4)]===undefined)this[_0x21e763(0x232)]();this[_0x21e763(0x1a4)][_0x4f6be9]=this['_timesEnemyDefeated'][_0x4f6be9]||0x0,this[_0x21e763(0x1a4)][_0x4f6be9]+=_0x41b82e||0x1;},Game_System['prototype'][_0x6ebe4(0x165)]=function(){const _0x37d470=_0x6ebe4;let _0xa0c781=0x0;for(const _0x36a1cb of $dataEnemies){if(_0x37d470(0xd1)===_0x37d470(0xd1)){if(!_0x36a1cb)continue;if(DataManager['showEnemyInBestiary'](_0x36a1cb)){if(_0x37d470(0x22c)===_0x37d470(0x22c)){if(this[_0x37d470(0x208)](_0x36a1cb['id'])){if(_0x37d470(0x133)!==_0x37d470(0xb9))_0xa0c781++;else{const _0x3e0e3c=this[_0x37d470(0x21a)];_0x3e0e3c[_0x37d470(0x39b)]['clear']();const _0x4f0075=this[_0x37d470(0xde)](this[_0x37d470(0x231)]());if(_0x4f0075===_0x37d470(0x1ae)){const _0x450329=this[_0x37d470(0x233)](this[_0x37d470(0x231)]());let _0x697e62=this['commandName'](this['index']());_0x697e62=_0x697e62[_0x37d470(0x3df)](/\\I\[(\d+)\]/gi,''),_0x3e0e3c[_0x37d470(0x2d5)](),this[_0x37d470(0x149)](_0x697e62,_0x450329),this['commandNameWindowDrawText'](_0x697e62,_0x450329),this[_0x37d470(0x272)](_0x697e62,_0x450329);}}}}else return _0xdeb8d1[_0x37d470(0x1b2)]['Settings'][_0x37d470(0x32d)][_0x37d470(0x2a5)]['call'](this);}}else return![];}return _0xa0c781;},Game_System[_0x6ebe4(0x219)][_0x6ebe4(0x208)]=function(_0x5a0982){if(this['timesEnemyDefeated'](_0x5a0982)>0x0)return!![];if(this['isEnemyRevealedByBestiary'](_0x5a0982))return!![];return![];},VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x23d)]=Game_BattlerBase[_0x6ebe4(0x219)]['addNewState'],Game_BattlerBase[_0x6ebe4(0x219)][_0x6ebe4(0x17f)]=function(_0x2d2008){const _0x5d04a9=_0x6ebe4,_0x4d1cc6=this[_0x5d04a9(0x105)]();VisuMZ[_0x5d04a9(0x1b2)][_0x5d04a9(0x23d)][_0x5d04a9(0x180)](this,_0x2d2008);if(this[_0x5d04a9(0x3b1)]()&&_0x4d1cc6&&this[_0x5d04a9(0x2dc)]()){if(_0x5d04a9(0x34d)==='JtFJe')for(const _0x1b4104 of _0x4762f1[_0x5d04a9(0xf7)][_0x5d04a9(0xe2)]){this[_0x5d04a9(0x98)](_0x1b4104);}else $gameSystem[_0x5d04a9(0x256)](this[_0x5d04a9(0x33f)](),0x1);}},Game_System[_0x6ebe4(0x219)][_0x6ebe4(0x366)]=function(_0x51b04b){const _0xf912f3=_0x6ebe4;if(this[_0xf912f3(0x1a4)]===undefined)this['initBestiarySettings']();return this['_timesEnemyDefeated'][_0x51b04b]=this['_timesEnemyDefeated'][_0x51b04b]||0x0,this['_timesEnemyDefeated'][_0x51b04b];},Game_System[_0x6ebe4(0x219)][_0x6ebe4(0x1b3)]=function(_0x367dcf,_0x397e27){const _0x4e3bc7=_0x6ebe4;if(this[_0x4e3bc7(0x247)]===undefined)this[_0x4e3bc7(0x232)]();this[_0x4e3bc7(0x247)][_0x367dcf]=this[_0x4e3bc7(0x247)][_0x367dcf]||0x0,this[_0x4e3bc7(0x247)][_0x367dcf]+=_0x397e27||0x1;},VisuMZ['Bestiary']['BattleManager_setup']=BattleManager[_0x6ebe4(0x1a5)],BattleManager[_0x6ebe4(0x1a5)]=function(_0x42e124,_0x2cb691,_0x56d07e){const _0x4dd908=_0x6ebe4;VisuMZ['Bestiary'][_0x4dd908(0x3a9)][_0x4dd908(0x180)](this,_0x42e124,_0x2cb691,_0x56d07e);for(const _0x52ddf6 of $gameTroop[_0x4dd908(0x31e)]()){$gameSystem[_0x4dd908(0x1b3)](_0x52ddf6[_0x4dd908(0x33f)](),0x1);}},Game_System[_0x6ebe4(0x219)][_0x6ebe4(0x14e)]=function(){const _0xa3378a=_0x6ebe4;this[_0xa3378a(0x325)]=this[_0xa3378a(0x325)]||{};},Game_System[_0x6ebe4(0x219)]['bestiaryRevealEnemy']=function(_0x14971c){const _0x5e44b4=_0x6ebe4;if(this[_0x5e44b4(0x325)]===undefined)this['initBestiaryReveals']();this[_0x5e44b4(0x325)][_0x14971c]=!![];},Game_System['prototype'][_0x6ebe4(0x30b)]=function(_0x365508){const _0x39b864=_0x6ebe4;if(this[_0x39b864(0x325)]===undefined)this[_0x39b864(0x14e)]();return this[_0x39b864(0x325)][_0x365508];},VisuMZ['Bestiary'][_0x6ebe4(0x1ba)]=Game_BattlerBase['prototype'][_0x6ebe4(0x173)],Game_BattlerBase['prototype']['refresh']=function(){const _0x4183ba=_0x6ebe4;this[_0x4183ba(0x24b)]={},this[_0x4183ba(0x14c)]=this[_0x4183ba(0x14c)]['clamp'](0x0,this[_0x4183ba(0xa4)]()),VisuMZ[_0x4183ba(0x1b2)][_0x4183ba(0x1ba)]['call'](this);},Game_Enemy[_0x6ebe4(0x2b3)]={'defaultCategory':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)]['DefaultCategory']??'Common'},Game_Enemy[_0x6ebe4(0x219)][_0x6ebe4(0x343)]=function(){const _0x29f419=_0x6ebe4,_0x583461=[];for(const _0x5dc6db of this[_0x29f419(0x163)]()['actions']){if(_0x29f419(0x110)===_0x29f419(0x300))this[_0x29f419(0x2b8)](_0x418e48,_0x44fff3,_0x5dabb4);else{const _0x581507=$dataSkills[_0x5dc6db[_0x29f419(0x25f)]];if(_0x581507&&!_0x583461[_0x29f419(0x2bb)](_0x581507))_0x583461[_0x29f419(0xaf)](_0x581507);}}return _0x583461;},VisuMZ['Bestiary'][_0x6ebe4(0x1ed)]=function(_0x1de82f,_0x3d12ad){const _0x25e724=_0x6ebe4;let _0x37a354=[];const _0x3e8bb9=_0x3d12ad['enemy']()[_0x25e724(0x243)]||'';this['PossibleMassTraitsFromNotetags'](_0x37a354,_0x1de82f,_0x3e8bb9),this['PossibleSingularTraitsFromNotetags'](_0x37a354,_0x1de82f,_0x3e8bb9),this[_0x25e724(0x331)](_0x37a354,_0x1de82f,_0x3e8bb9);if(_0x37a354[_0x25e724(0x115)]<=0x0){const _0x42bf1e=DataManager[_0x25e724(0x346)](_0x1de82f);if(_0x42bf1e['RandomizeEnemy']){_0x42bf1e[_0x25e724(0x18a)][_0x25e724(0x36b)]&&_0x37a354[_0x25e724(0xaf)](_0x42bf1e[_0x25e724(0x18a)][_0x25e724(0x2e7)]);for(const _0xb05b18 in _0x42bf1e[_0x25e724(0x2c9)]){_0x37a354[_0x25e724(0xaf)](_0x42bf1e[_0x25e724(0x2c9)][_0xb05b18][_0x25e724(0x2e7)]);}return _0x37a354[_0x25e724(0x3a0)](_0x396485=>String(_0x396485)['toUpperCase']()[_0x25e724(0x2fc)]());}}return _0x37a354['map'](_0x4890de=>String(_0x4890de)['toUpperCase']()[_0x25e724(0x2fc)]());},VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x2ec)]=function(_0x3f65d0,_0x23b51b,_0x27cd60){const _0x5ee8c6=_0x6ebe4,_0xcf9e30={'ELEMENT':_0x5ee8c6(0x2c2),'SUBELEMENT':_0x5ee8c6(0x1ac),'GENDER':'Gender','RACE':_0x5ee8c6(0x356),'NATURE':_0x5ee8c6(0x178),'ALIGNMENT':_0x5ee8c6(0x213),'BLESSING':'Blessing','CURSE':_0x5ee8c6(0x20c),'ZODIAC':_0x5ee8c6(0x241),'VARIANT':_0x5ee8c6(0x1a6)};if(_0x27cd60[_0x5ee8c6(0x390)](/<TRAIT SETS>\s*([\s\S]*)\s*<\/TRAIT SETS>/i)){const _0x1f356a=String(RegExp['$1'])[_0x5ee8c6(0x317)](/[\r\n]+/);for(const _0x3602e1 of _0x1f356a){if(_0x3602e1[_0x5ee8c6(0x390)](/(.*):[ ](.*)/i)){if(_0x5ee8c6(0x299)!==_0x5ee8c6(0x214)){const _0x59463f=String(RegExp['$1'])[_0x5ee8c6(0x97)]()[_0x5ee8c6(0x2fc)](),_0x25cb70=String(RegExp['$2'])[_0x5ee8c6(0x317)](','),_0x19924a=_0xcf9e30[_0x59463f];_0x19924a&&_0x19924a===_0x23b51b&&(_0x3f65d0=_0x3f65d0[_0x5ee8c6(0xf3)](_0x25cb70));}else this[_0x5ee8c6(0x39b)]['clear'](),this[_0x5ee8c6(0x9c)]?this[_0x5ee8c6(0x187)]():this[_0x5ee8c6(0x362)]();}}}},VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x2b7)]=function(_0x53d5d9,_0x3b284e,_0x4cc72b){const _0x2a445a=_0x6ebe4,_0x2f1216={'Element':/<ELEMENT:[ ](.*)>/i,'SubElement':/<SUBELEMENT:[ ](.*)>/i,'Gender':/<GENDER:[ ](.*)>/i,'Race':/<RACE:[ ](.*)>/i,'Nature':/<NATURE:[ ](.*)>/i,'Alignment':/<ALIGNMENT:[ ](.*)>/i,'Blessing':/<BLESSING:[ ](.*)>/i,'Curse':/<CURSE:[ ](.*)>/i,'Zodiac':/<ZODIAC:[ ](.*)>/i,'Variant':/<VARIANT:[ ](.*)>/i},_0x11e732=_0x2f1216[_0x3b284e];if(!_0x11e732)return;if(_0x4cc72b[_0x2a445a(0x390)](/<ELEMENT:[ ](.*)\/(.*)>/i)){if(_0x2a445a(0x1ab)!==_0x2a445a(0x310)){if(_0x3b284e===_0x2a445a(0x2c2))_0x53d5d9['push'](String(RegExp['$1'])[_0x2a445a(0x2fc)]());if(_0x3b284e===_0x2a445a(0x1ac))_0x53d5d9[_0x2a445a(0xaf)](String(RegExp['$2'])[_0x2a445a(0x2fc)]());}else{const _0x2f2bc4=_0x4f12f1['traitSetType'](_0x24d201);if(!_0x2f2bc4)return![];if(!_0x2f2bc4[_0x2a445a(0xa8)])return![];return _0x23812c['SETTINGS'][_0x2a445a(0x2b1)]?!![]:_0x1b5e40&&_0x523d43[_0x2a445a(0xef)](_0x39c9cc)!=='';}}else{if(_0x4cc72b[_0x2a445a(0x390)](_0x11e732)){if('XHPqV'!==_0x2a445a(0x238)){const _0x5d12f7=String(RegExp['$2'])['split'](',');_0x53d5d9=_0x53d5d9[_0x2a445a(0xf3)](_0x5d12f7);}else{const _0xa788ee=_0x1b0505[_0x2a445a(0x3d0)][_0x2a445a(0x11d)](_0x386bc3['$1']),_0x43ef51=_0x2b7bf8(_0x56303b['$2']),_0xfd45ab=_0xa788ee[_0x43ef51];this[_0x2a445a(0x3cd)](_0xfd45ab,_0x52109f);}}}},VisuMZ['Bestiary'][_0x6ebe4(0x331)]=function(_0x3614bf,_0x4a1fe8,_0x1eea0f){const _0x580586=_0x6ebe4,_0x2de4a5={'Element':/<RANDOM ELEMENT>\s*([\s\S]*)\s*<\/RANDOM ELEMENT>/i,'SubElement':/<RANDOM SUBELEMENT>\s*([\s\S]*)\s*<\/RANDOM SUBELEMENT>/i,'Gender':/<RANDOM GENDER>\s*([\s\S]*)\s*<\/RANDOM GENDER>/i,'Race':/<RANDOM RACE>\s*([\s\S]*)\s*<\/RANDOM RACE>/i,'Nature':/<RANDOM NATURE>\s*([\s\S]*)\s*<\/RANDOM NATURE>/i,'Alignment':/<RANDOM ALIGNMENT>\s*([\s\S]*)\s*<\/RANDOM ALIGNMENT>/i,'Blessing':/<RANDOM BLESSING>\s*([\s\S]*)\s*<\/RANDOM BLESSING>/i,'Curse':/<RANDOM CURSE>\s*([\s\S]*)\s*<\/RANDOM CURSE>/i,'Zodiac':/<RANDOM ZODIAC>\s*([\s\S]*)\s*<\/RANDOM ZODIAC>/i,'Variant':/<RANDOM VARIANT>\s*([\s\S]*)\s*<\/RANDOM VARIANT>/i},_0x40238f=_0x2de4a5[_0x4a1fe8];if(!_0x40238f)return;if(_0x1eea0f[_0x580586(0x390)](_0x40238f)){if('nDeJb'!==_0x580586(0x396)){const _0x516dc7=_0x236b8b[_0x580586(0x109)](this[_0x580586(0x9c)]),_0x573a39=_0x4ca86b[_0x580586(0x2cd)](_0x516dc7);_0x573a39['addLoadListener'](this[_0x580586(0xad)][_0x580586(0xdc)](this,_0x573a39,0x0));}else{const _0xe23741=String(RegExp['$1'])[_0x580586(0x317)](/[\r\n]+/)[_0x580586(0x30e)]('');for(const _0x3d8c8f of _0xe23741){if(_0x3d8c8f[_0x580586(0x390)](/(.*):[ ](.*)/i)){if(_0x580586(0x2d3)===_0x580586(0xa5)){if(_0x44636f[_0x580586(0x1b2)][_0x580586(0x37d)][_0x580586(0x32d)][_0x580586(0xd4)])return _0x1ee9cc[_0x580586(0x1b2)][_0x580586(0x37d)]['Window'][_0x580586(0xd4)][_0x580586(0x180)](this);const _0x3ccc8c=_0xc5e248[_0x580586(0x220)],_0x45cc9d=this[_0x580586(0x217)](0x1,![]),_0x1210f8=0x0,_0x588f1f=this[_0x580586(0x141)]()-_0x45cc9d;return new _0x2eafa6(_0x1210f8,_0x588f1f,_0x3ccc8c,_0x45cc9d);}else _0x3614bf[_0x580586(0xaf)](RegExp['$1'][_0x580586(0x2fc)]());}}}}},VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x17a)]=Scene_Menu['prototype']['createCommandWindow'],Scene_Menu[_0x6ebe4(0x219)][_0x6ebe4(0xff)]=function(){const _0x4150dd=_0x6ebe4;VisuMZ[_0x4150dd(0x1b2)][_0x4150dd(0x17a)][_0x4150dd(0x180)](this);const _0x4c87a1=this[_0x4150dd(0x143)];_0x4c87a1[_0x4150dd(0x237)](_0x4150dd(0xb2),this['commandBestiary'][_0x4150dd(0xdc)](this));},Scene_Menu[_0x6ebe4(0x219)][_0x6ebe4(0x29c)]=function(){const _0x434389=_0x6ebe4;SceneManager[_0x434389(0xaf)](Scene_Bestiary);};function Scene_Bestiary(){const _0x13de5e=_0x6ebe4;this[_0x13de5e(0x384)](...arguments);}Scene_Bestiary[_0x6ebe4(0x219)]=Object['create'](Scene_MenuBase[_0x6ebe4(0x219)]),Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x34e)]=Scene_Bestiary,Scene_Bestiary['SETTINGS']={'helpWindow_BgType':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)]['HelpWindow_BgType']??0x0,'scaleHelpWindow':VisuMZ[_0x6ebe4(0x1b2)]['Settings']['Window'][_0x6ebe4(0x249)]??!![]},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x384)]=function(){const _0x44a639=_0x6ebe4;Scene_MenuBase[_0x44a639(0x219)][_0x44a639(0x384)][_0x44a639(0x180)](this);},Scene_Bestiary['prototype'][_0x6ebe4(0x16b)]=function(){return 0x0;},Scene_Bestiary['prototype'][_0x6ebe4(0xeb)]=function(){return!![];},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x1fc)]=function(){const _0x50f80b=_0x6ebe4;Scene_MenuBase[_0x50f80b(0x219)][_0x50f80b(0x1fc)][_0x50f80b(0x180)](this),this['_pageupButton']['setClickHandler'](this[_0x50f80b(0x11b)][_0x50f80b(0xdc)](this)),this['_pagedownButton'][_0x50f80b(0xe1)](this[_0x50f80b(0x2a1)][_0x50f80b(0xdc)](this));},Scene_Bestiary['prototype'][_0x6ebe4(0x3d6)]=function(){const _0x326279=_0x6ebe4;return this['_dataCategoriesWindow']&&this[_0x326279(0x244)][_0x326279(0xa3)];},Scene_Bestiary[_0x6ebe4(0x219)]['create']=function(){const _0x2a5671=_0x6ebe4;Scene_MenuBase[_0x2a5671(0x219)]['create'][_0x2a5671(0x180)](this),this[_0x2a5671(0x284)](),this[_0x2a5671(0x37f)](),this[_0x2a5671(0x302)]();},Scene_Bestiary[_0x6ebe4(0x219)]['isBottomHelpMode']=function(){const _0x3ff757=_0x6ebe4;if(ConfigManager['uiMenuStyle']!==undefined){if(_0x3ff757(0x10f)===_0x3ff757(0x3a7)){const _0x17d5c6=[];for(const _0x1ca7c8 of this['enemy']()[_0x3ff757(0x14b)]){const _0xaa179f=_0x4808dd[_0x1ca7c8[_0x3ff757(0x25f)]];if(_0xaa179f&&!_0x17d5c6[_0x3ff757(0x2bb)](_0xaa179f))_0x17d5c6['push'](_0xaa179f);}return _0x17d5c6;}else{if(ConfigManager[_0x3ff757(0x179)])return ConfigManager[_0x3ff757(0xd9)];}}return Scene_MenuBase[_0x3ff757(0x219)][_0x3ff757(0x38e)][_0x3ff757(0x180)](this);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x28d)]=function(){const _0x405251=_0x6ebe4;if(ConfigManager['uiMenuStyle']!==undefined){if(ConfigManager[_0x405251(0x179)]){if(_0x405251(0x33b)!==_0x405251(0x33b)){const _0x2ba79f=this[_0x405251(0x389)]();this['_symbolWindows'][_0x2ba79f]?(this['_symbolWindows'][_0x2ba79f][_0x405251(0x3db)](),this[_0x405251(0x28c)][_0x2ba79f][_0x405251(0x183)](0x0),this['_symbolWindows'][_0x2ba79f][_0x405251(0x235)](),this[_0x405251(0x28c)][_0x2ba79f]['scrollTo'](0x0,0x0)):this[_0x405251(0x1f9)]();}else return ConfigManager[_0x405251(0x186)];}}return Scene_MenuBase[_0x405251(0x219)][_0x405251(0x28d)][_0x405251(0x180)](this);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x284)]=function(){const _0x2f8796=_0x6ebe4;this[_0x2f8796(0x3bb)]=new Game_Enemy(0x1,0x0,0x0);},Scene_Bestiary[_0x6ebe4(0x219)]['enemy']=function(){const _0x2995c2=_0x6ebe4;return this[_0x2995c2(0x3bb)];},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x188)]=function(_0x74983d){const _0x3f78f6=_0x6ebe4;Math['_noRandom']=!![],this[_0x3f78f6(0x163)]()['setup'](_0x74983d,0x0,0x0),Math[_0x3f78f6(0x218)]=![];},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x37f)]=function(){const _0x245d25=_0x6ebe4;this[_0x245d25(0xb5)](),this[_0x245d25(0x11f)](),this[_0x245d25(0x216)](),this[_0x245d25(0x221)](),this['createDataCategoriesWindow'](),this[_0x245d25(0x156)](),this[_0x245d25(0x268)](),this[_0x245d25(0x3c5)](),this[_0x245d25(0x159)](),this[_0x245d25(0x2e4)](),this[_0x245d25(0x23e)](),this[_0x245d25(0x184)]();},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x156)]=function(){const _0x5e86fc=_0x6ebe4;Scene_MenuBase[_0x5e86fc(0x219)][_0x5e86fc(0x156)]['call'](this);if(Scene_Bestiary['SETTINGS']['scaleHelpWindow']){if('XWLre'===_0x5e86fc(0x38b))return!![];else{const _0x2c4700=this[_0x5e86fc(0x23a)]();this[_0x5e86fc(0x13e)]['scale']['x']=this['_helpWindow']['scale']['y']=_0x2c4700;}}this[_0x5e86fc(0x13e)]['setBackgroundType'](Scene_Bestiary[_0x5e86fc(0xf7)][_0x5e86fc(0x198)]),this[_0x5e86fc(0x13e)]['hide']();},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x23a)]=function(){const _0x4b88e8=_0x6ebe4;if(!Scene_Bestiary[_0x4b88e8(0xf7)][_0x4b88e8(0x383)])return 0x1;return this['imageWindowRect']()[_0x4b88e8(0x1a3)]/Graphics[_0x4b88e8(0x220)];},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x24f)]=function(){const _0x553161=_0x6ebe4;if(VisuMZ[_0x553161(0x1b2)][_0x553161(0x37d)][_0x553161(0x32d)]['HelpWindow_RectJS']){if(_0x553161(0x3cc)==='PafGi')this[_0x553161(0x2ea)][_0x325bb3]=_0x450a3a(_0xff37ae['$1'])[_0x553161(0x2fc)]();else return VisuMZ[_0x553161(0x1b2)][_0x553161(0x37d)][_0x553161(0x32d)][_0x553161(0x2a5)][_0x553161(0x180)](this);}const _0x36543f=this['imageWindowRect'](),_0x58e483=this[_0x553161(0x23a)](),_0x5215f6=Graphics[_0x553161(0x220)],_0x34bc2e=this[_0x553161(0x217)](0x2,![]),_0x2f33b5=_0x36543f['x'],_0x5f0be9=_0x36543f['y']+(this['isBottomHelpMode']()?_0x36543f['height']-_0x34bc2e*_0x58e483:0x0);return new Rectangle(_0x2f33b5,_0x5f0be9,_0x5215f6,_0x34bc2e);},Scene_Bestiary['prototype'][_0x6ebe4(0xb5)]=function(){const _0x55ae1c=_0x6ebe4,_0x1ecc9a=this[_0x55ae1c(0x278)](),_0x27b69c=new Window_BestiaryName(_0x1ecc9a);_0x27b69c[_0x55ae1c(0x14a)](),this[_0x55ae1c(0x38f)](_0x27b69c),this[_0x55ae1c(0x334)]=_0x27b69c,_0x27b69c[_0x55ae1c(0x2f1)](Window_BestiaryName[_0x55ae1c(0xf7)][_0x55ae1c(0x1d8)]);},Scene_Bestiary[_0x6ebe4(0x219)]['nameWindowRect']=function(){const _0x5af578=_0x6ebe4;if(VisuMZ['Bestiary'][_0x5af578(0x37d)][_0x5af578(0x32d)][_0x5af578(0x1da)]){if(_0x5af578(0x319)===_0x5af578(0x1e5))this[_0x5af578(0x303)](_0x86c73e,_0x11def2['x'],_0x4099f2['y'],_0x287721);else return VisuMZ[_0x5af578(0x1b2)]['Settings'][_0x5af578(0x32d)]['NameWindow_RectJS']['call'](this);}const _0x4062b8=Graphics[_0x5af578(0x220)],_0x203eb3=this['calcWindowHeight'](0x1,![]),_0x43fc5b=0x0,_0x561f3b=this[_0x5af578(0x95)]();return new Rectangle(_0x43fc5b,_0x561f3b,_0x4062b8,_0x203eb3);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x11f)]=function(){const _0x2e326f=_0x6ebe4,_0x497f84=this['subWindowRect'](),_0x156131=new Window_BestiarySub(_0x497f84);this[_0x2e326f(0x38f)](_0x156131),this[_0x2e326f(0x2d2)]=_0x156131,_0x156131[_0x2e326f(0x2f1)](Window_BestiarySub[_0x2e326f(0xf7)][_0x2e326f(0x1d8)]);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0xd5)]=function(){const _0x1e59e8=_0x6ebe4;if(VisuMZ[_0x1e59e8(0x1b2)][_0x1e59e8(0x37d)][_0x1e59e8(0x32d)][_0x1e59e8(0xd4)])return VisuMZ[_0x1e59e8(0x1b2)]['Settings'][_0x1e59e8(0x32d)]['SubWindow_RectJS'][_0x1e59e8(0x180)](this);const _0x2a5c7f=Graphics['boxWidth'],_0x3abbfb=this[_0x1e59e8(0x217)](0x1,![]),_0x2861f9=0x0,_0x3c596e=this['mainAreaBottom']()-_0x3abbfb;return new Rectangle(_0x2861f9,_0x3c596e,_0x2a5c7f,_0x3abbfb);},Scene_Bestiary['prototype'][_0x6ebe4(0x216)]=function(){const _0x350fac=_0x6ebe4,_0x176011=this[_0x350fac(0x337)](),_0x67d943=new Window_BestiaryEnemyList(_0x176011);_0x67d943['setSubWindow'](this[_0x350fac(0x2d2)]),_0x67d943[_0x350fac(0x237)](_0x350fac(0x381),this[_0x350fac(0x209)]['bind'](this)),_0x67d943[_0x350fac(0x237)](_0x350fac(0x163),this['viewEnemy'][_0x350fac(0xdc)](this)),_0x67d943[_0x350fac(0x237)](_0x350fac(0x2fe),this[_0x350fac(0x1c3)]['bind'](this)),this[_0x350fac(0x38f)](_0x67d943),this[_0x350fac(0x322)]=_0x67d943,_0x67d943[_0x350fac(0x2f1)](Window_BestiaryEnemyList[_0x350fac(0xf7)][_0x350fac(0x1d8)]);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x337)]=function(){const _0x1a6ad7=_0x6ebe4;if(VisuMZ[_0x1a6ad7(0x1b2)][_0x1a6ad7(0x37d)][_0x1a6ad7(0x32d)]['ListWindow_RectJS']){if(_0x1a6ad7(0x155)==='tPLpd')_0xb2fe5a===this[_0x1a6ad7(0x389)]()?(this[_0x1a6ad7(0x28c)][_0x43c7b4][_0x1a6ad7(0x3bc)](),this['_symbolWindows'][_0x233d7f]['refresh'](),this[_0x1a6ad7(0x28c)][_0x2f9746]['deactivate']()):this['_symbolWindows'][_0x46b1f3][_0x1a6ad7(0x374)]();else return VisuMZ['Bestiary'][_0x1a6ad7(0x37d)][_0x1a6ad7(0x32d)]['ListWindow_RectJS'][_0x1a6ad7(0x180)](this);}const _0x397c77=Math['ceil'](Graphics[_0x1a6ad7(0x220)]*0x4/0xa),_0x325c9d=this[_0x1a6ad7(0xd6)]()-this[_0x1a6ad7(0x217)](0x1,![])*0x2,_0x391981=this[_0x1a6ad7(0x28d)]()?Graphics[_0x1a6ad7(0x220)]-_0x397c77:0x0,_0x58c676=this[_0x1a6ad7(0x95)]()+this['calcWindowHeight'](0x1,![]);return new Rectangle(_0x391981,_0x58c676,_0x397c77,_0x325c9d);},Scene_Bestiary['prototype'][_0x6ebe4(0x221)]=function(){const _0x1acac5=_0x6ebe4,_0x39cd2e=this['imageWindowRect'](),_0x4b219b=new Window_BestiaryEnemyImage(_0x39cd2e);this[_0x1acac5(0x322)][_0x1acac5(0x3b5)](_0x4b219b),this[_0x1acac5(0x38f)](_0x4b219b),this[_0x1acac5(0x283)]=_0x4b219b,_0x4b219b[_0x1acac5(0x2f1)](Window_BestiaryEnemyImage[_0x1acac5(0xf7)]['bgType']);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x1e1)]=function(){const _0x4b2348=_0x6ebe4;if(VisuMZ['Bestiary'][_0x4b2348(0x37d)][_0x4b2348(0x32d)][_0x4b2348(0x1cd)])return _0x4b2348(0x1d9)!==_0x4b2348(0x1d9)?!![]:VisuMZ['Bestiary'][_0x4b2348(0x37d)][_0x4b2348(0x32d)][_0x4b2348(0x1cd)][_0x4b2348(0x180)](this);const _0x4dcf01=Graphics[_0x4b2348(0x220)]-Math[_0x4b2348(0x2bd)](Graphics[_0x4b2348(0x220)]*0x4/0xa),_0x51d862=this[_0x4b2348(0xd6)]()-this[_0x4b2348(0x217)](0x1,![])*0x2,_0x1dc17a=this['isRightInputMode']()?0x0:Graphics[_0x4b2348(0x220)]-_0x4dcf01,_0x58d5fc=this[_0x4b2348(0x95)]()+this[_0x4b2348(0x217)](0x1,![]);return new Rectangle(_0x1dc17a,_0x58d5fc,_0x4dcf01,_0x51d862);},Scene_Bestiary[_0x6ebe4(0x219)]['createDataCategoriesWindow']=function(){const _0x3e9d97=_0x6ebe4,_0x3569b7=this[_0x3e9d97(0x355)](),_0x587e45=new Window_BestiaryDataCategories(_0x3569b7);_0x587e45[_0x3e9d97(0x237)]('basic',this[_0x3e9d97(0x229)]['bind'](this)),_0x587e45[_0x3e9d97(0x237)](_0x3e9d97(0x15f),this['onDataCategoriesOpen'][_0x3e9d97(0xdc)](this)),_0x587e45[_0x3e9d97(0x237)](_0x3e9d97(0x343),this[_0x3e9d97(0x229)][_0x3e9d97(0xdc)](this)),_0x587e45[_0x3e9d97(0x237)](_0x3e9d97(0x26b),this['onDataCategoriesOpen'][_0x3e9d97(0xdc)](this)),_0x587e45[_0x3e9d97(0x237)](_0x3e9d97(0x2c8),this['onDataCategoriesOpen'][_0x3e9d97(0xdc)](this)),_0x587e45[_0x3e9d97(0x237)](_0x3e9d97(0x1d4),this['onDataCategoriesOpen'][_0x3e9d97(0xdc)](this)),_0x587e45['setHandler'](_0x3e9d97(0x10c),this[_0x3e9d97(0x11b)][_0x3e9d97(0xdc)](this)),_0x587e45[_0x3e9d97(0x237)](_0x3e9d97(0x225),this['nextEnemy']['bind'](this)),_0x587e45[_0x3e9d97(0x237)](_0x3e9d97(0x2fe),this[_0x3e9d97(0x12f)]['bind'](this)),this['addWindow'](_0x587e45),this[_0x3e9d97(0x244)]=_0x587e45,_0x587e45[_0x3e9d97(0x2f1)](Window_BestiaryDataCategories[_0x3e9d97(0xf7)][_0x3e9d97(0x1d8)]);},Scene_Bestiary[_0x6ebe4(0x219)]['dataCategoriesWindowRect']=function(){const _0x99873f=_0x6ebe4;if(VisuMZ[_0x99873f(0x1b2)]['Settings']['Window'][_0x99873f(0xb7)]){if(_0x99873f(0x2c1)===_0x99873f(0x2ed))this[_0x99873f(0x2f6)][_0x99873f(0x37e)]([0x0,0x0,0x0,0x0]);else return VisuMZ['Bestiary'][_0x99873f(0x37d)][_0x99873f(0x32d)][_0x99873f(0xb7)][_0x99873f(0x180)](this);}const _0x1dbb32=this[_0x99873f(0x337)]()[_0x99873f(0x1a3)],_0x3d36f9=this[_0x99873f(0x217)](0x1,!![]),_0x5c87dd=this[_0x99873f(0x337)]()['x'],_0x593403=this[_0x99873f(0x95)]()+this[_0x99873f(0x217)](0x1,![]);return new Rectangle(_0x5c87dd,_0x593403,_0x1dbb32,_0x3d36f9);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x2a9)]=function(){const _0x46d758=_0x6ebe4;if(VisuMZ[_0x46d758(0x1b2)][_0x46d758(0x37d)]['Window'][_0x46d758(0x1a2)]){if(_0x46d758(0x2b9)==='XqhVc')return VisuMZ[_0x46d758(0x1b2)][_0x46d758(0x37d)][_0x46d758(0x32d)][_0x46d758(0x1a2)][_0x46d758(0x180)](this);else _0x552ea9(this[_0x46d758(0x2f9)][_0x46d758(0xdc)](this,_0x317eb3),_0x46eb97);}const _0x35aa6d=this[_0x46d758(0x337)]()[_0x46d758(0x1a3)],_0x256d3e=this[_0x46d758(0xd6)]()-this[_0x46d758(0x217)](0x1,!![])-this[_0x46d758(0x217)](0x1,![])*0x2,_0x54bbd0=this[_0x46d758(0x337)]()['x'],_0x3b1432=this[_0x46d758(0x95)]()+this[_0x46d758(0x217)](0x1,![])+this[_0x46d758(0x217)](0x1,!![]);return new Rectangle(_0x54bbd0,_0x3b1432,_0x35aa6d,_0x256d3e);},Scene_Bestiary[_0x6ebe4(0x219)]['createBasicDataWindow']=function(){const _0x45681d=_0x6ebe4,_0x28c164=this[_0x45681d(0x2a9)](),_0x435602=new Window_BestiaryBasic(_0x28c164);this[_0x45681d(0x244)][_0x45681d(0x25e)](_0x435602,_0x45681d(0x99)),_0x435602['setHandler']('levelMax',this[_0x45681d(0x26e)]['bind'](this,'max')),_0x435602[_0x45681d(0x237)](_0x45681d(0x3af),this[_0x45681d(0x26e)][_0x45681d(0xdc)](this,'up')),_0x435602['setHandler'](_0x45681d(0x10d),this[_0x45681d(0x26e)][_0x45681d(0xdc)](this,_0x45681d(0x294))),_0x435602[_0x45681d(0x237)](_0x45681d(0x251),this[_0x45681d(0x26e)]['bind'](this,_0x45681d(0x358))),_0x435602[_0x45681d(0x237)](_0x45681d(0x2fe),this[_0x45681d(0x35c)][_0x45681d(0xdc)](this)),this['addWindow'](_0x435602),this[_0x45681d(0x1f4)]=_0x435602,_0x435602['setBackgroundType'](Window_BestiaryBasic[_0x45681d(0xf7)][_0x45681d(0x1d8)]);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x3c5)]=function(){const _0x17f21b=_0x6ebe4,_0x272ba4=this[_0x17f21b(0x2a9)](),_0x55d514=new Window_BestiaryElements(_0x272ba4);this[_0x17f21b(0x244)]['setSymbolWindow'](_0x55d514,'elements'),_0x55d514[_0x17f21b(0x237)]('cancel',this[_0x17f21b(0x35c)][_0x17f21b(0xdc)](this)),this[_0x17f21b(0x38f)](_0x55d514),this[_0x17f21b(0x19e)]=_0x55d514,_0x55d514['setBackgroundType'](Window_BestiaryElements[_0x17f21b(0xf7)][_0x17f21b(0x1d8)]);},Scene_Bestiary[_0x6ebe4(0x219)]['createSkillsDataWindow']=function(){const _0x34a782=_0x6ebe4,_0x1a7cbd=this[_0x34a782(0x2a9)](),_0x43193f=new Window_BestiarySkills(_0x1a7cbd);_0x43193f[_0x34a782(0x1f1)](this['_helpWindow']),this[_0x34a782(0x244)][_0x34a782(0x25e)](_0x43193f,_0x34a782(0x343)),_0x43193f['setHandler'](_0x34a782(0x2fe),this[_0x34a782(0x35c)][_0x34a782(0xdc)](this)),this[_0x34a782(0x38f)](_0x43193f),this['_skillsDataWindow']=_0x43193f,_0x43193f[_0x34a782(0x2f1)](Window_BestiarySkills[_0x34a782(0xf7)][_0x34a782(0x1d8)]);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x2e4)]=function(){const _0x2c254a=_0x6ebe4,_0x12aa9e=this[_0x2c254a(0x2a9)](),_0x538dcc=new Window_BestiaryRewards(_0x12aa9e);this[_0x2c254a(0x244)][_0x2c254a(0x25e)](_0x538dcc,_0x2c254a(0x26b)),_0x538dcc[_0x2c254a(0x237)](_0x2c254a(0x2fe),this[_0x2c254a(0x35c)]['bind'](this)),this[_0x2c254a(0x38f)](_0x538dcc),this['_rewardsDataWindow']=_0x538dcc,_0x538dcc['setBackgroundType'](Window_BestiaryRewards[_0x2c254a(0xf7)][_0x2c254a(0x1d8)]);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x23e)]=function(){const _0x3e9eee=_0x6ebe4;if(!Imported['VisuMZ_1_ElementStatusCore'])return;const _0x3e01f1=this['dataWindowRect'](),_0xf3b69=new Window_BestiaryTraits(_0x3e01f1);_0xf3b69[_0x3e9eee(0x1f1)](this[_0x3e9eee(0x13e)]),this['_dataCategoriesWindow'][_0x3e9eee(0x25e)](_0xf3b69,_0x3e9eee(0x2c8)),_0xf3b69['setHandler'](_0x3e9eee(0x381),this['toggleTraitsCategory'][_0x3e9eee(0xdc)](this)),_0xf3b69[_0x3e9eee(0x237)](_0x3e9eee(0x345),this['changeEnemyTrait'][_0x3e9eee(0xdc)](this)),_0xf3b69[_0x3e9eee(0x237)](_0x3e9eee(0x2fe),this[_0x3e9eee(0x35c)][_0x3e9eee(0xdc)](this)),this[_0x3e9eee(0x38f)](_0xf3b69),this[_0x3e9eee(0x151)]=_0xf3b69,_0xf3b69[_0x3e9eee(0x2f1)](Window_BestiaryTraits[_0x3e9eee(0xf7)][_0x3e9eee(0x1d8)]);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x184)]=function(){const _0x38a791=_0x6ebe4,_0x21d29c=this[_0x38a791(0x2a9)](),_0x5924ff=new Window_BestiaryLore(_0x21d29c);this['_dataCategoriesWindow'][_0x38a791(0x25e)](_0x5924ff,'lore'),_0x5924ff['setHandler'](_0x38a791(0x2fe),this[_0x38a791(0x35c)][_0x38a791(0xdc)](this)),this[_0x38a791(0x38f)](_0x5924ff),this['_loreDataWindow']=_0x5924ff,_0x5924ff[_0x38a791(0x2f1)](Window_BestiaryLore[_0x38a791(0xf7)][_0x38a791(0x1d8)]);},Scene_Bestiary[_0x6ebe4(0x219)]['toggleEnemyCategory']=function(){const _0x4274f8=_0x6ebe4;this[_0x4274f8(0x322)]['openCloseCurrentCategory'](),this['_listWindow'][_0x4274f8(0x1f9)]();},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x100)]=function(){const _0x1a40e6=_0x6ebe4;this[_0x1a40e6(0x322)][_0x1a40e6(0x31f)](this[_0x1a40e6(0x322)][_0x1a40e6(0x231)]()),this[_0x1a40e6(0x322)][_0x1a40e6(0x374)](),this[_0x1a40e6(0x244)]['show'](),this[_0x1a40e6(0x244)][_0x1a40e6(0x1f9)]();const _0x3dbfa5=this[_0x1a40e6(0x322)]['currentExt'](),_0x3f0caf=this[_0x1a40e6(0x163)]();this[_0x1a40e6(0x334)][_0x1a40e6(0x158)](_0x3f0caf),this[_0x1a40e6(0x2d2)][_0x1a40e6(0x3b2)](_0x3dbfa5);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x229)]=function(){const _0x258967=_0x6ebe4;this[_0x258967(0x244)]['activateSymbolWindow']();},Scene_Bestiary['prototype'][_0x6ebe4(0x2a1)]=function(){const _0x166985=_0x6ebe4;let _0x39d32b=this['_listWindow'][_0x166985(0x231)]();const _0x248499=this['_listWindow'][_0x166985(0x204)]();for(;;){if(_0x166985(0x2c3)==='AZfUM'){const _0x195ede=_0x23640f(_0x1b99c5['$2'])[_0x166985(0x317)](',');_0x15ae17=_0x3c43be[_0x166985(0xf3)](_0x195ede);}else{if(_0x39d32b>=this[_0x166985(0x322)][_0x166985(0x3d7)]()-0x1){if(_0x166985(0x167)===_0x166985(0x167))_0x39d32b=0x0;else{if(!_0x4c4d80[_0x166985(0x3ac)])return;if(!_0x1946f8[_0x166985(0xc9)][_0x166985(0x37d)]['AbilityPoints'][_0x166985(0x127)])return;const _0x21107f=_0x562326[_0x166985(0x168)][_0x166985(0x163)](),_0xa55eaf=_0x21107f[_0x166985(0x137)](),_0x1a61c4=_0x1398e5[_0x166985(0x363)],_0x1b2fc2=_0x3be1a4[_0x166985(0x375)];let _0x533cbd=_0x1b2fc2>0x0?_0x166985(0x113)[_0x166985(0x22e)](_0x1b2fc2,_0x1a61c4):_0x1a61c4;this['addCommand'](_0x533cbd,_0x166985(0x26b),!![],_0xa55eaf);}}else _0x39d32b+=0x1;if(this['_listWindow'][_0x166985(0x19a)](_0x39d32b)&&this['_listWindow']['commandSymbol'](_0x39d32b)===_0x166985(0x163)){this[_0x166985(0x322)][_0x166985(0x3a6)](_0x39d32b),this[_0x166985(0x188)](this[_0x166985(0x322)][_0x166985(0x204)]()),this[_0x166985(0x322)][_0x166985(0x31f)](this[_0x166985(0x322)][_0x166985(0x231)]());break;}}}SoundManager[_0x166985(0xe5)]();if(_0x248499!==this[_0x166985(0x322)]['currentExt']())this[_0x166985(0x2b0)]();this[_0x166985(0x244)][_0x166985(0x1f9)]();},Scene_Bestiary['prototype']['prevEnemy']=function(){const _0x2c915b=_0x6ebe4;let _0x13a79e=this[_0x2c915b(0x322)][_0x2c915b(0x231)]();const _0x46fde1=this[_0x2c915b(0x322)][_0x2c915b(0x204)]();for(;;){_0x13a79e<=0x0?_0x13a79e=this[_0x2c915b(0x322)][_0x2c915b(0x3d7)]()-0x1:_0x2c915b(0x22a)==='cnTcC'?this[_0x2c915b(0xb4)](_0x1521bb[_0x2c915b(0x1b2)][_0x2c915b(0x27d)]['category']):_0x13a79e-=0x1;if(this[_0x2c915b(0x322)][_0x2c915b(0x19a)](_0x13a79e)&&this[_0x2c915b(0x322)]['commandSymbol'](_0x13a79e)==='enemy'){if('ZzlHS'!=='ZzlHS')_0x354edf[_0x2c915b(0x219)][_0x2c915b(0x384)][_0x2c915b(0x180)](this,_0xe97691),this['deactivate'](),this['deselect'](),this[_0x2c915b(0x374)]();else{this['_listWindow'][_0x2c915b(0x3a6)](_0x13a79e),this['updateEnemyID'](this[_0x2c915b(0x322)][_0x2c915b(0x204)]()),this[_0x2c915b(0x322)]['callUpdateImage'](this[_0x2c915b(0x322)][_0x2c915b(0x231)]());break;}}}SoundManager['playCursor']();if(_0x46fde1!==this[_0x2c915b(0x322)][_0x2c915b(0x204)]())this[_0x2c915b(0x2b0)]();this['_dataCategoriesWindow']['activate']();},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x2b0)]=function(){const _0x176413=_0x6ebe4;this[_0x176413(0x334)][_0x176413(0x158)](this[_0x176413(0x163)]()),this[_0x176413(0x2d2)][_0x176413(0x3b2)](this[_0x176413(0x163)]());},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x12f)]=function(){const _0x28c58d=_0x6ebe4;this[_0x28c58d(0x244)][_0x28c58d(0x374)](),this[_0x28c58d(0x322)][_0x28c58d(0x3bc)](),this[_0x28c58d(0x322)]['activate'](),this[_0x28c58d(0x334)]['setNoEnemyText'](),this[_0x28c58d(0x2d2)][_0x28c58d(0x3b2)](0x0);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x35c)]=function(){const _0x588cd5=_0x6ebe4;this[_0x588cd5(0x244)]['activate'](),this[_0x588cd5(0x244)][_0x588cd5(0x364)](),this[_0x588cd5(0x13e)][_0x588cd5(0x374)]();},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x26e)]=function(_0x31c0ae){const _0x41f83c=_0x6ebe4;if(_0x31c0ae===_0x41f83c(0x264))this[_0x41f83c(0x163)]()[_0x41f83c(0x2a6)](this[_0x41f83c(0x163)]()[_0x41f83c(0x28b)]());else{if(_0x31c0ae==='up')this[_0x41f83c(0x163)]()['gainLevel'](0x1);else{if(_0x31c0ae==='down')this['enemy']()['gainLevel'](-0x1);else _0x31c0ae===_0x41f83c(0x358)&&this[_0x41f83c(0x163)]()[_0x41f83c(0x2a6)](this[_0x41f83c(0x163)]()['minLevel']());}}this[_0x41f83c(0x334)][_0x41f83c(0x158)](this[_0x41f83c(0x163)]()),this[_0x41f83c(0x1f4)][_0x41f83c(0x173)](),this[_0x41f83c(0x1f4)][_0x41f83c(0x1f9)]();},Scene_Bestiary[_0x6ebe4(0x219)]['toggleTraitsCategory']=function(){const _0x762670=_0x6ebe4;this[_0x762670(0x151)][_0x762670(0x1e8)](),this[_0x762670(0x151)]['activate']();},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0xfa)]=function(){const _0x46b3f4=_0x6ebe4,_0x31b956=this[_0x46b3f4(0x151)]['currentExt']();this[_0x46b3f4(0x163)]()['setTraitSet'](_0x31b956[0x0],_0x31b956[0x1]),this[_0x46b3f4(0x2b0)](),this[_0x46b3f4(0x163)]()[_0x46b3f4(0xc5)](),this['_imageWindow'][_0x46b3f4(0x173)](),this[_0x46b3f4(0x151)][_0x46b3f4(0x173)](),this[_0x46b3f4(0x151)]['activate']();},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x1c2)]=function(){const _0x4c9420=_0x6ebe4;return Scene_MenuBase['prototype'][_0x4c9420(0x1c2)][_0x4c9420(0x180)](this);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x29a)]=function(){const _0xae9ee8=_0x6ebe4;return Scene_MenuBase[_0xae9ee8(0x219)][_0xae9ee8(0x29a)][_0xae9ee8(0x180)](this);},Scene_Bestiary['prototype'][_0x6ebe4(0x20b)]=function(){const _0x54572c=_0x6ebe4;if(this[_0x54572c(0x1c6)]&&this[_0x54572c(0x1c6)][_0x54572c(0xa3)])return TextManager[_0x54572c(0x31a)]('up',_0x54572c(0x294));return Scene_MenuBase[_0x54572c(0x219)][_0x54572c(0x20b)][_0x54572c(0x180)](this);},Scene_Bestiary['prototype'][_0x6ebe4(0x258)]=function(){const _0x52e2e9=_0x6ebe4;return Scene_MenuBase['prototype'][_0x52e2e9(0x258)][_0x52e2e9(0x180)](this);},Scene_Bestiary[_0x6ebe4(0x219)]['buttonAssistKey5']=function(){const _0x4244d7=_0x6ebe4;return Scene_MenuBase['prototype'][_0x4244d7(0xee)][_0x4244d7(0x180)](this);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0xc1)]=function(){const _0x2c51b1=_0x6ebe4;if(this[_0x2c51b1(0x34a)]&&this[_0x2c51b1(0x34a)][_0x2c51b1(0x126)]){if(this['_dataCategoriesWindow']&&this['_dataCategoriesWindow'][_0x2c51b1(0xa3)])return TextManager[_0x2c51b1(0x1b2)][_0x2c51b1(0x14d)][_0x2c51b1(0x270)];}else{if(this['_loreDataWindow']&&this[_0x2c51b1(0x1c6)]['active'])return TextManager[_0x2c51b1(0x1b2)]['buttonAssist'][_0x2c51b1(0x380)];}return Scene_MenuBase[_0x2c51b1(0x219)]['buttonAssistText1'][_0x2c51b1(0x180)](this);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x132)]=function(){const _0x9d79d=_0x6ebe4;return Scene_MenuBase[_0x9d79d(0x219)][_0x9d79d(0x132)][_0x9d79d(0x180)](this);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x1f0)]=function(){const _0x4e8c7c=_0x6ebe4;if(this[_0x4e8c7c(0x1c6)]&&this[_0x4e8c7c(0x1c6)][_0x4e8c7c(0xa3)]){if('gxpxh'!==_0x4e8c7c(0x1d7)){if(!_0x379c38[_0x4e8c7c(0x3ac)])return;if(!_0x3f793d[_0x4e8c7c(0xc9)][_0x4e8c7c(0x37d)]['SkillPoints'][_0x4e8c7c(0x127)])return;const _0x438997=_0x20a6f4['_scene']['enemy'](),_0x3fae26=_0x438997[_0x4e8c7c(0x29d)](),_0x4ff0b0=_0x58b8ee[_0x4e8c7c(0x185)],_0x2a9530=_0x1bb77e['skillPointsIcon'];let _0x43da92=_0x2a9530>0x0?_0x4e8c7c(0x113)[_0x4e8c7c(0x22e)](_0x2a9530,_0x4ff0b0):_0x4ff0b0;this[_0x4e8c7c(0x202)](_0x43da92,'rewards',!![],_0x3fae26);}else return TextManager[_0x4e8c7c(0x1b2)]['buttonAssist'][_0x4e8c7c(0x2cc)];}return Scene_MenuBase[_0x4e8c7c(0x219)]['buttonAssistText3']['call'](this);},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x399)]=function(){const _0x5ea28b=_0x6ebe4;if(this[_0x5ea28b(0x322)]&&this['_listWindow']['active']){const _0x4e718d=this[_0x5ea28b(0x322)][_0x5ea28b(0x389)]();if(_0x4e718d===_0x5ea28b(0x163)){if('Poxdd'!=='Poxdd'){if(this[_0x5ea28b(0x389)]()==='category')this['_helpWindow'][_0x5ea28b(0xb4)](_0x12e84d[_0x5ea28b(0x1b2)][_0x5ea28b(0x306)]['traitHelp']);else{if(this['currentSymbol']()===_0x5ea28b(0x345)){const _0x2c7d5a=this[_0x5ea28b(0x204)](),_0x338c28=_0x12077d[_0x5ea28b(0x15a)](_0x2c7d5a[0x0],_0x2c7d5a[0x1]);this[_0x5ea28b(0x13e)][_0x5ea28b(0xb4)](_0x338c28?_0x338c28[_0x5ea28b(0x2a0)]||'':'');}else this[_0x5ea28b(0x389)]()===null&&this['_helpWindow'][_0x5ea28b(0xb4)](_0x1e6727[_0x5ea28b(0x1b2)][_0x5ea28b(0x306)]['nullHelp']);}}else return TextManager[_0x5ea28b(0x1b2)][_0x5ea28b(0x14d)][_0x5ea28b(0xc2)];}else{if(_0x4e718d===_0x5ea28b(0x381)){if(_0x5ea28b(0xc0)!==_0x5ea28b(0x3b0)){const _0x196157=this[_0x5ea28b(0x322)][_0x5ea28b(0x204)]();return this['_listWindow'][_0x5ea28b(0x3b7)](_0x196157)?TextManager['Bestiary']['buttonAssist'][_0x5ea28b(0x1f5)]:TextManager[_0x5ea28b(0x1b2)][_0x5ea28b(0x14d)]['expand'];}else{const _0x393e11=_0x33813c[_0x5ea28b(0x2bc)](_0x3eb216,!![]);this['drawText'](_0x393e11,_0x579fdb['x'],_0x1b58a1['y'],_0x248fe1[_0x5ea28b(0x1a3)],_0x5ea28b(0x338));}}}}else{if(this[_0x5ea28b(0x1f4)]&&this['_basicDataWindow'][_0x5ea28b(0xa3)]){const _0x38249c=this[_0x5ea28b(0x1f4)][_0x5ea28b(0x389)]();if(_0x38249c!=='param')return Scene_MenuBase['prototype'][_0x5ea28b(0x399)]['call'](this);}}return'';},Scene_Bestiary[_0x6ebe4(0x219)]['buttonAssistText5']=function(){const _0x5230ee=_0x6ebe4;return Scene_MenuBase['prototype'][_0x5230ee(0x101)][_0x5230ee(0x180)](this);},Scene_Bestiary['prototype'][_0x6ebe4(0x320)]=function(){const _0x3f7ed5=_0x6ebe4;Scene_MenuBase[_0x3f7ed5(0x219)][_0x3f7ed5(0x320)][_0x3f7ed5(0x180)](this),this['setBackgroundOpacity'](this['getBackgroundOpacity']()),this['createCustomBackgroundImages']();},Scene_Bestiary[_0x6ebe4(0x219)]['getBackgroundOpacity']=function(){const _0x45a66f=_0x6ebe4;return VisuMZ[_0x45a66f(0x1b2)][_0x45a66f(0x37d)][_0x45a66f(0xd3)][_0x45a66f(0x3bf)];},Scene_Bestiary[_0x6ebe4(0x219)]['createCustomBackgroundImages']=function(){const _0x44e44a=_0x6ebe4,_0x43be5b=VisuMZ[_0x44e44a(0x1b2)]['Settings']['BgSettings'];_0x43be5b&&(_0x43be5b[_0x44e44a(0xcf)]!==''||_0x43be5b[_0x44e44a(0x211)]!=='')&&('fVXTc'!=='DANRc'?(this[_0x44e44a(0x145)]=new Sprite(ImageManager[_0x44e44a(0x118)](_0x43be5b[_0x44e44a(0xcf)])),this[_0x44e44a(0x340)]=new Sprite(ImageManager['loadTitle2'](_0x43be5b[_0x44e44a(0x211)])),this[_0x44e44a(0x11a)](this[_0x44e44a(0x145)]),this['addChild'](this[_0x44e44a(0x340)]),this['_backSprite1'][_0x44e44a(0x206)][_0x44e44a(0x1c4)](this['adjustSprite']['bind'](this,this['_backSprite1'])),this['_backSprite2'][_0x44e44a(0x206)][_0x44e44a(0x1c4)](this['adjustSprite'][_0x44e44a(0xdc)](this,this[_0x44e44a(0x340)]))):this[_0x44e44a(0x384)](...arguments));},Scene_Bestiary[_0x6ebe4(0x219)][_0x6ebe4(0x315)]=function(_0x2d9803){const _0x1d2678=_0x6ebe4;this[_0x1d2678(0x2ff)](_0x2d9803),this['centerSprite'](_0x2d9803);},VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x332)]=Window_MenuCommand[_0x6ebe4(0x219)]['addOriginalCommands'],Window_MenuCommand[_0x6ebe4(0x219)][_0x6ebe4(0x13b)]=function(){const _0x598569=_0x6ebe4;VisuMZ[_0x598569(0x1b2)][_0x598569(0x332)]['call'](this),this[_0x598569(0x18f)]();},Window_MenuCommand[_0x6ebe4(0x219)][_0x6ebe4(0x18f)]=function(){const _0x4420af=_0x6ebe4;if(!this[_0x4420af(0x9d)]())return;if(!this[_0x4420af(0x140)]())return;const _0x4e90c9=TextManager[_0x4420af(0x2cf)],_0x41d2ba=this[_0x4420af(0x3dc)]();this[_0x4420af(0x202)](_0x4e90c9,'bestiary',_0x41d2ba);},Window_MenuCommand[_0x6ebe4(0x219)]['addBestiaryCommandAutomatically']=function(){const _0xfc9f42=_0x6ebe4;return Imported[_0xfc9f42(0x3d1)]?![]:!![];},Window_MenuCommand[_0x6ebe4(0x219)]['isBestiaryCommandVisible']=function(){const _0x4044e6=_0x6ebe4;return $gameSystem[_0x4044e6(0x3bd)]();},Window_MenuCommand[_0x6ebe4(0x219)][_0x6ebe4(0x3dc)]=function(){const _0x4caa0c=_0x6ebe4;return $gameSystem[_0x4caa0c(0x2f3)]();};function Window_BestiaryName(){const _0x290982=_0x6ebe4;this[_0x290982(0x384)](...arguments);}Window_BestiaryName[_0x6ebe4(0x219)]=Object[_0x6ebe4(0x290)](Window_Base['prototype']),Window_BestiaryName[_0x6ebe4(0x219)][_0x6ebe4(0x34e)]=Window_BestiaryName,Window_BestiaryName[_0x6ebe4(0xf7)]={'bgType':VisuMZ['Bestiary'][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0x1fa)]??0x0},Window_BestiaryName[_0x6ebe4(0x219)][_0x6ebe4(0x384)]=function(_0x22af52){const _0x278045=_0x6ebe4;Window_Base['prototype'][_0x278045(0x384)][_0x278045(0x180)](this,_0x22af52),this[_0x278045(0xdb)]='';},Window_BestiaryName[_0x6ebe4(0x219)][_0x6ebe4(0xb4)]=function(_0x411722){const _0x4065d1=_0x6ebe4;this[_0x4065d1(0xdb)]!==_0x411722&&(this[_0x4065d1(0xdb)]=_0x411722,this[_0x4065d1(0x173)]());},Window_BestiaryName[_0x6ebe4(0x219)][_0x6ebe4(0x158)]=function(_0x338247){const _0x24b211=_0x6ebe4;this[_0x24b211(0xb4)](_0x338247['name']());},Window_BestiaryName[_0x6ebe4(0x219)][_0x6ebe4(0x14a)]=function(){const _0x3f00e8=_0x6ebe4;this[_0x3f00e8(0xb4)](TextManager['Bestiary']['nameWindow']['category']);},Window_BestiaryName['prototype'][_0x6ebe4(0x39c)]=function(){return![];},Window_BestiaryName['prototype']['refresh']=function(){const _0x5bc7d8=_0x6ebe4;this[_0x5bc7d8(0x39b)][_0x5bc7d8(0x336)]();if(this[_0x5bc7d8(0xdb)]==='')return;const _0x1082dc=this['baseTextRect'](),_0x451ec7=this['textSizeEx'](this[_0x5bc7d8(0xdb)])[_0x5bc7d8(0x1a3)],_0x27dec2=_0x1082dc['x']+Math[_0x5bc7d8(0x3c9)]((_0x1082dc[_0x5bc7d8(0x1a3)]-_0x451ec7)/0x2);this[_0x5bc7d8(0x303)](this[_0x5bc7d8(0xdb)],_0x27dec2,_0x1082dc['y'],_0x1082dc[_0x5bc7d8(0x1a3)]);};function Window_BestiarySub(){const _0x318458=_0x6ebe4;this[_0x318458(0x384)](...arguments);}Window_BestiarySub['prototype']=Object[_0x6ebe4(0x290)](Window_Base[_0x6ebe4(0x219)]),Window_BestiarySub[_0x6ebe4(0x219)][_0x6ebe4(0x34e)]=Window_BestiarySub,Window_BestiarySub[_0x6ebe4(0xf7)]={'bgType':VisuMZ['Bestiary'][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0x1ef)]??0x0},Window_BestiarySub[_0x6ebe4(0x219)][_0x6ebe4(0x384)]=function(_0xcc8d42){const _0x7b9d63=_0x6ebe4;Window_Base[_0x7b9d63(0x219)]['initialize']['call'](this,_0xcc8d42),this[_0x7b9d63(0x9c)]=null,this[_0x7b9d63(0x173)]();},Window_BestiarySub[_0x6ebe4(0x219)][_0x6ebe4(0x3b2)]=function(_0x291479){const _0x10b692=_0x6ebe4;this['_enemyID']!==_0x291479&&(this[_0x10b692(0x9c)]=_0x291479,this[_0x10b692(0x173)]());},Window_BestiarySub[_0x6ebe4(0x219)][_0x6ebe4(0x39c)]=function(){return![];},Window_BestiarySub[_0x6ebe4(0x219)][_0x6ebe4(0x173)]=function(){const _0x57cfaf=_0x6ebe4;this[_0x57cfaf(0x39b)]['clear'](),this['_enemyID']?this['drawEncounterData']():_0x57cfaf(0x398)!==_0x57cfaf(0x398)?this['_dragonbones']&&(this[_0x57cfaf(0x2f6)]&&this[_0x57cfaf(0x2f6)][_0x57cfaf(0x32b)](this[_0x57cfaf(0x248)]),this[_0x57cfaf(0x32b)](this['_dragonbones']),this[_0x57cfaf(0x248)]['dispose'](),delete this[_0x57cfaf(0x248)],delete this['_dragonbonesName']):this[_0x57cfaf(0x362)]();},Window_BestiarySub[_0x6ebe4(0x219)][_0x6ebe4(0x187)]=function(){const _0x4e04bd=_0x6ebe4,_0x293459=TextManager[_0x4e04bd(0x1b2)][_0x4e04bd(0x2e6)],_0x3448ff=this[_0x4e04bd(0xac)]()*0x10,_0x15da0c=this['innerWidth']-_0x3448ff*0x2,_0x5f51bc=_0x293459['seenFmt'],_0x404135=$gameSystem[_0x4e04bd(0x366)](this[_0x4e04bd(0x9c)]),_0x3c17df=_0x5f51bc['format'](_0x404135);this[_0x4e04bd(0x212)](_0x3c17df,_0x3448ff,0x0,_0x15da0c,_0x4e04bd(0x379));const _0x13193f=_0x293459[_0x4e04bd(0xb3)],_0x3c89ef=$gameSystem[_0x4e04bd(0x223)](this[_0x4e04bd(0x9c)]),_0x27e2f9=_0x13193f[_0x4e04bd(0x22e)](_0x3c89ef);this['drawText'](_0x27e2f9,_0x3448ff,0x0,_0x15da0c,_0x4e04bd(0x338));},Window_BestiarySub[_0x6ebe4(0x219)]['drawBestiaryCompletionRate']=function(){const _0x524587=_0x6ebe4,_0x4d0e8c=TextManager[_0x524587(0x1b2)]['subWindow'],_0x4874d0=this['itemPadding']()*0x10,_0x49b6d1=this[_0x524587(0x172)]-_0x4874d0*0x2,_0x5159f0=_0x4d0e8c[_0x524587(0x21d)],_0x300442=DataManager[_0x524587(0x376)](),_0x9f3743=$gameSystem[_0x524587(0x165)](),_0x364da7=(_0x9f3743/_0x300442*0x64)[_0x524587(0x3a8)](_0x4d0e8c[_0x524587(0xbb)]),_0x5c9079=_0x5159f0[_0x524587(0x22e)](_0x364da7,_0x9f3743,_0x300442);this[_0x524587(0x212)](_0x5c9079,_0x4874d0,0x0,_0x49b6d1,_0x524587(0x1b9));};function Window_BestiaryEnemyList(){const _0xa921d8=_0x6ebe4;this[_0xa921d8(0x384)](...arguments);}Window_BestiaryEnemyList[_0x6ebe4(0x219)]=Object[_0x6ebe4(0x290)](Window_Command[_0x6ebe4(0x219)]),Window_BestiaryEnemyList[_0x6ebe4(0x219)]['constructor']=Window_BestiaryEnemyList,Window_BestiaryEnemyList[_0x6ebe4(0xf7)]={'bgType':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0x35f)]??0x0,'delayMs':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0x1cc)]??0xf0,'maskUndefeatedEnemyNames':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)]['Window']['ListWindow_MaskUnknown']??!![],'showAllCategories':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)]['ShowAllCategories']??![]},Window_BestiaryEnemyList['prototype'][_0x6ebe4(0x384)]=function(_0x27033d){const _0xfc0ab8=_0x6ebe4;this[_0xfc0ab8(0x1d0)](),Window_Command['prototype'][_0xfc0ab8(0x384)][_0xfc0ab8(0x180)](this,_0x27033d);},Window_BestiaryEnemyList[_0x6ebe4(0x219)][_0x6ebe4(0x1d0)]=function(){const _0xb56e5c=_0x6ebe4;this['_categoryStatus']={};const _0x2d6848=VisuMZ[_0xb56e5c(0x1b2)]['CategoryOrder'];for(const _0x2f79ec of _0x2d6848){if(!this['includeCategory'](_0x2f79ec))continue;this[_0xb56e5c(0xa9)][_0x2f79ec['toLowerCase']()[_0xb56e5c(0x2fc)]()]=!![];}},Window_BestiaryEnemyList[_0x6ebe4(0x219)][_0x6ebe4(0x39c)]=function(){return![];},Window_BestiaryEnemyList[_0x6ebe4(0x219)]['makeCommandList']=function(){const _0x239a61=_0x6ebe4,_0x332995=VisuMZ[_0x239a61(0x1b2)][_0x239a61(0x18e)];for(const _0x355410 of _0x332995){if(!this[_0x239a61(0x175)](_0x355410))continue;this[_0x239a61(0x350)](_0x355410);}},Window_BestiaryEnemyList['prototype']['includeCategory']=function(_0x326abc){const _0x207ba8=_0x6ebe4;if(Window_BestiaryEnemyList['SETTINGS']['showAllCategories'])return!![];_0x326abc=_0x326abc['toLowerCase']()['trim']();const _0x121277=DataManager[_0x207ba8(0x1e9)](_0x326abc);if(_0x121277[_0x207ba8(0x115)]<=0x0)return![];if($gameTemp['canDebugViewBestiary']())return!![];if(Game_Enemy[_0x207ba8(0x2b3)][_0x207ba8(0x2de)][_0x207ba8(0xf6)]()===_0x326abc)return!![];return _0x121277[_0x207ba8(0x1b8)](_0x233374=>$gameSystem[_0x207ba8(0xd8)](_0x233374['id']));},Game_System['prototype'][_0x6ebe4(0xd8)]=function(_0x21cbfd){const _0x454640=_0x6ebe4;if(this[_0x454640(0x366)](_0x21cbfd)>0x0)return!![];if(this[_0x454640(0x30b)](_0x21cbfd))return!![];return![];},Window_BestiaryEnemyList[_0x6ebe4(0x219)][_0x6ebe4(0x3b7)]=function(_0x4ac942){const _0x6b9daa=_0x6ebe4;return _0x4ac942=_0x4ac942[_0x6b9daa(0xf6)]()[_0x6b9daa(0x2fc)](),this[_0x6b9daa(0xa9)][_0x4ac942];},Window_BestiaryEnemyList[_0x6ebe4(0x219)][_0x6ebe4(0x350)]=function(_0x165725){const _0x2aae1c=_0x6ebe4;_0x165725=_0x165725[_0x2aae1c(0xf6)]()[_0x2aae1c(0x2fc)]();const _0x182e81=VisuMZ[_0x2aae1c(0x1b2)][_0x2aae1c(0x2df)][_0x165725];if(!_0x182e81)return;const _0xa1d159=this[_0x2aae1c(0x3b7)](_0x165725)?TextManager[_0x2aae1c(0x1b2)]['categoryWindow'][_0x2aae1c(0x285)]:TextManager[_0x2aae1c(0x1b2)][_0x2aae1c(0x296)][_0x2aae1c(0x222)],_0x227977=DataManager['categoryEnemies'](_0x165725),_0x116a1f=_0x227977['length'],_0x41025e=_0x227977[_0x2aae1c(0x276)](_0x50928e=>$gameSystem[_0x2aae1c(0x205)](_0x50928e['id']))[_0x2aae1c(0x115)],_0x4978d6=(_0x41025e/_0x116a1f*0x64)[_0x2aae1c(0x21c)](0x0,0x64)[_0x2aae1c(0x3a8)](TextManager['Bestiary']['categoryWindow'][_0x2aae1c(0xbb)]),_0x5c98a5=_0xa1d159['format'](_0x182e81[_0x2aae1c(0x392)],_0x4978d6);this['addCommand'](_0x5c98a5,_0x2aae1c(0x381),!![],_0x165725),this['makeEnemyList'](_0x165725);},Window_BestiaryEnemyList['prototype']['openCloseCurrentCategory']=function(){const _0x698340=_0x6ebe4,_0x3ab43f=this[_0x698340(0x23b)]();this[_0x698340(0xa9)][_0x3ab43f]=!this['_categoryStatus'][_0x3ab43f],this[_0x698340(0x173)]();},Window_BestiaryEnemyList['prototype'][_0x6ebe4(0x23b)]=function(){const _0x5ccd8f=_0x6ebe4;return this[_0x5ccd8f(0x389)]()==='category'?this[_0x5ccd8f(0x204)]():null;},Window_BestiaryEnemyList[_0x6ebe4(0x219)][_0x6ebe4(0x12c)]=function(_0x25cb99){const _0x5bdf0a=_0x6ebe4;if(!this['isCategoryOpen'](_0x25cb99))return;const _0x581403=DataManager[_0x5bdf0a(0x1e9)](_0x25cb99);for(const _0x4373af of _0x581403){if('izyFP'===_0x5bdf0a(0x224)){if(!this[_0x5bdf0a(0x253)](_0x4373af))continue;this[_0x5bdf0a(0x22d)](_0x4373af);}else this['drawTextEx'](_0x34ad1b,_0x41ad1c['x']+_0x4fc5b1[_0x5bdf0a(0x1a3)]-_0xddd570,_0x4db316['y'],_0x467de3);}},Window_BestiaryEnemyList[_0x6ebe4(0x219)][_0x6ebe4(0x253)]=function(_0x2d7cb1){const _0x4d29ad=_0x6ebe4;if(_0x2d7cb1){if(_0x4d29ad(0xb0)!==_0x4d29ad(0x259)){if($gameSystem[_0x4d29ad(0x30b)](_0x2d7cb1['id']))return!![];}else _0x22fa68[_0x4d29ad(0x219)][_0x4d29ad(0x384)][_0x4d29ad(0x180)](this,_0x144bf1),this['deactivate'](),this['deselect'](),this[_0x4d29ad(0x374)]();}return _0x2d7cb1&&DataManager[_0x4d29ad(0x3ce)](_0x2d7cb1);},Window_BestiaryEnemyList['prototype']['isEnabledEnemy']=function(_0x28e246){const _0x3d161b=_0x6ebe4;if($gameTemp['canDebugViewBestiary']())return!![];if($gameSystem['isEnemyRevealedByBestiary'](_0x28e246['id']))return!![];return $gameSystem[_0x3d161b(0x205)](_0x28e246['id']);},Window_BestiaryEnemyList[_0x6ebe4(0x219)][_0x6ebe4(0x22d)]=function(_0x307885){const _0x5cc4eb=_0x6ebe4;let _0x2c9243=_0x307885['name'];this['isEnemyNameMasked'](_0x307885)&&(_0x2c9243=Array(_0x307885[_0x5cc4eb(0xbd)][_0x5cc4eb(0x115)]+0x1)[_0x5cc4eb(0x11c)](TextManager[_0x5cc4eb(0x1b2)][_0x5cc4eb(0x296)][_0x5cc4eb(0x2e5)])),this[_0x5cc4eb(0x202)]('\x20\x20'+_0x2c9243,_0x5cc4eb(0x163),this[_0x5cc4eb(0x20e)](_0x307885),_0x307885['id']);},Window_BestiaryEnemyList[_0x6ebe4(0x219)][_0x6ebe4(0x210)]=function(_0x2c9989){const _0x5b1770=_0x6ebe4;if($gameTemp['canDebugViewBestiary']())return![];if($gameSystem['isEnemyDefeated'](_0x2c9989['id']))return![];if($gameSystem[_0x5b1770(0x366)](_0x2c9989['id'])>0x0)return![];if($gameSystem['isEnemyRevealedByBestiary'](_0x2c9989['id']))return![];return Window_BestiaryEnemyList[_0x5b1770(0xf7)][_0x5b1770(0x112)];},Window_BestiaryEnemyList[_0x6ebe4(0x219)][_0x6ebe4(0x1aa)]=function(){const _0x284e42=_0x6ebe4;return _0x284e42(0x379);},Window_BestiaryEnemyList['prototype'][_0x6ebe4(0xc7)]=function(_0x3b4bb5){const _0xf37022=_0x6ebe4,_0x2452d9=this[_0xf37022(0x233)](_0x3b4bb5),_0x3ced23=this['commandName'](_0x3b4bb5),_0x522963=this['textSizeEx'](_0x3ced23)['width'];this['changePaintOpacity'](this['isCommandEnabled'](_0x3b4bb5));const _0x5894a2=this[_0xf37022(0x1aa)]();if(_0x5894a2===_0xf37022(0x338)){if(_0xf37022(0x262)!==_0xf37022(0x262))for(const _0x2b5b9f of _0x12442e){this[_0xf37022(0x2b8)](_0x2dcff2,_0x2b5b9f,_0x444488);}else this['drawTextEx'](_0x3ced23,_0x2452d9['x']+_0x2452d9[_0xf37022(0x1a3)]-_0x522963,_0x2452d9['y'],_0x522963);}else{if(_0x5894a2===_0xf37022(0x1b9)){const _0x5a7ef8=_0x2452d9['x']+Math['floor']((_0x2452d9[_0xf37022(0x1a3)]-_0x522963)/0x2);this[_0xf37022(0x303)](_0x3ced23,_0x5a7ef8,_0x2452d9['y'],_0x522963);}else{if('cuIoF'!==_0xf37022(0x11e))this['drawTextEx'](_0x3ced23,_0x2452d9['x'],_0x2452d9['y'],_0x522963);else{if(_0x577dd5['Bestiary']['Settings'][_0xf37022(0x32d)][_0xf37022(0xb7)])return _0x39b996[_0xf37022(0x1b2)][_0xf37022(0x37d)][_0xf37022(0x32d)][_0xf37022(0xb7)][_0xf37022(0x180)](this);const _0x1c929a=this[_0xf37022(0x337)]()[_0xf37022(0x1a3)],_0x22abd4=this['calcWindowHeight'](0x1,!![]),_0x2a4846=this['listWindowRect']()['x'],_0xf40dd3=this[_0xf37022(0x95)]()+this[_0xf37022(0x217)](0x1,![]);return new _0x1f13dc(_0x2a4846,_0xf40dd3,_0x1c929a,_0x22abd4);}}}},Window_BestiaryEnemyList['prototype'][_0x6ebe4(0x3b5)]=function(_0x12de0d){const _0x1d0838=_0x6ebe4;this[_0x1d0838(0x283)]=_0x12de0d,this[_0x1d0838(0x3da)]();},Window_BestiaryEnemyList[_0x6ebe4(0x219)]['setSubWindow']=function(_0x425c93){const _0xb74a41=_0x6ebe4;this['_subWindow']=_0x425c93,this[_0xb74a41(0x3da)]();},Window_BestiaryEnemyList[_0x6ebe4(0x219)][_0x6ebe4(0x3da)]=function(){const _0x39564=_0x6ebe4;Window_Command[_0x39564(0x219)]['callUpdateHelp']['call'](this);const _0x37ae8a=this[_0x39564(0x231)](),_0x5d2e91=Window_BestiaryEnemyList['SETTINGS']['delayMs'];this[_0x39564(0x283)]&&setTimeout(this['callUpdateImage']['bind'](this,_0x37ae8a),_0x5d2e91);if(this[_0x39564(0x2d2)]){if(_0x39564(0x181)!=='EyLaX')setTimeout(this[_0x39564(0x2f9)][_0x39564(0xdc)](this,_0x37ae8a),_0x5d2e91);else{const _0x4c8fe7=_0x21f51e[_0x39564(0x1f8)](_0x483a56(_0x13f71a));this[_0x39564(0x212)](_0x4c8fe7,_0x2fc42d['x'],_0x55841d['y'],_0x2b3ac2[_0x39564(0x1a3)],_0x39564(0x379));}}},Window_BestiaryEnemyList[_0x6ebe4(0x219)][_0x6ebe4(0x31f)]=function(_0x1cbfb3){const _0x43f59f=_0x6ebe4;if(_0x1cbfb3!==this[_0x43f59f(0x231)]())return;if(this[_0x43f59f(0x1a0)]===_0x1cbfb3)return;this['_lastIndex']=_0x1cbfb3;const _0x96eb3a=this[_0x43f59f(0x389)]();_0x96eb3a===_0x43f59f(0x163)?this['_imageWindow'][_0x43f59f(0xa6)](this[_0x43f59f(0x204)]()):'bhlTN'==='lcgIZ'?this[_0x43f59f(0x384)](...arguments):this[_0x43f59f(0x283)][_0x43f59f(0xa6)](0x0);},Window_BestiaryEnemyList['prototype'][_0x6ebe4(0x2f9)]=function(_0x4c941e){const _0x3282ac=_0x6ebe4;if(_0x4c941e!==this[_0x3282ac(0x231)]())return;const _0x27c8bc=this[_0x3282ac(0x389)]();if(_0x27c8bc===_0x3282ac(0x163))this[_0x3282ac(0x2d2)][_0x3282ac(0x3b2)](this[_0x3282ac(0x204)]());else{if('dNaxm'===_0x3282ac(0x1ee)){if(_0x255912===_0x58b693[_0x120ca2])_0x2c0022=_0x4d7416;}else this['_subWindow']['setEnemy'](0x0);}};function Window_BestiaryEnemyImage(){const _0x3a2ed6=_0x6ebe4;this[_0x3a2ed6(0x384)](...arguments);}Window_BestiaryEnemyImage[_0x6ebe4(0x219)]=Object[_0x6ebe4(0x290)](Window_Base['prototype']),Window_BestiaryEnemyImage[_0x6ebe4(0x219)]['constructor']=Window_BestiaryEnemyImage,Window_BestiaryEnemyImage[_0x6ebe4(0xf7)]={'bgType':VisuMZ['Bestiary'][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)]['ImageWindow_BgType']??0x0,'blurFilterStrength':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0x35a)]??0x8,'defaultBattleback1':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0x312)]??_0x6ebe4(0x267),'defaultBattleback2':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)]['ImageWindow_Battleback2']??'Grassland','padding':VisuMZ['Bestiary']['Settings'][_0x6ebe4(0x32d)][_0x6ebe4(0x197)]??0x4},Window_BestiaryEnemyImage[_0x6ebe4(0x219)][_0x6ebe4(0x384)]=function(_0x35a198){const _0x64d572=_0x6ebe4;Window_Base[_0x64d572(0x219)][_0x64d572(0x384)][_0x64d572(0x180)](this,_0x35a198),this[_0x64d572(0x1d6)](),this['createEnemySprite'](),this[_0x64d572(0x2ca)](),this[_0x64d572(0x128)]();},Window_BestiaryEnemyImage[_0x6ebe4(0x219)][_0x6ebe4(0x2d9)]=function(){const _0x24728b=_0x6ebe4;this['padding']=Window_BestiaryEnemyImage[_0x24728b(0xf7)][_0x24728b(0x3ab)];},Window_BestiaryEnemyImage[_0x6ebe4(0x219)]['createBattlebackSprites']=function(){const _0x321e12=_0x6ebe4;this['_battlebackSprite1']=new Sprite(),this['_battlebackSprite2']=new Sprite(),this[_0x321e12(0x1ea)](this[_0x321e12(0x157)]),this[_0x321e12(0x1ea)](this['_battlebackSprite2']),this[_0x321e12(0x157)][_0x321e12(0x36c)]['x']=this[_0x321e12(0x157)][_0x321e12(0x36c)]['y']=0.5,this[_0x321e12(0x17c)][_0x321e12(0x36c)]['x']=this[_0x321e12(0x17c)][_0x321e12(0x36c)]['y']=0.5;},Window_BestiaryEnemyImage[_0x6ebe4(0x219)]['createEnemySprite']=function(){const _0x3b5de8=_0x6ebe4;this[_0x3b5de8(0x1c8)]=new Sprite(),this[_0x3b5de8(0x1ea)](this['_enemySprite']),this[_0x3b5de8(0x1c8)]['anchor']['x']=this[_0x3b5de8(0x1c8)]['anchor']['y']=0.5;},Window_BestiaryEnemyImage[_0x6ebe4(0x219)][_0x6ebe4(0x2ca)]=function(){const _0x49377e=_0x6ebe4;if(!Imported['VisuMZ_2_DragonbonesUnion'])return;this['_dragonbones']=null,this[_0x49377e(0x2f6)]=new Sprite(),this[_0x49377e(0x1ea)](this[_0x49377e(0x2f6)]);},Window_BestiaryEnemyImage['prototype'][_0x6ebe4(0x128)]=function(){const _0x18daff=_0x6ebe4,_0x471329=Window_BestiaryEnemyImage[_0x18daff(0xf7)]['blurFilterStrength'];this[_0x18daff(0x1e4)]=new PIXI[(_0x18daff(0x301))][(_0x18daff(0xfd))](_0x471329),this['_enemySprite'][_0x18daff(0x301)]=[this[_0x18daff(0x1e4)]];if(this['_dragonbonesSpriteContainer']){if(_0x18daff(0x2a8)!==_0x18daff(0x2a8))return _0x430708[_0x18daff(0x1b2)]['buttonAssist'][_0x18daff(0x2cc)];else this[_0x18daff(0x2f6)][_0x18daff(0x301)]=[this[_0x18daff(0x1e4)]];}},Window_BestiaryEnemyImage['prototype']['setEnemyID']=function(_0x5b6b9f){const _0x3a0665=_0x6ebe4;if(!SceneManager['_scene'][_0x3a0665(0x188)])return;if(this[_0x3a0665(0x9c)]!==_0x5b6b9f){if(_0x5b6b9f>0x0)SceneManager[_0x3a0665(0x168)][_0x3a0665(0x188)](_0x5b6b9f);this['_enemyID']=_0x5b6b9f,this[_0x3a0665(0x173)]();}},Window_BestiaryEnemyImage['prototype'][_0x6ebe4(0x173)]=function(){const _0x5eccd3=_0x6ebe4;this[_0x5eccd3(0x1fd)]();if(this[_0x5eccd3(0x9c)]<=0x0)return;this[_0x5eccd3(0x321)](),this[_0x5eccd3(0x29b)]();},Window_BestiaryEnemyImage['prototype'][_0x6ebe4(0x1fd)]=function(){const _0x202e4e=_0x6ebe4;this[_0x202e4e(0x1c8)]['visible']=this[_0x202e4e(0x9c)]>0x0,this[_0x202e4e(0x157)][_0x202e4e(0x126)]=this[_0x202e4e(0x9c)]>0x0,this[_0x202e4e(0x17c)]['visible']=this[_0x202e4e(0x9c)]>0x0,this[_0x202e4e(0x1c8)]['x']=Math[_0x202e4e(0x1fb)](this[_0x202e4e(0x172)]/0x2),this[_0x202e4e(0x1c8)]['y']=Math['round'](this['innerHeight']/0x2),this[_0x202e4e(0x1c8)]['scale']['x']=Math[_0x202e4e(0x16e)](this['_enemySprite'][_0x202e4e(0x1bc)]['x']),this[_0x202e4e(0x157)]['x']=this[_0x202e4e(0x17c)]['x']=Math[_0x202e4e(0x1fb)](this['innerWidth']/0x2),this[_0x202e4e(0x157)]['y']=this[_0x202e4e(0x17c)]['y']=Math['round'](this['innerHeight']/0x2);},Window_BestiaryEnemyImage[_0x6ebe4(0x219)][_0x6ebe4(0x321)]=function(){const _0x9afea0=_0x6ebe4;this['_battlebackSprite1'][_0x9afea0(0x206)]=ImageManager['bestiaryEnemyBattleback1'](this[_0x9afea0(0x9c)]),this[_0x9afea0(0x17c)][_0x9afea0(0x206)]=ImageManager[_0x9afea0(0x33e)](this[_0x9afea0(0x9c)]);},Window_BestiaryEnemyImage[_0x6ebe4(0x219)]['updateEnemyImage']=function(){const _0x23a1fd=_0x6ebe4,_0x301b03=SceneManager[_0x23a1fd(0x168)][_0x23a1fd(0x163)](),_0x146055=_0x301b03[_0x23a1fd(0x305)]();this[_0x23a1fd(0x120)]();if(ImageManager[_0x23a1fd(0x109)](this[_0x23a1fd(0x9c)])!==''){const _0x1085c6=ImageManager['bestiaryEnemyCustomImageFilename'](this[_0x23a1fd(0x9c)]),_0x5c38ca=ImageManager[_0x23a1fd(0x2cd)](_0x1085c6);_0x5c38ca[_0x23a1fd(0x1c4)](this[_0x23a1fd(0xad)][_0x23a1fd(0xdc)](this,_0x5c38ca,0x0));}else{if(this[_0x23a1fd(0xec)]()){if(_0x23a1fd(0x1de)!==_0x23a1fd(0x2a2)){const _0x45d487=new Bitmap(0x1,0x1);this[_0x23a1fd(0x106)](),this[_0x23a1fd(0xad)](_0x45d487,0x0);}else _0x36dc49++;}else{if(this[_0x23a1fd(0x13c)]()){if(_0x23a1fd(0x1d3)===_0x23a1fd(0x1d3)){const _0x25256a=this['_svBattlerName'],_0x53dfd2=ImageManager[_0x23a1fd(0x344)](_0x25256a);_0x53dfd2[_0x23a1fd(0x1c4)](this[_0x23a1fd(0x15d)][_0x23a1fd(0xdc)](this,_0x25256a,_0x53dfd2,0x0));}else this[_0x23a1fd(0x1d0)](),_0x19039d[_0x23a1fd(0x219)][_0x23a1fd(0x384)]['call'](this,_0x79f502);}else{if($gameSystem['isSideView']()){const _0x44358c=ImageManager[_0x23a1fd(0x1df)](_0x301b03[_0x23a1fd(0x31c)]());_0x44358c[_0x23a1fd(0x1c4)](this[_0x23a1fd(0xad)][_0x23a1fd(0xdc)](this,_0x44358c,_0x146055));}else{const _0x4a5c76=ImageManager[_0x23a1fd(0x19c)](_0x301b03['battlerName']());_0x4a5c76[_0x23a1fd(0x1c4)](this[_0x23a1fd(0xad)][_0x23a1fd(0xdc)](this,_0x4a5c76,_0x146055));}}}}},Window_BestiaryEnemyImage[_0x6ebe4(0x219)][_0x6ebe4(0xec)]=function(){const _0x1e5b19=_0x6ebe4;if(!Imported['VisuMZ_2_DragonbonesUnion'])return![];const _0x4c1a97=SceneManager[_0x1e5b19(0x168)][_0x1e5b19(0x163)]();return _0x4c1a97['dragonbonesData']()[_0x1e5b19(0x1b5)]!==''?(this[_0x1e5b19(0x135)]=_0x4c1a97['dragonbonesData'](),!![]):![];},Window_BestiaryEnemyImage[_0x6ebe4(0x219)][_0x6ebe4(0x13c)]=function(){const _0x1e188b=_0x6ebe4;if(!Imported[_0x1e188b(0x274)])return![];const _0x16eeb0=SceneManager['_scene'][_0x1e188b(0x163)]();return _0x16eeb0[_0x1e188b(0x12a)]()?(this[_0x1e188b(0x21b)]=_0x16eeb0[_0x1e188b(0xcc)]()[_0x1e188b(0xbd)],!![]):![];},Window_BestiaryEnemyImage[_0x6ebe4(0x219)][_0x6ebe4(0xad)]=function(_0x23f192,_0x47b120){const _0x3ed9e1=_0x6ebe4;this[_0x3ed9e1(0x1c8)][_0x3ed9e1(0x206)]=_0x23f192,this[_0x3ed9e1(0x1c8)][_0x3ed9e1(0x3b6)](_0x47b120),this[_0x3ed9e1(0x1c8)][_0x3ed9e1(0x373)](0x0,0x0,_0x23f192[_0x3ed9e1(0x1a3)],_0x23f192[_0x3ed9e1(0x250)]),this[_0x3ed9e1(0x28e)](),this['_enemySprite'][_0x3ed9e1(0x35e)]();},Window_BestiaryEnemyImage[_0x6ebe4(0x219)]['processSvActorImage']=function(_0x3d65fd,_0x2bafde,_0x5aa919){const _0x2b69ad=_0x6ebe4;this[_0x2b69ad(0x1c8)][_0x2b69ad(0x206)]=_0x2bafde,this['_enemySprite']['setHue'](_0x5aa919);const _0xab87f0=Math[_0x2b69ad(0x3c9)](_0x2bafde[_0x2b69ad(0x1a3)]/ImageManager[_0x2b69ad(0x1a8)]),_0x3162ca=Math['floor'](_0x2bafde[_0x2b69ad(0x250)]/ImageManager[_0x2b69ad(0x1ff)]);this[_0x2b69ad(0x1c8)][_0x2b69ad(0x373)](0x0,0x0,_0xab87f0,_0x3162ca),this['_enemySprite'][_0x2b69ad(0x1bc)]['x']*=-0x1,this[_0x2b69ad(0x28e)](),this[_0x2b69ad(0x1c8)][_0x2b69ad(0x35e)]();},Window_BestiaryEnemyImage[_0x6ebe4(0x219)][_0x6ebe4(0x106)]=function(){const _0x5b546b=_0x6ebe4;this[_0x5b546b(0x120)]();const _0x1a1fa1=this[_0x5b546b(0x135)];this['_dragonbonesName']=_0x1a1fa1['battler'],armatureName=_0x1a1fa1['battler'],DragonbonesManager[_0x5b546b(0x170)](armatureName,this[_0x5b546b(0xca)][_0x5b546b(0xdc)](this));const _0x2a39c9=this[_0x5b546b(0x2f6)];_0x2a39c9&&(_0x2a39c9['x']=Math[_0x5b546b(0x1fb)](this['innerWidth']/0x2),_0x2a39c9['y']=Math[_0x5b546b(0x1fb)](this[_0x5b546b(0x2e0)]/0x2),_0x2a39c9['y']+=Math[_0x5b546b(0x1fb)](_0x1a1fa1[_0x5b546b(0x250)]/0x2));},Window_BestiaryEnemyImage[_0x6ebe4(0x219)][_0x6ebe4(0x120)]=function(){const _0x368656=_0x6ebe4;if(this[_0x368656(0x248)]){if('PZTkn'!==_0x368656(0x263))this[_0x368656(0x2f6)]&&this[_0x368656(0x2f6)]['removeChild'](this[_0x368656(0x248)]),this[_0x368656(0x32b)](this['_dragonbones']),this[_0x368656(0x248)]['dispose'](),delete this[_0x368656(0x248)],delete this[_0x368656(0x1e2)];else return _0x523fe6['isMainMenuBestiaryEnabled']();}},Window_BestiaryEnemyImage[_0x6ebe4(0x219)][_0x6ebe4(0xca)]=function(){const _0x349488=_0x6ebe4,_0x57b026=this[_0x349488(0x135)];this[_0x349488(0x248)]=DragonbonesManager[_0x349488(0x201)](_0x57b026[_0x349488(0x1b5)]),!this[_0x349488(0x2f6)]&&(this[_0x349488(0x2f6)]=new Sprite(),this[_0x349488(0x2f6)]['filters']=[this[_0x349488(0x1e4)]]),this[_0x349488(0x2f6)][_0x349488(0x11a)](this['_dragonbones']),this[_0x349488(0x3be)](),this[_0x349488(0x248)]['x']=_0x57b026['offsetX'],this[_0x349488(0x248)]['y']=_0x57b026[_0x349488(0x28a)],this['_dragonbones'][_0x349488(0x1bc)]['x']=_0x57b026[_0x349488(0x1b7)],this['_dragonbones']['scale']['y']=_0x57b026['scaleY'];},Window_BestiaryEnemyImage[_0x6ebe4(0x219)][_0x6ebe4(0x3be)]=function(){const _0x50888e=_0x6ebe4,_0x2dd5ab=_0x50888e(0x365),_0xe2f6bf=this[_0x50888e(0x248)][_0x50888e(0x18b)];_0xe2f6bf[_0x50888e(0x3ad)][_0x2dd5ab]&&_0xe2f6bf[_0x50888e(0x131)](_0x2dd5ab);},Window_BestiaryEnemyImage['prototype'][_0x6ebe4(0x28e)]=function(){const _0x33670c=_0x6ebe4;this[_0x33670c(0x2f7)]()?(this['_blurFilter']['enabled']=![],this[_0x33670c(0x1c8)]['setColorTone']([0x0,0x0,0x0,0x0]),this['_dragonbonesSpriteContainer']&&this[_0x33670c(0x2f6)][_0x33670c(0x37e)]([0x0,0x0,0x0,0x0])):_0x33670c(0x27a)!=='gxgwI'?(this['_blurFilter']['enabled']=!![],this[_0x33670c(0x1c8)][_0x33670c(0x37e)]([-0xff,-0xff,-0xff,0x0]),this[_0x33670c(0x2f6)]&&this[_0x33670c(0x2f6)][_0x33670c(0x37e)]([-0xff,-0xff,-0xff,0x0])):_0x1fab4e=_0x5b4c51[_0x33670c(0x264)](_0x3ae5fe,_0x445a60);},Window_BestiaryEnemyImage[_0x6ebe4(0x219)][_0x6ebe4(0x2f7)]=function(){const _0x530263=_0x6ebe4;if($gameTemp[_0x530263(0x1c0)]())return!![];if($gameSystem['isEnemyDefeated'](this[_0x530263(0x9c)]))return!![];if($gameSystem[_0x530263(0x366)](this[_0x530263(0x9c)])>0x0)return!![];if($gameSystem[_0x530263(0x30b)](this['_enemyID']))return!![];return![];};function Window_BestiaryDataCategories(){this['initialize'](...arguments);}Window_BestiaryDataCategories[_0x6ebe4(0x219)]=Object[_0x6ebe4(0x290)](Window_HorzCommand[_0x6ebe4(0x219)]),Window_BestiaryDataCategories[_0x6ebe4(0x219)]['constructor']=Window_BestiaryDataCategories,Window_BestiaryDataCategories['SETTINGS']={'bgType':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)]['Window'][_0x6ebe4(0x339)]??0x0,'commandStyle':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)]['CategoryWindow_Style']??_0x6ebe4(0x316),'commandOrder':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0x1db)]??[_0x6ebe4(0x99),_0x6ebe4(0x15f),'skills',_0x6ebe4(0x26b),_0x6ebe4(0x2c8),_0x6ebe4(0x1d4)],'commands':{'basic':{'show':!![],'text':VisuMZ[_0x6ebe4(0x1b2)]['Settings'][_0x6ebe4(0x174)][_0x6ebe4(0x2c0)]??_0x6ebe4(0x22b),'icon':VisuMZ['Bestiary']['Settings']['Vocab'][_0x6ebe4(0x1c5)]??0x54},'elements':{'show':!![],'text':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x3d3)]??_0x6ebe4(0x314),'icon':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x3a3)]??0x40},'skills':{'show':!![],'text':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)]['SkillsText']??_0x6ebe4(0xae),'icon':VisuMZ['Bestiary'][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x36d)]??0x4f},'rewards':{'show':!![],'text':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x252)]??_0x6ebe4(0x227),'icon':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)]['RewardsIcon']??0x57},'traits':{'show':!![],'text':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)]['Vocab'][_0x6ebe4(0x2d8)]??_0x6ebe4(0x1bf),'icon':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x26c)]??0x53},'lore':{'show':!![],'text':VisuMZ[_0x6ebe4(0x1b2)]['Settings']['Vocab'][_0x6ebe4(0x360)]??_0x6ebe4(0xfe),'icon':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x174)][_0x6ebe4(0x125)]??0x50}}},Window_BestiaryDataCategories['prototype']['initialize']=function(_0x408730){const _0x443c20=_0x6ebe4;Window_HorzCommand[_0x443c20(0x219)][_0x443c20(0x384)][_0x443c20(0x180)](this,_0x408730),this[_0x443c20(0x386)](_0x408730),this[_0x443c20(0x3db)](),this[_0x443c20(0x374)]();},Window_BestiaryDataCategories[_0x6ebe4(0x219)][_0x6ebe4(0x139)]=function(){const _0x1305c0=_0x6ebe4;return this[_0x1305c0(0x3aa)]?this[_0x1305c0(0x3aa)][_0x1305c0(0x115)]:0x1;},Window_BestiaryDataCategories[_0x6ebe4(0x219)]['callUpdateHelp']=function(){const _0x590cef=_0x6ebe4;Window_HorzCommand[_0x590cef(0x219)][_0x590cef(0x3da)]['call'](this),this[_0x590cef(0x21a)]&&this[_0x590cef(0x108)](),this[_0x590cef(0xa3)]&&this[_0x590cef(0x28c)]&&this[_0x590cef(0x2c6)]();},Window_BestiaryDataCategories[_0x6ebe4(0x219)][_0x6ebe4(0x3bc)]=function(){const _0x1451a0=_0x6ebe4;Window_HorzCommand[_0x1451a0(0x219)]['show'][_0x1451a0(0x180)](this),this[_0x1451a0(0x3da)]();},Window_BestiaryDataCategories[_0x6ebe4(0x219)][_0x6ebe4(0x374)]=function(){const _0x242f24=_0x6ebe4;Window_HorzCommand[_0x242f24(0x219)][_0x242f24(0x374)][_0x242f24(0x180)](this),this[_0x242f24(0x154)]();},Window_BestiaryDataCategories[_0x6ebe4(0x219)][_0x6ebe4(0x32f)]=function(){return![];},Window_BestiaryDataCategories['prototype'][_0x6ebe4(0x25e)]=function(_0x27fc40,_0x50f8be){const _0x4be374=_0x6ebe4;this[_0x4be374(0x28c)]=this[_0x4be374(0x28c)]||{},this['_symbolWindows'][_0x50f8be]=_0x27fc40,this['callUpdateHelp']();},Window_BestiaryDataCategories[_0x6ebe4(0x219)]['callUpdateSymbolWindow']=function(){const _0x271871=_0x6ebe4;this[_0x271871(0x28c)]=this[_0x271871(0x28c)]||{};for(const _0x392f47 in this[_0x271871(0x28c)]){if(_0x392f47===this[_0x271871(0x389)]()){if(_0x271871(0x1ad)==='hXtYr'){const _0x34ff07=_0x244fc7[_0x271871(0xef)](_0x267ce2);this[_0x271871(0x2b8)](_0x1f3994,_0x34ff07,_0x1cf26a);}else this[_0x271871(0x28c)][_0x392f47][_0x271871(0x3bc)](),this[_0x271871(0x28c)][_0x392f47][_0x271871(0x173)](),this[_0x271871(0x28c)][_0x392f47][_0x271871(0x3db)]();}else this['_symbolWindows'][_0x392f47][_0x271871(0x374)]();}},Window_BestiaryDataCategories[_0x6ebe4(0x219)][_0x6ebe4(0x154)]=function(){const _0x326cdc=_0x6ebe4;this['_symbolWindows']=this[_0x326cdc(0x28c)]||{};for(const _0x2c2d03 in this['_symbolWindows']){this[_0x326cdc(0x28c)][_0x2c2d03][_0x326cdc(0x374)]();}},Window_BestiaryDataCategories['prototype'][_0x6ebe4(0x280)]=function(){const _0x4ab5a0=_0x6ebe4,_0x452782=this[_0x4ab5a0(0x389)]();if(this['_symbolWindows'][_0x452782]){if('ElWtv'!==_0x4ab5a0(0x3c8)){if(!_0x16f327[_0x4ab5a0(0x2d4)])return;if(!_0x106202[_0x4ab5a0(0x37b)][_0x4ab5a0(0x37d)][_0x4ab5a0(0x26f)][_0x4ab5a0(0x127)])return;const _0x25eabf=_0x585352[_0x4ab5a0(0x168)]['enemy'](),_0x2f66f3=_0x25eabf[_0x4ab5a0(0x3d8)](),_0x56462d=_0x274bbd[_0x4ab5a0(0x20d)],_0x34c79f=_0x33d833[_0x4ab5a0(0x307)];let _0x437018=_0x34c79f>0x0?'\x5cI[%1]%2'[_0x4ab5a0(0x22e)](_0x34c79f,_0x56462d):_0x56462d;this[_0x4ab5a0(0x202)](_0x437018,_0x4ab5a0(0x26b),!![],_0x2f66f3);}else this[_0x4ab5a0(0x28c)][_0x452782][_0x4ab5a0(0xe6)]?this[_0x4ab5a0(0x28c)][_0x452782][_0x4ab5a0(0xe6)]():this[_0x4ab5a0(0x28c)][_0x452782][_0x4ab5a0(0x1f9)]();}else _0x4ab5a0(0xc6)===_0x4ab5a0(0xaa)?(this[_0x4ab5a0(0x151)]['openCloseCurrentCategory'](),this[_0x4ab5a0(0x151)][_0x4ab5a0(0x1f9)]()):this[_0x4ab5a0(0x1f9)]();},Window_BestiaryDataCategories['prototype']['deactivateSymbolWindow']=function(){const _0x3b650a=_0x6ebe4,_0x4dc8c3=this[_0x3b650a(0x389)]();this[_0x3b650a(0x28c)][_0x4dc8c3]?(this[_0x3b650a(0x28c)][_0x4dc8c3][_0x3b650a(0x3db)](),this[_0x3b650a(0x28c)][_0x4dc8c3][_0x3b650a(0x183)](0x0),this[_0x3b650a(0x28c)][_0x4dc8c3][_0x3b650a(0x235)](),this[_0x3b650a(0x28c)][_0x4dc8c3][_0x3b650a(0x236)](0x0,0x0)):this[_0x3b650a(0x1f9)]();},Window_BestiaryDataCategories[_0x6ebe4(0x219)]['createCommandNameWindow']=function(_0x5d414f){const _0x2b74d8=_0x6ebe4,_0x30b16f=new Rectangle(0x0,0x0,_0x5d414f[_0x2b74d8(0x1a3)],_0x5d414f['height']);this[_0x2b74d8(0x21a)]=new Window_Base(_0x30b16f),this[_0x2b74d8(0x21a)][_0x2b74d8(0x195)]=0x0,this['addChild'](this[_0x2b74d8(0x21a)]),this[_0x2b74d8(0x108)]();},Window_BestiaryDataCategories[_0x6ebe4(0x219)][_0x6ebe4(0x108)]=function(){const _0x283c2e=_0x6ebe4,_0x2b0856=this[_0x283c2e(0x21a)];_0x2b0856[_0x283c2e(0x39b)]['clear']();const _0x35855f=this[_0x283c2e(0xde)](this[_0x283c2e(0x231)]());if(_0x35855f===_0x283c2e(0x1ae)){const _0x325a08=this['itemLineRect'](this['index']());let _0x25dcd1=this[_0x283c2e(0x1c1)](this[_0x283c2e(0x231)]());_0x25dcd1=_0x25dcd1['replace'](/\\I\[(\d+)\]/gi,''),_0x2b0856['resetFontSettings'](),this['commandNameWindowDrawBackground'](_0x25dcd1,_0x325a08),this[_0x283c2e(0x3d2)](_0x25dcd1,_0x325a08),this[_0x283c2e(0x272)](_0x25dcd1,_0x325a08);}},Window_BestiaryDataCategories[_0x6ebe4(0x219)][_0x6ebe4(0x149)]=function(_0xca3817,_0x132fd1){},Window_BestiaryDataCategories[_0x6ebe4(0x219)][_0x6ebe4(0x3d2)]=function(_0x343db9,_0x3eaf35){const _0x16a942=_0x6ebe4,_0x2b06fa=this[_0x16a942(0x21a)];_0x2b06fa[_0x16a942(0x212)](_0x343db9,0x0,_0x3eaf35['y'],_0x2b06fa[_0x16a942(0x172)],_0x16a942(0x1b9));},Window_BestiaryDataCategories[_0x6ebe4(0x219)][_0x6ebe4(0x272)]=function(_0x11d647,_0x40a72e){const _0xe84bd4=_0x6ebe4,_0x265d3e=this[_0xe84bd4(0x21a)],_0x2e02a9=$gameSystem['windowPadding'](),_0x358f6c=_0x40a72e['x']+Math['floor'](_0x40a72e[_0xe84bd4(0x1a3)]/0x2)+_0x2e02a9;_0x265d3e['x']=_0x265d3e[_0xe84bd4(0x1a3)]/-0x2+_0x358f6c,_0x265d3e['y']=Math['floor'](_0x40a72e[_0xe84bd4(0x250)]/0x2);},Window_BestiaryDataCategories['prototype'][_0x6ebe4(0x27e)]=function(){const _0x43ee29=_0x6ebe4;for(const _0x5548e4 of Window_BestiaryDataCategories[_0x43ee29(0xf7)][_0x43ee29(0xe2)]){this[_0x43ee29(0x98)](_0x5548e4);}},Window_BestiaryDataCategories[_0x6ebe4(0x219)][_0x6ebe4(0x98)]=function(_0x4c0265){const _0x170071=_0x6ebe4,_0x164eae=Window_BestiaryDataCategories[_0x170071(0xf7)]['commands'][_0x4c0265];if(!this[_0x170071(0x277)](_0x164eae))return;const _0x45ae95=_0x4c0265,_0x24d276=Number(_0x164eae[_0x170071(0x1ae)]);let _0x5047f9=_0x164eae[_0x170071(0x3a5)];if(_0x24d276>0x0&&this[_0x170071(0x32a)]()!==_0x170071(0x3a5)){if('JLCMh'!==_0x170071(0x9f))_0x5047f9='\x5cI[%1]%2'['format'](_0x24d276,_0x5047f9);else{this[_0x170071(0x1fd)]();if(this[_0x170071(0x9c)]<=0x0)return;this[_0x170071(0x321)](),this[_0x170071(0x29b)]();}}const _0x5ae080=this[_0x170071(0xa2)](_0x164eae);this['addCommand'](_0x5047f9,_0x45ae95,_0x5ae080);},Window_BestiaryDataCategories['prototype'][_0x6ebe4(0x277)]=function(_0x11b71c){const _0x3f4a8b=_0x6ebe4;if(_0x11b71c===Window_BestiaryDataCategories[_0x3f4a8b(0xf7)][_0x3f4a8b(0x24d)][_0x3f4a8b(0x2c8)]){if('kLzXa'!=='YpzTZ'){if(!Imported[_0x3f4a8b(0x335)])return![];}else this[_0x3f4a8b(0x163)]()[_0x3f4a8b(0x245)](0x1);}return _0x11b71c[_0x3f4a8b(0x3bc)];},Window_BestiaryDataCategories[_0x6ebe4(0x219)][_0x6ebe4(0xa2)]=function(_0x5c02cd){return!![];},Window_BestiaryDataCategories['prototype']['itemTextAlign']=function(){return'center';},Window_BestiaryDataCategories[_0x6ebe4(0x219)][_0x6ebe4(0xc7)]=function(_0x117b42){const _0x30842c=_0x6ebe4,_0x51e39f=this[_0x30842c(0xde)](_0x117b42);if(_0x51e39f===_0x30842c(0x39a))this[_0x30842c(0x298)](_0x117b42);else{if(_0x51e39f===_0x30842c(0x1ae)){if(_0x30842c(0x129)==='zrkDy')this[_0x30842c(0x116)](_0x117b42);else{const _0x35e6fd=_0x568a32[_0x30842c(0x1b2)][_0x30842c(0x2e6)],_0x486510=this[_0x30842c(0xac)]()*0x10,_0x410663=this[_0x30842c(0x172)]-_0x486510*0x2,_0x6d3c6=_0x35e6fd[_0x30842c(0x13a)],_0x3c5b58=_0x10d380[_0x30842c(0x366)](this['_enemyID']),_0xbee33d=_0x6d3c6[_0x30842c(0x22e)](_0x3c5b58);this[_0x30842c(0x212)](_0xbee33d,_0x486510,0x0,_0x410663,_0x30842c(0x379));const _0x14da5e=_0x35e6fd[_0x30842c(0xb3)],_0x7e11b5=_0x3d2317[_0x30842c(0x223)](this[_0x30842c(0x9c)]),_0x2bc1b5=_0x14da5e['format'](_0x7e11b5);this[_0x30842c(0x212)](_0x2bc1b5,_0x486510,0x0,_0x410663,_0x30842c(0x338));}}else Window_Command['prototype']['drawItem'][_0x30842c(0x180)](this,_0x117b42);}},Window_BestiaryDataCategories[_0x6ebe4(0x219)][_0x6ebe4(0x32a)]=function(){const _0x212de4=_0x6ebe4;return Window_BestiaryDataCategories[_0x212de4(0xf7)]['commandStyle'];},Window_BestiaryDataCategories['prototype'][_0x6ebe4(0xde)]=function(_0x552d11){const _0x184b3d=_0x6ebe4;if(_0x552d11<0x0)return'text';const _0x197a65=this[_0x184b3d(0x32a)]();if(_0x197a65!==_0x184b3d(0x316))return _0x197a65;else{if(this[_0x184b3d(0x3d7)]()>0x0){if(_0x184b3d(0xd0)!==_0x184b3d(0xd0)){const _0x43371f=_0x50960b(_0x1c0177['$1']);_0x43371f!==_0x1872c3[_0x2675f3]['version']&&(_0x287059(_0x184b3d(0x330)[_0x184b3d(0x22e)](_0x58444e,_0x43371f)),_0x151655[_0x184b3d(0x30a)]());}else{const _0x4e48c3=this[_0x184b3d(0x1c1)](_0x552d11);if(_0x4e48c3['match'](/\\I\[(\d+)\]/i)){if(_0x184b3d(0x37c)!==_0x184b3d(0x37c)){const _0x275f60=_0x2dae93(_0x597d69['$1'])[_0x184b3d(0x317)](/[\r\n]+/);for(const _0x12f78b of _0x275f60){if(_0x12f78b[_0x184b3d(0x390)](/(.*):[ ](.*)/i)){const _0x3880da=_0x19d75b(_0x3f5f76['$1'])[_0x184b3d(0x97)]()['trim'](),_0x3fe1bb=_0x4ad64e(_0x4dae82['$2'])['split'](','),_0x244965=_0x59940b[_0x3880da];_0x244965&&_0x244965===_0x13a70f&&(_0x3bba87=_0x3efbdf[_0x184b3d(0xf3)](_0x3fe1bb));}}}else{const _0x25ab90=this[_0x184b3d(0x233)](_0x552d11),_0x179fa2=this[_0x184b3d(0x2e2)](_0x4e48c3)[_0x184b3d(0x1a3)];if(_0x179fa2<=_0x25ab90[_0x184b3d(0x1a3)])return _0x184b3d(0x3b8)!==_0x184b3d(0x3b8)?![]:_0x184b3d(0x39a);else{if(_0x184b3d(0x1a9)!==_0x184b3d(0x39e))return'icon';else _0x436807(this[_0x184b3d(0x31f)][_0x184b3d(0xdc)](this,_0x30eec2),_0x3e98b0);}}}}}}return _0x184b3d(0x3a5);},Window_BestiaryDataCategories['prototype'][_0x6ebe4(0x298)]=function(_0x27bf49){const _0x2a2cef=_0x6ebe4,_0x1ee156=this[_0x2a2cef(0x233)](_0x27bf49),_0x3335ac=this['commandName'](_0x27bf49),_0x3a80fd=this['textSizeEx'](_0x3335ac)['width'];this[_0x2a2cef(0x17e)](this[_0x2a2cef(0x19a)](_0x27bf49));const _0x18b6d1=this[_0x2a2cef(0x1aa)]();if(_0x18b6d1===_0x2a2cef(0x338))this[_0x2a2cef(0x303)](_0x3335ac,_0x1ee156['x']+_0x1ee156['width']-_0x3a80fd,_0x1ee156['y'],_0x3a80fd);else{if(_0x18b6d1===_0x2a2cef(0x1b9)){const _0x1cba17=_0x1ee156['x']+Math[_0x2a2cef(0x3c9)]((_0x1ee156[_0x2a2cef(0x1a3)]-_0x3a80fd)/0x2);this[_0x2a2cef(0x303)](_0x3335ac,_0x1cba17,_0x1ee156['y'],_0x3a80fd);}else{if(_0x2a2cef(0x26a)!==_0x2a2cef(0x26a)){if(!_0x454588)return'';const _0x19927c=_0x5b619f[_0x2a2cef(0x163)]()['id'];this[_0x2a2cef(0x152)]=this[_0x2a2cef(0x152)]||{};if(this[_0x2a2cef(0x152)][_0x19927c]!==_0x576036)return this[_0x2a2cef(0x152)][_0x19927c];this[_0x2a2cef(0x152)][_0x19927c]=_0x46de58[_0x2a2cef(0x1b2)]['loreWindow']['defaultLoreFmt']['format'](_0x4a3148[_0x2a2cef(0x25b)]());const _0x311d5f=_0x43e32d['Bestiary'][_0x2a2cef(0x1c7)],_0x13d15d=_0xcdb046['enemy']()[_0x2a2cef(0x243)]||'';return _0x13d15d[_0x2a2cef(0x390)](_0x311d5f[_0x2a2cef(0x1d4)])&&(this[_0x2a2cef(0x152)][_0x19927c]=_0x5a46a2(_0x18d62c['$1'])[_0x2a2cef(0x2fc)]()),this['_getBestiaryLore'][_0x19927c];}else this[_0x2a2cef(0x303)](_0x3335ac,_0x1ee156['x'],_0x1ee156['y'],_0x3a80fd);}}},Window_BestiaryDataCategories[_0x6ebe4(0x219)][_0x6ebe4(0x116)]=function(_0x28d1c2){const _0x27979e=_0x6ebe4;this['commandName'](_0x28d1c2)[_0x27979e(0x390)](/\\I\[(\d+)\]/i);const _0x2759b1=Number(RegExp['$1'])||0x0,_0x190c09=this[_0x27979e(0x233)](_0x28d1c2),_0x419774=_0x190c09['x']+Math['floor']((_0x190c09['width']-ImageManager[_0x27979e(0x15e)])/0x2),_0x2aca0e=_0x190c09['y']+(_0x190c09[_0x27979e(0x250)]-ImageManager[_0x27979e(0x130)])/0x2;this[_0x27979e(0x2a4)](_0x2759b1,_0x419774,_0x2aca0e);};function Window_BestiaryBasic(){const _0x10ec3f=_0x6ebe4;this[_0x10ec3f(0x384)](...arguments);}Window_BestiaryBasic['prototype']=Object[_0x6ebe4(0x290)](Window_Command[_0x6ebe4(0x219)]),Window_BestiaryBasic[_0x6ebe4(0x219)][_0x6ebe4(0x34e)]=Window_BestiaryBasic,Window_BestiaryBasic[_0x6ebe4(0xf7)]={'bgType':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0x292)]??0x0,'showLevelChange':VisuMZ['Bestiary']['Settings'][_0x6ebe4(0x32d)][_0x6ebe4(0x3a4)]??!![]},Window_BestiaryBasic[_0x6ebe4(0x219)][_0x6ebe4(0x384)]=function(_0x3d179e){const _0x30d0b2=_0x6ebe4;Window_Command['prototype']['initialize'][_0x30d0b2(0x180)](this,_0x3d179e),this[_0x30d0b2(0x3db)](),this[_0x30d0b2(0x235)](),this['hide']();},Window_BestiaryBasic[_0x6ebe4(0x219)][_0x6ebe4(0xe6)]=function(){const _0x4c5ea4=_0x6ebe4;this[_0x4c5ea4(0x1f9)](),this[_0x4c5ea4(0x183)](0x0),this[_0x4c5ea4(0x236)](0x0,0x0);},Window_BestiaryBasic[_0x6ebe4(0x219)][_0x6ebe4(0x2ae)]=function(){const _0x16b535=_0x6ebe4;if(this[_0x16b535(0x389)]()!=='param')Window_Command['prototype'][_0x16b535(0x2ae)][_0x16b535(0x180)](this);},Window_BestiaryBasic[_0x6ebe4(0x219)][_0x6ebe4(0x27e)]=function(){const _0x5af12c=_0x6ebe4;for(const _0x4516f4 of this[_0x5af12c(0x30f)]()){_0x5af12c(0x2ac)===_0x5af12c(0x2ac)?this[_0x5af12c(0x202)](_0x4516f4,'param',!![],_0x4516f4):this[_0x5af12c(0x13e)][_0x5af12c(0xb4)](_0x5341d8[_0x5af12c(0x1b2)][_0x5af12c(0x306)][_0x5af12c(0x287)]);}this[_0x5af12c(0x18d)]()&&this[_0x5af12c(0x191)]();},Window_BestiaryBasic['prototype'][_0x6ebe4(0x30f)]=function(){const _0x4952ca=_0x6ebe4;return Imported[_0x4952ca(0x2d7)]?VisuMZ[_0x4952ca(0x349)][_0x4952ca(0x37d)][_0x4952ca(0x393)][_0x4952ca(0x348)]:[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];},Window_BestiaryBasic[_0x6ebe4(0x219)][_0x6ebe4(0x18d)]=function(){const _0x311223=_0x6ebe4;return Imported[_0x311223(0x1cf)]&&Window_BestiaryBasic[_0x311223(0xf7)][_0x311223(0xf0)];},Window_BestiaryBasic['prototype'][_0x6ebe4(0x191)]=function(){const _0x107f6c=_0x6ebe4,_0xa09711=TextManager['Bestiary'][_0x107f6c(0x275)],_0x52d701=SceneManager['_scene'][_0x107f6c(0x163)]();{const _0x48ee4a=_0xa09711[_0x107f6c(0x3ae)],_0x39432f=_0x48ee4a['format'](TextManager[_0x107f6c(0x148)]),_0x38e6df=_0x52d701[_0x107f6c(0x148)]<_0x52d701[_0x107f6c(0x28b)]();this[_0x107f6c(0x202)](_0x39432f,_0x107f6c(0x351),_0x38e6df);}{const _0x4b2183=_0xa09711['levelUp'],_0x3a3e63=_0x4b2183[_0x107f6c(0x22e)](TextManager[_0x107f6c(0x148)]),_0x2aab7b=_0x52d701['level']<_0x52d701[_0x107f6c(0x28b)]();this[_0x107f6c(0x202)](_0x3a3e63,_0x107f6c(0x3af),_0x2aab7b);}{if(_0x107f6c(0x341)===_0x107f6c(0x103)){const _0x4d2200=this['itemLineRect'](_0x49d6ad),_0x29bdfe=this[_0x107f6c(0x2e2)](_0xd63d)[_0x107f6c(0x1a3)];return _0x29bdfe<=_0x4d2200[_0x107f6c(0x1a3)]?_0x107f6c(0x39a):_0x107f6c(0x1ae);}else{const _0x395292=_0xa09711['levelDown'],_0x50b37f=_0x395292[_0x107f6c(0x22e)](TextManager[_0x107f6c(0x148)]),_0x3f1f59=_0x52d701[_0x107f6c(0x148)]>_0x52d701[_0x107f6c(0x15b)]();this[_0x107f6c(0x202)](_0x50b37f,'levelDown',_0x3f1f59);}}{const _0x4d55e3=_0xa09711[_0x107f6c(0x328)],_0x3f8cc1=_0x4d55e3[_0x107f6c(0x22e)](TextManager[_0x107f6c(0x148)]),_0x4fbf78=_0x52d701[_0x107f6c(0x148)]>_0x52d701[_0x107f6c(0x15b)]();this[_0x107f6c(0x202)](_0x3f8cc1,_0x107f6c(0x251),_0x4fbf78);}},Window_BestiaryBasic['prototype'][_0x6ebe4(0xc7)]=function(_0x5e834e){const _0x2ab7c6=_0x6ebe4,_0x21653a=this[_0x2ab7c6(0xd2)](_0x5e834e);_0x21653a===_0x2ab7c6(0x1f8)?this['drawParamItem'](_0x5e834e):_0x2ab7c6(0x1b1)==='xoVxe'?(_0x26976d[_0x2ab7c6(0x1b2)][_0x2ab7c6(0x2ad)][_0x2ab7c6(0x180)](this),this[_0x2ab7c6(0x25c)]()):this[_0x2ab7c6(0x2a7)](_0x5e834e);},Window_BestiaryBasic['prototype'][_0x6ebe4(0x395)]=function(){const _0x41dc13=_0x6ebe4;return Imported[_0x41dc13(0x2d7)]&&VisuMZ[_0x41dc13(0x349)][_0x41dc13(0x37d)][_0x41dc13(0x393)][_0x41dc13(0x2be)];},Window_BestiaryBasic[_0x6ebe4(0x219)][_0x6ebe4(0x311)]=function(_0x26649a){const _0x3a9e27=_0x6ebe4,_0x44e59f=this[_0x3a9e27(0x233)](_0x26649a),_0x4f0822=String(this['commandName'](_0x26649a))[_0x3a9e27(0x97)]()[_0x3a9e27(0x2fc)](),_0xfea177=SceneManager[_0x3a9e27(0x168)][_0x3a9e27(0x163)]();if(!_0xfea177)return;this[_0x3a9e27(0x2d5)](),this['changePaintOpacity'](!![]),this['changeTextColor'](ColorManager[_0x3a9e27(0x9a)]());if(Imported['VisuMZ_0_CoreEngine']){if(this[_0x3a9e27(0x395)]()){const _0xb7dda1=VisuMZ['GetParamIcon'](_0x4f0822);this[_0x3a9e27(0x2a4)](_0xb7dda1,_0x44e59f['x']+0x2,_0x44e59f['y']+0x2),_0x44e59f['x']+=ImageManager[_0x3a9e27(0x15e)]+0x4,_0x44e59f[_0x3a9e27(0x1a3)]-=ImageManager['iconWidth']+0x4;}const _0x212638=TextManager['param'](_0x4f0822);this[_0x3a9e27(0x212)](_0x212638,_0x44e59f['x'],_0x44e59f['y'],_0x44e59f['width'],'left');}else{const _0xe1ebbf=TextManager['param'](Number(_0x4f0822));this[_0x3a9e27(0x212)](_0xe1ebbf,_0x44e59f['x'],_0x44e59f['y'],_0x44e59f[_0x3a9e27(0x1a3)],_0x3a9e27(0x379));}this[_0x3a9e27(0x2d5)](),this[_0x3a9e27(0x3d9)](ColorManager[_0x3a9e27(0x9a)]());if(Imported[_0x3a9e27(0x2d7)]){if(_0x3a9e27(0x2f4)===_0x3a9e27(0xfb)){if(!_0x3de18f[_0x3a9e27(0x13f)])return;this[_0x3a9e27(0x248)]=null,this[_0x3a9e27(0x2f6)]=new _0x1a3c01(),this[_0x3a9e27(0x1ea)](this['_dragonbonesSpriteContainer']);}else{const _0x4b58cd=_0xfea177[_0x3a9e27(0x2bc)](_0x4f0822,!![]);this[_0x3a9e27(0x212)](_0x4b58cd,_0x44e59f['x'],_0x44e59f['y'],_0x44e59f['width'],'right');}}else{const _0x2551a8=_0xfea177[_0x3a9e27(0x1f8)](Number(_0x4f0822));this[_0x3a9e27(0x212)](_0x2551a8,_0x44e59f['x'],_0x44e59f['y'],_0x44e59f[_0x3a9e27(0x1a3)],_0x3a9e27(0x338));}},Window_BestiaryBasic['prototype']['itemTextAlign']=function(){const _0x4b76fe=_0x6ebe4;return _0x4b76fe(0x379);},Window_BestiaryBasic[_0x6ebe4(0x219)][_0x6ebe4(0x2a7)]=function(_0x17b15b){const _0x7f0cff=_0x6ebe4,_0x1edac7=this['itemLineRect'](_0x17b15b),_0x503052=this[_0x7f0cff(0x1c1)](_0x17b15b),_0xa1c765=this[_0x7f0cff(0x2e2)](_0x503052)[_0x7f0cff(0x1a3)];this[_0x7f0cff(0x17e)](this[_0x7f0cff(0x19a)](_0x17b15b));const _0x15e0ed=this[_0x7f0cff(0x1aa)]();if(_0x15e0ed===_0x7f0cff(0x338)){if(_0x7f0cff(0xda)===_0x7f0cff(0x255)){if(_0x50a1c9===_0x3315e3[_0x7f0cff(0xf7)][_0x7f0cff(0x24d)]['traits']){if(!_0x251ea6[_0x7f0cff(0x335)])return![];}return _0x3627a6[_0x7f0cff(0x3bc)];}else this[_0x7f0cff(0x303)](_0x503052,_0x1edac7['x']+_0x1edac7[_0x7f0cff(0x1a3)]-_0xa1c765,_0x1edac7['y'],_0xa1c765);}else{if(_0x15e0ed==='center'){const _0x3cda8a=_0x1edac7['x']+Math[_0x7f0cff(0x3c9)]((_0x1edac7['width']-_0xa1c765)/0x2);this[_0x7f0cff(0x303)](_0x503052,_0x3cda8a,_0x1edac7['y'],_0xa1c765);}else this[_0x7f0cff(0x303)](_0x503052,_0x1edac7['x'],_0x1edac7['y'],_0xa1c765);}};function Window_BestiaryElements(){this['initialize'](...arguments);}Window_BestiaryElements[_0x6ebe4(0x219)]=Object[_0x6ebe4(0x290)](Window_Command[_0x6ebe4(0x219)]),Window_BestiaryElements['prototype'][_0x6ebe4(0x34e)]=Window_BestiaryElements,Window_BestiaryElements['SETTINGS']={'bgType':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0x147)]??0x0},Window_BestiaryElements[_0x6ebe4(0x219)][_0x6ebe4(0x384)]=function(_0x148072){const _0x45b042=_0x6ebe4;Window_Command['prototype'][_0x45b042(0x384)][_0x45b042(0x180)](this,_0x148072),this[_0x45b042(0x3db)](),this[_0x45b042(0x235)](),this[_0x45b042(0x374)]();},Window_BestiaryElements[_0x6ebe4(0x219)][_0x6ebe4(0xe6)]=function(){const _0x1a452d=_0x6ebe4;this[_0x1a452d(0x1f9)](),this['forceSelect'](0x0),this['scrollTo'](0x0,0x0);},Window_BestiaryElements[_0x6ebe4(0x219)][_0x6ebe4(0x2ae)]=function(){},Window_BestiaryElements['prototype'][_0x6ebe4(0x27e)]=function(){const _0x25ec19=_0x6ebe4;for(let _0x37e9cf=0x1;_0x37e9cf<$dataSystem['elements'][_0x25ec19(0x115)];_0x37e9cf++){if(_0x25ec19(0x16f)===_0x25ec19(0x16f)){if(this[_0x25ec19(0x194)](_0x37e9cf))continue;const _0x25b3d8=$dataSystem['elements'][_0x37e9cf];this[_0x25ec19(0x202)](_0x25b3d8,_0x25ec19(0x15f),!![],_0x37e9cf);}else{if(_0x1310a0<=0x0)return!![];if(_0xd67d47[_0x25ec19(0x335)]){if(_0x2fcb29[_0x25ec19(0x293)][_0x25ec19(0x37d)][_0x25ec19(0x273)][_0x25ec19(0x313)][_0x25ec19(0x2bb)](_0x48b564))return!![];}return![];}}},Window_BestiaryElements[_0x6ebe4(0x219)][_0x6ebe4(0x194)]=function(_0x4fd54d){const _0x45055d=_0x6ebe4;if(_0x4fd54d<=0x0)return!![];if(Imported[_0x45055d(0x335)]){if('nrRbC'!==_0x45055d(0x1a7)){if(this[_0x45055d(0x325)]===_0x3b48e1)this[_0x45055d(0x14e)]();this[_0x45055d(0x325)][_0x3f4eca]=!![];}else{if(VisuMZ[_0x45055d(0x293)]['Settings'][_0x45055d(0x273)][_0x45055d(0x313)][_0x45055d(0x2bb)](_0x4fd54d)){if(_0x45055d(0x2e8)!==_0x45055d(0x2e8)){if(!_0x3e1b8f['SETTINGS']['scaleHelpWindow'])return 0x1;return this[_0x45055d(0x1e1)]()[_0x45055d(0x1a3)]/_0x5d15aa[_0x45055d(0x220)];}else return!![];}}}return![];},Window_BestiaryElements[_0x6ebe4(0x219)][_0x6ebe4(0xc7)]=function(_0x92c0af){const _0x541267=_0x6ebe4,_0x1213ab=this[_0x541267(0x233)](_0x92c0af),_0x383ac2=this[_0x541267(0x1c1)](_0x92c0af),_0x2606a5=this['_list'][_0x92c0af][_0x541267(0xf8)];this[_0x541267(0x2d5)](),this['changePaintOpacity'](this[_0x541267(0x19a)](_0x92c0af)),this[_0x541267(0x303)](_0x383ac2,_0x1213ab['x'],_0x1213ab['y'],_0x1213ab[_0x541267(0x1a3)]);const _0x33283c=SceneManager[_0x541267(0x168)][_0x541267(0x163)](),_0x467c01=_0x33283c[_0x541267(0x24a)](_0x2606a5),_0x105c77=TextManager['Bestiary'][_0x541267(0x1f3)];let _0x47c449=_0x105c77[_0x541267(0xb8)];if(Imported[_0x541267(0x335)]&&_0x33283c[_0x541267(0x246)]()[_0x541267(0x2bb)](_0x2606a5))_0x47c449=_0x105c77[_0x541267(0x19d)];else{if(_0x467c01>1.05){if(_0x541267(0x2c5)===_0x541267(0xf9)){const _0x130e32=_0x2a5104['x']+_0x3931f5[_0x541267(0x3c9)]((_0x443c0f[_0x541267(0x1a3)]-_0x53c22f)/0x2);this[_0x541267(0x303)](_0xc90af8,_0x130e32,_0x265b16['y'],_0x54b906);}else _0x47c449=_0x105c77['weak'];}else{if(_0x467c01<=0x0)_0x47c449=_0x105c77[_0x541267(0x24e)];else _0x467c01<0.95&&(_0x47c449=_0x105c77['resist']);}}const _0x2768ac=_0x1213ab['x']+_0x1213ab[_0x541267(0x1a3)]-this['textSizeEx'](_0x47c449)[_0x541267(0x1a3)];this[_0x541267(0x303)](_0x47c449,_0x2768ac,_0x1213ab['y'],_0x1213ab['width']);};function Window_BestiarySkills(){const _0x40fb0b=_0x6ebe4;this[_0x40fb0b(0x384)](...arguments);}function _0xf398(_0x1eb616,_0x1fc85f){const _0x435b47=_0x435b();return _0xf398=function(_0xf39896,_0x4776a1){_0xf39896=_0xf39896-0x95;let _0x190551=_0x435b47[_0xf39896];return _0x190551;},_0xf398(_0x1eb616,_0x1fc85f);}Window_BestiarySkills[_0x6ebe4(0x219)]=Object[_0x6ebe4(0x290)](Window_Command[_0x6ebe4(0x219)]),Window_BestiarySkills[_0x6ebe4(0x219)][_0x6ebe4(0x34e)]=Window_BestiarySkills,Window_BestiarySkills['SETTINGS']={'bgType':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)]['SkillsWindow_BgType']??0x0},Window_BestiarySkills[_0x6ebe4(0x219)][_0x6ebe4(0x384)]=function(_0x598fa8){const _0x33741c=_0x6ebe4;Window_Command[_0x33741c(0x219)][_0x33741c(0x384)][_0x33741c(0x180)](this,_0x598fa8),this[_0x33741c(0x3db)](),this[_0x33741c(0x235)](),this[_0x33741c(0x374)]();},Window_BestiarySkills[_0x6ebe4(0x219)][_0x6ebe4(0xe6)]=function(){const _0x16ac36=_0x6ebe4;this['activate'](),this['forceSelect'](0x0),this['scrollTo'](0x0,0x0),this['_helpWindow']&&this['_helpWindow'][_0x16ac36(0x3bc)]();},Window_BestiarySkills[_0x6ebe4(0x219)]['playOkSound']=function(){},Window_BestiarySkills[_0x6ebe4(0x219)][_0x6ebe4(0x27e)]=function(){const _0x5e8303=_0x6ebe4,_0x27a12e=SceneManager['_scene'][_0x5e8303(0x163)](),_0x3b0f6e=_0x27a12e['skills']()[_0x5e8303(0x1dd)]((_0x1ef252,_0x20d7c5)=>_0x1ef252['id']-_0x20d7c5['id'])[_0x5e8303(0x276)]((_0x783528,_0x23027c,_0x3e6ff4)=>_0x3e6ff4[_0x5e8303(0x2e9)](_0x783528)===_0x23027c);for(const _0x5e85b2 of _0x3b0f6e){if(this['isSkillHidden'](_0x5e85b2))continue;this['addCommand'](_0x5e85b2['id'],_0x5e8303(0x2cb),!![],_0x5e85b2['id']);}},Window_BestiarySkills[_0x6ebe4(0x219)][_0x6ebe4(0x38a)]=function(_0x521929){const _0x486cf4=_0x6ebe4;if(!_0x521929)return!![];const _0x22c028=VisuMZ[_0x486cf4(0x1b2)][_0x486cf4(0x1c7)],_0x3b9f81=_0x521929[_0x486cf4(0x243)]||'';if(_0x3b9f81[_0x486cf4(0x390)](_0x22c028[_0x486cf4(0x26d)]))return!![];return![];},Window_BestiarySkills[_0x6ebe4(0x219)][_0x6ebe4(0xc7)]=function(_0x55f4e4){const _0x10eb48=_0x6ebe4,_0x5601c3=this[_0x10eb48(0x233)](_0x55f4e4),_0x36c28a=this[_0x10eb48(0x1c1)](_0x55f4e4),_0x4987c7=this[_0x10eb48(0x2ce)](_0x36c28a);this[_0x10eb48(0x2d5)](),this['changePaintOpacity'](this[_0x10eb48(0x19a)](_0x55f4e4)),this[_0x10eb48(0x303)](_0x4987c7,_0x5601c3['x'],_0x5601c3['y'],_0x5601c3[_0x10eb48(0x1a3)]);},Window_BestiarySkills[_0x6ebe4(0x219)][_0x6ebe4(0x2ce)]=function(_0x58952a){const _0x5f5b23=_0x6ebe4,_0x391041=$dataSkills[_0x58952a];let _0xc3d27=_0x391041['name'],_0x1fde7d=_0x391041[_0x5f5b23(0x189)];if(Imported[_0x5f5b23(0x274)]){const _0x1bdf15=_0x391041[_0x5f5b23(0x243)]||'';_0x1bdf15[_0x5f5b23(0x390)](/<DISPLAY ICON: (\d+)>/i)&&(_0x1fde7d=Number(RegExp['$1'])),_0x1bdf15[_0x5f5b23(0x390)](/<DISPLAY TEXT: (.*)>/i)&&(_0xc3d27=String(RegExp['$1']));}return _0x5f5b23(0x2ab)[_0x5f5b23(0x22e)](_0xc3d27,_0x1fde7d);},Window_BestiarySkills[_0x6ebe4(0x219)][_0x6ebe4(0xfc)]=function(){const _0x347b28=_0x6ebe4,_0x1b649b=this[_0x347b28(0x204)]()?$dataSkills[this[_0x347b28(0x204)]()]:null;this[_0x347b28(0x13e)][_0x347b28(0x282)](_0x1b649b);};function Window_BestiaryRewards(){const _0x568056=_0x6ebe4;this[_0x568056(0x384)](...arguments);}Window_BestiaryRewards[_0x6ebe4(0x219)]=Object[_0x6ebe4(0x290)](Window_Command[_0x6ebe4(0x219)]),Window_BestiaryRewards[_0x6ebe4(0x219)][_0x6ebe4(0x34e)]=Window_BestiaryRewards,Window_BestiaryRewards['SETTINGS']={'bgType':VisuMZ['Bestiary'][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0xe3)]??0x0,'rewardsOrder':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0x23f)]??[_0x6ebe4(0x20a),'ap','cp','jp','sp',_0x6ebe4(0x134),_0x6ebe4(0x34f)],'expIcon':VisuMZ[_0x6ebe4(0x1b2)]['Settings'][_0x6ebe4(0x32d)]['EXP_Icon']??0x57,'goldIcon':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0x2da)]??0x13a},Window_BestiaryRewards['prototype'][_0x6ebe4(0x384)]=function(_0x6845d1){const _0x43a80c=_0x6ebe4;Window_Command[_0x43a80c(0x219)][_0x43a80c(0x384)][_0x43a80c(0x180)](this,_0x6845d1),this[_0x43a80c(0x3db)](),this['deselect'](),this['hide']();},Window_BestiaryRewards[_0x6ebe4(0x219)]['becomeActive']=function(){const _0x3dfb21=_0x6ebe4;this[_0x3dfb21(0x1f9)](),this[_0x3dfb21(0x183)](0x0),this[_0x3dfb21(0x236)](0x0,0x0);},Window_BestiaryRewards['prototype'][_0x6ebe4(0x2ae)]=function(){},Window_BestiaryRewards[_0x6ebe4(0x219)][_0x6ebe4(0x27e)]=function(){const _0x553d8c=_0x6ebe4,_0x4dc73a=Window_BestiaryRewards[_0x553d8c(0xf7)][_0x553d8c(0x160)];Math[_0x553d8c(0x218)]=!![],SceneManager['_scene'][_0x553d8c(0x163)]()[_0x553d8c(0x29e)]=undefined;for(const _0x147a17 of _0x4dc73a){if(_0x147a17===_0x553d8c(0x20a))this[_0x553d8c(0x17d)]();if(_0x147a17==='ap')this[_0x553d8c(0x33a)]();if(_0x147a17==='cp')this[_0x553d8c(0x281)]();if(_0x147a17==='jp')this[_0x553d8c(0x357)]();if(_0x147a17==='sp')this[_0x553d8c(0x3a2)]();if(_0x147a17===_0x553d8c(0x134))this[_0x553d8c(0x36e)]();if(_0x147a17===_0x553d8c(0x34f))this[_0x553d8c(0x2e3)]();}Math[_0x553d8c(0x218)]=![];},Window_BestiaryRewards[_0x6ebe4(0x219)][_0x6ebe4(0x17d)]=function(){const _0x3b4099=_0x6ebe4,_0x5d70e8=SceneManager[_0x3b4099(0x168)][_0x3b4099(0x163)](),_0x264b1e=_0x5d70e8[_0x3b4099(0x20a)](),_0x5e1213=TextManager['expA'],_0xd10124=Window_BestiaryRewards['SETTINGS']['expIcon'];let _0x3c2213=_0xd10124>0x0?_0x3b4099(0x113)[_0x3b4099(0x22e)](_0xd10124,_0x5e1213):_0x5e1213;this[_0x3b4099(0x202)](_0x3c2213,_0x3b4099(0x26b),!![],_0x264b1e);},Window_BestiaryRewards[_0x6ebe4(0x219)][_0x6ebe4(0x33a)]=function(){const _0x427019=_0x6ebe4;if(!Imported[_0x427019(0x3ac)])return;if(!VisuMZ['SkillLearnSystem'][_0x427019(0x37d)][_0x427019(0xba)][_0x427019(0x127)])return;const _0x1ffca2=SceneManager[_0x427019(0x168)][_0x427019(0x163)](),_0x362fde=_0x1ffca2[_0x427019(0x137)](),_0x5cbfc1=TextManager[_0x427019(0x363)],_0x4098f1=ImageManager[_0x427019(0x375)];let _0x5f33c0=_0x4098f1>0x0?'\x5cI[%1]%2'[_0x427019(0x22e)](_0x4098f1,_0x5cbfc1):_0x5cbfc1;this[_0x427019(0x202)](_0x5f33c0,_0x427019(0x26b),!![],_0x362fde);},Window_BestiaryRewards[_0x6ebe4(0x219)][_0x6ebe4(0x281)]=function(){const _0x5e77ed=_0x6ebe4;if(!Imported[_0x5e77ed(0x2d4)])return;if(!VisuMZ['ClassChangeSystem'][_0x5e77ed(0x37d)][_0x5e77ed(0x13d)]['ShowVictory'])return;const _0x30a420=SceneManager[_0x5e77ed(0x168)][_0x5e77ed(0x163)](),_0x5ac99a=_0x30a420[_0x5e77ed(0x2ba)](),_0x43f061=TextManager[_0x5e77ed(0x1e7)],_0x21f423=ImageManager[_0x5e77ed(0xa1)];let _0x8183f3=_0x21f423>0x0?'\x5cI[%1]%2'[_0x5e77ed(0x22e)](_0x21f423,_0x43f061):_0x43f061;this[_0x5e77ed(0x202)](_0x8183f3,_0x5e77ed(0x26b),!![],_0x5ac99a);},Window_BestiaryRewards[_0x6ebe4(0x219)][_0x6ebe4(0x357)]=function(){const _0x3a5127=_0x6ebe4;if(!Imported[_0x3a5127(0x2d4)])return;if(!VisuMZ[_0x3a5127(0x37b)][_0x3a5127(0x37d)][_0x3a5127(0x26f)]['ShowVictory'])return;const _0x13f1c1=SceneManager[_0x3a5127(0x168)][_0x3a5127(0x163)](),_0x16edfb=_0x13f1c1['jobPoints'](),_0x289aad=TextManager[_0x3a5127(0x20d)],_0x4694c8=ImageManager[_0x3a5127(0x307)];let _0x504063=_0x4694c8>0x0?_0x3a5127(0x113)['format'](_0x4694c8,_0x289aad):_0x289aad;this[_0x3a5127(0x202)](_0x504063,_0x3a5127(0x26b),!![],_0x16edfb);},Window_BestiaryRewards[_0x6ebe4(0x219)][_0x6ebe4(0x3a2)]=function(){const _0x5ab79a=_0x6ebe4;if(!Imported[_0x5ab79a(0x3ac)])return;if(!VisuMZ[_0x5ab79a(0xc9)][_0x5ab79a(0x37d)][_0x5ab79a(0x196)]['ShowVictory'])return;const _0x6d60db=SceneManager[_0x5ab79a(0x168)][_0x5ab79a(0x163)](),_0x5d49dd=_0x6d60db[_0x5ab79a(0x29d)](),_0x1eac7e=TextManager[_0x5ab79a(0x185)],_0x2d655c=ImageManager[_0x5ab79a(0x1af)];let _0x5821ca=_0x2d655c>0x0?'\x5cI[%1]%2'[_0x5ab79a(0x22e)](_0x2d655c,_0x1eac7e):_0x1eac7e;this['addCommand'](_0x5821ca,'rewards',!![],_0x5d49dd);},Window_BestiaryRewards[_0x6ebe4(0x219)][_0x6ebe4(0x36e)]=function(){const _0x3db633=_0x6ebe4,_0x596b88=SceneManager[_0x3db633(0x168)][_0x3db633(0x163)](),_0x583574=_0x596b88[_0x3db633(0x134)](),_0x26e586=TextManager[_0x3db633(0x2c4)],_0x370e46=Window_BestiaryRewards[_0x3db633(0xf7)][_0x3db633(0x171)];let _0x74a549=_0x370e46>0x0?_0x3db633(0x113)[_0x3db633(0x22e)](_0x370e46,_0x26e586):_0x26e586;this[_0x3db633(0x202)](_0x74a549,_0x3db633(0x26b),!![],_0x583574);},Window_BestiaryRewards[_0x6ebe4(0x219)][_0x6ebe4(0x2e3)]=function(){const _0x50d349=_0x6ebe4;this['makeEmptyGroups'](),this[_0x50d349(0x3d5)](),this['addEnemyConditionalDrops'](),this['addSortedEnemyDrops']();},Window_BestiaryRewards['prototype'][_0x6ebe4(0x309)]=function(){const _0xdce082=_0x6ebe4;this[_0xdce082(0x1e6)]={};const _0x41782e=['chance100',_0xdce082(0xe0),_0xdce082(0x1ca),_0xdce082(0xab),_0xdce082(0x162),_0xdce082(0x9b)],_0x944bcc=[_0xdce082(0x34f),_0xdce082(0x353),_0xdce082(0x153)];for(const _0x3fb8d9 of _0x41782e){for(const _0x224b3c of _0x944bcc){if('wKZoH'===_0xdce082(0xb6))for(const _0x37a604 of _0x52bf09){let _0x52d87f=this['_enemyDrops'][_0xec34c][_0x37a604];_0x52d87f=_0x52d87f[_0xdce082(0x1dd)]((_0x66a831,_0x478985)=>_0x66a831['id']-_0x478985['id']);for(const _0x45542b of _0x52d87f){const _0x111f43=_0x168baa[_0xdce082(0x1b2)][_0xdce082(0x2dd)][_0xbee65e];this[_0xdce082(0x166)](_0x45542b,_0x111f43);}}else this['_enemyDrops'][_0x3fb8d9]=this['_enemyDrops'][_0x3fb8d9]||{},this[_0xdce082(0x1e6)][_0x3fb8d9][_0x224b3c]=this[_0xdce082(0x1e6)][_0x3fb8d9][_0x224b3c]||[];}}},VisuMZ['Bestiary'][_0x6ebe4(0x150)]=function(_0x19e1f3,_0x2ccb78){if(_0x19e1f3===0x1)return $dataItems[_0x2ccb78];if(_0x19e1f3===0x2)return $dataWeapons[_0x2ccb78];if(_0x19e1f3===0x3)return $dataArmors[_0x2ccb78];return null;},VisuMZ[_0x6ebe4(0x1b2)]['GetDropRateText']=function(_0x5f2fd3){const _0x590ffc=_0x6ebe4,_0x511c28=TextManager[_0x590ffc(0x1b2)][_0x590ffc(0x2dd)];if(_0x5f2fd3>=0x1)return _0x590ffc(0x12b)!==_0x590ffc(0x3cb)?_0x511c28[_0x590ffc(0x1f2)]:this['getDefeatedEnemies']()[_0x590ffc(0x2bb)](_0x519162);else{if(_0x5f2fd3>=0.5)return _0x511c28[_0x590ffc(0xe0)];else{if(_0x5f2fd3>=0.2){if(_0x590ffc(0x122)===_0x590ffc(0x12d)){if(this['currentSymbol']()!=='param')_0x22b97a['prototype']['playOkSound'][_0x590ffc(0x180)](this);}else return _0x511c28[_0x590ffc(0x1ca)];}else{if(_0x5f2fd3>=0.1){if(_0x590ffc(0x32e)===_0x590ffc(0x190)){const _0x3b3c48=new _0x18b8c5(0x0,0x0,_0x3ac6e1[_0x590ffc(0x1a3)],_0x77902e['height']);this[_0x590ffc(0x21a)]=new _0x27b5e1(_0x3b3c48),this[_0x590ffc(0x21a)][_0x590ffc(0x195)]=0x0,this[_0x590ffc(0x11a)](this[_0x590ffc(0x21a)]),this['updateCommandNameWindow']();}else return _0x511c28[_0x590ffc(0xab)];}else return _0x511c28[_0x590ffc(0x162)];}}}},Window_BestiaryRewards[_0x6ebe4(0x219)][_0x6ebe4(0x3cd)]=function(_0x16828f,_0x2d1a5e){const _0x124e90=_0x6ebe4;if(!_0x16828f)return;const _0x22d5b4=TextManager[_0x124e90(0x1b2)]['rewardsWindow'],_0x487e7e=[_0x124e90(0x1f2),_0x124e90(0xe0),_0x124e90(0x1ca),_0x124e90(0xab),'chance0',_0x124e90(0x9b)];let _0x1f1b2e='';for(const _0x3c3e09 of _0x487e7e){if(_0x2d1a5e===_0x22d5b4[_0x3c3e09])_0x1f1b2e=_0x3c3e09;}let _0x32f293='';if(DataManager[_0x124e90(0x228)](_0x16828f))_0x32f293=_0x124e90(0x34f);if(DataManager[_0x124e90(0x144)](_0x16828f))_0x32f293=_0x124e90(0x353);if(DataManager['isArmor'](_0x16828f))_0x32f293=_0x124e90(0x153);this[_0x124e90(0x1e6)][_0x1f1b2e][_0x32f293]['push'](_0x16828f);},Window_BestiaryRewards[_0x6ebe4(0x219)]['addEnemyDatabaseDrops']=function(){const _0x40cb64=_0x6ebe4,_0x575731=SceneManager[_0x40cb64(0x168)][_0x40cb64(0x163)](),_0x56abb2=_0x575731['enemy']()['dropItems'];if(!_0x56abb2)return;for(const _0x54f0fa of _0x56abb2){if('lEcNK'===_0x40cb64(0x1d1)){if(_0x54f0fa[_0x40cb64(0x295)]<=0x0)continue;const _0x26c750=0x1/Math[_0x40cb64(0x264)](_0x54f0fa['denominator'],0x1),_0x551337=VisuMZ[_0x40cb64(0x1b2)]['GetItemObj'](_0x54f0fa[_0x40cb64(0x295)],_0x54f0fa['dataId']),_0xc3f305=VisuMZ['Bestiary'][_0x40cb64(0x3ca)](_0x26c750);this[_0x40cb64(0x3cd)](_0x551337,_0xc3f305);}else{const _0x594aba=this[_0x40cb64(0x204)](),_0x54fc0f=_0x24d21e[_0x40cb64(0x168)][_0x40cb64(0x163)]();_0x51dbd8=_0x54fc0f['getTraitSet'](_0x594aba[0x0])[_0x40cb64(0x97)]()[_0x40cb64(0x2fc)]()===_0x594aba[0x1]['toUpperCase']()[_0x40cb64(0x2fc)]();if(!_0xb518a8)_0x16565c[_0x40cb64(0x2f5)]();}}},Window_BestiaryRewards[_0x6ebe4(0x219)][_0x6ebe4(0x2db)]=function(){const _0x218d28=_0x6ebe4;if(!Imported['VisuMZ_4_ExtraEnemyDrops'])return;const _0x48d39d=SceneManager['_scene'][_0x218d28(0x163)](),_0x1f0bcd=_0x48d39d[_0x218d28(0x163)]()[_0x218d28(0x243)]||'',_0x38befe=_0x1f0bcd[_0x218d28(0x317)](/[\r\n]+/),_0x3c4d0d=TextManager[_0x218d28(0x1b2)][_0x218d28(0x2dd)][_0x218d28(0x9b)];for(const _0x5851e9 of _0x38befe){if(_0x5851e9['match'](/<CONDITIONAL (ITEM|WEAPON|ARMOR) (\d+)[ ](?:THROUGH|to)[ ](\d+) (?:DROP|DROPS)>/i)){const _0x69aae1=VisuMZ[_0x218d28(0x3d0)][_0x218d28(0x11d)](RegExp['$1']),_0x354021=Number(RegExp['$2']),_0x2a94bd=Number(RegExp['$3']);for(let _0x14b69e=_0x354021;_0x14b69e<=_0x2a94bd;_0x14b69e++){const _0x45f4b2=_0x69aae1[_0x14b69e]||null;_0x45f4b2&&_0x45f4b2[_0x218d28(0xbd)]['trim']()!==''&&!_0x45f4b2[_0x218d28(0xbd)][_0x218d28(0x390)](/-----/i)&&this['addItemToGroup'](_0x45f4b2,_0x3c4d0d);}}if(_0x5851e9[_0x218d28(0x390)](/<CONDITIONAL (ITEM|WEAPON|ARMOR) (\d+) (?:DROP|DROPS)>/i)){if(_0x218d28(0x2af)!==_0x218d28(0x2fb)){const _0x411605=VisuMZ['ExtraEnemyDrops'][_0x218d28(0x11d)](RegExp['$1']),_0x491bbf=Number(RegExp['$2']),_0x54c506=_0x411605[_0x491bbf];this[_0x218d28(0x3cd)](_0x54c506,_0x3c4d0d);}else this['addLevelChangeCommands']();}if(_0x5851e9[_0x218d28(0x390)](/<CONDITIONAL (ITEM|WEAPON|ARMOR) (.*) (?:DROP|DROPS)>/i)){if(_0x218d28(0x35d)!==_0x218d28(0x1b0)){const _0x4e031a=VisuMZ[_0x218d28(0x3d0)][_0x218d28(0x347)](RegExp['$1'],RegExp['$2']);this[_0x218d28(0x3cd)](_0x4e031a,_0x3c4d0d);}else{const _0x59271e=_0x3a254c[_0x2d778d];let _0x13bdec=_0x59271e['name'],_0x3fd4f0=_0x59271e['iconIndex'];if(_0x24139f[_0x218d28(0x274)]){const _0x2cb23=_0x59271e[_0x218d28(0x243)]||'';_0x2cb23[_0x218d28(0x390)](/<DISPLAY ICON: (\d+)>/i)&&(_0x3fd4f0=_0x39a8d9(_0xf72beb['$1'])),_0x2cb23['match'](/<DISPLAY TEXT: (.*)>/i)&&(_0x13bdec=_0x45ccaf(_0x8f977c['$1']));}return'\x5cI[%2]%1'[_0x218d28(0x22e)](_0x13bdec,_0x3fd4f0);}}}},Window_BestiaryRewards[_0x6ebe4(0x219)]['addItemDropCommand']=function(_0x388d7e,_0x4b75a6){const _0x44af86=_0x6ebe4;if(!_0x388d7e)return;const _0x4243b9=_0x388d7e[_0x44af86(0xbd)],_0x24e53b=_0x388d7e['iconIndex'];let _0x49d101=_0x24e53b>0x0?'\x5cI[%1]%2'[_0x44af86(0x22e)](_0x24e53b,_0x4243b9):_0x4243b9;this['addCommand'](_0x49d101,_0x44af86(0x26b),!![],_0x4b75a6);},Window_BestiaryRewards[_0x6ebe4(0x219)][_0x6ebe4(0x1ce)]=function(){const _0x42d71a=_0x6ebe4,_0x1a1df1=[_0x42d71a(0x1f2),'chance50',_0x42d71a(0x1ca),_0x42d71a(0xab),'chance0',_0x42d71a(0x9b)],_0x577d47=[_0x42d71a(0x34f),_0x42d71a(0x353),_0x42d71a(0x153)];for(const _0x158245 of _0x1a1df1){for(const _0x2ff1d0 of _0x577d47){if(_0x42d71a(0x33c)===_0x42d71a(0x121))this[_0x42d71a(0x309)](),this[_0x42d71a(0x3d5)](),this['addEnemyConditionalDrops'](),this[_0x42d71a(0x1ce)]();else{let _0x397e84=this[_0x42d71a(0x1e6)][_0x158245][_0x2ff1d0];_0x397e84=_0x397e84[_0x42d71a(0x1dd)]((_0xb669b1,_0x28ec33)=>_0xb669b1['id']-_0x28ec33['id']);for(const _0x2ccdb0 of _0x397e84){if(_0x42d71a(0x239)===_0x42d71a(0x239)){const _0x396d34=TextManager[_0x42d71a(0x1b2)]['rewardsWindow'][_0x158245];this[_0x42d71a(0x166)](_0x2ccdb0,_0x396d34);}else this[_0x42d71a(0x28c)][_0x403474]['hide']();}}}}},Window_BestiaryRewards[_0x6ebe4(0x219)][_0x6ebe4(0xc7)]=function(_0x25faa1){const _0x26ccfc=_0x6ebe4,_0x17d8dc=this[_0x26ccfc(0x233)](_0x25faa1),_0x215ac6=this[_0x26ccfc(0x1c1)](_0x25faa1),_0xcece37=String(this[_0x26ccfc(0x3aa)][_0x25faa1][_0x26ccfc(0xf8)]);this['resetFontSettings'](),this['changePaintOpacity'](this['isCommandEnabled'](_0x25faa1)),this[_0x26ccfc(0x303)](_0x215ac6,_0x17d8dc['x'],_0x17d8dc['y'],_0x17d8dc[_0x26ccfc(0x1a3)]);const _0xba7c9b=_0x17d8dc['x']+(_0x17d8dc[_0x26ccfc(0x1a3)]-this[_0x26ccfc(0x2e2)](_0xcece37)['width']);this[_0x26ccfc(0x303)](_0xcece37,_0xba7c9b,_0x17d8dc['y'],_0x17d8dc[_0x26ccfc(0x1a3)]);};function Window_BestiaryTraits(){const _0x5031d9=_0x6ebe4;this[_0x5031d9(0x384)](...arguments);}Window_BestiaryTraits[_0x6ebe4(0x219)]=Object[_0x6ebe4(0x290)](Window_Command[_0x6ebe4(0x219)]),Window_BestiaryTraits[_0x6ebe4(0x219)]['constructor']=Window_BestiaryTraits,Window_BestiaryTraits[_0x6ebe4(0xf7)]={'bgType':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0x371)]??0x0,'displayAllTraitTypes':VisuMZ[_0x6ebe4(0x1b2)]['Settings'][_0x6ebe4(0x32d)][_0x6ebe4(0x359)]??![]},Window_BestiaryTraits[_0x6ebe4(0x219)][_0x6ebe4(0x384)]=function(_0x5d0333){const _0x3f2d2d=_0x6ebe4;this[_0x3f2d2d(0x1d0)](),Window_Command[_0x3f2d2d(0x219)]['initialize']['call'](this,_0x5d0333),this[_0x3f2d2d(0x3db)](),this[_0x3f2d2d(0x235)](),this[_0x3f2d2d(0x374)]();},Window_BestiaryTraits[_0x6ebe4(0x219)]['initCategoryStatus']=function(){const _0x25b148=_0x6ebe4;this[_0x25b148(0xa9)]={};const _0x3b38cf=[_0x25b148(0x2c2),_0x25b148(0x1ac),'Gender','Race',_0x25b148(0x178),'Alignment','Blessing',_0x25b148(0x20c),'Zodiac',_0x25b148(0x1a6)];for(const _0xd1fead of _0x3b38cf){_0x25b148(0x30c)==='enIOV'?this[_0x25b148(0x352)]():this['_categoryStatus'][_0xd1fead[_0x25b148(0xf6)]()[_0x25b148(0x2fc)]()]=!![];}},Window_BestiaryTraits[_0x6ebe4(0x219)][_0x6ebe4(0x39c)]=function(){return![];},Window_BestiaryTraits[_0x6ebe4(0x219)][_0x6ebe4(0xe6)]=function(){const _0x5893e0=_0x6ebe4;this[_0x5893e0(0x1f9)](),this['forceSelect'](0x0),this['scrollTo'](0x0,0x0),this[_0x5893e0(0x13e)]&&this['_helpWindow'][_0x5893e0(0x3bc)]();},Window_BestiaryTraits['prototype']['playOkSound']=function(){const _0x1868f3=_0x6ebe4;if(this[_0x1868f3(0x389)]()===_0x1868f3(0x381)){if(_0x1868f3(0x234)!==_0x1868f3(0x3c7))SoundManager[_0x1868f3(0xdd)]();else{if(this[_0x1868f3(0x1a4)]===_0x352e8d)this[_0x1868f3(0x232)]();return this[_0x1868f3(0x1a4)][_0x2957ee]=this['_timesEnemyDefeated'][_0x350c0d]||0x0,this[_0x1868f3(0x1a4)][_0x5cb1bc];}}else{if(this[_0x1868f3(0x389)]()===_0x1868f3(0x345)){const _0x55898a=this[_0x1868f3(0x204)](),_0x190357=SceneManager[_0x1868f3(0x168)][_0x1868f3(0x163)]();enabled=_0x190357[_0x1868f3(0xef)](_0x55898a[0x0])[_0x1868f3(0x97)]()[_0x1868f3(0x2fc)]()===_0x55898a[0x1][_0x1868f3(0x97)]()[_0x1868f3(0x2fc)]();if(!enabled)SoundManager['playEquip']();}}},Window_BestiaryTraits[_0x6ebe4(0x219)]['makeCommandList']=function(){const _0x5d9ead=_0x6ebe4,_0x375d06=SceneManager['_scene'][_0x5d9ead(0x163)]();if(!_0x375d06)return;const _0x317538=_0x375d06[_0x5d9ead(0x30d)]();for(const _0x4216c1 of _0x317538){if(!this['includesTrait'](_0x4216c1,_0x375d06))continue;this[_0x5d9ead(0x2b5)](_0x4216c1),this[_0x5d9ead(0x111)](_0x4216c1);}},Window_BestiaryTraits[_0x6ebe4(0x219)]['includesTrait']=function(_0x2e1667,_0x481fc6){const _0x20e291=_0x6ebe4,_0x444202=DataManager[_0x20e291(0x346)](_0x2e1667);if(!_0x444202)return![];if(!_0x444202[_0x20e291(0xa8)])return![];return Window_BestiaryTraits[_0x20e291(0xf7)]['displayAllTraitTypes']?!![]:_0x481fc6&&_0x481fc6['getTraitSet'](_0x2e1667)!=='';},Window_BestiaryTraits[_0x6ebe4(0x219)][_0x6ebe4(0x2b5)]=function(_0x547d9a){const _0x2b3d0b=_0x6ebe4,_0x42ceaf=this['isCategoryOpen'](_0x547d9a)?TextManager['Bestiary'][_0x2b3d0b(0x306)][_0x2b3d0b(0x285)]:TextManager['Bestiary'][_0x2b3d0b(0x306)][_0x2b3d0b(0x222)],_0x12d1a7=DataManager[_0x2b3d0b(0x346)](_0x547d9a),_0x3202be=_0x42ceaf[_0x2b3d0b(0x22e)](_0x12d1a7[_0x2b3d0b(0x16d)]);this['addCommand'](_0x3202be,_0x2b3d0b(0x381),!![],_0x547d9a);},Window_BestiaryTraits['prototype'][_0x6ebe4(0x3b7)]=function(_0x50288f){const _0x29ea33=_0x6ebe4;return _0x50288f=_0x50288f[_0x29ea33(0xf6)]()[_0x29ea33(0x2fc)](),this[_0x29ea33(0xa9)][_0x50288f];},Window_BestiaryTraits[_0x6ebe4(0x219)][_0x6ebe4(0x1e8)]=function(){const _0x12cf1c=_0x6ebe4,_0x19d634=this[_0x12cf1c(0x23b)]()[_0x12cf1c(0xf6)]()['trim']();this[_0x12cf1c(0xa9)][_0x19d634]=!this[_0x12cf1c(0xa9)][_0x19d634],this[_0x12cf1c(0x173)]();},Window_BestiaryTraits[_0x6ebe4(0x219)][_0x6ebe4(0x23b)]=function(){const _0x2d5c1e=_0x6ebe4;return this['currentSymbol']()===_0x2d5c1e(0x381)?this[_0x2d5c1e(0x204)]():null;},Window_BestiaryTraits[_0x6ebe4(0x219)]['makeTraitList']=function(_0x566512){const _0x92e5b5=_0x6ebe4;if(!this[_0x92e5b5(0x3b7)](_0x566512))return;const _0x30a59b=SceneManager[_0x92e5b5(0x168)][_0x92e5b5(0x163)](),_0x2911ce=VisuMZ[_0x92e5b5(0x1b2)][_0x92e5b5(0x1ed)](_0x566512,_0x30a59b);if(_0x2911ce[_0x92e5b5(0x115)]<=0x0){if('fTgOQ'!=='Rzqna'){const _0x2a43a2=_0x30a59b[_0x92e5b5(0xef)](_0x566512);this[_0x92e5b5(0x2b8)](_0x566512,_0x2a43a2,_0x30a59b);}else{const _0x30d2ef=this['commandName'](_0x5dc069);if(_0x30d2ef[_0x92e5b5(0x390)](/\\I\[(\d+)\]/i)){const _0x7830e8=this['itemLineRect'](_0x5d0557),_0x7d7c6c=this['textSizeEx'](_0x30d2ef)[_0x92e5b5(0x1a3)];return _0x7d7c6c<=_0x7830e8['width']?_0x92e5b5(0x39a):_0x92e5b5(0x1ae);}}}else for(const _0x42d83f of _0x2911ce){if(_0x92e5b5(0x2ef)!==_0x92e5b5(0xc3))this[_0x92e5b5(0x2b8)](_0x566512,_0x42d83f,_0x30a59b);else{const _0x55a715=_0x11bf13[_0x3a7c49[_0x92e5b5(0x25f)]];if(_0x55a715&&!_0x1da23d[_0x92e5b5(0x2bb)](_0x55a715))_0x501ba0[_0x92e5b5(0xaf)](_0x55a715);}}},Window_BestiaryTraits[_0x6ebe4(0x219)]['makeTraitCommand']=function(_0x419e8c,_0x504029,_0x1c0757){const _0x491f53=_0x6ebe4,_0x46881d=DataManager[_0x491f53(0x15a)](_0x419e8c,_0x504029);this['addCommand']('\x20\x20'+_0x46881d['Display'],'trait',!![],[_0x419e8c,_0x504029]);},Window_BestiaryTraits[_0x6ebe4(0x219)][_0x6ebe4(0xc7)]=function(_0x1699aa){const _0x468925=_0x6ebe4,_0x45e00b=this[_0x468925(0x233)](_0x1699aa),_0x138e51=this[_0x468925(0x1c1)](_0x1699aa);this[_0x468925(0x2d5)]();let _0x4d0b33=!![];if(this['commandSymbol'](_0x1699aa)===_0x468925(0x345)){const _0x2856d5=this[_0x468925(0x3aa)][_0x1699aa][_0x468925(0xf8)],_0x175f50=SceneManager[_0x468925(0x168)][_0x468925(0x163)]();_0x4d0b33=_0x175f50[_0x468925(0xef)](_0x2856d5[0x0])[_0x468925(0x97)]()['trim']()===_0x2856d5[0x1][_0x468925(0x97)]()[_0x468925(0x2fc)]();}this['changePaintOpacity'](_0x4d0b33),this[_0x468925(0x303)](_0x138e51,_0x45e00b['x'],_0x45e00b['y'],_0x45e00b[_0x468925(0x1a3)]);},Window_BestiaryTraits['prototype']['updateHelp']=function(){const _0x311cef=_0x6ebe4;if(this['currentSymbol']()===_0x311cef(0x381))this['_helpWindow'][_0x311cef(0xb4)](TextManager['Bestiary'][_0x311cef(0x306)]['traitHelp']);else{if(this[_0x311cef(0x389)]()===_0x311cef(0x345)){const _0x77e10=this[_0x311cef(0x204)](),_0x3a03c3=DataManager[_0x311cef(0x15a)](_0x77e10[0x0],_0x77e10[0x1]);this[_0x311cef(0x13e)][_0x311cef(0xb4)](_0x3a03c3?_0x3a03c3[_0x311cef(0x2a0)]||'':'');}else this['currentSymbol']()===null&&this[_0x311cef(0x13e)]['setText'](TextManager[_0x311cef(0x1b2)][_0x311cef(0x306)]['nullHelp']);}};function _0x435b(){const _0x4ba420=['Gold_Icon','addEnemyConditionalDrops','isDead','rewardsWindow','defaultCategory','CategoryData','innerHeight','\x5cC[0]Normal','textSizeEx','addItemsCommand','createRewardsDataWindow','maskChar','subWindow','Name','yejnr','indexOf','_bestiaryEnemyCustomImageFilename','Math_random','PossibleMassTraitsFromNotetags','ghzsM','_bestiaryEnemyBattlebackData','pxweE','XgKFw','setBackgroundType','EnemyIDs','isMainMenuBestiaryEnabled','AuzOz','playEquip','_dragonbonesSpriteContainer','isEnemyFullyVisible','<WordWrap>','callUpdateSubWindow','This\x20monster\x20has\x20no\x20special\x20properties.','fnngX','trim','bestiaryRevealEnemy','cancel','scaleSprite','WJdyx','filters','updatePageButtons','drawTextEx','_Bestiary_MainMenu','battlerHue','traitsWindow','jobPointsIcon','SubWindow_Completion','makeEmptyGroups','exit','isEnemyRevealedByBestiary','wbuXa','getTraitSetKeys','remove','baseParams','XvYAU','drawParamItem','ImageWindow_Battleback1','ExcludeElements','Elements','adjustSprite','auto','split','ARRAYSTRUCT','RvChe','getInputMultiButtonStrings','QWtDw','battlerName','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','members','callUpdateImage','createBackground','updateBattlebackImages','_listWindow','3ONZTNV','slowSoundFrequency','_bestiaryReveal','ConvertParams','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','levelDownToMin','NUM','commandStyle','removeChild','mgiaq','Window','eAHaU','isUseModernControls','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','PossibleRandomSingularTraitsFromNotetags','Window_MenuCommand_addOriginalCommands','loadBattleback2','_nameWindow','VisuMZ_1_ElementStatusCore','clear','listWindowRect','right','CategoryWindow_BgType','addApCommand','ZrYtq','MijAU','Game_System_initialize','bestiaryEnemyBattleback2','enemyId','_backSprite2','hpRpl','end','skills','loadSvActor','trait','traitSetType','getDatabaseItem','ExtDisplayedParams','CoreEngine','_pageupButton','fastSoundFrequency','parse','jSDsK','constructor','items','addCategory','levelMax','process_VisuMZ_Bestiary_Categories','weapons','RewardsWindow_Chance100','dataCategoriesWindowRect','Race','addJpCommand','min','TraitsWindow_ShowAllTraits','ImageWindow_BlurStrength','BasicWindow_LevelUpToMax','onSymbolWindowCancel','Vdrfk','update','ListWindow_BgType','LoreText','TkWdM','drawBestiaryCompletionRate','abilityPointsAbbr','deactivateSymbolWindow','wait','timesEnemySeen','version','\x5cI[74]Lower\x20%1\x20Down','frameCount','upArrowVisible','RandomValid','anchor','SkillsIcon','addGoldCommand','-----','home','TraitsWindow_BgType','buttonAssist_Expand','setFrame','hide','abilityPointsIcon','bestiaryTotalEnemies','Categories','SystemEnableBestiaryMenu','left','RewardsWindow_Chance0','ClassChangeSystem','BSTti','Settings','setColorTone','createAllWindows','fastScrollLore','category','onDatabaseLoaded','scaleHelpWindow','initialize','90CeEhqL','createCommandNameWindow','uZoKx','BestiaryRevealEnemies','currentSymbol','isSkillHidden','bCqYA','STRUCT','STR','isBottomHelpMode','addWindow','match','RewardsWindow_Chance10','Title','Param','EVAL','shouldDrawIcons','nDeJb','TraitsWindow_CategoryHelpDesc','fUgyj','buttonAssistText4','iconText','contents','isAutoColorAffected','loadBattleback1','aDcdU','origin','map','SlowScrollSpeed','addSpCommand','ElementsIcon','BasicWindow_ShowLevelChange','text','smoothSelect','ZvUkJ','toFixed','BattleManager_setup','_list','padding','VisuMZ_2_SkillLearnSystem','animations','levelUpToMax','levelUp','ReNNU','isEnemy','setEnemy','qeGMO','SceneOpenBestiary','setImageWindow','setHue','isCategoryOpen','TdvTd','buttonAssist_View','5736pAYvpr','_enemy','show','isMainMenuBestiaryVisible','playDragonbonesIdleAnimation','SnapshotOpacity','customPicture','isPlaytest','registerCommand','loreWindow','CategoryPercentFixedDigits','createElementsDataWindow','+\x20\x5cC[16]%1','Nmewe','ElWtv','floor','GetDropRateText','wNCGS','HMWzh','addItemToGroup','showEnemyInBestiary','scrollToBottom','ExtraEnemyDrops','VisuMZ_1_MainMenuCore','commandNameWindowDrawText','ElementsText','autoWordWrap','addEnemyDatabaseDrops','arePageButtonsEnabled','maxItems','jobPoints','changeTextColor','callUpdateHelp','deactivate','isBestiaryCommandEnabled','Reveal','ARRAYNUM','replace','mainAreaTop','VBnTy','toUpperCase','addCustomCommand','basic','normalColor','conditional','_enemyID','addBestiaryCommandAutomatically','TraitsWindow_OpenCategory','krVFN','SystemShowBestiaryMenu','classPointsIcon','isCustomCommandEnabled','active','maxTp','SmHlX','setEnemyID','Bestiary\x20Completion\x20Rate:\x20%1%\x20(%2/%3\x20Monsters)','Visible','_categoryStatus','aGIMs','chance10','itemPadding','processFullEnemyImage','Skills','push','pOWrd','buttonAssist_FastScroll','bestiary','defeatedFmt','setText','createNameWindow','guOqc','DataCategoriesWindow_RectJS','neutral','dnANj','AbilityPoints','fixedPercentage','CwXLm','name','setMainMenuBestiaryVisible','LoreWindow_FontSize','AQmkf','buttonAssistText1','view','LPtbY','ElementsWindow_Absorb','createSpecialBattlers','jZfWo','drawItem','_allTextHeight','SkillLearnSystem','onLoadDragonbones','getBestiaryLore','svBattlerData','7bKEFaz','887764lYQUxU','BgFilename1','LFpVK','acxWu','commandSymbol','BgSettings','SubWindow_RectJS','subWindowRect','mainAreaHeight','buttonAssist_Switch','isEnemyIncludedInBestiary','uiHelpPosition','BMnmk','_text','bind','playOk','commandStyleCheck','processSlowScroll','chance50','setClickHandler','commandOrder','RewardsWindow_BgType','isTriggered','playCursor','becomeActive','uqmmM','gAvGR','setScrollAccel','scrollToTop','needsPageButtons','hasDragonbonesBattler','isPressed','buttonAssistKey5','getTraitSet','showLevelChange','nocho','WwvXG','concat','LoreWindow_Default','LoreWindow_BgType','toLowerCase','SETTINGS','ext','KkJPW','changeEnemyTrait','hlYVE','updateHelp','BlurFilter','Lore','createCommandWindow','viewEnemy','buttonAssistText5','\x5cC[27]Super\x20Rare','VKbSa','\x5cC[7]Immune','isAlive','processDragonbones','RewardsWindow_Chance50','updateCommandNameWindow','bestiaryEnemyCustomImageFilename','\x5cC[24]Weak','_categoryEnemyIDs','pageup','levelDown','HBNlT','CeBaa','zcxdL','makeTraitList','maskUndefeatedEnemyNames','\x5cI[%1]%2','bestiaryEnemyBattlebackData','length','drawItemStyleIcon','processEnemyLore','loadTitle1','BasicWindow_LevelDownToMin','addChild','prevEnemy','join','getDatabase','XwsCS','createSubWindow','disposeDragonbones','cSXfK','GDAHU','-\x20%1\x20(%2%)','\x5cI[73]Raise\x20%1\x20Up\x20to\x20Maximum','LoreIcon','visible','ShowVictory','createFilters','zrkDy','hasSvBattler','GiDyi','makeEnemyList','yNYJx','smoothScrollBy','onDataCategoriesCancel','iconHeight','play','buttonAssistText2','kRNUN','gold','_dragonbonesBattlerData','Expand','abilityPoints','defaultBattleback1','maxCols','seenFmt','addOriginalCommands','hasAnimatedSvActorBattler','ClassPoints','_helpWindow','VisuMZ_2_DragonbonesUnion','isBestiaryCommandVisible','mainAreaBottom','playCursorSound','_commandWindow','isWeapon','_backSprite1','ElementsWindow_Neutral','ElementsWindow_BgType','level','commandNameWindowDrawBackground','setNoEnemyText','actions','_tp','buttonAssist','initBestiaryReveals','LGASB','GetItemObj','_traitsDataWindow','_getBestiaryLore','armors','hideAllSymbolWindows','MQDUY','createHelpWindow','_battlebackSprite1','setEnemyName','createSkillsDataWindow','traitSet','minLevel','Little\x20is\x20known\x20about\x20this\x20monster.','processSvActorImage','iconWidth','elements','rewardsOrder','return\x200','chance0','enemy','\x5cC[21]Common','totalDefeatedEnemies','addItemDropCommand','hfobW','_scene','parameters','SubWindow_Encountered','helpAreaHeight','random','Label','abs','ELzES','loadArmature','goldIcon','innerWidth','refresh','Vocab','includeCategory','22TUKbnS','getDefeatedEnemies','Nature','uiMenuStyle','Scene_Menu_createCommandWindow','inBattle','_battlebackSprite2','addExpCommand','changePaintOpacity','addNewState','call','GeJlC','resetWordWrap','forceSelect','createLoreDataWindow','skillPointsAbbr','uiButtonPosition','drawEncounterData','updateEnemyID','iconIndex','Default','animation','12061544FOvBOA','canAddLevelChange','CategoryOrder','addBestiaryCommand','lHkIQ','addLevelChangeCommands','bestiaryEnemyBattleback1','LoreWindow_AutoWordWrap','isElementIDExcluded','opacity','SkillPoints','ImageWindow_Padding','helpWindow_BgType','JIKQh','isCommandEnabled','Ftelp','loadEnemy','absorb','_elementsDataWindow','categoryEnemyIDs','_lastIndex','BasicWindow_LevelUpByOne','DataWindow_RectJS','width','_timesEnemyDefeated','setup','Variant','nrRbC','svActorHorzCells','iaPsx','itemTextAlign','aWSjK','SubElement','dYkUz','icon','skillPointsIcon','cBYKy','RoCUl','Bestiary','addTimesEnemySeen','processFastScroll','battler','processCursorMove','scaleX','some','center','Game_BattlerBase_refresh','-\x20\x5cC[16]%1','scale','CategoryWindow_MaskChar','zYWVb','Properties','canDebugViewBestiary','commandName','buttonAssistKey1','popScene','addLoadListener','BasicIcon','_loreDataWindow','RegExp','_enemySprite','eCdfD','chance20','\x5cC[5]Rare','ListWindowDelayMS','ImageWindow_RectJS','addSortedEnemyDrops','VisuMZ_3_EnemyLevels','initCategoryStatus','lEcNK','createContents','VMndy','lore','fontSize','createBattlebackSprites','gxpxh','bgType','cdHTX','NameWindow_RectJS','CategoryWindow_CommandOrder','Fast\x20Scroll','sort','SushW','loadSvEnemy','battleback2','imageWindowRect','_dragonbonesName','_showEnemyInBestiary','_blurFilter','eXNLh','_enemyDrops','classPointsAbbr','openCloseCurrentCategory','categoryEnemies','addInnerChild','enabled','538985RjsMgA','PossibleEnemyTraits','Pipms','SubWindow_BgType','buttonAssistText3','setHelpWindow','chance100','elementsWindow','_basicDataWindow','collapse','ElementsWindow_Immune','calculateTextHeight','param','activate','NameWindow_BgType','round','createPageButtons','updateSpriteVisibility','battleback1','svActorVertCells','defaultBattleback2','createArmature','addCommand','isSceneBattle','currentExt','isEnemyDefeated','bitmap','description','isCountTowardsBestiaryDefeated','toggleEnemyCategory','exp','buttonAssistKey3','Curse','jobPointsAbbr','isEnabledEnemy','ImzjC','isEnemyNameMasked','BgFilename2','drawText','Alignment','wRUpS','drawAllText','createListWindow','calcWindowHeight','_noRandom','prototype','_commandNameWindow','_svBattlerName','clamp','completionFmt','ElementsWindow_Weak','BcHXa','boxWidth','createImageWindow','closedCategoriesFmt','timesEnemyDefeated','izyFP','pagedown','ARRAYSTR','Rewards','isItem','onDataCategoriesOpen','APEVo','Base','sBNlV','addEnemy','format','RewardsWindow_Conditional','Encountered:\x20%1','index','initBestiarySettings','itemLineRect','nUzsV','deselect','scrollTo','setHandler','bBFEY','BvlCA','helpWindowRatio','currentCategory','NpUzk','Game_BattlerBase_addNewState','createTraitsDataWindow','RewardsWindow_RewardsOrder','EnableMainMenu','Zodiac','TraitsWindow_NullHelpDesc','note','_dataCategoriesWindow','gainLevel','getAbsorbedElements','_timesEnemySeen','_dragonbones','HelpWindow_ScaleRatio','elementRate','_cache','MainMenu','commands','immune','helpWindowRect','height','levelMin','RewardsText','includeEnemy','_bestiaryTotalEnemies','DToZA','addTimesEnemyDefeated','308943umuVwA','buttonAssistKey4','vJtuf','ARRAYEVAL','originalName','process_VisuMZ_Bestiary','\x5cC[25]Resist','setSymbolWindow','skillId','\x5cI[73]Raise\x20%1\x20Up','drawMessageText','cOine','IhvML','max','QeOwk','initBestiaryMainMenu','Grassland','createBasicDataWindow','1645ZYfhOV','Oabmb','rewards','TraitsIcon','hideSkill','onBasicDataLevelChange','JobPoints','switch','_enemyBestiaryCategories','commandNameWindowCenter','StatusMenu','VisuMZ_1_BattleCore','basicWindow','filter','isCustomCommandVisible','nameWindowRect','\x5cC[17]Conditional','cFPfg','DebugFullBestiary','RewardsWindow_Chance20','nameWindow','makeCommandList','ElementsWindow_Resist','activateSymbolWindow','addCpCommand','setItem','_imageWindow','createEnemy','openCategoriesFmt','setDebugViewBestiary','nullHelp','cQgGC','CategoryWindow_ClosedCategory','offsetY','maxLevel','_symbolWindows','isRightInputMode','updateFilters','6138920rdXscj','create','defaultLoreFmt','BasicWindow_BgType','ElementStatusCore','down','kind','categoryWindow','updateArrows','drawItemStyleIconText','nEHFd','buttonAssistKey2','updateEnemyImage','commandBestiary','skillPoints','_visualDrops','slowScrollSpeed','Description','nextEnemy','lJaYm','\x5cC[24]Guaranteed','drawIcon','HelpWindow_RectJS','setLevel','drawRegularItem','YwqEU','dataWindowRect','13465092TqJKvh','\x5cI[%2]%1','ElJZK','Scene_Boot_onDatabaseLoaded','playOkSound','PlJyR','updateEnemy','displayAllTraitTypes','Scroll','BESTIARY','VisuMZ_1_MessageCore','addTraitCommand','FastScrollSpeed','PossibleSingularTraitsFromNotetags','makeTraitCommand','XqhVc','classPoints','includes','paramValueByName','ceil','DrawIcons','BasicWindow_LevelDownByOne','BasicText','AIpmp','Element','GryAq','currencyUnit','DUzgy','callUpdateSymbolWindow','Show','traits','List','createDragonbonesSprite','skill','slowScrollLore','loadPicture','getSkillName','BestiaryMenuCommand','+\x20%1\x20(%2%)','status','_subWindow','admks','VisuMZ_2_ClassChangeSystem','resetFontSettings','buttonAssist_SlowScroll','VisuMZ_0_CoreEngine','TraitsText','updatePadding'];_0x435b=function(){return _0x4ba420;};return _0x435b();}function Window_BestiaryLore(){const _0x5a3469=_0x6ebe4;this[_0x5a3469(0x384)](...arguments);}Window_BestiaryLore['prototype']=Object[_0x6ebe4(0x290)](Window_Selectable[_0x6ebe4(0x219)]),Window_BestiaryLore[_0x6ebe4(0x219)]['constructor']=Window_BestiaryLore,Window_BestiaryLore[_0x6ebe4(0xf7)]={'bgType':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0xf5)]??0x0,'fontSize':VisuMZ['Bestiary'][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0xbf)]??0x16,'autoWordWrap':VisuMZ['Bestiary']['Settings'][_0x6ebe4(0x32d)][_0x6ebe4(0x193)]??![],'slowScrollSpeed':VisuMZ['Bestiary'][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0x3a1)]??0x8,'fastScrollSpeed':VisuMZ[_0x6ebe4(0x1b2)][_0x6ebe4(0x37d)][_0x6ebe4(0x32d)][_0x6ebe4(0x2b6)]??0x20,'slowSoundFrequency':VisuMZ[_0x6ebe4(0x1b2)]['Settings']['Window']['SlowSoundFreq']??0x8,'fastSoundFrequency':VisuMZ[_0x6ebe4(0x1b2)]['Settings']['Window']['FastSoundFreq']??0x4},Window_BestiaryLore[_0x6ebe4(0x219)]['initialize']=function(_0xa583ef){const _0x3b702e=_0x6ebe4;this[_0x3b702e(0xdb)]='',Window_Selectable['prototype'][_0x3b702e(0x384)][_0x3b702e(0x180)](this,_0xa583ef),this[_0x3b702e(0x3db)](),this[_0x3b702e(0x235)](),this[_0x3b702e(0x374)]();},Window_BestiaryLore[_0x6ebe4(0x219)][_0x6ebe4(0x2d5)]=function(){const _0x4572ae=_0x6ebe4;Window_Selectable[_0x4572ae(0x219)]['resetFontSettings']['call'](this),this[_0x4572ae(0x39b)][_0x4572ae(0x1d5)]=Window_BestiaryLore[_0x4572ae(0xf7)][_0x4572ae(0x1d5)];},Window_BestiaryLore[_0x6ebe4(0x219)][_0x6ebe4(0x173)]=function(){const _0x4fcee1=_0x6ebe4;this[_0x4fcee1(0x117)](),this[_0x4fcee1(0x1f7)](),this[_0x4fcee1(0x1d2)](),this[_0x4fcee1(0x215)]();},Window_BestiaryLore[_0x6ebe4(0x219)][_0x6ebe4(0x1f7)]=function(){const _0x362a7a=_0x6ebe4,_0x2f14f1=this['_text'];this[_0x362a7a(0xc8)]=0x0,this['_allTextHeight']=this[_0x362a7a(0x2e2)](_0x2f14f1)[_0x362a7a(0x250)];},Window_BestiaryLore[_0x6ebe4(0x219)]['contentsHeight']=function(){const _0x4b49b0=_0x6ebe4;return Math['max'](this[_0x4b49b0(0xc8)],0x1);},Window_BestiaryLore[_0x6ebe4(0x219)][_0x6ebe4(0xe6)]=function(){const _0x3aeed3=_0x6ebe4;this[_0x3aeed3(0x1f9)](),this[_0x3aeed3(0x236)](0x0,0x0);},Window_BestiaryLore['prototype'][_0x6ebe4(0x117)]=function(){const _0x1ff67f=_0x6ebe4,_0x50f00d=SceneManager[_0x1ff67f(0x168)]['enemy'](),_0x5328e3=TextManager[_0x1ff67f(0xcb)](_0x50f00d);this['setText'](_0x5328e3);},Window_BestiaryLore[_0x6ebe4(0x219)][_0x6ebe4(0xb4)]=function(_0x134809){const _0x93b1b0=_0x6ebe4;if(_0x134809===this[_0x93b1b0(0xdb)])return;Imported[_0x93b1b0(0x2b4)]&&Window_BestiaryLore[_0x93b1b0(0xf7)][_0x93b1b0(0x3d4)]&&(_0x134809=_0x93b1b0(0x2f8)+_0x134809),this[_0x93b1b0(0xdb)]=_0x134809;},Window_BestiaryLore[_0x6ebe4(0x219)][_0x6ebe4(0x215)]=function(){const _0x17fbb2=_0x6ebe4,_0x337fac=this[_0x17fbb2(0xdb)];this[_0x17fbb2(0x2d5)](),this[_0x17fbb2(0x261)](_0x337fac);if(Imported['VisuMZ_1_MessageCore'])this[_0x17fbb2(0x182)]();this[_0x17fbb2(0xea)]();},Window_BestiaryLore[_0x6ebe4(0x219)][_0x6ebe4(0x261)]=function(_0x1730d1){const _0x17cad3=_0x6ebe4;this[_0x17cad3(0x303)](_0x1730d1,0x0,0x0,this[_0x17cad3(0x172)]);},Window_BestiaryLore[_0x6ebe4(0x219)]['updateOrigin']=function(){},Window_BestiaryLore[_0x6ebe4(0x219)][_0x6ebe4(0x1b6)]=function(){const _0x3e7b3b=_0x6ebe4;if(!this[_0x3e7b3b(0xa3)])return;if(Input['isPressed'](_0x3e7b3b(0x294)))this[_0x3e7b3b(0xdf)](!![]);else{if(Input[_0x3e7b3b(0xed)]('up')){if('WwvXG'!==_0x3e7b3b(0xf2)){const _0x55e9c0=this[_0x3e7b3b(0x114)](_0x496b54)[0x1];return _0x55e9c0===''?new _0x512560(0x1,0x1):this[_0x3e7b3b(0x333)](_0x55e9c0);}else this['processSlowScroll'](![]);}else{if(Input['isPressed'](_0x3e7b3b(0x225)))this[_0x3e7b3b(0x1b4)](!![]);else{if(Input[_0x3e7b3b(0xed)](_0x3e7b3b(0x10c))){if(_0x3e7b3b(0x96)!==_0x3e7b3b(0x20f))this[_0x3e7b3b(0x1b4)](![]);else for(const _0x5d769e of _0x273277){this[_0x3e7b3b(0x1e6)][_0x282ae4]=this[_0x3e7b3b(0x1e6)][_0x5a71d7]||{},this[_0x3e7b3b(0x1e6)][_0x1f118b][_0x5d769e]=this[_0x3e7b3b(0x1e6)][_0x2022ea][_0x5d769e]||[];}}else{if(Input[_0x3e7b3b(0xe4)](_0x3e7b3b(0x370)))this[_0x3e7b3b(0xea)](!![]);else Input[_0x3e7b3b(0xe4)](_0x3e7b3b(0x342))&&this[_0x3e7b3b(0x3cf)](!![]);}}}}},Window_BestiaryLore[_0x6ebe4(0x219)][_0x6ebe4(0xdf)]=function(_0x392da9){const _0xaaa66c=_0x6ebe4;let _0xb93c75=this[_0xaaa66c(0x39f)]['y'];this[_0xaaa66c(0x39f)]['y']+=(_0x392da9?0x1:-0x1)*Window_BestiaryLore[_0xaaa66c(0xf7)][_0xaaa66c(0x29f)];let _0x237f89=Math[_0xaaa66c(0x264)](0x0,this[_0xaaa66c(0xc8)]-this[_0xaaa66c(0x2e0)]);this['origin']['y']=this[_0xaaa66c(0x39f)]['y'][_0xaaa66c(0x21c)](0x0,_0x237f89);if(_0xb93c75!==this['origin']['y']&&Graphics[_0xaaa66c(0x369)]%Window_BestiaryLore[_0xaaa66c(0xf7)][_0xaaa66c(0x324)]===0x0)this[_0xaaa66c(0x142)]();},Window_BestiaryLore[_0x6ebe4(0x219)][_0x6ebe4(0x1b4)]=function(_0x5120d7){const _0x10c167=_0x6ebe4;let _0x123596=this['origin']['y'];this[_0x10c167(0x39f)]['y']+=(_0x5120d7?0x1:-0x1)*Window_BestiaryLore[_0x10c167(0xf7)]['fastScrollSpeed'];let _0xb68258=Math[_0x10c167(0x264)](0x0,this['_allTextHeight']-this['innerHeight']);this['origin']['y']=this[_0x10c167(0x39f)]['y'][_0x10c167(0x21c)](0x0,_0xb68258);if(_0x123596!==this[_0x10c167(0x39f)]['y']&&Graphics[_0x10c167(0x369)]%Window_BestiaryLore['SETTINGS'][_0x10c167(0x34b)]===0x0)this['playCursorSound']();},Window_BestiaryLore[_0x6ebe4(0x219)][_0x6ebe4(0xea)]=function(_0x4f635c){const _0x15427d=_0x6ebe4;let _0x5d40a0=this[_0x15427d(0x39f)]['y'];this[_0x15427d(0x39f)]['y']=0x0;if(_0x4f635c&&_0x5d40a0!==this[_0x15427d(0x39f)]['y'])this[_0x15427d(0x142)]();},Window_BestiaryLore[_0x6ebe4(0x219)][_0x6ebe4(0x3cf)]=function(_0x8b4694){const _0x44dbe2=_0x6ebe4;let _0x2e789e=this['origin']['y'],_0x24a98e=Math[_0x44dbe2(0x264)](0x0,this['_allTextHeight']-this['innerHeight']);this[_0x44dbe2(0x39f)]['y']=_0x24a98e;if(_0x8b4694&&_0x2e789e!==this['origin']['y'])this[_0x44dbe2(0x142)]();},Window_BestiaryLore['prototype'][_0x6ebe4(0x297)]=function(){const _0x487e88=_0x6ebe4;this['downArrowVisible']=this[_0x487e88(0x39f)]['y']<this[_0x487e88(0xc8)]-this[_0x487e88(0x2e0)],this[_0x487e88(0x36a)]=this[_0x487e88(0x39f)]['y']>0x0;},Window_BestiaryLore[_0x6ebe4(0x219)][_0x6ebe4(0x12e)]=function(_0xc97e06,_0x3a6cfd){const _0x289bc3=_0x6ebe4;this[_0x289bc3(0x39f)]['y']+=_0x3a6cfd;let _0x58fee8=Math['max'](0x0,this['_allTextHeight']-this[_0x289bc3(0x2e0)]);this[_0x289bc3(0x39f)]['y']=this[_0x289bc3(0x39f)]['y'][_0x289bc3(0x21c)](0x0,_0x58fee8);},Window_BestiaryLore[_0x6ebe4(0x219)][_0x6ebe4(0xe9)]=function(_0x346f44,_0x333bcf){const _0x4ee18b=_0x6ebe4;this[_0x4ee18b(0x39f)]['y']+=_0x333bcf;let _0x4544ac=Math[_0x4ee18b(0x264)](0x0,this[_0x4ee18b(0xc8)]-this[_0x4ee18b(0x2e0)]);this[_0x4ee18b(0x39f)]['y']=this[_0x4ee18b(0x39f)]['y'][_0x4ee18b(0x21c)](0x0,_0x4544ac);};