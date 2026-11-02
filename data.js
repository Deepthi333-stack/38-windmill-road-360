var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama-living",
      "name": "Panorama living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.015870002500433245,
        "pitch": 0,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": -2.3251421815612705,
          "pitch": 0.09318950626919076,
          "rotation": 6.283185307179586,
          "target": "1-kitchen"
        },
        {
          "yaw": 2.886729084743049,
          "pitch": 0.11367930641791801,
          "rotation": 4.71238898038469,
          "target": "2-office"
        },
        {
          "yaw": 2.960917626413176,
          "pitch": 0.007143828472624847,
          "rotation": 1.5707963267948966,
          "target": "4-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.08908464815464079,
        "pitch": 0.13832204683375515,
        "fov": 1.261766963800644
      },
      "linkHotspots": [
        {
          "yaw": -0.9672641330283227,
          "pitch": 0.089920867938595,
          "rotation": 4.71238898038469,
          "target": "3-dine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-office",
      "name": "office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4457490165755775,
          "pitch": 0.15555103804491566,
          "rotation": 0.7853981633974483,
          "target": "0-panorama-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dine",
      "name": "dine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.11335440747615166,
        "pitch": 0.3310560649470986,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": -1.1288482444857344,
          "pitch": 0.16321684197294672,
          "rotation": 4.71238898038469,
          "target": "0-panorama-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom",
      "name": "bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.04588236693385994,
        "pitch": 0.1971322707174803,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 1.736644886959847,
          "pitch": 0.34692938122649863,
          "rotation": 7.0685834705770345,
          "target": "0-panorama-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "38 windmill road 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
