export const mdata = [
        {
          name: 'Node 1',
		  isRoot: true,
        },
        {
          name: 'Node 2',
        },
        {
          name: 'Node 3',
        },
        {
          name: 'Node 4',
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
          source: 'Node 2',
          target: 'Node 1',
        },
        {
          source: 'Node 1',
          target: 'Node 3'
        },
        {
          source: 'Node 2',
          target: 'Node 3'
        },
        {
          source: 'Node 2',
          target: 'Node 4'
        },
        {
          source: 'Node 1',
          target: 'Node 4'
        }
      ]
	  