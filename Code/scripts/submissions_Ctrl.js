"use strict"; 
/*
var app = angular.module(
  'integrationApp', 
  []
);
*/

/*
app.controller(
  'submissionsCtrl', 
  function(
    $scope, 
    $http) {*/
      
/* JavaScript / Angular custom Directive: */
function submissionsCtrl() {
  return {
    scope: {},
    controller: function ($http) {
      
      function get_Status(
        build, 
        unit_Test,
        functional_Test
      ) {
        var status;/* = {
          s_Name: undefined,
          s_Color: undefined
        };*///undefined;
        
        if (
          build == "Failed" ||
          unit_Test == "Failed" ||
          functional_Test == "Failed"
        ) {
          status = "Failed";
        } else {
          if (
            functional_Test != "undefined"
          ) {
            status = functional_Test;
          } else {
            if (
              unit_Test != "undefined"
            ) {
              status = unit_Test;
            } else {
              status = build;
            }
          }
        }
        // The function returns
        return status;              
      }
      
      /*
      {
          "Status": [
            "undefined", 
            "Pending",
            "Running",
            "Passed",
            "Failed"
            ]}
      */
      /**
       * "color"
       * "background-color"
       */ 
      function get_OverAll_Status_Color(
        status
      ) {
        var status_Color;// = undefined;
        /* defaults */
        if (status === undefined) {
          status = "undefined";
        }
        
        if (
          status == "undefined"
        ) {
          //background-color: #616161
          status_Color = "w3-dark-grey";
        } else if (
          status == "Pending"
        ) {
          //background-color: #ffc107
          status_Color = "w3-amber";
        } else if (
          status == "Running"
        ) {
          //background-color: #3f51b5
          status_Color = "w3-indigo";
        } else if (
          status == "Passed"
        ) {
          //background-color: #009688
          status_Color = "w3-teal";
        } else if (
          status == "Failed"
        ) {
          //background-color: #f44336
          status_Color = "w3-red";
        } else {
          //background-color: #616161
          status_Color = "w3-dark-grey";
        }
        // The function returns
        return status_Color;              
      }

      function get_Text_Color(
        status
      ) {
        var text_Color;// = undefined;
        /* defaults */
        if (status === undefined) {
          status = "undefined";
        }
        
        if (
          status == "undefined"
        ) {
          //background-color: #616161
          text_Color = "w3-text-dark-grey";
        } else if (
          status == "Pending"
        ) {
          //background-color: #ffc107
          text_Color = "w3-text-amber";
        } else if (
          status == "Running"
        ) {
          //background-color: #3f51b5
          text_Color = "w3-text-indigo";
        } else if (
          status == "Passed"
        ) {
          //background-color: #009688
          text_Color = "w3-text-teal";
        } else if (
          status == "Failed"
        ) {
          //background-color: #f44336
          text_Color = "w3-text-red";
        } else {
          //background-color: #616161
          text_Color = "w3-text-dark-grey";
        }
        // The function returns
        return text_Color;              
      }

      function progressBar_Text_Color(
        /* [b, u, f] */
        stage,
        self_Status,
        next_Stage_Status,
        //commit_Status
        overAll_Status_Color
      ) {
        var text_Color;// = undefined;
        /* defaults */
        if (stage === undefined) {
          stage = "Build";
        }
        if (self_Status === undefined) {
          self_Status = "undefined";
        }
        if (next_Stage_Status === undefined) {
          next_Stage_Status = "undefined";
        }
        if (overAll_Status_Color === undefined) {
          //"w3-text-dark-grey"
          overAll_Status_Color = "w3-text-grey";
        }
        
        if (
          self_Status == "undefined"
        ) {
          //background-color: #616161
          text_Color = "w3-text-grey";
        } else if (
          self_Status == "Pending"
        ) {
          //background-color: #ffc107
          if (
            self_Status === "undefined" || 
            next_Stage_Status === "undefined") {
            text_Color = "w3-text-grey";
          } else {
            text_Color = overAll_Status_Color;
          }
        } else if (
          self_Status == "Running"
        ) {
          //background-color: #3f51b5
          text_Color = overAll_Status_Color;
        } else if (
          self_Status == "Passed"
        ) {
          //background-color: #009688
          if (
            self_Status === "undefined" || 
            next_Stage_Status === "undefined") {
            text_Color = "w3-text-grey";
          } else {
            text_Color = overAll_Status_Color;
          }
        } else if (
          self_Status == "Failed"
        ) {
          //background-color: #f44336
          if (
            self_Status === "undefined" || 
            next_Stage_Status === "undefined") {
            text_Color = "w3-text-grey";
          } else {
            text_Color = overAll_Status_Color;
          }
        } else {
          //background-color: #616161
          text_Color = "w3-text-grey";
        }
        // The function returns
        return text_Color;              
      }
      
      function get_Status_Icon(
        status,
        isOverallStatus
      ) {
        var icon_Class;// = undefined;
        /* defaults */
        if (isOverallStatus === undefined) {
          isOverallStatus = false;
        }
        
        if (
          status === undefined ||
          status == "undefined"
        ) {
          //w3-spin w3-small
          //fa fa-circle
          //fa fa-question-circle
          //icon_Class = "fa fa-circle-o w3-text-dark-grey";
          //icon_Class = "fa fa-circle w3-text-dark-grey w3-large";
          //w3-medium
          //w3-light-grey
          icon_Class = "fa fa-circle w3-text-light-grey w3-xlarge";
        } else if (
          status == "Pending"
        ) {
          //fa fa-commenting-o
          //fa fa-circle-thin
          //icon_Class = "fa fa-minus-circle";
          //icon_Class = "fa fa-ellipsis-h";
          if (isOverallStatus) {
            // w3-amber
            icon_Class = "fa fa-minus-circle fa-ellipsis-h w3-text-amber";
          } else {
            icon_Class = "fa fa-ellipsis-h w3-large ";
          }          
        } else if (
          status == "Running"
        ) {
          //w3-spin w3-small
          //fa fa-spinner
          if (isOverallStatus) {
            //w3-indigo
            icon_Class = "fa fa-refresh w3-spin w3-text-indigo";
          } else {
            icon_Class = "fa fa-refresh w3-spin w3-large ";
          }
        } else if (
          status == "Passed"
        ) {
          //fa fa-check-circle w3-large
          if (isOverallStatus) {
            //w3-teal
            icon_Class = "fa fa-check-circle-o w3-text-teal";
          } else {
            icon_Class = "fa fa-check-circle w3-large ";
          }
        } else if (
          status == "Failed"
        ) {
          //fa fa-plus-circle
          //fa fa-remove
          if (!isOverallStatus) {
            //w3-red
            icon_Class = "fa fa-exclamation-circle w3-large ";
          } else {
            icon_Class = "fa fa-times-circle-o w3-text-red";
          }
        } else {
          icon_Class = "fa fa-exclamation-circle";
        }
        // The function returns
        return icon_Class;              
      }
      
      function get_Date_Time_AM(local_Date_Str) {
        /* assume that 'local_Date_Str' is OK*/
        var date_Str_Split_Array = [];
        var hours_Minutes_Array = [];
        var result_Obj = {
          dd_mm_yyyy: undefined,
          hh_mm: undefined,
          am: undefined
        };
        
        if (local_Date_Str === undefined || local_Date_Str === '') {
          // skip
        } else {
          //'12/8/2015, 5:08:54 PM'
          //["12/8/2015", " 5:08:54 PM"]
          date_Str_Split_Array = local_Date_Str.split(',');
          //" 5:08:54 PM".slice(0,-2)
          hours_Minutes_Array = date_Str_Split_Array[1]
          .slice(0,-2)
          .trim()
          .split(':');
          result_Obj = {
            dd_mm_yyyy: date_Str_Split_Array[0],
            hh_mm: hours_Minutes_Array[0] + ":" + hours_Minutes_Array[1],
            am: date_Str_Split_Array[1].slice(-2)
          };
        }
        // The function returns 
        return result_Obj;              
      }
      
      var submissions_Obj_Array = {};
      var msec = Date.parse("Tue Dec 08 2015 17:08:54 GMT+0500 (YEKT)");
      var d = new Date(msec);
      var date_Time_AM_Obj = {};
      var parent_This = this;

      /* preprocessing */
      function commits_Preprocessing(parent_This) {
        // making calculated fields for data view representation
        /// iterate over object `keys`
        ///for (var record in submissions_Obj_Array) {
        for (
          var i = 0, array_Length = submissions_Obj_Array.length; 
          i < array_Length; 
          i++
        ) {
          var record = submissions_Obj_Array[i];
          
          msec = Date.parse( record.Time_Started );
          record.msec = msec;
          d = new Date(msec);
          record.date = d;
          date_Time_AM_Obj = get_Date_Time_AM(d.toLocaleString());
          
          record.dd_mm_yyyy = date_Time_AM_Obj.dd_mm_yyyy;  
          record.hh_mm = date_Time_AM_Obj.hh_mm;
          record.am = date_Time_AM_Obj.am;
          
          record.status = get_Status(
            record.Build.Status, 
            record.Unit_Test.Status,
            record.Functional_Test.Status
          );
          
          record.icon = get_Status_Icon(
            record.status
          );
          //background-color:
          record.status_Color = get_OverAll_Status_Color( record.status );
          record.text_Color = get_Text_Color( record.status );
        }
        console.debug( submissions_Obj_Array );
        //console.debug(submissionsObj);
        // must be array
        ///$scope.submissions = submissionsObj.submissions;
        //$scope.submissions = response.data.submissions;
        //$scope
        parent_This
        .submissions = submissions_Obj_Array;
        ///console.debug(JSON.parse(response.responseText));
        /*console.debug(d.getDay() + '/' + d.getMonth() + '/' + d.getFullYear() +
        '/' + d.getHours() + '/' + d.getMinutes() );*/
        //console.debug(d.toLocaleString() );
        //console.debug( get_Date_Time_AM(d.toLocaleString()) );
        //$scope
        parent_This
        .Status = {
          "Status": [
            "undefined", 
            "Pending",
            "Running",
            "Passed",
            "Failed"
            ]};
        //console.debug($scope.Status);   
        console.debug(
          //$scope
          parent_This
          .Status[1]);
        ///console.debug($scope.Status[2]);
        //$scope
        parent_This
        .get_Status = get_Status;
        //console.debug($scope.get_Status);
        //$scope
        parent_This
        .get_Status_Icon = get_Status_Icon;
        //$scope
        parent_This
        .get_OverAll_Status_Color = get_OverAll_Status_Color;
        //$scope
        parent_This
        .get_Text_Color = get_Text_Color;
        //$scope
        parent_This
        .progressBar_Text_Color = progressBar_Text_Color;
      }
      
      /* somewere must be 'require' -> dependence injected */
      $http.get("/data/changed_code_commit.json")
      .then(
        function(response) {
          //console.debug(response.data);
          
          ///console.debug(response.responseText);
          /*var submissionsObj = {
            "submissions": [
            {
                "Change_List": 432464, 
                "Owner": "JTuck", 
                "Time_Started": "Tue Dec 08 2015 17:08:54 GMT+0500 (YEKT)",
                "Build": {"Status": "Pending"},
                "Unit_Test": {"Status": undefined},
                "Functional_Test": {"Status": undefined}
            }]};*/
          //var myArr = JSON.parse(xmlhttp.responseText);
          //var submissionsObj = JSON.parse(response.data.text);
          submissions_Obj_Array = response.data.submissions;
          
          commits_Preprocessing(parent_This);    
        }
      );
//});

    },
    // instantiate the Controller as "vm" to namespace the 
    // Class-like Object
    controllerAs: 'vm',
    // our HTML template
    templateUrl: 'views/commits_List.html'
  };
}

/* JavaScript / Angular custom Directive: */
function todo() {
  return {
    scope: {},
    controller: function () {
      // set an empty Model for the <input>
      this.label = '';
      // have some dummy data for the todo list
      // complete property with Boolean values to display 
      // finished todos
      this.todos = [{
        label: 'Learn Angular',
        complete: false
      },{
        label: 'Deploy to S3',
        complete: true
      },{
        label: 'Rewrite Todo Component',
        complete: true
      }];
      // method to iterate the todo items and return
      // a filtered Array of incomplete items
      // we then capture the length to display 1 of 3
      // for example
      this.updateIncomplete = function () {
        return this.todos.filter(function (item) {
          return !item.complete;
        }).length;
      };
      // each todo item contains a ( X ) button to delete it
      // we simply splice it from the Array using the $index
      this.deleteItem = function (index) {
        this.todos.splice(index, 1);
      };
      // the submit event for the <form> allows us to type and
      // press enter instead of ng-click on the <button> element
      // we capture $event and prevent default to prevent form submission
      // and if the label has a length, we'll unshift it into the this.todos
      // Array which will then add the new todo item into the list
      // we'll then set this.label back to an empty String
      this.onSubmit = function (event) {
        if (this.label.length) {
          this.todos.unshift({
            label: this.label,
            complete: false
          });
          this.label = '';
        }
        event.preventDefault();
      };
    },
    // instantiate the Controller as "vm" to namespace the 
    // Class-like Object
    controllerAs: 'vm',
    // our HTML template
    templateUrl: 'views/todo.html'//'../partials/todo.html'
  };
}