import { message } from "@/utils/message";

// 如果您不习惯tsx写法，可以传slot，然后在template里写
// 需是hooks写法（函数中有return），避免失去响应性
export function useColumns(dialog: any, isEdit: any) {
  const columns: TableColumnList = [
    {
      label: "账户",
      prop: "account",
      cellRenderer: ({ row }) => (
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{row.account}</span>
        </div>
      )
    },
    {
      label: "类别",
      prop: "type",
      cellRenderer: ({ row }) => (
        <div>
          <el-tag>{row.type === "1" ? "医生" : "护士"}</el-tag>
        </div>
      )
    },
    // {
    //   label: "密码",
    //   prop: "password",
    //   cellRenderer: ({ row }) => (
    //     <el-popover effect="light" trigger="hover" placement="top" width="auto">
    //       {{
    //         default: () => (
    //           <>
    //             <div>{row.password}</div>
    //           </>
    //         ),
    //         reference: () => <el-tag>{row.account}</el-tag>
    //       }}
    //     </el-popover>
    //   )
    // },
    {
      label: "操作",
      cellRenderer: ({ index, row }) => (
        <>
          <el-button size="small" onClick={() => handleEdit(index + 1, row)}>
            修改
          </el-button>
          <el-button
            size="small"
            type="danger"
            onClick={() => handleDelete(index + 1, row)}
          >
            删除
          </el-button>
        </>
      )
    }
  ];

  const handleEdit = (index: number, row) => {
    dialog.value = true;
    isEdit.value = true;
    console.log(index, row);
    // message(`您修改了第 ${index} 行，数据为：${JSON.stringify(row)}`, {
    //   type: "success"
    // });
  };

  const handleDelete = (index: number, row) => {
    message(`您删除了第 ${index} 行，数据为：${JSON.stringify(row)}`);
  };

  return {
    columns
  };
}
