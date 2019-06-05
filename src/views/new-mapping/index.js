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
import GGEditor, { Flow, ItemPanel, Item, Command, Toolbar } from 'gg-editor';
import {
  MappingWrapper,
  LargeContainer,
  InnerMapping,
  AggregatorTabs,
  MappingChart,
} from './newMappingStyle';
import { Button } from 'antd';


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
    index: 0,
  }, {
    type: 'node',
    size: '106*56',
    shape: 'flow-rect',
    color: '#eeedf2',
    label: '结束节点',
    x: 55,
    y: 255,
    id: 'dest',
    index: 2,
  }],
  edges: [{
    source: 'src',
    sourceAnchor: 2,
    target: 'dest',
    targetAnchor: 0,
    id: '1',
    index: 1,
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

class NewMapping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMore: false,
      mappingOptions: mappingOptions
    }
  }
  isMoreClicked() {
    this.setState({ isMore: !this.state.isMore, mappingOptions: this.state.isMore ? mappingOptions : mappingOptions.concat(mappingMoreOptions) });
  }
  render() {
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
                  console.log('command', command);
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
                                  >
                                    Save
                            </Button>
                                </li>
                              </ul>
                            </div>
                          </Toolbar>
                        </div>
                        <div className="chart-right-bottom">

                          <Flow style={{ flex: 1, height: 395 }} data={chartData} />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GGEditor>
            </MappingChart>
            <AggregatorTabs>
              <div className="mapping-label">Transformer Settings</div>
              <div className="mapping-aggregator-tabs-container">
                <div className="tabs-title">
                  <div className="title-img">
                    <img src={AggregatorIcon} alt="aggregate" />
                  </div>
                  <div className="title-subtext">Aggregator Settings</div>
                </div>
                <div className="tabs-content">
                  <div className="tabs-inner-content">
                    <div className="tabs-left-content">
                      <ul className="tabs-list">
                        <li className="tabs-item">
                          <div className="active tabs-inner-text">
                            General Settings
                        </div>
                        </li>
                        <li className="tabs-item">
                          <div className="tabs-inner-text">Incoming Fields</div>
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
                  </div>
                </div>
              </div>
            </AggregatorTabs>
          </InnerMapping>
        </LargeContainer>
      </MappingWrapper>
    );
  }
};

export default withRouter(NewMapping);
