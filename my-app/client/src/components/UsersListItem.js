import React from "react";
import Bootstrap from "bootstrap";
import { Figure, FigureImage, FigureCaption } from 'react-bootstrap';

export default function UsersListItem(props) {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="/whale.png"
      />
      <Figure.Caption>
        NAZ
      </Figure.Caption>
    </Figure>
)};