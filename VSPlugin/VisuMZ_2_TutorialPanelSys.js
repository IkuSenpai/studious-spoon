//=============================================================================
// VisuStella MZ - Tutorial Panel System
// VisuMZ_2_TutorialPanelSys.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_TutorialPanelSys = true;

var VisuMZ = VisuMZ || {};
VisuMZ.TutorialPanelSys = VisuMZ.TutorialPanelSys || {};
VisuMZ.TutorialPanelSys.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.01] [TutorialPanelSys]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Tutorial_Panel_System_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The plugin adds the ability to display tutorial panels seen in many recent
 * JRPG's. The tutorial panel system allows the player to read forward and
 * backward at their own pace while having visuals displayed on the relevant
 * tutorial pages. The player can later reread the tutorials found in a
 * dedicated Tutorial List scene that is accessible through the main menu.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Adds modern JRPG Tutorial Panel system.
 * * Players can read tutorials at their own pace, advancing forward and
 *   backward as needed, all while tutorials provide visuals.
 * * The list of already read tutorials can be accessed from the Main Menu
 *   if enabled and made visible through the Plugin Commands/Parameters.
 * * Tutorials can be viewed from the map scene or battle scene.
 * * Tutorial calls can be bypassed if the player has already viewed them, in
 *   order to prevent tediousness.
 * * Tutorials can be bypassed manually by the player through the Options scene
 *   if they do not wish to read tutorials for whatever reason (such as their
 *   second or third playthrough of the game).
 * * Tutorials can still be forcefully opened ignoring the bypass options of
 *   having already been read or turned off through the Options menu.
 * * Game devs can silently register tutorials to be placed into the Tutorial
 *   List scene for the player to read without having to show the tutorial.
 * * Within the Tutorial List scene, tutorials are separated into categories,
 *   allowing players to sort through them easily.
 * * Players can expand and collapse categories as needed if there are too many
 *   tutorials to navigate through.
 * * Some tutorials can already be made visible and registered by default.
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
 * VisuMZ_0_CoreEngine
 * 
 * This plugin provides vocabulary that can be used for the Button Assist
 * Window added through the VisuMZ Core Engine.
 * 
 * ---
 *
 * VisuMZ_1_MainMenuCore
 *
 * The latest version of the VisuMZ Main Menu Core already has the settings for
 * the Tutorial List command.
 *
 * ---
 *
 * VisuMZ_1_OptionsCore
 *
 * The latest version of the VisuMZ Options Core should have the settings for
 * showing/hiding tutorials.
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
 * === Tutorial Plugin Commands ===
 * 
 * ---
 *
 * Tutorial: Call
 * - Call forth a tutorial of the designated Tutorial ID Key.
 * - Use on the map or battle scenes.
 *
 *   Tutorial ID Key:
 *   - What is the tutorial identification key?
 *
 *   Force View?:
 *   - Forcefully opens the tutorial regardless of the Options settings or if
 *     "Bypass if Registered?" is enabled.
 *
 *   Bypass if Registered?:
 *   - Ignores opening the tutorial if the tutorial has already been
 *     viewed once.
 *
 *   Register Tutorial?:
 *   - Registers the tutorial to the Tutorial List that the player can revisit.
 *
 * ---
 *
 * Tutorial: Register ID Key(s)
 * - Register specific Tutorial ID Key(s) without opening the tutorial.
 *
 *   Tutorial ID Key(s):
 *   - Add which tutorial identification key(s)?
 *
 * ---
 * 
 * === Debug Plugin Commands ===
 * 
 * ---
 * 
 * Debug: Full Tutorial List?
 * - For playtest only! Allows you to fully view Tutorial.
 * - Resets when the game client is closed.
 * 
 *   Reveal?:
 *   - Fully reveals Tutorial list for playtesting.
 *   - Resets when the game client is closed.
 * 
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Enable Tutorial List in Menu?
 * - Enables/disables "Tutorial List" menu inside the main menu.
 *
 *   Enable/Disable?:
 *   - Enables/disables "Tutorial List" menu inside the main menu.
 *
 * ---
 *
 * System: Show Tutorial List in Menu?
 * - Shows/hides "Tutorial List" inside the main menu.
 *
 *   Show/Hide?:
 *   - Shows/hides "Tutorial List" inside the main menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Category List Settings
 * ============================================================================
 *
 * List of categories that are used for this plugin. Categories will be listed
 * in the order they appear with "Unlisted" category displayed first.
 *
 * ---
 *
 * Category
 * 
 *   ID Key:
 *   - This category's identification key.
 *   - Categories require unique keys for the plugin to differentiate them.
 * 
 *   Title:
 *   - This category's title.
 *   - You may use text codes.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Tutorial List Settings
 * ============================================================================
 *
 * List of tutorials that are used for this plugin. Here is where you add all
 * the tutorials seen in game. How they appear and such is all handled here.
 *
 * ---
 *
 * Tutorial
 * 
 *   ID Key:
 *   - This tutorial's identification key.
 *   - Tutorials require unique keys for the plugin to differentiate them.
 * 
 *   Title:
 *   - This tutorial's title. Displayed in a separate window.
 *   - You may use text codes.
 * 
 *   Category:
 *   - The category this tutorial is listed under.
 *   - If unlisted, the tutorial will be listed under "Unlisted".
 * 
 *   Pages:
 *   - List of pages that are shown for this tutorial.
 *   - Pages are displayed in the order listed.
 *
 * ---
 *
 * Page Settings
 * 
 *   Filename:
 *   - Displayed image associated with this page.
 *   - Found in the game project's /img/pictures/ folder.
 * 
 *   Description:
 *   - The description text displayed for this page.
 *   - Text codes are allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Scene_TutorialData Settings
 * ============================================================================
 *
 * Settings for Scene_TutorialData. This scene is where the contents of the
 * tutorials are displayed.
 *
 * ---
 *
 * Background
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
 * Button Assist Vocab
 * 
 *   Change Page:
 *   - Vocabulary used for changing pages.
 *   - You may use text codes.
 * 
 *   Next Page:
 *   - Vocabulary used for moving to the next page.
 *   - You may use text codes.
 * 
 *   Done Tutorial:
 *   - Vocabulary used for being done with the tutorial.
 *   - You may use text codes.
 *
 * ---
 *
 * Windows > Pages Window
 * 
 *   Active Page Text:
 *   - Vocabulary used for active page.
 *   - You may use text codes.
 * 
 *   Inactive Page Text:
 *   - Vocabulary used for inactive page.
 *   - You may use text codes.
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Windows > Description Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Windows > Picture Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Windows > Title Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Scene_TutorialList Settings
 * ============================================================================
 *
 * Settings for Scene_TutorialList. This is the scene where the player can go
 * to reread previously viewed tutorials.
 *
 * ---
 *
 * Main Menu Settings
 * 
 *   Command Name:
 *   - Name of the 'Tutorials' option in the Main Menu.
 * 
 *   Show in Main Menu?:
 *   - Add the 'Tutorials' option to the Main Menu by default?
 * 
 *   Enable in Main Menu?:
 *   - Enable the 'Tutorials' option to the Main Menu by default?
 *
 * Background
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
 * Button Assist Vocab
 * 
 *   View Tutorial:
 *   - Text for viewing tutorial.
 * 
 *   Expand Category:
 *   - Text for expanding categories.
 * 
 *   Collapse Category:
 *   - Text for collapsing categories.
 *
 * ---
 *
 * Windows > List Window
 * 
 *   Open Categories:
 *   - Text format for an open category.
 *   - %1 - Category Name, %2 - Quest Amount
 * 
 *   Closed Categories:
 *   - Text format for an open category.
 *   - %1 - Category Name, %2 - Quest Amount
 * 
 *   Unlisted Category:
 *   - Text used for "unlisted" category.
 *   - You may use text codes.
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Scene_Battle Settings
 * ============================================================================
 *
 * Settings for Scene_Battle. This governs how tutorials appear in battle.
 *
 * ---
 *
 * Windows > Battle Status Window
 * 
 *   Hide During?:
 *   - Hide the battle status window during tutorials?
 *   - Does NOT affect VisuMZ_3_SideviewBattleUI!
 *
 * ---
 *
 * Windows > Pages Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Windows > Description Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Windows > Picture Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Windows > Title Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Settings
 * ============================================================================
 *
 * Options settings for this plugin.
 *
 * ---
 *
 * Options
 * 
 *   Add Option?:
 *   - Add the 'Tutorials' option to the Options menu?
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
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * Sound settings when changing tutorial pages.
 *
 * ---
 *
 * Sound
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
 * Version 1.01: April 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Command added by Arisu:
 * *** Debug: Full Tutorial List?
 * **** For playtest only! Allows you to fully view Tutorial.
 * **** Resets when the game client is closed.
 *
 * Version 1.00 Official Release Date: January 2, 2023
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
 * @command TutorialCall
 * @text Tutorial: Call
 * @desc Call forth a tutorial of the designated Tutorial ID Key.
 * Use on the map or battle scenes.
 *
 * @arg Key:str
 * @text Tutorial ID Key
 * @desc What is the tutorial identification key?
 * @default Untitled
 *
 * @arg ForceView:eval
 * @text Force View?
 * @type boolean
 * @on Force Open
 * @off Conditional
 * @desc Forcefully opens the tutorial regardless of the Options settings or if "Bypass if Registered?" is enabled.
 * @default false
 *
 * @arg BypassIfRegistered:eval
 * @text Bypass if Registered?
 * @type boolean
 * @on Bypass
 * @off Open Always
 * @desc Ignores opening the tutorial if the tutorial has already been viewed once.
 * @default false
 *
 * @arg RegisterTutorial:eval
 * @text Register Tutorial?
 * @type boolean
 * @on Register
 * @off Bypass
 * @desc Registers the tutorial to the Tutorial List that the player can revisit.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TutorialRegisterKeys
 * @text Tutorial: Register ID Key(s)
 * @desc Register specific Tutorial ID Key(s) without opening the tutorial.
 *
 * @arg KeyIDs:arraystr
 * @text Tutorial ID Key(s)
 * @type string[]
 * @desc Add which tutorial identification key(s)?
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Debug
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DebugFullTutorial
 * @text Debug: Full Tutorial List?
 * @desc For playtest only! Allows you to fully view Tutorial.
 * Resets when the game client is closed.
 *
 * @arg Reveal:eval
 * @text Reveal?
 * @type boolean
 * @on Reveal
 * @off Normal
 * @desc Fully reveals Tutorial list for playtesting.
 * Resets when the game client is closed.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableTutorialListMenu
 * @text System: Enable Tutorial List in Menu?
 * @desc Enables/disables "Tutorial List" menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables "Tutorial List" menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowTutorialListMenu
 * @text System: Show Tutorial List in Menu?
 * @desc Shows/hides "Tutorial List" inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides "Tutorial List" inside the main menu.
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
 * @param TutorialPanelSys
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Data
 *
 * @param Categories:arraystruct
 * @text Category List
 * @parent Data
 * @type struct<Category>[]
 * @desc List of categories that are used for this plugin.
 * @default ["{\"Key:str\":\"General\",\"Title:str\":\"\\\\C[4]General Tutorials\"}","{\"Key:str\":\"Battle\",\"Title:str\":\"\\\\C[6]Battle Tutorials\"}","{\"Key:str\":\"Field\",\"Title:str\":\"\\\\C[24]Field Tutorials\"}","{\"Key:str\":\"Menu\",\"Title:str\":\"\\\\C[5]Menu Tutorials\"}"]
 *
 * @param Tutorials:arraystruct
 * @text Tutorial List
 * @parent Data
 * @type struct<Tutorial>[]
 * @desc List of tutorials that are used for this plugin.
 * @default ["{\"Key:str\":\"Sample\",\"Title:str\":\"\\\\i[7]Sample Tutorial\",\"Category:str\":\"Unlisted\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This is a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]sample tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] description.\\\\\\\\\\\\\\\\nPress \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] and/or \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]right\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to change tutorial pages.\\\\\\\\\\\\\\\\nYou may use \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]text codes\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to highlight words.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This is \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]page 2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] of the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\nYou can use different pictures from the project's\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\img\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\pictures\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] folder to display for each page.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Press \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]LEFT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] or \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]RIGHT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to change between \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial pages\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\nYou can also press \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]Z\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to move the page forward.\\\\\\\\\\\\\\\\nPressing \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]X\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] will exit out of the tutorial completely.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"TutorialTips1\",\"Title:str\":\"\\\\I[84]Tip #1 - Usefulness\",\"Category:str\":\"General\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Here are some tips that we have for\\\\\\\\\\\\\\\\nmaking useful \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Provide \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]in-game screenshots\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to accompany the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\ndescriptions\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] for each \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial page\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] since players\\\\\\\\\\\\\\\\ntend to be more \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]visual learners\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"TutorialTips2\",\"Title:str\":\"\\\\I[87]Tip #2 - Legibility\",\"Category:str\":\"General\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Use text codes to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]highlight words\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] and/or \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]add icons\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to\\\\\\\\\\\\\\\\nthe \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial pages\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to make them more vivid\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\I[7].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_4\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Make sure the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]messages\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] for your \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial descriptions\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\nare \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]short\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] and \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]concise\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]Avoid\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] wordiness in order to\\\\\\\\\\\\\\\\nmake sure your \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial's message\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] gets across.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"TutorialTips3\",\"Title:str\":\"\\\\I[88]Tip #3 - Concise\",\"Category:str\":\"General\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_5\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Although you can have lots of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]pages\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] for each\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], keep the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]quantity\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] small. You don't want\\\\\\\\\\\\\\\\nto \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]overload\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] your players with too much information.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_6\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Make sure your \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] appear timely. Have them\\\\\\\\\\\\\\\\nappear right before the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]contents\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] of the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\ncan be practiced for \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]maximum impact\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"TutorialTips4\",\"Title:str\":\"\\\\I[89]Tip #4 - Retention\",\"Category:str\":\"General\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_7\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Players can revisit \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] from the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]Tutorial List\\\\\\\\\\\\\\\\nScene\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], but this should \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]never\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] be a requirement!\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_8\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Keep \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] sparse. You don't want one \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\npopping up right after another. Keeping them sparse\\\\\\\\\\\\\\\\nhelps players \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]retain\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] what they've learned.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"BattleTutorialTips1\",\"Title:str\":\"\\\\I[97]Tip #1 - Accessible\",\"Category:str\":\"Battle\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Use the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Tutorial: Call\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to open up a\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial panel\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] in \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]battle\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Unlike opening \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] elsewhere, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] that\\\\\\\\\\\\\\\\nare displayed in \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]battle\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] will not send the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to\\\\\\\\\\\\\\\\na \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]different scene\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] in order to preserve the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]battle\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"While the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] is open in \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]battle\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]battle\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] is\\\\\\\\\\\\\\\\nconsidered frozen and will \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]not\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] advance until the\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] finishes reading the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"BattleTutorialTips2\",\"Title:str\":\"\\\\I[98]Tip #2 - One Time\",\"Category:str\":\"Battle\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"As you already know, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] have to be launched in\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]battle\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] through the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Tutorial: Call\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_5\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This can be done through either the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Troop Events\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] or\\\\\\\\\\\\\\\\nskill/item \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Common Events\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_6\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"If they are repeatable \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Troop Events\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] or \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Common Events\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0],\\\\\\\\\\\\\\\\nthen we recommend using the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Bypass if Registered?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\nand \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Register Tutorial?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] options.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_7\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This will prevent the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] from popping up each\\\\\\\\\\\\\\\\ntime the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Troop Event\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] conditions are met or whenever\\\\\\\\\\\\\\\\nthe \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Common Event\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] actions are \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]triggered\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"BattleTutorialTips3\",\"Title:str\":\"\\\\I[99]Tip #3 - Action Sequences\",\"Category:str\":\"Battle\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_8\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"If a skill has a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]unique effect\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] added through an\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Action Sequence\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], throw in a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], too.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Do it either at the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]start\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] of the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Action Sequence\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] so\\\\\\\\\\\\\\\\nthat the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] knows what to look for.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"As the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]unique effect\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] occurs, the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] will have a\\\\\\\\\\\\\\\\nbetter understanding of what happened and ideally\\\\\\\\\\\\\\\\nlearned a whole \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]new\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] mechanic.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Remember to use the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Bypass if Registered?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] and\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Register Tutorial?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] options to prevent \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]unnecessary\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\nrepetition for future uses of the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]skill/item\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"FieldTutorialTips1\",\"Title:str\":\"\\\\I[181]Tip #1 - Map Call\",\"Category:str\":\"Field\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Calling a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] from the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]map scene\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can be done\\\\\\\\\\\\\\\\nthrough the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Tutorial: Call\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This will send the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]different\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] scene where\\\\\\\\\\\\\\\\nthe \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] is displayed in \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]private\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] so that there is\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]no\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] map \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]event interference\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"FieldTutorialTips2\",\"Title:str\":\"\\\\I[182]Tip #2 - Proximity\",\"Category:str\":\"Field\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"If you are using the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]VisuMZ Events & Movement Core\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0],\\\\\\\\\\\\\\\\nyou can take advantage of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]proximity\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]-based \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]event\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]activation triggers\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Notetags\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] like \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]<Activation Radius: x>\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] allow certain\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]events\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]trigger\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] upon the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] getting close.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_5\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This allows for \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]tutorial calls\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to pop up at more\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]relevant\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] times and positions so that the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] knows\\\\\\\\\\\\\\\\nwhat they're looking at and learning about.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"FieldTutorialTips3\",\"Title:str\":\"\\\\I[183]Tip #3 - Options\",\"Category:str\":\"Field\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_6\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Be sure to remind your \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] that there is an \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]option\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\nfound in the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Options scene\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]turn off\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_7\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Although \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can be very helpful, they \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]aren't\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\nalways \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]relevant\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]returning players\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] who may have\\\\\\\\\\\\\\\\nplayed your game \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]multiple\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] times.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"MenuTutorialTips1\",\"Title:str\":\"\\\\I[234]Tip #1 - Tutorial List\",\"Category:str\":\"Menu\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"When you call \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] using the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Tutorial: Call\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] and have the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Register Tutorial?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]option\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] set to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]true\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], that \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can be \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]revisited\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]Players\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can revisit \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] in the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]Main Menu\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]'s\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[189]Tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] command if it is \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]available\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"If there are \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]no\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] available for reading,\\\\\\\\\\\\\\\\nthen this \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]option\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] will be \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]disabled\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"MenuTutorialTips2\",\"Title:str\":\"\\\\I[233]Tip #2 - Registration\",\"Category:str\":\"Menu\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_4\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"You don't always have to throw \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] into your\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]players\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]' faces in order to register them.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_5\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"By using the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Tutorial: Register ID Key(s)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin\\\\\\\\\\\\\\\\nCommand\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], you can just \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]quietly\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] add \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to the\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Tutorial List\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] scene.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_6\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This is a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]great way\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to add \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] that may be a\\\\\\\\\\\\\\\\nbit more on the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]obscure\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] side that your \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]players\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] may\\\\\\\\\\\\\\\\nor may not need to read.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"MenuTutorialTips3\",\"Title:str\":\"\\\\I[232]Tip #3 - Libraries\",\"Category:str\":\"Menu\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_7\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Does your game feature a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]library\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] of some sort that\\\\\\\\\\\\\\\\nyour \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can read? \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]Transcribe\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]contents\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] into a\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] so that the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]read on the go\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]!\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor2_8\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"This is particularly \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]helpful\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] if there are \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]hints\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] and\\\\\\\\\\\\\\\\nsuch found in the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]library\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] books.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Set the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Force View?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]option\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]true\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to have the\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] be able to read the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]book\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] regardless of their\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Options settings\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]skip tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Key:str\":\"MenuTutorialTips4\",\"Title:str\":\"\\\\I[231]Tip #4 - Stored Hints\",\"Category:str\":\"Menu\",\"Pages:arraystruct\":\"[\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Do you have \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]puzzles\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] in your \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]game\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]? If so, you can use\\\\\\\\\\\\\\\\nthe \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Tutorial List\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to store \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]hints\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] that your \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] may\\\\\\\\\\\\\\\\nhave found across their playthrough.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]Silently\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] register hints through the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Tutorial: Register ID Key(s)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] so that your \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\ndoesn't need to be bombarded with them.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Filename:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\",\\\\\\\"Description:json\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"Adding \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]hints\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] in the form of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tutorials\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can help the\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[5]player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] save a few \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]backtracking\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] trips.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}"]
 * 
 * @param DefaultUnlocked:arraystr
 * @text Default Unlocks
 * @parent Tutorials:arraystruct
 * @type string[]
 * @desc List of ID Keys for tutorials that are already unlocked and viewable.
 * @default ["Sample","TutorialTips1","TutorialTips2","TutorialTips3","TutorialTips4","BattleTutorialTips1","BattleTutorialTips2","BattleTutorialTips3","FieldTutorialTips1","FieldTutorialTips2","FieldTutorialTips3","MenuTutorialTips1","MenuTutorialTips2","MenuTutorialTips3","MenuTutorialTips4"]
 * 
 * @param Scenes
 *
 * @param SceneTutorialData:struct
 * @text Scene_TutorialData
 * @parent Scenes
 * @type struct<SceneTutorialData>
 * @desc Settings for Scene_TutorialData.
 * @default {"Background":"","SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":"","Vocab":"","VocabChangePage:str":"Change Page","VocabNextPage:str":"Next","VocabDoneTutorial:str":"Done","Windows":"","Window_TutorialPages":"","VocabActivePage:str":"\\I[163]","VocabInactivePage:str":"\\I[161]","PageWindow_BgType:num":"2","PageWindow_RectJS:func":"\"const ww = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = this.mainAreaBottom() - wh;\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_TutorialDescription":"","DescWindow_BgType:num":"0","DescWindow_RectJS:func":"\"const ww = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\\nconst wh = this.calcWindowHeight(4, false);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = this.mainAreaBottom() - wh - this.calcWindowHeight(1, true);\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_TutorialPicture":"","PictureWindow_BgType:num":"2","PictureWindow_RectJS:func":"\"const descWindow = arguments[0];\\n\\nconst ww = descWindow.width;\\nconst wh = this.mainAreaHeight() - descWindow.height - this.calcWindowHeight(1, true);\\nconst wx = descWindow.x;\\nconst wy = this.mainAreaTop();\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_TutorialTitle":"","TitleWindow_BgType:num":"0","TitleWindow_RectJS:func":"\"const descWindow = arguments[0];\\n\\nconst ww = Math.max(descWindow.width - 300, 480);\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = descWindow.y - Math.floor(wh / 2);\\n\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param SceneTutorialList:struct
 * @text Scene_TutorialList
 * @parent Scenes
 * @type struct<SceneTutorialList>
 * @desc Settings for Scene_TutorialList.
 * @default {"MainMenu":"","MainMenuName:str":"Tutorials","ShowMainMenu:eval":"true","EnableMainMenu:eval":"true","Background":"","SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":"","Vocab":"","VocabView:str":"View","VocabExpand:str":"Expand","VocabCollapse:str":"Collapse","Windows":"","Window_TutorialList":"","VocabOpenCategory:str":"- %1(%2)","VocabClosedCategory:str":"+ %1(%2)","VocabUnlisted:str":"\\C[8]Uncategorized","ListWindow_BgType:num":"0","ListWindow_RectJS:func":"\"const fw = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\\nconst ww = Math.max(fw - 300, 480);\\nconst wh = this.calcWindowHeight(10, true);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = Math.floor((Graphics.boxHeight - wh) / 2);\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param SceneBattle:struct
 * @text Scene_Battle
 * @parent Scenes
 * @type struct<SceneBattle>
 * @desc Settings for Scene_Battle.
 * @default {"Windows":"","Window_BattleStatus":"","HideDuring:eval":"true","Window_TutorialPages":"","PageWindow_BgType:num":"2","PageWindow_RectJS:func":"\"const ww = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = Graphics.boxHeight - wh;\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_TutorialDescription":"","DescWindow_BgType:num":"0","DescWindow_RectJS:func":"\"const ww = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\\nconst wh = this.calcWindowHeight(4, false);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = Graphics.boxHeight - wh - this.calcWindowHeight(1, true);\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_TutorialPicture":"","PictureWindow_BgType:num":"2","PictureWindow_RectJS:func":"\"const descWindow = arguments[0];\\n\\nconst ww = descWindow.width;\\nconst wh = (Graphics.boxHeight - this.buttonAreaHeight()) - descWindow.height - this.calcWindowHeight(1, true);\\nconst wx = descWindow.x;\\nconst wy = this.buttonAreaHeight();\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_TutorialTitle":"","TitleWindow_BgType:num":"0","TitleWindow_RectJS:func":"\"const descWindow = arguments[0];\\n\\nconst ww = Math.max(descWindow.width - 300, 480);\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = descWindow.y - Math.floor(wh / 2);\\n\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param Options:struct
 * @text Options Settings
 * @parent Scenes
 * @type struct<Options>
 * @desc Options settings for this plugin.
 * @default {"Options":"","AddTutorialsOption:eval":"true","AdjustRect:eval":"true","Name:str":"Tutorials"}
 *
 * @param Sound:struct
 * @text Sound Settings
 * @parent Scenes
 * @type struct<Sound>
 * @desc Sound settings when changing tutorial pages.
 * @default {"name:str":"Book1","volume:num":"90","pitch:num":"120","pan:num":"0"}
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
 * Tutorial List Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Tutorial:
 *
 * @param Key:str
 * @text ID Key
 * @desc This tutorial's identification key. Tutorials require
 * unique keys for the plugin to differentiate them.
 * @default (Needs Key)
 *
 * @param Title:str
 * @text Title
 * @desc This tutorial's title. Displayed in a separate window.
 * You may use text codes.
 * @default Untitled
 *
 * @param Category:str
 * @text Category
 * @desc The category this tutorial is listed under.
 * If unlisted, the tutorial will be listed under "Unlisted".
 * @default Unlisted
 *
 * @param Pages:arraystruct
 * @text Pages
 * @type struct<Page>[]
 * @desc List of pages that are shown for this tutorial.
 * Pages are displayed in the order listed.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Page Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Page:
 *
 * @param Filename:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Displayed image associated with this page.
 * Found in the game project's /img/pictures/ folder.
 * @default Untitled
 *
 * @param Description:json
 * @text Description
 * @type note
 * @desc The description text displayed for this page.
 * Text codes are allowed.
 * @default "Line 1\nLine 2\nLine 3"
 *
 */
/* ----------------------------------------------------------------------------
 * Scene_TutorialData Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SceneTutorialData:
 *
 * @param Background
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @parent Background
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @parent Background
 * @type file
 * @dir img/titles1/
 * @require 1
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @parent Background
 * @type file
 * @dir img/titles2/
 * @require 1
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 * 
 * @param Vocab
 * @text Button Assist Vocab
 *
 * @param VocabChangePage:str
 * @text Change Page
 * @parent Vocab
 * @desc Vocabulary used for changing pages.
 * You may use text codes.
 * @default Change Page
 *
 * @param VocabNextPage:str
 * @text Next Page
 * @parent Vocab
 * @desc Vocabulary used for moving to the next page.
 * You may use text codes.
 * @default Next
 *
 * @param VocabDoneTutorial:str
 * @text Done Tutorial
 * @parent Vocab
 * @desc Vocabulary used for being done with the tutorial.
 * You may use text codes.
 * @default Done
 * 
 * @param Windows
 * 
 * @param Window_TutorialPages
 * @text Pages Window
 * @parent Windows
 *
 * @param VocabActivePage:str
 * @text Active Page Text
 * @parent Window_TutorialPages
 * @desc Vocabulary used for active page.
 * You may use text codes.
 * @default \I[163]
 *
 * @param VocabInactivePage:str
 * @text Inactive Page Text
 * @parent Window_TutorialPages
 * @desc Vocabulary used for inactive page.
 * You may use text codes.
 * @default \I[161]
 *
 * @param PageWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialPages
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 2
 *
 * @param PageWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialPages
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\nconst wh = this.calcWindowHeight(1, true);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = this.mainAreaBottom() - wh;\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_TutorialDescription
 * @text Description Window
 * @parent Windows
 *
 * @param DescWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialDescription
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
 * @param DescWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialDescription
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\nconst wh = this.calcWindowHeight(4, false);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = this.mainAreaBottom() - wh - this.calcWindowHeight(1, true);\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_TutorialPicture
 * @text Picture Window
 * @parent Windows
 *
 * @param PictureWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialPicture
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 2
 *
 * @param PictureWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialPicture
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const descWindow = arguments[0];\n\nconst ww = descWindow.width;\nconst wh = this.mainAreaHeight() - descWindow.height - this.calcWindowHeight(1, true);\nconst wx = descWindow.x;\nconst wy = this.mainAreaTop();\n\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_TutorialTitle
 * @text Title Window
 * @parent Windows
 *
 * @param TitleWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialTitle
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
 * @param TitleWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialTitle
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const descWindow = arguments[0];\n\nconst ww = Math.max(descWindow.width - 300, 480);\nconst wh = this.calcWindowHeight(1, false);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = descWindow.y - Math.floor(wh / 2);\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Scene_TutorialList Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SceneTutorialList:
 *
 * @param MainMenu
 * @text Main Menu Settings
 *
 * @param MainMenuName:str
 * @text Command Name
 * @parent MainMenu
 * @desc Name of the 'Tutorials' option in the Main Menu.
 * @default Tutorials
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @parent MainMenu
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Tutorials' option to the Main Menu by default?
 * @default true
 *
 * @param EnableMainMenu:eval
 * @text Enable in Main Menu?
 * @parent MainMenu
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the 'Tutorials' option to the Main Menu by default?
 * @default true
 *
 * @param Background
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @parent Background
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @parent Background
 * @type file
 * @dir img/titles1/
 * @require 1
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @parent Background
 * @type file
 * @dir img/titles2/
 * @require 1
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 * 
 * @param Vocab
 * @text Button Assist Vocab
 * 
 * @param VocabView:str
 * @text View Tutorial
 * @parent Vocab
 * @desc Text for viewing tutorial.
 * @default View
 * 
 * @param VocabExpand:str
 * @text Expand Category
 * @parent Vocab
 * @desc Text for expanding categories.
 * @default Expand
 *
 * @param VocabCollapse:str
 * @text Collapse Category
 * @parent Vocab
 * @desc Text for collapsing categories.
 * @default Collapse
 * 
 * @param Windows
 * 
 * @param Window_TutorialList
 * @text List Window
 * @parent Windows
 *
 * @param VocabOpenCategory:str
 * @text Open Categories
 * @parent Window_TutorialList
 * @desc Text format for an open category.
 * %1 - Category Name, %2 - Quest Amount
 * @default - %1(%2)
 *
 * @param VocabClosedCategory:str
 * @text Closed Categories
 * @parent Window_TutorialList
 * @desc Text format for an open category.
 * %1 - Category Name, %2 - Quest Amount
 * @default + %1(%2)
 *
 * @param VocabUnlisted:str
 * @text Unlisted Category
 * @parent Window_TutorialList
 * @desc Text used for "unlisted" category.
 * You may use text codes.
 * @default \C[8]Uncategorized
 *
 * @param ListWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialList
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
 * @param ListWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialList
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const fw = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\nconst ww = Math.max(fw - 300, 480);\nconst wh = this.calcWindowHeight(10, true);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = Math.floor((Graphics.boxHeight - wh) / 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Scene_Battle Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SceneBattle:
 *
 * @param Windows
 * 
 * @param Window_BattleStatus
 * @text Battle Status Window
 * @parent Windows
 *
 * @param HideDuring:eval
 * @text Hide During?
 * @parent Window_BattleStatus
 * @type boolean
 * @on Hide
 * @off Normal
 * @desc Hide the battle status window during tutorials?
 * Does NOT affect VisuMZ_3_SideviewBattleUI!
 * @default true
 * 
 * @param Window_TutorialPages
 * @text Pages Window
 * @parent Windows
 *
 * @param PageWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialPages
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 2
 *
 * @param PageWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialPages
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\nconst wh = this.calcWindowHeight(1, true);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = Graphics.boxHeight - wh;\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_TutorialDescription
 * @text Description Window
 * @parent Windows
 *
 * @param DescWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialDescription
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
 * @param DescWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialDescription
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.max(720, Math.floor(Graphics.boxWidth * 0.75));\nconst wh = this.calcWindowHeight(4, false);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = Graphics.boxHeight - wh - this.calcWindowHeight(1, true);\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_TutorialPicture
 * @text Picture Window
 * @parent Windows
 *
 * @param PictureWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialPicture
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 2
 *
 * @param PictureWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialPicture
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const descWindow = arguments[0];\n\nconst ww = descWindow.width;\nconst wh = (Graphics.boxHeight - this.buttonAreaHeight()) - descWindow.height - this.calcWindowHeight(1, true);\nconst wx = descWindow.x;\nconst wy = this.buttonAreaHeight();\n\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_TutorialTitle
 * @text Title Window
 * @parent Windows
 *
 * @param TitleWindow_BgType:num
 * @text Background Type
 * @parent Window_TutorialTitle
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
 * @param TitleWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_TutorialTitle
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const descWindow = arguments[0];\n\nconst ww = Math.max(descWindow.width - 300, 480);\nconst wh = this.calcWindowHeight(1, false);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = descWindow.y - Math.floor(wh / 2);\n\nreturn new Rectangle(wx, wy, ww, wh);"
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
 * @param AddTutorialsOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Tutorials' option to the Options menu?
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
 * @default Tutorials
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
 * @default Book1
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
 * @default 120
 *
 * @param pan:num
 * @text Pan
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
//=============================================================================

const _0x45f21b=_0x2da2;(function(_0x535efc,_0x51cfac){const _0x4b7bd3=_0x2da2,_0xd30642=_0x535efc();while(!![]){try{const _0x534870=parseInt(_0x4b7bd3(0x1a6))/0x1*(-parseInt(_0x4b7bd3(0x29c))/0x2)+parseInt(_0x4b7bd3(0x2bb))/0x3*(parseInt(_0x4b7bd3(0x245))/0x4)+parseInt(_0x4b7bd3(0x22b))/0x5*(parseInt(_0x4b7bd3(0x1d4))/0x6)+-parseInt(_0x4b7bd3(0x1b1))/0x7+-parseInt(_0x4b7bd3(0x213))/0x8*(-parseInt(_0x4b7bd3(0x2d2))/0x9)+-parseInt(_0x4b7bd3(0x2ed))/0xa*(-parseInt(_0x4b7bd3(0x1dc))/0xb)+-parseInt(_0x4b7bd3(0x1ef))/0xc;if(_0x534870===_0x51cfac)break;else _0xd30642['push'](_0xd30642['shift']());}catch(_0x158ead){_0xd30642['push'](_0xd30642['shift']());}}}(_0x4954,0x6afee));var label=_0x45f21b(0x1f0),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x297c78){const _0x91a4cf=_0x45f21b;return _0x297c78[_0x91a4cf(0x2b7)]&&_0x297c78[_0x91a4cf(0x2d8)][_0x91a4cf(0x24b)]('['+label+']');})[0x0];VisuMZ[label][_0x45f21b(0x215)]=VisuMZ[label][_0x45f21b(0x215)]||{},VisuMZ[_0x45f21b(0x219)]=function(_0x16f46d,_0x294c1e){const _0x13a2ff=_0x45f21b;for(const _0x162405 in _0x294c1e){if(_0x13a2ff(0x1e4)!==_0x13a2ff(0x1c9)){if(_0x162405[_0x13a2ff(0x209)](/(.*):(.*)/i)){const _0x800d4a=String(RegExp['$1']),_0x55f914=String(RegExp['$2'])[_0x13a2ff(0x253)]()[_0x13a2ff(0x30c)]();let _0x64d2ae,_0x52be5b,_0x157759;switch(_0x55f914){case _0x13a2ff(0x294):_0x64d2ae=_0x294c1e[_0x162405]!==''?Number(_0x294c1e[_0x162405]):0x0;break;case _0x13a2ff(0x281):_0x52be5b=_0x294c1e[_0x162405]!==''?JSON['parse'](_0x294c1e[_0x162405]):[],_0x64d2ae=_0x52be5b[_0x13a2ff(0x307)](_0x18daf7=>Number(_0x18daf7));break;case _0x13a2ff(0x212):_0x64d2ae=_0x294c1e[_0x162405]!==''?eval(_0x294c1e[_0x162405]):null;break;case _0x13a2ff(0x31a):_0x52be5b=_0x294c1e[_0x162405]!==''?JSON['parse'](_0x294c1e[_0x162405]):[],_0x64d2ae=_0x52be5b[_0x13a2ff(0x307)](_0x3baf61=>eval(_0x3baf61));break;case _0x13a2ff(0x226):_0x64d2ae=_0x294c1e[_0x162405]!==''?JSON[_0x13a2ff(0x2ff)](_0x294c1e[_0x162405]):'';break;case _0x13a2ff(0x26d):_0x52be5b=_0x294c1e[_0x162405]!==''?JSON['parse'](_0x294c1e[_0x162405]):[],_0x64d2ae=_0x52be5b[_0x13a2ff(0x307)](_0x2b7b90=>JSON[_0x13a2ff(0x2ff)](_0x2b7b90));break;case _0x13a2ff(0x2a1):_0x64d2ae=_0x294c1e[_0x162405]!==''?new Function(JSON[_0x13a2ff(0x2ff)](_0x294c1e[_0x162405])):new Function(_0x13a2ff(0x308));break;case _0x13a2ff(0x1c8):_0x52be5b=_0x294c1e[_0x162405]!==''?JSON[_0x13a2ff(0x2ff)](_0x294c1e[_0x162405]):[],_0x64d2ae=_0x52be5b[_0x13a2ff(0x307)](_0x4071b9=>new Function(JSON[_0x13a2ff(0x2ff)](_0x4071b9)));break;case _0x13a2ff(0x224):_0x64d2ae=_0x294c1e[_0x162405]!==''?String(_0x294c1e[_0x162405]):'';break;case'ARRAYSTR':_0x52be5b=_0x294c1e[_0x162405]!==''?JSON[_0x13a2ff(0x2ff)](_0x294c1e[_0x162405]):[],_0x64d2ae=_0x52be5b['map'](_0x296bfe=>String(_0x296bfe));break;case'STRUCT':_0x157759=_0x294c1e[_0x162405]!==''?JSON[_0x13a2ff(0x2ff)](_0x294c1e[_0x162405]):{},_0x64d2ae=VisuMZ[_0x13a2ff(0x219)]({},_0x157759);break;case _0x13a2ff(0x2c0):_0x52be5b=_0x294c1e[_0x162405]!==''?JSON[_0x13a2ff(0x2ff)](_0x294c1e[_0x162405]):[],_0x64d2ae=_0x52be5b[_0x13a2ff(0x307)](_0x5da17=>VisuMZ['ConvertParams']({},JSON[_0x13a2ff(0x2ff)](_0x5da17)));break;default:continue;}_0x16f46d[_0x800d4a]=_0x64d2ae;}}else this[_0x13a2ff(0x25f)]=_0x245bbb;}return _0x16f46d;},(_0x218865=>{const _0x4fa0f4=_0x45f21b,_0x5c21fa=_0x218865[_0x4fa0f4(0x2d1)];for(const _0x21ddce of dependencies){if(_0x4fa0f4(0x2b5)!==_0x4fa0f4(0x1d5)){if(!Imported[_0x21ddce]){alert(_0x4fa0f4(0x1e0)[_0x4fa0f4(0x266)](_0x5c21fa,_0x21ddce)),SceneManager[_0x4fa0f4(0x2fb)]();break;}}else{if(this[_0x4fa0f4(0x1d7)]==='tutorial')return!![];return _0x4a90cc[_0x4fa0f4(0x1f0)][_0x4fa0f4(0x22d)][_0x4fa0f4(0x310)](this);}}const _0x2bdf23=_0x218865[_0x4fa0f4(0x2d8)];if(_0x2bdf23[_0x4fa0f4(0x209)](/\[Version[ ](.*?)\]/i)){const _0x1ac0a4=Number(RegExp['$1']);if(_0x1ac0a4!==VisuMZ[label][_0x4fa0f4(0x1f2)]){if('qLLSV'!=='qLLSV')return _0x414fe3[_0x4fa0f4(0x2ec)]['activePage'];else alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x4fa0f4(0x266)](_0x5c21fa,_0x1ac0a4)),SceneManager[_0x4fa0f4(0x2fb)]();}}if(_0x2bdf23[_0x4fa0f4(0x209)](/\[Tier[ ](\d+)\]/i)){const _0x41b06a=Number(RegExp['$1']);if(_0x41b06a<tier)alert(_0x4fa0f4(0x2b8)[_0x4fa0f4(0x266)](_0x5c21fa,_0x41b06a,tier)),SceneManager[_0x4fa0f4(0x2fb)]();else{if('xbEyx'!==_0x4fa0f4(0x290))tier=Math[_0x4fa0f4(0x271)](_0x41b06a,tier);else return this[_0x4fa0f4(0x1fc)][_0x4fa0f4(0x302)](_0x1979c6=>_0x1979c6[_0x4fa0f4(0x2da)]===_0x1c8ee8&&_0x1979c6[_0x4fa0f4(0x2d5)]===_0x18fb77);}}VisuMZ[_0x4fa0f4(0x219)](VisuMZ[label]['Settings'],_0x218865[_0x4fa0f4(0x289)]);})(pluginData),PluginManager[_0x45f21b(0x1eb)](pluginData['name'],_0x45f21b(0x248),_0x5f2e24=>{const _0x597886=_0x45f21b;VisuMZ['ConvertParams'](_0x5f2e24,_0x5f2e24);const _0x3b750d=_0x5f2e24[_0x597886(0x299)],_0x56fdf8=_0x5f2e24[_0x597886(0x1d3)],_0x3ada39=_0x5f2e24['BypassIfRegistered'],_0x26ad61=_0x5f2e24['RegisterTutorial'];if(VisuMZ[_0x597886(0x1f0)]['isValidTutorial'](_0x3b750d)){if(!_0x56fdf8&&_0x3ada39&&$gameSystem[_0x597886(0x204)](_0x3b750d)){if(_0x597886(0x199)!==_0x597886(0x199)){if(_0x460e7a['TutorialPanelSys'][_0x597886(0x215)][_0x597886(0x2cf)]['PictureWindow_RectJS'])return _0x2a16a5[_0x597886(0x1f0)]['Settings'][_0x597886(0x2cf)][_0x597886(0x201)]['call'](this,this[_0x597886(0x1c2)]);const _0x271f27=this[_0x597886(0x1c2)],_0x33420e=_0x271f27[_0x597886(0x2e2)],_0x46aa2e=this[_0x597886(0x1f7)]()-_0x271f27['height']-this[_0x597886(0x21f)](0x1,!![]),_0x4d1e7f=_0x271f27['x'],_0x21c203=this[_0x597886(0x1fa)]();return new _0x1b2a62(_0x4d1e7f,_0x21c203,_0x33420e,_0x46aa2e);}else return;}if(_0x56fdf8||ConfigManager[_0x597886(0x1b4)]){if(_0x597886(0x2aa)!==_0x597886(0x2aa)){if(this[_0x597886(0x2f0)]===_0x442237)this['initTutorialPanelSysMainMenu']();return this[_0x597886(0x2f0)][_0x597886(0x31c)];}else $gameTemp[_0x597886(0x1b9)](_0x3b750d);}_0x26ad61&&$gameSystem[_0x597886(0x306)](_0x3b750d);}}),PluginManager[_0x45f21b(0x1eb)](pluginData[_0x45f21b(0x2d1)],_0x45f21b(0x31e),_0xe10d71=>{const _0x149bca=_0x45f21b;VisuMZ['ConvertParams'](_0xe10d71,_0xe10d71);const _0x20477a=_0xe10d71[_0x149bca(0x283)];for(const _0x57e998 of _0x20477a){_0x149bca(0x30b)===_0x149bca(0x28d)?(this[_0x149bca(0x2a5)][_0x149bca(0x287)](),this['_tutorialPictureWindow'][_0x149bca(0x316)](!![]),this['_tutorialPictureWindow']['refresh']()):$gameSystem[_0x149bca(0x306)](_0x57e998);}}),PluginManager[_0x45f21b(0x1eb)](pluginData[_0x45f21b(0x2d1)],_0x45f21b(0x1d0),_0x4286d9=>{const _0xa10a04=_0x45f21b;if(!$gameTemp[_0xa10a04(0x2e8)]())return;VisuMZ['ConvertParams'](_0x4286d9,_0x4286d9),$gameTemp[_0xa10a04(0x25a)](_0x4286d9[_0xa10a04(0x1db)]);}),PluginManager[_0x45f21b(0x1eb)](pluginData[_0x45f21b(0x2d1)],_0x45f21b(0x2ad),_0x4d6db9=>{const _0x5df398=_0x45f21b;VisuMZ['ConvertParams'](_0x4d6db9,_0x4d6db9),$gameSystem[_0x5df398(0x1ee)](_0x4d6db9['Enable']);}),PluginManager[_0x45f21b(0x1eb)](pluginData['name'],_0x45f21b(0x1af),_0x42e95c=>{const _0x88b809=_0x45f21b;VisuMZ[_0x88b809(0x219)](_0x42e95c,_0x42e95c),$gameSystem[_0x88b809(0x220)](_0x42e95c[_0x88b809(0x2e4)]);}),VisuMZ['TutorialPanelSys']['Scene_Boot_onDatabaseLoaded']=Scene_Boot['prototype']['onDatabaseLoaded'],Scene_Boot[_0x45f21b(0x288)][_0x45f21b(0x282)]=function(){const _0x20712b=_0x45f21b;VisuMZ[_0x20712b(0x1f0)][_0x20712b(0x1f1)][_0x20712b(0x310)](this),this[_0x20712b(0x221)]();},Scene_Boot['prototype'][_0x45f21b(0x221)]=function(){const _0x4dacad=_0x45f21b;this[_0x4dacad(0x20c)](),this[_0x4dacad(0x274)]();},Scene_Boot[_0x45f21b(0x288)][_0x45f21b(0x20c)]=function(){const _0xd56a89=_0x45f21b;VisuMZ[_0xd56a89(0x1f0)][_0xd56a89(0x242)]=[_0xd56a89(0x1fe)],VisuMZ['TutorialPanelSys'][_0xd56a89(0x1fb)]={},VisuMZ[_0xd56a89(0x1f0)]['CategoryTutorials']={},VisuMZ['TutorialPanelSys']['CategoryTutorials'][_0xd56a89(0x1fe)]=[];const _0x2eb486=VisuMZ[_0xd56a89(0x1f0)]['Settings'][_0xd56a89(0x2e9)];for(const _0x10ac01 of _0x2eb486){const _0x4486b5=(_0x10ac01[_0xd56a89(0x299)]||'')[_0xd56a89(0x304)]()[_0xd56a89(0x30c)]();if(_0x4486b5==='')continue;if(_0x4486b5===_0xd56a89(0x2ca))continue;VisuMZ[_0xd56a89(0x1f0)][_0xd56a89(0x242)][_0xd56a89(0x29b)](_0x4486b5),VisuMZ[_0xd56a89(0x1f0)][_0xd56a89(0x1fb)][_0x4486b5]=_0x10ac01,VisuMZ[_0xd56a89(0x1f0)][_0xd56a89(0x301)][_0x4486b5]=[];}},Scene_Boot[_0x45f21b(0x288)][_0x45f21b(0x274)]=function(){const _0x3d34d7=_0x45f21b;VisuMZ[_0x3d34d7(0x1f0)][_0x3d34d7(0x246)]={},VisuMZ[_0x3d34d7(0x1f0)][_0x3d34d7(0x25e)]=[];const _0x108989=VisuMZ['TutorialPanelSys']['Settings'][_0x3d34d7(0x246)];for(const _0xf14e62 of _0x108989){const _0x2c8876=(_0xf14e62[_0x3d34d7(0x299)]||'')['toLowerCase']()[_0x3d34d7(0x30c)]();if(_0x2c8876==='')continue;if(_0x2c8876===_0x3d34d7(0x2ca))continue;VisuMZ[_0x3d34d7(0x1f0)][_0x3d34d7(0x246)][_0x2c8876]=_0xf14e62,VisuMZ[_0x3d34d7(0x1f0)][_0x3d34d7(0x25e)][_0x3d34d7(0x29b)](_0x2c8876);const _0x234ff9=(_0xf14e62[_0x3d34d7(0x2fd)]||'')[_0x3d34d7(0x304)]()[_0x3d34d7(0x30c)]();VisuMZ[_0x3d34d7(0x1f0)]['CategoryTutorials'][_0x234ff9]?VisuMZ[_0x3d34d7(0x1f0)]['CategoryTutorials'][_0x234ff9][_0x3d34d7(0x29b)](_0x2c8876):VisuMZ[_0x3d34d7(0x1f0)]['CategoryTutorials'][_0x3d34d7(0x1fe)][_0x3d34d7(0x29b)](_0x2c8876);}},VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x273)]=function(_0x59e84d){const _0x137a7d=_0x45f21b;return _0x59e84d=_0x59e84d[_0x137a7d(0x304)]()[_0x137a7d(0x30c)](),VisuMZ[_0x137a7d(0x1f0)][_0x137a7d(0x25e)][_0x137a7d(0x24b)](_0x59e84d);},ConfigManager[_0x45f21b(0x1b4)]=!![],VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x195)]=ConfigManager['makeData'],ConfigManager['makeData']=function(){const _0x248386=_0x45f21b,_0x5861e7=VisuMZ[_0x248386(0x1f0)][_0x248386(0x195)][_0x248386(0x310)](this);return _0x5861e7[_0x248386(0x1b4)]=this[_0x248386(0x1b4)],_0x5861e7;},VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x1bc)]=ConfigManager['applyData'],ConfigManager[_0x45f21b(0x20b)]=function(_0x4f1859){const _0x5a22b2=_0x45f21b;VisuMZ[_0x5a22b2(0x1f0)]['ConfigManager_applyData'][_0x5a22b2(0x310)](this,_0x4f1859),this['readFlag'](_0x4f1859,_0x5a22b2(0x1b4),!![]);if(_0x5a22b2(0x1b4)in _0x4f1859)this[_0x5a22b2(0x1b4)]=_0x4f1859[_0x5a22b2(0x1b4)];else{if(_0x5a22b2(0x240)!==_0x5a22b2(0x278))this['showTutorials']=!![];else{if(!_0x537fc9[_0x5a22b2(0x1f0)][_0x5a22b2(0x273)](_0x74f3f))return![];if(_0x13eb3f['canDebugViewTutorialList']())return!![];return _0x3f7465['isTutorialKeyRegistered'](_0x574d58);}}},SoundManager['playTutorialPageChange']=function(){const _0x5c1c20=_0x45f21b,_0x21f543=VisuMZ[_0x5c1c20(0x1f0)][_0x5c1c20(0x215)][_0x5c1c20(0x1f5)],_0x4a0851={'name':_0x21f543[_0x5c1c20(0x2d1)],'volume':_0x21f543['volume'],'pitch':_0x21f543['pitch'],'pan':_0x21f543['pan']};AudioManager[_0x5c1c20(0x1ce)](_0x4a0851);},TextManager[_0x45f21b(0x2ec)]={'changePage':VisuMZ[_0x45f21b(0x1f0)]['Settings']['SceneTutorialData']['VocabChangePage'],'nextPage':VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x215)][_0x45f21b(0x2cf)][_0x45f21b(0x297)],'finish':VisuMZ['TutorialPanelSys'][_0x45f21b(0x215)][_0x45f21b(0x2cf)]['VocabDoneTutorial'],'view':VisuMZ['TutorialPanelSys'][_0x45f21b(0x215)][_0x45f21b(0x2c2)][_0x45f21b(0x2d0)],'expand':VisuMZ['TutorialPanelSys'][_0x45f21b(0x215)][_0x45f21b(0x2c2)][_0x45f21b(0x2a7)],'collapse':VisuMZ[_0x45f21b(0x1f0)]['Settings']['SceneTutorialList']['VocabCollapse'],'activePage':VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x215)][_0x45f21b(0x2cf)][_0x45f21b(0x1b2)],'inactivePage':VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x215)]['SceneTutorialData'][_0x45f21b(0x1ac)],'optionsCmd':VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x215)]['Options'][_0x45f21b(0x2eb)],'menuCmd':VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x215)][_0x45f21b(0x2c2)][_0x45f21b(0x2d3)],'openCategoriesFmt':VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x215)][_0x45f21b(0x2c2)]['VocabOpenCategory'],'closedCategoriesFmt':VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x215)][_0x45f21b(0x2c2)][_0x45f21b(0x276)],'unlisted':VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x215)][_0x45f21b(0x2c2)][_0x45f21b(0x1b7)]},SceneManager[_0x45f21b(0x1a1)]=function(){const _0x4e23fb=_0x45f21b;return this[_0x4e23fb(0x1dd)]&&this[_0x4e23fb(0x1dd)][_0x4e23fb(0x272)]===Scene_Battle;},SceneManager[_0x45f21b(0x259)]=function(){const _0x3580a4=_0x45f21b;return this[_0x3580a4(0x1dd)]&&this['_scene']['constructor']===Scene_Map;},Game_Temp[_0x45f21b(0x288)][_0x45f21b(0x1b9)]=function(_0x34f1c1){const _0x51f7b7=_0x45f21b;if(!VisuMZ[_0x51f7b7(0x1f0)][_0x51f7b7(0x273)](_0x34f1c1))return;this['_tutorialKey']=_0x34f1c1;if(SceneManager[_0x51f7b7(0x1a1)]()){if(_0x51f7b7(0x29a)===_0x51f7b7(0x29a)){const _0x2d7e2a=SceneManager[_0x51f7b7(0x1dd)];_0x2d7e2a[_0x51f7b7(0x1b9)](_0x34f1c1);}else{const _0x5a6ed2=_0x4b3b49(_0x1197af['$1']);_0x5a6ed2<_0x3286d9?(_0x22a4f5('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x4bcff5,_0x5a6ed2,_0x4d8678)),_0x48b909[_0x51f7b7(0x2fb)]()):_0x2f6c13=_0x2b4c74[_0x51f7b7(0x271)](_0x5a6ed2,_0x475899);}}else{SceneManager['push'](Scene_TutorialData);const _0x3e57fe=this[_0x51f7b7(0x264)]();if(_0x3e57fe){if('gqezl'!==_0x51f7b7(0x23e)){let _0x212569=this[_0x51f7b7(0x23b)][_0x51f7b7(0x249)]()+0x1;_0x212569>=this['tutorialPages']()[_0x51f7b7(0x1d6)]?(_0x160abe[_0x51f7b7(0x254)](),this['popScene']()):(this[_0x51f7b7(0x23b)][_0x51f7b7(0x295)](),this['_pageWindow'][_0x51f7b7(0x234)](_0x212569));}else _0x3e57fe[_0x51f7b7(0x1ad)](0xa);}}},Game_Temp[_0x45f21b(0x288)][_0x45f21b(0x24e)]=function(_0x567103){const _0x3408c8=_0x45f21b;this[_0x3408c8(0x1cc)]=_0x567103;},Game_Temp[_0x45f21b(0x288)][_0x45f21b(0x264)]=function(){const _0x4467c9=_0x45f21b;return this[_0x4467c9(0x1cc)];},VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x2e5)]=Game_Interpreter['prototype'][_0x45f21b(0x252)],Game_Interpreter[_0x45f21b(0x288)][_0x45f21b(0x252)]=function(_0x77c9c6){const _0x3776e8=_0x45f21b;return $gameTemp[_0x3776e8(0x24e)](this),VisuMZ[_0x3776e8(0x1f0)][_0x3776e8(0x2e5)][_0x3776e8(0x310)](this,_0x77c9c6);},Game_Temp['prototype'][_0x45f21b(0x27d)]=function(){const _0xac5358=_0x45f21b;return this['isPlaytest']()&&this[_0xac5358(0x25f)];},Game_Temp['prototype'][_0x45f21b(0x25a)]=function(_0x429cb6){const _0x596727=_0x45f21b;this[_0x596727(0x25f)]=_0x429cb6;},VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x26e)]=Game_System[_0x45f21b(0x288)]['initialize'],Game_System[_0x45f21b(0x288)][_0x45f21b(0x1cd)]=function(){const _0x398c8e=_0x45f21b;VisuMZ[_0x398c8e(0x1f0)][_0x398c8e(0x26e)][_0x398c8e(0x310)](this),this['initTutorialPanelSysMainMenu'](),this[_0x398c8e(0x239)]();},Game_System[_0x45f21b(0x288)][_0x45f21b(0x286)]=function(){const _0x5aad58=_0x45f21b;this[_0x5aad58(0x2f0)]={'shown':VisuMZ[_0x5aad58(0x1f0)][_0x5aad58(0x215)]['SceneTutorialList'][_0x5aad58(0x241)],'enabled':VisuMZ['TutorialPanelSys'][_0x5aad58(0x215)][_0x5aad58(0x2c2)][_0x5aad58(0x315)]};},Game_System['prototype'][_0x45f21b(0x2a6)]=function(){const _0x54272f=_0x45f21b;if(this[_0x54272f(0x2f0)]===undefined)this[_0x54272f(0x286)]();return this[_0x54272f(0x2f0)]['shown'];},Game_System[_0x45f21b(0x288)][_0x45f21b(0x220)]=function(_0xebac21){const _0x3db7ee=_0x45f21b;if(this[_0x3db7ee(0x2f0)]===undefined)this['initTutorialPanelSysMainMenu']();this[_0x3db7ee(0x2f0)]['shown']=_0xebac21;},Game_System[_0x45f21b(0x288)]['isMainMenuTutorialListEnabled']=function(){const _0x4eaa57=_0x45f21b;if(this[_0x4eaa57(0x2f0)]===undefined)this[_0x4eaa57(0x286)]();if(!this[_0x4eaa57(0x19b)])return![];if(this[_0x4eaa57(0x19b)][_0x4eaa57(0x1d6)]<=0x0)return![];return this[_0x4eaa57(0x2f0)]['enabled'];},Game_System[_0x45f21b(0x288)][_0x45f21b(0x1ee)]=function(_0x430674){const _0x122ce9=_0x45f21b;if(this[_0x122ce9(0x2f0)]===undefined)this['initTutorialPanelSysMainMenu']();this[_0x122ce9(0x2f0)][_0x122ce9(0x261)]=_0x430674;},Game_System[_0x45f21b(0x288)]['initTutorialPanelSysSettings']=function(){const _0x4c19de=_0x45f21b;this['_visibleTutorialKeys']=this[_0x4c19de(0x19b)]||[];const _0x2811cc=VisuMZ[_0x4c19de(0x1f0)][_0x4c19de(0x215)]['DefaultUnlocked'];for(const _0xc94eb1 of _0x2811cc){if(_0x4c19de(0x1be)===_0x4c19de(0x1aa)){if(this['isWheelScrollEnabled']()&&!this[_0x4c19de(0x214)]()){const _0x3420e7=0x14;if(_0x514010[_0x4c19de(0x23a)]>=_0x3420e7){const _0x2dfa08=_0x4dc073[_0x4c19de(0x203)](this['index']()+0x1,this[_0x4c19de(0x23c)]()-0x1);this['select'](_0x2dfa08);}if(_0x28a2b6[_0x4c19de(0x23a)]<=-_0x3420e7){const _0x2293aa=_0x81777[_0x4c19de(0x271)](this[_0x4c19de(0x249)]()-0x1,0x0);this[_0x4c19de(0x234)](_0x2293aa);}}}else this[_0x4c19de(0x306)](_0xc94eb1);}},Game_System[_0x45f21b(0x288)][_0x45f21b(0x306)]=function(_0x366409){const _0x4f7ceb=_0x45f21b;if(this[_0x4f7ceb(0x19b)]===undefined)this[_0x4f7ceb(0x239)]();_0x366409=_0x366409[_0x4f7ceb(0x304)]()['trim']();if(VisuMZ['TutorialPanelSys'][_0x4f7ceb(0x273)](_0x366409)&&!this[_0x4f7ceb(0x204)](_0x366409)){if(_0x4f7ceb(0x1d1)!==_0x4f7ceb(0x1d1))return 0x0;else this[_0x4f7ceb(0x19b)]['push'](_0x366409);}},Game_System[_0x45f21b(0x288)][_0x45f21b(0x277)]=function(_0x2cb6ca){const _0x23a552=_0x45f21b;if(this[_0x23a552(0x19b)]===undefined)this[_0x23a552(0x239)]();_0x2cb6ca=_0x2cb6ca[_0x23a552(0x304)]()[_0x23a552(0x30c)](),this['_visibleTutorialKeys'][_0x23a552(0x24d)](_0x2cb6ca);},Game_System[_0x45f21b(0x288)][_0x45f21b(0x204)]=function(_0x12b367){const _0x1e5936=_0x45f21b;if(this[_0x1e5936(0x19b)]===undefined)this[_0x1e5936(0x239)]();return _0x12b367=_0x12b367[_0x1e5936(0x304)]()[_0x1e5936(0x30c)](),this[_0x1e5936(0x19b)][_0x1e5936(0x24b)](_0x12b367);},Game_System[_0x45f21b(0x288)][_0x45f21b(0x291)]=function(_0x36b2db){const _0x5a0686=_0x45f21b;_0x36b2db=_0x36b2db[_0x5a0686(0x304)]()['trim']();if(!VisuMZ[_0x5a0686(0x1f0)]['CategoryTutorials'][_0x36b2db])return![];const _0x11c6b7=VisuMZ[_0x5a0686(0x1f0)][_0x5a0686(0x301)][_0x36b2db];for(const _0x245835 of _0x11c6b7){if('QpOlo'===_0x5a0686(0x1f6)){if(this[_0x5a0686(0x204)](_0x245835))return!![];}else{if(_0x39d9d5[_0x5a0686(0x1f0)][_0x5a0686(0x215)][_0x5a0686(0x2f4)][_0x5a0686(0x1ab)])return _0x5154e7[_0x5a0686(0x1f0)][_0x5a0686(0x215)][_0x5a0686(0x2f4)][_0x5a0686(0x1ab)][_0x5a0686(0x310)](this);const _0x27a65d=_0x2ae499[_0x5a0686(0x271)](0x2d0,_0xb1fb9e[_0x5a0686(0x23d)](_0x2be465[_0x5a0686(0x1c7)]*0.75)),_0x456cd8=this[_0x5a0686(0x21f)](0x4,![]),_0x2916b8=_0x16989f[_0x5a0686(0x23d)]((_0xd709fb[_0x5a0686(0x1c7)]-_0x27a65d)/0x2),_0x27b2aa=_0x1e8183['boxHeight']-_0x456cd8-this['calcWindowHeight'](0x1,!![]);return new _0xb5b8d5(_0x2916b8,_0x27b2aa,_0x27a65d,_0x456cd8);}}return![];},Game_System[_0x45f21b(0x288)][_0x45f21b(0x2a8)]=function(_0x57b7d8){const _0x2147d0=_0x45f21b;_0x57b7d8=_0x57b7d8[_0x2147d0(0x304)]()[_0x2147d0(0x30c)]();if(!VisuMZ['TutorialPanelSys'][_0x2147d0(0x301)][_0x57b7d8])return 0x0;let _0x61a119=0x0;const _0x3e5eda=VisuMZ['TutorialPanelSys']['CategoryTutorials'][_0x57b7d8];for(const _0x194fb6 of _0x3e5eda){if('TlFfb'===_0x2147d0(0x2b4)){if($gameTemp[_0x2147d0(0x27d)]()){_0x61a119++;continue;}if(this[_0x2147d0(0x204)](_0x194fb6))_0x61a119++;}else this['process_VisuMZ_TutorialCategories'](),this[_0x2147d0(0x274)]();}return _0x61a119;},VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x22d)]=Game_Interpreter['prototype'][_0x45f21b(0x206)],Game_Interpreter['prototype'][_0x45f21b(0x206)]=function(){const _0x284247=_0x45f21b;if(this[_0x284247(0x1d7)]===_0x284247(0x2ec))return!![];return VisuMZ[_0x284247(0x1f0)][_0x284247(0x22d)]['call'](this);},VisuMZ[_0x45f21b(0x1f0)]['Scene_Menu_createCommandWindow']=Scene_Menu['prototype'][_0x45f21b(0x2be)],Scene_Menu[_0x45f21b(0x288)][_0x45f21b(0x2be)]=function(){const _0x42ac4f=_0x45f21b;VisuMZ[_0x42ac4f(0x1f0)][_0x42ac4f(0x267)][_0x42ac4f(0x310)](this);const _0x5cd897=this[_0x42ac4f(0x268)];_0x5cd897[_0x42ac4f(0x22f)](_0x42ac4f(0x1f3),this[_0x42ac4f(0x1a0)][_0x42ac4f(0x28f)](this));},Scene_Menu['prototype'][_0x45f21b(0x1a0)]=function(){SceneManager['push'](Scene_TutorialList);},VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x197)]=Scene_Options['prototype'][_0x45f21b(0x2b0)],Scene_Options[_0x45f21b(0x288)]['maxCommands']=function(){const _0x246359=_0x45f21b;let _0x2baf40=VisuMZ['TutorialPanelSys'][_0x246359(0x197)]['call'](this);const _0x19a41b=VisuMZ[_0x246359(0x1f0)][_0x246359(0x215)]['Options'];if(_0x19a41b[_0x246359(0x24f)]&&_0x19a41b['AdjustRect'])_0x2baf40++;return _0x2baf40;},VisuMZ[_0x45f21b(0x1f0)]['Scene_Battle_initialize']=Scene_Battle[_0x45f21b(0x288)][_0x45f21b(0x1cd)],Scene_Battle[_0x45f21b(0x288)][_0x45f21b(0x1cd)]=function(){const _0x4a111f=_0x45f21b;VisuMZ[_0x4a111f(0x1f0)]['Scene_Battle_initialize'][_0x4a111f(0x310)](this),this[_0x4a111f(0x1e9)]();},Scene_Battle[_0x45f21b(0x288)][_0x45f21b(0x1e9)]=function(){const _0x67c25f=_0x45f21b;this['_tutorialKey']='',this[_0x67c25f(0x2ba)]=VisuMZ[_0x67c25f(0x1f0)]['Tutorials'][this['_tutorialKey']],this['_tutorialPageIndex']=0x0;},Scene_Battle['prototype'][_0x45f21b(0x2f6)]=function(){const _0x4ca4a4=_0x45f21b;return this[_0x4ca4a4(0x1a7)];},Scene_Battle['prototype'][_0x45f21b(0x2ea)]=function(){const _0x133a2c=_0x45f21b;return this[_0x133a2c(0x2ba)]||{};},Scene_Battle[_0x45f21b(0x288)][_0x45f21b(0x2fa)]=function(){const _0x11f9cc=_0x45f21b;return this[_0x11f9cc(0x2ea)]()['Title']||'';},Scene_Battle['prototype']['tutorialPages']=function(){const _0x353bcb=_0x45f21b;return this[_0x353bcb(0x2ea)]()['Pages']||[];},Scene_Battle[_0x45f21b(0x288)][_0x45f21b(0x2c3)]=function(){const _0x4a96c7=_0x45f21b;return this[_0x4a96c7(0x1da)];},Scene_Battle['prototype'][_0x45f21b(0x2d6)]=function(){const _0x27fea8=_0x45f21b;return this[_0x27fea8(0x232)]()[this[_0x27fea8(0x2c3)]()];},VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x255)]=Scene_Battle[_0x45f21b(0x288)][_0x45f21b(0x314)],Scene_Battle['prototype'][_0x45f21b(0x314)]=function(){const _0x51feb1=_0x45f21b;VisuMZ[_0x51feb1(0x1f0)]['Scene_Battle_createAllWindows'][_0x51feb1(0x310)](this),this[_0x51feb1(0x227)]();},Scene_Battle['prototype']['createTutorialWindows']=function(){const _0xe64926=_0x45f21b;this[_0xe64926(0x251)](),this[_0xe64926(0x30e)](),this['createTutorialPictureWindow'](),this['createTutorialTitleWindow']();},Scene_Battle[_0x45f21b(0x288)][_0x45f21b(0x251)]=function(){const _0xea6935=_0x45f21b,_0x52b473=this[_0xea6935(0x1e6)](),_0x39b18f=new Window_TutorialPages(_0x52b473);this[_0xea6935(0x292)](_0x39b18f),this['_tutorialPageWindow']=_0x39b18f,_0x39b18f['hide'](),_0x39b18f[_0xea6935(0x1c1)](),_0x39b18f['setHandler']('cancel',this['closeTutorial']['bind'](this)),_0x39b18f['setHandler'](_0xea6935(0x2dc),this[_0xea6935(0x238)][_0xea6935(0x28f)](this)),_0x39b18f[_0xea6935(0x1e8)](VisuMZ[_0xea6935(0x1f0)][_0xea6935(0x215)][_0xea6935(0x2f4)]['PageWindow_BgType']);},Scene_Battle[_0x45f21b(0x288)][_0x45f21b(0x1e6)]=function(){const _0x27f709=_0x45f21b;if(VisuMZ[_0x27f709(0x1f0)][_0x27f709(0x215)]['SceneBattle'][_0x27f709(0x20d)]){if(_0x27f709(0x1b8)===_0x27f709(0x1a2))_0x54d0bc(_0x27f709(0x2e3)[_0x27f709(0x266)](_0x46efbd,_0x5ac17e)),_0x15025b[_0x27f709(0x2fb)]();else return VisuMZ[_0x27f709(0x1f0)]['Settings'][_0x27f709(0x2f4)]['PageWindow_RectJS']['call'](this);}const _0x9a7b77=Math['max'](0x2d0,Math['floor'](Graphics['boxWidth']*0.75)),_0x47a013=this[_0x27f709(0x21f)](0x1,!![]),_0x202b3f=Math[_0x27f709(0x23d)]((Graphics[_0x27f709(0x1c7)]-_0x9a7b77)/0x2),_0x44cd7a=Graphics[_0x27f709(0x27e)]-_0x47a013;return new Rectangle(_0x202b3f,_0x44cd7a,_0x9a7b77,_0x47a013);},Scene_Battle[_0x45f21b(0x288)][_0x45f21b(0x30e)]=function(){const _0xae172a=_0x45f21b,_0x46b1a8=this[_0xae172a(0x1f8)](),_0x386a20=new Window_TutorialDescription(_0x46b1a8);this[_0xae172a(0x292)](_0x386a20),this[_0xae172a(0x237)]=_0x386a20,_0x386a20[_0xae172a(0x19d)](),_0x386a20[_0xae172a(0x1e8)](VisuMZ[_0xae172a(0x1f0)][_0xae172a(0x215)][_0xae172a(0x2f4)][_0xae172a(0x2db)]);},Scene_Battle['prototype']['tutorialDescriptionWindowRect']=function(){const _0x2d7bc1=_0x45f21b;if(VisuMZ['TutorialPanelSys'][_0x2d7bc1(0x215)][_0x2d7bc1(0x2f4)]['DescWindow_RectJS']){if(_0x2d7bc1(0x196)==='kwfDy')return VisuMZ[_0x2d7bc1(0x1f0)][_0x2d7bc1(0x215)]['SceneBattle'][_0x2d7bc1(0x1ab)][_0x2d7bc1(0x310)](this);else{const _0x5e5df3=_0x319e6e(_0x274cf6['$1']);_0x5e5df3!==_0x46b834[_0x5a9d43][_0x2d7bc1(0x1f2)]&&(_0x135313(_0x2d7bc1(0x2e3)[_0x2d7bc1(0x266)](_0x5d5c74,_0x5e5df3)),_0x1c1be6[_0x2d7bc1(0x2fb)]());}}const _0x57cf9c=Math[_0x2d7bc1(0x271)](0x2d0,Math[_0x2d7bc1(0x23d)](Graphics[_0x2d7bc1(0x1c7)]*0.75)),_0x355575=this['calcWindowHeight'](0x4,![]),_0x213090=Math['floor']((Graphics[_0x2d7bc1(0x1c7)]-_0x57cf9c)/0x2),_0x2fc6e3=Graphics[_0x2d7bc1(0x27e)]-_0x355575-this[_0x2d7bc1(0x21f)](0x1,!![]);return new Rectangle(_0x213090,_0x2fc6e3,_0x57cf9c,_0x355575);},Scene_Battle[_0x45f21b(0x288)][_0x45f21b(0x319)]=function(){const _0x516c97=_0x45f21b,_0x57a23b=this[_0x516c97(0x194)](),_0x52d868=new Window_TutorialPicture(_0x57a23b);this[_0x516c97(0x292)](_0x52d868),this['_tutorialPictureWindow']=_0x52d868,_0x52d868[_0x516c97(0x19d)](),_0x52d868[_0x516c97(0x1e8)](VisuMZ[_0x516c97(0x1f0)][_0x516c97(0x215)]['SceneBattle'][_0x516c97(0x230)]),this[_0x516c97(0x292)](this[_0x516c97(0x237)]);},Scene_Battle[_0x45f21b(0x288)][_0x45f21b(0x194)]=function(){const _0x51ca09=_0x45f21b;if(VisuMZ[_0x51ca09(0x1f0)]['Settings'][_0x51ca09(0x2f4)]['PictureWindow_RectJS']){if(_0x51ca09(0x21b)==='HeQin'){this[_0x51ca09(0x27f)][_0x51ca09(0x2f1)]();const _0xc63b16=this['_text'],_0x361558=this[_0x51ca09(0x2ee)](_0xc63b16),_0x2d7f12=_0x5cc0c2['floor']((this['innerWidth']-_0x361558[_0x51ca09(0x2e2)])/0x2),_0x4c8151=_0x4c3fad[_0x51ca09(0x23d)]((this['innerHeight']-_0x361558['height'])/0x2);this[_0x51ca09(0x19c)](_0xc63b16,_0x2d7f12,_0x4c8151);}else return VisuMZ[_0x51ca09(0x1f0)]['Settings'][_0x51ca09(0x2f4)][_0x51ca09(0x201)][_0x51ca09(0x310)](this,this[_0x51ca09(0x237)]);}const _0x9aa56a=this['_tutorialDescriptionWindow'],_0x436078=_0x9aa56a[_0x51ca09(0x2e2)],_0x2922fd=Graphics['boxHeight']-this[_0x51ca09(0x2f9)]()-_0x9aa56a[_0x51ca09(0x2bd)]-this['calcWindowHeight'](0x1,!![]),_0x48e9cc=_0x9aa56a['x'],_0x385773=this[_0x51ca09(0x2f9)]();return new Rectangle(_0x48e9cc,_0x385773,_0x436078,_0x2922fd);},Scene_Battle[_0x45f21b(0x288)][_0x45f21b(0x270)]=function(){const _0x6cf2ee=_0x45f21b,_0x3d4036=this['tutorialTitleWindowRect'](),_0x3291ef=new Window_TutorialTitle(_0x3d4036);this[_0x6cf2ee(0x292)](_0x3291ef),this[_0x6cf2ee(0x2ce)]=_0x3291ef,_0x3291ef[_0x6cf2ee(0x19d)](),_0x3291ef[_0x6cf2ee(0x1e8)](VisuMZ[_0x6cf2ee(0x1f0)][_0x6cf2ee(0x215)][_0x6cf2ee(0x2f4)][_0x6cf2ee(0x21a)]);},Scene_Battle[_0x45f21b(0x288)][_0x45f21b(0x228)]=function(){const _0x53d2c1=_0x45f21b;if(VisuMZ['TutorialPanelSys'][_0x53d2c1(0x215)][_0x53d2c1(0x2f4)]['TitleWindow_RectJS'])return VisuMZ[_0x53d2c1(0x1f0)][_0x53d2c1(0x215)][_0x53d2c1(0x2f4)][_0x53d2c1(0x243)][_0x53d2c1(0x310)](this,this[_0x53d2c1(0x237)]);const _0x69985a=this[_0x53d2c1(0x237)],_0x7067b6=Math[_0x53d2c1(0x271)](_0x69985a[_0x53d2c1(0x2e2)]-0x12c,0x1e0),_0x57cdf0=this[_0x53d2c1(0x21f)](0x1,![]),_0x805376=Math['floor']((Graphics[_0x53d2c1(0x1c7)]-_0x7067b6)/0x2),_0x4f1b5d=_0x69985a['y']-Math['floor'](_0x57cdf0/0x2);return new Rectangle(_0x805376,_0x4f1b5d,_0x7067b6,_0x57cdf0);},Scene_Battle[_0x45f21b(0x288)]['nextTutorialPage']=function(){const _0x5b27d8=_0x45f21b;let _0x471a05=this[_0x5b27d8(0x29f)][_0x5b27d8(0x249)]()+0x1;_0x471a05>=this[_0x5b27d8(0x232)]()[_0x5b27d8(0x1d6)]?(SoundManager[_0x5b27d8(0x254)](),this[_0x5b27d8(0x1fd)]()):(this[_0x5b27d8(0x29f)][_0x5b27d8(0x295)](),this['_tutorialPageWindow'][_0x5b27d8(0x234)](_0x471a05));},Scene_Battle['prototype'][_0x45f21b(0x1b9)]=function(_0x1aab66){const _0x66f183=_0x45f21b;if(!VisuMZ[_0x66f183(0x1f0)][_0x66f183(0x273)](_0x1aab66))return;this[_0x66f183(0x1a7)]=_0x1aab66[_0x66f183(0x304)]()[_0x66f183(0x30c)](),this[_0x66f183(0x2ba)]=VisuMZ[_0x66f183(0x1f0)]['Tutorials'][this[_0x66f183(0x1a7)]],this[_0x66f183(0x1da)]=0x0;this[_0x66f183(0x29f)]&&(this[_0x66f183(0x29f)]['show'](),this[_0x66f183(0x29f)][_0x66f183(0x295)](),this[_0x66f183(0x29f)][_0x66f183(0x257)](),this[_0x66f183(0x29f)][_0x66f183(0x207)]());if(this[_0x66f183(0x237)]){if(_0x66f183(0x210)==='wZKTx')this[_0x66f183(0x237)][_0x66f183(0x287)](),this[_0x66f183(0x237)][_0x66f183(0x316)](!![]),this[_0x66f183(0x237)][_0x66f183(0x207)]();else{const _0x35ec41=this[_0x66f183(0x20a)][_0x66f183(0x236)]()||'';if(_0x35ec41===''){this[_0x66f183(0x20a)][_0x66f183(0x295)]();return;}_0x49e1df[_0x66f183(0x2bc)]=_0x35ec41,_0x197d6a['openTutorial'](_0x35ec41);}}this['_tutorialPictureWindow']&&(_0x66f183(0x1c6)===_0x66f183(0x1c6)?(this[_0x66f183(0x2a5)][_0x66f183(0x287)](),this[_0x66f183(0x2a5)][_0x66f183(0x316)](!![]),this[_0x66f183(0x2a5)][_0x66f183(0x207)]()):(_0x16a5ad[_0x66f183(0x254)](),this[_0x66f183(0x21e)]())),this[_0x66f183(0x2ce)]&&(this['_tutorialTitleWindow'][_0x66f183(0x287)](),this[_0x66f183(0x2ce)][_0x66f183(0x2ab)](this['tutorialTitle']())),$gameTroop[_0x66f183(0x320)][_0x66f183(0x1c3)](_0x66f183(0x2ec));},Scene_Battle[_0x45f21b(0x288)]['closeTutorial']=function(){const _0x50ee0e=_0x45f21b;this[_0x50ee0e(0x29f)]&&(this[_0x50ee0e(0x29f)][_0x50ee0e(0x19d)](),this[_0x50ee0e(0x29f)][_0x50ee0e(0x1c1)]());if(this[_0x50ee0e(0x237)]){if(_0x50ee0e(0x313)!=='euHfb')return _0x18486d['tutorial'][_0x50ee0e(0x24a)];else this[_0x50ee0e(0x237)][_0x50ee0e(0x19d)]();}if(this[_0x50ee0e(0x2a5)]){if('PvUzi'!==_0x50ee0e(0x2f5))this[_0x50ee0e(0x2a5)][_0x50ee0e(0x19d)]();else return this[_0x50ee0e(0x262)]()===_0x50ee0e(0x2dd)?this[_0x50ee0e(0x236)]():null;}this[_0x50ee0e(0x2ce)]&&this[_0x50ee0e(0x2ce)][_0x50ee0e(0x19d)](),$gameTroop[_0x50ee0e(0x320)]['setWaitMode']('');},VisuMZ[_0x45f21b(0x1f0)]['Scene_Battle_updateStatusWindowVisibility']=Scene_Battle['prototype'][_0x45f21b(0x2d9)],Scene_Battle['prototype'][_0x45f21b(0x2d9)]=function(){const _0x950d33=_0x45f21b;if(this[_0x950d33(0x2f2)]())this[_0x950d33(0x2af)][_0x950d33(0x222)]();else{if(_0x950d33(0x27a)!==_0x950d33(0x1d9))VisuMZ[_0x950d33(0x1f0)][_0x950d33(0x28c)][_0x950d33(0x310)](this);else return this['_scene']&&this[_0x950d33(0x1dd)][_0x950d33(0x272)]===_0x33ee66;}},Scene_Battle[_0x45f21b(0x288)][_0x45f21b(0x2f2)]=function(){const _0x36b9ba=_0x45f21b;if(!VisuMZ['TutorialPanelSys'][_0x36b9ba(0x215)][_0x36b9ba(0x2f4)][_0x36b9ba(0x309)])return![];return this[_0x36b9ba(0x29f)]&&this[_0x36b9ba(0x29f)][_0x36b9ba(0x263)];},VisuMZ[_0x45f21b(0x1f0)][_0x45f21b(0x2c9)]=Scene_Battle[_0x45f21b(0x288)][_0x45f21b(0x2df)],Scene_Battle[_0x45f21b(0x288)]['isAnyInputWindowActive']=function(){const _0x591189=_0x45f21b;if(this['_tutorialPageWindow']&&this[_0x591189(0x29f)]['active'])return!![];return VisuMZ['TutorialPanelSys']['Scene_Battle_isAnyInputWindowActive']['call'](this);};function Scene_TutorialData(){const _0x57572b=_0x45f21b;this[_0x57572b(0x1cd)](...arguments);}Scene_TutorialData[_0x45f21b(0x288)]=Object[_0x45f21b(0x258)](Scene_MenuBase[_0x45f21b(0x288)]),Scene_TutorialData[_0x45f21b(0x288)]['constructor']=Scene_TutorialData,Scene_TutorialData[_0x45f21b(0x288)][_0x45f21b(0x1cd)]=function(){const _0x3b2cc0=_0x45f21b;Scene_MenuBase['prototype'][_0x3b2cc0(0x1cd)][_0x3b2cc0(0x310)](this),this[_0x3b2cc0(0x1e9)]();},Scene_TutorialData[_0x45f21b(0x288)][_0x45f21b(0x1e9)]=function(){const _0x25061c=_0x45f21b;this[_0x25061c(0x1a7)]=$gameTemp['_tutorialKey'][_0x25061c(0x304)]()[_0x25061c(0x30c)](),this[_0x25061c(0x2ba)]=VisuMZ[_0x25061c(0x1f0)]['Tutorials'][this[_0x25061c(0x1a7)]],this[_0x25061c(0x1da)]=0x0;},Scene_TutorialData[_0x45f21b(0x288)]['tutorialKey']=function(){const _0x436e2a=_0x45f21b;return this[_0x436e2a(0x1a7)];},Scene_TutorialData['prototype'][_0x45f21b(0x2ea)]=function(){const _0x47e741=_0x45f21b;return this[_0x47e741(0x2ba)]||{};},Scene_TutorialData[_0x45f21b(0x288)][_0x45f21b(0x2fa)]=function(){const _0x4a5aac=_0x45f21b;return this[_0x4a5aac(0x2ea)]()[_0x4a5aac(0x29e)]||'';},Scene_TutorialData[_0x45f21b(0x288)][_0x45f21b(0x232)]=function(){const _0x37102e=_0x45f21b;return this[_0x37102e(0x2ea)]()['Pages']||[];},Scene_TutorialData['prototype']['tutorialPageIndex']=function(){return this['_tutorialPageIndex'];},Scene_TutorialData[_0x45f21b(0x288)][_0x45f21b(0x2d6)]=function(){const _0x9080eb=_0x45f21b;return this[_0x9080eb(0x232)]()[this[_0x9080eb(0x2c3)]()];},Scene_TutorialData[_0x45f21b(0x288)][_0x45f21b(0x216)]=function(){return 0x0;},Scene_TutorialData['prototype'][_0x45f21b(0x1ec)]=function(){const _0x48c23b=_0x45f21b;Scene_MenuBase[_0x48c23b(0x288)][_0x48c23b(0x1ec)]['call'](this),this[_0x48c23b(0x31b)](this['getBackgroundOpacity']()),this[_0x48c23b(0x2e1)]();},Scene_TutorialData[_0x45f21b(0x288)][_0x45f21b(0x27c)]=function(){const _0x36aadc=_0x45f21b;return VisuMZ[_0x36aadc(0x1f0)][_0x36aadc(0x215)][_0x36aadc(0x2cf)]['SnapshotOpacity'];},Scene_TutorialData['prototype'][_0x45f21b(0x2e1)]=function(){const _0x5a675d=_0x45f21b,_0x4a6a14=VisuMZ[_0x5a675d(0x1f0)][_0x5a675d(0x215)][_0x5a675d(0x2cf)];_0x4a6a14&&(_0x4a6a14['BgFilename1']!==''||_0x4a6a14[_0x5a675d(0x2b1)]!=='')&&(this[_0x5a675d(0x1f9)]=new Sprite(ImageManager[_0x5a675d(0x217)](_0x4a6a14[_0x5a675d(0x2ef)])),this[_0x5a675d(0x22a)]=new Sprite(ImageManager['loadTitle2'](_0x4a6a14['BgFilename2'])),this['addChild'](this[_0x5a675d(0x1f9)]),this[_0x5a675d(0x1a9)](this['_backSprite2']),this[_0x5a675d(0x1f9)][_0x5a675d(0x231)][_0x5a675d(0x300)](this[_0x5a675d(0x1a3)][_0x5a675d(0x28f)](this,this[_0x5a675d(0x1f9)])),this['_backSprite2'][_0x5a675d(0x231)][_0x5a675d(0x300)](this['adjustSprite']['bind'](this,this[_0x5a675d(0x22a)])));},Scene_TutorialData['prototype'][_0x45f21b(0x1a3)]=function(_0x327990){const _0x4d2ad5=_0x45f21b;this[_0x4d2ad5(0x275)](_0x327990),this[_0x4d2ad5(0x1ed)](_0x327990);},Scene_TutorialData[_0x45f21b(0x288)][_0x45f21b(0x1c5)]=function(){const _0x5b0fcc=_0x45f21b;if(this[_0x5b0fcc(0x232)]()[_0x5b0fcc(0x1d6)]>0x0)return TextManager['getInputMultiButtonStrings'](_0x5b0fcc(0x2bf),'right');else{if(_0x5b0fcc(0x202)!=='XiNHE')return Scene_MenuBase[_0x5b0fcc(0x288)]['buttonAssistKey1'][_0x5b0fcc(0x310)](this);else{if(!_0x510c9d[_0x5b0fcc(0x1f0)][_0x5b0fcc(0x273)](_0x56f1be))return;this[_0x5b0fcc(0x1a7)]=_0x20e168;if(_0x45cb59[_0x5b0fcc(0x1a1)]()){const _0x319a53=_0x428050[_0x5b0fcc(0x1dd)];_0x319a53[_0x5b0fcc(0x1b9)](_0xcd2ac8);}else{_0x3418dd[_0x5b0fcc(0x29b)](_0x2740e4);const _0x51c027=this[_0x5b0fcc(0x264)]();_0x51c027&&_0x51c027[_0x5b0fcc(0x1ad)](0xa);}}}},Scene_TutorialData[_0x45f21b(0x288)]['buttonAssistText1']=function(){const _0x2c5789=_0x45f21b;return TextManager[_0x2c5789(0x2ec)]['changePage'];},Scene_TutorialData[_0x45f21b(0x288)][_0x45f21b(0x20e)]=function(){const _0x50d44b=_0x45f21b;if(this[_0x50d44b(0x1da)]===this[_0x50d44b(0x232)]()[_0x50d44b(0x1d6)]-0x1){if(_0x50d44b(0x229)!=='aTfaR')return TextManager['tutorial'][_0x50d44b(0x1cf)];else this[_0x50d44b(0x19c)](_0x3f5c00,_0x16e658['x'],_0x2da48c['y'],_0x73b063);}else return TextManager[_0x50d44b(0x2ec)]['nextPage'];},Scene_TutorialData[_0x45f21b(0x288)][_0x45f21b(0x2e7)]=function(){const _0xf7f58f=_0x45f21b;return TextManager[_0xf7f58f(0x2ec)][_0xf7f58f(0x1cf)];},Scene_TutorialData[_0x45f21b(0x288)][_0x45f21b(0x258)]=function(){const _0x53826f=_0x45f21b;Scene_MenuBase[_0x53826f(0x288)][_0x53826f(0x258)]['call'](this),this[_0x53826f(0x1e1)](),this[_0x53826f(0x1b6)](),this[_0x53826f(0x303)](),this[_0x53826f(0x2b3)]();},Scene_TutorialData['prototype']['createPageWindow']=function(){const _0x40a8e1=_0x45f21b,_0x55d43a=this[_0x40a8e1(0x2c6)](),_0xe0531d=new Window_TutorialPages(_0x55d43a);this[_0x40a8e1(0x292)](_0xe0531d),this[_0x40a8e1(0x23b)]=_0xe0531d,_0xe0531d['setHandler']('cancel',this['popScene'][_0x40a8e1(0x28f)](this)),_0xe0531d['setHandler'](_0x40a8e1(0x2dc),this[_0x40a8e1(0x2a3)][_0x40a8e1(0x28f)](this)),_0xe0531d[_0x40a8e1(0x1e8)](VisuMZ[_0x40a8e1(0x1f0)][_0x40a8e1(0x215)][_0x40a8e1(0x2cf)][_0x40a8e1(0x21c)]);},Scene_TutorialData[_0x45f21b(0x288)][_0x45f21b(0x2c6)]=function(){const _0x1d6a9a=_0x45f21b;if(VisuMZ[_0x1d6a9a(0x1f0)][_0x1d6a9a(0x215)][_0x1d6a9a(0x2cf)][_0x1d6a9a(0x20d)])return VisuMZ['TutorialPanelSys']['Settings'][_0x1d6a9a(0x2cf)][_0x1d6a9a(0x20d)][_0x1d6a9a(0x310)](this);const _0x1b4f36=Math[_0x1d6a9a(0x271)](0x2d0,Math[_0x1d6a9a(0x23d)](Graphics['boxWidth']*0.75)),_0x398995=this[_0x1d6a9a(0x21f)](0x1,!![]),_0x214361=Math[_0x1d6a9a(0x23d)]((Graphics[_0x1d6a9a(0x1c7)]-_0x1b4f36)/0x2),_0x5aefad=this[_0x1d6a9a(0x218)]()-_0x398995;return new Rectangle(_0x214361,_0x5aefad,_0x1b4f36,_0x398995);},Scene_TutorialData['prototype'][_0x45f21b(0x1b6)]=function(){const _0x1b9bb4=_0x45f21b,_0x3d277e=this['descriptionWindowRect'](),_0x5db809=new Window_TutorialDescription(_0x3d277e);this[_0x1b9bb4(0x292)](_0x5db809),this[_0x1b9bb4(0x1c2)]=_0x5db809,_0x5db809['setBackgroundType'](VisuMZ[_0x1b9bb4(0x1f0)]['Settings']['SceneTutorialData'][_0x1b9bb4(0x2db)]);},Scene_TutorialData['prototype'][_0x45f21b(0x25d)]=function(){const _0x5f550d=_0x45f21b;if(VisuMZ[_0x5f550d(0x1f0)]['Settings'][_0x5f550d(0x2cf)]['DescWindow_RectJS']){if(_0x5f550d(0x22e)==='NkATz'){_0x2dc82d=_0x899954[_0x5f550d(0x304)]()['trim']();if(!_0x102055[_0x5f550d(0x1f0)]['CategoryTutorials'][_0x248abd])return![];const _0x36266c=_0x386a1b[_0x5f550d(0x1f0)][_0x5f550d(0x301)][_0x38ea0d];for(const _0x3f88eb of _0x36266c){if(this[_0x5f550d(0x204)](_0x3f88eb))return!![];}return![];}else return VisuMZ[_0x5f550d(0x1f0)]['Settings'][_0x5f550d(0x2cf)][_0x5f550d(0x1ab)]['call'](this);}const _0x1ccb71=Math[_0x5f550d(0x271)](0x2d0,Math[_0x5f550d(0x23d)](Graphics[_0x5f550d(0x1c7)]*0.75)),_0x109ea3=this[_0x5f550d(0x21f)](0x4,![]),_0x5b44b7=Math[_0x5f550d(0x23d)]((Graphics[_0x5f550d(0x1c7)]-_0x1ccb71)/0x2),_0x463b69=this[_0x5f550d(0x218)]()-_0x109ea3-this[_0x5f550d(0x21f)](0x1,!![]);return new Rectangle(_0x5b44b7,_0x463b69,_0x1ccb71,_0x109ea3);},Scene_TutorialData[_0x45f21b(0x288)][_0x45f21b(0x303)]=function(){const _0x2dd89e=_0x45f21b,_0x539b8e=this[_0x2dd89e(0x2f8)](),_0x83f39c=new Window_TutorialPicture(_0x539b8e);this[_0x2dd89e(0x292)](_0x83f39c),this['_pictureWindow']=_0x83f39c,_0x83f39c[_0x2dd89e(0x1e8)](VisuMZ['TutorialPanelSys'][_0x2dd89e(0x215)][_0x2dd89e(0x2cf)][_0x2dd89e(0x230)]),this[_0x2dd89e(0x292)](this[_0x2dd89e(0x1c2)]);},Scene_TutorialData['prototype']['pictureWindowRect']=function(){const _0x580f27=_0x45f21b;if(VisuMZ['TutorialPanelSys'][_0x580f27(0x215)][_0x580f27(0x2cf)]['PictureWindow_RectJS'])return VisuMZ[_0x580f27(0x1f0)][_0x580f27(0x215)][_0x580f27(0x2cf)][_0x580f27(0x201)]['call'](this,this[_0x580f27(0x1c2)]);const _0x11d508=this[_0x580f27(0x1c2)],_0x4f9348=_0x11d508[_0x580f27(0x2e2)],_0x3f6093=this[_0x580f27(0x1f7)]()-_0x11d508[_0x580f27(0x2bd)]-this[_0x580f27(0x21f)](0x1,!![]),_0x3a6b1e=_0x11d508['x'],_0xb8f36b=this['mainAreaTop']();return new Rectangle(_0x3a6b1e,_0xb8f36b,_0x4f9348,_0x3f6093);},Scene_TutorialData[_0x45f21b(0x288)][_0x45f21b(0x2b3)]=function(){const _0x3bb276=_0x45f21b,_0x42f38f=this[_0x3bb276(0x21d)](),_0x15d9dc=new Window_TutorialTitle(_0x42f38f);this[_0x3bb276(0x292)](_0x15d9dc),this[_0x3bb276(0x2d7)]=_0x15d9dc,_0x15d9dc[_0x3bb276(0x1e8)](VisuMZ['TutorialPanelSys'][_0x3bb276(0x215)][_0x3bb276(0x2cf)][_0x3bb276(0x21a)]),_0x15d9dc[_0x3bb276(0x2ab)](this[_0x3bb276(0x2fa)]());},Scene_TutorialData['prototype']['titleWindowRect']=function(){const _0x3896e5=_0x45f21b;if(VisuMZ['TutorialPanelSys'][_0x3896e5(0x215)][_0x3896e5(0x2cf)][_0x3896e5(0x243)])return VisuMZ[_0x3896e5(0x1f0)][_0x3896e5(0x215)][_0x3896e5(0x2cf)][_0x3896e5(0x243)][_0x3896e5(0x310)](this,this[_0x3896e5(0x1c2)]);const _0xded79b=this[_0x3896e5(0x1c2)],_0x2414db=Math[_0x3896e5(0x271)](_0xded79b[_0x3896e5(0x2e2)]-0x12c,0x1e0),_0xcf5886=this[_0x3896e5(0x21f)](0x1,![]),_0x2b2f74=Math['floor']((Graphics['boxWidth']-_0x2414db)/0x2),_0x58ec89=_0xded79b['y']-Math[_0x3896e5(0x23d)](_0xcf5886/0x2);return new Rectangle(_0x2b2f74,_0x58ec89,_0x2414db,_0xcf5886);},Scene_TutorialData[_0x45f21b(0x288)][_0x45f21b(0x2a3)]=function(){const _0x1de747=_0x45f21b;let _0x24d9ee=this[_0x1de747(0x23b)][_0x1de747(0x249)]()+0x1;_0x24d9ee>=this['tutorialPages']()['length']?(SoundManager['playCancel'](),this[_0x1de747(0x21e)]()):_0x1de747(0x1e7)!=='UGfkE'?(this[_0x1de747(0x23b)][_0x1de747(0x295)](),this[_0x1de747(0x23b)]['select'](_0x24d9ee)):this[_0x1de747(0x2f0)]={'shown':_0x4fcc7d['TutorialPanelSys'][_0x1de747(0x215)][_0x1de747(0x2c2)]['ShowMainMenu'],'enabled':_0xee3147[_0x1de747(0x1f0)]['Settings'][_0x1de747(0x2c2)]['EnableMainMenu']};};function Scene_TutorialList(){const _0x278292=_0x45f21b;this[_0x278292(0x1cd)](...arguments);}Scene_TutorialList[_0x45f21b(0x288)]=Object[_0x45f21b(0x258)](Scene_MenuBase[_0x45f21b(0x288)]),Scene_TutorialList[_0x45f21b(0x288)][_0x45f21b(0x272)]=Scene_TutorialList,Scene_TutorialList[_0x45f21b(0x288)][_0x45f21b(0x1cd)]=function(){const _0x2cd91c=_0x45f21b;Scene_MenuBase['prototype'][_0x2cd91c(0x1cd)]['call'](this);},Scene_TutorialList[_0x45f21b(0x288)][_0x45f21b(0x1ec)]=function(){const _0xb8048d=_0x45f21b;Scene_MenuBase[_0xb8048d(0x288)]['createBackground'][_0xb8048d(0x310)](this),this['setBackgroundOpacity'](this[_0xb8048d(0x27c)]()),this[_0xb8048d(0x2e1)]();},Scene_TutorialList[_0x45f21b(0x288)][_0x45f21b(0x27c)]=function(){const _0x4b2127=_0x45f21b;return VisuMZ[_0x4b2127(0x1f0)]['Settings']['SceneTutorialList']['SnapshotOpacity'];},Scene_TutorialList['prototype'][_0x45f21b(0x2e1)]=function(){const _0x1f2b96=_0x45f21b,_0x5c88d2=VisuMZ[_0x1f2b96(0x1f0)][_0x1f2b96(0x215)]['SceneTutorialList'];_0x5c88d2&&(_0x5c88d2[_0x1f2b96(0x2ef)]!==''||_0x5c88d2['BgFilename2']!=='')&&(this[_0x1f2b96(0x1f9)]=new Sprite(ImageManager[_0x1f2b96(0x217)](_0x5c88d2[_0x1f2b96(0x2ef)])),this['_backSprite2']=new Sprite(ImageManager[_0x1f2b96(0x2a0)](_0x5c88d2[_0x1f2b96(0x2b1)])),this[_0x1f2b96(0x1a9)](this[_0x1f2b96(0x1f9)]),this[_0x1f2b96(0x1a9)](this['_backSprite2']),this['_backSprite1'][_0x1f2b96(0x231)][_0x1f2b96(0x300)](this[_0x1f2b96(0x1a3)][_0x1f2b96(0x28f)](this,this[_0x1f2b96(0x1f9)])),this[_0x1f2b96(0x22a)][_0x1f2b96(0x231)][_0x1f2b96(0x300)](this[_0x1f2b96(0x1a3)][_0x1f2b96(0x28f)](this,this['_backSprite2'])));},Scene_TutorialList['prototype'][_0x45f21b(0x1a3)]=function(_0x178d13){const _0x3a5ffa=_0x45f21b;this[_0x3a5ffa(0x275)](_0x178d13),this[_0x3a5ffa(0x1ed)](_0x178d13);},Scene_TutorialList[_0x45f21b(0x288)][_0x45f21b(0x20e)]=function(){const _0x847560=_0x45f21b;if(this[_0x847560(0x20a)]&&this[_0x847560(0x20a)][_0x847560(0x263)]){const _0x2cfd5a=this['_listWindow'][_0x847560(0x262)]();if(_0x2cfd5a==='category'){if(_0x847560(0x247)!=='mcKVJ')this[_0x847560(0x1f9)]=new _0x3134a6(_0x40ecf5[_0x847560(0x217)](_0x2c327b[_0x847560(0x2ef)])),this['_backSprite2']=new _0xea28f4(_0xb73f21[_0x847560(0x2a0)](_0x10448c[_0x847560(0x2b1)])),this[_0x847560(0x1a9)](this['_backSprite1']),this['addChild'](this['_backSprite2']),this['_backSprite1'][_0x847560(0x231)][_0x847560(0x300)](this[_0x847560(0x1a3)][_0x847560(0x28f)](this,this[_0x847560(0x1f9)])),this[_0x847560(0x22a)][_0x847560(0x231)][_0x847560(0x300)](this[_0x847560(0x1a3)]['bind'](this,this[_0x847560(0x22a)]));else return this[_0x847560(0x20a)][_0x847560(0x1ca)](this[_0x847560(0x20a)][_0x847560(0x2cb)]())?TextManager[_0x847560(0x2ec)][_0x847560(0x233)]:TextManager[_0x847560(0x2ec)]['expand'];}else{if(_0x2cfd5a===_0x847560(0x2ec)){if(_0x847560(0x1e5)!==_0x847560(0x26f))return TextManager[_0x847560(0x2ec)][_0x847560(0x312)];else{if(_0x268f3b[_0x847560(0x1f0)][_0x847560(0x215)][_0x847560(0x2f4)][_0x847560(0x243)])return _0x4ebf10[_0x847560(0x1f0)][_0x847560(0x215)]['SceneBattle'][_0x847560(0x243)][_0x847560(0x310)](this,this[_0x847560(0x237)]);const _0x3e1eda=this[_0x847560(0x237)],_0x50ffe8=_0x4e3794[_0x847560(0x271)](_0x3e1eda[_0x847560(0x2e2)]-0x12c,0x1e0),_0x44950a=this[_0x847560(0x21f)](0x1,![]),_0x53fb75=_0x31f898[_0x847560(0x23d)]((_0x1a9875[_0x847560(0x1c7)]-_0x50ffe8)/0x2),_0x45adc4=_0x3e1eda['y']-_0x189038['floor'](_0x44950a/0x2);return new _0x37ade4(_0x53fb75,_0x45adc4,_0x50ffe8,_0x44950a);}}}}return Scene_MenuBase[_0x847560(0x288)][_0x847560(0x20e)][_0x847560(0x310)](this);},Scene_TutorialList['prototype'][_0x45f21b(0x258)]=function(){const _0x42e388=_0x45f21b;Scene_MenuBase[_0x42e388(0x288)][_0x42e388(0x258)][_0x42e388(0x310)](this),this[_0x42e388(0x323)]();if(this['_buttonAssistWindow'])this[_0x42e388(0x225)][_0x42e388(0x22c)]();},Scene_TutorialList[_0x45f21b(0x288)][_0x45f21b(0x323)]=function(){const _0x575ac3=_0x45f21b,_0x34046e=this[_0x575ac3(0x205)](),_0x4178ea=new Window_TutorialList(_0x34046e);this['addWindow'](_0x4178ea),this[_0x575ac3(0x20a)]=_0x4178ea,_0x4178ea[_0x575ac3(0x22f)](_0x575ac3(0x2c4),this[_0x575ac3(0x21e)]['bind'](this)),_0x4178ea[_0x575ac3(0x22f)]('category',this['onListCategory']['bind'](this)),_0x4178ea[_0x575ac3(0x22f)](_0x575ac3(0x2ec),this[_0x575ac3(0x280)][_0x575ac3(0x28f)](this)),_0x4178ea[_0x575ac3(0x1e8)](VisuMZ[_0x575ac3(0x1f0)][_0x575ac3(0x215)]['SceneTutorialList'][_0x575ac3(0x2cc)]);},Scene_TutorialList[_0x45f21b(0x288)]['listWindowRect']=function(){const _0x4ff5bf=_0x45f21b;if(VisuMZ['TutorialPanelSys']['Settings'][_0x4ff5bf(0x2c2)][_0x4ff5bf(0x2f3)]){if(_0x4ff5bf(0x2ac)!==_0x4ff5bf(0x1bd))return VisuMZ[_0x4ff5bf(0x1f0)][_0x4ff5bf(0x215)][_0x4ff5bf(0x2c2)][_0x4ff5bf(0x2f3)]['call'](this);else this[_0x4ff5bf(0x2ae)]!==_0x45fd83&&(this[_0x4ff5bf(0x2ae)]=_0xdcad65,this[_0x4ff5bf(0x207)]());}const _0x2efb33=Math[_0x4ff5bf(0x271)](0x2d0,Math[_0x4ff5bf(0x23d)](Graphics[_0x4ff5bf(0x1c7)]*0.75)),_0x2715fa=Math[_0x4ff5bf(0x271)](_0x2efb33-0x12c,0x1e0),_0xeb2a4f=this[_0x4ff5bf(0x21f)](0xa,!![]),_0x3bec9f=Math[_0x4ff5bf(0x23d)]((Graphics[_0x4ff5bf(0x1c7)]-_0x2715fa)/0x2),_0x473d01=Math[_0x4ff5bf(0x23d)]((Graphics[_0x4ff5bf(0x27e)]-_0xeb2a4f)/0x2);return new Rectangle(_0x3bec9f,_0x473d01,_0x2715fa,_0xeb2a4f);},Scene_TutorialList['prototype']['onListCategory']=function(){const _0x54d0d2=_0x45f21b;this[_0x54d0d2(0x20a)][_0x54d0d2(0x305)](),this[_0x54d0d2(0x20a)][_0x54d0d2(0x295)]();},Scene_TutorialList[_0x45f21b(0x288)][_0x45f21b(0x280)]=function(){const _0x19141f=_0x45f21b,_0x10c4bd=this['_listWindow'][_0x19141f(0x236)]()||'';if(_0x10c4bd===''){this[_0x19141f(0x20a)]['activate']();return;}$gameTemp[_0x19141f(0x2bc)]=_0x10c4bd,$gameTemp[_0x19141f(0x1b9)](_0x10c4bd);},VisuMZ['TutorialPanelSys']['Window_MenuCommand_addOriginalCommands']=Window_MenuCommand['prototype'][_0x45f21b(0x28e)],Window_MenuCommand[_0x45f21b(0x288)][_0x45f21b(0x28e)]=function(){const _0x1ccf9a=_0x45f21b;VisuMZ[_0x1ccf9a(0x1f0)][_0x1ccf9a(0x284)][_0x1ccf9a(0x310)](this),this[_0x1ccf9a(0x1e2)]();},Window_MenuCommand[_0x45f21b(0x288)]['addTutorialListCommand']=function(){const _0x1b05e6=_0x45f21b;if(!this[_0x1b05e6(0x235)]())return;if(!this[_0x1b05e6(0x321)]())return;const _0x4b977a=TextManager['tutorial'][_0x1b05e6(0x296)],_0x1bf368=this[_0x1b05e6(0x26b)]();this[_0x1b05e6(0x30d)](_0x4b977a,_0x1b05e6(0x1f3),_0x1bf368);},Window_MenuCommand[_0x45f21b(0x288)]['addTutorialListCommandAutomatically']=function(){const _0x4b82ce=_0x45f21b;return Imported[_0x4b82ce(0x269)]?![]:!![];},Window_MenuCommand['prototype'][_0x45f21b(0x321)]=function(){const _0x3c26d2=_0x45f21b;if($gameTemp[_0x3c26d2(0x27d)]())return!![];return $gameSystem[_0x3c26d2(0x2a6)]();},Window_MenuCommand[_0x45f21b(0x288)][_0x45f21b(0x26b)]=function(){const _0x1852eb=_0x45f21b;if($gameTemp['canDebugViewTutorialList']())return!![];return $gameSystem[_0x1852eb(0x325)]();},VisuMZ[_0x45f21b(0x1f0)]['Window_Options_addGeneralOptions']=Window_Options[_0x45f21b(0x288)][_0x45f21b(0x2c5)],Window_Options['prototype'][_0x45f21b(0x2c5)]=function(){const _0x5b9bca=_0x45f21b;VisuMZ[_0x5b9bca(0x1f0)]['Window_Options_addGeneralOptions'][_0x5b9bca(0x310)](this),this[_0x5b9bca(0x1d2)]();},Window_Options['prototype'][_0x45f21b(0x1d2)]=function(){const _0x31bae8=_0x45f21b;if(VisuMZ[_0x31bae8(0x1f0)][_0x31bae8(0x215)][_0x31bae8(0x2fc)][_0x31bae8(0x24f)]){if(_0x31bae8(0x2de)==='Puvss')this[_0x31bae8(0x285)]();else{if(_0x4eaf88['canDebugViewTutorialList']())return!![];return _0x232ce9[_0x31bae8(0x2a6)]();}}},Window_Options[_0x45f21b(0x288)][_0x45f21b(0x285)]=function(){const _0x538050=_0x45f21b,_0x21821c=TextManager[_0x538050(0x2ec)][_0x538050(0x311)],_0x4db328=_0x538050(0x1b4);this[_0x538050(0x30d)](_0x21821c,_0x4db328);};function Window_TutorialPages(){const _0x477fda=_0x45f21b;this[_0x477fda(0x1cd)](...arguments);}Window_TutorialPages[_0x45f21b(0x288)]=Object[_0x45f21b(0x258)](Window_HorzCommand[_0x45f21b(0x288)]),Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x272)]=Window_TutorialPages,Window_TutorialPages[_0x45f21b(0x288)]['initialize']=function(_0x4d6dff){const _0x53463f=_0x45f21b;this[_0x53463f(0x26c)]=0x0,Window_HorzCommand['prototype'][_0x53463f(0x1cd)][_0x53463f(0x310)](this,_0x4d6dff),this[_0x53463f(0x234)](0x0),this[_0x53463f(0x207)]();},Window_TutorialPages[_0x45f21b(0x288)]['clearCache']=function(){const _0x97e872=_0x45f21b;delete this['_maxColCache'],delete this[_0x97e872(0x1e3)],this[_0x97e872(0x26c)]=0x0,this[_0x97e872(0x2a2)]=0x0;},Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x23c)]=function(){const _0x2e1314=_0x45f21b;if(this['_maxColCache']!==undefined)return this[_0x2e1314(0x1df)];return this['_maxColCache']=SceneManager['_scene'][_0x2e1314(0x232)]()[_0x2e1314(0x1d6)],this[_0x2e1314(0x1df)];},Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x1ff)]=function(){return 0x0;},Window_TutorialPages[_0x45f21b(0x288)]['itemWidth']=function(){const _0x30114f=_0x45f21b;if(this['_itemWidthCache']!==undefined)return this[_0x30114f(0x1e3)];const _0x46fc52=TextManager[_0x30114f(0x2ec)][_0x30114f(0x2d4)],_0x40e910=TextManager['tutorial'][_0x30114f(0x293)],_0x569537=Math[_0x30114f(0x271)](this[_0x30114f(0x2ee)](_0x46fc52)[_0x30114f(0x2e2)],this[_0x30114f(0x2ee)](_0x40e910)[_0x30114f(0x2e2)]);return this['_itemWidthCache']=Math['ceil'](_0x569537+0x1*this[_0x30114f(0x2c1)]()),this[_0x30114f(0x1e3)];},Window_TutorialPages['prototype']['itemRect']=function(_0x238556){const _0x4f4f7b=_0x45f21b,_0x2d74aa=this['maxCols'](),_0x421d71=this[_0x4f4f7b(0x2b9)](),_0x56e7f8=this[_0x4f4f7b(0x324)](),_0x37d8ce=_0x421d71*_0x2d74aa,_0x1b2a47=Math[_0x4f4f7b(0x23d)]((this[_0x4f4f7b(0x223)]-_0x37d8ce)/0x2)+_0x238556*_0x421d71,_0xb25fa0=0x0,_0x58a694=_0x421d71,_0x7dad6=_0x56e7f8;return new Rectangle(_0x1b2a47,_0xb25fa0,_0x58a694,_0x7dad6);},Window_TutorialPages[_0x45f21b(0x288)]['makeCommandList']=function(){const _0xa2b415=_0x45f21b;let _0x583fae=this[_0xa2b415(0x23c)]();while(_0x583fae--){this[_0xa2b415(0x30d)]('','page',!![],this[_0xa2b415(0x1fc)][_0xa2b415(0x1d6)]);}},Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x30a)]=function(_0x585903){},Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x2a9)]=function(_0x50f906){const _0x51a68c=_0x45f21b,_0x55636d=this['itemLineRect'](_0x50f906),_0xe82fb8=this['commandName'](_0x50f906),_0xf4c0e6=this[_0x51a68c(0x2ee)](_0xe82fb8)['width'];this[_0x51a68c(0x19f)](this[_0x51a68c(0x2cd)](_0x50f906));const _0x213e8e=this[_0x51a68c(0x20f)]();if(_0x213e8e===_0x51a68c(0x1f4))this[_0x51a68c(0x19c)](_0xe82fb8,_0x55636d['x']+_0x55636d[_0x51a68c(0x2e2)]-_0xf4c0e6,_0x55636d['y'],_0xf4c0e6);else{if(_0x213e8e===_0x51a68c(0x1bb)){const _0x2c3531=_0x55636d['x']+Math[_0x51a68c(0x23d)]((_0x55636d[_0x51a68c(0x2e2)]-_0xf4c0e6)/0x2);this[_0x51a68c(0x19c)](_0xe82fb8,_0x2c3531,_0x55636d['y'],_0xf4c0e6);}else this[_0x51a68c(0x19c)](_0xe82fb8,_0x55636d['x'],_0x55636d['y'],_0xf4c0e6);}},Window_TutorialPages['prototype'][_0x45f21b(0x256)]=function(_0x293e50){const _0x533543=_0x45f21b;return _0x293e50===SceneManager[_0x533543(0x1dd)]['tutorialPageIndex']()?TextManager[_0x533543(0x2ec)][_0x533543(0x2d4)]:TextManager['tutorial'][_0x533543(0x293)];},Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x234)]=function(_0x2729b4){const _0x1bb558=_0x45f21b;Window_HorzCommand[_0x1bb558(0x288)][_0x1bb558(0x234)][_0x1bb558(0x310)](this,_0x2729b4),this[_0x1bb558(0x26c)]!==this[_0x1bb558(0x2a2)]&&(this[_0x1bb558(0x26c)]>=0x0&&this['_index']>=0x0&&SoundManager['playTutorialPageChange'](),this[_0x1bb558(0x26c)]=this[_0x1bb558(0x2a2)],SceneManager[_0x1bb558(0x1dd)][_0x1bb558(0x1da)]=this[_0x1bb558(0x2a2)],this['refresh']());},Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x298)]=function(){const _0x4d7dff=_0x45f21b;this[_0x4d7dff(0x29d)](0x0,0x0,0x0,0x0);},Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x20f)]=function(){const _0x25032f=_0x45f21b;return _0x25032f(0x1bb);},Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x2b6)]=function(){return!![];},Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x25b)]=function(){},Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x24c)]=function(){},Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x200)]=function(){return![];},Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x208)]=function(_0x54ec2e){const _0x56fe9c=_0x45f21b;Window_HorzCommand['prototype'][_0x56fe9c(0x208)][_0x56fe9c(0x310)](this,![]);},Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x1ba)]=function(_0x4faa0e){const _0x4138d7=_0x45f21b;Window_HorzCommand[_0x4138d7(0x288)][_0x4138d7(0x1ba)][_0x4138d7(0x310)](this,![]);},Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x2f7)]=function(){const _0x2da0a7=_0x45f21b;this[_0x2da0a7(0x208)]();},Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x26a)]=function(){const _0x52b3f4=_0x45f21b;this[_0x52b3f4(0x1ba)]();},Window_TutorialPages[_0x45f21b(0x288)][_0x45f21b(0x1c4)]=function(_0x41cf05){const _0x48eb6f=_0x45f21b;if(_0x41cf05)return;Window_HorzCommand[_0x48eb6f(0x288)][_0x48eb6f(0x1c4)][_0x48eb6f(0x310)](this,_0x41cf05);},Window_TutorialPages[_0x45f21b(0x288)]['onTouchOk']=function(){const _0xfb8a45=_0x45f21b,_0x48585d=this[_0xfb8a45(0x28b)]();if(_0x48585d>=0x0)return;const _0x32d352=0x3c;if(TouchInput['y']<_0x32d352||TouchInput['y']>Graphics[_0xfb8a45(0x2bd)]-_0x32d352)return;if(TouchInput['x']>=Graphics[_0xfb8a45(0x2e2)]/0x2){const _0x5e77b6=Math[_0xfb8a45(0x203)](this[_0xfb8a45(0x249)]()+0x1,this['maxCols']()-0x1),_0x5e84f7=this[_0xfb8a45(0x249)]();this[_0xfb8a45(0x234)](_0x5e77b6);if(this['index']()===_0x5e84f7){const _0x51ec46=SceneManager[_0xfb8a45(0x1dd)];if(_0x51ec46[_0xfb8a45(0x238)])_0x51ec46[_0xfb8a45(0x238)]();if(_0x51ec46[_0xfb8a45(0x2a3)])_0x51ec46[_0xfb8a45(0x2a3)]();}}else{if(TouchInput['x']<Graphics['width']/0x2){if(_0xfb8a45(0x1c0)!==_0xfb8a45(0x1c0))return _0xfb8a45(0x1bb);else{const _0x35184f=Math[_0xfb8a45(0x271)](this[_0xfb8a45(0x249)]()-0x1,0x0);this[_0xfb8a45(0x234)](_0x35184f);}}}},Window_TutorialPages['prototype'][_0x45f21b(0x322)]=function(){const _0x39cffd=_0x45f21b;if(this[_0x39cffd(0x193)]()&&!this['isTouchedInsideFrame']()){if('IGnau'===_0x39cffd(0x279)){const _0x4512bb=this['titleWindowRect'](),_0x4393ad=new _0x8df0c(_0x4512bb);this[_0x39cffd(0x292)](_0x4393ad),this[_0x39cffd(0x2d7)]=_0x4393ad,_0x4393ad[_0x39cffd(0x1e8)](_0x270a0e[_0x39cffd(0x1f0)][_0x39cffd(0x215)][_0x39cffd(0x2cf)][_0x39cffd(0x21a)]),_0x4393ad[_0x39cffd(0x2ab)](this[_0x39cffd(0x2fa)]());}else{const _0x504bc3=0x14;if(TouchInput[_0x39cffd(0x23a)]>=_0x504bc3){const _0x36dd6e=Math[_0x39cffd(0x203)](this['index']()+0x1,this['maxCols']()-0x1);this[_0x39cffd(0x234)](_0x36dd6e);}if(TouchInput[_0x39cffd(0x23a)]<=-_0x504bc3){const _0x3e7b42=Math['max'](this[_0x39cffd(0x249)]()-0x1,0x0);this[_0x39cffd(0x234)](_0x3e7b42);}}}};function _0x2da2(_0x2acaea,_0x1bc652){const _0x495444=_0x4954();return _0x2da2=function(_0x2da280,_0x2afc77){_0x2da280=_0x2da280-0x193;let _0x3e119e=_0x495444[_0x2da280];return _0x3e119e;},_0x2da2(_0x2acaea,_0x1bc652);}function Window_TutorialDescription(){const _0x16898f=_0x45f21b;this[_0x16898f(0x1cd)](...arguments);}Window_TutorialDescription[_0x45f21b(0x288)]=Object[_0x45f21b(0x258)](Window_Base['prototype']),Window_TutorialDescription['prototype']['constructor']=Window_TutorialDescription,Window_TutorialDescription[_0x45f21b(0x288)][_0x45f21b(0x1cd)]=function(_0xecd1ab){const _0x63faf6=_0x45f21b;Window_Base['prototype']['initialize'][_0x63faf6(0x310)](this,_0xecd1ab),this[_0x63faf6(0x2ae)]='',this[_0x63faf6(0x198)]=-0x1;},Window_TutorialDescription[_0x45f21b(0x288)][_0x45f21b(0x2ab)]=function(_0x2b2c2f){const _0x21863b=_0x45f21b;this['_text']!==_0x2b2c2f&&(this[_0x21863b(0x2ae)]=_0x2b2c2f,this['refresh']());},Window_TutorialDescription[_0x45f21b(0x288)][_0x45f21b(0x207)]=function(){const _0x54c030=_0x45f21b;this[_0x54c030(0x27f)][_0x54c030(0x2f1)]();const _0x12272f=this['_text'],_0x3e6706=this[_0x54c030(0x2ee)](_0x12272f),_0xf1b327=Math['floor']((this[_0x54c030(0x223)]-_0x3e6706[_0x54c030(0x2e2)])/0x2),_0x58eb79=Math[_0x54c030(0x23d)]((this[_0x54c030(0x1a8)]-_0x3e6706[_0x54c030(0x2bd)])/0x2);this[_0x54c030(0x19c)](_0x12272f,_0xf1b327,_0x58eb79);},Window_TutorialDescription[_0x45f21b(0x288)]['update']=function(){const _0xc3b637=_0x45f21b;Window_Base[_0xc3b637(0x288)][_0xc3b637(0x22c)][_0xc3b637(0x310)](this),this[_0xc3b637(0x316)]();},Window_TutorialDescription[_0x45f21b(0x288)][_0x45f21b(0x316)]=function(_0x48b963){const _0x56f153=_0x45f21b;if(!_0x48b963&&this[_0x56f153(0x198)]===SceneManager[_0x56f153(0x1dd)][_0x56f153(0x2c3)]())return;const _0x9b46d0=SceneManager[_0x56f153(0x1dd)];this[_0x56f153(0x198)]=_0x9b46d0[_0x56f153(0x2c3)]();const _0x3341e8=_0x9b46d0[_0x56f153(0x2d6)]()?_0x9b46d0[_0x56f153(0x2d6)]()[_0x56f153(0x1d8)]||'':'';this['setText'](_0x3341e8[_0x56f153(0x30c)]());};function Window_TutorialPicture(){const _0x45ce49=_0x45f21b;this[_0x45ce49(0x1cd)](...arguments);}Window_TutorialPicture['prototype']=Object[_0x45f21b(0x258)](Window_Base[_0x45f21b(0x288)]),Window_TutorialPicture[_0x45f21b(0x288)][_0x45f21b(0x272)]=Window_TutorialPicture,Window_TutorialPicture[_0x45f21b(0x288)][_0x45f21b(0x1cd)]=function(_0x3ce42d){const _0x15ace0=_0x45f21b;Window_Base[_0x15ace0(0x288)][_0x15ace0(0x1cd)][_0x15ace0(0x310)](this,_0x3ce42d),this['createPictureSprite'](),this['_filename']='',this[_0x15ace0(0x198)]=-0x1;},Window_TutorialPicture['prototype'][_0x45f21b(0x2b2)]=function(){const _0x558f4c=_0x45f21b;this[_0x558f4c(0x1b3)]=new Sprite(),this[_0x558f4c(0x1a9)](this['_pictureSprite']),this['_pictureSprite']['anchor']['x']=0.5,this[_0x558f4c(0x1b3)][_0x558f4c(0x19a)]['y']=0.5,this[_0x558f4c(0x1b3)]['x']=Math[_0x558f4c(0x23d)](this[_0x558f4c(0x2e2)]/0x2),this['_pictureSprite']['y']=Math[_0x558f4c(0x23d)](this[_0x558f4c(0x2bd)]/0x2);},Window_TutorialPicture[_0x45f21b(0x288)][_0x45f21b(0x260)]=function(_0x3c9610){const _0xd7d21d=_0x45f21b;if(!this['_pictureSprite'])return;this[_0xd7d21d(0x1a5)]!==_0x3c9610&&('ERlcg'!==_0xd7d21d(0x31f)?this[_0xd7d21d(0x19c)](_0x4f570a,_0x437b8a['x']+_0x9a09b9[_0xd7d21d(0x2e2)]-_0x360c46,_0x4940b8['y'],_0x26c44e):(this[_0xd7d21d(0x1a5)]=_0x3c9610,this['refresh']()));},Window_TutorialPicture[_0x45f21b(0x288)][_0x45f21b(0x207)]=function(){const _0x3e5d6e=_0x45f21b;this['_filename']!==''?this[_0x3e5d6e(0x1b3)][_0x3e5d6e(0x231)]=ImageManager[_0x3e5d6e(0x27b)](this[_0x3e5d6e(0x1a5)]):'NHobU'!=='UyhGp'?this[_0x3e5d6e(0x1b3)]['bitmap']=new Bitmap(0x1,0x1):(this[_0x3e5d6e(0x237)]['show'](),this[_0x3e5d6e(0x237)][_0x3e5d6e(0x316)](!![]),this[_0x3e5d6e(0x237)]['refresh']());},Window_TutorialPicture[_0x45f21b(0x288)][_0x45f21b(0x22c)]=function(){const _0x3a5745=_0x45f21b;Window_Base[_0x3a5745(0x288)]['update'][_0x3a5745(0x310)](this),this[_0x3a5745(0x316)]();},Window_TutorialPicture[_0x45f21b(0x288)][_0x45f21b(0x316)]=function(_0x714e55){const _0x427090=_0x45f21b;if(!_0x714e55&&this[_0x427090(0x198)]===SceneManager[_0x427090(0x1dd)][_0x427090(0x2c3)]())return;const _0x294470=SceneManager[_0x427090(0x1dd)];this[_0x427090(0x198)]=_0x294470['tutorialPageIndex']();const _0x3c2bfc=_0x294470['currentTutorialPage']()?_0x294470['currentTutorialPage']()[_0x427090(0x211)]||'':'';this[_0x427090(0x260)](_0x3c2bfc);};function Window_TutorialTitle(){this['initialize'](...arguments);}Window_TutorialTitle[_0x45f21b(0x288)]=Object['create'](Window_Base[_0x45f21b(0x288)]),Window_TutorialTitle[_0x45f21b(0x288)][_0x45f21b(0x272)]=Window_TutorialTitle,Window_TutorialTitle[_0x45f21b(0x288)][_0x45f21b(0x1cd)]=function(_0xf706ce){const _0x58d134=_0x45f21b;Window_Base[_0x58d134(0x288)]['initialize'][_0x58d134(0x310)](this,_0xf706ce),this['_text']='';},Window_TutorialTitle['prototype'][_0x45f21b(0x2ab)]=function(_0x4d7084){const _0x43487d=_0x45f21b;this[_0x43487d(0x2ae)]!==_0x4d7084&&(this[_0x43487d(0x2ae)]=_0x4d7084,this[_0x43487d(0x207)]());},Window_TutorialTitle['prototype'][_0x45f21b(0x2f1)]=function(){const _0x10c97e=_0x45f21b;this[_0x10c97e(0x2ab)]('');},Window_TutorialTitle[_0x45f21b(0x288)][_0x45f21b(0x207)]=function(){const _0x3bc877=_0x45f21b;this[_0x3bc877(0x27f)][_0x3bc877(0x2f1)]();const _0x3d8843=this[_0x3bc877(0x2ae)],_0x5a742d=this[_0x3bc877(0x2ee)](_0x3d8843),_0x37623e=Math['floor']((this[_0x3bc877(0x223)]-_0x5a742d['width'])/0x2),_0x310ef6=Math[_0x3bc877(0x23d)]((this[_0x3bc877(0x1a8)]-_0x5a742d[_0x3bc877(0x2bd)])/0x2);this[_0x3bc877(0x19c)](_0x3d8843,_0x37623e,_0x310ef6);};function Window_TutorialList(){this['initialize'](...arguments);}function _0x4954(){const _0x4b2e19=['Window_MenuCommand_addOriginalCommands','addTutorialPanelSysNewOptionCommand','initTutorialPanelSysMainMenu','show','prototype','parameters','smoothSelect','hitIndex','Scene_Battle_updateStatusWindowVisibility','MycCi','addOriginalCommands','bind','GYNuq','isTutorialCategoryPopulated','addWindow','inactivePage','NUM','activate','menuCmd','VocabNextPage','refreshCursor','Key','lPVNT','push','2dnmNOw','setCursorRect','Title','_tutorialPageWindow','loadTitle2','FUNC','_index','nextPage','OiRcg','_tutorialPictureWindow','isMainMenuTutorialListVisible','VocabExpand','getTutorialCategoryPopulation','drawItem','hzKie','setText','fBQzp','SystemEnableTutorialListMenu','_text','_statusWindow','maxCommands','BgFilename2','createPictureSprite','createTitleWindow','TlFfb','RQYPs','isMenuCursorBlacklisted','status','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','itemWidth','_tutorialData','2070lkvOSM','_returnTutorialKey','height','createCommandWindow','left','ARRAYSTRUCT','itemPadding','SceneTutorialList','tutorialPageIndex','cancel','addGeneralOptions','pageWindowRect','maxVisibleItems','RXLbc','Scene_Battle_isAnyInputWindowActive','(needs\x20key)','currentCategory','ListWindow_BgType','isCommandEnabled','_tutorialTitleWindow','SceneTutorialData','VocabView','name','49446fHescq','MainMenuName','activePage','ext','currentTutorialPage','_titleWindow','description','updateStatusWindowVisibility','symbol','DescWindow_BgType','page','category','Puvss','isAnyInputWindowActive','includeTutorial','createCustomBackgroundImages','width','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','Show','Game_Interpreter_PluginCommand','_scrollDuration','buttonAssistText5','isPlaytest','Categories','tutorialData','Name','tutorial','456710fbWinU','textSizeEx','BgFilename1','_TutorialPanelSys_MainMenu','clear','isHideStatusWindowTutorial','ListWindow_RectJS','SceneBattle','kZPZf','tutorialKey','cursorPagedown','pictureWindowRect','buttonAreaHeight','tutorialTitle','exit','Options','Category','JiMCg','parse','addLoadListener','CategoryTutorials','findIndex','createPictureWindow','toLowerCase','openCloseCurrentCategory','registerTutorialKey','map','return\x200','HideDuring','drawItemBackground','sYkxF','trim','addCommand','createTutorialDescriptionWindow','_categoryStatus','call','optionsCmd','view','euHfb','createAllWindows','EnableMainMenu','updatePage','makeCommandList','closedCategoriesFmt','createTutorialPictureWindow','ARRAYEVAL','setBackgroundOpacity','shown','setTopRow','TutorialRegisterKeys','ERlcg','_interpreter','isTutorialListCommandVisible','processWheelScroll','createListWindow','itemHeight','isMainMenuTutorialListEnabled','isWheelScrollEnabled','tutorialPictureWindowRect','ConfigManager_makeData','kwfDy','Scene_Options_maxCommands','_lastPage','bbwQq','anchor','_visibleTutorialKeys','drawTextEx','hide','addTutorial','changePaintOpacity','commandTutorialList','isSceneBattle','GBKKQ','adjustSprite','bdkVk','_filename','51127WQxpOc','_tutorialKey','innerHeight','addChild','JMsca','DescWindow_RectJS','VocabInactivePage','wait','xhVtB','SystemShowTutorialListMenu','updateSmoothScroll','1933995OWoPmC','VocabActivePage','_pictureSprite','showTutorials','addCategory','createDescriptionWindow','VocabUnlisted','tehGd','openTutorial','cursorLeft','center','ConfigManager_applyData','WSRCv','WVmgj','reselectReturnTutorialKey','GFkMm','deactivate','_descriptionWindow','setWaitMode','onTouchSelect','buttonAssistKey1','FNeoO','boxWidth','ARRAYFUNC','MBfRT','isCategoryOpen','findSymbolExt','_lastPluginCommandInterpreter','initialize','playSe','finish','DebugFullTutorial','VOQAF','addTutorialListCommands','ForceView','54BbZwjT','oNYox','length','_waitMode','Description','Gcqsy','_tutorialPageIndex','Reveal','99bdDHbX','_scene','initCategoryStatus','_maxColCache','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','createPageWindow','addTutorialListCommand','_itemWidthCache','ffRdl','JVLOH','tutorialPageWindowRect','mvJyO','setBackgroundType','initTutorialMembers','openCategoriesFmt','registerCommand','createBackground','centerSprite','setMainMenuTutorialLabelEnabled','10916328hUKuiL','TutorialPanelSys','Scene_Boot_onDatabaseLoaded','version','tutorialList','right','Sound','QpOlo','mainAreaHeight','tutorialDescriptionWindowRect','_backSprite1','mainAreaTop','CategoryData','_list','closeTutorial','unlisted','colSpacing','isUseModernControls','PictureWindow_RectJS','jAWPW','min','isTutorialKeyRegistered','listWindowRect','updateWaitMode','refresh','cursorRight','match','_listWindow','applyData','process_VisuMZ_TutorialCategories','PageWindow_RectJS','buttonAssistText4','itemTextAlign','wZKTx','Filename','EVAL','752YMNXZp','isTouchedInsideFrame','Settings','helpAreaHeight','loadTitle1','mainAreaBottom','ConvertParams','TitleWindow_BgType','pWRPS','PageWindow_BgType','titleWindowRect','popScene','calcWindowHeight','setMainMenuTutorialListVisible','process_VisuMZ_TutorialPanelSys','close','innerWidth','STR','_buttonAssistWindow','JSON','createTutorialWindows','tutorialTitleWindowRect','EeFyF','_backSprite2','303175cbFsXW','update','Game_Interpreter_updateWaitMode','CSlOO','setHandler','PictureWindow_BgType','bitmap','tutorialPages','collapse','select','addTutorialListCommandAutomatically','currentExt','_tutorialDescriptionWindow','nextTutorialPage','initTutorialPanelSysSettings','wheelY','_pageWindow','maxCols','floor','gqezl','callUpdateHelp','IsKsz','ShowMainMenu','CategoryOrder','TitleWindow_RectJS','includeCategory','1172YyhmDO','Tutorials','mcKVJ','TutorialCall','index','changePage','includes','playOkSound','remove','setLastPluginCommandInterpreter','AddTutorialsOption','itemLineRect','createTutorialPageWindow','command357','toUpperCase','playCancel','Scene_Battle_createAllWindows','commandName','clearCache','create','isSceneMap','setDebugViewTutorialList','playCursorSound','makeTutorialList','descriptionWindowRect','TutorialList','_debugViewTutorialList','setFilename','enabled','currentSymbol','active','getLastPluginCommandInterpreter','gGCdN','format','Scene_Menu_createCommandWindow','_commandWindow','VisuMZ_1_MainMenuCore','cursorPageup','isTutorialListCommandEnabled','_lastIndex','ARRAYJSON','Game_System_initialize','IqlJf','createTutorialTitleWindow','max','constructor','isValidTutorial','process_VisuMZ_TutorialData','scaleSprite','VocabClosedCategory','removeTutorialKey','IwnfV','mCFWD','cjlrk','loadPicture','getBackgroundOpacity','canDebugViewTutorialList','boxHeight','contents','onListTutorial','ARRAYNUM','onDatabaseLoaded','KeyIDs'];_0x4954=function(){return _0x4b2e19;};return _0x4954();}Window_TutorialList[_0x45f21b(0x288)]=Object[_0x45f21b(0x258)](Window_Command[_0x45f21b(0x288)]),Window_TutorialList[_0x45f21b(0x288)]['constructor']=Window_TutorialList,Window_TutorialList[_0x45f21b(0x288)][_0x45f21b(0x1cd)]=function(_0x12ab6c){const _0x5bb3ba=_0x45f21b;this[_0x5bb3ba(0x1de)](),Window_Command[_0x5bb3ba(0x288)][_0x5bb3ba(0x1cd)][_0x5bb3ba(0x310)](this,_0x12ab6c),this[_0x5bb3ba(0x1bf)]();},Window_TutorialList['prototype']['initCategoryStatus']=function(){const _0x4a8355=_0x45f21b;this[_0x4a8355(0x30f)]={};const _0x4ed59d=VisuMZ[_0x4a8355(0x1f0)]['CategoryOrder'];for(const _0x80b41f of _0x4ed59d){if(!this[_0x4a8355(0x244)](_0x80b41f))continue;this[_0x4a8355(0x30f)][_0x80b41f['toLowerCase']()[_0x4a8355(0x30c)]()]=!![];}},Window_TutorialList[_0x45f21b(0x288)][_0x45f21b(0x1bf)]=function(){const _0x2dba48=_0x45f21b;if($gameTemp[_0x2dba48(0x2bc)]===undefined)return;const _0x4cb6b0=$gameTemp['_returnTutorialKey'];$gameTemp['_returnTutorialKey']=undefined;const _0x315339=this[_0x2dba48(0x1cb)](_0x2dba48(0x2ec),_0x4cb6b0),_0x59de45=Math[_0x2dba48(0x23d)](this[_0x2dba48(0x2c7)]()/0x2)-0x1;this[_0x2dba48(0x28a)](_0x315339),this['_scrollDuration']>0x1&&(this[_0x2dba48(0x2e6)]=0x1,this[_0x2dba48(0x1b0)]()),this[_0x2dba48(0x31d)](_0x315339-_0x59de45),this[_0x2dba48(0x23f)]();},Window_TutorialList['prototype'][_0x45f21b(0x1cb)]=function(_0x468368,_0x574555){const _0x57fb68=_0x45f21b;return this[_0x57fb68(0x1fc)]['findIndex'](_0x10dee2=>_0x10dee2['symbol']===_0x468368&&_0x10dee2[_0x57fb68(0x2d5)]===_0x574555);},Window_TutorialList[_0x45f21b(0x288)][_0x45f21b(0x317)]=function(){const _0x4eba1d=_0x45f21b,_0x333c2f=VisuMZ[_0x4eba1d(0x1f0)][_0x4eba1d(0x242)];for(const _0x1a46a9 of _0x333c2f){if(_0x4eba1d(0x265)===_0x4eba1d(0x2c8)){if(_0x4c4ada['TutorialPanelSys'][_0x4eba1d(0x215)][_0x4eba1d(0x2c2)][_0x4eba1d(0x2f3)])return _0x144eb9[_0x4eba1d(0x1f0)][_0x4eba1d(0x215)]['SceneTutorialList'][_0x4eba1d(0x2f3)][_0x4eba1d(0x310)](this);const _0x1df3b3=_0x2fe6ed[_0x4eba1d(0x271)](0x2d0,_0x288ddd['floor'](_0x157799[_0x4eba1d(0x1c7)]*0.75)),_0x2b07ee=_0x2f126a['max'](_0x1df3b3-0x12c,0x1e0),_0x30e72a=this['calcWindowHeight'](0xa,!![]),_0x304793=_0x477286[_0x4eba1d(0x23d)]((_0x2f433b[_0x4eba1d(0x1c7)]-_0x2b07ee)/0x2),_0x3a99f1=_0x411d6f['floor']((_0x355235[_0x4eba1d(0x27e)]-_0x30e72a)/0x2);return new _0x3aaa28(_0x304793,_0x3a99f1,_0x2b07ee,_0x30e72a);}else{if(!this[_0x4eba1d(0x244)](_0x1a46a9))continue;this[_0x4eba1d(0x1b5)](_0x1a46a9);}}},Window_TutorialList['prototype'][_0x45f21b(0x244)]=function(_0x162e5c){const _0x2f66e2=_0x45f21b;if($gameTemp[_0x2f66e2(0x27d)]())return!![];return $gameSystem[_0x2f66e2(0x291)](_0x162e5c);},Window_TutorialList[_0x45f21b(0x288)][_0x45f21b(0x1ca)]=function(_0x4ff7e0){const _0x53fd2d=_0x45f21b;return _0x4ff7e0=_0x4ff7e0['toLowerCase']()[_0x53fd2d(0x30c)](),this[_0x53fd2d(0x30f)][_0x4ff7e0];},Window_TutorialList[_0x45f21b(0x288)][_0x45f21b(0x1b5)]=function(_0x17ef5d){const _0x26c73a=_0x45f21b;_0x17ef5d=_0x17ef5d[_0x26c73a(0x304)]()[_0x26c73a(0x30c)]();const _0xc96392=_0x17ef5d===_0x26c73a(0x1fe),_0xc8d83e=this[_0x26c73a(0x1ca)](_0x17ef5d)?TextManager['tutorial'][_0x26c73a(0x1ea)]:TextManager['tutorial'][_0x26c73a(0x318)],_0x2e3c49=_0xc96392?{}:VisuMZ[_0x26c73a(0x1f0)][_0x26c73a(0x1fb)][_0x17ef5d];if(!_0x2e3c49)return;const _0x4d4b7d=_0xc96392?TextManager[_0x26c73a(0x2ec)]['unlisted']:_0x2e3c49['Title'],_0x1f3dff=$gameSystem[_0x26c73a(0x2a8)](_0x17ef5d);if(_0x1f3dff<=0x0)return;const _0x3e2699=_0xc8d83e[_0x26c73a(0x266)](_0x4d4b7d,_0x1f3dff);this[_0x26c73a(0x30d)](_0x3e2699,_0x26c73a(0x2dd),!![],_0x17ef5d),this[_0x26c73a(0x25c)](_0x17ef5d);},Window_TutorialList[_0x45f21b(0x288)][_0x45f21b(0x305)]=function(){const _0x31dc3b=_0x45f21b,_0x1ced36=this['currentCategory']();this[_0x31dc3b(0x30f)][_0x1ced36]=!this['_categoryStatus'][_0x1ced36],this['refresh']();},Window_TutorialList[_0x45f21b(0x288)][_0x45f21b(0x2cb)]=function(){const _0x4e386e=_0x45f21b;return this['currentSymbol']()===_0x4e386e(0x2dd)?this['currentExt']():null;},Window_TutorialList[_0x45f21b(0x288)]['makeTutorialList']=function(_0xbffdfe){const _0x3e6bad=_0x45f21b;if(!this[_0x3e6bad(0x1ca)](_0xbffdfe))return;const _0x4be1a3=VisuMZ[_0x3e6bad(0x1f0)][_0x3e6bad(0x301)][_0xbffdfe];for(const _0x27908d of _0x4be1a3){if(_0x3e6bad(0x2a4)!==_0x3e6bad(0x2a4)){let _0x37c529=_0x147f10[_0x3e6bad(0x1f0)][_0x3e6bad(0x197)][_0x3e6bad(0x310)](this);const _0x2d6304=_0x262f5d[_0x3e6bad(0x1f0)][_0x3e6bad(0x215)][_0x3e6bad(0x2fc)];if(_0x2d6304['AddTutorialsOption']&&_0x2d6304['AdjustRect'])_0x37c529++;return _0x37c529;}else{if(!this['includeTutorial'](_0x27908d))continue;this['addTutorial'](_0x27908d);}}},Window_TutorialList['prototype'][_0x45f21b(0x2e0)]=function(_0x7ea411){const _0x16a147=_0x45f21b;if(!VisuMZ[_0x16a147(0x1f0)][_0x16a147(0x273)](_0x7ea411))return![];if($gameTemp['canDebugViewTutorialList']())return!![];return $gameSystem[_0x16a147(0x204)](_0x7ea411);},Window_TutorialList[_0x45f21b(0x288)][_0x45f21b(0x19e)]=function(_0x52331e){const _0x2362c5=_0x45f21b;_0x52331e=_0x52331e[_0x2362c5(0x304)]()['trim']();const _0x2b37e5=VisuMZ['TutorialPanelSys'][_0x2362c5(0x246)][_0x52331e];if(!_0x2b37e5)return;const _0x2c2404=_0x2b37e5[_0x2362c5(0x29e)];this['addCommand'](_0x2c2404,_0x2362c5(0x2ec),!![],_0x52331e);},Window_TutorialList[_0x45f21b(0x288)][_0x45f21b(0x20f)]=function(){return'left';},Window_TutorialList['prototype']['drawItem']=function(_0x33594f){const _0x4635d9=_0x45f21b,_0x147843=this[_0x4635d9(0x250)](_0x33594f),_0xede184=this[_0x4635d9(0x256)](_0x33594f),_0x356bf7=this[_0x4635d9(0x2ee)](_0xede184)[_0x4635d9(0x2e2)];this[_0x4635d9(0x19f)](this[_0x4635d9(0x2cd)](_0x33594f));const _0x599b93=this['itemTextAlign']();if(_0x599b93===_0x4635d9(0x1f4))_0x4635d9(0x1ae)===_0x4635d9(0x1ae)?this['drawTextEx'](_0xede184,_0x147843['x']+_0x147843['width']-_0x356bf7,_0x147843['y'],_0x356bf7):(this[_0x4635d9(0x1a7)]='',this[_0x4635d9(0x2ba)]=_0x4fa6f5[_0x4635d9(0x1f0)]['Tutorials'][this[_0x4635d9(0x1a7)]],this[_0x4635d9(0x1da)]=0x0);else{if(_0x599b93==='center'){if(_0x4635d9(0x2fe)!=='Rdshe'){const _0x348d8f=_0x147843['x']+Math[_0x4635d9(0x23d)]((_0x147843['width']-_0x356bf7)/0x2);this[_0x4635d9(0x19c)](_0xede184,_0x348d8f,_0x147843['y'],_0x356bf7);}else _0x57d6d7[_0x4635d9(0x288)][_0x4635d9(0x1cd)][_0x4635d9(0x310)](this),this[_0x4635d9(0x1e9)]();}else{if(_0x4635d9(0x1a4)===_0x4635d9(0x1a4))this[_0x4635d9(0x19c)](_0xede184,_0x147843['x'],_0x147843['y'],_0x356bf7);else{const _0x2877d6=_0x3e58b4[_0x4635d9(0x203)](this[_0x4635d9(0x249)]()+0x1,this[_0x4635d9(0x23c)]()-0x1);this['select'](_0x2877d6);}}}};