import React from 'react'
/* export const sampleJson = {
    "components": [{
       "asHtml": false,
       "name": "sample_child_1",
       "model": "test",
       "label": "Hello",
       "loadInitially": true,
       "type": "display",
       "value": "world"
    },{
        "asHtml": false,
        "name": "sample_child_2",
        "model": "test",
        "label": "Hello",
        "loadInitially": true,
        "type": "display",
        "value": "world"
     }],
    "name": "sample",
    "type": "page",
    "title": "sample test"
 }; */

 export const sampleJson = {
   "components": [
      {
         "name": "selectOptions",
         "type": "resource",
         "staticData": [
            {
               "label": "Page",
               "value": "P"
            },
            {
               "label": "Virtual Domain",
               "value": "V"
            },
            {
               "label": "CSS",
               "value": "C"
            }
         ]
      },
      {
         "resource": "virtualDomains.reactDemo",
         "name": "pageDetails",
         "type": "resource",
         "staticData": []
     },
      {
      "name": "samplePage_child_1",
      "style": "test",
      "showInitially": true,
      "label": "block label",
      "type": "block"
   },{
      "asHtml": false,
      "name": "sample_child_1",
      "model": "test",
      "label": "Hello",
      "loadInitially": true,
      "type": "display",
      "value": "world"
   },{
         "components": [{
            "onError": "alert('on Error'+ $ownerPagesBlock_options);",
            "label": "Type",
            "loadInitially": false,
            "type": "select",
            "required": false,
            "sourceParameters": {},
            "name": "ownerPagesBlock_options",
            "onLoad": "alert('on Load' + $ownerPagesBlock_options);",
            "sourceModel": "selectOptions",
            "style": "col-md-3",
            "placeholder": "Select...",
            "valueKey": "value",
            "labelKey": "label",
            "onUpdate": "alert('on Update' + $ownerPagesBlock_options);\n if( $ownerPagesBlock_options === 'V') $samplePage_child_1_visible=false; else $samplePage_child_1_visible=true;"
         },{
            "onError": "alert('on Error'+ $ownerPagesBlock_options);",
            "label": "custom Type",
            "loadInitially": false,
            "type": "select",
            "required": false,
            "sourceParameters": {},
            "name": "ownerPagesBlock_options1",
            "onLoad": "alert('on Load' + $ownerPagesBlock_options);",
            "sourceModel": "selectOptions",
            "style": "col-md-3",
            "placeholder": "Select...",
            "valueKey": "value",
            "labelKey": "label",
            "onUpdate": "console.log(item);"
         }, {
            "sourceParameters": {},
            "name": "selectOwner",
            "sourceModel": "pageDetails",
            "model": "name",
            "label": "Name",
            "placeholder": "Select ....",
            "loadInitially": true,
            "type": "select",
            "labelKey": "CONSTANT_NAME",
            "valueKey": "PAGE_OWNER",
            "required": false
      }],
         "name": "ownerPagesBlock",
         "style": "row",
         "showInitially": true,
         "type": "block"
      }],
   "name": "samplePage",
   "label": "page label",
   "title": "Sample Test demo",
   "type": "page"
}

 export const SampleJsonContext = React.createContext(
    sampleJson
); 