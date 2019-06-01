import styled from '@emotion/styled';
import { theme } from '../../style/theme.js';
export const MappingWrapper = styled.div`
  padding: 72px 0;
`;
export const LargeContainer = styled.div`
  max-width: 1120px;
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 767px) {
    width: 1120px;
  }
`;
export const InnerMapping = styled.div`
    width:100%;
    .back-header{
        display:flex;
        padding:35px 0 30px;
    }
    .backAction{
       display:flex;
       align-item:center;
       cursor:pointer;
    }
    
    .arrow-img{
        flex:0 0 15px;
    }
    .back-text{
        font-size:14px;
        font-family: 'Avenir Medium';
        color: ${theme.color.purpleishBlue};
        padding-left:12px;
    }
    .mapping-title{
        font-size:20px;
        font-family: 'Avenir Medium';
        color: ${theme.color.slateGrey};
        padding:0 0 30px;
    }
    
    .mapping-label{
        fontFamily: 'Poppins,sans-serif',
        fontWeight: 500,
        color: #707885;
        font-size:12px;
        text-transform:uppercase;
        letter-spacing:1px;
    }

    .mapping-input{
        max-width: 330px;
        width: 100%;
        padding:8px 0 0;
        input{
            box-shadow: none;
            border: none;
            border-bottom: 1px solid ${theme.color.paleBlue};
            outline: 0;
            padding:0 0 7px;
            font-family: 'Avenir Roman';
            font-size:14px;
            color:#222f42;
            width:100%;
        }
    }.mapping-textarea-section{
       padding:24px 0 0; 
    }
    .mapping-textarea{
        width:100%;
        padding-top: 11px;
        textarea{
            padding:16px 20px;
            background:${theme.color.paleGrey};
            border-radius:2px;
            height:80px;
            overflow:hidden;
            width:100%;
            box-shadow: none;
            border: none;
            outline:0;
            resize:none;
        }
        
    }
    
`;

export const MappingChart = styled.div`
  padding: 30px 0 0;
  .mapping-charts-container {
    border: 1px solid ${theme.color.paleLavender};
    border-radius: 2px;
    box-shadow: 0 4px 9px 0 rgba(34, 47, 66, 0.16);
    margin-top: 16px;
    height: 450px;
  }
  .mapping-chart-content {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .mapping-chart-left-part {
    flex: 0 0 90px;
    width: 100%;
    height: 100%;
    background: #f5faff;
  }
  .mapping-chart-right-part {
    flex: 1 1 auto;
  }
  .chat-tabs-bottom {
    padding: 9px 12px;
    border-top: 1px solid ${theme.color.paleLavender};
  }
  .chart-tabs-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }
  .chart-tabs-top {
    flex: 1 1 auto;
    overflow-y: auto;
  }
  .bottom-inner {
    display: flex;
    align-items: center;
    justify-content: center;

    .bottom-img {
      flex: 0 0 16px;
    }
    span {
      font-family: 'Avenir Roman';
      color: ${theme.color.slateGrey};
      font-size: 14px;
      padding-left: 8px;
    }
  }
  .chart-inner-item-content {
    padding: 16px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
  }
  .chart-icon {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .chart-text {
    font-family: 'Avenir Book';
    font-size: 12px;
    color: #222f42;
    padding-top: 8px;
    text-align: center;
  }
  .chart-tabs-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

export const AggregatorTabs = styled.div`
    padding:30px 0 0;
    .mapping-aggregator-tabs-container{
        border:1px solid ${theme.color.paleLavender};
        border-radius: 2px;
        box-shadow: 0 4px 9px 0 rgba(34, 47, 66, 0.16);
        max-height:312px;
        margin-top:16px;
    }
    .tabs-title{
        padding:18px 30px;
        border-bottom:1px solid ${theme.color.lightBlueGrey};
        display:flex;
        align-items:center;
    }
    .title-img{
        flex:0 0 14px;
    }
    .title-subtext{
        fontFamily: 'Poppins,sans-serif',
        color: #222f42;
        font-size:16px;
        padding-left:12px;
    }
    .tabs-content{
        width:100%;
    }
    .tabs-inner-content{
        display:flex;
        width:100%;
    }
    .tabs-left-content{
        flex:0 0 196px;
        width:100%;
        padding:25px 30px;
        border-right:1px solid ${theme.color.lightBlueGrey};
    }
    .tabs-list{
        padding:0;
        margin:0;
        list-style:none;
    }
    .tabs-right-content{
        flex:1 1 auto;
        padding:25px 30px;
    }
    .tabs-item{
        padding:10px 0;
        &:first-child{
            padding-top:0;
        }
        &:last-child{
            padding-bottom:0;
        }
        &:hover{
            .tabs-inner-text{
                color: ${theme.color.purpleishBlue};
                font-weight: 500;
            }
        }
    }
    .tabs-inner-text{
        fontFamily: 'Poppins,sans-serif',
        color: ${theme.color.slateGrey};
        font-size:14px;
        cursor:pointer;
        transition:0.3s all;
        &.active{
            color: ${theme.color.purpleishBlue};
            font-weight: 500;  
        }
    }
`;
