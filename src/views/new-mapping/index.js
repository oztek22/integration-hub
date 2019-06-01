/** @jsx jsx */
import { jsx } from '@emotion/core';
import { withRouter } from 'react-router-dom';
import LeftArrow from '../../assets/images/left-arrow.svg'
import AggregatorIcon from '../../assets/images/aggregate-tab.svg'
import {
    MappingWrapper,
    LargeContainer,
    InnerMapping,
    AggregatorTabs
} from './newMappingStyle';

const NewMapping = () => {
    return (
        <MappingWrapper>
            <LargeContainer>
                <InnerMapping>
                    <div class="back-header">
                        <div className="backAction">
                            <div className="arrow-img">
                                <img src={LeftArrow} alt="leftarrow" />
                            </div>
                            <div className="back-text">Back to Mapping List</div>
                        </div>
                    </div>
                    <div className="mapping-title">
                        Create a New Mapping Profile
                    </div>
                    <div className="mapping-input-section">
                        <div className="mapping-label">
                            Name the Mapping Profile
                        </div>
                        <div className="mapping-input">
                            <input type="text" placeholder="Changing the name format" />
                        </div>
                    </div>
                    <AggregatorTabs>
                        <div className="mapping-label">
                            Transformer Settings
                        </div>
                        <div className="mapping-aggregator-tabs-container">
                            <div className="tabs-title">

                                <div className="title-img"><img src={AggregatorIcon} alt="aggregate" /></div>
                                <div className="title-subtext">Aggregator Settings</div>

                            </div>
                            <div className="tabs-content">
                                <div className="tabs-inner-content">
                                    <div className="tabs-left-content">
                                        <ul className="tabs-list">
                                            <li className="tabs-item"><div className="active tabs-inner-text">General Settings</div></li>
                                            <li className="tabs-item"><div className="tabs-inner-text">Incoming Fields</div></li>
                                            <li className="tabs-item"><div className="tabs-inner-text">Group By</div></li>
                                            <li className="tabs-item"><div className="tabs-inner-text">Aggregate</div></li>
                                            <li className="tabs-item"><div className="tabs-inner-text">Advanced</div></li>
                                        </ul>
                                    </div>
                                    <div class="tabs-right-content">
                                        <div className="mapping-input-section">
                                            <div className="mapping-label">
                                                Name
                                            </div>
                                            <div className="mapping-input">
                                                <input type="text" placeholder="Changing the name format" />
                                            </div>
                                        </div>
                                        <div className="mapping-textarea-section">
                                            <div className="mapping-label">
                                                Description
                                            </div>
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
    )
};

export default withRouter(NewMapping);