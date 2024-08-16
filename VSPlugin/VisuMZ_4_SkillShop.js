//=============================================================================
// VisuStella MZ - Skill Shop
// VisuMZ_4_SkillShop.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_SkillShop = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SkillShop = VisuMZ.SkillShop || {};
VisuMZ.SkillShop.version = 1.04;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.04] [SkillShop]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Skill_Shop_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows you to call forth a Skill Shop that contains varying
 * skills that the player can purchase with gold to teach to various party
 * members as long as the shop's skill requirements are met.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Call forth a new scene in the form of a skill shop for the player to
 *   select and purchase skills to teach to various party members.
 * * Skills can have custom cost amounts.
 * * Skills can require certain party members to be at certain levels, classes,
 *   or even have learned other skills before being taught.
 * * Skills can also be locked away behind switch requirements.
 * * Different shops opened by different events can contain different skills.
 * * Apply a discount rate to the shop to reduce the cost of all skills within
 *   that shop.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
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
 * VisuMZ_2_MoreCurrencies
 * 
 * Skills can also be learned with items, weapons, armors, and/or variables as
 * long as this plugin is present and the respective notetags are used.
 * 
 * ---
 * 
 * VisuMZ_3_VisualGoldDisplay
 * 
 * The cost of skills will be shown in Visual Gold Display format.
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
 * === Skill Shop-Related Notetags ===
 * 
 * ---
 *
 * <Skill Shop Cost: x>
 *
 * - Used for: Skill Notetags
 * - Changes the cost of this skill to 'x' in order for it to be learned from
 *   a skill shop.
 * - Replace 'x' with a number representing the cost of the skill to be learned
 *   from a skill shop.
 * - If this notetag is not used, use the default cost value found in the
 *   Plugin Parameters.
 *
 * ---
 *
 * <Item id Learn Cost: x>
 * <Item name Learn Cost: x>
 *
 * <Weapon id Learn Cost: x>
 * <Weapon name Learn Cost: x>
 *
 * <Armor id Learn Cost: x>
 * <Armor name Learn Cost: x>
 *
 * <Variable id Learn Cost: x>
 * 
 * - Used for: Skill Notetags
 * - Requires Imported.VisuMZ_2_MoreCurrencies!
 * - Allows purchase of skill using items, weapons, armors, or variables as
 *   extended currency.
 * - Replace 'id' with a number representing the ID of the item, weapon, armor,
 *   or variable to be taken (when bought).
 * - Replace 'name' with the name of the item, weapon, armor, or variable to be
 *   taken (when bought).
 * - Replace 'x' with the quantity of the item, weapon, armor, or variable that
 *   will be taken (when bought).
 * - Insert multiple copies of these notetags to add more item, weapon, armor,
 *   or variable costs.
 * 
 * ---
 *
 * <Skill Shop Require Class: id>
 * <Skill Shop Require Classes: id, id, id>
 *
 * <Skill Shop Require Class: name>
 * <Skill Shop Require Classes: name, name, name>
 *
 * - Used for: Skill Notetags
 * - This skill can only be learned by actors with the specified class(es)
 *   when taught through the skill shop.
 * - For 'id' variant, replace 'id' with a number representing the class ID.
 * - For 'name' variant, replace 'name' with the class's name.
 *
 * ---
 * 
 * <Skill Shop Require Level: x>
 * 
 * - Used for: Skill Notetags
 * - This skill can only be learned by actors who are at least level 'x'.
 * - Replace 'x' with a number representing the required level.
 * 
 * ---
 *
 * <Skill Shop Require Learned Skill: id>
 * <Skill Shop Require Learned Skills: id, id, id>
 *
 * <Skill Shop Require Learned Skill: name>
 * <Skill Shop Require Learned Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - This skill can only be learned by actors who have learned the listed
 *   skill(s). All of the skills must be learned.
 * - For 'id' variant, replace 'id' with a number representing the skill ID.
 * - For 'name' variant, replace 'name' with the skill's name.
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
 * === Scene Plugin Commands ===
 * 
 * ---
 *
 * Scene: Open Skill Shop
 * - Opens a skill shop with the below skills for sale.
 * - Cannot be used in battle.
 *
 *   Skill ID(s):
 *   - Select which Skill ID(s) to include in the shop.
 *
 *   Discount Rate:
 *   - Determine the discount rate used for this shop.
 *   - You may use JavaScript code.
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
 * General Settings
 * 
 *   Default Skill Cost:
 *   - What is the default skill cost for skills that lack the
 *     <Skill Shop Cost: x> notetag?
 *
 * ---
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_SkillShop.
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
 * Command Window
 * 
 *   Learn Text:
 *   - Text used for this command.
 * 
 *     Icon:
 *     - Icon used for this command.
 * 
 *     Help Description:
 *     - Help window description used for this command.
 *     - Text codes allowed.
 * 
 *   Exit Text:
 *   - Text used for this command.
 * 
 *     Icon:
 *     - Icon used for this command.
 * 
 *     Help Description:
 *     - Help window description used for this command.
 *     - Text codes allowed.
 * 
 * ---
 * 
 * Actor List Window
 * 
 *   Help Description:
 *   - Help window description used for actors.
 *   - %1 - Name, %2 - Level, %3 - Class Name, %4 - Skill Types
 * 
 *   Skill Type Joiner:
 *   - Text used to join together skill types for the help description.
 * 
 *   Joiner Space:
 *   - Adds a space after the join type, too.
 *
 * ---
 *
 * Skill List Window
 * 
 *   Already Learned:
 *   - Text used for a skill that's already learned.
 * 
 *   No SType Access:
 *   - Text used for a skill that's missing SType access.
 *   - %1 - Skill Type Name
 * 
 *   Wrong Class:
 *   - Text used for a skill that needs certain classes.
 *   - %1 - Actor's Current Class Name
 * 
 *   For Class:
 *   - Text used for a skill that needs a certain class.
 *   - %1 - Specific Class Name
 * 
 *   Level Requirement:
 *   - Text used for a skill that requires a minimum level.
 *   - %1 - Needed Level
 * 
 *   Learned Skill:
 *   - Text used for a skill that requires a learned skill.
 *   - %1 - Needed Skill Name, %2 - Icon
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
 * ---
 * 
 * Gold Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Command Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Style:
 *   - How do you wish to draw commands for this window?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Actor List Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Draw Actor Face?:
 *   - Draws the face of the actor.
 * 
 *   Draw Actor Name?:
 *   - Draws the name of the actor.
 * 
 *   Draw Actor Class?:
 *   - Draws the class of the actor.
 *   - If screen resolution UI is too small, class name won't be drawn.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 *
 * Skill List Window
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
 * Version 1.04: December 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause a crash if More Currencies wasn't present.
 *    Fix made by Arisu.
 * 
 * Version 1.03: November 16, 2023
 * * Compatibility Update!
 * ** Added compatibility with VisuMZ_2_MoreCurrencies!
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated "VisuStella MZ Compatibility" section:
 * *** VisuMZ_2_MoreCurrencies
 * **** Skills can also be learned with items, weapons, armors, and/or
 *      variables as long as this plugin is present and the respective notetags
 *      are used.
 * * New Features!
 * ** New compatibility notetags added by Arisu:
 * *** <Item id Learn Cost: x>
 * *** <Weapon id Learn Cost: x>
 * *** <Armor id Learn Cost: x>
 * *** <Variable id Learn Cost: x>
 * **** Requires VisuMZ_2_MoreCurrencies!
 * **** Allows purchase of skill using items, weapons, armors, or variables as
 *      extended currency.
 * 
 * Version 1.02: August 17, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.01: May 18, 2023
 * * Bug Fixes!
 * ** If faces weren't loaded ahead of time, they wouldn't show up in the shop.
 *    This should now be fixed. Fix made by Arisu.
 * * Documentation Update!
 * ** Updated Plugin Parameter for "Draw Actor Class?" to have this line:
 * *** If screen resolution UI is too small, class name won't be drawn.
 * * Feature Update!
 * ** If your screen resolution UI is too small, the class name won't be drawn.
 *    Update made by Arisu.
 * 
 * Version 1.00 Official Release Date: May 26, 2023
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
 * @command SceneOpenSkillShop
 * @text Scene: Open Skill Shop
 * @desc Opens a skill shop with the below skills for sale.
 * Cannot be used in battle.
 *
 * @arg SkillIDs:arraynum
 * @text Skill ID(s)
 * @type skill[]
 * @desc Select which Skill ID(s) to include in the shop.
 * @default []
 *
 * @arg DiscountRate:eval
 * @text Discount Rate
 * @desc Determine the discount rate used for this shop.
 * You may use JavaScript code.
 * @default 0.00
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
 * @param SkillShop
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param DefaultSkillCost:num
 * @text Default Skill Cost
 * @parent Default
 * @desc What is the default skill cost for skills that
 * lack the <Skill Shop Cost: x> notetag?
 * @default 1000
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for Scene_SkillShop.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"Window_SkillShopCommand":"","LearnText:str":"Learn","LearnIcon:str":"79","LearnHelpDesc:json":"\"Select a skill for a party member to learn.\"","CancelText:str":"Exit","CancelIcon:str":"82","CancelHelpDesc:json":"\"Leave the skill shop.\"","Window_SkillShopActorList":"","ActorHelpDescFmt:json":"\"%1 is a level %2 %3.\\nCan learn %4 skills.\"","stypeJoin:str":",","spaceJoin:eval":"true","Window_SkillShopSkillList":"","alreadyLearned:str":"Learned","noStypeAccess:str":"No %1 Access","wrongClass:str":"Not For %1","forClass:str":"For %1","levelRequirement:str":"Needs Lv %1","skillLearnRequirement:str":"Needs %2%1"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you adjust the windows displayed for this plugin.
 * @default {"Window_Help":"","HelpWindow_BgType:num":"0","Window_Gold":"","GoldWindow_BgType:num":"0","GoldWindow_RectJS:func":"\"const ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = Graphics.boxWidth - ww;\\nconst wy = this.mainAreaTop();\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_SkillShopCommand":"","CommandWindow_BgType:num":"0","CommandWindow_Style:str":"auto","CommandWindow_RectJS:func":"\"const ww = Graphics.boxWidth - this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = 0;\\nconst wy = this.mainAreaTop();\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_SkillShopActorList":"","ActorListWindow_BgType:num":"0","drawActorFace:eval":"true","drawActorName:eval":"true","drawActorClass:eval":"true","ActorListWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2);\\nconst wh = this.mainAreaHeight() - this.calcWindowHeight(1, true);\\nconst wx = 0;\\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, true);\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_SkillShopSkillList":"","SkillListWindow_BgType:num":"0","SkillListWindow_RectJS:func":"\"const ww = Math.ceil(Graphics.boxWidth / 2);\\nconst wh = this.mainAreaHeight() - this.calcWindowHeight(1, true);\\nconst wx = Math.floor(Graphics.boxWidth / 2);\\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, true);\\nreturn new Rectangle(wx, wy, ww, wh);\""}
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
 * @param Window_SkillShopCommand
 * @text Command Window
 *
 * @param LearnText:str
 * @text Learn Text
 * @parent Window_SkillShopCommand
 * @desc Text used for this command.
 * @default Learn
 *
 * @param LearnIcon:str
 * @text Icon
 * @parent LearnText:str
 * @desc Icon used for this command.
 * @default 79
 *
 * @param LearnHelpDesc:json
 * @text Help Description
 * @parent LearnText:str
 * @type note
 * @desc Help window description used for this command.
 * Text codes allowed.
 * @default "Select a skill for a party member to learn."
 *
 * @param CancelText:str
 * @text Cancel Text
 * @parent Window_SkillShopCommand
 * @desc Text used for this command.
 * @default Exit
 *
 * @param CancelIcon:str
 * @text Icon
 * @parent CancelText:str
 * @desc Icon used for this command.
 * @default 82
 *
 * @param CancelHelpDesc:json
 * @text Help Description
 * @parent CancelText:str
 * @type note
 * @desc Help window description used for this command.
 * Text codes allowed.
 * @default "Leave the skill shop."
 * 
 * @param Window_SkillShopActorList
 * @text Actor List Window
 *
 * @param ActorHelpDescFmt:json
 * @text Help Description
 * @parent Window_SkillShopActorList
 * @type note
 * @desc Help window description used for actors.
 * %1 - Name, %2 - Level, %3 - Class Name, %4 - Skill Types
 * @default "%1 is a level %2 %3.\nCan learn %4 skills."
 *
 * @param stypeJoin:str
 * @text Skill Type Joiner
 * @parent ActorHelpDescFmt:json
 * @desc Text used to join together skill types for the help description.
 * @default ,
 *
 * @param spaceJoin:eval
 * @text Joiner Space
 * @parent ActorHelpDescFmt:json
 * @type boolean
 * @on Use Space
 * @off No Space
 * @desc Adds a space after the join type, too.
 * @default true
 * 
 * @param Window_SkillShopSkillList
 * @text Skill List Window
 *
 * @param alreadyLearned:str
 * @text Already Learned
 * @parent Window_SkillShopSkillList
 * @desc Text used for a skill that's already learned.
 * @default Learned
 *
 * @param noStypeAccess:str
 * @text No SType Access
 * @parent Window_SkillShopSkillList
 * @desc Text used for a skill that's missing SType access.
 * %1 - Skill Type Name
 * @default No %1 Access
 *
 * @param wrongClass:str
 * @text Wrong Class
 * @parent Window_SkillShopSkillList
 * @desc Text used for a skill that needs certain classes.
 * %1 - Actor's Current Class Name
 * @default Not For %1
 *
 * @param forClass:str
 * @text For Class
 * @parent Window_SkillShopSkillList
 * @desc Text used for a skill that needs a certain class.
 * %1 - Specific Class Name
 * @default For %1
 *
 * @param levelRequirement:str
 * @text Level Requirement
 * @parent Window_SkillShopSkillList
 * @desc Text used for a skill that requires a minimum level.
 * %1 - Needed Level
 * @default Needs Lv %1
 *
 * @param skillLearnRequirement:str
 * @text Learned Skill
 * @parent Window_SkillShopSkillList
 * @desc Text used for a skill that requires a learned skill.
 * %1 - Needed Skill Name, %2 - Icon
 * @default Needs %2%1
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param Window_Help
 * @text Help Window
 *
 * @param HelpWindow_BgType:num
 * @text Background Type
 * @parent Window_Help
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
 * @param Window_Gold
 * @text Gold Window
 *
 * @param GoldWindow_BgType:num
 * @text Background Type
 * @parent Window_Gold
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
 * @param GoldWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_Gold
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(1, true);\nconst wx = Graphics.boxWidth - ww;\nconst wy = this.mainAreaTop();\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_SkillShopCommand
 * @text Command Window
 *
 * @param CommandWindow_BgType:num
 * @text Background Type
 * @parent Window_SkillShopCommand
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
 * @param CommandWindow_Style:str
 * @text Style
 * @parent Window_SkillShopCommand
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
 * @param CommandWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_SkillShopCommand
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - this.mainCommandWidth();\nconst wh = this.calcWindowHeight(1, true);\nconst wx = 0;\nconst wy = this.mainAreaTop();\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_SkillShopActorList
 * @text Actor List Window
 *
 * @param ActorListWindow_BgType:num
 * @text Background Type
 * @parent Window_SkillShopActorList
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
 * @param drawActorFace:eval
 * @text Draw Actor Face?
 * @parent Window_SkillShopActorList
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Draws the face of the actor.
 * @default true
 *
 * @param drawActorName:eval
 * @text Draw Actor Name?
 * @parent Window_SkillShopActorList
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Draws the name of the actor.
 * @default true
 *
 * @param drawActorClass:eval
 * @text Draw Actor Class?
 * @parent Window_SkillShopActorList
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Draws the class of the actor.
 * @default true
 *
 * @param ActorListWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_SkillShopActorList
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2);\nconst wh = this.mainAreaHeight() - this.calcWindowHeight(1, true);\nconst wx = 0;\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, true);\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_SkillShopSkillList
 * @text Skill List Window
 *
 * @param SkillListWindow_BgType:num
 * @text Background Type
 * @parent Window_SkillShopSkillList
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
 * @param SkillListWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_SkillShopSkillList
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.ceil(Graphics.boxWidth / 2);\nconst wh = this.mainAreaHeight() - this.calcWindowHeight(1, true);\nconst wx = Math.floor(Graphics.boxWidth / 2);\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, true);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
//=============================================================================

const _0x293e45=_0x5728;(function(_0x8fa047,_0x489b13){const _0x228e06=_0x5728,_0x291304=_0x8fa047();while(!![]){try{const _0x492e14=-parseInt(_0x228e06(0x1be))/0x1+parseInt(_0x228e06(0xf3))/0x2+-parseInt(_0x228e06(0x23d))/0x3*(-parseInt(_0x228e06(0x139))/0x4)+-parseInt(_0x228e06(0x1d8))/0x5+parseInt(_0x228e06(0x1a6))/0x6+-parseInt(_0x228e06(0x1c0))/0x7+parseInt(_0x228e06(0x19a))/0x8;if(_0x492e14===_0x489b13)break;else _0x291304['push'](_0x291304['shift']());}catch(_0x1f0e6d){_0x291304['push'](_0x291304['shift']());}}}(_0x19d4,0x2e411));var label=_0x293e45(0xee),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x51f1a5){return _0x51f1a5['status']&&_0x51f1a5['description']['includes']('['+label+']');})[0x0];VisuMZ[label][_0x293e45(0x118)]=VisuMZ[label][_0x293e45(0x118)]||{},VisuMZ[_0x293e45(0x10d)]=function(_0x4935e5,_0x2e76a6){const _0x365f7f=_0x293e45;for(const _0x45dc61 in _0x2e76a6){if(_0x45dc61[_0x365f7f(0x24b)](/(.*):(.*)/i)){const _0x33fe1c=String(RegExp['$1']),_0x570a3c=String(RegExp['$2'])[_0x365f7f(0x1c8)]()['trim']();let _0x142cc7,_0x35d871,_0xf74446;switch(_0x570a3c){case _0x365f7f(0x204):_0x142cc7=_0x2e76a6[_0x45dc61]!==''?Number(_0x2e76a6[_0x45dc61]):0x0;break;case _0x365f7f(0x132):_0x35d871=_0x2e76a6[_0x45dc61]!==''?JSON[_0x365f7f(0x1ad)](_0x2e76a6[_0x45dc61]):[],_0x142cc7=_0x35d871['map'](_0x2cd6ff=>Number(_0x2cd6ff));break;case _0x365f7f(0x135):_0x142cc7=_0x2e76a6[_0x45dc61]!==''?eval(_0x2e76a6[_0x45dc61]):null;break;case'ARRAYEVAL':_0x35d871=_0x2e76a6[_0x45dc61]!==''?JSON[_0x365f7f(0x1ad)](_0x2e76a6[_0x45dc61]):[],_0x142cc7=_0x35d871['map'](_0x2acedb=>eval(_0x2acedb));break;case _0x365f7f(0xe4):_0x142cc7=_0x2e76a6[_0x45dc61]!==''?JSON['parse'](_0x2e76a6[_0x45dc61]):'';break;case _0x365f7f(0xdf):_0x35d871=_0x2e76a6[_0x45dc61]!==''?JSON['parse'](_0x2e76a6[_0x45dc61]):[],_0x142cc7=_0x35d871[_0x365f7f(0x1b9)](_0x5db645=>JSON['parse'](_0x5db645));break;case _0x365f7f(0x1ca):_0x142cc7=_0x2e76a6[_0x45dc61]!==''?new Function(JSON[_0x365f7f(0x1ad)](_0x2e76a6[_0x45dc61])):new Function(_0x365f7f(0x125));break;case _0x365f7f(0x1f4):_0x35d871=_0x2e76a6[_0x45dc61]!==''?JSON[_0x365f7f(0x1ad)](_0x2e76a6[_0x45dc61]):[],_0x142cc7=_0x35d871[_0x365f7f(0x1b9)](_0x46006f=>new Function(JSON[_0x365f7f(0x1ad)](_0x46006f)));break;case'STR':_0x142cc7=_0x2e76a6[_0x45dc61]!==''?String(_0x2e76a6[_0x45dc61]):'';break;case _0x365f7f(0x1c6):_0x35d871=_0x2e76a6[_0x45dc61]!==''?JSON[_0x365f7f(0x1ad)](_0x2e76a6[_0x45dc61]):[],_0x142cc7=_0x35d871[_0x365f7f(0x1b9)](_0x3eb170=>String(_0x3eb170));break;case _0x365f7f(0x1ea):_0xf74446=_0x2e76a6[_0x45dc61]!==''?JSON[_0x365f7f(0x1ad)](_0x2e76a6[_0x45dc61]):{},_0x142cc7=VisuMZ[_0x365f7f(0x10d)]({},_0xf74446);break;case _0x365f7f(0x201):_0x35d871=_0x2e76a6[_0x45dc61]!==''?JSON[_0x365f7f(0x1ad)](_0x2e76a6[_0x45dc61]):[],_0x142cc7=_0x35d871[_0x365f7f(0x1b9)](_0x1d8ff9=>VisuMZ[_0x365f7f(0x10d)]({},JSON[_0x365f7f(0x1ad)](_0x1d8ff9)));break;default:continue;}_0x4935e5[_0x33fe1c]=_0x142cc7;}}return _0x4935e5;},(_0x3249b1=>{const _0x5b7e7c=_0x293e45,_0x46d9fd=_0x3249b1[_0x5b7e7c(0x19d)];for(const _0x146f77 of dependencies){if(!Imported[_0x146f77]){if(_0x5b7e7c(0x17e)!=='PXHaQ'){const _0x304c55=_0x576280(_0x4cb16a['$1']);_0x304c55<_0xdb032a?(_0x47c93e('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x5b7e7c(0x226)](_0x37d0db,_0x304c55,_0x110912)),_0xfec36a['exit']()):_0x52ff92=_0x48c923[_0x5b7e7c(0xf1)](_0x304c55,_0x45571d);}else{alert(_0x5b7e7c(0x10b)[_0x5b7e7c(0x226)](_0x46d9fd,_0x146f77)),SceneManager[_0x5b7e7c(0x1de)]();break;}}}const _0x109d3c=_0x3249b1['description'];if(_0x109d3c[_0x5b7e7c(0x24b)](/\[Version[ ](.*?)\]/i)){const _0x24346f=Number(RegExp['$1']);_0x24346f!==VisuMZ[label][_0x5b7e7c(0x1ed)]&&(_0x5b7e7c(0x162)==='IKtzQ'?this[_0x5b7e7c(0x216)](...arguments):(alert(_0x5b7e7c(0x155)['format'](_0x46d9fd,_0x24346f)),SceneManager[_0x5b7e7c(0x1de)]()));}if(_0x109d3c['match'](/\[Tier[ ](\d+)\]/i)){const _0x5ad3cd=Number(RegExp['$1']);_0x5ad3cd<tier?(alert(_0x5b7e7c(0x210)[_0x5b7e7c(0x226)](_0x46d9fd,_0x5ad3cd,tier)),SceneManager[_0x5b7e7c(0x1de)]()):tier=Math[_0x5b7e7c(0xf1)](_0x5ad3cd,tier);}VisuMZ[_0x5b7e7c(0x10d)](VisuMZ[label][_0x5b7e7c(0x118)],_0x3249b1[_0x5b7e7c(0x15a)]);})(pluginData),PluginManager[_0x293e45(0x16c)](pluginData[_0x293e45(0x19d)],'SceneOpenSkillShop',_0x377c1e=>{const _0x4d99af=_0x293e45;if($gameParty[_0x4d99af(0x16d)]())return;if(SceneManager[_0x4d99af(0x11b)]())return;VisuMZ[_0x4d99af(0x10d)](_0x377c1e,_0x377c1e);const _0x557f0a=_0x377c1e[_0x4d99af(0x1e7)];if(_0x557f0a['length']<=0x0)return;const _0x5a6101=(_0x377c1e[_0x4d99af(0x170)]||0x0)['clamp'](0x0,0x1);SceneManager[_0x4d99af(0x1ba)](Scene_SkillShop),SceneManager[_0x4d99af(0x1ae)](_0x557f0a,_0x5a6101);}),VisuMZ[_0x293e45(0xee)]['RegExp']={'SkillCost':/<(?:SKILL |)SHOP COST:[ ](\d+)>/i,'ClassReq':/<(?:SKILL |)SHOP (?:REQUIRE |)CLASS(?:|ES)(?: REQUIREMENT|):[ ](.*)>/i,'LevelReq':/<(?:SKILL |)SHOP (?:REQUIRE |)LEVEL(?: REQUIREMENT|):[ ](\d+)>/i,'LearnSkillReq':/<(?:SKILL |)SHOP (?:REQUIRE |)(?:LEARNED SKILL|LEARNED SKILLS|SKILL LEARNED|SKILLS LEARNED)(?: REQUIREMENT|):[ ](.*)>/i,'SwitchReq':/<(?:SKILL |)SHOP (?:REQUIRE |)(?:SWITCH|SWITCHES)(?: REQUIREMENT|):[ ](.*)>/i},DataManager[_0x293e45(0x15c)]=function(_0x8b7c3f){const _0x1ad0d1=_0x293e45;if(!_0x8b7c3f)return 0x0;const _0x5a82a7=_0x8b7c3f['id'];this[_0x1ad0d1(0x102)]=this[_0x1ad0d1(0x102)]||{};if(this['_skillShopCost'][_0x5a82a7]!==undefined)return this[_0x1ad0d1(0x102)][_0x5a82a7];this[_0x1ad0d1(0x102)][_0x5a82a7]=Scene_SkillShop['SETTINGS']['defaultCost'];const _0x330fe2=VisuMZ[_0x1ad0d1(0xee)][_0x1ad0d1(0x123)],_0x5cc09d=_0x8b7c3f[_0x1ad0d1(0x1cf)]||'';if(_0x5cc09d[_0x1ad0d1(0x24b)](_0x330fe2[_0x1ad0d1(0x124)])){if(_0x1ad0d1(0x1cb)!==_0x1ad0d1(0x113))this[_0x1ad0d1(0x102)][_0x5a82a7]=Number(RegExp['$1']);else return _0x5531c6['ShopBustStyleUI'][_0x1ad0d1(0x118)][_0x1ad0d1(0x14a)][_0x1ad0d1(0x17c)][_0x1ad0d1(0x1d4)](this);}return this[_0x1ad0d1(0x102)][_0x5a82a7];},DataManager[_0x293e45(0x195)]=function(_0x10a19f){const _0x2be1d4=_0x293e45;if(!_0x10a19f)return[];const _0x41ac9d=_0x10a19f['id'];this[_0x2be1d4(0x129)]=this[_0x2be1d4(0x129)]||{};if(this[_0x2be1d4(0x129)][_0x41ac9d]!==undefined)return this[_0x2be1d4(0x129)][_0x41ac9d];this['_skillShopClassRequirements'][_0x41ac9d]=[];const _0x18bcbb=VisuMZ['SkillShop'][_0x2be1d4(0x123)],_0x216004=_0x10a19f[_0x2be1d4(0x1cf)]||'';if(_0x216004[_0x2be1d4(0x24b)](_0x18bcbb[_0x2be1d4(0x13b)])){if(_0x2be1d4(0x23c)===_0x2be1d4(0x23c)){const _0x2fdc6d=String(RegExp['$1'])[_0x2be1d4(0x1ff)](',')['map'](_0x2f28b8=>_0x2f28b8[_0x2be1d4(0x16e)]());for(const _0x286945 of _0x2fdc6d){if('yooqP'===_0x2be1d4(0x16b)){const _0x4a0c53=_0x363884['x'],_0x3a04b9=_0x4e3a1e['y'],_0x3caef6=_0x49e215[_0x2be1d4(0x11c)];if(this[_0x2be1d4(0x22d)]()&&!this[_0x2be1d4(0x22d)]()[_0x2be1d4(0x15d)](_0x336d07))this['drawCannotLearnReason'](_0x44b81b,_0x4a0c53,_0x3a04b9,_0x3caef6);else{if(_0x2a8ba7[_0x2be1d4(0x23b)])this['drawItemMoreCurrencies'](_0x556cbe,_0x17dc96,![],0x1);else{const _0x327631=_0x36b9b1[_0x2be1d4(0x169)](_0x49dd2a[_0x2be1d4(0x15c)](_0x4a2199)*(0x1-this['_discount']));this[_0x2be1d4(0x119)](_0x327631,_0x2b6627['currencyUnit'],_0x4a0c53,_0x3a04b9,_0x3caef6);}}}else{const _0x4ab24c=/^\d+$/['test'](_0x286945);let _0x5848d1=0x0;_0x4ab24c?_0x2be1d4(0x17b)!==_0x2be1d4(0x17b)?_0x36900d=_0x2b0568[_0x2be1d4(0x203)][_0x2be1d4(0x226)](_0x3ddf86[_0x2be1d4(0x218)](_0x24abb6)):_0x5848d1=Number(_0x286945):_0x5848d1=DataManager['getClassIdWithName'](_0x286945),_0x5848d1&&('EhcJm'===_0x2be1d4(0x23a)?this[_0x2be1d4(0x129)][_0x41ac9d][_0x2be1d4(0x1ba)](_0x5848d1):(this[_0x2be1d4(0x159)]=new _0x129d8f(_0x5a4743['loadTitle1'](_0xadc31b[_0x2be1d4(0x12b)])),this['_backSprite2']=new _0x51ceb2(_0x4884e6['loadTitle2'](_0x47857d[_0x2be1d4(0x14f)])),this[_0x2be1d4(0x220)](this[_0x2be1d4(0x159)]),this['addChild'](this[_0x2be1d4(0x1f7)]),this['_backSprite1'][_0x2be1d4(0x1f6)][_0x2be1d4(0xef)](this[_0x2be1d4(0x19c)]['bind'](this,this[_0x2be1d4(0x159)])),this[_0x2be1d4(0x1f7)][_0x2be1d4(0x1f6)][_0x2be1d4(0xef)](this[_0x2be1d4(0x19c)]['bind'](this,this['_backSprite2']))));}}}else this[_0x2be1d4(0x24f)][_0x2be1d4(0x168)](),this[_0x2be1d4(0x24f)][_0x2be1d4(0x1f5)](),this[_0x2be1d4(0x1cc)][_0x2be1d4(0x1d7)](),this[_0x2be1d4(0x167)]()&&(this[_0x2be1d4(0x17a)]['show'](),this[_0x2be1d4(0x24f)][_0x2be1d4(0xda)](),this[_0x2be1d4(0x107)]['show'](),this[_0x2be1d4(0x1cc)][_0x2be1d4(0x20b)](),this[_0x2be1d4(0x145)](_0x2be1d4(0x1a7)));}return this[_0x2be1d4(0x129)][_0x41ac9d];},DataManager[_0x293e45(0xfd)]=function(_0x445c6b){const _0x3b55aa=_0x293e45;_0x445c6b=_0x445c6b[_0x3b55aa(0x1c8)]()['trim'](),this[_0x3b55aa(0x179)]=this['_classIDs']||{};if(this[_0x3b55aa(0x179)][_0x445c6b])return this[_0x3b55aa(0x179)][_0x445c6b];for(const _0x943915 of $dataClasses){if(!_0x943915)continue;let _0x2a49cf=_0x943915['name'];_0x2a49cf=_0x2a49cf[_0x3b55aa(0x207)](/\x1I\[(\d+)\]/gi,''),_0x2a49cf=_0x2a49cf['replace'](/\\I\[(\d+)\]/gi,''),this[_0x3b55aa(0x179)][_0x2a49cf[_0x3b55aa(0x1c8)]()[_0x3b55aa(0x16e)]()]=_0x943915['id'];}return this[_0x3b55aa(0x179)][_0x445c6b]||0x0;},DataManager[_0x293e45(0x218)]=function(_0x280238){const _0x2a81e9=_0x293e45;if(!_0x280238)return[];const _0xe8c85b=_0x280238['id'];this['_skillShopLevelRequirements']=this[_0x2a81e9(0x233)]||{};if(this[_0x2a81e9(0x233)][_0xe8c85b]!==undefined)return this['_skillShopLevelRequirements'][_0xe8c85b];this[_0x2a81e9(0x233)][_0xe8c85b]=0x0;const _0xb1716=VisuMZ['SkillShop'][_0x2a81e9(0x123)],_0x4ef1fa=_0x280238[_0x2a81e9(0x1cf)]||'';return _0x4ef1fa[_0x2a81e9(0x24b)](_0xb1716[_0x2a81e9(0x1f1)])&&(this[_0x2a81e9(0x233)][_0xe8c85b]=Number(RegExp['$1'])),this[_0x2a81e9(0x233)][_0xe8c85b];},DataManager[_0x293e45(0x105)]=function(_0x2d280c){const _0x5fd534=_0x293e45;if(!_0x2d280c)return[];const _0x309501=_0x2d280c['id'];this[_0x5fd534(0x178)]=this[_0x5fd534(0x178)]||{};if(this[_0x5fd534(0x178)][_0x309501]!==undefined){if('JwQaZ'==='yoTQb'){const _0x5e7c78=this[_0x5fd534(0x136)]();this[_0x5fd534(0x158)](_0x5e7c78>=0x0?_0x5e7c78:0x0);}else return this[_0x5fd534(0x178)][_0x309501];}this[_0x5fd534(0x178)][_0x309501]=[];const _0x1d4bff=VisuMZ[_0x5fd534(0xee)]['RegExp'],_0x3ff927=_0x2d280c[_0x5fd534(0x1cf)]||'';if(_0x3ff927['match'](_0x1d4bff[_0x5fd534(0x22c)])){if(_0x5fd534(0x20e)==='kNNUj'){const _0x544b04=_0x231aa3[_0x5fd534(0xd6)][_0x5fd534(0x198)],_0x39c8a9=this[_0x5fd534(0x22d)]()[_0x5fd534(0x194)]()[_0x5fd534(0x14d)]((_0x33188e,_0x1d5045,_0x462120)=>_0x462120['indexOf'](_0x33188e)===_0x1d5045);let _0x370737=_0xa951f0['SETTINGS']['stypeJoin'];if(_0x571054[_0x5fd534(0xd6)]['spaceJoin'])_0x370737+='\x20';return _0x1f47ad=_0x39c8a9[_0x5fd534(0x1b9)](_0x59d37c=>_0x28f16d['skillTypes'][_0x59d37c])[_0x5fd534(0x1a8)](_0x5ba8c0)[_0x5fd534(0x1a8)](null)[_0x5fd534(0xe5)](_0x370737),_0x544b04[_0x5fd534(0x226)](this[_0x5fd534(0x22d)]()['name'](),this[_0x5fd534(0x22d)]()[_0x5fd534(0x176)],this[_0x5fd534(0x22d)]()[_0x5fd534(0x239)]()[_0x5fd534(0x19d)],_0x13c95b||'');}else{const _0x49a38c=String(RegExp['$1'])['split'](',')['map'](_0x5ca643=>_0x5ca643[_0x5fd534(0x16e)]());for(const _0x5a9b48 of _0x49a38c){const _0x33efc4=/^\d+$/['test'](_0x5a9b48);let _0x2bb6ab=0x0;if(_0x33efc4)_0x2bb6ab=Number(_0x5a9b48);else{if(_0x5fd534(0xe0)!==_0x5fd534(0x1b1))_0x2bb6ab=DataManager[_0x5fd534(0x122)](_0x5a9b48);else{const _0x127de7=_0x2f92dd<0x0?_0x386d44:_0x4854eb[_0x5fd534(0x18f)]()[_0x20e5d4];if(!_0x127de7)return;this['prepareActorFace'](_0x127de7,_0x1a25fb);}}_0x2bb6ab&&this[_0x5fd534(0x178)][_0x309501][_0x5fd534(0x1ba)](_0x2bb6ab);}}}return this[_0x5fd534(0x178)][_0x309501];},DataManager[_0x293e45(0x122)]=function(_0x5483f3){const _0x481f02=_0x293e45;_0x5483f3=_0x5483f3['toUpperCase']()['trim'](),this[_0x481f02(0x149)]=this[_0x481f02(0x149)]||{};if(this[_0x481f02(0x149)][_0x5483f3])return this['_skillIDs'][_0x5483f3];for(const _0x280d2a of $dataSkills){if(!_0x280d2a)continue;this[_0x481f02(0x149)][_0x280d2a['name'][_0x481f02(0x1c8)]()['trim']()]=_0x280d2a['id'];}return this[_0x481f02(0x149)][_0x5483f3]||0x0;},DataManager['skillShopSwitchRequirements']=function(_0x2d80c8){const _0x33e1d4=_0x293e45;if(!_0x2d80c8)return[];const _0x14fee8=_0x2d80c8['id'];this[_0x33e1d4(0x131)]=this[_0x33e1d4(0x131)]||{};if(this['_skillShopSwitchRequirements'][_0x14fee8]!==undefined)return this[_0x33e1d4(0x131)][_0x14fee8];this[_0x33e1d4(0x131)][_0x14fee8]=[];const _0x11fb23=VisuMZ['SkillShop'][_0x33e1d4(0x123)],_0x4a8e17=_0x2d80c8[_0x33e1d4(0x1cf)]||'';return _0x4a8e17[_0x33e1d4(0x24b)](_0x11fb23['SwitchReq'])&&(this[_0x33e1d4(0x131)][_0x14fee8]=String(RegExp['$1'])['split'](',')[_0x33e1d4(0x1b9)](_0xfa3aa6=>Number(_0xfa3aa6))),this['_skillShopSwitchRequirements'][_0x14fee8];},SceneManager['isSceneBattle']=function(){const _0x5151a4=_0x293e45;return this[_0x5151a4(0xe1)]&&this[_0x5151a4(0xe1)]['constructor']===Scene_Battle;},SceneManager[_0x293e45(0x182)]=function(){const _0x54dfc8=_0x293e45;return this[_0x54dfc8(0xe1)]&&this[_0x54dfc8(0xe1)][_0x54dfc8(0x1a3)]===Scene_SkillShop;},Game_Actor[_0x293e45(0x250)]['canSkillShopLearn']=function(_0xacf2f3){const _0x304210=_0x293e45;if(!_0xacf2f3)return![];if(this[_0x304210(0x18e)](_0xacf2f3['id']))return![];if(!VisuMZ[_0x304210(0xee)][_0x304210(0x219)](this,_0xacf2f3))return![];if(!VisuMZ[_0x304210(0xee)][_0x304210(0x248)](this,_0xacf2f3))return![];if(DataManager['skillShopLevelRequirements'](_0xacf2f3)>this[_0x304210(0x176)])return![];if(!VisuMZ['SkillShop'][_0x304210(0x147)](this,_0xacf2f3))return![];if(!VisuMZ[_0x304210(0xee)]['CheckSkillSwitchRequirement'](_0xacf2f3))return![];return!![];},VisuMZ[_0x293e45(0xee)][_0x293e45(0x219)]=function(_0x30143b,_0x291e39){const _0x1e31e6=_0x293e45,_0x14d9d2=_0x30143b[_0x1e31e6(0x194)](),_0x436c9c=Imported['VisuMZ_1_SkillsStatesCore']?DataManager[_0x1e31e6(0x112)](_0x291e39):[_0x291e39[_0x1e31e6(0x1fc)]];return _0x436c9c[_0x1e31e6(0x138)](_0x1bcd97=>_0x14d9d2[_0x1e31e6(0xdb)](_0x1bcd97));},VisuMZ[_0x293e45(0xee)][_0x293e45(0x248)]=function(_0x893f55,_0xac7179){const _0x1aef8f=_0x293e45,_0x44d8b2=DataManager['skillShopClassRequirements'](_0xac7179);if(_0x44d8b2['length']<=0x0)return!![];const _0x8bbf6c=[_0x893f55['currentClass']()['id']];return _0x8bbf6c['some'](_0x504849=>_0x44d8b2[_0x1aef8f(0xdb)](_0x504849));},VisuMZ[_0x293e45(0xee)][_0x293e45(0x147)]=function(_0x40bb38,_0x20132c){const _0x8fe900=_0x293e45,_0x5384d3=DataManager[_0x8fe900(0x105)](_0x20132c);return _0x5384d3[_0x8fe900(0x104)](_0x20037d=>_0x40bb38[_0x8fe900(0x18e)](_0x20037d));},VisuMZ[_0x293e45(0xee)][_0x293e45(0x229)]=function(_0x5d3ead){const _0x4c997c=_0x293e45,_0x187ec0=DataManager[_0x4c997c(0x1dc)](_0x5d3ead);return _0x187ec0['every'](_0x50c959=>$gameSwitches[_0x4c997c(0x171)](_0x50c959));};function Scene_SkillShop(){this['initialize'](...arguments);}Scene_SkillShop[_0x293e45(0x250)]=Object[_0x293e45(0x237)](Scene_MenuBase[_0x293e45(0x250)]),Scene_SkillShop['prototype']['constructor']=Scene_SkillShop,Scene_SkillShop[_0x293e45(0xd6)]={'goldWindow_BgType':VisuMZ[_0x293e45(0xee)]['Settings']['Window'][_0x293e45(0x1d0)]??0x0,'helpWindow_BgType':VisuMZ['SkillShop'][_0x293e45(0x118)][_0x293e45(0x142)][_0x293e45(0x1af)]??0x0,'defaultCost':VisuMZ[_0x293e45(0xee)]['Settings'][_0x293e45(0x1bb)]??0x3e8},Scene_SkillShop['prototype'][_0x293e45(0x216)]=function(){const _0x1abab3=_0x293e45;Scene_MenuBase[_0x1abab3(0x250)][_0x1abab3(0x216)][_0x1abab3(0x1d4)](this);},Scene_SkillShop['prototype']['prepare']=function(_0x2f3c11,_0x33e570){const _0x1f8f91=_0x293e45;this[_0x1f8f91(0x197)]=_0x2f3c11[_0x1f8f91(0x1b9)](_0x44561d=>$dataSkills[_0x44561d])[_0x1f8f91(0x1a8)](undefined)[_0x1f8f91(0x1a8)](null),this['_discount']=_0x33e570;},Scene_SkillShop[_0x293e45(0x250)]['create']=function(){const _0x1aee81=_0x293e45;Scene_MenuBase['prototype'][_0x1aee81(0x237)][_0x1aee81(0x1d4)](this),this[_0x1aee81(0x1e6)](),this['createCommandWindow'](),this['createGoldWindow'](),this[_0x1aee81(0x160)](),this[_0x1aee81(0x1c1)](),this[_0x1aee81(0x167)]()&&this[_0x1aee81(0xdc)]();},Scene_SkillShop['prototype'][_0x293e45(0x1e6)]=function(){const _0x43240f=_0x293e45;Scene_MenuBase[_0x43240f(0x250)]['createHelpWindow'][_0x43240f(0x1d4)](this),this[_0x43240f(0x17a)][_0x43240f(0x11f)](Scene_SkillShop[_0x43240f(0xd6)][_0x43240f(0x165)]);},Scene_SkillShop['prototype']['createCommandWindow']=function(){const _0x323bbb=_0x293e45,_0x15c3ab=this[_0x323bbb(0x1a2)](),_0x3fe6c8=new Window_SkillShopCommand(_0x15c3ab);_0x3fe6c8['setHelpWindow'](this[_0x323bbb(0x17a)]),_0x3fe6c8['setHandler']('learn',this[_0x323bbb(0x1a7)][_0x323bbb(0x127)](this)),_0x3fe6c8[_0x323bbb(0x1fd)](_0x323bbb(0x1fa),this[_0x323bbb(0xe7)][_0x323bbb(0x127)](this)),this['addWindow'](_0x3fe6c8),this[_0x323bbb(0x1cc)]=_0x3fe6c8,_0x3fe6c8['setBackgroundType'](Window_SkillShopCommand[_0x323bbb(0xd6)][_0x323bbb(0x223)]);},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x1a2)]=function(){const _0x3e0a5d=_0x293e45;if(this['isUsingShopBustStyleUI']()){if(_0x3e0a5d(0x187)!==_0x3e0a5d(0x177))return this[_0x3e0a5d(0x14b)]();else{const _0x6b2ec8=this[_0x3e0a5d(0x24f)]['actor'](),_0x1af248=this[_0x3e0a5d(0x107)]['item'](),_0x197bf8=_0x213d80['ceil'](_0x1a369d[_0x3e0a5d(0x15c)](_0x1af248)*(0x1-this[_0x3e0a5d(0x1b0)]));_0x2f406e[_0x3e0a5d(0x23b)]&&_0x8af11e['MoreCurrencies'][_0x3e0a5d(0x206)](_0x1af248,-0x1),_0x13a31f[_0x3e0a5d(0x21f)](_0x197bf8),_0x6b2ec8[_0x3e0a5d(0x150)](_0x1af248['id']),this[_0x3e0a5d(0x107)][_0x3e0a5d(0x189)](),this[_0x3e0a5d(0x107)]['activate'](),this[_0x3e0a5d(0x17f)][_0x3e0a5d(0x189)](),this['isUsingShopBustStyleUI']()&&this[_0x3e0a5d(0x145)]('onSkillListOk');}}if(VisuMZ[_0x3e0a5d(0xee)][_0x3e0a5d(0x118)][_0x3e0a5d(0x142)][_0x3e0a5d(0xf0)])return VisuMZ[_0x3e0a5d(0xee)][_0x3e0a5d(0x118)][_0x3e0a5d(0x142)][_0x3e0a5d(0xf0)]['call'](this);const _0x29875e=Graphics['boxWidth']-this[_0x3e0a5d(0x1bc)](),_0x2b1b1f=this[_0x3e0a5d(0x208)](0x1,!![]),_0x3f6939=0x0,_0x265022=this[_0x3e0a5d(0x19f)]();return new Rectangle(_0x3f6939,_0x265022,_0x29875e,_0x2b1b1f);},Scene_SkillShop['prototype']['createGoldWindow']=function(){const _0x4af7d0=_0x293e45,_0x9fc74c=this[_0x4af7d0(0x1d3)](),_0x147d82=new Window_Gold(_0x9fc74c);this[_0x4af7d0(0x161)](_0x147d82),this['_goldWindow']=_0x147d82,_0x147d82[_0x4af7d0(0x11f)](Scene_SkillShop[_0x4af7d0(0xd6)][_0x4af7d0(0x157)]);},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x1d3)]=function(){const _0xae0a50=_0x293e45;if(this[_0xae0a50(0x167)]())return this[_0xae0a50(0x214)]();if(VisuMZ['SkillShop'][_0xae0a50(0x118)][_0xae0a50(0x142)][_0xae0a50(0x235)])return VisuMZ[_0xae0a50(0xee)][_0xae0a50(0x118)][_0xae0a50(0x142)][_0xae0a50(0x235)][_0xae0a50(0x1d4)](this);const _0x37b681=this['mainCommandWidth'](),_0x442b01=this[_0xae0a50(0x208)](0x1,!![]),_0x45e6c9=Graphics[_0xae0a50(0x141)]-_0x37b681,_0x1ab9c0=this[_0xae0a50(0x19f)]();return new Rectangle(_0x45e6c9,_0x1ab9c0,_0x37b681,_0x442b01);},Scene_SkillShop['prototype'][_0x293e45(0x160)]=function(){const _0x1e7d27=_0x293e45,_0x2d530c=this['actorListWindowRect'](),_0x2dbe49=new Window_SkillShopActorList(_0x2d530c);_0x2dbe49[_0x1e7d27(0x1ec)](this['_helpWindow']),_0x2dbe49[_0x1e7d27(0x1fd)]('ok',this['onActorListOk']['bind'](this)),_0x2dbe49[_0x1e7d27(0x1fd)](_0x1e7d27(0x1fa),this[_0x1e7d27(0x1ee)][_0x1e7d27(0x127)](this)),this[_0x1e7d27(0x161)](_0x2dbe49),this['_actorListWindow']=_0x2dbe49,_0x2dbe49[_0x1e7d27(0x11f)](0x0);},Scene_SkillShop['prototype'][_0x293e45(0x18b)]=function(){const _0xc86300=_0x293e45;if(this[_0xc86300(0x167)]())return this['getShopBustStyleUI_ActorWindow_Rect']();if(VisuMZ[_0xc86300(0xee)][_0xc86300(0x118)][_0xc86300(0x142)][_0xc86300(0x12d)]){if(_0xc86300(0x172)!==_0xc86300(0x209))return VisuMZ['SkillShop']['Settings'][_0xc86300(0x142)][_0xc86300(0x12d)][_0xc86300(0x1d4)](this);else _0x523e25['prototype'][_0xc86300(0x216)]['call'](this,_0x59fd0b),this[_0xc86300(0x106)](_0x7c3b22);}const _0x526d5e=Math['floor'](Graphics[_0xc86300(0x141)]/0x2),_0x38c6cc=this[_0xc86300(0x180)]()-this[_0xc86300(0x208)](0x1,!![]),_0xeee6e1=0x0,_0x9d5fce=this['mainAreaTop']()+this[_0xc86300(0x208)](0x1,!![]);return new Rectangle(_0xeee6e1,_0x9d5fce,_0x526d5e,_0x38c6cc);},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x1c1)]=function(){const _0x4da847=_0x293e45,_0x3bbedf=this[_0x4da847(0x1b8)](),_0x3a8bf7=new Window_SkillShopSkillList(_0x3bbedf,this[_0x4da847(0x1b0)]);_0x3a8bf7[_0x4da847(0xfa)](this[_0x4da847(0x197)]),_0x3a8bf7[_0x4da847(0x1ec)](this['_helpWindow']),this[_0x4da847(0x24f)][_0x4da847(0x217)](_0x3a8bf7),_0x3a8bf7['setHandler']('ok',this['onSkillListOk'][_0x4da847(0x127)](this)),_0x3a8bf7[_0x4da847(0x1fd)](_0x4da847(0x1fa),this[_0x4da847(0x251)][_0x4da847(0x127)](this)),this[_0x4da847(0x161)](_0x3a8bf7),this[_0x4da847(0x107)]=_0x3a8bf7,_0x3a8bf7[_0x4da847(0x11f)](0x0);},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x1b8)]=function(){const _0x1eb8ac=_0x293e45;if(this[_0x1eb8ac(0x167)]())return this[_0x1eb8ac(0x1e0)]();if(VisuMZ[_0x1eb8ac(0xee)][_0x1eb8ac(0x118)][_0x1eb8ac(0x142)][_0x1eb8ac(0x174)])return _0x1eb8ac(0x1a1)!==_0x1eb8ac(0x166)?VisuMZ[_0x1eb8ac(0xee)][_0x1eb8ac(0x118)][_0x1eb8ac(0x142)]['SkillListWindow_RectJS'][_0x1eb8ac(0x1d4)](this):_0x54f010['size']();const _0xf9cc39=Math['ceil'](Graphics[_0x1eb8ac(0x141)]/0x2),_0x10c582=this['mainAreaHeight']()-this[_0x1eb8ac(0x208)](0x1,!![]),_0x2ceea1=Math[_0x1eb8ac(0x1da)](Graphics[_0x1eb8ac(0x141)]/0x2),_0x8386b1=this[_0x1eb8ac(0x19f)]()+this[_0x1eb8ac(0x208)](0x1,!![]);return new Rectangle(_0x2ceea1,_0x8386b1,_0xf9cc39,_0x10c582);},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x1a7)]=function(){const _0x311743=_0x293e45;this[_0x311743(0x24f)][_0x311743(0x168)](),this[_0x311743(0x24f)]['selectLast'](),this[_0x311743(0x1cc)][_0x311743(0x1d7)](),this[_0x311743(0x167)]()&&(this[_0x311743(0x17a)][_0x311743(0xda)](),this[_0x311743(0x24f)][_0x311743(0xda)](),this[_0x311743(0x107)][_0x311743(0xda)](),this['_commandWindow'][_0x311743(0x20b)](),this[_0x311743(0x145)](_0x311743(0x1a7)));},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x11e)]=function(){const _0x3d119f=_0x293e45;this['_skillListWindow'][_0x3d119f(0x168)](),this[_0x3d119f(0x107)][_0x3d119f(0x1f5)](),this[_0x3d119f(0x24f)][_0x3d119f(0x1d7)]();if(this[_0x3d119f(0x167)]()){if(_0x3d119f(0x1bf)===_0x3d119f(0x1bf))this['setBustStyleUIMessageType']('onActorListOk');else{const _0xc7eec3=this['actorListWindowRect'](),_0x398ada=new _0x2f740b(_0xc7eec3);_0x398ada[_0x3d119f(0x1ec)](this[_0x3d119f(0x17a)]),_0x398ada[_0x3d119f(0x1fd)]('ok',this[_0x3d119f(0x11e)][_0x3d119f(0x127)](this)),_0x398ada[_0x3d119f(0x1fd)](_0x3d119f(0x1fa),this[_0x3d119f(0x1ee)][_0x3d119f(0x127)](this)),this[_0x3d119f(0x161)](_0x398ada),this[_0x3d119f(0x24f)]=_0x398ada,_0x398ada[_0x3d119f(0x11f)](0x0);}}},Scene_SkillShop['prototype'][_0x293e45(0x1ee)]=function(){const _0x515550=_0x293e45;this[_0x515550(0x24f)][_0x515550(0x1d7)](),this[_0x515550(0x1cc)][_0x515550(0x168)](),this[_0x515550(0x167)]()&&(this['setBustStyleUIMessageType']('onActorListCancel'),this[_0x515550(0x227)](),this[_0x515550(0x1cc)][_0x515550(0xda)]());},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0xd8)]=function(){const _0x1687ee=_0x293e45,_0x3bae04=this[_0x1687ee(0x24f)]['actor'](),_0x284632=this['_skillListWindow'][_0x1687ee(0x243)](),_0x5b96d5=Math[_0x1687ee(0x169)](DataManager['skillShopCost'](_0x284632)*(0x1-this[_0x1687ee(0x1b0)]));Imported[_0x1687ee(0x23b)]&&VisuMZ[_0x1687ee(0x148)][_0x1687ee(0x206)](_0x284632,-0x1),$gameParty[_0x1687ee(0x21f)](_0x5b96d5),_0x3bae04[_0x1687ee(0x150)](_0x284632['id']),this[_0x1687ee(0x107)][_0x1687ee(0x189)](),this[_0x1687ee(0x107)]['activate'](),this[_0x1687ee(0x17f)][_0x1687ee(0x189)](),this['isUsingShopBustStyleUI']()&&this[_0x1687ee(0x145)]('onSkillListOk');},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x251)]=function(){const _0xa90e62=_0x293e45;this[_0xa90e62(0x107)]['deactivate'](),this[_0xa90e62(0x24f)][_0xa90e62(0x168)](),this[_0xa90e62(0x167)]()&&this[_0xa90e62(0x145)](_0xa90e62(0x251));},Scene_SkillShop['prototype'][_0x293e45(0x1ab)]=function(){const _0x5d9466=_0x293e45;Scene_MenuBase[_0x5d9466(0x250)][_0x5d9466(0x1ab)][_0x5d9466(0x1d4)](this),this['setBackgroundOpacity'](this['getBackgroundOpacity']()),this['createCustomBackgroundImages']();},Scene_SkillShop['prototype']['getBackgroundOpacity']=function(){const _0x53e234=_0x293e45;return VisuMZ[_0x53e234(0xee)][_0x53e234(0x118)]['BgSettings'][_0x53e234(0x1e9)];},Scene_SkillShop['prototype']['createCustomBackgroundImages']=function(){const _0x551d6f=_0x293e45;if(this[_0x551d6f(0x1a4)]()){if('yQqgm'===_0x551d6f(0xf7)){this[_0x551d6f(0x232)]();return;}else return 0x1;}const _0x3d4a43=VisuMZ[_0x551d6f(0xee)]['Settings'][_0x551d6f(0x120)];_0x3d4a43&&(_0x3d4a43[_0x551d6f(0x12b)]!==''||_0x3d4a43[_0x551d6f(0x14f)]!=='')&&(this['_backSprite1']=new Sprite(ImageManager[_0x551d6f(0x115)](_0x3d4a43[_0x551d6f(0x12b)])),this['_backSprite2']=new Sprite(ImageManager[_0x551d6f(0x1b5)](_0x3d4a43[_0x551d6f(0x14f)])),this[_0x551d6f(0x220)](this['_backSprite1']),this[_0x551d6f(0x220)](this[_0x551d6f(0x1f7)]),this['_backSprite1']['bitmap']['addLoadListener'](this[_0x551d6f(0x19c)]['bind'](this,this[_0x551d6f(0x159)])),this['_backSprite2'][_0x551d6f(0x1f6)][_0x551d6f(0xef)](this['adjustSprite'][_0x551d6f(0x127)](this,this[_0x551d6f(0x1f7)])));},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x19c)]=function(_0xc98e36){const _0xc52ffd=_0x293e45;this[_0xc52ffd(0x20c)](_0xc98e36),this[_0xc52ffd(0x1dd)](_0xc98e36);};Imported[_0x293e45(0x245)]&&(Scene_SkillShop[_0x293e45(0x19e)]={'maxListSize':VisuMZ[_0x293e45(0x225)]['Settings'][_0x293e45(0x14a)]['maxListSize']??0x8,'fadeout':VisuMZ['ShopBustStyleUI']['Settings'][_0x293e45(0x14a)][_0x293e45(0x20d)]??!![],'exitDelay':VisuMZ[_0x293e45(0x225)][_0x293e45(0x118)]['SceneSkillShopData'][_0x293e45(0x152)]??0x5dc,'windowScale':VisuMZ[_0x293e45(0x225)][_0x293e45(0x118)][_0x293e45(0x14a)][_0x293e45(0xf9)]??0.8});;function _0x5728(_0x2c361a,_0x181710){const _0x19d44c=_0x19d4();return _0x5728=function(_0x57288a,_0x310fde){_0x57288a=_0x57288a-0xd5;let _0x48a617=_0x19d44c[_0x57288a];return _0x48a617;},_0x5728(_0x2c361a,_0x181710);}function _0x19d4(){const _0x2f5178=['_commandWindow','visualGoldDisplayPadding','itemTextAlign','note','GoldWindow_BgType','iconText','drawActorName','goldWindowRect','call','min','getTotalCommandWindowCommands','deactivate','282165xJafGr','drawItemMoreCurrencies','floor','_data','skillShopSwitchRequirements','centerSprite','exit','playOkSound','getShopBustStyleUI_SkillWindow_Rect','prepareActorFace','Needs\x20%2%1','drawItem','DataManager_getMoreCurrenciesObjLibrary','No\x20%1\x20Access','createHelpWindow','SkillIDs','faceName','SnapshotOpacity','STRUCT','innerWidth','setHelpWindow','version','onActorListCancel','drawItemStyleIcon','playUseSkill','LevelReq','itemLineRect','mDFrQ','ARRAYFUNC','selectLast','bitmap','_backSprite2','Learned','icon','cancel','getMoreCurrenciesObjLibrary','stypeId','setHandler','ActorHelpDescFmt','split','Scene_Map_stop','ARRAYSTRUCT','JsnQA','levelRequirement','NUM','TqTvk','ChangeQuantityForObj','replace','calcWindowHeight','PFEzy','mainAreaBottom','hide','scaleSprite','fadeout','LXXoV','commandNameWindowCenter','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','right','Needs\x20Lv\x20%1','LearnText','getShopBustStyleUI_GoldWindow_Rect','vqqtV','initialize','setSkillListWindow','skillShopLevelRequirements','CheckSkillTypeAccess','learn','active','itemAt','iconWidth','leave','loseGold','addChild','VisualGoldDisplay','Learn','bgType','Window_Command_RectJS','ShopBustStyleUI','format','hideWindowsShopBustStyleUI','faceWidth','CheckSkillSwitchRequirement','QNPaR','textSizeEx','LearnSkillReq','actor','switches','VisuMZ_2_MoreCurrencies\x20needs\x20to\x20be\x20updated\x20','ParseAllNotetags','isCustomCommandVisible','createShopBustStyleUI_CustomBackground','_skillShopLevelRequirements','updateCommandNameWindow','GoldWindow_RectJS','itemPadding','create','text','currentClass','EhcJm','VisuMZ_2_MoreCurrencies','LQcnc','37902OZGwHY','drawIcon','\x5cI[%1]%2','commands','gold','LearnIcon','item','currentSymbol','VisuMZ_3_ShopBustStyleUI','uzXPY','isSkill','CheckClassAccess','commandNameWindowDrawText','setHelpWindowItem','match','skillTypes','ActorListWindow_BgType','isCommandEnabled','_actorListWindow','prototype','onSkillListCancel','drawItemName','SETTINGS','center','onSkillListOk','round','show','includes','postCreateWindowsShopBustStyleUI','isEnabled','commandName','ARRAYJSON','kbPhS','_scene','makeCommandList','size','JSON','join','commandStyle','popScene','adjustWindowScaleShopBustStyleUI','LearnHelpDesc','DataManager_prepareMoreCurrenciesObj','loadFaceImages','drawCannotLearnReason','getShopBustStyleUI_ActorWindow_Rect','SkillShop','addLoadListener','CommandWindow_RectJS','max','Window_Skill_RectJS','214122uhJSVN','addCustomCommand','VyKpR','itemRect','yQqgm','Scene_SkillShop_start','windowScale','setSkillList','UxGQl','Scene_Map_needsFadeIn','getClassIdWithName','addCommand','Leave\x20the\x20skill\x20shop.','hFLJL','jgNcF','_skillShopCost','drawActorFace','every','skillShopSkillLearnRequirements','createCommandNameWindow','_skillListWindow','drawText','stypeJoin','CreateSubGoldCostText','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','CancelHelpDesc','ConvertParams','Scene_SkillShop_popScene','drawSkillCost','drawTextEx','getSkillShopBustStyleUISettings','getSkillTypes','CAruC','errors','loadTitle1','commandNameWindowDrawBackground','_commandNameWindow','Settings','drawCurrencyValue','urGao','isSceneBattle','width','maxListSize','onActorListOk','setBackgroundType','BgSettings','setMessage','getSkillIdWithName','RegExp','SkillCost','return\x200','skillLearnRequirement','bind','Select\x20a\x20skill\x20for\x20a\x20party\x20member\x20to\x20learn.','_skillShopClassRequirements','changePaintOpacity','BgFilename1','Window_Gold_RectJS','ActorListWindow_RectJS','callUpdateHelp','drawActorClass','isUsingSkillShopBustStyleUI','_skillShopSwitchRequirements','ARRAYNUM','close','opacity','EVAL','index','getShopBustStyleUI_MessageWindow_Rect','some','16EOnLLw','Not\x20For\x20%1','ClassReq','_actor','aZjMS','maxCols','getShopBustStyleUISettings','contents','boxWidth','Window','WLukH','alreadyLearned','setBustStyleUIMessageType','clear','CheckSkillLearnRequirement','MoreCurrencies','_skillIDs','SceneSkillShopData','getShopBustStyleUI_CommandWindow_Rect','Exit','filter','CancelIcon','BgFilename2','learnSkill','enabled','exitDelay','isCurrentItemEnabled','ParseSkillNotetags','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','startFadeIn','goldWindow_BgType','forceSelect','_backSprite1','parameters','isCustomCommandEnabled','skillShopCost','canSkillShopLearn','currencyUnit','VFssV','createActorListWindow','addWindow','dgdqy','wrongClass','Qqsww','helpWindow_BgType','pHqSw','isUsingShopBustStyleUI','activate','ceil','commandStyleCheck','AqTQc','registerCommand','inBattle','trim','GLOeN','DiscountRate','value','anEQc','resetFontSettings','SkillListWindow_RectJS','noStypeAccess','level','dovMD','_skillShopSkillLearnRequirements','_classIDs','_helpWindow','UFeKD','Window_ShopMsg_RectJS','scale','PXHaQ','_goldWindow','mainAreaHeight','drawItemClass','isSceneSkillShop','process_VisuMZ_MoreCurrencies_Notetags','\x5cI[%1]','updateHelp','n/a','ZlCqB','%1\x20is\x20a\x20level\x20%2\x20%3.\x0aCan\x20learn\x20%4\x20skills.','refresh','isNextScene','actorListWindowRect','drawItemObject','iconIndex','isLearnedSkill','members','stop','Scene_Boot_process_VisuMZ_MoreCurrencies_Notetags','needsFadeIn','ParseNotetagCosts','addedSkillTypes','skillShopClassRequirements','createShopBustStyleUI_MessageWindow','_skills','helpDescFmt','auto','4853928xgSdZi','skills','adjustSprite','name','SHOP_BUST_STYLE_UI','mainAreaTop','For\x20%1','WZluB','commandWindowRect','constructor','meetsShopBustStyleUIConditions','start','64380wqvmDT','commandLearn','remove','in\x20order\x20for\x20VisuMZ_4_SkillShop\x20to\x20work.','grpwl','createBackground','Patch_CreateSubGoldCostText','parse','prepareNextScene','HelpWindow_BgType','_discount','vLWCe','setActor','CommandWindow_BgType','Vocab','loadTitle2','iconHeight','drawItemStyleIconText','skillListWindowRect','map','push','DefaultSkillCost','mainCommandWidth','height','365245NwPqCE','sniiw','1147531AIkciq','createSkillListWindow','CreateVisualGoldText','indexOf','processExitShopBustStyleUI','startFadeOut','ARRAYSTR','CancelText','toUpperCase','maxItems','FUNC','AbfgS'];_0x19d4=function(){return _0x2f5178;};return _0x19d4();}Scene_SkillShop[_0x293e45(0x250)]['getShopBustStyleUISettings']=function(){const _0x552dd5=_0x293e45;if(!Imported['VisuMZ_3_ShopBustStyleUI'])return{};return $gameSystem[_0x552dd5(0x111)]();},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x167)]=function(){const _0x192c1f=_0x293e45;if(!Imported[_0x192c1f(0x245)])return![];return this[_0x192c1f(0x13f)]()[_0x192c1f(0x151)];},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x1a4)]=function(){const _0x34133b=_0x293e45;return this[_0x34133b(0x167)]();},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0xdc)]=function(){const _0x33d09f=_0x293e45;this[_0x33d09f(0x196)](),this[_0x33d09f(0xe8)](),this[_0x33d09f(0x227)](),this['setBustStyleUIMessageType']('welcome');},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0xe8)]=function(){const _0x247f93=_0x293e45,_0x50392d=Scene_SkillShop[_0x247f93(0x19e)][_0x247f93(0xf9)],_0x396030=[this[_0x247f93(0x17f)],this[_0x247f93(0x1cc)],this['_actorListWindow'],this[_0x247f93(0x107)]];for(const _0x5273fb of _0x396030){_0x5273fb[_0x247f93(0x17d)]['x']=_0x5273fb[_0x247f93(0x17d)]['y']=_0x50392d;}},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x227)]=function(){const _0x3e676b=_0x293e45;this[_0x3e676b(0x17a)][_0x3e676b(0x20b)](),this[_0x3e676b(0x24f)][_0x3e676b(0x20b)](),this[_0x3e676b(0x107)]['hide']();},VisuMZ[_0x293e45(0xee)]['Scene_SkillShop_start']=Scene_SkillShop['prototype'][_0x293e45(0x1a5)],Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x1a5)]=function(){const _0x3633af=_0x293e45;VisuMZ['SkillShop'][_0x3633af(0xf8)][_0x3633af(0x1d4)](this),this[_0x3633af(0x167)]()&&Scene_SkillShop[_0x3633af(0x19e)]['fadeout']&&this[_0x3633af(0x156)]();},VisuMZ[_0x293e45(0xee)][_0x293e45(0x200)]=Scene_Map['prototype'][_0x293e45(0x190)],Scene_Map[_0x293e45(0x250)][_0x293e45(0x190)]=function(){const _0x1d4872=_0x293e45;VisuMZ['SkillShop'][_0x1d4872(0x200)][_0x1d4872(0x1d4)](this),SceneManager[_0x1d4872(0x18a)](Scene_SkillShop)&&Imported[_0x1d4872(0x245)]&&$gameSystem['isUsingSkillShopBustStyleUI']()&&Scene_SkillShop['SHOP_BUST_STYLE_UI'][_0x1d4872(0x20d)]&&this['startFadeOut']();},VisuMZ['SkillShop']['Scene_SkillShop_popScene']=Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0xe7)],Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0xe7)]=function(){const _0xd1b8e1=_0x293e45;if(this['isUsingShopBustStyleUI']())this['exitShopBustStyleUI']();else{if(_0xd1b8e1(0xf5)!==_0xd1b8e1(0x100))VisuMZ[_0xd1b8e1(0xee)][_0xd1b8e1(0x10e)][_0xd1b8e1(0x1d4)](this);else{if(!_0x301375[_0xd1b8e1(0x245)])return![];return this[_0xd1b8e1(0x13f)]()[_0xd1b8e1(0x151)];}}},Scene_SkillShop[_0x293e45(0x250)]['exitShopBustStyleUI']=function(){const _0xbca978=_0x293e45;if(this['_shopBustStyleUI_MessageWindow']){if(_0xbca978(0x15f)===_0xbca978(0x15f))this['_shopBustStyleUI_MessageWindow'][_0xbca978(0x121)](_0xbca978(0x21e));else{const _0x846305=_0x26be75[_0xbca978(0xd6)];if(!_0x846305[_0xbca978(0x103)])return 0x0;return _0x4b9a25=this[_0xbca978(0xf6)](_0x4a1e42),this[_0xbca978(0x103)](_0x514fb6,_0x3173e3['x']+0x2,_0x36191b['y']+0x2,_0x567212[_0xbca978(0x228)],_0x24fa03['height']-0x4),_0x49072a['faceWidth']+this[_0xbca978(0x236)]();}}this['_commandWindow'][_0xbca978(0x133)](),this[_0xbca978(0x17f)][_0xbca978(0x133)]();const _0x3a2926=Scene_SkillShop[_0xbca978(0x19e)][_0xbca978(0x152)];setTimeout(this['processExitShopBustStyleUI']['bind'](this),_0x3a2926);},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x1c4)]=function(){const _0x573b28=_0x293e45;Scene_SkillShop[_0x573b28(0x19e)][_0x573b28(0x20d)]&&this['startFadeOut'](),VisuMZ['SkillShop']['Scene_SkillShop_popScene'][_0x573b28(0x1d4)](this);},VisuMZ['SkillShop'][_0x293e45(0xfc)]=Scene_Map[_0x293e45(0x250)][_0x293e45(0x192)],Scene_Map['prototype'][_0x293e45(0x192)]=function(){const _0xdc6832=_0x293e45;if(SceneManager['isPreviousScene'](Scene_SkillShop)&&Imported[_0xdc6832(0x245)]&&$gameSystem['isUsingSkillShopBustStyleUI']()&&Scene_SkillShop['SHOP_BUST_STYLE_UI'][_0xdc6832(0x20d)])return!![];return VisuMZ['SkillShop']['Scene_Map_needsFadeIn'][_0xdc6832(0x1d4)](this);},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x14b)]=function(){const _0x4c5bd5=_0x293e45;if(VisuMZ[_0x4c5bd5(0x225)]['Settings'][_0x4c5bd5(0x14a)][_0x4c5bd5(0x224)]){if('IDMRm'!==_0x4c5bd5(0x1f3))return VisuMZ[_0x4c5bd5(0x225)][_0x4c5bd5(0x118)][_0x4c5bd5(0x14a)]['Window_Command_RectJS'][_0x4c5bd5(0x1d4)](this);else _0x2e1f78[_0x4c5bd5(0xee)][_0x4c5bd5(0x200)][_0x4c5bd5(0x1d4)](this),_0x3c5e9c[_0x4c5bd5(0x18a)](_0x41a2d6)&&_0x4bfcf8[_0x4c5bd5(0x245)]&&_0x1732d8[_0x4c5bd5(0x130)]()&&_0x1caef9[_0x4c5bd5(0x19e)][_0x4c5bd5(0x20d)]&&this[_0x4c5bd5(0x1c5)]();}const _0x588328=this[_0x4c5bd5(0x1bc)](),_0x781d06=this[_0x4c5bd5(0x208)](this['getTotalCommandWindowCommands'](),!![]),_0x2ae3c4=Math[_0x4c5bd5(0x1da)]((Graphics[_0x4c5bd5(0x141)]-Math[_0x4c5bd5(0x1d5)](Graphics['boxWidth'],0x330))/0x2),_0x5585bd=this[_0x4c5bd5(0x19f)]()+0x64;return new Rectangle(_0x2ae3c4,_0x5585bd,_0x588328,_0x781d06);},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x1d6)]=function(){let _0x32343b=0x2;return _0x32343b;},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x214)]=function(){const _0x1a52c4=_0x293e45;if(VisuMZ[_0x1a52c4(0x225)][_0x1a52c4(0x118)][_0x1a52c4(0x14a)][_0x1a52c4(0x12c)]){if(_0x1a52c4(0x246)===_0x1a52c4(0x246))return VisuMZ[_0x1a52c4(0x225)][_0x1a52c4(0x118)]['SceneSkillShopData'][_0x1a52c4(0x12c)]['call'](this);else _0x1cc0c0[_0x1a52c4(0x148)][_0x1a52c4(0x206)](_0x4b2056,-0x1);}const _0x2b318d=Scene_SkillShop[_0x1a52c4(0x19e)][_0x1a52c4(0xf9)],_0x19bfb8=this[_0x1a52c4(0x1bc)]()/_0x2b318d,_0x2287ed=this[_0x1a52c4(0x208)](0x1,!![]),_0x114432=Math[_0x1a52c4(0x1da)]((Graphics[_0x1a52c4(0x141)]-_0x19bfb8)/0x2),_0x498398=this[_0x1a52c4(0x20a)]()-this[_0x1a52c4(0x208)](0x4,![])-Math[_0x1a52c4(0x1da)](_0x2287ed*_0x2b318d);return new Rectangle(_0x114432,_0x498398,_0x19bfb8,_0x2287ed);},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0xed)]=function(){const _0x3a1971=_0x293e45;if(VisuMZ[_0x3a1971(0x225)][_0x3a1971(0x118)][_0x3a1971(0x14a)]['Window_Actor_RectJS'])return _0x3a1971(0x205)!==_0x3a1971(0x205)?_0x104ba8['SETTINGS'][_0x3a1971(0xe6)]:VisuMZ['ShopBustStyleUI'][_0x3a1971(0x118)][_0x3a1971(0x14a)]['Window_Actor_RectJS']['call'](this);const _0x429f17=Scene_SkillShop[_0x3a1971(0x19e)][_0x3a1971(0xf9)],_0x3f83eb=Scene_SkillShop[_0x3a1971(0x19e)][_0x3a1971(0x11d)],_0x50f09a=Math[_0x3a1971(0x1d5)](Graphics[_0x3a1971(0x141)],0x330),_0x3bb4fd=Math['ceil'](this[_0x3a1971(0x180)]()-this[_0x3a1971(0x208)](0x4,![])-this[_0x3a1971(0x208)](0x1,!![])*_0x429f17),_0x4e563d=Math['ceil'](_0x50f09a/0x2),_0x109516=Math[_0x3a1971(0x1d5)](Math[_0x3a1971(0x1da)](_0x3bb4fd/_0x429f17),this[_0x3a1971(0x208)](_0x3f83eb,!![])),_0x36d144=Math[_0x3a1971(0x1da)]((Graphics[_0x3a1971(0x141)]-_0x50f09a)/0x4),_0x13a667=this[_0x3a1971(0x19f)]()+Math[_0x3a1971(0x1da)]((_0x3bb4fd-_0x109516*_0x429f17)/0x2);return new Rectangle(_0x36d144,_0x13a667,_0x4e563d,_0x109516);},Scene_SkillShop[_0x293e45(0x250)][_0x293e45(0x1e0)]=function(){const _0x5e1566=_0x293e45;if(VisuMZ[_0x5e1566(0x225)]['Settings']['SceneSkillShopData'][_0x5e1566(0xf2)])return VisuMZ[_0x5e1566(0x225)][_0x5e1566(0x118)]['SceneSkillShopData'][_0x5e1566(0xf2)][_0x5e1566(0x1d4)](this);const _0x1971af=this[_0x5e1566(0x18b)](),_0xdc2d61=Scene_SkillShop[_0x5e1566(0x19e)][_0x5e1566(0xf9)],_0x16326e=_0x1971af[_0x5e1566(0x11c)],_0x1812d8=_0x1971af[_0x5e1566(0x1bd)],_0x2685db=_0x1971af['x']+Math[_0x5e1566(0x169)](_0x1971af[_0x5e1566(0x11c)]*_0xdc2d61),_0x2d37de=_0x1971af['y'];return new Rectangle(_0x2685db,_0x2d37de,_0x16326e,_0x1812d8);},Scene_SkillShop['prototype'][_0x293e45(0x137)]=function(){const _0x35b287=_0x293e45;if(VisuMZ[_0x35b287(0x225)]['Settings'][_0x35b287(0x14a)][_0x35b287(0x17c)])return VisuMZ['ShopBustStyleUI'][_0x35b287(0x118)][_0x35b287(0x14a)]['Window_ShopMsg_RectJS']['call'](this);const _0x220619=Math[_0x35b287(0x1d5)](Graphics['boxWidth'],0x330),_0x16a8a1=this[_0x35b287(0x208)](0x4,![]),_0x2fd504=Math[_0x35b287(0x1da)]((Graphics[_0x35b287(0x141)]-_0x220619)/0x2),_0x167ff0=this['mainAreaBottom']()-_0x16a8a1;return new Rectangle(_0x2fd504,_0x167ff0,_0x220619,_0x16a8a1);};function Window_SkillShopCommand(){const _0x55e300=_0x293e45;this[_0x55e300(0x216)](...arguments);}Window_SkillShopCommand['prototype']=Object[_0x293e45(0x237)](Window_HorzCommand[_0x293e45(0x250)]),Window_SkillShopCommand[_0x293e45(0x250)][_0x293e45(0x1a3)]=Window_SkillShopCommand,Window_SkillShopCommand[_0x293e45(0xd6)]={'bgType':VisuMZ[_0x293e45(0xee)][_0x293e45(0x118)][_0x293e45(0x142)][_0x293e45(0x1b3)]??0x0,'commandStyle':VisuMZ['SkillShop'][_0x293e45(0x118)]['Window']['CommandWindow_Style']??_0x293e45(0x199),'commands':{'learn':{'show':!![],'text':VisuMZ[_0x293e45(0xee)][_0x293e45(0x118)][_0x293e45(0x1b4)][_0x293e45(0x213)]??_0x293e45(0x222),'icon':VisuMZ[_0x293e45(0xee)][_0x293e45(0x118)][_0x293e45(0x1b4)][_0x293e45(0x242)]??0x4f,'help':VisuMZ[_0x293e45(0xee)][_0x293e45(0x118)][_0x293e45(0x1b4)][_0x293e45(0xe9)]??_0x293e45(0x128)},'cancel':{'show':!![],'text':VisuMZ['SkillShop'][_0x293e45(0x118)][_0x293e45(0x1b4)][_0x293e45(0x1c7)]??_0x293e45(0x14c),'icon':VisuMZ[_0x293e45(0xee)]['Settings'][_0x293e45(0x1b4)][_0x293e45(0x14e)]??0x52,'help':VisuMZ[_0x293e45(0xee)]['Settings'][_0x293e45(0x1b4)][_0x293e45(0x10c)]??_0x293e45(0xff)}},'commandOrder':[_0x293e45(0x21a),_0x293e45(0x1fa)]},Window_SkillShopCommand['prototype']['initialize']=function(_0x22e30d){const _0x59fab0=_0x293e45;Window_HorzCommand[_0x59fab0(0x250)][_0x59fab0(0x216)][_0x59fab0(0x1d4)](this,_0x22e30d),this['createCommandNameWindow'](_0x22e30d);},Window_SkillShopCommand['prototype']['callUpdateHelp']=function(){const _0x38f1bc=_0x293e45;Window_HorzCommand[_0x38f1bc(0x250)]['callUpdateHelp']['call'](this);if(this[_0x38f1bc(0x117)])this[_0x38f1bc(0x234)]();},Window_SkillShopCommand[_0x293e45(0x250)][_0x293e45(0x13e)]=function(){const _0x37ce17=_0x293e45;if(SceneManager[_0x37ce17(0xe1)]&&SceneManager[_0x37ce17(0xe1)]['isUsingShopBustStyleUI']())return 0x1;return 0x2;},Window_SkillShopCommand[_0x293e45(0x250)][_0x293e45(0x106)]=function(_0xa7e9a5){const _0x5c63d5=_0x293e45,_0x53d360=new Rectangle(0x0,0x0,_0xa7e9a5[_0x5c63d5(0x11c)],_0xa7e9a5[_0x5c63d5(0x1bd)]);this['_commandNameWindow']=new Window_Base(_0x53d360),this['_commandNameWindow'][_0x5c63d5(0x134)]=0x0,this[_0x5c63d5(0x220)](this[_0x5c63d5(0x117)]),this['updateCommandNameWindow']();},Window_SkillShopCommand[_0x293e45(0x250)]['updateCommandNameWindow']=function(){const _0x482dac=_0x293e45,_0x4293eb=this[_0x482dac(0x117)];_0x4293eb[_0x482dac(0x140)][_0x482dac(0x146)]();const _0x46a70d=this[_0x482dac(0x16a)](this[_0x482dac(0x136)]());if(_0x46a70d===_0x482dac(0x1f9)){const _0x34c50b=this[_0x482dac(0x1f2)](this[_0x482dac(0x136)]());let _0x5bc084=this['commandName'](this['index']());_0x5bc084=_0x5bc084[_0x482dac(0x207)](/\\I\[(\d+)\]/gi,''),_0x4293eb[_0x482dac(0x173)](),this[_0x482dac(0x116)](_0x5bc084,_0x34c50b),this[_0x482dac(0x249)](_0x5bc084,_0x34c50b),this[_0x482dac(0x20f)](_0x5bc084,_0x34c50b);}},Window_SkillShopCommand[_0x293e45(0x250)][_0x293e45(0x116)]=function(_0x403c19,_0x512f05){},Window_SkillShopCommand[_0x293e45(0x250)]['commandNameWindowDrawText']=function(_0x23fc95,_0x1c6ce4){const _0xc76231=_0x293e45,_0x53969f=this['_commandNameWindow'];_0x53969f[_0xc76231(0x108)](_0x23fc95,0x0,_0x1c6ce4['y'],_0x53969f[_0xc76231(0x1eb)],_0xc76231(0xd7));},Window_SkillShopCommand['prototype'][_0x293e45(0x20f)]=function(_0xf038e5,_0x24d08b){const _0x12ab0b=_0x293e45,_0x473bcb=this[_0x12ab0b(0x117)],_0x150690=$gameSystem['windowPadding'](),_0x41b0c8=_0x24d08b['x']+Math['floor'](_0x24d08b[_0x12ab0b(0x11c)]/0x2)+_0x150690;_0x473bcb['x']=_0x473bcb[_0x12ab0b(0x11c)]/-0x2+_0x41b0c8,_0x473bcb['y']=Math[_0x12ab0b(0x1da)](_0x24d08b[_0x12ab0b(0x1bd)]/0x2);},Window_SkillShopCommand[_0x293e45(0x250)][_0x293e45(0xe2)]=function(){const _0x44fe3a=_0x293e45;for(const _0x28e68 of Window_SkillShopCommand[_0x44fe3a(0xd6)]['commandOrder']){this[_0x44fe3a(0xf4)](_0x28e68);}},Window_SkillShopCommand[_0x293e45(0x250)][_0x293e45(0xf4)]=function(_0x54649e){const _0x55d71c=_0x293e45,_0x3d7e0c=Window_SkillShopCommand['SETTINGS']['commands'][_0x54649e];if(!this[_0x55d71c(0x231)](_0x3d7e0c))return;const _0x131c73=_0x54649e,_0x2c967e=Number(_0x3d7e0c['icon']);let _0x3267b1=_0x3d7e0c['text'];_0x2c967e>0x0&&this[_0x55d71c(0xe6)]()!=='text'&&(_0x3267b1=_0x55d71c(0x23f)[_0x55d71c(0x226)](_0x2c967e,_0x3267b1));const _0x2738a5=this[_0x55d71c(0x15b)](_0x3d7e0c);this[_0x55d71c(0xfe)](_0x3267b1,_0x131c73,_0x2738a5);},Window_SkillShopCommand['prototype']['isCustomCommandVisible']=function(_0x3d63c1){return _0x3d63c1['show'];},Window_SkillShopCommand[_0x293e45(0x250)][_0x293e45(0x15b)]=function(_0x2b7fa0){return!![];},Window_SkillShopCommand[_0x293e45(0x250)][_0x293e45(0x1ce)]=function(){const _0x22c12e=_0x293e45;return _0x22c12e(0xd7);},Window_SkillShopCommand[_0x293e45(0x250)][_0x293e45(0x1e3)]=function(_0x446bbd){const _0x2d6e4b=_0x293e45,_0x44f220=this[_0x2d6e4b(0x16a)](_0x446bbd);if(_0x44f220===_0x2d6e4b(0x1d1))this[_0x2d6e4b(0x1b7)](_0x446bbd);else _0x44f220===_0x2d6e4b(0x1f9)?_0x2d6e4b(0x143)==='WLukH'?this[_0x2d6e4b(0x1ef)](_0x446bbd):_0x2cd540=_0x469d04[_0x2d6e4b(0xfd)](_0x16e523):_0x2d6e4b(0xfb)!=='rFuAC'?Window_HorzCommand[_0x2d6e4b(0x250)]['drawItem'][_0x2d6e4b(0x1d4)](this,_0x446bbd):_0x4a9645[_0x2d6e4b(0x148)][_0x2d6e4b(0x193)](_0x2d45d0);},Window_SkillShopCommand[_0x293e45(0x250)]['commandStyle']=function(){return Window_SkillShopCommand['SETTINGS']['commandStyle'];},Window_SkillShopCommand[_0x293e45(0x250)][_0x293e45(0x16a)]=function(_0x5e051a){const _0x59cff0=_0x293e45;if(_0x5e051a<0x0)return'text';const _0x215969=this[_0x59cff0(0xe6)]();if(_0x215969!==_0x59cff0(0x199))return _0x215969;else{if(this[_0x59cff0(0x1c9)]()>0x0){const _0x1041b8=this[_0x59cff0(0xde)](_0x5e051a);if(_0x1041b8[_0x59cff0(0x24b)](/\\I\[(\d+)\]/i)){const _0x88a73e=this[_0x59cff0(0x1f2)](_0x5e051a),_0x33dbd1=this['textSizeEx'](_0x1041b8)[_0x59cff0(0x11c)];if(_0x33dbd1<=_0x88a73e[_0x59cff0(0x11c)]){if(_0x59cff0(0x202)!==_0x59cff0(0x202)){const _0x4b87a3=this['commandWindowRect'](),_0x5a38fd=new _0x22ec33(_0x4b87a3);_0x5a38fd[_0x59cff0(0x1ec)](this[_0x59cff0(0x17a)]),_0x5a38fd[_0x59cff0(0x1fd)]('learn',this['commandLearn'][_0x59cff0(0x127)](this)),_0x5a38fd[_0x59cff0(0x1fd)]('cancel',this[_0x59cff0(0xe7)][_0x59cff0(0x127)](this)),this[_0x59cff0(0x161)](_0x5a38fd),this[_0x59cff0(0x1cc)]=_0x5a38fd,_0x5a38fd[_0x59cff0(0x11f)](_0xb9589b[_0x59cff0(0xd6)][_0x59cff0(0x223)]);}else return _0x59cff0(0x1d1);}else return _0x59cff0(0x1f9);}}}return _0x59cff0(0x238);},Window_SkillShopCommand[_0x293e45(0x250)][_0x293e45(0x1b7)]=function(_0x241c19){const _0x846ff0=_0x293e45,_0x119605=this[_0x846ff0(0x1f2)](_0x241c19),_0x475f95=this[_0x846ff0(0xde)](_0x241c19),_0x386541=this[_0x846ff0(0x22b)](_0x475f95)['width'];this[_0x846ff0(0x12a)](this[_0x846ff0(0x24e)](_0x241c19));const _0x419376=this[_0x846ff0(0x1ce)]();if(_0x419376===_0x846ff0(0x211))this['drawTextEx'](_0x475f95,_0x119605['x']+_0x119605[_0x846ff0(0x11c)]-_0x386541,_0x119605['y'],_0x386541);else{if(_0x419376==='center'){if(_0x846ff0(0x16f)===_0x846ff0(0x22a))return _0xa11dad[_0x846ff0(0x225)][_0x846ff0(0x118)][_0x846ff0(0x14a)][_0x846ff0(0x224)]['call'](this);else{const _0x2fff98=_0x119605['x']+Math[_0x846ff0(0x1da)]((_0x119605[_0x846ff0(0x11c)]-_0x386541)/0x2);this[_0x846ff0(0x110)](_0x475f95,_0x2fff98,_0x119605['y'],_0x386541);}}else'cUrQT'==='cUrQT'?this[_0x846ff0(0x110)](_0x475f95,_0x119605['x'],_0x119605['y'],_0x386541):(this[_0x846ff0(0x107)][_0x846ff0(0x1d7)](),this['_actorListWindow'][_0x846ff0(0x168)](),this['isUsingShopBustStyleUI']()&&this['setBustStyleUIMessageType'](_0x846ff0(0x251)));}},Window_SkillShopCommand[_0x293e45(0x250)]['drawItemStyleIcon']=function(_0x395393){const _0xafb0=_0x293e45;this[_0xafb0(0xde)](_0x395393)[_0xafb0(0x24b)](/\\I\[(\d+)\]/i);const _0xd74ccc=Number(RegExp['$1'])||0x0,_0x514b80=this[_0xafb0(0x1f2)](_0x395393),_0x2be71a=_0x514b80['x']+Math['floor']((_0x514b80['width']-ImageManager[_0xafb0(0x21d)])/0x2),_0x28734e=_0x514b80['y']+(_0x514b80[_0xafb0(0x1bd)]-ImageManager[_0xafb0(0x1b6)])/0x2;this[_0xafb0(0x23e)](_0xd74ccc,_0x2be71a,_0x28734e);},Window_SkillShopCommand[_0x293e45(0x250)][_0x293e45(0x185)]=function(){const _0x226daf=_0x293e45;Window_HorzCommand[_0x226daf(0x250)][_0x226daf(0x185)][_0x226daf(0x1d4)](this);if(this[_0x226daf(0x17a)]){const _0x1e1a53=this[_0x226daf(0x244)](),_0x4be99d=Window_SkillShopCommand['SETTINGS'][_0x226daf(0x240)];this[_0x226daf(0x17a)]['setText'](_0x4be99d[_0x1e1a53]['help']||'');}};function Window_SkillShopActorList(){const _0x3ea751=_0x293e45;this[_0x3ea751(0x216)](...arguments);}Window_SkillShopActorList[_0x293e45(0x250)]=Object['create'](Window_StatusBase[_0x293e45(0x250)]),Window_SkillShopActorList[_0x293e45(0x250)][_0x293e45(0x1a3)]=Window_SkillShopActorList,Window_SkillShopActorList[_0x293e45(0xd6)]={'bgType':VisuMZ[_0x293e45(0xee)]['Settings'][_0x293e45(0x142)][_0x293e45(0x24d)]??0x0,'drawActorFace':VisuMZ[_0x293e45(0xee)]['Settings'][_0x293e45(0x142)][_0x293e45(0x103)]??!![],'drawActorName':VisuMZ[_0x293e45(0xee)]['Settings']['Window'][_0x293e45(0x1d2)]??!![],'drawActorClass':VisuMZ['SkillShop'][_0x293e45(0x118)]['Window'][_0x293e45(0x12f)]??!![],'helpDescFmt':VisuMZ[_0x293e45(0xee)][_0x293e45(0x118)][_0x293e45(0x1b4)][_0x293e45(0x1fe)]??_0x293e45(0x188),'stypeJoin':VisuMZ['SkillShop'][_0x293e45(0x118)][_0x293e45(0x1b4)][_0x293e45(0x109)]??',','spaceJoin':VisuMZ[_0x293e45(0xee)]['Settings'][_0x293e45(0x1b4)]['spaceJoin']??!![]},Window_SkillShopActorList[_0x293e45(0x250)][_0x293e45(0x216)]=function(_0xd8d2af){const _0x253421=_0x293e45;Window_StatusBase[_0x253421(0x250)][_0x253421(0x216)][_0x253421(0x1d4)](this,_0xd8d2af),this[_0x253421(0xeb)](),this['refresh']();},Window_SkillShopActorList[_0x293e45(0x250)][_0x293e45(0x1c9)]=function(){const _0x7db995=_0x293e45;return $gameParty[_0x7db995(0xe3)]();},Window_SkillShopActorList['prototype']['actor']=function(){const _0x187d9c=_0x293e45;return $gameParty[_0x187d9c(0x18f)]()[this[_0x187d9c(0x136)]()];},Window_SkillShopActorList['prototype'][_0x293e45(0x1f5)]=function(){const _0x546a6e=_0x293e45,_0x3be843=this['index']();this[_0x546a6e(0x158)](_0x3be843>=0x0?_0x3be843:0x0);},Window_SkillShopActorList[_0x293e45(0x250)][_0x293e45(0x1e3)]=function(_0xfb799){const _0x3f397c=_0x293e45,_0x30c46f=_0xfb799<0x0?$gameParty:$gameParty['members']()[_0xfb799];if(!_0x30c46f)return;this[_0x3f397c(0x1e1)](_0x30c46f,_0xfb799);},Window_SkillShopActorList[_0x293e45(0x250)][_0x293e45(0x1e1)]=function(_0x4793d3,_0xe37cc6){const _0x50d2f1=_0x293e45,_0x35d578=ImageManager['loadFace'](_0x4793d3[_0x50d2f1(0x1e8)]());_0x35d578[_0x50d2f1(0xef)](this[_0x50d2f1(0x18c)][_0x50d2f1(0x127)](this,_0x4793d3,_0xe37cc6));},Window_SkillShopActorList[_0x293e45(0x250)][_0x293e45(0x18c)]=function(_0x13aa1f,_0x2bc43e){const _0x52ea73=_0x293e45;this[_0x52ea73(0x173)]();const _0x19011b=this[_0x52ea73(0x1f2)](_0x2bc43e);let _0x3f5cc7=0x0;_0x3f5cc7=0x0,_0x3f5cc7+=this['drawItemFace'](_0x13aa1f,_0x2bc43e),_0x3f5cc7+=this['drawItemName'](_0x13aa1f,_0x19011b,_0x3f5cc7);if(_0x3f5cc7+0xc0>this[_0x52ea73(0x1eb)])return;_0x3f5cc7=_0x19011b['x']+_0x19011b[_0x52ea73(0x11c)]-Math[_0x52ea73(0xf1)](Math['floor'](_0x19011b[_0x52ea73(0x11c)]/0x3),0xc0),this[_0x52ea73(0x181)](_0x13aa1f,_0x19011b,_0x3f5cc7);},Window_SkillShopActorList['prototype']['drawItemFace']=function(_0x388d94,_0x18d25c){const _0xd8bd9e=_0x293e45,_0xd1fa79=Window_SkillShopActorList[_0xd8bd9e(0xd6)];if(!_0xd1fa79[_0xd8bd9e(0x103)])return 0x0;return rect=this[_0xd8bd9e(0xf6)](_0x18d25c),this['drawActorFace'](_0x388d94,rect['x']+0x2,rect['y']+0x2,ImageManager['faceWidth'],rect[_0xd8bd9e(0x1bd)]-0x4),ImageManager[_0xd8bd9e(0x228)]+this[_0xd8bd9e(0x236)]();},Window_SkillShopActorList[_0x293e45(0x250)][_0x293e45(0xd5)]=function(_0x15a218,_0x39a3ab,_0x12ebbb){const _0x2cfee3=_0x293e45,_0x70e20e=Window_SkillShopActorList['SETTINGS'];if(!_0x70e20e[_0x2cfee3(0x1d2)])return 0x0;return this[_0x2cfee3(0x1d2)](_0x15a218,_0x39a3ab['x']+_0x12ebbb,_0x39a3ab['y'],0xc0),0xc0;},Window_SkillShopActorList[_0x293e45(0x250)][_0x293e45(0x181)]=function(_0x2027f8,_0x34387e,_0x34a2d2){const _0x2ebfb5=_0x293e45,_0x41498c=Window_SkillShopActorList[_0x2ebfb5(0xd6)];if(!_0x41498c[_0x2ebfb5(0x12f)])return 0x0;this[_0x2ebfb5(0x12f)](_0x2027f8,_0x34387e['x']+_0x34a2d2,_0x34387e['y'],0xc0);},Window_SkillShopActorList['prototype'][_0x293e45(0x217)]=function(_0x5f1542){const _0x2dd337=_0x293e45;this[_0x2dd337(0x107)]=_0x5f1542,this[_0x2dd337(0x12e)]();},Window_SkillShopActorList[_0x293e45(0x250)][_0x293e45(0x12e)]=function(){const _0x26429d=_0x293e45;Window_StatusBase['prototype'][_0x26429d(0x12e)][_0x26429d(0x1d4)](this),this[_0x26429d(0x21b)]&&this[_0x26429d(0x107)]&&this[_0x26429d(0x107)][_0x26429d(0x1b2)](this[_0x26429d(0x22d)]());},Window_SkillShopActorList[_0x293e45(0x250)][_0x293e45(0x185)]=function(){const _0x25fd99=_0x293e45;Window_StatusBase[_0x25fd99(0x250)][_0x25fd99(0x185)][_0x25fd99(0x1d4)](this);if(this[_0x25fd99(0x17a)]&&this[_0x25fd99(0x22d)]()){const _0x6dc6e7=this['createHelpText']();this[_0x25fd99(0x17a)]['setText'](_0x6dc6e7);}},Window_SkillShopActorList[_0x293e45(0x250)]['createHelpText']=function(){const _0x444432=_0x293e45,_0x3d7c59=Window_SkillShopActorList[_0x444432(0xd6)][_0x444432(0x198)],_0xa66459=this['actor']()[_0x444432(0x194)]()['filter']((_0x3984ac,_0xf70e30,_0x4e925a)=>_0x4e925a[_0x444432(0x1c3)](_0x3984ac)===_0xf70e30);let _0xf23b7a=Window_SkillShopActorList['SETTINGS'][_0x444432(0x109)];if(Window_SkillShopActorList[_0x444432(0xd6)]['spaceJoin'])_0xf23b7a+='\x20';return skillTypesText=_0xa66459['map'](_0x32c18d=>$dataSystem[_0x444432(0x24c)][_0x32c18d])[_0x444432(0x1a8)](undefined)['remove'](null)[_0x444432(0xe5)](_0xf23b7a),_0x3d7c59['format'](this[_0x444432(0x22d)]()[_0x444432(0x19d)](),this[_0x444432(0x22d)]()[_0x444432(0x176)],this[_0x444432(0x22d)]()[_0x444432(0x239)]()[_0x444432(0x19d)],skillTypesText||'');};function Window_SkillShopSkillList(){const _0x5567f4=_0x293e45;this[_0x5567f4(0x216)](...arguments);}Window_SkillShopSkillList[_0x293e45(0x250)]=Object[_0x293e45(0x237)](Window_Selectable['prototype']),Window_SkillShopSkillList[_0x293e45(0x250)]['constructor']=Window_SkillShopSkillList,Window_SkillShopSkillList[_0x293e45(0xd6)]={'bgType':VisuMZ[_0x293e45(0xee)][_0x293e45(0x118)][_0x293e45(0x142)]['SkillListWindow_BgType']??0x0,'errors':{'alreadyLearned':VisuMZ[_0x293e45(0xee)][_0x293e45(0x118)][_0x293e45(0x1b4)][_0x293e45(0x144)]??_0x293e45(0x1f8),'noStypeAccess':VisuMZ[_0x293e45(0xee)][_0x293e45(0x118)][_0x293e45(0x1b4)][_0x293e45(0x175)]??_0x293e45(0x1e5),'wrongClass':VisuMZ[_0x293e45(0xee)][_0x293e45(0x118)]['Vocab'][_0x293e45(0x163)]??_0x293e45(0x13a),'forClass':VisuMZ['SkillShop'][_0x293e45(0x118)][_0x293e45(0x1b4)]['forClass']??_0x293e45(0x1a0),'levelRequirement':VisuMZ['SkillShop'][_0x293e45(0x118)][_0x293e45(0x1b4)][_0x293e45(0x203)]??_0x293e45(0x212),'skillLearnRequirement':VisuMZ[_0x293e45(0xee)][_0x293e45(0x118)][_0x293e45(0x1b4)]['skillLearnRequirement']??_0x293e45(0x1e2)}},Window_SkillShopSkillList[_0x293e45(0x250)]['initialize']=function(_0x487616,_0x288606){const _0x3580b1=_0x293e45;this[_0x3580b1(0x1b0)]=_0x288606,Window_Selectable[_0x3580b1(0x250)][_0x3580b1(0x216)][_0x3580b1(0x1d4)](this,_0x487616),this[_0x3580b1(0x13c)]=null;},Window_SkillShopSkillList['prototype'][_0x293e45(0x1b2)]=function(_0x3641d6){const _0x259325=_0x293e45;this[_0x259325(0x13c)]!==_0x3641d6&&(this[_0x259325(0x13c)]=_0x3641d6,this['refresh']());},Window_SkillShopSkillList['prototype'][_0x293e45(0x22d)]=function(){const _0x153748=_0x293e45;return this[_0x153748(0x13c)]||null;},Window_SkillShopSkillList[_0x293e45(0x250)][_0x293e45(0x13e)]=function(){return 0x1;},Window_SkillShopSkillList[_0x293e45(0x250)][_0x293e45(0x1c9)]=function(){const _0x4b1a4e=_0x293e45;return this[_0x4b1a4e(0x1db)]?this[_0x4b1a4e(0x1db)]['length']:0x1;},Window_SkillShopSkillList[_0x293e45(0x250)][_0x293e45(0x243)]=function(){const _0x285fd7=_0x293e45;return this[_0x285fd7(0x21c)](this[_0x285fd7(0x136)]());},Window_SkillShopSkillList[_0x293e45(0x250)][_0x293e45(0x21c)]=function(_0x7274d3){const _0x5157cd=_0x293e45;return this[_0x5157cd(0x1db)]&&_0x7274d3>=0x0?this['_data'][_0x7274d3]:null;},Window_SkillShopSkillList['prototype'][_0x293e45(0x153)]=function(){const _0x45f02d=_0x293e45;return this[_0x45f02d(0xdd)](this['item']());},Window_SkillShopSkillList['prototype'][_0x293e45(0xfa)]=function(_0x1b5004){const _0x30fea0=_0x293e45;this[_0x30fea0(0x1db)]=_0x1b5004,this[_0x30fea0(0x189)]();},Window_SkillShopSkillList[_0x293e45(0x250)]['selectLast']=function(){const _0x4db23f=_0x293e45,_0x3164b5=this[_0x4db23f(0x136)]();this[_0x4db23f(0x158)](_0x3164b5>=0x0?_0x3164b5:0x0);},Window_SkillShopSkillList[_0x293e45(0x250)][_0x293e45(0x1e3)]=function(_0x275d7d){const _0x5a0855=_0x293e45,_0x35c49d=this[_0x5a0855(0x21c)](_0x275d7d);if(!_0x35c49d)return;const _0x45d0d0=this[_0x5a0855(0x1f2)](_0x275d7d);this[_0x5a0855(0x173)](),this[_0x5a0855(0x12a)](this[_0x5a0855(0xdd)](_0x35c49d)),this[_0x5a0855(0xd5)](_0x35c49d,_0x45d0d0['x'],_0x45d0d0['y'],_0x45d0d0[_0x5a0855(0x11c)]),this[_0x5a0855(0x10f)](_0x35c49d,_0x45d0d0);},Window_SkillShopSkillList[_0x293e45(0x250)][_0x293e45(0xdd)]=function(_0x2b7165){const _0x46bc15=_0x293e45;if(!_0x2b7165)return![];if(this[_0x46bc15(0x22d)]()&&!this[_0x46bc15(0x22d)]()[_0x46bc15(0x15d)](_0x2b7165))return![];if(Imported[_0x46bc15(0x23b)]){if('prqpd'!==_0x46bc15(0x164)){if(!VisuMZ[_0x46bc15(0x148)]['CheckMeetBuyRequirements'](_0x2b7165))return![];}else return this[_0x46bc15(0xed)]();}return $gameParty[_0x46bc15(0x241)]()>=DataManager[_0x46bc15(0x15c)](_0x2b7165);},Window_SkillShopSkillList[_0x293e45(0x250)][_0x293e45(0x10f)]=function(_0x4b4777,_0x53966a){const _0x47cf99=_0x293e45,_0x46f579=_0x53966a['x'],_0x2a5a75=_0x53966a['y'],_0x52b958=_0x53966a['width'];if(this[_0x47cf99(0x22d)]()&&!this[_0x47cf99(0x22d)]()[_0x47cf99(0x15d)](_0x4b4777))this[_0x47cf99(0xec)](_0x4b4777,_0x46f579,_0x2a5a75,_0x52b958);else{if(Imported[_0x47cf99(0x23b)])this[_0x47cf99(0x1d9)](_0x4b4777,_0x53966a,![],0x1);else{const _0x21bebd=Math[_0x47cf99(0x169)](DataManager['skillShopCost'](_0x4b4777)*(0x1-this[_0x47cf99(0x1b0)]));this[_0x47cf99(0x119)](_0x21bebd,TextManager[_0x47cf99(0x15e)],_0x46f579,_0x2a5a75,_0x52b958);}}},Window_SkillShopSkillList[_0x293e45(0x250)][_0x293e45(0xec)]=function(_0x48a9d3,_0x54a60d,_0x230732,_0x2f266b){const _0x2b2518=_0x293e45;this[_0x2b2518(0x173)]();const _0x3868a2=Window_SkillShopSkillList[_0x2b2518(0xd6)][_0x2b2518(0x114)];let _0x589071='';if(this['actor']()[_0x2b2518(0x18e)](_0x48a9d3['id']))_0x589071=_0x3868a2[_0x2b2518(0x144)];else{if(!VisuMZ['SkillShop'][_0x2b2518(0x219)](this[_0x2b2518(0x22d)](),_0x48a9d3))_0x589071=_0x3868a2[_0x2b2518(0x175)][_0x2b2518(0x226)]($dataSystem[_0x2b2518(0x24c)][_0x48a9d3[_0x2b2518(0x1fc)]]);else{if(!VisuMZ[_0x2b2518(0xee)][_0x2b2518(0x248)](this[_0x2b2518(0x22d)](),_0x48a9d3)){const _0x29fb04=DataManager['skillShopClassRequirements'](_0x48a9d3);if(_0x29fb04['length']>0x1)_0x589071=_0x3868a2[_0x2b2518(0x163)][_0x2b2518(0x226)]($dataClasses[this[_0x2b2518(0x22d)]()['currentClass']()['id']]['name']);else{if(_0x2b2518(0x101)===_0x2b2518(0x11a))return _0x154247[_0x2b2518(0x225)][_0x2b2518(0x118)][_0x2b2518(0x14a)][_0x2b2518(0xf2)][_0x2b2518(0x1d4)](this);else _0x589071=_0x3868a2['forClass'][_0x2b2518(0x226)]($dataClasses[_0x29fb04[0x0]][_0x2b2518(0x19d)]);}}else{if(DataManager[_0x2b2518(0x218)](_0x48a9d3)>this[_0x2b2518(0x22d)]()[_0x2b2518(0x176)])_0x589071=_0x3868a2['levelRequirement'][_0x2b2518(0x226)](DataManager[_0x2b2518(0x218)](_0x48a9d3));else{if(!VisuMZ[_0x2b2518(0xee)][_0x2b2518(0x147)](this[_0x2b2518(0x22d)](),_0x48a9d3)){const _0x454323=DataManager['skillShopSkillLearnRequirements'](_0x48a9d3)[_0x2b2518(0x14d)](_0xe9cd09=>!this[_0x2b2518(0x22d)]()[_0x2b2518(0x18e)](_0xe9cd09)),_0x2712e6=$dataSkills[_0x454323[0x0]],_0x26234a=_0x2b2518(0x184)['format'](_0x2712e6[_0x2b2518(0x18d)]),_0x1513da=_0x2712e6[_0x2b2518(0x19d)];_0x589071=_0x3868a2[_0x2b2518(0x126)][_0x2b2518(0x226)](_0x1513da,_0x26234a);}else{if(!VisuMZ['SkillShop'][_0x2b2518(0x229)](_0x48a9d3)){const _0x487d8d=DataManager[_0x2b2518(0x1dc)](_0x48a9d3);_0x589071=$dataSystem[_0x2b2518(0x22e)][_0x487d8d[0x0]];}else _0x589071=_0x2b2518(0x186);}}}}}const _0x4e230c=this[_0x2b2518(0x22b)](_0x589071)['width'];this[_0x2b2518(0x110)](_0x589071,_0x54a60d+_0x2f266b-_0x4e230c,_0x230732,_0x2f266b);},Window_SkillShopSkillList[_0x293e45(0x250)][_0x293e45(0x185)]=function(){const _0x2ecdaa=_0x293e45;this[_0x2ecdaa(0x24a)](this[_0x2ecdaa(0x243)]());},Window_SkillShopSkillList[_0x293e45(0x250)][_0x293e45(0x1df)]=function(){const _0x25fb36=_0x293e45;SoundManager['playShop'](),SoundManager[_0x25fb36(0x1f0)]();},VisuMZ[_0x293e45(0xee)]['Scene_Boot_process_VisuMZ_MoreCurrencies_Notetags']=Scene_Boot['prototype'][_0x293e45(0x183)],Scene_Boot[_0x293e45(0x250)][_0x293e45(0x183)]=function(){const _0x834ade=_0x293e45;VisuMZ[_0x834ade(0xee)][_0x834ade(0x191)][_0x834ade(0x1d4)](this);if(VisuMZ[_0x834ade(0x148)][_0x834ade(0x1ed)]<1.03){let _0x24ce72='';_0x24ce72+=_0x834ade(0x22f),_0x24ce72+=_0x834ade(0x1a9),alert(_0x24ce72),SceneManager[_0x834ade(0x1de)]();}if(VisuMZ[_0x834ade(0x230)])return;const _0x48e4f8=[$dataSkills];for(const _0x486d25 of _0x48e4f8){for(const _0x2bfbf4 of _0x486d25){if(!_0x2bfbf4)continue;VisuMZ[_0x834ade(0x148)]['ParseNotetagCosts'](_0x2bfbf4);}}},VisuMZ[_0x293e45(0xee)]['ParseSkillNotetags']=VisuMZ[_0x293e45(0x154)],VisuMZ[_0x293e45(0x154)]=function(_0x169666){const _0x5b8476=_0x293e45;VisuMZ[_0x5b8476(0xee)]['ParseSkillNotetags'][_0x5b8476(0x1d4)](this,_0x169666);if(VisuMZ[_0x5b8476(0x148)]){if(_0x5b8476(0x13d)==='xYJBI'){if(this['meetsShopBustStyleUIConditions']()){this[_0x5b8476(0x232)]();return;}const _0x107e9a=_0x4e0f1a[_0x5b8476(0xee)]['Settings'][_0x5b8476(0x120)];_0x107e9a&&(_0x107e9a[_0x5b8476(0x12b)]!==''||_0x107e9a[_0x5b8476(0x14f)]!=='')&&(this['_backSprite1']=new _0x25721a(_0x4fc098[_0x5b8476(0x115)](_0x107e9a[_0x5b8476(0x12b)])),this['_backSprite2']=new _0x524c3a(_0x4625ab[_0x5b8476(0x1b5)](_0x107e9a[_0x5b8476(0x14f)])),this[_0x5b8476(0x220)](this[_0x5b8476(0x159)]),this[_0x5b8476(0x220)](this[_0x5b8476(0x1f7)]),this[_0x5b8476(0x159)][_0x5b8476(0x1f6)][_0x5b8476(0xef)](this[_0x5b8476(0x19c)][_0x5b8476(0x127)](this,this[_0x5b8476(0x159)])),this[_0x5b8476(0x1f7)][_0x5b8476(0x1f6)]['addLoadListener'](this[_0x5b8476(0x19c)][_0x5b8476(0x127)](this,this[_0x5b8476(0x1f7)])));}else VisuMZ[_0x5b8476(0x148)]['ParseNotetagCosts'](_0x169666);}},VisuMZ[_0x293e45(0xee)]['DataManager_prepareMoreCurrenciesObj']=DataManager['prepareMoreCurrenciesObj'],DataManager['prepareMoreCurrenciesObj']=function(){const _0x5e3f7f=_0x293e45;VisuMZ[_0x5e3f7f(0xee)][_0x5e3f7f(0xea)][_0x5e3f7f(0x1d4)](this),this['_moreCurrencyCosts']['skills']={};},VisuMZ[_0x293e45(0xee)][_0x293e45(0x1e4)]=DataManager[_0x293e45(0x1fb)],DataManager['getMoreCurrenciesObjLibrary']=function(_0x162c0e){const _0x31ffba=_0x293e45;if(DataManager[_0x31ffba(0x247)](_0x162c0e)){if(_0x31ffba(0x215)!==_0x31ffba(0x215)){const _0x5ca008=_0x2aebb3['skillShopSwitchRequirements'](_0x341b2c);_0x468fbb=_0x2f21c6['switches'][_0x5ca008[0x0]];}else return this['_moreCurrencyCosts'][_0x31ffba(0x19b)];}return VisuMZ['SkillShop']['DataManager_getMoreCurrenciesObjLibrary'][_0x31ffba(0x1d4)](this,_0x162c0e);};VisuMZ[_0x293e45(0x148)]&&(VisuMZ[_0x293e45(0x148)][_0x293e45(0x1ac)]=VisuMZ[_0x293e45(0x148)][_0x293e45(0x10a)],VisuMZ[_0x293e45(0x148)][_0x293e45(0x10a)]=function(_0x79535a,_0x40920c,_0x18d37b,_0x359b24){const _0x393293=_0x293e45;return SceneManager[_0x393293(0x182)]()?VisuMZ['SkillShop'][_0x393293(0x10a)](_0x79535a,_0x40920c,_0x18d37b,_0x359b24):VisuMZ[_0x393293(0x148)]['Patch_CreateSubGoldCostText']['call'](this,_0x79535a,_0x40920c,_0x18d37b,_0x359b24);});VisuMZ[_0x293e45(0xee)][_0x293e45(0x10a)]=function(_0x3aa268,_0x35781c,_0x3df0f9,_0x2a7446){const _0x522641=_0x293e45,_0x3e7d4b=SceneManager[_0x522641(0xe1)][_0x522641(0x107)],_0x556f00=DataManager[_0x522641(0x15c)](_0x3aa268),_0x11741a=Math[_0x522641(0xd9)](_0x556f00*_0x2a7446);if(_0x11741a===0x0)return'';if(Imported['VisuMZ_3_VisualGoldDisplay']&&_0x3e7d4b){if(_0x522641(0x1aa)==='grpwl'){const _0x2f59b3=_0x3e7d4b[_0x522641(0x1cd)](),_0x573eb4=_0x3e7d4b['visualGoldDisplayNoCost']();return VisuMZ[_0x522641(0x221)][_0x522641(0x1c2)](_0x11741a,_0x2f59b3,_0x573eb4);}else return _0x217fde['show'];}else return VisuMZ[_0x522641(0x148)]['CreateGoldCostText'](_0x11741a);};