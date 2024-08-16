//=============================================================================
// VisuStella MZ - State Tooltips
// VisuMZ_3_StateTooltips.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_StateTooltips = true;

var VisuMZ = VisuMZ || {};
VisuMZ.StateTooltips = VisuMZ.StateTooltips || {};
VisuMZ.StateTooltips.version = 1.07;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.07] [StateTooltips]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/State_Tooltips_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_MessageCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_MessageCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds a tooltip window in battle (and other scenes) whenever the
 * player's mouse cursor is hovered over specific areas of the screen. The
 * tooltip window will display a list of the states, buffs, and debuffs the
 * hovered battler has along with a description of the entities and their
 * remaining duration.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Tooltip window displays when hovering over battlers and specific windows
 *   to display their states, buffs, and debuffs.
 * * Adjust the text format in which information is displayed inside the
 *   tooltip window.
 * * Modify the descriptions for states, buffs, and debuffs to your liking.
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
 * * VisuMZ_1_MessageCore
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
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_2_PartySystem
 * 
 * VisuMZ_2_ClassChangeSystem
 *
 * These plugins have scenes that also support tooltips if this plugin is also
 * installed while those are active in your game's project.
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
 * VisuMZ_1_ElementStatusCore
 * 
 * The updated Status Menu currently does not contain tooltip support for the
 * "General" pages that may display the actor's states. This is due to the
 * customization aspect for the various Status Menu pages. There will be a
 * future update where we will adapt this feature.
 * 
 * ---
 *
 * VisuMZ_2_DragonbonesUnion
 *
 * If you are using a Dragonbones Battler and want to apply a state tooltip to
 * it, the access area of the battler will be based on the hitbox size you
 * declare for the Dragonbones Battler with notetags. This is because all
 * Dragonbones battlers do not have innate automatically calculated hitbox
 * sizes as a result of their dynamically animated nature.
 * 
 * Please refer to the notetag section of the Dragonbones Union plugin for
 * Dragonbones Battler hitboxes to learn how to apply hitbox sizes.
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
 * === Description-Related Notetags ===
 * 
 * ---
 *
 * <Help Description>
 *  text
 *  text
 * </Help Description>
 *
 * - Used for: State Notetags
 * - Assigns a help description for the state.
 * - Replace 'text' with text you want displayed for the tooltip window.
 * - This best works with one line.
 * - If this notetag is not used, the help description will default to the
 *   setting found in the plugin's Plugin Parameters.
 * - Insert %1 into the help description to show any data that would otherwise
 *   be shown as the state display, such as Absorption Barrier count.
 *
 * ---
 * 
 * <Exclude From Tooltips>
 * 
 * - Used for: State Notetags
 * - Excludes the state from being displayed in the state tooltips.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Tooltip Settings
 * ============================================================================
 *
 * General settings for the State Tooltips Window.
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
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * Vocabulary settings for the State Tooltips Window.
 *
 * ---
 *
 * General
 * 
 *   Default Description:
 *   - This is the default description that appears for a state without a
 *     declared description. %1 - State's Name
 *   - Can use text codes.
 *
 * ---
 *
 * Entries
 * 
 *   State Format:
 *   - Can use text codes.
 *   - %1 - Icon, %2 - Name, %3 - Description, %4 - Duration, %5 - State Color
 * 
 *   Buff Format:
 *   - Can use text codes.
 *   - %1 - Icon, %2 - Name, %3 - Percentage, %4 - Duration, %5 - Buff Color
 * 
 *   Debuff Format:
 *   - Can use text codes.
 *   - %1 - Icon, %2 - Name, %3 - Percentage, %4 - Duration, %5 - Debuff Color
 * 
 *   Replace Whites?:
 *   - If state, buff, debuff names are white, replace them?
 * 
 *     Replacement Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 *
 * ---
 *
 * Turns Remaining
 * 
 *   Action End Format:
 *   - Can use text codes.
 *   - %1 - Remaining, %2 - State/Buff/Debuff Color
 * 
 *   Turn End Format:
 *   - Can use text codes.
 *   - %1 - Remaining, %2 - State/Buff/Debuff Color
 * 
 *   Passive Text:
 *   - Can use text codes.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Choose which windows to enable tooltip support for.
 *
 * ---
 *
 * Settings
 * 
 *   Window_BattleStatus:
 *   Window_ClassStatus:
 *   Window_EquipStatus:
 *   Window_MenuActor:
 *   Window_MenuStatus:
 *   Window_PartyStatus:
 *   Window_SkillStatus:
 *   Window_Status:
 *   - Enable State Tooltips for this window?
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
 * Version 1.07: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a bug where state tooltips showed through skill and item windows
 *    with the VisuMZ_3_FrontviewBattleUI layout. Fix made by Olivia.
 * 
 * Version 1.06: September 14, 2023
 * * Compatibility Update!
 * ** Added better compatibility with VisuMZ_3_FrontviewBattleUI!
 * 
 * Version 1.05: February 24, 2022
 * * Feature Update!
 * ** When the Choice List Window is hovered over, the State Tooltip window
 *    will hide itself. Update made by Irina.
 * 
 * Version 1.04: October 21, 2021
 * * Documentation Update!
 * ** Added a section for VisuMZ_1_ElementStatusCore in the "VisuStella MZ
 *    Compatibility" section since we received a very good question on it.
 * *** The updated Status Menu currently does not contain tooltip support for
 *     the "General" pages that may display the actor's states. This is due to
 *     the customization aspect for the various Status Menu pages. There will
 *     be a future update where we will adapt this feature.
 * 
 * Version 1.03: October 7, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.02: May 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Irina.
 * *** <Exclude From Tooltips>
 * **** Excludes the state from being displayed in the state tooltips.
 * 
 * Version 1.01: April 2, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_2_DragonbonesUnion plugin.
 * 
 * Version 1.00 Official Release Date: February 24, 2021
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
 * @param StateTooltips
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Tooltip:struct
 * @text Tooltip Settings
 * @type struct<Tooltip>
 * @desc General settings for the State Tooltips Window.
 * @default {"Appearance":"","Scale:num":"0.6","WindowSkin:str":"Window","WindowOpacity:num":"240","Offset":"","OffsetX:num":"+0","OffsetY:num":"+0"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc Vocabulary settings for the State Tooltips Window.
 * @default {"General":"","HelpDescription:json":"\"-\"","Entries":"","StateFmt:str":"\\C[%5]%1%2:\\C[0] %3 %4","BuffFmt:str":"\\C[%5]%1%2▲:\\C[0] Increases unit's %2 to \\C[%5]%3%\\C[0] %4","DebuffFmt:str":"\\C[%5]%1%2▼:\\C[0] Decreases unit's %2 to \\C[%5]%3%\\C[0] %4","ReplaceWhite:eval":"true","WhiteReplaceColor:str":"5","Turns":"","ActionsFmt:str":"\\C[6](Actions \\C[%2]%1\\C[6])\\C[0]","TurnsFmt:str":"\\C[5](Turns \\C[%2]%1\\C[5])\\C[0]","PassiveText:str":"\\C[4](Passive)\\C[0]"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Choose which windows to enable tooltip support for.
 * @default {"Window_BattleStatus:eval":"true","Window_ClassStatus:eval":"true","Window_EquipStatus:eval":"true","Window_MenuActor:eval":"true","Window_MenuStatus:eval":"true","Window_PartyStatus:eval":"true","Window_SkillStatus:eval":"true","Window_Status:eval":"true"}
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
 * Tooltip Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Tooltip:
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
/* ----------------------------------------------------------------------------
 * Vocab Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param General
 *
 * @param HelpDescription:json
 * @text Default Description
 * @parent General
 * @type note
 * @desc This is the default description that appears for a state
 * without a declared description. %1 - State's Name
 * @default "-"
 * 
 * @param Entries
 *
 * @param StateFmt:str
 * @text State Format
 * @parent Entries
 * @desc Can use text codes. %1 - Icon, %2 - Name,
 * %3 - Description, %4 - Duration, %5 - State Color
 * @default \C[%5]%1%2:\C[0] %3 %4
 *
 * @param BuffFmt:str
 * @text Buff Format
 * @parent Entries
 * @desc Can use text codes. %1 - Icon, %2 - Name,
 * %3 - Percentage, %4 - Duration, %5 - Buff Color
 * @default \C[%5]%1%2▲:\C[0] Increases unit's %2 to \C[%5]%3%\C[0] %4
 *
 * @param DebuffFmt:str
 * @text Debuff Format
 * @parent Entries
 * @desc Can use text codes. %1 - Icon, %2 - Name,
 * %3 - Percentage, %4 - Duration, %5 - Debuff Color
 * @default \C[%5]%1%2▼:\C[0] Decreases unit's %2 to \C[%5]%3%\C[0] %4
 *
 * @param ReplaceWhite:eval
 * @text Replace Whites?
 * @parent Entries
 * @type boolean
 * @on Replace
 * @off Don't Replace
 * @desc If state, buff, debuff names are white, replace them?
 * @default true
 *
 * @param WhiteReplaceColor:str
 * @text Replacement Color
 * @parent ReplaceWhite:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 5
 * 
 * @param Turns
 * @text Turns Remaining
 *
 * @param ActionsFmt:str
 * @text Action End Format
 * @parent Turns
 * @desc Can use text codes.
 * %1 - Remaining, %2 - State/Buff/Debuff Color
 * @default \C[6](Actions \C[%2]%1\C[6])\C[0]
 *
 * @param TurnsFmt:str
 * @text Turn End Format
 * @parent Turns
 * @desc Can use text codes.
 * %1 - Remaining, %2 - State/Buff/Debuff Color
 * @default \C[5](Turns \C[%2]%1\C[5])\C[0]
 *
 * @param PassiveText:str
 * @text Passive Text
 * @parent Turns
 * @desc Can use text codes.
 * @default \C[4](Passive)\C[0]
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param Window_BattleStatus:eval
 * @text Window_BattleStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_ClassStatus:eval
 * @text Window_ClassStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_EquipStatus:eval
 * @text Window_EquipStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_MenuActor:eval
 * @text Window_MenuActor
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_MenuStatus:eval
 * @text Window_MenuStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_PartyStatus:eval
 * @text Window_PartyStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_SkillStatus:eval
 * @text Window_SkillStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_Status:eval
 * @text Window_Status
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 */
//=============================================================================

const _0x4c0e2a=_0x379d;function _0xc833(){const _0x887b21=['commandSki','currentToo','createCont','System','buffIconIn','iption','ease\x20updat','KyiHC','wODkT','22FUcOKG','ActionsFmt','ARRAYJSON','ered','anager.','WindowOpac','_itemWindo','split','Scene_Batt','rrectly\x20pl','SufnN','Item','setStateTo','aHHOt','targetOpac','Opacity','peString','VisuMZ_1_B','GbDqe','create','564FvFXie','in\x20order\x20f','\x5cHEXCOLOR<','ARRAYSTRUC','ffffff','_cache_Sta','mxDEo','Sprite_Cli','tWindow','stateTurns','height','xUkMV','tle','prototype','JSON','teTooltipB','dowLayer','suMZ_State','teTooltips','erStateToo','VisuMZ_3_F','CtTfz','isDead','_skillWind','ARRAYEVAL','autoRemova','hiTdb','active','16512876rjPXVA','mzjEb','aced\x20on\x20th','bcphv','essageKeyw','otetags','tags_Descr','Rqgur','WINDOW_SCA','or\x20VisuMZ_','Notetags','status','match','_onDatabas','addChild','hide','ked','tipWindow','drawing','touchY','contains','applyInver','XFZTH','updatePosi','oltipBattl','noFyh','708SAgWxn','3_StateToo','ption','apeCharact','N_FILENAME','windowskin','32298IRUNQz','DebuffFmt','rxbiw','ing\x20a\x20requ','tler_onMou','resh','_battler','tateToolti','TurnsFmt','ET_Y','updateBack','ugin\x27s.\x20Pl','#%1','dex','acity','isBattlerC','ConvertPar','chStateToo','Vocab','WINDOW_SKI','pdated\x20','install\x20%2','isSceneBat','rCHXa','clampPosit','process_Vi','worldTrans','weYUG','ntviewUiLa','22046928wYNXrK','iconIndex','e\x20plugin\x20l','ouseEnter','stateColor','yYPRw','ACTIONS_FM','isBuffAffe','touchX','JYWPo','trim','CNaln','buffTurns','yout','debuffColo','open','form','setupBuffT','PASSIVE_TE','lTiming','ckable_onM','opacity','Tooltips','hitTest','format','max','other\x20Tier','WhiteRepla','n.\x0aPlease\x20','OffsetY','show','isBuffOrDe','Ugcbe','LzHbg','resizeWind','ext','ltipHovere','reorder\x20th','\x20a\x20Tier\x20%2','iPBbl','STRUCT','splay','846420EjjSRN','updateOpac','Tooltips_N','26432hjPhWm','ttleUI','ity','changeText','getColor','62FhzFKG','8teDvlo','Window','rontviewBa','requestRef','version','\x20plugin\x20pl','Colors','StateToolt','contentsOp','getStateTo','overedByWi','VisuMZ_2_P','openTouchS','e\x20Plugin\x20M','vpUJp','HelpDescri','createStat','N_OPACITY','Loaded','setupText','TurnText','ips','_createWin','le_command','ARRAYNUM','Scale','ParseState','lassChange','IsBattlerC','map','isEnemy','sFsVr','BUFF_FMT','length','4|0|2|3|1','parse','cVwae','isSupportM','tkZoN','sWDGH','4385qBZJgn','_requestRe','onMouseEnt','getStateDi','MOUSE_OFFS','PassiveTex','QcjcC','call','Exclude','EVAL','actor','ltips','jnqRa','dimensionR','ttleUI\x20nee','_stateTool','owLayer','%1\x27s\x20versi','tetags','processEsc','commandIte','%1\x20is\x20inco','bDdvy','textColor','contents','isAppeared','tStateTool','STATE_FMT','xWSZs','vJVDv','\x5cI[%1]','aGZKW','update','attler','\x20into\x20the\x20','Skill','passiveSta','_inBattleS','#%1>','setupState','QELxE','ISOHh','ion','IqbnP','ltipTouche','eUkXo','initialize','loadSystem','seEnter','onMouseExi','setBattler','visible','ARRAYSTR','ET_X','isMouseHov','parameters','RegExp','ectable_pr','mqHnY','Scene_Boot','descriptio','replace','clear','%1\x20is\x20miss','bTNll','Settings','andWindow','pmQkf','WindowSkin','_actor','exit','tdPwR','Scene_Base','urnText','isOpen','STR','eLoaded','ords','e\x20it\x20in\x20th','KWyWT','Icvxy','hitIndex','BuffFmt','LPHIo','ams','isUsingFro','Plugin\x20Man','5267043ZbvrRI','TcFKh','WKzKo','AcipO','ceColor','REPLACE_WH','states','EZLcW','OffsetX','floor','onDatabase','DEBUFF_FMT','_actorComm','closeTouch','ltips\x20to\x20w','note','nentD','ReplaceWhi','return\x200','param','ds\x20to\x20be\x20u','clamp','Sprite_Bat','cted','Color','FUNC','name','ndow','_scene','_text','itemPaddin','eTooltipWi','OLOR','VisuMZ_2_C','_buffs','TURNS_FMT','fKBhb','scale','ettings','push','paramBuffR','GisYB','buffColor','ate','textSizeEx','Parse_Note','updateDeat','NONWHITE_C','ocessTouch','processTou','backOpacit','YWQYE','_choiceLis','constructo','padding','replaceHex','toUpperCas','isStateToo','VghVQ','ltipEnable','cUOSt','createWind','\x20largest\x20t','aced\x20over\x20','fresh','ents','buffAffect','ODDfs','Tooltip','tips','refresh','width','ect'];_0xc833=function(){return _0x887b21;};return _0xc833();}function _0x379d(_0x2e54f8,_0x2cfacd){const _0xf20084=_0xc833();return _0x379d=function(_0xd24be,_0xcdeffa){_0xd24be=_0xd24be-(-0x32a+0x2*0x118e+-0x25*0xd5);let _0x240c71=_0xf20084[_0xd24be];return _0x240c71;},_0x379d(_0x2e54f8,_0x2cfacd);}(function(_0x1753ac,_0x55bf87){const _0x3e4ce8=_0x379d,_0x34d1a0=_0x1753ac();while(!![]){try{const _0xb4b771=-parseInt(_0x3e4ce8(0x187))/(-0x1*-0x10af+0x1297*0x1+-0x2345*0x1)*(-parseInt(_0x3e4ce8(0x1d6))/(0x2164+0x57a*0x2+-0x2c56))+-parseInt(_0x3e4ce8(0x256))/(-0x146b+-0xb19*0x1+-0x7*-0x481)+parseInt(_0x3e4ce8(0x181))/(-0x18e3+-0xf*-0x56+0x13dd)*(parseInt(_0x3e4ce8(0x1ff))/(-0x21f8+0x2*-0x1e8+0x25cd))+-parseInt(_0x3e4ce8(0x14b))/(0x105+-0x1218+0x3*0x5b3)*(parseInt(_0x3e4ce8(0x1d1))/(-0x1*0x1eb2+0x158a+0x92f))+-parseInt(_0x3e4ce8(0x1d7))/(0x1cd3*0x1+0xcef+-0xe*0x2fb)*(parseInt(_0x3e4ce8(0x167))/(-0x2*-0x2b9+0x21ca+0xd11*-0x3))+parseInt(_0x3e4ce8(0x1ce))/(-0x26b1+-0x21*-0x1a+0x3*0xbcb)+parseInt(_0x3e4ce8(0x137))/(-0x12*0xb+-0x81c+-0x1*-0x8ed)*(parseInt(_0x3e4ce8(0x1a4))/(0x75c+-0x13b1*-0x1+-0x1b01));if(_0xb4b771===_0x55bf87)break;else _0x34d1a0['push'](_0x34d1a0['shift']());}catch(_0x245c7e){_0x34d1a0['push'](_0x34d1a0['shift']());}}}(_0xc833,0x58d5*0x2e+-0x13f426*0x1+0x3f50*0x4c));var label=_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec),tier=tier||-0xd22*-0x2+-0xfad*-0x1+-0x29f1,dependencies=[_0x4c0e2a(0x148)+'attleCore'],pluginData=$plugins['filter'](function(_0x5ebd3d){const _0x2e140c=_0x4c0e2a,_0x16aa12={'vpUJp':function(_0x416f81,_0x9a503c){return _0x416f81+_0x9a503c;}};return _0x5ebd3d[_0x2e140c(0x172)]&&_0x5ebd3d[_0x2e140c(0x23b)+'n']['includes'](_0x16aa12[_0x2e140c(0x1e5)](_0x16aa12[_0x2e140c(0x1e5)]('[',label),']'));})[0x35f*-0xa+-0x2575+0x472b];VisuMZ[label][_0x4c0e2a(0x240)]=VisuMZ[label][_0x4c0e2a(0x240)]||{},VisuMZ[_0x4c0e2a(0x197)+_0x4c0e2a(0x253)]=function(_0x5a0c55,_0x1c7ca3){const _0x55a35d=_0x4c0e2a,_0x31c189={'CtTfz':function(_0x1f0046,_0x12024c){return _0x1f0046(_0x12024c);},'ISOHh':function(_0x5aa320,_0x47209e){return _0x5aa320(_0x47209e);},'tkZoN':'NUM','cVwae':function(_0x25b1d0,_0x13988f){return _0x25b1d0!==_0x13988f;},'DZIXH':function(_0xc2f7eb,_0x21f819){return _0xc2f7eb(_0x21f819);},'aGZKW':_0x55a35d(0x1ef),'sWDGH':function(_0x17b92c,_0x3360ac){return _0x17b92c!==_0x3360ac;},'rxbiw':_0x55a35d(0x208),'xUkMV':_0x55a35d(0x163),'IqbnP':_0x55a35d(0x159),'MwnSj':_0x55a35d(0x139),'XFZTH':_0x55a35d(0x26f),'buFST':_0x55a35d(0x268),'sFsVr':'ARRAYFUNC','fKBhb':function(_0x53fefb,_0x87dd73){return _0x53fefb!==_0x87dd73;},'QELxE':_0x55a35d(0x24a),'KyiHC':function(_0x4aa915,_0x1165a1){return _0x4aa915(_0x1165a1);},'rCHXa':_0x55a35d(0x233),'EZLcW':function(_0x281379,_0x1b7560){return _0x281379!==_0x1b7560;},'jnqRa':_0x55a35d(0x1cc),'ODDfs':_0x55a35d(0x14e)+'T'};for(const _0x58c086 in _0x1c7ca3){if(_0x58c086['match'](/(.*):(.*)/i)){const _0x1a633a=_0x31c189[_0x55a35d(0x160)](String,RegExp['$1']),_0x28df8a=_0x31c189[_0x55a35d(0x228)](String,RegExp['$2'])[_0x55a35d(0x28e)+'e']()[_0x55a35d(0x1ae)]();let _0x382cc2,_0x469a45,_0x153f43;switch(_0x28df8a){case _0x31c189[_0x55a35d(0x1fd)]:_0x382cc2=_0x31c189[_0x55a35d(0x1fb)](_0x1c7ca3[_0x58c086],'')?_0x31c189['DZIXH'](Number,_0x1c7ca3[_0x58c086]):0x159a+0x218d*0x1+-0x3727;break;case _0x31c189[_0x55a35d(0x21e)]:_0x469a45=_0x31c189['sWDGH'](_0x1c7ca3[_0x58c086],'')?JSON[_0x55a35d(0x1fa)](_0x1c7ca3[_0x58c086]):[],_0x382cc2=_0x469a45[_0x55a35d(0x1f4)](_0x8878e=>Number(_0x8878e));break;case _0x31c189[_0x55a35d(0x189)]:_0x382cc2=_0x31c189[_0x55a35d(0x1fe)](_0x1c7ca3[_0x58c086],'')?_0x31c189[_0x55a35d(0x228)](eval,_0x1c7ca3[_0x58c086]):null;break;case _0x31c189[_0x55a35d(0x156)]:_0x469a45=_0x31c189[_0x55a35d(0x1fb)](_0x1c7ca3[_0x58c086],'')?JSON[_0x55a35d(0x1fa)](_0x1c7ca3[_0x58c086]):[],_0x382cc2=_0x469a45[_0x55a35d(0x1f4)](_0x4a1edf=>eval(_0x4a1edf));break;case _0x31c189[_0x55a35d(0x22a)]:_0x382cc2=_0x31c189[_0x55a35d(0x1fe)](_0x1c7ca3[_0x58c086],'')?JSON['parse'](_0x1c7ca3[_0x58c086]):'';break;case _0x31c189['MwnSj']:_0x469a45=_0x31c189[_0x55a35d(0x1fb)](_0x1c7ca3[_0x58c086],'')?JSON['parse'](_0x1c7ca3[_0x58c086]):[],_0x382cc2=_0x469a45['map'](_0x3b33d7=>JSON['parse'](_0x3b33d7));break;case _0x31c189[_0x55a35d(0x17d)]:_0x382cc2=_0x31c189[_0x55a35d(0x1fe)](_0x1c7ca3[_0x58c086],'')?new Function(JSON[_0x55a35d(0x1fa)](_0x1c7ca3[_0x58c086])):new Function(_0x31c189['buFST']);break;case _0x31c189[_0x55a35d(0x1f6)]:_0x469a45=_0x31c189[_0x55a35d(0x27a)](_0x1c7ca3[_0x58c086],'')?JSON[_0x55a35d(0x1fa)](_0x1c7ca3[_0x58c086]):[],_0x382cc2=_0x469a45[_0x55a35d(0x1f4)](_0x24efc7=>new Function(JSON[_0x55a35d(0x1fa)](_0x24efc7)));break;case _0x31c189[_0x55a35d(0x227)]:_0x382cc2=_0x31c189[_0x55a35d(0x1fe)](_0x1c7ca3[_0x58c086],'')?_0x31c189[_0x55a35d(0x135)](String,_0x1c7ca3[_0x58c086]):'';break;case _0x31c189[_0x55a35d(0x19e)]:_0x469a45=_0x31c189[_0x55a35d(0x25d)](_0x1c7ca3[_0x58c086],'')?JSON[_0x55a35d(0x1fa)](_0x1c7ca3[_0x58c086]):[],_0x382cc2=_0x469a45[_0x55a35d(0x1f4)](_0x2d0f07=>String(_0x2d0f07));break;case _0x31c189[_0x55a35d(0x20b)]:_0x153f43=_0x31c189[_0x55a35d(0x25d)](_0x1c7ca3[_0x58c086],'')?JSON[_0x55a35d(0x1fa)](_0x1c7ca3[_0x58c086]):{},_0x382cc2=VisuMZ[_0x55a35d(0x197)+_0x55a35d(0x253)]({},_0x153f43);break;case _0x31c189[_0x55a35d(0x299)]:_0x469a45=_0x31c189[_0x55a35d(0x1fe)](_0x1c7ca3[_0x58c086],'')?JSON[_0x55a35d(0x1fa)](_0x1c7ca3[_0x58c086]):[],_0x382cc2=_0x469a45[_0x55a35d(0x1f4)](_0x53a9e8=>VisuMZ[_0x55a35d(0x197)+_0x55a35d(0x253)]({},JSON[_0x55a35d(0x1fa)](_0x53a9e8)));break;default:continue;}_0x5a0c55[_0x1a633a]=_0x382cc2;}}return _0x5a0c55;},(_0x3967f6=>{const _0x7c6700=_0x4c0e2a,_0x3108da={'JYWPo':function(_0x3e6736,_0xd128e3){return _0x3e6736(_0xd128e3);},'tdPwR':_0x7c6700(0x23e)+_0x7c6700(0x18a)+'ired\x20plugi'+_0x7c6700(0x1c0)+_0x7c6700(0x19c)+_0x7c6700(0x221)+_0x7c6700(0x255)+'ager.','TcFKh':function(_0x1c1cf8,_0x22eb9c){return _0x1c1cf8(_0x22eb9c);},'Rqgur':function(_0x4b2b8c,_0x5adb02){return _0x4b2b8c!==_0x5adb02;},'bTNll':_0x7c6700(0x210)+'on\x20does\x20no'+'t\x20match\x20pl'+_0x7c6700(0x192)+_0x7c6700(0x134)+_0x7c6700(0x24d)+_0x7c6700(0x1e4)+_0x7c6700(0x13b),'VghVQ':function(_0xb59ca,_0x303178){return _0xb59ca<_0x303178;},'hVJEe':function(_0xe8cde9,_0x1f32f0){return _0xe8cde9(_0x1f32f0);},'mqHnY':_0x7c6700(0x214)+_0x7c6700(0x140)+_0x7c6700(0x169)+_0x7c6700(0x1a6)+'ist.\x0aIt\x20is'+_0x7c6700(0x1ca)+_0x7c6700(0x1dc)+_0x7c6700(0x295)+_0x7c6700(0x1be)+'\x20%3\x20plugin'+'s.\x0aPlease\x20'+_0x7c6700(0x1c9)+_0x7c6700(0x1a6)+'ist\x20from\x20s'+'mallest\x20to'+_0x7c6700(0x294)+'ier\x20number'+'s.'},_0x4cdabb=_0x3967f6[_0x7c6700(0x270)];for(const _0x4bc860 of dependencies){if(!Imported[_0x4bc860]){_0x3108da[_0x7c6700(0x1ad)](alert,_0x3108da[_0x7c6700(0x246)][_0x7c6700(0x1bc)](_0x4cdabb,_0x4bc860)),SceneManager[_0x7c6700(0x245)]();break;}}const _0x237bae=_0x3967f6['descriptio'+'n'];if(_0x237bae[_0x7c6700(0x173)](/\[Version[ ](.*?)\]/i)){const _0x14da1b=_0x3108da[_0x7c6700(0x257)](Number,RegExp['$1']);_0x3108da[_0x7c6700(0x16e)](_0x14da1b,VisuMZ[label][_0x7c6700(0x1db)])&&(_0x3108da[_0x7c6700(0x257)](alert,_0x3108da[_0x7c6700(0x23f)][_0x7c6700(0x1bc)](_0x4cdabb,_0x14da1b)),SceneManager[_0x7c6700(0x245)]());}if(_0x237bae[_0x7c6700(0x173)](/\[Tier[ ](\d+)\]/i)){const _0x4f68db=_0x3108da[_0x7c6700(0x257)](Number,RegExp['$1']);_0x3108da[_0x7c6700(0x290)](_0x4f68db,tier)?(_0x3108da['hVJEe'](alert,_0x3108da[_0x7c6700(0x239)][_0x7c6700(0x1bc)](_0x4cdabb,_0x4f68db,tier)),SceneManager[_0x7c6700(0x245)]()):tier=Math[_0x7c6700(0x1bd)](_0x4f68db,tier);}VisuMZ[_0x7c6700(0x197)+'ams'](VisuMZ[label]['Settings'],_0x3967f6[_0x7c6700(0x236)]);})(pluginData),VisuMZ[_0x4c0e2a(0x1de)+'ips'][_0x4c0e2a(0x237)]={'HelpDescription':/<(?:HELP|HELP DESCRIPTION|DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|HELP DESCRIPTION|DESCRIPTION)>/i,'Exclude':/<EXCLUDE FROM (?:TOOLTIP|TOOLTIPS)>/i},VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)][_0x4c0e2a(0x23a)+'_onDatabas'+_0x4c0e2a(0x24b)]=Scene_Boot[_0x4c0e2a(0x158)][_0x4c0e2a(0x260)+_0x4c0e2a(0x1e9)],Scene_Boot[_0x4c0e2a(0x158)][_0x4c0e2a(0x260)+'Loaded']=function(){const _0x23ffe6=_0x4c0e2a;VisuMZ[_0x23ffe6(0x1de)+'ips'][_0x23ffe6(0x23a)+_0x23ffe6(0x174)+_0x23ffe6(0x24b)][_0x23ffe6(0x206)](this),this[_0x23ffe6(0x1a0)+'suMZ_State'+_0x23ffe6(0x1ba)]();},Scene_Boot[_0x4c0e2a(0x158)][_0x4c0e2a(0x1a0)+_0x4c0e2a(0x15c)+_0x4c0e2a(0x1ba)]=function(){const _0x5ee5da=_0x4c0e2a;this[_0x5ee5da(0x1a0)+_0x5ee5da(0x15c)+_0x5ee5da(0x1d0)+_0x5ee5da(0x16c)]();},Scene_Boot[_0x4c0e2a(0x158)]['process_Vi'+_0x4c0e2a(0x15c)+'Tooltips_N'+_0x4c0e2a(0x16c)]=function(){const _0xc6e31e=_0x4c0e2a;if(VisuMZ['ParseAllNo'+_0xc6e31e(0x211)])return;for(const _0x21e1e4 of $dataStates){if(!_0x21e1e4)continue;VisuMZ[_0xc6e31e(0x1de)+'ips'][_0xc6e31e(0x283)+_0xc6e31e(0x16d)+_0xc6e31e(0x133)](_0x21e1e4);}},VisuMZ['StateToolt'+_0x4c0e2a(0x1ec)][_0x4c0e2a(0x1f1)+_0x4c0e2a(0x171)]=VisuMZ['ParseState'+_0x4c0e2a(0x171)],VisuMZ[_0x4c0e2a(0x1f1)+_0x4c0e2a(0x171)]=function(_0x50facd){const _0x2daf86=_0x4c0e2a;VisuMZ[_0x2daf86(0x1de)+_0x2daf86(0x1ec)][_0x2daf86(0x1f1)+'Notetags'][_0x2daf86(0x206)](this,_0x50facd),VisuMZ[_0x2daf86(0x1de)+_0x2daf86(0x1ec)][_0x2daf86(0x283)+'tags_Descr'+_0x2daf86(0x133)](_0x50facd);},VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)][_0x4c0e2a(0x283)+_0x4c0e2a(0x16d)+_0x4c0e2a(0x133)]=function(_0x118f24){const _0x5ab0ee=_0x4c0e2a,_0xb85338={'GbDqe':function(_0x18f392,_0x24e3e1){return _0x18f392(_0x24e3e1);}};_0x118f24[_0x5ab0ee(0x23b)+'n']=VisuMZ[_0x5ab0ee(0x1de)+_0x5ab0ee(0x1ec)]['Settings'][_0x5ab0ee(0x199)][_0x5ab0ee(0x1e6)+_0x5ab0ee(0x183)];const _0x1546cc=VisuMZ[_0x5ab0ee(0x1de)+_0x5ab0ee(0x1ec)]['RegExp'],_0x2e8671=_0x118f24[_0x5ab0ee(0x265)];_0x2e8671[_0x5ab0ee(0x173)](_0x1546cc[_0x5ab0ee(0x1e6)+'ption'])&&(_0x118f24['descriptio'+'n']=_0xb85338[_0x5ab0ee(0x149)](String,RegExp['$1'])[_0x5ab0ee(0x1ae)]());},ColorManager[_0x4c0e2a(0x1d5)]=function(_0x4e7be8){const _0xa77400=_0x4c0e2a,_0x94789={'nentD':function(_0x395cf4,_0x2e74b7){return _0x395cf4(_0x2e74b7);},'wODkT':_0xa77400(0x193),'cUOSt':function(_0x4e3dd9,_0x1fb613){return _0x4e3dd9(_0x1fb613);}};return _0x4e7be8=_0x94789[_0xa77400(0x266)](String,_0x4e7be8),_0x4e7be8[_0xa77400(0x173)](/#(.*)/i)?_0x94789[_0xa77400(0x136)][_0xa77400(0x1bc)](_0x94789[_0xa77400(0x292)](String,RegExp['$1'])):this[_0xa77400(0x216)](_0x94789[_0xa77400(0x266)](Number,_0x4e7be8));},SceneManager[_0x4c0e2a(0x19d)+_0x4c0e2a(0x157)]=function(){const _0x4695b9=_0x4c0e2a,_0x41d3cb={'yYPRw':function(_0x5b90af,_0x347432){return _0x5b90af===_0x347432;}};return this['_scene']&&_0x41d3cb[_0x4695b9(0x1a9)](this[_0x4695b9(0x272)][_0x4695b9(0x28b)+'r'],Scene_Battle);},SceneManager[_0x4c0e2a(0x12f)+'ltipBattle'+'r']=function(){const _0x35b991=_0x4c0e2a,_0x29f126=SceneManager[_0x35b991(0x272)][_0x35b991(0x20e)+_0x35b991(0x178)];if(!_0x29f126)return null;return _0x29f126['_battler'];},SceneManager[_0x4c0e2a(0x143)+_0x4c0e2a(0x17f)+'er']=function(_0x46c0e1){const _0x41c823=_0x4c0e2a;if(_0x46c0e1&&!_0x46c0e1[_0x41c823(0x218)]())return;if(_0x46c0e1&&_0x46c0e1[_0x41c823(0x161)]())return;const _0xd7b255=SceneManager[_0x41c823(0x272)][_0x41c823(0x20e)+_0x41c823(0x178)];if(!_0xd7b255)return;_0xd7b255[_0x41c823(0x231)](_0x46c0e1);},SceneManager['refreshSta'+_0x4c0e2a(0x15a)+_0x4c0e2a(0x220)]=function(_0x28443e){const _0x1ca2bc=_0x4c0e2a,_0x26f2be={'jwFpX':function(_0x2b77df,_0x301b54){return _0x2b77df!==_0x301b54;}};if(_0x28443e&&!_0x28443e[_0x1ca2bc(0x218)]())return;const _0x4cdb64=SceneManager[_0x1ca2bc(0x272)]['_stateTool'+_0x1ca2bc(0x178)];if(!_0x4cdb64)return;if(_0x26f2be['jwFpX'](_0x4cdb64[_0x1ca2bc(0x18d)],_0x28443e))return;_0x4cdb64[_0x1ca2bc(0x1da)+_0x1ca2bc(0x18c)]();},VisuMZ['StateToolt'+_0x4c0e2a(0x1ec)]['Game_Battl'+'er_refresh']=Game_Battler[_0x4c0e2a(0x158)][_0x4c0e2a(0x12b)],Game_Battler[_0x4c0e2a(0x158)][_0x4c0e2a(0x12b)]=function(){const _0x10073d=_0x4c0e2a;VisuMZ[_0x10073d(0x1de)+'ips']['Game_Battl'+'er_refresh']['call'](this),SceneManager['refreshSta'+_0x10073d(0x15a)+_0x10073d(0x220)](this);},VisuMZ[_0x4c0e2a(0x1de)+'ips']['Scene_Base'+_0x4c0e2a(0x1ed)+_0x4c0e2a(0x15b)]=Scene_Base[_0x4c0e2a(0x158)][_0x4c0e2a(0x293)+_0x4c0e2a(0x20f)],Scene_Base[_0x4c0e2a(0x158)][_0x4c0e2a(0x293)+_0x4c0e2a(0x20f)]=function(){const _0x2485a6=_0x4c0e2a;VisuMZ['StateToolt'+_0x2485a6(0x1ec)][_0x2485a6(0x247)+_0x2485a6(0x1ed)+'dowLayer'][_0x2485a6(0x206)](this),this[_0x2485a6(0x1e7)+'eTooltipWi'+_0x2485a6(0x271)]();},Scene_Base[_0x4c0e2a(0x158)][_0x4c0e2a(0x1e7)+_0x4c0e2a(0x275)+_0x4c0e2a(0x271)]=function(){const _0x223b47=_0x4c0e2a;this[_0x223b47(0x20e)+'tipWindow']=new Window_StateTooltip(),this[_0x223b47(0x175)](this[_0x223b47(0x20e)+_0x223b47(0x178)]);},VisuMZ['StateToolt'+'ips'][_0x4c0e2a(0x13f)+_0x4c0e2a(0x1ee)+_0x4c0e2a(0x222)]=Scene_Battle[_0x4c0e2a(0x158)][_0x4c0e2a(0x12e)+'ll'],Scene_Battle[_0x4c0e2a(0x158)][_0x4c0e2a(0x12e)+'ll']=function(){const _0x35e1ce=_0x4c0e2a,_0x4cf613=VisuMZ[_0x35e1ce(0x1de)+_0x35e1ce(0x1ec)]['IsBattlerC'+'overedByWi'+'ndow']();VisuMZ[_0x35e1ce(0x1de)+_0x35e1ce(0x1ec)][_0x35e1ce(0x13f)+_0x35e1ce(0x1ee)+'Skill']['call'](this),!_0x4cf613&&VisuMZ[_0x35e1ce(0x1de)+_0x35e1ce(0x1ec)]['IsBattlerC'+_0x35e1ce(0x1e1)+'ndow']()&&SceneManager[_0x35e1ce(0x143)+_0x35e1ce(0x17f)+'er'](null);},VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)][_0x4c0e2a(0x13f)+_0x4c0e2a(0x1ee)+'Item']=Scene_Battle[_0x4c0e2a(0x158)][_0x4c0e2a(0x213)+'m'],Scene_Battle[_0x4c0e2a(0x158)][_0x4c0e2a(0x213)+'m']=function(){const _0x1bc420=_0x4c0e2a,_0xf16ac3=VisuMZ[_0x1bc420(0x1de)+_0x1bc420(0x1ec)][_0x1bc420(0x1f3)+_0x1bc420(0x1e1)+_0x1bc420(0x271)]();VisuMZ[_0x1bc420(0x1de)+_0x1bc420(0x1ec)][_0x1bc420(0x13f)+_0x1bc420(0x1ee)+_0x1bc420(0x142)]['call'](this),!_0xf16ac3&&VisuMZ['StateToolt'+_0x1bc420(0x1ec)][_0x1bc420(0x1f3)+_0x1bc420(0x1e1)+_0x1bc420(0x271)]()&&SceneManager[_0x1bc420(0x143)+_0x1bc420(0x17f)+'er'](null);},VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)]['Sprite_Cli'+'ckable_onM'+_0x4c0e2a(0x1a7)]=Sprite_Clickable[_0x4c0e2a(0x158)]['onMouseEnt'+'er'],Sprite_Clickable['prototype'][_0x4c0e2a(0x201)+'er']=function(){const _0x522c07=_0x4c0e2a;VisuMZ[_0x522c07(0x1de)+_0x522c07(0x1ec)][_0x522c07(0x152)+_0x522c07(0x1b8)+_0x522c07(0x1a7)][_0x522c07(0x206)](this),this['onMouseEnt'+_0x522c07(0x15e)+_0x522c07(0x20a)]();},VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)]['Sprite_Cli'+_0x4c0e2a(0x1b8)+'ouseExit']=Sprite_Clickable['prototype'][_0x4c0e2a(0x230)+'t'],Sprite_Clickable[_0x4c0e2a(0x158)][_0x4c0e2a(0x230)+'t']=function(){const _0x71cfb0=_0x4c0e2a;VisuMZ[_0x71cfb0(0x1de)+_0x71cfb0(0x1ec)][_0x71cfb0(0x152)+_0x71cfb0(0x1b8)+'ouseExit'][_0x71cfb0(0x206)](this),this[_0x71cfb0(0x230)+_0x71cfb0(0x219)+_0x71cfb0(0x12a)]();},Sprite_Clickable[_0x4c0e2a(0x158)]['onMouseEnt'+_0x4c0e2a(0x15e)+_0x4c0e2a(0x20a)]=function(){const _0x2b82f5=_0x4c0e2a;this[_0x2b82f5(0x143)+_0x2b82f5(0x17f)+'er']();},Sprite_Clickable['prototype']['onMouseExi'+_0x4c0e2a(0x219)+_0x4c0e2a(0x12a)]=function(){const _0x396fe7=_0x4c0e2a,_0x3707c2={'CNaln':function(_0x440392,_0x5c685a){return _0x440392===_0x5c685a;}},_0x5c024e=this['getStateTo'+_0x396fe7(0x17f)+'er']();_0x5c024e&&_0x3707c2[_0x396fe7(0x1af)](SceneManager[_0x396fe7(0x12f)+'ltipBattle'+'r'](),_0x5c024e)&&SceneManager['setStateTo'+_0x396fe7(0x17f)+'er'](null);},Sprite_Clickable['prototype'][_0x4c0e2a(0x143)+_0x4c0e2a(0x17f)+'er']=function(){const _0x3862c1=_0x4c0e2a,_0x179f65=this[_0x3862c1(0x1e0)+_0x3862c1(0x17f)+'er']();_0x179f65&&SceneManager['setStateTo'+_0x3862c1(0x17f)+'er'](_0x179f65);},Sprite_Clickable[_0x4c0e2a(0x158)][_0x4c0e2a(0x1e0)+_0x4c0e2a(0x17f)+'er']=function(){return null;},VisuMZ['StateToolt'+_0x4c0e2a(0x1ec)][_0x4c0e2a(0x26c)+_0x4c0e2a(0x18b)+_0x4c0e2a(0x22f)]=Sprite_Battler[_0x4c0e2a(0x158)][_0x4c0e2a(0x201)+'er'],Sprite_Battler[_0x4c0e2a(0x158)][_0x4c0e2a(0x201)+'er']=function(){const _0x38b4c5=_0x4c0e2a;VisuMZ[_0x38b4c5(0x1de)+_0x38b4c5(0x1ec)][_0x38b4c5(0x26c)+_0x38b4c5(0x18b)+_0x38b4c5(0x22f)]['call'](this);if(this[_0x38b4c5(0x196)+_0x38b4c5(0x1e1)+'ndow']())return;this[_0x38b4c5(0x143)+_0x38b4c5(0x17f)+'er']();},Sprite_Battler['prototype']['isBattlerC'+_0x4c0e2a(0x1e1)+_0x4c0e2a(0x271)]=function(){const _0x43d1e1=_0x4c0e2a,_0x137ac6=SceneManager[_0x43d1e1(0x272)];if(_0x137ac6&&_0x137ac6[_0x43d1e1(0x224)+'tatusMode'])return!![];const _0x4645d6=this[_0x43d1e1(0x18d)][_0x43d1e1(0x1f5)]();if(_0x4645d6){if(VisuMZ['StateToolt'+_0x43d1e1(0x1ec)][_0x43d1e1(0x1f3)+'overedByWi'+_0x43d1e1(0x271)]())return!![];}return![];},VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)][_0x4c0e2a(0x1f3)+'overedByWi'+_0x4c0e2a(0x271)]=function(){const _0x2e5757=_0x4c0e2a,_0x4e2660=SceneManager[_0x2e5757(0x272)];if(Imported['VisuMZ_3_F'+_0x2e5757(0x1d9)+'ttleUI']&&BattleManager[_0x2e5757(0x254)+_0x2e5757(0x1a3)+_0x2e5757(0x1b1)]()){if(_0x4e2660['_itemWindo'+'w'][_0x2e5757(0x249)]()&&_0x4e2660[_0x2e5757(0x13d)+'w']['visible'])return!![];if(_0x4e2660[_0x2e5757(0x162)+'ow'][_0x2e5757(0x249)]()&&_0x4e2660[_0x2e5757(0x162)+'ow'][_0x2e5757(0x232)])return!![];}return![];},Sprite_Battler[_0x4c0e2a(0x158)][_0x4c0e2a(0x1e0)+_0x4c0e2a(0x17f)+'er']=function(){const _0x109433=_0x4c0e2a;return this[_0x109433(0x18d)];},Window_Base[_0x4c0e2a(0x158)][_0x4c0e2a(0x235)+_0x4c0e2a(0x13a)]=function(){const _0x5cdfae=_0x4c0e2a,_0x259f5a=new Point(TouchInput['x'],TouchInput['y']),_0x124db4=this[_0x5cdfae(0x1a1)+_0x5cdfae(0x1b4)][_0x5cdfae(0x17c)+'se'](_0x259f5a);return this[_0x5cdfae(0x20c)+_0x5cdfae(0x12d)]()[_0x5cdfae(0x17b)](_0x124db4['x'],_0x124db4['y']);},Window_Base[_0x4c0e2a(0x158)][_0x4c0e2a(0x20c)+_0x4c0e2a(0x12d)]=function(){const _0x5e4ca8=_0x4c0e2a;return new Rectangle(-0xc25*-0x2+-0x4*-0x343+-0x2556,-0xeda+0x65d+0x29*0x35,this[_0x5e4ca8(0x12c)],this['height']);},VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)]['Window_Sel'+_0x4c0e2a(0x238)+_0x4c0e2a(0x286)]=Window_Selectable[_0x4c0e2a(0x158)]['processTou'+'ch'],Window_Selectable[_0x4c0e2a(0x158)][_0x4c0e2a(0x287)+'ch']=function(){const _0x2383c5=_0x4c0e2a;VisuMZ[_0x2383c5(0x1de)+'ips']['Window_Sel'+'ectable_pr'+_0x2383c5(0x286)][_0x2383c5(0x206)](this);if(this[_0x2383c5(0x28b)+'r'][_0x2383c5(0x270)][_0x2383c5(0x173)](/Debug/i))return;this[_0x2383c5(0x287)+'chStateToo'+'ltips']();},Window_Selectable[_0x4c0e2a(0x158)][_0x4c0e2a(0x287)+_0x4c0e2a(0x198)+_0x4c0e2a(0x20a)]=function(){const _0x4b0f87=_0x4c0e2a,_0x4d2506={'GisYB':function(_0x2e11a0,_0x4c8db0){return _0x2e11a0!==_0x4c8db0;},'Ugcbe':function(_0x5a1be3,_0x353150){return _0x5a1be3!==_0x353150;},'HpSZz':_0x4b0f87(0x1f9)};if(!this[_0x4b0f87(0x28f)+_0x4b0f87(0x291)+'d']())return;this['_cache_Sta'+_0x4b0f87(0x15d)]=this[_0x4b0f87(0x150)+_0x4b0f87(0x15d)]||{};if(!this[_0x4b0f87(0x249)]()){this[_0x4b0f87(0x150)+_0x4b0f87(0x15d)][_0x4b0f87(0x1b3)]&&this[_0x4b0f87(0x263)+_0x4b0f87(0x1de)+_0x4b0f87(0x1ec)]();return;}else this[_0x4b0f87(0x150)+'teTooltips'][_0x4b0f87(0x1b3)]=!![];if(!this[_0x4b0f87(0x232)]){this[_0x4b0f87(0x150)+_0x4b0f87(0x15d)][_0x4b0f87(0x232)]&&this[_0x4b0f87(0x263)+'StateToolt'+_0x4b0f87(0x1ec)]();return;}else this[_0x4b0f87(0x150)+'teTooltips'][_0x4b0f87(0x232)]=!![];if(_0x4d2506[_0x4b0f87(0x27f)](this[_0x4b0f87(0x150)+_0x4b0f87(0x15d)]['x'],this['x'])||_0x4d2506['GisYB'](this['_cache_Sta'+'teTooltips']['y'],this['y'])||_0x4d2506[_0x4b0f87(0x1c4)](this[_0x4b0f87(0x150)+_0x4b0f87(0x15d)][_0x4b0f87(0x1ac)],TouchInput['x'])||_0x4d2506[_0x4b0f87(0x27f)](this[_0x4b0f87(0x150)+_0x4b0f87(0x15d)][_0x4b0f87(0x1ac)],TouchInput['y'])){const _0x2a570c=_0x4d2506['HpSZz'][_0x4b0f87(0x13e)]('|');let _0x36aee7=0x15c1+0x2693+-0x3c54;while(!![]){switch(_0x2a570c[_0x36aee7++]){case'0':this[_0x4b0f87(0x150)+_0x4b0f87(0x15d)]['y']=this['y'];continue;case'1':this[_0x4b0f87(0x28f)+'ltipTouche'+'d']()?(this[_0x4b0f87(0x150)+_0x4b0f87(0x15d)][_0x4b0f87(0x1bb)]=!![],this['openTouchS'+_0x4b0f87(0x18e)+'ps']()):this[_0x4b0f87(0x150)+_0x4b0f87(0x15d)][_0x4b0f87(0x1bb)]&&this[_0x4b0f87(0x263)+_0x4b0f87(0x1de)+_0x4b0f87(0x1ec)]();continue;case'2':this['_cache_Sta'+_0x4b0f87(0x15d)][_0x4b0f87(0x1ac)]=TouchInput['x'];continue;case'3':this[_0x4b0f87(0x150)+_0x4b0f87(0x15d)][_0x4b0f87(0x17a)]=TouchInput['y'];continue;case'4':this[_0x4b0f87(0x150)+_0x4b0f87(0x15d)]['x']=this['x'];continue;}break;}}},Window_Selectable[_0x4c0e2a(0x158)]['isStateToo'+_0x4c0e2a(0x291)+'d']=function(){const _0x443531=_0x4c0e2a;return VisuMZ[_0x443531(0x1de)+_0x443531(0x1ec)]['Settings'][_0x443531(0x1d8)][this[_0x443531(0x28b)+'r'][_0x443531(0x270)]];},Window_Selectable[_0x4c0e2a(0x158)][_0x4c0e2a(0x28f)+'ltipTouche'+'d']=function(){const _0x2d24e9=_0x4c0e2a,_0x2ffc41={'ZauoM':function(_0x54b37c,_0x5c2220){return _0x54b37c>=_0x5c2220;}};return _0x2ffc41['ZauoM'](this[_0x2d24e9(0x250)](),0x761+-0x19ec*0x1+0x1*0x128b);},Window_Selectable['prototype'][_0x4c0e2a(0x28f)+_0x4c0e2a(0x1c8)+'d']=function(){const _0x697c89=_0x4c0e2a,_0x473bc5=new Point(TouchInput['x'],TouchInput['y']),_0x33bbab=this[_0x697c89(0x1a1)+_0x697c89(0x1b4)][_0x697c89(0x17c)+'se'](_0x473bc5),_0x70c3ca=new Rectangle(0xc*0x30a+-0x10b5+0x1*-0x13c3,0x15f6+-0x1*0x1339+-0x2bd,this[_0x697c89(0x12c)],this[_0x697c89(0x155)]);return _0x70c3ca['contains'](_0x33bbab['x'],_0x33bbab['y']);},Window_Selectable[_0x4c0e2a(0x158)][_0x4c0e2a(0x1e3)+_0x4c0e2a(0x18e)+'ps']=function(){const _0x3ae8bc=_0x4c0e2a,_0x36fca9=this[_0x3ae8bc(0x1e0)+'oltipBattl'+'er']();_0x36fca9?(this['_cache_Sta'+_0x3ae8bc(0x15d)]['battler']=_0x36fca9,SceneManager[_0x3ae8bc(0x143)+_0x3ae8bc(0x17f)+'er'](_0x36fca9)):this['closeTouch'+_0x3ae8bc(0x1de)+_0x3ae8bc(0x1ec)]();},Window_Selectable['prototype'][_0x4c0e2a(0x1e0)+_0x4c0e2a(0x17f)+'er']=function(){return null;},Window_Selectable[_0x4c0e2a(0x158)][_0x4c0e2a(0x263)+_0x4c0e2a(0x1de)+'ips']=function(){const _0x1110ad=_0x4c0e2a;this['_cache_Sta'+'teTooltips'][_0x1110ad(0x1b3)]=![],this[_0x1110ad(0x150)+_0x1110ad(0x15d)]['visible']=![],this['_cache_Sta'+'teTooltips'][_0x1110ad(0x1bb)]=![],this[_0x1110ad(0x150)+_0x1110ad(0x15d)]['battler']&&(SceneManager['setStateTo'+'oltipBattl'+'er'](null),this['_cache_Sta'+_0x1110ad(0x15d)]['battler']=null);},Window_MenuStatus[_0x4c0e2a(0x158)][_0x4c0e2a(0x1e0)+_0x4c0e2a(0x17f)+'er']=function(){const _0x1f8b00=_0x4c0e2a,_0x43901f=this[_0x1f8b00(0x250)](),_0x40be22=this[_0x1f8b00(0x209)](_0x43901f);return _0x40be22;},Window_SkillStatus['prototype'][_0x4c0e2a(0x28f)+_0x4c0e2a(0x22b)+'d']=function(){const _0x3fdfd9=_0x4c0e2a;return this[_0x3fdfd9(0x28f)+_0x3fdfd9(0x1c8)+'d']();},Window_SkillStatus[_0x4c0e2a(0x158)][_0x4c0e2a(0x1e0)+_0x4c0e2a(0x17f)+'er']=function(){const _0x212472=_0x4c0e2a;return this[_0x212472(0x244)];},Window_EquipStatus[_0x4c0e2a(0x158)][_0x4c0e2a(0x28f)+'ltipTouche'+'d']=function(){const _0x233f48=_0x4c0e2a;return this[_0x233f48(0x28f)+_0x233f48(0x1c8)+'d']();},Window_EquipStatus[_0x4c0e2a(0x158)][_0x4c0e2a(0x1e0)+_0x4c0e2a(0x17f)+'er']=function(){const _0x37342c=_0x4c0e2a;return this[_0x37342c(0x244)];},Window_Status[_0x4c0e2a(0x158)][_0x4c0e2a(0x28f)+_0x4c0e2a(0x22b)+'d']=function(){const _0x397791=_0x4c0e2a;return this['isStateToo'+_0x397791(0x1c8)+'d']();},Window_Status[_0x4c0e2a(0x158)]['getStateTo'+'oltipBattl'+'er']=function(){const _0x1a7724=_0x4c0e2a;return this[_0x1a7724(0x244)];},Window_BattleStatus[_0x4c0e2a(0x158)][_0x4c0e2a(0x1e0)+_0x4c0e2a(0x17f)+'er']=function(){const _0x16df95=_0x4c0e2a,_0xa8af5b=this[_0x16df95(0x250)](),_0x27f288=this[_0x16df95(0x209)](_0xa8af5b);return _0x27f288;},Window_BattleStatus[_0x4c0e2a(0x158)][_0x4c0e2a(0x28f)+'ltipEnable'+'d']=function(){const _0x2fc669=_0x4c0e2a,_0x388cc7={'SufnN':function(_0x5c644f,_0x5ceda2){return _0x5c644f<_0x5ceda2;},'YWQYE':'VisuMZ_3_F'+_0x2fc669(0x1d9)+_0x2fc669(0x20d)+_0x2fc669(0x26a)+_0x2fc669(0x19b),'aAFqt':_0x2fc669(0x14c)+_0x2fc669(0x170)+_0x2fc669(0x182)+_0x2fc669(0x264)+'ork.','KWyWT':function(_0x526676,_0x1e393f){return _0x526676(_0x1e393f);}};if(Imported[_0x2fc669(0x15f)+_0x2fc669(0x1d9)+_0x2fc669(0x1d2)]&&BattleManager[_0x2fc669(0x254)+'ntviewUiLa'+_0x2fc669(0x1b1)]()){if(_0x388cc7[_0x2fc669(0x141)](VisuMZ['FrontviewB'+'attleUI'][_0x2fc669(0x1db)],0x1*0x6a1+0x2043+-0x26e3+0.09000000000000008)){let _0x59946e='';_0x59946e+=_0x388cc7[_0x2fc669(0x289)],_0x59946e+=_0x388cc7['aAFqt'],_0x388cc7[_0x2fc669(0x24e)](alert,_0x59946e),SceneManager[_0x2fc669(0x245)]();}return![];}return Window_StatusBase['prototype'][_0x2fc669(0x28f)+_0x2fc669(0x291)+'d'][_0x2fc669(0x206)](this);};Imported[_0x4c0e2a(0x277)+_0x4c0e2a(0x1f2)+_0x4c0e2a(0x131)]&&(Window_ClassStatus['prototype'][_0x4c0e2a(0x28f)+_0x4c0e2a(0x22b)+'d']=function(){const _0x3409ff=_0x4c0e2a;return this[_0x3409ff(0x28f)+_0x3409ff(0x1c8)+'d']();},Window_ClassStatus[_0x4c0e2a(0x158)][_0x4c0e2a(0x1e0)+'oltipBattl'+'er']=function(){const _0x2bda9c=_0x4c0e2a;return this[_0x2bda9c(0x244)];});;Imported[_0x4c0e2a(0x1e2)+'artySystem']&&(Window_PartyStatus[_0x4c0e2a(0x158)][_0x4c0e2a(0x28f)+_0x4c0e2a(0x22b)+'d']=function(){const _0x3be8a0=_0x4c0e2a;return this[_0x3be8a0(0x28f)+_0x3be8a0(0x1c8)+'d']();},Window_PartyStatus[_0x4c0e2a(0x158)][_0x4c0e2a(0x1e0)+_0x4c0e2a(0x17f)+'er']=function(){return this['_actor'];});;function Window_StateTooltip(){const _0x444534=_0x4c0e2a;this[_0x444534(0x22d)](...arguments);}Window_StateTooltip[_0x4c0e2a(0x158)]=Object[_0x4c0e2a(0x14a)](Window_Base[_0x4c0e2a(0x158)]),Window_StateTooltip[_0x4c0e2a(0x158)][_0x4c0e2a(0x28b)+'r']=Window_StateTooltip,Window_StateTooltip[_0x4c0e2a(0x16f)+'LE']=VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)][_0x4c0e2a(0x240)][_0x4c0e2a(0x129)][_0x4c0e2a(0x1f0)],Window_StateTooltip[_0x4c0e2a(0x19a)+_0x4c0e2a(0x185)]=VisuMZ[_0x4c0e2a(0x1de)+'ips']['Settings'][_0x4c0e2a(0x129)][_0x4c0e2a(0x243)],Window_StateTooltip[_0x4c0e2a(0x19a)+'N_OPACITY']=VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)][_0x4c0e2a(0x240)][_0x4c0e2a(0x129)][_0x4c0e2a(0x13c)+_0x4c0e2a(0x1d3)],Window_StateTooltip[_0x4c0e2a(0x21a)]=VisuMZ['StateToolt'+_0x4c0e2a(0x1ec)]['Settings'][_0x4c0e2a(0x199)]['StateFmt'],Window_StateTooltip[_0x4c0e2a(0x1f7)]=VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)][_0x4c0e2a(0x240)]['Vocab'][_0x4c0e2a(0x251)],Window_StateTooltip[_0x4c0e2a(0x261)]=VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)]['Settings']['Vocab'][_0x4c0e2a(0x188)],Window_StateTooltip[_0x4c0e2a(0x1aa)+'T']=VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)][_0x4c0e2a(0x240)][_0x4c0e2a(0x199)][_0x4c0e2a(0x138)],Window_StateTooltip[_0x4c0e2a(0x279)]=VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)][_0x4c0e2a(0x240)][_0x4c0e2a(0x199)][_0x4c0e2a(0x18f)],Window_StateTooltip[_0x4c0e2a(0x1b6)+'XT']=VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)]['Settings'][_0x4c0e2a(0x199)][_0x4c0e2a(0x204)+'t'],Window_StateTooltip[_0x4c0e2a(0x25b)+'ITE']=VisuMZ['StateToolt'+_0x4c0e2a(0x1ec)][_0x4c0e2a(0x240)]['Vocab'][_0x4c0e2a(0x267)+'te'],Window_StateTooltip[_0x4c0e2a(0x285)+_0x4c0e2a(0x276)]=VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)][_0x4c0e2a(0x240)]['Vocab'][_0x4c0e2a(0x1bf)+_0x4c0e2a(0x25a)],Window_StateTooltip['MOUSE_OFFS'+_0x4c0e2a(0x234)]=VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)][_0x4c0e2a(0x240)][_0x4c0e2a(0x129)][_0x4c0e2a(0x25e)],Window_StateTooltip[_0x4c0e2a(0x203)+_0x4c0e2a(0x190)]=VisuMZ[_0x4c0e2a(0x1de)+_0x4c0e2a(0x1ec)]['Settings']['Tooltip'][_0x4c0e2a(0x1c1)],Window_StateTooltip[_0x4c0e2a(0x158)][_0x4c0e2a(0x22d)]=function(){const _0x100d23=_0x4c0e2a,_0x79ac9a=new Rectangle(-0x15d5+0x153f+0x1*0x96,-0x9f6+-0xba*-0x2e+-0x1776,Graphics[_0x100d23(0x12c)],Graphics[_0x100d23(0x155)]);Window_Base['prototype'][_0x100d23(0x22d)][_0x100d23(0x206)](this,_0x79ac9a),this['scale']['x']=this[_0x100d23(0x27b)]['y']=Window_StateTooltip[_0x100d23(0x16f)+'LE'],this[_0x100d23(0x176)](),this[_0x100d23(0x18d)]=null;},Window_StateTooltip[_0x4c0e2a(0x158)]['loadWindow'+'skin']=function(){const _0x49bf54=_0x4c0e2a;this[_0x49bf54(0x186)]=ImageManager[_0x49bf54(0x22e)](Window_StateTooltip[_0x49bf54(0x19a)+_0x49bf54(0x185)]);},Window_StateTooltip['prototype'][_0x4c0e2a(0x191)+_0x4c0e2a(0x146)]=function(){const _0x33bef5=_0x4c0e2a;this[_0x33bef5(0x288)+'y']=Window_StateTooltip['WINDOW_SKI'+_0x33bef5(0x1e8)];},Window_StateTooltip[_0x4c0e2a(0x158)][_0x4c0e2a(0x231)]=function(_0xdfdb9e){const _0x493c9e=_0x4c0e2a,_0x2f7c9c={'mxDEo':function(_0x2216cf,_0x29e4dd){return _0x2216cf===_0x29e4dd;}};if(_0x2f7c9c[_0x493c9e(0x151)](this['_battler'],_0xdfdb9e))return;this[_0x493c9e(0x18d)]=_0xdfdb9e,this[_0x493c9e(0x18d)]?this['refresh']():this[_0x493c9e(0x176)]();},Window_StateTooltip[_0x4c0e2a(0x158)][_0x4c0e2a(0x12b)]=function(){const _0xe8c1a5=_0x4c0e2a,_0xc4fa59={'OWpPf':function(_0x2bd54c,_0x347642){return _0x2bd54c>_0x347642;}};this[_0xe8c1a5(0x217)][_0xe8c1a5(0x23d)](),this['setupText']();if(_0xc4fa59['OWpPf'](this['_text'][_0xe8c1a5(0x1f8)],-0x24db+0x4a9*-0x3+0x879*0x6)){this[_0xe8c1a5(0x1c6)+'ow']();const _0x4179a0=this['baseTextRe'+'ct']();this['drawTextEx'](this[_0xe8c1a5(0x273)],_0x4179a0['x'],_0x4179a0['y'],_0x4179a0[_0xe8c1a5(0x12c)]),this[_0xe8c1a5(0x1c2)]();}else this[_0xe8c1a5(0x176)]();},Window_StateTooltip[_0x4c0e2a(0x158)]['convertMes'+'sageKeywor'+'ds']=function(_0x3d2f73){return _0x3d2f73;},Window_StateTooltip[_0x4c0e2a(0x158)][_0x4c0e2a(0x1fc)+_0x4c0e2a(0x16b)+_0x4c0e2a(0x24c)]=function(){return![];},Window_StateTooltip['prototype'][_0x4c0e2a(0x1ea)]=function(){const _0x486ca8=_0x4c0e2a,_0x40c712={'Icvxy':'3|4|0|5|1|'+'2'},_0x12b0ef=_0x40c712[_0x486ca8(0x24f)]['split']('|');let _0x2fd515=0xabd+-0x605*0x2+0x14d;while(!![]){switch(_0x12b0ef[_0x2fd515++]){case'0':this[_0x486ca8(0x226)+'Text']();continue;case'1':this[_0x486ca8(0x28d)+_0x486ca8(0x1dd)]();continue;case'2':this['_text']=this[_0x486ca8(0x273)][_0x486ca8(0x1ae)]();continue;case'3':this[_0x486ca8(0x273)]='';continue;case'4':if(!this[_0x486ca8(0x18d)])return;continue;case'5':this['setupBuffT'+_0x486ca8(0x1c7)]();continue;}break;}},Window_StateTooltip[_0x4c0e2a(0x158)]['setupState'+'Text']=function(){const _0x4a08d6=_0x4c0e2a,_0x50359f={'iPBbl':function(_0x412281,_0x437492){return _0x412281<=_0x437492;},'mzjEb':_0x4a08d6(0x21d),'QcjcC':function(_0x32b550,_0x324243){return _0x32b550+_0x324243;}},_0x5ebd22=Window_StateTooltip['STATE_FMT'],_0x31bf08=this[_0x4a08d6(0x18d)][_0x4a08d6(0x25c)]();for(const _0x3736a0 of _0x31bf08){if(!_0x3736a0)continue;if(!_0x3736a0[_0x4a08d6(0x270)]['trim']())continue;if(_0x3736a0[_0x4a08d6(0x270)][_0x4a08d6(0x173)](/-----/i))continue;if(_0x50359f[_0x4a08d6(0x1cb)](_0x3736a0[_0x4a08d6(0x1a5)],0xaf*-0x16+-0xe91+0x1d9b))continue;const _0x1bd79f=VisuMZ[_0x4a08d6(0x1de)+_0x4a08d6(0x1ec)][_0x4a08d6(0x237)];if(_0x3736a0[_0x4a08d6(0x265)]['match'](_0x1bd79f[_0x4a08d6(0x207)]))continue;const _0x2e7f5f=_0x50359f[_0x4a08d6(0x168)][_0x4a08d6(0x1bc)](_0x3736a0[_0x4a08d6(0x1a5)]),_0x1ea4bb=_0x3736a0[_0x4a08d6(0x270)]['trim'](),_0x359bf2=_0x3736a0[_0x4a08d6(0x23b)+'n'][_0x4a08d6(0x1bc)](this[_0x4a08d6(0x18d)][_0x4a08d6(0x202)+_0x4a08d6(0x1cd)](_0x3736a0['id'])),_0x3f9496=this[_0x4a08d6(0x226)+'TurnText'](_0x3736a0),_0x5a2bb5=ColorManager[_0x4a08d6(0x1a8)](_0x3736a0),_0x16094e=_0x5ebd22[_0x4a08d6(0x1bc)](_0x2e7f5f,_0x1ea4bb,_0x359bf2,_0x3f9496,_0x5a2bb5)[_0x4a08d6(0x1ae)]();_0x16094e&&(this['_text']+=_0x50359f[_0x4a08d6(0x205)](_0x16094e,'\x0a'));}},Window_StateTooltip[_0x4c0e2a(0x158)][_0x4c0e2a(0x226)+_0x4c0e2a(0x1eb)]=function(_0x4f7bcb){const _0xb36b28=_0x4c0e2a,_0x10013a={'LPHIo':function(_0x39c3ea,_0xa2567a){return _0x39c3ea===_0xa2567a;}};if(_0x10013a[_0xb36b28(0x252)](_0x4f7bcb['autoRemova'+_0xb36b28(0x1b7)],-0x2670+-0xf*-0x28f+0xf))return'';if(this['_battler'][_0xb36b28(0x223)+'tes']()['includes'](_0x4f7bcb))return Window_StateTooltip[_0xb36b28(0x1b6)+'XT'];let _0x48dcd5=_0x10013a['LPHIo'](_0x4f7bcb[_0xb36b28(0x164)+'lTiming'],0x9*0xf1+-0x3ab+0x1*-0x4cd)?Window_StateTooltip['ACTIONS_FM'+'T']:Window_StateTooltip['TURNS_FMT'];const _0x22500c=this[_0xb36b28(0x18d)][_0xb36b28(0x154)](_0x4f7bcb['id'])||-0x38f+0x152+-0x23d*-0x1,_0x109843=ColorManager[_0xb36b28(0x1a8)](_0x4f7bcb);return _0x48dcd5[_0xb36b28(0x1bc)](_0x22500c,_0x109843)[_0xb36b28(0x1ae)]();},Window_StateTooltip[_0x4c0e2a(0x158)]['setupBuffT'+_0x4c0e2a(0x1c7)]=function(){const _0x3c8979=_0x4c0e2a,_0x5d9e34={'weYUG':function(_0x53e47d,_0x259da9){return _0x53e47d<_0x259da9;},'pmQkf':_0x3c8979(0x21d),'eUkXo':function(_0x433334,_0x472808){return _0x433334*_0x472808;},'noFyh':function(_0x2513b3,_0x3a8069){return _0x2513b3+_0x3a8069;}},_0x150d9c=Window_StateTooltip[_0x3c8979(0x1f7)],_0x43f031=Window_StateTooltip[_0x3c8979(0x261)];for(let _0x27a1be=0x1db9+-0x727*-0x1+0x24e*-0x10;_0x5d9e34[_0x3c8979(0x1a2)](_0x27a1be,-0x13e+-0x132a+0x1470);_0x27a1be++){if(!this['_battler'][_0x3c8979(0x1c3)+_0x3c8979(0x298)+'ed'](_0x27a1be))continue;const _0x178b49=this[_0x3c8979(0x18d)][_0x3c8979(0x1ab)+_0x3c8979(0x26d)](_0x27a1be),_0x3bfd73=_0x178b49?_0x150d9c:_0x43f031,_0x242655=this[_0x3c8979(0x18d)][_0x3c8979(0x132)+_0x3c8979(0x194)](this[_0x3c8979(0x18d)][_0x3c8979(0x278)][_0x27a1be],_0x27a1be),_0x2ad8f8=_0x5d9e34[_0x3c8979(0x242)]['format'](_0x242655),_0x45e38e=TextManager[_0x3c8979(0x269)](_0x27a1be),_0x463b52=Math[_0x3c8979(0x25f)](_0x5d9e34[_0x3c8979(0x22c)](this[_0x3c8979(0x18d)][_0x3c8979(0x27e)+_0x3c8979(0x281)](_0x27a1be),-0x10*-0x23c+0xbc3*0x1+0x3*-0xfb5)),_0x2772f5=this[_0x3c8979(0x1b5)+'urnText'](_0x27a1be),_0x2dca64=_0x178b49?ColorManager[_0x3c8979(0x280)]():ColorManager['debuffColo'+'r'](),_0x514fd=_0x3bfd73['format'](_0x2ad8f8,_0x45e38e,_0x463b52,_0x2772f5,_0x2dca64)['trim']();_0x514fd&&(this[_0x3c8979(0x273)]+=_0x5d9e34[_0x3c8979(0x180)](_0x514fd,'\x0a'));}},Window_StateTooltip['prototype']['setupBuffT'+_0x4c0e2a(0x248)]=function(_0x66d244){const _0x1ff488=_0x4c0e2a,_0x1dc853=Window_StateTooltip['TURNS_FMT'],_0x3f0dd7=this[_0x1ff488(0x18d)][_0x1ff488(0x1b0)](_0x66d244),_0x4c2ea4=this[_0x1ff488(0x18d)]['isBuffAffe'+_0x1ff488(0x26d)](_0x66d244),_0x2d419e=_0x4c2ea4?ColorManager[_0x1ff488(0x280)]():ColorManager[_0x1ff488(0x1b2)+'r']();return _0x1dc853[_0x1ff488(0x1bc)](_0x3f0dd7,_0x2d419e)[_0x1ff488(0x1ae)]();},Window_StateTooltip[_0x4c0e2a(0x158)][_0x4c0e2a(0x28d)+_0x4c0e2a(0x1dd)]=function(){const _0x3e1c9a=_0x4c0e2a,_0x2d5e45={'LzHbg':function(_0x41719e,_0x46ac01){return _0x41719e===_0x46ac01;},'qfrZB':_0x3e1c9a(0x14f),'vJVDv':_0x3e1c9a(0x14d)+_0x3e1c9a(0x225)},_0x15dd1c=/\\C\[#(.*?)\]/g;this[_0x3e1c9a(0x273)]=this[_0x3e1c9a(0x273)][_0x3e1c9a(0x23c)](_0x15dd1c,(_0x578bcc,_0x41b353)=>{const _0xbee4a5=_0x3e1c9a;if(_0x2d5e45[_0xbee4a5(0x1c5)](_0x41b353,_0x2d5e45['qfrZB'])){const _0x27b7eb=ColorManager[_0xbee4a5(0x1d5)](Window_StateTooltip[_0xbee4a5(0x285)+_0xbee4a5(0x276)]);_0x41b353=_0x27b7eb['replace'](/#/g,'');}return _0x2d5e45[_0xbee4a5(0x21c)]['format'](_0x41b353);});},Window_StateTooltip[_0x4c0e2a(0x158)]['processEsc'+_0x4c0e2a(0x184)+'er']=function(_0x52d425,_0x3742cc){const _0x44cf91=_0x4c0e2a,_0x1002dc={'AcipO':'HEXCOLOR'};switch(_0x52d425){case _0x1002dc[_0x44cf91(0x259)]:const _0xd5cec2=this['obtainEsca'+_0x44cf91(0x147)](_0x3742cc);!this['isColorLoc'+_0x44cf91(0x177)]()&&_0x3742cc[_0x44cf91(0x179)]&&this[_0x44cf91(0x1d4)+_0x44cf91(0x26e)](_0xd5cec2);break;default:Window_Base[_0x44cf91(0x158)][_0x44cf91(0x212)+_0x44cf91(0x184)+'er'][_0x44cf91(0x206)](this,_0x52d425,_0x3742cc);}},Window_StateTooltip['prototype'][_0x4c0e2a(0x1c6)+'ow']=function(){const _0x582ed4=_0x4c0e2a,_0x55cefc={'aHHOt':function(_0x547261,_0x489e65){return _0x547261+_0x489e65;},'WKzKo':function(_0x19c89a,_0x377a37){return _0x19c89a*_0x377a37;}},_0x6c1db1=this[_0x582ed4(0x282)](this['_text']);this['width']=_0x55cefc[_0x582ed4(0x144)](_0x6c1db1[_0x582ed4(0x12c)],_0x55cefc[_0x582ed4(0x258)](_0x55cefc[_0x582ed4(0x144)](this[_0x582ed4(0x274)+'g'](),this[_0x582ed4(0x28c)]),-0x1*0x644+0x12ef*-0x1+-0xef*-0x1b)),this['height']=_0x55cefc[_0x582ed4(0x144)](_0x6c1db1[_0x582ed4(0x155)],_0x55cefc[_0x582ed4(0x258)](this[_0x582ed4(0x28c)],0x1*-0x239+0x15e5*0x1+-0x347*0x6)),this[_0x582ed4(0x130)+_0x582ed4(0x297)](),this['resetFontS'+_0x582ed4(0x27c)]();},Window_StateTooltip[_0x4c0e2a(0x158)]['update']=function(){const _0x22d3df=_0x4c0e2a,_0x3b96df={'xWSZs':'1|3|2|0|4'},_0x4c9895=_0x3b96df[_0x22d3df(0x21b)][_0x22d3df(0x13e)]('|');let _0x463365=0x22*-0x9a+-0x4df+0x1953;while(!![]){switch(_0x4c9895[_0x463365++]){case'0':this[_0x22d3df(0x284)+'h']();continue;case'1':Window_Base[_0x22d3df(0x158)][_0x22d3df(0x21f)]['call'](this);continue;case'2':this[_0x22d3df(0x17e)+'tion']();continue;case'3':this['_requestRe'+_0x22d3df(0x296)]&&(this[_0x22d3df(0x200)+'fresh']=![],this[_0x22d3df(0x12b)]());continue;case'4':this[_0x22d3df(0x1cf)+'ity']();continue;}break;}},Window_StateTooltip['prototype']['requestRef'+_0x4c0e2a(0x18c)]=function(){const _0x1aa928=_0x4c0e2a;this[_0x1aa928(0x200)+_0x1aa928(0x296)]=!![];},Window_StateTooltip[_0x4c0e2a(0x158)]['updatePosi'+'tion']=function(){const _0x43a665=_0x4c0e2a,_0x21b3dd={'bcphv':function(_0x1db33a,_0x6f5f3c){return _0x1db33a+_0x6f5f3c;},'hxzWF':function(_0x4b872d,_0x3eaee5){return _0x4b872d+_0x3eaee5;}};if(!this['visible'])return;this['x']=_0x21b3dd[_0x43a665(0x16a)](TouchInput['x'],Window_StateTooltip[_0x43a665(0x203)+_0x43a665(0x234)]),this['y']=_0x21b3dd['hxzWF'](TouchInput['y'],Window_StateTooltip['MOUSE_OFFS'+_0x43a665(0x190)]),this['clampPosit'+_0x43a665(0x229)]();},Window_StateTooltip[_0x4c0e2a(0x158)][_0x4c0e2a(0x19f)+_0x4c0e2a(0x229)]=function(){const _0x26244a=_0x4c0e2a,_0x2480ea={'hiTdb':function(_0x2c113f,_0x183f85){return _0x2c113f*_0x183f85;},'FbTGI':function(_0x178908,_0x37a912){return _0x178908*_0x37a912;},'bDdvy':function(_0x16444e,_0x3b6146){return _0x16444e-_0x3b6146;}},_0x1aeca7=_0x2480ea[_0x26244a(0x165)](this[_0x26244a(0x12c)],Window_StateTooltip[_0x26244a(0x16f)+'LE']||0x1e9+-0xeeb+0x22b*0x6+0.01),_0x55943d=_0x2480ea['FbTGI'](this[_0x26244a(0x155)],Window_StateTooltip['WINDOW_SCA'+'LE']||0x1b1*-0xd+0x250b+0x2f*-0x52+0.01);this['x']=Math['round'](this['x'][_0x26244a(0x26b)](0xab8+0x12ec+-0x1da4,_0x2480ea[_0x26244a(0x215)](Graphics[_0x26244a(0x12c)],_0x1aeca7))),this['y']=Math['round'](this['y'][_0x26244a(0x26b)](0x274+-0x1e0f+0x1b9b,_0x2480ea[_0x26244a(0x215)](Graphics[_0x26244a(0x155)],_0x55943d)));},Window_StateTooltip[_0x4c0e2a(0x158)][_0x4c0e2a(0x284)+'h']=function(){const _0x2fc041=_0x4c0e2a;this[_0x2fc041(0x18d)]&&this[_0x2fc041(0x18d)][_0x2fc041(0x161)]()&&this[_0x2fc041(0x231)](null);},Window_StateTooltip['prototype'][_0x4c0e2a(0x1cf)+_0x4c0e2a(0x1d3)]=function(){const _0xa3f5c3=_0x4c0e2a,_0x232ea8=this[_0xa3f5c3(0x145)+_0xa3f5c3(0x1d3)]();this[_0xa3f5c3(0x1b9)]=this[_0xa3f5c3(0x1df)+_0xa3f5c3(0x195)]=_0x232ea8;},Window_StateTooltip[_0x4c0e2a(0x158)][_0x4c0e2a(0x145)+'ity']=function(){const _0xa877ca=_0x4c0e2a;if(SceneManager[_0xa877ca(0x19d)+_0xa877ca(0x157)]()){const _0xf81a8e=[];_0xf81a8e[_0xa877ca(0x27d)](SceneManager['_scene'][_0xa877ca(0x262)+_0xa877ca(0x241)]),_0xf81a8e[_0xa877ca(0x27d)](SceneManager['_scene'][_0xa877ca(0x13d)+'w']),_0xf81a8e[_0xa877ca(0x27d)](SceneManager[_0xa877ca(0x272)][_0xa877ca(0x162)+'ow']),_0xf81a8e[_0xa877ca(0x27d)](SceneManager[_0xa877ca(0x272)][_0xa877ca(0x28a)+_0xa877ca(0x153)]);for(const _0x2c686b of _0xf81a8e){if(_0x2c686b&&_0x2c686b[_0xa877ca(0x249)]()&&_0x2c686b[_0xa877ca(0x166)]&&_0x2c686b[_0xa877ca(0x235)+_0xa877ca(0x13a)]())return-0x22b9+-0x1149+0x3b7*0xe;}}return 0x1*0x80d+-0x1*-0x269+0x977*-0x1;};