import { IForm } from '@/base-ui/form';

export const modelConfig: IForm = {
  formItems: [
    {
      field: 'Goodname',
      type: 'input',
      label: '商品名',
      rules: [],
      placeholder: '请输入商品名'
    },
    {
      field: 'Cid',
      type: 'select',
      label: '类别',
      rules: [],
      placeholder: '请选择类别',
      options: []
    },
    {
      field: 'Explain',
      type: 'input',
      label: '描述',
      rules: [],
      placeholder: '请输入描述'
    },
    {
      field: 'advertise',
      type: 'input',
      label: '广告词',
      rules: [],
      placeholder: '请输入广告词'
    },
    {
      field: 'price',
      type: 'input',
      label: '价格',
      rules: [],
      placeholder: '请输入价格'
    },
    {
      field: 'color',
      type: 'input',
      label: '颜色',
      rules: [],
      placeholder: '请输入颜色'
    },
    {
      field: 'Type',
      type: 'input',
      label: '类型',
      rules: [],
      placeholder: '请输入类型'
    },
    {
      field: 'Goodimg',
      type: 'upload',
      label: '商品图',
      rules: [],
      listType: 'text'
    },
    {
      field: 'Swiper',
      type: 'upload',
      label: '轮播图',
      rules: [],
      listType: 'picture-card'
    },
    {
      field: 'Detail',
      type: 'upload',
      label: '详细图',
      rules: [],
      listType: 'picture-card'
    }
  ],
  labelWidth: '100px',
  colLayout: {
    span: 24
  },
  itemStyle: {
    padding: '5px'
  }
};
