//=============================================================================
// VisuStella MZ - Extended Message Functionality
// VisuMZ_2_ExtMessageFunc.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_ExtMessageFunc = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ExtMessageFunc = VisuMZ.ExtMessageFunc || {};
VisuMZ.ExtMessageFunc.version = 1.17;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.17] [ExtMessageFunc]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Extended_Message_Functionality_VisuStella_MZ
 * @base VisuMZ_1_MessageCore
 * @orderAfter VisuMZ_1_MessageCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Extended Message Function plugin adds onto RPG Maker MZ's Message Window
 * and adds in various features you would normally see found in modern RPG's.
 * Things like automatically moving the text forward after a set amount of time
 * or fast forward are available. Saving and loading during a message is also
 * possible as well as going to the Options menu or returning back to the title
 * screen. These options are only available to the Message Window on the map
 * scene and do not work in battle.
 *
 * Features include all (but not limited to) the following:
 * 
 * * The Button Console appears on the Message Window let the player activate
 *   various commands via touch/click.
 * * Extended Fast Forward Mode is an expanded feature upon the Message Core's
 *   Fast Forward function to fast forward all events and not just messages.
 *   This can be optionally disabled.
 * * A Message Cursor will appear where the text has ended for those who want
 *   that kind of aesthetic in their game.
 * * Auto-Forward will automatically move messages onward after a certain
 *   amount of time has passed. Time required will be determined based on the
 *   length of the message in question.
 * * Saving and Loading can be done from the Message Window akin to how many
 *   visual novels work. Requires the Save Core, but you're already using that,
 *   right? Right?
 * * Also be able to jump straight into the Options scene from the Message
 *   Window to change any settings on the fly. Requires the Options Core, but
 *   you're using that, too, correct?
 * * And for those who want to jump back to the title screen, they can do so
 *   by selecting a Game End option, too.
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
 * VisuMZ_1_OptionsCore
 *
 * The Options Core is a required plugin in order to make use of the "Options"
 * (aka "Config") button found in the Button Console.
 *
 * ---
 *
 * VisuMZ_1_SaveCore
 *
 * The Options Core is a required plugin in order to make use of the "Save" and
 * "Load" buttons found in the Button Console.
 *
 * ---
 * 
 * VisuMZ_3_MessageLog
 * 
 * The Message Log plugin enables the "Log" button found in the Button Console
 * to let the player go and review the text that has been displayed in the map
 * scene. This does not include the text found in battle to avoid conflicting
 * logged messages across different situations.
 * 
 * ---
 * 
 * VisuMZ_4_MessageVisibility
 * 
 * The Message Visibility plugin enables the "Hide" button found in the
 * Button Console to make the Message Window visible or invisible.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. 
 *
 * === Button Console-Related Text Codes ===
 * 
 * ---
 *
 * --------------------   -----------------------------------------------------
 * Text Code              Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * <Hide Buttons>         Hides the Button Console from this current Message
 *                        Window's text assuming that nothing else is hiding
 *                        the Button Console from view.
 * 
 * ---
 * 
 * === Message Tail-Related Text Codes ===
 *
 * --------------------   -----------------------------------------------------
 * Text Code              Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * <Tail Bottom Left: x>  Creates a message tail at x coordinate pointing to
 *                        the bottom left.
 * <Tail Bottom Right: x> Creates a message tail at x coordinate pointing to
 *                        the bottom right.
 * <Tail Upper Left: x>   Creates a message tail at x coordinate pointing to
 *                        the upper left.
 * <Tail Upper Right: x>  Creates a message tail at x coordinate pointing to
 *                        the upper right.
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
 * === Fast Forward Plugin Commands ===
 * 
 * ---
 *
 * Fast Forward: Allow/Disallow
 * - Change whether or not Fast Forward is allowed/disallowed.
 * - Must be enabled by the Plugin Parameters.
 *
 *   Allow?:
 *   - Allow or disallow the Extended Fast Forward feature?
 *   - Must be enabled by the Plugin Parameters.
 *
 * ---
 * 
 * === Message Button Console Plugin Commands ===
 * 
 * ---
 *
 * Message Button Console: Show/Hide
 * - Determine if the Message Button Console is visible or hidden.
 * - Only appears on the map. 
 * - Does not appear in battle.
 *
 *   Visible?:
 *   - Show or hide the Message Button Console feature?
 *   - Only appears on the map.
 *   - Does not appear in battle.
 *
 * ---
 * 
 * === Message Cursor Plugin Commands ===
 * 
 * ---
 *
 * Message Cursor: Change Settings
 * - Change the Message Cursor settings used.
 *
 *   Change Settings:
 *   - Change the Message Cursor settings.
 *   - Settings are the same as the ones found in the Plugin Parameters.
 *
 * ---
 * 
 * === Message Tail Plugin Commands ===
 * 
 * ---
 * 
 * Message Tail: Change Settings
 * - Change the Message Tail settings.
 * 
 *   Message Tail Settings:
 *   - Message Tail settings used for Message Windows.
 *   - Requires images and text codes to appear.
 *   - See Plugin Parameters. They have the same parameters.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Auto-Forward Settings
 * ============================================================================
 *
 * Auto-Forward settings used for this game. Auto-Forward is a feature that
 * once enabled, the game will automatically move the "Show Text" event
 * commands forward after a certain amount of time. The amount of time will be
 * determined by how many characters are displayed on the screen. There is a
 * lower boundary, where if the wait time does not meet the amount, the timer
 * will be set to the minimum wait value instead.
 *
 * ---
 *
 * Settings
 * 
 *   Wait per Character:
 *   - How many frames should the game wait per character?
 *   - Average: 60 frames per second.
 * 
 *   Minimum Wait:
 *   - What is the minimum amount of frames to wait?
 *   - Average: 60 frames per second.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Fast Forward (Extended) Settings
 * ============================================================================
 *
 * Extended Fast Forward settings used for this game. If enabled, this will
 * replace the Message Core's Fast Forward functionality. The Extended Fast
 * Forward feature will not only fast forward through messages but any running
 * events that are not found in a parallel event.
 * 
 * It can also be activated the Message Core's Fast Forward shortcut key.
 *
 * ---
 *
 * Settings
 * 
 *   Enable?:
 *   - Enable or disable the Extended Fast Forward feature?
 * 
 *   Speed:
 *   - What is the speed at which Extended Fast Forward works at?
 *   - Higher numbers are faster.
 * 
 *   Reset on Scene Change?:
 *   - Reset Fast Forward setting on scene changes (ie battle, menu, or
 *     map transfers)?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Message Button Console Settings
 * ============================================================================
 *
 * Message Button Console settings used for this game.
 * 
 * It will only appear in the Message Window on the map scene. It will NOT
 * appear in battle. The reason it won't appear in battle is because many of
 * the functions there will clash with how the battle scene behaves.
 * 
 * The Button Console will add extra padding to the Message Window and appear
 * at either the top of bottom of the Message Window (your choice). A row of
 * buttons will appear each with a different functionality.
 * 
 * These Plugin Parameters also allow you to customize the appearance of how
 * the buttons look in-game. Adjust them accordingly.
 *
 * ---
 *
 * General
 * 
 *   Show by Default?:
 *   - Show or hide the Message Button Console by default?
 * 
 *   Position:
 *   - Where do you wish to display the Message Button Console?
 *     - Top of Message Window
 *     - Bottom of Message Window
 * 
 *   Auto-Size Hide?:
 *   - Hide the button console when using auto-size text codes?
 *
 * ---
 *
 * Appearance
 * 
 *   Window Skin:
 *   - What is the window skin used for the buttons?
 *   - Ignore if using Background Images.
 * 
 *   Font Name:
 *   - What font do you wish to use for the Message Button Console?
 * 
 *     Font Size:
 *     - What font size do you wish to use for the Message Button Console?
 * 
 *   Text Colors:
 * 
 *     Normal Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Toggled Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Disabled Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *   Visuals:
 * 
 *     Offset X:
 *     - Offsets the buttons x position.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - Offsets the buttons y position.
 *     - Negative: up. Positive: down.
 * 
 *     Width:
 *     - What is the width of each button?
 * 
 *     Height:
 *     - What is the height of each button?
 * 
 *     Buffer:
 *     - What is the buffer between each button?
 * 
 *   Background Images:
 * 
 *     Disabled Image:
 *     Enabled Image:
 *     Toggled Image:
 *     - Filename of the background image when the button is disabled,
 *       enabled, or toggled.
 *     - This will hide the window skin for this button.
 * 
 *     Offset X:
 *     - Offsets the X position of this image.
 *     - Negative: left; Positive: right
 * 
 *     Offset Y:
 *     - Offsets the Y position of this image.
 *     - Negative: up; Positive: down
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Button Settings
 * ============================================================================
 *
 * Settings for which buttons appear and how they appear. These settings will
 * determine which buttons appear (provided that their required plugins are
 * available), what shortcut keys are applied to them, and what kind of text
 * will be displayed to represent them.
 * 
 * In case you are wondering where the Fast Forward shortcut key is, that
 * setting is found in the Message Core.
 *
 * ---
 *
 * General
 * 
 *   List:
 *   - Which buttons appear and in what order?
 *   - Some commands require certain plugins installed.
 *
 * ---
 *
 * Shortcut Keys
 * 
 *   Auto-Forward Key:
 *   - This is the key used for auto-forwarding messages.
 * 
 *   Save Key:
 *   - This is the key used for quick saving.
 *   - Requires VisuMZ_1_SaveCore!
 * 
 *   Load Key:
 *   - This is the key used for quick load.
 *   - Requires VisuMZ_1_SaveCore!
 * 
 *   Options Key:
 *   - This is the key used for opening options.
 *   - Requires VisuMZ_1_OptionsCore!
 * 
 *   Game End Key:
 *   - This is the key used for ending the game.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Auto-Forward:
 *   - How is this option's text displayed in-game?
 * 
 *   Fast Forward:
 *   - How is this option's text displayed in-game?
 * 
 *   Save Game:
 *   - How is this option's text displayed in-game?
 *   - Requires VisuMZ_1_SaveCore!
 * 
 *   Load Game:
 *   - How is this option's text displayed in-game?
 *   - Requires VisuMZ_1_SaveCore!
 * 
 *   Options:
 *   - How is this option's text displayed in-game?
 *   - Requires VisuMZ_1_OptionsCore!
 * 
 *   Game End:
 *   - How is this option's text displayed in-game?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Message Cursor Settings
 * ============================================================================
 *
 * Message Cursor settings used for this game. The cursor, if enabled, will
 * appear where the text is currently displayed at and adds a new type of
 * aesthetic to the game.
 *
 * ---
 *
 * General
 * 
 *   Enable?:
 *   - Enable or disable the message cursor?
 * 
 *   Graphic Type:
 *   - What is the cursor's graphic type?
 *     - Icon - From img/system/IconSet.png
 *     - Image - An animated image from img/system/
 *     - Window Skin - Use the default Window Skin cursor
 *
 * ---
 *
 * Icon
 * 
 *   Icon Index:
 *   - This is icon used for the Message Cursor.
 * 
 *   Flip Speed Multiplier:
 *   - What is the flip speed multiplier for the Message Cursor?
 *   - Use 0 for no flipping.
 *
 * ---
 *
 * Image
 * 
 *   Filename:
 *   - Filename of the image found inside the img/system/ folder.
 * 
 *   Image Rows:
 *   - How many rows are there for the image?
 * 
 *   Image Columns:
 *   - How many columns are there for the image?
 * 
 *   Frame Delay:
 *   - How many frames delayed are there per animated cell?
 *
 * ---
 *
 * Appearance
 * 
 *   Anchor X:
 *   Anchor Y:
 *   - Determine the Message Cursor's X/Y position.
 *   - Use a number between 0 and 1 for best results.
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset the Message Cursor's X/Y position by how many pixels?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Message Tail Settings
 * ============================================================================
 *
 * Message Tails can be made to appear from the Message Window and point
 * towards the speaker, similar to how speech bubbles in comics point towards
 * their speakers. The Message Tails do not appear on their own, and only come
 * out when using auto-position text codes (if enabled) such as <Auto Player>
 * or when text codes are used to make them appear such as <Tail Upper Left: x>
 * and <Tail Lower Right: x>.
 * 
 * These settings require custom graphics that this plugin does not come with.
 * You will need to add them on your own or else they will not appear.
 *
 * ---
 *
 * Auto-Position
 * 
 *   Enable?:
 *   - Show Message Tails with Auto-Position text codes?
 *   - Message Tails will appear when using the following text codes:
 *     - <Auto Actor: x>
 *     - <Auto Party: x>
 *     - <Auto Player>
 *     - <Auto Event: x>
 *     - <Auto Enemy: x>
 * 
 *   Face Left?:
 *   - Which direction does the Message Tail point to?
 *   - Left or right?
 * 
 *   Offset X:
 *   Offset Y:
 *   - Message Window's X offset with auto-position.
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 *
 * ---
 *
 * Tail Directions
 * Tail Directions > Bottom Left
 * Tail Directions > Bottom Right
 * Tail Directions > Upper Left
 * Tail Directions > Upper Right
 * 
 *   Filename:
 *   - Filename of the Message Tail graphic going towards the
 *     specified direction.
 * 
 *   Anchor X:
 *   - Anchor value X. Use a number between 0 and 1.
 *   - 0.0 - Left; 0.5 - Center; 1.0 - Right
 * 
 *   Anchor Y:
 *   - Anchor value Y. Use a number between 0 and 1.
 *   - 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * 
 *   Offset X:
 *   - Offset the Message Tail's X position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offset the Message Tail's Y position.
 *   - Negative: left. Positive: right.
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
 * Version 1.17: June 13, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Parameters > Message Button Console > Button Visuals > Offset X
 * *** Parameters > Message Button Console > Button Visuals > Offset Y
 * **** Adjusts the X/Y position of the buttons.
 * 
 * Version 1.16: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a text positioning issue with the message window when shown in
 *    battle and a top-aligned button console. Fix made by Irina.
 * 
 * Version 1.15: December 14, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.14: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that made hidden buttons via <Hide Button Console> still able
 *    to be pressed. Fix made by Irina.
 * 
 * Version 1.13: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevents <Hide Button Console> from working when word
 *    wrap is enabled. Fix made by Irina.
 * 
 * Version 1.12: December 15, 2022
 * * Bug Fixes!
 * ** Fixed a bug where the menu background settings from VisuMZ Core Engine
 *    did not carry over to the save menu when accessing it through the Message
 *    Button Console. Fix made by Olivia.
 * 
 * Version 1.11: November 10, 2022
 * * Bug Fixes!
 * ** Plugin Command "Message Cursor: Change Settings" no longer leaves behind
 *    the old cursor sprite when a new one is selected. Fix made by Irina.
 * 
 * Version 1.10: August 11, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina
 * *** Plugin Parameters > Fast Forward > Reset on Scene Change?
 * **** Reset Fast Forward setting on scene changes (ie battle, menu, or
 *      map transfers)?
 * 
 * Version 1.09: April 7, 2022
 * * Bug Fixes!
 * ** Default message cursor no longer appears in the wrong place when no
 *    message cursor skin is used for auto-sized messages. Fix by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter option added by Arisu and sponsored by Archeia:
 * *** Plugin Parameters > Message Cursor Settings > Graphics Type
 * **** New option added: Window Skin - Use the default Window Skin cursor
 * **** This is for those who wish to use the default window skin cursor
 *      instead of icons or images.
 * 
 * Version 1.08: March 17, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands, Text Codes, and Plugin Parameters added by Irina
 *    and sponsored by Archeia!
 * *** Message Tails can be made to appear from the Message Window and point
 *     towards the speaker, similar to how speech bubbles in comics point
 *     towards their speakers. The Message Tails do not appear on their own,
 *     and only come out when using auto-position text codes (if enabled) such
 *     as <Auto Player> or when text codes are used to make them appear such as
 *     <Tail Upper Left: x> and <Tail Lower Right: x>.
 * *** These settings require custom graphics that this plugin does not come
 *     with. You will need to add them on your own or else they will not
 *     appear.
 * *** Text Codes added: <Tail Bottom Left: x>, <Tail Bottom Right: x>,
 *     <Tail Upper Left: x>, <Tail Upper Right: x>
 * *** Plugin Command Added: Message Tail: Change Settings
 * *** Plugin Parameters Added: Message Tail Settings
 * 
 * Version 1.07: March 3, 2022
 * * Compatibility Update
 * ** Added better compatibility functionality with other plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Message Button Console > Auto-Size Hide?
 * **** Hide the button console when using auto-size text codes?
 * 
 * Version 1.06: November 18, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: November 4, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by Archeia:
 * *** Plugin Parameters > Message Button Console > Background Images
 * **** Adds a background image to this button instead of using a window skin.
 * **** This will disable the window skin.
 * **** Various images can be used for "Disabled", "Enabled", and "Toggled".
 * **** Offset X and Y positions.
 * 
 * Version 1.04: October 14, 2021
 * * Feature Update!
 * ** Added an alert requirement for those who are using very old versions of
 *    the Message Core that cannot sustain the requirements of this plugin.
 *    Added by Irina.
 * 
 * Version 1.03: September 3, 2021
 * * Bug Fixes!
 * ** Pause sprite, for the Message Window, will no longer show multiple copies
 *    if the message cursor sprite is disabled. Fix made by Irina.
 * 
 * Version 1.02: August 6, 2021
 * * Documentation Update!
 * ** Plugin URL now updated to most recent one.
 * 
 * Version 1.01: July 30, 2021
 * * Feature Update!
 * ** Added graphic pre-loading for save/load menu preparation. Added by Irina.
 * 
 * Version 1.00 Official Release Date: August 2, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ExtFastFwdDisallow
 * @text Fast Forward: Allow/Disallow
 * @desc Change whether or not Fast Forward is allowed/disallowed.
 * Must be enabled by the Plugin Parameters.
 *
 * @arg Allow:eval
 * @text Allow?
 * @parent General
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow or disallow the Extended Fast Forward feature?
 * Must be enabled by the Plugin Parameters.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgButtonConsole
 * @text Message Button Console: Show/Hide
 * @desc Determine if the Message Button Console is visible or hidden.
 * Only appears on the map. Does not appear in battle.
 *
 * @arg Visible:eval
 * @text Visible?
 * @parent General
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Show or hide the Message Button Console feature?
 * Only appears on the map. Does not appear in battle.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageCursorSettings
 * @text Message Cursor: Change Settings
 * @desc Change the Message Cursor settings used.
 *
 * @arg MsgCursor:struct
 * @text Change Settings
 * @type struct<MsgCursor>
 * @desc Change the Message Cursor settings.
 * @default {"General":"","Enable:eval":"true","GraphicType:str":"icon","Icon":"","IconIndex:str":"188","FlipMultiplier:str":"0.125","Image":"","Filename:str":"","Rows:num":"1","Cols:num":"1","FrameDelay:num":"4","Appearance":"","AnchorX:num":"0.5","AnchorY:num":"1","OffsetX:num":"+0","OffsetY:num":"-4"}
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command MessageTailSettings
 * @text Message Tail: Change Settings
 * @desc Change the Message Tail settings.
 *
 * @arg Settings:struct
 * @text Message Tail Settings
 * @type struct<MsgTail>
 * @desc Message Tail settings used for Message Windows.
 * Requires images and text codes to appear.
 * @default {"AutoPosition":"","autoPositionTail:eval":"true","autoPositionLeft:eval":"true","autoPositionOffsetX:num":"+0","autoPositionOffsetY:num":"+0","TailDir":"","BottomLeft":"","bottomLeftFilename:str":"","bottomLeftAnchorX:num":"0.5","bottomLeftAnchorY:num":"0.0","bottomLeftOffsetX:num":"+0","bottomLeftOffsetY:num":"+0","BottomRight":"","bottomRightFilename:str":"","bottomRightAnchorX:num":"0.5","bottomRightAnchorY:num":"0.0","bottomRightOffsetX:num":"+0","bottomRightOffsetY:num":"+0","UpperLeft":"","upperLeftFilename:str":"","upperLeftAnchorX:num":"0.5","upperLeftAnchorY:num":"1.0","upperLeftOffsetX:num":"+0","upperLeftOffsetY:num":"+0","UpperRight":"","upperRightFilename:str":"","upperRightAnchorX:num":"0.5","upperRightAnchorY:num":"1.0","upperRightOffsetX:num":"+0","upperRightOffsetY:num":"+0"}
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
 * @param ExtMessageFunc
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Auto:struct
 * @text Auto-Forward Settings
 * @type struct<Auto>
 * @desc Auto-Forward settings used for this game.
 * @default {"WaitPerChar:num":"6","MinimumWait:num":"300"}
 *
 * @param FastFwd:struct
 * @text Fast Forward (Extended)
 * @type struct<FastFwd>
 * @desc Extended Fast Forward settings used for this game.
 * @default {"Enable:eval":"true","Speed:num":"8","SceneChangeReset:eval":"true"}
 *
 * @param MsgButtonConsole:struct
 * @text Message Button Console
 * @type struct<MsgButtonConsole>
 * @desc Message Button Console settings used for this game.
 * @default {"General":"","ShowDefault:eval":"true","Position:str":"bottom","Appearance":"","WindowSkin:str":"Window","FontFace:str":"Arial","FontSize:num":"18","TextColors":"","NormalColor:str":"0","ToggledColor:str":"24","DisabledColor:str":"7","Visuals":"","ButtonWidth:num":"86","ButtonHeight:num":"36","ButtonBuffer:num":"6"}
 *
 * @param Buttons:struct
 * @text Button Settings
 * @parent MsgButtonConsole:struct
 * @type struct<Buttons>
 * @desc Settings for which buttons appear and how they appear.
 * @default {"General":"","List:arraystr":"[\"auto\",\"fastFwd\",\"log\",\"hide\",\"save\",\"load\",\"options\",\"gameEnd\"]","AutoKey:str":"none","Shortcuts":"","SaveKey:str":"none","LoadKey:str":"none","OptionsKey:str":"none","GameEndKey:str":"none","Vocab":"","Auto:str":"AUTO","FastFwd:str":"FAST","Save:str":"SAVE","Load:str":"LOAD","Options:str":"CONFIG","GameEnd:str":"TITLE"}
 *
 * @param MsgCursor:struct
 * @text Message Cursor Settings
 * @type struct<MsgCursor>
 * @desc Message Cursor settings used for this game.
 * @default {"General":"","Enable:eval":"true","GraphicType:str":"icon","Icon":"","IconIndex:str":"188","FlipMultiplier:str":"0.125","Image":"","Filename:str":"","Rows:num":"1","Cols:num":"1","FrameDelay:num":"4","Appearance":"","AnchorX:num":"0.5","AnchorY:num":"1","OffsetX:num":"+0","OffsetY:num":"-4"}
 *
 * @param MsgTail:struct
 * @text Message Tail Settings
 * @type struct<MsgTail>
 * @desc Message Tail settings used for Message Windows.
 * Requires images and text codes to appear.
 * @default {"AutoPosition":"","autoPositionTail:eval":"true","autoPositionLeft:eval":"true","autoPositionOffsetX:num":"+0","autoPositionOffsetY:num":"+0","TailDir":"","BottomLeft":"","bottomLeftFilename:str":"","bottomLeftAnchorX:num":"0.5","bottomLeftAnchorY:num":"0.0","bottomLeftOffsetX:num":"+0","bottomLeftOffsetY:num":"+0","BottomRight":"","bottomRightFilename:str":"","bottomRightAnchorX:num":"0.5","bottomRightAnchorY:num":"0.0","bottomRightOffsetX:num":"+0","bottomRightOffsetY:num":"+0","UpperLeft":"","upperLeftFilename:str":"","upperLeftAnchorX:num":"0.5","upperLeftAnchorY:num":"1.0","upperLeftOffsetX:num":"+0","upperLeftOffsetY:num":"+0","UpperRight":"","upperRightFilename:str":"","upperRightAnchorX:num":"0.5","upperRightAnchorY:num":"1.0","upperRightOffsetX:num":"+0","upperRightOffsetY:num":"+0"}
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
 * Auto-Forward Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Auto:
 *
 * @param WaitPerChar:num
 * @text Wait per Character
 * @parent General
 * @type number
 * @min 1
 * @desc How many frames should the game wait per character?
 * Average: 60 frames per second.
 * @default 6
 *
 * @param MinimumWait:num
 * @text Minimum Wait
 * @parent General
 * @type number
 * @min 1
 * @desc What is the minimum amount of frames to wait?
 * Average: 60 frames per second.
 * @default 300
 *
 */
/* ----------------------------------------------------------------------------
 * Extended Fast Forward Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~FastFwd:
 *
 * @param Enable:eval
 * @text Enable?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable or disable the Extended Fast Forward feature?
 * @default true
 *
 * @param Speed:num
 * @text Speed
 * @parent General
 * @type number
 * @min 2
 * @desc What is the speed at which Extended Fast Forward works at?
 * Higher numbers are faster.
 * @default 8
 *
 * @param SceneChangeReset:eval
 * @text Reset on Scene Change?
 * @parent General
 * @type boolean
 * @on Reset
 * @off Keep
 * @desc Reset Fast Forward setting on scene changes (ie battle, menu, or map transfers)?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Message Button Console Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MsgButtonConsole:
 *
 * @param General
 *
 * @param ShowDefault:eval
 * @text Show by Default?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show or hide the Message Button Console by default?
 * @default true
 *
 * @param Position:str
 * @text Position
 * @parent General
 * @type select
 * @option Top of Message Window
 * @value top
 * @option Bottom of Message Window
 * @value bottom
 * @desc Where do you wish to display the Message Button Console?
 * @default bottom
 *
 * @param AutoSizeHide:eval
 * @text Auto-Size Hide?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Hide the button console when using auto-size text codes?
 * @default false
 *
 * @param Appearance
 *
 * @param WindowSkin:str
 * @text Window Skin
 * @parent Appearance
 * @type file
 * @dir img/system/
 * @require 1
 * @desc What is the window skin used for the buttons?
 * Ignore if using Background Images.
 * @default Window
 *
 * @param FontFace:str
 * @text Font Name
 * @parent Appearance
 * @desc What font do you wish to use for the Message Button Console?
 * @default Arial
 *
 * @param FontSize:num
 * @text Font Size
 * @parent FontFace:str
 * @type number
 * @min 1
 * @desc What font size do you wish to use for the Message Button Console?
 * @default 18
 * 
 * @param TextColors
 * @text Text Colors
 * @parent Appearance
 *
 * @param NormalColor:str
 * @text Normal Color
 * @parent TextColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ToggledColor:str
 * @text Toggled Color
 * @parent TextColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param DisabledColor:str
 * @text Disabled Color
 * @parent TextColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param Visuals
 * @text Button Visuals
 * @parent Appearance
 *
 * @param ButtonOffsetX:num
 * @text Offset X
 * @parent Visuals
 * @desc Offsets the buttons x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param ButtonOffsetY:num
 * @text Offset Y
 * @parent Visuals
 * @desc Offsets the buttons y position.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param ButtonWidth:num
 * @text Width
 * @parent Visuals
 * @type number
 * @min 1
 * @desc What is the width of each button?
 * @default 86
 *
 * @param ButtonHeight:num
 * @text Height
 * @parent Visuals
 * @type number
 * @min 1
 * @desc What is the height of each button?
 * @default 36
 *
 * @param ButtonBuffer:num
 * @text Buffer
 * @parent Visuals
 * @type number
 * @min 1
 * @desc What is the buffer between each button?
 * @default 6
 *
 * @param Images
 * @text Background Images
 * @parent Appearance
 *
 * @param ImgDisabled:str
 * @text Disabled Image
 * @parent Images
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the background image when the button is disabled.
 * @default 
 *
 * @param ImgDisabledOffsetX:num
 * @text Offset X
 * @parent ImgDisabled:str
 * @desc Offsets the X position of this image.
 * Negative: left; Positive: right
 * @default +0
 *
 * @param ImgDisabledOffsetY:num
 * @text Offset Y
 * @parent ImgDisabled:str
 * @desc Offsets the Y position of this image.
 * Negative: up; Positive: down
 * @default +0
 *
 * @param ImgEnabled:str
 * @text Enabled Image
 * @parent Images
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the background image when the button is enabled.
 * @default 
 *
 * @param ImgEnabledOffsetX:num
 * @text Offset X
 * @parent ImgEnabled:str
 * @desc Offsets the X position of this image.
 * Negative: left; Positive: right
 * @default +0
 *
 * @param ImgEnabledOffsetY:num
 * @text Offset Y
 * @parent ImgEnabled:str
 * @desc Offsets the Y position of this image.
 * Negative: up; Positive: down
 * @default +0
 *
 * @param ImgToggled:str
 * @text Toggled Image
 * @parent Images
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the background image when the button is toggled.
 * @default 
 *
 * @param ImgToggledOffsetX:num
 * @text Offset X
 * @parent ImgToggled:str
 * @desc Offsets the X position of this image.
 * Negative: left; Positive: right
 * @default +0
 *
 * @param ImgToggledOffsetY:num
 * @text Offset Y
 * @parent ImgToggled:str
 * @desc Offsets the Y position of this image.
 * Negative: up; Positive: down
 * @default +0
 *
 */
/* ----------------------------------------------------------------------------
 * Buttons Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Buttons:
 *
 * @param General
 *
 * @param List:arraystr
 * @text List
 * @parent General
 * @type combo[]
 * @option auto
 * @option log
 * @option fastFwd
 * @option gameEnd
 * @option hide
 * @option load
 * @option options
 * @option save
 * @desc Which buttons appear and in what order?
 * Some commands require certain plugins installed.
 * @default ["auto","fastFwd","log","hide","save","load","options","gameEnd"]
 * 
 * @param Shortcuts
 * @text Shortcut Keys
 *
 * @param AutoKey:str
 * @text Auto-Forward Key
 * @parent General
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for auto-forwarding messages.
 * @default none
 * 
 * @param SaveKey:str
 * @text Save Key
 * @parent Shortcuts
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for quick saving.
 * Requires VisuMZ_1_SaveCore!
 * @default none
 * 
 * @param LoadKey:str
 * @text Load Key
 * @parent Shortcuts
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for quick load.
 * Requires VisuMZ_1_SaveCore!
 * @default none
 * 
 * @param OptionsKey:str
 * @text Options Key
 * @parent Shortcuts
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for opening options.
 * Requires VisuMZ_1_OptionsCore!
 * @default none
 * 
 * @param GameEndKey:str
 * @text Game End Key
 * @parent Shortcuts
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for ending the game.
 * @default none
 *
 * @param Vocab
 * @text Vocabulary
 *
 * @param Auto:str
 * @text Auto-Forward
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * @default AUTO
 *
 * @param FastFwd:str
 * @text Fast Forward
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * @default FAST
 *
 * @param Save:str
 * @text Save Game
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * Requires VisuMZ_1_SaveCore!
 * @default SAVE
 *
 * @param Load:str
 * @text Load Game
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * Requires VisuMZ_1_SaveCore!
 * @default LOAD
 *
 * @param Options:str
 * @text Options
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * Requires VisuMZ_1_OptionsCore!
 * @default CONFIG
 *
 * @param GameEnd:str
 * @text Game End
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * @default TITLE
 *
 */
/* ----------------------------------------------------------------------------
 * Message Cursor Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MsgCursor:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable or disable the message cursor?
 * @default true
 *
 * @param GraphicType:str
 * @text Graphic Type
 * @parent General
 * @type select
 * @option Icon - From img/system/IconSet.png
 * @value icon
 * @option Image - An animated image from img/system/
 * @value image
 * @option Window Skin - Use the default Window Skin cursor
 * @value windowskin
 * @desc What is the cursor's graphic type?
 * @default icon
 * 
 * @param Icon
 *
 * @param IconIndex:str
 * @text Icon Index
 * @parent Icon
 * @desc This is icon used for the Message Cursor.
 * @default 188
 *
 * @param FlipMultiplier:str
 * @text Flip Speed Multiplier
 * @parent Icon
 * @desc What is the flip speed multiplier for the Message Cursor?
 * Use 0 for no flipping.
 * @default 1
 * 
 * @param Image
 *
 * @param Filename:str
 * @text Filename
 * @parent Image
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the image found inside the img/system/ folder.
 * @default 
 *
 * @param Rows:num
 * @text Image Rows
 * @parent Image
 * @type number
 * @min 1
 * @desc How many rows are there for the image?
 * @default 1
 *
 * @param Cols:num
 * @text Image Columns
 * @parent Image
 * @type number
 * @min 1
 * @desc How many columns are there for the image?
 * @default 1
 *
 * @param FrameDelay:num
 * @text Frame Delay
 * @parent Image
 * @type number
 * @min 1
 * @desc How many frames delayed are there per animated cell?
 * @default 4
 * 
 * @param Appearance
 *
 * @param AnchorX:num
 * @text Anchor X
 * @parent Appearance
 * @desc Determine the Message Cursor's X position.
 * Use a number between 0 and 1 for best results.
 * @default 0.5
 *
 * @param AnchorY:num
 * @text Anchor Y
 * @parent Appearance
 * @desc Determine the Message Cursor's Y position.
 * Use a number between 0 and 1 for best results.
 * @default 1
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent Appearance
 * @desc Offset the Message Cursor's X position by how many pixels?
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent Appearance
 * @desc Offset the Message Cursor's Y position by how many pixels?
 * @default -8
 *
 */
/* ----------------------------------------------------------------------------
 * Message Tail Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MsgTail:
 *
 * @param AutoPosition
 * @text Auto-Position
 *
 * @param autoPositionTail:eval
 * @text Enable?
 * @parent AutoPosition
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Show Message Tails with Auto-Position text codes?
 * @default true
 *
 * @param autoPositionLeft:eval
 * @text Face Left?
 * @parent AutoPosition
 * @type boolean
 * @on Face Left
 * @off Face Right
 * @desc Which direction does the Message Tail point to?
 * @default true
 *
 * @param autoPositionOffsetX:num
 * @text Offset X
 * @parent AutoPosition
 * @desc Message Window's X offset with auto-position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param autoPositionOffsetY:num
 * @text Offset Y
 * @parent AutoPosition
 * @desc Message Window's Y offset with auto-position.
 * Negative: up. Positive: down.
 * @default +0
 * 
 * @param TailDir
 * @text Tail Directions
 *
 * @param BottomLeft
 * @text Bottom Left
 * @parent TailDir
 *
 * @param bottomLeftFilename:str
 * @text Filename
 * @parent BottomLeft
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the Message Tail graphic going towards
 * the bottom left.
 * @default 
 *
 * @param bottomLeftAnchorX:num
 * @text Anchor X
 * @parent BottomLeft
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param bottomLeftAnchorY:num
 * @text Anchor Y
 * @parent BottomLeft
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 0.0
 *
 * @param bottomLeftOffsetX:num
 * @text Offset X
 * @parent BottomLeft
 * @desc Offset the Message Tail's X position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param bottomLeftOffsetY:num
 * @text Offset Y
 * @parent BottomLeft
 * @desc Offset the Message Tail's Y position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param BottomRight
 * @text Bottom Right
 * @parent TailDir
 *
 * @param bottomRightFilename:str
 * @text Filename
 * @parent BottomRight
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the Message Tail graphic going towards
 * the bottom right.
 * @default 
 *
 * @param bottomRightAnchorX:num
 * @text Anchor X
 * @parent BottomRight
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param bottomRightAnchorY:num
 * @text Anchor Y
 * @parent BottomRight
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 0.0
 *
 * @param bottomRightOffsetX:num
 * @text Offset X
 * @parent BottomRight
 * @desc Offset the Message Tail's X position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param bottomRightOffsetY:num
 * @text Offset Y
 * @parent BottomRight
 * @desc Offset the Message Tail's Y position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param UpperLeft
 * @text Upper Left
 * @parent TailDir
 *
 * @param upperLeftFilename:str
 * @text Filename
 * @parent UpperLeft
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the Message Tail graphic going towards
 * the upper left.
 * @default 
 *
 * @param upperLeftAnchorX:num
 * @text Anchor X
 * @parent UpperLeft
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param upperLeftAnchorY:num
 * @text Anchor Y
 * @parent UpperLeft
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 1.0
 *
 * @param upperLeftOffsetX:num
 * @text Offset X
 * @parent UpperLeft
 * @desc Offset the Message Tail's X position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param upperLeftOffsetY:num
 * @text Offset Y
 * @parent UpperLeft
 * @desc Offset the Message Tail's Y position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param UpperRight
 * @text Upper Right
 * @parent TailDir
 *
 * @param upperRightFilename:str
 * @text Filename
 * @parent UpperRight
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the Message Tail graphic going towards
 * the upper right.
 * @default 
 *
 * @param upperRightAnchorX:num
 * @text Anchor X
 * @parent UpperRight
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param upperRightAnchorY:num
 * @text Anchor Y
 * @parent UpperRight
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 1.0
 *
 * @param upperRightOffsetX:num
 * @text Offset X
 * @parent UpperRight
 * @desc Offset the Message Tail's X position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param upperRightOffsetY:num
 * @text Offset Y
 * @parent UpperRight
 * @desc Offset the Message Tail's Y position.
 * Negative: left. Positive: right.
 * @default +0
 *
 */
//=============================================================================

function _0x5cf7(){const _0x14644b=['toUpperCas','anchor','s\x20required','wNcck','EuYRP','ORWARD_LOO','\x20into\x20the\x20','sAzPf','LqvCC','rFilter','seSign','bexZG','\x20is\x20out\x20of','vJebT','frameCount','toForwardM','_messageTa','createButt','rEnabled','ist.\x0aIt\x20is','onSavefile','VisuMZ_1_O','uwUQb','sage_updat','tonConsole','dFastForwa','GameEndKey','auto','_childInte','mand101','EpjoW','setFrame','_choiceLis','POnSZ','Settings','ndowActive','oSize','Scene_Boot','sole','checkBackI','Mode','rward','Scene_Save','_extFastFo','LoadKey','image','_autoForwa','QsBpm','_createPau','jCkeY','autoPositi','textColor','onTail','isExtended','ard','lCQel','%1OffsetX','_interpret','preter_com','\x20plugin\x20pl','VisuMZ_3_M','xtMessageF','sylJh','updateExte','e_flushTex','STRUCT','FontFace','dExtendedF','isPlayingQ','other\x20Tier','_heldDownF','convertVar','sage_autoP','iconWidth','essageInpu','autoForwar','rOcBT','essionDela','ARRAYEVAL','includes','RD_DELAY_P','sxvcG','ing','VisuMZ_1_S','ARRAYNUM','egexp','registerCo','embers','Efulq','tings','QVToi','ButtonOffs','Load','Color','oleVisible','toggleMess','GmNSx','setY','Scene_Mess','_lastExtMs','dnWEz','EgKgP','EIsMG','VZtqH','skin','SET_X','isCancelle','match','StcUq','xEISq','AUTO_FORWA','FuncResetR','MAGE_SPRIT','<HIDEBUTTO','rrectly\x20pl','isMessageB','flushTextS','_autoSizeR','STR','VisuMZ_2_F','Window_Mes','Sys','4444464LTYkjV','%1OffsetY','ARRAYSTR','ndow','kyNZf','textColorI','mageSprite','moveCustom','UjcKU','eVisible','bottom','isMainMenu','ier\x20number','soleSprite','isSaveEnab','faceWidth','edFastForw','er_push','direction','AnchorX','playOkSoun','log','etY','onOffsetY','UYoHp','fontFace','addAutoFor','t\x20match\x20pl','xXnNB','ttons','Func','yOehN','wardDelay','active','setMessage','GameEnd','Window','uYNJh','e_preConve','General','_index','ction','92748ndGfJJ','miYHO','zFbuD','%1\x27s\x20versi','nLJux','dow','Sound','GKmAi','WwVEP','leVisible','call','kKDQI','CursorFram','glMLQ','aracters','vYRpp','hJPEm','sZYbm','clear','loadFace','updateCons','loadWindow','ollEnabled','gLafw','_refreshPa','tState','processBut','newPage','soleTextCo','startPause','load','isRTL','HJtbs','length','tle','save','sage_isTri','_type','setupMessa','QYStn','799255ANZHZh','SHORTCUT_K','_hideButto','isTriggere','OffsetY','_loadSyste','fKaow','foQEA','requestAni','rwardMode','IconSet','itemPaddin','#%1','CJSbQ','isEventRun','initExtend','gFuncIndex','TEXT_COLOR','right','isOpen','sageTailEs','isMessageA','mmand','windowskin','nFlbt','ease\x20updat','ixDlN','essageCore','AItbB','ygXqn','eReset','FER','wxXJz','YWApi','updateColo','YtDtv','sage_newPa','parse','ion','rdMode','Auvgc','9LXTCcn','the\x20VisuMZ','push','_messageBu','_scene','initMember','bitmap','VSXlh','_eventItem','DEFAULT_SH','tomMessage','ilSettings','GsUgG','createAllW','ConvertPar','parseMessa','command101','on\x20does\x20no','eAutoPosit','clamp','toSize','uGfkI','backOpacit','updateEffe','_NORMAL','ition','ImgDisable','updateIcon','EopbQ','ngExFastFo','soleButton','_afterQteS','contents','ImagesForE','MsgCursor','oFnkr','_extendedF','USE_BACK_I','rdCount','s.\x0aPlease\x20','MessageCor','width','Images','ARRAYSTRUC','%1\x20is\x20miss','ount','sage_initi','ame','EhBLB','onLeft','isFurnitur','NufGU','YqHab','OptionsKey','Auto','_msgCursor','left','dKey','eSignHeigh','ugin.','BUTTON_BUF','FhpUC','openness','FastFwd','ileExists','ite','Wait','Forward','isSceneUsi','OGLWD','SceneChang','isSceneMap','\x20a\x20Tier\x20%2','ageTailBit','517MyXELQ','ISnWu','le_update','Options','ozYqu','_buttonCon','Game_Temp_','faceIndex','eFace','geTailSett','tWindow','mViFZ','PWfyh','updateExtM','Disallow','%1Filename','status','updatePaus','ilSprite','FONT_SIZE','toggleAuto','ER_CHAR','text','onsole','_autoPosit','11904ziIZZP','_cachedInd','resetFontS','ugin\x27s.\x20Pl','Game_Syste','omMessageC','Left','CursorPaus','toLowerCas','capeCodes','MsgTail','sitionMess','updateMain','battlerNam','ageFunc\x20pl','AnchorY','refresh','skip','ode','ConsoleAut','%1%2','ackgroundS','zhnjz','meetExtMsg','The\x20latest','prototype','16LVvtAu','e\x20plugin\x20l','qMxmb','ageTailSpr','updateImag','initialize','onTouchScr','updateDime','trim','POSITION','convertMes','42OUBxad','version','AllWindows','VisuMZ_4_M','updateFade','updateMess','onsoleObje','tes','filter','Qzxfv','ptionsCore','ButtonWidt','SqLcn','_TOGGLED','utWindow','FONT_FACE','uttonConso','NwKLX','opacity','ibility','mwnJZ','YXvKq','nJfwj','Plugin\x20Man','setX','NmlKp','aced\x20over\x20','ity','etX','_currentAu','Scene_Map_','TailMainKe','unc','eMessageCu','ULjlM','zmgAS','FUNC','FollowText','astFwd','ExtMessage','dMode','_messageWi','bility','rpreter','refreshCus','PdPaL','useSign','ejcRH','FwxTi','isAnySavef','prite','%1\x20is\x20inco','yHyyn','xFTea','nConsoleBu','UZZDQ','BUTTON_OFF','AAZHh','MessageLog','location','AutoForwar','prepareHid','_updatePau','loadSystem','\x20date.\x0a','positionX','ursorPause','createBack','GHT','playCancel','ClcQj','tPjeU','cIXtk','sgFuncRese','8993260wuQgeT','isPressed','teXBJ','_disallowF','ORWARD_STO','nsions','cos','floor','startWait','Rows','ImageSprit','options','kBHIj','BFKqA','sLmGz','_2_ExtMess','characterN','WindowSkin','buffer','indows','iFMxy','\x20to\x20use\x0a','eButtonCon','VOCAB','tate','mation','Sprite','dCQtf','create','fontSize','msgButtonC','max','SignSprite','ignSprites','Scene_Batt','exit','qhaPT','removeChil','NRfym','urnitureSy','constructo','PMBLF','MLQFL','JSON','Multiply','IconIndex','EscapeChar','uSuOS','visible','bottom%1Fi','isActivate','faceName','107383BaHfTs','essageLog','UMFEZ','drawing','usesAutoPo','center','rAkuG','lSettings','eSign','NgDvU','getColor','Enabled','GnEbZ','name','raphics','LWETS','height','BTBoB','TE_Trigger','makeDeepCo','preConvert','DClgN','YGoaH','GIzvD','gnSprites','ButtonCons','JqGqp','GraphicTyp','ButtonHeig','sage_initM','padding','kseer','WrehU','_pauseSign','PvDsB','sxqbL','Buttons','lastFile','CursorSett','loadSvActo','xllNf','astForward','3|0|1|4|2','658707OnPwZY','top','Save','refreshBut','ynmRL','ExtFastFwd','sage_added','getCustomB','innerWidth','MessageCur','ollStart','FastForwar','tonShortcu','seSignSpri','kIafT','gWCEN','mImages','ings','Position','nConsole','anager.','ikKpq','_FOLLOW_TE','EXT_FAST_F','_cache_cus','ager.','zCOBI','ORWARD_ENA','FrameDelay','Console','equirement','NHRfE','EXT_CURSOR','alignButto','Game_Inter','NZLtk','hqTXl','scale','MessageTai','ttonConsol','tLRjM','anyActiveM','ents','FYcXe','eCount','Vhulp','ndqcy','BLED','map','qUKxf','_parentWin','%1AnchorX','104QwBAsX','createCust','SPhwe','SKIN','stem','led','fKHIg','age_create','replace','BUTTON_ORD','ter','tingPauseS','initMessag','ageTail','%1AnchorY','updatePadd','lor','GyFNy','BvdKD','_CHANGE','sorPauseSi','gameend','hideButton','BUTTON_WID','_contentsS','ssageCurso','cTLGy','lier','fastfwd','sage_start','NmgFX','kbJou','tgmis','ggered','escape','FontSize','_windowski','loadPartyG','isCustomMe','split','onOffsetX','sorSetting','pause','_numberInp','dDisallowe','jnXOn','STunz','setExtende','ettings','Height','SET_Y','addedHeigh','PtkFj','addChildTo','RD_MIN_DEL','XaYLe','ATlkp','ositionOff','Vpxvq','mfWkd','return\x200','MsgButtonC','m_initiali','playBuzzer','Enable','ButtonBuff','showButton','NCONSOLE>','Filename','geTailText','round','update','PSIyh','aveCore','rwardCance','descriptio','format','addChild','textMsgFun','ndedFastFo','kqaTS','ImgEnabled','ENCmd','Visible','mGHdq','eCursorSet','ionTarget','Codes','removeExis','gaGQn','SceneManag','ist\x20from\x20s','P_ON_SCENE','mallest\x20to','EVAL','Pause','createMess','acters','upper','hide','rwardLoopi','iPbPj','backlog','SaveKey','WindowLaye','updateBack','_messageAu','vcSHk','gRiDD','ning','ams','getMessage','hOsPV','ImgToggled','1|0|4|2|3','VisuMZ_1_M','sMCbH','Cols','utoForward','\x20version\x20i','DssMC','eVisibilit','resetMessa','DisabledCo','dTriggered','wgEOP','rdDisallow','InwVJ','dWXcj','BUTTON_HEI','_DISABLED','alpha','ToggledCol','AnimationC','TailSettin','ired\x20plugi','oleVisibil','updateCust','sAVTc','Window_Bas','tWindows'];_0x5cf7=function(){return _0x14644b;};return _0x5cf7();}const _0x1b01ff=_0x2589;(function(_0x20225a,_0x515aa5){const _0x43b38f=_0x2589,_0x56cb8f=_0x20225a();while(!![]){try{const _0x15178f=parseInt(_0x43b38f(0x26b))/(-0x1dcb*-0x1+-0xc1+-0x1d09*0x1)+parseInt(_0x43b38f(0x2ca))/(0x1b91+-0x10bb+-0xad4)*(-parseInt(_0x43b38f(0x1c8))/(-0x9b2+-0x18c7*-0x1+-0xf12))+-parseInt(_0x43b38f(0x1e2))/(-0x2188+0xf8a+0xa*0x1cd)*(-parseInt(_0x43b38f(0x13c))/(0x46d+0x3*-0x7f7+0x137d))+-parseInt(_0x43b38f(0x1ed))/(-0x1*-0x1ad2+-0x25b5+0x39*0x31)*(parseInt(_0x43b38f(0x296))/(0x3*-0x76+-0xefa+0x1*0x1063))+-parseInt(_0x43b38f(0x3d1))/(-0x1821+-0xf8c+0x27b5)*(parseInt(_0x43b38f(0x165))/(-0x93f+-0x16d4*0x1+0x201c))+parseInt(_0x43b38f(0x237))/(0x24c5*-0x1+0x1*0x149a+0x1cd*0x9)+parseInt(_0x43b38f(0x1af))/(-0x1142+0xb11*0x1+-0x1c*-0x39)*(parseInt(_0x43b38f(0x3fb))/(-0x5*0xfd+0x153*0x15+-0x16d2));if(_0x15178f===_0x515aa5)break;else _0x56cb8f['push'](_0x56cb8f['shift']());}catch(_0x4d7617){_0x56cb8f['push'](_0x56cb8f['shift']());}}}(_0x5cf7,-0x1*-0x71fd7+-0x1*0xb3bb2+0xd17c2));var label=_0x1b01ff(0x214)+_0x1b01ff(0x3ef),tier=tier||-0x2b6*-0xb+0xdc0+-0x15c9*0x2,dependencies=[_0x1b01ff(0x33d)+_0x1b01ff(0x157)],pluginData=$plugins[_0x1b01ff(0x1f5)](function(_0x76ca2){const _0x1302ff=_0x1b01ff,_0x5e70f7={'mwnJZ':function(_0x584659,_0x56fba0){return _0x584659+_0x56fba0;},'nFlbt':function(_0x2a7912,_0x336beb){return _0x2a7912+_0x336beb;}};return _0x76ca2[_0x1302ff(0x1bf)]&&_0x76ca2[_0x1302ff(0x315)+'n']['includes'](_0x5e70f7[_0x1302ff(0x201)](_0x5e70f7[_0x1302ff(0x154)]('[',label),']'));})[0x22f8+0x1f4a+-0x4242];function _0x2589(_0x4b95ae,_0x3d3cc4){const _0x764827=_0x5cf7();return _0x2589=function(_0x537817,_0x5821e7){_0x537817=_0x537817-(-0x2*0x205+0x2*0x247+-0x51*-0x2);let _0x5170ee=_0x764827[_0x537817];return _0x5170ee;},_0x2589(_0x4b95ae,_0x3d3cc4);}VisuMZ[label][_0x1b01ff(0x379)]=VisuMZ[label][_0x1b01ff(0x379)]||{},VisuMZ['ConvertPar'+_0x1b01ff(0x338)]=function(_0x4a6d4b,_0x463d56){const _0x4cf456=_0x1b01ff,_0x1c41b2={'EgKgP':function(_0x45b3ec,_0x3ac0f7){return _0x45b3ec(_0x3ac0f7);},'Atpbd':'NUM','zCOBI':function(_0x1866dc,_0x99cf7e){return _0x1866dc!==_0x99cf7e;},'OXqiK':_0x4cf456(0x3ab),'dCQtf':_0x4cf456(0x328),'PvDsB':function(_0x27d51d,_0x80cf67){return _0x27d51d!==_0x80cf67;},'wYPwA':function(_0x58b2a8,_0x4830df){return _0x58b2a8(_0x4830df);},'kIafT':_0x4cf456(0x3a5),'YqHab':_0x4cf456(0x262),'gWCEN':function(_0x29bf0c,_0x48d3c7){return _0x29bf0c!==_0x48d3c7;},'yOehN':'ARRAYJSON','HJtbs':function(_0x45e472,_0x355264){return _0x45e472!==_0x355264;},'glMLQ':_0x4cf456(0x211),'sxvcG':_0x4cf456(0x306),'Efulq':'ARRAYFUNC','LYGkD':_0x4cf456(0x3cd),'FhpUC':function(_0x3b4b57,_0x110129){return _0x3b4b57!==_0x110129;},'ClcQj':_0x4cf456(0x3d3),'DssMC':function(_0x347675,_0x2ae8e9){return _0x347675!==_0x2ae8e9;},'BFKqA':_0x4cf456(0x398),'AItbB':function(_0x498eeb,_0x505372){return _0x498eeb!==_0x505372;},'oijQM':_0x4cf456(0x190)+'T'};for(const _0x26e98f in _0x463d56){if(_0x26e98f[_0x4cf456(0x3c2)](/(.*):(.*)/i)){const _0xc418d3=_0x1c41b2[_0x4cf456(0x3bc)](String,RegExp['$1']),_0x284ff7=_0x1c41b2['EgKgP'](String,RegExp['$2'])['toUpperCas'+'e']()['trim']();let _0x4af535,_0xaa14dc,_0x17a534;switch(_0x284ff7){case _0x1c41b2['Atpbd']:_0x4af535=_0x1c41b2[_0x4cf456(0x2b0)](_0x463d56[_0x26e98f],'')?_0x1c41b2[_0x4cf456(0x3bc)](Number,_0x463d56[_0x26e98f]):-0x1*-0xf35+-0x15*0x101+-0x20*-0x2f;break;case _0x1c41b2['OXqiK']:_0xaa14dc=_0x1c41b2[_0x4cf456(0x2b0)](_0x463d56[_0x26e98f],'')?JSON[_0x4cf456(0x161)](_0x463d56[_0x26e98f]):[],_0x4af535=_0xaa14dc[_0x4cf456(0x2c6)](_0x277375=>Number(_0x277375));break;case _0x1c41b2[_0x4cf456(0x252)]:_0x4af535=_0x1c41b2[_0x4cf456(0x28d)](_0x463d56[_0x26e98f],'')?_0x1c41b2['wYPwA'](eval,_0x463d56[_0x26e98f]):null;break;case _0x1c41b2[_0x4cf456(0x2a4)]:_0xaa14dc=_0x1c41b2['zCOBI'](_0x463d56[_0x26e98f],'')?JSON['parse'](_0x463d56[_0x26e98f]):[],_0x4af535=_0xaa14dc[_0x4cf456(0x2c6)](_0x180b38=>eval(_0x180b38));break;case _0x1c41b2[_0x4cf456(0x199)]:_0x4af535=_0x1c41b2['gWCEN'](_0x463d56[_0x26e98f],'')?JSON[_0x4cf456(0x161)](_0x463d56[_0x26e98f]):'';break;case _0x1c41b2[_0x4cf456(0x3f0)]:_0xaa14dc=_0x1c41b2[_0x4cf456(0x134)](_0x463d56[_0x26e98f],'')?JSON['parse'](_0x463d56[_0x26e98f]):[],_0x4af535=_0xaa14dc[_0x4cf456(0x2c6)](_0x2937f3=>JSON[_0x4cf456(0x161)](_0x2937f3));break;case _0x1c41b2[_0x4cf456(0x408)]:_0x4af535=_0x1c41b2[_0x4cf456(0x2a5)](_0x463d56[_0x26e98f],'')?new Function(JSON['parse'](_0x463d56[_0x26e98f])):new Function(_0x1c41b2[_0x4cf456(0x3a8)]);break;case _0x1c41b2[_0x4cf456(0x3af)]:_0xaa14dc=_0x1c41b2[_0x4cf456(0x28d)](_0x463d56[_0x26e98f],'')?JSON['parse'](_0x463d56[_0x26e98f]):[],_0x4af535=_0xaa14dc[_0x4cf456(0x2c6)](_0x2045d8=>new Function(JSON['parse'](_0x2045d8)));break;case _0x1c41b2['LYGkD']:_0x4af535=_0x1c41b2[_0x4cf456(0x1a2)](_0x463d56[_0x26e98f],'')?_0x1c41b2[_0x4cf456(0x3bc)](String,_0x463d56[_0x26e98f]):'';break;case _0x1c41b2[_0x4cf456(0x233)]:_0xaa14dc=_0x1c41b2[_0x4cf456(0x342)](_0x463d56[_0x26e98f],'')?JSON[_0x4cf456(0x161)](_0x463d56[_0x26e98f]):[],_0x4af535=_0xaa14dc[_0x4cf456(0x2c6)](_0x33d46d=>String(_0x33d46d));break;case _0x1c41b2[_0x4cf456(0x244)]:_0x17a534=_0x1c41b2[_0x4cf456(0x158)](_0x463d56[_0x26e98f],'')?JSON['parse'](_0x463d56[_0x26e98f]):{},_0x4af535=VisuMZ[_0x4cf456(0x173)+_0x4cf456(0x338)]({},_0x17a534);break;case _0x1c41b2['oijQM']:_0xaa14dc=_0x1c41b2['DssMC'](_0x463d56[_0x26e98f],'')?JSON['parse'](_0x463d56[_0x26e98f]):[],_0x4af535=_0xaa14dc[_0x4cf456(0x2c6)](_0x42b905=>VisuMZ[_0x4cf456(0x173)+'ams']({},JSON[_0x4cf456(0x161)](_0x42b905)));break;default:continue;}_0x4a6d4b[_0xc418d3]=_0x4af535;}}return _0x4a6d4b;},(_0x5e2230=>{const _0x8c5c5c=_0x1b01ff,_0x3ca98f={'QsBpm':function(_0x6f887e,_0x35173f){return _0x6f887e(_0x35173f);},'sGdaU':_0x8c5c5c(0x191)+'ing\x20a\x20requ'+_0x8c5c5c(0x351)+'n.\x0aPlease\x20'+'install\x20%2'+_0x8c5c5c(0x35d)+_0x8c5c5c(0x204)+_0x8c5c5c(0x2af),'ULjlM':function(_0x3f8d7c,_0x15b8a6){return _0x3f8d7c!==_0x15b8a6;},'QYStn':_0x8c5c5c(0x3fe)+_0x8c5c5c(0x176)+_0x8c5c5c(0x3ec)+_0x8c5c5c(0x1cb)+_0x8c5c5c(0x155)+'e\x20it\x20in\x20th'+'e\x20Plugin\x20M'+_0x8c5c5c(0x2aa),'NufGU':function(_0x4ad057,_0x35bcbf){return _0x4ad057<_0x35bcbf;},'QitVj':function(_0x12124c,_0x565b7e){return _0x12124c(_0x565b7e);},'zlqvC':_0x8c5c5c(0x220)+_0x8c5c5c(0x3c9)+'aced\x20on\x20th'+_0x8c5c5c(0x1e3)+_0x8c5c5c(0x36a)+_0x8c5c5c(0x1ad)+_0x8c5c5c(0x392)+_0x8c5c5c(0x207)+_0x8c5c5c(0x39c)+'\x20%3\x20plugin'+_0x8c5c5c(0x18c)+'reorder\x20th'+_0x8c5c5c(0x1e3)+_0x8c5c5c(0x325)+_0x8c5c5c(0x327)+'\x20largest\x20t'+_0x8c5c5c(0x3dd)+'s.'},_0x42f704=_0x5e2230[_0x8c5c5c(0x278)];for(const _0x4dbd89 of dependencies){if(!Imported[_0x4dbd89]){_0x3ca98f[_0x8c5c5c(0x386)](alert,_0x3ca98f['sGdaU'][_0x8c5c5c(0x316)](_0x42f704,_0x4dbd89)),SceneManager[_0x8c5c5c(0x25a)]();break;}}const _0x3331ce=_0x5e2230['descriptio'+'n'];if(_0x3331ce['match'](/\[Version[ ](.*?)\]/i)){const _0x31e4ca=_0x3ca98f[_0x8c5c5c(0x386)](Number,RegExp['$1']);_0x3ca98f[_0x8c5c5c(0x20f)](_0x31e4ca,VisuMZ[label][_0x8c5c5c(0x1ee)])&&(_0x3ca98f[_0x8c5c5c(0x386)](alert,_0x3ca98f[_0x8c5c5c(0x13b)][_0x8c5c5c(0x316)](_0x42f704,_0x31e4ca)),SceneManager[_0x8c5c5c(0x25a)]());}if(_0x3331ce[_0x8c5c5c(0x3c2)](/\[Tier[ ](\d+)\]/i)){const _0x46fab8=_0x3ca98f[_0x8c5c5c(0x386)](Number,RegExp['$1']);_0x3ca98f[_0x8c5c5c(0x198)](_0x46fab8,tier)?(_0x3ca98f['QitVj'](alert,_0x3ca98f['zlqvC'][_0x8c5c5c(0x316)](_0x42f704,_0x46fab8,tier)),SceneManager['exit']()):tier=Math[_0x8c5c5c(0x256)](_0x46fab8,tier);}VisuMZ[_0x8c5c5c(0x173)+_0x8c5c5c(0x338)](VisuMZ[label][_0x8c5c5c(0x379)],_0x5e2230['parameters']);})(pluginData),PluginManager[_0x1b01ff(0x3ad)+'mmand'](pluginData['name'],_0x1b01ff(0x29b)+_0x1b01ff(0x1bd),_0x13bfda=>{const _0x3f0111=_0x1b01ff;VisuMZ['ConvertPar'+_0x3f0111(0x338)](_0x13bfda,_0x13bfda);const _0x420a9d=!_0x13bfda['Allow'];$gameSystem[_0x3f0111(0x2f9)+_0x3f0111(0x370)+_0x3f0111(0x348)+'ed'](_0x420a9d);}),PluginManager[_0x1b01ff(0x3ad)+'mmand'](pluginData['name'],_0x1b01ff(0x307)+_0x1b01ff(0x1c6),_0x339672=>{const _0x21dbfb=_0x1b01ff;VisuMZ[_0x21dbfb(0x173)+_0x21dbfb(0x338)](_0x339672,_0x339672);const _0x2df15=_0x339672[_0x21dbfb(0x31d)];$gameSystem['setMessage'+_0x21dbfb(0x284)+_0x21dbfb(0x3b5)](_0x2df15);}),PluginManager['registerCo'+_0x1b01ff(0x152)](pluginData[_0x1b01ff(0x278)],_0x1b01ff(0x29f)+_0x1b01ff(0x2f3)+'s',_0x2cb328=>{const _0x1cdf79=_0x1b01ff;VisuMZ['ConvertPar'+_0x1cdf79(0x338)](_0x2cb328,_0x2cb328);const _0x125752=_0x2cb328['MsgCursor'];$gameSystem[_0x1cdf79(0x3f3)+'CursorSett'+'ings'](_0x125752);const _0x46a2df=SceneManager[_0x1cdf79(0x169)][_0x1cdf79(0x216)+_0x1cdf79(0x3d4)];_0x46a2df&&(_0x46a2df[_0x1cdf79(0x387)+_0x1cdf79(0x2a3)+_0x1cdf79(0x1f4)](),_0x46a2df['_refreshPa'+'useSign']());}),PluginManager['registerCo'+_0x1b01ff(0x152)](pluginData[_0x1b01ff(0x278)],_0x1b01ff(0x2bc)+_0x1b01ff(0x272),_0x480cd3=>{const _0x5a7af9=_0x1b01ff;VisuMZ[_0x5a7af9(0x173)+_0x5a7af9(0x338)](_0x480cd3,_0x480cd3),$gameSystem['setMessage'+_0x5a7af9(0x350)+'gs'](_0x480cd3[_0x5a7af9(0x379)]);}),TextManager[_0x1b01ff(0x255)+_0x1b01ff(0x1c6)]=function(_0x8e6513){const _0x5c6939=_0x1b01ff;if(Window_ButtonConsole[_0x5c6939(0x24e)][_0x8e6513])return Window_ButtonConsole[_0x5c6939(0x24e)][_0x8e6513];return _0x8e6513[_0x5c6939(0x357)+'e']()[_0x5c6939(0x1ea)]();},ColorManager[_0x1b01ff(0x275)]=function(_0x198f9f){const _0x32abb6=_0x1b01ff,_0x3e8f67={'SqLcn':function(_0x351545,_0x1fc87d){return _0x351545(_0x1fc87d);},'EmkUX':_0x32abb6(0x148),'kyNZf':function(_0x1ff813,_0x543fb4){return _0x1ff813(_0x543fb4);},'xFTea':function(_0x4d3347,_0x620fe){return _0x4d3347(_0x620fe);}};return _0x198f9f=_0x3e8f67[_0x32abb6(0x1f9)](String,_0x198f9f),_0x198f9f[_0x32abb6(0x3c2)](/#(.*)/i)?_0x3e8f67['EmkUX']['format'](_0x3e8f67[_0x32abb6(0x3d5)](String,RegExp['$1'])):this[_0x32abb6(0x38a)](_0x3e8f67[_0x32abb6(0x222)](Number,_0x198f9f));},SceneManager['isSceneBat'+_0x1b01ff(0x136)]=function(){const _0x5b2f75=_0x1b01ff,_0x1b1918={'cTLGy':function(_0x136600,_0x40451a){return _0x136600===_0x40451a;}};return this['_scene']&&_0x1b1918[_0x5b2f75(0x2e4)](this[_0x5b2f75(0x169)]['constructo'+'r'],Scene_Battle);},SceneManager['isSceneMap']=function(){const _0x3b090c=_0x1b01ff,_0x1a73ac={'rAkuG':function(_0x2297a2,_0x168eef){return _0x2297a2===_0x168eef;}};return this[_0x3b090c(0x169)]&&_0x1a73ac[_0x3b090c(0x271)](this[_0x3b090c(0x169)]['constructo'+'r'],Scene_Map);},VisuMZ[_0x1b01ff(0x214)+'Func'][_0x1b01ff(0x324)+_0x1b01ff(0x3e2)]=SceneManager['push'],SceneManager['push']=function(_0x4b671b){const _0x1c35cc=_0x1b01ff;VisuMZ[_0x1c35cc(0x214)+_0x1c35cc(0x3ef)]['SceneManag'+_0x1c35cc(0x3e2)][_0x1c35cc(0x405)](this,_0x4b671b),[Scene_SaveButtonConsole,Scene_Save,Scene_Load]['includes'](_0x4b671b)&&this[_0x1c35cc(0x2ef)+_0x1c35cc(0x279)]();},SceneManager[_0x1b01ff(0x2ef)+'raphics']=function(){const _0x1f329c=_0x1b01ff;for(const _0x1d318b of $gameParty['members']()){_0x1d318b['faceName']()&&ImageManager[_0x1f329c(0x127)](_0x1d318b[_0x1f329c(0x26a)]()),_0x1d318b['characterN'+_0x1f329c(0x194)]()&&ImageManager['loadCharac'+_0x1f329c(0x2d4)](_0x1d318b[_0x1f329c(0x247)+_0x1f329c(0x194)]()),_0x1d318b[_0x1f329c(0x1d5)+'e']()&&ImageManager[_0x1f329c(0x292)+'r'](_0x1d318b['battlerNam'+'e']());}},Game_Temp['prototype']['isMessageA'+_0x1b01ff(0x340)+'Mode']=function(){const _0x322e45=_0x1b01ff;return this['_messageAu'+_0x322e45(0x366)+_0x322e45(0x1da)];},Game_Temp['prototype']['setMessage'+'AutoForwar'+_0x1b01ff(0x215)]=function(_0xfab813){const _0x59ba49=_0x1b01ff;this[_0x59ba49(0x334)+_0x59ba49(0x366)+_0x59ba49(0x1da)]=_0xfab813,$gameMessage[_0x59ba49(0x299)+_0x59ba49(0x36f)]();},Game_Temp[_0x1b01ff(0x1e1)][_0x1b01ff(0x38c)+_0x1b01ff(0x2a1)+_0x1b01ff(0x215)]=function(){const _0x172d84=_0x1b01ff;return this[_0x172d84(0x189)+'astForward'+_0x172d84(0x37f)];},Game_Temp[_0x1b01ff(0x1e1)][_0x1b01ff(0x2f9)+'dFastForwa'+_0x1b01ff(0x163)]=function(_0x1b0fcb){const _0x1a395b=_0x1b01ff;this[_0x1a395b(0x189)+_0x1a395b(0x294)+'Mode']=_0x1b0fcb,$gameMessage[_0x1a395b(0x299)+_0x1a395b(0x36f)]();},VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x1b5)+_0x1b01ff(0x144)+_0x1b01ff(0x250)]=Game_Temp[_0x1b01ff(0x1e1)]['requestAni'+'mation'],Game_Temp[_0x1b01ff(0x1e1)][_0x1b01ff(0x144)+_0x1b01ff(0x250)]=function(_0x4b6475,_0x5d7c02,_0x4093f6){const _0x3c6826=_0x1b01ff;if(this[_0x3c6826(0x1a9)+_0x3c6826(0x182)+'rward']())return;VisuMZ[_0x3c6826(0x214)+'Func'][_0x3c6826(0x1b5)+_0x3c6826(0x144)+_0x3c6826(0x250)][_0x3c6826(0x405)](this,_0x4b6475,_0x5d7c02,_0x4093f6);},Game_Temp[_0x1b01ff(0x1e1)]['isSceneUsi'+_0x1b01ff(0x182)+_0x1b01ff(0x380)]=function(){const _0x11239d=_0x1b01ff,_0x4d2d04=SceneManager['_scene'];return _0x4d2d04&&_0x4d2d04['isExtended'+_0x11239d(0x2a1)+_0x11239d(0x215)]&&_0x4d2d04[_0x11239d(0x38c)+_0x11239d(0x2a1)+_0x11239d(0x215)]();},VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)]['Game_Syste'+_0x1b01ff(0x308)+'ze']=Game_System[_0x1b01ff(0x1e1)]['initialize'],Game_System[_0x1b01ff(0x1e1)][_0x1b01ff(0x1e7)]=function(){const _0x418f21=_0x1b01ff;VisuMZ['ExtMessage'+_0x418f21(0x3ef)][_0x418f21(0x1cc)+'m_initiali'+'ze'][_0x418f21(0x405)](this),this[_0x418f21(0x2d6)+_0x418f21(0x24d)+_0x418f21(0x37d)](),this[_0x418f21(0x14b)+_0x418f21(0x3e1)+_0x418f21(0x38d)](),this[_0x418f21(0x2d6)+'eCursorSet'+'tings']();},Game_System['prototype'][_0x1b01ff(0x2d6)+'eButtonCon'+_0x1b01ff(0x37d)]=function(){const _0x5e629d=_0x1b01ff;this[_0x5e629d(0x168)+_0x5e629d(0x2bd)+_0x5e629d(0x3da)]=Window_ButtonConsole['DEFAULT_SH'+'OW'];},Game_System[_0x1b01ff(0x1e1)][_0x1b01ff(0x3ca)+_0x1b01ff(0x1fd)+_0x1b01ff(0x404)]=function(){const _0x3e0bdb=_0x1b01ff,_0x2b003c={'UYoHp':function(_0x4609ff,_0x374971){return _0x4609ff===_0x374971;}};return _0x2b003c[_0x3e0bdb(0x3e9)](this['_messageBu'+_0x3e0bdb(0x2bd)+_0x3e0bdb(0x3da)],undefined)&&this[_0x3e0bdb(0x2d6)+_0x3e0bdb(0x24d)+_0x3e0bdb(0x37d)](),this[_0x3e0bdb(0x168)+'ttonConsol'+_0x3e0bdb(0x3da)];},Game_System[_0x1b01ff(0x1e1)][_0x1b01ff(0x3f3)+'ButtonCons'+_0x1b01ff(0x3b5)]=function(_0x454935){const _0x425acb=_0x1b01ff,_0x268cde={'GKmAi':function(_0x2ebe76,_0x8ad9c){return _0x2ebe76===_0x8ad9c;}};_0x268cde[_0x425acb(0x402)](this['_messageBu'+'ttonConsol'+_0x425acb(0x3da)],undefined)&&this[_0x425acb(0x2d6)+_0x425acb(0x24d)+_0x425acb(0x37d)](),this[_0x425acb(0x168)+_0x425acb(0x2bd)+_0x425acb(0x3da)]=_0x454935;},Game_System[_0x1b01ff(0x1e1)]['initExtend'+'edFastForw'+'ard']=function(){const _0x4d6091=_0x1b01ff;this[_0x4d6091(0x23a)+_0x4d6091(0x294)]=![];},Game_System[_0x1b01ff(0x1e1)]['isExtended'+_0x1b01ff(0x2a1)+'dDisallowe'+'d']=function(){const _0x4e0ecc=_0x1b01ff,_0x48fe67={'Qzxfv':function(_0x3fd7ab,_0x4992ad){return _0x3fd7ab===_0x4992ad;}};return _0x48fe67[_0x4e0ecc(0x1f6)](this[_0x4e0ecc(0x23a)+_0x4e0ecc(0x294)],undefined)&&this[_0x4e0ecc(0x14b)+'edFastForw'+_0x4e0ecc(0x38d)](),this['_disallowF'+_0x4e0ecc(0x294)];},Game_System[_0x1b01ff(0x1e1)][_0x1b01ff(0x2f9)+'dFastForwa'+_0x1b01ff(0x348)+'ed']=function(_0x493a50){const _0x1cd10a=_0x1b01ff,_0x3072ad={'kLLoZ':function(_0x3535c0,_0xa4b485){return _0x3535c0===_0xa4b485;}};_0x3072ad['kLLoZ'](this[_0x1cd10a(0x23a)+_0x1cd10a(0x294)],undefined)&&this[_0x1cd10a(0x14b)+_0x1cd10a(0x3e1)+_0x1cd10a(0x38d)](),this['_disallowF'+_0x1cd10a(0x294)]=_0x493a50;},Game_System[_0x1b01ff(0x1e1)][_0x1b01ff(0x2d6)+_0x1b01ff(0x31f)+_0x1b01ff(0x3b0)]=function(){const _0x2d29f6=_0x1b01ff;this['_msgCursor'+_0x2d29f6(0x379)]=JsonEx[_0x2d29f6(0x27e)+'py'](VisuMZ[_0x2d29f6(0x214)+_0x2d29f6(0x3ef)]['Settings'][_0x2d29f6(0x187)]);},Game_System['prototype'][_0x1b01ff(0x339)+_0x1b01ff(0x291)+_0x1b01ff(0x2a7)]=function(){const _0x3b7a7c=_0x1b01ff,_0x546ccb={'RAjYq':function(_0x168d2e,_0x85f302){return _0x168d2e===_0x85f302;}};return _0x546ccb['RAjYq'](this[_0x3b7a7c(0x19c)+_0x3b7a7c(0x379)],undefined)&&this[_0x3b7a7c(0x2d6)+_0x3b7a7c(0x31f)+_0x3b7a7c(0x3b0)](),this[_0x3b7a7c(0x19c)+_0x3b7a7c(0x379)];},Game_System[_0x1b01ff(0x1e1)][_0x1b01ff(0x3f3)+'CursorSett'+_0x1b01ff(0x2a7)]=function(_0x43f397){const _0x4caf88=_0x1b01ff,_0x2e790f={'vJebT':function(_0x5bce08,_0x26ac66){return _0x5bce08===_0x26ac66;}};_0x2e790f[_0x4caf88(0x364)](this['_msgCursor'+_0x4caf88(0x379)],undefined)&&this['initMessag'+_0x4caf88(0x31f)+_0x4caf88(0x3b0)](),this[_0x4caf88(0x19c)+_0x4caf88(0x379)]=JsonEx['makeDeepCo'+'py'](_0x43f397);},Game_System[_0x1b01ff(0x1e1)]['getMessage'+_0x1b01ff(0x350)+'gs']=function(){const _0x4ae306=_0x1b01ff,_0x56055f={'yHyyn':function(_0x2f50ba,_0x3a083b){return _0x2f50ba===_0x3a083b;}};if(_0x56055f[_0x4ae306(0x221)](this[_0x4ae306(0x367)+_0x4ae306(0x170)],undefined)){const _0x4f82b7=VisuMZ['ExtMessage'+_0x4ae306(0x3ef)][_0x4ae306(0x379)][_0x4ae306(0x1d2)];this[_0x4ae306(0x367)+_0x4ae306(0x170)]=JsonEx['makeDeepCo'+'py'](_0x4f82b7);}return this[_0x4ae306(0x367)+'ilSettings'];},Game_System['prototype'][_0x1b01ff(0x3f3)+_0x1b01ff(0x350)+'gs']=function(_0x12bd34){const _0x28af0d=_0x1b01ff;this[_0x28af0d(0x367)+'ilSettings']=JsonEx[_0x28af0d(0x27e)+'py'](_0x12bd34);},Game_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x299)+'tonConsole']=function(){const _0x46d4ea=_0x1b01ff,_0x8a0418=SceneManager[_0x46d4ea(0x169)];if(!_0x8a0418)return;const _0x582e35=_0x8a0418[_0x46d4ea(0x216)+'ndow'];if(!_0x582e35)return;_0x582e35[_0x46d4ea(0x299)+_0x46d4ea(0x36f)]();},VisuMZ['ExtMessage'+'Func']['Scene_Boot'+_0x1b01ff(0x141)+_0x1b01ff(0x2a6)]=Scene_Boot[_0x1b01ff(0x1e1)][_0x1b01ff(0x22c)+_0x1b01ff(0x18f)],Scene_Boot[_0x1b01ff(0x1e1)][_0x1b01ff(0x22c)+_0x1b01ff(0x18f)]=function(){const _0xb8f6e8=_0x1b01ff;VisuMZ['ExtMessage'+_0xb8f6e8(0x3ef)][_0xb8f6e8(0x37c)+_0xb8f6e8(0x141)+_0xb8f6e8(0x2a6)][_0xb8f6e8(0x405)](this),this['loadSystem'+'ImagesForE'+_0xb8f6e8(0x394)+_0xb8f6e8(0x20d)]();},Scene_Boot[_0x1b01ff(0x1e1)]['loadSystem'+_0x1b01ff(0x186)+_0x1b01ff(0x394)+_0x1b01ff(0x20d)]=function(){const _0x44f359=_0x1b01ff,_0x23899d={'tLRjM':_0x44f359(0x17f)+'d','gLafw':_0x44f359(0x31b),'zmgAS':_0x44f359(0x33b),'sylJh':function(_0x289027,_0x14b675){return _0x289027!==_0x14b675;}},_0xdb0cc6=VisuMZ['ExtMessage'+'Func'][_0x44f359(0x379)][_0x44f359(0x307)+_0x44f359(0x1c6)],_0x32be09=[_0x23899d[_0x44f359(0x2be)],_0x23899d[_0x44f359(0x12b)],_0x23899d[_0x44f359(0x210)]];for(const _0x1fc30c of _0x32be09){_0xdb0cc6[_0x1fc30c]=_0xdb0cc6[_0x1fc30c]??'',_0x23899d[_0x44f359(0x395)](_0xdb0cc6[_0x1fc30c],'')&&ImageManager[_0x44f359(0x22c)](_0xdb0cc6[_0x1fc30c]);}},Scene_Message[_0x1b01ff(0x2ad)+_0x1b01ff(0x2b1)+_0x1b01ff(0x2c5)]=VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x379)][_0x1b01ff(0x1a4)]['Enable'],Scene_Message[_0x1b01ff(0x2ad)+_0x1b01ff(0x35c)+'PS']=VisuMZ['ExtMessage'+_0x1b01ff(0x3ef)][_0x1b01ff(0x379)][_0x1b01ff(0x1a4)]['Speed'],Scene_Message[_0x1b01ff(0x2ad)+'ORWARD_STO'+_0x1b01ff(0x326)+'_CHANGE']=VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x379)][_0x1b01ff(0x1a4)][_0x1b01ff(0x1ab)+_0x1b01ff(0x15a)]??!![],VisuMZ['ExtMessage'+_0x1b01ff(0x3ef)][_0x1b01ff(0x3b9)+'age_create'+'AllWindows']=Scene_Message[_0x1b01ff(0x1e1)]['createAllW'+'indows'],Scene_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x172)+_0x1b01ff(0x24a)]=function(){const _0x4f4876=_0x1b01ff;VisuMZ[_0x4f4876(0x214)+_0x4f4876(0x3ef)][_0x4f4876(0x3b9)+_0x4f4876(0x2d1)+_0x4f4876(0x1ef)][_0x4f4876(0x405)](this),Scene_Message[_0x4f4876(0x2ad)+_0x4f4876(0x23b)+_0x4f4876(0x326)+_0x4f4876(0x2dd)]&&$gameTemp[_0x4f4876(0x2f9)+'dFastForwa'+'rdMode'](![]);},Scene_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x38c)+_0x1b01ff(0x2a1)+'dMode']=function(){const _0x4c776f=_0x1b01ff;if(!Scene_Message[_0x4c776f(0x2ad)+_0x4c776f(0x2b1)+_0x4c776f(0x2c5)])return![];if($gameSystem[_0x4c776f(0x38c)+_0x4c776f(0x2a1)+_0x4c776f(0x2f6)+'d']())return![];if(this['anyActiveM'+_0x4c776f(0x3a1)+'tWindows']())return![];return this['isActivate'+'dExtendedF'+_0x4c776f(0x294)+'Mode']();},Scene_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x269)+_0x1b01ff(0x39a)+'astForward'+'Mode']=function(){const _0x45541e=_0x1b01ff;if(Imported[_0x45541e(0x3ce)+_0x45541e(0x25e)+_0x45541e(0x2ce)]&&$gameMap[_0x45541e(0x197)+'eSystemMod'+'e']())return![];if(Imported['VisuMZ_2_Q'+_0x45541e(0x27d)+_0x45541e(0x3d0)]){if(SceneManager[_0x45541e(0x39b)+'TE']())return![];if(SceneManager[_0x45541e(0x184)+_0x45541e(0x3a4)+'y'])return![];}if(!this[_0x45541e(0x2bf)+_0x45541e(0x3a1)+_0x45541e(0x356)]()){if(Input[_0x45541e(0x238)](VisuMZ[_0x45541e(0x18d)+'e'][_0x45541e(0x379)][_0x45541e(0x3f8)][_0x45541e(0x2a1)+_0x45541e(0x19e)]))return!![];}return $gameTemp[_0x45541e(0x38c)+_0x45541e(0x2a1)+_0x45541e(0x215)]();},Scene_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x2bf)+'essageInpu'+_0x1b01ff(0x356)]=function(){const _0x4db437=_0x1b01ff;if(this[_0x4db437(0x377)+'tWindow']&&this[_0x4db437(0x377)+_0x4db437(0x1b9)][_0x4db437(0x3f2)])return!![];if(this[_0x4db437(0x2f5)+'utWindow']&&this[_0x4db437(0x2f5)+_0x4db437(0x1fb)]['active'])return!![];if(this[_0x4db437(0x16d)+_0x4db437(0x3f5)]&&this[_0x4db437(0x16d)+'Window'][_0x4db437(0x3f2)])return!![];return![];},Scene_Message[_0x1b01ff(0x1e1)]['updateExte'+_0x1b01ff(0x319)+_0x1b01ff(0x314)+'l']=function(){const _0x8843b6=_0x1b01ff,_0x4df41e={'NmgFX':_0x8843b6(0x2ec)};return Input[_0x8843b6(0x13f)+'d'](_0x4df41e[_0x8843b6(0x2e8)])||TouchInput[_0x8843b6(0x3c1)+'d']()?($gameTemp[_0x8843b6(0x2f9)+'dFastForwa'+'rdMode'](![]),!![]):![];},VisuMZ[_0x1b01ff(0x214)+'Func'][_0x1b01ff(0x20b)+_0x1b01ff(0x1d4)+_0x1b01ff(0x263)]=Scene_Map['prototype'][_0x1b01ff(0x1d4)+_0x1b01ff(0x263)],Scene_Map[_0x1b01ff(0x1e1)][_0x1b01ff(0x1d4)+_0x1b01ff(0x263)]=function(){const _0x262892=_0x1b01ff;this[_0x262892(0x38c)+_0x262892(0x2a1)+'dMode']()?this['updateExte'+'ndedFastFo'+_0x262892(0x145)]():VisuMZ['ExtMessage'+_0x262892(0x3ef)][_0x262892(0x20b)+_0x262892(0x1d4)+'Multiply'][_0x262892(0x405)](this);},Scene_Map[_0x1b01ff(0x1e1)][_0x1b01ff(0x38c)+_0x1b01ff(0x2a1)+_0x1b01ff(0x215)]=function(){const _0x16e850=_0x1b01ff;return Scene_Message[_0x16e850(0x1e1)][_0x16e850(0x38c)+_0x16e850(0x2a1)+_0x16e850(0x215)][_0x16e850(0x405)](this)&&$gameMap[_0x16e850(0x14a)+_0x16e850(0x337)]();},Scene_Map['prototype']['updateExte'+'ndedFastFo'+_0x1b01ff(0x145)]=function(){const _0x2142da=_0x1b01ff;let _0x1f23c2=Scene_Message[_0x2142da(0x2ad)+_0x2142da(0x35c)+'PS'];while(_0x1f23c2--&&$gameMap[_0x2142da(0x14a)+_0x2142da(0x337)]()&&!this[_0x2142da(0x2bf)+_0x2142da(0x3a1)+'tWindows']()){this[_0x2142da(0x1f1)](),this['updateColo'+_0x2142da(0x360)](),this[_0x2142da(0x1d4)](),SceneManager[_0x2142da(0x17c)+_0x2142da(0x28a)]();if(this[_0x2142da(0x396)+_0x2142da(0x319)+_0x2142da(0x314)+'l']())break;}};function Scene_SaveButtonConsole(){this['initialize'](...arguments);}Scene_SaveButtonConsole['prototype']=Object[_0x1b01ff(0x253)](Scene_Save['prototype']),Scene_SaveButtonConsole[_0x1b01ff(0x1e1)][_0x1b01ff(0x25f)+'r']=Scene_SaveButtonConsole,Scene_SaveButtonConsole[_0x1b01ff(0x1e1)][_0x1b01ff(0x36b)+'Ok']=function(){const _0x19183f=_0x1b01ff;this[_0x19183f(0x1c9)+'ex']=0x46b*0x8+-0x4*0x716+-0x700;let _0xe1d003=$gameMap[_0x19183f(0x390)+'er'];for(;;){if(_0xe1d003[_0x19183f(0x373)+_0x19183f(0x218)])_0xe1d003=_0xe1d003[_0x19183f(0x373)+_0x19183f(0x218)];else{this[_0x19183f(0x1c9)+'ex']=_0xe1d003[_0x19183f(0x3f9)],_0xe1d003[_0x19183f(0x3f9)]=_0xe1d003[_0x19183f(0x3ba)+_0x19183f(0x14c)];break;}}Scene_Save[_0x19183f(0x1e1)][_0x19183f(0x36b)+'Ok']['call'](this),_0xe1d003[_0x19183f(0x3f9)]=this['_cachedInd'+'ex'];},Scene_SaveButtonConsole[_0x1b01ff(0x1e1)]['getCustomB'+_0x1b01ff(0x1dd)+'ettings']=function(_0x44dda3){const _0x5a95a7=_0x1b01ff,_0x53e689={'MLQFL':_0x5a95a7(0x381)};return Scene_Save['prototype'][_0x5a95a7(0x29d)+_0x5a95a7(0x1dd)+_0x5a95a7(0x2fa)]['call'](this,_0x53e689[_0x5a95a7(0x261)]);},VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x2b8)+_0x1b01ff(0x391)+_0x1b01ff(0x374)]=Game_Interpreter[_0x1b01ff(0x1e1)][_0x1b01ff(0x175)],Game_Interpreter[_0x1b01ff(0x1e1)]['command101']=function(_0x45be07){const _0x47c1c2=_0x1b01ff;return this[_0x47c1c2(0x3ba)+_0x47c1c2(0x14c)]=this[_0x47c1c2(0x3f9)],VisuMZ['ExtMessage'+_0x47c1c2(0x3ef)]['Game_Inter'+_0x47c1c2(0x391)+_0x47c1c2(0x374)][_0x47c1c2(0x405)](this,_0x45be07);},VisuMZ[_0x1b01ff(0x214)+'Func']['Scene_Batt'+'le_update']=Scene_Battle[_0x1b01ff(0x1e1)]['update'],Scene_Battle[_0x1b01ff(0x1e1)][_0x1b01ff(0x311)]=function(){const _0x544aef=_0x1b01ff;VisuMZ[_0x544aef(0x214)+_0x544aef(0x3ef)][_0x544aef(0x259)+_0x544aef(0x1b1)]['call'](this);if(this[_0x544aef(0x38c)+_0x544aef(0x2a1)+'dMode']())this[_0x544aef(0x396)+_0x544aef(0x319)+_0x544aef(0x145)]();},Scene_Battle['prototype'][_0x1b01ff(0x38c)+_0x1b01ff(0x2a1)+_0x1b01ff(0x215)]=function(){const _0x38f9de=_0x1b01ff;return![];return Scene_Message['prototype'][_0x38f9de(0x38c)+_0x38f9de(0x2a1)+'dMode'][_0x38f9de(0x405)](this)&&$gameTroop[_0x38f9de(0x14a)+'ning']()&&!this['_extFastFo'+_0x38f9de(0x32e)+'ng'];},Scene_Battle['prototype'][_0x1b01ff(0x396)+_0x1b01ff(0x319)+'rwardMode']=function(){const _0x359fed=_0x1b01ff;this['_extFastFo'+_0x359fed(0x32e)+'ng']=!![];let _0x33450f=Scene_Message[_0x359fed(0x2ad)+_0x359fed(0x35c)+'PS'];while(_0x33450f--&&$gameTroop[_0x359fed(0x14a)+_0x359fed(0x337)]()&&!this['anyActiveM'+_0x359fed(0x3a1)+_0x359fed(0x356)]()){this[_0x359fed(0x311)](),SceneManager[_0x359fed(0x17c)+_0x359fed(0x28a)]();if(this[_0x359fed(0x396)+_0x359fed(0x319)+_0x359fed(0x314)+'l']())break;}this[_0x359fed(0x382)+_0x359fed(0x32e)+'ng']=![];},VisuMZ['ExtMessage'+'Func'][_0x1b01ff(0x332)+'r_update']=WindowLayer['prototype'][_0x1b01ff(0x311)],WindowLayer['prototype'][_0x1b01ff(0x311)]=function(){const _0x44b95c=_0x1b01ff;if(SceneManager[_0x44b95c(0x169)][_0x44b95c(0x382)+'rwardLoopi'+'ng'])return;VisuMZ['ExtMessage'+_0x44b95c(0x3ef)][_0x44b95c(0x332)+'r_update'][_0x44b95c(0x405)](this);},VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)]['Window_Bas'+_0x1b01ff(0x397)+_0x1b01ff(0x12d)]=Window_Base[_0x1b01ff(0x1e1)]['flushTextS'+_0x1b01ff(0x24f)],Window_Base[_0x1b01ff(0x1e1)][_0x1b01ff(0x3cb)+_0x1b01ff(0x24f)]=function(_0x1c85e4){const _0x499ec8=_0x1b01ff,_0x508944={'isKKe':function(_0x3a0eef,_0x3b0241){return _0x3a0eef===_0x3b0241;},'mViFZ':_0x499ec8(0x3cf)+'sage','LWETS':function(_0x424f61,_0x3036c0){return _0x424f61===_0x3036c0;}};_0x508944['isKKe'](this['constructo'+'r'][_0x499ec8(0x278)],_0x508944[_0x499ec8(0x1ba)])&&this[_0x499ec8(0x3eb)+_0x499ec8(0x3f1)](_0x1c85e4),VisuMZ['ExtMessage'+_0x499ec8(0x3ef)][_0x499ec8(0x355)+_0x499ec8(0x397)+_0x499ec8(0x12d)][_0x499ec8(0x405)](this,_0x1c85e4),_0x508944[_0x499ec8(0x27a)](this[_0x499ec8(0x25f)+'r'][_0x499ec8(0x278)],_0x508944[_0x499ec8(0x1ba)])&&this[_0x499ec8(0x3d8)+'MessageCur'+'sorPauseSi'+'gn'](_0x1c85e4);},VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x3cf)+_0x1b01ff(0x193)+'alize']=Window_Message[_0x1b01ff(0x1e1)]['initialize'],Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x1e7)]=function(_0x2ab73f){const _0x1bebee=_0x1b01ff;VisuMZ[_0x1bebee(0x214)+_0x1bebee(0x3ef)]['Window_Mes'+_0x1bebee(0x193)+'alize'][_0x1bebee(0x405)](this,_0x2ab73f),this[_0x1bebee(0x32a)+_0x1bebee(0x1e5)+_0x1bebee(0x1a6)]();},VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x3cf)+'sage_updat'+'e']=Window_Message['prototype']['update'],Window_Message[_0x1b01ff(0x1e1)]['update']=function(){const _0x1288c2=_0x1b01ff;VisuMZ['ExtMessage'+_0x1288c2(0x3ef)][_0x1288c2(0x3cf)+_0x1288c2(0x36e)+'e'][_0x1288c2(0x405)](this),this[_0x1288c2(0x1bc)+_0x1288c2(0x236)+'tTimers'](),this[_0x1288c2(0x1f2)+'ageTailSpr'+_0x1288c2(0x1a6)]();},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x1bc)+_0x1b01ff(0x236)+'tTimers']=function(){const _0x1a33a9=_0x1b01ff;if(!this[_0x1a33a9(0x1df)+_0x1a33a9(0x3c6)+_0x1a33a9(0x2b4)+'s']())return;$gameTemp[_0x1a33a9(0x151)+_0x1a33a9(0x340)+_0x1a33a9(0x37f)]()&&$gameTemp[_0x1a33a9(0x3f3)+_0x1a33a9(0x229)+_0x1a33a9(0x215)](![]),$gameTemp[_0x1a33a9(0x38c)+_0x1a33a9(0x2a1)+_0x1a33a9(0x215)]()&&$gameTemp[_0x1a33a9(0x2f9)+_0x1a33a9(0x370)+_0x1a33a9(0x163)](![]);},Window_Message[_0x1b01ff(0x1e1)]['meetExtMsg'+_0x1b01ff(0x3c6)+_0x1b01ff(0x2b4)+'s']=function(){const _0x2a1f0a=_0x1b01ff;if(SceneManager[_0x2a1f0a(0x1ac)]()&&$gameMap&&!$gameMap['isEventRun'+_0x2a1f0a(0x337)]())return!![];else{if(SceneManager['isSceneBat'+_0x2a1f0a(0x136)]()&&!$gameMap['isEventRun'+'ning']())return!![];}return![];},VisuMZ['ExtMessage'+_0x1b01ff(0x3ef)][_0x1b01ff(0x3cf)+_0x1b01ff(0x138)+_0x1b01ff(0x2eb)]=Window_Message['prototype'][_0x1b01ff(0x13f)+'d'],Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x13f)+'d']=function(){const _0x5976e1=_0x1b01ff,_0x58064e={'POnSZ':_0x5976e1(0x137),'bexZG':'load','bMPjL':_0x5976e1(0x242),'uYNJh':_0x5976e1(0x2df)};if(SceneManager[_0x5976e1(0x169)][_0x5976e1(0x38c)+'FastForwar'+'dMode']())return!![];else{if(Input[_0x5976e1(0x13f)+'d'](Window_ButtonConsole['SHORTCUT_K'+'EY'][_0x5976e1(0x372)]))return this['toggleAuto'+'Forward'](),![];else{if(Input[_0x5976e1(0x13f)+'d'](Window_ButtonConsole[_0x5976e1(0x13d)+'EY'][_0x5976e1(0x137)]))return this[_0x5976e1(0x12e)+_0x5976e1(0x2a2)+'t'](_0x58064e[_0x5976e1(0x378)]),![];else{if(Input[_0x5976e1(0x13f)+'d'](Window_ButtonConsole[_0x5976e1(0x13d)+'EY'][_0x5976e1(0x132)]))return this[_0x5976e1(0x12e)+_0x5976e1(0x2a2)+'t'](_0x58064e[_0x5976e1(0x362)]),![];else{if(Input['isTriggere'+'d'](Window_ButtonConsole['SHORTCUT_K'+'EY'][_0x5976e1(0x242)]))return this[_0x5976e1(0x12e)+_0x5976e1(0x2a2)+'t'](_0x58064e['bMPjL']),![];else{if(Input[_0x5976e1(0x13f)+'d'](Window_ButtonConsole[_0x5976e1(0x13d)+'EY'][_0x5976e1(0x2df)]))return this['processBut'+_0x5976e1(0x2a2)+'t'](_0x58064e[_0x5976e1(0x3f6)]),![];else return this[_0x5976e1(0x2f4)]&&$gameTemp['isMessageA'+_0x5976e1(0x340)+_0x5976e1(0x37f)]()?this[_0x5976e1(0x3a2)+'dTriggered']():VisuMZ[_0x5976e1(0x214)+_0x5976e1(0x3ef)][_0x5976e1(0x3cf)+_0x5976e1(0x138)+_0x5976e1(0x2eb)][_0x5976e1(0x405)](this);}}}}}},VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)]['Window_Mes'+_0x1b01ff(0x160)+'ge']=Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x12f)],Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x12f)]=function(_0x4e967e){const _0x4e5c1f=_0x1b01ff,_0x3b7e19={'hqTXl':_0x4e5c1f(0x33c)},_0x1beb78=_0x3b7e19[_0x4e5c1f(0x2ba)][_0x4e5c1f(0x2f1)]('|');let _0x20d792=-0x85*-0x7+0x1aab+0x6*-0x50d;while(!![]){switch(_0x1beb78[_0x20d792++]){case'0':this[_0x4e5c1f(0x344)+_0x4e5c1f(0x1b8)+_0x4e5c1f(0x2a7)]();continue;case'1':this[_0x4e5c1f(0x22a)+_0x4e5c1f(0x24d)+'soleTextCo'+'de'](_0x4e967e);continue;case'2':VisuMZ[_0x4e5c1f(0x214)+_0x4e5c1f(0x3ef)]['Window_Mes'+_0x4e5c1f(0x160)+'ge']['call'](this,_0x4e967e);continue;case'3':this[_0x4e5c1f(0x385)+'rdCount']=-0x1ce7+-0x7fc+0x24e3;continue;case'4':this['parseMessa'+_0x4e5c1f(0x30f)+_0x4e5c1f(0x321)](_0x4e967e);continue;}break;}},Window_Message[_0x1b01ff(0x1e1)]['drawMessag'+_0x1b01ff(0x1b7)]=function(){const _0x197e44=_0x1b01ff,_0x186374={'UjcKU':function(_0x7e01ae,_0x1c6469){return _0x7e01ae-_0x1c6469;},'mGHdq':function(_0x39243d,_0x45c222){return _0x39243d-_0x45c222;}},_0x407021=$gameMessage[_0x197e44(0x26a)](),_0x4830c6=$gameMessage[_0x197e44(0x1b6)](),_0x59533d=$gameMessage[_0x197e44(0x133)]();let _0x2f4d82=ImageManager[_0x197e44(0x3e0)],_0x11018d=this['innerHeigh'+'t'],_0x278c00=_0x59533d?_0x186374[_0x197e44(0x3d9)](_0x186374[_0x197e44(0x31e)](this[_0x197e44(0x29e)],_0x2f4d82),0x1d00+-0x2092+-0x22*-0x1b):-0x2595+-0xe*0x27c+0x4861,_0x22d039=0x1*-0xeb7+-0x1d*-0x11+0xcca;_0x11018d-=this['addedHeigh'+'t'](),this['drawFace'](_0x407021,_0x4830c6,_0x278c00,_0x22d039,_0x2f4d82,_0x11018d);},Window_Message[_0x1b01ff(0x3c5)+_0x1b01ff(0x3a7)+_0x1b01ff(0x1c4)]=VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x379)][_0x1b01ff(0x19b)]['WaitPerCha'+'r'],Window_Message[_0x1b01ff(0x3c5)+_0x1b01ff(0x300)+'AY']=VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x379)][_0x1b01ff(0x19b)]['MinimumWai'+'t'],Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x3eb)+_0x1b01ff(0x3f1)]=function(_0x5f0ccc){const _0x513f4d=_0x1b01ff,_0x1d3bf3={'YWApi':function(_0x15a24e,_0x10c06a){return _0x15a24e*_0x10c06a;}};this[_0x513f4d(0x385)+_0x513f4d(0x18b)]=this['_autoForwa'+_0x513f4d(0x18b)]||-0x3d*-0x4+-0x2704+0xae*0x38,this[_0x513f4d(0x385)+'rdCount']=Math[_0x513f4d(0x256)](this[_0x513f4d(0x385)+'rdCount'],0x125*0x1d+0xf53+-0x3084);const _0x89f6e1=(_0x5f0ccc[_0x513f4d(0x249)]||'')['length'];this[_0x513f4d(0x385)+_0x513f4d(0x18b)]+=_0x1d3bf3[_0x513f4d(0x15d)](_0x89f6e1,Window_Message[_0x513f4d(0x3c5)+'RD_DELAY_P'+_0x513f4d(0x1c4)]);},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x1c3)+_0x1b01ff(0x1a8)]=function(){const _0x1ed321=_0x1b01ff;if(this[_0x1ed321(0x13e)+_0x1ed321(0x2a9)])return;if(!$gameSystem[_0x1ed321(0x3ca)+_0x1ed321(0x1fd)+'leVisible']())return;let _0x28bf71=!$gameTemp[_0x1ed321(0x151)+'utoForward'+_0x1ed321(0x37f)]();$gameTemp['setMessage'+_0x1ed321(0x229)+'dMode'](_0x28bf71),_0x28bf71?this[_0x1ed321(0x3e5)+'d']():SoundManager[_0x1ed321(0x232)]();},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x3a2)+_0x1b01ff(0x346)]=function(){const _0x366d8f=_0x1b01ff,_0x446833={'sAzPf':function(_0x45ba34,_0x3577ee){return _0x45ba34<=_0x3577ee;}};return this[_0x366d8f(0x385)+'rdCount']=this[_0x366d8f(0x385)+_0x366d8f(0x18b)]||0xf17+0x3b2+0x12c9*-0x1,VisuMZ['ExtMessage'+_0x366d8f(0x3ef)][_0x366d8f(0x3cf)+_0x366d8f(0x138)+_0x366d8f(0x2eb)]['call'](this)?(SoundManager[_0x366d8f(0x232)](),$gameTemp[_0x366d8f(0x3f3)+_0x366d8f(0x229)+_0x366d8f(0x215)](![]),!![]):_0x446833[_0x366d8f(0x35e)](this[_0x366d8f(0x385)+_0x366d8f(0x18b)]--,-0x72*-0x3d+-0x1c1d+0xf3);},VisuMZ['ExtMessage'+_0x1b01ff(0x3ef)][_0x1b01ff(0x3cf)+_0x1b01ff(0x2e7)+_0x1b01ff(0x329)]=Window_Message['prototype'][_0x1b01ff(0x131)],Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x131)]=function(){const _0x18d44a=_0x1b01ff;VisuMZ['ExtMessage'+_0x18d44a(0x3ef)]['Window_Mes'+_0x18d44a(0x2e7)+_0x18d44a(0x329)][_0x18d44a(0x405)](this),this['_autoForwa'+_0x18d44a(0x18b)]=this[_0x18d44a(0x385)+_0x18d44a(0x18b)]||-0x1*-0x246e+0x1272+0x36e*-0x10,this[_0x18d44a(0x385)+'rdCount']=Math[_0x18d44a(0x256)](this[_0x18d44a(0x385)+'rdCount'],Window_Message['AUTO_FORWA'+_0x18d44a(0x300)+'AY']);},VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x3cf)+_0x1b01ff(0x288)+_0x1b01ff(0x3ae)]=Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x16a)+'s'],Window_Message['prototype'][_0x1b01ff(0x16a)+'s']=function(){const _0xe196d6=_0x1b01ff;VisuMZ[_0xe196d6(0x214)+_0xe196d6(0x3ef)][_0xe196d6(0x3cf)+_0xe196d6(0x288)+'embers'][_0xe196d6(0x405)](this),this[_0xe196d6(0x368)+'onConsole']();},VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x355)+_0x1b01ff(0x3f7)+'rtEscapeCh'+'aracters']=Window_Base['prototype'][_0x1b01ff(0x27f)+_0x1b01ff(0x265)+_0x1b01ff(0x32b)],Window_Base[_0x1b01ff(0x1e1)][_0x1b01ff(0x27f)+_0x1b01ff(0x265)+_0x1b01ff(0x32b)]=function(_0x7dcca9){const _0x5972ad=_0x1b01ff,_0xe9c60a={'gEJlp':_0x5972ad(0x3c8)+_0x5972ad(0x30d)};return _0x7dcca9=_0x7dcca9[_0x5972ad(0x2d2)](/<HIDE (?:BUTTON CONSOLE|CONSOLE|BUTTONS)>/gi,_0xe9c60a['gEJlp']),_0x7dcca9=VisuMZ[_0x5972ad(0x214)+'Func'][_0x5972ad(0x355)+'e_preConve'+'rtEscapeCh'+_0x5972ad(0x409)][_0x5972ad(0x405)](this,_0x7dcca9),_0x7dcca9;},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x22a)+_0x1b01ff(0x24d)+_0x1b01ff(0x130)+'de']=function(_0x1545a6){const _0x280d74=_0x1b01ff,_0x40cbbf={'GIzvD':_0x280d74(0x3c8)+_0x280d74(0x30d)};let _0x2e114b=_0x1545a6[_0x280d74(0x1c5)];this[_0x280d74(0x13e)+_0x280d74(0x2a9)]=![],_0x2e114b=_0x2e114b[_0x280d74(0x2d2)](_0x40cbbf[_0x280d74(0x282)],()=>{return this['_hideButto'+'nConsole']=!![],'';}),this[_0x280d74(0x2e0)+'ConsoleAut'+_0x280d74(0x37b)](_0x2e114b)&&(this[_0x280d74(0x13e)+_0x280d74(0x2a9)]=!![]),_0x1545a6[_0x280d74(0x1c5)]=_0x2e114b;};if(!Window_Message[_0x1b01ff(0x1e1)]['addedHeigh'+'t']){let text='';text+=_0x1b01ff(0x33d)+_0x1b01ff(0x157)+_0x1b01ff(0x363)+_0x1b01ff(0x22d),text+=_0x1b01ff(0x1e0)+_0x1b01ff(0x341)+_0x1b01ff(0x359)+_0x1b01ff(0x24c),text+=_0x1b01ff(0x166)+_0x1b01ff(0x246)+_0x1b01ff(0x1d6)+_0x1b01ff(0x1a0),alert(text),SceneManager[_0x1b01ff(0x25a)]();}Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x2e0)+_0x1b01ff(0x1db)+_0x1b01ff(0x37b)]=function(_0x198061){const _0x315984=_0x1b01ff;if(!VisuMZ[_0x315984(0x214)+'Func']['Settings'][_0x315984(0x307)+'onsole']['AutoSizeHi'+'de'])return![];if(_0x198061[_0x315984(0x3c2)](Window_Message[_0x315984(0x3cc)+_0x315984(0x3ac)]))return!![];if(_0x198061['match'](Window_Message['_autoPosRe'+'gExp']))return!![];return![];},VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x3cf)+_0x1b01ff(0x29c)+'Height']=Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x2fd)+'t'],Window_Message[_0x1b01ff(0x1e1)]['addedHeigh'+'t']=function(){const _0x244052=_0x1b01ff,_0x12e0ac={'iPbPj':_0x244052(0x297),'ATlkp':_0x244052(0x3db)};let _0x741f13=VisuMZ[_0x244052(0x214)+_0x244052(0x3ef)]['Window_Mes'+_0x244052(0x29c)+_0x244052(0x2fb)][_0x244052(0x405)](this);if(this[_0x244052(0x13e)+_0x244052(0x2a9)])return _0x741f13;return SceneManager[_0x244052(0x1ac)]()&&$gameSystem['isMessageB'+'uttonConso'+_0x244052(0x404)]()&&([_0x12e0ac[_0x244052(0x32f)],_0x12e0ac[_0x244052(0x302)]][_0x244052(0x3a6)](Window_ButtonConsole[_0x244052(0x1eb)][_0x244052(0x1d0)+'e']()[_0x244052(0x1ea)]())&&(_0x741f13+=Window_ButtonConsole[_0x244052(0x34b)+'GHT'])),_0x741f13;},VisuMZ[_0x1b01ff(0x214)+'Func'][_0x1b01ff(0x3cf)+_0x1b01ff(0x36e)+'eDimension'+'s']=Window_Message['prototype'][_0x1b01ff(0x1e9)+'nsions'],Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x1e9)+_0x1b01ff(0x23c)]=function(){const _0x13a3c3=_0x1b01ff;VisuMZ[_0x13a3c3(0x214)+_0x13a3c3(0x3ef)][_0x13a3c3(0x3cf)+_0x13a3c3(0x36e)+'eDimension'+'s'][_0x13a3c3(0x405)](this),this[_0x13a3c3(0x30c)+_0x13a3c3(0x2b3)](),this[_0x13a3c3(0x299)+_0x13a3c3(0x36f)]();},Window_Message['prototype'][_0x1b01ff(0x30c)+_0x1b01ff(0x2b3)]=function(){const _0x2e281d=_0x1b01ff;if(!SceneManager['isSceneMap']())return;for(const _0x15ac7b of this['_buttonCon'+_0x2e281d(0x183)+'s']){!this[_0x2e281d(0x13e)+_0x2e281d(0x2a9)]&&$gameSystem[_0x2e281d(0x3ca)+_0x2e281d(0x1fd)+_0x2e281d(0x404)]()?_0x15ac7b['show']():_0x15ac7b[_0x2e281d(0x32d)]();}this[_0x2e281d(0x2b7)+'nConsoleBu'+'ttons']();},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x299)+_0x1b01ff(0x36f)]=function(){const _0x4b200d=_0x1b01ff;for(const _0x10e1b3 of this[_0x4b200d(0x1b4)+_0x4b200d(0x183)+'s']){_0x10e1b3[_0x4b200d(0x1d8)]();}},Window_Message[_0x1b01ff(0x1e1)]['createButt'+'onConsole']=function(){const _0x482b79=_0x1b01ff;this[_0x482b79(0x1b4)+_0x482b79(0x183)+'s']=[];for(const _0xce8907 of Window_ButtonConsole[_0x482b79(0x2d3)+'ER']){this['addButtonC'+_0x482b79(0x1f3)+'ct'](_0xce8907);}this[_0x482b79(0x2b7)+_0x482b79(0x223)+_0x482b79(0x3ee)]();},Window_Message['prototype']['addButtonC'+_0x1b01ff(0x1f3)+'ct']=function(_0xe696b7){const _0x8a11d1=_0x1b01ff,_0x4e1539={'mfWkd':_0x8a11d1(0x1d9),'ISnWu':_0x8a11d1(0x242),'JqGqp':_0x8a11d1(0x137),'vYRpp':'load','qOjgY':_0x8a11d1(0x32d),'kBHIj':_0x8a11d1(0x330),'fQIiE':_0x8a11d1(0x3e6)};_0xe696b7=_0xe696b7['toLowerCas'+'e']()['trim']();switch(_0xe696b7){case _0x4e1539[_0x8a11d1(0x305)]:if(!Scene_Message[_0x8a11d1(0x2ad)+_0x8a11d1(0x2b1)+_0x8a11d1(0x2c5)])return;break;case _0x4e1539[_0x8a11d1(0x1b0)]:if(!Imported[_0x8a11d1(0x36c)+_0x8a11d1(0x1f7)])return;break;case _0x4e1539[_0x8a11d1(0x285)]:case _0x4e1539[_0x8a11d1(0x40a)]:if(!Imported[_0x8a11d1(0x3aa)+_0x8a11d1(0x313)])return;break;case _0x4e1539['qOjgY']:if(!Imported[_0x8a11d1(0x1f0)+'essageVisi'+_0x8a11d1(0x217)])return;break;case _0x4e1539[_0x8a11d1(0x243)]:case _0x4e1539['fQIiE']:if(!Imported['VisuMZ_3_M'+_0x8a11d1(0x26c)])return;break;}const _0xd0d911=new Window_ButtonConsole(_0xe696b7,this);this[_0x8a11d1(0x1b4)+_0x8a11d1(0x183)+'s'][_0x8a11d1(0x167)](_0xd0d911),this[_0x8a11d1(0x317)](_0xd0d911);},Window_Message[_0x1b01ff(0x1e1)]['alignButto'+_0x1b01ff(0x223)+_0x1b01ff(0x3ee)]=function(){const _0x288c2b=_0x1b01ff,_0x354c1b={'dnWEz':'top','fKHIg':_0x288c2b(0x3db),'LWzpT':function(_0x5db8b3,_0x4f9c8c){return _0x5db8b3*_0x4f9c8c;},'OGLWD':function(_0xd0d9d6,_0x2ba12c){return _0xd0d9d6-_0x2ba12c;},'EpjoW':function(_0x391578,_0x46bc77){return _0x391578/_0x46bc77;},'rOcBT':function(_0x49b411,_0x1637ff){return _0x49b411+_0x1637ff;},'fKaow':function(_0x9ae32c,_0xbc1a94){return _0x9ae32c===_0xbc1a94;},'uwUQb':function(_0x272667,_0x2e6219){return _0x272667===_0x2e6219;}};if(!SceneManager[_0x288c2b(0x1ac)]())return;if(!$gameSystem['isMessageB'+_0x288c2b(0x1fd)+_0x288c2b(0x404)]())return;const _0x4872e1=Window_ButtonConsole[_0x288c2b(0x1eb)][_0x288c2b(0x1d0)+'e']()[_0x288c2b(0x1ea)](),_0x3931e6=this['_buttonCon'+_0x288c2b(0x183)+'s'];this['_contentsS'+_0x288c2b(0x21f)]['x']=this[_0x288c2b(0x2e2)+_0x288c2b(0x21f)]['y']=-0x7*0x2f9+0x20ce+-0xbff*0x1;if([_0x354c1b[_0x288c2b(0x3bb)],_0x354c1b[_0x288c2b(0x2d0)]]['includes'](_0x4872e1)){let _0x11b6d4=_0x354c1b['LWzpT'](_0x3931e6['length'],Window_ButtonConsole[_0x288c2b(0x2e1)+'TH']);_0x11b6d4+=_0x354c1b['LWzpT'](_0x354c1b[_0x288c2b(0x1aa)](_0x3931e6[_0x288c2b(0x135)],0x1*-0x1d0f+0x11b6+0xb5a*0x1),Window_ButtonConsole[_0x288c2b(0x1a1)+_0x288c2b(0x15b)]);let _0x3d475f=Math[_0x288c2b(0x23e)](_0x354c1b[_0x288c2b(0x375)](_0x354c1b['OGLWD'](this['width'],_0x11b6d4),-0xa83+0xf59+0x4*-0x135)),_0x3973b2=_0x3d475f;_0x3973b2+=Window_ButtonConsole[_0x288c2b(0x225)+_0x288c2b(0x3c0)];for(const _0x1453da of _0x3931e6){_0x1453da['x']=_0x3973b2,_0x3973b2+=_0x354c1b[_0x288c2b(0x3a3)](Window_ButtonConsole[_0x288c2b(0x2e1)+'TH'],Window_ButtonConsole[_0x288c2b(0x1a1)+_0x288c2b(0x15b)]);}}if(_0x354c1b[_0x288c2b(0x142)](_0x4872e1,_0x354c1b[_0x288c2b(0x3bb)])){let _0x3d0f63=Window_ButtonConsole['BUTTON_BUF'+_0x288c2b(0x15b)];for(const _0x2a14e5 of _0x3931e6){_0x2a14e5['y']=_0x3d0f63;}_0x3d0f63=Window_ButtonConsole['BUTTON_HEI'+_0x288c2b(0x231)],_0x3d0f63+=Window_ButtonConsole[_0x288c2b(0x225)+_0x288c2b(0x2fc)],this[_0x288c2b(0x2e2)+_0x288c2b(0x21f)]['y']=_0x3d0f63;};if(_0x354c1b[_0x288c2b(0x36d)](_0x4872e1,_0x354c1b[_0x288c2b(0x2d0)])){let _0x259d60=_0x354c1b[_0x288c2b(0x1aa)](this['height'],Window_ButtonConsole[_0x288c2b(0x34b)+_0x288c2b(0x231)]);_0x259d60-=Window_ButtonConsole[_0x288c2b(0x1a1)+_0x288c2b(0x15b)],_0x259d60+=Window_ButtonConsole[_0x288c2b(0x225)+_0x288c2b(0x2fc)];for(const _0x413bee of _0x3931e6){_0x413bee['y']=_0x259d60;}}},Window_Message[_0x1b01ff(0x1e1)]['processBut'+_0x1b01ff(0x2a2)+'t']=function(_0x3b9b3a){const _0xeffd0e=_0x1b01ff,_0x5d2862={'EuYRP':_0xeffd0e(0x137),'gvMpT':_0xeffd0e(0x132),'izexM':_0xeffd0e(0x242),'CJSbQ':_0xeffd0e(0x2df)};if(this[_0xeffd0e(0x13e)+'nConsole'])return;if(!$gameSystem[_0xeffd0e(0x3ca)+_0xeffd0e(0x1fd)+_0xeffd0e(0x404)]())return;_0x3b9b3a=_0x3b9b3a[_0xeffd0e(0x1d0)+'e']()[_0xeffd0e(0x1ea)]();switch(_0x3b9b3a){case _0x5d2862[_0xeffd0e(0x35b)]:$gameSystem[_0xeffd0e(0x3df)+_0xeffd0e(0x2cf)]()&&SceneManager['isSceneMap']()?(this[_0xeffd0e(0x3e5)+'d'](),SceneManager[_0xeffd0e(0x167)](Scene_SaveButtonConsole)):this[_0xeffd0e(0x309)+_0xeffd0e(0x401)]();break;case _0x5d2862['gvMpT']:DataManager['isAnySavef'+_0xeffd0e(0x1a5)]()&&SceneManager[_0xeffd0e(0x1ac)]()?(this[_0xeffd0e(0x3e5)+'d'](),SceneManager[_0xeffd0e(0x167)](Scene_Load)):this['playBuzzer'+'Sound']();break;case _0x5d2862['izexM']:SceneManager[_0xeffd0e(0x1ac)]()?(this[_0xeffd0e(0x3e5)+'d'](),SceneManager[_0xeffd0e(0x167)](Scene_Options)):this[_0xeffd0e(0x309)+_0xeffd0e(0x401)]();break;case _0x5d2862[_0xeffd0e(0x149)]:SceneManager['isSceneMap']()?(this[_0xeffd0e(0x3e5)+'d'](),SceneManager[_0xeffd0e(0x167)](Scene_GameEnd)):this['playBuzzer'+_0xeffd0e(0x401)]();break;}},VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)]['Window_Mes'+_0x1b01ff(0x2e7)+_0x1b01ff(0x1a7)]=Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x23f)],Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x23f)]=function(_0x20f140){const _0x7f4a20=_0x1b01ff;if(SceneManager[_0x7f4a20(0x169)][_0x7f4a20(0x38c)+_0x7f4a20(0x2a1)+_0x7f4a20(0x215)]())return;VisuMZ[_0x7f4a20(0x214)+_0x7f4a20(0x3ef)]['Window_Mes'+_0x7f4a20(0x2e7)+_0x7f4a20(0x1a7)][_0x7f4a20(0x405)](this,_0x20f140);},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x2f0)+_0x1b01ff(0x2e3)+_0x1b01ff(0x369)]=function(){const _0x78bef9=_0x1b01ff,_0x52ea9d=$gameSystem['getMessage'+_0x78bef9(0x291)+_0x78bef9(0x2a7)]();return _0x52ea9d[_0x78bef9(0x30a)];},Window_Message['prototype'][_0x1b01ff(0x387)+_0x1b01ff(0x2a3)+_0x1b01ff(0x1f4)]=function(){const _0x49e641=_0x1b01ff;this[_0x49e641(0x2f0)+_0x49e641(0x2e3)+_0x49e641(0x369)]()?(this[_0x49e641(0x322)+_0x49e641(0x2d5)+_0x49e641(0x258)](),this[_0x49e641(0x2cb)+_0x49e641(0x1cd)+_0x49e641(0x22f)+_0x49e641(0x257)+'s']()):Window_Base[_0x49e641(0x1e1)][_0x49e641(0x387)+_0x49e641(0x2a3)+_0x49e641(0x1f4)][_0x49e641(0x405)](this);},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x322)+_0x1b01ff(0x2d5)+_0x1b01ff(0x258)]=function(){const _0x4d3ef7=_0x1b01ff;if(!this['_pauseSign'+_0x4d3ef7(0x251)])return;this[_0x4d3ef7(0x25c)+'d'](this[_0x4d3ef7(0x28c)+_0x4d3ef7(0x251)]);},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x2cb)+_0x1b01ff(0x1cd)+_0x1b01ff(0x22f)+_0x1b01ff(0x257)+'s']=function(){const _0x3971d6=_0x1b01ff,_0xb67983=$gameSystem[_0x3971d6(0x339)+'CursorSett'+_0x3971d6(0x2a7)]();this[_0x3971d6(0x28c)+_0x3971d6(0x251)]=new Sprite(),this['addChild'](this['_pauseSign'+'Sprite']),this[_0x3971d6(0x28c)+_0x3971d6(0x251)]['anchor']['x']=_0xb67983[_0x3971d6(0x3e4)],this[_0x3971d6(0x28c)+'Sprite']['anchor']['y']=_0xb67983[_0x3971d6(0x1d7)],this[_0x3971d6(0x28c)+_0x3971d6(0x34f)+'ount']=0x1d1c+-0x19c7*-0x1+-0x36e3;},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x12c)+_0x1b01ff(0x21b)]=function(){const _0x47dab6=_0x1b01ff;this[_0x47dab6(0x2f0)+_0x47dab6(0x2e3)+'rEnabled']()?this[_0x47dab6(0x219)+_0x47dab6(0x16f)+_0x47dab6(0x1cf)+_0x47dab6(0x273)]():(Window_Base['prototype'][_0x47dab6(0x12c)+'useSign']['call'](this),this[_0x47dab6(0x1c0)+_0x47dab6(0x19f)+_0x47dab6(0x318)+'ction']());},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x219)+'tomMessage'+_0x1b01ff(0x1cf)+_0x1b01ff(0x273)]=function(){const _0x29d2ad=_0x1b01ff,_0x4dc583={'kEdoQ':function(_0x43c091,_0x1b6ff3){return _0x43c091===_0x1b6ff3;},'EopbQ':_0x29d2ad(0x384),'XaYLe':'windowskin','BTBoB':_0x29d2ad(0x146)},_0x382307=this['_pauseSign'+_0x29d2ad(0x251)];if(!_0x382307)return;const _0x5afb56=$gameSystem[_0x29d2ad(0x339)+_0x29d2ad(0x291)+_0x29d2ad(0x2a7)](),_0x2f4111=_0x5afb56['GraphicTyp'+'e'][_0x29d2ad(0x1d0)+'e']()[_0x29d2ad(0x1ea)]();if(_0x4dc583['kEdoQ'](_0x2f4111,_0x4dc583[_0x29d2ad(0x181)]))_0x382307[_0x29d2ad(0x16b)]=ImageManager[_0x29d2ad(0x22c)](_0x5afb56[_0x29d2ad(0x30e)]);else{if(_0x4dc583['kEdoQ'](_0x2f4111,_0x4dc583[_0x29d2ad(0x301)])){const _0x3fe7f8=-0xb*-0x246+0x247f+0x1*-0x3cf1,_0xe2b3bc=0x3*-0xbe9+-0xf*-0x215+0x4e0,_0x4d7939=0x748+-0x901+0x5d*0x5;_0x382307[_0x29d2ad(0x16b)]=this[_0x29d2ad(0x2ee)+'n'],_0x382307[_0x29d2ad(0x376)](_0x3fe7f8,_0xe2b3bc,_0x4d7939,_0x4d7939);}else _0x382307['bitmap']=ImageManager['loadSystem'](_0x4dc583[_0x29d2ad(0x27c)]);}},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x1c0)+_0x1b01ff(0x19f)+_0x1b01ff(0x318)+_0x1b01ff(0x3fa)]=function(){const _0x3b78e4=_0x1b01ff,_0x5cad4c=this[_0x3b78e4(0x28c)+_0x3b78e4(0x251)];if(!_0x5cad4c)return;if(!$gameSystem[_0x3b78e4(0x3ca)+_0x3b78e4(0x1fd)+_0x3b78e4(0x404)]())return;if(this[_0x3b78e4(0x20a)+_0x3b78e4(0x179)])return;_0x5cad4c['y']-=Window_ButtonConsole[_0x3b78e4(0x34b)+_0x3b78e4(0x231)];},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x22b)+_0x1b01ff(0x361)]=function(){const _0x444607=_0x1b01ff;this[_0x444607(0x2f0)+_0x444607(0x2e3)+_0x444607(0x369)]()?this['updateCust'+'omMessageC'+_0x444607(0x22f)+_0x444607(0x257)+'s']():Window_Base[_0x444607(0x1e1)][_0x444607(0x22b)+'seSign']['call'](this);},Window_Message['prototype'][_0x1b01ff(0x353)+_0x1b01ff(0x1cd)+_0x1b01ff(0x22f)+_0x1b01ff(0x257)+'s']=function(){const _0x13903e=_0x1b01ff,_0x52529e={'SPhwe':function(_0x147a86,_0x53d6dc){return _0x147a86===_0x53d6dc;},'PSIyh':function(_0x5d7d98,_0x4ad120){return _0x5d7d98<=_0x4ad120;},'miYHO':function(_0xc53cdb,_0x198b70){return _0xc53cdb<=_0x198b70;},'gaGQn':function(_0x546143,_0x529cc4){return _0x546143*_0x529cc4;},'NPvqO':function(_0x3ab919,_0x29f00a){return _0x3ab919>=_0x29f00a;},'GnEbZ':function(_0x190f5d,_0x3ad332){return _0x190f5d===_0x3ad332;},'QVToi':_0x13903e(0x384),'cIXtk':function(_0x686c64,_0x217067){return _0x686c64===_0x217067;},'InwVJ':_0x13903e(0x153)};if(_0x52529e[_0x13903e(0x2cc)](this[_0x13903e(0x2ae)+_0x13903e(0x16f)+_0x13903e(0x407)+'eCount'],Graphics['frameCount']))return;this[_0x13903e(0x2ae)+'tomMessage'+'CursorFram'+_0x13903e(0x2c2)]=Graphics[_0x13903e(0x365)];const _0x2aad0b=this['_pauseSign'+'Sprite'];if(!_0x2aad0b)return;const _0x4fa50d=_0x2aad0b[_0x13903e(0x16b)];if(_0x52529e[_0x13903e(0x312)](_0x4fa50d[_0x13903e(0x18e)],-0x23a9+0x561+0x1e48))return;const _0x2a9ac5=$gameSystem[_0x13903e(0x339)+_0x13903e(0x291)+_0x13903e(0x2a7)](),_0x27b279=_0x2a9ac5[_0x13903e(0x286)+'e']['toLowerCas'+'e']()[_0x13903e(0x1ea)](),_0x453b6e=this['isAnySubWi'+_0x13903e(0x37a)]()||this['isClosing']();_0x2aad0b['alpha']=_0x453b6e?-0x1255+-0xa2c+0x1c81:-0xf23+-0x32*0x8c+0x2a7c;if(_0x52529e[_0x13903e(0x3fc)](_0x2aad0b[_0x13903e(0x34d)],0x14e0+0x1a*0x20+-0x1820))return;const _0x5b19f8=_0x52529e[_0x13903e(0x323)](_0x2a9ac5[_0x13903e(0x240)],_0x2a9ac5['Cols']);this[_0x13903e(0x28c)+_0x13903e(0x34f)+_0x13903e(0x192)]++;while(_0x52529e['NPvqO'](this[_0x13903e(0x28c)+_0x13903e(0x34f)+'ount'],_0x52529e['gaGQn'](_0x5b19f8,_0x2a9ac5[_0x13903e(0x2b2)]))){this[_0x13903e(0x28c)+'AnimationC'+'ount']-=_0x52529e[_0x13903e(0x323)](_0x5b19f8,_0x2a9ac5[_0x13903e(0x2b2)]);}if(_0x52529e[_0x13903e(0x277)](_0x27b279,_0x52529e[_0x13903e(0x3b1)]))this[_0x13903e(0x1e6)+_0x13903e(0x20e)+'rsorPauseS'+_0x13903e(0x258)]();else _0x52529e[_0x13903e(0x235)](_0x27b279,_0x52529e[_0x13903e(0x349)])?Window_Base['prototype']['_updatePau'+'seSign'][_0x13903e(0x405)](this):this[_0x13903e(0x180)+_0x13903e(0x29f)+'sorPauseSi'+_0x13903e(0x283)]();},Window_Message[_0x1b01ff(0x1e1)]['updateImag'+_0x1b01ff(0x20e)+'rsorPauseS'+_0x1b01ff(0x258)]=function(){const _0x85316=_0x1b01ff,_0x365d24={'GsUgG':function(_0x1a0fd9,_0x1dcfa8){return _0x1a0fd9/_0x1dcfa8;},'BvdKD':function(_0x57da0d,_0x22b1ad){return _0x57da0d/_0x22b1ad;},'ixDlN':function(_0x5c7b80,_0x8d15e9){return _0x5c7b80/_0x8d15e9;},'WAMdA':function(_0x25298e,_0x1e1c4f){return _0x25298e*_0x1e1c4f;},'hJPEm':function(_0x1a51cf,_0x35f6c7){return _0x1a51cf%_0x35f6c7;},'iFMxy':function(_0x3e855f,_0x4115ec){return _0x3e855f*_0x4115ec;},'FwxTi':function(_0x2845af,_0x201ebb){return _0x2845af/_0x201ebb;}},_0x576851=this[_0x85316(0x28c)+_0x85316(0x251)],_0x6344e4=_0x576851[_0x85316(0x16b)],_0x1afb11=$gameSystem['getMessage'+_0x85316(0x291)+_0x85316(0x2a7)](),_0x5adb6b=Math[_0x85316(0x23e)](_0x365d24[_0x85316(0x171)](this[_0x85316(0x28c)+_0x85316(0x34f)+'ount'],_0x1afb11[_0x85316(0x2b2)])),_0x1d7480=Math[_0x85316(0x23e)](_0x365d24[_0x85316(0x2dc)](_0x6344e4[_0x85316(0x18e)],_0x1afb11[_0x85316(0x33f)])),_0x26ab5f=Math[_0x85316(0x23e)](_0x365d24[_0x85316(0x156)](_0x6344e4['height'],_0x1afb11[_0x85316(0x240)])),_0x4efb63=_0x365d24['WAMdA'](_0x365d24[_0x85316(0x40b)](_0x5adb6b,_0x1afb11[_0x85316(0x33f)]),_0x1d7480),_0x5d3345=_0x365d24[_0x85316(0x24b)](Math['floor'](_0x365d24[_0x85316(0x21d)](_0x5adb6b,_0x1afb11[_0x85316(0x33f)])),_0x26ab5f);_0x576851[_0x85316(0x376)](_0x4efb63,_0x5d3345,_0x1d7480,_0x26ab5f),_0x576851[_0x85316(0x267)]=this[_0x85316(0x14f)]();},Window_Message[_0x1b01ff(0x1e1)]['updateIcon'+_0x1b01ff(0x29f)+_0x1b01ff(0x2de)+_0x1b01ff(0x283)]=function(){const _0x3263c5=_0x1b01ff,_0x3d1223={'sLmGz':function(_0x248519,_0x5a9fac){return _0x248519*_0x5a9fac;},'hOsPV':function(_0x4e3c6b,_0x5c5df3){return _0x4e3c6b%_0x5c5df3;},'gJmXn':function(_0x21ee96,_0x2eeeb){return _0x21ee96/_0x2eeeb;},'wxXJz':function(_0xc12654,_0x3b595b){return _0xc12654===_0x3b595b;}},_0x1bbc2d=this[_0x3263c5(0x28c)+_0x3263c5(0x251)],_0x1627ea=$gameSystem['getMessage'+_0x3263c5(0x291)+_0x3263c5(0x2a7)](),_0x2c800e=_0x1627ea[_0x3263c5(0x264)],_0x1745d5=ImageManager[_0x3263c5(0x3a0)],_0x5c2611=ImageManager['iconHeight'],_0x127dcb=_0x3d1223[_0x3263c5(0x245)](_0x3d1223[_0x3263c5(0x33a)](_0x2c800e,-0x19*0x43+-0xb03+0x119e),_0x1745d5),_0x321cc3=_0x3d1223['sLmGz'](Math[_0x3263c5(0x23e)](_0x3d1223['gJmXn'](_0x2c800e,-0x219a+-0x1*0x403+0x25ad)),_0x5c2611);_0x1bbc2d[_0x3263c5(0x376)](_0x127dcb,_0x321cc3,_0x1745d5,_0x5c2611),_0x1bbc2d[_0x3263c5(0x267)]=this[_0x3263c5(0x14f)]();if(_0x3d1223[_0x3263c5(0x15c)](_0x1627ea['FlipMultip'+_0x3263c5(0x2e5)],-0xa5a+-0x489+-0xee3*-0x1))return;_0x1bbc2d[_0x3263c5(0x2bb)]['x']=Math[_0x3263c5(0x23d)](_0x3d1223[_0x3263c5(0x245)](Graphics['frameCount'],_0x1627ea['FlipMultip'+_0x3263c5(0x2e5)]));},Window_Message[_0x1b01ff(0x2b6)+_0x1b01ff(0x2ac)+'XT']=VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x379)][_0x1b01ff(0x187)][_0x1b01ff(0x212)]??!![],Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x3d8)+_0x1b01ff(0x29f)+_0x1b01ff(0x2de)+'gn']=function(_0x3ab3eb){const _0x4a51b3=_0x1b01ff,_0x67e096={'UZZDQ':function(_0x2d4355,_0x6a1b51){return _0x2d4355+_0x6a1b51;},'YXvKq':function(_0x5ec1db,_0x1131e0){return _0x5ec1db+_0x1131e0;},'tPjeU':function(_0x43a7b7,_0x3c0427){return _0x43a7b7/_0x3c0427;},'TNdeB':function(_0x2f6126,_0x4e5030){return _0x2f6126+_0x4e5030;},'vcSHk':function(_0x594894,_0x3281e3){return _0x594894+_0x3281e3;},'PpUES':function(_0x96a745,_0x3d620b){return _0x96a745-_0x3d620b;}};if(!_0x3ab3eb)return;if(!_0x3ab3eb[_0x4a51b3(0x26e)])return;if(!this[_0x4a51b3(0x2f0)+_0x4a51b3(0x2e3)+_0x4a51b3(0x369)]())return;const _0x4c3a64=this['_pauseSign'+_0x4a51b3(0x251)];if(!_0x4c3a64)return;const _0x35a999=$gameSystem['getMessage'+_0x4a51b3(0x291)+_0x4a51b3(0x2a7)]();_0x4c3a64['x']=_0x67e096[_0x4a51b3(0x224)](_0x67e096[_0x4a51b3(0x224)](_0x67e096[_0x4a51b3(0x202)](_0x3ab3eb['x'],this[_0x4a51b3(0x289)]),_0x35a999['OffsetX']),_0x67e096[_0x4a51b3(0x234)](_0x4c3a64[_0x4a51b3(0x18e)],-0x5f0+-0x5fb+0x1*0xbed)),_0x4c3a64['x']+=this['_contentsS'+_0x4a51b3(0x21f)]['x'],_0x4c3a64['y']=_0x67e096[_0x4a51b3(0x224)](_0x67e096['TNdeB'](_0x67e096[_0x4a51b3(0x335)](_0x3ab3eb['y'],this[_0x4a51b3(0x289)]),_0x3ab3eb[_0x4a51b3(0x27b)]),_0x35a999[_0x4a51b3(0x140)]),_0x4c3a64['y']+=this[_0x4a51b3(0x2e2)+_0x4a51b3(0x21f)]['y'],_0x4c3a64['x']=Math['round'](_0x4c3a64['x'][_0x4a51b3(0x178)](this[_0x4a51b3(0x289)],this[_0x4a51b3(0x18e)])),_0x4c3a64['y']=Math['round'](_0x4c3a64['y'][_0x4a51b3(0x178)](this[_0x4a51b3(0x289)],_0x67e096['PpUES'](this[_0x4a51b3(0x27b)],this[_0x4a51b3(0x289)])));},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x32a)+_0x1b01ff(0x1e5)+_0x1b01ff(0x1a6)]=function(){const _0x49fafa=_0x1b01ff;this['_messageTa'+_0x49fafa(0x1c1)]=new Sprite(),this[_0x49fafa(0x367)+'ilSprite'][_0x49fafa(0x267)]=![],this[_0x49fafa(0x317)](this[_0x49fafa(0x367)+_0x49fafa(0x1c1)]);},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x344)+_0x1b01ff(0x1b8)+'ings']=function(){const _0x42191f=_0x1b01ff,_0x116ce1={'YGoaH':_0x42191f(0x3db),'FYcXe':'left','qhaPT':_0x42191f(0x372)};this[_0x42191f(0x367)+'il']={'visible':![],'lastFile':'','location':_0x116ce1[_0x42191f(0x281)],'direction':_0x116ce1[_0x42191f(0x2c1)],'positionX':_0x116ce1[_0x42191f(0x25b)]};},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x174)+_0x1b01ff(0x30f)+_0x1b01ff(0x321)]=function(_0x27412f){const _0x27786a=_0x1b01ff;_0x27412f['text']=this[_0x27786a(0x39e)+'iableEscap'+'eCharacter'+'s'](_0x27412f[_0x27786a(0x1c5)]),_0x27412f[_0x27786a(0x1c5)]=this[_0x27786a(0x1ec)+_0x27786a(0x150)+'capeCodes'](_0x27412f[_0x27786a(0x1c5)]);},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x1ec)+_0x1b01ff(0x150)+_0x1b01ff(0x1d1)]=function(_0x6e6c00){const _0x21059b=_0x1b01ff,_0x25cf8a={'NHRfE':'4|1|3|2|0'},_0x411765=_0x25cf8a[_0x21059b(0x2b5)][_0x21059b(0x2f1)]('|');let _0x5c4987=-0x4*-0x99d+-0x537*-0x2+-0x30e2;while(!![]){switch(_0x411765[_0x5c4987++]){case'0':return _0x6e6c00;case'1':_0x6e6c00=_0x6e6c00[_0x21059b(0x2d2)](/<TAIL (?:BR|BOTTOM RIGHT|DL|DOWN RIGHT):[ ](\d+)>/gi,(_0x5e3d40,_0x139056)=>{const _0x3a0648=_0x21059b;return this[_0x3a0648(0x13a)+'geTailSett'+'ings'](!![],![],_0x139056),'';});continue;case'2':_0x6e6c00=_0x6e6c00[_0x21059b(0x2d2)](/<TAIL (?:UR|UPPER RIGHT|UP RIGHT):[ ](\d+)>/gi,(_0x5f2e2b,_0x12147f)=>{const _0x41401e=_0x21059b;return this['setupMessa'+_0x41401e(0x1b8)+_0x41401e(0x2a7)](![],![],_0x12147f),'';});continue;case'3':_0x6e6c00=_0x6e6c00[_0x21059b(0x2d2)](/<TAIL (?:UL|UPPER LEFT|UP LEFT):[ ](\d+)>/gi,(_0x3e839e,_0x28ae0c)=>{const _0x5a28ad=_0x21059b;return this[_0x5a28ad(0x13a)+_0x5a28ad(0x1b8)+_0x5a28ad(0x2a7)](![],!![],_0x28ae0c),'';});continue;case'4':_0x6e6c00=_0x6e6c00['replace'](/<TAIL (?:BL|BOTTOM LEFT|DL|DOWN LEFT):[ ](\d+)>/gi,(_0x440570,_0x37c3fb)=>{const _0x5ec6ad=_0x21059b;return this['setupMessa'+_0x5ec6ad(0x1b8)+_0x5ec6ad(0x2a7)](!![],!![],_0x37c3fb),'';});continue;}break;}},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x13a)+_0x1b01ff(0x1b8)+_0x1b01ff(0x2a7)]=function(_0x353c8f,_0x545502,_0x5ac9bf){const _0x1905ec=_0x1b01ff,_0x394f53={'uSuOS':'2|4|0|3|1','kbJou':_0x1905ec(0x3db),'sAVTc':_0x1905ec(0x32c),'gRiDD':function(_0x5ab9c6,_0x1d2780){return _0x5ab9c6(_0x1d2780);},'ENCmd':_0x1905ec(0x19d),'NwKLX':_0x1905ec(0x14e)},_0x1312fb=_0x394f53[_0x1905ec(0x266)][_0x1905ec(0x2f1)]('|');let _0x9be594=0x1806+0x24a2+-0x3ca8;while(!![]){switch(_0x1312fb[_0x9be594++]){case'0':this['_messageTa'+'il'][_0x1905ec(0x228)]=_0x353c8f?_0x394f53[_0x1905ec(0x2e9)]:_0x394f53[_0x1905ec(0x354)];continue;case'1':this[_0x1905ec(0x367)+'il'][_0x1905ec(0x22e)]=_0x394f53[_0x1905ec(0x336)](Number,_0x5ac9bf);continue;case'2':if(!this[_0x1905ec(0x367)+'il'])this['resetMessa'+_0x1905ec(0x1b8)+'ings']();continue;case'3':this[_0x1905ec(0x367)+'il']['direction']=_0x545502?_0x394f53[_0x1905ec(0x31c)]:_0x394f53[_0x1905ec(0x1fe)];continue;case'4':this[_0x1905ec(0x367)+'il'][_0x1905ec(0x267)]=!![];continue;}break;}},VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x3cf)+_0x1b01ff(0x36e)+_0x1b01ff(0x177)+_0x1b01ff(0x162)]=Window_Message[_0x1b01ff(0x1e1)]['updateAuto'+'Position'],Window_Message[_0x1b01ff(0x1e1)]['updateAuto'+_0x1b01ff(0x2a8)]=function(){const _0x3b6ca6=_0x1b01ff,_0x33c763={'xllNf':'left','xEISq':_0x3b6ca6(0x14e),'PtkFj':'bottom','AAZHh':_0x3b6ca6(0x372)};VisuMZ[_0x3b6ca6(0x214)+'Func'][_0x3b6ca6(0x3cf)+_0x3b6ca6(0x36e)+'eAutoPosit'+_0x3b6ca6(0x162)]['call'](this);if(!this[_0x3b6ca6(0x1c7)+_0x3b6ca6(0x320)])return;if(!this['_messageTa'+'ilSprite'])return;if(!this[_0x3b6ca6(0x367)+'il'])return;if(this['usesAutoPo'+'sitionMess'+_0x3b6ca6(0x2d7)]()){const _0x4e1f9a=$gameSystem[_0x3b6ca6(0x339)+_0x3b6ca6(0x350)+'gs'](),_0xf486a5=_0x4e1f9a[_0x3b6ca6(0x389)+_0x3b6ca6(0x196)]?_0x33c763[_0x3b6ca6(0x293)]:_0x33c763[_0x3b6ca6(0x3c4)];this[_0x3b6ca6(0x367)+'il'][_0x3b6ca6(0x267)]=!![],this[_0x3b6ca6(0x367)+'il']['lastFile']='',this[_0x3b6ca6(0x367)+'il']['location']=_0x33c763[_0x3b6ca6(0x2fe)],this['_messageTa'+'il'][_0x3b6ca6(0x3e3)]=_0xf486a5,this[_0x3b6ca6(0x367)+'il']['positionX']=_0x33c763[_0x3b6ca6(0x226)];}},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x26f)+_0x1b01ff(0x1d3)+_0x1b01ff(0x2d7)]=function(){const _0x2ff215=_0x1b01ff,_0xb79b76={'GmNSx':'Left','zymDR':'Right','qUKxf':_0x2ff215(0x268)+'lename','zhnjz':function(_0x5a7a14,_0x3e8b3e){return _0x5a7a14!==_0x3e8b3e;}},_0x11b0b8=$gameSystem[_0x2ff215(0x339)+_0x2ff215(0x350)+'gs']();if(!_0x11b0b8)return![];if(!_0x11b0b8[_0x2ff215(0x389)+_0x2ff215(0x38b)])return![];const _0x40ebae=_0x11b0b8[_0x2ff215(0x389)+_0x2ff215(0x196)]?_0xb79b76[_0x2ff215(0x3b7)]:_0xb79b76['zymDR'],_0x6e8625=_0xb79b76[_0x2ff215(0x2c7)][_0x2ff215(0x316)](_0x40ebae),_0x5ebb4e=_0x11b0b8[_0x6e8625]||'';return _0xb79b76[_0x2ff215(0x1de)](_0x5ebb4e[_0x2ff215(0x1ea)](),'');},VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x3cf)+_0x1b01ff(0x39f)+_0x1b01ff(0x303)+_0x1b01ff(0x205)]=Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x389)+_0x1b01ff(0x2f2)],Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x389)+'onOffsetX']=function(){const _0x1e7ca2=_0x1b01ff;let _0xde0076=VisuMZ['ExtMessage'+_0x1e7ca2(0x3ef)][_0x1e7ca2(0x3cf)+_0x1e7ca2(0x39f)+_0x1e7ca2(0x303)+'setX'][_0x1e7ca2(0x405)](this);const _0x513320=$gameSystem[_0x1e7ca2(0x339)+'TailSettin'+'gs']();return _0x513320&&_0x513320[_0x1e7ca2(0x389)+_0x1e7ca2(0x38b)]&&(_0xde0076+=_0x513320[_0x1e7ca2(0x389)+_0x1e7ca2(0x2f2)]),_0xde0076;},VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)]['Window_Mes'+_0x1b01ff(0x39f)+_0x1b01ff(0x303)+_0x1b01ff(0x3b8)]=Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x389)+_0x1b01ff(0x3e8)],Window_Message[_0x1b01ff(0x1e1)]['autoPositi'+_0x1b01ff(0x3e8)]=function(){const _0x43427d=_0x1b01ff;let _0x3dd3a6=VisuMZ['ExtMessage'+'Func'][_0x43427d(0x3cf)+'sage_autoP'+'ositionOff'+_0x43427d(0x3b8)][_0x43427d(0x405)](this);const _0x24992e=$gameSystem[_0x43427d(0x339)+'TailSettin'+'gs']();return _0x24992e&&_0x24992e['autoPositi'+_0x43427d(0x38b)]&&(_0x3dd3a6+=_0x24992e['autoPositi'+_0x43427d(0x3e8)]),_0x3dd3a6;},Window_Message[_0x1b01ff(0x1e1)]['updateMess'+_0x1b01ff(0x1e5)+_0x1b01ff(0x1a6)]=function(){const _0x4be63b=_0x1b01ff,_0x5d23d0={'tgmis':_0x4be63b(0x295)},_0x286855=_0x5d23d0[_0x4be63b(0x2ea)][_0x4be63b(0x2f1)]('|');let _0x97eb08=-0x1e76+0x3*-0x577+0x2edb*0x1;while(!![]){switch(_0x286855[_0x97eb08++]){case'0':if(!this[_0x4be63b(0x367)+'il'])return;continue;case'1':this[_0x4be63b(0x1f2)+_0x4be63b(0x1ae)+_0x4be63b(0x2c6)]();continue;case'2':this[_0x4be63b(0x1f2)+'ageTailPos'+_0x4be63b(0x17e)]();continue;case'3':if(!this[_0x4be63b(0x367)+_0x4be63b(0x1c1)])return;continue;case'4':this[_0x4be63b(0x1f2)+'ageTailVis'+_0x4be63b(0x200)]();continue;}break;}},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x339)+_0x1b01ff(0x20c)+'y']=function(){const _0x275d0=_0x1b01ff,_0x4abfb0={'ygXqn':function(_0x35156d,_0x5b1159){return _0x35156d===_0x5b1159;},'oFnkr':_0x275d0(0x32c),'EIsMG':_0x275d0(0x3db),'VSXlh':_0x275d0(0x19d),'uGfkI':_0x275d0(0x1ce),'Vhulp':'Right','jCkeY':_0x275d0(0x1dc)},_0x2add15=this[_0x275d0(0x367)+'il'],_0x9994ca=_0x4abfb0[_0x275d0(0x159)](_0x2add15[_0x275d0(0x228)],_0x4abfb0[_0x275d0(0x188)])?_0x4abfb0[_0x275d0(0x188)]:_0x4abfb0[_0x275d0(0x3bd)],_0x2353d0=_0x4abfb0[_0x275d0(0x159)](_0x2add15[_0x275d0(0x3e3)],_0x4abfb0[_0x275d0(0x16c)])?_0x4abfb0[_0x275d0(0x17a)]:_0x4abfb0[_0x275d0(0x2c3)];return _0x4abfb0[_0x275d0(0x388)][_0x275d0(0x316)](_0x9994ca,_0x2353d0);},Window_Message['prototype'][_0x1b01ff(0x1f2)+_0x1b01ff(0x1ae)+_0x1b01ff(0x2c6)]=function(){const _0x301c0a=_0x1b01ff,_0x2d5272={'PMBLF':function(_0x1e1069,_0x5913bd){return _0x1e1069===_0x5913bd;},'PdPaL':_0x301c0a(0x1be)},_0x164b9e=this[_0x301c0a(0x367)+_0x301c0a(0x1c1)],_0x37c7a3=this[_0x301c0a(0x367)+'il'],_0x53aaef=$gameSystem[_0x301c0a(0x339)+_0x301c0a(0x350)+'gs'](),_0x37e2f4=this[_0x301c0a(0x339)+'TailMainKe'+'y']();if(_0x2d5272[_0x301c0a(0x260)](_0x37c7a3[_0x301c0a(0x290)],_0x53aaef[_0x2d5272[_0x301c0a(0x21a)]['format'](_0x37e2f4)]))return;const _0x32bb20=_0x53aaef[_0x2d5272['PdPaL'][_0x301c0a(0x316)](_0x37e2f4)];_0x37c7a3['lastFile']=_0x32bb20,_0x32bb20?_0x164b9e[_0x301c0a(0x16b)]=ImageManager[_0x301c0a(0x22c)](_0x32bb20):_0x164b9e[_0x301c0a(0x16b)]=new Bitmap(0xdda+0x54c*0x1+0x1*-0x1325,-0x1d82+0x77*0x3c+-0x1*-0x19f);},Window_Message[_0x1b01ff(0x1e1)][_0x1b01ff(0x1f2)+'ageTailVis'+_0x1b01ff(0x200)]=function(){const _0x3eb730=_0x1b01ff,_0x560eb2={'qMxmb':function(_0x184675,_0x18de4d){return _0x184675===_0x18de4d;}},_0x47ba6a=this[_0x3eb730(0x367)+_0x3eb730(0x1c1)],_0x52760d=this['_messageTa'+'il'];_0x47ba6a['visible']=_0x52760d['visible']&&_0x560eb2[_0x3eb730(0x1e4)](this[_0x3eb730(0x1a3)],-0x1149+-0x1f52+0x2*0x18cd);},Window_Message['prototype'][_0x1b01ff(0x1f2)+'ageTailPos'+_0x1b01ff(0x17e)]=function(){const _0x44eaf7=_0x1b01ff,_0x4cfa54={'dWXcj':_0x44eaf7(0x2c9),'wgEOP':_0x44eaf7(0x2d8),'GyFNy':function(_0x3d3da9,_0x24c3d4){return _0x3d3da9===_0x24c3d4;},'teXBJ':_0x44eaf7(0x372),'VZtqH':function(_0x1173f7,_0x4914a3){return _0x1173f7/_0x4914a3;},'ejcRH':function(_0x4c8c51,_0x41879d){return _0x4c8c51(_0x41879d);},'StcUq':_0x44eaf7(0x32c),'WwVEP':'%1OffsetX','jnXOn':'%1OffsetY'},_0x34f7f4=this[_0x44eaf7(0x367)+_0x44eaf7(0x1c1)],_0x21eb11=this[_0x44eaf7(0x367)+'il'],_0x1beea7=$gameSystem[_0x44eaf7(0x339)+_0x44eaf7(0x350)+'gs'](),_0x1d8fba=this[_0x44eaf7(0x339)+'TailMainKe'+'y']();_0x34f7f4[_0x44eaf7(0x358)]['x']=_0x1beea7[_0x4cfa54[_0x44eaf7(0x34a)]['format'](_0x1d8fba)],_0x34f7f4[_0x44eaf7(0x358)]['y']=_0x1beea7[_0x4cfa54[_0x44eaf7(0x347)][_0x44eaf7(0x316)](_0x1d8fba)],_0x4cfa54[_0x44eaf7(0x2db)](_0x21eb11['positionX'],_0x4cfa54[_0x44eaf7(0x239)])?_0x34f7f4['x']=Math[_0x44eaf7(0x310)](_0x4cfa54[_0x44eaf7(0x3be)](this[_0x44eaf7(0x18e)],0x5*-0x595+0x1f03+-0x318)):(_0x21eb11[_0x44eaf7(0x22e)]=_0x4cfa54[_0x44eaf7(0x21c)](Number,_0x21eb11[_0x44eaf7(0x22e)]),_0x34f7f4['x']=Math[_0x44eaf7(0x310)](_0x21eb11[_0x44eaf7(0x22e)])),_0x4cfa54['GyFNy'](_0x21eb11[_0x44eaf7(0x228)],_0x4cfa54[_0x44eaf7(0x3c3)])?_0x34f7f4['y']=0x40e+-0x1b44+-0x1*-0x1736:_0x34f7f4['y']=this[_0x44eaf7(0x27b)],_0x34f7f4['x']+=_0x1beea7[_0x4cfa54[_0x44eaf7(0x403)][_0x44eaf7(0x316)](_0x1d8fba)],_0x34f7f4['y']+=_0x1beea7[_0x4cfa54[_0x44eaf7(0x2f7)]['format'](_0x1d8fba)];};function Window_ButtonConsole(){const _0x39c5e7=_0x1b01ff;this[_0x39c5e7(0x1e7)](...arguments);}Window_ButtonConsole[_0x1b01ff(0x1e1)]=Object[_0x1b01ff(0x253)](Window_Scrollable[_0x1b01ff(0x1e1)]),Window_ButtonConsole[_0x1b01ff(0x1e1)]['constructo'+'r']=Window_ButtonConsole,Window_ButtonConsole[_0x1b01ff(0x16e)+'OW']=VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x379)][_0x1b01ff(0x307)+_0x1b01ff(0x1c6)]['ShowDefaul'+'t'],Window_ButtonConsole['POSITION']=VisuMZ[_0x1b01ff(0x214)+'Func']['Settings'][_0x1b01ff(0x307)+_0x1b01ff(0x1c6)][_0x1b01ff(0x2a8)],Window_ButtonConsole[_0x1b01ff(0x2cd)]=VisuMZ[_0x1b01ff(0x214)+'Func'][_0x1b01ff(0x379)][_0x1b01ff(0x307)+_0x1b01ff(0x1c6)][_0x1b01ff(0x248)],Window_ButtonConsole[_0x1b01ff(0x1fc)]=VisuMZ['ExtMessage'+'Func'][_0x1b01ff(0x379)][_0x1b01ff(0x307)+_0x1b01ff(0x1c6)][_0x1b01ff(0x399)],Window_ButtonConsole[_0x1b01ff(0x1c2)]=VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x379)][_0x1b01ff(0x307)+_0x1b01ff(0x1c6)][_0x1b01ff(0x2ed)],Window_ButtonConsole['TEXT_COLOR'+_0x1b01ff(0x17d)]=VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x379)]['MsgButtonC'+_0x1b01ff(0x1c6)]['NormalColo'+'r'],Window_ButtonConsole[_0x1b01ff(0x14d)+'_TOGGLED']=VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x379)][_0x1b01ff(0x307)+_0x1b01ff(0x1c6)][_0x1b01ff(0x34e)+'or'],Window_ButtonConsole['TEXT_COLOR'+_0x1b01ff(0x34c)]=VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)]['Settings'][_0x1b01ff(0x307)+_0x1b01ff(0x1c6)][_0x1b01ff(0x345)+_0x1b01ff(0x2da)],Window_ButtonConsole[_0x1b01ff(0x225)+'SET_X']=VisuMZ[_0x1b01ff(0x214)+'Func'][_0x1b01ff(0x379)]['MsgButtonC'+_0x1b01ff(0x1c6)][_0x1b01ff(0x3b2)+_0x1b01ff(0x209)]??-0x3*-0x5f2+-0x1*-0xcf1+-0x1*0x1ec7,Window_ButtonConsole[_0x1b01ff(0x225)+'SET_Y']=VisuMZ[_0x1b01ff(0x214)+'Func'][_0x1b01ff(0x379)]['MsgButtonC'+_0x1b01ff(0x1c6)][_0x1b01ff(0x3b2)+_0x1b01ff(0x3e7)]??0x1954+0x9e9*-0x2+0xf*-0x5e,Window_ButtonConsole[_0x1b01ff(0x2e1)+'TH']=VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x379)][_0x1b01ff(0x307)+_0x1b01ff(0x1c6)][_0x1b01ff(0x1f8)+'h'],Window_ButtonConsole[_0x1b01ff(0x34b)+_0x1b01ff(0x231)]=VisuMZ['ExtMessage'+'Func'][_0x1b01ff(0x379)][_0x1b01ff(0x307)+_0x1b01ff(0x1c6)][_0x1b01ff(0x287)+'ht'],Window_ButtonConsole[_0x1b01ff(0x1a1)+_0x1b01ff(0x15b)]=VisuMZ[_0x1b01ff(0x214)+'Func']['Settings'][_0x1b01ff(0x307)+'onsole'][_0x1b01ff(0x30b)+'er'],Window_ButtonConsole[_0x1b01ff(0x2d3)+'ER']=VisuMZ[_0x1b01ff(0x214)+'Func'][_0x1b01ff(0x379)][_0x1b01ff(0x28f)]['List'],Window_ButtonConsole[_0x1b01ff(0x24e)]={'auto':VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)]['Settings']['Buttons'][_0x1b01ff(0x19b)],'fastfwd':VisuMZ[_0x1b01ff(0x214)+'Func'][_0x1b01ff(0x379)]['Buttons'][_0x1b01ff(0x1a4)],'save':VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x379)][_0x1b01ff(0x28f)][_0x1b01ff(0x298)],'load':VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)]['Settings'][_0x1b01ff(0x28f)][_0x1b01ff(0x3b3)],'options':VisuMZ[_0x1b01ff(0x214)+'Func']['Settings'][_0x1b01ff(0x28f)][_0x1b01ff(0x1b2)],'gameend':VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x379)][_0x1b01ff(0x28f)][_0x1b01ff(0x3f4)]},Window_ButtonConsole[_0x1b01ff(0x13d)+'EY']={'auto':VisuMZ[_0x1b01ff(0x214)+'Func'][_0x1b01ff(0x379)][_0x1b01ff(0x28f)]['AutoKey'],'save':VisuMZ[_0x1b01ff(0x214)+'Func'][_0x1b01ff(0x379)][_0x1b01ff(0x28f)][_0x1b01ff(0x331)],'load':VisuMZ['ExtMessage'+_0x1b01ff(0x3ef)][_0x1b01ff(0x379)]['Buttons'][_0x1b01ff(0x383)],'options':VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x379)][_0x1b01ff(0x28f)][_0x1b01ff(0x19a)],'gameend':VisuMZ[_0x1b01ff(0x214)+_0x1b01ff(0x3ef)][_0x1b01ff(0x379)][_0x1b01ff(0x28f)][_0x1b01ff(0x371)]},Window_ButtonConsole['prototype'][_0x1b01ff(0x1e7)]=function(_0xed82e8,_0x16b23c){const _0x3cb03f=_0x1b01ff,_0x51ad21=new Rectangle(-0x38f+0x1c4b*-0x1+0x6*0x54f,0x1abb+0x75a*-0x3+-0x4ad,Window_ButtonConsole[_0x3cb03f(0x2e1)+'TH'],Window_ButtonConsole[_0x3cb03f(0x34b)+'GHT']);this[_0x3cb03f(0x2c8)+_0x3cb03f(0x400)]=_0x16b23c,Window_Scrollable['prototype'][_0x3cb03f(0x1e7)][_0x3cb03f(0x405)](this,_0x51ad21),this[_0x3cb03f(0x230)+_0x3cb03f(0x241)+'es'](),this[_0x3cb03f(0x139)]=_0xed82e8['toLowerCas'+'e']()[_0x3cb03f(0x1ea)](),this[_0x3cb03f(0x1d8)](),this[_0x3cb03f(0x32d)]();},Window_ButtonConsole[_0x1b01ff(0x1e1)][_0x1b01ff(0x147)+'g']=function(){return 0xa88+0xd36+-0x2*0xbdf;},Window_ButtonConsole['prototype'][_0x1b01ff(0x129)+_0x1b01ff(0x3bf)]=function(){const _0x3786d1=_0x1b01ff;this['windowskin']=ImageManager['loadSystem'](Window_ButtonConsole[_0x3786d1(0x2cd)]);},Window_ButtonConsole[_0x1b01ff(0x1e1)][_0x1b01ff(0x2d9)+_0x1b01ff(0x3a9)]=function(){const _0x353700=_0x1b01ff;this[_0x353700(0x289)]=-0x259b+-0x9ec+0x2f87;},Window_ButtonConsole[_0x1b01ff(0x1e1)]['updateBack'+'Opacity']=function(){const _0xfb0c0=_0x1b01ff;this[_0xfb0c0(0x17b)+'y']=-0x4c3+-0x12*0xec+0x165a;},Window_ButtonConsole[_0x1b01ff(0x1e1)]['createBack'+_0x1b01ff(0x241)+'es']=function(){const _0x4a8846=_0x1b01ff,_0x41d6a4={'KZUTt':function(_0x5b9758,_0x5192fd){return _0x5b9758===_0x5192fd;},'NZLtk':'ImgDisable'+'d','PDEJF':_0x4a8846(0x31b),'NgDvU':_0x4a8846(0x33b),'lCQel':function(_0x200b44,_0x45659c){return _0x200b44!==_0x45659c;},'uvjXs':_0x4a8846(0x38f),'ryTrq':_0x4a8846(0x3d2)};_0x41d6a4['KZUTt'](Window_ButtonConsole[_0x4a8846(0x18a)+_0x4a8846(0x3c7)+'ES'],undefined)&&this[_0x4a8846(0x37e)+_0x4a8846(0x3d7)+'s']();if(!Window_ButtonConsole[_0x4a8846(0x18a)+_0x4a8846(0x3c7)+'ES'])return;this[_0x4a8846(0x1ff)]=-0x10e4+0x2*0x102c+-0x56*0x2e;const _0x1a3997=VisuMZ[_0x4a8846(0x214)+_0x4a8846(0x3ef)]['Settings'][_0x4a8846(0x307)+_0x4a8846(0x1c6)],_0x3b2865=[_0x41d6a4[_0x4a8846(0x2b9)],_0x41d6a4['PDEJF'],_0x41d6a4[_0x4a8846(0x274)]];this[_0x4a8846(0x1b4)+_0x4a8846(0x3de)+'s']={};for(const _0xe70ef of _0x3b2865){if(_0x41d6a4[_0x4a8846(0x38e)](_0x1a3997[_0xe70ef],'')){const _0x3c7477=ImageManager['loadSystem'](_0x1a3997[_0xe70ef]);this[_0x4a8846(0x1b4)+'soleSprite'+'s'][_0xe70ef]=new Sprite(_0x3c7477);const _0xb97931=this[_0x4a8846(0x1b4)+_0x4a8846(0x3de)+'s'][_0xe70ef];this[_0x4a8846(0x2ff)+'Back'](_0xb97931),_0xb97931['x']=_0x1a3997[_0x41d6a4['uvjXs'][_0x4a8846(0x316)](_0xe70ef)]||-0x40d*-0x5+0x2a3*-0x1+-0x119e,_0xb97931['y']=_0x1a3997[_0x41d6a4['ryTrq'][_0x4a8846(0x316)](_0xe70ef)]||0x930+-0x5da*0x4+0xe38;}}this[_0x4a8846(0x333)+'ImageSprit'+'eVisibilit'+'y']();},Window_ButtonConsole[_0x1b01ff(0x1e1)]['checkBackI'+_0x1b01ff(0x3d7)+'s']=function(){const _0xb07ac5=_0x1b01ff,_0x575d04={'EhBLB':_0xb07ac5(0x17f)+'d','DClgN':_0xb07ac5(0x31b),'nJfwj':_0xb07ac5(0x33b),'xXnNB':function(_0x3b0fbd,_0x594a72){return _0x3b0fbd!==_0x594a72;}};Window_ButtonConsole[_0xb07ac5(0x18a)+_0xb07ac5(0x3c7)+'ES']=![];const _0x139017=VisuMZ['ExtMessage'+'Func'][_0xb07ac5(0x379)][_0xb07ac5(0x307)+'onsole'],_0x1a2276=[_0x575d04[_0xb07ac5(0x195)],_0x575d04[_0xb07ac5(0x280)],_0x575d04[_0xb07ac5(0x203)]];for(const _0x15592f of _0x1a2276){if(_0x575d04[_0xb07ac5(0x3ed)](_0x139017[_0x15592f],'')){Window_ButtonConsole[_0xb07ac5(0x18a)+'MAGE_SPRIT'+'ES']=!![];break;}}},Window_ButtonConsole['prototype'][_0x1b01ff(0x1ca)+'ettings']=function(){const _0x816e6e=_0x1b01ff;Window_Scrollable[_0x816e6e(0x1e1)][_0x816e6e(0x1ca)+_0x816e6e(0x2fa)][_0x816e6e(0x405)](this),this[_0x816e6e(0x185)][_0x816e6e(0x3ea)]=Window_ButtonConsole['FONT_FACE'],this[_0x816e6e(0x185)][_0x816e6e(0x254)]=Window_ButtonConsole[_0x816e6e(0x1c2)];},Window_ButtonConsole[_0x1b01ff(0x1e1)][_0x1b01ff(0x1d8)]=function(){const _0x3d15f6=_0x1b01ff,_0x5bc4b9={'Auvgc':_0x3d15f6(0x270)};this['createCont'+_0x3d15f6(0x2c0)](),this[_0x3d15f6(0x1ca)+'ettings']();const _0x4fe4d5=TextManager[_0x3d15f6(0x255)+_0x3d15f6(0x1c6)](this['_type']),_0x422e3e=this[_0x3d15f6(0x3d6)+'D']();this['changeText'+_0x3d15f6(0x3b4)](ColorManager[_0x3d15f6(0x275)](_0x422e3e)),this['drawText'](_0x4fe4d5,0x322*-0x7+-0x4da+-0x1ac8*-0x1,-0x3d5+0x21e5+-0x1e10,this['innerWidth'],_0x5bc4b9[_0x3d15f6(0x164)]);},Window_ButtonConsole[_0x1b01ff(0x1e1)][_0x1b01ff(0x3d6)+'D']=function(){const _0x1dec91=_0x1b01ff,_0xf79b4d={'zFbuD':'auto','ndqcy':_0x1dec91(0x2e6),'UMFEZ':_0x1dec91(0x137),'YtDtv':_0x1dec91(0x132),'ikKpq':_0x1dec91(0x242),'STunz':'gameend','sxqbL':_0x1dec91(0x330),'wNcck':_0x1dec91(0x3e6)};switch(this[_0x1dec91(0x139)]){case _0xf79b4d[_0x1dec91(0x3fd)]:if($gameTemp[_0x1dec91(0x151)+'utoForward'+_0x1dec91(0x37f)]())return Window_ButtonConsole[_0x1dec91(0x14d)+'_TOGGLED'];break;case _0xf79b4d[_0x1dec91(0x2c4)]:const _0x5da99c=SceneManager[_0x1dec91(0x169)];if($gameSystem[_0x1dec91(0x38c)+'FastForwar'+_0x1dec91(0x2f6)+'d']())return Window_ButtonConsole[_0x1dec91(0x14d)+'_DISABLED'];else{if(_0x5da99c&&_0x5da99c['isActivate'+'dExtendedF'+_0x1dec91(0x294)+_0x1dec91(0x37f)]&&_0x5da99c[_0x1dec91(0x269)+'dExtendedF'+_0x1dec91(0x294)+_0x1dec91(0x37f)]())return Window_ButtonConsole[_0x1dec91(0x14d)+_0x1dec91(0x1fa)];}break;case _0xf79b4d[_0x1dec91(0x26d)]:if(!$gameSystem[_0x1dec91(0x3df)+_0x1dec91(0x2cf)]()||!SceneManager['isSceneMap']())return Window_ButtonConsole[_0x1dec91(0x14d)+'_DISABLED'];break;case _0xf79b4d[_0x1dec91(0x15f)]:if(!DataManager[_0x1dec91(0x21e)+_0x1dec91(0x1a5)]()||!SceneManager[_0x1dec91(0x1ac)]())return Window_ButtonConsole[_0x1dec91(0x14d)+_0x1dec91(0x34c)];break;case _0xf79b4d[_0x1dec91(0x2ab)]:case _0xf79b4d[_0x1dec91(0x2f8)]:if(!SceneManager['isSceneMap']())return Window_ButtonConsole[_0x1dec91(0x14d)+_0x1dec91(0x34c)];break;case _0xf79b4d[_0x1dec91(0x28e)]:case _0xf79b4d[_0x1dec91(0x35a)]:if(!$gameSystem[_0x1dec91(0x3dc)+_0x1dec91(0x227)+_0x1dec91(0x276)]()||!SceneManager[_0x1dec91(0x1ac)]())return Window_ButtonConsole[_0x1dec91(0x14d)+_0x1dec91(0x34c)];break;}return Window_ButtonConsole['TEXT_COLOR'+_0x1dec91(0x17d)];},Window_ButtonConsole['prototype']['isTouchScr'+_0x1b01ff(0x12a)]=function(){return!![];},Window_ButtonConsole[_0x1b01ff(0x1e1)][_0x1b01ff(0x1e8)+_0x1b01ff(0x2a0)]=function(){const _0x4c9b21=_0x1b01ff,_0x48479f={'jefZK':function(_0x579f43,_0x59da51){return _0x579f43<_0x59da51;},'sZYbm':'auto','NRfym':'fastfwd','bfrXC':_0x4c9b21(0x137),'Vpxvq':_0x4c9b21(0x132),'nLJux':_0x4c9b21(0x242),'LqvCC':'gameend','foQEA':'hide','sMCbH':'backlog','ozYqu':'log'};if(_0x48479f['jefZK'](this[_0x4c9b21(0x1a3)],-0x24ab+0x25f+0x234b))return;if(!this[_0x4c9b21(0x267)])return;switch(this[_0x4c9b21(0x139)]){case _0x48479f[_0x4c9b21(0x40c)]:let _0x2bdefc=!$gameTemp[_0x4c9b21(0x151)+_0x4c9b21(0x340)+_0x4c9b21(0x37f)]();$gameTemp['setMessage'+_0x4c9b21(0x229)+_0x4c9b21(0x215)](_0x2bdefc);_0x2bdefc?this[_0x4c9b21(0x3e5)+'d']():SoundManager[_0x4c9b21(0x232)]();break;case _0x48479f[_0x4c9b21(0x25d)]:if(!$gameSystem[_0x4c9b21(0x38c)+'FastForwar'+_0x4c9b21(0x2f6)+'d']()){let _0x32cd75=!$gameTemp[_0x4c9b21(0x38c)+_0x4c9b21(0x2a1)+_0x4c9b21(0x215)]();$gameTemp[_0x4c9b21(0x2f9)+_0x4c9b21(0x370)+_0x4c9b21(0x163)](_0x32cd75),_0x32cd75?this[_0x4c9b21(0x3e5)+'d']():SoundManager[_0x4c9b21(0x232)](),this['refresh']();}else this[_0x4c9b21(0x309)+_0x4c9b21(0x401)]();break;case _0x48479f['bfrXC']:$gameSystem['isSaveEnab'+_0x4c9b21(0x2cf)]()&&SceneManager[_0x4c9b21(0x1ac)]()?(this[_0x4c9b21(0x3e5)+'d'](),SceneManager[_0x4c9b21(0x167)](Scene_SaveButtonConsole)):this[_0x4c9b21(0x309)+_0x4c9b21(0x401)]();break;case _0x48479f[_0x4c9b21(0x304)]:DataManager[_0x4c9b21(0x21e)+_0x4c9b21(0x1a5)]()&&SceneManager[_0x4c9b21(0x1ac)]()?(this['playOkSoun'+'d'](),SceneManager[_0x4c9b21(0x167)](Scene_Load)):this['playBuzzer'+_0x4c9b21(0x401)]();break;case _0x48479f[_0x4c9b21(0x3ff)]:SceneManager[_0x4c9b21(0x1ac)]()?(this[_0x4c9b21(0x3e5)+'d'](),SceneManager[_0x4c9b21(0x167)](Scene_Options)):this['playBuzzer'+_0x4c9b21(0x401)]();break;case _0x48479f[_0x4c9b21(0x35f)]:SceneManager['isSceneMap']()?(this[_0x4c9b21(0x3e5)+'d'](),SceneManager[_0x4c9b21(0x167)](Scene_GameEnd)):this[_0x4c9b21(0x309)+_0x4c9b21(0x401)]();break;case _0x48479f[_0x4c9b21(0x143)]:Imported[_0x4c9b21(0x1f0)+'essageVisi'+'bility']&&$gameTemp[_0x4c9b21(0x3b6)+'ageWindowV'+'isibility']();break;case _0x48479f[_0x4c9b21(0x33e)]:case _0x48479f[_0x4c9b21(0x1b3)]:Imported[_0x4c9b21(0x393)+_0x4c9b21(0x26c)]&&($gameSystem[_0x4c9b21(0x3dc)+_0x4c9b21(0x227)+_0x4c9b21(0x276)]()&&SceneManager[_0x4c9b21(0x1ac)]()?(this[_0x4c9b21(0x3e5)+'d'](),SceneManager[_0x4c9b21(0x167)](Scene_MessageLog)):this[_0x4c9b21(0x309)+_0x4c9b21(0x401)]());break;}TouchInput[_0x4c9b21(0x126)]();},Window_ButtonConsole['prototype'][_0x1b01ff(0x311)]=function(){const _0x32a3ea=_0x1b01ff;Window_Scrollable['prototype']['update'][_0x32a3ea(0x405)](this),this[_0x32a3ea(0x128)+_0x32a3ea(0x352)+'ity'](),this[_0x32a3ea(0x15e)+'r'](),this[_0x32a3ea(0x333)+'ImageSprit'+_0x32a3ea(0x343)+'y']();},Window_ButtonConsole[_0x1b01ff(0x1e1)]['updateCons'+_0x1b01ff(0x352)+_0x1b01ff(0x208)]=function(){const _0x440199=_0x1b01ff;if(!this[_0x440199(0x2c8)+'dow'])return;this[_0x440199(0x1a3)]=this[_0x440199(0x2c8)+_0x440199(0x400)][_0x440199(0x1a3)];},Window_ButtonConsole[_0x1b01ff(0x1e1)][_0x1b01ff(0x15e)+'r']=function(){const _0x4eda87=_0x1b01ff,_0x4c339f={'kqaTS':function(_0x4889e1,_0x36ee35){return _0x4889e1===_0x36ee35;},'WrehU':'fastfwd','kKDQI':function(_0x2cbffe,_0x2145ea){return _0x2cbffe!==_0x2145ea;}};_0x4c339f[_0x4eda87(0x31a)](this['_type'],_0x4c339f[_0x4eda87(0x28b)])&&(_0x4c339f[_0x4eda87(0x406)](this[_0x4eda87(0x39d)+_0x4eda87(0x213)],Input[_0x4eda87(0x238)](VisuMZ[_0x4eda87(0x18d)+'e'][_0x4eda87(0x379)]['General'][_0x4eda87(0x2a1)+_0x4eda87(0x19e)]))&&(this[_0x4eda87(0x39d)+'astFwd']=Input[_0x4eda87(0x238)](VisuMZ[_0x4eda87(0x18d)+'e'][_0x4eda87(0x379)][_0x4eda87(0x3f8)]['FastForwar'+_0x4eda87(0x19e)]),this[_0x4eda87(0x1d8)]()));},Window_ButtonConsole[_0x1b01ff(0x1e1)]['updateBack'+_0x1b01ff(0x241)+_0x1b01ff(0x343)+'y']=function(){const _0x4a523d=_0x1b01ff,_0x5a3fcd={'PWfyh':function(_0x207794,_0x3b2f36){return _0x207794===_0x3b2f36;},'ynmRL':function(_0x3294b3,_0x35a39e){return _0x3294b3===_0x35a39e;},'NmlKp':function(_0x509a79,_0x2e42a0){return _0x509a79===_0x2e42a0;}};if(!Window_ButtonConsole['USE_BACK_I'+_0x4a523d(0x3c7)+'ES'])return;if(this['_buttonCon'+_0x4a523d(0x3de)+'s'][_0x4a523d(0x17f)+'d']){const _0x3348bf=this['_buttonCon'+_0x4a523d(0x3de)+'s']['ImgDisable'+'d'];_0x3348bf['visible']=_0x5a3fcd[_0x4a523d(0x1bb)](this[_0x4a523d(0x3d6)+'D'](),Window_ButtonConsole[_0x4a523d(0x14d)+_0x4a523d(0x34c)]);}if(this['_buttonCon'+_0x4a523d(0x3de)+'s'][_0x4a523d(0x31b)]){const _0x4200ef=this[_0x4a523d(0x1b4)+_0x4a523d(0x3de)+'s'][_0x4a523d(0x31b)];_0x4200ef['visible']=_0x5a3fcd[_0x4a523d(0x29a)](this[_0x4a523d(0x3d6)+'D'](),Window_ButtonConsole[_0x4a523d(0x14d)+'_NORMAL']);}if(this[_0x4a523d(0x1b4)+_0x4a523d(0x3de)+'s'][_0x4a523d(0x33b)]){const _0x520499=this['_buttonCon'+_0x4a523d(0x3de)+'s']['ImgToggled'];_0x520499[_0x4a523d(0x267)]=_0x5a3fcd[_0x4a523d(0x206)](this[_0x4a523d(0x3d6)+'D'](),Window_ButtonConsole[_0x4a523d(0x14d)+_0x4a523d(0x1fa)]);}};