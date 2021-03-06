import React from 'react';
import './Student.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const MainStudentPage: React.FC = () => (
  <div className="Main">
    <div className="buttonWrapper">
      <Link to="/submit">
        <Button size="large">Cross-Check: Submit</Button>
      </Link>
      <Link to="/review">
        <Button size="large">Cross-Check: Review</Button>
      </Link>
    </div>
  </div>
);

export default MainStudentPage;
