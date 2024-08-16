//=============================================================================
// VisuStella MZ - Item Crafting System
// VisuMZ_2_ItemCraftingSys.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_ItemCraftingSys = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemCraftingSys = VisuMZ.ItemCraftingSys || {};
VisuMZ.ItemCraftingSys.version = 1.21;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.21] [ItemCraftingSys]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Item_Crafting_System_VisuStella_MZ
 * @base VisuMZ_1_ItemsEquipsCore
 * @orderAfter VisuMZ_1_ItemsEquipsCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Item crafting has become a common feature in many RPG's. However, it is not
 * a feature included by default with RPG Maker MZ. This plugin adds in a scene
 * that supports item crafting, either through the main menu, or through an
 * event initiated command.
 * 
 * Craftable items are normally all available by default, but they can be
 * barred away through switch requirements. Upon crafting items, switches can
 * also be turned on/off to make a progression system if desired.
 * 
 * Item ingredients can be items, weapons, armors, and cost gold as well.
 * Multiple ingredients can be required at a time or just one. Some items can
 * also be set to only be craftable at custom crafting areas.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Adds an item crafting scene to the game.
 * * Item crafting scene can be accessible from the Main Menu or through
 *   event-based Plugin Commands.
 * * Crafting ingredients can consist of items, weapons, armors, and gold.
 * * Crafting specific items can require switches to be turned on in order to
 *   be listed in the crafting list.
 * * Upon crafting specific items, they can also turn on/off other switches,
 *   making a progression system to be possible.
 * * Custom item crafting effects can occur for those who understand JavaScript
 *   to implement.
 * * This plugin can mask the names of uncrafted items, too.
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
 * - VisuMZ_1_ItemsEquipsCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
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
 * Proxy Items
 * 
 * Proxy Items are temporary substitutes for another. When they are acquired
 * through crafting, they will turn into the item, weapon, or armor they are a
 * proxy for. Only the icon, name, help description, and status details will
 * match up. Everything else will remain separate such as the notetag data and
 * the ingredients list. This allows you to effectively have multiple ways to
 * craft the same item using different recipes.
 * 
 * For more details, look inside of the Notetags section for Proxy items.
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
 * VisuMZ_2_ShopCommonEvents
 * 
 * If VisuStella MZ's Shop Common Events is present, you can utilize its
 * Common Event function to trigger upon crafting items, weapons, and/or armors
 * to take the player outside of the shop and returning back.
 * 
 * The following notetags will become usable:
 * 
 *   <Once Craft Common Event: id>
 * 
 *   <Once Craft Common Event Switch: id>
 *   <Once Craft Common Event All Switches: id, id, id>
 *   <Once Craft Common Event Any Switches: id, id, id>
 * 
 *   <Repeat Craft Common Event: id>
 *
 *   <Repeat Craft Common Event Switch: id>
 *   <Repeat Craft Common Event All Switches: id, id, id>
 *   <Repeat Craft Common Event Any Switches: id, id, id>
 * 
 * The following Plugin Commands will become usable:
 * 
 *   Scene: Common Event Return
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
 * === General Notetags ===
 * 
 * These notetags are used to mark the item as a craftable item or as items
 * that can only be crafted through a custom crafting list.
 *
 * ---
 *
 * <Crafting Ingredients>
 *  Item id: x
 *  Item name: x
 *  Weapon id: x
 *  Weapon name: x
 *  Armor id: x
 *  Armor name: x
 *  Gold: x
 *  Category name: x
 * </Crafting Ingredients>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Turns this item/weapon/armor into a craftable item by using the listed
 *   ingredients to craft with.
 * - If the 'Category name' variant is used, it will draw from all items,
 *   weapons, and armors that have matching <Category: x> notetag data.
 * - Insert/delete any number of copies of the ingredients as needed.
 * - Replace 'id' with the item/weapon/armor ID of the ingredient to be used.
 * - Replace 'name' with the name of the item/weapon/armor/category to be used.
 * - Replace 'x' with the number of ingredients needed to be used for crafting.
 * 
 * Category Rules:
 * 
 * - If the 'Category name' variant is used, it will draw from all items,
 *   weapons, and armors that have matching <Category: x> notetag data.
 * - Multiples of the same category name can be used. However, the player must
 *   select different items each time.
 * - If the selected category item already exists as a static ingredient, that
 *   item cannot be selected either.
 * 
 * Examples:
 * 
 * <Crafting Ingredients>
 *  Item 5: 1
 *  Item 6: 3
 *  Gold: 100
 * </Crafting Ingredients>
 * 
 * <Crafting Ingredients>
 *  Item Potion: 1
 *  Item Magic Water: 3
 *  Gold: 100
 * </Crafting Ingredients>
 * 
 * <Crafting Ingredients>
 *  Weapon 1: 4
 *  Armor 2: 2
 * </Crafting Ingredients>
 * 
 * <Crafting Ingredients>
 *  Weapon Sword: 4
 *  Armor Hat: 2
 * </Crafting Ingredients>
 * 
 * <Crafting Ingredients>
 *  Category Fruit: 2
 *  Category Meat: 3
 * </Crafting Ingredients>
 * 
 * ---
 *
 * <Custom Crafting Only>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - This item can only be crafted with custom crafting lists selected through
 *   the Plugin Command.
 *
 * ---
 * 
 * === Proxy Notetags ===
 * 
 * ---
 * 
 * <Proxy: id>
 * <Proxy: name>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - REQUIRES the most up to date VisuMZ Items and Equips Core!
 * - Turns this item, weapon, or armor into a proxy for another item, allowing
 *   you to create recipes with different ingredients in <Crafting Ingredients>
 *   notetag contents and yield the same item.
 * - The proxy item itself will take on the name, icon, and description of the
 *   original item it is supposed to represent.
 * - No other properties are carried over from the original.
 * - When viewed through the Window_ShopStatus window, the contents will
 *   reference the original item and not the proxy item.
 * - Proxy items themselves cannot be acquired. This includes event commands,
 *   item drops, or equips.
 * - When crafted, the item yielded won't be the proxy item but the item it is
 *   a proxy for.
 * - Replace 'id' with a number representing the item, weapon, or armor ID of
 *   the same item type. If the proxy is an item, this will reference an item.
 *   If the proxy is a weapon, this will reference a weapon. Same for armors.
 * - Replace 'name' with text representing the item, weapon, or armor's name.
 *   The referenced item needs to be the same item type as the proxy. Item for
 *   item, weapon for weapon, armor for armor.
 * 
 * ---
 * 
 * === Switch-Related Notetags ===
 * 
 * These notetags can make item crafting require certain switches to be on,
 * or turn switches on/off upon crafting items.
 *
 * ---
 *
 * <Crafting Show Switch: x>
 * 
 * <Crafting Show All Switches: x,x,x>
 * <Crafting Show Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the craftable item in the crafting scene.
 * - Replace 'x' with the switch ID to determine the item's visibility.
 * - If 'All' notetag variant is used, item will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, item will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 * - Insert as many switch ID's as needed.
 * - This can be bypassed with the custom Item Crafting list plugin command
 *   option if enabled.
 *
 * ---
 *
 * <Crafting Turn On Switch: x>
 * <Crafting Turn On Switches: x,x,x>
 * 
 * <Crafting Turn Off Switch: x>
 * <Crafting Turn Off Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Upon crafting this item, turn on/off the marked switch(es).
 * - Replace 'x' with the switch ID to turn on/off.
 *
 * ---
 * 
 * === Masking-Related Notetags ===
 * 
 * These notetags can are used to determine name-masking properties for
 * uncrafted items.
 *
 * ---
 *
 * <Crafting Mask: text>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Displays the specific 'text' when the item has not yet been crafted.
 * - Replace 'text' with the text you wish to display if the item has not yet
 *   been crafted by the player.
 * - This can be bypassed with the custom Item Crafting list plugin command
 *   option if enabled.
 *
 * ---
 *
 * <Crafting No Mask>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Bypasses name masking even if the item has not yet been crafted.
 *
 * ---
 * 
 * === JavaScript Notetag: Effect-Related ===
 * 
 * The following are notetags made for users with JavaScript knowledge to
 * make custom effects that occur upon crafting the item.
 *
 * ---
 *
 * <JS Crafting Effect>
 *  code
 *  code
 *  code
 * </JS Crafting Effect>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' with JavaScript code to determine what kinds of effects you
 *   want to occur upon crafting this item.
 * - The 'item' variable represents the item being crafted.
 * - The 'number' variable represents the number of items being crafted.
 *
 * ---
 * 
 * === Crafting Animation-Related Notetags ===
 * 
 * These notetags let you set custom crafting animations when a specific item,
 * weapon, or armor is crafted so that way, they don't all have to use the
 * default crafting animation from the plugin parameters.
 * 
 * ---
 * 
 * <Crafting Animation: id>
 * <Crafting Animation: id, id, id>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Plays the animation(s) when this item, weapon, or armor is crafted.
 * - This will override the default animation settings found in the plugin
 *   parameters and use the unique one set through notetags instead.
 * - Replace 'id' with the ID of the animation you wish to play.
 * - If multiple ID's are found, then each animation will play one by one in
 *   the order they are listed.
 * 
 * ---
 * 
 * <Crafting Fade Speed: x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - This determines the speed at which the item's icon fades in during the
 *   crafting animation.
 * - Replace 'x' with a number value to determine how fast the icon fades in.
 * - Use lower numbers for slower fade speeds and higher numbers for faster
 *   fade speeds.
 * 
 * ---
 * 
 * <Crafting Picture: filename>
 * <Picture: filename>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Uses a picture from your project's /img/pictures/ folder instead of the
 *   item, weapon, or armor's icon during crafting instead.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Scaling will not apply to the picture.
 * - Use the <Picture: filename> version for any other plugins that may be
 *   using this as an image outside of crafting, too.
 * - The size used for the image will vary based on your game's resolution.
 * 
 * ---
 * 
 * === Crafting Common Event Notetags ===
 * 
 * ---
 *
 * <Once Craft Common Event: id>
 * <Repeat Craft Common Event: id>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_2_ShopCommonEvents!
 * - This will cause a specific Common Event to launch when crafted.
 * - Replace 'id' with a number representing the ID of the Common Event that
 *   you wish to launch upon this item being crafted.
 * - The "Once" notetag variant will only occur once when crafted.
 *   - Any subsequent purchases of the item will not launch the Common Event.
 * - The "Repeat" notetag variant will occur repeatedly when crafted.
 * - If both "Once" and "Repeat" notetags are present in the item, then the
 *   "Once" variant will take priority first. Any subsequent purchases will go
 *   to the "Repeat" variant.
 * - Any switch requirement notetags need to be met in order for either
 *   notetag to have any effect.
 * - Use the Plugin Command "Scene: Common Event Return" to return back to the
 *   last Item Crafting scene.
 *
 * ---
 * 
 * === Crafting Common Event Requirement-Related Notetags ===
 * 
 * ---
 *
 * <Once Craft Common Event Switch: id>
 * <Once Craft Common Event All Switches: id, id, id>
 * <Once Craft Common Event Any Switches: id, id, id>
 *
 * <Repeat Craft Common Event Switch: id>
 * <Repeat Craft Common Event All Switches: id, id, id>
 * <Repeat Craft Common Event Any Switches: id, id, id>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires the respective Craft Common Events to have these Switches enabled
 *   in the "ON" position in order for them to launch.
 *   - "Once" variant will only affect the "Once" notetag variants.
 *   - "Repeat" variant will only affect the "Repeat" notetag variants.
 * - The "All" variant will require all listed Switch ID's to be "ON".
 * - The "Any" variant will require only one listed Switch ID to be "ON".
 * - Replace 'id' with a number representing the Switch ID that needs to be in
 *   the "ON" position for the requirement to be met.
 *   - Insert multiple 'id' to require more Switch ID's.
 *
 * ---
 * 
 * === Batch-Related Notetags ===
 * 
 * ---
 *
 * <Craft Batch>
 *  listing
 *  listing
 *  listing
 * </Craft Batch>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_3_ShopBatches!
 * - Creates a list of items, weapons, and armors that the player will gain
 *   when this batch object is crafted.
 *   - This also means that in addition to this notetag, the notetag for
 *     <Crafting Ingredients> is also needed.
 *   - This item will also not be masked.
 * - Proxy items, weapons, or armors cannot be listed and will be bypassed.
 * - This item, weapon, or armor cannot be crafted if all of the listed items,
 *   weapons, or armors are at max quantity within the party's inventory.
 * - The listed items will NOT utilize any on craft effects for the individual
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
 *     weapons, or armors that will be acquired when the batch item is crafted.
 *     - If the variant without 'quantity' is used, quantity will default to 1.
 * 
 *   Examples:
 * 
 *   ---
 * 
 *   <Craft Batch>
 *    Item Potion: 10
 *    Item Super Potion: 5
 *    Weapon Short Sword: 3
 *    Weapon Long Sword: 2
 *    Armor Linen Clothing: 4
 *    Armor Cloth Armor: 3
 *   </Craft Batch>
 * 
 *   ---
 * 
 *   <Craft Batch>
 *    Item 7: 10
 *    Item 8: 5
 *    Weapon 1: 3
 *    Weapon 2: 2
 *    Armor 2: 4
 *    Armor 8: 3
 *   </Craft Batch>
 * 
 *   ---
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
 * === Scene ===
 * 
 * ---
 *
 * Scene: Item Crafting (All)
 * - Go to the Item Crafting scene.
 * - All enabled recipes will be available.
 *
 * ---
 *
 * Scene: Item Crafting (Custom)
 * - Go to the Item Crafting scene.
 * - Select specific items to craft here.
 * - Some items can only appear through custom lists like this by using the
 *   <Custom Crafting Only> notetag.
 *
 *   Items:
 *   - Select which Item ID(s) to become craftable.
 *
 *   Weapons:
 *   - Select which Weapon ID(s) to become craftable.
 *
 *   Armors:
 *   - Select which armor ID(s) to become craftable.
 *
 *   Bypass Switches?:
 *   - Bypass any of the requirement switches?
 *
 *   Bypass Masks?:
 *   - Bypass name masking for uncrafted items?
 *
 * ---
 * 
 * Scene: Common Event Return
 * - Return to the last shop if coming from a Crafting Common Event.
 * - Requires VisuMZ_2_ShopCommonEvents!
 * 
 * ---
 * 
 * === System ===
 * 
 * ---
 *
 * System: Enable Crafting in Menu?
 * - Enables/disables Crafting menu inside the main menu.
 *
 *   Enable/Disable?:
 *   - Enables/disables Crafting menu inside the main menu.
 *
 * ---
 *
 * System: Show Crafting in Menu?
 * - Shows/hides Crafting menu inside the main menu.
 *
 *   Show/Hide?:
 *   - Shows/hides Crafting menu inside the main menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings pertaining to Item Crafting.
 *
 * ---
 *
 * Scene_ItemCrafting
 * 
 *   Assist Button:
 *   - Text used to for the Button Assist Window's OK button when about ready
 *     to craft an item.
 * 
 *   Crafted Icon:
 *   - Icon used to depict of an item has already been crafted.
 * 
 *   Ingredient Bridge:
 *   - Text used to bridge ingredients in the item crafting scene.
 *
 * ---
 * 
 * Switches
 * 
 *   Switch: Craft:
 *   - Crafting items in Crafting Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Crafting Scene opens.
 * 
 * ---
 * 
 * Categories
 * 
 *   Category Title:
 *   - Text format used for display categories.
 *   - %1 - Category Name, %2 - Needed Quantity
 * 
 *   Selected Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Selected Text:
 *   - This is the add on text that is displayed after an item's name that's
 *     already an ingredient.
 * 
 *   Uncategorized Text:
 *   - Text used for an uncategorized item category.
 * 
 *   Uncategorized Icon:
 *   - Icon used for uncategorized item category.
 * 
 * ---
 * 
 * Vocabulary
 * 
 *   Owned:
 *   -Text used for how much of an item is owned.
 * 
 *   Shift:
 *   - Text used for the change in value.
 * 
 *   Net:
 *   - Text used for the net result.
 * 
 * ---
 *
 * Global JS Effects
 * 
 *   JS: Listing:
 *   - Code that is run globally across all items when checking if an item
 *     should be listed or not.
 * 
 *   JS: Craft Effect:
 *   - Code that is run globally across all items when crafted.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Masking Settings
 * ============================================================================
 *
 * Masking settings related to uncrafted items.
 *
 * ---
 *
 * Masking
 * 
 *   Enable Masking:
 *   - Enable masking for uncrafted items?
 * 
 *   Italics For Masking:
 *   - Use Italics when masking?
 * 
 *   Mask Character:
 *   - Text used for masking per individual character.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Main Menu Settings
 * ============================================================================
 *
 * Main Menu settings for Item Crafting.
 *
 * ---
 *
 * Main Menu
 * 
 *   Command Name:
 *   - Name of the 'Crafting' option in the Main Menu.
 * 
 *   Show in Main Menu?:
 *   - Add the 'Crafting' option to the Main Menu by default?
 * 
 *   Enable in Main Menu?:
 *   - Enable the 'Crafting' option to the Main Menu by default?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Animation Settings
 * ============================================================================
 *
 * Default settings for playing animations after crafting.
 *
 * ---
 *
 * General
 * 
 *   Show Animations?:
 *   - Show animations when crafting an item?
 * 
 *   Show Windows?:
 *   - Show windows during an item crafting animation?
 * 
 *   Default Animations:
 *   - Default animation(s) do you want to play when crafting.
 *
 * ---
 *
 * Sprite
 * 
 *   Scale:
 *   - How big do you want the item sprite to be on screen?
 * 
 *   Fade Speed:
 *   - How fast do you want the item to fade in?
 *
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Crafting Sound Settings
 * ============================================================================
 *
 * Default settings for the sound effect played when crafting an item.
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
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_ItemCrafting.
 *
 * ---
 *
 * Background Settings
 * 
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 * 
 *   Background 1:
 *   Background 2:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Window settings pertaining to Item Crafting.
 *
 * ---
 *
 * Windows
 * 
 *   Requirement Font Size:
 *   - Font size used for requirement quantity.
 * 
 *   Show Tooltips:
 *   - Show tooltips when the mouse hovers over an ingredient?
 * 
 *   Custom Window Skin:
 *   - Select a custom window skin if you want the tooltip window to have one.
 *
 * ---
 *
 * Background Types
 * 
 *   Help Window:
 *   Category Window:
 *   Gold Window:
 *   List Window:
 *   Status Window:
 *   Ingredient Title:
 *   Ingredient List:
 *   Number Window:
 *   Button Assist Window:
 *   - Select background type for the specific window.
 *
 * ---
 * 
 * Custom Layout
 * 
 *   Added in version 1.20
 * 
 *   Enable Custom Layout:
 *   - Enable a custom layout or automatically create a layout based on the
 *     shop scene?
 * 
 *   Help Window JS:
 *   - Code used to determine the dimensions for this window.
 * 
 *   Category Window JS:
 *   - Code used to determine the dimensions for this window.
 *   - These settings are also used for the ingredients title window.
 * 
 *   Gold Window JS:
 *   - Code used to determine the dimensions for this window.
 * 
 *   Item Window JS:
 *   - Code used to determine the dimensions for this window.
 *   - These settings are also used for ingredients list and number windows.
 * 
 *   Status Window JS:
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
 * Version 1.21: July 18, 2024
 * * Compatibility Update!
 * ** Added compatibility with new Items and Equips Core features!
 * 
 * Version 1.20: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a crash that would cause a conflict with related non-crafting
 *    scenes. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Windows > Custom Layout
 * **** By enabling this, you can use JS to determine the window positions you
 *      want to layout in the item crafting scene. Otherwise, if left disabled,
 *      the plugin will automatically utilize the layout found in the shop
 *      scene to determine where the windows will go.
 * 
 * Version 1.19: February 15, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Arisu:
 * *** <Craft Batch>
 * **** When this "item" is crafted, yields multiples of the listed item.
 * **** Requires VisuMZ_3_ShopBatches
 * 
 * Version 1.18: August 4, 2022
 * * Bug Fixes!
 * ** Crafting an item on a different tab than the first will no longer reset
 *    back to the first tab. Fix made by Irina.
 * 
 * Version 1.17: July 14, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.16: May 12, 2022
 * * Compatibility Update
 * ** Compatibility with VisuMZ Shop Common Events added.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag effects added by Irina and sponsored by MirageV:
 * *** <Once Craft Common Event: id>
 * *** <Repeat Craft Common Event: id>
 * **** Requires VisuMZ_2_ShopCommonEvents!
 * **** This will cause a specific Common Event to launch when crafted.
 * *** <Once Craft Common Event Switch: id>
 * *** <Once Craft Common Event All Switches: id, id, id>
 * *** <Once Craft Common Event Any Switches: id, id, id>
 * *** <Repeat Craft Common Event Switch: id>
 * *** <Repeat Craft Common Event All Switches: id, id, id>
 * *** <Repeat Craft Common Event Any Switches: id, id, id>
 * **** Requires the respective Craft Common Events to have these Switches
 *      enabled in the "ON" position in order for them to launch.
 * ** New Plugin Command added by Irina and sponsored by MirageV:
 * *** Scene: Common Event Return
 * **** Requires VisuMZ_2_ShopCommonEvents!
 * **** Return to the last shop if coming from a Crafting Common Event.
 * 
 * Version 1.15: April 7, 2022
 * * Feature Update!
 * ** Any disappearing categories as a result of hiding recipes after crafting
 *    an item will result in the first category being selected.
 * 
 * Version 1.14: March 31, 2022
 * * Feature Update!
 * ** Failsafe added for situations where if the game dev decides to force an
 *    impossible situation in the Item Crafting scene (such as turning on a
 *    switch that erases all recipes), then the Item Scene will automatically
 *    exit out of it with zero prompts. Update made by Olivia.
 * 
 * Version 1.13: January 20, 2022
 * * Bug Fixes!
 * ** Tooltips for proxy items no longer show the original item's materials.
 *    Fix made by Olivia.
 * 
 * Version 1.12: December 23, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added Major Changes section for "Proxy Items".
 * * Feature Update!
 * ** Number window is now updated to show how much of an ingredient the player
 *    owns, how much will be consumed, and the number result of the crafting.
 * * New Features!
 * ** New notetags added by Arisu!
 * *** <Proxy: id>
 * *** <Proxy: name>
 * **** REQUIRES the most up to date VisuMZ Items and Equips Core!
 * **** Turns this item, weapon, or armor into a proxy for another item,
 *      allowing you to create recipes with different ingredients in
 *      <Crafting Ingredients> notetag contents and yield the same item.
 * **** The proxy item itself will take on the name, icon, and description of
 *      the original item it is supposed to represent.
 * **** No other properties are carried over from the original.
 * **** When viewed through the Window_ShopStatus window, the contents will
 *      reference the original item and not the proxy item.
 * **** Proxy items themselves cannot be acquired. This includes event
 *      commands, item drops, or equips.
 * **** When crafted, the item yielded won't be the proxy item but the item it
 *      is a proxy for.
 * **** Replace 'id' with a number representing the item, weapon, or armor ID
 *      of the same item type. If the proxy is an item, this will reference an
 *      item. If the proxy is a weapon, this will reference a weapon. Same for
 *      armors.
 * **** Replace 'name' with text representing the item, weapon, or armor's
 *      name. The referenced item needs to be the same item type as the proxy.
 *      Item for item, weapon for weapon, armor for armor.
 * ** New Plugin Parameters added by Arisu!
 * *** Plugin Parameters > General > Vocab > Owned
 * *** Plugin Parameters > General > Vocab > Shift
 * *** Plugin Parameters > General > Vocab > Net
 * **** These are new vocabulary terms for the new number window appearance.
 * 
 * Version 1.11: July 9, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.10: June 25, 2021
 * * Bug Fixes!
 * ** When exiting out of the ingredients list back towards the item selection
 *    window, the help window should now be properly updated. Fix by Irina.
 * 
 * Version 1.09: March 12, 2021
 * * Bug Fixes!
 * ** Having extra spaces before an ingredient's name should no longer cause
 *    problems to information parsing. Fix made by Irina.
 * 
 * Version 1.08: March 5, 2021
 * * Feature Update!
 * ** Plugin Commands and Item Crafting Scene option will not appear if you do
 *    not have any recipes prepared at all in your game. Update made by Irina.
 * 
 * Version 1.07: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > General Settings > Switches > Switch: Craft
 * **** Crafting items in Crafting Scene turns this Switch to ON.
 * **** Switch reverts to OFF whenever the Crafting Scene opens.
 * **** This can be used after an "Item Crafting" plugin command to determine
 *      if the player has crafted an item or not.
 * 
 * Version 1.06: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Yanfly.
 * *** <Crafting Picture: filename> and <Picture: filename>
 * **** Uses a picture from your project's /img/pictures/ folder instead of the
 *      item, weapon, or armor's icon during crafting instead.
 * 
 * Version 1.05: November 29, 2020
 * * Bug Fixes!
 * ** If on-screen touch buttons are disabled, they will no longer cause crash
 *    errors. Fix made by Arisu.
 * 
 * Version 1.04: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.03: November 8, 2020
 * * Feature Update!
 * ** Animations are now more compatible with the sprites. Update by Irina.
 * 
 * Version 1.02: October 25, 2020
 * * Bug Fixes!
 * ** Masked Names no longer show in the number input window. Fixed by Irina.
 * ** Plugin no longer requires a new game to be started in order for Item
 *    Crafting to work for the main menu. Fix made by Irina.
 * ** Touch Button for OK will no longer bypass the item requirements.
 *    Fix made by Irina.
 * ** Uncategorized items will now default to a newly created Uncategorized
 *    list of items. Fix made by Irina.
 * * Documentation Update!
 * ** Plugin Parameters > General is updated with "Uncategorized Text" and
 *    "Uncategorized Icon" for uncategorized items.
 *
 * Version 1.01: October 18, 2020
 * * Feature Update!
 * ** Bounce SFX pitch plugin parameter is now uncapped.
 * * Bug Fixes!
 * ** Color matches no longer crash the game if the matching amount is set to
 *    zero. Bug fixed by Yanfly.
 * ** Selecting a category without modern controls will now activate the list
 *    window. Bug fixed by Yanfly.
 * ** The Category Window no longer disappears when there's only one
 *    category. Bug fixed by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 *
 * Version 1.00 Official Release Date: November 2, 2020
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
 * @command ItemCraftingSceneOpen
 * @text Scene: Item Crafting (All)
 * @desc Go to the Item Crafting scene.
 * All enabled recipes will be available.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CustomItemCraftingSceneOpen
 * @text Scene: Item Crafting (Custom)
 * @desc Go to the Item Crafting scene.
 * Select specific items to craft here.
 * 
 * @arg Contents
 *
 * @arg Items:arraynum
 * @text Items
 * @type item[]
 * @parent Contents
 * @desc Select which Item ID(s) to become craftable.
 * @default []
 *
 * @arg Weapons:arraynum
 * @text Weapons
 * @type weapon[]
 * @parent Contents
 * @desc Select which Weapon ID(s) to become craftable.
 * @default []
 *
 * @arg Armors:arraynum
 * @text Armors
 * @type armor[]
 * @parent Contents
 * @desc Select which armor ID(s) to become craftable.
 * @default []
 * 
 * @arg Settings
 *
 * @arg BypassSwitches:eval
 * @text Bypass Switches?
 * @parent Settings
 * @type boolean
 * @on Bypass
 * @off Don't Bypass
 * @desc Bypass any of the requirement switches?
 * @default false
 *
 * @arg BypassMasks:eval
 * @text Bypass Masks?
 * @parent Settings
 * @type boolean
 * @on Bypass
 * @off Don't Bypass
 * @desc Bypass name masking for uncrafted items?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ReturnToLastCrafting
 * @text Scene: Common Event Return
 * @desc Return to the last shop if coming from a Crafting Common Event.
 * Requires VisuMZ_2_ShopCommonEvents!
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableItemCraftingMenu
 * @text System: Enable Crafting in Menu?
 * @desc Enables/disables Crafting menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables Crafting menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowItemCraftingMenu
 * @text System: Show Crafting in Menu?
 * @desc Shows/hides Crafting menu inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Crafting menu inside the main menu.
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
 * @param ItemCraftingSys
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
 * @desc General settings pertaining to Item Crafting.
 * @default {"Scene":"","CraftAssistButton:str":"Craft","CraftedIcon:num":"223","IngredientBridge:str":"+","Categories":"","CategoryIcon:num":"16","CategoryTitle:str":"Pick %1 Type (Quantity: %2)","SelectedColor:str":"17","SelectedText:str":" (Selected)","Uncategorized:str":"Uncategorized","NoCategoryIcon:num":"160","JS":"","jsGlobalListing:func":"\"// Declare Variables\\nlet item = arguments[0]; // This is the item being crafted.\\nlet listed = true;       // Default listing value.\\n\\n// Perform Checks\\n\\n\\n// Return Boolean\\nreturn listed;\"","jsGlobalCraftEffect:func":"\"// Declare Variables\\nlet item = arguments[0];   // This is the item being crafted.\\nlet number = arguments[1]; // This is the number of them being crafted.\\n\\n// Perform Actions\""}
 *
 * @param Mask:struct
 * @text Masking Settings
 * @type struct<Mask>
 * @desc Masking settings related to uncrafted items.
 * @default {"Enable:eval":"true","MaskItalics:eval":"true","MaskLetter:str":"?"}
 *
 * @param MainMenu:struct
 * @text Main Menu Settings
 * @type struct<MainMenu>
 * @desc Main Menu settings for Item Crafting.
 * @default {"Name:str":"Crafting","ShowMainMenu:eval":"true","EnableMainMenu:eval":"true"}
 * 
 * @param Animation:struct
 * @text Animation Settings
 * @type struct<Animation>
 * @desc Default settings for playing animations after crafting.
 * @default {"General":"","ShowAnimations:eval":"true","ShowWindows:eval":"false","Animations:arraynum":"[\"44\",\"47\"]","Sprite":"","Scale:num":"8.0","FadeSpeed:num":"4"}
 *
 * @param Sound:struct
 * @text Crafting Sound Settings
 * @type struct<Sound>
 * @desc Default settings for the sound effect played when crafting an item.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for Scene_ItemCrafting.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Window settings for Scene_ItemCrafting.
 * The window positions are the same as Scene_Shop.
 * @default {"ReqQuantityFontSize:num":"18","ToolTips:eval":"true","name:str":"","BgTypes":"","HelpBgType:num":"0","CategoryBgType:num":"0","GoldBgType:num":"0","ListBgType:num":"0","StatusBgType:num":"0","IngredientTitle:num":"0","IngredientList:num":"0","NumberBgType:num":"0","ButtonAssistBgType:num":"0","Custom":"","EnableCustomLayout:eval":"false","HelpWindow_RectJS:func":"\"const wx = 0;\\nconst wy = this.helpAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = this.helpAreaHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","CategoryWindow_RectJS:func":"\"const wx = this.isRightInputMode() ? this.mainCommandWidth() : 0;\\nconst wy = this.mainAreaTop();\\nconst ww = Graphics.boxWidth - this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(1, true);\\nreturn new Rectangle(wx, wy, ww, wh);\"","GoldWindow_RectJS:func":"\"const ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;\\nconst wy = this.mainAreaTop();\\nreturn new Rectangle(wx, wy, ww, wh);\"","ItemWindow_RectJS:func":"\"const wy = this._commandWindow.y + this._commandWindow.height;\\nconst ww = Graphics.boxWidth - this.statusWidth();\\nconst wh = this.mainAreaHeight() - this._commandWindow.height;\\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\\nreturn new Rectangle(wx, wy, ww, wh);\"","StatusWindow_RectJS:func":"\"const ww = this.statusWidth();\\nconst wh = this.mainAreaHeight() - this._commandWindow.height;\\nconst wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;\\nconst wy = this._commandWindow.y + this._commandWindow.height;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
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
 * @param Scene
 * @text Scene_ItemCrafting
 *
 * @param CraftAssistButton:str
 * @text Assist Button
 * @parent Scene
 * @desc Text used to for the Button Assist Window's OK button when about ready to craft an item.
 * @default Craft
 *
 * @param CraftedIcon:num
 * @text Crafted Icon
 * @parent Scene
 * @desc Icon used to depict of an item has already been crafted.
 * @default 223
 *
 * @param IngredientBridge:str
 * @text Ingredient Bridge
 * @parent Scene
 * @desc Text used to bridge ingredients in the item crafting scene.
 * @default +
 *
 * @param Switches
 *
 * @param SwitchCraft:num
 * @text Switch: Craft
 * @parent Switches
 * @type switch
 * @desc Crafting items in Crafting Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Crafting Scene opens.
 * @default 0
 * 
 * @param Categories
 *
 * @param CategoryIcon:num
 * @text Category Icon
 * @parent Categories
 * @desc Icon used for open-ended ingredients.
 * @default 16
 *
 * @param CategoryTitle:str
 * @text Category Title
 * @parent Categories
 * @desc Text format used for display categories.
 * %1 - Category Name, %2 - Needed Quantity
 * @default Pick %1 Type (Quantity: %2)
 *
 * @param SelectedColor:str
 * @text Selected Color
 * @parent Categories
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param SelectedText:str
 * @text Selected Text
 * @parent Categories
 * @desc This is the add on text that is displayed after an
 * item's name that's already an ingredient.
 * @default  (Selected)
 *
 * @param Uncategorized:str
 * @text Uncategorized Text
 * @parent Categories
 * @desc Text used for an uncategorized item category.
 * @default Uncategorized
 *
 * @param NoCategoryIcon:num
 * @text Uncategorized Icon
 * @parent Categories
 * @desc Icon used for uncategorized item category.
 * @default 160
 * 
 * @param Vocab
 * @text Vocabulary
 *
 * @param NumWindowOwned:str
 * @text Owned
 * @parent Vocab
 * @desc Text used for how much of an item is owned.
 * @default Owned
 *
 * @param NumWindowShift:str
 * @text Shift
 * @parent Vocab
 * @desc Text used for the change in value.
 * @default Change
 *
 * @param NumWindowNet:str
 * @text Net
 * @parent Vocab
 * @desc Text used for the net result.
 * @default Net
 *
 * @param JS
 * @text Global JS Effects
 *
 * @param jsGlobalListing:func
 * @text JS: Listing
 * @parent JS
 * @type note
 * @desc Code that is run globally across all items when checking if an item should be listed or not.
 * @default "// Declare Variables\nlet item = arguments[0]; // This is the item being crafted.\nlet listed = true;       // Default listing value.\n\n// Perform Checks\n\n\n// Return Boolean\nreturn listed;"
 *
 * @param jsGlobalCraftEffect:func
 * @text JS: Craft Effect
 * @parent JS
 * @type note
 * @desc Code that is run globally across all items when crafted.
 * @default "// Declare Variables\nlet item = arguments[0];   // This is the item being crafted.\nlet number = arguments[1]; // This is the number of them being crafted.\n\n// Perform Actions"
 *
 */
/* ----------------------------------------------------------------------------
 * Masking Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mask:
 *
 * @param Enable:eval
 * @text Enable Masking
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable masking for uncrafted items?
 * @default true
 *
 * @param MaskItalics:eval
 * @text Italics For Masking
 * @type boolean
 * @on Italics
 * @off Normal
 * @desc Use Italics when masking?
 * @default true
 *
 * @param MaskLetter:str
 * @text Mask Character
 * @desc Text used for masking per individual character.
 * @default ?
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
 * @desc Name of the 'Crafting' option in the Main Menu.
 * @default Crafting
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Crafting' option to the Main Menu by default?
 * @default true
 *
 * @param EnableMainMenu:eval
 * @text Enable in Main Menu?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the 'Crafting' option to the Main Menu by default?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Animation Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Animation:
 *
 * @param General
 *
 * @param ShowAnimations:eval
 * @text Show Animations?
 * @parent General
 * @type boolean
 * @on Show
 * @off Skip
 * @desc Show animations when crafting an item?
 * @default true
 *
 * @param ShowWindows:eval
 * @text Show Windows?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show windows during an item crafting animation?
 * @default false
 *
 * @param Animations:arraynum
 * @text Default Animations
 * @parent General
 * @type animation[]
 * @desc Default animation(s) do you want to play when crafting.
 * @default ["44","47"]
 *
 * @param Sprite
 * @text Item Sprite
 *
 * @param Scale:num
 * @text Scale
 * @parent Sprite
 * @desc How big do you want the item sprite to be on screen?
 * @default 8.0
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent Sprite
 * @type number
 * @min 1
 * @desc How fast do you want the item to fade in?
 * @default 4
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
 * @desc Filename of the sound effect played.
 * @default Skill2
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
 * @max 100
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param pan:num
 * @text Pan
 * @desc Pan of the sound effect played.
 * @default 0
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
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param ReqQuantityFontSize:num
 * @text Requirement Font Size
 * @parent Windows
 * @desc Font size used for requirement quantity.
 * @default 18
 *
 * @param ToolTips:eval
 * @text Show Tooltips
 * @parent Windows
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show tooltips when the mouse hovers over an ingredient?
 * @default true
 *
 * @param name:str
 * @text Custom Window Skin
 * @parent ToolTips:eval
 * @type file
 * @dir img/system/
 * @desc Select a custom window skin if you want the tooltip window to have one.
 * @default 
 *
 * @param BgTypes
 * @text Background Types
 * @parent Windows
 *
 * @param HelpBgType:num
 * @text Help Window
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the Help Window.
 * @default 0
 *
 * @param CategoryBgType:num
 * @text Category Window
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the Category Window.
 * @default 0
 *
 * @param GoldBgType:num
 * @text Gold Window
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the Gold Window.
 * @default 0
 *
 * @param ListBgType:num
 * @text List Window
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the List Window.
 * @default 0
 *
 * @param StatusBgType:num
 * @text Status Window
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the Status Window.
 * @default 0
 *
 * @param IngredientTitle:num
 * @text Ingredient Title
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the Ingredient Title Window.
 * @default 0
 *
 * @param IngredientList:num
 * @text Ingredient List
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the Ingredient List Window.
 * @default 0
 *
 * @param NumberBgType:num
 * @text Number Window
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the Number Window.
 * @default 0
 *
 * @param ButtonAssistBgType:num
 * @text Button Assist Window
 * @parent BgTypes
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for the Number Window.
 * @default 0
 *
 * @param Custom
 * @text Custom Layout
 *
 * @param EnableCustomLayout:eval
 * @text Enable Custom Layout
 * @parent Custom
 * @type boolean
 * @on Custom
 * @off Automatic
 * @desc Enable a custom layout or automatically create a layout
 * based on the shop scene?
 * @default false
 *
 * @param HelpWindow_RectJS:func
 * @text Help Window JS
 * @parent Custom
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.helpAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = this.helpAreaHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param CategoryWindow_RectJS:func
 * @text Category Window
 * @parent Custom
 * @type note
 * @desc Code used to determine the dimensions for these windows.
 * @default "const wx = this.isRightInputMode() ? this.mainCommandWidth() : 0;\nconst wy = this.mainAreaTop();\nconst ww = Graphics.boxWidth - this.mainCommandWidth();\nconst wh = this.calcWindowHeight(1, true);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param GoldWindow_RectJS:func
 * @text Gold Window
 * @parent Custom
 * @type note
 * @desc Code used to determine the dimensions for these windows.
 * @default "const ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(1, true);\nconst wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;\nconst wy = this.mainAreaTop();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ItemWindow_RectJS:func
 * @text Item Window
 * @parent Custom
 * @type note
 * @desc Code used to determine the dimensions for these windows.
 * @default "const wy = this._commandWindow.y + this._commandWindow.height;\nconst ww = Graphics.boxWidth - this.statusWidth();\nconst wh = this.mainAreaHeight() - this._commandWindow.height;\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param StatusWindow_RectJS:func
 * @text Status Window
 * @parent Custom
 * @type note
 * @desc Code used to determine the dimensions for these windows.
 * @default "const ww = this.statusWidth();\nconst wh = this.mainAreaHeight() - this._commandWindow.height;\nconst wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;\nconst wy = this._commandWindow.y + this._commandWindow.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
//=============================================================================

const _0x13d2b9=_0x20f1;(function(_0x199041,_0x1bde7c){const _0x3d007c=_0x20f1,_0x495f2f=_0x199041();while(!![]){try{const _0x9a9201=parseInt(_0x3d007c(0x24f))/0x1+-parseInt(_0x3d007c(0x31b))/0x2+-parseInt(_0x3d007c(0x34d))/0x3+-parseInt(_0x3d007c(0x2fc))/0x4*(-parseInt(_0x3d007c(0x1c6))/0x5)+parseInt(_0x3d007c(0x26a))/0x6*(-parseInt(_0x3d007c(0x2db))/0x7)+parseInt(_0x3d007c(0x273))/0x8+parseInt(_0x3d007c(0x22a))/0x9;if(_0x9a9201===_0x1bde7c)break;else _0x495f2f['push'](_0x495f2f['shift']());}catch(_0x414c01){_0x495f2f['push'](_0x495f2f['shift']());}}}(_0x2d73,0x36036));var label='ItemCraftingSys',tier=tier||0x0,dependencies=['VisuMZ_1_ItemsEquipsCore'],pluginData=$plugins[_0x13d2b9(0x28e)](function(_0x503b07){const _0x1ad52f=_0x13d2b9;return _0x503b07['status']&&_0x503b07[_0x1ad52f(0x166)][_0x1ad52f(0x18d)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x13d2b9(0x1f0)]||{},VisuMZ[_0x13d2b9(0x32e)]=function(_0x8ea47e,_0x36731e){const _0x5f1eca=_0x13d2b9;for(const _0x1dad76 in _0x36731e){if(_0x1dad76[_0x5f1eca(0x276)](/(.*):(.*)/i)){const _0x4e9f11=String(RegExp['$1']),_0x1957d2=String(RegExp['$2'])['toUpperCase']()[_0x5f1eca(0x1b7)]();let _0x8190f3,_0x2b1140,_0x29d0bc;switch(_0x1957d2){case _0x5f1eca(0x1dd):_0x8190f3=_0x36731e[_0x1dad76]!==''?Number(_0x36731e[_0x1dad76]):0x0;break;case _0x5f1eca(0x167):_0x2b1140=_0x36731e[_0x1dad76]!==''?JSON[_0x5f1eca(0x215)](_0x36731e[_0x1dad76]):[],_0x8190f3=_0x2b1140[_0x5f1eca(0x364)](_0x15218c=>Number(_0x15218c));break;case _0x5f1eca(0x209):_0x8190f3=_0x36731e[_0x1dad76]!==''?eval(_0x36731e[_0x1dad76]):null;break;case'ARRAYEVAL':_0x2b1140=_0x36731e[_0x1dad76]!==''?JSON['parse'](_0x36731e[_0x1dad76]):[],_0x8190f3=_0x2b1140[_0x5f1eca(0x364)](_0x398e03=>eval(_0x398e03));break;case'JSON':_0x8190f3=_0x36731e[_0x1dad76]!==''?JSON[_0x5f1eca(0x215)](_0x36731e[_0x1dad76]):'';break;case _0x5f1eca(0x325):_0x2b1140=_0x36731e[_0x1dad76]!==''?JSON['parse'](_0x36731e[_0x1dad76]):[],_0x8190f3=_0x2b1140[_0x5f1eca(0x364)](_0x4afc3f=>JSON[_0x5f1eca(0x215)](_0x4afc3f));break;case'FUNC':_0x8190f3=_0x36731e[_0x1dad76]!==''?new Function(JSON[_0x5f1eca(0x215)](_0x36731e[_0x1dad76])):new Function(_0x5f1eca(0x2d6));break;case _0x5f1eca(0x156):_0x2b1140=_0x36731e[_0x1dad76]!==''?JSON[_0x5f1eca(0x215)](_0x36731e[_0x1dad76]):[],_0x8190f3=_0x2b1140['map'](_0x27e438=>new Function(JSON[_0x5f1eca(0x215)](_0x27e438)));break;case'STR':_0x8190f3=_0x36731e[_0x1dad76]!==''?String(_0x36731e[_0x1dad76]):'';break;case _0x5f1eca(0x241):_0x2b1140=_0x36731e[_0x1dad76]!==''?JSON['parse'](_0x36731e[_0x1dad76]):[],_0x8190f3=_0x2b1140[_0x5f1eca(0x364)](_0x188530=>String(_0x188530));break;case _0x5f1eca(0x36f):_0x29d0bc=_0x36731e[_0x1dad76]!==''?JSON[_0x5f1eca(0x215)](_0x36731e[_0x1dad76]):{},_0x8190f3=VisuMZ[_0x5f1eca(0x32e)]({},_0x29d0bc);break;case'ARRAYSTRUCT':_0x2b1140=_0x36731e[_0x1dad76]!==''?JSON[_0x5f1eca(0x215)](_0x36731e[_0x1dad76]):[],_0x8190f3=_0x2b1140[_0x5f1eca(0x364)](_0x43d762=>VisuMZ[_0x5f1eca(0x32e)]({},JSON[_0x5f1eca(0x215)](_0x43d762)));break;default:continue;}_0x8ea47e[_0x4e9f11]=_0x8190f3;}}return _0x8ea47e;},(_0x478c1e=>{const _0x1308d0=_0x13d2b9,_0x56e05d=_0x478c1e[_0x1308d0(0x2d1)];for(const _0x4c557d of dependencies){if(!Imported[_0x4c557d]){alert(_0x1308d0(0x350)[_0x1308d0(0x220)](_0x56e05d,_0x4c557d)),SceneManager[_0x1308d0(0x2bb)]();break;}}const _0x156209=_0x478c1e['description'];if(_0x156209['match'](/\[Version[ ](.*?)\]/i)){const _0x57e574=Number(RegExp['$1']);_0x57e574!==VisuMZ[label][_0x1308d0(0x32f)]&&(alert(_0x1308d0(0x226)[_0x1308d0(0x220)](_0x56e05d,_0x57e574)),SceneManager[_0x1308d0(0x2bb)]());}if(_0x156209['match'](/\[Tier[ ](\d+)\]/i)){const _0x2bc247=Number(RegExp['$1']);_0x2bc247<tier?(alert(_0x1308d0(0x145)[_0x1308d0(0x220)](_0x56e05d,_0x2bc247,tier)),SceneManager[_0x1308d0(0x2bb)]()):tier=Math[_0x1308d0(0x368)](_0x2bc247,tier);}VisuMZ[_0x1308d0(0x32e)](VisuMZ[label][_0x1308d0(0x1f0)],_0x478c1e['parameters']);})(pluginData);if(VisuMZ['ItemsEquipsCore'][_0x13d2b9(0x32f)]<1.38){let text='';text+='VisuMZ_1_ItemsEquipsCore\x20needs\x20to\x20be\x20updated\x20',text+=_0x13d2b9(0x280),alert(text),SceneManager['exit']();}VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x278)]='You\x20do\x20not\x20have\x20any\x20craftable\x20items!\x0aRefer\x20to\x20the\x20help\x20file\x20on\x20how\x20to\x20create\x20crafting\x20recipes.',PluginManager[_0x13d2b9(0x159)](pluginData[_0x13d2b9(0x2d1)],_0x13d2b9(0x21e),_0x1ee8c0=>{const _0x4589d9=_0x13d2b9;if(SceneManager[_0x4589d9(0x1d3)]())return;if(SceneManager['isSceneItemCrafting']())return;if($gameSystem['_craftingCommonEventScene'])return;if(DataManager[_0x4589d9(0x202)]()[_0x4589d9(0x27c)]<=0x0){$gameTemp['isPlaytest']()&&alert(VisuMZ[_0x4589d9(0x24e)][_0x4589d9(0x278)]);return;}SceneManager['push'](Scene_ItemCrafting);}),PluginManager[_0x13d2b9(0x159)](pluginData[_0x13d2b9(0x2d1)],_0x13d2b9(0x26d),_0xac943e=>{const _0x35088f=_0x13d2b9;if(SceneManager[_0x35088f(0x1d3)]())return;if(SceneManager[_0x35088f(0x1ce)]())return;if($gameSystem[_0x35088f(0x1c1)])return;VisuMZ[_0x35088f(0x32e)](_0xac943e,_0xac943e);const _0x1fa14d={'items':_0xac943e[_0x35088f(0x32c)][_0x35088f(0x364)](_0x488dec=>$dataItems[_0x488dec])[_0x35088f(0x28e)](_0x17b350=>DataManager[_0x35088f(0x2b4)]()[_0x35088f(0x18d)](_0x17b350)),'weapons':_0xac943e[_0x35088f(0x299)][_0x35088f(0x364)](_0x6730cb=>$dataWeapons[_0x6730cb])['filter'](_0x52c994=>DataManager[_0x35088f(0x33c)]()[_0x35088f(0x18d)](_0x52c994)),'armors':_0xac943e['Armors'][_0x35088f(0x364)](_0x3daa77=>$dataArmors[_0x3daa77])[_0x35088f(0x28e)](_0x51ef4c=>DataManager[_0x35088f(0x1b1)]()[_0x35088f(0x18d)](_0x51ef4c)),'BypassSwitches':_0xac943e[_0x35088f(0x150)],'BypassMasks':_0xac943e[_0x35088f(0x2eb)]};_0x1fa14d[_0x35088f(0x182)]=_0x1fa14d[_0x35088f(0x328)]['concat'](_0x1fa14d[_0x35088f(0x314)],_0x1fa14d['armors']);if(_0x1fa14d[_0x35088f(0x182)][_0x35088f(0x27c)]<=0x0){$gameTemp[_0x35088f(0x14a)]()&&alert(VisuMZ[_0x35088f(0x24e)][_0x35088f(0x278)]);return;}$gameTemp['setCustomItemCraftingSettings'](_0x1fa14d),SceneManager['push'](Scene_ItemCrafting);}),PluginManager[_0x13d2b9(0x159)](pluginData[_0x13d2b9(0x2d1)],'ReturnToLastCrafting',_0x2269f3=>{const _0x580159=_0x13d2b9;if(!SceneManager[_0x580159(0x345)]())return;if(!$gameSystem['_craftingCommonEventScene'])return;$gameSystem['_craftingCommonEventScene']=undefined,SceneManager['push'](Scene_ItemCrafting);}),PluginManager[_0x13d2b9(0x159)](pluginData[_0x13d2b9(0x2d1)],'SystemEnableItemCraftingMenu',_0x276034=>{const _0x3acfc5=_0x13d2b9;VisuMZ[_0x3acfc5(0x32e)](_0x276034,_0x276034),$gameSystem[_0x3acfc5(0x22c)](_0x276034[_0x3acfc5(0x31d)]);}),PluginManager[_0x13d2b9(0x159)](pluginData[_0x13d2b9(0x2d1)],_0x13d2b9(0x216),_0x22b38a=>{const _0x3412f3=_0x13d2b9;VisuMZ[_0x3412f3(0x32e)](_0x22b38a,_0x22b38a),$gameSystem[_0x3412f3(0x1ec)](_0x22b38a[_0x3412f3(0x218)]);}),VisuMZ['ItemCraftingSys'][_0x13d2b9(0x295)]={'Ingredients':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) INGREDIENTS>\s*([\s\S]*)\s*<\/(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) INGREDIENTS>/i,'AllSwitches':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) SHOW (?:SWITCH|SWITCHES|ALL SWITCH|ALL SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/gi,'AnySwitches':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) SHOW (?:ANY SWITCH|ANY SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/gi,'OnSwitches':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) TURN ON (?:SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/gi,'OffSwitches':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) TURN OFF (?:SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/gi,'MaskText':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) MASK:[ ](.*)>/i,'NoMask':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) NO MASK>/i,'customCraftingOnly':/<CUSTOM (?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) ONLY>/i,'jsOnCraft':/<JS (?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) EFFECT>\s*([\s\S]*)\s*<\/JS (?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) EFFECT>/i,'animationIDs':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) (?:ANIMATION|ANIMATIONS|ANI):[ ](.*)>/i,'opacitySpeed':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) FADE SPEED:[ ](\d+)>/i,'craftPicture':/<(?:CRAFT|CRAFTING|RECIPE|SYNTHESIS) (?:PICTURE|FILENAME):[ ](.*)>/i,'bigPicture':/<PICTURE:[ ](.*)>/i,'CraftEventOnce':/<(?:ONCE|ONE TIME|ONE-TIME)[ ]CRAFT[ ](?:EVENT|COMMON EVENT):[ ](\d+)>/i,'CraftEventRepeat':/<(?:REPEAT|REPEATING|RECURRING)[ ]CRAFT[ ](?:EVENT|COMMON EVENT):[ ](\d+)>/i,'CraftOnceAllSw':/<(?:ONCE|ONE TIME|ONE-TIME)[ ]CRAFT[ ](?:EVENT|COMMON EVENT)[ ](?:SWITCH|SWITCHES|ALL SWITCHES):[ ](.*)>/i,'CraftOnceAnySw':/<(?:ONCE|ONE TIME|ONE-TIME)[ ]CRAFT[ ](?:EVENT|COMMON EVENT)[ ](?:ANY SWITCH|ANY SWITCHES):[ ](.*)>/i,'CraftRepeatAllSw':/<(?:REPEAT|REPEATING|RECURRING)[ ]CRAFT[ ](?:EVENT|COMMON EVENT)[ ](?:SWITCH|SWITCHES|ALL SWITCHES):[ ](.*)>/i,'CraftRepeatAnySw':/<(?:REPEAT|REPEATING|RECURRING)[ ]CRAFT[ ](?:EVENT|COMMON EVENT)[ ](?:ANY SWITCH|ANY SWITCHES):[ ](.*)>/i,'CraftBatchWrap':/<CRAFT BATCH>\s*([\s\S]*)\s*<\/CRAFT BATCH>/i},VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x1f7)]=Scene_Boot[_0x13d2b9(0x1ae)][_0x13d2b9(0x1a6)],Scene_Boot[_0x13d2b9(0x1ae)][_0x13d2b9(0x1a6)]=function(){const _0x5439b8=_0x13d2b9;VisuMZ[_0x5439b8(0x24e)][_0x5439b8(0x1f7)][_0x5439b8(0x1c9)](this),this[_0x5439b8(0x233)]();},Scene_Boot['prototype'][_0x13d2b9(0x233)]=function(){const _0x276347=_0x13d2b9;this[_0x276347(0x211)]();},Scene_Boot[_0x13d2b9(0x1ae)]['process_VisuMZ_ItemCraftingSys_JS_TraitObject_Notetags']=function(){const _0x5f4cb3=_0x13d2b9;if(VisuMZ[_0x5f4cb3(0x321)])return;const _0x497e18=$dataItems[_0x5f4cb3(0x349)]($dataWeapons,$dataArmors);for(const _0x2cab1d of _0x497e18){if(!_0x2cab1d)continue;VisuMZ[_0x5f4cb3(0x24e)][_0x5f4cb3(0x34e)](_0x2cab1d);}},VisuMZ['ItemCraftingSys'][_0x13d2b9(0x279)]=VisuMZ[_0x13d2b9(0x279)],VisuMZ[_0x13d2b9(0x279)]=function(_0x92a47d){const _0x32ad94=_0x13d2b9;VisuMZ['ItemCraftingSys']['ParseItemNotetags'][_0x32ad94(0x1c9)](this,_0x92a47d),VisuMZ['ItemCraftingSys'][_0x32ad94(0x34e)](_0x92a47d);},VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x22b)]=VisuMZ[_0x13d2b9(0x22b)],VisuMZ[_0x13d2b9(0x22b)]=function(_0x2c7bb4){const _0x43fbef=_0x13d2b9;VisuMZ[_0x43fbef(0x24e)][_0x43fbef(0x22b)]['call'](this,_0x2c7bb4),VisuMZ[_0x43fbef(0x24e)]['Parse_Notetags_CreateJS'](_0x2c7bb4);},VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x149)]=VisuMZ['ParseArmorNotetags'],VisuMZ[_0x13d2b9(0x149)]=function(_0x2a1d05){const _0x5a59b3=_0x13d2b9;VisuMZ[_0x5a59b3(0x24e)][_0x5a59b3(0x149)]['call'](this,_0x2a1d05),VisuMZ[_0x5a59b3(0x24e)]['Parse_Notetags_CreateJS'](_0x2a1d05);},VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x34e)]=function(_0x97c435){const _0x4c34e6=_0x13d2b9;_0x97c435[_0x4c34e6(0x1ed)][_0x4c34e6(0x276)](VisuMZ[_0x4c34e6(0x24e)][_0x4c34e6(0x295)][_0x4c34e6(0x1f2)])&&VisuMZ['ItemCraftingSys'][_0x4c34e6(0x257)](_0x97c435,RegExp['$1']);},VisuMZ[_0x13d2b9(0x24e)]['JS']={},VisuMZ['ItemCraftingSys']['createJS']=function(_0x3772e0,_0x4da508){const _0x25d82e=_0x13d2b9,_0x516cbe=_0x25d82e(0x187)['format'](_0x4da508),_0x523103=DataManager[_0x25d82e(0x26b)](_0x3772e0);VisuMZ[_0x25d82e(0x24e)]['JS'][_0x523103]=new Function(_0x516cbe);},DataManager[_0x13d2b9(0x311)]=function(_0xfc7b8a){const _0x256cdd=_0x13d2b9;if(!_0xfc7b8a)return![];if(DataManager[_0x256cdd(0x327)](_0xfc7b8a)[_0x256cdd(0x27c)]<=0x0)return![];if(_0xfc7b8a[_0x256cdd(0x1ed)][_0x256cdd(0x276)](VisuMZ[_0x256cdd(0x24e)][_0x256cdd(0x295)][_0x256cdd(0x210)])){if(!$gameTemp[_0x256cdd(0x1b6)]())return![];}if(!VisuMZ[_0x256cdd(0x24e)][_0x256cdd(0x1f0)][_0x256cdd(0x2c0)]['jsGlobalListing'][_0x256cdd(0x1c9)](this,_0xfc7b8a))return![];if(!VisuMZ[_0x256cdd(0x24e)][_0x256cdd(0x329)](_0xfc7b8a))return![];if(!VisuMZ[_0x256cdd(0x24e)][_0x256cdd(0x2e8)](_0xfc7b8a))return![];return!![];},VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x329)]=function(_0x11d124){const _0x5a797e=_0x13d2b9,_0x131b39=$gameTemp[_0x5a797e(0x1b6)]();if(_0x131b39&&_0x131b39[_0x5a797e(0x150)])return!![];const _0x3d86e4=VisuMZ[_0x5a797e(0x24e)][_0x5a797e(0x295)][_0x5a797e(0x34b)],_0x20ec47=_0x11d124[_0x5a797e(0x1ed)][_0x5a797e(0x276)](_0x3d86e4);if(_0x20ec47)for(const _0x514836 of _0x20ec47){if(!_0x514836)continue;_0x514836['match'](_0x3d86e4);const _0x2007c1=JSON[_0x5a797e(0x215)]('['+RegExp['$1'][_0x5a797e(0x276)](/\d+/g)+']');for(const _0x2357d4 of _0x2007c1){if(!$gameSwitches[_0x5a797e(0x193)](_0x2357d4))return![];}}return!![];},VisuMZ[_0x13d2b9(0x24e)]['CheckAnySwitches']=function(_0x5c5a9e){const _0x2aea5e=_0x13d2b9,_0x25b343=$gameTemp['getCustomItemCraftingSettings']();if(_0x25b343&&_0x25b343[_0x2aea5e(0x150)])return!![];const _0x1c014c=VisuMZ[_0x2aea5e(0x24e)][_0x2aea5e(0x295)][_0x2aea5e(0x287)],_0x46eb5f=_0x5c5a9e[_0x2aea5e(0x1ed)][_0x2aea5e(0x276)](_0x1c014c);if(_0x46eb5f){for(const _0x112d63 of _0x46eb5f){if(!_0x112d63)continue;_0x112d63['match'](_0x1c014c);const _0x270ef7=JSON[_0x2aea5e(0x215)]('['+RegExp['$1'][_0x2aea5e(0x276)](/\d+/g)+']');for(const _0x1bffd3 of _0x270ef7){if($gameSwitches[_0x2aea5e(0x193)](_0x1bffd3))return!![];}}return![];}return!![];},DataManager['currentCraftableItems']=function(){const _0x1cbbbe=_0x13d2b9,_0x4102a0=$gameTemp['getCustomItemCraftingSettings']();if(_0x4102a0)return _0x4102a0['all'][_0x1cbbbe(0x28e)](_0x3b2622=>this[_0x1cbbbe(0x311)](_0x3b2622));const _0x55e8bf=this[_0x1cbbbe(0x2f7)](),_0x27197e=this[_0x1cbbbe(0x259)](),_0x38968d=this[_0x1cbbbe(0x2de)]();return _0x55e8bf['concat'](_0x27197e,_0x38968d);},DataManager['craftableItems']=function(){const _0x5e8c5b=_0x13d2b9;let _0x5e819f=this['allCraftableItems']()[_0x5e8c5b(0x28e)](_0x6a99a7=>this[_0x5e8c5b(0x311)](_0x6a99a7));if(VisuMZ[_0x5e8c5b(0x1fe)][_0x5e8c5b(0x185)])VisuMZ[_0x5e8c5b(0x1fe)]['SortByIDandPriority'](_0x5e819f);return _0x5e819f;},DataManager['allCraftableItems']=function(){const _0xf22074=_0x13d2b9;if(this[_0xf22074(0x35f)]!==undefined)return this[_0xf22074(0x35f)];this['_allCraftableItems']=[];for(const _0xdca251 of $dataItems){if(!_0xdca251)continue;_0xdca251['note'][_0xf22074(0x276)](VisuMZ['ItemCraftingSys'][_0xf22074(0x295)]['Ingredients'])&&this[_0xf22074(0x35f)][_0xf22074(0x1b3)](_0xdca251);}return this[_0xf22074(0x35f)];},DataManager[_0x13d2b9(0x259)]=function(){const _0x19faf2=_0x13d2b9;let _0x4afac6=this['allCraftableWeapons']()['filter'](_0x360098=>this[_0x19faf2(0x311)](_0x360098));if(VisuMZ[_0x19faf2(0x1fe)][_0x19faf2(0x185)])VisuMZ[_0x19faf2(0x1fe)][_0x19faf2(0x185)](_0x4afac6);return _0x4afac6;},DataManager[_0x13d2b9(0x33c)]=function(){const _0xf58774=_0x13d2b9;if(this[_0xf58774(0x172)]!==undefined)return this[_0xf58774(0x172)];this[_0xf58774(0x172)]=[];for(const _0x50a052 of $dataWeapons){if(!_0x50a052)continue;_0x50a052[_0xf58774(0x1ed)][_0xf58774(0x276)](VisuMZ[_0xf58774(0x24e)][_0xf58774(0x295)]['Ingredients'])&&this[_0xf58774(0x172)][_0xf58774(0x1b3)](_0x50a052);}return this[_0xf58774(0x172)];},DataManager['craftableArmors']=function(){const _0x35fe07=_0x13d2b9;let _0x2695d9=this[_0x35fe07(0x1b1)]()[_0x35fe07(0x28e)](_0x1d1dff=>this['isCraftItemListed'](_0x1d1dff));if(VisuMZ[_0x35fe07(0x1fe)][_0x35fe07(0x185)])VisuMZ[_0x35fe07(0x1fe)][_0x35fe07(0x185)](_0x2695d9);return _0x2695d9;},DataManager[_0x13d2b9(0x1b1)]=function(){const _0x2d4d8c=_0x13d2b9;if(this[_0x2d4d8c(0x1e3)]!==undefined)return this[_0x2d4d8c(0x1e3)];this[_0x2d4d8c(0x1e3)]=[];for(const _0x1344c7 of $dataArmors){if(!_0x1344c7)continue;_0x1344c7[_0x2d4d8c(0x1ed)]['match'](VisuMZ['ItemCraftingSys'][_0x2d4d8c(0x295)]['Ingredients'])&&this[_0x2d4d8c(0x1e3)][_0x2d4d8c(0x1b3)](_0x1344c7);}return this[_0x2d4d8c(0x1e3)];},DataManager['getCraftingIngredients']=function(_0x2ea8ea){const _0x53e0e8=_0x13d2b9;if(!_0x2ea8ea)return[];const _0x1913b2=this[_0x53e0e8(0x26b)](_0x2ea8ea);return this[_0x53e0e8(0x1ab)]===undefined&&this[_0x53e0e8(0x1bd)](),this['_craftingIngredients'][_0x1913b2]||[];},DataManager['createCraftingItemKey']=function(_0x4864da){const _0x5bfc3f=_0x13d2b9;let _0x41cc2e='%1%2';if(this[_0x5bfc3f(0x207)](_0x4864da))return _0x41cc2e['format'](_0x5bfc3f(0x31a),_0x4864da['id']);if(this[_0x5bfc3f(0x2af)](_0x4864da))return _0x41cc2e[_0x5bfc3f(0x220)](_0x5bfc3f(0x1bf),_0x4864da['id']);if(this['isArmor'](_0x4864da))return _0x41cc2e[_0x5bfc3f(0x220)]('Armor',_0x4864da['id']);return'';},DataManager['createCraftingIngredientsLists']=function(){const _0x3ebf05=_0x13d2b9;this[_0x3ebf05(0x1ab)]={};const _0x53d977=$dataItems['concat']($dataWeapons,$dataArmors);for(const _0x3b396f of _0x53d977){if(!_0x3b396f)continue;if(_0x3b396f[_0x3ebf05(0x1ed)][_0x3ebf05(0x276)](VisuMZ['ItemCraftingSys'][_0x3ebf05(0x295)]['Ingredients'])){const _0xe7ffb4=String(RegExp['$1'])[_0x3ebf05(0x1b4)](/[\r\n]+/),_0x5206c8=this['parseCraftingIngredientsData'](_0x3b396f,_0xe7ffb4);if(_0x5206c8[_0x3ebf05(0x27c)]<=0x0)continue;const _0xe03cd1=this['createCraftingItemKey'](_0x3b396f);this[_0x3ebf05(0x1ab)][_0xe03cd1]=_0x5206c8;}}},DataManager['parseCraftingIngredientsData']=function(_0x41f04f,_0x359920){const _0x39eab3=_0x13d2b9;let _0x1a8645=[];for(let _0x2481e0 of _0x359920){_0x2481e0=_0x2481e0[_0x39eab3(0x1b7)]();if(_0x2481e0[_0x39eab3(0x276)](/GOLD:[ ](\d+)/i))_0x1a8645[_0x39eab3(0x1b3)]([_0x39eab3(0x303),Number(RegExp['$1'])]);else{if(_0x2481e0[_0x39eab3(0x276)](/CATEGORY[ ](.*):[ ](\d+)/i)){const _0x16a28a=String(RegExp['$1'])[_0x39eab3(0x1b7)](),_0x2e303d=Number(RegExp['$2'])||0x1,_0x20b540=_0x39eab3(0x16c)[_0x39eab3(0x220)](_0x16a28a);_0x1a8645[_0x39eab3(0x1b3)]([_0x20b540,_0x2e303d]);}else{if(_0x2481e0[_0x39eab3(0x276)](/(.*?)[ ](\d+):[ ](\d+)/i)){const _0x2085d0=RegExp['$1'][_0x39eab3(0x32b)]()[_0x39eab3(0x1b7)](),_0x5bdee9=Number(RegExp['$2'])||0x0,_0x310978=Number(RegExp['$3'])||0x1;let _0x540ef6=null;if([_0x39eab3(0x14b),_0x39eab3(0x328)][_0x39eab3(0x18d)](_0x2085d0))_0x540ef6=$dataItems;if([_0x39eab3(0x2c4),_0x39eab3(0x314)][_0x39eab3(0x18d)](_0x2085d0))_0x540ef6=$dataWeapons;if([_0x39eab3(0x356),_0x39eab3(0x283)]['includes'](_0x2085d0))_0x540ef6=$dataArmors;this[_0x39eab3(0x1aa)](_0x41f04f,_0x540ef6,_0x5bdee9,_0x1a8645)&&_0x1a8645['push']([_0x540ef6[_0x5bdee9],_0x310978]);}else{if(_0x2481e0[_0x39eab3(0x276)](/(.*?)[ ](.*):[ ](\d+)/i)){const _0x480c73=RegExp['$1'][_0x39eab3(0x32b)]()[_0x39eab3(0x1b7)](),_0x5e22ac=RegExp['$2'][_0x39eab3(0x1b7)](),_0x49c2b8=Number(RegExp['$3'])||0x1;let _0x93e963=null,_0x56b9e3=0x0;[_0x39eab3(0x14b),'items'][_0x39eab3(0x18d)](_0x480c73)&&(_0x93e963=$dataItems,_0x56b9e3=this[_0x39eab3(0x2a2)](_0x5e22ac)),['weapon',_0x39eab3(0x314)]['includes'](_0x480c73)&&(_0x93e963=$dataWeapons,_0x56b9e3=this[_0x39eab3(0x1c5)](_0x5e22ac)),[_0x39eab3(0x356),'armors'][_0x39eab3(0x18d)](_0x480c73)&&(_0x93e963=$dataArmors,_0x56b9e3=this[_0x39eab3(0x1a1)](_0x5e22ac)),this[_0x39eab3(0x1aa)](_0x41f04f,_0x93e963,_0x56b9e3,_0x1a8645)&&_0x1a8645[_0x39eab3(0x1b3)]([_0x93e963[_0x56b9e3],_0x49c2b8]);}}}}}return _0x1a8645;},DataManager[_0x13d2b9(0x1aa)]=function(_0x570fa2,_0x572bf7,_0x34b623,_0x1673af){if(!_0x572bf7)return![];if(!_0x572bf7[_0x34b623])return![];const _0xcac791=_0x572bf7[_0x34b623];if(_0xcac791===_0x570fa2)return![];for(const _0x5c2b10 of _0x1673af){if(!_0x5c2b10)continue;if(_0x5c2b10[0x0]===_0xcac791)return![];}return!![];},DataManager['getItemIdWithName']=function(_0x49c1a4){const _0xfbd08a=_0x13d2b9;_0x49c1a4=_0x49c1a4[_0xfbd08a(0x21f)]()[_0xfbd08a(0x1b7)](),this['_itemIDs']=this[_0xfbd08a(0x1cf)]||{};if(this[_0xfbd08a(0x1cf)][_0x49c1a4])return this['_itemIDs'][_0x49c1a4];for(const _0x437363 of $dataItems){if(!_0x437363)continue;this['_itemIDs'][_0x437363['name'][_0xfbd08a(0x21f)]()['trim']()]=_0x437363['id'];}return this['_itemIDs'][_0x49c1a4]||0x0;},DataManager['getWeaponIdWithName']=function(_0x5939b0){const _0x130a03=_0x13d2b9;_0x5939b0=_0x5939b0['toUpperCase']()[_0x130a03(0x1b7)](),this[_0x130a03(0x35a)]=this['_weaponIDs']||{};if(this['_weaponIDs'][_0x5939b0])return this[_0x130a03(0x35a)][_0x5939b0];for(const _0x2e82de of $dataWeapons){if(!_0x2e82de)continue;this['_weaponIDs'][_0x2e82de['name'][_0x130a03(0x21f)]()[_0x130a03(0x1b7)]()]=_0x2e82de['id'];}return this[_0x130a03(0x35a)][_0x5939b0]||0x0;},DataManager[_0x13d2b9(0x1a1)]=function(_0xa4ba2a){const _0x5b25ad=_0x13d2b9;_0xa4ba2a=_0xa4ba2a[_0x5b25ad(0x21f)]()[_0x5b25ad(0x1b7)](),this[_0x5b25ad(0x336)]=this['_armorIDs']||{};if(this['_armorIDs'][_0xa4ba2a])return this['_armorIDs'][_0xa4ba2a];for(const _0x3c1b02 of $dataArmors){if(!_0x3c1b02)continue;this[_0x5b25ad(0x336)][_0x3c1b02[_0x5b25ad(0x2d1)][_0x5b25ad(0x21f)]()[_0x5b25ad(0x1b7)]()]=_0x3c1b02['id'];}return this[_0x5b25ad(0x336)][_0xa4ba2a]||0x0;},DataManager[_0x13d2b9(0x2ff)]=function(_0x23767c){const _0x5bd8a1=_0x13d2b9;if(!_0x23767c)return![];if(DataManager[_0x5bd8a1(0x312)](_0x23767c))return![];if(!VisuMZ[_0x5bd8a1(0x24e)][_0x5bd8a1(0x1f0)]['Mask'][_0x5bd8a1(0x31d)])return![];DataManager[_0x5bd8a1(0x360)]&&(_0x23767c=DataManager[_0x5bd8a1(0x360)](_0x23767c));const _0x289907=$gameTemp['getCustomItemCraftingSettings']();if(_0x289907&&_0x289907[_0x5bd8a1(0x2eb)])return![];if(_0x23767c[_0x5bd8a1(0x1ed)]['match'](VisuMZ[_0x5bd8a1(0x24e)][_0x5bd8a1(0x295)]['NoMask']))return![];return!$gameSystem[_0x5bd8a1(0x2c3)](_0x23767c);},DataManager[_0x13d2b9(0x312)]=function(_0x55a0cb){const _0x38b5d4=_0x13d2b9;if(!Imported[_0x38b5d4(0x255)])return![];return this[_0x38b5d4(0x15a)](_0x55a0cb)!==null;},DataManager['getCraftBatchItems']=function(_0xd43bbe){const _0x3d8380=_0x13d2b9;if(!_0xd43bbe)return null;if(this[_0x3d8380(0x348)](_0xd43bbe))return null;if(this[_0x3d8380(0x1a5)](_0xd43bbe))return null;if(!Imported[_0x3d8380(0x255)])return null;let _0x21f969='';if(DataManager['isItem'](_0xd43bbe))_0x21f969=_0x3d8380(0x219)[_0x3d8380(0x220)](_0xd43bbe['id']);else{if(DataManager['isWeapon'](_0xd43bbe))_0x21f969=_0x3d8380(0x1f9)['format'](_0xd43bbe['id']);else{if(DataManager[_0x3d8380(0x269)](_0xd43bbe))_0x21f969=_0x3d8380(0x25c)[_0x3d8380(0x220)](_0xd43bbe['id']);else return null;}}DataManager['_cache_getCraftBatchItems']=DataManager[_0x3d8380(0x24d)]||{};if(DataManager['_cache_getCraftBatchItems'][_0x21f969]!==undefined)return DataManager[_0x3d8380(0x24d)][_0x21f969];let _0xeb4867=![],_0x429f02={};const _0x28d729=VisuMZ['ItemCraftingSys']['RegExp'],_0x287c57=_0xd43bbe['note']||'';if(_0x287c57['match'](_0x28d729[_0x3d8380(0x20d)])){const _0x53cf54=String(RegExp['$1'])[_0x3d8380(0x1b4)](/[\r\n]+/)[_0x3d8380(0x177)]('');_0x429f02={'items':{},'weapons':{},'armors':{}};for(const _0x1c0ba3 of _0x53cf54){if(_0x1c0ba3[_0x3d8380(0x276)](/ITEM[ ](.*):[ ](\d+)/i)){const _0x14089a=String(RegExp['$1']),_0x21d2c6=Math[_0x3d8380(0x368)](0x1,Number(RegExp['$2'])),_0x2f3984=/^\d+$/[_0x3d8380(0x1ba)](_0x14089a),_0x4bf764=_0x2f3984?_0x14089a:this[_0x3d8380(0x2a2)](_0x14089a);_0x429f02[_0x3d8380(0x328)][_0x4bf764]=_0x21d2c6,_0xeb4867=!![];}else{if(_0x1c0ba3['match'](/ITEM[ ](.*)/i)){const _0x53c050=String(RegExp['$1']),_0x5c0afd=/^\d+$/[_0x3d8380(0x1ba)](_0x53c050),_0x4d545a=_0x5c0afd?_0x53c050:this[_0x3d8380(0x2a2)](_0x53c050);_0x429f02[_0x3d8380(0x328)][_0x4d545a]=0x1,_0xeb4867=!![];}}if(_0x1c0ba3['match'](/WEAPON[ ](.*):[ ](\d+)/i)){const _0x348fa3=String(RegExp['$1']),_0x11a623=Math['max'](0x1,Number(RegExp['$2'])),_0x31c9d2=/^\d+$/[_0x3d8380(0x1ba)](_0x348fa3),_0xb4686e=_0x31c9d2?_0x348fa3:this[_0x3d8380(0x1c5)](_0x348fa3);_0x429f02[_0x3d8380(0x314)][_0xb4686e]=_0x11a623,_0xeb4867=!![];}else{if(_0x1c0ba3[_0x3d8380(0x276)](/WEAPON[ ](.*)/i)){const _0x270165=String(RegExp['$1']),_0x2ea432=/^\d+$/[_0x3d8380(0x1ba)](_0x270165),_0x6f728e=_0x2ea432?_0x270165:this[_0x3d8380(0x1c5)](_0x270165);_0x429f02[_0x3d8380(0x314)][_0x6f728e]=0x1,_0xeb4867=!![];}}if(_0x1c0ba3[_0x3d8380(0x276)](/ARMOR[ ](.*):[ ](\d+)/i)){const _0x3d5b68=String(RegExp['$1']),_0x1559be=Math['max'](0x1,Number(RegExp['$2'])),_0x1fd983=/^\d+$/[_0x3d8380(0x1ba)](_0x3d5b68),_0x38e5aa=_0x1fd983?_0x3d5b68:this[_0x3d8380(0x1a1)](_0x3d5b68);_0x429f02['armors'][_0x38e5aa]=_0x1559be,_0xeb4867=!![];}else{if(_0x1c0ba3[_0x3d8380(0x276)](/ARMOR[ ](.*)/i)){const _0xcc2c92=String(RegExp['$1']),_0xdbba77=/^\d+$/[_0x3d8380(0x1ba)](_0xcc2c92),_0x4ee3c9=_0xdbba77?_0xcc2c92:this[_0x3d8380(0x1a1)](_0xcc2c92);_0x429f02['armors'][_0x4ee3c9]=0x1,_0xeb4867=!![];}}}}if(!_0xeb4867)_0x429f02=null;return DataManager[_0x3d8380(0x24d)][_0x21f969]=_0x429f02,DataManager['_cache_getCraftBatchItems'][_0x21f969];},ImageManager[_0x13d2b9(0x33d)]=VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x1f0)][_0x13d2b9(0x2c0)][_0x13d2b9(0x31e)],SoundManager[_0x13d2b9(0x2d0)]=function(_0x530451){const _0x14ba0b=_0x13d2b9;AudioManager['playStaticSe'](VisuMZ[_0x14ba0b(0x24e)][_0x14ba0b(0x1f0)][_0x14ba0b(0x2bc)]);},TextManager['itemCraftingIngredientsBridge']=VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x1f0)][_0x13d2b9(0x2c0)][_0x13d2b9(0x171)],TextManager[_0x13d2b9(0x367)]=VisuMZ[_0x13d2b9(0x24e)]['Settings'][_0x13d2b9(0x2c0)]['CraftAssistButton'],TextManager[_0x13d2b9(0x17e)]=VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x1f0)][_0x13d2b9(0x1ff)][_0x13d2b9(0x1f5)],TextManager[_0x13d2b9(0x2e4)]=VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x1f0)]['MainMenu'][_0x13d2b9(0x1ac)],TextManager[_0x13d2b9(0x15d)]={'owned':VisuMZ[_0x13d2b9(0x24e)]['Settings'][_0x13d2b9(0x2c0)]['NumWindowOwned']||_0x13d2b9(0x197),'shift':VisuMZ[_0x13d2b9(0x24e)]['Settings'][_0x13d2b9(0x2c0)][_0x13d2b9(0x30a)]||_0x13d2b9(0x2fe),'net':VisuMZ[_0x13d2b9(0x24e)]['Settings'][_0x13d2b9(0x2c0)][_0x13d2b9(0x267)]||_0x13d2b9(0x338)},ColorManager[_0x13d2b9(0x232)]=function(_0x51d65f){const _0x29e4cf=_0x13d2b9;return _0x51d65f=String(_0x51d65f),_0x51d65f[_0x29e4cf(0x276)](/#(.*)/i)?_0x29e4cf(0x2e2)[_0x29e4cf(0x220)](String(RegExp['$1'])):this[_0x29e4cf(0x1eb)](Number(_0x51d65f));},SceneManager[_0x13d2b9(0x1d3)]=function(){const _0x220fbc=_0x13d2b9;return this[_0x220fbc(0x331)]&&this[_0x220fbc(0x331)][_0x220fbc(0x190)]===Scene_Battle;},SceneManager[_0x13d2b9(0x1ce)]=function(){const _0x5d2b9c=_0x13d2b9;return this[_0x5d2b9c(0x331)]&&this[_0x5d2b9c(0x331)][_0x5d2b9c(0x190)]===Scene_ItemCrafting;},Game_Temp[_0x13d2b9(0x1ae)][_0x13d2b9(0x1b6)]=function(){return this['_customItemCraftingSettings'];},Game_Temp['prototype'][_0x13d2b9(0x2f3)]=function(){const _0x1ae146=_0x13d2b9;this[_0x1ae146(0x250)]=undefined;},Game_Temp[_0x13d2b9(0x1ae)][_0x13d2b9(0x20c)]=function(_0x5173d6){this['_customItemCraftingSettings']=_0x5173d6;},VisuMZ['ItemCraftingSys'][_0x13d2b9(0x32d)]=Game_System['prototype']['initialize'],Game_System[_0x13d2b9(0x1ae)][_0x13d2b9(0x322)]=function(){const _0x260ee5=_0x13d2b9;VisuMZ[_0x260ee5(0x24e)]['Game_System_initialize']['call'](this),this[_0x260ee5(0x28d)](),this[_0x260ee5(0x144)](),this[_0x260ee5(0x29a)]();},Game_System[_0x13d2b9(0x1ae)]['initItemCraftingMainMenu']=function(){const _0x1f1ef4=_0x13d2b9;this[_0x1f1ef4(0x1d0)]={'shown':VisuMZ[_0x1f1ef4(0x24e)][_0x1f1ef4(0x1f0)][_0x1f1ef4(0x231)][_0x1f1ef4(0x324)],'enabled':VisuMZ[_0x1f1ef4(0x24e)][_0x1f1ef4(0x1f0)]['MainMenu'][_0x1f1ef4(0x1b5)]};},Game_System[_0x13d2b9(0x1ae)][_0x13d2b9(0x363)]=function(){const _0x2b1888=_0x13d2b9;if(this[_0x2b1888(0x1d0)]===undefined)this[_0x2b1888(0x28d)]();return this[_0x2b1888(0x1d0)][_0x2b1888(0x2a5)];},Game_System[_0x13d2b9(0x1ae)][_0x13d2b9(0x1ec)]=function(_0x51b711){const _0x2e6329=_0x13d2b9;if(this['_ItemCrafting_MainMenu']===undefined)this[_0x2e6329(0x28d)]();this['_ItemCrafting_MainMenu'][_0x2e6329(0x2a5)]=_0x51b711;},Game_System['prototype'][_0x13d2b9(0x341)]=function(){const _0x328442=_0x13d2b9;if(this[_0x328442(0x1d0)]===undefined)this[_0x328442(0x28d)]();return this[_0x328442(0x1d0)]['enabled'];},Game_System['prototype']['setMainMenuItemCraftingEnabled']=function(_0x74131e){const _0x18d66d=_0x13d2b9;if(this[_0x18d66d(0x1d0)]===undefined)this['initItemCraftingMainMenu']();this[_0x18d66d(0x1d0)][_0x18d66d(0x18c)]=_0x74131e;},Game_System[_0x13d2b9(0x1ae)]['initItemCraftingSys']=function(){const _0x5247c0=_0x13d2b9;this[_0x5247c0(0x205)]={'items':{},'weapons':{},'armors':{}};},Game_System[_0x13d2b9(0x1ae)][_0x13d2b9(0x2c3)]=function(_0x4f631c){const _0x58722b=_0x13d2b9;return!!this[_0x58722b(0x30b)](_0x4f631c);},Game_System['prototype']['getItemCraftedTimes']=function(_0x233169){const _0x3ab65b=_0x13d2b9;if(!_0x233169)return![];if(this[_0x3ab65b(0x205)]===undefined)this[_0x3ab65b(0x144)]();let _0x4434b4={};if(DataManager[_0x3ab65b(0x207)](_0x233169))_0x4434b4=this[_0x3ab65b(0x205)][_0x3ab65b(0x328)];if(DataManager[_0x3ab65b(0x2af)](_0x233169))_0x4434b4=this[_0x3ab65b(0x205)][_0x3ab65b(0x314)];if(DataManager[_0x3ab65b(0x269)](_0x233169))_0x4434b4=this[_0x3ab65b(0x205)][_0x3ab65b(0x283)];return _0x4434b4[_0x233169['id']]||0x0;},Game_System['prototype']['registerCraftedItem']=function(_0x3b063c,_0x6fe4f1){const _0x28ffc7=_0x13d2b9;if(!_0x3b063c)return![];if(this[_0x28ffc7(0x205)]===undefined)this[_0x28ffc7(0x144)]();_0x6fe4f1=_0x6fe4f1||0x1;let _0x46b6ec={};if(DataManager[_0x28ffc7(0x207)](_0x3b063c))_0x46b6ec=this[_0x28ffc7(0x205)][_0x28ffc7(0x328)];if(DataManager['isWeapon'](_0x3b063c))_0x46b6ec=this[_0x28ffc7(0x205)][_0x28ffc7(0x314)];if(DataManager[_0x28ffc7(0x269)](_0x3b063c))_0x46b6ec=this[_0x28ffc7(0x205)][_0x28ffc7(0x283)];_0x46b6ec[_0x3b063c['id']]=_0x46b6ec[_0x3b063c['id']]||0x0,_0x46b6ec[_0x3b063c['id']]+=_0x6fe4f1;},Game_System[_0x13d2b9(0x1ae)]['initItemCraftingEvents']=function(){const _0x2416a4=_0x13d2b9;this[_0x2416a4(0x2d7)]={'items':[],'weapons':[],'armors':[]};},Game_System[_0x13d2b9(0x1ae)][_0x13d2b9(0x21a)]=function(_0x92e70a){const _0x5d2add=_0x13d2b9;if(this[_0x5d2add(0x2d7)]===undefined)this[_0x5d2add(0x29a)]();let _0x5bfa1f=[];if(DataManager[_0x5d2add(0x207)](_0x92e70a))_0x5bfa1f=this[_0x5d2add(0x2d7)]['items'];else{if(DataManager[_0x5d2add(0x2af)](_0x92e70a))_0x5bfa1f=this[_0x5d2add(0x2d7)][_0x5d2add(0x314)];else DataManager[_0x5d2add(0x269)](_0x92e70a)&&(_0x5bfa1f=this[_0x5d2add(0x2d7)]['armors']);}!_0x5bfa1f['includes'](_0x92e70a['id'])&&_0x5bfa1f[_0x5d2add(0x1b3)](_0x92e70a['id']);},Game_System[_0x13d2b9(0x1ae)][_0x13d2b9(0x1a9)]=function(_0x441ab0){const _0xa086dc=_0x13d2b9;if(this[_0xa086dc(0x2d7)]===undefined)this[_0xa086dc(0x29a)]();let _0x1182d3=[];if(DataManager[_0xa086dc(0x207)](_0x441ab0))_0x1182d3=this[_0xa086dc(0x2d7)]['items'];else{if(DataManager[_0xa086dc(0x2af)](_0x441ab0))_0x1182d3=this['_craftingEvents'][_0xa086dc(0x314)];else DataManager[_0xa086dc(0x269)](_0x441ab0)&&(_0x1182d3=this['_craftingEvents'][_0xa086dc(0x283)]);}return _0x1182d3[_0xa086dc(0x18d)](_0x441ab0['id']);},VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x242)]=Game_Party[_0x13d2b9(0x1ae)]['numItems'],Game_Party[_0x13d2b9(0x1ae)][_0x13d2b9(0x34f)]=function(_0x4cc598){const _0x4204ca=_0x13d2b9;if(DataManager[_0x4204ca(0x312)](_0x4cc598))return 0x0;return VisuMZ['ItemCraftingSys'][_0x4204ca(0x242)]['call'](this,_0x4cc598);},VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x237)]=Game_Party[_0x13d2b9(0x1ae)]['gainItem'],Game_Party[_0x13d2b9(0x1ae)][_0x13d2b9(0x1d5)]=function(_0x167dd7,_0x1d978b,_0x65c373){const _0x5e69bb=_0x13d2b9;DataManager[_0x5e69bb(0x312)](_0x167dd7)&&_0x1d978b>0x0?this[_0x5e69bb(0x304)](_0x167dd7,_0x1d978b):VisuMZ['ItemCraftingSys'][_0x5e69bb(0x237)][_0x5e69bb(0x1c9)](this,_0x167dd7,_0x1d978b,_0x65c373);},Game_Party[_0x13d2b9(0x1ae)][_0x13d2b9(0x304)]=function(_0xa786aa,_0x5c9027){const _0x2f85b7=_0x13d2b9,_0x1d60c0=DataManager[_0x2f85b7(0x15a)](_0xa786aa),_0x584972=[_0x2f85b7(0x328),_0x2f85b7(0x314),_0x2f85b7(0x283)];for(const _0x4aac20 of _0x584972){const _0x2185db=_0x1d60c0[_0x4aac20];for(const _0x4ab716 in _0x2185db){const _0x3fbf93=Number(_0x4ab716),_0x27fd9f=(_0x2185db[_0x4ab716]||0x1)*_0x5c9027;let _0x5c848d=null;if(_0x4aac20===_0x2f85b7(0x328))_0x5c848d=$dataItems[_0x3fbf93];if(_0x4aac20===_0x2f85b7(0x314))_0x5c848d=$dataWeapons[_0x3fbf93];if(_0x4aac20==='armors')_0x5c848d=$dataArmors[_0x3fbf93];if(DataManager[_0x2f85b7(0x1a5)](_0x5c848d))continue;_0x5c848d&&(this['gainItem'](_0x5c848d,_0x27fd9f),![]&&console[_0x2f85b7(0x2d9)](_0x5c848d['name']+'\x20x'+_0x27fd9f));}}},Game_Party[_0x13d2b9(0x1ae)][_0x13d2b9(0x168)]=function(_0x2a8428){const _0x44d735=_0x13d2b9,_0xc47d96=DataManager['getCraftBatchItems'](_0x2a8428),_0x29e826=[_0x44d735(0x328),_0x44d735(0x314),_0x44d735(0x283)];for(const _0x1a00fd of _0x29e826){const _0x14b9a5=_0xc47d96[_0x1a00fd];for(const _0x4b1c59 in _0x14b9a5){const _0x58ee0c=Number(_0x4b1c59);let _0x20ede7=null;if(_0x1a00fd===_0x44d735(0x328))_0x20ede7=$dataItems[_0x58ee0c];if(_0x1a00fd==='weapons')_0x20ede7=$dataWeapons[_0x58ee0c];if(_0x1a00fd===_0x44d735(0x283))_0x20ede7=$dataArmors[_0x58ee0c];if(DataManager[_0x44d735(0x1a5)](_0x20ede7))continue;if(_0x20ede7&&!this[_0x44d735(0x24b)](_0x20ede7))return![];}}return!![];},Game_Party[_0x13d2b9(0x1ae)][_0x13d2b9(0x173)]=function(_0x2c8a32){const _0x4d0b19=_0x13d2b9;let _0x452f45=0x0;const _0x286aff=DataManager[_0x4d0b19(0x15a)](_0x2c8a32),_0x5bb89a=[_0x4d0b19(0x328),_0x4d0b19(0x314),_0x4d0b19(0x283)];for(const _0x2f8c92 of _0x5bb89a){const _0x4008be=_0x286aff[_0x2f8c92];for(const _0x3fac86 in _0x4008be){const _0x4a2095=Number(_0x3fac86),_0x615ca=_0x4008be[_0x3fac86]||0x1;let _0x39c12f=null;if(_0x2f8c92==='items')_0x39c12f=$dataItems[_0x4a2095];if(_0x2f8c92==='weapons')_0x39c12f=$dataWeapons[_0x4a2095];if(_0x2f8c92==='armors')_0x39c12f=$dataArmors[_0x4a2095];if(DataManager[_0x4d0b19(0x1a5)](_0x39c12f))continue;if(_0x39c12f){const _0x57555b=this['maxItems'](_0x39c12f),_0x45fe6a=this[_0x4d0b19(0x34f)](_0x39c12f),_0x504bb6=_0x57555b-_0x45fe6a;if(_0x504bb6>0x0){let _0x287b1c=_0x504bb6/_0x615ca;_0x287b1c=Math[_0x4d0b19(0x213)](_0x287b1c),_0x452f45=Math[_0x4d0b19(0x368)](_0x452f45,_0x287b1c);}}}}return _0x452f45;},VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x152)]=Scene_Menu[_0x13d2b9(0x1ae)]['createCommandWindow'],Scene_Menu[_0x13d2b9(0x1ae)][_0x13d2b9(0x148)]=function(){const _0x205773=_0x13d2b9;VisuMZ[_0x205773(0x24e)][_0x205773(0x152)][_0x205773(0x1c9)](this);const _0x225f17=this[_0x205773(0x258)];_0x225f17['setHandler'](_0x205773(0x318),this[_0x205773(0x361)][_0x205773(0x20b)](this));},Scene_Menu[_0x13d2b9(0x1ae)]['commandItemCrafting']=function(){const _0x541e87=_0x13d2b9;SceneManager[_0x541e87(0x1b3)](Scene_ItemCrafting);};function Scene_ItemCrafting(){const _0x25e853=_0x13d2b9;this[_0x25e853(0x322)](...arguments);}Scene_ItemCrafting[_0x13d2b9(0x1ae)]=Object['create'](Scene_Item[_0x13d2b9(0x1ae)]),Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x190)]=Scene_ItemCrafting,Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x322)]=function(){const _0x269454=_0x13d2b9;Scene_Item[_0x269454(0x1ae)][_0x269454(0x322)][_0x269454(0x1c9)](this),$gameSystem['_craftingCommonEventScene']=undefined;},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x14c)]=function(){const _0x2cff67=_0x13d2b9;Scene_Item['prototype'][_0x2cff67(0x14c)]['call'](this),this['updateCraftingAnimation']();},Scene_ItemCrafting['prototype'][_0x13d2b9(0x18a)]=function(){const _0x850b12=_0x13d2b9;Scene_Item[_0x850b12(0x1ae)]['create'][_0x850b12(0x1c9)](this),this[_0x850b12(0x370)](),this[_0x850b12(0x16e)](),this[_0x850b12(0x240)](),this[_0x850b12(0x246)](),this[_0x850b12(0x19d)]()&&this[_0x850b12(0x35d)](),this[_0x850b12(0x183)](),this[_0x850b12(0x15c)]();},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x183)]=function(){const _0x22ea32=_0x13d2b9,_0x124197=VisuMZ[_0x22ea32(0x24e)][_0x22ea32(0x1f0)]['Window'];this['_helpWindow']&&this['_helpWindow'][_0x22ea32(0x2b9)](_0x124197[_0x22ea32(0x355)]),this[_0x22ea32(0x33e)]&&this[_0x22ea32(0x33e)][_0x22ea32(0x2b9)](_0x124197['CategoryBgType']),this['_goldWindow']&&this[_0x22ea32(0x2cf)][_0x22ea32(0x2b9)](_0x124197[_0x22ea32(0x1fb)]),this[_0x22ea32(0x31f)]&&this[_0x22ea32(0x31f)][_0x22ea32(0x2b9)](_0x124197[_0x22ea32(0x1e1)]),this[_0x22ea32(0x315)]&&this['_statusWindow']['setBackgroundType'](_0x124197[_0x22ea32(0x270)]),this['_ingredientSelectTitle']&&this['_ingredientSelectTitle'][_0x22ea32(0x2b9)](_0x124197[_0x22ea32(0x346)]),this[_0x22ea32(0x20e)]&&this[_0x22ea32(0x20e)][_0x22ea32(0x2b9)](_0x124197[_0x22ea32(0x342)]),this[_0x22ea32(0x1a7)]&&this['_numberWindow'][_0x22ea32(0x2b9)](_0x124197[_0x22ea32(0x1fc)]),this['_buttonAssistWindow']&&this['_buttonAssistWindow'][_0x22ea32(0x2b9)](_0x124197[_0x22ea32(0x1e5)]);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x282)]=function(){const _0x315b32=_0x13d2b9;return Scene_Shop[_0x315b32(0x1ae)][_0x315b32(0x256)][_0x315b32(0x1c9)](this);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x370)]=function(){const _0x3f7c1e=_0x13d2b9,_0x35f51c=this['goldWindowRect']();this['_goldWindow']=new Window_Gold(_0x35f51c),this[_0x3f7c1e(0x1a2)](this[_0x3f7c1e(0x2cf)]);},Scene_ItemCrafting['prototype'][_0x13d2b9(0x358)]=function(){const _0x50ae83=_0x13d2b9;return Scene_Shop[_0x50ae83(0x1ae)][_0x50ae83(0x29b)]['call'](this);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x2b5)]=function(){const _0x596762=_0x13d2b9;return Scene_Shop[_0x596762(0x1ae)][_0x596762(0x157)][_0x596762(0x1c9)](this);},Scene_ItemCrafting[_0x13d2b9(0x1ae)]['createItemWindow']=function(){const _0x2ac86e=_0x13d2b9;this['createItemWindowBase'](),this['isUseModernControls']()&&this['postCreateItemWindowModernControls'](),this['allowCreateStatusWindow']()&&(this[_0x2ac86e(0x180)](),this['addWindow'](this[_0x2ac86e(0x31f)]));},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x25f)]=function(){const _0x31541d=_0x13d2b9,_0x36f0aa=this['itemWindowRect']();this['_itemWindow']=new Window_ItemCraftingList(_0x36f0aa),this['_itemWindow'][_0x31541d(0x188)](this[_0x31541d(0x2e6)]),this[_0x31541d(0x31f)][_0x31541d(0x333)]('ok',this[_0x31541d(0x1c0)]['bind'](this)),this[_0x31541d(0x31f)][_0x31541d(0x333)](_0x31541d(0x223),this['onItemCancel']['bind'](this)),this['addWindow'](this[_0x31541d(0x31f)]),this['_categoryWindow'][_0x31541d(0x2e0)](this[_0x31541d(0x31f)]),!this[_0x31541d(0x33e)][_0x31541d(0x28b)]()&&(this[_0x31541d(0x31f)]['y']-=this[_0x31541d(0x33e)][_0x31541d(0x263)],this[_0x31541d(0x31f)][_0x31541d(0x263)]+=this[_0x31541d(0x33e)][_0x31541d(0x263)],this[_0x31541d(0x33e)][_0x31541d(0x36b)](),this[_0x31541d(0x33e)][_0x31541d(0x165)](),this[_0x31541d(0x35d)]());},Scene_ItemCrafting[_0x13d2b9(0x1ae)]['itemWindowRect']=function(){const _0x585ae4=_0x13d2b9;return this[_0x585ae4(0x258)]=this[_0x585ae4(0x33e)],Scene_Shop[_0x585ae4(0x1ae)][_0x585ae4(0x369)]['call'](this);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x2b3)]=function(){const _0x15f267=_0x13d2b9;return Scene_Shop[_0x15f267(0x1ae)]['statusWindowRectItemsEquipsCore'][_0x15f267(0x1c9)](this);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x16e)]=function(){const _0x55398b=_0x13d2b9,_0x1c8d30=this[_0x55398b(0x2d8)]();this[_0x55398b(0x1a7)]=new Window_ItemCraftingNumber(_0x1c8d30),this['_numberWindow'][_0x55398b(0x36b)](),this[_0x55398b(0x1a7)][_0x55398b(0x333)]('ok',this[_0x55398b(0x249)]['bind'](this)),this[_0x55398b(0x1a7)][_0x55398b(0x333)](_0x55398b(0x223),this[_0x55398b(0x158)]['bind'](this)),this['addWindow'](this[_0x55398b(0x1a7)]);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x240)]=function(){const _0xade3d3=_0x13d2b9,_0x55ab7c=this[_0xade3d3(0x2b5)]();this[_0xade3d3(0x2f2)]=new Window_Selectable(_0x55ab7c),this['_ingredientSelectTitle']['hide'](),this[_0xade3d3(0x1a2)](this[_0xade3d3(0x2f2)]);},Scene_ItemCrafting['prototype'][_0x13d2b9(0x246)]=function(){const _0x36f29a=_0x13d2b9,_0x2746ad=this[_0x36f29a(0x2d8)](),_0x36859f=new Window_ItemCraftingIngredient(_0x2746ad);_0x36859f['hide'](),_0x36859f[_0x36f29a(0x188)](this[_0x36f29a(0x2e6)]),_0x36859f[_0x36f29a(0x25b)](this[_0x36f29a(0x315)]),_0x36859f[_0x36f29a(0x333)]('ok',this[_0x36f29a(0x184)][_0x36f29a(0x20b)](this)),_0x36859f[_0x36f29a(0x333)](_0x36f29a(0x223),this[_0x36f29a(0x264)]['bind'](this)),this[_0x36f29a(0x20e)]=_0x36859f,this[_0x36f29a(0x1a2)](this[_0x36f29a(0x20e)]);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x1bb)]=function(){const _0xc271c2=_0x13d2b9;return VisuMZ[_0xc271c2(0x24e)][_0xc271c2(0x1f0)]['Window'][_0xc271c2(0x19a)];},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x282)]=function(){const _0x1d3d68=_0x13d2b9;return this[_0x1d3d68(0x1bb)]()?this[_0x1d3d68(0x28c)]():Scene_Shop[_0x1d3d68(0x1ae)]['helpWindowRectItemsEquipsCore'][_0x1d3d68(0x1c9)](this);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x28c)]=function(){const _0x273d4d=_0x13d2b9;if(VisuMZ[_0x273d4d(0x24e)][_0x273d4d(0x1f0)][_0x273d4d(0x294)]['HelpWindow_RectJS'])return VisuMZ[_0x273d4d(0x24e)]['Settings'][_0x273d4d(0x294)][_0x273d4d(0x19f)][_0x273d4d(0x1c9)](this);const _0x573c30=0x0,_0x15817d=this['helpAreaTop'](),_0x56be0e=Graphics[_0x273d4d(0x18b)],_0x17f4b3=this[_0x273d4d(0x170)]();return new Rectangle(_0x573c30,_0x15817d,_0x56be0e,_0x17f4b3);},Scene_ItemCrafting[_0x13d2b9(0x1ae)]['categoryWindowRect']=function(){const _0x349be4=_0x13d2b9;return this[_0x349be4(0x1bb)]()?this[_0x349be4(0x306)]():Scene_Shop[_0x349be4(0x1ae)][_0x349be4(0x157)][_0x349be4(0x1c9)](this);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x306)]=function(){const _0x5228cf=_0x13d2b9;if(VisuMZ[_0x5228cf(0x24e)][_0x5228cf(0x1f0)][_0x5228cf(0x294)]['CategoryWindow_RectJS'])return VisuMZ['ItemCraftingSys']['Settings'][_0x5228cf(0x294)]['CategoryWindow_RectJS'][_0x5228cf(0x1c9)](this);const _0x1dd694=this[_0x5228cf(0x147)]()?this[_0x5228cf(0x16f)]():0x0,_0x39ea00=this[_0x5228cf(0x15b)](),_0x28212c=Graphics['boxWidth']-this[_0x5228cf(0x16f)](),_0x54be23=this[_0x5228cf(0x245)](0x1,!![]);return new Rectangle(_0x1dd694,_0x39ea00,_0x28212c,_0x54be23);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x358)]=function(){const _0x53abd8=_0x13d2b9;return this[_0x53abd8(0x1bb)]()?this[_0x53abd8(0x161)]():Scene_Shop['prototype'][_0x53abd8(0x29b)][_0x53abd8(0x1c9)](this);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x161)]=function(){const _0x2ee1e7=_0x13d2b9;if(VisuMZ[_0x2ee1e7(0x24e)][_0x2ee1e7(0x1f0)][_0x2ee1e7(0x294)][_0x2ee1e7(0x253)])return VisuMZ['ItemCraftingSys']['Settings'][_0x2ee1e7(0x294)][_0x2ee1e7(0x253)][_0x2ee1e7(0x1c9)](this);const _0x39ea24=this[_0x2ee1e7(0x16f)](),_0x41307c=this[_0x2ee1e7(0x245)](0x1,!![]),_0x34eb33=this[_0x2ee1e7(0x147)]()?0x0:Graphics[_0x2ee1e7(0x18b)]-_0x39ea24,_0x55cb03=this[_0x2ee1e7(0x15b)]();return new Rectangle(_0x34eb33,_0x55cb03,_0x39ea24,_0x41307c);},Scene_ItemCrafting[_0x13d2b9(0x1ae)]['itemWindowRect']=function(){const _0x21d0b3=_0x13d2b9;return this['_commandWindow']=this[_0x21d0b3(0x33e)],this[_0x21d0b3(0x1bb)]()?this[_0x21d0b3(0x2f4)]():Scene_Shop[_0x21d0b3(0x1ae)][_0x21d0b3(0x369)]['call'](this);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x2f4)]=function(){const _0x18b872=_0x13d2b9;if(VisuMZ[_0x18b872(0x24e)][_0x18b872(0x1f0)][_0x18b872(0x294)][_0x18b872(0x316)])return VisuMZ['ItemCraftingSys'][_0x18b872(0x1f0)]['Window'][_0x18b872(0x316)][_0x18b872(0x1c9)](this);const _0xe8d96=this[_0x18b872(0x258)]['y']+this[_0x18b872(0x258)]['height'],_0x2f2e43=Graphics['boxWidth']-this[_0x18b872(0x1c3)](),_0x3abbc6=this['mainAreaHeight']()-this[_0x18b872(0x258)]['height'],_0x452440=this[_0x18b872(0x147)]()?Graphics['boxWidth']-_0x2f2e43:0x0;return new Rectangle(_0x452440,_0xe8d96,_0x2f2e43,_0x3abbc6);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x1e9)]=function(){const _0x690ce5=_0x13d2b9;if(this[_0x690ce5(0x1bb)]())return!![];return Scene_Item['prototype'][_0x690ce5(0x1e9)][_0x690ce5(0x1c9)](this);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x2b3)]=function(){const _0x59f6af=_0x13d2b9;return this[_0x59f6af(0x1bb)]()?this[_0x59f6af(0x199)]():Scene_Shop['prototype'][_0x59f6af(0x225)]['call'](this);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x199)]=function(){const _0x16b9c3=_0x13d2b9;if(VisuMZ[_0x16b9c3(0x24e)][_0x16b9c3(0x1f0)][_0x16b9c3(0x294)][_0x16b9c3(0x36a)])return VisuMZ[_0x16b9c3(0x24e)]['Settings']['Window']['StatusWindow_RectJS'][_0x16b9c3(0x1c9)](this);const _0x3e1c25=this[_0x16b9c3(0x1c3)](),_0x24180d=this[_0x16b9c3(0x1d4)]()-this[_0x16b9c3(0x258)][_0x16b9c3(0x263)],_0x1a7512=this[_0x16b9c3(0x147)]()?0x0:Graphics['boxWidth']-_0x3e1c25,_0x245f27=this[_0x16b9c3(0x258)]['y']+this['_commandWindow'][_0x16b9c3(0x263)];return new Rectangle(_0x1a7512,_0x245f27,_0x3e1c25,_0x24180d);},Scene_ItemCrafting[_0x13d2b9(0x1ae)]['onCategoryOk']=function(){const _0x428bef=_0x13d2b9;this[_0x428bef(0x31f)]['activate'](),this[_0x428bef(0x31f)][_0x428bef(0x2ee)](0x0);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x1c0)]=function(){const _0x25e8c7=_0x13d2b9;$gameTemp['_bypassProxy']=!![],this['_item']=this[_0x25e8c7(0x31f)][_0x25e8c7(0x14b)](),this[_0x25e8c7(0x31f)]['hide'](),this['clearUserSelectedIngredients'](),this[_0x25e8c7(0x2a8)]()?this[_0x25e8c7(0x371)]():this[_0x25e8c7(0x176)](),$gameTemp['_bypassProxy']=![],this[_0x25e8c7(0x221)]=this[_0x25e8c7(0x31f)][_0x25e8c7(0x14b)]();},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x176)]=function(){const _0x3ea578=_0x13d2b9;this[_0x3ea578(0x2f2)][_0x3ea578(0x36b)](),this['_ingredientSelectList']['hide'](),this[_0x3ea578(0x33e)]['show'](),$gameTemp[_0x3ea578(0x239)]=!![],this[_0x3ea578(0x1a7)]['setup'](this[_0x3ea578(0x31f)]['item']()),$gameTemp[_0x3ea578(0x239)]=![],this['_numberWindow'][_0x3ea578(0x2c9)](),this[_0x3ea578(0x1a7)][_0x3ea578(0x222)]();},Scene_ItemCrafting['prototype']['activateItemWindow']=function(){const _0x352f51=_0x13d2b9;this[_0x352f51(0x1a7)][_0x352f51(0x36b)](),this[_0x352f51(0x2f2)][_0x352f51(0x36b)](),this[_0x352f51(0x20e)][_0x352f51(0x36b)](),this[_0x352f51(0x33e)][_0x352f51(0x2c9)](),this['_itemWindow']['show'](),this[_0x352f51(0x31f)][_0x352f51(0x222)](),this[_0x352f51(0x31f)][_0x352f51(0x2ac)]();},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x249)]=function(){const _0x1a9c09=_0x13d2b9;VisuMZ['ItemCraftingSys'][_0x1a9c09(0x1f0)][_0x1a9c09(0x1fd)][_0x1a9c09(0x2a0)]?this[_0x1a9c09(0x24c)]():this[_0x1a9c09(0x297)]();},Scene_ItemCrafting['prototype'][_0x13d2b9(0x297)]=function(){const _0x3ed270=_0x13d2b9;this[_0x3ed270(0x2e1)][_0x3ed270(0x160)]=!![],this[_0x3ed270(0x2ef)]=![],this['processItemCrafting'](),this['onItemCrafted'](),this['onAnimationFinish']();},Scene_ItemCrafting[_0x13d2b9(0x1ae)]['onAnimationFinish']=function(){const _0x5390e0=_0x13d2b9;this[_0x5390e0(0x2c5)]()?this['processCraftCommonEvent']():this[_0x5390e0(0x20a)]();},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x20a)]=function(){const _0x5855de=_0x13d2b9;this['activateItemWindow'](),this[_0x5855de(0x31f)][_0x5855de(0x1ee)](),this['_categoryWindow'][_0x5855de(0x1ee)](),this[_0x5855de(0x33e)][_0x5855de(0x30f)](),this['_categoryWindow']['callUpdateHelp'](),this['_goldWindow']['refresh'](),this['_itemWindow']['updateHelp']();},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x19b)]=function(){const _0xf15a24=_0x13d2b9;$gameTemp['_bypassProxy']=!![];let _0xf81a88=this[_0xf15a24(0x31f)][_0xf15a24(0x14b)]();$gameTemp['_bypassProxy']=![];const _0x29bac1=this[_0xf15a24(0x1a7)][_0xf15a24(0x1b0)](),_0x31a564=DataManager[_0xf15a24(0x327)](_0xf81a88);let _0x84a5c5=0x0;for(const _0x454181 of _0x31a564){if(!_0x454181)continue;let _0x220298=_0x454181[0x0];const _0x392ad8=_0x454181[0x1]*_0x29bac1;_0x220298===_0xf15a24(0x303)?$gameParty[_0xf15a24(0x16a)](_0x392ad8):(typeof _0x220298===_0xf15a24(0x27e)&&_0x220298['match'](/CATEGORY/i)&&(_0x220298=this['_ingredientsList'][_0x84a5c5],_0x84a5c5+=0x1),$gameParty[_0xf15a24(0x2bf)](_0x220298,_0x392ad8,![]));}_0xf81a88=this[_0xf15a24(0x31f)][_0xf15a24(0x14b)](),$gameParty[_0xf15a24(0x1d5)](_0xf81a88,_0x29bac1),this[_0xf15a24(0x1a7)][_0xf15a24(0x1b0)]()>0x0?SoundManager[_0xf15a24(0x2d0)]():SoundManager[_0xf15a24(0x29f)](),$gameSystem['registerCraftedItem'](_0xf81a88,_0x29bac1);},Scene_ItemCrafting['prototype'][_0x13d2b9(0x19c)]=function(){const _0x341e29=_0x13d2b9,_0x37ce29=this[_0x341e29(0x221)],_0x1c6a0b=this['_numberWindow']['number']();VisuMZ[_0x341e29(0x24e)][_0x341e29(0x33f)](_0x37ce29,!![]),VisuMZ['ItemCraftingSys'][_0x341e29(0x33f)](_0x37ce29,![]),this['enableCraftingSwitches']();const _0xe64bf=DataManager[_0x341e29(0x26b)](_0x37ce29);VisuMZ['ItemCraftingSys']['JS'][_0xe64bf]&&VisuMZ['ItemCraftingSys']['JS'][_0xe64bf][_0x341e29(0x1c9)](this,_0x37ce29,_0x1c6a0b),VisuMZ[_0x341e29(0x24e)][_0x341e29(0x1f0)][_0x341e29(0x2c0)][_0x341e29(0x2e7)]['call'](this,_0x37ce29,_0x1c6a0b);},VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x33f)]=function(_0x183609,_0x2e1b63){const _0x52025a=_0x13d2b9,_0x3325ed=_0x2e1b63?VisuMZ['ItemCraftingSys'][_0x52025a(0x295)][_0x52025a(0x275)]:VisuMZ[_0x52025a(0x24e)][_0x52025a(0x295)][_0x52025a(0x353)],_0x556f37=_0x183609[_0x52025a(0x1ed)][_0x52025a(0x276)](_0x3325ed);if(_0x556f37)for(const _0x376a2a of _0x556f37){if(!_0x376a2a)continue;_0x376a2a[_0x52025a(0x276)](_0x3325ed);const _0x3f90bb=JSON[_0x52025a(0x215)]('['+RegExp['$1'][_0x52025a(0x276)](/\d+/g)+']');for(const _0x28c201 of _0x3f90bb){$gameSwitches[_0x52025a(0x1e2)](_0x28c201,_0x2e1b63);}}},Scene_ItemCrafting[_0x13d2b9(0x1ae)]['onNumberCancel']=function(){const _0xda7996=_0x13d2b9;SoundManager[_0xda7996(0x29f)](),this[_0xda7996(0x264)]();},Scene_ItemCrafting[_0x13d2b9(0x1ae)]['onIngredientListOk']=function(){const _0x2778ef=_0x13d2b9,_0x1950d9=this[_0x2778ef(0x20e)][_0x2778ef(0x14b)]();this['_ingredientsList'][this['_ingredientIndex']]=_0x1950d9,this[_0x2778ef(0x2a9)]++,this[_0x2778ef(0x371)]();},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x264)]=function(){const _0x86f99c=_0x13d2b9;this[_0x86f99c(0x1b8)][_0x86f99c(0x2ad)](),this[_0x86f99c(0x2a9)]--,this[_0x86f99c(0x2a9)]<0x0?this[_0x86f99c(0x224)]():this[_0x86f99c(0x371)]();},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x2d3)]=function(){const _0x3330d7=_0x13d2b9;this[_0x3330d7(0x146)]=[],this[_0x3330d7(0x35e)]=[],this[_0x3330d7(0x1b8)]=[],this[_0x3330d7(0x2a9)]=0x0;},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x2a8)]=function(){const _0x1ce3c0=_0x13d2b9;if(!this[_0x1ce3c0(0x221)])return![];const _0x522a09=DataManager[_0x1ce3c0(0x327)](this[_0x1ce3c0(0x221)]);for(const _0x25df8f of _0x522a09){if(!_0x25df8f)continue;const _0x4b3b69=_0x25df8f[0x0];if(!_0x4b3b69)continue;if(typeof _0x4b3b69===_0x1ce3c0(0x27e)&&_0x4b3b69[_0x1ce3c0(0x276)](/CATEGORY/i)){_0x4b3b69['match'](/CATEGORY: (.*)/i);const _0x4713af=String(RegExp['$1'])['trim']();this['_ingredientCategories'][_0x1ce3c0(0x1b3)](_0x4713af),this[_0x1ce3c0(0x35e)][_0x1ce3c0(0x1b3)](_0x25df8f[0x1]||0x1);}}return this[_0x1ce3c0(0x146)][_0x1ce3c0(0x27c)]>0x0;},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x371)]=function(){const _0x4dbdb5=_0x13d2b9;if(this[_0x4dbdb5(0x2a9)]>=this[_0x4dbdb5(0x146)][_0x4dbdb5(0x27c)])return this[_0x4dbdb5(0x176)]();this[_0x4dbdb5(0x33e)][_0x4dbdb5(0x36b)](),this[_0x4dbdb5(0x1a7)][_0x4dbdb5(0x36b)]();const _0x43965a=this['_ingredientCategories'][this[_0x4dbdb5(0x2a9)]],_0x49a116=this[_0x4dbdb5(0x35e)][this[_0x4dbdb5(0x2a9)]];this['_ingredientSelectTitle']['show'](),this[_0x4dbdb5(0x20e)][_0x4dbdb5(0x2c9)](),this['_ingredientSelectTitle'][_0x4dbdb5(0x17c)][_0x4dbdb5(0x2e9)]();const _0x34811b=VisuMZ[_0x4dbdb5(0x24e)][_0x4dbdb5(0x1f0)]['General'][_0x4dbdb5(0x365)],_0x3a5018=VisuMZ[_0x4dbdb5(0x1fe)][_0x4dbdb5(0x1f0)][_0x4dbdb5(0x154)][_0x4dbdb5(0x1fa)],_0x45d6ce=_0x34811b[_0x4dbdb5(0x220)](_0x43965a,_0x3a5018[_0x4dbdb5(0x220)](_0x49a116)),_0x2f9e67=this[_0x4dbdb5(0x2f2)][_0x4dbdb5(0x1c2)](0x0);this['_ingredientSelectTitle'][_0x4dbdb5(0x2fa)](_0x45d6ce,_0x2f9e67['x'],_0x2f9e67['y']),this[_0x4dbdb5(0x20e)][_0x4dbdb5(0x309)](_0x43965a,_0x49a116);},Scene_ItemCrafting[_0x13d2b9(0x1ae)]['buttonAssistKey1']=function(){const _0x3034ec=_0x13d2b9;if(this[_0x3034ec(0x1a7)]&&this[_0x3034ec(0x1a7)]['active'])return TextManager[_0x3034ec(0x320)](_0x3034ec(0x203),'right');return Scene_Item[_0x3034ec(0x1ae)][_0x3034ec(0x155)][_0x3034ec(0x1c9)](this);},Scene_ItemCrafting['prototype']['buttonAssistKey2']=function(){const _0x5475af=_0x13d2b9;if(this[_0x5475af(0x1a7)]&&this[_0x5475af(0x1a7)][_0x5475af(0x266)])return TextManager['getInputMultiButtonStrings']('up','down');return Scene_Item[_0x5475af(0x1ae)][_0x5475af(0x251)]['call'](this);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x1f4)]=function(){const _0x158148=_0x13d2b9;if(this[_0x158148(0x36d)]())return VisuMZ[_0x158148(0x1fe)][_0x158148(0x1f0)][_0x158148(0x154)]['buttonAssistCategory'];else{if(this[_0x158148(0x1a7)]&&this['_numberWindow']['active'])return VisuMZ['ItemsEquipsCore']['Settings'][_0x158148(0x1cd)][_0x158148(0x27b)];}return Scene_Item[_0x158148(0x1ae)][_0x158148(0x1f4)][_0x158148(0x1c9)](this);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x1a4)]=function(){const _0x46dd73=_0x13d2b9;if(this['_numberWindow']&&this[_0x46dd73(0x1a7)]['active'])return VisuMZ[_0x46dd73(0x1fe)]['Settings'][_0x46dd73(0x1cd)][_0x46dd73(0x175)];return Scene_Item[_0x46dd73(0x1ae)]['buttonAssistText2'][_0x46dd73(0x1c9)](this);},Scene_ItemCrafting['prototype']['buttonAssistText4']=function(){const _0x4f12dd=_0x13d2b9;return this['_numberWindow']&&this[_0x4f12dd(0x1a7)]['active']?TextManager[_0x4f12dd(0x367)]:Scene_Item[_0x4f12dd(0x1ae)]['buttonAssistText4'][_0x4f12dd(0x1c9)](this);},Scene_ItemCrafting[_0x13d2b9(0x1ae)]['createBackground']=function(){const _0x5d484b=_0x13d2b9;Scene_MenuBase[_0x5d484b(0x1ae)]['createBackground'][_0x5d484b(0x1c9)](this),this[_0x5d484b(0x1b9)](this[_0x5d484b(0x14f)]()),this[_0x5d484b(0x335)]();},Scene_ItemCrafting['prototype'][_0x13d2b9(0x14f)]=function(){const _0x136521=_0x13d2b9;return VisuMZ[_0x136521(0x24e)][_0x136521(0x1f0)][_0x136521(0x2ed)][_0x136521(0x293)];},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x335)]=function(){const _0x53183e=_0x13d2b9,_0x3c4724={'BgFilename1':VisuMZ[_0x53183e(0x24e)][_0x53183e(0x1f0)]['BgSettings'][_0x53183e(0x27d)],'BgFilename2':VisuMZ[_0x53183e(0x24e)]['Settings'][_0x53183e(0x2ed)][_0x53183e(0x164)]};_0x3c4724&&(_0x3c4724[_0x53183e(0x27d)]!==''||_0x3c4724['BgFilename2']!=='')&&(this[_0x53183e(0x366)]=new Sprite(ImageManager[_0x53183e(0x1d6)](_0x3c4724[_0x53183e(0x27d)])),this[_0x53183e(0x23c)]=new Sprite(ImageManager[_0x53183e(0x28f)](_0x3c4724[_0x53183e(0x164)])),this[_0x53183e(0x2f8)](this[_0x53183e(0x366)]),this[_0x53183e(0x2f8)](this[_0x53183e(0x23c)]),this[_0x53183e(0x366)][_0x53183e(0x189)][_0x53183e(0x227)](this[_0x53183e(0x36c)][_0x53183e(0x20b)](this,this['_backSprite1'])),this['_backSprite2'][_0x53183e(0x189)][_0x53183e(0x227)](this['adjustSprite'][_0x53183e(0x20b)](this,this[_0x53183e(0x23c)])));},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x36c)]=function(_0x9f957){const _0x56bf4b=_0x13d2b9;this[_0x56bf4b(0x2ce)](_0x9f957),this[_0x56bf4b(0x162)](_0x9f957);},Scene_ItemCrafting[_0x13d2b9(0x1ae)]['startAnimation']=function(){const _0x144e0b=_0x13d2b9;this[_0x144e0b(0x2ef)]=!![],this[_0x144e0b(0x372)]=0x14,this[_0x144e0b(0x2e1)]['visible']=VisuMZ[_0x144e0b(0x24e)][_0x144e0b(0x1f0)][_0x144e0b(0x1fd)][_0x144e0b(0x2e3)]||![],this[_0x144e0b(0x2b2)]();},Scene_ItemCrafting['prototype'][_0x13d2b9(0x2b2)]=function(){const _0x46f076=_0x13d2b9;this[_0x46f076(0x198)]=new Sprite(),this[_0x46f076(0x2f8)](this[_0x46f076(0x198)]),this['setItemSpriteBitmap'](),this['setItemSpriteFrame'](),this['setItemSpritePosition'](),this[_0x46f076(0x291)](),this[_0x46f076(0x2cd)](),this['createAnimation'](this[_0x46f076(0x2ea)]['shift']());},Scene_ItemCrafting[_0x13d2b9(0x1ae)]['setItemSpriteBitmap']=function(){const _0x261ee1=_0x13d2b9,_0x3e4cef=VisuMZ[_0x261ee1(0x24e)][_0x261ee1(0x295)],_0x41fbe9=this[_0x261ee1(0x221)][_0x261ee1(0x1ed)];this[_0x261ee1(0x235)]='';if(_0x41fbe9['match'](_0x3e4cef[_0x261ee1(0x192)]))this['_craftPicture']=String(RegExp['$1']);else _0x41fbe9[_0x261ee1(0x276)](_0x3e4cef['bigPicture'])&&(this[_0x261ee1(0x235)]=String(RegExp['$1']));this[_0x261ee1(0x2aa)]=new Sprite();this[_0x261ee1(0x235)]?this[_0x261ee1(0x2aa)][_0x261ee1(0x189)]=ImageManager[_0x261ee1(0x2b7)](this[_0x261ee1(0x235)]):(this[_0x261ee1(0x2aa)][_0x261ee1(0x189)]=ImageManager['loadSystem'](_0x261ee1(0x17d)),this[_0x261ee1(0x2aa)][_0x261ee1(0x189)]['smooth']=![]);this[_0x261ee1(0x2aa)][_0x261ee1(0x181)]['x']=0.5,this[_0x261ee1(0x2aa)][_0x261ee1(0x181)]['y']=0.5;if(!this[_0x261ee1(0x235)]){const _0xdc01d4=VisuMZ[_0x261ee1(0x24e)][_0x261ee1(0x1f0)][_0x261ee1(0x1fd)]['Scale']||0x8;this[_0x261ee1(0x2aa)][_0x261ee1(0x2d5)]['x']=_0xdc01d4,this[_0x261ee1(0x2aa)][_0x261ee1(0x2d5)]['y']=_0xdc01d4;}this['_itemSprite'][_0x261ee1(0x2f8)](this['_iconSprite']);},Scene_ItemCrafting['prototype'][_0x13d2b9(0x200)]=function(){const _0x2818d0=_0x13d2b9;if(this['_craftPicture'])return;const _0x51a828=this['_item'],_0xadb2b8=_0x51a828[_0x2818d0(0x1af)],_0x1d80a2=ImageManager['iconWidth'],_0x26bb50=ImageManager[_0x2818d0(0x262)],_0xa6ae15=_0xadb2b8%0x10*_0x1d80a2,_0x3632eb=Math[_0x2818d0(0x27a)](_0xadb2b8/0x10)*_0x26bb50;this['_iconSprite'][_0x2818d0(0x30e)](_0xa6ae15,_0x3632eb,_0x1d80a2,_0x26bb50);},Scene_ItemCrafting['prototype'][_0x13d2b9(0x2ab)]=function(){const _0x1cc7ff=_0x13d2b9;this[_0x1cc7ff(0x198)]['x']=Math[_0x1cc7ff(0x214)](Graphics['width']/0x2);const _0xd7701f=Math[_0x1cc7ff(0x214)](ImageManager[_0x1cc7ff(0x262)]*this[_0x1cc7ff(0x198)][_0x1cc7ff(0x2d5)]['y']);this['_itemSprite']['y']=Math[_0x1cc7ff(0x214)]((Graphics[_0x1cc7ff(0x263)]+_0xd7701f)/0x2);},Scene_ItemCrafting['prototype']['setItemSpriteOpacity']=function(){const _0x47ce9f=_0x13d2b9;this[_0x47ce9f(0x1e6)]=VisuMZ[_0x47ce9f(0x24e)]['Settings'][_0x47ce9f(0x1fd)][_0x47ce9f(0x14e)]||0x1,this[_0x47ce9f(0x221)][_0x47ce9f(0x1ed)][_0x47ce9f(0x276)](VisuMZ[_0x47ce9f(0x24e)][_0x47ce9f(0x295)][_0x47ce9f(0x351)])&&(this['_itemSpriteOpacitySpeed']=Math['max'](Number(RegExp['$1']),0x1)),this[_0x47ce9f(0x198)][_0x47ce9f(0x2ca)]=0x0;},Scene_ItemCrafting['prototype']['createAnimationIDs']=function(){const _0x2a0711=_0x13d2b9;this[_0x2a0711(0x2ea)]=[],this[_0x2a0711(0x221)]['note'][_0x2a0711(0x276)](VisuMZ[_0x2a0711(0x24e)][_0x2a0711(0x295)][_0x2a0711(0x308)])?this['_animationIDs']=RegExp['$1'][_0x2a0711(0x1b4)](',')['map'](_0x35cd7c=>Number(_0x35cd7c)):this[_0x2a0711(0x2ea)]=this[_0x2a0711(0x2ea)][_0x2a0711(0x349)](VisuMZ[_0x2a0711(0x24e)]['Settings'][_0x2a0711(0x1fd)][_0x2a0711(0x35c)]);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x289)]=function(_0x353505){const _0x88191=_0x13d2b9,_0x5dda87=$dataAnimations[_0x353505];if(!_0x5dda87)return;const _0x36b5c9=this[_0x88191(0x25a)](_0x5dda87);this[_0x88191(0x357)]=new(_0x36b5c9?Sprite_AnimationMV:Sprite_Animation)();const _0x3a969a=[this[_0x88191(0x198)]],_0x255977=0x0;this[_0x88191(0x357)][_0x88191(0x309)](_0x3a969a,_0x5dda87,![],_0x255977,null),this[_0x88191(0x2f8)](this[_0x88191(0x357)]);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x25a)]=function(_0x3e48ce){return!!_0x3e48ce['frames'];},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x274)]=function(){const _0xab5594=_0x13d2b9;if(!this[_0xab5594(0x2ef)])return;this[_0xab5594(0x1c8)](),this[_0xab5594(0x2ec)](),this['isFinishedAnimating']()&&this['processFinishAnimation']();},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x1c8)]=function(){const _0x5920c8=_0x13d2b9;this[_0x5920c8(0x198)][_0x5920c8(0x2ca)]+=this[_0x5920c8(0x1e6)];},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x2ec)]=function(){const _0x5c38be=_0x13d2b9;if(!this[_0x5c38be(0x357)])return;if(this[_0x5c38be(0x357)][_0x5c38be(0x178)]())return;this[_0x5c38be(0x1db)](),this[_0x5c38be(0x289)](this[_0x5c38be(0x2ea)]['shift']());},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x1db)]=function(){const _0x35e3c3=_0x13d2b9;if(!this[_0x35e3c3(0x357)])return;this[_0x35e3c3(0x2c8)](this[_0x35e3c3(0x357)]),this[_0x35e3c3(0x357)][_0x35e3c3(0x296)](),this[_0x35e3c3(0x357)]=undefined;},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x206)]=function(){const _0x11f3b2=_0x13d2b9;if(!this[_0x11f3b2(0x198)])return;this[_0x11f3b2(0x2c8)](this['_itemSprite']),this[_0x11f3b2(0x198)][_0x11f3b2(0x296)](),this[_0x11f3b2(0x198)]=undefined;},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x352)]=function(){const _0x5ba68f=_0x13d2b9;if(TouchInput[_0x5ba68f(0x228)]())return!![];if(Input[_0x5ba68f(0x2ba)]('ok'))return!![];if(Input['isTriggered'](_0x5ba68f(0x223)))return!![];if(this[_0x5ba68f(0x198)][_0x5ba68f(0x2ca)]<0xff)return![];if(this[_0x5ba68f(0x357)])return![];return this[_0x5ba68f(0x372)]--<=0x0;},Scene_ItemCrafting['prototype'][_0x13d2b9(0x1ef)]=function(){const _0x5d6f83=_0x13d2b9;this[_0x5d6f83(0x1db)](),this[_0x5d6f83(0x206)](),this[_0x5d6f83(0x297)](),TouchInput[_0x5d6f83(0x2e9)](),Input[_0x5d6f83(0x2e9)]();},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x26e)]=function(){const _0x469a6d=_0x13d2b9;Scene_Item[_0x469a6d(0x1ae)][_0x469a6d(0x26e)][_0x469a6d(0x1c9)](this);if($gameSystem['_craftingCommonEventScene'])return;$gameTemp[_0x469a6d(0x2f3)]();},Scene_ItemCrafting['prototype'][_0x13d2b9(0x15c)]=function(){const _0x340303=_0x13d2b9;if(!SceneManager[_0x340303(0x1ce)]())return;const _0x175c6d=VisuMZ[_0x340303(0x24e)][_0x340303(0x1f0)][_0x340303(0x2c0)];_0x175c6d[_0x340303(0x305)]&&$gameSwitches[_0x340303(0x1e2)](_0x175c6d[_0x340303(0x305)],![]);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x247)]=function(){const _0x431e8b=_0x13d2b9;if(!SceneManager[_0x431e8b(0x1ce)]())return;const _0x319c4d=VisuMZ[_0x431e8b(0x24e)][_0x431e8b(0x1f0)][_0x431e8b(0x2c0)];_0x319c4d['SwitchCraft']&&$gameSwitches['setValue'](_0x319c4d['SwitchCraft'],!![]);},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x2c5)]=function(){const _0x580e12=_0x13d2b9;if(!Imported['VisuMZ_2_ShopCommonEvents'])return![];const _0x1ae8dc=this[_0x580e12(0x221)]?this['_item'][_0x580e12(0x1ed)]||'':'',_0x1746d8=VisuMZ[_0x580e12(0x24e)]['RegExp'];if(_0x1ae8dc[_0x580e12(0x276)](_0x1746d8['CraftEventOnce'])&&!$gameSystem[_0x580e12(0x1a9)](this['_item'])&&this[_0x580e12(0x288)](!![]))return!![];else{if(_0x1ae8dc[_0x580e12(0x276)](_0x1746d8[_0x580e12(0x317)])&&this[_0x580e12(0x288)](![]))return!![];}return![];},Scene_ItemCrafting[_0x13d2b9(0x1ae)][_0x13d2b9(0x288)]=function(_0x5d9fce){const _0x5ce61e=_0x13d2b9,_0x3b0a1d=this[_0x5ce61e(0x221)]?this['_item']['note']:'',_0x592d92=VisuMZ[_0x5ce61e(0x24e)]['RegExp'],_0x3c29b5=_0x5d9fce?_0x5ce61e(0x261):'CraftRepeat';if(_0x3b0a1d[_0x5ce61e(0x276)](_0x592d92[_0x3c29b5+_0x5ce61e(0x2f1)])){const _0x123f32=RegExp['$1'][_0x5ce61e(0x1b4)](',')[_0x5ce61e(0x364)](_0x582467=>Number(_0x582467));for(const _0x5492df of _0x123f32){if($gameSwitches['value'](_0x5492df)===![])return![];}}if(_0x3b0a1d[_0x5ce61e(0x276)](_0x592d92[_0x3c29b5+'AnySw'])){const _0x3f858b=RegExp['$1'][_0x5ce61e(0x1b4)](',')['map'](_0x2e0319=>Number(_0x2e0319));for(const _0x564eef of _0x3f858b){if($gameSwitches[_0x5ce61e(0x193)](_0x564eef)===!![])return!![];}return![];}return!![];},Scene_ItemCrafting['prototype'][_0x13d2b9(0x2a6)]=function(){const _0x533e9a=_0x13d2b9,_0x2a95be=this[_0x533e9a(0x221)]?this['_item'][_0x533e9a(0x1ed)]:'',_0x49d481=VisuMZ[_0x533e9a(0x24e)][_0x533e9a(0x295)];let _0xd1cec9=0x0;if(this['meetsCraftingCommonEventSwitches'](!![])&&_0x2a95be['match'](_0x49d481[_0x533e9a(0x1bc)])&&!$gameSystem[_0x533e9a(0x1a9)](this[_0x533e9a(0x221)]))_0xd1cec9=Number(RegExp['$1'])||0x1,$gameSystem['registerCraftingEvent'](this[_0x533e9a(0x221)]);else this[_0x533e9a(0x288)](![])&&_0x2a95be['match'](_0x49d481[_0x533e9a(0x317)])&&(_0xd1cec9=Number(RegExp['$1'])||0x1);if(_0xd1cec9<=0x0){this['returnBackToItemWindow']();return;}$gameSystem[_0x533e9a(0x1c1)]=!![],$gameTemp['reserveCommonEvent'](_0xd1cec9),SceneManager[_0x533e9a(0x1f6)](Scene_Map);},VisuMZ['ItemCraftingSys'][_0x13d2b9(0x1e4)]=Window_MenuCommand['prototype'][_0x13d2b9(0x29d)],Window_MenuCommand[_0x13d2b9(0x1ae)][_0x13d2b9(0x29d)]=function(){const _0x456c82=_0x13d2b9;VisuMZ[_0x456c82(0x24e)][_0x456c82(0x1e4)][_0x456c82(0x1c9)](this),this[_0x456c82(0x2fb)]();},Window_MenuCommand[_0x13d2b9(0x1ae)]['addItemCraftingCommand']=function(){const _0x128f52=_0x13d2b9;if(!this[_0x128f52(0x27f)]())return;if(!this[_0x128f52(0x24a)]())return;const _0x5bc39e=TextManager[_0x128f52(0x2e4)],_0xcb5e48=this[_0x128f52(0x2fd)]();this['addCommand'](_0x5bc39e,_0x128f52(0x318),_0xcb5e48);},Window_MenuCommand['prototype'][_0x13d2b9(0x27f)]=function(){const _0x305ca5=_0x13d2b9;return Imported[_0x305ca5(0x15f)]?![]:!![];},Window_MenuCommand['prototype'][_0x13d2b9(0x24a)]=function(){const _0x5bf5bd=_0x13d2b9;return $gameSystem[_0x5bf5bd(0x363)]();},Window_MenuCommand[_0x13d2b9(0x1ae)]['isItemCraftingCommandEnabled']=function(){const _0x3289f6=_0x13d2b9;if(DataManager[_0x3289f6(0x202)]()[_0x3289f6(0x27c)]<=0x0)return![];return $gameSystem['isMainMenuItemCraftingEnabled']();},VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x326)]=Window_ItemCategory['prototype']['makeCommandList'],Window_ItemCategory[_0x13d2b9(0x1ae)][_0x13d2b9(0x31c)]=function(){const _0x18b638=_0x13d2b9;if(SceneManager[_0x18b638(0x1ce)]()){this[_0x18b638(0x1f1)]();if(this['_list'][_0x18b638(0x27c)]<=0x0){this[_0x18b638(0x2a4)](),SceneManager[_0x18b638(0x331)][_0x18b638(0x330)]();return;}this[_0x18b638(0x23f)]();let _0xbda03=this['index']();if(this[_0x18b638(0x18f)]){const _0x1e9db2=this[_0x18b638(0x340)](this[_0x18b638(0x18f)]);if(_0x1e9db2>=0x0)_0xbda03=_0x1e9db2;}_0xbda03=_0xbda03>=this['_list']['length']?0x0:_0xbda03,this[_0x18b638(0x1a8)](_0xbda03);}else VisuMZ[_0x18b638(0x24e)][_0x18b638(0x326)][_0x18b638(0x1c9)](this);},Window_ItemCategory[_0x13d2b9(0x1ae)][_0x13d2b9(0x23f)]=function(){const _0x5e1ef5=_0x13d2b9,_0x16ad21=Window_ItemCategory[_0x5e1ef5(0x2be)],_0x4cc7d3=DataManager['currentCraftableItems']()[_0x5e1ef5(0x195)](),_0x101816=[];for(const _0x296c19 of _0x16ad21){this['_category']=_0x296c19[_0x5e1ef5(0x20f)];for(const _0x3831e5 of _0x4cc7d3){Window_ItemList[_0x5e1ef5(0x1ae)][_0x5e1ef5(0x18d)][_0x5e1ef5(0x1c9)](this,_0x3831e5)&&_0x101816[_0x5e1ef5(0x1b3)](_0x3831e5);}}this[_0x5e1ef5(0x23a)]=null;for(const _0x2f0470 of _0x101816){_0x4cc7d3['remove'](_0x2f0470);}_0x4cc7d3[_0x5e1ef5(0x27c)]>0x0&&this[_0x5e1ef5(0x2a4)](),this[_0x5e1ef5(0x19e)]=_0x4cc7d3;},Window_ItemCategory[_0x13d2b9(0x1ae)][_0x13d2b9(0x2a4)]=function(){const _0x919d5e=_0x13d2b9,_0x3a4744=VisuMZ['ItemCraftingSys'][_0x919d5e(0x1f0)]['General'];let _0x4b1908=_0x3a4744['Uncategorized']||_0x919d5e(0x272),_0x30c52e=_0x3a4744[_0x919d5e(0x23e)]||0xa0;_0x4b1908=_0x919d5e(0x201)[_0x919d5e(0x220)](_0x30c52e,_0x4b1908),this[_0x919d5e(0x16d)](_0x4b1908,_0x919d5e(0x248),!![],_0x919d5e(0x302));},VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x2c6)]=Window_ItemCategory[_0x13d2b9(0x1ae)]['addItemCategory'],Window_ItemCategory[_0x13d2b9(0x1ae)][_0x13d2b9(0x2c2)]=function(_0x55a70b){const _0x2736c0=_0x13d2b9;if(SceneManager['isSceneItemCrafting']()&&!this['isItemCraftingCategoryValid'](_0x55a70b))return;VisuMZ[_0x2736c0(0x24e)][_0x2736c0(0x2c6)][_0x2736c0(0x1c9)](this,_0x55a70b);},Window_ItemCategory[_0x13d2b9(0x1ae)][_0x13d2b9(0x1d2)]=function(_0x50e2fb){const _0x3cc9bf=_0x13d2b9,_0x440169=DataManager['currentCraftableItems'](),_0x177437=_0x50e2fb[_0x3cc9bf(0x20f)],_0x57f108=_0x50e2fb['Icon'];this['_category']=_0x177437;for(const _0x2e87cb of _0x440169){if(!_0x2e87cb)continue;if(Window_ItemList[_0x3cc9bf(0x1ae)][_0x3cc9bf(0x18d)][_0x3cc9bf(0x1c9)](this,_0x2e87cb))return this[_0x3cc9bf(0x23a)]=null,!![];}return this[_0x3cc9bf(0x23a)]=null,![];},VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x194)]=Window_ItemCategory['prototype'][_0x13d2b9(0x28b)],Window_ItemCategory['prototype'][_0x13d2b9(0x28b)]=function(){const _0x24c7ab=_0x13d2b9;if(SceneManager[_0x24c7ab(0x1ce)]())return!![];return VisuMZ[_0x24c7ab(0x24e)][_0x24c7ab(0x194)][_0x24c7ab(0x1c9)](this);},VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x284)]=Window_Selectable[_0x13d2b9(0x1ae)][_0x13d2b9(0x1a8)],Window_Selectable[_0x13d2b9(0x1ae)][_0x13d2b9(0x1a8)]=function(_0x55d2a4){const _0x445cb9=_0x13d2b9;VisuMZ['ItemCraftingSys'][_0x445cb9(0x284)][_0x445cb9(0x1c9)](this,_0x55d2a4),this['constructor']===Window_ItemCategory&&SceneManager[_0x445cb9(0x1ce)]()&&_0x55d2a4>=0x0&&(this['_lastCraftingExt']=this[_0x445cb9(0x243)]()||'');};function _0x20f1(_0x3b0ed4,_0x4a4bd0){const _0x2d73a1=_0x2d73();return _0x20f1=function(_0x20f199,_0x212abe){_0x20f199=_0x20f199-0x144;let _0x38e6d3=_0x2d73a1[_0x20f199];return _0x38e6d3;},_0x20f1(_0x3b0ed4,_0x4a4bd0);}function Window_ItemCraftingList(){const _0xf91f71=_0x13d2b9;this[_0xf91f71(0x322)](...arguments);}Window_ItemCraftingList['prototype']=Object[_0x13d2b9(0x18a)](Window_ItemList[_0x13d2b9(0x1ae)]),Window_ItemCraftingList['prototype']['constructor']=Window_ItemCraftingList,Window_ItemCraftingList[_0x13d2b9(0x2a1)]=VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x1f0)][_0x13d2b9(0x294)][_0x13d2b9(0x1cc)],Window_ItemCraftingList[_0x13d2b9(0x34c)]=VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x1f0)][_0x13d2b9(0x1ff)][_0x13d2b9(0x2f9)],Window_ItemCraftingList[_0x13d2b9(0x1ae)]['initialize']=function(_0x4e6fa4){const _0x522447=_0x13d2b9;Window_ItemList[_0x522447(0x1ae)][_0x522447(0x322)][_0x522447(0x1c9)](this,_0x4e6fa4),this[_0x522447(0x2d4)]();},Window_ItemCraftingList['prototype'][_0x13d2b9(0x359)]=function(){return 0x1;},Window_ItemCraftingList[_0x13d2b9(0x1ae)][_0x13d2b9(0x2da)]=function(){const _0x4eea91=_0x13d2b9;return Window_Scrollable[_0x4eea91(0x1ae)][_0x4eea91(0x2da)][_0x4eea91(0x1c9)](this)*0x3+0x8;},Window_ItemCraftingList[_0x13d2b9(0x1ae)][_0x13d2b9(0x2c7)]=function(_0x22f92b){return!![];},Window_ItemCraftingList[_0x13d2b9(0x1ae)]['makeItemList']=function(){const _0x581ecc=_0x13d2b9;this['_data']=DataManager[_0x581ecc(0x202)]()[_0x581ecc(0x28e)](_0x26efff=>this[_0x581ecc(0x18d)](_0x26efff));const _0x14bf25=this[_0x581ecc(0x30d)]['map'](_0x11b1ca=>DataManager[_0x581ecc(0x327)](_0x11b1ca)[_0x581ecc(0x27c)]);this[_0x581ecc(0x21b)]=Math['max'](..._0x14bf25)+0x1;},Window_ItemCraftingList[_0x13d2b9(0x1ae)][_0x13d2b9(0x18d)]=function(_0xe08319){const _0x2ab0d4=_0x13d2b9;if(this[_0x2ab0d4(0x23a)]==='ItemCraftingNoCategory'){const _0x303fb8=SceneManager[_0x2ab0d4(0x331)];if(_0x303fb8&&_0x303fb8['_categoryWindow']&&_0x303fb8[_0x2ab0d4(0x33e)][_0x2ab0d4(0x19e)])return _0x303fb8[_0x2ab0d4(0x33e)]['_nonCategoryItemCraftingItems'][_0x2ab0d4(0x18d)](_0xe08319);}return Window_ItemList[_0x2ab0d4(0x1ae)]['includes']['call'](this,_0xe08319);},Window_ItemCraftingList[_0x13d2b9(0x1ae)]['selectLast']=function(){},Window_ItemCraftingList[_0x13d2b9(0x1ae)]['drawItem']=function(_0x5b7208){const _0x28b8e7=_0x13d2b9,_0xcbd1a6=this['itemAt'](_0x5b7208);if(!_0xcbd1a6)return;const _0x579e7e=this[_0x28b8e7(0x323)](_0x5b7208);this['resetFontSettings'](),this[_0x28b8e7(0x1b2)](_0x579e7e,0x2),this[_0x28b8e7(0x2a7)](_0x5b7208,_0xcbd1a6,_0x579e7e),this[_0x28b8e7(0x1de)](_0xcbd1a6,_0x579e7e),this[_0x28b8e7(0x1d9)](_0xcbd1a6,_0x579e7e),this[_0x28b8e7(0x17b)](_0xcbd1a6,_0x579e7e);},Window_ItemCraftingList[_0x13d2b9(0x1ae)][_0x13d2b9(0x1b2)]=function(_0x3ea756,_0x1116e0){const _0x1bd75e=_0x13d2b9;_0x1116e0=_0x1116e0||0x1,this[_0x1bd75e(0x229)](![]);const _0x32d585=ColorManager[_0x1bd75e(0x292)](),_0x212780=ColorManager['dimColor2'](),_0x55d900=_0x3ea756[_0x1bd75e(0x36e)]/0x2,_0x4fea0b=this[_0x1bd75e(0x290)]();while(_0x1116e0--){this[_0x1bd75e(0x17c)][_0x1bd75e(0x2a3)](_0x3ea756['x'],_0x3ea756['y'],_0x55d900,_0x4fea0b,_0x212780,_0x32d585),this['contents'][_0x1bd75e(0x2a3)](_0x3ea756['x']+_0x55d900,_0x3ea756['y'],_0x55d900,_0x4fea0b,_0x32d585,_0x212780);}this[_0x1bd75e(0x229)](!![]);},Window_Base[_0x13d2b9(0x1ae)][_0x13d2b9(0x1d9)]=function(_0x24f6a1,_0x5f3aae){const _0x161291=_0x13d2b9;let _0x13bff9=_0x24f6a1[_0x161291(0x2d1)],_0x3c2212=_0x5f3aae[_0x161291(0x263)]+this['itemPadding']()*0x2,_0x168555=_0x5f3aae['y'],_0x49eab1=_0x5f3aae[_0x161291(0x36e)]-_0x3c2212-this['itemPadding']()-ImageManager[_0x161291(0x204)];DataManager[_0x161291(0x2ff)](_0x24f6a1)&&(_0x13bff9=VisuMZ[_0x161291(0x24e)][_0x161291(0x163)](_0x24f6a1),this['contents'][_0x161291(0x23d)]=Window_ItemCraftingList['maskItalics']),this[_0x161291(0x32a)](_0x13bff9,_0x3c2212,_0x168555,_0x49eab1,_0x161291(0x203)),this['contents'][_0x161291(0x23d)]=![];},VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x163)]=function(_0x3583b5){const _0x180098=_0x13d2b9;DataManager['getProxyItem']&&(_0x3583b5=DataManager[_0x180098(0x360)](_0x3583b5));if(_0x3583b5['note'][_0x180098(0x276)](VisuMZ[_0x180098(0x24e)][_0x180098(0x295)]['MaskText']))return String(RegExp['$1']);else{const _0x22cbd0=TextManager['itemCraftingMask'];return Array(_0x3583b5['name'][_0x180098(0x27c)]+0x1)[_0x180098(0x25d)](_0x22cbd0);}},Window_ItemCraftingList['prototype'][_0x13d2b9(0x2a7)]=function(_0x350566,_0x1712c7,_0x609eee){const _0x28c423=_0x13d2b9,_0x33bb8d=VisuMZ['ItemCraftingSys'][_0x28c423(0x295)],_0x4e14f2=_0x1712c7[_0x28c423(0x1ed)];let _0x1c45b5='';if(_0x4e14f2[_0x28c423(0x276)](_0x33bb8d[_0x28c423(0x192)]))_0x1c45b5=String(RegExp['$1']);else _0x4e14f2[_0x28c423(0x276)](_0x33bb8d[_0x28c423(0x2dd)])&&(_0x1c45b5=String(RegExp['$1']));if(_0x1c45b5){const _0xf79cca=ImageManager[_0x28c423(0x2b7)](_0x1c45b5);_0xf79cca['addLoadListener'](this[_0x28c423(0x2b8)][_0x28c423(0x20b)](this,_0x350566,_0xf79cca));}else this[_0x28c423(0x268)](_0x1712c7,_0x609eee);},Window_ItemCraftingList['prototype'][_0x13d2b9(0x2b8)]=function(_0x19c20d,_0x5b792){const _0x10732b=_0x13d2b9,_0x52851c=this['itemRectWithPadding'](_0x19c20d);let _0x34f4c1=_0x52851c['x']+this[_0x10732b(0x1da)](),_0x3d7748=_0x52851c['y']+0x4,_0x105597=_0x52851c[_0x10732b(0x36e)]-this[_0x10732b(0x1da)]()*0x2,_0x47143d=_0x52851c[_0x10732b(0x263)]-0x8,_0x481007=Math[_0x10732b(0x1f3)](_0x105597,_0x47143d);const _0x24f4ae=_0x481007/_0x5b792[_0x10732b(0x36e)],_0x4f6dec=_0x481007/_0x5b792[_0x10732b(0x263)],_0x4095c7=Math[_0x10732b(0x1f3)](_0x24f4ae,_0x4f6dec,0x1);let _0x38ada6=Math[_0x10732b(0x214)](_0x5b792[_0x10732b(0x36e)]*_0x4095c7),_0x3426d8=Math[_0x10732b(0x214)](_0x5b792['height']*_0x4095c7);_0x34f4c1+=Math['round']((_0x481007-_0x38ada6)/0x2),_0x3d7748+=Math[_0x10732b(0x214)]((_0x481007-_0x3426d8)/0x2);const _0x560f1b=_0x5b792['width'],_0x3f8aad=_0x5b792[_0x10732b(0x263)];this[_0x10732b(0x17c)][_0x10732b(0x35b)][_0x10732b(0x28a)]=!![],this[_0x10732b(0x17c)]['blt'](_0x5b792,0x0,0x0,_0x560f1b,_0x3f8aad,_0x34f4c1,_0x3d7748,_0x38ada6,_0x3426d8),this[_0x10732b(0x17c)][_0x10732b(0x35b)][_0x10732b(0x28a)]=!![];},Window_ItemCraftingList['prototype'][_0x13d2b9(0x268)]=function(_0xb7a1f8,_0x5c6cca){const _0x32a6f6=_0x13d2b9,_0x196dc4=_0xb7a1f8[_0x32a6f6(0x1af)];let _0x101a49=_0x5c6cca['x']+this[_0x32a6f6(0x1da)](),_0x52359e=_0x5c6cca['y']+0x4,_0x5d07d8=_0x5c6cca[_0x32a6f6(0x36e)]-this[_0x32a6f6(0x1da)]()*0x2,_0x1c2a97=_0x5c6cca[_0x32a6f6(0x263)]-0x8,_0x108888=Math[_0x32a6f6(0x1f3)](_0x5d07d8,_0x1c2a97);_0x108888=Math[_0x32a6f6(0x27a)](_0x108888/ImageManager[_0x32a6f6(0x204)])*ImageManager[_0x32a6f6(0x204)],_0x52359e+=(_0x1c2a97-_0x108888)/0x2;const _0x2f91be=ImageManager[_0x32a6f6(0x1e0)](_0x32a6f6(0x17d)),_0x3df672=ImageManager[_0x32a6f6(0x204)],_0x3d275a=ImageManager[_0x32a6f6(0x262)],_0x4892e6=_0x196dc4%0x10*_0x3df672,_0x41083c=Math['floor'](_0x196dc4/0x10)*_0x3d275a;this[_0x32a6f6(0x17c)]['_context'][_0x32a6f6(0x28a)]=![],this[_0x32a6f6(0x17c)][_0x32a6f6(0x313)](_0x2f91be,_0x4892e6,_0x41083c,_0x3df672,_0x3d275a,_0x101a49,_0x52359e,_0x108888,_0x108888),this[_0x32a6f6(0x17c)]['_context']['imageSmoothingEnabled']=!![];},Window_ItemCraftingList[_0x13d2b9(0x1ae)]['drawCraftedIcon']=function(_0x142b6e,_0x9ec27d){const _0x4de2ea=_0x13d2b9;if(!$gameSystem[_0x4de2ea(0x2c3)](_0x142b6e))return;const _0x32f8ec=ImageManager[_0x4de2ea(0x33d)];let _0x2cf6d0=_0x9ec27d['x']+_0x9ec27d[_0x4de2ea(0x36e)]-ImageManager[_0x4de2ea(0x204)],_0x4efb5e=_0x9ec27d['y']+0x2;this[_0x4de2ea(0x196)](_0x32f8ec,_0x2cf6d0,_0x4efb5e);},Window_ItemCraftingList[_0x13d2b9(0x1ae)][_0x13d2b9(0x17b)]=function(_0x47eb7d,_0x5e6362){const _0x1bcd22=_0x13d2b9,_0x2ad183=DataManager[_0x1bcd22(0x327)](_0x47eb7d);let _0x417e4d=_0x5e6362[_0x1bcd22(0x263)]+this[_0x1bcd22(0x1da)]()*0x2,_0x190081=_0x5e6362['y']+Math['round'](this[_0x1bcd22(0x290)]()*1.2),_0x5844ea=_0x5e6362[_0x1bcd22(0x36e)]-_0x417e4d-this[_0x1bcd22(0x1da)](),_0x5bb374=Math[_0x1bcd22(0x27a)](_0x5844ea/this['_maxIngredientsSize']),_0x56eeff=!![];for(const _0x531541 of _0x2ad183){if(!_0x56eeff){let _0x369460=TextManager[_0x1bcd22(0x1c4)],_0x3fcecf=_0x5e6362['y']+(_0x5e6362[_0x1bcd22(0x263)]-this[_0x1bcd22(0x290)]()*1.5);this['drawText'](_0x369460,_0x417e4d,_0x3fcecf,_0x5bb374,_0x1bcd22(0x2f5));}_0x417e4d+=_0x5bb374;const _0x56f7bf=_0x531541[0x0],_0x3800d5=_0x531541[0x1],_0x596f62=_0x56f7bf===_0x1bcd22(0x303)?$gameParty['gold']():$gameParty['numItems'](_0x56f7bf);if(_0x56f7bf===_0x1bcd22(0x303))this[_0x1bcd22(0x300)](_0x3800d5,_0x596f62,_0x417e4d,_0x190081,_0x5bb374);else typeof _0x56f7bf===_0x1bcd22(0x27e)&&_0x56f7bf['match'](/CATEGORY/i)?this['drawIngredientCategory'](_0x56f7bf,_0x3800d5,_0x417e4d,_0x190081,_0x5bb374):this[_0x1bcd22(0x22f)](_0x56f7bf,_0x3800d5,_0x596f62,_0x417e4d,_0x190081,_0x5bb374);this['resetFontSettings'](),_0x56eeff=![];}},Window_ItemCraftingList['prototype'][_0x13d2b9(0x300)]=function(_0x292d0a,_0x1f60e4,_0x39e941,_0x58fbe4,_0x36c8cc){const _0x5c0347=_0x13d2b9;if(Imported[_0x5c0347(0x191)]){let _0x17ca8b=_0x39e941-Math[_0x5c0347(0x214)](ImageManager[_0x5c0347(0x204)]/0x2),_0x38f405=_0x58fbe4+Math[_0x5c0347(0x214)]((this['lineHeight']()-ImageManager[_0x5c0347(0x262)])/0x2);const _0x1b6c66=VisuMZ[_0x5c0347(0x1ca)]?VisuMZ['CoreEngine'][_0x5c0347(0x1f0)]['Gold']['GoldIcon']:0x0;this[_0x5c0347(0x196)](_0x1b6c66,_0x17ca8b,_0x38f405);}else{let _0x568fc7=_0x39e941-Math[_0x5c0347(0x214)](_0x36c8cc/0x2),_0x1d44da=_0x58fbe4+Math['round']((this[_0x5c0347(0x290)]()-ImageManager[_0x5c0347(0x262)])/0x2);this['changeTextColor'](ColorManager[_0x5c0347(0x271)]()),this[_0x5c0347(0x151)](),this[_0x5c0347(0x32a)](TextManager[_0x5c0347(0x1cb)],_0x568fc7,_0x1d44da,_0x36c8cc,_0x5c0347(0x2f5)),this[_0x5c0347(0x1a0)]();}let _0xe1af83=_0x39e941-Math[_0x5c0347(0x214)](_0x36c8cc/0x2),_0x47d0d9=_0x58fbe4+this[_0x5c0347(0x290)]();const _0x3ad264=VisuMZ[_0x5c0347(0x1fe)]['Settings'][_0x5c0347(0x154)]['ItemQuantityFmt'];let _0x1d810c=_0x3ad264[_0x5c0347(0x220)](_0x292d0a);_0x292d0a>_0x1f60e4&&this[_0x5c0347(0x281)](ColorManager[_0x5c0347(0x217)]()),this[_0x5c0347(0x17c)][_0x5c0347(0x265)]=Window_ItemCraftingList[_0x5c0347(0x2a1)],this[_0x5c0347(0x32a)](_0x1d810c,_0xe1af83,_0x47d0d9,_0x36c8cc,_0x5c0347(0x2f5));},Window_ItemCraftingList[_0x13d2b9(0x1ae)]['drawIngredientCategory']=function(_0x58faa3,_0x35b484,_0x57d3ea,_0xdd55a7,_0x26d2c9){const _0x36680f=_0x13d2b9,_0x41279e=VisuMZ[_0x36680f(0x24e)][_0x36680f(0x1f0)][_0x36680f(0x2c0)];let _0xaf1f12=_0x57d3ea-Math['round'](ImageManager[_0x36680f(0x204)]/0x2),_0x38beb6=_0xdd55a7+Math['round']((this['lineHeight']()-ImageManager[_0x36680f(0x262)])/0x2);this['drawIcon'](_0x41279e['CategoryIcon'],_0xaf1f12,_0x38beb6),_0x58faa3[_0x36680f(0x276)](/CATEGORY: (.*)/i);const _0x24d39b=String(RegExp['$1'])['trim']();let _0x5910ea=_0x57d3ea-Math[_0x36680f(0x214)](_0x26d2c9/0x2),_0x3040bb=_0xdd55a7;this['contents'][_0x36680f(0x265)]=Window_ItemCraftingList[_0x36680f(0x2a1)],this[_0x36680f(0x32a)](_0x24d39b,_0x5910ea,_0x3040bb,_0x26d2c9,_0x36680f(0x2f5));let _0x279783=_0x57d3ea-Math[_0x36680f(0x214)](_0x26d2c9/0x2),_0x378afb=_0xdd55a7+this[_0x36680f(0x290)]();const _0x76b24e=VisuMZ['ItemsEquipsCore'][_0x36680f(0x1f0)][_0x36680f(0x154)][_0x36680f(0x1fa)];let _0x11ab0f=_0x76b24e[_0x36680f(0x220)](_0x35b484);this[_0x36680f(0x17c)][_0x36680f(0x265)]=Window_ItemCraftingList[_0x36680f(0x2a1)],this['drawText'](_0x11ab0f,_0x279783,_0x378afb,_0x26d2c9,_0x36680f(0x2f5));},Window_ItemCraftingList[_0x13d2b9(0x1ae)]['drawIngredientItem']=function(_0x1a7cfa,_0x4c6298,_0x48186a,_0x5731c3,_0x590205,_0x197b83){const _0x2e1ec9=_0x13d2b9;let _0xfc931b=_0x5731c3-Math['round'](ImageManager['iconWidth']/0x2),_0x263015=_0x590205+Math['round']((this['lineHeight']()-ImageManager[_0x2e1ec9(0x262)])/0x2);this[_0x2e1ec9(0x196)](_0x1a7cfa[_0x2e1ec9(0x1af)],_0xfc931b,_0x263015);let _0x27727c=_0x5731c3-Math['round'](_0x197b83/0x2),_0x2e528a=_0x590205+this[_0x2e1ec9(0x290)]();const _0x22aaab=VisuMZ[_0x2e1ec9(0x1fe)]['Settings'][_0x2e1ec9(0x154)][_0x2e1ec9(0x1fa)];let _0x466693=_0x22aaab[_0x2e1ec9(0x220)](_0x2e1ec9(0x238)[_0x2e1ec9(0x220)](_0x48186a,_0x4c6298));_0x4c6298>_0x48186a&&this[_0x2e1ec9(0x281)](ColorManager[_0x2e1ec9(0x217)]()),this['contents'][_0x2e1ec9(0x265)]=Window_ItemCraftingList['quantityFontSize'],this[_0x2e1ec9(0x32a)](_0x466693,_0x27727c,_0x2e528a,_0x197b83,_0x2e1ec9(0x2f5));},Window_ItemCraftingList[_0x13d2b9(0x1ae)]['createTooltipWindow']=function(){const _0x1e6540=_0x13d2b9;if(!VisuMZ[_0x1e6540(0x24e)][_0x1e6540(0x1f0)][_0x1e6540(0x294)]['ToolTips'])return;const _0x968d8c=new Rectangle(0x0,0x0,Graphics[_0x1e6540(0x18b)],Window_Base[_0x1e6540(0x1ae)][_0x1e6540(0x15e)](0x1));this[_0x1e6540(0x2df)]=new Window_ItemCraftingTooltip(_0x968d8c),this['addChild'](this['_tooltipWindow']);},Window_ItemCraftingList[_0x13d2b9(0x1ae)][_0x13d2b9(0x14c)]=function(){const _0x1eb509=_0x13d2b9;Window_ItemList[_0x1eb509(0x1ae)][_0x1eb509(0x14c)][_0x1eb509(0x1c9)](this),this[_0x1eb509(0x1df)]();},Window_ItemCraftingList['prototype'][_0x13d2b9(0x1df)]=function(){const _0xd725f2=_0x13d2b9;if(!this[_0xd725f2(0x2df)])return;this[_0xd725f2(0x1be)]()?this[_0xd725f2(0x26c)]():this[_0xd725f2(0x2df)][_0xd725f2(0x17a)]('');const _0x2b4709=new Point(TouchInput['x'],TouchInput['y']),_0x2d7558=this[_0xd725f2(0x337)][_0xd725f2(0x179)](_0x2b4709);this['_tooltipWindow']['x']=_0x2d7558['x']-this[_0xd725f2(0x2df)][_0xd725f2(0x36e)]/0x2,this[_0xd725f2(0x2df)]['y']=_0x2d7558['y']-this[_0xd725f2(0x2df)][_0xd725f2(0x263)];},Window_ItemCraftingList[_0x13d2b9(0x1ae)][_0x13d2b9(0x1be)]=function(){const _0x555533=_0x13d2b9;if(!this[_0x555533(0x266)])return![];if(!this[_0x555533(0x14b)]())return![];if(!this['isTouchedInsideFrame']())return![];if(this[_0x555533(0x2bd)]()!==this[_0x555533(0x307)]())return![];return!![];},Window_ItemCraftingList[_0x13d2b9(0x1ae)][_0x13d2b9(0x26c)]=function(){const _0x229623=_0x13d2b9,_0x1c5f4b=this[_0x229623(0x323)](this[_0x229623(0x307)]());$gameTemp['_bypassProxy']=!![];const _0x5927aa=DataManager[_0x229623(0x327)](this[_0x229623(0x14b)]());$gameTemp['_bypassProxy']=![];const _0x2d16a7=new Point(TouchInput['x'],TouchInput['y']),_0x223136=this['worldTransform']['applyInverse'](_0x2d16a7);let _0x2691eb=_0x1c5f4b[_0x229623(0x263)]+this[_0x229623(0x1da)]()*0x2,_0x3599df=_0x1c5f4b['y']+this[_0x229623(0x290)](),_0x5e915f=_0x1c5f4b[_0x229623(0x36e)]-_0x2691eb-this[_0x229623(0x1da)](),_0x11e025=Math[_0x229623(0x27a)](_0x5e915f/this[_0x229623(0x21b)]);for(const _0x279ab4 of _0x5927aa){_0x2691eb+=_0x11e025;const _0x1d1cd9=new Rectangle(_0x2691eb-ImageManager['iconWidth'],0x0,ImageManager[_0x229623(0x204)]*0x2,Graphics['boxHeight']);if(_0x1d1cd9['contains'](_0x223136['x'],_0x223136['y'])){let _0xe62ea6=_0x279ab4[0x0],_0x433432='';if(_0xe62ea6==='gold')_0x433432=TextManager[_0x229623(0x1cb)];else typeof _0xe62ea6==='string'&&_0xe62ea6[_0x229623(0x276)](/CATEGORY/i)?(_0xe62ea6[_0x229623(0x276)](/CATEGORY: (.*)/i),_0x433432=String(RegExp['$1'])[_0x229623(0x1b7)]()):_0x433432=_0xe62ea6[_0x229623(0x2d1)];this['_tooltipWindow'][_0x229623(0x17a)](_0x433432[_0x229623(0x1b7)]());return;}}this[_0x229623(0x2df)]['setText']('');},Window_ItemCraftingList[_0x13d2b9(0x1ae)][_0x13d2b9(0x2ac)]=function(){const _0x256e7a=_0x13d2b9,_0x26b69c=this[_0x256e7a(0x14b)]()&&DataManager[_0x256e7a(0x2ff)](this[_0x256e7a(0x14b)]())?null:this['item']();this['setHelpWindowItem'](_0x26b69c),this[_0x256e7a(0x315)]&&this['_statusWindow'][_0x256e7a(0x190)]===Window_ShopStatus&&this['_statusWindow'][_0x256e7a(0x332)](_0x26b69c);};function Window_ItemCraftingTooltip(){const _0x580021=_0x13d2b9;this[_0x580021(0x322)](...arguments);}Window_ItemCraftingTooltip[_0x13d2b9(0x1ae)]=Object[_0x13d2b9(0x18a)](Window_Base['prototype']),Window_ItemCraftingTooltip[_0x13d2b9(0x1ae)]['constructor']=Window_ItemCraftingTooltip,Window_ItemCraftingTooltip['tooltipSkin']=VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x1f0)][_0x13d2b9(0x294)][_0x13d2b9(0x2d1)],Window_ItemCraftingTooltip[_0x13d2b9(0x1ae)][_0x13d2b9(0x322)]=function(_0x5aaece){const _0x53d648=_0x13d2b9;Window_Base[_0x53d648(0x1ae)]['initialize'][_0x53d648(0x1c9)](this,_0x5aaece),this[_0x53d648(0x2b9)](this[_0x53d648(0x252)]()?0x0:0x2),this[_0x53d648(0x17a)]('');},Window_ItemCraftingTooltip['prototype']['hasCustomWindowSkin']=function(){return Window_ItemCraftingTooltip['tooltipSkin']!=='';},Window_ItemCraftingTooltip[_0x13d2b9(0x1ae)][_0x13d2b9(0x169)]=function(){const _0x2e50ff=_0x13d2b9;Window_ItemCraftingTooltip['tooltipSkin']!==''?this[_0x2e50ff(0x153)]=ImageManager[_0x2e50ff(0x1e0)](Window_ItemCraftingTooltip[_0x2e50ff(0x310)]):Window_Base[_0x2e50ff(0x1ae)][_0x2e50ff(0x169)][_0x2e50ff(0x1c9)](this);},Window_ItemCraftingTooltip['prototype']['setText']=function(_0x1cb95e){const _0x333d1e=_0x13d2b9;this[_0x333d1e(0x14d)]!==_0x1cb95e&&(this[_0x333d1e(0x14d)]=_0x1cb95e,this[_0x333d1e(0x1ee)]());},Window_ItemCraftingTooltip['prototype'][_0x13d2b9(0x2e9)]=function(){const _0x4d2309=_0x13d2b9;this[_0x4d2309(0x17a)]('');},Window_ItemCraftingTooltip[_0x13d2b9(0x1ae)][_0x13d2b9(0x332)]=function(_0x2e01f7){const _0x329fe2=_0x13d2b9;this[_0x329fe2(0x17a)](_0x2e01f7?_0x2e01f7[_0x329fe2(0x2d1)]:'');},Window_ItemCraftingTooltip[_0x13d2b9(0x1ae)][_0x13d2b9(0x1ee)]=function(){const _0x4edd69=_0x13d2b9,_0x36f344=this[_0x4edd69(0x2cc)]();this[_0x4edd69(0x354)](),this[_0x4edd69(0x32a)](this['_text'],0x0,0x0,this[_0x4edd69(0x16b)],_0x4edd69(0x2f5));},Window_ItemCraftingTooltip[_0x13d2b9(0x1ae)][_0x13d2b9(0x354)]=function(){const _0x3c92e0=_0x13d2b9;if(this[_0x3c92e0(0x14d)]==='')this[_0x3c92e0(0x17c)][_0x3c92e0(0x2e9)](),this[_0x3c92e0(0x36e)]=0x0;else{let _0x3afe5c=this[_0x3c92e0(0x22d)](this[_0x3c92e0(0x14d)])+this[_0x3c92e0(0x1da)]()*0x4;this[_0x3c92e0(0x36e)]=_0x3afe5c+$gameSystem['windowPadding']()*0x2,this[_0x3c92e0(0x286)]();if(this['hasCustomWindowSkin']())return;const _0x15382f=ColorManager[_0x3c92e0(0x292)]();this['contents'][_0x3c92e0(0x334)](0x0,0x0,this[_0x3c92e0(0x16b)],this[_0x3c92e0(0x2b1)],_0x15382f);}};function _0x2d73(){const _0x4818b4=['Game_Party_numItems','currentExt','_number','calcWindowHeight','createIngredientSelectionList','enableCraftingSwitches','category','onNumberOk','isItemCraftingCommandVisible','hasMaxItems','startAnimation','_cache_getCraftBatchItems','ItemCraftingSys','335570hUGjPZ','_customItemCraftingSettings','buttonAssistKey2','hasCustomWindowSkin','GoldWindow_RectJS','showBatchContents','VisuMZ_3_ShopBatches','helpWindowRectItemsEquipsCore','createJS','_commandWindow','craftableWeapons','isMVAnimation','setStatusWindow','armor-%1','join','drawGoldIngredient','createItemWindowBase','contentsBack','CraftOnce','iconHeight','height','onIngredientListCancel','fontSize','active','NumWindowNet','drawBigItemIcon','isArmor','1557642rYvNsL','createCraftingItemKey','setTooltipWindowText','CustomItemCraftingSceneOpen','terminate','right','StatusBgType','systemColor','Uncategorized','908800wPZHYT','updateCraftingAnimation','OnSwitches','match','drawCurrentItemName','WarningMsg','ParseItemNotetags','floor','buttonAssistSmallIncrement','length','BgFilename1','string','addItemCraftingCommandAutomatically','in\x20order\x20for\x20VisuMZ_2_ItemCraftingSys\x20to\x20work.','changeTextColor','helpWindowRect','armors','Window_Selectable_select','drawShopBatchContentsTitle','createContents','AnySwitches','meetsCraftingCommonEventSwitches','createAnimation','imageSmoothingEnabled','needsSelection','helpWindowRectJS','initItemCraftingMainMenu','filter','loadTitle2','lineHeight','setItemSpriteOpacity','dimColor1','SnapshotOpacity','Window','RegExp','destroy','finishAnimation','\x20+\x20','Weapons','initItemCraftingEvents','goldWindowRectItemsEquipsCore','placeButtons','addOriginalCommands','changeOkButtonEnable','playCancel','ShowAnimations','quantityFontSize','getItemIdWithName','gradientFillRect','addUncategorizedItemCategory','shown','processCraftCommonEvent','drawBigItemImage','doesItemHaveOpenCategories','_ingredientIndex','_iconSprite','setItemSpritePosition','updateHelp','pop','categories','isWeapon','makeItemList','innerHeight','createItemSprite','statusWindowRect','allCraftableItems','categoryWindowRect','_alreadySelected','loadPicture','drawPicture','setBackgroundType','isTriggered','exit','Sound','hitIndex','categoryList','loseItem','General','drawIngredients','addItemCategory','isItemCrafted','weapon','itemHasCraftCommonEvent','Window_ItemCategory_addItemCategory','isEnabled','removeChild','show','opacity','allItems','baseTextRect','createAnimationIDs','scaleSprite','_goldWindow','playItemCrafting','name','drawCraftBatchContentsList','clearUserSelectedIngredients','createTooltipWindow','scale','return\x200','_craftingEvents','itemWindowRect','log','itemHeight','7mKdkci','itemRect','bigPicture','craftableArmors','_tooltipWindow','setItemWindow','_windowLayer','#%1','ShowWindows','ItemCraftingMenuCommand','GoldIcon','_helpWindow','jsGlobalCraftEffect','CheckAnySwitches','clear','_animationIDs','BypassMasks','updateAnimationSprite','BgSettings','smoothSelect','_animationPlaying','Window_ShopStatus_refresh','AllSw','_ingredientSelectTitle','clearCustomItemCraftingSettings','itemWindowRectJS','center','drawShopBatchContentsItem','craftableItems','addChild','MaskItalics','drawTextEx','addItemCraftingCommand','446428BmMobU','isItemCraftingCommandEnabled','Change','isCraftingItemMasked','drawIngredientGold','drawItemName','ItemCraftingNoCategory','gold','gainCraftBatchItems','SwitchCraft','categoryWindowRectJS','index','animationIDs','setup','NumWindowShift','getItemCraftedTimes','determineMax','_data','setFrame','refreshCursor','tooltipSkin','isCraftItemListed','hasCraftBatchItems','blt','weapons','_statusWindow','ItemWindow_RectJS','CraftEventRepeat','itemCrafting','drawShopBatchContentsRemaining','Item','314590kBslHi','makeCommandList','Enable','CraftedIcon','_itemWindow','getInputMultiButtonStrings','ParseAllNotetags','initialize','itemRectWithPadding','ShowMainMenu','ARRAYJSON','Window_ItemCategory_makeCommandList','getCraftingIngredients','items','CheckAllSwitches','drawText','toLowerCase','Items','Game_System_initialize','ConvertParams','version','popScene','_scene','setItem','setHandler','fillRect','createCustomBackgroundImages','_armorIDs','worldTransform','Net','owned','shouldDrawCraftBatchContents','isTouchOkEnabled','allCraftableWeapons','itemCraftedIcon','_categoryWindow','TurnSwitches','findExt','isMainMenuItemCraftingEnabled','IngredientList','\x20=\x20','drawMathMarks','isSceneMap','IngredientTitle','isShowNew','isSkill','concat','itemNameY','AllSwitches','maskItalics','415065xzIiLF','Parse_Notetags_CreateJS','numItems','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','opacitySpeed','isFinishedAnimating','OffSwitches','drawTooltipBackground','HelpBgType','armor','_animationSprite','goldWindowRect','maxCols','_weaponIDs','_context','Animations','onCategoryOk','_ingredientAmounts','_allCraftableItems','getProxyItem','commandItemCrafting','_categoryIndex','isMainMenuItemCraftingVisible','map','CategoryTitle','_backSprite1','itemCraftingNumberWindowOk','max','buyWindowRectItemsEquipsCore','StatusWindow_RectJS','hide','adjustSprite','buttonAssistItemListRequirement','width','STRUCT','createGoldWindow','setupSelectIngredientWindow','_animationWait','initItemCraftingSys','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_ingredientCategories','isRightInputMode','createCommandWindow','ParseArmorNotetags','isPlaytest','item','update','_text','FadeSpeed','getBackgroundOpacity','BypassSwitches','makeFontBigger','Scene_Menu_createCommandWindow','windowskin','ItemScene','buttonAssistKey1','ARRAYFUNC','commandWindowRectItemsEquipsCore','onNumberCancel','registerCommand','getCraftBatchItems','mainAreaTop','resetCraftingSwitches','ItemCraftingNumberWindow','fittingHeight','VisuMZ_1_MainMenuCore','visible','goldWindowRectJS','centerSprite','maskItemName','BgFilename2','deactivate','description','ARRAYNUM','allOfCraftBatchItemsMax','loadWindowskin','loseGold','innerWidth','category:\x20%1','addCommand','createNumberWindow','mainCommandWidth','helpAreaHeight','IngredientBridge','_allCraftableWeapons','calcCraftBatchItemsMax','selectedIngredientList','buttonAssistLargeIncrement','setupNumberWindow','remove','isPlaying','applyInverse','setText','drawCraftingIngredients','contents','IconSet','itemCraftingMask','drawCategories','createStatusWindow','anchor','all','setWindowBackgroundTypes','onIngredientListOk','SortByIDandPriority','drawCraftBatchContents','\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Arguments\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20item\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20number\x20=\x20arguments[1];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','setHelpWindow','bitmap','create','boxWidth','enabled','includes','visualGoldDisplayNoCost','_lastCraftingExt','constructor','VisuMZ_0_CoreEngine','craftPicture','value','Window_ItemCategory_needsSelection','clone','drawIcon','Owned','_itemSprite','statusWindowRectJS','EnableCustomLayout','processItemCrafting','onItemCrafted','isUseModernControls','_nonCategoryItemCraftingItems','HelpWindow_RectJS','resetFontSettings','getArmorIdWithName','addWindow','_clickHandler','buttonAssistText2','isProxyItem','onDatabaseLoaded','_numberWindow','select','hasCraftingEventOccurred','checkItemCraftingResultsValid','_craftingIngredients','Name','visualGoldDisplayAutosize','prototype','iconIndex','number','allCraftableArmors','drawFadedItemBackground','push','split','EnableMainMenu','getCustomItemCraftingSettings','trim','_ingredientsList','setBackgroundOpacity','test','isCustomLayout','CraftEventOnce','createCraftingIngredientsLists','tooltipFrameCheckRequirements','Weapon','onItemOk','_craftingCommonEventScene','itemLineRect','statusWidth','itemCraftingIngredientsBridge','getWeaponIdWithName','5mspViu','net','updateItemSpriteOpacity','call','CoreEngine','currencyUnit','ReqQuantityFontSize','ShopScene','isSceneItemCrafting','_itemIDs','_ItemCrafting_MainMenu','drawItemBackground','isItemCraftingCategoryValid','isSceneBattle','mainAreaHeight','gainItem','loadTitle1','totalPriceY','Window_ShopStatus_setItem','drawCraftingItemName','itemPadding','destroyAnimationSprite','maxItems','NUM','drawCraftedIcon','updateTooltipWindow','loadSystem','ListBgType','setValue','_allCraftableArmors','Window_MenuCommand_addOriginalCommands','ButtonAssistBgType','_itemSpriteOpacitySpeed','maxGold','isOkEnabled','allowCreateStatusWindow','buttonY','textColor','setMainMenuItemCraftingVisible','note','refresh','processFinishAnimation','Settings','addItemCategories','jsOnCraft','min','buttonAssistText1','MaskLetter','goto','Scene_Boot_onDatabaseLoaded','setItemForCraftBatchContents','weapon-%1','ItemQuantityFmt','GoldBgType','NumberBgType','Animation','ItemsEquipsCore','Mask','setItemSpriteFrame','\x5cI[%1]%2','currentCraftableItems','left','iconWidth','_itemsCrafted','destroyItemSprite','isItem','cursorWidth','EVAL','returnBackToItemWindow','bind','setCustomItemCraftingSettings','CraftBatchWrap','_ingredientSelectList','Type','customCraftingOnly','process_VisuMZ_ItemCraftingSys_JS_TraitObject_Notetags','drawTotalPrice','ceil','round','parse','SystemShowItemCraftingMenu','powerDownColor','Show','item-%1','registerCraftingEvent','_maxIngredientsSize','drawHorzLine','_amount','ItemCraftingSceneOpen','toUpperCase','format','_item','activate','cancel','activateItemWindow','statusWindowRectItemsEquipsCore','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','addLoadListener','isReleased','changePaintOpacity','1941462BsSLBO','ParseWeaponNotetags','setMainMenuItemCraftingEnabled','textWidth','drawCurrencyValue','drawIngredientItem','BATCH_CONTENTS','MainMenu','getColor','process_VisuMZ_ItemCraftingSys_Notetags','drawItemIngredient','_craftPicture','Gold','Game_Party_gainItem','%1/%2','_bypassProxy','_category','SelectedColor','_backSprite2','fontItalic','NoCategoryIcon','createUncategorizedItemCategory','createIngredientSelectionTitle','ARRAYSTR'];_0x2d73=function(){return _0x4818b4;};return _0x2d73();}function Window_ItemCraftingNumber(){const _0x466c5a=_0x13d2b9;this[_0x466c5a(0x322)](...arguments);}Window_ItemCraftingNumber[_0x13d2b9(0x1ae)]=Object[_0x13d2b9(0x18a)](Window_ShopNumber[_0x13d2b9(0x1ae)]),Window_ItemCraftingNumber[_0x13d2b9(0x1ae)][_0x13d2b9(0x190)]=Window_ItemCraftingNumber,Window_ItemCraftingNumber[_0x13d2b9(0x1ae)]['initialize']=function(_0x27e789){const _0x5a15c7=_0x13d2b9;Window_ShopNumber[_0x5a15c7(0x1ae)][_0x5a15c7(0x322)][_0x5a15c7(0x1c9)](this,_0x27e789);},Window_ItemCraftingNumber['prototype'][_0x13d2b9(0x309)]=function(_0x29dac9){const _0x5333ae=_0x13d2b9;this[_0x5333ae(0x221)]=_0x29dac9,this['_max']=this[_0x5333ae(0x30c)](),this[_0x5333ae(0x244)]=Math[_0x5333ae(0x1f3)](0x1,this['_max']),this[_0x5333ae(0x29c)](),this['refresh']();},Window_ItemCraftingNumber['prototype']['determineMax']=function(){const _0x2f6927=_0x13d2b9;if(DataManager[_0x2f6927(0x312)](this[_0x2f6927(0x221)]))return $gameParty[_0x2f6927(0x173)](this[_0x2f6927(0x221)]);const _0x24c242=[],_0x5078a4=this[_0x2f6927(0x221)],_0x199db2=DataManager['getCraftingIngredients'](_0x5078a4);let _0x1de80f=0x0;for(const _0x13406f of _0x199db2){if(!_0x13406f)continue;let _0x34d573=_0x13406f[0x0];const _0x2d3f60=_0x13406f[0x1];_0x34d573===_0x2f6927(0x303)?_0x24c242[_0x2f6927(0x1b3)](Math['floor']($gameParty[_0x2f6927(0x303)]()/_0x2d3f60)):(typeof _0x34d573===_0x2f6927(0x27e)&&_0x34d573[_0x2f6927(0x276)](/CATEGORY/i)&&(_0x34d573=SceneManager[_0x2f6927(0x331)][_0x2f6927(0x1b8)][_0x1de80f],_0x1de80f+=0x1),_0x24c242[_0x2f6927(0x1b3)](Math[_0x2f6927(0x27a)]($gameParty[_0x2f6927(0x34f)](_0x34d573)/_0x2d3f60)));}if(_0x24c242['length']<=0x0)_0x24c242[_0x2f6927(0x1b3)](0x0);return _0x24c242[_0x2f6927(0x1b3)]($gameParty[_0x2f6927(0x1dc)](_0x5078a4)-$gameParty['numItems'](_0x5078a4)),Math[_0x2f6927(0x1f3)](..._0x24c242);},Window_ItemCraftingNumber[_0x13d2b9(0x1ae)][_0x13d2b9(0x1ee)]=function(){const _0x2d72e8=_0x13d2b9;Window_Selectable[_0x2d72e8(0x1ae)][_0x2d72e8(0x1ee)][_0x2d72e8(0x1c9)](this),this[_0x2d72e8(0x29e)](),this[_0x2d72e8(0x1d1)](0x0),this[_0x2d72e8(0x212)](),this[_0x2d72e8(0x21c)](),this['drawCurrentItemName']();},Window_ItemCraftingNumber[_0x13d2b9(0x1ae)][_0x13d2b9(0x29e)]=function(){const _0x34bb19=_0x13d2b9,_0x191087=this['_buttons'][0x4];if(!_0x191087)return;this[_0x34bb19(0x1e8)]()?_0x191087['setClickHandler'](this['onButtonOk']['bind'](this)):_0x191087[_0x34bb19(0x1a3)]=null;},Window_ItemCraftingNumber[_0x13d2b9(0x1ae)][_0x13d2b9(0x34a)]=function(){const _0x202794=_0x13d2b9;return Math['floor'](this[_0x202794(0x1d7)]()+this['lineHeight']()*0x2);},Window_ItemCraftingNumber[_0x13d2b9(0x1ae)]['totalPriceY']=function(){const _0x473442=_0x13d2b9;return Math[_0x473442(0x27a)](this[_0x473442(0x2b1)]-this[_0x473442(0x290)]()*6.5);},Window_ItemCraftingNumber[_0x13d2b9(0x1ae)][_0x13d2b9(0x1ea)]=function(){const _0x2f1da8=_0x13d2b9;return Math[_0x2f1da8(0x27a)](this['itemNameY']()+this[_0x2f1da8(0x290)]()*0x2);},Window_ItemCraftingNumber[_0x13d2b9(0x1ae)]['isOkEnabled']=function(){const _0x316b7d=_0x13d2b9;if((this['_number']||0x0)<=0x0)return![];return Window_ShopNumber[_0x316b7d(0x1ae)][_0x316b7d(0x1e8)][_0x316b7d(0x1c9)](this);},Window_ItemCraftingNumber[_0x13d2b9(0x1ae)][_0x13d2b9(0x33b)]=function(){const _0x9c3b5e=_0x13d2b9;return this[_0x9c3b5e(0x1e8)]();},Window_ItemCraftingNumber[_0x13d2b9(0x1ae)][_0x13d2b9(0x212)]=function(){const _0x13dba8=_0x13d2b9,_0x490fe9=DataManager[_0x13dba8(0x327)](this['_item']);let _0x2065f2=this[_0x13dba8(0x1d7)]();_0x2065f2-=this[_0x13dba8(0x290)]()*_0x490fe9[_0x13dba8(0x27c)],this[_0x13dba8(0x362)]=0x0,this[_0x13dba8(0x17f)](_0x2065f2);for(const _0x396fe9 of _0x490fe9){_0x2065f2+=this[_0x13dba8(0x290)]();if(!_0x396fe9)continue;this[_0x13dba8(0x2c1)](_0x396fe9,_0x2065f2);};},Window_ItemCraftingNumber[_0x13d2b9(0x1ae)]['drawCategories']=function(_0x234047){const _0x507553=_0x13d2b9,_0x22f212=this[_0x507553(0x1da)]();let _0x2e4ca6=_0x22f212*0x2;const _0x1852ea=this[_0x507553(0x16b)]-_0x2e4ca6-_0x22f212*0x3,_0x4e2541=_0x2e4ca6+Math[_0x507553(0x213)](_0x1852ea/0x3),_0x38b84a=Math['floor'](_0x1852ea*0x2/0x3/0x3),_0x50c653=Math[_0x507553(0x368)](this[_0x507553(0x22d)](_0x507553(0x298)),this[_0x507553(0x22d)](_0x507553(0x343)));this[_0x507553(0x1a0)](),this[_0x507553(0x281)](ColorManager[_0x507553(0x271)]());const _0x2f5bf8=[_0x507553(0x339),'shift',_0x507553(0x1c7)];for(let _0x22d809=0x0;_0x22d809<0x3;_0x22d809++){const _0x2d95fd=_0x2f5bf8[_0x22d809],_0x5b0632=TextManager[_0x507553(0x15d)][_0x2d95fd];this[_0x507553(0x32a)](_0x5b0632,_0x4e2541+_0x38b84a*_0x22d809+_0x50c653,_0x234047,_0x38b84a-_0x50c653,_0x507553(0x2f5));}},Window_ItemCraftingNumber[_0x13d2b9(0x1ae)][_0x13d2b9(0x344)]=function(_0x57623a,_0x1c55a8){const _0x3e045c=_0x13d2b9,_0x217611=this[_0x3e045c(0x1da)]();let _0x3b80ba=_0x217611*0x2;const _0x5f352b=this['innerWidth']-_0x3b80ba-_0x217611*0x3,_0x2e1c50=_0x3b80ba+Math[_0x3e045c(0x213)](_0x5f352b/0x3),_0x8b6274=Math[_0x3e045c(0x27a)](_0x5f352b*0x2/0x3/0x3);_0x1c55a8='\x20%1'[_0x3e045c(0x220)](_0x1c55a8),this[_0x3e045c(0x32a)](_0x1c55a8,_0x2e1c50+_0x8b6274*0x1,_0x57623a,_0x8b6274,_0x3e045c(0x203)),this[_0x3e045c(0x32a)]('\x20=',_0x2e1c50+_0x8b6274*0x2,_0x57623a,_0x8b6274,_0x3e045c(0x203));},Window_ItemCraftingNumber[_0x13d2b9(0x1ae)]['drawIngredients']=function(_0x1851b8,_0x34086b){const _0x2e957c=_0x13d2b9;let _0x58ceaf=_0x1851b8[0x0];this[_0x2e957c(0x1a0)](),this[_0x2e957c(0x344)](_0x34086b,'-'),_0x58ceaf===_0x2e957c(0x303)?this[_0x2e957c(0x25e)](_0x1851b8,_0x34086b,!![]):this[_0x2e957c(0x234)](_0x1851b8,_0x34086b,!![],![]);},Window_ItemCraftingNumber['prototype'][_0x13d2b9(0x277)]=function(){const _0xe088c9=_0x13d2b9,_0x16b3c1=[this[_0xe088c9(0x221)],0x1],_0x20b6e0=this[_0xe088c9(0x34a)](),_0x53f1e8=DataManager[_0xe088c9(0x2ff)](this['_item']);this[_0xe088c9(0x234)](_0x16b3c1,_0x20b6e0,![],_0x53f1e8),this[_0xe088c9(0x344)](_0x20b6e0,'+');},Window_ItemCraftingNumber[_0x13d2b9(0x1ae)][_0x13d2b9(0x1ad)]=function(){return!![];},Window_ItemCraftingNumber[_0x13d2b9(0x1ae)][_0x13d2b9(0x18e)]=function(){return![];},Window_ItemCraftingNumber[_0x13d2b9(0x1ae)][_0x13d2b9(0x25e)]=function(_0x219f98,_0xcc5d3,_0xa8fb6c){const _0x2d2114=_0x13d2b9,_0x398b5d=this[_0x2d2114(0x1da)]();let _0xd7cf7e=_0x398b5d*0x2;const _0x44c6ce=this[_0x2d2114(0x16b)]-_0xd7cf7e-_0x398b5d*0x3,_0x1b1534=_0xd7cf7e+Math['ceil'](_0x44c6ce/0x3),_0x4e53d0=Math[_0x2d2114(0x27a)](_0x44c6ce*0x2/0x3/0x3),_0x6d685b=Math['max'](this[_0x2d2114(0x22d)](_0x2d2114(0x298)),this[_0x2d2114(0x22d)](_0x2d2114(0x343))),_0x17ab29=_0x219f98[0x0],_0x2ea6a9=_0x219f98[0x1],_0x159a26=_0x2ea6a9*this['_number'],_0x4c1ee5=VisuMZ[_0x2d2114(0x1ca)]?VisuMZ['CoreEngine'][_0x2d2114(0x1f0)][_0x2d2114(0x236)][_0x2d2114(0x2e5)]:0x0;if(_0x4c1ee5>0x0){const _0x215dde=_0xcc5d3+(this[_0x2d2114(0x290)]()-ImageManager[_0x2d2114(0x262)])/0x2;this[_0x2d2114(0x196)](_0x4c1ee5,_0xd7cf7e,_0x215dde);const _0x1fae6e=ImageManager[_0x2d2114(0x204)]+0x4;_0xd7cf7e+=_0x1fae6e;}this[_0x2d2114(0x281)](ColorManager['systemColor']()),this['drawText'](TextManager[_0x2d2114(0x1cb)],_0xd7cf7e,_0xcc5d3,_0x4e53d0,_0x2d2114(0x203));const _0x33f267=$gameParty['gold']();this[_0x2d2114(0x22e)](_0x33f267,TextManager['currencyUnit'],_0x1b1534,_0xcc5d3,_0x4e53d0);const _0x1038ff=_0x1b1534+_0x4e53d0*0x1+_0x6d685b,_0x3944d8=_0x4e53d0-_0x6d685b;this['drawCurrencyValue'](_0x159a26,TextManager[_0x2d2114(0x1cb)],_0x1038ff,_0xcc5d3,_0x3944d8);const _0x102f7a=_0x1b1534+_0x4e53d0*0x2+_0x6d685b,_0x383704=_0x4e53d0-_0x6d685b,_0x3641c8=Math[_0x2d2114(0x1f3)](_0x33f267+_0x159a26*(_0xa8fb6c?-0x1:0x1),$gameParty[_0x2d2114(0x1e7)]());this[_0x2d2114(0x22e)](_0x3641c8,TextManager[_0x2d2114(0x1cb)],_0x102f7a,_0xcc5d3,_0x383704);},Window_ItemCraftingNumber[_0x13d2b9(0x1ae)]['drawItemIngredient']=function(_0x30286c,_0x517741,_0xd0d8af,_0x2003a8){const _0xd29966=_0x13d2b9,_0x545746=this['itemPadding']();let _0x1d9061=_0x545746*0x2;const _0x1a9ac3=this[_0xd29966(0x16b)]-_0x1d9061-_0x545746*0x3,_0x2fb8df=_0x1d9061+Math[_0xd29966(0x213)](_0x1a9ac3/0x3),_0xb51191=Math[_0xd29966(0x27a)](_0x1a9ac3*0x2/0x3/0x3),_0x5e2d87=Math[_0xd29966(0x368)](this['textWidth'](_0xd29966(0x298)),this[_0xd29966(0x22d)]('\x20=\x20'));let _0x107beb=_0x30286c[0x0];typeof _0x107beb===_0xd29966(0x27e)&&_0x107beb['match'](/CATEGORY/i)&&(_0x107beb=SceneManager[_0xd29966(0x331)][_0xd29966(0x1b8)][this[_0xd29966(0x362)]],this[_0xd29966(0x362)]+=0x1);const _0x53e5ab=_0x30286c[0x1],_0x4ee160=_0x53e5ab*this['_number'];let _0x57ce4a=_0x107beb['iconIndex'];const _0x292edd=_0x57ce4a>0x0?ImageManager['iconWidth']+0x4:0x0;if(_0x2003a8){const _0x1f2551=new Rectangle(_0x1d9061,_0x517741,_0x1a9ac3,this[_0xd29966(0x290)]());this[_0xd29966(0x1d9)](_0x107beb,_0x1f2551),this[_0xd29966(0x196)](_0x107beb[_0xd29966(0x1af)],_0x1f2551['x'],_0x1f2551['y']);}else this['drawItemName'](_0x107beb,_0x1d9061,_0x517741,_0x1a9ac3);const _0xe51898=_0x2fb8df+_0xb51191*0x0,_0x2c01f1=_0xb51191-_0x292edd,_0x497a41=$gameParty[_0xd29966(0x34f)](_0x107beb);this['drawText'](_0x497a41,_0xe51898,_0x517741,_0x2c01f1,'right'),this[_0xd29966(0x196)](_0x57ce4a,_0xe51898+_0x2c01f1+0x4,_0x517741);const _0x4d4ac6=_0x2fb8df+_0xb51191*0x1+_0x5e2d87,_0x12cd22=_0xb51191-_0x5e2d87-_0x292edd;this['drawText'](_0x4ee160,_0x4d4ac6,_0x517741,_0x12cd22,_0xd29966(0x26f)),this[_0xd29966(0x196)](_0x57ce4a,_0x4d4ac6+_0x12cd22+0x4,_0x517741);const _0x1dec56=_0x2fb8df+_0xb51191*0x2+_0x5e2d87,_0x1d302c=_0xb51191-_0x5e2d87-_0x292edd,_0x88756e=_0x497a41+_0x4ee160*(_0xd0d8af?-0x1:0x1);this['drawText'](_0x88756e,_0x1dec56,_0x517741,_0x1d302c,_0xd29966(0x26f)),this[_0xd29966(0x196)](_0x57ce4a,_0x1dec56+_0x1d302c+0x4,_0x517741);},Window_ItemCraftingNumber[_0x13d2b9(0x1ae)][_0x13d2b9(0x2dc)]=function(){const _0x3bc912=_0x13d2b9,_0x8868f0=this[_0x3bc912(0x1da)]();let _0x2ce8e0=_0x8868f0*0x2;const _0xde30cc=this[_0x3bc912(0x16b)]-_0x2ce8e0-_0x8868f0*0x3,_0xa14b65=_0x2ce8e0+Math[_0x3bc912(0x213)](_0xde30cc/0x3),_0x45ac82=this[_0x3bc912(0x34a)](),_0x4cf340=Math[_0x3bc912(0x27a)](_0xde30cc*0x2/0x3/0x3),_0x31f6f7=Math['max'](this['textWidth'](_0x3bc912(0x298)),this[_0x3bc912(0x22d)](_0x3bc912(0x343))),_0x157c18=this['_item']?.['iconIndex']>0x0?ImageManager['iconWidth']:0x0,_0x5e03b8=this['cursorWidth'](),_0x5f05db=new Rectangle(Math[_0x3bc912(0x27a)](_0xa14b65+_0x4cf340*0x2-this['cursorWidth']()-_0x157c18+this[_0x3bc912(0x1da)]()/0x2-0x2),_0x45ac82,this[_0x3bc912(0x208)](),this['lineHeight']());return _0x5f05db;};function Window_ItemCraftingIngredient(){const _0x1b79c9=_0x13d2b9;this[_0x1b79c9(0x322)](...arguments);}Window_ItemCraftingIngredient[_0x13d2b9(0x1ae)]=Object[_0x13d2b9(0x18a)](Window_ItemList[_0x13d2b9(0x1ae)]),Window_ItemCraftingIngredient[_0x13d2b9(0x1ae)][_0x13d2b9(0x190)]=Window_ItemCraftingIngredient,Window_ItemCraftingIngredient[_0x13d2b9(0x1ae)][_0x13d2b9(0x322)]=function(_0x40998b){const _0x4cb8c9=_0x13d2b9;Window_Selectable['prototype'][_0x4cb8c9(0x322)][_0x4cb8c9(0x1c9)](this,_0x40998b),this['_amount']=0x0;},Window_ItemCraftingIngredient[_0x13d2b9(0x1ae)][_0x13d2b9(0x347)]=function(){return![];},Window_ItemCraftingIngredient[_0x13d2b9(0x1ae)][_0x13d2b9(0x309)]=function(_0x2132b0,_0x2c8993){const _0x315e6a=_0x13d2b9;this[_0x315e6a(0x23a)]=_0x2132b0,this[_0x315e6a(0x21d)]=_0x2c8993||0x1,this[_0x315e6a(0x1ee)](),this['scrollTo'](0x0,0x0),this['activate'](),this[_0x315e6a(0x2ee)](0x0);},Window_ItemCraftingIngredient['prototype'][_0x13d2b9(0x2b0)]=function(){const _0x3b618c=_0x13d2b9;this[_0x3b618c(0x30d)]=$gameParty[_0x3b618c(0x2cb)]()[_0x3b618c(0x28e)](_0x3a03cb=>this[_0x3b618c(0x18d)](_0x3a03cb));},Window_ItemCraftingIngredient[_0x13d2b9(0x1ae)][_0x13d2b9(0x18d)]=function(_0x1cb4a9){const _0x2948bb=_0x13d2b9;if(!_0x1cb4a9)return![];if(_0x1cb4a9===SceneManager[_0x2948bb(0x331)][_0x2948bb(0x221)])return![];return _0x1cb4a9[_0x2948bb(0x2ae)]['includes'](this[_0x2948bb(0x23a)][_0x2948bb(0x21f)]()[_0x2948bb(0x1b7)]());},Window_ItemCraftingIngredient[_0x13d2b9(0x1ae)][_0x13d2b9(0x2c7)]=function(_0x3eaed6){const _0x1de047=_0x13d2b9;if(!_0x3eaed6)return![];if(this[_0x1de047(0x174)]()[_0x1de047(0x18d)](_0x3eaed6))return![];return $gameParty[_0x1de047(0x34f)](_0x3eaed6)>=this['_amount'];},Window_ItemCraftingIngredient['prototype'][_0x13d2b9(0x174)]=function(){const _0x4173f8=_0x13d2b9,_0x3bf6a8=[],_0x5d3ca7=DataManager[_0x4173f8(0x327)](SceneManager['_scene'][_0x4173f8(0x221)]);for(const _0x3f7a4d of _0x5d3ca7){if(!_0x3f7a4d)continue;const _0x396b26=_0x3f7a4d[0x0];(DataManager[_0x4173f8(0x207)](_0x396b26)||DataManager['isWeapon'](_0x396b26)||DataManager[_0x4173f8(0x269)](_0x396b26))&&_0x3bf6a8[_0x4173f8(0x1b3)](_0x396b26);}return _0x3bf6a8[_0x4173f8(0x349)](SceneManager[_0x4173f8(0x331)][_0x4173f8(0x1b8)]);},Window_ItemCraftingIngredient[_0x13d2b9(0x1ae)][_0x13d2b9(0x301)]=function(_0x2a4e70,_0x5e505c,_0x2386d2,_0x381f23){const _0x586f47=_0x13d2b9;_0x2a4e70&&this[_0x586f47(0x174)]()[_0x586f47(0x18d)](_0x2a4e70)&&(this[_0x586f47(0x2b6)]=!![]),Window_ItemList[_0x586f47(0x1ae)][_0x586f47(0x301)][_0x586f47(0x1c9)](this,_0x2a4e70,_0x5e505c,_0x2386d2,_0x381f23),this['_alreadySelected']=![];},Window_ItemCraftingIngredient[_0x13d2b9(0x1ae)][_0x13d2b9(0x32a)]=function(_0x2a69e1,_0x2901e4,_0x2aaa19,_0x49319c,_0x414ead){const _0xb17347=_0x13d2b9;if(this['_alreadySelected']){const _0x5015f7=VisuMZ[_0xb17347(0x24e)]['Settings']['General'];this[_0xb17347(0x17c)][_0xb17347(0x1eb)]=ColorManager[_0xb17347(0x232)](_0x5015f7[_0xb17347(0x23b)]),_0x2a69e1+=_0x5015f7['SelectedText'];}Window_Base[_0xb17347(0x1ae)]['drawText'][_0xb17347(0x1c9)](this,_0x2a69e1,_0x2901e4,_0x2aaa19,_0x49319c,_0x414ead);},VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x2f0)]=Window_ShopStatus[_0x13d2b9(0x1ae)][_0x13d2b9(0x1ee)],Window_ShopStatus[_0x13d2b9(0x1ae)][_0x13d2b9(0x1ee)]=function(){const _0x180f8a=_0x13d2b9;this[_0x180f8a(0x33a)](this['_item'])?this[_0x180f8a(0x1f8)](this[_0x180f8a(0x221)]):VisuMZ['ItemCraftingSys'][_0x180f8a(0x2f0)][_0x180f8a(0x1c9)](this);},VisuMZ[_0x13d2b9(0x24e)][_0x13d2b9(0x1d8)]=Window_ShopStatus[_0x13d2b9(0x1ae)][_0x13d2b9(0x332)],Window_ShopStatus[_0x13d2b9(0x1ae)][_0x13d2b9(0x332)]=function(_0x992d7e){const _0x11261e=_0x13d2b9;this['shouldDrawCraftBatchContents'](_0x992d7e)?this[_0x11261e(0x1f8)](_0x992d7e):VisuMZ[_0x11261e(0x24e)]['Window_ShopStatus_setItem'][_0x11261e(0x1c9)](this,_0x992d7e);},Window_ShopStatus[_0x13d2b9(0x1ae)]['shouldDrawCraftBatchContents']=function(_0x1dcb56){const _0x1b31de=_0x13d2b9;if(!_0x1dcb56)return![];if(!SceneManager[_0x1b31de(0x1ce)]())return![];if(Imported[_0x1b31de(0x255)]){if(!Window_ShopStatus[_0x1b31de(0x230)][_0x1b31de(0x254)])return![];}return DataManager[_0x1b31de(0x312)](_0x1dcb56);},Window_ShopStatus[_0x13d2b9(0x1ae)]['setItemForCraftBatchContents']=function(_0x3a6115){const _0x143672=_0x13d2b9;this[_0x143672(0x221)]=_0x3a6115,this[_0x143672(0x17c)][_0x143672(0x2e9)](),this[_0x143672(0x260)]['clear'](),this['drawCraftBatchContents'](_0x3a6115);},Window_ShopStatus[_0x13d2b9(0x1ae)][_0x13d2b9(0x186)]=function(_0x5ca6a8){const _0x599f18=_0x13d2b9;let _0x139078=this[_0x599f18(0x285)]();_0x139078=this[_0x599f18(0x2d2)](_0x139078,_0x5ca6a8),this[_0x599f18(0x319)](_0x139078);},Window_ShopStatus[_0x13d2b9(0x1ae)]['drawCraftBatchContentsList']=function(_0x5549b3,_0x540f54){const _0x566d7a=_0x13d2b9,_0x28240c=DataManager[_0x566d7a(0x15a)](_0x540f54),_0x57edaf=['items',_0x566d7a(0x314),'armors'];for(const _0x915e58 of _0x57edaf){const _0x507221=_0x28240c[_0x915e58];for(const _0x34ed10 in _0x507221){const _0x3a5fcc=Number(_0x34ed10),_0xc7cc4e=_0x507221[_0x34ed10]||0x0;let _0x943300=null;if(_0x915e58===_0x566d7a(0x328))_0x943300=$dataItems[_0x3a5fcc];if(_0x915e58===_0x566d7a(0x314))_0x943300=$dataWeapons[_0x3a5fcc];if(_0x915e58===_0x566d7a(0x283))_0x943300=$dataArmors[_0x3a5fcc];if(DataManager[_0x566d7a(0x1a5)](_0x943300))continue;_0x943300&&(this[_0x566d7a(0x1a0)](),this[_0x566d7a(0x2f6)](_0x5549b3,_0x943300,_0xc7cc4e),_0x5549b3+=this[_0x566d7a(0x290)]());}}return _0x5549b3;};