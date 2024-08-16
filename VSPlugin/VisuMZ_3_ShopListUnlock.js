//=============================================================================
// VisuStella MZ - Shop Listing Unlock
// VisuMZ_3_ShopListUnlock.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ShopListUnlock = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ShopListUnlock = VisuMZ.ShopListUnlock || {};
VisuMZ.ShopListUnlock.version = 1.00;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.00] [ShopListUnlock]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Shop_Listing_Unlock_VisuStella_MZ
 * @base VisuMZ_1_ItemsEquipsCore
 * @orderAfter VisuMZ_1_ItemsEquipsCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows shop listings to unlock via buying and selling items in
 * any shop. Ever wanted to make a Super Potion that unlocks after buying 10
 * regular Potions, now you can. Ever wanted to make a Monster Mana Potion
 * unlock after selling enough Slime Cores? Now you can.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Create lists of items needed to be sold or bought before an item, weapon,
 *   or piece of armor can be unlocked via notetags.
 * * Items that have not yet been unlocked but have some progress made to them
 *   can become visible in the shop listings, but are unable to be bought.
 * * When these "in-progress" items are selected, a list of the necessary items
 *   needed to be bought/sold through any shop is shown in the status window.
 * * When these requirements are fulfilled, the shop item becomes available for
 *   purchase like normal.
 * * This can be used to create tier like systems of shop progression based on
 *   what the player purchases
 * * This can also create more player interactivity by allowing certain items
 *   to become available based on what players sell back to the shop.
 * * Visible but not yet unlocked item listings in shops can have different
 *   rulings for when their visibility conditions become available via notetag.
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
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Shop Unlock-Related Notetags ===
 * 
 * ---
 *
 * <Shop Unlock Requirements>
 *  requirement
 *  requirement
 *  requirement
 * </Shop Unlock Requirements>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Creates a list of requirements before the listed item, weapon, or armor
 *   will appear in the shop.
 *   - These items still have to be listed normally inside of "Shop Processing"
 *     event. They just don't become available until the unlock requirements
 *     have been met.
 * - Replace 'requirement' with any of the requirement types found below.
 * 
 *     Buy Item id: quantity
 *     Buy Item name: quantity
 *     Buy Weapon id: quantity
 *     Buy Weapon name: quantity
 *     Buy Armor id: quantity
 *     Buy Armor name: quantity
 *     Buy Gold: quantity
 * 
 *     Sell Item id: quantity
 *     Sell Item name: quantity
 *     Sell Weapon id: quantity
 *     Sell Weapon name: quantity
 *     Sell Armor id: quantity
 *     Sell Armor name: quantity
 *     Sell Gold: quantity
 * 
 *   - Replace 'id' with a number representing the ID of the item, weapon, or
 *     armor that is required to be bought or sold.
 *   - Replace 'name' with the associated item, weapon, or armor's name.
 *   - Replace 'quantity' with a number representing the number of items,
 *     weapons, or armors bought or sold.
 *   - For gold, "Buy Gold" refers to the amount of gold spent when buying
 *     items of any sort. "Sell Gold" refers to the amount of gold earned after
 *     selling items of any sort.
 *   - Insert multiple lines to add more shop unlock requirements.
 * 
 *   Examples:
 * 
 *   ---
 *
 *   <Shop Unlock Requirements>
 *    Buy Item Potion: 5
 *    Buy Gold: 2000
 *   </Shop Unlock Requirements>
 * 
 *   - This makes the item with this notetag require at least 5 Potions to be
 *     bought and at least 2000 gold has to be spent inside any shop for this
 *     item to become unlocked for the player to purchase.
 * 
 *   ---
 *
 *   <Shop Unlock Requirements>
 *    Sell Item Tiger Fang: 10
 *    Sell Item Tiger Claw: 5
 *   </Shop Unlock Requirements>
 * 
 *   - This makes the item with this notetag require at least 10 Tiger Fangs
 *     and at least 5 Tiger Claws to be sold to any shop before this item
 *     becomes unlocked for the player to purchase.
 * 
 *   ---
 *
 * ---
 * 
 * <Shop Unlock Visible: Always>
 * <Shop Unlock Visible: Progress>
 * <Shop Unlock Visible: Never>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires <Shop Unlock Requirements> notetag present, too.
 * - An item, weapon, or armor with this notetag will change the shop listing
 *   unlock visibility requirements to something else.
 *   - Always - Always show unlockable items regardless of progress.
 *   - Progress - Show unlockable items as long as there is progress.
 *   - Never - Don't show items until fully unlocked.
 * - If this notetag is not used, refer to the default ruling set up in the
 *   Plugin Parameters.
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
 * Buy Window:
 * 
 *   Price Text:
 *   - This is the text that appears in place of the price for items that have
 *     yet to be unlocked. Text codes allowed.
 * 
 * ---
 * 
 * Status Window:
 * 
 *   Title Text:
 *   - Text that appears in the title for unlocks in progress.
 *   - Text codes allowed.
 * 
 *   Item Entries:
 * 
 *     Buy Item Format:
 *     - Text label for items that need to be bought.
 *     - %1 - Item Name.
 *     - Text codes allowed.
 * 
 *     Sell Item Format:
 *     - Text label for items that need to be sold.
 *     - %1 - Item Name.
 *     - Text codes allowed.
 * 
 *     Item Name Format:
 *     - Text format used for item names.
 *     - %1 - Item Name. %2 - Item Icon.
 *     - Text codes allowed.
 * 
 *   Gold Entries:
 * 
 *     Buy Gold Format:
 *     - Text label for gold spent on buying items.
 *     - %1 - Currency Name.
 *     - Text codes allowed.
 * 
 *     Sell Gold Format:
 *     - Text label for gold gained from selling items.
 *     - %1 - Currency Name.
 *     - Text codes allowed.
 * 
 *   Number Display Format:
 *   - Text format used for quantity required.
 *   - %1 - Current Amount. %2 - Target Amount.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * These settings let you adjust the windows displayed for this plugin. For the
 * shop status window, if you decide to display unlock requirements, the
 * contents will be automatically generated for the unlock requirements list.
 * If an entry's item name and text is too large to fit together in one line,
 * they will form multiple lines.
 *
 * ---
 * 
 * Buy Window:
 * 
 *   In-Progress Rulings:
 *   - What rulings do you want unlockable items to have?
 *     - Always - Always show unlockable items regardless of progress.
 *     - Progress - Show unlockable items as long as there is progress.
 *     - Never - Don't show items until fully unlocked.
 * 
 *   Change Price Text?:
 *   - Change the price text for items that have not been unlocked?
 * 
 *   Change BG Color?:
 *   - Change the background color of item listings that have not been
 *     unlocked.
 * 
 *     BG Color 1:
 *     BG Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 * ---
 * 
 * Status Window:
 * 
 *   Show Requirements?:
 *   - Show the requirements needed to fully unlock an item listing?
 * 
 *   Conditions Met Color:
 *   - Use text colors from the Window Skin. Does not work with #rrggbb
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
 * Version 1.00 Official Release Date: November 27, 2023
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
 * @param ShopListUnlock
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
 * @default {"Window_ShopBuy":"","priceText:str":"Need More!","Window_ShopStatus":"","title:str":"\\C[16]Unlock Requirements","StatusEntriesItem":"","itemBuyFmt:str":"Buy %1","itemSellFmt:str":"Sell %1","itemNameFmt:str":"%2%1","StatusEntriesGold":"","goldFromBuyFmt:str":"Spent \\I[314]%1","goldFromSellFmt:str":"Gained \\I[314]%1","numberDisplayFmt:str":"×%1/%2"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you adjust the windows displayed for this plugin.
 * @default {"Window_ShopBuy":"","showUnlistedRuling:str":"progress","changeUnlistedPrice:eval":"true","changeUnlistedBgColor:eval":"true","unlistedBgColor1:str":"15","unlistedBgColor2:str":"19","Window_ShopStatus":"","showRequirements:eval":"true","numberMetColor:str":"24"}
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
 * @param Window_ShopBuy
 * @text Buy Window
 *
 * @param priceText:str
 * @text Price Text
 * @parent Window_ShopBuy
 * @desc This is the text that appears in place of the price for
 * items that have yet to be unlocked. Text codes allowed.
 * @default Need More!
 *
 * @param Window_ShopStatus
 * @text Status Window
 *
 * @param title:str
 * @text Title Text
 * @parent Window_ShopStatus
 * @desc Text that appears in the title for unlocks in progress.
 * Text codes allowed.
 * @default \C[16]Unlock Requirements
 * 
 * @param StatusEntriesItem
 * @text Item Entries
 * @parent Window_ShopStatus
 *
 * @param itemBuyFmt:str
 * @text Buy Item Format
 * @parent StatusEntriesItem
 * @desc Text label for items that need to be bought.
 * %1 - Item Name. Text codes allowed.
 * @default Buy %1
 *
 * @param itemSellFmt:str
 * @text Sell Item Format
 * @parent StatusEntriesItem
 * @desc Text label for items that need to be sold.
 * %1 - Item Name. Text codes allowed.
 * @default Sell %1
 *
 * @param itemNameFmt:str
 * @text Item Name Format
 * @parent StatusEntriesItem
 * @desc Text format used for item names.
 * %1 - Item Name. %2 - Item Icon.
 * @default %2%1
 * 
 * @param StatusEntriesGold
 * @text Gold Entries
 * @parent Window_ShopStatus
 *
 * @param goldFromBuyFmt:str
 * @text Buy Gold Format
 * @parent StatusEntriesGold
 * @desc Text label for gold spent on buying items.
 * %1 - Currency Name. Text codes allowed.
 * @default Spent \I[314]%1
 *
 * @param goldFromSellFmt:str
 * @text Sell Gold Format
 * @parent StatusEntriesGold
 * @desc Text label for gold gained from selling items.
 * %1 - Currency Name. Text codes allowed.
 * @default Gained \I[314]%1
 *
 * @param numberDisplayFmt:str
 * @text Number Display Format
 * @parent Window_ShopStatus
 * @desc Text format used for quantity required.
 * %1 - Current Amount. %2 - Target Amount.
 * @default ×%1/%2
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param Window_ShopBuy
 * @text Buy Window
 *
 * @param showUnlistedRuling:str
 * @text In-Progress Rulings
 * @parent Window_ShopBuy
 * @type select
 * @option Always - Always show unlockable items regardless of progress.
 * @value always
 * @option Progress - Show unlockable items as long as there is progress.
 * @value progress
 * @option Never - Don't show items until fully unlocked.
 * @value never
 * @desc What rulings do you want unlockable items to have?
 * @default progress
 *
 * @param changeUnlistedPrice:eval
 * @text Change Price Text?
 * @parent Window_ShopBuy
 * @type boolean
 * @on Change Text
 * @off Show Price
 * @desc Change the price text for items that have not been unlocked?
 * @default true
 *
 * @param changeUnlistedBgColor:eval
 * @text Change BG Color?
 * @parent Window_ShopBuy
 * @type boolean
 * @on Change Color
 * @off Don't Change
 * @desc Change the background color of item listings that have not been unlocked.
 * @default true
 *
 * @param unlistedBgColor1:str
 * @text BG Color 1
 * @parent changeUnlistedBgColor:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 15
 *
 * @param unlistedBgColor2:str
 * @text BG Color 2
 * @parent changeUnlistedBgColor:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param Window_ShopStatus
 * @text Status Window
 *
 * @param showRequirements:eval
 * @text Show Requirements?
 * @parent Window_ShopStatus
 * @type boolean
 * @on Show Requirements
 * @off Show Item Data
 * @desc Show the requirements needed to fully unlock an item listing?
 * @default true
 *
 * @param numberMetColor:str
 * @text Conditions Met Color
 * @parent Window_ShopStatus
 * @desc Use text colors from the Window Skin.
 * Does not work with #rrggbb
 * @default 24
 *
 */
//=============================================================================

function _0x3f3e(){const _0x1ef1dd=['sUfPR','nokGh','description','contentsBack','filter','goldFromBuyFmt','return\x200','note','jDWha','585758heXpcI','DMinZ','ARRAYFUNC','Settings','trim','Vocab','Window','MxutN','getShopTrackingItemSell','width','GqMvI','goodsToItem','getColor','lSEsC','numberMetColor','3772601kVOuec','unlistedBgColor1','itemSellFmt','shouldDrawShopUnlockList','changeUnlistedPrice','_item','drawShopListingUnlockRemaining','fHOBw','SHOP_LIST_UNLOCK','toUpperCase','shouldChangeUnlistedItemBackground','RegExp','textSizeEx','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Window_ShopBuy_goodsToItem','itemDataFontSize','setItem','max','getShopTrackingGoldSell','FAKCc','hasShopListingNotetag','ConvertParams','\x5cC[16]Unlock\x20Requirements','title','setShopListingUnlockItem','_resetFontSize','drawItemBackgroundUnlisted','in\x20order\x20for\x20VisuMZ_3_ShopListUnlock\x20to\x20work.','_isShopListingUnlocked','drawTextEx','drawItemKeyData','priceText','UnlockRuling','\x5cI[%1]','ARRAYJSON','JSON','map','shouldShopListingUnlockHaveExtraLine','740pKOwik','sell','isShopListingUnlocked','Window_ShopStatus_setItem','uxylM','armor-%1','numberDisplayFmt','innerWidth','split','RltbY','getItemIdWithName','match','getWeaponIdWithName','status','YSTcw','buy','height','unlistedBgColor2','isShopListingAnyProgress','isShopListingUnlockShown','itemPadding','ShopUnlock','goldFromSellFmt','AgpSV','isArmor','Sell\x20%1','9532920GilUNh','innerHeight','itemRect','drawItemCost','exit','ShopListUnlock','HXBzd','gold','push','drawShopListingUnlockLine','brCBY','drawShopListingUnlockTitle','prototype','mNSxK','cCIRt','VisuMZ_1_ItemsEquipsCore\x20needs\x20to\x20be\x20updated\x20','remove','1740831EpxOiT','VisuMZ_1_ItemsEquipsCore','Window_Selectable_drawItemBackground','always','itemBuyFmt','\x5cC[%1]%2\x5cC[0]','Window_ShopBuy_drawItemCost','6XJNZAm','292053XGHFUS','format','NUM','drawShopListingUnlockRequirements','EVAL','ARRAYSTR','weapon-%1','drawItemCostShopListingUnlock','name','XPHWf','never','getShopTrackingItemBuy','drawShopListingUnlockList','Gained\x20\x5cI[314]%1','isShopListingUnlockRulingType','toLowerCase','constructor','isWeapon','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','showRequirements','getArmorIdWithName','Need\x20More!','STR','test','itemNameFmt','STRUCT','isEnabled','Buy\x20%1','FUNC','%2%1','version','parse','Window_ShopBuy_isEnabled','drawItemDarkRect','vvCJp','gradientFillRect','progress','showUnlistedRuling','hTMMo','itemAt','FTFlg','96111fkCkOc','left','hLblg','ARRAYNUM','item-%1','clear','includes','304JbzmsG','changeUnlistedBgColor','call','JJONb','14604aGTKgz','lineHeight','meetsShopListingUnlockRequirements','currencyUnit','sOmTB','iconIndex','parameters','GxiBC','getShopTrackingGoldBuy'];_0x3f3e=function(){return _0x1ef1dd;};return _0x3f3e();}const _0x58632e=_0x386c;(function(_0x4e45bd,_0x4eefc5){const _0x4c2907=_0x386c,_0x461665=_0x4e45bd();while(!![]){try{const _0x4851cf=parseInt(_0x4c2907(0x26d))/0x1+-parseInt(_0x4c2907(0x205))/0x2+parseInt(_0x4c2907(0x265))/0x3+parseInt(_0x4c2907(0x1f3))/0x4*(parseInt(_0x4c2907(0x23a))/0x5)+-parseInt(_0x4c2907(0x26c))/0x6*(-parseInt(_0x4c2907(0x214))/0x7)+parseInt(_0x4c2907(0x1ef))/0x8*(-parseInt(_0x4c2907(0x1e8))/0x9)+-parseInt(_0x4c2907(0x254))/0xa;if(_0x4851cf===_0x4eefc5)break;else _0x461665['push'](_0x461665['shift']());}catch(_0x518009){_0x461665['push'](_0x461665['shift']());}}}(_0x3f3e,0x49280));function _0x386c(_0x38d1c0,_0x15697a){const _0x3f3e84=_0x3f3e();return _0x386c=function(_0x386c4f,_0x2fc6a8){_0x386c4f=_0x386c4f-0x1ca;let _0x56b3b3=_0x3f3e84[_0x386c4f];return _0x56b3b3;},_0x386c(_0x38d1c0,_0x15697a);}var label=_0x58632e(0x259),tier=tier||0x0,dependencies=[_0x58632e(0x266)],pluginData=$plugins[_0x58632e(0x200)](function(_0x3ff6b7){const _0x1b66fa=_0x58632e;return _0x3ff6b7[_0x1b66fa(0x247)]&&_0x3ff6b7[_0x1b66fa(0x1fe)][_0x1b66fa(0x1ee)]('['+label+']');})[0x0];VisuMZ[label][_0x58632e(0x208)]=VisuMZ[label][_0x58632e(0x208)]||{},VisuMZ[_0x58632e(0x229)]=function(_0x5ad8cd,_0x2b108f){const _0x17d406=_0x58632e;for(const _0x3434d2 in _0x2b108f){if(_0x3434d2[_0x17d406(0x245)](/(.*):(.*)/i)){if(_0x17d406(0x1f2)!==_0x17d406(0x1f2)){const _0x43bec1=_0x3bbd13(_0x40ac6e['$1']),_0x14e478=_0x11d789(_0x55195d['$2']),_0xa9c3d3=/^\d+$/[_0x17d406(0x1d6)](_0x43bec1),_0x3ceca6=_0xa9c3d3?_0x43bec1:this[_0x17d406(0x246)](_0x43bec1),_0x18c887=_0x3ab67e[_0x3ceca6];if(_0x423c29[_0x17d406(0x20d)](_0x18c887)<_0x14e478)return![];}else{const _0x4aa4d9=String(RegExp['$1']),_0x44ab88=String(RegExp['$2'])[_0x17d406(0x21d)]()[_0x17d406(0x209)]();let _0x14aad3,_0x53058c,_0x3eaf4c;switch(_0x44ab88){case _0x17d406(0x26f):_0x14aad3=_0x2b108f[_0x3434d2]!==''?Number(_0x2b108f[_0x3434d2]):0x0;break;case _0x17d406(0x1eb):_0x53058c=_0x2b108f[_0x3434d2]!==''?JSON[_0x17d406(0x1de)](_0x2b108f[_0x3434d2]):[],_0x14aad3=_0x53058c['map'](_0x1d32cc=>Number(_0x1d32cc));break;case _0x17d406(0x271):_0x14aad3=_0x2b108f[_0x3434d2]!==''?eval(_0x2b108f[_0x3434d2]):null;break;case'ARRAYEVAL':_0x53058c=_0x2b108f[_0x3434d2]!==''?JSON[_0x17d406(0x1de)](_0x2b108f[_0x3434d2]):[],_0x14aad3=_0x53058c[_0x17d406(0x238)](_0x332dc5=>eval(_0x332dc5));break;case _0x17d406(0x237):_0x14aad3=_0x2b108f[_0x3434d2]!==''?JSON[_0x17d406(0x1de)](_0x2b108f[_0x3434d2]):'';break;case _0x17d406(0x236):_0x53058c=_0x2b108f[_0x3434d2]!==''?JSON[_0x17d406(0x1de)](_0x2b108f[_0x3434d2]):[],_0x14aad3=_0x53058c[_0x17d406(0x238)](_0xf56a41=>JSON['parse'](_0xf56a41));break;case _0x17d406(0x1db):_0x14aad3=_0x2b108f[_0x3434d2]!==''?new Function(JSON[_0x17d406(0x1de)](_0x2b108f[_0x3434d2])):new Function(_0x17d406(0x202));break;case _0x17d406(0x207):_0x53058c=_0x2b108f[_0x3434d2]!==''?JSON[_0x17d406(0x1de)](_0x2b108f[_0x3434d2]):[],_0x14aad3=_0x53058c[_0x17d406(0x238)](_0x54daa0=>new Function(JSON[_0x17d406(0x1de)](_0x54daa0)));break;case _0x17d406(0x1d5):_0x14aad3=_0x2b108f[_0x3434d2]!==''?String(_0x2b108f[_0x3434d2]):'';break;case _0x17d406(0x272):_0x53058c=_0x2b108f[_0x3434d2]!==''?JSON[_0x17d406(0x1de)](_0x2b108f[_0x3434d2]):[],_0x14aad3=_0x53058c[_0x17d406(0x238)](_0x8ae675=>String(_0x8ae675));break;case _0x17d406(0x1d8):_0x3eaf4c=_0x2b108f[_0x3434d2]!==''?JSON[_0x17d406(0x1de)](_0x2b108f[_0x3434d2]):{},_0x14aad3=VisuMZ[_0x17d406(0x229)]({},_0x3eaf4c);break;case'ARRAYSTRUCT':_0x53058c=_0x2b108f[_0x3434d2]!==''?JSON[_0x17d406(0x1de)](_0x2b108f[_0x3434d2]):[],_0x14aad3=_0x53058c[_0x17d406(0x238)](_0x550336=>VisuMZ[_0x17d406(0x229)]({},JSON[_0x17d406(0x1de)](_0x550336)));break;default:continue;}_0x5ad8cd[_0x4aa4d9]=_0x14aad3;}}}return _0x5ad8cd;},(_0x4f2ddc=>{const _0x52cf33=_0x58632e,_0x34c277=_0x4f2ddc[_0x52cf33(0x275)];for(const _0x1b5965 of dependencies){if(_0x52cf33(0x243)!==_0x52cf33(0x243)){this[_0x52cf33(0x22d)]=this[_0x52cf33(0x223)]();const _0x387d23=this[_0x52cf33(0x220)](_0x3b03fa)['width'],_0x14ee00=this[_0x52cf33(0x220)](_0x2936bf)[_0x52cf33(0x20e)];this['_resetFontSize']=_0x53f610;let _0x568516=this[_0x52cf33(0x241)]-this[_0x52cf33(0x24e)]()*0x4;return _0x387d23+_0x14ee00>=_0x568516;}else{if(!Imported[_0x1b5965]){if(_0x52cf33(0x20f)!=='OGdEr'){alert(_0x52cf33(0x1d1)[_0x52cf33(0x26e)](_0x34c277,_0x1b5965)),SceneManager[_0x52cf33(0x258)]();break;}else{const _0x276c9e=_0x359008[_0x52cf33(0x259)]['RegExp'],_0x593d51=_0x405110[_0x52cf33(0x203)]||'';if(_0x593d51['match'](_0x276c9e[_0x52cf33(0x234)])){const _0x12097d=_0x87e0c7(_0x5246b0['$1'])[_0x52cf33(0x1ce)]()[_0x52cf33(0x209)]();if([_0x52cf33(0x268),_0x52cf33(0x277),_0x52cf33(0x1e3)][_0x52cf33(0x1ee)](_0x12097d))return _0x12097d;}return _0x1aec43[_0x52cf33(0x21c)][_0x52cf33(0x1e4)];}}}}const _0x31faf6=_0x4f2ddc[_0x52cf33(0x1fe)];if(_0x31faf6['match'](/\[Version[ ](.*?)\]/i)){const _0x1ac96c=Number(RegExp['$1']);_0x1ac96c!==VisuMZ[label][_0x52cf33(0x1dd)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x52cf33(0x26e)](_0x34c277,_0x1ac96c)),SceneManager['exit']());}if(_0x31faf6[_0x52cf33(0x245)](/\[Tier[ ](\d+)\]/i)){const _0xb5ef41=Number(RegExp['$1']);if(_0xb5ef41<tier)alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x52cf33(0x26e)](_0x34c277,_0xb5ef41,tier)),SceneManager[_0x52cf33(0x258)]();else{if(_0x52cf33(0x1e5)===_0x52cf33(0x1e5))tier=Math[_0x52cf33(0x225)](_0xb5ef41,tier);else{const _0x4e9dbd=_0x26db90(_0x1f6603['$1']),_0x4369a8=_0x1f5b4b(_0x2a52a2['$2']),_0x199ed0=/^\d+$/['test'](_0x4e9dbd),_0x176e97=_0x199ed0?_0x4e9dbd:this[_0x52cf33(0x246)](_0x4e9dbd),_0x838f01=_0x4a4f5b[_0x176e97];if(_0x2e3a3b[_0x52cf33(0x1ca)](_0x838f01)<_0x4369a8)return![];}}}VisuMZ[_0x52cf33(0x229)](VisuMZ[label][_0x52cf33(0x208)],_0x4f2ddc[_0x52cf33(0x1f9)]);})(pluginData);if(VisuMZ['ItemsEquipsCore'][_0x58632e(0x1dd)]<1.47){let text='';text+=_0x58632e(0x263),text+=_0x58632e(0x22f),alert(text),SceneManager[_0x58632e(0x258)]();}VisuMZ[_0x58632e(0x259)][_0x58632e(0x21f)]={'ShopUnlock':/<SHOP UNLOCK REQUIREMENT(?:|S)>\s*([\s\S]*)\s*<\/SHOP UNLOCK REQUIREMENT(?:|S)>/i,'UnlockRuling':/<SHOP UNLOCK (?:RULE|RULING|VISIBLE):[ ](.*)>/i},DataManager['isShopListingUnlocked']=function(_0x20462e){const _0x2a0b65=_0x58632e;let _0x4ea757='';if(DataManager['isItem'](_0x20462e))_0x4ea757=_0x2a0b65(0x1ec)[_0x2a0b65(0x26e)](_0x20462e['id']);else{if(DataManager[_0x2a0b65(0x1d0)](_0x20462e))_0x4ea757=_0x2a0b65(0x273)[_0x2a0b65(0x26e)](_0x20462e['id']);else{if(DataManager[_0x2a0b65(0x252)](_0x20462e))_0x4ea757=_0x2a0b65(0x23f)['format'](_0x20462e['id']);else{if('jDWha'!==_0x2a0b65(0x204)){if(_0x55cb82&&!_0x4e4fdc[_0x2a0b65(0x23c)](_0x1a87b0))return![];return _0x42a7c0[_0x2a0b65(0x259)][_0x2a0b65(0x1df)][_0x2a0b65(0x1f1)](this,_0x1add72);}else return![];}}}this[_0x2a0b65(0x230)]=this[_0x2a0b65(0x230)]||[];if(this[_0x2a0b65(0x230)]['includes'](_0x4ea757))return!![];return this[_0x2a0b65(0x228)](_0x20462e)?this[_0x2a0b65(0x1f5)](_0x20462e)&&this[_0x2a0b65(0x230)][_0x2a0b65(0x25c)](_0x4ea757):this[_0x2a0b65(0x230)][_0x2a0b65(0x25c)](_0x4ea757),this['_isShopListingUnlocked'][_0x2a0b65(0x1ee)](_0x4ea757);},DataManager[_0x58632e(0x228)]=function(_0x751caf){const _0x498713=_0x58632e,_0x1aca7c=VisuMZ[_0x498713(0x259)][_0x498713(0x21f)],_0x3377ff=_0x751caf[_0x498713(0x203)]||'';if(_0x3377ff[_0x498713(0x245)](_0x1aca7c[_0x498713(0x24f)]))return _0x498713(0x25e)!==_0x498713(0x251)?!![]:!![];return![];},DataManager[_0x58632e(0x1f5)]=function(_0x13790b){const _0x2c1d2c=_0x58632e,_0x208bff=VisuMZ[_0x2c1d2c(0x259)][_0x2c1d2c(0x21f)],_0x21be94=_0x13790b[_0x2c1d2c(0x203)]||'';if(_0x21be94['match'](_0x208bff[_0x2c1d2c(0x24f)])){const _0x487087=String(RegExp['$1'])[_0x2c1d2c(0x242)](/[\r\n]+/)['remove']('');for(const _0x3f43f0 of _0x487087){if(_0x2c1d2c(0x23e)!=='EHTfo'){if(_0x3f43f0[_0x2c1d2c(0x245)](/(?:BUY|BOUGHT|SPENT|SPEND) GOLD:[ ](\d+)/i)){const _0x402a62=Number(RegExp['$1']);if($gameParty[_0x2c1d2c(0x1fb)]()<_0x402a62)return![];}if(_0x3f43f0[_0x2c1d2c(0x245)](/(?:SELL|SOLD|EARN|EARNED|GAIN|GAINED) GOLD:[ ](\d+)/i)){const _0x9c5ab7=Number(RegExp['$1']);if($gameParty['getShopTrackingGoldSell']()<_0x9c5ab7)return![];}if(_0x3f43f0['match'](/(?:BUY|BOUGHT) ITEM[ ](.*):[ ](\d+)/i)){const _0x16b12b=String(RegExp['$1']),_0x1f6981=Number(RegExp['$2']),_0x5740db=/^\d+$/['test'](_0x16b12b),_0xafbdfa=_0x5740db?_0x16b12b:this[_0x2c1d2c(0x244)](_0x16b12b),_0x222daa=$dataItems[_0xafbdfa];if($gameParty[_0x2c1d2c(0x1ca)](_0x222daa)<_0x1f6981)return![];}if(_0x3f43f0[_0x2c1d2c(0x245)](/(?:SELL|SOLD) ITEM[ ](.*):[ ](\d+)/i)){const _0x5752be=String(RegExp['$1']),_0x171aad=Number(RegExp['$2']),_0x202326=/^\d+$/['test'](_0x5752be),_0xcf112a=_0x202326?_0x5752be:this[_0x2c1d2c(0x244)](_0x5752be),_0x32af1e=$dataItems[_0xcf112a];if($gameParty[_0x2c1d2c(0x20d)](_0x32af1e)<_0x171aad)return![];}if(_0x3f43f0[_0x2c1d2c(0x245)](/(?:BUY|BOUGHT) WEAPON[ ](.*):[ ](\d+)/i)){if(_0x2c1d2c(0x1f7)!=='BYwGH'){const _0x5d0497=String(RegExp['$1']),_0x4209df=Number(RegExp['$2']),_0x55a051=/^\d+$/[_0x2c1d2c(0x1d6)](_0x5d0497),_0x2ef320=_0x55a051?_0x5d0497:this[_0x2c1d2c(0x246)](_0x5d0497),_0x8467c0=$dataWeapons[_0x2ef320];if($gameParty['getShopTrackingItemBuy'](_0x8467c0)<_0x4209df)return![];}else{const _0x366526=_0x281dd4(_0x11eb78['$1']);if(_0x12c8f7[_0x2c1d2c(0x226)]()<_0x366526)return![];}}if(_0x3f43f0[_0x2c1d2c(0x245)](/(?:SELL|SOLD) WEAPON[ ](.*):[ ](\d+)/i)){const _0x402d66=String(RegExp['$1']),_0x4bcd38=Number(RegExp['$2']),_0x256679=/^\d+$/[_0x2c1d2c(0x1d6)](_0x402d66),_0x628670=_0x256679?_0x402d66:this['getWeaponIdWithName'](_0x402d66),_0x2096a8=$dataWeapons[_0x628670];if($gameParty['getShopTrackingItemSell'](_0x2096a8)<_0x4bcd38)return![];}if(_0x3f43f0[_0x2c1d2c(0x245)](/(?:BUY|BOUGHT) ARMOR[ ](.*):[ ](\d+)/i)){const _0x4284db=String(RegExp['$1']),_0x43d571=Number(RegExp['$2']),_0x102147=/^\d+$/[_0x2c1d2c(0x1d6)](_0x4284db),_0x4f0372=_0x102147?_0x4284db:this['getArmorIdWithName'](_0x4284db),_0x54de50=$dataArmors[_0x4f0372];if($gameParty[_0x2c1d2c(0x1ca)](_0x54de50)<_0x43d571)return![];}if(_0x3f43f0[_0x2c1d2c(0x245)](/(?:SELL|SOLD) ARMOR[ ](.*):[ ](\d+)/i)){const _0x29fc74=String(RegExp['$1']),_0x4ad6fb=Number(RegExp['$2']),_0x4ad944=/^\d+$/[_0x2c1d2c(0x1d6)](_0x29fc74),_0x5b91eb=_0x4ad944?_0x29fc74:this[_0x2c1d2c(0x1d3)](_0x29fc74),_0xf72261=$dataArmors[_0x5b91eb];if($gameParty[_0x2c1d2c(0x20d)](_0xf72261)<_0x4ad6fb)return![];}}else _0x1dc623(_0x2c1d2c(0x221)[_0x2c1d2c(0x26e)](_0x5cd370,_0x104e5d,_0x28e0d5)),_0x249ce2['exit']();}}return!![];},DataManager[_0x58632e(0x24d)]=function(_0x444eb6){const _0xb33184=_0x58632e,_0x4cecc0=this['isShopListingUnlockRulingType'](_0x444eb6);if(_0x4cecc0===_0xb33184(0x268))return!![];else{if(_0x4cecc0===_0xb33184(0x277))return![];else{if(_0x4cecc0===_0xb33184(0x1e3)){if('sUfPR'!==_0xb33184(0x1fc)){const _0x20873d=_0x17533c(_0x49f549['$1'])[_0xb33184(0x1ce)]()[_0xb33184(0x209)]();if([_0xb33184(0x268),_0xb33184(0x277),'progress'][_0xb33184(0x1ee)](_0x20873d))return _0x20873d;}else return DataManager[_0xb33184(0x24c)](_0x444eb6);}}}return![];},DataManager[_0x58632e(0x1cd)]=function(_0x3e446e){const _0x3e2e1b=_0x58632e,_0x6b129c=VisuMZ['ShopListUnlock'][_0x3e2e1b(0x21f)],_0xae7500=_0x3e446e[_0x3e2e1b(0x203)]||'';if(_0xae7500[_0x3e2e1b(0x245)](_0x6b129c[_0x3e2e1b(0x234)])){const _0x4409f3=String(RegExp['$1'])[_0x3e2e1b(0x1ce)]()['trim']();if([_0x3e2e1b(0x268),'never',_0x3e2e1b(0x1e3)][_0x3e2e1b(0x1ee)](_0x4409f3))return _0x4409f3;}return Window_ShopBuy[_0x3e2e1b(0x21c)][_0x3e2e1b(0x1e4)];},DataManager[_0x58632e(0x24c)]=function(_0x4302d4){const _0xd6b927=_0x58632e,_0x1a1ffb=VisuMZ['ShopListUnlock'][_0xd6b927(0x21f)],_0x3ee2de=_0x4302d4[_0xd6b927(0x203)]||'';if(_0x3ee2de[_0xd6b927(0x245)](_0x1a1ffb[_0xd6b927(0x24f)])){const _0x694923=String(RegExp['$1'])[_0xd6b927(0x242)](/[\r\n]+/)['remove']('');for(const _0x3595f6 of _0x694923){if(_0xd6b927(0x25a)===_0xd6b927(0x1ea))this[_0xd6b927(0x230)]['push'](_0x2a5537);else{if(_0x3595f6[_0xd6b927(0x245)](/(?:BUY|BOUGHT|SPENT|SPEND) GOLD:[ ](\d+)/i)){if($gameParty[_0xd6b927(0x1fb)]()>=0x1)return!![];}if(_0x3595f6[_0xd6b927(0x245)](/(?:SELL|SOLD|EARN|EARNED|GAIN|GAINED) GOLD:[ ](\d+)/i)){if('iGGwa'===_0xd6b927(0x1e1)){const _0x30868f=_0x37280a(_0x1e7e3e['$1']);_0x30868f<_0x1f87b3?(_0x8f591c(_0xd6b927(0x221)[_0xd6b927(0x26e)](_0x127ba2,_0x30868f,_0x36cea1)),_0x1ad9ff[_0xd6b927(0x258)]()):_0x48b3ce=_0x30009e[_0xd6b927(0x225)](_0x30868f,_0x842e88);}else{if($gameParty['getShopTrackingGoldSell']()>=0x1)return!![];}}if(_0x3595f6['match'](/(?:BUY|BOUGHT) ITEM[ ](.*):[ ](\d+)/i)){const _0x42812b=String(RegExp['$1']),_0x7b98a4=/^\d+$/[_0xd6b927(0x1d6)](_0x42812b),_0xed2b19=_0x7b98a4?_0x42812b:this[_0xd6b927(0x244)](_0x42812b),_0x1ec491=$dataItems[_0xed2b19];if($gameParty[_0xd6b927(0x1ca)](_0x1ec491)>=0x1)return!![];}if(_0x3595f6[_0xd6b927(0x245)](/(?:SELL|SOLD) ITEM[ ](.*):[ ](\d+)/i)){const _0x458096=String(RegExp['$1']),_0x38e5b0=/^\d+$/[_0xd6b927(0x1d6)](_0x458096),_0x24fad3=_0x38e5b0?_0x458096:this[_0xd6b927(0x244)](_0x458096),_0x5cbbbe=$dataItems[_0x24fad3];if($gameParty[_0xd6b927(0x20d)](_0x5cbbbe)>=0x1)return!![];}if(_0x3595f6['match'](/(?:BUY|BOUGHT) WEAPON[ ](.*):[ ](\d+)/i)){const _0x370886=String(RegExp['$1']),_0x4646f4=/^\d+$/[_0xd6b927(0x1d6)](_0x370886),_0x49db81=_0x4646f4?_0x370886:this[_0xd6b927(0x246)](_0x370886),_0x2c376a=$dataWeapons[_0x49db81];if($gameParty[_0xd6b927(0x1ca)](_0x2c376a)>=0x1)return!![];}if(_0x3595f6[_0xd6b927(0x245)](/(?:SELL|SOLD) WEAPON[ ](.*):[ ](\d+)/i)){const _0x89e36=String(RegExp['$1']),_0x1d7b0b=/^\d+$/[_0xd6b927(0x1d6)](_0x89e36),_0x40022a=_0x1d7b0b?_0x89e36:this['getWeaponIdWithName'](_0x89e36),_0x1b3c6b=$dataWeapons[_0x40022a];if($gameParty['getShopTrackingItemSell'](_0x1b3c6b)>=0x1)return!![];}if(_0x3595f6['match'](/(?:BUY|BOUGHT) ARMOR[ ](.*):[ ](\d+)/i)){const _0x1bc73f=String(RegExp['$1']),_0x1a8bc3=/^\d+$/[_0xd6b927(0x1d6)](_0x1bc73f),_0x151ec6=_0x1a8bc3?_0x1bc73f:this[_0xd6b927(0x1d3)](_0x1bc73f),_0x494b5e=$dataArmors[_0x151ec6];if($gameParty[_0xd6b927(0x1ca)](_0x494b5e)>=0x1)return!![];}if(_0x3595f6['match'](/(?:SELL|SOLD) ARMOR[ ](.*):[ ](\d+)/i)){const _0x2dcd86=String(RegExp['$1']),_0x10e786=/^\d+$/[_0xd6b927(0x1d6)](_0x2dcd86),_0x50b3a8=_0x10e786?_0x2dcd86:this[_0xd6b927(0x1d3)](_0x2dcd86),_0x1fbfc6=$dataArmors[_0x50b3a8];if($gameParty[_0xd6b927(0x20d)](_0x1fbfc6)>=0x1)return!![];}}}}return![];},TextManager['SHOP_LIST_UNLOCK']={'priceText':VisuMZ['ShopListUnlock'][_0x58632e(0x208)][_0x58632e(0x20a)][_0x58632e(0x233)]??_0x58632e(0x1d4),'title':VisuMZ[_0x58632e(0x259)][_0x58632e(0x208)][_0x58632e(0x20a)][_0x58632e(0x22b)]??_0x58632e(0x22a),'itemBuyFmt':VisuMZ[_0x58632e(0x259)]['Settings'][_0x58632e(0x20a)][_0x58632e(0x269)]??_0x58632e(0x1da),'itemSellFmt':VisuMZ['ShopListUnlock'][_0x58632e(0x208)][_0x58632e(0x20a)][_0x58632e(0x216)]??_0x58632e(0x253),'itemNameFmt':VisuMZ[_0x58632e(0x259)]['Settings'][_0x58632e(0x20a)]['itemNameFmt']??_0x58632e(0x1dc),'goldFromBuyFmt':VisuMZ[_0x58632e(0x259)][_0x58632e(0x208)]['Vocab'][_0x58632e(0x201)]??'Spent\x20\x5cI[314]%1','goldFromSellFmt':VisuMZ[_0x58632e(0x259)][_0x58632e(0x208)]['Vocab'][_0x58632e(0x250)]??_0x58632e(0x1cc),'numberDisplayFmt':VisuMZ[_0x58632e(0x259)][_0x58632e(0x208)]['Vocab'][_0x58632e(0x240)]??'×%1/%2'},Window_ShopBuy[_0x58632e(0x21c)]={'showUnlistedRuling':VisuMZ[_0x58632e(0x259)][_0x58632e(0x208)][_0x58632e(0x20b)]['showUnlistedRuling']??_0x58632e(0x1e3),'changeUnlistedPrice':VisuMZ['ShopListUnlock'][_0x58632e(0x208)]['Window'][_0x58632e(0x218)]??!![],'changeUnlistedBgColor':VisuMZ[_0x58632e(0x259)][_0x58632e(0x208)][_0x58632e(0x20b)][_0x58632e(0x1f0)]??!![],'unlistedBgColor1':VisuMZ[_0x58632e(0x259)]['Settings'][_0x58632e(0x20b)][_0x58632e(0x215)]??0xf,'unlistedBgColor2':VisuMZ['ShopListUnlock'][_0x58632e(0x208)][_0x58632e(0x20b)][_0x58632e(0x24b)]??0x13},VisuMZ[_0x58632e(0x259)][_0x58632e(0x222)]=Window_ShopBuy[_0x58632e(0x260)][_0x58632e(0x210)],Window_ShopBuy[_0x58632e(0x260)][_0x58632e(0x210)]=function(_0x421a55){const _0x38e2bc=_0x58632e;let _0x49ee9b=VisuMZ[_0x38e2bc(0x259)][_0x38e2bc(0x222)][_0x38e2bc(0x1f1)](this,_0x421a55);if(!_0x49ee9b)return null;if(DataManager['isShopListingUnlocked'](_0x49ee9b))return _0x49ee9b;else{if(DataManager[_0x38e2bc(0x24d)](_0x49ee9b))return _0x49ee9b;}return null;},VisuMZ[_0x58632e(0x259)][_0x58632e(0x1df)]=Window_ShopBuy['prototype']['isEnabled'],Window_ShopBuy['prototype'][_0x58632e(0x1d9)]=function(_0x459bf8){const _0x4607c1=_0x58632e;if(_0x459bf8&&!DataManager['isShopListingUnlocked'](_0x459bf8))return![];return VisuMZ[_0x4607c1(0x259)][_0x4607c1(0x1df)][_0x4607c1(0x1f1)](this,_0x459bf8);},VisuMZ['ShopListUnlock']['Window_ShopBuy_drawItemCost']=Window_ShopBuy[_0x58632e(0x260)][_0x58632e(0x257)],Window_ShopBuy['prototype'][_0x58632e(0x257)]=function(_0x44f751,_0x32229c){const _0x213ffb=_0x58632e;if(_0x44f751&&!DataManager[_0x213ffb(0x23c)](_0x44f751)&&Window_ShopBuy[_0x213ffb(0x21c)][_0x213ffb(0x218)]){if(_0x213ffb(0x20c)===_0x213ffb(0x206)){if(_0x281f64['getShopTrackingGoldBuy']()>=0x1)return!![];}else this[_0x213ffb(0x274)](_0x32229c);}else _0x213ffb(0x276)!==_0x213ffb(0x276)?_0x51117a=_0x213ffb(0x1ec)['format'](_0x51545f['id']):VisuMZ[_0x213ffb(0x259)][_0x213ffb(0x26b)][_0x213ffb(0x1f1)](this,_0x44f751,_0x32229c);},VisuMZ[_0x58632e(0x259)][_0x58632e(0x267)]=Window_Selectable[_0x58632e(0x260)]['drawItemBackground'],Window_Selectable[_0x58632e(0x260)]['drawItemBackground']=function(_0xdc8327){const _0x54106a=_0x58632e;this[_0x54106a(0x1cf)]===Window_ShopBuy&&this['shouldChangeUnlistedItemBackground'](_0xdc8327)?this[_0x54106a(0x22e)](_0xdc8327):VisuMZ[_0x54106a(0x259)][_0x54106a(0x267)][_0x54106a(0x1f1)](this,_0xdc8327);},Window_ShopBuy[_0x58632e(0x260)][_0x58632e(0x21e)]=function(_0x5ecc63){const _0x1f1c8e=_0x58632e;if(!Window_ShopBuy[_0x1f1c8e(0x21c)][_0x1f1c8e(0x1f0)])return![];const _0x4466fb=this[_0x1f1c8e(0x1e6)](_0x5ecc63);if(!_0x4466fb)return![];if(DataManager[_0x1f1c8e(0x23c)](_0x4466fb))return![];return!![];},Window_ShopBuy[_0x58632e(0x260)][_0x58632e(0x22e)]=function(_0x2ac6a5){const _0x562b66=_0x58632e,_0x4d6934=Window_ShopBuy[_0x562b66(0x21c)],_0x12284a=ColorManager[_0x562b66(0x211)](_0x4d6934[_0x562b66(0x215)]),_0x241f06=ColorManager['getColor'](_0x4d6934[_0x562b66(0x24b)]),_0x5b7df6=this[_0x562b66(0x256)](_0x2ac6a5),_0x13b52a=_0x5b7df6['x'],_0x2e49a9=_0x5b7df6['y'],_0x32f4fd=_0x5b7df6[_0x562b66(0x20e)],_0x5968e0=_0x5b7df6[_0x562b66(0x24a)];this[_0x562b66(0x1ff)][_0x562b66(0x1e2)](_0x13b52a,_0x2e49a9,_0x32f4fd,_0x5968e0,_0x12284a,_0x241f06,!![]),this[_0x562b66(0x1ff)]['strokeRect'](_0x13b52a,_0x2e49a9,_0x32f4fd,_0x5968e0,_0x12284a);},Window_ShopBuy[_0x58632e(0x260)][_0x58632e(0x274)]=function(_0x5a45e6){const _0x813b4=_0x58632e,_0x567be2=TextManager[_0x813b4(0x21c)][_0x813b4(0x233)]['trim'](),_0x28a7d8=this[_0x813b4(0x220)](_0x567be2)['width'],_0xb59e89=_0x5a45e6['width']-_0x28a7d8;this[_0x813b4(0x231)](_0x567be2,_0xb59e89,_0x5a45e6['y']);},Window_ShopStatus['SHOP_LIST_UNLOCK']={'showRequirements':VisuMZ[_0x58632e(0x259)][_0x58632e(0x208)][_0x58632e(0x20b)][_0x58632e(0x1d2)]??!![],'numberMetColor':VisuMZ[_0x58632e(0x259)]['Settings'][_0x58632e(0x20b)]['numberMetColor']??0x18},VisuMZ[_0x58632e(0x259)][_0x58632e(0x23d)]=Window_ShopStatus['prototype']['setItem'],Window_ShopStatus[_0x58632e(0x260)][_0x58632e(0x224)]=function(_0x4ca867){const _0xe3fa25=_0x58632e;this[_0xe3fa25(0x217)](_0x4ca867)?this['setShopListingUnlockItem'](_0x4ca867):VisuMZ['ShopListUnlock'][_0xe3fa25(0x23d)][_0xe3fa25(0x1f1)](this,_0x4ca867);},Window_ShopStatus[_0x58632e(0x260)][_0x58632e(0x217)]=function(_0x4706c9){const _0x36cc5e=_0x58632e;if(!_0x4706c9)return![];if(!Window_ShopStatus[_0x36cc5e(0x21c)][_0x36cc5e(0x1d2)])return![];if(DataManager[_0x36cc5e(0x23c)](_0x4706c9))return![];if(DataManager[_0x36cc5e(0x1f5)](_0x4706c9))return![];return!![];},Window_ShopStatus[_0x58632e(0x260)][_0x58632e(0x22c)]=function(_0x326ccd){const _0x3eef2e=_0x58632e;this[_0x3eef2e(0x219)]=_0x326ccd,this['contents'][_0x3eef2e(0x1ed)](),this[_0x3eef2e(0x1ff)][_0x3eef2e(0x1ed)](),this[_0x3eef2e(0x270)](_0x326ccd);},Window_ShopStatus[_0x58632e(0x260)][_0x58632e(0x270)]=function(_0x22c332){const _0x936126=_0x58632e;let _0x44ea8c=this[_0x936126(0x25f)]();_0x44ea8c=this['drawShopListingUnlockList'](_0x44ea8c,_0x22c332),this[_0x936126(0x21a)](_0x44ea8c);},Window_ShopStatus['prototype'][_0x58632e(0x25f)]=function(){const _0x2d5e65=_0x58632e,_0x30078c=TextManager[_0x2d5e65(0x21c)]['title']||'',_0x56e7e3=this[_0x2d5e65(0x220)](_0x30078c)[_0x2d5e65(0x20e)],_0x1eb8d7=Math['floor']((this['innerWidth']-_0x56e7e3)/0x2);return this[_0x2d5e65(0x231)](_0x30078c,_0x1eb8d7,0x0),this[_0x2d5e65(0x1e0)](0x0,0x0,this['innerWidth'],this['lineHeight'](),0x1),this[_0x2d5e65(0x1f4)]();},Window_ShopStatus[_0x58632e(0x260)][_0x58632e(0x1cb)]=function(_0x101855,_0x3c958f){const _0x58f994=_0x58632e,_0x3200a7=VisuMZ[_0x58f994(0x259)][_0x58f994(0x21f)],_0x45d7f5=_0x3c958f[_0x58f994(0x203)]||'';if(_0x45d7f5[_0x58f994(0x245)](_0x3200a7['ShopUnlock'])){const _0x36c485=String(RegExp['$1'])[_0x58f994(0x242)](/[\r\n]+/)['remove']('');for(const _0x219d1c of _0x36c485){if(_0x58f994(0x262)==='cCIRt')_0x101855=this[_0x58f994(0x25d)](_0x101855,_0x219d1c);else{const _0x5b8cb7=_0x533da3(_0xd77a49['$1'])['split'](/[\r\n]+/)[_0x58f994(0x264)]('');for(const _0x2029ab of _0x5b8cb7){_0xf5044b=this[_0x58f994(0x25d)](_0x267238,_0x2029ab);}}}}return _0x101855;},Window_ShopStatus[_0x58632e(0x260)][_0x58632e(0x25d)]=function(_0x32becf,_0x508b81){const _0x3fe7f7=_0x58632e,_0x261f09=TextManager[_0x3fe7f7(0x21c)];let _0x2ed12a='',_0x1c09c3='',_0x374a87='',_0x1c81f2='',_0x28ac50=_0x3fe7f7(0x249),_0x2f00b3=null;_0x508b81[_0x3fe7f7(0x245)](/(?:BUY|BOUGHT|SPENT|SPEND) GOLD:[ ](\d+)/i)&&(_0x2ed12a=Number(RegExp['$1']),_0x1c09c3=$gameParty[_0x3fe7f7(0x1fb)](),_0x2f00b3='gold',_0x28ac50=_0x3fe7f7(0x249));_0x508b81[_0x3fe7f7(0x245)](/(?:SELL|SOLD|EARN|EARNED|GAIN|GAINED) GOLD:[ ](\d+)/i)&&(_0x2ed12a=Number(RegExp['$1']),_0x1c09c3=$gameParty[_0x3fe7f7(0x226)](),_0x2f00b3=_0x3fe7f7(0x25b),_0x28ac50=_0x3fe7f7(0x23b));if(_0x508b81[_0x3fe7f7(0x245)](/(?:BUY|BOUGHT) ITEM[ ](.*):[ ](\d+)/i)){const _0x27abd9=String(RegExp['$1']);_0x2ed12a=Number(RegExp['$2']);const _0x1898e6=/^\d+$/[_0x3fe7f7(0x1d6)](_0x27abd9),_0x4ac0df=_0x1898e6?_0x27abd9:DataManager[_0x3fe7f7(0x244)](_0x27abd9);_0x2f00b3=$dataItems[_0x4ac0df],_0x28ac50=_0x3fe7f7(0x249);}if(_0x508b81[_0x3fe7f7(0x245)](/(?:SELL|SOLD) ITEM[ ](.*):[ ](\d+)/i)){const _0x272637=String(RegExp['$1']);_0x2ed12a=Number(RegExp['$2']);const _0x375e44=/^\d+$/['test'](_0x272637),_0x1ec38c=_0x375e44?_0x272637:DataManager[_0x3fe7f7(0x244)](_0x272637);_0x2f00b3=$dataItems[_0x1ec38c],_0x28ac50=_0x3fe7f7(0x23b);}if(_0x508b81[_0x3fe7f7(0x245)](/(?:BUY|BOUGHT) WEAPON[ ](.*):[ ](\d+)/i)){const _0x4d8f69=String(RegExp['$1']);_0x2ed12a=Number(RegExp['$2']);const _0x167e6e=/^\d+$/[_0x3fe7f7(0x1d6)](_0x4d8f69),_0x4d19e2=_0x167e6e?_0x4d8f69:DataManager[_0x3fe7f7(0x246)](_0x4d8f69);_0x2f00b3=$dataWeapons[_0x4d19e2],_0x28ac50=_0x3fe7f7(0x249);}if(_0x508b81[_0x3fe7f7(0x245)](/(?:SELL|SOLD) WEAPON[ ](.*):[ ](\d+)/i)){if(_0x3fe7f7(0x212)!==_0x3fe7f7(0x212))this[_0x3fe7f7(0x217)](_0x179384)?this['setShopListingUnlockItem'](_0x3b38c9):_0xccc291[_0x3fe7f7(0x259)][_0x3fe7f7(0x23d)][_0x3fe7f7(0x1f1)](this,_0x35a9b3);else{const _0x35faba=String(RegExp['$1']);_0x2ed12a=Number(RegExp['$2']);const _0x4c0c1c=/^\d+$/[_0x3fe7f7(0x1d6)](_0x35faba),_0x17dfea=_0x4c0c1c?_0x35faba:DataManager['getWeaponIdWithName'](_0x35faba);_0x2f00b3=$dataWeapons[_0x17dfea],_0x28ac50=_0x3fe7f7(0x23b);}}if(_0x508b81[_0x3fe7f7(0x245)](/(?:BUY|BOUGHT) ARMOR[ ](.*):[ ](\d+)/i)){if(_0x3fe7f7(0x21b)==='fHOBw'){const _0x47652e=String(RegExp['$1']);_0x2ed12a=Number(RegExp['$2']);const _0x3db4ac=/^\d+$/[_0x3fe7f7(0x1d6)](_0x47652e),_0x36f905=_0x3db4ac?_0x47652e:DataManager[_0x3fe7f7(0x1d3)](_0x47652e);_0x2f00b3=$dataArmors[_0x36f905],_0x28ac50=_0x3fe7f7(0x249);}else _0x52721b=this[_0x3fe7f7(0x25d)](_0x5263e7,_0x3cb040);}if(_0x508b81[_0x3fe7f7(0x245)](/(?:SELL|SOLD) ARMOR[ ](.*):[ ](\d+)/i)){if('YSTcw'!==_0x3fe7f7(0x248))return _0x35ca18;else{const _0x42790c=String(RegExp['$1']);_0x2ed12a=Number(RegExp['$2']);const _0x1dec06=/^\d+$/[_0x3fe7f7(0x1d6)](_0x42790c),_0x541e3f=_0x1dec06?_0x42790c:DataManager[_0x3fe7f7(0x1d3)](_0x42790c);_0x2f00b3=$dataArmors[_0x541e3f],_0x28ac50=_0x3fe7f7(0x23b);}}if(_0x2f00b3){if(_0x3fe7f7(0x227)!==_0x3fe7f7(0x1fd)){if(_0x2f00b3===_0x3fe7f7(0x25b)){const _0x335436=_0x28ac50===_0x3fe7f7(0x249)?_0x261f09[_0x3fe7f7(0x201)]:_0x261f09[_0x3fe7f7(0x250)];_0x374a87=_0x335436['format'](TextManager[_0x3fe7f7(0x1f6)]);}else{if(_0x3fe7f7(0x1e7)!==_0x3fe7f7(0x1fa)){const _0xde34d9=_0x28ac50===_0x3fe7f7(0x249)?_0x261f09[_0x3fe7f7(0x269)]:_0x261f09[_0x3fe7f7(0x216)],_0x224221=_0x3fe7f7(0x235)[_0x3fe7f7(0x26e)](_0x2f00b3[_0x3fe7f7(0x1f8)]),_0x1e30de=_0x261f09[_0x3fe7f7(0x1d7)]['format'](_0x2f00b3[_0x3fe7f7(0x275)],_0x224221);_0x374a87=_0xde34d9[_0x3fe7f7(0x26e)](_0x1e30de);}else{if(!_0x597f54)return![];if(!_0x27b927[_0x3fe7f7(0x21c)][_0x3fe7f7(0x1d2)])return![];if(_0x3da22d[_0x3fe7f7(0x23c)](_0x5ddd1e))return![];if(_0x5f38c1[_0x3fe7f7(0x1f5)](_0x46385e))return![];return!![];}}const _0x515410=_0x261f09[_0x3fe7f7(0x240)];_0x1c09c3=$gameParty['getShopTrackingItem'](_0x28ac50,_0x2f00b3),_0x1c81f2=_0x515410['format'](_0x1c09c3,_0x2ed12a);if(_0x1c09c3>=_0x2ed12a){const _0x199e49=Window_ShopStatus[_0x3fe7f7(0x21c)][_0x3fe7f7(0x213)];_0x1c81f2=_0x3fe7f7(0x26a)['format'](_0x199e49,_0x1c81f2);}const _0x30e8b7=0x0,_0x3cd55d=this[_0x3fe7f7(0x241)],_0x448bc4=_0x32becf;let _0x1f1241=this[_0x3fe7f7(0x1f4)]();this[_0x3fe7f7(0x232)](_0x374a87,_0x30e8b7,_0x32becf,_0x3cd55d,!![],_0x3fe7f7(0x1e9));if(this['shouldShopListingUnlockHaveExtraLine'](_0x374a87,_0x1c81f2)){if(_0x3fe7f7(0x261)!==_0x3fe7f7(0x261)){const _0x3ac5c6=_0x3ff2f6===_0x3fe7f7(0x249)?_0x50e58e[_0x3fe7f7(0x269)]:_0x2eb739[_0x3fe7f7(0x216)],_0x5a20bc='\x5cI[%1]'['format'](_0x2e586c[_0x3fe7f7(0x1f8)]),_0x3bcfbb=_0x383c4f[_0x3fe7f7(0x1d7)][_0x3fe7f7(0x26e)](_0x309dbb['name'],_0x5a20bc);_0x2d08ca=_0x3ac5c6[_0x3fe7f7(0x26e)](_0x3bcfbb);}else _0x32becf+=this[_0x3fe7f7(0x1f4)](),_0x1f1241+=this[_0x3fe7f7(0x1f4)]();}this[_0x3fe7f7(0x232)](_0x1c81f2,_0x30e8b7,_0x32becf,_0x3cd55d,![],'right'),this[_0x3fe7f7(0x1e0)](_0x30e8b7,_0x448bc4,_0x3cd55d,_0x1f1241),_0x32becf+=this['lineHeight']();}else _0x3c3ff0=_0x1546c6(_0x47dbf5['$1']),_0x56e0f4=_0x5790d2['getShopTrackingGoldSell'](),_0x3043c9='gold',_0x2c5a45=_0x3fe7f7(0x23b);}return _0x32becf;},Window_ShopStatus[_0x58632e(0x260)][_0x58632e(0x239)]=function(_0x4fa066,_0x5f4c3d){const _0xd39d4b=_0x58632e;this[_0xd39d4b(0x22d)]=this[_0xd39d4b(0x223)]();const _0x5b97dc=this['textSizeEx'](_0x4fa066)[_0xd39d4b(0x20e)],_0x3960a4=this['textSizeEx'](_0x5f4c3d)[_0xd39d4b(0x20e)];this[_0xd39d4b(0x22d)]=undefined;let _0x2d83c9=this[_0xd39d4b(0x241)]-this['itemPadding']()*0x4;return _0x5b97dc+_0x3960a4>=_0x2d83c9;},Window_ShopStatus['prototype']['drawShopListingUnlockRemaining']=function(_0x2955f4){const _0x306f11=_0x58632e,_0x2d05cf=this[_0x306f11(0x255)]-_0x2955f4;this['drawItemDarkRect'](0x0,_0x2955f4,this[_0x306f11(0x241)],_0x2d05cf,0x1);};