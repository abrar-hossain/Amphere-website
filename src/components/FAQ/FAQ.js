import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Who are you?</Accordion.Header>
                    <Accordion.Body>
                        LLE is a division of Educational Software Products, a small company which began in 1996 creating CD Roms for schools, businesses and educational institutions. We have always concentrated on only one area of education, EFL/ESL/ESOL, as we are experts in this field and can therefore maintain strict standards of quality control in this area. LLE was launched in 2005 and has been growing ever since, refining and expanding its content and range of services, partly through careful monitoring of developments in internet technology and mobile telephony, and also through responding to feedback and suggestions from member schools and businesses.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is life?</Accordion.Header>
                    <Accordion.Body>
                        LLE is what is called a Virtual Learning Environment, known by the acronym VLE. It is an E-Learning platform. It provides schools with a virtual library, teachers and a Director of Studies. The library has a wide range of materials for students of different levels to study, the teacher marks the materials and gives feedback to students, and the Director of Studies administers the system, gets new resources, maintains records of students’ progress and liaises between teachers, and between teachers and students.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Who write the content?</Accordion.Header>
                    <Accordion.Body>
                        All content is written from a bank of writers we have built up over the last ten years. Each member of our writing team is a practising teacher with over ten years’ experience in the classroom. Many of our writers are also Cambridge examiners.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What about monitoring progress?</Accordion.Header>
                    <Accordion.Body>
                        Every exercise that a student does is saved and logged by the system. As well as giving the bare statistics of which task the student attempted, what their result was, how long the exercise took them, and if they have attempted the exercise before, teachers or administrators can click on the exercise to see it with the student’s answers to each individual question.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>How do you mark spoken unit?</Accordion.Header>
                    <Accordion.Body>
                        Spoken units are similar to written units, in that they give students advice about structures and lexis to use in specific spoken tasks, and then they will be asked to, for example, argue with a point of view, read aloud or record half of a partially completed conversation with their own input. These recordings are then sent to us for marking. They will receive feedback on phoneme errors, word and sentence stress as well as structure and lexical mistakes.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>How much does membership cost?</Accordion.Header>
                    <Accordion.Body>
                        Our pricing depends on a number of factors: how many licences you will be purchasing, how long you will be purchasing subscriptions, and the country you are ordering from. Please contact us for a personalised quote.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Are there any other charges?</Accordion.Header>
                    <Accordion.Body>
                        No, there are no additional charges. You only pay a small amount for students to access the platform, and the rest is free. All our prices include all taxes and costs.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;