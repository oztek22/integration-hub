import React from 'react';
import { withPropsAPI } from 'gg-editor';
import { Select } from 'antd';
import {
    AggregatorTabs
} from '../newMappingStyle';

class TransformationSetting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'general'
        }
    }
    getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps, nextProps.selectedNode.itemType);
    }
    updateSelectedNode(selectedNode) {
        this.props.updateSelectedNode(selectedNode);
        console.log(this.props);
    }

    render() {
        return (

            <AggregatorTabs>
                <div className="mapping-label">Transformer Settings</div>
                <div className="mapping-aggregator-tabs-container">
                    <div className="tabs-title">
                        <div className="title-img">
                            <img src={this.props.selectedNode.icon} alt="aggregate" />
                        </div>
                        <div className="title-subtext">{this.props.selectedNode.itemType}</div>
                    </div>
                    <div className="tabs-content">
                        <div className="tabs-inner-content">
                            <div className="tabs-left-content">
                                {this.props.selectedNode.itemType === 'src' || this.props.selectedNode.itemType === 'dest' ?
                                    <ul className="tabs-list">
                                        <li className="tabs-item">
                                            <div className={this.state.selectedTab === 'src' ? 'active tabs-inner-text' : 'tabs-inner-text'} onClick={() => { this.setState({ selectedTab: 'general' }) }}>
                                                General Settings
                  </div>
                                        </li>
                                    </ul>
                                    :
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
                                }
                            </div>
                            {this.props.selectedNode.itemType === 'src' || this.props.selectedNode.itemType === 'dest' ?
                                <div className="tabs-right-content">
                                    <div className="mapping-input-section">
                                        <div className="mapping-label">Name</div>
                                        <div className="mapping-input">
                                            <Select
                                                defaultValue={this.props.selectedNode.label ? this.props.selectedNode.label : undefined}
                                                onChange={value => {
                                                    this.props.selectedNode.label = value;
                                                    console.log(this.props.selectedNode);
                                                    this.updateSelectedNode(this.props.selectedNode);
                                                }
                                                }
                                                style={{ width: '100%' }}
                                                placeholder="Select Source"
                                            >
                                                {this.props.sources.map(source => (
                                                    <Select.Option key={source.key} value={source.key}>
                                                        {source.name}
                                                    </Select.Option>
                                                ))}
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                :
                                this.state.selectedTab === 'general' ?
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
                                    this.state.selectedTab === 'fields' ?
                                        <div className="tabs-right-content">
                                            <div className="mapping-input-parent-section">
                                                <div className="mapping-input-child-section">
                                                    <div className="mapping-label">SOURCE COLUMN NAME</div>
                                                    <div className="mapping-input">
                                                        <input
                                                            type="text"
                                                            placeholder="Changing the name format"
                                                            value={this.props.selectedNode.src_col}
                                                            onChange={(e) => { this.props.selectedNode.src_col = e.target.value; this.updateSelectedNode(this.props.selectedNode) }}
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
                                                            onChange={(e) => { this.props.selectedNode.des_col = e.target.value; this.updateSelectedNode(this.props.selectedNode) }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mapping-textarea-section">
                                                <div className="mapping-label">TRANSFORMATION</div>
                                                <div className="mapping-textarea">
                                                    <textarea placeholder="Enter the Description for this Transformation"
                                                        value={this.props.selectedNode.transformation}
                                                        onChange={(e) => { this.props.selectedNode.transformation = e.target.value; this.updateSelectedNode(this.props.selectedNode) }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        : null
                            }
                        </div>
                    </div>
                </div>
            </AggregatorTabs>
        )
    }
}


export default withPropsAPI(TransformationSetting);