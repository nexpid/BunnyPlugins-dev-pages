(function(exports,plugin,common,storage,ui,alerts,assets,components,metro,toasts,patcher$1,utils){"use strict";var _findByProps$2,_findByProps1$1,_findByProps2;const ThemeStore$1=metro.findByStoreName("ThemeStore");metro.findByProps("triggerHaptic");const colorModule=metro.findByProps("colors","unsafe_rawColors"),colorResolver=colorModule?.internal??colorModule?.meta,TextStyleSheet=metro.findByProps("TextStyleSheet").TextStyleSheet,Navigator=metro.findByName("Navigator")??((_findByProps$2=metro.findByProps("Navigator"))===null||_findByProps$2===void 0?void 0:_findByProps$2.Navigator),modalCloseButton=((_findByProps1$1=metro.findByProps("getRenderCloseButton"))===null||_findByProps1$1===void 0?void 0:_findByProps1$1.getRenderCloseButton)??((_findByProps2=metro.findByProps("getHeaderCloseButton"))===null||_findByProps2===void 0?void 0:_findByProps2.getHeaderCloseButton),{popModal,pushModal}=metro.findByProps("popModal","pushModal");function resolveSemanticColor(color){let theme=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ThemeStore$1.theme;return colorResolver.resolveSemanticColor(theme,color)}function openModal(key,modal){const empty=Symbol("empty");if(!Navigator||!modalCloseButton)return toasts.showToast(`${[Navigator?empty:"Navigator",modalCloseButton?empty:"modalCloseButton"].filter(function(x){return x!==empty}).join(", ")} is missing! Please try reinstalling your client.`,assets.getAssetIDByName("Small"));pushModal({key,modal:{key,modal,animation:"slide-up",shouldPersistUnderModals:!1,closable:!0}})}function Text(param){let{variant,lineClamp,color,align,style,onPress,getChildren,children,liveUpdate}=param;const[_,forceUpdate]=common.React.useReducer(function(x){return~x},0);return common.React.useEffect(function(){if(!liveUpdate)return;const nextSecond=new Date().setMilliseconds(1e3);let interval;const timeout=setTimeout(function(){forceUpdate(),interval=setInterval(forceUpdate,1e3)},nextSecond-Date.now());return function(){clearTimeout(timeout),clearInterval(interval)}},[]),common.React.createElement(common.ReactNative.Text,{style:[variant?TextStyleSheet[variant]:{},color?{color:resolveSemanticColor(ui.semanticColors[color])}:{},align?{textAlign:align}:{},style??{}],numberOfLines:lineClamp,onPress},getChildren?.()??children)}function BetterTableRowTitle(param){let{title,onPress,icon,padding}=param;const styles2=common.stylesheet.createThemedStyleSheet({androidRipple:{color:ui.semanticColors.ANDROID_RIPPLE,cornerRadius:4},icon:{width:16,height:16,marginTop:1.5,tintColor:ui.semanticColors.TEXT_MUTED}}),UseCompontent=onPress?common.ReactNative.Pressable:common.ReactNative.View;return React.createElement(UseCompontent,{android_ripple:styles2.androidRipple,onPress,style:{marginBottom:8,marginHorizontal:padding?16:0,marginTop:padding?8:0,gap:4,flexDirection:"row",alignItems:"center"}},icon&&React.createElement(common.ReactNative.Image,{style:styles2.icon,source:icon,resizeMode:"cover"}),React.createElement(Text,{variant:"text-sm/semibold",color:"TEXT_MUTED"},title))}function BetterTableRowGroup(param){let{title,onTitlePress,icon,children,padding,nearby}=param;const styles2=common.stylesheet.createThemedStyleSheet({main:{backgroundColor:ui.semanticColors.CARD_PRIMARY_BG,borderColor:ui.semanticColors.BORDER_FAINT,borderWidth:1,borderRadius:16,overflow:"hidden",flex:1}});return React.createElement(common.ReactNative.View,{style:{marginHorizontal:16,marginTop:nearby?8:16}},title?typeof title=="string"?React.createElement(BetterTableRowTitle,{title,onPress:onTitlePress,icon}):title:null,React.createElement(common.ReactNative.View,{style:styles2.main},padding?React.createElement(common.ReactNative.View,{style:{paddingHorizontal:16,paddingVertical:16}},children):children))}const{FormRow:FormRow$1}=components.Forms,styles=common.stylesheet.createThemedStyleSheet({destructiveIcon:{tintColor:ui.semanticColors.TEXT_DANGER}}),destructiveText={color:"TEXT_DANGER",variant:"text-md/semibold"};function settings(){return storage.useProxy(vstorage),React.createElement(common.ReactNative.ScrollView,null,React.createElement(BetterTableRowGroup,{title:"Settings",icon:assets.getAssetIDByName("ic_cog_24px")},React.createElement(FormRow$1,{label:"Data size",subLabel:vstorage.pinned?`${Math.floor(JSON.stringify(vstorage.pinned).length/1e3*100)/100} kilobytes`:"N/A",leading:React.createElement(FormRow$1.Icon,{source:assets.getAssetIDByName("ic_message_edit")})}),React.createElement(FormRow$1,{label:React.createElement(Text,destructiveText,"Clear data"),leading:React.createElement(FormRow$1.Icon,{style:styles.destructiveIcon,source:assets.getAssetIDByName("ic_message_delete")}),trailing:React.createElement(FormRow$1.Arrow,null),onPress:function(){return alerts.showConfirmationAlert({title:"Clear data",content:"Are you sure you want to clear all local pin data?",confirmText:"Clear",confirmColor:"red",onConfirm:function(){delete vstorage.pinned},isDismissable:!0})}})))}var _findByProps$1;const _ActionSheet=((_findByProps$1=metro.findByProps("ActionSheet"))===null||_findByProps$1===void 0?void 0:_findByProps$1.ActionSheet)??metro.find(function(x){var _x_render;return((_x_render=x.render)===null||_x_render===void 0?void 0:_x_render.name)==="ActionSheet"}),{ActionSheetTitleHeader,ActionSheetCloseButton}=metro.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton"),LazyActionSheet=metro.findByProps("openLazy","hideActionSheet"),{openLazy,hideActionSheet}=LazyActionSheet,{showSimpleActionSheet}=metro.findByProps("showSimpleActionSheet"),ActionSheet=function(param){let{title,onClose,children}=param;return React.createElement(_ActionSheet,null,React.createElement(ActionSheetTitleHeader,{title,trailing:React.createElement(ActionSheetCloseButton,{onPress:onClose??function(){return hideActionSheet()}})}),children)};ActionSheet.open=function(sheet,props){openLazy(new Promise(function(res){return res({default:sheet})}),"ActionSheet",props)};function SuperAwesomeIcon(param){let{onPress,onLongPress,icon,style,destructive,color}=param;const styles2=common.stylesheet.createThemedStyleSheet({headerStyleIcon:{width:24,height:24,marginRight:10,tintColor:ui.semanticColors.HEADER_PRIMARY},cardStyleIcon:{width:22,height:22,marginLeft:5,tintColor:ui.semanticColors.INTERACTIVE_NORMAL},destructiveIcon:{tintColor:ui.semanticColors.TEXT_DANGER}});return React.createElement(common.ReactNative.TouchableOpacity,{onPress,onLongPress},React.createElement(common.ReactNative.Image,{style:[typeof style=="string"?style==="header"?styles2.headerStyleIcon:styles2.cardStyleIcon:style,destructive&&styles2.destructiveIcon,color&&{tintColor:color}].filter(function(x){return!!x}),source:icon}))}function Modal(props){return!Navigator||!modalCloseButton?null:React.createElement(Navigator,{initialRouteName:props.mkey,screens:{[props.mkey]:Object.assign(utils.without(props,"mkey","children"),{headerLeft:modalCloseButton?.(function(){return popModal(props.mkey)}),render:function(){return props.children}})}})}const MessageStore=metro.findByStoreName("MessageStore"),ChannelStore=metro.findByStoreName("ChannelStore"),messages=metro.findByProps("sendMessage","receiveMessage");function useLocalPinned(channelId){const[data,setData]=common.React.useState(null),[status,setStatus]=common.React.useState(0);return common.React.useEffect(function(){(async function(){const parsed=[],raw=channelId?getPins(channelId):getAllPins();for(let i=0;i<raw.length;i++){const m=raw[i];setStatus(i/raw.length);const id="channelId"in m?m.channelId:channelId;if(!id)continue;let message=MessageStore.getMessage(id,m.id);if(!message){const numbers=[(BigInt(m.id)+1n).toString(),(BigInt(m.id)-1n).toString()];await messages.fetchMessages({channelId:id,before:numbers[0],after:numbers[1],limit:1}),message=MessageStore.getMessage(id,m.id)}console.log(utils.without(message,"timestamp")),message&&parsed.push({message,channelId:id,channel:ChannelStore.getChannel(id)})}setData(parsed)})()},[channelId]),{data,status,clear:function(){return setData([])},remove:function(id){return setData(data.filter(function(x){return x.message.id!==id}))}}}const{default:ChatItemWrapper}=metro.findByProps("DCDAutoModerationSystemMessageView","default"),MessageRecord=metro.findByName("MessageRecord"),RowManager=metro.findByName("RowManager"),ThemeStore=metro.findByStoreName("ThemeStore"),Message=function(param){let{message,channelId,channel,remove}=param;const styles2=common.stylesheet.createThemedStyleSheet({message:{backgroundColor:ui.semanticColors.CARD_PRIMARY_BG,padding:8,borderRadius:8,flexDirection:"column",gap:4},icon:{width:16,height:16,tintColor:ui.semanticColors.TEXT_NORMAL},androidRipple:{color:ui.semanticColors.ANDROID_RIPPLE,cornerRadius:8,foreground:!0}});return React.createElement(common.ReactNative.Pressable,{style:styles2.message,android_ripple:styles2.androidRipple,onPress:function(){popModal(),common.url.openDeeplink(`https://discord.com/channels/${channel?.guild_id??"@me"}/${channelId}/${message.id}`)},onLongPress:function(){return showSimpleActionSheet({key:"CardOverflow",header:{title:"Pinned Message",onClose:hideActionSheet},options:[{label:"Unpin",icon:assets.getAssetIDByName("ic_message_pin"),onPress:function(){removePin(channelId,message.id),remove()}}]})},pointerEvents:"box-only"},React.createElement(common.ReactNative.View,{style:{flexDirection:"row",alignItems:"center",gap:4}},React.createElement(common.ReactNative.Image,{style:styles2.icon,source:assets.getAssetIDByName("ic_chat_bubble_16px"),resizeMode:"cover"}),React.createElement(Text,{variant:"text-md/medium",color:"TEXT_NORMAL"},channel?.name??"unknown")),React.createElement(ChatItemWrapper,{rowGenerator:new RowManager,message:new MessageRecord(message)}))};function LocalPinnedModal(){const styles2=common.stylesheet.createThemedStyleSheet({main:{flexDirection:"column",gap:16,paddingHorizontal:8,paddingTop:8,paddingBottom:36},bowomp:{flex:1,gap:4,alignItems:"center",justifyContent:"center",flexDirection:"column"}}),{data,status,remove}=useLocalPinned(void 0);return hasAnyPin()?React.createElement(Modal,{mkey:"local-pinned",title:"Local Pinned"},data?React.createElement(common.ReactNative.ScrollView,{style:{flex:1}},React.createElement(common.ReactNative.View,{style:styles2.main},data.map(function(x){return React.createElement(Message,{...x,remove:function(){return remove(x.message.id)},key:x.message.id})}))):React.createElement(common.ReactNative.View,{style:{alignItems:"center",justifyContent:"center",flex:1}},React.createElement(common.ReactNative.ActivityIndicator,{size:"large",style:{marginBottom:10}}),React.createElement(Text,{variant:"text-lg/semibold",color:"TEXT_NORMAL",align:"center"},Math.floor(status*100),"%"))):React.createElement(Modal,{mkey:"local-pinned",title:"Local Pinned"},React.createElement(common.ReactNative.View,{style:styles2.bowomp},React.createElement(common.ReactNative.Image,{source:{dark:assets.getAssetIDByName("img_pins_empty_dark"),light:assets.getAssetIDByName("img_pins_empty_light")}[ThemeStore.theme]??assets.getAssetIDByName("img_pins_empty_darker"),resizeMode:"contain",style:{marginLeft:35}}),React.createElement(Text,{variant:"text-md/medium",color:"TEXT_MUTED",align:"center"},common.i18n.Messages.NO_PINS_IN_CHANNEL??`This channel doesn't have any
pinned messages... yet.`)))}function ChannelPinsRow(){if(!hasAnyPin())return null;const styles2=common.stylesheet.createThemedStyleSheet({container:{marginHorizontal:8,paddingHorizontal:8,alignItems:"center",flexDirection:"row",borderRadius:4,height:48},icon:{width:32,height:32,borderRadius:16,position:"relative",justifyContent:"center",alignItems:"center",backgroundColor:ui.semanticColors.BG_MOD_STRONG},iconImg:{width:24,height:24,tintColor:ui.semanticColors.INTERACTIVE_NORMAL},text:{marginLeft:16,flex:1},androidRipple:{color:ui.semanticColors.STATUS_WARNING_TEXT,cornerRadius:4}});return React.createElement(common.ReactNative.Pressable,{style:styles2.container,android_ripple:styles2.androidRipple,onPress:function(){return openModal("local-pinned",LocalPinnedModal)}},React.createElement(common.ReactNative.View,{style:styles2.icon},React.createElement(common.ReactNative.Image,{source:assets.getAssetIDByName("ic_pins"),style:styles2.iconImg,resizeMode:"cover"})),React.createElement(Text,{variant:"text-md/medium",color:"CHANNELS_DEFAULT",style:styles2.text},"Local Pinned"))}const{ActionSheetRow}=metro.findByProps("ActionSheetRow"),{FormRow}=metro.findByProps("FormRow");function RedesignRow(param){let{label,icon,onPress}=param;const styles2=common.stylesheet.createThemedStyleSheet({iconComponent:{width:24,height:24,tintColor:ui.semanticColors.INTERACTIVE_NORMAL}});return ActionSheetRow?React.createElement(ActionSheetRow,{label,icon:React.createElement(ActionSheetRow.Icon,{source:icon,IconComponent:function(){return React.createElement(common.ReactNative.Image,{resizeMode:"cover",style:styles2.iconComponent,source:icon})}}),onPress}):React.createElement(FormRow,{label,leading:React.createElement(FormRow.Icon,{source:icon}),onPress})}metro.findByProps("showUserProfile"),metro.findByProps("fetchProfile"),metro.findByStoreName("UserStore"),metro.findByProps("TextStyleSheet");function PinMessageLocallyAction(message){const isPinned=hasPin(message.channel_id,message.id);return React.createElement(RedesignRow,{label:isPinned?"Unpin Message Locally":"Pin Message Locally",icon:assets.getAssetIDByName("ic_message_pin"),onPress:function(){isPinned?(removePin(message.channel_id,message.id),toasts.showToast(`Unpinned ${message.nick??message.author.globalName??message.author.username}'s message locally`,assets.getAssetIDByName("ic_message_pin"))):(addPin(message.channel_id,message.id),toasts.showToast(`Pinned ${message.nick??message.author.globalName??message.author.username}'s message locally`,assets.getAssetIDByName("ic_message_pin"))),hideActionSheet()}})}const{FormCheckboxRow}=components.Forms;function FiltersActionSheet(param){let{defFilters,set}=param;const[filters,setFilters]=common.React.useState(defFilters);return set(filters),common.React.createElement(ActionSheet,{title:"Filters"},common.React.createElement(FormCheckboxRow,{label:"Server pinned",onPress:function(){return setFilters(filters.includes("server")?filters.filter(function(x){return x!=="server"}):filters.concat("server"))},selected:filters.includes("server")}),common.React.createElement(FormCheckboxRow,{label:"Locally pinned",onPress:function(){return setFilters(filters.includes("local")?filters.filter(function(x){return x!=="local"}):filters.concat("local"))},selected:filters.includes("local")}))}const ChannelPinsConnected$1=metro.findByName("ChannelPinsConnected",!1);function ChannelPinsModal(param){let{channelId}=param;storage.useProxy(vstorage);const{data,status,clear}=useLocalPinned(channelId);return pinsCallback.filters=function(){return ActionSheet.open(FiltersActionSheet,{defFilters:vstorage.preferFilters,set:function(fil){return vstorage.preferFilters=fil}})},pinsCallback.clear=function(){return data&&alerts.showConfirmationAlert({title:"Clear local pins",content:`Are you sure you want to clear **${data.length}** pin${data.length!==1?"s":""} in this channel?`,confirmText:"Clear",confirmColor:"red",onConfirm:function(){clearPins(channelId),clear()},isDismissable:!0})},pinsCallback.overrides[channelId]=function(param2){let{messages:messages2}=param2;return[...vstorage.preferFilters.includes("local")&&data?data.map(function(x){return x.message}):[],...vstorage.preferFilters.includes("server")?messages2:[]]},Array.isArray(data)?common.React.createElement(ChannelPinsConnected$1.default,{channelId}):common.React.createElement(common.ReactNative.View,{style:{alignItems:"center",justifyContent:"center",flex:1}},common.React.createElement(common.ReactNative.ActivityIndicator,{size:"large",style:{marginBottom:10}}),common.React.createElement(Text,{variant:"text-lg/semibold",color:"TEXT_NORMAL",align:"center"},Math.floor(status*100),"%"))}const{useChannelListLayout}=metro.findByProps("useChannelListLayout");function RedesignChannelPinsRow(param){let{ret}=param;const layout=useChannelListLayout();if(!hasAnyPin())return ret;const styles2=common.stylesheet.createThemedStyleSheet({main:{marginHorizontal:4,flex:1,flexDirection:"row",alignItems:"center"},container:{flex:1,flexDirection:"row",alignItems:"center",position:"relative",minHeight:layout==="cozy"?64:48,paddingVertical:layout==="cozy"?8:4,paddingLeft:20,paddingRight:12,borderRadius:layout==="cozy"?16:12},icon:{position:"relative",borderRadius:2147483647,justifyContent:"center",alignItems:"center",flexShrink:0,flexGrow:0,width:layout==="cozy"?48:32,height:layout==="cozy"?48:32,marginRight:layout==="cozy"?12:8,backgroundColor:ui.semanticColors.BG_MOD_STRONG},iconImg:{width:24,height:24,tintColor:ui.semanticColors.INTERACTIVE_NORMAL},androidRipple:{color:ui.semanticColors.STATUS_WARNING_TEXT,cornerRadius:layout==="cozy"?16:12}});return React.createElement(React.Fragment,null,ret,React.createElement(common.ReactNative.Pressable,{style:styles2.main,android_ripple:styles2.androidRipple,onPress:function(){return openModal("local-pinned",LocalPinnedModal)}},React.createElement(common.ReactNative.View,{style:styles2.container},React.createElement(common.ReactNative.View,{style:styles2.icon},React.createElement(common.ReactNative.Image,{source:assets.getAssetIDByName("ic_pins"),style:styles2.iconImg,resizeMode:"cover"})),React.createElement(Text,{variant:"redesign/channel-title/semibold",color:"REDESIGN_CHANNEL_NAME_MUTED_TEXT"},"Local Pinned"))))}const{useSearchResultsQuery}=metro.findByProps("useSearchResultsQuery");function PinsScreen(param){let{channelId,ret}=param;storage.useProxy(vstorage);const{status,data}=useLocalPinned(channelId);return pinsCallback.overrides[channelId]=function(param2){let{messages:messages2,searchContext,press}=param2;const query=useSearchResultsQuery(searchContext);return[...data?data.filter(function(x){return x.message.content.match(new RegExp(`\\B${query.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}\\B`,"u"))}).map(function(param3){let{message,channelId:channelId2}=param3;return{type:"message",props:{searchContext,message,onPress:function(){return press(channelId2,message.id)},highlighter:function(something){return something},lineClamp:10}}}):[],...messages2]},data?ret:common.React.createElement(common.ReactNative.View,{style:{alignItems:"center",justifyContent:"center",flex:1}},common.React.createElement(common.ReactNative.ActivityIndicator,{size:"large",style:{marginBottom:10}}),common.React.createElement(Text,{variant:"text-lg/semibold",color:"TEXT_NORMAL",align:"center"},Math.floor(status*100),"%"))}var _findByProps,_findByProps1;const ChannelSettingsModal=metro.findByName("ChannelSettingsModal",!1),ChannelPinsConnected=metro.findByName("ChannelPinsConnected",!1),screens=metro.findByProps("MessagesScreen","MessageContentScreen"),useOnPressSearchItem=(_findByProps=metro.findByProps("useOnPressSearchItem"))===null||_findByProps===void 0?void 0:_findByProps.useOnPressSearchItem,FlashList=(_findByProps1=metro.findByProps("FlashList"))===null||_findByProps1===void 0?void 0:_findByProps1.FlashList,PrivateChannels=metro.findByName("ConnectedPrivateChannels",!1),pinsCallback={overrides:{}};function patcher(){const patches=new Array;patches.push(patcher$1.after("default",ChannelPinsConnected,function(_,pins){var _pinsCallback_overrides_channelId,_pinsCallback_overrides;const{channelId,loaded,messages:messages2}=pins.props;return{...pins,props:{...pins.props,messages:loaded&&messages2?((_pinsCallback_overrides_channelId=(_pinsCallback_overrides=pinsCallback.overrides)[channelId])===null||_pinsCallback_overrides_channelId===void 0?void 0:_pinsCallback_overrides_channelId.call(_pinsCallback_overrides,{messages:messages2}))??messages2:messages2}}})),screens?.MessagesScreen&&useOnPressSearchItem&&patches.push(patcher$1.after("MessagesScreen",screens,function(param,ret){let[{searchContext,tab}]=param;if(tab==="pins"){const{channelId}=searchContext;common.React.useEffect(function(){return function(){unpatch2()}},[]);const press=useOnPressSearchItem(searchContext),unpatch2=patcher$1.before("type",ret,function(param2){let[x]=param2;var _pinsCallback_overrides_channelId,_pinsCallback_overrides;x?.data&&(x.data=((_pinsCallback_overrides_channelId=(_pinsCallback_overrides=pinsCallback.overrides)[channelId])===null||_pinsCallback_overrides_channelId===void 0?void 0:_pinsCallback_overrides_channelId.call(_pinsCallback_overrides,{messages:x.data,searchContext,press}))??x.data)});return common.React.createElement(PinsScreen,{channelId:searchContext.channelId,ret})}})),patches.push(patcher$1.after("default",ChannelSettingsModal,function(_,navigator){const screens2=navigator.props.screens;screens2.PINNED_MESSAGES.headerRight=function(){return common.React.createElement(common.ReactNative.View,{style:{flexDirection:"row-reverse"}},common.React.createElement(SuperAwesomeIcon,{icon:assets.getAssetIDByName("ic_filter"),style:"header",onPress:function(){var _pinsCallback_filters;return(_pinsCallback_filters=pinsCallback.filters)===null||_pinsCallback_filters===void 0?void 0:_pinsCallback_filters.call(pinsCallback)}}),common.React.createElement(SuperAwesomeIcon,{icon:assets.getAssetIDByName("ic_message_delete"),style:"header",destructive:!0,onPress:function(){var _pinsCallback_clear;return(_pinsCallback_clear=pinsCallback.clear)===null||_pinsCallback_clear===void 0?void 0:_pinsCallback_clear.call(pinsCallback)}}))},patches.push(patcher$1.after("render",screens2.PINNED_MESSAGES,function(_2,ret){return common.React.createElement(ChannelPinsModal,{channelId:ret.props.channelId})}))})),patches.push(patcher$1.before("openLazy",LazyActionSheet,function(param){let[component,key,msg]=param;const message=msg?.message;key!=="MessageLongPressActionSheet"||!message||component.then(function(i){const unp=patcher$1.after("default",i,function(_,comp){common.React.useEffect(function(){return function(){unp()}},[]);const buttons=utils.findInReactTree(comp,function(x){var _x__type,_x_;return(x==null||(_x_=x[0])===null||_x_===void 0||(_x__type=_x_.type)===null||_x__type===void 0?void 0:_x__type.name)==="ButtonRow"});if(!buttons)return comp;const at=Math.max(buttons.findIndex(function(x){return x.props.message===common.i18n.Messages.MARK_UNREAD}),0);buttons.splice(at,0,common.React.createElement(PinMessageLocallyAction,message))})})})),FlashList&&patches.push(patcher$1.after("render",FlashList,function(param,ret){let[d]=param;return d.accessibilityLabel===common.i18n.Messages.HAPPENING_NOW?common.React.createElement(RedesignChannelPinsRow,{ret}):ret}));let privatePatched=!1;return patches.push(patcher$1.after("default",PrivateChannels,function(_,res){privatePatched||(privatePatched=!0,patches.push(patcher$1.after("render",res.type.prototype,function(_2,list){const children=utils.findInReactTree(list,function(x){return x.find(function(y){var _y_type;return((_y_type=y.type)===null||_y_type===void 0?void 0:_y_type.name)==="FastList"})});children&&children.splice(1,0,common.React.createElement(ChannelPinsRow,{}))})))})),function(){return patches.forEach(function(x){return x()})}}const vstorage=plugin.storage;function getPins(channel){var _vstorage_pinned_channel;return((_vstorage_pinned_channel=vstorage.pinned[channel])===null||_vstorage_pinned_channel===void 0?void 0:_vstorage_pinned_channel.sort(function(a,b){return b.pinned-a.pinned}))??[]}function getAllPins(){const pins=new Array;for(const[channelId,msgs]of Object.entries(vstorage.pinned))pins.push(...msgs.map(function(x){return{id:x.id,pinned:x.pinned,channelId}}));return pins.sort(function(a,b){return b.pinned-a.pinned})}function hasAnyPin(){return Object.values(vstorage.pinned).some(function(x){return x.length>0})}function clearPins(channel){delete vstorage.pinned[channel]}function hasPin(channel,id){var _vstorage_pinned_channel;return(_vstorage_pinned_channel=vstorage.pinned[channel])===null||_vstorage_pinned_channel===void 0?void 0:_vstorage_pinned_channel.some(function(x){return x.id===id})}function addPin(channel,id){var _a;(_a=vstorage.pinned)[channel]??(_a[channel]=[]),hasPin(channel,id)||vstorage.pinned[channel].push({id,pinned:Date.now()})}function removePin(channel,id){vstorage.pinned[channel]=(vstorage.pinned[channel]??[]).filter(function(x){return x.id!==id})}let unpatch;var index={onLoad:function(){vstorage.pinned??(vstorage.pinned={}),vstorage.preferFilters??(vstorage.preferFilters=["server","local"]),unpatch=patcher()},onUnload:function(){return unpatch()},settings};return exports.addPin=addPin,exports.clearPins=clearPins,exports.default=index,exports.getAllPins=getAllPins,exports.getPins=getPins,exports.hasAnyPin=hasAnyPin,exports.hasPin=hasPin,exports.removePin=removePin,exports.vstorage=vstorage,Object.defineProperty(exports,"__esModule",{value:!0}),exports})({},vendetta.plugin,vendetta.metro.common,vendetta.storage,vendetta.ui,vendetta.ui.alerts,vendetta.ui.assets,vendetta.ui.components,vendetta.metro,vendetta.ui.toasts,vendetta.patcher,vendetta.utils);
