function EnsureInFrame(itemType, selectedItemType) {
    hljs.tabReplace = ' ';
    hljs.initHighlightingOnLoad();

    if (window.name != 'ContentFrame') {
        /* if were not open in a frame - load the frame */
        var url = document.location.pathname;
        if (url.length > 0 && url[0] == '/')
            url = url.substring(1, url.length);

        document.location = 'index.html?url=' + url;
    }
    else {
        $(function () {
            //set initial state of the collapsable sections
            setState('.expand');

            $('.expand').click(function () {
                expandContract(this);
            });

            if ($.urlParam('sync') == '') {
                if (window.parent.frames["MenuFrame"] != null && itemType != null && selectedItemType != null) {
                    window.parent.frames["MenuFrame"].selectItem(itemType, selectedItemType);
                }
            }
        });
    }
}
function setState(selector) {

    $(selector).each(function () {
        var id = $(this).attr('id');
        if ($.cookie(id) == 0)
            expandContract(this);
    });
}

function expandContract(el) {

    var toggleMinus = 'images/minus.gif'
    var togglePlus = 'images/plus.gif'

    if ($(el).attr('src') == toggleMinus) {
        $(el).parents('tr').siblings().hide();
        $(el).attr('src', togglePlus);
        $.cookie($(el).attr('id'), '0');
    } else {
        $(el).parents('tr').siblings().show();
        $(el).attr('src', toggleMinus);
        $.cookie($(el).attr('id'), '1');
    }
}

var persisteduls = new Object()
var ddtreemenu = new Object()

ddtreemenu.closefolder = "closed.gif" //set image path to "closed" folder image
ddtreemenu.openfolder = "open.gif" //set image path to "open" folder image

//////////No need to edit beyond here///////////////////////////

ddtreemenu.createTree = function (treeid, enablepersist, persistdays) {
    var ultags = document.getElementById(treeid).getElementsByTagName("ul")
    if (typeof persisteduls[treeid] == "undefined")
        persisteduls[treeid] = (enablepersist == true && ddtreemenu.getCookie(treeid) != "") ? ddtreemenu.getCookie(treeid).split(",") : ""
    for (var i = 0; i < ultags.length; i++)
        ddtreemenu.buildSubTree(treeid, ultags[i], i)
    if (enablepersist == true) { //if enable persist feature
        var durationdays = (typeof persistdays == "undefined") ? 1 : parseInt(persistdays)
        ddtreemenu.dotask(window, function () { ddtreemenu.rememberstate(treeid, durationdays) }, "unload") //save opened UL indexes on body unload
    }
}

ddtreemenu.buildSubTree = function (treeid, ulelement, index) {
    ulelement.parentNode.className = "submenu"
    if (typeof persisteduls[treeid] == "object") { //if cookie exists (persisteduls[treeid] is an array versus "" string)
        if (ddtreemenu.searcharray(persisteduls[treeid], index)) {
            ulelement.setAttribute("rel", "open")
            ulelement.style.display = "block"
            ulelement.parentNode.style.backgroundImage = "url(" + ddtreemenu.openfolder + ")"
        }
        else
            ulelement.setAttribute("rel", "closed")
    } //end cookie persist code
    else if (ulelement.getAttribute("rel") == null || ulelement.getAttribute("rel") == false) //if no cookie and UL has NO rel attribute explicted added by user
        ulelement.setAttribute("rel", "closed")
    else if (ulelement.getAttribute("rel") == "open") //else if no cookie and this UL has an explicit rel value of "open"
        ddtreemenu.expandSubTree(treeid, ulelement) //expand this UL plus all parent ULs (so the most inner UL is revealed!)
    ulelement.parentNode.onclick = function (e) {
        var submenu = this.getElementsByTagName("ul")[0]
        if (submenu.getAttribute("rel") == "closed") {
            submenu.style.display = "block"
            submenu.setAttribute("rel", "open")
            ulelement.parentNode.style.backgroundImage = "url(" + ddtreemenu.openfolder + ")"
        }
        else if (submenu.getAttribute("rel") == "open") {
            submenu.style.display = "none"
            submenu.setAttribute("rel", "closed")
            ulelement.parentNode.style.backgroundImage = "url(" + ddtreemenu.closefolder + ")"
        }
        ddtreemenu.preventpropagate(e)
    }
    ulelement.onclick = function (e) {
        ddtreemenu.preventpropagate(e)
    }
}

ddtreemenu.expandSubTree = function (treeid, ulelement) { //expand a UL element and any of its parent ULs
    var rootnode = document.getElementById(treeid)
    var currentnode = ulelement
    currentnode.style.display = "block"
    currentnode.parentNode.style.backgroundImage = "url(" + ddtreemenu.openfolder + ")"
    while (currentnode != rootnode) {
        if (currentnode.tagName == "UL") { //if parent node is a UL, expand it too
            currentnode.style.display = "block"
            currentnode.setAttribute("rel", "open") //indicate it's open
            currentnode.parentNode.style.backgroundImage = "url(" + ddtreemenu.openfolder + ")"
        }
        currentnode = currentnode.parentNode
    }
}

ddtreemenu.flatten = function (treeid, action) { //expand or contract all UL elements
    var ultags = document.getElementById(treeid).getElementsByTagName("ul")
    for (var i = 0; i < ultags.length; i++) {
        ultags[i].style.display = (action == "expand") ? "block" : "none"
        var relvalue = (action == "expand") ? "open" : "closed"
        ultags[i].setAttribute("rel", relvalue)
        ultags[i].parentNode.style.backgroundImage = (action == "expand") ? "url(" + ddtreemenu.openfolder + ")" : "url(" + ddtreemenu.closefolder + ")"
    }
}

ddtreemenu.rememberstate = function (treeid, durationdays) { //store index of opened ULs relative to other ULs in Tree into cookie
    var ultags = document.getElementById(treeid).getElementsByTagName("ul")
    var openuls = new Array()
    for (var i = 0; i < ultags.length; i++) {
        if (ultags[i].getAttribute("rel") == "open")
            openuls[openuls.length] = i //save the index of the opened UL (relative to the entire list of ULs) as an array element
    }
    if (openuls.length == 0) //if there are no opened ULs to save/persist
        openuls[0] = "none open" //set array value to string to simply indicate all ULs should persist with state being closed
    ddtreemenu.setCookie(treeid, openuls.join(","), durationdays) //populate cookie with value treeid=1,2,3 etc (where 1,2... are the indexes of the opened ULs)
}

////A few utility functions below//////////////////////

ddtreemenu.getCookie = function (Name) { //get cookie value
    var re = new RegExp(Name + "=[^;]+", "i"); //construct RE to search for target name/value pair
    if (document.cookie.match(re)) //if cookie found
        return document.cookie.match(re)[0].split("=")[1] //return its value
    return ""
}

ddtreemenu.setCookie = function (name, value, days) { //set cookei value
    var expireDate = new Date()
    //set "expstring" to either future or past date, to set or delete cookie, respectively
    var expstring = expireDate.setDate(expireDate.getDate() + parseInt(days))
    document.cookie = name + "=" + value + "; expires=" + expireDate.toGMTString() + "; path=/";
}

ddtreemenu.searcharray = function (thearray, value) { //searches an array for the entered value. If found, delete value from array
    var isfound = false
    for (var i = 0; i < thearray.length; i++) {
        if (thearray[i] == value) {
            isfound = true
            thearray.shift() //delete this element from array for efficiency sake
            break
        }
    }
    return isfound
}

ddtreemenu.preventpropagate = function (e) { //prevent action from bubbling upwards
    if (typeof e != "undefined")
        e.stopPropagation()
    else
        event.cancelBubble = true
}

ddtreemenu.dotask = function (target, functionref, tasktype) { //assign a function to execute to an event handler (ie: onunload)
    var tasktype = (window.addEventListener) ? tasktype : "on" + tasktype
    if (target.addEventListener)
        target.addEventListener(tasktype, functionref, false)
    else if (target.attachEvent)
        target.attachEvent(tasktype, functionref)
}


function setTabs() {
    //Default Action
    $(".tab_content").hide(); //Hide all content
    $("ul.tabs li:first").addClass("active").show(); //Activate first tab
    $(".tab_content:first").show(); //Show first tab content

    //On Click Event
    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_content").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });
}

$.urlParam = function (name) {
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (!results) { return 0; }
    return results[1] || 0;
}

function trim(str, chars) {
    return ltrim(rtrim(str, chars), chars);
}

function ltrim(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

function rtrim(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

function unique(a) {
    var r = new Array();
    o: for (var i = 0, n = a.length; i < n; i++) {
        for (var x = 0, y = r.length; x < y; x++) {
            if (r[x] == a[i]) continue o;
        }
        r[r.length] = a[i];
    }
    return r;
}

/* Loads the root elements in the tree */
function loadTree() {
    if ($("#ulMenu").attr('loaded') != 'true') {
        $.ajax({
            url: 'menudata_root.html',
            dataType: 'html',
            success: function (data) {
                $("#ulMenu").html(data);
                $("#ulMenu").attr('loaded', 'true');
            }
        });
    }
}

/* Selects a give item, ensuring the container node is loaded first */
function toggleNode(itemType) {
    var el = $("#" + itemType + " ul");
    var img = $("#" + itemType + " img");

    if (el.attr('loaded') != 'true') {
        $.ajax({
            url: 'menudata_node_' + itemType + '.html',
            dataType: 'html',
            success: function (data) {
                el.html(data);
                el.attr('loaded', 'true');
                el.attr('expanded', 'true');
                $(img).attr('src', 'images/minus.gif');
            }
        });
    }
    else {
        if (el.attr('expanded') == 'true') {
            el.attr('expanded', 'false');
            $(img).attr('src', 'images/plus.gif');
            el.hide();
        }
        else {
            el.attr('expanded', 'true');
            $(img).attr('src', 'images/minus.gif');
            el.show();
        }
    }
}


/* Selects a give item, ensuring the container node is loaded first */
function selectItem(itemType, selectedItemType) {
    var el = $("#" + itemType + " ul");
    var img = $("#" + itemType + " img");

    if (el.attr('loaded') != 'true') {
        $.ajax({
            url: 'menudata_node_' + itemType + '.html',
            dataType: 'html',
            success: function (data) {
                el.html(data);
                el.attr('loaded', 'true');
                el.attr('expanded', 'true');
                setHighlightedItem(selectedItemType);
                $(img).attr('src', 'images/minus.gif');
                try {
                    $('html,body').animate({ scrollTop: $("#" + selectedItemType).offset().top - 30 }, 'fast');
                }
                catch (ex)
                { }
            }
        });
    }
    else {
        el.attr('expanded', 'true');
        el.show();
        setHighlightedItem(selectedItemType);
        $(img).attr('src', 'images/minus.gif');
        try {
            $('html,body').animate({ scrollTop: $("#" + selectedItemType).offset().top - 30 }, 'fast');
        }
        catch (ex)
                { }

    }
}

function setHighlightedItem(selectedItemType) {
    $("li").removeClass("selected");
    $("#" + selectedItemType).addClass("selected");
}



