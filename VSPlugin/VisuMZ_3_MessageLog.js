//=============================================================================
// VisuStella MZ - Message Log
// VisuMZ_3_MessageLog.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_MessageLog = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MessageLog = VisuMZ.MessageLog || {};
VisuMZ.MessageLog.version = 1.08;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.08] [MessageLog]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Message_Log_VisuStella_MZ
 * @base VisuMZ_1_MessageCore
 * @orderAfter VisuMZ_1_MessageCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Message Log plugin will take and record any Show Message entries played
 * on the map screen so that players can go back to them and review them at a
 * later point in time when needed. This is helpful for players who may have
 * missed important information that would have been displayed or those who
 * would like to review what was said previously. The Message Log will not
 * record any of the text displayed in the battle scene in order to preserve
 * the data to one specific scene.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Record messages written out in the "Show Text" command while the player is
 *   on the map screen.
 * * Players can access the Message Log through either the Main Menu or by a
 *   shortcut key whenever the Message Window is open.
 * * Faces and speaker names will also be recorded.
 * * Choice List selections, Number Inputs, and selected Event Items will also
 *   be recorded.
 * * Those using the Extended Message Functionality plugin can also bind this
 *   effect to the Button Console.
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
 * * VisuMZ_1_MessageCore
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
 * Replaced Message Text Codes
 * 
 * Some text codes are not compatible with the Message Log when viewed such as
 * wait commands, showing the gold window, etc. When that happens, those text
 * codes will be removed from visibility in the Message Log in order to prevent
 * any problems. The following is a list of the Message Text Codes that will
 * not appear in the Message Log:
 * 
 *   --------------------
 *   Default RPG Maker MZ
 *   --------------------
 *   \$
 *   \.
 *   \|
 *   \!
 *   \>
 *   \<
 *   \^
 * 
 *   --------------------
 *   VisuMZ_1_MessageCore
 *   --------------------
 *   \Picture<x>
 *   \CenterPicture<x>
 *   \CommonEvent[x]
 *   \Wait[x]
 *   \NormalBG
 *   \DimBG
 *   \TransparentBG
 *   \WindowMoveTo: ?>
 *   \WindowMoveBy: ?>
 *   \WindowReset
 *   \TroopMember[x]
 *   \TroopNameMember[x]
 *   \ChangeFace<?>
 *   \FaceIndex[x]
 *   <Auto>
 *   <Auto Width>
 *   <Auto Height>
 *   <Auto Actor: x>
 *   <Auto Party: x>
 *   <Auto Enemy: x>
 *   <Auto Event: x>
 *   <Auto Player>
 *   <Show>
 *   <Show Switch: x>
 *   <Show All Switches: x,x,x>
 *   <Show Any Switches: x,x,x>
 *   <Hide>
 *   <Hide Switch: x>
 *   <Hide All Switches: x,x,x>
 *   <Hide Any Switches: x,x,x>
 *   <Enable>
 *   <Enable Switch: x>
 *   <Enable All Switches: x,x,x>
 *   <Enable Any Switches: x,x,x>
 *   <Disable>
 *   <Disable Switch: x>
 *   <Disable All Switches: x,x,x>
 *   <Disable Any Switches: x,x,x>
 *   <Position: ?>
 *   <Coordinates: ?>
 *   <Dimensions: ?>
 * 
 *   -----------------------
 *   VisuMZ_2_ExtMessageFunc
 *   -----------------------
 *   <Hide Buttons>
 * 
 *   -----------------------
 *   VisuMZ_2_PictureChoices
 *   -----------------------
 *   <Bind Picture: id>
 *   <Hide Choice Window>
 * 
 *   ----------------------
 *   VisuMZ_3_ChoiceCmnEvts
 *   ----------------------
 *   <Choice Common Event: id>
 * 
 *   -------------------
 *   VisuMZ_3_MessageLog
 *   -------------------
 *   <Bypass Message Log>
 * 
 *   ----------------------
 *   VisuMZ_3_MessageSounds
 *   ----------------------
 *   <Letter Sound On>
 *   <Letter Sound Off>
 *   \LetterSoundName<filename>
 *   \LetterSoundVolume[x]
 *   \LetterSoundPitch[x]
 *   \LetterSoundPan[x]
 *   \LetterSoundVolumeVar[x]
 *   \LetterSoundPitchVar[x]
 *   \LetterSoundPanVar[x]
 *   \LSON
 *   \LSOFF
 *   \LSN<filename>
 *   \LSV[x]
 *   \LSPI[x]
 *   \LSPA[x]
 *   \LSVV[x]
 *   \LSPIV[x]
 *   \LSPAV[x]
 * 
 *   ------------------------
 *   VisuMZ_4_EventTitleScene
 *   ------------------------
 *   <Continue>
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
 * VisuMZ_2_ExtMessageFunc
 * 
 * The Extended Message Functionality plugin enables the "Log" button found in
 * the Button Console to let the player go and review the text that has been
 * displayed in the map scene. This does not include the text found in battle
 * to avoid conflicting logged messages across different situations.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. 
 *
 * === Log-Related Text Codes ===
 * 
 * ---
 *
 * --------------------   -----------------------------------------------------
 * Text Code              Effect
 * --------------------   -----------------------------------------------------
 * 
 * <Bypass Message Log>   Prevents the specific "Show Text" window from being
 *                        recorded into the Message Log.
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
 * === Bypass Plugin Commands ===
 * 
 * ---
 *
 * Bypass: Message Logging?
 * - Bypass message logging until turned off.
 *
 *   Bypass?:
 *   - Bypasses Message Logging until turned off.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Enable Message Log in Menu?
 * - Enables/disables Message Log menu inside the main menu.
 *
 *   Enable/Disable?:
 *   - Enables/disables Message Log menu inside the main menu.
 *
 * ---
 *
 * System: Show Message Log in Menu?
 * - Shows/hides Message Log menu inside the main menu.
 *
 *   Show/Hide?:
 *   - Shows/hides Message Log menu inside the main menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General Settings for the Message Log.
 *
 * ---
 *
 * Settings
 * 
 *   Entry Limit:
 *   - How many message entries will be stored before the game will start
 *     trimming them?
 * 
 *   Shortcut Key:
 *   - This is the key used for opening the Message Log scene.
 *   - Does not work in battle!
 * 
 *   Show Faces?
 *   - Show face graphics in the Message Log?
 * 
 *   Pad Sides?
 *   - Pad the sides of the screen even without faces?
 *   - Ignore if the screen is too small.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Main Menu Settings
 * ============================================================================
 *
 * Main Menu settings for Message Log.
 *
 * ---
 *
 * Settings
 * 
 *   Command Name:
 *   - Name of the 'Message Log' option in the Main Menu.
 * 
 *   Show in Main Menu?:
 *   - Add the 'Message Log' option to the Main Menu by default?
 * 
 *   Enable in Main Menu?:
 *   - Enable the 'Message Log' option to the Main Menu by default?
 *   - This will be automatically disabled if there are no entries available.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_MessageLog.
 *
 * ---
 *
 * Settings
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
 * ExtMessageFunc
 * 
 *   Button Name:
 *   - How is this option's text displayed in-game?
 *   - Requires VisuMZ_2_ExtMessageFunc!
 *
 * ---
 *
 * Button Assist Window
 * 
 *   Slow Scroll:
 *   - Text used for slow scrolling.
 * 
 *   Fast Scroll:
 *   - Text used for fast scrolling.
 *
 * ---
 *
 * Choice Window Logging
 * 
 *   Text Format:
 *   - Text format for logging the selected choice text.
 *   - %1 - Selected Choice Text
 * 
 *   Cancel:
 *   - Text used when cancel branch is selected.
 *
 * ---
 *
 * Number Input Logging
 * 
 *   Text Format:
 *   - Text format for logging the inputted number value.
 *   - %1 - Number Value
 *
 * ---
 *
 * Event Item Logging
 * 
 *   Text Format:
 *   - Text format for logging the selected event Item.
 *   - %1 - Selected Event Item Text
 * 
 *   Name Format:
 *   - Text format for how item names are displayed.
 *   - %1 - Item Icon, %2 - Item Name
 * 
 *   No Item:
 *   - Text used when no item is selected.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Window settings for Scene_MessageLog.
 *
 * ---
 *
 * Message Log Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Appearance
 * 
 *   Speaker Name X:
 *   - What X coordinate do you want the speaker name to appear at?
 *
 * ---
 *
 * Color Lock
 * 
 *   Choices:
 *   - Color lock the logged choices?
 * 
 *   Number Inputs:
 *   - Color lock the logged Number Inputs?
 * 
 *   Event Item:
 *   - Color lock the logged selected Event Item?
 *
 * ---
 *
 * Scrolling > Slow
 * 
 *   Scroll Speed:
 *   - What speed will Up/Down scroll the window at?
 *   - Lower is slower. Higher is faster.
 * 
 *   Sound Frequency:
 *   - How frequent will Up/Down scrolling make sounds?
 *   - Lower is quicker. Higher is later.
 *
 * ---
 *
 * Scrolling > Fast
 * 
 *   Scroll Speed:
 *   - What speed will PageUp/PageDn scroll the window at?
 *   - Lower is slower. Higher is faster.
 * 
 *   Sound Frequency:
 *   - How frequent will PageUp/PageDn scrolling make sounds?
 *   - Lower is quicker. Higher is later.
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
 * * Trihan
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.08: August 15, 2024
 * * Bug Fixes!
 * ** Fixed a bug that caused the replay button to not appear. Fix by Irina.
 * 
 * Version 1.07: April 18, 2024
 * * Compatibility Update!
 * ** Added extra compatibility for Voice Acting Control's version update. 
 * 
 * Version 1.06: January 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where text from battle transitions would merge into the
 *    Message Log. Fix made by Olivia.
 * 
 * Version 1.05: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug where text macros from VisuMZ Message Core did not convert
 *    properly into the Message Log. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina.
 * ** Plugin Parameters > General > Pad Sides?
 * *** Pad the sides of the screen even without faces?
 * *** Ignore if the screen is too small.
 * 
 * Version 1.04: March 16, 2023
 * * Compatibility Update!
 * ** Added compatibility for the recent Message Core additions.
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.03: October 7, 2021
 * * Bug Fixes!
 * ** Message Log should now work with automatic word wrap. Fix by Irina.
 * 
 * Version 1.02: September 3, 2021
 * * Bug Fixes!
 * ** Fixed a crash pertaining to specific message windows that haven't
 *    declared a speaker name from an older RPG Maker version. Fix by Irina.
 * 
 * Version 1.01: August 6, 2021
 * * Documentation Update!
 * ** Plugin URL now updated to most recent one.
 *
 * Version 1.00 Official Release Date: August 4, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BypassMessageLogging
 * @text Bypass: Message Logging?
 * @desc Bypass message logging until turned off.
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass
 * @off Enable
 * @desc Bypasses Message Logging until turned off.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableMessageLogMenu
 * @text System: Enable Message Log in Menu?
 * @desc Enables/disables Message Log menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables Message Log menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowMessageLogMenu
 * @text System: Show Message Log in Menu?
 * @desc Shows/hides Message Log menu inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Message Log menu inside the main menu.
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
 * @param MessageLog
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
 * @desc General Settings for the Message Log.
 * @default {"EntryLimit:num":"50","ShortcutKey:str":"pageup","ShowFaces:eval":"true"}
 *
 * @param MainMenu:struct
 * @text Main Menu Settings
 * @type struct<MainMenu>
 * @desc Main Menu settings for Message Log.
 * @default {"Name:str":"Message Log","ShowMainMenu:eval":"true","EnableMainMenu:eval":"true"}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for Scene_MessageLog.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"ExtMessageFunc":"","ButtonName:str":"LOG","ButtonAssist":"","SlowScroll:str":"Scroll","FastScroll:str":"Fast Scroll","ChoiceLogging":"","ChoiceFmt:str":"\\C[4]Choice >\\C[0] %1","ChoiceCancel:str":"Cancel","NumberLogging":"","NumberFmt:str":"\\C[4]Amount >\\C[0] %1","EventItemLogging":"","ItemFmt:str":"\\C[4]Choice >\\C[0] %1","ItemNameFmt:str":"%1%2","NoItem:str":"Nothing"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Window settings for Scene_MessageLog.
 * @default {"MessageLogWindow":"","MessageLogMenu_BgType:num":"0","MessageLogMenu_RectJS:func":"\"const wx = 0;\\nconst wy = this.mainAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = this.mainAreaHeight();\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Appearance":"","SpeakerNameX:num":"128","ColorLock":"","ColorLockChoice:eval":"false","ColorLockNumber:eval":"true","ColorLockItem:eval":"true","Scrolling":"","Slow":"","SlowScrollSpeed:num":"8","SlowSoundFreq:num":"8","Fast":"","FastScrollSpeed:num":"32","FastSoundFreq:num":"4"}
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
 * @param EntryLimit:num
 * @text Entry Limit
 * @parent General
 * @type number
 * @min 1
 * @max 999
 * @desc How many message entries will be stored before the game
 * will start trimming them?
 * @default 50
 *
 * @param ShortcutKey:str
 * @text Shortcut Key
 * @parent General
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for opening the Message Log scene.
 * Does not work in battle!
 * @default pageup
 *
 * @param ShowFaces:eval
 * @text Show Faces?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show face graphics in the Message Log?
 * @default true
 *
 * @param PadSides:eval
 * @text Pad Sides?
 * @type boolean
 * @on Pad
 * @off Don't Pad
 * @desc Pad the sides of the screen even without faces?
 * Ignore if the screen is too small.
 * @default true
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
 * @desc Name of the 'Message Log' option in the Main Menu.
 * @default Message Log
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Message Log' option to the Main Menu by default?
 * @default true
 *
 * @param EnableMainMenu:eval
 * @text Enable in Main Menu?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the 'Message Log' option to the Main Menu by default?
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
 * @param ExtMessageFunc
 *
 * @param ButtonName:str
 * @text Button Name
 * @parent ExtMessageFunc
 * @desc How is this option's text displayed in-game?
 * Requires VisuMZ_2_ExtMessageFunc!
 * @default LOG
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param SlowScroll:str
 * @text Slow Scroll
 * @parent ButtonAssist
 * @desc Text used for slow scrolling.
 * @default Scroll
 *
 * @param FastScroll:str
 * @text Fast Scroll
 * @parent ButtonAssist
 * @desc Text used for fast scrolling.
 * @default Fast Scroll
 *
 * @param ChoiceLogging
 * @text Choice Window Logging
 *
 * @param ChoiceFmt:str
 * @text Text Format
 * @parent ChoiceLogging
 * @desc Text format for logging the selected choice text.
 * %1 - Selected Choice Text
 * @default \C[4]Choice >\C[0] %1
 *
 * @param ChoiceCancel:str
 * @text Cancel
 * @parent ChoiceLogging
 * @desc Text used when cancel branch is selected.
 * @default Cancel
 *
 * @param NumberLogging
 * @text Number Input Logging
 *
 * @param NumberFmt:str
 * @text Text Format
 * @parent NumberLogging
 * @desc Text format for logging the inputted number value.
 * %1 - Number Value
 * @default \C[4]Amount >\C[0] %1
 *
 * @param EventItemLogging
 * @text Event Item Logging
 *
 * @param ItemFmt:str
 * @text Text Format
 * @parent EventItemLogging
 * @desc Text format for logging the selected event Item.
 * %1 - Selected Event Item Text
 * @default \C[4]Choice >\C[0] %1
 *
 * @param ItemNameFmt:str
 * @text Name Format
 * @parent EventItemLogging
 * @desc Text format for how item names are displayed.
 * %1 - Item Icon, %2 - Item Name
 * @default %1%2
 *
 * @param NoItem:str
 * @text No Item
 * @parent EventItemLogging
 * @desc Text used when no item is selected.
 * @default Nothing
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 * 
 * @param MessageLogWindow
 * @text Message Log Window
 *
 * @param MessageLogMenu_BgType:num
 * @text Background Type
 * @parent MessageLogWindow
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
 * @param MessageLogMenu_RectJS:func
 * @text JS: X, Y, W, H
 * @parent MessageLogWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.mainAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = this.mainAreaHeight();\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Appearance
 *
 * @param SpeakerNameX:num
 * @text Speaker Name X
 * @parent Appearance
 * @type number
 * @min 0
 * @desc What X coordinate do you want the speaker name to appear at?
 * @default 128
 *
 * @param ColorLock
 * @text Color Lock
 *
 * @param ColorLockChoice:eval
 * @text Choices
 * @parent ColorLock
 * @type boolean
 * @on Color Lock
 * @off Don't Color Lock
 * @desc Color lock the logged choices?
 * @default false
 *
 * @param ColorLockNumber:eval
 * @text Number Inputs
 * @parent ColorLock
 * @type boolean
 * @on Color Lock
 * @off Don't Color Lock
 * @desc Color lock the logged Number Inputs?
 * @default true
 *
 * @param ColorLockItem:eval
 * @text Event Item
 * @parent ColorLock
 * @type boolean
 * @on Color Lock
 * @off Don't Color Lock
 * @desc Color lock the logged selected Event Item?
 * @default true
 *
 * @param Scrolling
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

const _0x37f533=_0x3ab9;(function(_0x4e83bd,_0x55981a){const _0x395af7=_0x3ab9,_0x5153ac=_0x4e83bd();while(!![]){try{const _0x5ade7d=parseInt(_0x395af7(0x1ba))/0x1*(parseInt(_0x395af7(0x1f7))/0x2)+-parseInt(_0x395af7(0x1e1))/0x3*(-parseInt(_0x395af7(0x1b4))/0x4)+parseInt(_0x395af7(0x279))/0x5*(-parseInt(_0x395af7(0x1a9))/0x6)+-parseInt(_0x395af7(0x1ae))/0x7+-parseInt(_0x395af7(0x1f6))/0x8*(-parseInt(_0x395af7(0x221))/0x9)+parseInt(_0x395af7(0x170))/0xa+-parseInt(_0x395af7(0x1e9))/0xb;if(_0x5ade7d===_0x55981a)break;else _0x5153ac['push'](_0x5153ac['shift']());}catch(_0xaa429f){_0x5153ac['push'](_0x5153ac['shift']());}}}(_0x3c8f,0xa557f));var label=_0x37f533(0x177),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x37f533(0x1e2)](function(_0x23f000){const _0xa4c1e5=_0x37f533;return _0x23f000[_0xa4c1e5(0x17e)]&&_0x23f000['description'][_0xa4c1e5(0x1f4)]('['+label+']');})[0x0];VisuMZ[label][_0x37f533(0x27e)]=VisuMZ[label][_0x37f533(0x27e)]||{},VisuMZ[_0x37f533(0x263)]=function(_0x457cbc,_0x11bdd4){const _0x1812f6=_0x37f533;for(const _0x25f535 in _0x11bdd4){if(_0x25f535[_0x1812f6(0x185)](/(.*):(.*)/i)){const _0x3f4ac4=String(RegExp['$1']),_0x2c3b7f=String(RegExp['$2'])['toUpperCase']()[_0x1812f6(0x278)]();let _0x4dbe25,_0x3333ec,_0x29e26e;switch(_0x2c3b7f){case _0x1812f6(0x1fa):_0x4dbe25=_0x11bdd4[_0x25f535]!==''?Number(_0x11bdd4[_0x25f535]):0x0;break;case _0x1812f6(0x20e):_0x3333ec=_0x11bdd4[_0x25f535]!==''?JSON[_0x1812f6(0x174)](_0x11bdd4[_0x25f535]):[],_0x4dbe25=_0x3333ec['map'](_0x1b63d9=>Number(_0x1b63d9));break;case _0x1812f6(0x23e):_0x4dbe25=_0x11bdd4[_0x25f535]!==''?eval(_0x11bdd4[_0x25f535]):null;break;case'ARRAYEVAL':_0x3333ec=_0x11bdd4[_0x25f535]!==''?JSON[_0x1812f6(0x174)](_0x11bdd4[_0x25f535]):[],_0x4dbe25=_0x3333ec[_0x1812f6(0x260)](_0x5c55d3=>eval(_0x5c55d3));break;case'JSON':_0x4dbe25=_0x11bdd4[_0x25f535]!==''?JSON[_0x1812f6(0x174)](_0x11bdd4[_0x25f535]):'';break;case _0x1812f6(0x299):_0x3333ec=_0x11bdd4[_0x25f535]!==''?JSON[_0x1812f6(0x174)](_0x11bdd4[_0x25f535]):[],_0x4dbe25=_0x3333ec['map'](_0x2f1e18=>JSON[_0x1812f6(0x174)](_0x2f1e18));break;case _0x1812f6(0x266):_0x4dbe25=_0x11bdd4[_0x25f535]!==''?new Function(JSON[_0x1812f6(0x174)](_0x11bdd4[_0x25f535])):new Function('return\x200');break;case _0x1812f6(0x1d8):_0x3333ec=_0x11bdd4[_0x25f535]!==''?JSON[_0x1812f6(0x174)](_0x11bdd4[_0x25f535]):[],_0x4dbe25=_0x3333ec[_0x1812f6(0x260)](_0x3c0fd5=>new Function(JSON[_0x1812f6(0x174)](_0x3c0fd5)));break;case'STR':_0x4dbe25=_0x11bdd4[_0x25f535]!==''?String(_0x11bdd4[_0x25f535]):'';break;case _0x1812f6(0x19c):_0x3333ec=_0x11bdd4[_0x25f535]!==''?JSON[_0x1812f6(0x174)](_0x11bdd4[_0x25f535]):[],_0x4dbe25=_0x3333ec['map'](_0x24579b=>String(_0x24579b));break;case _0x1812f6(0x262):_0x29e26e=_0x11bdd4[_0x25f535]!==''?JSON[_0x1812f6(0x174)](_0x11bdd4[_0x25f535]):{},_0x4dbe25=VisuMZ[_0x1812f6(0x263)]({},_0x29e26e);break;case _0x1812f6(0x16c):_0x3333ec=_0x11bdd4[_0x25f535]!==''?JSON[_0x1812f6(0x174)](_0x11bdd4[_0x25f535]):[],_0x4dbe25=_0x3333ec['map'](_0x5ce4a8=>VisuMZ[_0x1812f6(0x263)]({},JSON[_0x1812f6(0x174)](_0x5ce4a8)));break;default:continue;}_0x457cbc[_0x3f4ac4]=_0x4dbe25;}}return _0x457cbc;},(_0x40163f=>{const _0x4f598f=_0x37f533,_0x37bc78=_0x40163f[_0x4f598f(0x180)];for(const _0x403a54 of dependencies){if(!Imported[_0x403a54]){alert(_0x4f598f(0x1ec)[_0x4f598f(0x20b)](_0x37bc78,_0x403a54)),SceneManager[_0x4f598f(0x1a4)]();break;}}const _0x108280=_0x40163f[_0x4f598f(0x282)];if(_0x108280[_0x4f598f(0x185)](/\[Version[ ](.*?)\]/i)){const _0xf36033=Number(RegExp['$1']);_0xf36033!==VisuMZ[label][_0x4f598f(0x21e)]&&(alert(_0x4f598f(0x1c2)[_0x4f598f(0x20b)](_0x37bc78,_0xf36033)),SceneManager[_0x4f598f(0x1a4)]());}if(_0x108280[_0x4f598f(0x185)](/\[Tier[ ](\d+)\]/i)){const _0x5b6467=Number(RegExp['$1']);_0x5b6467<tier?(alert(_0x4f598f(0x1d9)[_0x4f598f(0x20b)](_0x37bc78,_0x5b6467,tier)),SceneManager[_0x4f598f(0x1a4)]()):tier=Math[_0x4f598f(0x252)](_0x5b6467,tier);}VisuMZ[_0x4f598f(0x263)](VisuMZ[label][_0x4f598f(0x27e)],_0x40163f['parameters']);})(pluginData),PluginManager[_0x37f533(0x1f8)](pluginData[_0x37f533(0x180)],_0x37f533(0x1cf),_0x41cb36=>{const _0x5aef43=_0x37f533;VisuMZ[_0x5aef43(0x263)](_0x41cb36,_0x41cb36),$gameSystem[_0x5aef43(0x253)](_0x41cb36[_0x5aef43(0x203)]);}),PluginManager[_0x37f533(0x1f8)](pluginData[_0x37f533(0x180)],_0x37f533(0x21b),_0x288047=>{const _0x59db93=_0x37f533;VisuMZ['ConvertParams'](_0x288047,_0x288047),$gameSystem[_0x59db93(0x19a)](_0x288047[_0x59db93(0x24d)]);}),PluginManager[_0x37f533(0x1f8)](pluginData[_0x37f533(0x180)],_0x37f533(0x276),_0x59b8d9=>{const _0x441641=_0x37f533;VisuMZ[_0x441641(0x263)](_0x59b8d9,_0x59b8d9),$gameSystem[_0x441641(0x247)](_0x59b8d9[_0x441641(0x17f)]);}),TextManager[_0x37f533(0x204)]=VisuMZ['MessageLog'][_0x37f533(0x27e)][_0x37f533(0x1b5)]['Name'],TextManager[_0x37f533(0x211)]=VisuMZ['MessageLog'][_0x37f533(0x27e)][_0x37f533(0x208)][_0x37f533(0x181)],TextManager[_0x37f533(0x218)]=VisuMZ[_0x37f533(0x177)][_0x37f533(0x27e)]['Vocab']['SlowScroll'],TextManager['MessageLogFastScroll']=VisuMZ[_0x37f533(0x177)][_0x37f533(0x27e)][_0x37f533(0x208)][_0x37f533(0x26c)],TextManager[_0x37f533(0x26b)]=VisuMZ[_0x37f533(0x177)][_0x37f533(0x27e)][_0x37f533(0x208)]['ChoiceFmt'],TextManager[_0x37f533(0x179)]=VisuMZ['MessageLog'][_0x37f533(0x27e)]['Vocab'][_0x37f533(0x1ca)],TextManager[_0x37f533(0x1a0)]=VisuMZ[_0x37f533(0x177)]['Settings'][_0x37f533(0x208)][_0x37f533(0x188)],TextManager[_0x37f533(0x196)]=VisuMZ['MessageLog'][_0x37f533(0x27e)]['Vocab']['ItemFmt'],TextManager[_0x37f533(0x1d0)]=VisuMZ[_0x37f533(0x177)]['Settings'][_0x37f533(0x208)]['ItemNameFmt'],TextManager[_0x37f533(0x198)]=VisuMZ['MessageLog'][_0x37f533(0x27e)][_0x37f533(0x208)][_0x37f533(0x254)];TextManager['msgButtonConsole']&&(VisuMZ['MessageLog'][_0x37f533(0x1c7)]=TextManager[_0x37f533(0x187)],TextManager['msgButtonConsole']=function(_0x91b8dc){const _0x3c5aa5=_0x37f533;if(['backlog',_0x3c5aa5(0x1a1)]['includes'](_0x91b8dc))return TextManager[_0x3c5aa5(0x211)];return VisuMZ[_0x3c5aa5(0x177)][_0x3c5aa5(0x1c7)][_0x3c5aa5(0x23d)](this,_0x91b8dc);});;function _0x3ab9(_0x58a15f,_0x4ac73e){const _0x3c8f29=_0x3c8f();return _0x3ab9=function(_0x3ab9bb,_0x4c179e){_0x3ab9bb=_0x3ab9bb-0x16c;let _0x4691aa=_0x3c8f29[_0x3ab9bb];return _0x4691aa;},_0x3ab9(_0x58a15f,_0x4ac73e);}SceneManager[_0x37f533(0x210)]=function(){const _0x4c5c60=_0x37f533;return this[_0x4c5c60(0x18e)]&&this[_0x4c5c60(0x18e)][_0x4c5c60(0x201)]===Scene_Map;},VisuMZ[_0x37f533(0x177)]['SceneManager_push']=SceneManager[_0x37f533(0x195)],SceneManager[_0x37f533(0x195)]=function(_0x43cb83){const _0x5cd785=_0x37f533;_0x43cb83===Scene_MessageLog&&this[_0x5cd785(0x1a5)](),VisuMZ[_0x5cd785(0x177)][_0x5cd785(0x1da)]['call'](this,_0x43cb83);},SceneManager[_0x37f533(0x1a5)]=function(){const _0x53bf8e=_0x37f533,_0x15d736=$gameSystem[_0x53bf8e(0x280)]();for(const _0x172081 of _0x15d736){if(!_0x172081)continue;const _0x3e42fe=_0x172081['faceName'];_0x3e42fe!==''&&ImageManager[_0x53bf8e(0x1a8)](_0x3e42fe);}},VisuMZ[_0x37f533(0x177)][_0x37f533(0x1c5)]=Game_System[_0x37f533(0x25e)][_0x37f533(0x292)],Game_System['prototype'][_0x37f533(0x292)]=function(){const _0x5379ab=_0x37f533;VisuMZ[_0x5379ab(0x177)][_0x5379ab(0x1c5)]['call'](this),this[_0x5379ab(0x1b8)](),this['initMessageLogSettings']();},Game_System[_0x37f533(0x25e)]['initMessageLogMainMenu']=function(){const _0x36821a=_0x37f533;this[_0x36821a(0x296)]={'shown':VisuMZ[_0x36821a(0x177)][_0x36821a(0x27e)]['MainMenu']['ShowMainMenu'],'enabled':VisuMZ[_0x36821a(0x177)][_0x36821a(0x27e)][_0x36821a(0x1b5)]['EnableMainMenu']},this[_0x36821a(0x1bd)]=![];},Game_System[_0x37f533(0x25e)][_0x37f533(0x173)]=function(){const _0x4584ec=_0x37f533;if(this['_MessageLog_MainMenu']===undefined)this[_0x4584ec(0x1b8)]();return this[_0x4584ec(0x296)][_0x4584ec(0x229)];},Game_System[_0x37f533(0x25e)][_0x37f533(0x247)]=function(_0xdafcd5){const _0x5525f2=_0x37f533;if(this[_0x5525f2(0x296)]===undefined)this['initMessageLogMainMenu']();this['_MessageLog_MainMenu'][_0x5525f2(0x229)]=_0xdafcd5;},Game_System['prototype'][_0x37f533(0x1bc)]=function(){const _0x4554af=_0x37f533;if(this[_0x4554af(0x296)]===undefined)this[_0x4554af(0x1b8)]();if(this['getLoggedMessages']()[_0x4554af(0x18a)]<=0x0)return![];return this[_0x4554af(0x296)][_0x4554af(0x1d4)];},Game_System['prototype'][_0x37f533(0x19a)]=function(_0x3a80f7){const _0x229643=_0x37f533;if(this[_0x229643(0x296)]===undefined)this[_0x229643(0x1b8)]();this['_MessageLog_MainMenu'][_0x229643(0x1d4)]=_0x3a80f7;},Game_System[_0x37f533(0x25e)][_0x37f533(0x1fc)]=function(){const _0x1d252=_0x37f533;if(this[_0x1d252(0x1bd)]===undefined)this[_0x1d252(0x1b8)]();return this[_0x1d252(0x1bd)];},Game_System['prototype'][_0x37f533(0x253)]=function(_0x42352c){const _0x570bb8=_0x37f533;if(this[_0x570bb8(0x1bd)]===undefined)this[_0x570bb8(0x1b8)]();this['_MessageLog_Bypass']=_0x42352c;},Game_System[_0x37f533(0x25e)][_0x37f533(0x1f2)]=function(){const _0x5b5da4=_0x37f533;this[_0x5b5da4(0x25d)]=[],this[_0x5b5da4(0x232)]();},Game_System[_0x37f533(0x25e)][_0x37f533(0x280)]=function(){const _0x4ed231=_0x37f533;return this[_0x4ed231(0x25d)]===undefined&&this[_0x4ed231(0x1f2)](),this[_0x4ed231(0x25d)];},Game_System[_0x37f533(0x25e)][_0x37f533(0x232)]=function(){const _0x98b628=_0x37f533;this[_0x98b628(0x24f)]={'speaker':'','faceName':'','faceIndex':0x0,'messageBody':''};},Game_System[_0x37f533(0x25e)][_0x37f533(0x1c9)]=function(){const _0x4c6114=_0x37f533,_0x3460d3=this[_0x4c6114(0x280)](),_0xe976e8=this[_0x4c6114(0x1de)]();if(this[_0x4c6114(0x1fc)]())return;_0xe976e8[_0x4c6114(0x17d)]=_0xe976e8[_0x4c6114(0x17d)]||'';if(_0xe976e8['messageBody']['match'](/<BYPASS MESSAGE LOG>/i))return;if(_0xe976e8['messageBody'][_0x4c6114(0x278)]()['length']<=0x0)return;const _0x9207cd=_0x3460d3[_0x3460d3[_0x4c6114(0x18a)]-0x1];if(JSON[_0x4c6114(0x1bb)](_0xe976e8)===JSON[_0x4c6114(0x1bb)](_0x9207cd))return;_0x3460d3[_0x4c6114(0x195)](_0xe976e8);while(_0x3460d3['length']>Window_MessageLog[_0x4c6114(0x238)]){_0x3460d3[_0x4c6114(0x236)]();}},Game_System['prototype']['getLatestMessageLogEntry']=function(){const _0x161f21=_0x37f533;return this['_newMessageLogEntry']===undefined&&this[_0x161f21(0x232)](),this['_newMessageLogEntry'];},Game_System[_0x37f533(0x25e)][_0x37f533(0x294)]=function(_0x350c47){const _0x50dd3c=_0x37f533;if($gameParty[_0x50dd3c(0x1fb)]()&&!$gameSystem['_addTextToMessageLog'])return;const _0x469587=this['getLatestMessageLogEntry']();this['isMessageWindowWordWrap']()&&(_0x350c47=_0x50dd3c(0x295)+_0x350c47);_0x350c47=this[_0x50dd3c(0x283)](_0x350c47);Imported[_0x50dd3c(0x23f)]&&(_0x350c47=this['convertVoiceActControlLines'](_0x350c47,_0x469587));if(_0x469587['messageBody'][_0x50dd3c(0x18a)]>0x0)_0x469587['messageBody']+='\x0a';_0x469587['messageBody']+=_0x350c47;},Game_System[_0x37f533(0x25e)][_0x37f533(0x283)]=function(_0x21b447){const _0x39f404=_0x37f533;return _0x21b447=this[_0x39f404(0x16e)](_0x21b447),_0x21b447=this[_0x39f404(0x1dd)](_0x21b447),_0x21b447=this[_0x39f404(0x22b)](_0x21b447),_0x21b447=this['convertMessageLogTextRemoval'](_0x21b447),_0x21b447=this[_0x39f404(0x1dd)](_0x21b447),_0x21b447;},Game_System[_0x37f533(0x25e)]['convertMessageLogTextMacros']=function(_0x481f3d){const _0x5547ed=_0x37f533;for(const _0x53bdc1 of VisuMZ[_0x5547ed(0x1ac)][_0x5547ed(0x27e)][_0x5547ed(0x1f0)]){_0x481f3d['match'](_0x53bdc1[_0x5547ed(0x1d6)])&&(this[_0x5547ed(0x23c)]=!![],_0x481f3d=_0x481f3d[_0x5547ed(0x240)](_0x53bdc1[_0x5547ed(0x1d6)],_0x53bdc1[_0x5547ed(0x18d)][_0x5547ed(0x19d)](this)));}return _0x481f3d;},Game_System[_0x37f533(0x25e)]['convertMessageLogVariableTextCodes']=function(_0x1bd35f){const _0x41bdd7=_0x37f533;while(_0x1bd35f['match'](/\\V\[(\d+)\]/gi)){_0x1bd35f=_0x1bd35f['replace'](/\\V\[(\d+)\]/gi,(_0x1f17e8,_0x2a7f02)=>$gameVariables[_0x41bdd7(0x293)](parseInt(_0x2a7f02)));}return _0x1bd35f;},Game_System[_0x37f533(0x25e)][_0x37f533(0x22b)]=function(_0x57649c){const _0xb83aad=_0x37f533,_0xef6dac=this[_0xb83aad(0x1de)]();return _0x57649c=_0x57649c[_0xb83aad(0x240)](/\\ItemQuantity\[(\d+)\]/gi,(_0x3b2ed1,_0x24d243)=>$gameParty[_0xb83aad(0x1ed)]($dataItems[Number(_0x24d243)])||0x0),_0x57649c=_0x57649c[_0xb83aad(0x240)](/\\WeaponQuantity\[(\d+)\]/gi,(_0x275164,_0x30eb80)=>$gameParty[_0xb83aad(0x1ed)]($dataWeapons[Number(_0x30eb80)])||0x0),_0x57649c=_0x57649c[_0xb83aad(0x240)](/\\ArmorQuantity\[(\d+)\]/gi,(_0xa1f5a2,_0x50ac50)=>$gameParty[_0xb83aad(0x1ed)]($dataArmors[Number(_0x50ac50)])||0x0),_0x57649c=_0x57649c[_0xb83aad(0x240)](/\\ArmorQuantity\[(\d+)\]/gi,(_0x1b5ba8,_0x48b611)=>$gameParty[_0xb83aad(0x1ed)]($dataArmors[Number(_0x48b611)])||0x0),_0x57649c=_0x57649c[_0xb83aad(0x240)](/\\LastGainObjQuantity/gi,Window_Base['prototype'][_0xb83aad(0x1b2)]()),_0x57649c=_0x57649c[_0xb83aad(0x240)](/\\LastGainObjName/gi,Window_Base[_0xb83aad(0x25e)][_0xb83aad(0x190)](![])),_0x57649c=_0x57649c['replace'](/\\LastGainObj/gi,Window_Base['prototype'][_0xb83aad(0x190)](!![])),_0x57649c=_0x57649c['replace'](/\\ActorFace\[(\d+)\]/gi,(_0xb8db8b,_0x5ceb6d)=>{const _0x1baaca=_0xb83aad,_0x354ffd=$gameActors[_0x1baaca(0x1ce)](Number(_0x5ceb6d));return _0x354ffd&&(_0xef6dac[_0x1baaca(0x1a6)]=_0x354ffd[_0x1baaca(0x1a6)](),_0xef6dac[_0x1baaca(0x1d2)]=_0x354ffd['faceIndex']()),'';}),_0x57649c=_0x57649c[_0xb83aad(0x240)](/\\PartyFace\[(\d+)\]/gi,(_0x22e67b,_0x1866a0)=>{const _0x44b76a=_0xb83aad,_0x12d68e=$gameParty['members']()[Number(_0x1866a0)-0x1];return _0x12d68e&&(_0xef6dac[_0x44b76a(0x1a6)]=_0x12d68e[_0x44b76a(0x1a6)](),_0xef6dac[_0x44b76a(0x1d2)]=_0x12d68e[_0x44b76a(0x1d2)]()),'';}),_0x57649c;},Game_System['prototype']['convertMessageLogTextRemoval']=function(_0x4956ea){const _0x37c1c7=_0x37f533;_0x4956ea=_0x4956ea['replace'](/\x1b/gi,'\x5c');const _0x35cc1d=this[_0x37c1c7(0x286)]();for(const _0x1ae94c of _0x35cc1d){_0x4956ea=_0x4956ea[_0x37c1c7(0x240)](_0x1ae94c,'');}return _0x4956ea;},Game_System[_0x37f533(0x25e)]['getRemovedMessageLogTextCodes']=function(){const _0x10d52b=_0x37f533;let _0x2140a6=[];return _0x2140a6[_0x10d52b(0x195)](/\\$/gi,/\\\./gi,/\\\|/gi,/\\\!/gi),_0x2140a6[_0x10d52b(0x195)](/\\>/gi,/\\</gi,/\\\^/gi),_0x2140a6[_0x10d52b(0x195)](/\\(?:Picture|CenterPicture)<(.*?)>/gi),_0x2140a6['push'](/\\COMMONEVENT\[(\d+)\]>/gi,/\\WAIT\[(\d+)\]/gi),_0x2140a6['push'](/<(?:AUTO|AUTOSIZE|AUTO SIZE)>/gi,/<(?:AUTOWIDTH|AUTO WIDTH)>/gi,/<(?:AUTOHEIGHT|AUTO HEIGHT)>/gi),_0x2140a6[_0x10d52b(0x195)](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,/<(?:AUTOENEMY|AUTO ENEMY):[ ](.*?)>/gi),_0x2140a6['push'](/<(?:AUTOPLAYER|AUTO PLAYER)>/gi,/<(?:AUTOEVENT|AUTO EVENT):[ ](.*?)>/gi),_0x2140a6[_0x10d52b(0x195)](/<SHOW>/gi,/<SHOW[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<SHOW ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi),_0x2140a6[_0x10d52b(0x195)](/<HIDE>/gi,/<HIDE[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<HIDE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi),_0x2140a6['push'](/<ENABLE>/gi,/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi),_0x2140a6[_0x10d52b(0x195)](/<DISABLE>/gi,/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi),_0x2140a6[_0x10d52b(0x195)](/\\NormalBG/gi,/\\DimBG/gi,/\\TransparentBG/gi),_0x2140a6[_0x10d52b(0x195)](/<POSITION:[ ]*(.*?)>/gi,/<COORDINATES:[ ]*(.*?)>/gi,/<DIMENSIONS:[ ]*(.*?)>/gi),_0x2140a6[_0x10d52b(0x195)](/\\(?:WindowMoveTo|WindowMoveBy):[ ]*(.*?)/gi,/\\WindowReset/gi),_0x2140a6[_0x10d52b(0x195)](/\\(?:TroopMember|TroopNameMember)\[(\d+)\]/gi),_0x2140a6[_0x10d52b(0x195)](/\\ChangeFace<(.*?)>/gi,/\\FaceIndex\[(\d+)\]/gi),_0x2140a6[_0x10d52b(0x195)](/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi),_0x2140a6[_0x10d52b(0x195)](/<OFFSET:[ ]*(.*?)>/gi),_0x2140a6[_0x10d52b(0x195)](/<(?:HELP|HELP DESCRIPTION|DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|HELP DESCRIPTION|DESCRIPTION)>/i),_0x2140a6[_0x10d52b(0x195)](/<ENABLE IF CAN CREATE CHARACTER>/gi),_0x2140a6[_0x10d52b(0x195)](/<ENABLE IF CAN DISMISS CHARACTERS>/gi),_0x2140a6['push'](/<ENABLE IF CAN RETRAIN CHARACTERS>/gi),_0x2140a6[_0x10d52b(0x195)](/<ENABLE IF HAVE CREATED CHARACTERS>/gi),_0x2140a6[_0x10d52b(0x195)](/<HIDE (?:BUTTON CONSOLE|CONSOLE|BUTTONS)>/gi),_0x2140a6[_0x10d52b(0x195)](/<HIDE CHOICE WINDOW>/gi,/<BIND (?:PICTURE|PICTURES):[ ](\d+)>/gi),_0x2140a6['push'](/<(?:CHOICE|SELECT) (?:COMMON EVENT|EVENT|COMMONEVENT):[ ](\d+)>/gi),_0x2140a6['push'](/\\(?:LSON|LSOFF|LETTER SOUND ON|LETTERSOUNDON|LETTER SOUND OFF|LETTERSOUNDOFF)/gi),_0x2140a6[_0x10d52b(0x195)](/\\(?:LETTERSOUNDNAME|LSN)<(.*?)>/gi),_0x2140a6[_0x10d52b(0x195)](/\\(?:LETTERSOUNDINTERVAL|LSI)\[(\d+)\]/gi),_0x2140a6['push'](/\\(?:LETTERSOUNDVOLUME|LSV)\[(\d+)\]/gi),_0x2140a6[_0x10d52b(0x195)](/\\(?:LETTERSOUNDPITCH|LSPI)\[(\d+)\]/gi),_0x2140a6['push'](/\\(?:LETTERSOUNDPAN|LSPA)\[(\d+)\]/gi),_0x2140a6[_0x10d52b(0x195)](/\\(?:LETTERSOUNDVOLUMEVARIANCE|LETTERSOUNDVOLUMEVAR|LSVV)\[(\d+)\]/gi),_0x2140a6[_0x10d52b(0x195)](/\\(?:LETTERSOUNDPITCHVARIANCE|LETTERSOUNDPITCHVAR|LSPIV)\[(\d+)\]/gi),_0x2140a6[_0x10d52b(0x195)](/\\(?:LETTERSOUNDPANVARIANCE|LETTERSOUNDPANVAR|LSPAV)\[(\d+)\]/gi),_0x2140a6[_0x10d52b(0x195)](/<CONTINUE>/gi),_0x2140a6;},Game_System[_0x37f533(0x25e)]['convertVoiceActControlLines']=function(_0x2c2e6a,_0x4a89c2){const _0x4cbbad=_0x37f533,_0x3a1868=VisuMZ[_0x4cbbad(0x20f)][_0x4cbbad(0x291)];return _0x2c2e6a=_0x2c2e6a[_0x4cbbad(0x240)](_0x3a1868[_0x4cbbad(0x17a)],(_0x32589c,_0x1487e6)=>{const _0x5a6d3a=_0x4cbbad;_0x1487e6=_0x1487e6['replace'](/\x1bWrapBreak\[0\]/gi,'\x20');const _0x93d1b1=_0x1487e6['split'](',')[_0x5a6d3a(0x260)](_0x1c508d=>_0x1c508d[_0x5a6d3a(0x278)]()),_0x5596aa={'name':String(_0x93d1b1[0x0]??''),'volume':Number(_0x93d1b1[0x1]??0x64)['clamp'](0x0,0x64),'pitch':Number(_0x93d1b1[0x2]??0x64)[_0x5a6d3a(0x1df)](0x0,0x64),'pan':Number(_0x93d1b1[0x3]??0x0)[_0x5a6d3a(0x1df)](-0x64,0x64)};return _0x4a89c2[_0x5a6d3a(0x182)]=_0x5596aa,'';}),_0x2c2e6a=_0x2c2e6a[_0x4cbbad(0x240)](_0x3a1868[_0x4cbbad(0x257)],''),_0x2c2e6a;},Game_System['prototype']['setSpeakerToMessageLog']=function(_0x813042){const _0x3a6d72=_0x37f533,_0x2f775e=this['getLatestMessageLogEntry']();_0x813042=this[_0x3a6d72(0x25f)](_0x813042),_0x813042=this['convertMessageLogTextCodes'](_0x813042),_0x2f775e[_0x3a6d72(0x217)]=_0x813042||'';},Game_System[_0x37f533(0x25e)][_0x37f533(0x25f)]=function(_0x4bbebb){const _0x527b39=_0x37f533;if(!_0x4bbebb)return'';const _0x15b52e=[/<LEFT>/gi,/<CENTER>/gi,/<RIGHT>/gi,/<\/LEFT>/gi,/<\/CENTER>/gi,/<\/RIGHT>/gi,/<POSITION:[ ](\d+)>/gi];for(const _0x1706ac of _0x15b52e){_0x4bbebb=_0x4bbebb[_0x527b39(0x240)](_0x1706ac,'');}return _0x4bbebb;},Game_System['prototype']['setFaceToMessageLog']=function(_0x4f4f68,_0x436a62){const _0x4a30ba=_0x37f533,_0x2a8913=this['getLatestMessageLogEntry']();_0x2a8913[_0x4a30ba(0x1a6)]=_0x4f4f68||'',_0x2a8913[_0x4a30ba(0x1d2)]=_0x436a62||0x0;},VisuMZ[_0x37f533(0x177)][_0x37f533(0x1ee)]=Game_Message[_0x37f533(0x25e)][_0x37f533(0x22e)],Game_Message[_0x37f533(0x25e)][_0x37f533(0x22e)]=function(_0x4e19f4){const _0x35a1f5=_0x37f533;VisuMZ[_0x35a1f5(0x177)]['Game_Message_add'][_0x35a1f5(0x23d)](this,_0x4e19f4),$gameSystem[_0x35a1f5(0x294)](_0x4e19f4);},VisuMZ[_0x37f533(0x177)][_0x37f533(0x249)]=Game_Message[_0x37f533(0x25e)]['setSpeakerName'],Game_Message['prototype'][_0x37f533(0x212)]=function(_0x4bad20){const _0x4d8bba=_0x37f533;VisuMZ[_0x4d8bba(0x177)][_0x4d8bba(0x249)][_0x4d8bba(0x23d)](this,_0x4bad20),$gameSystem[_0x4d8bba(0x26a)](_0x4bad20);},VisuMZ[_0x37f533(0x177)][_0x37f533(0x1e3)]=Game_Message['prototype'][_0x37f533(0x1ab)],Game_Message['prototype'][_0x37f533(0x1ab)]=function(_0x2f5fff,_0x510c06){const _0x16eabc=_0x37f533;VisuMZ[_0x16eabc(0x177)][_0x16eabc(0x1e3)]['call'](this,_0x2f5fff,_0x510c06),$gameSystem[_0x16eabc(0x186)](_0x2f5fff,_0x510c06);},VisuMZ[_0x37f533(0x177)][_0x37f533(0x264)]=Game_Interpreter[_0x37f533(0x25e)][_0x37f533(0x1dc)],Game_Interpreter[_0x37f533(0x25e)][_0x37f533(0x1dc)]=function(_0xfc1bb7){const _0x370598=_0x37f533;$gameSystem[_0x370598(0x232)](),$gameSystem[_0x370598(0x1a7)]=!![];let _0x4f8b61=VisuMZ[_0x370598(0x177)][_0x370598(0x264)][_0x370598(0x23d)](this,_0xfc1bb7);return $gameSystem[_0x370598(0x1c9)](),$gameSystem[_0x370598(0x1a7)]=![],_0x4f8b61;},VisuMZ[_0x37f533(0x177)][_0x37f533(0x207)]=BattleManager[_0x37f533(0x1cc)],BattleManager[_0x37f533(0x1cc)]=function(_0x4054b3,_0x2d821f,_0xb2063a){const _0x16942a=_0x37f533;$gameSystem[_0x16942a(0x232)](),VisuMZ[_0x16942a(0x177)][_0x16942a(0x207)][_0x16942a(0x23d)](this,_0x4054b3,_0x2d821f,_0xb2063a);},VisuMZ[_0x37f533(0x177)]['Scene_Menu_createCommandWindow']=Scene_Menu[_0x37f533(0x25e)][_0x37f533(0x1cb)],Scene_Menu['prototype'][_0x37f533(0x1cb)]=function(){const _0x1dffb3=_0x37f533;VisuMZ[_0x1dffb3(0x177)][_0x1dffb3(0x275)][_0x1dffb3(0x23d)](this);const _0x1ccc95=this[_0x1dffb3(0x1b9)];_0x1ccc95[_0x1dffb3(0x1d3)](_0x1dffb3(0x269),this[_0x1dffb3(0x1c1)][_0x1dffb3(0x19d)](this));},Scene_Menu[_0x37f533(0x25e)][_0x37f533(0x1c1)]=function(){const _0x377e32=_0x37f533;SceneManager[_0x377e32(0x195)](Scene_MessageLog);};function Scene_MessageLog(){const _0x569035=_0x37f533;this[_0x569035(0x292)](...arguments);}Scene_MessageLog[_0x37f533(0x25e)]=Object[_0x37f533(0x199)](Scene_MenuBase['prototype']),Scene_MessageLog[_0x37f533(0x25e)]['constructor']=Scene_MessageLog,Scene_MessageLog['prototype'][_0x37f533(0x292)]=function(){const _0x2a8859=_0x37f533;Scene_MenuBase[_0x2a8859(0x25e)]['initialize']['call'](this);},Scene_MessageLog[_0x37f533(0x25e)][_0x37f533(0x284)]=function(){return 0x0;},Scene_MessageLog[_0x37f533(0x25e)][_0x37f533(0x199)]=function(){const _0x4695d2=_0x37f533;Scene_MenuBase[_0x4695d2(0x25e)][_0x4695d2(0x199)]['call'](this),this[_0x4695d2(0x183)]();},Scene_MessageLog[_0x37f533(0x25e)]['createMessageLogWindow']=function(){const _0x1daafe=_0x37f533,_0x41a50d=this[_0x1daafe(0x1cd)]();this[_0x1daafe(0x274)]=new Window_MessageLog(_0x41a50d),this[_0x1daafe(0x1b3)](this[_0x1daafe(0x274)]),this[_0x1daafe(0x274)][_0x1daafe(0x1d3)](_0x1daafe(0x209),this[_0x1daafe(0x287)][_0x1daafe(0x19d)](this)),this[_0x1daafe(0x274)][_0x1daafe(0x1aa)](VisuMZ[_0x1daafe(0x177)][_0x1daafe(0x27e)]['Window']['MessageLogMenu_BgType']);},Scene_MessageLog[_0x37f533(0x25e)][_0x37f533(0x1cd)]=function(){const _0x1bc2b1=_0x37f533,_0x1a0b11=VisuMZ[_0x1bc2b1(0x177)][_0x1bc2b1(0x27e)][_0x1bc2b1(0x258)]['MessageLogMenu_RectJS'];if(_0x1a0b11)return _0x1a0b11[_0x1bc2b1(0x23d)](this);const _0x44d157=0x0,_0x1a80d2=this[_0x1bc2b1(0x224)](),_0x15f155=Graphics[_0x1bc2b1(0x1c6)],_0x5cc110=this['mainAreaHeight']();return new Rectangle(_0x44d157,_0x1a80d2,_0x15f155,_0x5cc110);},Scene_MessageLog[_0x37f533(0x25e)][_0x37f533(0x28b)]=function(){const _0x14a64f=_0x37f533;Scene_MenuBase['prototype'][_0x14a64f(0x28b)][_0x14a64f(0x23d)](this),this[_0x14a64f(0x220)](this[_0x14a64f(0x20a)]()),this[_0x14a64f(0x178)]();},Scene_MessageLog[_0x37f533(0x25e)][_0x37f533(0x20a)]=function(){const _0x3ef11f=_0x37f533;return VisuMZ['MessageLog'][_0x3ef11f(0x27e)]['BgSettings'][_0x3ef11f(0x1e4)];},Scene_MessageLog[_0x37f533(0x25e)]['createCustomBackgroundImages']=function(){const _0x5484fd=_0x37f533,_0xe33228=VisuMZ[_0x5484fd(0x177)][_0x5484fd(0x27e)][_0x5484fd(0x25a)];_0xe33228&&(_0xe33228[_0x5484fd(0x18c)]!==''||_0xe33228[_0x5484fd(0x288)]!=='')&&(this[_0x5484fd(0x214)]=new Sprite(ImageManager[_0x5484fd(0x1e5)](_0xe33228[_0x5484fd(0x18c)])),this['_backSprite2']=new Sprite(ImageManager[_0x5484fd(0x19f)](_0xe33228[_0x5484fd(0x288)])),this[_0x5484fd(0x27d)](this[_0x5484fd(0x214)]),this['addChild'](this['_backSprite2']),this['_backSprite1'][_0x5484fd(0x184)][_0x5484fd(0x273)](this[_0x5484fd(0x23a)][_0x5484fd(0x19d)](this,this[_0x5484fd(0x214)])),this[_0x5484fd(0x235)]['bitmap'][_0x5484fd(0x273)](this['adjustSprite']['bind'](this,this['_backSprite2'])));},Scene_MessageLog[_0x37f533(0x25e)][_0x37f533(0x23a)]=function(_0x1c34d9){const _0x15d5f6=_0x37f533;this[_0x15d5f6(0x234)](_0x1c34d9),this['centerSprite'](_0x1c34d9);},Scene_MessageLog[_0x37f533(0x25e)][_0x37f533(0x26e)]=function(){const _0x38191d=_0x37f533;return TextManager[_0x38191d(0x1fd)]('pageup','pagedown');},Scene_MessageLog[_0x37f533(0x25e)][_0x37f533(0x21a)]=function(){const _0xb969c4=_0x37f533;return TextManager[_0xb969c4(0x1fd)]('up',_0xb969c4(0x172));},Scene_MessageLog['prototype'][_0x37f533(0x1eb)]=function(){return'';},Scene_MessageLog['prototype'][_0x37f533(0x24b)]=function(){const _0x319ce4=_0x37f533;return TextManager[_0x319ce4(0x271)];},Scene_MessageLog[_0x37f533(0x25e)][_0x37f533(0x1bf)]=function(){const _0x370d4f=_0x37f533;return TextManager[_0x370d4f(0x218)];},VisuMZ[_0x37f533(0x177)]['Window_MenuCommand_addOriginalCommands']=Window_MenuCommand['prototype'][_0x37f533(0x261)],Window_MenuCommand[_0x37f533(0x25e)][_0x37f533(0x261)]=function(){const _0xfc50cd=_0x37f533;VisuMZ[_0xfc50cd(0x177)][_0xfc50cd(0x245)]['call'](this),this[_0xfc50cd(0x192)]();},Window_MenuCommand[_0x37f533(0x25e)][_0x37f533(0x192)]=function(){const _0xe7be4a=_0x37f533;if(!this[_0xe7be4a(0x27b)]())return;if(!this['isMessageLogCommandVisible']())return;const _0x15b600=TextManager['MessageLogMenuCommand'],_0x5c388e=this[_0xe7be4a(0x1b7)]();this[_0xe7be4a(0x18f)](_0x15b600,_0xe7be4a(0x269),_0x5c388e);},Window_MenuCommand['prototype'][_0x37f533(0x27b)]=function(){const _0x23e5ec=_0x37f533;return Imported[_0x23e5ec(0x1ff)]?![]:!![];},Window_MenuCommand[_0x37f533(0x25e)][_0x37f533(0x227)]=function(){const _0x29774b=_0x37f533;return $gameSystem[_0x29774b(0x173)]();},Window_MenuCommand[_0x37f533(0x25e)][_0x37f533(0x1b7)]=function(){const _0x385647=_0x37f533;return $gameSystem[_0x385647(0x1bc)]();},VisuMZ[_0x37f533(0x177)]['Window_ChoiceList_callOkHandler']=Window_ChoiceList['prototype'][_0x37f533(0x255)],Window_ChoiceList[_0x37f533(0x25e)][_0x37f533(0x255)]=function(){const _0x28fe1a=_0x37f533;(SceneManager[_0x28fe1a(0x210)]()||!Window_MessageLog['SCENE_MAP_ONLY'])&&this[_0x28fe1a(0x1e8)](!![]),VisuMZ[_0x28fe1a(0x177)][_0x28fe1a(0x222)][_0x28fe1a(0x23d)](this);},VisuMZ[_0x37f533(0x177)][_0x37f533(0x21d)]=Window_ChoiceList[_0x37f533(0x25e)][_0x37f533(0x17b)],Window_ChoiceList[_0x37f533(0x25e)][_0x37f533(0x17b)]=function(){const _0xd5918d=_0x37f533;(SceneManager[_0xd5918d(0x210)]()||!Window_MessageLog[_0xd5918d(0x21c)])&&this[_0xd5918d(0x1e8)](![]),VisuMZ[_0xd5918d(0x177)][_0xd5918d(0x21d)][_0xd5918d(0x23d)](this);},Window_ChoiceList[_0x37f533(0x25e)][_0x37f533(0x1e8)]=function(_0x2254c1){const _0x44f085=_0x37f533;$gameSystem[_0x44f085(0x232)]();const _0x147c68=TextManager['MessageLogChoiceListFmt'];let _0x1df972='';if(_0x2254c1){let _0x44f109=this['currentExt'](),_0x1ff52c=$gameMessage[_0x44f085(0x22f)]()[_0x44f109];Window_MessageLog[_0x44f085(0x241)]&&(_0x1ff52c='<ColorLock>%1</ColorLock>'[_0x44f085(0x20b)](_0x1ff52c)),_0x1df972=_0x147c68[_0x44f085(0x20b)](_0x1ff52c);}else{if(!_0x2254c1&&!this[_0x44f085(0x189)]()){let _0x42b6b8=$gameMessage[_0x44f085(0x1e0)](),_0x51693a=$gameMessage[_0x44f085(0x22f)]()[_0x42b6b8];Window_MessageLog[_0x44f085(0x241)]&&(_0x51693a=_0x44f085(0x22c)[_0x44f085(0x20b)](_0x51693a)),_0x1df972=_0x147c68[_0x44f085(0x20b)](_0x51693a);}else _0x1df972=_0x147c68[_0x44f085(0x20b)](TextManager[_0x44f085(0x179)]);}$gameSystem[_0x44f085(0x294)](_0x1df972),$gameSystem['addNewLoggedMessageEntry']();},VisuMZ['MessageLog'][_0x37f533(0x171)]=Window_NumberInput[_0x37f533(0x25e)][_0x37f533(0x1e7)],Window_NumberInput[_0x37f533(0x25e)][_0x37f533(0x1e7)]=function(){const _0x3544dc=_0x37f533;(SceneManager['isSceneMap']()||!Window_MessageLog[_0x3544dc(0x21c)])&&this[_0x3544dc(0x1e8)](),VisuMZ[_0x3544dc(0x177)]['Window_NumberInput_processOk']['call'](this);},Window_NumberInput[_0x37f533(0x25e)][_0x37f533(0x1e8)]=function(){const _0x519b5e=_0x37f533;$gameSystem[_0x519b5e(0x232)]();const _0x218529=TextManager[_0x519b5e(0x1a0)];let _0xdbc3cc=this['_number'];Window_MessageLog[_0x519b5e(0x1d7)]&&(_0xdbc3cc=_0x519b5e(0x22c)[_0x519b5e(0x20b)](_0xdbc3cc));let _0x57fab3=_0x218529['format'](_0xdbc3cc);$gameSystem[_0x519b5e(0x294)](_0x57fab3),$gameSystem[_0x519b5e(0x1c9)]();},VisuMZ['MessageLog']['Window_EventItem_onOk']=Window_EventItem['prototype'][_0x37f533(0x24c)],Window_EventItem['prototype'][_0x37f533(0x24c)]=function(){const _0x2ddc52=_0x37f533;(SceneManager[_0x2ddc52(0x210)]()||!Window_MessageLog[_0x2ddc52(0x21c)])&&this[_0x2ddc52(0x1e8)](this[_0x2ddc52(0x226)]()),VisuMZ[_0x2ddc52(0x177)][_0x2ddc52(0x237)][_0x2ddc52(0x23d)](this);},VisuMZ[_0x37f533(0x177)][_0x37f533(0x18b)]=Window_EventItem[_0x37f533(0x25e)][_0x37f533(0x1d1)],Window_EventItem['prototype']['onCancel']=function(){const _0x32d603=_0x37f533;(SceneManager['isSceneMap']()||!Window_MessageLog[_0x32d603(0x21c)])&&this[_0x32d603(0x1e8)](![]),VisuMZ[_0x32d603(0x177)]['Window_EventItem_onCancel'][_0x32d603(0x23d)](this);},Window_EventItem['prototype'][_0x37f533(0x1e8)]=function(_0x2635ea){const _0x4fc33d=_0x37f533;$gameSystem[_0x4fc33d(0x232)]();const _0x31169=TextManager[_0x4fc33d(0x196)];let _0x243ac9='';if(_0x2635ea){let _0x19c532=TextManager['MessageLogItemNameFmt'],_0x571cf4=_0x19c532[_0x4fc33d(0x20b)](_0x4fc33d(0x1ea)[_0x4fc33d(0x20b)](_0x2635ea[_0x4fc33d(0x20c)]),_0x2635ea[_0x4fc33d(0x180)]);Window_MessageLog[_0x4fc33d(0x244)]&&(_0x571cf4='<ColorLock>%1</ColorLock>'[_0x4fc33d(0x20b)](_0x571cf4)),_0x243ac9=_0x31169[_0x4fc33d(0x20b)](_0x571cf4);}else _0x243ac9=_0x31169['format'](TextManager['MessageLogItemNothing']);$gameSystem[_0x4fc33d(0x294)](_0x243ac9),$gameSystem[_0x4fc33d(0x1c9)]();},VisuMZ['MessageLog']['Window_Base_preConvertEscapeCharacters']=Window_Base[_0x37f533(0x25e)]['preConvertEscapeCharacters'],Window_Base[_0x37f533(0x25e)][_0x37f533(0x219)]=function(_0x182004){const _0x57db79=_0x37f533;return _0x182004=VisuMZ[_0x57db79(0x177)][_0x57db79(0x242)][_0x57db79(0x23d)](this,_0x182004),_0x182004=_0x182004[_0x57db79(0x240)](/<BYPASS MESSAGE LOG>/i,''),_0x182004;},VisuMZ[_0x37f533(0x177)][_0x37f533(0x248)]=Window_Message[_0x37f533(0x25e)]['isTriggered'],Window_Message[_0x37f533(0x25e)][_0x37f533(0x1f9)]=function(){const _0x487365=_0x37f533;let _0x5bf699=VisuMZ[_0x487365(0x177)][_0x487365(0x248)][_0x487365(0x23d)](this);return this[_0x487365(0x16f)]()&&Input[_0x487365(0x1f9)](Window_MessageLog[_0x487365(0x1c3)])?(this[_0x487365(0x191)](),![]):_0x5bf699;},Window_Message['prototype'][_0x37f533(0x16f)]=function(){const _0x5095d6=_0x37f533;return SceneManager['isSceneMap']()&&$gameSystem[_0x5095d6(0x1bc)]();},Window_Message['prototype'][_0x37f533(0x191)]=function(){const _0x25fd3b=_0x37f533;this[_0x25fd3b(0x24a)](),SceneManager[_0x25fd3b(0x195)](Scene_MessageLog);};function Window_MessageLog(){this['initialize'](...arguments);}Window_MessageLog[_0x37f533(0x25e)]=Object[_0x37f533(0x199)](Window_Selectable[_0x37f533(0x25e)]),Window_MessageLog[_0x37f533(0x25e)]['constructor']=Window_MessageLog,Window_MessageLog[_0x37f533(0x21c)]=!![],Window_MessageLog[_0x37f533(0x238)]=VisuMZ[_0x37f533(0x177)][_0x37f533(0x27e)][_0x37f533(0x1a3)][_0x37f533(0x28f)],Window_MessageLog['SHORTCUT_KEY']=VisuMZ[_0x37f533(0x177)][_0x37f533(0x27e)][_0x37f533(0x1a3)][_0x37f533(0x239)],Window_MessageLog[_0x37f533(0x216)]=VisuMZ['MessageLog'][_0x37f533(0x27e)][_0x37f533(0x1a3)][_0x37f533(0x1b0)]??!![],Window_MessageLog[_0x37f533(0x1db)]=VisuMZ['MessageLog'][_0x37f533(0x27e)][_0x37f533(0x1a3)][_0x37f533(0x233)]??!![],Window_MessageLog[_0x37f533(0x27c)]=0x4,Window_MessageLog[_0x37f533(0x1ef)]=VisuMZ[_0x37f533(0x177)][_0x37f533(0x27e)][_0x37f533(0x258)]['SpeakerNameX'],Window_MessageLog[_0x37f533(0x241)]=VisuMZ[_0x37f533(0x177)][_0x37f533(0x27e)][_0x37f533(0x258)][_0x37f533(0x1c0)],Window_MessageLog[_0x37f533(0x1d7)]=VisuMZ[_0x37f533(0x177)][_0x37f533(0x27e)][_0x37f533(0x258)][_0x37f533(0x259)],Window_MessageLog['COLOR_LOCK_ITEM']=VisuMZ[_0x37f533(0x177)]['Settings'][_0x37f533(0x258)][_0x37f533(0x22a)],Window_MessageLog[_0x37f533(0x251)]=VisuMZ[_0x37f533(0x177)][_0x37f533(0x27e)][_0x37f533(0x258)]['SlowScrollSpeed'],Window_MessageLog[_0x37f533(0x265)]=VisuMZ[_0x37f533(0x177)][_0x37f533(0x27e)][_0x37f533(0x258)][_0x37f533(0x277)],Window_MessageLog['SLOW_SOUND_FREQUENCY']=VisuMZ[_0x37f533(0x177)][_0x37f533(0x27e)]['Window'][_0x37f533(0x243)],Window_MessageLog[_0x37f533(0x246)]=VisuMZ[_0x37f533(0x177)]['Settings']['Window'][_0x37f533(0x19e)],Window_MessageLog['prototype'][_0x37f533(0x292)]=function(_0x39ff0b){const _0xbe0bed=_0x37f533;this[_0xbe0bed(0x267)]=Input[_0xbe0bed(0x25b)](Window_MessageLog[_0xbe0bed(0x1c3)]),Window_Selectable['prototype'][_0xbe0bed(0x292)]['call'](this,_0x39ff0b),this[_0xbe0bed(0x19b)]=0x0,this[_0xbe0bed(0x1f1)]=!![],this[_0xbe0bed(0x298)](),this['activate']();},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x28e)]=function(){return!![];},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x298)]=function(){const _0x3a0664=_0x37f533;this[_0x3a0664(0x290)](),this[_0x3a0664(0x193)](),this['createContents'](),this['drawAllText']();},Window_MessageLog[_0x37f533(0x25e)]['removeAllReplayVoiceSprites']=function(){const _0x70b580=_0x37f533;if(!Imported['VisuMZ_2_VoiceActControl'])return;this[_0x70b580(0x22d)]=this[_0x70b580(0x22d)]||[],this['_clientArea'][_0x70b580(0x1f1)]=!![];const _0x541abe=[];for(const _0x17d0d4 of this[_0x70b580(0x22d)]){this[_0x70b580(0x270)][_0x70b580(0x27a)](_0x17d0d4),this[_0x70b580(0x21f)]['removeChild'](_0x17d0d4),_0x541abe[_0x70b580(0x195)](_0x17d0d4);}for(const _0x276a6b of _0x541abe){this[_0x70b580(0x22d)]['remove'](_0x276a6b);}},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x193)]=function(){const _0x4b1df5=_0x37f533,_0x2ba1bd=this[_0x4b1df5(0x25c)](),_0x52131f=$gameSystem[_0x4b1df5(0x280)]();this[_0x4b1df5(0x19b)]=_0x2ba1bd;for(const _0x4067fb of _0x52131f){if(!_0x4067fb)continue;if(_0x4067fb[_0x4b1df5(0x217)]!=='')this[_0x4b1df5(0x19b)]+=this['textSizeEx'](_0x4067fb[_0x4b1df5(0x217)])[_0x4b1df5(0x206)];let _0x480941=_0x4067fb[_0x4b1df5(0x1a6)]!==''&&Window_MessageLog[_0x4b1df5(0x216)]?ImageManager[_0x4b1df5(0x176)]:0x0,_0x414c5e=this[_0x4b1df5(0x1c8)](_0x4067fb[_0x4b1df5(0x17d)])[_0x4b1df5(0x206)];this[_0x4b1df5(0x19b)]+=Math[_0x4b1df5(0x252)](_0x480941,_0x414c5e),this[_0x4b1df5(0x19b)]+=_0x2ba1bd;}},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x1b6)]=function(){const _0x46feba=_0x37f533;return Math[_0x46feba(0x252)](this[_0x46feba(0x19b)],0x1);},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x256)]=function(){const _0x15df97=_0x37f533;this[_0x15df97(0x213)]=0x0,this[_0x15df97(0x28a)]();const _0x4eebf8=$gameSystem['getLoggedMessages']();for(const _0x2b87a5 of _0x4eebf8){if(!_0x2b87a5)continue;this[_0x15df97(0x17c)](),this[_0x15df97(0x272)](_0x2b87a5),this['resetWordWrap']();}this[_0x15df97(0x285)]();},Window_MessageLog['prototype'][_0x37f533(0x28a)]=function(){const _0x142979=_0x37f533,_0x48114e=new Rectangle(0x4,this['_lineY'],this[_0x142979(0x26f)]-0x8,this[_0x142979(0x25c)]());this[_0x142979(0x17c)]();const _0x3463b5=Window_MessageLog[_0x142979(0x27c)],_0x4ea57e=_0x48114e['y']+(_0x48114e[_0x142979(0x206)]-_0x3463b5)/0x2;this[_0x142979(0x1fe)](_0x48114e['x'],_0x4ea57e,_0x48114e[_0x142979(0x1a2)],_0x3463b5),this[_0x142979(0x213)]+=this[_0x142979(0x25c)]();},Window_MessageLog['prototype'][_0x37f533(0x1c8)]=function(_0x293639){const _0xd0ca46=_0x37f533;let _0x158a16=this[_0xd0ca46(0x26f)]-(ImageManager[_0xd0ca46(0x26d)]+0x18)*0x2;Graphics[_0xd0ca46(0x1c6)]<=0x330&&(_0x158a16=this[_0xd0ca46(0x26f)]-0x8);this[_0xd0ca46(0x17c)](),this['resetWordWrap']();const _0x5b251a=this[_0xd0ca46(0x20d)](_0x293639,0x0,0x0,_0x158a16);return _0x5b251a[_0xd0ca46(0x1af)]=![],this[_0xd0ca46(0x223)](_0x5b251a),this['resetWordWrap'](),{'width':_0x5b251a[_0xd0ca46(0x215)],'height':_0x5b251a['outputHeight']};},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x272)]=function(_0x3b4c7a){const _0x19f057=_0x37f533;let _0x748b77=0x4,_0x12d2cc=ImageManager[_0x19f057(0x26d)]+0x14,_0x130bf8=this[_0x19f057(0x26f)]-(_0x12d2cc+0x4)*0x2;_0x3b4c7a[_0x19f057(0x217)]!==''&&(this[_0x19f057(0x1e6)](),this[_0x19f057(0x1c4)](_0x3b4c7a['speaker'],Window_MessageLog[_0x19f057(0x1ef)],this[_0x19f057(0x213)],_0x130bf8),this[_0x19f057(0x213)]+=this[_0x19f057(0x1c8)](_0x3b4c7a['speaker'])[_0x19f057(0x206)],this[_0x19f057(0x268)]());this[_0x19f057(0x17c)](),this['resetWordWrap']();if(Window_MessageLog[_0x19f057(0x216)]&&_0x3b4c7a['faceName']){let _0x328242=_0x748b77,_0xe2fff5=this[_0x19f057(0x213)],_0x3713b2=ImageManager[_0x19f057(0x26d)],_0x26a3a6=ImageManager['faceHeight'];this[_0x19f057(0x197)](_0x3b4c7a['faceName'],_0x3b4c7a[_0x19f057(0x1d2)],_0x328242,_0xe2fff5,_0x3713b2,_0x26a3a6),Graphics[_0x19f057(0x1c6)]<=0x330&&(_0x130bf8=this['innerWidth']-(_0x12d2cc+0x4));}else(!Window_MessageLog[_0x19f057(0x1db)]||Graphics[_0x19f057(0x1c6)]<=0x330)&&(_0x12d2cc=0x4,_0x130bf8=this['innerWidth']-0x8,Imported['VisuMZ_2_VoiceActControl']&&(_0x3b4c7a['replayVoiceSound']&&(_0x12d2cc+=ImageManager['iconWidth']+0x4,_0x130bf8-=ImageManager[_0x19f057(0x200)]+0x4)));this[_0x19f057(0x1c4)](_0x3b4c7a[_0x19f057(0x17d)],_0x12d2cc,this['_lineY'],_0x130bf8);let _0x5eb447=this[_0x19f057(0x1c8)](_0x3b4c7a[_0x19f057(0x17d)])[_0x19f057(0x206)],_0x545f7d=_0x3b4c7a['faceName']!==''&&Window_MessageLog[_0x19f057(0x216)]?ImageManager[_0x19f057(0x176)]:0x0;Imported[_0x19f057(0x23f)]&&this[_0x19f057(0x1d5)](_0x3b4c7a,_0x748b77,this['_lineY']),this[_0x19f057(0x213)]+=Math['max'](_0x545f7d,_0x5eb447),this[_0x19f057(0x17c)](),this[_0x19f057(0x194)](),this[_0x19f057(0x28a)]();},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x1e6)]=function(){const _0x22a32c=_0x37f533,_0x5186ed=VisuMZ['MessageCore'][_0x22a32c(0x27e)]['General'][_0x22a32c(0x23b)];this[_0x22a32c(0x289)]=ColorManager[_0x22a32c(0x24e)](_0x5186ed);},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x268)]=function(){const _0x289ca1=_0x37f533;this[_0x289ca1(0x289)]=undefined;},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x205)]=function(){const _0x35e9e1=_0x37f533;Window_Selectable[_0x35e9e1(0x25e)][_0x35e9e1(0x205)][_0x35e9e1(0x23d)](this),this['_forcedNameColor']&&this[_0x35e9e1(0x230)](this[_0x35e9e1(0x289)]);},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x1d5)]=function(_0x48d911,_0x3d8687,_0x5a940e){const _0x1049c6=_0x37f533;if(!_0x48d911['replayVoiceSound'])return;this[_0x1049c6(0x22d)]=this['_replayVoiceSprites']||[];(Window_MessageLog[_0x1049c6(0x216)]&&_0x48d911[_0x1049c6(0x1a6)]||Graphics['boxWidth']>0x330)&&(_0x3d8687+=ImageManager[_0x1049c6(0x26d)]-ImageManager[_0x1049c6(0x200)]);const _0xeb5a10=new Sprite_ReplayVoiceLine();_0xeb5a10[_0x1049c6(0x1f3)](_0x48d911[_0x1049c6(0x182)]),_0xeb5a10[_0x1049c6(0x250)](_0x3d8687,_0x5a940e),this[_0x1049c6(0x22d)][_0x1049c6(0x195)](_0xeb5a10),this['addInnerChild'](_0xeb5a10);},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x1be)]=function(){},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x231)]=function(){const _0x2e1995=_0x37f533;if(Input[_0x2e1995(0x25b)](Window_MessageLog['SHORTCUT_KEY'])&&this['_isHotKeyPressed'])return;this[_0x2e1995(0x267)]=![];if(Input[_0x2e1995(0x25b)](_0x2e1995(0x172)))this[_0x2e1995(0x1b1)](!![]);else{if(Input['isPressed']('up'))this[_0x2e1995(0x1b1)](![]);else{if(Input[_0x2e1995(0x25b)](_0x2e1995(0x175)))this[_0x2e1995(0x225)](!![]);else{if(Input['isPressed'](_0x2e1995(0x28d)))this[_0x2e1995(0x225)](![]);else{if(Input['isTriggered']('home'))this[_0x2e1995(0x1ad)](!![]);else Input['isTriggered'](_0x2e1995(0x28c))&&this['scrollToBottom'](!![]);}}}}},Window_MessageLog[_0x37f533(0x25e)]['processSlowScroll']=function(_0x540adc){const _0x2e448c=_0x37f533;let _0x3b0be4=this[_0x2e448c(0x27f)]['y'];this[_0x2e448c(0x27f)]['y']+=(_0x540adc?0x1:-0x1)*Window_MessageLog[_0x2e448c(0x251)];let _0x194256=Math['max'](0x0,this['_allTextHeight']-this['innerHeight']);this[_0x2e448c(0x27f)]['y']=this[_0x2e448c(0x27f)]['y'][_0x2e448c(0x1df)](0x0,_0x194256);if(_0x3b0be4!==this[_0x2e448c(0x27f)]['y']&&Graphics[_0x2e448c(0x297)]%Window_MessageLog[_0x2e448c(0x1f5)]===0x0)this['playCursorSound']();},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x225)]=function(_0x42d930){const _0x55c509=_0x37f533;let _0xa5d778=this[_0x55c509(0x27f)]['y'];this[_0x55c509(0x27f)]['y']+=(_0x42d930?0x1:-0x1)*Window_MessageLog[_0x55c509(0x265)];let _0x17a24f=Math[_0x55c509(0x252)](0x0,this[_0x55c509(0x19b)]-this[_0x55c509(0x202)]);this[_0x55c509(0x27f)]['y']=this[_0x55c509(0x27f)]['y'][_0x55c509(0x1df)](0x0,_0x17a24f);if(_0xa5d778!==this[_0x55c509(0x27f)]['y']&&Graphics['frameCount']%Window_MessageLog[_0x55c509(0x246)]===0x0)this['playCursorSound']();},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x1ad)]=function(_0x4449c6){const _0x5c9859=_0x37f533;let _0x4dfea9=this[_0x5c9859(0x27f)]['y'];this[_0x5c9859(0x27f)]['y']=0x0;if(_0x4449c6&&_0x4dfea9!==this['origin']['y'])this[_0x5c9859(0x281)]();},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x285)]=function(_0x556ec9){const _0x29e5c2=_0x37f533;let _0x5ea39b=this['origin']['y'],_0x4dee96=Math[_0x29e5c2(0x252)](0x0,this[_0x29e5c2(0x19b)]-this['innerHeight']);this[_0x29e5c2(0x27f)]['y']=_0x4dee96;if(_0x556ec9&&_0x5ea39b!==this['origin']['y'])this[_0x29e5c2(0x281)]();},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x228)]=function(_0x41aa3f,_0x32fe16){const _0x199df8=_0x37f533;this[_0x199df8(0x27f)]['y']+=_0x32fe16;let _0x39b083=Math['max'](0x0,this[_0x199df8(0x19b)]-this[_0x199df8(0x202)]);this[_0x199df8(0x27f)]['y']=this['origin']['y']['clamp'](0x0,_0x39b083);},Window_MessageLog[_0x37f533(0x25e)][_0x37f533(0x16d)]=function(_0x248e71,_0x5abe0d){const _0x1ec461=_0x37f533;this[_0x1ec461(0x27f)]['y']+=_0x5abe0d;let _0x1549f3=Math[_0x1ec461(0x252)](0x0,this['_allTextHeight']-this[_0x1ec461(0x202)]);this[_0x1ec461(0x27f)]['y']=this[_0x1ec461(0x27f)]['y'][_0x1ec461(0x1df)](0x0,_0x1549f3);};function _0x3c8f(){const _0x2a5d81=['registerCommand','isTriggered','NUM','inBattle','isBypassMessageLogging','getInputMultiButtonStrings','drawRect','VisuMZ_1_MainMenuCore','iconWidth','constructor','innerHeight','Bypass','MessageLogMenuCommand','resetTextColor','height','BattleManager_setup','Vocab','cancel','getBackgroundOpacity','format','iconIndex','createTextState','ARRAYNUM','VoiceActControl','isSceneMap','MessageLogButtonName','setSpeakerName','_lineY','_backSprite1','outputWidth','SHOW_FACES','speaker','MessageLogScroll','preConvertEscapeCharacters','buttonAssistKey3','SystemEnableMessageLogMenu','SCENE_MAP_ONLY','Window_ChoiceList_callCancelHandler','version','_clientArea','setBackgroundOpacity','27UwcWCr','Window_ChoiceList_callOkHandler','processAllText','mainAreaTop','processFastScroll','item','isMessageLogCommandVisible','smoothScrollBy','shown','ColorLockItem','convertMessageLogTextReplacement','<ColorLock>%1</ColorLock>','_replayVoiceSprites','add','choices','changeTextColor','processCursorMove','createNewLoggedMessageEntry','PadSides','scaleSprite','_backSprite2','shift','Window_EventItem_onOk','ENTRY_LIMIT','ShortcutKey','adjustSprite','NameBoxWindowDefaultColor','_textMacroFound','call','EVAL','VisuMZ_2_VoiceActControl','replace','COLOR_LOCK_CHOICE','Window_Base_preConvertEscapeCharacters','SlowSoundFreq','COLOR_LOCK_ITEM','Window_MenuCommand_addOriginalCommands','FAST_SOUND_FREQUENCY','setMainMenuMessageLogVisible','Window_Message_isTriggered','Game_Message_setSpeakerName','playOkSound','buttonAssistText1','onOk','Enable','textColor','_newMessageLogEntry','setXyPosition','SLOW_SCROLL_SPEED','max','setBypassMessageLogging','NoItem','callOkHandler','drawAllText','MsgNoReplay','Window','ColorLockNumber','BgSettings','isPressed','lineHeight','_loggedMessages','prototype','convertMessageLogNameRemoval','map','addOriginalCommands','STRUCT','ConvertParams','Game_Interpreter_command101','FAST_SCROLL_SPEED','FUNC','_isHotKeyPressed','clearNameColor','messageLog','setSpeakerToMessageLog','MessageLogChoiceListFmt','FastScroll','faceWidth','buttonAssistKey1','innerWidth','_innerChildren','MessageLogFastScroll','drawMessageText','addLoadListener','_messageLogWindow','Scene_Menu_createCommandWindow','SystemShowMessageLogMenu','FastScrollSpeed','trim','1224295nChXHv','remove','addMessageLogCommandAutomatically','HORZ_LINE_THICKNESS','addChild','Settings','origin','getLoggedMessages','playCursorSound','description','convertMessageLogTextCodes','helpAreaHeight','scrollToBottom','getRemovedMessageLogTextCodes','popScene','BgFilename2','_forcedNameColor','drawHorzLine','createBackground','end','pageup','isAutoColorAffected','EntryLimit','removeAllReplayVoiceSprites','RegExp','initialize','value','addTextToMessageLog','<WORDWRAP>','_MessageLog_MainMenu','frameCount','refresh','ARRAYJSON','ARRAYSTRUCT','setScrollAccel','convertMessageLogTextMacros','canCallMessageLog','8261440LsuQgb','Window_NumberInput_processOk','down','isMainMenuMessageLogVisible','parse','pagedown','faceHeight','MessageLog','createCustomBackgroundImages','MessageLogChoiceCancel','MsgVoiceSfx','callCancelHandler','resetFontSettings','messageBody','status','Show','name','ButtonName','replayVoiceSound','createMessageLogWindow','bitmap','match','setFaceToMessageLog','msgButtonConsole','NumberFmt','needsCancelButton','length','Window_EventItem_onCancel','BgFilename1','textCodeResult','_scene','addCommand','lastGainedObjectName','callMessageLog','addMessageLogCommand','calculateTextHeight','resetWordWrap','push','MessageLogEventItemFmt','drawFace','MessageLogItemNothing','create','setMainMenuMessageLogEnabled','_allTextHeight','ARRAYSTR','bind','FastSoundFreq','loadTitle2','MessageLogNumberInputFmt','log','width','General','exit','prepareMessageLogFaces','faceName','_addTextToMessageLog','loadFace','24ZnxvGI','setBackgroundType','setFaceImage','MessageCore','scrollToTop','9047437OvHzsi','drawing','ShowFaces','processSlowScroll','lastGainedObjectQuantity','addWindow','268vshKsf','MainMenu','contentsHeight','isMessageLogCommandEnabled','initMessageLogMainMenu','_commandWindow','7LkWtUr','stringify','isMainMenuMessageLogEnabled','_MessageLog_Bypass','updateOrigin','buttonAssistText3','ColorLockChoice','commandMessageLog','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','SHORTCUT_KEY','drawTextEx','Game_System_initialize','boxWidth','TextManager_msgButtonConsole','textSizeEx','addNewLoggedMessageEntry','ChoiceCancel','createCommandWindow','setup','messageLogWindowRect','actor','BypassMessageLogging','MessageLogItemNameFmt','onCancel','faceIndex','setHandler','enabled','addReplayVoiceSprite','textCodeCheck','COLOR_LOCK_NUMBER','ARRAYFUNC','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','SceneManager_push','PAD_SIDES','command101','convertMessageLogVariableTextCodes','getLatestMessageLogEntry','clamp','choiceCancelType','38607vKPeIt','filter','Game_Message_setFaceImage','SnapshotOpacity','loadTitle1','forceNameColor','processOk','addMessageLogEntry','4978996wiTOFx','\x5cI[%1]','buttonAssistKey4','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','numItems','Game_Message_add','SPEAKER_NAME_X','TextMacros','_allowVoiceReplay','initMessageLogSettings','setSound','includes','SLOW_SOUND_FREQUENCY','2846304RpvCmK','184594mhCzrQ'];_0x3c8f=function(){return _0x2a5d81;};return _0x3c8f();}