//=============================================================================
// VisuStella MZ - Shop Batches
// VisuMZ_3_ShopBatches.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ShopBatches = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ShopBatches = VisuMZ.ShopBatches || {};
VisuMZ.ShopBatches.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.02] [ShopBatches]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Shop_Batches_VisuStella_MZ
 * @base VisuMZ_1_ItemsEquipsCore
 * @orderAfter VisuMZ_1_ItemsEquipsCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Sometimes, you want shops to have promotional sales when certain items are
 * bought in batches, bundles, or goodie bags. This plugin allows that to
 * happen. Create a batch item that can be bought, and when the player acquires
 * it, a bunch of items are acquired at the same time.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Simple notetag system that allows you to create shop batch items.
 * * Batch items can include items, weapons, and armors of any quantity.
 * * When selected, batch items will show the contents of what items will be
 *   acquired when bought.
 * * Batch items will disable purchase when all items are maxed in the player
 *   party's inventory.
 * * Adjust the vocabulary settings to make the visible text appear the way you
 *   want for your game.
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
 * Batch Item Restrictions
 * 
 * Batch items cannot list proxy items from the Items & Equips Core. This is
 * because there's simply no point in doing so and that listing the real item
 * itself is better.
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
 * VisuMZ_1_ItemsEquipsCore
 * 
 * On buy/sell effects will NOT apply for the items within the batch. This
 * means if a Potion is included in a batch, and that Potion item has a notetag
 * that would turn on a switch through the <Buy Turn On Switch: x> notetag,
 * these effects will NOT take place. Instead, put that effect on the actual
 * batch item itself.
 * 
 * ---
 * 
 * VisuMZ_2_ShopCommonEvents
 * 
 * On buy/sell shop Common Events will NOT take effect for items within the
 * batch. This means if a Potion is included in a batch, and that Potion item
 * has a notetag that would run a Common Event through a notetag such as
 * <Repeat Buy Common Event: id>, that effect will NOT take place. Instead, put
 * that notetag effect on the actual batch item itself.
 * 
 * ---
 * 
 * VisuMZ_3_ShopListUnlock
 * 
 * If a batch item needs to be unlocked via the VisuStella MZ Shop List Unlock
 * feature first, the status window will show the unlock requirements first.
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
 * === Batch-Related Notetags ===
 * 
 * ---
 *
 * <Shop Batch>
 *  listing
 *  listing
 *  listing
 * </Shop Batch>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Creates a list of items, weapons, and armors that the player will gain
 *   when this batch object is bought.
 * - Proxy items, weapons, or armors cannot be listed and will be bypassed.
 * - This item, weapon, or armor cannot be sold if all of the listed items,
 *   weapons, or armors are at max quantity within the party's inventory.
 * - The listed items will NOT utilize any buy/sell effects for the individual
 *   listed items themselves.
 * - Replace 'listing' with any of the listing types found below:
 * 
 *     Item id
 *     Item name
 *     Weapon id
 *     Weapon name
 *     Armor id
 *     Armor name
 * 
 *     Item id: quantity
 *     Item name: quantity
 *     Weapon id: quantity
 *     Weapon name: quantity
 *     Armor id: quantity
 *     Armor name: quantity
 * 
 *   - Replace 'id' with a number representing the ID of the item, weapon, or
 *     armor that is to be listed.
 *   - Replace 'name' with the associated item, weapon, or armor's name.
 *   - Replace 'quantity' with a number representing the number of items,
 *     weapons, or armors that will be acquired when the batch item is bought.
 *     - If the variant without 'quantity' is used, quantity will default to 1.
 * 
 *   Examples:
 * 
 *   ---
 * 
 *   <Shop Batch>
 *    Item Potion: 10
 *    Item Super Potion: 5
 *    Weapon Short Sword: 3
 *    Weapon Long Sword: 2
 *    Armor Linen Clothing: 4
 *    Armor Cloth Armor: 3
 *   </Shop Batch>
 * 
 *   ---
 * 
 *   <Shop Batch>
 *    Item 7: 10
 *    Item 8: 5
 *    Weapon 1: 3
 *    Weapon 2: 2
 *    Armor 2: 4
 *    Armor 8: 3
 *   </Shop Batch>
 * 
 *   ---
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
 * Status Window
 * 
 *   Title Text:
 *   - Text that appears in the title for shop batches.
 *   - Text codes allowed.
 * 
 *   Item Name Format:
 *   - Text format used for item names.
 *   - %1 - Item Name. %2 - Item Icon.
 * 
 *      Allow Name Colors?:
 *      - If item names have custom colors, add them?
 *      - Used for items with <Color: x> notetag.
 *      - Also used for items with <Color: #rrggbb> notetag.
 *        - This one requires VisuMZ_1_MessageCore to be installed.
 * 
 *   Quantity Format:
 *   - Text format used for batch quantity.
 *   - %1 - Gain Quantity. %2 - In Party Inventory.
 * 
 *     Max Quantity Format:
 *     - Text format used for max quantity.
 *     - %1 - In Party Inventory.
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
 * Version 1.02: February 15, 2024
 * * Bug Fixes!
 * ** Fixed a bug that allowed the player to buy shop batches in bulk while
 *    ignoring price constraints. Fix made by Arisu.
 * 
 * Version 1.01: December 14, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Updated default Plugin Parameter settings.
 * * New Feature!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Vocabulary > Allow Name Colors?
 * **** If item names have custom colors, add them?
 * **** Used for items with <Color: x> notetag.
 * **** Also used for items with <Color: #rrggbb> notetag.
 * ***** This one requires VisuMZ_1_MessageCore to be installed.
 * 
 * Version 1.00 Official Release Date: November 29, 2023
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
 * @param ShopBatches
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"Window_ShopStatus":"","batchContents:str":"\\C[16]Batch Contents","batchItemNameFmt:str":"%2%1","batchNumberFmt:str":"×%1/%2","batchHaveMaxFmt:str":"\\C[24]%1"}
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
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param Window_ShopStatus
 * @text Status Window
 *
 * @param batchContents:str
 * @text Title Text
 * @parent Window_ShopStatus
 * @desc Text that appears in the title for shop batches.
 * Text codes allowed.
 * @default \C[16]Batch Contents
 *
 * @param batchItemNameFmt:str
 * @text Item Name Format
 * @parent Window_ShopStatus
 * @desc Text format used for item names.
 * %1 - Item Name. %2 - Item Icon.
 * @default %2%1
 *
 * @param colorItemName:eval
 * @text Allow Name Colors?
 * @parent batchItemNameFmt:str
 * @type boolean
 * @on Use
 * @off Don't
 * @desc If item names have custom colors, add them?
 * Used for items with <Color: x> notetag.
 * @default true
 *
 * @param batchNumberFmt:str
 * @text Quantity Format
 * @parent Window_ShopStatus
 * @desc Text format used for batch quantity.
 * %1 - Gain Quantity. %2 - In Party Inventory.
 * @default ×%1/%2
 *
 * @param batchHaveMaxFmt:str
 * @text Max Quantity Format
 * @parent batchNumberFmt:str
 * @desc Text format used for max quantity.
 * %1 - In Party Inventory.
 * @default \C[24]%1
 *
 */
//=============================================================================

const _0x319662=_0x25a9;(function(_0xffd77f,_0x40746c){const _0x38a63a=_0x25a9,_0x597da3=_0xffd77f();while(!![]){try{const _0x39ac91=parseInt(_0x38a63a(0xcd))/0x1*(parseInt(_0x38a63a(0xf8))/0x2)+parseInt(_0x38a63a(0x121))/0x3*(parseInt(_0x38a63a(0x10b))/0x4)+parseInt(_0x38a63a(0xc7))/0x5+-parseInt(_0x38a63a(0xd0))/0x6+-parseInt(_0x38a63a(0x11e))/0x7+parseInt(_0x38a63a(0xe5))/0x8*(parseInt(_0x38a63a(0x119))/0x9)+-parseInt(_0x38a63a(0xf4))/0xa;if(_0x39ac91===_0x40746c)break;else _0x597da3['push'](_0x597da3['shift']());}catch(_0x36e30b){_0x597da3['push'](_0x597da3['shift']());}}}(_0x3292,0x83a70));function _0x25a9(_0x2a34a7,_0x402558){const _0x329230=_0x3292();return _0x25a9=function(_0x25a9d2,_0x5ba3fc){_0x25a9d2=_0x25a9d2-0x9c;let _0x2c86b7=_0x329230[_0x25a9d2];return _0x2c86b7;},_0x25a9(_0x2a34a7,_0x402558);}var label='ShopBatches',tier=tier||0x0,dependencies=[_0x319662(0x100)],pluginData=$plugins[_0x319662(0xca)](function(_0x19f710){const _0x62470a=_0x319662;return _0x19f710['status']&&_0x19f710[_0x62470a(0xc6)][_0x62470a(0x126)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ[_0x319662(0x10e)]=function(_0x10642c,_0xb8fe1e){const _0x5d2370=_0x319662;for(const _0x2dcafe in _0xb8fe1e){if(_0x2dcafe[_0x5d2370(0xf2)](/(.*):(.*)/i)){const _0x94eab8=String(RegExp['$1']),_0x307237=String(RegExp['$2'])[_0x5d2370(0xdb)]()[_0x5d2370(0xb5)]();let _0x3a74bb,_0x31eda9,_0x247d58;switch(_0x307237){case _0x5d2370(0x116):_0x3a74bb=_0xb8fe1e[_0x2dcafe]!==''?Number(_0xb8fe1e[_0x2dcafe]):0x0;break;case _0x5d2370(0x111):_0x31eda9=_0xb8fe1e[_0x2dcafe]!==''?JSON[_0x5d2370(0xd2)](_0xb8fe1e[_0x2dcafe]):[],_0x3a74bb=_0x31eda9[_0x5d2370(0xf7)](_0x2fd1e0=>Number(_0x2fd1e0));break;case'EVAL':_0x3a74bb=_0xb8fe1e[_0x2dcafe]!==''?eval(_0xb8fe1e[_0x2dcafe]):null;break;case _0x5d2370(0xef):_0x31eda9=_0xb8fe1e[_0x2dcafe]!==''?JSON['parse'](_0xb8fe1e[_0x2dcafe]):[],_0x3a74bb=_0x31eda9[_0x5d2370(0xf7)](_0x40186f=>eval(_0x40186f));break;case _0x5d2370(0x113):_0x3a74bb=_0xb8fe1e[_0x2dcafe]!==''?JSON[_0x5d2370(0xd2)](_0xb8fe1e[_0x2dcafe]):'';break;case _0x5d2370(0xde):_0x31eda9=_0xb8fe1e[_0x2dcafe]!==''?JSON[_0x5d2370(0xd2)](_0xb8fe1e[_0x2dcafe]):[],_0x3a74bb=_0x31eda9[_0x5d2370(0xf7)](_0xbf052=>JSON[_0x5d2370(0xd2)](_0xbf052));break;case'FUNC':_0x3a74bb=_0xb8fe1e[_0x2dcafe]!==''?new Function(JSON[_0x5d2370(0xd2)](_0xb8fe1e[_0x2dcafe])):new Function(_0x5d2370(0xee));break;case'ARRAYFUNC':_0x31eda9=_0xb8fe1e[_0x2dcafe]!==''?JSON[_0x5d2370(0xd2)](_0xb8fe1e[_0x2dcafe]):[],_0x3a74bb=_0x31eda9[_0x5d2370(0xf7)](_0x39f965=>new Function(JSON[_0x5d2370(0xd2)](_0x39f965)));break;case'STR':_0x3a74bb=_0xb8fe1e[_0x2dcafe]!==''?String(_0xb8fe1e[_0x2dcafe]):'';break;case _0x5d2370(0xf1):_0x31eda9=_0xb8fe1e[_0x2dcafe]!==''?JSON[_0x5d2370(0xd2)](_0xb8fe1e[_0x2dcafe]):[],_0x3a74bb=_0x31eda9[_0x5d2370(0xf7)](_0x46e9fa=>String(_0x46e9fa));break;case _0x5d2370(0xc4):_0x247d58=_0xb8fe1e[_0x2dcafe]!==''?JSON[_0x5d2370(0xd2)](_0xb8fe1e[_0x2dcafe]):{},_0x3a74bb=VisuMZ['ConvertParams']({},_0x247d58);break;case _0x5d2370(0xe6):_0x31eda9=_0xb8fe1e[_0x2dcafe]!==''?JSON[_0x5d2370(0xd2)](_0xb8fe1e[_0x2dcafe]):[],_0x3a74bb=_0x31eda9[_0x5d2370(0xf7)](_0x3353c8=>VisuMZ[_0x5d2370(0x10e)]({},JSON['parse'](_0x3353c8)));break;default:continue;}_0x10642c[_0x94eab8]=_0x3a74bb;}}return _0x10642c;},(_0x2460a7=>{const _0x313b62=_0x319662,_0x5135d2=_0x2460a7[_0x313b62(0xeb)];for(const _0x30e3c0 of dependencies){if(!Imported[_0x30e3c0]){alert(_0x313b62(0xf9)[_0x313b62(0xed)](_0x5135d2,_0x30e3c0)),SceneManager[_0x313b62(0xf5)]();break;}}const _0x3b08ed=_0x2460a7[_0x313b62(0xc6)];if(_0x3b08ed['match'](/\[Version[ ](.*?)\]/i)){if(_0x313b62(0xfb)===_0x313b62(0xa6))_0xe07daf=_0x313b62(0x10f)['format'](_0x352b8e['id']);else{const _0x5f356c=Number(RegExp['$1']);_0x5f356c!==VisuMZ[label][_0x313b62(0x118)]&&(alert(_0x313b62(0x9e)[_0x313b62(0xed)](_0x5135d2,_0x5f356c)),SceneManager[_0x313b62(0xf5)]());}}if(_0x3b08ed[_0x313b62(0xf2)](/\[Tier[ ](\d+)\]/i)){const _0x3ba884=Number(RegExp['$1']);_0x3ba884<tier?(alert(_0x313b62(0xfa)['format'](_0x5135d2,_0x3ba884,tier)),SceneManager[_0x313b62(0xf5)]()):tier=Math[_0x313b62(0xa5)](_0x3ba884,tier);}VisuMZ[_0x313b62(0x10e)](VisuMZ[label][_0x313b62(0xff)],_0x2460a7[_0x313b62(0xe4)]);})(pluginData);if(VisuMZ[_0x319662(0xa3)]['version']<1.47){let text='';text+='VisuMZ_1_ItemsEquipsCore\x20needs\x20to\x20be\x20updated\x20',text+=_0x319662(0x106),alert(text),SceneManager[_0x319662(0xf5)]();}VisuMZ[_0x319662(0x122)][_0x319662(0xe9)]={'BatchWrap':/<SHOP BATCH>\s*([\s\S]*)\s*<\/SHOP BATCH>/i},DataManager['hasShopBatchItems']=function(_0x25994d){return this['getShopBatchItems'](_0x25994d)!==null;},DataManager['getShopBatchItems']=function(_0x6b8e83){const _0x458543=_0x319662;if(!_0x6b8e83)return null;if(this['isSkill'](_0x6b8e83))return null;if(this[_0x458543(0xa2)](_0x6b8e83))return null;let _0x5d7d3a='';if(DataManager[_0x458543(0x11a)](_0x6b8e83))_0x5d7d3a=_0x458543(0xad)[_0x458543(0xed)](_0x6b8e83['id']);else{if(DataManager[_0x458543(0x114)](_0x6b8e83))_0x5d7d3a='weapon-%1'['format'](_0x6b8e83['id']);else{if(DataManager[_0x458543(0x115)](_0x6b8e83)){if('ZNgam'===_0x458543(0x102)){const _0x1021ba=this[_0x458543(0x10c)](_0x7a1b96),_0x4f60c3=this[_0x458543(0xa7)](_0x5a5419),_0x394e00=_0x1021ba-_0x4f60c3;if(_0x394e00>0x0){let _0x14dbd7=_0x394e00/_0x3d3fd5;_0x14dbd7=_0x3be0dd[_0x458543(0xb2)](_0x14dbd7),_0x55b4e7=_0x171648[_0x458543(0xa5)](_0x37de77,_0x14dbd7);}}else _0x5d7d3a=_0x458543(0x10f)[_0x458543(0xed)](_0x6b8e83['id']);}else return null;}}DataManager['_cache_getShopBatchItems']=DataManager[_0x458543(0xa4)]||{};if(DataManager[_0x458543(0xa4)][_0x5d7d3a]!==undefined){if(_0x458543(0xcb)!==_0x458543(0xcb)){if(_0x205334[_0x458543(0xb7)](_0xece310)){if(_0x2e691a[_0x458543(0xd8)](_0x460afa))return;}return _0x2e081d[_0x458543(0x122)][_0x458543(0x108)][_0x458543(0x11b)](this,_0x4f0b8b);}else return DataManager[_0x458543(0xa4)][_0x5d7d3a];}let _0x2d7b60=![],_0xe18e99={};const _0x4ddfc=VisuMZ['ShopBatches']['RegExp'],_0x444509=_0x6b8e83[_0x458543(0xc5)]||'';if(_0x444509['match'](_0x4ddfc[_0x458543(0xae)])){const _0x37501a=String(RegExp['$1'])[_0x458543(0xe8)](/[\r\n]+/)[_0x458543(0x11c)]('');_0xe18e99={'items':{},'weapons':{},'armors':{}};for(const _0x2355a2 of _0x37501a){if(_0x2355a2[_0x458543(0xf2)](/ITEM[ ](.*):[ ](\d+)/i)){const _0x955ccf=String(RegExp['$1']),_0x3f65bf=Math['max'](0x1,Number(RegExp['$2'])),_0x2c72fc=/^\d+$/['test'](_0x955ccf),_0x336a10=_0x2c72fc?_0x955ccf:this['getItemIdWithName'](_0x955ccf);_0xe18e99[_0x458543(0xdc)][_0x336a10]=_0x3f65bf,_0x2d7b60=!![];}else{if(_0x2355a2[_0x458543(0xf2)](/ITEM[ ](.*)/i)){const _0x321dec=String(RegExp['$1']),_0x125b40=/^\d+$/[_0x458543(0xc1)](_0x321dec),_0x1c06dd=_0x125b40?_0x321dec:this[_0x458543(0xab)](_0x321dec);_0xe18e99['items'][_0x1c06dd]=0x1,_0x2d7b60=!![];}}if(_0x2355a2[_0x458543(0xf2)](/WEAPON[ ](.*):[ ](\d+)/i)){if('ewOoo'===_0x458543(0x109)){const _0x2c05f7=String(RegExp['$1']),_0x439dec=Math[_0x458543(0xa5)](0x1,Number(RegExp['$2'])),_0x16a6fc=/^\d+$/[_0x458543(0xc1)](_0x2c05f7),_0x1a4c81=_0x16a6fc?_0x2c05f7:this['getWeaponIdWithName'](_0x2c05f7);_0xe18e99[_0x458543(0xac)][_0x1a4c81]=_0x439dec,_0x2d7b60=!![];}else{let _0xe63ca0=_0x44b7f8/_0x14af7a;_0xe63ca0=_0xd5fcb8[_0x458543(0xb2)](_0xe63ca0),_0x54599e=_0x11abe2[_0x458543(0xa5)](_0x4b2ded,_0xe63ca0);}}else{if(_0x2355a2[_0x458543(0xf2)](/WEAPON[ ](.*)/i)){if(_0x458543(0x110)===_0x458543(0x110)){const _0x34f798=String(RegExp['$1']),_0x41d9a9=/^\d+$/['test'](_0x34f798),_0x562643=_0x41d9a9?_0x34f798:this[_0x458543(0xb6)](_0x34f798);_0xe18e99[_0x458543(0xac)][_0x562643]=0x1,_0x2d7b60=!![];}else _0x1084d7(_0x458543(0x9e)['format'](_0x506f23,_0x184c80)),_0x47dd8c['exit']();}}if(_0x2355a2[_0x458543(0xf2)](/ARMOR[ ](.*):[ ](\d+)/i)){const _0x23b95c=String(RegExp['$1']),_0x386284=Math[_0x458543(0xa5)](0x1,Number(RegExp['$2'])),_0x53ffe0=/^\d+$/[_0x458543(0xc1)](_0x23b95c),_0x26b8fd=_0x53ffe0?_0x23b95c:this[_0x458543(0x11f)](_0x23b95c);_0xe18e99[_0x458543(0xbf)][_0x26b8fd]=_0x386284,_0x2d7b60=!![];}else{if(_0x2355a2[_0x458543(0xf2)](/ARMOR[ ](.*)/i)){if(_0x458543(0xe0)!==_0x458543(0xfd)){const _0x1b1cc9=String(RegExp['$1']),_0x35a6fa=/^\d+$/[_0x458543(0xc1)](_0x1b1cc9),_0x31db26=_0x35a6fa?_0x1b1cc9:this[_0x458543(0x11f)](_0x1b1cc9);_0xe18e99['armors'][_0x31db26]=0x1,_0x2d7b60=!![];}else _0x31f394(_0x458543(0xfa)[_0x458543(0xed)](_0x2a50ac,_0x337029,_0x37794d)),_0x315f3e[_0x458543(0xf5)]();}}}}if(!_0x2d7b60)_0xe18e99=null;return DataManager[_0x458543(0xa4)][_0x5d7d3a]=_0xe18e99,DataManager[_0x458543(0xa4)][_0x5d7d3a];},TextManager[_0x319662(0xf3)]={'batchContents':VisuMZ[_0x319662(0x122)][_0x319662(0xff)]['Vocab']['batchContents']??_0x319662(0x112),'batchItemNameFmt':VisuMZ[_0x319662(0x122)]['Settings']['Vocab']['batchItemNameFmt']??_0x319662(0x124),'batchNumberFmt':VisuMZ[_0x319662(0x122)][_0x319662(0xff)][_0x319662(0x107)][_0x319662(0xd6)]??_0x319662(0xda),'batchHaveMaxFmt':VisuMZ[_0x319662(0x122)][_0x319662(0xff)]['Vocab']['batchHaveMaxFmt']??_0x319662(0x117)},VisuMZ[_0x319662(0x122)][_0x319662(0x9d)]=Game_Party[_0x319662(0xf0)][_0x319662(0xa7)],Game_Party[_0x319662(0xf0)][_0x319662(0xa7)]=function(_0x2f3bc1){const _0x96b1d3=_0x319662;if(DataManager[_0x96b1d3(0xb7)](_0x2f3bc1))return 0x0;return VisuMZ[_0x96b1d3(0x122)][_0x96b1d3(0x9d)][_0x96b1d3(0x11b)](this,_0x2f3bc1);},VisuMZ['ShopBatches'][_0x319662(0xcc)]=Game_Party[_0x319662(0xf0)][_0x319662(0xe2)],Game_Party[_0x319662(0xf0)][_0x319662(0xe2)]=function(_0x47b290,_0x319a79,_0x9400e7){const _0x2e580e=_0x319662;if(DataManager[_0x2e580e(0xb7)](_0x47b290)&&_0x319a79>0x0){if(_0x2e580e(0xa1)===_0x2e580e(0xa1))this['gainBatchItems'](_0x47b290,_0x319a79);else{if(!_0x41c571)return![];if(!_0x14636a[_0x2e580e(0xaf)][_0x2e580e(0xbd)])return![];if(_0x2b3769['VisuMZ_3_ShopListUnlock']){if(this[_0x2e580e(0xdd)](_0x5eef31))return![];}return _0x54e5e1[_0x2e580e(0xb7)](_0x35849c);}}else VisuMZ['ShopBatches']['Game_Party_gainItem'][_0x2e580e(0x11b)](this,_0x47b290,_0x319a79,_0x9400e7);},Game_Party[_0x319662(0xf0)][_0x319662(0xc8)]=function(_0x29188a,_0x2c3c72){const _0x1539d1=_0x319662,_0x1d1345=DataManager[_0x1539d1(0x9c)](_0x29188a),_0x4796a0=[_0x1539d1(0xdc),_0x1539d1(0xac),_0x1539d1(0xbf)];for(const _0x1c3f52 of _0x4796a0){const _0x3f4dda=_0x1d1345[_0x1c3f52];for(const _0x526fab in _0x3f4dda){const _0x51fd57=Number(_0x526fab),_0x5f0a8e=(_0x3f4dda[_0x526fab]||0x1)*_0x2c3c72;let _0x5bced6=null;if(_0x1c3f52==='items')_0x5bced6=$dataItems[_0x51fd57];if(_0x1c3f52===_0x1539d1(0xac))_0x5bced6=$dataWeapons[_0x51fd57];if(_0x1c3f52===_0x1539d1(0xbf))_0x5bced6=$dataArmors[_0x51fd57];if(DataManager['isProxyItem'](_0x5bced6))continue;_0x5bced6&&(this[_0x1539d1(0xe2)](_0x5bced6,_0x5f0a8e),![]&&(_0x1539d1(0xbb)!=='XmoKJ'?(this['_item']=_0x5e7d02,this[_0x1539d1(0xc3)][_0x1539d1(0xaa)](),this[_0x1539d1(0xfe)][_0x1539d1(0xaa)](),this[_0x1539d1(0xec)](_0xce99ad)):console[_0x1539d1(0xf6)](_0x5bced6['name']+'\x20x'+_0x5f0a8e)));}}},Game_Party[_0x319662(0xf0)][_0x319662(0xd8)]=function(_0x4b5236){const _0x28b66f=_0x319662,_0x52c485=DataManager[_0x28b66f(0x9c)](_0x4b5236),_0x214ed3=[_0x28b66f(0xdc),_0x28b66f(0xac),'armors'];for(const _0x2f6f08 of _0x214ed3){const _0x13ad4c=_0x52c485[_0x2f6f08];for(const _0x31d39f in _0x13ad4c){if('FFCMH'!==_0x28b66f(0x123)){const _0x21d417=Number(_0x31d39f);let _0x5efe60=null;if(_0x2f6f08===_0x28b66f(0xdc))_0x5efe60=$dataItems[_0x21d417];if(_0x2f6f08===_0x28b66f(0xac))_0x5efe60=$dataWeapons[_0x21d417];if(_0x2f6f08==='armors')_0x5efe60=$dataArmors[_0x21d417];if(DataManager[_0x28b66f(0xa2)](_0x5efe60))continue;if(_0x5efe60&&!this['hasMaxItems'](_0x5efe60))return![];}else return![];}}return!![];},Game_Party[_0x319662(0xf0)][_0x319662(0x120)]=function(_0x46b9ab){const _0x23f835=_0x319662;let _0x4438d2=0x0;const _0x3d6aa3=DataManager[_0x23f835(0x9c)](_0x46b9ab),_0x395d3b=[_0x23f835(0xdc),_0x23f835(0xac),'armors'];for(const _0x5cc78a of _0x395d3b){const _0x4d4076=_0x3d6aa3[_0x5cc78a];for(const _0xd4e25f in _0x4d4076){const _0x1fcfa0=Number(_0xd4e25f),_0x217b3d=_0x4d4076[_0xd4e25f]||0x1;let _0x456a01=null;if(_0x5cc78a===_0x23f835(0xdc))_0x456a01=$dataItems[_0x1fcfa0];if(_0x5cc78a===_0x23f835(0xac))_0x456a01=$dataWeapons[_0x1fcfa0];if(_0x5cc78a===_0x23f835(0xbf))_0x456a01=$dataArmors[_0x1fcfa0];if(DataManager[_0x23f835(0xa2)](_0x456a01))continue;if(_0x456a01){const _0x51b5a9=this['maxItems'](_0x456a01),_0x2bfa20=this[_0x23f835(0xa7)](_0x456a01),_0x5c545a=_0x51b5a9-_0x2bfa20;if(_0x5c545a>0x0){let _0x46221b=_0x5c545a/_0x217b3d;_0x46221b=Math['ceil'](_0x46221b),_0x4438d2=Math[_0x23f835(0xa5)](_0x4438d2,_0x46221b);}}}}return _0x4438d2;},VisuMZ[_0x319662(0x122)][_0x319662(0xb3)]=Scene_Shop[_0x319662(0xf0)][_0x319662(0x105)],Scene_Shop['prototype'][_0x319662(0x105)]=function(){const _0x8ea5bc=_0x319662;if(DataManager[_0x8ea5bc(0xb7)](this[_0x8ea5bc(0xbe)])){const _0x43607e=$gameParty['calcBatchItemsMax'](this[_0x8ea5bc(0xbe)]),_0x2ca806=VisuMZ['ShopBatches'][_0x8ea5bc(0xb3)]['call'](this);return Math['min'](_0x43607e,_0x2ca806);}else{if('tfRFq'===_0x8ea5bc(0xb9))this['shouldDrawShopBatchContents'](this[_0x8ea5bc(0xbe)])?this[_0x8ea5bc(0xce)](this[_0x8ea5bc(0xbe)]):_0x1f69d9[_0x8ea5bc(0x122)][_0x8ea5bc(0xc9)]['call'](this);else return VisuMZ[_0x8ea5bc(0x122)][_0x8ea5bc(0xb3)][_0x8ea5bc(0x11b)](this);}},VisuMZ[_0x319662(0x122)]['Window_ShopBuy_isEnabled']=Window_ShopBuy[_0x319662(0xf0)][_0x319662(0xc2)],Window_ShopBuy['prototype'][_0x319662(0xc2)]=function(_0x174d3f){const _0x6634f1=_0x319662;if(DataManager[_0x6634f1(0xb7)](_0x174d3f)){if($gameParty[_0x6634f1(0xd8)](_0x174d3f))return;}return VisuMZ[_0x6634f1(0x122)]['Window_ShopBuy_isEnabled'][_0x6634f1(0x11b)](this,_0x174d3f);},Window_ShopStatus['BATCH_CONTENTS']={'allowNameColors':VisuMZ[_0x319662(0x122)]['Settings'][_0x319662(0x107)][_0x319662(0xe1)]??!![],'showBatchContents':!![]},VisuMZ[_0x319662(0x122)][_0x319662(0xc9)]=Window_ShopStatus[_0x319662(0xf0)][_0x319662(0xea)],Window_ShopStatus['prototype'][_0x319662(0xea)]=function(){const _0x1634d4=_0x319662;this[_0x1634d4(0x9f)](this[_0x1634d4(0xbe)])?this[_0x1634d4(0xce)](this[_0x1634d4(0xbe)]):VisuMZ[_0x1634d4(0x122)][_0x1634d4(0xc9)][_0x1634d4(0x11b)](this);},VisuMZ[_0x319662(0x122)][_0x319662(0xb0)]=Window_ShopStatus[_0x319662(0xf0)][_0x319662(0xa8)],Window_ShopStatus[_0x319662(0xf0)]['setItem']=function(_0x5a42f9){const _0x1f84fd=_0x319662;this['shouldDrawShopBatchContents'](_0x5a42f9)?this['setItemForShopBatchContents'](_0x5a42f9):VisuMZ[_0x1f84fd(0x122)]['Window_ShopStatus_setItem']['call'](this,_0x5a42f9);},Window_ShopStatus[_0x319662(0xf0)][_0x319662(0xa9)]=function(_0x4e0312){const _0x3fd34f=_0x319662,_0x32ef59=this['innerHeight']-_0x4e0312;this[_0x3fd34f(0xba)](0x0,_0x4e0312,this[_0x3fd34f(0xd5)],_0x32ef59,0x1);},Window_ShopStatus[_0x319662(0xf0)]['shouldDrawShopBatchContents']=function(_0x1c6e34){const _0x3cb204=_0x319662;if(!_0x1c6e34)return![];if(!Window_ShopStatus[_0x3cb204(0xaf)]['showBatchContents'])return![];if(Imported[_0x3cb204(0xd7)]){if(this[_0x3cb204(0xdd)](_0x1c6e34))return![];}return DataManager[_0x3cb204(0xb7)](_0x1c6e34);},Window_ShopStatus[_0x319662(0xf0)]['setItemForShopBatchContents']=function(_0x1be432){const _0x413b90=_0x319662;this['_item']=_0x1be432,this['contents']['clear'](),this[_0x413b90(0xfe)][_0x413b90(0xaa)](),this['drawShopBatchContents'](_0x1be432);},Window_ShopStatus[_0x319662(0xf0)][_0x319662(0xec)]=function(_0x50622d){const _0xe0e558=_0x319662;let _0x1185fa=this[_0xe0e558(0x125)]();_0x1185fa=this[_0xe0e558(0xfc)](_0x1185fa,_0x50622d),this[_0xe0e558(0xa9)](_0x1185fa);},Window_ShopStatus['prototype']['drawShopBatchContentsTitle']=function(){const _0x5709e4=_0x319662,_0x1a82c3=TextManager['SHOP_BATCHES']['batchContents']||'',_0x14aa75=this[_0x5709e4(0xd4)](_0x1a82c3)['width'],_0x564bf9=Math[_0x5709e4(0xbc)]((this[_0x5709e4(0xd5)]-_0x14aa75)/0x2);return this[_0x5709e4(0x10a)](_0x1a82c3,_0x564bf9,0x0),this['drawItemDarkRect'](0x0,0x0,this[_0x5709e4(0xd5)],this[_0x5709e4(0xb8)](),0x1),this[_0x5709e4(0xb8)]();},Window_ShopStatus[_0x319662(0xf0)]['drawShopBatchContentsList']=function(_0x488578,_0x502ae5){const _0x1d9c4b=_0x319662,_0x518d77=DataManager[_0x1d9c4b(0x9c)](_0x502ae5),_0x266521=['items',_0x1d9c4b(0xac),_0x1d9c4b(0xbf)];for(const _0x202b62 of _0x266521){const _0x3f0679=_0x518d77[_0x202b62];for(const _0x3c67a4 in _0x3f0679){const _0x15c356=Number(_0x3c67a4),_0x162d24=_0x3f0679[_0x3c67a4]||0x0;let _0x5203e6=null;if(_0x202b62===_0x1d9c4b(0xdc))_0x5203e6=$dataItems[_0x15c356];if(_0x202b62==='weapons')_0x5203e6=$dataWeapons[_0x15c356];if(_0x202b62===_0x1d9c4b(0xbf))_0x5203e6=$dataArmors[_0x15c356];if(DataManager['isProxyItem'](_0x5203e6))continue;if(_0x5203e6){if('UrVvw'!=='oBsGW')this['resetFontSettings'](),this['drawShopBatchContentsItem'](_0x488578,_0x5203e6,_0x162d24),_0x488578+=this['lineHeight']();else{let _0x110b70=this[_0x1d9c4b(0x125)]();_0x110b70=this[_0x1d9c4b(0xfc)](_0x110b70,_0x2c167b),this['drawShopBatchContentsRemaining'](_0x110b70);}}}}return _0x488578;},Window_ShopStatus[_0x319662(0xf0)][_0x319662(0xe3)]=function(_0x497871,_0x3b28e8,_0x27de95){const _0x552aa8=_0x319662,_0x51331f=0x0,_0x435479=this[_0x552aa8(0xd5)],_0x2528b8=this[_0x552aa8(0xb8)](),_0x5e2fff=TextManager[_0x552aa8(0xf3)];{if('fqOPj'!==_0x552aa8(0xd1))this[_0x552aa8(0x9f)](_0x2af1ed)?this[_0x552aa8(0xce)](_0x4f226b):_0x5f06b7[_0x552aa8(0x122)]['Window_ShopStatus_setItem'][_0x552aa8(0x11b)](this,_0x37c7c3);else{let _0x2909fd='';const _0x4f4032=_0x552aa8(0x11d)['format'](_0x3b28e8['iconIndex']);let _0x5647af=_0x3b28e8[_0x552aa8(0xeb)]||'';if(Window_ShopStatus[_0x552aa8(0xaf)]['allowNameColors']){if('lXsLx'===_0x552aa8(0xd9)){if(this[_0x552aa8(0xdd)](_0x352711))return![];}else{if(_0x3b28e8[_0x552aa8(0xc5)][_0x552aa8(0xf2)](/<COLOR:[ ](\d+)>/i)){const _0x28a9d3=Number(RegExp['$1']);_0x5647af=_0x552aa8(0xb1)[_0x552aa8(0xed)](_0x28a9d3)+_0x5647af+_0x552aa8(0xdf);}else{if(Imported[_0x552aa8(0xb4)]&&_0x3b28e8[_0x552aa8(0xc5)][_0x552aa8(0xf2)](/<COLOR:[ ]#(.*)>/i)){const _0x1a0ad0='#'+String(RegExp['$1'])[_0x552aa8(0x104)]()['trim']();_0x5647af=_0x552aa8(0xcf)[_0x552aa8(0xed)](_0x1a0ad0)+_0x5647af+_0x552aa8(0xdf);}}}}_0x2909fd=_0x5e2fff['batchItemNameFmt'][_0x552aa8(0xed)](_0x5647af,_0x4f4032),this[_0x552aa8(0xd3)](_0x2909fd,_0x51331f,_0x497871,_0x435479,![],_0x552aa8(0xc0)),this[_0x552aa8(0xa0)]();}}{if(_0x552aa8(0x101)==='xopAS'){const _0x2c2f1a='#'+_0x9ce2c9(_0x266b37['$1'])[_0x552aa8(0x104)]()[_0x552aa8(0xb5)]();_0x37a723=_0x552aa8(0xcf)[_0x552aa8(0xed)](_0x2c2f1a)+_0xe8799a+_0x552aa8(0xdf);}else{let _0x2dba4c='',_0xf2cc52=$gameParty[_0x552aa8(0xa7)](_0x3b28e8);$gameParty[_0x552aa8(0x10d)](_0x3b28e8)&&(_0xf2cc52=_0x5e2fff[_0x552aa8(0x103)][_0x552aa8(0xed)](_0xf2cc52)),_0x2dba4c=TextManager['SHOP_BATCHES'][_0x552aa8(0xd6)][_0x552aa8(0xed)](_0x27de95,_0xf2cc52),this[_0x552aa8(0xd3)](_0x2dba4c,_0x51331f,_0x497871,_0x435479,![],_0x552aa8(0xe7)),this['resetFontSettings']();}}this[_0x552aa8(0xba)](_0x51331f,_0x497871,_0x435479,_0x2528b8);};function _0x3292(){const _0x3d2844=['BATCH_CONTENTS','Window_ShopStatus_setItem','\x5cC[%1]','ceil','Scene_Shop_maxBuy','VisuMZ_1_MessageCore','trim','getWeaponIdWithName','hasShopBatchItems','lineHeight','jPEIh','drawItemDarkRect','XmoKJ','floor','showBatchContents','_item','armors','left','test','isEnabled','contents','STRUCT','note','description','1135370IrsxnY','gainBatchItems','Window_ShopStatus_refresh','filter','SbkvF','Game_Party_gainItem','1XULLgx','setItemForShopBatchContents','\x5cHEXCOLOR<%1>','5504622ADGzTu','fqOPj','parse','drawItemKeyData','textSizeEx','innerWidth','batchNumberFmt','VisuMZ_3_ShopListUnlock','allOfBatchItemsMax','wqvot','×%1/%2','toUpperCase','items','shouldDrawShopUnlockList','ARRAYJSON','\x5cC[0]','KABlh','colorItemName','gainItem','drawShopBatchContentsItem','parameters','6024rlJyxj','ARRAYSTRUCT','right','split','RegExp','refresh','name','drawShopBatchContents','format','return\x200','ARRAYEVAL','prototype','ARRAYSTR','match','SHOP_BATCHES','5172000sTMGOM','exit','log','map','132254yVNPFu','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','jUyku','drawShopBatchContentsList','QBKtC','contentsBack','Settings','VisuMZ_1_ItemsEquipsCore','EdUtZ','xTJMG','batchHaveMaxFmt','toLowerCase','maxBuy','in\x20order\x20for\x20VisuMZ_3_ShopBatches\x20to\x20work.','Vocab','Window_ShopBuy_isEnabled','ewOoo','drawTextEx','3119604kdwilj','maxItems','hasMaxItems','ConvertParams','armor-%1','BbIdK','ARRAYNUM','\x5cC[16]Batch\x20Contents','JSON','isWeapon','isArmor','NUM','\x5cC[24]%1','version','12087uSUFuA','isItem','call','remove','\x5cI[%1]','773472NygVfG','getArmorIdWithName','calcBatchItemsMax','3CzLcGh','ShopBatches','EHiyd','%2%1','drawShopBatchContentsTitle','includes','getShopBatchItems','Game_Party_numItems','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','shouldDrawShopBatchContents','resetFontSettings','xskgv','isProxyItem','ItemsEquipsCore','_cache_getShopBatchItems','max','YnHfQ','numItems','setItem','drawShopBatchContentsRemaining','clear','getItemIdWithName','weapons','item-%1','BatchWrap'];_0x3292=function(){return _0x3d2844;};return _0x3292();}