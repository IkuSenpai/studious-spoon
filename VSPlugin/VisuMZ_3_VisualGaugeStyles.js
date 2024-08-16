//=============================================================================
// VisuStella MZ - Visual Gauge Styles
// VisuMZ_3_VisualGaugeStyles.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_VisualGaugeStyles = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualGaugeStyles = VisuMZ.VisualGaugeStyles || {};
VisuMZ.VisualGaugeStyles.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.02] [VisualGaugeStyles]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_Gauge_Styles_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Visual Gauge Styles plugin allows you to swap out the various gauges
 * found and used in the game to don a different appearance and aesthetic. The
 * aesthetics can be mixed and matched to your liking, going from more visual
 * polygon structure-like styles to enhance a feeling to more mechanical-like
 * styles to relay information better. As these styles are all pre-rendered,
 * there are no custom files used with this plugin.
 *
 * Features include all (but not limited to) the following:
 * 
 * * No custom image files are needed for this plugin to utilize the various
 *   pre-rendered visual gauge styles.
 * * Mix and match from over 20+ choices to pick from for different types of
 *   gauges found in the game and from other VisuStella MZ plugins.
 * * Styles can have varying gauge heights, label offsets, and value offsets to
 *   add to the aesthetic differences.
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
 * * VisuMZ_1_BattleCore
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Sprite_Gauge Overwrite
 * 
 * Naturally, since the visual gauge styles are altered, certain aspects have
 * to be overwritten as a whole. For the Sprite_Gauge class, this means the
 * functions related to drawing the gauges themselves are overwritten.
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
 * VisuMZ_1_BattleCore
 *
 * VisuMZ_2_AggroControlSys
 * 
 * VisuMZ_2_BattleSystemATB
 * 
 * VisuMZ_3_VictoryAftermath
 *
 * These plugins from the VisuStella MZ library contain sprite gauges used that
 * can be altered and have a different style from the rest. Mix and match them
 * to your liking.
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
 * VisuMZ_4_VariableGauges
 * 
 * The updated version of VisuStella MZ's Variable Gauges can now utilize the
 * styles from this plugin. However, keep in mind that style settings like
 * adjusting gauge thickness will not be handled by the Visual Gauge Styles
 * plugin, but instead, handled by the Variable Gauges plugin.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Style Adjustment Settings
 * ============================================================================
 *
 * Adjust settings like label and value offsets for each style type.
 *
 * ---
 *
 * Structure-Styles
 * 
 *   Normal:
 *   Arrow:
 *   Dipper:
 *   Flag:
 *   Growth:
 *   Lean:
 *   Quad:
 *   Stagger:
 *   Trapezoid:
 *   - Adjustment settings like gauge thickness, labels, values offsets values
 *     when this specific style is used.
 *
 * ---
 *
 * Step-Styles
 * 
 *   Half Step:
 *   Third Step:
 *   Fourth Step:
 *   Fifth Step:
 *   Sixth Step:
 *   Eighth Step:
 *   Tenth Step:
 *   - Adjustment settings like gauge thickness, labels, values offsets values
 *     when this specific style is used.
 *
 * ---
 *
 * Section-Styles
 * 
 *   Half Section:
 *   Third Section:
 *   Fourth Section:
 *   Fifth Section:
 *   Sixth Section:
 *   Eighth Section:
 *   Tenth Section:
 *   - Adjustment settings like gauge thickness, labels, values offsets values
 *     when this specific style is used.
 *   - These gauges will be separated in even sections based on their numeric
 *     value used for their style name.
 *
 * ---
 *
 * Segment-Styles
 * 
 *   Segment By 10:
 *   Segment By 20:
 *   Segment By 25:
 *   Segment By 50:
 *   Segment By 100:
 *   Segment By 200:
 *   Segment By 250:
 *   Segment By 500:
 *   Segment By 1000:
 *   - Adjustment settings like gauge thickness, labels, values offsets values
 *     when this specific style is used.
 *   - These gauges will be separated in divided chunks based on the maximum
 *     value used to calculate the gauge. Their divison count is based on the
 *     numeric value used for their style name.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * Here, you can adjust the default settings for the various gauges used in the
 * game. If there are any future plugins that will utilize custom gauges, they
 * will be added here at a later date.
 *
 * ---
 *
 * Default
 * 
 *   Default Horizontal Style:
 *   Default Vertical Style:
 *   - Select the gauge style to use for default horizontal/vertical gauges.
 *   - When 'Default' style is selected in the "Status Window" or "Battlers"
 *     Plugin Parameters, the style will then refer to the "Horizontal" or
 *     "Vertical" gauge styles set here.
 *
 * ---
 *
 * Status Window
 * 
 *   Status: HP Style:
 *   Status: MP Style:
 *   Status: TP Style:
 *   Status: Time Style:
 *   Status: Aggro Style:
 *   - Select the gauge style to use for the status-related gauge.
 * 
 * ---
 * 
 * Battlers
 * 
 *   Battler: HP Style:
 *   Battler: Aggro Style:
 *   Battler: ATB Style:
 *   Battler: EXP Style:
 *   - Select the gauge style to use for the battler-related gauges.
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
 * Version 1.02: November 16, 2023
 * * Compatibility Update!
 * ** Plugin is more compatible with Enhanced TP's custom gauge colors.
 * 
 * Version 1.01: March 16, 2023
 * * Feature Update!
 * ** Plugin now prompts you to make sure your other plugins are up to date
 *    before usage. This plugin does not work with cores that are out of date.
 *    Update made by Olivia.
 * 
 * Version 1.00 Official Release Date: April 5, 2023
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
 * @param VisualGaugeStyles
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Styles:struct
 * @text Style Adjustment Settings
 * @type struct<Styles>
 * @desc Adjust settings like label and value offsets for each style type.
 * @default {"Structure":"","normal:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+0\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"+0\",\"valueOffsetY:num\":\"+0\"}","arrow:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-8\",\"valueOffsetY:num\":\"+0\"}","dipper:struct":"{\"gaugeThickness:num\":\"20\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","flag:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+0\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-8\",\"valueOffsetY:num\":\"+0\"}","growth:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","lean:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-8\",\"valueOffsetY:num\":\"+0\"}","quad:struct":"{\"gaugeThickness:num\":\"20\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","stagger:struct":"{\"gaugeThickness:num\":\"14\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-8\",\"valueOffsetY:num\":\"+0\"}","trapezoid:struct":"{\"gaugeThickness:num\":\"16\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","Steps":"","halfstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","thirdstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","fourthstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","fifthstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","sixthstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","eighthstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","tenthstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","Section":"","halfsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","thirdsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","fourthsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","fifthsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","sixthsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","eighthsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","tenthsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","Segment":"","segmentby10:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby20:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby25:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby50:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby100:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby200:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby250:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby500:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby1000:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}"}
 * 
 * @param DefaultStyles
 * @text Default
 * @parent Styles:struct
 * 
 * @param horzStyle:str
 * @text Default Horizontal Style
 * @parent DefaultStyles
 * @type select
 * @option -
 * @option Normal
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for default horizontal gauges.
 * @default Lean
 * 
 * @param vertStyle:str
 * @text Default Vertical Style
 * @parent DefaultStyles
 * @type select
 * @option Normal
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for default vertical gauges.
 * @default Arrow
 * 
 * @param StatusStyles
 * @text Status Window
 * @parent Styles:struct
 * 
 * @param statusHpStyle:str
 * @text Status: HP Style
 * @parent StatusStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the status window HP.
 * @default Stagger
 * 
 * @param statusMpStyle:str
 * @text Status: MP Style
 * @parent StatusStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the status window MP.
 * @default Stagger
 * 
 * @param statusTpStyle:str
 * @text Status: TP Style
 * @parent StatusStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the status window TP.
 * @default Stagger
 * 
 * @param statusTimeStyle:str
 * @text Status: Time Style
 * @parent StatusStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the status window time
 * gauge. Used for TPB and VisuMZ_2_BattleSystemATB.
 * @default Lean
 * 
 * @param statusAggroStyle:str
 * @text Status: Aggro Style
 * @parent StatusStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the status aggro gauge.
 * Requires VisuMZ_2_AggroControlSys!
 * @default Lean
 * 
 * @param BattlerStyles
 * @text Battlers
 * @parent Styles:struct
 * 
 * @param battlerHpStyle:str
 * @text Battler: HP Style
 * @parent BattlerStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the battler HP gauges.
 * @default Lean
 * 
 * @param battlerAggroStyle:str
 * @text Battler: Aggro Style
 * @parent BattlerStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the battler aggro gauge.
 * Requires VisuMZ_2_AggroControlSys!
 * @default Lean
 * 
 * @param battlerAtbStyle:str
 * @text Battler: ATB Style
 * @parent BattlerStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the battler ATB gauges.
 * Requires VisuMZ_2_BattleSystemATB!
 * @default Lean
 * 
 * @param battlerEXPStyle:str
 * @text Battler: EXP Style
 * @parent BattlerStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the battler EXP gauges.
 * Requires VisuMZ_3_VictoryAftermath!
 * @default Arrow
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
 * Specific Style Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Styles:
 * 
 * @param Structure
 * @text Structure-Styles
 *
 * @param normal:struct
 * @text Normal
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+0","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"+0","valueOffsetY:num":"+0"}
 *
 * @param arrow:struct
 * @text Arrow
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-8","valueOffsetY:num":"+0"}
 *
 * @param dipper:struct
 * @text Dipper
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"20","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param flag:struct
 * @text Flag
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+0","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-8","valueOffsetY:num":"+0"}
 *
 * @param growth:struct
 * @text Growth
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param lean:struct
 * @text Lean
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-8","valueOffsetY:num":"+0"}
 *
 * @param quad:struct
 * @text Quad
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"20","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param stagger:struct
 * @text Stagger
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"14","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-8","valueOffsetY:num":"+0"}
 *
 * @param trapezoid:struct
 * @text Trapezoid
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"16","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 * 
 * @param Steps
 * @text Step-Styles
 *
 * @param halfstep:struct
 * @text Half Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param thirdstep:struct
 * @text Third Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param fourthstep:struct
 * @text Fourth Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param fifthstep:struct
 * @text Fifth Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param sixthstep:struct
 * @text Sixth Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param eighthstep:struct
 * @text Eighth Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param tenthstep:struct
 * @text Tenth Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 * 
 * @param Section
 * @text Section-Styles
 *
 * @param halfsection:struct
 * @text Half Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param thirdsection:struct
 * @text Third Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param fourthsection:struct
 * @text Fourth Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param fifthsection:struct
 * @text Fifth Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param sixthsection:struct
 * @text Sixth Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param eighthsection:struct
 * @text Eighth Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param tenthsection:struct
 * @text Tenth Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 * 
 * @param Segment
 * @text Segment-Styles
 *
 * @param segmentby10:struct
 * @text Segment By 10
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby20:struct
 * @text Segment By 20
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby25:struct
 * @text Segment By 25
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby50:struct
 * @text Segment By 50
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby100:struct
 * @text Segment By 100
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby200:struct
 * @text Segment By 200
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby250:struct
 * @text Segment By 250
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby500:struct
 * @text Segment By 500
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby1000:struct
 * @text Segment By 1000
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 */
/* ----------------------------------------------------------------------------
 * Offset Data Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~OffsetData:
 *
 * @param gaugeThickness:num
 * @text Gauge Thickness
 * @type number
 * @min 1
 * @desc What is the gauge height/width when this style is used?
 * Horz Style: Adjusts height. Vert Style: Adjusts width.
 * @default 12
 * 
 * @param Label
 * @text Label Offsets
 *
 * @param labelOffsetX:num
 * @text Offset X
 * @parent Label
 * @desc How many pixels to offset the label text?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param labelOffsetY:num
 * @text Offset Y
 * @parent Label
 * @desc How many pixels to offset the label text?
 * Negative: up. Positive: down.
 * @default +0
 * 
 * @param Value
 * @text Value Offsets
 *
 * @param valueOffsetX:num
 * @text Offset X
 * @parent Value
 * @desc How many pixels to offset the value text?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param valueOffsetY:num
 * @text Offset Y
 * @parent Value
 * @desc How many pixels to offset the value text?
 * Negative: up. Positive: down.
 * @default +0
 *
 */
//=============================================================================

const _0x43b624=_0x31e2;(function(_0x68c8e7,_0x4f2fb8){const _0x258e29=_0x31e2,_0x5074a9=_0x68c8e7();while(!![]){try{const _0x3820b1=-parseInt(_0x258e29(0x165))/0x1+parseInt(_0x258e29(0x11a))/0x2+parseInt(_0x258e29(0x1d9))/0x3*(-parseInt(_0x258e29(0x13f))/0x4)+-parseInt(_0x258e29(0x136))/0x5*(-parseInt(_0x258e29(0x1a5))/0x6)+parseInt(_0x258e29(0x1b7))/0x7*(-parseInt(_0x258e29(0x18c))/0x8)+-parseInt(_0x258e29(0x1b0))/0x9*(-parseInt(_0x258e29(0x151))/0xa)+parseInt(_0x258e29(0x176))/0xb*(parseInt(_0x258e29(0x1a6))/0xc);if(_0x3820b1===_0x4f2fb8)break;else _0x5074a9['push'](_0x5074a9['shift']());}catch(_0x3a3668){_0x5074a9['push'](_0x5074a9['shift']());}}}(_0x7738,0xa8ecb));var label=_0x43b624(0x1d0),tier=tier||0x0,dependencies=[_0x43b624(0x181),'VisuMZ_1_BattleCore',_0x43b624(0x186)],pluginData=$plugins[_0x43b624(0x15a)](function(_0xe9afad){const _0x12d36c=_0x43b624;return _0xe9afad[_0x12d36c(0x1ab)]&&_0xe9afad[_0x12d36c(0x154)][_0x12d36c(0x197)]('['+label+']');})[0x0];VisuMZ[label][_0x43b624(0x125)]=VisuMZ[label][_0x43b624(0x125)]||{},VisuMZ[_0x43b624(0x1d1)]=function(_0x5e46e5,_0x15e25d){const _0x12ad3f=_0x43b624;for(const _0x216647 in _0x15e25d){if(_0x216647[_0x12ad3f(0x19c)](/(.*):(.*)/i)){const _0x3dadb1=String(RegExp['$1']),_0x2e6b89=String(RegExp['$2'])[_0x12ad3f(0x146)]()[_0x12ad3f(0x12b)]();let _0x8fa959,_0x1d26f9,_0x45b7f1;switch(_0x2e6b89){case _0x12ad3f(0x1ac):_0x8fa959=_0x15e25d[_0x216647]!==''?Number(_0x15e25d[_0x216647]):0x0;break;case _0x12ad3f(0x1c4):_0x1d26f9=_0x15e25d[_0x216647]!==''?JSON[_0x12ad3f(0x190)](_0x15e25d[_0x216647]):[],_0x8fa959=_0x1d26f9[_0x12ad3f(0x179)](_0x5e9676=>Number(_0x5e9676));break;case _0x12ad3f(0x131):_0x8fa959=_0x15e25d[_0x216647]!==''?eval(_0x15e25d[_0x216647]):null;break;case _0x12ad3f(0x16a):_0x1d26f9=_0x15e25d[_0x216647]!==''?JSON[_0x12ad3f(0x190)](_0x15e25d[_0x216647]):[],_0x8fa959=_0x1d26f9[_0x12ad3f(0x179)](_0x2c71e1=>eval(_0x2c71e1));break;case _0x12ad3f(0x17c):_0x8fa959=_0x15e25d[_0x216647]!==''?JSON[_0x12ad3f(0x190)](_0x15e25d[_0x216647]):'';break;case _0x12ad3f(0x14f):_0x1d26f9=_0x15e25d[_0x216647]!==''?JSON[_0x12ad3f(0x190)](_0x15e25d[_0x216647]):[],_0x8fa959=_0x1d26f9[_0x12ad3f(0x179)](_0xaf2f0f=>JSON[_0x12ad3f(0x190)](_0xaf2f0f));break;case'FUNC':_0x8fa959=_0x15e25d[_0x216647]!==''?new Function(JSON[_0x12ad3f(0x190)](_0x15e25d[_0x216647])):new Function(_0x12ad3f(0x1a2));break;case _0x12ad3f(0x171):_0x1d26f9=_0x15e25d[_0x216647]!==''?JSON[_0x12ad3f(0x190)](_0x15e25d[_0x216647]):[],_0x8fa959=_0x1d26f9[_0x12ad3f(0x179)](_0x50dd2e=>new Function(JSON[_0x12ad3f(0x190)](_0x50dd2e)));break;case _0x12ad3f(0x147):_0x8fa959=_0x15e25d[_0x216647]!==''?String(_0x15e25d[_0x216647]):'';break;case _0x12ad3f(0x180):_0x1d26f9=_0x15e25d[_0x216647]!==''?JSON[_0x12ad3f(0x190)](_0x15e25d[_0x216647]):[],_0x8fa959=_0x1d26f9[_0x12ad3f(0x179)](_0x3d2374=>String(_0x3d2374));break;case _0x12ad3f(0x1d7):_0x45b7f1=_0x15e25d[_0x216647]!==''?JSON[_0x12ad3f(0x190)](_0x15e25d[_0x216647]):{},_0x8fa959=VisuMZ['ConvertParams']({},_0x45b7f1);break;case _0x12ad3f(0x168):_0x1d26f9=_0x15e25d[_0x216647]!==''?JSON[_0x12ad3f(0x190)](_0x15e25d[_0x216647]):[],_0x8fa959=_0x1d26f9[_0x12ad3f(0x179)](_0x58345e=>VisuMZ[_0x12ad3f(0x1d1)]({},JSON['parse'](_0x58345e)));break;default:continue;}_0x5e46e5[_0x3dadb1]=_0x8fa959;}}return _0x5e46e5;},(_0x1f303a=>{const _0x46891d=_0x43b624,_0x197087=_0x1f303a[_0x46891d(0x1bc)];for(const _0x237fb6 of dependencies){if(!Imported[_0x237fb6]){alert(_0x46891d(0x178)[_0x46891d(0x1a8)](_0x197087,_0x237fb6)),SceneManager['exit']();break;}}const _0x1cdd3c=_0x1f303a['description'];if(_0x1cdd3c[_0x46891d(0x19c)](/\[Version[ ](.*?)\]/i)){const _0x4965bb=Number(RegExp['$1']);_0x4965bb!==VisuMZ[label][_0x46891d(0x142)]&&(alert(_0x46891d(0x1df)['format'](_0x197087,_0x4965bb)),SceneManager[_0x46891d(0x17b)]());}if(_0x1cdd3c[_0x46891d(0x19c)](/\[Tier[ ](\d+)\]/i)){if('ZRvXW'!=='ikWir'){const _0x43ea5b=Number(RegExp['$1']);if(_0x43ea5b<tier)alert(_0x46891d(0x1ae)[_0x46891d(0x1a8)](_0x197087,_0x43ea5b,tier)),SceneManager[_0x46891d(0x17b)]();else{if(_0x46891d(0x13c)!=='TARiV'){const _0x5949aa=this[_0x46891d(0x124)](),_0x264e7d=this[_0x46891d(0x199)]();this[_0x46891d(0x1a7)](_0x5949aa,_0x264e7d,_0x9ab066,_0x3dd48c,_0x1c66f7,_0x5b3f8f);}else tier=Math[_0x46891d(0x1da)](_0x43ea5b,tier);}}else{let _0x87738c='';_0x87738c+=_0x46891d(0x1bb),_0x87738c+=_0x46891d(0x132),_0xe4abcc(_0x87738c),_0x4f0751['exit']();}}VisuMZ[_0x46891d(0x1d1)](VisuMZ[label][_0x46891d(0x125)],_0x1f303a[_0x46891d(0x1b4)]);})(pluginData);function _0x31e2(_0x896999,_0x5e126c){const _0x77385e=_0x7738();return _0x31e2=function(_0x31e22d,_0x456764){_0x31e22d=_0x31e22d-0x118;let _0x466187=_0x77385e[_0x31e22d];return _0x466187;},_0x31e2(_0x896999,_0x5e126c);}function _0x7738(){const _0x160712=['GetArrowPolygon','ARRAYJSON','drawLabel','712370RhZtUD','drawFullGaugeEnhancedTp','toLowerCase','description','thirdstep','GetStyleData','push','flag','_statusType','filter','drawActorExpGauge','fillStyle','Gauge','fontSize','stagger','_battler','RmlGy','gaugeBackColor','drawFullGauge','halfsection','884163TNDlCf','drawVisualStyleGauge','drawVisualStyleGaugeFront','ARRAYSTRUCT','number','ARRAYEVAL','ClearTextOffset','_visualGaugeStyleOffset','normal','_tpGaugeBack','VisuMZ_2_AggroControlSystem','changeTpCustomColor','ARRAYFUNC','restore','horzStyle','GetMultiSegmentPolygon','SetLabelOffset','55oOoFaU','segmentby1000','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','map','GetQuadPolygon','exit','JSON','growth','sixthsection','valueOffsetY','ARRAYSTR','VisuMZ_0_CoreEngine','bitmap','Sprite_Gauge_drawLabel','hPQQI','fifthsection','VisuMZ_1_SkillsStatesCore','HorzStyle','setupLabelFont','gaugeHeight','drawValue','segmentby250','2765064SjPRQr','labelOffsetY','Sprite_Gauge_redraw','Bitmap_drawText','parse','GetPolygonStyle','GetGrowthPolygon','resetFontSettings','_atbGaugeSprite','_baseTexture','battlerHpStyle','includes','stroke','gaugeColor2','OjySR','_aggroGaugeSprite','match','Sprite_Gauge_setupLabelFont','setupValueFont','_tpGaugeSprite','MMVLL','tenthstep','return\x200','battlerAggroStyle','arrow','1140DFwvrW','1352004DFkTZg','drawVisualStyleGaugeRect','format','sixthstep','quad','status','NUM','eighthstep','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','fontFace','45yCoBag','drawText','vertStyle','beginPath','parameters','tenthsection','statusMpStyle','7OPxBac','strokeStyle','redraw','drawGaugeRect','VisuMZ_1_SkillsStatesCore\x20needs\x20to\x20be\x20updated\x20','name','battlerAtbStyle','aggro','segmentby500','GetDefaultPolygon','call','GetMultiSectionPolygon','Styles','ARRAYNUM','prototype','drawGaugeRectEnhancedTp','isBattlerAtbGauge','CoreEngine','mainFontSize','drawVisualStyleGaugeBack','Sprite_Gauge_setupValueFont','LabelFontMainType','GetMultiStepPolygon','Sprite_Gauge_gaugeHeight','drawActorLevel','VisualGaugeStyles','ConvertParams','VisuMZ_2_EnhancedTpSystem','labelOffsetX','length','lineTo','GetTrapezoidPolygon','STRUCT','isBattlerAggroGauge','5229ENacSS','max','VisuMZ_2_BattleSystemATB','statusAggroStyle','GetLeanPolygon','createLinearGradient','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','QsciH','statusTpStyle','time','currentMaxValue','bitmapHeight','moveTo','addColorStop','_maxValueSegment','segmentby200','gaugeRate','1305960HKjoqH','ceil','getStyleName','segmentby50','lineHeight','statusTimeStyle','fourthsection','Param','mPicA','segmentby10','gaugeColor1','Settings','fifthstep','GetStaggerPolygon','trapezoid','_context','valueOffsetX','trim','eighthsection','fill','GetFlagPolygon','lineWidth','GetGaugeHeight','EVAL','in\x20order\x20for\x20VisuMZ_3_VisualGaugeStyles\x20to\x20work.','clamp','SkillsStatesCore','levelA','34555lTIasS','VisuMZ_1_BattleCore\x20needs\x20to\x20be\x20updated\x20','segmentby25','styleName','default','statusHpStyle','TARiV','contents','floor','2212Uznzti','globalAlpha','update','version','GetDipperPolygon','VertStyle','numberFontFace','toUpperCase','STR','slant','segmentby20','vWaAm','changeTextColor','battler','Sprite_Gauge_drawValue'];_0x7738=function(){return _0x160712;};return _0x7738();}if(VisuMZ['CoreEngine'][_0x43b624(0x142)]<1.7){let text='';text+='VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20',text+=_0x43b624(0x132),alert(text),SceneManager[_0x43b624(0x17b)]();}if(VisuMZ['BattleCore'][_0x43b624(0x142)]<1.7){let text='';text+=_0x43b624(0x137),text+=_0x43b624(0x132),alert(text),SceneManager[_0x43b624(0x17b)]();}if(VisuMZ[_0x43b624(0x134)][_0x43b624(0x142)]<1.36){let text='';text+='VisuMZ_1_SkillsStatesCore\x20needs\x20to\x20be\x20updated\x20',text+=_0x43b624(0x132),alert(text),SceneManager[_0x43b624(0x17b)]();}VisuMZ['VisualGaugeStyles'][_0x43b624(0x187)]=function(){const _0x5abeb8=_0x43b624;return(VisuMZ[_0x5abeb8(0x1d0)][_0x5abeb8(0x125)][_0x5abeb8(0x173)]??'normal')[_0x5abeb8(0x153)]()[_0x5abeb8(0x12b)]();},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x144)]=function(){const _0x2e3902=_0x43b624;return(VisuMZ[_0x2e3902(0x1d0)]['Settings'][_0x2e3902(0x1b2)]??_0x2e3902(0x16d))[_0x2e3902(0x153)]()[_0x2e3902(0x12b)]();},VisuMZ['VisualGaugeStyles']['GetStyleData']=function(_0x5b541d){const _0x16a974=_0x43b624;return _0x5b541d=_0x5b541d['toLowerCase']()[_0x16a974(0x12b)](),VisuMZ['VisualGaugeStyles'][_0x16a974(0x125)][_0x16a974(0x1c3)][_0x5b541d]??{};},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x130)]=function(_0x33d602,_0x5bc945){const _0x346be7=_0x43b624,_0x27a8a8=this[_0x346be7(0x156)](_0x33d602);return _0x27a8a8['gaugeThickness']??0xc;},VisuMZ['VisualGaugeStyles'][_0x43b624(0x175)]=function(_0xf8bc6c,_0x38f89f){const _0x367dc1=_0x43b624,_0x5ea0ea=this[_0x367dc1(0x156)](_0xf8bc6c);$gameTemp['_visualGaugeStyleOffset']={'x':_0x5ea0ea[_0x367dc1(0x1d3)]??0x0,'y':_0x5ea0ea[_0x367dc1(0x18d)]??0x0};},VisuMZ[_0x43b624(0x1d0)]['SetValueOffset']=function(_0x3b442b,_0x4004de){const _0x211001=_0x43b624,_0x26f231=this[_0x211001(0x156)](_0x3b442b);$gameTemp[_0x211001(0x16c)]={'x':_0x26f231[_0x211001(0x12a)]??0x0,'y':_0x26f231['valueOffsetY']??0x0};},VisuMZ[_0x43b624(0x1d0)]['ClearTextOffset']=function(){const _0x10ab58=_0x43b624;$gameTemp[_0x10ab58(0x16c)]=undefined;},Bitmap[_0x43b624(0x1c5)]['drawVisualStyleGauge']=function(_0x49adb7,_0x5583f6,_0x1f0205,_0x3ff0fc,_0x4a7113,_0x22a54e,_0x24fb46,_0x49ca26,_0x278f15){const _0x4e88cc=_0x43b624;_0x49adb7=String(_0x49adb7)[_0x4e88cc(0x153)]()[_0x4e88cc(0x12b)]();let _0x3a16e6=VisuMZ[_0x4e88cc(0x1d0)][_0x4e88cc(0x191)](_0x49adb7,_0x5583f6,_0x1f0205,_0x3ff0fc,_0x4a7113,0x1,!![]),_0x4b59ab=VisuMZ['VisualGaugeStyles'][_0x4e88cc(0x191)](_0x49adb7,_0x5583f6,_0x1f0205,_0x3ff0fc,_0x4a7113,_0x22a54e,![]);this[_0x4e88cc(0x1ca)](_0x3a16e6,_0x24fb46);const _0xb61fd0=_0x5583f6+_0x3ff0fc,_0x1dc82a=_0x1f0205,_0xb956e8=this['_context'][_0x4e88cc(0x1de)](_0x5583f6,_0x1f0205,_0xb61fd0,_0x1dc82a);this[_0x4e88cc(0x167)](_0x4b59ab,_0x49ca26,_0x278f15,_0xb956e8);},Bitmap[_0x43b624(0x1c5)][_0x43b624(0x1ca)]=function(_0x55ca7f,_0x444343){const _0x4014ec=_0x43b624,_0x7bc9f9=this[_0x4014ec(0x129)];_0x7bc9f9['save'](),_0x7bc9f9['beginPath'](),_0x7bc9f9[_0x4014ec(0x1e5)](_0x55ca7f[0x0],_0x55ca7f[0x1]);for(var _0x2baac7=0x2;_0x2baac7<_0x55ca7f[_0x4014ec(0x1d4)];_0x2baac7+=0x2){if(_0x4014ec(0x122)===_0x4014ec(0x122))_0x7bc9f9[_0x4014ec(0x1d5)](_0x55ca7f[_0x2baac7],_0x55ca7f[_0x2baac7+0x1]);else{const _0x288fe8=_0x49e5e0(_0x1ac7e9['$1']);_0x288fe8<_0x46908e?(_0x1a5505(_0x4014ec(0x1ae)['format'](_0x2c9174,_0x288fe8,_0x56fd35)),_0x5c60c9[_0x4014ec(0x17b)]()):_0x38fcca=_0x1877fc['max'](_0x288fe8,_0x581729);}}_0x7bc9f9[_0x4014ec(0x1d5)](_0x55ca7f[0x0],_0x55ca7f[0x1]),_0x7bc9f9['strokeStyle']=_0x444343,_0x7bc9f9[_0x4014ec(0x12f)]=0x2,_0x7bc9f9[_0x4014ec(0x198)](),_0x7bc9f9[_0x4014ec(0x140)]=0xff,_0x7bc9f9[_0x4014ec(0x15c)]=_0x444343,_0x7bc9f9[_0x4014ec(0x12d)](),_0x7bc9f9[_0x4014ec(0x140)]=0x1,_0x7bc9f9['restore'](),this[_0x4014ec(0x195)][_0x4014ec(0x141)]();},Bitmap[_0x43b624(0x1c5)][_0x43b624(0x167)]=function(_0x3d7dce,_0x4ee058,_0x1c799a,_0x5294a7,_0x5b7bd9){const _0x5e8200=_0x43b624,_0x4e0918=this[_0x5e8200(0x129)];_0x5294a7[_0x5e8200(0x1e6)](0x0,_0x4ee058),_0x5294a7[_0x5e8200(0x1e6)](0x1,_0x1c799a),_0x4e0918['save'](),_0x4e0918[_0x5e8200(0x1b3)](),_0x4e0918[_0x5e8200(0x1e5)](_0x3d7dce[0x0],_0x3d7dce[0x1]);for(var _0x5d31b2=0x2;_0x5d31b2<_0x3d7dce[_0x5e8200(0x1d4)];_0x5d31b2+=0x2){_0x4e0918[_0x5e8200(0x1d5)](_0x3d7dce[_0x5d31b2],_0x3d7dce[_0x5d31b2+0x1]);}_0x4e0918[_0x5e8200(0x1d5)](_0x3d7dce[0x0],_0x3d7dce[0x1]);if(_0x5b7bd9){if('esdqD'==='YOrCE'){const _0x16764b=this[_0x5e8200(0x156)](_0x5427a3);_0x310166[_0x5e8200(0x16c)]={'x':_0x16764b['valueOffsetX']??0x0,'y':_0x16764b[_0x5e8200(0x17f)]??0x0};}else _0x4e0918['strokeStyle']=_0x5b7bd9,_0x4e0918[_0x5e8200(0x12f)]=0x2,_0x4e0918[_0x5e8200(0x198)]();}_0x4e0918['fillStyle']=_0x5294a7,_0x4e0918['fill'](),_0x4e0918[_0x5e8200(0x140)]=0x1,_0x4e0918[_0x5e8200(0x172)](),this[_0x5e8200(0x195)][_0x5e8200(0x141)]();},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x191)]=function(_0x183353,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8){const _0x13ad24=_0x43b624;_0x183353=_0x183353['toLowerCase']()['trim'](),_0x119716=_0x119716['clamp'](0x0,0x1),_0x356723+=0x1,_0x298430+=0x1,_0x2c2c6e-=0x2,_0x38a8c6-=0x2;switch(_0x183353){case'lean':return this[_0x13ad24(0x1dd)](_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716);case _0x13ad24(0x1a4):return this['GetArrowPolygon'](_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716);case _0x13ad24(0x17d):return this[_0x13ad24(0x192)](_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716);case _0x13ad24(0x15f):return this[_0x13ad24(0x127)](_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716);case'dipper':return this[_0x13ad24(0x143)](_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716);case _0x13ad24(0x1aa):return this[_0x13ad24(0x17a)](_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716);case _0x13ad24(0x128):return this[_0x13ad24(0x1d6)](_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716);case _0x13ad24(0x158):return this[_0x13ad24(0x12e)](_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716);case'halfstep':return this[_0x13ad24(0x1cd)](0x2,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716);case _0x13ad24(0x155):return this[_0x13ad24(0x1cd)](0x3,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716);case'fourthstep':return this[_0x13ad24(0x1cd)](0x4,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716);case _0x13ad24(0x126):return this[_0x13ad24(0x1cd)](0x5,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716);case _0x13ad24(0x1a9):return this[_0x13ad24(0x1cd)](0x6,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716);case _0x13ad24(0x1ad):return this['GetMultiStepPolygon'](0x8,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716);case _0x13ad24(0x1a1):return this['GetMultiStepPolygon'](0xa,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716);case _0x13ad24(0x164):return this[_0x13ad24(0x1c2)](0x2,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8);case'thirdsection':return this['GetMultiSectionPolygon'](0x3,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8);case _0x13ad24(0x120):return this[_0x13ad24(0x1c2)](0x4,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8);case _0x13ad24(0x185):return this[_0x13ad24(0x1c2)](0x5,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8);case _0x13ad24(0x17e):return this[_0x13ad24(0x1c2)](0x6,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8);case _0x13ad24(0x12c):return this[_0x13ad24(0x1c2)](0x8,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8);case _0x13ad24(0x1b5):return this[_0x13ad24(0x1c2)](0xa,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8);case _0x13ad24(0x123):return this[_0x13ad24(0x174)](0xa,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8);case _0x13ad24(0x149):return this[_0x13ad24(0x174)](0x14,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8);case _0x13ad24(0x138):return this[_0x13ad24(0x174)](0x19,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8);case _0x13ad24(0x11d):return this[_0x13ad24(0x174)](0x32,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8);case'segmentby100':return this[_0x13ad24(0x174)](0x64,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8);case _0x13ad24(0x118):return this['GetMultiSegmentPolygon'](0xc8,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8);case _0x13ad24(0x18b):return this['GetMultiSegmentPolygon'](0xfa,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8);case _0x13ad24(0x1bf):return this[_0x13ad24(0x174)](0x1f4,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8);case _0x13ad24(0x177):return this[_0x13ad24(0x174)](0x3e8,_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716,_0x24ebb8);default:return this[_0x13ad24(0x1c0)](_0x356723,_0x298430,_0x2c2c6e,_0x38a8c6,_0x119716);};},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x1c0)]=function(_0x1ef5b5,_0x2a497d,_0x560679,_0x3d511a,_0xc19068){const _0x253630=_0x43b624,_0xfed99a=_0x3d511a;return _0x560679=Math[_0x253630(0x13e)](_0x560679*_0xc19068),[_0x1ef5b5,_0x2a497d,_0x1ef5b5+_0x560679,_0x2a497d,_0x1ef5b5+_0x560679,_0x2a497d+_0x3d511a,_0x1ef5b5,_0x2a497d+_0x3d511a];},VisuMZ[_0x43b624(0x1d0)]['GetLeanPolygon']=function(_0x3c2e34,_0xc0d29f,_0x922431,_0x6db131,_0x627d43){const _0x5b255c=_0x43b624,_0x35d7af=[],_0x4678c7=Math['ceil'](_0x6db131/0x3);if(_0x922431<_0x4678c7*0x2)return this[_0x5b255c(0x1c0)](_0x3c2e34,_0xc0d29f,_0x922431,_0x6db131,_0x627d43);return _0x922431=Math[_0x5b255c(0x13e)]((_0x922431-_0x4678c7)*_0x627d43),_0x35d7af[_0x5b255c(0x157)](_0x3c2e34+_0x4678c7,_0xc0d29f),(_0x35d7af[_0x5b255c(0x157)](_0x3c2e34+_0x4678c7+_0x922431,_0xc0d29f),_0x35d7af[_0x5b255c(0x157)](_0x3c2e34+_0x922431,_0xc0d29f+_0x6db131),_0x35d7af['push'](_0x3c2e34,_0xc0d29f+_0x6db131)),_0x35d7af;},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x14e)]=function(_0x48fc77,_0x2e1e41,_0x55e442,_0x3d3e14,_0x33a0f6){const _0x2f2f8c=_0x43b624,_0x54ec8e=[],_0x1552fe=Math['ceil'](_0x3d3e14/0x3);if(_0x55e442<_0x1552fe*0x2)return this['GetDefaultPolygon'](_0x48fc77,_0x2e1e41,_0x55e442,_0x3d3e14,_0x33a0f6);return _0x55e442=Math[_0x2f2f8c(0x13e)]((_0x55e442-_0x1552fe)*_0x33a0f6),_0x54ec8e[_0x2f2f8c(0x157)](_0x48fc77,_0x2e1e41),_0x54ec8e['push'](_0x48fc77+_0x55e442,_0x2e1e41),_0x54ec8e['push'](_0x48fc77+_0x55e442+_0x1552fe,_0x2e1e41+_0x3d3e14/0x2),_0x54ec8e[_0x2f2f8c(0x157)](_0x48fc77+_0x55e442,_0x2e1e41+_0x3d3e14),_0x54ec8e[_0x2f2f8c(0x157)](_0x48fc77,_0x2e1e41+_0x3d3e14),_0x54ec8e['push'](_0x48fc77+_0x1552fe,_0x2e1e41+_0x3d3e14/0x2),_0x54ec8e;},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x192)]=function(_0x41f9e3,_0x50ae88,_0x1a041e,_0x2a00a6,_0x3165ce){const _0x78b129=_0x43b624,_0x58420a=[],_0x194e58=Math[_0x78b129(0x11b)](_0x2a00a6/0x2);if(_0x1a041e<_0x194e58*0x2)return this[_0x78b129(0x1c0)](_0x41f9e3,_0x50ae88,_0x1a041e,_0x2a00a6,_0x3165ce);return _0x1a041e=Math[_0x78b129(0x13e)](_0x1a041e*_0x3165ce),hr=Math[_0x78b129(0x13e)](_0x2a00a6*_0x3165ce),_0x58420a[_0x78b129(0x157)](_0x41f9e3,_0x50ae88+_0x2a00a6),_0x58420a['push'](_0x41f9e3+_0x1a041e,_0x50ae88+_0x2a00a6-hr),_0x58420a[_0x78b129(0x157)](_0x41f9e3+Math['max'](_0x1a041e-_0x194e58*_0x3165ce,0x0),_0x50ae88+_0x2a00a6),_0x58420a;},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x127)]=function(_0x3b78f4,_0x3f445a,_0x4f627d,_0x3ef275,_0xb40394){const _0x4569b3=_0x43b624,_0x57e21e=[],_0x2d0fea=Math[_0x4569b3(0x11b)](_0x3ef275/0x2),_0x392f62=_0x2d0fea/0x2;if(_0x4f627d<_0x2d0fea*0x2)return this[_0x4569b3(0x1c0)](_0x3b78f4,_0x3f445a,_0x4f627d,_0x3ef275,_0xb40394);_0x4f627d-=_0x2d0fea;const _0x302108=_0x4f627d/0x3;_0x4f627d=Math[_0x4569b3(0x13e)](_0x4f627d*_0xb40394),_0x57e21e[_0x4569b3(0x157)](_0x3b78f4+_0x392f62,_0x3f445a+_0x3ef275/0x2);if(_0xb40394<0x1/0x3){if(_0x4569b3(0x14a)==='vWaAm')_0x57e21e['push'](_0x3b78f4+_0x392f62+_0x4f627d,_0x3f445a+_0x3ef275/0x2);else{if(_0x2d97f7[_0x4569b3(0x1d2)]&&this['_statusType']==='tp'&&this['_tpGaugeSprite'])this['drawGaugeRectEnhancedTp'](_0x4b13fb,_0x658138,_0x88442,_0x4972e1);else{const _0x436fc3=this[_0x4569b3(0x124)](),_0x1ee775=this[_0x4569b3(0x199)]();this['drawVisualStyleGaugeRect'](_0x436fc3,_0x1ee775,_0x267721,_0x4ff7a5,_0x2f5c99,_0x25b02a);}}}else _0x57e21e[_0x4569b3(0x157)](_0x3b78f4+_0x302108+_0x392f62,_0x3f445a+_0x3ef275/0x2),_0x57e21e[_0x4569b3(0x157)](_0x3b78f4+_0x302108+_0x2d0fea,_0x3f445a),_0x57e21e[_0x4569b3(0x157)](_0x3b78f4+_0x4f627d+_0x2d0fea,_0x3f445a);return _0x57e21e[_0x4569b3(0x157)](_0x3b78f4+_0x4f627d,_0x3f445a+_0x3ef275),_0x57e21e[_0x4569b3(0x157)](_0x3b78f4,_0x3f445a+_0x3ef275),_0x57e21e;},VisuMZ['VisualGaugeStyles'][_0x43b624(0x143)]=function(_0x1b81ea,_0x180d17,_0x2962f2,_0x30e921,_0x5a4fda){const _0x4d9f4f=_0x43b624,_0x35c82a=[],_0x29d59f=0x1e;if(_0x2962f2<_0x29d59f*0x2)return;_0x2962f2-=_0x29d59f,_0x2962f2=Math[_0x4d9f4f(0x13e)](_0x2962f2*_0x5a4fda);const _0x1f361e=_0x30e921/0x2;return _0x35c82a['push'](_0x1b81ea,_0x180d17+_0x1f361e),_0x35c82a['push'](_0x1b81ea+_0x2962f2+_0x29d59f*_0x5a4fda,_0x180d17+(_0x1f361e-_0x1f361e*_0x5a4fda)),_0x35c82a['push'](_0x1b81ea+_0x2962f2,_0x180d17+(_0x1f361e+_0x1f361e*_0x5a4fda)),_0x35c82a;},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x17a)]=function(_0x2d1ec9,_0xc72814,_0x5dea91,_0x1a78c5,_0x4bf4e9){const _0x41fa43=_0x43b624,_0x57ad1f=[],_0x4249ab=_0x1a78c5;_0x5dea91-=_0x4249ab,_0x5dea91=Math[_0x41fa43(0x13e)](_0x5dea91*_0x4bf4e9);const _0x437d82=_0x1a78c5/0x2;return _0x57ad1f['push'](_0x2d1ec9,_0xc72814+_0x437d82),_0x57ad1f['push'](_0x2d1ec9+_0x4249ab*_0x4bf4e9+_0x5dea91,_0xc72814+(_0x437d82-_0x437d82*_0x4bf4e9)),_0x57ad1f[_0x41fa43(0x157)](_0x2d1ec9+_0x4249ab/0x2+_0x5dea91,_0xc72814+_0x1a78c5),_0x57ad1f[_0x41fa43(0x157)](_0x2d1ec9+_0x4249ab/0x2,_0xc72814+_0x1a78c5),_0x57ad1f;},VisuMZ['VisualGaugeStyles'][_0x43b624(0x1d6)]=function(_0x941a6c,_0x287aca,_0x36132e,_0x29a61b,_0x55d859){const _0x95dbb2=_0x43b624,_0x213d86=[],_0x99d144=Math['ceil'](_0x29a61b/0x2),_0xcaee0e=Math[_0x95dbb2(0x13e)](_0x36132e*_0x55d859);return _0x36132e-=_0x99d144*0x2,_0x36132e=Math['floor'](_0x36132e*_0x55d859),_0x213d86[_0x95dbb2(0x157)](_0x941a6c+_0x99d144,_0x287aca),_0x213d86[_0x95dbb2(0x157)](_0x941a6c+_0x99d144+_0x36132e,_0x287aca),_0x213d86[_0x95dbb2(0x157)](_0x941a6c+_0xcaee0e,_0x287aca+_0x29a61b),_0x213d86[_0x95dbb2(0x157)](_0x941a6c,_0x287aca+_0x29a61b),_0x213d86;},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x12e)]=function(_0x5af776,_0x1697f4,_0x23aaef,_0x411683,_0xa1ec55){const _0x4908cb=_0x43b624,_0x500a80=[],_0x453a60=Math[_0x4908cb(0x11b)](_0x411683/0x3);_0x23aaef=Math['floor'](_0x23aaef*_0xa1ec55);const _0x16638e=Math['max'](_0x23aaef-_0x453a60,0x0);return _0x500a80[_0x4908cb(0x157)](_0x5af776,_0x1697f4),_0x500a80[_0x4908cb(0x157)](_0x5af776+_0x16638e,_0x1697f4),_0x500a80[_0x4908cb(0x157)](_0x5af776+_0x23aaef,_0x1697f4+_0x411683/0x2),_0x500a80[_0x4908cb(0x157)](_0x5af776+_0x16638e,_0x1697f4+_0x411683),_0x500a80[_0x4908cb(0x157)](_0x5af776,_0x1697f4+_0x411683),_0x500a80;},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x1cd)]=function(_0x191cd3,_0x21806e,_0x4360e4,_0x8f234d,_0x3ea063,_0x5c17f6){const _0x24c96b=_0x43b624,_0x29d20b=[],_0x26d64e=Math['ceil'](_0x3ea063/0x2);if(_0x8f234d<_0x26d64e*0x2)return this[_0x24c96b(0x1c0)](_0x21806e,_0x4360e4,_0x8f234d,_0x3ea063,_0x5c17f6);_0x8f234d-=_0x26d64e;const _0x3ac006=_0x8f234d;_0x8f234d=Math[_0x24c96b(0x13e)](_0x8f234d*_0x5c17f6);let _0x26aae6=0x1;_0x29d20b['push'](_0x21806e+_0x26d64e*_0x26aae6/_0x191cd3,_0x4360e4+_0x3ea063*(_0x191cd3-_0x26aae6)/_0x191cd3);while(_0x26aae6<=_0x191cd3){if(_0x5c17f6<=_0x26aae6/_0x191cd3){if(_0x24c96b(0x19a)===_0x24c96b(0x19a)){_0x29d20b[_0x24c96b(0x157)](_0x21806e+_0x26d64e*_0x26aae6/_0x191cd3+_0x8f234d,_0x4360e4+_0x3ea063*(_0x191cd3-_0x26aae6)/_0x191cd3);break;}else{let _0x5b77ea='';_0x5b77ea+='VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20',_0x5b77ea+=_0x24c96b(0x132),_0x13f284(_0x5b77ea),_0x1dd6b6[_0x24c96b(0x17b)]();}}_0x29d20b[_0x24c96b(0x157)](_0x21806e+_0x26d64e*_0x26aae6/_0x191cd3+_0x3ac006*(_0x26aae6/_0x191cd3),_0x4360e4+_0x3ea063*(_0x191cd3-_0x26aae6)/_0x191cd3),_0x26aae6+=0x1,_0x29d20b['push'](_0x21806e+_0x26d64e*_0x26aae6/_0x191cd3+_0x3ac006*((_0x26aae6-0x1)/_0x191cd3),_0x4360e4+_0x3ea063*(_0x191cd3-_0x26aae6)/_0x191cd3);}return _0x29d20b[_0x24c96b(0x157)](_0x21806e+_0x8f234d,_0x4360e4+_0x3ea063),_0x29d20b[_0x24c96b(0x157)](_0x21806e,_0x4360e4+_0x3ea063),_0x29d20b;},VisuMZ['VisualGaugeStyles'][_0x43b624(0x1c2)]=function(_0x3f67f4,_0xa2176c,_0x58a4e2,_0x1ed4d7,_0x2010e1,_0x2cf790,_0x3402f2){const _0x1dae4e=_0x43b624,_0x2f89d2=[],_0x33485a=_0x1ed4d7,_0x16da6e=_0x2010e1*0.99;_0x1ed4d7=Math[_0x1dae4e(0x13e)](_0x1ed4d7*_0x2cf790),_0x2f89d2[_0x1dae4e(0x157)](_0xa2176c,_0x58a4e2);const _0x189af6=_0x33485a/_0x3f67f4,_0x1a52ff=0x1/_0x3f67f4,_0x49ae5c=0.5;let _0x2b79e5=0x1;while(_0x2b79e5<=_0x3f67f4){if(_0x2cf790<=_0x1a52ff*_0x2b79e5||_0x3402f2){_0x2f89d2[_0x1dae4e(0x157)](_0xa2176c+_0x1ed4d7,_0x58a4e2);break;}_0x2f89d2[_0x1dae4e(0x157)](_0xa2176c+_0x189af6*_0x2b79e5,_0x58a4e2),_0x2f89d2[_0x1dae4e(0x157)](_0xa2176c+_0x189af6*_0x2b79e5,_0x58a4e2+_0x16da6e);if(_0x1ed4d7<=_0xa2176c+_0x189af6*_0x2b79e5+_0x49ae5c){_0x2f89d2[_0x1dae4e(0x157)](_0xa2176c+_0x1ed4d7,_0x58a4e2+_0x16da6e);break;}_0x2f89d2[_0x1dae4e(0x157)](_0xa2176c+_0x189af6*_0x2b79e5+_0x49ae5c,_0x58a4e2+_0x16da6e),_0x2f89d2[_0x1dae4e(0x157)](_0xa2176c+_0x189af6*_0x2b79e5+_0x49ae5c,_0x58a4e2),_0x2b79e5+=0x1;}return _0x2f89d2[_0x1dae4e(0x157)](_0xa2176c+_0x1ed4d7,_0x58a4e2+_0x2010e1),_0x2f89d2[_0x1dae4e(0x157)](_0xa2176c,_0x58a4e2+_0x2010e1),_0x2f89d2;},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x174)]=function(_0x5da40,_0x232078,_0x4d920d,_0x4597fa,_0x265510,_0x2d4514,_0x1fe66f){const _0x3261e0=_0x43b624,_0x475b86=[],_0x13ad13=_0x4597fa,_0x236880=_0x265510*0.99;_0x4597fa=Math[_0x3261e0(0x13e)](_0x4597fa*_0x2d4514),_0x475b86[_0x3261e0(0x157)](_0x232078,_0x4d920d);const _0x5f2244=Math['max']((this['_maxValueSegment']||0x64)/_0x5da40,0x1),_0x303e5f=_0x13ad13/_0x5f2244,_0x587261=0x1/_0x5f2244,_0x5bc45d=0.5;let _0x2fb923=0x1;while(_0x2fb923<=_0x5f2244){if(_0x2d4514<=_0x587261*_0x2fb923||_0x1fe66f){if(_0x3261e0(0x1a0)===_0x3261e0(0x1a0)){_0x475b86[_0x3261e0(0x157)](_0x232078+_0x4597fa,_0x4d920d);break;}else _0xff0a82[_0x3261e0(0x1b8)]=_0x363202,_0x3c5569['lineWidth']=0x2,_0x4cab93['stroke']();}_0x475b86['push'](_0x232078+_0x303e5f*_0x2fb923,_0x4d920d),_0x475b86[_0x3261e0(0x157)](_0x232078+_0x303e5f*_0x2fb923,_0x4d920d+_0x236880);if(_0x4597fa<=_0x232078+_0x303e5f*_0x2fb923+_0x5bc45d){_0x475b86[_0x3261e0(0x157)](_0x232078+_0x4597fa,_0x4d920d+_0x236880);break;}_0x475b86[_0x3261e0(0x157)](_0x232078+_0x303e5f*_0x2fb923+_0x5bc45d,_0x4d920d+_0x236880),_0x475b86[_0x3261e0(0x157)](_0x232078+_0x303e5f*_0x2fb923+_0x5bc45d,_0x4d920d),_0x2fb923+=0x1;if(_0x2fb923>_0x5f2244){if(_0x3261e0(0x161)===_0x3261e0(0x184)){const _0x55ea62=[],_0x39d43c=_0x492661['ceil'](_0x41b7a8/0x3);if(_0x321b8c<_0x39d43c*0x2)return this[_0x3261e0(0x1c0)](_0x29c2a2,_0x55814e,_0x5c4802,_0x181ad6,_0x33ca79);return _0x5d3742=_0x223d50['floor']((_0x41945b-_0x39d43c)*_0x8aea08),_0x55ea62[_0x3261e0(0x157)](_0x215688,_0x16637c),_0x55ea62[_0x3261e0(0x157)](_0x27ef30+_0x3f288d,_0x92a81b),_0x55ea62[_0x3261e0(0x157)](_0x47a6f2+_0x51a17e+_0x39d43c,_0x20fc3d+_0x28ab12/0x2),_0x55ea62['push'](_0x559681+_0x137998,_0x377d46+_0x3b395a),_0x55ea62[_0x3261e0(0x157)](_0x795196,_0xdec963+_0x378134),_0x55ea62[_0x3261e0(0x157)](_0x41027c+_0x39d43c,_0x4768d0+_0x394295/0x2),_0x55ea62;}else{_0x475b86['push'](_0x232078+_0x4597fa,_0x4d920d);break;}}}return _0x475b86[_0x3261e0(0x157)](_0x232078+_0x4597fa,_0x4d920d+_0x265510),_0x475b86[_0x3261e0(0x157)](_0x232078,_0x4d920d+_0x265510),_0x475b86;},Sprite_Gauge[_0x43b624(0x1c5)][_0x43b624(0x139)]=function(){const _0x3d886a=_0x43b624;if(!this[_0x3d886a(0x160)])return VisuMZ[_0x3d886a(0x1d0)][_0x3d886a(0x187)]();const _0x4a35d3=this[_0x3d886a(0x11c)]()[_0x3d886a(0x153)]()[_0x3d886a(0x12b)]();if(_0x4a35d3===_0x3d886a(0x13a))return VisuMZ[_0x3d886a(0x1d0)][_0x3d886a(0x187)]();return _0x4a35d3;},Sprite_Gauge[_0x43b624(0x1c5)][_0x43b624(0x11c)]=function(){const _0xbce358=_0x43b624,_0x50127b=VisuMZ['VisualGaugeStyles']['Settings'];switch(this[_0xbce358(0x159)]){case'hp':return _0x50127b[_0xbce358(0x13b)]??_0xbce358(0x15f);case'mp':return _0x50127b[_0xbce358(0x1b6)]??'stagger';case'tp':return _0x50127b[_0xbce358(0x1e1)]??_0xbce358(0x15f);case _0xbce358(0x1e2):return this[_0xbce358(0x1c7)]()?_0x50127b[_0xbce358(0x1bd)]??'slant':_0x50127b[_0xbce358(0x11f)]??'slant';case _0xbce358(0x1be):if(this['isBattlerAggroGauge']()){if(_0xbce358(0x1e0)!==_0xbce358(0x1e0))_0x6901ef[_0xbce358(0x1d0)][_0xbce358(0x183)]['call'](this),_0x40ffd6[_0xbce358(0x1d0)][_0xbce358(0x16b)]();else return _0x50127b[_0xbce358(0x1a3)]??_0xbce358(0x148);}else return _0x50127b[_0xbce358(0x1dc)]??'slant';}return VisuMZ[_0xbce358(0x1d0)][_0xbce358(0x187)]();},Sprite_Gauge[_0x43b624(0x1c5)][_0x43b624(0x1ba)]=function(_0x163fca,_0x2dbfd9,_0x131300,_0x4de327){const _0x4b3ed3=_0x43b624;if(Imported[_0x4b3ed3(0x1d2)]&&this[_0x4b3ed3(0x159)]==='tp'&&this[_0x4b3ed3(0x19f)])this[_0x4b3ed3(0x1c6)](_0x163fca,_0x2dbfd9,_0x131300,_0x4de327);else{const _0x4e0689=this['gaugeColor1'](),_0x1c437e=this[_0x4b3ed3(0x199)]();this[_0x4b3ed3(0x1a7)](_0x4e0689,_0x1c437e,_0x163fca,_0x2dbfd9,_0x131300,_0x4de327);}},Sprite_Gauge[_0x43b624(0x1c5)][_0x43b624(0x163)]=function(_0x44125f,_0x3035b8,_0x109f51,_0x735c41,_0x122598,_0x43d54e){const _0x101f4e=_0x43b624;Imported[_0x101f4e(0x1d2)]&&this[_0x101f4e(0x159)]==='tp'&&this[_0x101f4e(0x19f)]?this['drawFullGaugeEnhancedTp'](_0x44125f,_0x3035b8,_0x109f51,_0x735c41,_0x122598,_0x43d54e):this[_0x101f4e(0x1a7)](_0x44125f,_0x3035b8,_0x109f51,_0x735c41,_0x122598,_0x43d54e);},Sprite_Gauge[_0x43b624(0x1c5)][_0x43b624(0x1a7)]=function(_0x502733,_0x4ae1b8,_0x36c39b,_0x357f0b,_0x437401,_0x27980d){const _0x500616=_0x43b624,_0x211029=this[_0x500616(0x139)](),_0x271050=this[_0x500616(0x119)](),_0x5e84b2=this[_0x500616(0x162)]();VisuMZ[_0x500616(0x1d0)]['_maxValueSegment']=this[_0x500616(0x1e3)]()||0x64,this[_0x500616(0x182)]['drawVisualStyleGauge'](_0x211029,_0x36c39b,_0x357f0b,_0x437401,_0x27980d,_0x271050,_0x5e84b2,_0x502733,_0x4ae1b8);},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x1ce)]=Sprite_Gauge[_0x43b624(0x1c5)][_0x43b624(0x189)],Sprite_Gauge[_0x43b624(0x1c5)]['gaugeHeight']=function(){const _0x12adb4=_0x43b624,_0x365d1e=this[_0x12adb4(0x139)]();return(VisuMZ[_0x12adb4(0x1d0)][_0x12adb4(0x130)](_0x365d1e)??0xc)[_0x12adb4(0x133)](0x1,this[_0x12adb4(0x1e4)]());},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x19d)]=Sprite_Gauge[_0x43b624(0x1c5)][_0x43b624(0x188)],Sprite_Gauge[_0x43b624(0x1c5)]['setupLabelFont']=function(){const _0x53bf66=_0x43b624;VisuMZ[_0x53bf66(0x1d0)][_0x53bf66(0x19d)][_0x53bf66(0x1c1)](this),VisuMZ[_0x53bf66(0x1d0)][_0x53bf66(0x175)](this[_0x53bf66(0x139)]());},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x183)]=Sprite_Gauge['prototype'][_0x43b624(0x150)],Sprite_Gauge['prototype']['drawLabel']=function(){const _0x30b23c=_0x43b624;VisuMZ[_0x30b23c(0x1d0)][_0x30b23c(0x183)][_0x30b23c(0x1c1)](this),VisuMZ[_0x30b23c(0x1d0)][_0x30b23c(0x16b)]();},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x1cb)]=Sprite_Gauge[_0x43b624(0x1c5)][_0x43b624(0x19e)],Sprite_Gauge[_0x43b624(0x1c5)][_0x43b624(0x19e)]=function(){const _0x4883ba=_0x43b624;VisuMZ[_0x4883ba(0x1d0)][_0x4883ba(0x1cb)][_0x4883ba(0x1c1)](this),VisuMZ['VisualGaugeStyles']['SetValueOffset'](this[_0x4883ba(0x139)]());},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x14d)]=Sprite_Gauge[_0x43b624(0x1c5)][_0x43b624(0x18a)],Sprite_Gauge['prototype']['drawValue']=function(){const _0x3c6c68=_0x43b624;VisuMZ['VisualGaugeStyles']['Sprite_Gauge_drawValue'][_0x3c6c68(0x1c1)](this),VisuMZ[_0x3c6c68(0x1d0)][_0x3c6c68(0x16b)]();},VisuMZ[_0x43b624(0x1d0)][_0x43b624(0x18e)]=Sprite_Gauge['prototype']['redraw'],Sprite_Gauge[_0x43b624(0x1c5)][_0x43b624(0x1b9)]=function(){const _0x11ce55=_0x43b624;VisuMZ[_0x11ce55(0x1d0)][_0x11ce55(0x18e)][_0x11ce55(0x1c1)](this),VisuMZ['VisualGaugeStyles'][_0x11ce55(0x16b)]();},VisuMZ[_0x43b624(0x1d0)]['Bitmap_drawText']=Bitmap['prototype'][_0x43b624(0x1b1)],Bitmap['prototype'][_0x43b624(0x1b1)]=function(_0x4b6ab,_0x5a3b82,_0x107ca0,_0x218648,_0x32db44,_0x269dc9){const _0x1d0bd9=_0x43b624;$gameTemp&&$gameTemp[_0x1d0bd9(0x16c)]&&(_0x5a3b82+=$gameTemp['_visualGaugeStyleOffset']['x'],_0x107ca0+=$gameTemp[_0x1d0bd9(0x16c)]['y']),VisuMZ['VisualGaugeStyles'][_0x1d0bd9(0x18f)][_0x1d0bd9(0x1c1)](this,_0x4b6ab,_0x5a3b82,_0x107ca0,_0x218648,_0x32db44,_0x269dc9);},Sprite_HpGauge[_0x43b624(0x1c5)]['gaugeHeight']=function(){const _0xc46a75=_0x43b624;return VisuMZ['VisualGaugeStyles'][_0xc46a75(0x1ce)][_0xc46a75(0x1c1)](this);},Sprite_HpGauge['prototype'][_0x43b624(0x11c)]=function(){const _0x346087=_0x43b624,_0x308687=VisuMZ[_0x346087(0x1d0)][_0x346087(0x125)];return _0x308687[_0x346087(0x196)]??_0x346087(0x16d);},Sprite_Gauge[_0x43b624(0x1c5)][_0x43b624(0x1c7)]=function(){const _0x55532d=_0x43b624;if(!Imported[_0x55532d(0x1db)])return![];if(!this[_0x55532d(0x160)])return![];if(!this[_0x55532d(0x160)][_0x55532d(0x14c)]())return![];return this===this[_0x55532d(0x160)][_0x55532d(0x14c)]()[_0x55532d(0x194)];},Sprite_Gauge[_0x43b624(0x1c5)][_0x43b624(0x1d8)]=function(){const _0x13c545=_0x43b624;if(!Imported[_0x13c545(0x16f)])return![];if(!this[_0x13c545(0x160)])return![];if(!this['_battler']['battler']())return![];return this===this[_0x13c545(0x160)][_0x13c545(0x14c)]()[_0x13c545(0x19b)];},Sprite_Gauge[_0x43b624(0x1c5)][_0x43b624(0x1c6)]=function(_0xd3fe6f,_0x335f38,_0x5247d6,_0x1ab0b0){const _0x50dc73=_0x43b624,_0x2e90fe=this['changeTpCustomColor'](this[_0x50dc73(0x124)](),0x1),_0x1c78f2=this[_0x50dc73(0x170)](this[_0x50dc73(0x199)](),0x2);this[_0x50dc73(0x152)](_0x2e90fe,_0x1c78f2,_0xd3fe6f,_0x335f38,_0x5247d6,_0x1ab0b0);},Sprite_Gauge[_0x43b624(0x1c5)][_0x43b624(0x152)]=function(_0x5580a9,_0x12498c,_0x4f9f40,_0xf1559f,_0xa2241b,_0xd983d6){const _0x1d20f9=_0x43b624;this['createTpGaugeBitmaps'](!![]),_0x5580a9=this[_0x1d20f9(0x170)](this[_0x1d20f9(0x124)](),0x1),_0x12498c=this[_0x1d20f9(0x170)](this['gaugeColor2'](),0x2);const _0x1afa6e=this[_0x1d20f9(0x139)](),_0x36b78c=this[_0x1d20f9(0x119)](),_0x31aff7=this[_0x1d20f9(0x162)](),_0x226c0e=VisuMZ[_0x1d20f9(0x1d0)][_0x1d20f9(0x191)](_0x1afa6e,_0x4f9f40,_0xf1559f,_0xa2241b,_0xd983d6,0x1,!![]);VisuMZ[_0x1d20f9(0x1d0)][_0x1d20f9(0x1e7)]=this[_0x1d20f9(0x1e3)]()||0x64,this[_0x1d20f9(0x16e)][_0x1d20f9(0x182)][_0x1d20f9(0x1ca)](_0x226c0e,_0x31aff7);const _0x2da2c1=VisuMZ['VisualGaugeStyles'][_0x1d20f9(0x191)](_0x1afa6e,_0x4f9f40,_0xf1559f,_0xa2241b,_0xd983d6,_0x36b78c,![]),_0x46518c=this['_tpGaugeSprite'][_0x1d20f9(0x182)]['_context'][_0x1d20f9(0x1de)](_0x4f9f40,_0xf1559f,_0x4f9f40+_0xa2241b,_0xf1559f);VisuMZ[_0x1d20f9(0x1d0)][_0x1d20f9(0x1e7)]=this[_0x1d20f9(0x1e3)]()||0x64,this[_0x1d20f9(0x19f)]['bitmap']['drawVisualStyleGaugeFront'](_0x2da2c1,_0x5580a9,_0x12498c,_0x46518c);},Window_Base[_0x43b624(0x1c5)]['drawGauge']=function(_0x5db993,_0x5c8118,_0x5e023e,_0x2b38d6,_0x26bf5c,_0x4b3764){const _0x22967f=_0x43b624,_0x276d43=VisuMZ[_0x22967f(0x1d0)][_0x22967f(0x187)](),_0x5a97d9=(VisuMZ[_0x22967f(0x1d0)]['GetGaugeHeight'](_0x276d43)??0xc)[_0x22967f(0x133)](0x1,0x20),_0x52ab05=_0x5c8118+this[_0x22967f(0x11e)]()-_0x5a97d9-0x2,_0x16c3b6=ColorManager[_0x22967f(0x162)]();VisuMZ[_0x22967f(0x1d0)][_0x22967f(0x1e7)]=0x64,this[_0x22967f(0x13d)][_0x22967f(0x166)](_0x276d43,_0x5db993,_0x52ab05,_0x5e023e,_0x5a97d9,_0x2b38d6,_0x16c3b6,_0x26bf5c,_0x4b3764);},Window_StatusBase[_0x43b624(0x1c5)][_0x43b624(0x1cf)]=function(_0x232fd6,_0x5ab42f,_0x22b59b){const _0x51a55f=_0x43b624;if(VisuMZ[_0x51a55f(0x1c8)][_0x51a55f(0x125)][_0x51a55f(0x121)]['ShowActorLevel']===![])return;if(this['isExpGaugeDrawn']())this[_0x51a55f(0x15b)](_0x232fd6,_0x5ab42f,_0x22b59b);this[_0x51a55f(0x193)]();const _0x2e2936=VisuMZ[_0x51a55f(0x1d0)][_0x51a55f(0x187)](),_0x263ffb=VisuMZ[_0x51a55f(0x134)]['Settings'][_0x51a55f(0x15d)],_0x3f6e8f=_0x263ffb['MatchLabelColor']?ColorManager['expGaugeColor2']():ColorManager['systemColor']();this[_0x51a55f(0x14b)](_0x3f6e8f),_0x263ffb[_0x51a55f(0x1cc)]===_0x51a55f(0x169)&&(this[_0x51a55f(0x13d)][_0x51a55f(0x1af)]=$gameSystem[_0x51a55f(0x145)](),this[_0x51a55f(0x13d)][_0x51a55f(0x15e)]=$gameSystem[_0x51a55f(0x1c9)]()),VisuMZ[_0x51a55f(0x1d0)][_0x51a55f(0x175)](_0x2e2936),this[_0x51a55f(0x1b1)](TextManager[_0x51a55f(0x135)],_0x5ab42f,_0x22b59b,0x30),this['resetFontSettings'](),VisuMZ['VisualGaugeStyles']['SetValueOffset'](_0x2e2936),this[_0x51a55f(0x1b1)](_0x232fd6['level'],_0x5ab42f+0x54,_0x22b59b,0x24,'right'),this[_0x51a55f(0x193)](),VisuMZ[_0x51a55f(0x1d0)][_0x51a55f(0x16b)]();};