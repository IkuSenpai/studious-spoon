//=============================================================================
// VisuStella MZ - Shop Bust Style UI
// VisuMZ_3_ShopBustStyleUI.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ShopBustStyleUI = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ShopBustStyleUI = VisuMZ.ShopBustStyleUI || {};
VisuMZ.ShopBustStyleUI.version = 1.00;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.00] [ShopBustStyleUI]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Shop_Bust_Style_UI_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_ItemsEquipsCore
 * @orderAfter VisuMZ_1_ItemsEquipsCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows you to modify the shop scene to showcase a dynamic
 * background and character. The character will speak via messages and can even
 * change expressions depending on what the player does inside the shop. The
 * backgrounds and characters, along with their messages, can vary from shop to
 * shop by simply changing Plugin Commands.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Plugin Commands that can change the appearance of backgrounds and
 *   character bust graphics to vary from shop to shop.
 * * Custom text is displayed based on the types of interactions the player
 *   does within the shop.
 * * Characters can change their bust graphics based on interactions, too.
 * * With VisuMZ_2_VoiceActControl, voice acting support is added to the Shop
 *   Bust Style UI, too.
 * * Additional compatibility with other VisuStella MZ shop-related plugins to
 *   allow them to utilize the Shop Bust Style UI, too.
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
 * * VisuMZ_1_ItemsEquipsCore
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
 * Window Layouts
 * 
 * As this is a UI altering plugin, the window positioning functions will be
 * altered and overwritten. However, when the Shop Bust Style UI is off, then
 * the usual window positions will be used.
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
 * VisuMZ_2_VoiceActControl
 *
 * If you are using VisuMZ_2_VoiceActControl, this plugin's voice acting
 * support will become enabled and you can add voice lines to various messages
 * as long as they are available.
 *
 * ---
 * 
 * VisuMZ_4_HospitalShop
 * 
 * If you are using VisuMZ_4_HospitalShop, then this plugin has extra features
 * that can be used together with it. There are Plugin Commands and Plugin
 * Parameters that can be used to change up the Hospital scene's UI to match
 * that of a Shop Bust Style UI.
 * 
 * ---
 * 
 * VisuMZ_4_RecruitBoard
 * 
 * If you are using VisuMZ_4_RecruitBoard, then this plugin has extra features
 * that can be used together with it. There are Plugin Commands and Plugin
 * Parameters that can be used to change up the Recruiting Board scene's UI to
 * match that of a Shop Bust Style UI.
 * 
 * ---
 * 
 * VisuMZ_4_SkillShop
 * 
 * If you are using VisuMZ_4_SkillShop, then this plugin has extra features
 * that can be used together with it. There are Plugin Commands and Plugin
 * Parameters that can be used to change up the Skill Shop scene's UI to match
 * that of a Shop Bust Style UI.
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
 * === General Shop Plugin Commands ===
 * 
 * ---
 * 
 * General Shop: Clear UI Settings
 * - Clear Bust Style UI settings for general shops.
 * 
 * ---
 *
 * General Shop: Setup UI Settings
 * - Setup Bust Style UI settings for general shops.
 * - Use this before a "Shop Processing" event command.
 *
 *   Background Graphic:
 *   - What background image do you wish to use?
 *
 *   Bust Graphic:
 *   - What character bust image do you wish to use?
 * 
 *     Bust Settings:
 *     - These settings adjust the bust settings and how they visually appear
 *       in-game for the general shop.
 *     - Look in the Plugin Parameters for the identical settings.
 *     - If this is left empty or at {}, then use the defaults found in the
 *       Plugin Parameters.
 *
 *   Messages:
 *   - What messages would you like to use for this shop?
 *   - Look in the Plugin Parameters for the identical settings.
 *   - If this is left empty or at {}, then use the defaults found in the
 *     Plugin Parameters.
 *
 * ---
 * 
 * === Hospital Shop Plugin Commands ===
 * 
 * ---
 * 
 * Hospital: Clear UI Settings
 * - Clear Bust Style UI settings for Scene_Hospital.
 * - Requires VisuMZ_4_HospitalShop!
 * 
 * ---
 *
 * Hospital: Setup UI Settings
 * - Setup Bust Style UI settings for Scene_Hospital.
 * - Requires VisuMZ_4_HospitalShop!
 *
 *   Background Graphic:
 *   - What background image do you wish to use?
 *
 *   Bust Graphic:
 *   - What character bust image do you wish to use?
 * 
 *     Bust Settings:
 *     - These settings adjust the bust settings and how they visually appear
 *       in-game for the hospital.
 *     - Look in the Plugin Parameters for the identical settings.
 *     - If this is left empty or at {}, then use the defaults found in the
 *       Plugin Parameters.
 *
 *   Messages:
 *   - What messages would you like to use for this hospital?
 *   - Look in the Plugin Parameters for the identical settings.
 *   - If this is left empty or at {}, then use the defaults found in the
 *     Plugin Parameters.
 *
 * ---
 * 
 * === Recruiting Board Plugin Commands ===
 * 
 * ---
 * 
 * Recruiting Board: Clear UI Settings
 * - Clear Bust Style UI settings for Scene_RecruitBoard.
 * - Requires VisuMZ_4_RecruitingBoard!
 * 
 * ---
 *
 * Recruiting Board: Setup UI Settings
 * - Setup Bust Style UI settings for Scene_RecruitBoard.
 * - Requires VisuMZ_4_RecruitingBoard!
 *
 *   Background Graphic:
 *   - What background image do you wish to use?
 *
 *   Bust Graphic:
 *   - What character bust image do you wish to use?
 * 
 *     Bust Settings:
 *     - These settings adjust the bust settings and how they visually appear
 *       in-game for the recruiting board.
 *     - Look in the Plugin Parameters for the identical settings.
 *     - If this is left empty or at {}, then use the defaults found in the
 *       Plugin Parameters.
 *
 *   Messages:
 *   - What messages would you like to use for this recruiting board?
 *   - Look in the Plugin Parameters for the identical settings.
 *   - If this is left empty or at {}, then use the defaults found in the
 *     Plugin Parameters.
 *
 * ---
 * 
 * === Skill Shop Plugin Commands ===
 * 
 * ---
 * 
 * Skill Shop: Clear UI Settings
 * - Clear Bust Style UI settings for Scene_SkillShop.
 * - Requires VisuMZ_4_SkillShop!
 * 
 * ---
 *
 * Skill Shop: Setup UI Settings
 * - Setup Bust Style UI settings for Scene_SkillShop.
 * - Requires VisuMZ_4_SkillShop!
 *
 *   Background Graphic:
 *   - What background image do you wish to use?
 *
 *   Bust Graphic:
 *   - What character bust image do you wish to use?
 * 
 *     Bust Settings:
 *     - These settings adjust the bust settings and how they visually appear
 *       in-game for the skill shop.
 *     - Look in the Plugin Parameters for the identical settings.
 *     - If this is left empty or at {}, then use the defaults found in the
 *       Plugin Parameters.
 *
 *   Messages:
 *   - What messages would you like to use for the skill shop?
 *   - Look in the Plugin Parameters for the identical settings.
 *   - If this is left empty or at {}, then use the defaults found in the
 *     Plugin Parameters.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Default Bust Settings
 * ============================================================================
 *
 * Default bust settings if you don't adjust the "Bust Settings" in the Plugin
 * Command or if you leave it at {}.
 *
 * ---
 *
 * Settings
 * 
 *   Anchor X:
 *   - Anchor value X. Use a number between 0 and 1.
 *   - 0.0 - Left; 0.5 - Center; 1.0 - Right
 * 
 *   Anchor Y:
 *   - Anchor value Y. Use a number between 0 and 1.
 *   - 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * 
 *   Position X:
 *   - Bust position X value. Use a number between 0 and 1.
 *   - 0.0 - Left; 0.5 - Center; 1.0 - Right
 * 
 *   Position Y:
 *   - Bust position Y value. Use a number between 0 and 1.
 *   - 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Voice Line Settings
 * ============================================================================
 *
 * Voice line settings for ALL shop messages with voice lines.
 * 
 * Requires VisuMZ_2_VoiceActControl!
 *
 * ---
 *
 * Settings
 * 
 *   Delay MS:
 *   - Delay the playing of voice lines to not conflict with any shop sound
 *     effects.
 *   - 1000 milliseconds = 1 second.
 * 
 *   Volume:
 *   - Volume of the voice line played.
 * 
 *   Pitch:
 *   - Pitch of the voice line played.
 * 
 *   Pan:
 *   - Pan of the voice line played.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Scene_Shop > Scene Settings
 * ============================================================================
 *
 * Bust Style UI settings applied to Scene_Shop.
 * 
 * Includes all of the window settings, too.
 *
 * ---
 * 
 * General Settings
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for stylized shop lists?
 * 
 *   Fade In/Out?:
 *   - Allow fade in/out for stylized general shops?
 *
 * ---
 *
 * Exit Shop
 * 
 *   Exit Delay MS:
 *   - What is the delay after exiting the shop scene in milliseconds?
 *   - 1000 milliseconds = 1 second.
 * 
 * ---
 * 
 * Scaling
 * 
 *   General Window Scale:
 *   Status Window Scale:
 *   - What is the scale used for most general/status windows?
 *   - 0.0 - 0%; 0.5 - 50%; 1.0 - 100%
 * 
 * ---
 * 
 * Window Settings
 * 
 *   Command Window:
 *   Gold Window:
 *   Number Window:
 *   Status Window:
 *   Buy List Window:
 *   Sell Category Window:
 *   Sell List Window:
 *   Message Window:
 * 
 *     JS: X, Y, W, H:
 *     - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Scene_Shop > Default Messages
 * ============================================================================
 *
 * Default messages used if you don't adjust the "Message Settings" in the
 * Plugin Command. This will apply only for Scene_Shop
 *
 * ---
 *
 * Messages
 * 
 *   Welcome Message:
 *   Leave Message:
 *   Buy Command:
 *   About to Buy:
 *   Cancel Buying:
 *   Buy Complete:
 *   Sell Command:
 *   About to Sell:
 *   Cancel Selling:
 *   Sell Complete:
 * 
 *     Message:
 *     - Message used for this shop situation.
 *     - Text codes allowed.
 * 
 *     Bust Change:
 *     - Changes bust graphic when this message is displayed.
 *     - Leave empty to not use.
 * 
 *     Voice Line:
 *     - Voice line used for this message text.
 *     - Requires VisuMZ_2_VoiceActControl!
 *     - Leave empty to not use.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Compatibility
 * ============================================================================
 *
 * The are Plugin Parameters for VisuStella MZ's Hospital Shop plugin,
 * Recruiting Board plugin, and Skill Shop Plugin. Each one contains similar
 * data to Scene_Shop along with their messages. Adjust them accordingly.
 *
 * ---
 * 
 * Scene Data > General Settings
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for stylized shop lists?
 * 
 *   Fade In/Out?:
 *   - Allow fade in/out for stylized general shops?
 *
 * ---
 *
 * Scene Data > Exit Shop
 * 
 *   Exit Delay MS:
 *   - What is the delay after exiting the shop scene in milliseconds?
 *   - 1000 milliseconds = 1 second.
 * 
 * ---
 * 
 * Scene Data > Scaling
 * 
 *   General Window Scale:
 *   Skill Window Scale:
 *   - What is the scale used for most general/status windows?
 *   - 0.0 - 0%; 0.5 - 50%; 1.0 - 100%
 * 
 * ---
 * 
 * Scene Data > Window Settings
 * 
 *   Various Windows:
 * 
 *     JS: X, Y, W, H:
 *     - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Default Messages
 * 
 *   Various Messages:
 * 
 *     Message:
 *     - Message used for this shop situation.
 *     - Text codes allowed.
 * 
 *     Bust Change:
 *     - Changes bust graphic when this message is displayed.
 *     - Leave empty to not use.
 * 
 *     Voice Line:
 *     - Voice line used for this message text.
 *     - Requires VisuMZ_2_VoiceActControl!
 *     - Leave empty to not use.
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
 * Version 1.00 Official Release Date: December 1, 2023
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
 * @command SceneShop_Clear
 * @text General Shop: Clear UI Settings
 * @desc Clear Bust Style UI settings for general shops.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SceneShop_Setup
 * @text General Shop: Setup UI Settings
 * @desc Setup Bust Style UI settings for general shops.
 * Use this before a "Shop Processing" event command.
 *
 * @arg backgroundFilename:str
 * @text Background Graphic
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What background image do you wish to use?
 * @default 
 *
 * @arg bustFilename:str
 * @text Bust Graphic
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What character bust image do you wish to use?
 * @default 
 *
 * @arg bustSettings:struct
 * @text Bust Settings
 * @parent bustFilename:str
 * @type struct<Bust>
 * @desc These settings adjust the bust settings and how they visually appear in-game.
 * @default {}
 *
 * @arg messages:struct
 * @text Messages
 * @type struct<SceneShopMsg>
 * @desc What messages would you like to use for this shop?
 * @default {}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Hospital
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Hospital_Clear
 * @text Hospital: Clear UI Settings
 * @desc Clear Bust Style UI settings for Scene_Hospital.
 * Requires VisuMZ_4_HospitalShop!
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Hospital_Setup
 * @text Hospital: Setup UI Settings
 * @desc Setup Bust Style UI settings for Scene_Hospital.
 * Requires VisuMZ_4_HospitalShop!
 *
 * @arg backgroundFilename:str
 * @text Background Graphic
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What background image do you wish to use?
 * @default 
 *
 * @arg bustFilename:str
 * @text Bust Graphic
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What character bust image do you wish to use?
 * @default 
 *
 * @arg bustSettings:struct
 * @text Bust Settings
 * @parent bustFilename:str
 * @type struct<Bust>
 * @desc These settings adjust the bust settings and how they visually appear in-game.
 * @default {}
 *
 * @arg messages:struct
 * @text Messages
 * @type struct<SceneHospitalData>
 * @desc What messages would you like to use for the hospital?
 * @default {}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Recruit
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Recruit_Clear
 * @text Recruiting Board: Clear UI Settings
 * @desc Clear Bust Style UI settings for Scene_RecruitBoard.
 * Requires VisuMZ_4_RecruitingBoard!
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Recruit_Setup
 * @text Recruiting Board: Setup UI Settings
 * @desc Setup Bust Style UI settings for Scene_RecruitBoard.
 * Requires VisuMZ_4_RecruitingBoard!
 *
 * @arg backgroundFilename:str
 * @text Background Graphic
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What background image do you wish to use?
 * @default 
 *
 * @arg bustFilename:str
 * @text Bust Graphic
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What character bust image do you wish to use?
 * @default 
 *
 * @arg bustSettings:struct
 * @text Bust Settings
 * @parent bustFilename:str
 * @type struct<Bust>
 * @desc These settings adjust the bust settings and how they visually appear in-game.
 * @default {}
 *
 * @arg messages:struct
 * @text Messages
 * @type struct<SceneRecruitMsg>
 * @desc What messages would you like to use for the recruiting board?
 * @default {}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SkillShop
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillShop_Clear
 * @text Skill Shop: Clear UI Settings
 * @desc Clear Bust Style UI settings for Scene_SkillShop.
 * Requires VisuMZ_4_SkillShop!
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillShop_Setup
 * @text SkillShop: Setup UI Settings
 * @desc Setup Bust Style UI settings for Scene_SkillShop.
 * Requires VisuMZ_4_SkillShop!
 *
 * @arg backgroundFilename:str
 * @text Background Graphic
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What background image do you wish to use?
 * @default 
 *
 * @arg bustFilename:str
 * @text Bust Graphic
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What character bust image do you wish to use?
 * @default 
 *
 * @arg bustSettings:struct
 * @text Bust Settings
 * @parent bustFilename:str
 * @type struct<Bust>
 * @desc These settings adjust the bust settings and how they visually appear in-game.
 * @default {}
 *
 * @arg messages:struct
 * @text Messages
 * @type struct<SceneSkillShopMsg>
 * @desc What messages would you like to use for the skill shop?
 * @default {}
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
 * @param ShopBustStyleUI
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param General
 * 
 * @param DefaultBust:struct
 * @text Default Bust Settings
 * @parent General
 * @type struct<Bust>
 * @desc Default bust settings if you don't adjust the
 * "Bust Settings" in the Plugin Command.
 * @default {"bustAnchorX:num":"0.5","bustAnchorY:num":"1.0","bustPositionX:num":"0.8","bustPositionY:num":"1.0"}
 * 
 * @param VoiceLine:struct
 * @text Voice Line Settings
 * @parent General
 * @type struct<VoiceLine>
 * @desc Voice line settings for ALL shop messages with
 * voice lines. Requires VisuMZ_2_VoiceActControl!
 * @default {"voiceDelay:num":"500","volume:num":"90","pitch:num":"100","pan:num":"0"}
 * 
 * @param Scene_Shop
 * @text Scene_Shop
 *
 * @param SceneShopData:struct
 * @text Scene Settings
 * @parent Scene_Shop
 * @type struct<SceneShopData>
 * @desc Bust Style UI settings applied to Scene_Shop.
 * Includes all of the window settings, too.
 * @default {"General":"","maxListSize:num":"8","fadeout:eval":"true","Exit":"","exitDelay:num":"1500","Scale":"","windowScale:num":"0.8","statusScale:num":"0.6","Windows":"","Window_ShopCommand":"","Window_ShopCommand_RectJS:func":"\"const ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(this.getTotalCommandWindowCommands(), true);\\nconst wx = Math.floor((Graphics.boxWidth - Math.min(Graphics.boxWidth, 816)) / 2);\\nconst wy = this.mainAreaTop() + 100;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_Gold":"","Window_Gold_RectJS:func":"\"const scale = Scene_Shop.SHOP_BUST_STYLE_UI.windowScale;\\n\\nconst ww = this.mainCommandWidth() / scale;\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = this.mainAreaBottom() - this.calcWindowHeight(4, false) - Math.floor(wh * scale);\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_ShopNumber":"","Window_ShopNumber_RectJS:func":"\"const scale = Scene_Shop.SHOP_BUST_STYLE_UI.windowScale;\\nconst itemMax = Scene_Shop.SHOP_BUST_STYLE_UI.maxListSize;\\n\\nconst mw = Math.min(Graphics.boxWidth, 816);\\nconst mh = Math.ceil(this.mainAreaHeight() - this.calcWindowHeight(4, false) - (this.calcWindowHeight(1, true) * scale));\\n\\nconst bw = Math.min(((Graphics.boxWidth - mw) / 2), 192);\\nconst ww = mw - this.statusWidth() + bw;\\nconst wh = Math.min(Math.floor(mh / scale), this.calcWindowHeight(itemMax, true));\\nconst wx = Math.floor((Graphics.boxWidth - mw) / 4);\\nconst wy = this.mainAreaTop() + Math.floor((mh - (wh * scale)) / 2);\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_ShopStatus":"","Window_ShopStatus_RectJS:func":"\"const numberRect = this.numberWindowRect();\\n\\nconst windowScale = Scene_Shop.SHOP_BUST_STYLE_UI.windowScale;\\nconst statusScale = Scene_Shop.SHOP_BUST_STYLE_UI.statusScale;\\n\\nconst ww = Math.floor(this.statusWidth());\\nconst wh = Math.floor(numberRect.height / (statusScale / windowScale));\\nconst wx = numberRect.x + Math.ceil(numberRect.width * windowScale);\\nconst wy = numberRect.y;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_ShopBuy":"","Window_ShopBuy_RectJS:func":"\"const numberRect = this.numberWindowRect();\\n\\nconst ww = numberRect.width;\\nconst wh = numberRect.height;\\nconst wx = numberRect.x;\\nconst wy = numberRect.y;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_ItemCategory":"","Window_ItemCategory_RectJS:func":"\"const numberRect = this.numberWindowRect();\\n\\nconst ww = numberRect.width;\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = numberRect.x;\\nconst wy = numberRect.y;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_ShopSell":"","Window_ShopSell_RectJS:func":"\"const numberRect = this.numberWindowRect();\\n\\nconst scale = Scene_Shop.SHOP_BUST_STYLE_UI.windowScale;\\n\\nconst ww = numberRect.width;\\nconst wh = numberRect.height - this.calcWindowHeight(1, true);\\nconst wx = numberRect.x;\\nconst wy = numberRect.y + Math.ceil(this.calcWindowHeight(1, true) * scale);\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_ShopMsg":"","Window_ShopMsg_RectJS:func":"\"const ww = Math.min(Graphics.boxWidth, 816);\\nconst wh = this.calcWindowHeight(4, false);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = this.mainAreaBottom() - wh;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param SceneShopMsg:struct
 * @text Default Messages
 * @parent Scene_Shop
 * @type struct<SceneShopMsg>
 * @desc Default messages used if you don't adjust the
 * "Message Settings" in the Plugin Command.
 * @default {"welcome":"","welcome_Msg:json":"\"Welcome to the shop!\\nWhat would you like to buy?\"","welcome_Bust:str":"","welcome_Voice:str":"","leave":"","leave_Msg:json":"\"Thank you for your patronage!\\nBe sure to come back again!\"","leave_Bust:str":"","leave_Voice:str":"","commandBuy":"","commandBuy_Msg:json":"\"Take a look at our wares!\\nWhat catches your fancy?\"","commandBuy_Bust:str":"","commandBuy_Voice:str":"","onBuyOk":"","onBuyOk_Msg:json":"\"How many would you like to buy?\"","onBuyOk_Bust:str":"","onBuyOk_Voice:str":"","onBuyCancel":"","onBuyCancel_Msg:json":"\"Not buying? No problem!\\nTake a look at what else we've got!\"","onBuyCancel_Bust:str":"","onBuyCancel_Voice:str":"","doBuy":"","doBuy_Msg:json":"\"Thank you for your purchase!\\nAnything else you want to buy?\"","doBuy_Bust:str":"","doBuy_Voice:str":"","commandSell":"","commandSell_Msg:json":"\"You want to sell me some items?\\nHow interesting! Let's see what you have!\"","commandSell_Bust:str":"","commandSell_Voice:str":"","onSellOk":"","onSellOk_Msg:json":"\"How many would you like to sell?\"","onSellOk_Bust:str":"","onSellOk_Voice:str":"","onSellCancel":"","onSellCancel_Msg:json":"\"Not selling that? Not a problem!\\nLet me know if you have anything to sell!\"","onSellCancel_Bust:str":"","onSellCancel_Voice:str":"","doSell":"","doSell_Msg:json":"\"And here is your \\\\G!\\nAnything else you want to sell?\"","doSell_Bust:str":"","doSell_Voice:str":""}
 * 
 * @param Compatibility
 * 
 * @param Scene_Hospital
 * @text Scene_Hospital
 * @parent Compatibility
 *
 * @param SceneHospitalData:struct
 * @text Scene Settings
 * @parent Scene_Hospital
 * @type struct<SceneHospitalData>
 * @desc Bust Style UI settings applied to Scene_Hospital.
 * Requires VisuMZ_4_HospitalShop!
 * @default {"General":"","maxListSize:num":"8","fadeout:eval":"true","Exit":"","exitDelay:num":"1500","Scale":"","windowScale:num":"0.8","Windows":"","Window_HospitalCommand":"","Window_HospitalCommand_RectJS:func":"\"const ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(this.getTotalCommandWindowCommands(), true);\\nconst wx = Math.floor((Graphics.boxWidth - Math.min(Graphics.boxWidth, 816)) / 2);\\nconst wy = this.mainAreaTop() + 100;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_Gold":"","Window_Gold_RectJS:func":"\"const scale = Scene_Hospital.SHOP_BUST_STYLE_UI.windowScale;\\n\\nconst ww = this.mainCommandWidth() / scale;\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = this.mainAreaBottom() - this.calcWindowHeight(4, false) - Math.floor(wh * scale);\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_HospitalHealList":"","Window_HospitalHealList_RectJS:func":"\"const scale = Scene_Hospital.SHOP_BUST_STYLE_UI.windowScale;\\nconst itemMax = Scene_Hospital.SHOP_BUST_STYLE_UI.maxListSize;\\n\\nconst mw = Math.min(Graphics.boxWidth, 816);\\nconst mh = Math.ceil(this.mainAreaHeight() - this.calcWindowHeight(4, false) - (this.calcWindowHeight(1, true) * scale));\\n\\nconst bw = Math.min(((Graphics.boxWidth - mw) / 2), 192);\\nconst ww = mw + bw;\\nconst wh = Math.min(Math.floor(mh / scale), this.calcWindowHeight(itemMax, true));\\nconst wx = Math.floor((Graphics.boxWidth - mw) / 4);\\nconst wy = this.mainAreaTop() + Math.floor((mh - (wh * scale)) / 2);\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_ShopMsg":"","Window_ShopMsg_RectJS:func":"\"const ww = Math.min(Graphics.boxWidth, 816);\\nconst wh = this.calcWindowHeight(4, false);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = this.mainAreaBottom() - wh;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param SceneHospitalMsg:struct
 * @text Default Messages
 * @parent Scene_Hospital
 * @type struct<SceneHospitalMsg>
 * @desc Default messages used if no adjustments are made.
 * Requires VisuMZ_4_HospitalShop!
 * @default {"welcome":"","welcome_Msg:json":"\"Welcome to the hospital!\\nWhat brings you in?\"","welcome_Bust:str":"","welcome_Voice:str":"","leave":"","leave_Msg:json":"\"Have a good day!\\nBe sure to stay healthy!\"","leave_Bust:str":"","leave_Voice:str":"","commandHeal":"","commandHeal_Msg:json":"\"Who needs some healing?\"","commandHeal_Bust:str":"","commandHeal_Voice:str":"","onHealListOk":"","onHealListOk_Msg:json":"\"There you go!\\nAll patched up!\"","onHealListOk_Bust:str":"","onHealListOk_Voice:str":"","onHealListCancel":"","onHealListCancel_Msg:json":"\"Is there anyone else who needs some healing?\"","onHealListCancel_Bust:str":"","onHealListCancel_Voice:str":""}
 * 
 * @param Scene_RecruitBoard
 * @text Scene_RecruitBoard
 * @parent Compatibility
 *
 * @param SceneRecruitData:struct
 * @text Scene Settings
 * @parent Scene_RecruitBoard
 * @type struct<SceneRecruitData>
 * @desc Bust Style UI settings applied to Scene_RecruitBoard.
 * Requires VisuMZ_4_RecruitingBoard!
 * @default {"General":"","maxListSize:num":"2","fadeout:eval":"true","Exit":"","exitDelay:num":"1500","Scale":"","windowScale:num":"0.8","skillScale:num":"0.6","Windows":"","Window_Command":"","Window_Command_RectJS:func":"\"const ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(this.getTotalCommandWindowCommands(), true);\\nconst wx = Math.floor((Graphics.boxWidth - Math.min(Graphics.boxWidth, 816)) / 2);\\nconst wy = this.mainAreaTop() + 100;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_Gold":"","Window_Gold_RectJS:func":"\"const scale = Scene_RecruitBoard.SHOP_BUST_STYLE_UI.windowScale;\\n\\nconst ww = this.mainCommandWidth() / scale;\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = this.mainAreaBottom() - this.calcWindowHeight(4, false) - Math.floor(wh * scale);\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_List":"","Window_List_RectJS:func":"\"const itemMax = Scene_RecruitBoard.SHOP_BUST_STYLE_UI.maxListSize;\\n\\nconst mw = Math.min(Graphics.boxWidth, 816);\\nconst mh = Math.ceil(this.mainAreaHeight() - this.calcWindowHeight(4, false) - (this.calcWindowHeight(1, false)));\\n\\nconst ww = 576;\\nconst wh = this.calcActorWindowHeight(itemMax, true);\\nconst wx = Math.floor((Graphics.boxWidth - mw) / 4);\\nconst wy = this.mainAreaTop() + Math.floor((mh - wh) / 2);\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_Skill":"","Window_Skill_RectJS:func":"\"const skillScale = Scene_RecruitBoard.SHOP_BUST_STYLE_UI.skillScale;\\nconst listRect = this.listWindowRect();\\n\\nconst ww = 352;\\nconst wh = Math.round(listRect.height / skillScale);\\nconst wx = listRect.x + listRect.width;\\nconst wy = listRect.y;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_ShopMsg":"","Window_ShopMsg_RectJS:func":"\"const ww = Math.min(Graphics.boxWidth, 816);\\nconst wh = this.calcWindowHeight(4, false);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = this.mainAreaBottom() - wh;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param SceneRecruitMsg:struct
 * @text Default Messages
 * @parent Scene_RecruitBoard
 * @type struct<SceneRecruitMsg>
 * @desc Default messages used if no adjustments are made.
 * Requires VisuMZ_4_RecruitingBoard!
 * @default {"welcome":"","welcome_Msg:json":"\"Huh?\\nWhat brings you here?\"","welcome_Bust:str":"","welcome_Voice:str":"","leave":"","leave_Msg:json":"\"Stay alive, mate.\\nDon't do anything stupid.\"","leave_Bust:str":"","leave_Voice:str":"","commandRecruit":"","commandRecruit_Msg:json":"\"You recruiting some adventurers?\\nWell, take a look at who's available.\"","commandRecruit_Bust:str":"","commandRecruit_Voice:str":"","onListOk":"","onListOk_Msg:json":"\"And hired.\\nGo and make some room in your party.\"","onListOk_Bust:str":"","onListOk_Voice:str":"","onListCancel":"","onListCancel_Msg:json":"\"Not interested, eh?\"","onListCancel_Bust:str":"","onListCancel_Voice:str":""}
 * 
 * @param Scene_SkillShop
 * @text Scene_SkillShop
 * @parent Compatibility
 *
 * @param SceneSkillShopData:struct
 * @text Scene Settings
 * @parent Scene_SkillShop
 * @type struct<SceneSkillShopData>
 * @desc Bust Style UI settings applied to Scene_SkillShop.
 * Requires VisuMZ_4_SkillShop!
 * @default {"General":"","maxListSize:num":"8","fadeout:eval":"true","Exit":"","exitDelay:num":"1500","Scale":"","windowScale:num":"0.8","Windows":"","Window_Command":"","Window_Command_RectJS:func":"\"const ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(this.getTotalCommandWindowCommands(), true);\\nconst wx = Math.floor((Graphics.boxWidth - Math.min(Graphics.boxWidth, 816)) / 2);\\nconst wy = this.mainAreaTop() + 100;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_Gold":"","Window_Gold_RectJS:func":"\"const scale = Scene_SkillShop.SHOP_BUST_STYLE_UI.windowScale;\\n\\nconst ww = this.mainCommandWidth() / scale;\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = this.mainAreaBottom() - this.calcWindowHeight(4, false) - Math.floor(wh * scale);\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_Actor":"","Window_Actor_RectJS:func":"\"const scale = Scene_SkillShop.SHOP_BUST_STYLE_UI.windowScale;\\nconst itemMax = Scene_SkillShop.SHOP_BUST_STYLE_UI.maxListSize;\\n\\nconst mw = Math.min(Graphics.boxWidth, 816);\\nconst mh = Math.ceil(this.mainAreaHeight() - this.calcWindowHeight(4, false) - (this.calcWindowHeight(1, true) * scale));\\n\\nconst ww = Math.ceil(mw / 2);\\nconst wh = Math.min(Math.floor(mh / scale), this.calcWindowHeight(itemMax, true));\\nconst wx = Math.floor((Graphics.boxWidth - mw) / 4);\\nconst wy = this.mainAreaTop() + Math.floor((mh - (wh * scale)) / 2);\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_Skill":"","Window_Skill_RectJS:func":"\"const actorWindow = this.actorListWindowRect();\\nconst scale = Scene_SkillShop.SHOP_BUST_STYLE_UI.windowScale;\\n\\nconst ww = actorWindow.width;\\nconst wh = actorWindow.height;\\nconst wx = actorWindow.x + Math.ceil(actorWindow.width * scale);\\nconst wy = actorWindow.y;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_ShopMsg":"","Window_ShopMsg_RectJS:func":"\"const ww = Math.min(Graphics.boxWidth, 816);\\nconst wh = this.calcWindowHeight(4, false);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = this.mainAreaBottom() - wh;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param SceneSkillShopMsg:struct
 * @text Default Messages
 * @parent Scene_SkillShop
 * @type struct<SceneSkillShopMsg>
 * @desc Default messages used if no adjustments are made.
 * Requires Scene_SkillShop!
 * @default {"welcome":"","welcome_Msg:json":"\"An interesting customer has arrived!\\nLooking to tap into the arcane?\"","welcome_Bust:str":"","welcome_Voice:str":"","leave":"","leave_Msg:json":"\"Come back when you're interested.\\nDon't be a stranger.\"","leave_Bust:str":"","leave_Voice:str":"","commandLearn":"","commandLearn_Msg:json":"\"Who's interested in learning something new?\"","commandLearn_Bust:str":"","commandLearn_Voice:str":"","onActorListOk":"","onActorListOk_Msg:json":"\"And what should be learned?\"","onActorListOk_Bust:str":"","onActorListOk_Voice:str":"","onActorListCancel":"","onActorListCancel_Msg:json":"\"Changed your mind?\"","onActorListCancel_Bust:str":"","onActorListCancel_Voice:str":"","onSkillListOk":"","onSkillListOk_Msg:json":"\"And a new skill has been acquired!\\nBe sure to practice!\"","onSkillListOk_Bust:str":"","onSkillListOk_Voice:str":"","onSkillListCancel":"","onSkillListCancel_Msg:json":"\"Be not afraid of trying out something new!\"","onSkillListCancel_Bust:str":"","onSkillListCancel_Voice:str":""}
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
 * Bust Settings Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Bust:
 *
 * @param bustAnchorX:num
 * @text Anchor X
 * @parent bustFilename:str
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param bustAnchorY:num
 * @text Anchor Y
 * @parent bustFilename:str
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 1.0
 *
 * @param bustPositionX:num
 * @text Position X
 * @parent bustFilename:str
 * @desc Bust position X value. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.7
 *
 * @param bustPositionY:num
 * @text Position Y
 * @parent bustFilename:str
 * @desc Bust position Y value. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 1.0
 *
 */
/* ----------------------------------------------------------------------------
 * Voice Line Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VoiceLine:
 *
 * @param voiceDelay:num
 * @text Delay MS
 * @type number
 * @desc Delay the playing of voice lines to not conflict with
 * any shop sound effects. 1000 milliseconds = 1 second.
 * @default 500
 *
 * @param volume:num
 * @text Volume
 * @type number
 * @max 100
 * @desc Volume of the voice line played.
 * @default 90
 *
 * @param pitch:num
 * @text Pitch
 * @type number
 * @desc Pitch of the voice line played.
 * @default 100
 *
 * @param pan:num
 * @text Pan
 * @desc Pan of the voice line played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * General Shop Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SceneShopData:
 *
 * @param General
 * @text General Settings
 *
 * @param maxListSize:num
 * @text Max Rows
 * @parent General
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for stylized shop lists?
 * @default 8
 *
 * @param fadeout:eval
 * @text Fade In/Out?
 * @parent General
 * @type boolean
 * @on Allow Fading
 * @off No Fading
 * @desc Allow fade in/out for stylized general shops?
 * @default true
 *
 * @param Exit
 * @text Exit Shop
 *
 * @param exitDelay:num
 * @text Exit Delay MS
 * @parent Exit
 * @type number
 * @desc What is the delay after exiting the shop scene in
 * milliseconds? 1000 milliseconds = 1 second.
 * @default 1500
 *
 * @param Scale
 * @text Scaling
 *
 * @param windowScale:num
 * @text General Window Scale
 * @parent Scale
 * @desc What is the scale used for most general windows?
 * 0.0 - 0%; 0.5 - 50%; 1.0 - 100%
 * @default 0.8
 *
 * @param statusScale:num
 * @text Status Window Scale
 * @parent Scale
 * @desc What is the scale used for the shop status window?
 * 0.0 - 0%; 0.5 - 50%; 1.0 - 100%
 * @default 0.6
 * 
 * @param Windows
 * @text Window Settings
 *
 * @param Window_ShopCommand
 * @text Command Window
 * @parent Windows
 *
 * @param Window_ShopCommand_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ShopCommand
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(this.getTotalCommandWindowCommands(), true);\nconst wx = Math.floor((Graphics.boxWidth - Math.min(Graphics.boxWidth, 816)) / 2);\nconst wy = this.mainAreaTop() + 100;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_Gold
 * @text Gold Window
 * @parent Windows
 *
 * @param Window_Gold_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_Gold
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const scale = Scene_Shop.SHOP_BUST_STYLE_UI.windowScale;\n\nconst ww = this.mainCommandWidth() / scale;\nconst wh = this.calcWindowHeight(1, true);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = this.mainAreaBottom() - this.calcWindowHeight(4, false) - Math.floor(wh * scale);\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_ShopNumber
 * @text Number Window
 * @parent Windows
 *
 * @param Window_ShopNumber_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ShopNumber
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const scale = Scene_Shop.SHOP_BUST_STYLE_UI.windowScale;\nconst itemMax = Scene_Shop.SHOP_BUST_STYLE_UI.maxListSize;\n\nconst mw = Math.min(Graphics.boxWidth, 816);\nconst mh = Math.ceil(this.mainAreaHeight() - this.calcWindowHeight(4, false) - (this.calcWindowHeight(1, true) * scale));\n\nconst bw = Math.min(((Graphics.boxWidth - mw) / 2), 192);\nconst ww = mw - this.statusWidth() + bw;\nconst wh = Math.min(Math.floor(mh / scale), this.calcWindowHeight(itemMax, true));\nconst wx = Math.floor((Graphics.boxWidth - mw) / 4);\nconst wy = this.mainAreaTop() + Math.floor((mh - (wh * scale)) / 2);\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_ShopStatus
 * @text Status Window
 * @parent Windows
 *
 * @param Window_ShopStatus_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ShopStatus
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const numberRect = this.numberWindowRect();\n\nconst windowScale = Scene_Shop.SHOP_BUST_STYLE_UI.windowScale;\nconst statusScale = Scene_Shop.SHOP_BUST_STYLE_UI.statusScale;\n\nconst ww = Math.floor(this.statusWidth());\nconst wh = Math.floor(numberRect.height / (statusScale / windowScale));\nconst wx = numberRect.x + Math.ceil(numberRect.width * windowScale);\nconst wy = numberRect.y;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_ShopBuy
 * @text Buy List Window
 * @parent Windows
 *
 * @param Window_ShopBuy_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ShopBuy
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const numberRect = this.numberWindowRect();\n\nconst ww = numberRect.width;\nconst wh = numberRect.height;\nconst wx = numberRect.x;\nconst wy = numberRect.y;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_ItemCategory
 * @text Sell Category Window
 * @parent Windows
 *
 * @param Window_ItemCategory_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ItemCategory
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const numberRect = this.numberWindowRect();\n\nconst ww = numberRect.width;\nconst wh = this.calcWindowHeight(1, true);\nconst wx = numberRect.x;\nconst wy = numberRect.y;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_ShopSell
 * @text Sell List Window
 * @parent Windows
 *
 * @param Window_ShopSell_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ShopSell
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const numberRect = this.numberWindowRect();\n\nconst scale = Scene_Shop.SHOP_BUST_STYLE_UI.windowScale;\n\nconst ww = numberRect.width;\nconst wh = numberRect.height - this.calcWindowHeight(1, true);\nconst wx = numberRect.x;\nconst wy = numberRect.y + Math.ceil(this.calcWindowHeight(1, true) * scale);\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_ShopMsg
 * @text Message Window
 * @parent Windows
 *
 * @param Window_ShopMsg_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ShopMsg
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.min(Graphics.boxWidth, 816);\nconst wh = this.calcWindowHeight(4, false);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = this.mainAreaBottom() - wh;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Scene_Shop Message Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SceneShopMsg:
 *
 * @param welcome
 * @text Welcome Message
 *
 * @param welcome_Msg:json
 * @text Message
 * @parent welcome
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Welcome to the shop!\nWhat would you like to buy?"
 *
 * @param welcome_Bust:str
 * @text Bust Change
 * @parent welcome
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param welcome_Voice:str
 * @text Voice Line
 * @parent welcome
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param leave
 * @text Leave Message
 *
 * @param leave_Msg:json
 * @text Message
 * @parent leave
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Thank you for your patronage!\nBe sure to come back again!"
 *
 * @param leave_Bust:str
 * @text Bust Change
 * @parent leave
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param leave_Voice:str
 * @text Voice Line
 * @parent leave
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param commandBuy
 * @text Buy Command
 *
 * @param commandBuy_Msg:json
 * @text Message
 * @parent commandBuy
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Take a look at our wares!\nWhat catches your fancy?"
 *
 * @param commandBuy_Bust:str
 * @text Bust Change
 * @parent commandBuy
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param commandBuy_Voice:str
 * @text Voice Line
 * @parent commandBuy
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param onBuyOk
 * @text About to Buy
 *
 * @param onBuyOk_Msg:json
 * @text Message
 * @parent onBuyOk
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "How many would you like to buy?"
 *
 * @param onBuyOk_Bust:str
 * @text Bust Change
 * @parent onBuyOk
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param onBuyOk_Voice:str
 * @text Voice Line
 * @parent onBuyOk
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param onBuyCancel
 * @text Cancel Buying
 *
 * @param onBuyCancel_Msg:json
 * @text Message
 * @parent onBuyCancel
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Not buying? No problem!\nTake a look at what else we've got!"
 *
 * @param onBuyCancel_Bust:str
 * @text Bust Change
 * @parent onBuyCancel
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param onBuyCancel_Voice:str
 * @text Voice Line
 * @parent onBuyCancel
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param doBuy
 * @text Buy Complete
 *
 * @param doBuy_Msg:json
 * @text Message
 * @parent doBuy
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Thank you for your purchase!\nAnything else you want to buy?"
 *
 * @param doBuy_Bust:str
 * @text Bust Change
 * @parent doBuy
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param doBuy_Voice:str
 * @text Voice Line
 * @parent doBuy
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param commandSell
 * @text Sell Command
 *
 * @param commandSell_Msg:json
 * @text Message
 * @parent commandSell
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "You want to sell me some items?\nHow interesting! Let's see what you have!"
 *
 * @param commandSell_Bust:str
 * @text Bust Change
 * @parent commandSell
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param commandSell_Voice:str
 * @text Voice Line
 * @parent commandSell
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param onSellOk
 * @text About to Sell
 *
 * @param onSellOk_Msg:json
 * @text Message
 * @parent onSellOk
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "How many would you like to sell?"
 *
 * @param onSellOk_Bust:str
 * @text Bust Change
 * @parent onSellOk
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param onSellOk_Voice:str
 * @text Voice Line
 * @parent onSellOk
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param onSellCancel
 * @text Cancel Selling
 *
 * @param onSellCancel_Msg:json
 * @text Message
 * @parent onSellCancel
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Not selling that? Not a problem!\nLet me know if you have anything to sell!"
 *
 * @param onSellCancel_Bust:str
 * @text Bust Change
 * @parent onSellCancel
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param onSellCancel_Voice:str
 * @text Voice Line
 * @parent onSellCancel
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param doSell
 * @text Sell Complete
 *
 * @param doSell_Msg:json
 * @text Message
 * @parent doSell
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "And here is your \\G!\nAnything else you want to sell?"
 *
 * @param doSell_Bust:str
 * @text Bust Change
 * @parent doSell
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param doSell_Voice:str
 * @text Voice Line
 * @parent doSell
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Scene Hospital Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SceneHospitalData:
 *
 * @param General
 * @text General Settings
 *
 * @param maxListSize:num
 * @text Max Rows
 * @parent General
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for stylized shop lists?
 * @default 8
 *
 * @param fadeout:eval
 * @text Fade In/Out?
 * @parent General
 * @type boolean
 * @on Allow Fading
 * @off No Fading
 * @desc Allow fade in/out for stylized general shops?
 * @default true
 *
 * @param Exit
 * @text Exit Shop
 *
 * @param exitDelay:num
 * @text Exit Delay MS
 * @parent Exit
 * @type number
 * @desc What is the delay after exiting the shop scene in
 * milliseconds? 1000 milliseconds = 1 second.
 * @default 1500
 *
 * @param Scale
 * @text Scaling
 *
 * @param windowScale:num
 * @text General Window Scale
 * @parent Scale
 * @desc What is the scale used for most general windows?
 * 0.0 - 0%; 0.5 - 50%; 1.0 - 100%
 * @default 0.8
 * 
 * @param Windows
 * @text Window Settings
 *
 * @param Window_HospitalCommand
 * @text Command Window
 * @parent Windows
 *
 * @param Window_HospitalCommand_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_HospitalCommand
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(this.getTotalCommandWindowCommands(), true);\nconst wx = Math.floor((Graphics.boxWidth - Math.min(Graphics.boxWidth, 816)) / 2);\nconst wy = this.mainAreaTop() + 100;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_Gold
 * @text Gold Window
 * @parent Windows
 *
 * @param Window_Gold_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_Gold
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const scale = Scene_Hospital.SHOP_BUST_STYLE_UI.windowScale;\n\nconst ww = this.mainCommandWidth() / scale;\nconst wh = this.calcWindowHeight(1, true);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = this.mainAreaBottom() - this.calcWindowHeight(4, false) - Math.floor(wh * scale);\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_HospitalHealList
 * @text Heal List Window
 * @parent Windows
 *
 * @param Window_HospitalHealList_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_HospitalHealList
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const scale = Scene_Hospital.SHOP_BUST_STYLE_UI.windowScale;\nconst itemMax = Scene_Hospital.SHOP_BUST_STYLE_UI.maxListSize;\n\nconst mw = Math.min(Graphics.boxWidth, 816);\nconst mh = Math.ceil(this.mainAreaHeight() - this.calcWindowHeight(4, false) - (this.calcWindowHeight(1, true) * scale));\n\nconst bw = Math.min(((Graphics.boxWidth - mw) / 2), 192);\nconst ww = mw + bw;\nconst wh = Math.min(Math.floor(mh / scale), this.calcWindowHeight(itemMax, true));\nconst wx = Math.floor((Graphics.boxWidth - mw) / 4);\nconst wy = this.mainAreaTop() + Math.floor((mh - (wh * scale)) / 2);\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_ShopMsg
 * @text Message Window
 * @parent Windows
 *
 * @param Window_ShopMsg_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ShopMsg
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.min(Graphics.boxWidth, 816);\nconst wh = this.calcWindowHeight(4, false);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = this.mainAreaBottom() - wh;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Scene_Hospital Message Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SceneHospitalMsg:
 *
 * @param welcome
 * @text Welcome Message
 *
 * @param welcome_Msg:json
 * @text Message
 * @parent welcome
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Welcome to the hospital!\nWhat brings you in?"
 *
 * @param welcome_Bust:str
 * @text Bust Change
 * @parent welcome
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param welcome_Voice:str
 * @text Voice Line
 * @parent welcome
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param leave
 * @text Leave Message
 *
 * @param leave_Msg:json
 * @text Message
 * @parent leave
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Have a good day!\nBe sure to stay healthy!"
 *
 * @param leave_Bust:str
 * @text Bust Change
 * @parent leave
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param leave_Voice:str
 * @text Voice Line
 * @parent leave
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param commandHeal
 * @text Heal Command
 *
 * @param commandHeal_Msg:json
 * @text Message
 * @parent commandHeal
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Who needs some healing?"
 *
 * @param commandHeal_Bust:str
 * @text Bust Change
 * @parent commandHeal
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param commandHeal_Voice:str
 * @text Voice Line
 * @parent commandHeal
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param onHealListOk
 * @text Heal OK
 *
 * @param onHealListOk_Msg:json
 * @text Message
 * @parent onHealListOk
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "There you go!\nAll patched up!"
 *
 * @param onHealListOk_Bust:str
 * @text Bust Change
 * @parent onHealListOk
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param onHealListOk_Voice:str
 * @text Voice Line
 * @parent onHealListOk
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param onHealListCancel
 * @text Cancel Healing
 *
 * @param onHealListCancel_Msg:json
 * @text Message
 * @parent onHealListCancel
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Is there anyone else who needs some healing?"
 *
 * @param onHealListCancel_Bust:str
 * @text Bust Change
 * @parent onHealListCancel
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param onHealListCancel_Voice:str
 * @text Voice Line
 * @parent onHealListCancel
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Recruiting Board Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SceneRecruitData:
 *
 * @param General
 * @text General Settings
 *
 * @param maxListSize:num
 * @text Max Rows
 * @parent General
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for stylized shop lists?
 * @default 8
 *
 * @param fadeout:eval
 * @text Fade In/Out?
 * @parent General
 * @type boolean
 * @on Allow Fading
 * @off No Fading
 * @desc Allow fade in/out for stylized general shops?
 * @default true
 *
 * @param Exit
 * @text Exit Shop
 *
 * @param exitDelay:num
 * @text Exit Delay MS
 * @parent Exit
 * @type number
 * @desc What is the delay after exiting the shop scene in
 * milliseconds? 1000 milliseconds = 1 second.
 * @default 1500
 *
 * @param Scale
 * @text Scaling
 *
 * @param windowScale:num
 * @text General Window Scale
 * @parent Scale
 * @desc What is the scale used for most general windows?
 * 0.0 - 0%; 0.5 - 50%; 1.0 - 100%
 * @default 0.8
 *
 * @param skillScale:num
 * @text Skill Window Scale
 * @parent Scale
 * @desc What is the scale used for the skill window?
 * 0.0 - 0%; 0.5 - 50%; 1.0 - 100%
 * @default 0.6
 * 
 * @param Windows
 * @text Window Settings
 *
 * @param Window_Command
 * @text Command Window
 * @parent Windows
 *
 * @param Window_Command_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_Command
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(this.getTotalCommandWindowCommands(), true);\nconst wx = Math.floor((Graphics.boxWidth - Math.min(Graphics.boxWidth, 816)) / 2);\nconst wy = this.mainAreaTop() + 100;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_Gold
 * @text Gold Window
 * @parent Windows
 *
 * @param Window_Gold_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_Gold
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const scale = Scene_RecruitBoard.SHOP_BUST_STYLE_UI.windowScale;\n\nconst ww = this.mainCommandWidth() / scale;\nconst wh = this.calcWindowHeight(1, true);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = this.mainAreaBottom() - this.calcWindowHeight(4, false) - Math.floor(wh * scale);\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_List
 * @text List Window
 * @parent Windows
 *
 * @param Window_List_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_List
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const itemMax = Scene_RecruitBoard.SHOP_BUST_STYLE_UI.maxListSize;\n\nconst mw = Math.min(Graphics.boxWidth, 816);\nconst mh = Math.ceil(this.mainAreaHeight() - this.calcWindowHeight(4, false) - (this.calcWindowHeight(1, false)));\n\nconst ww = 576;\nconst wh = this.calcActorWindowHeight(itemMax, true);\nconst wx = Math.floor((Graphics.boxWidth - mw) / 4);\nconst wy = this.mainAreaTop() + Math.floor((mh - wh) / 2);\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_Skill
 * @text Skill Window
 * @parent Windows
 *
 * @param Window_Skill_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_Skill
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const skillScale = Scene_RecruitBoard.SHOP_BUST_STYLE_UI.skillScale;\nconst listRect = this.listWindowRect();\n\nconst ww = 352;\nconst wh = Math.round(listRect.height / skillScale);\nconst wx = listRect.x + listRect.width;\nconst wy = listRect.y;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_ShopMsg
 * @text Message Window
 * @parent Windows
 *
 * @param Window_ShopMsg_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ShopMsg
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.min(Graphics.boxWidth, 816);\nconst wh = this.calcWindowHeight(4, false);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = this.mainAreaBottom() - wh;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Scene_RecruitBoard Message Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SceneRecruitMsg:
 *
 * @param welcome
 * @text Welcome Message
 *
 * @param welcome_Msg:json
 * @text Message
 * @parent welcome
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Huh?\nWhat brings you here?"
 *
 * @param welcome_Bust:str
 * @text Bust Change
 * @parent welcome
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param welcome_Voice:str
 * @text Voice Line
 * @parent welcome
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param leave
 * @text Leave Message
 *
 * @param leave_Msg:json
 * @text Message
 * @parent leave
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Stay alive, mate.\nDon't do anything stupid."
 *
 * @param leave_Bust:str
 * @text Bust Change
 * @parent leave
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param leave_Voice:str
 * @text Voice Line
 * @parent leave
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param commandRecruit
 * @text Recruit Command
 *
 * @param commandRecruit_Msg:json
 * @text Message
 * @parent commandRecruit
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "You recruiting some adventurers?\nWell, take a look at who's available."
 *
 * @param commandRecruit_Bust:str
 * @text Bust Change
 * @parent commandRecruit
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param commandRecruit_Voice:str
 * @text Voice Line
 * @parent commandRecruit
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param onListOk
 * @text About to Recruit
 *
 * @param onListOk_Msg:json
 * @text Message
 * @parent onListOk
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "And hired.\nGo and make some room in your party."
 *
 * @param onListOk_Bust:str
 * @text Bust Change
 * @parent onListOk
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param onListOk_Voice:str
 * @text Voice Line
 * @parent onListOk
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param onListCancel
 * @text Cancel Buying
 *
 * @param onListCancel_Msg:json
 * @text Message
 * @parent onListCancel
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Not interested, eh?"
 *
 * @param onListCancel_Bust:str
 * @text Bust Change
 * @parent onListCancel
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param onListCancel_Voice:str
 * @text Voice Line
 * @parent onListCancel
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Shop Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SceneSkillShopData:
 *
 * @param General
 * @text General Settings
 *
 * @param maxListSize:num
 * @text Max Rows
 * @parent General
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for stylized shop lists?
 * @default 8
 *
 * @param fadeout:eval
 * @text Fade In/Out?
 * @parent General
 * @type boolean
 * @on Allow Fading
 * @off No Fading
 * @desc Allow fade in/out for stylized general shops?
 * @default true
 *
 * @param Exit
 * @text Exit Shop
 *
 * @param exitDelay:num
 * @text Exit Delay MS
 * @parent Exit
 * @type number
 * @desc What is the delay after exiting the shop scene in
 * milliseconds? 1000 milliseconds = 1 second.
 * @default 1500
 *
 * @param Scale
 * @text Scaling
 *
 * @param windowScale:num
 * @text General Window Scale
 * @parent Scale
 * @desc What is the scale used for most general windows?
 * 0.0 - 0%; 0.5 - 50%; 1.0 - 100%
 * @default 0.8
 * 
 * @param Windows
 * @text Window Settings
 *
 * @param Window_Command
 * @text Command Window
 * @parent Windows
 *
 * @param Window_Command_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_Command
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default  "const ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(this.getTotalCommandWindowCommands(), true);\nconst wx = Math.floor((Graphics.boxWidth - Math.min(Graphics.boxWidth, 816)) / 2);\nconst wy = this.mainAreaTop() + 100;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_Gold
 * @text Gold Window
 * @parent Windows
 *
 * @param Window_Gold_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_Gold
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const scale = Scene_SkillShop.SHOP_BUST_STYLE_UI.windowScale;\n\nconst ww = this.mainCommandWidth() / scale;\nconst wh = this.calcWindowHeight(1, true);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = this.mainAreaBottom() - this.calcWindowHeight(4, false) - Math.floor(wh * scale);\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_Actor
 * @text Actor Window
 * @parent Windows
 *
 * @param Window_Actor_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_Actor
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const scale = Scene_SkillShop.SHOP_BUST_STYLE_UI.windowScale;\nconst itemMax = Scene_SkillShop.SHOP_BUST_STYLE_UI.maxListSize;\n\nconst mw = Math.min(Graphics.boxWidth, 816);\nconst mh = Math.ceil(this.mainAreaHeight() - this.calcWindowHeight(4, false) - (this.calcWindowHeight(1, true) * scale));\n\nconst ww = Math.ceil(mw / 2);\nconst wh = Math.min(Math.floor(mh / scale), this.calcWindowHeight(itemMax, true));\nconst wx = Math.floor((Graphics.boxWidth - mw) / 4);\nconst wy = this.mainAreaTop() + Math.floor((mh - (wh * scale)) / 2);\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_Skill
 * @text Skill Window
 * @parent Windows
 *
 * @param Window_Skill_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_Skill
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const actorWindow = this.actorListWindowRect();\nconst scale = Scene_SkillShop.SHOP_BUST_STYLE_UI.windowScale;\n\nconst ww = actorWindow.width;\nconst wh = actorWindow.height;\nconst wx = actorWindow.x + Math.ceil(actorWindow.width * scale);\nconst wy = actorWindow.y;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Window_ShopMsg
 * @text Message Window
 * @parent Windows
 *
 * @param Window_ShopMsg_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ShopMsg
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.min(Graphics.boxWidth, 816);\nconst wh = this.calcWindowHeight(4, false);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = this.mainAreaBottom() - wh;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Scene_SkillShop Message Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SceneSkillShopMsg:
 *
 * @param welcome
 * @text Welcome Message
 *
 * @param welcome_Msg:json
 * @text Message
 * @parent welcome
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "An interesting customer has arrived!\nLooking to tap into the arcane?"
 *
 * @param welcome_Bust:str
 * @text Bust Change
 * @parent welcome
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param welcome_Voice:str
 * @text Voice Line
 * @parent welcome
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param leave
 * @text Leave Message
 *
 * @param leave_Msg:json
 * @text Message
 * @parent leave
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Come back when you're interested.\nDon't be a stranger."
 *
 * @param leave_Bust:str
 * @text Bust Change
 * @parent leave
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param leave_Voice:str
 * @text Voice Line
 * @parent leave
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param commandLearn
 * @text Learn Command
 *
 * @param commandLearn_Msg:json
 * @text Message
 * @parent commandLearn
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Who's interested in learning something new?"
 *
 * @param commandLearn_Bust:str
 * @text Bust Change
 * @parent commandLearn
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param commandLearn_Voice:str
 * @text Voice Line
 * @parent commandLearn
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param onActorListOk
 * @text Pick Actor
 *
 * @param onActorListOk_Msg:json
 * @text Message
 * @parent onActorListOk
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "And what should be learned?"
 *
 * @param onActorListOk_Bust:str
 * @text Bust Change
 * @parent onActorListOk
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param onActorListOk_Voice:str
 * @text Voice Line
 * @parent onActorListOk
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param onActorListCancel
 * @text Cancel Actor
 *
 * @param onActorListCancel_Msg:json
 * @text Message
 * @parent onActorListCancel
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Changed your mind?"
 *
 * @param onActorListCancel_Bust:str
 * @text Bust Change
 * @parent onActorListCancel
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param onActorListCancel_Voice:str
 * @text Voice Line
 * @parent onActorListCancel
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 * 
 * @param onSkillListOk
 * @text About to Learn
 *
 * @param onSkillListOk_Msg:json
 * @text Message
 * @parent onSkillListOk
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "And a new skill has been acquired!\nBe sure to practice!"
 *
 * @param onSkillListOk_Bust:str
 * @text Bust Change
 * @parent onSkillListOk
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param onSkillListOk_Voice:str
 * @text Voice Line
 * @parent onSkillListOk
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 * @param onSkillListCancel
 * @text Cancel Learning
 *
 * @param onSkillListCancel_Msg:json
 * @text Message
 * @parent onSkillListCancel
 * @type note
 * @desc Message used for this shop situation.
 * Text codes allowed.
 * @default "Be not afraid of trying out something new!"
 *
 * @param onSkillListCancel_Bust:str
 * @text Bust Change
 * @parent onSkillListCancel
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Changes bust graphic when this message is displayed.
 * Leave empty to not use.
 * @default 
 *
 * @param onSkillListCancel_Voice:str
 * @text Voice Line
 * @parent onSkillListCancel
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Voice line used for this message text.
 * Requires VisuMZ_2_VoiceActControl! Leave empty to not use.
 * @default 
 *
 */
//=============================================================================

const _0x42c18c=_0x3ef4;(function(_0x5abf17,_0x2e57ca){const _0x32f03b=_0x3ef4,_0x374348=_0x5abf17();while(!![]){try{const _0x21d9af=parseInt(_0x32f03b(0xf6))/0x1*(-parseInt(_0x32f03b(0x145))/0x2)+-parseInt(_0x32f03b(0x128))/0x3*(-parseInt(_0x32f03b(0x139))/0x4)+-parseInt(_0x32f03b(0x1ca))/0x5*(parseInt(_0x32f03b(0xc1))/0x6)+-parseInt(_0x32f03b(0x166))/0x7*(parseInt(_0x32f03b(0xd6))/0x8)+parseInt(_0x32f03b(0x1a7))/0x9+-parseInt(_0x32f03b(0xfc))/0xa+parseInt(_0x32f03b(0x180))/0xb;if(_0x21d9af===_0x2e57ca)break;else _0x374348['push'](_0x374348['shift']());}catch(_0x388f03){_0x374348['push'](_0x374348['shift']());}}}(_0xb136,0x65223));var label=_0x42c18c(0x15c),tier=tier||0x0,dependencies=['VisuMZ_0_CoreEngine',_0x42c18c(0x17a)],pluginData=$plugins['filter'](function(_0x280663){const _0x4a9e35=_0x42c18c;return _0x280663[_0x4a9e35(0x138)]&&_0x280663[_0x4a9e35(0xde)][_0x4a9e35(0x17b)]('['+label+']');})[0x0];VisuMZ[label][_0x42c18c(0x141)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x42c18c(0x172)]=function(_0x3332e4,_0x45c231){const _0x125445=_0x42c18c;for(const _0x44db03 in _0x45c231){if(_0x125445(0x1ba)!=='iEviu')return this['getShopBustStyleUI_SellWindow_Rect']();else{if(_0x44db03[_0x125445(0xdd)](/(.*):(.*)/i)){const _0x2f12e9=String(RegExp['$1']),_0x2a8e05=String(RegExp['$2'])[_0x125445(0x19c)]()[_0x125445(0xa8)]();let _0xa6030e,_0x57f40b,_0x5e6204;switch(_0x2a8e05){case _0x125445(0x11a):_0xa6030e=_0x45c231[_0x44db03]!==''?Number(_0x45c231[_0x44db03]):0x0;break;case _0x125445(0x131):_0x57f40b=_0x45c231[_0x44db03]!==''?JSON[_0x125445(0x1a4)](_0x45c231[_0x44db03]):[],_0xa6030e=_0x57f40b[_0x125445(0x154)](_0x4065c1=>Number(_0x4065c1));break;case _0x125445(0x14d):_0xa6030e=_0x45c231[_0x44db03]!==''?eval(_0x45c231[_0x44db03]):null;break;case _0x125445(0x13a):_0x57f40b=_0x45c231[_0x44db03]!==''?JSON['parse'](_0x45c231[_0x44db03]):[],_0xa6030e=_0x57f40b['map'](_0x5b07dc=>eval(_0x5b07dc));break;case _0x125445(0xf3):_0xa6030e=_0x45c231[_0x44db03]!==''?JSON['parse'](_0x45c231[_0x44db03]):'';break;case'ARRAYJSON':_0x57f40b=_0x45c231[_0x44db03]!==''?JSON['parse'](_0x45c231[_0x44db03]):[],_0xa6030e=_0x57f40b[_0x125445(0x154)](_0x181a9d=>JSON[_0x125445(0x1a4)](_0x181a9d));break;case _0x125445(0x1cc):_0xa6030e=_0x45c231[_0x44db03]!==''?new Function(JSON[_0x125445(0x1a4)](_0x45c231[_0x44db03])):new Function(_0x125445(0x1ab));break;case _0x125445(0x149):_0x57f40b=_0x45c231[_0x44db03]!==''?JSON[_0x125445(0x1a4)](_0x45c231[_0x44db03]):[],_0xa6030e=_0x57f40b['map'](_0xb5034d=>new Function(JSON[_0x125445(0x1a4)](_0xb5034d)));break;case _0x125445(0xb6):_0xa6030e=_0x45c231[_0x44db03]!==''?String(_0x45c231[_0x44db03]):'';break;case'ARRAYSTR':_0x57f40b=_0x45c231[_0x44db03]!==''?JSON['parse'](_0x45c231[_0x44db03]):[],_0xa6030e=_0x57f40b[_0x125445(0x154)](_0x574ea1=>String(_0x574ea1));break;case'STRUCT':_0x5e6204=_0x45c231[_0x44db03]!==''?JSON[_0x125445(0x1a4)](_0x45c231[_0x44db03]):{},_0xa6030e=VisuMZ[_0x125445(0x172)]({},_0x5e6204);break;case _0x125445(0xb5):_0x57f40b=_0x45c231[_0x44db03]!==''?JSON[_0x125445(0x1a4)](_0x45c231[_0x44db03]):[],_0xa6030e=_0x57f40b['map'](_0x5cdcc3=>VisuMZ[_0x125445(0x172)]({},JSON[_0x125445(0x1a4)](_0x5cdcc3)));break;default:continue;}_0x3332e4[_0x2f12e9]=_0xa6030e;}}}return _0x3332e4;},(_0x2580fd=>{const _0x36b46d=_0x42c18c,_0x471a15=_0x2580fd[_0x36b46d(0xa9)];for(const _0x2e96ce of dependencies){if(!Imported[_0x2e96ce]){alert(_0x36b46d(0x13b)[_0x36b46d(0xe4)](_0x471a15,_0x2e96ce)),SceneManager[_0x36b46d(0xe2)]();break;}}const _0x497134=_0x2580fd[_0x36b46d(0xde)];if(_0x497134[_0x36b46d(0xdd)](/\[Version[ ](.*?)\]/i)){if(_0x36b46d(0x1bd)!==_0x36b46d(0x173)){const _0x587b0b=Number(RegExp['$1']);_0x587b0b!==VisuMZ[label][_0x36b46d(0x140)]&&(alert(_0x36b46d(0x132)[_0x36b46d(0xe4)](_0x471a15,_0x587b0b)),SceneManager[_0x36b46d(0xe2)]());}else return this[_0x36b46d(0x12d)]()[_0x36b46d(0x110)];}if(_0x497134[_0x36b46d(0xdd)](/\[Tier[ ](\d+)\]/i)){const _0x1e1011=Number(RegExp['$1']);_0x1e1011<tier?(alert(_0x36b46d(0x129)[_0x36b46d(0xe4)](_0x471a15,_0x1e1011,tier)),SceneManager['exit']()):tier=Math[_0x36b46d(0x15a)](_0x1e1011,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x36b46d(0x141)],_0x2580fd[_0x36b46d(0x10e)]);})(pluginData);if(VisuMZ[_0x42c18c(0xb3)][_0x42c18c(0x140)]<1.7){let text='';text+=_0x42c18c(0xda),text+=_0x42c18c(0x123),alert(text),SceneManager[_0x42c18c(0xe2)]();}function _0xb136(){const _0x405632=['SpHUe','onBuyOk','isUsingHospitalBustStyleUI','Scene_Shop_start','FvdvX','commandWindowRect','createCommandWindow','clearShopBustStyleUISettings','wDNlK','14yNiMpv','_Bust','clearRecruitBustStyleUISettings','bustPositionY','qHldX','round','stopVoiceLines','Scene_Map_stop','deselect','bind','mainAreaBottom','Scene_Shop_onBuyCancel','ConvertParams','YXiNP','_bustSprite','ZVxqv','Scene_Boot_onDatabaseLoaded','createShopBustStyleUI_Background','constructor','onCategoryCancel','VisuMZ_1_ItemsEquipsCore','includes','EwwvW','JbezD','onSellCancel','Scene_Shop_doBuy','22710985iftNYH','messages','CKkHb','getShopBustStyleUI_CommandWindow_Rect','addLoadListener','commandSell','onBuyCancel','onDatabaseLoaded','_dummyWindow','meetsShopBustStyleUIConditions','Recruit_Clear','SBIIZ','KvAQi','getShopBustStyleUI_MessageWindow_Rect','fqqtT','floor','_helpWindow','windowScale','createShopBustStyleUI_CustomBackground','commandRecruit','welcome','_numberWindow','onListOk','ZCKFK','isNextScene','getRecruitBustStyleUISettings','getHospitalBustStyleUISettings','for\x20VisuMZ_3_ShopBustStyleUI\x20new\x20effects.','toUpperCase','currentSymbol','CheckCompatibilityVersions','ItemsEquipsCore','onActorListOk','Scene_Shop_goldWindowRect','VisuMZ_1_ItemsEquipsCore\x20needs\x20to\x20be\x20updated\x20','dMIKS','parse','_commandWindow','mainCommandWidth','1042911yYMFpa','close','ZHmQm','start','return\x200','create','gJXzO','commandBuy','onNumberCancel','statusScale','TxcuN','boxWidth','RecruitBoard','numberWindowRect','volume','mainAreaTop','teGpP','Window_ShopBuy_RectJS','createCustomBackgroundImages','iEviu','Scene_Shop_onSellOk','bustPositionX','Hzeyi','prototype','bustFilename','Window_ShopSell_RectJS','statusWidth','getShopBustStyleUI_NumberWindow_Rect','_goldWindow','onSkillListOk','calcWindowHeight','VisuMZ_2_VoiceActControl','onHealListCancel','_skillShopBustStyleUiSettings','_shopBustStyleUI_MessageWindow','3843010thqKPz','getShopBustStyleUI_SellWindow_Rect','FUNC','anchor','sellWindowRect','onHealListOk','isUsingShopBustStyleUI','WoRjN','setText','DefaultBust','WGkPw','trim','name','Scene_Shop_doSell','Scene_Shop_onSellCancel','ceil','hide','createShopBustStyleUI_BustImage','Scene_Shop_numberWindowRect','addWindow','Scene_Map_needsFadeIn','CmdHideDisabled','CoreEngine','Recruit_Setup','ARRAYSTRUCT','STR','SceneShopData','width','ipOVR','SceneRecruitMsg','_buyWindow','needsFadeIn','onSellOk','leave','_Msg','_shopBustStyleUiSettings','6CaNUNr','loadPicture','SceneShopMsg','IeZxv','_hospitalBustStyleUiSettings','jrxNe','VisuMZ_4_HospitalShop\x20needs\x20to\x20be\x20updated\x20','Hospital_Clear','buyWindowRect','goldWindowRect','_recruitBustStyleUiSettings','Scene_Shop_commandWindowRect','_statusWindow','call','getShopBustStyleUI_StatusWindow_Rect','fadeout','adjustWindowScaleShopBustStyleUI','Scene_Shop_createCommandWindow','oKrlh','Scene_Shop_activateBuyWindow','_categoryWindow','2393432kfgSxO','ShopScene','playMessageVoice','bitmap','VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20','qMACL','Scene_Shop_popScene','match','description','xNZdf','createShopBustStyleUI_MessageWindow','isPreviousScene','exit','_sellWindow','format','initialize','_Voice','pitch','clearSkillShopBustStyleUISettings','kRYfh','hideWindowsShopBustStyleUI','gDMTT','getTotalCommandWindowCommands','Window_ShopCommand_maxCols','exitDelay','scale','setBustStyleUIMessageType','show','Game_System_initialize','JSON','statusWindowRect','Scene_Shop_isBottomHelpMode','1259tuSllJ','maxListSize','bustAnchorY','Window_ShopNumber_RectJS','VisuMZ_4_RecruitingBoard','Scene_Shop_activateSellWindow','1202920waiTDQ','HospitalShop','Scene_MenuBase_createCustomBackgroundImages','Scene_Shop_onBuyOk','GENpb','startFadeOut','min','HEseZ','setMessageVoice','commandHeal','SkillShop_Clear','Window_ShopCommand_RectJS','VisuMZ_4_SkillShop\x20needs\x20to\x20be\x20updated\x20','doSell','setMessageBust','SkillShop_Setup','EzQHO','Window_ShopStatus_RectJS','parameters','onActorListCancel','enabled','XbolG','processExitShopBustStyleUI','Window_Gold_RectJS','SHOP_BUST_STYLE_UI','Scene_Shop_commandSell','VisuMZ_4_SkillShop','maxCols','BhgCg','_scene','NUM','exitShopBustStyleUI','kgYSQ','kjxCg','kfBlu','Scene_Shop_statusWindowRect','playVoiceLine','bustAnchorX','buy','in\x20order\x20for\x20VisuMZ_3_ShopBustStyleUI\x20to\x20work.','setMessage','Scene_Shop_create','activateBuyWindow','SceneSkillShopMsg','14913GUPVaN','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','SceneShop_Setup','_backSprite1','popScene','getShopBustStyleUISettings','bustSettings','dEkDT','backgroundFilename','ARRAYNUM','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','sell','Scene_Shop_buyWindowRect','_purchaseOnly','aIUqn','commandLearn','status','48GfdqTn','ARRAYEVAL','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','registerCommand','Window_ShopMsg_RectJS','getShopBustStyleUI_CategoryWindow_Rect','SceneHospitalMsg','version','Settings','doBuy','categoryWindowRect','Scene_Shop_commandBuy','538dYNvrl','WITQu','activateSellWindow','VisuMZ_4_RecruitingBoard\x20needs\x20to\x20be\x20updated\x20','ARRAYFUNC','voiceDelay','XfOFm','_text','EVAL','Scene_Shop_sellWindowRect','getShopBustStyleUI_GoldWindow_Rect','Window_ItemCategory_RectJS','Scene_Shop_onCategoryCancel','getSkillShopBustStyleUISettings','CWlNT','map','startFadeIn','Scene_Shop_categoryWindowRect','getShopBustStyleUI_BuyWindow_Rect','clearHospitalBustStyleUISettings','height','max','stop','ShopBustStyleUI'];_0xb136=function(){return _0x405632;};return _0xb136();}if(VisuMZ['ItemsEquipsCore'][_0x42c18c(0x140)]<1.47){let text='';text+=_0x42c18c(0x1a2),text+=_0x42c18c(0x123),alert(text),SceneManager[_0x42c18c(0xe2)]();}PluginManager[_0x42c18c(0x13c)](pluginData[_0x42c18c(0xa9)],'SceneShop_Clear',_0x5f5748=>{const _0x480861=_0x42c18c;$gameSystem[_0x480861(0x164)]();}),PluginManager['registerCommand'](pluginData['name'],_0x42c18c(0x12a),_0x1983c7=>{const _0x5ea486=_0x42c18c;VisuMZ[_0x5ea486(0x172)](_0x1983c7,_0x1983c7);const _0x49a72b=$gameSystem[_0x5ea486(0x12d)]();_0x49a72b[_0x5ea486(0x110)]=!![],_0x49a72b['backgroundFilename']=_0x1983c7[_0x5ea486(0x130)]||'',_0x49a72b[_0x5ea486(0x1bf)]=_0x1983c7[_0x5ea486(0x1bf)]||'';{if(_0x5ea486(0x111)!==_0x5ea486(0x111))return _0x6386ad['_scene']&&_0x2b1dd5[_0x5ea486(0x119)][_0x5ea486(0x1d0)]()?0x1:_0xeeac1b[_0x5ea486(0x15c)][_0x5ea486(0xed)]['call'](this);else{const _0x156822=_0x1983c7[_0x5ea486(0x12e)]||{},_0x122c8b=VisuMZ[_0x5ea486(0x15c)]['Settings']['DefaultBust']||{};_0x49a72b[_0x5ea486(0x121)]=_0x156822[_0x5ea486(0x121)]??_0x122c8b[_0x5ea486(0x121)]??0.5,_0x49a72b['bustAnchorY']=_0x156822[_0x5ea486(0xf8)]??_0x122c8b[_0x5ea486(0xf8)]??0.5;const _0x3e07ed=_0x156822[_0x5ea486(0x1bc)]??_0x122c8b[_0x5ea486(0x1bc)]??0.8;_0x49a72b['bustPositionX']=Math['round'](_0x3e07ed*Graphics[_0x5ea486(0xb8)]);const _0x57832d=_0x156822[_0x5ea486(0x169)]??_0x122c8b[_0x5ea486(0x169)]??0x1;_0x49a72b[_0x5ea486(0x169)]=Math[_0x5ea486(0x16b)](_0x57832d*Graphics[_0x5ea486(0x159)]);}}{if(_0x5ea486(0x1ad)===_0x5ea486(0x1ad)){_0x49a72b['messages']={};const _0x370384=_0x1983c7[_0x5ea486(0x181)]||{},_0x105f5d=VisuMZ[_0x5ea486(0x15c)][_0x5ea486(0x141)][_0x5ea486(0xc3)]||{},_0x5d7f7f=[_0x5ea486(0x194),'leave','commandBuy',_0x5ea486(0x15e),'onBuyCancel','doBuy','commandSell',_0x5ea486(0xbd),_0x5ea486(0x17e),_0x5ea486(0x109)];for(const _0x411367 of _0x5d7f7f){const _0x2487e0=_0x411367+'_Msg',_0x335ae9=_0x411367+_0x5ea486(0x167),_0x239b0e=_0x411367+_0x5ea486(0xe6);_0x49a72b[_0x5ea486(0x181)][_0x2487e0]=_0x370384[_0x2487e0]??_0x105f5d[_0x2487e0]??'',_0x49a72b[_0x5ea486(0x181)][_0x335ae9]=_0x370384[_0x335ae9]??_0x105f5d[_0x335ae9]??'',_0x49a72b[_0x5ea486(0x181)][_0x239b0e]=_0x370384[_0x239b0e]??_0x105f5d[_0x239b0e]??'';}}else{_0x13e3d5['messages']={};const _0x27ba30=_0x15bbc6[_0x5ea486(0x181)]||{},_0x3f2d7e=_0xfd1978['ShopBustStyleUI'][_0x5ea486(0x141)][_0x5ea486(0x13f)]||{},_0x31adaf=[_0x5ea486(0x194),_0x5ea486(0xbe),_0x5ea486(0x105),_0x5ea486(0x1cf),_0x5ea486(0x1c7)];for(const _0x11fc37 of _0x31adaf){const _0x352f2b=_0x11fc37+_0x5ea486(0xbf),_0x488e4d=_0x11fc37+_0x5ea486(0x167),_0x3c3edb=_0x11fc37+_0x5ea486(0xe6);_0x444b47['messages'][_0x352f2b]=_0x27ba30[_0x352f2b]??_0x3f2d7e[_0x352f2b]??'',_0x36249e[_0x5ea486(0x181)][_0x488e4d]=_0x27ba30[_0x488e4d]??_0x3f2d7e[_0x488e4d]??'',_0x2925a8[_0x5ea486(0x181)][_0x3c3edb]=_0x27ba30[_0x3c3edb]??_0x3f2d7e[_0x3c3edb]??'';}}}}),PluginManager['registerCommand'](pluginData[_0x42c18c(0xa9)],_0x42c18c(0xc8),_0x53e374=>{const _0x1f2039=_0x42c18c;$gameSystem[_0x1f2039(0x158)]();}),PluginManager[_0x42c18c(0x13c)](pluginData[_0x42c18c(0xa9)],'Hospital_Setup',_0x406809=>{const _0x5e5ea9=_0x42c18c;VisuMZ[_0x5e5ea9(0x172)](_0x406809,_0x406809);const _0x35f497=$gameSystem[_0x5e5ea9(0x19a)]();_0x35f497[_0x5e5ea9(0x110)]=!![],_0x35f497[_0x5e5ea9(0x130)]=_0x406809[_0x5e5ea9(0x130)]||'',_0x35f497[_0x5e5ea9(0x1bf)]=_0x406809[_0x5e5ea9(0x1bf)]||'';{if(_0x5e5ea9(0x1a3)!==_0x5e5ea9(0x15d)){const _0x340764=_0x406809[_0x5e5ea9(0x12e)]||{},_0x5e520c=VisuMZ['ShopBustStyleUI'][_0x5e5ea9(0x141)][_0x5e5ea9(0xa6)]||{};_0x35f497['bustAnchorX']=_0x340764[_0x5e5ea9(0x121)]??_0x5e520c['bustAnchorX']??0.5,_0x35f497['bustAnchorY']=_0x340764['bustAnchorY']??_0x5e520c[_0x5e5ea9(0xf8)]??0.5;const _0x3b03a8=_0x340764[_0x5e5ea9(0x1bc)]??_0x5e520c[_0x5e5ea9(0x1bc)]??0.8;_0x35f497[_0x5e5ea9(0x1bc)]=Math['round'](_0x3b03a8*Graphics['width']);const _0x1e0ed3=_0x340764[_0x5e5ea9(0x169)]??_0x5e520c[_0x5e5ea9(0x169)]??0x1;_0x35f497[_0x5e5ea9(0x169)]=Math[_0x5e5ea9(0x16b)](_0x1e0ed3*Graphics['height']);}else{const _0x4a3cba=_0x19ed1a[_0x5e5ea9(0x114)][_0x5e5ea9(0x191)],_0x132bc2=[this['_goldWindow'],this[_0x5e5ea9(0x1a5)],this[_0x5e5ea9(0x195)],this['_buyWindow'],this[_0x5e5ea9(0xd5)],this[_0x5e5ea9(0xe3)]];for(const _0x5bfa37 of _0x132bc2){_0x5bfa37[_0x5e5ea9(0xef)]['x']=_0x5bfa37[_0x5e5ea9(0xef)]['y']=_0x4a3cba;}const _0x54c5de=_0x44a6f6[_0x5e5ea9(0x114)]['statusScale'];this[_0x5e5ea9(0xcd)][_0x5e5ea9(0xef)]['x']=this[_0x5e5ea9(0xcd)]['scale']['y']=_0x54c5de;}}{_0x35f497[_0x5e5ea9(0x181)]={};const _0x58ce07=_0x406809['messages']||{},_0x543f6e=VisuMZ[_0x5e5ea9(0x15c)][_0x5e5ea9(0x141)][_0x5e5ea9(0x13f)]||{},_0x2c48d0=[_0x5e5ea9(0x194),_0x5e5ea9(0xbe),_0x5e5ea9(0x105),_0x5e5ea9(0x1cf),'onHealListCancel'];for(const _0x4b1788 of _0x2c48d0){if(_0x5e5ea9(0x17c)!==_0x5e5ea9(0x17c))return _0x12dfbb[_0x5e5ea9(0x15c)][_0x5e5ea9(0x141)][_0x5e5ea9(0xb7)][_0x5e5ea9(0xf9)]['call'](this);else{const _0x177b72=_0x4b1788+_0x5e5ea9(0xbf),_0x435a1a=_0x4b1788+_0x5e5ea9(0x167),_0x147996=_0x4b1788+_0x5e5ea9(0xe6);_0x35f497[_0x5e5ea9(0x181)][_0x177b72]=_0x58ce07[_0x177b72]??_0x543f6e[_0x177b72]??'',_0x35f497[_0x5e5ea9(0x181)][_0x435a1a]=_0x58ce07[_0x435a1a]??_0x543f6e[_0x435a1a]??'',_0x35f497[_0x5e5ea9(0x181)][_0x147996]=_0x58ce07[_0x147996]??_0x543f6e[_0x147996]??'';}}}}),PluginManager[_0x42c18c(0x13c)](pluginData[_0x42c18c(0xa9)],_0x42c18c(0x18a),_0x118f34=>{const _0x50c268=_0x42c18c;$gameSystem[_0x50c268(0x168)]();}),PluginManager[_0x42c18c(0x13c)](pluginData['name'],_0x42c18c(0xb4),_0x3b9ec9=>{const _0x563954=_0x42c18c;VisuMZ['ConvertParams'](_0x3b9ec9,_0x3b9ec9);const _0x35712e=$gameSystem[_0x563954(0x199)]();_0x35712e[_0x563954(0x110)]=!![],_0x35712e[_0x563954(0x130)]=_0x3b9ec9[_0x563954(0x130)]||'',_0x35712e[_0x563954(0x1bf)]=_0x3b9ec9[_0x563954(0x1bf)]||'';{const _0x3dc7b1=_0x3b9ec9[_0x563954(0x12e)]||{},_0xccdb0f=VisuMZ[_0x563954(0x15c)][_0x563954(0x141)][_0x563954(0xa6)]||{};_0x35712e[_0x563954(0x121)]=_0x3dc7b1[_0x563954(0x121)]??_0xccdb0f[_0x563954(0x121)]??0.5,_0x35712e[_0x563954(0xf8)]=_0x3dc7b1[_0x563954(0xf8)]??_0xccdb0f['bustAnchorY']??0.5;const _0x20140c=_0x3dc7b1[_0x563954(0x1bc)]??_0xccdb0f[_0x563954(0x1bc)]??0.8;_0x35712e[_0x563954(0x1bc)]=Math[_0x563954(0x16b)](_0x20140c*Graphics['width']);const _0x5e4735=_0x3dc7b1['bustPositionY']??_0xccdb0f['bustPositionY']??0x1;_0x35712e[_0x563954(0x169)]=Math[_0x563954(0x16b)](_0x5e4735*Graphics[_0x563954(0x159)]);}{_0x35712e[_0x563954(0x181)]={};const _0xd4376c=_0x3b9ec9['messages']||{},_0x581284=VisuMZ[_0x563954(0x15c)][_0x563954(0x141)][_0x563954(0xba)]||{},_0x156cdd=['welcome',_0x563954(0xbe),_0x563954(0x193),_0x563954(0x196),'onListCancel'];for(const _0x17c5e4 of _0x156cdd){const _0x12e150=_0x17c5e4+_0x563954(0xbf),_0x3fde7e=_0x17c5e4+'_Bust',_0xd6f44e=_0x17c5e4+_0x563954(0xe6);_0x35712e[_0x563954(0x181)][_0x12e150]=_0xd4376c[_0x12e150]??_0x581284[_0x12e150]??'',_0x35712e['messages'][_0x3fde7e]=_0xd4376c[_0x3fde7e]??_0x581284[_0x3fde7e]??'',_0x35712e['messages'][_0xd6f44e]=_0xd4376c[_0xd6f44e]??_0x581284[_0xd6f44e]??'';}}}),PluginManager[_0x42c18c(0x13c)](pluginData[_0x42c18c(0xa9)],_0x42c18c(0x106),_0x1f0a5d=>{const _0x1486c3=_0x42c18c;$gameSystem[_0x1486c3(0xe8)]();}),PluginManager[_0x42c18c(0x13c)](pluginData[_0x42c18c(0xa9)],_0x42c18c(0x10b),_0x1f4ec7=>{const _0x585277=_0x42c18c;VisuMZ[_0x585277(0x172)](_0x1f4ec7,_0x1f4ec7);const _0x13fefe=$gameSystem['getSkillShopBustStyleUISettings']();_0x13fefe[_0x585277(0x110)]=!![],_0x13fefe[_0x585277(0x130)]=_0x1f4ec7[_0x585277(0x130)]||'',_0x13fefe['bustFilename']=_0x1f4ec7[_0x585277(0x1bf)]||'';{const _0x2fc546=_0x1f4ec7[_0x585277(0x12e)]||{},_0x360131=VisuMZ[_0x585277(0x15c)][_0x585277(0x141)][_0x585277(0xa6)]||{};_0x13fefe[_0x585277(0x121)]=_0x2fc546['bustAnchorX']??_0x360131[_0x585277(0x121)]??0.5,_0x13fefe[_0x585277(0xf8)]=_0x2fc546[_0x585277(0xf8)]??_0x360131[_0x585277(0xf8)]??0.5;const _0x245e28=_0x2fc546['bustPositionX']??_0x360131['bustPositionX']??0.8;_0x13fefe[_0x585277(0x1bc)]=Math[_0x585277(0x16b)](_0x245e28*Graphics[_0x585277(0xb8)]);const _0x269173=_0x2fc546[_0x585277(0x169)]??_0x360131[_0x585277(0x169)]??0x1;_0x13fefe[_0x585277(0x169)]=Math[_0x585277(0x16b)](_0x269173*Graphics[_0x585277(0x159)]);}{if('FHwAt'==='FspyF'){if(_0x22fd18[_0x585277(0x15c)]['Settings'][_0x585277(0xb7)][_0x585277(0x1c0)])return _0x5eee8a[_0x585277(0x15c)][_0x585277(0x141)][_0x585277(0xb7)][_0x585277(0x1c0)][_0x585277(0xce)](this);const _0x4dac65=this[_0x585277(0x1b4)](),_0xc38426=_0x3fc9ab['SHOP_BUST_STYLE_UI']['windowScale'],_0x5be4ad=_0x4dac65[_0x585277(0xb8)],_0x6652f5=_0x4dac65[_0x585277(0x159)]-this[_0x585277(0x1c5)](0x1,!![]),_0x423375=_0x4dac65['x'],_0x467a09=_0x4dac65['y']+_0x1161da[_0x585277(0xac)](this[_0x585277(0x1c5)](0x1,!![])*_0xc38426);return new _0x3c3f6f(_0x423375,_0x467a09,_0x5be4ad,_0x6652f5);}else{_0x13fefe['messages']={};const _0x415422=_0x1f4ec7[_0x585277(0x181)]||{},_0x128e26=VisuMZ[_0x585277(0x15c)][_0x585277(0x141)][_0x585277(0x127)]||{},_0x2a89b8=[_0x585277(0x194),_0x585277(0xbe),'commandLearn','onActorListOk',_0x585277(0x10f),'onSkillListOk','onSkillListCancel'];for(const _0x4853b0 of _0x2a89b8){const _0x9acc3=_0x4853b0+_0x585277(0xbf),_0x2fc80e=_0x4853b0+_0x585277(0x167),_0x33ae5b=_0x4853b0+_0x585277(0xe6);_0x13fefe[_0x585277(0x181)][_0x9acc3]=_0x415422[_0x9acc3]??_0x128e26[_0x9acc3]??'',_0x13fefe[_0x585277(0x181)][_0x2fc80e]=_0x415422[_0x2fc80e]??_0x128e26[_0x2fc80e]??'',_0x13fefe[_0x585277(0x181)][_0x33ae5b]=_0x415422[_0x33ae5b]??_0x128e26[_0x33ae5b]??'';}}}}),VisuMZ['ShopBustStyleUI'][_0x42c18c(0x176)]=Scene_Boot['prototype']['onDatabaseLoaded'],Scene_Boot[_0x42c18c(0x1be)][_0x42c18c(0x187)]=function(){const _0x54da5e=_0x42c18c;VisuMZ[_0x54da5e(0x15c)][_0x54da5e(0x176)]['call'](this),VisuMZ[_0x54da5e(0x15c)][_0x54da5e(0x19e)]();},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0x19e)]=function(){const _0x25d5f4=_0x42c18c;if(Imported['VisuMZ_4_HospitalShop']&&VisuMZ[_0x25d5f4(0xfd)]['version']<1.02){let _0x255f5d='';_0x255f5d+=_0x25d5f4(0xc7),_0x255f5d+=_0x25d5f4(0x19b),alert(_0x255f5d),SceneManager['exit']();}if(Imported[_0x25d5f4(0xfa)]&&VisuMZ[_0x25d5f4(0x1b3)]['version']<1.02){let _0x285d43='';_0x285d43+=_0x25d5f4(0x148),_0x285d43+=_0x25d5f4(0x19b),alert(_0x285d43),SceneManager[_0x25d5f4(0xe2)]();}if(Imported[_0x25d5f4(0x116)]&&VisuMZ['SkillShop'][_0x25d5f4(0x140)]<1.02){let _0x44c99c='';_0x44c99c+=_0x25d5f4(0x108),_0x44c99c+=_0x25d5f4(0x19b),alert(_0x44c99c),SceneManager[_0x25d5f4(0xe2)]();}},VisuMZ['ShopBustStyleUI'][_0x42c18c(0xf2)]=Game_System[_0x42c18c(0x1be)][_0x42c18c(0xe5)],Game_System[_0x42c18c(0x1be)][_0x42c18c(0xe5)]=function(){const _0x478b86=_0x42c18c;VisuMZ[_0x478b86(0x15c)][_0x478b86(0xf2)][_0x478b86(0xce)](this),this['clearShopBustStyleUISettings'](),this[_0x478b86(0x158)](),this[_0x478b86(0x168)](),this[_0x478b86(0xe8)]();},Game_System[_0x42c18c(0x1be)][_0x42c18c(0x164)]=function(){const _0x33672b=_0x42c18c;this[_0x33672b(0xc0)]={};},Game_System['prototype'][_0x42c18c(0x12d)]=function(){const _0x24dd42=_0x42c18c;return this[_0x24dd42(0xc0)]===undefined&&(_0x24dd42(0xc6)!=='TzyJP'?this[_0x24dd42(0x164)]():(this[_0x24dd42(0xea)](),this[_0x24dd42(0x1a5)][_0x24dd42(0xf1)](),this['setBustStyleUIMessageType']('onBuyCancel'))),this[_0x24dd42(0xc0)];},Game_System[_0x42c18c(0x1be)][_0x42c18c(0x1d0)]=function(){const _0x3d6350=_0x42c18c;return this[_0x3d6350(0x12d)]()[_0x3d6350(0x110)];},Game_System[_0x42c18c(0x1be)][_0x42c18c(0x158)]=function(){const _0x348172=_0x42c18c;this[_0x348172(0xc5)]={};},Game_System[_0x42c18c(0x1be)]['getHospitalBustStyleUISettings']=function(){const _0x33b33c=_0x42c18c;return this[_0x33b33c(0xc5)]===undefined&&this[_0x33b33c(0x158)](),this[_0x33b33c(0xc5)];},Game_System[_0x42c18c(0x1be)][_0x42c18c(0x15f)]=function(){const _0x4801a6=_0x42c18c;return this[_0x4801a6(0x19a)]()['enabled'];},Game_System[_0x42c18c(0x1be)][_0x42c18c(0x168)]=function(){const _0x2bfe66=_0x42c18c;this[_0x2bfe66(0xcb)]={};},Game_System[_0x42c18c(0x1be)]['getRecruitBustStyleUISettings']=function(){const _0x478fbf=_0x42c18c;return this[_0x478fbf(0xcb)]===undefined&&this[_0x478fbf(0x168)](),this[_0x478fbf(0xcb)];},Game_System[_0x42c18c(0x1be)]['isUsingRecruitBustStyleUI']=function(){return this['getRecruitBustStyleUISettings']()['enabled'];},Game_System['prototype'][_0x42c18c(0xe8)]=function(){const _0x4cf38e=_0x42c18c;this[_0x4cf38e(0x1c8)]={};},Game_System[_0x42c18c(0x1be)][_0x42c18c(0x152)]=function(){const _0x3ab680=_0x42c18c;return this['_skillShopBustStyleUiSettings']===undefined&&this['clearSkillShopBustStyleUISettings'](),this[_0x3ab680(0x1c8)];},Game_System[_0x42c18c(0x1be)]['isUsingSkillShopBustStyleUI']=function(){const _0x51dac0=_0x42c18c;return this['getSkillShopBustStyleUISettings']()[_0x51dac0(0x110)];},Scene_Shop['SHOP_BUST_STYLE_UI']={'maxListSize':VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0x141)][_0x42c18c(0xb7)][_0x42c18c(0xf7)]??0x8,'fadeout':VisuMZ['ShopBustStyleUI']['Settings'][_0x42c18c(0xb7)][_0x42c18c(0xd0)]??!![],'exitDelay':VisuMZ[_0x42c18c(0x15c)]['Settings'][_0x42c18c(0xb7)][_0x42c18c(0xee)]??0x5dc,'windowScale':VisuMZ[_0x42c18c(0x15c)]['Settings'][_0x42c18c(0xb7)]['windowScale']??0.8,'statusScale':VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0x141)][_0x42c18c(0xb7)][_0x42c18c(0x1b0)]??0.6},Scene_MenuBase[_0x42c18c(0x1be)][_0x42c18c(0x1d0)]=function(){const _0x42a8e0=_0x42c18c;return this[_0x42a8e0(0x12d)]()[_0x42a8e0(0x110)];},Scene_MenuBase[_0x42c18c(0x1be)][_0x42c18c(0x189)]=function(){const _0xc54a5a=_0x42c18c;return this[_0xc54a5a(0x178)]===Scene_Shop&&this[_0xc54a5a(0x1d0)]();},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0xfe)]=Scene_MenuBase['prototype']['createCustomBackgroundImages'],Scene_MenuBase[_0x42c18c(0x1be)][_0x42c18c(0x1b9)]=function(){const _0xaaa905=_0x42c18c;if(this[_0xaaa905(0x189)]()){if(_0xaaa905(0xc4)!==_0xaaa905(0xc4)){const _0x3a551c=_0x3a5f21[_0xaaa905(0x12e)]||{},_0x11eff1=_0x3af1c8[_0xaaa905(0x15c)][_0xaaa905(0x141)]['DefaultBust']||{};_0x51e534[_0xaaa905(0x121)]=_0x3a551c[_0xaaa905(0x121)]??_0x11eff1['bustAnchorX']??0.5,_0xe688ae[_0xaaa905(0xf8)]=_0x3a551c[_0xaaa905(0xf8)]??_0x11eff1[_0xaaa905(0xf8)]??0.5;const _0x4f7b26=_0x3a551c[_0xaaa905(0x1bc)]??_0x11eff1['bustPositionX']??0.8;_0x335827[_0xaaa905(0x1bc)]=_0x446ea5[_0xaaa905(0x16b)](_0x4f7b26*_0x3b3341[_0xaaa905(0xb8)]);const _0x1f6723=_0x3a551c['bustPositionY']??_0x11eff1[_0xaaa905(0x169)]??0x1;_0x11cb33[_0xaaa905(0x169)]=_0x72113[_0xaaa905(0x16b)](_0x1f6723*_0xee8626[_0xaaa905(0x159)]);}else this['createShopBustStyleUI_CustomBackground']();}else VisuMZ[_0xaaa905(0x15c)]['Scene_MenuBase_createCustomBackgroundImages']['call'](this);},Scene_MenuBase[_0x42c18c(0x1be)][_0x42c18c(0x192)]=function(){const _0x174da2=_0x42c18c;this['createShopBustStyleUI_BackgroundImages'](),this[_0x174da2(0xae)]();},Scene_MenuBase['prototype'][_0x42c18c(0x12d)]=function(){return{};},Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x12d)]=function(){return $gameSystem['getShopBustStyleUISettings']();},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0x160)]=Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x1aa)],Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x1aa)]=function(){const _0x472ae1=_0x42c18c;VisuMZ['ShopBustStyleUI'][_0x472ae1(0x160)][_0x472ae1(0xce)](this),this[_0x472ae1(0x1d0)]()&&Scene_Shop['SHOP_BUST_STYLE_UI'][_0x472ae1(0xd0)]&&this[_0x472ae1(0x155)]();},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0x16d)]=Scene_Map[_0x42c18c(0x1be)][_0x42c18c(0x15b)],Scene_Map[_0x42c18c(0x1be)][_0x42c18c(0x15b)]=function(){const _0x3ae6f5=_0x42c18c;VisuMZ[_0x3ae6f5(0x15c)]['Scene_Map_stop'][_0x3ae6f5(0xce)](this),SceneManager[_0x3ae6f5(0x198)](Scene_Shop)&&$gameSystem[_0x3ae6f5(0x1d0)]()&&Scene_Shop[_0x3ae6f5(0x114)]['fadeout']&&(_0x3ae6f5(0x16a)!=='qHldX'?_0x5f13aa['ShopBustStyleUI'][_0x3ae6f5(0xfe)][_0x3ae6f5(0xce)](this):this[_0x3ae6f5(0x101)]());},VisuMZ[_0x42c18c(0x15c)]['Scene_Shop_popScene']=Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x12c)],Scene_Shop[_0x42c18c(0x1be)]['popScene']=function(){const _0x4ee0fa=_0x42c18c;if(this['isUsingShopBustStyleUI']()){if(_0x4ee0fa(0xeb)===_0x4ee0fa(0x103))return this[_0x4ee0fa(0x1c8)]===_0x389407&&this[_0x4ee0fa(0xe8)](),this[_0x4ee0fa(0x1c8)];else this['exitShopBustStyleUI']();}else VisuMZ['ShopBustStyleUI'][_0x4ee0fa(0xdc)]['call'](this);},Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x11b)]=function(){const _0xcc7b58=_0x42c18c;this[_0xcc7b58(0xf0)]('leave'),this[_0xcc7b58(0x1a5)]['close'](),this[_0xcc7b58(0x1c3)]['close']();const _0x483b48=Scene_Shop['SHOP_BUST_STYLE_UI'][_0xcc7b58(0xee)];setTimeout(this[_0xcc7b58(0x112)]['bind'](this),_0x483b48);},Scene_Shop['prototype'][_0x42c18c(0x112)]=function(){const _0x444a4c=_0x42c18c;if(Scene_Shop[_0x444a4c(0x114)][_0x444a4c(0xd0)]){if(_0x444a4c(0x18b)!==_0x444a4c(0xdf))this[_0x444a4c(0x101)]();else{let _0x6c4ba='';_0x6c4ba+='VisuMZ_4_SkillShop\x20needs\x20to\x20be\x20updated\x20',_0x6c4ba+=_0x444a4c(0x19b),_0x401f06(_0x6c4ba),_0x3a1fab[_0x444a4c(0xe2)]();}}VisuMZ[_0x444a4c(0x15c)][_0x444a4c(0xdc)][_0x444a4c(0xce)](this);},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0xb1)]=Scene_Map['prototype'][_0x42c18c(0xbc)],Scene_Map[_0x42c18c(0x1be)][_0x42c18c(0xbc)]=function(){const _0x16a5c6=_0x42c18c;if(SceneManager[_0x16a5c6(0xe1)](Scene_Shop)&&$gameSystem[_0x16a5c6(0x1d0)]()&&Scene_Shop[_0x16a5c6(0x114)]['fadeout'])return!![];return VisuMZ[_0x16a5c6(0x15c)][_0x16a5c6(0xb1)][_0x16a5c6(0xce)](this);},Scene_MenuBase['prototype']['createShopBustStyleUI_BackgroundImages']=function(){const _0x409f2c=_0x42c18c;this[_0x409f2c(0x12d)]()[_0x409f2c(0x130)]?this[_0x409f2c(0x177)]():VisuMZ['ShopBustStyleUI'][_0x409f2c(0xfe)]['call'](this);},Scene_MenuBase['prototype'][_0x42c18c(0x177)]=function(){const _0x1ecf3b=_0x42c18c,_0x73cb66=this['getShopBustStyleUISettings']()[_0x1ecf3b(0x130)];this[_0x1ecf3b(0x12b)]=new Sprite(),this[_0x1ecf3b(0x12b)]['bitmap']=ImageManager['loadPicture'](_0x73cb66),this['_backSprite1'][_0x1ecf3b(0xd9)][_0x1ecf3b(0x184)](this['adjustSprite'][_0x1ecf3b(0x16f)](this,this[_0x1ecf3b(0x12b)])),this['addChild'](this['_backSprite1']);},Scene_MenuBase[_0x42c18c(0x1be)][_0x42c18c(0xae)]=function(){const _0x36c682=_0x42c18c,_0x2dff3a=this['getShopBustStyleUISettings'](),_0xad57dc=_0x2dff3a['bustFilename'];if(!_0xad57dc)return;this[_0x36c682(0x174)]=new Sprite(),this[_0x36c682(0x174)][_0x36c682(0xd9)]=ImageManager[_0x36c682(0xc2)](_0xad57dc),this['addChild'](this[_0x36c682(0x174)]),this[_0x36c682(0x174)][_0x36c682(0x1cd)]['x']=_0x2dff3a[_0x36c682(0x121)],this['_bustSprite']['anchor']['y']=_0x2dff3a['bustAnchorY'],this['_bustSprite']['x']=Math['round'](_0x2dff3a[_0x36c682(0x1bc)]),this['_bustSprite']['y']=Math[_0x36c682(0x16b)](_0x2dff3a[_0x36c682(0x169)]);},VisuMZ['ShopBustStyleUI']['Scene_Shop_create']=Scene_Shop['prototype'][_0x42c18c(0x1ac)],Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x1ac)]=function(){const _0x5887f5=_0x42c18c;VisuMZ[_0x5887f5(0x15c)][_0x5887f5(0x125)][_0x5887f5(0xce)](this),this[_0x5887f5(0x1d0)]()&&(this[_0x5887f5(0xe0)](),this[_0x5887f5(0xd1)](),this[_0x5887f5(0xea)](),this[_0x5887f5(0xf0)](_0x5887f5(0x194)));},Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0xd1)]=function(){const _0x4eafae=_0x42c18c,_0x5dd6c2=Scene_Shop[_0x4eafae(0x114)][_0x4eafae(0x191)],_0x96112c=[this[_0x4eafae(0x1c3)],this[_0x4eafae(0x1a5)],this[_0x4eafae(0x195)],this[_0x4eafae(0xbb)],this[_0x4eafae(0xd5)],this[_0x4eafae(0xe3)]];for(const _0x1da37e of _0x96112c){_0x4eafae(0xa7)===_0x4eafae(0x18e)?_0x529473[_0x4eafae(0x15c)][_0x4eafae(0xdc)]['call'](this):_0x1da37e[_0x4eafae(0xef)]['x']=_0x1da37e[_0x4eafae(0xef)]['y']=_0x5dd6c2;}const _0x1e572c=Scene_Shop[_0x4eafae(0x114)][_0x4eafae(0x1b0)];this[_0x4eafae(0xcd)][_0x4eafae(0xef)]['x']=this[_0x4eafae(0xcd)][_0x4eafae(0xef)]['y']=_0x1e572c;},Scene_Shop[_0x42c18c(0x1be)]['hideWindowsShopBustStyleUI']=function(){const _0x4fc81f=_0x42c18c;this[_0x4fc81f(0x190)][_0x4fc81f(0xad)](),this[_0x4fc81f(0x188)]['hide'](),this[_0x4fc81f(0xbb)]['hide'](),this[_0x4fc81f(0xbb)][_0x4fc81f(0x16e)](),this[_0x4fc81f(0xcd)]['hide']();},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0xf5)]=Scene_Shop[_0x42c18c(0x1be)]['isBottomHelpMode'],Scene_Shop[_0x42c18c(0x1be)]['isBottomHelpMode']=function(){const _0x1d075e=_0x42c18c;if(this['isUsingShopBustStyleUI']())return _0x1d075e(0xb9)===_0x1d075e(0xb9)?![]:0x1;else{return VisuMZ[_0x1d075e(0x15c)][_0x1d075e(0xf5)][_0x1d075e(0xce)](this);;}},VisuMZ['ShopBustStyleUI']['Scene_Shop_goldWindowRect']=Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0xca)],Scene_Shop[_0x42c18c(0x1be)]['goldWindowRect']=function(){const _0x5eef95=_0x42c18c;if(this[_0x5eef95(0x1d0)]()){if(_0x5eef95(0x182)==='CKkHb')return this[_0x5eef95(0x14f)]();else this[_0x5eef95(0x104)](_0x47613d[_0x44cfb0]);}else return VisuMZ[_0x5eef95(0x15c)][_0x5eef95(0x1a1)][_0x5eef95(0xce)](this);},Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x14f)]=function(){const _0x46a39f=_0x42c18c;if(VisuMZ[_0x46a39f(0x15c)]['Settings'][_0x46a39f(0xb7)]['Window_Gold_RectJS'])return VisuMZ[_0x46a39f(0x15c)][_0x46a39f(0x141)][_0x46a39f(0xb7)][_0x46a39f(0x113)]['call'](this);const _0x3b4924=Scene_Shop[_0x46a39f(0x114)]['windowScale'],_0x598ae7=this[_0x46a39f(0x1a6)]()/_0x3b4924,_0x5d731e=this[_0x46a39f(0x1c5)](0x1,!![]),_0xbcc73e=Math[_0x46a39f(0x18f)]((Graphics[_0x46a39f(0x1b2)]-_0x598ae7)/0x2),_0xfbbf6=this[_0x46a39f(0x170)]()-this[_0x46a39f(0x1c5)](0x4,![])-Math[_0x46a39f(0x18f)](_0x5d731e*_0x3b4924);return new Rectangle(_0xbcc73e,_0xfbbf6,_0x598ae7,_0x5d731e);},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0xd2)]=Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x163)],Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x163)]=function(){const _0x301aed=_0x42c18c;VisuMZ[_0x301aed(0x15c)]['Scene_Shop_createCommandWindow'][_0x301aed(0xce)](this),this[_0x301aed(0x1d0)]()&&('teGpP'===_0x301aed(0x1b7)?this[_0x301aed(0x1a5)]['y']=this[_0x301aed(0x162)]()['y']:(_0x13139d[_0x301aed(0x16c)](),_0x2ca130['playVoiceLine'](_0x2cc711)));},VisuMZ['ShopBustStyleUI'][_0x42c18c(0xcc)]=Scene_Shop[_0x42c18c(0x1be)]['commandWindowRect'],Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x162)]=function(){const _0x42b3f4=_0x42c18c;if(this[_0x42b3f4(0x1d0)]()){if('dEkDT'!==_0x42b3f4(0x12f))_0x1e7d7b[_0x42b3f4(0x114)]['fadeout']&&this[_0x42b3f4(0x101)](),_0x275e4e[_0x42b3f4(0x15c)]['Scene_Shop_popScene'][_0x42b3f4(0xce)](this);else return this[_0x42b3f4(0x183)]();}else return VisuMZ['ShopBustStyleUI'][_0x42b3f4(0xcc)][_0x42b3f4(0xce)](this);},Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x183)]=function(){const _0x2fbdff=_0x42c18c;if(VisuMZ['ShopBustStyleUI'][_0x2fbdff(0x141)][_0x2fbdff(0xb7)][_0x2fbdff(0x107)])return VisuMZ[_0x2fbdff(0x15c)][_0x2fbdff(0x141)][_0x2fbdff(0xb7)][_0x2fbdff(0x107)][_0x2fbdff(0xce)](this);const _0x557472=this[_0x2fbdff(0x1a6)](),_0x444cc1=this[_0x2fbdff(0x1c5)](this[_0x2fbdff(0xec)](),!![]),_0x5a84c5=Math['floor']((Graphics[_0x2fbdff(0x1b2)]-Math[_0x2fbdff(0x102)](Graphics[_0x2fbdff(0x1b2)],0x330))/0x2),_0xf0d1c0=this[_0x2fbdff(0x1b6)]()+0x64;return new Rectangle(_0x5a84c5,_0xf0d1c0,_0x557472,_0x444cc1);},Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0xec)]=function(){const _0x294c8d=_0x42c18c;let _0xc1bbdb=0x3;return this[_0x294c8d(0x135)]&&VisuMZ[_0x294c8d(0x19f)]['Settings'][_0x294c8d(0xd7)][_0x294c8d(0xb2)]&&_0xc1bbdb--,_0xc1bbdb;},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0x144)]=Scene_Shop[_0x42c18c(0x1be)]['commandBuy'],Scene_Shop[_0x42c18c(0x1be)]['commandBuy']=function(){const _0x4e6dfa=_0x42c18c;VisuMZ[_0x4e6dfa(0x15c)][_0x4e6dfa(0x144)][_0x4e6dfa(0xce)](this);if(this[_0x4e6dfa(0x1d0)]()){if('LluQB'!==_0x4e6dfa(0x1d1))this['setBustStyleUIMessageType']('commandBuy');else return this[_0x4e6dfa(0x199)]()[_0x4e6dfa(0x110)];}},VisuMZ['ShopBustStyleUI'][_0x42c18c(0x115)]=Scene_Shop[_0x42c18c(0x1be)]['commandSell'],Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x185)]=function(){const _0x58d2c6=_0x42c18c;VisuMZ[_0x58d2c6(0x15c)]['Scene_Shop_commandSell']['call'](this);if(this['isUsingShopBustStyleUI']()){if(_0x58d2c6(0x165)===_0x58d2c6(0x100)){if(_0x44c655[_0x58d2c6(0x15c)][_0x58d2c6(0x141)][_0x58d2c6(0xb7)][_0x58d2c6(0x150)])return _0x41b1f2[_0x58d2c6(0x15c)]['Settings']['SceneShopData'][_0x58d2c6(0x150)][_0x58d2c6(0xce)](this);const _0x236ce8=this[_0x58d2c6(0x1b4)](),_0xd10a33=_0x236ce8[_0x58d2c6(0xb8)],_0x325105=this[_0x58d2c6(0x1c5)](0x1,!![]),_0x5b2b4b=_0x236ce8['x'],_0x11f861=_0x236ce8['y'];return new _0x55de39(_0x5b2b4b,_0x11f861,_0xd10a33,_0x325105);}else this[_0x58d2c6(0xf0)]('commandSell');}},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0xaf)]=Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x1b4)],Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x1b4)]=function(){const _0x264974=_0x42c18c;if(this[_0x264974(0x1d0)]()){if('QxlQI'!==_0x264974(0x11c))return this[_0x264974(0x1c2)]();else _0x331c67['prototype'][_0x264974(0xe5)][_0x264974(0xce)](this,_0x40b123);}else{if(_0x264974(0x11d)!==_0x264974(0x11d))this[_0x264974(0x190)][_0x264974(0xf1)](),this['_statusWindow']['show'](),this[_0x264974(0x1a5)][_0x264974(0xad)]();else return VisuMZ[_0x264974(0x15c)][_0x264974(0xaf)][_0x264974(0xce)](this);}},Scene_Shop[_0x42c18c(0x1be)]['getShopBustStyleUI_NumberWindow_Rect']=function(){const _0x4846fd=_0x42c18c;if(VisuMZ[_0x4846fd(0x15c)][_0x4846fd(0x141)][_0x4846fd(0xb7)]['Window_ShopNumber_RectJS']){if(_0x4846fd(0x17d)!==_0x4846fd(0x18c))return VisuMZ[_0x4846fd(0x15c)]['Settings'][_0x4846fd(0xb7)][_0x4846fd(0xf9)][_0x4846fd(0xce)](this);else{this[_0x4846fd(0xf0)](_0x4846fd(0xbe)),this['_commandWindow']['close'](),this['_goldWindow'][_0x4846fd(0x1a8)]();const _0x3dced4=_0x2ff25d[_0x4846fd(0x114)][_0x4846fd(0xee)];_0x54318f(this[_0x4846fd(0x112)][_0x4846fd(0x16f)](this),_0x3dced4);}}const _0x1faa95=Scene_Shop['SHOP_BUST_STYLE_UI'][_0x4846fd(0x191)],_0x280161=Scene_Shop[_0x4846fd(0x114)][_0x4846fd(0xf7)],_0x1a572f=Math[_0x4846fd(0x102)](Graphics[_0x4846fd(0x1b2)],0x330),_0x4e881d=Math[_0x4846fd(0xac)](this['mainAreaHeight']()-this[_0x4846fd(0x1c5)](0x4,![])-this[_0x4846fd(0x1c5)](0x1,!![])*_0x1faa95),_0x458a9c=Math[_0x4846fd(0x102)]((Graphics[_0x4846fd(0x1b2)]-_0x1a572f)/0x2,0xc0),_0x3a2ea0=_0x1a572f-this[_0x4846fd(0x1c1)]()+_0x458a9c,_0x3883cd=Math[_0x4846fd(0x102)](Math[_0x4846fd(0x18f)](_0x4e881d/_0x1faa95),this[_0x4846fd(0x1c5)](_0x280161,!![])),_0x4a2cf2=Math['floor']((Graphics['boxWidth']-_0x1a572f)/0x4),_0x3a7e03=this[_0x4846fd(0x1b6)]()+Math['floor']((_0x4e881d-_0x3883cd*_0x1faa95)/0x2);return new Rectangle(_0x4a2cf2,_0x3a7e03,_0x3a2ea0,_0x3883cd);},VisuMZ[_0x42c18c(0x15c)]['Scene_Shop_onNumberCancel']=Scene_Shop[_0x42c18c(0x1be)]['onNumberCancel'],Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x1af)]=function(){const _0x14cb59=_0x42c18c;VisuMZ[_0x14cb59(0x15c)]['Scene_Shop_onNumberCancel'][_0x14cb59(0xce)](this);if(this[_0x14cb59(0x1d0)]())switch(this[_0x14cb59(0x1a5)][_0x14cb59(0x19d)]()){case _0x14cb59(0x122):this['setBustStyleUIMessageType'](_0x14cb59(0x1ae));break;case _0x14cb59(0x133):this[_0x14cb59(0xf0)](_0x14cb59(0x185));break;}},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0x17f)]=Scene_Shop[_0x42c18c(0x1be)]['doBuy'],Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x142)]=function(_0x810c42){const _0x10ee60=_0x42c18c;VisuMZ[_0x10ee60(0x15c)][_0x10ee60(0x17f)][_0x10ee60(0xce)](this,_0x810c42);if(this[_0x10ee60(0x1d0)]()){if(_0x10ee60(0x1a9)!=='ZHmQm')return _0x48924e[_0x10ee60(0x15c)][_0x10ee60(0x134)][_0x10ee60(0xce)](this);else this['setBustStyleUIMessageType'](_0x10ee60(0x142));}},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0xaa)]=Scene_Shop['prototype'][_0x42c18c(0x109)],Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x109)]=function(_0x24a2e8){const _0x45a092=_0x42c18c;VisuMZ[_0x45a092(0x15c)][_0x45a092(0xaa)][_0x45a092(0xce)](this,_0x24a2e8),this[_0x45a092(0x1d0)]()&&this['setBustStyleUIMessageType']('doSell');},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0x11f)]=Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0xf4)],Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0xf4)]=function(){const _0x439580=_0x42c18c;if(this['isUsingShopBustStyleUI']())return this[_0x439580(0xcf)]();else{if('RaPCQ'===_0x439580(0x1b1)){_0x5273bb['messages']={};const _0x62effa=_0x51a69f[_0x439580(0x181)]||{},_0x14208f=_0x32aa45[_0x439580(0x15c)]['Settings'][_0x439580(0xc3)]||{},_0x54639b=[_0x439580(0x194),'leave',_0x439580(0x1ae),_0x439580(0x15e),_0x439580(0x186),_0x439580(0x142),_0x439580(0x185),_0x439580(0xbd),_0x439580(0x17e),_0x439580(0x109)];for(const _0x55423f of _0x54639b){const _0x26cc4a=_0x55423f+_0x439580(0xbf),_0x47e003=_0x55423f+'_Bust',_0x3df555=_0x55423f+_0x439580(0xe6);_0x397358[_0x439580(0x181)][_0x26cc4a]=_0x62effa[_0x26cc4a]??_0x14208f[_0x26cc4a]??'',_0x465479[_0x439580(0x181)][_0x47e003]=_0x62effa[_0x47e003]??_0x14208f[_0x47e003]??'',_0x421e43[_0x439580(0x181)][_0x3df555]=_0x62effa[_0x3df555]??_0x14208f[_0x3df555]??'';}}else return VisuMZ['ShopBustStyleUI']['Scene_Shop_statusWindowRect'][_0x439580(0xce)](this);}},Scene_Shop['prototype']['getShopBustStyleUI_StatusWindow_Rect']=function(){const _0x1ed4b5=_0x42c18c;if(VisuMZ[_0x1ed4b5(0x15c)]['Settings']['SceneShopData'][_0x1ed4b5(0x10d)])return VisuMZ[_0x1ed4b5(0x15c)][_0x1ed4b5(0x141)][_0x1ed4b5(0xb7)][_0x1ed4b5(0x10d)][_0x1ed4b5(0xce)](this);const _0x43ef56=this[_0x1ed4b5(0x1b4)](),_0x1118fb=Scene_Shop[_0x1ed4b5(0x114)]['windowScale'],_0x1e3f41=Scene_Shop[_0x1ed4b5(0x114)][_0x1ed4b5(0x1b0)],_0x924ddc=Math[_0x1ed4b5(0x18f)](this[_0x1ed4b5(0x1c1)]()),_0x250fc7=Math[_0x1ed4b5(0x18f)](_0x43ef56['height']/(_0x1e3f41/_0x1118fb)),_0x2d3bbb=_0x43ef56['x']+Math['ceil'](_0x43ef56[_0x1ed4b5(0xb8)]*_0x1118fb),_0x5cf809=_0x43ef56['y'];return new Rectangle(_0x2d3bbb,_0x5cf809,_0x924ddc,_0x250fc7);},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0x134)]=Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0xc9)],Scene_Shop['prototype'][_0x42c18c(0xc9)]=function(){const _0x5309f7=_0x42c18c;if(this[_0x5309f7(0x1d0)]())return this['getShopBustStyleUI_BuyWindow_Rect']();else{if(_0x5309f7(0x161)!==_0x5309f7(0x14b))return VisuMZ['ShopBustStyleUI'][_0x5309f7(0x134)][_0x5309f7(0xce)](this);else this[_0x5309f7(0x101)]();}},Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x157)]=function(){const _0xda10b8=_0x42c18c;if(VisuMZ[_0xda10b8(0x15c)]['Settings'][_0xda10b8(0xb7)][_0xda10b8(0x1b8)])return _0xda10b8(0x197)!=='BNhTq'?VisuMZ[_0xda10b8(0x15c)][_0xda10b8(0x141)][_0xda10b8(0xb7)]['Window_ShopBuy_RectJS'][_0xda10b8(0xce)](this):this['getHospitalBustStyleUISettings']()[_0xda10b8(0x110)];const _0x34a678=this[_0xda10b8(0x1b4)](),_0x44c53b=_0x34a678['width'],_0x3b7a23=_0x34a678[_0xda10b8(0x159)],_0x3096b3=_0x34a678['x'],_0xf01d10=_0x34a678['y'];return new Rectangle(_0x3096b3,_0xf01d10,_0x44c53b,_0x3b7a23);},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0xd4)]=Scene_Shop['prototype'][_0x42c18c(0x126)],Scene_Shop[_0x42c18c(0x1be)]['activateBuyWindow']=function(){const _0x2f1425=_0x42c18c;VisuMZ[_0x2f1425(0x15c)][_0x2f1425(0xd4)][_0x2f1425(0xce)](this),this[_0x2f1425(0x1d0)]()&&(this[_0x2f1425(0x190)][_0x2f1425(0xf1)](),this[_0x2f1425(0xcd)][_0x2f1425(0xf1)](),this['_commandWindow'][_0x2f1425(0xad)]());},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0xff)]=Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x15e)],Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x15e)]=function(){const _0x2474e8=_0x42c18c;VisuMZ['ShopBustStyleUI']['Scene_Shop_onBuyOk']['call'](this),this[_0x2474e8(0x1d0)]()&&this[_0x2474e8(0xf0)](_0x2474e8(0x15e));},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0x171)]=Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x186)],Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x186)]=function(){const _0x2946b8=_0x42c18c;VisuMZ['ShopBustStyleUI']['Scene_Shop_onBuyCancel'][_0x2946b8(0xce)](this),this[_0x2946b8(0x1d0)]()&&(this[_0x2946b8(0xea)](),this[_0x2946b8(0x1a5)][_0x2946b8(0xf1)](),this[_0x2946b8(0xf0)](_0x2946b8(0x186)));},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0x156)]=Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x143)],Scene_Shop['prototype'][_0x42c18c(0x143)]=function(){const _0x36156c=_0x42c18c;if(this[_0x36156c(0x1d0)]()){if('kjnaZ'!==_0x36156c(0xe9))return this[_0x36156c(0x13e)]();else this[_0x36156c(0x11b)]();}else{if(_0x36156c(0x146)!==_0x36156c(0x146))this[_0x36156c(0x177)]();else return VisuMZ[_0x36156c(0x15c)]['Scene_Shop_categoryWindowRect']['call'](this);}},Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x13e)]=function(){const _0x28bf7b=_0x42c18c;if(VisuMZ[_0x28bf7b(0x15c)][_0x28bf7b(0x141)][_0x28bf7b(0xb7)][_0x28bf7b(0x150)])return VisuMZ[_0x28bf7b(0x15c)][_0x28bf7b(0x141)][_0x28bf7b(0xb7)][_0x28bf7b(0x150)][_0x28bf7b(0xce)](this);const _0x2975a3=this['numberWindowRect'](),_0x544428=_0x2975a3[_0x28bf7b(0xb8)],_0x41a1b5=this[_0x28bf7b(0x1c5)](0x1,!![]),_0xb77ff2=_0x2975a3['x'],_0x11a390=_0x2975a3['y'];return new Rectangle(_0xb77ff2,_0x11a390,_0x544428,_0x41a1b5);},VisuMZ['ShopBustStyleUI'][_0x42c18c(0x151)]=Scene_Shop['prototype'][_0x42c18c(0x179)],Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x179)]=function(){const _0x298bb7=_0x42c18c;VisuMZ[_0x298bb7(0x15c)][_0x298bb7(0x151)]['call'](this),this['isUsingShopBustStyleUI']()&&(_0x298bb7(0x153)!=='wrUJS'?(this['hideWindowsShopBustStyleUI'](),this['_commandWindow'][_0x298bb7(0xf1)](),this['setBustStyleUIMessageType']('onSellCancel')):(_0x3ca1d0[_0x298bb7(0x15c)][_0x298bb7(0x115)][_0x298bb7(0xce)](this),this[_0x298bb7(0x1d0)]()&&this['setBustStyleUIMessageType'](_0x298bb7(0x185))));},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0x14e)]=Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x1ce)],Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x1ce)]=function(){const _0x896940=_0x42c18c;if(this['isUsingShopBustStyleUI']())return this[_0x896940(0x1cb)]();else{if(_0x896940(0xdb)===_0x896940(0xdb))return VisuMZ[_0x896940(0x15c)][_0x896940(0x14e)][_0x896940(0xce)](this);else this['createShopBustStyleUI_BackgroundImages'](),this['createShopBustStyleUI_BustImage']();}},Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x1cb)]=function(){const _0x5adf1a=_0x42c18c;if(VisuMZ[_0x5adf1a(0x15c)][_0x5adf1a(0x141)][_0x5adf1a(0xb7)]['Window_ShopSell_RectJS'])return VisuMZ[_0x5adf1a(0x15c)]['Settings']['SceneShopData'][_0x5adf1a(0x1c0)]['call'](this);const _0x4544f5=this[_0x5adf1a(0x1b4)](),_0x2a6ff7=Scene_Shop[_0x5adf1a(0x114)][_0x5adf1a(0x191)],_0x27b1dd=_0x4544f5['width'],_0x307730=_0x4544f5[_0x5adf1a(0x159)]-this['calcWindowHeight'](0x1,!![]),_0x6cc1ef=_0x4544f5['x'],_0x290013=_0x4544f5['y']+Math[_0x5adf1a(0xac)](this[_0x5adf1a(0x1c5)](0x1,!![])*_0x2a6ff7);return new Rectangle(_0x6cc1ef,_0x290013,_0x27b1dd,_0x307730);},VisuMZ[_0x42c18c(0x15c)][_0x42c18c(0xfb)]=Scene_Shop[_0x42c18c(0x1be)]['activateSellWindow'],Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0x147)]=function(){const _0x1e683c=_0x42c18c;VisuMZ[_0x1e683c(0x15c)][_0x1e683c(0xfb)][_0x1e683c(0xce)](this),this[_0x1e683c(0x1d0)]()&&(_0x1e683c(0xd3)!==_0x1e683c(0xd3)?(this['createShopBustStyleUI_MessageWindow'](),this[_0x1e683c(0xd1)](),this[_0x1e683c(0xea)](),this[_0x1e683c(0xf0)](_0x1e683c(0x194))):(this[_0x1e683c(0xea)](),this[_0x1e683c(0x190)][_0x1e683c(0xf1)](),this['_statusWindow'][_0x1e683c(0xf1)](),this[_0x1e683c(0x1a5)][_0x1e683c(0xad)]()));},VisuMZ['ShopBustStyleUI'][_0x42c18c(0x1bb)]=Scene_Shop[_0x42c18c(0x1be)]['onSellOk'],Scene_Shop[_0x42c18c(0x1be)][_0x42c18c(0xbd)]=function(){const _0x4d8fb8=_0x42c18c;VisuMZ[_0x4d8fb8(0x15c)][_0x4d8fb8(0x1bb)]['call'](this);if(this[_0x4d8fb8(0x1d0)]()){if(_0x4d8fb8(0x118)===_0x4d8fb8(0x118))this[_0x4d8fb8(0xd5)][_0x4d8fb8(0xad)](),this[_0x4d8fb8(0xf0)](_0x4d8fb8(0xbd));else return this['_recruitBustStyleUiSettings']===_0x4a15c3&&this[_0x4d8fb8(0x168)](),this[_0x4d8fb8(0xcb)];}},VisuMZ[_0x42c18c(0x15c)]['Scene_Shop_onSellCancel']=Scene_Shop['prototype']['onSellCancel'],Scene_Shop[_0x42c18c(0x1be)]['onSellCancel']=function(){const _0x279a67=_0x42c18c;VisuMZ['ShopBustStyleUI'][_0x279a67(0xab)][_0x279a67(0xce)](this);if(this['isUsingShopBustStyleUI']()){if(_0x279a67(0x11e)!==_0x279a67(0x136))this[_0x279a67(0xea)](),this[_0x279a67(0x1a5)][_0x279a67(0xf1)]();else{const _0xf006cd=_0x198739[_0x279a67(0x12e)]||{},_0x1be3a1=_0x5e6c26['ShopBustStyleUI'][_0x279a67(0x141)][_0x279a67(0xa6)]||{};_0x23c9d0[_0x279a67(0x121)]=_0xf006cd[_0x279a67(0x121)]??_0x1be3a1['bustAnchorX']??0.5,_0x550c31[_0x279a67(0xf8)]=_0xf006cd['bustAnchorY']??_0x1be3a1[_0x279a67(0xf8)]??0.5;const _0x1043f5=_0xf006cd[_0x279a67(0x1bc)]??_0x1be3a1[_0x279a67(0x1bc)]??0.8;_0x565ec7['bustPositionX']=_0x46309f['round'](_0x1043f5*_0x373818['width']);const _0x285dac=_0xf006cd[_0x279a67(0x169)]??_0x1be3a1['bustPositionY']??0x1;_0x15cd10[_0x279a67(0x169)]=_0x1bf6df[_0x279a67(0x16b)](_0x285dac*_0x52acc2[_0x279a67(0x159)]);}}},Scene_MenuBase[_0x42c18c(0x1be)][_0x42c18c(0xe0)]=function(){const _0x6a7eaa=_0x42c18c,_0x3769d5=this['getShopBustStyleUI_MessageWindow_Rect'](),_0x7630fd=new Window_ShopBustUiHelp(_0x3769d5);this[_0x6a7eaa(0xb0)](_0x7630fd),this[_0x6a7eaa(0x1c9)]=_0x7630fd;},Scene_MenuBase[_0x42c18c(0x1be)][_0x42c18c(0x18d)]=function(){const _0x27bcf2=_0x42c18c;if(VisuMZ[_0x27bcf2(0x15c)]['Settings'][_0x27bcf2(0xb7)][_0x27bcf2(0x13d)])return VisuMZ[_0x27bcf2(0x15c)][_0x27bcf2(0x141)]['SceneShopData']['Window_ShopMsg_RectJS'][_0x27bcf2(0xce)](this);const _0xf069d2=Math[_0x27bcf2(0x102)](Graphics[_0x27bcf2(0x1b2)],0x330),_0x4c27ba=this['calcWindowHeight'](0x4,![]),_0x2fef17=Math[_0x27bcf2(0x18f)]((Graphics[_0x27bcf2(0x1b2)]-_0xf069d2)/0x2),_0x514f2e=this[_0x27bcf2(0x170)]()-_0x4c27ba;return new Rectangle(_0x2fef17,_0x514f2e,_0xf069d2,_0x4c27ba);},Scene_MenuBase[_0x42c18c(0x1be)][_0x42c18c(0xf0)]=function(_0x4ce780){const _0x54f3cd=_0x42c18c;if(this[_0x54f3cd(0x1c9)]){if(_0x54f3cd(0x175)===_0x54f3cd(0x175))this['_shopBustStyleUI_MessageWindow'][_0x54f3cd(0x124)](_0x4ce780);else{_0x1e511a[_0x54f3cd(0x172)](_0x12e7e7,_0x1cfb97);const _0x4238ec=_0xddc9c9[_0x54f3cd(0x152)]();_0x4238ec['enabled']=!![],_0x4238ec[_0x54f3cd(0x130)]=_0x19a964[_0x54f3cd(0x130)]||'',_0x4238ec[_0x54f3cd(0x1bf)]=_0x196ce1[_0x54f3cd(0x1bf)]||'';{const _0x24474d=_0x3e8c1b[_0x54f3cd(0x12e)]||{},_0x5a40d0=_0x5a7b90[_0x54f3cd(0x15c)][_0x54f3cd(0x141)]['DefaultBust']||{};_0x4238ec['bustAnchorX']=_0x24474d[_0x54f3cd(0x121)]??_0x5a40d0[_0x54f3cd(0x121)]??0.5,_0x4238ec[_0x54f3cd(0xf8)]=_0x24474d[_0x54f3cd(0xf8)]??_0x5a40d0[_0x54f3cd(0xf8)]??0.5;const _0x26ae07=_0x24474d[_0x54f3cd(0x1bc)]??_0x5a40d0[_0x54f3cd(0x1bc)]??0.8;_0x4238ec[_0x54f3cd(0x1bc)]=_0x4bb5f0[_0x54f3cd(0x16b)](_0x26ae07*_0x5bc580[_0x54f3cd(0xb8)]);const _0x2be612=_0x24474d[_0x54f3cd(0x169)]??_0x5a40d0[_0x54f3cd(0x169)]??0x1;_0x4238ec[_0x54f3cd(0x169)]=_0x52ff7f[_0x54f3cd(0x16b)](_0x2be612*_0x343bf6[_0x54f3cd(0x159)]);}{_0x4238ec['messages']={};const _0x4f9126=_0x3d553d[_0x54f3cd(0x181)]||{},_0x5b835d=_0x1972f4[_0x54f3cd(0x15c)][_0x54f3cd(0x141)][_0x54f3cd(0x127)]||{},_0x4c8356=[_0x54f3cd(0x194),_0x54f3cd(0xbe),_0x54f3cd(0x137),_0x54f3cd(0x1a0),_0x54f3cd(0x10f),_0x54f3cd(0x1c4),'onSkillListCancel'];for(const _0x151555 of _0x4c8356){const _0x359f5a=_0x151555+_0x54f3cd(0xbf),_0x4d4609=_0x151555+_0x54f3cd(0x167),_0x41f3bc=_0x151555+_0x54f3cd(0xe6);_0x4238ec[_0x54f3cd(0x181)][_0x359f5a]=_0x4f9126[_0x359f5a]??_0x5b835d[_0x359f5a]??'',_0x4238ec[_0x54f3cd(0x181)][_0x4d4609]=_0x4f9126[_0x4d4609]??_0x5b835d[_0x4d4609]??'',_0x4238ec['messages'][_0x41f3bc]=_0x4f9126[_0x41f3bc]??_0x5b835d[_0x41f3bc]??'';}}}}},VisuMZ[_0x42c18c(0x15c)]['Window_ShopCommand_maxCols']=Window_ShopCommand[_0x42c18c(0x1be)][_0x42c18c(0x117)],Window_ShopCommand['prototype'][_0x42c18c(0x117)]=function(){const _0x2f74d5=_0x42c18c;return SceneManager[_0x2f74d5(0x119)]&&SceneManager[_0x2f74d5(0x119)][_0x2f74d5(0x1d0)]()?0x1:VisuMZ[_0x2f74d5(0x15c)][_0x2f74d5(0xed)][_0x2f74d5(0xce)](this);};function _0x3ef4(_0x320a01,_0x4b2224){const _0xb136e1=_0xb136();return _0x3ef4=function(_0x3ef439,_0x22ea1a){_0x3ef439=_0x3ef439-0xa5;let _0x38cdc9=_0xb136e1[_0x3ef439];return _0x38cdc9;},_0x3ef4(_0x320a01,_0x4b2224);}function Window_ShopBustUiHelp(){this['initialize'](...arguments);}Window_ShopBustUiHelp[_0x42c18c(0x1be)]=Object[_0x42c18c(0x1ac)](Window_Help[_0x42c18c(0x1be)]),Window_ShopBustUiHelp[_0x42c18c(0x1be)][_0x42c18c(0x178)]=Window_ShopBustUiHelp,Window_ShopBustUiHelp['prototype'][_0x42c18c(0xe5)]=function(_0x2058d1){const _0x89622e=_0x42c18c;Window_Help['prototype']['initialize'][_0x89622e(0xce)](this,_0x2058d1);},Window_ShopBustUiHelp[_0x42c18c(0x1be)][_0x42c18c(0x124)]=function(_0x25fb62){const _0x574652=_0x42c18c,_0x5a0694=SceneManager['_scene']['getShopBustStyleUISettings']();if(!_0x5a0694)return;const _0x53c184=_0x5a0694['messages'];if(!_0x53c184)return;const _0x192aca=_0x25fb62+'_Msg',_0x17a81b=_0x25fb62+_0x574652(0x167),_0x30fc82=_0x25fb62+_0x574652(0xe6),_0x2071d5=_0x53c184[_0x192aca];if(_0x2071d5===this[_0x574652(0x14c)])return;this[_0x574652(0xa5)](_0x2071d5);if(_0x53c184[_0x17a81b]){if('EzQHO'===_0x574652(0x10c)){const _0x13cd3f=ImageManager['loadPicture'](_0x53c184[_0x17a81b]);_0x13cd3f['addLoadListener'](this[_0x574652(0x10a)][_0x574652(0x16f)](this,_0x13cd3f));}else this[_0x574652(0x192)]();}Imported[_0x574652(0x1c6)]&&_0x53c184[_0x30fc82]&&this[_0x574652(0x104)](_0x53c184[_0x30fc82]);},Window_ShopBustUiHelp[_0x42c18c(0x1be)]['setMessageBust']=function(_0x558369){const _0xac7312=_0x42c18c,_0x2e1f45=SceneManager[_0xac7312(0x119)][_0xac7312(0x174)];if(!_0x2e1f45)return;_0x2e1f45[_0xac7312(0xd9)]=_0x558369;},Window_ShopBustUiHelp[_0x42c18c(0x1be)]['setMessageVoice']=function(_0x358221){const _0x330f1a=_0x42c18c,_0xc923c1=VisuMZ[_0x330f1a(0x15c)][_0x330f1a(0x141)]['VoiceLine'],_0x5b1c9a={'name':_0x358221,'volume':_0xc923c1[_0x330f1a(0x1b5)]??0x5a,'pitch':_0xc923c1[_0x330f1a(0xe7)]??0x64,'pan':_0xc923c1['pan']??0x0},_0x541180=_0xc923c1[_0x330f1a(0x14a)]??0x1f4;setTimeout(this['playMessageVoice']['bind'](this,_0x5b1c9a),_0x541180);},Window_ShopBustUiHelp[_0x42c18c(0x1be)][_0x42c18c(0xd8)]=function(_0x360844){const _0x87fd28=_0x42c18c;AudioManager[_0x87fd28(0x16c)](),AudioManager[_0x87fd28(0x120)](_0x360844);};