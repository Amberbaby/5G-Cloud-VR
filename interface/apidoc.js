/**
 * @api {post} /cas/logout 登出
 * @apiGroup User
 *
 * @apiParam {String} IMEI 终端唯一标识号
 * @apiParam {String} username 用户名
 * @apiParam {String} clientId 终端唯一标识
 * @apiParam {String} clientParam 终端唯一标识密码(解密clientSecret得到)
 * @apiParam {String} access_token 访问凭证
 *
 * @apiSuccessExample {json} Success-Response:
 *
 *   {
 *      "result": "success",
 *      "errorMessage": "success",
 *      "errorCode": "0",
 *      "detail": "test_xc"
 *    }
 *
 */

/**
 * @api {post} /cas/terminal/getToken 获取客户端唯一标识,密码
 * @apiGroup User
 *
 * @apiParam {String} IMEI 终端唯一标识号
 * @apiParam {String} username 用户名
 * @apiParam {String} passwd 密码
 *
 * @apiSuccess {String} clientId 客户端唯一标识
 * @apiSuccess {String} clientSecret 客户端唯一标识密码.
 * @apiSuccessExample {json} Success-Response:
 *
 *   {
 *      "result": "success",
 *      "clientId": "123456",
 *      "clientSecret": "asfsdfdsf"
 *    }
 */

/**
 * @api {post} /cas/login 登录,获取访问凭证(AccessToken)
 * @apiGroup User
 *
 * @apiParam {String} IMEI 终端唯一标识号
 * @apiParam {String} username 用户名
 * @apiParam {String} clientId 终端唯一标识
 * @apiParam {String} clientParam 终端唯一标识密码(解密clientSecret得到)
 *
 * @apiSuccess {String} result 请求结果状态
 * @apiSuccess {String} accessToken 访问凭证.
 * @apiSuccessExample {json} Success-Response:
 *
 *   {
 *      "result": "success",
 *      "accessToken": "123456"
 *    }
 *
 */

/**
 * @api {get} /topics/master 获取主控专题列表
 * @apiGroup Topic
 *
 * @apiParam {Number} page 页码
 * @apiParam {Number} size 单页记录条数
 * @apiParam {String} dir ASC/DESC
 * @apiParam {String} sort 排序字段
 *
 * @apiSuccessExample {json} Success-Response:
 *
 *  {
 *      "total": 100,
 *      "currentPage": 1,
 *      "pageSize": 10,
 *      "items": [
 *          {
 *          "id":  "专题ID",
 *          "name": "专题名字",
 *          "url": "专题url",
 *          "downloadUrl": "专题下载地址",
 *          "thumbsUrl": "专题缩略图地址",
 *          "description": "专题描述",
 *          "publishDate": "2019-01-01",
 *          "topicSize": "专题压缩前大小 单位byte",
 *			"publishTimestamp": "发布日期的时间戳 --  基于0时区时间戳"
 *          },
 *   {}
 *   ]
 * }
 *
 */

/**
 * @api {get} /topics/slave 获取被控专题列表
 * @apiGroup Topic
 *
 * @apiParam {Number} page 页码
 * @apiParam {Number} size 单页记录条数
 * @apiParam {String} dir ASC/DESC
 * @apiParam {String} sort 排序字段
 *
 * @apiSuccessExample {json} Success-Response:
 *
 *  {
 *      "total": 100,
 *      "currentPage": 1,
 *      "pageSize": 10,
 *      "items": [
 *          {
 *          "id":  "专题ID",
 *          "name": "专题名字",
 *          "url": "专题url",
 *          "downloadUrl": "专题下载地址",
 *          "thumbsUrl": "专题缩略图地址",
 *          "description": "专题描述",
 *          "publishDate": "发布日期",
 *          "topicSize": "专题压缩前大小 单位byte",
 *			"publishTimestamp": "发布日期的时间戳 --  基于0时区时间戳"
 *          },
 *   {}
 *   ]
 * }
 *
 */

 /**
 * @api {get} topics/get_data 获取专题长文本数据
 * @apiGroup Topic
 *
 * @apiParam {String} topic_id 专题ID
 *
 * @apiSuccessExample {json} Success-Response:
 *
 *  [
 *   {
 *     "data": "string"
 *   }
 * 	]
 *
 *
 */
 
 /**
 * @api {post} topics/set_data 设置专题长文本数据
 * @apiGroup Topic
 *
 * @apiParam {String} topic_id 专题ID
 * @apiParam {String} data_text 专题长文本数据
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "retcode": 0,
 *   "result": "success",
 *   "message": "string",
 *   "detail": "string"
 * }
 *
 *
 */
 
 /**
 * @api {get} topics/get_data 获取专题信息
 * @apiGroup Arrange
 *
 * @apiParam {String} topic_id 专题ID
 *
 * @apiSuccessExample {json} Success-Response:
 *
 *  [
 *   {
 *     "topic_name": "string"
 *   }
 * 	]
 *
 *
 */
 
 /**
 * @api {post} topics/set_data 设置专题信息
 * @apiGroup Arrange
 *
 * @apiParam {String} topic_id 专题ID
 * @apiParam {String} topic_name 专题名称
 * @apiParam {String} topic_preview_url 专题预览url
 * @apiParam {String} all_topic_content_url 专题配置文件保存路径
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "retcode": 0,
 *   "result": "success",
 *   "message": "string",
 *   "detail": "string"
 * }
 *
 *
 */

/**
 * @api {post} /topics/publishTimestamp 获取专题发布日期timestamp
 * @apiGroup Topic
 *
 * @apiParam {String[]} topicIds 专题ID

 * @apiParamExample {json} request-body :
 * {
 *   "topicIds": ["1", "2", "3"]
 * }
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *     "topicTimestamps":
 *     [
 *         {
 *             "topicId": "1",
 *             "publishTimestamp": "12343435435"
 *         },
 *         {
 *             "topicId": "2",
 *             "publishTimestamp": "12343435435"
 *         },
 *         {
 *             "topicId": "3",
 *             "publishTimestamp": "12343435435"
 *         }
 *     ]
 *    }
 *
 *
 */
 
/**
 * @api {get} /material/panophoto/group 获取全景图片组
 * @apiGroup Arrange
 *
 * @apiParam {Number} page 页码
 * @apiParam {Number} size 单页记录条数
 *
 * @apiSuccessExample {json} Success-Response:
 *      [
 *          {
 *          "group_id":  "分组Id",
 *          "name": "分组名称"
 *          }
 *      ]
 *
 */

/**
 * @api {get} /material/panovideo/group 获取全景视频组
 * @apiGroup Arrange
 *
 * @apiParam {Number} page 页码
 * @apiParam {Number} size 单页记录条数
 *
 * @apiSuccessExample {json} Success-Response:
 *      [
 *          {
 *          "group_id":  "分组ID",
 *          "name": "分组名称"
 *          }
 *      ]
 *
 */

/**
 * @api {get} /material/normalvideo/group 获取普通视频组
 * @apiGroup Arrange
 *
 * @apiParam {Number} page 页码
 * @apiParam {Number} size 单页记录条数
 *
 * @apiSuccessExample {json} Success-Response:
 *      [
 *          {
 *          "group_id":  "分组ID",
 *          "name": "分组名称"
 *          }
 *      ]
 *
 */

/**
 * @api {get} /material/normalphoto/group 获取普通视频组
 * @apiGroup Arrange
 *
 * @apiParam {Number} page 页码
 * @apiParam {Number} size 单页记录条数
 *
 * @apiSuccessExample {json} Success-Response:
 *      [
 *          {
 *          "group_id":  "分组ID",
 *          "name": "分组名称"
 *          }
 *      ]
 *
 */

/**
 * @api {get} /material/panolive/group 获取全景直播分组
 * @apiGroup Arrange
 *
 * @apiParam {Number} page 页码
 * @apiParam {Number} size 单页记录条数
 *
 * @apiSuccessExample {json} Success-Response:
 *      [
 *          {
 *          "group_id":  "分组ID",
 *          "name": "分组名称"
 *          }
 *      ]
 *
 */

/**
 * @api {get} /material/panolive 获取全景直播
 * @apiGroup Arrange
 *
 * @apiParam {Number} page 页码
 * @apiParam {Number} size 单页记录条数
 * @apiParam {String} group_id 分组ID
 *
 * @apiSuccess {String} live_video_id 直播视频Id
 * @apiSuccess {String} name 直播视频名字
 * @apiSuccess {String} live_address 全景直播地址
 * @apiSuccess {String} push_stream_address 全景直播推流地址
 * @apiSuccess {String} stream_name 全景直播流名称（摄像头地址）
 * @apiSuccess {String} keycode 全景直播keycode
 * @apiSuccess {String} creator 创建者
 * @apiSuccess {String} group_id 组ID
 *
 * @apiSuccessExample {json} Success-Response:
 *      [
 *            {
 *              "live_video_id": "string",
 *              "name": "string",
 *              "live_address": "string",
 *              "push_stream_address": "string",
 *              "stream_name": "string",
 *              "keycode": "string",
 *              "creator": "string",
 *              "group_id": "string"
 *          }
 *      ]
 *
 */

/**
 * @api {get} /material/normalphoto 获取普通图片
 * @apiGroup Arrange
 *
 * @apiParam {Number} page 页码
 * @apiParam {Number} size 单页记录条数
 * @apiParam {String} group_id 分组ID
 *
 * @apiSuccess {String} normal_photo_id 普通图片id
 * @apiSuccess {String} normal_photo_name 普通图片名称
 * @apiSuccess {String} normal_photo_url 普通图片url
 * @apiSuccess {String} creator 创建者
 * @apiSuccess {String} group_id 组ID
 * @apiSuccess {String} path 存储相对路径如: demo/xxx.png
 *
 * @apiSuccessExample {json} Success-Response:
 *      [
 *          {
 *              "normal_photo_id": "string",
 *              "normal_photo_name": "string",
 *              "normal_photo_url": "string",
 *              "keycode": "string",
 *              "creator": "string",
 *              "path": "demo/xxx.png"
 *          }
 *      ]
 *
 */

/**
 * @api {get} /material/normalvideo 获取普通视频
 * @apiGroup Arrange
 *
 * @apiParam {Number} page 页码
 * @apiParam {Number} size 单页记录条数
 * @apiParam {String} group_id 分组ID
 *
 * @apiSuccess {String} normal_video_name 普通视频名称
 * @apiSuccess {String} preview_img_url 预览图地址
 * @apiSuccess {String} normal_video_id 普通视频id
 * @apiSuccess {String} group_id 分组id
 * @apiSuccess {String} video_address 普通视频地址
 * @apiSuccess {String} keycode 普通视频keycode
 * @apiSuccess {String} creator 创建者
 * @apiSuccess {String} path 存储相对路径如: demo/xxx.MP4
 *
 * @apiSuccessExample {json} Success-Response:
 *  [
 *   {
 *     "normal_video_name": "string",
 *     "preview_img_url": "string",
 *     "normal_video_id": "string",
 *     "group_id": "string",
 *     "video_address": "string",
 *     "keycode": "string",
 *     "creator": "string",
 *     "path": "demo/xxx.mp4"
 *   }
 * ]
 *
 *
 */

/**
 * @api {get} /material/panovideo 获取全景视频
 * @apiGroup Arrange
 *
 * @apiParam {Number} page 页码
 * @apiParam {Number} size 单页记录条数
 * @apiParam {String} group_id 分组ID
 *
 * @apiSuccess {String} name 全景视频名称
 * @apiSuccess {String} preview_img_url 全景预览图地址
 * @apiSuccess {String} recorded_video_id 全景视频id
 * @apiSuccess {String} group_id 分组id
 * @apiSuccess {String} video_address 全景视频地址
 * @apiSuccess {String} keycode keycode
 * @apiSuccess {String} creator 创建者
 * @apiSuccess {String} path 存储相对路径如: demo/xxx.png
 *
 * @apiSuccessExample {json} Success-Response:
 *  [
 *
 *   {
 *     "name": "string",
 *     "preview_img_url": "string",
 *     "recorded_video_id": "string",
 *     "group_id": "string",
 *     "video_address": "string",
 *     "keycode": "string",
 *     "creator": "string",
 *     "path": "demo/xxx.mp4"
 *   }
 *
 * ]
 *
 *
 */

/**
 * @api {get} /material/panophoto 获取全景图片
 * @apiGroup Arrange
 *
 * @apiParam {Number} page 页码
 * @apiParam {Number} size 单页记录条数
 * @apiParam {String} group_id 分组ID
 *
 * @apiSuccess {String} id id
 * @apiSuccess {String} source_file 原图地址
 * @apiSuccess {String} keycode keycode
 * @apiSuccess {String} source_path 原图目录
 * @apiSuccess {String} title 图片title
 * @apiSuccess {String} thumb 缩略图地址
 * @apiSuccess {String} tiledimage 分辨率
 * @apiSuccess {String} zero 是否补0，0:补零,1:不补零
 * @apiSuccess {String} status 状态,0:未转换,9:转换完成
 * @apiSuccess {String} description 描述
 * @apiSuccess {String} file_size 文件大小
 * @apiSuccess {String} error_message 异常信息
 * @apiSuccess {String} path 存储相对路径如: demo/xxx.png
 *
 * @apiSuccessExample {json} Success-Response:
 *
 *  [
 *   {
 *     "id": "string",
 *     "source_file": "string",
 *     "keycode": "string",
 *     "source_path": "string",
 *     "title": "string",
 *     "thumb": "string",
 *     "tiledimage": "string",
 *     "zero": "string",
 *     "status": "string",
 *     "description": "string",
 *     "file_size": "string",
 *     "error_message": "string",
 *     "path": "demo/xxx.mp4"
 *   }
 * ]
 *
 *
 */


/**
 * @api {post} /material/panophoto 全景切片回调
 * @apiGroup Arrange
 *
 * @apiParam {String} id id
 * @apiParam {String} source_file 原图地址
 * @apiParam {String} keycode keycode
 * @apiParam {String} source_path 原图目录
 * @apiParam {String} title 图片title
 * @apiParam {String} thumb 缩略图地址
 * @apiParam {String} tiledimage 分辨率
 * @apiParam {String} zero 是否补0，0:补零,1:不补零
 * @apiParam {String} status 状态,0:未转换,9:转换完成
 * @apiParam {String} description 描述
 * @apiParam {String} file_size 文件大小
 * @apiParam {String} error_message 异常信息
 *
 * @apiSuccessExample {json} Success-Response:
 *
 *  {
 *   "retcode": 0,
 *   "result": "success",
 *   "message": "string",
 *   "detail": "string"
 * }
 *
 *
 */

/**
 * @api {post} /material/panophoto/status 全景图片状态更新
 * @apiGroup Arrange
 *
 * @apiParam {String} id id
 * @apiParam {String} source_file 原图地址
 * @apiParam {String} keycode keycode
 * @apiParam {String} source_path 原图目录
 * @apiParam {String} title 图片title
 * @apiParam {String} thumb 缩略图地址
 * @apiParam {String} tiledimage 分辨率
 * @apiParam {String} zero 是否补0，0:补零,1:不补零
 * @apiParam {String} status 状态,0:未转换,9:转换完成
 * @apiParam {String} description 描述
 * @apiParam {String} file_size 文件大小
 * @apiParam {String} error_message 异常信息
 *
 * @apiSuccessExample {json} Success-Response:
 *
 * {
 *   "retcode": 0,
 *   "result": "success",
 *   "message": "string",
 *   "detail": "string"
 * }
 *
 *
 */
 
 