var rowindex = 1;
var totaltablecount;
var deletetype = 0;
var usernav = 1;

function ToggleQuickActions() {
    var btn = document.getElementById("quickactions");
    var icon = document.getElementById("quick-action-icon");
    var dropdownlist = document.getElementById("quick-action-dropdown");
    if (icon.classList.contains("fa-chevron-down")) {
        btn.setAttribute("style", "background-color: var(--c-alrt1); color: var(--c-lite1);");
        icon.className = "fa fa-chevron-up action-button__icon";
        dropdownlist.setAttribute("style", "display: flex;");
    } else {
        btn.setAttribute("style", "color: var(--c-alrt1); background-color: var(--c-lite1);");
        icon.className = "fa fa-chevron-down action-button__icon";
        dropdownlist.setAttribute("style", "display: none;");
    }
}

function toggleShowBox(check) {
    var icon = document.getElementById('showicon');/*.appendChild(document.createElement("style"));
    alert('hey');*/
    if (check == 'reset') {
        icon.className = "show-dropdown__icon";
    }
    else if (icon.classList.contains('reversed')) {
        icon.className = "show-dropdown__icon";
    }
    else if (icon.classList.contains('reversed') == false) {
    icon.className = "show-dropdown__icon reversed"
    }
}

function QuickPrintTable() {
    ToggleQuickActions();
    var tabledata = document.getElementById('global-table');
    var printwindow = window.open('', 'print div', 'height=400, width=600');
    printwindow.document.write('<html><head><title></title>');
    printwindow.document.write('<link rel="stylesheet" href="../../../AY_assets/css/global_print_table.css" type="text/css" />');
    printwindow.document.write('</head><body>');
    printwindow.document.write(tabledata.outerHTML);
    printwindow.document.write('</body></html>');
    var is_chrome = Boolean(printwindow.chrome);
    if (is_chrome) {
     setTimeout(function() { 
        printwindow.document.close();
        printwindow.focus();
        printwindow.print();
        printwindow.close();
     }, 250);
   } else {
        printwindow.document.close();
        printwindow.focus();
        printwindow.print();
        printwindow.close();
   }
}

function OpenSesameUser() {
    var body = document.body;
    var page = document.getElementById("mainpage");
    var headerlogo = document.getElementById("header-logo");
    var headerburger = document.getElementById("header-burger-box");
    var navcontainer = document.getElementById("usercontainer");
    //    navcontainer.style.display="flex";
    //    navcontainer.style.visibility="visible";
    var navwidth = navcontainer.offsetWidth;
    var overlay = document.getElementById("open-overlay");
    var icon = document.getElementById("user-menu-icon");
    icon.setAttribute("style", "transform: rotate(180deg); transition: all 400ms ease-out;");
    body.style.overflowX = "hidden";
    navcontainer.setAttribute("style", "visibility: visible; right: -16rem; transform: translate(-" + navwidth + "px); transition: transform 600ms cubic-bezier(0.86, 0, 0.07, 1);");
    page.setAttribute("style", "transform: translate(-" + navwidth + "px); transition: transform 600ms cubic-bezier(0.86, 0, 0.07, 1);");
    overlay.setAttribute("style", "visibility: visible; opacity: 0.7; transition: opacity 400ms cubic-bezier(0.86, 0, 0.07, 1) 200ms;");
    headerlogo.setAttribute("style", "opacity: 0; transition: all 0.3s ease-in");
    headerburger.setAttribute("style", "opacity: 0; transition: all 0.3s ease-in");
    usernav = 0;
}

function CloseSesameUser() {
    var body = document.body;
    var page = document.getElementById("mainpage");
    var headerlogo = document.getElementById("header-logo");
    var headerburger = document.getElementById("header-burger-box");
    var navcontainer = document.getElementById("usercontainer");
    var navwidth = navcontainer.offsetWidth;
    var overlay = document.getElementById("open-overlay");
    var icon = document.getElementById("user-menu-icon");
    icon.setAttribute("style", "transform: rotate(0);  transition: all 400ms ease-out;");
    navcontainer.setAttribute("style", "right: 0; transform: translate(0); transition: transform 600ms cubic-bezier(0.86, 0, 0.07, 1);");
    page.setAttribute("style", "transform: translate(0); transition: transform 600ms cubic-bezier(0.86, 0, 0.07, 1);");
    overlay.setAttribute("style", "visibility: hidden; opacity: 0; transition: all 400ms cubic-bezier(0.86, 0, 0.07, 1) 200ms;");
    headerlogo.setAttribute("style", "opacity: 1; transition: all 0.3s ease-out");
    headerburger.setAttribute("style", "opacity: 1; transition: all 0.3s ease-out");
    usernav = 1;
}


function ToggleMenuUser() {
    var navmenu = document.getElementById('usercontainer');
    if (usernav != 1) {
        CloseSesameUser();
//        alert("closed");
    } else if (usernav = 1) {
        OpenSesameUser();
//        alert("open");
    }
}


function ShowAddPopup() {
    var popupmodal = document.getElementById("addpopupmodal");
    popupmodal.style.display = "flex";
}

function CancelAddSelected() {
    var popupmodal = document.getElementById("addpopupmodal");
    popupmodal.style.display = "none";
    var inputfield1 = document.getElementsByClassName("global-popup__input")[0];
    inputvalue1 = inputfield1.value;
    var inputfield2 = document.getElementsByClassName("global-popup__input")[1];
    inputvalue2 = inputfield2.value;
    inputfield1.value = "";
    inputfield2.value = "";
}

function savePDF() {
    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };

    $('#topdf').click(function () {
        doc.fromHTML($('#global-table').html(), 15, 15, {
            'width': 170,
//            'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');
    });

}

function LoadJSON() {
//    $document.ready(function () {
    alert('hi');
    $('#global-table').append('<tr><td>dw</td><td>dw</td><td>dw</td><td>dw</td></tr>');
    $.getJSON('../../pages/global_settings/add_languages/languages.json', function(data) {
        $('#global-table').append('<tr><td>dw</td><td>dw</td><td>dw</td><td>dwss</td></tr>');
    })
//        $.getJSON('../../pages/global_settings/add_languages/languages.json')
//            .success(function (data) {
//                var tr;
//                for (i = 0; i < data.length; i++) {
//                    tr = $('<tr/>');
//                    tr.append("<td>hihi</td>");
//                    tr.append("<td>hihi</td>");
//                    tr.append("<td>hihi</td>");
//                    tr.append("<td>hihi</td>");
//                    $('#global-table').append(tr);
//                }
//            })
//    })
}

function AddNewRow() {
    var table = document.getElementById("global-table");
    //    alert('hey');
    var newrow = table.insertRow(table.rows.length);
    var checkbox = document.createElement("div");
    checkbox.className = "global-table__checkbox";
    checkbox.innerHTML = '<input type="checkbox" value="1" id="gl-ta-checkbox' + rowindex + '" name="" onclick="UncheckSelectAll()"><label for="gl-ta-checkbox' + rowindex + '"></label>';
    var buttonview = document.createElement("button");
    buttonview.id = "buttonedit" + rowindex;
    buttonview.className = "global-table__button--editrow";
    buttonview.innerHTML = '<i class="fa fa-search global-table__button--icon" aria-hidden="true"></i>';
    var buttonedit = document.createElement("button");
    buttonedit.id = "buttonedit" + rowindex;
    buttonedit.className = "global-table__button--editrow";
    buttonedit.innerHTML = '<i class="fa fa-pencil global-table__button--icon" aria-hidden="true"></i>';
    var buttonbin = document.createElement("button");
    buttonbin.id = "buttonbin" + rowindex;
    buttonbin.className = "global-table__button--deleterow";
    buttonbin.innerHTML = '<i class="fa fa-trash global-table__button--icon" aria-hidden="true"></i>';
    var cellone = newrow.insertCell(0);
    var celltwo = newrow.insertCell(1);
    var cellthree = newrow.insertCell(2);
    var cellfour = newrow.insertCell(3);
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    //            var datacontainer = document.getElementByID("global-popup__data");
    var inputfield1 = document.getElementsByClassName("global-popup__input")[0];
    inputvalue1 = inputfield1.value;
    span1.innerHTML = inputvalue1;
    var inputfield2 = document.getElementsByClassName("global-popup__input")[1];
    inputvalue2 = inputfield2.value;
    span2.innerHTML = inputvalue2;
    cellone.appendChild(checkbox);
    celltwo.appendChild(span1);
    cellthree.appendChild(span2);
    cellfour.appendChild(buttonview);
    cellfour.appendChild(buttonedit);
    cellfour.appendChild(buttonbin);
    rowindex++;
    TableCount();
    CancelAddSelected();
}

function ShowDeletePopup(source) {
        var table = document.getElementById("global-table");
    var rowCount = table.rows.length;
    var deleteList = [];
//    var popup = document.getElementById('globalpopup');
//    var popupheading =
    for (var i = 1; i < rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].getElementsByTagName('input')[0];
        if ('checkbox' == chkbox.type && true == chkbox.checked) {
            deleteList.push(i);
        }
    }
//    alert(deleteList);
    if (deleteList == '') {
        deleteErrorPopup();
    }
    else {
        var deletenum = deleteList.length;
        deleteMultiplePopup(deletenum);
    }
}
//
function DeleteDecider(deltype, source) {
    if (deletetype = 1) {
        DeleteCurrent(source);
    } else {
        DeleteSelected();
    }
}

function DeleteCurrent(element) {
    //    ShowDeletePopup();
    //    alert(element);
    var todelete = element.parentNode.parentNode.rowIndex;
    var table = document.getElementById("global-table").tBodies[0];
    ShowDeletePopup()
    table.deleteRow(todelete);
}

//function DeleteSelected() {
//    var popupmodal = document.getElementById("deletepopupmodal");
//    popupmodal.style.display = "none";
//    var table = document.getElementById("global-table").tBodies[0];
//    table.rows[0].cells[0].getElementsByTagName('input')[0].checked = false;
//    var rowCount = table.rows.length;
//    //    if (confirm("Are you sure you'd like to delete the selected items?") == true) {
//    for (var i = 1; i < rowCount; i++) {
//        var row = table.rows[i];
//        var chkbox = row.cells[0].getElementsByTagName('input')[0];
//        if ('checkbox' == chkbox.type && true == chkbox.checked) {
//            table.deleteRow(i);
//            i--;
//        }
//    }
//    //    }
//}

function DeleteSelected() {
    var popupmodal = document.getElementById("deletepopupmodal");
    popupmodal.style.display = "none";
    var table = document.getElementById("global-table").tBodies[0];
    table.rows[0].cells[0].getElementsByTagName('input')[0].checked = false;
    var rowCount = table.rows.length;
    var deleteList = [];
    //    if (confirm("Are you sure you'd like to delete the selected items?") == true) {
    for (var i = 1; i < rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].getElementsByTagName('input')[0];
        if ('checkbox' == chkbox.type && true == chkbox.checked) {
            deleteList.push(i);
        }
    }
    $.post("deleterows_languages.php", {todelete: deleteList},
          function(){
            window.location.reload(true);
//        console.log(response);
//            window.location.href = response.redirect_url;
//        window.location.href="languages.php";
    });
    
//    var tosend = {
//        todelete: deleteList
//    }
//    $.ajax({
//        type: "POST",
//        url: "deleterows_languages.php",
//        data: {'todelete': deleteListtt},
//        cache: false,
//        success: function() {
//            window.location.href = "deleterows_languages.php";
//        }
//    })
    
//    alert(deleteList);
    //    }
}

function CancelDeleteSelected() {
    var popupmodal = document.getElementById("deletepopupmodal");
    popupmodal.style.display = "none";
}

function SelectAll(source) {
    var table = document.getElementById("global-table").tBodies[0];
    var count = table.rows.length;
    for (var i = 0; i < count; i++) {
        var row = table.rows[i];
        if (row.style.display != "none") {
            var chkbox = row.cells[0].getElementsByTagName('input')[0];
            chkbox.checked = source.checked;
        }
        //        chkbox.style.display = 'none';
    }
}

function UncheckSelectAll() {
    var table = document.getElementById("global-table");
    table.rows[0].cells[0].getElementsByTagName('input')[0].checked = false;
}

function ColorRow() {
    var table = document.getElementById("global-table");
    //    alert("yh");
    var currentrow = table.getElementsByTagName("tr");
    currentrow[1].style.background = "red";
    currentrow[2].style.background = "yellow";
}

function showPopupBox(heading, body, items) {
    var popup = document.getElementById('globalpopup');
    var pheading = document.getElementById('gpheading');
    var ptext = document.getElementById('gptext');
    var pbuttons = document.getElementById('gpbuttons');
    pheading.innerHTML = heading;
    ptext.innerHTML = body;
    pbuttons.innerHTML = items;
    popup.style.display = 'flex';
}

function closePopupBox() {
    var popup = document.getElementById('globalpopup');
    popup.style.display = 'none';
}

function deleteErrorPopup() {
    var btn = '<input type="button" value="Close" class="global-popup__cancel" onclick="closePopupBox()">';
    var t = 'Please select one or more items to delete';
    var h = 'No items selected';
    showPopupBox(h,t,btn);
}

function deleteMultiplePopup(count) {
    var btn = '<input type="button" value="Delete" class="global-popup__delete" onclick="DeleteSelected()"><input type="button" value="Cancel" class="global-popup__cancel" onclick="closePopupBox()">';
    var t = 'Are you sure you would like to permanently delete '+count+' item(s)?';
    var h = 'Mass Delete - '+count+' item(s)';
    showPopupBox(h,t,btn);
}

function deleteSinglePopup(elem) {
    var btn = '<input type="button" value="Delete" class="global-popup__delete" onclick="DeleteSelected()"><input type="button" value="Cancel" class="global-popup__cancel" onclick="closePopupBox()">';
    var id = elem.parentNode.parentNode.parentNode.getElementsByTagName('td')[1].innerHTML;
    var t = 'Are you sure you would like to permanently delete this item?';
    var h = 'Delete '+id+' ?';
    showPopupBox(h,t,btn);
}

function privacyPopup() {
    var h = 'Privacy Statement';
    var t = 'This is the Ayiza Privacy Statement';
    var btn = '<input type="button" value="Close" class="global-popup__cancel" onclick="closePopupBox()">';
    showPopupBox(h,t,btn);
}


function tandcPopup() {
    var h = 'Terms and Conditions';
    var t = 'These are the Ayiza Terms and Conditions';
    var btn = '<input type="button" value="Close" class="global-popup__cancel" onclick="closePopupBox()">';
    showPopupBox(h,t,btn);
}

function systemPopup() {
    var h = 'System Details';
    var t = 'These are the Ayiza System Details for this application';
    var btn = '<input type="button" value="Close" class="global-popup__cancel" onclick="closePopupBox()">';
    showPopupBox(h,t,btn);
}

function changeLogPopup() {
    var h = 'Change Log';
    var t = '<table width=100%><thead><tr><td>Table ID</td><td>Field ID</td><td>Old Value</td><td>New Value</td><td>Created By</td><td>Created On</td></tr></thead></table>';
    var btn = '<input type="button" value="Print" class="global-popup__cancel" onclick=""><input type="button" value="Export CSV" class="global-popup__cancel" onclick=""><input type="button" value="Close" class="global-popup__cancel" onclick="closePopupBox()">';
    showPopupBox(h,t,btn);
}

function expandSearchBox() {
    var searchbox = document.getElementById("tablesearch");
    searchbox.style.width = "15rem";
    searchbox.style.cursor = 'text';
    searchbox.style.transition = 'width 400ms linear';
    //    alert(searchbox.outerHTML);
    //    searchbox.outerHTML.replace('Search', 'hi');
}

function shortenSearchBox() {
    var searchbox = document.getElementById("tablesearch");
    searchbox.style.width = "5rem";
    searchbox.style.cursor = 'pointer';
    searchbox.value = "";
    UndoSearchGlobalTable();
    ShowXTableRows();
}

function SearchGlobalTable() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("tablesearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("global-table");
    tr = table.getElementsByTagName("tr");
    if (input.value != "") {
        for (i = 1; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
            td = tr[i].getElementsByTagName("td")[2];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
//                    tr[i].style.display = "none";
                }
            }
        }
    }
}

function UndoSearchGlobalTable() {
    table = document.getElementById("global-table");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "";
    }
}

function TableCount() {
    //    alert("huh");
    var count = document.getElementById("global-table").rows.length - 1;
    var totaltablecount = count;
    var pagenum = document.getElementById('tablepagecount').innerHTML;
    var text = document.getElementById("globaltablecount");
    var show = document.getElementById("showamount");
    var showing = show.options[show.selectedIndex].text;
    var start = 0;
    if (count == 0) {
        text.innerHTML = "No Records";}
        else if (showing == 'All') {
            text.innerHTML = "Showing All of "+totaltablecount+ " records";
        
    } else if (count > 0) {
//        totaltablecount  = totaltablecount/
        start = (pagenum - 1) * showing + 1;
        showing = pagenum * showing;
        if (showing > count) {
            showing = count;
        }
         //if problem, try to move above if statement
        text.innerHTML = "Showing " +start+ " - " + showing + " of " + totaltablecount + " records";
    }
}

function ShowXTableRows() {
    var table = document.getElementById("global-table");
    var tr = table.getElementsByTagName("tr");
    var show = document.getElementById("showamount");
    var showing = show.options[show.selectedIndex].text;
    var tablepage = document.getElementById("tablepagecount").innerHTML;
    if (showing == 'All') {
        for (i = 0; i < tr.length; i++) {
            tr[i].style.display = "table-row";
        }
    } else {
        //    alert(tablepage);
        var k = parseInt(tablepage);
        var l = parseInt(showing);
        var j = k * (l) + 1;
        //    if (k==1) {
        //        j = 1;
        //    }
        //  for (i = j; i < tr.length; i++) {
        for (i = 1; i < tr.length; i++) {
            tr[i].style.display = "none";
        }
        for (i = j - l; i < j; i++) {
            tr[i].style.display = "table-row";
        }
    }
    //    TableCount();
}

function TablePageDown() {
    var tablepage = document.getElementById("tablepagecount");
    var currentpage = parseInt(tablepage.innerHTML);
    if (currentpage > 1) {
        var nextpage = currentpage - 1;
        tablepage.innerHTML = nextpage.toString();
        ShowXTableRows();
    }
}

function TablePageUp() {
    var tablepage = document.getElementById("tablepagecount");
    var show = document.getElementById("showamount");
    var showing = show.options[show.selectedIndex].text;
    var count = document.getElementById("global-table").rows.length - 1;
    var p = count / parseInt(showing);
    var currentpage = parseInt(tablepage.innerHTML);
    if (currentpage < p) {
        var nextpage = currentpage + 1;
        tablepage.innerHTML = nextpage.toString();
    }
//    ShowXTableRows();
}

function TablePageReset() {
    var tablepage = document.getElementById("tablepagecount");
    tablepage.innerHTML = "1";
    ShowXTableRows();
    //    alert("hihi");
}

function OLDviewCurrentRow(viewbutton) {
    var currentrow = viewbutton.parentNode.parentNode.parentNode;
    var th = document.getElementById('global-table').getElementsByTagName('th');
    var td = currentrow.getElementsByTagName('td');
    var viewpopup = document.getElementById('viewpopupmodal');
    var popupbody = document.getElementById('viewpopupbody');
    var lim = td.length - 1;
    var heading = "";
    var content = "";
    for (i = 1; i < lim; i++) {
        heading = th[i - 1].innerHTML;
        content = td[i].innerHTML;
        popupbody.innerHTML += '<span class="global-popup__item-heading">'+heading+'</span>';
        popupbody.innerHTML += '</br>';
        popupbody.innerHTML += '<span class="global-popup__item-text">'+content+'</span>';
        popupbody.innerHTML += '</br>';
        popupbody.innerHTML += '</br>';
    }
    viewpopup.style.display = 'flex';
}

//function viewCurrentRow(viewbutton) {
//    var currentrow = viewbutton.parentNode.parentNode.parentNode;
//    var th = document.getElementById('global-table').getElementsByTagName('th');
//    var td = currentrow.getElementsByTagName('td');
//    var lim = td.length - 1;
//    var headings = [];
//    var content = [];
//    for (i = 1; i < lim; i++) {
//        headings.push(th[i].innerHTML);
//        content.push(td[i].innerHTML);
//    }
////    alert(headings[0]+content[0]+headings[0]+content[1]);
////    $.post('languages_view.html', {
////        headings[0]: content[0]
////        headings[1]: content[1]
////    })
//    sessionStorage.setItem('headinglist', JSON.stringify(headings));
//    sessionStorage.setItem('contentlist', JSON.stringify(content));
////    location.href = 'languages_view.html';
//    if (viewbutton = viewbutton.parentNode.childNodes[0]) {
//        alert('view');
//    }
//    else {
//        alert('other');
//    }
//} 

function pushCurrentRow(button) {
    alert('pushCurrentRow '+button.id);
    var currentrow = button.parentNode.parentNode.parentNode;
    var th = document.getElementById('global-table').getElementsByTagName('th');
    var td = currentrow.getElementsByTagName('td');
    var lim = td.length - 1;
    var headings = [];
    var content = [];
    for (i = 1; i < lim; i++) {
        headings.push(th[i].innerHTML);
        content.push(td[i].innerHTML);
    }
    sessionStorage.setItem('headinglist', JSON.stringify(headings));
    sessionStorage.setItem('contentlist', JSON.stringify(content));
//    location.href = 'languages_view.html';
    if (button == button.parentNode.childNodes[1]) {
        location.href='languages_view.html';
    }
    else if (button == button.parentNode.childNodes[3]) {
        location.href='languages/edit.html?id='+button.value;
    }
    else if (button == button.parentNode.childNodes[5]) {
        location.href='languages_copy.html';
    }
    else {
        alert('button selection error');
    }
} 

function getviewCurrentRow() {
    var storedheading = JSON.parse(sessionStorage.getItem('headinglist'));
    var storedcontent = JSON.parse(sessionStorage.getItem('contentlist'));
    var inputcontainer = document.getElementById('input-area');
    for (i=0; i < storedheading.length; i++) {
        inputcontainer.innerHTML += '<div class="global-page__input-container"><label class="global-page__label">'+storedheading[i]+'</label><input readonly disabled required type="text" name="" placeholder="" value="'+storedcontent[i]+'" class="global-page__input"><div class="help-tip"><p>Hint</p></div></div>';
    }
}

function geteditCurrentRow() {
    var storedheading = JSON.parse(sessionStorage.getItem('headinglist'));
    var storedcontent = JSON.parse(sessionStorage.getItem('contentlist'));
    var inputcontainer = document.getElementById('input-area');
    for (i=0; i < storedheading.length; i++) {
        inputcontainer.innerHTML += '<div class="global-page__input-container"><label class="global-page__label">'+storedheading[i]+'</label><input required type="text" name="" placeholder="" value="'+storedcontent[i]+'" class="global-page__input"><div class="help-tip"><p>Hint</p></div></div>';
    }
    var firstinput = document.getElementsByClassName('global-page__input')[0];
    firstinput.disabled = true;
}

function getcopyCurrentRow() {
    var storedheading = JSON.parse(sessionStorage.getItem('headinglist'));
    var storedcontent = JSON.parse(sessionStorage.getItem('contentlist'));
    var inputcontainer = document.getElementById('input-area');
    for (i=0; i < storedheading.length; i++) {
        inputcontainer.innerHTML += '<div class="global-page__input-container"><label class="global-page__label">'+storedheading[i]+'</label><input required type="text" name="" placeholder="" value="'+storedcontent[i]+'" class="global-page__input"><div class="help-tip"><p>Hint</p></div></div>';
    }
    var firstinput = document.getElementsByClassName('global-page__input')[0];
    firstinput.value = '';
}


function updateCurrentRow() {
    alert('updateCurrentRow')
    var labellist = [];
    var labels = document.getElementsByTagName('label');
    var inputlist = [];
    var inputs = document.getElementsByTagName('input');
    for (i=0; i<labels.length; i++) {
        labellist.push(labels[i].innerHTML);
        inputlist.push(inputs[i].value);
    }
    var uniquefield = inputs[0].value;
    alert(inputlist[1]);
    sessionStorage.setItem('labellist', JSON.stringify(labellist));
    sessionStorage.setItem('inputlist', JSON.stringify(inputlist));
//    alert(JSON.parse(sessionStorage.getItem('labellist')));
    location.href = 'languages.html?updatetable';
}

function getupdateCurrentRow() {
    var url = window.location.search;
    url = url.replace("?", '');
    var table = document.getElementById('global-table');
//    alert(url);
    if (url=='updatetable') {
        var storedlabels = JSON.parse(sessionStorage.getItem('labellist'));
        var storedinputs = JSON.parse(sessionStorage.getItem('inputlist'));
        var tochange = table.getElementsByTagName('tr').childNodes[1].value;
//        alert(tochange);
//        var tr = '<tr><td>fe</td>'
//        for (i=0; i < storedlabels.length; i++) {
//            tr += '<td>'+storedinputs[i]+'</td>';
////        document.write(storedinputs[i]);    
//    }
//        tr += '<td>ffff</td></tr>';
//        table.childNodes[1].innerHTML += tr;
    }
}

function closeViewPopup() {
    var viewpopup = document.getElementById('viewpopupmodal');
    viewpopup.innerHTML = '<div class="global-popup__box"><span class="global-popup__heading" id="viewpopupheading">Record Details</span><div class="global-popup__body" id="viewpopupbody"></div><div class="global-popup__buttons"><input type="button" value="Close" class="global-popup__cancel" onclick="closeViewPopup()"></div></div>';
    viewpopup.style.display = 'none';
}

function editCurrentRow(editbutton) {
    //    alert('start');
    var currentrow = editbutton.parentNode.parentNode;
    var th = document.getElementById('global-table').getElementsByTagName('th');
    var td = currentrow.getElementsByTagName('td');
    //    alert(td[1].innerHTML);
    var lim = td.length - 1;
    var heading = "";
    var content = "";
    var urlsuffix = '';
    for (i = 1; i < lim; i++) {
        heading = th[i - 1].innerHTML;
        content = td[i].innerHTML;
        urlsuffix = urlsuffix + heading + '=' + content + '&';
    }
    urlsuffix = urlsuffix.slice(0, -1);
    urlsuffix = urlsuffix.replace(/\s/g, '_')
    //    alert(urlsuffix);
    document.location = window.location.href.slice(0, -5) + '_edit.html?' + urlsuffix;
}

function loadEditCurrentRow() {
    var labellist = document.getElementsByClassName('global-page__label');
    var searchParams = new URLSearchParams(window.location.search);
    var item = '';
    var inputarea = document.getElementById('input-area');
    for (i = 0; i < labellist.length; i++) {
        item = labellist[i].innerHTML.replace(/\s/g, '_');
        //        console.log(searchParams.get(item));
        labellist[i].parentElement.getElementsByTagName('input')[0].value = searchParams.get(item);
        inputarea.innerHTML += "<input type='hidden' name='olditem" + i + "' value='" + searchParams.get(item) + "' />";
    }
}

function clearEditPage() {
    var inputarea = document.getElementById('input-area');
    var inputlist = inputarea.getElementsByTagName('input');
    for (i=1; i<inputlist.length; i++) {
        inputlist[i].value = '';
    }
}

function showDateBoxes() {
//    alert('test');
    var container = document.getElementById('dateselect');
    var inputs = container.getElementsByTagName('input');
    if (document.getElementById('timeselect').value == 'User Selection') {
//        alert('yes');
        for (i = 0; i < inputs.length; i++) {
            inputs[i].removeAttribute("disabled");
        }
    }
    else {
        for (i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute("disabled", true);
    }
}
}

function CheckFileName() {
        var fileName = document.getElementById("importbar").value;
        if (fileName == "") {
            alert("Browse to upload a valid file with csv extension");
            return false;
        }
        else if (fileName.split(".")[1].toUpperCase() == "CSV")
            return true;
        else {
            alert("File with " + fileName.split(".")[1] + " is invalid. Upload a valid file with csv extensions");
            return false;
        }
        return true;
//    var txt = document.getElementById('inputtext');
//    var inputtxt = document.getElementbyId('importbar');
    }

function tabSelect(evt, tabName) {
    //    alert("hi");
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("global-tab-content-container");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("global-tabs__button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
