(function(exports,plugin,storage,assets,components,common,ui,_vendetta,metro,toasts,patcher$1,utils,plugins){"use strict";var _findByProps,_findByProps1,_findByProps2,_findByProps3,_findByProps4;const ThemeStore=metro.findByStoreName("ThemeStore");metro.findByProps("triggerHaptic");const colorModule=metro.findByProps("colors","unsafe_rawColors"),colorResolver=colorModule?.internal??colorModule?.meta,TextStyleSheet=metro.findByProps("TextStyleSheet").TextStyleSheet;((_findByProps=metro.findByProps("ActionSheet"))===null||_findByProps===void 0?void 0:_findByProps.ActionSheet)??metro.find(function(x){var _x_render;return((_x_render=x.render)===null||_x_render===void 0?void 0:_x_render.name)==="ActionSheet"}),metro.findByProps("openLazy","hideActionSheet"),metro.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer"),(_findByProps1=metro.findByProps("ActionSheetRow"))===null||_findByProps1===void 0||_findByProps1.ActionSheetRow,metro.findByName("Navigator")??((_findByProps2=metro.findByProps("Navigator"))===null||_findByProps2===void 0||_findByProps2.Navigator),((_findByProps3=metro.findByProps("getRenderCloseButton"))===null||_findByProps3===void 0?void 0:_findByProps3.getRenderCloseButton)??((_findByProps4=metro.findByProps("getHeaderCloseButton"))===null||_findByProps4===void 0||_findByProps4.getHeaderCloseButton),metro.findByProps("popModal","pushModal");function resolveSemanticColor(color){let theme=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ThemeStore.theme;return colorResolver.resolveSemanticColor(theme,color)}const{Text:_Text}=components.General;function Text(param){let{variant,lineClamp,color,align,style,onPress,getChildren,children,liveUpdate}=param;const[_,forceUpdate]=common.React.useReducer(function(x){return~x},0);return common.React.useEffect(function(){if(!liveUpdate)return;const nextSecond=new Date().setMilliseconds(1e3);let interval;const timeout=setTimeout(function(){forceUpdate(),interval=setInterval(forceUpdate,1e3)},nextSecond-Date.now());return function(){clearTimeout(timeout),clearInterval(interval)}},[]),common.React.createElement(_Text,{style:[variant?TextStyleSheet[variant]:{},color?{color:resolveSemanticColor(ui.semanticColors[color])}:{},align?{textAlign:align}:{},style??{}],numberOfLines:lineClamp,onPress},getChildren?.()??children)}const{View,Pressable}=components.General;function BetterTableRowTitle(param){let{title,onPress,icon}=param;const styles2=common.stylesheet.createThemedStyleSheet({androidRipple:{color:ui.semanticColors.ANDROID_RIPPLE},icon:{width:16,height:16,marginTop:1.5,tintColor:ui.semanticColors.TEXT_MUTED}}),UseCompontent=onPress?Pressable:View;return React.createElement(UseCompontent,{android_ripple:styles2.androidRipple,disabled:!1,accessibilityRole:"button",onPress,style:{marginBottom:8,gap:4,flexDirection:"row",alignItems:"center"}},icon&&React.createElement(common.ReactNative.Image,{style:styles2.icon,source:icon,resizeMode:"cover"}),React.createElement(Text,{variant:"text-sm/semibold",color:"TEXT_MUTED"},title))}function BetterTableRowGroup(param){let{title,onTitlePress,icon,children,padding}=param;const styles2=common.stylesheet.createThemedStyleSheet({main:{backgroundColor:ui.semanticColors.CARD_PRIMARY_BG,borderRadius:16,overflow:"hidden",flex:1}});return React.createElement(View,{style:{marginHorizontal:16,marginTop:16}},title&&React.createElement(BetterTableRowTitle,{title,onPress:onTitlePress,icon}),React.createElement(View,{style:styles2.main},padding?React.createElement(View,{style:{paddingHorizontal:16,paddingVertical:16}},children):children))}const{ScrollView}=components.General,{FormSwitchRow,FormRadioRow,FormRow,FormInput}=components.Forms;function Settings(){return storage.useProxy(vstorage),React.createElement(ScrollView,null,React.createElement(BetterTableRowGroup,{title:"Settings",icon:assets.getAssetIDByName("ic_cog_24px")},React.createElement(FormRow,{label:"Position",subLabel:"Choose where Char Counter will appear",leading:React.createElement(FormRow.Icon,{source:assets.getAssetIDByName("ic_message_edit")})}),React.createElement(FormRadioRow,{label:"Floating Pill",onPress:function(){return vstorage.position="pill"},trailing:React.createElement(FormRow.Arrow,null),selected:vstorage.position==="pill",style:{marginHorizontal:12}}),React.createElement(FormRadioRow,{label:"Inside Textbox",onPress:function(){return vstorage.position="inside"},trailing:React.createElement(FormRow.Arrow,null),selected:vstorage.position==="inside",style:{marginHorizontal:12}}),React.createElement(FormRow,{label:"Display Type",subLabel:"Choose how the char counter text appears",leading:React.createElement(FormRow.Icon,{source:assets.getAssetIDByName("ic_message_edit")})}),React.createElement(FormRadioRow,{label:"Full",subLabel:"100/300",onPress:function(){return vstorage.display="full"},trailing:React.createElement(FormRow.Arrow,null),selected:vstorage.display==="full",style:{marginHorizontal:12}}),React.createElement(FormRadioRow,{label:"Length",subLabel:"100",onPress:function(){return vstorage.display="length"},trailing:React.createElement(FormRow.Arrow,null),selected:vstorage.display==="length",style:{marginHorizontal:12}}),React.createElement(FormRadioRow,{label:"Remaining",subLabel:"-200",onPress:function(){return vstorage.display="remaining"},trailing:React.createElement(FormRow.Arrow,null),selected:vstorage.display==="remaining",style:{marginHorizontal:12}}),React.createElement(FormRow,{label:"Minimum Characters",subLabel:"The minimum amount of characters for Char Counter to show up",leading:React.createElement(FormRow.Icon,{source:assets.getAssetIDByName("ic_message_edit")})}),React.createElement(FormInput,{title:"",keyboardType:"numeric",placeholder:"1",value:vstorage.minChars.toString(),onChange:function(x){return vstorage.minChars=Math.max(Number.isNaN(Number(x))?1:Number(x),0)},style:{marginTop:-25,marginHorizontal:12}}),React.createElement(FormSwitchRow,{label:"Add Thousand Seperators",subLabel:"Adds thousand seperators (1,234,567) to numbers",leading:React.createElement(FormRow.Icon,{source:assets.getAssetIDByName("ic_message_edit")}),onValueChange:function(){return vstorage.commas=!vstorage.commas},value:vstorage.commas}),React.createElement(FormSwitchRow,{label:"Support SplitLargeMessages",leading:React.createElement(FormRow.Icon,{source:assets.getAssetIDByName("ic_message_edit")}),onValueChange:function(){return vstorage.supportSLM=!vstorage.supportSLM},value:vstorage.supportSLM})))}metro.find(function(x){return x?.WebView&&!x.default}).WebView,metro.findByProps("SvgXml"),metro.findByProps("isJoi");const Reanimated=metro.findByProps("useSharedValue");metro.findByProps("FlashList").FlashList,common.ReactNative.NativeModules.DCDFileManager??common.ReactNative.NativeModules.RTNFileManager,common.ReactNative.NativeModules.BundleUpdaterManager,common.ReactNative.NativeModules.MMKVManager,common.ReactNative.NativeModules.DCDSoundManager,common.ReactNative.NativeModules.RNFSManager;const UserStore=metro.findByStoreName("UserStore");function display(length){return vstorage.display==="length"?prettify(length):vstorage.display==="remaining"?prettify(getMessageLength()-length):`${prettify(length)}/${prettify(getMessageLength())}`}function prettify(x){return vstorage.commas===!1?x.toString():x.toString().split("").reverse().map(function(x2,i,a){return i%3===0&&a.length>3&&i!==0?`${x2},`:x2}).reverse().join("")}function hasSLM(){var _Object_values_find;return!!(vstorage.supportSLM!==!1&&!((_Object_values_find=Object.values(plugins.plugins).find(function(x){return x.manifest.name==="SplitLargeMessages"}))===null||_Object_values_find===void 0)&&_Object_values_find.enabled)}function getMessageLength(){var _UserStore_getCurrentUser;return((_UserStore_getCurrentUser=UserStore.getCurrentUser())===null||_UserStore_getCurrentUser===void 0?void 0:_UserStore_getCurrentUser.premiumType)===2?4e3:2e3}const xsFontSize=TextStyleSheet["text-xs/semibold"].fontSize,styles$1=common.stylesheet.createThemedStyleSheet({androidRipple:{color:ui.semanticColors.ANDROID_RIPPLE,cornerRadius:8},container:{backgroundColor:ui.semanticColors.BACKGROUND_TERTIARY,borderRadius:8,marginRight:8,marginTop:-12},text:{...TextStyleSheet["text-xs/semibold"],textAlign:"right",paddingHorizontal:8,paddingVertical:8},extraMessagesCircle:{backgroundColor:ui.semanticColors.REDESIGN_BUTTON_PRIMARY_BACKGROUND,borderRadius:2147483647,position:"absolute",left:0,top:0,transform:[{translateX:-xsFontSize},{translateY:-xsFontSize}],minWidth:xsFontSize*2,height:xsFontSize*2,justifyContent:"center",alignItems:"center",zIndex:2}});function CharCounter(param){let{inputProps}=param;const[isToggled,setIsToggled]=common.React.useState(!1),[text,setText]=common.React.useState(""),fade=Reanimated.useSharedValue(vstorage.minChars===0?1:0),fadeExtra=Reanimated.useSharedValue(0);lastText.value=text,patcher$1.after("onChangeText",inputProps,function(param2){let[txt]=param2;return setText(txt)},!0);const curLength=text.length,maxLength=getMessageLength(),extraMessages=hasSLM()?Math.floor(curLength/maxLength):0,dspLength=curLength-extraMessages*maxLength,elY=styles$1.text.fontSize*2+styles$1.text.paddingVertical,shouldAppear=curLength>=(vstorage.minChars??1);return common.React.useEffect(function(){fade.value=Reanimated.withTiming(shouldAppear?isToggled?.3:1:0,{duration:100})},[shouldAppear,isToggled]),common.React.useEffect(function(){fadeExtra.value=Reanimated.withTiming(extraMessages>0?1:0,{duration:100})},[extraMessages]),common.React.createElement(Reanimated.default.View,{style:[{flexDirection:"row-reverse",position:"absolute",right:0,top:-elY,zIndex:1},{opacity:fade}]},common.React.createElement(common.ReactNative.Pressable,{android_ripple:styles$1.androidRipple,style:styles$1.container,pointerEvents:shouldAppear?"box-only":"none",onPress:shouldAppear?function(){return setIsToggled(!isToggled)}:void 0},common.React.createElement(Reanimated.default.View,{style:[styles$1.extraMessagesCircle,{opacity:fadeExtra}]},common.React.createElement(Text,{variant:"text-xs/semibold",color:"TEXT_NORMAL",style:{paddingHorizontal:xsFontSize/2}},extraMessages)),common.React.createElement(Text,{variant:"text-xs/semibold",color:dspLength<=maxLength?"TEXT_NORMAL":"TEXT_DANGER",style:{paddingHorizontal:8,paddingVertical:8}},display(dspLength))))}const styles=common.stylesheet.createThemedStyleSheet({container:{textAlign:"center",paddingBottom:2,paddingRight:5,marginTop:-5}});function SimpleCharCounter(){storage.useProxy(lastText);const fade=Reanimated.useSharedValue(vstorage.minChars===0?1:0),[visible,setVisible]=common.React.useState(vstorage.minChars===0),curLength=lastText.value.length,maxLength=getMessageLength(),extraMessages=hasSLM()?Math.floor(curLength/maxLength):0,dspLength=curLength-extraMessages*maxLength,shouldAppear=curLength>=vstorage.minChars,shallTimeout=common.React.useRef(0);return common.React.useEffect(function(){shouldAppear&&setVisible(!0),fade.value=Reanimated.withTiming(shouldAppear?1:0,{duration:100}),clearTimeout(shallTimeout.current),shouldAppear||(shallTimeout.current=setTimeout(function(){return setVisible(!1)},100))},[shouldAppear]),common.React.createElement(Reanimated.default.View,{style:[styles.container,!visible&&{display:"none"},{opacity:fade}]},common.React.createElement(Text,{variant:"text-xs/semibold",color:dspLength<=maxLength?"TEXT_NORMAL":"TEXT_DANGER"},display(dspLength)))}const{ChatInput}=metro.findByProps("ChatInput"),{MessagesWrapper}=metro.findByProps("MessagesWrapper");let patches=[],_lastText={value:""};const lastText=storage.wrapSync(storage.createStorage({get:function(){return _lastText},set:function(x){_lastText=x}}));function patcher(){return patches.push(patcher$1.after("render",ChatInput.prototype,function(_,ret){var _findInReactTree_props,_findInReactTree;const input=utils.findInReactTree(ret.props.children,function(x){var _x_type;return(x==null||(_x_type=x.type)===null||_x_type===void 0?void 0:_x_type.name)==="ChatInput"}),props=input?.props;if(!props?.onChangeText)return;const children=(_findInReactTree=utils.findInReactTree(ret.props.children,function(x){var _x_type,_x_props;return(x==null||(_x_type=x.type)===null||_x_type===void 0?void 0:_x_type.displayName)==="View"&&Array.isArray(x==null||(_x_props=x.props)===null||_x_props===void 0?void 0:_x_props.children)}))===null||_findInReactTree===void 0||(_findInReactTree_props=_findInReactTree.props)===null||_findInReactTree_props===void 0?void 0:_findInReactTree_props.children;children&&(vstorage.position==="pill"?children.unshift(common.React.createElement(CharCounter,{inputProps:props})):patches.push(patcher$1.after("onChangeText",props,function(param){let[txt]=param;return lastText.value=txt})))})),patches.push(patcher$1.after("render",MessagesWrapper.prototype,function(_,ret){const jump=utils.findInReactTree(ret,function(x){var _x_type;return(x==null||(_x_type=x.type)===null||_x_type===void 0?void 0:_x_type.name)==="JumpToPresentButton"});jump&&patches.push(patcher$1.after("type",jump,function(_2,rat){var _rat_props;!(rat==null||(_rat_props=rat.props)===null||_rat_props===void 0)&&_rat_props.style&&vstorage.position==="pill"&&(rat.props.style[1].bottom+=40)}))})),patches.push(patcher$1.before("render",common.ReactNative.View,function(args){var _x_children__type,_x_children_,_x_children;const cloned=[...args],[x]=cloned;if(((_x_children=x.children)===null||_x_children===void 0||(_x_children_=_x_children[0])===null||_x_children_===void 0||(_x_children__type=_x_children_.type)===null||_x_children__type===void 0?void 0:_x_children__type.name)==="TextInputWrapper"&&vstorage.position==="inside"){const inside=x.children[1].props.children;inside[1].props.children=common.React.createElement(common.React.Fragment,{}),inside.splice(1,0,common.React.createElement(SimpleCharCounter,{}))}return cloned})),function(){patches.forEach(function(x){return x()}),patches=[]}}const vstorage=plugin.storage;let unpatch;var index={onLoad:function(){vstorage.position??(vstorage.position="pill"),vstorage.display??(vstorage.display="full"),vstorage.commas??(vstorage.commas=!0),vstorage.minChars??(vstorage.minChars=1),vstorage.supportSLM??(vstorage.supportSLM=!0),unpatch=patcher()},onUnload:function(){return unpatch?.()},settings:Settings};return exports.default=index,exports.vstorage=vstorage,Object.defineProperty(exports,"__esModule",{value:!0}),exports})({},vendetta.plugin,vendetta.storage,vendetta.ui.assets,vendetta.ui.components,vendetta.metro.common,vendetta.ui,vendetta,vendetta.metro,vendetta.ui.toasts,vendetta.patcher,vendetta.utils,vendetta.plugins);
