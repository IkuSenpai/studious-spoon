//=============================================================================
// VisuStella MZ - Full Field Recovery
// VisuMZ_4_FullFieldRecovery.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_FullFieldRecovery = true;

var VisuMZ = VisuMZ || {};
VisuMZ.FullFieldRecovery = VisuMZ.FullFieldRecovery || {};
VisuMZ.FullFieldRecovery.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.01] [FullFieldRecovery]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Full_Field_Recovery_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Do you shower your players with items only to find out that they don't use
 * them? Or perhaps they're always hoarding the items despite being incredibly
 * low on health while they explore dungeons? This plugin adds in a simple
 * button press for your players to push in order to pull up a Full Field
 * Recovery window and uses items to fully recover the party's HP, MP, and
 * status by using lower cost items first to higher cost ones (or if you want,
 * create your own priority list). This quality of life feature will make the
 * dungeon crawling aspect of your game more comfortable for your players
 * provided that you give them a plethora of items to heal with.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Adds Quality of Life command that's found throughout most modern JRPG's to
 *   let the player quickly heal the party by automatically using items.
 * * Items used will automatically prioritized from lowest cost to highest cost
 *   as to not waste the player's more valuable items.
 * * If you prefer to make your own priority list, you can do so via the Plugin
 *   Parameters based on the healing type for HP, MP, and States.
 * * Shortcut key on the map allows the player to quickly pull up the Full
 *   Field Recovery option.
 * * Notetags can be used to include or exclude items from the priority list.
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
 * Understanding Auto-Priority List
 * ============================================================================
 *
 * If you left the Plugin Parameter item lists empty, then you're allowing the
 * plugin to create its own priority list. Here's how the list rulings work
 * for each healing type (State, HP, and MP).
 * 
 * When healing via Full Field Recovery, states are healed first, followed by
 * HP, followed by MP. Battle-participants will be given priority for healing
 * items first. Once they have received full recovery, reserve party members
 * will then be focused on for full team field recovery.
 *
 * ---
 *
 * Automatic State Recovery Item Inclusion Rulings
 * 
 * 1. Nonconsumable items are listed at the top of the priority list regardless
 *    of their price that can be used with "Always" / "Menu Only".
 * 
 * 2. Consumable items are added in order listed by price first then by ID from
 *    lowest to highest that can be used with "Always" / "Menu Only".
 *    Items must have at least a price of 1.
 * 
 * 3. If an item has the notetags <Exclude Field State Recovery> or
 *    <Exclude Field Recovery>, then that item is excluded from the list.
 * 
 * 4. If an item has the notetag <Include Field State Recovery>, then that item
 *    is included into the list.
 * 
 * 5. If an item has the "Remove State" type in their database entry's Effects
 *    list and nothing else, then that item is included into the list. However,
 *    any other effects like "Add State" or "Recover HP" or "Recover MP" or
 *    "Gain TP" will invalidate the automatic addition and will therefore
 *    require the aid of the <Include Field State Recovery> notetag.
 *
 * ---
 *
 * Automatic HP Recovery Item Inclusion Rulings
 * 
 * 1. Nonconsumable items are listed at the top of the priority list regardless
 *    of their price that can be used with "Always" / "Menu Only".
 * 
 * 2. Consumable items are added in order listed by price first then by ID from
 *    lowest to highest that can be used with "Always" / "Menu Only".
 *    Items must have at least a price of 1.
 * 
 * 3. If an item has the notetags <Exclude Field HP Recovery> or
 *    <Exclude Field Recovery>, then that item is excluded from the list.
 * 
 * 4. If an item has the notetag <Include Field HP Recovery>, then that item
 *    is included into the list.
 * 
 * 5. If an item has the "Recover HP" type in their database entry's Effects
 *    list and nothing else, then that item is included into the list. However,
 *    any other effects like "Add State" or "Remove State" or "Recover MP" or
 *    "Gain TP" will invalidate the automatic addition and will therefore
 *    require the aid of the <Include Field HP Recovery> notetag.
 *
 * ---
 *
 * Automatic MP Recovery Item Inclusion Rulings
 * 
 * 1. Nonconsumable items are listed at the top of the priority list regardless
 *    of their price that can be used with "Always" / "Menu Only".
 * 
 * 2. Consumable items are added in order listed by price first then by ID from
 *    lowest to highest that can be used with "Always" / "Menu Only".
 *    Items must have at least a price of 1.
 * 
 * 3. If an item has the notetags <Exclude Field MP Recovery> or
 *    <Exclude Field Recovery>, then that item is excluded from the list.
 * 
 * 4. If an item has the notetag <Include Field MP Recovery>, then that item
 *    is included into the list.
 * 
 * 5. If an item has the "Recover MP" type in their database entry's Effects
 *    list and nothing else, then that item is included into the list. However,
 *    any other effects like "Add State" or "Remove State" or "Recover MP" or
 *    "Gain TP" will invalidate the automatic addition and will therefore
 *    require the aid of the <Include Field MP Recovery> notetag.
 *
 * ---
 * 
 * For those wondering why number 5 of each option is so strict as to not allow
 * other effect types, it's in order to streamline the process so that there is
 * no unfavorable prioritization as multi-purpose items have more inherent
 * value than their price typically suggests. However, if you do wish to
 * include these hybrid effect items into your priority lists, either add them
 * through notetags or through the Plugin Parameters.
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
 * === Map-Related Notetags ===
 * 
 * ---
 *
 * <Disable Full Field Recovery>
 *
 * - Used for: Map Notetags
 * - Disables Full Field Recovery from being used on this map.
 *
 * ---
 * 
 * === Item-Related Notetags ===
 *
 * <Exclude Field Recovery>
 * <Exclude Field HP Recovery>
 * <Exclude Field MP Recovery>
 * <Exclude Field State Recovery>
 *
 * - Used for: Item Notetags
 * - Excludes this specific item from being included into the automatically
 *   generated lists of field recovery items.
 * - If using a planned priority list, ignore this notetag.
 * - The general <Exclude Field Recovery> notetag will exclude from all three
 *   lists while the HP, MP, and State specific ones target only those lists.
 *
 * ---
 *
 * <Include Field HP Recovery>
 * <Include Field MP Recovery>
 * <Include Field State Recovery>
 *
 * - Used for: Item Notetags
 * - Includes this specific item into the automatic field recovery item list.
 * - If using a planned priority list, ignore this notetag.
 * - This still requires the item to have an occassion type of "Always" or
 *   "Menu Only" in order to be usable via Full Field Recovery.
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
 * === Map Plugin Commands ===
 * 
 * ---
 *
 * Map: Open Full Field Recovery Message
 * - Open Full Field Recovery Message without shortcut key.
 * - Full Field Recovery Accessibility required.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Enable Full Field Recovery?
 * - Enable/disable Full Field Recovery from being accessible?
 * - Does NOT bypass <Disable Full Field Recovery> map notetag.
 *
 *   Enable/Disable?:
 *   - Enables/disables Full Field Recovery on map scene?
 *   - Does NOT bypass <Disable Full Field Recovery> map notetag.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings for the Full Field Recovery plugin.
 *
 * ---
 *
 * Full Field Recovery
 * 
 *   Default Enable?:
 *   - Enable access to the map Full Field Recovery by default?
 * 
 *   Shortcut Key:
 *   - What key is used to activate the Full Field Recovery Window?
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 *
 * ---
 *
 * Mechanics
 * 
 *   Heal HP?:
 *   - Use healing items to recover HP?
 * 
 *     HP Item List:
 *     - Priority list of items to use for HP recovery.
 *     - Leave empty to automatically populate.
 * 
 *   Heal MP?:
 *   - Use healing items to recover MP?
 * 
 *     MP Item List:
 *     - Priority list of items to use for MP recovery.
 *     - Leave empty to automatically populate.
 * 
 *   Heal States?:
 *   - Use healing items to recover states?
 * 
 *     States Item List:
 *     - Priority list of items to use for state recovery.
 *     - Leave empty to automatically populate.
 *
 * ---
 *
 * Scene_Map > Message Window
 * 
 *   Vocab: Already Full:
 *   - Text used when all members are fully healed.
 *   - You may use text codes.
 * 
 *   Vocab: Lacking Items:
 *   - Text used when not enough items to heal with.
 *   - You may use text codes.
 * 
 *   Vocab: Heal Prompt:
 *   - Text used when not enough items to heal with.
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
 * Scene_Map > Choice Window
 * 
 *   Vocab: Heal Option:
 *   - Text used for the heal option.
 *   - You may use text codes.
 * 
 *   Vocab: Cancel Option:
 *   - Text used for the cancel option.
 *   - You may use text codes.
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Text Alignment:
 *   - Pick the text alignment for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * Settings for the Full Field Recovery sound effect
 *
 * ---
 *
 * Ask Full Recovery
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
 * Use Full Recovery
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
 * Version 1.01: November 24, 2022
 * * Documentation Update!
 * ** Updated "Understanding Auto-Priority List" section to given more info on
 *    priority healing.
 * * Feature Update!
 * ** Battle-participants will be given priority for healing items first. Once
 *    they have received full recovery, reserve party members will then be
 *    focused on for full team field recovery.
 * 
 * Version 1.00 Official Release Date: December 9, 2022
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
 * @command OpenFullFieldRecovery
 * @text Map: Open Full Field Recovery Message
 * @desc Open Full Field Recovery Message without shortcut key.
 * Full Field Recovery Accessibility required.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemFullFieldRecoveryEnable
 * @text System: Enable Full Field Recovery?
 * @desc Enable/disable Full Field Recovery from being accessible?
 * Does NOT bypass <Disable Full Field Recovery> map notetag.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables Full Field Recovery on map scene?
 * Does NOT bypass <Disable Full Field Recovery> map notetag.
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
 * @param FullFieldRecovery
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
 * @desc General settings for the Full Field Recovery plugin.
 * @default {"FullFieldRecovery":"","DefaultEnable:eval":"true","ShortcutKey:str":"pageup","AnimationID:num":"45","Mechanics":"","HealHp:eval":"true","HpItemList:arraynum":"[]","HealMp:eval":"true","MpItemList:arraynum":"[]","HealStates:eval":"true","StateItemList:arraynum":"[]","SceneMap":"","Window_FullFieldRecoveryMessage":"","MsgWindow_AlreadyFull:json":"\"All \\\\c[6]party members\\\\c[0] are at \\\\c[24]full health\\\\c[0].\"","MsgWindow_NotEnoughItems:json":"\"There are \\\\c[2]insufficient\\\\c[0] items to \\\\c[24]heal\\\\c[0] with.\"","MsgWindow_HealPrompt:json":"\"Do you wish to use your \\\\c[4]items\\\\c[0] to fully\\n\\\\c[24]heal\\\\c[0] your \\\\c[6]party's\\\\c[0] \\\\c[21]HP\\\\c[0], \\\\c[23]MP\\\\c[0], and \\\\c[5]status\\\\c[0]?\"","MsgWindow_BgType:num":"0","MsgWindow_RectJS:func":"\"const ww = 720;\\nconst wh = this.calcWindowHeight(3, true);\\n\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = Math.ceil((Graphics.boxHeight - wh) / 2);\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Window_FullFieldRecoveryChoice":"","ChoiceWindow_HealPrompt:str":"\\I[164]Heal","ChoiceWindow_CancelPrompt:str":"\\I[162]Cancel","ChoiceWindow_BgType:num":"0","ChoiceWindowTextAlign:str":"left","ChoiceWindow_RectJS:func":"\"const msgWindow = arguments[0];\\n\\nconst ww = 192;\\nconst wh = this.calcWindowHeight(2, true);\\n\\nconst wx = msgWindow.x + msgWindow.width - ww;\\nconst wy = msgWindow.y - wh;\\n\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param Sound:struct
 * @text Sound Settings
 * @type struct<Sound>
 * @desc Settings for the Full Field Recovery sound effect
 * @default {"Ask":"","askName:str":"Raise3","askVolume:num":"90","askPitch:num":"80","askPan:num":"0","Use":"","name:str":"Raise3","volume:num":"90","pitch:num":"120","pan:num":"0"}
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
 * @param FullFieldRecovery
 * @text Full Field Recovery
 *
 * @param DefaultEnable:eval
 * @text Default Enable?
 * @parent FullFieldRecovery
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable access to the map Full Field Recovery by default?
 * @default true
 * 
 * @param ShortcutKey:str
 * @text Shortcut Key
 * @parent FullFieldRecovery
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc What key is used to activate the Full Field Recovery Window?
 * @default pageup
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent FullFieldRecovery
 * @type animation
 * @desc Play this animation when the effect activates.
 * @default 45
 *
 * @param Mechanics
 *
 * @param HealHp:eval
 * @text Heal HP?
 * @parent Mechanics
 * @type boolean
 * @on Heal
 * @off Ignore
 * @desc Use healing items to recover HP?
 * @default true
 * 
 * @param HpItemList:arraynum
 * @text HP Item List
 * @parent HealHp:eval
 * @type item[]
 * @desc Priority list of items to use for HP recovery.
 * Leave empty to automatically populate.
 * @default []
 *
 * @param HealMp:eval
 * @text Heal MP?
 * @parent Mechanics
 * @type boolean
 * @on Heal
 * @off Ignore
 * @desc Use healing items to recover MP?
 * @default true
 * 
 * @param MpItemList:arraynum
 * @text MP Item List
 * @parent HealMp:eval
 * @type item[]
 * @desc Priority list of items to use for MP recovery.
 * Leave empty to automatically populate.
 * @default []
 *
 * @param HealStates:eval
 * @text Heal States?
 * @parent Mechanics
 * @type boolean
 * @on Heal
 * @off Ignore
 * @desc Use healing items to recover states?
 * @default true
 * 
 * @param StateItemList:arraynum
 * @text States Item List
 * @parent HealStates:eval
 * @type item[]
 * @desc Priority list of items to use for state recovery.
 * Leave empty to automatically populate.
 * @default []
 * 
 * @param SceneMap
 * @text Scene_Map
 * 
 * @param Window_FullFieldRecoveryMessage
 * @text Message Window
 * @parent SceneMap
 *
 * @param MsgWindow_AlreadyFull:json
 * @text Vocab: Already Full
 * @parent Window_FullFieldRecoveryMessage
 * @type note
 * @desc Text used when all members are fully healed.
 * You may use text codes.
 * @default "All \\c[6]party members\\c[0] are at \\c[24]full health\\c[0]."
 *
 * @param MsgWindow_NotEnoughItems:json
 * @text Vocab: Lacking Items
 * @parent Window_FullFieldRecoveryMessage
 * @type note
 * @desc Text used when not enough items to heal with.
 * You may use text codes.
 * @default "There are \\c[2]insufficient\\c[0] items to \\c[24]heal\\c[0] with."
 *
 * @param MsgWindow_HealPrompt:json
 * @text Vocab: Heal Prompt
 * @parent Window_FullFieldRecoveryMessage
 * @type note
 * @desc Text used when not enough items to heal with.
 * You may use text codes.
 * @default "Do you wish to use your \\c[4]items\\c[0] to fully\n\\c[24]heal\\c[0] your \\c[6]party's\\c[0] \\c[21]HP\\c[0], \\c[23]MP\\c[0], and \\c[5]status\\c[0]?"
 *
 * @param MsgWindow_BgType:num
 * @text Background Type
 * @parent Window_FullFieldRecoveryMessage
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
 * @param MsgWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_FullFieldRecoveryMessage
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = 720;\nconst wh = this.calcWindowHeight(3, true);\n\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = Math.ceil((Graphics.boxHeight - wh) / 2);\n\nreturn new Rectangle(wx, wy, ww, wh);"
 * 
 * @param Window_FullFieldRecoveryChoice
 * @text Choice Window
 * @parent SceneMap
 *
 * @param ChoiceWindow_HealPrompt:str
 * @text Vocab: Heal Option
 * @parent Window_FullFieldRecoveryChoice
 * @type note
 * @desc Text used for the heal option.
 * You may use text codes.
 * @default \I[164]Heal
 *
 * @param ChoiceWindow_CancelPrompt:str
 * @text Vocab: Cancel Option
 * @parent Window_FullFieldRecoveryChoice
 * @type note
 * @desc Text used for the cancel option.
 * You may use text codes.
 * @default \I[162]Cancel
 *
 * @param ChoiceWindow_BgType:num
 * @text Background Type
 * @parent Window_FullFieldRecoveryChoice
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
 * @param ChoiceWindowTextAlign:str
 * @text Text Alignment
 * @parent Window_FullFieldRecoveryChoice
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Pick the text alignment for this window.
 * @default left
 *
 * @param ChoiceWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_FullFieldRecoveryChoice
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const msgWindow = arguments[0];\n\nconst ww = 192;\nconst wh = this.calcWindowHeight(2, true);\n\nconst wx = msgWindow.x + msgWindow.width - ww;\nconst wy = msgWindow.y - wh;\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param Ask
 * @text Ask Full Recovery
 *
 * @param askName:str
 * @text Filename
 * @parent Ask
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Raise3
 *
 * @param askVolume:num
 * @text Volume
 * @parent Ask
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param askPitch:num
 * @text Pitch
 * @parent Ask
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 80
 *
 * @param askPan:num
 * @text Pan
 * @parent Ask
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Use
 * @text Use Full Recovery
 *
 * @param name:str
 * @text Filename
 * @parent Use
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Raise3
 *
 * @param volume:num
 * @text Volume
 * @parent Use
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param pitch:num
 * @text Pitch
 * @parent Use
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param pan:num
 * @text Pan
 * @parent Use
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
//=============================================================================

const _0x6e8c4d=_0x496a;function _0x5153(){const _0x1327e3=['bgTypeChoice','WvmIh','addCommand','width','stateItems','prototype','value2','NUM','contents','processFullFieldHpRecoveryUsage','isFieldHpRecoveryItem','parse','updateMain','hasItemAnyValidStateRecoveryEffects','value1','numRepeats','FullFieldRecovery','BJsdF','Sxcxs','ExcludeStateRecovery','IncludeStateRecovery','MIFpn','changePaintOpacity','create','bgTypeMessage','Game_Map_setup','generateFieldRecoveryStateItemsList','getFullFieldRecoveryHpItems','processFullFieldStateRecovery','mhp','concat','SystemFullFieldRecoveryEnable','OpenFullFieldRecovery','code','askVolume','effects','numItems','initialize','open','General','setup','ARRAYNUM','ChoiceWindowTextAlign','fullFieldRecoveryMessageWindowRect','processFullFieldHpRecoveryItem','fieldMembersNeedStateRecovery','createFullFieldRecoveryWindows','ARRAYEVAL','SZYvX','rYXsY','call','hasItemAnyValidStateRecoveryNotetags','QwXAq','ChoiceWindow_RectJS','setupFullFieldRecoveryNotetags','_states','631642XxWVjg','mpDamage','center','damage','setFullFieldRecovery','processFullFieldHpRecovery','isBusy','fullFieldRecoveryOpen','_active','AeyHM','occasion','StartDamagePopup','424frTKmA','updateFullFieldRecoveryShortcutKey','_lastPluginCommandInterpreter','createAllWindows','hasAnyFieldRecoveryItems','onFullFieldRecoveryHeal','SvQgc','onFullFieldRecoveryCancel','processFullFieldMpRecovery','itemLineRect','addWindow','276090ezIISB','askName','KSczu','getFullFieldRecoveryMpItems','battleMembers','map','processFullFieldStateRecoveryItem','fullFieldRecoveryClose','useItem','match','oqDQk','RegExp','fieldMembersNeedMpRecovery','_fullFieldRecoveryChoiceWindow','type','LTRui','EOeoX','_mapEnableFullFieldRecovery','mpHeal','setHandler','Enable','createFullFieldRecoveryMessageWindow','itemTextAlign','INaut','3YRZFvI','EFFECT_RECOVER_HP','textSizeEx','sort','1656435VmhNcM','playFullFieldRecoveryOpen','testLifeAndDeath','AnimationID','push','Ulawf','length','getFullFieldRecoveryStateItems','defaultMapEnable','return\x200','isUsingFrontviewUiLayout','needsHealing','bBwBs','EFFECT_RECOVER_MP','right','fullFieldRecoveryChoiceWindowRect','pitch','eEGTL','MsgWindow_HealPrompt','MsgWindow_RectJS','refresh','checkForMatchingFieldEffects','Settings','ConvertParams','playSe','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','state','floor','result','Game_System_initialize','ChoiceWindow_BgType','EVAL','MpItemList','selectFirstAvailable','registerCommand','isFullFieldRecoveryDisabled','8421490xjOJiV','6116202uYTOlP','RIJpx','openness','addCancelCommand','animationID','mpItems','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','createFullFieldRecoveryChoiceWindow','commandName','price','item','nRHNT','NQmyF','format','HealStates','ExcludeRecovery','needsAnyFieldRecovery','setLastPluginCommandInterpreter','note','testFieldStateRecovery','testItemStateRecoveryEffect','hpHeal','cancel','PUBlI','ZNCwq','DefaultEnable','Sound','isFieldStateRecoveryItem','Scene_Map_createAllWindows','HpItemList','pPTuK','_disableFullFieldRecovery','deactivate','height','hpDamage','processFullFieldMpRecoveryItem','isTriggered','calcWindowHeight','initFullFieldRecovery','bind','playFullFieldRecoveryUse','drawTextEx','isCommandEnabled','StateItemList','showFullFieldRecoveryAnimation','MsgWindow_AlreadyFull','ChoiceWindow_HealPrompt','noItemsToHeal','remove','fieldMembersNeedHpRecovery','canFullFieldRecovery','setItemObject','bOfXv','drawItem','command357','SETTINGS','_fullFieldRecoveryItems','ceil','BqRJv','_fullFieldRecoveryMessageWindow','boxHeight','textAlign','wait','askPitch','Scene_Map_updateMain','description','wFIKu','OiWMe','askPan','zHxAT','891368IJEpIr','parameters','isStateAffected','innerHeight','ARRAYSTRUCT','kLnmN','ARRAYFUNC','STR','isFieldMpRecoveryItem','isSceneMap','joyuB','boxWidth','JxKgT','generateFieldRecoveryHpItemsList','bypassFrontviewUiFieldPopup','setBackgroundType','playCancel','filter','aeJsA','generateFieldRecoveryMpItemsList','processFullFieldRecovery','FrkXd','hpItems','some','consumable','trim','FULL_FIELD_RECOVERY','allMembers','exit','status','DisableFieldRec','isEventRunning','mmp','requestAnimation','ExcludeHpRecovery','addHealCommand','includes','VisuMZ_3_FrontviewBattleUI','getLastPluginCommandInterpreter','stateHeal','name','hVhOG','shortcutKey','tirNR','constructor','chkJo','isForAll','IncludeHpRecovery','heal','HealHp','294939jNBWdg','EFFECT_REMOVE_STATE','apply','FrontviewBattleUI','NoRsh','_scene','version','VgbAq','STRUCT','FeEft','_bypassFieldDamagePopup','clear','alreadyFull','pvPlM','close'];_0x5153=function(){return _0x1327e3;};return _0x5153();}function _0x496a(_0x1e21d4,_0x1e5eea){const _0x515334=_0x5153();return _0x496a=function(_0x496a52,_0x2f1d12){_0x496a52=_0x496a52-0x192;let _0x3848b2=_0x515334[_0x496a52];return _0x3848b2;},_0x496a(_0x1e21d4,_0x1e5eea);}(function(_0x2ebd09,_0x3f74bb){const _0x32838e=_0x496a,_0x48b1d2=_0x2ebd09();while(!![]){try{const _0x14cea7=-parseInt(_0x32838e(0x22d))/0x1*(-parseInt(_0x32838e(0x1fe))/0x2)+-parseInt(_0x32838e(0x231))/0x3+-parseInt(_0x32838e(0x29c))/0x4+-parseInt(_0x32838e(0x215))/0x5+parseInt(_0x32838e(0x256))/0x6+parseInt(_0x32838e(0x255))/0x7+-parseInt(_0x32838e(0x20a))/0x8*(parseInt(_0x32838e(0x1b7))/0x9);if(_0x14cea7===_0x3f74bb)break;else _0x48b1d2['push'](_0x48b1d2['shift']());}catch(_0x3caaa2){_0x48b1d2['push'](_0x48b1d2['shift']());}}}(_0x5153,0x932d0));var label=_0x6e8c4d(0x1d6),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x6e8c4d(0x196)](function(_0x531166){const _0x1aef03=_0x6e8c4d;return _0x531166[_0x1aef03(0x1a2)]&&_0x531166['description'][_0x1aef03(0x1a9)]('['+label+']');})[0x0];VisuMZ[label][_0x6e8c4d(0x247)]=VisuMZ[label][_0x6e8c4d(0x247)]||{},VisuMZ[_0x6e8c4d(0x248)]=function(_0x536f8f,_0x42b58f){const _0x4e8c14=_0x6e8c4d;for(const _0x557c01 in _0x42b58f){if(_0x557c01[_0x4e8c14(0x21e)](/(.*):(.*)/i)){if(_0x4e8c14(0x2a6)===_0x4e8c14(0x1b2))return![];else{const _0x1ea8c5=String(RegExp['$1']),_0x2e6c7d=String(RegExp['$2'])['toUpperCase']()[_0x4e8c14(0x19e)]();let _0x8561f5,_0x4d3d39,_0x366616;switch(_0x2e6c7d){case _0x4e8c14(0x1cd):_0x8561f5=_0x42b58f[_0x557c01]!==''?Number(_0x42b58f[_0x557c01]):0x0;break;case _0x4e8c14(0x1ef):_0x4d3d39=_0x42b58f[_0x557c01]!==''?JSON[_0x4e8c14(0x1d1)](_0x42b58f[_0x557c01]):[],_0x8561f5=_0x4d3d39[_0x4e8c14(0x21a)](_0x546d31=>Number(_0x546d31));break;case _0x4e8c14(0x250):_0x8561f5=_0x42b58f[_0x557c01]!==''?eval(_0x42b58f[_0x557c01]):null;break;case _0x4e8c14(0x1f5):_0x4d3d39=_0x42b58f[_0x557c01]!==''?JSON[_0x4e8c14(0x1d1)](_0x42b58f[_0x557c01]):[],_0x8561f5=_0x4d3d39['map'](_0x2695b2=>eval(_0x2695b2));break;case'JSON':_0x8561f5=_0x42b58f[_0x557c01]!==''?JSON[_0x4e8c14(0x1d1)](_0x42b58f[_0x557c01]):'';break;case'ARRAYJSON':_0x4d3d39=_0x42b58f[_0x557c01]!==''?JSON['parse'](_0x42b58f[_0x557c01]):[],_0x8561f5=_0x4d3d39['map'](_0x2d6d85=>JSON[_0x4e8c14(0x1d1)](_0x2d6d85));break;case'FUNC':_0x8561f5=_0x42b58f[_0x557c01]!==''?new Function(JSON[_0x4e8c14(0x1d1)](_0x42b58f[_0x557c01])):new Function(_0x4e8c14(0x23a));break;case _0x4e8c14(0x2a2):_0x4d3d39=_0x42b58f[_0x557c01]!==''?JSON[_0x4e8c14(0x1d1)](_0x42b58f[_0x557c01]):[],_0x8561f5=_0x4d3d39['map'](_0x1baf24=>new Function(JSON[_0x4e8c14(0x1d1)](_0x1baf24)));break;case _0x4e8c14(0x2a3):_0x8561f5=_0x42b58f[_0x557c01]!==''?String(_0x42b58f[_0x557c01]):'';break;case'ARRAYSTR':_0x4d3d39=_0x42b58f[_0x557c01]!==''?JSON[_0x4e8c14(0x1d1)](_0x42b58f[_0x557c01]):[],_0x8561f5=_0x4d3d39[_0x4e8c14(0x21a)](_0x53a5f9=>String(_0x53a5f9));break;case _0x4e8c14(0x1bf):_0x366616=_0x42b58f[_0x557c01]!==''?JSON[_0x4e8c14(0x1d1)](_0x42b58f[_0x557c01]):{},_0x8561f5=VisuMZ['ConvertParams']({},_0x366616);break;case _0x4e8c14(0x2a0):_0x4d3d39=_0x42b58f[_0x557c01]!==''?JSON[_0x4e8c14(0x1d1)](_0x42b58f[_0x557c01]):[],_0x8561f5=_0x4d3d39[_0x4e8c14(0x21a)](_0x42752c=>VisuMZ[_0x4e8c14(0x248)]({},JSON[_0x4e8c14(0x1d1)](_0x42752c)));break;default:continue;}_0x536f8f[_0x1ea8c5]=_0x8561f5;}}}return _0x536f8f;},(_0x15ea93=>{const _0x544a7a=_0x6e8c4d,_0x53e032=_0x15ea93[_0x544a7a(0x1ad)];for(const _0x7d73a5 of dependencies){if(!Imported[_0x7d73a5]){alert(_0x544a7a(0x24a)[_0x544a7a(0x263)](_0x53e032,_0x7d73a5)),SceneManager[_0x544a7a(0x1a1)]();break;}}const _0x5c1137=_0x15ea93[_0x544a7a(0x297)];if(_0x5c1137[_0x544a7a(0x21e)](/\[Version[ ](.*?)\]/i)){if(_0x544a7a(0x1ae)!=='MpTVo'){const _0x209f51=Number(RegExp['$1']);if(_0x209f51!==VisuMZ[label]['version']){if(_0x544a7a(0x236)!==_0x544a7a(0x1be))alert(_0x544a7a(0x25c)[_0x544a7a(0x263)](_0x53e032,_0x209f51)),SceneManager[_0x544a7a(0x1a1)]();else{const _0x928c60=_0x264a8e['getLastPluginCommandInterpreter']();_0x52a089[_0x544a7a(0x205)](),_0x928c60[_0x544a7a(0x294)](0xa);}}}else _0x17cc16[_0x544a7a(0x235)](_0x1f3366);}if(_0x5c1137[_0x544a7a(0x21e)](/\[Tier[ ](\d+)\]/i)){const _0x2851b2=Number(RegExp['$1']);_0x2851b2<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x544a7a(0x263)](_0x53e032,_0x2851b2,tier)),SceneManager[_0x544a7a(0x1a1)]()):tier=Math['max'](_0x2851b2,tier);}VisuMZ['ConvertParams'](VisuMZ[label]['Settings'],_0x15ea93[_0x544a7a(0x29d)]);})(pluginData),PluginManager[_0x6e8c4d(0x253)](pluginData[_0x6e8c4d(0x1ad)],_0x6e8c4d(0x1e6),_0xe0829f=>{const _0x30f5c3=_0x6e8c4d;if(!SceneManager[_0x30f5c3(0x2a5)]())return;const _0xb0f212=SceneManager['_scene'];if(_0xb0f212){const _0x130f75=$gameTemp[_0x30f5c3(0x1ab)]();_0xb0f212[_0x30f5c3(0x205)](),_0x130f75['wait'](0xa);}}),PluginManager[_0x6e8c4d(0x253)](pluginData[_0x6e8c4d(0x1ad)],_0x6e8c4d(0x1e5),_0x276ba9=>{const _0xdf879a=_0x6e8c4d;VisuMZ['ConvertParams'](_0x276ba9,_0x276ba9);const _0x3149a9=_0x276ba9[_0xdf879a(0x229)];$gameSystem[_0xdf879a(0x202)](_0x3149a9);}),VisuMZ[_0x6e8c4d(0x1d6)][_0x6e8c4d(0x220)]={'DisableFieldRec':/<DISABLE (?:FULL |)FIELD (?:RECOVER|RECOVERY)>/i,'ExcludeRecovery':/<EXCLUDE FIELD (?:RECOVER|RECOVERY)>/i,'ExcludeHpRecovery':/<EXCLUDE FIELD HP (?:RECOVER|RECOVERY)>/i,'ExcludeMpRecovery':/<EXCLUDE FIELD MP (?:RECOVER|RECOVERY)>/i,'ExcludeStateRecovery':/<EXCLUDE FIELD STATE (?:RECOVER|RECOVERY)>/i,'IncludeHpRecovery':/<INCLUDE FIELD HP (?:RECOVER|RECOVERY)>/i,'IncludeMpRecovery':/<INCLUDE FIELD MP (?:RECOVER|RECOVERY)>/i,'IncludeStateRecovery':/<INCLUDE FIELD STATE (?:RECOVER|RECOVERY)>/i},DataManager[_0x6e8c4d(0x19f)]={'hpItems':VisuMZ['FullFieldRecovery'][_0x6e8c4d(0x247)][_0x6e8c4d(0x1ed)][_0x6e8c4d(0x273)],'mpItems':VisuMZ['FullFieldRecovery'][_0x6e8c4d(0x247)][_0x6e8c4d(0x1ed)][_0x6e8c4d(0x251)],'stateItems':VisuMZ[_0x6e8c4d(0x1d6)][_0x6e8c4d(0x247)][_0x6e8c4d(0x1ed)][_0x6e8c4d(0x281)]},DataManager['checkForMatchingFieldEffects']=function(_0x549315,_0x471e5b){const _0x1bfc64=_0x6e8c4d;for(const _0x1d454d of _0x549315[_0x1bfc64(0x1e9)]){if(_0x1d454d[_0x1bfc64(0x1e7)]!==_0x471e5b)return!![];}return![];},DataManager[_0x6e8c4d(0x1e1)]=function(){const _0x4d0fdf=_0x6e8c4d;this[_0x4d0fdf(0x28e)]=this[_0x4d0fdf(0x28e)]||{};if(this[_0x4d0fdf(0x28e)]['hp']!==undefined){if(_0x4d0fdf(0x210)===_0x4d0fdf(0x1db)){const _0x47d40c=this[_0x4d0fdf(0x1f1)](),_0x5d7857=new _0x1a0406(_0x47d40c);this[_0x4d0fdf(0x291)]=_0x5d7857,this[_0x4d0fdf(0x214)](_0x5d7857),_0x5d7857[_0x4d0fdf(0x258)]=0x0,_0x5d7857[_0x4d0fdf(0x194)](_0x147dd0[_0x4d0fdf(0x19f)][_0x4d0fdf(0x1de)]);}else return this[_0x4d0fdf(0x28e)]['hp'];}return this['_fullFieldRecoveryItems']['hp']=this['generateFieldRecoveryHpItemsList'](),this[_0x4d0fdf(0x28e)]['hp'];},DataManager[_0x6e8c4d(0x192)]=function(){const _0x25347b=_0x6e8c4d;if(DataManager['FULL_FIELD_RECOVERY'][_0x25347b(0x19b)][_0x25347b(0x237)]>0x0){if(_0x25347b(0x26d)!==_0x25347b(0x257))return DataManager[_0x25347b(0x19f)][_0x25347b(0x19b)][_0x25347b(0x21a)](_0x5853a6=>$dataItems[_0x5853a6])[_0x25347b(0x286)](null)[_0x25347b(0x286)](undefined);else{const _0x3b7d49=this[_0x25347b(0x213)](_0x3fd124),_0x5a5060=this[_0x25347b(0x25e)](_0xe7ce10),_0x4bd691=this[_0x25347b(0x22f)](_0x5a5060)[_0x25347b(0x1c9)];this['changePaintOpacity'](this[_0x25347b(0x280)](_0x3c4d9a));const _0x2c7d8b=this[_0x25347b(0x22b)]();if(_0x2c7d8b===_0x25347b(0x23f))this[_0x25347b(0x27f)](_0x5a5060,_0x3b7d49['x']+_0x3b7d49[_0x25347b(0x1c9)]-_0x4bd691,_0x3b7d49['y'],_0x4bd691);else{if(_0x2c7d8b===_0x25347b(0x200)){const _0x1623ba=_0x3b7d49['x']+_0x177dd4[_0x25347b(0x24c)]((_0x3b7d49[_0x25347b(0x1c9)]-_0x4bd691)/0x2);this[_0x25347b(0x27f)](_0x5a5060,_0x1623ba,_0x3b7d49['y'],_0x4bd691);}else this[_0x25347b(0x27f)](_0x5a5060,_0x3b7d49['x'],_0x3b7d49['y'],_0x4bd691);}}}const _0x461d83=[],_0x1701ea=[];for(const _0x5f3a7c of $dataItems){if(!_0x5f3a7c)continue;if(!this['isFieldHpRecoveryItem'](_0x5f3a7c))continue;if(_0x5f3a7c[_0x25347b(0x19d)]){if(_0x25347b(0x1f6)===_0x25347b(0x299)){if(!_0x48a0b7[_0x25347b(0x2a5)]())return;const _0x4b3512=_0x1a09e1[_0x25347b(0x1bc)];if(_0x4b3512){const _0x29f0da=_0x2ed094['getLastPluginCommandInterpreter']();_0x4b3512[_0x25347b(0x205)](),_0x29f0da[_0x25347b(0x294)](0xa);}}else _0x461d83[_0x25347b(0x235)](_0x5f3a7c);}else _0x1701ea[_0x25347b(0x235)](_0x5f3a7c);}return _0x461d83[_0x25347b(0x230)]((_0x13751f,_0x1fcd33)=>{const _0x32947b=_0x25347b;if('SHJuE'===_0x32947b(0x1c7))return _0x3d8acf['price']!==_0x33f2a6['price']?_0x2b3924[_0x32947b(0x25f)]-_0x41fec0[_0x32947b(0x25f)]:_0x328667['id']-_0x436a50['id'];else{if(_0x13751f[_0x32947b(0x25f)]!==_0x1fcd33[_0x32947b(0x25f)]&&_0x13751f[_0x32947b(0x25f)]>0x0&&_0x1fcd33[_0x32947b(0x25f)]>0x0){if(_0x32947b(0x1b0)===_0x32947b(0x2a1))this['bypassFrontviewUiFieldPopup'](!![]),this[_0x32947b(0x1cf)](_0x597404,![]),this[_0x32947b(0x1cf)](_0x11f7ba,!![]),this['bypassFrontviewUiFieldPopup'](![]);else return _0x13751f['price']-_0x1fcd33[_0x32947b(0x25f)];}else return _0x13751f['id']-_0x1fcd33['id'];}}),_0x1701ea[_0x25347b(0x1e4)](_0x461d83);},DataManager[_0x6e8c4d(0x1d0)]=function(_0x210c8c){const _0x512f51=_0x6e8c4d;if(!_0x210c8c)return![];if(![0x0,0x2]['includes'](_0x210c8c['occasion']))return![];if(_0x210c8c[_0x512f51(0x201)][_0x512f51(0x223)]===0x4)return![];if(this[_0x512f51(0x246)](_0x210c8c,Game_Action[_0x512f51(0x22e)]))return![];const _0x1c9a14=_0x210c8c[_0x512f51(0x268)]||'',_0x53ae8c=VisuMZ[_0x512f51(0x1d6)][_0x512f51(0x220)];if(_0x1c9a14[_0x512f51(0x21e)](_0x53ae8c[_0x512f51(0x265)]))return![];if(_0x1c9a14['match'](_0x53ae8c[_0x512f51(0x1a7)]))return![];if(_0x1c9a14[_0x512f51(0x21e)](_0x53ae8c[_0x512f51(0x1b4)]))return!![];if(_0x210c8c[_0x512f51(0x201)][_0x512f51(0x223)]===0x3)return!![];for(const _0x54e510 of _0x210c8c[_0x512f51(0x1e9)]){if(_0x54e510[_0x512f51(0x1e7)]===Game_Action[_0x512f51(0x22e)]){if(_0x54e510[_0x512f51(0x1d4)]>0x0)return!![];if(_0x54e510[_0x512f51(0x1cc)]>0x0)return!![];}}return![];},DataManager[_0x6e8c4d(0x218)]=function(){const _0x4e2043=_0x6e8c4d;this[_0x4e2043(0x28e)]=this['_fullFieldRecoveryItems']||{};if(this[_0x4e2043(0x28e)]['mp']!==undefined)return'kVNXm'!==_0x4e2043(0x224)?this['_fullFieldRecoveryItems']['mp']:_0x579c73['id']-_0x5a7450['id'];return this[_0x4e2043(0x28e)]['mp']=this['generateFieldRecoveryMpItemsList'](),this[_0x4e2043(0x28e)]['mp'];},DataManager[_0x6e8c4d(0x198)]=function(){const _0x3b0268=_0x6e8c4d;if(DataManager[_0x3b0268(0x19f)]['mpItems'][_0x3b0268(0x237)]>0x0)return DataManager[_0x3b0268(0x19f)][_0x3b0268(0x25b)][_0x3b0268(0x21a)](_0x58fd61=>$dataItems[_0x58fd61])[_0x3b0268(0x286)](null)[_0x3b0268(0x286)](undefined);const _0x4f8dde=[],_0x1875e6=[];for(const _0x15bf53 of $dataItems){if(!_0x15bf53)continue;if(!this[_0x3b0268(0x2a4)](_0x15bf53))continue;if(_0x15bf53[_0x3b0268(0x19d)])_0x4f8dde[_0x3b0268(0x235)](_0x15bf53);else{if(_0x3b0268(0x22c)===_0x3b0268(0x217)){const _0xcfd230=_0x3e0df2[_0x3b0268(0x1e1)]();if(_0xcfd230[_0x3b0268(0x19c)](_0x298186=>this[_0x3b0268(0x1ea)](_0x298186)>0x0))return!![];}else _0x1875e6[_0x3b0268(0x235)](_0x15bf53);}}return _0x4f8dde['sort']((_0x433b3b,_0x14ed6e)=>{const _0x404477=_0x3b0268;if(_0x433b3b[_0x404477(0x25f)]!==_0x14ed6e[_0x404477(0x25f)]){if(_0x404477(0x28a)===_0x404477(0x1fa)){if(!_0x148cbd)return![];if(![0x0,0x2][_0x404477(0x1a9)](_0xc89dcf[_0x404477(0x208)]))return![];if(_0x165c07['damage'][_0x404477(0x223)]===0x4)return![];if(this['checkForMatchingFieldEffects'](_0x4d9e2c,_0x37ae79[_0x404477(0x22e)]))return![];const _0x455919=_0x24291e[_0x404477(0x268)]||'',_0x511f41=_0x5c16b4['FullFieldRecovery']['RegExp'];if(_0x455919[_0x404477(0x21e)](_0x511f41['ExcludeRecovery']))return![];if(_0x455919[_0x404477(0x21e)](_0x511f41[_0x404477(0x1a7)]))return![];if(_0x455919[_0x404477(0x21e)](_0x511f41[_0x404477(0x1b4)]))return!![];if(_0x838167[_0x404477(0x201)][_0x404477(0x223)]===0x3)return!![];for(const _0x4d527c of _0x2c10b8['effects']){if(_0x4d527c[_0x404477(0x1e7)]===_0x325051[_0x404477(0x22e)]){if(_0x4d527c[_0x404477(0x1d4)]>0x0)return!![];if(_0x4d527c[_0x404477(0x1cc)]>0x0)return!![];}}return![];}else return _0x433b3b[_0x404477(0x25f)]-_0x14ed6e[_0x404477(0x25f)];}else return _0x433b3b['id']-_0x14ed6e['id'];}),_0x1875e6[_0x3b0268(0x1e4)](_0x4f8dde);},DataManager[_0x6e8c4d(0x2a4)]=function(_0x216fe5){const _0x5bae6e=_0x6e8c4d;if(!_0x216fe5)return![];if(![0x0,0x2][_0x5bae6e(0x1a9)](_0x216fe5[_0x5bae6e(0x208)]))return![];if(_0x216fe5[_0x5bae6e(0x201)][_0x5bae6e(0x223)]===0x3)return![];if(this[_0x5bae6e(0x246)](_0x216fe5,Game_Action[_0x5bae6e(0x23e)]))return![];const _0x320ab9=_0x216fe5[_0x5bae6e(0x268)]||'',_0x115024=VisuMZ[_0x5bae6e(0x1d6)][_0x5bae6e(0x220)];if(_0x320ab9[_0x5bae6e(0x21e)](_0x115024[_0x5bae6e(0x265)]))return![];if(_0x320ab9[_0x5bae6e(0x21e)](_0x115024['ExcludeMpRecovery']))return![];if(_0x320ab9[_0x5bae6e(0x21e)](_0x115024['IncludeMpRecovery']))return!![];if(_0x216fe5['damage']['type']===0x4)return!![];for(const _0x521015 of _0x216fe5[_0x5bae6e(0x1e9)]){if(_0x5bae6e(0x26e)!=='ZNCwq')this[_0x5bae6e(0x222)][_0x5bae6e(0x1c5)](),this[_0x5bae6e(0x222)]['deactivate']();else{if(_0x521015[_0x5bae6e(0x1e7)]===Game_Action[_0x5bae6e(0x23e)]){if(_0x5bae6e(0x197)===_0x5bae6e(0x1f7))this['fullFieldRecoveryOpen']();else{if(_0x521015['value1']>0x0)return!![];if(_0x521015[_0x5bae6e(0x1cc)]>0x0)return!![];}}}}return![];},DataManager[_0x6e8c4d(0x238)]=function(){const _0x43ee55=_0x6e8c4d;this['_fullFieldRecoveryItems']=this[_0x43ee55(0x28e)]||{};if(this[_0x43ee55(0x28e)][_0x43ee55(0x24b)]!==undefined)return this[_0x43ee55(0x28e)][_0x43ee55(0x24b)];return this[_0x43ee55(0x28e)][_0x43ee55(0x24b)]=this[_0x43ee55(0x1e0)](),this[_0x43ee55(0x28e)][_0x43ee55(0x24b)];},DataManager[_0x6e8c4d(0x1e0)]=function(){const _0x26c284=_0x6e8c4d;if(DataManager[_0x26c284(0x19f)][_0x26c284(0x1ca)][_0x26c284(0x237)]>0x0){if(_0x26c284(0x274)==='CFBoF')this['_disableFullFieldRecovery']=!![];else return DataManager[_0x26c284(0x19f)]['stateItems'][_0x26c284(0x21a)](_0x1c6465=>$dataItems[_0x1c6465])[_0x26c284(0x286)](null)[_0x26c284(0x286)](undefined);}const _0x695e33=[],_0x2a0ba5=[];for(const _0x166eca of $dataItems){if(!_0x166eca)continue;if(!this[_0x26c284(0x271)](_0x166eca))continue;_0x166eca[_0x26c284(0x19d)]?_0x695e33[_0x26c284(0x235)](_0x166eca):_0x2a0ba5[_0x26c284(0x235)](_0x166eca);}return _0x695e33[_0x26c284(0x230)]((_0x5abe0d,_0x1aa363)=>{const _0x2d9fce=_0x26c284;if(_0x5abe0d[_0x2d9fce(0x25f)]!==_0x1aa363[_0x2d9fce(0x25f)]){if(_0x2d9fce(0x242)==='GnnHa'){const _0x442793=_0x19f715['FullFieldRecovery']['Settings'][_0x2d9fce(0x270)],_0xa1b25d={'name':_0x442793[_0x2d9fce(0x216)],'volume':_0x442793[_0x2d9fce(0x1e8)],'pitch':_0x442793[_0x2d9fce(0x295)],'pan':_0x442793[_0x2d9fce(0x29a)]};_0x1980a1[_0x2d9fce(0x249)](_0xa1b25d);}else return _0x5abe0d[_0x2d9fce(0x25f)]-_0x1aa363[_0x2d9fce(0x25f)];}else return _0x5abe0d['id']-_0x1aa363['id'];}),_0x2a0ba5[_0x26c284(0x1e4)](_0x695e33);},DataManager['isFieldStateRecoveryItem']=function(_0x14ca61){const _0x51b9ed=_0x6e8c4d;if(!_0x14ca61)return![];if(![0x0,0x2][_0x51b9ed(0x1a9)](_0x14ca61[_0x51b9ed(0x208)]))return![];if(_0x14ca61[_0x51b9ed(0x201)]['type']===0x3)return![];if(_0x14ca61['damage'][_0x51b9ed(0x223)]===0x4)return![];if(this[_0x51b9ed(0x246)](_0x14ca61,Game_Action[_0x51b9ed(0x1b8)]))return _0x51b9ed(0x262)===_0x51b9ed(0x262)?![]:_0x3c89de['id']-_0x473a4c['id'];const _0x434d2d=_0x14ca61[_0x51b9ed(0x268)]||'',_0x39b3df=VisuMZ[_0x51b9ed(0x1d6)][_0x51b9ed(0x220)];if(_0x434d2d[_0x51b9ed(0x21e)](_0x39b3df['ExcludeRecovery']))return![];if(_0x434d2d[_0x51b9ed(0x21e)](_0x39b3df[_0x51b9ed(0x1d9)]))return![];if(_0x434d2d[_0x51b9ed(0x21e)](_0x39b3df[_0x51b9ed(0x1da)]))return!![];for(const _0xf20882 of _0x14ca61[_0x51b9ed(0x1e9)]){if(_0x51b9ed(0x261)!==_0x51b9ed(0x261)){const _0x34fd36=_0x523cb0[_0x51b9ed(0x1d6)][_0x51b9ed(0x220)],_0x418034=this['item']()[_0x51b9ed(0x268)];if(_0x418034['match'](_0x34fd36[_0x51b9ed(0x1da)]))return!![];return![];}else{if(_0xf20882[_0x51b9ed(0x1e7)]===Game_Action[_0x51b9ed(0x1b8)])return!![];}}return![];},SoundManager['playFullFieldRecoveryOpen']=function(){const _0x265d70=_0x6e8c4d,_0x4d1338=VisuMZ['FullFieldRecovery'][_0x265d70(0x247)][_0x265d70(0x270)],_0x286c9f={'name':_0x4d1338[_0x265d70(0x1ad)],'volume':_0x4d1338['volume'],'pitch':_0x4d1338[_0x265d70(0x241)],'pan':_0x4d1338['pan']};AudioManager[_0x265d70(0x249)](_0x286c9f);},SoundManager[_0x6e8c4d(0x27e)]=function(){const _0x4f78b2=_0x6e8c4d,_0x2eb563=VisuMZ[_0x4f78b2(0x1d6)][_0x4f78b2(0x247)][_0x4f78b2(0x270)],_0x227a94={'name':_0x2eb563['askName'],'volume':_0x2eb563['askVolume'],'pitch':_0x2eb563[_0x4f78b2(0x295)],'pan':_0x2eb563[_0x4f78b2(0x29a)]};AudioManager[_0x4f78b2(0x249)](_0x227a94);},TextManager[_0x6e8c4d(0x19f)]={'alreadyFull':VisuMZ[_0x6e8c4d(0x1d6)][_0x6e8c4d(0x247)][_0x6e8c4d(0x1ed)][_0x6e8c4d(0x283)],'noItemsToHeal':VisuMZ['FullFieldRecovery']['Settings'][_0x6e8c4d(0x1ed)]['MsgWindow_NotEnoughItems'],'needsHealing':VisuMZ[_0x6e8c4d(0x1d6)][_0x6e8c4d(0x247)]['General'][_0x6e8c4d(0x243)],'optionHeal':VisuMZ[_0x6e8c4d(0x1d6)][_0x6e8c4d(0x247)][_0x6e8c4d(0x1ed)][_0x6e8c4d(0x284)],'optionCancel':VisuMZ[_0x6e8c4d(0x1d6)][_0x6e8c4d(0x247)][_0x6e8c4d(0x1ed)]['ChoiceWindow_CancelPrompt']},SceneManager[_0x6e8c4d(0x2a5)]=function(){const _0x2a3dba=_0x6e8c4d;return this[_0x2a3dba(0x1bc)]&&this[_0x2a3dba(0x1bc)][_0x2a3dba(0x1b1)]===Scene_Map;},Game_Temp[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x267)]=function(_0x232a5c){const _0x3a1112=_0x6e8c4d;this[_0x3a1112(0x20c)]=_0x232a5c;},Game_Temp[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x1ab)]=function(){return this['_lastPluginCommandInterpreter'];},VisuMZ[_0x6e8c4d(0x1d6)]['Game_Interpreter_PluginCommand']=Game_Interpreter[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x28c)],Game_Interpreter['prototype'][_0x6e8c4d(0x28c)]=function(_0x58e56d){const _0x3d9f77=_0x6e8c4d;return $gameTemp[_0x3d9f77(0x267)](this),VisuMZ[_0x3d9f77(0x1d6)]['Game_Interpreter_PluginCommand'][_0x3d9f77(0x1f8)](this,_0x58e56d);},Game_System[_0x6e8c4d(0x19f)]={'defaultMapEnable':VisuMZ[_0x6e8c4d(0x1d6)][_0x6e8c4d(0x247)][_0x6e8c4d(0x1ed)][_0x6e8c4d(0x26f)]},VisuMZ[_0x6e8c4d(0x1d6)][_0x6e8c4d(0x24e)]=Game_System[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x1eb)],Game_System[_0x6e8c4d(0x1cb)]['initialize']=function(){const _0x3fe5a5=_0x6e8c4d;VisuMZ[_0x3fe5a5(0x1d6)][_0x3fe5a5(0x24e)][_0x3fe5a5(0x1f8)](this),this[_0x3fe5a5(0x27c)]();},Game_System[_0x6e8c4d(0x1cb)]['initFullFieldRecovery']=function(){const _0x25ffeb=_0x6e8c4d;this[_0x25ffeb(0x226)]=Game_System[_0x25ffeb(0x19f)][_0x25ffeb(0x239)];},Game_System[_0x6e8c4d(0x1cb)]['canFullFieldRecovery']=function(){const _0xb27968=_0x6e8c4d;if(this[_0xb27968(0x226)]===undefined)this[_0xb27968(0x27c)]();return this[_0xb27968(0x226)];},Game_System[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x202)]=function(_0x17983e){const _0x181247=_0x6e8c4d;if(this[_0x181247(0x226)]===undefined)this[_0x181247(0x27c)]();this[_0x181247(0x226)]=_0x17983e;},VisuMZ[_0x6e8c4d(0x1d6)][_0x6e8c4d(0x1df)]=Game_Map['prototype'][_0x6e8c4d(0x1ee)],Game_Map[_0x6e8c4d(0x1cb)]['setup']=function(_0x4e36f3){const _0xae3b=_0x6e8c4d;VisuMZ['FullFieldRecovery']['Game_Map_setup'][_0xae3b(0x1f8)](this,_0x4e36f3),this[_0xae3b(0x1fc)]();},Game_Map['prototype']['setupFullFieldRecoveryNotetags']=function(){const _0x512761=_0x6e8c4d;this['_disableFullFieldRecovery']=![];const _0x1cea01=VisuMZ[_0x512761(0x1d6)][_0x512761(0x220)],_0x2f2681=$dataMap?$dataMap[_0x512761(0x268)]||'':'';_0x2f2681[_0x512761(0x21e)](_0x1cea01[_0x512761(0x1a3)])&&(this[_0x512761(0x275)]=!![]);},Game_Map[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x254)]=function(){const _0x170931=_0x6e8c4d;return this[_0x170931(0x275)];},Game_Action[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x269)]=function(_0x183f69){const _0x42a721=_0x6e8c4d;return this[_0x42a721(0x233)](_0x183f69)&&this[_0x42a721(0x1d3)](_0x183f69)&&this[_0x42a721(0x1f9)]();},Game_Action['prototype'][_0x6e8c4d(0x1f9)]=function(){const _0x4d7dd9=_0x6e8c4d,_0x1d933b=VisuMZ[_0x4d7dd9(0x1d6)]['RegExp'],_0x232193=this[_0x4d7dd9(0x260)]()[_0x4d7dd9(0x268)];if(_0x232193[_0x4d7dd9(0x21e)](_0x1d933b[_0x4d7dd9(0x1da)]))return!![];return![];},Game_Action[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x1d3)]=function(_0x2be74b){const _0x2c3db9=_0x6e8c4d;return this[_0x2c3db9(0x260)]()[_0x2c3db9(0x1e9)][_0x2c3db9(0x19c)](_0x4a0651=>this[_0x2c3db9(0x26a)](_0x2be74b,_0x4a0651));},Game_Action[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x26a)]=function(_0x1ef619,_0x17919d){const _0x427a02=_0x6e8c4d;switch(_0x17919d[_0x427a02(0x1e7)]){case Game_Action[_0x427a02(0x1b8)]:return _0x1ef619[_0x427a02(0x29e)](_0x17919d['dataId']);default:return![];}},Game_Party[_0x6e8c4d(0x19f)]={'stateHeal':VisuMZ[_0x6e8c4d(0x1d6)][_0x6e8c4d(0x247)][_0x6e8c4d(0x1ed)][_0x6e8c4d(0x264)],'hpHeal':VisuMZ[_0x6e8c4d(0x1d6)][_0x6e8c4d(0x247)][_0x6e8c4d(0x1ed)][_0x6e8c4d(0x1b6)],'mpHeal':VisuMZ[_0x6e8c4d(0x1d6)][_0x6e8c4d(0x247)][_0x6e8c4d(0x1ed)]['HealMp']},Game_Party['prototype'][_0x6e8c4d(0x266)]=function(){const _0x59075e=_0x6e8c4d;return this['fieldMembersNeedStateRecovery']()||this[_0x59075e(0x287)]()||this[_0x59075e(0x221)]();},Game_Party[_0x6e8c4d(0x1cb)]['hasAnyFieldRecoveryItems']=function(){const _0x216136=_0x6e8c4d;if(this['fieldMembersNeedStateRecovery']()){if(_0x216136(0x19a)!==_0x216136(0x19a))return _0x2e3289['FULL_FIELD_RECOVERY'][_0x216136(0x23c)];else{const _0x480bcb=DataManager[_0x216136(0x238)]();if(_0x480bcb[_0x216136(0x19c)](_0x3d439d=>this['numItems'](_0x3d439d)>0x0))return!![];}}if(this[_0x216136(0x287)]()){const _0x227cb9=DataManager[_0x216136(0x1e1)]();if(_0x227cb9['some'](_0x55b7b2=>this[_0x216136(0x1ea)](_0x55b7b2)>0x0))return!![];}if(this['fieldMembersNeedMpRecovery']()){if(_0x216136(0x207)===_0x216136(0x207)){const _0x40cf9d=DataManager['getFullFieldRecoveryMpItems']();if(_0x40cf9d[_0x216136(0x19c)](_0x4eb934=>this[_0x216136(0x1ea)](_0x4eb934)>0x0))return!![];}else return this[_0x216136(0x260)]()['effects'][_0x216136(0x19c)](_0x4e7805=>this[_0x216136(0x26a)](_0x5b9696,_0x4e7805));}return![];},Game_Party['prototype']['processFullFieldRecovery']=function(){const _0xe56a11=_0x6e8c4d;this[_0xe56a11(0x1e2)](),this[_0xe56a11(0x203)](),this[_0xe56a11(0x212)]();},Game_Party[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x193)]=function(_0x413c03){const _0x33777c=_0x6e8c4d;if(!Imported[_0x33777c(0x1aa)])return;if(!SceneManager[_0x33777c(0x23b)]())return;for(const _0x29dd32 of this['allMembers']()){if(!_0x29dd32)continue;_0x29dd32['_bypassFieldDamagePopup']=_0x413c03;if(_0x413c03)continue;const _0x4ecf7a=_0x29dd32[_0x33777c(0x24d)]();if(!_0x4ecf7a)continue;(_0x4ecf7a['hpAffected']&&_0x4ecf7a['hpDamage']!==0x0||_0x4ecf7a[_0x33777c(0x1ff)]!==0x0)&&VisuMZ[_0x33777c(0x1ba)][_0x33777c(0x209)](_0x29dd32);}};Imported[_0x6e8c4d(0x1aa)]&&(VisuMZ['FullFieldRecovery'][_0x6e8c4d(0x209)]=VisuMZ[_0x6e8c4d(0x1ba)][_0x6e8c4d(0x209)],VisuMZ[_0x6e8c4d(0x1ba)][_0x6e8c4d(0x209)]=function(_0x2863b4){const _0x18fd59=_0x6e8c4d;if(_0x2863b4&&_0x2863b4['_bypassFieldDamagePopup'])return;VisuMZ[_0x18fd59(0x1d6)]['StartDamagePopup']['call'](this,_0x2863b4);});;Game_Party['prototype']['processFullFieldStateRecovery']=function(){const _0x4c9093=_0x6e8c4d;if(!Game_Party['FULL_FIELD_RECOVERY'][_0x4c9093(0x1ac)])return;const _0x23971b=DataManager[_0x4c9093(0x238)]();for(const _0x6123e3 of _0x23971b){if('OrleU'!=='OrleU'){this[_0x4c9093(0x28e)]=this[_0x4c9093(0x28e)]||{};if(this[_0x4c9093(0x28e)]['mp']!==_0x9d776)return this[_0x4c9093(0x28e)]['mp'];return this[_0x4c9093(0x28e)]['mp']=this[_0x4c9093(0x198)](),this[_0x4c9093(0x28e)]['mp'];}else{if(!_0x6123e3)continue;this[_0x4c9093(0x21b)](_0x6123e3);}}},Game_Party[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x1f3)]=function(){const _0x2a1b55=_0x6e8c4d;if(!Game_Party[_0x2a1b55(0x19f)][_0x2a1b55(0x1ac)])return![];return this[_0x2a1b55(0x1a0)]()[_0x2a1b55(0x19c)](_0x38f0a0=>_0x38f0a0&&_0x38f0a0[_0x2a1b55(0x1fd)]&&_0x38f0a0['_states'][_0x2a1b55(0x237)]>0x0);},Game_Party['prototype'][_0x6e8c4d(0x21b)]=function(_0x2bceb7){const _0x3c9c06=_0x6e8c4d;if(this[_0x3c9c06(0x1ea)](_0x2bceb7)>0x0&&this['fieldMembersNeedStateRecovery']())for(const _0x3ced99 of this['allMembers']()){if(this['numItems'](_0x2bceb7)<=0x0)break;if(!_0x3ced99)continue;if(!_0x3ced99[_0x3c9c06(0x1fd)])continue;if(_0x3ced99[_0x3c9c06(0x1fd)][_0x3c9c06(0x237)]<=0x0)continue;const _0xdcf882=new Game_Action(_0x3ced99);_0xdcf882[_0x3c9c06(0x289)](_0x2bceb7);let _0x4693cc=![];const _0xe0280f=_0xdcf882[_0x3c9c06(0x1b3)]()?this[_0x3c9c06(0x1a0)]():[_0x3ced99];for(const _0x397c96 of _0xe0280f){if(!_0xdcf882[_0x3c9c06(0x269)](_0x397c96))continue;if(!_0x397c96[_0x3c9c06(0x1fd)])continue;if(_0x397c96[_0x3c9c06(0x1fd)][_0x3c9c06(0x237)]<=0x0)continue;for(let _0x25915d=0x0;_0x25915d<_0xdcf882[_0x3c9c06(0x1d5)]();_0x25915d++){_0xdcf882[_0x3c9c06(0x1b9)](_0x397c96),_0x4693cc=!![];}}if(_0x4693cc)_0x3ced99['useItem'](_0x2bceb7);}},Game_Party[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x203)]=function(){const _0x1ad4fe=_0x6e8c4d;if(!Game_Party['FULL_FIELD_RECOVERY']['hpHeal'])return;const _0x337d98=DataManager[_0x1ad4fe(0x1e1)]();for(const _0xedcd46 of _0x337d98){if(!_0xedcd46)continue;this[_0x1ad4fe(0x1f2)](_0xedcd46);}},Game_Party[_0x6e8c4d(0x1cb)]['fieldMembersNeedHpRecovery']=function(_0x4754de){const _0x2881be=_0x6e8c4d;if(!Game_Party[_0x2881be(0x19f)][_0x2881be(0x26b)])return![];const _0x306c06=_0x4754de?this[_0x2881be(0x1a0)]():this[_0x2881be(0x219)]();return _0x306c06[_0x2881be(0x19c)](_0x1bba9c=>_0x1bba9c&&_0x1bba9c[_0x2881be(0x1e3)]>_0x1bba9c['hp']);},Game_Party[_0x6e8c4d(0x1cb)]['processFullFieldHpRecoveryItem']=function(_0x4585e4){const _0xf27ade=_0x6e8c4d;this[_0xf27ade(0x193)](!![]),this[_0xf27ade(0x1cf)](_0x4585e4,![]),this[_0xf27ade(0x1cf)](_0x4585e4,!![]),this[_0xf27ade(0x193)](![]);},Game_Party[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x1cf)]=function(_0x15b2c5,_0x73e349){const _0x503049=_0x6e8c4d,_0x38aac6=_0x73e349?this[_0x503049(0x1a0)]():this[_0x503049(0x219)]();while(this[_0x503049(0x1ea)](_0x15b2c5)>0x0&&this[_0x503049(0x287)](_0x73e349)){for(const _0x595e2f of _0x38aac6){if(this[_0x503049(0x1ea)](_0x15b2c5)<=0x0)break;if(!_0x595e2f)continue;if(_0x595e2f[_0x503049(0x1e3)]===_0x595e2f['hp'])continue;const _0xac00be=new Game_Action(_0x595e2f);_0xac00be[_0x503049(0x289)](_0x15b2c5);const _0x29bed4=_0xac00be[_0x503049(0x1b3)]()?this[_0x503049(0x1a0)]():[_0x595e2f];for(const _0x2848e1 of _0x29bed4){if(_0x2848e1['mhp']===_0x2848e1['hp'])continue;const _0x2f2a54=_0x595e2f[_0x503049(0x24d)](),_0x1af0af=_0x2f2a54?_0x2f2a54[_0x503049(0x278)]:0x0;for(let _0x585537=0x0;_0x585537<_0xac00be[_0x503049(0x1d5)]();_0x585537++){if(_0x503049(0x225)!==_0x503049(0x1d7))_0xac00be['apply'](_0x2848e1);else return _0x8946e3['FULL_FIELD_RECOVERY']['stateItems']['map'](_0x234e8d=>_0x35cf6e[_0x234e8d])[_0x503049(0x286)](null)['remove'](_0x479ac8);}_0x2f2a54&&_0x595e2f[_0x503049(0x1c1)]&&(_0x2f2a54[_0x503049(0x278)]+=_0x1af0af);}_0x595e2f[_0x503049(0x21d)](_0x15b2c5);}}},Game_Party[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x212)]=function(){const _0x16a645=_0x6e8c4d;if(!Game_Party['FULL_FIELD_RECOVERY'][_0x16a645(0x227)])return;const _0x1d610b=DataManager[_0x16a645(0x218)]();for(const _0xc0248e of _0x1d610b){if(_0x16a645(0x1bb)!==_0x16a645(0x298)){if(!_0xc0248e)continue;this[_0x16a645(0x279)](_0xc0248e);}else{if(_0x365ec0['code']!==_0x4f8e62)return!![];}}},Game_Party[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x221)]=function(){const _0x385c2e=_0x6e8c4d;if(!Game_Party['FULL_FIELD_RECOVERY']['mpHeal'])return![];return this['allMembers']()['some'](_0x240814=>_0x240814&&_0x240814[_0x385c2e(0x1a5)]>_0x240814['mp']);},Game_Party[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x279)]=function(_0x323bf4){const _0x7ed5f4=_0x6e8c4d;this['bypassFrontviewUiFieldPopup'](!![]);while(this['numItems'](_0x323bf4)>0x0&&this[_0x7ed5f4(0x221)]()){if(_0x7ed5f4(0x1c0)!==_0x7ed5f4(0x290))for(const _0x183459 of this[_0x7ed5f4(0x1a0)]()){if(_0x7ed5f4(0x23d)===_0x7ed5f4(0x1c4)){const _0x11d3df=_0x46fa37(_0x6549cb['$1']);_0x11d3df!==_0x220d7f[_0x1c3fcf][_0x7ed5f4(0x1bd)]&&(_0x2bc75f('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x7ed5f4(0x263)](_0x4cda49,_0x11d3df)),_0x3395f1[_0x7ed5f4(0x1a1)]());}else{if(this[_0x7ed5f4(0x1ea)](_0x323bf4)<=0x0)break;if(!_0x183459)continue;if(_0x183459['mmp']===_0x183459['mp'])continue;const _0x4fb48a=new Game_Action(_0x183459);_0x4fb48a[_0x7ed5f4(0x289)](_0x323bf4);const _0x3bbe3a=_0x4fb48a[_0x7ed5f4(0x1b3)]()?this[_0x7ed5f4(0x1a0)]():[_0x183459];for(const _0x3f196e of _0x3bbe3a){if(_0x3f196e['mmp']===_0x3f196e['mp'])continue;const _0x58d719=_0x183459[_0x7ed5f4(0x24d)](),_0x2093cd=_0x58d719?_0x58d719['mpDamage']:0x0;for(let _0x4648b5=0x0;_0x4648b5<_0x4fb48a[_0x7ed5f4(0x1d5)]();_0x4648b5++){_0x4fb48a[_0x7ed5f4(0x1b9)](_0x3f196e);}_0x58d719&&_0x183459['_bypassFieldDamagePopup']&&(_0x58d719[_0x7ed5f4(0x1ff)]+=_0x2093cd);}_0x183459[_0x7ed5f4(0x21d)](_0x323bf4);}}else this['_lastPluginCommandInterpreter']=_0x589c6b;}this[_0x7ed5f4(0x193)](![]);},Scene_Map[_0x6e8c4d(0x19f)]={'shortcutKey':VisuMZ[_0x6e8c4d(0x1d6)]['Settings'][_0x6e8c4d(0x1ed)]['ShortcutKey'],'bgTypeMessage':VisuMZ[_0x6e8c4d(0x1d6)][_0x6e8c4d(0x247)][_0x6e8c4d(0x1ed)]['MsgWindow_BgType'],'bgTypeChoice':VisuMZ['FullFieldRecovery'][_0x6e8c4d(0x247)][_0x6e8c4d(0x1ed)][_0x6e8c4d(0x24f)],'animationID':VisuMZ[_0x6e8c4d(0x1d6)]['Settings'][_0x6e8c4d(0x1ed)][_0x6e8c4d(0x234)]},VisuMZ[_0x6e8c4d(0x1d6)][_0x6e8c4d(0x272)]=Scene_Map['prototype']['createAllWindows'],Scene_Map[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x20d)]=function(){const _0x56d7cd=_0x6e8c4d;this[_0x56d7cd(0x1f4)](),VisuMZ[_0x56d7cd(0x1d6)][_0x56d7cd(0x272)][_0x56d7cd(0x1f8)](this);},Scene_Map[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x1f4)]=function(){const _0x5e0af5=_0x6e8c4d;this[_0x5e0af5(0x22a)](),this[_0x5e0af5(0x25d)]();},Scene_Map[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x22a)]=function(){const _0x546436=_0x6e8c4d,_0x18a144=this[_0x546436(0x1f1)](),_0x35c1fd=new Window_FullFieldRecoveryMessage(_0x18a144);this[_0x546436(0x291)]=_0x35c1fd,this[_0x546436(0x214)](_0x35c1fd),_0x35c1fd[_0x546436(0x258)]=0x0,_0x35c1fd[_0x546436(0x194)](Scene_Map['FULL_FIELD_RECOVERY'][_0x546436(0x1de)]);},Scene_Map[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x1f1)]=function(){const _0x1c470b=_0x6e8c4d;if(VisuMZ[_0x1c470b(0x1d6)][_0x1c470b(0x247)]['General'][_0x1c470b(0x244)])return VisuMZ[_0x1c470b(0x1d6)][_0x1c470b(0x247)][_0x1c470b(0x1ed)][_0x1c470b(0x244)]['call'](this);const _0x5e39da=0x2d0,_0x5723df=this[_0x1c470b(0x27b)](0x3,!![]),_0x527565=Math[_0x1c470b(0x24c)]((Graphics[_0x1c470b(0x2a7)]-_0x5e39da)/0x2),_0xb2d190=Math[_0x1c470b(0x28f)]((Graphics[_0x1c470b(0x292)]-_0x5723df)/0x2);return new Rectangle(_0x527565,_0xb2d190,_0x5e39da,_0x5723df);},Scene_Map[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x25d)]=function(){const _0x2ca8ed=_0x6e8c4d,_0x1535d4=this[_0x2ca8ed(0x240)](),_0x1a4a63=new Window_FullFieldRecoveryChoice(_0x1535d4);this[_0x2ca8ed(0x222)]=_0x1a4a63,this[_0x2ca8ed(0x214)](_0x1a4a63),_0x1a4a63[_0x2ca8ed(0x258)]=0x0,_0x1a4a63[_0x2ca8ed(0x194)](Scene_Map[_0x2ca8ed(0x19f)][_0x2ca8ed(0x1c6)]),_0x1a4a63[_0x2ca8ed(0x228)]('heal',this['onFullFieldRecoveryHeal'][_0x2ca8ed(0x27d)](this)),_0x1a4a63[_0x2ca8ed(0x228)](_0x2ca8ed(0x26c),this[_0x2ca8ed(0x211)][_0x2ca8ed(0x27d)](this));},Scene_Map[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x240)]=function(){const _0x5a1eed=_0x6e8c4d,_0x31f7de=this[_0x5a1eed(0x291)];if(VisuMZ[_0x5a1eed(0x1d6)]['Settings']['General'][_0x5a1eed(0x1fb)])return VisuMZ[_0x5a1eed(0x1d6)][_0x5a1eed(0x247)][_0x5a1eed(0x1ed)][_0x5a1eed(0x1fb)][_0x5a1eed(0x1f8)](this,_0x31f7de);const _0x495774=0xc0,_0x377c35=this[_0x5a1eed(0x27b)](0x2,!![]),_0x300f7f=_0x31f7de['x']+_0x31f7de['width']-_0x495774,_0x57ad08=_0x31f7de['y']-_0x377c35;return new Rectangle(_0x300f7f,_0x57ad08,_0x495774,_0x377c35);},Scene_Map['prototype'][_0x6e8c4d(0x205)]=function(){const _0x3fe252=_0x6e8c4d;if(!$gameSystem[_0x3fe252(0x288)]())return![];if($gameMap[_0x3fe252(0x254)]())return![];SoundManager[_0x3fe252(0x232)]();if(this[_0x3fe252(0x291)]){if(_0x3fe252(0x2a8)==='JxKgT')this[_0x3fe252(0x291)][_0x3fe252(0x1ec)](),this[_0x3fe252(0x291)][_0x3fe252(0x245)]();else return _0x4e0f67[_0x3fe252(0x25f)]-_0x52613b['price'];}if(this[_0x3fe252(0x222)]){if(_0x3fe252(0x1d8)==='XjbFh')return _0x36cd4a[_0x3fe252(0x25f)]-_0x4ae83c[_0x3fe252(0x25f)];else this[_0x3fe252(0x222)]['open'](),this[_0x3fe252(0x222)][_0x3fe252(0x245)](),this[_0x3fe252(0x222)]['activate'](),this['_fullFieldRecoveryChoiceWindow']['selectFirstAvailable']();}this[_0x3fe252(0x206)]=![];},Scene_Map[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x21c)]=function(){const _0x4f7b73=_0x6e8c4d;this['_fullFieldRecoveryMessageWindow']&&this['_fullFieldRecoveryMessageWindow'][_0x4f7b73(0x1c5)](),this[_0x4f7b73(0x222)]&&(this[_0x4f7b73(0x222)][_0x4f7b73(0x1c5)](),this['_fullFieldRecoveryChoiceWindow'][_0x4f7b73(0x276)]()),this[_0x4f7b73(0x206)]=!![];},Scene_Map['prototype'][_0x6e8c4d(0x20f)]=function(){const _0xc23837=_0x6e8c4d;$gameParty[_0xc23837(0x199)](),SoundManager[_0xc23837(0x27e)](),this[_0xc23837(0x282)](),this[_0xc23837(0x21c)]();},Scene_Map[_0x6e8c4d(0x1cb)]['showFullFieldRecoveryAnimation']=function(){const _0x43490a=_0x6e8c4d,_0x134c30=Scene_Map[_0x43490a(0x19f)][_0x43490a(0x25a)];if(_0x134c30<=0x0)return;const _0x5ea652=[$gamePlayer];$gameTemp[_0x43490a(0x1a6)](_0x5ea652,_0x134c30);},Scene_Map['prototype'][_0x6e8c4d(0x211)]=function(){const _0x3116e9=_0x6e8c4d;SoundManager[_0x3116e9(0x195)](),this[_0x3116e9(0x21c)]();},VisuMZ[_0x6e8c4d(0x1d6)][_0x6e8c4d(0x296)]=Scene_Map[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x1d2)],Scene_Map[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x1d2)]=function(){const _0x198a04=_0x6e8c4d;VisuMZ[_0x198a04(0x1d6)]['Scene_Map_updateMain'][_0x198a04(0x1f8)](this),this['updateFullFieldRecoveryShortcutKey']();},Scene_Map[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x20b)]=function(){const _0x36f629=_0x6e8c4d;if($gameMessage[_0x36f629(0x204)]())return;if($gameMap[_0x36f629(0x1a4)]())return;if(!this[_0x36f629(0x206)])return;if(!SceneManager[_0x36f629(0x2a5)]())return;const _0x5f5338=Scene_Map[_0x36f629(0x19f)][_0x36f629(0x1af)];Input[_0x36f629(0x27a)](_0x5f5338)&&('FUSWa'!==_0x36f629(0x21f)?this[_0x36f629(0x205)]():this['drawTextEx'](_0x3e2930,_0x430638['x']+_0x47f6fb[_0x36f629(0x1c9)]-_0x59d0ef,_0x175ae2['y'],_0x239856));};function Window_FullFieldRecoveryMessage(){const _0x5cbd83=_0x6e8c4d;this[_0x5cbd83(0x1eb)](...arguments);}Window_FullFieldRecoveryMessage[_0x6e8c4d(0x1cb)]=Object[_0x6e8c4d(0x1dd)](Window_Base['prototype']),Window_FullFieldRecoveryMessage['prototype'][_0x6e8c4d(0x1b1)]=Window_FullFieldRecoveryMessage,Window_FullFieldRecoveryMessage[_0x6e8c4d(0x1cb)]['initialize']=function(_0x5e8337){const _0x39e601=_0x6e8c4d;Window_Base[_0x39e601(0x1cb)][_0x39e601(0x1eb)][_0x39e601(0x1f8)](this,_0x5e8337),this[_0x39e601(0x245)]();},Window_FullFieldRecoveryMessage[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x245)]=function(){const _0x317e4b=_0x6e8c4d;this[_0x317e4b(0x1ce)][_0x317e4b(0x1c2)]();const _0x4d7843=this['getMessageText'](),_0x2120fc=this[_0x317e4b(0x22f)](_0x4d7843),_0x2562ec=Math[_0x317e4b(0x24c)]((this['innerWidth']-_0x2120fc[_0x317e4b(0x1c9)])/0x2),_0x9b6b81=Math[_0x317e4b(0x24c)]((this[_0x317e4b(0x29f)]-_0x2120fc[_0x317e4b(0x277)])/0x2);this[_0x317e4b(0x27f)](_0x4d7843,_0x2562ec,_0x9b6b81);},Window_FullFieldRecoveryMessage[_0x6e8c4d(0x1cb)]['getMessageText']=function(){const _0x489d67=_0x6e8c4d;if($gameParty[_0x489d67(0x266)]())return _0x489d67(0x29b)!=='zHxAT'?_0x5ba15f[_0x489d67(0x25f)]!==_0x18fa15['price']&&_0x1a1550[_0x489d67(0x25f)]>0x0&&_0x5cd601[_0x489d67(0x25f)]>0x0?_0x35984e[_0x489d67(0x25f)]-_0x165b3b[_0x489d67(0x25f)]:_0x58065b['id']-_0x11d062['id']:$gameParty['hasAnyFieldRecoveryItems']()?TextManager[_0x489d67(0x19f)][_0x489d67(0x23c)]:TextManager[_0x489d67(0x19f)][_0x489d67(0x285)];return TextManager[_0x489d67(0x19f)][_0x489d67(0x1c3)];};function Window_FullFieldRecoveryChoice(){const _0x1b4196=_0x6e8c4d;this[_0x1b4196(0x1eb)](...arguments);}Window_FullFieldRecoveryChoice[_0x6e8c4d(0x1cb)]=Object[_0x6e8c4d(0x1dd)](Window_Command[_0x6e8c4d(0x1cb)]),Window_FullFieldRecoveryChoice[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x1b1)]=Window_FullFieldRecoveryChoice,Window_FullFieldRecoveryChoice[_0x6e8c4d(0x28d)]={'textAlign':VisuMZ[_0x6e8c4d(0x1d6)][_0x6e8c4d(0x247)][_0x6e8c4d(0x1ed)][_0x6e8c4d(0x1f0)]},Window_FullFieldRecoveryChoice[_0x6e8c4d(0x1cb)]['initialize']=function(_0x928a53){const _0x5ea509=_0x6e8c4d;Window_Command[_0x5ea509(0x1cb)][_0x5ea509(0x1eb)]['call'](this,_0x928a53);},Window_FullFieldRecoveryChoice[_0x6e8c4d(0x1cb)]['makeCommandList']=function(){const _0x330ddc=_0x6e8c4d;this['addHealCommand'](),this[_0x330ddc(0x259)]();},Window_FullFieldRecoveryChoice[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x252)]=function(){const _0x75bf39=_0x6e8c4d;this['select'](this[_0x75bf39(0x280)](0x0)?0x0:0x1);},Window_FullFieldRecoveryChoice[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x1a8)]=function(){const _0x387529=_0x6e8c4d,_0x1c5d83=TextManager[_0x387529(0x19f)]['optionHeal'],_0x504995=_0x387529(0x1b5),_0x6a025d=$gameParty[_0x387529(0x266)]()&&$gameParty[_0x387529(0x20e)]();this[_0x387529(0x1c8)](_0x1c5d83,_0x504995,_0x6a025d);},Window_FullFieldRecoveryChoice[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x259)]=function(){const _0x196cac=_0x6e8c4d,_0x3ac02e=TextManager[_0x196cac(0x19f)]['optionCancel'],_0x4c9ed6='cancel',_0x1b63ac=!![];this[_0x196cac(0x1c8)](_0x3ac02e,_0x4c9ed6,_0x1b63ac);},Window_FullFieldRecoveryChoice[_0x6e8c4d(0x1cb)]['itemTextAlign']=function(){const _0x2fd50f=_0x6e8c4d;return Window_FullFieldRecoveryChoice[_0x2fd50f(0x28d)][_0x2fd50f(0x293)];},Window_FullFieldRecoveryChoice[_0x6e8c4d(0x1cb)][_0x6e8c4d(0x28b)]=function(_0x194607){const _0x592127=_0x6e8c4d,_0x2236e6=this[_0x592127(0x213)](_0x194607),_0x5c517b=this['commandName'](_0x194607),_0x316270=this[_0x592127(0x22f)](_0x5c517b)[_0x592127(0x1c9)];this[_0x592127(0x1dc)](this[_0x592127(0x280)](_0x194607));const _0x392305=this[_0x592127(0x22b)]();if(_0x392305===_0x592127(0x23f))this[_0x592127(0x27f)](_0x5c517b,_0x2236e6['x']+_0x2236e6[_0x592127(0x1c9)]-_0x316270,_0x2236e6['y'],_0x316270);else{if(_0x392305===_0x592127(0x200)){const _0x6b79ce=_0x2236e6['x']+Math[_0x592127(0x24c)]((_0x2236e6[_0x592127(0x1c9)]-_0x316270)/0x2);this[_0x592127(0x27f)](_0x5c517b,_0x6b79ce,_0x2236e6['y'],_0x316270);}else this[_0x592127(0x27f)](_0x5c517b,_0x2236e6['x'],_0x2236e6['y'],_0x316270);}},Window_FullFieldRecoveryChoice[_0x6e8c4d(0x1cb)]['playOkSound']=function(){};