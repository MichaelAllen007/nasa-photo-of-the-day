import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #c4c2c4;
  letter-spacing: 3px;
  font-size: 30px;
  background: -webkit-linear-gradient(left, #02407d, #000000, #420063);
`;

const Date = styled.p`
  font-size: 30px;
`;

const Img = styled.img`
  border-radius: 10%;
  width: 50%;
  height: 50%;
`;

const Explanation = styled.p`
  font-size: 18px;
  width: 30rem;
  margin-left: auto;
  margin-right: auto;
`;

const Card = props => {
  return (
    <div>
      <Title>
        <h1>{props.title}</h1>
      </Title>
      <Date>
        <p>{props.date}</p>
      </Date>
      <Img src={props.imgUrl} />

      <Explanation>
        <p>{props.explanation}</p>
      </Explanation>

    </div>
  );
};

export default Card; 