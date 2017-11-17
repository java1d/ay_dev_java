    $(document).ready(function () {
        $('#savebtn').on("click",function (e) {
            e.preventDefault();
            var currencyId, currencyCode, currencyText, languageId;
            currencyId = $('#currencyId').val();
            currencyCode = $('#currencyCode').val();
            currencyText = $('#currencyText').val();
            languageId = $('#languageId').val();
            if(languageId === null) {
                var options = $('#languageId').children();
                for(var i=0; i< options.length; i++) {
                    if(options[i].selected === true) {
                        languageId = options[i].value;
                        break;
                    }
                }
            }
            if($.trim(currencyCode) === ""){
               alert("Currency Code cannot be empty");
            }
            else if(!$.trim(currencyText) === "") {
               alert("Currency Text cannot be empty");
            }
            else if(!$.trim(languageId) === null) {
               alert("Language cannot be empty");
            }
            else {
                var data = {};
                var language = {};
                language["id"] = languageId;
                data["id"] = currencyId;
                data["code"] = currencyCode;
                data["text"] = currencyText;
                data["language"] = language;
                alert(data);
                $.ajax({
                    type: "POST",
                    contentType: "application/json",
                    url: "/configmgr/currencies",
                    data: JSON.stringify(data),
                    dataType: 'json',
                    timeout: 6000,
                    success: function (data) {
                        if (confirm("Currency with Id " +data + " Saved")){
                            window.location.href = '../currencies.html';
                        }
                    }
                });
            }
        });
    });

    $(document).ready(function () {
        $('#updatebtn').on("click",function (e) {
            e.preventDefault();
            var currencyId, currencyCode, currencyText, languageId, languageText, languageCode;
            currencyId = $('#currencyId').val();
            currencyCode = $('#currencyCode').val();
            currencyText = $('#currencyText').val();
            languageId = $('#languageId').val();
            if(languageId === null) {
                var options = $('#languageId').children();
                for(var i=0; i< options.length; i++) {
                    if(options[i].selected === true) {
                        languageId = options[i].value;
                        break;
                    }
                }
            }
            if($.trim(currencyCode) === ""){
               alert("Currency Code cannot be empty");
            }
            else if(!$.trim(currencyText) === "") {
               alert("Currency Text cannot be empty");
            }
            else if(!$.trim(languageId) === null) {
               alert("Language cannot be empty");
            }
            else {
               var data = {};
               var language = {};
               language["id"] = languageId;
               data["id"] = currencyId;
               data["code"] = currencyCode;
               data["text"] = currencyText;
               data["language"] = language;
               $.ajax({
                   type: "PUT",
                   contentType: "application/json",
                   url: "/configmgr/currencies",
                   data: JSON.stringify(data),
                   dataType: 'json',
                   timeout: 6000,
                   success: function (data) {
                       if (confirm("Currency with Id " +data + " Saved")){
                           window.location.href = '../currencies.html';
                       }
                   }
               });
            }
       });
    });

    function editEntry(button) {
        alert('editCurrency '+button.id);
        var currentrow = button.parentNode.parentNode.parentNode;
        if (button == button.parentNode.childNodes[1]) {
            location.href='currencies/view.html?id='+button.value;
        }
        else if (button == button.parentNode.childNodes[3]) {
            location.href='currencies/edit.html?id='+button.value;
        }
        else if (button == button.parentNode.childNodes[5]) {
            location.href='currencies_copy.html';
        }
        else {
            alert('button selection error');
        }
    }

    function deleteEntry(button) {
        var todelete = button.value;
        var table = document.getElementById("global-table").tBodies[0];
       $.ajax({
           type: "DELETE",
           contentType: "application/json",
           url: "/configmgr/currencies?id="+todelete,
           timeout: 6000,
           success: function (data) {
               if (confirm("Currency with Id " +todelete + " Deleted")){
                   window.location.reload();
               }
           }
       });
    }

    function searchLanguage(searchbtn) {
        var query = searchbtn.value;
        if(query.length < 2) return;
        else {
            var languageText = document.getElementById('languageText');
            var languageId = document.getElementById('languageId');
            $.ajax({
                type: "GET",
                contentType: "application/json",
                url: "/configmgr/languages/search?code="+query,
                timeout: 6000,
                success: function (data) {
                    if (confirm("Language with code " +query + " Found")){
//                        alert('language found '+data[0].text);
                        var html = '<option value="">--Select Language--</option>';
                        var len = data.length;
                        for ( var i = 0; i < len; i++) {
                           html += '<option value="' + data[i].id + '">'
                                   + data[i].text + '</option>';
                        }
                        $('#languageId').html(html);
                    }
                }
            });
        }
    }
