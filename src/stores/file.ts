import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
interface ExcelFile<T = any> {
  name: string
  title: string
  columns: T[]
  dataSource: T[]
}
export const useFileStore = defineStore('file', () => {
  const fileList = ref<ExcelFile[]>([
    {
      title: 'sheet',
      dataSource: [
        {
          订单编号: '1772903882049978368',
          租借网点: '小梅沙海洋公园（B区）',
          '用户昵称/联系方式': '18802683245/18802683245',
          租借机柜: '机柜:c15083209350;柜门:沐腾-001',
          '使用时长/计费': '51分钟/0',
          '订单金额/实付': '0/0.02元',
          '下单时间/结束时间/超时时间': '2024-03-27 16:29:59/2024-03-27 17:20:01/2024-03-27 20:29:59',
          下单方式: '手环下单',
          支付方式: '微信',
          备注: '',
          状态: '已结束',
        },
        {
          订单编号: '1772877515215638528',
          租借网点: '小梅沙海洋公园（B区）',
          '用户昵称/联系方式': '18802683245/18802683245',
          租借机柜: '机柜:c15083209350;柜门:沐腾-001',
          '使用时长/计费': '14分钟/0',
          '订单金额/实付': '0/0元',
          '下单时间/结束时间/超时时间': '2024-03-27 14:45:12/2024-03-27 14:58:55/2024-03-27 18:45:12',
          下单方式: '手环下单',
          支付方式: '现金',
          备注: '',
          状态: '已结束',
        },
        {
          订单编号: '1772240125534040064',
          租借网点: 'sukie测试网点',
          '用户昵称/联系方式': 'Sukieeeeeeeeeeeeeeee/15972912867',
          租借机柜: '机柜:c98141279579;柜门:B-001',
          '使用时长/计费': '18分钟/0.04',
          '订单金额/实付': '0.04/0.01元',
          '下单时间/结束时间/超时时间': '2024-03-25 20:32:26/2024-03-25 20:50:31/2024-03-25 20:38:26',
          下单方式: '手机号密码下单',
          支付方式: '微信',
          备注: '',
          状态: '已结束',
        },
        {
          订单编号: '1772199135646334976',
          租借网点: 'sukie测试网点',
          '用户昵称/联系方式': '19196018392/19196018392',
          租借机柜: '机柜:c98141279579;柜门:B-002',
          '使用时长/计费': '1分钟/0',
          '订单金额/实付': '0/0元',
          '下单时间/结束时间/超时时间': '2024-03-25 17:49:34/2024-03-25 17:49:58/2024-03-25 17:55:34',
          下单方式: '手机号密码下单',
          支付方式: '微信',
          备注: '',
          状态: '已结束',
        },
        {
          订单编号: '1772193899644993536',
          租借网点: 'sukie测试网点',
          '用户昵称/联系方式': '19196018392/19196018392',
          租借机柜: '机柜:c98141279579;柜门:B-001',
          '使用时长/计费': '18分钟/0.04',
          '订单金额/实付': '0.04/0元',
          '下单时间/结束时间/超时时间': '2024-03-25 17:28:45/2024-03-25 17:45:48/2024-03-25 17:34:45',
          下单方式: '手机号密码下单',
          支付方式: '微信',
          备注: '',
          状态: '已结束',
        },
        {
          订单编号: '1772185754893828096',
          租借网点: 'sukie测试网点',
          '用户昵称/联系方式': 'Sukieeeeeeeeeeeeeeee/15972912867',
          租借机柜: '机柜:c98141279579;柜门:B-001',
          '使用时长/计费': '18分钟/0.04',
          '订单金额/实付': '0.04/0.01元',
          '下单时间/结束时间/超时时间': '2024-03-25 16:56:23/2024-03-25 17:14:27/2024-03-25 17:02:23',
          下单方式: '手机号密码下单',
          支付方式: '微信',
          备注: '',
          状态: '已结束',
        },
        {
          订单编号: '1772177483420155904',
          租借网点: 'sukie测试网点',
          '用户昵称/联系方式': 'Sukieeeeeeeeeeeeeeee/15972912867',
          租借机柜: '机柜:c98141279579;柜门:B-001',
          '使用时长/计费': '29分钟/0.06',
          '订单金额/实付': '0.06/0元',
          '下单时间/结束时间/超时时间': '2024-03-25 16:23:30/2024-03-25 16:51:47/2024-03-25 16:41:30',
          下单方式: '手机号密码下单',
          支付方式: '微信',
          备注: '',
          状态: '已结束',
        },
        {
          订单编号: '1772170193601699840',
          租借网点: 'sukie测试网点',
          '用户昵称/联系方式': 'Sukieeeeeeeeeeeeeeee/15972912867',
          租借机柜: '机柜:c98141279579;柜门:B-001',
          '使用时长/计费': '16分钟/0.04',
          '订单金额/实付': '0.04/0.04元',
          '下单时间/结束时间/超时时间': '2024-03-25 15:54:33/2024-03-25 16:10:18/2024-03-25 16:11:33',
          下单方式: '手机号密码下单',
          支付方式: '微信',
          备注: '',
          状态: '已结束',
        },
        {
          订单编号: '1772164248616181760',
          租借网点: 'sukie测试网点',
          '用户昵称/联系方式': 'Sukieeeeeeeeeeeeeeee/15972912867',
          租借机柜: '机柜:c98141279579;柜门:B-001',
          '使用时长/计费': '18分钟/0.05',
          '订单金额/实付': '0.05/0元',
          '下单时间/结束时间/超时时间': '2024-03-25 15:30:55/2024-03-25 15:48:58/2024-03-25 15:38:55',
          下单方式: '手机号密码下单',
          支付方式: '微信',
          备注: '',
          状态: '已结束',
        },
        {
          订单编号: '1772159175351738368',
          租借网点: 'sukie测试网点',
          '用户昵称/联系方式': 'Sukieeeeeeeeeeeeeeee/15972912867',
          租借机柜: '机柜:c98141279579;柜门:B-001',
          '使用时长/计费': '14分钟/0.03',
          '订单金额/实付': '0.03/0元',
          '下单时间/结束时间/超时时间': '2024-03-25 15:10:46/2024-03-25 15:23:47/2024-03-25 15:18:46',
          下单方式: '手机号密码下单',
          支付方式: '微信',
          备注: '',
          状态: '已结束',
        },
      ],
      columns: [
        {
          title: '订单编号',
          dataIndex: '订单编号',
        },
        {
          title: '租借网点',
          dataIndex: '租借网点',
        },
        {
          title: '用户昵称/联系方式',
          dataIndex: '用户昵称/联系方式',
        },
        {
          title: '租借机柜',
          dataIndex: '租借机柜',
        },
        {
          title: '使用时长/计费',
          dataIndex: '使用时长/计费',
        },
        {
          title: '订单金额/实付',
          dataIndex: '订单金额/实付',
        },
        {
          title: '下单时间/结束时间/超时时间',
          dataIndex: '下单时间/结束时间/超时时间',
        },
        {
          title: '下单方式',
          dataIndex: '下单方式',
        },
        {
          title: '支付方式',
          dataIndex: '支付方式',
        },
        {
          title: '备注',
          dataIndex: '备注',
        },
        {
          title: '状态',
          dataIndex: '状态',
        },
      ],
      name: 'data.xlsx',
    },
  ])
  const getFileList = computed(() => fileList.value)

  return { fileList, getFileList }
})