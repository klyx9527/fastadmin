define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'company/channel/index',
                    add_url: 'company/channel/add',
                    edit_url: 'company/channel/edit',
                    del_url: 'company/channel/del',
                    multi_url: 'company/channel/multi',
                    table: 'channel',
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
                        {field: 'chaname', title: __('Chaname')},
                        {field: 'pid', title: __('Pid')},
                        {field: 'payment', title: __('Payment')},
                        {field: 'data', title: __('Data')},
                        {field: 'cost', title: __('Cost')},
                        {field: 'num', title: __('Num')},
                        {field: 'nominal', title: __('Nominal')},
                        {field: 'average', title: __('Average')},
                        {field: 'ordercost', title: __('Ordercost')},
                        {field: 'Rates', title: __('Rates')},
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