import React, { useState } from 'react';
import { Steps } from 'antd';
import { Submission } from './types';
import { SelectTask } from './SelectTask';
import { SelectStudents } from './Students';
import { CrossCheck } from './CrossCheck';
import { ReviewAndSubmit } from './ReviewAndSubmit';
import { Success } from './Success';
import './Review.css';
import { AggregatedTask } from '../services/getTasks';

const { Step } = Steps;

const steps = ['Select Task', 'Select Student', 'Cross-check', 'Review', 'Success'];

export default function Review() {
  const [current, setCurrent] = useState(0);
  const [task, setTask] = useState<AggregatedTask>();
  const [student, setStudent] = useState<Submission>();
  const [crossCheckScore] = useState<string>('');
  const [feedback] = useState<string>('В целом работа неплохая, бла-бла-бла');

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  let content;

  switch (current) {
    case 0:
      content = <SelectTask onNext={next} onChange={setTask} selectedTask={task} mode="review" />;
      break;
    case 1:
      content = task && (
        <SelectStudents
          onNext={next}
          onBack={prev}
          selectedStudent={student}
          task={task}
          onChange={setStudent}
        />
      );
      break;
    case 2:
      content = task && <CrossCheck onNext={next} onBack={prev} task={task} />;
      break;
    case 3:
      content = task && student && (
        <ReviewAndSubmit
          onBack={prev}
          onNext={next}
          task={task}
          student={student}
          crossCheckScore={crossCheckScore}
          feedback={feedback}
        />
      );
      break;
    case 4:
      content = <Success />;
      break;
    default:
      break;
  }

  return (
    <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item} title={item} />
        ))}
      </Steps>
      <div className="steps-content">{content}</div>
    </>
  );
}
