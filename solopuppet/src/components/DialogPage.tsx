import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, Node, Edge } from 'react-flow-renderer';

const DialogPage: React.FC = () => {
  const nodes: Node[] = [
    { id: '1', type: 'input', data: { label: 'Start' }, position: { x: 250, y: 5 } },
    { id: '2', data: { label: 'Question 1' }, position: { x: 100, y: 100 } },
    { id: '3', data: { label: 'Question 2' }, position: { x: 400, y: 100 } }
  ];

  const edges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e1-3', source: '1', target: '3', animated: true }
  ];

  return (
    <div>
      <h2>Dialog Interaction</h2>
      <ReactFlow nodes={nodes} edges={edges} style={{ height: 500 }}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default DialogPage; 