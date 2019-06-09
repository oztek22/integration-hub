/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { withRouter } from 'react-router-dom';
import LeftArrow from '../../assets/images/left-arrow.svg';
import TruncateIcon from '../../assets/images/truncate.svg';
import AdditionIcon from '../../assets/images/addition.svg';
import SubstractionIcon from '../../assets/images/substraction.svg';
import AggregatorIcon from '../../assets/images/aggregate-tab.svg';
import More from '../../assets/images/more.svg';
import Less from '../../assets/images/less.svg';
import DataMasking from '../../assets/images/data-masking.svg';
import WebService from '../../assets/images/webservices.svg';
import Union from '../../assets/images/union.svg';
import Structure from '../../assets/images/structureparser.svg';
import ZoomIn from '../../assets/images/zoom-in.svg';
import ZoomOut from '../../assets/images/zoom-out.svg';
import Delete from '../../assets/images/delete.svg';
import GGEditor, { Flow, ItemPanel, Item, Command, Toolbar, withPropsAPI } from 'gg-editor';
import { Button } from 'antd';
import {
  MappingWrapper,
  LargeContainer,
  InnerMapping,
  MappingChart,
} from './newMappingStyle';
import TransformationSetting from './transformation';
const axios = require('axios');

const chartData = {
  nodes: [{
    type: 'node',
    size: '106*56',
    shape: 'flow-rect',
    color: '#eeedf2',
    label: 'source',
    x: 55,
    y: 55,
    id: 'src',
    itemType: 'src',
    icon: DataMasking
  }, {
    type: 'node',
    size: '106*56',
    shape: 'flow-rect',
    color: '#eeedf2',
    label: 'destination',
    x: 900,
    y: 300,
    id: 'dest',
    itemType: 'dest',
    icon: DataMasking
  }],
  edges: [{
    source: 'src',
    target: 'dest',
    id: 'src-dest'
  }],
};

const mappingMoreOptions = [
  {
    label: 'Aggregator',
    icon: AggregatorIcon
  },
  {
    label: 'Data Masking',
    icon: DataMasking
  },
  {
    label: 'Web Service',
    icon: WebService
  }
]

const mappingOptions = [
  {
    label: 'Truncate',
    icon: TruncateIcon
  },
  {
    label: 'Addition',
    icon: AdditionIcon
  },
  {
    label: 'Substraction',
    icon: SubstractionIcon
  },
  {
    label: 'Union',
    icon: Union
  },
  {
    label: 'Structure Parser',
    icon: Structure
  }
];

const chartResponse = {
  "statusCode": 200,
  "result": {
    "uid": null,
    "name": "map_5",
    "createdby": "jiya",
    "mappings": [
      {
        "sequence": "1",
        "src_col": "Recipient Name",
        "des_col": "recipient_name",
        "transformation": null
      },
      {
        "sequence": "2",
        "src_col": "Description",
        "des_col": "description",
        "transformation": null
      },
      {
        "sequence": "3",
        "src_col": "Award ID",
        "des_col": "award_id",
        "transformation": null
      }
    ],
    "srcid": "1",
    "desid": "2"
  }
};



class NewMapping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartName: '',
      isMore: false,
      mappingOptions: mappingOptions,
      selectedNode: null,
      chartData: null,
      sources: [
        { key: '1', name: 'Source 1' },
        { key: 'source2', name: 'Source 2' },
        { key: 'source3', name: 'Source 3' }
      ],
      destinations: [
        { key: 'destination1', name: 'Destination 1' },
        { key: '2', name: 'Destination 2' },
        { key: 'destination3', name: 'Destination 3' },
        { key: 'destination4', name: 'Destination 4' }
      ]
    }
  }
  componentDidMount() {
    console.log(JSON.parse(JSON.stringify(this.props)));
    this.getSources();
    this.getDestinations();
    this.setChart(chartResponse);
  }

  // wait for getting source and destination
  setChart(response) {
    const savedChart = JSON.parse(JSON.stringify(chartData));
    savedChart.nodes[0].id = response.result.srcid;
    savedChart.nodes[0].label = this.getDataLabel(this.state.sources, response.result.srcid);
    savedChart.nodes[1].id = response.result.desid;
    savedChart.nodes[1].label = this.getDataLabel(this.state.destinations, response.result.desid);
    const xDiff = 800 / response.result.mappings.length;
    const yDiff = xDiff / 4;
    let currentX = 55;
    let currentY = 55;
    response.result.mappings.forEach((node, index) => {
      currentX = currentX + xDiff;
      currentY = currentY + yDiff;
      savedChart.nodes.push({
        type: 'node',
        size: '106*56',
        shape: 'flow-rect',
        x: currentX,
        y: currentY,
        id: currentX,
        label: mappingOptions[0].label + index,
        color: "#eeedf2",
        itemType: mappingOptions[0].label,
        src_col: node.src_col,
        des_col: node.des_col,
        transformation: node.transformation,
        sequence: node.sequence,
        icon: mappingOptions[0].icon
      });
    });
    savedChart.edges = this.setChartEdges(savedChart.nodes);
    console.log(savedChart);
    this.setState({
      chartData: JSON.parse(JSON.stringify(savedChart))
    });
  }

  setChartEdges(nodes) {
    const edges = [];
    nodes.forEach((node, index) => {
      if (index === nodes.length - 1) {
        const srcId = index === 1 ? nodes[0].id : node.id;
        edges.push({
          source: srcId,
          target: nodes[1].id,
          id: srcId + '-' + node.id
        });
      }
      if (index === 2) {
        edges.push({
          source: nodes[0].id,
          target: node.id,
          id: nodes[0].id + '-' + node.id
        });
      } else if (index > 2) {
        edges.push({
          source: nodes[index - 1].id,
          target: node.id,
          id: nodes[index - 1].id + '-' + node.id
        });
      }
    });
    return edges;
  }

  getDataLabel(targets, id) {
    const selectedTarget = targets.find((e) => {
      return e.key === id;
    });
    if (!selectedTarget) {
      return 'undefined';
    }
    return selectedTarget.name;
  }


  getSources() {
    this.setState({
      sources: [
        { key: '1', name: 'Source 1' },
        { key: 'source2', name: 'Source 2' },
        { key: 'source3', name: 'Source 3' }
      ]
    });
  }
  getDestinations() {
    this.setState({
      destinations: [
        { key: 'destination1', name: 'Destination 1' },
        { key: '2', name: 'Destination 2' },
        { key: 'destination3', name: 'Destination 3' },
        { key: 'destination4', name: 'Destination 4' }
      ]
    });
  }
  isMoreClicked() {
    this.setState({ isMore: !this.state.isMore, mappingOptions: this.state.isMore ? mappingOptions : mappingOptions.concat(mappingMoreOptions) });
  }
  canvasClicked(event) {
    console.log('event', event);
  }
  onBeforeChartChange(event) {
    console.log('onBeforeChartChange', event);
    if (event.action === 'add' && event.model.type === 'node') {
      const chartData = this.state.chartData;
      this.setState({ chartData: null });
      chartData.nodes.push(event.model);
      chartData.edges.pop();
      if (chartData.nodes.length === 3) {
        chartData.edges.push({
          source: chartData.nodes[0].id,
          target: event.model.id,
          id: chartData.nodes[0].id + '-' + event.model.id,
        });
        chartData.edges.push({
          source: event.model.id,
          target: chartData.nodes[1].id,
          id: event.model.id + '-' + chartData.nodes[1].id,
        });
      } else {
        chartData.edges.push({
          source: chartData.nodes[chartData.nodes.length - 2].id,
          target: event.model.id,
          id: chartData.nodes[chartData.nodes.length - 2].id + '-' + event.model.id,
        });
        chartData.edges.push({
          source: event.model.id,
          target: chartData.nodes[1].id,
          id: event.model.id + '-' + chartData.nodes[1].id,
        });

      }
      this.setState({ chartData: JSON.parse(JSON.stringify(chartData)) }, () => {
        console.log(this.state.chartData);
      });
    }
  }
  nodeClicked(event) {
    console.log('node-clicked', event.item.model);
    this.setState({ selectedNode: event.item.model });
  }
  itemDropped(command) {
    console.log('command', command);
  }
  updateSelectedNode(node) {
    const chartData = this.state.chartData;
    // this.setState({ chartData: null }, () => {
    const savedNode = chartData.nodes.find((e) => e.id === node.id);
    savedNode.src_col = node.src_col;
    savedNode.des_col = node.des_col;
    savedNode.transformation = node.transformation;
    savedNode.label = node.label;
    this.setState({ chartData: chartData });
    console.log(this.props);
    // });
  }
  saveMapping() {
    const mapping = [];
    this.state.chartData.nodes.forEach((node, index) => {
      if (node.itemType !== 'src' && node.itemType !== 'dest') {
        mapping.push({
          sequence: node.sequence ? node.sequence : index - 1,
          src_col: node.src_col,
          des_col: node.des_col,
          formula: node.transformation
        })
      }
    });
    const rawData = {
      'func': 'write',
      'connObj': {
        'name': this.state.chartName,
        'srcid': '1',
        'desid': '2',
        'mappings': mapping
      }
    };
    console.log(rawData);
    axios.post('https://q4tp0m1cmb.execute-api.us-east-1.amazonaws.com/dev/', rawData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    if (!this.state.chartData) {
      return (null);
    }
    return (
      <MappingWrapper>
        <LargeContainer>
          <InnerMapping>
            <div className="back-header">
              <div className="backAction" onClick={() => { this.props.history.push('/mapping-profile') }}>
                <div className="arrow-img">
                  <img src={LeftArrow} alt="leftarrow" />
                </div>
                <div className="back-text">Back to Mapping List</div>
              </div>
            </div>
            <div className="mapping-title">Create a New Mapping Profile</div>
            <div className="mapping-input-section">
              <div className="mapping-label">Name the Mapping Profile</div>
              <div className="mapping-input">
                <input type="text" placeholder="Changing the name format" value={this.state.chartName} onChange={(e) => { this.setState({ chartName: e.target.value }) }} />
              </div>
            </div>
            <MappingChart>
              <div className="mapping-label">Design the Mapping profile</div>

              <GGEditor
                onAfterCommandExecute={({ command }) => {
                  this.itemDropped(command);
                }}>
                <div className="mapping-charts-container">
                  <div className="mapping-chart-content">
                    <div className="mapping-chart-left-part">
                      <div className="chart-tabs-container">
                        <div className="chart-tabs-top">
                          <div className="chart-inner-tab">
                            <ItemPanel>
                              <ul className="chart-tabs-list">
                                {this.state.mappingOptions.map((value, index) => {
                                  return (
                                    <Item
                                      key={index}
                                      type="node"
                                      size="106*56"
                                      shape="flow-rect"
                                      model={{
                                        label: value.label,
                                        color: "#eeedf2",
                                        itemType: value.label,
                                        src_col: '',
                                        des_col: '',
                                        transformation: '',
                                        icon: value.icon
                                      }}>
                                      <li className="chart-tabs-list-item">
                                        <div className="chart-inner-item-content">
                                          <div className="chart-icon">
                                            <img src={value.icon} alt={value.label} />
                                          </div>
                                          <div className="chart-text">{value.label}</div>
                                        </div>
                                      </li>
                                    </Item>
                                  )
                                })}
                              </ul>
                            </ItemPanel>
                          </div>
                        </div>
                        <div className="chat-tabs-bottom" onClick={() => { this.isMoreClicked() }}>
                          <div className="bottom-inner">
                            {this.state.isMore ?
                              <div className="bottom-img">
                                <img src={Less} alt="less" />
                              </div>
                              :
                              <div className="bottom-img">
                                <img src={More} alt="more" />
                              </div>
                            }

                            <span>{this.state.isMore ? 'Less' : 'More'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mapping-chart-right-part">
                      <div className="chart-right-inner">
                        <div className="chart-right-header">
                          <div className="chart-title">
                            Drag and Drop the transformers from left panel
                            </div>
                          <Toolbar>
                            <div className="icons-list-container">
                              <ul className="icon-list">
                                <li><Command name="zoomIn"><div className="icon-item"><img src={ZoomIn} alt="aggregate" /></div></Command></li>
                                <li><Command name="zoomOut"><div className="icon-item"><img src={ZoomOut} alt="aggregate" /></div></Command></li>
                                <li><Command name="delete"><div className="icon-item"><img src={Delete} alt="aggregate" /></div></Command></li>
                                <li>
                                  <Button
                                    type="primary"
                                    onClick={() => { this.saveMapping() }}
                                  >
                                    Save
                            </Button>
                                </li>
                              </ul>
                            </div>
                          </Toolbar>
                        </div>
                        <div className="chart-right-bottom">

                          <Flow style={{ flex: 1, height: 395 }} data={this.state.chartData} onClick={(e) => {
                            this.canvasClicked(e);
                          }} onNodeClick={(e) => { this.nodeClicked(e) }} onBeforeChange={(e) => { this.onBeforeChartChange(e) }} />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GGEditor>
            </MappingChart>
            {this.state.selectedNode ?
              <TransformationSetting updateSelectedNode={(e) => { this.updateSelectedNode(e) }}
                selectedNode={this.state.selectedNode}
                sources={this.state.selectedNode.itemType === 'src' ? this.state.sources : this.state.destinations}
              ></TransformationSetting>
              : null}
          </InnerMapping>
        </LargeContainer>
      </MappingWrapper>
    );
  }
};

export default withPropsAPI(withRouter(NewMapping));
