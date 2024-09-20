/*
Company: Astar Printerlink Co., Ltd.
Product: Astar API for multi JavaScript framework
Version: 2.17.5.030
*/
var Framework = { "jQuery": 1, "Prototype": 2 };

function AstarAPI(DisplayAlert) {
    this.mDisplayAlert = true;
}
AstarAPI.prototype.IsNullOrUndefined = function (Obj) {
    return (Obj == null || Obj == "undefined");
}
AstarAPI.prototype.IsNullOrEmptyString = function (Str) {
    return (Str == null || Str.length == 0);
}
AstarAPI.prototype.GetLoadedFramework = function () {
    if (!this.IsNullOrUndefined(window.jQuery)) {
        return Framework.jQuery;
    } else if (!this.IsNullOrUndefined(typeof Prototype)) {
        return Framework.Prototype;
    } else {
        this.AlertMessage("Error! No JavaScript framework is loaded");
        return 0;
    }
}
AstarAPI.prototype.AlertMessage = function (Msg) {
    if (this.mDisplayAlert) {
        alert(Msg);
    }
}
AstarAPI.prototype.GetJQueryID = function (IDString) {
    return "[id='" + IDString + "']";
}
AstarAPI.prototype.IsStringObject = function (Obj) {
    return typeof (Obj) == "string";
}
AstarAPI.prototype.GetValue = function (ElementID) {// ElementID may be ID string or node
    var bIsID = this.IsStringObject(ElementID);
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            if (bIsID) {
                return $(this.GetJQueryID(ElementID)).val();
            } else {
                return $(ElementID).val();
            }
        case Framework.Prototype:
            if (bIsID) {
                return $(ElementID).value;
            } else {
                return $(ElementID).value;
            }
        default:
            return null;
    }
}
AstarAPI.prototype.SetValue = function (ElementID, Value) {
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            $(this.GetJQueryID(ElementID)).val(Value);
            return true;
        case Framework.Prototype:
            $(ElementID).value = Value;
            return true;
        default:
            return false;
    }
}
AstarAPI.prototype.GetAttribute = function (ElementID, Name) {
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            return $(this.GetJQueryID(ElementID)).attr(Name);
        case Framework.Prototype:
            return $(ElementID).readAttribute(Name);
        default:
            return null;
    }
}
AstarAPI.prototype.SetAttribute = function (ElementID, Name, Value) {
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            $(this.GetJQueryID(ElementID)).attr(Name, Value);
            return true;
        case Framework.Prototype:
            $(ElementID).writeAttribute(Name, Value);
            return true;
        default:
            return false;
    }
}
AstarAPI.prototype.SetEventHandler = function (ElementID, EventName, HandlerFunction) {
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            $(this.GetJQueryID(ElementID)).on(EventName, HandlerFunction);
            return true;
        case Framework.Prototype:
            $(ElementID).observe(EventName, HandlerFunction);
            return true;
        default:
            return false;
    }
}
AstarAPI.prototype.GetElementByID = function (ElementID) {
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            return $(this.GetJQueryID(ElementID));
        case Framework.Prototype:
            return $(ElementID);
        default:
            return null;
    }
}
AstarAPI.prototype.GetText = function (ElementID) {// ElementID may be ID string or node
    var bIsID = this.IsStringObject(ElementID);
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            if (bIsID) {
                return $(this.GetJQueryID(ElementID)).text();
            } else {
                return $(ElementID).text();
            }
        case Framework.Prototype:
            if (bIsID) {
                return $(ElementID).textContent;
            } else {
                return $(ElementID).textContent;
            }
        default:
            return null;
    }
}
AstarAPI.prototype.SetText = function (ElementID, Text) {
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            $(this.GetJQueryID(ElementID)).text(Text);
            return true;
        case Framework.Prototype:
            $(ElementID).textContent = Text;
            return true;
        default:
            return false;
    }
}
AstarAPI.prototype.GetStyle = function (ElementID, Name) {// ElementID may be ID string or node
    var bIsID = this.IsStringObject(ElementID);
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            if (bIsID) {
                return $(this.GetJQueryID(ElementID)).css(Name);
            } else {
                return $(ElementID).css(Name);
            }
        case Framework.Prototype:
            if (bIsID) {
                return $(ElementID).getStyle(Name);
            } else {
                return $(ElementID).getStyle(Name);
            }
        default:
            return null;
    }
}
AstarAPI.prototype.SetStyle = function (ElementID, Name, Value) {// ElementID may be ID string or node
    var bIsID = this.IsStringObject(ElementID);
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            if (bIsID) {
                $(this.GetJQueryID(ElementID)).css(Name, Value);
            } else {
                $(ElementID).css(Name, Value);
            }
            return true;
        case Framework.Prototype:
            if (bIsID) {
                $(ElementID).setStyle(Name + ":" + Value);
            } else {
                $(ElementID).setStyle(Name + ":" + Value);
            }
            return true;
        default:
            return false;
    }
}
AstarAPI.prototype.GetAllElements = function (FilterStr) {
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            return $(FilterStr);
        case Framework.Prototype:
            return $$(FilterStr);
        default:
            return null;
    }
}
AstarAPI.prototype.AppendChildElementByID = function (TargetID, HTML) {
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            $(this.GetJQueryID(TargetID)).append(HTML);
            return true;
        case Framework.Prototype:
            $(TargetID).insert({ bottom: HTML });
            return true;
        default:
            return false;
    }
}
AstarAPI.prototype.AppendChildElementByTag = function (TargetTag, HTML) {
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            $(TargetTag).append(HTML);
            return true;
        case Framework.Prototype:
            var ar = $$(TargetTag);
            if (ar == null || ar.length == 0) {
                return false;
            }
            for (var i = 0; i < ar.length; i++) {
                ar[i].insert({ bottom: HTML });
            }
            return true;
        default:
            return false;
    }
}
AstarAPI.prototype.RemoveHTML = function (ElementID) {
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            $(this.GetJQueryID(ElementID)).empty();
            return true;
        case Framework.Prototype:
            $(ElementID).update();
            return true;
        default:
            return false;
    }
}
AstarAPI.prototype.CreateXmlDocument = function (XmlStr) {
    var tXDoc = null;
    if (window.DOMParser) {
        tXDoc = (new window.DOMParser()).parseFromString(XmlStr, "text/xml");
    } else if (!this.IsNullOrUndefined(typeof window.ActiveXObject) && new window.ActiveXObject("Microsoft.XMLDOM")) {
        tXDoc = new window.ActiveXObject("Microsoft.XMLDOM");
        tXDoc.async = "false";
        tXDoc.loadXML(XmlStr);
    } else {
        this.AlertMessage("Error! Create xml document fail");
    }
    return tXDoc;
}
AstarAPI.prototype.SetElementHTML = function (Element, HTML) {
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            $(Element).append(HTML);
            return true;
        case Framework.Prototype:
            $(Element).update(HTML);
            return true;
        default:
            return false;
    }
}
AstarAPI.prototype.SetCellText = function (TableID, RowIndex, CellIndex, Text) {
    var szSelector = "";
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            $(this.GetJQueryID(TableID)).find("tr:eq(" + RowIndex + ") td:eq(" + CellIndex + ")").text(Text);
            return true;
        case Framework.Prototype:
            RowIndex += 1; // nth-child is 1 base
            CellIndex += 1; // nth-child is 1 base
            szSelector = "#" + TableID + " tr:nth-child(" + RowIndex + ") td:nth-child(" + CellIndex + ")";
            var nIEVer = this.GetIEVersion();
            if (nIEVer > 0 && nIEVer <= 8) {
                $$(szSelector)[0].innerText = Text;
            } else {
                $$(szSelector)[0].textContent = Text;
            }
            return true;
        default:
            return false;
    }
}
AstarAPI.prototype.TrimString = function (SrcStr) {
    var szDestStr = "";
    if (!this.IsNullOrEmptyString(SrcStr)) {
        for (var i = 0; i < SrcStr.length; i++) {
            var nCode = SrcStr.charCodeAt(i);
            if (nCode != 0x20 && nCode != 0xA0) { //0xA0 for Chrome
                szDestStr += SrcStr.charAt(i);
            }
        }
    }
    return szDestStr;
}
AstarAPI.prototype.GetIEVersion = function () {
    var nVersion = 0;
    var szAgentParts = navigator.userAgent.toUpperCase().split("MSIE");
    if (szAgentParts != null && szAgentParts.length > 1) {
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
AstarAPI.prototype.CreateStyleSheet = function (CSSText) {
    var szTargetTag = "head";
    var szHTML = "<style type=\"text/css\">" + CSSText + "</style>";
    switch (this.GetLoadedFramework()) {
        case Framework.jQuery:
            $(szTargetTag).append(szHTML);
            return true;
        case Framework.Prototype:
            var nIEVer = this.GetIEVersion();
            if (nIEVer > 0 && nIEVer <= 8) {
                var tStyle = document.createElement("style");
                tStyle.setAttribute("type", "text/css");
                tStyle.styleSheet.cssText = CSSText;
                document.getElementsByTagName(szTargetTag)[0].appendChild(tStyle);
            } else {
                var ar = $$(szTargetTag);
                for (var i = 0; i < ar.length; i++) {
                    ar[i].insert({ bottom: szHTML });
                }
            }
            return true;
        default:
            return false;
    }
}
AstarAPI.prototype.GetXmlNodeText = function (Node) {
    var szText = "";
    var nIEVer = this.GetIEVersion();

    if (Node != null) {
        if (nIEVer > 0 && nIEVer <= 8) {
            szText = Node.text;
        } else {
            szText = Node.textContent;
        }
    }
    return szText;
}

