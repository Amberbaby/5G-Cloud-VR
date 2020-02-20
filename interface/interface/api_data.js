define({ "api": [
  {
    "type": "get",
    "url": "/material/normalphoto",
    "title": "获取普通图片",
    "group": "Arrange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>单页记录条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_id",
            "description": "<p>分组ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "normal_photo_id",
            "description": "<p>普通图片id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "normal_photo_name",
            "description": "<p>普通图片名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "normal_photo_url",
            "description": "<p>普通图片url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creator",
            "description": "<p>创建者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group_id",
            "description": "<p>组ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>存储相对路径如: demo/xxx.png</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"normal_photo_id\": \"string\",\n        \"normal_photo_name\": \"string\",\n        \"normal_photo_url\": \"string\",\n        \"keycode\": \"string\",\n        \"creator\": \"string\",\n        \"path\": \"demo/xxx.png\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Arrange",
    "name": "GetMaterialNormalphoto"
  },
  {
    "type": "get",
    "url": "/material/normalphoto/group",
    "title": "获取普通视频组",
    "group": "Arrange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>单页记录条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n    \"group_id\":  \"分组ID\",\n    \"name\": \"分组名称\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Arrange",
    "name": "GetMaterialNormalphotoGroup"
  },
  {
    "type": "get",
    "url": "/material/normalvideo",
    "title": "获取普通视频",
    "group": "Arrange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>单页记录条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_id",
            "description": "<p>分组ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "normal_video_name",
            "description": "<p>普通视频名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preview_img_url",
            "description": "<p>预览图地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "normal_video_id",
            "description": "<p>普通视频id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group_id",
            "description": "<p>分组id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video_address",
            "description": "<p>普通视频地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keycode",
            "description": "<p>普通视频keycode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creator",
            "description": "<p>创建者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>存储相对路径如: demo/xxx.MP4</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " [\n  {\n    \"normal_video_name\": \"string\",\n    \"preview_img_url\": \"string\",\n    \"normal_video_id\": \"string\",\n    \"group_id\": \"string\",\n    \"video_address\": \"string\",\n    \"keycode\": \"string\",\n    \"creator\": \"string\",\n    \"path\": \"demo/xxx.mp4\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Arrange",
    "name": "GetMaterialNormalvideo"
  },
  {
    "type": "get",
    "url": "/material/normalvideo/group",
    "title": "获取普通视频组",
    "group": "Arrange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>单页记录条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n    \"group_id\":  \"分组ID\",\n    \"name\": \"分组名称\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Arrange",
    "name": "GetMaterialNormalvideoGroup"
  },
  {
    "type": "get",
    "url": "/material/panolive",
    "title": "获取全景直播",
    "group": "Arrange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>单页记录条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_id",
            "description": "<p>分组ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "live_video_id",
            "description": "<p>直播视频Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>直播视频名字</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "live_address",
            "description": "<p>全景直播地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "push_stream_address",
            "description": "<p>全景直播推流地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stream_name",
            "description": "<p>全景直播流名称（摄像头地址）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keycode",
            "description": "<p>全景直播keycode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creator",
            "description": "<p>创建者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group_id",
            "description": "<p>组ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n      {\n        \"live_video_id\": \"string\",\n        \"name\": \"string\",\n        \"live_address\": \"string\",\n        \"push_stream_address\": \"string\",\n        \"stream_name\": \"string\",\n        \"keycode\": \"string\",\n        \"creator\": \"string\",\n        \"group_id\": \"string\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Arrange",
    "name": "GetMaterialPanolive"
  },
  {
    "type": "get",
    "url": "/material/panolive/group",
    "title": "获取全景直播分组",
    "group": "Arrange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>单页记录条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n    \"group_id\":  \"分组ID\",\n    \"name\": \"分组名称\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Arrange",
    "name": "GetMaterialPanoliveGroup"
  },
  {
    "type": "get",
    "url": "/material/panophoto",
    "title": "获取全景图片",
    "group": "Arrange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>单页记录条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_id",
            "description": "<p>分组ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source_file",
            "description": "<p>原图地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keycode",
            "description": "<p>keycode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source_path",
            "description": "<p>原图目录</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>图片title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "thumb",
            "description": "<p>缩略图地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tiledimage",
            "description": "<p>分辨率</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zero",
            "description": "<p>是否补0，0:补零,1:不补零</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态,0:未转换,9:转换完成</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "file_size",
            "description": "<p>文件大小</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_message",
            "description": "<p>异常信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>存储相对路径如: demo/xxx.png</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n [\n  {\n    \"id\": \"string\",\n    \"source_file\": \"string\",\n    \"keycode\": \"string\",\n    \"source_path\": \"string\",\n    \"title\": \"string\",\n    \"thumb\": \"string\",\n    \"tiledimage\": \"string\",\n    \"zero\": \"string\",\n    \"status\": \"string\",\n    \"description\": \"string\",\n    \"file_size\": \"string\",\n    \"error_message\": \"string\",\n    \"path\": \"demo/xxx.mp4\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Arrange",
    "name": "GetMaterialPanophoto"
  },
  {
    "type": "get",
    "url": "/material/panophoto/group",
    "title": "获取全景图片组",
    "group": "Arrange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>单页记录条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n    \"group_id\":  \"分组Id\",\n    \"name\": \"分组名称\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Arrange",
    "name": "GetMaterialPanophotoGroup"
  },
  {
    "type": "get",
    "url": "/material/panovideo",
    "title": "获取全景视频",
    "group": "Arrange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>单页记录条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_id",
            "description": "<p>分组ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>全景视频名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preview_img_url",
            "description": "<p>全景预览图地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recorded_video_id",
            "description": "<p>全景视频id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group_id",
            "description": "<p>分组id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video_address",
            "description": "<p>全景视频地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keycode",
            "description": "<p>keycode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creator",
            "description": "<p>创建者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>存储相对路径如: demo/xxx.png</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " [\n\n  {\n    \"name\": \"string\",\n    \"preview_img_url\": \"string\",\n    \"recorded_video_id\": \"string\",\n    \"group_id\": \"string\",\n    \"video_address\": \"string\",\n    \"keycode\": \"string\",\n    \"creator\": \"string\",\n    \"path\": \"demo/xxx.mp4\"\n  }\n\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Arrange",
    "name": "GetMaterialPanovideo"
  },
  {
    "type": "get",
    "url": "/material/panovideo/group",
    "title": "获取全景视频组",
    "group": "Arrange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>单页记录条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n    \"group_id\":  \"分组ID\",\n    \"name\": \"分组名称\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Arrange",
    "name": "GetMaterialPanovideoGroup"
  },
  {
    "type": "get",
    "url": "topics/get_data",
    "title": "获取专题信息",
    "group": "Arrange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "topic_id",
            "description": "<p>专题ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n [\n  {\n    \"topic_name\": \"string\"\n  }\n\t]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Arrange",
    "name": "GetTopicsGet_data"
  },
  {
    "type": "post",
    "url": "/material/panophoto",
    "title": "全景切片回调",
    "group": "Arrange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source_file",
            "description": "<p>原图地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keycode",
            "description": "<p>keycode</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source_path",
            "description": "<p>原图目录</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>图片title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "thumb",
            "description": "<p>缩略图地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tiledimage",
            "description": "<p>分辨率</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zero",
            "description": "<p>是否补0，0:补零,1:不补零</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态,0:未转换,9:转换完成</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_size",
            "description": "<p>文件大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "error_message",
            "description": "<p>异常信息</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n {\n  \"retcode\": 0,\n  \"result\": \"success\",\n  \"message\": \"string\",\n  \"detail\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Arrange",
    "name": "PostMaterialPanophoto"
  },
  {
    "type": "post",
    "url": "/material/panophoto/status",
    "title": "全景图片状态更新",
    "group": "Arrange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source_file",
            "description": "<p>原图地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keycode",
            "description": "<p>keycode</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source_path",
            "description": "<p>原图目录</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>图片title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "thumb",
            "description": "<p>缩略图地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tiledimage",
            "description": "<p>分辨率</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zero",
            "description": "<p>是否补0，0:补零,1:不补零</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态,0:未转换,9:转换完成</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_size",
            "description": "<p>文件大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "error_message",
            "description": "<p>异常信息</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"retcode\": 0,\n  \"result\": \"success\",\n  \"message\": \"string\",\n  \"detail\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Arrange",
    "name": "PostMaterialPanophotoStatus"
  },
  {
    "type": "post",
    "url": "topics/set_data",
    "title": "设置专题信息",
    "group": "Arrange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "topic_id",
            "description": "<p>专题ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "topic_name",
            "description": "<p>专题名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "topic_preview_url",
            "description": "<p>专题预览url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "all_topic_content_url",
            "description": "<p>专题配置文件保存路径</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"retcode\": 0,\n  \"result\": \"success\",\n  \"message\": \"string\",\n  \"detail\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Arrange",
    "name": "PostTopicsSet_data"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/interface/main.js",
    "group": "C__Users_x84151591_Desktop_test_interface_main_js",
    "groupTitle": "C__Users_x84151591_Desktop_test_interface_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "topics/get_data",
    "title": "获取专题长文本数据",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "topic_id",
            "description": "<p>专题ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n [\n  {\n    \"data\": \"string\"\n  }\n\t]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Topic",
    "name": "GetTopicsGet_data"
  },
  {
    "type": "get",
    "url": "/topics/master",
    "title": "获取主控专题列表",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>单页记录条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dir",
            "description": "<p>ASC/DESC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序字段</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n {\n     \"total\": 100,\n     \"currentPage\": 1,\n     \"pageSize\": 10,\n     \"items\": [\n         {\n         \"id\":  \"专题ID\",\n         \"name\": \"专题名字\",\n         \"url\": \"专题url\",\n         \"downloadUrl\": \"专题下载地址\",\n         \"thumbsUrl\": \"专题缩略图地址\",\n         \"description\": \"专题描述\",\n         \"publishDate\": \"2019-01-01\",\n         \"topicSize\": \"专题压缩前大小 单位byte\",\n\t\t\t\"publishTimestamp\": \"发布日期的时间戳 --  基于0时区时间戳\"\n         },\n  {}\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Topic",
    "name": "GetTopicsMaster"
  },
  {
    "type": "get",
    "url": "/topics/slave",
    "title": "获取被控专题列表",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>单页记录条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dir",
            "description": "<p>ASC/DESC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序字段</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n {\n     \"total\": 100,\n     \"currentPage\": 1,\n     \"pageSize\": 10,\n     \"items\": [\n         {\n         \"id\":  \"专题ID\",\n         \"name\": \"专题名字\",\n         \"url\": \"专题url\",\n         \"downloadUrl\": \"专题下载地址\",\n         \"thumbsUrl\": \"专题缩略图地址\",\n         \"description\": \"专题描述\",\n         \"publishDate\": \"发布日期\",\n         \"topicSize\": \"专题压缩前大小 单位byte\",\n\t\t\t\"publishTimestamp\": \"发布日期的时间戳 --  基于0时区时间戳\"\n         },\n  {}\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Topic",
    "name": "GetTopicsSlave"
  },
  {
    "type": "post",
    "url": "/topics/publishTimestamp",
    "title": "获取专题发布日期timestamp",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "topicIds",
            "description": "<p>专题ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-body :",
          "content": "{\n  \"topicIds\": [\"1\", \"2\", \"3\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"topicTimestamps\":\n [\n     {\n         \"topicId\": \"1\",\n         \"publishTimestamp\": \"12343435435\"\n     },\n     {\n         \"topicId\": \"2\",\n         \"publishTimestamp\": \"12343435435\"\n     },\n     {\n         \"topicId\": \"3\",\n         \"publishTimestamp\": \"12343435435\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Topic",
    "name": "PostTopicsPublishtimestamp"
  },
  {
    "type": "post",
    "url": "topics/set_data",
    "title": "设置专题长文本数据",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "topic_id",
            "description": "<p>专题ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data_text",
            "description": "<p>专题长文本数据</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"retcode\": 0,\n  \"result\": \"success\",\n  \"message\": \"string\",\n  \"detail\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "Topic",
    "name": "PostTopicsSet_data"
  },
  {
    "type": "post",
    "url": "/cas/login",
    "title": "登录,获取访问凭证(AccessToken)",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IMEI",
            "description": "<p>终端唯一标识号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientId",
            "description": "<p>终端唯一标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientParam",
            "description": "<p>终端唯一标识密码(解密clientSecret得到)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>请求结果状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>访问凭证.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"result\": \"success\",\n   \"accessToken\": \"123456\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "User",
    "name": "PostCasLogin"
  },
  {
    "type": "post",
    "url": "/cas/logout",
    "title": "登出",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IMEI",
            "description": "<p>终端唯一标识号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientId",
            "description": "<p>终端唯一标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientParam",
            "description": "<p>终端唯一标识密码(解密clientSecret得到)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>访问凭证</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"result\": \"success\",\n   \"errorMessage\": \"success\",\n   \"errorCode\": \"0\",\n   \"detail\": \"test_xc\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "User",
    "name": "PostCasLogout"
  },
  {
    "type": "post",
    "url": "/cas/terminal/getToken",
    "title": "获取客户端唯一标识,密码",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IMEI",
            "description": "<p>终端唯一标识号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwd",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientId",
            "description": "<p>客户端唯一标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientSecret",
            "description": "<p>客户端唯一标识密码.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"result\": \"success\",\n   \"clientId\": \"123456\",\n   \"clientSecret\": \"asfsdfdsf\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/x84151591/Desktop/test/apidoc.js",
    "groupTitle": "User",
    "name": "PostCasTerminalGettoken"
  }
] });
