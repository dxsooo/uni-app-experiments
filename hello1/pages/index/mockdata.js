export const mdata = [
        {
          name: '孙悟空',
		  category: 0,
		  symbolSize: 100,
        },
        {
          name: '龟仙人',
		  category: 1,
        },
        {
          name: '无限',
		  category: 1,
        },
        {
          name: '比达',
		  category: 1,
        }
      ]
	  
export const mlinks = [
        // {
        //   source: 0,
        //   target: 1,
        //   symbolSize: [5, 20],
        //   label: {
        //     show: true
        //   },
        //   lineStyle: {
        //     width: 5,
        //     curveness: 0.2
        //   }
        // },
        {
          source: '孙悟空',
          target: '龟仙人',
		  value:100,
        },
		{
		  source: '孙悟空',
		  target: '无限',
		  value:250,
		},
		{
		  source: '无限',
		  target: '龟仙人',
		  value:100,
		},
        {
          source: '孙悟空',
          target: '比达',
		  value:200,
        },
      ]
	  