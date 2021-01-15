// https://jgraph.github.io/mxgraph/docs/manual.html

const graphModel = 
{ element: "mxGraphModel",
  attributes: {
      dx: 940,
      dy: 670,
      grid: 1,
      gridSize: 10,
      guides: 1,
      tooltips: 1,
      connect: 1,
      arrows: 1,
      fold: 1,
      page: 1,
      pageScale: 1,
      pageWidth: 1100,
      pageHeight: 850,
      math: 0,
      shadow: 0
  },
  content:
  [
      { element: "root",
        attributes: [],
        content: [
            {
                element: "mxCell",
                attributes: { 'id', "yqBiCKyfxECIX-FCSyxT-0" },
                content: []
            },
            { 
                element: "mxCell",
                attributes: { id: "yqBiCKyfxECIX-FCSyxT-1", parent: "yqBiCKyfxECIX-FCSyxT-0" },
                content: []
            },
            {
                element: "mxCell",
                attributes: {id: "yqBiCKyfxECIX-FCSyxT-4", style: "edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;", edge: "1", parent: "yqBiCKyfxECIX-FCSyxT-1", source: "yqBiCKyfxECIX-FCSyxT-2", target: "yqBiCKyfxECIX-FCSyxT-3" },
                content: [ { element: "mxGeometry", attributes: {relative: "1", as: "geometry" }, content: []} ]
            },
            {
                element : "mxCell",
                attributes: {id: "yqBiCKyfxECIX-FCSyxT-2", value: "Box 1", style: "rounded=1;whiteSpace=wrap;html=1;align=center;", vertex: "1", parent: "yqBiCKyfxECIX-FCSyxT-1"},
                content: [ { element: "mxGeometry", attributes: {x: "40", y: "120", width: "120", height: "60", as: "geometry"}, content: [] } ]
            },
            {
                element: "mxCell",
                attributes: {id: "yqBiCKyfxECIX-FCSyxT-3", value: "Box 2", style: "rounded=1;whiteSpace=wrap;html=1;align=center;", vertex: "1", parent: "yqBiCKyfxECIX-FCSyxT-1"},
                content: [ { element: "mxGeometry", attributes: {x: "280", y: "120", width: "120", height: "60", as: "geometry"}, content: [] } ]
            }
        ]
      }
  ]
};
