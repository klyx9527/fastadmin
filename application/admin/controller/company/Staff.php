<?php

namespace app\admin\controller\company;

use app\common\controller\Backend;
use app\common\model\Staff as StaffModel;
use fast\Tree;
use think\Controller;
use think\Request;

/**
 * 
 *
 * @icon fa fa-circle-o
 */
class Staff extends Backend
{

    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('Staff');
        $tree = Tree::instance();
        $tree->init(StaffModel::getStaffArray(), 'pid');
        $this->categorylist = $tree->getTreeList($tree->getTreeArray(0), 'name');
        $categorydata = [0 => __('None')];
        foreach ($this->categorylist as $k => $v)
        {
            $categorydata[$v['id']] = $v['name'];
        }
        $this->view->assign("typelist", StaffModel::getTypeList());
        $this->view->assign("parentlist", $categorydata);
        
    }
     public function index()
    {
        if ($this->request->isAjax())
        {

            //构造父类select列表选项数据
            $list = $this->categorylist;
            $total = count($list);
            $result = array("total" => $total, "rows" => $list);

            return json($result);
        }
        return $this->view->fetch();
    }
    
}
