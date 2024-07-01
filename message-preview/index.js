(function(exports,plugin,storage,assets,components,common,ui,_vendetta,metro,toasts,patcher$1,utils,alerts){"use strict";var _findByProps,_findByProps1,_findByProps2,_findByProps3,_findByProps4;const ThemeStore=metro.findByStoreName("ThemeStore");metro.findByProps("triggerHaptic");const colorModule=metro.findByProps("colors","unsafe_rawColors"),colorResolver=colorModule?.internal??colorModule?.meta,TextStyleSheet=metro.findByProps("TextStyleSheet").TextStyleSheet;((_findByProps=metro.findByProps("ActionSheet"))===null||_findByProps===void 0?void 0:_findByProps.ActionSheet)??metro.find(function(x){var _x_render;return((_x_render=x.render)===null||_x_render===void 0?void 0:_x_render.name)==="ActionSheet"}),metro.findByProps("openLazy","hideActionSheet"),metro.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer"),(_findByProps1=metro.findByProps("ActionSheetRow"))===null||_findByProps1===void 0||_findByProps1.ActionSheetRow,metro.findByName("Navigator")??((_findByProps2=metro.findByProps("Navigator"))===null||_findByProps2===void 0||_findByProps2.Navigator),((_findByProps3=metro.findByProps("getRenderCloseButton"))===null||_findByProps3===void 0?void 0:_findByProps3.getRenderCloseButton)??((_findByProps4=metro.findByProps("getHeaderCloseButton"))===null||_findByProps4===void 0||_findByProps4.getHeaderCloseButton),metro.findByProps("popModal","pushModal");function resolveSemanticColor(color){let theme=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ThemeStore.theme;return colorResolver.resolveSemanticColor(theme,color)}const{Text:_Text}=components.General;function Text(param){let{variant,lineClamp,color,align,style,onPress,getChildren,children,liveUpdate}=param;const[_,forceUpdate]=common.React.useReducer(function(x){return~x},0);return common.React.useEffect(function(){if(!liveUpdate)return;const nextSecond=new Date().setMilliseconds(1e3);let interval;const timeout=setTimeout(function(){forceUpdate(),interval=setInterval(forceUpdate,1e3)},nextSecond-Date.now());return function(){clearTimeout(timeout),clearInterval(interval)}},[]),common.React.createElement(_Text,{style:[variant?TextStyleSheet[variant]:{},color?{color:resolveSemanticColor(ui.semanticColors[color])}:{},align?{textAlign:align}:{},style??{}],numberOfLines:lineClamp,onPress},getChildren?.()??children)}const{View:View$1,Pressable:Pressable$1}=components.General;function BetterTableRowTitle(param){let{title,onPress,icon}=param;const styles2=common.stylesheet.createThemedStyleSheet({androidRipple:{color:ui.semanticColors.ANDROID_RIPPLE,cornerRadius:4},icon:{width:16,height:16,marginTop:1.5,tintColor:ui.semanticColors.TEXT_MUTED}}),UseCompontent=onPress?Pressable$1:View$1;return React.createElement(UseCompontent,{android_ripple:styles2.androidRipple,disabled:!1,accessibilityRole:"button",onPress,style:{marginBottom:8,gap:4,flexDirection:"row",alignItems:"center"}},icon&&React.createElement(common.ReactNative.Image,{style:styles2.icon,source:icon,resizeMode:"cover"}),React.createElement(Text,{variant:"text-sm/semibold",color:"TEXT_MUTED"},title))}function BetterTableRowGroup(param){let{title,onTitlePress,icon,children,padding}=param;const styles2=common.stylesheet.createThemedStyleSheet({main:{backgroundColor:ui.semanticColors.CARD_PRIMARY_BG,borderRadius:16,overflow:"hidden",flex:1}});return React.createElement(View$1,{style:{marginHorizontal:16,marginTop:16}},title?typeof title=="string"?React.createElement(BetterTableRowTitle,{title,onPress:onTitlePress,icon}):title:null,React.createElement(View$1,{style:styles2.main},padding?React.createElement(View$1,{style:{paddingHorizontal:16,paddingVertical:16}},children):children))}const{ScrollView:ScrollView$1}=components.General,{FormRow,FormRadioRow}=components.Forms;function Settings(){return storage.useProxy(vstorage),React.createElement(ScrollView$1,null,React.createElement(BetterTableRowGroup,{title:"Settings",icon:assets.getAssetIDByName("ic_cog")},React.createElement(FormRow,{label:"Button type",leading:React.createElement(FormRow.Icon,{source:assets.getAssetIDByName("ic_message_edit")})}),React.createElement(FormRadioRow,{label:"Floating Pill",onPress:function(){return vstorage.buttonType="pill"},trailing:React.createElement(FormRow.Arrow,null),selected:vstorage.buttonType==="pill",style:{marginHorizontal:12}}),React.createElement(FormRadioRow,{label:"Send button",subLabel:"Holding the send button",onPress:function(){return vstorage.buttonType="send"},trailing:React.createElement(FormRow.Arrow,null),selected:vstorage.buttonType==="send",style:{marginHorizontal:12}}),React.createElement(FormRow,{label:"Preview type",leading:React.createElement(FormRow.Icon,{source:assets.getAssetIDByName("ic_message_edit")})}),React.createElement(FormRadioRow,{label:"Popup",onPress:function(){return vstorage.previewType="popup"},trailing:React.createElement(FormRow.Arrow,null),selected:vstorage.previewType==="popup",style:{marginHorizontal:12}}),React.createElement(FormRadioRow,{label:"Ephemeral message",onPress:function(){return vstorage.previewType="clyde"},trailing:React.createElement(FormRow.Arrow,null),selected:vstorage.previewType==="clyde",style:{marginHorizontal:12}})))}metro.find(function(x){return x?.WebView&&!x.default}).WebView,metro.findByProps("SvgXml"),metro.findByProps("isJoi");const Reanimated=metro.findByProps("useSharedValue");metro.findByProps("FlashList").FlashList,metro.findByName("create"),common.ReactNative.NativeModules.MMKVManager,common.ReactNative.NativeModules.DCDFileManager??common.ReactNative.NativeModules.RTNFileManager,common.ReactNative.NativeModules.BundleUpdaterManager,common.ReactNative.NativeModules.DCDSoundManager,common.ReactNative.NativeModules.RNFSManager;const{ScrollView}=components.General,{default:ChatItemWrapper}=metro.findByProps("DCDAutoModerationSystemMessageView","default"),MessageRecord=metro.findByName("MessageRecord"),RowManager=metro.findByName("RowManager"),SelectedChannelStore=metro.findByStoreName("SelectedChannelStore"),UserStore=metro.findByStoreName("UserStore"),{receiveMessage}=metro.findByProps("receiveMessage"),{createBotMessage}=metro.findByProps("createBotMessage"),{getText}=metro.findByProps("openSystemKeyboard","getText");function openPreview(){const text=getText(SelectedChannelStore.getChannelId());if(text.trim()!=="")if(vstorage.previewType==="popup")alerts.showConfirmationAlert({title:"Message Preview",onConfirm:function(){},children:React.createElement(ScrollView,{style:{marginVertical:12,maxHeight:common.ReactNative.Dimensions.get("window").height*.7}},React.createElement(ChatItemWrapper,{rowGenerator:new RowManager,message:new MessageRecord({id:"0",channel_id:SelectedChannelStore.getChannelId(),author:UserStore.getCurrentUser(),content:text})}))});else{const channel=SelectedChannelStore.getChannelId(),author=UserStore.getCurrentUser();return receiveMessage(channel,Object.assign(createBotMessage({channelId:channel,content:text}),{author}))}}const{Pressable,View}=components.General,ACTION_ICON_SIZE=40,styles=common.stylesheet.createThemedStyleSheet({androidRipple:{color:ui.semanticColors.ANDROID_RIPPLE,cornerRadius:2147483647},actionButton:{borderRadius:2147483647,height:ACTION_ICON_SIZE,width:ACTION_ICON_SIZE,marginHorizontal:4,flexShrink:0,flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:ui.semanticColors.BACKGROUND_SECONDARY_ALT,marginLeft:8,marginTop:-4},actionIcon:{tintColor:ui.semanticColors.INTERACTIVE_NORMAL,width:ACTION_ICON_SIZE*.6,height:ACTION_ICON_SIZE*.6}});function PreviewButton(param){let{inputProps}=param;const[text,setText]=common.React.useState(""),fade=Reanimated.useSharedValue(0);patches.push(patcher$1.after("onChangeText",inputProps,function(param2){let[txt]=param2;return setText(txt)},!0));const shouldAppear=text.length>0,UseComponent=shouldAppear?Pressable:View;return common.React.useEffect(function(){fade.value=Reanimated.withTiming(shouldAppear?1:0,{duration:100})},[shouldAppear]),common.React.createElement(Reanimated.default.View,{style:[{flexDirection:"row",position:"absolute",left:0,top:-ACTION_ICON_SIZE,zIndex:3},{opacity:fade}]},common.React.createElement(UseComponent,{android_ripple:styles.androidRipple,onPress:shouldAppear?function(){return openPreview()}:void 0,style:styles.actionButton},common.React.createElement(common.ReactNative.Image,{style:styles.actionIcon,source:assets.getAssetIDByName("ic_eye")})))}const{ChatInput}=metro.findByProps("ChatInput"),patches=[];function patcher(){return patches.push(patcher$1.after("render",ChatInput.prototype,function(_,ret){var _findInReactTree,_findInReactTree_props,_findInReactTree1;const props=(_findInReactTree=utils.findInReactTree(ret.props.children,function(x){var _x_type;return(x==null||(_x_type=x.type)===null||_x_type===void 0?void 0:_x_type.name)==="ChatInput"}))===null||_findInReactTree===void 0?void 0:_findInReactTree.props;if(!props?.onChangeText)return;const children=(_findInReactTree1=utils.findInReactTree(ret.props.children,function(x){var _x_type,_x_props;return(x==null||(_x_type=x.type)===null||_x_type===void 0?void 0:_x_type.displayName)==="View"&&Array.isArray(x==null||(_x_props=x.props)===null||_x_props===void 0?void 0:_x_props.children)}))===null||_findInReactTree1===void 0||(_findInReactTree_props=_findInReactTree1.props)===null||_findInReactTree_props===void 0?void 0:_findInReactTree_props.children;children&&vstorage.buttonType==="pill"&&children.unshift(React.createElement(PreviewButton,{inputProps:props}))})),patches.push(patcher$1.before("render",common.ReactNative.Pressable.type,function(param){let[a]=param;a?.accessibilityLabel===common.i18n.Messages.SEND&&(a.onLongPress=function(){return vstorage.buttonType==="send"&&openPreview()})})),function(){return patches.forEach(function(x){return x()})}}const vstorage=plugin.storage;let unpatch;var index={onLoad:function(){vstorage.buttonType??(vstorage.buttonType="pill"),vstorage.previewType??(vstorage.previewType="popup"),unpatch=patcher()},onUnload:function(){return unpatch?.()},settings:Settings};return exports.default=index,exports.vstorage=vstorage,Object.defineProperty(exports,"__esModule",{value:!0}),exports})({},vendetta.plugin,vendetta.storage,vendetta.ui.assets,vendetta.ui.components,vendetta.metro.common,vendetta.ui,vendetta,vendetta.metro,vendetta.ui.toasts,vendetta.patcher,vendetta.utils,vendetta.ui.alerts);
