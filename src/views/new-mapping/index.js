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
import {
  MappingWrapper,
  LargeContainer,
  InnerMapping,
  AggregatorTabs,
  MappingChart,
} from './newMappingStyle';
import { Button } from 'antd';
const axios = require('axios');

const chartData = {
  nodes: [{
    type: 'node',
    size: '106*56',
    shape: 'flow-rect',
    color: '#eeedf2',
    label: '<div>asad</div>',
    x: 55,
    y: 55,
    id: 'src',
    itemType: 'src'
  }, {
    type: 'node',
    size: '106*56',
    shape: 'flow-rect',
    color: '#eeedf2',
    label: '结束节点',
    x: 900,
    y: 300,
    id: 'dest',
    itemType: 'dest'
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
]


class TransformationSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'general'
    }
  }
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (

      <AggregatorTabs>
        <div className="mapping-label">Transformer Settings</div>
        <div className="mapping-aggregator-tabs-container">
          <div className="tabs-title">
            <div className="title-img">
              <img src={this.props.imgIcon} alt="aggregate" />
            </div>
            <div className="title-subtext">{this.props.label}</div>
          </div>
          <div className="tabs-content">
            <div className="tabs-inner-content">
              <div className="tabs-left-content">
                <ul className="tabs-list">
                  <li className="tabs-item">
                    <div className={this.state.selectedTab === 'general' ? 'active tabs-inner-text' : 'tabs-inner-text'} onClick={() => { this.setState({ selectedTab: 'general' }) }}>
                      General Settings
                    </div>
                  </li>
                  <li className={this.state.selectedTab === 'fields' ? 'active tabs-inner-text' : 'tabs-inner-text'} onClick={() => { this.setState({ selectedTab: 'fields' }) }}>
                    <div className="tabs-inner-text">SRC/DEST Fields</div>
                  </li>
                  <li className="tabs-item">
                    <div className="tabs-inner-text">Group By</div>
                  </li>
                  <li className="tabs-item">
                    <div className="tabs-inner-text">Aggregate</div>
                  </li>
                  <li className="tabs-item">
                    <div className="tabs-inner-text">Advanced</div>
                  </li>
                </ul>
              </div>
              {this.state.selectedTab === 'general' ?
                <div className="tabs-right-content">
                  <div className="mapping-input-section">
                    <div className="mapping-label">Name</div>
                    <div className="mapping-input">
                      <input
                        type="text"
                        placeholder="Changing the name format"
                      />
                    </div>
                  </div>
                  <div className="mapping-textarea-section">
                    <div className="mapping-label">Description</div>
                    <div className="mapping-textarea">
                      <textarea placeholder="Enter the Description for this Transformer" />
                    </div>
                  </div>
                </div>
                :
                <div className="tabs-right-content">
                  <div className="mapping-input-parent-section">
                    <div className="mapping-input-child-section">
                      <div className="mapping-label">SOURCE COLUMN NAME</div>
                      <div className="mapping-input">
                        <input
                          type="text"
                          placeholder="Changing the name format"
                          value={this.props.selectedNode.src_col}
                          onChange={(e) => { this.props.selectedNode.src_col = e.target.value; this.props.updateSelectedNode(this.props.selectedNode) }}
                        />
                      </div>
                    </div>
                    <div className="mapping-input-child-section">
                      <div className="mapping-label">DESTINATION COLUMN NAME</div>
                      <div className="mapping-input">
                        <input
                          type="text"
                          placeholder="Changing the name format"
                          value={this.props.selectedNode.des_col}
                          onChange={(e) => { this.props.selectedNode.des_col = e.target.value; this.props.updateSelectedNode(this.props.selectedNode) }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mapping-textarea-section">
                    <div className="mapping-label">TRANSFORMATION</div>
                    <div className="mapping-textarea">
                      <textarea placeholder="Enter the Description for this Transformation"
                        value={this.props.selectedNode.transformation}
                        onChange={(e) => { this.props.selectedNode.transformation = e.target.value; this.props.updateSelectedNode(this.props.selectedNode) }}
                      />
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </AggregatorTabs>
    )
  }
}
class NewMapping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMore: false,
      mappingOptions: mappingOptions,
      selectedNode: null,
      chartData: chartData
    }
  }
  componentDidMount() {
    console.log(JSON.parse(JSON.stringify(this.props)));
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
    console.log('node-clicked', event);
    console.log(event.item.model);
    console.log(chartData);
    switch (event.item.model.itemType) {
      case 'src':

        break;
      case 'dest':

        break;
      default:
        this.setState({ selectedNode: event.item.model });
        break;
    }
  }
  itemDropped(command) {
    console.log('command', command);
  }
  updateSelectedNode(node) {
    const chartData = this.state.chartData;
    const previousNode = chartData.nodes.find((e) => e.id === node.id);
    previousNode.src_col = node.src_col;
    previousNode.des_col = node.des_col;
    previousNode.transformation = node.transformation;
    this.setState({ selectedNode: node, chartData: chartData });
  }
  saveMapping() {
    const mapping = [];
    this.state.chartData.nodes.forEach((node, index) => {
      if (node.itemType !== 'src' && node.itemType !== 'dest') {
        mapping.push({
          sequence: index - 1,
          src_col: node.src_col,
          des_col: node.des_col,
          transformation: node.transformation
        })
      }
    });
    const rawData = {
      'func': 'write',
      'connObj': {
        'name': 'map_3',
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
              <div className="backAction">
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
                <input type="text" placeholder="Changing the name format" />
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
                                        transformation: ''
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
              <TransformationSetting updateSelectedNode={(e) => { this.updateSelectedNode(e) }} selectedNode={this.state.selectedNode}></TransformationSetting>
              : null}
          </InnerMapping>
        </LargeContainer>
      </MappingWrapper>
    );
  }
};

export default withPropsAPI(withRouter(NewMapping));
