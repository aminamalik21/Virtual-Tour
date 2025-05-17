(function(){
    var script = {
 "start": "this.init()",
 "vrPolyfillScale": 0.5,
 "children": [
  "this.MainViewer"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -129.14,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CE2E05F2_DD04_9E12_41C4_A8EA15358ADE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_t.jpg"
  }
 ],
 "label": "162",
 "id": "panorama_2C1A3955_2095_CA86_41BC_F803A92D6453",
 "hfov": 360,
 "overlays": [
  "this.overlay_2E47963C_209B_C686_41BF_A176F5C8EEDB"
 ],
 "pitch": -7.96,
 "adjacentPanoramas": [
  {
   "backwardYaw": -29.81,
   "class": "AdjacentPanorama",
   "yaw": -20.47,
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "distance": 1
  }
 ],
 "vfov": 74.52,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -20.89,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC7CC700_DD04_9BEE_41D1_E0CEF4F88F30",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 66.76,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF55D849_DD04_967E_41E8_AB9FB9105876",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -100.34,
  "pitch": -1.21
 },
 "class": "PanoramaCamera",
 "id": "panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "13",
 "id": "panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE",
 "hfov": 360,
 "overlays": [
  "this.overlay_95125FF4_831E_1DDA_41BF_BE87B4B04A2C",
  "this.overlay_9569899C_8312_224A_41DA_9C6E5EAF6507"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 84.35,
   "class": "AdjacentPanorama",
   "yaw": -106.4,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "distance": 1
  },
  {
   "backwardYaw": 84.35,
   "class": "AdjacentPanorama",
   "yaw": -43.54,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "distance": 1
  }
 ],
 "vfov": 63.89,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_924072FC_8132_27CA_41C3_10021807C8E4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.22,
  "pitch": -4.91
 },
 "class": "PanoramaCamera",
 "id": "panorama_9CF4C929_876E_624D_41DC_0769C9491F92_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "ground coridoor stairs",
 "id": "panorama_9CF4C929_876E_624D_41DC_0769C9491F92",
 "hfov": 360,
 "overlays": [
  "this.overlay_9D9EF786_8776_6E47_4194_18CD109E014E",
  "this.overlay_C2575B5B_D2C9_0DD5_41D0_7935BCE45C8E",
  "this.overlay_C0865F39_D2DF_0563_41D2_B1B219C20123",
  "this.overlay_C3377466_D2DB_1BE7_41CB_C8A87D8F0C53"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 64.08,
   "class": "AdjacentPanorama",
   "yaw": 21.79,
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "distance": 1
  }
 ],
 "vfov": 64.38,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170.62,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CEE109B8_DD04_961E_41D1_DC1C11034CED",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_D9FE05FD_D79D_7C83_41E4_6F7F41A58DDD",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_D9FFA5FE_D79D_7C81_41B6_509537741CC2"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window3043"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C294E177_D54F_3D10_41B9_38B95C94C8CB",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C2955181_D54F_3DF0_41D4_651243BD9B90"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window40816"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -86.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CE791921_DD04_962E_41AF_B8250C34C6BC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C7EA4BF8_D7A5_5481_41D8_48A233EC386D",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C7E81BF9_D7A5_5483_41E6_73443E98F8B6"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window5859"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C50B5FE3_D7A6_CC87_4193_5F86DDF65DC7",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C50DBFE3_D7A6_CC87_41D0_35160F4E451B"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window18524"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 156.62,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCE4277E_DD04_9A12_41E9_01EAEF129AEF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "rightcooridoor",
 "id": "panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
 "hfov": 263.39,
 "overlays": [
  "this.overlay_6854E312_78CE_5A84_41DC_30A4C479169B",
  "this.overlay_6803A47B_78C6_5F7B_41C1_6A052BD688F2",
  "this.overlay_69AFD036_78CA_568C_41BF_B01840300243",
  "this.overlay_94935385_8316_2645_41CB_96A355BE371C",
  "this.overlay_946C7F8E_8316_7E46_41D7_70F5CE35512A",
  "this.overlay_C4808FAC_D7BE_CC81_41C1_8B5531824A2A",
  "this.overlay_C742DA2A_D7A5_7781_41E7_191C4C50FFED",
  "this.overlay_C394CF1A_D7A6_CD81_41D6_69A33A584D35",
  "this.overlay_C636CF24_D7AA_CD81_41E8_097CBC15223D"
 ],
 "pitch": -7.99,
 "adjacentPanoramas": [
  {
   "backwardYaw": -109.56,
   "class": "AdjacentPanorama",
   "yaw": -127.2,
   "panorama": "this.panorama_6833DF27_78C9_AA8B_41D7_218E52138C53",
   "distance": 1
  },
  {
   "backwardYaw": 68.4,
   "class": "AdjacentPanorama",
   "yaw": -94.24,
   "panorama": "this.panorama_68963652_78C9_FA84_41D3_30E9234A7AC4",
   "distance": 1
  },
  {
   "backwardYaw": -113.24,
   "class": "AdjacentPanorama",
   "yaw": 1.56,
   "panorama": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
   "distance": 1
  },
  {
   "backwardYaw": 69.01,
   "class": "AdjacentPanorama",
   "yaw": -64.87,
   "panorama": "this.panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173",
   "distance": 1
  },
  {
   "backwardYaw": -106.4,
   "class": "AdjacentPanorama",
   "yaw": 84.35,
   "panorama": "this.panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE",
   "distance": 1
  }
 ],
 "vfov": 62.1,
 "hfovMax": 130,
 "partial": true,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_t.jpg"
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C77D4AF3_D7A7_F487_41D0_99C538D09506",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C77C9AF4_D7A7_F481_41E1_051CBF93D84F"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window4557"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 159.53,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCD087BC_DD04_9A16_41EB_82C0CF9764F8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_t.jpg"
  }
 ],
 "label": "staira",
 "id": "panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E",
 "hfov": 360,
 "overlays": [
  "this.overlay_2E1CDA60_27CE_AFB4_41A5_F7426B7FECE0",
  "this.overlay_58B8AED6_5546_AC6F_41B6_7E26E95B3B8B"
 ],
 "pitch": -2.02,
 "adjacentPanoramas": [
  {
   "backwardYaw": 25.19,
   "class": "AdjacentPanorama",
   "yaw": -23.38,
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "distance": 1
  },
  {
   "backwardYaw": 104.17,
   "class": "AdjacentPanorama",
   "yaw": 64.27,
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "distance": 1
  }
 ],
 "vfov": 72.9,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.51,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF56D514_DD04_9E16_41E2_3850C2A985D1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.29,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC84975F_DD04_9A12_41BC_2D2C56F8DC63",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "lab",
 "id": "panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C",
 "hfov": 360,
 "overlays": [
  "this.overlay_60A0DC6E_6FF6_E1CE_41BC_3DAF4075F002",
  "this.overlay_6055C2F0_6FF6_A6D2_41C6_D0504FFB7E8E"
 ],
 "pitch": -5,
 "adjacentPanoramas": [
  {
   "backwardYaw": 5.46,
   "class": "AdjacentPanorama",
   "yaw": 39.26,
   "panorama": "this.panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6",
   "distance": 1
  },
  {
   "backwardYaw": 170.44,
   "class": "AdjacentPanorama",
   "yaw": 168.74,
   "panorama": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
   "distance": 1
  }
 ],
 "vfov": 84.33,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C44129B7_D4FB_0372_41E4_460294AFC08D",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C447F9B8_D4FB_037E_41D3_AC86C380A6DD"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window8924"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.37,
  "pitch": -6.55
 },
 "class": "PanoramaCamera",
 "id": "panorama_63584076_72C4_C225_41D9_7003B7355FB0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -134.74,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF4514F5_DD04_9E16_41D8_DE685B13E3F4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_t.jpg"
  }
 ],
 "label": "room1",
 "id": "panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D6F2A04_6DFF_41E5_41C2_8816C37AFAA2"
 ],
 "pitch": -9.44,
 "adjacentPanoramas": [
  {
   "backwardYaw": -15.87,
   "class": "AdjacentPanorama",
   "yaw": 58.98,
   "panorama": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
   "distance": 1
  }
 ],
 "vfov": 62.01,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -158.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF29B468_DD04_9E3E_41DE_4717CD6C7819",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_t.jpg"
  }
 ],
 "label": "lab102.2",
 "id": "panorama_62830609_72C7_41EF_41CB_5673A5B66BA1",
 "hfov": 360,
 "overlays": [
  "this.overlay_64E823A1_723F_C6DF_41AE_AC9001E868AA"
 ],
 "pitch": -5.16,
 "adjacentPanoramas": [
  {
   "backwardYaw": 176.49,
   "class": "AdjacentPanorama",
   "yaw": -9.38,
   "panorama": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18",
   "distance": 1
  }
 ],
 "vfov": 65.17,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 56.11,
  "pitch": -3.68
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.44,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF900573_DD04_9E12_41E1_9F7AC73C0EEA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "path": "shortest"
   },
   {
    "easing": "linear",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -132.75,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF803554_DD04_9E16_41A1_95FBF9A52F3B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C40C1450_D4EB_01C5_41D7_DABAFC03EA18",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C40DF452_D4EB_01C5_41E6_D479D1258387"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window6338"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -121.02,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCCFB449_DD04_9E7E_41E7_D48CE4E0E75B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_t.jpg"
  }
 ],
 "label": "labcoridoor",
 "id": "panorama_62D183DF_72CD_4663_41D0_062874C5F8E2",
 "hfov": 360,
 "overlays": [
  "this.overlay_62A9550E_72C4_C3E5_41CA_485470CFFD35",
  "this.overlay_637C86D9_72C4_CE6F_41D0_A8AEB8F2290F",
  "this.overlay_9945CEA8_8B23_D5FF_41D8_3D65598F7B91",
  "this.overlay_C1F3533C_D549_1D17_41C4_509D8C35C402",
  "this.overlay_C16B0809_D54F_0AF0_41DB_5266C7C60B71",
  "this.overlay_C2F56F2C_D54B_0537_41AF_06550C5D02A3"
 ],
 "pitch": -3.79,
 "adjacentPanoramas": [
  {
   "backwardYaw": 60.58,
   "class": "AdjacentPanorama",
   "yaw": -79.25,
   "panorama": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18",
   "distance": 1
  },
  {
   "backwardYaw": 60.58,
   "class": "AdjacentPanorama",
   "yaw": -114.88,
   "panorama": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18",
   "distance": 1
  },
  {
   "backwardYaw": 159.11,
   "class": "AdjacentPanorama",
   "yaw": 78.87,
   "panorama": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0",
   "distance": 1
  }
 ],
 "vfov": 61.06,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.61,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF865868_DD04_963E_41E5_A742D3616091",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -150.31,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCC04436_DD04_9E12_41DD_66BA940FA8A2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_t.jpg"
  }
 ],
 "label": "leftroom",
 "id": "panorama_6833DF27_78C9_AA8B_41D7_218E52138C53",
 "hfov": 360,
 "overlays": [
  "this.overlay_6AA92E5C_78C9_EABC_41C1_C794B9FFD48E",
  "this.overlay_6AF5D2A2_78CE_BB85_41D1_D188597B1E20"
 ],
 "pitch": -5.76,
 "adjacentPanoramas": [
  {
   "backwardYaw": -127.2,
   "class": "AdjacentPanorama",
   "yaw": -109.56,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "distance": 1
  },
  {
   "backwardYaw": -127.2,
   "class": "AdjacentPanorama",
   "yaw": -43.21,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "distance": 1
  }
 ],
 "vfov": 63.91,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.6,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CFB7F859_DD04_961E_41E7_0F3CA006DA4E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1BA79F8_DD04_8DF1_41E1_A07EDD5C6ED7_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1BA79F8_DD04_8DF1_41E1_A07EDD5C6ED7_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1BA79F8_DD04_8DF1_41E1_A07EDD5C6ED7_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1BA79F8_DD04_8DF1_41E1_A07EDD5C6ED7_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D1BA79F8_DD04_8DF1_41E1_A07EDD5C6ED7_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "WhatsApp Image 2025-05-16 at 9.33.03 AM",
 "id": "panorama_D1BA79F8_DD04_8DF1_41E1_A07EDD5C6ED7",
 "hfov": 360,
 "overlays": [
  "this.overlay_CD953D4C_DD04_8A12_41E0_3F82BBE4E37B"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 46.08,
   "class": "AdjacentPanorama",
   "yaw": 58.3,
   "panorama": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0",
   "distance": 1
  }
 ],
 "vfov": 61.88,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D1BA79F8_DD04_8DF1_41E1_A07EDD5C6ED7_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_t.jpg"
  }
 ],
 "label": "smartlab",
 "id": "panorama_60C35C53_7035_61D6_41D1_96B6807993FF",
 "hfov": 360,
 "overlays": [
  "this.overlay_61118D3D_7037_E352_41DB_D9CAFC4E92D4",
  "this.overlay_611F8621_7035_6172_41D7_6BFE4C4F7884"
 ],
 "pitch": -5.86,
 "adjacentPanoramas": [
  {
   "backwardYaw": 93.93,
   "class": "AdjacentPanorama",
   "yaw": -172.48,
   "panorama": "this.panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA",
   "distance": 1
  },
  {
   "backwardYaw": -125.17,
   "class": "AdjacentPanorama",
   "yaw": 60.76,
   "panorama": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
   "distance": 1
  }
 ],
 "vfov": 63.46,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_t.jpg"
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C2E4048B_D339_3B0D_41DF_19C712605800",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C2E3D48B_D339_3B0D_41B3_5989D23C0914"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window16129"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_D1BA79F8_DD04_8DF1_41E1_A07EDD5C6ED7_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.99,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF1FC80A_DD04_95F3_41DF_FA7DB11112C4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -115.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCB9874F_DD04_9A72_41B4_25105BF4FB9E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C72BC2FB_D7A5_D487_41D5_FA857263B426",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C72DE2FC_D7A5_D481_41E5_ACA03F5040A0"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window10103"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C04E927A_D349_1F0B_41DD_47A58239CC8F",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C040D281_D349_1FF9_41D9_69972AF053B9"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window17606"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C5BF99B2_D52B_006F_41E3_600C0D5FE12C",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C5BC69B8_D52B_005A_41BB_A2A9B13E36C8"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window10899"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 52.8,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CFDE25E2_DD04_9E32_41E2_E0E4C6323F9D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "path": "shortest"
   },
   {
    "easing": "linear",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.4,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CE0EC8E2_DD04_9632_41D5_0BA438C22D09",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C1CB28FE_D337_0CFA_41E9_CE05309942B1",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0.78,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C1CDE8FF_D337_0CFA_41C4_C2BA176A350E"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window14162"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -66.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CFE27583_DD04_9EF1_419F_F578DFB49154",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C0DEEF12_D3FB_0513_41D8_244451AD31EE",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C0DCBF13_D3FB_0514_41CA_4943C9372155"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window20384"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_t.jpg"
  }
 ],
 "label": "164",
 "id": "panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6",
 "hfov": 360,
 "overlays": [
  "this.overlay_755DB10D_65B5_772B_41C4_00F2A279D95A",
  "this.overlay_74FCDDDB_65B2_AF2F_41D4_69CA87397091"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 50.86,
   "class": "AdjacentPanorama",
   "yaw": -82.14,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "distance": 1
  },
  {
   "backwardYaw": 50.86,
   "class": "AdjacentPanorama",
   "yaw": -144.95,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "distance": 1
  }
 ],
 "vfov": 85.11,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -158.09,
  "pitch": -15.13
 },
 "class": "PanoramaCamera",
 "id": "panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "lab2",
 "id": "panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6",
 "hfov": 360,
 "overlays": [
  "this.overlay_6057515A_6FF2_E3D6_41CB_9577DD48D455",
  "this.overlay_7FE3BEF8_6FF3_9ED2_41CA_F4E9C9BAB020"
 ],
 "pitch": -2.42,
 "adjacentPanoramas": [
  {
   "backwardYaw": 39.26,
   "class": "AdjacentPanorama",
   "yaw": 5.46,
   "panorama": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0"
  }
 ],
 "vfov": 81.63,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_t.jpg"
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C508F34D_D7EB_5583_41E2_5F30144B48D4",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C516F34E_D7EB_5581_41E7_3A8A38732A8D"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window21283"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 61.43,
  "pitch": -5.73
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.42,
  "pitch": 4.85
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.86,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF090497_DD04_9E12_41D7_71C4A17CA9C8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C7799C60_D7AF_5381_41D0_4A1E5CC0C00F",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C77B2C60_D7AF_5381_41B6_D8E8850A8981"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window13985"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_t.jpg"
  }
 ],
 "label": "Entrance1",
 "id": "panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A",
 "hfov": 360,
 "overlays": [
  "this.overlay_2E0F5BBC_27CE_AC93_4188_ECB314955772",
  "this.overlay_C0249540_D337_0507_41E3_B707207B9459"
 ],
 "pitch": 4.85,
 "adjacentPanoramas": [
  {
   "backwardYaw": 9.66,
   "class": "AdjacentPanorama",
   "yaw": -170.37,
   "panorama": "this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784",
   "distance": 1
  }
 ],
 "vfov": 81.61,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_t.jpg"
  }
 ],
 "label": "right room",
 "id": "panorama_68963652_78C9_FA84_41D3_30E9234A7AC4",
 "hfov": 360,
 "overlays": [
  "this.overlay_6BD3DF15_78CF_EA8C_41D5_6EBD41E4832C",
  "this.overlay_6A8CE6AE_78CE_BB9C_41DB_EB9AD1803C48"
 ],
 "pitch": -5.8,
 "adjacentPanoramas": [
  {
   "backwardYaw": -94.24,
   "class": "AdjacentPanorama",
   "yaw": 68.4,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "distance": 1
  },
  {
   "backwardYaw": -94.24,
   "class": "AdjacentPanorama",
   "yaw": 140.48,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "distance": 1
  }
 ],
 "vfov": 62.89,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 52.8,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CFCC25C3_DD04_9E72_41D6_DAB2712E2DC6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "path": "shortest"
   },
   {
    "easing": "linear",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -119.24,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC123692_DD04_9A12_41DF_D6CBCDAF8597",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 70.44,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF7AE82A_DD04_9632_41DB_DCA2A8F34003",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.88,
  "pitch": -8.18
 },
 "class": "PanoramaCamera",
 "id": "panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -31.12,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCA5072E_DD04_9A32_41E0_62FA1E52BB60",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_t.jpg"
  }
 ],
 "label": "smartlab2",
 "id": "panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA",
 "hfov": 360,
 "overlays": [
  "this.overlay_61BB297B_7032_E3D6_41D3_E7B64B6A14DE"
 ],
 "pitch": -6.76,
 "adjacentPanoramas": [
  {
   "backwardYaw": -172.48,
   "class": "AdjacentPanorama",
   "yaw": 93.93,
   "panorama": "this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF",
   "distance": 1
  }
 ],
 "vfov": 64.87,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -95.65,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC6236C1_DD04_9A6E_41DC_AE731DCB27C7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "path": "shortest"
   },
   {
    "easing": "linear",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C091CA1C_D3C9_0F10_41E0_39B49BB88342",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C0902A24_D3C9_0F30_418A_4262E4A2C226"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window19079"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -38.38,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCDEC7CC_DD04_9A76_41E8_8F26656FDA05",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C187FFE1_D54B_0530_41D1_67749F2802EF",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C185FFE5_D54B_0531_41BE_0E26E7726F34"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window33416"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 115.28,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CFB08544_DD04_9E76_41BD_944B48492E6B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 85.76,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CE5AB950_DD04_966E_41DA_EE85B79CC3AA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "path": "shortest"
   },
   {
    "easing": "linear",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -115.92,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCEAD425_DD04_9E31_41A1_1D2940152856",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "lab3",
 "id": "panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0",
 "hfov": 360,
 "overlays": [
  "this.overlay_7FA80A1D_6FED_6152_41D0_915457C0472D"
 ],
 "pitch": -5.12,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C"
  }
 ],
 "vfov": 74.16,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 17,
      "colCount": 17,
      "width": 8704,
      "class": "TiledImageResourceLevel",
      "height": 8704
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/4/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/5/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 17,
      "colCount": 17,
      "width": 8704,
      "class": "TiledImageResourceLevel",
      "height": 8704
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/4/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/5/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 17,
      "colCount": 17,
      "width": 8704,
      "class": "TiledImageResourceLevel",
      "height": 8704
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/4/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/5/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 17,
      "colCount": 17,
      "width": 8704,
      "class": "TiledImageResourceLevel",
      "height": 8704
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/4/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/5/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 17,
      "colCount": 17,
      "width": 8704,
      "class": "TiledImageResourceLevel",
      "height": 8704
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/4/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/5/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_t.jpg"
  }
 ],
 "label": "room3",
 "id": "panorama_882F48DF_8338_ED5E_41DF_4F65530589AE",
 "hfov": 360,
 "overlays": [
  "this.overlay_8D9C4032_8348_DCE6_41C9_15041FDC3BEA"
 ],
 "pitch": -14.82,
 "adjacentPanoramas": [
  {
   "backwardYaw": 83.37,
   "class": "AdjacentPanorama",
   "yaw": 75.91,
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "distance": 1
  }
 ],
 "vfov": 64.97,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 150.19,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF960878_DD04_961E_41A5_19F6E6CFB1DF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C515D934_D7A5_5581_41EA_4302B908E2F8",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C51BD934_D7A5_5581_419A_3164CEC4AEC3"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window11388"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_t.jpg"
  }
 ],
 "label": "163",
 "id": "panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB",
 "hfov": 360,
 "overlays": [
  "this.overlay_302D5BD4_20AD_4D85_41B8_F9DD191D9F97"
 ],
 "pitch": -9.31,
 "adjacentPanoramas": [
  {
   "backwardYaw": 163.01,
   "class": "AdjacentPanorama",
   "yaw": 141.62,
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "distance": 1
  }
 ],
 "vfov": 74.76,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 100.75,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CE9739A8_DD04_963E_41D1_8B56CA77ADB2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 64.67,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CFE00887_DD04_96F1_41E0_8C6C56EA34C7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_t.jpg"
  }
 ],
 "label": "165",
 "id": "panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965",
 "hfov": 360,
 "overlays": [
  "this.overlay_330B46B1_2096_C79E_414D_EE196269949D",
  "this.overlay_34F412D5_209B_5F87_41B7_5D443005399A"
 ],
 "pitch": -11.07,
 "adjacentPanoramas": [
  {
   "backwardYaw": 137.27,
   "class": "AdjacentPanorama",
   "yaw": -128.09,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "distance": 1
  },
  {
   "backwardYaw": 137.27,
   "class": "AdjacentPanorama",
   "yaw": -50.95,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "distance": 1
  }
 ],
 "vfov": 78.05,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_t.jpg"
  }
 ],
 "label": "left",
 "id": "panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
 "hfov": 360,
 "overlays": [
  "this.overlay_62A03976_6FD3_E3DE_41C1_FDC5CDF26976",
  "this.overlay_620CCBA2_702F_E776_41C1_50B308F2F3C6",
  "this.overlay_7DF4AF74_6DC5_FE25_41CB_C3D88A6FA1A8",
  "this.overlay_9B697C42_8B5F_34B3_41D5_D6888052EC6C",
  "this.overlay_C1CA9EEA_D3FB_0730_41D9_EC5D6B7C0A14",
  "this.overlay_C1BBA077_D3CB_FB10_41E1_46298F388B07",
  "this.overlay_C5A320DE_D529_01D1_41E1_8C34B634E0B6",
  "this.overlay_C5F18D6E_D529_00FF_41D8_3C8ADABCC142"
 ],
 "pitch": -7.56,
 "adjacentPanoramas": [
  {
   "backwardYaw": 29.69,
   "class": "AdjacentPanorama",
   "yaw": -63.22,
   "panorama": "this.panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0",
   "distance": 1
  },
  {
   "backwardYaw": 58.98,
   "class": "AdjacentPanorama",
   "yaw": -15.87,
   "panorama": "this.panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613",
   "distance": 1
  },
  {
   "backwardYaw": -25.06,
   "class": "AdjacentPanorama",
   "yaw": -85.62,
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "distance": 1
  },
  {
   "backwardYaw": 21.03,
   "class": "AdjacentPanorama",
   "yaw": 179.23,
   "panorama": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
   "distance": 1
  }
 ],
 "vfov": 64.86,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_t.jpg"
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C58D753A_D52F_006D_41C5_DF5677209CFA",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C58F153A_D52F_006D_41E3_C42E7DE45818"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window12655"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C683B424_D7A5_7381_41E8_814EC5A386AA",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C6844425_D7A5_7383_4196_FB6A14E9735D"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window17221"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C7FEC998_D3F9_0D10_41E3_FAA6542DA165",
 "closeButtonPaddingLeft": 0,
 "width": 400,
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonBackgroundOpacity": 1,
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "closeButtonPaddingTop": 0,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C7FC1999_D3F9_0D10_41DF_7885BDDFACB2"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "shadowHorizontalLength": 3,
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window21779"
 },
 "contentOpaque": false,
 "closeButtonBorderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -121.7,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CFC358A1_DD04_962E_41D9_4650E22DD686",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.29,
  "pitch": -4.49
 },
 "class": "PanoramaCamera",
 "id": "panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -95.06,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CE2FC8D0_DD04_966E_41DF_8BBA29E2A88C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.11,
  "pitch": -0.41
 },
 "class": "PanoramaCamera",
 "id": "panorama_60C35C53_7035_61D6_41D1_96B6807993FF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.68,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC92376E_DD04_9A32_41EB_973F992A21BD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "168",
 "id": "panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7",
 "hfov": 360,
 "overlays": [
  "this.overlay_953A215D_8132_22C5_41CF_FD7BB5A2148D"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 123.58,
   "class": "AdjacentPanorama",
   "yaw": 47.25,
   "panorama": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
   "distance": 1
  }
 ],
 "vfov": 60.5,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "12",
 "id": "panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173",
 "hfov": 360,
 "overlays": [
  "this.overlay_95D004F3_831E_E3DD_41A4_751587969106",
  "this.overlay_9A2E427F_831F_E6C6_41D2_558351D2B508"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -64.87,
   "class": "AdjacentPanorama",
   "yaw": 69.01,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "distance": 1
  },
  {
   "backwardYaw": -64.87,
   "class": "AdjacentPanorama",
   "yaw": 142.73,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "distance": 1
  }
 ],
 "vfov": 62.88,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C5FEBABF_D4E7_015A_41D3_52A4CB0FBE69",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C5FF5ABF_D4E7_015A_41D8_F6DE3F043ABE"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window7652"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C6B6DE12_D7E6_CF81_41E1_F39F692E4AB3",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C6B71E13_D7E6_CF87_41C3_4029750EB6CC"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window22584"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.54,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CE1F8902_DD04_97F2_41B3_E265C94FF225",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "2ndfloorcoridoor",
 "id": "panorama_64882088_72C3_C2ED_41D0_0CC0426D5922",
 "hfov": 360,
 "overlays": [
  "this.overlay_67D9CD83_72C3_C2E3_41D2_98E01CCB813D",
  "this.overlay_C5BF9E52_D4E9_01F2_41AB_649627844F31",
  "this.overlay_C4C0D046_D4E7_0136_41E1_D2ABF6C29CEC",
  "this.overlay_DB191BDB_D4FB_0735_41D0_5A3A75CE1134"
 ],
 "pitch": -1.49,
 "adjacentPanoramas": [
  {
   "backwardYaw": -115.33,
   "class": "AdjacentPanorama",
   "yaw": 154.2,
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "distance": 1
  }
 ],
 "vfov": 94.21,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 164.13,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CFFC95B3_DD04_9E11_41E0_54A9FB287CFF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.34,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC457700_DD04_9BEE_41C5_EDC012F9D382",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 85.76,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CEAA395F_DD04_9612_41E9_D511808AFC5F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "path": "shortest"
   },
   {
    "easing": "linear",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C772BC84_D559_0BF0_4181_9334842D88B4",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C774FC84_D559_0BF0_41E7_B736DE2A8A7B"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window35759"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 52.83,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC8523F6_DD04_9A12_41C7_1C5FF92C8267",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_t.jpg"
  }
 ],
 "label": "Entrance2",
 "id": "panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784",
 "hfov": 360,
 "overlays": [
  "this.overlay_2D623BF2_27CE_EC97_41B8_69B15940F49C",
  "this.overlay_2D622BF2_27CE_EC97_41B7_707F7B7133BB"
 ],
 "pitch": -0.13,
 "adjacentPanoramas": [
  {
   "backwardYaw": -127.17,
   "class": "AdjacentPanorama",
   "yaw": -175.71,
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "distance": 1
  },
  {
   "backwardYaw": -170.37,
   "class": "AdjacentPanorama",
   "yaw": 9.66,
   "panorama": "this.panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A",
   "distance": 1
  }
 ],
 "vfov": 81.06,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.86,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF1854B6_DD04_9E12_41D6_4EB0B75E2FE3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "MAB CR 166",
 "id": "panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328",
 "hfov": 360,
 "overlays": [
  "this.overlay_925B6DE7_8136_3DC6_41B4_EA198C47EA46"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -85.39,
   "class": "AdjacentPanorama",
   "yaw": 90.85,
   "panorama": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0",
   "distance": 1
  }
 ],
 "vfov": 71.38,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_t.jpg"
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C05FEE32_D2D9_0779_41C0_FF5D505C33A7",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C05E2E35_D2D9_0778_41E7_01793CF53022"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window10451"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 51.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF6B84C6_DD04_9E72_41E2_B1C9CC9CA2E7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_camera",
   "media": "this.panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_camera",
   "media": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_camera",
   "media": "this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_camera",
   "media": "this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_camera",
   "media": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_camera",
   "media": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_camera",
   "media": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_camera",
   "media": "this.panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_camera",
   "media": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_camera",
   "media": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_camera",
   "media": "this.panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_camera",
   "media": "this.panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF_camera",
   "media": "this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_camera",
   "media": "this.panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_camera",
   "media": "this.panorama_66F48F21_7053_FF72_41CC_338C0456A8D8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_camera",
   "media": "this.panorama_882F48DF_8338_ED5E_41DF_4F65530589AE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_camera",
   "media": "this.panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_camera",
   "media": "this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_camera",
   "media": "this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_camera",
   "media": "this.panorama_2C1A3955_2095_CA86_41BC_F803A92D6453",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_camera",
   "media": "this.panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_camera",
   "media": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_camera",
   "media": "this.panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_camera",
   "media": "this.panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0_camera",
   "media": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_camera",
   "media": "this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_camera",
   "media": "this.panorama_62830609_72C7_41EF_41CB_5673A5B66BA1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_camera",
   "media": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_6579408D_7247_42E7_41BC_2A988AD9953C_camera",
   "media": "this.panorama_6579408D_7247_42E7_41BC_2A988AD9953C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_camera",
   "media": "this.panorama_64882088_72C3_C2ED_41D0_0CC0426D5922",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_camera",
   "media": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_camera",
   "media": "this.panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_camera",
   "media": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_camera",
   "media": "this.panorama_6833DF27_78C9_AA8B_41D7_218E52138C53",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_camera",
   "media": "this.panorama_68963652_78C9_FA84_41D3_30E9234A7AC4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_924072FC_8132_27CA_41C3_10021807C8E4_camera",
   "media": "this.panorama_924072FC_8132_27CA_41C3_10021807C8E4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_camera",
   "media": "this.panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_camera",
   "media": "this.panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_camera",
   "media": "this.panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_camera",
   "media": "this.panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9CF4C929_876E_624D_41DC_0769C9491F92_camera",
   "media": "this.panorama_9CF4C929_876E_624D_41DC_0769C9491F92",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_D1BA79F8_DD04_8DF1_41E1_A07EDD5C6ED7_camera",
   "media": "this.panorama_D1BA79F8_DD04_8DF1_41E1_A07EDD5C6ED7",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C774D54A_D7AD_DD81_41C2_DED46207FCED",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C772654B_D7AD_DD87_41EA_5D7BD68D4A0E"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window15732"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -129.14,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CE39D611_DD04_9DEE_41E8_24DB4F43CDAD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_t.jpg"
  }
 ],
 "label": "conference",
 "id": "panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A",
 "hfov": 360,
 "overlays": [
  "this.overlay_7749B0BD_65D6_D56B_41C7_7ABEA5F55642",
  "this.overlay_7731F521_65D2_DF1A_41C2_F3E7CF28AB5D"
 ],
 "pitch": -6.75,
 "adjacentPanoramas": [
  {
   "backwardYaw": 113.82,
   "class": "AdjacentPanorama",
   "yaw": 45.26,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "distance": 1
  },
  {
   "backwardYaw": 113.82,
   "class": "AdjacentPanorama",
   "yaw": -17.81,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "distance": 1
  }
 ],
 "vfov": 76.89,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -35,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCC407AD_DD04_9A36_41C0_80FCD9D7D08D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_6579408D_7247_42E7_41BC_2A988AD9953C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -133.92,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC9C0416_DD04_9E12_41DA_C9B28623DC95",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "2ndrightcoridoor",
 "id": "panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
 "hfov": 360,
 "overlays": [
  "this.overlay_66625856_72CD_C265_41D7_3F8701B00E2D",
  "this.overlay_65369CD6_765C_C265_41D1_54E96BF7AF00",
  "this.overlay_920B99C8_813E_E5CB_41BF_C3BDC0EA19D7",
  "this.overlay_923862F3_813E_27DE_41D7_7CEF8F4B56A6",
  "this.overlay_D97A2912_D7A6_D581_41E6_72C096FD8DE1",
  "this.overlay_C5C1E151_D7A5_D583_41E9_5A91448D78C4",
  "this.overlay_C76ABFBA_D7AD_4C81_41E8_D42752D4DB6F",
  "this.overlay_C6EF51E3_D7AE_F487_41D9_5394B1F0B390"
 ],
 "pitch": -2.7,
 "adjacentPanoramas": [
  {
   "backwardYaw": -90.51,
   "class": "AdjacentPanorama",
   "yaw": 148.88,
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "distance": 1
  },
  {
   "backwardYaw": -64.72,
   "class": "AdjacentPanorama",
   "yaw": 133.26,
   "panorama": "this.panorama_924072FC_8132_27CA_41C3_10021807C8E4",
   "distance": 1
  },
  {
   "backwardYaw": 47.25,
   "class": "AdjacentPanorama",
   "yaw": 123.58,
   "panorama": "this.panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7",
   "distance": 1
  },
  {
   "backwardYaw": 1.56,
   "class": "AdjacentPanorama",
   "yaw": -113.24,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "distance": 1
  }
 ],
 "vfov": 89.96,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -96.63,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CE3F78D0_DD04_966E_41C1_32D7381F19DC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_t.jpg"
  }
 ],
 "label": "G-right",
 "id": "panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
 "hfov": 360,
 "overlays": [
  "this.overlay_2D8B8F0D_27CE_A58C_41C1_EFF6C48936DD",
  "this.overlay_7376A1CF_7DAA_6C05_41CC_41AE122D490D",
  "this.overlay_2F9AE2D0_2097_5F9E_417F_7C0822DCC9FC",
  "this.overlay_2F7F3A1E_20B6_CE85_41BB_8ECBCD786C87",
  "this.overlay_305E4CEA_2096_CB82_41B7_7E68997D1CF0",
  "this.overlay_C13F9FAC_D3C9_0530_41B9_B29D3EDE3467",
  "this.overlay_C77F4C8C_D3F9_0BF0_41DE_CA12CAEBC6A4",
  "this.overlay_C6B84D02_D7EF_CD81_41E2_233C160391CC",
  "this.overlay_C6BD615D_D7EA_D583_41E3_A8AD9E88A0AC"
 ],
 "pitch": -8.38,
 "adjacentPanoramas": [
  {
   "backwardYaw": 145,
   "class": "AdjacentPanorama",
   "yaw": 94.32,
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_66F48F21_7053_FF72_41CC_338C0456A8D8"
  },
  {
   "backwardYaw": -20.47,
   "class": "AdjacentPanorama",
   "yaw": -29.81,
   "panorama": "this.panorama_2C1A3955_2095_CA86_41BC_F803A92D6453",
   "distance": 1
  },
  {
   "backwardYaw": 141.62,
   "class": "AdjacentPanorama",
   "yaw": 163.01,
   "panorama": "this.panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB",
   "distance": 1
  },
  {
   "backwardYaw": 90.97,
   "class": "AdjacentPanorama",
   "yaw": -175.76,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "distance": 1
  },
  {
   "backwardYaw": 75.91,
   "class": "AdjacentPanorama",
   "yaw": 83.37,
   "panorama": "this.panorama_882F48DF_8338_ED5E_41DF_4F65530589AE",
   "distance": 1
  }
 ],
 "vfov": 63.82,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.49,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CFA65523_DD04_9E31_41E7_7DA3F2C96828",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.32,
  "pitch": -5.71
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_t.jpg"
  }
 ],
 "label": "firstfloorcoridoooe",
 "id": "panorama_63584076_72C4_C225_41D9_7003B7355FB0",
 "hfov": 360,
 "overlays": [
  "this.overlay_612CC06F_72CD_C223_41C2_56DE8B6299F2",
  "this.overlay_62C7CA2E_72CC_C625_41D6_44B5A63D6A34",
  "this.overlay_65923DA3_7245_C223_41D1_FE1BFE70C46D",
  "this.overlay_C01C6724_D54B_0537_41E4_2E55D7F7D24C",
  "this.overlay_C0CE17FB_D557_0510_41DC_0662CE525356",
  "this.overlay_DACA5FA1_D79D_4C80_41DE_AD991F22B954",
  "this.overlay_D24E5CEC_DD0F_8A11_41E8_BE1AFD0BE09B"
 ],
 "pitch": -4.6,
 "adjacentPanoramas": [
  {
   "backwardYaw": 58.3,
   "class": "AdjacentPanorama",
   "yaw": 46.08,
   "panorama": "this.panorama_D1BA79F8_DD04_8DF1_41E1_A07EDD5C6ED7",
   "distance": 1
  },
  {
   "backwardYaw": 78.87,
   "class": "AdjacentPanorama",
   "yaw": 159.11,
   "panorama": "this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2",
   "distance": 1
  },
  {
   "backwardYaw": 90.85,
   "class": "AdjacentPanorama",
   "yaw": -85.39,
   "panorama": "this.panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328",
   "distance": 1
  },
  {
   "backwardYaw": 84.94,
   "class": "AdjacentPanorama",
   "yaw": -106.82,
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "distance": 1
  }
 ],
 "vfov": 67.85,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -11.26,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC0BC683_DD04_9AF2_419E_28535C5FCC56",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "rightcoridorr",
 "id": "panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
 "hfov": 360,
 "overlays": [
  "this.overlay_6A97DFD8_65BF_AB2A_41C3_3E50220C5DA6",
  "this.overlay_6A36C49D_65BD_DD2A_41C4_B37802ADF778",
  "this.overlay_6A77C71E_65B3_7B26_41D2_00F45DD39300",
  "this.overlay_778A81BE_65D5_7766_41C5_A6B5B445518E",
  "this.overlay_77AC7450_65D6_DD39_4194_F5631E76AD62",
  "this.overlay_9091F2C0_812E_663A_41DD_7F9ECB63A616",
  "this.overlay_C6BD2C3E_D7A5_D381_41DB_3814F056B666",
  "this.overlay_C6E03B34_D7A7_5581_41D3_530367D76E63",
  "this.overlay_C4BEB43D_D7E5_53FC_41E6_6787ED5B4E74"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -175.76,
   "class": "AdjacentPanorama",
   "yaw": 90.97,
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "distance": 1
  },
  {
   "backwardYaw": -82.14,
   "class": "AdjacentPanorama",
   "yaw": 50.86,
   "panorama": "this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6",
   "distance": 1
  },
  {
   "backwardYaw": -82.14,
   "class": "AdjacentPanorama",
   "yaw": -87.18,
   "panorama": "this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6",
   "distance": 1
  },
  {
   "backwardYaw": -128.09,
   "class": "AdjacentPanorama",
   "yaw": 137.27,
   "panorama": "this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965",
   "distance": 1
  },
  {
   "backwardYaw": -128.09,
   "class": "AdjacentPanorama",
   "yaw": -136.74,
   "panorama": "this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965",
   "distance": 1
  },
  {
   "backwardYaw": 45.26,
   "class": "AdjacentPanorama",
   "yaw": 113.82,
   "panorama": "this.panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A",
   "distance": 1
  }
 ],
 "vfov": 69.06,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.63,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC936405_DD04_9DF6_41DB_5FDCD2306322",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_t.jpg"
  }
 ],
 "label": "corridor1",
 "id": "panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
 "hfov": 360,
 "overlays": [
  "this.overlay_2E01E13C_27CE_FD93_41B0_E300E032BAE9",
  "this.overlay_2E01913D_27CE_FD8D_41B0_F4A692BC5FD2",
  "this.overlay_9495A4E7_8112_23C6_41D9_C30E13F341D4",
  "this.overlay_949BA3B9_8112_E64A_41B7_69393FF5C01E",
  "this.overlay_9C32118D_876E_2245_410D_913B539FFF40",
  "this.overlay_C17C8D12_D339_051D_41C0_C12964D9AF43"
 ],
 "pitch": -0.28,
 "adjacentPanoramas": [
  {
   "backwardYaw": -175.71,
   "class": "AdjacentPanorama",
   "yaw": -127.17,
   "panorama": "this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784",
   "distance": 1
  },
  {
   "backwardYaw": 94.32,
   "class": "AdjacentPanorama",
   "yaw": 145,
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "distance": 1
  },
  {
   "backwardYaw": -85.62,
   "class": "AdjacentPanorama",
   "yaw": -25.06,
   "panorama": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
   "distance": 1
  },
  {
   "backwardYaw": -23.38,
   "class": "AdjacentPanorama",
   "yaw": 25.19,
   "panorama": "this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E",
   "distance": 1
  },
  {
   "backwardYaw": 21.79,
   "class": "AdjacentPanorama",
   "yaw": 64.08,
   "panorama": "this.panorama_9CF4C929_876E_624D_41DC_0769C9491F92",
   "distance": 1
  }
 ],
 "vfov": 83.14,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 115.13,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CE0BF621_DD04_9A2E_41EA_0EB8063659D4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "path": "shortest"
   },
   {
    "easing": "linear",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 116.78,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CFF39891_DD04_96EE_41CB_6444F872F121",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "room2",
 "id": "panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0",
 "hfov": 360,
 "overlays": [
  "this.overlay_62660C43_6DC4_C263_41D3_3E8F8E668547"
 ],
 "pitch": -2.81,
 "adjacentPanoramas": [
  {
   "backwardYaw": -63.22,
   "class": "AdjacentPanorama",
   "yaw": 29.69,
   "panorama": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
   "distance": 1
  }
 ],
 "vfov": 84.71,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -66.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CFF24593_DD04_9E12_41CB_366099187F5F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 50.53,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCB0173F_DD04_9A12_41D7_2A4B251D75FA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C3387B5F_D2C9_0DCF_41E4_812301904DD7",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 6,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C33A6B67_D2C9_0DFF_41E0_385FC985C1FA"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window5863"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.25,
  "pitch": -5.73
 },
 "class": "PanoramaCamera",
 "id": "panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -111.6,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF4A3839_DD04_961E_41E3_2089703D5D37",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -145.8,
  "pitch": -4.87
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C03705BF_D3C9_0510_41DA_AEEA4AB24747",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C03555BF_D3C9_0510_41CB_624607536A86"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window23197"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C1498CD6_D2DF_0B20_41A6_8CC59F47EFCA",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C14BCCD6_D2DF_0B20_41E6_31FA01667B7F"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window8633"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C1A65680_D549_07EF_41C8_052A4ADFB19D",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C1A41683_D549_07F1_41A1_27224CC6B9FB"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window39101"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C5B5A6A7_D7BD_DC8F_41BA_682F9AD07257",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C5B386A9_D7BD_DC83_41AA_CB647C509F4B"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window8676"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.24,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF3F0487_DD04_9EF2_41DA_561F972995BA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC50970F_DD04_9BF2_41C3_0F7DFAD61863",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -119.42,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC7506F0_DD04_9A2E_41E0_AF2E52C247BA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -42.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CEB5997F_DD04_9612_41E6_0E5B6C31A6E3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154.94,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCDF9458_DD04_9E1E_41E2_F0F15EBA4BAA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 13,
      "colCount": 13,
      "width": 6656,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_t.jpg"
  }
 ],
 "label": "lab102",
 "id": "panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18",
 "hfov": 360,
 "overlays": [
  "this.overlay_63E529C5_72C3_4267_41D8_62C5880B7C03",
  "this.overlay_6432FAD2_72C3_467D_41D4_9CF6239DAB9A"
 ],
 "pitch": -5.15,
 "adjacentPanoramas": [
  {
   "backwardYaw": -79.25,
   "class": "AdjacentPanorama",
   "yaw": 60.58,
   "panorama": "this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2",
   "distance": 1
  },
  {
   "backwardYaw": -9.38,
   "class": "AdjacentPanorama",
   "yaw": 176.49,
   "panorama": "this.panorama_62830609_72C7_41EF_41CB_5673A5B66BA1",
   "distance": 1
  }
 ],
 "vfov": 64.88,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -42.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CE87A989_DD04_96FE_41E2_8B312B746313",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.56,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CE6EF911_DD04_97EE_41E3_D95FBD70B0B0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 115.13,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CE1BA630_DD04_9A2F_41EB_1306ED7C9360",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "path": "shortest"
   },
   {
    "easing": "linear",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -95.65,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC18E6B1_DD04_9A11_41D9_4B0ACDD06BE5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "path": "shortest"
   },
   {
    "easing": "linear",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "167",
 "id": "panorama_924072FC_8132_27CA_41C3_10021807C8E4",
 "hfov": 360,
 "overlays": [
  "this.overlay_94FA217B_8136_22CE_41DF_978D12B255E8"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 133.26,
   "class": "AdjacentPanorama",
   "yaw": -64.72,
   "panorama": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
   "distance": 1
  }
 ],
 "vfov": 53.49,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_t.jpg"
  }
 ],
 "label": "f1",
 "id": "panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
 "hfov": 360,
 "overlays": [
  "this.overlay_A67546E7_AB8C_4ED4_41CA_09A559A3AF75",
  "this.overlay_581356E7_5543_BC2D_41D3_1067E1CAA752",
  "this.overlay_6155A733_72C3_CE23_41CA_96783A0F5A35",
  "this.overlay_6768CCFD_72DC_C227_41D0_30ABBF7555DC",
  "this.overlay_6955A86A_72C5_C22D_41DC_240C10260780",
  "this.overlay_C704BEE0_D349_0737_41E0_9D9956AC2509"
 ],
 "pitch": -7.68,
 "adjacentPanoramas": [
  {
   "backwardYaw": -106.82,
   "class": "AdjacentPanorama",
   "yaw": 84.94,
   "panorama": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0",
   "distance": 1
  },
  {
   "backwardYaw": 154.2,
   "class": "AdjacentPanorama",
   "yaw": -115.33,
   "panorama": "this.panorama_64882088_72C3_C2ED_41D0_0CC0426D5922",
   "distance": 1
  },
  {
   "backwardYaw": 148.88,
   "class": "AdjacentPanorama",
   "yaw": -90.51,
   "panorama": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
   "distance": 1
  },
  {
   "backwardYaw": -129.47,
   "class": "AdjacentPanorama",
   "yaw": -39.6,
   "panorama": "this.panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47",
   "distance": 1
  },
  {
   "backwardYaw": 64.27,
   "class": "AdjacentPanorama",
   "yaw": 104.17,
   "panorama": "this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E",
   "distance": 1
  }
 ],
 "vfov": 65.29,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 54.83,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CE48C930_DD04_962F_41E0_1123BAA24F66",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 180,
  "pitch": -8.19
 },
 "class": "PanoramaCamera",
 "id": "panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C6A0F9F5_D7EF_3483_41E5_7CE5AF7E0326",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C6A339F6_D7EF_348E_41D3_E377BA3B8AB9"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window19998"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C1E03452_D579_1B10_41E4_6C14EE03108C",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C1E2F453_D579_1B10_41AB_1E2555876C11"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window43443"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.6,
  "pitch": -19.22
 },
 "class": "PanoramaCamera",
 "id": "panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C2BAB69A_D54B_0713_41C2_21BB2965E559",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C2BB66A4_D54B_0737_41A2_191A7B4B9281"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window42079"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.42,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCF77426_DD04_9E33_41E6_43835EFC9241",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 15,
      "colCount": 15,
      "width": 7680,
      "class": "TiledImageResourceLevel",
      "height": 7680
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_t.jpg"
  }
 ],
 "label": "labcoridoor1",
 "id": "panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
 "hfov": 360,
 "overlays": [
  "this.overlay_618446F2_6FF2_EED6_41BB_34A5952BEDF6",
  "this.overlay_6176939F_6FFF_A74E_41D0_8D9F295097C2",
  "this.overlay_60C9DA1B_6FF3_A156_41B4_A22292FB47BC",
  "this.overlay_C2FDDE4E_D577_0770_41E5_C2E5A53FB26C"
 ],
 "pitch": -8.24,
 "adjacentPanoramas": [
  {
   "backwardYaw": 168.74,
   "class": "AdjacentPanorama",
   "yaw": 170.44,
   "panorama": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C",
   "distance": 1
  },
  {
   "backwardYaw": 60.76,
   "class": "AdjacentPanorama",
   "yaw": -125.17,
   "panorama": "this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF",
   "distance": 1
  },
  {
   "backwardYaw": 179.23,
   "class": "AdjacentPanorama",
   "yaw": 21.03,
   "panorama": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
   "distance": 1
  }
 ],
 "vfov": 65.55,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 7.52,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCF9E79D_DD04_9A16_41B2_888EF70EE8F8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 51.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF75B4E5_DD04_9E36_41E8_2C7BBE305F78",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.15,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CFDD78C0_DD04_966E_41C6_AEF1273F47F7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -46.74,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC6A66D1_DD04_9A6E_41E8_2A98DBCC4729",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "belconi",
 "id": "panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47",
 "hfov": 360,
 "overlays": [
  "this.overlay_A5F03DCD_AB8C_42D4_41E3_EF335D747B4B"
 ],
 "pitch": -2.95,
 "adjacentPanoramas": [
  {
   "backwardYaw": -39.6,
   "class": "AdjacentPanorama",
   "yaw": -129.47,
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "distance": 1
  }
 ],
 "vfov": 84.1,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -104.09,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF3537EB_DD04_9A32_41E4_27294A0D80D2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "path": "shortest"
   },
   {
    "easing": "linear",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -140.74,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF69881A_DD04_9612_4173_6641EBFEF6E9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_t.jpg"
  }
 ],
 "vfov": 84.71,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "room2",
 "id": "panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3",
 "pitch": -2.81,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -158.21,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCF2178D_DD04_9AF1_4174_97E00AD1415E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.77,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC16C6A2_DD04_9A32_41D8_D6ED01DC7595",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.03,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF2B67DC_DD04_9A16_41E0_D94F5DDFC14B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -119.42,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC7276E0_DD04_9A2E_41E7_287295ECD0AA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_t.jpg"
  }
 ],
 "vfov": 63.91,
 "hfovMax": 130,
 "label": "leftroom",
 "id": "panorama_66F48F21_7053_FF72_41CC_338C0456A8D8",
 "overlays": [
  "this.overlay_70307665_7DA6_1404_41BD_E3D3BBA20DC6"
 ],
 "pitch": -5.76,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -75.83,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF1397FB_DD04_9A12_41E3_E2D8B724DC36",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_t.jpg"
  }
 ],
 "vfov": 63.39,
 "hfovMax": 130,
 "label": "room9",
 "id": "panorama_6579408D_7247_42E7_41BC_2A988AD9953C",
 "pitch": -5.4,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -25.8,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC5F471F_DD04_9A12_41EA_5353FCA173DE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.38,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC99076E_DD04_9A32_41C5_46C212DDC657",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_C68952B8_D7AB_F481_41D1_63E38D586766",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "title": "",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "shadow": true,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_C68892BA_D7AB_F481_41E3_82D0EAA06562"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window12655"
 },
 "contentOpaque": false,
 "layout": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -110.99,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CFA40849_DD04_967E_41E1_E94BBC97B7E0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -101.13,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CFCD98B0_DD04_962F_41E0_E242946EAABA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -154.81,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CF01B7EB_DD04_9A32_41DE_4081E816413B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarBottom": 5,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 1900,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_CF960878_DD04_961E_41A5_19F6E6CFB1DF); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D56A5B9A_D9C1_7182_41D2_8CC28FB30AB6",
   "yaw": -20.47,
   "pitch": -4.62,
   "distance": 100,
   "hfov": 12.48
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.47,
   "hfov": 12.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.62
  }
 ],
 "id": "overlay_2E47963C_209B_C686_41BF_A176F5C8EEDB",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_CC18E6B1_DD04_9A11_41D9_4B0ACDD06BE5); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D51EFBA9_D9C1_718E_41D0_D3FF4BAEE84A",
   "yaw": -106.4,
   "pitch": 1.76,
   "distance": 100,
   "hfov": 14.49
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.4,
   "hfov": 14.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.76
  }
 ],
 "id": "overlay_95125FF4_831E_1DDA_41BF_BE87B4B04A2C",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_CC6236C1_DD04_9A6E_41DC_AE731DCB27C7); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D51E6BA9_D9C1_718E_41D0_6E4217DCC55F",
   "yaw": -43.54,
   "pitch": 2.99,
   "distance": 100,
   "hfov": 13.25
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.54,
   "hfov": 13.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.99
  }
 ],
 "id": "overlay_9569899C_8312_224A_41DA_9C6E5EAF6507",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97, this.camera_CCEAD425_DD04_9E31_41A1_1D2940152856); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D51F5BA9_D9C1_718E_41EA_9CD7CD86A2DE",
   "yaw": 21.79,
   "pitch": -27.65,
   "distance": 100,
   "hfov": 9.94
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.79,
   "hfov": 9.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.65
  }
 ],
 "id": "overlay_9D9EF786_8776_6E47_4194_18CD109E014E",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C3387B5F_D2C9_0DCF_41E4_812301904DD7, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -121.16,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_1_HS_6_0.png",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 95
     }
    ]
   },
   "pitch": 19.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.8
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.16,
   "hfov": 6.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": 19.89
  }
 ],
 "id": "overlay_C2575B5B_D2C9_0DD5_41D0_7935BCE45C8E",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C1498CD6_D2DF_0B20_41A6_8CC59F47EFCA, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -141.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_1_HS_8_0.png",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 113
     }
    ]
   },
   "pitch": 18.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.89
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -141.54,
   "hfov": 6.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": 18.37
  }
 ],
 "id": "overlay_C0865F39_D2DF_0563_41D2_B1B219C20123",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C05FEE32_D2D9_0779_41C0_FF5D505C33A7, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -177.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_1_HS_9_0.png",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 85
     }
    ]
   },
   "pitch": 7.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.21
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.54,
   "hfov": 7.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.02
  }
 ],
 "id": "overlay_C3377466_D2DB_1BE7_41CB_C8A87D8F0C53",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_D9FFA5FE_D79D_7C81_41B6_509537741CC2",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>MAB ROOM 166</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText3044"
 },
 "shadow": false
},
{
 "id": "htmlText_C2955181_D54F_3DF0_41D4_651243BD9B90",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>LEFT -&gt; MAB LAB 101</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>RIGHT -&gt; MAB LAB 102</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText40817"
 },
 "shadow": false
},
{
 "id": "htmlText_C7E81BF9_D7A5_5483_41E6_73443E98F8B6",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:26px;font-family:'Arial Baltic';\"><B>MAB ROOM 168</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText5860"
 },
 "shadow": false
},
{
 "id": "htmlText_C50DBFE3_D7A6_CC87_41D0_35160F4E451B",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>MAB ROOM 165</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText18525"
 },
 "shadow": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649, this.camera_CF55D849_DD04_967E_41E8_AB9FB9105876); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D515ABA9_D9C1_718E_41D6_E2C0AFFD2504",
   "yaw": 1.56,
   "pitch": -21.88,
   "distance": 100,
   "hfov": 16.68
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.56,
   "hfov": 16.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.88
  }
 ],
 "id": "overlay_6854E312_78CE_5A84_41DC_30A4C479169B",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_68963652_78C9_FA84_41D3_30E9234A7AC4, this.camera_CF4A3839_DD04_961E_41E3_2089703D5D37); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5150BA9_D9C1_718E_41BF_0DC293B081BA",
   "yaw": -94.24,
   "pitch": -4.36,
   "distance": 100,
   "hfov": 7.17
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.24,
   "hfov": 7.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.36
  }
 ],
 "id": "overlay_6803A47B_78C6_5F7B_41C1_6A052BD688F2",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6833DF27_78C9_AA8B_41D7_218E52138C53, this.camera_CF7AE82A_DD04_9632_41DB_DCA2A8F34003); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5156BA9_D9C1_718E_41A4_57148ED17545",
   "yaw": -127.2,
   "pitch": -5.56,
   "distance": 100,
   "hfov": 7.16
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.2,
   "hfov": 7.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.56
  }
 ],
 "id": "overlay_69AFD036_78CA_568C_41BF_B01840300243",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173, this.camera_CFA40849_DD04_967E_41E1_E94BBC97B7E0); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D514DBA9_D9C1_718E_41DB_37C69E33F568",
   "yaw": -64.87,
   "pitch": -4.66,
   "distance": 100,
   "hfov": 7.17
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -64.87,
   "hfov": 7.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.66
  }
 ],
 "id": "overlay_94935385_8316_2645_41CB_96A355BE371C",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE, this.camera_CFB7F859_DD04_961E_41E7_0F3CA006DA4E); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5144BA9_D9C1_718E_41E7_E4DE5BC88D6C",
   "yaw": 84.35,
   "pitch": -6.16,
   "distance": 100,
   "hfov": 7.15
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.35,
   "hfov": 7.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.16
  }
 ],
 "id": "overlay_946C7F8E_8316_7E46_41D7_70F5CE35512A",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C5B5A6A7_D7BD_DC8F_41BA_682F9AD07257, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 69.44,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_5_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -1.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.01
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.44,
   "hfov": 4.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_5_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.17
  }
 ],
 "id": "overlay_C4808FAC_D7BE_CC81_41C1_8B5531824A2A",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C72BC2FB_D7A5_D487_41D5_FA857263B426, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -54.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_6_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ]
   },
   "pitch": -0.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.01
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.09,
   "hfov": 4.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_6_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.42
  }
 ],
 "id": "overlay_C742DA2A_D7A5_7781_41E7_191C4C50FFED",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C515D934_D7A5_5581_41EA_4302B908E2F8, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -99.32,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_7_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 56
     }
    ]
   },
   "pitch": 2.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.57
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.32,
   "hfov": 3.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_7_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.95
  }
 ],
 "id": "overlay_C394CF1A_D7A6_CD81_41D6_69A33A584D35",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C68952B8_D7AB_F481_41D1_63E38D586766, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -122.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_8_0.png",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ]
   },
   "pitch": 2.54,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.34
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -122.25,
   "hfov": 3.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.54
  }
 ],
 "id": "overlay_C636CF24_D7AA_CD81_41E8_097CBC15223D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_C77C9AF4_D7A7_F481_41E1_051CBF93D84F",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>MAB ROOM 167</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText4558"
 },
 "shadow": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_CF1397FB_DD04_9A12_41E3_E2D8B724DC36); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D57E5B9A_D9C1_7182_41E9_79D30F08CC88",
   "yaw": 64.27,
   "pitch": -4.2,
   "distance": 50,
   "hfov": 7.62
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 64.27,
   "hfov": 7.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.2
  }
 ],
 "id": "overlay_2E1CDA60_27CE_AFB4_41A5_F7426B7FECE0",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97, this.camera_CF01B7EB_DD04_9A32_41DE_4081E816413B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D57D9B9A_D9C1_7182_41E0_009057456170",
   "yaw": -23.38,
   "pitch": -35.56,
   "distance": 100,
   "hfov": 4.56
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.38,
   "hfov": 4.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.56
  }
 ],
 "id": "overlay_58B8AED6_5546_AC6F_41B6_7E26E95B3B8B",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6, this.camera_CE1F8902_DD04_97F2_41B3_E265C94FF225); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5676B9A_D9C1_7182_41E3_C5762184EDDB",
   "yaw": 39.26,
   "pitch": -21.6,
   "distance": 100,
   "hfov": 19.31
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.26,
   "hfov": 19.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.6
  }
 ],
 "id": "overlay_60A0DC6E_6FF6_E1CE_41BC_3DAF4075F002",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D, this.camera_CE6EF911_DD04_97EE_41E3_D95FBD70B0B0); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D566BB9A_D9C1_7182_41C2_AF3EFD6753D0",
   "yaw": 168.74,
   "pitch": -26.02,
   "distance": 100,
   "hfov": 12.15
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.74,
   "hfov": 12.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.02
  }
 ],
 "id": "overlay_6055C2F0_6FF6_A6D2_41C6_D0504FFB7E8E",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_C447F9B8_D4FB_037E_41D3_AC86C380A6DD",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>ADMIN OFFICE OF IT</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText8925"
 },
 "shadow": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A, this.camera_CFFC95B3_DD04_9E11_41E0_54A9FB287CFF); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D56F7BA9_D9C1_718E_41E5_E8649E25F8F3",
   "yaw": 58.98,
   "pitch": -3.83,
   "distance": 100,
   "hfov": 7.76
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 58.98,
   "hfov": 7.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.83
  }
 ],
 "id": "overlay_7D6F2A04_6DFF_41E5_41C2_8816C37AFAA2",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18, this.camera_CF56D514_DD04_9E16_41E2_3850C2A985D1); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5127BA9_D9C1_718E_41E1_35912862BFB4",
   "yaw": -9.38,
   "pitch": -26.66,
   "distance": 100,
   "hfov": 16.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.38,
   "hfov": 16.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.66
  }
 ],
 "id": "overlay_64E823A1_723F_C6DF_41AE_AC9001E868AA",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_C40DF452_D4EB_01C5_41E6_D479D1258387",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>FACULTY OFFICE OF IT </B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText6339"
 },
 "shadow": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_63584076_72C4_C225_41D9_7003B7355FB0, this.camera_CC7CC700_DD04_9BEE_41D1_E0CEF4F88F30); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D56C3BA9_D9C1_718E_41DB_0BF225DD87D7",
   "yaw": 78.87,
   "pitch": -26.72,
   "distance": 100,
   "hfov": 16.88
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.87,
   "hfov": 16.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.72
  }
 ],
 "id": "overlay_62A9550E_72C4_C3E5_41CA_485470CFFD35",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18, this.camera_CC7276E0_DD04_9A2E_41E7_287295ECD0AA); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5139BA9_D9C1_718E_41DE_5AA678FE286B",
   "yaw": -79.25,
   "pitch": -1.52,
   "distance": 100,
   "hfov": 12.28
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -79.25,
   "hfov": 12.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.52
  }
 ],
 "id": "overlay_637C86D9_72C4_CE6F_41D0_A8AEB8F2290F",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18, this.camera_CC7506F0_DD04_9A2E_41E0_AF2E52C247BA); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D513EBA9_D9C1_718E_41D5_1BEBC0171951",
   "yaw": -114.88,
   "pitch": -1.93,
   "distance": 100,
   "hfov": 12.28
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -114.88,
   "hfov": 12.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.93
  }
 ],
 "id": "overlay_9945CEA8_8B23_D5FF_41D8_3D65598F7B91",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C1A65680_D549_07EF_41C8_052A4ADFB19D, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.27,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_6_0.png",
      "width": 136,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ]
   },
   "pitch": 4.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.3
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.27,
   "hfov": 2.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.6
  }
 ],
 "id": "overlay_C1F3533C_D549_1D17_41C4_509D8C35C402",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C294E177_D54F_3D10_41B9_38B95C94C8CB, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -91.81,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_7_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ]
   },
   "pitch": 5.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.96
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.81,
   "hfov": 2.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_7_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.19
  }
 ],
 "id": "overlay_C16B0809_D54F_0AF0_41DB_5266C7C60B71",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C2BAB69A_D54B_0713_41C2_21BB2965E559, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -176.28,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_8_0.png",
      "width": 136,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ]
   },
   "pitch": 0.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.31
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.28,
   "hfov": 2.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.7
  }
 ],
 "id": "overlay_C2F56F2C_D54B_0537_41AF_06550C5D02A3",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_CFCC25C3_DD04_9E72_41D6_DAB2712E2DC6); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D51A2BA9_D9C1_718E_41D3_3442EF9DB472",
   "yaw": -109.56,
   "pitch": -5.35,
   "distance": 100,
   "hfov": 12.23
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.56,
   "hfov": 12.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.35
  }
 ],
 "id": "overlay_6AA92E5C_78C9_EABC_41C1_C794B9FFD48E",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_CFDE25E2_DD04_9E32_41E2_E0E4C6323F9D); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5199BA9_D9C1_718E_41D9_5CB24DC97F68",
   "yaw": -43.21,
   "pitch": -2.28,
   "distance": 100,
   "hfov": 9.82
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.21,
   "hfov": 9.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.28
  }
 ],
 "id": "overlay_6AF5D2A2_78CE_BB85_41D1_D188597B1E20",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_63584076_72C4_C225_41D9_7003B7355FB0, this.camera_CC9C0416_DD04_9E12_41DA_C9B28623DC95); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 58.3,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1BA79F8_DD04_8DF1_41E1_A07EDD5C6ED7_0_HS_0_0.png",
      "width": 54,
      "class": "ImageResourceLevel",
      "height": 51
     }
    ]
   },
   "pitch": 9.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.24
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 58.3,
   "hfov": 15.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1BA79F8_DD04_8DF1_41E1_A07EDD5C6ED7_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.29
  }
 ],
 "id": "overlay_CD953D4C_DD04_8A12_41E0_3F82BBE4E37B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D, this.camera_CE48C930_DD04_962F_41E0_1123BAA24F66); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5651B9A_D9C1_7182_41E7_C7A042BAC503",
   "yaw": 60.76,
   "pitch": -20.21,
   "distance": 100,
   "hfov": 16.8
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 60.76,
   "hfov": 16.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.21
  }
 ],
 "id": "overlay_61118D3D_7037_E352_41DB_D9CAFC4E92D4",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA, this.camera_CE791921_DD04_962E_41AF_B8250C34C6BC); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5655B9A_D9C1_7182_41DD_C1FE51074C65",
   "yaw": -172.48,
   "pitch": -16.32,
   "distance": 100,
   "hfov": 20.72
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.48,
   "hfov": 20.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.32
  }
 ],
 "id": "overlay_611F8621_7035_6172_41D7_6BFE4C4F7884",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_C2E3D48B_D339_3B0D_41B3_5989D23C0914",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>OFFICE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>SIR SAAD RAZAQ</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>SIR FAHAD MAQBOOL</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText16130"
 },
 "shadow": false
},
{
 "id": "htmlText_C72DE2FC_D7A5_D481_41E5_ACA03F5040A0",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>MAB ROOM 169</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText10104"
 },
 "shadow": false
},
{
 "id": "htmlText_C040D281_D349_1FF9_41D9_69972AF053B9",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>GIRLS'S COMMON ROOM</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText17607"
 },
 "shadow": false
},
{
 "id": "htmlText_C5BC69B8_D52B_005A_41BB_A2A9B13E36C8",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:26px;font-family:'Arial Baltic';\"><B>LAB-04</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText10900"
 },
 "shadow": false
},
{
 "id": "htmlText_C1CDE8FF_D337_0CFA_41C4_C2BA176A350E",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;\"><B>WELCOME TO THE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;\"><B> DEPARTMENT OF COMPUTER SCIENCE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;\"><B>AND</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;\"><B> INFORMATION TECHNOLOGY</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText14163"
 },
 "shadow": false
},
{
 "id": "htmlText_C0DCBF13_D3FB_0514_41CA_4943C9372155",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>MAB 161</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText20385"
 },
 "shadow": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_CE2E05F2_DD04_9E12_41C4_A8EA15358ADE); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D56BFB9A_D9C1_7182_41C7_AB9DFCA23A40",
   "yaw": -82.14,
   "pitch": 9.92,
   "distance": 100,
   "hfov": 6.41
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.14,
   "hfov": 6.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.92
  }
 ],
 "id": "overlay_755DB10D_65B5_772B_41C4_00F2A279D95A",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_CE39D611_DD04_9DEE_41E8_24DB4F43CDAD); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D56B4B9A_D9C1_7182_41CB_CDF654375C54",
   "yaw": -144.95,
   "pitch": 9.92,
   "distance": 100,
   "hfov": 5.71
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.95,
   "hfov": 5.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.92
  }
 ],
 "id": "overlay_74FCDDDB_65B2_AF2F_41D4_69CA87397091",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5661B9A_D9C1_7182_41D4_282A881BC667",
   "yaw": -173.51,
   "pitch": -9.88,
   "distance": 100,
   "hfov": 15.2
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.51,
   "hfov": 15.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.88
  }
 ],
 "id": "overlay_6057515A_6FF2_E3D6_41CB_9577DD48D455",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C, this.camera_CF69881A_DD04_9612_4173_6641EBFEF6E9); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5665B9A_D9C1_7182_41EA_039E563A0ADD",
   "yaw": 5.46,
   "pitch": -15.61,
   "distance": 100,
   "hfov": 16.83
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.46,
   "hfov": 16.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.61
  }
 ],
 "id": "overlay_7FE3BEF8_6FF3_9ED2_41CA_F4E9C9BAB020",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_C516F34E_D7EB_5581_41E7_3A8A38732A8D",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>MAB ROOM 163</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText21284"
 },
 "shadow": false
},
{
 "id": "htmlText_C77B2C60_D7AF_5381_41B6_D8E8850A8981",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>FACULTY OFFICE</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText13986"
 },
 "shadow": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784, this.camera_CC457700_DD04_9BEE_41C5_EDC012F9D382); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D574CB90_D9C1_719E_41DC_2B9740A4EBBC",
   "yaw": -170.37,
   "pitch": -5.89,
   "distance": 100,
   "hfov": 5.5
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.37,
   "hfov": 5.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_1_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.89
  }
 ],
 "id": "overlay_2E0F5BBC_27CE_AC93_4188_ECB314955772",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C1CB28FE_D337_0CFA_41E9_CE05309942B1, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -169.02,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_1_HS_3_0.png",
      "width": 75,
      "class": "ImageResourceLevel",
      "height": 60
     }
    ]
   },
   "pitch": 12.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.51
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.02,
   "hfov": 8.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_1_HS_3_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 12.89
  }
 ],
 "id": "overlay_C0249540_D337_0507_41E3_B707207B9459",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_CE5AB950_DD04_966E_41DA_EE85B79CC3AA); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5190BA9_D9C1_718E_41BF_C929091E6D62",
   "yaw": 68.4,
   "pitch": -3.24,
   "distance": 100,
   "hfov": 9.4
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.4,
   "hfov": 9.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.24
  }
 ],
 "id": "overlay_6BD3DF15_78CF_EA8C_41D5_6EBD41E4832C",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_CEAA395F_DD04_9612_41E9_D511808AFC5F); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5196BA9_D9C1_718E_41E3_97174F86604F",
   "yaw": 140.48,
   "pitch": -2.42,
   "distance": 100,
   "hfov": 9.41
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.48,
   "hfov": 9.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.42
  }
 ],
 "id": "overlay_6A8CE6AE_78CE_BB9C_41DB_EB9AD1803C48",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF, this.camera_CCF9E79D_DD04_9A16_41B2_888EF70EE8F8); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D564AB9A_D9C1_7182_41DC_B9312D4CD41B",
   "yaw": 93.93,
   "pitch": -13.23,
   "distance": 100,
   "hfov": 19.82
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.93,
   "hfov": 19.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.23
  }
 ],
 "id": "overlay_61BB297B_7032_E3D6_41D3_E7B64B6A14DE",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_C0902A24_D3C9_0F30_418A_4262E4A2C226",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>MAB 162</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText19080"
 },
 "shadow": false
},
{
 "id": "htmlText_C185FFE5_D54B_0531_41BE_0E26E7726F34",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:26px;font-family:'Arial Baltic';\"><B>GIRL'S WASHROOM</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText33417"
 },
 "shadow": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D565DB9A_D9C1_7182_41CC_719FD36CEEB8",
   "yaw": -45.26,
   "pitch": -7.51,
   "distance": 100,
   "hfov": 7.08
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -45.26,
   "hfov": 7.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.51
  }
 ],
 "id": "overlay_7FA80A1D_6FED_6152_41D0_915457C0472D",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_CE3F78D0_DD04_966E_41C1_32D7381F19DC); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5645B9A_D9C1_7182_41C4_5E0F05325F94",
   "yaw": 75.91,
   "pitch": -30.87,
   "distance": 100,
   "hfov": 13.26
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.91,
   "hfov": 13.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.87
  }
 ],
 "id": "overlay_8D9C4032_8348_DCE6_41C9_15041FDC3BEA",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_C51BD934_D7A5_5581_419A_3164CEC4AEC3",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>MAB ROOM 171</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText11389"
 },
 "shadow": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_CF1FC80A_DD04_95F3_41DF_FA7DB11112C4); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D56BAB9A_D9C1_7182_41E8_B4970FC64A56",
   "yaw": 141.62,
   "pitch": -3.97,
   "distance": 100,
   "hfov": 11.28
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.62,
   "hfov": 11.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.97
  }
 ],
 "id": "overlay_302D5BD4_20AD_4D85_41B8_F9DD191D9F97",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_CEB5997F_DD04_9612_41E6_0E5B6C31A6E3); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D56AAB9A_D9C1_7182_41E7_222363CDC6FB",
   "yaw": -128.09,
   "pitch": -1.65,
   "distance": 100,
   "hfov": 8.23
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128.09,
   "hfov": 8.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.65
  }
 ],
 "id": "overlay_330B46B1_2096_C79E_414D_EE196269949D",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_CE87A989_DD04_96FE_41E2_8B312B746313); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D56A0B9A_D9C1_7182_41D2_10887CDC4248",
   "yaw": -50.95,
   "pitch": 0.96,
   "distance": 100,
   "hfov": 8.31
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.95,
   "hfov": 8.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.96
  }
 ],
 "id": "overlay_34F412D5_209B_5F87_41B7_5D443005399A",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D, this.camera_CF29B468_DD04_9E3E_41DE_4717CD6C7819); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D561BB9A_D9C1_7182_4190_208197CA108F",
   "yaw": 179.23,
   "pitch": -17.51,
   "distance": 100,
   "hfov": 6.19
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.23,
   "hfov": 6.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.51
  }
 ],
 "id": "overlay_62A03976_6FD3_E3DE_41C1_FDC5CDF26976",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0, this.camera_CCC04436_DD04_9E12_41DD_66BA940FA8A2); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D561FB9A_D9C1_7182_41E2_A2DAC9F8D982",
   "yaw": -63.22,
   "pitch": -21.54,
   "distance": 100,
   "hfov": 7.66
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.22,
   "hfov": 7.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.54
  }
 ],
 "id": "overlay_620CCBA2_702F_E776_41C1_50B308F2F3C6",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613, this.camera_CCCFB449_DD04_9E7E_41E7_D48CE4E0E75B); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5614B9A_D9C1_7182_41CA_5F896C8CD1C3",
   "yaw": -15.87,
   "pitch": -0.78,
   "distance": 100,
   "hfov": 16.53
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.87,
   "hfov": 16.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.78
  }
 ],
 "id": "overlay_7DF4AF74_6DC5_FE25_41CB_C3D88A6FA1A8",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97, this.camera_CCDF9458_DD04_9E1E_41E2_F0F15EBA4BAA); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D560AB9A_D9C1_7182_41E5_F6201542FE19",
   "yaw": -85.62,
   "pitch": -15.11,
   "distance": 100,
   "hfov": 9.94
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.62,
   "hfov": 9.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_8_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.11
  }
 ],
 "id": "overlay_9B697C42_8B5F_34B3_41D5_D6888052EC6C",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C7FEC998_D3F9_0D10_41E3_FAA6542DA165, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 135.49,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_9_0.png",
      "width": 69,
      "class": "ImageResourceLevel",
      "height": 58
     }
    ]
   },
   "pitch": 3.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.2
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.49,
   "hfov": 7.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_9_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.95
  }
 ],
 "id": "overlay_C1CA9EEA_D3FB_0730_41D9_EC5D6B7C0A14",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C03705BF_D3C9_0510_41DA_AEEA4AB24747, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 109.7,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_10_0.png",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 63
     }
    ]
   },
   "pitch": 2.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.25
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.7,
   "hfov": 5.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": 2.17
  }
 ],
 "id": "overlay_C1BBA077_D3CB_FB10_41E1_46298F388B07",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C5BF99B2_D52B_006F_41E3_600C0D5FE12C, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 4.76,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_11_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 53
     }
    ]
   },
   "pitch": 10.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.22
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.76,
   "hfov": 9.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_11_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.28
  }
 ],
 "id": "overlay_C5A320DE_D529_01D1_41E1_8C34B634E0B6",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C58D753A_D52F_006D_41C5_DF5677209CFA, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -50.63,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_12_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 69
     }
    ]
   },
   "pitch": 4.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.37
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.63,
   "hfov": 8.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_12_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.56
  }
 ],
 "id": "overlay_C5F18D6E_D529_00FF_41D8_3C8ADABCC142",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_C58F153A_D52F_006D_41E3_C42E7DE45818",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>MAB ROOM 160</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText12656"
 },
 "shadow": false
},
{
 "id": "htmlText_C6844425_D7A5_7383_4196_FB6A14E9735D",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>MAB ROOM 164</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText17222"
 },
 "shadow": false
},
{
 "id": "htmlText_C7FC1999_D3F9_0D10_41DF_7885BDDFACB2",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:26px;font-family:'Arial Baltic';\"><B>EXAMINATION OFFICE</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText21780"
 },
 "shadow": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649, this.camera_CCF77426_DD04_9E33_41E6_43835EFC9241); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5185BA9_D9C1_718E_41A5_207A9BBE96F2",
   "yaw": 47.25,
   "pitch": -6.76,
   "distance": 100,
   "hfov": 12.91
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.25,
   "hfov": 12.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.76
  }
 ],
 "id": "overlay_953A215D_8132_22C5_41CF_FD7BB5A2148D",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_CE0BF621_DD04_9A2E_41EA_0EB8063659D4); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D51F1BA9_D9C1_718E_41D3_7D85CAEE070E",
   "yaw": 69.01,
   "pitch": 2.98,
   "distance": 100,
   "hfov": 8.18
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.01,
   "hfov": 8.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.98
  }
 ],
 "id": "overlay_95D004F3_831E_E3DD_41A4_751587969106",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_CE1BA630_DD04_9A2F_41EB_1306ED7C9360); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D51E8BA9_D9C1_718E_41DD_2781D01847D5",
   "yaw": 142.73,
   "pitch": 2.16,
   "distance": 100,
   "hfov": 8.19
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.73,
   "hfov": 8.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.16
  }
 ],
 "id": "overlay_9A2E427F_831F_E6C6_41D2_558351D2B508",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_C5FF5ABF_D4E7_015A_41D8_F6DE3F043ABE",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>HEAD OF DEPARTMENT</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>PROFESSOR HIKAMATULLAH</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText7653"
 },
 "shadow": false
},
{
 "id": "htmlText_C6B71E13_D7E6_CF87_41C3_4029750EB6CC",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>CONFERENCE ROOM</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText22585"
 },
 "shadow": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_CFE00887_DD04_96F1_41E0_8C6C56EA34C7); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5108BA9_D9C1_718E_41E7_B611A69F3EC2",
   "yaw": 154.2,
   "pitch": -29.74,
   "distance": 100,
   "hfov": 15.65
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.2,
   "hfov": 15.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.74
  }
 ],
 "id": "overlay_67D9CD83_72C3_C2E3_41D2_98E01CCB813D",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C40C1450_D4EB_01C5_41D7_DABAFC03EA18, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -85.79,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_1_HS_4_0.png",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 89
     }
    ]
   },
   "pitch": 7.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.1
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.79,
   "hfov": 6.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_1_HS_4_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.72
  }
 ],
 "id": "overlay_C5BF9E52_D4E9_01F2_41AB_649627844F31",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C5FEBABF_D4E7_015A_41D3_52A4CB0FBE69, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.39,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_1_HS_5_0.png",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ]
   },
   "pitch": 8.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.92
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.39,
   "hfov": 4.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 8.84
  }
 ],
 "id": "overlay_C4C0D046_D4E7_0136_41E1_D2ABF6C29CEC",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C44129B7_D4FB_0372_41E4_460294AFC08D, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 88.13,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_1_HS_6_0.png",
      "width": 110,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ]
   },
   "pitch": 16.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.95
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.13,
   "hfov": 5.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 16.94
  }
 ],
 "id": "overlay_DB191BDB_D4FB_0735_41D0_5A3A75CE1134",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_C774FC84_D559_0BF0_41E7_B736DE2A8A7B",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>IOT LAB </B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>FYP ROOM </B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText35760"
 },
 "shadow": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97, this.camera_CC8523F6_DD04_9A12_41C7_1C5FF92C8267); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D57ECB9A_D9C1_7182_41E9_3ADCD944AEF9",
   "yaw": -175.71,
   "pitch": -17.72,
   "distance": 100,
   "hfov": 8.3
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.71,
   "hfov": 8.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_1_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.72
  }
 ],
 "id": "overlay_2D623BF2_27CE_EC97_41B8_69B15940F49C",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A, this.camera_CC936405_DD04_9DF6_41DB_5FDCD2306322); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D57E2B9A_D9C1_7182_41D6_364438485BF8",
   "yaw": 9.66,
   "pitch": -10.1,
   "distance": 100,
   "hfov": 8.58
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.66,
   "hfov": 8.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_1_HS_1_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.1
  }
 ],
 "id": "overlay_2D622BF2_27CE_EC97_41B7_707F7B7133BB",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_63584076_72C4_C225_41D9_7003B7355FB0, this.camera_CF865868_DD04_963E_41E5_A742D3616091); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D51FCBA9_D9C1_718E_41D9_857E84407F39",
   "yaw": 90.85,
   "pitch": 14.47,
   "distance": 100,
   "hfov": 15.32
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.85,
   "hfov": 15.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.47
  }
 ],
 "id": "overlay_925B6DE7_8136_3DC6_41B4_EA198C47EA46",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_C05E2E35_D2D9_0778_41E7_01793CF53022",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>CHAIRMAN OFFICE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>DR. HAFIZ FAISAL</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText10452"
 },
 "shadow": false
},
{
 "id": "htmlText_C772654B_D7AD_DD87_41EA_5D7BD68D4A0E",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>FEMALE FACULTY STAFF</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText15733"
 },
 "shadow": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_CFE27583_DD04_9EF1_419F_F578DFB49154); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D569AB9A_D9C1_7182_41CE_AF80801D378B",
   "yaw": 45.26,
   "pitch": 2.21,
   "distance": 100,
   "hfov": 9
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 45.26,
   "hfov": 9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.21
  }
 ],
 "id": "overlay_7749B0BD_65D6_D56B_41C7_7ABEA5F55642",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_CFF24593_DD04_9E12_41CB_366099187F5F); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5690B9A_D9C1_7182_41C1_7C2B6B68C606",
   "yaw": -17.81,
   "pitch": 0.54,
   "distance": 100,
   "hfov": 3.49
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.81,
   "hfov": 3.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.54
  }
 ],
 "id": "overlay_7731F521_65D2_DF1A_41C2_F3E7CF28AB5D",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_CFA65523_DD04_9E31_41E7_7DA3F2C96828); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5170BA9_D9C1_718E_41E3_06B87114DB21",
   "yaw": 148.88,
   "pitch": -18.33,
   "distance": 100,
   "hfov": 17.49
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 148.88,
   "hfov": 17.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.33
  }
 ],
 "id": "overlay_66625856_72CD_C265_41D7_3F8701B00E2D",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_CF900573_DD04_9E12_41E1_9F7AC73C0EEA); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5175BA9_D9C1_718E_41D9_C6050CDD8A35",
   "yaw": -113.24,
   "pitch": -29.59,
   "distance": 100,
   "hfov": 18.52
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -113.24,
   "hfov": 18.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.59
  }
 ],
 "id": "overlay_65369CD6_765C_C265_41D1_54E96BF7AF00",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7, this.camera_CF803554_DD04_9E16_41A1_95FBF9A52F3B); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D516ABA9_D9C1_718E_41E3_91D80A578B34",
   "yaw": 123.58,
   "pitch": -17.88,
   "distance": 100,
   "hfov": 9.09
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.58,
   "hfov": 9.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.88
  }
 ],
 "id": "overlay_920B99C8_813E_E5CB_41BF_C3BDC0EA19D7",
 "data": {
  "label": "Circle 02b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_924072FC_8132_27CA_41C3_10021807C8E4, this.camera_CFB08544_DD04_9E76_41BD_944B48492E6B); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5162BA9_D9C1_718E_41E6_47FEF0E03655",
   "yaw": 133.26,
   "pitch": -11.27,
   "distance": 100,
   "hfov": 8.87
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.26,
   "hfov": 8.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_1_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.27
  }
 ],
 "id": "overlay_923862F3_813E_27DE_41D7_7CEF8F4B56A6",
 "data": {
  "label": "Circle 02b"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C77D4AF3_D7A7_F487_41D0_99C538D09506, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 133.11,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_1_HS_6_0.png",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 67
     }
    ]
   },
   "pitch": 6.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.66
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.11,
   "hfov": 3.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.29
  }
 ],
 "id": "overlay_D97A2912_D7A6_D581_41E6_72C096FD8DE1",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C7EA4BF8_D7A5_5481_41D8_48A233EC386D, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 110.93,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_1_HS_7_0.png",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 85
     }
    ]
   },
   "pitch": 7.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.52
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.93,
   "hfov": 4.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.49
  }
 ],
 "id": "overlay_C5C1E151_D7A5_D583_41E9_5A91448D78C4",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C7799C60_D7AF_5381_41D0_4A1E5CC0C00F, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -94.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_1_HS_8_0.png",
      "width": 63,
      "class": "ImageResourceLevel",
      "height": 55
     }
    ]
   },
   "pitch": 9.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.46
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.19,
   "hfov": 3.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_1_HS_8_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.89
  }
 ],
 "id": "overlay_C76ABFBA_D7AD_4C81_41E8_D42752D4DB6F",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C774D54A_D7AD_DD81_41C2_DED46207FCED, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -139.32,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_1_HS_9_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 57
     }
    ]
   },
   "pitch": 10.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.4
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.32,
   "hfov": 4.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_1_HS_9_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.29
  }
 ],
 "id": "overlay_C6EF51E3_D7AE_F487_41D9_5394B1F0B390",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97, this.camera_CCC407AD_DD04_9A36_41C0_80FCD9D7D08D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D57D6B9A_D9C1_7182_41E3_890CA8A457B0",
   "yaw": 94.32,
   "pitch": -2.74,
   "distance": 100,
   "hfov": 5.3
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.32,
   "hfov": 5.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.74
  }
 ],
 "id": "overlay_2D8B8F0D_27CE_A58C_41C1_EFF6C48936DD",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_882F48DF_8338_ED5E_41DF_4F65530589AE, this.camera_CF3537EB_DD04_9A32_41E4_27294A0D80D2); this.mainPlayList.set('selectedIndex', 14); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D57CAB9A_D9C1_7182_41DE_739FBE716214",
   "yaw": 83.37,
   "pitch": -9.82,
   "distance": 100,
   "hfov": 5.68
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.37,
   "hfov": 5.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.82
  }
 ],
 "id": "overlay_7376A1CF_7DAA_6C05_41CC_41AE122D490D",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2C1A3955_2095_CA86_41BC_F803A92D6453, this.camera_CCD087BC_DD04_9A16_41EB_82C0CF9764F8); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D57C1B9A_D9C1_7182_41D3_EF378B9CFC97",
   "yaw": -29.81,
   "pitch": -6.28,
   "distance": 100,
   "hfov": 20.33
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.81,
   "hfov": 20.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.28
  }
 ],
 "id": "overlay_2F9AE2D0_2097_5F9E_417F_7C0822DCC9FC",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB, this.camera_CCDEC7CC_DD04_9A76_41E8_8F26656FDA05); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5638B9A_D9C1_7182_41E4_E9FA76152D0B",
   "yaw": 163.01,
   "pitch": -28.41,
   "distance": 100,
   "hfov": 14.22
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.01,
   "hfov": 14.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_5_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.41
  }
 ],
 "id": "overlay_2F7F3A1E_20B6_CE85_41BB_8ECBCD786C87",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_CF2B67DC_DD04_9A16_41E0_D94F5DDFC14B); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D563CB9A_D9C1_7182_41CE_F8E4968C54BF",
   "yaw": -175.76,
   "pitch": -20.44,
   "distance": 100,
   "hfov": 13.32
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.76,
   "hfov": 13.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_6_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.44
  }
 ],
 "id": "overlay_305E4CEA_2096_CB82_41B7_7E68997D1CF0",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C091CA1C_D3C9_0F10_41E0_39B49BB88342, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -12.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_12_0.png",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": 13.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.57
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.2,
   "hfov": 8.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_12_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 13.03
  }
 ],
 "id": "overlay_C13F9FAC_D3C9_0530_41B9_B29D3EDE3467",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C0DEEF12_D3FB_0513_41D8_244451AD31EE, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 84.13,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_13_0.png",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 39
     }
    ]
   },
   "pitch": 4.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.78
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.13,
   "hfov": 3.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.13
  }
 ],
 "id": "overlay_C77F4C8C_D3F9_0BF0_41DE_CA12CAEBC6A4",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C6A0F9F5_D7EF_3483_41E5_7CE5AF7E0326, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -153.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_14_0.png",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 61
     }
    ]
   },
   "pitch": 3.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.07
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -153.95,
   "hfov": 6.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.97
  }
 ],
 "id": "overlay_C6B84D02_D7EF_CD81_41E2_233C160391CC",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C508F34D_D7EB_5583_41E2_5F30144B48D4, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 147.57,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_15_0.png",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ]
   },
   "pitch": 7.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.97
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 147.57,
   "hfov": 6.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 7.94
  }
 ],
 "id": "overlay_C6BD615D_D7EA_D583_41E3_A8AD9E88A0AC",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2, this.camera_CFCD98B0_DD04_962F_41E0_E242946EAABA); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D56EBBA9_D9C1_718E_41D5_D21F04732463",
   "yaw": 159.11,
   "pitch": -21.66,
   "distance": 100,
   "hfov": 21.32
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.11,
   "hfov": 21.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.66
  }
 ],
 "id": "overlay_612CC06F_72CD_C223_41C2_56DE8B6299F2",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_CE2FC8D0_DD04_966E_41DF_8BBA29E2A88C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D56E1BA9_D9C1_718E_41D9_1D000FFF3E15",
   "yaw": -106.82,
   "pitch": -23.23,
   "distance": 100,
   "hfov": 17.07
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.82,
   "hfov": 17.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.23
  }
 ],
 "id": "overlay_62C7CA2E_72CC_C625_41D6_44B5A63D6A34",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328, this.camera_CFDD78C0_DD04_966E_41C6_AEF1273F47F7); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D56E6BA9_D9C1_718E_41BD_D63637D44761",
   "yaw": -85.39,
   "pitch": -19.21,
   "distance": 100,
   "hfov": 12.38
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.39,
   "hfov": 12.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_2_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.21
  }
 ],
 "id": "overlay_65923DA3_7245_C223_41D1_FE1BFE70C46D",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C187FFE1_D54B_0530_41D1_67749F2802EF, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 86.15,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_4_0.png",
      "width": 144,
      "class": "ImageResourceLevel",
      "height": 145
     }
    ]
   },
   "pitch": 4.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.61
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.15,
   "hfov": 2.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.77
  }
 ],
 "id": "overlay_C01C6724_D54B_0537_41E4_2E55D7F7D24C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C772BC84_D559_0BF0_4181_9334842D88B4, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 36.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_6_0.png",
      "width": 144,
      "class": "ImageResourceLevel",
      "height": 145
     }
    ]
   },
   "pitch": 1.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.62
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.26,
   "hfov": 2.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.89
  }
 ],
 "id": "overlay_C0CE17FB_D557_0510_41DC_0662CE525356",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_D9FE05FD_D79D_7C83_41E4_6F7F41A58DDD, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -77.43,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_7_0.png",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": 7.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.57
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -77.43,
   "hfov": 1.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": 7.85
  }
 ],
 "id": "overlay_DACA5FA1_D79D_4C80_41DE_AD991F22B954",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D1BA79F8_DD04_8DF1_41E1_A07EDD5C6ED7, this.camera_CFC358A1_DD04_962E_41D9_4650E22DD686); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CD831737_DD04_867E_41C2_BDE167F55AB0",
   "yaw": 46.08,
   "pitch": -13.88,
   "distance": 50,
   "hfov": 11.93
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.08,
   "hfov": 11.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.88
  }
 ],
 "id": "overlay_D24E5CEC_DD0F_8A11_41E8_BE1AFD0BE09B",
 "data": {
  "label": "Arrow 01 Left"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A, this.camera_CF4514F5_DD04_9E16_41D8_DE685B13E3F4); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5697B9A_D9C1_7182_41DF_0F6FD9123F79",
   "yaw": 113.82,
   "pitch": 2.81,
   "distance": 100,
   "hfov": 8.78
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 113.82,
   "hfov": 8.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.81
  }
 ],
 "id": "overlay_6A97DFD8_65BF_AB2A_41C3_3E50220C5DA6",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965, this.camera_CF6B84C6_DD04_9E72_41E2_B1C9CC9CA2E7); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D568BB9A_D9C1_7182_41D9_1E485FC1720E",
   "yaw": 137.27,
   "pitch": 13.29,
   "distance": 100,
   "hfov": 8.82
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.27,
   "hfov": 8.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 13.29
  }
 ],
 "id": "overlay_6A36C49D_65BD_DD2A_41C4_B37802ADF778",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6, this.camera_CF090497_DD04_9E12_41D7_71C4A17CA9C8); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5683B9A_D9C1_7182_41CF_06A3AA61255D",
   "yaw": 50.86,
   "pitch": 0.85,
   "distance": 100,
   "hfov": 14.03
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.86,
   "hfov": 14.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.85
  }
 ],
 "id": "overlay_6A77C71E_65B3_7B26_41D2_00F45DD39300",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6, this.camera_CF1854B6_DD04_9E12_41D6_4EB0B75E2FE3); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D56F9B9A_D9C1_7182_41CF_AE7B0509BA74",
   "yaw": -87.18,
   "pitch": -0.95,
   "distance": 100,
   "hfov": 10.34
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.18,
   "hfov": 10.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.95
  }
 ],
 "id": "overlay_778A81BE_65D5_7766_41C5_A6B5B445518E",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965, this.camera_CF75B4E5_DD04_9E36_41E8_2C7BBE305F78); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D56FEB9A_D9C1_7182_41D1_9D9C091EFF13",
   "yaw": -136.74,
   "pitch": -5.05,
   "distance": 100,
   "hfov": 8.67
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -136.74,
   "hfov": 8.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.05
  }
 ],
 "id": "overlay_77AC7450_65D6_DD39_4194_F5631E76AD62",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_CF3F0487_DD04_9EF2_41DA_561F972995BA); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D56F3B9A_D9C1_7182_41E9_4B38F53C3F05",
   "yaw": 90.97,
   "pitch": -20.48,
   "distance": 100,
   "hfov": 14.28
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.97,
   "hfov": 14.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_9_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.48
  }
 ],
 "id": "overlay_9091F2C0_812E_663A_41DD_7F9ECB63A616",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C683B424_D7A5_7381_41E8_814EC5A386AA, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 28.8,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_16_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ]
   },
   "pitch": 16.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.76
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.8,
   "hfov": 6.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_16_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 16.1
  }
 ],
 "id": "overlay_C6BD2C3E_D7A5_D381_41DB_3814F056B666",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C50B5FE3_D7A6_CC87_4193_5F86DDF65DC7, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 155.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_17_0.png",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 91
     }
    ]
   },
   "pitch": 14.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.02
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.35,
   "hfov": 7.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_17_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 14.2
  }
 ],
 "id": "overlay_C6E03B34_D7A7_5581_41D3_530367D76E63",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C6B6DE12_D7E6_CF81_41E1_F39F692E4AB3, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 105.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_18_0.png",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 53
     }
    ]
   },
   "pitch": 5.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.14
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.35,
   "hfov": 5.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_18_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.81
  }
 ],
 "id": "overlay_C4BEB43D_D7E5_53FC_41E6_6787ED5B4E74",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_CC92376E_DD04_9A32_41EB_973F992A21BD); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5780B99_D9C1_718E_41D0_3DE625579761",
   "yaw": 145,
   "pitch": -4.23,
   "distance": 100,
   "hfov": 4.6
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 145,
   "hfov": 4.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_1_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.23
  }
 ],
 "id": "overlay_2E01E13C_27CE_FD93_41B0_E300E032BAE9",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A, this.camera_CC99076E_DD04_9A32_41C5_46C212DDC657); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5784B99_D9C1_718E_41D7_CD0965C06A81",
   "yaw": -25.06,
   "pitch": -4.29,
   "distance": 100,
   "hfov": 4.91
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.06,
   "hfov": 4.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_2_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.29
  }
 ],
 "id": "overlay_2E01913D_27CE_FD8D_41B0_F4A692BC5FD2",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784, this.camera_CC84975F_DD04_9A12_41BC_2D2C56F8DC63); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D57F9B99_D9C1_718E_41BD_3FCA07BE8072",
   "yaw": -127.17,
   "pitch": -32.84,
   "distance": 100,
   "hfov": 14.45
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.17,
   "hfov": 14.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.84
  }
 ],
 "id": "overlay_9495A4E7_8112_23C6_41D9_C30E13F341D4",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E, this.camera_CCE4277E_DD04_9A12_41E9_01EAEF129AEF); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D57FCB99_D9C1_718E_41D1_FCE47035F2A0",
   "yaw": 25.19,
   "pitch": -22.92,
   "distance": 100,
   "hfov": 10.69
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.19,
   "hfov": 10.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_4_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.92
  }
 ],
 "id": "overlay_949BA3B9_8112_E64A_41B7_69393FF5C01E",
 "data": {
  "label": "stairs"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9CF4C929_876E_624D_41DC_0769C9491F92, this.camera_CCF2178D_DD04_9AF1_4174_97E00AD1415E); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D57F0B9A_D9C1_7182_4180_C66D5BD3D17B",
   "yaw": 64.08,
   "pitch": -20.86,
   "distance": 100,
   "hfov": 10.84
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 64.08,
   "hfov": 10.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_5_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.86
  }
 ],
 "id": "overlay_9C32118D_876E_2245_410D_913B539FFF40",
 "data": {
  "label": "stairs"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C2E4048B_D339_3B0D_41DF_19C712605800, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 118.84,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_8_0.png",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 85
     }
    ]
   },
   "pitch": 5.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.54
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 118.84,
   "hfov": 9.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.51
  }
 ],
 "id": "overlay_C17C8D12_D339_051D_41C0_C12964D9AF43",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A, this.camera_CFF39891_DD04_96EE_41CB_6444F872F121); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D56F0B9A_D9C1_7182_41B7_7DEE64F7B8B1",
   "yaw": 29.69,
   "pitch": -2.23,
   "distance": 100,
   "hfov": 12.28
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.69,
   "hfov": 12.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.23
  }
 ],
 "id": "overlay_62660C43_6DC4_C263_41D3_3E8F8E668547",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_C33A6B67_D2C9_0DFF_41E0_385FC985C1FA",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;font-family:'Arial Baltic';\"><B>ADMIN OFFICE (DEPARTMENT OF COMPUTER SCIENCE)</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText5864"
 },
 "shadow": false
},
{
 "id": "htmlText_C03555BF_D3C9_0510_41CB_624607536A86",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>BOY'S WASHROOM</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText23198"
 },
 "shadow": false
},
{
 "id": "htmlText_C14BCCD6_D2DF_0B20_41E6_31FA01667B7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Arial Baltic';\"><B>DEAN OFFICE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Arial Baltic';\"><B>DR MUHAMMAD ILYAS</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText8634"
 },
 "shadow": false
},
{
 "id": "htmlText_C1A41683_D549_07F1_41A1_27224CC6B9FB",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>DISCUSSION ROOM</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText39102"
 },
 "shadow": false
},
{
 "id": "htmlText_C5B386A9_D7BD_DC83_41AA_CB647C509F4B",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>MAB ROOM 170</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText8677"
 },
 "shadow": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2, this.camera_CE9739A8_DD04_963E_41D1_8B56CA77ADB2); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D511DBA9_D9C1_718E_41CB_9A9E95EAEA02",
   "yaw": 60.58,
   "pitch": -29.72,
   "distance": 100,
   "hfov": 13.82
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 60.58,
   "hfov": 13.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.72
  }
 ],
 "id": "overlay_63E529C5_72C3_4267_41D8_62C5880B7C03",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62830609_72C7_41EF_41CB_5673A5B66BA1, this.camera_CEE109B8_DD04_961E_41D1_DC1C11034CED); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5113BA9_D9C1_718E_41CF_C52FD8C777C2",
   "yaw": 176.49,
   "pitch": -29.92,
   "distance": 100,
   "hfov": 15.92
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.49,
   "hfov": 15.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.92
  }
 ],
 "id": "overlay_6432FAD2_72C3_467D_41D4_9CF6239DAB9A",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649, this.camera_CC6A66D1_DD04_9A6E_41E8_2A98DBCC4729); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D518DBA9_D9C1_718E_41D0_08C1B06A399C",
   "yaw": -64.72,
   "pitch": 0.54,
   "distance": 100,
   "hfov": 13.5
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -64.72,
   "hfov": 13.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.54
  }
 ],
 "id": "overlay_94FA217B_8136_22CE_41DF_978D12B255E8",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47, this.camera_CCB0173F_DD04_9A12_41D7_2A4B251D75FA); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D57DEB9A_D9C1_7182_41E1_F3AA90157324",
   "yaw": -39.6,
   "pitch": -16.35,
   "distance": 100,
   "hfov": 14.5
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.6,
   "hfov": 14.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_1_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.35
  }
 ],
 "id": "overlay_A67546E7_AB8C_4ED4_41CA_09A559A3AF75",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E, this.camera_CCB9874F_DD04_9A72_41B4_25105BF4FB9E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D57D3B9A_D9C1_7182_41D7_6F92E83A9479",
   "yaw": 104.17,
   "pitch": -18.44,
   "distance": 100,
   "hfov": 15.43
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.17,
   "hfov": 15.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.44
  }
 ],
 "id": "overlay_581356E7_5543_BC2D_41D3_1067E1CAA752",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_63584076_72C4_C225_41D9_7003B7355FB0, this.camera_CC50970F_DD04_9BF2_41C3_0F7DFAD61863); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D57D7B9A_D9C1_7182_41BA_C873B823AE71",
   "yaw": 84.94,
   "pitch": -11.96,
   "distance": 100,
   "hfov": 18.43
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.94,
   "hfov": 18.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.96
  }
 ],
 "id": "overlay_6155A733_72C3_CE23_41CA_96783A0F5A35",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649, this.camera_CCA5072E_DD04_9A32_41E0_62FA1E52BB60); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D57CCB9A_D9C1_7182_41E1_CF31FB60B9C7",
   "yaw": -90.51,
   "pitch": -12.92,
   "distance": 100,
   "hfov": 13.97
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.51,
   "hfov": 13.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_1_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.92
  }
 ],
 "id": "overlay_6768CCFD_72DC_C227_41D0_30ABBF7555DC",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64882088_72C3_C2ED_41D0_0CC0426D5922, this.camera_CC5F471F_DD04_9A12_41EA_5353FCA173DE); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D57C4B9A_D9C1_7182_41EA_67F8C6427403",
   "yaw": -115.33,
   "pitch": -28.98,
   "distance": 50,
   "hfov": 17.12
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.33,
   "hfov": 17.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_1_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.98
  }
 ],
 "id": "overlay_6955A86A_72C5_C22D_41DC_240C10260780",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C04E927A_D349_1F0B_41DD_47A58239CC8F, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -62.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_1_HS_7_0.png",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 89
     }
    ]
   },
   "pitch": 5.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.46
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.75,
   "hfov": 8.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 5.62
  }
 ],
 "id": "overlay_C704BEE0_D349_0737_41E0_9D9956AC2509",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_C6A339F6_D7EF_348E_41D3_E377BA3B8AB9",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>FACULTY STAFF </B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText19999"
 },
 "shadow": false
},
{
 "id": "htmlText_C1E2F453_D579_1B10_41AB_1E2555876C11",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>RIGHT -&gt; SMART ROOM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>LEFT -&gt; MAB LAB 03</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText43444"
 },
 "shadow": false
},
{
 "id": "htmlText_C2BB66A4_D54B_0737_41A2_191A7B4B9281",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:26px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:26px;font-family:'Arial Baltic';\"><B>IT EXAM OFFICE</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText42080"
 },
 "shadow": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF, this.camera_CC123692_DD04_9A12_41DF_D6CBCDAF8597); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D566AB9A_D9C1_7182_41D2_3F01C5E144DD",
   "yaw": -125.17,
   "pitch": -34.87,
   "distance": 100,
   "hfov": 20.75
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -125.17,
   "hfov": 20.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.87
  }
 ],
 "id": "overlay_618446F2_6FF2_EED6_41BB_34A5952BEDF6",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C, this.camera_CC0BC683_DD04_9AF2_419E_28535C5FCC56); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5660B9A_D9C1_7182_41E3_8D70F88D571D",
   "yaw": 170.44,
   "pitch": -36.71,
   "distance": 100,
   "hfov": 13.57
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.44,
   "hfov": 13.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.71
  }
 ],
 "id": "overlay_6176939F_6FFF_A74E_41D0_8D9F295097C2",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A, this.camera_CC16C6A2_DD04_9A32_41D8_D6ED01DC7595); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5665B9A_D9C1_7182_41DA_98744F70CBA2",
   "yaw": 21.03,
   "pitch": -16.02,
   "distance": 100,
   "hfov": 17.21
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.03,
   "hfov": 17.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.02
  }
 ],
 "id": "overlay_60C9DA1B_6FF3_A156_41B4_A22292FB47BC",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_C1E03452_D579_1B10_41E4_6C14EE03108C, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -156.45,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_1_HS_5_0.png",
      "width": 189,
      "class": "ImageResourceLevel",
      "height": 131
     }
    ]
   },
   "pitch": 0.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.94
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -156.45,
   "hfov": 2.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_1_HS_5_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.43
  }
 ],
 "id": "overlay_C2FDDE4E_D577_0770_41E5_C2E5A53FB26C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_CE0EC8E2_DD04_9632_41D5_0BA438C22D09); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5677B9A_D9C1_7182_41E3_313B33496AAE",
   "yaw": -129.47,
   "pitch": -12.61,
   "distance": 100,
   "hfov": 13.19
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.47,
   "hfov": 13.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.61
  }
 ],
 "id": "overlay_A5F03DCD_AB8C_42D4_41E3_EF335D747B4B",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D5641B9A_D9C1_7182_41DD_F2816C4F9B5D",
   "yaw": -112.69,
   "pitch": -24.6,
   "distance": 100,
   "hfov": 10.69
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -112.69,
   "hfov": 10.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.6
  }
 ],
 "id": "overlay_70307665_7DA6_1404_41BD_E3D3BBA20DC6",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_C68892BA_D7AB_F481_41E3_82D0EAA06562",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:25px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Arial Baltic';\"><B>MAB ROOM 172</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText12656"
 },
 "shadow": false
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D56A5B9A_D9C1_7182_41D2_8CC28FB30AB6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D51EFBA9_D9C1_718E_41D0_D3FF4BAEE84A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D51E6BA9_D9C1_718E_41D0_6E4217DCC55F",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D51F5BA9_D9C1_718E_41EA_9CD7CD86A2DE",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D515ABA9_D9C1_718E_41D6_E2C0AFFD2504",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5150BA9_D9C1_718E_41BF_0DC293B081BA",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5156BA9_D9C1_718E_41A4_57148ED17545",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D514DBA9_D9C1_718E_41DB_37C69E33F568",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5144BA9_D9C1_718E_41E7_E4DE5BC88D6C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D57E5B9A_D9C1_7182_41E9_79D30F08CC88",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D57D9B9A_D9C1_7182_41E0_009057456170",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D5676B9A_D9C1_7182_41E3_C5762184EDDB",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D566BB9A_D9C1_7182_41C2_AF3EFD6753D0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D56F7BA9_D9C1_718E_41E5_E8649E25F8F3",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5127BA9_D9C1_718E_41E1_35912862BFB4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D56C3BA9_D9C1_718E_41DB_0BF225DD87D7",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5139BA9_D9C1_718E_41DE_5AA678FE286B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D513EBA9_D9C1_718E_41D5_1BEBC0171951",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D51A2BA9_D9C1_718E_41D3_3442EF9DB472",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5199BA9_D9C1_718E_41D9_5CB24DC97F68",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D5651B9A_D9C1_7182_41E7_C7A042BAC503",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D5655B9A_D9C1_7182_41DD_C1FE51074C65",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D56BFB9A_D9C1_7182_41C7_AB9DFCA23A40",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D56B4B9A_D9C1_7182_41CB_CDF654375C54",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D5661B9A_D9C1_7182_41D4_282A881BC667",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D5665B9A_D9C1_7182_41EA_039E563A0ADD",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D574CB90_D9C1_719E_41DC_2B9740A4EBBC",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5190BA9_D9C1_718E_41BF_C929091E6D62",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5196BA9_D9C1_718E_41E3_97174F86604F",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D564AB9A_D9C1_7182_41DC_B9312D4CD41B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D565DB9A_D9C1_7182_41CC_719FD36CEEB8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D5645B9A_D9C1_7182_41C4_5E0F05325F94",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D56BAB9A_D9C1_7182_41E8_B4970FC64A56",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D56AAB9A_D9C1_7182_41E7_222363CDC6FB",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D56A0B9A_D9C1_7182_41D2_10887CDC4248",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D561BB9A_D9C1_7182_4190_208197CA108F",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D561FB9A_D9C1_7182_41E2_A2DAC9F8D982",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5614B9A_D9C1_7182_41CA_5F896C8CD1C3",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D560AB9A_D9C1_7182_41E5_F6201542FE19",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_8_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5185BA9_D9C1_718E_41A5_207A9BBE96F2",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D51F1BA9_D9C1_718E_41D3_7D85CAEE070E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D51E8BA9_D9C1_718E_41DD_2781D01847D5",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5108BA9_D9C1_718E_41E7_B611A69F3EC2",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D57ECB9A_D9C1_7182_41E9_3ADCD944AEF9",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D57E2B9A_D9C1_7182_41D6_364438485BF8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D51FCBA9_D9C1_718E_41D9_857E84407F39",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D569AB9A_D9C1_7182_41CE_AF80801D378B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5690B9A_D9C1_7182_41C1_7C2B6B68C606",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5170BA9_D9C1_718E_41E3_06B87114DB21",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5175BA9_D9C1_718E_41D9_C6050CDD8A35",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D516ABA9_D9C1_718E_41E3_91D80A578B34",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5162BA9_D9C1_718E_41E6_47FEF0E03655",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D57D6B9A_D9C1_7182_41E3_890CA8A457B0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D57CAB9A_D9C1_7182_41DE_739FBE716214",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D57C1B9A_D9C1_7182_41D3_EF378B9CFC97",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D5638B9A_D9C1_7182_41E4_E9FA76152D0B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 21,
 "id": "AnimatedImageResource_D563CB9A_D9C1_7182_41CE_F8E4968C54BF",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D56EBBA9_D9C1_718E_41D5_D21F04732463",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D56E1BA9_D9C1_718E_41D9_1D000FFF3E15",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D56E6BA9_D9C1_718E_41BD_D63637D44761",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_CD831737_DD04_867E_41C2_BDE167F55AB0",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0_HS_8_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5697B9A_D9C1_7182_41DF_0F6FD9123F79",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D568BB9A_D9C1_7182_41D9_1E485FC1720E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5683B9A_D9C1_7182_41CF_06A3AA61255D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D56F9B9A_D9C1_7182_41CF_AE7B0509BA74",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D56FEB9A_D9C1_7182_41D1_9D9C091EFF13",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D56F3B9A_D9C1_7182_41E9_4B38F53C3F05",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_1_HS_9_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5780B99_D9C1_718E_41D0_3DE625579761",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5784B99_D9C1_718E_41D7_CD0965C06A81",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D57F9B99_D9C1_718E_41BD_3FCA07BE8072",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D57FCB99_D9C1_718E_41D1_FCE47035F2A0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D57F0B9A_D9C1_7182_4180_C66D5BD3D17B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D56F0B9A_D9C1_7182_41B7_7DEE64F7B8B1",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D511DBA9_D9C1_718E_41CB_9A9E95EAEA02",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D5113BA9_D9C1_718E_41CF_C52FD8C777C2",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D518DBA9_D9C1_718E_41D0_08C1B06A399C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D57DEB9A_D9C1_7182_41E1_F3AA90157324",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D57D3B9A_D9C1_7182_41D7_6F92E83A9479",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D57D7B9A_D9C1_7182_41BA_C873B823AE71",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D57CCB9A_D9C1_7182_41E1_CF31FB60B9C7",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D57C4B9A_D9C1_7182_41EA_67F8C6427403",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_1_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D566AB9A_D9C1_7182_41D2_3F01C5E144DD",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D5660B9A_D9C1_7182_41E3_8D70F88D571D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D5665B9A_D9C1_7182_41DA_98744F70CBA2",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D5677B9A_D9C1_7182_41E3_313B33496AAE",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
},
{
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_D5641B9A_D9C1_7182_41DD_F2816C4F9B5D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "rowCount": 5
}],
 "class": "Player",
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "scripts": {
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getKey": function(key){  return window[key]; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "data": {
  "name": "Player445"
 },
 "shadow": false,
 "layout": "absolute",
 "height": "100%",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
