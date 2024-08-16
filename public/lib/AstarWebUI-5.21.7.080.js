/*
Company: Astar Printerlink Co., Ltd.
Product: Astar Web IME STD for React
Version: 5.21.7.080
*/
var IME_CSS_CLASS_PLUGIN_SHOW = "astar-ime-plugin";
var IME_CSS_CLASS_PLUGIN_HIDE = "astar-ime-plugin-hide";
var IME_CSS_CLASS_PANEL_SHOW = "astar-ime-panel";
var IME_CSS_CLASS_PANEL_HIDE = "astar-ime-panel-hide";
var IME_CSS_CLASS_TEXTBOX = "astar-ime-textbox";
var IME_CSS_CLASS_TEXTBOX_NOTFOUND = "astar-ime-textbox-notfound";
var IME_CSS_CLASS_SWITCH = "astar-ime-switch";
var IME_CSS_CLASS_CANDIDATE_SHOW = "astar-ime-candidate";
var IME_CSS_CLASS_CANDIDATE_HIDE = "astar-ime-candidate-hide";
var IME_CSS_CLASS_CANDIDATE_HEADER = "astar-ime-candidate-header";
var IME_CSS_CLASS_CANDIDATE_TABLE = "astar-ime-candidate-table";
var IME_CSS_CLASS_KEYBORAD_SHOW = "astar-ime-keyboard";
var IME_CSS_CLASS_KEYBORAD_HIDE = "astar-ime-keyboard-hide";
var IME_CSS_CLASS_KEYBORAD_TABLE = "astar-ime-keyboard-table";
var IME_CSS_CLASS_KEYBORAD_TABLE_KEY = "astar-ime-keyboard-table-key";
var IME_CSS_CLASS_KEYBORAD_TABLE_FUNC = "astar-ime-keyboard-table-func";

var VIRTUAL_DIR = "/AstarProxy/";
var FILTER_KEY = "[alt='WebEditor']";
var AUTO_EMBED = false;
var WORDS_PERPAGE = 9;
var FONT_FAMILY_PREFIX = "AstarWebFont-";

var IME_IMAGE_DIR = VIRTUAL_DIR;
var IME_IMAGE_FILENAME_PLUGIN_BUTTON = "ime.png";
var IME_IMAGE_FILENAME_CJ = "cj.png";
var IME_IMAGE_FILENAME_ZI = "zi.png";
var IME_IMAGE_FILENAME_PREVIOUS = "previous.png";
var IME_IMAGE_FILENAME_NEXT = "next.png";

var IME_TYPE_ZI = 1;
var IME_TYPE_CJ = 2;

var IME_TABLE_CJ = ["QAZWSXEDCRFVTGBYHNUJMIKOLP", "手日重田尸難水木金口火女廿土月卜竹弓山十一戈大人中心"];
var IME_TABLE_ZI = [
    ["1QAZ2WSXEDCRFV5TGBYHN", "ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙ"],
    ["UJM", "ㄧㄨㄩ"],
    ["8IK,9OL.0P;/-", "ㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦ"],
    [" 6347 ", " ˊˇˋ˙ˉ"],
];

var KEYBOARD_TEXT_CJ = ["手田水口廿卜山戈人心", "日尸木火土竹十大中", "重難金女月弓一", " <X"];
var KEYBOARD_TEXT_ZI = ["ㄅㄉˇˋㄓˊ˙ㄚㄞㄢㄦ", "ㄆㄊㄍㄐㄔㄗㄧㄛㄟㄣ", "ㄇㄋㄎㄑㄕㄘㄨㄜㄠㄤ", "ㄈㄌㄏㄒㄖㄙㄩㄝㄡㄥ", " <X"];

var TEXT_NON_BREAKING_SPACE = "空白鍵";
var TEXT_BACK_SPLACE = "Backspace";
var TEXT_CLOSE_KEYBOARD = "關閉";

var ID_TYPE_TARGET = 1;
var ID_TYPE_PLUGIN = 2;
var ID_TYPE_PLUGIN_BUTTON = 3;
var ID_TYPE_PANEL = 4;
var ID_TYPE_TEXTBOX = 5;
var ID_TYPE_SWITCH = 6;
var ID_TYPE_CANDIDATE = 7;
var ID_TYPE_CANDIDATE_TABLE = 8;
//var ID_TYPE_KEYBOARD = 9;

var CANDIDATE_RANGE_EUDC = 1;
var CANDIDATE_RANGE_CNS = 2;

var DEST_BEGIN_FOR_EUDC = 0xF849;
var DEST_END_FOR_EUDC = 0xF8AB;
var DEST_BEGIN_FOR_CNS = 0xF8AC;
var DEST_END_FOR_CNS = 0xF8FF;

var OSIME_TURN_OFF = 0;
var OSIME_START = 1;
var OSIME_END = 2;

var HTTP_METHOD_POST = false;

var RUNTIME = Runtime();
/*
var gDefaultDisplayPlugIn = RUNTIME.OS.toUpperCase() !== "ANDROID" && RUNTIME.OS.toUpperCase() !== "IOS";
gDefaultDisplayPlugIn = false;
var gDefaultDisplayKeyboard = false;
gDefaultDisplayKeyboard = true;
var gEnableAppendToTargetReload = false; // true for line bank only, chagne variable name @3.19.12.020
gEnableAppendToTargetReload = true;
var gUnicodeBase = true; //3.19.12.080
*/
var gDefaultDisplayPlugIn = true;
var gDefaultDisplayKeyboard = true;
var gEnableAppendToTargetReload = true; // true for line bank only, chagne variable name @3.19.12.020
var gUnicodeBase = true; //3.19.12.080
var gMultiFontByPlane = false; //4.20.1.132
var gAnalysisDocumentManual = false; //4.20.1.133
//4.20.1.132
var DOM_EVENT_HANDLER_INTERVAL = 5000; // 5 seconds
//5.20.3.200
var MULTILAYER_COMPANY = -1;

function AstarWordCode(Src, Dest, Real) {
    this.mSource = Src;
    this.mDestination = Dest;
    this.mReal = Real;
}

function AstarCandidateCode(RealCode, TmpCode) {
    this.mRealCode = 0;
    this.mTmpCode = 0;
}

function AstarIME(TargetID) {
    this.mAPI = new AstarAPI(true);
    //Members
    this.mIMEType = IME_TYPE_ZI;
    this.mCodes = null;
    this.mPageIndex = 0;
    this.mTotalPages = 0;
    this.mWordCodes = [];
    this.mCount1 = 0; // 0xF849 ~ 0xF8AB, for Big5 EUDC
    this.mCount2 = 0; // 0xF8AC ~ 0xF8FF, for CNS ignore Unicode plane 15 and 16
    this.mCandidateRange = CANDIDATE_RANGE_EUDC;
    this.mCvts = []; // Unicode to EUDCs
    this.mIEVer = this.mAPI.GetIEVersion();
    this.mOSIMEStatus = OSIME_TURN_OFF; //0: trun off, 1:compositionstart, 2:compositionend; for this.mIEVer>8 or not IE
    this.mUserKeydown = false; // for (this.mIEVer>0 && this.mIEVer<9) only
    this.mIsFireFox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    //Customer input element id
    this.mTargetID = TargetID;
    //IMEPlugIn
    this.mPlugInID = "IMEPlugIn-" + this.mTargetID;
    this.mPlugInCssClass = IME_CSS_CLASS_PLUGIN_HIDE;
    this.mPlugInButtonID = "IMEPlugInButton-" + this.mTargetID;
    this.mPlugInButtonImgSrc = IME_IMAGE_DIR + IME_IMAGE_FILENAME_PLUGIN_BUTTON;
    //IMEPanel
    this.mPanelID = "IMEPanel-" + this.mTargetID;
    this.mPanelCssClass = IME_CSS_CLASS_PANEL_HIDE;
    //IMETextBox
    this.mTextBoxID = "IMETextBox-" + this.mTargetID;
    this.mTextBoxCssClass = IME_CSS_CLASS_TEXTBOX;
    this.mTextBoxMaxLength = 4;
    //IMESwitch
    this.mSwitchID = "IMESwitch-" + this.mTargetID;
    this.mSwitchCssClass = IME_CSS_CLASS_SWITCH;
    this.mSwitchImgSrc = IME_IMAGE_DIR + IME_IMAGE_FILENAME_ZI;
    //IMECandidate
    this.mCandidateID = "IMECandidate-" + this.mTargetID;
    this.mCandidateCssClass = IME_CSS_CLASS_CANDIDATE_HIDE;
    //IMECandidateHeader
    this.mCandidateHeaderID = "IMECandidateHeader-" + this.mTargetID;
    this.mCandidateHeaderCssClass = IME_CSS_CLASS_CANDIDATE_HEADER;
    this.mCandidateHeaderPreviousImgSrc = IME_IMAGE_DIR + IME_IMAGE_FILENAME_PREVIOUS;
    this.mCandidateHeaderNextImgSrc = IME_IMAGE_DIR + IME_IMAGE_FILENAME_NEXT;
    //IMECandidateTable
    this.mCandidateTableID = "IMECandidateTable-" + this.mTargetID;
    this.mCandidateTableCssClass = IME_CSS_CLASS_CANDIDATE_TABLE;
    //IMEKeyboard
    this.mKeyboardID = "IMEKeyboard-" + this.mTargetID;
    this.mKeyboardCssClass = IME_CSS_CLASS_KEYBORAD_HIDE;

    this.mLoaded = false;
    this.mPanelUsed = false;
    this.mCandidateRowIndex = -1;
    this.mLoadedValue = "";
    //20191120
    //this.mSyncTargetIDs = SyncTargetIDs; //can be null, used in SetTargetValue function
    this.mParentID = "";
    //4.19.12.260
    this.mListenTargetEvent = false;
    //
    this.mPropertyChangeFunc = null;
}
AstarIME.prototype.CreatePlugIn = function () {
    var tPEmt = document.createElement("div");
    tPEmt.id = this.mPlugInID;
    //tPEmt.className = IME_CSS_CLASS_PLUGIN_HIDE;
    //3.19.10.231 always display from simon
    tPEmt.className = gDefaultDisplayPlugIn ? IME_CSS_CLASS_PLUGIN_SHOW : IME_CSS_CLASS_PLUGIN_HIDE;
    var tCEmt = document.createElement("img");
    tCEmt.id = this.mPlugInButtonID;
    tCEmt.src = this.mPlugInButtonImgSrc;
    tPEmt.appendChild(tCEmt);
    return tPEmt;
}
AstarIME.prototype.CreatePanel = function () {
    var tPEmt = document.createElement("div");
    tPEmt.id = this.mPanelID;
    tPEmt.className = IME_CSS_CLASS_PANEL_HIDE;
    //TextBox
    var tCEmt = document.createElement("input");
    tCEmt.id = this.mTextBoxID;
    tCEmt.className = IME_CSS_CLASS_TEXTBOX;
    tCEmt.type = "text";
    tCEmt.value = "";
    tPEmt.appendChild(tCEmt);
    //Switch
    tCEmt = document.createElement("img");
    tCEmt.id = this.mSwitchID;
    tCEmt.className = IME_CSS_CLASS_SWITCH;
    tCEmt.src = this.mSwitchImgSrc;
    tPEmt.appendChild(tCEmt);
    tPEmt.appendChild(this.CreateCandidate());
    tPEmt.appendChild(this.CreateKeyboard());
    return tPEmt;
}
AstarIME.prototype.CreateCandidate = function () {
    var tPEmt = document.createElement("div");
    tPEmt.id = this.mCandidateID;
    tPEmt.className = IME_CSS_CLASS_CANDIDATE_HIDE;
    //CandidateHeader
    var tCEmt = document.createElement("table");
    tCEmt.id = this.mCandidateHeaderID;
    tCEmt.className = IME_CSS_CLASS_CANDIDATE_HEADER;
    var szHtml = "<tr><td align=\"left\"><img src=\"" + this.mCandidateHeaderPreviousImgSrc + "\"";
    szHtml += " onclick=\"PreviousPage('" + this.mTargetID + "')\"/></td>";
    szHtml += "<td align=\"center\" onclick=\"FocusOnTextBox('" + this.mTextBoxID + "')\">&nbsp;</td>";
    szHtml += "<td align=\"right\"><img src=\"" + this.mCandidateHeaderNextImgSrc + "\"";
    szHtml += " onclick=\"NextPage('" + this.mTargetID + "')\"/></td><tr>";
    this.mAPI.SetElementHTML(tCEmt, szHtml);
    tPEmt.appendChild(tCEmt);
    //CandidateTable
    tCEmt = document.createElement("table");
    tCEmt.id = this.mCandidateTableID;
    tCEmt.className = IME_CSS_CLASS_CANDIDATE_TABLE;
    tPEmt.appendChild(tCEmt);
    return tPEmt;
}
AstarIME.prototype.CreateKeyboard = function () {
    var tPEmt = document.createElement("div");
    tPEmt.id = this.mKeyboardID;
    tPEmt.className = IsEnableKeyboradDevice() ? IME_CSS_CLASS_KEYBORAD_HIDE : IME_CSS_CLASS_KEYBORAD_SHOW;
    return tPEmt;
}
AstarIME.prototype.MergeKeyboardHtml = function (KeyboardTextTable) {
    var szHtml = "";
    for (var i = 0; i < KeyboardTextTable.length; i++) {
        szHtml += "<table class=\"" + IME_CSS_CLASS_KEYBORAD_TABLE + "\"><tr>";
        for (var j = 0; j < KeyboardTextTable[i].length; j++) {
            var ch = KeyboardTextTable[i].charAt(j);
            if (ch === 'ˇ' || ch === 'ˋ' || ch === 'ˊ' || ch === '˙') {
                if (this.mIEVer !== 0) {// for IE only
                    ch = "&nbsp;" + ch + "&nbsp;";
                }
                szHtml += this.MergeKeyboardItemHtml(IME_CSS_CLASS_KEYBORAD_TABLE_KEY, ch);
            } else if (ch === '\x20') {
                szHtml += this.MergeKeyboardItemHtml(IME_CSS_CLASS_KEYBORAD_TABLE_FUNC, TEXT_NON_BREAKING_SPACE);
            } else if (ch === '<') {
                szHtml += this.MergeKeyboardItemHtml(IME_CSS_CLASS_KEYBORAD_TABLE_FUNC, TEXT_BACK_SPLACE);
            } else if (ch === 'X') {
                szHtml += this.MergeKeyboardItemHtml(IME_CSS_CLASS_KEYBORAD_TABLE_FUNC, TEXT_CLOSE_KEYBOARD);
            } else {

                szHtml += this.MergeKeyboardItemHtml(IME_CSS_CLASS_KEYBORAD_TABLE_KEY, ch);
            }
        }
        szHtml += "</tr></table>";
    }
    return szHtml;
}
AstarIME.prototype.MergeKeyboardItemHtml = function (CssClass, Text) {
    var szHtml = "<td onclick=\"KeyboardPress('" + this.mTargetID + "', this)\"";
    if (!IsNullOrEmptyString(CssClass)) {
        szHtml += " class=\"" + CssClass + "\"";
    }
    szHtml += ">" + Text + "</td>";
    return szHtml;
}
AstarIME.prototype.OnKeyboardPress = function (Cell) {
    var szText = this.mAPI.TrimString(Cell.innerText);
    var nIdx = 0;
    var nCode = 0;

    if (szText === TEXT_BACK_SPLACE) {
        szText = this.mAPI.GetValue(this.mTextBoxID);
        if (szText.length - 1 > 0) {
            szText = szText.substring(0, szText.length - 1);
        } else {//if (szText.length - 1 <= 0) {
            szText = "";
        }
        this.SetTextBox(szText, true);
    } else if (szText === TEXT_CLOSE_KEYBOARD) {
        this.CloseKeyboard();
        return;
    } else {
        if (szText === TEXT_NON_BREAKING_SPACE) {
            szText = "\x20";
        }

        if (this.mIMEType === IME_TYPE_CJ) {
            nIdx = IME_TABLE_CJ[1].indexOf(szText);
            if (nIdx >= 0) {
                szText = IME_TABLE_CJ[0].charAt(nIdx);
            }
        } else {
            for (var i = 0; i < 4; i++) {
                nIdx = IME_TABLE_ZI[i][1].indexOf(szText);
                if (nIdx >= 0) {
                    szText = IME_TABLE_ZI[i][0].charAt(nIdx);
                    break;
                }
            }
        }

        nCode = szText.charCodeAt(0);
        szText = this.ConvertIMEKeyToText(nCode);
        this.SetTextBox(szText, true);
        if (this.IsFindCandidateCondition(nCode, szText)) {
            var bShow = !this.FindCandidate(szText);
            this.DisplayKeyboard(bShow);
        }
    }
}
AstarIME.prototype.DisplayKeyboard = function (Show) {
    if (IsEnableKeyboradDevice()) {
        this.mAPI.SetAttribute(this.mKeyboardID, "class", (Show ? IME_CSS_CLASS_KEYBORAD_SHOW : IME_CSS_CLASS_KEYBORAD_HIDE));
    } else {
        this.mAPI.SetAttribute(this.mKeyboardID, "class", IME_CSS_CLASS_KEYBORAD_HIDE);
    }
}
AstarIME.prototype.SetKeyboardTable = function () {
    var szHtml = this.MergeKeyboardHtml(this.mIMEType === IME_TYPE_CJ ? KEYBOARD_TEXT_CJ : KEYBOARD_TEXT_ZI);
    this.mAPI.RemoveHTML(this.mKeyboardID);
    this.mAPI.AppendChildElementByID(this.mKeyboardID, szHtml);
    this.DisplayKeyboard(true);
}
AstarIME.prototype.CloseKeyboard = function () {
    //this.DisplayPlugIn(false);
    this.DisplayPlugIn(true);
    this.DisplayPanel(false);
    this.SetTextBox("", false);
    this.ClearCandiate();
    this.SetCandidateTable();
    this.DisplayCandidate(false);
}
AstarIME.prototype.AppendToTarget = function (IsNew) {
    var nIEVer = 0;
    if (IsNew) {
        var tPulgIn = this.CreatePlugIn();
        var tPanel = this.CreatePanel();
        nIEVer = this.mAPI.GetIEVersion();
        this.LoadFontForTargetValue(false);
        //InsertAfter(tPulgIn, document.getElementById(this.mTargetID));
        InsertAfter(tPulgIn, this.GetTargetElement());
        InsertAfter(tPanel, document.getElementById(this.mPlugInID));
        //4.20.2.200
        this.SetPlugInPosition();
    } else {
        if (!gEnableAppendToTargetReload) {
            return;
        }

        var t = document.getElementById(this.mPlugInID);
        if (t === null) {
            var tPulgIn = this.CreatePlugIn();
            var tPanel = this.CreatePanel();
            //InsertAfter(tPulgIn, document.getElementById(this.mTargetID));
            InsertAfter(tPulgIn, this.GetTargetElement());
            InsertAfter(tPanel, document.getElementById(this.mPlugInID));
        }
        nIEVer = this.mAPI.GetIEVersion();
    }

    var e = $._data($('#' + this.mSwitchID)[0], 'events');
    if (e !== undefined && e.click !== undefined) {
        return; // all need events bound
    }

    this.mAPI.SetEventHandler(this.mPlugInID, "click", ShowIMEPanel);
    this.mAPI.SetEventHandler(this.mTextBoxID, "keypress", Normalize);
    this.mAPI.SetEventHandler(this.mSwitchID, "click", SwitchIME);
    this.mAPI.SetEventHandler(this.mTargetID, "focus", TargetFocus);
    if (nIEVer > 0 && nIEVer <= 8) {
        this.mAPI.SetEventHandler(this.mTargetID, "propertychange", TargetInput);
        this.mAPI.SetEventHandler(this.mTargetID, "keydown", TargetKeydown);
    } else {
        //4.19.12.260
        //this.mAPI.SetEventHandler(this.mTargetID, "input", TargetInput);
        //this.mAPI.SetEventHandler(this.mTargetID, "compositionstart", OSIMEStart);
        //this.mAPI.SetEventHandler(this.mTargetID, "compositionend", OSIMEEnd);
    }
    this.mAPI.SetEventHandler(this.mTextBoxID, "keyup", CandiateCursorMove);
    this.mAPI.SetEventHandler(this.mTextBoxID, "blur", ClosePanel);
    this.mAPI.SetEventHandler(this.mPanelID, "mouseenter", MouseEnterPanel);
    this.mAPI.SetEventHandler(this.mPanelID, "mouseleave", MouseLeavePanel);

    var input = document.getElementById(this.mTextBoxID);
    ['compositionstart',
    'compositionupdate',
    'compositionend',
    'keydown',
    'keyup',
    'keypress',
    'input',
    'focus'].forEach(function (event) {
        input.addEventListener(event, function (ev) {
            //var s = "data=" + ev.data + ",char=" + ev.char + ",charCode=" + ev.charCode;
            //s += ",key=" + ev.key + ",keyCode=" + ev.keyCode;
            //WriteLog(event + ': ' + s);
            if (event === "input") {
                var t = FindAstarIMEByID(ID_TYPE_TEXTBOX, input.id);
                var s = $(ev.target).val();
                var z = "";

                for (var i = 0; i < s.length; i++) {
                    var c = s.charAt(i);
                    if (c !== '\u3000') {
                        if (t.mIMEType === IME_TYPE_CJ) {
                            if (IME_TABLE_CJ[0].indexOf(c) < 0 &&
									IME_TABLE_CJ[1].indexOf(c) < 0) {
                                continue; //ignore invalid char
                            }
                        } else {//IME_TYPE_ZI
                            if (IME_TABLE_ZI[0][0].indexOf(c) < 0 &&
									IME_TABLE_ZI[0][1].indexOf(c) < 0 &&
									IME_TABLE_ZI[1][0].indexOf(c) < 0 &&
									IME_TABLE_ZI[1][1].indexOf(c) < 0 &&
									IME_TABLE_ZI[2][0].indexOf(c) < 0 &&
									IME_TABLE_ZI[2][1].indexOf(c) < 0 &&
									IME_TABLE_ZI[3][0].indexOf(c) < 0 &&
									IME_TABLE_ZI[3][1].indexOf(c) < 0) {
                                continue; //ignore invalid char
                            }
                        }
                    }
                    // valid char
                    z += c;
                }

                if (z.length !== s.length) {
                    $(ev.target).val(z);
                }
            }

            if (event === "keydown") {
                var t = FindAstarIMEByID(ID_TYPE_TEXTBOX, input.id);
                if ((RUNTIME.OS.toUpperCase() === "MAC OS X" || RUNTIME.OS.toUpperCase() === "IOS") &&
                    RUNTIME.Browser.toUpperCase() === "SAFARI") {
                    if (ev.key !== undefined) {//iphone x
                        var nKeyCode = ev.key.charCodeAt(0);
                        var s = String.fromCharCode(nKeyCode);
                        if (t.IsFindCandidateCondition(nKeyCode, s)) {
                            s = NormalizeZuIn($(ev.target).val() + s);
                            $(ev.target).val(s);
                            t.FindCandidate(s);
                            //t.DisplayKeyboard(false);
                            LeaveFromTextBox(input.id);
                        }
                    }
                }
            }

            if (event === "focus") {
                if (IsEnableKeyboradDevice()) {
                    if (RUNTIME.OS.toUpperCase() !== "WINDOWS") { // 3.19.12.020
                        LeaveFromTextBox(input.id);
                    }
                } else {
                    var t = FindAstarIMEByID(ID_TYPE_TEXTBOX, input.id);
                    t.mAPI.SetAttribute(t.mTextBoxID, "class", IME_CSS_CLASS_TEXTBOX);
                    t.mAPI.SetValue(t.mTextBoxID, "");
                }
            }
        }, true);
    });
}

AstarIME.prototype.LoadFontForTargetValue = function (FocusTarget) {
    if (this.mLoaded) {
        var ss = this.mAPI.GetValue(this.mTargetID);
        if (this.mLoadedValue === ss) {
            return;
        }
    }

    if (this.mOSIMEStatus === OSIME_START && this.mIEVer === 11) {
        //20191128 在富邦發現，IE 11.0.9600.19266, Win7 與 jQuery validate 會衝突，導致OS IME 的字根被當成字。
        return;
    }

    var szValue = this.mAPI.GetValue(this.mTargetID);
    if (!IsNullOrEmptyString(szValue)) {
        var szDest = "";
        var szMsg = "";
        var n = 0;
        var bSurrogate = false;

        for (var i = 0; i < szValue.length; i++) {
            bSurrogate = false;
            n = szValue.charCodeAt(i);
            if (gUnicodeBase) {
                if ((n >= 0xAC00 && n <= 0xBB9F) || (n >= 0xE000 && n <= 0xF8FF)) {
                    this.SetWordCode(szValue.charAt(i));
                    szDest += String.fromCharCode(n);
                } else if (n > 0xD800 && n <= 0xDBFF) {
                    szDest += String.fromCharCode(n);
                    i++;
                    n = szValue.charCodeAt(i);
                    szDest += String.fromCharCode(n);
                } else {
                    szDest += String.fromCharCode(n);
                }
            } else {
                if (n >= 0xE000 && n < DEST_BEGIN_FOR_EUDC) {
                    this.SetWordCode(szValue.charAt(i));
                    szDest += String.fromCharCode(n);
                } else {
                    if (this.mCandidateRange === CANDIDATE_RANGE_CNS) {
                        szDest += String.fromCharCode(n);
                    } else { // convert unicode word to eudc
                        /* 20190927 for Harris and Simon
                        if (n > 0xD800 && n <= 0xDBFF) {
                        n = UTF16ToUnicode(n, szValue.charCodeAt(i + 1));
                        bSurrogate = true;
                        }
                        n = this.GetEUDCOfUnicode(n);
                        if (n === 0) {
                        szMsg += String.fromCharCode(szValue.charCodeAt(i));
                        if (bSurrogate) {
                        szMsg += String.fromCharCode(szValue.charCodeAt(i + 1));
                        i++;
                        }
                        continue;
                        } else {
                        if (!this.ConvertedEUDCExist(n)) {
                        this.mCvts.push(n);
                        }
                        szDest += String.fromCharCode(n);
                        }
                        */
                        if (n > 0xD800 && n <= 0xDBFF) {
                            szDest += String.fromCharCode(n);
                            i++;
                            n = szValue.charCodeAt(i);
                            szDest += String.fromCharCode(n);
                        } else {
                            szDest += String.fromCharCode(n);
                        }
                    }
                }
            }
        }

        //if (szMsg.length > 0) {
        //    alert("[" + szMsg + "]為無法對應到造字，請聯絡服務人員");
        //}
        if (szDest.length > 0) {
            this.SetTargetValueWithNewFont(szDest, FocusTarget);
            this.mLoaded = true;
            this.mLoadedValue = szDest;
        }
    }
}
AstarIME.prototype.DisplayPlugIn = function (Show) {
    this.mAPI.SetAttribute(this.mPlugInID, "class", (Show ? IME_CSS_CLASS_PLUGIN_SHOW : IME_CSS_CLASS_PLUGIN_HIDE));
}
AstarIME.prototype.DisplayPanel = function (Show) {
    this.mAPI.SetAttribute(this.mPanelID, "class", (Show ? IME_CSS_CLASS_PANEL_SHOW : IME_CSS_CLASS_PANEL_HIDE));
}
AstarIME.prototype.OnClosePanel = function () {
    if (!this.mPanelUsed) {
        this.DisplayPlugIn(false);
        this.DisplayPanel(false);
        this.SetTextBox("", false);
        this.ClearCandiate();
        this.SetCandidateTable();
        this.DisplayCandidate(false);
    }
}
AstarIME.prototype.OnMouseEnterPanel = function () {
    this.mPanelUsed = true;
}
AstarIME.prototype.OnMouseLeavePanel = function () {
    this.mPanelUsed = false;
}
AstarIME.prototype.SetTextBox = function (Value, IsFocus) {
    this.mAPI.SetValue(this.mTextBoxID, Value);
    this.mAPI.SetAttribute(this.mTextBoxID, "maxlength", this.mTextBoxMaxLength);
    if (IsFocus) {
        //if (!IsEnableKeyboradDevice()) {
        this.mAPI.GetElementByID(this.mTextBoxID).focus();
        $("#" + this.mTextBoxID).trigger("click");
        //}
    }
    this.mAPI.SetAttribute(this.mTextBoxID, "class", IME_CSS_CLASS_TEXTBOX);
}
AstarIME.prototype.SetTextBoxForCandidateNotFound = function (Value) {
    this.mAPI.SetValue(this.mTextBoxID, Value);
    this.mAPI.SetAttribute(this.mTextBoxID, "maxlength", this.mTextBoxMaxLength);
    this.mAPI.GetElementByID(this.mTextBoxID).focus();
    this.mAPI.SetAttribute(this.mTextBoxID, "class", IME_CSS_CLASS_TEXTBOX_NOTFOUND);
}
AstarIME.prototype.SetSwith = function () {
    var szSrc = IME_IMAGE_DIR;
    switch (this.mIMEType) {
        case IME_TYPE_CJ:
            szSrc += IME_IMAGE_FILENAME_CJ;
            break;
        case IME_TYPE_ZI:
            szSrc += IME_IMAGE_FILENAME_ZI;
            break;
        default:
            szSrc = "Unknow.png";
            break;
    }
    this.mAPI.SetAttribute(this.mSwitchID, "src", szSrc);
}
AstarIME.prototype.DisplayCandidate = function (Show) {
    this.mAPI.SetAttribute(this.mCandidateID, "class", (Show ? IME_CSS_CLASS_CANDIDATE_SHOW : IME_CSS_CLASS_CANDIDATE_HIDE));
    if (Show) {
        this.mCandidateRowIndex = 0;
        SetTableRowBackgroundColor(this.mCandidateTableID, this.mCandidateRowIndex, true);
    } else {
        this.mCandidateRowIndex = -1;
    }
}
AstarIME.prototype.SetCandidateHeader = function () {
    this.mAPI.SetCellText(this.mCandidateHeaderID, 0, 1, (this.mPageIndex + 1) + "/" + this.mTotalPages);
}
AstarIME.prototype.SetCandidateTable = function () {
    var bShow = false;
    this.mAPI.RemoveHTML(this.mCandidateTableID);
    if (this.mCodes !== null && this.mCodes.length > 0) {
        if (this.mPageIndex >= 0 && this.mPageIndex < this.mCodes.length) {
            var sFontFamily = this.mAPI.GetStyle(this.mCandidateTableID, "font-family");
            bShow = true;
            for (var i = 0, j = 0; i < WORDS_PERPAGE; i++) {
                j = i + this.mPageIndex * WORDS_PERPAGE;
                if (this.mCodes.length - j <= 0) {
                    break;
                }

                //var szWord = this.CodeToWord(this.mCodes[j].mTmpCode);
                var nCode = gUnicodeBase ? this.mCodes[j].mRealCode : this.mCodes[j].mTmpCode;
                var szWord = this.CodeToWord(nCode);
                var szHtml = "<tr onclick=\"CandidateSelected('" + this.mCandidateTableID + "', this)\">";
                if (sFontFamily === null || sFontFamily.legnth === 0) {
                    szHtml += "<td>" + (i + 1) + "</td><td>" + szWord + "</td></tr>";
                } else {
                    szHtml += "<td>" + (i + 1) + "</td><td style='font-family:" + sFontFamily + "'>" + szWord + "</td></tr>";
                }
                this.mAPI.AppendChildElementByID(this.mCandidateTableID, szHtml);
            }
            this.SetCandidateHeader();
        }
    }
    this.DisplayCandidate(bShow);
}
AstarIME.prototype.CodeToWord = function (Unicode) {
    return UnicodeToUTF16(Unicode);
}
AstarIME.prototype.WordToCode = function (Word) {
    if (Word.length >= 2) {
        return UTF16ToUnicode(Word.charCodeAt(0), Word.charCodeAt(1));
    } else {
        return Word.charCodeAt(0);
    }
}
AstarIME.prototype.CreateFontFamily = function () {
    return FONT_FAMILY_PREFIX + (NumberToHexString(new Date().getTime()));
}
//Type:0(ConvertForPrevPage),1(IME_TYPE_ZI),2(IME_TYPE_CJ),3(Special)
AstarIME.prototype.AppendFontFace = function (Type, Value) {
    var szFontFamily = this.CreateFontFamily();
    var szQuery = "";
    var szTTFSrc = VIRTUAL_DIR + "GetFontFile.aspx";
    var szEOTSrc = VIRTUAL_DIR + "GetFontFileEOT.aspx";
    var szFontFace = "";
    var szAllCodes = null;

    if (Type === 0) {
        szAllCodes = this.MergeFontCodesString();
        szQuery = "?WordCodes=" + encodeURIComponent(szAllCodes.Source);
        szQuery += "&EUDCodes=" + encodeURIComponent(szAllCodes.Destination);
    } else if (Type === IME_TYPE_ZI || Type === IME_TYPE_CJ) {
        szQuery = "?Type=" + encodeURIComponent(Type) + "&Key=" + encodeURIComponent(Value);
    } else { // Type 3
        if (gUnicodeBase) {
            if (gMultiFontByPlane) {
                return this.AppendMultiFontFace(szTTFSrc, szEOTSrc, Value);
            } else {
                return this.AppendMultiPlaneFontFace(szTTFSrc, szEOTSrc, Value);
            }
        }

        var szCodes1 = "";
        var szCodes2 = "";
        for (var i = 0; i < Value.length; i++) {
            var n1 = Value.charCodeAt(i);
            if (n1 >= 0xE000 && n1 <= 0xF8FF) {
                var n2 = n1;
                for (var j = 0; j < this.mWordCodes.length; j++) {
                    if (n1 === this.mWordCodes[j].mDestination) {
                        n2 = this.mWordCodes[j].mReal;
                        break;
                    }
                }
                szCodes1 += NumberToHexString(n2) + ",";
                szCodes2 += NumberToHexString(n1) + ",";
            }
        }
        szCodes1 = szCodes1.substring(0, szCodes1.length - 1);
        szCodes2 = szCodes2.substring(0, szCodes2.length - 1);

        szQuery = "?WordCodes=" + encodeURIComponent(szCodes1);
        szQuery += "&EUDCodes=" + encodeURIComponent(szCodes2);
    }
    szQuery += "&Company=" + encodeURIComponent(MULTILAYER_COMPANY);
    szQuery += "&Dummy=1";

    szTTFSrc += szQuery;
    szEOTSrc += szQuery;

    if (this.mIEVer === 8) {
        if (Type === IME_TYPE_ZI || Type === IME_TYPE_CJ) {
            Type = IE8_FONT_CANDIDATE;
        } else { // Type 3
            Type = IE8_FONT_TEXTBOX;
        }
        CreateFontStyleSheetIE8(Type, szFontFamily, szQuery);
    } else {
        szFontFace = "@font-face{";
        szFontFace += "   font-family:" + szFontFamily + ";";
        szFontFace += "   font-style:normal;";
        szFontFace += "   font-weight:normal;";
        szFontFace += "   src:url('" + szEOTSrc + "');";
        szFontFace += "   src:url('" + szEOTSrc + "?#iefix') format('embedded-opentype'),";
        szFontFace += "       url('" + szTTFSrc + "') format('truetype');";
        if (!gUnicodeBase) {
            szFontFace += "   unicode-range: U+E000-F8FF;";
        }
        szFontFace += "}";
        this.mAPI.CreateStyleSheet(szFontFace);
    }
    return szFontFamily;
}
// for gUnicodeBase=true only
// 4.19.12.300
AstarIME.prototype.AppendMultiPlaneFontFace = function (TTFSrc, EOTSrc, Value) {
    var sFontFamily = "";
    var sCode = "";
    var n = 0;
    var sHex = "";
    var sURange = "";

    for (var i = 0; i < Value.length; i++) {
        n = Value.charCodeAt(i);
        if (n > 0xD800 && n <= 0xDBFF) {
            n = UTF16ToUnicode(n, Value.charCodeAt(i + 1));
            i++;
        }
        for (var j = 0; j < this.mWordCodes.length; j++) {
            if (n === this.mWordCodes[j].mDestination) {//mDestination==mReal
                sHex = NumberToHexString(n);
                if (sCode.indexOf(sHex) < 0) {//new code
                    sCode += sHex + ",";
                    if (n <= 0xFFFF) {
                        sURange += "U+" + sHex + ",";
                    }
                }
                break;
            }
        }
    }
    sURange += "U+20000-FFFFF;";

    var sQuery = "";
    var sTTF = "";
    var sEOT = "";
    var sFontFace = "";

    if (sCode.length > 0) {
        sCode = encodeURIComponent(sCode.substring(0, sCode.length - 1));
        sQuery = "?WordCodes=" + sCode + "&EUDCodes=" + sCode;
        sQuery += "&Company=" + encodeURIComponent(MULTILAYER_COMPANY);
        sQuery += "&Dummy=1";
        sTTF = TTFSrc + sQuery;
        sEOT = EOTSrc + sQuery;
        sFontFamily = this.CreateFontFamily();

        sFontFace = "@font-face{";
        sFontFace += "   font-family:" + sFontFamily + ";";
        sFontFace += "   font-style:normal;";
        sFontFace += "   font-weight:normal;";
        sFontFace += "   src:url('" + sEOT + "');";
        sFontFace += "   src:url('" + sEOT + "?#iefix') format('embedded-opentype'),";
        sFontFace += "       url('" + sTTF + "') format('truetype');";
        sFontFace += "   unicode-range: " + sURange;
        sFontFace += "}";
        this.mAPI.CreateStyleSheet(sFontFace);
    }

    return sFontFamily;
}
AstarIME.prototype.SetFontFamily = function (TargetID, FontFamily) {
    //var tSrcArray = this.mAPI.GetStyle(TargetID, "font-family").split(',');
    //4.19.12.120
    var tSrcArray = this.GetTargetElementStyle("font-family").split(',');
    var tDestArray = new Array();

    if (gUnicodeBase) {//FontFamily include multi fonts
        tDestArray = FontFamily.split(',');
    } else {
        tDestArray.push(FontFamily);
    }
    for (var i = 0; i < tSrcArray.length; i++) {
        if (tSrcArray[i].indexOf(FONT_FAMILY_PREFIX, 0) < 0) {
            tDestArray.push(tSrcArray[i]);
        }
    }
    //this.mAPI.SetStyle(TargetID, "font-family", tDestArray.toString());
    //4.19.12.120
    this.SetTargetElementStyle("font-family", tDestArray.toString());
}
AstarIME.prototype.PlugInButtonOnClick = function () {
    //4.19.12.260
    if (!this.mListenTargetEvent) {
        this.mAPI.SetEventHandler(this.mTargetID, "input", TargetInput);
        this.mAPI.SetEventHandler(this.mTargetID, "compositionstart", OSIMEStart);
        this.mAPI.SetEventHandler(this.mTargetID, "compositionend", OSIMEEnd);
        this.mListenTargetEvent = true;
    }

    this.DisplayPlugIn(false);
    this.DisplayPanel(true);
    this.SetTextBox("", true);
    this.mIMEType = IME_TYPE_ZI;
    this.SetSwith();
    this.DisplayCandidate(false);
    if (this.mCodes !== null && this.mCodes.length > 0) {
        this.mCodes.length = 0;
    }
    this.SetCandidateTable();
    this.DisplayKeyboard(false);
    this.SetKeyboardTable();
    //this.mPanelUsed = true; //for IE //4.20.1.170: only OnMouseEnterPanel,this.mPanelUsed can be true
}
AstarIME.prototype.ConvertIMEKeyToText = function (KeyCode) {
    var szKey = String.fromCharCode(KeyCode).toUpperCase();
    var szText = this.mAPI.GetValue(this.mTextBoxID);
    var nIdx = 0;
    var b = (KeyCode < 0x80 ? 0 : 1);

    if (this.mIMEType === IME_TYPE_CJ) {
        nIdx = IME_TABLE_CJ[b].indexOf(szKey);
        if (nIdx >= 0) {
            szText += IME_TABLE_CJ[1].charAt(nIdx);
        }
    } else if (this.mIMEType === IME_TYPE_ZI) {
        var bFound = false;
        var szBuffer = new Array(this.mTextBoxMaxLength);

        for (var i = 0; i < 4 && !bFound; i++) {
            nIdx = IME_TABLE_ZI[i][b].indexOf(szKey);
            if (nIdx >= 0) {
                szKey = IME_TABLE_ZI[i][1].charAt(nIdx);
                nIdx = i;
                bFound = true;
            }
        }

        if (bFound) {
            var szTmp = "";
            for (var i = 0; i < szBuffer.length; i++) {
                szBuffer[i] = (i < szText.length) ? szText.charAt(i) : String.fromCharCode(0x3000);
                if (nIdx < szBuffer.length) {
                    szBuffer[nIdx] = szKey;
                }
                szTmp += szBuffer[i];
            }
            szText = szTmp;
        }
    }
    return szText;
}
AstarIME.prototype.IsFindCandidateCondition = function (KeyCode, KeyText) {
    var bYES = false;
    var szKey = String.fromCharCode(KeyCode).toUpperCase();

    if (this.mIMEType === IME_TYPE_CJ && KeyCode === 0x20) {
        bYES = true;
    } else if (this.mIMEType === IME_TYPE_ZI) {// && IME_TABLE_ZI[3][0].indexOf(szKey) >= 0) {
        var b = KeyCode < 0x80 ? 0 : 1;
        if (IME_TABLE_ZI[3][b].indexOf(szKey) >= 0) {
            bYES = true;
        }
    }

    if (bYES) {
        if (KeyText.length === 0) {
            bYES = false;
        } else {
            var i = 0;
            for (; i < KeyText.length; i++) {
                if (KeyText.charCodeAt(i) !== 0x3000 && KeyText.charCodeAt(i) !== 0x20) {
                    break; // find correct key
                }
            }
            bYES = i < KeyText.length;
        }
    }
    return bYES;
}
AstarIME.prototype.TextBoxOnKeyPress = function () {
    var nCharCode = Event.charCode !== null ? Event.charCode : Event.keyCode;
    if (this.mCodes !== null) {//Candidate table is opened.
        if (nCharCode >= 49 && nCharCode <= 57) {
            var nIndex = (nCharCode - 49) + (this.mPageIndex * 9);
            if (nIndex < this.mCodes.length) {
                var sWord = this.CodeToWord(this.mCodes[nIndex].mTmpCode);
                this.ApplyCandidateToTarget(sWord);
            }
        }
    } else {
        var szKey = String.fromCharCode(nCharCode).toUpperCase();
        var szText = this.ConvertIMEKeyToText(nCharCode);
        this.SetTextBox(szText, true);
        if (this.IsFindCandidateCondition(nCharCode, szText)) {
            this.FindCandidate(szText);
            this.DisplayKeyboard(false);
            if (RUNTIME.IsMobile) {
                LeaveFromTextBox(this.mTextBoxID);
            } else {
                FocusOnTextBox(this.mTextBoxID);
            }
        }
    }
    Event.preventDefault ? Event.preventDefault() : (Event.returnValue = false);
}
function FocusOnTextBox(TextBoxID) {
    $("#" + TextBoxID).focus();
}
function LeaveFromTextBox(TextBoxID) {//for hiding os soft keyboard
    $("#" + TextBoxID).blur();
}
AstarIME.prototype.OnCandiateCursorMove = function () {
    var nCharCode = (Event.charCode !== null && Event.charCode !== 0) ? Event.charCode : Event.keyCode;
    if (this.mCodes !== null) {//Candidate table is opened.
        if (nCharCode === 8) {//Backspace
            this.ClearCandiate();
            this.SetCandidateTable();
            this.DisplayCandidate(false);
        } else if (nCharCode === 37) {//left
            this.PreviousPage();
        } else if (nCharCode === 39) {//right
            this.NextPage();
        } else if (nCharCode === 38) {//up
            if (this.mCandidateRowIndex > 0) {
                SetTableRowBackgroundColor(this.mCandidateTableID, this.mCandidateRowIndex, false);
                this.mCandidateRowIndex--;
                SetTableRowBackgroundColor(this.mCandidateTableID, this.mCandidateRowIndex, true);
            }
        } else if (nCharCode === 40) {//down
            if (this.mCandidateRowIndex < 8) {
                SetTableRowBackgroundColor(this.mCandidateTableID, this.mCandidateRowIndex, false);
                this.mCandidateRowIndex++;
                SetTableRowBackgroundColor(this.mCandidateTableID, this.mCandidateRowIndex, true);
            }
        } else if (nCharCode === 13) {//enter
            if (this.mCandidateRowIndex >= 0 && this.mCandidateRowIndex <= 8) {
                var sSelector = "#" + this.mCandidateTableID +
                    " tr:nth-child(" + (this.mCandidateRowIndex + 1) + ")" +
                    " td:nth-child(2)";
                this.ApplyCandidateToTarget($(sSelector).text());
            }
        }
    }
    Event.preventDefault ? Event.preventDefault() : (Event.returnValue = false);
}
function SetTableRowBackgroundColor(TableID, RowIndex, IsCursorOver) {
    var sSelector = "#" + TableID + " tr:nth-child(" + (RowIndex + 1) + ")";
    $(sSelector).css("background-color", (IsCursorOver ? "rgb(205,232,255)" : "white"));
}
AstarIME.prototype.SwitchOnClick = function () {
    this.mIMEType = this.mIMEType === IME_TYPE_CJ ? IME_TYPE_ZI : IME_TYPE_CJ;
    this.SetSwith();
    this.SetTextBox("", true);
    this.SetCandidateTable();
    this.DisplayCandidate(false);
    this.SetKeyboardTable();
}
AstarIME.prototype.SetTargetValue = function (Word) {
    var nType = 0;
    //var szValue = this.mAPI.GetValue(this.mTargetID);
    //4.19.12.120
    var szValue = this.GetTargetElementValue();
    //szValue = szValue + Word;
    //3.19.12.111
    //var nCaretPosition = GetCaretPosition(this.mTargetID);
    //4.19.12.120
    var nCaretPosition = GetCaretPosition(this.GetTargetElement());
    szValue = this.InsertWord(nCaretPosition, szValue, Word);

    if (this.mCandidateRange === CANDIDATE_RANGE_EUDC) {
        nType = 3;
        szValue = this.ConvertValueWithWordCodes(szValue);
    } else {
        if (gUnicodeBase) {
            nType = 3;
        }
    }

    var szFontFamily = this.AppendFontFace(nType, szValue);
    //this.SetFontFamily(this.mTargetID, szFontFamily);
    //this.mAPI.SetValue(this.mTargetID, szValue);
    //$("#" + this.mTargetID).trigger("change").trigger("input");
    //this.mAPI.GetElementByID(this.mTargetID).focus();
    //SetCaretPosition(this.mTargetID, nCaretPosition + 1);
    //4.19.12.120
    var t = this.GetTargetElement();
    this.SetTargetElementStyle("font-family", szFontFamily);
    $(t).val(szValue);
    $(t).trigger("change").trigger("input");
    $(t).focus();
    //SetCaretPosition(t, nCaretPosition + 1);
    //4.19.12.121
    SetCaretPosition(t, nCaretPosition + Word.length);
    //
    this.CallPropertyChangeFunc();
}
AstarIME.prototype.CallPropertyChangeFunc = function () {
    if(this.mPropertyChangeFunc !== undefined) {
        let tElement = null;
        if (!IsNullOrEmptyString(this.mParentID)) {
            let sTargetID = this.mTargetID.replace(this.mParentID, "");
            let sParentID = this.mParentID.substring(1, this.mParentID.length);
            tElement = $("#" + sParentID).find("#" + sTargetID).get(0);
        } else {
            tElement = $("#" + this.mTargetID).get(0);
        }
        this.mPropertyChangeFunc(tElement);
    }
}
AstarIME.prototype.InsertWord = function (CaretPosition, Src, Word) {
    var sDest = "";
    if (Src.length === 0) {
        sDest = Word;
    } else if (CaretPosition >= Src.length) {
        sDest = Src + Word;
    } else {
        for (var i = 0; i < Src.length; i++) {
            if (i === CaretPosition) {
                var n = Src.charCodeAt(i);
                if (n >= 0xDC00 && n <= 0xDFFF) {
                    sDest += Src.charAt(i);
                    i++;
                }
                sDest += Word;
            }
            sDest += Src.charAt(i);
        }
    }
    return sDest;
}
AstarIME.prototype.ConvertValueWithWordCodes = function (SrcValue) {
    var szDest = "";
    var nCode = 0;

    if (IsNullOrEmptyString(SrcValue)) {
        return "";
    }

    if (this.mCandidateRange !== CANDIDATE_RANGE_EUDC) {//只先處理造字
        return SrcValue;
    }

    for (var i = 0; i < SrcValue.length; i++) {
        nCode = SrcValue.charCodeAt(i);
        if (nCode >= DEST_BEGIN_FOR_EUDC && nCode <= DEST_END_FOR_EUDC) {
            nCode = this.GetSrcWordCode(nCode);
        }
        szDest += String.fromCharCode(nCode);
    }
    return szDest;
}
AstarIME.prototype.CandidateOnClick = function (Row) {
    this.ApplyCandidateToTarget(Row.cells[1].innerText);
}

AstarIME.prototype.ApplyCandidateToTarget = function (CandidateWord) {
    var szWord = CandidateWord;
    var nDestCode = this.SetWordCode(szWord);
    this.SetTargetValue(this.CodeToWord(nDestCode));
    //this.DisplayPlugIn(false);
    this.DisplayPlugIn(true);
    this.DisplayPanel(false);
    this.SetTextBox("", false);
    this.ClearCandiate();
    this.SetCandidateTable();
    this.DisplayCandidate(false);
}
AstarIME.prototype.SetWordCode = function (Word) {
    var nSrcCode = this.WordToCode(Word);
    var nRealCode = gUnicodeBase ? nSrcCode : this.GetRealWordCode(nSrcCode);
    var nDestCode = this.GetDestWordCode(nRealCode);

    if (nDestCode === 0) { // new mapping
        if (gUnicodeBase) {//3.19.12.080
            nDestCode = nRealCode;
        } else {
            if (this.mCandidateRange === CANDIDATE_RANGE_CNS) {
                if (nSrcCode >= 0xE000 && nSrcCode <= 0xF848 && nRealCode === 0) {// line poc
                    nDestCode = nSrcCode;
                } else {
                    nDestCode = DEST_BEGIN_FOR_CNS + this.mCount2;
                    this.mCount2++;
                }
            } else { // this.mCandidateRange == CANDIDATE_RANGE_EUDC
                if (nSrcCode >= 0xE000 && nSrcCode <= 0xF848) {// Big5
                    nDestCode = DEST_BEGIN_FOR_EUDC + this.mCount1;
                    this.mCount1++;
                } else {// CNS ignore Unicode plane 15 and 16
                    nDestCode = DEST_BEGIN_FOR_CNS + this.mCount2;
                    this.mCount2++;
                }

                //if (nRealCode == 0) {
                //    nRealCode = nSrcCode; // eudc not from candidate, set real code as eudc
                //}
            }

            // for line poc
            if (nRealCode === 0) {
                nRealCode = nSrcCode; // eudc not from candidate, set real code as eudc
            }
        }
        this.mWordCodes.push(new AstarWordCode(nSrcCode, nDestCode, nRealCode));
    }
    return nDestCode;
}
AstarIME.prototype.MergeFontCodesString = function () {
    var szSrc = "";
    var szDest = "";
    for (var i = 0; i < this.mWordCodes.length; i++) {
        if (this.mCandidateRange === CANDIDATE_RANGE_CNS) {
            szSrc += NumberToHexString(this.mWordCodes[i].mReal) + ",";
        } else { // this.mCandidateRange == CANDIDATE_RANGE_EUDC
            szSrc += NumberToHexString(this.mWordCodes[i].mSource) + ",";
        }
        szDest += NumberToHexString(this.mWordCodes[i].mDestination) + ",";
    }
    szSrc = szSrc.substring(0, szSrc.length - 1);
    szDest = szDest.substring(0, szDest.length - 1);
    return { Source: szSrc, Destination: szDest };
}
AstarIME.prototype.GetSrcWordCode = function (DestCode) {
    for (var i = 0; i < this.mWordCodes.length; i++) {
        if (this.mWordCodes[i].mDestination === DestCode) {
            if (this.mCandidateRange === CANDIDATE_RANGE_CNS) {
                return this.mWordCodes[i].mReal;
            } else { // this.mCandidateRange == CANDIDATE_RANGE_EUDC
                return this.mWordCodes[i].mSource;
            }
        }
    }
    return 0;
}
AstarIME.prototype.GetDestWordCode = function (SrcCode) {
    for (var i = 0; i < this.mWordCodes.length; i++) {
        if (this.mCandidateRange === CANDIDATE_RANGE_CNS) {
            if (this.mWordCodes[i].mReal === SrcCode) {
                return this.mWordCodes[i].mDestination;
            }
        } else { // this.mCandidateRange == CANDIDATE_RANGE_EUDC
            if (this.mWordCodes[i].mSource === SrcCode) {
                return this.mWordCodes[i].mDestination;
            }
        }
    }
    return 0;
}
// RealCode is Unicode system code when candidate range is 2
AstarIME.prototype.GetRealWordCode = function (TmpCode) {
    if (this.mCodes !== null) {
        for (var i = 0; i < this.mCodes.length; i++) {
            if (this.mCodes[i].mTmpCode === TmpCode) {
                return this.mCodes[i].mRealCode;
            }
        }
    }
    return 0;
}
AstarIME.prototype.ClearCandiate = function () {
    this.mCodes = null;
    this.mPageIndex = -1;
    this.mTotalPages = 0;
}
AstarIME.prototype.FindCandidate = function (IMEText) {
    var bFound = false;
    var szKey = this.CvtIMETextToKey(IMEText);
    var tParams = { Type: this.mIMEType, Key: szKey, Company: MULTILAYER_COMPANY };
    var szXml = GetServerXmlSync(VIRTUAL_DIR + "GetCandidateWordXml.aspx", tParams);

    this.mPageIndex = 0;
    this.mTotalPages = 0;
    this.mCodes = this.ParseCandidateXml(szXml);

    if (this.mCodes === null || this.mCodes.length === 0) {
        if (szXml.length > 0) {
            this.SetTextBoxForCandidateNotFound(IMEText);
        } else {
            bFound = true; //強制關閉 Keyboard
        }
    } else {
        bFound = true;
        this.mTotalPages = Math.floor(this.mCodes.length / WORDS_PERPAGE);
        if (this.mCodes.length % WORDS_PERPAGE !== 0) {
            this.mTotalPages++;
        }
    }

    var szFontFamily = this.AppendFontFace(this.mIMEType, szKey);
    this.mAPI.SetStyle(this.mCandidateTableID, "font-family", szFontFamily);
    this.SetCandidateTable();
    return bFound;
}
AstarIME.prototype.CvtIMETextToKey = function (IMEText) {
    var szKey = "";
    var nIdx = 0;
    for (var i = 0; i < IMEText.length; i++) {
        if (this.mIMEType === IME_TYPE_CJ) {
            nIdx = IME_TABLE_CJ[1].indexOf(IMEText.charAt(i));
            if (nIdx >= 0) {
                szKey += IME_TABLE_CJ[0].charAt(nIdx);
            }
        } else if (this.mIMEType === IME_TYPE_ZI) {
            if (IMEText.charAt(i) === 0x3000) {
                szKey += '+';
            } else {
                for (var i = 0; i < 4; i++) {
                    nIdx = IME_TABLE_ZI[i][1].indexOf(IMEText.charAt(i));
                    if (nIdx >= 0) {
                        szKey += IME_TABLE_ZI[i][0].charAt(nIdx);
                    }
                }
            }
        }
    }
    return szKey;
}
AstarIME.prototype.ParseCandidateXml = function (Xml) {
    var tCandidates = null;
    if (Xml.length > 0) {
        var tXDoc = this.mAPI.CreateXmlDocument(Xml);
        var tXList = tXDoc.documentElement.getElementsByTagName("WORD");
        if (tXList !== null && tXList.length > 0) {
            tCandidates = new Array();
            for (var i = 0; i < tXList.length; i++) {
                var it = new AstarCandidateCode(0, 0);
                var szHex = tXList[i].getAttribute("unicode");
                it.mTmpCode = parseInt(szHex, 16);
                szHex = tXList[i].getAttribute("realcode");
                it.mRealCode = parseInt(szHex, 16);
                tCandidates.push(it);
            }
            tCandidates.sort = function (a, b) { return a.mTmpCode - b.mTmpCode }; // sort by unicode
        }
    }
    return tCandidates;
}
AstarIME.prototype.PreviousPage = function () {
    if (this.mPageIndex - 1 >= 0) {
        this.mPageIndex--;
        this.SetCandidateTable();
        //4.20.1.133
        if (gAnalysisDocumentManual) {
            AnalysisDocument();
        }
    }
    if (!RUNTIME.IsMobile) {
        FocusOnTextBox(this.mTextBoxID);
    }
}
AstarIME.prototype.NextPage = function () {
    if (this.mPageIndex + 1 < this.mTotalPages) {
        this.mPageIndex++;
        this.SetCandidateTable();
        //4.20.1.133
        if (gAnalysisDocumentManual) {
            AnalysisDocument();
        }
    }
    if (!RUNTIME.IsMobile) {
        FocusOnTextBox(this.mTextBoxID);
    }
}
AstarIME.prototype.LoadConfig = function () {
    var tParams = { Company: MULTILAYER_COMPANY };
    var szXml = GetServerXmlSync(VIRTUAL_DIR + "GetConfig.aspx", tParams);
    if (szXml.length > 0) {
        var tXDoc = this.mAPI.CreateXmlDocument(szXml);
        var tXList = tXDoc.documentElement.getElementsByTagName("CandidateRange");

        if (tXList !== null && tXList.length > 0) {
            this.mCandidateRange = parseInt(this.mAPI.GetXmlNodeText(tXList[0]));
            if (isNaN(this.mCandidateRange) || (this.mCandidateRange !== CANDIDATE_RANGE_CNS &&
            this.mCandidateRange !== CANDIDATE_RANGE_EUDC)) {
                this.mCandidateRange = CANDIDATE_RANGE_EUDC;
            }
        }
    }
}
AstarIME.prototype.GetEUDCOfUnicode = function (Unicode) {
    var nDest = 0;
    var tParams = { Unicode: Unicode, Company: MULTILAYER_COMPANY };
    var szXml = GetServerXmlSync(VIRTUAL_DIR + "GetEUDCOfUnicode.aspx", tParams);
    if (szXml.length > 0) {
        var tXDoc = this.mAPI.CreateXmlDocument(szXml);
        var tXList = tXDoc.documentElement.getElementsByTagName("WORD"); // <WORD unicode="" eudc=""/>
        if (tXList !== null && tXList.length > 0) {
            var szHex = tXList[0].getAttribute("eudc");
            nDest = parseInt(szHex, 16);
        }
    }
    return nDest;
}
AstarIME.prototype.SetTargetValueWithNewFont = function (Value, FocusOnTarget) {
    var szFontFamily = this.AppendFontFace(3, Value);
    this.SetFontFamily(this.mTargetID, szFontFamily);
    this.mAPI.SetValue(this.mTargetID, Value);
    if (FocusOnTarget) {
        this.mAPI.GetElementByID(this.mTargetID).focus();
    }
}
AstarIME.prototype.ValidateTargetValue = function () {
    var szValue = this.mAPI.GetValue(this.mTargetID);
    var szDest = "";
    var nCode = 0;
    var bNewFont = false;

    if (this.mIEVer > 0 && this.mIEVer <= 8) {
        if (!this.mUserKeydown) {
            return;
        } else {
            this.mUserKeydown = false;
        }
    } else {
        if (this.mOSIMEStatus !== OSIME_END) {
            if (RUNTIME.OS.toUpperCase() === "ANDROID" ||
                 RUNTIME.OS.toUpperCase() === "IOS" ||
                 RUNTIME.OS.toUpperCase() === "MAC OS X" ||
                (RUNTIME.OS.toUpperCase() === "WINDOWS" && this.mIEVer === 11)) {
                return; // comment for line poc
            }
        }
    }

    for (var i = 0; i < szValue.length; i++) {
        nCode = szValue.charCodeAt(i);
        if (nCode < 0x7F) {
            szDest += String.fromCharCode(nCode);
        } else if (nCode >= 0xE000 && nCode < 0xF849) {
            if (!this.ConvertedEUDCExist(nCode) && !this.WordCodeExist(nCode)) {
                //alert("[" + szValue[i] + "]為造字，請改用\"難\"輸入法");
                //break;
                // for line poc
                szDest += String.fromCharCode(nCode);
                bNewFont = true;
            } else {
                szDest += String.fromCharCode(nCode);
            }
        } else if (this.mCandidateRange === CANDIDATE_RANGE_CNS) {
            szDest += String.fromCharCode(nCode);
        } else {
            var szWord = String.fromCharCode(nCode);
            if (nCode > 0xD800 && nCode <= 0xDBFF) {
                var nCode1 = szValue.charCodeAt(i + 1);
                szWord += String.fromCharCode(nCode1);
                nCode = UTF16ToUnicode(nCode, nCode1);
                i++;
            }

            nCode = this.GetEUDCOfUnicode(nCode);
            if (nCode === 0) {
                //alert("[" + szValue[i] + "]為無法對應到造字，請聯絡服務人員");
                //break;
            } else {
                if (!this.ConvertedEUDCExist(nCode)) {
                    this.mCvts.push(nCode);
                }
                szWord = String.fromCharCode(nCode);
                if (nCode !== szValue.charCodeAt(i)) {
                    bNewFont = true;
                }
            }
            szDest += szWord;
        }
    }

    if (bNewFont) {
        this.SetTargetValueWithNewFont(szDest, true);
    } else {
        this.mAPI.SetValue(this.mTargetID, szDest);
    }
    //$("#" + this.mTargetID).trigger("input");
}
AstarIME.prototype.ConvertedEUDCExist = function (Code) {
    for (var i = 0; i < this.mCvts.length; i++) {
        if (this.mCvts[i] === Code) {
            return true;
        }
    }
    return false;
}
AstarIME.prototype.WordCodeExist = function (Code) {
    for (var i = 0; i < this.mWordCodes.length; i++) {
        if (Code === this.mWordCodes[i].mReal) {
            return true;
        }
    }
    return false;
}
AstarIME.prototype.OSIMEStart = function () {
    this.mOSIMEStatus = OSIME_START;
}
AstarIME.prototype.OSIMEEnd = function () {
    this.mOSIMEStatus = OSIME_END;
    if (!this.mIsFireFox) {// input event behavior of FF is different
        if (!IsSafari()) {
            this.ValidateTargetValue();
        }
    }
}

function IsNullOrEmptyString(Src) {
    return (Src === null || Src === undefined || Src.length === 0);
}

function UnicodeToUTF16(Unicode) {
    if (Unicode >= 0x10000) {
        var tCodes = new Array(2);
        tCodes[0] = (0xD800 | ((Unicode - 0x10000) >> 10));
        tCodes[1] = (0xDC00 | ((Unicode - 0x10000) & 0x3FF));
        return String.fromCharCode(tCodes[0], tCodes[1]);
    } else {
        return String.fromCharCode(Unicode);
    }
}

function UTF16ToUnicode(Code1, Code2) {
    var nNum1 = (Code1 & ~(0xD800)) << 10;
    var nNum2 = (Code2 & ~(0xDC00));
    return (nNum1 | nNum2) + 0x10000;
}

function NumberToHexString(Num) {
    var szHex = Num.toString(16).toUpperCase();
    while (4 - szHex.length > 0) {
        szHex = "0" + szHex;
    }
    return szHex;
}

function GetServerXmlSync(URL, Params) {
    var r = $.ajax({
        type: (HTTP_METHOD_POST ? 'POST' : 'GET'),
        url: URL,
        data: Params,
        async: false
    });
    return r.status === 200 ? r.responseText : "";
}

function InsertAfter(NewNode, TargetNode) {
    TargetNode.parentNode.insertBefore(NewNode, TargetNode.nextSibling);
}
function FindAstarIMEByID(IDType, IDStr) {
    return FindAstarIMEByIDExt(IDType, IDStr, "");
}

function FindAstarIMEByIDExt(IDType, IDStr, ParentID) {
    if (!IsNullOrEmptyString(IDStr)) {
        var sID = "";
        for (var i = 0; i < gAstarIMEs.length; i++) {
            sID = IDStr;
            if (!IsNullOrEmptyString(ParentID)) {
                sID += "-" + ParentID;
            }

            if (IDType === ID_TYPE_TARGET && gAstarIMEs[i].mTargetID === sID) {
                return gAstarIMEs[i];
            } else if (IDType === ID_TYPE_PLUGIN && gAstarIMEs[i].mPlugInID === sID) {
                return gAstarIMEs[i];
            } else if (IDType === ID_TYPE_PLUGIN_BUTTON && gAstarIMEs[i].mPlugInButtonID === sID) {
                return gAstarIMEs[i];
            } else if (IDType === ID_TYPE_PANEL && gAstarIMEs[i].mPanelID === sID) {
                return gAstarIMEs[i];
            } else if (IDType === ID_TYPE_TEXTBOX && gAstarIMEs[i].mTextBoxID === sID) {
                return gAstarIMEs[i];
            } else if (IDType === ID_TYPE_SWITCH && gAstarIMEs[i].mSwitchID === sID) {
                return gAstarIMEs[i];
            } else if (IDType === ID_TYPE_CANDIDATE && gAstarIMEs[i].mCandidateID === sID) {
                return gAstarIMEs[i];
            } else if (IDType === ID_TYPE_CANDIDATE_TABLE && gAstarIMEs[i].mCandidateTableID === sID) {
                return gAstarIMEs[i];
            }
        }
    }
    return null;
}

function ShowIMEPanel() {
    FindAstarIMEByID(ID_TYPE_PLUGIN, this.id).PlugInButtonOnClick();
}
function Normalize() {
    FindAstarIMEByID(ID_TYPE_TEXTBOX, this.id).TextBoxOnKeyPress();
}
function CandiateCursorMove() {
    FindAstarIMEByID(ID_TYPE_TEXTBOX, this.id).OnCandiateCursorMove();
}
function ClosePanel() {
    FindAstarIMEByID(ID_TYPE_TEXTBOX, this.id).OnClosePanel();
}
function MouseEnterPanel() {
    FindAstarIMEByID(ID_TYPE_PANEL, this.id).OnMouseEnterPanel();
}
function MouseLeavePanel() {
    FindAstarIMEByID(ID_TYPE_PANEL, this.id).OnMouseLeavePanel();
}
function SwitchIME() {
    FindAstarIMEByID(ID_TYPE_SWITCH, this.id).SwitchOnClick();
}
function CandidateSelected(TableID, Row) {
    FindAstarIMEByID(ID_TYPE_CANDIDATE_TABLE, TableID).CandidateOnClick(Row);
}

function PreviousPage(TargetID) {
    FindAstarIMEByID(ID_TYPE_TARGET, TargetID).PreviousPage();
}

function NextPage(TargetID) {
    FindAstarIMEByID(ID_TYPE_TARGET, TargetID).NextPage();
}

function KeyboardPress(TargetID, Row) {
    FindAstarIMEByID(ID_TYPE_TARGET, TargetID).OnKeyboardPress(Row);
}

function TargetFocus() {
    var tt = FindAstarIMEByID(ID_TYPE_TARGET, this.id);
    tt.mPanelUsed = false;
    tt.OnClosePanel();
    FindAstarIMEByID(ID_TYPE_TARGET, this.id).DisplayPlugIn(true);
}

function TargetInput() {
    //FindAstarIMEByID(ID_TYPE_TARGET, this.id).ValidateTargetValue();
    //for react onchange event
}

function TargetKeydown() {
    FindAstarIMEByID(ID_TYPE_TARGET, this.id).mUserKeydown = true;
}

function OSIMEStart() {
    FindAstarIMEByID(ID_TYPE_TARGET, this.id).OSIMEStart();
}

function OSIMEEnd() {
    FindAstarIMEByID(ID_TYPE_TARGET, this.id).OSIMEEnd();
}

var gAstarIMEs = new Array();

function AnalysisDocumentForIME(FPropertyChange, TargetID) {//5.21.7.080 add TargetID
    var sFilterKeys = new Array();
    if (AUTO_EMBED) {
        sFilterKeys.push("input[type='text']");
        sFilterKeys.push("textarea");
    } else {
        sFilterKeys.push(FILTER_KEY);
    }

    var tAPI = new AstarAPI(true);
    for (var a = 0; a < sFilterKeys.length; a++) {
        var tElements = tAPI.GetAllElements(sFilterKeys[a]);
        if (tElements !== null) {
            for (var i = 0; i < tElements.length; i++) {
                if (tElements[i].className === IME_CSS_CLASS_TEXTBOX) {
                    continue; // bypass
                }

                if (IsNullOrEmptyString(tElements[i].id)) {
                    continue;
                }

                //5.21.7.080
                if (TargetID !== undefined) {
                    if (tElements[i].id !== TargetID) {
                        continue;
                    }
                }

                var tObj = FindAstarIMEByID(ID_TYPE_TARGET, tElements[i].id);
                if (tObj === null) {
                    var tAstarIME = new AstarIME(tElements[i].id);
                    tAstarIME.LoadConfig();
                    tAstarIME.AppendToTarget(true);
                    tAstarIME.mPropertyChangeFunc = FPropertyChange;
                    gAstarIMEs.push(tAstarIME);
                } else {
                    tObj.LoadFontForTargetValue(false);
                    tObj.AppendToTarget(false);
                }

                if (gIs1stAnalysis) {
                    LeaveFromTextBox(tElements[i].id); //避免影響網頁載入後的Focus位置
                }
            }
        }
    }
}

function EmbedAstarIME() {
    if (IsServiceWorking()) {
        AnalysisDocumentForIME();
        SetDOMEventHandler(APPLY_TYPE_IME);
    }
}

var gTable = new Array();
var gIsSingleCodeFont = false;
function AnalysisDocumentForWED() {
    var tBody = $('body')[0];
    var szText = !IsNullOrEmptyString(tBody.textContent) ? tBody.textContent : tBody.innerText;
    //szText = tBody.innerHTML;
    //4.20.1.130
    szText = $(tBody).text();
    $("input[type='text']").each(function () {
        szText += $(this).val();
    });

    if (AnalysisText(szText)) {
        //3.19.8.010
        if (gIsSingleCodeFont) {
            var tArray = MergeCodeStringArray();
            if (tArray !== null && tArray.length > 0) {
                for (var i = 0; i < tArray.length; i++) {
                    var sFont = CreateSingleCodeFontFamily(tArray[i]);
                    SetSingleCodeFontFamilyToTarget(sFont, parseInt(tArray[i], 16));
                }
            }
        } else {
            var szFontCodes = MergeFontCodesString();
            if (szFontCodes !== null && szFontCodes.length > 0) {
                var tAllFonts = CreateAllCodesFontFamily(szFontCodes);
                SetAllCodesFontFamilyToTarget(tAllFonts);
            }
        }
    }
}

function AnalysisText(Text) {
    var bFoundNewCode = false;
    for (var i = 0; i < Text.length; i++) {
        var nCode = Text.charCodeAt(i);
        //if (IsEUDC(nCode)) {
        //    if (!TableContainsCode(nCode)) {
        //        gTable.push(nCode);
        //        bFoundNewCode = true;
        //    }
        //}
        //4.20.1.130
        if (!gUnicodeBase) {
            if (IsEUDC(nCode)) {
                if (!TableContainsCode(nCode)) {
                    gTable.push(nCode);
                    bFoundNewCode = true;
                }
            }
        } else {
            if (nCode <= 0x7F) {
                continue;
            }

            if (nCode > 0xD800 && nCode <= 0xDBFF) {
                nCode = UTF16ToUnicode(nCode, Text.charCodeAt(i + 1));
                i++;
            }

            if ((nCode >= 0xE000 && nCode <= 0xF849) ||
                (nCode >= 0xF0000 && nCode <= 0xFFFFF) ||
                (nCode >= 0xAC00 && nCode <= 0xBB9F) ||
                (nCode >= 0x20000 && nCode <= 0x2FFFF)) {
                if (!TableContainsCode(nCode)) {//5.21.4.260
                    gTable.push(nCode);
                    //bFoundNewCode = true;
                }
                bFoundNewCode = true;
            }
        }
    }
    return bFoundNewCode;
}

function IsEUDC(Code) {
    return (Code >= 0xE000 && Code < 0xF849);
}

function TableContainsCode(Code) {
    for (var i = 0; i < gTable.length; i++) {
        if (gTable[i] === Code) {
            return true;
        }
    }
    return false;
}

// function NumberToHexString(Num) {
//     var szHex = Num.toString(16).toUpperCase();
//     while (4 - szHex.length > 0) {
//         szHex = "0" + szHex;
//     }
//     return szHex;
// }

function MergeFontCodesString() {
    var tArray = new Array();
    var szDest = "";

    gTable = gTable.sort(); // for tArray
    for (var i = 0; i < gTable.length; i++) {
        szDest += NumberToHexString(gTable[i]) + ",";
        if (i > 0 && (i % 50) === 0) {
            tArray.push(szDest.substring(0, szDest.length - 1));
            szDest = "";
        }
    }
    if (szDest.length > 1) {
        szDest = szDest.substring(0, szDest.length - 1);
        tArray.push(szDest);
    }
    return tArray;
}

function MergeCodeStringArray() {
    var tArray = new Array();
    for (var i = 0; i < gTable.length; i++) {
        tArray.push(NumberToHexString(gTable[i]));
    }
    return tArray;
}

function CreateSingleCodeFontFamily(CodeHex) {
    var szFontFamily = "AWED-" + CodeHex + "-" + (NumberToHexString(new Date().getTime()));
    var szQuery = "";
    var szTTFSrc = VIRTUAL_DIR + "GetFontFile.aspx";
    var szEOTSrc = VIRTUAL_DIR + "GetFontFileEOT.aspx";
    var sRange = "U+" + CodeHex;
    var szFontFace = "";
    var sCompany = "&Company=" + encodeURIComponent(MULTILAYER_COMPANY);

    //3.19.8.010
    szTTFSrc += "?EUDCode=" + encodeURIComponent(CodeHex) + sCompany;
    szEOTSrc += "?EUDCode=" + encodeURIComponent(CodeHex) + sCompany + "&Dummy=1";

    if (GetIEVersion() === 8) {
        CreateFontStyleSheetIE8(IE8_FONT_DISPLAY, szFontFamily, szQuery);
    } else {
        szFontFace = "@font-face{";
        szFontFace += "   font-family:" + szFontFamily + ";";
        szFontFace += "   font-style:normal;";
        szFontFace += "   font-weight:normal;";
        szFontFace += "   src:url('" + szEOTSrc + "');";
        szFontFace += "   src:url('" + szEOTSrc + "?#iefix') format('embedded-opentype'),";
        szFontFace += "       url('" + szTTFSrc + "') format('truetype');";
        szFontFace += "   unicode-range: " + sRange + ";";
        szFontFace += "}";
        CreateStyleSheet(szFontFace);
    }
    return szFontFamily;
}

function CreateStyleSheet(CSSText) {
    var nIEVer = GetIEVersion();
    if (nIEVer === 8) {
        return;
    } else if (nIEVer > 0 && nIEVer < 8) {
        var tStyle = document.createElement("style");
        tStyle.setAttribute("type", "text/css");
        tStyle.styleSheet.cssText = CSSText;
        document.getElementsByTagName("head")[0].appendChild(tStyle);
    } else {
        $("head").append("<style type=\"text/css\">" + CSSText + "</style>");
    }
}

function GetAstarIMETargetIDs() {
    var sAllID = new Array();
    var sFilterKeys = new Array();
    if (AUTO_EMBED) {
        sFilterKeys.push("input[type='text']");
        sFilterKeys.push("textarea");
    } else {
        sFilterKeys.push(FILTER_KEY);
    }

    for (var a = 0; a < sFilterKeys.length; a++) {
        $(sFilterKeys[a]).each(function () {
            sAllID.push($(this).prop("id"));
        });
    }
    return sAllID;
}

function IsAstarIMEComponent(ID) {
    var bYes = false;
    if (!IsNullOrEmptyString(ID)) {
        var sKey = ["IMEPlugIn", "IMEPanel", "IMETextBox", "IMESwitch", "IMECandidate",
            "IMECandidateHeader", "IMECandidateTable", "IMEKeyboard"];
        var sPart = ID.split('-');
        for (var i = 0; i < sKey.length && !bYes; i++) {
            if (sPart[0] === sKey[i]) {
                bYes = true;
            }
        }
    }
    return bYes;
}

function GetAllParentsID(Node) {
    return Node.parents().map(function () { return this.id; }).get().join(",");
}

function GetAllParentsTag(Node) {
    return Node.parents().map(function () { return this.tagName; }).get().join(",");
}

function SetSingleCodeFontFamilyToTarget(FontFamily, TargetEUDCode) {
    var sAllID = GetAstarIMETargetIDs();
    var tNodes = document.body.getElementsByTagName("*");
    for (var i = 0; i < tNodes.length; i++) {
        var t = $(tNodes[i]);
        var sID = t.prop("id");
        var bFound = false;

        if (sID.length > 0) {
            for (var a = 0; a < sAllID.length && !bFound; a++) {
                if (sAllID[a] === sID) {
                    bFound = true;
                }
            }

            if (!bFound && IsAstarIMEComponent(sID)) {
                bFound = true;
            }
        }

        if (!bFound) {
            var tTmp = GetAllParentsID(t).split(',');
            for (var a = 0; a < tTmp.length && !bFound; a++) {
                if (IsAstarIMEComponent(tTmp[a])) {
                    bFound = true;
                }
            }
        }

        if (!bFound) {
            /*if (HasEUDC(t.val()) || HasEUDC(t.text())) {
            var tSrcArray = t.css("font-family").split(',');
            var tDestArray = new Array();

            tDestArray.push(FontFamily);
            for (var j = 0; j < tSrcArray.length; j++) {
            if (tSrcArray[j].indexOf(FONT_FAMILY_PREFIX, 0) < 0) {
            tDestArray.push(tSrcArray[j]);
            }
            }
            t.css("font-family", tDestArray.toString());
            }*/

            // 3.19.8.010
            if (HasTargetEUDC(t.val(), TargetEUDCode) || HasTargetEUDC(t.text(), TargetEUDCode)) {
                t.css("font-family", FontFamily + "," + t.css("font-family"));
            }
        }
    }
}

function HasEUDC(Str) {
    if (!IsNullOrEmptyString(Str)) {
        for (var i = 0; i < Str.length; i++) {
            //if (IsEUDC(Str.charCodeAt(i))) {
            //    return true;
            //}
            //4.20.1.130
            if (!gUnicodeBase) {
                if (IsEUDC(Str.charCodeAt(i))) {
                    return true;
                }
            } else {
                var nCode = Str.charCodeAt(i);
                if (nCode <= 0x7F) {
                    continue;
                }

                if (nCode > 0xD800 && nCode <= 0xDBFF) {
                    nCode = UTF16ToUnicode(nCode, Str.charCodeAt(i + 1));
                    i++;
                }

                //5.21.4.270 --- begin
                if ((nCode >= 0xE000 && nCode <= 0xF849) ||
                    (nCode >= 0xF0000 && nCode <= 0xFFFFF) ||
                    (nCode >= 0xAC00 && nCode <= 0xBB9F) ||
                    (nCode >= 0x20000 && nCode <= 0x2FFFF)) {
                    return true;
                }
                //5.21.4.270 --- end
            }
        }
    }
    return false;
}

function HasTargetEUDC(Str, Code) {
    if (!IsNullOrEmptyString(Str)) {
        for (var i = 0; i < Str.length; i++) {
            if (Code === Str.charCodeAt(i)) {
                return true;
            }
        }
    }
    return false;
}

function GetIEVersion() {
    var nVersion = 0;
    var szAgentParts = navigator.userAgent.toUpperCase().split("MSIE");
    if (szAgentParts !== null && szAgentParts.length > 1) {
        nVersion = parseInt(szAgentParts[1]);
        if (isNaN(nVersion)) {
            nVersion = 0;
        }
    } else {
        if (window.MSInputMethodContext && document.documentMode) {
            nVersion = 11;
        }
    }
    return nVersion;
}

function IsFireFox() {
    return (navigator.userAgent.toLowerCase().indexOf('firefox') >= 0);
}

var APPLY_TYPE_ALL = 0;
var APPLY_TYPE_IME = 1;
var APPLY_TYPE_WED = 2;

var gPreviousAnalysisTime = null;
var gIs1stAnalysis = true;

function SetDOMEventHandler(Apply, FPropertyChange, TargetID) {//5.21.7.080 add TargetID
    var nIEVer = (new AstarAPI(false)).GetIEVersion();
    if (nIEVer > 0 && nIEVer <= 10) {// IE11 start support MutationObserver
        setInterval(function () {
            if (IsDocumentTextChanged()) {
                AnalysisDocument(FPropertyChange, TargetID);
                gPreviusText = GetDocumentText();
            }
        }, 500);
    } else {
        if (!gAnalysisDocumentManual) {
            var tObserver = new MutationObserver(function (Mutations) {
                var tNow = new Date();
                if (!gIs1stAnalysis) {
                    if (gPreviousAnalysisTime !== null && (tNow - gPreviousAnalysisTime) < DOM_EVENT_HANDLER_INTERVAL) {
                        var nAmount = GetTargetAmount();
                        if (nAmount > 0 && gAstarIMEs.length === nAmount) {
                            return;
                        } else if (nAmount === 0) {//5.21.4.290 for WED only
                            return;
                        }
                    }
                } else {
                    gIs1stAnalysis = false;
                }
                gPreviousAnalysisTime = tNow;

                if (Apply === APPLY_TYPE_IME) {
                    AnalysisDocumentForIME(FPropertyChange, TargetID);
                } else if (Apply === APPLY_TYPE_WED) {
                    AnalysisDocumentForWED();
                } else {
                    AnalysisDocument(FPropertyChange, TargetID);
                }
            });
            tObserver.observe(document.documentElement, { childList: true, subtree: true });
        }
    }
}

function SetDOMEventHandler2() {
    var mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if(mutation.type==='childList') {
                if(mutation.removedNodes !== null && mutation.removedNodes.length > 0) {
                    let node = mutation.removedNodes.item(0);
                    DisplayAstarIME(node.id, false);
                } else if(mutation.addedNodes !== null && mutation.addedNodes.length > 0) {
                    let node = mutation.addedNodes.item(0);
                    if(node.tagName === 'INPUT') {
                        DisplayAstarIME(node.id, true);
                        let t = FindAstarIMEByID(ID_TYPE_TARGET, node.id);
                        t.mLoaded = false;
                        t.LoadFontForTargetValue(false);
                    }
                }
            }
            //console.log(mutation);
        });
    });

    mutationObserver.observe(document.documentElement, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
    });
}

// 20170511 for Prototype.js only
function EmbedAstarWED() {
    gTable.length = 0;
    if (IsServiceWorking()) {
        AnalysisDocumentForWED();
        SetDOMEventHandler(APPLY_TYPE_WED);
    }
}
//////////////////////////////////////////////////
// 20170511 for Prototype.js only
function AnalysisDocument(PropertyChangeFunc, TargetID) {//5.21.7.080 add TargetID
    AnalysisDocumentForWED();
    AnalysisDocumentForIME(PropertyChangeFunc, TargetID);
}

function EmbedAstar(APPath, IsAllCodes, PropertyChangeFunc, TargetID) {//5.21.7.080 add TargetID
    gTable.length = 0;
    for (var i = 0; i < gAstarIMEs.length; i++) {
        gAstarIMEs[i].mWordCodes.length = 0;
        gAstarIMEs[i].mCvts.length = 0;
    }

    if (!IsNullOrEmptyString(APPath)) {
        VIRTUAL_DIR = APPath;
    }

    if (IsServiceWorking()) {
        if (IsAllCodes !== null) {
            gIsSingleCodeFont = !IsAllCodes;
        }
        AnalysisDocument(PropertyChangeFunc, TargetID);
        gPreviusText = GetDocumentText();
        SetDOMEventHandler(APPLY_TYPE_ALL, PropertyChangeFunc, TargetID);
        SetDOMEventHandler2();
    }

    // ScrollToPageTop();
}

function ScrollToPageTop() {
    var nVer = GetIEVersion();
    if (nVer !== 0) {
        $('html, body').animate({ scrollTop: 0 }, 5);
    } else {
        $('html, body').scrollTop(0);
    }
}

var gPreviusText = "";
function GetDocumentText() {
    var tBody = $('body')[0];
    var szValues = "";
    $("input[type='text']").each(function (item) {
        szValues += item.value;
    });
    if (tBody.textContent !== null && tBody.textContent !== "undefined") {
        return tBody.textContent + szValues;
    } else {
        return tBody.innerText + szValues;
    }
}

function IsDocumentTextChanged() {
    var szCurrentText = GetDocumentText();
    return !(gPreviusText === szCurrentText);
}

function InsertWord(TextID, Word) {
    var nPos = 0;
    var tNode = document.getElementById(TextID);
    var nLength = tNode.value.length;

    if (document.selection) {// IE Support
        tNode.focus();
        var oSel = document.selection.createRange();
        oSel.moveStart('character', -tNode.value.length);
        nPos = oSel.text.length;
    } else if (tNode.selectionStart || tNode.selectionStart === '0') {// Firefox support
        nPos = tNode.selectionStart;
    }

    if (nLength === 0) {
        tNode.value = Word;
    } else if (nPos >= nLength) {
        tNode.value += Word;
    } else {
        var sNew = "";
        for (var i = 0; i < nLength; i++) {
            if (i === nPos) {
                sNew += Word;
            }
            sNew += tNode.value.charAt(i);
        }
        tNode.value = sNew;
    }
}

var IE8_FONT_CANDIDATE = 1;
var IE8_FONT_DISPLAY = 2;
var IE8_FONT_TEXTBOX = 3;

function CreateFontStyleSheetIE8(Type, FontFamily, QueryString) {
    var sURL = VIRTUAL_DIR + "GetWEFCss.aspx" +
        "?Font=" + encodeURIComponent(FontFamily) +
        "&Dir=" + encodeURIComponent(VIRTUAL_DIR) +
        "&" + QueryString.substring(1);
    var sKey = FONT_FAMILY_PREFIX + "Type" + Type;
    var bFound = false;
    var tLinks = document.getElementsByTagName("link");

    for (var i = 0; i < tLinks.length && !bFound; i++) {
        if (tLinks[i].id === sKey) {
            tLinks[i].href = sURL;
            bFound = true;
        }
    }

    if (!bFound) {
        var tLink = document.createElement('link');
        tLink.type = 'text/css';
        tLink.rel = 'stylesheet';
        tLink.href = sURL;
        tLink.id = sKey;
        document.getElementsByTagName("head")[0].appendChild(tLink);
    }
}

function WriteLog(Msg) {
    if (console !== null && console.log !== null) {
        var t = new Date();
        var s = FormatString(t.getHours(), 2);
        s += ":" + FormatString(t.getMinutes(), 2);
        s += ":" + FormatString(t.getSeconds(), 2);
        s += "." + FormatString(t.getMilliseconds(), 3);
        console.log("[" + s + "]" + Msg);
    }
    /*
    var t = new Date();
    var s = FormatString(t.getHours(), 2);
    s += ":" + FormatString(t.getMinutes(), 2);
    s += ":" + FormatString(t.getSeconds(), 2);
    s += "." + FormatString(t.getMilliseconds(), 3);
    var r = "[" + s + "]" + Msg;
    $("#tlog").text($("#tlog").text() + '\n' + r);
    */
}

function FormatString(Num, Len) {
    var s = Num.toString();
    while (s.length < Len) {
        s = "0" + s;
    }
    return s;
}

function IsServiceWorking() {
    var bYes = false;
    var sXml = GetServerXmlSync(VIRTUAL_DIR + "IsServiceWorking.aspx", new Array());
    if (sXml.length > 0) {
        var tAPI = new AstarAPI(false);
        var tXDoc = tAPI.CreateXmlDocument(sXml);
        var tXList = tXDoc.documentElement.getElementsByTagName("Working");
        var nWorking = parseInt(tAPI.GetXmlNodeText(tXList[0]));
        bYes = nWorking === 1;
    }
    return bYes;
}

AstarIME.prototype.ConvertBeforeSubmit = function (HiddenID, HiddenID2) {
    var tAPI = new AstarAPI(true);
    var sID = tAPI.IsNullOrEmptyString(HiddenID) ? this.mTargetID : HiddenID;
    var sValue = tAPI.GetValue(this.mTargetID);
    var sCvted = "";

    for (var i = 0; i < sValue.length; i++) {
        var n = sValue.charCodeAt(i);
        if (n >= DEST_BEGIN_FOR_CNS && n <= DEST_END_FOR_CNS) {
            for (var a = 0; a < this.mWordCodes.length; a++) {
                if (n === this.mWordCodes[a].mDestination) {
                    //sCvted += String.fromCharCode(this.mWordCodes[a].mReal);
                    sCvted += this.CodeToWord(this.mWordCodes[a].mReal);
                    // if (this.mWordCodes[a].mReal === 0) set ErrMsg to HiddenID2 ??
                    break;
                }
            }
        } else {
            sCvted += sValue.charAt(i);
        }
    }
    tAPI.SetValue(sID, sCvted);
}

function ConvertBeforeSubmit(TextBoxID, HiddenID, HiddenID2) {
    FindAstarIMEByID(ID_TYPE_TARGET, TextBoxID).ConvertBeforeSubmit(HiddenID, HiddenID2);
}

AstarIME.prototype.ConvertForNextPage = function (HiddenID) {
    var sCodes = "";
    for (var i = 0; i < this.mWordCodes.length; i++) {
        sCodes += NumberToHexString(this.mWordCodes[i].mReal) + ",";
        sCodes += NumberToHexString(this.mWordCodes[i].mDestination) + ",";
    }
    if (sCodes.length > 0) {
        sCodes = sCodes.substring(0, sCodes.length - 1);
    }
    this.mAPI.SetValue(HiddenID, sCodes);
}

function ConvertForNextPage(TextBoxID, HiddenID) {
    FindAstarIMEByID(ID_TYPE_TARGET, TextBoxID).ConvertForNextPage(HiddenID);
}

AstarIME.prototype.ConvertForPrevPage = function (CodesStr, TextBoxID) {
    if (!IsNullOrEmptyString(CodesStr)) {
        var tCodes = CodesStr.split(',');
        for (var i = 0; i < tCodes.length; i += 2) {
            var t = new AstarWordCode(0, 0, 0);
            t.mReal = parseInt(tCodes[i], 16);
            t.mDestination = parseInt(tCodes[i + 1], 16);
            this.mWordCodes.push(t);
            this.mCount2++;
        }

        if (this.mWordCodes.length > 0) {
            var sValue = this.mAPI.GetValue(TextBoxID);
            var szFontFamily = this.AppendFontFace(0, sValue);
            this.SetFontFamily(this.mTargetID, szFontFamily);
        }
    }
}

function ConvertForPrevPage(CodesStr, TextBoxID) {
    FindAstarIMEByID(ID_TYPE_TARGET, TextBoxID).ConvertForPrevPage(CodesStr, TextBoxID);
}

function CreateAllCodesFontFamily(CodesArray) {
    var tFonts = new Array();
    for (var i = 0; i < CodesArray.length; i++) {
        var aa = CodesArray[i].split(',');
        var szFontFamily = "AWED-" + aa[0] + "-" + aa[aa.length - 1]; //Chrome不允許字型名稱有'+'
        var szQuery = "";
        var szTTFSrc = VIRTUAL_DIR + "GetFontFile.aspx";
        var szEOTSrc = VIRTUAL_DIR + "GetFontFileEOT.aspx";
        var szFontFace = "";
        //var sRange = "U+" + aa[0] + "-" + aa[aa.length - 1];
        var sRange = "";

        for (var b = 0; b < aa.length; b++) {
            sRange += "U+" + aa[b] + ",";
        }
        sRange = sRange.substring(0, sRange.length - 1);

        szQuery = "?WordCodes=" + encodeURIComponent(CodesArray[i]);
        szQuery += "&EUDCodes=" + encodeURIComponent(CodesArray[i]);
        szQuery += "&Company=" + encodeURIComponent(MULTILAYER_COMPANY);
        szQuery += "&Dummy=1";
        szTTFSrc += szQuery;
        szEOTSrc += szQuery;

        if (GetIEVersion() === 8) {
            CreateFontStyleSheetIE8(IE8_FONT_DISPLAY, szFontFamily, szQuery);
        } else {
            szFontFace = "@font-face{";
            szFontFace += "   font-family:" + szFontFamily + ";";
            szFontFace += "   font-style:normal;";
            szFontFace += "   font-weight:normal;";
            szFontFace += "   src:url('" + szEOTSrc + "');";
            szFontFace += "   src:url('" + szEOTSrc + "?#iefix') format('embedded-opentype'),";
            szFontFace += "       url('" + szTTFSrc + "') format('truetype');";
            szFontFace += "   unicode-range: " + sRange + ";";
            szFontFace += "}";
            CreateStyleSheet(szFontFace);
        }
        tFonts.push(szFontFamily);
    }
    return tFonts;
}

function SetAllCodesFontFamilyToTarget(FontFamily) {
    var sAllID = GetAstarIMETargetIDs();
    var tNodes = document.body.getElementsByTagName("*");
    for (var i = 0; i < tNodes.length; i++) {
        var t = $(tNodes[i]);
        var sID = t.prop("id");
        var bFound = false;

        if (sID.length > 0) {
            for (var a = 0; a < sAllID.length && !bFound; a++) {
                if (sAllID[a] === sID) {
                    bFound = true;
                }
            }

            if (!bFound && IsAstarIMEComponent(sID)) {
                bFound = true;
            }
        }

        if (!bFound) {
            var tTmp = GetAllParentsID(t).split(',');
            for (var a = 0; a < tTmp.length && !bFound; a++) {
                if (IsAstarIMEComponent(tTmp[a])) {
                    bFound = true;
                }
            }
        }

        if (!bFound) {
            if (HasEUDC(t.val()) || HasEUDC(t.text())) {
                var tSrcArray = t.css("font-family").split(',');
                var tDestArray = new Array();

                tDestArray.push(FontFamily);
                for (var j = 0; j < tSrcArray.length; j++) {
                    if (tSrcArray[j].indexOf(FONT_FAMILY_PREFIX, 0) < 0) {
                        tDestArray.push(tSrcArray[j]);
                    }
                }
                t.css("font-family", tDestArray.toString());
            }
        }
    }
}

function IsSafari() {
    var bYes = false;
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.indexOf('safari') !== -1) {
        if (sUserAgent.indexOf('chrome') < 0) {
            bYes = true;
        }
    }
    return bYes;
}

function Runtime() {
    var browser,
	mobile,
	os,
	ua = window.navigator.userAgent,
	platform = window.navigator.platform;

    if (/MSIE/.test(ua)) {//Internet Explorer
        browser = 'Internet Explorer';
        if (/IEMobile/.test(ua)) {
            mobile = 1;
        }
    } else if (/Chrome/.test(ua)) {//Google Chrome
        if (/CrOS/.test(ua)) {//Chromebooks
            platform = 'CrOS';
        }
        browser = 'Chrome';
    } else if (/Opera/.test(ua)) {// Opera Browser
        browser = 'Opera';
        if (/mini/.test(ua) || /Mobile/.test(ua)) {
            mobile = 1;
        }
    } else if (/Android/.test(ua)) {//Android Browser
        browser = 'Android Webkit Browser';
        mobile = 1;
        os = /Android\s[\.\d]+/.exec(ua)[0];
    } else if (/Firefox/.test(ua)) {//Mozilla firefox
        browser = 'Firefox';
        if (/Fennec/.test(ua)) {
            mobile = 1;
        }
    } else if (/Safari/.test(ua)) {//Safari
        browser = 'Safari';
        if ((/iPhone/.test(ua)) || (/iPad/.test(ua)) || (/iPod/.test(ua))) {
            os = 'iOS';
            mobile = 1;
        }
    }

    if (platform === 'MacIntel' || platform === 'MacPPC') {
        os = 'Mac OS X';
    } else if (platform === 'CrOS') {
        os = 'ChromeOS';
    } else if (platform === 'Win32' || platform == 'Win64') {
        os = 'Windows';
    } else if (!os && /Android/.test(ua)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    } else if (!os && /Windows/.test(ua)) {
        os = 'Windows';
    }
    return { OS: os, Browser: browser, IsMobile: mobile === 1 };
}

function IsEnableKeyboradDevice() {
    var bYes = false;
    if (RUNTIME.OS.toUpperCase() === "ANDROID" && RUNTIME.Browser.toUpperCase() === "CHROME") {
        bYes = true;
    }
    if (gDefaultDisplayKeyboard) {
        bYes = true;
    }
    return bYes;
}
function NormalizeZuIn(ZuIn) {
    var sValue = "";
    var sBuffer = new Array('\u3000', '\u3000', '\u3000', '\u3000');
    for (var i = 0; i < ZuIn.length; i++) {
        var c = ZuIn.charAt(i);
        for (var a = 0; a < 4; a++) {
            var b = IME_TABLE_ZI[a][1].indexOf(c);
            if (b >= 0) {
                sBuffer[a] = IME_TABLE_ZI[a][1].charAt(b);
                break;
            }
        }
    }
    for (var i = 0; i < sBuffer.length; i++) {
        sValue += sBuffer[i];
    }
    return sValue;
}

function GetTargetAmount() {
    var nLength = 0;
    var sFilterKeys = new Array();
    if (AUTO_EMBED) {
        sFilterKeys.push("input[type='text']");
        sFilterKeys.push("textarea");
    } else {
        sFilterKeys.push(FILTER_KEY);
    }

    var tAPI = new AstarAPI(true);
    for (var a = 0; a < sFilterKeys.length; a++) {
        var tElements = tAPI.GetAllElements(sFilterKeys[a]);
        if (tElements !== null) {
            nLength += tElements.length;
        }
    }
    return nLength;
}

function DisplayAstarIME(TargetID, Display) {
    var t = FindAstarIMEByID(ID_TYPE_TARGET, TargetID);
    if (t !== null) {
        t.DisplayPlugIn(Display);
    }
}

//3.19.12.020
function DisplayEUDCForID(TargetId, AllWords) {
    var tTarget = $("#" + TargetId);
    return DisplayEUDCForElement(tTarget, AllWords);
}
//4.19.12.120
function DisplayEUDCForElement(Element, AllWords) {
    var tTarget = $(Element);
    var sSrc = tTarget.val();
    if (IsNullOrEmptyString(sSrc)) {
        sSrc = tTarget.text();
    }

    if (IsNullOrEmptyString(sSrc)) {//nothing to do
        return;
    }

    // Analysis sSrc
    var tTable = new Array(new Array(), new Array(), new Array());
    for (var i = 0; i < sSrc.length; i++) {
        var nCode = sSrc.charCodeAt(i);
        if (nCode <= 0x7F) {
            continue;
        }

        if (!AllWords) {
            if (nCode < 0xE000 || nCode > 0xF849) {
                continue;
            }
        } else {
            if (nCode > 0xD800 && nCode <= 0xDBFF) {
                nCode = UTF16ToUnicode(nCode, sSrc.charCodeAt(i + 1));
                i++;
            }
        }

        var nIndex = 0;
        if (nCode <= 0xFFFF) {
            nIndex = 0;
        } else if (nCode >= 0x20000 && nCode <= 0x2FFFF) {
            nIndex = 1;
        } else if (nCode >= 0xF0000 && nCode <= 0xFFFFF) {
            nIndex = 3;
        }

        var j = 0;
        while (j < tTable[nIndex].length) {
            if (tTable[nIndex][j] === nCode) {
                break;
            }
            j++
        }

        if (j === tTable[nIndex].length) {
            tTable[nIndex].push(nCode);
        }
    }

    for (var i = 0; i < tTable.length; i++) {
        if (tTable[i].length > 0) {
            SetFontFamily(tTarget, tTable[i]);
        }
    }
}
function SetFontFamily(Target, CodeTable) {
    var szFontCodes = new Array();
    var szDest = "";
    CodeTable = CodeTable.sort(); // for szFontCodes
    for (var i = 0; i < CodeTable.length; i++) {
        szDest += NumberToHexString(CodeTable[i]) + ",";
        if (i > 0 && (i % 50) === 0) {
            szFontCodes.push(szDest.substring(0, szDest.length - 1));
            szDest = "";
        }
    }
    if (szDest.length > 1) {
        szDest = szDest.substring(0, szDest.length - 1);
        szFontCodes.push(szDest);
    }

    if (szFontCodes !== null && szFontCodes.length > 0) {
        var tAllFonts = CreateAllCodesFontFamily(szFontCodes);
        var tSrcArray = Target.css("font-family").split(',');
        var tDestArray = new Array();

        tDestArray.push(tAllFonts);
        for (var j = 0; j < tSrcArray.length; j++) {
            if (tSrcArray[j].indexOf(FONT_FAMILY_PREFIX, 0) < 0) {
                tDestArray.push(tSrcArray[j]);
            }
        }
        Target.css("font-family", tDestArray.toString());
    }
}

function DisplayWebIME(TargetId) {
    DisplayWebIMEWithParentID("t2", "");
}

function DisplayWebIMEWithParentID(TargetId, ParentId) {
    var tObj = FindAstarIMEByIDExt(ID_TYPE_TARGET, TargetId, ParentId);
    if (tObj === null) {
        var sValue = IsNullOrEmptyString(ParentId) ? "" : ("-" + ParentId);
        tObj = new AstarIME(TargetId + sValue);
        tObj.mParentID = sValue;
        tObj.LoadConfig();
        tObj.AppendToTarget(true);
        gAstarIMEs.push(tObj);
        $("#" + tObj.mPlugInID).empty();
    } else {
        tObj.LoadFontForTargetValue(false);
        tObj.AppendToTarget(false);
    }
    tObj.PlugInButtonOnClick();
    tObj.mAPI.GetElementByID(tObj.mTextBoxID).focus();
}

function GetCaretPosition(TextBox) {
    var nPosition = 0;
    var tNode = TextBox;
    var tSelectionRange = null;

    if (document.selection) {// IE Support
        tNode.focus();
        tSelectionRange = document.selection.createRange();
        tSelectionRange.moveStart('character', -tNode.value.length);
        nPosition = tSelectionRange.text.length;
    } else if (tNode.selectionStart || tNode.selectionStart === '0') {// Firefox support
        nPosition = tNode.selectionStart;
    }
    return nPosition;
}
function SetCaretPosition(TextBox, CaretPosition) {
    //var elem = document.getElementById(TextBoxID);
    //4.19.12.120
    var elem = TextBox;
    var range;

    if (elem.createTextRange) {
        range = elem.createTextRange();
        range.move('character', CaretPosition);
        range.select();
    } else {
        elem.focus();
        if (elem.selectionStart !== undefined) {
            elem.setSelectionRange(CaretPosition, CaretPosition);
        }
    }
}

AstarIME.prototype.GetTargetElement = function () {
    if (!IsNullOrEmptyString(this.mParentID)) {
        var sTargetID = this.mTargetID.replace(this.mParentID, "");
        var sParentID = this.mParentID.substring(1, this.mParentID.length);
        return $("#" + sParentID).find("#" + sTargetID).get(0);
    } else {
        return $("#" + this.mTargetID).get(0);
    }
}
AstarIME.prototype.GetTargetElementValue = function () {
    return $(this.GetTargetElement()).val();
}
AstarIME.prototype.GetTargetElementStyle = function (Name) {
    return $(this.GetTargetElement()).css(Name);
}
AstarIME.prototype.SetTargetElementStyle = function (Name, Value) {
    return $(this.GetTargetElement()).css(Name, Value);
}

// for gUnicodeBase=true only and DataWeb version 3.19.11.261
AstarIME.prototype.AppendMultiFontFace = function (TTFSrc, EOTSrc, Value) {
    var sMultiFontFamily = "";
    var sP0Code = "";
    var sP2Code = "";
    var sPFCode = "";
    var n = 0;
    var sHex = "";

    for (var i = 0; i < Value.length; i++) {
        n = Value.charCodeAt(i);
        if (n > 0xD800 && n <= 0xDBFF) {
            n = UTF16ToUnicode(n, Value.charCodeAt(i + 1));
            i++;
        }
        for (var j = 0; j < this.mWordCodes.length; j++) {
            if (n === this.mWordCodes[j].mDestination) {//mDestination==mReal
                sHex = NumberToHexString(n);
                if (n <= 0xFFFF) {
                    sP0Code += sHex + ",";
                } else if (n >= 0x20000 && n <= 0x2FFFF) {
                    sP2Code += sHex + ",";
                } else {//if (n >= 0xF0000 && n <= 0xFFFFF) {
                    sPFCode += sHex + ",";
                }
                break;
            }
        }
    }
    for (var i = 0; i < 3; i++) {// 3: Unicode Plane 0,2,15
        var sValue = "";
        var sQuery = "";
        var sTTF = "";
        var sEOT = "";
        var sFontFamily = "";
        var sFontFace = "";

        if (i === 0 && !IsNullOrEmptyString(sP0Code)) {
            sValue = sP0Code;
        } else if (i === 1 && !IsNullOrEmptyString(sP2Code)) {
            sValue = sP2Code;
        } else if (i === 2 && !IsNullOrEmptyString(sPFCode)) {
            sValue = sPFCode;
        }

        if (sValue.length > 0) {
            sValue = encodeURIComponent(sValue.substring(0, sValue.length - 1));
            sQuery = "?WordCodes=" + sValue + "&EUDCodes=" + sValue;
            sQuery += "&Company=" + encodeURIComponent(MULTILAYER_COMPANY);
            sQuery += "&Dummy=1";
            sTTF = TTFSrc + sQuery;
            sEOT = EOTSrc + sQuery;
            sFontFamily = this.CreateFontFamily();

            sFontFace = "@font-face{";
            sFontFace += "   font-family:" + sFontFamily + ";";
            sFontFace += "   font-style:normal;";
            sFontFace += "   font-weight:normal;";
            sFontFace += "   src:url('" + sEOT + "');";
            sFontFace += "   src:url('" + sEOT + "?#iefix') format('embedded-opentype'),";
            sFontFace += "       url('" + sTTF + "') format('truetype');";
            //if (!gUnicodeBase) {
            //    szFontFace += "   unicode-range: U+E000-F8FF;";
            //}
            sFontFace += "}";
            this.mAPI.CreateStyleSheet(sFontFace);
            sMultiFontFamily += sFontFamily + ",";
        }
    }

    if (sMultiFontFamily.length > 0) {
        sMultiFontFamily = sMultiFontFamily.substring(0, sMultiFontFamily.length - 1);
    }
    return sMultiFontFamily;
}

AstarIME.prototype.SetPlugInPosition = function () {
    var nWidth = document.getElementById(this.mPlugInButtonID).offsetWidth;
    //var tEleObj = document.getElementById(this.mTargetID);
    //5.20.10.080
    var tEleObj = this.GetTargetElement();
    var tOffsetLeft = tEleObj.offsetLeft + tEleObj.offsetWidth - nWidth;
    var tOffsetTop = tEleObj.offsetTop + tEleObj.offsetHeight;
    var tTmpOpj = tEleObj;
    while (tTmpOpj.offsetParent) {
        tTmpOpj = tTmpOpj.offsetParent;
        tOffsetLeft += tTmpOpj.offsetLeft;
        tOffsetTop += tTmpOpj.offsetTop;
    }
    tOffsetTop += 5;

    var tPlugIn = document.getElementById(this.mPlugInID);
    tPlugIn.style.top = tOffsetTop + "px";
    tPlugIn.style.left = tOffsetLeft + "px";
}
