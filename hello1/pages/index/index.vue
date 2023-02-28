<template>
	<view class="content">
		<l-echart ref="chart" @finished="init"></l-echart>
		<image class="logo" src="/static/logo.png"></image>
	</view>
</template>

<script>
// 按需引入 开始
import * as echarts from 'echarts/core';
import {LineChart, BarChart, GraphChart} from 'echarts/charts';
import {TitleComponent,TooltipComponent,GridComponent, DatasetComponent, TransformComponent, LegendComponent } from 'echarts/components';
// // 标签自动布局，全局过渡动画等特性
import {LabelLayout,UniversalTransition} from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 是必须的一步
import {CanvasRenderer} from 'echarts/renderers';

import {mdata, mlinks} from './mockdata.js'

// 注册必须的组件
echarts.use([
    LegendComponent,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LineChart,
    BarChart,
	GraphChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
]);
//-------------按需引入结束------------------------

export default {
    data() {
        return {
            option: {
				  tooltip: {},
				  animationDurationUpdate: 1500,
				  animationEasingUpdate: 'quinticInOut',
				  series: [
				    {
				      type: 'graph',
				      layout: 'force',
					  force: {
						// edgeLength:[100,200],
						edgeLength:100,
						repulsion:100,
					  },
					  cursor:'pointer',
				      symbolSize: 60,
					  draggable: true,
				      roam: true,
				      label: {
				        show: true
				      },
				      // edgeSymbol: ['circle', 'arrow'],
				      // edgeSymbolSize: [4, 10],
				      // edgeLabel: {
				      //   fontSize: 20
				      // },
				      data: mdata,
					  links: mlinks,
					  categories:[{name:0},{name:1}]
					  },
					  ]
            
            },
        };
    },
    // 组件能被调用必须是组件的节点已经被渲染到页面上
    methods: {
        init() {
            this.$refs.chart.init(echarts, chart => {
                chart.setOption(this.option);
            });
        }
    }
}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
