    $(document).ready(function () {
      $('#savebtn').on("click",function (e) {
          e.preventDefault();
          var languageCode, languageText;
          languageCode = $('#languageCode').val();
          languageText = $('#languageText').val();
          if($.trim(languageCode) === ""){
              alert("Language Code cannot be empty");
          }
          else if(!$.trim(languageText) === "") {
              alert("Language Text cannot be empty");
          }
          else {
              var data = {};
              data["code"] = languageCode;
              data["text"] = languageText;
              alert(data);
              $.ajax({
                  type: "POST",
                  contentType: "application/json",
                  url: "/configmgr/languages",
                  data: JSON.stringify(data),
                  dataType: 'json',
                  timeout: 6000,
                  success: function (data) {
                      if (confirm("Language with Id " +data + " Saved")){
                          window.location.href = '../languages.html';
                      }
                  }
              });
          }
      });
    });

    $(document).ready(function () {
       $('#updatebtn').on("click",function (e) {
           e.preventDefault();
           var languageId, languageCode, languageText;
           languageId = $('#languageId').val();
           languageCode = $('#languageCode').val();
           languageText = $('#languageText').val();
           if($.trim(languageCode) === ""){
               alert("Language Code cannot be empty");
           }
           else if(!$.trim(languageText) === "") {
               alert("Language Text cannot be empty");
           }
           else {
               var data = {};
               data["id"] = languageId;
               data["code"] = languageCode;
               data["text"] = languageText;
               $.ajax({
                   type: "PUT",
                   contentType: "application/json",
                   url: "/configmgr/languages",
                   data: JSON.stringify(data),
                   dataType: 'json',
                   timeout: 6000,
                   success: function (data) {
                       if (confirm("Language with Id " +data + " Saved")){
                           window.location.href = '../languages.html';
                       }
                   }
               });
           }
       });
    });

    function selectLanguage(button) {
        alert('selectLanguage '+button.id);
        var currentrow = button.parentNode.parentNode.parentNode;
        if (button == button.parentNode.childNodes[1]) {
            location.href='languages/view.html?id='+button.value;
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

    function deleteLanguage(button) {
        var todelete = button.value;
        alert(todelete);
        var table = document.getElementById("global-table").tBodies[0];
        //ShowDeletePopup()
        //table.deleteRow(todelete);
       $.ajax({
           type: "DELETE",
           contentType: "application/json",
           url: "/configmgr/languages?id="+todelete,
           timeout: 6000,
           success: function (data) {
               if (confirm("Language with Id " +todelete + " Deleted")){
                   window.location.reload();
               }
           }
       });
    }