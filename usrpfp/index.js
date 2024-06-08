(function(exports,_vendetta,plugin,plugins,assets,toasts,metro,common,patcher$1,utils){"use strict";var constants={github:{url:"https://github.com/nexpid/BunnyPlugins/",raw:"https://raw.githubusercontent.com/nexpid/BunnyPlugins/main/"}};metro.find(function(x){return x?.WebView&&!x.default}).WebView,metro.findByProps("SvgXml"),metro.findByProps("isJoi"),metro.findByProps("useSharedValue"),metro.findByProps("FlashList").FlashList;const RNFileManager=common.ReactNative.NativeModules.DCDFileManager??common.ReactNative.NativeModules.RTNFileManager;common.ReactNative.NativeModules.BundleUpdaterManager,common.ReactNative.NativeModules.MMKVManager,common.ReactNative.NativeModules.DCDSoundManager;const RNFSManager=common.ReactNative.NativeModules.RNFSManager,normalizeFilePath=function(path){return path.startsWith("file://")?path.slice(7):path},getOptions=function(encoding){if(typeof encoding=="string"){if(["utf8","ascii","base64"].includes(encoding))return{encoding};throw new Error(`Invalid encoding type "${String(encoding)}"`)}else return encoding||{encoding:"utf8"}},readFileGeneric=function(filepath,encoding,command){const options=getOptions(encoding);return command(normalizeFilePath(filepath)).then(function(b64){let contents;return options.encoding==="utf8"?contents=Buffer.from(b64,"base64").toString("utf8"):options.encoding==="ascii"?contents=Buffer.from(b64,"base64").toString("ascii"):options.encoding==="base64"&&(contents=b64),contents})},resolveWrite=function(filepath){let write={style:null,path:null};const constants2=RNFileManager.getConstants();if(filepath.startsWith(constants2.DocumentsDirPath))write={style:"documents",path:filepath.slice(constants2.DocumentsDirPath.length+1)};else if(filepath.startsWith(constants2.CacheDirPath))write={style:"cache",path:filepath.slice(constants2.CacheDirPath.length+1)};else throw new Error(`File path "${String(filepath)}" is unsupported on versions <211.6 (not a caches/documents path, missing RNFS)`);return write},RNFS={unlink(filepath){if(RNFSManager)return RNFSManager.unlink(normalizeFilePath(filepath)).then(function(){});const write=resolveWrite(filepath);return RNFileManager.removeFile(write.style,write.path).then(function(){})},exists(filepath){return RNFSManager?RNFSManager.exists(normalizeFilePath(filepath)):RNFileManager.fileExists(normalizeFilePath(filepath))},readFile(filepath,encoding){if(RNFSManager)return readFileGeneric(filepath,encoding,RNFSManager.readFile);{const options=getOptions(encoding);if(options.encoding==="ascii")throw new Error('Encoding type "ascii" is unsupported on versions <211.6 (missing RNFS)');return RNFileManager.readFile(filepath,options.encoding)}},writeFile(filepath,contents,encoding){const options=getOptions(encoding);if(!RNFSManager){if(options.encoding==="ascii")throw new Error('Encoding type "ascii" is unsupported on versions <211.6 (missing RNFS)');const write=resolveWrite(filepath);return RNFileManager.writeFile(write.style,write.path,contents,options.encoding).then(function(){})}let b64;return options.encoding==="utf8"?b64=Buffer.from(contents,"utf8").toString("base64"):options.encoding==="ascii"?b64=Buffer.from(contents,"ascii").toString("base64"):options.encoding==="base64"&&(b64=contents),RNFSManager.writeFile(normalizeFilePath(filepath),b64,options)},mkdir(filepath){if(!RNFSManager)throw new Error("Function 'mkdir' is unsupported on versions <211.6 (missing RNFS)");return RNFSManager.mkdir(normalizeFilePath(filepath),{}).then(function(){})},MainBundlePath:RNFSManager?.RNFSMainBundlePath,get CachesDirectoryPath(){return RNFSManager?.RNFSCachesDirectoryPath??RNFileManager.getConstants().CacheDirPath},ExternalCachesDirectoryPath:RNFSManager?.RNFSExternalCachesDirectoryPath,get DocumentDirectoryPath(){return RNFSManager?.RNFSDocumentDirectoryPath??RNFileManager.getConstants().DocumentsDirPath},DownloadDirectoryPath:RNFSManager?.RNFSDownloadDirectoryPath,ExternalDirectoryPath:RNFSManager?.RNFSExternalDirectoryPath,ExternalStorageDirectoryPath:RNFSManager?.RNFSExternalStorageDirectoryPath,TemporaryDirectoryPath:RNFSManager?.RNFSTemporaryDirectoryPath,LibraryDirectoryPath:RNFSManager?.RNFSLibraryDirectoryPath,PicturesDirectoryPath:RNFSManager?.RNFSPicturesDirectoryPath,FileProtectionKeys:RNFSManager?.RNFSFileProtectionKeys,RoamingDirectoryPath:RNFSManager?.RNFSRoamingDirectoryPath,hasRNFS:!!RNFSManager},variableRules=[/{([^}]+), (select|plural), ?\n?([\s\S]+?)(?=(}})|(} ?\r?\n ?}))/g,/{([^}]+)}/g],replacerRegExp=/(\w+) {([^}]*)} ?/g;function parseVariableRules(text){const rules=[];for(const regex of variableRules){const matches=text.matchAll(regex);for(const rawMatch of Array.from(matches)){const[match,variable,kind,rawReplacers,_suffix1,_suffix2]=rawMatch,{index:index2}=rawMatch,suffix=_suffix1??_suffix2??"";if(!rules.some(function(x){return index2>=x.start&&index2<x.start+x.length}))if(!kind)rules.push({type:"variable",variable,start:index2,length:match.length+suffix.length});else{const replacers=Object.fromEntries(Array.from((rawReplacers+"}").matchAll(replacerRegExp)).map(function(x){return[x[1],x[2]]}));rules.push({type:"choose",kind,variable,start:index2,length:match.length+suffix.length,replacers})}}}return rules}var define_DEFAULT_LANG_default2={"log.patch_error":"Encountered an error while loading!","log.fetch_error":"Failed to fetch avatars!","toast.patch_error":"UsrPFP encountered an error while loading!","toast.fetch_error":"UsrPFP failed to fetch avatars!"};function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const IntlMessageFormat=metro.findByName("MessageFormat"),make=function(){return RNFS.hasRNFS&&RNFS.mkdir(`${RNFS.DocumentDirectoryPath}/vendetta/NexpidLang`)},filePath=function(plugin2){return`${RNFS.DocumentDirectoryPath}/vendetta/NexpidLang/${plugin2}.json`},etagPath=function(plugin2){return`${RNFS.DocumentDirectoryPath}/vendetta/NexpidLang/${plugin2}_etag.txt`};let Lang=function(){function Lang2(plugin2){_class_call_check(this,Lang2),_define_property(this,"plugin",void 0),_define_property(this,"values",void 0),_define_property(this,"controller",void 0),_define_property(this,"variableRules",void 0),_define_property(this,"Values",void 0),this.plugin=plugin2,this.values=null,this.controller=new AbortController,this.variableRules={},this.load()}return _create_class(Lang2,[{key:"load",value:async function(){var _this=this;const read=async function(){if(await RNFS.exists(filePath(_this.plugin)))try{_this.values=JSON.parse(await RNFS.readFile(filePath(_this.plugin)))}catch{return}};{const res=await fetch(`${constants.github.raw}lang/values/${this.plugin}.json`,{headers:{"cache-control":"public, max-age=20"}});if(!res.ok)return read();make();const lastEtag=await RNFS.exists(etagPath(this.plugin))&&await RNFS.readFile(etagPath(this.plugin)),newEtag=res.headers.get("etag");if(!newEtag)return read();if(newEtag!==lastEtag){RNFS.writeFile(etagPath(this.plugin),newEtag);const txt=await res.text();RNFS.writeFile(filePath(this.plugin),txt);try{this.values=JSON.parse(txt)}catch{return}}else read()}}},{key:"makeVariableRules",value:function(text){const rules=parseVariableRules(text);return this.variableRules=rules,rules}},{key:"unload",value:function(){this.controller.abort()}},{key:"format",value:function(_key,input){var _this_values_locale,_this_values_en,_DEFAULT_LANG;const key=_key,locale=Lang2.getLang();if(!this.values)return String(key);const val=((_this_values_locale=this.values[locale])===null||_this_values_locale===void 0?void 0:_this_values_locale[key])??((_this_values_en=this.values.en)===null||_this_values_en===void 0?void 0:_this_values_en[key])??((_DEFAULT_LANG=define_DEFAULT_LANG_default2)===null||_DEFAULT_LANG===void 0?void 0:_DEFAULT_LANG[key]);return val?(this.variableRules[val]??this.makeVariableRules(val)).length>0?new IntlMessageFormat(val).format(input):val:String(key)}}],[{key:"getLang",value:function(){var _i18n_getLocale;const lang2=((_i18n_getLocale=common.i18n.getLocale())===null||_i18n_getLocale===void 0?void 0:_i18n_getLocale.replace(/-/g,"_"))??"en";return lang2.startsWith("en_")?"en":lang2}},{key:"basicFormat",value:function(text){const rules=[{regex:/\*\*(.*?)\*\*/g,react:function(txt2){return React.createElement(common.ReactNative.Text,{style:{fontWeight:"900"}},txt2)}}],txt=text.split("");let off=0;for(const rule of rules){const matches=Array.from(text.matchAll(rule.regex));for(const match of matches)match[1]&&(txt.splice(match.index-off,match[0].length,rule.react(match[1])),off+=match[0].length-1)}return txt}}]),Lang2}();const avatarStuff=metro.findByProps("getUserAvatarURL","getUserAvatarSource"),UserStore=metro.findByStoreName("UserStore");let data;const fetchData=async function(){try{data=await(await utils.safeFetch(`${dataURL}?_=${exports.hash}`,{cache:"no-store"})).json()}catch(e){const txt=lang.format("log.fetch_error",{});console.error(`[UsrPFP] ${txt}`),_vendetta.logger.error(`${txt}
${e.stack}`),toasts.showToast(lang.format("toast.fetch_error",{}),assets.getAssetIDByName("Small"))}},getCustomAvatar=function(id,isStatic){if(!data.avatars[id])return;const avatar=data.avatars[id];if(isStatic&&urlExt(avatar)==="gif")return staticGifURL(avatar);const url=new URL(avatar);return url.searchParams.append("_",exports.hash),url.toString()},urlExt=function(url){return new URL(url).pathname.split(".").slice(-1)[0]};async function patcher(){const patches=new Array;if(await fetchData(),!data||!exports.enabled)return function(){};const dataInterval=setInterval(function(){return fetchData()},1e3*60*60);return patches.push(function(){return clearInterval(dataInterval)}),patches.push(patcher$1.after("getUser",UserStore,function(param,ret){let[id]=param;if((data.avatars[id]&&urlExt(data.avatars[id]))==="gif"&&ret){const avatar=ret.avatar??"0";ret.avatar=avatar.startsWith("a_")?avatar:`a_${avatar}`}})),patches.push(patcher$1.after("getUserAvatarURL",avatarStuff,function(param){let[{id},animate]=param;return getCustomAvatar(id,!animate)})),patches.push(patcher$1.after("getUserAvatarSource",avatarStuff,function(param,ret){let[{id},animate]=param;const custom=getCustomAvatar(id,!animate);if(custom)return custom?{uri:custom}:ret})),function(){return patches.forEach(function(x){return x()})}}const dataURL="https://userpfp.github.io/UserPFP/source/data.json",staticGifURL=function(url){return`https://static-gif.nexpid.workers.dev/convert.gif?url=${encodeURIComponent(url)}&_=${exports.hash}`};exports.enabled=!1,exports.hash=void 0;const lang=new Lang("usrpfp");let unpatch;var index={onLoad:async function(){exports.hash=Array.from(crypto.getRandomValues(new Uint8Array(20))).map(function(b){return b.toString(16).padStart(2,"0")}).join(""),exports.enabled=!0;try{unpatch=await patcher()}catch(e){const txt=lang.format("log.patch_error",{});console.error(`[UsrPFP] ${txt}`),_vendetta.logger.error(`${txt}
${e.stack}`),toasts.showToast(lang.format("toast.patch_error",{}),assets.getAssetIDByName("Small")),plugins.stopPlugin(plugin.id)}},onUnload:function(){exports.enabled=!1,unpatch?.(),lang.unload()}};return exports.dataURL=dataURL,exports.default=index,exports.lang=lang,exports.staticGifURL=staticGifURL,Object.defineProperty(exports,"__esModule",{value:!0}),exports})({},vendetta,vendetta.plugin,vendetta.plugins,vendetta.ui.assets,vendetta.ui.toasts,vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.utils);
