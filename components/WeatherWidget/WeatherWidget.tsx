import React from 'react';
import * as Styled from './WeatherWidget.styles';
import Image from 'next/image';
import { FiDroplet, FiHome } from 'react-icons/fi';

import TextHeader from '../Typography/Header/TextHeader';
import Paragraph from '../Typography/Paragraph/Paragraph';

export interface Props {
  location: string;
  temperature: number;
  forecastDetails: string;
  humidity: number;
  iconSrc: string;
}

/**
 *@function WeatherWidget
 *@param {string} location - user location
 *@param {number} temperature - temperature in Fahrenheit
 *@param {number} humidity - humidity in %
 *@param {string} forecastDetails - text details of forecast
 *@param {string} iconSrc - source for weather icon
 *@returns {JSX.Element} - Rendered CardContent component
 */
const WeatherWidget = ({
  iconSrc,
  forecastDetails,
  humidity,
  temperature,
  location,
}: Props): JSX.Element => {
  return (
    <Styled.Container>


      <Styled.ForecastWrapper>
        <Styled.Location>
          <FiHome className={'icon'} />
          <TextHeader margin={'0'} isBold={true}>
            {location}
          </TextHeader>
        </Styled.Location>

        <Styled.Forecast>
          <Styled.Temperature>
            <p>
              {temperature}
              <span>F</span>
            </p>
          </Styled.Temperature>
          <Styled.ForecastDetails>
            <Paragraph margin={'0'}>{forecastDetails}</Paragraph>
            <Styled.Humidity>
              <FiDroplet className={'icon'} />{' '}
              <Paragraph margin={'0'}>{humidity}%</Paragraph>
            </Styled.Humidity>
          </Styled.ForecastDetails>
        </Styled.Forecast>
      </Styled.ForecastWrapper>
    </Styled.Container>
  );
};

export default WeatherWidget;
