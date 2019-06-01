import React from 'react';
import { Drawer, DatePicker } from 'antd';

import Pill from '../Pill';

import {
  FilterContentWrapper,
  FilterTitle,
  FilterSectionLabel,
  FilterSectionContent,
  PillsContainer,
  ClearFiltersLabel,
  FilterTitleWrapper,
} from './FilterDrawer.style';

const { RangePicker } = DatePicker;

const filterPills = [
  { key: 'copyJob', text: 'Copy Job', selected: false },
  { key: 'dataTransfer', text: 'Data Transfer', selected: false },
  { key: 'delete', text: 'Delete', selected: true },
  { key: 'union', text: 'Union', selected: false },
];

const renderPills = () => {
  return (
    <PillsContainer>
      {filterPills.map(pill => (
        <Pill {...pill} />
      ))}
    </PillsContainer>
  );
};

const FilterDrawer = ({ onClose, visible }) => {
  return (
    <Drawer
      title={undefined}
      placement="right"
      closable={true}
      onClose={onClose}
      visible={visible}
      width={400}
    >
      <FilterContentWrapper>
        <FilterTitleWrapper>
          <FilterTitle>Edit Filters</FilterTitle>
          <ClearFiltersLabel>Clear all Filters</ClearFiltersLabel>
        </FilterTitleWrapper>
        <FilterSectionLabel>Job Types</FilterSectionLabel>
        <FilterSectionContent>{renderPills()}</FilterSectionContent>
        <FilterSectionLabel>Date/Time Range</FilterSectionLabel>
        <FilterSectionContent>
          <RangePicker
            showTime={{ format: 'HH:mm' }}
            format="MMM DD HH:mma"
            placeholder={['Start Time', 'End Time']}
            onChange={() => {}}
            style={{ width: '300px' }}
          />
        </FilterSectionContent>
      </FilterContentWrapper>
    </Drawer>
  );
};

export default FilterDrawer;
