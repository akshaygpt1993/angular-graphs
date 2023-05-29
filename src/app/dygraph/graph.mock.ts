import { GraphData } from "./dygraph.typings";

const graphsData = [
    {
        id: 1,
        title: `Graph 1`,
        data: [
          [new Date("2008/05/07"), 75],
          [new Date("2008/05/08"), 70],
          [new Date("2008/05/09"), 80]
        ],
        options: {
          labels: ['Date','Temperature'],
          animatedZooms: true,
          pointSize: 4,
        }
    } as GraphData,
    {
        id: 2,
        title: `Graph 2`,
        data: [
          [new Date("2008/05/07"), 75],
          [new Date("2008/05/08"), 70],
          [new Date("2008/05/09"), 80]
        ],
        options: {
          labels: ['Date','Temperature'],
          animatedZooms: true,
          pointSize: 4,
        }
    } as GraphData,
    {
        id: 3,
        title: `Graph 3`,
        data: [
          [new Date("2008/05/07"), 75],
          [new Date("2008/05/08"), 70],
          [new Date("2008/05/09"), 80]
        ],
        options: {
          labels: ['Date','Temperature'],
          animatedZooms: true,
          pointSize: 4,
        }
    } as GraphData,
    {
        id: 4,
        title: `Graph 4`,
        data: [
          [new Date("2008/05/07"), 75],
          [new Date("2008/05/08"), 70],
          [new Date("2008/05/09"), 80]
        ],
        options: {
          labels: ['Date','Temperature'],
          animatedZooms: true,
          pointSize: 4,
        }
    } as GraphData,
    {
        id: 5,
        title: `Graph 5`,
        data: [
          [new Date("2008/05/07"), 75],
          [new Date("2008/05/08"), 70],
          [new Date("2008/05/09"), 80]
        ],
        options: {
          labels: ['Date','Temperature'],
          animatedZooms: true,
          pointSize: 4,
        }
    } as GraphData
]

export default graphsData;