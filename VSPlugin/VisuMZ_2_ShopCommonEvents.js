//=============================================================================
// VisuStella MZ - Shop Events
// VisuMZ_2_ShopCommonEvents.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_ShopCommonEvents = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ShopCommonEvents = VisuMZ.ShopCommonEvents || {};
VisuMZ.ShopCommonEvents.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.02] [ShopCommonEvents]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Shop_Common_Events_VisuStella_MZ
 * @base VisuMZ_1_ItemsEquipsCore
 * @orderAfter VisuMZ_1_ItemsEquipsCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows for shop items, weapons, and/or armors to launch common
 * events upon buying or selling them, either as a one-time event or repeating.
 * These launched Common Events will take the player outside of the shop to
 * process the Common Events before (optionally) returning back, giving your
 * player's party members a chance to comment on his or her purchases.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Items, weapons, and armors can launch Common Events went bought or sold.
 * * These launched Common Events can occur once or repeat multiple times.
 * * Store the quantity of an item bought or sold into variables to allow for
 *   some more dynamic Common Events.
 * * Use switches to function as requirements to determine if the Common Events
 *   will launch, either by having all switches enabled or any one of a set.
 * * A plugin command that will return the player back to the previous shop
 *   with all of the shop settings intact.
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
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
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
 * Launching Common Events
 * 
 * When launching a Common Event, through either buying or selling, any of the
 * event commands part of the initial shop launch will be cached away until the
 * player exits the shop normally.
 * 
 * However, if the Common Event finishes without returning the player back to
 * the shop without usage of the Plugin Command, then any of the cached event
 * commands will be lost.
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
 * === Shop Common Event-Related Notetags ===
 * 
 * ---
 *
 * <Once Buy Common Event: id>
 * <Repeat Buy Common Event: id>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - This will cause a specific Common Event to launch when bought.
 * - Replace 'id' with a number representing the ID of the Common Event that
 *   you wish to launch upon this item being bought.
 * - The "Once" notetag variant will only occur once when bought.
 *   - Any subsequent purchases of the item will not launch the Common Event.
 * - The "Repeat" notetag variant will occur repeatedly when bought.
 * - If both "Once" and "Repeat" notetags are present in the item, then the
 *   "Once" variant will take priority first. Any subsequent purchases will go
 *   to the "Repeat" variant.
 * - Any switch requirement notetags need to be met in order for either
 *   notetag to have any effect.
 * - Use the Plugin Command "Return: To Last Shop" to return back to the last
 *   shop scene.
 *
 * ---
 *
 * <Once Sell Common Event: id>
 * <Repeat Sell Common Event: id>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - This will cause a specific Common Event to launch when sold.
 * - Replace 'id' with a number representing the ID of the Common Event that
 *   you wish to launch upon this item being sold.
 * - The "Once" notetag variant will only occur once when sold.
 *   - Any subsequent sellings of the item will not launch the Common Event.
 * - The "Repeat" notetag variant will occur repeatedly when sold.
 * - If both "Once" and "Repeat" notetags are present in the item, then the
 *   "Once" variant will take priority first. Any subsequent sellings will go
 *   to the "Repeat" variant.
 * - Any switch requirement notetags need to be met in order for either
 *   notetag to have any effect.
 * - Use the Plugin Command "Return: To Last Shop" to return back to the last
 *   shop scene.
 *
 * ---
 * 
 * === Requirement Switch-Related Notetags ===
 * 
 * ---
 *
 * <Once Buy Common Event Switch: id>
 * <Once Buy Common Event All Switches: id, id, id>
 * <Once Buy Common Event Any Switches: id, id, id>
 *
 * <Repeat Buy Common Event Switch: id>
 * <Repeat Buy Common Event All Switches: id, id, id>
 * <Repeat Buy Common Event Any Switches: id, id, id>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires the respective Buy Common Events to have these Switches enabled
 *   in the "ON" position in order for them to launch.
 *   - "Once" variant will only affect the "Once" notetag buy variants.
 *   - "Repeat" variant will only affect the "Repeat" notetag buy variants.
 * - The "All" variant will require all listed Switch ID's to be "ON".
 * - The "Any" variant will require only one listed Switch ID to be "ON".
 * - Replace 'id' with a number representing the Switch ID that needs to be in
 *   the "ON" position for the requirement to be met.
 *   - Insert multiple 'id' to require more Switch ID's.
 *
 * ---
 *
 * <Once Sell Common Event Switch: id>
 * <Once Sell Common Event All Switches: id, id, id>
 * <Once Sell Common Event Any Switches: id, id, id>
 *
 * <Repeat Sell Common Event Switch: id>
 * <Repeat Sell Common Event All Switches: id, id, id>
 * <Repeat Sell Common Event Any Switches: id, id, id>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires the respective Sell Common Events to have these Switches enabled
 *   in the "ON" position in order for them to launch.
 *   - "Once" variant will only affect the "Once" notetag sell variants.
 *   - "Repeat" variant will only affect the "Repeat" notetag sell variants.
 * - The "All" variant will require all listed Switch ID's to be "ON".
 * - The "Any" variant will require only one listed Switch ID to be "ON".
 * - Replace 'id' with a number representing the Switch ID that needs to be in
 *   the "ON" position for the requirement to be met.
 *   - Insert multiple 'id' to require more Switch ID's.
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
 * === Return Plugin Commands ===
 * 
 * ---
 *
 * Return: To Last Shop
 * - Return to the last shop if coming from a Shop Common Event.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are primarily settings to automatically record the quantity/amount
 * of an item, weapon, or armor bought or sold in the shop in case you want to
 * have a dynamic Common Event dependent on them.
 *
 * ---
 *
 * General Settings
 * 
 *   Variable: Buy Quantity:
 *   - When buying, register amount bought to this variable.
 *   - 0 to not use this feature.
 * 
 *   Variable: Sell Quantity:
 *   - When Selling, register amount sold to this variable.
 *   - 0 to not use this feature.
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
 * Version 1.02: May 12, 2022
 * * Documentation Update!
 * ** Added the following text to the <Once Buy Common Event: id>,
 *    <Repeat Buy Common Event: id>, <Once Sell Common Event: id>, and
 *    <Repeat Sell Common Event: id> notetags:
 * *** Use the Plugin Command "Return: To Last Shop" to return back to the last
 *     shop scene.
 * 
 * Version 1.01: September 17, 2021
 * * Bug Fixes!
 * ** Prevents canceling purchases from launching Common Events. Fix by Arisu.
 *
 * Version 1.00 Official Release Date: October 4, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ReturnToLastShop
 * @text Return: To Last Shop
 * @desc Return to the last shop if coming from a Shop Common Event.
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
 * @param ShopCommonEvents
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param BuyVariable:num
 * @text Variable: Buy Quantity
 * @type variable
 * @desc When buying, register amount bought to this variable.
 * 0 to not use this feature.
 * @default 0
 *
 * @param SellVariable:num
 * @text Variable: Sell Quantity
 * @type variable
 * @desc When Selling, register amount sold to this variable.
 * 0 to not use this feature.
 * @default 0
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
//=============================================================================

const _0x18bc96=_0x534a;(function(_0x4c1ece,_0x381773){const _0x41cc3e=_0x534a,_0x1f23bb=_0x4c1ece();while(!![]){try{const _0xfd5d65=parseInt(_0x41cc3e(0x14a))/0x1*(-parseInt(_0x41cc3e(0x13d))/0x2)+-parseInt(_0x41cc3e(0x147))/0x3*(parseInt(_0x41cc3e(0x119))/0x4)+parseInt(_0x41cc3e(0x105))/0x5+parseInt(_0x41cc3e(0x14c))/0x6*(parseInt(_0x41cc3e(0x10d))/0x7)+-parseInt(_0x41cc3e(0x11a))/0x8*(parseInt(_0x41cc3e(0x159))/0x9)+-parseInt(_0x41cc3e(0x160))/0xa+parseInt(_0x41cc3e(0x123))/0xb;if(_0xfd5d65===_0x381773)break;else _0x1f23bb['push'](_0x1f23bb['shift']());}catch(_0x4a567e){_0x1f23bb['push'](_0x1f23bb['shift']());}}}(_0x15cf,0xf253a));function _0x15cf(){const _0x351d06=['oriYw','_lastShopCommonEventsSettings','processShopCommonEvent','value','_scene','NVHAc','VisuMZ_1_ItemsEquipsCore','STR','JGCuF','map','isArmor','isItem','28MiMJQf','onNumberOk','AllSw','match','RegExp','name','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','ReturnToLastShop','initialize','buy','81FzvBgT','registerShopSellEvent','ItemsEquipsCore','7341dvdCtp','registerShopBuyEvent','44892jFSeGI','ARRAYSTRUCT','exit','eYUca','description','items','FUNC','ARRAYSTR','initShopCommonEvents','_interpreter','XDeUx','prepareNextScene','PCOEf','103527OsRuDn','isSceneMap','uQAfj','BuyEventRepeat','call','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','AnySw','13806370AcZnLC','ShopCommonEvents','Once','return\x200','registerCommand','ARRAYFUNC','eHYOZ','FKxOJ','parse','BuyEventOnce','SellVariable','_ShopBuyEvents','isWeapon','fPsQu','push','Scene_Shop_endNumberInput','hasShopSellEventOccurred','sell','CYtDq','Scene_Shop_onNumberOk','SellEventRepeat','includes','JSON','itemHasShopCommonEvent','zwPXE','parameters','3136735YkueFU','_item','%1%2','ERHuI','_ShopSellEvents','xxKPc','bulzi','registerLastShopCommonEventsSettings','1204OyEUzy','kdQwz','Game_System_initialize','xlvqi','ConvertParams','UUjyj','currentSymbol','_ShopCommonEventNumberOk','meetsShopCommonEventSwitches','Ufyei','_purchaseOnly','dOaTN','13372PLjBsS','1192dmKUAq','hasShopBuyEventOccurred','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','NUM','split','status','SellEventOnce','restoreLastShopCommonEventsSettings','number','26025318mBgBTF','format','max','weapons','_numberWindow','vLTDF','prototype','armors','version','note','GtvnN','BuyVariable','endNumberInput','filter'];_0x15cf=function(){return _0x351d06;};return _0x15cf();}function _0x534a(_0x146b2f,_0xea6cdd){const _0x15cf42=_0x15cf();return _0x534a=function(_0x534af3,_0x53d8e9){_0x534af3=_0x534af3-0xfd;let _0x4b3d60=_0x15cf42[_0x534af3];return _0x4b3d60;},_0x534a(_0x146b2f,_0xea6cdd);}var label='ShopCommonEvents',tier=tier||0x0,dependencies=[_0x18bc96(0x137)],pluginData=$plugins[_0x18bc96(0x130)](function(_0x38d727){const _0x374e45=_0x18bc96;return _0x38d727[_0x374e45(0x11f)]&&_0x38d727[_0x374e45(0x150)]['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ[_0x18bc96(0x111)]=function(_0x31a118,_0x1ccf41){const _0x1010f0=_0x18bc96;for(const _0x24320a in _0x1ccf41){if(_0x24320a[_0x1010f0(0x140)](/(.*):(.*)/i)){if(_0x1010f0(0x139)!==_0x1010f0(0x139)){if(_0x4b82e1[_0x1010f0(0x134)](_0x20deb1)===![])return![];}else{const _0x3c20b3=String(RegExp['$1']),_0x3a79b9=String(RegExp['$2'])['toUpperCase']()['trim']();let _0x463e97,_0x11c3bd,_0xaa9780;switch(_0x3a79b9){case _0x1010f0(0x11d):_0x463e97=_0x1ccf41[_0x24320a]!==''?Number(_0x1ccf41[_0x24320a]):0x0;break;case'ARRAYNUM':_0x11c3bd=_0x1ccf41[_0x24320a]!==''?JSON['parse'](_0x1ccf41[_0x24320a]):[],_0x463e97=_0x11c3bd[_0x1010f0(0x13a)](_0x59688f=>Number(_0x59688f));break;case'EVAL':_0x463e97=_0x1ccf41[_0x24320a]!==''?eval(_0x1ccf41[_0x24320a]):null;break;case'ARRAYEVAL':_0x11c3bd=_0x1ccf41[_0x24320a]!==''?JSON[_0x1010f0(0x168)](_0x1ccf41[_0x24320a]):[],_0x463e97=_0x11c3bd[_0x1010f0(0x13a)](_0x328fc9=>eval(_0x328fc9));break;case _0x1010f0(0x101):_0x463e97=_0x1ccf41[_0x24320a]!==''?JSON[_0x1010f0(0x168)](_0x1ccf41[_0x24320a]):'';break;case'ARRAYJSON':_0x11c3bd=_0x1ccf41[_0x24320a]!==''?JSON[_0x1010f0(0x168)](_0x1ccf41[_0x24320a]):[],_0x463e97=_0x11c3bd['map'](_0x39e2bd=>JSON[_0x1010f0(0x168)](_0x39e2bd));break;case _0x1010f0(0x152):_0x463e97=_0x1ccf41[_0x24320a]!==''?new Function(JSON[_0x1010f0(0x168)](_0x1ccf41[_0x24320a])):new Function(_0x1010f0(0x163));break;case _0x1010f0(0x165):_0x11c3bd=_0x1ccf41[_0x24320a]!==''?JSON[_0x1010f0(0x168)](_0x1ccf41[_0x24320a]):[],_0x463e97=_0x11c3bd['map'](_0x31b274=>new Function(JSON[_0x1010f0(0x168)](_0x31b274)));break;case _0x1010f0(0x138):_0x463e97=_0x1ccf41[_0x24320a]!==''?String(_0x1ccf41[_0x24320a]):'';break;case _0x1010f0(0x153):_0x11c3bd=_0x1ccf41[_0x24320a]!==''?JSON[_0x1010f0(0x168)](_0x1ccf41[_0x24320a]):[],_0x463e97=_0x11c3bd[_0x1010f0(0x13a)](_0x27cea1=>String(_0x27cea1));break;case'STRUCT':_0xaa9780=_0x1ccf41[_0x24320a]!==''?JSON[_0x1010f0(0x168)](_0x1ccf41[_0x24320a]):{},_0x463e97=VisuMZ['ConvertParams']({},_0xaa9780);break;case _0x1010f0(0x14d):_0x11c3bd=_0x1ccf41[_0x24320a]!==''?JSON[_0x1010f0(0x168)](_0x1ccf41[_0x24320a]):[],_0x463e97=_0x11c3bd[_0x1010f0(0x13a)](_0x456362=>VisuMZ[_0x1010f0(0x111)]({},JSON[_0x1010f0(0x168)](_0x456362)));break;default:continue;}_0x31a118[_0x3c20b3]=_0x463e97;}}}return _0x31a118;},(_0x396b10=>{const _0x3d9b81=_0x18bc96,_0x5aa69c=_0x396b10[_0x3d9b81(0x142)];for(const _0x2638fb of dependencies){if(!Imported[_0x2638fb]){alert(_0x3d9b81(0x15e)[_0x3d9b81(0x124)](_0x5aa69c,_0x2638fb)),SceneManager[_0x3d9b81(0x14e)]();break;}}const _0x2f8fbd=_0x396b10['description'];if(_0x2f8fbd['match'](/\[Version[ ](.*?)\]/i)){if(_0x3d9b81(0x10e)==='IpdqN')_0x2fb251=this[_0x3d9b81(0x16b)][_0x3d9b81(0x126)];else{const _0x38638f=Number(RegExp['$1']);_0x38638f!==VisuMZ[label][_0x3d9b81(0x12b)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x3d9b81(0x124)](_0x5aa69c,_0x38638f)),SceneManager['exit']());}}if(_0x2f8fbd[_0x3d9b81(0x140)](/\[Tier[ ](\d+)\]/i)){const _0xe9c735=Number(RegExp['$1']);if(_0xe9c735<tier){if(_0x3d9b81(0x118)!==_0x3d9b81(0x118))return!![];else alert(_0x3d9b81(0x11c)['format'](_0x5aa69c,_0xe9c735,tier)),SceneManager[_0x3d9b81(0x14e)]();}else tier=Math[_0x3d9b81(0x125)](_0xe9c735,tier);}VisuMZ[_0x3d9b81(0x111)](VisuMZ[label]['Settings'],_0x396b10[_0x3d9b81(0x104)]);})(pluginData),PluginManager[_0x18bc96(0x164)](pluginData[_0x18bc96(0x142)],_0x18bc96(0x144),_0x31e101=>{const _0x54a5ca=_0x18bc96;if(!SceneManager[_0x54a5ca(0x15a)]())return;if(!$gameSystem[_0x54a5ca(0x132)])return;SceneManager[_0x54a5ca(0x16e)](Scene_Shop),$gameSystem['restoreLastShopCommonEventsSettings']();}),VisuMZ['ShopCommonEvents'][_0x18bc96(0x141)]={'BuyEventOnce':/<(?:ONCE|ONE TIME|ONE-TIME)[ ]BUY[ ](?:EVENT|COMMON EVENT):[ ](\d+)>/i,'BuyEventRepeat':/<(?:REPEAT|REPEATING|RECURRING)[ ]BUY[ ](?:EVENT|COMMON EVENT):[ ](\d+)>/i,'SellEventOnce':/<(?:ONCE|ONE TIME|ONE-TIME)[ ]SELL[ ](?:EVENT|COMMON EVENT):[ ](\d+)>/i,'SellEventRepeat':/<(?:REPEAT|REPEATING|RECURRING)[ ]SELL[ ](?:EVENT|COMMON EVENT):[ ](\d+)>/i,'buyOnceAllSw':/<(?:ONCE|ONE TIME|ONE-TIME)[ ]BUY[ ](?:EVENT|COMMON EVENT)[ ](?:SWITCH|SWITCHES|ALL SWITCHES):[ ](.*)>/i,'buyOnceAnySw':/<(?:ONCE|ONE TIME|ONE-TIME)[ ]BUY[ ](?:EVENT|COMMON EVENT)[ ](?:ANY SWITCH|ANY SWITCHES):[ ](.*)>/i,'buyRepeatAllSw':/<(?:REPEAT|REPEATING|RECURRING)[ ]BUY[ ](?:EVENT|COMMON EVENT)[ ](?:SWITCH|SWITCHES|ALL SWITCHES):[ ](.*)>/i,'buyRepeatAnySw':/<(?:REPEAT|REPEATING|RECURRING)[ ]BUY[ ](?:EVENT|COMMON EVENT)[ ](?:ANY SWITCH|ANY SWITCHES):[ ](.*)>/i,'sellOnceAllSw':/<(?:ONCE|ONE TIME|ONE-TIME)[ ]SELL[ ](?:EVENT|COMMON EVENT)[ ](?:SWITCH|SWITCHES|ALL SWITCHES):[ ](.*)>/i,'sellOnceAnySw':/<(?:ONCE|ONE TIME|ONE-TIME)[ ]SELL[ ](?:EVENT|COMMON EVENT)[ ](?:ANY SWITCH|ANY SWITCHES):[ ](.*)>/i,'sellRepeatAllSw':/<(?:REPEAT|REPEATING|RECURRING)[ ]SELL[ ](?:EVENT|COMMON EVENT)[ ](?:SWITCH|SWITCHES|ALL SWITCHES):[ ](.*)>/i,'sellRepeatAnySw':/<(?:REPEAT|REPEATING|RECURRING)[ ]SELL[ ](?:EVENT|COMMON EVENT)[ ](?:ANY SWITCH|ANY SWITCHES):[ ](.*)>/i},SceneManager[_0x18bc96(0x15a)]=function(){const _0x2ba11d=_0x18bc96;return this[_0x2ba11d(0x135)]&&this[_0x2ba11d(0x135)]['constructor']===Scene_Map;},VisuMZ['ShopCommonEvents'][_0x18bc96(0x10f)]=Game_System[_0x18bc96(0x129)]['initialize'],Game_System[_0x18bc96(0x129)][_0x18bc96(0x145)]=function(){const _0x16ea52=_0x18bc96;VisuMZ['ShopCommonEvents'][_0x16ea52(0x10f)][_0x16ea52(0x15d)](this),this[_0x16ea52(0x154)]();},Game_System[_0x18bc96(0x129)]['initShopCommonEvents']=function(){const _0x22b304=_0x18bc96;this[_0x22b304(0x16b)]={'items':[],'weapons':[],'armors':[]},this['_ShopSellEvents']={'items':[],'weapons':[],'armors':[]};},Game_System[_0x18bc96(0x129)]['registerShopBuyEvent']=function(_0x523c4d){const _0x4e9065=_0x18bc96;if(this[_0x4e9065(0x16b)]===undefined)this[_0x4e9065(0x154)]();let _0x482ab8=[];if(DataManager[_0x4e9065(0x13c)](_0x523c4d)){if('BiXpe'!==_0x4e9065(0x10a))_0x482ab8=this['_ShopBuyEvents'][_0x4e9065(0x151)];else{const _0x454503=_0x5bf420['$1']['split'](',')[_0x4e9065(0x13a)](_0x3685be=>_0x3ae8e3(_0x3685be));for(const _0x3c336a of _0x454503){if(_0x53b70b['value'](_0x3c336a)===![])return![];}}}else{if(DataManager[_0x4e9065(0x16c)](_0x523c4d))'mmEPl'===_0x4e9065(0x131)?_0x3b16d5=this[_0x4e9065(0x109)][_0x4e9065(0x126)]:_0x482ab8=this[_0x4e9065(0x16b)][_0x4e9065(0x126)];else DataManager['isArmor'](_0x523c4d)&&(_0x482ab8=this[_0x4e9065(0x16b)]['armors']);}if(!_0x482ab8[_0x4e9065(0x100)](_0x523c4d['id'])){if(_0x4e9065(0x16d)===_0x4e9065(0x108)){if(this[_0x4e9065(0x115)](!![])&&_0x4c37e6['match'](_0xbb668f['BuyEventOnce'])&&!_0x10605f['hasShopBuyEventOccurred'](this[_0x4e9065(0x106)]))_0x57d370=_0x399ea7(_0x483377['$1'])||0x1,_0x143b0e[_0x4e9065(0x14b)](this[_0x4e9065(0x106)]);else this[_0x4e9065(0x115)](![])&&_0x2f84ff[_0x4e9065(0x140)](_0x3f82ec['BuyEventRepeat'])&&(_0x48625b=_0x445f9b(_0x56b4dd['$1'])||0x1);}else _0x482ab8['push'](_0x523c4d['id']);}},Game_System[_0x18bc96(0x129)][_0x18bc96(0x11b)]=function(_0x3ddbd7){const _0x4097cf=_0x18bc96;if(this['_ShopBuyEvents']===undefined)this[_0x4097cf(0x154)]();let _0x1cc6f1=[];if(DataManager['isItem'](_0x3ddbd7))_0x1cc6f1=this[_0x4097cf(0x16b)][_0x4097cf(0x151)];else{if(DataManager['isWeapon'](_0x3ddbd7))'eHYOZ'!==_0x4097cf(0x166)?(_0x297275(_0x4097cf(0x143)['format'](_0x430d6f,_0x4bf239)),_0x3cc065['exit']()):_0x1cc6f1=this[_0x4097cf(0x16b)][_0x4097cf(0x126)];else DataManager[_0x4097cf(0x13b)](_0x3ddbd7)&&(_0x1cc6f1=this[_0x4097cf(0x16b)]['armors']);}return _0x1cc6f1[_0x4097cf(0x100)](_0x3ddbd7['id']);},Game_System['prototype'][_0x18bc96(0x148)]=function(_0x5c831d){const _0x504571=_0x18bc96;if(this[_0x504571(0x109)]===undefined)this[_0x504571(0x154)]();let _0xf8ff0c=[];if(DataManager[_0x504571(0x13c)](_0x5c831d)){if(_0x504571(0x167)!==_0x504571(0x167)){const _0x2dd66c=_0xc8bcb1['$1'][_0x504571(0x11e)](',')[_0x504571(0x13a)](_0x4589e0=>_0x58eccc(_0x4589e0));for(const _0x44af32 of _0x2dd66c){if(_0x3c9c71[_0x504571(0x134)](_0x44af32)===!![])return!![];}return![];}else _0xf8ff0c=this[_0x504571(0x109)][_0x504571(0x151)];}else{if(DataManager[_0x504571(0x16c)](_0x5c831d)){if(_0x504571(0x116)!=='NwrsQ')_0xf8ff0c=this[_0x504571(0x109)][_0x504571(0x126)];else{if(this[_0x504571(0x109)]===_0x8c0035)this[_0x504571(0x154)]();let _0x23c60a=[];if(_0x513406[_0x504571(0x13c)](_0x5a8efe))_0x23c60a=this['_ShopSellEvents']['items'];else{if(_0x3b93f9[_0x504571(0x16c)](_0x4e28e9))_0x23c60a=this[_0x504571(0x109)]['weapons'];else _0x1d280b['isArmor'](_0x414900)&&(_0x23c60a=this[_0x504571(0x109)][_0x504571(0x12a)]);}return _0x23c60a[_0x504571(0x100)](_0x56902c['id']);}}else DataManager[_0x504571(0x13b)](_0x5c831d)&&(_0x504571(0x15b)===_0x504571(0xfd)?_0x4d9515=this[_0x504571(0x109)][_0x504571(0x151)]:_0xf8ff0c=this[_0x504571(0x109)][_0x504571(0x12a)]);}!_0xf8ff0c[_0x504571(0x100)](_0x5c831d['id'])&&(_0x504571(0x128)===_0x504571(0x103)?_0x470571=this[_0x504571(0x16b)][_0x504571(0x12a)]:_0xf8ff0c[_0x504571(0x16e)](_0x5c831d['id']));},Game_System[_0x18bc96(0x129)][_0x18bc96(0x170)]=function(_0x1eb264){const _0x32e640=_0x18bc96;if(this[_0x32e640(0x109)]===undefined)this[_0x32e640(0x154)]();let _0x386b67=[];if(DataManager[_0x32e640(0x13c)](_0x1eb264))_0x32e640(0x112)===_0x32e640(0x110)?(_0xcf161b=_0x30542d(_0x54ebf9['$1'])||0x1,_0x5421d8['registerShopBuyEvent'](this[_0x32e640(0x106)])):_0x386b67=this[_0x32e640(0x109)][_0x32e640(0x151)];else{if(DataManager[_0x32e640(0x16c)](_0x1eb264))_0x386b67=this['_ShopSellEvents'][_0x32e640(0x126)];else DataManager[_0x32e640(0x13b)](_0x1eb264)&&(_0x386b67=this[_0x32e640(0x109)][_0x32e640(0x12a)]);}return _0x386b67[_0x32e640(0x100)](_0x1eb264['id']);},Game_System['prototype'][_0x18bc96(0x10c)]=function(){const _0x228d73=_0x18bc96,_0x4fb327=SceneManager['_scene'];this[_0x228d73(0x132)]={'_goods':_0x4fb327['_goods'],'_purchaseOnly':_0x4fb327['_purchaseOnly'],'_interpreter':$gameMap[_0x228d73(0x155)]};},Game_System[_0x18bc96(0x129)][_0x18bc96(0x121)]=function(){const _0x2226bc=_0x18bc96,_0x2ec014=this[_0x2226bc(0x132)],_0xc4a9bd=_0x2ec014['_goods']||[],_0xf8ea0d=_0x2ec014[_0x2226bc(0x117)]||![];SceneManager[_0x2226bc(0x157)](_0xc4a9bd,_0xf8ea0d),$gameMap[_0x2226bc(0x155)]=_0x2ec014['_interpreter']||new Game_Interpreter(),delete this[_0x2226bc(0x132)];},VisuMZ[_0x18bc96(0x161)][_0x18bc96(0xfe)]=Scene_Shop['prototype'][_0x18bc96(0x13e)],Scene_Shop[_0x18bc96(0x129)]['onNumberOk']=function(){const _0x78409d=_0x18bc96;this['_ShopCommonEventNumberOk']=!![],VisuMZ[_0x78409d(0x161)][_0x78409d(0xfe)][_0x78409d(0x15d)](this),this[_0x78409d(0x114)]=![];},VisuMZ[_0x18bc96(0x149)][_0x18bc96(0x16f)]=Scene_Shop[_0x18bc96(0x129)][_0x18bc96(0x12f)],Scene_Shop['prototype'][_0x18bc96(0x12f)]=function(){const _0x5030f0=_0x18bc96;if(this[_0x5030f0(0x102)]())this[_0x5030f0(0x133)]();else{if(_0x5030f0(0x12d)===_0x5030f0(0x12d))VisuMZ[_0x5030f0(0x149)][_0x5030f0(0x16f)][_0x5030f0(0x15d)](this);else{if(!_0x1524d9[_0x5030f0(0x15a)]())return;if(!_0x29236b[_0x5030f0(0x132)])return;_0x370b56[_0x5030f0(0x16e)](_0x5d104b),_0x4deec5[_0x5030f0(0x121)]();}}},Scene_Shop[_0x18bc96(0x129)]['meetsShopCommonEventSwitches']=function(_0x375cef){const _0x195555=_0x18bc96,_0x446a3c=this['_commandWindow'][_0x195555(0x113)](),_0x3456ef=this['_item']?this[_0x195555(0x106)][_0x195555(0x12c)]:'',_0x2efa74=VisuMZ[_0x195555(0x161)][_0x195555(0x141)],_0x1bc947=_0x195555(0x107)['format'](_0x446a3c,_0x375cef?_0x195555(0x162):'Repeat');if(_0x3456ef[_0x195555(0x140)](_0x2efa74[_0x1bc947+_0x195555(0x13f)])){const _0x214b8c=RegExp['$1'][_0x195555(0x11e)](',')['map'](_0x15771e=>Number(_0x15771e));for(const _0x1c7e85 of _0x214b8c){if(_0x195555(0x14f)===_0x195555(0x14f)){if($gameSwitches[_0x195555(0x134)](_0x1c7e85)===![])return![];}else{if(_0x2dfb05[_0x195555(0x134)](_0x57a28e)===!![])return!![];}}}if(_0x3456ef[_0x195555(0x140)](_0x2efa74[_0x1bc947+_0x195555(0x15f)])){const _0x57ded8=RegExp['$1']['split'](',')[_0x195555(0x13a)](_0x477ef4=>Number(_0x477ef4));for(const _0x116c74 of _0x57ded8){if($gameSwitches[_0x195555(0x134)](_0x116c74)===!![])return!![];}return![];}return!![];},Scene_Shop[_0x18bc96(0x129)][_0x18bc96(0x102)]=function(){const _0x5b3080=_0x18bc96;if(!this[_0x5b3080(0x114)])return![];const _0x4efea5=this['_commandWindow']['currentSymbol'](),_0x170353=this[_0x5b3080(0x106)]?this[_0x5b3080(0x106)][_0x5b3080(0x12c)]:'',_0x1ca26c=VisuMZ[_0x5b3080(0x161)][_0x5b3080(0x141)];if(_0x4efea5===_0x5b3080(0x146)){if(_0x5b3080(0x136)!==_0x5b3080(0x136)){if(_0x47249e[_0x5b3080(0x140)](_0x441110['BuyEventOnce'])&&!_0x3eb987[_0x5b3080(0x11b)](this['_item'])&&this['meetsShopCommonEventSwitches'](!![]))return!![];else{if(_0x39fd80[_0x5b3080(0x140)](_0x1dd5f2[_0x5b3080(0x15c)])&&this['meetsShopCommonEventSwitches'](![]))return!![];}}else{if(_0x170353[_0x5b3080(0x140)](_0x1ca26c[_0x5b3080(0x169)])&&!$gameSystem['hasShopBuyEventOccurred'](this[_0x5b3080(0x106)])&&this[_0x5b3080(0x115)](!![])){if(_0x5b3080(0x156)===_0x5b3080(0x10b))_0x4fb754[_0x5b3080(0x16e)](_0x4a9762['id']);else return!![];}else{if(_0x170353[_0x5b3080(0x140)](_0x1ca26c['BuyEventRepeat'])&&this[_0x5b3080(0x115)](![]))return!![];}}}else{if(_0x4efea5===_0x5b3080(0x171)){if(_0x170353['match'](_0x1ca26c[_0x5b3080(0x120)])&&!$gameSystem[_0x5b3080(0x170)](this[_0x5b3080(0x106)])&&this[_0x5b3080(0x115)](!![]))return!![];else{if(_0x170353[_0x5b3080(0x140)](_0x1ca26c[_0x5b3080(0xff)])&&this['meetsShopCommonEventSwitches'](![]))return!![];}}}return![];},Scene_Shop[_0x18bc96(0x129)]['processShopCommonEvent']=function(){const _0x377730=_0x18bc96,_0xbe8d5d=this['_commandWindow'][_0x377730(0x113)](),_0x1eeb9f=this['_item']?this[_0x377730(0x106)][_0x377730(0x12c)]:'',_0x5e503b=VisuMZ['ShopCommonEvents'][_0x377730(0x141)];let _0x3d9766=0x0;if(_0xbe8d5d===_0x377730(0x146)){if(this[_0x377730(0x115)](!![])&&_0x1eeb9f[_0x377730(0x140)](_0x5e503b['BuyEventOnce'])&&!$gameSystem[_0x377730(0x11b)](this['_item']))_0x3d9766=Number(RegExp['$1'])||0x1,$gameSystem['registerShopBuyEvent'](this['_item']);else this['meetsShopCommonEventSwitches'](![])&&_0x1eeb9f['match'](_0x5e503b[_0x377730(0x15c)])&&(_0x3d9766=Number(RegExp['$1'])||0x1);}else{if(_0xbe8d5d===_0x377730(0x171)){if('OepCn'!==_0x377730(0x158)){if(this[_0x377730(0x115)](!![])&&_0x1eeb9f[_0x377730(0x140)](_0x5e503b[_0x377730(0x120)])&&!$gameSystem['hasShopSellEventOccurred'](this[_0x377730(0x106)]))_0x3d9766=Number(RegExp['$1'])||0x1,$gameSystem[_0x377730(0x148)](this[_0x377730(0x106)]);else this[_0x377730(0x115)](![])&&_0x1eeb9f[_0x377730(0x140)](_0x5e503b['SellEventRepeat'])&&(_0x3d9766=Number(RegExp['$1'])||0x1);}else _0x3bcfb9[_0x377730(0x149)][_0x377730(0x16f)]['call'](this);}}if(_0x3d9766<=0x0){VisuMZ['ItemsEquipsCore'][_0x377730(0x16f)]['call'](this);return;}const _0x1f557c=VisuMZ[_0x377730(0x161)]['Settings'],_0x24e0be=_0xbe8d5d===_0x377730(0x146)?_0x1f557c[_0x377730(0x12e)]:_0x1f557c[_0x377730(0x16a)];_0x24e0be>0x0&&$gameVariables['setValue'](_0x24e0be,this[_0x377730(0x127)][_0x377730(0x122)]()),$gameSystem[_0x377730(0x10c)](),$gameMap[_0x377730(0x155)]=new Game_Interpreter(),$gameTemp['reserveCommonEvent'](_0x3d9766),SceneManager['goto'](Scene_Map);};