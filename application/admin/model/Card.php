<?php

namespace app\admin\model;

use think\Model;

class Card extends Model {

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';
    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';

    public function staff() {
        return $this->belongsTo('Staff', 'staff_id')->setEagerlyType(0);
    }
    public function channel() {
        return $this->belongsTo('Channel', 'channel_id')->setEagerlyType(0);
    }
    
}
