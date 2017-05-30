<?php

namespace app\admin\model;

use think\Model;

class Channel extends Model
{

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    
    public function  card() {
        return $this->belongsTo('Card', 'channel_id')->setEagerlyType(0);
    }
}
