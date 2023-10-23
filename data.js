var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": 0.6648261477682311,
        "pitch": 0.11932990606835148,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": -0.32488393800221793,
          "pitch": 0.27841051027920294,
          "rotation": 0,
          "target": "1-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": 0.6738488590308478,
        "pitch": 0.30462042207653184,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": 0.2217539265911217,
          "pitch": 0.323971016762691,
          "rotation": 0,
          "target": "2-3"
        },
        {
          "yaw": 2.588857123350815,
          "pitch": 0.46980507191670107,
          "rotation": 10.995574287564278,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3",
      "name": "3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": 1.1906180853822192,
        "pitch": 0.32032250568872556,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": -2.680732072493205,
          "pitch": 0.41406233639624723,
          "rotation": 0,
          "target": "1-2"
        },
        {
          "yaw": -0.029903784760687557,
          "pitch": 0.37869359379955725,
          "rotation": 0,
          "target": "3-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4",
      "name": "4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.25021095769252355,
          "pitch": 0.3289105359014357,
          "rotation": 0.7853981633974483,
          "target": "2-3"
        },
        {
          "yaw": -0.405083498696186,
          "pitch": 0.35814456080695933,
          "rotation": 5.497787143782138,
          "target": "4-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-5",
      "name": "5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": -1.0699627153530429,
        "pitch": -0.03800931940948615,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": 0.1375214597681058,
          "pitch": 0.2744221994734328,
          "rotation": 0,
          "target": "5-6"
        },
        {
          "yaw": 2.078257193037677,
          "pitch": 0.45257589631947504,
          "rotation": 0.7853981633974483,
          "target": "3-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6",
      "name": "6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5586320182033582,
          "pitch": 0.40428393464624435,
          "rotation": 0,
          "target": "6-7"
        },
        {
          "yaw": -2.9858197654172596,
          "pitch": 0.30142838816946593,
          "rotation": 0,
          "target": "4-5"
        },
        {
          "yaw": 2.1830517609820115,
          "pitch": 0.24428810059481165,
          "rotation": 0,
          "target": "2-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-7",
      "name": "7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": -1.607220589445209,
        "pitch": 0.19419365288049129,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": -2.837231682498821,
          "pitch": 0.35310271201898935,
          "rotation": 0,
          "target": "5-6"
        },
        {
          "yaw": 0.11000231310717368,
          "pitch": 0.4491790139129783,
          "rotation": 6.283185307179586,
          "target": "7-8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-8",
      "name": "8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3358885887013443,
          "pitch": 0.3514322500622402,
          "rotation": 0,
          "target": "8-sala-naranja"
        },
        {
          "yaw": -0.1666089146412908,
          "pitch": 0.3759814301776139,
          "rotation": 5.497787143782138,
          "target": "9-sala-amarilla"
        },
        {
          "yaw": -2.8349588980719336,
          "pitch": 0.46160544283633875,
          "rotation": 0,
          "target": "6-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-sala-naranja",
      "name": "Sala naranja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": 1.2841446121399773,
        "pitch": 0.1937402028080033,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": -1.6057283860847473,
          "pitch": 0.29385641008570396,
          "rotation": 5.497787143782138,
          "target": "7-8"
        },
        {
          "yaw": -0.7799713576741354,
          "pitch": 0.27012854033562306,
          "rotation": 0,
          "target": "9-sala-amarilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-sala-amarilla",
      "name": "Sala amarilla",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3969024358590403,
          "pitch": 0.22538247270585288,
          "rotation": 0,
          "target": "10-pasillo"
        },
        {
          "yaw": -1.6396426713807841,
          "pitch": 0.3678898037064542,
          "rotation": 0.7853981633974483,
          "target": "12-cancha"
        },
        {
          "yaw": 0.990761013878469,
          "pitch": 0.2041275043936892,
          "rotation": 5.497787143782138,
          "target": "14-gimnasio"
        },
        {
          "yaw": -2.277979068380784,
          "pitch": -0.019543348032899033,
          "rotation": 6.283185307179586,
          "target": "15-sala-morada"
        },
        {
          "yaw": -2.652477296523701,
          "pitch": 0.25476404652881257,
          "rotation": 0,
          "target": "7-8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-pasillo",
      "name": "Pasillo",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7593561693457769,
          "pitch": 0.6972064815728132,
          "rotation": 0,
          "target": "12-cancha"
        },
        {
          "yaw": -0.11439002730113401,
          "pitch": 0.2642340579138107,
          "rotation": 0,
          "target": "11-alberca-de-foami"
        },
        {
          "yaw": 3.0751158539286747,
          "pitch": 0.24276317478693343,
          "rotation": 0,
          "target": "9-sala-amarilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-alberca-de-foami",
      "name": "Alberca de foami",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.2315953808638227,
        "pitch": 0.348575534876046,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": -0.2646240071307062,
          "pitch": 0.26519715648304754,
          "rotation": 0,
          "target": "10-pasillo"
        },
        {
          "yaw": 0.5707221450926792,
          "pitch": 0.42014079310468233,
          "rotation": 0.7853981633974483,
          "target": "12-cancha"
        },
        {
          "yaw": -1.6503531125178679,
          "pitch": 0.21430179365669133,
          "rotation": 0.7853981633974483,
          "target": "13-trampolines"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-cancha",
      "name": "Cancha",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -2.3855501312336482,
        "pitch": 0.124556465326922,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": 1.715872376242566,
          "pitch": 0.06066327931148763,
          "rotation": 0,
          "target": "11-alberca-de-foami"
        },
        {
          "yaw": -3.1352227201849274,
          "pitch": 0.08020600569023095,
          "rotation": 0,
          "target": "9-sala-amarilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-trampolines",
      "name": "Trampolines",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.6215471203907335,
        "pitch": 0.25115313611742707,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": -1.7070448022480385,
          "pitch": 0.20379011806276637,
          "rotation": 0,
          "target": "14-gimnasio"
        },
        {
          "yaw": 0.5562123024869425,
          "pitch": 0.18422368581280324,
          "rotation": 5.497787143782138,
          "target": "11-alberca-de-foami"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-gimnasio",
      "name": "Gimnasio",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7773075457044492,
          "pitch": 0.2868725975484807,
          "rotation": 0,
          "target": "13-trampolines"
        },
        {
          "yaw": -0.9426580686281927,
          "pitch": 0.20338880518852065,
          "rotation": 0,
          "target": "9-sala-amarilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-sala-morada",
      "name": "Sala morada",
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
          "yaw": -0.20572384936415133,
          "pitch": 0.20571715665344037,
          "rotation": 11.780972450961727,
          "target": "9-sala-amarilla"
        },
        {
          "yaw": 2.2951388823284677,
          "pitch": 0.5903983438184497,
          "rotation": 0,
          "target": "16-proyecciones"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-proyecciones",
      "name": "Proyecciones",
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
        "yaw": -0.19080403763658538,
        "pitch": 0.17538681087596153,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": 0.3231840150704368,
          "pitch": 0.07272688610159861,
          "rotation": 0,
          "target": "17-descanso-"
        },
        {
          "yaw": 1.2727618059903172,
          "pitch": 1.0314776944345319,
          "rotation": 0.7853981633974483,
          "target": "15-sala-morada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-descanso-",
      "name": "Descanso ",
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
        "yaw": 0.47362893505041725,
        "pitch": 0.1882562126189704,
        "fov": 1.3874071810897723
      },
      "linkHotspots": [
        {
          "yaw": -1.9415129064842152,
          "pitch": 0.8918699839914801,
          "rotation": 0,
          "target": "16-proyecciones"
        },
        {
          "yaw": 0.02916836067179851,
          "pitch": 0.04474674213948404,
          "rotation": 0,
          "target": "15-sala-morada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Panorama TOSKA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
