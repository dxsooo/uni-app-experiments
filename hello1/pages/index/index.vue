<template>
	<view class="content">
		<l-echart ref="chart" @finished="init"></l-echart>
		<image class="logo" src="/static/logo.png"></image>
	</view>
</template>

<script>
// 按需引入 开始
import * as echarts from 'echarts/core';
import {LineChart, BarChart} from 'echarts/charts';
import {TitleComponent,TooltipComponent,GridComponent, DatasetComponent, TransformComponent, LegendComponent } from 'echarts/components';
// // 标签自动布局，全局过渡动画等特性
import {LabelLayout,UniversalTransition} from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 是必须的一步
import {CanvasRenderer} from 'echarts/renderers';

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
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
]);
//-------------按需引入结束------------------------

export default {
    data() {
        return {
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow' 
                    },
                    confine: true
                },
                legend: {
                    data: ['热度', '正面', '负面']
                },
                grid: {
                    left: 20,
                    right: 20,
                    bottom: 15,
                    top: 40,
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#999999'
                            }
                        },
                        axisLabel: {
                            color: '#666666'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'category',
                        axisTick: { show: false },
                        data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
                        axisLine: {
                            lineStyle: {
                                color: '#999999'
                            }
                        },
                        axisLabel: {
                            color: '#666666'
                        }
                    }
                ],
                series: [
                    {
                        name: '热度',
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'inside'
                            }
                        },
                        data: [300, 270, 340, 344, 300, 320, 310],
                    },
                    {
                        name: '正面',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        data: [120, 102, 141, 174, 190, 250, 220]
                    },
                    {
                        name: '负面',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'left'
                            }
                        },
                        data: [-20, -32, -21, -34, -90, -130, -110]
                    }
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
