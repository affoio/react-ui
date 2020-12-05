import { css } from 'styled-components';
import AvenirNextRegularWoff from './AvenirNext/AvenirNextRegular.woff';
import AvenirNextMediumWoff from './AvenirNext/AvenirNextMedium.woff';
import AvenirNextBoldWoff from './AvenirNext/AvenirNextBold.woff';

import AvenirNextRegularWoff2 from './AvenirNext/AvenirNextRegular.woff2';
import AvenirNextMediumWoff2 from './AvenirNext/AvenirNextMedium.woff2';
import AvenirNextBoldWoff2 from './AvenirNext/AvenirNextBold.woff2';

import AvenirNextRegularTtf from './AvenirNext/AvenirNextRegular.ttf';
import AvenirNextMediumTtf from './AvenirNext/AvenirNextMedium.ttf';
import AvenirNextBoldTtf from './AvenirNext/AvenirNextBold.ttf';

import AvenirNextRegularEot from './AvenirNext/AvenirNextRegular.eot';
import AvenirNextMediumEot from './AvenirNext/AvenirNextMedium.eot';
import AvenirNextBoldEot from './AvenirNext/AvenirNextBold.eot';

export const fontStyles = css`
      @font-face{
        font-family:"AvenirNext";
        src: url("${AvenirNextRegularEot}?#iefix");
        src: url("${AvenirNextRegularEot}?#iefix") format("eot"),
          url(${AvenirNextRegularWoff2}) format("woff2"),
          url(${AvenirNextRegularWoff}) format("woff"),
          url(${AvenirNextRegularTtf}) format("truetype");
        font-weight: normal;
    }
    @font-face{
        font-family:"AvenirNext";
        src: url("${AvenirNextMediumEot}?#iefix");
        src: url("${AvenirNextMediumEot}?#iefix") format("eot"),
          url(${AvenirNextMediumWoff2}) format("woff2"),
          url(${AvenirNextMediumWoff}) format("woff"),
          url(${AvenirNextMediumTtf}) format("truetype");
        font-weight: 500;
    }
    @font-face{
        font-family:"AvenirNext";
        src: url("${AvenirNextBoldEot}?#iefix");
        src: url("${AvenirNextBoldEot}?#iefix") format("eot"),
          url(${AvenirNextBoldWoff2}) format("woff2"),
          url(${AvenirNextBoldWoff}) format("woff"),
          url(${AvenirNextBoldTtf}) format("truetype");
        font-weight: bold;        
      }
`;
