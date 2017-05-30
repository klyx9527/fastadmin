define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'company/card/index',
                    add_url: 'company/card/add',
                    edit_url: 'company/card/edit',
                    del_url: 'company/card/del',
                    multi_url: 'company/card/multi',
                    table: 'card',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                sortName: 'id',
                columns: [
                    [
                        {field: 'state', checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'name', title: __('Name')},
                        {field: 'tel', title: __('Tel')},
                        {field: 'webchat', title: __('Webchat')},
                        {field: 'staff.name', title: __('staff.name')},
                        {field: 'channel.chaname', title: __('channel.name')},
                        {field: 'relname', title: __('Relname')},
                        {field: 'createtime', title: __('Createtime'), formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), formatter: Table.api.formatter.datetime},
                        {field: 'babytime', title: __('Babytime'), formatter: Table.api.formatter.datetime},
                        {field: 'remark', title: __('Remark')},
                        {field: 'content', title: __('Content')},
                      
                        {field: 'operate', title: __('Operate'), events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});